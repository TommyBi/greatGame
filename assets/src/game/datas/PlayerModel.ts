import MusicManager from "../../framework/manager/MusicManager";
import EventDispath from "../../framework/message/EventDispath";
import { EventType } from "../../framework/message/EventType";
import MKUtils from "../../framework/tools/MkUtils";
import SortUtils from "../../framework/tools/SortUtils";
import Utils from "../../framework/tools/Utils";
import PlayerData, { orderCache } from "../datas/PlayerData";
import Global from "../consts/Global";
import ConfigManager from "../manager/ConfigManager";
import EffectManager from "../manager/EffectManager";
import ShelvePrefab, { putOnConfig } from "../view/main/ShelvePrefab";
import { storeConfig } from "../view/main/WarehousePrefab";
import SDKManager from "../../framework/manager/SDKManager";
import { fieldType, levelUp_config, level_config, propType } from "../consts/CConst";

class PlayerModel {
    private static _instance: PlayerModel;

    data: PlayerData = new PlayerData();

    static instance() {
        if (!this._instance) {

            this._instance = new PlayerModel();
        }
        return this._instance;
    }

    public auto_service_max: number = 30;//自动服务每日上限
    public once_ripe_max: number = 30;//立即成熟每日上限
    public offline_max: number = 360;//离线收益时长上限(分钟)
    public offline_min: number = 10;//离线收益最小时长(分钟)

    public luckyBg_interval: number = 3;//每X分钟会判定出现福袋
    public luckyBg_rate: number = 1;//出现福袋的概率
    public luckyBg_live_time: number = 1;//福袋持续显示分钟数
    public luckyBg_get_max: number = 10;//每日福袋领取次数上限

    public get_one_shopper_click: number = 5;//每X次点击手动招揽进场1个顾客
    public one_click_shopper_max: number = 15;//每次一键招揽进场顾客数

    public offlineLastTimestamp: number = 0;// 上次的离线收益时间戳，仅用于在登录时标记，避免被在计算收益之前频繁覆盖

    public crop_get_num = 0;//收获次数

    put_on_crop_list = [];//上架货物信息存储
    sheleveList: ShelvePrefab[] = [];
    //同步红包余额
    getUserAmount() {
        SDKManager.getUserAmount();
    }

    loadData() {
        this.data.getData();
        this.offlineLastTimestamp = this.data.offlineTimestamp;
        this.initPutCropList();
        if (this.data.orderCacheList.length <= 0) this.initOrderList();
    }
    //初始设施
    initUiCfg() {
        //--------------------------------------货架
        let type = 0;
        if (this.data.shelvesCfgList.length == 0) {
            for (let i = 0; i < ConfigManager.shelves.length; i++) {
                let item: levelUp_config = ConfigManager.shelves[i];
                let level = item.unlock_state == 1 ? 1 : 0;
                if (item.type != type) this.data.shelvesCfgList.push(level);
                type = item.type;
            }
        }
        //--------------------------------------土地
        let fieldType = 0;
        if (this.data.fieldCfgList.length == 0) {
            for (let i = 0; i < ConfigManager.field.length; i++) {
                let item: levelUp_config = ConfigManager.field[i];
                let level = item.unlock_state == 1 ? 1 : 0;
                let data = { id: item.id, type: item.type, state: item.unlock_state, cropState: 0, cropId: 0, lastTime: 0, level: level }
                if (item.type != fieldType) this.data.fieldCfgList.push(data);
                fieldType = item.type;
            }
        }

        this.initUnlockCropList();
    }
    initOrderList() {
        this.data.orderCacheList = ConfigManager.getOrderList();
    }
    //初始化解锁作物列表
    initUnlockCropList() {
        if (this.data.unlockCropList.length == 0) {
            for (let i = 0; i < ConfigManager.crop.length; i++) {
                let crop = ConfigManager.crop[i];
                if (crop.unlock == 1) {
                    this.data.unlockCropList.push(crop.id);
                }
            }
        }
    }

    getLevel() {
        return this.data.level;
    }
    setLevel() {
        this.data.level++;
    }
    /************************仓库*******************************/
    setHouseAddCrop(id, addNum) {
        let cropList = this.data.WareHouseConfig.cropList;
        let arr = cropList.filter((value, index) => {
            return value.cropId == id;
        })
        let getNum = 1;
        if (arr.length > 0) {
            arr[0].num += addNum;
        } else {
            let cfg: storeConfig = { cropId: id, num: addNum, put_on_num: 0 };
            cropList.push(cfg);
        }
        this.data.saveWareHouseData();
        console.log("*****仓库存储数值*******", this.data.WareHouseConfig);
        EventDispath.send(EventType.UPDATE_SHELVE)
    }
    //仓库当前信息
    getWarerHouseCfg() {
        return this.data.WareHouseConfig;
    }
    //仓库中拥有的数量
    getHaveNumByID(id) {
        let list = this.getWarerHouseCfg().cropList;
        let num = 0;
        let arr = list.filter((item) => {
            return item.cropId == id;
        })
        if (arr.length > 0) return arr[0].num;
        return 0;
    }
    //获取当前仓库存贮总值
    getCurrentPutNum() {
        let list = this.getWarerHouseCfg().cropList;
        let num = 0;
        list.forEach((itme) => {
            num += itme.num;
        })
        return num;
    }
    //仓库中作物减少
    reduceCrop(id) {
        let list = this.getWarerHouseCfg().cropList;
        let arr = list.filter((item) => {
            return item.cropId == id;
        })
        if (arr.length == 0) return;
        let crop = arr[0];
        crop.num--;
        crop.put_on_num--;

        if (crop.num <= 0) {
            let idx = 0;
            list.filter((item, index) => {
                if (item.cropId == crop.cropId) {
                    idx = index;
                }
            })
            list.splice(idx, 1);
        }
        this.data.saveWareHouseData();
        this.updateCurrentOrder(id);
        console.log("*****仓库存储数值*******", this.data.WareHouseConfig);
    }
    //订单完成作物减少
    orderReduceCrop(id, num) {
        let list = this.getWarerHouseCfg().cropList;
        let arr = list.filter((item) => {
            return item.cropId == id;
        })
        if (arr.length == 0) return;
        let crop = arr[0];
        crop.num -= num;
        if (crop.num < crop.put_on_num) {
            crop.put_on_num = crop.num;
        }

        if (crop.num <= 0) {
            let idx = 0;
            list.filter((item, index) => {
                if (item.cropId == crop.cropId) {
                    idx = index;
                }
            })
            list.splice(idx, 1);
        }
        this.data.saveWareHouseData();
        // this.updateCurrentOrder(id);
        console.log("*****仓库存储数值*******", this.data.WareHouseConfig);
    }
    /************************货架*******************************/

    //改变货架等级
    changeShelveSkin(index, level) {
        this.data.uiConfig.shelvesList[index] = level;
        this.saveData();
        EventDispath.send(EventType.SHELVE_LEVEL_UPDATE, index)
    }
    //初始化上架作物列表
    initPutCropList() {
        let shelveArr = this.data.uiConfig.shelvesList.filter((id) => {
            return id != 0;
        })

        let list = this.getWarerHouseCfg().cropList
        list.filter((item, index) => {
            item.put_on_num = 0;
        })
        let shelveNum = shelveArr.length;
        let cropList = [];
        for (let i = 0; i < shelveNum; i++) {
            cropList.push(this.getRandomCrop(4))
        }
        console.log("上架数据：", cropList);
        this.put_on_crop_list = cropList;
    }
    /**
     * 随机获取仓库中的作物上架数组
     * @param num 所需上架数量
     * @returns 
     */
    getRandomCrop(num) {
        let list = this.getWarerHouseCfg().cropList

        let arr = list.filter((item, index) => {
            return item.num - item.put_on_num > 0
        })
        if (arr.length == 0) return [];
        let crop = Utils.getRandomByArr(arr);
        if (crop.num - crop.put_on_num >= num) {
            let arr1: putOnConfig[] = [{ cropId: crop.cropId, put_on_num: num }]
            crop.put_on_num += num;
            return arr1;
        }
        let len = crop.num - crop.put_on_num;
        let arr2: putOnConfig[] = [{ cropId: crop.cropId, put_on_num: crop.num - crop.put_on_num }]
        crop.put_on_num += crop.num - crop.put_on_num;
        return arr2.concat(this.getRandomCrop(num - len));

    }
    /**
     * 
     * @returns 获取单独需要上架作物
     */
    getOneCrop() {
        let list = this.getWarerHouseCfg().cropList

        let arr = list.filter((item, index) => {
            return item.num - item.put_on_num > 0
        })
        if (arr.length == 0) return null;
        let crop = Utils.getRandomByArr(arr);
        crop.put_on_num += 1;
        return crop;
    }
    //根据索引获取对应货架
    getSheleveInfoByIndex(index) {
        return this.sheleveList[index];
    }
    /************************头部钱，钞票，满意度*******************************/
    initMoney(value) {
        this.data.money = value;
        EventDispath.send(EventType.UPDATE_MONEY);
    }
    /**
     * 
     * @param value 当前钱数（SDK获取，增加的数值）
     * @param add 
     */
    setMoney(value, add, startPoint = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2)) {
        this.data.money = value;

        EffectManager.playCoinFly(startPoint, 1, add)
    }
    getMoney() {
        return this.data.money;
    }
    //钞票
    setGold(value, parentType = 0, startPoint?) {
        if (value > 0) {
            if (!startPoint) startPoint = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
            if (parentType) EffectManager.playEffFly(startPoint, 2, value)
            else EffectManager.playCoinFly(startPoint, 2, value)

        }
        else EventDispath.send(EventType.UPDATE_GOLD, value);
    }
    changeGold(value) {
        this.data.gold += value;
        this.saveData();
    }
    getGold() {
        return this.data.gold;
    }
    //幸福指数
    setXfzs(num, startPoint?) {
        this.data.xfzs += num;
        if (!startPoint) startPoint = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
        EffectManager.playCoinFly(startPoint, 3, num)
        // EventDispath.send(EventType.UPDATE_XFZS, num);
        this.saveData();
    }
    getXfzs() {
        this.data.xfzs = Number(this.data.xfzs.toFixed(2))
        return this.data.xfzs;
    }
    /*
     * 获取当前最新解锁植物ID
     * @return 如果什么都没解锁，则返回-1；
     */
    getNewCrop() {
        SortUtils.insertSort(this.data.unlockCropList);
        // console.log("种菜面板解锁列表", this.data.unlockCropList);

        // let len = this.data.unlockCropList.length;
        // if (len == 0) return -1;
        let order = this.getCurrentOrder();
        if (order) {
            let list = [];
            for (let i = 0; i < order.cropList.length; i++) {
                let item = order.cropList[i];
                if (item.cropId != 100) {
                    list.push(item.cropId);
                }
            }
            return Utils.getRandomByArr(list);

        }
        return Utils.getRandomByArr(this.data.unlockCropList);
    }
    //解锁新作物
    setNewCrop(id) {
        this.data.unlockCropList.push(id);
        this.saveData();
    }
    //获得已解锁作物列表
    getUnlockCrop() {
        return this.data.unlockCropList;
    }
    //检测是否解锁
    checkCropUnlock(id) {
        let arr = this.data.unlockCropList.filter((idx, index) => {
            return id == idx;
        })
        if (arr.length > 0) return true;
        return false;
    }



    setSoundSwitch(val) {
        this.data.soundSwitch = val;
        MusicManager.initMusic();
        this.saveData();
    }
    setSoundYinXiaoSwitch(v) {
        this.data.soundYinXiao = v;
        MusicManager.initMusic();
        this.saveData();
    }
    getSoundYinXiaoSwitch() {
        return this.data.soundYinXiao;
    }
    getPersonRecommSwitch() {
        return this.data.personRecommSwitch;
    }
    SetPersonRecommSwitch(v) {
        this.data.personRecommSwitch = v;
        this.saveData();
    }

    //获取菜地列表
    getFieldListCfg() {
        return this.data.fieldCfgList;
    }
    //改变菜地等级
    changeFieldSkin(index, level) {
        let cfg = this.data.fieldCfgList[index];
        cfg.state = 1;
        cfg.level = level;
        cfg.id = cfg.type * 10 + level;
        this.saveData();
        EventDispath.send(EventType.FIELD_LEVEL_UPDATE, index)
    }
    //作物收获次数
    getCropGetNum() {
        return this.data.cropGetNum;
    }
    setCropGetNum(value) {
        this.data.cropGetNum += value;
        this.saveData();
    }
    // 成熟次数
    getCropRipetimes() {
        return this.data.cropRipetimes;
    }
    setCropRipetimes() {
        this.data.cropRipetimes++;
        this.saveData();
    }
    //重置成熟次数
    resetCropRipeTimes() {
        this.data.cropRipetimes = 0;
        this.saveData();
    }
    get pestNum() {
        return this.data.pestNum;
    }
    set pestNum(value) {
        this.data.pestNum = value;
        if (this.data.pestNum < 2) {
            this.resetCropRipeTimes();
        }
        this.saveData();
    }
    //更新种植次数
    setPlantNumById(id) {
        let arr = this.data.plantNumList.filter((item) => {
            return item.id == id;
        })
        if (arr.length > 0) {
            arr[0].num += 1;
        } else {
            this.data.plantNumList.push({ id: id, num: 1 })
        }
        this.data.savePlantNum();

    }
    //获得种植次数
    getPlantNumById(id) {
        let arr = this.data.plantNumList.filter((item) => {
            return item.id == id;
        })
        if (arr.length > 0) return arr[0].num;

        return 0;
    }
    /************************自动结账*******************************/
    //  收银台自动产出
    set cashierGold(value) {
        this.data.cashierGold += value;
        this.data.setCashierGold();
    }
    get cashierGold() {
        return this.data.cashierGold;
    }
    //获取收银台加倍剩余时间
    getAddLastTime() {
        return this.data.cashierAddTime;
    }
    setAddLastTime(value) {
        this.data.cashierAddTime = value;
        this.saveData();
    }
    //设置自动结账数据
    // setIsAutoSell(autoCfg?) {
    //     if (autoCfg) this.data.autoCfg = autoCfg;
    //     this.data.setIsAuto();
    // }
    // setIsAutoOfflineTime(value) {
    //     this.data.autoCfg.time = value;
    //     this.setIsAutoSell();
    // }
    // setIsAuto(value) {
    //     this.data.autoCfg.isAuto = value;
    //     this.setIsAutoSell();
    // }
    // setAutoLastTime(time) {
    //     this.data.autoCfg.lastTime = time;
    //     this.setIsAutoSell();
    // }
    /************************引导任务*******************************/
    getGuideTaskCfg() {
        return this.data.guideTaskCfg;
    }
    //引导任务增加
    setGuideTaskId() {
        // SDKManager.onEvent(Global.EVENT_ACTION.client_guide_task)
        this.data.guideTaskCfg.taskId++;
        this.data.guideTaskCfg.taskState = 0;
        this.saveData();
    }
    changeGuideTaskState(state) {
        this.data.guideTaskCfg.taskState = state;
        this.saveData();

    }

    saveData() {
        this.data.saveData();
        this.data.saveUiData();
    }
    saveUiData() {
        this.data.saveUiData();
    }
    resetData() {
        this.data.resetData();
    }
    getSoundSwitch() {
        return this.data.soundSwitch;
    }
    getUIConfig() {
        return this.data.uiConfig;
    }
    setUiLv(index) {
        switch (index) {
            case 0:
                this.data.uiConfig.cashierlv++;
                EventDispath.send(EventType.CHANGE_CASHIER);
                break;
            case 1:
                this.data.uiConfig.pipelv++;
                EventDispath.send(EventType.CHANGE_PIPE);
                break;
            case 2:
                this.data.uiConfig.walllv++;
                EventDispath.send(EventType.CHANGE_WALL);
                break;
            case 3:
                this.data.uiConfig.roadlv++;
                EventDispath.send(EventType.CHANGE_ROAD);
                break;
            case 4:
                this.data.uiConfig.scarecrowlv++;
                EventDispath.send(EventType.CHANGE_SCARECROW);
                break;
            case 5:
                this.data.uiConfig.warehouselv++;
                EventDispath.send(EventType.CHANGE_WAREHOUSE);
                break;
            case 6:
                this.data.uiConfig.fencelv++;
                EventDispath.send(EventType.CHANGE_FENCE);
                break;
        }
        this.saveUiData();
    }
    /** 获取解锁的设施列表 */
    getUnlockProps(): number[] {
        return this.data.hasProps;
    }

    /*
     * 解锁设施 注意这里存的是拼好的完整的id，是唯一的id,不是1、2、3、4、5、6、7 
     * @param id: 完整的唯一索引id 如101、201、301
     */
    unlockProps(id: number) {
        this.getUnlockProps().push(id);
    }
    /************************设施加成*******************************/
    //护栏行走速度加成
    getSpeedAdd() {
        let cfg = ConfigManager.getPropById(propType.fence, this.getUIConfig().fencelv);
        return cfg.add_num / 100;
    }
    //土地加成，减少作物成熟时间
    getTimeAdd(type, level) {
        if (this.getUIConfig().pipelv == 0) return 0;
        let cfg = ConfigManager.getFieldCfgByType(type, level);
        return cfg.add_num / 100;
    }
    //保存升级看视频次数
    saveLvupVideoNum(key, num) {
        this.data.lvUp_video_num[key] = num;
        this.data.saveLvupVideoNum();
    }
    getLvupVideoNum(key) {
        let num = 0;
        if (this.data.lvUp_video_num[key]) num = this.data.lvUp_video_num[key];
        return num;
    }
    //是否当天第一次除虫
    get isFirstClearPest() {
        return this.data.isFirstClearPest;
    }
    set isFirstClearPest(value) {
        this.data.isFirstClearPest = value;
        this.saveData();
    }

    /**
    * 用于标记当前的时间，便于下次进行计算离线时长，在心跳方法中进行更新 
    * this.offlineLastTimestamp 只要被读取，就唯一作为当前离线收益的计算时间戳了，游戏过程中不会被不小心覆盖，且绝对有值，如果尚未读取上次时间的情况下也不允许刷新覆盖掉上次的历史时间，保证了上次时间的准确使用，进而保证了离线收益时间的计算准确度
    */
    setOfflineTimestamp() {
        // 防止还没读取上次离线时间 就被心跳更新时间戳的方式给覆盖掉了，导致上次最后的游戏时间戳读取不到了
        if (this.offlineLastTimestamp == -1) return;

        let time = SDKManager.getServerTime();

        this.data.offlineTimestamp = Math.floor(time / 1000);
        this.data.saveOfflineTimestamp();
    }
    /** 读取离线收益时间戳 */
    getOfflineTimestamp(): number {
        return this.offlineLastTimestamp;
    }
    //订单中心
    getOrderList() {
        return this.data.orderCacheList;
    }
    get orderLen() {
        return this.data.orderUnlockLen;
    }
    set orderLen(value) {
        this.data.orderUnlockLen = value;
        this.setOrder();
    }
    get orderVideoNum() {
        return this.data.orderVideoNum;
    }
    set orderVideoNum(value) {
        this.data.orderVideoNum = value;
        this.setOrder();
    }
    setOrder() {
        this.data.orderCacheList.sort((a, b) => {
            return b.state - a.state;
        })
        this.data.saveOrder();
    }
    //接单后根据仓库库存更新当前订单数量
    updateOrder() {
        let order = this.getCurrentOrder();

        let list1 = this.getWarerHouseCfg().cropList;
        for (let i = 0; i < list1.length; i++) {
            let item = list1[i];
            this.checkAddOrder(item.cropId, item.num);
        }
    }
    //卖出物品更新订单
    updateCurrentOrder(id) {
        let order = this.getCurrentOrder();
        if (order) {
            let list = order.cropList;
            // let stateList = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].cropId == id) {
                    list[i].num -= 1;
                }
            }
        }
        this.data.saveOrder();
        EventDispath.send(EventType.ORDER_UPDATE_TOP)
    }
    //增加作物
    checkAddOrder(id, num, completeFun?, callBack?) {
        let order = this.getCurrentOrder();
        if (!order) {
            if (callBack) callBack();
            return;
        }
        let list = order.cropList;
        // let stateList = [];
        let completeLen = 0;
        for (let i = 0; i < list.length; i++) {
            if (list[i].cropId == id) {
                list[i].num += num;
            }
            if (list[i].num >= list[i].target) {
                // stateList.push(1)
                completeLen += 1;
            } else {
                // stateList.push(0)
            }
        }
        EventDispath.send(EventType.ORDER_UPDATE_TOP)
        this.setOrder();
        if (completeLen == list.length) {
            if (completeFun) completeFun();
        } else {
            if (callBack) callBack();
        }
    }
    //检测订单是否完成
    checkOrderComplete() {
        let order = this.getCurrentOrder();
        if (order) {

            let list = order.cropList;
            let completeLen = 0;
            for (let i = 0; i < list.length; i++) {
                if (list[i].num >= list[i].target) {
                    completeLen += 1;
                }
            }
            if (completeLen == list.length) return true;
        }

        return false;
    }
    haveOrder() {
        let order = this.getCurrentOrder();
        if (order) return true;

        return false;
    }
    //当前订单
    getCurrentOrder() {
        let order: orderCache;
        for (let i = 0; i < this.data.orderCacheList.length; i++) {
            let item = this.data.orderCacheList[i];
            if (item.state == 1) {
                order = item;
            }
        }
        return order;
    }
    //当前订单中的随机作物
    getCurrentOrderCrop() {
        let order = this.getCurrentOrder();
        let cropList = [];
        if (order) {
            let list = order.cropList;
            // let stateList = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].cropId < 100) {
                    cropList.push(list[i].cropId);
                    if (list[i].num >= list[i].target) {
                        return list[i].cropId;
                    }
                }
            }
        }
        if (cropList.length > 0) {
            return Utils.getRandomByArr(cropList)
        }

        return Utils.getRandomByArr(this.data.unlockCropList);
    }


    get guideState() {
        return this.data.guideState;
    }
    set guideState(value) {
        this.data.guideState = value;
        this.data.saveGuide();
    }
    get guideStep() {
        return this.data.guideStep;
    }
    set guideStep(value) {
        this.data.guideStep += value;
    }

    //每日自动招揽人数
    addDayAutoRoleNum() {
        this.data.dayAutoRoleNum++;
    }
    //每日自动招揽时间间隔
    getAutoRoleTime() {
        if (this.data.dayAutoRoleNum < 11) {
            return 10;
        } else if (this.data.dayAutoRoleNum < 31) {
            return 15;
        } else {
            return 20;
        }
    }

    get zdGkNum() {
        return this.data.zdGkNum;
    }
    set zdGkNum(value) {
        this.data.zdGkNum = value;
        this.data.saveZlNum();
    }
    //手动招揽次数
    setZlNum(value) {
        this.data.zhaolanNum = value;
        this.data.saveZlNum();
    }
    getZlNum() {
        return this.data.zhaolanNum;
    }
}

export default PlayerModel.instance();

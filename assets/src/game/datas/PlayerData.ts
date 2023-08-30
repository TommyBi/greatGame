import StorageHelper from "../../framework/helper/StorageHelper";
import MKUtils from "../../framework/tools/MkUtils";
import SortUtils from "../../framework/tools/SortUtils";
import Utils from "../../framework/tools/Utils";
import Global from "../consts/Global";
import StorageType from "../consts/StorageType";
import { FieldConfig } from "../view/main/FieldPrefab";
import { WareHouseConfig } from "../view/main/WarehousePrefab";

export interface UIConfig {
    roadlv: number,
    walllv: number,
    cashierlv: number,
    pipelv: number,
    fencelv: number,
    warehouselv: number,
    scarecrowlv: number,
    shelvesList: number[],
    // fieldList: FieldConfig[],
}
export interface guideTaskCfg {
    taskId: number,
    taskState: number
}
//设施配置
export interface prop_config {
    type,
    level
}
//种植次数
export interface plantNum {
    id,
    num
}
//订单缓存
export interface orderCache {
    quality,
    id,
    index,
    unlock,//是否解锁0,1
    state,//是否接单0,1
    cropList,
    time
}

export default class PlayerData {
    public level: number = 1;
    public money: number = 0;//红包钱币数量
    public gold: number = 1000;//钞票数量
    public xfzs: number = 30;//幸福指数

    public dayAutoRoleNum = 0;//每天自动招揽人数

    soundSwitch: number = Global.SOUND_SWITCH_OPEN;//音乐 1开启0关闭
    soundYinXiao: number = Global.SOUND_YINXIAO_SWITCH_OPEN;//音效 1开启0关闭
    personRecommSwitch: number = Global.PERSONALRECOMM_SWITCH_OPEN;// 个性推荐开关 1开启0关闭
    offlineTimestamp: number = Math.floor(new Date().getTime() / 1000);// 存储玩游戏的时间戳

    guideTaskCfg: guideTaskCfg = {
        taskId: 1,
        taskState: 0//0未完成，1可领取
    }
    cropRipetimes: number = 0;//作物成熟次数
    cropGetNum = 0;//作物收获次数
    pestNum = 0;//有害虫的地块数量

    unlockCropList = [];//已解锁作物列表
    uiConfig: UIConfig;
    //初始UI配置
    initUIConfig: UIConfig = {
        roadlv: 1,
        walllv: 1,
        cashierlv: 1,
        pipelv: 1,
        fencelv: 1,
        warehouselv: 1,
        scarecrowlv: 1,
        shelvesList: [],
        // fieldList: []
    }
    //初始菜地配置
    fieldCfgList: FieldConfig[] = [
    ]
    //初始货架配置
    shelvesCfgList = [
    ]

    plantNumList: plantNum[] = []

    //仓库配置
    WareHouseConfig: WareHouseConfig = {
        lv: 1,
        cropList: [
        ]
    };

    cashierAddTime = 0;
    // propList: prop_config[] = [

    // ]

    // 已经持有的prop 当前已经持有的propId,包含prop的所有type
    hasProps: number[] = [];

    // 已经持有的货架id列表
    hasShelves: number[] = [1];

    // 每日使用自助服务的剩余次数，默认上限是30次，每日0点进行次数进行刷新
    // 当前的日期，用于判断是否需要重置自助服务剩余次数
    curDay: number = MKUtils.calculNowDayStartTimeStamp();

    guideState = 0;//新手引导状态，1是完成
    guideStep = 0;//新手引导步骤

    zhaolanNum = 0;

    cashierGold = 0;//收银台产出金币

    lvUp_video_num = {}//升级看视频次数，key值为物品ID

    isFirstClearPest = true;//当日是否第一次除虫
    //订单相关数据缓存
    orderUnlockLen = 2;
    orderVideoNum = 0;//接单期间看视频数量

    public zdGkNum = 0;//招待顾客次数
    orderCacheList: orderCache[] = [

    ]

    saveData() {
        let sdata = {
            gold: this.gold,
            soundSwitch: this.soundSwitch,
            soundYinXiao: this.soundYinXiao,
            personRecommSwitch: this.personRecommSwitch,
            hasProps: this.hasProps,
            hasShelves: this.hasShelves,
            guideTaskCfg: this.guideTaskCfg,
            curDay: this.curDay,
            unlockCropList: this.unlockCropList,

            dayAutoRoleNum: this.dayAutoRoleNum,
            cropRipetimes: this.cropRipetimes,
            pestNum: this.pestNum,
            xfzs: this.xfzs,
            isFirstClearPest: this.isFirstClearPest,
            cropGetNum: this.cropGetNum,
        };
        // console.log("PlayerData->setData->data is ",JSON.stringify(sdata));
        StorageHelper.saveJsonByKey(StorageType.gameData, sdata);
        this.saveUiData();
    }
    //收银台自动产出
    setCashierGold() {

        let data = {
            cashierGold: this.cashierGold,
            cashierAddTime: this.cashierAddTime,
        }
        StorageHelper.saveJsonByKey(StorageType.cashierGold, data);
    }
    //种植次数存储
    savePlantNum() {
        let data = {
            plantNum: this.plantNumList
        }
        StorageHelper.saveJsonByKey(StorageType.plantNum, data);
    }
    //订单缓存
    saveOrder() {
        let data = {
            orderUnlockLen: this.orderUnlockLen,
            orderVideoNum: this.orderVideoNum,
            orderCacheList: this.orderCacheList
        }
        StorageHelper.saveJsonByKey(StorageType.order, data);
    }
    //招揽人数
    saveZlNum() {
        let data = {
            zhaolanNum: this.zhaolanNum,
            zdGkNum:this.zdGkNum
        }
        StorageHelper.saveJsonByKey(StorageType.zlNum, data);
    }
    //保存引导数据
    saveGuide() {
        let data = {
            guideState: this.guideState,
        }
        StorageHelper.saveJsonByKey(StorageType.guide, data);
    }
    //ui数据
    saveUiData() {
        let data = {
            fieldCfgList: this.fieldCfgList,
            uiConfig: this.uiConfig,
        }
        StorageHelper.saveJsonByKey(StorageType.uiCionfig, data);
    }
    //仓库数据存储
    saveWareHouseData() {
        let data = {
            WareHouseConfig: this.WareHouseConfig
        }

        StorageHelper.saveJsonByKey(StorageType.wareHouse, data);
    }
    //升级观看视频次数
    saveLvupVideoNum() {
        StorageHelper.saveJsonByKey(StorageType.lvUpVideoNum, this.lvUp_video_num);
    }
    /** 存离线收益的时间戳 */
    saveOfflineTimestamp() {
        StorageHelper.saveJsonByKey(StorageType.offlineTimestamp, { offlineTimestamp: this.offlineTimestamp });
        // cc.log(`[debug] save storage data of offlineTimestamp:`, { offlineTimestamp: this.offlineTimestamp });
    }

    /** 取离线收益的缓存时间戳 */
    getOfflineTimestampData() {
        let data = StorageHelper.getJsonByKey(StorageType.offlineTimestamp);
        cc.log(`[debug] get storage data of offlineTimestamp:`, data);
        if (data == null) {
            this.offlineTimestamp = this.offlineTimestamp;
        } else {
            this.offlineTimestamp = Utils.isUndefined(data.offlineTimestamp) ? this.offlineTimestamp : data.offlineTimestamp;
        }
    }

    getData() {
        this.getGuide();
        this.getOfflineTimestampData();

        let data = StorageHelper.getJsonByKey(StorageType.gameData);
        cc.log("debug:缓存数据：", data);
        if (data && this.guideState) {
            this.gold = Utils.isUndefined(data.gold) ? this.gold : data.gold;
            this.xfzs = Utils.isUndefined(data.xfzs) ? this.xfzs : data.xfzs;
            this.soundSwitch = Utils.isUndefined(data.soundSwitch) ? this.soundSwitch : data.soundSwitch;
            this.soundYinXiao = Utils.isUndefined(data.soundYinXiao) ? this.soundYinXiao : data.soundYinXiao;
            this.personRecommSwitch = Utils.isUndefined(data.personRecommSwitch) ? this.personRecommSwitch : data.personRecommSwitch;

            this.unlockCropList = Utils.isUndefined(data.unlockCropList) ? this.unlockCropList : data.unlockCropList;
            this.hasProps = Utils.isUndefined(data.hasProps) ? [] : data.hasProps;
            this.hasShelves = Utils.isUndefined(data.hasShelves) ? [] : data.hasShelves;
            this.guideTaskCfg = Utils.isUndefined(data.guideTaskCfg) ? this.guideTaskCfg : data.guideTaskCfg;

            this.curDay = Utils.isUndefined(data.curDay) ? this.curDay : data.curDay;

            this.cropRipetimes = Utils.isUndefined(data.cropRipetimes) ? this.cropRipetimes : data.cropRipetimes;
            this.pestNum = Utils.isUndefined(data.pestNum) ? this.pestNum : data.pestNum;
            this.cropGetNum = Utils.isUndefined(data.cropGetNum) ? this.cropGetNum : data.cropGetNum;

            this.guideState = Utils.isUndefined(data.guideState) ? this.guideState : data.guideState;
            let day1 = new Date().getDay();
            let day2 = new Date(this.offlineTimestamp * 1000).getDay();
            if (day1 == day2) {
                this.isFirstClearPest = Utils.isUndefined(data.isFirstClearPest) ? this.isFirstClearPest : data.isFirstClearPest;
                this.dayAutoRoleNum = Utils.isUndefined(data.autoRoleNum) ? this.dayAutoRoleNum : data.dayAutoRoleNum;
            } else {
                this.isFirstClearPest = true;
                this.dayAutoRoleNum = 0;
            }

            SortUtils.insertSort(this.unlockCropList);
        } else {
            this.hasProps = [];
            this.hasShelves = [];
        }
        this.getUiData();
        this.getWareData();
        this.getZlNum();
        this.getCashierNum();
        this.getPlantNum();
        this.getLvupVideo();
        this.getOrder();

        if (Global.isCeshi_version) {
            this.guideState = 1;
        }

    }
    //每日收银台产出
    getCashierNum() {
        let data = StorageHelper.getJsonByKey(StorageType.cashierGold);
        let day1 = new Date().getDay();
        let day2 = new Date(this.offlineTimestamp * 1000).getDay();
        if (data) this.cashierAddTime = Utils.isUndefined(data.cashierAddTime) ? this.cashierAddTime : data.cashierAddTime;
        if (day1 == day2) {
            if (data) {
                this.cashierGold = Utils.isUndefined(data.cashierGold) ? this.cashierGold : data.cashierGold;
            } else {
                this.cashierGold = this.cashierGold;
            }
            // this.cashierGold = Utils.isUndefined(data.cashierGold) ? this.cashierGold : data.cashierGold;
        } else {
            this.cashierGold = 0;
        }
    }
    getZlNum() {
        let data = StorageHelper.getJsonByKey(StorageType.zlNum);
        if (data && this.guideState) {
            this.zhaolanNum = Utils.isUndefined(data.zhaolanNum) ? this.zhaolanNum : data.zhaolanNum;
            this.zdGkNum = Utils.isUndefined(data.zdGkNum) ? this.zdGkNum : data.zdGkNum;
        } else {
            this.zhaolanNum = this.zhaolanNum;
            this.zdGkNum = this.zdGkNum;
        }
    }
    getOrder() {
        let data = StorageHelper.getJsonByKey(StorageType.order);
        if (data && this.guideState) {
            this.orderUnlockLen = Utils.isUndefined(data.orderUnlockLen) ? this.orderUnlockLen : data.orderUnlockLen;
            this.orderCacheList = Utils.isUndefined(data.orderCacheList) ? this.orderCacheList : data.orderCacheList;
            this.orderVideoNum = Utils.isUndefined(data.orderVideoNum) ? this.orderVideoNum : data.orderVideoNum;
        } else {
            this.orderCacheList = this.orderCacheList;
            this.orderUnlockLen = this.orderUnlockLen;
        }
        this.orderCacheList.sort((a, b) => {
            return b.state - a.state;
        })
    }
    //种植次数
    getPlantNum() {
        let data = StorageHelper.getJsonByKey(StorageType.plantNum);
        if (data && this.guideState) {
            this.plantNumList = Utils.isUndefined(data.plantNum) ? this.plantNumList : data.plantNum;
        } else {
            this.plantNumList = [];
        }
    }
    getUiData() {
        let data = StorageHelper.getJsonByKey(StorageType.uiCionfig);
        if (data && this.guideState) {
            this.uiConfig = Utils.isUndefined(data.uiConfig) ? this.initUIConfig : data.uiConfig;
            this.fieldCfgList = Utils.isUndefined(data.fieldCfgList) ? this.fieldCfgList : data.fieldCfgList;
        } else {
            this.uiConfig = this.initUIConfig;
            this.uiConfig.shelvesList = this.shelvesCfgList;
            this.fieldCfgList = this.fieldCfgList;
        }
        cc.log("[debug] 记录的uiConfig:", this.uiConfig);
    }
    //仓库数据
    getWareData() {
        let data = StorageHelper.getJsonByKey(StorageType.wareHouse);
        if (data && this.guideState) {
            this.WareHouseConfig = Utils.isUndefined(data.WareHouseConfig) ? this.WareHouseConfig : data.WareHouseConfig;
        } else {
            this.WareHouseConfig = this.WareHouseConfig;
        }

        let list = this.WareHouseConfig.cropList;
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            item.put_on_num = 0;
        }

    }
    //升级观看视频次数
    getLvupVideo() {
        let data = StorageHelper.getJsonByKey(StorageType.lvUpVideoNum);
        if (data && this.guideState) {
            this.lvUp_video_num = Utils.isUndefined(data) ? this.lvUp_video_num : data;
        } else {
            this.lvUp_video_num = {};
        }
    }
    //引导数据
    getGuide() {
        let data = StorageHelper.getJsonByKey(StorageType.guide);
        if (data) {
            this.guideState = Utils.isUndefined(data.guideState) ? this.guideState : data.guideState;
        }
    }
    resetData() {
        this.saveData();
    }
}
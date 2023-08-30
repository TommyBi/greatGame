"use strict";
cc._RF.push(module, 'b6565X/qIRN8Yc8PKbNL1Ju', 'PlayerModel');
// src/game/datas/PlayerModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicManager_1 = require("../../framework/manager/MusicManager");
var EventDispath_1 = require("../../framework/message/EventDispath");
var EventType_1 = require("../../framework/message/EventType");
var SortUtils_1 = require("../../framework/tools/SortUtils");
var Utils_1 = require("../../framework/tools/Utils");
var PlayerData_1 = require("../datas/PlayerData");
var ConfigManager_1 = require("../manager/ConfigManager");
var EffectManager_1 = require("../manager/EffectManager");
var SDKManager_1 = require("../../framework/manager/SDKManager");
var CConst_1 = require("../consts/CConst");
var PlayerModel = /** @class */ (function () {
    function PlayerModel() {
        this.data = new PlayerData_1.default();
        this.auto_service_max = 30; //自动服务每日上限
        this.once_ripe_max = 30; //立即成熟每日上限
        this.offline_max = 360; //离线收益时长上限(分钟)
        this.offline_min = 10; //离线收益最小时长(分钟)
        this.luckyBg_interval = 3; //每X分钟会判定出现福袋
        this.luckyBg_rate = 1; //出现福袋的概率
        this.luckyBg_live_time = 1; //福袋持续显示分钟数
        this.luckyBg_get_max = 10; //每日福袋领取次数上限
        this.get_one_shopper_click = 5; //每X次点击手动招揽进场1个顾客
        this.one_click_shopper_max = 15; //每次一键招揽进场顾客数
        this.offlineLastTimestamp = 0; // 上次的离线收益时间戳，仅用于在登录时标记，避免被在计算收益之前频繁覆盖
        this.crop_get_num = 0; //收获次数
        this.put_on_crop_list = []; //上架货物信息存储
        this.sheleveList = [];
    }
    PlayerModel.instance = function () {
        if (!this._instance) {
            this._instance = new PlayerModel();
        }
        return this._instance;
    };
    //同步红包余额
    PlayerModel.prototype.getUserAmount = function () {
        SDKManager_1.default.getUserAmount();
    };
    PlayerModel.prototype.loadData = function () {
        this.data.getData();
        this.offlineLastTimestamp = this.data.offlineTimestamp;
        this.initPutCropList();
        if (this.data.orderCacheList.length <= 0)
            this.initOrderList();
    };
    //初始设施
    PlayerModel.prototype.initUiCfg = function () {
        //--------------------------------------货架
        var type = 0;
        if (this.data.shelvesCfgList.length == 0) {
            for (var i = 0; i < ConfigManager_1.default.shelves.length; i++) {
                var item = ConfigManager_1.default.shelves[i];
                var level = item.unlock_state == 1 ? 1 : 0;
                if (item.type != type)
                    this.data.shelvesCfgList.push(level);
                type = item.type;
            }
        }
        //--------------------------------------土地
        var fieldType = 0;
        if (this.data.fieldCfgList.length == 0) {
            for (var i = 0; i < ConfigManager_1.default.field.length; i++) {
                var item = ConfigManager_1.default.field[i];
                var level = item.unlock_state == 1 ? 1 : 0;
                var data = { id: item.id, type: item.type, state: item.unlock_state, cropState: 0, cropId: 0, lastTime: 0, level: level };
                if (item.type != fieldType)
                    this.data.fieldCfgList.push(data);
                fieldType = item.type;
            }
        }
        this.initUnlockCropList();
    };
    PlayerModel.prototype.initOrderList = function () {
        this.data.orderCacheList = ConfigManager_1.default.getOrderList();
    };
    //初始化解锁作物列表
    PlayerModel.prototype.initUnlockCropList = function () {
        if (this.data.unlockCropList.length == 0) {
            for (var i = 0; i < ConfigManager_1.default.crop.length; i++) {
                var crop = ConfigManager_1.default.crop[i];
                if (crop.unlock == 1) {
                    this.data.unlockCropList.push(crop.id);
                }
            }
        }
    };
    PlayerModel.prototype.getLevel = function () {
        return this.data.level;
    };
    PlayerModel.prototype.setLevel = function () {
        this.data.level++;
    };
    /************************仓库*******************************/
    PlayerModel.prototype.setHouseAddCrop = function (id, addNum) {
        var cropList = this.data.WareHouseConfig.cropList;
        var arr = cropList.filter(function (value, index) {
            return value.cropId == id;
        });
        var getNum = 1;
        if (arr.length > 0) {
            arr[0].num += addNum;
        }
        else {
            var cfg = { cropId: id, num: addNum, put_on_num: 0 };
            cropList.push(cfg);
        }
        this.data.saveWareHouseData();
        console.log("*****仓库存储数值*******", this.data.WareHouseConfig);
        EventDispath_1.default.send(EventType_1.EventType.UPDATE_SHELVE);
    };
    //仓库当前信息
    PlayerModel.prototype.getWarerHouseCfg = function () {
        return this.data.WareHouseConfig;
    };
    //仓库中拥有的数量
    PlayerModel.prototype.getHaveNumByID = function (id) {
        var list = this.getWarerHouseCfg().cropList;
        var num = 0;
        var arr = list.filter(function (item) {
            return item.cropId == id;
        });
        if (arr.length > 0)
            return arr[0].num;
        return 0;
    };
    //获取当前仓库存贮总值
    PlayerModel.prototype.getCurrentPutNum = function () {
        var list = this.getWarerHouseCfg().cropList;
        var num = 0;
        list.forEach(function (itme) {
            num += itme.num;
        });
        return num;
    };
    //仓库中作物减少
    PlayerModel.prototype.reduceCrop = function (id) {
        var list = this.getWarerHouseCfg().cropList;
        var arr = list.filter(function (item) {
            return item.cropId == id;
        });
        if (arr.length == 0)
            return;
        var crop = arr[0];
        crop.num--;
        crop.put_on_num--;
        if (crop.num <= 0) {
            var idx_1 = 0;
            list.filter(function (item, index) {
                if (item.cropId == crop.cropId) {
                    idx_1 = index;
                }
            });
            list.splice(idx_1, 1);
        }
        this.data.saveWareHouseData();
        this.updateCurrentOrder(id);
        console.log("*****仓库存储数值*******", this.data.WareHouseConfig);
    };
    //订单完成作物减少
    PlayerModel.prototype.orderReduceCrop = function (id, num) {
        var list = this.getWarerHouseCfg().cropList;
        var arr = list.filter(function (item) {
            return item.cropId == id;
        });
        if (arr.length == 0)
            return;
        var crop = arr[0];
        crop.num -= num;
        if (crop.num < crop.put_on_num) {
            crop.put_on_num = crop.num;
        }
        if (crop.num <= 0) {
            var idx_2 = 0;
            list.filter(function (item, index) {
                if (item.cropId == crop.cropId) {
                    idx_2 = index;
                }
            });
            list.splice(idx_2, 1);
        }
        this.data.saveWareHouseData();
        // this.updateCurrentOrder(id);
        console.log("*****仓库存储数值*******", this.data.WareHouseConfig);
    };
    /************************货架*******************************/
    //改变货架等级
    PlayerModel.prototype.changeShelveSkin = function (index, level) {
        this.data.uiConfig.shelvesList[index] = level;
        this.saveData();
        EventDispath_1.default.send(EventType_1.EventType.SHELVE_LEVEL_UPDATE, index);
    };
    //初始化上架作物列表
    PlayerModel.prototype.initPutCropList = function () {
        var shelveArr = this.data.uiConfig.shelvesList.filter(function (id) {
            return id != 0;
        });
        var list = this.getWarerHouseCfg().cropList;
        list.filter(function (item, index) {
            item.put_on_num = 0;
        });
        var shelveNum = shelveArr.length;
        var cropList = [];
        for (var i = 0; i < shelveNum; i++) {
            cropList.push(this.getRandomCrop(4));
        }
        console.log("上架数据：", cropList);
        this.put_on_crop_list = cropList;
    };
    /**
     * 随机获取仓库中的作物上架数组
     * @param num 所需上架数量
     * @returns
     */
    PlayerModel.prototype.getRandomCrop = function (num) {
        var list = this.getWarerHouseCfg().cropList;
        var arr = list.filter(function (item, index) {
            return item.num - item.put_on_num > 0;
        });
        if (arr.length == 0)
            return [];
        var crop = Utils_1.default.getRandomByArr(arr);
        if (crop.num - crop.put_on_num >= num) {
            var arr1 = [{ cropId: crop.cropId, put_on_num: num }];
            crop.put_on_num += num;
            return arr1;
        }
        var len = crop.num - crop.put_on_num;
        var arr2 = [{ cropId: crop.cropId, put_on_num: crop.num - crop.put_on_num }];
        crop.put_on_num += crop.num - crop.put_on_num;
        return arr2.concat(this.getRandomCrop(num - len));
    };
    /**
     *
     * @returns 获取单独需要上架作物
     */
    PlayerModel.prototype.getOneCrop = function () {
        var list = this.getWarerHouseCfg().cropList;
        var arr = list.filter(function (item, index) {
            return item.num - item.put_on_num > 0;
        });
        if (arr.length == 0)
            return null;
        var crop = Utils_1.default.getRandomByArr(arr);
        crop.put_on_num += 1;
        return crop;
    };
    //根据索引获取对应货架
    PlayerModel.prototype.getSheleveInfoByIndex = function (index) {
        return this.sheleveList[index];
    };
    /************************头部钱，钞票，满意度*******************************/
    PlayerModel.prototype.initMoney = function (value) {
        this.data.money = value;
        EventDispath_1.default.send(EventType_1.EventType.UPDATE_MONEY);
    };
    /**
     *
     * @param value 当前钱数（SDK获取，增加的数值）
     * @param add
     */
    PlayerModel.prototype.setMoney = function (value, add, startPoint) {
        if (startPoint === void 0) { startPoint = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2); }
        this.data.money = value;
        EffectManager_1.default.playCoinFly(startPoint, 1, add);
    };
    PlayerModel.prototype.getMoney = function () {
        return this.data.money;
    };
    //钞票
    PlayerModel.prototype.setGold = function (value, parentType, startPoint) {
        if (parentType === void 0) { parentType = 0; }
        if (value > 0) {
            if (!startPoint)
                startPoint = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
            if (parentType)
                EffectManager_1.default.playEffFly(startPoint, 2, value);
            else
                EffectManager_1.default.playCoinFly(startPoint, 2, value);
        }
        else
            EventDispath_1.default.send(EventType_1.EventType.UPDATE_GOLD, value);
    };
    PlayerModel.prototype.changeGold = function (value) {
        this.data.gold += value;
        this.saveData();
    };
    PlayerModel.prototype.getGold = function () {
        return this.data.gold;
    };
    //幸福指数
    PlayerModel.prototype.setXfzs = function (num, startPoint) {
        this.data.xfzs += num;
        if (!startPoint)
            startPoint = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
        EffectManager_1.default.playCoinFly(startPoint, 3, num);
        // EventDispath.send(EventType.UPDATE_XFZS, num);
        this.saveData();
    };
    PlayerModel.prototype.getXfzs = function () {
        this.data.xfzs = Number(this.data.xfzs.toFixed(2));
        return this.data.xfzs;
    };
    /*
     * 获取当前最新解锁植物ID
     * @return 如果什么都没解锁，则返回-1；
     */
    PlayerModel.prototype.getNewCrop = function () {
        SortUtils_1.default.insertSort(this.data.unlockCropList);
        // console.log("种菜面板解锁列表", this.data.unlockCropList);
        // let len = this.data.unlockCropList.length;
        // if (len == 0) return -1;
        var order = this.getCurrentOrder();
        if (order) {
            var list = [];
            for (var i = 0; i < order.cropList.length; i++) {
                var item = order.cropList[i];
                if (item.cropId != 100) {
                    list.push(item.cropId);
                }
            }
            return Utils_1.default.getRandomByArr(list);
        }
        return Utils_1.default.getRandomByArr(this.data.unlockCropList);
    };
    //解锁新作物
    PlayerModel.prototype.setNewCrop = function (id) {
        this.data.unlockCropList.push(id);
        this.saveData();
    };
    //获得已解锁作物列表
    PlayerModel.prototype.getUnlockCrop = function () {
        return this.data.unlockCropList;
    };
    //检测是否解锁
    PlayerModel.prototype.checkCropUnlock = function (id) {
        var arr = this.data.unlockCropList.filter(function (idx, index) {
            return id == idx;
        });
        if (arr.length > 0)
            return true;
        return false;
    };
    PlayerModel.prototype.setSoundSwitch = function (val) {
        this.data.soundSwitch = val;
        MusicManager_1.default.initMusic();
        this.saveData();
    };
    PlayerModel.prototype.setSoundYinXiaoSwitch = function (v) {
        this.data.soundYinXiao = v;
        MusicManager_1.default.initMusic();
        this.saveData();
    };
    PlayerModel.prototype.getSoundYinXiaoSwitch = function () {
        return this.data.soundYinXiao;
    };
    PlayerModel.prototype.getPersonRecommSwitch = function () {
        return this.data.personRecommSwitch;
    };
    PlayerModel.prototype.SetPersonRecommSwitch = function (v) {
        this.data.personRecommSwitch = v;
        this.saveData();
    };
    //获取菜地列表
    PlayerModel.prototype.getFieldListCfg = function () {
        return this.data.fieldCfgList;
    };
    //改变菜地等级
    PlayerModel.prototype.changeFieldSkin = function (index, level) {
        var cfg = this.data.fieldCfgList[index];
        cfg.state = 1;
        cfg.level = level;
        cfg.id = cfg.type * 10 + level;
        this.saveData();
        EventDispath_1.default.send(EventType_1.EventType.FIELD_LEVEL_UPDATE, index);
    };
    //作物收获次数
    PlayerModel.prototype.getCropGetNum = function () {
        return this.data.cropGetNum;
    };
    PlayerModel.prototype.setCropGetNum = function (value) {
        this.data.cropGetNum += value;
        this.saveData();
    };
    // 成熟次数
    PlayerModel.prototype.getCropRipetimes = function () {
        return this.data.cropRipetimes;
    };
    PlayerModel.prototype.setCropRipetimes = function () {
        this.data.cropRipetimes++;
        this.saveData();
    };
    //重置成熟次数
    PlayerModel.prototype.resetCropRipeTimes = function () {
        this.data.cropRipetimes = 0;
        this.saveData();
    };
    Object.defineProperty(PlayerModel.prototype, "pestNum", {
        get: function () {
            return this.data.pestNum;
        },
        set: function (value) {
            this.data.pestNum = value;
            if (this.data.pestNum < 2) {
                this.resetCropRipeTimes();
            }
            this.saveData();
        },
        enumerable: false,
        configurable: true
    });
    //更新种植次数
    PlayerModel.prototype.setPlantNumById = function (id) {
        var arr = this.data.plantNumList.filter(function (item) {
            return item.id == id;
        });
        if (arr.length > 0) {
            arr[0].num += 1;
        }
        else {
            this.data.plantNumList.push({ id: id, num: 1 });
        }
        this.data.savePlantNum();
    };
    //获得种植次数
    PlayerModel.prototype.getPlantNumById = function (id) {
        var arr = this.data.plantNumList.filter(function (item) {
            return item.id == id;
        });
        if (arr.length > 0)
            return arr[0].num;
        return 0;
    };
    Object.defineProperty(PlayerModel.prototype, "cashierGold", {
        get: function () {
            return this.data.cashierGold;
        },
        /************************自动结账*******************************/
        //  收银台自动产出
        set: function (value) {
            this.data.cashierGold += value;
            this.data.setCashierGold();
        },
        enumerable: false,
        configurable: true
    });
    //获取收银台加倍剩余时间
    PlayerModel.prototype.getAddLastTime = function () {
        return this.data.cashierAddTime;
    };
    PlayerModel.prototype.setAddLastTime = function (value) {
        this.data.cashierAddTime = value;
        this.saveData();
    };
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
    PlayerModel.prototype.getGuideTaskCfg = function () {
        return this.data.guideTaskCfg;
    };
    //引导任务增加
    PlayerModel.prototype.setGuideTaskId = function () {
        // SDKManager.onEvent(Global.EVENT_ACTION.client_guide_task)
        this.data.guideTaskCfg.taskId++;
        this.data.guideTaskCfg.taskState = 0;
        this.saveData();
    };
    PlayerModel.prototype.changeGuideTaskState = function (state) {
        this.data.guideTaskCfg.taskState = state;
        this.saveData();
    };
    PlayerModel.prototype.saveData = function () {
        this.data.saveData();
        this.data.saveUiData();
    };
    PlayerModel.prototype.saveUiData = function () {
        this.data.saveUiData();
    };
    PlayerModel.prototype.resetData = function () {
        this.data.resetData();
    };
    PlayerModel.prototype.getSoundSwitch = function () {
        return this.data.soundSwitch;
    };
    PlayerModel.prototype.getUIConfig = function () {
        return this.data.uiConfig;
    };
    PlayerModel.prototype.setUiLv = function (index) {
        switch (index) {
            case 0:
                this.data.uiConfig.cashierlv++;
                EventDispath_1.default.send(EventType_1.EventType.CHANGE_CASHIER);
                break;
            case 1:
                this.data.uiConfig.pipelv++;
                EventDispath_1.default.send(EventType_1.EventType.CHANGE_PIPE);
                break;
            case 2:
                this.data.uiConfig.walllv++;
                EventDispath_1.default.send(EventType_1.EventType.CHANGE_WALL);
                break;
            case 3:
                this.data.uiConfig.roadlv++;
                EventDispath_1.default.send(EventType_1.EventType.CHANGE_ROAD);
                break;
            case 4:
                this.data.uiConfig.scarecrowlv++;
                EventDispath_1.default.send(EventType_1.EventType.CHANGE_SCARECROW);
                break;
            case 5:
                this.data.uiConfig.warehouselv++;
                EventDispath_1.default.send(EventType_1.EventType.CHANGE_WAREHOUSE);
                break;
            case 6:
                this.data.uiConfig.fencelv++;
                EventDispath_1.default.send(EventType_1.EventType.CHANGE_FENCE);
                break;
        }
        this.saveUiData();
    };
    /** 获取解锁的设施列表 */
    PlayerModel.prototype.getUnlockProps = function () {
        return this.data.hasProps;
    };
    /*
     * 解锁设施 注意这里存的是拼好的完整的id，是唯一的id,不是1、2、3、4、5、6、7
     * @param id: 完整的唯一索引id 如101、201、301
     */
    PlayerModel.prototype.unlockProps = function (id) {
        this.getUnlockProps().push(id);
    };
    /************************设施加成*******************************/
    //护栏行走速度加成
    PlayerModel.prototype.getSpeedAdd = function () {
        var cfg = ConfigManager_1.default.getPropById(CConst_1.propType.fence, this.getUIConfig().fencelv);
        return cfg.add_num / 100;
    };
    //土地加成，减少作物成熟时间
    PlayerModel.prototype.getTimeAdd = function (type, level) {
        if (this.getUIConfig().pipelv == 0)
            return 0;
        var cfg = ConfigManager_1.default.getFieldCfgByType(type, level);
        return cfg.add_num / 100;
    };
    //保存升级看视频次数
    PlayerModel.prototype.saveLvupVideoNum = function (key, num) {
        this.data.lvUp_video_num[key] = num;
        this.data.saveLvupVideoNum();
    };
    PlayerModel.prototype.getLvupVideoNum = function (key) {
        var num = 0;
        if (this.data.lvUp_video_num[key])
            num = this.data.lvUp_video_num[key];
        return num;
    };
    Object.defineProperty(PlayerModel.prototype, "isFirstClearPest", {
        //是否当天第一次除虫
        get: function () {
            return this.data.isFirstClearPest;
        },
        set: function (value) {
            this.data.isFirstClearPest = value;
            this.saveData();
        },
        enumerable: false,
        configurable: true
    });
    /**
    * 用于标记当前的时间，便于下次进行计算离线时长，在心跳方法中进行更新
    * this.offlineLastTimestamp 只要被读取，就唯一作为当前离线收益的计算时间戳了，游戏过程中不会被不小心覆盖，且绝对有值，如果尚未读取上次时间的情况下也不允许刷新覆盖掉上次的历史时间，保证了上次时间的准确使用，进而保证了离线收益时间的计算准确度
    */
    PlayerModel.prototype.setOfflineTimestamp = function () {
        // 防止还没读取上次离线时间 就被心跳更新时间戳的方式给覆盖掉了，导致上次最后的游戏时间戳读取不到了
        if (this.offlineLastTimestamp == -1)
            return;
        var time = SDKManager_1.default.getServerTime();
        this.data.offlineTimestamp = Math.floor(time / 1000);
        this.data.saveOfflineTimestamp();
    };
    /** 读取离线收益时间戳 */
    PlayerModel.prototype.getOfflineTimestamp = function () {
        return this.offlineLastTimestamp;
    };
    //订单中心
    PlayerModel.prototype.getOrderList = function () {
        return this.data.orderCacheList;
    };
    Object.defineProperty(PlayerModel.prototype, "orderLen", {
        get: function () {
            return this.data.orderUnlockLen;
        },
        set: function (value) {
            this.data.orderUnlockLen = value;
            this.setOrder();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerModel.prototype, "orderVideoNum", {
        get: function () {
            return this.data.orderVideoNum;
        },
        set: function (value) {
            this.data.orderVideoNum = value;
            this.setOrder();
        },
        enumerable: false,
        configurable: true
    });
    PlayerModel.prototype.setOrder = function () {
        this.data.orderCacheList.sort(function (a, b) {
            return b.state - a.state;
        });
        this.data.saveOrder();
    };
    //接单后根据仓库库存更新当前订单数量
    PlayerModel.prototype.updateOrder = function () {
        var order = this.getCurrentOrder();
        var list1 = this.getWarerHouseCfg().cropList;
        for (var i = 0; i < list1.length; i++) {
            var item = list1[i];
            this.checkAddOrder(item.cropId, item.num);
        }
    };
    //卖出物品更新订单
    PlayerModel.prototype.updateCurrentOrder = function (id) {
        var order = this.getCurrentOrder();
        if (order) {
            var list = order.cropList;
            // let stateList = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].cropId == id) {
                    list[i].num -= 1;
                }
            }
        }
        this.data.saveOrder();
        EventDispath_1.default.send(EventType_1.EventType.ORDER_UPDATE_TOP);
    };
    //增加作物
    PlayerModel.prototype.checkAddOrder = function (id, num, completeFun, callBack) {
        var order = this.getCurrentOrder();
        if (!order) {
            if (callBack)
                callBack();
            return;
        }
        var list = order.cropList;
        // let stateList = [];
        var completeLen = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i].cropId == id) {
                list[i].num += num;
            }
            if (list[i].num >= list[i].target) {
                // stateList.push(1)
                completeLen += 1;
            }
            else {
                // stateList.push(0)
            }
        }
        EventDispath_1.default.send(EventType_1.EventType.ORDER_UPDATE_TOP);
        this.setOrder();
        if (completeLen == list.length) {
            if (completeFun)
                completeFun();
        }
        else {
            if (callBack)
                callBack();
        }
    };
    //检测订单是否完成
    PlayerModel.prototype.checkOrderComplete = function () {
        var order = this.getCurrentOrder();
        if (order) {
            var list = order.cropList;
            var completeLen = 0;
            for (var i = 0; i < list.length; i++) {
                if (list[i].num >= list[i].target) {
                    completeLen += 1;
                }
            }
            if (completeLen == list.length)
                return true;
        }
        return false;
    };
    PlayerModel.prototype.haveOrder = function () {
        var order = this.getCurrentOrder();
        if (order)
            return true;
        return false;
    };
    //当前订单
    PlayerModel.prototype.getCurrentOrder = function () {
        var order;
        for (var i = 0; i < this.data.orderCacheList.length; i++) {
            var item = this.data.orderCacheList[i];
            if (item.state == 1) {
                order = item;
            }
        }
        return order;
    };
    //当前订单中的随机作物
    PlayerModel.prototype.getCurrentOrderCrop = function () {
        var order = this.getCurrentOrder();
        var cropList = [];
        if (order) {
            var list = order.cropList;
            // let stateList = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].cropId < 100) {
                    cropList.push(list[i].cropId);
                    if (list[i].num >= list[i].target) {
                        return list[i].cropId;
                    }
                }
            }
        }
        if (cropList.length > 0) {
            return Utils_1.default.getRandomByArr(cropList);
        }
        return Utils_1.default.getRandomByArr(this.data.unlockCropList);
    };
    Object.defineProperty(PlayerModel.prototype, "guideState", {
        get: function () {
            return this.data.guideState;
        },
        set: function (value) {
            this.data.guideState = value;
            this.data.saveGuide();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerModel.prototype, "guideStep", {
        get: function () {
            return this.data.guideStep;
        },
        set: function (value) {
            this.data.guideStep += value;
        },
        enumerable: false,
        configurable: true
    });
    //每日自动招揽人数
    PlayerModel.prototype.addDayAutoRoleNum = function () {
        this.data.dayAutoRoleNum++;
    };
    //每日自动招揽时间间隔
    PlayerModel.prototype.getAutoRoleTime = function () {
        if (this.data.dayAutoRoleNum < 11) {
            return 10;
        }
        else if (this.data.dayAutoRoleNum < 31) {
            return 15;
        }
        else {
            return 20;
        }
    };
    Object.defineProperty(PlayerModel.prototype, "zdGkNum", {
        get: function () {
            return this.data.zdGkNum;
        },
        set: function (value) {
            this.data.zdGkNum = value;
            this.data.saveZlNum();
        },
        enumerable: false,
        configurable: true
    });
    //手动招揽次数
    PlayerModel.prototype.setZlNum = function (value) {
        this.data.zhaolanNum = value;
        this.data.saveZlNum();
    };
    PlayerModel.prototype.getZlNum = function () {
        return this.data.zhaolanNum;
    };
    return PlayerModel;
}());
exports.default = PlayerModel.instance();

cc._RF.pop();
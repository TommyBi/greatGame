
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/datas/PlayerModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9kYXRhcy9QbGF5ZXJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSxxRUFBZ0U7QUFDaEUsK0RBQThEO0FBRTlELDZEQUF3RDtBQUN4RCxxREFBZ0Q7QUFDaEQsa0RBQTZEO0FBRTdELDBEQUFxRDtBQUNyRCwwREFBcUQ7QUFHckQsaUVBQTREO0FBQzVELDJDQUFxRjtBQUVyRjtJQUFBO1FBR0ksU0FBSSxHQUFlLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBVTdCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQyxDQUFBLFVBQVU7UUFDeEMsa0JBQWEsR0FBVyxFQUFFLENBQUMsQ0FBQSxVQUFVO1FBQ3JDLGdCQUFXLEdBQVcsR0FBRyxDQUFDLENBQUEsY0FBYztRQUN4QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQyxDQUFBLGNBQWM7UUFFdkMscUJBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUEsYUFBYTtRQUMxQyxpQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFBLFNBQVM7UUFDbEMsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDLENBQUEsV0FBVztRQUN6QyxvQkFBZSxHQUFXLEVBQUUsQ0FBQyxDQUFBLFlBQVk7UUFFekMsMEJBQXFCLEdBQVcsQ0FBQyxDQUFDLENBQUEsaUJBQWlCO1FBQ25ELDBCQUFxQixHQUFXLEVBQUUsQ0FBQyxDQUFBLGFBQWE7UUFFaEQseUJBQW9CLEdBQVcsQ0FBQyxDQUFDLENBQUEsc0NBQXNDO1FBRXZFLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUEsTUFBTTtRQUU5QixxQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQSxVQUFVO1FBQ2hDLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztJQWd1QnJDLENBQUM7SUExdkJVLG9CQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FB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SUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0EvdkJBLEFBK3ZCQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE11c2ljTWFuYWdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvTXVzaWNNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgU29ydFV0aWxzIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdG9vbHMvU29ydFV0aWxzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL1V0aWxzXCI7XHJcbmltcG9ydCBQbGF5ZXJEYXRhLCB7IG9yZGVyQ2FjaGUgfSBmcm9tIFwiLi4vZGF0YXMvUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRWZmZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgU2hlbHZlUHJlZmFiLCB7IHB1dE9uQ29uZmlnIH0gZnJvbSBcIi4uL3ZpZXcvbWFpbi9TaGVsdmVQcmVmYWJcIjtcclxuaW1wb3J0IHsgc3RvcmVDb25maWcgfSBmcm9tIFwiLi4vdmlldy9tYWluL1dhcmVob3VzZVByZWZhYlwiO1xyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBmaWVsZFR5cGUsIGxldmVsVXBfY29uZmlnLCBsZXZlbF9jb25maWcsIHByb3BUeXBlIH0gZnJvbSBcIi4uL2NvbnN0cy9DQ29uc3RcIjtcclxuXHJcbmNsYXNzIFBsYXllck1vZGVsIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGxheWVyTW9kZWw7XHJcblxyXG4gICAgZGF0YTogUGxheWVyRGF0YSA9IG5ldyBQbGF5ZXJEYXRhKCk7XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFBsYXllck1vZGVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXV0b19zZXJ2aWNlX21heDogbnVtYmVyID0gMzA7Ly/oh6rliqjmnI3liqHmr4/ml6XkuIrpmZBcclxuICAgIHB1YmxpYyBvbmNlX3JpcGVfbWF4OiBudW1iZXIgPSAzMDsvL+eri+WNs+aIkOeGn+avj+aXpeS4iumZkFxyXG4gICAgcHVibGljIG9mZmxpbmVfbWF4OiBudW1iZXIgPSAzNjA7Ly/nprvnur/mlLbnm4rml7bplb/kuIrpmZAo5YiG6ZKfKVxyXG4gICAgcHVibGljIG9mZmxpbmVfbWluOiBudW1iZXIgPSAxMDsvL+emu+e6v+aUtuebiuacgOWwj+aXtumVvyjliIbpkp8pXHJcblxyXG4gICAgcHVibGljIGx1Y2t5QmdfaW50ZXJ2YWw6IG51bWJlciA9IDM7Ly/mr49Y5YiG6ZKf5Lya5Yik5a6a5Ye6546w56aP6KKLXHJcbiAgICBwdWJsaWMgbHVja3lCZ19yYXRlOiBudW1iZXIgPSAxOy8v5Ye6546w56aP6KKL55qE5qaC546HXHJcbiAgICBwdWJsaWMgbHVja3lCZ19saXZlX3RpbWU6IG51bWJlciA9IDE7Ly/npo/ooovmjIHnu63mmL7npLrliIbpkp/mlbBcclxuICAgIHB1YmxpYyBsdWNreUJnX2dldF9tYXg6IG51bWJlciA9IDEwOy8v5q+P5pel56aP6KKL6aKG5Y+W5qyh5pWw5LiK6ZmQXHJcblxyXG4gICAgcHVibGljIGdldF9vbmVfc2hvcHBlcl9jbGljazogbnVtYmVyID0gNTsvL+avj1jmrKHngrnlh7vmiYvliqjmi5vmj73ov5vlnLox5Liq6aG+5a6iXHJcbiAgICBwdWJsaWMgb25lX2NsaWNrX3Nob3BwZXJfbWF4OiBudW1iZXIgPSAxNTsvL+avj+asoeS4gOmUruaLm+aPvei/m+WcuumhvuWuouaVsFxyXG5cclxuICAgIHB1YmxpYyBvZmZsaW5lTGFzdFRpbWVzdGFtcDogbnVtYmVyID0gMDsvLyDkuIrmrKHnmoTnprvnur/mlLbnm4rml7bpl7TmiLPvvIzku4XnlKjkuo7lnKjnmbvlvZXml7bmoIforrDvvIzpgb/lhY3ooqvlnKjorqHnrpfmlLbnm4rkuYvliY3popHnuYHopobnm5ZcclxuXHJcbiAgICBwdWJsaWMgY3JvcF9nZXRfbnVtID0gMDsvL+aUtuiOt+asoeaVsFxyXG5cclxuICAgIHB1dF9vbl9jcm9wX2xpc3QgPSBbXTsvL+S4iuaetui0p+eJqeS/oeaBr+WtmOWCqFxyXG4gICAgc2hlbGV2ZUxpc3Q6IFNoZWx2ZVByZWZhYltdID0gW107XHJcbiAgICAvL+WQjOatpee6ouWMheS9meminVxyXG4gICAgZ2V0VXNlckFtb3VudCgpIHtcclxuICAgICAgICBTREtNYW5hZ2VyLmdldFVzZXJBbW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmRhdGEuZ2V0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMub2ZmbGluZUxhc3RUaW1lc3RhbXAgPSB0aGlzLmRhdGEub2ZmbGluZVRpbWVzdGFtcDtcclxuICAgICAgICB0aGlzLmluaXRQdXRDcm9wTGlzdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEub3JkZXJDYWNoZUxpc3QubGVuZ3RoIDw9IDApIHRoaXMuaW5pdE9yZGVyTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgLy/liJ3lp4vorr7mlr1cclxuICAgIGluaXRVaUNmZygpIHtcclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t6LSn5p62XHJcbiAgICAgICAgbGV0IHR5cGUgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2hlbHZlc0NmZ0xpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWdNYW5hZ2VyLnNoZWx2ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBsZXZlbFVwX2NvbmZpZyA9IENvbmZpZ01hbmFnZXIuc2hlbHZlc1tpXTtcclxuICAgICAgICAgICAgICAgIGxldCBsZXZlbCA9IGl0ZW0udW5sb2NrX3N0YXRlID09IDEgPyAxIDogMDtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgIT0gdHlwZSkgdGhpcy5kYXRhLnNoZWx2ZXNDZmdMaXN0LnB1c2gobGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IGl0ZW0udHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Zyf5ZywXHJcbiAgICAgICAgbGV0IGZpZWxkVHlwZSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5maWVsZENmZ0xpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWdNYW5hZ2VyLmZpZWxkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTogbGV2ZWxVcF9jb25maWcgPSBDb25maWdNYW5hZ2VyLmZpZWxkW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxldmVsID0gaXRlbS51bmxvY2tfc3RhdGUgPT0gMSA/IDEgOiAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7IGlkOiBpdGVtLmlkLCB0eXBlOiBpdGVtLnR5cGUsIHN0YXRlOiBpdGVtLnVubG9ja19zdGF0ZSwgY3JvcFN0YXRlOiAwLCBjcm9wSWQ6IDAsIGxhc3RUaW1lOiAwLCBsZXZlbDogbGV2ZWwgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSAhPSBmaWVsZFR5cGUpIHRoaXMuZGF0YS5maWVsZENmZ0xpc3QucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIGZpZWxkVHlwZSA9IGl0ZW0udHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0VW5sb2NrQ3JvcExpc3QoKTtcclxuICAgIH1cclxuICAgIGluaXRPcmRlckxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLm9yZGVyQ2FjaGVMaXN0ID0gQ29uZmlnTWFuYWdlci5nZXRPcmRlckxpc3QoKTtcclxuICAgIH1cclxuICAgIC8v5Yid5aeL5YyW6Kej6ZSB5L2c54mp5YiX6KGoXHJcbiAgICBpbml0VW5sb2NrQ3JvcExpc3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS51bmxvY2tDcm9wTGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENvbmZpZ01hbmFnZXIuY3JvcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNyb3AgPSBDb25maWdNYW5hZ2VyLmNyb3BbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY3JvcC51bmxvY2sgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51bmxvY2tDcm9wTGlzdC5wdXNoKGNyb3AuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzZXRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEubGV2ZWwrKztcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKirku5PlupMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgc2V0SG91c2VBZGRDcm9wKGlkLCBhZGROdW0pIHtcclxuICAgICAgICBsZXQgY3JvcExpc3QgPSB0aGlzLmRhdGEuV2FyZUhvdXNlQ29uZmlnLmNyb3BMaXN0O1xyXG4gICAgICAgIGxldCBhcnIgPSBjcm9wTGlzdC5maWx0ZXIoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY3JvcElkID09IGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGdldE51bSA9IDE7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFyclswXS5udW0gKz0gYWRkTnVtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjZmc6IHN0b3JlQ29uZmlnID0geyBjcm9wSWQ6IGlkLCBudW06IGFkZE51bSwgcHV0X29uX251bTogMCB9O1xyXG4gICAgICAgICAgICBjcm9wTGlzdC5wdXNoKGNmZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YS5zYXZlV2FyZUhvdXNlRGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKirku5PlupPlrZjlgqjmlbDlgLwqKioqKioqXCIsIHRoaXMuZGF0YS5XYXJlSG91c2VDb25maWcpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5VUERBVEVfU0hFTFZFKVxyXG4gICAgfVxyXG4gICAgLy/ku5PlupPlvZPliY3kv6Hmga9cclxuICAgIGdldFdhcmVySG91c2VDZmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5XYXJlSG91c2VDb25maWc7XHJcbiAgICB9XHJcbiAgICAvL+S7k+W6k+S4reaLpeacieeahOaVsOmHj1xyXG4gICAgZ2V0SGF2ZU51bUJ5SUQoaWQpIHtcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuZ2V0V2FyZXJIb3VzZUNmZygpLmNyb3BMaXN0O1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIGxldCBhcnIgPSBsaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jcm9wSWQgPT0gaWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDApIHJldHVybiBhcnJbMF0ubnVtO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgLy/ojrflj5blvZPliY3ku5PlupPlrZjotK7mgLvlgLxcclxuICAgIGdldEN1cnJlbnRQdXROdW0oKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmdldFdhcmVySG91c2VDZmcoKS5jcm9wTGlzdDtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGl0bWUpID0+IHtcclxuICAgICAgICAgICAgbnVtICs9IGl0bWUubnVtO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIC8v5LuT5bqT5Lit5L2c54mp5YeP5bCRXHJcbiAgICByZWR1Y2VDcm9wKGlkKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmdldFdhcmVySG91c2VDZmcoKS5jcm9wTGlzdDtcclxuICAgICAgICBsZXQgYXJyID0gbGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY3JvcElkID09IGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjcm9wID0gYXJyWzBdO1xyXG4gICAgICAgIGNyb3AubnVtLS07XHJcbiAgICAgICAgY3JvcC5wdXRfb25fbnVtLS07XHJcblxyXG4gICAgICAgIGlmIChjcm9wLm51bSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSAwO1xyXG4gICAgICAgICAgICBsaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNyb3BJZCA9PSBjcm9wLmNyb3BJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsaXN0LnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGEuc2F2ZVdhcmVIb3VzZURhdGEoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRPcmRlcihpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKuS7k+W6k+WtmOWCqOaVsOWAvCoqKioqKipcIiwgdGhpcy5kYXRhLldhcmVIb3VzZUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICAvL+iuouWNleWujOaIkOS9nOeJqeWHj+WwkVxyXG4gICAgb3JkZXJSZWR1Y2VDcm9wKGlkLCBudW0pIHtcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuZ2V0V2FyZXJIb3VzZUNmZygpLmNyb3BMaXN0O1xyXG4gICAgICAgIGxldCBhcnIgPSBsaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jcm9wSWQgPT0gaWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNyb3AgPSBhcnJbMF07XHJcbiAgICAgICAgY3JvcC5udW0gLT0gbnVtO1xyXG4gICAgICAgIGlmIChjcm9wLm51bSA8IGNyb3AucHV0X29uX251bSkge1xyXG4gICAgICAgICAgICBjcm9wLnB1dF9vbl9udW0gPSBjcm9wLm51bTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjcm9wLm51bSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBpZHggPSAwO1xyXG4gICAgICAgICAgICBsaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNyb3BJZCA9PSBjcm9wLmNyb3BJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsaXN0LnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGEuc2F2ZVdhcmVIb3VzZURhdGEoKTtcclxuICAgICAgICAvLyB0aGlzLnVwZGF0ZUN1cnJlbnRPcmRlcihpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKuS7k+W6k+WtmOWCqOaVsOWAvCoqKioqKipcIiwgdGhpcy5kYXRhLldhcmVIb3VzZUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioq6LSn5p62KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbiAgICAvL+aUueWPmOi0p+aetuetiee6p1xyXG4gICAgY2hhbmdlU2hlbHZlU2tpbihpbmRleCwgbGV2ZWwpIHtcclxuICAgICAgICB0aGlzLmRhdGEudWlDb25maWcuc2hlbHZlc0xpc3RbaW5kZXhdID0gbGV2ZWw7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TSEVMVkVfTEVWRUxfVVBEQVRFLCBpbmRleClcclxuICAgIH1cclxuICAgIC8v5Yid5aeL5YyW5LiK5p625L2c54mp5YiX6KGoXHJcbiAgICBpbml0UHV0Q3JvcExpc3QoKSB7XHJcbiAgICAgICAgbGV0IHNoZWx2ZUFyciA9IHRoaXMuZGF0YS51aUNvbmZpZy5zaGVsdmVzTGlzdC5maWx0ZXIoKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZCAhPSAwO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5nZXRXYXJlckhvdXNlQ2ZnKCkuY3JvcExpc3RcclxuICAgICAgICBsaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5wdXRfb25fbnVtID0gMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzaGVsdmVOdW0gPSBzaGVsdmVBcnIubGVuZ3RoO1xyXG4gICAgICAgIGxldCBjcm9wTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hlbHZlTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgY3JvcExpc3QucHVzaCh0aGlzLmdldFJhbmRvbUNyb3AoNCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5LiK5p625pWw5o2u77yaXCIsIGNyb3BMaXN0KTtcclxuICAgICAgICB0aGlzLnB1dF9vbl9jcm9wX2xpc3QgPSBjcm9wTGlzdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5py66I635Y+W5LuT5bqT5Lit55qE5L2c54mp5LiK5p625pWw57uEXHJcbiAgICAgKiBAcGFyYW0gbnVtIOaJgOmcgOS4iuaetuaVsOmHj1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIGdldFJhbmRvbUNyb3AobnVtKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmdldFdhcmVySG91c2VDZmcoKS5jcm9wTGlzdFxyXG5cclxuICAgICAgICBsZXQgYXJyID0gbGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm51bSAtIGl0ZW0ucHV0X29uX251bSA+IDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDApIHJldHVybiBbXTtcclxuICAgICAgICBsZXQgY3JvcCA9IFV0aWxzLmdldFJhbmRvbUJ5QXJyKGFycik7XHJcbiAgICAgICAgaWYgKGNyb3AubnVtIC0gY3JvcC5wdXRfb25fbnVtID49IG51bSkge1xyXG4gICAgICAgICAgICBsZXQgYXJyMTogcHV0T25Db25maWdbXSA9IFt7IGNyb3BJZDogY3JvcC5jcm9wSWQsIHB1dF9vbl9udW06IG51bSB9XVxyXG4gICAgICAgICAgICBjcm9wLnB1dF9vbl9udW0gKz0gbnVtO1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxlbiA9IGNyb3AubnVtIC0gY3JvcC5wdXRfb25fbnVtO1xyXG4gICAgICAgIGxldCBhcnIyOiBwdXRPbkNvbmZpZ1tdID0gW3sgY3JvcElkOiBjcm9wLmNyb3BJZCwgcHV0X29uX251bTogY3JvcC5udW0gLSBjcm9wLnB1dF9vbl9udW0gfV1cclxuICAgICAgICBjcm9wLnB1dF9vbl9udW0gKz0gY3JvcC5udW0gLSBjcm9wLnB1dF9vbl9udW07XHJcbiAgICAgICAgcmV0dXJuIGFycjIuY29uY2F0KHRoaXMuZ2V0UmFuZG9tQ3JvcChudW0gLSBsZW4pKTtcclxuXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMg6I635Y+W5Y2V54us6ZyA6KaB5LiK5p625L2c54mpXHJcbiAgICAgKi9cclxuICAgIGdldE9uZUNyb3AoKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmdldFdhcmVySG91c2VDZmcoKS5jcm9wTGlzdFxyXG5cclxuICAgICAgICBsZXQgYXJyID0gbGlzdC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm51bSAtIGl0ZW0ucHV0X29uX251bSA+IDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBjcm9wID0gVXRpbHMuZ2V0UmFuZG9tQnlBcnIoYXJyKTtcclxuICAgICAgICBjcm9wLnB1dF9vbl9udW0gKz0gMTtcclxuICAgICAgICByZXR1cm4gY3JvcDtcclxuICAgIH1cclxuICAgIC8v5qC55o2u57Si5byV6I635Y+W5a+55bqU6LSn5p62XHJcbiAgICBnZXRTaGVsZXZlSW5mb0J5SW5kZXgoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGVsZXZlTGlzdFtpbmRleF07XHJcbiAgICB9XHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioq5aS06YOo6ZKx77yM6ZKe56Wo77yM5ruh5oSP5bqmKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIGluaXRNb25leSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5tb25leSA9IHZhbHVlO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5VUERBVEVfTU9ORVkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB2YWx1ZSDlvZPliY3pkrHmlbDvvIhTREvojrflj5bvvIzlop7liqDnmoTmlbDlgLzvvIlcclxuICAgICAqIEBwYXJhbSBhZGQgXHJcbiAgICAgKi9cclxuICAgIHNldE1vbmV5KHZhbHVlLCBhZGQsIHN0YXJ0UG9pbnQgPSBjYy52MihjYy53aW5TaXplLndpZHRoIC8gMiwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5tb25leSA9IHZhbHVlO1xyXG5cclxuICAgICAgICBFZmZlY3RNYW5hZ2VyLnBsYXlDb2luRmx5KHN0YXJ0UG9pbnQsIDEsIGFkZClcclxuICAgIH1cclxuICAgIGdldE1vbmV5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEubW9uZXk7XHJcbiAgICB9XHJcbiAgICAvL+mSnuelqFxyXG4gICAgc2V0R29sZCh2YWx1ZSwgcGFyZW50VHlwZSA9IDAsIHN0YXJ0UG9pbnQ/KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXN0YXJ0UG9pbnQpIHN0YXJ0UG9pbnQgPSBjYy52MihjYy53aW5TaXplLndpZHRoIC8gMiwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudFR5cGUpIEVmZmVjdE1hbmFnZXIucGxheUVmZkZseShzdGFydFBvaW50LCAyLCB2YWx1ZSlcclxuICAgICAgICAgICAgZWxzZSBFZmZlY3RNYW5hZ2VyLnBsYXlDb2luRmx5KHN0YXJ0UG9pbnQsIDIsIHZhbHVlKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX0dPTEQsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGNoYW5nZUdvbGQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGEuZ29sZCArPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICB9XHJcbiAgICBnZXRHb2xkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ29sZDtcclxuICAgIH1cclxuICAgIC8v5bm456aP5oyH5pWwXHJcbiAgICBzZXRYZnpzKG51bSwgc3RhcnRQb2ludD8pIHtcclxuICAgICAgICB0aGlzLmRhdGEueGZ6cyArPSBudW07XHJcbiAgICAgICAgaWYgKCFzdGFydFBvaW50KSBzdGFydFBvaW50ID0gY2MudjIoY2Mud2luU2l6ZS53aWR0aCAvIDIsIGNjLndpblNpemUuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgRWZmZWN0TWFuYWdlci5wbGF5Q29pbkZseShzdGFydFBvaW50LCAzLCBudW0pXHJcbiAgICAgICAgLy8gRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlVQREFURV9YRlpTLCBudW0pO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuICAgIGdldFhmenMoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnhmenMgPSBOdW1iZXIodGhpcy5kYXRhLnhmenMudG9GaXhlZCgyKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnhmenM7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgICog6I635Y+W5b2T5YmN5pyA5paw6Kej6ZSB5qSN54mpSURcclxuICAgICAqIEByZXR1cm4g5aaC5p6c5LuA5LmI6YO95rKh6Kej6ZSB77yM5YiZ6L+U5ZueLTHvvJtcclxuICAgICAqL1xyXG4gICAgZ2V0TmV3Q3JvcCgpIHtcclxuICAgICAgICBTb3J0VXRpbHMuaW5zZXJ0U29ydCh0aGlzLmRhdGEudW5sb2NrQ3JvcExpc3QpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi56eN6I+c6Z2i5p2/6Kej6ZSB5YiX6KGoXCIsIHRoaXMuZGF0YS51bmxvY2tDcm9wTGlzdCk7XHJcblxyXG4gICAgICAgIC8vIGxldCBsZW4gPSB0aGlzLmRhdGEudW5sb2NrQ3JvcExpc3QubGVuZ3RoO1xyXG4gICAgICAgIC8vIGlmIChsZW4gPT0gMCkgcmV0dXJuIC0xO1xyXG4gICAgICAgIGxldCBvcmRlciA9IHRoaXMuZ2V0Q3VycmVudE9yZGVyKCk7XHJcbiAgICAgICAgaWYgKG9yZGVyKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXIuY3JvcExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gb3JkZXIuY3JvcExpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jcm9wSWQgIT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGl0ZW0uY3JvcElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gVXRpbHMuZ2V0UmFuZG9tQnlBcnIobGlzdCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gVXRpbHMuZ2V0UmFuZG9tQnlBcnIodGhpcy5kYXRhLnVubG9ja0Nyb3BMaXN0KTtcclxuICAgIH1cclxuICAgIC8v6Kej6ZSB5paw5L2c54mpXHJcbiAgICBzZXROZXdDcm9wKGlkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnVubG9ja0Nyb3BMaXN0LnB1c2goaWQpO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuICAgIC8v6I635b6X5bey6Kej6ZSB5L2c54mp5YiX6KGoXHJcbiAgICBnZXRVbmxvY2tDcm9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEudW5sb2NrQ3JvcExpc3Q7XHJcbiAgICB9XHJcbiAgICAvL+ajgOa1i+aYr+WQpuino+mUgVxyXG4gICAgY2hlY2tDcm9wVW5sb2NrKGlkKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuZGF0YS51bmxvY2tDcm9wTGlzdC5maWx0ZXIoKGlkeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkID09IGlkeDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2V0U291bmRTd2l0Y2godmFsKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNvdW5kU3dpdGNoID0gdmFsO1xyXG4gICAgICAgIE11c2ljTWFuYWdlci5pbml0TXVzaWMoKTtcclxuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICB9XHJcbiAgICBzZXRTb3VuZFlpblhpYW9Td2l0Y2godikge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zb3VuZFlpblhpYW8gPSB2O1xyXG4gICAgICAgIE11c2ljTWFuYWdlci5pbml0TXVzaWMoKTtcclxuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTb3VuZFlpblhpYW9Td2l0Y2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VuZFlpblhpYW87XHJcbiAgICB9XHJcbiAgICBnZXRQZXJzb25SZWNvbW1Td2l0Y2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5wZXJzb25SZWNvbW1Td2l0Y2g7XHJcbiAgICB9XHJcbiAgICBTZXRQZXJzb25SZWNvbW1Td2l0Y2godikge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wZXJzb25SZWNvbW1Td2l0Y2ggPSB2O1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluiPnOWcsOWIl+ihqFxyXG4gICAgZ2V0RmllbGRMaXN0Q2ZnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmllbGRDZmdMaXN0O1xyXG4gICAgfVxyXG4gICAgLy/mlLnlj5joj5zlnLDnrYnnuqdcclxuICAgIGNoYW5nZUZpZWxkU2tpbihpbmRleCwgbGV2ZWwpIHtcclxuICAgICAgICBsZXQgY2ZnID0gdGhpcy5kYXRhLmZpZWxkQ2ZnTGlzdFtpbmRleF07XHJcbiAgICAgICAgY2ZnLnN0YXRlID0gMTtcclxuICAgICAgICBjZmcubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICBjZmcuaWQgPSBjZmcudHlwZSAqIDEwICsgbGV2ZWw7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5GSUVMRF9MRVZFTF9VUERBVEUsIGluZGV4KVxyXG4gICAgfVxyXG4gICAgLy/kvZznianmlLbojrfmrKHmlbBcclxuICAgIGdldENyb3BHZXROdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jcm9wR2V0TnVtO1xyXG4gICAgfVxyXG4gICAgc2V0Q3JvcEdldE51bSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5jcm9wR2V0TnVtICs9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuICAgIC8vIOaIkOeGn+asoeaVsFxyXG4gICAgZ2V0Q3JvcFJpcGV0aW1lcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmNyb3BSaXBldGltZXM7XHJcbiAgICB9XHJcbiAgICBzZXRDcm9wUmlwZXRpbWVzKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5jcm9wUmlwZXRpbWVzKys7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgLy/ph43nva7miJDnhp/mrKHmlbBcclxuICAgIHJlc2V0Q3JvcFJpcGVUaW1lcygpIHtcclxuICAgICAgICB0aGlzLmRhdGEuY3JvcFJpcGV0aW1lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBlc3ROdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5wZXN0TnVtO1xyXG4gICAgfVxyXG4gICAgc2V0IHBlc3ROdW0odmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGEucGVzdE51bSA9IHZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEucGVzdE51bSA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldENyb3BSaXBlVGltZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgLy/mm7TmlrDnp43mpI3mrKHmlbBcclxuICAgIHNldFBsYW50TnVtQnlJZChpZCkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmRhdGEucGxhbnROdW1MaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBpZDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcnJbMF0ubnVtICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnBsYW50TnVtTGlzdC5wdXNoKHsgaWQ6IGlkLCBudW06IDEgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhLnNhdmVQbGFudE51bSgpO1xyXG5cclxuICAgIH1cclxuICAgIC8v6I635b6X56eN5qSN5qyh5pWwXHJcbiAgICBnZXRQbGFudE51bUJ5SWQoaWQpIHtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5kYXRhLnBsYW50TnVtTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gaWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDApIHJldHVybiBhcnJbMF0ubnVtO1xyXG5cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKiroh6rliqjnu5PotKYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy8gIOaUtumTtuWPsOiHquWKqOS6p+WHulxyXG4gICAgc2V0IGNhc2hpZXJHb2xkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmNhc2hpZXJHb2xkICs9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXRDYXNoaWVyR29sZCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNhc2hpZXJHb2xkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuY2FzaGllckdvbGQ7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluaUtumTtuWPsOWKoOWAjeWJqeS9meaXtumXtFxyXG4gICAgZ2V0QWRkTGFzdFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jYXNoaWVyQWRkVGltZTtcclxuICAgIH1cclxuICAgIHNldEFkZExhc3RUaW1lKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmNhc2hpZXJBZGRUaW1lID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgLy/orr7nva7oh6rliqjnu5PotKbmlbDmja5cclxuICAgIC8vIHNldElzQXV0b1NlbGwoYXV0b0NmZz8pIHtcclxuICAgIC8vICAgICBpZiAoYXV0b0NmZykgdGhpcy5kYXRhLmF1dG9DZmcgPSBhdXRvQ2ZnO1xyXG4gICAgLy8gICAgIHRoaXMuZGF0YS5zZXRJc0F1dG8oKTtcclxuICAgIC8vIH1cclxuICAgIC8vIHNldElzQXV0b09mZmxpbmVUaW1lKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5kYXRhLmF1dG9DZmcudGltZSA9IHZhbHVlO1xyXG4gICAgLy8gICAgIHRoaXMuc2V0SXNBdXRvU2VsbCgpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gc2V0SXNBdXRvKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5kYXRhLmF1dG9DZmcuaXNBdXRvID0gdmFsdWU7XHJcbiAgICAvLyAgICAgdGhpcy5zZXRJc0F1dG9TZWxsKCk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBzZXRBdXRvTGFzdFRpbWUodGltZSkge1xyXG4gICAgLy8gICAgIHRoaXMuZGF0YS5hdXRvQ2ZnLmxhc3RUaW1lID0gdGltZTtcclxuICAgIC8vICAgICB0aGlzLnNldElzQXV0b1NlbGwoKTtcclxuICAgIC8vIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKirlvJXlr7zku7vliqEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgZ2V0R3VpZGVUYXNrQ2ZnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ3VpZGVUYXNrQ2ZnO1xyXG4gICAgfVxyXG4gICAgLy/lvJXlr7zku7vliqHlop7liqBcclxuICAgIHNldEd1aWRlVGFza0lkKCkge1xyXG4gICAgICAgIC8vIFNES01hbmFnZXIub25FdmVudChHbG9iYWwuRVZFTlRfQUNUSU9OLmNsaWVudF9ndWlkZV90YXNrKVxyXG4gICAgICAgIHRoaXMuZGF0YS5ndWlkZVRhc2tDZmcudGFza0lkKys7XHJcbiAgICAgICAgdGhpcy5kYXRhLmd1aWRlVGFza0NmZy50YXNrU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuICAgIGNoYW5nZUd1aWRlVGFza1N0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmd1aWRlVGFza0NmZy50YXNrU3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zYXZlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zYXZlVWlEYXRhKCk7XHJcbiAgICB9XHJcbiAgICBzYXZlVWlEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zYXZlVWlEYXRhKCk7XHJcbiAgICB9XHJcbiAgICByZXNldERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnJlc2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0U291bmRTd2l0Y2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zb3VuZFN3aXRjaDtcclxuICAgIH1cclxuICAgIGdldFVJQ29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEudWlDb25maWc7XHJcbiAgICB9XHJcbiAgICBzZXRVaUx2KGluZGV4KSB7XHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudWlDb25maWcuY2FzaGllcmx2Kys7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuQ0hBTkdFX0NBU0hJRVIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51aUNvbmZpZy5waXBlbHYrKztcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5DSEFOR0VfUElQRSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnVpQ29uZmlnLndhbGxsdisrO1xyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkNIQU5HRV9XQUxMKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudWlDb25maWcucm9hZGx2Kys7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuQ0hBTkdFX1JPQUQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51aUNvbmZpZy5zY2FyZWNyb3dsdisrO1xyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkNIQU5HRV9TQ0FSRUNST1cpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51aUNvbmZpZy53YXJlaG91c2VsdisrO1xyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkNIQU5HRV9XQVJFSE9VU0UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51aUNvbmZpZy5mZW5jZWx2Kys7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuQ0hBTkdFX0ZFTkNFKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVVaURhdGEoKTtcclxuICAgIH1cclxuICAgIC8qKiDojrflj5bop6PplIHnmoTorr7mlr3liJfooaggKi9cclxuICAgIGdldFVubG9ja1Byb3BzKCk6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhc1Byb3BzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiDop6PplIHorr7mlr0g5rOo5oSP6L+Z6YeM5a2Y55qE5piv5ou85aW955qE5a6M5pW055qEaWTvvIzmmK/llK/kuIDnmoRpZCzkuI3mmK8x44CBMuOAgTPjgIE044CBNeOAgTbjgIE3IFxyXG4gICAgICogQHBhcmFtIGlkOiDlrozmlbTnmoTllK/kuIDntKLlvJVpZCDlpoIxMDHjgIEyMDHjgIEzMDFcclxuICAgICAqL1xyXG4gICAgdW5sb2NrUHJvcHMoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZ2V0VW5sb2NrUHJvcHMoKS5wdXNoKGlkKTtcclxuICAgIH1cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKirorr7mlr3liqDmiJAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy/miqTmoI/ooYzotbDpgJ/luqbliqDmiJBcclxuICAgIGdldFNwZWVkQWRkKCkge1xyXG4gICAgICAgIGxldCBjZmcgPSBDb25maWdNYW5hZ2VyLmdldFByb3BCeUlkKHByb3BUeXBlLmZlbmNlLCB0aGlzLmdldFVJQ29uZmlnKCkuZmVuY2Vsdik7XHJcbiAgICAgICAgcmV0dXJuIGNmZy5hZGRfbnVtIC8gMTAwO1xyXG4gICAgfVxyXG4gICAgLy/lnJ/lnLDliqDmiJDvvIzlh4/lsJHkvZznianmiJDnhp/ml7bpl7RcclxuICAgIGdldFRpbWVBZGQodHlwZSwgbGV2ZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRVSUNvbmZpZygpLnBpcGVsdiA9PSAwKSByZXR1cm4gMDtcclxuICAgICAgICBsZXQgY2ZnID0gQ29uZmlnTWFuYWdlci5nZXRGaWVsZENmZ0J5VHlwZSh0eXBlLCBsZXZlbCk7XHJcbiAgICAgICAgcmV0dXJuIGNmZy5hZGRfbnVtIC8gMTAwO1xyXG4gICAgfVxyXG4gICAgLy/kv53lrZjljYfnuqfnnIvop4bpopHmrKHmlbBcclxuICAgIHNhdmVMdnVwVmlkZW9OdW0oa2V5LCBudW0pIHtcclxuICAgICAgICB0aGlzLmRhdGEubHZVcF92aWRlb19udW1ba2V5XSA9IG51bTtcclxuICAgICAgICB0aGlzLmRhdGEuc2F2ZUx2dXBWaWRlb051bSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0THZ1cFZpZGVvTnVtKGtleSkge1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubHZVcF92aWRlb19udW1ba2V5XSkgbnVtID0gdGhpcy5kYXRhLmx2VXBfdmlkZW9fbnVtW2tleV07XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuICAgIC8v5piv5ZCm5b2T5aSp56ys5LiA5qyh6Zmk6JmrXHJcbiAgICBnZXQgaXNGaXJzdENsZWFyUGVzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmlzRmlyc3RDbGVhclBlc3Q7XHJcbiAgICB9XHJcbiAgICBzZXQgaXNGaXJzdENsZWFyUGVzdCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5pc0ZpcnN0Q2xlYXJQZXN0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDnlKjkuo7moIforrDlvZPliY3nmoTml7bpl7TvvIzkvr/kuo7kuIvmrKHov5vooYzorqHnrpfnprvnur/ml7bplb/vvIzlnKjlv4Pot7Pmlrnms5XkuK3ov5vooYzmm7TmlrAgXHJcbiAgICAqIHRoaXMub2ZmbGluZUxhc3RUaW1lc3RhbXAg5Y+q6KaB6KKr6K+75Y+W77yM5bCx5ZSv5LiA5L2c5Li65b2T5YmN56a757q/5pS255uK55qE6K6h566X5pe26Ze05oiz5LqG77yM5ri45oiP6L+H56iL5Lit5LiN5Lya6KKr5LiN5bCP5b+D6KaG55uW77yM5LiU57ud5a+55pyJ5YC877yM5aaC5p6c5bCa5pyq6K+75Y+W5LiK5qyh5pe26Ze055qE5oOF5Ya15LiL5Lmf5LiN5YWB6K645Yi35paw6KaG55uW5o6J5LiK5qyh55qE5Y6G5Y+y5pe26Ze077yM5L+d6K+B5LqG5LiK5qyh5pe26Ze055qE5YeG56Gu5L2/55So77yM6L+b6ICM5L+d6K+B5LqG56a757q/5pS255uK5pe26Ze055qE6K6h566X5YeG56Gu5bqmXHJcbiAgICAqL1xyXG4gICAgc2V0T2ZmbGluZVRpbWVzdGFtcCgpIHtcclxuICAgICAgICAvLyDpmLLmraLov5jmsqHor7vlj5bkuIrmrKHnprvnur/ml7bpl7Qg5bCx6KKr5b+D6Lez5pu05paw5pe26Ze05oiz55qE5pa55byP57uZ6KaG55uW5o6J5LqG77yM5a+86Ie05LiK5qyh5pyA5ZCO55qE5ri45oiP5pe26Ze05oiz6K+75Y+W5LiN5Yiw5LqGXHJcbiAgICAgICAgaWYgKHRoaXMub2ZmbGluZUxhc3RUaW1lc3RhbXAgPT0gLTEpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRpbWUgPSBTREtNYW5hZ2VyLmdldFNlcnZlclRpbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLm9mZmxpbmVUaW1lc3RhbXAgPSBNYXRoLmZsb29yKHRpbWUgLyAxMDAwKTtcclxuICAgICAgICB0aGlzLmRhdGEuc2F2ZU9mZmxpbmVUaW1lc3RhbXAoKTtcclxuICAgIH1cclxuICAgIC8qKiDor7vlj5bnprvnur/mlLbnm4rml7bpl7TmiLMgKi9cclxuICAgIGdldE9mZmxpbmVUaW1lc3RhbXAoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZsaW5lTGFzdFRpbWVzdGFtcDtcclxuICAgIH1cclxuICAgIC8v6K6i5Y2V5Lit5b+DXHJcbiAgICBnZXRPcmRlckxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5vcmRlckNhY2hlTGlzdDtcclxuICAgIH1cclxuICAgIGdldCBvcmRlckxlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm9yZGVyVW5sb2NrTGVuO1xyXG4gICAgfVxyXG4gICAgc2V0IG9yZGVyTGVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLm9yZGVyVW5sb2NrTGVuID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRPcmRlcigpO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9yZGVyVmlkZW9OdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5vcmRlclZpZGVvTnVtO1xyXG4gICAgfVxyXG4gICAgc2V0IG9yZGVyVmlkZW9OdW0odmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGEub3JkZXJWaWRlb051bSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0T3JkZXIoKTtcclxuICAgIH1cclxuICAgIHNldE9yZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5vcmRlckNhY2hlTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLnN0YXRlIC0gYS5zdGF0ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZGF0YS5zYXZlT3JkZXIoKTtcclxuICAgIH1cclxuICAgIC8v5o6l5Y2V5ZCO5qC55o2u5LuT5bqT5bqT5a2Y5pu05paw5b2T5YmN6K6i5Y2V5pWw6YePXHJcbiAgICB1cGRhdGVPcmRlcigpIHtcclxuICAgICAgICBsZXQgb3JkZXIgPSB0aGlzLmdldEN1cnJlbnRPcmRlcigpO1xyXG5cclxuICAgICAgICBsZXQgbGlzdDEgPSB0aGlzLmdldFdhcmVySG91c2VDZmcoKS5jcm9wTGlzdDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gbGlzdDFbaV07XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBZGRPcmRlcihpdGVtLmNyb3BJZCwgaXRlbS5udW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5Y2W5Ye654mp5ZOB5pu05paw6K6i5Y2VXHJcbiAgICB1cGRhdGVDdXJyZW50T3JkZXIoaWQpIHtcclxuICAgICAgICBsZXQgb3JkZXIgPSB0aGlzLmdldEN1cnJlbnRPcmRlcigpO1xyXG4gICAgICAgIGlmIChvcmRlcikge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IG9yZGVyLmNyb3BMaXN0O1xyXG4gICAgICAgICAgICAvLyBsZXQgc3RhdGVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0uY3JvcElkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdFtpXS5udW0gLT0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGEuc2F2ZU9yZGVyKCk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLk9SREVSX1VQREFURV9UT1ApXHJcbiAgICB9XHJcbiAgICAvL+WinuWKoOS9nOeJqVxyXG4gICAgY2hlY2tBZGRPcmRlcihpZCwgbnVtLCBjb21wbGV0ZUZ1bj8sIGNhbGxCYWNrPykge1xyXG4gICAgICAgIGxldCBvcmRlciA9IHRoaXMuZ2V0Q3VycmVudE9yZGVyKCk7XHJcbiAgICAgICAgaWYgKCFvcmRlcikge1xyXG4gICAgICAgICAgICBpZiAoY2FsbEJhY2spIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpc3QgPSBvcmRlci5jcm9wTGlzdDtcclxuICAgICAgICAvLyBsZXQgc3RhdGVMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlTGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGxpc3RbaV0uY3JvcElkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldLm51bSArPSBudW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGxpc3RbaV0ubnVtID49IGxpc3RbaV0udGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZUxpc3QucHVzaCgxKVxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVMZW4gKz0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0YXRlTGlzdC5wdXNoKDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLk9SREVSX1VQREFURV9UT1ApXHJcbiAgICAgICAgdGhpcy5zZXRPcmRlcigpO1xyXG4gICAgICAgIGlmIChjb21wbGV0ZUxlbiA9PSBsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoY29tcGxldGVGdW4pIGNvbXBsZXRlRnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSBjYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5qOA5rWL6K6i5Y2V5piv5ZCm5a6M5oiQXHJcbiAgICBjaGVja09yZGVyQ29tcGxldGUoKSB7XHJcbiAgICAgICAgbGV0IG9yZGVyID0gdGhpcy5nZXRDdXJyZW50T3JkZXIoKTtcclxuICAgICAgICBpZiAob3JkZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gb3JkZXIuY3JvcExpc3Q7XHJcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUxlbiA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0ubnVtID49IGxpc3RbaV0udGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVMZW4gKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29tcGxldGVMZW4gPT0gbGlzdC5sZW5ndGgpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaGF2ZU9yZGVyKCkge1xyXG4gICAgICAgIGxldCBvcmRlciA9IHRoaXMuZ2V0Q3VycmVudE9yZGVyKCk7XHJcbiAgICAgICAgaWYgKG9yZGVyKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy/lvZPliY3orqLljZVcclxuICAgIGdldEN1cnJlbnRPcmRlcigpIHtcclxuICAgICAgICBsZXQgb3JkZXI6IG9yZGVyQ2FjaGU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEub3JkZXJDYWNoZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmRhdGEub3JkZXJDYWNoZUxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIG9yZGVyID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3JkZXI7XHJcbiAgICB9XHJcbiAgICAvL+W9k+WJjeiuouWNleS4reeahOmaj+acuuS9nOeJqVxyXG4gICAgZ2V0Q3VycmVudE9yZGVyQ3JvcCgpIHtcclxuICAgICAgICBsZXQgb3JkZXIgPSB0aGlzLmdldEN1cnJlbnRPcmRlcigpO1xyXG4gICAgICAgIGxldCBjcm9wTGlzdCA9IFtdO1xyXG4gICAgICAgIGlmIChvcmRlcikge1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IG9yZGVyLmNyb3BMaXN0O1xyXG4gICAgICAgICAgICAvLyBsZXQgc3RhdGVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0uY3JvcElkIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JvcExpc3QucHVzaChsaXN0W2ldLmNyb3BJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0ubnVtID49IGxpc3RbaV0udGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0W2ldLmNyb3BJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNyb3BMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWxzLmdldFJhbmRvbUJ5QXJyKGNyb3BMaXN0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLmdldFJhbmRvbUJ5QXJyKHRoaXMuZGF0YS51bmxvY2tDcm9wTGlzdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBndWlkZVN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ3VpZGVTdGF0ZTtcclxuICAgIH1cclxuICAgIHNldCBndWlkZVN0YXRlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmd1aWRlU3RhdGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRhdGEuc2F2ZUd1aWRlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgZ3VpZGVTdGVwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ3VpZGVTdGVwO1xyXG4gICAgfVxyXG4gICAgc2V0IGd1aWRlU3RlcCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5ndWlkZVN0ZXAgKz0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mr4/ml6Xoh6rliqjmi5vmj73kurrmlbBcclxuICAgIGFkZERheUF1dG9Sb2xlTnVtKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5kYXlBdXRvUm9sZU51bSsrO1xyXG4gICAgfVxyXG4gICAgLy/mr4/ml6Xoh6rliqjmi5vmj73ml7bpl7Tpl7TpmpRcclxuICAgIGdldEF1dG9Sb2xlVGltZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmRheUF1dG9Sb2xlTnVtIDwgMTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmRheUF1dG9Sb2xlTnVtIDwgMzEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHpkR2tOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS56ZEdrTnVtO1xyXG4gICAgfVxyXG4gICAgc2V0IHpkR2tOdW0odmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRhdGEuemRHa051bSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zYXZlWmxOdW0oKTtcclxuICAgIH1cclxuICAgIC8v5omL5Yqo5oub5o+95qyh5pWwXHJcbiAgICBzZXRabE51bSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS56aGFvbGFuTnVtID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kYXRhLnNhdmVabE51bSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0WmxOdW0oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS56aGFvbGFuTnVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJNb2RlbC5pbnN0YW5jZSgpO1xyXG4iXX0=
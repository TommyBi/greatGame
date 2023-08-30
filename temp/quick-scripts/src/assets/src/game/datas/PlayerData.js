"use strict";
cc._RF.push(module, '941b0Q87mVFr5fhAL82Kc/6', 'PlayerData');
// src/game/datas/PlayerData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageHelper_1 = require("../../framework/helper/StorageHelper");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var SortUtils_1 = require("../../framework/tools/SortUtils");
var Utils_1 = require("../../framework/tools/Utils");
var Global_1 = require("../consts/Global");
var StorageType_1 = require("../consts/StorageType");
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        this.level = 1;
        this.money = 0; //红包钱币数量
        this.gold = 1000; //钞票数量
        this.xfzs = 30; //幸福指数
        this.dayAutoRoleNum = 0; //每天自动招揽人数
        this.soundSwitch = Global_1.default.SOUND_SWITCH_OPEN; //音乐 1开启0关闭
        this.soundYinXiao = Global_1.default.SOUND_YINXIAO_SWITCH_OPEN; //音效 1开启0关闭
        this.personRecommSwitch = Global_1.default.PERSONALRECOMM_SWITCH_OPEN; // 个性推荐开关 1开启0关闭
        this.offlineTimestamp = Math.floor(new Date().getTime() / 1000); // 存储玩游戏的时间戳
        this.guideTaskCfg = {
            taskId: 1,
            taskState: 0 //0未完成，1可领取
        };
        this.cropRipetimes = 0; //作物成熟次数
        this.cropGetNum = 0; //作物收获次数
        this.pestNum = 0; //有害虫的地块数量
        this.unlockCropList = []; //已解锁作物列表
        //初始UI配置
        this.initUIConfig = {
            roadlv: 1,
            walllv: 1,
            cashierlv: 1,
            pipelv: 1,
            fencelv: 1,
            warehouselv: 1,
            scarecrowlv: 1,
            shelvesList: [],
        };
        //初始菜地配置
        this.fieldCfgList = [];
        //初始货架配置
        this.shelvesCfgList = [];
        this.plantNumList = [];
        //仓库配置
        this.WareHouseConfig = {
            lv: 1,
            cropList: []
        };
        this.cashierAddTime = 0;
        // propList: prop_config[] = [
        // ]
        // 已经持有的prop 当前已经持有的propId,包含prop的所有type
        this.hasProps = [];
        // 已经持有的货架id列表
        this.hasShelves = [1];
        // 每日使用自助服务的剩余次数，默认上限是30次，每日0点进行次数进行刷新
        // 当前的日期，用于判断是否需要重置自助服务剩余次数
        this.curDay = MkUtils_1.default.calculNowDayStartTimeStamp();
        this.guideState = 0; //新手引导状态，1是完成
        this.guideStep = 0; //新手引导步骤
        this.zhaolanNum = 0;
        this.cashierGold = 0; //收银台产出金币
        this.lvUp_video_num = {}; //升级看视频次数，key值为物品ID
        this.isFirstClearPest = true; //当日是否第一次除虫
        //订单相关数据缓存
        this.orderUnlockLen = 2;
        this.orderVideoNum = 0; //接单期间看视频数量
        this.zdGkNum = 0; //招待顾客次数
        this.orderCacheList = [];
    }
    PlayerData.prototype.saveData = function () {
        var sdata = {
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
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.gameData, sdata);
        this.saveUiData();
    };
    //收银台自动产出
    PlayerData.prototype.setCashierGold = function () {
        var data = {
            cashierGold: this.cashierGold,
            cashierAddTime: this.cashierAddTime,
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.cashierGold, data);
    };
    //种植次数存储
    PlayerData.prototype.savePlantNum = function () {
        var data = {
            plantNum: this.plantNumList
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.plantNum, data);
    };
    //订单缓存
    PlayerData.prototype.saveOrder = function () {
        var data = {
            orderUnlockLen: this.orderUnlockLen,
            orderVideoNum: this.orderVideoNum,
            orderCacheList: this.orderCacheList
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.order, data);
    };
    //招揽人数
    PlayerData.prototype.saveZlNum = function () {
        var data = {
            zhaolanNum: this.zhaolanNum,
            zdGkNum: this.zdGkNum
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.zlNum, data);
    };
    //保存引导数据
    PlayerData.prototype.saveGuide = function () {
        var data = {
            guideState: this.guideState,
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.guide, data);
    };
    //ui数据
    PlayerData.prototype.saveUiData = function () {
        var data = {
            fieldCfgList: this.fieldCfgList,
            uiConfig: this.uiConfig,
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.uiCionfig, data);
    };
    //仓库数据存储
    PlayerData.prototype.saveWareHouseData = function () {
        var data = {
            WareHouseConfig: this.WareHouseConfig
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.wareHouse, data);
    };
    //升级观看视频次数
    PlayerData.prototype.saveLvupVideoNum = function () {
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.lvUpVideoNum, this.lvUp_video_num);
    };
    /** 存离线收益的时间戳 */
    PlayerData.prototype.saveOfflineTimestamp = function () {
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.offlineTimestamp, { offlineTimestamp: this.offlineTimestamp });
        // cc.log(`[debug] save storage data of offlineTimestamp:`, { offlineTimestamp: this.offlineTimestamp });
    };
    /** 取离线收益的缓存时间戳 */
    PlayerData.prototype.getOfflineTimestampData = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.offlineTimestamp);
        cc.log("[debug] get storage data of offlineTimestamp:", data);
        if (data == null) {
            this.offlineTimestamp = this.offlineTimestamp;
        }
        else {
            this.offlineTimestamp = Utils_1.default.isUndefined(data.offlineTimestamp) ? this.offlineTimestamp : data.offlineTimestamp;
        }
    };
    PlayerData.prototype.getData = function () {
        this.getGuide();
        this.getOfflineTimestampData();
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.gameData);
        cc.log("debug:缓存数据：", data);
        if (data && this.guideState) {
            this.gold = Utils_1.default.isUndefined(data.gold) ? this.gold : data.gold;
            this.xfzs = Utils_1.default.isUndefined(data.xfzs) ? this.xfzs : data.xfzs;
            this.soundSwitch = Utils_1.default.isUndefined(data.soundSwitch) ? this.soundSwitch : data.soundSwitch;
            this.soundYinXiao = Utils_1.default.isUndefined(data.soundYinXiao) ? this.soundYinXiao : data.soundYinXiao;
            this.personRecommSwitch = Utils_1.default.isUndefined(data.personRecommSwitch) ? this.personRecommSwitch : data.personRecommSwitch;
            this.unlockCropList = Utils_1.default.isUndefined(data.unlockCropList) ? this.unlockCropList : data.unlockCropList;
            this.hasProps = Utils_1.default.isUndefined(data.hasProps) ? [] : data.hasProps;
            this.hasShelves = Utils_1.default.isUndefined(data.hasShelves) ? [] : data.hasShelves;
            this.guideTaskCfg = Utils_1.default.isUndefined(data.guideTaskCfg) ? this.guideTaskCfg : data.guideTaskCfg;
            this.curDay = Utils_1.default.isUndefined(data.curDay) ? this.curDay : data.curDay;
            this.cropRipetimes = Utils_1.default.isUndefined(data.cropRipetimes) ? this.cropRipetimes : data.cropRipetimes;
            this.pestNum = Utils_1.default.isUndefined(data.pestNum) ? this.pestNum : data.pestNum;
            this.cropGetNum = Utils_1.default.isUndefined(data.cropGetNum) ? this.cropGetNum : data.cropGetNum;
            this.guideState = Utils_1.default.isUndefined(data.guideState) ? this.guideState : data.guideState;
            var day1 = new Date().getDay();
            var day2 = new Date(this.offlineTimestamp * 1000).getDay();
            if (day1 == day2) {
                this.isFirstClearPest = Utils_1.default.isUndefined(data.isFirstClearPest) ? this.isFirstClearPest : data.isFirstClearPest;
                this.dayAutoRoleNum = Utils_1.default.isUndefined(data.autoRoleNum) ? this.dayAutoRoleNum : data.dayAutoRoleNum;
            }
            else {
                this.isFirstClearPest = true;
                this.dayAutoRoleNum = 0;
            }
            SortUtils_1.default.insertSort(this.unlockCropList);
        }
        else {
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
        if (Global_1.default.isCeshi_version) {
            this.guideState = 1;
        }
    };
    //每日收银台产出
    PlayerData.prototype.getCashierNum = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.cashierGold);
        var day1 = new Date().getDay();
        var day2 = new Date(this.offlineTimestamp * 1000).getDay();
        if (data)
            this.cashierAddTime = Utils_1.default.isUndefined(data.cashierAddTime) ? this.cashierAddTime : data.cashierAddTime;
        if (day1 == day2) {
            if (data) {
                this.cashierGold = Utils_1.default.isUndefined(data.cashierGold) ? this.cashierGold : data.cashierGold;
            }
            else {
                this.cashierGold = this.cashierGold;
            }
            // this.cashierGold = Utils.isUndefined(data.cashierGold) ? this.cashierGold : data.cashierGold;
        }
        else {
            this.cashierGold = 0;
        }
    };
    PlayerData.prototype.getZlNum = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.zlNum);
        if (data && this.guideState) {
            this.zhaolanNum = Utils_1.default.isUndefined(data.zhaolanNum) ? this.zhaolanNum : data.zhaolanNum;
            this.zdGkNum = Utils_1.default.isUndefined(data.zdGkNum) ? this.zdGkNum : data.zdGkNum;
        }
        else {
            this.zhaolanNum = this.zhaolanNum;
            this.zdGkNum = this.zdGkNum;
        }
    };
    PlayerData.prototype.getOrder = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.order);
        if (data && this.guideState) {
            this.orderUnlockLen = Utils_1.default.isUndefined(data.orderUnlockLen) ? this.orderUnlockLen : data.orderUnlockLen;
            this.orderCacheList = Utils_1.default.isUndefined(data.orderCacheList) ? this.orderCacheList : data.orderCacheList;
            this.orderVideoNum = Utils_1.default.isUndefined(data.orderVideoNum) ? this.orderVideoNum : data.orderVideoNum;
        }
        else {
            this.orderCacheList = this.orderCacheList;
            this.orderUnlockLen = this.orderUnlockLen;
        }
        this.orderCacheList.sort(function (a, b) {
            return b.state - a.state;
        });
    };
    //种植次数
    PlayerData.prototype.getPlantNum = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.plantNum);
        if (data && this.guideState) {
            this.plantNumList = Utils_1.default.isUndefined(data.plantNum) ? this.plantNumList : data.plantNum;
        }
        else {
            this.plantNumList = [];
        }
    };
    PlayerData.prototype.getUiData = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.uiCionfig);
        if (data && this.guideState) {
            this.uiConfig = Utils_1.default.isUndefined(data.uiConfig) ? this.initUIConfig : data.uiConfig;
            this.fieldCfgList = Utils_1.default.isUndefined(data.fieldCfgList) ? this.fieldCfgList : data.fieldCfgList;
        }
        else {
            this.uiConfig = this.initUIConfig;
            this.uiConfig.shelvesList = this.shelvesCfgList;
            this.fieldCfgList = this.fieldCfgList;
        }
        cc.log("[debug] 记录的uiConfig:", this.uiConfig);
    };
    //仓库数据
    PlayerData.prototype.getWareData = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.wareHouse);
        if (data && this.guideState) {
            this.WareHouseConfig = Utils_1.default.isUndefined(data.WareHouseConfig) ? this.WareHouseConfig : data.WareHouseConfig;
        }
        else {
            this.WareHouseConfig = this.WareHouseConfig;
        }
        var list = this.WareHouseConfig.cropList;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            item.put_on_num = 0;
        }
    };
    //升级观看视频次数
    PlayerData.prototype.getLvupVideo = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.lvUpVideoNum);
        if (data && this.guideState) {
            this.lvUp_video_num = Utils_1.default.isUndefined(data) ? this.lvUp_video_num : data;
        }
        else {
            this.lvUp_video_num = {};
        }
    };
    //引导数据
    PlayerData.prototype.getGuide = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.guide);
        if (data) {
            this.guideState = Utils_1.default.isUndefined(data.guideState) ? this.guideState : data.guideState;
        }
    };
    PlayerData.prototype.resetData = function () {
        this.saveData();
    };
    return PlayerData;
}());
exports.default = PlayerData;

cc._RF.pop();
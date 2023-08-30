
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/datas/PlayerData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9kYXRhcy9QbGF5ZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLHlEQUFvRDtBQUNwRCw2REFBd0Q7QUFDeEQscURBQWdEO0FBQ2hELDJDQUFzQztBQUN0QyxxREFBZ0Q7QUF3Q2hEO0lBQUE7UUFDVyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBQSxRQUFRO1FBQzFCLFNBQUksR0FBVyxJQUFJLENBQUMsQ0FBQSxNQUFNO1FBQzFCLFNBQUksR0FBVyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBRXhCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUVwQyxnQkFBVyxHQUFXLGdCQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQSxXQUFXO1FBQzFELGlCQUFZLEdBQVcsZ0JBQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBLFdBQVc7UUFDbkUsdUJBQWtCLEdBQVcsZ0JBQU0sQ0FBQywwQkFBMEIsQ0FBQyxDQUFBLGdCQUFnQjtRQUMvRSxxQkFBZ0IsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQSxZQUFZO1FBRS9FLGlCQUFZLEdBQWlCO1lBQ3pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsU0FBUyxFQUFFLENBQUMsQ0FBQSxXQUFXO1NBQzFCLENBQUE7UUFDRCxrQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFDbEMsZUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFDdkIsWUFBTyxHQUFHLENBQUMsQ0FBQyxDQUFBLFVBQVU7UUFFdEIsbUJBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQSxTQUFTO1FBRTdCLFFBQVE7UUFDUixpQkFBWSxHQUFhO1lBQ3JCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxTQUFTLEVBQUUsQ0FBQztZQUNaLE1BQU0sRUFBRSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7WUFDVixXQUFXLEVBQUUsQ0FBQztZQUNkLFdBQVcsRUFBRSxDQUFDO1lBQ2QsV0FBVyxFQUFFLEVBQUU7U0FFbEIsQ0FBQTtRQUNELFFBQVE7UUFDUixpQkFBWSxHQUFrQixFQUM3QixDQUFBO1FBQ0QsUUFBUTtRQUNSLG1CQUFjLEdBQUcsRUFDaEIsQ0FBQTtRQUVELGlCQUFZLEdBQWUsRUFBRSxDQUFBO1FBRTdCLE1BQU07UUFDTixvQkFBZSxHQUFvQjtZQUMvQixFQUFFLEVBQUUsQ0FBQztZQUNMLFFBQVEsRUFBRSxFQUNUO1NBQ0osQ0FBQztRQUVGLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLDhCQUE4QjtRQUU5QixJQUFJO1FBRUosd0NBQXdDO1FBQ3hDLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFFeEIsY0FBYztRQUNkLGVBQVUsR0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNCLHNDQUFzQztRQUN0QywyQkFBMkI7UUFDM0IsV0FBTSxHQUFXLGlCQUFPLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUV0RCxlQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUEsYUFBYTtRQUM1QixjQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUEsUUFBUTtRQUV0QixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWYsZ0JBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQSxTQUFTO1FBRXpCLG1CQUFjLEdBQUcsRUFBRSxDQUFBLENBQUEsbUJBQW1CO1FBRXRDLHFCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFBLFdBQVc7UUFDbkMsVUFBVTtRQUNWLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUEsV0FBVztRQUV0QixZQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUEsUUFBUTtRQUMzQixtQkFBYyxHQUFpQixFQUU5QixDQUFBO0lBNFBMLENBQUM7SUExUEcsNkJBQVEsR0FBUjtRQUNJLElBQUksS0FBSyxHQUFHO1lBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFFbkMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDOUIsQ0FBQztRQUNGLHNFQUFzRTtRQUN0RSx1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELFNBQVM7SUFDVCxtQ0FBYyxHQUFkO1FBRUksSUFBSSxJQUFJLEdBQUc7WUFDUCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3RDLENBQUE7UUFDRCx1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0QsUUFBUTtJQUNSLGlDQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksR0FBRztZQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWTtTQUM5QixDQUFBO1FBQ0QsdUJBQWEsQ0FBQyxhQUFhLENBQUMscUJBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELE1BQU07SUFDTiw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUc7WUFDUCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUN0QyxDQUFBO1FBQ0QsdUJBQWEsQ0FBQyxhQUFhLENBQUMscUJBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELE1BQU07SUFDTiw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUc7WUFDUCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsT0FBTyxFQUFDLElBQUksQ0FBQyxPQUFPO1NBQ3ZCLENBQUE7UUFDRCx1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsUUFBUTtJQUNSLDhCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBRztZQUNQLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM5QixDQUFBO1FBQ0QsdUJBQWEsQ0FBQyxhQUFhLENBQUMscUJBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELE1BQU07SUFDTiwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxJQUFJLEdBQUc7WUFDUCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUE7UUFDRCx1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsUUFBUTtJQUNSLHNDQUFpQixHQUFqQjtRQUNJLElBQUksSUFBSSxHQUFHO1lBQ1AsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ3hDLENBQUE7UUFFRCx1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsVUFBVTtJQUNWLHFDQUFnQixHQUFoQjtRQUNJLHVCQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0QsZ0JBQWdCO0lBQ2hCLHlDQUFvQixHQUFwQjtRQUNJLHVCQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZHLHlHQUF5RztJQUM3RyxDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLDRDQUF1QixHQUF2QjtRQUNJLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwRSxFQUFFLENBQUMsR0FBRyxDQUFDLCtDQUErQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDakQ7YUFBTTtZQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUNwSDtJQUNMLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9CLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM3RixJQUFJLENBQUMsWUFBWSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2pHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUV6SCxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3pHLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDNUUsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUVqRyxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXpFLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDckcsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3RSxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRXpGLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekYsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0QsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNkLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDakgsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN6RztpQkFBTTtnQkFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzthQUMzQjtZQUVELG1CQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEIsSUFBSSxnQkFBTSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUVMLENBQUM7SUFDRCxTQUFTO0lBQ1Qsa0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0QsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNuSCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hHO2lCQUFNO2dCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN2QztZQUNELGdHQUFnRztTQUNuRzthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBQ0QsNkJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pGLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDaEY7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBQ0QsNkJBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3pHLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDekcsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN4RzthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM3QztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsTUFBTTtJQUNOLGdDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRyx1QkFBYSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM1RjthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JGLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEc7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN6QztRQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxNQUFNO0lBQ04sZ0NBQVcsR0FBWDtRQUNJLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ2hIO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDL0M7UUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDdkI7SUFFTCxDQUFDO0lBQ0QsVUFBVTtJQUNWLGlDQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksR0FBRyx1QkFBYSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDOUU7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUNELE1BQU07SUFDTiw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLEdBQUcsdUJBQWEsQ0FBQyxZQUFZLENBQUMscUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDNUY7SUFDTCxDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQS9VQSxBQStVQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b3JhZ2VIZWxwZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9oZWxwZXIvU3RvcmFnZUhlbHBlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IFNvcnRVdGlscyBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL1NvcnRVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay90b29scy9VdGlsc1wiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBTdG9yYWdlVHlwZSBmcm9tIFwiLi4vY29uc3RzL1N0b3JhZ2VUeXBlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uL3ZpZXcvbWFpbi9GaWVsZFByZWZhYlwiO1xyXG5pbXBvcnQgeyBXYXJlSG91c2VDb25maWcgfSBmcm9tIFwiLi4vdmlldy9tYWluL1dhcmVob3VzZVByZWZhYlwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVSUNvbmZpZyB7XHJcbiAgICByb2FkbHY6IG51bWJlcixcclxuICAgIHdhbGxsdjogbnVtYmVyLFxyXG4gICAgY2FzaGllcmx2OiBudW1iZXIsXHJcbiAgICBwaXBlbHY6IG51bWJlcixcclxuICAgIGZlbmNlbHY6IG51bWJlcixcclxuICAgIHdhcmVob3VzZWx2OiBudW1iZXIsXHJcbiAgICBzY2FyZWNyb3dsdjogbnVtYmVyLFxyXG4gICAgc2hlbHZlc0xpc3Q6IG51bWJlcltdLFxyXG4gICAgLy8gZmllbGRMaXN0OiBGaWVsZENvbmZpZ1tdLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgZ3VpZGVUYXNrQ2ZnIHtcclxuICAgIHRhc2tJZDogbnVtYmVyLFxyXG4gICAgdGFza1N0YXRlOiBudW1iZXJcclxufVxyXG4vL+iuvuaWvemFjee9rlxyXG5leHBvcnQgaW50ZXJmYWNlIHByb3BfY29uZmlnIHtcclxuICAgIHR5cGUsXHJcbiAgICBsZXZlbFxyXG59XHJcbi8v56eN5qSN5qyh5pWwXHJcbmV4cG9ydCBpbnRlcmZhY2UgcGxhbnROdW0ge1xyXG4gICAgaWQsXHJcbiAgICBudW1cclxufVxyXG4vL+iuouWNlee8k+WtmFxyXG5leHBvcnQgaW50ZXJmYWNlIG9yZGVyQ2FjaGUge1xyXG4gICAgcXVhbGl0eSxcclxuICAgIGlkLFxyXG4gICAgaW5kZXgsXHJcbiAgICB1bmxvY2ssLy/mmK/lkKbop6PplIEwLDFcclxuICAgIHN0YXRlLC8v5piv5ZCm5o6l5Y2VMCwxXHJcbiAgICBjcm9wTGlzdCxcclxuICAgIHRpbWVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyRGF0YSB7XHJcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgbW9uZXk6IG51bWJlciA9IDA7Ly/nuqLljIXpkrHluIHmlbDph49cclxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXIgPSAxMDAwOy8v6ZKe56Wo5pWw6YePXHJcbiAgICBwdWJsaWMgeGZ6czogbnVtYmVyID0gMzA7Ly/lubjnpo/mjIfmlbBcclxuXHJcbiAgICBwdWJsaWMgZGF5QXV0b1JvbGVOdW0gPSAwOy8v5q+P5aSp6Ieq5Yqo5oub5o+95Lq65pWwXHJcblxyXG4gICAgc291bmRTd2l0Y2g6IG51bWJlciA9IEdsb2JhbC5TT1VORF9TV0lUQ0hfT1BFTjsvL+mfs+S5kCAx5byA5ZCvMOWFs+mXrVxyXG4gICAgc291bmRZaW5YaWFvOiBudW1iZXIgPSBHbG9iYWwuU09VTkRfWUlOWElBT19TV0lUQ0hfT1BFTjsvL+mfs+aViCAx5byA5ZCvMOWFs+mXrVxyXG4gICAgcGVyc29uUmVjb21tU3dpdGNoOiBudW1iZXIgPSBHbG9iYWwuUEVSU09OQUxSRUNPTU1fU1dJVENIX09QRU47Ly8g5Liq5oCn5o6o6I2Q5byA5YWzIDHlvIDlkK8w5YWz6ZetXHJcbiAgICBvZmZsaW5lVGltZXN0YW1wOiBudW1iZXIgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7Ly8g5a2Y5YKo546p5ri45oiP55qE5pe26Ze05oizXHJcblxyXG4gICAgZ3VpZGVUYXNrQ2ZnOiBndWlkZVRhc2tDZmcgPSB7XHJcbiAgICAgICAgdGFza0lkOiAxLFxyXG4gICAgICAgIHRhc2tTdGF0ZTogMC8vMOacquWujOaIkO+8jDHlj6/pooblj5ZcclxuICAgIH1cclxuICAgIGNyb3BSaXBldGltZXM6IG51bWJlciA9IDA7Ly/kvZznianmiJDnhp/mrKHmlbBcclxuICAgIGNyb3BHZXROdW0gPSAwOy8v5L2c54mp5pS26I635qyh5pWwXHJcbiAgICBwZXN0TnVtID0gMDsvL+acieWus+iZq+eahOWcsOWdl+aVsOmHj1xyXG5cclxuICAgIHVubG9ja0Nyb3BMaXN0ID0gW107Ly/lt7Lop6PplIHkvZznianliJfooahcclxuICAgIHVpQ29uZmlnOiBVSUNvbmZpZztcclxuICAgIC8v5Yid5aeLVUnphY3nva5cclxuICAgIGluaXRVSUNvbmZpZzogVUlDb25maWcgPSB7XHJcbiAgICAgICAgcm9hZGx2OiAxLFxyXG4gICAgICAgIHdhbGxsdjogMSxcclxuICAgICAgICBjYXNoaWVybHY6IDEsXHJcbiAgICAgICAgcGlwZWx2OiAxLFxyXG4gICAgICAgIGZlbmNlbHY6IDEsXHJcbiAgICAgICAgd2FyZWhvdXNlbHY6IDEsXHJcbiAgICAgICAgc2NhcmVjcm93bHY6IDEsXHJcbiAgICAgICAgc2hlbHZlc0xpc3Q6IFtdLFxyXG4gICAgICAgIC8vIGZpZWxkTGlzdDogW11cclxuICAgIH1cclxuICAgIC8v5Yid5aeL6I+c5Zyw6YWN572uXHJcbiAgICBmaWVsZENmZ0xpc3Q6IEZpZWxkQ29uZmlnW10gPSBbXHJcbiAgICBdXHJcbiAgICAvL+WIneWni+i0p+aetumFjee9rlxyXG4gICAgc2hlbHZlc0NmZ0xpc3QgPSBbXHJcbiAgICBdXHJcblxyXG4gICAgcGxhbnROdW1MaXN0OiBwbGFudE51bVtdID0gW11cclxuXHJcbiAgICAvL+S7k+W6k+mFjee9rlxyXG4gICAgV2FyZUhvdXNlQ29uZmlnOiBXYXJlSG91c2VDb25maWcgPSB7XHJcbiAgICAgICAgbHY6IDEsXHJcbiAgICAgICAgY3JvcExpc3Q6IFtcclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgIGNhc2hpZXJBZGRUaW1lID0gMDtcclxuICAgIC8vIHByb3BMaXN0OiBwcm9wX2NvbmZpZ1tdID0gW1xyXG5cclxuICAgIC8vIF1cclxuXHJcbiAgICAvLyDlt7Lnu4/mjIHmnInnmoRwcm9wIOW9k+WJjeW3sue7j+aMgeacieeahHByb3BJZCzljIXlkKtwcm9w55qE5omA5pyJdHlwZVxyXG4gICAgaGFzUHJvcHM6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgLy8g5bey57uP5oyB5pyJ55qE6LSn5p62aWTliJfooahcclxuICAgIGhhc1NoZWx2ZXM6IG51bWJlcltdID0gWzFdO1xyXG5cclxuICAgIC8vIOavj+aXpeS9v+eUqOiHquWKqeacjeWKoeeahOWJqeS9measoeaVsO+8jOm7mOiupOS4iumZkOaYrzMw5qyh77yM5q+P5pelMOeCuei/m+ihjOasoeaVsOi/m+ihjOWIt+aWsFxyXG4gICAgLy8g5b2T5YmN55qE5pel5pyf77yM55So5LqO5Yik5pat5piv5ZCm6ZyA6KaB6YeN572u6Ieq5Yqp5pyN5Yqh5Ymp5L2Z5qyh5pWwXHJcbiAgICBjdXJEYXk6IG51bWJlciA9IE1LVXRpbHMuY2FsY3VsTm93RGF5U3RhcnRUaW1lU3RhbXAoKTtcclxuXHJcbiAgICBndWlkZVN0YXRlID0gMDsvL+aWsOaJi+W8leWvvOeKtuaAge+8jDHmmK/lrozmiJBcclxuICAgIGd1aWRlU3RlcCA9IDA7Ly/mlrDmiYvlvJXlr7zmraXpqqRcclxuXHJcbiAgICB6aGFvbGFuTnVtID0gMDtcclxuXHJcbiAgICBjYXNoaWVyR29sZCA9IDA7Ly/mlLbpk7blj7Dkuqflh7rph5HluIFcclxuXHJcbiAgICBsdlVwX3ZpZGVvX251bSA9IHt9Ly/ljYfnuqfnnIvop4bpopHmrKHmlbDvvIxrZXnlgLzkuLrnianlk4FJRFxyXG5cclxuICAgIGlzRmlyc3RDbGVhclBlc3QgPSB0cnVlOy8v5b2T5pel5piv5ZCm56ys5LiA5qyh6Zmk6JmrXHJcbiAgICAvL+iuouWNleebuOWFs+aVsOaNrue8k+WtmFxyXG4gICAgb3JkZXJVbmxvY2tMZW4gPSAyO1xyXG4gICAgb3JkZXJWaWRlb051bSA9IDA7Ly/mjqXljZXmnJ/pl7TnnIvop4bpopHmlbDph49cclxuXHJcbiAgICBwdWJsaWMgemRHa051bSA9IDA7Ly/mi5vlvoXpob7lrqLmrKHmlbBcclxuICAgIG9yZGVyQ2FjaGVMaXN0OiBvcmRlckNhY2hlW10gPSBbXHJcblxyXG4gICAgXVxyXG5cclxuICAgIHNhdmVEYXRhKCkge1xyXG4gICAgICAgIGxldCBzZGF0YSA9IHtcclxuICAgICAgICAgICAgZ29sZDogdGhpcy5nb2xkLFxyXG4gICAgICAgICAgICBzb3VuZFN3aXRjaDogdGhpcy5zb3VuZFN3aXRjaCxcclxuICAgICAgICAgICAgc291bmRZaW5YaWFvOiB0aGlzLnNvdW5kWWluWGlhbyxcclxuICAgICAgICAgICAgcGVyc29uUmVjb21tU3dpdGNoOiB0aGlzLnBlcnNvblJlY29tbVN3aXRjaCxcclxuICAgICAgICAgICAgaGFzUHJvcHM6IHRoaXMuaGFzUHJvcHMsXHJcbiAgICAgICAgICAgIGhhc1NoZWx2ZXM6IHRoaXMuaGFzU2hlbHZlcyxcclxuICAgICAgICAgICAgZ3VpZGVUYXNrQ2ZnOiB0aGlzLmd1aWRlVGFza0NmZyxcclxuICAgICAgICAgICAgY3VyRGF5OiB0aGlzLmN1ckRheSxcclxuICAgICAgICAgICAgdW5sb2NrQ3JvcExpc3Q6IHRoaXMudW5sb2NrQ3JvcExpc3QsXHJcblxyXG4gICAgICAgICAgICBkYXlBdXRvUm9sZU51bTogdGhpcy5kYXlBdXRvUm9sZU51bSxcclxuICAgICAgICAgICAgY3JvcFJpcGV0aW1lczogdGhpcy5jcm9wUmlwZXRpbWVzLFxyXG4gICAgICAgICAgICBwZXN0TnVtOiB0aGlzLnBlc3ROdW0sXHJcbiAgICAgICAgICAgIHhmenM6IHRoaXMueGZ6cyxcclxuICAgICAgICAgICAgaXNGaXJzdENsZWFyUGVzdDogdGhpcy5pc0ZpcnN0Q2xlYXJQZXN0LFxyXG4gICAgICAgICAgICBjcm9wR2V0TnVtOiB0aGlzLmNyb3BHZXROdW0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBsYXllckRhdGEtPnNldERhdGEtPmRhdGEgaXMgXCIsSlNPTi5zdHJpbmdpZnkoc2RhdGEpKTtcclxuICAgICAgICBTdG9yYWdlSGVscGVyLnNhdmVKc29uQnlLZXkoU3RvcmFnZVR5cGUuZ2FtZURhdGEsIHNkYXRhKTtcclxuICAgICAgICB0aGlzLnNhdmVVaURhdGEoKTtcclxuICAgIH1cclxuICAgIC8v5pS26ZO25Y+w6Ieq5Yqo5Lqn5Ye6XHJcbiAgICBzZXRDYXNoaWVyR29sZCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNhc2hpZXJHb2xkOiB0aGlzLmNhc2hpZXJHb2xkLFxyXG4gICAgICAgICAgICBjYXNoaWVyQWRkVGltZTogdGhpcy5jYXNoaWVyQWRkVGltZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmNhc2hpZXJHb2xkLCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8v56eN5qSN5qyh5pWw5a2Y5YKoXHJcbiAgICBzYXZlUGxhbnROdW0oKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHBsYW50TnVtOiB0aGlzLnBsYW50TnVtTGlzdFxyXG4gICAgICAgIH1cclxuICAgICAgICBTdG9yYWdlSGVscGVyLnNhdmVKc29uQnlLZXkoU3RvcmFnZVR5cGUucGxhbnROdW0sIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgLy/orqLljZXnvJPlrZhcclxuICAgIHNhdmVPcmRlcigpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgb3JkZXJVbmxvY2tMZW46IHRoaXMub3JkZXJVbmxvY2tMZW4sXHJcbiAgICAgICAgICAgIG9yZGVyVmlkZW9OdW06IHRoaXMub3JkZXJWaWRlb051bSxcclxuICAgICAgICAgICAgb3JkZXJDYWNoZUxpc3Q6IHRoaXMub3JkZXJDYWNoZUxpc3RcclxuICAgICAgICB9XHJcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLm9yZGVyLCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8v5oub5o+95Lq65pWwXHJcbiAgICBzYXZlWmxOdW0oKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHpoYW9sYW5OdW06IHRoaXMuemhhb2xhbk51bSxcclxuICAgICAgICAgICAgemRHa051bTp0aGlzLnpkR2tOdW1cclxuICAgICAgICB9XHJcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLnpsTnVtLCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8v5L+d5a2Y5byV5a+85pWw5o2uXHJcbiAgICBzYXZlR3VpZGUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGd1aWRlU3RhdGU6IHRoaXMuZ3VpZGVTdGF0ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmd1aWRlLCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8vdWnmlbDmja5cclxuICAgIHNhdmVVaURhdGEoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGZpZWxkQ2ZnTGlzdDogdGhpcy5maWVsZENmZ0xpc3QsXHJcbiAgICAgICAgICAgIHVpQ29uZmlnOiB0aGlzLnVpQ29uZmlnLFxyXG4gICAgICAgIH1cclxuICAgICAgICBTdG9yYWdlSGVscGVyLnNhdmVKc29uQnlLZXkoU3RvcmFnZVR5cGUudWlDaW9uZmlnLCBkYXRhKTtcclxuICAgIH1cclxuICAgIC8v5LuT5bqT5pWw5o2u5a2Y5YKoXHJcbiAgICBzYXZlV2FyZUhvdXNlRGF0YSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgV2FyZUhvdXNlQ29uZmlnOiB0aGlzLldhcmVIb3VzZUNvbmZpZ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLndhcmVIb3VzZSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvL+WNh+e6p+ingueci+inhumikeasoeaVsFxyXG4gICAgc2F2ZUx2dXBWaWRlb051bSgpIHtcclxuICAgICAgICBTdG9yYWdlSGVscGVyLnNhdmVKc29uQnlLZXkoU3RvcmFnZVR5cGUubHZVcFZpZGVvTnVtLCB0aGlzLmx2VXBfdmlkZW9fbnVtKTtcclxuICAgIH1cclxuICAgIC8qKiDlrZjnprvnur/mlLbnm4rnmoTml7bpl7TmiLMgKi9cclxuICAgIHNhdmVPZmZsaW5lVGltZXN0YW1wKCkge1xyXG4gICAgICAgIFN0b3JhZ2VIZWxwZXIuc2F2ZUpzb25CeUtleShTdG9yYWdlVHlwZS5vZmZsaW5lVGltZXN0YW1wLCB7IG9mZmxpbmVUaW1lc3RhbXA6IHRoaXMub2ZmbGluZVRpbWVzdGFtcCB9KTtcclxuICAgICAgICAvLyBjYy5sb2coYFtkZWJ1Z10gc2F2ZSBzdG9yYWdlIGRhdGEgb2Ygb2ZmbGluZVRpbWVzdGFtcDpgLCB7IG9mZmxpbmVUaW1lc3RhbXA6IHRoaXMub2ZmbGluZVRpbWVzdGFtcCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Y+W56a757q/5pS255uK55qE57yT5a2Y5pe26Ze05oizICovXHJcbiAgICBnZXRPZmZsaW5lVGltZXN0YW1wRGF0YSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFN0b3JhZ2VIZWxwZXIuZ2V0SnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLm9mZmxpbmVUaW1lc3RhbXApO1xyXG4gICAgICAgIGNjLmxvZyhgW2RlYnVnXSBnZXQgc3RvcmFnZSBkYXRhIG9mIG9mZmxpbmVUaW1lc3RhbXA6YCwgZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVUaW1lc3RhbXAgPSB0aGlzLm9mZmxpbmVUaW1lc3RhbXA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZsaW5lVGltZXN0YW1wID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5vZmZsaW5lVGltZXN0YW1wKSA/IHRoaXMub2ZmbGluZVRpbWVzdGFtcCA6IGRhdGEub2ZmbGluZVRpbWVzdGFtcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmdldEd1aWRlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRPZmZsaW5lVGltZXN0YW1wRGF0YSgpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IFN0b3JhZ2VIZWxwZXIuZ2V0SnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmdhbWVEYXRhKTtcclxuICAgICAgICBjYy5sb2coXCJkZWJ1ZzrnvJPlrZjmlbDmja7vvJpcIiwgZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgdGhpcy5ndWlkZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ29sZCA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEuZ29sZCkgPyB0aGlzLmdvbGQgOiBkYXRhLmdvbGQ7XHJcbiAgICAgICAgICAgIHRoaXMueGZ6cyA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEueGZ6cykgPyB0aGlzLnhmenMgOiBkYXRhLnhmenM7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRTd2l0Y2ggPSBVdGlscy5pc1VuZGVmaW5lZChkYXRhLnNvdW5kU3dpdGNoKSA/IHRoaXMuc291bmRTd2l0Y2ggOiBkYXRhLnNvdW5kU3dpdGNoO1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kWWluWGlhbyA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEuc291bmRZaW5YaWFvKSA/IHRoaXMuc291bmRZaW5YaWFvIDogZGF0YS5zb3VuZFlpblhpYW87XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29uUmVjb21tU3dpdGNoID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5wZXJzb25SZWNvbW1Td2l0Y2gpID8gdGhpcy5wZXJzb25SZWNvbW1Td2l0Y2ggOiBkYXRhLnBlcnNvblJlY29tbVN3aXRjaDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudW5sb2NrQ3JvcExpc3QgPSBVdGlscy5pc1VuZGVmaW5lZChkYXRhLnVubG9ja0Nyb3BMaXN0KSA/IHRoaXMudW5sb2NrQ3JvcExpc3QgOiBkYXRhLnVubG9ja0Nyb3BMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLmhhc1Byb3BzID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5oYXNQcm9wcykgPyBbXSA6IGRhdGEuaGFzUHJvcHM7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzU2hlbHZlcyA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEuaGFzU2hlbHZlcykgPyBbXSA6IGRhdGEuaGFzU2hlbHZlcztcclxuICAgICAgICAgICAgdGhpcy5ndWlkZVRhc2tDZmcgPSBVdGlscy5pc1VuZGVmaW5lZChkYXRhLmd1aWRlVGFza0NmZykgPyB0aGlzLmd1aWRlVGFza0NmZyA6IGRhdGEuZ3VpZGVUYXNrQ2ZnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJEYXkgPSBVdGlscy5pc1VuZGVmaW5lZChkYXRhLmN1ckRheSkgPyB0aGlzLmN1ckRheSA6IGRhdGEuY3VyRGF5O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcm9wUmlwZXRpbWVzID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5jcm9wUmlwZXRpbWVzKSA/IHRoaXMuY3JvcFJpcGV0aW1lcyA6IGRhdGEuY3JvcFJpcGV0aW1lcztcclxuICAgICAgICAgICAgdGhpcy5wZXN0TnVtID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5wZXN0TnVtKSA/IHRoaXMucGVzdE51bSA6IGRhdGEucGVzdE51bTtcclxuICAgICAgICAgICAgdGhpcy5jcm9wR2V0TnVtID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5jcm9wR2V0TnVtKSA/IHRoaXMuY3JvcEdldE51bSA6IGRhdGEuY3JvcEdldE51bTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGVTdGF0ZSA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEuZ3VpZGVTdGF0ZSkgPyB0aGlzLmd1aWRlU3RhdGUgOiBkYXRhLmd1aWRlU3RhdGU7XHJcbiAgICAgICAgICAgIGxldCBkYXkxID0gbmV3IERhdGUoKS5nZXREYXkoKTtcclxuICAgICAgICAgICAgbGV0IGRheTIgPSBuZXcgRGF0ZSh0aGlzLm9mZmxpbmVUaW1lc3RhbXAgKiAxMDAwKS5nZXREYXkoKTtcclxuICAgICAgICAgICAgaWYgKGRheTEgPT0gZGF5Mikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xlYXJQZXN0ID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5pc0ZpcnN0Q2xlYXJQZXN0KSA/IHRoaXMuaXNGaXJzdENsZWFyUGVzdCA6IGRhdGEuaXNGaXJzdENsZWFyUGVzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5QXV0b1JvbGVOdW0gPSBVdGlscy5pc1VuZGVmaW5lZChkYXRhLmF1dG9Sb2xlTnVtKSA/IHRoaXMuZGF5QXV0b1JvbGVOdW0gOiBkYXRhLmRheUF1dG9Sb2xlTnVtO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0Q2xlYXJQZXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5QXV0b1JvbGVOdW0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBTb3J0VXRpbHMuaW5zZXJ0U29ydCh0aGlzLnVubG9ja0Nyb3BMaXN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhc1Byb3BzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuaGFzU2hlbHZlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFVpRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0V2FyZURhdGEoKTtcclxuICAgICAgICB0aGlzLmdldFpsTnVtKCk7XHJcbiAgICAgICAgdGhpcy5nZXRDYXNoaWVyTnVtKCk7XHJcbiAgICAgICAgdGhpcy5nZXRQbGFudE51bSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0THZ1cFZpZGVvKCk7XHJcbiAgICAgICAgdGhpcy5nZXRPcmRlcigpO1xyXG5cclxuICAgICAgICBpZiAoR2xvYmFsLmlzQ2VzaGlfdmVyc2lvbikge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRlU3RhdGUgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvL+avj+aXpeaUtumTtuWPsOS6p+WHulxyXG4gICAgZ2V0Q2FzaGllck51bSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFN0b3JhZ2VIZWxwZXIuZ2V0SnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmNhc2hpZXJHb2xkKTtcclxuICAgICAgICBsZXQgZGF5MSA9IG5ldyBEYXRlKCkuZ2V0RGF5KCk7XHJcbiAgICAgICAgbGV0IGRheTIgPSBuZXcgRGF0ZSh0aGlzLm9mZmxpbmVUaW1lc3RhbXAgKiAxMDAwKS5nZXREYXkoKTtcclxuICAgICAgICBpZiAoZGF0YSkgdGhpcy5jYXNoaWVyQWRkVGltZSA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEuY2FzaGllckFkZFRpbWUpID8gdGhpcy5jYXNoaWVyQWRkVGltZSA6IGRhdGEuY2FzaGllckFkZFRpbWU7XHJcbiAgICAgICAgaWYgKGRheTEgPT0gZGF5Mikge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXNoaWVyR29sZCA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEuY2FzaGllckdvbGQpID8gdGhpcy5jYXNoaWVyR29sZCA6IGRhdGEuY2FzaGllckdvbGQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhc2hpZXJHb2xkID0gdGhpcy5jYXNoaWVyR29sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLmNhc2hpZXJHb2xkID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5jYXNoaWVyR29sZCkgPyB0aGlzLmNhc2hpZXJHb2xkIDogZGF0YS5jYXNoaWVyR29sZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhc2hpZXJHb2xkID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRabE51bSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFN0b3JhZ2VIZWxwZXIuZ2V0SnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLnpsTnVtKTtcclxuICAgICAgICBpZiAoZGF0YSAmJiB0aGlzLmd1aWRlU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy56aGFvbGFuTnVtID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS56aGFvbGFuTnVtKSA/IHRoaXMuemhhb2xhbk51bSA6IGRhdGEuemhhb2xhbk51bTtcclxuICAgICAgICAgICAgdGhpcy56ZEdrTnVtID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS56ZEdrTnVtKSA/IHRoaXMuemRHa051bSA6IGRhdGEuemRHa051bTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnpoYW9sYW5OdW0gPSB0aGlzLnpoYW9sYW5OdW07XHJcbiAgICAgICAgICAgIHRoaXMuemRHa051bSA9IHRoaXMuemRHa051bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRPcmRlcigpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFN0b3JhZ2VIZWxwZXIuZ2V0SnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLm9yZGVyKTtcclxuICAgICAgICBpZiAoZGF0YSAmJiB0aGlzLmd1aWRlU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmRlclVubG9ja0xlbiA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEub3JkZXJVbmxvY2tMZW4pID8gdGhpcy5vcmRlclVubG9ja0xlbiA6IGRhdGEub3JkZXJVbmxvY2tMZW47XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXJDYWNoZUxpc3QgPSBVdGlscy5pc1VuZGVmaW5lZChkYXRhLm9yZGVyQ2FjaGVMaXN0KSA/IHRoaXMub3JkZXJDYWNoZUxpc3QgOiBkYXRhLm9yZGVyQ2FjaGVMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyVmlkZW9OdW0gPSBVdGlscy5pc1VuZGVmaW5lZChkYXRhLm9yZGVyVmlkZW9OdW0pID8gdGhpcy5vcmRlclZpZGVvTnVtIDogZGF0YS5vcmRlclZpZGVvTnVtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXJDYWNoZUxpc3QgPSB0aGlzLm9yZGVyQ2FjaGVMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyVW5sb2NrTGVuID0gdGhpcy5vcmRlclVubG9ja0xlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcmRlckNhY2hlTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLnN0YXRlIC0gYS5zdGF0ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/np43mpI3mrKHmlbBcclxuICAgIGdldFBsYW50TnVtKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gU3RvcmFnZUhlbHBlci5nZXRKc29uQnlLZXkoU3RvcmFnZVR5cGUucGxhbnROdW0pO1xyXG4gICAgICAgIGlmIChkYXRhICYmIHRoaXMuZ3VpZGVTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50TnVtTGlzdCA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEucGxhbnROdW0pID8gdGhpcy5wbGFudE51bUxpc3QgOiBkYXRhLnBsYW50TnVtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnROdW1MaXN0ID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VWlEYXRhKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gU3RvcmFnZUhlbHBlci5nZXRKc29uQnlLZXkoU3RvcmFnZVR5cGUudWlDaW9uZmlnKTtcclxuICAgICAgICBpZiAoZGF0YSAmJiB0aGlzLmd1aWRlU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy51aUNvbmZpZyA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEudWlDb25maWcpID8gdGhpcy5pbml0VUlDb25maWcgOiBkYXRhLnVpQ29uZmlnO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkQ2ZnTGlzdCA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEuZmllbGRDZmdMaXN0KSA/IHRoaXMuZmllbGRDZmdMaXN0IDogZGF0YS5maWVsZENmZ0xpc3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51aUNvbmZpZyA9IHRoaXMuaW5pdFVJQ29uZmlnO1xyXG4gICAgICAgICAgICB0aGlzLnVpQ29uZmlnLnNoZWx2ZXNMaXN0ID0gdGhpcy5zaGVsdmVzQ2ZnTGlzdDtcclxuICAgICAgICAgICAgdGhpcy5maWVsZENmZ0xpc3QgPSB0aGlzLmZpZWxkQ2ZnTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwiW2RlYnVnXSDorrDlvZXnmoR1aUNvbmZpZzpcIiwgdGhpcy51aUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICAvL+S7k+W6k+aVsOaNrlxyXG4gICAgZ2V0V2FyZURhdGEoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBTdG9yYWdlSGVscGVyLmdldEpzb25CeUtleShTdG9yYWdlVHlwZS53YXJlSG91c2UpO1xyXG4gICAgICAgIGlmIChkYXRhICYmIHRoaXMuZ3VpZGVTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLldhcmVIb3VzZUNvbmZpZyA9IFV0aWxzLmlzVW5kZWZpbmVkKGRhdGEuV2FyZUhvdXNlQ29uZmlnKSA/IHRoaXMuV2FyZUhvdXNlQ29uZmlnIDogZGF0YS5XYXJlSG91c2VDb25maWc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5XYXJlSG91c2VDb25maWcgPSB0aGlzLldhcmVIb3VzZUNvbmZpZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5XYXJlSG91c2VDb25maWcuY3JvcExpc3Q7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgaXRlbS5wdXRfb25fbnVtID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy/ljYfnuqfop4LnnIvop4bpopHmrKHmlbBcclxuICAgIGdldEx2dXBWaWRlbygpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFN0b3JhZ2VIZWxwZXIuZ2V0SnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmx2VXBWaWRlb051bSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgdGhpcy5ndWlkZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubHZVcF92aWRlb19udW0gPSBVdGlscy5pc1VuZGVmaW5lZChkYXRhKSA/IHRoaXMubHZVcF92aWRlb19udW0gOiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubHZVcF92aWRlb19udW0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+W8leWvvOaVsOaNrlxyXG4gICAgZ2V0R3VpZGUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBTdG9yYWdlSGVscGVyLmdldEpzb25CeUtleShTdG9yYWdlVHlwZS5ndWlkZSk7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkZVN0YXRlID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5ndWlkZVN0YXRlKSA/IHRoaXMuZ3VpZGVTdGF0ZSA6IGRhdGEuZ3VpZGVTdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXNldERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG59Il19
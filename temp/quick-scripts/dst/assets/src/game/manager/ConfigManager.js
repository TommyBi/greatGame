
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/manager/ConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0da7dg7/WBIx6aLD65qJ7hv', 'ConfigManager');
// src/game/manager/ConfigManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderManager_1 = require("../../framework/manager/LoaderManager");
var Handler_1 = require("../../framework/base/Handler");
var PlayerModel_1 = require("../datas/PlayerModel");
var NResponer_1 = require("../../framework/message/NResponer");
var Message_1 = require("../view/Message");
var Utils_1 = require("../../framework/tools/Utils");
var Global_1 = require("../consts/Global");
var CConst_1 = require("../consts/CConst");
var SDKManager_1 = require("../../framework/manager/SDKManager");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var ConfigManager = /** @class */ (function () {
    function ConfigManager() {
        this.gameJson = {}; //单个游戏json配置
        this.jsonLoadNum = 0;
        this.cashier_interval = 5; //收银台间隔几秒产出一次
        this.cashier_one = 10; //收银台间一次产出
        this.cashier_add_multiple = 3; //加速倍数
        this.cashier_add_times = 3; //加速分钟数
        this.add_speed_gold = 300; //作物加速所需钞票数
        this.crop_maxGet_interval = 6; //判定高产间隔次数
        this.crop_maxGet_rate = 0.6; //每次判定高产概率
        this.crop_maxGet_num = 5; //高产作物数量
        this.hard_hb_interval = 9; //辛苦红包收获作物数量间隔
        this.order_quality_add = [0, 10, 25, 40, 60, 80];
    }
    ConfigManager.instance = function () {
        if (!this._instance) {
            this._instance = new ConfigManager();
        }
        return this._instance;
    };
    ConfigManager.prototype.init = function () {
        var _this = this;
        LoaderManager_1.default.loaderJson('allConf', Handler_1.default.create(function (res) {
            _this.allConfig = res.json;
            console.log("配置文件：", _this.allConfig);
            _this.crop = _this.allConfig["crop_time"];
            _this.field = _this.allConfig["field"];
            _this.shelves = _this.allConfig["shelves"];
            _this.prop = _this.allConfig["prop"];
            _this.level = _this.allConfig["level"];
            _this.order = _this.allConfig["order"];
            _this.order_weight = _this.allConfig["order_weight"];
            NResponer_1.default.dispatch(Message_1.Message.configComplete);
        }, this), 'config');
    };
    ConfigManager.prototype.loadGameZipJson = function (name, jsonStringArray, callback, isLocalJson, path, isRetry) {
        var _this = this;
        if (this.gameJson[name]) {
            callback();
            return;
        }
        if (isLocalJson) {
            this.jsonLoadNum = jsonStringArray.length;
            // you now have every files contained in the loaded zip
            for (var i = 0; i < jsonStringArray.length; i++) {
                LoaderManager_1.default.loaderJson(jsonStringArray[i], Handler_1.default.create(function (res) {
                    _this.jsonLoadNum--;
                    if (_this.jsonLoadNum == 0) {
                        callback();
                    }
                }, this), 'config');
            }
        }
        else {
            var fullUrl = Global_1.default.JSON_SERVER_URL + name + ".zip";
            if (path) {
                fullUrl = path + name + ".zip";
            }
            // SDKManager.getInstance().sdkZibUtil(fullUrl, jsonStringArray, function (gafFiles) {
            //     cc.log("download file: ", gafFiles)
            //     DataManager.getInstance().jsonLoadNum = jsonStringArray.length
            //     // you now have every files contained in the loaded zip
            //     for (let i = 0; i < jsonStringArray.length; i++) {
            //         let fileString = gafFiles[jsonStringArray[i] + ".json"]
            //         let fileJson = JSON.parse(fileString)
            //         DataManager.getInstance().gameJson[jsonStringArray[i]] = fileJson
            //         DataManager.getInstance().jsonLoadNum --
            //         if (DataManager.getInstance().jsonLoadNum == 0) {
            //             callback()
            //         }
            //     }
            // }.bind(this), function () {
            //     //zip下载失败重新下载
            //     if (isRetry) {return}
            //     DataManager.getInstance().loadGameZipJson(name, jsonStringArray, callback, isLocalJson, path, true)
            // }.bind(this))
        }
    };
    ConfigManager.prototype.getOrderList = function () {
        var orderList = [];
        var len = PlayerModel_1.default.orderLen;
        var time = Math.floor(Utils_1.default.returnTime() / 1000) + 3600;
        if (Global_1.default.isCeshi_version) {
            time = Math.floor(Utils_1.default.returnTime() / 1000) + 60;
        }
        if (SDKManager_1.default.hasNewOrderReward()) {
            // if (!PlayerModel.guideState) {
            var item = this.order[0];
            orderList.push({
                id: item.id, unlock: 1, time: time, index: 0,
                quality: item.quality, state: 0, cropList: [
                    { cropId: item.crop1, target: item.num1, num: 0 },
                    { cropId: item.crop2, target: item.num2, num: 0 },
                ]
            });
            len = PlayerModel_1.default.orderLen - 1;
        }
        var wegitCfg = this.getOrderWegit();
        for (var i = 0; i < len; i++) {
            var order = this.getOrderByWegit(wegitCfg);
            var value = {
                id: order.id, unlock: 1, time: time, index: i + 1,
                quality: order.quality, state: 0, cropList: [
                    { cropId: order.crop1, target: this.getOrderNumBySDK(order.num1), num: 0 },
                    { cropId: order.crop2, target: this.getOrderNumBySDK(order.num2), num: 0 },
                    { cropId: order.crop3, target: this.getOrderNumBySDK(order.num3), num: 0 },
                    { cropId: order.crop4, target: this.getOrderNumBySDK(order.num4), num: 0 },
                ]
            };
            // let random = MKUtils.randomNMF(0, 100);
            // if (random < 50) {
            //     let item = Utils.getRandomByArr(value.cropList);
            //     item.cropId = 100;
            // }
            this.sortCropList(value.cropList);
            orderList.push(value);
        }
        for (var k = 0; k < 5 - PlayerModel_1.default.orderLen; k++) {
            var value = {
                id: -1, unlock: 0, lastTime: -1, index: k + len,
                quality: 0, state: 0, cropList: []
            };
            orderList.push(value);
        }
        return orderList;
    };
    ConfigManager.prototype.getOrder = function () {
        var wegitCfg = this.getOrderWegit();
        var order = this.getOrderByWegit(wegitCfg);
        var time = Math.floor(Utils_1.default.returnTime() / 1000) + 3600;
        if (Global_1.default.isCeshi_version) {
            time = Math.floor(Utils_1.default.returnTime() / 1000) + 60;
        }
        var value = {
            id: order.id, unlock: 1, time: time, index: 1,
            quality: order.quality, state: 0, cropList: [
                { cropId: order.crop1, target: this.getOrderNumBySDK(order.num1), num: 0 },
                { cropId: order.crop2, target: this.getOrderNumBySDK(order.num2), num: 0 },
                { cropId: order.crop3, target: this.getOrderNumBySDK(order.num3), num: 0 },
                { cropId: order.crop4, target: this.getOrderNumBySDK(order.num4), num: 0 },
            ]
        };
        // let random = MKUtils.randomNMF(0, 100);
        // if (random < 50) {
        //     let item = Utils.getRandomByArr(value.cropList);
        //     item.cropId = 100;
        // }
        this.sortCropList(value.cropList);
        return value;
    };
    //
    ConfigManager.prototype.getOrderNumBySDK = function (num) {
        var flag = SDKManager_1.default.getOrderCountAdd();
        var num1 = Math.round((num * flag) / 100);
        return num1;
    };
    ConfigManager.prototype.sortCropList = function (arr) {
        arr.sort(function (a, b) {
            return a.cropId - b.cropId;
        });
    };
    ConfigManager.prototype.getOrderByWegit = function (wegit) {
        var total = 0;
        for (var i = 1; i < 7; i++) {
            total += wegit["lv" + i];
        }
        var random = MkUtils_1.default.randomNMF(0, total);
        var wegitTotal = 0;
        var quality = 0;
        for (var j = 1; j < 7; j++) {
            wegitTotal += wegit["lv" + j];
            if (random < wegitTotal) {
                quality = j;
                break;
            }
        }
        var orderList = this.order.slice(1);
        var arr = orderList.filter(function (value, index) {
            return value.quality == quality;
        });
        var order = Utils_1.default.getRandomByArr(arr);
        return order;
    };
    //获取当前幸福指数对应权重
    ConfigManager.prototype.getOrderWegit = function () {
        var cfgList = this.order_weight;
        var xfzs = PlayerModel_1.default.getXfzs();
        var cfg;
        if (xfzs >= cfgList[cfgList.length - 1].limit) {
            return cfgList[cfgList.length - 1];
        }
        for (var i = 0; i < cfgList.length; i++) {
            if (xfzs < cfgList[i].limit) {
                cfg = cfgList[i - 1];
                break;
            }
        }
        return cfg;
    };
    //获取设施
    ConfigManager.prototype.getPropById = function (type, level) {
        var itemId = type + "0" + level;
        var arr = this.prop.filter(function (item) {
            return item.id == Number(itemId);
        });
        return arr[0];
    };
    ConfigManager.prototype.getPropMaxLv = function (type) {
        var arr = this.prop.filter(function (item) {
            return item.type == type;
        });
        return arr.length;
    };
    //每个货架最多排队X位顾客
    ConfigManager.prototype.getRoleMax = function () {
        var itemId = CConst_1.propType.road + "0" + PlayerModel_1.default.getUIConfig().roadlv;
        var arr = this.prop.filter(function (item) {
            return item.id == Number(itemId);
        });
        return arr[0].add_num;
    };
    /**
     * 地块配置
     * @param id
     * @returns
     */
    ConfigManager.prototype.getFieldCfgByType = function (type, level) {
        var itemId = type + "0" + level;
        var arr = this.field.filter(function (item) {
            return item.id == Number(itemId);
        });
        return arr[0];
    };
    ConfigManager.prototype.getFieldMaxLv = function (type) {
        var arr = this.field.filter(function (item) {
            return item.type == type;
        });
        return arr.length;
    };
    /**
     * 货架配置
     * @returns
     */
    ConfigManager.prototype.getShelveByType = function (type, level) {
        var itemId = type + "0" + level;
        var arr = this.shelves.filter(function (item) {
            return item.id == Number(itemId);
        });
        return arr[0];
    };
    ConfigManager.prototype.getShelveMaxLv = function (type) {
        var arr = this.shelves.filter(function (item) {
            return item.type == type;
        });
        return arr.length;
    };
    /** 通过id索引作物 */
    ConfigManager.prototype.getCropById = function (id) {
        return this.crop.filter(function (x) {
            return id == x.id;
        })[0];
    };
    //收银台每日自动获取钞票上限
    ConfigManager.prototype.getCashierMax = function () {
        var lv = PlayerModel_1.default.getUIConfig().cashierlv;
        var id = Number(CConst_1.propType.cashier + "0" + lv);
        var arr = this.prop.filter(function (item) {
            return item.id == id;
        });
        return arr[0].add_num;
    };
    //获取当前等级配置
    ConfigManager.prototype.getCurrentLvCfg = function () {
        var lv = PlayerModel_1.default.getLevel();
        var arr = this.level.filter(function (cfg) {
            return cfg.level == lv;
        });
        return arr[0];
    };
    /**
     * 获取作物成熟时间
     * @param id
     * @param num 仓库中拥有数量
     * @returns
     */
    ConfigManager.prototype.getCropTime = function (id, num) {
        var numObj = this.crop[0];
        var key;
        var preKey;
        for (var numkey in numObj) {
            var value = numkey.slice(0, 5);
            if (value != "value")
                continue;
            if (!preKey)
                preKey = numkey;
            if (num <= numObj[numkey]) {
                key = preKey;
                break;
            }
            preKey = numkey;
        }
        if (!key)
            key = preKey;
        var timeObj;
        for (var i = 1; i < this.crop.length; i++) {
            if (this.crop[i].id == id) {
                timeObj = this.crop[i];
            }
        }
        return timeObj[key];
    };
    return ConfigManager;
}());
exports.default = ConfigManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tYW5hZ2VyL0NvbmZpZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFDbEUsd0RBQW1EO0FBQ25ELG9EQUErQztBQUMvQywrREFBMEQ7QUFDMUQsMkNBQTBDO0FBQzFDLHFEQUFnRDtBQUNoRCwyQ0FBc0M7QUFDdEMsMkNBQTBIO0FBQzFILGlFQUE0RDtBQUM1RCx5REFBb0Q7QUFFcEQ7SUFBQTtRQUlXLGFBQVEsR0FBVyxFQUFFLENBQUMsQ0FBQSxZQUFZO1FBQ3pDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLHFCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFBLGFBQWE7UUFDbEMsZ0JBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQSxVQUFVO1FBQzNCLHlCQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDL0Isc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQUEsT0FBTztRQUM3QixtQkFBYyxHQUFHLEdBQUcsQ0FBQyxDQUFBLFdBQVc7UUFFaEMseUJBQW9CLEdBQUcsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUNuQyxxQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQSxVQUFVO1FBQ2pDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUEsUUFBUTtRQUU1QixxQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQSxjQUFjO1FBRW5DLHNCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQWdVaEQsQ0FBQztJQXRUVSxzQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCw0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Q0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUVELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhCLENBQUM7SUFDTCxvQkFBQztBQUFELENBblZBLEFBbVZDLElBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGVyTWFuYWdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvTG9hZGVyTWFuYWdlclwiO1xyXG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2Jhc2UvSGFuZGxlclwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBOUmVzcG9uZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL05SZXNwb25lclwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4uL3ZpZXcvTWVzc2FnZVwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay90b29scy9VdGlsc1wiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCB7IGNyb3BfY29uZmlnLCBsZXZlbFVwX2NvbmZpZywgbGV2ZWxfY29uZmlnLCBvcmRlcl9jb25maWcsIG9yZGVyX3dlaWdodF9jb25maWcsIHByb3BUeXBlIH0gZnJvbSBcIi4uL2NvbnN0cy9DQ29uc3RcIjtcclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcblxyXG5jbGFzcyBDb25maWdNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQ29uZmlnTWFuYWdlcjtcclxuXHJcbiAgICBwcml2YXRlIGFsbENvbmZpZzogYW55O1xyXG4gICAgcHVibGljIGdhbWVKc29uOiBvYmplY3QgPSB7fTsvL+WNleS4qua4uOaIj2pzb27phY3nva5cclxuICAgIGpzb25Mb2FkTnVtID0gMDtcclxuXHJcbiAgICBjYXNoaWVyX2ludGVydmFsID0gNTsvL+aUtumTtuWPsOmXtOmalOWHoOenkuS6p+WHuuS4gOasoVxyXG4gICAgY2FzaGllcl9vbmUgPSAxMDsvL+aUtumTtuWPsOmXtOS4gOasoeS6p+WHulxyXG4gICAgY2FzaGllcl9hZGRfbXVsdGlwbGUgPSAzOy8v5Yqg6YCf5YCN5pWwXHJcbiAgICBjYXNoaWVyX2FkZF90aW1lcyA9IDM7Ly/liqDpgJ/liIbpkp/mlbBcclxuICAgIGFkZF9zcGVlZF9nb2xkID0gMzAwOy8v5L2c54mp5Yqg6YCf5omA6ZyA6ZKe56Wo5pWwXHJcblxyXG4gICAgY3JvcF9tYXhHZXRfaW50ZXJ2YWwgPSA2Oy8v5Yik5a6a6auY5Lqn6Ze06ZqU5qyh5pWwXHJcbiAgICBjcm9wX21heEdldF9yYXRlID0gMC42Oy8v5q+P5qyh5Yik5a6a6auY5Lqn5qaC546HXHJcbiAgICBjcm9wX21heEdldF9udW0gPSA1Oy8v6auY5Lqn5L2c54mp5pWw6YePXHJcblxyXG4gICAgaGFyZF9oYl9pbnRlcnZhbCA9IDk7Ly/ovpvoi6bnuqLljIXmlLbojrfkvZznianmlbDph4/pl7TpmpRcclxuXHJcbiAgICBvcmRlcl9xdWFsaXR5X2FkZCA9IFswLCAxMCwgMjUsIDQwLCA2MCwgODBdO1xyXG5cclxuICAgIGNyb3A6IGNyb3BfY29uZmlnW107XHJcbiAgICBmaWVsZDogbGV2ZWxVcF9jb25maWdbXTtcclxuICAgIHNoZWx2ZXM6IGxldmVsVXBfY29uZmlnW107XHJcbiAgICBwcm9wOiBsZXZlbFVwX2NvbmZpZ1tdO1xyXG4gICAgbGV2ZWw6IGxldmVsX2NvbmZpZ1tdO1xyXG4gICAgb3JkZXI6IG9yZGVyX2NvbmZpZ1tdO1xyXG4gICAgb3JkZXJfd2VpZ2h0OiBvcmRlcl93ZWlnaHRfY29uZmlnW107XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ29uZmlnTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBMb2FkZXJNYW5hZ2VyLmxvYWRlckpzb24oJ2FsbENvbmYnLCBIYW5kbGVyLmNyZWF0ZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ29uZmlnID0gcmVzLmpzb247XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6YWN572u5paH5Lu277yaXCIsIHRoaXMuYWxsQ29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5jcm9wID0gdGhpcy5hbGxDb25maWdbXCJjcm9wX3RpbWVcIl07XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLmFsbENvbmZpZ1tcImZpZWxkXCJdO1xyXG4gICAgICAgICAgICB0aGlzLnNoZWx2ZXMgPSB0aGlzLmFsbENvbmZpZ1tcInNoZWx2ZXNcIl07XHJcbiAgICAgICAgICAgIHRoaXMucHJvcCA9IHRoaXMuYWxsQ29uZmlnW1wicHJvcFwiXTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuYWxsQ29uZmlnW1wibGV2ZWxcIl07XHJcbiAgICAgICAgICAgIHRoaXMub3JkZXIgPSB0aGlzLmFsbENvbmZpZ1tcIm9yZGVyXCJdO1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyX3dlaWdodCA9IHRoaXMuYWxsQ29uZmlnW1wib3JkZXJfd2VpZ2h0XCJdO1xyXG5cclxuICAgICAgICAgICAgTlJlc3BvbmVyLmRpc3BhdGNoKE1lc3NhZ2UuY29uZmlnQ29tcGxldGUpO1xyXG5cclxuICAgICAgICB9LCB0aGlzKSwgJ2NvbmZpZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkR2FtZVppcEpzb24obmFtZSwganNvblN0cmluZ0FycmF5LCBjYWxsYmFjazogRnVuY3Rpb24sIGlzTG9jYWxKc29uLCBwYXRoPzogU3RyaW5nLCBpc1JldHJ5PzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVKc29uW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNMb2NhbEpzb24pIHtcclxuICAgICAgICAgICAgdGhpcy5qc29uTG9hZE51bSA9IGpzb25TdHJpbmdBcnJheS5sZW5ndGhcclxuICAgICAgICAgICAgLy8geW91IG5vdyBoYXZlIGV2ZXJ5IGZpbGVzIGNvbnRhaW5lZCBpbiB0aGUgbG9hZGVkIHppcFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25TdHJpbmdBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgTG9hZGVyTWFuYWdlci5sb2FkZXJKc29uKGpzb25TdHJpbmdBcnJheVtpXSwgSGFuZGxlci5jcmVhdGUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkxvYWROdW0tLVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmpzb25Mb2FkTnVtID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpLCAnY29uZmlnJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBmdWxsVXJsID0gR2xvYmFsLkpTT05fU0VSVkVSX1VSTCArIG5hbWUgKyBcIi56aXBcIlxyXG4gICAgICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgZnVsbFVybCA9IHBhdGggKyBuYW1lICsgXCIuemlwXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU0RLTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNka1ppYlV0aWwoZnVsbFVybCwganNvblN0cmluZ0FycmF5LCBmdW5jdGlvbiAoZ2FmRmlsZXMpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNjLmxvZyhcImRvd25sb2FkIGZpbGU6IFwiLCBnYWZGaWxlcylcclxuICAgICAgICAgICAgLy8gICAgIERhdGFNYW5hZ2VyLmdldEluc3RhbmNlKCkuanNvbkxvYWROdW0gPSBqc29uU3RyaW5nQXJyYXkubGVuZ3RoXHJcbiAgICAgICAgICAgIC8vICAgICAvLyB5b3Ugbm93IGhhdmUgZXZlcnkgZmlsZXMgY29udGFpbmVkIGluIHRoZSBsb2FkZWQgemlwXHJcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25TdHJpbmdBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBmaWxlU3RyaW5nID0gZ2FmRmlsZXNbanNvblN0cmluZ0FycmF5W2ldICsgXCIuanNvblwiXVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBmaWxlSnNvbiA9IEpTT04ucGFyc2UoZmlsZVN0cmluZylcclxuICAgICAgICAgICAgLy8gICAgICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdhbWVKc29uW2pzb25TdHJpbmdBcnJheVtpXV0gPSBmaWxlSnNvblxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLmpzb25Mb2FkTnVtIC0tXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmdldEluc3RhbmNlKCkuanNvbkxvYWROdW0gPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9LmJpbmQodGhpcyksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vemlw5LiL6L295aSx6LSl6YeN5paw5LiL6L29XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoaXNSZXRyeSkge3JldHVybn1cclxuICAgICAgICAgICAgLy8gICAgIERhdGFNYW5hZ2VyLmdldEluc3RhbmNlKCkubG9hZEdhbWVaaXBKc29uKG5hbWUsIGpzb25TdHJpbmdBcnJheSwgY2FsbGJhY2ssIGlzTG9jYWxKc29uLCBwYXRoLCB0cnVlKVxyXG4gICAgICAgICAgICAvLyB9LmJpbmQodGhpcykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE9yZGVyTGlzdCgpIHtcclxuICAgICAgICBsZXQgb3JkZXJMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGxlbiA9IFBsYXllck1vZGVsLm9yZGVyTGVuO1xyXG4gICAgICAgIGxldCB0aW1lID0gTWF0aC5mbG9vcihVdGlscy5yZXR1cm5UaW1lKCkgLyAxMDAwKSArIDM2MDA7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5pc0Nlc2hpX3ZlcnNpb24pIHtcclxuICAgICAgICAgICAgdGltZSA9IE1hdGguZmxvb3IoVXRpbHMucmV0dXJuVGltZSgpIC8gMTAwMCkgKyA2MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChTREtNYW5hZ2VyLmhhc05ld09yZGVyUmV3YXJkKCkpIHtcclxuICAgICAgICAgICAgLy8gaWYgKCFQbGF5ZXJNb2RlbC5ndWlkZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5vcmRlclswXTtcclxuICAgICAgICAgICAgb3JkZXJMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsIHVubG9jazogMSwgdGltZTogdGltZSwgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiBpdGVtLnF1YWxpdHksIHN0YXRlOiAwLCBjcm9wTGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgY3JvcElkOiBpdGVtLmNyb3AxLCB0YXJnZXQ6IGl0ZW0ubnVtMSwgbnVtOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBjcm9wSWQ6IGl0ZW0uY3JvcDIsIHRhcmdldDogaXRlbS5udW0yLCBudW06IDAgfSxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGVuID0gUGxheWVyTW9kZWwub3JkZXJMZW4gLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2VnaXRDZmcgPSB0aGlzLmdldE9yZGVyV2VnaXQoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBvcmRlciA9IHRoaXMuZ2V0T3JkZXJCeVdlZ2l0KHdlZ2l0Q2ZnKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG9yZGVyLmlkLCB1bmxvY2s6IDEsIHRpbWU6IHRpbWUsIGluZGV4OiBpICsgMSxcclxuICAgICAgICAgICAgICAgIHF1YWxpdHk6IG9yZGVyLnF1YWxpdHksIHN0YXRlOiAwLCBjcm9wTGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgY3JvcElkOiBvcmRlci5jcm9wMSwgdGFyZ2V0OiB0aGlzLmdldE9yZGVyTnVtQnlTREsob3JkZXIubnVtMSksIG51bTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgY3JvcElkOiBvcmRlci5jcm9wMiwgdGFyZ2V0OiB0aGlzLmdldE9yZGVyTnVtQnlTREsob3JkZXIubnVtMiksIG51bTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgY3JvcElkOiBvcmRlci5jcm9wMywgdGFyZ2V0OiB0aGlzLmdldE9yZGVyTnVtQnlTREsob3JkZXIubnVtMyksIG51bTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgY3JvcElkOiBvcmRlci5jcm9wNCwgdGFyZ2V0OiB0aGlzLmdldE9yZGVyTnVtQnlTREsob3JkZXIubnVtNCksIG51bTogMCB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxldCByYW5kb20gPSBNS1V0aWxzLnJhbmRvbU5NRigwLCAxMDApO1xyXG4gICAgICAgICAgICAvLyBpZiAocmFuZG9tIDwgNTApIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBpdGVtID0gVXRpbHMuZ2V0UmFuZG9tQnlBcnIodmFsdWUuY3JvcExpc3QpO1xyXG4gICAgICAgICAgICAvLyAgICAgaXRlbS5jcm9wSWQgPSAxMDA7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy5zb3J0Q3JvcExpc3QodmFsdWUuY3JvcExpc3QpO1xyXG4gICAgICAgICAgICBvcmRlckxpc3QucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNSAtIFBsYXllck1vZGVsLm9yZGVyTGVuOyBrKyspIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IC0xLCB1bmxvY2s6IDAsIGxhc3RUaW1lOiAtMSwgaW5kZXg6IGsgKyBsZW4sXHJcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAwLCBzdGF0ZTogMCwgY3JvcExpc3Q6IFtcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcmRlckxpc3QucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcmRlckxpc3Q7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0T3JkZXIoKSB7XHJcbiAgICAgICAgbGV0IHdlZ2l0Q2ZnID0gdGhpcy5nZXRPcmRlcldlZ2l0KCk7XHJcbiAgICAgICAgbGV0IG9yZGVyID0gdGhpcy5nZXRPcmRlckJ5V2VnaXQod2VnaXRDZmcpO1xyXG4gICAgICAgIGxldCB0aW1lID0gTWF0aC5mbG9vcihVdGlscy5yZXR1cm5UaW1lKCkgLyAxMDAwKSArIDM2MDA7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5pc0Nlc2hpX3ZlcnNpb24pIHtcclxuICAgICAgICAgICAgdGltZSA9IE1hdGguZmxvb3IoVXRpbHMucmV0dXJuVGltZSgpIC8gMTAwMCkgKyA2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbHVlID0ge1xyXG4gICAgICAgICAgICBpZDogb3JkZXIuaWQsIHVubG9jazogMSwgdGltZTogdGltZSwgaW5kZXg6IDEsXHJcbiAgICAgICAgICAgIHF1YWxpdHk6IG9yZGVyLnF1YWxpdHksIHN0YXRlOiAwLCBjcm9wTGlzdDogW1xyXG4gICAgICAgICAgICAgICAgeyBjcm9wSWQ6IG9yZGVyLmNyb3AxLCB0YXJnZXQ6IHRoaXMuZ2V0T3JkZXJOdW1CeVNESyhvcmRlci5udW0xKSwgbnVtOiAwIH0sXHJcbiAgICAgICAgICAgICAgICB7IGNyb3BJZDogb3JkZXIuY3JvcDIsIHRhcmdldDogdGhpcy5nZXRPcmRlck51bUJ5U0RLKG9yZGVyLm51bTIpLCBudW06IDAgfSxcclxuICAgICAgICAgICAgICAgIHsgY3JvcElkOiBvcmRlci5jcm9wMywgdGFyZ2V0OiB0aGlzLmdldE9yZGVyTnVtQnlTREsob3JkZXIubnVtMyksIG51bTogMCB9LFxyXG4gICAgICAgICAgICAgICAgeyBjcm9wSWQ6IG9yZGVyLmNyb3A0LCB0YXJnZXQ6IHRoaXMuZ2V0T3JkZXJOdW1CeVNESyhvcmRlci5udW00KSwgbnVtOiAwIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IHJhbmRvbSA9IE1LVXRpbHMucmFuZG9tTk1GKDAsIDEwMCk7XHJcbiAgICAgICAgLy8gaWYgKHJhbmRvbSA8IDUwKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBpdGVtID0gVXRpbHMuZ2V0UmFuZG9tQnlBcnIodmFsdWUuY3JvcExpc3QpO1xyXG4gICAgICAgIC8vICAgICBpdGVtLmNyb3BJZCA9IDEwMDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5zb3J0Q3JvcExpc3QodmFsdWUuY3JvcExpc3QpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICBnZXRPcmRlck51bUJ5U0RLKG51bSkge1xyXG4gICAgICAgIGxldCBmbGFnID0gU0RLTWFuYWdlci5nZXRPcmRlckNvdW50QWRkKCk7XHJcbiAgICAgICAgbGV0IG51bTEgPSBNYXRoLnJvdW5kKChudW0gKiBmbGFnKSAvIDEwMCk7XHJcbiAgICAgICAgcmV0dXJuIG51bTE7XHJcbiAgICB9XHJcbiAgICBzb3J0Q3JvcExpc3QoYXJyOiBhbnlbXSkge1xyXG4gICAgICAgIGFyci5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmNyb3BJZCAtIGIuY3JvcElkO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRPcmRlckJ5V2VnaXQod2VnaXQpIHtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IHdlZ2l0W1wibHZcIiArIGldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmFuZG9tID0gTUtVdGlscy5yYW5kb21OTUYoMCwgdG90YWwpO1xyXG4gICAgICAgIGxldCB3ZWdpdFRvdGFsID0gMDtcclxuICAgICAgICBsZXQgcXVhbGl0eSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA3OyBqKyspIHtcclxuICAgICAgICAgICAgd2VnaXRUb3RhbCArPSB3ZWdpdFtcImx2XCIgKyBqXTtcclxuICAgICAgICAgICAgaWYgKHJhbmRvbSA8IHdlZ2l0VG90YWwpIHtcclxuICAgICAgICAgICAgICAgIHF1YWxpdHkgPSBqO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9yZGVyTGlzdCA9IHRoaXMub3JkZXIuc2xpY2UoMSlcclxuICAgICAgICBsZXQgYXJyID0gb3JkZXJMaXN0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5xdWFsaXR5ID09IHF1YWxpdHk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IG9yZGVyID0gVXRpbHMuZ2V0UmFuZG9tQnlBcnIoYXJyKTtcclxuICAgICAgICByZXR1cm4gb3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5blvZPliY3lubjnpo/mjIfmlbDlr7nlupTmnYPph41cclxuICAgIGdldE9yZGVyV2VnaXQoKSB7XHJcbiAgICAgICAgbGV0IGNmZ0xpc3QgPSB0aGlzLm9yZGVyX3dlaWdodDtcclxuICAgICAgICBsZXQgeGZ6cyA9IFBsYXllck1vZGVsLmdldFhmenMoKTtcclxuICAgICAgICBsZXQgY2ZnOiBvcmRlcl93ZWlnaHRfY29uZmlnO1xyXG4gICAgICAgIGlmICh4ZnpzID49IGNmZ0xpc3RbY2ZnTGlzdC5sZW5ndGggLSAxXS5saW1pdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2ZnTGlzdFtjZmdMaXN0Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNmZ0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHhmenMgPCBjZmdMaXN0W2ldLmxpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICBjZmcgPSBjZmdMaXN0W2kgLSAxXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjZmc7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5borr7mlr1cclxuICAgIGdldFByb3BCeUlkKHR5cGUsIGxldmVsKTogbGV2ZWxVcF9jb25maWcge1xyXG4gICAgICAgIGxldCBpdGVtSWQgPSB0eXBlICsgXCIwXCIgKyBsZXZlbDtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5wcm9wLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBOdW1iZXIoaXRlbUlkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhcnJbMF07XHJcbiAgICB9XHJcbiAgICBnZXRQcm9wTWF4THYodHlwZSkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnByb3AuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgPT0gdHlwZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLy/mr4/kuKrotKfmnrbmnIDlpJrmjpLpmJ9Y5L2N6aG+5a6iXHJcbiAgICBnZXRSb2xlTWF4KCkge1xyXG4gICAgICAgIGxldCBpdGVtSWQgPSBwcm9wVHlwZS5yb2FkICsgXCIwXCIgKyBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLnJvYWRsdjtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5wcm9wLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBOdW1iZXIoaXRlbUlkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhcnJbMF0uYWRkX251bVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zyw5Z2X6YWN572uXHJcbiAgICAgKiBAcGFyYW0gaWQgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgZ2V0RmllbGRDZmdCeVR5cGUodHlwZSwgbGV2ZWwpIHtcclxuICAgICAgICBsZXQgaXRlbUlkID0gdHlwZSArIFwiMFwiICsgbGV2ZWw7XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuZmllbGQuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09IE51bWJlcihpdGVtSWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGFyclswXTtcclxuICAgIH1cclxuICAgIGdldEZpZWxkTWF4THYodHlwZSkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmZpZWxkLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlID09IHR5cGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXJyLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6LSn5p626YWN572uXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgZ2V0U2hlbHZlQnlUeXBlKHR5cGUsIGxldmVsKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1JZCA9IHR5cGUgKyBcIjBcIiArIGxldmVsO1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNoZWx2ZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09IE51bWJlcihpdGVtSWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGFyclswXTtcclxuICAgIH1cclxuICAgIGdldFNoZWx2ZU1heEx2KHR5cGUpIHtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5zaGVsdmVzLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlID09IHR5cGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXJyLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8qKiDpgJrov4dpZOe0ouW8leS9nOeJqSAqL1xyXG4gICAgZ2V0Q3JvcEJ5SWQoaWQ6IG51bWJlcik6IGNyb3BfY29uZmlnIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcm9wLmZpbHRlcih4ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkID09IHguaWQ7XHJcbiAgICAgICAgfSlbMF07XHJcbiAgICB9XHJcbiAgICAvL+aUtumTtuWPsOavj+aXpeiHquWKqOiOt+WPlumSnuelqOS4iumZkFxyXG4gICAgZ2V0Q2FzaGllck1heCgpIHtcclxuICAgICAgICBsZXQgbHYgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLmNhc2hpZXJsdjtcclxuICAgICAgICBsZXQgaWQgPSBOdW1iZXIocHJvcFR5cGUuY2FzaGllciArIFwiMFwiICsgbHYpO1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnByb3AuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlkID09IGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGFyclswXS5hZGRfbnVtO1xyXG4gICAgfVxyXG4gICAgLy/ojrflj5blvZPliY3nrYnnuqfphY3nva5cclxuICAgIGdldEN1cnJlbnRMdkNmZygpIHtcclxuICAgICAgICBsZXQgbHYgPSBQbGF5ZXJNb2RlbC5nZXRMZXZlbCgpO1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmxldmVsLmZpbHRlcigoY2ZnKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjZmcubGV2ZWwgPT0gbHY7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXJyWzBdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkvZznianmiJDnhp/ml7bpl7RcclxuICAgICAqIEBwYXJhbSBpZCBcclxuICAgICAqIEBwYXJhbSBudW0g5LuT5bqT5Lit5oul5pyJ5pWw6YePXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgZ2V0Q3JvcFRpbWUoaWQsIG51bSkge1xyXG4gICAgICAgIGxldCBudW1PYmogPSB0aGlzLmNyb3BbMF07XHJcbiAgICAgICAgbGV0IGtleTtcclxuICAgICAgICBsZXQgcHJlS2V5O1xyXG4gICAgICAgIGZvciAobGV0IG51bWtleSBpbiBudW1PYmopIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gbnVta2V5LnNsaWNlKDAsIDUpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gXCJ2YWx1ZVwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKCFwcmVLZXkpIHByZUtleSA9IG51bWtleTtcclxuICAgICAgICAgICAgaWYgKG51bSA8PSBudW1PYmpbbnVta2V5XSkge1xyXG4gICAgICAgICAgICAgICAga2V5ID0gcHJlS2V5O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJlS2V5ID0gbnVta2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFrZXkpIGtleSA9IHByZUtleTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVPYmo6IGNyb3BfY29uZmlnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5jcm9wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNyb3BbaV0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVPYmogPSB0aGlzLmNyb3BbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aW1lT2JqW2tleV07XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maWdNYW5hZ2VyLmluc3RhbmNlKCk7XHJcbiJdfQ==
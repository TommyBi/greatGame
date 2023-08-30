"use strict";
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
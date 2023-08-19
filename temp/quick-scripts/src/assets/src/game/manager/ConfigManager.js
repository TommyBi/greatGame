"use strict";
cc._RF.push(module, '0da7dg7/WBIx6aLD65qJ7hv', 'ConfigManager');
// src/game/manager/ConfigManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderManager_1 = require("../../framework/manager/LoaderManager");
var Handler_1 = require("../../framework/base/Handler");
var Global_1 = require("../consts/Global");
var ConfigManager = /** @class */ (function () {
    function ConfigManager() {
        this.gameJson = {}; //单个游戏json配置
        this.jsonLoadNum = 0;
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
            // todo: send event 
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
        }
    };
    return ConfigManager;
}());
exports.default = ConfigManager.instance();

cc._RF.pop();
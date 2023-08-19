"use strict";
cc._RF.push(module, '43a9eM2IMFLF72v/Sws7ycN', 'DataManager');
// src/framework/manager/DataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventConst_1 = require("../../game/consts/EventConst");
var DataManager = /** @class */ (function () {
    function DataManager() {
        this._configData = {};
        this._barrageIndex = 1;
        this._viewState = EventConst_1.default.VIEW_STATE_NORMAL;
    }
    DataManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new DataManager();
        }
        return this._instance;
    };
    DataManager.prototype.init = function () {
        this.loadJson();
    };
    DataManager.prototype.loadJson = function () {
        var _this = this;
        var baseUrl = "config/";
        var jsonList = [
            "allConf"
        ];
        var _loop_1 = function (i) {
            var jsonFile = baseUrl + jsonList[i];
            cc.loader.loadRes(jsonFile, cc.JsonAsset, function (error, res) {
                if (error) {
                    console.error("JSON文件加载失败 ", jsonFile);
                    return;
                }
                _this._configData[jsonList[i]] = res;
            });
        };
        for (var i = 0; i < jsonList.length; ++i) {
            _loop_1(i);
        }
    };
    DataManager.prototype.getConfig = function (mname) {
        return this._configData[mname] || null;
    };
    DataManager.prototype.getJson = function (mname) {
        var config = this.getConfig(mname);
        if (!config) {
            return null;
        }
        return config["json"];
    };
    DataManager.prototype.setViewState = function (state) {
        this._viewState = state;
    };
    DataManager.prototype.getViewState = function () {
        return this._viewState;
    };
    DataManager._instance = null;
    return DataManager;
}());
;
exports.default = DataManager.getInstance();

cc._RF.pop();
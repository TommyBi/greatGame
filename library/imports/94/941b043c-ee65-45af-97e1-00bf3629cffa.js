"use strict";
cc._RF.push(module, '941b0Q87mVFr5fhAL82Kc/6', 'PlayerData');
// src/game/datas/PlayerData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageHelper_1 = require("../../framework/helper/StorageHelper");
var Utils_1 = require("../../framework/tools/Utils");
var StorageType_1 = require("../consts/StorageType");
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        this.level = 1;
    }
    PlayerData.prototype.saveData = function () {
        var sdata = {
            level: this.level,
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.gameData, sdata);
    };
    PlayerData.prototype.setIsAuto = function (autoCfg) {
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.isAutoSell, autoCfg);
    };
    PlayerData.prototype.getData = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.gameData);
        cc.log("debug:缓存数据：", data);
        if (data) {
            this.level = Utils_1.default.isUndefined(data.level) ? this.level : data.level;
        }
        else {
            this.level = 1;
        }
    };
    PlayerData.prototype.resetData = function () {
        this.saveData();
    };
    return PlayerData;
}());
exports.default = PlayerData;

cc._RF.pop();
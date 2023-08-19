"use strict";
cc._RF.push(module, 'b6565X/qIRN8Yc8PKbNL1Ju', 'PlayerModel');
// src/game/datas/PlayerModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicManager_1 = require("../../framework/manager/MusicManager");
var PlayerData_1 = require("../datas/PlayerData");
var PlayerModel = /** @class */ (function () {
    function PlayerModel() {
        this.data = new PlayerData_1.default();
    }
    PlayerModel.instance = function () {
        if (!this._instance) {
            this._instance = new PlayerModel();
        }
        return this._instance;
    };
    PlayerModel.prototype.loadData = function () {
        this.data.getData();
    };
    PlayerModel.prototype.getLevel = function () {
        return this.data.level;
    };
    PlayerModel.prototype.setLevel = function () {
        this.data.level++;
    };
    PlayerModel.prototype.setSoundSwitch = function (val) {
        // this.data.soundSwitch = val;
        MusicManager_1.default.initMusic();
        this.saveData();
    };
    PlayerModel.prototype.getSoundSwitch = function () {
        return true;
    };
    PlayerModel.prototype.setSoundYinXiaoSwitch = function (v) {
        // this.data.soundYinXiao = v;
        MusicManager_1.default.initMusic();
        this.saveData();
    };
    PlayerModel.prototype.getSoundYinXiaoSwitch = function () {
        return true;
    };
    PlayerModel.prototype.saveData = function () {
        this.data.saveData();
    };
    PlayerModel.prototype.resetData = function () {
        this.data.resetData();
    };
    return PlayerModel;
}());
exports.default = PlayerModel.instance();

cc._RF.pop();
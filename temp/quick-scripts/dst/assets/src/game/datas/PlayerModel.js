
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9kYXRhcy9QbGF5ZXJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSxrREFBNkM7QUFFN0M7SUFBQTtRQUdZLFNBQUksR0FBZSxJQUFJLG9CQUFVLEVBQUUsQ0FBQztJQStDaEQsQ0FBQztJQTdDVSxvQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsR0FBRztRQUNkLCtCQUErQjtRQUMvQixzQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQ0FBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNuQiw4QkFBOEI7UUFDOUIsc0JBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDJDQUFxQixHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FsREEsQUFrREMsSUFBQTtBQUVELGtCQUFlLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXNpY01hbmFnZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL011c2ljTWFuYWdlclwiO1xuaW1wb3J0IFBsYXllckRhdGEgZnJvbSBcIi4uL2RhdGFzL1BsYXllckRhdGFcIjtcblxuY2xhc3MgUGxheWVyTW9kZWwge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGxheWVyTW9kZWw7XG5cbiAgICBwcml2YXRlIGRhdGE6IFBsYXllckRhdGEgPSBuZXcgUGxheWVyRGF0YSgpO1xuXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQbGF5ZXJNb2RlbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmdldERhdGEoKTtcbiAgICB9XG5cbiAgICBnZXRMZXZlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZXZlbDtcbiAgICB9XG5cbiAgICBzZXRMZXZlbCgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmxldmVsKys7XG4gICAgfVxuXG4gICAgc2V0U291bmRTd2l0Y2godmFsKSB7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5zb3VuZFN3aXRjaCA9IHZhbDtcbiAgICAgICAgTXVzaWNNYW5hZ2VyLmluaXRNdXNpYygpO1xuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XG4gICAgfVxuXG4gICAgZ2V0U291bmRTd2l0Y2goKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldFNvdW5kWWluWGlhb1N3aXRjaCh2KSB7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5zb3VuZFlpblhpYW8gPSB2O1xuICAgICAgICBNdXNpY01hbmFnZXIuaW5pdE11c2ljKCk7XG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgICB9XG5cbiAgICBnZXRTb3VuZFlpblhpYW9Td2l0Y2goKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNhdmVEYXRhKCkge1xuICAgICAgICB0aGlzLmRhdGEuc2F2ZURhdGEoKTtcbiAgICB9XG4gICAgcmVzZXREYXRhKCkge1xuICAgICAgICB0aGlzLmRhdGEucmVzZXREYXRhKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJNb2RlbC5pbnN0YW5jZSgpO1xuIl19
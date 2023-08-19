
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9kYXRhcy9QbGF5ZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLHFEQUFnRDtBQUNoRCxxREFBZ0Q7QUFNaEQ7SUFBQTtRQUNXLFVBQUssR0FBVyxDQUFDLENBQUM7SUEwQjdCLENBQUM7SUF4QkcsNkJBQVEsR0FBUjtRQUNJLElBQUksS0FBSyxHQUFHO1lBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCLENBQUM7UUFDRix1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLE9BQU87UUFDYix1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3hFO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxpQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmFnZUhlbHBlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2hlbHBlci9TdG9yYWdlSGVscGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay90b29scy9VdGlsc1wiO1xuaW1wb3J0IFN0b3JhZ2VUeXBlIGZyb20gXCIuLi9jb25zdHMvU3RvcmFnZVR5cGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVSUNvbmZpZyB7XG4gICAgc2tpbklkOiBudW1iZXIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckRhdGEge1xuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyID0gMTtcblxuICAgIHNhdmVEYXRhKCkge1xuICAgICAgICBsZXQgc2RhdGEgPSB7XG4gICAgICAgICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgICAgfTtcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmdhbWVEYXRhLCBzZGF0YSk7XG4gICAgfVxuXG4gICAgc2V0SXNBdXRvKGF1dG9DZmcpIHtcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmlzQXV0b1NlbGwsIGF1dG9DZmcpO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0gU3RvcmFnZUhlbHBlci5nZXRKc29uQnlLZXkoU3RvcmFnZVR5cGUuZ2FtZURhdGEpO1xuICAgICAgICBjYy5sb2coXCJkZWJ1ZzrnvJPlrZjmlbDmja7vvJpcIiwgZGF0YSk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5sZXZlbCkgPyB0aGlzLmxldmVsIDogZGF0YS5sZXZlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXREYXRhKCkge1xuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XG4gICAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvRGF0YU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFdEQ7SUFBQTtRQUNVLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGVBQVUsR0FBVyxvQkFBVSxDQUFDLGlCQUFpQixDQUFDO0lBZ0Q1RCxDQUFDO0lBL0NRLHVCQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQyxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDeEIsSUFBSSxRQUFRLEdBQUc7WUFDYixTQUFTO1NBQ1YsQ0FBQztnQ0FDTyxDQUFDO1lBQ1IsSUFBSSxRQUFRLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO2dCQUNuRCxJQUFJLEtBQUssRUFBRTtvQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDdkMsT0FBTztpQkFDUjtnQkFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQzs7UUFSTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7b0JBQS9CLENBQUM7U0FTVDtJQUNILENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFoRE0scUJBQVMsR0FBZ0IsSUFBSSxDQUFDO0lBaUR2QyxrQkFBQztDQXBERCxBQW9EQyxJQUFBO0FBQUEsQ0FBQztBQUNGLGtCQUFlLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudENvbnN0IGZyb20gXCIuLi8uLi9nYW1lL2NvbnN0cy9FdmVudENvbnN0XCI7XG5cbmNsYXNzIERhdGFNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfY29uZmlnRGF0YTogYW55ID0ge307XG4gIHB1YmxpYyBfYmFycmFnZUluZGV4OiBudW1iZXIgPSAxO1xuICBzdGF0aWMgX2luc3RhbmNlOiBEYXRhTWFuYWdlciA9IG51bGw7XG4gIHByaXZhdGUgX3ZpZXdTdGF0ZTogbnVtYmVyID0gRXZlbnRDb25zdC5WSUVXX1NUQVRFX05PUk1BTDtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERhdGFNYW5hZ2VyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5sb2FkSnNvbigpO1xuICB9XG5cbiAgbG9hZEpzb24oKSB7XG4gICAgbGV0IGJhc2VVcmwgPSBcImNvbmZpZy9cIjtcbiAgICBsZXQganNvbkxpc3QgPSBbXG4gICAgICBcImFsbENvbmZcIlxuICAgIF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IGpzb25GaWxlID0gYmFzZVVybCArIGpzb25MaXN0W2ldO1xuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoanNvbkZpbGUsIGNjLkpzb25Bc3NldCwgKGVycm9yLCByZXMpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkpTT07mlofku7bliqDovb3lpLHotKUgXCIsIGpzb25GaWxlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29uZmlnRGF0YVtqc29uTGlzdFtpXV0gPSByZXM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRDb25maWcobW5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhW21uYW1lXSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0SnNvbihtbmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKG1uYW1lKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb25maWdbXCJqc29uXCJdO1xuICB9XG5cbiAgc2V0Vmlld1N0YXRlKHN0YXRlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92aWV3U3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldFZpZXdTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld1N0YXRlO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTsiXX0=
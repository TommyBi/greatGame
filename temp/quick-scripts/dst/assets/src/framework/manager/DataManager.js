
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
            "barrage"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvRGF0YU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFdEQ7SUFBQTtRQUNZLGdCQUFXLEdBQVMsRUFBRSxDQUFDO1FBQ3hCLGtCQUFhLEdBQVksQ0FBQyxDQUFDO1FBRTFCLGVBQVUsR0FBWSxvQkFBVSxDQUFDLGlCQUFpQixDQUFDO0lBMkMvRCxDQUFDO0lBMUNVLHVCQUFXLEdBQWxCO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNELDhCQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLFFBQVEsR0FBRztZQUNYLFNBQVM7U0FDWixDQUFDO2dDQUNNLENBQUM7WUFDTCxJQUFJLFFBQVEsR0FBRyxPQUFPLEdBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsU0FBUyxFQUFDLFVBQUMsS0FBSyxFQUFDLEdBQUc7Z0JBQzlDLElBQUcsS0FBSyxFQUFDO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxPQUFPO2lCQUNWO2dCQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDOztRQVJQLEtBQUksSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQztvQkFBN0IsQ0FBQztTQVNSO0lBQ0wsQ0FBQztJQUNELCtCQUFTLEdBQVQsVUFBVSxLQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUNELDZCQUFPLEdBQVAsVUFBUSxLQUFZO1FBQ2hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNQLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0NBQVksR0FBWixVQUFhLEtBQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELGtDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQTNDTSxxQkFBUyxHQUFpQixJQUFJLENBQUM7SUE0QzFDLGtCQUFDO0NBL0NELEFBK0NDLElBQUE7QUFBQSxDQUFDO0FBQ0Ysa0JBQWUsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50Q29uc3QgZnJvbSBcIi4uLy4uL2dhbWUvY29uc3RzL0V2ZW50Q29uc3RcIjtcclxuXHJcbmNsYXNzIERhdGFNYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBfY29uZmlnRGF0YSA6IGFueSA9IHt9O1xyXG4gICAgcHVibGljIF9iYXJyYWdlSW5kZXggOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIF9pbnN0YW5jZSA6IERhdGFNYW5hZ2VyID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3ZpZXdTdGF0ZSA6IG51bWJlciA9IEV2ZW50Q29uc3QuVklFV19TVEFURV9OT1JNQUw7XHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcclxuICAgICAgICBpZighdGhpcy5faW5zdGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBEYXRhTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMubG9hZEpzb24oKTtcclxuICAgIH1cclxuICAgIGxvYWRKc29uKCl7XHJcbiAgICAgICAgbGV0IGJhc2VVcmwgPSBcImNvbmZpZy9cIjtcclxuICAgICAgICBsZXQganNvbkxpc3QgPSBbXHJcbiAgICAgICAgICAgIFwiYmFycmFnZVwiXHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCBqc29uTGlzdC5sZW5ndGg7KytpKXtcclxuICAgICAgICAgICAgbGV0IGpzb25GaWxlID0gYmFzZVVybCArICBqc29uTGlzdFtpXTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoanNvbkZpbGUsY2MuSnNvbkFzc2V0LChlcnJvcixyZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJKU09O5paH5Lu25Yqg6L295aSx6LSlIFwiLGpzb25GaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25maWdEYXRhW2pzb25MaXN0W2ldXSA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Q29uZmlnKG1uYW1lOnN0cmluZyl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ0RhdGFbbW5hbWVdIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXRKc29uKG1uYW1lOnN0cmluZyl7XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKG1uYW1lKTtcclxuICAgICAgICBpZighY29uZmlnKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb25maWdbXCJqc29uXCJdO1xyXG4gICAgfVxyXG4gICAgc2V0Vmlld1N0YXRlKHN0YXRlOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fdmlld1N0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXRWaWV3U3RhdGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlld1N0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpOyJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3e9eEzkHlPB4Ff4UQ3r1OX', 'Loading');
// src/game/Loading.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Handler_1 = require("../framework/base/Handler");
var LoaderManager_1 = require("../framework/manager/LoaderManager");
var MkUtils_1 = require("../framework/tools/MkUtils");
var LoaderType_1 = require("./consts/LoaderType");
var UIType_1 = require("./consts/UIType");
var PlayerModel_1 = require("./datas/PlayerModel");
var ConfigManager_1 = require("./manager/ConfigManager");
cc.macro.CLEANUP_IMAGE_CACHE = false;
cc.dynamicAtlasManager.enabled = true;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingBar = null;
        return _this;
    }
    Loading.prototype.onLoad = function () {
        var _this = this;
        LoaderType_1.default.initConfig();
        UIType_1.default.init();
        ConfigManager_1.default.init();
        this.loadingBar.node.active = true;
        this.loadingBar.progress = 0;
        var backup = cc.loader.onProgress;
        cc.loader.onProgress = function (count, amount) {
            if (this.loadingBar)
                this.loadingBar.progress = count / amount;
        }.bind(this);
        var gameView = UIType_1.default.gameView;
        LoaderManager_1.default.loaderPrefab(gameView.uname, Handler_1.default.create(function (res) {
            _this.initDataSuccess();
        }, this), gameView.mname);
    };
    Loading.prototype.start = function () {
        MkUtils_1.default.setStatsColor(cc.Color.WHITE);
        cc.game.setFrameRate(60);
        this.initData();
    };
    Loading.prototype.initData = function () {
        // PlayerModel.loadData();
        this.initDataSuccess();
    };
    Loading.prototype.initDataSuccess = function () {
        PlayerModel_1.default.loadData();
        cc.director.loadScene("main");
        cc.director.preloadScene("main", function (count, total) {
        });
        console.log("查看分辨率", JSON.stringify(cc.winSize));
    };
    __decorate([
        property(cc.ProgressBar)
    ], Loading.prototype, "loadingBar", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9Mb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCxvRUFBK0Q7QUFDL0Qsc0RBQWlEO0FBQ2pELGtEQUE2QztBQUM3QywwQ0FBcUM7QUFDckMsbURBQThDO0FBQzlDLHlEQUFvRDtBQUVwRCxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztBQUNyQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRDQztRQXpDQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBeUNwQyxDQUFDO0lBdkNDLHdCQUFNLEdBQU47UUFBQSxpQkFrQkM7UUFqQkMsb0JBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixnQkFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsdUJBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLEtBQUssRUFBRSxNQUFNO1lBQzVDLElBQUksSUFBSSxDQUFDLFVBQVU7Z0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNqRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBS2IsSUFBSSxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUM7UUFDL0IsdUJBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUc7WUFDNUQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDRSxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sMEJBQVEsR0FBaEI7UUFDRSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBQ0UscUJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsVUFBQyxLQUFLLEVBQUMsS0FBSztRQUU1QyxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNTO0lBSGYsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTRDM0I7SUFBRCxjQUFDO0NBNUNELEFBNENDLENBNUNvQyxFQUFFLENBQUMsU0FBUyxHQTRDaEQ7a0JBNUNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2ZyYW1ld29yay9iYXNlL0hhbmRsZXJcIjtcbmltcG9ydCBMb2FkZXJNYW5hZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcbmltcG9ydCBMb2FkZXJUeXBlIGZyb20gXCIuL2NvbnN0cy9Mb2FkZXJUeXBlXCI7XG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuL2NvbnN0cy9VSVR5cGVcIjtcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XG5cbmNjLm1hY3JvLkNMRUFOVVBfSU1BR0VfQ0FDSEUgPSBmYWxzZTtcbmNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICBsb2FkaW5nQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIExvYWRlclR5cGUuaW5pdENvbmZpZygpO1xuICAgIFVJVHlwZS5pbml0KCk7XG4gICAgQ29uZmlnTWFuYWdlci5pbml0KCk7XG4gICAgdGhpcy5sb2FkaW5nQmFyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSAwO1xuICAgIGxldCBiYWNrdXAgPSBjYy5sb2FkZXIub25Qcm9ncmVzcztcbiAgICBjYy5sb2FkZXIub25Qcm9ncmVzcyA9IGZ1bmN0aW9uIChjb3VudCwgYW1vdW50KSB7XG4gICAgICBpZiAodGhpcy5sb2FkaW5nQmFyKSB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSBjb3VudCAvIGFtb3VudDtcbiAgICB9LmJpbmQodGhpcyk7XG5cblxuXG5cbiAgICBsZXQgZ2FtZVZpZXcgPSBVSVR5cGUuZ2FtZVZpZXc7XG4gICAgTG9hZGVyTWFuYWdlci5sb2FkZXJQcmVmYWIoZ2FtZVZpZXcudW5hbWUsIEhhbmRsZXIuY3JlYXRlKChyZXMpID0+IHtcbiAgICAgIHRoaXMuaW5pdERhdGFTdWNjZXNzKCk7XG4gICAgfSwgdGhpcyksIGdhbWVWaWV3Lm1uYW1lKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIE1LVXRpbHMuc2V0U3RhdHNDb2xvcihjYy5Db2xvci5XSElURSk7XG4gICAgY2MuZ2FtZS5zZXRGcmFtZVJhdGUoNjApO1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERhdGEoKSB7XG4gICAgLy8gUGxheWVyTW9kZWwubG9hZERhdGEoKTtcbiAgICB0aGlzLmluaXREYXRhU3VjY2VzcygpXG4gIH1cblxuICBpbml0RGF0YVN1Y2Nlc3MoKSB7XG4gICAgUGxheWVyTW9kZWwubG9hZERhdGEoKTtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIm1haW5cIiwoY291bnQsdG90YWwpPT57XG5cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwi5p+l55yL5YiG6L6o546HXCIsIEpTT04uc3RyaW5naWZ5KGNjLndpblNpemUpKTtcbiAgfVxufVxuIl19
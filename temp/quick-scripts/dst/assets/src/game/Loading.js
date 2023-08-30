
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
var DataManager_1 = require("../framework/manager/DataManager");
var LoaderManager_1 = require("../framework/manager/LoaderManager");
var SDKManager_1 = require("../framework/manager/SDKManager");
var NResponer_1 = require("../framework/message/NResponer");
var MkUtils_1 = require("../framework/tools/MkUtils");
var LoaderType_1 = require("./consts/LoaderType");
var UIType_1 = require("./consts/UIType");
var PlayerModel_1 = require("./datas/PlayerModel");
var ConfigManager_1 = require("./manager/ConfigManager");
var Message_1 = require("./view/Message");
cc.macro.CLEANUP_IMAGE_CACHE = false;
cc.dynamicAtlasManager.enabled = true;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingBar = null;
        return _this;
        // update (dt) {}
    }
    Loading.prototype.onLoad = function () {
        var _this = this;
        SDKManager_1.default.onStartGame(0);
        LoaderType_1.default.initConfig();
        UIType_1.default.init();
        NResponer_1.default.on(Message_1.Message.configComplete, Handler_1.default.create(function () {
            // UIMananger.showView(UIType.mainView);
        }, this), this);
        ConfigManager_1.default.init();
        this.loadingBar.node.active = true;
        this.loadingBar.progress = 0;
        var backup = cc.loader.onProgress;
        cc.loader.onProgress = function (count, amount) {
            this.loadingBar.progress = count / amount;
        }.bind(this);
        DataManager_1.default.init();
        cc.director.preloadScene("main", function () {
            cc.loader.onProgress = backup;
            _this.loadingBar.node.active = false;
            _this.initDataSuccess();
        });
        var gameView = UIType_1.default.gameView;
        LoaderManager_1.default.loaderPrefab(gameView.uname, Handler_1.default.create(function (res) {
        }, this), gameView.mname);
    };
    Loading.prototype.start = function () {
        MkUtils_1.default.setStatsColor(cc.Color.RED);
        cc.game.setFrameRate(60);
        this.initData();
        // ConfigManager.loadGameZipJson("immotalJsonZip", Global.JSON_FILE.split("|"), function () {
        //     this.initDataSuccess();
        // }.bind(this), true)
    };
    Loading.prototype.initData = function () {
        // PlayerModel.loadData();
    };
    Loading.prototype.initDataSuccess = function () {
        PlayerModel_1.default.initUiCfg();
        PlayerModel_1.default.loadData();
        // this.scheduleOnce(() => {
        //     cc.director.loadScene("main");
        // }, 0.1);
        cc.director.loadScene("main");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9Mb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCxnRUFBMkQ7QUFDM0Qsb0VBQStEO0FBQy9ELDhEQUF5RDtBQUV6RCw0REFBdUQ7QUFDdkQsc0RBQWlEO0FBRWpELGtEQUE2QztBQUM3QywwQ0FBcUM7QUFDckMsbURBQThDO0FBQzlDLHlEQUFvRDtBQUNwRCwwQ0FBeUM7QUFFekMsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDckMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFDSSx3QkFBd0I7UUFENUIscUVBOERDO1FBMURHLGdCQUFVLEdBQW1CLElBQUksQ0FBQzs7UUF5RGxDLGlCQUFpQjtJQUNyQixDQUFDO0lBeERHLHdCQUFNLEdBQU47UUFBQSxpQkEyQkM7UUF6Qkcsb0JBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUIsb0JBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixnQkFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsbUJBQVMsQ0FBQyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsaUJBQU8sQ0FBQyxNQUFNLENBQUM7WUFDaEQsd0NBQXdDO1FBQzVDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoQix1QkFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsS0FBSyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWIscUJBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuQixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7WUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUM7UUFDL0IsdUJBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUc7UUFDOUQsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUVJLGlCQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLDZGQUE2RjtRQUM3Riw4QkFBOEI7UUFDOUIsc0JBQXNCO0lBQzFCLENBQUM7SUFFTywwQkFBUSxHQUFoQjtRQUNJLDBCQUEwQjtJQUM5QixDQUFDO0lBRUQsaUNBQWUsR0FBZjtRQUVJLHFCQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFeEIscUJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2Qiw0QkFBNEI7UUFDNUIscUNBQXFDO1FBQ3JDLFdBQVc7UUFDWCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDUztJQUpqQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBOEQzQjtJQUFELGNBQUM7Q0E5REQsQUE4REMsQ0E5RG9DLEVBQUUsQ0FBQyxTQUFTLEdBOERoRDtrQkE5RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vZnJhbWV3b3JrL2Jhc2UvSGFuZGxlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL2ZyYW1ld29yay9tYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBMb2FkZXJNYW5hZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBOUmVzcG9uZXIgZnJvbSBcIi4uL2ZyYW1ld29yay9tZXNzYWdlL05SZXNwb25lclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBMb2FkZXJUeXBlIGZyb20gXCIuL2NvbnN0cy9Mb2FkZXJUeXBlXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4vY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi92aWV3L01lc3NhZ2VcIjtcclxuXHJcbmNjLm1hY3JvLkNMRUFOVVBfSU1BR0VfQ0FDSEUgPSBmYWxzZTtcclxuY2MuZHluYW1pY0F0bGFzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgbG9hZGluZ0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgU0RLTWFuYWdlci5vblN0YXJ0R2FtZSgwKTtcclxuXHJcbiAgICAgICAgTG9hZGVyVHlwZS5pbml0Q29uZmlnKCk7XHJcbiAgICAgICAgVUlUeXBlLmluaXQoKTtcclxuICAgICAgICBOUmVzcG9uZXIub24oTWVzc2FnZS5jb25maWdDb21wbGV0ZSwgSGFuZGxlci5jcmVhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVSU1hbmFuZ2VyLnNob3dWaWV3KFVJVHlwZS5tYWluVmlldyk7XHJcbiAgICAgICAgfSwgdGhpcyksIHRoaXMpO1xyXG4gICAgICAgIENvbmZpZ01hbmFnZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQmFyLnByb2dyZXNzID0gMDtcclxuICAgICAgICBsZXQgYmFja3VwID0gY2MubG9hZGVyLm9uUHJvZ3Jlc3M7XHJcbiAgICAgICAgY2MubG9hZGVyLm9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoY291bnQsIGFtb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSBjb3VudCAvIGFtb3VudDtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluaXQoKTtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwibWFpblwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5vblByb2dyZXNzID0gYmFja3VwO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCYXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YVN1Y2Nlc3MoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZ2FtZVZpZXcgPSBVSVR5cGUuZ2FtZVZpZXc7XHJcbiAgICAgICAgTG9hZGVyTWFuYWdlci5sb2FkZXJQcmVmYWIoZ2FtZVZpZXcudW5hbWUsIEhhbmRsZXIuY3JlYXRlKChyZXMpID0+IHtcclxuICAgICAgICB9LCB0aGlzKSwgZ2FtZVZpZXcubW5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBNS1V0aWxzLnNldFN0YXRzQ29sb3IoY2MuQ29sb3IuUkVEKTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5zZXRGcmFtZVJhdGUoNjApO1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICAvLyBDb25maWdNYW5hZ2VyLmxvYWRHYW1lWmlwSnNvbihcImltbW90YWxKc29uWmlwXCIsIEdsb2JhbC5KU09OX0ZJTEUuc3BsaXQoXCJ8XCIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaW5pdERhdGFTdWNjZXNzKCk7XHJcbiAgICAgICAgLy8gfS5iaW5kKHRoaXMpLCB0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgLy8gUGxheWVyTW9kZWwubG9hZERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RGF0YVN1Y2Nlc3MoKSB7XHJcblxyXG4gICAgICAgIFBsYXllck1vZGVsLmluaXRVaUNmZygpO1xyXG5cclxuICAgICAgICBQbGF5ZXJNb2RlbC5sb2FkRGF0YSgpO1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpblwiKTtcclxuICAgICAgICAvLyB9LCAwLjEpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmn6XnnIvliIbovqjnjodcIiwgSlNPTi5zdHJpbmdpZnkoY2Mud2luU2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
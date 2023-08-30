
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bffdcUhsvpLA4so4PxZNN3z', 'Main');
// src/game/Main.ts

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
var UIMananger_1 = require("../framework/manager/UIMananger");
var UIType_1 = require("./consts/UIType");
var MusicManager_1 = require("../framework/manager/MusicManager");
var MkUtils_1 = require("../framework/tools/MkUtils");
var DataManager_1 = require("../framework/manager/DataManager");
var PlayerModel_1 = require("./datas/PlayerModel");
var JSHelper_1 = require("../framework/helper/JSHelper");
var SDKManager_1 = require("../framework/manager/SDKManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.top = null;
        _this.guide = null;
        _this.offlineTime_interval = 0;
        _this.taskHd = 0;
        return _this;
        // https://forum.cocos.org/t/cocos-creator-50/94999      //首屏
    }
    Main.prototype.onLoad = function () {
        cc.macro.CLEANUP_IMAGE_CACHE = false;
        cc.dynamicAtlasManager.enabled = true;
        UIMananger_1.default.init();
        DataManager_1.default.init();
        MusicManager_1.default.initMusic();
        JSHelper_1.default.playMisuc("bgm");
        this.init();
    };
    Main.prototype.init = function () {
        var _this = this;
        SDKManager_1.default.onStartGame(1);
        // console.log(16/9,"   长宽比：",cc.winSize.height/cc.winSize.width);
        if (SDKManager_1.default.hasNewOrderReward()) {
            PlayerModel_1.default.guideStep = 0;
            PlayerModel_1.default.guideState = 0;
        }
        else {
            PlayerModel_1.default.guideState = 1;
            PlayerModel_1.default.guideStep = -1;
        }
        UIMananger_1.default.showView(UIType_1.default.gameView);
        SDKManager_1.default.getUserAmount();
        // NResponer.on(Message.configComplete,Handler.create( ()=>{
        // if (!PlayerModel.guideState) PlayerModel.guideStep = 0;
        MkUtils_1.default.setNodeDelay(this.node, 0, function () {
            UIMananger_1.default.top = cc.instantiate(_this.top);
            UIMananger_1.default.setTop();
            if (PlayerModel_1.default.guideStep >= 0)
                _this.showGuide();
            else
                UIMananger_1.default.showPanel(UIType_1.default.loginDay);
        });
        // PlayerModel.initMoney(101.25)
        // },this ),this);
        // MusicManager.playMusic('bg.mp3');
    };
    Main.prototype.start = function () {
    };
    Main.prototype.update = function (dt) {
        this.offlineTime_interval += dt;
        if (this.offlineTime_interval >= 5) {
            this.offlineTime_interval = 0;
            PlayerModel_1.default.setOfflineTimestamp();
        }
        this.taskHd += dt;
        if (this.taskHd >= 10) {
            this.taskHd = 0;
            // SDKManager.getTaskRewardCount();
        }
    };
    Main.prototype.showGuide = function () {
        UIMananger_1.default.guide = cc.instantiate(this.guide);
        UIMananger_1.default.showGuide();
    };
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "top", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "guide", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLG1DQUFtQztTQUN0QztJQUNMLENBQUM7SUFHRCx3QkFBUyxHQUFUO1FBQ0ksb0JBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsb0JBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBekVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUNBQ0U7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1Q0FDSTtJQUpQLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4RXhCO0lBQUQsV0FBQztDQTlFRCxBQThFQyxDQTlFaUMsRUFBRSxDQUFDLFNBQVMsR0E4RTdDO2tCQTlFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4vY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgTXVzaWNNYW5hZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9NdXNpY01hbmFnZXJcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vZnJhbWV3b3JrL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFNLRE1hbmFnZXIgZnJvbSBcIi4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IEpTSGVscGVyIGZyb20gXCIuLi9mcmFtZXdvcmsvaGVscGVyL0pTSGVscGVyXCI7XHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgdG9wOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGd1aWRlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLm1hY3JvLkNMRUFOVVBfSU1BR0VfQ0FDSEUgPSBmYWxzZTtcclxuICAgICAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuaW5pdCgpO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluaXQoKTtcclxuICAgICAgICBNdXNpY01hbmFnZXIuaW5pdE11c2ljKCk7XHJcbiAgICAgICAgSlNIZWxwZXIucGxheU1pc3VjKFwiYmdtXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIFNES01hbmFnZXIub25TdGFydEdhbWUoMSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKDE2LzksXCIgICDplb/lrr3mr5TvvJpcIixjYy53aW5TaXplLmhlaWdodC9jYy53aW5TaXplLndpZHRoKTtcclxuXHJcbiAgICAgICAgaWYgKFNES01hbmFnZXIuaGFzTmV3T3JkZXJSZXdhcmQoKSkge1xyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPSAwO1xyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5ndWlkZVN0YXRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFBsYXllck1vZGVsLmd1aWRlU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1ZpZXcoVUlUeXBlLmdhbWVWaWV3KTtcclxuICAgICAgICBTREtNYW5hZ2VyLmdldFVzZXJBbW91bnQoKTtcclxuICAgICAgICAvLyBOUmVzcG9uZXIub24oTWVzc2FnZS5jb25maWdDb21wbGV0ZSxIYW5kbGVyLmNyZWF0ZSggKCk9PntcclxuICAgICAgICAvLyBpZiAoIVBsYXllck1vZGVsLmd1aWRlU3RhdGUpIFBsYXllck1vZGVsLmd1aWRlU3RlcCA9IDA7XHJcbiAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIudG9wID0gY2MuaW5zdGFudGlhdGUodGhpcy50b3ApO1xyXG4gICAgICAgICAgICBVSU1hbmFuZ2VyLnNldFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB0aGlzLnNob3dHdWlkZSgpO1xyXG4gICAgICAgICAgICBlbHNlIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5sb2dpbkRheSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gUGxheWVyTW9kZWwuaW5pdE1vbmV5KDEwMS4yNSlcclxuXHJcbiAgICAgICAgLy8gfSx0aGlzICksdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIE11c2ljTWFuYWdlci5wbGF5TXVzaWMoJ2JnLm1wMycpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvZmZsaW5lVGltZV9pbnRlcnZhbCA9IDA7XHJcbiAgICB0YXNrSGQgPSAwO1xyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5vZmZsaW5lVGltZV9pbnRlcnZhbCArPSBkdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub2ZmbGluZVRpbWVfaW50ZXJ2YWwgPj0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZmxpbmVUaW1lX2ludGVydmFsID0gMDtcclxuICAgICAgICAgICAgUGxheWVyTW9kZWwuc2V0T2ZmbGluZVRpbWVzdGFtcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50YXNrSGQgKz0gZHQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRhc2tIZCA+PSAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tIZCA9IDA7XHJcbiAgICAgICAgICAgIC8vIFNES01hbmFnZXIuZ2V0VGFza1Jld2FyZENvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzaG93R3VpZGUoKSB7XHJcbiAgICAgICAgVUlNYW5hbmdlci5ndWlkZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3VpZGUpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd0d1aWRlKCk7XHJcbiAgICB9XHJcbiAgICAvLyBodHRwczovL2ZvcnVtLmNvY29zLm9yZy90L2NvY29zLWNyZWF0b3ItNTAvOTQ5OTkgICAgICAvL+mmluWxj1xyXG5cclxufVxyXG4iXX0=
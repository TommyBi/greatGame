"use strict";
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
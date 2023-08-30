"use strict";
cc._RF.push(module, '3fdb9OJ7X9KIriYko11mx0w', 'FlyBoxView');
// src/game/view/flyBox/FlyBoxView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 飞行宝箱
 * TODO:
 */
var FlyBoxView = /** @class */ (function (_super) {
    __extends(FlyBoxView, _super);
    function FlyBoxView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_open = null;
        _this.btn_close = null;
        return _this;
    }
    FlyBoxView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_open, this.onOpen, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        this.initUI();
    };
    FlyBoxView.prototype.startShow = function () {
    };
    FlyBoxView.prototype.initUI = function () {
    };
    FlyBoxView.prototype.onRewardCfg = function (data) {
        SDKManager_1.default.getRedPackReward(data.configId);
    };
    FlyBoxView.prototype.onRewardLost = function () {
        this.onBtnCloseHandle();
    };
    FlyBoxView.prototype.onRewardGot = function (data) {
        UIMananger_1.default.showPanel(UIType_1.default.popRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, 1, { rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean });
        this.onBtnCloseHandle();
    };
    //看视频返回
    FlyBoxView.prototype.onVideoBack = function () {
        var rewardNum = MkUtils_1.default.randomNM(1000, 1200);
        UIMananger_1.default.showPanel(UIType_1.default.popRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, 1, { name: "", rewardNum: rewardNum, rewardType: 0 });
        this.onBtnCloseHandle();
    };
    FlyBoxView.prototype.onOpen = function () {
        var random = MkUtils_1.default.randomNMF(0, 100);
        if (random < 30) {
            EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
            SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video18);
        }
        else {
            SDKManager_1.default.getFlightConfig();
        }
    };
    FlyBoxView.prototype.onBtnCloseHandle = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], FlyBoxView.prototype, "btn_open", void 0);
    __decorate([
        property(cc.Node)
    ], FlyBoxView.prototype, "btn_close", void 0);
    FlyBoxView = __decorate([
        ccclass
    ], FlyBoxView);
    return FlyBoxView;
}(BasePanel_1.default));
exports.default = FlyBoxView;

cc._RF.pop();
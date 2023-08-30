"use strict";
cc._RF.push(module, 'd4158zjrj1ICoPyoqh3lpN2', 'HardView');
// src/game/view/hbPop/HardView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 辛苦红包，回馈红包
 * TODO:
 */
var HardView = /** @class */ (function (_super) {
    __extends(HardView, _super);
    function HardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xkTitle = null;
        _this.hkTitle = null;
        _this.btn_open = null;
        _this.btn_noOpen = null;
        _this.btn_giveUp = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.mType = 0;
        _this.getType = 0;
        return _this;
    }
    HardView.prototype.onEnable = function () {
        EventDispath_1.default.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath_1.default.on(this.btn_open, this.onOpen, this);
        EventDispath_1.default.on(this.btn_noOpen, this.onNoOpen, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        if (this.mType == 0) {
            SDKManager_1.default.getHardConfig();
        }
        else {
            SDKManager_1.default.getFeedbackConfig();
        }
        this.initUI();
    };
    HardView.prototype.startShow = function () {
        this.mType = this.inData[0];
    };
    HardView.prototype.initUI = function () {
        if (this.mType == 0) {
            this.xkTitle.active = true;
            this.btn_giveUp.active = true;
            this.descLb1.active = true;
        }
        else {
            this.hkTitle.active = true;
            this.btn_noOpen.active = true;
            this.descLb2.active = true;
        }
    };
    HardView.prototype.onRewardCfg = function (data) {
        this.mData = data;
    };
    HardView.prototype.onRewardLost = function () {
        this.onBtnCloseHandle();
    };
    HardView.prototype.onRewardGot = function (data) {
        if (this.getType) {
            PlayerModel_1.default.setMoney(data.userRedBean, data.redBean);
        }
        else {
            UIMananger_1.default.showPanel(UIType_1.default.hardOpenView, null, null, UIEffectManager_1.UIEffectType.SCALE, data);
        }
        this.onBtnCloseHandle();
    };
    HardView.prototype.onGiveUp = function () {
        this.onBtnCloseHandle();
    };
    //不开了，只领一点
    HardView.prototype.onNoOpen = function () {
        this.getType = 1;
        PlayerModel_1.default.zdGkNum = 0;
        SDKManager_1.default.getRedPackReward(this.mData.configId, false);
        EventDispath_1.default.send(EventType_1.EventType.HKHB_UPDATE);
    };
    HardView.prototype.onOpen = function () {
        if (this.mType == 0) {
            SDKManager_1.default.getRedPackReward(this.mData.configId);
        }
        else {
            PlayerModel_1.default.zdGkNum = 0;
            EventDispath_1.default.send(EventType_1.EventType.HKHB_UPDATE);
            SDKManager_1.default.getRedPackReward(this.mData.configId, true);
        }
        // if (this.isFirst) {
        //     // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
        //     PlayerModel.isFirstClearPest = false;
        //     this.onVideoBack();
        //     // this.onBtnCloseHandle();
        // } else {
        //     EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        //     SDKManager.showAd(Global.VIDEO_CONFIG.video13);
        // }
    };
    HardView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "xkTitle", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "hkTitle", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "btn_open", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "btn_noOpen", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "btn_giveUp", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "descLb2", void 0);
    HardView = __decorate([
        ccclass
    ], HardView);
    return HardView;
}(BasePanel_1.default));
exports.default = HardView;

cc._RF.pop();
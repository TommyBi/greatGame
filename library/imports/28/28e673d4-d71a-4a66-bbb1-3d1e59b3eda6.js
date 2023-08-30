"use strict";
cc._RF.push(module, '28e67PU1xpKZruxPR5Zs+2m', 'PopView1');
// src/game/view/popView/PopView1.ts

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
exports.PopType = void 0;
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopType;
(function (PopType) {
    PopType[PopType["FIELD"] = 0] = "FIELD";
    PopType[PopType["SHELVE"] = 1] = "SHELVE";
    PopType[PopType["GOLD1"] = 2] = "GOLD1";
    PopType[PopType["UNLOCK_ORDER"] = 3] = "UNLOCK_ORDER";
    PopType[PopType["REFRESH_ORDER"] = 4] = "REFRESH_ORDER";
    PopType[PopType["GOLD2"] = 5] = "GOLD2";
})(PopType = exports.PopType || (exports.PopType = {}));
var PopView1 = /** @class */ (function (_super) {
    __extends(PopView1, _super);
    function PopView1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gp0 = null;
        _this.numLb = null;
        _this.titleLb = null;
        _this.btnLb = null;
        _this.descLb = null;
        _this.btnClose = null;
        _this.btnOk = null;
        _this.icon = null;
        _this.iconList = [];
        // LIFE-CYCLE CALLBACKS:
        _this.mType = 0; //面板类型，0解锁地块
        return _this;
        // update (dt) {}
    }
    PopView1.prototype.onLoad = function () {
    };
    PopView1.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
    };
    PopView1.prototype.startShow = function () {
        this.gp0.active = false;
        this.descLb.node.active = true;
        this.mType = this.inData[0];
        if (this.mType == PopType.FIELD) {
            this.btnLb.string = "立即扩建";
            this.descLb.string = "扩建土地后，种植效率更高哦";
            this.icon.spriteFrame = this.iconList[PopType.FIELD];
            this.titleLb.string = "扩建土地";
        }
        else if (this.mType == PopType.SHELVE) {
            this.btnLb.string = "立即扩建";
            this.descLb.string = "扩建货架后，往来顾客更多哦";
            this.titleLb.string = "扩建货架";
            this.icon.spriteFrame = this.iconList[PopType.SHELVE];
        }
        else if (this.mType == PopType.GOLD1 || this.mType == PopType.GOLD2) {
            this.gp0.active = true;
            this.descLb.node.active = false;
            if (this.mType == PopType.GOLD1)
                this.titleLb.string = "领取钞票";
            else
                this.titleLb.string = "钞票不足";
            this.btnLb.string = "立即领取";
            this.numLb.string = this.inData[1];
            this.icon.spriteFrame = this.iconList[PopType.GOLD1];
            EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        }
        else if (this.mType == PopType.UNLOCK_ORDER) {
            this.btnLb.string = "立即解锁";
            this.descLb.string = "看精彩视频 \n 免费解锁新订单";
            this.titleLb.string = "解锁订单";
            this.icon.spriteFrame = this.iconList[PopType.UNLOCK_ORDER];
        }
        else if (this.mType == PopType.REFRESH_ORDER) {
            this.btnLb.string = "立即刷新";
            this.descLb.string = "立即刷新订单中心的所有订单 \n可能刷出更优质的订单哦";
            this.titleLb.string = "刷新订单";
            this.icon.spriteFrame = this.iconList[PopType.UNLOCK_ORDER];
        }
    };
    PopView1.prototype.onClickHandle = function () {
        switch (this.mType) {
            case PopType.FIELD:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video8);
                this.onVideoClose();
                break;
            case PopType.SHELVE:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video9);
                this.onVideoClose();
                break;
            case PopType.GOLD1:
            case PopType.GOLD2:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video2);
                break;
            case PopType.UNLOCK_ORDER:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video3);
                this.onVideoClose();
                break;
            case PopType.REFRESH_ORDER:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video4);
                this.onVideoClose();
                break;
        }
    };
    PopView1.prototype.onVideoBack = function () {
        PlayerModel_1.default.setGold(this.inData[1]);
        this.onCloseHandle();
    };
    PopView1.prototype.onVideoClose = function () {
        _super.prototype.close1.call(this);
    };
    PopView1.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], PopView1.prototype, "gp0", void 0);
    __decorate([
        property(cc.Label)
    ], PopView1.prototype, "numLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopView1.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopView1.prototype, "btnLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopView1.prototype, "descLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopView1.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopView1.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopView1.prototype, "icon", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopView1.prototype, "iconList", void 0);
    PopView1 = __decorate([
        ccclass
    ], PopView1);
    return PopView1;
}(BasePanel_1.default));
exports.default = PopView1;

cc._RF.pop();
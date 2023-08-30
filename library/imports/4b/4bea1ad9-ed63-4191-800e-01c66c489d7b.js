"use strict";
cc._RF.push(module, '4bea1rZ7WNBkYAOAcZsSJ17', 'VegetablesUnlockView');
// src/game/view/vegetables/VegetablesUnlockView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 显示解锁作物界面
 * 调用示例：UIMananger.showPanel(UIType.VegetablesUnlockView, UIEffectType.SCALE, 2);// 2为作物id
 */
var VegetablesUnlockView = /** @class */ (function (_super) {
    __extends(VegetablesUnlockView, _super);
    function VegetablesUnlockView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_video = null;
        _this.titleLb = null;
        _this.nameLb = null;
        _this.descLb = null;
        _this.cropDescLb = null;
        _this.uImgCrop = null;
        _this.mId = -1;
        return _this;
    }
    VegetablesUnlockView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_video, this.onVideo, this);
    };
    VegetablesUnlockView.prototype.onDisable = function () {
    };
    VegetablesUnlockView.prototype.startShow = function () {
        this.mId = this.inData[0];
        this.mCrop = ConfigManager_1.default.getCropById(this.mId);
        this.initUI();
    };
    VegetablesUnlockView.prototype.initUI = function () {
        var _this = this;
        this.nameLb.string = this.mCrop.name;
        this.descLb.string = "\u89E3\u9501\u540E\u5C31\u53EF\u4EE5\u79CD\u690D" + this.mCrop.name + "\u5566";
        this.cropDescLb.string = "    " + this.mCrop.desc;
        this.titleLb.string = "\u89E3\u9501" + this.mCrop.name;
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mId), function (res) {
            _this.uImgCrop.spriteFrame = res;
        });
    };
    VegetablesUnlockView.prototype.onVideo = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video11);
    };
    VegetablesUnlockView.prototype.onVideoBack = function () {
        PlayerModel_1.default.setNewCrop(this.mId);
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.VEGETABLES_UPDATE);
        MkUtils_1.default.alertTips(this.mCrop.name + "\u5DF2\u89E3\u9501\uFF0C\u5FEB\u53BB\u79CD\u690D\u5427");
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    VegetablesUnlockView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], VegetablesUnlockView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesUnlockView.prototype, "btn_video", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesUnlockView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesUnlockView.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesUnlockView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesUnlockView.prototype, "cropDescLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], VegetablesUnlockView.prototype, "uImgCrop", void 0);
    VegetablesUnlockView = __decorate([
        ccclass
    ], VegetablesUnlockView);
    return VegetablesUnlockView;
}(BasePanel_1.default));
exports.default = VegetablesUnlockView;

cc._RF.pop();
"use strict";
cc._RF.push(module, '68988jvIUZHzLNLFixtgY/r', 'LvUpCompleteView');
// src/game/view/lvUp/LvUpCompleteView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
var LvUpCompleteView = /** @class */ (function (_super) {
    __extends(LvUpCompleteView, _super);
    function LvUpCompleteView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_lvUp = null;
        _this.btn_close = null;
        _this.currentIcon = null;
        _this.currentLv = null;
        _this.cDescLb = null;
        _this.xingfuLb = null;
        _this.resList = ["field", "shelves", "cashier", "pipe", "wall", "road", "scarecrow", "warehouse", "fence"];
        return _this;
    }
    LvUpCompleteView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_lvUp, this.onLvUp, this);
        this.initUI();
    };
    LvUpCompleteView.prototype.onDisable = function () {
    };
    LvUpCompleteView.prototype.startShow = function () {
        this.mData = this.inData[0];
        this.config = this.inData[1];
        this.preConfig = this.inData[2];
    };
    LvUpCompleteView.prototype.initUI = function () {
        var _this = this;
        this.currentLv.string = this.preConfig.name + "\u6210\u529F\u5347\u81F3" + (this.mData.level + 1) + "\u7EA7";
        this.cDescLb.string = this.config.add_desc;
        this.xingfuLb.string = "x" + this.preConfig.reward;
        MkUtils_1.default.loadSpriteFrame("texture/prop/" + this.resList[this.mData.tabIndex - 1] + "/icon/" + ("0" + (this.mData.level + 1)), function (res) {
            _this.currentIcon.spriteFrame = res;
        });
    };
    LvUpCompleteView.prototype.onLvUp = function () {
        PlayerModel_1.default.setXfzs(this.preConfig.reward);
        this.onBtnCloseHandle();
    };
    LvUpCompleteView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], LvUpCompleteView.prototype, "btn_lvUp", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpCompleteView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Sprite)
    ], LvUpCompleteView.prototype, "currentIcon", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpCompleteView.prototype, "currentLv", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpCompleteView.prototype, "cDescLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpCompleteView.prototype, "xingfuLb", void 0);
    LvUpCompleteView = __decorate([
        ccclass
    ], LvUpCompleteView);
    return LvUpCompleteView;
}(BasePanel_1.default));
exports.default = LvUpCompleteView;

cc._RF.pop();
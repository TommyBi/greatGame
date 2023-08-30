"use strict";
cc._RF.push(module, '32d01ql9OlBIY6DOArOHy99', 'PopRewardView');
// src/game/view/popView/PopRewardView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
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
var PopRewardView = /** @class */ (function (_super) {
    __extends(PopRewardView, _super);
    function PopRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rewardLb = null;
        _this.titleLb = null;
        _this.descLb = null;
        _this.btnClose = null;
        _this.btnOk = null;
        _this.hbIcon = null;
        _this.goldIcon = null;
        // LIFE-CYCLE CALLBACKS:
        _this.mType = 0; //面板类型，0除虫奖励，1宝箱奖励
        return _this;
        // update (dt) {}
    }
    PopRewardView.prototype.onLoad = function () {
    };
    PopRewardView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        this.initUi();
    };
    PopRewardView.prototype.startShow = function () {
        this.mType = this.inData[0];
        this.mData = this.inData[1];
    };
    PopRewardView.prototype.initUi = function () {
        this.hbIcon.active = false;
        this.goldIcon.active = false;
        if (this.mType == 0) {
            this.titleLb.string = "除虫奖励";
            this.descLb.string = this.mData.name + "已经恢复生长，特此奖励";
        }
        else {
            this.titleLb.string = "宝箱奖励";
            this.descLb.string = "宝箱光芒大涨，恭喜你发现了";
        }
        if (this.mData.rewardType == 0) {
            this.goldIcon.active = true;
            this.rewardLb.string = "x" + Number(this.mData.rewardNum);
        }
        else {
            this.hbIcon.active = true;
            this.rewardLb.string = "x" + Number(this.mData.rewardNum).toFixed(2) + "元";
        }
    };
    PopRewardView.prototype.onClickHandle = function () {
        if (this.mData.rewardType == 0)
            PlayerModel_1.default.setGold(this.mData.rewardNum);
        else
            PlayerModel_1.default.setMoney(this.mData.totalMoney, this.mData.rewardNum);
        this.onCloseHandle();
    };
    PopRewardView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Label)
    ], PopRewardView.prototype, "rewardLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopRewardView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopRewardView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopRewardView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopRewardView.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Node)
    ], PopRewardView.prototype, "hbIcon", void 0);
    __decorate([
        property(cc.Node)
    ], PopRewardView.prototype, "goldIcon", void 0);
    PopRewardView = __decorate([
        ccclass
    ], PopRewardView);
    return PopRewardView;
}(BasePanel_1.default));
exports.default = PopRewardView;

cc._RF.pop();
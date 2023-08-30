"use strict";
cc._RF.push(module, '064dfuqai9Bh4pbzllx6bG8', 'PopGetCropView');
// src/game/view/popView/PopGetCropView.ts

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
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var EffectManager_1 = require("../../manager/EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//获取作物，获得提示窗口
var PopGetCropView = /** @class */ (function (_super) {
    __extends(PopGetCropView, _super);
    function PopGetCropView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rewardLb = null;
        _this.descLb = null;
        _this.btnClose = null;
        _this.btnOk = null;
        _this.icon = null;
        return _this;
        // update (dt) {}
    }
    PopGetCropView.prototype.onLoad = function () {
    };
    PopGetCropView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        this.initUi();
    };
    PopGetCropView.prototype.startShow = function () {
        this.mData = this.inData[0];
    };
    PopGetCropView.prototype.initUi = function () {
        var _this = this;
        var cfg = ConfigManager_1.default.getCropById(this.mData.id);
        this.descLb.string = "恭喜获得" + this.mData.num + "个" + cfg.name;
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mData.id), function (res) {
            _this.icon.spriteFrame = res;
        });
        this.rewardLb.string = "x" + this.mData.num;
    };
    PopGetCropView.prototype.onClickHandle = function () {
        var startNode = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
        EffectManager_1.default.playCrop(startNode, this.mData.id);
        PlayerModel_1.default.checkAddOrder(this.mData.id, this.mData.num, function () {
            EventDispath_1.default.send(EventType_1.EventType.ORDER_CURRENT_CLOSE);
            // UIMananger.showPanel(UIType.orderSuccessView);
            EventDispath_1.default.send(EventType_1.EventType.ORDER_COMPLETE_UPDATE);
        }, function () {
            EventDispath_1.default.send(EventType_1.EventType.ORDER_CURRENT_UPDATE);
        });
        this.onCloseHandle();
    };
    PopGetCropView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Label)
    ], PopGetCropView.prototype, "rewardLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopGetCropView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopGetCropView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopGetCropView.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopGetCropView.prototype, "icon", void 0);
    PopGetCropView = __decorate([
        ccclass
    ], PopGetCropView);
    return PopGetCropView;
}(BasePanel_1.default));
exports.default = PopGetCropView;

cc._RF.pop();
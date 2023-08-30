"use strict";
cc._RF.push(module, 'c915aFV+0FJCaa7flq3eyW1', 'TopOrderItem');
// src/game/view/main/TopOrderItem.ts

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
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopOrderItem = /** @class */ (function (_super) {
    __extends(TopOrderItem, _super);
    function TopOrderItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLb = null;
        _this.numLb = null;
        _this.icon = null;
        _this.wc = null;
        return _this;
        // update (dt) {}
    }
    TopOrderItem.prototype.start = function () {
    };
    TopOrderItem.prototype.setData = function (data) {
        this.mData = data;
        this.changeData();
    };
    TopOrderItem.prototype.changeData = function () {
        var _this = this;
        if (this.mData.cropId == 100) {
            this.nameLb.string = "招待顾客";
        }
        else {
            var base = ConfigManager_1.default.getCropById(this.mData.cropId);
            this.nameLb.string = base.name;
        }
        if (this.mData.num >= this.mData.target) {
            this.wc.active = true;
            this.numLb.node.active = false;
        }
        else {
            this.wc.active = false;
            this.numLb.node.active = true;
            this.numLb.string = this.mData.num + "/" + this.mData.target;
        }
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mData.cropId), function (res) {
            _this.icon.spriteFrame = res;
        });
    };
    TopOrderItem.prototype.onClick = function () {
        if (PlayerModel_1.default.guideStep >= 0)
            return;
        if (this.mData.cropId == 100) {
            UIMananger_1.default.showPanel(UIType_1.default.zhaoDaiView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData);
        }
        else {
            if (PlayerModel_1.default.checkCropUnlock(this.mData.cropId)) {
                UIMananger_1.default.showPanel(UIType_1.default.getCropView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData);
            }
            else {
                UIMananger_1.default.showPanel(UIType_1.default.VegetablesUnlockView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData.cropId);
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], TopOrderItem.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], TopOrderItem.prototype, "numLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], TopOrderItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderItem.prototype, "wc", void 0);
    TopOrderItem = __decorate([
        ccclass
    ], TopOrderItem);
    return TopOrderItem;
}(cc.Component));
exports.default = TopOrderItem;

cc._RF.pop();
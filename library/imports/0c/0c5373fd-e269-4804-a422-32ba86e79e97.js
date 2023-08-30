"use strict";
cc._RF.push(module, '0c537P94mlIBKQiMrqG556X', 'OrderCurrentItem');
// src/game/view/order/OrderCurrentItem.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrderCurrentItem = /** @class */ (function (_super) {
    __extends(OrderCurrentItem, _super);
    function OrderCurrentItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLb = null;
        _this.proLb = null;
        _this.icon = null;
        _this.ywcTips = null;
        _this.btn_go = null;
        _this.pro = null;
        return _this;
    }
    // onLoad () {}
    OrderCurrentItem.prototype.start = function () {
    };
    OrderCurrentItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    OrderCurrentItem.prototype.initUI = function () {
        var _this = this;
        if (this.data.cropId == 100) {
            this.nameLb.string = "招待顾客";
        }
        else {
            var base = ConfigManager_1.default.getCropById(this.data.cropId);
            this.nameLb.string = base.name;
        }
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.data.cropId), function (res) {
            _this.icon.spriteFrame = res;
        });
        this.pro.progress = this.data.num / this.data.target;
        if (this.data.num >= this.data.target) {
            this.ywcTips.active = true;
            this.proLb.string = this.data.target + "/" + this.data.target;
        }
        else {
            this.proLb.string = this.data.num + "/" + this.data.target;
            this.btn_go.active = true;
        }
    };
    OrderCurrentItem.prototype.onGo = function () {
        EventDispath_1.default.send(EventType_1.EventType.ORDER_CLOSE);
        EventDispath_1.default.send(EventType_1.EventType.ORDER_CURRENT_CLOSE);
        if (this.data.cropId == 100) {
            UIMananger_1.default.showPanel(UIType_1.default.zhaoDaiView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data);
        }
        else {
            if (PlayerModel_1.default.checkCropUnlock(this.data.cropId)) {
                UIMananger_1.default.showPanel(UIType_1.default.getCropView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data);
            }
            else {
                UIMananger_1.default.showPanel(UIType_1.default.VegetablesUnlockView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data.cropId);
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], OrderCurrentItem.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderCurrentItem.prototype, "proLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], OrderCurrentItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], OrderCurrentItem.prototype, "ywcTips", void 0);
    __decorate([
        property(cc.Node)
    ], OrderCurrentItem.prototype, "btn_go", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], OrderCurrentItem.prototype, "pro", void 0);
    OrderCurrentItem = __decorate([
        ccclass
    ], OrderCurrentItem);
    return OrderCurrentItem;
}(AItemRenerer_1.default));
exports.default = OrderCurrentItem;

cc._RF.pop();
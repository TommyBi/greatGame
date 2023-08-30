"use strict";
cc._RF.push(module, '8f7a7K1UnBBxraBUkrGXXsN', 'TopOrderPrefab');
// src/game/view/main/TopOrderPrefab.ts

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
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var TopOrderItem_1 = require("./TopOrderItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopOrderPrefab = /** @class */ (function (_super) {
    __extends(TopOrderPrefab, _super);
    function TopOrderPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numLb = null;
        _this.right = null;
        _this.itemGp = null;
        _this.nullGp = null;
        _this.tips1 = null;
        _this.tips2 = null;
        _this.shou = null;
        _this.item = null;
        // LIFE-CYCLE CALLBACKS:
        _this.isComplete = false;
        return _this;
        // update (dt) {}
    }
    TopOrderPrefab.prototype.onLoad = function () {
    };
    TopOrderPrefab.prototype.onEnable = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_CLOSE, this.init, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_UPDATE_TOP, this.onUpdate, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_COMPLETE_UPDATE, this.onComplete, this);
        this.init();
        if (PlayerModel_1.default.checkOrderComplete()) {
            this.onComplete();
        }
    };
    TopOrderPrefab.prototype.onUpdate = function () {
        this.init();
    };
    TopOrderPrefab.prototype.openOrderHbView = function () {
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
        if (PlayerModel_1.default.checkOrderComplete()) {
            UIMananger_1.default.showPanel(UIType_1.default.orderSuccessView);
        }
        else {
            UIMananger_1.default.showPanel(UIType_1.default.orderCurrentView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData);
        }
    };
    TopOrderPrefab.prototype.resetUi = function () {
        this.right.angle = 0;
        this.right.stopAllActions();
        this.nullGp.active = false;
        this.right.active = false;
        this.itemGp.active = false;
        this.numLb.node.active = false;
        this.tips1.active = false;
        this.tips2.active = false;
    };
    TopOrderPrefab.prototype.openOrderView = function () {
        // if (PlayerModel.guideStep == 12) return;
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
        var list = PlayerModel_1.default.getOrderList();
        UIMananger_1.default.showPanel(UIType_1.default.orderView, null, null, UIEffectManager_1.UIEffectType.SCALE, list);
    };
    TopOrderPrefab.prototype.init = function () {
        this.resetUi();
        this.mData = PlayerModel_1.default.getCurrentOrder();
        if (this.mData) {
            this.shou.stopAllActions();
            this.right.active = true;
            this.itemGp.active = true;
            this.numLb.node.active = true;
            if (this.mData.quality == 0)
                this.numLb.string = "无加成";
            else if (this.mData.quality == 1) {
                this.numLb.string = "无加成";
            }
            else {
                this.numLb.string = "+" + ConfigManager_1.default.order_quality_add[this.mData.quality - 1] + "%";
            }
            this.tips1.active = true;
            this.changeItem();
            // let list = 
        }
        else {
            this.tips2.active = true;
            this.nullGp.active = true;
            ComponentHelper_1.default.setHeartAction(this.shou, 0.7, false, 1.1);
        }
        if (PlayerModel_1.default.checkOrderComplete()) {
            this.onComplete();
        }
    };
    //订单完成，晃动
    TopOrderPrefab.prototype.onComplete = function () {
        this.right.stopAllActions();
        ComponentHelper_1.default.setRotation(this.right);
    };
    TopOrderPrefab.prototype.changeItem = function () {
        this.itemGp.removeAllChildren();
        var list = this.mData.cropList;
        for (var i = 0; i < list.length; i++) {
            var item = cc.instantiate(this.item);
            this.itemGp.addChild(item);
            item.getComponent(TopOrderItem_1.default).setData(list[i]);
        }
    };
    __decorate([
        property(cc.Label)
    ], TopOrderPrefab.prototype, "numLb", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "right", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "itemGp", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "nullGp", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "tips1", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "tips2", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "shou", void 0);
    __decorate([
        property(cc.Prefab)
    ], TopOrderPrefab.prototype, "item", void 0);
    TopOrderPrefab = __decorate([
        ccclass
    ], TopOrderPrefab);
    return TopOrderPrefab;
}(cc.Component));
exports.default = TopOrderPrefab;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'f081dWyYdFPZ5MZdbEgPLce', 'OrderCurrentView');
// src/game/view/order/OrderCurrentView.ts

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
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 当前订单
 * TODO:
 */
var OrderCurrentView = /** @class */ (function (_super) {
    __extends(OrderCurrentView, _super);
    function OrderCurrentView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_giveUp = null;
        _this.btn_hb = null;
        _this.addLb = null;
        _this.orderQuLb = null;
        _this.scroller = null;
        _this.qualityNames = ["普通订单", "青铜订单", "白银订单", "黄金订单", "钻石订单", "星耀订单"];
        _this.scrollerData = [];
        return _this;
    }
    OrderCurrentView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath_1.default.on(this.btn_hb, this.onHb, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_CURRENT_CLOSE, this.onBtnCloseHandle, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_CURRENT_UPDATE, this.updateData, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_GIVE_UP, this.onBtnCloseHandle, this);
        this.initUI();
    };
    OrderCurrentView.prototype.onLoad = function () {
    };
    OrderCurrentView.prototype.start = function () {
    };
    OrderCurrentView.prototype.startShow = function () {
        this.mData = this.inData[0];
        this.scrollerData = this.mData.cropList;
    };
    OrderCurrentView.prototype.updateData = function () {
        this.mData = PlayerModel_1.default.getCurrentOrder();
        this.scrollerData = this.mData.cropList;
        this.initUI();
    };
    OrderCurrentView.prototype.initUI = function () {
        this.orderQuLb.string = this.qualityNames[this.mData.quality - 1];
        if (this.mData.quality == 1) {
            this.addLb.string = "无加成";
        }
        else {
            this.addLb.string = "+" + ConfigManager_1.default.order_quality_add[this.mData.quality - 1] + "%";
        }
        // this.addLb.string = ConfigManager.order_quality_add[this.mData.quality - 1]  + "%";
        this.scroller.refreshData(this.scrollerData);
    };
    OrderCurrentView.prototype.onGiveUp = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderGiveUpView);
    };
    OrderCurrentView.prototype.onHb = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderHbView);
    };
    /** 仅用于关闭操作 */
    OrderCurrentView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], OrderCurrentView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderCurrentView.prototype, "btn_giveUp", void 0);
    __decorate([
        property(cc.Node)
    ], OrderCurrentView.prototype, "btn_hb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderCurrentView.prototype, "addLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderCurrentView.prototype, "orderQuLb", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], OrderCurrentView.prototype, "scroller", void 0);
    OrderCurrentView = __decorate([
        ccclass
    ], OrderCurrentView);
    return OrderCurrentView;
}(BasePanel_1.default));
exports.default = OrderCurrentView;

cc._RF.pop();
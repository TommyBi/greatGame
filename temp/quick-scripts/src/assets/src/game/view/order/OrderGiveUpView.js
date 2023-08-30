"use strict";
cc._RF.push(module, 'e78c50rktdKy68oaPOcdv4t', 'OrderGiveUpView');
// src/game/view/order/OrderGiveUpView.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *放弃订单
 * TODO:
 */
var OrderGiveUpView = /** @class */ (function (_super) {
    __extends(OrderGiveUpView, _super);
    function OrderGiveUpView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_giveUp = null;
        _this.btn_continue = null;
        return _this;
    }
    OrderGiveUpView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath_1.default.on(this.btn_continue, this.onContinue, this);
        this.initUI();
    };
    OrderGiveUpView.prototype.onLoad = function () {
    };
    OrderGiveUpView.prototype.start = function () {
    };
    OrderGiveUpView.prototype.startShow = function () {
    };
    OrderGiveUpView.prototype.updateData = function () {
        this.initUI();
    };
    OrderGiveUpView.prototype.initUI = function () {
        // this.addLb.string = PlayerModel.getXfzs() + "";
    };
    OrderGiveUpView.prototype.onGiveUp = function () {
        var list = PlayerModel_1.default.getOrderList();
        list[0] = ConfigManager_1.default.getOrder();
        EventDispath_1.default.send(EventType_1.EventType.ORDER_GIVE_UP);
        EventDispath_1.default.send(EventType_1.EventType.ORDER_UPDATE_TOP);
        PlayerModel_1.default.orderVideoNum = 0;
        MkUtils_1.default.alertTips("订单已放弃，请重新接单");
        this.onBtnCloseHandle();
        //仍要放弃
    };
    OrderGiveUpView.prototype.onContinue = function () {
        //继续完成
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    OrderGiveUpView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], OrderGiveUpView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderGiveUpView.prototype, "btn_giveUp", void 0);
    __decorate([
        property(cc.Node)
    ], OrderGiveUpView.prototype, "btn_continue", void 0);
    OrderGiveUpView = __decorate([
        ccclass
    ], OrderGiveUpView);
    return OrderGiveUpView;
}(BasePanel_1.default));
exports.default = OrderGiveUpView;

cc._RF.pop();
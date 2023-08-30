"use strict";
cc._RF.push(module, 'da3b51ltX9D0KfBJL2GHqoP', 'OrderQualityView');
// src/game/view/order/OrderQualityView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 订单质量
 * TODO:
 */
var OrderQualityView = /** @class */ (function (_super) {
    __extends(OrderQualityView, _super);
    function OrderQualityView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.xingfuLb = null;
        return _this;
    }
    OrderQualityView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        this.xingfuLb.string = PlayerModel_1.default.getXfzs() + "";
    };
    OrderQualityView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], OrderQualityView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], OrderQualityView.prototype, "xingfuLb", void 0);
    OrderQualityView = __decorate([
        ccclass
    ], OrderQualityView);
    return OrderQualityView;
}(BasePanel_1.default));
exports.default = OrderQualityView;

cc._RF.pop();
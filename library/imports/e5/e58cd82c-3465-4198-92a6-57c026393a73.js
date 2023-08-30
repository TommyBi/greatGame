"use strict";
cc._RF.push(module, 'e58cdgsNGVBmJKmV8AmOTpz', 'OrderHbView');
// src/game/view/order/OrderHbView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *订单红包池
 * TODO:
 */
var OrderHbView = /** @class */ (function (_super) {
    __extends(OrderHbView, _super);
    function OrderHbView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_ok = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.numLb = null;
        return _this;
    }
    OrderHbView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_ok, this.onOk, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_VIDEO_NUM, this.updateNum, this);
        SDKManager_1.default.getOrderPoolData();
    };
    OrderHbView.prototype.onLoad = function () {
    };
    OrderHbView.prototype.start = function () {
    };
    OrderHbView.prototype.updateNum = function (num) {
        if (!num)
            num = 0;
        this.numLb.string = num + "";
        if (num > 0) {
            this.descLb1.active = true;
        }
        else {
            this.descLb2.active = true;
        }
    };
    OrderHbView.prototype.onOk = function () {
        //知道了
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    OrderHbView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], OrderHbView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderHbView.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], OrderHbView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Node)
    ], OrderHbView.prototype, "descLb2", void 0);
    __decorate([
        property(cc.Label)
    ], OrderHbView.prototype, "numLb", void 0);
    OrderHbView = __decorate([
        ccclass
    ], OrderHbView);
    return OrderHbView;
}(BasePanel_1.default));
exports.default = OrderHbView;

cc._RF.pop();
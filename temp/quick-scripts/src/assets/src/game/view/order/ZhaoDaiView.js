"use strict";
cc._RF.push(module, '6ed6aP+fz1MToN76EQmXavB', 'ZhaoDaiView');
// src/game/view/order/ZhaoDaiView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *招待顾客
 * TODO:
 */
var ZhaoDaiView = /** @class */ (function (_super) {
    __extends(ZhaoDaiView, _super);
    function ZhaoDaiView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_go = null;
        _this.btn_wait = null;
        _this.proLb = null;
        _this.pro = null;
        return _this;
    }
    ZhaoDaiView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_go, this.onGo, this);
        EventDispath_1.default.on(this.btn_wait, this.onWait, this);
        this.initUI();
    };
    ZhaoDaiView.prototype.onLoad = function () {
    };
    ZhaoDaiView.prototype.start = function () {
    };
    ZhaoDaiView.prototype.startShow = function () {
        this.mData = this.inData[0];
    };
    ZhaoDaiView.prototype.initUI = function () {
        var base = ConfigManager_1.default.getCropById(this.mData.cropId);
        this.proLb.string = this.mData.num + "/" + this.mData.target;
        this.pro.progress = this.mData.num / this.mData.target;
    };
    ZhaoDaiView.prototype.onWait = function () {
        this.onBtnCloseHandle();
    };
    ZhaoDaiView.prototype.onGo = function () {
        UIMananger_1.default.showPanel(UIType_1.default.popZlView);
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    ZhaoDaiView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], ZhaoDaiView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], ZhaoDaiView.prototype, "btn_go", void 0);
    __decorate([
        property(cc.Node)
    ], ZhaoDaiView.prototype, "btn_wait", void 0);
    __decorate([
        property(cc.Label)
    ], ZhaoDaiView.prototype, "proLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ZhaoDaiView.prototype, "pro", void 0);
    ZhaoDaiView = __decorate([
        ccclass
    ], ZhaoDaiView);
    return ZhaoDaiView;
}(BasePanel_1.default));
exports.default = ZhaoDaiView;

cc._RF.pop();
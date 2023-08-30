"use strict";
cc._RF.push(module, 'b3845RM9W9NCIexv2gOIGWm', 'RepayRedBox');
// src/game/view/main/RepayRedBox.ts

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
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//回馈红包
var RepayRedBox = /** @class */ (function (_super) {
    __extends(RepayRedBox, _super);
    function RepayRedBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pro = null;
        _this.icon = null;
        _this.proLb = null;
        _this.descLb = null;
        return _this;
    }
    RepayRedBox.prototype.onLoad = function () {
    };
    // <color=#000000>145</c><color=#EC5454>领取</color>
    RepayRedBox.prototype.start = function () {
        EventDispath_1.default.on(this.node, this.onClick, this);
    };
    RepayRedBox.prototype.onClick = function () {
    };
    RepayRedBox.prototype.iconAction = function () {
        this.icon.stopAllActions();
        ComponentHelper_1.default.setHeartAction(this.icon);
    };
    __decorate([
        property(cc.ProgressBar)
    ], RepayRedBox.prototype, "pro", void 0);
    __decorate([
        property(cc.Node)
    ], RepayRedBox.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], RepayRedBox.prototype, "proLb", void 0);
    __decorate([
        property(cc.RichText)
    ], RepayRedBox.prototype, "descLb", void 0);
    RepayRedBox = __decorate([
        ccclass
    ], RepayRedBox);
    return RepayRedBox;
}(cc.Component));
exports.default = RepayRedBox;

cc._RF.pop();
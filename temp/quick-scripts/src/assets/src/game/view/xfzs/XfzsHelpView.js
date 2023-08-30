"use strict";
cc._RF.push(module, 'ba75dgIFbdHbolCQ1sxIzs0', 'XfzsHelpView');
// src/game/view/xfzs/XfzsHelpView.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 提高幸福指数
 * TODO:
 */
var XfzsHelpView = /** @class */ (function (_super) {
    __extends(XfzsHelpView, _super);
    function XfzsHelpView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_help = null;
        _this.btn_close = null;
        return _this;
    }
    XfzsHelpView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_help, this.onBtnCloseHandle, this);
    };
    XfzsHelpView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], XfzsHelpView.prototype, "btn_help", void 0);
    __decorate([
        property(cc.Node)
    ], XfzsHelpView.prototype, "btn_close", void 0);
    XfzsHelpView = __decorate([
        ccclass
    ], XfzsHelpView);
    return XfzsHelpView;
}(BasePanel_1.default));
exports.default = XfzsHelpView;

cc._RF.pop();
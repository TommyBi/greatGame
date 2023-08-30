"use strict";
cc._RF.push(module, '18bc1Eaw+BP0ZnQFXaKg2XZ', 'LevelPopView');
// src/game/view/level/LevelPopView.ts

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
var LevelPopView = /** @class */ (function (_super) {
    __extends(LevelPopView, _super);
    function LevelPopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_get = null;
        _this.btn_close = null;
        _this.descLab = null;
        _this.moneyLab = null;
        return _this;
        // update (dt) {}
    }
    LevelPopView.prototype.onEnable = function () {
        // 领取
        EventDispath_1.default.on(this.btn_get, this.onGet, this);
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onGet, this);
        this.moneyLab.string = this.data.amount + "元";
        var num = this.nextData.orderNum - this.data.userOrderNum;
        if (num > 0) {
            this.descLab.string = "\u518D\u5B8C\u6210" + num + "\u4E2A\u8BA2\u5355\uFF0C\u96C6\u5E02\u5347\u81F3" + this.nextData.level + "\u7EA7\n\u5373\u53EF\u9886\u53D6" + this.nextData.amount + "\u5143\u63D0\u73B0\u5956\u52B1";
        }
        else {
            this.descLab.string = "可升级到下一级";
        }
    };
    LevelPopView.prototype.start = function () {
    };
    LevelPopView.prototype.startShow = function () {
        this.data = this.inData[0].currentData;
        this.nextData = this.inData[0].nextData;
    };
    //领取奖励
    LevelPopView.prototype.onGet = function () {
        this.onClose();
    };
    LevelPopView.prototype.onClose = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], LevelPopView.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], LevelPopView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], LevelPopView.prototype, "descLab", void 0);
    __decorate([
        property(cc.Label)
    ], LevelPopView.prototype, "moneyLab", void 0);
    LevelPopView = __decorate([
        ccclass
    ], LevelPopView);
    return LevelPopView;
}(BasePanel_1.default));
exports.default = LevelPopView;

cc._RF.pop();
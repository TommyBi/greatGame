"use strict";
cc._RF.push(module, '57e67CJg3hIG5hT7vhXRknh', 'FadeBackUIEffect');
// src/framework/ui/effect/FadeBackUIEffect.ts

"use strict";
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
var BaseUIEffect_1 = require("../BaseUIEffect");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FadeBackUIEffect = /** @class */ (function (_super) {
    __extends(FadeBackUIEffect, _super);
    function FadeBackUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeBackUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        node.runAction(cc.sequence(cc.fadeOut(time), cc.callFunc(function () { if (!!handler) {
            handler.call(node);
        } })));
    };
    FadeBackUIEffect = __decorate([
        ccclass
    ], FadeBackUIEffect);
    return FadeBackUIEffect;
}(BaseUIEffect_1.default));
exports.default = FadeBackUIEffect;

cc._RF.pop();
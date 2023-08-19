"use strict";
cc._RF.push(module, '4bbbbXHPUZBeaWRJIeUNPAv', 'FadeUIEffect');
// src/framework/ui/effect/FadeUIEffect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUIEffect_1 = require("../BaseUIEffect");
var FadeUIEffect = /** @class */ (function (_super) {
    __extends(FadeUIEffect, _super);
    function FadeUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        if (isOpen) {
            node.opacity = 0;
            node.runAction(cc.sequence(cc.fadeTo(time, 255), cc.callFunc(function () { if (!!handler) {
                handler.call(node);
            } })));
        }
        else {
            node.runAction(cc.sequence(cc.fadeIn(time), cc.callFunc(function () { if (!!handler) {
                handler.call(node);
            } })));
        }
    };
    return FadeUIEffect;
}(BaseUIEffect_1.default));
exports.default = FadeUIEffect;

cc._RF.pop();
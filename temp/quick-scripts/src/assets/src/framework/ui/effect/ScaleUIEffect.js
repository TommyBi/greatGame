"use strict";
cc._RF.push(module, '4730ewKYf5GuaUMZwsnLaTC', 'ScaleUIEffect');
// src/framework/ui/effect/ScaleUIEffect.ts

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
var ScaleUIEffect = /** @class */ (function (_super) {
    __extends(ScaleUIEffect, _super);
    function ScaleUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        node.scale = 0;
        node.runAction(cc.sequence(cc.scaleTo(time, 1, 1).easing(cc.easeBackOut()), cc.callFunc(function () { if (!!handler) {
            handler.call(node);
        } })));
    };
    return ScaleUIEffect;
}(BaseUIEffect_1.default));
exports.default = ScaleUIEffect;

cc._RF.pop();
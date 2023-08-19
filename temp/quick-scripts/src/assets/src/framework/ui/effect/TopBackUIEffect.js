"use strict";
cc._RF.push(module, '1c251I3Mj5G+qlPeX7akbDR', 'TopBackUIEffect');
// src/framework/ui/effect/TopBackUIEffect.ts

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
var TopBackUIEffect = /** @class */ (function (_super) {
    __extends(TopBackUIEffect, _super);
    function TopBackUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopBackUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        if (isOpen) {
            if (!!handler) {
                handler.call(node);
            }
        }
        else {
            var size_1 = cc.view.getVisibleSize();
            var action = cc.spawn(cc.fadeIn(time), cc.moveTo(time, 0, size_1.height).easing(cc.easeBackIn()));
            node.runAction(cc.sequence(action, cc.callFunc(function () { node.x = 0; node.y = size_1.height; if (!!handler) {
                handler.call(node);
            } })));
        }
    };
    return TopBackUIEffect;
}(BaseUIEffect_1.default));
exports.default = TopBackUIEffect;

cc._RF.pop();
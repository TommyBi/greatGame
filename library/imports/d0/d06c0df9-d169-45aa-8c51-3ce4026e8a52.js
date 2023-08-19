"use strict";
cc._RF.push(module, 'd06c0350WlFqoxRPOQCbopS', 'TopUIEffect');
// src/framework/ui/effect/TopUIEffect.ts

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
var TopUIEffect = /** @class */ (function (_super) {
    __extends(TopUIEffect, _super);
    function TopUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        if (isOpen) {
            if (!!handler) {
                handler.call(node);
            }
        }
        else {
            var size = cc.view.getVisibleSize();
            node.opacity = 0;
            node.y = size.height / 2;
            var action = cc.spawn(cc.fadeIn(time), cc.moveTo(time, 0, 0).easing(cc.easeBackOut()));
            node.runAction(cc.sequence(action, cc.callFunc(function () { node.x = 0; node.y = 0; if (!!handler) {
                handler.call(node);
            } })));
        }
    };
    return TopUIEffect;
}(BaseUIEffect_1.default));
exports.default = TopUIEffect;

cc._RF.pop();
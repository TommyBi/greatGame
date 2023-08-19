
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/ScaleUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9TY2FsZVVJRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdEQUEyQztBQUUzQztJQUEyQyxpQ0FBWTtJQUF2RDs7SUFTQSxDQUFDO0lBUEcsMkJBQUcsR0FBSCxVQUFJLElBQVksRUFBQyxJQUFXLEVBQUMsTUFBYyxFQUFDLE9BQWU7UUFFdkQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFNLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBQztZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6SSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUMEMsc0JBQVksR0FTdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vLi4vYmFzZS9IYW5kbGVyXCI7XG5pbXBvcnQgQmFzZVVJRWZmZWN0IGZyb20gXCIuLi9CYXNlVUlFZmZlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGVVSUVmZmVjdCBleHRlbmRzIEJhc2VVSUVmZmVjdHtcbiAgICBcbiAgICBydW4obm9kZTpjYy5Ob2RlLHRpbWU6bnVtYmVyLGlzT3Blbjpib29sZWFuLGhhbmRsZXI6SGFuZGxlcilcbiAgICB7XG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IHRoaXMudGltZTtcbiAgICAgICAgbm9kZS5zY2FsZSA9IDA7XG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8odGltZSwxLDEpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSxjYy5jYWxsRnVuYygoKT0+eyBpZighIWhhbmRsZXIpeyBoYW5kbGVyLmNhbGwobm9kZSk7IH0gfSkpKTtcbiAgICAgICAgXG4gICAgfVxufSJdfQ==
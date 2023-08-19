
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/FadeUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9GYWRlVUlFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBRzNDO0lBQTBDLGdDQUFZO0lBQXREOztJQWVBLENBQUM7SUFiRywwQkFBRyxHQUFILFVBQUksSUFBWSxFQUFDLElBQVcsRUFBQyxNQUFjLEVBQUMsT0FBZTtRQUV2RCxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBRyxNQUFNLEVBQ1Q7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBRSxjQUFNLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBQztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEg7YUFFRDtZQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUUsY0FBTSxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUM7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVHO0lBQ0wsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FmQSxBQWVDLENBZnlDLHNCQUFZLEdBZXJEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSUVmZmVjdCBmcm9tIFwiLi4vQmFzZVVJRWZmZWN0XCI7XG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vLi4vYmFzZS9IYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhZGVVSUVmZmVjdCBleHRlbmRzIEJhc2VVSUVmZmVjdHtcbiAgICBcbiAgICBydW4obm9kZTpjYy5Ob2RlLHRpbWU6bnVtYmVyLGlzT3Blbjpib29sZWFuLGhhbmRsZXI6SGFuZGxlcilcbiAgICB7XG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IHRoaXMudGltZTtcbiAgICAgICAgaWYoaXNPcGVuKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZVRvKHRpbWUsMjU1KSxjYy5jYWxsRnVuYyggKCk9PnsgaWYoISFoYW5kbGVyKXsgaGFuZGxlci5jYWxsKG5vZGUpOyB9IH0gKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKHRpbWUpLGNjLmNhbGxGdW5jKCAoKT0+eyBpZighIWhhbmRsZXIpeyBoYW5kbGVyLmNhbGwobm9kZSk7IH0gfSApKSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19
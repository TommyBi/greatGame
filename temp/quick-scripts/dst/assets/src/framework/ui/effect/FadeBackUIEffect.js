
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/FadeBackUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9GYWRlQmFja1VJRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDs7SUFPQSxDQUFDO0lBTEcsOEJBQUcsR0FBSCxVQUFJLElBQVksRUFBQyxJQUFXLEVBQUMsTUFBYyxFQUFDLE9BQWU7UUFFdkQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUUsY0FBTSxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUM7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQU5nQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQU9wQztJQUFELHVCQUFDO0NBUEQsQUFPQyxDQVA2QyxzQkFBWSxHQU96RDtrQkFQb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uLy4uL2Jhc2UvSGFuZGxlclwiO1xyXG5pbXBvcnQgQmFzZVVJRWZmZWN0IGZyb20gXCIuLi9CYXNlVUlFZmZlY3RcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFkZUJhY2tVSUVmZmVjdCBleHRlbmRzIEJhc2VVSUVmZmVjdHtcclxuICAgIFxyXG4gICAgcnVuKG5vZGU6Y2MuTm9kZSx0aW1lOm51bWJlcixpc09wZW46Ym9vbGVhbixoYW5kbGVyOkhhbmRsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGltZSA9IHRpbWUgfHwgdGhpcy50aW1lO1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVPdXQodGltZSksY2MuY2FsbEZ1bmMoICgpPT57IGlmKCEhaGFuZGxlcil7IGhhbmRsZXIuY2FsbChub2RlKTsgfSB9ICkpKTtcclxuICAgIH1cclxufVxyXG4iXX0=
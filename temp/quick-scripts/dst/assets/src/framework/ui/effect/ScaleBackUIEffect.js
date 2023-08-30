
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/ScaleBackUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b76cbWgUNlAy5uyyE3oYdy/', 'ScaleBackUIEffect');
// src/framework/ui/effect/ScaleBackUIEffect.ts

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
var ScaleBackUIEffect = /** @class */ (function (_super) {
    __extends(ScaleBackUIEffect, _super);
    function ScaleBackUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleBackUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        node.scale = 1;
        node.runAction(cc.sequence(cc.scaleTo(time, 0, 0).easing(cc.easeBackIn()), cc.callFunc(function () { if (!!handler) {
            handler.call(node);
        } })));
    };
    return ScaleBackUIEffect;
}(BaseUIEffect_1.default));
exports.default = ScaleBackUIEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9TY2FsZUJhY2tVSUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFHM0M7SUFBK0MscUNBQVk7SUFBM0Q7O0lBT0EsQ0FBQztJQU5HLCtCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsSUFBVyxFQUFDLE1BQWMsRUFBQyxPQUFlO1FBRXZELElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBTSxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUM7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUDhDLHNCQUFZLEdBTzFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSUVmZmVjdCBmcm9tIFwiLi4vQmFzZVVJRWZmZWN0XCI7XHJcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi8uLi9iYXNlL0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlQmFja1VJRWZmZWN0IGV4dGVuZHMgQmFzZVVJRWZmZWN0e1xyXG4gICAgcnVuKG5vZGU6Y2MuTm9kZSx0aW1lOm51bWJlcixpc09wZW46Ym9vbGVhbixoYW5kbGVyOkhhbmRsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGltZSA9IHRpbWUgfHwgdGhpcy50aW1lO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8odGltZSwwLDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpLGNjLmNhbGxGdW5jKCgpPT57IGlmKCEhaGFuZGxlcil7IGhhbmRsZXIuY2FsbChub2RlKTsgfSB9KSkpO1xyXG4gICAgfVxyXG59Il19
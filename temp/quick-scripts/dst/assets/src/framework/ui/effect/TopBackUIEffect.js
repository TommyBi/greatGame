
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/TopBackUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9Ub3BCYWNrVUlFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQTJDO0FBRTNDO0lBQTZDLG1DQUFZO0lBQXpEOztJQW9CQSxDQUFDO0lBbEJHLDZCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsSUFBVyxFQUFDLE1BQWMsRUFBQyxPQUFlO1FBRXZELElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFHLE1BQU0sRUFDVDtZQUNJLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFDWjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1NBQ0o7YUFFRDtZQUNJLElBQUksTUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUM7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xJO0lBRUwsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsQ0FwQjRDLHNCQUFZLEdBb0J4RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi8uLi9iYXNlL0hhbmRsZXJcIjtcbmltcG9ydCBCYXNlVUlFZmZlY3QgZnJvbSBcIi4uL0Jhc2VVSUVmZmVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BCYWNrVUlFZmZlY3QgZXh0ZW5kcyBCYXNlVUlFZmZlY3R7XG4gICAgXG4gICAgcnVuKG5vZGU6Y2MuTm9kZSx0aW1lOm51bWJlcixpc09wZW46Ym9vbGVhbixoYW5kbGVyOkhhbmRsZXIpXG4gICAge1xuICAgICAgICB0aW1lID0gdGltZSB8fCB0aGlzLnRpbWU7XG4gICAgICAgIGlmKGlzT3BlbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoISFoYW5kbGVyKVxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwobm9kZSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc3Bhd24oY2MuZmFkZUluKHRpbWUpLGNjLm1vdmVUbyh0aW1lLDAsc2l6ZS5oZWlnaHQpLmVhc2luZyhjYy5lYXNlQmFja0luKCkpKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbixjYy5jYWxsRnVuYygoKT0+eyBub2RlLnggPSAwO25vZGUueSA9IHNpemUuaGVpZ2h0OyBpZighIWhhbmRsZXIpeyBoYW5kbGVyLmNhbGwobm9kZSk7IH0gfSkpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59Il19
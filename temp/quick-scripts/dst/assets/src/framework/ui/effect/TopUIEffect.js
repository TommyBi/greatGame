
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/TopUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9Ub3BVSUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBMkM7QUFFM0M7SUFBeUMsK0JBQVk7SUFBckQ7O0lBc0JBLENBQUM7SUFwQkcseUJBQUcsR0FBSCxVQUFJLElBQVksRUFBQyxJQUFXLEVBQUMsTUFBYyxFQUFDLE9BQWU7UUFFdkQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUcsTUFBTSxFQUNUO1lBQ0ksSUFBRyxDQUFDLENBQUMsT0FBTyxFQUNaO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7U0FDSjthQUVEO1lBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBQztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEg7SUFFTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxDQXRCd0Msc0JBQVksR0FzQnBEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uLy4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IEJhc2VVSUVmZmVjdCBmcm9tIFwiLi4vQmFzZVVJRWZmZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFVJRWZmZWN0IGV4dGVuZHMgQmFzZVVJRWZmZWN0e1xuICAgIFxuICAgIHJ1bihub2RlOmNjLk5vZGUsdGltZTpudW1iZXIsaXNPcGVuOmJvb2xlYW4saGFuZGxlcjpIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgdGltZSA9IHRpbWUgfHwgdGhpcy50aW1lO1xuICAgICAgICBpZihpc09wZW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCEhaGFuZGxlcilcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKG5vZGUpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIG5vZGUueSA9IHNpemUuaGVpZ2h0LzI7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc3Bhd24oY2MuZmFkZUluKHRpbWUpLGNjLm1vdmVUbyh0aW1lLDAsMCkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbixjYy5jYWxsRnVuYygoKT0+eyBub2RlLnggPSAwO25vZGUueSA9IDA7IGlmKCEhaGFuZGxlcil7IGhhbmRsZXIuY2FsbChub2RlKTsgfSB9KSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iXX0=
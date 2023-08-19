
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/UIEffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26202sVGqBE0YykrPyeNJkW', 'UIEffectManager');
// src/framework/manager/UIEffectManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIEffectType = void 0;
var ScaleUIEffect_1 = require("../ui/effect/ScaleUIEffect");
var FadeUIEffect_1 = require("../ui/effect/FadeUIEffect");
var TopUIEffect_1 = require("../ui/effect/TopUIEffect");
var TopBackUIEffect_1 = require("../ui/effect/TopBackUIEffect");
var ScaleBackUIEffect_1 = require("../ui/effect/ScaleBackUIEffect");
var FadeBackUIEffect_1 = require("../ui/effect/FadeBackUIEffect");
var UIEffectType;
(function (UIEffectType) {
    UIEffectType["SCALE"] = "scale";
    UIEffectType["SCALEBACK"] = "scaleback";
    UIEffectType["FADE"] = "fade";
    UIEffectType["FADEBACK"] = "fadeback";
    UIEffectType["LEFT"] = "left";
    UIEffectType["RIGHT"] = "right";
    UIEffectType["TOP"] = "top";
    UIEffectType["BOTTOM"] = "bottom";
    UIEffectType["TOPBACK"] = "topback";
})(UIEffectType = exports.UIEffectType || (exports.UIEffectType = {}));
var UIEffectManager = /** @class */ (function () {
    function UIEffectManager() {
        this.effectObj = {};
        this.effectType = {};
        this.effectType[UIEffectType.SCALE] = ScaleUIEffect_1.default;
        this.effectType[UIEffectType.FADE] = FadeUIEffect_1.default;
        this.effectType[UIEffectType.TOP] = TopUIEffect_1.default;
        this.effectType[UIEffectType.TOPBACK] = TopBackUIEffect_1.default;
        this.effectType[UIEffectType.SCALEBACK] = ScaleBackUIEffect_1.default;
        this.effectType[UIEffectType.FADEBACK] = FadeBackUIEffect_1.default;
    }
    UIEffectManager.instance = function () {
        if (!this._instance) {
            this._instance = new UIEffectManager();
        }
        return this._instance;
    };
    UIEffectManager.prototype.effect = function (type, node, isOpen, handler, time) {
        if (time === void 0) { time = 0.3; }
        if (!this.effectObj.hasOwnProperty(type)) {
            this.effectObj[type] = new this.effectType[type]();
        }
        this.effectObj[type].run(node, time, isOpen, handler);
    };
    return UIEffectManager;
}());
exports.default = UIEffectManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDREQUF1RDtBQUN2RCwwREFBcUQ7QUFDckQsd0RBQW1EO0FBQ25ELGdFQUEyRDtBQUMzRCxvRUFBK0Q7QUFDL0Qsa0VBQTZEO0FBRTdELElBQVksWUFVWDtBQVZELFdBQVksWUFBWTtJQUN0QiwrQkFBZSxDQUFBO0lBQ2YsdUNBQXVCLENBQUE7SUFDdkIsNkJBQWEsQ0FBQTtJQUNiLHFDQUFxQixDQUFBO0lBQ3JCLDZCQUFhLENBQUE7SUFDYiwrQkFBZSxDQUFBO0lBQ2YsMkJBQVcsQ0FBQTtJQUNYLGlDQUFpQixDQUFBO0lBQ2pCLG1DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFWVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQVV2QjtBQUNEO0lBS0U7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyx1QkFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLHNCQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyx5QkFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLDJCQUFpQixDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLDBCQUFnQixDQUFDO0lBQzVELENBQUM7SUFFTSx3QkFBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sSUFBWSxFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsT0FBZ0IsRUFBRSxJQUFrQjtRQUFsQixxQkFBQSxFQUFBLFVBQWtCO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQUVELGtCQUFlLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi9iYXNlL0hhbmRsZXJcIjtcbmltcG9ydCBTY2FsZVVJRWZmZWN0IGZyb20gXCIuLi91aS9lZmZlY3QvU2NhbGVVSUVmZmVjdFwiO1xuaW1wb3J0IEZhZGVVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L0ZhZGVVSUVmZmVjdFwiO1xuaW1wb3J0IFRvcFVJRWZmZWN0IGZyb20gXCIuLi91aS9lZmZlY3QvVG9wVUlFZmZlY3RcIjtcbmltcG9ydCBUb3BCYWNrVUlFZmZlY3QgZnJvbSBcIi4uL3VpL2VmZmVjdC9Ub3BCYWNrVUlFZmZlY3RcIjtcbmltcG9ydCBTY2FsZUJhY2tVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L1NjYWxlQmFja1VJRWZmZWN0XCI7XG5pbXBvcnQgRmFkZUJhY2tVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L0ZhZGVCYWNrVUlFZmZlY3RcIjtcblxuZXhwb3J0IGVudW0gVUlFZmZlY3RUeXBlIHtcbiAgU0NBTEUgPSBcInNjYWxlXCIsXG4gIFNDQUxFQkFDSyA9IFwic2NhbGViYWNrXCIsXG4gIEZBREUgPSBcImZhZGVcIixcbiAgRkFERUJBQ0sgPSAnZmFkZWJhY2snLFxuICBMRUZUID0gXCJsZWZ0XCIsXG4gIFJJR0hUID0gXCJyaWdodFwiLFxuICBUT1AgPSBcInRvcFwiLFxuICBCT1RUT00gPSBcImJvdHRvbVwiLFxuICBUT1BCQUNLID0gXCJ0b3BiYWNrXCIsXG59XG5jbGFzcyBVSUVmZmVjdE1hbmFnZXIge1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFVJRWZmZWN0TWFuYWdlcjtcbiAgcHJpdmF0ZSBlZmZlY3RPYmo6IE9iamVjdDtcbiAgcHJpdmF0ZSBlZmZlY3RUeXBlOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZmZlY3RPYmogPSB7fTtcbiAgICB0aGlzLmVmZmVjdFR5cGUgPSB7fTtcbiAgICB0aGlzLmVmZmVjdFR5cGVbVUlFZmZlY3RUeXBlLlNDQUxFXSA9IFNjYWxlVUlFZmZlY3Q7XG4gICAgdGhpcy5lZmZlY3RUeXBlW1VJRWZmZWN0VHlwZS5GQURFXSA9IEZhZGVVSUVmZmVjdDtcbiAgICB0aGlzLmVmZmVjdFR5cGVbVUlFZmZlY3RUeXBlLlRPUF0gPSBUb3BVSUVmZmVjdDtcbiAgICB0aGlzLmVmZmVjdFR5cGVbVUlFZmZlY3RUeXBlLlRPUEJBQ0tdID0gVG9wQmFja1VJRWZmZWN0O1xuICAgIHRoaXMuZWZmZWN0VHlwZVtVSUVmZmVjdFR5cGUuU0NBTEVCQUNLXSA9IFNjYWxlQmFja1VJRWZmZWN0O1xuICAgIHRoaXMuZWZmZWN0VHlwZVtVSUVmZmVjdFR5cGUuRkFERUJBQ0tdID0gRmFkZUJhY2tVSUVmZmVjdDtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZSgpOiBVSUVmZmVjdE1hbmFnZXIge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFVJRWZmZWN0TWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBlZmZlY3QodHlwZTogc3RyaW5nLCBub2RlOiBjYy5Ob2RlLCBpc09wZW46IGJvb2xlYW4sIGhhbmRsZXI6IEhhbmRsZXIsIHRpbWU6IG51bWJlciA9IDAuMykge1xuICAgIGlmICghdGhpcy5lZmZlY3RPYmouaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgIHRoaXMuZWZmZWN0T2JqW3R5cGVdID0gbmV3IHRoaXMuZWZmZWN0VHlwZVt0eXBlXSgpO1xuICAgIH1cbiAgICB0aGlzLmVmZmVjdE9ialt0eXBlXS5ydW4obm9kZSwgdGltZSwgaXNPcGVuLCBoYW5kbGVyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSUVmZmVjdE1hbmFnZXIuaW5zdGFuY2UoKTtcbiJdfQ==
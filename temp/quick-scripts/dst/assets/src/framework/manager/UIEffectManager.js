
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDREQUF1RDtBQUN2RCwwREFBcUQ7QUFDckQsd0RBQW1EO0FBQ25ELGdFQUEyRDtBQUMzRCxvRUFBK0Q7QUFDL0Qsa0VBQTZEO0FBRTdELElBQVksWUFVWDtBQVZELFdBQVksWUFBWTtJQUNwQiwrQkFBZSxDQUFBO0lBQ2YsdUNBQXVCLENBQUE7SUFDdkIsNkJBQWEsQ0FBQTtJQUNiLHFDQUFxQixDQUFBO0lBQ3JCLDZCQUFhLENBQUE7SUFDYiwrQkFBZSxDQUFBO0lBQ2YsMkJBQVcsQ0FBQTtJQUNYLGlDQUFpQixDQUFBO0lBQ2pCLG1DQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFWVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQVV2QjtBQUNEO0lBS0k7UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyx1QkFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLHNCQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyx5QkFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLDJCQUFpQixDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLDBCQUFnQixDQUFDO0lBQzlELENBQUM7SUFFTSx3QkFBUSxHQUFmO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sSUFBVyxFQUFDLElBQVksRUFBQyxNQUFjLEVBQUMsT0FBZSxFQUFDLElBQWlCO1FBQWpCLHFCQUFBLEVBQUEsVUFBaUI7UUFFNUUsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUN2QztZQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBRUQsa0JBQWUsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xyXG5pbXBvcnQgU2NhbGVVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L1NjYWxlVUlFZmZlY3RcIjtcclxuaW1wb3J0IEZhZGVVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L0ZhZGVVSUVmZmVjdFwiO1xyXG5pbXBvcnQgVG9wVUlFZmZlY3QgZnJvbSBcIi4uL3VpL2VmZmVjdC9Ub3BVSUVmZmVjdFwiO1xyXG5pbXBvcnQgVG9wQmFja1VJRWZmZWN0IGZyb20gXCIuLi91aS9lZmZlY3QvVG9wQmFja1VJRWZmZWN0XCI7XHJcbmltcG9ydCBTY2FsZUJhY2tVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L1NjYWxlQmFja1VJRWZmZWN0XCI7XHJcbmltcG9ydCBGYWRlQmFja1VJRWZmZWN0IGZyb20gXCIuLi91aS9lZmZlY3QvRmFkZUJhY2tVSUVmZmVjdFwiO1xyXG5cclxuZXhwb3J0IGVudW0gVUlFZmZlY3RUeXBlIHtcclxuICAgIFNDQUxFID0gXCJzY2FsZVwiLFxyXG4gICAgU0NBTEVCQUNLID0gXCJzY2FsZWJhY2tcIixcclxuICAgIEZBREUgPSBcImZhZGVcIixcclxuICAgIEZBREVCQUNLID0gJ2ZhZGViYWNrJyxcclxuICAgIExFRlQgPSBcImxlZnRcIixcclxuICAgIFJJR0hUID0gXCJyaWdodFwiLFxyXG4gICAgVE9QID0gXCJ0b3BcIixcclxuICAgIEJPVFRPTSA9IFwiYm90dG9tXCIsXHJcbiAgICBUT1BCQUNLID0gXCJ0b3BiYWNrXCIsXHJcbn1cclxuY2xhc3MgVUlFZmZlY3RNYW5hZ2Vye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOlVJRWZmZWN0TWFuYWdlcjtcclxuICAgIHByaXZhdGUgZWZmZWN0T2JqOk9iamVjdDtcclxuICAgIHByaXZhdGUgZWZmZWN0VHlwZTpPYmplY3Q7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVmZmVjdE9iaiA9IHt9O1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHlwZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHlwZVtVSUVmZmVjdFR5cGUuU0NBTEVdID0gU2NhbGVVSUVmZmVjdDtcclxuICAgICAgICB0aGlzLmVmZmVjdFR5cGVbVUlFZmZlY3RUeXBlLkZBREVdID0gRmFkZVVJRWZmZWN0O1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHlwZVtVSUVmZmVjdFR5cGUuVE9QXSA9IFRvcFVJRWZmZWN0O1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHlwZVtVSUVmZmVjdFR5cGUuVE9QQkFDS10gPSBUb3BCYWNrVUlFZmZlY3Q7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUeXBlW1VJRWZmZWN0VHlwZS5TQ0FMRUJBQ0tdID0gU2NhbGVCYWNrVUlFZmZlY3Q7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUeXBlW1VJRWZmZWN0VHlwZS5GQURFQkFDS10gPSBGYWRlQmFja1VJRWZmZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpOlVJRWZmZWN0TWFuYWdlclxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVUlFZmZlY3RNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBlZmZlY3QodHlwZTpzdHJpbmcsbm9kZTpjYy5Ob2RlLGlzT3Blbjpib29sZWFuLGhhbmRsZXI6SGFuZGxlcix0aW1lOm51bWJlciA9IDAuMylcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5lZmZlY3RPYmouaGFzT3duUHJvcGVydHkodHlwZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdE9ialt0eXBlXSA9IG5ldyB0aGlzLmVmZmVjdFR5cGVbdHlwZV0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZmZlY3RPYmpbdHlwZV0ucnVuKG5vZGUsdGltZSxpc09wZW4saGFuZGxlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVJRWZmZWN0TWFuYWdlci5pbnN0YW5jZSgpO1xyXG4iXX0=
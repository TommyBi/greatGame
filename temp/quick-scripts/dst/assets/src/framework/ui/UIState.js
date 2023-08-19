
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/UIState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd52d3KUVu5NEKYy4s6U/Qeg', 'UIState');
// src/framework/ui/UIState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIState = exports.StateType = void 0;
var StateType;
(function (StateType) {
    StateType[StateType["close"] = 0] = "close";
    StateType[StateType["opening"] = 1] = "opening";
    StateType[StateType["open"] = 2] = "open"; //完全打开
})(StateType = exports.StateType || (exports.StateType = {}));
/**
 * ui状态
 */
var UIState = /** @class */ (function () {
    function UIState() {
        this.uinId = 0;
        this.uinId = UIState.StateID++;
    }
    UIState.prototype.setData = function (data) {
        this.uName = data.uname;
        this.openState = StateType.opening;
        this.isActive = true;
    };
    UIState.prototype.reset = function () {
        if (this.ui) {
            this.ui.close();
        }
        this.ui = null;
        this.uName = '';
        this.openState = StateType.close;
    };
    UIState.StateID = 0;
    return UIState;
}());
exports.UIState = UIState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL1VJU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBRWpCLDJDQUFLLENBQUE7SUFDTCwrQ0FBTyxDQUFBO0lBQ1AseUNBQUksQ0FBQSxDQUFHLE1BQU07QUFDakIsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCO0FBRUQ7O0dBRUc7QUFDSDtJQU9JO1FBSEEsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUtiLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCx5QkFBTyxHQUFQLFVBQVEsSUFBSTtRQUVSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFFSSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQXBCTSxlQUFPLEdBQVUsQ0FBQyxDQUFDO0lBcUI5QixjQUFDO0NBM0JELEFBMkJDLElBQUE7QUEzQlksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuL0Jhc2VQYW5lbFwiO1xuXG5leHBvcnQgZW51bSBTdGF0ZVR5cGVcbntcbiAgICBjbG9zZSwvL+WFs+mXreeKtuaAgVxuICAgIG9wZW5pbmcsLy/miZPlvIDkuK1cbiAgICBvcGVuICAgLy/lrozlhajmiZPlvIBcbn1cblxuLyoqXG4gKiB1aeeKtuaAgVxuICovXG5leHBvcnQgY2xhc3MgVUlTdGF0ZSB7XG4gICAgdU5hbWU6c3RyaW5nOy8vdWnlkI3np7BcbiAgICBvcGVuU3RhdGU6U3RhdGVUeXBlOy8v5omT5byA54q25oCBIDAg5YWz6ZetICAx5q2j5Zyo5omT5byA5LitKOWKoOi9veS4re+8jOaIluiAheWKqOeUu+S4rSkgICAgMuWujOWFqOaJk+W8gFxuICAgIGlzQWN0aXZlOmJvb2xlYW47Ly/lvZPliY3ov5nkuKrlr7nosaHmmK/lkKblj6/ku6Xkvb/nlKgg55So5LqO5a+56LGh5rGgXG4gICAgdWluSWQ6bnVtYmVyID0gMDtcbiAgICB1aTpCYXNlUGFuZWw7XG4gICAgc3RhdGljIFN0YXRlSUQ6bnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLnVpbklkID0gVUlTdGF0ZS5TdGF0ZUlEKys7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSlcbiAgICB7XG4gICAgICAgIHRoaXMudU5hbWUgPSBkYXRhLnVuYW1lO1xuICAgICAgICB0aGlzLm9wZW5TdGF0ZSA9IFN0YXRlVHlwZS5vcGVuaW5nO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNldCgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy51aSkge1xuICAgICAgICAgICAgdGhpcy51aS5jbG9zZSgpOyAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpID0gbnVsbDtcbiAgICAgICAgdGhpcy51TmFtZSA9ICcnO1xuICAgICAgICB0aGlzLm9wZW5TdGF0ZSA9IFN0YXRlVHlwZS5jbG9zZTtcbiAgICB9XG59Il19
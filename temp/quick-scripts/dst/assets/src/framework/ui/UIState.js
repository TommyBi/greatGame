
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL1VJU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBRWpCLDJDQUFLLENBQUE7SUFDTCwrQ0FBTyxDQUFBO0lBQ1AseUNBQUksQ0FBQSxDQUFHLE1BQU07QUFDakIsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCO0FBRUQ7O0dBRUc7QUFDSDtJQU9JO1FBSEEsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUtiLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCx5QkFBTyxHQUFQLFVBQVEsSUFBSTtRQUVSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFFSSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQXBCTSxlQUFPLEdBQVUsQ0FBQyxDQUFDO0lBcUI5QixjQUFDO0NBM0JELEFBMkJDLElBQUE7QUEzQlksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuL0Jhc2VQYW5lbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gU3RhdGVUeXBlXHJcbntcclxuICAgIGNsb3NlLC8v5YWz6Zet54q25oCBXHJcbiAgICBvcGVuaW5nLC8v5omT5byA5LitXHJcbiAgICBvcGVuICAgLy/lrozlhajmiZPlvIBcclxufVxyXG5cclxuLyoqXHJcbiAqIHVp54q25oCBXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVUlTdGF0ZSB7XHJcbiAgICB1TmFtZTpzdHJpbmc7Ly91aeWQjeensFxyXG4gICAgb3BlblN0YXRlOlN0YXRlVHlwZTsvL+aJk+W8gOeKtuaAgSAwIOWFs+mXrSAgMeato+WcqOaJk+W8gOS4rSjliqDovb3kuK3vvIzmiJbogIXliqjnlLvkuK0pICAgIDLlrozlhajmiZPlvIBcclxuICAgIGlzQWN0aXZlOmJvb2xlYW47Ly/lvZPliY3ov5nkuKrlr7nosaHmmK/lkKblj6/ku6Xkvb/nlKgg55So5LqO5a+56LGh5rGgXHJcbiAgICB1aW5JZDpudW1iZXIgPSAwO1xyXG4gICAgdWk6QmFzZVBhbmVsO1xyXG4gICAgc3RhdGljIFN0YXRlSUQ6bnVtYmVyID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnVpbklkID0gVUlTdGF0ZS5TdGF0ZUlEKys7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy51TmFtZSA9IGRhdGEudW5hbWU7XHJcbiAgICAgICAgdGhpcy5vcGVuU3RhdGUgPSBTdGF0ZVR5cGUub3BlbmluZztcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMudWkpIHtcclxuICAgICAgICAgICAgdGhpcy51aS5jbG9zZSgpOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51aSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51TmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMub3BlblN0YXRlID0gU3RhdGVUeXBlLmNsb3NlO1xyXG4gICAgfVxyXG59Il19
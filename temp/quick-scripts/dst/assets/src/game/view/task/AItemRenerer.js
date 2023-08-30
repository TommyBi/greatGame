
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/task/AItemRenerer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19303+m491CoJ92k/V2kUYM', 'AItemRenerer');
// src/game/view/task/AItemRenerer.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 单项渲染基类 T数据结构
 * @author slf
 *  */
var AItemRenderer = /** @class */ (function (_super) {
    __extends(AItemRenderer, _super);
    function AItemRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isClick = false;
        return _this;
    }
    Object.defineProperty(AItemRenderer.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (v) {
            this._index = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AItemRenderer.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (v) {
            this._data = v;
            this.dataChanged();
        },
        enumerable: false,
        configurable: true
    });
    /**数据发生变化 子类重写*/
    AItemRenderer.prototype.dataChanged = function () { };
    /**刷新数据 */
    AItemRenderer.prototype.refreshData = function () {
        this.dataChanged();
    };
    /**销毁 */
    AItemRenderer.prototype.onDestroy = function () {
        this._data = null;
    };
    /**
     * 设置点击回调
     * @param cb 回调函数
     * @param cbT 回调作用域
     */
    AItemRenderer.prototype.setTouchCallback = function (cb, cbT) {
        this.callback = cb;
        this.cbThis = cbT;
        if (this.node) {
            if (this.node.hasEventListener(cc.Node.EventType.TOUCH_END)) {
                this.node.off(cc.Node.EventType.TOUCH_END, this.onClickCallback, this);
            }
            this.node.on(cc.Node.EventType.TOUCH_END, this.onClickCallback, this);
        }
    };
    /**
     * 预制体点击回调 会携带data
     * @param e
     */
    AItemRenderer.prototype.onClickCallback = function (e) {
        this.callback && this.callback.call(this.cbThis, this.data);
    };
    __decorate([
        property({ displayName: "是否添加点击事件" })
    ], AItemRenderer.prototype, "isClick", void 0);
    AItemRenderer = __decorate([
        ccclass
    ], AItemRenderer);
    return AItemRenderer;
}(cc.Component));
exports.default = AItemRenderer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3Rhc2svQUl0ZW1SZW5lcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDOzs7TUFHTTtBQUVOO0lBQThDLGlDQUFZO0lBQTFEO1FBQUEscUVBMkRDO1FBekRHLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBeUQ3QixDQUFDO0lBbkRHLHNCQUFXLGdDQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFpQixDQUFNO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsK0JBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBZ0IsQ0FBTTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELGdCQUFnQjtJQUNOLG1DQUFXLEdBQXJCLGNBQWdDLENBQUM7SUFFakMsVUFBVTtJQUNILG1DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRO0lBQ0QsaUNBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHdDQUFnQixHQUF2QixVQUF3QixFQUFhLEVBQUUsR0FBUztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekU7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sdUNBQWUsR0FBekIsVUFBMEIsQ0FBVztRQUNqQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUM7a0RBQ2I7SUFGUixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMkRqQztJQUFELG9CQUFDO0NBM0RELEFBMkRDLENBM0Q2QyxFQUFFLENBQUMsU0FBUyxHQTJEekQ7a0JBM0RvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLyoqXHJcbiAqIOWNlemhuea4suafk+WfuuexuyBU5pWw5o2u57uT5p6EXHJcbiAqIEBhdXRob3Igc2xmXHJcbiAqICAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBSXRlbVJlbmRlcmVyPFQ+IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuaYr+WQpua3u+WKoOeCueWHu+S6i+S7tlwiIH0pXHJcbiAgICBpc0NsaWNrOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNhbGxiYWNrOiBGdW5jdGlvbjsgICAgICAgLy/lm57osIPlh73mlbBcclxuICAgIHByb3RlY3RlZCBjYlRoaXM6IGFueTsgICAgICAgICAgICAgIC8v5Zue6LCD5L2c55So5Z+fXHJcblxyXG4gICAgcHJpdmF0ZSBfaW5kZXg6IGFueTsvL+aVsOaNrue7k+aehFxyXG4gICAgcHVibGljIGdldCBpbmRleCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgaW5kZXgodjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5faW5kZXggPSB2O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZGF0YTogYW55Oy8v5pWw5o2u57uT5p6EXHJcbiAgICBwdWJsaWMgZ2V0IGRhdGEoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgZGF0YSh2OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gdjtcclxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u5Y+R55Sf5Y+Y5YyWIOWtkOexu+mHjeWGmSovXHJcbiAgICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWQoKTogdm9pZCB7IH1cclxuXHJcbiAgICAvKirliLfmlrDmlbDmja4gKi9cclxuICAgIHB1YmxpYyByZWZyZXNoRGF0YSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZSA5q+BICovXHJcbiAgICBwdWJsaWMgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u54K55Ye75Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCD5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0gY2JUIOWbnuiwg+S9nOeUqOWfn1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VG91Y2hDYWxsYmFjayhjYj86IEZ1bmN0aW9uLCBjYlQ/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2I7XHJcbiAgICAgICAgdGhpcy5jYlRoaXMgPSBjYlQ7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmhhc0V2ZW50TGlzdGVuZXIoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja0NhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tDYWxsYmFjaywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aKE5Yi25L2T54K55Ye75Zue6LCDIOS8muaQuuW4pmRhdGFcclxuICAgICAqIEBwYXJhbSBlIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25DbGlja0NhbGxiYWNrKGU6IGNjLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5jYlRoaXMsIHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/message/NResponer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f8f52wrXZEK4ncHSY2qLA5', 'NResponer');
// src/framework/message/NResponer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../tools/Utils");
var NResponser = /** @class */ (function () {
    function NResponser() {
        this.allHandlers = new Map();
    }
    NResponser.instance = function () {
        if (!this._instance) {
            this._instance = new NResponser();
        }
        return this._instance;
    };
    /**
     * 派发事件
     * @param type 类型
     * @param args 参数
     */
    NResponser.prototype.dispatch = function (type) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.allHandlers.forEach(function (value, key) {
            var targetEvents = value; //this.allHandlers.get(value);
            if (!!targetEvents) {
                for (var i = 0; i < targetEvents.length; i++) {
                    if (targetEvents[i].type === type) {
                        targetEvents[i].handler.call(args);
                        _this.checkOnceEvent(targetEvents, i);
                        break;
                    }
                }
            }
        });
    };
    /**
     * 添加事件监听
     * @param type 事件类型
     * @param handler 回调函数
     * @param target 监听绑定对象
     * @param isOnce 是否只侦听一次
     */
    NResponser.prototype.on = function (type, handler, target, isOnce) {
        if (isOnce === void 0) { isOnce = false; }
        // on(type: number | string, callBack: Function, target: any, isOnce: boolean = false) {
        if (!!target) {
            if (!this.allHandlers.has(target)) {
                this.allHandlers.set(target, []);
            }
            var arr = this.allHandlers.get(target);
            arr.push({ type: type, handler: handler, isOnce: isOnce });
        }
    };
    /**
     * 是否target在侦听某个事件
     * @param type
     * @param target
     */
    NResponser.prototype.has = function (type, target) {
        if (!!target) {
            if (this.allHandlers.has(target)) {
                var arr = this.allHandlers.get(target);
                for (var index = 0; index < arr.length; index++) {
                    var element = arr[index];
                    if (element.type === type) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    /**
     * 移除侦听
     * @param type
     * @param handler
     * @param target
     * @param isRelease
     */
    NResponser.prototype.off = function (type, handler, target, isRelease) {
        if (isRelease === void 0) { isRelease = false; }
        if (!!target) {
            var targetEvents = this.allHandlers.get(target);
            if (!!targetEvents) {
                for (var i = 0; i < targetEvents.length; i++) {
                    if (targetEvents[i].type === type && targetEvents[i].handler.equal(handler)) {
                        if (isRelease) {
                            targetEvents[i].handler.release();
                        }
                        Utils_1.default.arrayRemove(targetEvents, i, 1);
                        break;
                    }
                }
            }
        }
    };
    /**
     * 移除目标身上全部侦听
     * @param target
     * @param isRelease
     */
    NResponser.prototype.targetOff = function (target, isRelease) {
        if (!!target) {
            if (this.allHandlers.has(target)) {
                if (!!isRelease) {
                    var arr = this.allHandlers.get(target);
                    if (!!arr) {
                        for (var index = 0; index < arr.length; index++) {
                            arr[index].handler.release();
                        }
                    }
                }
                this.allHandlers.delete(target);
            }
        }
    };
    /**
     * 检查一次性事件
     * @param arr
     * @param index
     */
    NResponser.prototype.checkOnceEvent = function (arr, index) {
        var data = arr[index];
        if (data.isOnce) {
            Utils_1.default.arrayRemove(arr, index);
        }
    };
    return NResponser;
}());
;
exports.default = NResponser.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21lc3NhZ2UvTlJlc3BvbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBT25DO0lBQUE7UUFDWSxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUErSHBDLENBQUM7SUEzSGlCLG1CQUFRLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkJBQVEsR0FBUixVQUFTLElBQXFCO1FBQTlCLGlCQWNDO1FBZCtCLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDaEMsSUFBSSxZQUFZLEdBQTBCLEtBQUssQ0FBQyxDQUFBLDhCQUE4QjtZQUM5RSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO3dCQUMvQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLE1BQU07cUJBQ1Q7aUJBQ0o7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNI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QUssR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOzRCQUM3QyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3lCQUNoQztxQkFDSjtpQkFDSjtnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQztTQUVKO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxtQ0FBYyxHQUF0QixVQUF1QixHQUFHLEVBQUUsS0FBSztRQUM3QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsZUFBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWhJQSxBQWdJQyxJQUFBO0FBQUEsQ0FBQztBQUNGLGtCQUFlLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdG9vbHMvVXRpbHNcIjtcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi9iYXNlL0hhbmRsZXJcIjtcbmV4cG9ydCBpbnRlcmZhY2UgTlJlc3BvbnNlckRhdGEge1xuICAgIHR5cGU6IG51bWJlciB8IHN0cmluZyxcbiAgICBoYW5kbGVyOiBIYW5kbGVyXG4gICAgaXNPbmNlOiBib29sZWFuLFxufVxuY2xhc3MgTlJlc3BvbnNlciB7XG4gICAgcHJpdmF0ZSBhbGxIYW5kbGVycyA9IG5ldyBNYXAoKTtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTlJlc3BvbnNlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogTlJlc3BvbnNlciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5SZXNwb25zZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rS+5Y+R5LqL5Lu2XG4gICAgICogQHBhcmFtIHR5cGUg57G75Z6LXG4gICAgICogQHBhcmFtIGFyZ3Mg5Y+C5pWwXG4gICAgICovXG4gICAgZGlzcGF0Y2godHlwZTogbnVtYmVyIHwgc3RyaW5nLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuYWxsSGFuZGxlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldEV2ZW50czogQXJyYXk8TlJlc3BvbnNlckRhdGE+ID0gdmFsdWU7Ly90aGlzLmFsbEhhbmRsZXJzLmdldCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoISF0YXJnZXRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldEV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RXZlbnRzW2ldLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50c1tpXS5oYW5kbGVyLmNhbGwoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrT25jZUV2ZW50KHRhcmdldEV2ZW50cywgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS6i+S7tuebkeWQrFxuICAgICAqIEBwYXJhbSB0eXBlIOS6i+S7tuexu+Wei1xuICAgICAqIEBwYXJhbSBoYW5kbGVyIOWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSB0YXJnZXQg55uR5ZCs57uR5a6a5a+56LGhXG4gICAgICogQHBhcmFtIGlzT25jZSDmmK/lkKblj6rkvqblkKzkuIDmrKFcbiAgICAgKi9cbiAgICBvbih0eXBlOiBudW1iZXIgfCBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIsIHRhcmdldDogYW55LCBpc09uY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICAvLyBvbih0eXBlOiBudW1iZXIgfCBzdHJpbmcsIGNhbGxCYWNrOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnksIGlzT25jZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghIXRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbEhhbmRsZXJzLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxIYW5kbGVycy5zZXQodGFyZ2V0LCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5hbGxIYW5kbGVycy5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGFyci5wdXNoKHsgdHlwZTogdHlwZSwgaGFuZGxlcjogaGFuZGxlciwgaXNPbmNlOiBpc09uY2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKZ0YXJnZXTlnKjkvqblkKzmn5DkuKrkuovku7ZcbiAgICAgKiBAcGFyYW0gdHlwZSBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgICAqL1xuICAgIGhhcyh0eXBlOiBudW1iZXIgfCBzdHJpbmcsIHRhcmdldDogYW55KSB7XG4gICAgICAgIGlmICghIXRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsSGFuZGxlcnMuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5hbGxIYW5kbGVycy5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOS+puWQrFxuICAgICAqIEBwYXJhbSB0eXBlIFxuICAgICAqIEBwYXJhbSBoYW5kbGVyIFxuICAgICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgICogQHBhcmFtIGlzUmVsZWFzZSBcbiAgICAgKi9cbiAgICBvZmYodHlwZTogbnVtYmVyIHwgc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCB0YXJnZXQ6IGFueSwgaXNSZWxlYXNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCEhdGFyZ2V0KSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0RXZlbnRzOiBBcnJheTxOUmVzcG9uc2VyRGF0YT4gPSB0aGlzLmFsbEhhbmRsZXJzLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCEhdGFyZ2V0RXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEV2ZW50c1tpXS50eXBlID09PSB0eXBlICYmIHRhcmdldEV2ZW50c1tpXS5oYW5kbGVyLmVxdWFsKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZWxlYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnRzW2ldLmhhbmRsZXIucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuYXJyYXlSZW1vdmUodGFyZ2V0RXZlbnRzLCBpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk55uu5qCH6Lqr5LiK5YWo6YOo5L6m5ZCsXG4gICAgICogQHBhcmFtIHRhcmdldCBcbiAgICAgKiBAcGFyYW0gaXNSZWxlYXNlIFxuICAgICAqL1xuICAgIHRhcmdldE9mZih0YXJnZXQ6IGFueSwgaXNSZWxlYXNlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghIXRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsSGFuZGxlcnMuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISFpc1JlbGVhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuYWxsSGFuZGxlcnMuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIWFycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbaW5kZXhdLmhhbmRsZXIucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWxsSGFuZGxlcnMuZGVsZXRlKHRhcmdldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOajgOafpeS4gOasoeaAp+S6i+S7tlxuICAgICAqIEBwYXJhbSBhcnIgXG4gICAgICogQHBhcmFtIGluZGV4IFxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tPbmNlRXZlbnQoYXJyLCBpbmRleCkge1xuICAgICAgICBsZXQgZGF0YSA9IGFycltpbmRleF07XG4gICAgICAgIGlmIChkYXRhLmlzT25jZSkge1xuICAgICAgICAgICAgVXRpbHMuYXJyYXlSZW1vdmUoYXJyLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTlJlc3BvbnNlci5pbnN0YW5jZSgpOyJdfQ==
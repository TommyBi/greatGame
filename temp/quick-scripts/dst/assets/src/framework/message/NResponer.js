
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21lc3NhZ2UvTlJlc3BvbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBT25DO0lBQUE7UUFDWSxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUErSHBDLENBQUM7SUEzSGlCLG1CQUFRLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkJBQVEsR0FBUixVQUFTLElBQXFCO1FBQTlCLGlCQWNDO1FBZCtCLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDaEMsSUFBSSxZQUFZLEdBQTBCLEtBQUssQ0FBQyxDQUFBLDhCQUE4QjtZQUM5RSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO3dCQUMvQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLE1BQU07cUJBQ1Q7aUJBQ0o7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNI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QUssR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOzRCQUM3QyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3lCQUNoQztxQkFDSjtpQkFDSjtnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQztTQUVKO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxtQ0FBYyxHQUF0QixVQUF1QixHQUFHLEVBQUUsS0FBSztRQUM3QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsZUFBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWhJQSxBQWdJQyxJQUFBO0FBQUEsQ0FBQztBQUNGLGtCQUFlLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdG9vbHMvVXRpbHNcIjtcclxuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIE5SZXNwb25zZXJEYXRhIHtcclxuICAgIHR5cGU6IG51bWJlciB8IHN0cmluZyxcclxuICAgIGhhbmRsZXI6IEhhbmRsZXJcclxuICAgIGlzT25jZTogYm9vbGVhbixcclxufVxyXG5jbGFzcyBOUmVzcG9uc2VyIHtcclxuICAgIHByaXZhdGUgYWxsSGFuZGxlcnMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBOUmVzcG9uc2VyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogTlJlc3BvbnNlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBOUmVzcG9uc2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa0vuWPkeS6i+S7tlxyXG4gICAgICogQHBhcmFtIHR5cGUg57G75Z6LXHJcbiAgICAgKiBAcGFyYW0gYXJncyDlj4LmlbBcclxuICAgICAqL1xyXG4gICAgZGlzcGF0Y2godHlwZTogbnVtYmVyIHwgc3RyaW5nLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5hbGxIYW5kbGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRFdmVudHM6IEFycmF5PE5SZXNwb25zZXJEYXRhPiA9IHZhbHVlOy8vdGhpcy5hbGxIYW5kbGVycy5nZXQodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoISF0YXJnZXRFdmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0RXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEV2ZW50c1tpXS50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50c1tpXS5oYW5kbGVyLmNhbGwoYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tPbmNlRXZlbnQodGFyZ2V0RXZlbnRzLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDkuovku7bnm5HlkKxcclxuICAgICAqIEBwYXJhbSB0eXBlIOS6i+S7tuexu+Wei1xyXG4gICAgICogQHBhcmFtIGhhbmRsZXIg5Zue6LCD5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOebkeWQrOe7keWumuWvueixoVxyXG4gICAgICogQHBhcmFtIGlzT25jZSDmmK/lkKblj6rkvqblkKzkuIDmrKFcclxuICAgICAqL1xyXG4gICAgb24odHlwZTogbnVtYmVyIHwgc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCB0YXJnZXQ6IGFueSwgaXNPbmNlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAvLyBvbih0eXBlOiBudW1iZXIgfCBzdHJpbmcsIGNhbGxCYWNrOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnksIGlzT25jZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKCEhdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5hbGxIYW5kbGVycy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxIYW5kbGVycy5zZXQodGFyZ2V0LCBbXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuYWxsSGFuZGxlcnMuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgIGFyci5wdXNoKHsgdHlwZTogdHlwZSwgaGFuZGxlcjogaGFuZGxlciwgaXNPbmNlOiBpc09uY2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCmdGFyZ2V05Zyo5L6m5ZCs5p+Q5Liq5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKi9cclxuICAgIGhhcyh0eXBlOiBudW1iZXIgfCBzdHJpbmcsIHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgaWYgKCEhdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbEhhbmRsZXJzLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5hbGxIYW5kbGVycy5nZXQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycltpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5L6m5ZCsXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAqIEBwYXJhbSBoYW5kbGVyIFxyXG4gICAgICogQHBhcmFtIHRhcmdldCBcclxuICAgICAqIEBwYXJhbSBpc1JlbGVhc2UgXHJcbiAgICAgKi9cclxuICAgIG9mZih0eXBlOiBudW1iZXIgfCBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIsIHRhcmdldDogYW55LCBpc1JlbGVhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICghIXRhcmdldCkge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0RXZlbnRzOiBBcnJheTxOUmVzcG9uc2VyRGF0YT4gPSB0aGlzLmFsbEhhbmRsZXJzLmdldCh0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoISF0YXJnZXRFdmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0RXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEV2ZW50c1tpXS50eXBlID09PSB0eXBlICYmIHRhcmdldEV2ZW50c1tpXS5oYW5kbGVyLmVxdWFsKGhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1JlbGVhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50c1tpXS5oYW5kbGVyLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5hcnJheVJlbW92ZSh0YXJnZXRFdmVudHMsIGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTnm67moIfouqvkuIrlhajpg6jkvqblkKxcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKiBAcGFyYW0gaXNSZWxlYXNlIFxyXG4gICAgICovXHJcbiAgICB0YXJnZXRPZmYodGFyZ2V0OiBhbnksIGlzUmVsZWFzZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghIXRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxIYW5kbGVycy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhaXNSZWxlYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuYWxsSGFuZGxlcnMuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEhYXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbaW5kZXhdLmhhbmRsZXIucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxIYW5kbGVycy5kZWxldGUodGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4Dmn6XkuIDmrKHmgKfkuovku7ZcclxuICAgICAqIEBwYXJhbSBhcnIgXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tPbmNlRXZlbnQoYXJyLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gYXJyW2luZGV4XTtcclxuICAgICAgICBpZiAoZGF0YS5pc09uY2UpIHtcclxuICAgICAgICAgICAgVXRpbHMuYXJyYXlSZW1vdmUoYXJyLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOUmVzcG9uc2VyLmluc3RhbmNlKCk7Il19
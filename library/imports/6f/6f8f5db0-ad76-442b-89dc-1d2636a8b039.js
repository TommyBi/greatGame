"use strict";
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
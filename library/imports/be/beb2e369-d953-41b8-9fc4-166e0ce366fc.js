"use strict";
cc._RF.push(module, 'beb2eNp2VNBuJ/EFm4M42b8', 'Handler');
// src/framework/base/Handler.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = /** @class */ (function () {
    function Handler(fun, host, once) {
        if (once === void 0) { once = true; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this.active = true;
        this.callBack = fun;
        this.host = host;
        this.args = args;
        this.once = once;
        this.id = Handler.index + 1;
    }
    /**
     * 创建回调句柄
     * @param fun 回调函数
     * @param host 函数指向
     * @param isOnce 是否调用一次后释放
     */
    Handler.create = function (fun, host, isOnce) {
        if (isOnce === void 0) { isOnce = true; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        var len = Handler.handler_cache.length;
        for (var i = 0; i < len; i++) {
            if (!Handler.handler_cache[i].active) {
                Handler.handler_cache[i].active = true;
                Handler.handler_cache[i].callBack = fun;
                Handler.handler_cache[i].host = host;
                if (!host.hasOwnProperty('hostUuid')) {
                    host.hostUuid = Handler.hostUUID++;
                }
                if (!!args) {
                    Handler.handler_cache[i].args = args;
                }
                else {
                    !!Handler.handler_cache[i].args ? Handler.handler_cache[i].args.length = 0 : Handler.handler_cache[i].args = [];
                }
                Handler.handler_cache[i].once = isOnce;
                return Handler.handler_cache[i];
            }
        }
        var handler = new (Handler.bind.apply(Handler, __spreadArrays([void 0, fun, host, isOnce], args)))();
        if (!host.hasOwnProperty('hostUuid')) {
            host.hostUuid = Handler.hostUUID++;
        }
        Handler.handler_cache.push(handler);
        return handler;
    };
    /**
     * 释放当前host上的所有handler
     * @param host
     */
    Handler.releaseByHost = function (host) {
        if (!!host) {
            var len = Handler.handler_cache.length;
            for (var i = 0; i < len; i++) {
                if (!!Handler.handler_cache[i].host) {
                    if (host.hostUuid === Handler.handler_cache[i].host.hostUuid) {
                        Handler.handler_cache[i].active = false;
                        Handler.handler_cache[i].host = null;
                        Handler.handler_cache[i].callBack = null;
                    }
                }
            }
        }
    };
    /**
     * 是否host 当前正在拥有这个handler
     * @param host
     */
    Handler.prototype.isHostOwn = function (host) {
        if (!!host && host.hasOwnProperty('hostUuid')) {
            if (!!this.host) {
                if (this.host.hostUuid === host.hostUuid) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * 调用handler
     * @param args
     */
    Handler.prototype.call = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!!this.host) {
            for (var i = 0; i < this.args.length; i++) {
                args.push(this.args[i]);
            }
            var result = this.callBack.apply(this.host, args);
            if (this.once) {
                this.active = false;
                this.callBack = null;
                this.host = null;
            }
            return result;
        }
        else {
            cc.error("handler 调用时 this 对象不存在:" + this.callBack);
        }
    };
    Handler.prototype.equal = function (handler) {
        if (!!handler && this.id === handler.id) {
            return true;
        }
        return false;
    };
    /**
     * 释放当前handler
     */
    Handler.prototype.release = function () {
        this.host = null;
        this.callBack = null;
        this.args.length = 0;
        this.active = false;
    };
    Handler.index = 0;
    Handler.handler_cache = [];
    Handler.hostUUID = 1000;
    return Handler;
}());
exports.default = Handler;

cc._RF.pop();
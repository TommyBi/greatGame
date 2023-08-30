
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/base/Handler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2Jhc2UvSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQVlJLGlCQUFvQixHQUFZLEVBQUMsSUFBUSxFQUFDLElBQW1CO1FBQW5CLHFCQUFBLEVBQUEsV0FBbUI7UUFBQyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQVA3RCxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBUTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksY0FBTSxHQUFiLFVBQWMsR0FBWSxFQUFDLElBQVEsRUFBQyxNQUFvQjtRQUFwQix1QkFBQSxFQUFBLGFBQW9CO1FBQUMsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDNUQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFDdEI7WUFDSSxJQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ25DO2dCQUNJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdkMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcs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SUFoSWMsYUFBSyxHQUFVLENBQUMsQ0FBQztJQUNqQixxQkFBYSxHQUFrQixFQUFFLENBQUM7SUFDbEMsZ0JBQVEsR0FBVSxJQUFJLENBQUM7SUErSDFDLGNBQUM7Q0F6SUQsQUF5SUMsSUFBQTtrQkF6SW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlclxyXG57XHJcbiAgICBwcml2YXRlIGNhbGxCYWNrOkZ1bmN0aW9uO1xyXG4gICAgcHJpdmF0ZSBob3N0OmFueTtcclxuICAgIHByaXZhdGUgYXJnczpBcnJheTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBhY3RpdmU6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlkOm51bWJlcjtcclxuICAgIHByaXZhdGUgb25jZTpib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5kZXg6bnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGljIGhhbmRsZXJfY2FjaGU6QXJyYXk8SGFuZGxlcj4gPSBbXTtcclxuICAgIHByaXZhdGUgc3RhdGljIGhvc3RVVUlEOm51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihmdW46RnVuY3Rpb24saG9zdDphbnksb25jZTpib29sZWFuID0gdHJ1ZSwuLi5hcmdzKXtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gZnVuO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgICAgICB0aGlzLm9uY2UgPSBvbmNlO1xyXG4gICAgICAgIHRoaXMuaWQgPSBIYW5kbGVyLmluZGV4ICsgMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuWbnuiwg+WPpeafhFxyXG4gICAgICogQHBhcmFtIGZ1biDlm57osIPlh73mlbBcclxuICAgICAqIEBwYXJhbSBob3N0IOWHveaVsOaMh+WQkVxyXG4gICAgICogQHBhcmFtIGlzT25jZSDmmK/lkKbosIPnlKjkuIDmrKHlkI7ph4rmlL5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZShmdW46RnVuY3Rpb24saG9zdDphbnksaXNPbmNlOmJvb2xlYW49IHRydWUsLi4uYXJncyl7XHJcbiAgICAgICAgbGV0IGxlbiA9IEhhbmRsZXIuaGFuZGxlcl9jYWNoZS5sZW5ndGg7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgbGVuOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCFIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5jYWxsQmFjayA9IGZ1bjtcclxuICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uaG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFob3N0Lmhhc093blByb3BlcnR5KCdob3N0VXVpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3QuaG9zdFV1aWQgPSBIYW5kbGVyLmhvc3RVVUlEKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCEhYXJncylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5hcmdzID0gYXJncztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgISFIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYXJncyA/IEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5hcmdzLmxlbmd0aCA9IDAgOiBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYXJncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0ub25jZSA9IGlzT25jZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gbmV3IEhhbmRsZXIoZnVuLGhvc3QsaXNPbmNlLC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAoIWhvc3QuaGFzT3duUHJvcGVydHkoJ2hvc3RVdWlkJykpIHtcclxuICAgICAgICAgICAgICAgIGhvc3QuaG9zdFV1aWQgPSBIYW5kbGVyLmhvc3RVVUlEKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSGFuZGxlci5oYW5kbGVyX2NhY2hlLnB1c2goaGFuZGxlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDph4rmlL7lvZPliY1ob3N05LiK55qE5omA5pyJaGFuZGxlclxyXG4gICAgICogQHBhcmFtIGhvc3QgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZWxlYXNlQnlIb3N0KGhvc3Q6YW55KXtcclxuICAgICAgICBpZiAoISFob3N0KSB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBIYW5kbGVyLmhhbmRsZXJfY2FjaGUubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmhvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaG9zdC5ob3N0VXVpZCA9PT0gSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmhvc3QuaG9zdFV1aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uaG9zdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5jYWxsQmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKZob3N0IOW9k+WJjeato+WcqOaLpeaciei/meS4qmhhbmRsZXJcclxuICAgICAqIEBwYXJhbSBob3N0IFxyXG4gICAgICovXHJcbiAgICBpc0hvc3RPd24oaG9zdClcclxuICAgIHtcclxuICAgICAgICBpZiAoISFob3N0ICYmIGhvc3QuaGFzT3duUHJvcGVydHkoJ2hvc3RVdWlkJykpIHtcclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5ob3N0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ob3N0Lmhvc3RVdWlkID09PSBob3N0Lmhvc3RVdWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LCD55SoaGFuZGxlclxyXG4gICAgICogQHBhcmFtIGFyZ3MgXHJcbiAgICAgKi9cclxuICAgIGNhbGwoLi4uYXJncylcclxuICAgIHtcclxuICAgICAgICBpZighIXRoaXMuaG9zdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5hcmdzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5jYWxsQmFjay5hcHBseSh0aGlzLmhvc3QsYXJncyk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub25jZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcImhhbmRsZXIg6LCD55So5pe2IHRoaXMg5a+56LGh5LiN5a2Y5ZyoOlwiK3RoaXMuY2FsbEJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZXF1YWwoaGFuZGxlcjpIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghIWhhbmRsZXIgJiYgdGhpcy5pZCA9PT0gaGFuZGxlci5pZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeK5pS+5b2T5YmNaGFuZGxlclxyXG4gICAgICovXHJcbiAgICByZWxlYXNlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXJncy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXX0=
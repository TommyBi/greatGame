
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2Jhc2UvSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQVlJLGlCQUFvQixHQUFZLEVBQUMsSUFBUSxFQUFDLElBQW1CO1FBQW5CLHFCQUFBLEVBQUEsV0FBbUI7UUFBQyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQVA3RCxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBUTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksY0FBTSxHQUFiLFVBQWMsR0FBWSxFQUFDLElBQVEsRUFBQyxNQUFvQjtRQUFwQix1QkFBQSxFQUFBLGFBQW9CO1FBQUMsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDNUQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFDdEI7WUFDSSxJQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ25DO2dCQUNJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdkMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcs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SUFoSWMsYUFBSyxHQUFVLENBQUMsQ0FBQztJQUNqQixxQkFBYSxHQUFrQixFQUFFLENBQUM7SUFDbEMsZ0JBQVEsR0FBVSxJQUFJLENBQUM7SUErSDFDLGNBQUM7Q0F6SUQsQUF5SUMsSUFBQTtrQkF6SW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZXJcbntcbiAgICBwcml2YXRlIGNhbGxCYWNrOkZ1bmN0aW9uO1xuICAgIHByaXZhdGUgaG9zdDphbnk7XG4gICAgcHJpdmF0ZSBhcmdzOkFycmF5PGFueT47XG4gICAgcHJpdmF0ZSBhY3RpdmU6Ym9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBpZDpudW1iZXI7XG4gICAgcHJpdmF0ZSBvbmNlOmJvb2xlYW47XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5kZXg6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHN0YXRpYyBoYW5kbGVyX2NhY2hlOkFycmF5PEhhbmRsZXI+ID0gW107XG4gICAgcHJpdmF0ZSBzdGF0aWMgaG9zdFVVSUQ6bnVtYmVyID0gMTAwMDtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZnVuOkZ1bmN0aW9uLGhvc3Q6YW55LG9uY2U6Ym9vbGVhbiA9IHRydWUsLi4uYXJncyl7XG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBmdW47XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMub25jZSA9IG9uY2U7XG4gICAgICAgIHRoaXMuaWQgPSBIYW5kbGVyLmluZGV4ICsgMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rlm57osIPlj6Xmn4RcbiAgICAgKiBAcGFyYW0gZnVuIOWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSBob3N0IOWHveaVsOaMh+WQkVxuICAgICAqIEBwYXJhbSBpc09uY2Ug5piv5ZCm6LCD55So5LiA5qyh5ZCO6YeK5pS+XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZShmdW46RnVuY3Rpb24saG9zdDphbnksaXNPbmNlOmJvb2xlYW49IHRydWUsLi4uYXJncyl7XG4gICAgICAgIGxldCBsZW4gPSBIYW5kbGVyLmhhbmRsZXJfY2FjaGUubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBsZW47IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZighSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uY2FsbEJhY2sgPSBmdW47XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5ob3N0ID0gaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFob3N0Lmhhc093blByb3BlcnR5KCdob3N0VXVpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0Lmhvc3RVdWlkID0gSGFuZGxlci5ob3N0VVVJRCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKCEhYXJncylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmFyZ3MgPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgISFIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYXJncyA/IEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5hcmdzLmxlbmd0aCA9IDAgOiBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5vbmNlID0gaXNPbmNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gbmV3IEhhbmRsZXIoZnVuLGhvc3QsaXNPbmNlLC4uLmFyZ3MpO1xuICAgICAgICAgICAgaWYgKCFob3N0Lmhhc093blByb3BlcnR5KCdob3N0VXVpZCcpKSB7XG4gICAgICAgICAgICAgICAgaG9zdC5ob3N0VXVpZCA9IEhhbmRsZXIuaG9zdFVVSUQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOmHiuaUvuW9k+WJjWhvc3TkuIrnmoTmiYDmnIloYW5kbGVyXG4gICAgICogQHBhcmFtIGhvc3QgXG4gICAgICovXG4gICAgc3RhdGljIHJlbGVhc2VCeUhvc3QoaG9zdDphbnkpe1xuICAgICAgICBpZiAoISFob3N0KSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gSGFuZGxlci5oYW5kbGVyX2NhY2hlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3QuaG9zdFV1aWQgPT09IEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5ob3N0Lmhvc3RVdWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uaG9zdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uY2FsbEJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5piv5ZCmaG9zdCDlvZPliY3mraPlnKjmi6XmnInov5nkuKpoYW5kbGVyXG4gICAgICogQHBhcmFtIGhvc3QgXG4gICAgICovXG4gICAgaXNIb3N0T3duKGhvc3QpXG4gICAge1xuICAgICAgICBpZiAoISFob3N0ICYmIGhvc3QuaGFzT3duUHJvcGVydHkoJ2hvc3RVdWlkJykpIHtcbiAgICAgICAgICAgIGlmICghIXRoaXMuaG9zdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhvc3QuaG9zdFV1aWQgPT09IGhvc3QuaG9zdFV1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDosIPnlKhoYW5kbGVyXG4gICAgICogQHBhcmFtIGFyZ3MgXG4gICAgICovXG4gICAgY2FsbCguLi5hcmdzKVxuICAgIHtcbiAgICAgICAgaWYoISF0aGlzLmhvc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuYXJnc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5jYWxsQmFjay5hcHBseSh0aGlzLmhvc3QsYXJncyk7XG4gICAgICAgICAgICBpZih0aGlzLm9uY2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiaGFuZGxlciDosIPnlKjml7YgdGhpcyDlr7nosaHkuI3lrZjlnKg6XCIrdGhpcy5jYWxsQmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXF1YWwoaGFuZGxlcjpIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgaWYgKCEhaGFuZGxlciAmJiB0aGlzLmlkID09PSBoYW5kbGVyLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeK5pS+5b2T5YmNaGFuZGxlclxuICAgICAqL1xuICAgIHJlbGVhc2UoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ob3N0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuYXJncy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn0iXX0=
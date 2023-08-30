"use strict";
cc._RF.push(module, '93247Ots3NPOK1jdeqqFIkL', 'MessageCenter');
// src/game/manager/MessageCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageCenter = /** @class */ (function () {
    function MessageCenter(type) {
        if (type === void 0) { type = null; }
        var key = type;
        this._TAG = '[' + key + '/MessageCenter]';
        this.events = new Map();
        this.isRunning = false;
        this.launch();
    }
    MessageCenter.prototype.getScopeName = function (scope) {
        if (scope === void 0) { scope = null; }
        try {
            if (scope) {
                return (scope._TAG ? scope._TAG : (scope.name ? scope.name : "unknow")).toString();
            }
            else {
                return "unknow";
            }
        }
        catch (e) {
            return "unknow";
        }
    };
    MessageCenter.prototype.addListener = function (eventName, handler, scope, isOnce) {
        if (handler === void 0) { handler = null; }
        if (scope === void 0) { scope = null; }
        if (isOnce === void 0) { isOnce = false; }
        if (typeof eventName != 'string' || typeof handler !== 'function') {
            cc.log(this._TAG, ' listen err: eName :' + eventName + 'handler:' + handler);
            return;
        }
        var observers = this.events.get(eventName) || [];
        for (var i = 0; i < observers.length; i++) {
            var obs = observers[i];
            //func.toString() 判断匿名函数的情况
            if (obs.scope == scope && (obs.handler == handler || obs.handler.toString() == handler.toString())) {
                cc.log(this._TAG, '消息重复注册:' + eventName + ' function:' + handler.name);
                return;
            }
        }
        var observer = { handler: handler, scope: scope, isOnce: isOnce };
        observers.push(observer);
        this.events.set(eventName, observers);
    };
    MessageCenter.prototype.removeListener = function (eventName, handler, scope) {
        if (handler === void 0) { handler = null; }
        if (scope === void 0) { scope = null; }
        if (typeof eventName != 'string') {
            cc.log("-----eventName----" + eventName);
            this.ignoreScope(arguments[0]);
            return;
        }
        if (typeof eventName != 'string' || typeof handler != 'function') {
            cc.log(this._TAG, 'NotifierCenter remove err: eName :' + eventName + 'scope:' + scope._TAG);
            return;
        }
        var observers = this.events.get(eventName);
        if (!observers || observers.length === 0) {
            return;
        }
        scope = scope || this;
        var idx = -1; //同一个消息可能有多个节点注册
        for (var i = 0; i < observers.length; ++i) {
            var observer = observers[i];
            if (observer.scope == scope && (observer.handler == handler || observer.handler.toString() == handler.toString())) {
                idx = i;
            }
        }
        if (idx > -1) {
            observers.splice(idx, 1);
        }
        if (observers.length <= 0) {
            this.events.delete(eventName);
        }
        else {
            this.events.set(eventName, observers);
        }
        console.log("remove eventName " + eventName + " current Events length " + observers.length);
    };
    MessageCenter.prototype.trigger = function (eventName, params) {
        if (params === void 0) { params = null; }
        if (!this.isRunning) {
            return;
        }
        if (typeof eventName != 'string') {
            cc.log(this._TAG, ' trigger err: eventName :' + eventName);
            return;
        }
        var obs = this.events.get(eventName);
        if (!obs) {
            return;
        }
        // if(CC_DEBUG && -1 == LogFilterArray.indexOf(eventName)){
        //     cc.log(this._TAG,'trigger '+eventName+', observers: '+obs.length);
        // }
        var args = Array.prototype.slice.call(arguments, 1);
        var self = this;
        //发送
        for (var i = 0; i < obs.length; i++) {
            var ob = obs[i];
            if (ob.scope && ob.scope instanceof cc.Component && !cc.isValid(ob.scope.node)) {
                continue;
            }
            ob.handler.apply(ob.scope, args);
            if (ob.isOnce) {
                cc.log(self._TAG, 'trigger and remove once listener', eventName);
            }
        }
        //移除 once和不合法的
        var tempEvents = obs.filter(function (ob) {
            if (ob.scope && ob.scope instanceof cc.Component && !cc.isValid(ob.scope.node)) {
                return false;
            }
            return !ob.isOnce;
        });
        this.events.set(eventName, tempEvents);
    };
    MessageCenter.prototype.ignoreScope = function (scope) {
        var _this = this;
        if (scope === void 0) { scope = null; }
        var ignoreMsgs = ":";
        this.events.forEach(function (obs, eventName) {
            var retainEvents = obs.filter(function (ob) {
                if (ob.scope != scope) {
                    return true;
                }
                else {
                    ignoreMsgs = ignoreMsgs + eventName + ',';
                    return false;
                }
            });
            _this.events.set(eventName, retainEvents);
        });
    };
    MessageCenter.prototype.destroy = function () {
        console.log(this._TAG, 'destroy');
        this.events.clear();
    };
    MessageCenter.prototype.shut = function () {
        console.log(this._TAG, '--------shut');
        this.isRunning = false;
    };
    MessageCenter.prototype.launch = function () {
        console.log(this._TAG, '--------launch');
        this.isRunning = true;
    };
    MessageCenter.getInstance = function () {
        if (!this._instance) {
            this._instance = new MessageCenter("..");
        }
        return this._instance;
    };
    MessageCenter._instance = null;
    return MessageCenter;
}());
exports.default = MessageCenter.getInstance();

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/manager/MessageCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tYW5hZ2VyL01lc3NhZ2VDZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtJQU1JLHVCQUFZLElBQW9CO1FBQXBCLHFCQUFBLEVBQUEsV0FBb0I7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGlCQUFpQixDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQStCLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBa0I7UUFBbEIsc0JBQUEsRUFBQSxZQUFrQjtRQUMzQixJQUFJO1lBQ0EsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN0RjtpQkFBTTtnQkFDSCxPQUFPLFFBQVEsQ0FBQzthQUNuQjtTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLFFBQVEsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksU0FBa0IsRUFBRSxPQUF5QixFQUFFLEtBQWtCLEVBQUUsTUFBd0I7UUFBdkUsd0JBQUEsRUFBQSxjQUF5QjtRQUFFLHNCQUFBLEVBQUEsWUFBa0I7UUFBRSx1QkFBQSxFQUFBLGNBQXdCO1FBRW5HLElBQUksT0FBTyxTQUFTLElBQUksUUFBUSxJQUFJLE9BQU8sT0FBTyxLQUFL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VyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgcmVnaXN0ZXJFdmVudCB7XHJcbiAgICBoYW5kbGVyOkZ1bmN0aW9uLFxyXG4gICAgc2NvcGU6YW55LFxyXG4gICAgaXNPbmNlOmJvb2xlYW5cclxufVxyXG5jbGFzcyBNZXNzYWdlQ2VudGVyIHsgICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2UgOiBNZXNzYWdlQ2VudGVyID0gbnVsbDtcclxuICAgIFxyXG4gICAgX1RBRyA6IHN0cmluZztcclxuICAgIGlzUnVubmluZyA6IGJvb2xlYW47XHJcbiAgICBldmVudHMgOiBNYXA8c3RyaW5nLEFycmF5PHJlZ2lzdGVyRXZlbnQ+PjtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUgOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fVEFHID0gJ1snICsga2V5ICsgJy9NZXNzYWdlQ2VudGVyXSc7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBuZXcgTWFwPHN0cmluZyxBcnJheTxyZWdpc3RlckV2ZW50Pj4oKTtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlOyBcclxuICAgICAgICB0aGlzLmxhdW5jaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjb3BlTmFtZShzY29wZSA6IGFueSA9IG51bGwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoc2NvcGUuX1RBRyA/IHNjb3BlLl9UQUcgOiAoc2NvcGUubmFtZSA/IHNjb3BlLm5hbWUgOiBcInVua25vd1wiKSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInVua25vd1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ1bmtub3dcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXIoZXZlbnROYW1lIDogc3RyaW5nLCBoYW5kbGVyIDogRnVuY3Rpb24gPSBudWxsLCBzY29wZSA6IGFueSA9IG51bGwsIGlzT25jZSA6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPSAnc3RyaW5nJyB8fCB0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjYy5sb2codGhpcy5fVEFHLCAnIGxpc3RlbiBlcnI6IGVOYW1lIDonICsgZXZlbnROYW1lICsgJ2hhbmRsZXI6JyArIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnROYW1lKSB8fCBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ic2VydmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JzID0gb2JzZXJ2ZXJzW2ldO1xyXG4gICAgICAgICAgICAvL2Z1bmMudG9TdHJpbmcoKSDliKTmlq3ljL/lkI3lh73mlbDnmoTmg4XlhrVcclxuICAgICAgICAgICAgaWYgKG9icy5zY29wZSA9PSBzY29wZSAmJiAob2JzLmhhbmRsZXIgPT0gaGFuZGxlciB8fCBvYnMuaGFuZGxlci50b1N0cmluZygpID09IGhhbmRsZXIudG9TdHJpbmcoKSkpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyh0aGlzLl9UQUcsICfmtojmga/ph43lpI3ms6jlhow6JyArIGV2ZW50TmFtZSArICcgZnVuY3Rpb246JyArIGhhbmRsZXIubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0geyBoYW5kbGVyOiBoYW5kbGVyLCBzY29wZTogc2NvcGUsIGlzT25jZTogaXNPbmNlIH07XHJcbiAgICAgICAgb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLnNldChldmVudE5hbWUsb2JzZXJ2ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVMaXN0ZW5lcihldmVudE5hbWUgOiBzdHJpbmcsIGhhbmRsZXIgOiBGdW5jdGlvbiA9IG51bGwsIHNjb3BlIDogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lICE9ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tZXZlbnROYW1lLS0tLVwiICsgZXZlbnROYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5pZ25vcmVTY29wZShhcmd1bWVudHNbMF0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lICE9ICdzdHJpbmcnIHx8IHR5cGVvZiBoYW5kbGVyICE9ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY2MubG9nKHRoaXMuX1RBRywgJ05vdGlmaWVyQ2VudGVyIHJlbW92ZSBlcnI6IGVOYW1lIDonICsgZXZlbnROYW1lICsgJ3Njb3BlOicgKyBzY29wZS5fVEFHKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMuZXZlbnRzLmdldChldmVudE5hbWUpO1xyXG4gICAgICAgIGlmICghb2JzZXJ2ZXJzIHx8IG9ic2VydmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XHJcbiAgICAgICAgdmFyIGlkeCA9IC0xOyAvL+WQjOS4gOS4qua2iOaBr+WPr+iDveacieWkmuS4quiKgueCueazqOWGjFxyXG4gICAgICAgIGZvcih2YXIgaSA9MDsgaSA8IG9ic2VydmVycy5sZW5ndGg7KytpKXtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gb2JzZXJ2ZXJzW2ldO1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIuc2NvcGUgPT0gc2NvcGUgJiYgKG9ic2VydmVyLmhhbmRsZXIgPT0gaGFuZGxlciB8fCBvYnNlcnZlci5oYW5kbGVyLnRvU3RyaW5nKCkgPT0gaGFuZGxlci50b1N0cmluZygpKSkge1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZHggPiAtMSl7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaWR4LDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvYnNlcnZlcnMubGVuZ3RoIDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5kZWxldGUoZXZlbnROYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMuc2V0KGV2ZW50TmFtZSxvYnNlcnZlcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZSBldmVudE5hbWUgXCIrZXZlbnROYW1lICsgXCIgY3VycmVudCBFdmVudHMgbGVuZ3RoIFwiK29ic2VydmVycy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXIoZXZlbnROYW1lIDogc3RyaW5nLCBwYXJhbXMgOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBjYy5sb2codGhpcy5fVEFHLCAnIHRyaWdnZXIgZXJyOiBldmVudE5hbWUgOicgKyBldmVudE5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYnMgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnROYW1lKTtcclxuICAgICAgICBpZiAoIW9icykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKENDX0RFQlVHICYmIC0xID09IExvZ0ZpbHRlckFycmF5LmluZGV4T2YoZXZlbnROYW1lKSl7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyh0aGlzLl9UQUcsJ3RyaWdnZXIgJytldmVudE5hbWUrJywgb2JzZXJ2ZXJzOiAnK29icy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIC8v5Y+R6YCBXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG9iID0gb2JzW2ldO1xyXG4gICAgICAgICAgICBpZiAob2Iuc2NvcGUgJiYgb2Iuc2NvcGUgaW5zdGFuY2VvZiBjYy5Db21wb25lbnQgJiYgIWNjLmlzVmFsaWQob2Iuc2NvcGUubm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iLmhhbmRsZXIuYXBwbHkob2Iuc2NvcGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAob2IuaXNPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coc2VsZi5fVEFHLCAndHJpZ2dlciBhbmQgcmVtb3ZlIG9uY2UgbGlzdGVuZXInLCBldmVudE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v56e76ZmkIG9uY2XlkozkuI3lkIjms5XnmoRcclxuICAgICAgICB2YXIgdGVtcEV2ZW50cyA9IG9icy5maWx0ZXIoZnVuY3Rpb24gKG9iKSB7XHJcbiAgICAgICAgICAgIGlmIChvYi5zY29wZSAmJiBvYi5zY29wZSBpbnN0YW5jZW9mIGNjLkNvbXBvbmVudCAmJiAhY2MuaXNWYWxpZChvYi5zY29wZS5ub2RlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAhb2IuaXNPbmNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLnNldChldmVudE5hbWUsdGVtcEV2ZW50cyk7IFxyXG4gICAgfVxyXG5cclxuICAgIGlnbm9yZVNjb3BlKHNjb3BlIDogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBpZ25vcmVNc2dzID0gXCI6XCI7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaCgob2JzLGV2ZW50TmFtZSk9PntcclxuICAgICAgICAgICAgdmFyIHJldGFpbkV2ZW50cyA9IG9icy5maWx0ZXIoZnVuY3Rpb24gKG9iKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Iuc2NvcGUgIT0gc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlTXNncyA9IGlnbm9yZU1zZ3MgKyBldmVudE5hbWUgKyAnLCc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMuc2V0KGV2ZW50TmFtZSxyZXRhaW5FdmVudHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9UQUcsICdkZXN0cm95Jyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHNodXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fVEFHLCAnLS0tLS0tLS1zaHV0Jyk7XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGxhdW5jaCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9UQUcsICctLS0tLS0tLWxhdW5jaCcpO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKXtcclxuICAgICAgICBpZighdGhpcy5faW5zdGFuY2Upe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBNZXNzYWdlQ2VudGVyKFwiLi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQ2VudGVyLmdldEluc3RhbmNlKCk7XHJcbiJdfQ==
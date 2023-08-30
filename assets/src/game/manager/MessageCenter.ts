interface registerEvent {
    handler:Function,
    scope:any,
    isOnce:boolean
}
class MessageCenter {    
    private static _instance : MessageCenter = null;
    
    _TAG : string;
    isRunning : boolean;
    events : Map<string,Array<registerEvent>>;
    constructor(type : string = null) {
        let key = type;
        this._TAG = '[' + key + '/MessageCenter]';
        this.events = new Map<string,Array<registerEvent>>();
        this.isRunning = false; 
        this.launch();
    }

    getScopeName(scope : any = null) {
        try {
            if (scope) {
                return (scope._TAG ? scope._TAG : (scope.name ? scope.name : "unknow")).toString();
            } else {
                return "unknow";
            }
        } catch (e) {
            return "unknow";
        }
    }

    addListener(eventName : string, handler : Function = null, scope : any = null, isOnce : boolean = false) {

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
        this.events.set(eventName,observers);
    }

    removeListener(eventName : string, handler : Function = null, scope : any = null) {
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
        for(var i =0; i < observers.length;++i){
            var observer = observers[i];
            if (observer.scope == scope && (observer.handler == handler || observer.handler.toString() == handler.toString())) {
                idx = i;
            }
        }
        if(idx > -1){
            observers.splice(idx,1);
        }
        if(observers.length <= 0){
            this.events.delete(eventName);
        }
        else{
            this.events.set(eventName,observers);
        }
        console.log("remove eventName "+eventName + " current Events length "+observers.length);
    }

    trigger(eventName : string, params : any = null) {
        if (!this.isRunning) { return; }
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
        for (let i = 0; i < obs.length; i++) {
            let ob = obs[i];
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
        this.events.set(eventName,tempEvents); 
    }

    ignoreScope(scope : any = null) {
        let ignoreMsgs = ":";
        this.events.forEach((obs,eventName)=>{
            var retainEvents = obs.filter(function (ob) {
                if (ob.scope != scope) {
                    return true;
                } else {
                    ignoreMsgs = ignoreMsgs + eventName + ',';
                    return false;
                }
            });
            this.events.set(eventName,retainEvents);
        });
    }
    destroy() {
        console.log(this._TAG, 'destroy');
        this.events.clear();
    }
    shut() {
        console.log(this._TAG, '--------shut');
        this.isRunning = false;
    }
    launch() {
        console.log(this._TAG, '--------launch');
        this.isRunning = true;
    }
    public static getInstance(){
        if(!this._instance){
            this._instance = new MessageCenter("..");
        }
        return this._instance;
    }
}
export default MessageCenter.getInstance();


export default class Handler
{
    private callBack:Function;
    private host:any;
    private args:Array<any>;
    private active:boolean = true;
    private id:number;
    private once:boolean;
    private static index:number = 0;
    private static handler_cache:Array<Handler> = [];
    private static hostUUID:number = 1000;

    private constructor(fun:Function,host:any,once:boolean = true,...args){
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
    static create(fun:Function,host:any,isOnce:boolean= true,...args){
        let len = Handler.handler_cache.length;
        for(let i = 0;i < len; i++)
            {
                if(!Handler.handler_cache[i].active)
                {
                    Handler.handler_cache[i].active = true;
                    Handler.handler_cache[i].callBack = fun;
                    Handler.handler_cache[i].host = host;
                    if (!host.hasOwnProperty('hostUuid')) {
                        host.hostUuid = Handler.hostUUID++;
                    }
                    if(!!args)
                    {
                        Handler.handler_cache[i].args = args;
                    }
                    else
                    {
                        !!Handler.handler_cache[i].args ? Handler.handler_cache[i].args.length = 0 : Handler.handler_cache[i].args = [];
                    }
                    Handler.handler_cache[i].once = isOnce;
                    return Handler.handler_cache[i];
                }
            }
            let handler = new Handler(fun,host,isOnce,...args);
            if (!host.hasOwnProperty('hostUuid')) {
                host.hostUuid = Handler.hostUUID++;
            }
            Handler.handler_cache.push(handler);
            return handler;
    }
    /**
     * 释放当前host上的所有handler
     * @param host 
     */
    static releaseByHost(host:any){
        if (!!host) {
            let len = Handler.handler_cache.length;
            for (let i = 0 ; i < len; i++) {
                if (!!Handler.handler_cache[i].host) {
                    if (host.hostUuid === Handler.handler_cache[i].host.hostUuid) {
                        Handler.handler_cache[i].active = false;
                        Handler.handler_cache[i].host = null;
                        Handler.handler_cache[i].callBack = null;
                    }
                }
                
            }
        }
    }

    /**
     * 是否host 当前正在拥有这个handler
     * @param host 
     */
    isHostOwn(host)
    {
        if (!!host && host.hasOwnProperty('hostUuid')) {
            if (!!this.host) {
                if (this.host.hostUuid === host.hostUuid) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * 调用handler
     * @param args 
     */
    call(...args)
    {
        if(!!this.host)
        {
            for (let i = 0; i < this.args.length; i++) {
                args.push(this.args[i]);
            }
            let result = this.callBack.apply(this.host,args);
            if(this.once)
            {
                this.active = false;
                this.callBack = null;
                this.host = null;
            }
            return result;
        }
        else
        {
            cc.error("handler 调用时 this 对象不存在:"+this.callBack);
        }
    }
    
    equal(handler:Handler)
    {
        if (!!handler && this.id === handler.id) {
            return true;
        }
        return false;
    }

    /**
     * 释放当前handler
     */
    release()
    {
        this.host = null;
        this.callBack = null;
        this.args.length = 0;
        this.active = false;
    }
}
import Handler from "../base/Handler";

//需要加载的资源
export default class LoaderItem
{
    resources = {};
    isRelease = false;
    url:string = null;
    maxRetryTimes:number = 0;  //最大重试次数
    isActive:boolean = true;    //默认可以使用
    sameArr:Array<Handler> = null;
    cresource:cc.Asset;

    load(url,type,handler){
        this.url = url;
        cc.loader.loadRes(url,type,(err,res)=>{
            if (err) {
                handler && handler.call(null);
                cc.error('资源加载失败--' + url);
                return;
            }
            !!handler && handler.call(res,url);
            if (!!this.sameArr) {
                for (let i = 0; i < this.sameArr.length; i++) {
                    this.sameArr[i] && this.sameArr[i].call(res,url);
                }
                this.sameArr.length = 0;
            }
            this._cacheRes(res);
        }); 
    }

    addSame(handler){
        if (!this.sameArr) {
            this.sameArr = [];
        }
        this.sameArr.push(handler);
    }

    //设置已存在的资源的key
    setExsitRes(exsits){
        for (let key in this.resources) {
            exsits[key] = true;
        }
    }
    
        /**
     * 缓存已使用资源
     * @param resource 缓存单个资源的所有使用资源
     */
    _cacheRes(resource) {
        let loader = cc.loader;
        this.cresource = resource;//存储当前资源，用于后期释放
        for (let key of loader.getDependsRecursively(resource)) {
            // cc.log(key,this.resources[key]);
            this.resources[key] = true;
        }
        
    }

    //释放完成后重置加载器
    reset(){
        this.isActive = true;
        this.url = null;
        for (let key in this.resources) {
            delete this.resources[key];
        }
        this.cresource = null;
        if (this.sameArr) {
            this.sameArr.length = 0;
        }
    }

    release(exsits){
        for (let key in this.resources) {
            if ( key in exsits) {
                continue;
            } else {
                cc.loader.release(key);
            }
        }
        if (!!this.cresource) {
            cc.loader.release(this.cresource);
        }
        this.reset();
    }

}

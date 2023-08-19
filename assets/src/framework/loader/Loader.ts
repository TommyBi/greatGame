import LoaderItem from "./LoaderItem";

//资源加载器
export default class Loader {
    private needRelease:boolean;//是否需要释放
    public moduleName:string = null;
    private cacheItems:Array<LoaderItem> = [];
    public isRelease:boolean = false;     //释放已经释放过了

    constructor(isRelease:boolean){
        this.needRelease = isRelease;
    }

    addLoaderItem(url,type,handler){
        let res = cc.loader.getRes(url,type);
        if (cc.isValid(res)) {
            !!handler && handler.call(res,url);
            return;
        }
        if (this._checkSameURL(url,handler)) {
            return;
        }
        let item = this.getLoaderItem();
        item.load(url,type,handler);
    }

    //检查相同的加载路径 保证只存在一个
    _checkSameURL(url,handler){
        let len = this.cacheItems.length
        for (let i = 0; i < len;i++) {
            if (!this.cacheItems[i].isActive) {
                if (this.cacheItems[i].url === url) {
                    this.cacheItems[i].addSame(handler);
                    return true;
                }
            }
        }
        return false;
    }

    //获得一个加载item
    getLoaderItem(){
        let len = this.cacheItems.length;
        for (let i = 0; i < len; i++) {
            if (this.cacheItems[i].isActive) {
                this.cacheItems[i].isActive = false;
                return this.cacheItems[i];
            }
        }
        let item = new LoaderItem();
        item.isActive = false;
        this.cacheItems.push(item);
        return item;
    }

    getAllResUID(exsits){
        if (exsits) {
            let len = this.cacheItems.length
            for (let i = 0; i < len; i++) {
                if (!this.cacheItems[i].isActive) {
                    this.cacheItems[i].setExsitRes(exsits);
                }
            }
        }
    }

    releaseItem(){
        let len = this.cacheItems.length;
        for (let i = 0; i < len;i++) {
            this.cacheItems[i].reset();
        }
    }

    release(exsits) {
        let len = this.cacheItems.length;
        if (this.needRelease && !this.isRelease) {
            for (let i = 0; i < len;i++) {
                if (!this.cacheItems[i].isActive) {
                    this.cacheItems[i].release(exsits);
                }
            }
            
        }
        this.releaseItem();
    }

}

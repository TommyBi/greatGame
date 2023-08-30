import Handler from "../base/Handler";
export interface GroupFileData {
    fileName:string,
    type:string,
    moduleName:string
}

export default class GroupData {
    public resources:Array<GroupFileData> = null;
    public isActive = true;      //默认可以使用
    public handler = null;       //回调函数
    private loaderHandler = null; //单个资源加载完成的回调函数
    private resultArr:Array<any> = [];       //返回结果
    private loaderCount:number = 0;      //加载完成的数量

    getCompletetHandler(){
        this.resultArr.length = 0;
        this.loaderCount = 0;
        this.loaderHandler = Handler.create(this._signLoaderComplete,this,false);
        return this.loaderHandler;
    }

    _signLoaderComplete(res,url){
        // cc.log(res,url);
        this._putToResultByName(res,url);
        if (this.loaderCount >= this.resources.length) {
            this.handler.call(this.resultArr);
            this.reset();
        }
        //比对是否全部加载完成 如果全部完成回调 同时重置data
    }

    _putToResultByName(res,url){
        for (let index = 0; index < this.resources.length; index++) {
            const element:GroupFileData = this.resources[index];
            if (!!url && url.indexOf(element.fileName) != -1) {
                this.resultArr[index] = res;
                this.loaderCount++;
                break;
            }
        }
    }

    reset(){
        this.isActive = false;
        this.resources = null;
        if(!!this.handler) {
            this.handler.release();
        }
        if(!!this.loaderHandler) {
            this.loaderHandler.release();
        }
        this.resultArr.length = 0;
        this.loaderCount = 0;
        this.loaderHandler = null;
    }
}



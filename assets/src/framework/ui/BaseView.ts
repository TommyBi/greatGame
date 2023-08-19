import LoaderManager from "../manager/LoaderManager";
import GamePoolManager from "../manager/GamePoolManager";
import UIMananger from "../manager/UIMananger";
import Handler from "../base/Handler";
import NResponer from "../message/NResponer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseView extends cc.Component {

    public uiName:string;
    public moduleName:string;
    public isOnLoad:boolean;

    constructor(){
        super();
        this.isOnLoad = true;
    }

    setUIName(url:string){
        this.uiName = url;
    }

    setModuleName(mname:string){
        this.moduleName = mname;
    }

    //开始显示
    _show_(){
        
    }

    _hide_(){
        if (LoaderManager.isRelease(this.moduleName)) {
            this.node.destroy();
            GamePoolManager.clearByTarget(this); 
            this._destroyClear(); 
        } else {
            GamePoolManager.putBackByTarget(this);
            if (!!this.node.parent) {
                this.node.removeFromParent(false);
            }
            this._closeClear();
        }
    }

    //关时清理
    _closeClear(){

    }

    //销毁时清理
    _destroyClear(){

    }

    on_Show(args){
        
    }

    on_Hide(){

    }

    close()
    {
        UIMananger.hideView(this.uiName);
    }

    onDestroy(){
        cc.log('BaseView 被销毁');
        NResponer.targetOff(this,true);
        Handler.releaseByHost(this);
        this.isOnLoad = false;
    }
}

import Handler from "../base/Handler";
import LoaderManager from "../manager/LoaderManager";
import UIMananger from "../manager/UIMananger";
import ComponentHelper from "../tools/ComponentHelper";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseTips extends cc.Component {

    _inData : any = null;
    _uiName:string = "";
    _effect:any = null;
    modelUI:cc.Node;
    modelUIOpacity : number = 150;
    _delayRemove : any = null;
    public maskURL:string = "mbg";//资源放在common模块中
    close(){
        UIMananger.hideTips(this.node);
        this.modelUI.stopAllActions();
        this.modelUI.runAction(cc.fadeOut(0.2));
    }
    setUIParent(parentNode){
        this.node.parent = parentNode;
    }
    _show_(args){
        this._inData = args;
        this._initModule();
    }
    setDelayRemove(dr){
        this._delayRemove = dr;
    }   
    setUIName(uiName){
        this._uiName = uiName;
    }
    setEffect(effect){
        this._effect = effect;
    }
    startHide(){
    }
    _hide_(){
        this.node.destroy();
    }
    on_Show(){
        this._showModuleAction();
        if(this._delayRemove && this._inData){
            let reward = this._inData[0];
            this.node.runAction(cc.sequence(
                cc.delayTime(this._delayRemove),
                cc.callFunc(()=>{
                    this.scheduleOnce(this.close.bind(this),0);
                })
            ));
            let noCoin = this._inData[1];
        }
    }
    private _initModule(){
        if (!cc.isValid(this.modelUI)) {
            this.modelUI = ComponentHelper.createSprite(null,null);
            LoaderManager.loaderSpriteFrame(this.maskURL,Handler.create(this._moduleComplete,this),'commonRes');
            this.modelUI.addComponent(cc.BlockInputEvents);
            this.modelUI.opacity = 0;
            this.modelUI.parent = this.node;
            this.modelUI.setSiblingIndex(0);    
        }
        
    }
    private _moduleComplete(res){
        let sprite:cc.Sprite = ComponentHelper.spriteFrame(this.modelUI,res);
        sprite.trim = false;
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        let msize = cc.view.getVisibleSize();
        this.modelUI.width = msize.width;
        this.modelUI.height = msize.height;
        this._clickClose();
    }
    public _showModuleAction(){
        if(cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
            this.modelUI.runAction(cc.fadeTo(0.2,this.modelUIOpacity));
        }
    }
    startShow(){}
    //点击空白区域关闭
    _clickClose(){
        this.modelUI.on('touchend', (event)=> {
            event.stopPropagation();
            this.node.stopAllActions();
            let clickPos = event.getLocation();
                let visibleSize = cc.view.getVisibleSize();
                clickPos.x = clickPos.x - visibleSize.width / 2;
                clickPos.y = clickPos.y - visibleSize.height / 2;
                let rect = this.node.getBoundingBox();
                if(!rect.contains(clickPos))
                {
                    this.close();
                }
        });
    }
}

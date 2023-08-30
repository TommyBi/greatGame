import Handler from "../../base/Handler";
import BaseUIEffect from "../BaseUIEffect";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FadeBackUIEffect extends BaseUIEffect{
    
    run(node:cc.Node,time:number,isOpen:boolean,handler:Handler)
    {
        time = time || this.time;
        node.runAction(cc.sequence(cc.fadeOut(time),cc.callFunc( ()=>{ if(!!handler){ handler.call(node); } } )));
    }
}

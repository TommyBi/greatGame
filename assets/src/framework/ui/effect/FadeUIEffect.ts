import BaseUIEffect from "../BaseUIEffect";
import Handler from "../../base/Handler";

export default class FadeUIEffect extends BaseUIEffect{
    
    run(node:cc.Node,time:number,isOpen:boolean,handler:Handler)
    {
        time = time || this.time;
        if(isOpen)
        {
            node.opacity = 0;
            node.runAction(cc.sequence(cc.fadeTo(time,255),cc.callFunc( ()=>{ if(!!handler){ handler.call(node); } } )));
        }
        else
        {
            node.runAction(cc.sequence(cc.fadeIn(time),cc.callFunc( ()=>{ if(!!handler){ handler.call(node); } } )));
        }
    }
}
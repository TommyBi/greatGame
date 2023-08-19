import Handler from "../../base/Handler";
import BaseUIEffect from "../BaseUIEffect";

export default class ScaleUIEffect extends BaseUIEffect{
    
    run(node:cc.Node,time:number,isOpen:boolean,handler:Handler)
    {
        time = time || this.time;
        node.scale = 0;
        node.runAction(cc.sequence(cc.scaleTo(time,1,1).easing(cc.easeBackOut()),cc.callFunc(()=>{ if(!!handler){ handler.call(node); } })));
        
    }
}
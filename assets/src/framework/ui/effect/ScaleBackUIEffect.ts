import BaseUIEffect from "../BaseUIEffect";
import Handler from "../../base/Handler";

export default class ScaleBackUIEffect extends BaseUIEffect{
    run(node:cc.Node,time:number,isOpen:boolean,handler:Handler)
    {
        time = time || this.time;
        node.scale = 1;
        node.runAction(cc.sequence(cc.scaleTo(time,0,0).easing(cc.easeBackIn()),cc.callFunc(()=>{ if(!!handler){ handler.call(node); } })));
    }
}
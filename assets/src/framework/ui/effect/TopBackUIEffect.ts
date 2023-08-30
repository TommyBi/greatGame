import Handler from "../../base/Handler";
import BaseUIEffect from "../BaseUIEffect";

export default class TopBackUIEffect extends BaseUIEffect{
    
    run(node:cc.Node,time:number,isOpen:boolean,handler:Handler)
    {
        time = time || this.time;
        if(isOpen)
        {
            if(!!handler)
            { 
                handler.call(node); 
            }
        }
        else
        {
            let size = cc.view.getVisibleSize();
            let action = cc.spawn(cc.fadeIn(time),cc.moveTo(time,0,size.height).easing(cc.easeBackIn()));
            node.runAction(cc.sequence(action,cc.callFunc(()=>{ node.x = 0;node.y = size.height; if(!!handler){ handler.call(node); } })));
        }
        
    }
}
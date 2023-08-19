import Handler from "../../base/Handler";
import BaseUIEffect from "../BaseUIEffect";

export default class TopUIEffect extends BaseUIEffect{
    
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
            node.opacity = 0;
            node.y = size.height/2;
            let action = cc.spawn(cc.fadeIn(time),cc.moveTo(time,0,0).easing(cc.easeBackOut()));
            node.runAction(cc.sequence(action,cc.callFunc(()=>{ node.x = 0;node.y = 0; if(!!handler){ handler.call(node); } })));
        }
        
    }
}
import Handler from "../base/Handler";

export default class BaseUIEffect{
    public type:string;
    public time:number = 0.2;
    constructor(type)
    {
        this.type = type;
    }

    run(node:cc.Node,time:number,isOpen:boolean,handler:Handler)
    {

    }
}

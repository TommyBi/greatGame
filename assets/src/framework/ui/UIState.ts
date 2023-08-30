import BasePanel from "./BasePanel";

export enum StateType
{
    close,//关闭状态
    opening,//打开中
    open   //完全打开
}

/**
 * ui状态
 */
export class UIState {
    uName:string;//ui名称
    openState:StateType;//打开状态 0 关闭  1正在打开中(加载中，或者动画中)    2完全打开
    isActive:boolean;//当前这个对象是否可以使用 用于对象池
    uinId:number = 0;
    ui:BasePanel;
    static StateID:number = 0;
    constructor()
    {
        this.uinId = UIState.StateID++;
    }
    setData(data)
    {
        this.uName = data.uname;
        this.openState = StateType.opening;
        this.isActive = true;
    }

    reset()
    {
        if (this.ui) {
            this.ui.close();    
        }
        this.ui = null;
        this.uName = '';
        this.openState = StateType.close;
    }
}
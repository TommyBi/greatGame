// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import SortUtils from "../../../framework/tools/SortUtils";
import Utils from "../../../framework/tools/Utils";
import BasePanel from "../../../framework/ui/BasePanel";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import AVirtualScrollView from "./AVirtualScrollView";

const { ccclass, property } = cc._decorator;

/**
 * 升级界面
 * TODO:
 * initPropHasList这个方法可以移至更早的登录初始化环节
 */
@ccclass
export default class TaskView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;

    @property(AVirtualScrollView)
    scroller: AVirtualScrollView = null;

    mData;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.addEventListener(EventType.TASK_UPDATE,this.initUI,this);
        this.initUI();
    }
    protected onLoad(): void {

    }
    protected start(): void {
    }

    startShow() {
    }
    
    initUI() {
        this.mData = SDKManager.getDailyTaskInfo();
        this.scroller.refreshData(this.mData);
    }


    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

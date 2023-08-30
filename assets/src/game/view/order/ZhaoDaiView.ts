// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import BasePanel from "../../../framework/ui/BasePanel";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;

/**
 *招待顾客
 * TODO:
 */
@ccclass
export default class ZhaoDaiView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_go: cc.Node = null;
    @property(cc.Node)
    btn_wait: cc.Node = null;
    @property(cc.Label)
    proLb: cc.Label = null;
    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;

    mData;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_go, this.onGo, this);
        EventDispath.on(this.btn_wait, this.onWait, this);
        this.initUI();
    }
    protected onLoad(): void {
    }
    protected start(): void {
    }

    startShow() {
        this.mData = this.inData[0];
    }

    initUI() {
        let base = ConfigManager.getCropById(this.mData.cropId);

        this.proLb.string = this.mData.num + "/" + this.mData.target;
        this.pro.progress=this.mData.num / this.mData.target;

    }

    onWait() {
        this.onBtnCloseHandle();
    }
    onGo() {
        UIMananger.showPanel(UIType.popZlView);
        this.onBtnCloseHandle();
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

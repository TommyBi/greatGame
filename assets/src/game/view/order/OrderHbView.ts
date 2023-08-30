// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import BasePanel from "../../../framework/ui/BasePanel";
import PlayerModel from "../../datas/PlayerModel";
import { OrderItem_Crop } from "./OrderItem";

const { ccclass, property } = cc._decorator;

/**
 *订单红包池
 * TODO:
 */
@ccclass
export default class OrderHbView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_ok: cc.Node = null;
    @property(cc.Node)
    descLb1: cc.Node = null;
    @property(cc.Node)
    descLb2: cc.Node = null;
    @property(cc.Label)
    numLb: cc.Label = null;


    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_ok, this.onOk, this);

        EventDispath.addEventListener(EventType.SDK_VIDEO_NUM, this.updateNum, this);
        SDKManager.getOrderPoolData();
    }
    protected onLoad(): void {
    }
    protected start(): void {
    }

    updateNum(num) {
        if (!num) num = 0;
        this.numLb.string = num + "";
        if (num > 0) {
            this.descLb1.active = true;
        } else {
            this.descLb2.active = true;
        }
    }

    onOk() {
        //知道了
        this.onBtnCloseHandle();
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import BasePanel from "../../../framework/ui/BasePanel";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { OrderItem_Crop } from "./OrderItem";

const { ccclass, property } = cc._decorator;

/**
 *放弃订单
 * TODO:
 */
@ccclass
export default class OrderGiveUpView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_giveUp: cc.Node = null;
    @property(cc.Node)
    btn_continue: cc.Node = null;


    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath.on(this.btn_continue, this.onContinue, this);
        this.initUI();
    }
    protected onLoad(): void {
    }
    protected start(): void {
    }

    startShow() {
    }

    updateData() {
        this.initUI();
    }
    initUI() {
        // this.addLb.string = PlayerModel.getXfzs() + "";
    }

    onGiveUp() {

        let list = PlayerModel.getOrderList();
        list[0] = ConfigManager.getOrder();
        EventDispath.send(EventType.ORDER_GIVE_UP)

        EventDispath.send(EventType.ORDER_UPDATE_TOP);
        PlayerModel.orderVideoNum = 0;
        MKUtils.alertTips("订单已放弃，请重新接单")
        this.onBtnCloseHandle();
        //仍要放弃
    }
    onContinue() {
        //继续完成
        this.onBtnCloseHandle();
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

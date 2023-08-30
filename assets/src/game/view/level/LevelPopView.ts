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
import Global from "../../consts/Global";
import PlayerModel from "../../datas/PlayerModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelPopView extends BasePanel {

    @property(cc.Node)
    btn_get: cc.Node = null;
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Label)
    descLab: cc.Label = null;
    @property(cc.Label)
    moneyLab: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:
    data;
    nextData;
    onEnable(): void {
        // 领取
        EventDispath.on(this.btn_get, this.onGet, this);
        // 退出
        EventDispath.on(this.btn_close, this.onGet, this);

        this.moneyLab.string = this.data.amount+"元";
        let num = this.nextData.orderNum - this.data.userOrderNum
        if (num > 0) {

            this.descLab.string = `再完成${num}个订单，集市升至${this.nextData.level}级\n即可领取${this.nextData.amount}元提现奖励`
        } else {
            this.descLab.string = "可升级到下一级"
        }

    }
    start() {

    }
    startShow() {
        this.data = this.inData[0].currentData;
        this.nextData = this.inData[0].nextData;
    }
    //领取奖励
    onGet() {
        this.onClose();

    }
    onClose() {
        super.close();
    }

    // update (dt) {}
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventDispath from "../../../framework/message/EventDispath";
import BasePanel from "../../../framework/ui/BasePanel";
import PlayerModel from "../../datas/PlayerModel";

const { ccclass, property } = cc._decorator;

/**
 * 订单质量
 * TODO:
 */
@ccclass
export default class OrderQualityView extends BasePanel {
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Label)
    xingfuLb: cc.Label = null;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);
        this.xingfuLb.string = PlayerModel.getXfzs() + "";
    }

    onBtnCloseHandle() {
        super.close();
    }
}

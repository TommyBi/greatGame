// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventDispath from "../../../framework/message/EventDispath";
import ComponentHelper from "../../../framework/tools/ComponentHelper";
import PlayerModel from "../../datas/PlayerModel";

const { ccclass, property } = cc._decorator;

//回馈红包
@ccclass
export default class RepayRedBox extends cc.Component {

    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;
    @property(cc.Node)
    icon: cc.Node = null;
    @property(cc.Label)
    proLb: cc.Label = null;
    @property(cc.RichText)
    descLb: cc.RichText = null;


    onLoad() {
    }
    // <color=#000000>145</c><color=#EC5454>领取</color>
    start() {
        EventDispath.on(this.node, this.onClick, this);
    }
    onClick() {
    }
    iconAction() {
        this.icon.stopAllActions();
        ComponentHelper.setHeartAction(this.icon);
    }

}

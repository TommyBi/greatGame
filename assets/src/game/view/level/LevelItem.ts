// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import ComponentHelper from "../../../framework/tools/ComponentHelper";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import AItemRenderer from "../task/AItemRenerer";

const { ccclass, property } = cc._decorator;
@ccclass
export default class LevelItem extends AItemRenderer<string> {

    @property(cc.Node)
    btn1: cc.Node = null;
    @property(cc.Node)
    btn2: cc.Node = null;
    @property(cc.Label)
    targetLb: cc.Label = null;
    @property(cc.Label)
    moneyLb: cc.Label = null;
    @property(cc.Label)
    lvLb: cc.Label = null;
    @property(cc.Label)
    proLb: cc.Label = null;
    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;
    // onLoad () {}

    start() {

    }

    protected dataChanged(): void {
        // console.log(this.data);
        this.initUI();
    }
    initUI() {
        this.btn1.active = this.btn2.active = false;
        if (this.data.userOrderNum >= this.data.orderNum && this.data.isFirst) {
            this.btn1.active = true;
            this.proLb.string = this.data.orderNum + "/" + this.data.orderNum;
            this.targetLb.string = `可升级`
        } else {
            this.btn2.active = true;
            this.proLb.string = this.data.userOrderNum + "/" + this.data.orderNum;
            if(this.data.userOrderNum>=this.data.orderNum ){
                this.targetLb.string = `可升级`
            } else{
                this.targetLb.string = `再完成${this.data.orderNum - this.data.userOrderNum}个订单可升级`
            }
        }
        this.pro.progress = this.data.userOrderNum / this.data.orderNum;
        this.lvLb.string = this.data.level;
        this.moneyLb.string = this.data.amount+"元";
    }
    // "userOrderNum": 10,//用户订单数量
    // "jsLevel": 6,//集市等级
    // "jsTaskInfos": [
    //     {
    //         "level": 1,//集市等级
    //         "orderNum": 10,//集市订单数量
    //         "amount": 5,//奖励金额
    //         "tx_mu": "1%",//提现比例
    //     },
    onGet() {
        SDKManager.upJSLevel();
        EventDispath.addEventListener(EventType.SDK_LEVEL_UP, this.onVideoBack, this);
        // SDKManager.showAd(Global.VIDEO_CONFIG.video17)

    }
    onVideoBack() {
        EventDispath.removeByEvent(EventType.SDK_LEVEL_UP, this.onVideoBack, this);
        EventDispath.send(EventType.LEVEL_UPDATE);
    }
}

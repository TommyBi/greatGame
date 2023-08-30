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
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import TopOrderItem from "./TopOrderItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TopOrderPrefab extends cc.Component {

    @property(cc.Label)
    numLb: cc.Label = null;
    @property(cc.Node)
    right: cc.Node = null;
    @property(cc.Node)
    itemGp: cc.Node = null;
    @property(cc.Node)
    nullGp: cc.Node = null;
    @property(cc.Node)
    tips1: cc.Node = null;
    @property(cc.Node)
    tips2: cc.Node = null;
    @property(cc.Node)
    shou: cc.Node = null;
    @property(cc.Prefab)
    item: cc.Prefab = null;

    mData;
    // LIFE-CYCLE CALLBACKS:
    isComplete = false;
    onLoad() {

    }
    protected onEnable(): void {
        EventDispath.addEventListener(EventType.ORDER_CLOSE, this.init, this);
        EventDispath.addEventListener(EventType.ORDER_UPDATE_TOP, this.onUpdate, this);

        EventDispath.addEventListener(EventType.ORDER_COMPLETE_UPDATE, this.onComplete, this)
        this.init();
        if (PlayerModel.checkOrderComplete()) {
            this.onComplete();
        }
    }
    onUpdate() {
        this.init();
    }
    openOrderHbView() {
        if (PlayerModel.guideStep >= 0) {
            EventDispath.send(EventType.GUIDE_Hide);
        }
        if (PlayerModel.checkOrderComplete()) {
            UIMananger.showPanel(UIType.orderSuccessView)
        } else {
            UIMananger.showPanel(UIType.orderCurrentView, null, null, UIEffectType.SCALE, this.mData)
        }
    }
    resetUi() {
        this.right.angle = 0;
        this.right.stopAllActions();
        this.nullGp.active = false;
        this.right.active = false;
        this.itemGp.active = false;
        this.numLb.node.active = false;
        this.tips1.active = false;
        this.tips2.active = false;
    }
    openOrderView() {
        // if (PlayerModel.guideStep == 12) return;
        if (PlayerModel.guideStep >= 0) {
            EventDispath.send(EventType.GUIDE_Hide);
        }
        let list = PlayerModel.getOrderList();
        UIMananger.showPanel(UIType.orderView, null, null, UIEffectType.SCALE, list);
    }

    init() {

        this.resetUi()
        this.mData = PlayerModel.getCurrentOrder();
        if (this.mData) {
            this.shou.stopAllActions();
            this.right.active = true;
            this.itemGp.active = true;
            this.numLb.node.active = true;

            if (this.mData.quality == 0) this.numLb.string = "无加成";
            else if (this.mData.quality == 1) {
                this.numLb.string = "无加成";
            } else {
                this.numLb.string = "+" + ConfigManager.order_quality_add[this.mData.quality - 1] + "%";

            }
            this.tips1.active = true;

            this.changeItem();
            // let list = 
        } else {
            this.tips2.active = true;
            this.nullGp.active = true;
            ComponentHelper.setHeartAction(this.shou, 0.7, false, 1.1);
        }

        if (PlayerModel.checkOrderComplete()) {
            this.onComplete();
        }

    }
    //订单完成，晃动
    onComplete() {
        this.right.stopAllActions();
        ComponentHelper.setRotation(this.right)
    }

    changeItem() {
        this.itemGp.removeAllChildren();
        let list = this.mData.cropList;
        for (let i = 0; i < list.length; i++) {
            let item = cc.instantiate(this.item);
            this.itemGp.addChild(item);
            item.getComponent(TopOrderItem).setData(list[i]);
        }
    }

    // update (dt) {}
}

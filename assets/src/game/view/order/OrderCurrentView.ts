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
import BasePanel from "../../../framework/ui/BasePanel";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import AVirtualScrollView from "../task/AVirtualScrollView";

const { ccclass, property } = cc._decorator;

/**
 * 当前订单
 * TODO:
 */
@ccclass
export default class OrderCurrentView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_giveUp: cc.Node = null;
    @property(cc.Node)
    btn_hb: cc.Node = null;
    @property(cc.Label)
    addLb: cc.Label = null;
    @property(cc.Label)
    orderQuLb: cc.Label = null;

    @property(AVirtualScrollView)
    scroller: AVirtualScrollView = null;

    qualityNames = ["普通订单", "青铜订单", "白银订单", "黄金订单", "钻石订单", "星耀订单"]
    mData;
    scrollerData = [];
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath.on(this.btn_hb, this.onHb, this);

        EventDispath.addEventListener(EventType.ORDER_CURRENT_CLOSE, this.onBtnCloseHandle, this)
        EventDispath.addEventListener(EventType.ORDER_CURRENT_UPDATE, this.updateData, this)

        EventDispath.addEventListener(EventType.ORDER_GIVE_UP, this.onBtnCloseHandle, this);

        this.initUI();
    }
    protected onLoad(): void {

    }
    protected start(): void {
    }

    startShow() {
        this.mData = this.inData[0];

        this.scrollerData = this.mData.cropList;
    }

    updateData() {
        this.mData = PlayerModel.getCurrentOrder();

        this.scrollerData = this.mData.cropList;
        this.initUI();
    }
    initUI() {
        this.orderQuLb.string = this.qualityNames[this.mData.quality - 1];
        if (this.mData.quality == 1) {
            this.addLb.string = "无加成";
        } else {
            this.addLb.string = "+" + ConfigManager.order_quality_add[this.mData.quality - 1] + "%";
        }
        // this.addLb.string = ConfigManager.order_quality_add[this.mData.quality - 1]  + "%";
        this.scroller.refreshData(this.scrollerData);
    }

    onGiveUp() {
        UIMananger.showPanel(UIType.orderGiveUpView);
    }
    onHb() {
        UIMananger.showPanel(UIType.orderHbView)
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

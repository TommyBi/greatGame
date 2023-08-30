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
import MKUtils from "../../../framework/tools/MkUtils";
import SortUtils from "../../../framework/tools/SortUtils";
import Utils from "../../../framework/tools/Utils";
import BasePanel from "../../../framework/ui/BasePanel";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { PopType } from "../popView/PopView1";
import AVirtualScrollView from "../task/AVirtualScrollView";

const { ccclass, property } = cc._decorator;

/**
 * 订单中心
 * TODO:
 */
@ccclass
export default class OrderView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_quality: cc.Node = null;
    @property(cc.Node)
    btn_update: cc.Node = null;
    @property(cc.Label)
    xfzsLb: cc.Label = null;

    @property(AVirtualScrollView)
    scroller: AVirtualScrollView = null;

    scrollerData = [];
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_quality, this.onQuality, this);
        EventDispath.on(this.btn_update, this.onUpdate, this);

        EventDispath.addEventListener(EventType.ORDER_CLOSE, this.onBtnCloseHandle, this);
        EventDispath.addEventListener(EventType.ORDER_UPDATE_INDEX, this.updateData, this);
        EventDispath.addEventListener(EventType.ORDER_UPDATE_LIST, this.completeUpate, this);
        EventDispath.addEventListener(EventType.ORDER_GIVE_UP, this.onGiveUp, this);
        EventDispath.addEventListener(EventType.ORDER_UNLOCK, this.onUnlock, this);
        EventDispath.addEventListener(EventType.GUIDE_COMPLETE, this.guidComplete, this);
      
        let list = PlayerModel.getOrderList();
        this.scrollerData = list;
        this.initUI();

    }
    protected onLoad(): void {

    }
    protected start(): void {
    }
    on_Show(args: any): void {
        if (PlayerModel.guideStep >= 0) {
            this.scroller.vertical = false;
            MKUtils.setNodeDelay(this.node, 0.5, () => {
                EventDispath.send(EventType.GUIDE_UPDATE)
                
            })
        }
        // MKUtils.setNodeDelay(this.node, 0.1, this.initUI.bind(this))
        // this.initUI();
        super.on_Show(args);
    }

    startShow() {
    }
    //放弃订单
    onGiveUp() {
        PlayerModel.orderVideoNum = 0;
        // this.scrollerData[0] = ConfigManager.getOrder();
        this.initUI();
    }
    //订单奖励领取后更新列表
    completeUpate() {
        this.scrollerData[0] = ConfigManager.getOrder();
        this.initUI();
    }
    //刷新订单列表
    updateList() {
        MKUtils.alertTips("刷新订单成功")
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.updateList, this);
        for (let i = 0; i < this.scrollerData.length; i++) {
            let item = this.scrollerData[i];
            if (!item.state && item.unlock) {
                this.scrollerData[i] = ConfigManager.getOrder();
            }
        }
        this.initUI();
    }
    onUnlock() {
        this.scroller.scrollToTop();
        let list = PlayerModel.getOrderList();
        let indexList = [];
        let arr = list.filter((value, index) => {
            if (value.unlock == 0) indexList.push(index);
            return value.unlock == 0;
        })
        list[indexList[0]] = ConfigManager.getOrder();
        PlayerModel.orderLen++;

        this.scrollerData = PlayerModel.getOrderList();;
        this.initUI();
        this.scroller.scrollToTop();
    }
    updateData(index) {
        this.scrollerData[index] = ConfigManager.getOrder();
        this.initUI();
    }
    initUI() {
        for (let i = 0; i < this.scrollerData.length; i++) {
            let item = this.scrollerData[i];
            let lastTime = item.time - Math.floor(Utils.returnTime() / 1000);
            if (lastTime <= 0 && !item.state) {
                this.scrollerData[i] = ConfigManager.getOrder();
            }
        }

        this.scroller.refreshData(this.scrollerData);
        this.scroller.scrollToTop();
        this.scroller.node.active = false;
        MKUtils.setNodeDelay(this.node, 0.1, () => {
            this.scroller.node.active = true;
        })
        this.xfzsLb.string = PlayerModel.getXfzs() + "";

    }

    onQuality() {
        UIMananger.showPanel(UIType.orderQualityView);
    }
    //刷新订单
    onUpdate() {
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.updateList, this);
        UIMananger.showPanel(UIType.popView1, null, () => {
            EventDispath.removeByEvent(EventType.VIDEO_BACK, this.updateList, this);
        }, UIEffectType.SCALE, PopType.REFRESH_ORDER);
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }

    getGuidePoint() {
        // let node = this.xfzsLb.node;
        let p = this.scroller.getItemByIndex(0).convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    }
    getGuidePoint1() {
        // let node = this.xfzsLb.node;
        let p = this.scroller.node.convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    }

    guidComplete() {
        this.scroller.vertical = true;
    }
}

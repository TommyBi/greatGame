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
import MKUtils from "../../../framework/tools/MkUtils";
import Utils from "../../../framework/tools/Utils";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { PopType } from "../popView/PopView1";
import AItemRenderer from "../task/AItemRenerer";

export interface OrderItem_Crop {
    icon: cc.Sprite,
    nameLb: cc.Label,
    proLb: cc.Label
}
const { ccclass, property } = cc._decorator;
@ccclass
export default class OrderItem extends AItemRenderer<string> {


    @property([cc.SpriteFrame])
    lvIconList: cc.SpriteFrame[] = [];

    unlockGp: cc.Node;
    lockGp: cc.Node;

    lvIcon: cc.Sprite = null;
    btn_info: cc.Node = null;
    btn_giveUp: cc.Node = null;
    btn_get: cc.Node = null;
    timeBg: cc.Node = null;
    current_tips: cc.Node = null;
    proLb: cc.Label = null;
    updateTimeLb: cc.Label = null;

    cropItems: OrderItem_Crop[] = [];

    lastTime = 0;
    cacheInterval = 0;
    cacheTotal = 10;
    onLoad() {
        this._initComponet();
    }

    protected update(dt: number): void {

        if (this.lastTime > 0 && !this.data.state) {

            this.cacheInterval += dt;
            if (this.cacheInterval >= this.cacheTotal) {
                this.cacheInterval = 0;
                PlayerModel.setOrder();
            }

            this.lastTime -= dt;
            this.checkUpDate();
            ComponentHelper.labelTimeSs(this.updateTimeLb.node, this.lastTime);
            this.updateTimeLb.string = this.updateTimeLb.string + "后刷新"
        }
    }
    protected onEnable(): void {
        // this.resetUI();
    }

    protected dataChanged(): void {
        this.initUI();
    }
    initUI() {
        this.resetUI();
        if (this.data.unlock) {
            this.unlockGp.active = true;
            if (this.data.state) {
                this.btn_info.active = true;
                this.btn_giveUp.active = true;

                this.current_tips.active = true;
            } else {
                if (this.data.id == 0) {
                    this.lastTime = 0;
                } else {
                    this.timeBg.active = true;
                    this.updateTimeLb.node.active = true;
                    this.lastTime = this.data.time - Math.floor(Utils.returnTime() / 1000);
                }
                this.btn_get.active = true;

            }
            let len = this.data.cropList.length
            let total = 0;
            let current = 0;
            for (let i = 0; i < len; i++) {
                let data = this.data.cropList[i];
                let item = this.cropItems[i];
                item.icon.node.active = true;
                item.nameLb.node.active = true;
                item.proLb.node.active = true;

                if (data.cropId == 100) {
                    item.nameLb.string = "招待顾客";
                    if (data.num > data.target) {
                        item.proLb.string = data.target + "/" + data.target;
                    } else {
                        item.proLb.string = data.num + "/" + data.target;
    
                    }
                } else {
                    let base = ConfigManager.getCropById(data.cropId);
                    item.nameLb.string = base.name;
                    let haveNum = PlayerModel.getHaveNumByID(data.cropId)
                    if (haveNum > data.target) {
                        item.proLb.string = data.target + "/" + data.target;
                    } else {
                        item.proLb.string = haveNum + "/" + data.target;
    
                    }
                }
                MKUtils.loadSpriteFrame("texture/crop/icon/" + `${data.cropId}`, (res) => {
                    item.icon.spriteFrame = res;
                });
            }
            // current = current > total ? total : current
            // this.proLb.string = Math.floor((current / total) * 100) + "%"

            if (this.data.quality <2) {
                this.proLb.string = "无加成";
            } else {
                this.proLb.string = "+" + ConfigManager.order_quality_add[this.data.quality - 1] + "%";
            }

            if(this.data.quality>0) this.lvIcon.spriteFrame = this.lvIconList[this.data.quality - 1];
            else this.lvIcon.spriteFrame = this.lvIconList[0];

        } else {
            this.lockGp.active = true;
        }
    }
    checkUpDate() {
        if (this.lastTime <= 0) {
            EventDispath.send(EventType.ORDER_UPDATE_INDEX, this.index);
        }
    }

    resetUI() {
        this.unlockGp.active = false;
        this.lockGp.active = false;

        this.btn_info.active = false;
        this.btn_get.active = false;
        this.btn_giveUp.active = false;

        this.timeBg.active = false;
        this.current_tips.active = false;

        this.updateTimeLb.node.active = false;
        for (let i = 0; i < this.cropItems.length; i++) {
            let item = this.cropItems[i];
            item.icon.node.active = false;
            item.nameLb.node.active = false;
            item.proLb.node.active = false;
        }
    }

    onGet() {
        let order = PlayerModel.getCurrentOrder();
        if (order) {
            UIMananger.showPanel(UIType.orderGetScuessView, null, null, UIEffectType.SCALE, 1, order)
        } else {
            EventDispath.addEventListener(EventType.ORDER_GET_SUCCESS, this.onGetSuccess, this);
            SDKManager.getOrderTask(this.data.quality)
        }
    }
    onGetSuccess() {
        EventDispath.removeByEvent(EventType.ORDER_GET_SUCCESS, this.onGetSuccess, this);
        this.data.state = 1;
        this.data.lastTime = 0;
        PlayerModel.setOrder();
        PlayerModel.updateOrder();
        UIMananger.showPanel(UIType.orderGetScuessView, null, null, UIEffectType.SCALE, 0, this.data)
        EventDispath.send(EventType.ORDER_CLOSE)

        if (PlayerModel.guideStep >= 0) {
            // PlayerModel.guideState = 1;
            EventDispath.send(EventType.GUIDE_Hide);
        }

    }
    onGiveUp() {
        UIMananger.showPanel(UIType.orderGiveUpView, null, null, UIEffectType.SCALE, this.data)
    }
    onInfo() {
        UIMananger.showPanel(UIType.orderCurrentView, null, null, UIEffectType.SCALE, this.data);
    }
    //解锁订单
    onUnlock() {
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onUnlockSuccess, this);
        UIMananger.showPanel(UIType.popView1, null, () => {
            EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onUnlockSuccess, this);

        }, UIEffectType.SCALE, PopType.UNLOCK_ORDER);
    }
    onUnlockSuccess() {
        MKUtils.alertTips("解锁订单成功")
        EventDispath.send(EventType.ORDER_UNLOCK, this.index);
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onUnlockSuccess, this);
    }
    _initComponet() {
        this.unlockGp = this.node.getChildByName("unlockGp");
        this.lockGp = this.node.getChildByName("lockGp");

        this.btn_info = this.unlockGp.getChildByName("btn_info");
        this.btn_get = this.unlockGp.getChildByName("btn_get");
        this.btn_giveUp = this.unlockGp.getChildByName("btn_giveUp");

        this.timeBg = this.unlockGp.getChildByName("timeBg");
        this.current_tips = this.unlockGp.getChildByName("current_tips");

        this.updateTimeLb = this.unlockGp.getChildByName("updateTimeLb").getComponent(cc.Label);
        this.proLb = this.unlockGp.getChildByName("proLb").getComponent(cc.Label);
        this.lvIcon = this.unlockGp.getChildByName("lvIcon").getComponent(cc.Sprite);

        for (let i = 1; i < 5; i++) {
            let nameLb = this.unlockGp.getChildByName("nameLb" + i).getComponent(cc.Label);
            let proLb = this.unlockGp.getChildByName("cropProLb" + i).getComponent(cc.Label);
            let icon = this.unlockGp.getChildByName("icon" + i).getComponent(cc.Sprite);

            this.cropItems.push({ icon: icon, nameLb: nameLb, proLb: proLb });
        }
    }
}

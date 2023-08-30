// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import BasePanel from "../../../framework/ui/BasePanel";
import UIType from "../../consts/UIType";
import { orderCache } from "../../datas/PlayerData";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { OrderItem_Crop } from "./OrderItem";

const { ccclass, property } = cc._decorator;

/**
 * 接单成功、温馨提示
 * TODO:
 */
@ccclass
export default class OrderGetScuessView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_giveUp: cc.Node = null;
    @property(cc.Node)
    btn_go: cc.Node = null;
    @property(cc.Node)
    btn_continue: cc.Node = null;
    @property([cc.SpriteFrame])
    lvIconSp: cc.SpriteFrame[] = [];

    lvIcon: cc.Sprite = null;

    cLb: cc.Node = null;
    descLb1: cc.Node = null;
    descLb2: cc.Node = null;
    titleLb1: cc.Node = null;
    titleLb2: cc.Node = null;
    proLb: cc.Label = null;

    cropItems: OrderItem_Crop[] = [];

    mType = 0;//0接单成功、1温馨提示
    mData: orderCache;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath.on(this.btn_go, this.onGo, this);
        EventDispath.on(this.btn_continue, this.onContinue, this);
        this.initUI();

        if (PlayerModel.guideStep >= 0) {
            MKUtils.setNodeDelay(this.node, 0.5, () => {
                EventDispath.send(EventType.GUIDE_UPDATE)

            })
        }
    }
    protected onLoad(): void {
        this._initComponet();
    }
    protected start(): void {
    }

    startShow() {
        this.mType = this.inData[0];
        this.mData = this.inData[1];
    }

    updateData() {
        this.initUI();
    }
    initUI() {
        if (this.mType == 0) {
            this.btn_go.active = true;
            this.descLb1.active = true;
            this.titleLb1.active = true;
            this.cLb.active = true;
        } else {
            this.titleLb2.active = true;
            this.btn_continue.active = true;
            this.btn_giveUp.active = true;
            this.descLb2.active = true;
            this.cLb.active = false;
        }

        let len = this.mData.cropList.length
        let total = 0;
        let current = 0;
        for (let i = 0; i < len; i++) {
            let data = this.mData.cropList[i];
            let item = this.cropItems[i];
            item.icon.node.active = true;
            item.nameLb.node.active = true;
            item.proLb.node.active = true;


            if (data.cropId == 100) {
                item.nameLb.string = "招待顾客";
            } else {
                let base = ConfigManager.getCropById(data.cropId);
                item.nameLb.string = base.name;
            }
            total += data.target;
            current += data.num;
            item.proLb.string = data.num + "/" + data.target;
            MKUtils.loadSpriteFrame("texture/crop/icon/" + `${data.cropId}`, (res) => {
                item.icon.spriteFrame = res;
            });
        }
        if (this.mData.quality < 2) {
            this.proLb.string = "无加成";
        } else {
            this.proLb.string = "+" + ConfigManager.order_quality_add[this.mData.quality - 1] + "%";
        }
        // this.proLb.string = Math.floor(current / total) * 100 + "%"
       if(this.mData.quality>0) this.lvIcon.spriteFrame = this.lvIconSp[this.mData.quality - 1];
       else this.lvIcon.spriteFrame = this.lvIconSp[0];
    }

    onGiveUp() {
        //仍要放弃
        // EventDispath.send(EventType.ORDER_GIVE_UP)
        // let list = PlayerModel.getOrderList();
        // list[0] = ConfigManager.getOrder();

        // EventDispath.send(EventType.ORDER_UPDATE_TOP);
        // PlayerModel.orderVideoNum = 0;
        // MKUtils.alertTips("订单已放弃，请重新接单")
        UIMananger.showPanel(UIType.orderGiveUpView, null, null, UIEffectType.SCALE, this.mData)
        this.onBtnCloseHandle();
    }
    onGo() {
        //现在就去
        if (PlayerModel.guideStep >= 0) {
            EventDispath.send(EventType.GUIDE_UPDATE)
        }
        this.onBtnCloseHandle();
    }
    onContinue() {
        this.onBtnCloseHandle();
        //继续完成
    }
    _initComponet() {
        this.lvIcon = this.node.getChildByName("lvIcon").getComponent(cc.Sprite);
        this.proLb = this.node.getChildByName("proLb").getComponent(cc.Label);
        this.descLb1 = this.node.getChildByName("descLb1");
        this.descLb2 = this.node.getChildByName("descLb2");
        this.titleLb1 = this.node.getChildByName("titleLb1");
        this.titleLb2 = this.node.getChildByName("titleLb2");
        this.cLb = this.node.getChildByName("cLb");

        for (let i = 1; i < 5; i++) {
            let nameLb = this.node.getChildByName("nameLb" + i).getComponent(cc.Label);
            let proLb = this.node.getChildByName("cropProLb" + i).getComponent(cc.Label);
            let icon = this.node.getChildByName("icon" + i).getComponent(cc.Sprite);

            nameLb.node.active = false;
            proLb.node.active = false;
            icon.node.active = false;

            this.cropItems.push({ icon: icon, nameLb: nameLb, proLb: proLb });
        }
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }

    getGuidePoint() {
        // let node = this.xfzsLb.node;
        let p = this.btn_go.convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    }
}

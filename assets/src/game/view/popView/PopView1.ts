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

export enum PopType {
    FIELD,
    SHELVE,
    GOLD1,
    UNLOCK_ORDER,
    REFRESH_ORDER,
    GOLD2,
}

@ccclass
export default class PopView1 extends BasePanel {
    @property(cc.Node)
    gp0: cc.Node = null;
    @property(cc.Label)
    numLb: cc.Label = null;

    @property(cc.Label)
    titleLb: cc.Label = null;
    @property(cc.Label)
    btnLb: cc.Label = null;
    @property(cc.Label)
    descLb: cc.Label = null;
    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property([cc.SpriteFrame])
    iconList: cc.SpriteFrame[] = [];


    // LIFE-CYCLE CALLBACKS:
    mType = 0;//面板类型，0解锁地块

    onLoad() {

    }

    protected onEnable(): void {
        // 关闭面板
        EventDispath.on(this.btnClose, this.onCloseHandle, this);
        EventDispath.on(this.btnOk, this.onClickHandle, this);
    }

    startShow(): void {

        this.gp0.active = false;
        this.descLb.node.active = true;

        this.mType = this.inData[0];
        if (this.mType == PopType.FIELD) {
            this.btnLb.string = "立即扩建";
            this.descLb.string = "扩建土地后，种植效率更高哦";
            this.icon.spriteFrame = this.iconList[PopType.FIELD];
            this.titleLb.string = "扩建土地"
        } else if (this.mType == PopType.SHELVE) {
            this.btnLb.string = "立即扩建";
            this.descLb.string = "扩建货架后，往来顾客更多哦";
            this.titleLb.string = "扩建货架"
            this.icon.spriteFrame = this.iconList[PopType.SHELVE];
        } else if (this.mType == PopType.GOLD1 || this.mType == PopType.GOLD2) {
            this.gp0.active = true;
            this.descLb.node.active = false;
            if (this.mType == PopType.GOLD1) this.titleLb.string = "领取钞票"
            else this.titleLb.string = "钞票不足"
            this.btnLb.string = "立即领取";
            this.numLb.string = this.inData[1];
            this.icon.spriteFrame = this.iconList[PopType.GOLD1];
            EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        } else if (this.mType == PopType.UNLOCK_ORDER) {
            this.btnLb.string = "立即解锁";
            this.descLb.string = "看精彩视频 \n 免费解锁新订单";
            this.titleLb.string = "解锁订单"
            this.icon.spriteFrame = this.iconList[PopType.UNLOCK_ORDER];
        } else if (this.mType == PopType.REFRESH_ORDER) {
            this.btnLb.string = "立即刷新";
            this.descLb.string = "立即刷新订单中心的所有订单 \n可能刷出更优质的订单哦";
            this.titleLb.string = "刷新订单"
            this.icon.spriteFrame = this.iconList[PopType.UNLOCK_ORDER];
        }
    }
    onClickHandle() {
        switch (this.mType) {
            case PopType.FIELD:
                SDKManager.showAd(Global.VIDEO_CONFIG.video8);
                this.onVideoClose();
                break;
            case PopType.SHELVE:
                SDKManager.showAd(Global.VIDEO_CONFIG.video9);
                this.onVideoClose();
                break;
            case PopType.GOLD1:
            case PopType.GOLD2:
                SDKManager.showAd(Global.VIDEO_CONFIG.video2);
                break;
            case PopType.UNLOCK_ORDER:
                SDKManager.showAd(Global.VIDEO_CONFIG.video3);
                this.onVideoClose();
                break;
            case PopType.REFRESH_ORDER:
                SDKManager.showAd(Global.VIDEO_CONFIG.video4);
                this.onVideoClose();
                break;
        }
    }
    onVideoBack() {
        PlayerModel.setGold(this.inData[1]);
        this.onCloseHandle();
    }
    onVideoClose() {
        super.close1();
    }

    onCloseHandle() {
        super.close();
    }

    // update (dt) {}
}

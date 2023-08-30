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
import BasePanel from "../../../framework/ui/BasePanel";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";

const { ccclass, property } = cc._decorator;

/**
 * 辛苦红包，回馈红包
 * TODO:
 */
@ccclass
export default class HardView extends BasePanel {
    @property(cc.Node)
    xkTitle: cc.Node = null;
    @property(cc.Node)
    hkTitle: cc.Node = null;
    @property(cc.Node)
    btn_open: cc.Node = null;
    @property(cc.Node)
    btn_noOpen: cc.Node = null;
    @property(cc.Node)
    btn_giveUp: cc.Node = null;
    @property(cc.Node)
    descLb1: cc.Node = null;
    @property(cc.Node)
    descLb2: cc.Node = null;

    mData;
    mType = 0;
    getType = 0;
    onEnable(): void {

        EventDispath.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath.on(this.btn_open, this.onOpen, this);
        EventDispath.on(this.btn_noOpen, this.onNoOpen, this);

        EventDispath.addEventListener(EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);

        EventDispath.addEventListener(EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        EventDispath.addEventListener(EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        if (this.mType == 0) {
            SDKManager.getHardConfig();
        } else {
            SDKManager.getFeedbackConfig();
        }
        this.initUI();
    }

    startShow() {
        this.mType = this.inData[0];

    }

    initUI() {
        if (this.mType == 0) {
            this.xkTitle.active = true;
            this.btn_giveUp.active = true;
            this.descLb1.active = true;
        } else {
            this.hkTitle.active = true;
            this.btn_noOpen.active = true;
            this.descLb2.active = true;
        }
    }
    onRewardCfg(data) {
        this.mData = data;
    }
    onRewardLost() {
        this.onBtnCloseHandle();
    }
    onRewardGot(data) {
        if( this.getType){
            PlayerModel.setMoney(data.userRedBean, data.redBean);
        }else{
            UIMananger.showPanel(UIType.hardOpenView, null, null, UIEffectType.SCALE, data)
        }
        this.onBtnCloseHandle();
    }
    onGiveUp() {
        this.onBtnCloseHandle();
    }
    //不开了，只领一点
    onNoOpen() {
        this.getType = 1;
        PlayerModel.zdGkNum = 0;
        SDKManager.getRedPackReward(this.mData.configId, false);
        EventDispath.send(EventType.HKHB_UPDATE);
    }
    onOpen() {
        if (this.mType == 0) {

            SDKManager.getRedPackReward(this.mData.configId);
        } else {
            PlayerModel.zdGkNum = 0;
            EventDispath.send(EventType.HKHB_UPDATE);
            SDKManager.getRedPackReward(this.mData.configId, true);
        }
        // if (this.isFirst) {
        //     // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
        //     PlayerModel.isFirstClearPest = false;
        //     this.onVideoBack();
        //     // this.onBtnCloseHandle();
        // } else {
        //     EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        //     SDKManager.showAd(Global.VIDEO_CONFIG.video13);
        // }
    }

    onBtnCloseHandle() {
        super.close();
    }
}

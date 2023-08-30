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
import BasePanel from "../../../framework/ui/BasePanel";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;

/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
@ccclass
export default class CashierView extends BasePanel {
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.Node)
    btn_hideClick: cc.Node = null;
    @property(cc.Node)
    btn_add: cc.Node = null;
    @property(cc.Node)
    btn_lvUp: cc.Node = null;
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Label)
    numLb: cc.Label = null;
    @property(cc.Label)
    timeLb: cc.Label = null;
    @property(cc.Label)
    proLb: cc.Label = null;
    @property(cc.Label)
    descLb: cc.Label = null;
    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;

    btnVideo: cc.Node;
    btnLb: cc.Label;
    lastTime = 0;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_lvUp, this.onLvUp, this);

        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);

        this.initUI();
    }
    protected onLoad(): void {
        this.btnVideo = this.btn_add.getChildByName("videoIcon");
        this.btnLb = this.btn_add.getChildByName("contentLabel").getComponent(cc.Label);
    }
    startShow() {

    }

    initUI() {
        this.proLb.string = PlayerModel.cashierGold + "/" + ConfigManager.getCashierMax();
        this.numLb.string = "x" + ConfigManager.cashier_one;

        this.lastTime = ConfigManager.cashier_add_times * 60 - Math.floor((new Date().getTime() / 1000 - PlayerModel.getAddLastTime()));
        if (this.lastTime > 0) {
            this.btnLb.node.x = 0;
            this.btnVideo.active = false;
            this.btnLb.string = "3倍加速中"
            this.btn_hideClick.active = true;
            this.numLb.string = "x" + ConfigManager.cashier_one * 3;
        } else {
            this.resetVideoBtn();
        }

        let lv = PlayerModel.getUIConfig().cashierlv;
        MKUtils.loadSpriteFrame("texture/prop/cashier/icon/" + `0${lv}`, (res) => {
            this.icon.spriteFrame = res;
        });
    }
    resetVideoBtn() {
        this.btn_hideClick.active = false;
        this.timeLb.string = "3分钟";
        this.btnLb.string = "3倍加速"
        this.btnLb.node.x = 48;
        this.btnVideo.active = true;
    }
    onLvUp() {
        UIMananger.showPanel(UIType.LvUpView, null, null, UIEffectType.SCALE, 3);
        this.onBtnCloseHandle();
    }
    protected update(dt: number): void {

        this.lastTime -= dt;
        if (this.lastTime > 0) {
            ComponentHelper.labelTimeSs(this.timeLb.node, this.lastTime);
        } else {
            this.resetVideoBtn();
            // this.btn_add.interactable = true;
        }
        this.pro.progress = PlayerModel.cashierGold / ConfigManager.getCashierMax();
        this.proLb.string = PlayerModel.cashierGold + "/" + ConfigManager.getCashierMax();
        if (PlayerModel.cashierGold >= ConfigManager.getCashierMax()) {
            // this.btn_add.interactable = false;
            this.descLb.string = "今日产出已达上限，急需升级收银台";
        } else {
            this.descLb.string = "收银台正在源源不断产出钞票";
        }
    }

    onBtnShowAd(): void {
        if (PlayerModel.cashierGold >= ConfigManager.getCashierMax()) {
            MKUtils.alertTips("今日产出已达上限")
            return;
        }
        // if (PlayerModel.getAutoServiceLeftTimes() <= 0) {
        //     MKUtils.alertTips("今日自动服务已达上限，请明日继续使用");
        //     return;
        // }
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager.showAd(Global.VIDEO_CONFIG.video10);
    }

    onVideoBack(): void {
        this.isVideoClose = true;
        MKUtils.alertTips("收银台3倍加速中")
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath.send(EventType.CASHIER_ADD_MULTIPLE);
        this.onBtnCloseHandle();
    }

    onBtnCloseHandle() {
        super.close();
    }
}

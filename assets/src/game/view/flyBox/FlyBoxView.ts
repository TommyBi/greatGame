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
import BasePanel from "../../../framework/ui/BasePanel";
import { crop_config } from "../../consts/CConst";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;

/**
 * 飞行宝箱
 * TODO:
 */
@ccclass
export default class FlyBoxView extends BasePanel {
    @property(cc.Node)
    btn_open: cc.Node = null;
    @property(cc.Node)
    btn_close: cc.Node = null;

    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_open, this.onOpen, this);

        EventDispath.addEventListener(EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath.addEventListener(EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        EventDispath.addEventListener(EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        this.initUI();
    }

    startShow() {
    }

    initUI() {
    }
    onRewardCfg(data) {
        SDKManager.getRedPackReward(data.configId);
    }
    onRewardLost() {
        this.onBtnCloseHandle();
    }
    onRewardGot(data) {
        UIMananger.showPanel(UIType.popRewardView, null, null, UIEffectType.SCALE, 1, { rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean })
        this.onBtnCloseHandle();
    }
      //看视频返回
      onVideoBack() {
        let rewardNum = MKUtils.randomNM(1000, 1200);
        UIMananger.showPanel(UIType.popRewardView, null, null, UIEffectType.SCALE, 1, { name: "", rewardNum: rewardNum, rewardType: 0 })
        this.onBtnCloseHandle();
    }
    onOpen() {
        let random = MKUtils.randomNMF(0, 100);
        if (random < 30) {
            EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
            SDKManager.showAd(Global.VIDEO_CONFIG.video18);
        } else {
            SDKManager.getFlightConfig();
        }
    }

    onBtnCloseHandle() {
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        super.close();
    }
}

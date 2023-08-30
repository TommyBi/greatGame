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
 * 除虫
 * TODO:
 */
@ccclass
export default class ClearPestView extends BasePanel {
    @property(cc.Node)
    videoIcon: cc.Node = null;
    @property(cc.Node)
    btnLb: cc.Node = null;
    @property(cc.Node)
    btn_clear: cc.Node = null;
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Label)
    titleLb: cc.Label = null;
    @property(cc.Label)
    descLb: cc.Label = null;

    targetPoint: cc.Vec2;
    mCfg;
    baseCfg: crop_config;
    isFirst = true;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_clear, this.onClear, this);

        EventDispath.addEventListener(EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath.addEventListener(EventType.SDK_REWARD_GOT, this.onRewardGot, this);

        EventDispath.addEventListener(EventType.SDK_REWARD_LOST, this.onRewardLost, this);

        this.initUI();
    }

    startShow() {
        this.targetPoint = this.inData[0];
        this.mCfg = this.inData[1];
        this.baseCfg = ConfigManager.getCropById(this.mCfg.cropId);
        this.isFirst = PlayerModel.isFirstClearPest;
    }

    initUI() {
        console.log(this.baseCfg);
        this.titleLb.string = this.baseCfg.name + "除虫";
        this.descLb.string = this.baseCfg.name + "感染了害虫\n需要除虫后恢复生长"

        if (this.isFirst) {
            this.btnLb.x = 0;
            this.videoIcon.active = false;
        } else {
            this.btnLb.x = 50;
            this.videoIcon.active = true;
        }

    }
    onRewardCfg(data) {
        SDKManager.getRedPackReward(data.configId);
    }

    onRewardLost() {
        this.onBtnCloseHandle();
    }

    onRewardGot(data) {
        EventDispath.send(EventType.SHACHONG, { name: this.baseCfg.name, rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean })
        // UIMananger.showPanel(UIType.popRewardView, null, () => {
        //     // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
        //     EventDispath.send(EventType.SHACHONG);
        // }, UIEffectType.SCALE, 0, { name: this.baseCfg.name, rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean })
        this.onBtnCloseHandle();
    }
    //看视频返回
    onVideoBack() {
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        let name = this.baseCfg.name;
        let rewardNum = 0
        rewardNum = MKUtils.randomNM(400, 600);
        EventDispath.send(EventType.SHACHONG, { name: name, rewardNum: rewardNum, rewardType: 0 });
        this.onBtnCloseHandle();
    }
    onClear() {
        if (this.isFirst) {
            // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
            PlayerModel.isFirstClearPest = false;
            this.onVideoBack();
            // this.onBtnCloseHandle();
        } else {
            let random = MKUtils.randomNMF(0, 100);
            if (random < 30) {
                EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
                SDKManager.showAd(Global.VIDEO_CONFIG.video13);
            } else {
                SDKManager.getWormConfig();
            }
        }
    }

    onClose() {
        EventDispath.send(EventType.CLEAR_PEST_CLOSE)
        this.onBtnCloseHandle();
    }
    onBtnCloseHandle() {
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        super.close();
    }
}

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
import { levelUp_config } from "../../consts/CConst";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { PopType } from "../popView/PopView1";
import { Lvup_Type } from "./LvUpView";

const { ccclass, property } = cc._decorator;

/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
@ccclass
export default class LvUpPopView extends BasePanel {
    @property(cc.Button)
    btn_video: cc.Button = null;
    @property(cc.Node)
    btn_lvUp: cc.Node = null;
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Label)
    needGoldLb: cc.Label = null;
    @property(cc.Sprite)
    currentIcon: cc.Sprite = null;
    @property(cc.Sprite)
    nextIcon: cc.Sprite = null;
    @property(cc.Label)
    currentLv: cc.Label = null;
    @property(cc.Label)
    nextLv: cc.Label = null;
    @property(cc.Label)
    cDescLb: cc.Label = null;
    @property(cc.Label)
    nDescLb: cc.Label = null;
    @property(cc.Label)
    titleLb: cc.Label = null;

    @property(cc.Label)
    proLb: cc.Label = null;
    @property(cc.Label)
    xingfuLb: cc.Label = null;
    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;

    currentCfg: levelUp_config;
    nextCfg: levelUp_config;

    preVideoNum = 0;//已观看视频次数
    mData: Lvup_Type;
    typeIndex = 0;
    resList = ["field", "shelves", "cashier", "pipe", "wall", "road", "scarecrow", "warehouse", "fence"]
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_lvUp, this.onLvUp, this);

        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);

        this.initUI();
    }
    onDisable(): void {
    }

    startShow() {
        this.mData = this.inData[0];
        this.typeIndex = this.mData.tabIndex;
    }

    initUI() {
        this.currentLv.string = `当前${this.mData.level}级`;
        this.nextLv.string = `${this.mData.level + 1}级`;
        this.titleLb.string = this.mData.name + "升级";
        if (this.typeIndex == 1) {
            this.currentCfg = ConfigManager.getFieldCfgByType(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager.getFieldCfgByType(this.mData.type, this.mData.level + 1);
        } else if (this.typeIndex == 2) {
            this.currentCfg = ConfigManager.getShelveByType(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager.getShelveByType(this.mData.type, this.mData.level + 1);
        } else {
            this.currentCfg = ConfigManager.getPropById(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager.getPropById(this.mData.type, this.mData.level + 1);
        }

        this.cDescLb.string = "当前效果：" + this.mData.addDesc;
        this.nDescLb.string = "升级效果：" + this.nextCfg.add_desc;

        this.xingfuLb.string = "x" + this.currentCfg.reward;
        this.needGoldLb.string = this.currentCfg.money + "";

        MKUtils.loadSpriteFrame("texture/prop/" + this.resList[this.typeIndex - 1] + "/icon/" + `0${this.mData["level"]}`, (res) => {
            this.currentIcon.spriteFrame = res;
        });
        MKUtils.loadSpriteFrame("texture/prop/" + this.resList[this.typeIndex - 1] + "/icon/" + `0${this.mData["level"] + 1}`, (res) => {
            this.nextIcon.spriteFrame = res;
        });

        if (this.currentCfg.video_num > 1) {
            this.updateVideoPro();
        } else {
            this.pro.node.active = false;
            this.proLb.node.active = false;
        }
    }

    updateVideoPro() {
        this.preVideoNum = PlayerModel.getLvupVideoNum(this.currentCfg.id);
        this.pro.progress = this.preVideoNum / this.currentCfg.video_num;
        this.proLb.string = this.preVideoNum + "/" + this.currentCfg.video_num;
    }

    onLvUp() {
        if (this.currentCfg.money <= PlayerModel.getGold()) {
            PlayerModel.setGold(-this.currentCfg.money);
            this.lvUpComplete();
        } else {
            UIMananger.showPanel(UIType.popView1, null, null, UIEffectType.SCALE, PopType.GOLD2, 1000);
            this.onBtnCloseHandle();
        }
    }

    lvUpComplete() {
        switch (this.mData.tabIndex) {
            case 1:
                PlayerModel.changeFieldSkin(this.mData.index, this.mData.level + 1);
                break;
            case 2:
                PlayerModel.changeShelveSkin(this.mData.index, this.mData.level + 1);
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                PlayerModel.setUiLv(this.mData.tabIndex - 3);
                break;
        }
        UIMananger.showPanel(UIType.LvUpCompleteView, null, null, UIEffectType.SCALE, this.mData, this.nextCfg, this.currentCfg);
        EventDispath.send(EventType.LVUP_UPDATE);
        this.onBtnCloseHandle();
    }

    onBtnShowAd(): void {
        // if (PlayerModel.getAutoServiceLeftTimes() <= 0) {
        //     MKUtils.alertTips("今日自动服务已达上限，请明日继续使用");
        //     return;
        // }
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager.showAd(Global.VIDEO_CONFIG.video16);
    }

    onVideoBack(): void {
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        this.preVideoNum++;
        if (this.currentCfg.video_num == this.preVideoNum) {
            this.lvUpComplete();
            this.onBtnCloseHandle();
        } else {
            MKUtils.alertTips(`再看${this.currentCfg.video_num-this.preVideoNum}个视频就能升级啦`)
            PlayerModel.saveLvupVideoNum(this.currentCfg.id, this.preVideoNum);
            this.updateVideoPro();
        }
    }

    onBtnCloseHandle() {
        super.close();
    }
}

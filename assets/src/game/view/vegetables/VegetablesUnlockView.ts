// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import BasePanel from "../../../framework/ui/BasePanel";
import { crop_config } from "../../consts/CConst";
import Global from "../../consts/Global";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;

/**
 * 显示解锁作物界面
 * 调用示例：UIMananger.showPanel(UIType.VegetablesUnlockView, UIEffectType.SCALE, 2);// 2为作物id
 */
@ccclass
export default class VegetablesUnlockView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_video: cc.Node = null;
    @property(cc.Label)
    titleLb: cc.Label = null;
    @property(cc.Label)
    nameLb: cc.Label = null;
    @property(cc.Label)
    descLb: cc.Label = null;
    @property(cc.Label)
    cropDescLb: cc.Label = null;
    @property(cc.Sprite)
    uImgCrop: cc.Sprite = null;

    mId = -1;
    mCrop: crop_config;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_video, this.onVideo, this);
    }
    onDisable(): void {
    }

    startShow() {
        this.mId = this.inData[0];
        this.mCrop = ConfigManager.getCropById(this.mId);
        this.initUI();
    }

    initUI() {
        this.nameLb.string = this.mCrop.name;
        this.descLb.string = `解锁后就可以种植${this.mCrop.name}啦`;
        this.cropDescLb.string = "    " + this.mCrop.desc;
        this.titleLb.string = `解锁${this.mCrop.name}`;
        MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.mId}`, (res) => {
            this.uImgCrop.spriteFrame = res;
        });
    }
    onVideo() {
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager.showAd(Global.VIDEO_CONFIG.video11);
    }
    onVideoBack() {
        PlayerModel.setNewCrop(this.mId);
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath.send(EventType.VEGETABLES_UPDATE);
        MKUtils.alertTips(`${this.mCrop.name}已解锁，快去种植吧`)
        this.onBtnCloseHandle();
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

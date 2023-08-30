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
import Global from "../../consts/Global";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopGcView extends BasePanel {
    @property(cc.Sprite)
    gcIcon: cc.Sprite = null;
    @property(cc.Label)
    descLb: cc.Label = null;

    @property(cc.Label)
    titleLb: cc.Label = null;
    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Node)
    btnVideo: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:
    mId = 0;

    onLoad() {

    }

    protected onEnable(): void {
        // 关闭面板
        EventDispath.on(this.btnClose, this.onCloseHandle, this);
        EventDispath.on(this.btnOk, this.onClickHandle, this);
        EventDispath.on(this.btnVideo, this.onVideo, this);
    }

    startShow(): void {
        this.mId = this.inData[0];
        let cropCfg = ConfigManager.getCropById(this.mId);
        this.titleLb.string = cropCfg.name + "高产";
        this.descLb.string = "人品大爆发，" + cropCfg.name + "产量飙升，可收获";
        MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.mId}`, (res) => {
            this.gcIcon.spriteFrame = res;
        });
    }
    onClickHandle() {
        EventDispath.send(EventType.CROP_GC, 1);
        this.onCloseHandle();
    }
    onVideo() {
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager.showAd(Global.VIDEO_CONFIG.video12);
    }
    onVideoBack() {
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath.send(EventType.CROP_GC, 5);
        this.onVideoClose();
    }
    onVideoClose() {
        super.close1();
    }

    onCloseHandle() {
        super.close();
    }

    // update (dt) {}
}

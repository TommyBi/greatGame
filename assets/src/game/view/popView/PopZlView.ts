// 一建招揽

import SDKManager from "../../../framework/manager/SDKManager";
import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import BasePanel from "../../../framework/ui/BasePanel";
import { propType } from "../../consts/CConst";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PopZlView extends BasePanel {

    @property(cc.Label)
    numLb: cc.Label = null;
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

        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
    }

    startShow(): void {
        this.numLb.string = "" + ConfigManager.getPropById(propType.wall, PlayerModel.getUIConfig().walllv).add_num;
    }
    onClickHandle() {
        //升级围墙
        UIMananger.showPanel(UIType.LvUpView, null, null, UIEffectType.SCALE, 3);
        this.onCloseHandle();
    }
    onVideo() {
        SDKManager.showAd(Global.VIDEO_CONFIG.video1);
    }
    onVideoBack() {
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath.send(EventType.ONE_SOLICIT);
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

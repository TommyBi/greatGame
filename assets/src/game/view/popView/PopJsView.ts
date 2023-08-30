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
import { propType } from "../../consts/CConst";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;
//全体加速
@ccclass
export default class PopJsView extends BasePanel {
    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Node)
    btnVideo: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null;
    @property(cc.Label)
    numLb: cc.Label = null;


    onLoad() {

    }

    protected onEnable(): void {
        // 关闭面板
        EventDispath.on(this.btnClose, this.onCloseHandle, this);
        EventDispath.on(this.btnOk, this.onClickHandle, this);
        EventDispath.on(this.btnVideo, this.onVideo, this);
    }

    startShow(): void {
        let cfg = ConfigManager.getPropById(propType.pipe, PlayerModel.getUIConfig().pipelv);
        this.numLb.string = cfg.add_num + "分钟"
    }
    onClickHandle() {
        //升级水管
        UIMananger.showPanel(UIType.LvUpView, null, null, UIEffectType.SCALE, 3);
        this.onCloseHandle();
    }
    onVideo() {
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager.showAd(Global.VIDEO_CONFIG.video14);
    }
    onVideoBack() {
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath.send(EventType.CROP_ADD_SPEED);
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

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
 * 打开红包
 * TODO:
 */
@ccclass
export default class HardOpenView extends BasePanel {
    @property(cc.Node)
    btn_open: cc.Node = null;
    @property(cc.Label)
    numLb: cc.Label = null;

    mData;
    onEnable(): void {

        EventDispath.on(this.btn_open, this.onOpen, this);

        this.initUI();
    }

    startShow() {
        this.mData = this.inData[0];
    }

    initUI() {
        this.numLb.string = Number(this.mData.redBean).toFixed(2) + "元";
    }
    onOpen() {
        PlayerModel.setMoney(this.mData.userRedBean, this.mData.redBean);
        // if (this.isFirst) {
        this.onBtnCloseHandle();
    }

    onBtnCloseHandle() {
        super.close();
    }
}

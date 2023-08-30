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

const { ccclass, property } = cc._decorator;

/**
 * 幸福指数
 * TODO:
 */
@ccclass
export default class XfzsView extends BasePanel {
    @property(cc.Node)
    btn_help: cc.Node = null;
    @property(cc.Node)
    btn_order: cc.Node = null;
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Label)
    xingfuLb: cc.Label = null;

    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_help, this.onHelp, this);
        EventDispath.on(this.btn_order, this.onOrder, this);

        this.initUI();
    }
    onDisable(): void {
    }


    initUI() {
        this.xingfuLb.string = PlayerModel.getXfzs() + "";
    }


    onHelp() {
        UIMananger.showPanel(UIType.xfzsHelpView);
    }


    onOrder(): void {
        UIMananger.showPanel(UIType.orderQualityView);
    }

    onBtnCloseHandle() {
        super.close();
    }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import ComponentHelper from "../../../framework/tools/ComponentHelper";
import MKUtils from "../../../framework/tools/MkUtils";
import BasePanel from "../../../framework/ui/BasePanel";
import { levelUp_config } from "../../consts/CConst";
import Global from "../../consts/Global";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { Lvup_Type } from "./LvUpView";

const { ccclass, property } = cc._decorator;

/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
@ccclass
export default class LvUpCompleteView extends BasePanel {
    @property(cc.Node)
    btn_lvUp: cc.Node = null;
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Sprite)
    currentIcon: cc.Sprite = null;
    @property(cc.Label)
    currentLv: cc.Label = null;
    @property(cc.Label)
    cDescLb: cc.Label = null;

    @property(cc.Label)
    xingfuLb: cc.Label = null;


    mData: Lvup_Type;
    preConfig: levelUp_config;
    config: levelUp_config;
    resList = ["field", "shelves", "cashier", "pipe", "wall", "road", "scarecrow", "warehouse", "fence"]
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_lvUp, this.onLvUp, this);


        this.initUI();
    }
    onDisable(): void {
    }

    startShow() {
        this.mData = this.inData[0];
        this.config = this.inData[1];
        this.preConfig = this.inData[2];
    }

    initUI() {
        this.currentLv.string = `${this.preConfig.name}成功升至${this.mData.level + 1}级`;

        this.cDescLb.string = this.config.add_desc;

        this.xingfuLb.string = "x" + this.preConfig.reward;

        MKUtils.loadSpriteFrame("texture/prop/" + this.resList[this.mData.tabIndex - 1] + "/icon/" + `0${this.mData.level + 1}`, (res) => {
            this.currentIcon.spriteFrame = res;
        });
    }
    onLvUp() {
        PlayerModel.setXfzs(this.preConfig.reward);
        this.onBtnCloseHandle();
    }

    onBtnCloseHandle() {
        super.close();
    }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import BasePanel from "../../../framework/ui/BasePanel";
import Global from "../../consts/Global";
import PlayerModel from "../../datas/PlayerModel";

const { ccclass, property } = cc._decorator;

export enum PopType {
    FIELD,
    SHELVE,
    GOLD1,
    UNLOCK_ORDER,
    REFRESH_ORDER,
    GOLD2,
}

@ccclass
export default class PopRewardView extends BasePanel {
    @property(cc.Label)
    rewardLb: cc.Label = null;

    @property(cc.Label)
    titleLb: cc.Label = null;
    @property(cc.Label)
    descLb: cc.Label = null;
    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null;
    @property(cc.Node)
    hbIcon: cc.Node = null;
    @property(cc.Node)
    goldIcon: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:
    mType = 0;//面板类型，0除虫奖励，1宝箱奖励
    mData;
    onLoad() {

    }

    protected onEnable(): void {
        // 关闭面板
        EventDispath.on(this.btnClose, this.onCloseHandle, this);
        EventDispath.on(this.btnOk, this.onClickHandle, this);

        this.initUi();
    }

    startShow(): void {
        this.mType = this.inData[0];
        this.mData = this.inData[1];
    }
    initUi() {
        this.hbIcon.active = false;
        this.goldIcon.active = false;
        if (this.mType == 0) {
            this.titleLb.string = "除虫奖励";
            this.descLb.string = this.mData.name + "已经恢复生长，特此奖励";
        } else {
            this.titleLb.string = "宝箱奖励"
            this.descLb.string = "宝箱光芒大涨，恭喜你发现了";
        }
        if (this.mData.rewardType == 0) {
            this.goldIcon.active = true;
            this.rewardLb.string = "x" + Number(this.mData.rewardNum);
        } else {
            this.hbIcon.active = true;
            this.rewardLb.string = "x" + Number(this.mData.rewardNum).toFixed(2) + "元";
        }
    }
    onClickHandle() {
        if (this.mData.rewardType == 0) PlayerModel.setGold(this.mData.rewardNum);
        else PlayerModel.setMoney(this.mData.totalMoney, this.mData.rewardNum);
        this.onCloseHandle();
    }

    onCloseHandle() {
        super.close();
    }

    // update (dt) {}
}

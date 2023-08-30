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
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import EffectManager from "../../manager/EffectManager";

const { ccclass, property } = cc._decorator;

//获取作物，获得提示窗口
@ccclass
export default class PopGetCropView extends BasePanel {
    @property(cc.Label)
    rewardLb: cc.Label = null;

    @property(cc.Label)
    descLb: cc.Label = null;
    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:
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
        this.mData = this.inData[0];
    }
    initUi() {
        let cfg = ConfigManager.getCropById(this.mData.id);
        this.descLb.string = "恭喜获得" + this.mData.num + "个" + cfg.name;
        MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.mData.id}`, (res) => {
            this.icon.spriteFrame = res;
        });
        this.rewardLb.string = "x" + this.mData.num;
    }
    onClickHandle() {
        let startNode = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2)
        EffectManager.playCrop(startNode, this.mData.id);
        PlayerModel.checkAddOrder(this.mData.id, this.mData.num, () => {
            EventDispath.send(EventType.ORDER_CURRENT_CLOSE);
            // UIMananger.showPanel(UIType.orderSuccessView);
            EventDispath.send(EventType.ORDER_COMPLETE_UPDATE)
        }, () => {
            EventDispath.send(EventType.ORDER_CURRENT_UPDATE);
        })
        this.onCloseHandle();
    }

    onCloseHandle() {
        super.close();
    }

    // update (dt) {}
}

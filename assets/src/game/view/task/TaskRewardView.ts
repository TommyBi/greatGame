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
import EffectManager from "../../manager/EffectManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TaskRewardView extends BasePanel {

    @property([cc.Node])
    iconList: cc.Node[] = [];
    @property(cc.Node)
    btn_get: cc.Node = null;
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Label)
    rewardLab: cc.Label = null;
    @property(cc.Label)
    xfzsLab: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:
    data;
    cropId = 0;
    onEnable(): void {
        // 领取
        EventDispath.on(this.btn_get, this.onGet, this);
        // 退出
        EventDispath.on(this.btn_close, this.onGet, this);

        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        this.initUI();
    }
    initUI() {
        if (this.data.taskId == 1) {
            
            this.rewardLab.string = "+" + Number(this.data.redBean).toFixed(2) + "元";
            this.iconList[0].active = true;
        } else if (this.data.taskId == 2) {
            this.rewardLab.string = "+" + this.data.gold;
            this.iconList[1].active = true;
        } else if (this.data.taskId == 3) {
            this.rewardLab.string = "+3";
            this.cropId = PlayerModel.getCurrentOrderCrop();
            this.iconList[2].active = true;

            MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.cropId}`, (res) => {
                this.iconList[2].getComponent(cc.Sprite).spriteFrame = res;
            });
        }
        this.xfzsLab.string = "+" +this.data.xfzs;
    }
    startShow() {
        this.data = this.inData[0]
    }
    //领取奖励
    onGet() {

        if (this.data.taskId == 1) {
            PlayerModel.setMoney(this.data.userRedBean, this.data.redBean)
        } else if (this.data.taskId == 2) {
            PlayerModel.setGold(this.data.gold)
        } else if (this.data.taskId == 3) {
            let startNode = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2)
            EffectManager.playCrop(startNode, this.cropId);
            PlayerModel.setHouseAddCrop(this.cropId, 3);

            PlayerModel.checkAddOrder(this.cropId, 3, () => {
                // UIMananger.showPanel(UIType.orderSuccessView);
                EventDispath.send(EventType.ORDER_COMPLETE_UPDATE)
            })
            // PlayerModel.setGold(this.data.gold)
            //增加作物
        }

        PlayerModel.setXfzs(this.data.xfzs);
        this.onClose();

    }
    onVideoBack(): void {
        // PlayerModel.setGold(this.data["money"] * 2, cc.v2(cc.winSize.width / 2, cc.winSize.height / 2))
    }
    onCloseHandler() {
        EventDispath.send(EventType.TASK_ITEM_CHANG, 0);
        this.onClose();
    }
    onClose() {
        super.close();
    }

    // update (dt) {}
}

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
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import AItemRenderer from "./AItemRenerer";

const { ccclass, property } = cc._decorator;
@ccclass
export default class TaskItem extends AItemRenderer<string> {

    @property(cc.Node)
    btn1: cc.Node = null;
    @property(cc.Node)
    btn2: cc.Node = null;
    @property(cc.Label)
    descLb: cc.Label = null;
    @property(cc.Label)
    rewardLb: cc.Label = null;
    @property(cc.Sprite)
    taskIcon: cc.Sprite = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property([cc.SpriteFrame])
    frameList: cc.SpriteFrame[] = [];
    // onLoad () {}

    start() {

    }

    protected dataChanged(): void {
        console.log(this.data);
        this.initUI();
    }
    initUI() {
        this.btn1.active = this.btn2.active = false;
        this.descLb.string = this.data.info + "(" + this.data.userTimes + "/" + this.data.times + ")";
        if (this.index == 0) {
            this.rewardLb.string = "少量红包"
        } else if (this.index == 1) {
            this.rewardLb.string = "少量钞票"
        } else if (this.index == 2) {
            this.rewardLb.string = "随机作物 ×3"
        }

        this.taskIcon.spriteFrame = this.frameList[this.index];
        this.icon.spriteFrame = this.frameList[this.index];

        if (this.data.userTimes >= this.data.times) {
            this.btn1.active = true;
        } else {
            this.btn2.active = true;
        }
    }

    onGet() {

        EventDispath.addEventListener(EventType.TASK_COMPLETE_BACK, this.onVideoBack, this);
        SDKManager.toFinishTask(this.data.taskId);

    }
    onVideoBack(data) {
        EventDispath.removeByEvent(EventType.TASK_COMPLETE_BACK, this.onVideoBack, this);
        let xfzs = 3;
        if (this.data.taskId == 1) {
            UIMananger.showPanel(UIType.taskRewardView, null, null, UIEffectType.SCALE, { taskId: this.data.taskId, redBean: data.redBean, userRedBean: data.userRedBean,xfzs:xfzs })

        } else if (this.data.taskId == 2) {
            let gold = MKUtils.randomNM(300,500)
            UIMananger.showPanel(UIType.taskRewardView, null, null, UIEffectType.SCALE, { taskId: this.data.taskId, gold: gold,xfzs:xfzs })
        } else if (this.data.taskId == 3) {
            
            UIMananger.showPanel(UIType.taskRewardView, null, null, UIEffectType.SCALE, { taskId: this.data.taskId, cropId: 1,xfzs:xfzs })
        }
        
        EventDispath.send(EventType.TASK_UPDATE);
    }
}

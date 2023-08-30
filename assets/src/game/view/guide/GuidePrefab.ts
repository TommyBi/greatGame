// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import JSHelper from "../../../framework/helper/JSHelper";
import SDKManager from "../../../framework/manager/SDKManager";
import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import ComponentHelper from "../../../framework/tools/ComponentHelper";
import MKUtils from "../../../framework/tools/MkUtils";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import LvUpView from "../lvUp/LvUpView";
import GameMainView from "../main/GameMainView";
import TopPrefab from "../main/TopPrefab";
import OrderGetScuessView from "../order/OrderGetScuessView";
import OrderRewardView from "../order/OrderRewardView";
import OrderSuccessView from "../order/OrderSuccessView";
import OrderView from "../order/OrderView";
import VegetablesView from "../vegetables/VegetablesView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GuidePrefab extends cc.Component {

    @property(cc.Mask)
    mask1: cc.Mask = null;
    @property(cc.Mask)
    mask2: cc.Mask = null;
    @property(cc.Mask)
    mask3: cc.Mask = null;
    @property(cc.Mask)
    mask4: cc.Mask = null;
    @property(cc.Node)
    dialog: cc.Node = null;
    @property(cc.Node)
    goOn: cc.Node = null;
    @property(cc.Node)
    shou: cc.Node = null;
    @property(cc.Node)
    lock: cc.Node = null;
    @property(cc.Label)
    descLb: cc.Label = null;

    isWrite = false;
    writeInterval = 0.05;
    writeDt = 0
    descArr = [];
    descList = [
        "欢迎来到幸福集市，快去接取订单赚钱吧",
        "点击接取你的第一个订单吧",
        "",
        "订单需要玉米和红薯，快去种植吧",
        "点击种下玉米吧",
        "订单还需要红薯，继续种植吧",
        "点击种下红薯吧",
        "作物成长有点慢，点击加速作物收获吧",
        "现在可以收获玉米啦",
        "继续收获红薯吧",
        "订单终于完成啦，快领取你的订单奖励吧",
        "",
        "",
        "继续接单还会出现大额订单哦，奖励更加丰厚，努力赚钱提现吧",
    ]
    canTouch = true;
    initPoint: cc.Vec2;
    onLoad() {
        this.node.setContentSize(cc.winSize);
        this.initPoint = this.dialog.getPosition();
    }

    start() {
        // this.dialogAnim();
        this.updateStep();
        EventDispath.addEventListener(EventType.GUIDE_Hide, this.hide, this);
        EventDispath.addEventListener(EventType.GUIDE_UPDATE, this.nextStep, this);
        EventDispath.on(this.goOn, this.nextStep, this, 0.5, false);
    }

    dialogAnim() {
        this.hideShou();
        this.dialog.active = true;
        // this.descLb.string = "";
        // this.dialog.y = -1800;
        // this.dialog.stopAllActions();
        // let p = this.dialog.getPosition();
        // let y = this.pointYs[PlayerModel.guideStep]
        // let dis = MKUtils.twoPointDistance(p, cc.v2(p.x, y));
        // this.dialog.runAction(cc.sequence(cc.moveTo(dis / 1500, 0, y).easing(cc.easeBackOut()), cc.callFunc(() => {
        this.updateDesc();
        this.canTouch = true;
        // })));
    }
    hide() {
        this.mask1.node.active = false;
        this.mask2.node.active = false;
        this.mask3.node.active = false;
        this.mask4.node.active = false;
        this.dialog.active = false;
        this.hideShou();
    }
    hideShou() {
        this.shou.stopAllActions();
        this.shou.active = false;
        this.goOn.active = false;
        this.descLb.string = "";
    }
    nextStep() {
        PlayerModel.guideStep = 1;
        console.log("引导步骤" + PlayerModel.guideStep);
        this.updateStep();
    }
    updateStep() {
        this.hide();
        let p1, p2;
        switch (PlayerModel.guideStep) {
            case 0:
                this.mask1.node.active = true;
                this.dialogAnim();
                let topPrefab = UIMananger.top
                p1 = topPrefab.getComponent(TopPrefab).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.mask1.node.setPosition(p2);

                // this.shou.active = true;
                // this.shou.setPosition(p2.x, p2.y);
                // ComponentHelper.setHeartAction(this.shou);
                break;
            case 1:
                this.dialogAnim();
                this.mask2.node.active = true;
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y - 300);
                let order = MKUtils.findNodeByName(cc.director.getScene(), "OrderView")
                p1 = order.getComponent(OrderView).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.mask2.node.setPosition(p2);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y - 100);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 2:
                let get = MKUtils.findNodeByName(cc.director.getScene(), "OrderGetScuessView")
                p1 = get.getComponent(OrderGetScuessView).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 300);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 3:
                this.dialogAnim();
                let game = MKUtils.findNodeByName(cc.director.getScene(), "GameMainView")
                p1 = game.getComponent(GameMainView).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 500);

                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x, p2.y + 100);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y + 150);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 4:
                this.dialogAnim();
                let plant = MKUtils.findNodeByName(cc.director.getScene(), "VegetablesView")
                p1 = plant.getComponent(VegetablesView).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.mask4.node.active = true;
                this.mask4.node.setPosition(p2.x, p2.y);


                this.dialog.setPosition(this.initPoint.x, this.initPoint.y);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 5:
                this.dialogAnim();
                let game1 = MKUtils.findNodeByName(cc.director.getScene(), "GameMainView")
                p1 = game1.getComponent(GameMainView).getGuidePoint1();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 500);

                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x, p2.y + 100);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y + 150);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 6:
                this.dialogAnim();
                let plant1 = MKUtils.findNodeByName(cc.director.getScene(), "VegetablesView")
                p1 = plant1.getComponent(VegetablesView).getGuidePoint1();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.mask4.node.active = true;
                this.mask4.node.setPosition(p2.x, p2.y);


                this.dialog.setPosition(this.initPoint.x, this.initPoint.y);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 7:
                this.dialogAnim();
                let game2 = MKUtils.findNodeByName(cc.director.getScene(), "GameMainView")
                p1 = game2.getComponent(GameMainView).getGuideJsPoint();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.dialog.setPosition(this.initPoint.x, this.initPoint.y);

                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x + 30, p2.y);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 8:
                this.dialogAnim();
                let game3 = MKUtils.findNodeByName(cc.director.getScene(), "GameMainView")
                p1 = game3.getComponent(GameMainView).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 500);

                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x, p2.y + 100);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y + 150);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 9:
                this.dialogAnim();
                let game4 = MKUtils.findNodeByName(cc.director.getScene(), "GameMainView")
                p1 = game4.getComponent(GameMainView).getGuidePoint1();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 500);

                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x, p2.y + 100);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y + 50);
                ComponentHelper.setHeartAction(this.shou);
                break;
            case 10:
                this.mask1.node.active = true;
                this.dialogAnim();
                let top = UIMananger.top
                p1 = top.getComponent(TopPrefab).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.mask1.node.setPosition(p2);

                this.shou.active = true;
                this.shou.setPosition(p2.x + 300, p2.y);
                ComponentHelper.setHeartAction(this.shou);

                break;
            case 11:
                // // MKUtils.setNodeDelay(this.node, 2, () => {
                this.dialogAnim();
                let v = MKUtils.findNodeByName(cc.director.getScene(), "OrderSuccessView")
                p1 = v.getComponent(OrderSuccessView).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.dialog.setPosition(this.initPoint.x, this.initPoint.y - 600);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper.setHeartAction(this.shou);

                // })
                break;
            case 12:
                // MKUtils.setNodeDelay(this.node, 2, () => {
                let vg = MKUtils.findNodeByName(cc.director.getScene(), "OrderRewardView")
                p1 = vg.getComponent(OrderRewardView).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);

                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper.setHeartAction(this.shou);
                // })
                break;
            case 13:

                this.lock.active = true;

                // this.mask1.node.active = true;
                this.dialogAnim();

                this.dialog.setPosition(this.initPoint.x, this.initPoint.y);

                this.shou.active = true;
                this.shou.setPosition(this.goOn.getPosition());
                ComponentHelper.setHeartAction(this.shou);

                this.goOn.active = true;

                break;
            case 14:
                UIMananger.showPanel(UIType.loginDay);
                PlayerModel.guideStep = -100;
                this.lock.active = false;
                EventDispath.send(EventType.MAIN_LOCK, false);
                PlayerModel.guideState = 1;
                EventDispath.send(EventType.GUIDE_COMPLETE);

                this.node.removeFromParent();
                this.node.destroy();
                break;
        }
    }

    updateDesc() {
        let str = this.descList[PlayerModel.guideStep];
        if (str != "") {
            this.dialog.active = true;
            this.descArr = [];
            this.descArr = str.split("");
            console.log("引导描述：", this.descArr)
            this.isWrite = true;
        } else {
            this.dialog.active = false;
        }
    }

    update(dt) {
        if (!this.isWrite || dt > 0.5) return;
        this.writeDt += dt;
        if (this.writeDt > this.writeInterval) {
            this.writeDt = 0;
            if (!this.descArr.length) {
                this.isWrite = false;
                return;
            }
            this.descLb.string += this.descArr.shift();
        }
    }

}

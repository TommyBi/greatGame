import JSHelper from "../../../framework/helper/JSHelper";
import SDKManager from "../../../framework/manager/SDKManager";
import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import ComponentHelper from "../../../framework/tools/ComponentHelper";
import MKUtils from "../../../framework/tools/MkUtils";
import Utils from "../../../framework/tools/Utils";
import { crop_config } from "../../consts/CConst";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { PopType } from "../popView/PopView1";
import TopOrderPrefab from "./TopOrderPrefab";

const { ccclass, property } = cc._decorator;
@ccclass
export default class TopPrefab extends cc.Component {

    @property(cc.Label)
    moneyLab: cc.Label = null;
    @property(cc.Label)
    goldLab: cc.Label = null;
    @property(cc.Node)
    addGold: cc.Node = null;
    @property(cc.Label)
    degreeLb: cc.Label = null;
    @property(cc.Label)
    lvLb: cc.Label = null;
    @property(cc.Node)
    lvProBg: cc.Node = null;
    @property(cc.Label)
    lvProLb: cc.Label = null;

    @property(cc.Node)
    settingBtn: cc.Node = null;
    @property(cc.Sprite)
    headIcon: cc.Sprite = null;

    @property(cc.Node)
    flyMoney: cc.Node = null;
    @property(cc.Node)
    flyGold: cc.Node = null;
    @property(cc.Node)
    flyXfzs: cc.Node = null;
    @property(cc.Node)
    orderGp: cc.Node = null;
    @property(cc.Prefab)
    topOrder: cc.Prefab = null;

    //money动画开启
    _startMoney: number = 0;
    _endMoney: number = 0;
    _curTimer: number = 0;
    _endTimer: number = Utils._FT(10);
    // LIFE-CYCLE CALLBACKS:

    orderPrefab: TopOrderPrefab;

    onLoad() {

        this.initOrder();

    }
    onEnable(): void {
        EventDispath.addEventListener(EventType.UPDATE_MONEY, this.updateTopMoney, this);
        EventDispath.addEventListener(EventType.UPDATE_GOLD, this.updateGold, this);
        EventDispath.addEventListener(EventType.UPDATE_XFZS, this.updateXfzs, this);

        EventDispath.addEventListener(EventType.LEVEL_UPDATE, this.updateLv, this);

        EventDispath.addEventListener(EventType.SDK_WXBIND, this.updateHead, this);
        this.updateHead();
    }
    onDisable(): void {
    }

    start() {
        this.flyMoney.y = - 15;
        this.flyGold.y = - 15;
        this.flyXfzs.y = - 450;
        this.initData();
    }
    initData() {
        this.updateLv();
        this.moneyLab.string = `${PlayerModel.getMoney()}元`;
        this.goldLab.string = `${PlayerModel.getGold()}`;
        this.degreeLb.string = `${PlayerModel.getXfzs()}`;
        // this.updateTixianTips();
    }

    updateHead() {
        let headUrl = SDKManager.getUserIcon();
        // let headUrl = "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKM0iaGwI4LEdCUicZuIgmrm4zXNMlDHYq7XnA36qKUX5n6ibzjtWgPj7ocPgE2ialhJ2eOG9NgTXam8A/132";
        if (headUrl && headUrl != "") {
            let self = this;
            cc.assetManager.loadRemote(headUrl, { ext: '.png' }, function (err, texture: cc.Texture2D) {
                if (err) {
                    console.log("头像加载失败", headUrl);
                    return;
                }
                self.headIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            });
        }
    }
    //设置
    openSetting() {
        JSHelper.playClickEffect();
        UIMananger.showPanel(UIType.settingView);
    }
    /** 幸福指数 */
    openXfzs(): void {
        JSHelper.playClickEffect();
        UIMananger.showPanel(UIType.xfzsView);
    }
    /** 增加钞票 */
    openAddGold(): void {
        JSHelper.playClickEffect();
        // UIMananger.showPanel(UIType.ManyiView);
    }
    openLevel() {
        UIMananger.showPanel(UIType.levelView);
    }

    //提现
    openTixian() {
        JSHelper.playClickEffect();
        SDKManager.openWithdraw();
    }
    //领取钞票
    openGoldVAiew() {
        JSHelper.playClickEffect();
        UIMananger.showPanel(UIType.popView1, null, null, UIEffectType.SCALE, PopType.GOLD1, 1000);
    }
    updateTopMoney(data) {
        //ActionFloat后续扩展到引擎上面 TODO
        this.moneyLab.string = `${PlayerModel.getMoney()}元`;
        if (Utils.isUndefined(data)) {
            console.error("TopPrefab updateTopMoney data is undefined");
            return;
        }
        if (data != 0) this.flyRewardLabel(Number(data));

        // this.updateTixianTips();

    }
    updateLv() {
        let data = SDKManager.getJSLevelInfo();
        console.log("获取等级相关信息", data);
        this.lvProBg.stopAllActions();
        this.lvProBg.angle = 0;
        this.lvLb.string = "Lv." + data.jsLevel;
        if (data.jxOrderNum == 0 && data.userJxOrderNum == 0) {
            this.lvProBg.active = false;
            this.lvProLb.node.active = false;
        } else {

            if (data.jxOrderNum != 0 && data.userJxOrderNum >= data.jxOrderNum) {
                this.lvProLb.string = "可升级"
                ComponentHelper.setRotation(this.lvProBg);
            } else {
                this.lvProLb.string = Math.floor(data.userJxOrderNum / data.jxOrderNum * 100) + "%";
            }
        }
    }
    updateGold(addValue) {

        if (addValue > 0) this.flyGoldLb(addValue);
        PlayerModel.changeGold(addValue);
        this.goldLab.string = `${PlayerModel.getGold()}`;
    }
    updateXfzs(addValue) {
        this.degreeLb.string = `${PlayerModel.getXfzs()}`;
        this.flyXfzsLb(addValue);
    }

    checkCropUnlock() {
        let list = ConfigManager.crop;
        let newCrop: crop_config;
        let unLockList = PlayerModel.getUnlockCrop();
        for (let i = 0; i < list.length; i++) {
            let crop = list[i];
            let index = unLockList.indexOf(crop.id)
        }
        if (newCrop) {
            UIMananger.showPanel(UIType.VegetablesUnlockView, null, null, UIEffectType.SCALE, newCrop.id)
            PlayerModel.setNewCrop(newCrop.id);
        }
        console.log("新解锁植物", newCrop);
    }
    update(dt: number): void {
    }
    flyRewardLabel(num) {
        this.flyMoney.stopAllActions();
        this.flyMoney.active = true;
        this.flyMoney.opacity = 255;
        this.flyMoney.getComponent(cc.Label).string = `+${num.toFixed(2)}元`;
        this.flyMoney.runAction(cc.sequence(
            cc.moveTo(Utils._FT(30), cc.v2(this.flyMoney.x, 100)),
            cc.fadeOut(Utils._FT(15)),
            cc.callFunc(() => {
                this.flyMoney.active = false;
                this.flyMoney.y = 45;
            })
        ));
    }
    flyGoldLb(num) {
        this.flyGold.stopAllActions();
        this.flyGold.active = true;
        this.flyGold.opacity = 255;
        if (num > 0) this.flyGold.getComponent(cc.Label).string = `+${num}`;
        else this.flyGold.getComponent(cc.Label).string = `${num}`;

        this.flyGold.runAction(cc.sequence(
            cc.moveTo(Utils._FT(30), cc.v2(this.flyGold.x, 100)),
            cc.fadeOut(Utils._FT(15)),
            cc.callFunc(() => {
                this.flyGold.active = false;
                this.flyGold.y = 45;
            })
        ));
    }
    flyXfzsLb(num) {
        this.flyXfzs.stopAllActions();
        this.flyXfzs.active = true;
        this.flyXfzs.opacity = 255;
        this.flyXfzs.getComponent(cc.Label).string = `+${num}`;
        this.flyXfzs.runAction(cc.sequence(
            cc.moveTo(Utils._FT(30), cc.v2(this.flyXfzs.x, -400)),
            cc.fadeOut(Utils._FT(15)),
            cc.callFunc(() => {
                this.flyXfzs.active = false;
                this.flyXfzs.y = - 450;
            })
        ));
    }

    initOrder() {
        let order = cc.instantiate(this.topOrder);
        this.orderGp.addChild(order);
        this.orderPrefab = order.getComponent(TopOrderPrefab);
    }

    getGuidePoint() {
        let p = this.orderGp.convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    }
}

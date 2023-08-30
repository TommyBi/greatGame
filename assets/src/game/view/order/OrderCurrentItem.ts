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
import ConfigManager from "../../manager/ConfigManager";
import AItemRenderer from "../task/AItemRenerer";

const { ccclass, property } = cc._decorator;
@ccclass
export default class OrderCurrentItem extends AItemRenderer<string> {


    @property(cc.Label)
    nameLb: cc.Label = null;
    @property(cc.Label)
    proLb: cc.Label = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.Node)
    ywcTips: cc.Node = null;
    @property(cc.Node)
    btn_go: cc.Node = null;
    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;

    // onLoad () {}

    start() {

    }

    protected dataChanged(): void {
        // console.log(this.data);
        this.initUI();
    }
    initUI() {
        if (this.data.cropId == 100) {
            this.nameLb.string = "招待顾客";
        } else {
            let base = ConfigManager.getCropById(this.data.cropId);
            this.nameLb.string = base.name;
        }
        MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.data.cropId}`, (res) => {
            this.icon.spriteFrame = res;
        });
        this.pro.progress = this.data.num / this.data.target;
        if (this.data.num >= this.data.target) {
            this.ywcTips.active = true;
            this.proLb.string = this.data.target + "/" + this.data.target;
        } else {
            this.proLb.string = this.data.num + "/" + this.data.target;
            this.btn_go.active = true;
        }
    }
    onGo() {
        EventDispath.send(EventType.ORDER_CLOSE)
        EventDispath.send(EventType.ORDER_CURRENT_CLOSE)
        if (this.data.cropId == 100) {
            UIMananger.showPanel(UIType.zhaoDaiView, null, null, UIEffectType.SCALE, this.data);
        } else {
            if (PlayerModel.checkCropUnlock(this.data.cropId)) {

                UIMananger.showPanel(UIType.getCropView, null, null, UIEffectType.SCALE, this.data);
            } else {
                UIMananger.showPanel(UIType.VegetablesUnlockView, null, null, UIEffectType.SCALE, this.data.cropId)
            }
        }

    }
}

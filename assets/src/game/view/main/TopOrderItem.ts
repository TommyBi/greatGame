// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import MKUtils from "../../../framework/tools/MkUtils";
import { order_config } from "../../consts/CConst";
import UIType from "../../consts/UIType";
import { orderCache } from "../../datas/PlayerData";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TopOrderItem extends cc.Component {

    @property(cc.Label)
    nameLb: cc.Label = null;
    @property(cc.Label)
    numLb: cc.Label = null;
    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.Node)
    wc: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    mData;
    start() {

    }
    setData(data) {
        this.mData = data;

        this.changeData();
    }

    changeData() {
        if (this.mData.cropId == 100) {
            this.nameLb.string = "招待顾客";
        } else {
            let base = ConfigManager.getCropById(this.mData.cropId);
            this.nameLb.string = base.name;
        }
        if (this.mData.num >= this.mData.target) {
            this.wc.active = true;
            this.numLb.node.active = false;
        } else {
            this.wc.active = false;
            this.numLb.node.active = true;
            this.numLb.string = this.mData.num + "/" + this.mData.target;
        }
        MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.mData.cropId}`, (res) => {
            this.icon.spriteFrame = res;
        });

    }
    onClick() {
        if (PlayerModel.guideStep >= 0) return;
        if (this.mData.cropId == 100) {
            UIMananger.showPanel(UIType.zhaoDaiView, null, null, UIEffectType.SCALE, this.mData);

        } else {
            if (PlayerModel.checkCropUnlock(this.mData.cropId)) {

                UIMananger.showPanel(UIType.getCropView, null, null, UIEffectType.SCALE, this.mData);
            } else {
                UIMananger.showPanel(UIType.VegetablesUnlockView, null, null, UIEffectType.SCALE, this.mData.cropId)
            }

        }
    }

    // update (dt) {}
}

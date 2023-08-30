// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import { crop_config } from "../../consts/CConst";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import AItemRenderer from "../task/AItemRenerer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class VegetablesItem extends AItemRenderer<string> {



    @property(cc.Node)
    btn: cc.Node = null;
    @property(cc.Node)
    orderTips: cc.Node = null;

    @property(cc.Sprite)
    uImgCrop: cc.Sprite = null;

    @property(cc.Label)
    ulabelName: cc.Label = null;

    @property(cc.Node)
    uImgLock: cc.Node = null;

    @property(cc.Node)
    uImgMask: cc.Node = null;

    isLock: boolean = true;         // 当前item是否未解锁

    onLoad() {
        // EventDispath.on(this.node, this.onSelect, this);
        // this.setTouchCallback(this.onSelect, this);
    }

    protected dataChanged(): void {
        // console.log(this.data);
        this.initUI();
    }
    initUI() {

        this.orderTips.active = false;

        if (this.data.isOrder) this.orderTips.active = true;

        MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.data["id"]}`, (res) => {
            this.uImgCrop.spriteFrame = res;
        });
        this.ulabelName.string = `${this.data.name}`;

        this.isLock = this.data.isLock;
        this.btn.active = this.isLock ? false : true;
        this.uImgLock.active = this.isLock ? true : false;
        this.uImgMask.active = this.uImgLock.active;

    }

    // setData(data: crop_config, haveIds: number[]) {
    //     MKUtils.loadSpriteFrame("texture/crop/singleIcon/" + `${data.id}`, (res) => {
    //         this.uImgCrop.spriteFrame = res;
    //     });
    //     this.ulabelName.string = `${data.name}`;
    //     this.ulabelCount.string = `${data.money}`;

    //     this.isLock = haveIds.indexOf(data.id) == -1;
    //     this.uImgLock.enabled = this.isLock ? true : false;
    //     this.uImgMask.enabled = this.uImgLock.enabled;

    //     // 是否是热卖
    //     let lastId = haveIds.length == 0 ? -1 : haveIds[haveIds.length - 1];
    //     let isHot = data.id == lastId;
    //     this.uImgFlag.enabled = isHot;
    //     this.uImgBgHot.enabled = isHot;
    //     this.uImgBg.enabled = !isHot;

    //     this.cropCfg = data;
    // }

    onSelect(): void {
        if (this.isLock) {
            this.onShowInfo();
            return;
        }
        EventDispath.send(EventType.CROP_PLANT, this.data.id);
        if (PlayerModel.guideStep >= 0) {
            EventDispath.send(EventType.GUIDE_UPDATE)
        }
    }

    /** 查看作物详情 */
    onShowInfo(): void {
        // 显示作物详情
        UIMananger.showPanel(UIType.VegetablesUnlockView, null, null, UIEffectType.SCALE, this.data.id);
    }

    onDestroy() {
        EventDispath.removeEventListeners(this);
    }
}

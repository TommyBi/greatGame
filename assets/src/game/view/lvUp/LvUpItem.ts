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
import MKUtils from "../../../framework/tools/MkUtils";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import { PopType } from "../popView/PopView1";
import AItemRenderer from "../task/AItemRenerer";

const { ccclass, property } = cc._decorator;

/** 单个元素的详细条目 */
@ccclass
export default class LvUpItem extends AItemRenderer<string> {

    @property(cc.Sprite)
    icon: cc.Sprite = null;     // 物品图标

    @property(cc.Node)
    lvNode: cc.Node = null;
    @property(cc.Node)
    btn_lvUp: cc.Node = null;
    @property(cc.Node)
    btn_build: cc.Node = null;
    @property(cc.Node)
    maxLv: cc.Node = null;      // 是否最高级

    @property(cc.Label)
    addLb: cc.Label = null;    //加成描述
    @property(cc.Label)
    nameLb: cc.Label = null;
    @property(cc.Label)
    lvLb: cc.Label = null;


    onLoad() {
    }
    protected dataChanged(): void {
        // console.log(this.data);
        this.initUI();
    }
    initUI() {
        this.btn_build.active = false;
        this.btn_lvUp.active = false;
        this.maxLv.active = false;
        switch (this.data.tabIndex) {
            case 1:
                MKUtils.loadSpriteFrame("texture/prop/field/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
            case 2:
                MKUtils.loadSpriteFrame("texture/prop/shelves/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
            case 3:
                MKUtils.loadSpriteFrame("texture/prop/cashier/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
            case 4:
                MKUtils.loadSpriteFrame("texture/prop/pipe/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
            case 5:
                MKUtils.loadSpriteFrame("texture/prop/wall/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
            case 6:
                MKUtils.loadSpriteFrame("texture/prop/road/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
            case 7:
                MKUtils.loadSpriteFrame("texture/prop/scarecrow/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
            case 8:
                MKUtils.loadSpriteFrame("texture/prop/warehouse/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
            case 9:
                MKUtils.loadSpriteFrame("texture/prop/fence/icon/" + `0${this.data["level"]}`, (res) => {
                    this.icon.spriteFrame = res;
                });
                break;
        }
        this.nameLb.string = `${this.data.name}`;
        if (this.data.level == 0) {
            this.lvLb.node.active = false;
            this.lvNode.active = false;
            this.btn_build.active = true;
            this.addLb.string = "未扩建";
        } else {
            this.addLb.string = this.data.addDesc;
            if (this.data.isMaxLv) {
                this.maxLv.active = true;
            } else {
                this.btn_lvUp.active = true;
            }
            this.lvLb.node.active = true;
            this.lvNode.active = true;
            this.lvLb.string = this.data.level + "级";
        }

        // this.isLock = this.data.isLock;
        // this.uImgLock.enabled = this.isLock ? true : false;
        // this.uImgMask.enabled = this.uImgLock.enabled;

    }

    onBuild() {
        // MKUtils.alertTips("扩建")
        if (this.data.tabIndex == 1) {
            EventDispath.addEventListener(EventType.VIDEO_BACK, this.onBuildBack, this);
            // let id = this.config.id + "01"
            // SDKManager.getUnlockConfig(7, Number(id));
            UIMananger.showPanel(UIType.popView1, null, () => {
                EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onBuildBack, this);
            }, UIEffectType.SCALE, PopType.FIELD);
        }else if (this.data.tabIndex == 2) {
            EventDispath.addEventListener(EventType.VIDEO_BACK, this.onBuildBack, this);
            // let id = this.config.id + "01"
            // SDKManager.getUnlockConfig(7, Number(id));
            UIMananger.showPanel(UIType.popView1, null, () => {
                EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onBuildBack, this);
            }, UIEffectType.SCALE, PopType.SHELVE);
        }
    }

    onLvUp(): void {
        // MKUtils.alertTips("升级")
        UIMananger.showPanel(UIType.LvUpPopView, null, () => {
        }, UIEffectType.SCALE, this.data);
        // EventDispath.addEventListener(EventType.PROP_INFO, this.selectBack, this);
    }
    onBuildBack() {
        if (this.data.tabIndex == 1) {
            EventDispath.send(EventType.FIELD_BUILD, this.data.index);
        }else if (this.data.tabIndex == 2) {
            EventDispath.send(EventType.SHELVE_BUILD, this.data.index);
        }
        
        EventDispath.send(EventType.LVUP_UPDATE);
        // EventDispath.removeByEvent(EventType.PROP_INFO, this.selectBack, this);
    }

    onDestroy() {
        EventDispath.removeEventListeners(this);
    }

}

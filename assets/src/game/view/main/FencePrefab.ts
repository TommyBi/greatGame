// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import PlayerModel from "../../datas/PlayerModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FencePrefab extends cc.Component {

    @property(cc.Sprite)
    img1: cc.Sprite = null;
    @property(cc.Sprite)
    img2: cc.Sprite = null;
    @property(cc.Node)
    effNode: cc.Node = null;

    onLoad() {
        this.effNode.active = false;
        EventDispath.addEventListener(EventType.CHANGE_FENCE, this.changeSkin, this);
    }

    start() {

    }

    setData(id = 1) {
        this.changeSkin(0);
    }
    changeSkin(isLvUp = 1) {
        let id = PlayerModel.getUIConfig().fencelv;
        if (id == 0) return;
        MKUtils.loadSpriteFrame("texture/prop/fence/" + `0${id}_01`, (res) => {
            this.img1.spriteFrame = res;
            if (isLvUp) {
                let arr = this.effNode.children
                this.effNode.active = true;
                for (let i = 0; i < arr.length; i++) {
                    let eff = arr[i].getComponent(sp.Skeleton);
                    eff.animation = "animation"
                }

                MKUtils.setNodeDelay(this.node, 5, () => {
                    this.effNode.active = false;
                })
            }
        });
        MKUtils.loadSpriteFrame("texture/prop/fence/" + `0${id}_02`, (res) => {
            this.img2.spriteFrame = res;
        });
    }
}

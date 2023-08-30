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
export default class WallPrefab extends cc.Component {

    @property(cc.Sprite)
    img: cc.Sprite = null;
    @property(cc.Node)
    effNode: cc.Node = null;
    // onLoad () {}

    start() {
        this.effNode.active = false;
        EventDispath.addEventListener(EventType.CHANGE_WALL, this.changeSkin, this);
    }

    setData(id = 1) {
        this.changeSkin(0);
    }
    changeSkin(isLvUp = 1) {
        let id = PlayerModel.getUIConfig().walllv;
        if (id == 0) return;
        MKUtils.loadSpriteFrame("texture/prop/wall/" + `0${id}`, (res) => {
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
            this.img.spriteFrame = res;
        });
    }
}

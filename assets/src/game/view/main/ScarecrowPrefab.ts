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

const {ccclass, property} = cc._decorator;

@ccclass
export default class ScarecrowPrefab extends cc.Component {

    @property(cc.Sprite)
    img: cc.Sprite = null;
    @property(sp.Skeleton)
    lvUpEff: sp.Skeleton = null;
    // onLoad () {}

    start() {
        this.lvUpEff.node.active = false;
        EventDispath.addEventListener(EventType.CHANGE_SCARECROW, this.changeSkin, this);
    }

    setData(id = 1) {
       this.changeSkin(0)
    }
    changeSkin(isLvUp = 1) {

        let id = PlayerModel.getUIConfig().scarecrowlv;
        if (id == 0) return;
        MKUtils.loadSpriteFrame("texture/prop/scarecrow/" + `0${id}`, (res) => {
            this.img.spriteFrame = res;
            if (isLvUp) {
                this.lvUpEff.node.active = true;
                this.lvUpEff.animation = "animation";
            }
        });
    }
}

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
export default class PipePrefab extends cc.Component {

    @property(cc.Sprite)
    img: cc.Sprite = null;
    @property(cc.Animation)
    liushui: cc.Animation = null;
    @property(sp.Skeleton)
    shuihua: sp.Skeleton = null;
    @property(sp.Skeleton)
    lvUpEff: sp.Skeleton = null;
    // onLoad () {}

    start() {
        this.lvUpEff.node.active = false;
        EventDispath.addEventListener(EventType.CHANGE_PIPE, this.changeSkin, this);
    }

    setData(id = 1) {
        this.changeSkin(0)
    }

    changeSkin(isLvUp = 1) {
        let id = PlayerModel.getUIConfig().pipelv;
        if (id == 0) {
            this.liushui.node.active = false;
            this.shuihua.node.active = false
            return;
        }
        this.liushui.node.active = true;
        this.liushui.play()
        this.shuihua.node.active = true;
        this.shuihua.animation="bowen"
        MKUtils.loadSpriteFrame("texture/prop/pipe/" + `0${id}`, (res) => {
            this.img.spriteFrame = res;
            if (isLvUp) {
                this.lvUpEff.node.active = true;
                this.lvUpEff.animation = "animation";
            }
        });
    }
}

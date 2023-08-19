import JSHelper from "../../framework/helper/JSHelper";
import EventDispath from "../../framework/message/EventDispath";
import { EventType } from "../../framework/message/EventType";
import MKUtils from "../../framework/tools/MkUtils";

class EffectManager {
    private static _instance: EffectManager;

    constructor() {
        this.init();
    }

    static instance() {
        if (!this._instance) {

            this._instance = new EffectManager();
        }
        return this._instance;

    }

    private init() {

    }
    // 飞金币
    playCoinFly(startPos: cc.Vec2, coinType = 1, moneyNum = 0, count?: number, cb: Function = null) {
        if (!count) {
            count = 10;
        }
        JSHelper.playEffect("reward_normal", false, true);
        let num = 0;
        for (let index = 0; index < count; index++) {
            let goodsNodeName = "imgMoney"
            if (coinType == 2) {
                goodsNodeName = "imgGold"
            } else if (coinType == 3) {
                goodsNodeName = "imgMyd"

            }
            let goodsNode: cc.Node = MKUtils.findNodeByName(cc.director.getScene(), goodsNodeName)
            if (goodsNode) {
                let node = new cc.Node()
                let sprite = node.addComponent(cc.Sprite)

                let imgUrl = "texture/common/icon_money"
                if (coinType == 2) {
                    imgUrl = "texture/common/icon_gold"
                } else if (coinType == 3) {
                    imgUrl = "texture/common/icon_myd"

                }
                MKUtils.loadSpriteFrame(imgUrl, function (spriteFrame) {
                    sprite.spriteFrame = spriteFrame
                    cc.director.getScene().addChild(node, 200)
                    node.setPosition(startPos)

                    let scale = MKUtils.randomNMF(0.8, 1.2)
                    node.setScale(scale)

                    let endWorldPos = goodsNode.convertToWorldSpaceAR(cc.v2(0, 0))
                    let endNodePos = endWorldPos
                    let dis = MKUtils.twoPointDistance(endNodePos, node.getPosition())
                    if (coinType == 1) {
                        let xPos = MKUtils.randomNM(-200, 200)
                        let yPos = MKUtils.randomNM(-200, 200)
                        let xPos1 = MKUtils.randomNM(-200, 200)
                        let yPos1 = MKUtils.randomNM(-200, 200)
                        let bezier = [cc.v2(startPos.x + xPos, startPos.y + yPos), cc.v2(endNodePos.x + xPos1, endNodePos.y + yPos1), endNodePos];
                        node.runAction(cc.sequence(
                            cc.moveBy(0.2, cc.v2(-5, 5)).easing(cc.easeOut(4.0)),
                            cc.delayTime(0.2),
                            cc.bezierTo(dis / 800, bezier).easing(cc.easeOut(1.0)),
                            cc.scaleTo(0.1, 1.2),
                            cc.scaleTo(0.1, 1),
                            cc.callFunc(() => {
                                if (index == count - 1) {
                                    cb && cb();
                                    EventDispath.send(EventType.UPDATE_MONEY, moneyNum);
                                }
                            }),
                            cc.destroySelf()
                        ))
                    } else {
                        let xPos = MKUtils.randomNM(-100, 100)
                        let yPos = MKUtils.randomNM(-100, 100)
                        num++;
                        let delayTime = 0.1 + num * 0.05;
                        node.runAction(cc.sequence(
                            cc.moveBy(0.4, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)),
                            cc.delayTime(delayTime),
                            cc.moveTo(dis / 1500, endNodePos).easing(cc.easeOut(1.0)),
                            cc.scaleTo(0.1, 1.2),
                            cc.scaleTo(0.1, 1),
                            cc.callFunc(() => {
                                if (index == count - 1) {
                                    cb && cb();
                                    if (coinType == 2) EventDispath.send(EventType.UPDATE_GOLD, moneyNum);
                                    else EventDispath.send(EventType.UPDATE_ACCET_DEGREE);
                                }
                            }),
                            cc.destroySelf()
                        ))
                    }
                }.bind(this))
            }
        }
    }
}

export default EffectManager.instance();

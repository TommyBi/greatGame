import JSHelper from "../../framework/helper/JSHelper";
import UIMananger from "../../framework/manager/UIMananger";
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

    nodePool: cc.NodePool;

    private init() {
        this.nodePool = new cc.NodePool();
        for (let i = 0; i < 100; i++) {
            let node = new cc.Node()
            node.addComponent(cc.Sprite)
            this.nodePool.put(node);
        }
    }

    getNode() {
        let node = this.nodePool.get();
        if (!node) {
            node = new cc.Node()
            node.addComponent(cc.Sprite)
            this.nodePool.put(node);
        }
        return node;
    }

    /**
     * 植物收获动画
     * @param startPos 
     * @param id 
     * @param count 
     * @param cb 
     */
    playCrop(startPos, id, count?, cb?: Function) {
        if (!count) {
            count = 8;
        }
        let self = this;
        let nodeList = [];
        // JSHelper.playEffect("reward_normal", false, true);
        for (let index = 0; index < count; index++) {
            let goodsNodeName = "warehouse"
            let goodsNode: cc.Node = MKUtils.findNodeByName(cc.director.getScene(), goodsNodeName)
            if (goodsNode) {
                let node = this.getNode();
                let sprite = node.getComponent(cc.Sprite)
                nodeList.push(node);

                let imgUrl = `texture/crop/singleIcon/${id}`
                MKUtils.loadSpriteFrame(imgUrl, function (spriteFrame) {
                    sprite.spriteFrame = spriteFrame
                    cc.director.getScene().addChild(node, 200)
                    node.setPosition(startPos)


                    let scale = MKUtils.randomNMF(1.5, 2)
                    node.setScale(scale)

                    let endWorldPos = goodsNode.convertToWorldSpaceAR(cc.v2(0, 0))
                    let endNodePos = cc.v2(endWorldPos.x - 80, endWorldPos.y - 100)
                    let dis = MKUtils.twoPointDistance(endNodePos, node.getPosition())
                    // let xPos = MKUtils.randomNM(-200, 200)
                    // let yPos = MKUtils.randomNM(-200, 200)
                    // let xPos1 = MKUtils.randomNM(-200, 200)
                    // let yPos1 = MKUtils.randomNM(-200, 200)
                    // let bezier = [cc.v2(startPos.x + xPos, startPos.y + yPos), cc.v2(endNodePos.x + xPos1, endNodePos.y + yPos1), endNodePos];
                    // node.runAction(cc.sequence(
                    //     cc.moveBy(0.2, cc.v2(-5, 5)).easing(cc.easeOut(4.0)),
                    //     cc.delayTime(0.2),
                    //     cc.bezierTo(dis / 800, bezier).easing(cc.easeOut(1.0)),
                    //     cc.scaleTo(0.1, 1.2),
                    //     cc.scaleTo(0.1, 1),
                    //     cc.callFunc(() => {
                    //         if (index == count - 1) {
                    //             cb && cb();
                    //         }
                    //     }),
                    //     cc.destroySelf()
                    // ))
                    let xPos = MKUtils.randomNM(-50, 50)
                    let yPos = MKUtils.randomNM(-50, 50)

                    node.runAction(cc.sequence(
                        cc.moveBy(0.3, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)),
                        cc.delayTime(0.1 * index),
                        cc.moveTo(dis / 1200, endNodePos).easing(cc.easeOut(1.0)),
                        cc.scaleTo(0.1, 1.2),
                        cc.scaleTo(0.1, 1),
                        cc.callFunc(() => {
                            if (index == count - 1) {
                                cb && cb();
                                for (let i = 0; i < nodeList.length; i++) {
                                    self.nodePool.put(nodeList[i]);

                                }
                            }
                        }),
                        // cc.destroySelf()
                    ))
                }.bind(this))
            }
        }
    }
    // 飞金币
    playCoinFly(startPos: cc.Vec2, coinType = 1, moneyNum = 0, count?: number, cb: Function = null) {
        if (!count) {
            count = 10;
        }
        if (coinType == 1) {
            JSHelper.playEffect("reward_money");
        } else if (coinType == 2) {
            JSHelper.playEffect("reward_gold");
        }
        let self = this;
        let num = 0;
        let nodeList = [];
        for (let index = 0; index < count; index++) {
            let goodsNodeName = "imgMoney"
            if (coinType == 2) {
                goodsNodeName = "imgGold"
            } else if (coinType == 3) {
                goodsNodeName = "imgMyd"
            }
            let goodsNode: cc.Node = MKUtils.findNodeByName(cc.director.getScene(), goodsNodeName)
            if (goodsNode) {
                let node = this.getNode();
                let sprite = node.getComponent(cc.Sprite)
                nodeList.push(node);
                let imgUrl = "texture/common/icon_money"
                if (coinType == 2) {
                    imgUrl = "texture/common/icon_gold"
                } else if (coinType == 3) {
                    imgUrl = "texture/common/icon_xfzs"
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
                    // if (coinType == 1) {
                    //     let xPos = MKUtils.randomNM(-200, 200)
                    //     let yPos = MKUtils.randomNM(-200, 200)
                    //     let xPos1 = MKUtils.randomNM(-200, 200)
                    //     let yPos1 = MKUtils.randomNM(-200, 200)
                    //     let bezier = [cc.v2(startPos.x + xPos, startPos.y + yPos), cc.v2(endNodePos.x + xPos1, endNodePos.y + yPos1), endNodePos];
                    //     node.runAction(cc.sequence(
                    //         cc.moveBy(0.2, cc.v2(-5, 5)).easing(cc.easeOut(4.0)),
                    //         cc.delayTime(0.2),
                    //         cc.bezierTo(dis / 800, bezier).easing(cc.easeOut(1.0)),
                    //         cc.scaleTo(0.1, 1.2),
                    //         cc.scaleTo(0.1, 1),
                    //         cc.callFunc(() => {
                    //             if (index == count - 1) {
                    //                 cb && cb();
                    //                 EventDispath.send(EventType.UPDATE_MONEY, moneyNum);
                    //             }
                    //         }),
                    //         cc.destroySelf()
                    //     ))
                    // } else {
                    let xPos = MKUtils.randomNM(-150, 150)
                    let yPos = MKUtils.randomNM(-150, 150)
                    num++;
                    let delayTime = 0.1 + num * 0.05;
                    node.runAction(cc.sequence(
                        cc.moveBy(0.5, cc.v2(xPos, yPos)).easing(cc.easeBackInOut()),
                        // cc.moveBy(delayTime+0.2, cc.v2(xPos, yPos)).easing(cc.easeBackInOut()),
                        // cc.moveBy(0.4, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)),
                        cc.delayTime(delayTime),
                        cc.moveTo(dis / 1500, endNodePos).easing(cc.easeOut(1.0)),
                        cc.scaleTo(0.1, 1.2),
                        cc.scaleTo(0.1, 1),
                        cc.callFunc(() => {
                            if (index == count - 1) {
                                cb && cb();
                                for (let i = 0; i < nodeList.length; i++) {
                                    self.nodePool.put(nodeList[i]);

                                }
                                if (coinType == 1) EventDispath.send(EventType.UPDATE_MONEY, moneyNum);
                                else if (coinType == 2) EventDispath.send(EventType.UPDATE_GOLD, moneyNum);
                                else EventDispath.send(EventType.UPDATE_XFZS, moneyNum);
                            }
                        }),
                    ))
                    // }
                }.bind(this))
            }
        }
    }
    // 场景层和UI层中间层特效
    playEffFly(startPos: cc.Vec2, coinType = 2, moneyNum = 0, count?: number, cb: Function = null) {
        if (!count) {
            count = 10;
        }
        // if (coinType == 1) {
        //     JSHelper.playEffect("reward_money");
        // } else if (coinType == 2) {
        //     JSHelper.playEffect("reward_gold");
        // }

        startPos = UIMananger.effLayer.convertToNodeSpaceAR(startPos);
        let self = this;
        let nodeList = [];
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
                let node = this.getNode();
                let sprite = node.getComponent(cc.Sprite)
                nodeList.push(node);
                let imgUrl = "texture/common/icon_money"
                if (coinType == 2) {
                    imgUrl = "texture/common/icon_gold"
                } else if (coinType == 3) {
                    imgUrl = "texture/common/icon_xfzs"
                }
                MKUtils.loadSpriteFrame(imgUrl, function (spriteFrame) {
                    sprite.spriteFrame = spriteFrame
                    UIMananger.effLayer.addChild(node, 200)
                    node.setPosition(startPos)

                    let scale = MKUtils.randomNMF(0.8, 1.2)
                    node.setScale(scale)

                    let endWorldPos = goodsNode.convertToWorldSpaceAR(cc.v2(0, 0))
                    let endNodePos = UIMananger.effLayer.convertToNodeSpaceAR(endWorldPos);
                    let dis = MKUtils.twoPointDistance(endNodePos, node.getPosition())
                    if (coinType == 2) {
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
                                    for (let i = 0; i < nodeList.length; i++) {
                                        self.nodePool.put(nodeList[i]);

                                    }
                                    if (coinType == 2) EventDispath.send(EventType.UPDATE_GOLD, moneyNum);
                                    else EventDispath.send(EventType.UPDATE_XFZS, moneyNum);
                                }
                            }),
                        ))
                    } else {
                        let xPos = MKUtils.randomNM(-150, 150)
                        let yPos = MKUtils.randomNM(-150, 150)
                        num++;
                        let delayTime = 0.1 + num * 0.05;
                        node.runAction(cc.sequence(
                            cc.moveBy(0.5, cc.v2(xPos, yPos)).easing(cc.easeBackInOut()),
                            // cc.moveBy(delayTime+0.2, cc.v2(xPos, yPos)).easing(cc.easeBackInOut()),
                            // cc.moveBy(0.4, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)),
                            cc.delayTime(delayTime),
                            cc.moveTo(dis / 1500, endNodePos).easing(cc.easeOut(1.0)),
                            cc.scaleTo(0.1, 1.2),
                            cc.scaleTo(0.1, 1),
                            cc.callFunc(() => {
                                if (index == count - 1) {
                                    cb && cb();
                                    for (let i = 0; i < nodeList.length; i++) {
                                        self.nodePool.put(nodeList[i]);

                                    }
                                    EventDispath.send(EventType.UPDATE_MONEY, moneyNum);
                                }
                            }),
                        ))
                    }
                }.bind(this))
            }
        }
    }

    guidePlay(node: cc.Node) {
        // node.runAction()
    }
    guideStop(node: cc.Node) {

    }
}

export default EffectManager.instance();

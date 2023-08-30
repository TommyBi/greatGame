"use strict";
cc._RF.push(module, '02b31nAW5lCxqeiXU1dH2M0', 'EffectManager');
// src/game/manager/EffectManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSHelper_1 = require("../../framework/helper/JSHelper");
var UIMananger_1 = require("../../framework/manager/UIMananger");
var EventDispath_1 = require("../../framework/message/EventDispath");
var EventType_1 = require("../../framework/message/EventType");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var EffectManager = /** @class */ (function () {
    function EffectManager() {
        this.init();
    }
    EffectManager.instance = function () {
        if (!this._instance) {
            this._instance = new EffectManager();
        }
        return this._instance;
    };
    EffectManager.prototype.init = function () {
        this.nodePool = new cc.NodePool();
        for (var i = 0; i < 100; i++) {
            var node = new cc.Node();
            node.addComponent(cc.Sprite);
            this.nodePool.put(node);
        }
    };
    EffectManager.prototype.getNode = function () {
        var node = this.nodePool.get();
        if (!node) {
            node = new cc.Node();
            node.addComponent(cc.Sprite);
            this.nodePool.put(node);
        }
        return node;
    };
    /**
     * 植物收获动画
     * @param startPos
     * @param id
     * @param count
     * @param cb
     */
    EffectManager.prototype.playCrop = function (startPos, id, count, cb) {
        if (!count) {
            count = 8;
        }
        var self = this;
        var nodeList = [];
        var _loop_1 = function (index) {
            var goodsNodeName = "warehouse";
            var goodsNode = MkUtils_1.default.findNodeByName(cc.director.getScene(), goodsNodeName);
            if (goodsNode) {
                var node_1 = this_1.getNode();
                var sprite_1 = node_1.getComponent(cc.Sprite);
                nodeList.push(node_1);
                var imgUrl = "texture/crop/singleIcon/" + id;
                MkUtils_1.default.loadSpriteFrame(imgUrl, function (spriteFrame) {
                    sprite_1.spriteFrame = spriteFrame;
                    cc.director.getScene().addChild(node_1, 200);
                    node_1.setPosition(startPos);
                    var scale = MkUtils_1.default.randomNMF(1.5, 2);
                    node_1.setScale(scale);
                    var endWorldPos = goodsNode.convertToWorldSpaceAR(cc.v2(0, 0));
                    var endNodePos = cc.v2(endWorldPos.x - 80, endWorldPos.y - 100);
                    var dis = MkUtils_1.default.twoPointDistance(endNodePos, node_1.getPosition());
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
                    var xPos = MkUtils_1.default.randomNM(-50, 50);
                    var yPos = MkUtils_1.default.randomNM(-50, 50);
                    node_1.runAction(cc.sequence(cc.moveBy(0.3, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)), cc.delayTime(0.1 * index), cc.moveTo(dis / 1200, endNodePos).easing(cc.easeOut(1.0)), cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(function () {
                        if (index == count - 1) {
                            cb && cb();
                            for (var i = 0; i < nodeList.length; i++) {
                                self.nodePool.put(nodeList[i]);
                            }
                        }
                    })));
                }.bind(this_1));
            }
        };
        var this_1 = this;
        // JSHelper.playEffect("reward_normal", false, true);
        for (var index = 0; index < count; index++) {
            _loop_1(index);
        }
    };
    // 飞金币
    EffectManager.prototype.playCoinFly = function (startPos, coinType, moneyNum, count, cb) {
        if (coinType === void 0) { coinType = 1; }
        if (moneyNum === void 0) { moneyNum = 0; }
        if (cb === void 0) { cb = null; }
        if (!count) {
            count = 10;
        }
        if (coinType == 1) {
            JSHelper_1.default.playEffect("reward_money");
        }
        else if (coinType == 2) {
            JSHelper_1.default.playEffect("reward_gold");
        }
        var self = this;
        var num = 0;
        var nodeList = [];
        var _loop_2 = function (index) {
            var goodsNodeName = "imgMoney";
            if (coinType == 2) {
                goodsNodeName = "imgGold";
            }
            else if (coinType == 3) {
                goodsNodeName = "imgMyd";
            }
            var goodsNode = MkUtils_1.default.findNodeByName(cc.director.getScene(), goodsNodeName);
            if (goodsNode) {
                var node_2 = this_2.getNode();
                var sprite_2 = node_2.getComponent(cc.Sprite);
                nodeList.push(node_2);
                var imgUrl = "texture/common/icon_money";
                if (coinType == 2) {
                    imgUrl = "texture/common/icon_gold";
                }
                else if (coinType == 3) {
                    imgUrl = "texture/common/icon_xfzs";
                }
                MkUtils_1.default.loadSpriteFrame(imgUrl, function (spriteFrame) {
                    sprite_2.spriteFrame = spriteFrame;
                    cc.director.getScene().addChild(node_2, 200);
                    node_2.setPosition(startPos);
                    var scale = MkUtils_1.default.randomNMF(0.8, 1.2);
                    node_2.setScale(scale);
                    var endWorldPos = goodsNode.convertToWorldSpaceAR(cc.v2(0, 0));
                    var endNodePos = endWorldPos;
                    var dis = MkUtils_1.default.twoPointDistance(endNodePos, node_2.getPosition());
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
                    var xPos = MkUtils_1.default.randomNM(-150, 150);
                    var yPos = MkUtils_1.default.randomNM(-150, 150);
                    num++;
                    var delayTime = 0.1 + num * 0.05;
                    node_2.runAction(cc.sequence(cc.moveBy(0.5, cc.v2(xPos, yPos)).easing(cc.easeBackInOut()), 
                    // cc.moveBy(delayTime+0.2, cc.v2(xPos, yPos)).easing(cc.easeBackInOut()),
                    // cc.moveBy(0.4, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)),
                    cc.delayTime(delayTime), cc.moveTo(dis / 1500, endNodePos).easing(cc.easeOut(1.0)), cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(function () {
                        if (index == count - 1) {
                            cb && cb();
                            for (var i = 0; i < nodeList.length; i++) {
                                self.nodePool.put(nodeList[i]);
                            }
                            if (coinType == 1)
                                EventDispath_1.default.send(EventType_1.EventType.UPDATE_MONEY, moneyNum);
                            else if (coinType == 2)
                                EventDispath_1.default.send(EventType_1.EventType.UPDATE_GOLD, moneyNum);
                            else
                                EventDispath_1.default.send(EventType_1.EventType.UPDATE_XFZS, moneyNum);
                        }
                    })));
                    // }
                }.bind(this_2));
            }
        };
        var this_2 = this;
        for (var index = 0; index < count; index++) {
            _loop_2(index);
        }
    };
    // 场景层和UI层中间层特效
    EffectManager.prototype.playEffFly = function (startPos, coinType, moneyNum, count, cb) {
        if (coinType === void 0) { coinType = 2; }
        if (moneyNum === void 0) { moneyNum = 0; }
        if (cb === void 0) { cb = null; }
        if (!count) {
            count = 10;
        }
        // if (coinType == 1) {
        //     JSHelper.playEffect("reward_money");
        // } else if (coinType == 2) {
        //     JSHelper.playEffect("reward_gold");
        // }
        startPos = UIMananger_1.default.effLayer.convertToNodeSpaceAR(startPos);
        var self = this;
        var nodeList = [];
        var num = 0;
        var _loop_3 = function (index) {
            var goodsNodeName = "imgMoney";
            if (coinType == 2) {
                goodsNodeName = "imgGold";
            }
            else if (coinType == 3) {
                goodsNodeName = "imgMyd";
            }
            var goodsNode = MkUtils_1.default.findNodeByName(cc.director.getScene(), goodsNodeName);
            if (goodsNode) {
                var node_3 = this_3.getNode();
                var sprite_3 = node_3.getComponent(cc.Sprite);
                nodeList.push(node_3);
                var imgUrl = "texture/common/icon_money";
                if (coinType == 2) {
                    imgUrl = "texture/common/icon_gold";
                }
                else if (coinType == 3) {
                    imgUrl = "texture/common/icon_xfzs";
                }
                MkUtils_1.default.loadSpriteFrame(imgUrl, function (spriteFrame) {
                    sprite_3.spriteFrame = spriteFrame;
                    UIMananger_1.default.effLayer.addChild(node_3, 200);
                    node_3.setPosition(startPos);
                    var scale = MkUtils_1.default.randomNMF(0.8, 1.2);
                    node_3.setScale(scale);
                    var endWorldPos = goodsNode.convertToWorldSpaceAR(cc.v2(0, 0));
                    var endNodePos = UIMananger_1.default.effLayer.convertToNodeSpaceAR(endWorldPos);
                    var dis = MkUtils_1.default.twoPointDistance(endNodePos, node_3.getPosition());
                    if (coinType == 2) {
                        var xPos = MkUtils_1.default.randomNM(-200, 200);
                        var yPos = MkUtils_1.default.randomNM(-200, 200);
                        var xPos1 = MkUtils_1.default.randomNM(-200, 200);
                        var yPos1 = MkUtils_1.default.randomNM(-200, 200);
                        var bezier = [cc.v2(startPos.x + xPos, startPos.y + yPos), cc.v2(endNodePos.x + xPos1, endNodePos.y + yPos1), endNodePos];
                        node_3.runAction(cc.sequence(cc.moveBy(0.2, cc.v2(-5, 5)).easing(cc.easeOut(4.0)), cc.delayTime(0.2), cc.bezierTo(dis / 800, bezier).easing(cc.easeOut(1.0)), cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(function () {
                            if (index == count - 1) {
                                cb && cb();
                                for (var i = 0; i < nodeList.length; i++) {
                                    self.nodePool.put(nodeList[i]);
                                }
                                if (coinType == 2)
                                    EventDispath_1.default.send(EventType_1.EventType.UPDATE_GOLD, moneyNum);
                                else
                                    EventDispath_1.default.send(EventType_1.EventType.UPDATE_XFZS, moneyNum);
                            }
                        })));
                    }
                    else {
                        var xPos = MkUtils_1.default.randomNM(-150, 150);
                        var yPos = MkUtils_1.default.randomNM(-150, 150);
                        num++;
                        var delayTime = 0.1 + num * 0.05;
                        node_3.runAction(cc.sequence(cc.moveBy(0.5, cc.v2(xPos, yPos)).easing(cc.easeBackInOut()), 
                        // cc.moveBy(delayTime+0.2, cc.v2(xPos, yPos)).easing(cc.easeBackInOut()),
                        // cc.moveBy(0.4, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)),
                        cc.delayTime(delayTime), cc.moveTo(dis / 1500, endNodePos).easing(cc.easeOut(1.0)), cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(function () {
                            if (index == count - 1) {
                                cb && cb();
                                for (var i = 0; i < nodeList.length; i++) {
                                    self.nodePool.put(nodeList[i]);
                                }
                                EventDispath_1.default.send(EventType_1.EventType.UPDATE_MONEY, moneyNum);
                            }
                        })));
                    }
                }.bind(this_3));
            }
        };
        var this_3 = this;
        for (var index = 0; index < count; index++) {
            _loop_3(index);
        }
    };
    EffectManager.prototype.guidePlay = function (node) {
        // node.runAction()
    };
    EffectManager.prototype.guideStop = function (node) {
    };
    return EffectManager;
}());
exports.default = EffectManager.instance();

cc._RF.pop();
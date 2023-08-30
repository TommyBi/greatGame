
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/manager/EffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tYW5hZ2VyL0VmZmVjdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQsaUVBQTREO0FBQzVELHFFQUFnRTtBQUNoRSwrREFBOEQ7QUFDOUQseURBQW9EO0FBRXBEO0lBR0k7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLHNCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFFMUIsQ0FBQztJQUlPLDRCQUFJLEdBQVo7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEdB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LCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU0hlbHBlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2hlbHBlci9KU0hlbHBlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuXHJcbmNsYXNzIEVmZmVjdE1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBFZmZlY3RNYW5hZ2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBFZmZlY3RNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbm9kZVBvb2w6IGNjLk5vZGVQb29sO1xyXG5cclxuICAgIHByaXZhdGUgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKClcclxuICAgICAgICAgICAgbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGVQb29sLnB1dChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm9kZSgpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZVBvb2wuZ2V0KCk7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBuZXcgY2MuTm9kZSgpXHJcbiAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlUG9vbC5wdXQobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qSN54mp5pS26I635Yqo55S7XHJcbiAgICAgKiBAcGFyYW0gc3RhcnRQb3MgXHJcbiAgICAgKiBAcGFyYW0gaWQgXHJcbiAgICAgKiBAcGFyYW0gY291bnQgXHJcbiAgICAgKiBAcGFyYW0gY2IgXHJcbiAgICAgKi9cclxuICAgIHBsYXlDcm9wKHN0YXJ0UG9zLCBpZCwgY291bnQ/LCBjYj86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFjb3VudCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbm9kZUxpc3QgPSBbXTtcclxuICAgICAgICAvLyBKU0hlbHBlci5wbGF5RWZmZWN0KFwicmV3YXJkX25vcm1hbFwiLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBnb29kc05vZGVOYW1lID0gXCJ3YXJlaG91c2VcIlxyXG4gICAgICAgICAgICBsZXQgZ29vZHNOb2RlOiBjYy5Ob2RlID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLCBnb29kc05vZGVOYW1lKVxyXG4gICAgICAgICAgICBpZiAoZ29vZHNOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICAgICAgICAgIG5vZGVMaXN0LnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGltZ1VybCA9IGB0ZXh0dXJlL2Nyb3Avc2luZ2xlSWNvbi8ke2lkfWBcclxuICAgICAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKGltZ1VybCwgZnVuY3Rpb24gKHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5vZGUsIDIwMClcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gTUtVdGlscy5yYW5kb21OTUYoMS41LCAyKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUoc2NhbGUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRXb3JsZFBvcyA9IGdvb2RzTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZE5vZGVQb3MgPSBjYy52MihlbmRXb3JsZFBvcy54IC0gODAsIGVuZFdvcmxkUG9zLnkgLSAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcyA9IE1LVXRpbHMudHdvUG9pbnREaXN0YW5jZShlbmROb2RlUG9zLCBub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHhQb3MgPSBNS1V0aWxzLnJhbmRvbU5NKC0yMDAsIDIwMClcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgeVBvcyA9IE1LVXRpbHMucmFuZG9tTk0oLTIwMCwgMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB4UG9zMSA9IE1LVXRpbHMucmFuZG9tTk0oLTIwMCwgMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCB5UG9zMSA9IE1LVXRpbHMucmFuZG9tTk0oLTIwMCwgMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBiZXppZXIgPSBbY2MudjIoc3RhcnRQb3MueCArIHhQb3MsIHN0YXJ0UG9zLnkgKyB5UG9zKSwgY2MudjIoZW5kTm9kZVBvcy54ICsgeFBvczEsIGVuZE5vZGVQb3MueSArIHlQb3MxKSwgZW5kTm9kZVBvc107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLm1vdmVCeSgwLjIsIGNjLnYyKC01LCA1KSkuZWFzaW5nKGNjLmVhc2VPdXQoNC4wKSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmRlbGF5VGltZSgwLjIpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjYy5iZXppZXJUbyhkaXMgLyA4MDAsIGJlemllcikuZWFzaW5nKGNjLmVhc2VPdXQoMS4wKSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLnNjYWxlVG8oMC4xLCAxLjIpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjYy5zY2FsZVRvKDAuMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChpbmRleCA9PSBjb3VudCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2MuZGVzdHJveVNlbGYoKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICkpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHhQb3MgPSBNS1V0aWxzLnJhbmRvbU5NKC01MCwgNTApXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHlQb3MgPSBNS1V0aWxzLnJhbmRvbU5NKC01MCwgNTApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoMC4zLCBjYy52Mih4UG9zLCB5UG9zKSkuZWFzaW5nKGNjLmVhc2VPdXQoNC4wKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjEgKiBpbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhkaXMgLyAxMjAwLCBlbmROb2RlUG9zKS5lYXNpbmcoY2MuZWFzZU91dCgxLjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEuMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGNvdW50IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm5vZGVQb29sLnB1dChub2RlTGlzdFtpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmRlc3Ryb3lTZWxmKClcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g6aOe6YeR5biBXHJcbiAgICBwbGF5Q29pbkZseShzdGFydFBvczogY2MuVmVjMiwgY29pblR5cGUgPSAxLCBtb25leU51bSA9IDAsIGNvdW50PzogbnVtYmVyLCBjYjogRnVuY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFjb3VudCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29pblR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICBKU0hlbHBlci5wbGF5RWZmZWN0KFwicmV3YXJkX21vbmV5XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29pblR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICBKU0hlbHBlci5wbGF5RWZmZWN0KFwicmV3YXJkX2dvbGRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBsZXQgbm9kZUxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGdvb2RzTm9kZU5hbWUgPSBcImltZ01vbmV5XCJcclxuICAgICAgICAgICAgaWYgKGNvaW5UeXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGdvb2RzTm9kZU5hbWUgPSBcImltZ0dvbGRcIlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvaW5UeXBlID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGdvb2RzTm9kZU5hbWUgPSBcImltZ015ZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGdvb2RzTm9kZTogY2MuTm9kZSA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSwgZ29vZHNOb2RlTmFtZSlcclxuICAgICAgICAgICAgaWYgKGdvb2RzTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgICAgICBub2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltZ1VybCA9IFwidGV4dHVyZS9jb21tb24vaWNvbl9tb25leVwiXHJcbiAgICAgICAgICAgICAgICBpZiAoY29pblR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybCA9IFwidGV4dHVyZS9jb21tb24vaWNvbl9nb2xkXCJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29pblR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybCA9IFwidGV4dHVyZS9jb21tb24vaWNvbl94ZnpzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKGltZ1VybCwgZnVuY3Rpb24gKHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5vZGUsIDIwMClcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBNS1V0aWxzLnJhbmRvbU5NRigwLjgsIDEuMilcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFNjYWxlKHNjYWxlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kV29ybGRQb3MgPSBnb29kc05vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmROb2RlUG9zID0gZW5kV29ybGRQb3NcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzID0gTUtVdGlscy50d29Qb2ludERpc3RhbmNlKGVuZE5vZGVQb3MsIG5vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoY29pblR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgeFBvcyA9IE1LVXRpbHMucmFuZG9tTk0oLTIwMCwgMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgeVBvcyA9IE1LVXRpbHMucmFuZG9tTk0oLTIwMCwgMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgeFBvczEgPSBNS1V0aWxzLnJhbmRvbU5NKC0yMDAsIDIwMClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHlQb3MxID0gTUtVdGlscy5yYW5kb21OTSgtMjAwLCAyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBiZXppZXIgPSBbY2MudjIoc3RhcnRQb3MueCArIHhQb3MsIHN0YXJ0UG9zLnkgKyB5UG9zKSwgY2MudjIoZW5kTm9kZVBvcy54ICsgeFBvczEsIGVuZE5vZGVQb3MueSArIHlQb3MxKSwgZW5kTm9kZVBvc107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2MubW92ZUJ5KDAuMiwgY2MudjIoLTUsIDUpKS5lYXNpbmcoY2MuZWFzZU91dCg0LjApKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNjLmRlbGF5VGltZSgwLjIpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2MuYmV6aWVyVG8oZGlzIC8gODAwLCBiZXppZXIpLmVhc2luZyhjYy5lYXNlT3V0KDEuMCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEuMiksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGluZGV4ID09IGNvdW50IC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX01PTkVZLCBtb25leU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYy5kZXN0cm95U2VsZigpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeFBvcyA9IE1LVXRpbHMucmFuZG9tTk0oLTE1MCwgMTUwKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5UG9zID0gTUtVdGlscy5yYW5kb21OTSgtMTUwLCAxNTApXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGF5VGltZSA9IDAuMSArIG51bSAqIDAuMDU7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgwLjUsIGNjLnYyKHhQb3MsIHlQb3MpKS5lYXNpbmcoY2MuZWFzZUJhY2tJbk91dCgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KGRlbGF5VGltZSswLjIsIGNjLnYyKHhQb3MsIHlQb3MpKS5lYXNpbmcoY2MuZWFzZUJhY2tJbk91dCgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubW92ZUJ5KDAuNCwgY2MudjIoeFBvcywgeVBvcykpLmVhc2luZyhjYy5lYXNlT3V0KDQuMCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoZGVsYXlUaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKGRpcyAvIDE1MDAsIGVuZE5vZGVQb3MpLmVhc2luZyhjYy5lYXNlT3V0KDEuMCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMS4yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gY291bnQgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZVBvb2wucHV0KG5vZGVMaXN0W2ldKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2luVHlwZSA9PSAxKSBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX01PTkVZLCBtb25leU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY29pblR5cGUgPT0gMikgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlVQREFURV9HT0xELCBtb25leU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX1hGWlMsIG1vbmV5TnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDlnLrmma/lsYLlkoxVSeWxguS4remXtOWxgueJueaViFxyXG4gICAgcGxheUVmZkZseShzdGFydFBvczogY2MuVmVjMiwgY29pblR5cGUgPSAyLCBtb25leU51bSA9IDAsIGNvdW50PzogbnVtYmVyLCBjYjogRnVuY3Rpb24gPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFjb3VudCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoY29pblR5cGUgPT0gMSkge1xyXG4gICAgICAgIC8vICAgICBKU0hlbHBlci5wbGF5RWZmZWN0KFwicmV3YXJkX21vbmV5XCIpO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoY29pblR5cGUgPT0gMikge1xyXG4gICAgICAgIC8vICAgICBKU0hlbHBlci5wbGF5RWZmZWN0KFwicmV3YXJkX2dvbGRcIik7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBzdGFydFBvcyA9IFVJTWFuYW5nZXIuZWZmTGF5ZXIuY29udmVydFRvTm9kZVNwYWNlQVIoc3RhcnRQb3MpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbm9kZUxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGdvb2RzTm9kZU5hbWUgPSBcImltZ01vbmV5XCJcclxuICAgICAgICAgICAgaWYgKGNvaW5UeXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGdvb2RzTm9kZU5hbWUgPSBcImltZ0dvbGRcIlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvaW5UeXBlID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGdvb2RzTm9kZU5hbWUgPSBcImltZ015ZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGdvb2RzTm9kZTogY2MuTm9kZSA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSwgZ29vZHNOb2RlTmFtZSlcclxuICAgICAgICAgICAgaWYgKGdvb2RzTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldE5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICAgICAgICAgICAgICBub2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltZ1VybCA9IFwidGV4dHVyZS9jb21tb24vaWNvbl9tb25leVwiXHJcbiAgICAgICAgICAgICAgICBpZiAoY29pblR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybCA9IFwidGV4dHVyZS9jb21tb24vaWNvbl9nb2xkXCJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29pblR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZ1VybCA9IFwidGV4dHVyZS9jb21tb24vaWNvbl94ZnpzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKGltZ1VybCwgZnVuY3Rpb24gKHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVcclxuICAgICAgICAgICAgICAgICAgICBVSU1hbmFuZ2VyLmVmZkxheWVyLmFkZENoaWxkKG5vZGUsIDIwMClcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBNS1V0aWxzLnJhbmRvbU5NRigwLjgsIDEuMilcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFNjYWxlKHNjYWxlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kV29ybGRQb3MgPSBnb29kc05vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmROb2RlUG9zID0gVUlNYW5hbmdlci5lZmZMYXllci5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlbmRXb3JsZFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpcyA9IE1LVXRpbHMudHdvUG9pbnREaXN0YW5jZShlbmROb2RlUG9zLCBub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvaW5UeXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhQb3MgPSBNS1V0aWxzLnJhbmRvbU5NKC0yMDAsIDIwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlQb3MgPSBNS1V0aWxzLnJhbmRvbU5NKC0yMDAsIDIwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhQb3MxID0gTUtVdGlscy5yYW5kb21OTSgtMjAwLCAyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5UG9zMSA9IE1LVXRpbHMucmFuZG9tTk0oLTIwMCwgMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmV6aWVyID0gW2NjLnYyKHN0YXJ0UG9zLnggKyB4UG9zLCBzdGFydFBvcy55ICsgeVBvcyksIGNjLnYyKGVuZE5vZGVQb3MueCArIHhQb3MxLCBlbmROb2RlUG9zLnkgKyB5UG9zMSksIGVuZE5vZGVQb3NdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgwLjIsIGNjLnYyKC01LCA1KSkuZWFzaW5nKGNjLmVhc2VPdXQoNC4wKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4yKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmJlemllclRvKGRpcyAvIDgwMCwgYmV6aWVyKS5lYXNpbmcoY2MuZWFzZU91dCgxLjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLjIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSBjb3VudCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlUG9vbC5wdXQobm9kZUxpc3RbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29pblR5cGUgPT0gMikgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlVQREFURV9HT0xELCBtb25leU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlVQREFURV9YRlpTLCBtb25leU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhQb3MgPSBNS1V0aWxzLnJhbmRvbU5NKC0xNTAsIDE1MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHlQb3MgPSBNS1V0aWxzLnJhbmRvbU5NKC0xNTAsIDE1MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxheVRpbWUgPSAwLjEgKyBudW0gKiAwLjA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgwLjUsIGNjLnYyKHhQb3MsIHlQb3MpKS5lYXNpbmcoY2MuZWFzZUJhY2tJbk91dCgpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLm1vdmVCeShkZWxheVRpbWUrMC4yLCBjYy52Mih4UG9zLCB5UG9zKSkuZWFzaW5nKGNjLmVhc2VCYWNrSW5PdXQoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5tb3ZlQnkoMC40LCBjYy52Mih4UG9zLCB5UG9zKSkuZWFzaW5nKGNjLmVhc2VPdXQoNC4wKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoZGVsYXlUaW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhkaXMgLyAxNTAwLCBlbmROb2RlUG9zKS5lYXNpbmcoY2MuZWFzZU91dCgxLjApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLjIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSBjb3VudCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlUG9vbC5wdXQobm9kZUxpc3RbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX01PTkVZLCBtb25leU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGd1aWRlUGxheShub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgLy8gbm9kZS5ydW5BY3Rpb24oKVxyXG4gICAgfVxyXG4gICAgZ3VpZGVTdG9wKG5vZGU6IGNjLk5vZGUpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVmZmVjdE1hbmFnZXIuaW5zdGFuY2UoKTtcclxuIl19
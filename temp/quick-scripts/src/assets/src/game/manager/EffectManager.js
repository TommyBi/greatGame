"use strict";
cc._RF.push(module, '02b31nAW5lCxqeiXU1dH2M0', 'EffectManager');
// src/game/manager/EffectManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSHelper_1 = require("../../framework/helper/JSHelper");
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
    };
    // 飞金币
    EffectManager.prototype.playCoinFly = function (startPos, coinType, moneyNum, count, cb) {
        if (coinType === void 0) { coinType = 1; }
        if (moneyNum === void 0) { moneyNum = 0; }
        if (cb === void 0) { cb = null; }
        if (!count) {
            count = 10;
        }
        JSHelper_1.default.playEffect("reward_normal", false, true);
        var num = 0;
        var _loop_1 = function (index) {
            var goodsNodeName = "imgMoney";
            if (coinType == 2) {
                goodsNodeName = "imgGold";
            }
            else if (coinType == 3) {
                goodsNodeName = "imgMyd";
            }
            var goodsNode = MkUtils_1.default.findNodeByName(cc.director.getScene(), goodsNodeName);
            if (goodsNode) {
                var node_1 = new cc.Node();
                var sprite_1 = node_1.addComponent(cc.Sprite);
                var imgUrl = "texture/common/icon_money";
                if (coinType == 2) {
                    imgUrl = "texture/common/icon_gold";
                }
                else if (coinType == 3) {
                    imgUrl = "texture/common/icon_myd";
                }
                MkUtils_1.default.loadSpriteFrame(imgUrl, function (spriteFrame) {
                    sprite_1.spriteFrame = spriteFrame;
                    cc.director.getScene().addChild(node_1, 200);
                    node_1.setPosition(startPos);
                    var scale = MkUtils_1.default.randomNMF(0.8, 1.2);
                    node_1.setScale(scale);
                    var endWorldPos = goodsNode.convertToWorldSpaceAR(cc.v2(0, 0));
                    var endNodePos = endWorldPos;
                    var dis = MkUtils_1.default.twoPointDistance(endNodePos, node_1.getPosition());
                    if (coinType == 1) {
                        var xPos = MkUtils_1.default.randomNM(-200, 200);
                        var yPos = MkUtils_1.default.randomNM(-200, 200);
                        var xPos1 = MkUtils_1.default.randomNM(-200, 200);
                        var yPos1 = MkUtils_1.default.randomNM(-200, 200);
                        var bezier = [cc.v2(startPos.x + xPos, startPos.y + yPos), cc.v2(endNodePos.x + xPos1, endNodePos.y + yPos1), endNodePos];
                        node_1.runAction(cc.sequence(cc.moveBy(0.2, cc.v2(-5, 5)).easing(cc.easeOut(4.0)), cc.delayTime(0.2), cc.bezierTo(dis / 800, bezier).easing(cc.easeOut(1.0)), cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(function () {
                            if (index == count - 1) {
                                cb && cb();
                                EventDispath_1.default.send(EventType_1.EventType.UPDATE_MONEY, moneyNum);
                            }
                        }), cc.destroySelf()));
                    }
                    else {
                        var xPos = MkUtils_1.default.randomNM(-100, 100);
                        var yPos = MkUtils_1.default.randomNM(-100, 100);
                        num++;
                        var delayTime = 0.1 + num * 0.05;
                        node_1.runAction(cc.sequence(cc.moveBy(0.4, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)), cc.delayTime(delayTime), cc.moveTo(dis / 1500, endNodePos).easing(cc.easeOut(1.0)), cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(function () {
                            if (index == count - 1) {
                                cb && cb();
                                if (coinType == 2)
                                    EventDispath_1.default.send(EventType_1.EventType.UPDATE_GOLD, moneyNum);
                                else
                                    EventDispath_1.default.send(EventType_1.EventType.UPDATE_ACCET_DEGREE);
                            }
                        }), cc.destroySelf()));
                    }
                }.bind(this_1));
            }
        };
        var this_1 = this;
        for (var index = 0; index < count; index++) {
            _loop_1(index);
        }
    };
    return EffectManager;
}());
exports.default = EffectManager.instance();

cc._RF.pop();
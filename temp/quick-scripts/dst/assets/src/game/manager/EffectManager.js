
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tYW5hZ2VyL0VmZmVjdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQscUVBQWdFO0FBQ2hFLCtEQUE4RDtBQUM5RCx5REFBb0Q7QUFFcEQ7SUFHSTtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sc0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBRWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUUxQixDQUFDO0lBRU8sNEJBQUksR0FBWjtJQUVBLENBQUM7SUFDRCxNQUFNO0lBQ04sbUNBQVcsR0FBWCxVQUFZLFFBQWlCLEVBQUUsUUFBWSxFQUFFLFFBQVksRUFBRSxLQUFjLEVBQUUsRUFBbUI7UUFBL0QseUJBQUEsRUFBQSxZQUFZO1FBQUUseUJBQUEsRUFBQSxZQUFZO1FBQWtCLG1CQUFBLEVBQUEsU0FBbUI7UUFDMUYsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDZDtRQUNELGtCQUFRLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUNILEtBQUs7WUFDVixJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUE7WUFDOUIsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUNmLGFBQWEsR0FBRyxTQUFTLENBQUE7YUFDNUI7aUJBQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUN0QixhQUFhLEdBQUcsUUFBUSxDQUFBO2FBRTNCO1lBQ0QsSUFBSSxTQUFTLEdBQVksaUJBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQTtZQUN0RixJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLE1BQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDeEIsSUFBSSxRQUFNLEdBQUcsTUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBRXpDLElBQUksTUFBTSxHQUFHLDJCQUEyQixDQUFBO2dCQUN4QyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ2YsTUFBTSxHQUFHLDBCQUEwQixDQUFBO2lCQUN0QztxQkFBTSxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQTtpQkFFckM7Z0JBQ0QsaUJBQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFVBQVUsV0FBVztvQkFDakQsUUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7b0JBQ2hDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtvQkFDMUMsTUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFFMUIsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO29CQUN2QyxNQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUVwQixJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDOUQsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFBO29CQUM1QixJQUFJLEdBQUcsR0FBRyxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxNQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtvQkFDbEUsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO3dCQUNmLElBQUksSUFBSSxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO3dCQUN0QyxJQUFJLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDdEMsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7d0JBQ3ZDLElBQUksS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO3dCQUN2QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQzFILE1BQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDdEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3BELEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN0RCxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBQ1IsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQ0FDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO2dDQUNYLHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzZCQUN2RDt3QkFDTCxDQUFDLENBQUMsRUFDRixFQUFFLENBQUMsV0FBVyxFQUFFLENBQ25CLENBQUMsQ0FBQTtxQkFDTDt5QkFBTTt3QkFDSCxJQUFJLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDdEMsSUFBSSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7d0JBQ3RDLEdBQUcsRUFBRSxDQUFDO3dCQUNOLElBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO3dCQUNqQyxNQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3RCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDekQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3pELEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFDbEIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDUixJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dDQUNwQixFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Z0NBQ1gsSUFBSSxRQUFRLElBQUksQ0FBQztvQ0FBRSxzQkFBWSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQzs7b0NBQ2pFLHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs2QkFDekQ7d0JBQ0wsQ0FBQyxDQUFDLEVBQ0YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUNuQixDQUFDLENBQUE7cUJBQ0w7Z0JBQ0wsQ0FBQyxDQUFDLElBQUksUUFBTSxDQUFDLENBQUE7YUFDaEI7OztRQXpFTCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFBakMsS0FBSztTQTBFYjtJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBdEdBLEFBc0dDLElBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSlNIZWxwZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9oZWxwZXIvSlNIZWxwZXJcIjtcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XG5cbmNsYXNzIEVmZmVjdE1hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRWZmZWN0TWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcblxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRWZmZWN0TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpIHtcblxuICAgIH1cbiAgICAvLyDpo57ph5HluIFcbiAgICBwbGF5Q29pbkZseShzdGFydFBvczogY2MuVmVjMiwgY29pblR5cGUgPSAxLCBtb25leU51bSA9IDAsIGNvdW50PzogbnVtYmVyLCBjYjogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgSlNIZWxwZXIucGxheUVmZmVjdChcInJld2FyZF9ub3JtYWxcIiwgZmFsc2UsIHRydWUpO1xuICAgICAgICBsZXQgbnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZ29vZHNOb2RlTmFtZSA9IFwiaW1nTW9uZXlcIlxuICAgICAgICAgICAgaWYgKGNvaW5UeXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICBnb29kc05vZGVOYW1lID0gXCJpbWdHb2xkXCJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29pblR5cGUgPT0gMykge1xuICAgICAgICAgICAgICAgIGdvb2RzTm9kZU5hbWUgPSBcImltZ015ZFwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBnb29kc05vZGU6IGNjLk5vZGUgPSBNS1V0aWxzLmZpbmROb2RlQnlOYW1lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCksIGdvb2RzTm9kZU5hbWUpXG4gICAgICAgICAgICBpZiAoZ29vZHNOb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSlcblxuICAgICAgICAgICAgICAgIGxldCBpbWdVcmwgPSBcInRleHR1cmUvY29tbW9uL2ljb25fbW9uZXlcIlxuICAgICAgICAgICAgICAgIGlmIChjb2luVHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZ1VybCA9IFwidGV4dHVyZS9jb21tb24vaWNvbl9nb2xkXCJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvaW5UeXBlID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsID0gXCJ0ZXh0dXJlL2NvbW1vbi9pY29uX215ZFwiXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoaW1nVXJsLCBmdW5jdGlvbiAoc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChub2RlLCAyMDApXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oc3RhcnRQb3MpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gTUtVdGlscy5yYW5kb21OTUYoMC44LCAxLjIpXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUoc2NhbGUpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFdvcmxkUG9zID0gZ29vZHNOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZE5vZGVQb3MgPSBlbmRXb3JsZFBvc1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzID0gTUtVdGlscy50d29Qb2ludERpc3RhbmNlKGVuZE5vZGVQb3MsIG5vZGUuZ2V0UG9zaXRpb24oKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvaW5UeXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4UG9zID0gTUtVdGlscy5yYW5kb21OTSgtMjAwLCAyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeVBvcyA9IE1LVXRpbHMucmFuZG9tTk0oLTIwMCwgMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhQb3MxID0gTUtVdGlscy5yYW5kb21OTSgtMjAwLCAyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeVBvczEgPSBNS1V0aWxzLnJhbmRvbU5NKC0yMDAsIDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZXppZXIgPSBbY2MudjIoc3RhcnRQb3MueCArIHhQb3MsIHN0YXJ0UG9zLnkgKyB5UG9zKSwgY2MudjIoZW5kTm9kZVBvcy54ICsgeFBvczEsIGVuZE5vZGVQb3MueSArIHlQb3MxKSwgZW5kTm9kZVBvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoMC4yLCBjYy52MigtNSwgNSkpLmVhc2luZyhjYy5lYXNlT3V0KDQuMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmJlemllclRvKGRpcyAvIDgwMCwgYmV6aWVyKS5lYXNpbmcoY2MuZWFzZU91dCgxLjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMS4yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gY291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlVQREFURV9NT05FWSwgbW9uZXlOdW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVzdHJveVNlbGYoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4UG9zID0gTUtVdGlscy5yYW5kb21OTSgtMTAwLCAxMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeVBvcyA9IE1LVXRpbHMucmFuZG9tTk0oLTEwMCwgMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVsYXlUaW1lID0gMC4xICsgbnVtICogMC4wNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgwLjQsIGNjLnYyKHhQb3MsIHlQb3MpKS5lYXNpbmcoY2MuZWFzZU91dCg0LjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoZGVsYXlUaW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oZGlzIC8gMTUwMCwgZW5kTm9kZVBvcykuZWFzaW5nKGNjLmVhc2VPdXQoMS4wKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEuMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2luVHlwZSA9PSAyKSBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX0dPTEQsIG1vbmV5TnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlVQREFURV9BQ0NFVF9ERUdSRUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVzdHJveVNlbGYoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWZmZWN0TWFuYWdlci5pbnN0YW5jZSgpO1xuIl19
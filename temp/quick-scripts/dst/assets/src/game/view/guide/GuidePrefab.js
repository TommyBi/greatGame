
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/guide/GuidePrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '405d03F1IpC/aF2fbVb7X/F', 'GuidePrefab');
// src/game/view/guide/GuidePrefab.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var GameMainView_1 = require("../main/GameMainView");
var TopPrefab_1 = require("../main/TopPrefab");
var OrderGetScuessView_1 = require("../order/OrderGetScuessView");
var OrderRewardView_1 = require("../order/OrderRewardView");
var OrderSuccessView_1 = require("../order/OrderSuccessView");
var OrderView_1 = require("../order/OrderView");
var VegetablesView_1 = require("../vegetables/VegetablesView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GuidePrefab = /** @class */ (function (_super) {
    __extends(GuidePrefab, _super);
    function GuidePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = null;
        _this.mask2 = null;
        _this.mask3 = null;
        _this.mask4 = null;
        _this.dialog = null;
        _this.goOn = null;
        _this.shou = null;
        _this.lock = null;
        _this.descLb = null;
        _this.isWrite = false;
        _this.writeInterval = 0.05;
        _this.writeDt = 0;
        _this.descArr = [];
        _this.descList = [
            "欢迎来到幸福集市，快去接取订单赚钱吧",
            "点击接取你的第一个订单吧",
            "",
            "订单需要玉米和红薯，快去种植吧",
            "点击种下玉米吧",
            "订单还需要红薯，继续种植吧",
            "点击种下红薯吧",
            "作物成长有点慢，点击加速作物收获吧",
            "现在可以收获玉米啦",
            "继续收获红薯吧",
            "订单终于完成啦，快领取你的订单奖励吧",
            "",
            "",
            "继续接单还会出现大额订单哦，奖励更加丰厚，努力赚钱提现吧",
        ];
        _this.canTouch = true;
        return _this;
    }
    GuidePrefab.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize);
        this.initPoint = this.dialog.getPosition();
    };
    GuidePrefab.prototype.start = function () {
        // this.dialogAnim();
        this.updateStep();
        EventDispath_1.default.addEventListener(EventType_1.EventType.GUIDE_Hide, this.hide, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.GUIDE_UPDATE, this.nextStep, this);
        EventDispath_1.default.on(this.goOn, this.nextStep, this, 0.5, false);
    };
    GuidePrefab.prototype.dialogAnim = function () {
        this.hideShou();
        this.dialog.active = true;
        // this.descLb.string = "";
        // this.dialog.y = -1800;
        // this.dialog.stopAllActions();
        // let p = this.dialog.getPosition();
        // let y = this.pointYs[PlayerModel.guideStep]
        // let dis = MKUtils.twoPointDistance(p, cc.v2(p.x, y));
        // this.dialog.runAction(cc.sequence(cc.moveTo(dis / 1500, 0, y).easing(cc.easeBackOut()), cc.callFunc(() => {
        this.updateDesc();
        this.canTouch = true;
        // })));
    };
    GuidePrefab.prototype.hide = function () {
        this.mask1.node.active = false;
        this.mask2.node.active = false;
        this.mask3.node.active = false;
        this.mask4.node.active = false;
        this.dialog.active = false;
        this.hideShou();
    };
    GuidePrefab.prototype.hideShou = function () {
        this.shou.stopAllActions();
        this.shou.active = false;
        this.goOn.active = false;
        this.descLb.string = "";
    };
    GuidePrefab.prototype.nextStep = function () {
        PlayerModel_1.default.guideStep = 1;
        console.log("引导步骤" + PlayerModel_1.default.guideStep);
        this.updateStep();
    };
    GuidePrefab.prototype.updateStep = function () {
        this.hide();
        var p1, p2;
        switch (PlayerModel_1.default.guideStep) {
            case 0:
                this.mask1.node.active = true;
                this.dialogAnim();
                var topPrefab = UIMananger_1.default.top;
                p1 = topPrefab.getComponent(TopPrefab_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.mask1.node.setPosition(p2);
                // this.shou.active = true;
                // this.shou.setPosition(p2.x, p2.y);
                // ComponentHelper.setHeartAction(this.shou);
                break;
            case 1:
                this.dialogAnim();
                this.mask2.node.active = true;
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y - 300);
                var order = MkUtils_1.default.findNodeByName(cc.director.getScene(), "OrderView");
                p1 = order.getComponent(OrderView_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.mask2.node.setPosition(p2);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y - 100);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 2:
                var get = MkUtils_1.default.findNodeByName(cc.director.getScene(), "OrderGetScuessView");
                p1 = get.getComponent(OrderGetScuessView_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 300);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 3:
                this.dialogAnim();
                var game = MkUtils_1.default.findNodeByName(cc.director.getScene(), "GameMainView");
                p1 = game.getComponent(GameMainView_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 500);
                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x, p2.y + 100);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y + 150);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 4:
                this.dialogAnim();
                var plant = MkUtils_1.default.findNodeByName(cc.director.getScene(), "VegetablesView");
                p1 = plant.getComponent(VegetablesView_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.mask4.node.active = true;
                this.mask4.node.setPosition(p2.x, p2.y);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 5:
                this.dialogAnim();
                var game1 = MkUtils_1.default.findNodeByName(cc.director.getScene(), "GameMainView");
                p1 = game1.getComponent(GameMainView_1.default).getGuidePoint1();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 500);
                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x, p2.y + 100);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y + 150);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 6:
                this.dialogAnim();
                var plant1 = MkUtils_1.default.findNodeByName(cc.director.getScene(), "VegetablesView");
                p1 = plant1.getComponent(VegetablesView_1.default).getGuidePoint1();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.mask4.node.active = true;
                this.mask4.node.setPosition(p2.x, p2.y);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 7:
                this.dialogAnim();
                var game2 = MkUtils_1.default.findNodeByName(cc.director.getScene(), "GameMainView");
                p1 = game2.getComponent(GameMainView_1.default).getGuideJsPoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y);
                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x + 30, p2.y);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 8:
                this.dialogAnim();
                var game3 = MkUtils_1.default.findNodeByName(cc.director.getScene(), "GameMainView");
                p1 = game3.getComponent(GameMainView_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 500);
                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x, p2.y + 100);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y + 150);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 9:
                this.dialogAnim();
                var game4 = MkUtils_1.default.findNodeByName(cc.director.getScene(), "GameMainView");
                p1 = game4.getComponent(GameMainView_1.default).getGuidePoint1();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y + 500);
                this.mask3.node.active = true;
                this.mask3.node.setPosition(p2.x, p2.y + 100);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y + 50);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 10:
                this.mask1.node.active = true;
                this.dialogAnim();
                var top = UIMananger_1.default.top;
                p1 = top.getComponent(TopPrefab_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.mask1.node.setPosition(p2);
                this.shou.active = true;
                this.shou.setPosition(p2.x + 300, p2.y);
                ComponentHelper_1.default.setHeartAction(this.shou);
                break;
            case 11:
                // // MKUtils.setNodeDelay(this.node, 2, () => {
                this.dialogAnim();
                var v = MkUtils_1.default.findNodeByName(cc.director.getScene(), "OrderSuccessView");
                p1 = v.getComponent(OrderSuccessView_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y - 600);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper_1.default.setHeartAction(this.shou);
                // })
                break;
            case 12:
                // MKUtils.setNodeDelay(this.node, 2, () => {
                var vg = MkUtils_1.default.findNodeByName(cc.director.getScene(), "OrderRewardView");
                p1 = vg.getComponent(OrderRewardView_1.default).getGuidePoint();
                p2 = this.node.convertToNodeSpaceAR(p1);
                this.shou.active = true;
                this.shou.setPosition(p2.x, p2.y);
                ComponentHelper_1.default.setHeartAction(this.shou);
                // })
                break;
            case 13:
                this.lock.active = true;
                // this.mask1.node.active = true;
                this.dialogAnim();
                this.dialog.setPosition(this.initPoint.x, this.initPoint.y);
                this.shou.active = true;
                this.shou.setPosition(this.goOn.getPosition());
                ComponentHelper_1.default.setHeartAction(this.shou);
                this.goOn.active = true;
                break;
            case 14:
                UIMananger_1.default.showPanel(UIType_1.default.loginDay);
                PlayerModel_1.default.guideStep = -100;
                this.lock.active = false;
                EventDispath_1.default.send(EventType_1.EventType.MAIN_LOCK, false);
                PlayerModel_1.default.guideState = 1;
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_COMPLETE);
                this.node.removeFromParent();
                this.node.destroy();
                break;
        }
    };
    GuidePrefab.prototype.updateDesc = function () {
        var str = this.descList[PlayerModel_1.default.guideStep];
        if (str != "") {
            this.dialog.active = true;
            this.descArr = [];
            this.descArr = str.split("");
            console.log("引导描述：", this.descArr);
            this.isWrite = true;
        }
        else {
            this.dialog.active = false;
        }
    };
    GuidePrefab.prototype.update = function (dt) {
        if (!this.isWrite || dt > 0.5)
            return;
        this.writeDt += dt;
        if (this.writeDt > this.writeInterval) {
            this.writeDt = 0;
            if (!this.descArr.length) {
                this.isWrite = false;
                return;
            }
            this.descLb.string += this.descArr.shift();
        }
    };
    __decorate([
        property(cc.Mask)
    ], GuidePrefab.prototype, "mask1", void 0);
    __decorate([
        property(cc.Mask)
    ], GuidePrefab.prototype, "mask2", void 0);
    __decorate([
        property(cc.Mask)
    ], GuidePrefab.prototype, "mask3", void 0);
    __decorate([
        property(cc.Mask)
    ], GuidePrefab.prototype, "mask4", void 0);
    __decorate([
        property(cc.Node)
    ], GuidePrefab.prototype, "dialog", void 0);
    __decorate([
        property(cc.Node)
    ], GuidePrefab.prototype, "goOn", void 0);
    __decorate([
        property(cc.Node)
    ], GuidePrefab.prototype, "shou", void 0);
    __decorate([
        property(cc.Node)
    ], GuidePrefab.prototype, "lock", void 0);
    __decorate([
        property(cc.Label)
    ], GuidePrefab.prototype, "descLb", void 0);
    GuidePrefab = __decorate([
        ccclass
    ], GuidePrefab);
    return GuidePrefab;
}(cc.Component));
exports.default = GuidePrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2d1aWRlL0d1aWRlUHJlZmFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xGLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSw0REFBdUQ7QUFDdkQsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUdsRCxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLGtFQUE2RDtBQUM3RCw0REFBdUQ7QUFDdkQsOERBQXlEO0FBQ3pELGdEQUEyQztBQUMzQywrREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEyVUM7UUF4VUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixhQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ1gsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVEsR0FBRztZQUNQLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2QsRUFBRTtZQUNGLGlCQUFpQjtZQUNqQixTQUFT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Q3JCLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUM7SUFDTCxDQUFDO0lBdFVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNLO0lBbkJQLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EyVS9CO0lBQUQsa0JBQUM7Q0EzVUQsQUEyVUMsQ0EzVXdDLEVBQUUsQ0FBQyxTQUFTLEdBMlVwRDtrQkEzVW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgSlNIZWxwZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9oZWxwZXIvSlNIZWxwZXJcIjtcclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJRWZmZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvQ29tcG9uZW50SGVscGVyXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQgTHZVcFZpZXcgZnJvbSBcIi4uL2x2VXAvTHZVcFZpZXdcIjtcclxuaW1wb3J0IEdhbWVNYWluVmlldyBmcm9tIFwiLi4vbWFpbi9HYW1lTWFpblZpZXdcIjtcclxuaW1wb3J0IFRvcFByZWZhYiBmcm9tIFwiLi4vbWFpbi9Ub3BQcmVmYWJcIjtcclxuaW1wb3J0IE9yZGVyR2V0U2N1ZXNzVmlldyBmcm9tIFwiLi4vb3JkZXIvT3JkZXJHZXRTY3Vlc3NWaWV3XCI7XHJcbmltcG9ydCBPcmRlclJld2FyZFZpZXcgZnJvbSBcIi4uL29yZGVyL09yZGVyUmV3YXJkVmlld1wiO1xyXG5pbXBvcnQgT3JkZXJTdWNjZXNzVmlldyBmcm9tIFwiLi4vb3JkZXIvT3JkZXJTdWNjZXNzVmlld1wiO1xyXG5pbXBvcnQgT3JkZXJWaWV3IGZyb20gXCIuLi9vcmRlci9PcmRlclZpZXdcIjtcclxuaW1wb3J0IFZlZ2V0YWJsZXNWaWV3IGZyb20gXCIuLi92ZWdldGFibGVzL1ZlZ2V0YWJsZXNWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVQcmVmYWIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXNrKVxyXG4gICAgbWFzazE6IGNjLk1hc2sgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk1hc2spXHJcbiAgICBtYXNrMjogY2MuTWFzayA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTWFzaylcclxuICAgIG1hc2szOiBjYy5NYXNrID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5NYXNrKVxyXG4gICAgbWFzazQ6IGNjLk1hc2sgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkaWFsb2c6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnb09uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2hvdTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxvY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGVzY0xiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgaXNXcml0ZSA9IGZhbHNlO1xyXG4gICAgd3JpdGVJbnRlcnZhbCA9IDAuMDU7XHJcbiAgICB3cml0ZUR0ID0gMFxyXG4gICAgZGVzY0FyciA9IFtdO1xyXG4gICAgZGVzY0xpc3QgPSBbXHJcbiAgICAgICAgXCLmrKLov47mnaXliLDlubjnpo/pm4bluILvvIzlv6vljrvmjqXlj5borqLljZXotZrpkrHlkKdcIixcclxuICAgICAgICBcIueCueWHu+aOpeWPluS9oOeahOesrOS4gOS4quiuouWNleWQp1wiLFxyXG4gICAgICAgIFwiXCIsXHJcbiAgICAgICAgXCLorqLljZXpnIDopoHnjonnsbPlkoznuqLolq/vvIzlv6vljrvnp43mpI3lkKdcIixcclxuICAgICAgICBcIueCueWHu+enjeS4i+eOieexs+WQp1wiLFxyXG4gICAgICAgIFwi6K6i5Y2V6L+Y6ZyA6KaB57qi6Jav77yM57un57ut56eN5qSN5ZCnXCIsXHJcbiAgICAgICAgXCLngrnlh7vnp43kuIvnuqLolq/lkKdcIixcclxuICAgICAgICBcIuS9nOeJqeaIkOmVv+acieeCueaFou+8jOeCueWHu+WKoOmAn+S9nOeJqeaUtuiOt+WQp1wiLFxyXG4gICAgICAgIFwi546w5Zyo5Y+v5Lul5pS26I63546J57Gz5ZWmXCIsXHJcbiAgICAgICAgXCLnu6fnu63mlLbojrfnuqLolq/lkKdcIixcclxuICAgICAgICBcIuiuouWNlee7iOS6juWujOaIkOWVpu+8jOW/q+mihuWPluS9oOeahOiuouWNleWlluWKseWQp1wiLFxyXG4gICAgICAgIFwiXCIsXHJcbiAgICAgICAgXCJcIixcclxuICAgICAgICBcIue7p+e7reaOpeWNlei/mOS8muWHuueOsOWkp+mineiuouWNleWTpu+8jOWlluWKseabtOWKoOS4sOWOmu+8jOWKquWKm+i1mumSseaPkOeOsOWQp1wiLFxyXG4gICAgXVxyXG4gICAgY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgaW5pdFBvaW50OiBjYy5WZWMyO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcclxuICAgICAgICB0aGlzLmluaXRQb2ludCA9IHRoaXMuZGlhbG9nLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5kaWFsb2dBbmltKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGVwKCk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkdVSURFX0hpZGUsIHRoaXMuaGlkZSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkdVSURFX1VQREFURSwgdGhpcy5uZXh0U3RlcCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuZ29PbiwgdGhpcy5uZXh0U3RlcCwgdGhpcywgMC41LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlhbG9nQW5pbSgpIHtcclxuICAgICAgICB0aGlzLmhpZGVTaG91KCk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLmRlc2NMYi5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIC8vIHRoaXMuZGlhbG9nLnkgPSAtMTgwMDtcclxuICAgICAgICAvLyB0aGlzLmRpYWxvZy5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIC8vIGxldCBwID0gdGhpcy5kaWFsb2cuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyBsZXQgeSA9IHRoaXMucG9pbnRZc1tQbGF5ZXJNb2RlbC5ndWlkZVN0ZXBdXHJcbiAgICAgICAgLy8gbGV0IGRpcyA9IE1LVXRpbHMudHdvUG9pbnREaXN0YW5jZShwLCBjYy52MihwLngsIHkpKTtcclxuICAgICAgICAvLyB0aGlzLmRpYWxvZy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKGRpcyAvIDE1MDAsIDAsIHkpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGVzYygpO1xyXG4gICAgICAgIHRoaXMuY2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIC8vIH0pKSk7XHJcbiAgICB9XHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMubWFzazEubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1hc2syLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXNrMy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFzazQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpYWxvZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmhpZGVTaG91KCk7XHJcbiAgICB9XHJcbiAgICBoaWRlU2hvdSgpIHtcclxuICAgICAgICB0aGlzLnNob3Uuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnNob3UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nb09uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBuZXh0U3RlcCgpIHtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byV5a+85q2l6aqkXCIgKyBQbGF5ZXJNb2RlbC5ndWlkZVN0ZXApO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RlcCgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU3RlcCgpIHtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICBsZXQgcDEsIHAyO1xyXG4gICAgICAgIHN3aXRjaCAoUGxheWVyTW9kZWwuZ3VpZGVTdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazEubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dBbmltKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wUHJlZmFiID0gVUlNYW5hbmdlci50b3BcclxuICAgICAgICAgICAgICAgIHAxID0gdG9wUHJlZmFiLmdldENvbXBvbmVudChUb3BQcmVmYWIpLmdldEd1aWRlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazEubm9kZS5zZXRQb3NpdGlvbihwMik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaG91LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3Uuc2V0UG9zaXRpb24ocDIueCwgcDIueSk7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21wb25lbnRIZWxwZXIuc2V0SGVhcnRBY3Rpb24odGhpcy5zaG91KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0FuaW0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2V0UG9zaXRpb24odGhpcy5pbml0UG9pbnQueCwgdGhpcy5pbml0UG9pbnQueSAtIDMwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXIgPSBNS1V0aWxzLmZpbmROb2RlQnlOYW1lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCksIFwiT3JkZXJWaWV3XCIpXHJcbiAgICAgICAgICAgICAgICBwMSA9IG9yZGVyLmdldENvbXBvbmVudChPcmRlclZpZXcpLmdldEd1aWRlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazIubm9kZS5zZXRQb3NpdGlvbihwMik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3Uuc2V0UG9zaXRpb24ocDIueCwgcDIueSAtIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnRIZWxwZXIuc2V0SGVhcnRBY3Rpb24odGhpcy5zaG91KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2V0ID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLCBcIk9yZGVyR2V0U2N1ZXNzVmlld1wiKVxyXG4gICAgICAgICAgICAgICAgcDEgPSBnZXQuZ2V0Q29tcG9uZW50KE9yZGVyR2V0U2N1ZXNzVmlldykuZ2V0R3VpZGVQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgcDIgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNldFBvc2l0aW9uKHRoaXMuaW5pdFBvaW50LngsIHRoaXMuaW5pdFBvaW50LnkgKyAzMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91LnNldFBvc2l0aW9uKHAyLngsIHAyLnkpO1xyXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50SGVscGVyLnNldEhlYXJ0QWN0aW9uKHRoaXMuc2hvdSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dBbmltKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZSA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSwgXCJHYW1lTWFpblZpZXdcIilcclxuICAgICAgICAgICAgICAgIHAxID0gZ2FtZS5nZXRDb21wb25lbnQoR2FtZU1haW5WaWV3KS5nZXRHdWlkZVBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICBwMiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2V0UG9zaXRpb24odGhpcy5pbml0UG9pbnQueCwgdGhpcy5pbml0UG9pbnQueSArIDUwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrMy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2szLm5vZGUuc2V0UG9zaXRpb24ocDIueCwgcDIueSArIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3Uuc2V0UG9zaXRpb24ocDIueCwgcDIueSArIDE1MCk7XHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnRIZWxwZXIuc2V0SGVhcnRBY3Rpb24odGhpcy5zaG91KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0FuaW0oKTtcclxuICAgICAgICAgICAgICAgIGxldCBwbGFudCA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSwgXCJWZWdldGFibGVzVmlld1wiKVxyXG4gICAgICAgICAgICAgICAgcDEgPSBwbGFudC5nZXRDb21wb25lbnQoVmVnZXRhYmxlc1ZpZXcpLmdldEd1aWRlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2s0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazQubm9kZS5zZXRQb3NpdGlvbihwMi54LCBwMi55KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2V0UG9zaXRpb24odGhpcy5pbml0UG9pbnQueCwgdGhpcy5pbml0UG9pbnQueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3Uuc2V0UG9zaXRpb24ocDIueCwgcDIueSk7XHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnRIZWxwZXIuc2V0SGVhcnRBY3Rpb24odGhpcy5zaG91KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0FuaW0oKTtcclxuICAgICAgICAgICAgICAgIGxldCBnYW1lMSA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSwgXCJHYW1lTWFpblZpZXdcIilcclxuICAgICAgICAgICAgICAgIHAxID0gZ2FtZTEuZ2V0Q29tcG9uZW50KEdhbWVNYWluVmlldykuZ2V0R3VpZGVQb2ludDEoKTtcclxuICAgICAgICAgICAgICAgIHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zZXRQb3NpdGlvbih0aGlzLmluaXRQb2ludC54LCB0aGlzLmluaXRQb2ludC55ICsgNTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2szLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazMubm9kZS5zZXRQb3NpdGlvbihwMi54LCBwMi55ICsgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5zZXRQb3NpdGlvbihwMi54LCBwMi55ICsgMTUwKTtcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudEhlbHBlci5zZXRIZWFydEFjdGlvbih0aGlzLnNob3UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBsYW50MSA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSwgXCJWZWdldGFibGVzVmlld1wiKVxyXG4gICAgICAgICAgICAgICAgcDEgPSBwbGFudDEuZ2V0Q29tcG9uZW50KFZlZ2V0YWJsZXNWaWV3KS5nZXRHdWlkZVBvaW50MSgpO1xyXG4gICAgICAgICAgICAgICAgcDIgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrNC5ub2RlLnNldFBvc2l0aW9uKHAyLngsIHAyLnkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zZXRQb3NpdGlvbih0aGlzLmluaXRQb2ludC54LCB0aGlzLmluaXRQb2ludC55KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5zZXRQb3NpdGlvbihwMi54LCBwMi55KTtcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudEhlbHBlci5zZXRIZWFydEFjdGlvbih0aGlzLnNob3UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdhbWUyID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLCBcIkdhbWVNYWluVmlld1wiKVxyXG4gICAgICAgICAgICAgICAgcDEgPSBnYW1lMi5nZXRDb21wb25lbnQoR2FtZU1haW5WaWV3KS5nZXRHdWlkZUpzUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zZXRQb3NpdGlvbih0aGlzLmluaXRQb2ludC54LCB0aGlzLmluaXRQb2ludC55KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2szLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazMubm9kZS5zZXRQb3NpdGlvbihwMi54ICsgMzAsIHAyLnkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91LnNldFBvc2l0aW9uKHAyLngsIHAyLnkpO1xyXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50SGVscGVyLnNldEhlYXJ0QWN0aW9uKHRoaXMuc2hvdSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dBbmltKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZTMgPSBNS1V0aWxzLmZpbmROb2RlQnlOYW1lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCksIFwiR2FtZU1haW5WaWV3XCIpXHJcbiAgICAgICAgICAgICAgICBwMSA9IGdhbWUzLmdldENvbXBvbmVudChHYW1lTWFpblZpZXcpLmdldEd1aWRlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5zZXRQb3NpdGlvbih0aGlzLmluaXRQb2ludC54LCB0aGlzLmluaXRQb2ludC55ICsgNTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2szLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazMubm9kZS5zZXRQb3NpdGlvbihwMi54LCBwMi55ICsgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5zZXRQb3NpdGlvbihwMi54LCBwMi55ICsgMTUwKTtcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudEhlbHBlci5zZXRIZWFydEFjdGlvbih0aGlzLnNob3UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdhbWU0ID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLCBcIkdhbWVNYWluVmlld1wiKVxyXG4gICAgICAgICAgICAgICAgcDEgPSBnYW1lNC5nZXRDb21wb25lbnQoR2FtZU1haW5WaWV3KS5nZXRHdWlkZVBvaW50MSgpO1xyXG4gICAgICAgICAgICAgICAgcDIgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNldFBvc2l0aW9uKHRoaXMuaW5pdFBvaW50LngsIHRoaXMuaW5pdFBvaW50LnkgKyA1MDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWFzazMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrMy5ub2RlLnNldFBvc2l0aW9uKHAyLngsIHAyLnkgKyAxMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91LnNldFBvc2l0aW9uKHAyLngsIHAyLnkgKyA1MCk7XHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnRIZWxwZXIuc2V0SGVhcnRBY3Rpb24odGhpcy5zaG91KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrMS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0FuaW0oKTtcclxuICAgICAgICAgICAgICAgIGxldCB0b3AgPSBVSU1hbmFuZ2VyLnRvcFxyXG4gICAgICAgICAgICAgICAgcDEgPSB0b3AuZ2V0Q29tcG9uZW50KFRvcFByZWZhYikuZ2V0R3VpZGVQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgcDIgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrMS5ub2RlLnNldFBvc2l0aW9uKHAyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5zZXRQb3NpdGlvbihwMi54ICsgMzAwLCBwMi55KTtcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudEhlbHBlci5zZXRIZWFydEFjdGlvbih0aGlzLnNob3UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgLy8gLy8gTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0FuaW0oKTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLCBcIk9yZGVyU3VjY2Vzc1ZpZXdcIilcclxuICAgICAgICAgICAgICAgIHAxID0gdi5nZXRDb21wb25lbnQoT3JkZXJTdWNjZXNzVmlldykuZ2V0R3VpZGVQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgcDIgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNldFBvc2l0aW9uKHRoaXMuaW5pdFBvaW50LngsIHRoaXMuaW5pdFBvaW50LnkgLSA2MDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91LnNldFBvc2l0aW9uKHAyLngsIHAyLnkpO1xyXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50SGVscGVyLnNldEhlYXJ0QWN0aW9uKHRoaXMuc2hvdSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgLy8gTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmcgPSBNS1V0aWxzLmZpbmROb2RlQnlOYW1lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCksIFwiT3JkZXJSZXdhcmRWaWV3XCIpXHJcbiAgICAgICAgICAgICAgICBwMSA9IHZnLmdldENvbXBvbmVudChPcmRlclJld2FyZFZpZXcpLmdldEd1aWRlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdS5zZXRQb3NpdGlvbihwMi54LCBwMi55KTtcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudEhlbHBlci5zZXRIZWFydEFjdGlvbih0aGlzLnNob3UpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEzOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9jay5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubWFzazEubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dBbmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuc2V0UG9zaXRpb24odGhpcy5pbml0UG9pbnQueCwgdGhpcy5pbml0UG9pbnQueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3Uuc2V0UG9zaXRpb24odGhpcy5nb09uLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50SGVscGVyLnNldEhlYXJ0QWN0aW9uKHRoaXMuc2hvdSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb09uLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUubG9naW5EYXkpO1xyXG4gICAgICAgICAgICAgICAgUGxheWVyTW9kZWwuZ3VpZGVTdGVwID0gLTEwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5NQUlOX0xPQ0ssIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIFBsYXllck1vZGVsLmd1aWRlU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkdVSURFX0NPTVBMRVRFKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZXNjKCkge1xyXG4gICAgICAgIGxldCBzdHIgPSB0aGlzLmRlc2NMaXN0W1BsYXllck1vZGVsLmd1aWRlU3RlcF07XHJcbiAgICAgICAgaWYgKHN0ciAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY0FyciA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NBcnIgPSBzdHIuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5byV5a+85o+P6L+w77yaXCIsIHRoaXMuZGVzY0FycilcclxuICAgICAgICAgICAgdGhpcy5pc1dyaXRlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzV3JpdGUgfHwgZHQgPiAwLjUpIHJldHVybjtcclxuICAgICAgICB0aGlzLndyaXRlRHQgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMud3JpdGVEdCA+IHRoaXMud3JpdGVJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlRHQgPSAwO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVzY0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNXcml0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyArPSB0aGlzLmRlc2NBcnIuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
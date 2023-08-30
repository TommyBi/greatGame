"use strict";
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
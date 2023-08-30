"use strict";
cc._RF.push(module, '046669uInFF0Z+jrPk126+V', 'TopPrefab');
// src/game/view/main/TopPrefab.ts

"use strict";
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
var JSHelper_1 = require("../../../framework/helper/JSHelper");
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var Utils_1 = require("../../../framework/tools/Utils");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var PopView1_1 = require("../popView/PopView1");
var TopOrderPrefab_1 = require("./TopOrderPrefab");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopPrefab = /** @class */ (function (_super) {
    __extends(TopPrefab, _super);
    function TopPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.moneyLab = null;
        _this.goldLab = null;
        _this.addGold = null;
        _this.degreeLb = null;
        _this.lvLb = null;
        _this.lvProBg = null;
        _this.lvProLb = null;
        _this.settingBtn = null;
        _this.headIcon = null;
        _this.flyMoney = null;
        _this.flyGold = null;
        _this.flyXfzs = null;
        _this.orderGp = null;
        _this.topOrder = null;
        //money动画开启
        _this._startMoney = 0;
        _this._endMoney = 0;
        _this._curTimer = 0;
        _this._endTimer = Utils_1.default._FT(10);
        return _this;
    }
    TopPrefab.prototype.onLoad = function () {
        this.initOrder();
    };
    TopPrefab.prototype.onEnable = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.UPDATE_MONEY, this.updateTopMoney, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.UPDATE_GOLD, this.updateGold, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.UPDATE_XFZS, this.updateXfzs, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.LEVEL_UPDATE, this.updateLv, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_WXBIND, this.updateHead, this);
        this.updateHead();
    };
    TopPrefab.prototype.onDisable = function () {
    };
    TopPrefab.prototype.start = function () {
        this.flyMoney.y = -15;
        this.flyGold.y = -15;
        this.flyXfzs.y = -450;
        this.initData();
    };
    TopPrefab.prototype.initData = function () {
        this.updateLv();
        this.moneyLab.string = PlayerModel_1.default.getMoney() + "\u5143";
        this.goldLab.string = "" + PlayerModel_1.default.getGold();
        this.degreeLb.string = "" + PlayerModel_1.default.getXfzs();
        // this.updateTixianTips();
    };
    TopPrefab.prototype.updateHead = function () {
        var headUrl = SDKManager_1.default.getUserIcon();
        // let headUrl = "https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEKM0iaGwI4LEdCUicZuIgmrm4zXNMlDHYq7XnA36qKUX5n6ibzjtWgPj7ocPgE2ialhJ2eOG9NgTXam8A/132";
        if (headUrl && headUrl != "") {
            var self_1 = this;
            cc.assetManager.loadRemote(headUrl, { ext: '.png' }, function (err, texture) {
                if (err) {
                    console.log("头像加载失败", headUrl);
                    return;
                }
                self_1.headIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            });
        }
    };
    //设置
    TopPrefab.prototype.openSetting = function () {
        JSHelper_1.default.playClickEffect();
        UIMananger_1.default.showPanel(UIType_1.default.settingView);
    };
    /** 幸福指数 */
    TopPrefab.prototype.openXfzs = function () {
        JSHelper_1.default.playClickEffect();
        UIMananger_1.default.showPanel(UIType_1.default.xfzsView);
    };
    /** 增加钞票 */
    TopPrefab.prototype.openAddGold = function () {
        JSHelper_1.default.playClickEffect();
        // UIMananger.showPanel(UIType.ManyiView);
    };
    TopPrefab.prototype.openLevel = function () {
        UIMananger_1.default.showPanel(UIType_1.default.levelView);
    };
    //提现
    TopPrefab.prototype.openTixian = function () {
        JSHelper_1.default.playClickEffect();
        SDKManager_1.default.openWithdraw();
    };
    //领取钞票
    TopPrefab.prototype.openGoldVAiew = function () {
        JSHelper_1.default.playClickEffect();
        UIMananger_1.default.showPanel(UIType_1.default.popView1, null, null, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.GOLD1, 1000);
    };
    TopPrefab.prototype.updateTopMoney = function (data) {
        //ActionFloat后续扩展到引擎上面 TODO
        this.moneyLab.string = PlayerModel_1.default.getMoney() + "\u5143";
        if (Utils_1.default.isUndefined(data)) {
            console.error("TopPrefab updateTopMoney data is undefined");
            return;
        }
        if (data != 0)
            this.flyRewardLabel(Number(data));
        // this.updateTixianTips();
    };
    TopPrefab.prototype.updateLv = function () {
        var data = SDKManager_1.default.getJSLevelInfo();
        console.log("获取等级相关信息", data);
        this.lvProBg.stopAllActions();
        this.lvProBg.angle = 0;
        this.lvLb.string = "Lv." + data.jsLevel;
        if (data.jxOrderNum == 0 && data.userJxOrderNum == 0) {
            this.lvProBg.active = false;
            this.lvProLb.node.active = false;
        }
        else {
            if (data.jxOrderNum != 0 && data.userJxOrderNum >= data.jxOrderNum) {
                this.lvProLb.string = "可升级";
                ComponentHelper_1.default.setRotation(this.lvProBg);
            }
            else {
                this.lvProLb.string = Math.floor(data.userJxOrderNum / data.jxOrderNum * 100) + "%";
            }
        }
    };
    TopPrefab.prototype.updateGold = function (addValue) {
        if (addValue > 0)
            this.flyGoldLb(addValue);
        PlayerModel_1.default.changeGold(addValue);
        this.goldLab.string = "" + PlayerModel_1.default.getGold();
    };
    TopPrefab.prototype.updateXfzs = function (addValue) {
        this.degreeLb.string = "" + PlayerModel_1.default.getXfzs();
        this.flyXfzsLb(addValue);
    };
    TopPrefab.prototype.checkCropUnlock = function () {
        var list = ConfigManager_1.default.crop;
        var newCrop;
        var unLockList = PlayerModel_1.default.getUnlockCrop();
        for (var i = 0; i < list.length; i++) {
            var crop = list[i];
            var index = unLockList.indexOf(crop.id);
        }
        if (newCrop) {
            UIMananger_1.default.showPanel(UIType_1.default.VegetablesUnlockView, null, null, UIEffectManager_1.UIEffectType.SCALE, newCrop.id);
            PlayerModel_1.default.setNewCrop(newCrop.id);
        }
        console.log("新解锁植物", newCrop);
    };
    TopPrefab.prototype.update = function (dt) {
    };
    TopPrefab.prototype.flyRewardLabel = function (num) {
        var _this = this;
        this.flyMoney.stopAllActions();
        this.flyMoney.active = true;
        this.flyMoney.opacity = 255;
        this.flyMoney.getComponent(cc.Label).string = "+" + num.toFixed(2) + "\u5143";
        this.flyMoney.runAction(cc.sequence(cc.moveTo(Utils_1.default._FT(30), cc.v2(this.flyMoney.x, 100)), cc.fadeOut(Utils_1.default._FT(15)), cc.callFunc(function () {
            _this.flyMoney.active = false;
            _this.flyMoney.y = 45;
        })));
    };
    TopPrefab.prototype.flyGoldLb = function (num) {
        var _this = this;
        this.flyGold.stopAllActions();
        this.flyGold.active = true;
        this.flyGold.opacity = 255;
        if (num > 0)
            this.flyGold.getComponent(cc.Label).string = "+" + num;
        else
            this.flyGold.getComponent(cc.Label).string = "" + num;
        this.flyGold.runAction(cc.sequence(cc.moveTo(Utils_1.default._FT(30), cc.v2(this.flyGold.x, 100)), cc.fadeOut(Utils_1.default._FT(15)), cc.callFunc(function () {
            _this.flyGold.active = false;
            _this.flyGold.y = 45;
        })));
    };
    TopPrefab.prototype.flyXfzsLb = function (num) {
        var _this = this;
        this.flyXfzs.stopAllActions();
        this.flyXfzs.active = true;
        this.flyXfzs.opacity = 255;
        this.flyXfzs.getComponent(cc.Label).string = "+" + num;
        this.flyXfzs.runAction(cc.sequence(cc.moveTo(Utils_1.default._FT(30), cc.v2(this.flyXfzs.x, -400)), cc.fadeOut(Utils_1.default._FT(15)), cc.callFunc(function () {
            _this.flyXfzs.active = false;
            _this.flyXfzs.y = -450;
        })));
    };
    TopPrefab.prototype.initOrder = function () {
        var order = cc.instantiate(this.topOrder);
        this.orderGp.addChild(order);
        this.orderPrefab = order.getComponent(TopOrderPrefab_1.default);
    };
    TopPrefab.prototype.getGuidePoint = function () {
        var p = this.orderGp.convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    };
    __decorate([
        property(cc.Label)
    ], TopPrefab.prototype, "moneyLab", void 0);
    __decorate([
        property(cc.Label)
    ], TopPrefab.prototype, "goldLab", void 0);
    __decorate([
        property(cc.Node)
    ], TopPrefab.prototype, "addGold", void 0);
    __decorate([
        property(cc.Label)
    ], TopPrefab.prototype, "degreeLb", void 0);
    __decorate([
        property(cc.Label)
    ], TopPrefab.prototype, "lvLb", void 0);
    __decorate([
        property(cc.Node)
    ], TopPrefab.prototype, "lvProBg", void 0);
    __decorate([
        property(cc.Label)
    ], TopPrefab.prototype, "lvProLb", void 0);
    __decorate([
        property(cc.Node)
    ], TopPrefab.prototype, "settingBtn", void 0);
    __decorate([
        property(cc.Sprite)
    ], TopPrefab.prototype, "headIcon", void 0);
    __decorate([
        property(cc.Node)
    ], TopPrefab.prototype, "flyMoney", void 0);
    __decorate([
        property(cc.Node)
    ], TopPrefab.prototype, "flyGold", void 0);
    __decorate([
        property(cc.Node)
    ], TopPrefab.prototype, "flyXfzs", void 0);
    __decorate([
        property(cc.Node)
    ], TopPrefab.prototype, "orderGp", void 0);
    __decorate([
        property(cc.Prefab)
    ], TopPrefab.prototype, "topOrder", void 0);
    TopPrefab = __decorate([
        ccclass
    ], TopPrefab);
    return TopPrefab;
}(cc.Component));
exports.default = TopPrefab;

cc._RF.pop();
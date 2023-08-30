
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/TopPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vVG9wUHJlZmFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCxvRUFBK0Q7QUFDL0QsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUV2RSx3REFBbUQ7QUFHbkQsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsZ0RBQThDO0FBQzlDLG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXNPQztRQW5PRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQVc7UUFDWCxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFXLGVBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENB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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDTztJQS9CVixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBc083QjtJQUFELGdCQUFDO0NBdE9ELEFBc09DLENBdE9zQyxFQUFFLENBQUMsU0FBUyxHQXNPbEQ7a0JBdE9vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTSGVscGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvaGVscGVyL0pTSGVscGVyXCI7XHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgY3JvcF9jb25maWcgfSBmcm9tIFwiLi4vLi4vY29uc3RzL0NDb25zdFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFBvcFR5cGUgfSBmcm9tIFwiLi4vcG9wVmlldy9Qb3BWaWV3MVwiO1xyXG5pbXBvcnQgVG9wT3JkZXJQcmVmYWIgZnJvbSBcIi4vVG9wT3JkZXJQcmVmYWJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFByZWZhYiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbW9uZXlMYWI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGdvbGRMYWI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWRkR29sZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkZWdyZWVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbHZMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsdlByb0JnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGx2UHJvTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNldHRpbmdCdG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGhlYWRJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmx5TW9uZXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmbHlHb2xkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZmx5WGZ6czogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG9yZGVyR3A6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHRvcE9yZGVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8vbW9uZXnliqjnlLvlvIDlkK9cclxuICAgIF9zdGFydE1vbmV5OiBudW1iZXIgPSAwO1xyXG4gICAgX2VuZE1vbmV5OiBudW1iZXIgPSAwO1xyXG4gICAgX2N1clRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgX2VuZFRpbWVyOiBudW1iZXIgPSBVdGlscy5fRlQoMTApO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb3JkZXJQcmVmYWI6IFRvcE9yZGVyUHJlZmFiO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0T3JkZXIoKTtcclxuXHJcbiAgICB9XHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVVBEQVRFX01PTkVZLCB0aGlzLnVwZGF0ZVRvcE1vbmV5LCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVVBEQVRFX0dPTEQsIHRoaXMudXBkYXRlR29sZCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlVQREFURV9YRlpTLCB0aGlzLnVwZGF0ZVhmenMsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuTEVWRUxfVVBEQVRFLCB0aGlzLnVwZGF0ZUx2LCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlNES19XWEJJTkQsIHRoaXMudXBkYXRlSGVhZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIZWFkKCk7XHJcbiAgICB9XHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5mbHlNb25leS55ID0gLSAxNTtcclxuICAgICAgICB0aGlzLmZseUdvbGQueSA9IC0gMTU7XHJcbiAgICAgICAgdGhpcy5mbHlYZnpzLnkgPSAtIDQ1MDtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBpbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUx2KCk7XHJcbiAgICAgICAgdGhpcy5tb25leUxhYi5zdHJpbmcgPSBgJHtQbGF5ZXJNb2RlbC5nZXRNb25leSgpfeWFg2A7XHJcbiAgICAgICAgdGhpcy5nb2xkTGFiLnN0cmluZyA9IGAke1BsYXllck1vZGVsLmdldEdvbGQoKX1gO1xyXG4gICAgICAgIHRoaXMuZGVncmVlTGIuc3RyaW5nID0gYCR7UGxheWVyTW9kZWwuZ2V0WGZ6cygpfWA7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVUaXhpYW5UaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSGVhZCgpIHtcclxuICAgICAgICBsZXQgaGVhZFVybCA9IFNES01hbmFnZXIuZ2V0VXNlckljb24oKTtcclxuICAgICAgICAvLyBsZXQgaGVhZFVybCA9IFwiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9QaWFqeFNxQlJhRUtNMGlhR3dJNExFZENVaWNadUlnbXJtNHpYTk1sREhZcTdYbkEzNnFLVVg1bjZpYnpqdFdnUGo3b2NQZ0UyaWFsaEoyZU9HOU5nVFhhbThBLzEzMlwiO1xyXG4gICAgICAgIGlmIChoZWFkVXJsICYmIGhlYWRVcmwgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKGhlYWRVcmwsIHsgZXh0OiAnLnBuZycgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZTogY2MuVGV4dHVyZTJEKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlpLTlg4/liqDovb3lpLHotKVcIiwgaGVhZFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5oZWFkSWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/orr7nva5cclxuICAgIG9wZW5TZXR0aW5nKCkge1xyXG4gICAgICAgIEpTSGVscGVyLnBsYXlDbGlja0VmZmVjdCgpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5zZXR0aW5nVmlldyk7XHJcbiAgICB9XHJcbiAgICAvKiog5bm456aP5oyH5pWwICovXHJcbiAgICBvcGVuWGZ6cygpOiB2b2lkIHtcclxuICAgICAgICBKU0hlbHBlci5wbGF5Q2xpY2tFZmZlY3QoKTtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUueGZ6c1ZpZXcpO1xyXG4gICAgfVxyXG4gICAgLyoqIOWinuWKoOmSnuelqCAqL1xyXG4gICAgb3BlbkFkZEdvbGQoKTogdm9pZCB7XHJcbiAgICAgICAgSlNIZWxwZXIucGxheUNsaWNrRWZmZWN0KCk7XHJcbiAgICAgICAgLy8gVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLk1hbnlpVmlldyk7XHJcbiAgICB9XHJcbiAgICBvcGVuTGV2ZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLmxldmVsVmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mj5DnjrBcclxuICAgIG9wZW5UaXhpYW4oKSB7XHJcbiAgICAgICAgSlNIZWxwZXIucGxheUNsaWNrRWZmZWN0KCk7XHJcbiAgICAgICAgU0RLTWFuYWdlci5vcGVuV2l0aGRyYXcoKTtcclxuICAgIH1cclxuICAgIC8v6aKG5Y+W6ZKe56WoXHJcbiAgICBvcGVuR29sZFZBaWV3KCkge1xyXG4gICAgICAgIEpTSGVscGVyLnBsYXlDbGlja0VmZmVjdCgpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5wb3BWaWV3MSwgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCBQb3BUeXBlLkdPTEQxLCAxMDAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVRvcE1vbmV5KGRhdGEpIHtcclxuICAgICAgICAvL0FjdGlvbkZsb2F05ZCO57ut5omp5bGV5Yiw5byV5pOO5LiK6Z2iIFRPRE9cclxuICAgICAgICB0aGlzLm1vbmV5TGFiLnN0cmluZyA9IGAke1BsYXllck1vZGVsLmdldE1vbmV5KCl95YWDYDtcclxuICAgICAgICBpZiAoVXRpbHMuaXNVbmRlZmluZWQoZGF0YSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRvcFByZWZhYiB1cGRhdGVUb3BNb25leSBkYXRhIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YSAhPSAwKSB0aGlzLmZseVJld2FyZExhYmVsKE51bWJlcihkYXRhKSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlVGl4aWFuVGlwcygpO1xyXG5cclxuICAgIH1cclxuICAgIHVwZGF0ZUx2KCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gU0RLTWFuYWdlci5nZXRKU0xldmVsSW5mbygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W562J57qn55u45YWz5L+h5oGvXCIsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMubHZQcm9CZy5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubHZQcm9CZy5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5sdkxiLnN0cmluZyA9IFwiTHYuXCIgKyBkYXRhLmpzTGV2ZWw7XHJcbiAgICAgICAgaWYgKGRhdGEuanhPcmRlck51bSA9PSAwICYmIGRhdGEudXNlckp4T3JkZXJOdW0gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmx2UHJvQmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubHZQcm9MYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5qeE9yZGVyTnVtICE9IDAgJiYgZGF0YS51c2VySnhPcmRlck51bSA+PSBkYXRhLmp4T3JkZXJOdW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubHZQcm9MYi5zdHJpbmcgPSBcIuWPr+WNh+e6p1wiXHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnRIZWxwZXIuc2V0Um90YXRpb24odGhpcy5sdlByb0JnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubHZQcm9MYi5zdHJpbmcgPSBNYXRoLmZsb29yKGRhdGEudXNlckp4T3JkZXJOdW0gLyBkYXRhLmp4T3JkZXJOdW0gKiAxMDApICsgXCIlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVHb2xkKGFkZFZhbHVlKSB7XHJcblxyXG4gICAgICAgIGlmIChhZGRWYWx1ZSA+IDApIHRoaXMuZmx5R29sZExiKGFkZFZhbHVlKTtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5jaGFuZ2VHb2xkKGFkZFZhbHVlKTtcclxuICAgICAgICB0aGlzLmdvbGRMYWIuc3RyaW5nID0gYCR7UGxheWVyTW9kZWwuZ2V0R29sZCgpfWA7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVYZnpzKGFkZFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5kZWdyZWVMYi5zdHJpbmcgPSBgJHtQbGF5ZXJNb2RlbC5nZXRYZnpzKCl9YDtcclxuICAgICAgICB0aGlzLmZseVhmenNMYihhZGRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDcm9wVW5sb2NrKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gQ29uZmlnTWFuYWdlci5jcm9wO1xyXG4gICAgICAgIGxldCBuZXdDcm9wOiBjcm9wX2NvbmZpZztcclxuICAgICAgICBsZXQgdW5Mb2NrTGlzdCA9IFBsYXllck1vZGVsLmdldFVubG9ja0Nyb3AoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNyb3AgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB1bkxvY2tMaXN0LmluZGV4T2YoY3JvcC5pZClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld0Nyb3ApIHtcclxuICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLlZlZ2V0YWJsZXNVbmxvY2tWaWV3LCBudWxsLCBudWxsLCBVSUVmZmVjdFR5cGUuU0NBTEUsIG5ld0Nyb3AuaWQpXHJcbiAgICAgICAgICAgIFBsYXllck1vZGVsLnNldE5ld0Nyb3AobmV3Q3JvcC5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5paw6Kej6ZSB5qSN54mpXCIsIG5ld0Nyb3ApO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIH1cclxuICAgIGZseVJld2FyZExhYmVsKG51bSkge1xyXG4gICAgICAgIHRoaXMuZmx5TW9uZXkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmZseU1vbmV5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mbHlNb25leS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuZmx5TW9uZXkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgKyR7bnVtLnRvRml4ZWQoMil95YWDYDtcclxuICAgICAgICB0aGlzLmZseU1vbmV5LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MubW92ZVRvKFV0aWxzLl9GVCgzMCksIGNjLnYyKHRoaXMuZmx5TW9uZXkueCwgMTAwKSksXHJcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoVXRpbHMuX0ZUKDE1KSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5TW9uZXkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseU1vbmV5LnkgPSA0NTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuICAgIGZseUdvbGRMYihudW0pIHtcclxuICAgICAgICB0aGlzLmZseUdvbGQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmZseUdvbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZseUdvbGQub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICBpZiAobnVtID4gMCkgdGhpcy5mbHlHb2xkLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCske251bX1gO1xyXG4gICAgICAgIGVsc2UgdGhpcy5mbHlHb2xkLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7bnVtfWA7XHJcblxyXG4gICAgICAgIHRoaXMuZmx5R29sZC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbyhVdGlscy5fRlQoMzApLCBjYy52Mih0aGlzLmZseUdvbGQueCwgMTAwKSksXHJcbiAgICAgICAgICAgIGNjLmZhZGVPdXQoVXRpbHMuX0ZUKDE1KSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5R29sZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx5R29sZC55ID0gNDU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICBmbHlYZnpzTGIobnVtKSB7XHJcbiAgICAgICAgdGhpcy5mbHlYZnpzLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5mbHlYZnpzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mbHlYZnpzLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5mbHlYZnpzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCske251bX1gO1xyXG4gICAgICAgIHRoaXMuZmx5WGZ6cy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbyhVdGlscy5fRlQoMzApLCBjYy52Mih0aGlzLmZseVhmenMueCwgLTQwMCkpLFxyXG4gICAgICAgICAgICBjYy5mYWRlT3V0KFV0aWxzLl9GVCgxNSkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseVhmenMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZseVhmenMueSA9IC0gNDUwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRPcmRlcigpIHtcclxuICAgICAgICBsZXQgb3JkZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnRvcE9yZGVyKTtcclxuICAgICAgICB0aGlzLm9yZGVyR3AuYWRkQ2hpbGQob3JkZXIpO1xyXG4gICAgICAgIHRoaXMub3JkZXJQcmVmYWIgPSBvcmRlci5nZXRDb21wb25lbnQoVG9wT3JkZXJQcmVmYWIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEd1aWRlUG9pbnQoKSB7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLm9yZGVyR3AuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxufVxyXG4iXX0=
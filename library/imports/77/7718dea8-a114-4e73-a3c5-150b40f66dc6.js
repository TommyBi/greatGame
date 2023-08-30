"use strict";
cc._RF.push(module, '7718d6ooRROc6PFFQtA9m3G', 'OrderItem');
// src/game/view/order/OrderItem.ts

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
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var Utils_1 = require("../../../framework/tools/Utils");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var PopView1_1 = require("../popView/PopView1");
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrderItem = /** @class */ (function (_super) {
    __extends(OrderItem, _super);
    function OrderItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lvIconList = [];
        _this.lvIcon = null;
        _this.btn_info = null;
        _this.btn_giveUp = null;
        _this.btn_get = null;
        _this.timeBg = null;
        _this.current_tips = null;
        _this.proLb = null;
        _this.updateTimeLb = null;
        _this.cropItems = [];
        _this.lastTime = 0;
        _this.cacheInterval = 0;
        _this.cacheTotal = 10;
        return _this;
    }
    OrderItem.prototype.onLoad = function () {
        this._initComponet();
    };
    OrderItem.prototype.update = function (dt) {
        if (this.lastTime > 0 && !this.data.state) {
            this.cacheInterval += dt;
            if (this.cacheInterval >= this.cacheTotal) {
                this.cacheInterval = 0;
                PlayerModel_1.default.setOrder();
            }
            this.lastTime -= dt;
            this.checkUpDate();
            ComponentHelper_1.default.labelTimeSs(this.updateTimeLb.node, this.lastTime);
            this.updateTimeLb.string = this.updateTimeLb.string + "后刷新";
        }
    };
    OrderItem.prototype.onEnable = function () {
        // this.resetUI();
    };
    OrderItem.prototype.dataChanged = function () {
        this.initUI();
    };
    OrderItem.prototype.initUI = function () {
        this.resetUI();
        if (this.data.unlock) {
            this.unlockGp.active = true;
            if (this.data.state) {
                this.btn_info.active = true;
                this.btn_giveUp.active = true;
                this.current_tips.active = true;
            }
            else {
                if (this.data.id == 0) {
                    this.lastTime = 0;
                }
                else {
                    this.timeBg.active = true;
                    this.updateTimeLb.node.active = true;
                    this.lastTime = this.data.time - Math.floor(Utils_1.default.returnTime() / 1000);
                }
                this.btn_get.active = true;
            }
            var len = this.data.cropList.length;
            var total = 0;
            var current = 0;
            var _loop_1 = function (i) {
                var data = this_1.data.cropList[i];
                var item = this_1.cropItems[i];
                item.icon.node.active = true;
                item.nameLb.node.active = true;
                item.proLb.node.active = true;
                if (data.cropId == 100) {
                    item.nameLb.string = "招待顾客";
                    if (data.num > data.target) {
                        item.proLb.string = data.target + "/" + data.target;
                    }
                    else {
                        item.proLb.string = data.num + "/" + data.target;
                    }
                }
                else {
                    var base = ConfigManager_1.default.getCropById(data.cropId);
                    item.nameLb.string = base.name;
                    var haveNum = PlayerModel_1.default.getHaveNumByID(data.cropId);
                    if (haveNum > data.target) {
                        item.proLb.string = data.target + "/" + data.target;
                    }
                    else {
                        item.proLb.string = haveNum + "/" + data.target;
                    }
                }
                MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + data.cropId), function (res) {
                    item.icon.spriteFrame = res;
                });
            };
            var this_1 = this;
            for (var i = 0; i < len; i++) {
                _loop_1(i);
            }
            // current = current > total ? total : current
            // this.proLb.string = Math.floor((current / total) * 100) + "%"
            if (this.data.quality < 2) {
                this.proLb.string = "无加成";
            }
            else {
                this.proLb.string = "+" + ConfigManager_1.default.order_quality_add[this.data.quality - 1] + "%";
            }
            if (this.data.quality > 0)
                this.lvIcon.spriteFrame = this.lvIconList[this.data.quality - 1];
            else
                this.lvIcon.spriteFrame = this.lvIconList[0];
        }
        else {
            this.lockGp.active = true;
        }
    };
    OrderItem.prototype.checkUpDate = function () {
        if (this.lastTime <= 0) {
            EventDispath_1.default.send(EventType_1.EventType.ORDER_UPDATE_INDEX, this.index);
        }
    };
    OrderItem.prototype.resetUI = function () {
        this.unlockGp.active = false;
        this.lockGp.active = false;
        this.btn_info.active = false;
        this.btn_get.active = false;
        this.btn_giveUp.active = false;
        this.timeBg.active = false;
        this.current_tips.active = false;
        this.updateTimeLb.node.active = false;
        for (var i = 0; i < this.cropItems.length; i++) {
            var item = this.cropItems[i];
            item.icon.node.active = false;
            item.nameLb.node.active = false;
            item.proLb.node.active = false;
        }
    };
    OrderItem.prototype.onGet = function () {
        var order = PlayerModel_1.default.getCurrentOrder();
        if (order) {
            UIMananger_1.default.showPanel(UIType_1.default.orderGetScuessView, null, null, UIEffectManager_1.UIEffectType.SCALE, 1, order);
        }
        else {
            EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_GET_SUCCESS, this.onGetSuccess, this);
            SDKManager_1.default.getOrderTask(this.data.quality);
        }
    };
    OrderItem.prototype.onGetSuccess = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.ORDER_GET_SUCCESS, this.onGetSuccess, this);
        this.data.state = 1;
        this.data.lastTime = 0;
        PlayerModel_1.default.setOrder();
        PlayerModel_1.default.updateOrder();
        UIMananger_1.default.showPanel(UIType_1.default.orderGetScuessView, null, null, UIEffectManager_1.UIEffectType.SCALE, 0, this.data);
        EventDispath_1.default.send(EventType_1.EventType.ORDER_CLOSE);
        if (PlayerModel_1.default.guideStep >= 0) {
            // PlayerModel.guideState = 1;
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
    };
    OrderItem.prototype.onGiveUp = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderGiveUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data);
    };
    OrderItem.prototype.onInfo = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderCurrentView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data);
    };
    //解锁订单
    OrderItem.prototype.onUnlock = function () {
        var _this = this;
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onUnlockSuccess, this);
        UIMananger_1.default.showPanel(UIType_1.default.popView1, null, function () {
            EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, _this.onUnlockSuccess, _this);
        }, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.UNLOCK_ORDER);
    };
    OrderItem.prototype.onUnlockSuccess = function () {
        MkUtils_1.default.alertTips("解锁订单成功");
        EventDispath_1.default.send(EventType_1.EventType.ORDER_UNLOCK, this.index);
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onUnlockSuccess, this);
    };
    OrderItem.prototype._initComponet = function () {
        this.unlockGp = this.node.getChildByName("unlockGp");
        this.lockGp = this.node.getChildByName("lockGp");
        this.btn_info = this.unlockGp.getChildByName("btn_info");
        this.btn_get = this.unlockGp.getChildByName("btn_get");
        this.btn_giveUp = this.unlockGp.getChildByName("btn_giveUp");
        this.timeBg = this.unlockGp.getChildByName("timeBg");
        this.current_tips = this.unlockGp.getChildByName("current_tips");
        this.updateTimeLb = this.unlockGp.getChildByName("updateTimeLb").getComponent(cc.Label);
        this.proLb = this.unlockGp.getChildByName("proLb").getComponent(cc.Label);
        this.lvIcon = this.unlockGp.getChildByName("lvIcon").getComponent(cc.Sprite);
        for (var i = 1; i < 5; i++) {
            var nameLb = this.unlockGp.getChildByName("nameLb" + i).getComponent(cc.Label);
            var proLb = this.unlockGp.getChildByName("cropProLb" + i).getComponent(cc.Label);
            var icon = this.unlockGp.getChildByName("icon" + i).getComponent(cc.Sprite);
            this.cropItems.push({ icon: icon, nameLb: nameLb, proLb: proLb });
        }
    };
    __decorate([
        property([cc.SpriteFrame])
    ], OrderItem.prototype, "lvIconList", void 0);
    OrderItem = __decorate([
        ccclass
    ], OrderItem);
    return OrderItem;
}(AItemRenerer_1.default));
exports.default = OrderItem;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/OrderItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL09yZGVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixvRUFBK0Q7QUFDL0QsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSw0REFBdUQ7QUFDdkQsd0RBQW1EO0FBQ25ELDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBQ3hELGdEQUE4QztBQUM5QyxxREFBaUQ7QUFPM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQXFCO0lBQTVEO1FBQUEscUVBbU5DO1FBL01HLGdCQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUtsQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFDdkIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFxQixFQUFFLENBQUM7UUFFakMsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsRUFBRSxDQUFDOztJQTZMcEIsQ0FBQztJQTVMRywwQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFUyww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SUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0wsQ0FBQztJQTlNRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztpREFDTztJQUpqQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbU43QjtJQUFELGdCQUFDO0NBbk5ELEFBbU5DLENBbk5zQyxzQkFBYSxHQW1ObkQ7a0JBbk5vQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJRWZmZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvQ29tcG9uZW50SGVscGVyXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9VdGlsc1wiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQb3BUeXBlIH0gZnJvbSBcIi4uL3BvcFZpZXcvUG9wVmlldzFcIjtcclxuaW1wb3J0IEFJdGVtUmVuZGVyZXIgZnJvbSBcIi4uL3Rhc2svQUl0ZW1SZW5lcmVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9yZGVySXRlbV9Dcm9wIHtcclxuICAgIGljb246IGNjLlNwcml0ZSxcclxuICAgIG5hbWVMYjogY2MuTGFiZWwsXHJcbiAgICBwcm9MYjogY2MuTGFiZWxcclxufVxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckl0ZW0gZXh0ZW5kcyBBSXRlbVJlbmRlcmVyPHN0cmluZz4ge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIGx2SWNvbkxpc3Q6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICB1bmxvY2tHcDogY2MuTm9kZTtcclxuICAgIGxvY2tHcDogY2MuTm9kZTtcclxuXHJcbiAgICBsdkljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBidG5faW5mbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG5fZ2l2ZVVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bl9nZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgdGltZUJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGN1cnJlbnRfdGlwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcm9MYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgdXBkYXRlVGltZUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgY3JvcEl0ZW1zOiBPcmRlckl0ZW1fQ3JvcFtdID0gW107XHJcblxyXG4gICAgbGFzdFRpbWUgPSAwO1xyXG4gICAgY2FjaGVJbnRlcnZhbCA9IDA7XHJcbiAgICBjYWNoZVRvdGFsID0gMTA7XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5faW5pdENvbXBvbmV0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW1lID4gMCAmJiAhdGhpcy5kYXRhLnN0YXRlKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlSW50ZXJ2YWwgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlSW50ZXJ2YWwgPj0gdGhpcy5jYWNoZVRvdGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlSW50ZXJ2YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgUGxheWVyTW9kZWwuc2V0T3JkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSAtPSBkdDtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1VwRGF0ZSgpO1xyXG4gICAgICAgICAgICBDb21wb25lbnRIZWxwZXIubGFiZWxUaW1lU3ModGhpcy51cGRhdGVUaW1lTGIubm9kZSwgdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZUxiLnN0cmluZyA9IHRoaXMudXBkYXRlVGltZUxiLnN0cmluZyArIFwi5ZCO5Yi35pawXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5yZXNldFVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFVJKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS51bmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy51bmxvY2tHcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9pbmZvLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9naXZlVXAuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfdGlwcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5pZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZUJnLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLmRhdGEudGltZSAtIE1hdGguZmxvb3IoVXRpbHMucmV0dXJuVGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9nZXQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMuZGF0YS5jcm9wTGlzdC5sZW5ndGhcclxuICAgICAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YS5jcm9wTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jcm9wSXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICBpdGVtLmljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5uYW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wcm9MYi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY3JvcElkID09IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZUxiLnN0cmluZyA9IFwi5oub5b6F6aG+5a6iXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubnVtID4gZGF0YS50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9MYi5zdHJpbmcgPSBkYXRhLnRhcmdldCArIFwiL1wiICsgZGF0YS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9MYi5zdHJpbmcgPSBkYXRhLm51bSArIFwiL1wiICsgZGF0YS50YXJnZXQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXNlID0gQ29uZmlnTWFuYWdlci5nZXRDcm9wQnlJZChkYXRhLmNyb3BJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lTGIuc3RyaW5nID0gYmFzZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXZlTnVtID0gUGxheWVyTW9kZWwuZ2V0SGF2ZU51bUJ5SUQoZGF0YS5jcm9wSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhdmVOdW0gPiBkYXRhLnRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb0xiLnN0cmluZyA9IGRhdGEudGFyZ2V0ICsgXCIvXCIgKyBkYXRhLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb0xiLnN0cmluZyA9IGhhdmVOdW0gKyBcIi9cIiArIGRhdGEudGFyZ2V0O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2Nyb3AvaWNvbi9cIiArIGAke2RhdGEuY3JvcElkfWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmljb24uc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjdXJyZW50ID0gY3VycmVudCA+IHRvdGFsID8gdG90YWwgOiBjdXJyZW50XHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvTGIuc3RyaW5nID0gTWF0aC5mbG9vcigoY3VycmVudCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIlxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5xdWFsaXR5IDwyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb0xiLnN0cmluZyA9IFwi5peg5Yqg5oiQXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb0xiLnN0cmluZyA9IFwiK1wiICsgQ29uZmlnTWFuYWdlci5vcmRlcl9xdWFsaXR5X2FkZFt0aGlzLmRhdGEucXVhbGl0eSAtIDFdICsgXCIlXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5xdWFsaXR5PjApIHRoaXMubHZJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5sdkljb25MaXN0W3RoaXMuZGF0YS5xdWFsaXR5IC0gMV07XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5sdkljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmx2SWNvbkxpc3RbMF07XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0dwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hlY2tVcERhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfVVBEQVRFX0lOREVYLCB0aGlzLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRVSSgpIHtcclxuICAgICAgICB0aGlzLnVubG9ja0dwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9ja0dwLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bl9pbmZvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuX2dldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJ0bl9naXZlVXAuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMudGltZUJnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudF90aXBzLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jcm9wSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNyb3BJdGVtc1tpXTtcclxuICAgICAgICAgICAgaXRlbS5pY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW0ubmFtZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW0ucHJvTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25HZXQoKSB7XHJcbiAgICAgICAgbGV0IG9yZGVyID0gUGxheWVyTW9kZWwuZ2V0Q3VycmVudE9yZGVyKCk7XHJcbiAgICAgICAgaWYgKG9yZGVyKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5vcmRlckdldFNjdWVzc1ZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgMSwgb3JkZXIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk9SREVSX0dFVF9TVUNDRVNTLCB0aGlzLm9uR2V0U3VjY2VzcywgdGhpcyk7XHJcbiAgICAgICAgICAgIFNES01hbmFnZXIuZ2V0T3JkZXJUYXNrKHRoaXMuZGF0YS5xdWFsaXR5KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uR2V0U3VjY2VzcygpIHtcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuT1JERVJfR0VUX1NVQ0NFU1MsIHRoaXMub25HZXRTdWNjZXNzLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRhdGEuc3RhdGUgPSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YS5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgUGxheWVyTW9kZWwuc2V0T3JkZXIoKTtcclxuICAgICAgICBQbGF5ZXJNb2RlbC51cGRhdGVPcmRlcigpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5vcmRlckdldFNjdWVzc1ZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgMCwgdGhpcy5kYXRhKVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5PUkRFUl9DTE9TRSlcclxuXHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFBsYXllck1vZGVsLmd1aWRlU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuR1VJREVfSGlkZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uR2l2ZVVwKCkge1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5vcmRlckdpdmVVcFZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgdGhpcy5kYXRhKVxyXG4gICAgfVxyXG4gICAgb25JbmZvKCkge1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5vcmRlckN1cnJlbnRWaWV3LCBudWxsLCBudWxsLCBVSUVmZmVjdFR5cGUuU0NBTEUsIHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbiAgICAvL+ino+mUgeiuouWNlVxyXG4gICAgb25VbmxvY2soKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25VbmxvY2tTdWNjZXNzLCB0aGlzKTtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUucG9wVmlldzEsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25VbmxvY2tTdWNjZXNzLCB0aGlzKTtcclxuXHJcbiAgICAgICAgfSwgVUlFZmZlY3RUeXBlLlNDQUxFLCBQb3BUeXBlLlVOTE9DS19PUkRFUik7XHJcbiAgICB9XHJcbiAgICBvblVubG9ja1N1Y2Nlc3MoKSB7XHJcbiAgICAgICAgTUtVdGlscy5hbGVydFRpcHMoXCLop6PplIHorqLljZXmiJDlip9cIilcclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfVU5MT0NLLCB0aGlzLmluZGV4KTtcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vblVubG9ja1N1Y2Nlc3MsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgX2luaXRDb21wb25ldCgpIHtcclxuICAgICAgICB0aGlzLnVubG9ja0dwID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidW5sb2NrR3BcIik7XHJcbiAgICAgICAgdGhpcy5sb2NrR3AgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrR3BcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX2luZm8gPSB0aGlzLnVubG9ja0dwLmdldENoaWxkQnlOYW1lKFwiYnRuX2luZm9cIik7XHJcbiAgICAgICAgdGhpcy5idG5fZ2V0ID0gdGhpcy51bmxvY2tHcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9nZXRcIik7XHJcbiAgICAgICAgdGhpcy5idG5fZ2l2ZVVwID0gdGhpcy51bmxvY2tHcC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9naXZlVXBcIik7XHJcblxyXG4gICAgICAgIHRoaXMudGltZUJnID0gdGhpcy51bmxvY2tHcC5nZXRDaGlsZEJ5TmFtZShcInRpbWVCZ1wiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRfdGlwcyA9IHRoaXMudW5sb2NrR3AuZ2V0Q2hpbGRCeU5hbWUoXCJjdXJyZW50X3RpcHNcIik7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlVGltZUxiID0gdGhpcy51bmxvY2tHcC5nZXRDaGlsZEJ5TmFtZShcInVwZGF0ZVRpbWVMYlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMucHJvTGIgPSB0aGlzLnVubG9ja0dwLmdldENoaWxkQnlOYW1lKFwicHJvTGJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmx2SWNvbiA9IHRoaXMudW5sb2NrR3AuZ2V0Q2hpbGRCeU5hbWUoXCJsdkljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lTGIgPSB0aGlzLnVubG9ja0dwLmdldENoaWxkQnlOYW1lKFwibmFtZUxiXCIgKyBpKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsZXQgcHJvTGIgPSB0aGlzLnVubG9ja0dwLmdldENoaWxkQnlOYW1lKFwiY3JvcFByb0xiXCIgKyBpKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMudW5sb2NrR3AuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIgKyBpKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3JvcEl0ZW1zLnB1c2goeyBpY29uOiBpY29uLCBuYW1lTGI6IG5hbWVMYiwgcHJvTGI6IHByb0xiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
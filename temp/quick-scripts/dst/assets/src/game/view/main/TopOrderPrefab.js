
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/TopOrderPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f7a7K1UnBBxraBUkrGXXsN', 'TopOrderPrefab');
// src/game/view/main/TopOrderPrefab.ts

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
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var TopOrderItem_1 = require("./TopOrderItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopOrderPrefab = /** @class */ (function (_super) {
    __extends(TopOrderPrefab, _super);
    function TopOrderPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numLb = null;
        _this.right = null;
        _this.itemGp = null;
        _this.nullGp = null;
        _this.tips1 = null;
        _this.tips2 = null;
        _this.shou = null;
        _this.item = null;
        // LIFE-CYCLE CALLBACKS:
        _this.isComplete = false;
        return _this;
        // update (dt) {}
    }
    TopOrderPrefab.prototype.onLoad = function () {
    };
    TopOrderPrefab.prototype.onEnable = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_CLOSE, this.init, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_UPDATE_TOP, this.onUpdate, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_COMPLETE_UPDATE, this.onComplete, this);
        this.init();
        if (PlayerModel_1.default.checkOrderComplete()) {
            this.onComplete();
        }
    };
    TopOrderPrefab.prototype.onUpdate = function () {
        this.init();
    };
    TopOrderPrefab.prototype.openOrderHbView = function () {
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
        if (PlayerModel_1.default.checkOrderComplete()) {
            UIMananger_1.default.showPanel(UIType_1.default.orderSuccessView);
        }
        else {
            UIMananger_1.default.showPanel(UIType_1.default.orderCurrentView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData);
        }
    };
    TopOrderPrefab.prototype.resetUi = function () {
        this.right.angle = 0;
        this.right.stopAllActions();
        this.nullGp.active = false;
        this.right.active = false;
        this.itemGp.active = false;
        this.numLb.node.active = false;
        this.tips1.active = false;
        this.tips2.active = false;
    };
    TopOrderPrefab.prototype.openOrderView = function () {
        // if (PlayerModel.guideStep == 12) return;
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
        var list = PlayerModel_1.default.getOrderList();
        UIMananger_1.default.showPanel(UIType_1.default.orderView, null, null, UIEffectManager_1.UIEffectType.SCALE, list);
    };
    TopOrderPrefab.prototype.init = function () {
        this.resetUi();
        this.mData = PlayerModel_1.default.getCurrentOrder();
        if (this.mData) {
            this.shou.stopAllActions();
            this.right.active = true;
            this.itemGp.active = true;
            this.numLb.node.active = true;
            if (this.mData.quality == 0)
                this.numLb.string = "无加成";
            else if (this.mData.quality == 1) {
                this.numLb.string = "无加成";
            }
            else {
                this.numLb.string = "+" + ConfigManager_1.default.order_quality_add[this.mData.quality - 1] + "%";
            }
            this.tips1.active = true;
            this.changeItem();
            // let list = 
        }
        else {
            this.tips2.active = true;
            this.nullGp.active = true;
            ComponentHelper_1.default.setHeartAction(this.shou, 0.7, false, 1.1);
        }
        if (PlayerModel_1.default.checkOrderComplete()) {
            this.onComplete();
        }
    };
    //订单完成，晃动
    TopOrderPrefab.prototype.onComplete = function () {
        this.right.stopAllActions();
        ComponentHelper_1.default.setRotation(this.right);
    };
    TopOrderPrefab.prototype.changeItem = function () {
        this.itemGp.removeAllChildren();
        var list = this.mData.cropList;
        for (var i = 0; i < list.length; i++) {
            var item = cc.instantiate(this.item);
            this.itemGp.addChild(item);
            item.getComponent(TopOrderItem_1.default).setData(list[i]);
        }
    };
    __decorate([
        property(cc.Label)
    ], TopOrderPrefab.prototype, "numLb", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "right", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "itemGp", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "nullGp", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "tips1", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "tips2", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderPrefab.prototype, "shou", void 0);
    __decorate([
        property(cc.Prefab)
    ], TopOrderPrefab.prototype, "item", void 0);
    TopOrderPrefab = __decorate([
        ccclass
    ], TopOrderPrefab);
    return TopOrderPrefab;
}(cc.Component));
exports.default = TopOrderPrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vVG9wT3JkZXJQcmVmYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSw4Q0FBeUM7QUFDekMsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUN4RCwrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFvSEM7UUFqSEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLHdCQUF3QjtRQUN4QixnQkFBVSxHQUFHLEtBQUssQ0FBQzs7UUE4Rm5CLGlCQUFpQjtJQUNyQixDQUFDO0lBOUZHLCtCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ1MsaUNBQVEsR0FBbEI7UUFDSSxzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLEVB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QUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBOUdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDRztJQWpCTixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBb0hsQztJQUFELHFCQUFDO0NBcEhELEFBb0hDLENBcEgyQyxFQUFFLENBQUMsU0FBUyxHQW9IdkQ7a0JBcEhvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJRWZmZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvQ29tcG9uZW50SGVscGVyXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCBUb3BPcmRlckl0ZW0gZnJvbSBcIi4vVG9wT3JkZXJJdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wT3JkZXJQcmVmYWIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG51bUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJpZ2h0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbUdwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbnVsbEdwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGlwczE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aXBzMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNob3U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGl0ZW06IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgbURhdGE7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGlzQ29tcGxldGUgPSBmYWxzZTtcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk9SREVSX0NMT1NFLCB0aGlzLmluaXQsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5PUkRFUl9VUERBVEVfVE9QLCB0aGlzLm9uVXBkYXRlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk9SREVSX0NPTVBMRVRFX1VQREFURSwgdGhpcy5vbkNvbXBsZXRlLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5jaGVja09yZGVyQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIG9wZW5PcmRlckhiVmlldygpIHtcclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuZ3VpZGVTdGVwID49IDApIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkdVSURFX0hpZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuY2hlY2tPcmRlckNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLm9yZGVyU3VjY2Vzc1ZpZXcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLm9yZGVyQ3VycmVudFZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgdGhpcy5tRGF0YSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXNldFVpKCkge1xyXG4gICAgICAgIHRoaXMucmlnaHQuYW5nbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm51bGxHcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbUdwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubnVtTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpcHMxLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGlwczIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBvcGVuT3JkZXJWaWV3KCkge1xyXG4gICAgICAgIC8vIGlmIChQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPT0gMTIpIHJldHVybjtcclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuZ3VpZGVTdGVwID49IDApIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkdVSURFX0hpZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGlzdCA9IFBsYXllck1vZGVsLmdldE9yZGVyTGlzdCgpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5vcmRlclZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yZXNldFVpKClcclxuICAgICAgICB0aGlzLm1EYXRhID0gUGxheWVyTW9kZWwuZ2V0Q3VycmVudE9yZGVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubURhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG91LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtR3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5udW1MYi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tRGF0YS5xdWFsaXR5ID09IDApIHRoaXMubnVtTGIuc3RyaW5nID0gXCLml6DliqDmiJBcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5tRGF0YS5xdWFsaXR5ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubnVtTGIuc3RyaW5nID0gXCLml6DliqDmiJBcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubnVtTGIuc3RyaW5nID0gXCIrXCIgKyBDb25maWdNYW5hZ2VyLm9yZGVyX3F1YWxpdHlfYWRkW3RoaXMubURhdGEucXVhbGl0eSAtIDFdICsgXCIlXCI7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudGlwczEuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlSXRlbSgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgbGlzdCA9IFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlwczIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5udWxsR3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29tcG9uZW50SGVscGVyLnNldEhlYXJ0QWN0aW9uKHRoaXMuc2hvdSwgMC43LCBmYWxzZSwgMS4xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5jaGVja09yZGVyQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy/orqLljZXlrozmiJDvvIzmmYPliqhcclxuICAgIG9uQ29tcGxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5yaWdodC5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIENvbXBvbmVudEhlbHBlci5zZXRSb3RhdGlvbih0aGlzLnJpZ2h0KVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUl0ZW0oKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtR3AucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBsZXQgbGlzdCA9IHRoaXMubURhdGEuY3JvcExpc3Q7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtR3AuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFRvcE9yZGVySXRlbSkuc2V0RGF0YShsaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
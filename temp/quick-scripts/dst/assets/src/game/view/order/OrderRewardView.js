
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/OrderRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '735d9VjxedOgptUvKetQdlj', 'OrderRewardView');
// src/game/view/order/OrderRewardView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrderRewardView = /** @class */ (function (_super) {
    __extends(OrderRewardView, _super);
    function OrderRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addLb = null;
        _this.descLb = null;
        _this.baseLb = null;
        _this.rewardLb = null;
        _this.btnClose = null;
        _this.btnOk = null;
        _this.qualityNames = ["普通订单", "青铜订单", "白银订单", "黄金订单", "钻石订单", "星耀订单"];
        // LIFE-CYCLE CALLBACKS:
        _this.mType = 0; //面板类型，0除虫奖励，1宝箱奖励
        return _this;
        // update (dt) {}
    }
    OrderRewardView.prototype.onLoad = function () {
    };
    OrderRewardView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        this.initUi();
        if (PlayerModel_1.default.guideStep >= 0) {
            MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
            });
        }
    };
    OrderRewardView.prototype.startShow = function () {
        this.mData = this.inData[0];
        this.mData2 = this.inData[1];
    };
    OrderRewardView.prototype.initUi = function () {
        this.rewardLb.string = Number(this.mData.redBean).toFixed(2) + "元";
        // this.addLb.string = this.mData.addRedBean + "元";
        if (this.mData2.quality == 0) {
            this.baseLb.string = "20元";
            this.descLb.string = "新手订单加成 (0%)：";
            this.addLb.string = "0元";
        }
        else {
            this.baseLb.string = this.mData.beseRedBean + "元";
            this.addLb.string = this.mData.addRedBean + "元";
            this.descLb.string = this.qualityNames[this.mData2.quality - 1] + "加成 (" + ConfigManager_1.default.order_quality_add[this.mData2.quality - 1] + "%)：";
        }
    };
    OrderRewardView.prototype.onClickHandle = function () {
        PlayerModel_1.default.setMoney(this.mData.userRedBean, this.mData.redBean);
        var order = PlayerModel_1.default.getOrderList();
        order[0] = ConfigManager_1.default.getOrder();
        PlayerModel_1.default.setOrder();
        EventDispath_1.default.send(EventType_1.EventType.ORDER_UPDATE_LIST);
        EventDispath_1.default.send(EventType_1.EventType.ORDER_UPDATE_TOP);
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
        }
        EventDispath_1.default.send(EventType_1.EventType.LEVEL_UPDATE);
        this.onCloseHandle();
    };
    OrderRewardView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    OrderRewardView.prototype.getGuidePoint = function () {
        var p = this.btnOk.convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    };
    __decorate([
        property(cc.Label)
    ], OrderRewardView.prototype, "addLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderRewardView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderRewardView.prototype, "baseLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderRewardView.prototype, "rewardLb", void 0);
    __decorate([
        property(cc.Node)
    ], OrderRewardView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], OrderRewardView.prototype, "btnOk", void 0);
    OrderRewardView = __decorate([
        ccclass
    ], OrderRewardView);
    return OrderRewardView;
}(BasePanel_1.default));
exports.default = OrderRewardView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL09yZGVyUmV3YXJkVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDREQUF1RDtBQUN2RCw2REFBd0Q7QUFDeEQsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUE2QyxtQ0FBUztJQUF0RDtRQUFBLHFFQXNGQztRQXBGRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixrQkFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUMvRCx3QkFBd0I7UUFDeEIsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBLGtCQUFrQjs7UUFtRTVCLGlCQUFpQjtJQUNyQixDQUFDO0lBakVHLGdDQUFNLEdBQU47SUFFQSxDQUFDO0lBRVMsa0NBQVEsR0FBbEI7UUFDSSxPQUFPO1FBQ1Asc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxD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Q0FBQyxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBakZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNJO0lBYkwsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXNGbkM7SUFBRCxzQkFBQztDQXRGRCxBQXNGQyxDQXRGNEMsbUJBQVMsR0FzRnJEO2tCQXRGb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclJld2FyZFZpZXcgZXh0ZW5kcyBCYXNlUGFuZWwge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYWRkTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkZXNjTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJhc2VMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmV3YXJkTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHF1YWxpdHlOYW1lcyA9IFtcIuaZrumAmuiuouWNlVwiLCBcIumdkumTnOiuouWNlVwiLCBcIueZvemTtuiuouWNlVwiLCBcIum7hOmHkeiuouWNlVwiLCBcIumSu+efs+iuouWNlVwiLCBcIuaYn+iAgOiuouWNlVwiXVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBtVHlwZSA9IDA7Ly/pnaLmnb/nsbvlnovvvIww6Zmk6Jmr5aWW5Yqx77yMMeWuneeuseWlluWKsVxyXG4gICAgbURhdGE7XHJcbiAgICBtRGF0YTI7XHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDlhbPpl63pnaLmnb9cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5DbG9zZSwgdGhpcy5vbkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5PaywgdGhpcy5vbkNsaWNrSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0VWkoKTtcclxuXHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgMC41LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuR1VJREVfVVBEQVRFKVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubURhdGEgPSB0aGlzLmluRGF0YVswXTtcclxuICAgICAgICB0aGlzLm1EYXRhMiA9IHRoaXMuaW5EYXRhWzFdO1xyXG4gICAgfVxyXG4gICAgaW5pdFVpKCkge1xyXG4gICAgICAgIHRoaXMucmV3YXJkTGIuc3RyaW5nID0gTnVtYmVyKHRoaXMubURhdGEucmVkQmVhbikudG9GaXhlZCgyKSArIFwi5YWDXCI7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYWRkTGIuc3RyaW5nID0gdGhpcy5tRGF0YS5hZGRSZWRCZWFuICsgXCLlhYNcIjtcclxuICAgICAgICBpZiAodGhpcy5tRGF0YTIucXVhbGl0eSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUxiLnN0cmluZyA9IFwiMjDlhYNcIjtcclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIuc3RyaW5nID0gXCLmlrDmiYvorqLljZXliqDmiJAgKDAlKe+8mlwiO1xyXG4gICAgICAgICAgICB0aGlzLmFkZExiLnN0cmluZyA9IFwiMOWFg1wiO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2VMYi5zdHJpbmcgPSB0aGlzLm1EYXRhLmJlc2VSZWRCZWFuICsgXCLlhYNcIjtcclxuICAgICAgICAgICAgdGhpcy5hZGRMYi5zdHJpbmcgPSB0aGlzLm1EYXRhLmFkZFJlZEJlYW4gKyBcIuWFg1wiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIuc3RyaW5nID0gdGhpcy5xdWFsaXR5TmFtZXNbdGhpcy5tRGF0YTIucXVhbGl0eSAtIDFdICsgXCLliqDmiJAgKFwiICsgQ29uZmlnTWFuYWdlci5vcmRlcl9xdWFsaXR5X2FkZFt0aGlzLm1EYXRhMi5xdWFsaXR5IC0gMV0gKyBcIiUp77yaXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DbGlja0hhbmRsZSgpIHtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5zZXRNb25leSh0aGlzLm1EYXRhLnVzZXJSZWRCZWFuLCB0aGlzLm1EYXRhLnJlZEJlYW4pO1xyXG4gICAgICAgIGxldCBvcmRlciA9IFBsYXllck1vZGVsLmdldE9yZGVyTGlzdCgpO1xyXG4gICAgICAgIG9yZGVyWzBdID0gQ29uZmlnTWFuYWdlci5nZXRPcmRlcigpO1xyXG4gICAgICAgIFBsYXllck1vZGVsLnNldE9yZGVyKCk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLk9SREVSX1VQREFURV9MSVNUKTtcclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfVVBEQVRFX1RPUCk7XHJcblxyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPj0gMCkge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuR1VJREVfVVBEQVRFKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkxFVkVMX1VQREFURSk7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEd1aWRlUG9pbnQoKSB7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLmJ0bk9rLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
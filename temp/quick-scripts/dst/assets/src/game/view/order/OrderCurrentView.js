
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/OrderCurrentView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f081dWyYdFPZ5MZdbEgPLce', 'OrderCurrentView');
// src/game/view/order/OrderCurrentView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 当前订单
 * TODO:
 */
var OrderCurrentView = /** @class */ (function (_super) {
    __extends(OrderCurrentView, _super);
    function OrderCurrentView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_giveUp = null;
        _this.btn_hb = null;
        _this.addLb = null;
        _this.orderQuLb = null;
        _this.scroller = null;
        _this.qualityNames = ["普通订单", "青铜订单", "白银订单", "黄金订单", "钻石订单", "星耀订单"];
        _this.scrollerData = [];
        return _this;
    }
    OrderCurrentView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath_1.default.on(this.btn_hb, this.onHb, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_CURRENT_CLOSE, this.onBtnCloseHandle, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_CURRENT_UPDATE, this.updateData, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_GIVE_UP, this.onBtnCloseHandle, this);
        this.initUI();
    };
    OrderCurrentView.prototype.onLoad = function () {
    };
    OrderCurrentView.prototype.start = function () {
    };
    OrderCurrentView.prototype.startShow = function () {
        this.mData = this.inData[0];
        this.scrollerData = this.mData.cropList;
    };
    OrderCurrentView.prototype.updateData = function () {
        this.mData = PlayerModel_1.default.getCurrentOrder();
        this.scrollerData = this.mData.cropList;
        this.initUI();
    };
    OrderCurrentView.prototype.initUI = function () {
        this.orderQuLb.string = this.qualityNames[this.mData.quality - 1];
        if (this.mData.quality == 1) {
            this.addLb.string = "无加成";
        }
        else {
            this.addLb.string = "+" + ConfigManager_1.default.order_quality_add[this.mData.quality - 1] + "%";
        }
        // this.addLb.string = ConfigManager.order_quality_add[this.mData.quality - 1]  + "%";
        this.scroller.refreshData(this.scrollerData);
    };
    OrderCurrentView.prototype.onGiveUp = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderGiveUpView);
    };
    OrderCurrentView.prototype.onHb = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderHbView);
    };
    /** 仅用于关闭操作 */
    OrderCurrentView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], OrderCurrentView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderCurrentView.prototype, "btn_giveUp", void 0);
    __decorate([
        property(cc.Node)
    ], OrderCurrentView.prototype, "btn_hb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderCurrentView.prototype, "addLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderCurrentView.prototype, "orderQuLb", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], OrderCurrentView.prototype, "scroller", void 0);
    OrderCurrentView = __decorate([
        ccclass
    ], OrderCurrentView);
    return OrderCurrentView;
}(BasePanel_1.default));
exports.default = OrderCurrentView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL09yZGVyQ3VycmVudFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNkRBQXdEO0FBQ3hELDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBQ3hELGlFQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7O0dBR0c7QUFFSDtJQUE4QyxvQ0FBUztJQUF2RDtRQUFBLHFFQXlFQztRQXRFRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRzNCLGNBQVEsR0FBdUIsSUFBSSxDQUFDO1FBRXBDLGtCQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBRS9ELGtCQUFZLEdBQUcsRUFBRSxDQUFDOztJQXVEdEIsQ0FBQztJQXRERyxtQ0FBUSxHQUFSO1FBQ0ksS0FBSztRQUNMLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENB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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCBBVmlydHVhbFNjcm9sbFZpZXcgZnJvbSBcIi4uL3Rhc2svQVZpcnR1YWxTY3JvbGxWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOW9k+WJjeiuouWNlVxyXG4gKiBUT0RPOlxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJDdXJyZW50VmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fZ2l2ZVVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2hiOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGFkZExiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBvcmRlclF1TGI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoQVZpcnR1YWxTY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsZXI6IEFWaXJ0dWFsU2Nyb2xsVmlldyA9IG51bGw7XHJcblxyXG4gICAgcXVhbGl0eU5hbWVzID0gW1wi5pmu6YCa6K6i5Y2VXCIsIFwi6Z2S6ZOc6K6i5Y2VXCIsIFwi55m96ZO26K6i5Y2VXCIsIFwi6buE6YeR6K6i5Y2VXCIsIFwi6ZK755+z6K6i5Y2VXCIsIFwi5pif6ICA6K6i5Y2VXCJdXHJcbiAgICBtRGF0YTtcclxuICAgIHNjcm9sbGVyRGF0YSA9IFtdO1xyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6YCA5Ye6XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fZ2l2ZVVwLCB0aGlzLm9uR2l2ZVVwLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5faGIsIHRoaXMub25IYiwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5PUkRFUl9DVVJSRU5UX0NMT1NFLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk9SREVSX0NVUlJFTlRfVVBEQVRFLCB0aGlzLnVwZGF0ZURhdGEsIHRoaXMpXHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5PUkRFUl9HSVZFX1VQLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG4gICAgICAgIHRoaXMubURhdGEgPSB0aGlzLmluRGF0YVswXTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxlckRhdGEgPSB0aGlzLm1EYXRhLmNyb3BMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tRGF0YSA9IFBsYXllck1vZGVsLmdldEN1cnJlbnRPcmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbGVyRGF0YSA9IHRoaXMubURhdGEuY3JvcExpc3Q7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLm9yZGVyUXVMYi5zdHJpbmcgPSB0aGlzLnF1YWxpdHlOYW1lc1t0aGlzLm1EYXRhLnF1YWxpdHkgLSAxXTtcclxuICAgICAgICBpZiAodGhpcy5tRGF0YS5xdWFsaXR5ID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRMYi5zdHJpbmcgPSBcIuaXoOWKoOaIkFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGIuc3RyaW5nID0gXCIrXCIgKyBDb25maWdNYW5hZ2VyLm9yZGVyX3F1YWxpdHlfYWRkW3RoaXMubURhdGEucXVhbGl0eSAtIDFdICsgXCIlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuYWRkTGIuc3RyaW5nID0gQ29uZmlnTWFuYWdlci5vcmRlcl9xdWFsaXR5X2FkZFt0aGlzLm1EYXRhLnF1YWxpdHkgLSAxXSAgKyBcIiVcIjtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnJlZnJlc2hEYXRhKHRoaXMuc2Nyb2xsZXJEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdpdmVVcCgpIHtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUub3JkZXJHaXZlVXBWaWV3KTtcclxuICAgIH1cclxuICAgIG9uSGIoKSB7XHJcbiAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLm9yZGVySGJWaWV3KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDku4XnlKjkuo7lhbPpl63mk43kvZwgKi9cclxuICAgIG9uQnRuQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
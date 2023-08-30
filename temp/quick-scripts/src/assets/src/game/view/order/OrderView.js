"use strict";
cc._RF.push(module, '282e7LgYwpLrZ61EJ4WG7KY', 'OrderView');
// src/game/view/order/OrderView.ts

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
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var Utils_1 = require("../../../framework/tools/Utils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var PopView1_1 = require("../popView/PopView1");
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 订单中心
 * TODO:
 */
var OrderView = /** @class */ (function (_super) {
    __extends(OrderView, _super);
    function OrderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_quality = null;
        _this.btn_update = null;
        _this.xfzsLb = null;
        _this.scroller = null;
        _this.scrollerData = [];
        return _this;
    }
    OrderView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_quality, this.onQuality, this);
        EventDispath_1.default.on(this.btn_update, this.onUpdate, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_CLOSE, this.onBtnCloseHandle, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_UPDATE_INDEX, this.updateData, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_UPDATE_LIST, this.completeUpate, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_GIVE_UP, this.onGiveUp, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_UNLOCK, this.onUnlock, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.GUIDE_COMPLETE, this.guidComplete, this);
        var list = PlayerModel_1.default.getOrderList();
        this.scrollerData = list;
        this.initUI();
    };
    OrderView.prototype.onLoad = function () {
    };
    OrderView.prototype.start = function () {
    };
    OrderView.prototype.on_Show = function (args) {
        if (PlayerModel_1.default.guideStep >= 0) {
            this.scroller.vertical = false;
            MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
            });
        }
        // MKUtils.setNodeDelay(this.node, 0.1, this.initUI.bind(this))
        // this.initUI();
        _super.prototype.on_Show.call(this, args);
    };
    OrderView.prototype.startShow = function () {
    };
    //放弃订单
    OrderView.prototype.onGiveUp = function () {
        PlayerModel_1.default.orderVideoNum = 0;
        // this.scrollerData[0] = ConfigManager.getOrder();
        this.initUI();
    };
    //订单奖励领取后更新列表
    OrderView.prototype.completeUpate = function () {
        this.scrollerData[0] = ConfigManager_1.default.getOrder();
        this.initUI();
    };
    //刷新订单列表
    OrderView.prototype.updateList = function () {
        MkUtils_1.default.alertTips("刷新订单成功");
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.updateList, this);
        for (var i = 0; i < this.scrollerData.length; i++) {
            var item = this.scrollerData[i];
            if (!item.state && item.unlock) {
                this.scrollerData[i] = ConfigManager_1.default.getOrder();
            }
        }
        this.initUI();
    };
    OrderView.prototype.onUnlock = function () {
        this.scroller.scrollToTop();
        var list = PlayerModel_1.default.getOrderList();
        var indexList = [];
        var arr = list.filter(function (value, index) {
            if (value.unlock == 0)
                indexList.push(index);
            return value.unlock == 0;
        });
        list[indexList[0]] = ConfigManager_1.default.getOrder();
        PlayerModel_1.default.orderLen++;
        this.scrollerData = PlayerModel_1.default.getOrderList();
        ;
        this.initUI();
        this.scroller.scrollToTop();
    };
    OrderView.prototype.updateData = function (index) {
        this.scrollerData[index] = ConfigManager_1.default.getOrder();
        this.initUI();
    };
    OrderView.prototype.initUI = function () {
        var _this = this;
        for (var i = 0; i < this.scrollerData.length; i++) {
            var item = this.scrollerData[i];
            var lastTime = item.time - Math.floor(Utils_1.default.returnTime() / 1000);
            if (lastTime <= 0 && !item.state) {
                this.scrollerData[i] = ConfigManager_1.default.getOrder();
            }
        }
        this.scroller.refreshData(this.scrollerData);
        this.scroller.scrollToTop();
        this.scroller.node.active = false;
        MkUtils_1.default.setNodeDelay(this.node, 0.1, function () {
            _this.scroller.node.active = true;
        });
        this.xfzsLb.string = PlayerModel_1.default.getXfzs() + "";
    };
    OrderView.prototype.onQuality = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderQualityView);
    };
    //刷新订单
    OrderView.prototype.onUpdate = function () {
        var _this = this;
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.updateList, this);
        UIMananger_1.default.showPanel(UIType_1.default.popView1, null, function () {
            EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, _this.updateList, _this);
        }, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.REFRESH_ORDER);
    };
    /** 仅用于关闭操作 */
    OrderView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    OrderView.prototype.getGuidePoint = function () {
        // let node = this.xfzsLb.node;
        var p = this.scroller.getItemByIndex(0).convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    };
    OrderView.prototype.getGuidePoint1 = function () {
        // let node = this.xfzsLb.node;
        var p = this.scroller.node.convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    };
    OrderView.prototype.guidComplete = function () {
        this.scroller.vertical = true;
    };
    __decorate([
        property(cc.Node)
    ], OrderView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderView.prototype, "btn_quality", void 0);
    __decorate([
        property(cc.Node)
    ], OrderView.prototype, "btn_update", void 0);
    __decorate([
        property(cc.Label)
    ], OrderView.prototype, "xfzsLb", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], OrderView.prototype, "scroller", void 0);
    OrderView = __decorate([
        ccclass
    ], OrderView);
    return OrderView;
}(BasePanel_1.default));
exports.default = OrderView;

cc._RF.pop();
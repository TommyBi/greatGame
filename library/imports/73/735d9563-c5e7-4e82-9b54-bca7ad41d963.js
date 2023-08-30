"use strict";
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
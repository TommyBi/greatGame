"use strict";
cc._RF.push(module, '82e85Xk2g9EnZEPtFDyKqXG', 'OrderSuccessView');
// src/game/view/order/OrderSuccessView.ts

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
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *订单完成
 * TODO:
 */
var OrderSuccessView = /** @class */ (function (_super) {
    __extends(OrderSuccessView, _super);
    function OrderSuccessView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_video_get = null;
        _this.btn_video_guide = null;
        _this.btn_video_help = null;
        _this.btn_get = null;
        _this.btn_wait = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.addLb = null;
        _this.numLb = null;
        _this.descLvLb = null;
        _this.iconList = [];
        _this.qualityNames = ["普通订单", "青铜订单", "白银订单", "黄金订单", "钻石订单", "星耀订单"];
        return _this;
    }
    OrderSuccessView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_video_guide, this.onGuide, this);
        EventDispath_1.default.on(this.btn_video_get, this.onVideoGet, this);
        EventDispath_1.default.on(this.btn_video_help, this.onVideoHelp, this);
        EventDispath_1.default.on(this.btn_get, this.onGet, this);
        EventDispath_1.default.on(this.btn_wait, this.onWait, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        SDKManager_1.default.getOrderRewardConfig();
    };
    OrderSuccessView.prototype.onLoad = function () {
    };
    OrderSuccessView.prototype.onRewardCfg = function (data) {
        this.sdkCfg = data;
        this.initUI();
    };
    OrderSuccessView.prototype.startShow = function () {
        this.mData = PlayerModel_1.default.getCurrentOrder();
    };
    OrderSuccessView.prototype.initUI = function () {
        var _this = this;
        if (PlayerModel_1.default.guideStep > 0) {
            this.descLvLb.string = "恭喜完成新手订单";
            this.btn_video_guide.active = true;
            // this.numLb.string =  this.sdkCfg.times;
            this.descLb2.active = true;
            MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
            });
            this.numLb.string = "0";
            this.addLb.string = "无加成";
        }
        else {
            if (!this.sdkCfg.mandatoryVideo) {
                this.btn_video_help.active = true;
                this.btn_get.active = true;
            }
            else {
                this.btn_video_get.active = true;
                this.btn_wait.active = true;
            }
            this.numLb.string = this.sdkCfg.times;
            if (this.sdkCfg.times == 0) {
                this.descLb2.active = true;
            }
            else {
                this.descLb1.active = true;
            }
            this.descLvLb.string = "恭喜完成" + this.qualityNames[this.mData.quality - 1];
            if (this.mData.quality == 1) {
                this.addLb.string = "无加成";
            }
            else {
                this.addLb.string = "+" + ConfigManager_1.default.order_quality_add[this.mData.quality - 1] + "%";
            }
            // this.addLb.string = ConfigManager.order_quality_add[this.mData.quality - 1] + "%";
        }
        if (this.mData.cropList.length < 3) {
            this.iconList[0].node.y = 20;
            this.iconList[1].node.y = 20;
        }
        else {
            this.iconList[0].node.y = 122;
            this.iconList[1].node.y = 122;
        }
        var _loop_1 = function (i) {
            this_1.iconList[i].node.active = true;
            MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this_1.mData.cropList[i].cropId), function (res) {
                _this.iconList[i].spriteFrame = res;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.mData.cropList.length; i++) {
            _loop_1(i);
        }
    };
    OrderSuccessView.prototype.onGuide = function () {
        //引导领取奖励
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
        SDKManager_1.default.getRedPackReward(this.sdkCfg.configId, false);
    };
    OrderSuccessView.prototype.onVideoGet = function () {
        //领取奖励
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
        SDKManager_1.default.getRedPackReward(this.sdkCfg.configId);
        PlayerModel_1.default.orderVideoNum = 0;
    };
    OrderSuccessView.prototype.onVideoHelp = function () {
        //助力领取
        SDKManager_1.default.getRedPackReward(this.sdkCfg.configId, true);
        PlayerModel_1.default.orderVideoNum = 0;
    };
    OrderSuccessView.prototype.onGet = function () {
        //普通领取
        SDKManager_1.default.getRedPackReward(this.sdkCfg.configId, false);
        PlayerModel_1.default.orderVideoNum = 0;
    };
    OrderSuccessView.prototype.onWait = function () {
        //稍后领取
        this.onBtnCloseHandle();
    };
    OrderSuccessView.prototype.onRewardLost = function () {
        this.onBtnCloseHandle();
    };
    OrderSuccessView.prototype.onRewardGot = function (data) {
        var list = this.mData.cropList;
        for (var i = 0; i < list.length; i++) {
            console.log("====", list);
            PlayerModel_1.default.orderReduceCrop(list[i].cropId, list[i].target);
        }
        EventDispath_1.default.send(EventType_1.EventType.UPDATE_SHELVE_ORDER);
        UIMananger_1.default.showPanel(UIType_1.default.orderRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, data, this.mData);
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    OrderSuccessView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    OrderSuccessView.prototype.getGuidePoint = function () {
        var p = this.btn_video_get.convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    };
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_video_get", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_video_guide", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_video_help", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_wait", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "descLb2", void 0);
    __decorate([
        property(cc.Label)
    ], OrderSuccessView.prototype, "addLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderSuccessView.prototype, "numLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderSuccessView.prototype, "descLvLb", void 0);
    __decorate([
        property([cc.Sprite])
    ], OrderSuccessView.prototype, "iconList", void 0);
    OrderSuccessView = __decorate([
        ccclass
    ], OrderSuccessView);
    return OrderSuccessView;
}(BasePanel_1.default));
exports.default = OrderSuccessView;

cc._RF.pop();
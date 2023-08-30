"use strict";
cc._RF.push(module, '455actdzmxOv7IcOFDooGh+', 'OrderGetScuessView');
// src/game/view/order/OrderGetScuessView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 接单成功、温馨提示
 * TODO:
 */
var OrderGetScuessView = /** @class */ (function (_super) {
    __extends(OrderGetScuessView, _super);
    function OrderGetScuessView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_giveUp = null;
        _this.btn_go = null;
        _this.btn_continue = null;
        _this.lvIconSp = [];
        _this.lvIcon = null;
        _this.cLb = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.titleLb1 = null;
        _this.titleLb2 = null;
        _this.proLb = null;
        _this.cropItems = [];
        _this.mType = 0; //0接单成功、1温馨提示
        return _this;
    }
    OrderGetScuessView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath_1.default.on(this.btn_go, this.onGo, this);
        EventDispath_1.default.on(this.btn_continue, this.onContinue, this);
        this.initUI();
        if (PlayerModel_1.default.guideStep >= 0) {
            MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
            });
        }
    };
    OrderGetScuessView.prototype.onLoad = function () {
        this._initComponet();
    };
    OrderGetScuessView.prototype.start = function () {
    };
    OrderGetScuessView.prototype.startShow = function () {
        this.mType = this.inData[0];
        this.mData = this.inData[1];
    };
    OrderGetScuessView.prototype.updateData = function () {
        this.initUI();
    };
    OrderGetScuessView.prototype.initUI = function () {
        if (this.mType == 0) {
            this.btn_go.active = true;
            this.descLb1.active = true;
            this.titleLb1.active = true;
            this.cLb.active = true;
        }
        else {
            this.titleLb2.active = true;
            this.btn_continue.active = true;
            this.btn_giveUp.active = true;
            this.descLb2.active = true;
            this.cLb.active = false;
        }
        var len = this.mData.cropList.length;
        var total = 0;
        var current = 0;
        var _loop_1 = function (i) {
            var data = this_1.mData.cropList[i];
            var item = this_1.cropItems[i];
            item.icon.node.active = true;
            item.nameLb.node.active = true;
            item.proLb.node.active = true;
            if (data.cropId == 100) {
                item.nameLb.string = "招待顾客";
            }
            else {
                var base = ConfigManager_1.default.getCropById(data.cropId);
                item.nameLb.string = base.name;
            }
            total += data.target;
            current += data.num;
            item.proLb.string = data.num + "/" + data.target;
            MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + data.cropId), function (res) {
                item.icon.spriteFrame = res;
            });
        };
        var this_1 = this;
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        if (this.mData.quality < 2) {
            this.proLb.string = "无加成";
        }
        else {
            this.proLb.string = "+" + ConfigManager_1.default.order_quality_add[this.mData.quality - 1] + "%";
        }
        // this.proLb.string = Math.floor(current / total) * 100 + "%"
        if (this.mData.quality > 0)
            this.lvIcon.spriteFrame = this.lvIconSp[this.mData.quality - 1];
        else
            this.lvIcon.spriteFrame = this.lvIconSp[0];
    };
    OrderGetScuessView.prototype.onGiveUp = function () {
        //仍要放弃
        // EventDispath.send(EventType.ORDER_GIVE_UP)
        // let list = PlayerModel.getOrderList();
        // list[0] = ConfigManager.getOrder();
        // EventDispath.send(EventType.ORDER_UPDATE_TOP);
        // PlayerModel.orderVideoNum = 0;
        // MKUtils.alertTips("订单已放弃，请重新接单")
        UIMananger_1.default.showPanel(UIType_1.default.orderGiveUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData);
        this.onBtnCloseHandle();
    };
    OrderGetScuessView.prototype.onGo = function () {
        //现在就去
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
        }
        this.onBtnCloseHandle();
    };
    OrderGetScuessView.prototype.onContinue = function () {
        this.onBtnCloseHandle();
        //继续完成
    };
    OrderGetScuessView.prototype._initComponet = function () {
        this.lvIcon = this.node.getChildByName("lvIcon").getComponent(cc.Sprite);
        this.proLb = this.node.getChildByName("proLb").getComponent(cc.Label);
        this.descLb1 = this.node.getChildByName("descLb1");
        this.descLb2 = this.node.getChildByName("descLb2");
        this.titleLb1 = this.node.getChildByName("titleLb1");
        this.titleLb2 = this.node.getChildByName("titleLb2");
        this.cLb = this.node.getChildByName("cLb");
        for (var i = 1; i < 5; i++) {
            var nameLb = this.node.getChildByName("nameLb" + i).getComponent(cc.Label);
            var proLb = this.node.getChildByName("cropProLb" + i).getComponent(cc.Label);
            var icon = this.node.getChildByName("icon" + i).getComponent(cc.Sprite);
            nameLb.node.active = false;
            proLb.node.active = false;
            icon.node.active = false;
            this.cropItems.push({ icon: icon, nameLb: nameLb, proLb: proLb });
        }
    };
    /** 仅用于关闭操作 */
    OrderGetScuessView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    OrderGetScuessView.prototype.getGuidePoint = function () {
        // let node = this.xfzsLb.node;
        var p = this.btn_go.convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    };
    __decorate([
        property(cc.Node)
    ], OrderGetScuessView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderGetScuessView.prototype, "btn_giveUp", void 0);
    __decorate([
        property(cc.Node)
    ], OrderGetScuessView.prototype, "btn_go", void 0);
    __decorate([
        property(cc.Node)
    ], OrderGetScuessView.prototype, "btn_continue", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], OrderGetScuessView.prototype, "lvIconSp", void 0);
    OrderGetScuessView = __decorate([
        ccclass
    ], OrderGetScuessView);
    return OrderGetScuessView;
}(BasePanel_1.default));
exports.default = OrderGetScuessView;

cc._RF.pop();
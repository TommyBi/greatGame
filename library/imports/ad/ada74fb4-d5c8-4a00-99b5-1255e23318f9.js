"use strict";
cc._RF.push(module, 'ada74+01chKAJm1ElXiMxj5', 'CashierView');
// src/game/view/cashier/CashierView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
var CashierView = /** @class */ (function (_super) {
    __extends(CashierView, _super);
    function CashierView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.btn_hideClick = null;
        _this.btn_add = null;
        _this.btn_lvUp = null;
        _this.btn_close = null;
        _this.numLb = null;
        _this.timeLb = null;
        _this.proLb = null;
        _this.descLb = null;
        _this.pro = null;
        _this.lastTime = 0;
        return _this;
    }
    CashierView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_lvUp, this.onLvUp, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.initUI();
    };
    CashierView.prototype.onLoad = function () {
        this.btnVideo = this.btn_add.getChildByName("videoIcon");
        this.btnLb = this.btn_add.getChildByName("contentLabel").getComponent(cc.Label);
    };
    CashierView.prototype.startShow = function () {
    };
    CashierView.prototype.initUI = function () {
        var _this = this;
        this.proLb.string = PlayerModel_1.default.cashierGold + "/" + ConfigManager_1.default.getCashierMax();
        this.numLb.string = "x" + ConfigManager_1.default.cashier_one;
        this.lastTime = ConfigManager_1.default.cashier_add_times * 60 - Math.floor((new Date().getTime() / 1000 - PlayerModel_1.default.getAddLastTime()));
        if (this.lastTime > 0) {
            this.btnLb.node.x = 0;
            this.btnVideo.active = false;
            this.btnLb.string = "3倍加速中";
            this.btn_hideClick.active = true;
            this.numLb.string = "x" + ConfigManager_1.default.cashier_one * 3;
        }
        else {
            this.resetVideoBtn();
        }
        var lv = PlayerModel_1.default.getUIConfig().cashierlv;
        MkUtils_1.default.loadSpriteFrame("texture/prop/cashier/icon/" + ("0" + lv), function (res) {
            _this.icon.spriteFrame = res;
        });
    };
    CashierView.prototype.resetVideoBtn = function () {
        this.btn_hideClick.active = false;
        this.timeLb.string = "3分钟";
        this.btnLb.string = "3倍加速";
        this.btnLb.node.x = 48;
        this.btnVideo.active = true;
    };
    CashierView.prototype.onLvUp = function () {
        UIMananger_1.default.showPanel(UIType_1.default.LvUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, 3);
        this.onBtnCloseHandle();
    };
    CashierView.prototype.update = function (dt) {
        this.lastTime -= dt;
        if (this.lastTime > 0) {
            ComponentHelper_1.default.labelTimeSs(this.timeLb.node, this.lastTime);
        }
        else {
            this.resetVideoBtn();
            // this.btn_add.interactable = true;
        }
        this.pro.progress = PlayerModel_1.default.cashierGold / ConfigManager_1.default.getCashierMax();
        this.proLb.string = PlayerModel_1.default.cashierGold + "/" + ConfigManager_1.default.getCashierMax();
        if (PlayerModel_1.default.cashierGold >= ConfigManager_1.default.getCashierMax()) {
            // this.btn_add.interactable = false;
            this.descLb.string = "今日产出已达上限，急需升级收银台";
        }
        else {
            this.descLb.string = "收银台正在源源不断产出钞票";
        }
    };
    CashierView.prototype.onBtnShowAd = function () {
        if (PlayerModel_1.default.cashierGold >= ConfigManager_1.default.getCashierMax()) {
            MkUtils_1.default.alertTips("今日产出已达上限");
            return;
        }
        // if (PlayerModel.getAutoServiceLeftTimes() <= 0) {
        //     MKUtils.alertTips("今日自动服务已达上限，请明日继续使用");
        //     return;
        // }
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video10);
    };
    CashierView.prototype.onVideoBack = function () {
        this.isVideoClose = true;
        MkUtils_1.default.alertTips("收银台3倍加速中");
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.CASHIER_ADD_MULTIPLE);
        this.onBtnCloseHandle();
    };
    CashierView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Sprite)
    ], CashierView.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], CashierView.prototype, "btn_hideClick", void 0);
    __decorate([
        property(cc.Node)
    ], CashierView.prototype, "btn_add", void 0);
    __decorate([
        property(cc.Node)
    ], CashierView.prototype, "btn_lvUp", void 0);
    __decorate([
        property(cc.Node)
    ], CashierView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], CashierView.prototype, "numLb", void 0);
    __decorate([
        property(cc.Label)
    ], CashierView.prototype, "timeLb", void 0);
    __decorate([
        property(cc.Label)
    ], CashierView.prototype, "proLb", void 0);
    __decorate([
        property(cc.Label)
    ], CashierView.prototype, "descLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], CashierView.prototype, "pro", void 0);
    CashierView = __decorate([
        ccclass
    ], CashierView);
    return CashierView;
}(BasePanel_1.default));
exports.default = CashierView;

cc._RF.pop();
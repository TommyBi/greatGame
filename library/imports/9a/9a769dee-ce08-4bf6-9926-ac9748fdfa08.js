"use strict";
cc._RF.push(module, '9a7693uzghL9pkmrJdI/foI', 'LevelView');
// src/game/view/level/LevelView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 升级界面
 * TODO:
 * initPropHasList这个方法可以移至更早的登录初始化环节
 */
var LevelView = /** @class */ (function (_super) {
    __extends(LevelView, _super);
    function LevelView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.titleLb = null;
        _this.moneyLb = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.scroller = null;
        _this.scrollerData = [];
        return _this;
    }
    LevelView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.LEVEL_UPDATE, this.updateData, this);
        this.initUI();
    };
    LevelView.prototype.onLoad = function () {
    };
    LevelView.prototype.start = function () {
    };
    LevelView.prototype.startShow = function () {
        this.mData = SDKManager_1.default.getBazaarLevelInfo();
        this.scrollerData = this.mData.jsTaskInfos;
    };
    LevelView.prototype.updateData = function () {
        this.mData = SDKManager_1.default.getBazaarLevelInfo();
        this.scrollerData = this.mData.jsTaskInfos;
        this.initUI();
        UIMananger_1.default.showPanel(UIType_1.default.levelPopView, null, null, UIEffectManager_1.UIEffectType.SCALE, { currentData: this.currentItemData, nextData: this.nextItemData });
    };
    LevelView.prototype.initUI = function () {
        this.titleLb.string = "\u96C6\u5E02" + this.mData.jsLevel + "\u7EA7";
        this.moneyLb.string = this.mData.jsAmount + "元";
        if (this.mData.jsAmount >= 500) {
            this.descLb1.string = "<color=#708FCC>本次活动已结束，现已为您升级为</c><color=#ED522B>5%红包提现比例</color>";
        }
        else {
            this.descLb1.string = "<color=#708FCC>每满</c><color=#ED522B>500元<color=#708FCC>后自动打款至微信钱包</color>";
        }
        var num = 0;
        var isFirst = 1;
        for (var i = 0; i < this.scrollerData.length; i++) {
            var data = this.scrollerData[i];
            data.userOrderNum = this.mData.userOrderNum;
            if (data.userOrderNum >= data.orderNum) {
                this.scrollerData[i]["isFirst"] = isFirst;
                if (isFirst) {
                    this.currentItemData = this.scrollerData[i];
                    if (this.scrollerData[i + 1])
                        this.nextItemData = this.scrollerData[i + 1];
                }
                isFirst = 0;
            }
            num += data.amount;
        }
        this.descLb2.string = "<color=#708FCC>\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u5956\u52B1\u8D8A\u9AD8\uFF0C\u7D2F\u8BA1\u53EF\u5F97</c><color=#ED522B>" + 1120 + "<color=#708FCC>\u5143</color>";
        this.scroller.refreshData(this.scrollerData);
    };
    /** 仅用于关闭操作 */
    LevelView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], LevelView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], LevelView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], LevelView.prototype, "moneyLb", void 0);
    __decorate([
        property(cc.RichText)
    ], LevelView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.RichText)
    ], LevelView.prototype, "descLb2", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], LevelView.prototype, "scroller", void 0);
    LevelView = __decorate([
        ccclass
    ], LevelView);
    return LevelView;
}(BasePanel_1.default));
exports.default = LevelView;

cc._RF.pop();
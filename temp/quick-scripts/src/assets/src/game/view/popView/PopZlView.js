"use strict";
cc._RF.push(module, 'a4e3exTl9hA7bfMTOd1d9V2', 'PopZlView');
// src/game/view/popView/PopZlView.ts

"use strict";
// 一建招揽
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
var CConst_1 = require("../../consts/CConst");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopZlView = /** @class */ (function (_super) {
    __extends(PopZlView, _super);
    function PopZlView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numLb = null;
        _this.btnClose = null;
        _this.btnVideo = null;
        _this.btnOk = null;
        // LIFE-CYCLE CALLBACKS:
        _this.mId = 0;
        return _this;
        // update (dt) {}
    }
    PopZlView.prototype.onLoad = function () {
    };
    PopZlView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        EventDispath_1.default.on(this.btnVideo, this.onVideo, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
    };
    PopZlView.prototype.startShow = function () {
        this.numLb.string = "" + ConfigManager_1.default.getPropById(CConst_1.propType.wall, PlayerModel_1.default.getUIConfig().walllv).add_num;
    };
    PopZlView.prototype.onClickHandle = function () {
        //升级围墙
        UIMananger_1.default.showPanel(UIType_1.default.LvUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, 3);
        this.onCloseHandle();
    };
    PopZlView.prototype.onVideo = function () {
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video1);
    };
    PopZlView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.ONE_SOLICIT);
        this.onVideoClose();
    };
    PopZlView.prototype.onVideoClose = function () {
        _super.prototype.close1.call(this);
    };
    PopZlView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Label)
    ], PopZlView.prototype, "numLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopZlView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopZlView.prototype, "btnVideo", void 0);
    __decorate([
        property(cc.Node)
    ], PopZlView.prototype, "btnOk", void 0);
    PopZlView = __decorate([
        ccclass
    ], PopZlView);
    return PopZlView;
}(BasePanel_1.default));
exports.default = PopZlView;

cc._RF.pop();
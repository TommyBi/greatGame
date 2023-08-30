"use strict";
cc._RF.push(module, '41166ajy/tBl6Braq02VYUl', 'PopJsView');
// src/game/view/popView/PopJsView.ts

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
var CConst_1 = require("../../consts/CConst");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//全体加速
var PopJsView = /** @class */ (function (_super) {
    __extends(PopJsView, _super);
    function PopJsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.btnVideo = null;
        _this.btnOk = null;
        _this.numLb = null;
        return _this;
        // update (dt) {}
    }
    PopJsView.prototype.onLoad = function () {
    };
    PopJsView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        EventDispath_1.default.on(this.btnVideo, this.onVideo, this);
    };
    PopJsView.prototype.startShow = function () {
        var cfg = ConfigManager_1.default.getPropById(CConst_1.propType.pipe, PlayerModel_1.default.getUIConfig().pipelv);
        this.numLb.string = cfg.add_num + "分钟";
    };
    PopJsView.prototype.onClickHandle = function () {
        //升级水管
        UIMananger_1.default.showPanel(UIType_1.default.LvUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, 3);
        this.onCloseHandle();
    };
    PopJsView.prototype.onVideo = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video14);
    };
    PopJsView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.CROP_ADD_SPEED);
        this.onVideoClose();
    };
    PopJsView.prototype.onVideoClose = function () {
        _super.prototype.close1.call(this);
    };
    PopJsView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], PopJsView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopJsView.prototype, "btnVideo", void 0);
    __decorate([
        property(cc.Node)
    ], PopJsView.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Label)
    ], PopJsView.prototype, "numLb", void 0);
    PopJsView = __decorate([
        ccclass
    ], PopJsView);
    return PopJsView;
}(BasePanel_1.default));
exports.default = PopJsView;

cc._RF.pop();
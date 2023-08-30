"use strict";
cc._RF.push(module, '0b022w1JUxIp7yjSFfCKzSY', 'PopGcView');
// src/game/view/popView/PopGcView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopGcView = /** @class */ (function (_super) {
    __extends(PopGcView, _super);
    function PopGcView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gcIcon = null;
        _this.descLb = null;
        _this.titleLb = null;
        _this.btnClose = null;
        _this.btnVideo = null;
        _this.btnOk = null;
        // LIFE-CYCLE CALLBACKS:
        _this.mId = 0;
        return _this;
        // update (dt) {}
    }
    PopGcView.prototype.onLoad = function () {
    };
    PopGcView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        EventDispath_1.default.on(this.btnVideo, this.onVideo, this);
    };
    PopGcView.prototype.startShow = function () {
        var _this = this;
        this.mId = this.inData[0];
        var cropCfg = ConfigManager_1.default.getCropById(this.mId);
        this.titleLb.string = cropCfg.name + "高产";
        this.descLb.string = "人品大爆发，" + cropCfg.name + "产量飙升，可收获";
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mId), function (res) {
            _this.gcIcon.spriteFrame = res;
        });
    };
    PopGcView.prototype.onClickHandle = function () {
        EventDispath_1.default.send(EventType_1.EventType.CROP_GC, 1);
        this.onCloseHandle();
    };
    PopGcView.prototype.onVideo = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video12);
    };
    PopGcView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.CROP_GC, 5);
        this.onVideoClose();
    };
    PopGcView.prototype.onVideoClose = function () {
        _super.prototype.close1.call(this);
    };
    PopGcView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Sprite)
    ], PopGcView.prototype, "gcIcon", void 0);
    __decorate([
        property(cc.Label)
    ], PopGcView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopGcView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopGcView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopGcView.prototype, "btnVideo", void 0);
    __decorate([
        property(cc.Node)
    ], PopGcView.prototype, "btnOk", void 0);
    PopGcView = __decorate([
        ccclass
    ], PopGcView);
    return PopGcView;
}(BasePanel_1.default));
exports.default = PopGcView;

cc._RF.pop();
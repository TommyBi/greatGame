"use strict";
cc._RF.push(module, '1f0096giXFErZnlkmgVfH0p', 'GetCropView');
// src/game/view/order/GetCropView.ts

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
var CConst_1 = require("../../consts/CConst");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *获取XX
 * TODO:
 */
var GetCropView = /** @class */ (function (_super) {
    __extends(GetCropView, _super);
    function GetCropView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.btn_close = null;
        _this.btn_plant = null;
        _this.btn_video = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.proLb = null;
        _this.nameLb = null;
        _this.titleLb = null;
        _this.pro = null;
        return _this;
    }
    GetCropView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_plant, this.onPlant, this);
        EventDispath_1.default.on(this.btn_video, this.onVideo, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.GET_CROP_CLOSE, this.onBtnCloseHandle, this);
        this.initUI();
    };
    GetCropView.prototype.onLoad = function () {
    };
    GetCropView.prototype.start = function () {
    };
    GetCropView.prototype.startShow = function () {
        this.mData = this.inData[0];
    };
    GetCropView.prototype.initUI = function () {
        var _this = this;
        var base = ConfigManager_1.default.getCropById(this.mData.cropId);
        this.titleLb.string = "获取" + base.name;
        this.nameLb.string = base.name;
        this.proLb.string = this.mData.num + "/" + this.mData.target;
        this.pro.progress = this.mData.num / this.mData.target;
        this.descLb1.string = "1.\u571F\u5730\u4E2D\u79CD\u690D" + base.name + "\u7B49\u5F85\u6536\u83B7";
        this.descLb2.string = "2.\u89C2\u770B\u89C6\u9891\u5FEB\u901F\u83B7\u53D6" + base.name + " \u00D74";
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mData.cropId), function (res) {
            _this.icon.spriteFrame = res;
        });
    };
    GetCropView.prototype.onPlant = function () {
        EventDispath_1.default.send(EventType_1.EventType.CROP_PLANT_GET, this.mData.cropId);
    };
    GetCropView.prototype.onVideo = function () {
        if (this.checkHouseMax(4)) {
            MkUtils_1.default.alertTips("仓库放不下了，快点卖出作物赚钱吧");
            return;
        }
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video7);
    };
    GetCropView.prototype.onVideoBack = function () {
        PlayerModel_1.default.setHouseAddCrop(this.mData.cropId, 4);
        UIMananger_1.default.showPanel(UIType_1.default.PopGetCropView, null, null, UIEffectManager_1.UIEffectType.SCALE, { id: this.mData.cropId, num: 4 });
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.onBtnCloseHandle();
    };
    //检测仓库是否达到上限
    GetCropView.prototype.checkHouseMax = function (value) {
        var lv = PlayerModel_1.default.getUIConfig().warehouselv;
        // let arr = ConfigManager.prop.filter((value) => {
        //     return value.id == Number(propType.warehouse + `0${id}`);
        // })
        var cfg = ConfigManager_1.default.getPropById(CConst_1.propType.warehouse, lv);
        var currentNum = PlayerModel_1.default.getCurrentPutNum();
        if ((cfg.add_num - currentNum) < value)
            return true;
        return false;
    };
    /** 仅用于关闭操作 */
    GetCropView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Sprite)
    ], GetCropView.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], GetCropView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], GetCropView.prototype, "btn_plant", void 0);
    __decorate([
        property(cc.Node)
    ], GetCropView.prototype, "btn_video", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "descLb2", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "proLb", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GetCropView.prototype, "pro", void 0);
    GetCropView = __decorate([
        ccclass
    ], GetCropView);
    return GetCropView;
}(BasePanel_1.default));
exports.default = GetCropView;

cc._RF.pop();
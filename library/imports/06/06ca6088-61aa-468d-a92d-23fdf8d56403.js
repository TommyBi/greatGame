"use strict";
cc._RF.push(module, '06ca6CIYapGjaktI/341WQD', 'VegetablesItem');
// src/game/view/vegetables/VegetablesItem.ts

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
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VegetablesItem = /** @class */ (function (_super) {
    __extends(VegetablesItem, _super);
    function VegetablesItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn = null;
        _this.orderTips = null;
        _this.uImgCrop = null;
        _this.ulabelName = null;
        _this.uImgLock = null;
        _this.uImgMask = null;
        _this.isLock = true; // 当前item是否未解锁
        return _this;
    }
    VegetablesItem.prototype.onLoad = function () {
        // EventDispath.on(this.node, this.onSelect, this);
        // this.setTouchCallback(this.onSelect, this);
    };
    VegetablesItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    VegetablesItem.prototype.initUI = function () {
        var _this = this;
        this.orderTips.active = false;
        if (this.data.isOrder)
            this.orderTips.active = true;
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.data["id"]), function (res) {
            _this.uImgCrop.spriteFrame = res;
        });
        this.ulabelName.string = "" + this.data.name;
        this.isLock = this.data.isLock;
        this.btn.active = this.isLock ? false : true;
        this.uImgLock.active = this.isLock ? true : false;
        this.uImgMask.active = this.uImgLock.active;
    };
    // setData(data: crop_config, haveIds: number[]) {
    //     MKUtils.loadSpriteFrame("texture/crop/singleIcon/" + `${data.id}`, (res) => {
    //         this.uImgCrop.spriteFrame = res;
    //     });
    //     this.ulabelName.string = `${data.name}`;
    //     this.ulabelCount.string = `${data.money}`;
    //     this.isLock = haveIds.indexOf(data.id) == -1;
    //     this.uImgLock.enabled = this.isLock ? true : false;
    //     this.uImgMask.enabled = this.uImgLock.enabled;
    //     // 是否是热卖
    //     let lastId = haveIds.length == 0 ? -1 : haveIds[haveIds.length - 1];
    //     let isHot = data.id == lastId;
    //     this.uImgFlag.enabled = isHot;
    //     this.uImgBgHot.enabled = isHot;
    //     this.uImgBg.enabled = !isHot;
    //     this.cropCfg = data;
    // }
    VegetablesItem.prototype.onSelect = function () {
        if (this.isLock) {
            this.onShowInfo();
            return;
        }
        EventDispath_1.default.send(EventType_1.EventType.CROP_PLANT, this.data.id);
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
        }
    };
    /** 查看作物详情 */
    VegetablesItem.prototype.onShowInfo = function () {
        // 显示作物详情
        UIMananger_1.default.showPanel(UIType_1.default.VegetablesUnlockView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data.id);
    };
    VegetablesItem.prototype.onDestroy = function () {
        EventDispath_1.default.removeEventListeners(this);
    };
    __decorate([
        property(cc.Node)
    ], VegetablesItem.prototype, "btn", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesItem.prototype, "orderTips", void 0);
    __decorate([
        property(cc.Sprite)
    ], VegetablesItem.prototype, "uImgCrop", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesItem.prototype, "ulabelName", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesItem.prototype, "uImgLock", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesItem.prototype, "uImgMask", void 0);
    VegetablesItem = __decorate([
        ccclass
    ], VegetablesItem);
    return VegetablesItem;
}(AItemRenerer_1.default));
exports.default = VegetablesItem;

cc._RF.pop();
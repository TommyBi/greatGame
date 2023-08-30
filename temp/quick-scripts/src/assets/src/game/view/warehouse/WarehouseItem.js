"use strict";
cc._RF.push(module, 'bed78OSIfNCbL1iRYw3UnQM', 'WarehouseItem');
// src/game/view/warehouse/WarehouseItem.ts

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
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WarehouseItem = /** @class */ (function (_super) {
    __extends(WarehouseItem, _super);
    function WarehouseItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uImgCrop = null;
        _this.ulabelRepertory = null; // 库存
        _this.ulabelName = null;
        return _this;
    }
    WarehouseItem.prototype.onLoad = function () {
        // EventDispath.on(this.node, this.onSelect, this);
    };
    WarehouseItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    WarehouseItem.prototype.initUI = function () {
        var _this = this;
        var cropCfg = ConfigManager_1.default.getCropById(this.data.cropId);
        this.ulabelName.string = "" + cropCfg.name;
        this.ulabelRepertory.string = "\u6570\u91CF:" + this.data.num;
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.data.cropId), function (res) {
            _this.uImgCrop.spriteFrame = res;
        });
    };
    WarehouseItem.prototype.onSelect = function () {
        // cc.log("点击了item");
    };
    WarehouseItem.prototype.onDestroy = function () {
        // EventDispath.removeEventListeners(this);
    };
    __decorate([
        property(cc.Sprite)
    ], WarehouseItem.prototype, "uImgCrop", void 0);
    __decorate([
        property(cc.Label)
    ], WarehouseItem.prototype, "ulabelRepertory", void 0);
    __decorate([
        property(cc.Label)
    ], WarehouseItem.prototype, "ulabelName", void 0);
    WarehouseItem = __decorate([
        ccclass
    ], WarehouseItem);
    return WarehouseItem;
}(AItemRenerer_1.default));
exports.default = WarehouseItem;

cc._RF.pop();
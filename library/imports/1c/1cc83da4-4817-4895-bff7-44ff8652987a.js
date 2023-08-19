"use strict";
cc._RF.push(module, '1cc832kSBdIlb/3RP+GUph6', 'BarragePrefab');
// src/game/Barrage/BarragePrefab.ts

"use strict";
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
var DataManager_1 = require("../../framework/manager/DataManager");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BarragePrefab = /** @class */ (function (_super) {
    __extends(BarragePrefab, _super);
    function BarragePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headIcon = null;
        _this.nameLabel = null;
        _this.moneyLabel = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        return _this;
    }
    BarragePrefab.prototype.setData = function () {
        var barrageData = DataManager_1.default.getJson("barrage");
        var data = barrageData[DataManager_1.default._barrageIndex];
        DataManager_1.default._barrageIndex++;
        if (DataManager_1.default._barrageIndex > 392) {
            DataManager_1.default._barrageIndex = 1;
        }
        this.nameLabel.string = data["name"];
        this.moneyLabel.string = data["money"] + "元";
        MkUtils_1.default.loadSpriteFrame("texture/barrage/" + data["headshot"], function (spriteFrame) {
            if (spriteFrame)
                this.headIcon.spriteFrame = spriteFrame;
        }.bind(this));
    };
    __decorate([
        property(cc.Sprite)
    ], BarragePrefab.prototype, "headIcon", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "moneyLabel", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "descLb2", void 0);
    BarragePrefab = __decorate([
        ccclass
    ], BarragePrefab);
    return BarragePrefab;
}(cc.Component));
exports.default = BarragePrefab;

cc._RF.pop();
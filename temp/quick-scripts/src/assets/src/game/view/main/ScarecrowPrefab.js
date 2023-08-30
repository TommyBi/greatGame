"use strict";
cc._RF.push(module, 'd6dbd3MgXZOFJBomC1dmxhu', 'ScarecrowPrefab');
// src/game/view/main/ScarecrowPrefab.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScarecrowPrefab = /** @class */ (function (_super) {
    __extends(ScarecrowPrefab, _super);
    function ScarecrowPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = null;
        _this.lvUpEff = null;
        return _this;
    }
    // onLoad () {}
    ScarecrowPrefab.prototype.start = function () {
        this.lvUpEff.node.active = false;
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_SCARECROW, this.changeSkin, this);
    };
    ScarecrowPrefab.prototype.setData = function (id) {
        if (id === void 0) { id = 1; }
        this.changeSkin(0);
    };
    ScarecrowPrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        var id = PlayerModel_1.default.getUIConfig().scarecrowlv;
        if (id == 0)
            return;
        MkUtils_1.default.loadSpriteFrame("texture/prop/scarecrow/" + ("0" + id), function (res) {
            _this.img.spriteFrame = res;
            if (isLvUp) {
                _this.lvUpEff.node.active = true;
                _this.lvUpEff.animation = "animation";
            }
        });
    };
    __decorate([
        property(cc.Sprite)
    ], ScarecrowPrefab.prototype, "img", void 0);
    __decorate([
        property(sp.Skeleton)
    ], ScarecrowPrefab.prototype, "lvUpEff", void 0);
    ScarecrowPrefab = __decorate([
        ccclass
    ], ScarecrowPrefab);
    return ScarecrowPrefab;
}(cc.Component));
exports.default = ScarecrowPrefab;

cc._RF.pop();
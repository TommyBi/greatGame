"use strict";
cc._RF.push(module, '356f9xbDbVAPrRPv9pIHuqp', 'WarehousePrefab');
// src/game/view/main/WarehousePrefab.ts

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
var WarehousePrefab = /** @class */ (function (_super) {
    __extends(WarehousePrefab, _super);
    function WarehousePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = null;
        _this.effNode = null;
        // onLoad () {}
        _this.mId = 0;
        return _this;
    }
    WarehousePrefab.prototype.start = function () {
        this.effNode.active = false;
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_WAREHOUSE, this.changeSkin, this);
    };
    WarehousePrefab.prototype.setData = function (id) {
        if (id === void 0) { id = 1; }
        this.changeSkin(0);
    };
    WarehousePrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        this.mId = PlayerModel_1.default.getUIConfig().warehouselv;
        MkUtils_1.default.loadSpriteFrame("texture/prop/warehouse/" + ("0" + this.mId), function (res) {
            if (isLvUp) {
                var arr = _this.effNode.children;
                _this.effNode.active = true;
                for (var i = 0; i < arr.length; i++) {
                    var eff = arr[i].getComponent(sp.Skeleton);
                    eff.animation = "animation";
                }
                MkUtils_1.default.setNodeDelay(_this.node, 5, function () {
                    _this.effNode.active = false;
                });
            }
            _this.img.spriteFrame = res;
        });
    };
    __decorate([
        property(cc.Sprite)
    ], WarehousePrefab.prototype, "img", void 0);
    __decorate([
        property(cc.Node)
    ], WarehousePrefab.prototype, "effNode", void 0);
    WarehousePrefab = __decorate([
        ccclass
    ], WarehousePrefab);
    return WarehousePrefab;
}(cc.Component));
exports.default = WarehousePrefab;

cc._RF.pop();
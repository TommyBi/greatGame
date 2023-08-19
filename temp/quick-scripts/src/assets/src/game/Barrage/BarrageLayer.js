"use strict";
cc._RF.push(module, 'c0812Q9NF9HepddxndFa2jO', 'BarrageLayer');
// src/game/Barrage/BarrageLayer.ts

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
var UIMananger_1 = require("../../framework/manager/UIMananger");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var BarragePrefab_1 = require("./BarragePrefab");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BarrageLayer = /** @class */ (function (_super) {
    __extends(BarrageLayer, _super);
    function BarrageLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.barrageNode = null;
        _this._barrageIndex = 0;
        _this._actionNum = 0;
        return _this;
    }
    BarrageLayer.prototype.start = function () {
        //一秒之后
        this.scheduleOnce(this.initBarrage.bind(this), 1);
    };
    BarrageLayer.prototype.initBarrage = function () {
        var _this = this;
        var barrageNode = UIMananger_1.default.barragePool.get();
        if (!barrageNode) {
            barrageNode = cc.instantiate(this.barrageNode);
        }
        barrageNode.getComponent(BarragePrefab_1.default).setData();
        cc.director.getScene().addChild(barrageNode);
        var y1 = this._barrageIndex == 0 ? cc.winSize.height - 500 : cc.winSize.height - 700;
        var p = cc.v2(1330, y1);
        barrageNode.setPosition(p);
        barrageNode.runAction(cc.sequence(cc.moveTo(10, 0, barrageNode.y), cc.moveTo(5, -690, barrageNode.y), cc.callFunc(function () {
            UIMananger_1.default.barragePool.put(barrageNode);
            if (_this._actionNum == 0) {
                _this._actionNum++;
                return;
            }
            if (_this._barrageIndex == 2) {
                var delayTime = MkUtils_1.default.randomNM(3, 8);
                _this.scheduleOnce(function () {
                    _this._barrageIndex = 0;
                    _this._actionNum = 0;
                    _this.initBarrage();
                }, delayTime);
            }
        })));
        if (this._barrageIndex == 0) {
            var time = MkUtils_1.default.randomNM(2, 20);
            this.scheduleOnce(function () {
                _this.initBarrage();
            }, time);
        }
        this._barrageIndex++;
    };
    __decorate([
        property(cc.Prefab)
    ], BarrageLayer.prototype, "barrageNode", void 0);
    BarrageLayer = __decorate([
        ccclass
    ], BarrageLayer);
    return BarrageLayer;
}(cc.Component));
exports.default = BarrageLayer;

cc._RF.pop();
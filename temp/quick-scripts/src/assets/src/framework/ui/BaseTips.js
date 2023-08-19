"use strict";
cc._RF.push(module, '46727hHQx1Kb4C+eWcFtHdK', 'BaseTips');
// src/framework/ui/BaseTips.ts

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
var Handler_1 = require("../base/Handler");
var LoaderManager_1 = require("../manager/LoaderManager");
var UIMananger_1 = require("../manager/UIMananger");
var ComponentHelper_1 = require("../tools/ComponentHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseTips = /** @class */ (function (_super) {
    __extends(BaseTips, _super);
    function BaseTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inData = null;
        _this._uiName = "";
        _this._effect = null;
        _this.modelUIOpacity = 150;
        _this._delayRemove = null;
        _this.maskURL = "mbg"; //资源放在common模块中
        return _this;
    }
    BaseTips.prototype.close = function () {
        UIMananger_1.default.hideTips(this.node);
        this.modelUI.stopAllActions();
        this.modelUI.runAction(cc.fadeOut(0.2));
    };
    BaseTips.prototype.setUIParent = function (parentNode) {
        this.node.parent = parentNode;
    };
    BaseTips.prototype._show_ = function (args) {
        this._inData = args;
        this._initModule();
    };
    BaseTips.prototype.setDelayRemove = function (dr) {
        this._delayRemove = dr;
    };
    BaseTips.prototype.setUIName = function (uiName) {
        this._uiName = uiName;
    };
    BaseTips.prototype.setEffect = function (effect) {
        this._effect = effect;
    };
    BaseTips.prototype.startHide = function () {
    };
    BaseTips.prototype._hide_ = function () {
        this.node.destroy();
    };
    BaseTips.prototype.on_Show = function () {
        var _this = this;
        this._showModuleAction();
        if (this._delayRemove && this._inData) {
            var reward = this._inData[0];
            this.node.runAction(cc.sequence(cc.delayTime(this._delayRemove), cc.callFunc(function () {
                _this.scheduleOnce(_this.close.bind(_this), 0);
            })));
            var noCoin = this._inData[1];
        }
    };
    BaseTips.prototype._initModule = function () {
        if (!cc.isValid(this.modelUI)) {
            this.modelUI = ComponentHelper_1.default.createSprite(null, null);
            LoaderManager_1.default.loaderSpriteFrame(this.maskURL, Handler_1.default.create(this._moduleComplete, this), 'commonRes');
            this.modelUI.addComponent(cc.BlockInputEvents);
            this.modelUI.opacity = 0;
            this.modelUI.parent = this.node;
            this.modelUI.setSiblingIndex(0);
        }
    };
    BaseTips.prototype._moduleComplete = function (res) {
        var sprite = ComponentHelper_1.default.spriteFrame(this.modelUI, res);
        sprite.trim = false;
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        var msize = cc.view.getVisibleSize();
        this.modelUI.width = msize.width;
        this.modelUI.height = msize.height;
        this._clickClose();
    };
    BaseTips.prototype._showModuleAction = function () {
        if (cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
            this.modelUI.runAction(cc.fadeTo(0.2, this.modelUIOpacity));
        }
    };
    BaseTips.prototype.startShow = function () { };
    //点击空白区域关闭
    BaseTips.prototype._clickClose = function () {
        var _this = this;
        this.modelUI.on('touchend', function (event) {
            event.stopPropagation();
            _this.node.stopAllActions();
            var clickPos = event.getLocation();
            var visibleSize = cc.view.getVisibleSize();
            clickPos.x = clickPos.x - visibleSize.width / 2;
            clickPos.y = clickPos.y - visibleSize.height / 2;
            var rect = _this.node.getBoundingBox();
            if (!rect.contains(clickPos)) {
                _this.close();
            }
        });
    };
    BaseTips = __decorate([
        ccclass
    ], BaseTips);
    return BaseTips;
}(cc.Component));
exports.default = BaseTips;

cc._RF.pop();
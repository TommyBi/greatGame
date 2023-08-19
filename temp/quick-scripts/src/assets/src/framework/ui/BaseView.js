"use strict";
cc._RF.push(module, '1774ey9vgZJTaj3njez1q4t', 'BaseView');
// src/framework/ui/BaseView.ts

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
var LoaderManager_1 = require("../manager/LoaderManager");
var GamePoolManager_1 = require("../manager/GamePoolManager");
var UIMananger_1 = require("../manager/UIMananger");
var Handler_1 = require("../base/Handler");
var NResponer_1 = require("../message/NResponer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseView = /** @class */ (function (_super) {
    __extends(BaseView, _super);
    function BaseView() {
        var _this = _super.call(this) || this;
        _this.isOnLoad = true;
        return _this;
    }
    BaseView.prototype.setUIName = function (url) {
        this.uiName = url;
    };
    BaseView.prototype.setModuleName = function (mname) {
        this.moduleName = mname;
    };
    //开始显示
    BaseView.prototype._show_ = function () {
    };
    BaseView.prototype._hide_ = function () {
        if (LoaderManager_1.default.isRelease(this.moduleName)) {
            this.node.destroy();
            GamePoolManager_1.default.clearByTarget(this);
            this._destroyClear();
        }
        else {
            GamePoolManager_1.default.putBackByTarget(this);
            if (!!this.node.parent) {
                this.node.removeFromParent(false);
            }
            this._closeClear();
        }
    };
    //关时清理
    BaseView.prototype._closeClear = function () {
    };
    //销毁时清理
    BaseView.prototype._destroyClear = function () {
    };
    BaseView.prototype.on_Show = function (args) {
    };
    BaseView.prototype.on_Hide = function () {
    };
    BaseView.prototype.close = function () {
        UIMananger_1.default.hideView(this.uiName);
    };
    BaseView.prototype.onDestroy = function () {
        cc.log('BaseView 被销毁');
        NResponer_1.default.targetOff(this, true);
        Handler_1.default.releaseByHost(this);
        this.isOnLoad = false;
    };
    BaseView = __decorate([
        ccclass
    ], BaseView);
    return BaseView;
}(cc.Component));
exports.default = BaseView;

cc._RF.pop();
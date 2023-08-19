"use strict";
cc._RF.push(module, '51410HUvXBLMacPUvZBl8j5', 'BasePanel');
// src/framework/ui/BasePanel.ts

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
var ComponentHelper_1 = require("../tools/ComponentHelper");
var Handler_1 = require("../base/Handler");
var LoaderManager_1 = require("../manager/LoaderManager");
var UIMananger_1 = require("../manager/UIMananger");
var UIState_1 = require("./UIState");
var EventDispath_1 = require("../message/EventDispath");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BasePanel = /** @class */ (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiName = "basePanel";
        //点击面板其他位置是否关不面板 需要在prefab中设置node的size大小
        _this.maskURL = "mbg"; //资源放在common模块中
        _this._ismask = true;
        _this.effect = null;
        _this.clickOtherClose = false;
        return _this;
    }
    BasePanel.prototype.init = function (clickClose) {
        if (this._ismask) {
            this._initModule();
        }
        this.clickOtherClose = clickClose;
    };
    BasePanel.prototype.setUIName = function (name) {
        this.uiName = name;
    };
    BasePanel.prototype.setModuleName = function (mname) {
        this.moduleName = mname;
    };
    BasePanel.prototype.setClickClose = function (value) {
        this.clickOtherClose = value;
    };
    BasePanel.prototype.setEffect = function (value) {
        this.effect = value;
    };
    /**
     * 设置ui状态
     */
    BasePanel.prototype.setUIState = function (state) {
        this.uiState = state;
        this.uiState.ui = this;
    };
    BasePanel.prototype.upDateState = function (state) {
        if (!!this.uiState) {
            this.uiState.openState = state;
            if (state === UIState_1.StateType.close) {
                this.uiState.reset();
            }
        }
    };
    //打开面板前 先执行的函数
    BasePanel.prototype._show_ = function (args) {
        this.inData = args;
        this.upDateState(UIState_1.StateType.opening);
    };
    /**
     * 是否能立即关闭，主要用于有些面板不能立马关闭，需要等条件完成才能，例如转盘
     */
    BasePanel.prototype.canHideNow = function () {
        return true;
    };
    BasePanel.prototype.startHide = function () {
    };
    BasePanel.prototype.startShow = function () {
    };
    BasePanel.prototype._hide_ = function () {
        this._hideModeule();
        this.upDateState(UIState_1.StateType.close);
        this.node.destroy();
    };
    //关时清理
    BasePanel.prototype._closeClear = function () {
    };
    //销毁时清理
    BasePanel.prototype._destroyClear = function () {
    };
    //设置ui的父容器
    BasePanel.prototype.setUIParent = function (parent) {
        if (cc.isValid(parent)) {
            this.node.parent = parent;
        }
    };
    //打开时调用
    BasePanel.prototype.on_Show = function (args) {
        this._showModuleAction();
        this.upDateState(UIState_1.StateType.open);
    };
    BasePanel.prototype.on_Hide = function () {
        this._hideModeule();
    };
    BasePanel.prototype.close = function () {
        EventDispath_1.default.removeEventListeners(this);
        UIMananger_1.default.hidePanel(this.uiName);
    };
    //初始化模态
    BasePanel.prototype._initModule = function () {
        if (!cc.isValid(this.modelUI)) {
            this.modelUI = ComponentHelper_1.default.createSprite(null, null);
            LoaderManager_1.default.loaderSpriteFrame(this.maskURL, Handler_1.default.create(this._moduleComplete, this), 'commonRes');
            this.modelUI.addComponent(cc.BlockInputEvents);
            this.modelUI.opacity = 0;
            this.modelUI.parent = this.node;
            this.modelUI.setSiblingIndex(0);
        }
    };
    BasePanel.prototype._moduleComplete = function (res) {
        var sprite = ComponentHelper_1.default.spriteFrame(this.modelUI, res);
        sprite.trim = false;
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        var msize = cc.view.getVisibleSize();
        this.modelUI.width = msize.width;
        this.modelUI.height = msize.height;
        this._clickClose();
    };
    //模态效果
    BasePanel.prototype._showModuleAction = function () {
        if (cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
            this.modelUI.runAction(cc.fadeTo(0.2, 150));
        }
    };
    BasePanel.prototype._hideModeule = function () {
        if (cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
        }
    };
    //点击空白区域关闭
    BasePanel.prototype._clickClose = function () {
        var _this = this;
        this.modelUI.on('touchend', function (event) {
            event.stopPropagation();
            if (_this.clickOtherClose) {
                var clickPos = event.getLocation();
                var visibleSize = cc.view.getVisibleSize();
                clickPos.x = clickPos.x - visibleSize.width / 2;
                clickPos.y = clickPos.y - visibleSize.height / 2;
                var rect = _this.node.getBoundingBox();
                if (!rect.contains(clickPos)) {
                    _this.close();
                }
            }
        });
    };
    BasePanel = __decorate([
        ccclass
    ], BasePanel);
    return BasePanel;
}(cc.Component));
exports.default = BasePanel;

cc._RF.pop();
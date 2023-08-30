
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/UIMananger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81ea29RSKFHk6XLJxBkjz8t', 'UIMananger');
// src/framework/manager/UIMananger.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderManager_1 = require("./LoaderManager");
var Handler_1 = require("../base/Handler");
var GamePoolManager_1 = require("./GamePoolManager");
var UIEffectManager_1 = require("./UIEffectManager");
var UIState_1 = require("../ui/UIState");
var BaseTips_1 = require("../ui/BaseTips");
var BasePanel_1 = require("../ui/BasePanel");
var SDKManager_1 = require("./SDKManager");
var UIManager = /** @class */ (function () {
    function UIManager() {
        //TODO 保存近期打开的3个面板，如果多余3个时 把最早的释放
        //resDic 资源集合
        this.ui_cache = {};
        this.view_cache = {};
        this.uiStateArr = []; //ui打开关闭管理
        this.activeStateArr = []; //当前激活的uistate
        this.barragePool = new cc.NodePool();
    }
    UIManager.instance = function () {
        if (!this._instance) {
            this._instance = new UIManager();
        }
        return this._instance;
    };
    UIManager.prototype.init = function () {
        this.viewLayer = new cc.Node('viewLayer');
        this.effLayer = new cc.Node('tipLayer');
        this.uiLayer = new cc.Node('uiLayer');
        this.tipLayer = new cc.Node('tipLayer');
        this.sceneLayer = new cc.Node('sceneLayer');
        this.guideLayer = new cc.Node('guideLayer');
        var canvas = cc.director.getScene().getChildByName('Canvas');
        this.viewLayer.parent = canvas;
        this.sceneLayer.parent = canvas;
        this.effLayer.parent = canvas;
        this.uiLayer.parent = canvas;
        this.tipLayer.parent = canvas;
        this.guideLayer.parent = canvas;
        this.currentView = null; //当前的view
        // this.barragePool = new cc.NodePool();
        //TODO test
        // this.viewLayer.opacity = 60;
        // this.uiLayer.opacity = 60;
    };
    UIManager.prototype.setTop = function () {
        if (!this.top)
            return;
        if (!this.top.parent) {
            this.viewLayer.addChild(this.top);
            if (cc.winSize.height / cc.winSize.width > (16 / 9 + 0.1)) {
                this.top.setPosition(0, cc.winSize.height / 2 - 210);
            }
            else {
                this.top.setPosition(0, cc.winSize.height / 2 - 110);
            }
        }
    };
    UIManager.prototype.showGuide = function () {
        if (!this.guide)
            return;
        if (!this.guide.parent) {
            this.guide.parent = this.guideLayer;
        }
    };
    UIManager.prototype.hideGuide = function () {
        if (!this.guide)
            return;
        if (this.guide.parent) {
            this.guideLayer.removeAllChildren();
        }
    };
    //显示view
    //pdata UIType中的key
    UIManager.prototype.showView = function (pdata) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!!pdata) {
            if (!!this.currentView) {
                if (this.currentView.uiName === pdata.uname) {
                    this.currentView.on_Show(args);
                    return;
                }
            }
            LoaderManager_1.default.loaderPrefab(pdata.uname, Handler_1.default.create(function (res) {
                if (!!res) {
                    res = GamePoolManager_1.default.instance(res, 'UView-' + pdata.uname);
                }
                else {
                    return;
                }
                if (!!_this.currentView) {
                    _this.closeAllOpenPanel();
                    _this.currentView.close();
                }
                var baseView = res.getComponent("BaseView");
                _this.view_cache[pdata.uname] = res;
                if (baseView) {
                    _this.currentView = baseView;
                    baseView.setUIName(pdata.uname);
                    baseView.setModuleName(pdata.mname);
                    baseView._show_();
                    baseView.on_Show(args);
                }
                else {
                    cc.error("请给面板添加BaseView的子类脚本");
                }
                // res.parent = this.viewLayer;
                _this.viewLayer.addChild(res);
                res.x = 0;
                res.y = 0;
            }, this), pdata.mname);
        }
        else {
            cc.log('制定打开的脚本不存在');
        }
    };
    UIManager.prototype.hideView = function (name) {
        var baseUI = this.view_cache[name].getComponent("BaseView");
        baseUI._hide_();
        baseUI.on_Hide();
        if (LoaderManager_1.default.isRelease(baseUI.moduleName)) {
            LoaderManager_1.default.releaseByModule(baseUI.moduleName);
            GamePoolManager_1.default.clearByTarget('UView-' + name);
        }
        else {
            GamePoolManager_1.default.putBackByTarget('UView-' + name);
        }
        this.view_cache[name] = null;
    };
    UIManager.prototype.showPanel = function (pdata, openBack, closeBack, effect) {
        var _this = this;
        if (effect === void 0) { effect = null; }
        var args = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            args[_i - 4] = arguments[_i];
        }
        console.log("打开面板", JSON.stringify(pdata));
        var state = this.checkPanelOpen(pdata); //如果有已经打开，并且不是可以多开的
        if (state) {
            return;
        }
        //去掉所有弹框效果
        if (effect) {
            effect = null;
        }
        var newSate = this.getUIState(pdata);
        LoaderManager_1.default.loaderPrefab(pdata.uname, Handler_1.default.create(function (res, url, state) {
            if (res) {
                var panel = GamePoolManager_1.default.instance(res, 'UPanel-' + pdata.uname);
                var baseUI = panel.getComponent("BasePanel");
                if (!!baseUI) {
                    baseUI.init(pdata.clickClose);
                    baseUI.setUIName(pdata.uname);
                    baseUI.setModuleName(pdata.mname);
                    baseUI.setEffect(effect);
                    baseUI._show_(closeBack, args); //打开前需要执行的函数
                    baseUI.startShow();
                    baseUI.setUIState(state);
                }
                else {
                    cc.error("请给面板添加BaseUI的子类脚本");
                    return;
                }
                // this.ui_cache[pdata.uname] = panel;
                baseUI.setUIParent(_this.uiLayer);
                if (!!effect) {
                    UIEffectManager_1.default.effect(effect, panel, false, Handler_1.default.create(_this.effectComplete, _this));
                }
                else {
                    baseUI.on_Show(); //真正的打开
                }
                if (openBack)
                    openBack();
            }
        }, this, true, newSate), pdata.mname);
    };
    UIManager.prototype.checkPanel = function (panelName) {
        var uiLayerChild = this.uiLayer.children;
        for (var i = 0; i < uiLayerChild.length; ++i) {
            var layer = uiLayerChild[i];
            if (!layer.getComponent(BasePanel_1.default)) {
                continue;
            }
            if (layer.getComponent(BasePanel_1.default).uiName == panelName) {
                return true;
            }
        }
        return false;
    };
    /**
     * 通过ui名称隐藏
     * @param name ui名称
     */
    UIManager.prototype.hidePanel = function (name) {
        var uname = '';
        if (typeof (name) === 'string') {
            uname = name;
        }
        else {
            uname = name.uname;
        }
        var state = this.getUIStateByName(uname, true);
        if (!!state) {
            var baseUI = state.ui;
            baseUI.startHide();
            // let isNew = SDKManager.hasNewOrderReward();
            SDKManager_1.default.reportTrigger();
            // if (!!baseUI.effect) {
            //     UIEffectManager.effect(baseUI.effect + "back", baseUI.node, false, Handler.create(this.effectBackComplete, this));
            // } else {
            this.effectBackComplete(baseUI.node);
            // }
        }
    };
    UIManager.prototype.showTips = function (pdata, effect) {
        var _this = this;
        if (effect === void 0) { effect = UIEffectManager_1.UIEffectType.SCALE; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var url = "prefab/" + pdata.mname + "/" + pdata.uname;
        var completeCb = function (err, res) {
            if (err) {
                cc.error('资源加载失败--' + url);
                return;
            }
            var tips = GamePoolManager_1.default.instance(res, 'UITips-' + pdata.uname);
            var baseTips = tips.getComponent(BaseTips_1.default);
            if (baseTips) {
                baseTips.setUIName(pdata.uname);
                baseTips._show_(args);
                baseTips.setDelayRemove(pdata.delayRemove);
                baseTips.setEffect(effect);
                baseTips.startShow();
            }
            else {
                cc.error("\u8BF7\u7ED9" + pdata.uname + "\u6DFB\u52A0BaseTips\u7684\u5B50\u7C7B\u811A\u672C");
            }
            if (effect) {
                // UIEffectManager.effect(effect, tips, false, Handler.create(this.effectComplete, this));
                UIEffectManager_1.default.effect(effect, tips, false, null); //Handle先不传
            }
            baseTips.setUIParent(_this.tipLayer);
            baseTips.on_Show();
        };
        var res = cc.loader.getRes(url, cc.Prefab);
        if (res) {
            completeCb(null, res);
            return;
        }
        cc.loader.loadRes(url, cc.Prefab, completeCb);
    };
    UIManager.prototype.checkTips = function (uName) {
        var tipLayerChild = this.tipLayer.children;
        for (var i = 0; i < tipLayerChild.length; ++i) {
            var layer = tipLayerChild[i];
            if (layer.getComponent(BaseTips_1.default)._uiName == uName) {
                return true;
            }
        }
        return false;
    };
    UIManager.prototype.hideTips = function (node) {
        if (!node) {
            return;
        }
        var baseTips = node.getComponent(BaseTips_1.default);
        if (baseTips) {
            baseTips.startHide();
            if (baseTips._effect) {
                UIEffectManager_1.default.effect(baseTips._effect + "back", node, false, Handler_1.default.create(function (tips) {
                    if (cc.isValid(tips)) {
                        baseTips._hide_();
                    }
                }, this));
            }
        }
    };
    UIManager.prototype.effectComplete = function (panel) {
        if (cc.isValid(panel)) {
            var baseUI = panel.getComponent("BasePanel");
            baseUI.on_Show();
        }
    };
    UIManager.prototype.effectBackComplete = function (panel) {
        if (cc.isValid(panel)) {
            var baseUI = panel.getComponent('BasePanel');
            baseUI.on_Hide();
            baseUI._hide_();
            // if (LoaderManager.isRelease(baseUI.moduleName)) {
            //     LoaderManager.releaseByModule(baseUI.moduleName);
            //     GamePoolManager.clearByTarget('UPanel-' + baseUI.uiName);
            // } else {
            //     GamePoolManager.putBackByTarget('UPanel-' + baseUI.uiName);
            // }
        }
    };
    UIManager.prototype.isShow = function (path) {
        if (this.ui_cache[path]) {
            return true;
        }
        return false;
    };
    UIManager.prototype.getUIStateByName = function (name, isRemove) {
        if (isRemove === void 0) { isRemove = false; }
        for (var index = 0; index < this.activeStateArr.length; index++) {
            var element = this.activeStateArr[index];
            if (name === element.uName) {
                if (isRemove) {
                    this.activeStateArr.splice(index, 1);
                }
                return element;
            }
        }
    };
    UIManager.prototype.closeAllOpenPanel = function () {
        for (var index = 0; index < this.activeStateArr.length; index++) {
            var element = this.activeStateArr[index];
            element.reset();
        }
        this.activeStateArr.length = 0;
    };
    UIManager.prototype.checkPanelOpen = function (data) {
        if (!!data) {
            //检测面板能否多开
            if (!!data.isMutl) {
                return false;
            }
            for (var index = this.activeStateArr.length - 1; index >= 0; index--) {
                var element = this.activeStateArr[index];
                if (element.isActive && element.uName === data.uname && element.openState > 0) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * 获得可用的uistate
     */
    UIManager.prototype.getUIState = function (data) {
        for (var index = 0; index < this.uiStateArr.length; index++) {
            var element = this.uiStateArr[index];
            if (!element.isActive) {
                element.reset();
                element.setData(data);
                this.activeStateArr.push(element);
                return element;
            }
        }
        var state = new UIState_1.UIState();
        state.setData(data);
        this.uiStateArr.push(state);
        this.activeStateArr.push(state);
        return state;
    };
    return UIManager;
}());
exports.default = UIManager.instance();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMscURBQWdEO0FBQ2hELHFEQUFrRTtBQUNsRSx5Q0FBd0M7QUFDeEMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUN4QywyQ0FBc0M7QUFJdEM7SUFBQTtRQUNJLGlDQUFpQztRQUNqQyxhQUFhO1FBQ0wsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFtQixFQUFFLENBQUMsQ0FBQSxVQUFVO1FBQzFDLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQyxDQUFBLGNBQWM7UUFTbkQsZ0JBQVcsR0FBZ0IsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFzVnhELENBQUM7SUFwVlUsa0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUNwQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFB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SUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FyV0EsQUFxV0MsSUFBQTtBQUVELGtCQUFlLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVmlldyBmcm9tIFwiLi4vdWkvQmFzZVZpZXdcIjtcclxuaW1wb3J0IExvYWRlck1hbmFnZXIgZnJvbSBcIi4vTG9hZGVyTWFuYWdlclwiO1xyXG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XHJcbmltcG9ydCBHYW1lUG9vbE1hbmFnZXIgZnJvbSBcIi4vR2FtZVBvb2xNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSUVmZmVjdE1hbmFnZXIsIHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4vVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJU3RhdGUgfSBmcm9tIFwiLi4vdWkvVUlTdGF0ZVwiO1xyXG5pbXBvcnQgQmFzZVRpcHMgZnJvbSBcIi4uL3VpL0Jhc2VUaXBzXCI7XHJcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi9TREtNYW5hZ2VyXCI7XHJcblxyXG5cclxuXHJcbmNsYXNzIFVJTWFuYWdlciB7XHJcbiAgICAvL1RPRE8g5L+d5a2Y6L+R5pyf5omT5byA55qEM+S4qumdouadv++8jOWmguaenOWkmuS9mTPkuKrml7Yg5oqK5pyA5pep55qE6YeK5pS+XHJcbiAgICAvL3Jlc0RpYyDotYTmupDpm4blkIhcclxuICAgIHByaXZhdGUgdWlfY2FjaGUgPSB7fTtcclxuICAgIHByaXZhdGUgdmlld19jYWNoZSA9IHt9O1xyXG4gICAgcHJpdmF0ZSB1aVN0YXRlQXJyOiBBcnJheTxVSVN0YXRlPiA9IFtdOy8vdWnmiZPlvIDlhbPpl63nrqHnkIZcclxuICAgIHByaXZhdGUgYWN0aXZlU3RhdGVBcnI6IEFycmF5PFVJU3RhdGU+ID0gW107Ly/lvZPliY3mv4DmtLvnmoR1aXN0YXRlXHJcbiAgICBwdWJsaWMgdmlld0xheWVyOiBjYy5Ob2RlO1xyXG4gICAgcHVibGljIGd1aWRlTGF5ZXI6IGNjLk5vZGU7XHJcbiAgICBwdWJsaWMgdWlMYXllcjogY2MuTm9kZTtcclxuICAgIHB1YmxpYyB0aXBMYXllcjogY2MuTm9kZTtcclxuICAgIHB1YmxpYyBlZmZMYXllcjogY2MuTm9kZTtcclxuICAgIHB1YmxpYyBzY2VuZUxheWVyOiBjYy5Ob2RlO1xyXG4gICAgcHVibGljIGN1cnJlbnRWaWV3OiBCYXNlVmlldztcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVUlNYW5hZ2VyO1xyXG4gICAgcHVibGljIGJhcnJhZ2VQb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG5cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpOiBVSU1hbmFnZXIge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVUlNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudmlld0xheWVyID0gbmV3IGNjLk5vZGUoJ3ZpZXdMYXllcicpO1xyXG4gICAgICAgIHRoaXMuZWZmTGF5ZXIgPSBuZXcgY2MuTm9kZSgndGlwTGF5ZXInKTtcclxuICAgICAgICB0aGlzLnVpTGF5ZXIgPSBuZXcgY2MuTm9kZSgndWlMYXllcicpO1xyXG4gICAgICAgIHRoaXMudGlwTGF5ZXIgPSBuZXcgY2MuTm9kZSgndGlwTGF5ZXInKTtcclxuICAgICAgICB0aGlzLnNjZW5lTGF5ZXIgPSBuZXcgY2MuTm9kZSgnc2NlbmVMYXllcicpO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVMYXllciA9IG5ldyBjYy5Ob2RlKCdndWlkZUxheWVyJyk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMudmlld0xheWVyLnBhcmVudCA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLnNjZW5lTGF5ZXIucGFyZW50ID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZWZmTGF5ZXIucGFyZW50ID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMudWlMYXllci5wYXJlbnQgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy50aXBMYXllci5wYXJlbnQgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5ndWlkZUxheWVyLnBhcmVudCA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbnVsbDsvL+W9k+WJjeeahHZpZXdcclxuICAgICAgICAvLyB0aGlzLmJhcnJhZ2VQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgLy9UT0RPIHRlc3RcclxuICAgICAgICAvLyB0aGlzLnZpZXdMYXllci5vcGFjaXR5ID0gNjA7XHJcbiAgICAgICAgLy8gdGhpcy51aUxheWVyLm9wYWNpdHkgPSA2MDtcclxuXHJcbiAgICB9XHJcbiAgICB0b3A6IGNjLk5vZGU7XHJcbiAgICBzZXRUb3AoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvcCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy50b3AucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlld0xheWVyLmFkZENoaWxkKHRoaXMudG9wKVxyXG4gICAgICAgICAgICBpZiAoY2Mud2luU2l6ZS5oZWlnaHQgLyBjYy53aW5TaXplLndpZHRoID4gKDE2IC8gOSArIDAuMSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wLnNldFBvc2l0aW9uKDAsIGNjLndpblNpemUuaGVpZ2h0IC8gMiAtIDIxMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3Auc2V0UG9zaXRpb24oMCwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC0gMTEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGd1aWRlOiBjYy5Ob2RlO1xyXG4gICAgc2hvd0d1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ndWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5ndWlkZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkZS5wYXJlbnQgPSB0aGlzLmd1aWRlTGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGlkZUd1aWRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5ndWlkZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmd1aWRlLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRlTGF5ZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mmL7npLp2aWV3XHJcbiAgICAvL3BkYXRhIFVJVHlwZeS4reeahGtleVxyXG4gICAgc2hvd1ZpZXcocGRhdGEsIC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAoISFwZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnRWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Vmlldy51aU5hbWUgPT09IHBkYXRhLnVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5vbl9TaG93KGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTG9hZGVyTWFuYWdlci5sb2FkZXJQcmVmYWIocGRhdGEudW5hbWUsIEhhbmRsZXIuY3JlYXRlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghIXJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IEdhbWVQb29sTWFuYWdlci5pbnN0YW5jZShyZXMsICdVVmlldy0nICsgcGRhdGEudW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Vmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxPcGVuUGFuZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFzZVZpZXcgPSByZXMuZ2V0Q29tcG9uZW50KFwiQmFzZVZpZXdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3X2NhY2hlW3BkYXRhLnVuYW1lXSA9IHJlcztcclxuICAgICAgICAgICAgICAgIGlmIChiYXNlVmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBiYXNlVmlldztcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVmlldy5zZXRVSU5hbWUocGRhdGEudW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VWaWV3LnNldE1vZHVsZU5hbWUocGRhdGEubW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VWaWV3Ll9zaG93XygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VWaWV3Lm9uX1Nob3coYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcIuivt+e7memdouadv+a3u+WKoEJhc2VWaWV355qE5a2Q57G76ISa5pysXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gcmVzLnBhcmVudCA9IHRoaXMudmlld0xheWVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGF5ZXIuYWRkQ2hpbGQocmVzKTtcclxuICAgICAgICAgICAgICAgIHJlcy54ID0gMDtcclxuICAgICAgICAgICAgICAgIHJlcy55ID0gMDtcclxuICAgICAgICAgICAgfSwgdGhpcyksIHBkYXRhLm1uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coJ+WItuWumuaJk+W8gOeahOiEmuacrOS4jeWtmOWcqCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVZpZXcobmFtZSkge1xyXG4gICAgICAgIGxldCBiYXNlVUkgPSB0aGlzLnZpZXdfY2FjaGVbbmFtZV0uZ2V0Q29tcG9uZW50KFwiQmFzZVZpZXdcIik7XHJcbiAgICAgICAgYmFzZVVJLl9oaWRlXygpO1xyXG4gICAgICAgIGJhc2VVSS5vbl9IaWRlKCk7XHJcbiAgICAgICAgaWYgKExvYWRlck1hbmFnZXIuaXNSZWxlYXNlKGJhc2VVSS5tb2R1bGVOYW1lKSkge1xyXG4gICAgICAgICAgICBMb2FkZXJNYW5hZ2VyLnJlbGVhc2VCeU1vZHVsZShiYXNlVUkubW9kdWxlTmFtZSk7XHJcbiAgICAgICAgICAgIEdhbWVQb29sTWFuYWdlci5jbGVhckJ5VGFyZ2V0KCdVVmlldy0nICsgbmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCgnVVZpZXctJyArIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpZXdfY2FjaGVbbmFtZV0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2hvd1BhbmVsKHBkYXRhLCBvcGVuQmFjaz8sIGNsb3NlQmFjaz8sIGVmZmVjdCA9IG51bGwsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+W8gOmdouadv1wiLCBKU09OLnN0cmluZ2lmeShwZGF0YSkpO1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuY2hlY2tQYW5lbE9wZW4ocGRhdGEpOy8v5aaC5p6c5pyJ5bey57uP5omT5byA77yM5bm25LiU5LiN5piv5Y+v5Lul5aSa5byA55qEXHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ljrvmjonmiYDmnInlvLnmoYbmlYjmnpxcclxuICAgICAgICBpZiAoZWZmZWN0KSB7XHJcbiAgICAgICAgICAgIGVmZmVjdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXdTYXRlID0gdGhpcy5nZXRVSVN0YXRlKHBkYXRhKTtcclxuICAgICAgICBMb2FkZXJNYW5hZ2VyLmxvYWRlclByZWZhYihwZGF0YS51bmFtZSwgSGFuZGxlci5jcmVhdGUoKHJlcywgdXJsLCBzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFuZWwgPSBHYW1lUG9vbE1hbmFnZXIuaW5zdGFuY2UocmVzLCAnVVBhbmVsLScgKyBwZGF0YS51bmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFzZVVJID0gcGFuZWwuZ2V0Q29tcG9uZW50KFwiQmFzZVBhbmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhYmFzZVVJKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVVJLmluaXQocGRhdGEuY2xpY2tDbG9zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVVJLnNldFVJTmFtZShwZGF0YS51bmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVVJLnNldE1vZHVsZU5hbWUocGRhdGEubW5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2VVSS5zZXRFZmZlY3QoZWZmZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVUkuX3Nob3dfKGNsb3NlQmFjaywgYXJncyk7Ly/miZPlvIDliY3pnIDopoHmiafooYznmoTlh73mlbBcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVUkuc3RhcnRTaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVVJLnNldFVJU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLor7fnu5npnaLmnb/mt7vliqBCYXNlVUnnmoTlrZDnsbvohJrmnKxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51aV9jYWNoZVtwZGF0YS51bmFtZV0gPSBwYW5lbDtcclxuICAgICAgICAgICAgICAgIGJhc2VVSS5zZXRVSVBhcmVudCh0aGlzLnVpTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhZWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVUlFZmZlY3RNYW5hZ2VyLmVmZmVjdChlZmZlY3QsIHBhbmVsLCBmYWxzZSwgSGFuZGxlci5jcmVhdGUodGhpcy5lZmZlY3RDb21wbGV0ZSwgdGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVUkub25fU2hvdygpOy8v55yf5q2j55qE5omT5byAXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlbkJhY2spIG9wZW5CYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcywgdHJ1ZSwgbmV3U2F0ZSksIHBkYXRhLm1uYW1lKTtcclxuICAgIH1cclxuICAgIGNoZWNrUGFuZWwocGFuZWxOYW1lKSB7XHJcbiAgICAgICAgbGV0IHVpTGF5ZXJDaGlsZCA9IHRoaXMudWlMYXllci5jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpTGF5ZXJDaGlsZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSB1aUxheWVyQ2hpbGRbaV07XHJcbiAgICAgICAgICAgIGlmICghbGF5ZXIuZ2V0Q29tcG9uZW50KEJhc2VQYW5lbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsYXllci5nZXRDb21wb25lbnQoQmFzZVBhbmVsKS51aU5hbWUgPT0gcGFuZWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrov4d1aeWQjeensOmakOiXj1xyXG4gICAgICogQHBhcmFtIG5hbWUgdWnlkI3np7BcclxuICAgICAqL1xyXG4gICAgaGlkZVBhbmVsKG5hbWU6IGFueSkge1xyXG4gICAgICAgIGxldCB1bmFtZSA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKG5hbWUpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB1bmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdW5hbWUgPSBuYW1lLnVuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFVJU3RhdGVCeU5hbWUodW5hbWUsIHRydWUpO1xyXG4gICAgICAgIGlmICghIXN0YXRlKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXNlVUkgPSBzdGF0ZS51aTtcclxuICAgICAgICAgICAgYmFzZVVJLnN0YXJ0SGlkZSgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgaXNOZXcgPSBTREtNYW5hZ2VyLmhhc05ld09yZGVyUmV3YXJkKCk7XHJcbiAgICAgICAgICAgIFNES01hbmFnZXIucmVwb3J0VHJpZ2dlcigpXHJcbiAgICAgICAgICAgIC8vIGlmICghIWJhc2VVSS5lZmZlY3QpIHtcclxuICAgICAgICAgICAgLy8gICAgIFVJRWZmZWN0TWFuYWdlci5lZmZlY3QoYmFzZVVJLmVmZmVjdCArIFwiYmFja1wiLCBiYXNlVUkubm9kZSwgZmFsc2UsIEhhbmRsZXIuY3JlYXRlKHRoaXMuZWZmZWN0QmFja0NvbXBsZXRlLCB0aGlzKSk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0QmFja0NvbXBsZXRlKGJhc2VVSS5ub2RlKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1RpcHMocGRhdGEsIGVmZmVjdCA9IFVJRWZmZWN0VHlwZS5TQ0FMRSwgLi4uYXJncykge1xyXG4gICAgICAgIGxldCB1cmwgPSBcInByZWZhYi9cIiArIHBkYXRhLm1uYW1lICsgXCIvXCIgKyBwZGF0YS51bmFtZTtcclxuICAgICAgICBsZXQgY29tcGxldGVDYiA9IChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcign6LWE5rqQ5Yqg6L295aSx6LSlLS0nICsgdXJsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGlwczogY2MuTm9kZSA9IEdhbWVQb29sTWFuYWdlci5pbnN0YW5jZShyZXMsICdVSVRpcHMtJyArIHBkYXRhLnVuYW1lKTtcclxuICAgICAgICAgICAgbGV0IGJhc2VUaXBzID0gdGlwcy5nZXRDb21wb25lbnQoQmFzZVRpcHMpO1xyXG4gICAgICAgICAgICBpZiAoYmFzZVRpcHMpIHtcclxuICAgICAgICAgICAgICAgIGJhc2VUaXBzLnNldFVJTmFtZShwZGF0YS51bmFtZSk7XHJcbiAgICAgICAgICAgICAgICBiYXNlVGlwcy5fc2hvd18oYXJncyk7XHJcbiAgICAgICAgICAgICAgICBiYXNlVGlwcy5zZXREZWxheVJlbW92ZShwZGF0YS5kZWxheVJlbW92ZSk7XHJcbiAgICAgICAgICAgICAgICBiYXNlVGlwcy5zZXRFZmZlY3QoZWZmZWN0KTtcclxuICAgICAgICAgICAgICAgIGJhc2VUaXBzLnN0YXJ0U2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYOivt+e7mSR7cGRhdGEudW5hbWV95re75YqgQmFzZVRpcHPnmoTlrZDnsbvohJrmnKxgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSUVmZmVjdE1hbmFnZXIuZWZmZWN0KGVmZmVjdCwgdGlwcywgZmFsc2UsIEhhbmRsZXIuY3JlYXRlKHRoaXMuZWZmZWN0Q29tcGxldGUsIHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIFVJRWZmZWN0TWFuYWdlci5lZmZlY3QoZWZmZWN0LCB0aXBzLCBmYWxzZSwgbnVsbCk7Ly9IYW5kbGXlhYjkuI3kvKBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlVGlwcy5zZXRVSVBhcmVudCh0aGlzLnRpcExheWVyKTtcclxuICAgICAgICAgICAgYmFzZVRpcHMub25fU2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzID0gY2MubG9hZGVyLmdldFJlcyh1cmwsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICBjb21wbGV0ZUNiKG51bGwsIHJlcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5QcmVmYWIsIGNvbXBsZXRlQ2IpO1xyXG4gICAgfVxyXG4gICAgY2hlY2tUaXBzKHVOYW1lKSB7XHJcbiAgICAgICAgbGV0IHRpcExheWVyQ2hpbGQgPSB0aGlzLnRpcExheWVyLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlwTGF5ZXJDaGlsZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSB0aXBMYXllckNoaWxkW2ldO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIuZ2V0Q29tcG9uZW50KEJhc2VUaXBzKS5fdWlOYW1lID09IHVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBoaWRlVGlwcyhub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiYXNlVGlwcyA9IG5vZGUuZ2V0Q29tcG9uZW50KEJhc2VUaXBzKTtcclxuICAgICAgICBpZiAoYmFzZVRpcHMpIHtcclxuICAgICAgICAgICAgYmFzZVRpcHMuc3RhcnRIaWRlKCk7XHJcbiAgICAgICAgICAgIGlmIChiYXNlVGlwcy5fZWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBVSUVmZmVjdE1hbmFnZXIuZWZmZWN0KGJhc2VUaXBzLl9lZmZlY3QgKyBcImJhY2tcIiwgbm9kZSwgZmFsc2UsIEhhbmRsZXIuY3JlYXRlKCh0aXBzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGlwcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVRpcHMuX2hpZGVfKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVmZmVjdENvbXBsZXRlKHBhbmVsKSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocGFuZWwpKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXNlVUkgPSBwYW5lbC5nZXRDb21wb25lbnQoXCJCYXNlUGFuZWxcIik7XHJcbiAgICAgICAgICAgIGJhc2VVSS5vbl9TaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZWZmZWN0QmFja0NvbXBsZXRlKHBhbmVsKSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocGFuZWwpKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXNlVUkgPSBwYW5lbC5nZXRDb21wb25lbnQoJ0Jhc2VQYW5lbCcpO1xyXG4gICAgICAgICAgICBiYXNlVUkub25fSGlkZSgpO1xyXG4gICAgICAgICAgICBiYXNlVUkuX2hpZGVfKCk7XHJcbiAgICAgICAgICAgIC8vIGlmIChMb2FkZXJNYW5hZ2VyLmlzUmVsZWFzZShiYXNlVUkubW9kdWxlTmFtZSkpIHtcclxuICAgICAgICAgICAgLy8gICAgIExvYWRlck1hbmFnZXIucmVsZWFzZUJ5TW9kdWxlKGJhc2VVSS5tb2R1bGVOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIEdhbWVQb29sTWFuYWdlci5jbGVhckJ5VGFyZ2V0KCdVUGFuZWwtJyArIGJhc2VVSS51aU5hbWUpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCgnVVBhbmVsLScgKyBiYXNlVUkudWlOYW1lKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNTaG93KHBhdGgpIHtcclxuICAgICAgICBpZiAodGhpcy51aV9jYWNoZVtwYXRoXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VUlTdGF0ZUJ5TmFtZShuYW1lOiBzdHJpbmcsIGlzUmVtb3ZlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hY3RpdmVTdGF0ZUFyci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYWN0aXZlU3RhdGVBcnJbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gZWxlbWVudC51TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTdGF0ZUFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZUFsbE9wZW5QYW5lbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hY3RpdmVTdGF0ZUFyci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYWN0aXZlU3RhdGVBcnJbaW5kZXhdO1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWN0aXZlU3RhdGVBcnIubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUGFuZWxPcGVuKGRhdGEpIHtcclxuICAgICAgICBpZiAoISFkYXRhKSB7XHJcbiAgICAgICAgICAgIC8v5qOA5rWL6Z2i5p2/6IO95ZCm5aSa5byAXHJcbiAgICAgICAgICAgIGlmICghIWRhdGEuaXNNdXRsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5hY3RpdmVTdGF0ZUFyci5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hY3RpdmVTdGF0ZUFycltpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc0FjdGl2ZSAmJiBlbGVtZW50LnVOYW1lID09PSBkYXRhLnVuYW1lICYmIGVsZW1lbnQub3BlblN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflvpflj6/nlKjnmoR1aXN0YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VUlTdGF0ZShkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudWlTdGF0ZUFyci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudWlTdGF0ZUFycltpbmRleF07XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTdGF0ZUFyci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0YXRlOiBVSVN0YXRlID0gbmV3IFVJU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zZXREYXRhKGRhdGEpO1xyXG4gICAgICAgIHRoaXMudWlTdGF0ZUFyci5wdXNoKHN0YXRlKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVN0YXRlQXJyLnB1c2goc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVJTWFuYWdlci5pbnN0YW5jZSgpOyJdfQ==
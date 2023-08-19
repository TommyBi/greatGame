"use strict";
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
var UIManager = /** @class */ (function () {
    function UIManager() {
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
        this.uiLayer = new cc.Node('uiLayer');
        this.maskLayer = new cc.Node('maskLayer');
        this.tipLayer = new cc.Node('tipLayer');
        this.sceneLayer = new cc.Node('sceneLayer');
        var canvas = cc.director.getScene().getChildByName('Canvas');
        this.viewLayer.parent = canvas;
        this.sceneLayer.parent = canvas;
        this.maskLayer.parent = canvas;
        this.uiLayer.parent = canvas;
        this.tipLayer.parent = canvas;
        this.currentView = null; //当前的view
    };
    UIManager.prototype.setTop = function () {
        if (!this.top)
            return;
        if (!this.top.parent) {
            this.uiLayer.addChild(this.top);
            this.top.setPosition(0, cc.winSize.height / 2 - 110);
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
    UIManager.prototype.showPanel = function (pdata, effect) {
        var _this = this;
        if (effect === void 0) { effect = UIEffectManager_1.UIEffectType.SCALE; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        console.log("打开面板", JSON.stringify(pdata));
        var state = this.checkPanelOpen(pdata); //如果有已经打开，并且不是可以多开的
        if (state) {
            return;
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
                    baseUI._show_(args); //打开前需要执行的函数
                    baseUI.startShow();
                    baseUI.setUIState(state);
                }
                else {
                    cc.error("请给面板添加BaseUI的子类脚本");
                    return;
                }
                // this.ui_cache[pdata.uname] = panel;
                if (!!effect) {
                    UIEffectManager_1.default.effect(effect, panel, false, Handler_1.default.create(_this.effectComplete, _this));
                }
                else {
                    baseUI.on_Show(); //真正的打开
                }
                baseUI.setUIParent(_this.uiLayer);
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
            if (!!baseUI.effect) {
                //     UIEffectManager.effect(baseUI.effect + "back", baseUI.node, false, Handler.create(this.effectBackComplete, this));
                // } else {
                this.effectBackComplete(baseUI.node);
            }
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
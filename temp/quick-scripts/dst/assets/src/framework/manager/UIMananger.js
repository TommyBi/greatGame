
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMscURBQWdEO0FBQ2hELHFEQUFrRTtBQUNsRSx5Q0FBd0M7QUFDeEMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUl4QztJQUFBO1FBQ0UsYUFBYTtRQUNMLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBbUIsRUFBRSxDQUFDLENBQUEsVUFBVTtRQUMxQyxtQkFBYyxHQUFtQixFQUFFLENBQUMsQ0FBQSxjQUFjO1FBUW5ELGdCQUFXLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBdVR0RCxDQUFDO0lBclRRLGtCQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1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SSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFFZixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQXBVQSxBQW9VQyxJQUFBO0FBRUQsa0JBQWUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VWaWV3IGZyb20gXCIuLi91aS9CYXNlVmlld1wiO1xuaW1wb3J0IExvYWRlck1hbmFnZXIgZnJvbSBcIi4vTG9hZGVyTWFuYWdlclwiO1xuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IEdhbWVQb29sTWFuYWdlciBmcm9tIFwiLi9HYW1lUG9vbE1hbmFnZXJcIjtcbmltcG9ydCBVSUVmZmVjdE1hbmFnZXIsIHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4vVUlFZmZlY3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSVN0YXRlIH0gZnJvbSBcIi4uL3VpL1VJU3RhdGVcIjtcbmltcG9ydCBCYXNlVGlwcyBmcm9tIFwiLi4vdWkvQmFzZVRpcHNcIjtcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uL3VpL0Jhc2VQYW5lbFwiO1xuXG5cblxuY2xhc3MgVUlNYW5hZ2VyIHtcbiAgLy9yZXNEaWMg6LWE5rqQ6ZuG5ZCIXG4gIHByaXZhdGUgdWlfY2FjaGUgPSB7fTtcbiAgcHJpdmF0ZSB2aWV3X2NhY2hlID0ge307XG4gIHByaXZhdGUgdWlTdGF0ZUFycjogQXJyYXk8VUlTdGF0ZT4gPSBbXTsvL3Vp5omT5byA5YWz6Zet566h55CGXG4gIHByaXZhdGUgYWN0aXZlU3RhdGVBcnI6IEFycmF5PFVJU3RhdGU+ID0gW107Ly/lvZPliY3mv4DmtLvnmoR1aXN0YXRlXG4gIHB1YmxpYyB2aWV3TGF5ZXI6IGNjLk5vZGU7XG4gIHB1YmxpYyBtYXNrTGF5ZXI6IGNjLk5vZGU7XG4gIHB1YmxpYyB1aUxheWVyOiBjYy5Ob2RlO1xuICBwdWJsaWMgdGlwTGF5ZXI6IGNjLk5vZGU7XG4gIHB1YmxpYyBzY2VuZUxheWVyOiBjYy5Ob2RlO1xuICBwdWJsaWMgY3VycmVudFZpZXc6IEJhc2VWaWV3O1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFVJTWFuYWdlcjtcbiAgcHVibGljIGJhcnJhZ2VQb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuXG4gIHN0YXRpYyBpbnN0YW5jZSgpOiBVSU1hbmFnZXIge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFVJTWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMudmlld0xheWVyID0gbmV3IGNjLk5vZGUoJ3ZpZXdMYXllcicpO1xuICAgIHRoaXMudWlMYXllciA9IG5ldyBjYy5Ob2RlKCd1aUxheWVyJyk7XG4gICAgdGhpcy5tYXNrTGF5ZXIgPSBuZXcgY2MuTm9kZSgnbWFza0xheWVyJyk7XG4gICAgdGhpcy50aXBMYXllciA9IG5ldyBjYy5Ob2RlKCd0aXBMYXllcicpO1xuICAgIHRoaXMuc2NlbmVMYXllciA9IG5ldyBjYy5Ob2RlKCdzY2VuZUxheWVyJyk7XG4gICAgbGV0IGNhbnZhcyA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xuICAgIHRoaXMudmlld0xheWVyLnBhcmVudCA9IGNhbnZhcztcbiAgICB0aGlzLnNjZW5lTGF5ZXIucGFyZW50ID0gY2FudmFzO1xuICAgIHRoaXMubWFza0xheWVyLnBhcmVudCA9IGNhbnZhcztcbiAgICB0aGlzLnVpTGF5ZXIucGFyZW50ID0gY2FudmFzO1xuICAgIHRoaXMudGlwTGF5ZXIucGFyZW50ID0gY2FudmFzO1xuICAgIHRoaXMuY3VycmVudFZpZXcgPSBudWxsOy8v5b2T5YmN55qEdmlld1xuICB9XG4gIHRvcDogY2MuTm9kZTtcbiAgc2V0VG9wKCkge1xuICAgIGlmICghdGhpcy50b3ApIHJldHVybjtcbiAgICBpZiAoIXRoaXMudG9wLnBhcmVudCkge1xuICAgICAgdGhpcy51aUxheWVyLmFkZENoaWxkKHRoaXMudG9wKVxuICAgICAgdGhpcy50b3Auc2V0UG9zaXRpb24oMCwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC0gMTEwKTtcbiAgICB9XG4gIH1cblxuICAvL+aYvuekunZpZXdcbiAgLy9wZGF0YSBVSVR5cGXkuK3nmoRrZXlcbiAgc2hvd1ZpZXcocGRhdGEsIC4uLmFyZ3MpIHtcbiAgICBpZiAoISFwZGF0YSkge1xuICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Vmlldykge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Vmlldy51aU5hbWUgPT09IHBkYXRhLnVuYW1lKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5vbl9TaG93KGFyZ3MpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBMb2FkZXJNYW5hZ2VyLmxvYWRlclByZWZhYihwZGF0YS51bmFtZSwgSGFuZGxlci5jcmVhdGUoKHJlcykgPT4ge1xuICAgICAgICBpZiAoISFyZXMpIHtcbiAgICAgICAgICByZXMgPSBHYW1lUG9vbE1hbmFnZXIuaW5zdGFuY2UocmVzLCAnVVZpZXctJyArIHBkYXRhLnVuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnRWaWV3KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUFsbE9wZW5QYW5lbCgpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFzZVZpZXcgPSByZXMuZ2V0Q29tcG9uZW50KFwiQmFzZVZpZXdcIik7XG5cbiAgICAgICAgdGhpcy52aWV3X2NhY2hlW3BkYXRhLnVuYW1lXSA9IHJlcztcbiAgICAgICAgaWYgKGJhc2VWaWV3KSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IGJhc2VWaWV3O1xuICAgICAgICAgIGJhc2VWaWV3LnNldFVJTmFtZShwZGF0YS51bmFtZSk7XG4gICAgICAgICAgYmFzZVZpZXcuc2V0TW9kdWxlTmFtZShwZGF0YS5tbmFtZSk7XG4gICAgICAgICAgYmFzZVZpZXcuX3Nob3dfKCk7XG4gICAgICAgICAgYmFzZVZpZXcub25fU2hvdyhhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjYy5lcnJvcihcIuivt+e7memdouadv+a3u+WKoEJhc2VWaWV355qE5a2Q57G76ISa5pysXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlcy5wYXJlbnQgPSB0aGlzLnZpZXdMYXllcjtcbiAgICAgICAgdGhpcy52aWV3TGF5ZXIuYWRkQ2hpbGQocmVzKTtcbiAgICAgICAgcmVzLnggPSAwO1xuICAgICAgICByZXMueSA9IDA7XG4gICAgICB9LCB0aGlzKSwgcGRhdGEubW5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYy5sb2coJ+WItuWumuaJk+W8gOeahOiEmuacrOS4jeWtmOWcqCcpO1xuICAgIH1cblxuICB9XG5cbiAgaGlkZVZpZXcobmFtZSkge1xuICAgIGxldCBiYXNlVUkgPSB0aGlzLnZpZXdfY2FjaGVbbmFtZV0uZ2V0Q29tcG9uZW50KFwiQmFzZVZpZXdcIik7XG4gICAgYmFzZVVJLl9oaWRlXygpO1xuICAgIGJhc2VVSS5vbl9IaWRlKCk7XG4gICAgaWYgKExvYWRlck1hbmFnZXIuaXNSZWxlYXNlKGJhc2VVSS5tb2R1bGVOYW1lKSkge1xuICAgICAgTG9hZGVyTWFuYWdlci5yZWxlYXNlQnlNb2R1bGUoYmFzZVVJLm1vZHVsZU5hbWUpO1xuICAgICAgR2FtZVBvb2xNYW5hZ2VyLmNsZWFyQnlUYXJnZXQoJ1VWaWV3LScgKyBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCgnVVZpZXctJyArIG5hbWUpO1xuICAgIH1cbiAgICB0aGlzLnZpZXdfY2FjaGVbbmFtZV0gPSBudWxsO1xuICB9XG5cbiAgc2hvd1BhbmVsKHBkYXRhLCBlZmZlY3QgPSBVSUVmZmVjdFR5cGUuU0NBTEUsIC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIuaJk+W8gOmdouadv1wiLCBKU09OLnN0cmluZ2lmeShwZGF0YSkpO1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuY2hlY2tQYW5lbE9wZW4ocGRhdGEpOy8v5aaC5p6c5pyJ5bey57uP5omT5byA77yM5bm25LiU5LiN5piv5Y+v5Lul5aSa5byA55qEXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBuZXdTYXRlID0gdGhpcy5nZXRVSVN0YXRlKHBkYXRhKTtcbiAgICBMb2FkZXJNYW5hZ2VyLmxvYWRlclByZWZhYihwZGF0YS51bmFtZSwgSGFuZGxlci5jcmVhdGUoKHJlcywgdXJsLCBzdGF0ZSkgPT4ge1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBsZXQgcGFuZWwgPSBHYW1lUG9vbE1hbmFnZXIuaW5zdGFuY2UocmVzLCAnVVBhbmVsLScgKyBwZGF0YS51bmFtZSk7XG4gICAgICAgIGxldCBiYXNlVUkgPSBwYW5lbC5nZXRDb21wb25lbnQoXCJCYXNlUGFuZWxcIik7XG4gICAgICAgIGlmICghIWJhc2VVSSkge1xuICAgICAgICAgIGJhc2VVSS5pbml0KHBkYXRhLmNsaWNrQ2xvc2UpO1xuICAgICAgICAgIGJhc2VVSS5zZXRVSU5hbWUocGRhdGEudW5hbWUpO1xuICAgICAgICAgIGJhc2VVSS5zZXRNb2R1bGVOYW1lKHBkYXRhLm1uYW1lKTtcbiAgICAgICAgICBiYXNlVUkuc2V0RWZmZWN0KGVmZmVjdCk7XG4gICAgICAgICAgYmFzZVVJLl9zaG93XyhhcmdzKTsvL+aJk+W8gOWJjemcgOimgeaJp+ihjOeahOWHveaVsFxuICAgICAgICAgIGJhc2VVSS5zdGFydFNob3coKTtcbiAgICAgICAgICBiYXNlVUkuc2V0VUlTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2MuZXJyb3IoXCLor7fnu5npnaLmnb/mt7vliqBCYXNlVUnnmoTlrZDnsbvohJrmnKxcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMudWlfY2FjaGVbcGRhdGEudW5hbWVdID0gcGFuZWw7XG4gICAgICAgIGlmICghIWVmZmVjdCkge1xuICAgICAgICAgIFVJRWZmZWN0TWFuYWdlci5lZmZlY3QoZWZmZWN0LCBwYW5lbCwgZmFsc2UsIEhhbmRsZXIuY3JlYXRlKHRoaXMuZWZmZWN0Q29tcGxldGUsIHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiYXNlVUkub25fU2hvdygpOy8v55yf5q2j55qE5omT5byAXG4gICAgICAgIH1cbiAgICAgICAgYmFzZVVJLnNldFVJUGFyZW50KHRoaXMudWlMYXllcik7XG4gICAgICB9XG5cbiAgICB9LCB0aGlzLCB0cnVlLCBuZXdTYXRlKSwgcGRhdGEubW5hbWUpO1xuICB9XG4gIGNoZWNrUGFuZWwocGFuZWxOYW1lKSB7XG4gICAgbGV0IHVpTGF5ZXJDaGlsZCA9IHRoaXMudWlMYXllci5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpTGF5ZXJDaGlsZC5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IGxheWVyID0gdWlMYXllckNoaWxkW2ldO1xuICAgICAgaWYgKCFsYXllci5nZXRDb21wb25lbnQoQmFzZVBhbmVsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXllci5nZXRDb21wb25lbnQoQmFzZVBhbmVsKS51aU5hbWUgPT0gcGFuZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog6YCa6L+HdWnlkI3np7DpmpDol49cbiAgICogQHBhcmFtIG5hbWUgdWnlkI3np7BcbiAgICovXG4gIGhpZGVQYW5lbChuYW1lOiBhbnkpIHtcbiAgICBsZXQgdW5hbWUgPSAnJztcbiAgICBpZiAodHlwZW9mIChuYW1lKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuYW1lID0gbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5hbWUgPSBuYW1lLnVuYW1lO1xuICAgIH1cbiAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFVJU3RhdGVCeU5hbWUodW5hbWUsIHRydWUpO1xuICAgIGlmICghIXN0YXRlKSB7XG4gICAgICBsZXQgYmFzZVVJID0gc3RhdGUudWk7XG4gICAgICBiYXNlVUkuc3RhcnRIaWRlKCk7XG4gICAgICBpZiAoISFiYXNlVUkuZWZmZWN0KSB7XG4gICAgICAgIC8vICAgICBVSUVmZmVjdE1hbmFnZXIuZWZmZWN0KGJhc2VVSS5lZmZlY3QgKyBcImJhY2tcIiwgYmFzZVVJLm5vZGUsIGZhbHNlLCBIYW5kbGVyLmNyZWF0ZSh0aGlzLmVmZmVjdEJhY2tDb21wbGV0ZSwgdGhpcykpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVmZmVjdEJhY2tDb21wbGV0ZShiYXNlVUkubm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzaG93VGlwcyhwZGF0YSwgZWZmZWN0ID0gVUlFZmZlY3RUeXBlLlNDQUxFLCAuLi5hcmdzKSB7XG4gICAgbGV0IHVybCA9IFwicHJlZmFiL1wiICsgcGRhdGEubW5hbWUgKyBcIi9cIiArIHBkYXRhLnVuYW1lO1xuICAgIGxldCBjb21wbGV0ZUNiID0gKGVyciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNjLmVycm9yKCfotYTmupDliqDovb3lpLHotKUtLScgKyB1cmwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgdGlwczogY2MuTm9kZSA9IEdhbWVQb29sTWFuYWdlci5pbnN0YW5jZShyZXMsICdVSVRpcHMtJyArIHBkYXRhLnVuYW1lKTtcbiAgICAgIGxldCBiYXNlVGlwcyA9IHRpcHMuZ2V0Q29tcG9uZW50KEJhc2VUaXBzKTtcbiAgICAgIGlmIChiYXNlVGlwcykge1xuICAgICAgICBiYXNlVGlwcy5zZXRVSU5hbWUocGRhdGEudW5hbWUpO1xuICAgICAgICBiYXNlVGlwcy5fc2hvd18oYXJncyk7XG4gICAgICAgIGJhc2VUaXBzLnNldERlbGF5UmVtb3ZlKHBkYXRhLmRlbGF5UmVtb3ZlKTtcbiAgICAgICAgYmFzZVRpcHMuc2V0RWZmZWN0KGVmZmVjdCk7XG4gICAgICAgIGJhc2VUaXBzLnN0YXJ0U2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2MuZXJyb3IoYOivt+e7mSR7cGRhdGEudW5hbWV95re75YqgQmFzZVRpcHPnmoTlrZDnsbvohJrmnKxgKTtcbiAgICAgIH1cbiAgICAgIGlmIChlZmZlY3QpIHtcbiAgICAgICAgLy8gVUlFZmZlY3RNYW5hZ2VyLmVmZmVjdChlZmZlY3QsIHRpcHMsIGZhbHNlLCBIYW5kbGVyLmNyZWF0ZSh0aGlzLmVmZmVjdENvbXBsZXRlLCB0aGlzKSk7XG4gICAgICAgIFVJRWZmZWN0TWFuYWdlci5lZmZlY3QoZWZmZWN0LCB0aXBzLCBmYWxzZSwgbnVsbCk7Ly9IYW5kbGXlhYjkuI3kvKBcbiAgICAgIH1cbiAgICAgIGJhc2VUaXBzLnNldFVJUGFyZW50KHRoaXMudGlwTGF5ZXIpO1xuICAgICAgYmFzZVRpcHMub25fU2hvdygpO1xuICAgIH1cbiAgICBsZXQgcmVzID0gY2MubG9hZGVyLmdldFJlcyh1cmwsIGNjLlByZWZhYik7XG4gICAgaWYgKHJlcykge1xuICAgICAgY29tcGxldGVDYihudWxsLCByZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGNjLlByZWZhYiwgY29tcGxldGVDYik7XG4gIH1cbiAgY2hlY2tUaXBzKHVOYW1lKSB7XG4gICAgbGV0IHRpcExheWVyQ2hpbGQgPSB0aGlzLnRpcExheWVyLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlwTGF5ZXJDaGlsZC5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IGxheWVyID0gdGlwTGF5ZXJDaGlsZFtpXTtcbiAgICAgIGlmIChsYXllci5nZXRDb21wb25lbnQoQmFzZVRpcHMpLl91aU5hbWUgPT0gdU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBoaWRlVGlwcyhub2RlOiBjYy5Ob2RlKSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGJhc2VUaXBzID0gbm9kZS5nZXRDb21wb25lbnQoQmFzZVRpcHMpO1xuICAgIGlmIChiYXNlVGlwcykge1xuICAgICAgYmFzZVRpcHMuc3RhcnRIaWRlKCk7XG4gICAgICBpZiAoYmFzZVRpcHMuX2VmZmVjdCkge1xuICAgICAgICBVSUVmZmVjdE1hbmFnZXIuZWZmZWN0KGJhc2VUaXBzLl9lZmZlY3QgKyBcImJhY2tcIiwgbm9kZSwgZmFsc2UsIEhhbmRsZXIuY3JlYXRlKCh0aXBzKSA9PiB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGlwcykpIHtcbiAgICAgICAgICAgIGJhc2VUaXBzLl9oaWRlXygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVmZmVjdENvbXBsZXRlKHBhbmVsKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQocGFuZWwpKSB7XG4gICAgICBsZXQgYmFzZVVJID0gcGFuZWwuZ2V0Q29tcG9uZW50KFwiQmFzZVBhbmVsXCIpO1xuICAgICAgYmFzZVVJLm9uX1Nob3coKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVmZmVjdEJhY2tDb21wbGV0ZShwYW5lbCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHBhbmVsKSkge1xuICAgICAgbGV0IGJhc2VVSSA9IHBhbmVsLmdldENvbXBvbmVudCgnQmFzZVBhbmVsJyk7XG4gICAgICBiYXNlVUkub25fSGlkZSgpO1xuICAgICAgYmFzZVVJLl9oaWRlXygpO1xuICAgICAgLy8gaWYgKExvYWRlck1hbmFnZXIuaXNSZWxlYXNlKGJhc2VVSS5tb2R1bGVOYW1lKSkge1xuICAgICAgLy8gICAgIExvYWRlck1hbmFnZXIucmVsZWFzZUJ5TW9kdWxlKGJhc2VVSS5tb2R1bGVOYW1lKTtcbiAgICAgIC8vICAgICBHYW1lUG9vbE1hbmFnZXIuY2xlYXJCeVRhcmdldCgnVVBhbmVsLScgKyBiYXNlVUkudWlOYW1lKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCgnVVBhbmVsLScgKyBiYXNlVUkudWlOYW1lKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cblxuXG4gIGlzU2hvdyhwYXRoKSB7XG4gICAgaWYgKHRoaXMudWlfY2FjaGVbcGF0aF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGdldFVJU3RhdGVCeU5hbWUobmFtZTogc3RyaW5nLCBpc1JlbW92ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuYWN0aXZlU3RhdGVBcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hY3RpdmVTdGF0ZUFycltpbmRleF07XG4gICAgICBpZiAobmFtZSA9PT0gZWxlbWVudC51TmFtZSkge1xuICAgICAgICBpZiAoaXNSZW1vdmUpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVN0YXRlQXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUFsbE9wZW5QYW5lbCgpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hY3RpdmVTdGF0ZUFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmFjdGl2ZVN0YXRlQXJyW2luZGV4XTtcbiAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVTdGF0ZUFyci5sZW5ndGggPSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1BhbmVsT3BlbihkYXRhKSB7XG4gICAgaWYgKCEhZGF0YSkge1xuICAgICAgLy/mo4DmtYvpnaLmnb/og73lkKblpJrlvIBcbiAgICAgIGlmICghIWRhdGEuaXNNdXRsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLmFjdGl2ZVN0YXRlQXJyLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYWN0aXZlU3RhdGVBcnJbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudC5pc0FjdGl2ZSAmJiBlbGVtZW50LnVOYW1lID09PSBkYXRhLnVuYW1lICYmIGVsZW1lbnQub3BlblN0YXRlID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIOiOt+W+l+WPr+eUqOeahHVpc3RhdGVcbiAgICovXG4gIHByaXZhdGUgZ2V0VUlTdGF0ZShkYXRhKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudWlTdGF0ZUFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnVpU3RhdGVBcnJbaW5kZXhdO1xuICAgICAgaWYgKCFlbGVtZW50LmlzQWN0aXZlKSB7XG4gICAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgZWxlbWVudC5zZXREYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0YXRlQXJyLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RhdGU6IFVJU3RhdGUgPSBuZXcgVUlTdGF0ZSgpO1xuICAgIHN0YXRlLnNldERhdGEoZGF0YSk7XG4gICAgdGhpcy51aVN0YXRlQXJyLnB1c2goc3RhdGUpO1xuICAgIHRoaXMuYWN0aXZlU3RhdGVBcnIucHVzaChzdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUlNYW5hZ2VyLmluc3RhbmNlKCk7Il19
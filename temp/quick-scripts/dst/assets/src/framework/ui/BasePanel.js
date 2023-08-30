
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/BasePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.closeBack = null;
        _this.isVideoClose = false;
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
    BasePanel.prototype._show_ = function (closeBack, args) {
        this.inData = args;
        this.closeBack = closeBack;
        this.upDateState(UIState_1.StateType.opening);
    };
    /**
     * 是否能立即关闭，主要用于有些面板不能立马关闭，需要等条件完成才能，例如转盘
     */
    BasePanel.prototype.canHideNow = function () {
        return true;
    };
    BasePanel.prototype.startHide = function () {
        // if (this.isVideoClose) SDKManager.reportTrigger();
    };
    BasePanel.prototype.startShow = function () {
    };
    BasePanel.prototype._hide_ = function () {
        // if (LoaderManager.isRelease(this.moduleName)) {
        //     this.node.destroy();
        //     GamePoolManager.clearByTarget(this); 
        //     this._destroyClear(); 
        // } else {
        //     GamePoolManager.putBackByTarget(this);
        //     if (!!this.node.parent) {
        //         this.node.removeFromParent(false);
        //     }
        //     this._closeClear();
        // }
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
        if (this.closeBack)
            this.closeBack();
        EventDispath_1.default.removeEventListeners(this);
        UIMananger_1.default.hidePanel(this.uiName);
    };
    BasePanel.prototype.close1 = function () {
        this.closeBack = null;
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
            this.modelUI.opacity = 170;
            // this.modelUI.runAction(cc.fadeTo(0.2, 170));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQsMkNBQXNDO0FBQ3RDLDBEQUFxRDtBQUVyRCxvREFBK0M7QUFDL0MscUNBQStDO0FBQy9DLHdEQUFtRDtBQUc3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTRMQztRQTFMVSxZQUFNLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLHdDQUF3QztRQUNqQyxhQUFPLEdBQVcsS0FBSyxDQUFDLENBQUEsZUFBZTtRQUN0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFlBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFLeEMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUMzQixrQkFBWSxHQUFHLEtBQUssQ0FBQzs7SUErS3pCLENBQUM7SUE5S0csd0JBQUksR0FBSixVQUFLLFVBQVU7UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLEtBQUs7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFjLEtBQUs7UUFDZixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFV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Q0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBMUxnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNEw3QjtJQUFELGdCQUFDO0NBNUxELEFBNExDLENBNUxzQyxFQUFFLENBQUMsU0FBUyxHQTRMbEQ7a0JBNUxvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vdG9vbHMvQ29tcG9uZW50SGVscGVyXCI7XHJcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi9iYXNlL0hhbmRsZXJcIjtcclxuaW1wb3J0IExvYWRlck1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvTG9hZGVyTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZVBvb2xNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0dhbWVQb29sTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCB7IFVJU3RhdGUsIFN0YXRlVHlwZSB9IGZyb20gXCIuL1VJU3RhdGVcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHVpTmFtZTogc3RyaW5nID0gXCJiYXNlUGFuZWxcIjtcclxuICAgIC8v54K55Ye76Z2i5p2/5YW25LuW5L2N572u5piv5ZCm5YWz5LiN6Z2i5p2/IOmcgOimgeWcqHByZWZhYuS4reiuvue9rm5vZGXnmoRzaXpl5aSn5bCPXHJcbiAgICBwdWJsaWMgbWFza1VSTDogc3RyaW5nID0gXCJtYmdcIjsvL+i1hOa6kOaUvuWcqGNvbW1vbuaooeWdl+S4rVxyXG4gICAgcHJpdmF0ZSBfaXNtYXNrOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBlZmZlY3Q6IGFueSA9IG51bGw7XHJcbiAgICBwdWJsaWMgY2xpY2tPdGhlckNsb3NlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgbW9kdWxlTmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGluRGF0YTogYW55O1xyXG4gICAgcHJpdmF0ZSBtb2RlbFVJOiBjYy5Ob2RlOy8v6IOM5pmvXHJcbiAgICBwcml2YXRlIHVpU3RhdGU6IFVJU3RhdGU7XHJcbiAgICBjbG9zZUJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcclxuICAgIGlzVmlkZW9DbG9zZSA9IGZhbHNlO1xyXG4gICAgaW5pdChjbGlja0Nsb3NlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzbWFzaykge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0TW9kdWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xpY2tPdGhlckNsb3NlID0gY2xpY2tDbG9zZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVSU5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMudWlOYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb2R1bGVOYW1lKG1uYW1lKSB7XHJcbiAgICAgICAgdGhpcy5tb2R1bGVOYW1lID0gbW5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2xpY2tDbG9zZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tPdGhlckNsb3NlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWZmZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3QgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rnVp54q25oCBXHJcbiAgICAgKi9cclxuICAgIHNldFVJU3RhdGUoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnVpU3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLnVpU3RhdGUudWkgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHVwRGF0ZVN0YXRlKHN0YXRlOiBTdGF0ZVR5cGUpIHtcclxuICAgICAgICBpZiAoISF0aGlzLnVpU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy51aVN0YXRlLm9wZW5TdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IFN0YXRlVHlwZS5jbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/miZPlvIDpnaLmnb/liY0g5YWI5omn6KGM55qE5Ye95pWwXHJcbiAgICBfc2hvd18oY2xvc2VCYWNrLCBhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5pbkRhdGEgPSBhcmdzO1xyXG4gICAgICAgIHRoaXMuY2xvc2VCYWNrID0gY2xvc2VCYWNrO1xyXG4gICAgICAgIHRoaXMudXBEYXRlU3RhdGUoU3RhdGVUeXBlLm9wZW5pbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6IO956uL5Y2z5YWz6Zet77yM5Li76KaB55So5LqO5pyJ5Lqb6Z2i5p2/5LiN6IO956uL6ams5YWz6Zet77yM6ZyA6KaB562J5p2h5Lu25a6M5oiQ5omN6IO977yM5L6L5aaC6L2s55uYXHJcbiAgICAgKi9cclxuICAgIGNhbkhpZGVOb3coKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRIaWRlKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmlzVmlkZW9DbG9zZSkgU0RLTWFuYWdlci5yZXBvcnRUcmlnZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBfaGlkZV8oKSB7XHJcbiAgICAgICAgLy8gaWYgKExvYWRlck1hbmFnZXIuaXNSZWxlYXNlKHRoaXMubW9kdWxlTmFtZSkpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgR2FtZVBvb2xNYW5hZ2VyLmNsZWFyQnlUYXJnZXQodGhpcyk7IFxyXG4gICAgICAgIC8vICAgICB0aGlzLl9kZXN0cm95Q2xlYXIoKTsgXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCh0aGlzKTtcclxuICAgICAgICAvLyAgICAgaWYgKCEhdGhpcy5ub2RlLnBhcmVudCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX2Nsb3NlQ2xlYXIoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5faGlkZU1vZGV1bGUoKTtcclxuICAgICAgICB0aGlzLnVwRGF0ZVN0YXRlKFN0YXRlVHlwZS5jbG9zZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WFs+aXtua4heeQhlxyXG4gICAgcHJpdmF0ZSBfY2xvc2VDbGVhcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/plIDmr4Hml7bmuIXnkIZcclxuICAgIHByaXZhdGUgX2Rlc3Ryb3lDbGVhcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/orr7nva51aeeahOeItuWuueWZqFxyXG4gICAgc2V0VUlQYXJlbnQocGFyZW50KSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocGFyZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOaXtuiwg+eUqFxyXG4gICAgb25fU2hvdyhhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvd01vZHVsZUFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMudXBEYXRlU3RhdGUoU3RhdGVUeXBlLm9wZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uX0hpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5faGlkZU1vZGV1bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jbG9zZUJhY2spIHRoaXMuY2xvc2VCYWNrKCk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuaGlkZVBhbmVsKHRoaXMudWlOYW1lKTtcclxuICAgIH1cclxuICAgIGNsb3NlMSgpIHtcclxuICAgICAgICB0aGlzLmNsb3NlQmFjayA9IG51bGw7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuaGlkZVBhbmVsKHRoaXMudWlOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIneWni+WMluaooeaAgVxyXG4gICAgcHJpdmF0ZSBfaW5pdE1vZHVsZSgpIHtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5tb2RlbFVJKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkgPSBDb21wb25lbnRIZWxwZXIuY3JlYXRlU3ByaXRlKG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICBMb2FkZXJNYW5hZ2VyLmxvYWRlclNwcml0ZUZyYW1lKHRoaXMubWFza1VSTCwgSGFuZGxlci5jcmVhdGUodGhpcy5fbW9kdWxlQ29tcGxldGUsIHRoaXMpLCAnY29tbW9uUmVzJyk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnNldFNpYmxpbmdJbmRleCgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21vZHVsZUNvbXBsZXRlKHJlcykge1xyXG4gICAgICAgIGxldCBzcHJpdGU6IGNjLlNwcml0ZSA9IENvbXBvbmVudEhlbHBlci5zcHJpdGVGcmFtZSh0aGlzLm1vZGVsVUksIHJlcyk7XHJcbiAgICAgICAgc3ByaXRlLnRyaW0gPSBmYWxzZTtcclxuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIGxldCBtc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICB0aGlzLm1vZGVsVUkud2lkdGggPSBtc2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLm1vZGVsVUkuaGVpZ2h0ID0gbXNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX2NsaWNrQ2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aooeaAgeaViOaenFxyXG4gICAgcHJpdmF0ZSBfc2hvd01vZHVsZUFjdGlvbigpIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1vZGVsVUkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkub3BhY2l0eSA9IDE3MDtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb2RlbFVJLnJ1bkFjdGlvbihjYy5mYWRlVG8oMC4yLCAxNzApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGlkZU1vZGV1bGUoKSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5tb2RlbFVJKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+eCueWHu+epuueZveWMuuWfn+WFs+mXrVxyXG4gICAgX2NsaWNrQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbFVJLm9uKCd0b3VjaGVuZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tPdGhlckNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpY2tQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpc2libGVTaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tQb3MueCA9IGNsaWNrUG9zLnggLSB2aXNpYmxlU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjbGlja1Bvcy55ID0gY2xpY2tQb3MueSAtIHZpc2libGVTaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZWN0LmNvbnRhaW5zKGNsaWNrUG9zKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
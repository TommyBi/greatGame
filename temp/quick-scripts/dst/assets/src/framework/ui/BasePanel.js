
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQsMkNBQXNDO0FBQ3RDLDBEQUFxRDtBQUVyRCxvREFBK0M7QUFDL0MscUNBQStDO0FBQy9DLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXdLQztRQXRLVSxZQUFNLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLHdDQUF3QztRQUNqQyxhQUFPLEdBQVcsS0FBSyxDQUFDLENBQUEsZUFBZTtRQUN0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFlBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIscUJBQWUsR0FBWSxLQUFLLENBQUM7O0lBaUs1QyxDQUFDO0lBNUpHLHdCQUFJLEdBQUosVUFBSyxVQUFVO1FBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVELDZCQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJ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TyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBQzlCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixJQUFJLEtBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3RCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2pELElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMxQixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2hCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0S2dCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3SzdCO0lBQUQsZ0JBQUM7Q0F4S0QsQUF3S0MsQ0F4S3NDLEVBQUUsQ0FBQyxTQUFTLEdBd0tsRDtrQkF4S29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi90b29scy9Db21wb25lbnRIZWxwZXJcIjtcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi9iYXNlL0hhbmRsZXJcIjtcbmltcG9ydCBMb2FkZXJNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0xvYWRlck1hbmFnZXJcIjtcbmltcG9ydCBHYW1lUG9vbE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvR2FtZVBvb2xNYW5hZ2VyXCI7XG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vbWFuYWdlci9VSU1hbmFuZ2VyXCI7XG5pbXBvcnQgeyBVSVN0YXRlLCBTdGF0ZVR5cGUgfSBmcm9tIFwiLi9VSVN0YXRlXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyB1aU5hbWU6IHN0cmluZyA9IFwiYmFzZVBhbmVsXCI7XG4gICAgLy/ngrnlh7vpnaLmnb/lhbbku5bkvY3nva7mmK/lkKblhbPkuI3pnaLmnb8g6ZyA6KaB5ZyocHJlZmFi5Lit6K6+572ubm9kZeeahHNpemXlpKflsI9cbiAgICBwdWJsaWMgbWFza1VSTDogc3RyaW5nID0gXCJtYmdcIjsvL+i1hOa6kOaUvuWcqGNvbW1vbuaooeWdl+S4rVxuICAgIHByaXZhdGUgX2lzbWFzazogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGVmZmVjdDogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgY2xpY2tPdGhlckNsb3NlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIG1vZHVsZU5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgaW5EYXRhOiBhbnk7XG4gICAgcHJpdmF0ZSBtb2RlbFVJOiBjYy5Ob2RlOy8v6IOM5pmvXG4gICAgcHJpdmF0ZSB1aVN0YXRlOiBVSVN0YXRlO1xuICAgIGluaXQoY2xpY2tDbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5faXNtYXNrKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0TW9kdWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGlja090aGVyQ2xvc2UgPSBjbGlja0Nsb3NlO1xuICAgIH1cblxuICAgIHNldFVJTmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMudWlOYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXRNb2R1bGVOYW1lKG1uYW1lKSB7XG4gICAgICAgIHRoaXMubW9kdWxlTmFtZSA9IG1uYW1lO1xuICAgIH1cblxuICAgIHNldENsaWNrQ2xvc2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGlja090aGVyQ2xvc2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRFZmZlY3QodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lZmZlY3QgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva51aeeKtuaAgVxuICAgICAqL1xuICAgIHNldFVJU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy51aVN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMudWlTdGF0ZS51aSA9IHRoaXM7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHVwRGF0ZVN0YXRlKHN0YXRlOiBTdGF0ZVR5cGUpIHtcbiAgICAgICAgaWYgKCEhdGhpcy51aVN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVpU3RhdGUub3BlblN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IFN0YXRlVHlwZS5jbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlTdGF0ZS5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/miZPlvIDpnaLmnb/liY0g5YWI5omn6KGM55qE5Ye95pWwXG4gICAgX3Nob3dfKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5pbkRhdGEgPSBhcmdzO1xuICAgICAgICB0aGlzLnVwRGF0ZVN0YXRlKFN0YXRlVHlwZS5vcGVuaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbog73nq4vljbPlhbPpl63vvIzkuLvopoHnlKjkuo7mnInkupvpnaLmnb/kuI3og73nq4vpqazlhbPpl63vvIzpnIDopoHnrYnmnaHku7blrozmiJDmiY3og73vvIzkvovlpoLovaznm5hcbiAgICAgKi9cbiAgICBjYW5IaWRlTm93KCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydEhpZGUoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydFNob3coKSB7XG5cbiAgICB9XG5cbiAgICBfaGlkZV8oKSB7XG4gICAgICAgIHRoaXMuX2hpZGVNb2RldWxlKCk7XG4gICAgICAgIHRoaXMudXBEYXRlU3RhdGUoU3RhdGVUeXBlLmNsb3NlKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvL+WFs+aXtua4heeQhlxuICAgIHByaXZhdGUgX2Nsb3NlQ2xlYXIoKSB7XG5cbiAgICB9XG5cbiAgICAvL+mUgOavgeaXtua4heeQhlxuICAgIHByaXZhdGUgX2Rlc3Ryb3lDbGVhcigpIHtcblxuICAgIH1cblxuICAgIC8v6K6+572udWnnmoTniLblrrnlmahcbiAgICBzZXRVSVBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocGFyZW50KSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byA5pe26LCD55SoXG4gICAgb25fU2hvdyhhcmdzKSB7XG4gICAgICAgIHRoaXMuX3Nob3dNb2R1bGVBY3Rpb24oKTtcbiAgICAgICAgdGhpcy51cERhdGVTdGF0ZShTdGF0ZVR5cGUub3Blbik7XG4gICAgfVxuXG4gICAgb25fSGlkZSgpIHtcbiAgICAgICAgdGhpcy5faGlkZU1vZGV1bGUoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICBVSU1hbmFuZ2VyLmhpZGVQYW5lbCh0aGlzLnVpTmFtZSk7XG4gICAgfVxuXG4gICAgLy/liJ3lp4vljJbmqKHmgIFcbiAgICBwcml2YXRlIF9pbml0TW9kdWxlKCkge1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5tb2RlbFVJKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJID0gQ29tcG9uZW50SGVscGVyLmNyZWF0ZVNwcml0ZShudWxsLCBudWxsKTtcbiAgICAgICAgICAgIExvYWRlck1hbmFnZXIubG9hZGVyU3ByaXRlRnJhbWUodGhpcy5tYXNrVVJMLCBIYW5kbGVyLmNyZWF0ZSh0aGlzLl9tb2R1bGVDb21wbGV0ZSwgdGhpcyksICdjb21tb25SZXMnKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbW9kdWxlQ29tcGxldGUocmVzKSB7XG4gICAgICAgIGxldCBzcHJpdGU6IGNjLlNwcml0ZSA9IENvbXBvbmVudEhlbHBlci5zcHJpdGVGcmFtZSh0aGlzLm1vZGVsVUksIHJlcyk7XG4gICAgICAgIHNwcml0ZS50cmltID0gZmFsc2U7XG4gICAgICAgIHNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgIGxldCBtc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgdGhpcy5tb2RlbFVJLndpZHRoID0gbXNpemUud2lkdGg7XG4gICAgICAgIHRoaXMubW9kZWxVSS5oZWlnaHQgPSBtc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NsaWNrQ2xvc2UoKTtcbiAgICB9XG5cbiAgICAvL+aooeaAgeaViOaenFxuICAgIHByaXZhdGUgX3Nob3dNb2R1bGVBY3Rpb24oKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubW9kZWxVSSkpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnJ1bkFjdGlvbihjYy5mYWRlVG8oMC4yLCAxNTApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZGVNb2RldWxlKCkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1vZGVsVUkpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v54K55Ye756m655m95Yy65Z+f5YWz6ZetXG4gICAgX2NsaWNrQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMubW9kZWxVSS5vbigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tPdGhlckNsb3NlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICBsZXQgdmlzaWJsZVNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgICAgICAgICAgY2xpY2tQb3MueCA9IGNsaWNrUG9zLnggLSB2aXNpYmxlU2l6ZS53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgY2xpY2tQb3MueSA9IGNsaWNrUG9zLnkgLSB2aXNpYmxlU2l6ZS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIGxldCByZWN0ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWN0LmNvbnRhaW5zKGNsaWNrUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==
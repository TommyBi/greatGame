
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/BaseView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCw4REFBeUQ7QUFDekQsb0RBQStDO0FBQy9DLDJDQUFzQztBQUN0QyxrREFBNkM7QUFFdkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFNOUM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7SUFDekIsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxHQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBYSxHQUFiLFVBQWMsS0FBWTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsTUFBTTtJQUNOLHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUksdUJBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIseUJBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCx5QkFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxNQUFNO0lBQ04sOEJBQVcsR0FBWDtJQUVBLENBQUM7SUFFRCxPQUFPO0lBQ1AsZ0NBQWEsR0FBYjtJQUVBLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBSTtJQUVaLENBQUM7SUFFRCwwQkFBTyxHQUFQO0lBRUEsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFFSSxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixpQkFBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBbEVnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUU1QjtJQUFELGVBQUM7Q0FuRUQsQUFtRUMsQ0FuRXFDLEVBQUUsQ0FBQyxTQUFTLEdBbUVqRDtrQkFuRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGVyTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lUG9vbE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvR2FtZVBvb2xNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xyXG5pbXBvcnQgTlJlc3BvbmVyIGZyb20gXCIuLi9tZXNzYWdlL05SZXNwb25lclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHVpTmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgbW9kdWxlTmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgaXNPbkxvYWQ6Ym9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pc09uTG9hZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VUlOYW1lKHVybDpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMudWlOYW1lID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vZHVsZU5hbWUobW5hbWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm1vZHVsZU5hbWUgPSBtbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+W8gOWni+aYvuekulxyXG4gICAgX3Nob3dfKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgX2hpZGVfKCl7XHJcbiAgICAgICAgaWYgKExvYWRlck1hbmFnZXIuaXNSZWxlYXNlKHRoaXMubW9kdWxlTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgR2FtZVBvb2xNYW5hZ2VyLmNsZWFyQnlUYXJnZXQodGhpcyk7IFxyXG4gICAgICAgICAgICB0aGlzLl9kZXN0cm95Q2xlYXIoKTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCh0aGlzKTtcclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5ub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlQ2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/lhbPml7bmuIXnkIZcclxuICAgIF9jbG9zZUNsZWFyKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v6ZSA5q+B5pe25riF55CGXHJcbiAgICBfZGVzdHJveUNsZWFyKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uX1Nob3coYXJncyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25fSGlkZSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpXHJcbiAgICB7XHJcbiAgICAgICAgVUlNYW5hbmdlci5oaWRlVmlldyh0aGlzLnVpTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2MubG9nKCdCYXNlVmlldyDooqvplIDmr4EnKTtcclxuICAgICAgICBOUmVzcG9uZXIudGFyZ2V0T2ZmKHRoaXMsdHJ1ZSk7XHJcbiAgICAgICAgSGFuZGxlci5yZWxlYXNlQnlIb3N0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaXNPbkxvYWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXX0=
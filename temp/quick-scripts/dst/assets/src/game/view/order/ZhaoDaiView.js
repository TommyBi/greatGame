
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/ZhaoDaiView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ed6aP+fz1MToN76EQmXavB', 'ZhaoDaiView');
// src/game/view/order/ZhaoDaiView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *招待顾客
 * TODO:
 */
var ZhaoDaiView = /** @class */ (function (_super) {
    __extends(ZhaoDaiView, _super);
    function ZhaoDaiView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_go = null;
        _this.btn_wait = null;
        _this.proLb = null;
        _this.pro = null;
        return _this;
    }
    ZhaoDaiView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_go, this.onGo, this);
        EventDispath_1.default.on(this.btn_wait, this.onWait, this);
        this.initUI();
    };
    ZhaoDaiView.prototype.onLoad = function () {
    };
    ZhaoDaiView.prototype.start = function () {
    };
    ZhaoDaiView.prototype.startShow = function () {
        this.mData = this.inData[0];
    };
    ZhaoDaiView.prototype.initUI = function () {
        var base = ConfigManager_1.default.getCropById(this.mData.cropId);
        this.proLb.string = this.mData.num + "/" + this.mData.target;
        this.pro.progress = this.mData.num / this.mData.target;
    };
    ZhaoDaiView.prototype.onWait = function () {
        this.onBtnCloseHandle();
    };
    ZhaoDaiView.prototype.onGo = function () {
        UIMananger_1.default.showPanel(UIType_1.default.popZlView);
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    ZhaoDaiView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], ZhaoDaiView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], ZhaoDaiView.prototype, "btn_go", void 0);
    __decorate([
        property(cc.Node)
    ], ZhaoDaiView.prototype, "btn_wait", void 0);
    __decorate([
        property(cc.Label)
    ], ZhaoDaiView.prototype, "proLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ZhaoDaiView.prototype, "pro", void 0);
    ZhaoDaiView = __decorate([
        ccclass
    ], ZhaoDaiView);
    return ZhaoDaiView;
}(BasePanel_1.default));
exports.default = ZhaoDaiView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL1poYW9EYWlWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFHbkUsNkRBQXdEO0FBRXhELDhDQUF5QztBQUV6Qyw2REFBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7OztHQUdHO0FBRUg7SUFBeUMsK0JBQVM7SUFBbEQ7UUFBQSxxRUFtREM7UUFoREcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixTQUFHLEdBQW1CLElBQUksQ0FBQzs7SUF3Qy9CLENBQUM7SUFyQ0csOEJBQVEsR0FBUjtRQUNJLEtBQUs7UUFDTCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ1MsNEJBQU0sR0FBaEI7SUFDQSxDQUFDO0lBQ1MsMkJBQUssR0FBZjtJQUNBLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxJQUFJLEdBQUcsdUJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFekQsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsMEJBQUksR0FBSjtRQUNJLG9CQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGNBQWM7SUFDZCxzQ0FBZ0IsR0FBaEI7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0Q0FDRTtJQVhWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtRC9CO0lBQUQsa0JBQUM7Q0FuREQsQUFtREMsQ0FuRHdDLG1CQUFTLEdBbURqRDtrQkFuRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAq5oub5b6F6aG+5a6iXHJcbiAqIFRPRE86XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaaGFvRGFpVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fZ286IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fd2FpdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcm9MYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcHJvOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgbURhdGE7XHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDpgIDlh7pcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fY2xvc2UsIHRoaXMub25CdG5DbG9zZUhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9nbywgdGhpcy5vbkdvLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fd2FpdCwgdGhpcy5vbldhaXQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2hvdygpIHtcclxuICAgICAgICB0aGlzLm1EYXRhID0gdGhpcy5pbkRhdGFbMF07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIGxldCBiYXNlID0gQ29uZmlnTWFuYWdlci5nZXRDcm9wQnlJZCh0aGlzLm1EYXRhLmNyb3BJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvTGIuc3RyaW5nID0gdGhpcy5tRGF0YS5udW0gKyBcIi9cIiArIHRoaXMubURhdGEudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMucHJvLnByb2dyZXNzPXRoaXMubURhdGEubnVtIC8gdGhpcy5tRGF0YS50YXJnZXQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uV2FpdCgpIHtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuICAgIG9uR28oKSB7XHJcbiAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnBvcFpsVmlldyk7XHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOS7heeUqOS6juWFs+mXreaTjeS9nCAqL1xyXG4gICAgb25CdG5DbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
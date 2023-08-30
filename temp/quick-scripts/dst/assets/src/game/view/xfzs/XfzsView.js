
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/xfzs/XfzsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a111eqvaJBKG54Attf1iiBx', 'XfzsView');
// src/game/view/xfzs/XfzsView.ts

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
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 幸福指数
 * TODO:
 */
var XfzsView = /** @class */ (function (_super) {
    __extends(XfzsView, _super);
    function XfzsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_help = null;
        _this.btn_order = null;
        _this.btn_close = null;
        _this.xingfuLb = null;
        return _this;
    }
    XfzsView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_help, this.onHelp, this);
        EventDispath_1.default.on(this.btn_order, this.onOrder, this);
        this.initUI();
    };
    XfzsView.prototype.onDisable = function () {
    };
    XfzsView.prototype.initUI = function () {
        this.xingfuLb.string = PlayerModel_1.default.getXfzs() + "";
    };
    XfzsView.prototype.onHelp = function () {
        UIMananger_1.default.showPanel(UIType_1.default.xfzsHelpView);
    };
    XfzsView.prototype.onOrder = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderQualityView);
    };
    XfzsView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], XfzsView.prototype, "btn_help", void 0);
    __decorate([
        property(cc.Node)
    ], XfzsView.prototype, "btn_order", void 0);
    __decorate([
        property(cc.Node)
    ], XfzsView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], XfzsView.prototype, "xingfuLb", void 0);
    XfzsView = __decorate([
        ccclass
    ], XfzsView);
    return XfzsView;
}(BasePanel_1.default));
exports.default = XfzsView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3hmenMvWGZ6c1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEYsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUluRSw2REFBd0Q7QUFHeEQsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUk1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7O0dBR0c7QUFFSDtJQUFzQyw0QkFBUztJQUEvQztRQUFBLHFFQXdDQztRQXRDRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWEsSUFBSSxDQUFDOztJQWdDOUIsQ0FBQztJQTlCRywyQkFBUSxHQUFSO1FBQ0ksS0FBSztRQUNMLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCw0QkFBUyxHQUFUO0lBQ0EsQ0FBQztJQUdELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBR0QseUJBQU0sR0FBTjtRQUNJLG9CQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUdELDBCQUFPLEdBQVA7UUFDSSxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG1DQUFnQixHQUFoQjtRQUNJLGlCQUFNLEtBQUssV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTztJQVJULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F3QzVCO0lBQUQsZUFBQztDQXhDRCxBQXdDQyxDQXhDcUMsbUJBQVMsR0F3QzlDO2tCQXhDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgeyBsZXZlbFVwX2NvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25zdHMvQ0NvbnN0XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL2NvbnN0cy9HbG9iYWxcIjtcclxuaW1wb3J0IFVJVHlwZSBmcm9tIFwiLi4vLi4vY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IHsgUG9wVHlwZSB9IGZyb20gXCIuLi9wb3BWaWV3L1BvcFZpZXcxXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOW5uOemj+aMh+aVsFxyXG4gKiBUT0RPOlxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWGZ6c1ZpZXcgZXh0ZW5kcyBCYXNlUGFuZWwge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5faGVscDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9vcmRlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9jbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB4aW5nZnVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2hlbHAsIHRoaXMub25IZWxwLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fb3JkZXIsIHRoaXMub25PcmRlciwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLnhpbmdmdUxiLnN0cmluZyA9IFBsYXllck1vZGVsLmdldFhmenMoKSArIFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uSGVscCgpIHtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUueGZ6c0hlbHBWaWV3KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25PcmRlcigpOiB2b2lkIHtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUub3JkZXJRdWFsaXR5Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
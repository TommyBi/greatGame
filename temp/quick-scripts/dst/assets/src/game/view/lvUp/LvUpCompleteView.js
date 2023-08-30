
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/lvUp/LvUpCompleteView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68988jvIUZHzLNLFixtgY/r', 'LvUpCompleteView');
// src/game/view/lvUp/LvUpCompleteView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
var LvUpCompleteView = /** @class */ (function (_super) {
    __extends(LvUpCompleteView, _super);
    function LvUpCompleteView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_lvUp = null;
        _this.btn_close = null;
        _this.currentIcon = null;
        _this.currentLv = null;
        _this.cDescLb = null;
        _this.xingfuLb = null;
        _this.resList = ["field", "shelves", "cashier", "pipe", "wall", "road", "scarecrow", "warehouse", "fence"];
        return _this;
    }
    LvUpCompleteView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_lvUp, this.onLvUp, this);
        this.initUI();
    };
    LvUpCompleteView.prototype.onDisable = function () {
    };
    LvUpCompleteView.prototype.startShow = function () {
        this.mData = this.inData[0];
        this.config = this.inData[1];
        this.preConfig = this.inData[2];
    };
    LvUpCompleteView.prototype.initUI = function () {
        var _this = this;
        this.currentLv.string = this.preConfig.name + "\u6210\u529F\u5347\u81F3" + (this.mData.level + 1) + "\u7EA7";
        this.cDescLb.string = this.config.add_desc;
        this.xingfuLb.string = "x" + this.preConfig.reward;
        MkUtils_1.default.loadSpriteFrame("texture/prop/" + this.resList[this.mData.tabIndex - 1] + "/icon/" + ("0" + (this.mData.level + 1)), function (res) {
            _this.currentIcon.spriteFrame = res;
        });
    };
    LvUpCompleteView.prototype.onLvUp = function () {
        PlayerModel_1.default.setXfzs(this.preConfig.reward);
        this.onBtnCloseHandle();
    };
    LvUpCompleteView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], LvUpCompleteView.prototype, "btn_lvUp", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpCompleteView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Sprite)
    ], LvUpCompleteView.prototype, "currentIcon", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpCompleteView.prototype, "currentLv", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpCompleteView.prototype, "cDescLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpCompleteView.prototype, "xingfuLb", void 0);
    LvUpCompleteView = __decorate([
        ccclass
    ], LvUpCompleteView);
    return LvUpCompleteView;
}(BasePanel_1.default));
exports.default = LvUpCompleteView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2x2VXAvTHZVcENvbXBsZXRlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRix3RUFBbUU7QUFHbkUsNERBQXVEO0FBQ3ZELDZEQUF3RDtBQUd4RCx1REFBa0Q7QUFJNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7Ozs7R0FJRztBQUVIO0lBQThDLG9DQUFTO0lBQXZEO1FBQUEscUVBeURDO1FBdkRHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQU0xQixhQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBOztJQXNDeEcsQ0FBQztJQXJDRyxtQ0FBUSxHQUFSO1FBQ0ksS0FBSztRQUNMLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUdsRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELG9DQUFTLEdBQVQ7SUFDQSxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksaUNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxZQUFHLENBQUM7UUFFN0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBRW5ELGlCQUFPLENBQUMsZUFBZSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsSUFBRyxPQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBRSxDQUFBLEVBQUUsVUFBQyxHQUFHO1lBQ3pILEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0kscUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7SUFDbEIsQ0FBQztJQXRERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ007SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDTztJQWJULGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBeURwQztJQUFELHVCQUFDO0NBekRELEFBeURDLENBekQ2QyxtQkFBUyxHQXlEdEQ7a0JBekRvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvQ29tcG9uZW50SGVscGVyXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCB7IGxldmVsVXBfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbnN0cy9DQ29uc3RcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IHsgTHZ1cF9UeXBlIH0gZnJvbSBcIi4vTHZVcFZpZXdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog6Ieq5Yqp5pyN5Yqh55WM6Z2iXHJcbiAqIFRPRE86XHJcbiAqIOmcgOimgeaJjeaIkOWKn+ingueci+W5v+WRiuWQju+8jOebkeWQrEZJTklTSF9BRF9BVVRPU0VSVklDReS6i+S7tu+8jOW5tuWwhuS4u+eVjOmdoueahOiHquWKqeacjeWKoeaXtumXtOW7tumVv+W9k+WJjeetiee6p+WvueW6lOeahOaXtumVv1xyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTHZVcENvbXBsZXRlVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9sdlVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBjdXJyZW50SWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGN1cnJlbnRMdjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY0Rlc2NMYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHhpbmdmdUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIG1EYXRhOiBMdnVwX1R5cGU7XHJcbiAgICBwcmVDb25maWc6IGxldmVsVXBfY29uZmlnO1xyXG4gICAgY29uZmlnOiBsZXZlbFVwX2NvbmZpZztcclxuICAgIHJlc0xpc3QgPSBbXCJmaWVsZFwiLCBcInNoZWx2ZXNcIiwgXCJjYXNoaWVyXCIsIFwicGlwZVwiLCBcIndhbGxcIiwgXCJyb2FkXCIsIFwic2NhcmVjcm93XCIsIFwid2FyZWhvdXNlXCIsIFwiZmVuY2VcIl1cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2x2VXAsIHRoaXMub25MdlVwLCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG4gICAgICAgIHRoaXMubURhdGEgPSB0aGlzLmluRGF0YVswXTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuaW5EYXRhWzFdO1xyXG4gICAgICAgIHRoaXMucHJlQ29uZmlnID0gdGhpcy5pbkRhdGFbMl07XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEx2LnN0cmluZyA9IGAke3RoaXMucHJlQ29uZmlnLm5hbWV95oiQ5Yqf5Y2H6IezJHt0aGlzLm1EYXRhLmxldmVsICsgMX3nuqdgO1xyXG5cclxuICAgICAgICB0aGlzLmNEZXNjTGIuc3RyaW5nID0gdGhpcy5jb25maWcuYWRkX2Rlc2M7XHJcblxyXG4gICAgICAgIHRoaXMueGluZ2Z1TGIuc3RyaW5nID0gXCJ4XCIgKyB0aGlzLnByZUNvbmZpZy5yZXdhcmQ7XHJcblxyXG4gICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL1wiICsgdGhpcy5yZXNMaXN0W3RoaXMubURhdGEudGFiSW5kZXggLSAxXSArIFwiL2ljb24vXCIgKyBgMCR7dGhpcy5tRGF0YS5sZXZlbCArIDF9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25MdlVwKCkge1xyXG4gICAgICAgIFBsYXllck1vZGVsLnNldFhmenModGhpcy5wcmVDb25maWcucmV3YXJkKTtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
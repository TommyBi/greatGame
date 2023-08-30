
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/popView/PopRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32d01ql9OlBIY6DOArOHy99', 'PopRewardView');
// src/game/view/popView/PopRewardView.ts

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
exports.PopType = void 0;
var EventDispath_1 = require("../../../framework/message/EventDispath");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopType;
(function (PopType) {
    PopType[PopType["FIELD"] = 0] = "FIELD";
    PopType[PopType["SHELVE"] = 1] = "SHELVE";
    PopType[PopType["GOLD1"] = 2] = "GOLD1";
    PopType[PopType["UNLOCK_ORDER"] = 3] = "UNLOCK_ORDER";
    PopType[PopType["REFRESH_ORDER"] = 4] = "REFRESH_ORDER";
    PopType[PopType["GOLD2"] = 5] = "GOLD2";
})(PopType = exports.PopType || (exports.PopType = {}));
var PopRewardView = /** @class */ (function (_super) {
    __extends(PopRewardView, _super);
    function PopRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rewardLb = null;
        _this.titleLb = null;
        _this.descLb = null;
        _this.btnClose = null;
        _this.btnOk = null;
        _this.hbIcon = null;
        _this.goldIcon = null;
        // LIFE-CYCLE CALLBACKS:
        _this.mType = 0; //面板类型，0除虫奖励，1宝箱奖励
        return _this;
        // update (dt) {}
    }
    PopRewardView.prototype.onLoad = function () {
    };
    PopRewardView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        this.initUi();
    };
    PopRewardView.prototype.startShow = function () {
        this.mType = this.inData[0];
        this.mData = this.inData[1];
    };
    PopRewardView.prototype.initUi = function () {
        this.hbIcon.active = false;
        this.goldIcon.active = false;
        if (this.mType == 0) {
            this.titleLb.string = "除虫奖励";
            this.descLb.string = this.mData.name + "已经恢复生长，特此奖励";
        }
        else {
            this.titleLb.string = "宝箱奖励";
            this.descLb.string = "宝箱光芒大涨，恭喜你发现了";
        }
        if (this.mData.rewardType == 0) {
            this.goldIcon.active = true;
            this.rewardLb.string = "x" + Number(this.mData.rewardNum);
        }
        else {
            this.hbIcon.active = true;
            this.rewardLb.string = "x" + Number(this.mData.rewardNum).toFixed(2) + "元";
        }
    };
    PopRewardView.prototype.onClickHandle = function () {
        if (this.mData.rewardType == 0)
            PlayerModel_1.default.setGold(this.mData.rewardNum);
        else
            PlayerModel_1.default.setMoney(this.mData.totalMoney, this.mData.rewardNum);
        this.onCloseHandle();
    };
    PopRewardView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Label)
    ], PopRewardView.prototype, "rewardLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopRewardView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopRewardView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopRewardView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopRewardView.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Node)
    ], PopRewardView.prototype, "hbIcon", void 0);
    __decorate([
        property(cc.Node)
    ], PopRewardView.prototype, "goldIcon", void 0);
    PopRewardView = __decorate([
        ccclass
    ], PopRewardView);
    return PopRewardView;
}(BasePanel_1.default));
exports.default = PopRewardView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3BvcFZpZXcvUG9wUmV3YXJkVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsd0VBQW1FO0FBRW5FLDZEQUF3RDtBQUV4RCx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxPQU9YO0FBUEQsV0FBWSxPQUFPO0lBQ2YsdUNBQUssQ0FBQTtJQUNMLHlDQUFNLENBQUE7SUFDTix1Q0FBSyxDQUFBO0lBQ0wscURBQVksQ0FBQTtJQUNaLHVEQUFhLENBQUE7SUFDYix1Q0FBSyxDQUFBO0FBQ1QsQ0FBQyxFQVBXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQU9sQjtBQUdEO0lBQTJDLGlDQUFTO0lBQXBEO1FBQUEscUVBa0VDO1FBaEVHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsd0JBQXdCO1FBQ3hCLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQSxrQkFBa0I7O1FBOEM1QixpQkFBaUI7SUFDckIsQ0FBQztJQTdDRyw4QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVTLGdDQUFRLEdBQWxCO1FBQ0ksT0FBTztRQUNQLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEs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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL2NvbnN0cy9HbG9iYWxcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIFBvcFR5cGUge1xyXG4gICAgRklFTEQsXHJcbiAgICBTSEVMVkUsXHJcbiAgICBHT0xEMSxcclxuICAgIFVOTE9DS19PUkRFUixcclxuICAgIFJFRlJFU0hfT1JERVIsXHJcbiAgICBHT0xEMixcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wUmV3YXJkVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByZXdhcmRMYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpdGxlTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGJJY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ29sZEljb246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG1UeXBlID0gMDsvL+mdouadv+exu+Wei++8jDDpmaTomavlpZblirHvvIwx5a6d566x5aWW5YqxXHJcbiAgICBtRGF0YTtcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOWFs+mXremdouadv1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bkNsb3NlLCB0aGlzLm9uQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bk9rLCB0aGlzLm9uQ2xpY2tIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRVaSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1UeXBlID0gdGhpcy5pbkRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5tRGF0YSA9IHRoaXMuaW5EYXRhWzFdO1xyXG4gICAgfVxyXG4gICAgaW5pdFVpKCkge1xyXG4gICAgICAgIHRoaXMuaGJJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ29sZEljb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMubVR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGIuc3RyaW5nID0gXCLpmaTomavlpZblirFcIjtcclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIuc3RyaW5nID0gdGhpcy5tRGF0YS5uYW1lICsgXCLlt7Lnu4/mgaLlpI3nlJ/plb/vvIznibnmraTlpZblirFcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGIuc3RyaW5nID0gXCLlrp3nrrHlpZblirFcIlxyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYi5zdHJpbmcgPSBcIuWuneeuseWFieiKkuWkp+a2qO+8jOaBreWWnOS9oOWPkeeOsOS6hlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tRGF0YS5yZXdhcmRUeXBlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5nb2xkSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZExiLnN0cmluZyA9IFwieFwiICsgTnVtYmVyKHRoaXMubURhdGEucmV3YXJkTnVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhiSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZExiLnN0cmluZyA9IFwieFwiICsgTnVtYmVyKHRoaXMubURhdGEucmV3YXJkTnVtKS50b0ZpeGVkKDIpICsgXCLlhYNcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrSGFuZGxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1EYXRhLnJld2FyZFR5cGUgPT0gMCkgUGxheWVyTW9kZWwuc2V0R29sZCh0aGlzLm1EYXRhLnJld2FyZE51bSk7XHJcbiAgICAgICAgZWxzZSBQbGF5ZXJNb2RlbC5zZXRNb25leSh0aGlzLm1EYXRhLnRvdGFsTW9uZXksIHRoaXMubURhdGEucmV3YXJkTnVtKTtcclxuICAgICAgICB0aGlzLm9uQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
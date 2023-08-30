
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/popView/PopView1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28e67PU1xpKZruxPR5Zs+2m', 'PopView1');
// src/game/view/popView/PopView1.ts

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
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
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
var PopView1 = /** @class */ (function (_super) {
    __extends(PopView1, _super);
    function PopView1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gp0 = null;
        _this.numLb = null;
        _this.titleLb = null;
        _this.btnLb = null;
        _this.descLb = null;
        _this.btnClose = null;
        _this.btnOk = null;
        _this.icon = null;
        _this.iconList = [];
        // LIFE-CYCLE CALLBACKS:
        _this.mType = 0; //面板类型，0解锁地块
        return _this;
        // update (dt) {}
    }
    PopView1.prototype.onLoad = function () {
    };
    PopView1.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
    };
    PopView1.prototype.startShow = function () {
        this.gp0.active = false;
        this.descLb.node.active = true;
        this.mType = this.inData[0];
        if (this.mType == PopType.FIELD) {
            this.btnLb.string = "立即扩建";
            this.descLb.string = "扩建土地后，种植效率更高哦";
            this.icon.spriteFrame = this.iconList[PopType.FIELD];
            this.titleLb.string = "扩建土地";
        }
        else if (this.mType == PopType.SHELVE) {
            this.btnLb.string = "立即扩建";
            this.descLb.string = "扩建货架后，往来顾客更多哦";
            this.titleLb.string = "扩建货架";
            this.icon.spriteFrame = this.iconList[PopType.SHELVE];
        }
        else if (this.mType == PopType.GOLD1 || this.mType == PopType.GOLD2) {
            this.gp0.active = true;
            this.descLb.node.active = false;
            if (this.mType == PopType.GOLD1)
                this.titleLb.string = "领取钞票";
            else
                this.titleLb.string = "钞票不足";
            this.btnLb.string = "立即领取";
            this.numLb.string = this.inData[1];
            this.icon.spriteFrame = this.iconList[PopType.GOLD1];
            EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        }
        else if (this.mType == PopType.UNLOCK_ORDER) {
            this.btnLb.string = "立即解锁";
            this.descLb.string = "看精彩视频 \n 免费解锁新订单";
            this.titleLb.string = "解锁订单";
            this.icon.spriteFrame = this.iconList[PopType.UNLOCK_ORDER];
        }
        else if (this.mType == PopType.REFRESH_ORDER) {
            this.btnLb.string = "立即刷新";
            this.descLb.string = "立即刷新订单中心的所有订单 \n可能刷出更优质的订单哦";
            this.titleLb.string = "刷新订单";
            this.icon.spriteFrame = this.iconList[PopType.UNLOCK_ORDER];
        }
    };
    PopView1.prototype.onClickHandle = function () {
        switch (this.mType) {
            case PopType.FIELD:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video8);
                this.onVideoClose();
                break;
            case PopType.SHELVE:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video9);
                this.onVideoClose();
                break;
            case PopType.GOLD1:
            case PopType.GOLD2:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video2);
                break;
            case PopType.UNLOCK_ORDER:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video3);
                this.onVideoClose();
                break;
            case PopType.REFRESH_ORDER:
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video4);
                this.onVideoClose();
                break;
        }
    };
    PopView1.prototype.onVideoBack = function () {
        PlayerModel_1.default.setGold(this.inData[1]);
        this.onCloseHandle();
    };
    PopView1.prototype.onVideoClose = function () {
        _super.prototype.close1.call(this);
    };
    PopView1.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], PopView1.prototype, "gp0", void 0);
    __decorate([
        property(cc.Label)
    ], PopView1.prototype, "numLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopView1.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopView1.prototype, "btnLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopView1.prototype, "descLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopView1.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopView1.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopView1.prototype, "icon", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopView1.prototype, "iconList", void 0);
    PopView1 = __decorate([
        ccclass
    ], PopView1);
    return PopView1;
}(BasePanel_1.default));
exports.default = PopView1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3BvcFZpZXcvUG9wVmlldzEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDZEQUF3RDtBQUN4RCw4Q0FBeUM7QUFDekMsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksT0FPWDtBQVBELFdBQVksT0FBTztJQUNmLHVDQUFLLENBQUE7SUFDTCx5Q0FBTSxDQUFBO0lBQ04sdUNBQUssQ0FBQTtJQUNMLHFEQUFZLENBQUE7SUFDWix1REFBYSxDQUFBO0lBQ2IsdUNBQUssQ0FBQTtBQUNULENBQUMsRUFQVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFPbEI7QUFHRDtJQUFzQyw0QkFBUztJQUEvQztRQUFBLHFFQTZHQztRQTNHRyxTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFxQixFQUFFLENBQUM7UUFHaEMsd0JBQXdCO1FBQ3hCLFdBQUssR0FBRyxDQUFDLENBQUMsQ0FBQSxZQUFZOztRQXFGdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFwRkcseUJBQU0sR0FBTjtJQUVBLENBQUM7SUFF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IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBQb3BUeXBlIHtcclxuICAgIEZJRUxELFxyXG4gICAgU0hFTFZFLFxyXG4gICAgR09MRDEsXHJcbiAgICBVTkxPQ0tfT1JERVIsXHJcbiAgICBSRUZSRVNIX09SREVSLFxyXG4gICAgR09MRDIsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFZpZXcxIGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ3AwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG51bUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGl0bGVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYnRuTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXHJcbiAgICBpY29uTGlzdDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG1UeXBlID0gMDsvL+mdouadv+exu+Wei++8jDDop6PplIHlnLDlnZdcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDlhbPpl63pnaLmnb9cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5DbG9zZSwgdGhpcy5vbkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5PaywgdGhpcy5vbkNsaWNrSGFuZGxlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNob3coKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZ3AwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5tVHlwZSA9IHRoaXMuaW5EYXRhWzBdO1xyXG4gICAgICAgIGlmICh0aGlzLm1UeXBlID09IFBvcFR5cGUuRklFTEQpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5MYi5zdHJpbmcgPSBcIueri+WNs+aJqeW7ulwiO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYi5zdHJpbmcgPSBcIuaJqeW7uuWcn+WcsOWQju+8jOenjeakjeaViOeOh+abtOmrmOWTplwiO1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25MaXN0W1BvcFR5cGUuRklFTERdO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGIuc3RyaW5nID0gXCLmianlu7rlnJ/lnLBcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tVHlwZSA9PSBQb3BUeXBlLlNIRUxWRSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxiLnN0cmluZyA9IFwi56uL5Y2z5omp5bu6XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwi5omp5bu66LSn5p625ZCO77yM5b6A5p2l6aG+5a6i5pu05aSa5ZOmXCI7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVMYi5zdHJpbmcgPSBcIuaJqeW7uui0p+aetlwiXHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvbkxpc3RbUG9wVHlwZS5TSEVMVkVdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tVHlwZSA9PSBQb3BUeXBlLkdPTEQxIHx8IHRoaXMubVR5cGUgPT0gUG9wVHlwZS5HT0xEMikge1xyXG4gICAgICAgICAgICB0aGlzLmdwMC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tVHlwZSA9PSBQb3BUeXBlLkdPTEQxKSB0aGlzLnRpdGxlTGIuc3RyaW5nID0gXCLpooblj5bpkp7npahcIlxyXG4gICAgICAgICAgICBlbHNlIHRoaXMudGl0bGVMYi5zdHJpbmcgPSBcIumSnuelqOS4jei2s1wiXHJcbiAgICAgICAgICAgIHRoaXMuYnRuTGIuc3RyaW5nID0gXCLnq4vljbPpooblj5ZcIjtcclxuICAgICAgICAgICAgdGhpcy5udW1MYi5zdHJpbmcgPSB0aGlzLmluRGF0YVsxXTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uTGlzdFtQb3BUeXBlLkdPTEQxXTtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25WaWRlb0JhY2ssIHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tVHlwZSA9PSBQb3BUeXBlLlVOTE9DS19PUkRFUikge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxiLnN0cmluZyA9IFwi56uL5Y2z6Kej6ZSBXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwi55yL57K+5b2p6KeG6aKRIFxcbiDlhY3otLnop6PplIHmlrDorqLljZVcIjtcclxuICAgICAgICAgICAgdGhpcy50aXRsZUxiLnN0cmluZyA9IFwi6Kej6ZSB6K6i5Y2VXCJcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pY29uTGlzdFtQb3BUeXBlLlVOTE9DS19PUkRFUl07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1UeXBlID09IFBvcFR5cGUuUkVGUkVTSF9PUkRFUikge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkxiLnN0cmluZyA9IFwi56uL5Y2z5Yi35pawXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwi56uL5Y2z5Yi35paw6K6i5Y2V5Lit5b+D55qE5omA5pyJ6K6i5Y2VIFxcbuWPr+iDveWIt+WHuuabtOS8mOi0qOeahOiuouWNleWTplwiO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGIuc3RyaW5nID0gXCLliLfmlrDorqLljZVcIlxyXG4gICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmljb25MaXN0W1BvcFR5cGUuVU5MT0NLX09SREVSXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrSGFuZGxlKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5tVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBvcFR5cGUuRklFTEQ6XHJcbiAgICAgICAgICAgICAgICBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvOCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmlkZW9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9wVHlwZS5TSEVMVkU6XHJcbiAgICAgICAgICAgICAgICBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvOSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmlkZW9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9wVHlwZS5HT0xEMTpcclxuICAgICAgICAgICAgY2FzZSBQb3BUeXBlLkdPTEQyOlxyXG4gICAgICAgICAgICAgICAgU0RLTWFuYWdlci5zaG93QWQoR2xvYmFsLlZJREVPX0NPTkZJRy52aWRlbzIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9wVHlwZS5VTkxPQ0tfT1JERVI6XHJcbiAgICAgICAgICAgICAgICBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVmlkZW9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUG9wVHlwZS5SRUZSRVNIX09SREVSOlxyXG4gICAgICAgICAgICAgICAgU0RLTWFuYWdlci5zaG93QWQoR2xvYmFsLlZJREVPX0NPTkZJRy52aWRlbzQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZpZGVvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVmlkZW9CYWNrKCkge1xyXG4gICAgICAgIFBsYXllck1vZGVsLnNldEdvbGQodGhpcy5pbkRhdGFbMV0pO1xyXG4gICAgICAgIHRoaXMub25DbG9zZUhhbmRsZSgpO1xyXG4gICAgfVxyXG4gICAgb25WaWRlb0Nsb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlMSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
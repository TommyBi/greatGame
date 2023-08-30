
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/hbPop/HardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4158zjrj1ICoPyoqh3lpN2', 'HardView');
// src/game/view/hbPop/HardView.ts

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
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 辛苦红包，回馈红包
 * TODO:
 */
var HardView = /** @class */ (function (_super) {
    __extends(HardView, _super);
    function HardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xkTitle = null;
        _this.hkTitle = null;
        _this.btn_open = null;
        _this.btn_noOpen = null;
        _this.btn_giveUp = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.mType = 0;
        _this.getType = 0;
        return _this;
    }
    HardView.prototype.onEnable = function () {
        EventDispath_1.default.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath_1.default.on(this.btn_open, this.onOpen, this);
        EventDispath_1.default.on(this.btn_noOpen, this.onNoOpen, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        if (this.mType == 0) {
            SDKManager_1.default.getHardConfig();
        }
        else {
            SDKManager_1.default.getFeedbackConfig();
        }
        this.initUI();
    };
    HardView.prototype.startShow = function () {
        this.mType = this.inData[0];
    };
    HardView.prototype.initUI = function () {
        if (this.mType == 0) {
            this.xkTitle.active = true;
            this.btn_giveUp.active = true;
            this.descLb1.active = true;
        }
        else {
            this.hkTitle.active = true;
            this.btn_noOpen.active = true;
            this.descLb2.active = true;
        }
    };
    HardView.prototype.onRewardCfg = function (data) {
        this.mData = data;
    };
    HardView.prototype.onRewardLost = function () {
        this.onBtnCloseHandle();
    };
    HardView.prototype.onRewardGot = function (data) {
        if (this.getType) {
            PlayerModel_1.default.setMoney(data.userRedBean, data.redBean);
        }
        else {
            UIMananger_1.default.showPanel(UIType_1.default.hardOpenView, null, null, UIEffectManager_1.UIEffectType.SCALE, data);
        }
        this.onBtnCloseHandle();
    };
    HardView.prototype.onGiveUp = function () {
        this.onBtnCloseHandle();
    };
    //不开了，只领一点
    HardView.prototype.onNoOpen = function () {
        this.getType = 1;
        PlayerModel_1.default.zdGkNum = 0;
        SDKManager_1.default.getRedPackReward(this.mData.configId, false);
        EventDispath_1.default.send(EventType_1.EventType.HKHB_UPDATE);
    };
    HardView.prototype.onOpen = function () {
        if (this.mType == 0) {
            SDKManager_1.default.getRedPackReward(this.mData.configId);
        }
        else {
            PlayerModel_1.default.zdGkNum = 0;
            EventDispath_1.default.send(EventType_1.EventType.HKHB_UPDATE);
            SDKManager_1.default.getRedPackReward(this.mData.configId, true);
        }
        // if (this.isFirst) {
        //     // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
        //     PlayerModel.isFirstClearPest = false;
        //     this.onVideoBack();
        //     // this.onBtnCloseHandle();
        // } else {
        //     EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        //     SDKManager.showAd(Global.VIDEO_CONFIG.video13);
        // }
    };
    HardView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "xkTitle", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "hkTitle", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "btn_open", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "btn_noOpen", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "btn_giveUp", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Node)
    ], HardView.prototype, "descLb2", void 0);
    HardView = __decorate([
        ccclass
    ], HardView);
    return HardView;
}(BasePanel_1.default));
exports.default = HardView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2hiUG9wL0hhcmRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUErRDtBQUMvRCw4RUFBMEU7QUFDMUUsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNkRBQXdEO0FBQ3hELDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7OztHQUdHO0FBRUg7SUFBc0MsNEJBQVM7SUFBL0M7UUFBQSxxRUFvR0M7UUFsR0csYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQWtGaEIsQ0FBQztJQWpGRywyQkFBUSxHQUFSO1FBRUksc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElB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QUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QyxvQkFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFEO1FBQ0Qsc0JBQXNCO1FBQ3RCLG1GQUFtRjtRQUNuRiw0Q0FBNEM7UUFDNUMsMEJBQTBCO1FBQzFCLGtDQUFrQztRQUNsQyxXQUFXO1FBQ1gsbUZBQW1GO1FBQ25GLHNEQUFzRDtRQUN0RCxJQUFJO0lBQ1IsQ0FBQztJQUVELG1DQUFnQixHQUFoQjtRQUNJLGlCQUFNLEtBQUssV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUFqR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQWRQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvRzVCO0lBQUQsZUFBQztDQXBHRCxBQW9HQyxDQXBHcUMsbUJBQVMsR0FvRzlDO2tCQXBHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog6L6b6Ium57qi5YyF77yM5Zue6aaI57qi5YyFXHJcbiAqIFRPRE86XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHhrVGl0bGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoa1RpdGxlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX29wZW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fbm9PcGVuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2dpdmVVcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRlc2NMYjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkZXNjTGIyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBtRGF0YTtcclxuICAgIG1UeXBlID0gMDtcclxuICAgIGdldFR5cGUgPSAwO1xyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9naXZlVXAsIHRoaXMub25HaXZlVXAsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9vcGVuLCB0aGlzLm9uT3BlbiwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX25vT3BlbiwgdGhpcy5vbk5vT3BlbiwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TREtfUkVXQVJEX0NPTkZJRywgdGhpcy5vblJld2FyZENmZywgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TREtfUkVXQVJEX0dPVCwgdGhpcy5vblJld2FyZEdvdCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlNES19SRVdBUkRfTE9TVCwgdGhpcy5vblJld2FyZExvc3QsIHRoaXMpO1xyXG4gICAgICAgIGlmICh0aGlzLm1UeXBlID09IDApIHtcclxuICAgICAgICAgICAgU0RLTWFuYWdlci5nZXRIYXJkQ29uZmlnKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU0RLTWFuYWdlci5nZXRGZWVkYmFja0NvbmZpZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2hvdygpIHtcclxuICAgICAgICB0aGlzLm1UeXBlID0gdGhpcy5pbkRhdGFbMF07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRVSSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tVHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueGtUaXRsZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9naXZlVXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oa1RpdGxlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX25vT3Blbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblJld2FyZENmZyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5tRGF0YSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBvblJld2FyZExvc3QoKSB7XHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvblJld2FyZEdvdChkYXRhKSB7XHJcbiAgICAgICAgaWYoIHRoaXMuZ2V0VHlwZSl7XHJcbiAgICAgICAgICAgIFBsYXllck1vZGVsLnNldE1vbmV5KGRhdGEudXNlclJlZEJlYW4sIGRhdGEucmVkQmVhbik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5oYXJkT3BlblZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgZGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvbkdpdmVVcCgpIHtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuICAgIC8v5LiN5byA5LqG77yM5Y+q6aKG5LiA54K5XHJcbiAgICBvbk5vT3BlbigpIHtcclxuICAgICAgICB0aGlzLmdldFR5cGUgPSAxO1xyXG4gICAgICAgIFBsYXllck1vZGVsLnpkR2tOdW0gPSAwO1xyXG4gICAgICAgIFNES01hbmFnZXIuZ2V0UmVkUGFja1Jld2FyZCh0aGlzLm1EYXRhLmNvbmZpZ0lkLCBmYWxzZSk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkhLSEJfVVBEQVRFKTtcclxuICAgIH1cclxuICAgIG9uT3BlbigpIHtcclxuICAgICAgICBpZiAodGhpcy5tVHlwZSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBTREtNYW5hZ2VyLmdldFJlZFBhY2tSZXdhcmQodGhpcy5tRGF0YS5jb25maWdJZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgUGxheWVyTW9kZWwuemRHa051bSA9IDA7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5IS0hCX1VQREFURSk7XHJcbiAgICAgICAgICAgIFNES01hbmFnZXIuZ2V0UmVkUGFja1Jld2FyZCh0aGlzLm1EYXRhLmNvbmZpZ0lkLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgIC8vICAgICAvLyBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuSlhfU0MsIHsgdHlwZTogMiwgcG9pbnQ6IHRoaXMudGFyZ2V0UG9pbnQgfSk7XHJcbiAgICAgICAgLy8gICAgIFBsYXllck1vZGVsLmlzRmlyc3RDbGVhclBlc3QgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgdGhpcy5vblZpZGVvQmFjaygpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vblZpZGVvQmFjaywgdGhpcyk7XHJcbiAgICAgICAgLy8gICAgIFNES01hbmFnZXIuc2hvd0FkKEdsb2JhbC5WSURFT19DT05GSUcudmlkZW8xMyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
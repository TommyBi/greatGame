
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/OrderSuccessView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82e85Xk2g9EnZEPtFDyKqXG', 'OrderSuccessView');
// src/game/view/order/OrderSuccessView.ts

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
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *订单完成
 * TODO:
 */
var OrderSuccessView = /** @class */ (function (_super) {
    __extends(OrderSuccessView, _super);
    function OrderSuccessView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_video_get = null;
        _this.btn_video_guide = null;
        _this.btn_video_help = null;
        _this.btn_get = null;
        _this.btn_wait = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.addLb = null;
        _this.numLb = null;
        _this.descLvLb = null;
        _this.iconList = [];
        _this.qualityNames = ["普通订单", "青铜订单", "白银订单", "黄金订单", "钻石订单", "星耀订单"];
        return _this;
    }
    OrderSuccessView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_video_guide, this.onGuide, this);
        EventDispath_1.default.on(this.btn_video_get, this.onVideoGet, this);
        EventDispath_1.default.on(this.btn_video_help, this.onVideoHelp, this);
        EventDispath_1.default.on(this.btn_get, this.onGet, this);
        EventDispath_1.default.on(this.btn_wait, this.onWait, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        SDKManager_1.default.getOrderRewardConfig();
    };
    OrderSuccessView.prototype.onLoad = function () {
    };
    OrderSuccessView.prototype.onRewardCfg = function (data) {
        this.sdkCfg = data;
        this.initUI();
    };
    OrderSuccessView.prototype.startShow = function () {
        this.mData = PlayerModel_1.default.getCurrentOrder();
    };
    OrderSuccessView.prototype.initUI = function () {
        var _this = this;
        if (PlayerModel_1.default.guideStep > 0) {
            this.descLvLb.string = "恭喜完成新手订单";
            this.btn_video_guide.active = true;
            // this.numLb.string =  this.sdkCfg.times;
            this.descLb2.active = true;
            MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
            });
            this.numLb.string = "0";
            this.addLb.string = "无加成";
        }
        else {
            if (!this.sdkCfg.mandatoryVideo) {
                this.btn_video_help.active = true;
                this.btn_get.active = true;
            }
            else {
                this.btn_video_get.active = true;
                this.btn_wait.active = true;
            }
            this.numLb.string = this.sdkCfg.times;
            if (this.sdkCfg.times == 0) {
                this.descLb2.active = true;
            }
            else {
                this.descLb1.active = true;
            }
            this.descLvLb.string = "恭喜完成" + this.qualityNames[this.mData.quality - 1];
            if (this.mData.quality == 1) {
                this.addLb.string = "无加成";
            }
            else {
                this.addLb.string = "+" + ConfigManager_1.default.order_quality_add[this.mData.quality - 1] + "%";
            }
            // this.addLb.string = ConfigManager.order_quality_add[this.mData.quality - 1] + "%";
        }
        if (this.mData.cropList.length < 3) {
            this.iconList[0].node.y = 20;
            this.iconList[1].node.y = 20;
        }
        else {
            this.iconList[0].node.y = 122;
            this.iconList[1].node.y = 122;
        }
        var _loop_1 = function (i) {
            this_1.iconList[i].node.active = true;
            MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this_1.mData.cropList[i].cropId), function (res) {
                _this.iconList[i].spriteFrame = res;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.mData.cropList.length; i++) {
            _loop_1(i);
        }
    };
    OrderSuccessView.prototype.onGuide = function () {
        //引导领取奖励
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
        SDKManager_1.default.getRedPackReward(this.sdkCfg.configId, false);
    };
    OrderSuccessView.prototype.onVideoGet = function () {
        //领取奖励
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
        }
        SDKManager_1.default.getRedPackReward(this.sdkCfg.configId);
        PlayerModel_1.default.orderVideoNum = 0;
    };
    OrderSuccessView.prototype.onVideoHelp = function () {
        //助力领取
        SDKManager_1.default.getRedPackReward(this.sdkCfg.configId, true);
        PlayerModel_1.default.orderVideoNum = 0;
    };
    OrderSuccessView.prototype.onGet = function () {
        //普通领取
        SDKManager_1.default.getRedPackReward(this.sdkCfg.configId, false);
        PlayerModel_1.default.orderVideoNum = 0;
    };
    OrderSuccessView.prototype.onWait = function () {
        //稍后领取
        this.onBtnCloseHandle();
    };
    OrderSuccessView.prototype.onRewardLost = function () {
        this.onBtnCloseHandle();
    };
    OrderSuccessView.prototype.onRewardGot = function (data) {
        var list = this.mData.cropList;
        for (var i = 0; i < list.length; i++) {
            console.log("====", list);
            PlayerModel_1.default.orderReduceCrop(list[i].cropId, list[i].target);
        }
        EventDispath_1.default.send(EventType_1.EventType.UPDATE_SHELVE_ORDER);
        UIMananger_1.default.showPanel(UIType_1.default.orderRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, data, this.mData);
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    OrderSuccessView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    OrderSuccessView.prototype.getGuidePoint = function () {
        var p = this.btn_video_get.convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    };
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_video_get", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_video_guide", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_video_help", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "btn_wait", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Node)
    ], OrderSuccessView.prototype, "descLb2", void 0);
    __decorate([
        property(cc.Label)
    ], OrderSuccessView.prototype, "addLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderSuccessView.prototype, "numLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderSuccessView.prototype, "descLvLb", void 0);
    __decorate([
        property([cc.Sprite])
    ], OrderSuccessView.prototype, "iconList", void 0);
    OrderSuccessView = __decorate([
        ccclass
    ], OrderSuccessView);
    return OrderSuccessView;
}(BasePanel_1.default));
exports.default = OrderSuccessView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL09yZGVyU3VjY2Vzc1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0VBQStEO0FBQy9ELDhFQUEwRTtBQUMxRSxvRUFBK0Q7QUFDL0Qsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSw0REFBdUQ7QUFDdkQsNkRBQXdEO0FBQ3hELDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBR2xELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7R0FHRztBQUVIO0lBQThDLG9DQUFTO0lBQXZEO1FBQUEscUVBc0tDO1FBbktHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUkzQixrQkFBWSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTs7SUF5SW5FLENBQUM7SUF4SUcsbUNBQVEsR0FBUjtRQUNJLEtBQUs7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IExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlUGFuZWxcIjtcclxuaW1wb3J0IFVJVHlwZSBmcm9tIFwiLi4vLi4vY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IHsgT3JkZXJJdGVtX0Nyb3AgfSBmcm9tIFwiLi9PcmRlckl0ZW1cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICrorqLljZXlrozmiJBcclxuICogVE9ETzpcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyU3VjY2Vzc1ZpZXcgZXh0ZW5kcyBCYXNlUGFuZWwge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX3ZpZGVvX2dldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl92aWRlb19ndWlkZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl92aWRlb19oZWxwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2dldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl93YWl0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGVzY0xiMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRlc2NMYjI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYWRkTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG51bUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkZXNjTHZMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxyXG4gICAgaWNvbkxpc3Q6IGNjLlNwcml0ZVtdID0gW107XHJcblxyXG4gICAgbURhdGE7XHJcbiAgICBzZGtDZmc7XHJcbiAgICBxdWFsaXR5TmFtZXMgPSBbXCLmma7pgJrorqLljZVcIiwgXCLpnZLpk5zorqLljZVcIiwgXCLnmb3pk7borqLljZVcIiwgXCLpu4Tph5HorqLljZVcIiwgXCLpkrvnn7PorqLljZVcIiwgXCLmmJ/ogIDorqLljZVcIl1cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX3ZpZGVvX2d1aWRlLCB0aGlzLm9uR3VpZGUsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl92aWRlb19nZXQsIHRoaXMub25WaWRlb0dldCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX3ZpZGVvX2hlbHAsIHRoaXMub25WaWRlb0hlbHAsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9nZXQsIHRoaXMub25HZXQsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl93YWl0LCB0aGlzLm9uV2FpdCwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TREtfUkVXQVJEX0NPTkZJRywgdGhpcy5vblJld2FyZENmZywgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlNES19SRVdBUkRfTE9TVCwgdGhpcy5vblJld2FyZExvc3QsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TREtfUkVXQVJEX0dPVCwgdGhpcy5vblJld2FyZEdvdCwgdGhpcyk7XHJcbiAgICAgICAgU0RLTWFuYWdlci5nZXRPcmRlclJld2FyZENvbmZpZygpO1xyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICB9XHJcbiAgICBvblJld2FyZENmZyhkYXRhKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZGtDZmcgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG4gICAgICAgIHRoaXMubURhdGEgPSBQbGF5ZXJNb2RlbC5nZXRDdXJyZW50T3JkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjTHZMYi5zdHJpbmcgPSBcIuaBreWWnOWujOaIkOaWsOaJi+iuouWNlVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl92aWRlb19ndWlkZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm51bUxiLnN0cmluZyA9ICB0aGlzLnNka0NmZy50aW1lcztcclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgMC41LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuR1VJREVfVVBEQVRFKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLm51bUxiLnN0cmluZyA9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRMYi5zdHJpbmcgPSBcIuaXoOWKoOaIkFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZGtDZmcubWFuZGF0b3J5VmlkZW8pIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl92aWRlb19oZWxwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bl9nZXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuX3ZpZGVvX2dldC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fd2FpdC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm51bUxiLnN0cmluZyA9IHRoaXMuc2RrQ2ZnLnRpbWVzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZGtDZmcudGltZXMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjTGIyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NMYjEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlc2NMdkxiLnN0cmluZyA9IFwi5oGt5Zac5a6M5oiQXCIgKyB0aGlzLnF1YWxpdHlOYW1lc1t0aGlzLm1EYXRhLnF1YWxpdHkgLSAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1EYXRhLnF1YWxpdHkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYi5zdHJpbmcgPSBcIuaXoOWKoOaIkFwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYi5zdHJpbmcgPSBcIitcIiArIENvbmZpZ01hbmFnZXIub3JkZXJfcXVhbGl0eV9hZGRbdGhpcy5tRGF0YS5xdWFsaXR5IC0gMV0gKyBcIiVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5hZGRMYi5zdHJpbmcgPSBDb25maWdNYW5hZ2VyLm9yZGVyX3F1YWxpdHlfYWRkW3RoaXMubURhdGEucXVhbGl0eSAtIDFdICsgXCIlXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tRGF0YS5jcm9wTGlzdC5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbkxpc3RbMF0ubm9kZS55ID0gMjA7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbkxpc3RbMV0ubm9kZS55ID0gMjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uTGlzdFswXS5ub2RlLnkgPSAxMjI7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbkxpc3RbMV0ubm9kZS55ID0gMTIyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1EYXRhLmNyb3BMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbkxpc3RbaV0ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvY3JvcC9pY29uL1wiICsgYCR7dGhpcy5tRGF0YS5jcm9wTGlzdFtpXS5jcm9wSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uTGlzdFtpXS5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkd1aWRlKCkge1xyXG4gICAgICAgIC8v5byV5a+86aKG5Y+W5aWW5YqxXHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5HVUlERV9IaWRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU0RLTWFuYWdlci5nZXRSZWRQYWNrUmV3YXJkKHRoaXMuc2RrQ2ZnLmNvbmZpZ0lkLCBmYWxzZSlcclxuXHJcbiAgICB9XHJcbiAgICBvblZpZGVvR2V0KCkge1xyXG4gICAgICAgIC8v6aKG5Y+W5aWW5YqxXHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5HVUlERV9IaWRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU0RLTWFuYWdlci5nZXRSZWRQYWNrUmV3YXJkKHRoaXMuc2RrQ2ZnLmNvbmZpZ0lkKVxyXG4gICAgICAgIFBsYXllck1vZGVsLm9yZGVyVmlkZW9OdW0gPSAwO1xyXG5cclxuICAgIH1cclxuICAgIG9uVmlkZW9IZWxwKCkge1xyXG4gICAgICAgIC8v5Yqp5Yqb6aKG5Y+WXHJcbiAgICAgICAgU0RLTWFuYWdlci5nZXRSZWRQYWNrUmV3YXJkKHRoaXMuc2RrQ2ZnLmNvbmZpZ0lkLCB0cnVlKVxyXG4gICAgICAgIFBsYXllck1vZGVsLm9yZGVyVmlkZW9OdW0gPSAwO1xyXG4gICAgfVxyXG4gICAgb25HZXQoKSB7XHJcbiAgICAgICAgLy/mma7pgJrpooblj5ZcclxuICAgICAgICBTREtNYW5hZ2VyLmdldFJlZFBhY2tSZXdhcmQodGhpcy5zZGtDZmcuY29uZmlnSWQsIGZhbHNlKVxyXG4gICAgICAgIFBsYXllck1vZGVsLm9yZGVyVmlkZW9OdW0gPSAwO1xyXG4gICAgfVxyXG4gICAgb25XYWl0KCkge1xyXG4gICAgICAgIC8v56iN5ZCO6aKG5Y+WXHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvblJld2FyZExvc3QoKSB7XHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvblJld2FyZEdvdChkYXRhKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLm1EYXRhLmNyb3BMaXN0XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PVwiLCBsaXN0KTtcclxuICAgICAgICAgICAgUGxheWVyTW9kZWwub3JkZXJSZWR1Y2VDcm9wKGxpc3RbaV0uY3JvcElkLCBsaXN0W2ldLnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5VUERBVEVfU0hFTFZFX09SREVSKTtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUub3JkZXJSZXdhcmRWaWV3LCBudWxsLCBudWxsLCBVSUVmZmVjdFR5cGUuU0NBTEUsIGRhdGEsIHRoaXMubURhdGEpO1xyXG4gICAgICAgIHRoaXMub25CdG5DbG9zZUhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDku4XnlKjkuo7lhbPpl63mk43kvZwgKi9cclxuICAgIG9uQnRuQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIGdldEd1aWRlUG9pbnQoKSB7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLmJ0bl92aWRlb19nZXQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxufVxyXG4iXX0=
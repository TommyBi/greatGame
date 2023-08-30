
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/flyBox/FlyBoxView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3fdb9OJ7X9KIriYko11mx0w', 'FlyBoxView');
// src/game/view/flyBox/FlyBoxView.ts

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
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 飞行宝箱
 * TODO:
 */
var FlyBoxView = /** @class */ (function (_super) {
    __extends(FlyBoxView, _super);
    function FlyBoxView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_open = null;
        _this.btn_close = null;
        return _this;
    }
    FlyBoxView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_open, this.onOpen, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        this.initUI();
    };
    FlyBoxView.prototype.startShow = function () {
    };
    FlyBoxView.prototype.initUI = function () {
    };
    FlyBoxView.prototype.onRewardCfg = function (data) {
        SDKManager_1.default.getRedPackReward(data.configId);
    };
    FlyBoxView.prototype.onRewardLost = function () {
        this.onBtnCloseHandle();
    };
    FlyBoxView.prototype.onRewardGot = function (data) {
        UIMananger_1.default.showPanel(UIType_1.default.popRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, 1, { rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean });
        this.onBtnCloseHandle();
    };
    //看视频返回
    FlyBoxView.prototype.onVideoBack = function () {
        var rewardNum = MkUtils_1.default.randomNM(1000, 1200);
        UIMananger_1.default.showPanel(UIType_1.default.popRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, 1, { name: "", rewardNum: rewardNum, rewardType: 0 });
        this.onBtnCloseHandle();
    };
    FlyBoxView.prototype.onOpen = function () {
        var random = MkUtils_1.default.randomNMF(0, 100);
        if (random < 30) {
            EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
            SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video18);
        }
        else {
            SDKManager_1.default.getFlightConfig();
        }
    };
    FlyBoxView.prototype.onBtnCloseHandle = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], FlyBoxView.prototype, "btn_open", void 0);
    __decorate([
        property(cc.Node)
    ], FlyBoxView.prototype, "btn_close", void 0);
    FlyBoxView = __decorate([
        ccclass
    ], FlyBoxView);
    return FlyBoxView;
}(BasePanel_1.default));
exports.default = FlyBoxView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2ZseUJveC9GbHlCb3hWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUErRDtBQUMvRCw4RUFBMEU7QUFDMUUsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNERBQXVEO0FBQ3ZELDZEQUF3RDtBQUV4RCw4Q0FBeUM7QUFDekMsOENBQXlDO0FBSW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7R0FHRztBQUVIO0lBQXdDLDhCQUFTO0lBQWpEO1FBQUEscUVBcURDO1FBbkRHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFpRDlCLENBQUM7SUEvQ0csNkJBQVEsR0FBUjtRQUNJLEtBQUs7UUFDTCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEQsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkYsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELDhCQUFTLEdBQVQ7SUFDQSxDQUFDO0lBRUQsMkJBQU0sR0FBTjtJQUNBLENBQUM7SUFDRCxnQ0FBVyxHQUFYLFVBQVksSUFBSTtRQUNaLG9CQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxpQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELGdDQUFXLEdBQVgsVUFBWSxJQUFJO1FBQ1osb0JBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSw4QkFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUN2SixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0MsT0FBTztJQUNQLGdDQUFXLEdBQVg7UUFDRSxJQUFJLFNBQVMsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0Msb0JBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSw4QkFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDaEksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELDJCQUFNLEdBQU47UUFDSSxJQUFJLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQ2Isc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVFLG9CQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDSCxvQkFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELHFDQUFnQixHQUFoQjtRQUNJLHNCQUFZLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekUsaUJBQU0sS0FBSyxXQUFFLENBQUM7SUFDbEIsQ0FBQztJQWxERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1E7SUFKVCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBcUQ5QjtJQUFELGlCQUFDO0NBckRELEFBcURDLENBckR1QyxtQkFBUyxHQXFEaEQ7a0JBckRvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJRWZmZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgeyBjcm9wX2NvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25zdHMvQ0NvbnN0XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL2NvbnN0cy9HbG9iYWxcIjtcclxuaW1wb3J0IFVJVHlwZSBmcm9tIFwiLi4vLi4vY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog6aOe6KGM5a6d566xXHJcbiAqIFRPRE86XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbHlCb3hWaWV3IGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX29wZW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX29wZW4sIHRoaXMub25PcGVuLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlNES19SRVdBUkRfQ09ORklHLCB0aGlzLm9uUmV3YXJkQ2ZnLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuU0RLX1JFV0FSRF9HT1QsIHRoaXMub25SZXdhcmRHb3QsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TREtfUkVXQVJEX0xPU1QsIHRoaXMub25SZXdhcmRMb3N0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2hvdygpIHtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICB9XHJcbiAgICBvblJld2FyZENmZyhkYXRhKSB7XHJcbiAgICAgICAgU0RLTWFuYWdlci5nZXRSZWRQYWNrUmV3YXJkKGRhdGEuY29uZmlnSWQpO1xyXG4gICAgfVxyXG4gICAgb25SZXdhcmRMb3N0KCkge1xyXG4gICAgICAgIHRoaXMub25CdG5DbG9zZUhhbmRsZSgpO1xyXG4gICAgfVxyXG4gICAgb25SZXdhcmRHb3QoZGF0YSkge1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5wb3BSZXdhcmRWaWV3LCBudWxsLCBudWxsLCBVSUVmZmVjdFR5cGUuU0NBTEUsIDEsIHsgcmV3YXJkTnVtOiBkYXRhLnJlZEJlYW4sIHJld2FyZFR5cGU6IDEsIHRvdGFsTW9uZXk6IGRhdGEudXNlclJlZEJlYW4gfSlcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuICAgICAgLy/nnIvop4bpopHov5Tlm55cclxuICAgICAgb25WaWRlb0JhY2soKSB7XHJcbiAgICAgICAgbGV0IHJld2FyZE51bSA9IE1LVXRpbHMucmFuZG9tTk0oMTAwMCwgMTIwMCk7XHJcbiAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnBvcFJld2FyZFZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgMSwgeyBuYW1lOiBcIlwiLCByZXdhcmROdW06IHJld2FyZE51bSwgcmV3YXJkVHlwZTogMCB9KVxyXG4gICAgICAgIHRoaXMub25CdG5DbG9zZUhhbmRsZSgpO1xyXG4gICAgfVxyXG4gICAgb25PcGVuKCkge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBNS1V0aWxzLnJhbmRvbU5NRigwLCAxMDApO1xyXG4gICAgICAgIGlmIChyYW5kb20gPCAzMCkge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vblZpZGVvQmFjaywgdGhpcyk7XHJcbiAgICAgICAgICAgIFNES01hbmFnZXIuc2hvd0FkKEdsb2JhbC5WSURFT19DT05GSUcudmlkZW8xOCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgU0RLTWFuYWdlci5nZXRGbGlnaHRDb25maWcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5DbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vblZpZGVvQmFjaywgdGhpcyk7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
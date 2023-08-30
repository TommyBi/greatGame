
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/clearPest/ClearPestView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed99egAlh1FoqZIt1SHFY2A', 'ClearPestView');
// src/game/view/clearPest/ClearPestView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 除虫
 * TODO:
 */
var ClearPestView = /** @class */ (function (_super) {
    __extends(ClearPestView, _super);
    function ClearPestView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoIcon = null;
        _this.btnLb = null;
        _this.btn_clear = null;
        _this.btn_close = null;
        _this.titleLb = null;
        _this.descLb = null;
        _this.isFirst = true;
        return _this;
    }
    ClearPestView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_clear, this.onClear, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        this.initUI();
    };
    ClearPestView.prototype.startShow = function () {
        this.targetPoint = this.inData[0];
        this.mCfg = this.inData[1];
        this.baseCfg = ConfigManager_1.default.getCropById(this.mCfg.cropId);
        this.isFirst = PlayerModel_1.default.isFirstClearPest;
    };
    ClearPestView.prototype.initUI = function () {
        console.log(this.baseCfg);
        this.titleLb.string = this.baseCfg.name + "除虫";
        this.descLb.string = this.baseCfg.name + "感染了害虫\n需要除虫后恢复生长";
        if (this.isFirst) {
            this.btnLb.x = 0;
            this.videoIcon.active = false;
        }
        else {
            this.btnLb.x = 50;
            this.videoIcon.active = true;
        }
    };
    ClearPestView.prototype.onRewardCfg = function (data) {
        SDKManager_1.default.getRedPackReward(data.configId);
    };
    ClearPestView.prototype.onRewardLost = function () {
        this.onBtnCloseHandle();
    };
    ClearPestView.prototype.onRewardGot = function (data) {
        EventDispath_1.default.send(EventType_1.EventType.SHACHONG, { name: this.baseCfg.name, rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean });
        // UIMananger.showPanel(UIType.popRewardView, null, () => {
        //     // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
        //     EventDispath.send(EventType.SHACHONG);
        // }, UIEffectType.SCALE, 0, { name: this.baseCfg.name, rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean })
        this.onBtnCloseHandle();
    };
    //看视频返回
    ClearPestView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        var name = this.baseCfg.name;
        var rewardNum = 0;
        rewardNum = MkUtils_1.default.randomNM(400, 600);
        EventDispath_1.default.send(EventType_1.EventType.SHACHONG, { name: name, rewardNum: rewardNum, rewardType: 0 });
        this.onBtnCloseHandle();
    };
    ClearPestView.prototype.onClear = function () {
        if (this.isFirst) {
            // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
            PlayerModel_1.default.isFirstClearPest = false;
            this.onVideoBack();
            // this.onBtnCloseHandle();
        }
        else {
            var random = MkUtils_1.default.randomNMF(0, 100);
            if (random < 30) {
                EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video13);
            }
            else {
                SDKManager_1.default.getWormConfig();
            }
        }
    };
    ClearPestView.prototype.onClose = function () {
        EventDispath_1.default.send(EventType_1.EventType.CLEAR_PEST_CLOSE);
        this.onBtnCloseHandle();
    };
    ClearPestView.prototype.onBtnCloseHandle = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], ClearPestView.prototype, "videoIcon", void 0);
    __decorate([
        property(cc.Node)
    ], ClearPestView.prototype, "btnLb", void 0);
    __decorate([
        property(cc.Node)
    ], ClearPestView.prototype, "btn_clear", void 0);
    __decorate([
        property(cc.Node)
    ], ClearPestView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], ClearPestView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], ClearPestView.prototype, "descLb", void 0);
    ClearPestView = __decorate([
        ccclass
    ], ClearPestView);
    return ClearPestView;
}(BasePanel_1.default));
exports.default = ClearPestView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2NsZWFyUGVzdC9DbGVhclBlc3RWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUErRDtBQUcvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDREQUF1RDtBQUN2RCw2REFBd0Q7QUFFeEQsOENBQXlDO0FBRXpDLHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7OztHQUdHO0FBRUg7SUFBMkMsaUNBQVM7SUFBcEQ7UUFBQSxxRUF1R0M7UUFyR0csZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFLeEIsYUFBTyxHQUFHLElBQUksQ0FBQzs7SUFzRm5CLENBQUM7SUFyRkcsZ0NBQVEsR0FBUjtRQUNJLEtBQUs7UUFDTCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEQsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFD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LENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ0s7SUFaUCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBdUdqQztJQUFELG9CQUFDO0NBdkdELEFBdUdDLENBdkcwQyxtQkFBUyxHQXVHbkQ7a0JBdkdvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJRWZmZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgeyBjcm9wX2NvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25zdHMvQ0NvbnN0XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL2NvbnN0cy9HbG9iYWxcIjtcclxuaW1wb3J0IFVJVHlwZSBmcm9tIFwiLi4vLi4vY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog6Zmk6JmrXHJcbiAqIFRPRE86XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhclBlc3RWaWV3IGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmlkZW9JY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuTGI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xlYXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGl0bGVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGVzY0xiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgdGFyZ2V0UG9pbnQ6IGNjLlZlYzI7XHJcbiAgICBtQ2ZnO1xyXG4gICAgYmFzZUNmZzogY3JvcF9jb25maWc7XHJcbiAgICBpc0ZpcnN0ID0gdHJ1ZTtcclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2NsZWFyLCB0aGlzLm9uQ2xlYXIsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuU0RLX1JFV0FSRF9DT05GSUcsIHRoaXMub25SZXdhcmRDZmcsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TREtfUkVXQVJEX0dPVCwgdGhpcy5vblJld2FyZEdvdCwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TREtfUkVXQVJEX0xPU1QsIHRoaXMub25SZXdhcmRMb3N0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNob3coKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb2ludCA9IHRoaXMuaW5EYXRhWzBdO1xyXG4gICAgICAgIHRoaXMubUNmZyA9IHRoaXMuaW5EYXRhWzFdO1xyXG4gICAgICAgIHRoaXMuYmFzZUNmZyA9IENvbmZpZ01hbmFnZXIuZ2V0Q3JvcEJ5SWQodGhpcy5tQ2ZnLmNyb3BJZCk7XHJcbiAgICAgICAgdGhpcy5pc0ZpcnN0ID0gUGxheWVyTW9kZWwuaXNGaXJzdENsZWFyUGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYXNlQ2ZnKTtcclxuICAgICAgICB0aGlzLnRpdGxlTGIuc3RyaW5nID0gdGhpcy5iYXNlQ2ZnLm5hbWUgKyBcIumZpOiZq1wiO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IHRoaXMuYmFzZUNmZy5uYW1lICsgXCLmhJ/mn5PkuoblrrPomatcXG7pnIDopoHpmaTomavlkI7mgaLlpI3nlJ/plb9cIlxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTGIueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9JY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTGIueCA9IDUwO1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvblJld2FyZENmZyhkYXRhKSB7XHJcbiAgICAgICAgU0RLTWFuYWdlci5nZXRSZWRQYWNrUmV3YXJkKGRhdGEuY29uZmlnSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmV3YXJkTG9zdCgpIHtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJld2FyZEdvdChkYXRhKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNIQUNIT05HLCB7IG5hbWU6IHRoaXMuYmFzZUNmZy5uYW1lLCByZXdhcmROdW06IGRhdGEucmVkQmVhbiwgcmV3YXJkVHlwZTogMSwgdG90YWxNb25leTogZGF0YS51c2VyUmVkQmVhbiB9KVxyXG4gICAgICAgIC8vIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5wb3BSZXdhcmRWaWV3LCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5KWF9TQywgeyB0eXBlOiAyLCBwb2ludDogdGhpcy50YXJnZXRQb2ludCB9KTtcclxuICAgICAgICAvLyAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNIQUNIT05HKTtcclxuICAgICAgICAvLyB9LCBVSUVmZmVjdFR5cGUuU0NBTEUsIDAsIHsgbmFtZTogdGhpcy5iYXNlQ2ZnLm5hbWUsIHJld2FyZE51bTogZGF0YS5yZWRCZWFuLCByZXdhcmRUeXBlOiAxLCB0b3RhbE1vbmV5OiBkYXRhLnVzZXJSZWRCZWFuIH0pXHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICAvL+eci+inhumikei/lOWbnlxyXG4gICAgb25WaWRlb0JhY2soKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25WaWRlb0JhY2ssIHRoaXMpO1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5iYXNlQ2ZnLm5hbWU7XHJcbiAgICAgICAgbGV0IHJld2FyZE51bSA9IDBcclxuICAgICAgICByZXdhcmROdW0gPSBNS1V0aWxzLnJhbmRvbU5NKDQwMCwgNjAwKTtcclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuU0hBQ0hPTkcsIHsgbmFtZTogbmFtZSwgcmV3YXJkTnVtOiByZXdhcmROdW0sIHJld2FyZFR5cGU6IDAgfSk7XHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvbkNsZWFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgLy8gRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkpYX1NDLCB7IHR5cGU6IDIsIHBvaW50OiB0aGlzLnRhcmdldFBvaW50IH0pO1xyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5pc0ZpcnN0Q2xlYXJQZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMub25WaWRlb0JhY2soKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1LVXRpbHMucmFuZG9tTk1GKDAsIDEwMCk7XHJcbiAgICAgICAgICAgIGlmIChyYW5kb20gPCAzMCkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25WaWRlb0JhY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgU0RLTWFuYWdlci5zaG93QWQoR2xvYmFsLlZJREVPX0NPTkZJRy52aWRlbzEzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFNES01hbmFnZXIuZ2V0V29ybUNvbmZpZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkNMRUFSX1BFU1RfQ0xPU0UpXHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvbkJ0bkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
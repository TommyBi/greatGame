
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/task/TaskRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '390c9OFrt9AYYeFJeDX7Z2J', 'TaskRewardView');
// src/game/view/task/TaskRewardView.ts

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
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var PlayerModel_1 = require("../../datas/PlayerModel");
var EffectManager_1 = require("../../manager/EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaskRewardView = /** @class */ (function (_super) {
    __extends(TaskRewardView, _super);
    function TaskRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconList = [];
        _this.btn_get = null;
        _this.btn_close = null;
        _this.rewardLab = null;
        _this.xfzsLab = null;
        _this.cropId = 0;
        return _this;
        // update (dt) {}
    }
    TaskRewardView.prototype.onEnable = function () {
        // 领取
        EventDispath_1.default.on(this.btn_get, this.onGet, this);
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onGet, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.initUI();
    };
    TaskRewardView.prototype.initUI = function () {
        var _this = this;
        if (this.data.taskId == 1) {
            this.rewardLab.string = "+" + Number(this.data.redBean).toFixed(2) + "元";
            this.iconList[0].active = true;
        }
        else if (this.data.taskId == 2) {
            this.rewardLab.string = "+" + this.data.gold;
            this.iconList[1].active = true;
        }
        else if (this.data.taskId == 3) {
            this.rewardLab.string = "+3";
            this.cropId = PlayerModel_1.default.getCurrentOrderCrop();
            this.iconList[2].active = true;
            MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.cropId), function (res) {
                _this.iconList[2].getComponent(cc.Sprite).spriteFrame = res;
            });
        }
        this.xfzsLab.string = "+" + this.data.xfzs;
    };
    TaskRewardView.prototype.startShow = function () {
        this.data = this.inData[0];
    };
    //领取奖励
    TaskRewardView.prototype.onGet = function () {
        if (this.data.taskId == 1) {
            PlayerModel_1.default.setMoney(this.data.userRedBean, this.data.redBean);
        }
        else if (this.data.taskId == 2) {
            PlayerModel_1.default.setGold(this.data.gold);
        }
        else if (this.data.taskId == 3) {
            var startNode = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
            EffectManager_1.default.playCrop(startNode, this.cropId);
            PlayerModel_1.default.setHouseAddCrop(this.cropId, 3);
            PlayerModel_1.default.checkAddOrder(this.cropId, 3, function () {
                // UIMananger.showPanel(UIType.orderSuccessView);
                EventDispath_1.default.send(EventType_1.EventType.ORDER_COMPLETE_UPDATE);
            });
            // PlayerModel.setGold(this.data.gold)
            //增加作物
        }
        PlayerModel_1.default.setXfzs(this.data.xfzs);
        this.onClose();
    };
    TaskRewardView.prototype.onVideoBack = function () {
        // PlayerModel.setGold(this.data["money"] * 2, cc.v2(cc.winSize.width / 2, cc.winSize.height / 2))
    };
    TaskRewardView.prototype.onCloseHandler = function () {
        EventDispath_1.default.send(EventType_1.EventType.TASK_ITEM_CHANG, 0);
        this.onClose();
    };
    TaskRewardView.prototype.onClose = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property([cc.Node])
    ], TaskRewardView.prototype, "iconList", void 0);
    __decorate([
        property(cc.Node)
    ], TaskRewardView.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], TaskRewardView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], TaskRewardView.prototype, "rewardLab", void 0);
    __decorate([
        property(cc.Label)
    ], TaskRewardView.prototype, "xfzsLab", void 0);
    TaskRewardView = __decorate([
        ccclass
    ], TaskRewardView);
    return TaskRewardView;
}(BasePanel_1.default));
exports.default = TaskRewardView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3Rhc2svVGFza1Jld2FyZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSw0REFBdUQ7QUFDdkQsNkRBQXdEO0FBRXhELHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVM7SUFBckQ7UUFBQSxxRUFtRkM7UUFoRkcsY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBSXpCLFlBQU0sR0FBRyxDQUFDLENBQUM7O1FBbUVYLGlCQUFpQjtJQUNyQixDQUFDO0lBbkVHLGlDQUFRLEdBQVI7UUFDSSxLQUFLO1FBQ0wsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELEtBQUs7UUFDTCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEQsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lB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O1lBQ3RDLE1BQU07U0FDVDtRQUVELHFCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFDRCxvQ0FBVyxHQUFYO1FBQ0ksa0dBQWtHO0lBQ3RHLENBQUM7SUFDRCx1Q0FBYyxHQUFkO1FBQ0ksc0JBQVksQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7SUFDbEIsQ0FBQztJQTdFRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvREFDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNNO0lBWFIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW1GbEM7SUFBRCxxQkFBQztDQW5GRCxBQW1GQyxDQW5GMkMsbUJBQVMsR0FtRnBEO2tCQW5Gb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL2NvbnN0cy9HbG9iYWxcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgRWZmZWN0TWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9FZmZlY3RNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1Jld2FyZFZpZXcgZXh0ZW5kcyBCYXNlUGFuZWwge1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBpY29uTGlzdDogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9nZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcmV3YXJkTGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB4ZnpzTGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBkYXRhO1xyXG4gICAgY3JvcElkID0gMDtcclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmihuWPllxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9nZXQsIHRoaXMub25HZXQsIHRoaXMpO1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkdldCwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEudGFza0lkID09IDEpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkTGFiLnN0cmluZyA9IFwiK1wiICsgTnVtYmVyKHRoaXMuZGF0YS5yZWRCZWFuKS50b0ZpeGVkKDIpICsgXCLlhYNcIjtcclxuICAgICAgICAgICAgdGhpcy5pY29uTGlzdFswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnRhc2tJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkTGFiLnN0cmluZyA9IFwiK1wiICsgdGhpcy5kYXRhLmdvbGQ7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbkxpc3RbMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS50YXNrSWQgPT0gMykge1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZExhYi5zdHJpbmcgPSBcIiszXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3JvcElkID0gUGxheWVyTW9kZWwuZ2V0Q3VycmVudE9yZGVyQ3JvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmljb25MaXN0WzJdLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvY3JvcC9pY29uL1wiICsgYCR7dGhpcy5jcm9wSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uTGlzdFsyXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMueGZ6c0xhYi5zdHJpbmcgPSBcIitcIiArdGhpcy5kYXRhLnhmenM7XHJcbiAgICB9XHJcbiAgICBzdGFydFNob3coKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5pbkRhdGFbMF1cclxuICAgIH1cclxuICAgIC8v6aKG5Y+W5aWW5YqxXHJcbiAgICBvbkdldCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS50YXNrSWQgPT0gMSkge1xyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5zZXRNb25leSh0aGlzLmRhdGEudXNlclJlZEJlYW4sIHRoaXMuZGF0YS5yZWRCZWFuKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLnRhc2tJZCA9PSAyKSB7XHJcbiAgICAgICAgICAgIFBsYXllck1vZGVsLnNldEdvbGQodGhpcy5kYXRhLmdvbGQpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEudGFza0lkID09IDMpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0Tm9kZSA9IGNjLnYyKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIpXHJcbiAgICAgICAgICAgIEVmZmVjdE1hbmFnZXIucGxheUNyb3Aoc3RhcnROb2RlLCB0aGlzLmNyb3BJZCk7XHJcbiAgICAgICAgICAgIFBsYXllck1vZGVsLnNldEhvdXNlQWRkQ3JvcCh0aGlzLmNyb3BJZCwgMyk7XHJcblxyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5jaGVja0FkZE9yZGVyKHRoaXMuY3JvcElkLCAzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUub3JkZXJTdWNjZXNzVmlldyk7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfQ09NUExFVEVfVVBEQVRFKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBQbGF5ZXJNb2RlbC5zZXRHb2xkKHRoaXMuZGF0YS5nb2xkKVxyXG4gICAgICAgICAgICAvL+WinuWKoOS9nOeJqVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUGxheWVyTW9kZWwuc2V0WGZ6cyh0aGlzLmRhdGEueGZ6cyk7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XHJcblxyXG4gICAgfVxyXG4gICAgb25WaWRlb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gUGxheWVyTW9kZWwuc2V0R29sZCh0aGlzLmRhdGFbXCJtb25leVwiXSAqIDIsIGNjLnYyKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIpKVxyXG4gICAgfVxyXG4gICAgb25DbG9zZUhhbmRsZXIoKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlRBU0tfSVRFTV9DSEFORywgMCk7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBvbkNsb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
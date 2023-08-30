
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/task/TaskItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6cd8kRDD1KC5Tf/mKOC+jL', 'TaskItem');
// src/game/view/task/TaskItem.ts

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
var UIType_1 = require("../../consts/UIType");
var AItemRenerer_1 = require("./AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaskItem = /** @class */ (function (_super) {
    __extends(TaskItem, _super);
    function TaskItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn1 = null;
        _this.btn2 = null;
        _this.descLb = null;
        _this.rewardLb = null;
        _this.taskIcon = null;
        _this.icon = null;
        _this.frameList = [];
        return _this;
    }
    // onLoad () {}
    TaskItem.prototype.start = function () {
    };
    TaskItem.prototype.dataChanged = function () {
        console.log(this.data);
        this.initUI();
    };
    TaskItem.prototype.initUI = function () {
        this.btn1.active = this.btn2.active = false;
        this.descLb.string = this.data.info + "(" + this.data.userTimes + "/" + this.data.times + ")";
        if (this.index == 0) {
            this.rewardLb.string = "少量红包";
        }
        else if (this.index == 1) {
            this.rewardLb.string = "少量钞票";
        }
        else if (this.index == 2) {
            this.rewardLb.string = "随机作物 ×3";
        }
        this.taskIcon.spriteFrame = this.frameList[this.index];
        this.icon.spriteFrame = this.frameList[this.index];
        if (this.data.userTimes >= this.data.times) {
            this.btn1.active = true;
        }
        else {
            this.btn2.active = true;
        }
    };
    TaskItem.prototype.onGet = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.TASK_COMPLETE_BACK, this.onVideoBack, this);
        SDKManager_1.default.toFinishTask(this.data.taskId);
    };
    TaskItem.prototype.onVideoBack = function (data) {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.TASK_COMPLETE_BACK, this.onVideoBack, this);
        var xfzs = 3;
        if (this.data.taskId == 1) {
            UIMananger_1.default.showPanel(UIType_1.default.taskRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, { taskId: this.data.taskId, redBean: data.redBean, userRedBean: data.userRedBean, xfzs: xfzs });
        }
        else if (this.data.taskId == 2) {
            var gold = MkUtils_1.default.randomNM(300, 500);
            UIMananger_1.default.showPanel(UIType_1.default.taskRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, { taskId: this.data.taskId, gold: gold, xfzs: xfzs });
        }
        else if (this.data.taskId == 3) {
            UIMananger_1.default.showPanel(UIType_1.default.taskRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, { taskId: this.data.taskId, cropId: 1, xfzs: xfzs });
        }
        EventDispath_1.default.send(EventType_1.EventType.TASK_UPDATE);
    };
    __decorate([
        property(cc.Node)
    ], TaskItem.prototype, "btn1", void 0);
    __decorate([
        property(cc.Node)
    ], TaskItem.prototype, "btn2", void 0);
    __decorate([
        property(cc.Label)
    ], TaskItem.prototype, "descLb", void 0);
    __decorate([
        property(cc.Label)
    ], TaskItem.prototype, "rewardLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], TaskItem.prototype, "taskIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], TaskItem.prototype, "icon", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], TaskItem.prototype, "frameList", void 0);
    TaskItem = __decorate([
        ccclass
    ], TaskItem);
    return TaskItem;
}(AItemRenerer_1.default));
exports.default = TaskItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3Rhc2svVGFza0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0VBQStEO0FBQy9ELDhFQUEwRTtBQUMxRSxvRUFBK0Q7QUFDL0Qsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUVqRSw0REFBdUQ7QUFFdkQsOENBQXlDO0FBRXpDLCtDQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBcUI7SUFBM0Q7UUFBQSxxRUFxRUM7UUFsRUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFxQixFQUFFLENBQUM7O0lBc0RyQyxDQUFDO0lBckRHLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVTLDhCQUFXLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMs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QUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQ2pJO1FBRUQsc0JBQVksQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBakVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOytDQUNNO0lBZmhCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FxRTVCO0lBQUQsZUFBQztDQXJFRCxBQXFFQyxDQXJFcUMsc0JBQWEsR0FxRWxEO2tCQXJFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IEFJdGVtUmVuZGVyZXIgZnJvbSBcIi4vQUl0ZW1SZW5lcmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrSXRlbSBleHRlbmRzIEFJdGVtUmVuZGVyZXI8c3RyaW5nPiB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG4xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkZXNjTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHJld2FyZExiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgdGFza0ljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgZnJhbWVMaXN0OiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLmJ0bjEuYWN0aXZlID0gdGhpcy5idG4yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IHRoaXMuZGF0YS5pbmZvICsgXCIoXCIgKyB0aGlzLmRhdGEudXNlclRpbWVzICsgXCIvXCIgKyB0aGlzLmRhdGEudGltZXMgKyBcIilcIjtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkTGIuc3RyaW5nID0gXCLlsJHph4/nuqLljIVcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkTGIuc3RyaW5nID0gXCLlsJHph4/pkp7npahcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkTGIuc3RyaW5nID0gXCLpmo/mnLrkvZzniakgw5czXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGFza0ljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmZyYW1lTGlzdFt0aGlzLmluZGV4XTtcclxuICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmZyYW1lTGlzdFt0aGlzLmluZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS51c2VyVGltZXMgPj0gdGhpcy5kYXRhLnRpbWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkdldCgpIHtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlRBU0tfQ09NUExFVEVfQkFDSywgdGhpcy5vblZpZGVvQmFjaywgdGhpcyk7XHJcbiAgICAgICAgU0RLTWFuYWdlci50b0ZpbmlzaFRhc2sodGhpcy5kYXRhLnRhc2tJZCk7XHJcblxyXG4gICAgfVxyXG4gICAgb25WaWRlb0JhY2soZGF0YSkge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5UQVNLX0NPTVBMRVRFX0JBQ0ssIHRoaXMub25WaWRlb0JhY2ssIHRoaXMpO1xyXG4gICAgICAgIGxldCB4ZnpzID0gMztcclxuICAgICAgICBpZiAodGhpcy5kYXRhLnRhc2tJZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS50YXNrUmV3YXJkVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB7IHRhc2tJZDogdGhpcy5kYXRhLnRhc2tJZCwgcmVkQmVhbjogZGF0YS5yZWRCZWFuLCB1c2VyUmVkQmVhbjogZGF0YS51c2VyUmVkQmVhbix4ZnpzOnhmenMgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEudGFza0lkID09IDIpIHtcclxuICAgICAgICAgICAgbGV0IGdvbGQgPSBNS1V0aWxzLnJhbmRvbU5NKDMwMCw1MDApXHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS50YXNrUmV3YXJkVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB7IHRhc2tJZDogdGhpcy5kYXRhLnRhc2tJZCwgZ29sZDogZ29sZCx4ZnpzOnhmenMgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS50YXNrSWQgPT0gMykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnRhc2tSZXdhcmRWaWV3LCBudWxsLCBudWxsLCBVSUVmZmVjdFR5cGUuU0NBTEUsIHsgdGFza0lkOiB0aGlzLmRhdGEudGFza0lkLCBjcm9wSWQ6IDEseGZ6czp4ZnpzIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5UQVNLX1VQREFURSk7XHJcbiAgICB9XHJcbn1cclxuIl19
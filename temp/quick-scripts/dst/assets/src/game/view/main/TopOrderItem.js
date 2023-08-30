
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/TopOrderItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c915aFV+0FJCaa7flq3eyW1', 'TopOrderItem');
// src/game/view/main/TopOrderItem.ts

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
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopOrderItem = /** @class */ (function (_super) {
    __extends(TopOrderItem, _super);
    function TopOrderItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLb = null;
        _this.numLb = null;
        _this.icon = null;
        _this.wc = null;
        return _this;
        // update (dt) {}
    }
    TopOrderItem.prototype.start = function () {
    };
    TopOrderItem.prototype.setData = function (data) {
        this.mData = data;
        this.changeData();
    };
    TopOrderItem.prototype.changeData = function () {
        var _this = this;
        if (this.mData.cropId == 100) {
            this.nameLb.string = "招待顾客";
        }
        else {
            var base = ConfigManager_1.default.getCropById(this.mData.cropId);
            this.nameLb.string = base.name;
        }
        if (this.mData.num >= this.mData.target) {
            this.wc.active = true;
            this.numLb.node.active = false;
        }
        else {
            this.wc.active = false;
            this.numLb.node.active = true;
            this.numLb.string = this.mData.num + "/" + this.mData.target;
        }
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mData.cropId), function (res) {
            _this.icon.spriteFrame = res;
        });
    };
    TopOrderItem.prototype.onClick = function () {
        if (PlayerModel_1.default.guideStep >= 0)
            return;
        if (this.mData.cropId == 100) {
            UIMananger_1.default.showPanel(UIType_1.default.zhaoDaiView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData);
        }
        else {
            if (PlayerModel_1.default.checkCropUnlock(this.mData.cropId)) {
                UIMananger_1.default.showPanel(UIType_1.default.getCropView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData);
            }
            else {
                UIMananger_1.default.showPanel(UIType_1.default.VegetablesUnlockView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData.cropId);
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], TopOrderItem.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], TopOrderItem.prototype, "numLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], TopOrderItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], TopOrderItem.prototype, "wc", void 0);
    TopOrderItem = __decorate([
        ccclass
    ], TopOrderItem);
    return TopOrderItem;
}(cc.Component));
exports.default = TopOrderItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vVG9wT3JkZXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhFQUEwRTtBQUMxRSxvRUFBK0Q7QUFDL0QsNERBQXVEO0FBRXZELDhDQUF5QztBQUV6Qyx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNkRDO1FBMURHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFFBQUUsR0FBWSxJQUFJLENBQUM7O1FBbURuQixpQkFBaUI7SUFDckIsQ0FBQztJQTlDRyw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDhCQUFPLEdBQVAsVUFBUSxJQUFJO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUMvQjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsdUJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNsQzthQUFNO1lBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ2hFO1FBQ0QsaUJBQU8sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLElBQUcsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVEsQ0FBQSxFQUFFLFVBQUMsR0FBRztZQUN2RSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBQ0QsOEJBQU8sR0FBUDtRQUNJLElBQUkscUJBQVcsQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLE9BQU87UUFDdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7WUFDMUIsb0JBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSw4QkFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFeEY7YUFBTTtZQUNILElBQUkscUJBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFFaEQsb0JBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSw4QkFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEY7aUJBQU07Z0JBQ0gsb0JBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDhCQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDdkc7U0FFSjtJQUNMLENBQUM7SUF2REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDQztJQVRGLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E2RGhDO0lBQUQsbUJBQUM7Q0E3REQsQUE2REMsQ0E3RHlDLEVBQUUsQ0FBQyxTQUFTLEdBNkRyRDtrQkE3RG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgeyBvcmRlcl9jb25maWcgfSBmcm9tIFwiLi4vLi4vY29uc3RzL0NDb25zdFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCB7IG9yZGVyQ2FjaGUgfSBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BPcmRlckl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG5hbWVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbnVtTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB3YzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcbiAgICBtRGF0YTtcclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMubURhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEYXRhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1EYXRhLmNyb3BJZCA9PSAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gXCLmi5vlvoXpob7lrqJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYmFzZSA9IENvbmZpZ01hbmFnZXIuZ2V0Q3JvcEJ5SWQodGhpcy5tRGF0YS5jcm9wSWQpO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBiYXNlLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1EYXRhLm51bSA+PSB0aGlzLm1EYXRhLnRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLndjLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubnVtTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLndjLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm51bUxiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5udW1MYi5zdHJpbmcgPSB0aGlzLm1EYXRhLm51bSArIFwiL1wiICsgdGhpcy5tRGF0YS50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jcm9wL2ljb24vXCIgKyBgJHt0aGlzLm1EYXRhLmNyb3BJZH1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPj0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLm1EYXRhLmNyb3BJZCA9PSAxMDApIHtcclxuICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnpoYW9EYWlWaWV3LCBudWxsLCBudWxsLCBVSUVmZmVjdFR5cGUuU0NBTEUsIHRoaXMubURhdGEpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoUGxheWVyTW9kZWwuY2hlY2tDcm9wVW5sb2NrKHRoaXMubURhdGEuY3JvcElkKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5nZXRDcm9wVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB0aGlzLm1EYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5WZWdldGFibGVzVW5sb2NrVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB0aGlzLm1EYXRhLmNyb3BJZClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
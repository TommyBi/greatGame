
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/popView/PopGetCropView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '064dfuqai9Bh4pbzllx6bG8', 'PopGetCropView');
// src/game/view/popView/PopGetCropView.ts

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
var ConfigManager_1 = require("../../manager/ConfigManager");
var EffectManager_1 = require("../../manager/EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//获取作物，获得提示窗口
var PopGetCropView = /** @class */ (function (_super) {
    __extends(PopGetCropView, _super);
    function PopGetCropView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rewardLb = null;
        _this.descLb = null;
        _this.btnClose = null;
        _this.btnOk = null;
        _this.icon = null;
        return _this;
        // update (dt) {}
    }
    PopGetCropView.prototype.onLoad = function () {
    };
    PopGetCropView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        this.initUi();
    };
    PopGetCropView.prototype.startShow = function () {
        this.mData = this.inData[0];
    };
    PopGetCropView.prototype.initUi = function () {
        var _this = this;
        var cfg = ConfigManager_1.default.getCropById(this.mData.id);
        this.descLb.string = "恭喜获得" + this.mData.num + "个" + cfg.name;
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mData.id), function (res) {
            _this.icon.spriteFrame = res;
        });
        this.rewardLb.string = "x" + this.mData.num;
    };
    PopGetCropView.prototype.onClickHandle = function () {
        var startNode = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
        EffectManager_1.default.playCrop(startNode, this.mData.id);
        PlayerModel_1.default.checkAddOrder(this.mData.id, this.mData.num, function () {
            EventDispath_1.default.send(EventType_1.EventType.ORDER_CURRENT_CLOSE);
            // UIMananger.showPanel(UIType.orderSuccessView);
            EventDispath_1.default.send(EventType_1.EventType.ORDER_COMPLETE_UPDATE);
        }, function () {
            EventDispath_1.default.send(EventType_1.EventType.ORDER_CURRENT_UPDATE);
        });
        this.onCloseHandle();
    };
    PopGetCropView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Label)
    ], PopGetCropView.prototype, "rewardLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopGetCropView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopGetCropView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopGetCropView.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopGetCropView.prototype, "icon", void 0);
    PopGetCropView = __decorate([
        ccclass
    ], PopGetCropView);
    return PopGetCropView;
}(BasePanel_1.default));
exports.default = PopGetCropView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3BvcFZpZXcvUG9wR2V0Q3JvcFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSw0REFBdUQ7QUFDdkQsNkRBQXdEO0FBRXhELHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsNkRBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLGFBQWE7QUFFYjtJQUE0QyxrQ0FBUztJQUFyRDtRQUFBLHFFQXdEQztRQXRERyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBYyxJQUFJLENBQUM7O1FBNEN2QixpQkFBaUI7SUFDckIsQ0FBQztJQXpDRywrQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVTLGlDQUFRLEdBQWxCO1FBQ0ksT0FBTztRQUNQLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQUEsaUJBT0M7UUFORyxJQUFJLEdBQUcsR0FBRyx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUM5RCxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsSUFBRyxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBSSxDQUFBLEVBQUUsVUFBQyxHQUFHO1lBQ25FLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtRQUNJLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLHVCQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELHFCQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3JELHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqRCxpREFBaUQ7WUFDakQsc0JBQVksQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3RELENBQUMsRUFBRTtZQUNDLHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLGlCQUFNLEtBQUssV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTztJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNHO0lBWE4sY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQXdEbEM7SUFBRCxxQkFBQztDQXhERCxBQXdEQyxDQXhEMkMsbUJBQVMsR0F3RHBEO2tCQXhEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL2NvbnN0cy9HbG9iYWxcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0VmZmVjdE1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vL+iOt+WPluS9nOeJqe+8jOiOt+W+l+aPkOekuueql+WPo1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BHZXRDcm9wVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICByZXdhcmRMYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgbURhdGE7XHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDlhbPpl63pnaLmnb9cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5DbG9zZSwgdGhpcy5vbkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5PaywgdGhpcy5vbkNsaWNrSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0VWkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tRGF0YSA9IHRoaXMuaW5EYXRhWzBdO1xyXG4gICAgfVxyXG4gICAgaW5pdFVpKCkge1xyXG4gICAgICAgIGxldCBjZmcgPSBDb25maWdNYW5hZ2VyLmdldENyb3BCeUlkKHRoaXMubURhdGEuaWQpO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwi5oGt5Zac6I635b6XXCIgKyB0aGlzLm1EYXRhLm51bSArIFwi5LiqXCIgKyBjZmcubmFtZTtcclxuICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvY3JvcC9pY29uL1wiICsgYCR7dGhpcy5tRGF0YS5pZH1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJld2FyZExiLnN0cmluZyA9IFwieFwiICsgdGhpcy5tRGF0YS5udW07XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrSGFuZGxlKCkge1xyXG4gICAgICAgIGxldCBzdGFydE5vZGUgPSBjYy52MihjYy53aW5TaXplLndpZHRoIC8gMiwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKVxyXG4gICAgICAgIEVmZmVjdE1hbmFnZXIucGxheUNyb3Aoc3RhcnROb2RlLCB0aGlzLm1EYXRhLmlkKTtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5jaGVja0FkZE9yZGVyKHRoaXMubURhdGEuaWQsIHRoaXMubURhdGEubnVtLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5PUkRFUl9DVVJSRU5UX0NMT1NFKTtcclxuICAgICAgICAgICAgLy8gVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLm9yZGVyU3VjY2Vzc1ZpZXcpO1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfQ09NUExFVEVfVVBEQVRFKVxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLk9SREVSX0NVUlJFTlRfVVBEQVRFKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMub25DbG9zZUhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
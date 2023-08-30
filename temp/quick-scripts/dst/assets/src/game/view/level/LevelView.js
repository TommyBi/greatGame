
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/level/LevelView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a7693uzghL9pkmrJdI/foI', 'LevelView');
// src/game/view/level/LevelView.ts

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
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 升级界面
 * TODO:
 * initPropHasList这个方法可以移至更早的登录初始化环节
 */
var LevelView = /** @class */ (function (_super) {
    __extends(LevelView, _super);
    function LevelView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.titleLb = null;
        _this.moneyLb = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.scroller = null;
        _this.scrollerData = [];
        return _this;
    }
    LevelView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.LEVEL_UPDATE, this.updateData, this);
        this.initUI();
    };
    LevelView.prototype.onLoad = function () {
    };
    LevelView.prototype.start = function () {
    };
    LevelView.prototype.startShow = function () {
        this.mData = SDKManager_1.default.getBazaarLevelInfo();
        this.scrollerData = this.mData.jsTaskInfos;
    };
    LevelView.prototype.updateData = function () {
        this.mData = SDKManager_1.default.getBazaarLevelInfo();
        this.scrollerData = this.mData.jsTaskInfos;
        this.initUI();
        UIMananger_1.default.showPanel(UIType_1.default.levelPopView, null, null, UIEffectManager_1.UIEffectType.SCALE, { currentData: this.currentItemData, nextData: this.nextItemData });
    };
    LevelView.prototype.initUI = function () {
        this.titleLb.string = "\u96C6\u5E02" + this.mData.jsLevel + "\u7EA7";
        this.moneyLb.string = this.mData.jsAmount + "元";
        if (this.mData.jsAmount >= 500) {
            this.descLb1.string = "<color=#708FCC>本次活动已结束，现已为您升级为</c><color=#ED522B>5%红包提现比例</color>";
        }
        else {
            this.descLb1.string = "<color=#708FCC>每满</c><color=#ED522B>500元<color=#708FCC>后自动打款至微信钱包</color>";
        }
        var num = 0;
        var isFirst = 1;
        for (var i = 0; i < this.scrollerData.length; i++) {
            var data = this.scrollerData[i];
            data.userOrderNum = this.mData.userOrderNum;
            if (data.userOrderNum >= data.orderNum) {
                this.scrollerData[i]["isFirst"] = isFirst;
                if (isFirst) {
                    this.currentItemData = this.scrollerData[i];
                    if (this.scrollerData[i + 1])
                        this.nextItemData = this.scrollerData[i + 1];
                }
                isFirst = 0;
            }
            num += data.amount;
        }
        this.descLb2.string = "<color=#708FCC>\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u5956\u52B1\u8D8A\u9AD8\uFF0C\u7D2F\u8BA1\u53EF\u5F97</c><color=#ED522B>" + 1120 + "<color=#708FCC>\u5143</color>";
        this.scroller.refreshData(this.scrollerData);
    };
    /** 仅用于关闭操作 */
    LevelView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], LevelView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], LevelView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], LevelView.prototype, "moneyLb", void 0);
    __decorate([
        property(cc.RichText)
    ], LevelView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.RichText)
    ], LevelView.prototype, "descLb2", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], LevelView.prototype, "scroller", void 0);
    LevelView = __decorate([
        ccclass
    ], LevelView);
    return LevelView;
}(BasePanel_1.default));
exports.default = LevelView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2xldmVsL0xldmVsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixvRUFBK0Q7QUFDL0QsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBR2pFLDZEQUF3RDtBQUN4RCw4Q0FBeUM7QUFHekMsaUVBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7O0dBSUc7QUFFSDtJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQWtGQztRQS9FRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUc1QixjQUFRLEdBQXVCLElBQUksQ0FBQztRQUdwQyxrQkFBWSxHQUFHLEVBQUUsQ0FBQzs7SUFpRXRCLENBQUM7SUE5REcsNEJBQVEsR0FBUjtRQUNJLEtBQUs7UUFDTCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDUywwQkFBTSxHQUFoQjtJQUVBLENBQUM7SUFDUyx5QkFBSyxH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QUssQ0FBQzs4Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzhDQUNNO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7OENBQ007SUFHNUI7UUFEQyxRQUFRLENBQUMsNEJBQWtCLENBQUM7K0NBQ087SUFkbkIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWtGN0I7SUFBRCxnQkFBQztDQWxGRCxBQWtGQyxDQWxGc0MsbUJBQVMsR0FrRi9DO2tCQWxGb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IFNvcnRVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL1NvcnRVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9VdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCBBVmlydHVhbFNjcm9sbFZpZXcgZnJvbSBcIi4uL3Rhc2svQVZpcnR1YWxTY3JvbGxWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOWNh+e6p+eVjOmdolxyXG4gKiBUT0RPOlxyXG4gKiBpbml0UHJvcEhhc0xpc3Tov5nkuKrmlrnms5Xlj6/ku6Xnp7voh7Pmm7Tml6nnmoTnmbvlvZXliJ3lp4vljJbnjq/oioJcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGl0bGVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbW9uZXlMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgZGVzY0xiMTogY2MuUmljaFRleHQgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgZGVzY0xiMjogY2MuUmljaFRleHQgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShBVmlydHVhbFNjcm9sbFZpZXcpXHJcbiAgICBzY3JvbGxlcjogQVZpcnR1YWxTY3JvbGxWaWV3ID0gbnVsbDtcclxuXHJcbiAgICBtRGF0YTtcclxuICAgIHNjcm9sbGVyRGF0YSA9IFtdO1xyXG4gICAgY3VycmVudEl0ZW1EYXRhO1xyXG4gICAgbmV4dEl0ZW1EYXRhO1xyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6YCA5Ye6XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5MRVZFTF9VUERBVEUsIHRoaXMudXBkYXRlRGF0YSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2hvdygpIHtcclxuICAgICAgICB0aGlzLm1EYXRhID0gU0RLTWFuYWdlci5nZXRCYXphYXJMZXZlbEluZm8oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxlckRhdGEgPSB0aGlzLm1EYXRhLmpzVGFza0luZm9zO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5tRGF0YSA9IFNES01hbmFnZXIuZ2V0QmF6YWFyTGV2ZWxJbmZvKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY3JvbGxlckRhdGEgPSB0aGlzLm1EYXRhLmpzVGFza0luZm9zO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLmxldmVsUG9wVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB7IGN1cnJlbnREYXRhOiB0aGlzLmN1cnJlbnRJdGVtRGF0YSwgbmV4dERhdGE6IHRoaXMubmV4dEl0ZW1EYXRhIH0pXHJcbiAgICB9XHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZUxiLnN0cmluZyA9IGDpm4bluIIke3RoaXMubURhdGEuanNMZXZlbH3nuqdgXHJcbiAgICAgICAgdGhpcy5tb25leUxiLnN0cmluZyA9IHRoaXMubURhdGEuanNBbW91bnQgKyBcIuWFg1wiO1xyXG4gICAgICAgIGlmICh0aGlzLm1EYXRhLmpzQW1vdW50ID49IDUwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYjEuc3RyaW5nID0gXCI8Y29sb3I9IzcwOEZDQz7mnKzmrKHmtLvliqjlt7Lnu5PmnZ/vvIznjrDlt7LkuLrmgqjljYfnuqfkuLo8L2M+PGNvbG9yPSNFRDUyMkI+NSXnuqLljIXmj5DnjrDmr5Tkvos8L2NvbG9yPlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIxLnN0cmluZyA9IFwiPGNvbG9yPSM3MDhGQ0M+5q+P5ruhPC9jPjxjb2xvcj0jRUQ1MjJCPjUwMOWFgzxjb2xvcj0jNzA4RkNDPuWQjuiHquWKqOaJk+asvuiHs+W+ruS/oemSseWMhTwvY29sb3I+XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIGxldCBpc0ZpcnN0ID0gMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Nyb2xsZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5zY3JvbGxlckRhdGFbaV07XHJcbiAgICAgICAgICAgIGRhdGEudXNlck9yZGVyTnVtID0gdGhpcy5tRGF0YS51c2VyT3JkZXJOdW07XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS51c2VyT3JkZXJOdW0gPj0gZGF0YS5vcmRlck51bSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxlckRhdGFbaV1bXCJpc0ZpcnN0XCJdID0gaXNGaXJzdDtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbURhdGEgPSB0aGlzLnNjcm9sbGVyRGF0YVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxlckRhdGFbaSArIDFdKSB0aGlzLm5leHRJdGVtRGF0YSA9IHRoaXMuc2Nyb2xsZXJEYXRhW2kgKyAxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGaXJzdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG51bSArPSBkYXRhLmFtb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVzY0xiMi5zdHJpbmcgPSBgPGNvbG9yPSM3MDhGQ0M+562J57qn6LaK6auY77yM5aWW5Yqx6LaK6auY77yM57Sv6K6h5Y+v5b6XPC9jPjxjb2xvcj0jRUQ1MjJCPiR7MTEyMH08Y29sb3I9IzcwOEZDQz7lhYM8L2NvbG9yPmBcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5yZWZyZXNoRGF0YSh0aGlzLnNjcm9sbGVyRGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKiDku4XnlKjkuo7lhbPpl63mk43kvZwgKi9cclxuICAgIG9uQnRuQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
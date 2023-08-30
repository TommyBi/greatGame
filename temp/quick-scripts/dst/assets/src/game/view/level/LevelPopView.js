
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/level/LevelPopView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18bc1Eaw+BP0ZnQFXaKg2XZ', 'LevelPopView');
// src/game/view/level/LevelPopView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelPopView = /** @class */ (function (_super) {
    __extends(LevelPopView, _super);
    function LevelPopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_get = null;
        _this.btn_close = null;
        _this.descLab = null;
        _this.moneyLab = null;
        return _this;
        // update (dt) {}
    }
    LevelPopView.prototype.onEnable = function () {
        // 领取
        EventDispath_1.default.on(this.btn_get, this.onGet, this);
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onGet, this);
        this.moneyLab.string = this.data.amount + "元";
        var num = this.nextData.orderNum - this.data.userOrderNum;
        if (num > 0) {
            this.descLab.string = "\u518D\u5B8C\u6210" + num + "\u4E2A\u8BA2\u5355\uFF0C\u96C6\u5E02\u5347\u81F3" + this.nextData.level + "\u7EA7\n\u5373\u53EF\u9886\u53D6" + this.nextData.amount + "\u5143\u63D0\u73B0\u5956\u52B1";
        }
        else {
            this.descLab.string = "可升级到下一级";
        }
    };
    LevelPopView.prototype.start = function () {
    };
    LevelPopView.prototype.startShow = function () {
        this.data = this.inData[0].currentData;
        this.nextData = this.inData[0].nextData;
    };
    //领取奖励
    LevelPopView.prototype.onGet = function () {
        this.onClose();
    };
    LevelPopView.prototype.onClose = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], LevelPopView.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], LevelPopView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], LevelPopView.prototype, "descLab", void 0);
    __decorate([
        property(cc.Label)
    ], LevelPopView.prototype, "moneyLab", void 0);
    LevelPopView = __decorate([
        ccclass
    ], LevelPopView);
    return LevelPopView;
}(BasePanel_1.default));
exports.default = LevelPopView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2xldmVsL0xldmVsUG9wVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRix3RUFBbUU7QUFFbkUsNkRBQXdEO0FBSWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFTO0lBQW5EO1FBQUEscUVBK0NDO1FBNUNHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBYSxJQUFJLENBQUM7O1FBcUMxQixpQkFBaUI7SUFDckIsQ0FBQztJQWpDRywrQkFBUSxHQUFSO1FBQ0ksS0FBSztRQUNMLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxLQUFLO1FBQ0wsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQztRQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQTtRQUN6RCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFFVCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyx1QkFBTSxHQUFHLHdEQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyx3Q0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sbUNBQU8sQ0FBQTtTQUNyRzthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFBO1NBQ2xDO0lBRUwsQ0FBQztJQUNELDRCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsTUFBTTtJQUNOLDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFbkIsQ0FBQztJQUNELDhCQUFPLEdBQVA7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBekNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ087SUFUVCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBK0NoQztJQUFELG1CQUFDO0NBL0NELEFBK0NDLENBL0N5QyxtQkFBUyxHQStDbEQ7a0JBL0NvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFBvcFZpZXcgZXh0ZW5kcyBCYXNlUGFuZWwge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2dldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9jbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkZXNjTGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtb25leUxhYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgZGF0YTtcclxuICAgIG5leHREYXRhO1xyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6aKG5Y+WXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2dldCwgdGhpcy5vbkdldCwgdGhpcyk7XHJcbiAgICAgICAgLy8g6YCA5Ye6XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uR2V0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb25leUxhYi5zdHJpbmcgPSB0aGlzLmRhdGEuYW1vdW50K1wi5YWDXCI7XHJcbiAgICAgICAgbGV0IG51bSA9IHRoaXMubmV4dERhdGEub3JkZXJOdW0gLSB0aGlzLmRhdGEudXNlck9yZGVyTnVtXHJcbiAgICAgICAgaWYgKG51bSA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVzY0xhYi5zdHJpbmcgPSBg5YaN5a6M5oiQJHtudW195Liq6K6i5Y2V77yM6ZuG5biC5Y2H6IezJHt0aGlzLm5leHREYXRhLmxldmVsfee6p1xcbuWNs+WPr+mihuWPliR7dGhpcy5uZXh0RGF0YS5hbW91bnR95YWD5o+Q546w5aWW5YqxYFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY0xhYi5zdHJpbmcgPSBcIuWPr+WNh+e6p+WIsOS4i+S4gOe6p1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuICAgIHN0YXJ0U2hvdygpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmluRGF0YVswXS5jdXJyZW50RGF0YTtcclxuICAgICAgICB0aGlzLm5leHREYXRhID0gdGhpcy5pbkRhdGFbMF0ubmV4dERhdGE7XHJcbiAgICB9XHJcbiAgICAvL+mihuWPluWlluWKsVxyXG4gICAgb25HZXQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XHJcblxyXG4gICAgfVxyXG4gICAgb25DbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
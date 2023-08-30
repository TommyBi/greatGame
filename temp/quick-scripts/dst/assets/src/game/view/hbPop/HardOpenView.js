
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/hbPop/HardOpenView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19b77tMaj9DCY4XyPjMaO2T', 'HardOpenView');
// src/game/view/hbPop/HardOpenView.ts

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
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 打开红包
 * TODO:
 */
var HardOpenView = /** @class */ (function (_super) {
    __extends(HardOpenView, _super);
    function HardOpenView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_open = null;
        _this.numLb = null;
        return _this;
    }
    HardOpenView.prototype.onEnable = function () {
        EventDispath_1.default.on(this.btn_open, this.onOpen, this);
        this.initUI();
    };
    HardOpenView.prototype.startShow = function () {
        this.mData = this.inData[0];
    };
    HardOpenView.prototype.initUI = function () {
        this.numLb.string = Number(this.mData.redBean).toFixed(2) + "元";
    };
    HardOpenView.prototype.onOpen = function () {
        PlayerModel_1.default.setMoney(this.mData.userRedBean, this.mData.redBean);
        // if (this.isFirst) {
        this.onBtnCloseHandle();
    };
    HardOpenView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], HardOpenView.prototype, "btn_open", void 0);
    __decorate([
        property(cc.Label)
    ], HardOpenView.prototype, "numLb", void 0);
    HardOpenView = __decorate([
        ccclass
    ], HardOpenView);
    return HardOpenView;
}(BasePanel_1.default));
exports.default = HardOpenView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2hiUG9wL0hhcmRPcGVuVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRix3RUFBbUU7QUFHbkUsNkRBQXdEO0FBSXhELHVEQUFrRDtBQUc1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7O0dBR0c7QUFFSDtJQUEwQyxnQ0FBUztJQUFuRDtRQUFBLHFFQThCQztRQTVCRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBYSxJQUFJLENBQUM7O0lBMEIzQixDQUFDO0lBdkJHLCtCQUFRLEdBQVI7UUFFSSxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsNkJBQU0sR0FBTjtRQUNJLHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakUsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEI7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSTtJQUpOLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E4QmhDO0lBQUQsbUJBQUM7Q0E5QkQsQUE4QkMsQ0E5QnlDLG1CQUFTLEdBOEJsRDtrQkE5Qm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCB7IGNyb3BfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbnN0cy9DQ29uc3RcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDmiZPlvIDnuqLljIVcclxuICogVE9ETzpcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmRPcGVuVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9vcGVuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG51bUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgbURhdGE7XHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX29wZW4sIHRoaXMub25PcGVuLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNob3coKSB7XHJcbiAgICAgICAgdGhpcy5tRGF0YSA9IHRoaXMuaW5EYXRhWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLm51bUxiLnN0cmluZyA9IE51bWJlcih0aGlzLm1EYXRhLnJlZEJlYW4pLnRvRml4ZWQoMikgKyBcIuWFg1wiO1xyXG4gICAgfVxyXG4gICAgb25PcGVuKCkge1xyXG4gICAgICAgIFBsYXllck1vZGVsLnNldE1vbmV5KHRoaXMubURhdGEudXNlclJlZEJlYW4sIHRoaXMubURhdGEucmVkQmVhbik7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgIHRoaXMub25CdG5DbG9zZUhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/WallPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03985307SRE9p7Blb86Rx86', 'WallPrefab');
// src/game/view/main/WallPrefab.ts

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
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WallPrefab = /** @class */ (function (_super) {
    __extends(WallPrefab, _super);
    function WallPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = null;
        _this.effNode = null;
        return _this;
    }
    // onLoad () {}
    WallPrefab.prototype.start = function () {
        this.effNode.active = false;
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_WALL, this.changeSkin, this);
    };
    WallPrefab.prototype.setData = function (id) {
        if (id === void 0) { id = 1; }
        this.changeSkin(0);
    };
    WallPrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        var id = PlayerModel_1.default.getUIConfig().walllv;
        if (id == 0)
            return;
        MkUtils_1.default.loadSpriteFrame("texture/prop/wall/" + ("0" + id), function (res) {
            if (isLvUp) {
                var arr = _this.effNode.children;
                _this.effNode.active = true;
                for (var i = 0; i < arr.length; i++) {
                    var eff = arr[i].getComponent(sp.Skeleton);
                    eff.animation = "animation";
                }
                MkUtils_1.default.setNodeDelay(_this.node, 5, function () {
                    _this.effNode.active = false;
                });
            }
            _this.img.spriteFrame = res;
        });
    };
    __decorate([
        property(cc.Sprite)
    ], WallPrefab.prototype, "img", void 0);
    __decorate([
        property(cc.Node)
    ], WallPrefab.prototype, "effNode", void 0);
    WallPrefab = __decorate([
        ccclass
    ], WallPrefab);
    return WallPrefab;
}(cc.Component));
exports.default = WallPrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vV2FsbFByZWZhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDREQUF1RDtBQUN2RCx1REFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFtQ0M7UUFoQ0csU0FBRyxHQUFjLElBQUksQ0FBQztRQUV0QixhQUFPLEdBQVksSUFBSSxDQUFDOztJQThCNUIsQ0FBQztJQTdCRyxlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QixzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxFQUFNO1FBQU4sbUJBQUEsRUFBQSxNQUFNO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsK0JBQVUsR0FBVixVQUFXLE1BQVU7UUFBckIsaUJBa0JDO1FBbEJVLHVCQUFBLEVBQUEsVUFBVTtRQUNqQixJQUFJLEVBQUUsR0FBRyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUNwQixpQkFBTyxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsSUFBRyxNQUFJLEVBQUksQ0FBQSxFQUFFLFVBQUMsR0FBRztZQUN6RCxJQUFJLE1BQU0sRUFBRTtnQkFDUixJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQTtnQkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDakMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFBO2lCQUM5QjtnQkFFRCxpQkFBTyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtvQkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQTthQUNMO1lBQ0QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFMUCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBbUM5QjtJQUFELGlCQUFDO0NBbkNELEFBbUNDLENBbkN1QyxFQUFFLENBQUMsU0FBUyxHQW1DbkQ7a0JBbkNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsUHJlZmFiIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaW1nOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBlZmZOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZWZmTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuQ0hBTkdFX1dBTEwsIHRoaXMuY2hhbmdlU2tpbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShpZCA9IDEpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVNraW4oMCk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTa2luKGlzTHZVcCA9IDEpIHtcclxuICAgICAgICBsZXQgaWQgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLndhbGxsdjtcclxuICAgICAgICBpZiAoaWQgPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL3dhbGwvXCIgKyBgMCR7aWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNMdlVwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5lZmZOb2RlLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVmZk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVmZiA9IGFycltpXS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVmZi5hbmltYXRpb24gPSBcImFuaW1hdGlvblwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgNSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbWcuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/FencePrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ca30YLg5hLzaO/iDTCeBqk', 'FencePrefab');
// src/game/view/main/FencePrefab.ts

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
var FencePrefab = /** @class */ (function (_super) {
    __extends(FencePrefab, _super);
    function FencePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img1 = null;
        _this.img2 = null;
        _this.effNode = null;
        return _this;
    }
    FencePrefab.prototype.onLoad = function () {
        this.effNode.active = false;
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_FENCE, this.changeSkin, this);
    };
    FencePrefab.prototype.start = function () {
    };
    FencePrefab.prototype.setData = function (id) {
        if (id === void 0) { id = 1; }
        this.changeSkin(0);
    };
    FencePrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        var id = PlayerModel_1.default.getUIConfig().fencelv;
        if (id == 0)
            return;
        MkUtils_1.default.loadSpriteFrame("texture/prop/fence/" + ("0" + id + "_01"), function (res) {
            _this.img1.spriteFrame = res;
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
        });
        MkUtils_1.default.loadSpriteFrame("texture/prop/fence/" + ("0" + id + "_02"), function (res) {
            _this.img2.spriteFrame = res;
        });
    };
    __decorate([
        property(cc.Sprite)
    ], FencePrefab.prototype, "img1", void 0);
    __decorate([
        property(cc.Sprite)
    ], FencePrefab.prototype, "img2", void 0);
    __decorate([
        property(cc.Node)
    ], FencePrefab.prototype, "effNode", void 0);
    FencePrefab = __decorate([
        ccclass
    ], FencePrefab);
    return FencePrefab;
}(cc.Component));
exports.default = FencePrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vRmVuY2VQcmVmYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSw0REFBdUQ7QUFDdkQsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMkNDO1FBeENHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixhQUFPLEdBQVksSUFBSSxDQUFDOztJQW9DNUIsQ0FBQztJQWxDRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBTTtRQUFOLG1CQUFBLEVBQUEsTUFBTTtRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELGdDQUFVLEdBQVYsVUFBVyxNQUFVO1FBQXJCLGlCQXFCQztRQXJCVSx1QkFBQSxFQUFBLFVBQVU7UUFDakIsSUFBSSxFQUFFLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxFQUFFLElBQUksQ0FBQztZQUFFLE9BQU87UUFDcEIsaUJBQU8sQ0FBQyxlQUFlLENBQUMscUJBQXFCLElBQUcsTUFBSSxFQUFFLFFBQUssQ0FBQSxFQUFFLFVBQUMsR0FBRztZQUM3RCxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDNUIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUE7Z0JBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2pDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMzQyxHQUFHLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQTtpQkFDOUI7Z0JBRUQsaUJBQU8sQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7b0JBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLENBQUE7YUFDTDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUJBQU8sQ0FBQyxlQUFlLENBQUMscUJBQXFCLElBQUcsTUFBSSxFQUFFLFFBQUssQ0FBQSxFQUFFLFVBQUMsR0FBRztZQUM3RCxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0c7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDRztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBUFAsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTJDL0I7SUFBRCxrQkFBQztDQTNDRCxBQTJDQyxDQTNDd0MsRUFBRSxDQUFDLFNBQVMsR0EyQ3BEO2tCQTNDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVuY2VQcmVmYWIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpbWcxOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGltZzI6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGVmZk5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmVmZk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNIQU5HRV9GRU5DRSwgdGhpcy5jaGFuZ2VTa2luLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShpZCA9IDEpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVNraW4oMCk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTa2luKGlzTHZVcCA9IDEpIHtcclxuICAgICAgICBsZXQgaWQgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLmZlbmNlbHY7XHJcbiAgICAgICAgaWYgKGlkID09IDApIHJldHVybjtcclxuICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvcHJvcC9mZW5jZS9cIiArIGAwJHtpZH1fMDFgLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nMS5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgaWYgKGlzTHZVcCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuZWZmTm9kZS5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lZmZOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmYgPSBhcnJbaV0uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBlZmYuYW5pbWF0aW9uID0gXCJhbmltYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgNSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvcHJvcC9mZW5jZS9cIiArIGAwJHtpZH1fMDJgLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nMi5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
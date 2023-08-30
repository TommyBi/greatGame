
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/ScarecrowPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6dbd3MgXZOFJBomC1dmxhu', 'ScarecrowPrefab');
// src/game/view/main/ScarecrowPrefab.ts

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
var ScarecrowPrefab = /** @class */ (function (_super) {
    __extends(ScarecrowPrefab, _super);
    function ScarecrowPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = null;
        _this.lvUpEff = null;
        return _this;
    }
    // onLoad () {}
    ScarecrowPrefab.prototype.start = function () {
        this.lvUpEff.node.active = false;
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_SCARECROW, this.changeSkin, this);
    };
    ScarecrowPrefab.prototype.setData = function (id) {
        if (id === void 0) { id = 1; }
        this.changeSkin(0);
    };
    ScarecrowPrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        var id = PlayerModel_1.default.getUIConfig().scarecrowlv;
        if (id == 0)
            return;
        MkUtils_1.default.loadSpriteFrame("texture/prop/scarecrow/" + ("0" + id), function (res) {
            _this.img.spriteFrame = res;
            if (isLvUp) {
                _this.lvUpEff.node.active = true;
                _this.lvUpEff.animation = "animation";
            }
        });
    };
    __decorate([
        property(cc.Sprite)
    ], ScarecrowPrefab.prototype, "img", void 0);
    __decorate([
        property(sp.Skeleton)
    ], ScarecrowPrefab.prototype, "lvUpEff", void 0);
    ScarecrowPrefab = __decorate([
        ccclass
    ], ScarecrowPrefab);
    return ScarecrowPrefab;
}(cc.Component));
exports.default = ScarecrowPrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vU2NhcmVjcm93UHJlZmFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUU1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTRCQztRQXpCRyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBZ0IsSUFBSSxDQUFDOztJQXVCaEMsQ0FBQztJQXRCRyxlQUFlO0lBRWYsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakMsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxFQUFNO1FBQU4sbUJBQUEsRUFBQSxNQUFNO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBQ0Qsb0NBQVUsR0FBVixVQUFXLE1BQVU7UUFBckIsaUJBV0M7UUFYVSx1QkFBQSxFQUFBLFVBQVU7UUFFakIsSUFBSSxFQUFFLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQztZQUFFLE9BQU87UUFDcEIsaUJBQU8sQ0FBQyxlQUFlLENBQUMseUJBQXlCLElBQUcsTUFBSSxFQUFJLENBQUEsRUFBRSxVQUFDLEdBQUc7WUFDOUQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQzNCLElBQUksTUFBTSxFQUFFO2dCQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQzthQUN4QztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0RBQ007SUFMWCxlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBNEJuQztJQUFELHNCQUFDO0NBNUJELEFBNEJDLENBNUI0QyxFQUFFLENBQUMsU0FBUyxHQTRCeEQ7a0JBNUJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhcmVjcm93UHJlZmFiIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaW1nOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgbHZVcEVmZjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5sdlVwRWZmLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNIQU5HRV9TQ0FSRUNST1csIHRoaXMuY2hhbmdlU2tpbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShpZCA9IDEpIHtcclxuICAgICAgIHRoaXMuY2hhbmdlU2tpbigwKVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU2tpbihpc0x2VXAgPSAxKSB7XHJcblxyXG4gICAgICAgIGxldCBpZCA9IFBsYXllck1vZGVsLmdldFVJQ29uZmlnKCkuc2NhcmVjcm93bHY7XHJcbiAgICAgICAgaWYgKGlkID09IDApIHJldHVybjtcclxuICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvcHJvcC9zY2FyZWNyb3cvXCIgKyBgMCR7aWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltZy5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgaWYgKGlzTHZVcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sdlVwRWZmLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubHZVcEVmZi5hbmltYXRpb24gPSBcImFuaW1hdGlvblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
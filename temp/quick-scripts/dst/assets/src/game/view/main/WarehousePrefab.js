
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/WarehousePrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '356f9xbDbVAPrRPv9pIHuqp', 'WarehousePrefab');
// src/game/view/main/WarehousePrefab.ts

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
var WarehousePrefab = /** @class */ (function (_super) {
    __extends(WarehousePrefab, _super);
    function WarehousePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = null;
        _this.effNode = null;
        // onLoad () {}
        _this.mId = 0;
        return _this;
    }
    WarehousePrefab.prototype.start = function () {
        this.effNode.active = false;
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_WAREHOUSE, this.changeSkin, this);
    };
    WarehousePrefab.prototype.setData = function (id) {
        if (id === void 0) { id = 1; }
        this.changeSkin(0);
    };
    WarehousePrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        this.mId = PlayerModel_1.default.getUIConfig().warehouselv;
        MkUtils_1.default.loadSpriteFrame("texture/prop/warehouse/" + ("0" + this.mId), function (res) {
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
    ], WarehousePrefab.prototype, "img", void 0);
    __decorate([
        property(cc.Node)
    ], WarehousePrefab.prototype, "effNode", void 0);
    WarehousePrefab = __decorate([
        ccclass
    ], WarehousePrefab);
    return WarehousePrefab;
}(cc.Component));
exports.default = WarehousePrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vV2FyZWhvdXNlUHJlZmFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNERBQXVEO0FBQ3ZELHVEQUFrRDtBQUU1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQWE1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW1DQztRQWhDRyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZUFBZTtRQUNmLFNBQUcsR0FBRyxDQUFDLENBQUM7O0lBNEJaLENBQUM7SUEzQkcsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QixzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLEVBQU07UUFBTixtQkFBQSxFQUFBLE1BQU07UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsTUFBVTtRQUFyQixpQkFpQkM7UUFqQlUsdUJBQUEsRUFBQSxVQUFVO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDakQsaUJBQU8sQ0FBQyxlQUFlLENBQUMseUJBQXlCLElBQUcsTUFBSSxJQUFJLENBQUMsR0FBSyxDQUFBLEVBQUUsVUFBQyxHQUFHO1lBQ3BFLElBQUksTUFBTSxFQUFFO2dCQUNSLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFBO2dCQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNqQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUE7aUJBQzlCO2dCQUVELGlCQUFPLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO29CQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFBO2FBQ0w7WUFDRCxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0U7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDTTtJQUxQLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FtQ25DO0lBQUQsc0JBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQzRDLEVBQUUsQ0FBQyxTQUFTLEdBbUN4RDtrQkFuQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2FyZUhvdXNlQ29uZmlnIHtcclxuICAgIGx2OiBudW1iZXIsLy/ku5PlupPnrYnnuqdcclxuICAgIGNyb3BMaXN0OiBzdG9yZUNvbmZpZ1tdXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBzdG9yZUNvbmZpZyB7XHJcbiAgICBjcm9wSWQ6IG51bWJlciwvL+S9nOeJqUlEXHJcbiAgICBudW06IG51bWJlciwvL+S9nOeJqeaVsOmHj1xyXG4gICAgcHV0X29uX251bTogbnVtYmVyLC8v5L2c54mp5LiK5p625pWw6YePXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhcmVob3VzZVByZWZhYiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGltZzogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZWZmTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIG1JZCA9IDA7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmVmZk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNIQU5HRV9XQVJFSE9VU0UsIHRoaXMuY2hhbmdlU2tpbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShpZCA9IDEpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVNraW4oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2tpbihpc0x2VXAgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5tSWQgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLndhcmVob3VzZWx2O1xyXG4gICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL3dhcmVob3VzZS9cIiArIGAwJHt0aGlzLm1JZH1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0x2VXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSB0aGlzLmVmZk5vZGUuY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIHRoaXMuZWZmTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmID0gYXJyW2ldLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmLmFuaW1hdGlvbiA9IFwiYW5pbWF0aW9uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW1nLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/warehouse/WarehouseItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bed78OSIfNCbL1iRYw3UnQM', 'WarehouseItem');
// src/game/view/warehouse/WarehouseItem.ts

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
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WarehouseItem = /** @class */ (function (_super) {
    __extends(WarehouseItem, _super);
    function WarehouseItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uImgCrop = null;
        _this.ulabelRepertory = null; // 库存
        _this.ulabelName = null;
        return _this;
    }
    WarehouseItem.prototype.onLoad = function () {
        // EventDispath.on(this.node, this.onSelect, this);
    };
    WarehouseItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    WarehouseItem.prototype.initUI = function () {
        var _this = this;
        var cropCfg = ConfigManager_1.default.getCropById(this.data.cropId);
        this.ulabelName.string = "" + cropCfg.name;
        this.ulabelRepertory.string = "\u6570\u91CF:" + this.data.num;
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.data.cropId), function (res) {
            _this.uImgCrop.spriteFrame = res;
        });
    };
    WarehouseItem.prototype.onSelect = function () {
        // cc.log("点击了item");
    };
    WarehouseItem.prototype.onDestroy = function () {
        // EventDispath.removeEventListeners(this);
    };
    __decorate([
        property(cc.Sprite)
    ], WarehouseItem.prototype, "uImgCrop", void 0);
    __decorate([
        property(cc.Label)
    ], WarehouseItem.prototype, "ulabelRepertory", void 0);
    __decorate([
        property(cc.Label)
    ], WarehouseItem.prototype, "ulabelName", void 0);
    WarehouseItem = __decorate([
        ccclass
    ], WarehouseItem);
    return WarehouseItem;
}(AItemRenerer_1.default));
exports.default = WarehouseItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3dhcmVob3VzZS9XYXJlaG91c2VJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xGLDREQUF1RDtBQUN2RCw2REFBd0Q7QUFFeEQscURBQWlEO0FBRTNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFxQjtJQUFoRTtRQUFBLHFFQWtDQztRQS9CRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLHFCQUFlLEdBQWEsSUFBSSxDQUFDLENBQUcsS0FBSztRQUd6QyxnQkFBVSxHQUFhLElBQUksQ0FBQzs7SUF5QmhDLENBQUM7SUF2QkcsOEJBQU0sR0FBTjtRQUNJLG1EQUFtRDtJQUN2RCxDQUFDO0lBQ1MsbUNBQVcsR0FBckI7UUFDSSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCw4QkFBTSxHQUFOO1FBQUEsaUJBT0M7UUFORyxJQUFJLE9BQU8sR0FBRyx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUcsT0FBTyxDQUFDLElBQU0sQ0FBQztRQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxrQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUssQ0FBQztRQUNwRCxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsSUFBRyxLQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBUSxDQUFBLEVBQUUsVUFBQyxHQUFHO1lBQ3RFLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0kscUJBQXFCO0lBQ3pCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksMkNBQTJDO0lBQy9DLENBQUM7SUE5QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNjO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ1M7SUFUWCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBa0NqQztJQUFELG9CQUFDO0NBbENELEFBa0NDLENBbEMwQyxzQkFBYSxHQWtDdkQ7a0JBbENvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHN0b3JlQ29uZmlnIH0gZnJvbSBcIi4uL21haW4vV2FyZWhvdXNlUHJlZmFiXCI7XHJcbmltcG9ydCBBSXRlbVJlbmRlcmVyIGZyb20gXCIuLi90YXNrL0FJdGVtUmVuZXJlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhcmVob3VzZUl0ZW0gZXh0ZW5kcyBBSXRlbVJlbmRlcmVyPHN0cmluZz4ge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICB1SW1nQ3JvcDogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB1bGFiZWxSZXBlcnRvcnk6IGNjLkxhYmVsID0gbnVsbDsgICAvLyDlupPlrZhcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB1bGFiZWxOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5vbih0aGlzLm5vZGUsIHRoaXMub25TZWxlY3QsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIGluaXRVSSgpIHtcclxuICAgICAgICBsZXQgY3JvcENmZyA9IENvbmZpZ01hbmFnZXIuZ2V0Q3JvcEJ5SWQodGhpcy5kYXRhLmNyb3BJZCk7XHJcbiAgICAgICAgdGhpcy51bGFiZWxOYW1lLnN0cmluZyA9IGAke2Nyb3BDZmcubmFtZX1gO1xyXG4gICAgICAgIHRoaXMudWxhYmVsUmVwZXJ0b3J5LnN0cmluZyA9IGDmlbDph486JHt0aGlzLmRhdGEubnVtfWA7XHJcbiAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2Nyb3AvaWNvbi9cIiArIGAke3RoaXMuZGF0YS5jcm9wSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVJbWdDcm9wLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNjLmxvZyhcIueCueWHu+S6hml0ZW1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5yZW1vdmVFdmVudExpc3RlbmVycyh0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/com/RoleController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d402M3wOBIupSBVFIF2td0', 'RoleController');
// src/game/com/RoleController.ts

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
var SortUtils_1 = require("../../framework/tools/SortUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RoleController = /** @class */ (function (_super) {
    __extends(RoleController, _super);
    function RoleController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.isShort = 0;
        _this.toatl = 0;
        return _this;
    }
    RoleController.prototype.start = function () {
    };
    RoleController.prototype.update = function (dt) { };
    RoleController.prototype.lateUpdate = function (dt) {
        this.isShort++;
        if (this.isShort >= 10) {
            var arr = this.node.children;
            // SortUtils.quickSort(arr, "y");
            SortUtils_1.default.bubbleSort(arr, "y");
            this.isShort = 0;
            var len = arr.length;
            for (var i = 0; i < len; i++) {
                arr[i].zIndex = i;
            }
        }
    };
    RoleController = __decorate([
        ccclass
    ], RoleController);
    return RoleController;
}(cc.Component));
exports.default = RoleController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb20vUm9sZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkRBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBK0JDO1FBNUJHLGVBQWU7UUFDZixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osV0FBSyxHQUFHLENBQUMsQ0FBQzs7SUEwQmQsQ0FBQztJQXpCRyw4QkFBSyxHQUFMO0lBR0EsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxFQUFFLElBQUksQ0FBQztJQUVKLG1DQUFVLEdBQXBCLFVBQXFCLEVBQVU7UUFFM0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBR2YsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUM3QixpQ0FBaUM7WUFDakMsbUJBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBRWpCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDckI7U0FDSjtJQUNMLENBQUM7SUE5QmdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErQmxDO0lBQUQscUJBQUM7Q0EvQkQsQUErQkMsQ0EvQjJDLEVBQUUsQ0FBQyxTQUFTLEdBK0J2RDtrQkEvQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU29ydFV0aWxzIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdG9vbHMvU29ydFV0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9sZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIGlzU2hvcnQgPSAwO1xyXG4gICAgdG9hdGwgPSAwO1xyXG4gICAgc3RhcnQoKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHsgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsYXRlVXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5pc1Nob3J0Kys7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvcnQgPj0gMTApIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgLy8gU29ydFV0aWxzLnF1aWNrU29ydChhcnIsIFwieVwiKTtcclxuICAgICAgICAgICAgU29ydFV0aWxzLmJ1YmJsZVNvcnQoYXJyLCBcInlcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzU2hvcnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxlbiA9IGFyci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFycltpXS56SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
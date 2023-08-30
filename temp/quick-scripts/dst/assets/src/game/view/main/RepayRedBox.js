
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/RepayRedBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3845RM9W9NCIexv2gOIGWm', 'RepayRedBox');
// src/game/view/main/RepayRedBox.ts

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
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//回馈红包
var RepayRedBox = /** @class */ (function (_super) {
    __extends(RepayRedBox, _super);
    function RepayRedBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pro = null;
        _this.icon = null;
        _this.proLb = null;
        _this.descLb = null;
        return _this;
    }
    RepayRedBox.prototype.onLoad = function () {
    };
    // <color=#000000>145</c><color=#EC5454>领取</color>
    RepayRedBox.prototype.start = function () {
        EventDispath_1.default.on(this.node, this.onClick, this);
    };
    RepayRedBox.prototype.onClick = function () {
    };
    RepayRedBox.prototype.iconAction = function () {
        this.icon.stopAllActions();
        ComponentHelper_1.default.setHeartAction(this.icon);
    };
    __decorate([
        property(cc.ProgressBar)
    ], RepayRedBox.prototype, "pro", void 0);
    __decorate([
        property(cc.Node)
    ], RepayRedBox.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], RepayRedBox.prototype, "proLb", void 0);
    __decorate([
        property(cc.RichText)
    ], RepayRedBox.prototype, "descLb", void 0);
    RepayRedBox = __decorate([
        ccclass
    ], RepayRedBox);
    return RepayRedBox;
}(cc.Component));
exports.default = RepayRedBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vUmVwYXlSZWRCb3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0VBQW1FO0FBQ25FLDRFQUF1RTtBQUdqRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxNQUFNO0FBRU47SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUF5QkM7UUF0QkcsU0FBRyxHQUFtQixJQUFJLENBQUM7UUFFM0IsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBZ0IsSUFBSSxDQUFDOztJQWdCL0IsQ0FBQztJQWJHLDRCQUFNLEdBQU47SUFDQSxDQUFDO0lBQ0Qsa0RBQWtEO0lBQ2xELDJCQUFLLEdBQUw7UUFDSSxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELDZCQUFPLEdBQVA7SUFDQSxDQUFDO0lBQ0QsZ0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IseUJBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs0Q0FDRTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQ0FDSztJQVRWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F5Qi9CO0lBQUQsa0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QndDLEVBQUUsQ0FBQyxTQUFTLEdBeUJwRDtrQkF6Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlclwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLy/lm57ppojnuqLljIVcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwYXlSZWRCb3ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHBybzogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpY29uOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb0xiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXHJcbiAgICBkZXNjTGI6IGNjLlJpY2hUZXh0ID0gbnVsbDtcclxuXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gICAgLy8gPGNvbG9yPSMwMDAwMDA+MTQ1PC9jPjxjb2xvcj0jRUM1NDU0PumihuWPljwvY29sb3I+XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5ub2RlLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25DbGljaygpIHtcclxuICAgIH1cclxuICAgIGljb25BY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLnNldEhlYXJ0QWN0aW9uKHRoaXMuaWNvbik7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
"use strict";
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
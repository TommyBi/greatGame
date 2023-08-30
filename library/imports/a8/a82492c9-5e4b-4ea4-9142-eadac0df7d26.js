"use strict";
cc._RF.push(module, 'a8249LJXktOpJFC6trA330m', 'TaskView');
// src/game/view/task/TaskView.ts

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
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var AVirtualScrollView_1 = require("./AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 升级界面
 * TODO:
 * initPropHasList这个方法可以移至更早的登录初始化环节
 */
var TaskView = /** @class */ (function (_super) {
    __extends(TaskView, _super);
    function TaskView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.scroller = null;
        return _this;
    }
    TaskView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.TASK_UPDATE, this.initUI, this);
        this.initUI();
    };
    TaskView.prototype.onLoad = function () {
    };
    TaskView.prototype.start = function () {
    };
    TaskView.prototype.startShow = function () {
    };
    TaskView.prototype.initUI = function () {
        this.mData = SDKManager_1.default.getDailyTaskInfo();
        this.scroller.refreshData(this.mData);
    };
    /** 仅用于关闭操作 */
    TaskView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], TaskView.prototype, "btn_close", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], TaskView.prototype, "scroller", void 0);
    TaskView = __decorate([
        ccclass
    ], TaskView);
    return TaskView;
}(BasePanel_1.default));
exports.default = TaskView;

cc._RF.pop();
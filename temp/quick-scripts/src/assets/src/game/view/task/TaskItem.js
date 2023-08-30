"use strict";
cc._RF.push(module, 'a6cd8kRDD1KC5Tf/mKOC+jL', 'TaskItem');
// src/game/view/task/TaskItem.ts

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
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var UIType_1 = require("../../consts/UIType");
var AItemRenerer_1 = require("./AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaskItem = /** @class */ (function (_super) {
    __extends(TaskItem, _super);
    function TaskItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn1 = null;
        _this.btn2 = null;
        _this.descLb = null;
        _this.rewardLb = null;
        _this.taskIcon = null;
        _this.icon = null;
        _this.frameList = [];
        return _this;
    }
    // onLoad () {}
    TaskItem.prototype.start = function () {
    };
    TaskItem.prototype.dataChanged = function () {
        console.log(this.data);
        this.initUI();
    };
    TaskItem.prototype.initUI = function () {
        this.btn1.active = this.btn2.active = false;
        this.descLb.string = this.data.info + "(" + this.data.userTimes + "/" + this.data.times + ")";
        if (this.index == 0) {
            this.rewardLb.string = "少量红包";
        }
        else if (this.index == 1) {
            this.rewardLb.string = "少量钞票";
        }
        else if (this.index == 2) {
            this.rewardLb.string = "随机作物 ×3";
        }
        this.taskIcon.spriteFrame = this.frameList[this.index];
        this.icon.spriteFrame = this.frameList[this.index];
        if (this.data.userTimes >= this.data.times) {
            this.btn1.active = true;
        }
        else {
            this.btn2.active = true;
        }
    };
    TaskItem.prototype.onGet = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.TASK_COMPLETE_BACK, this.onVideoBack, this);
        SDKManager_1.default.toFinishTask(this.data.taskId);
    };
    TaskItem.prototype.onVideoBack = function (data) {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.TASK_COMPLETE_BACK, this.onVideoBack, this);
        var xfzs = 3;
        if (this.data.taskId == 1) {
            UIMananger_1.default.showPanel(UIType_1.default.taskRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, { taskId: this.data.taskId, redBean: data.redBean, userRedBean: data.userRedBean, xfzs: xfzs });
        }
        else if (this.data.taskId == 2) {
            var gold = MkUtils_1.default.randomNM(300, 500);
            UIMananger_1.default.showPanel(UIType_1.default.taskRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, { taskId: this.data.taskId, gold: gold, xfzs: xfzs });
        }
        else if (this.data.taskId == 3) {
            UIMananger_1.default.showPanel(UIType_1.default.taskRewardView, null, null, UIEffectManager_1.UIEffectType.SCALE, { taskId: this.data.taskId, cropId: 1, xfzs: xfzs });
        }
        EventDispath_1.default.send(EventType_1.EventType.TASK_UPDATE);
    };
    __decorate([
        property(cc.Node)
    ], TaskItem.prototype, "btn1", void 0);
    __decorate([
        property(cc.Node)
    ], TaskItem.prototype, "btn2", void 0);
    __decorate([
        property(cc.Label)
    ], TaskItem.prototype, "descLb", void 0);
    __decorate([
        property(cc.Label)
    ], TaskItem.prototype, "rewardLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], TaskItem.prototype, "taskIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], TaskItem.prototype, "icon", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], TaskItem.prototype, "frameList", void 0);
    TaskItem = __decorate([
        ccclass
    ], TaskItem);
    return TaskItem;
}(AItemRenerer_1.default));
exports.default = TaskItem;

cc._RF.pop();
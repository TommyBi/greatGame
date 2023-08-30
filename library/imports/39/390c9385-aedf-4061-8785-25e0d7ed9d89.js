"use strict";
cc._RF.push(module, '390c9OFrt9AYYeFJeDX7Z2J', 'TaskRewardView');
// src/game/view/task/TaskRewardView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var PlayerModel_1 = require("../../datas/PlayerModel");
var EffectManager_1 = require("../../manager/EffectManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaskRewardView = /** @class */ (function (_super) {
    __extends(TaskRewardView, _super);
    function TaskRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.iconList = [];
        _this.btn_get = null;
        _this.btn_close = null;
        _this.rewardLab = null;
        _this.xfzsLab = null;
        _this.cropId = 0;
        return _this;
        // update (dt) {}
    }
    TaskRewardView.prototype.onEnable = function () {
        // 领取
        EventDispath_1.default.on(this.btn_get, this.onGet, this);
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onGet, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.initUI();
    };
    TaskRewardView.prototype.initUI = function () {
        var _this = this;
        if (this.data.taskId == 1) {
            this.rewardLab.string = "+" + Number(this.data.redBean).toFixed(2) + "元";
            this.iconList[0].active = true;
        }
        else if (this.data.taskId == 2) {
            this.rewardLab.string = "+" + this.data.gold;
            this.iconList[1].active = true;
        }
        else if (this.data.taskId == 3) {
            this.rewardLab.string = "+3";
            this.cropId = PlayerModel_1.default.getCurrentOrderCrop();
            this.iconList[2].active = true;
            MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.cropId), function (res) {
                _this.iconList[2].getComponent(cc.Sprite).spriteFrame = res;
            });
        }
        this.xfzsLab.string = "+" + this.data.xfzs;
    };
    TaskRewardView.prototype.startShow = function () {
        this.data = this.inData[0];
    };
    //领取奖励
    TaskRewardView.prototype.onGet = function () {
        if (this.data.taskId == 1) {
            PlayerModel_1.default.setMoney(this.data.userRedBean, this.data.redBean);
        }
        else if (this.data.taskId == 2) {
            PlayerModel_1.default.setGold(this.data.gold);
        }
        else if (this.data.taskId == 3) {
            var startNode = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
            EffectManager_1.default.playCrop(startNode, this.cropId);
            PlayerModel_1.default.setHouseAddCrop(this.cropId, 3);
            PlayerModel_1.default.checkAddOrder(this.cropId, 3, function () {
                // UIMananger.showPanel(UIType.orderSuccessView);
                EventDispath_1.default.send(EventType_1.EventType.ORDER_COMPLETE_UPDATE);
            });
            // PlayerModel.setGold(this.data.gold)
            //增加作物
        }
        PlayerModel_1.default.setXfzs(this.data.xfzs);
        this.onClose();
    };
    TaskRewardView.prototype.onVideoBack = function () {
        // PlayerModel.setGold(this.data["money"] * 2, cc.v2(cc.winSize.width / 2, cc.winSize.height / 2))
    };
    TaskRewardView.prototype.onCloseHandler = function () {
        EventDispath_1.default.send(EventType_1.EventType.TASK_ITEM_CHANG, 0);
        this.onClose();
    };
    TaskRewardView.prototype.onClose = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property([cc.Node])
    ], TaskRewardView.prototype, "iconList", void 0);
    __decorate([
        property(cc.Node)
    ], TaskRewardView.prototype, "btn_get", void 0);
    __decorate([
        property(cc.Node)
    ], TaskRewardView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], TaskRewardView.prototype, "rewardLab", void 0);
    __decorate([
        property(cc.Label)
    ], TaskRewardView.prototype, "xfzsLab", void 0);
    TaskRewardView = __decorate([
        ccclass
    ], TaskRewardView);
    return TaskRewardView;
}(BasePanel_1.default));
exports.default = TaskRewardView;

cc._RF.pop();
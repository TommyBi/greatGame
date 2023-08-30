"use strict";
cc._RF.push(module, '17df3dJHX5EtY+funkCWXCL', 'LevelItem');
// src/game/view/level/LevelItem.ts

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
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelItem = /** @class */ (function (_super) {
    __extends(LevelItem, _super);
    function LevelItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn1 = null;
        _this.btn2 = null;
        _this.targetLb = null;
        _this.moneyLb = null;
        _this.lvLb = null;
        _this.proLb = null;
        _this.pro = null;
        return _this;
    }
    // onLoad () {}
    LevelItem.prototype.start = function () {
    };
    LevelItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    LevelItem.prototype.initUI = function () {
        this.btn1.active = this.btn2.active = false;
        if (this.data.userOrderNum >= this.data.orderNum && this.data.isFirst) {
            this.btn1.active = true;
            this.proLb.string = this.data.orderNum + "/" + this.data.orderNum;
            this.targetLb.string = "\u53EF\u5347\u7EA7";
        }
        else {
            this.btn2.active = true;
            this.proLb.string = this.data.userOrderNum + "/" + this.data.orderNum;
            if (this.data.userOrderNum >= this.data.orderNum) {
                this.targetLb.string = "\u53EF\u5347\u7EA7";
            }
            else {
                this.targetLb.string = "\u518D\u5B8C\u6210" + (this.data.orderNum - this.data.userOrderNum) + "\u4E2A\u8BA2\u5355\u53EF\u5347\u7EA7";
            }
        }
        this.pro.progress = this.data.userOrderNum / this.data.orderNum;
        this.lvLb.string = this.data.level;
        this.moneyLb.string = this.data.amount + "元";
    };
    // "userOrderNum": 10,//用户订单数量
    // "jsLevel": 6,//集市等级
    // "jsTaskInfos": [
    //     {
    //         "level": 1,//集市等级
    //         "orderNum": 10,//集市订单数量
    //         "amount": 5,//奖励金额
    //         "tx_mu": "1%",//提现比例
    //     },
    LevelItem.prototype.onGet = function () {
        SDKManager_1.default.upJSLevel();
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_LEVEL_UP, this.onVideoBack, this);
        // SDKManager.showAd(Global.VIDEO_CONFIG.video17)
    };
    LevelItem.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.SDK_LEVEL_UP, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.LEVEL_UPDATE);
    };
    __decorate([
        property(cc.Node)
    ], LevelItem.prototype, "btn1", void 0);
    __decorate([
        property(cc.Node)
    ], LevelItem.prototype, "btn2", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "targetLb", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "moneyLb", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "lvLb", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "proLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LevelItem.prototype, "pro", void 0);
    LevelItem = __decorate([
        ccclass
    ], LevelItem);
    return LevelItem;
}(AItemRenerer_1.default));
exports.default = LevelItem;

cc._RF.pop();
"use strict";
cc._RF.push(module, '1cc832kSBdIlb/3RP+GUph6', 'BarragePrefab');
// src/game/Barrage/BarragePrefab.ts

"use strict";
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
var DataManager_1 = require("../../framework/manager/DataManager");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var Utils_1 = require("../../framework/tools/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BarragePrefab = /** @class */ (function (_super) {
    __extends(BarragePrefab, _super);
    function BarragePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headIcon = null;
        _this.nameLabel = null;
        _this.moneyLabel = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.bg = null;
        _this.tipsLb = null;
        return _this;
        // private _eventManager = cc["internal"]["eventManager"];
        // private _touchListener: any;
        // InitTouch() {
        //     const EventListener = cc["EventListener"];
        //     this._touchListener = EventListener.create({
        //         event: EventListener.TOUCH_ONE_BY_ONE,
        //         swallowTouches: false,//是否吞噬touch事件
        //         owner: this.bg,
        //         mask: null,
        //         onTouchBegan: this.onTouchStart.bind(this),
        //         onTouchMoved: null,
        //         onTouchEnded: this.onTouchEnded.bind(this),
        //         onTouchCancelled: null,
        //     });
        //     this._eventManager.addListener(this._touchListener, this.bg);
        // }
        // private onTouchStart(touch: cc.Touch, event: cc.Event.EventTouch): boolean {
        //     cc.log("touch start");
        //     //此处必须返回true（表示接触到了节点）,否则TOUCH_MOVE,TOUCH_END,TOUCH_CANCEL不触发。
        //     return true;
        // }
        // private onTouchEnded(touch: cc.Touch, event: cc.Event.EventTouch): void {
        //     cc.log("touch end");
        //     // this.ClickCall(touch);
        // }
        // protected onDestroy(): void {
        //     // super.onDestroy();
        //     this._eventManager.removeListener(this._touchListener, this.node);
        // }
    }
    BarragePrefab.prototype.onLoad = function () {
        // this.node.pauseSystemEvents(true);
        // let bg = this.node.getChildByName("mbg");
        // bg.pauseSystemEvents(true);
        // this.tipsLb.node.pauseSystemEvents(true);
    };
    BarragePrefab.prototype.setData = function () {
        var barrageData = DataManager_1.default.getJson("barrage");
        var data = barrageData[DataManager_1.default._barrageIndex];
        DataManager_1.default._barrageIndex++;
        if (DataManager_1.default._barrageIndex > barrageData.length) {
            DataManager_1.default._barrageIndex = 1;
        }
        // this.nameLabel.string = data["name"];
        // this.moneyLabel.string = data["money"] + "元";
        var num = Utils_1.default.getRandomNum(0, 110);
        var date = 0;
        var money = 0;
        if (num <= 5) {
            date = 10;
        }
        else if (num <= 15) {
            date = 5;
        }
        else if (num <= 30) {
            money = MkUtils_1.default.randomNMF(3, 5);
        }
        else if (num < 55) {
            money = MkUtils_1.default.randomNMF(1, 3);
        }
        else if (num <= 85) {
            money = MkUtils_1.default.randomNMF(0.5, 1);
        }
        else if (num > 85) {
            money = MkUtils_1.default.randomNMF(0.3, 0.5);
        }
        if (date != 0) {
            this.bg.width = 672;
            this.tipsLb.string = "<color=#000000>\u606D\u559C</c><color=#ff0000>" + data["name"] + "</c><color=#000000>\u6210\u529F\u5C06\u7EA2\u5305\u63D0\u73B0\u6BD4\u4F8B\u5347\u81F3<color=#ff0000>" + date + "%</color>";
        }
        else {
            this.bg.width = 480;
            this.tipsLb.string = "<color=#000000>\u606D\u559C</c><color=#ff0000>" + data["name"] + "</c><color=#000000>\u6210\u529F\u63D0\u73B0<color=#ff0000>" + money.toFixed(2) + "</c><color=#000000>\u5143</color>";
        }
        // MKUtils.loadSpriteFrame("texture/barrage/" + data["headshot"], function (spriteFrame) {  //
        //     if (spriteFrame) this.headIcon.spriteFrame = spriteFrame;
        // }.bind(this))
    };
    __decorate([
        property(cc.Sprite)
    ], BarragePrefab.prototype, "headIcon", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "moneyLabel", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "descLb2", void 0);
    __decorate([
        property(cc.Node)
    ], BarragePrefab.prototype, "bg", void 0);
    __decorate([
        property(cc.RichText)
    ], BarragePrefab.prototype, "tipsLb", void 0);
    BarragePrefab = __decorate([
        ccclass
    ], BarragePrefab);
    return BarragePrefab;
}(cc.Component));
exports.default = BarragePrefab;

cc._RF.pop();
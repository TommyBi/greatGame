"use strict";
cc._RF.push(module, 'ed99egAlh1FoqZIt1SHFY2A', 'ClearPestView');
// src/game/view/clearPest/ClearPestView.ts

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
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 除虫
 * TODO:
 */
var ClearPestView = /** @class */ (function (_super) {
    __extends(ClearPestView, _super);
    function ClearPestView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoIcon = null;
        _this.btnLb = null;
        _this.btn_clear = null;
        _this.btn_close = null;
        _this.titleLb = null;
        _this.descLb = null;
        _this.isFirst = true;
        return _this;
    }
    ClearPestView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_clear, this.onClear, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        this.initUI();
    };
    ClearPestView.prototype.startShow = function () {
        this.targetPoint = this.inData[0];
        this.mCfg = this.inData[1];
        this.baseCfg = ConfigManager_1.default.getCropById(this.mCfg.cropId);
        this.isFirst = PlayerModel_1.default.isFirstClearPest;
    };
    ClearPestView.prototype.initUI = function () {
        console.log(this.baseCfg);
        this.titleLb.string = this.baseCfg.name + "除虫";
        this.descLb.string = this.baseCfg.name + "感染了害虫\n需要除虫后恢复生长";
        if (this.isFirst) {
            this.btnLb.x = 0;
            this.videoIcon.active = false;
        }
        else {
            this.btnLb.x = 50;
            this.videoIcon.active = true;
        }
    };
    ClearPestView.prototype.onRewardCfg = function (data) {
        SDKManager_1.default.getRedPackReward(data.configId);
    };
    ClearPestView.prototype.onRewardLost = function () {
        this.onBtnCloseHandle();
    };
    ClearPestView.prototype.onRewardGot = function (data) {
        EventDispath_1.default.send(EventType_1.EventType.SHACHONG, { name: this.baseCfg.name, rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean });
        // UIMananger.showPanel(UIType.popRewardView, null, () => {
        //     // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
        //     EventDispath.send(EventType.SHACHONG);
        // }, UIEffectType.SCALE, 0, { name: this.baseCfg.name, rewardNum: data.redBean, rewardType: 1, totalMoney: data.userRedBean })
        this.onBtnCloseHandle();
    };
    //看视频返回
    ClearPestView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        var name = this.baseCfg.name;
        var rewardNum = 0;
        rewardNum = MkUtils_1.default.randomNM(400, 600);
        EventDispath_1.default.send(EventType_1.EventType.SHACHONG, { name: name, rewardNum: rewardNum, rewardType: 0 });
        this.onBtnCloseHandle();
    };
    ClearPestView.prototype.onClear = function () {
        if (this.isFirst) {
            // EventDispath.send(EventType.JX_SC, { type: 2, point: this.targetPoint });
            PlayerModel_1.default.isFirstClearPest = false;
            this.onVideoBack();
            // this.onBtnCloseHandle();
        }
        else {
            var random = MkUtils_1.default.randomNMF(0, 100);
            if (random < 30) {
                EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
                SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video13);
            }
            else {
                SDKManager_1.default.getWormConfig();
            }
        }
    };
    ClearPestView.prototype.onClose = function () {
        EventDispath_1.default.send(EventType_1.EventType.CLEAR_PEST_CLOSE);
        this.onBtnCloseHandle();
    };
    ClearPestView.prototype.onBtnCloseHandle = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], ClearPestView.prototype, "videoIcon", void 0);
    __decorate([
        property(cc.Node)
    ], ClearPestView.prototype, "btnLb", void 0);
    __decorate([
        property(cc.Node)
    ], ClearPestView.prototype, "btn_clear", void 0);
    __decorate([
        property(cc.Node)
    ], ClearPestView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], ClearPestView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], ClearPestView.prototype, "descLb", void 0);
    ClearPestView = __decorate([
        ccclass
    ], ClearPestView);
    return ClearPestView;
}(BasePanel_1.default));
exports.default = ClearPestView;

cc._RF.pop();
"use strict";
cc._RF.push(module, '91365JdjdxD+rbMWB67ynzl', 'LvUpPopView');
// src/game/view/lvUp/LvUpPopView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var PopView1_1 = require("../popView/PopView1");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
var LvUpPopView = /** @class */ (function (_super) {
    __extends(LvUpPopView, _super);
    function LvUpPopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_video = null;
        _this.btn_lvUp = null;
        _this.btn_close = null;
        _this.needGoldLb = null;
        _this.currentIcon = null;
        _this.nextIcon = null;
        _this.currentLv = null;
        _this.nextLv = null;
        _this.cDescLb = null;
        _this.nDescLb = null;
        _this.titleLb = null;
        _this.proLb = null;
        _this.xingfuLb = null;
        _this.pro = null;
        _this.preVideoNum = 0; //已观看视频次数
        _this.typeIndex = 0;
        _this.resList = ["field", "shelves", "cashier", "pipe", "wall", "road", "scarecrow", "warehouse", "fence"];
        return _this;
    }
    LvUpPopView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_lvUp, this.onLvUp, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.initUI();
    };
    LvUpPopView.prototype.onDisable = function () {
    };
    LvUpPopView.prototype.startShow = function () {
        this.mData = this.inData[0];
        this.typeIndex = this.mData.tabIndex;
    };
    LvUpPopView.prototype.initUI = function () {
        var _this = this;
        this.currentLv.string = "\u5F53\u524D" + this.mData.level + "\u7EA7";
        this.nextLv.string = this.mData.level + 1 + "\u7EA7";
        this.titleLb.string = this.mData.name + "升级";
        if (this.typeIndex == 1) {
            this.currentCfg = ConfigManager_1.default.getFieldCfgByType(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager_1.default.getFieldCfgByType(this.mData.type, this.mData.level + 1);
        }
        else if (this.typeIndex == 2) {
            this.currentCfg = ConfigManager_1.default.getShelveByType(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager_1.default.getShelveByType(this.mData.type, this.mData.level + 1);
        }
        else {
            this.currentCfg = ConfigManager_1.default.getPropById(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager_1.default.getPropById(this.mData.type, this.mData.level + 1);
        }
        this.cDescLb.string = "当前效果：" + this.mData.addDesc;
        this.nDescLb.string = "升级效果：" + this.nextCfg.add_desc;
        this.xingfuLb.string = "x" + this.currentCfg.reward;
        this.needGoldLb.string = this.currentCfg.money + "";
        MkUtils_1.default.loadSpriteFrame("texture/prop/" + this.resList[this.typeIndex - 1] + "/icon/" + ("0" + this.mData["level"]), function (res) {
            _this.currentIcon.spriteFrame = res;
        });
        MkUtils_1.default.loadSpriteFrame("texture/prop/" + this.resList[this.typeIndex - 1] + "/icon/" + ("0" + (this.mData["level"] + 1)), function (res) {
            _this.nextIcon.spriteFrame = res;
        });
        if (this.currentCfg.video_num > 1) {
            this.updateVideoPro();
        }
        else {
            this.pro.node.active = false;
            this.proLb.node.active = false;
        }
    };
    LvUpPopView.prototype.updateVideoPro = function () {
        this.preVideoNum = PlayerModel_1.default.getLvupVideoNum(this.currentCfg.id);
        this.pro.progress = this.preVideoNum / this.currentCfg.video_num;
        this.proLb.string = this.preVideoNum + "/" + this.currentCfg.video_num;
    };
    LvUpPopView.prototype.onLvUp = function () {
        if (this.currentCfg.money <= PlayerModel_1.default.getGold()) {
            PlayerModel_1.default.setGold(-this.currentCfg.money);
            this.lvUpComplete();
        }
        else {
            UIMananger_1.default.showPanel(UIType_1.default.popView1, null, null, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.GOLD2, 1000);
            this.onBtnCloseHandle();
        }
    };
    LvUpPopView.prototype.lvUpComplete = function () {
        switch (this.mData.tabIndex) {
            case 1:
                PlayerModel_1.default.changeFieldSkin(this.mData.index, this.mData.level + 1);
                break;
            case 2:
                PlayerModel_1.default.changeShelveSkin(this.mData.index, this.mData.level + 1);
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                PlayerModel_1.default.setUiLv(this.mData.tabIndex - 3);
                break;
        }
        UIMananger_1.default.showPanel(UIType_1.default.LvUpCompleteView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData, this.nextCfg, this.currentCfg);
        EventDispath_1.default.send(EventType_1.EventType.LVUP_UPDATE);
        this.onBtnCloseHandle();
    };
    LvUpPopView.prototype.onBtnShowAd = function () {
        // if (PlayerModel.getAutoServiceLeftTimes() <= 0) {
        //     MKUtils.alertTips("今日自动服务已达上限，请明日继续使用");
        //     return;
        // }
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video16);
    };
    LvUpPopView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.preVideoNum++;
        if (this.currentCfg.video_num == this.preVideoNum) {
            this.lvUpComplete();
            this.onBtnCloseHandle();
        }
        else {
            MkUtils_1.default.alertTips("\u518D\u770B" + (this.currentCfg.video_num - this.preVideoNum) + "\u4E2A\u89C6\u9891\u5C31\u80FD\u5347\u7EA7\u5566");
            PlayerModel_1.default.saveLvupVideoNum(this.currentCfg.id, this.preVideoNum);
            this.updateVideoPro();
        }
    };
    LvUpPopView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Button)
    ], LvUpPopView.prototype, "btn_video", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpPopView.prototype, "btn_lvUp", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpPopView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "needGoldLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], LvUpPopView.prototype, "currentIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], LvUpPopView.prototype, "nextIcon", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "currentLv", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "nextLv", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "cDescLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "nDescLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "proLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "xingfuLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LvUpPopView.prototype, "pro", void 0);
    LvUpPopView = __decorate([
        ccclass
    ], LvUpPopView);
    return LvUpPopView;
}(BasePanel_1.default));
exports.default = LvUpPopView;

cc._RF.pop();
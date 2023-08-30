"use strict";
cc._RF.push(module, '47b27OSxuFDOr8wWCPi/dQi', 'SettingView');
// src/game/view/setting/SettingView.ts

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
var JSHelper_1 = require("../../../framework/helper/JSHelper");
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var Utils_1 = require("../../../framework/tools/Utils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var PlayerModel_1 = require("../../datas/PlayerModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * TODO:
 * 1、「客服帮助」sdk缺失；
 * 2、用户uid数据缺失，待数据来源提供后完善；
 * 3、「自定义推荐」sdk缺失；
 * 4、「关于我们」sdk缺失；
 * 5、经验对应的升级进度概念目前没有相应的数据，待完善；
 */
var SettingView = /** @class */ (function (_super) {
    __extends(SettingView, _super);
    function SettingView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headIcon = null;
        _this.nameLabel = null;
        _this.idLabel = null;
        _this.btn_sound = null;
        _this.uImgSoundStatusOn = null; // 音乐开
        _this.uImgSoundStatusOff = null; // 音乐关
        _this.btn2 = null; // 音效设置开关
        _this.btn2On = null; // 音效开
        _this.btn2Off = null; // 音效关
        _this.btn_user = null; // 用户协议
        _this.btn_privacy = null; // 隐私政策
        _this.btn_restart = null; // 注销
        _this.btn_close = null; // 关闭面板
        return _this;
    }
    SettingView.prototype.onEnable = function () {
        // 背景音
        EventDispath_1.default.on(this.btn_sound, this.onBtnSoundHandle, this);
        // 音效
        EventDispath_1.default.on(this.btn2, this.onBtnSoundYinXiao, this);
        // 用户协议
        EventDispath_1.default.on(this.btn_user, this.onBtnUserHandle, this);
        // 隐私政策
        EventDispath_1.default.on(this.btn_privacy, this.onBtnPrivacyHandle, this);
        // 客服帮助
        // EventDispath.on(this.btn_helper, this.onBtnHelper, this);
        // // 关于我们
        // EventDispath.on(this.btn_ours, this.onBtnAboutOurs, this);
        // 注销
        EventDispath_1.default.on(this.btn_restart, this.onBtnRestartHandle, this);
        // 退出登录
        // EventDispath.on(this.btn_quit, this.onBtnQuitHandle, this);
        // 关闭面板
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        this.initUI();
    };
    SettingView.prototype.onDisable = function () {
    };
    SettingView.prototype.startShow = function () {
    };
    SettingView.prototype.initUI = function () {
        var headUrl = SDKManager_1.default.getUserIcon();
        if (headUrl && headUrl != "") {
            var self_1 = this;
            cc.assetManager.loadRemote(headUrl, { ext: '.png' }, function (err, texture) {
                if (err) {
                    console.log("头像加载失败", headUrl);
                    return;
                }
                self_1.headIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            });
        }
        var userName = SDKManager_1.default.getUserNickName();
        if (!Utils_1.default.isUndefined(userName) && userName != "") {
            this.nameLabel.string = userName;
        }
        else {
            this.nameLabel.string = "游客";
        }
        this.idLabel.string = "ID:" + SDKManager_1.default.getDeviceId();
        this.refreshBtnSoundState();
        this.refreshBtnSoundYinXiaoState();
        this.refreshPersonalRecommendationState();
    };
    SettingView.prototype.refreshBtnSoundState = function () {
        var result = "";
        if (PlayerModel_1.default.getSoundSwitch() == Global_1.default.SOUND_SWITCH_OPEN) {
            this.uImgSoundStatusOff.active = true;
            this.uImgSoundStatusOn.active = false;
        }
        else {
            this.uImgSoundStatusOff.active = false;
            this.uImgSoundStatusOn.active = true;
        }
    };
    SettingView.prototype.refreshBtnSoundYinXiaoState = function () {
        var result = "";
        if (PlayerModel_1.default.getSoundYinXiaoSwitch() == Global_1.default.SOUND_YINXIAO_SWITCH_OPEN) {
            this.btn2Off.active = false;
            this.btn2On.active = true;
        }
        else {
            this.btn2Off.active = true;
            this.btn2On.active = false;
        }
    };
    /** 设置背景音乐 */
    SettingView.prototype.onBtnSoundHandle = function () {
        var soundResult = PlayerModel_1.default.getSoundSwitch() == Global_1.default.SOUND_SWITCH_OPEN ? Global_1.default.SOUND_SWITCH_CLOSE : Global_1.default.SOUND_SWITCH_OPEN;
        PlayerModel_1.default.setSoundSwitch(soundResult);
        this.refreshBtnSoundState();
        if (PlayerModel_1.default.getSoundSwitch() == Global_1.default.SOUND_SWITCH_OPEN) {
            if (JSHelper_1.default.getLastMusic()) {
                JSHelper_1.default.setResumeMusic();
            }
            else {
                JSHelper_1.default.playMisuc("bgm");
            }
        }
        else {
            JSHelper_1.default.setPauseMusic();
        }
    };
    /** 设置音效 */
    SettingView.prototype.onBtnSoundYinXiao = function () {
        var soundYinXiaoResult = PlayerModel_1.default.getSoundYinXiaoSwitch() == Global_1.default.SOUND_YINXIAO_SWITCH_OPEN ? Global_1.default.SOUND_YINXIAO_SWITCH_CLOSE : Global_1.default.SOUND_YINXIAO_SWITCH_OPEN;
        PlayerModel_1.default.setSoundYinXiaoSwitch(soundYinXiaoResult);
        this.refreshBtnSoundYinXiaoState();
    };
    /** 个性推荐  */
    SettingView.prototype.onBtnPersonalRecommendation = function () {
        var personalRecommResult = PlayerModel_1.default.getPersonRecommSwitch() == Global_1.default.PERSONALRECOMM_SWITCH_OPEN ? Global_1.default.PERSONALRECOMM_SWITCH_OFF : Global_1.default.PERSONALRECOMM_SWITCH_OPEN;
        PlayerModel_1.default.SetPersonRecommSwitch(personalRecommResult);
        this.refreshPersonalRecommendationState();
    };
    /** 刷新个性推荐状态  */
    SettingView.prototype.refreshPersonalRecommendationState = function () {
        var result = "";
        if (PlayerModel_1.default.getPersonRecommSwitch() == Global_1.default.PERSONALRECOMM_SWITCH_OPEN) {
        }
        else {
        }
    };
    SettingView.prototype.onBtnUserHandle = function () {
        SDKManager_1.default.openUserService();
    };
    SettingView.prototype.onBtnPrivacyHandle = function () {
        SDKManager_1.default.openPrivacy();
    };
    SettingView.prototype.onBtnRestartHandle = function () {
        SDKManager_1.default.unBindWX();
    };
    SettingView.prototype.onBtnQuitHandle = function () {
        SDKManager_1.default.unBindWX();
    };
    /** 客服帮助 */
    SettingView.prototype.onBtnHelper = function () {
        SDKManager_1.default.openFeedBack();
    };
    /** 关于我们 */
    SettingView.prototype.onBtnAboutOurs = function () {
    };
    SettingView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "headIcon", void 0);
    __decorate([
        property(cc.Label)
    ], SettingView.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], SettingView.prototype, "idLabel", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "btn_sound", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "uImgSoundStatusOn", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "uImgSoundStatusOff", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "btn2", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "btn2On", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "btn2Off", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "btn_user", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "btn_privacy", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "btn_restart", void 0);
    __decorate([
        property(cc.Node)
    ], SettingView.prototype, "btn_close", void 0);
    SettingView = __decorate([
        ccclass
    ], SettingView);
    return SettingView;
}(BasePanel_1.default));
exports.default = SettingView;

cc._RF.pop();
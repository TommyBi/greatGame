
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/setting/SettingView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3NldHRpbmcvU2V0dGluZ1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsd0RBQW1EO0FBQ25ELDZEQUF3RDtBQUN4RCw4Q0FBeUM7QUFDekMsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7Ozs7O0dBT0c7QUFFSDtJQUF5QywrQkFBUztJQUFsRDtRQUFBLHFFQTRLQztRQXpLRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLHVCQUFpQixHQUFHLElBQUksQ0FBQSxDQUFDLE1BQU07UUFFL0Isd0JBQWtCLEdBQUcsSUFBSSxDQUFBLENBQUEsTUFBTTtRQUcvQixVQUFJLEdBQWMsSUFBSSxDQUFDLENBQUEsU0FBUztRQUVoQyxZQUFNLEdBQVksSUFBSSxDQUFDLENBQUEsTUFBTTtRQUU3QixhQUFPLEdBQVksSUFBSSxDQUFDLENBQUEsTUFBTTtRQUk5QixjQUFRLEdBQWMsSUFBSSxDQUFDLENBQUMsT0FBTztRQUVuQyxpQkFBVyxHQUFjLElBQUksQ0FBQyxDQUFBLE9BQU87UUFFckMsaUJBQVcsR0FBYyxJQUFJLENBQUMsQ0FBQSxLQUFLO1FBRW5DLGVBQVMsR0FBYyxJQUFJLENBQUMsQ0FBQSxPQUFPOztJQTZJdkMsQ0FBQztJQTFJRyw4QkFBUSxHQUFSO1FBQ0ksTUFBTTtRQUNOLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FB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O0lBQ1gsb0NBQWMsR0FBZDtJQUNBLENBQUM7SUFDRCxzQ0FBZ0IsR0FBaEI7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBeEtEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBSXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1U7SUEvQlgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRLL0I7SUFBRCxrQkFBQztDQTVLRCxBQTRLQyxDQTVLd0MsbUJBQVMsR0E0S2pEO2tCQTVLb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU0hlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2hlbHBlci9KU0hlbHBlclwiO1xyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvVXRpbHNcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICogVE9ETzogXHJcbiAqIDHjgIHjgIzlrqLmnI3luK7liqnjgI1zZGvnvLrlpLHvvJtcclxuICogMuOAgeeUqOaIt3VpZOaVsOaNrue8uuWkse+8jOW+heaVsOaNruadpea6kOaPkOS+m+WQjuWujOWWhO+8m1xyXG4gKiAz44CB44CM6Ieq5a6a5LmJ5o6o6I2Q44CNc2Rr57y65aSx77ybXHJcbiAqIDTjgIHjgIzlhbPkuo7miJHku6zjgI1zZGvnvLrlpLHvvJtcclxuICogNeOAgee7j+mqjOWvueW6lOeahOWNh+e6p+i/m+W6puamguW/teebruWJjeayoeacieebuOW6lOeahOaVsOaNru+8jOW+heWujOWWhO+8m1xyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBCYXNlUGFuZWwge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaGVhZEljb246IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBpZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9zb3VuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB1SW1nU291bmRTdGF0dXNPbiA9IG51bGwgLy8g6Z+z5LmQ5byAXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVJbWdTb3VuZFN0YXR1c09mZiA9IG51bGwvLyDpn7PkuZDlhbNcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bjI6IChjYy5Ob2RlKSA9IG51bGw7Ly8g6Z+z5pWI6K6+572u5byA5YWzXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bjJPbjogY2MuTm9kZSA9IG51bGw7Ly8g6Z+z5pWI5byAXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bjJPZmY6IGNjLk5vZGUgPSBudWxsOy8vIOmfs+aViOWFs1xyXG4gICBcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl91c2VyOiAoY2MuTm9kZSkgPSBudWxsOyAvLyDnlKjmiLfljY/orq5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX3ByaXZhY3k6IChjYy5Ob2RlKSA9IG51bGw7Ly8g6ZqQ56eB5pS/562WXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9yZXN0YXJ0OiAoY2MuTm9kZSkgPSBudWxsOy8vIOazqOmUgFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IChjYy5Ob2RlKSA9IG51bGw7Ly8g5YWz6Zet6Z2i5p2/XHJcblxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOiDjOaZr+mfs1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9zb3VuZCwgdGhpcy5vbkJ0blNvdW5kSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICAvLyDpn7PmlYhcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG4yLCB0aGlzLm9uQnRuU291bmRZaW5YaWFvLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g55So5oi35Y2P6K6uXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX3VzZXIsIHRoaXMub25CdG5Vc2VySGFuZGxlLCB0aGlzKTtcclxuICAgICAgICAvLyDpmpDnp4HmlL/nrZZcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fcHJpdmFjeSwgdGhpcy5vbkJ0blByaXZhY3lIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIC8vIOWuouacjeW4ruWKqVxyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9oZWxwZXIsIHRoaXMub25CdG5IZWxwZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIC8vIOWFs+S6juaIkeS7rFxyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9vdXJzLCB0aGlzLm9uQnRuQWJvdXRPdXJzLCB0aGlzKTtcclxuICAgICAgICAvLyDms6jplIBcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fcmVzdGFydCwgdGhpcy5vbkJ0blJlc3RhcnRIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIC8vIOmAgOWHuueZu+W9lVxyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9xdWl0LCB0aGlzLm9uQnRuUXVpdEhhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgLy8g5YWz6Zet6Z2i5p2/XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG4gICAgfVxyXG4gICAgaW5pdFVJKCkge1xyXG5cclxuICAgICAgICBsZXQgaGVhZFVybCA9IFNES01hbmFnZXIuZ2V0VXNlckljb24oKTtcclxuICAgICAgICBpZiAoaGVhZFVybCAmJiBoZWFkVXJsICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShoZWFkVXJsLCB7IGV4dDogJy5wbmcnIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmU6Y2MuVGV4dHVyZTJEKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlpLTlg4/liqDovb3lpLHotKVcIiwgaGVhZFVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5oZWFkSWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IFNES01hbmFnZXIuZ2V0VXNlck5pY2tOYW1lKCk7XHJcbiAgICAgICAgaWYgKCFVdGlscy5pc1VuZGVmaW5lZCh1c2VyTmFtZSkgJiYgdXNlck5hbWUgIT1cIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IHVzZXJOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IFwi5ri45a6iXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlkTGFiZWwuc3RyaW5nID0gXCJJRDpcIitTREtNYW5hZ2VyLmdldERldmljZUlkKCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVmcmVzaEJ0blNvdW5kU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hCdG5Tb3VuZFlpblhpYW9TdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBlcnNvbmFsUmVjb21tZW5kYXRpb25TdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hCdG5Tb3VuZFN0YXRlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5nZXRTb3VuZFN3aXRjaCgpID09IEdsb2JhbC5TT1VORF9TV0lUQ0hfT1BFTikge1xyXG4gICAgICAgICAgICB0aGlzLnVJbWdTb3VuZFN0YXR1c09mZi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVJbWdTb3VuZFN0YXR1c09uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudUltZ1NvdW5kU3RhdHVzT2ZmLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVJbWdTb3VuZFN0YXR1c09uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hCdG5Tb3VuZFlpblhpYW9TdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIlxyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5nZXRTb3VuZFlpblhpYW9Td2l0Y2goKSA9PSBHbG9iYWwuU09VTkRfWUlOWElBT19TV0lUQ0hfT1BFTikge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bjJPZmYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuMk9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idG4yT2ZmLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuMk9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog6K6+572u6IOM5pmv6Z+z5LmQICovXHJcbiAgICBvbkJ0blNvdW5kSGFuZGxlKCkge1xyXG5cclxuICAgICAgICBsZXQgc291bmRSZXN1bHQgPSBQbGF5ZXJNb2RlbC5nZXRTb3VuZFN3aXRjaCgpID09IEdsb2JhbC5TT1VORF9TV0lUQ0hfT1BFTiA/IEdsb2JhbC5TT1VORF9TV0lUQ0hfQ0xPU0UgOiBHbG9iYWwuU09VTkRfU1dJVENIX09QRU47XHJcbiAgICAgICAgUGxheWVyTW9kZWwuc2V0U291bmRTd2l0Y2goc291bmRSZXN1bHQpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEJ0blNvdW5kU3RhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmdldFNvdW5kU3dpdGNoKCkgPT0gR2xvYmFsLlNPVU5EX1NXSVRDSF9PUEVOKSB7XHJcbiAgICAgICAgICAgIGlmIChKU0hlbHBlci5nZXRMYXN0TXVzaWMoKSkge1xyXG4gICAgICAgICAgICAgICAgSlNIZWxwZXIuc2V0UmVzdW1lTXVzaWMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEpTSGVscGVyLnBsYXlNaXN1YyhcImJnbVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEpTSGVscGVyLnNldFBhdXNlTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiuvue9rumfs+aViCAqL1xyXG4gICAgb25CdG5Tb3VuZFlpblhpYW8oKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNvdW5kWWluWGlhb1Jlc3VsdCA9IFBsYXllck1vZGVsLmdldFNvdW5kWWluWGlhb1N3aXRjaCgpID09IEdsb2JhbC5TT1VORF9ZSU5YSUFPX1NXSVRDSF9PUEVOID8gR2xvYmFsLlNPVU5EX1lJTlhJQU9fU1dJVENIX0NMT1NFIDogR2xvYmFsLlNPVU5EX1lJTlhJQU9fU1dJVENIX09QRU47XHJcbiAgICAgICAgUGxheWVyTW9kZWwuc2V0U291bmRZaW5YaWFvU3dpdGNoKHNvdW5kWWluWGlhb1Jlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQnRuU291bmRZaW5YaWFvU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5Liq5oCn5o6o6I2QICAqL1xyXG4gICAgb25CdG5QZXJzb25hbFJlY29tbWVuZGF0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwZXJzb25hbFJlY29tbVJlc3VsdCA9IFBsYXllck1vZGVsLmdldFBlcnNvblJlY29tbVN3aXRjaCgpID09IEdsb2JhbC5QRVJTT05BTFJFQ09NTV9TV0lUQ0hfT1BFTiA/IEdsb2JhbC5QRVJTT05BTFJFQ09NTV9TV0lUQ0hfT0ZGIDogR2xvYmFsLlBFUlNPTkFMUkVDT01NX1NXSVRDSF9PUEVOO1xyXG4gICAgICAgIFBsYXllck1vZGVsLlNldFBlcnNvblJlY29tbVN3aXRjaChwZXJzb25hbFJlY29tbVJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGVyc29uYWxSZWNvbW1lbmRhdGlvblN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIt+aWsOS4quaAp+aOqOiNkOeKtuaAgSAgKi9cclxuICAgIHJlZnJlc2hQZXJzb25hbFJlY29tbWVuZGF0aW9uU3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmdldFBlcnNvblJlY29tbVN3aXRjaCgpID09IEdsb2JhbC5QRVJTT05BTFJFQ09NTV9TV0lUQ0hfT1BFTikge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuVXNlckhhbmRsZSgpIHtcclxuICAgICAgICBTREtNYW5hZ2VyLm9wZW5Vc2VyU2VydmljZSgpO1xyXG4gICAgfVxyXG4gICAgb25CdG5Qcml2YWN5SGFuZGxlKCkge1xyXG4gICAgICAgIFNES01hbmFnZXIub3BlblByaXZhY3koKTtcclxuICAgIH1cclxuICAgIG9uQnRuUmVzdGFydEhhbmRsZSgpIHtcclxuICAgICAgICBTREtNYW5hZ2VyLnVuQmluZFdYKCk7XHJcbiAgICB9XHJcbiAgICBvbkJ0blF1aXRIYW5kbGUoKSB7XHJcbiAgICAgICAgU0RLTWFuYWdlci51bkJpbmRXWCgpO1xyXG4gICAgfVxyXG4gICAgLyoqIOWuouacjeW4ruWKqSAqL1xyXG4gICAgb25CdG5IZWxwZXIoKTogdm9pZCB7XHJcbiAgICAgICAgU0RLTWFuYWdlci5vcGVuRmVlZEJhY2soKVxyXG4gICAgfVxyXG4gICAgLyoqIOWFs+S6juaIkeS7rCAqL1xyXG4gICAgb25CdG5BYm91dE91cnMoKTogdm9pZCB7XHJcbiAgICB9XHJcbiAgICBvbkJ0bkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
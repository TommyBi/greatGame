"use strict";
cc._RF.push(module, 'f060aGxAWpF3ozluLB0qGpk', 'Launcher');
// src/framework/sdk/Launcher.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseSdk_1 = require("./BaseSdk");
var Launcher = /** @class */ (function (_super) {
    __extends(Launcher, _super);
    function Launcher() {
        var _this = _super.call(this) || this;
        console.log("SDK ------------------------------------------>Launcher complete");
        return _this;
    }
    //服务器时间
    Launcher.prototype.getServerTime = function () {
        var time;
        if (this.isAndroid()) {
            console.log("安卓设备", this._basePath_android);
            time = jsb.reflection.callStaticMethod(this._basePath_android, "getCurrentTime", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
            console.log("苹果设备");
        }
        else {
            console.log("未识别设备");
        }
        console.log("服务器时间为", time);
        return time;
    };
    //用户余额
    Launcher.prototype.getUserAmount = function () {
        var m = 0;
        if (this.isAndroid()) {
            m = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserAmount", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        if (!m) {
            m = 0;
        }
        this.systemName();
        console.log("********************用户余额********************", m);
        return m;
    };
    //通关总数
    Launcher.prototype.getSUCCCount = function () {
        var c = 0;
        if (this.isAndroid()) {
            c = jsb.reflection.callStaticMethod(this._moudelPath_android, "getSUCCCount", "()I");
        }
        else if (this.isIphone()) {
        }
        return c;
    };
    //合成上报
    Launcher.prototype.reportSynthetic = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "reportSynthetic", "()V");
        }
        else if (this.isIphone()) {
        }
        this.systemName();
        console.log("******************合成上报******************");
        this.vibrate(100);
    };
    //领红包奖励接口
    Launcher.prototype.getRedPackReward = function (configId, isVideo) {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getRedPackReward", "(Ljava/lang/String;Z)V", configId, isVideo);
        }
        else if (this.isIphone()) {
        }
        this.systemName();
        console.log("******************领红包****************** ID", configId, "  isVideo ", isVideo);
    };
    //获取任务金额和状态
    Launcher.prototype.getTaskListData = function () {
        var t = "";
        if (this.isAndroid()) {
            t = jsb.reflection.callStaticMethod(this._moudelPath_android, "getTaskListData", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        // TaskManager.
        console.log("******************任务金额和状态******************", t);
        return t;
    };
    //任务展示
    Launcher.prototype.getTaskInfo = function (taskId) {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getTaskInfo", "(I)V", taskId);
        }
        else if (this.isIphone()) {
        }
        console.log("******************任务展示******************", taskId);
    };
    //任务领取奖励
    Launcher.prototype.getTaskReward = function (taskId) {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getTaskReward", "(I)V", taskId);
        }
        else if (this.isIphone()) {
        }
        console.log("******************任务展示******************", taskId);
    };
    //气泡提示信息
    Launcher.prototype.getGuideBubblesText = function () {
        var b = "";
        if (this.isAndroid()) {
            b = jsb.reflection.callStaticMethod(this._moudelPath_android, "getGuideBubblesText", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        return b;
    };
    //下次抽奖需要的分数
    Launcher.prototype.getNextDrawScore = function () {
        var s = 0;
        if (this.isAndroid()) {
            s = jsb.reflection.callStaticMethod(this._moudelPath_android, "getNextDrawScore", "()I");
            console.log("下次需要的", s);
        }
        else if (this.isIphone()) {
        }
        return s;
    };
    //提现抽奖的当前分数
    Launcher.prototype.getCurrentScore = function () {
        var s = 0;
        if (this.isAndroid()) {
            s = jsb.reflection.callStaticMethod(this._moudelPath_android, "getCurrentScore", "()I");
            console.log("当前的", s);
        }
        else if (this.isIphone()) {
        }
        return s;
    };
    //微信是否登录
    Launcher.prototype.isWXBind = function () {
        var i = false;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "isWXBind", "()Z");
        }
        else if (this.isIphone()) {
        }
        return i;
    };
    //退出微信登录
    Launcher.prototype.unBindWX = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "unBindWX", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //用户昵称
    Launcher.prototype.getUserNickName = function () {
        var n = undefined;
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserNickName", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        return n;
    };
    //用户头像
    Launcher.prototype.getUserIcon = function () {
        var n = "";
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserIcon", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        return n;
    };
    //隐私政策
    Launcher.prototype.openPrivacy = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openPrivacy", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //用户协议
    Launcher.prototype.openUserService = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openUserService", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //意见反馈
    Launcher.prototype.openFeedBack = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openFeedBack", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //打开提现页面
    Launcher.prototype.openWithdraw = function () {
        console.log("*************************打开提现界面*************************");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openWithdraw", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //震动
    Launcher.prototype.vibrate = function (time) {
        console.log("*************************震动效果*************************");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._baseCocos, "vibrate", "(I)V", time);
        }
        else {
        }
    };
    //测试接口
    Launcher.prototype.testResult = function () {
        var test = "";
        if (this.isAndroid()) {
            var test2 = jsb.reflection.callStaticMethod(this._moudelPath_android, "testResult", "()Ljava/lang/String;");
            console.log("*************************测试接口*****************2222222222222********", test);
        }
        else if (this.isIphone()) {
        }
        console.log("*************************测试接口*************************", test);
        return test;
    };
    return Launcher;
}(BaseSdk_1.default));
exports.default = Launcher;

cc._RF.pop();
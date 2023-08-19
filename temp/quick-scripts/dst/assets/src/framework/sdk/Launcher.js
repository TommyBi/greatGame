
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/sdk/Launcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    Launcher.prototype.getRedPacketReward = function (configId, isVideo) {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getRedPacketReward", "(Ljava/lang/String;Z)V", configId, isVideo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Nkay9MYXVuY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFFaEM7SUFBdUIsNEJBQU87SUFDMUI7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxPQUFPLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7O0lBQ3BGLENBQUM7SUFDRCxPQUFPO0lBQ1AsZ0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDMUc7YUFBSyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO2FBQUk7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELE1BQU07SUFDTixnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3hHO2FBQUssSUFBRyxJQUFJ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QUFELENBM05BLEFBMk5DLENBM05zQixpQkFBTyxHQTJON0I7QUFDRCxrQkFBZSxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNkayBmcm9tIFwiLi9CYXNlU2RrXCI7XG5cbmNsYXNzIExhdW5jaGVyIGV4dGVuZHMgQmFzZVNkayB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0RLIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5MYXVuY2hlciBjb21wbGV0ZVwiKTsgICAgICAgIFxuICAgIH1cbiAgICAvL+acjeWKoeWZqOaXtumXtFxuICAgIGdldFNlcnZlclRpbWUoKXtcbiAgICAgICAgbGV0IHRpbWU7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlronljZPorr7lpIdcIix0aGlzLl9iYXNlUGF0aF9hbmRyb2lkKTtcbiAgICAgICAgICAgIHRpbWUgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2Jhc2VQYXRoX2FuZHJvaWQsXCJnZXRDdXJyZW50VGltZVwiLFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiLueaenOiuvuWkh1wiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacquivhuWIq+iuvuWkh1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIuacjeWKoeWZqOaXtumXtOS4ulwiLHRpbWUpO1xuICAgICAgICByZXR1cm4gdGltZTtcbiAgICB9XG4gICAgLy/nlKjmiLfkvZnpop1cbiAgICBnZXRVc2VyQW1vdW50KCl7XG4gICAgICAgIGxldCBtID0gMDtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBtID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJnZXRVc2VyQW1vdW50XCIsXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKXtcblxuICAgICAgICB9XG4gICAgICAgIGlmKCFtKXtcbiAgICAgICAgICAgIG0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3lzdGVtTmFtZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioq55So5oi35L2Z6aKdKioqKioqKioqKioqKioqKioqKipcIixtKTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuICAgIC8v6YCa5YWz5oC75pWwXG4gICAgZ2V0U1VDQ0NvdW50KCl7XG4gICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBjID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJnZXRTVUNDQ291bnRcIixcIigpSVwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKXtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICAvL+WQiOaIkOS4iuaKpVxuICAgIHJlcG9ydFN5bnRoZXRpYygpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwicmVwb3J0U3ludGhldGljXCIsXCIoKVZcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN5c3RlbU5hbWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirlkIjmiJDkuIrmiqUqKioqKioqKioqKioqKioqKipcIik7XG4gICAgICAgIHRoaXMudmlicmF0ZSgxMDApO1xuICAgIH1cbiAgICAvL+mihue6ouWMheWlluWKseaOpeWPo1xuICAgIGdldFJlZFBhY2tldFJld2FyZChjb25maWdJZDpzdHJpbmcsaXNWaWRlbyA6IGJvb2xlYW4pe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwiZ2V0UmVkUGFja2V0UmV3YXJkXCIsXCIoTGphdmEvbGFuZy9TdHJpbmc7WilWXCIsY29uZmlnSWQsaXNWaWRlbyk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN5c3RlbU5hbWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirpoobnuqLljIUqKioqKioqKioqKioqKioqKiogSURcIixjb25maWdJZCxcIiAgaXNWaWRlbyBcIixpc1ZpZGVvKTtcbiAgICB9XG4gICAgLy/ojrflj5bku7vliqHph5Hpop3lkoznirbmgIFcbiAgICBnZXRUYXNrTGlzdERhdGEoKXtcbiAgICAgICAgbGV0IHQgPSBcIlwiO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIHQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFRhc2tMaXN0RGF0YVwiLFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFza01hbmFnZXIuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioq5Lu75Yqh6YeR6aKd5ZKM54q25oCBKioqKioqKioqKioqKioqKioqXCIsdCk7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cbiAgICAvL+S7u+WKoeWxleekulxuICAgIGdldFRhc2tJbmZvKHRhc2tJZDpudW1iZXIpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwiZ2V0VGFza0luZm9cIixcIihJKVZcIix0YXNrSWQpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioq5Lu75Yqh5bGV56S6KioqKioqKioqKioqKioqKioqXCIsdGFza0lkKTtcbiAgICB9XG4gICAgLy/ku7vliqHpooblj5blpZblirFcbiAgICBnZXRUYXNrUmV3YXJkKHRhc2tJZDpudW1iZXIpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwiZ2V0VGFza1Jld2FyZFwiLFwiKEkpVlwiLHRhc2tJZCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirku7vliqHlsZXnpLoqKioqKioqKioqKioqKioqKipcIix0YXNrSWQpO1xuICAgIH1cbiAgICAvL+awlOazoeaPkOekuuS/oeaBr1xuICAgIGdldEd1aWRlQnViYmxlc1RleHQoKXtcbiAgICAgICAgbGV0IGIgPSBcIlwiO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGIgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldEd1aWRlQnViYmxlc1RleHRcIixcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICAvL+S4i+asoeaKveWllumcgOimgeeahOWIhuaVsFxuICAgIGdldE5leHREcmF3U2NvcmUoKXtcbiAgICAgICAgbGV0IHMgPSAwO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIHMgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldE5leHREcmF3U2NvcmVcIixcIigpSVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiL5qyh6ZyA6KaB55qEXCIscyk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIC8v5o+Q546w5oq95aWW55qE5b2T5YmN5YiG5pWwXG4gICAgZ2V0Q3VycmVudFNjb3JlKCl7XG4gICAgICAgIGxldCBzID0gMDtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBzID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJnZXRDdXJyZW50U2NvcmVcIixcIigpSVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN55qEXCIscyk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIC8v5b6u5L+h5piv5ZCm55m75b2VXG4gICAgaXNXWEJpbmQoKXtcbiAgICAgICAgbGV0IGkgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBpID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJpc1dYQmluZFwiLFwiKClaXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICAvL+mAgOWHuuW+ruS/oeeZu+W9lVxuICAgIHVuQmluZFdYKCl7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJ1bkJpbmRXWFwiLFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8v55So5oi35pi156ewXG4gICAgZ2V0VXNlck5pY2tOYW1lKCl7XG4gICAgICAgIGxldCBuID0gdW5kZWZpbmVkO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIG4gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFVzZXJOaWNrTmFtZVwiLFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIC8v55So5oi35aS05YOPXG4gICAgZ2V0VXNlckljb24oKXtcbiAgICAgICAgbGV0IG4gPSBcIlwiO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIG4gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFVzZXJJY29uXCIsXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKSB7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgLy/pmpDnp4HmlL/nrZZcbiAgICBvcGVuUHJpdmFjeSgpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwib3BlblByaXZhY3lcIixcIigpVlwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+eUqOaIt+WNj+iurlxuICAgIG9wZW5Vc2VyU2VydmljZSgpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwib3BlblVzZXJTZXJ2aWNlXCIsXCIoKVZcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/mhI/op4Hlj43ppohcbiAgICBvcGVuRmVlZEJhY2soKXtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcIm9wZW5GZWVkQmFja1wiLFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8v5omT5byA5o+Q546w6aG16Z2iXG4gICAgb3BlbldpdGhkcmF3KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKuaJk+W8gOaPkOeOsOeVjOmdoioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJvcGVuV2l0aGRyYXdcIixcIigpVlwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+mch+WKqFxuICAgIHZpYnJhdGUodGltZTpudW1iZXIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKirpnIfliqjmlYjmnpwqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYmFzZUNvY29zLFwidmlicmF0ZVwiLFwiKEkpVlwiLHRpbWUpO1xuICAgICAgICB9ZWxzZXtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8v5rWL6K+V5o6l5Y+jXG4gICAgdGVzdFJlc3VsdCgpe1xuICAgICAgICBsZXQgdGVzdCA6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAgbGV0IHRlc3QyID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJ0ZXN0UmVzdWx0XCIsXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKua1i+ivleaOpeWPoyoqKioqKioqKioqKioqKioqMjIyMjIyMjIyMjIyMioqKioqKioqXCIsdGVzdCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XG5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKirmtYvor5XmjqXlj6MqKioqKioqKioqKioqKioqKioqKioqKioqXCIsdGVzdCk7XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExhdW5jaGVyOyJdfQ==
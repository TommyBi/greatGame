
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Nkay9MYXVuY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFFaEM7SUFBdUIsNEJBQU87SUFDMUI7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxPQUFPLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7O0lBQ3BGLENBQUM7SUFDRCxPQUFPO0lBQ1AsZ0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDMUc7YUFBSyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO2FBQUk7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELE1BQU07SUFDTixnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3hHO2FBQUssSUFBRyxJQUFJ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QUFELENBM05BLEFBMk5DLENBM05zQixpQkFBTyxHQTJON0I7QUFDRCxrQkFBZSxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNkayBmcm9tIFwiLi9CYXNlU2RrXCI7XHJcblxyXG5jbGFzcyBMYXVuY2hlciBleHRlbmRzIEJhc2VTZGsge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNESyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+TGF1bmNoZXIgY29tcGxldGVcIik7ICAgICAgICBcclxuICAgIH1cclxuICAgIC8v5pyN5Yqh5Zmo5pe26Ze0XHJcbiAgICBnZXRTZXJ2ZXJUaW1lKCl7XHJcbiAgICAgICAgbGV0IHRpbWU7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5a6J5Y2T6K6+5aSHXCIsdGhpcy5fYmFzZVBhdGhfYW5kcm9pZCk7XHJcbiAgICAgICAgICAgIHRpbWUgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2Jhc2VQYXRoX2FuZHJvaWQsXCJnZXRDdXJyZW50VGltZVwiLFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLoi7nmnpzorr7lpIdcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyq6K+G5Yir6K6+5aSHXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIuacjeWKoeWZqOaXtumXtOS4ulwiLHRpbWUpO1xyXG4gICAgICAgIHJldHVybiB0aW1lO1xyXG4gICAgfVxyXG4gICAgLy/nlKjmiLfkvZnpop1cclxuICAgIGdldFVzZXJBbW91bnQoKXtcclxuICAgICAgICBsZXQgbSA9IDA7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIG0gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFVzZXJBbW91bnRcIixcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighbSl7XHJcbiAgICAgICAgICAgIG0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN5c3RlbU5hbWUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioq55So5oi35L2Z6aKdKioqKioqKioqKioqKioqKioqKipcIixtKTtcclxuICAgICAgICByZXR1cm4gbTtcclxuICAgIH1cclxuICAgIC8v6YCa5YWz5oC75pWwXHJcbiAgICBnZXRTVUNDQ291bnQoKXtcclxuICAgICAgICBsZXQgYyA9IDA7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIGMgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFNVQ0NDb3VudFwiLFwiKClJXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuICAgIC8v5ZCI5oiQ5LiK5oqlXHJcbiAgICByZXBvcnRTeW50aGV0aWMoKXtcclxuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJyZXBvcnRTeW50aGV0aWNcIixcIigpVlwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1OYW1lKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirlkIjmiJDkuIrmiqUqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgdGhpcy52aWJyYXRlKDEwMCk7XHJcbiAgICB9XHJcbiAgICAvL+mihue6ouWMheWlluWKseaOpeWPo1xyXG4gICAgZ2V0UmVkUGFja1Jld2FyZChjb25maWdJZDpzdHJpbmcsaXNWaWRlbyA6IGJvb2xlYW4pe1xyXG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFJlZFBhY2tSZXdhcmRcIixcIihMamF2YS9sYW5nL1N0cmluZztaKVZcIixjb25maWdJZCxpc1ZpZGVvKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1OYW1lKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirpoobnuqLljIUqKioqKioqKioqKioqKioqKiogSURcIixjb25maWdJZCxcIiAgaXNWaWRlbyBcIixpc1ZpZGVvKTtcclxuICAgIH1cclxuICAgIC8v6I635Y+W5Lu75Yqh6YeR6aKd5ZKM54q25oCBXHJcbiAgICBnZXRUYXNrTGlzdERhdGEoKXtcclxuICAgICAgICBsZXQgdCA9IFwiXCI7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIHQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFRhc2tMaXN0RGF0YVwiLFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUYXNrTWFuYWdlci5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKuS7u+WKoemHkemineWSjOeKtuaAgSoqKioqKioqKioqKioqKioqKlwiLHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgLy/ku7vliqHlsZXnpLpcclxuICAgIGdldFRhc2tJbmZvKHRhc2tJZDpudW1iZXIpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFRhc2tJbmZvXCIsXCIoSSlWXCIsdGFza0lkKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioq5Lu75Yqh5bGV56S6KioqKioqKioqKioqKioqKioqXCIsdGFza0lkKTtcclxuICAgIH1cclxuICAgIC8v5Lu75Yqh6aKG5Y+W5aWW5YqxXHJcbiAgICBnZXRUYXNrUmV3YXJkKHRhc2tJZDpudW1iZXIpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFRhc2tSZXdhcmRcIixcIihJKVZcIix0YXNrSWQpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirku7vliqHlsZXnpLoqKioqKioqKioqKioqKioqKipcIix0YXNrSWQpO1xyXG4gICAgfVxyXG4gICAgLy/msJTms6Hmj5DnpLrkv6Hmga9cclxuICAgIGdldEd1aWRlQnViYmxlc1RleHQoKXtcclxuICAgICAgICBsZXQgYiA9IFwiXCI7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIGIgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldEd1aWRlQnViYmxlc1RleHRcIixcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGI7XHJcbiAgICB9XHJcbiAgICAvL+S4i+asoeaKveWllumcgOimgeeahOWIhuaVsFxyXG4gICAgZ2V0TmV4dERyYXdTY29yZSgpe1xyXG4gICAgICAgIGxldCBzID0gMDtcclxuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcclxuICAgICAgICAgICAgcyA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwiZ2V0TmV4dERyYXdTY29yZVwiLFwiKClJXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4i+asoemcgOimgeeahFwiLHMpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbiAgICAvL+aPkOeOsOaKveWllueahOW9k+WJjeWIhuaVsFxyXG4gICAgZ2V0Q3VycmVudFNjb3JlKCl7XHJcbiAgICAgICAgbGV0IHMgPSAwO1xyXG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xyXG4gICAgICAgICAgICBzID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJnZXRDdXJyZW50U2NvcmVcIixcIigpSVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3nmoRcIixzKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgLy/lvq7kv6HmmK/lkKbnmbvlvZVcclxuICAgIGlzV1hCaW5kKCl7XHJcbiAgICAgICAgbGV0IGkgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcclxuICAgICAgICAgICAgaSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwiaXNXWEJpbmRcIixcIigpWlwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgLy/pgIDlh7rlvq7kv6HnmbvlvZVcclxuICAgIHVuQmluZFdYKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwidW5CaW5kV1hcIixcIigpVlwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/nlKjmiLfmmLXnp7BcclxuICAgIGdldFVzZXJOaWNrTmFtZSgpe1xyXG4gICAgICAgIGxldCBuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xyXG4gICAgICAgICAgICBuID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJnZXRVc2VyTmlja05hbWVcIixcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG47XHJcbiAgICB9XHJcbiAgICAvL+eUqOaIt+WktOWDj1xyXG4gICAgZ2V0VXNlckljb24oKXtcclxuICAgICAgICBsZXQgbiA9IFwiXCI7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIG4gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFVzZXJJY29uXCIsXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgfVxyXG4gICAgLy/pmpDnp4HmlL/nrZZcclxuICAgIG9wZW5Qcml2YWN5KCl7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwib3BlblByaXZhY3lcIixcIigpVlwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/nlKjmiLfljY/orq5cclxuICAgIG9wZW5Vc2VyU2VydmljZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcIm9wZW5Vc2VyU2VydmljZVwiLFwiKClWXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+aEj+ingeWPjemmiFxyXG4gICAgb3BlbkZlZWRCYWNrKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwib3BlbkZlZWRCYWNrXCIsXCIoKVZcIik7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5omT5byA5o+Q546w6aG16Z2iXHJcbiAgICBvcGVuV2l0aGRyYXcoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKirmiZPlvIDmj5DnjrDnlYzpnaIqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcIm9wZW5XaXRoZHJhd1wiLFwiKClWXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+mch+WKqFxyXG4gICAgdmlicmF0ZSh0aW1lOm51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioq6ZyH5Yqo5pWI5p6cKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9iYXNlQ29jb3MsXCJ2aWJyYXRlXCIsXCIoSSlWXCIsdGltZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5rWL6K+V5o6l5Y+jXHJcbiAgICB0ZXN0UmVzdWx0KCl7XHJcbiAgICAgICAgbGV0IHRlc3QgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xyXG4gICAgICAgICAgICBsZXQgdGVzdDIgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcInRlc3RSZXN1bHRcIixcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKirmtYvor5XmjqXlj6MqKioqKioqKioqKioqKioqKjIyMjIyMjIyMjIyMjIqKioqKioqKlwiLHRlc3QpO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKirmtYvor5XmjqXlj6MqKioqKioqKioqKioqKioqKioqKioqKioqXCIsdGVzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRlc3Q7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF1bmNoZXI7Il19
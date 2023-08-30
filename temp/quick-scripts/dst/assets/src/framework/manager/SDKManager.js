
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/SDKManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e2b5+hJ3JD0a4XbvqC/G78', 'SDKManager');
// src/framework/manager/SDKManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerModel_1 = require("../../game/datas/PlayerModel");
var EventDispath_1 = require("../message/EventDispath");
var EventType_1 = require("../message/EventType");
var MkUtils_1 = require("../tools/MkUtils");
var Utils_1 = require("../tools/Utils");
var SDKManager = /** @class */ (function () {
    function SDKManager() {
        this._basePath_android = "com.xstone.android.xsbusi.XSSdk";
        this._moudelPath_android = "com.xstone.android.xsbusi.XSBusiSdk";
        this._adPath_android = "com.xstone.android.xsbusi.XSAdSdk";
        this._baseCocos = "org/cocos2dx/javascript/AppActivity";
    }
    SDKManager.getInstance = function () {
        if (SDKManager._instance == null) {
            SDKManager._instance = new SDKManager();
        }
        return SDKManager._instance;
    };
    SDKManager.prototype.isAndroid = function () {
        return false;
        // return cc.sys.os == cc.sys.OS_ANDROID;
    };
    SDKManager.prototype.isIphone = function () {
        return cc.sys.os == cc.sys.OS_IOS;
    };
    SDKManager.prototype.systemName = function () {
        if (this.isAndroid()) {
            console.log("********************设备为Andrioid");
        }
        else if (this.isIphone()) {
            console.log("********************设备为Iphone");
        }
    };
    //保持屏幕常亮
    SDKManager.prototype.setKeep = function () {
        if (this.isAndroid()) {
            jsb["Device"].setKeepScreenOn(true);
        }
    };
    //服务器时间
    SDKManager.prototype.getServerTime = function () {
        var time = new Date().getTime();
        if (this.isAndroid()) {
            // console.log("安卓设备", this._basePath_android);
            time = jsb.reflection.callStaticMethod(this._moudelPath_android, "getCurrentTime", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
            // console.log("苹果设备");
        }
        else {
            // console.log("未识别设备");
        }
        // console.log("服务器时间为", time);
        return time;
    };
    //- 统计事件接口
    SDKManager.prototype.onEvent = function (action, jsonData) {
        if (this.isAndroid()) {
            console.log("@@统计：", action);
            if (jsonData) {
                var data = JSON.stringify(jsonData);
                jsb.reflection.callStaticMethod(this._basePath_android, "onEvent", "(Ljava/lang/String;Ljava/lang/String;)V", action, data);
            }
            else
                jsb.reflection.callStaticMethod(this._basePath_android, "onEvent", "(Ljava/lang/String;)V", action);
        }
    };
    //视频广告播放接口 
    SDKManager.prototype.showAd = function (adConfig) {
        if (this.isAndroid()) {
            if (adConfig) {
                var data = JSON.stringify(adConfig);
                console.log("@@视频播放：", adConfig);
                jsb.reflection.callStaticMethod(this._adPath_android, "showAd", "(Ljava/lang/String;)V", data);
            }
        }
        else {
            if (PlayerModel_1.default.haveOrder)
                PlayerModel_1.default.orderVideoNum++;
            EventDispath_1.default.send(EventType_1.EventType.VIDEO_BACK, 2);
        }
    };
    //用户余额
    SDKManager.prototype.getUserAmount = function () {
        var m = 0;
        if (this.isAndroid()) {
            m = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserAmount", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        if (!m) {
            m = 0;
        }
        PlayerModel_1.default.initMoney(m);
        this.systemName();
        console.log("********************用户余额********************", m);
        return m;
    };
    //微信是否登录
    SDKManager.prototype.isWXBind = function () {
        var i = false;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "isWXBind", "()Z");
        }
        else if (this.isIphone()) {
        }
        return i;
    };
    //商业化开关
    SDKManager.prototype.isBusiOpen = function () {
        var i = false;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "isBusiOpen", "()Z");
        }
        else if (this.isIphone()) {
        }
        return i;
    };
    //退出微信登录
    SDKManager.prototype.unBindWX = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "unBindWX", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //用户昵称
    SDKManager.prototype.getUserNickName = function () {
        var n = undefined;
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserNickName", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        console.log("@@ getUserNickName用户昵称:", n);
        return n;
    };
    //用户ID
    SDKManager.prototype.getDeviceId = function () {
        var n = undefined;
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getDeviceId", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        console.log("@@ getDeviceId用户id:", n);
        return n;
    };
    //用户头像
    SDKManager.prototype.getUserIcon = function () {
        var n = "";
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserIcon", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        console.log("@@ getUserIcon用户头像:", n);
        return n;
    };
    //隐私政策
    SDKManager.prototype.openPrivacy = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openPrivacy", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //用户协议
    SDKManager.prototype.openUserService = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openUserService", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //意见反馈
    SDKManager.prototype.openFeedBack = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openFeedBack", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    /**
     * 每日任务信息
     */
    SDKManager.prototype.getDailyTaskInfo = function () {
        var data;
        if (this.isAndroid()) {
            var dataStr = jsb.reflection.callStaticMethod(this._moudelPath_android, "getDailyTaskInfo", "()Ljava/lang/String;");
            data = JSON.parse(dataStr);
        }
        else {
            data = [
                {
                    "info": "红包天天享",
                    "taskId": 1,
                    "times": 5,
                    "userTimes": 0 //任务已完成的次数
                },
                {
                    "info": "钞票送不停",
                    "taskId": 2,
                    "times": 5,
                    "userTimes": 5 //任务已完成的次数
                },
                {
                    "info": "每天好收成",
                    "taskId": 3,
                    "times": 5,
                    "userTimes": 1 //任务已完成的次数
                },
            ];
        }
        console.log("每日任务信息", data);
        return data;
    };
    /**
     * 领取每日任务奖励后上报任务完完成
     * @param itemId 对应id
     */
    SDKManager.prototype.toFinishTask = function (taskId) {
        console.log("@@ 领取每日任务奖励后上报任务toFinishTask", taskId);
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "toFinishTask", "(I)V", taskId);
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.TASK_COMPLETE_BACK, { redBean: "0.2342", userRedBean: 1133 });
        }
    };
    //打开提现页面
    SDKManager.prototype.openWithdraw = function () {
        console.log("*************************打开提现界面*************************");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openWithdraw", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //震动
    SDKManager.prototype.vibrate = function (time) {
        console.log("*************************震动效果*************************");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._baseCocos, "vibrate", "(I)V", time);
        }
        else {
        }
    };
    //开张天数
    SDKManager.prototype.getLoginDays = function () {
        var i = 1;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "getLoginDays", "()I");
        }
        else if (this.isIphone()) {
        }
        console.log("@@ 开张天数getLoginDays:", i);
        return i;
    };
    //飞行红包时间间隔
    SDKManager.prototype.getFlightTime = function () {
        var i = 10;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "getFlightTime", "()I");
        }
        else if (this.isIphone()) {
        }
        console.log("@@ 飞行红包时间间隔getFlightTime:", i);
        return i;
    };
    //主页面集市等级
    SDKManager.prototype.getJSLevelInfo = function () {
        var n;
        if (this.isAndroid()) {
            var jsonStr = jsb.reflection.callStaticMethod(this._moudelPath_android, "getJSLevelInfo", "()Ljava/lang/String;");
            console.log("获取等级相关信息getJSLevelInfo:", jsonStr);
            n = JSON.parse(jsonStr);
        }
        else {
            n = {
                "jsLevel": 1,
                "jxOrderNum": 10,
                "userJxOrderNum": 1 //当前订单数 用于计算进度
            };
        }
        console.log("@@ 主页面集市等级:", n);
        return n;
    };
    //集市等级列表
    SDKManager.prototype.getBazaarLevelInfo = function () {
        var n;
        if (this.isAndroid()) {
            var jsonStr = jsb.reflection.callStaticMethod(this._moudelPath_android, "getBazaarLevelInfo", "()Ljava/lang/String;");
            n = JSON.parse(jsonStr);
        }
        else {
            n = {
                "jsAmount": 300,
                "userOrderNum": 20,
                "jsLevel": 6,
                "jsTaskInfos": [
                    {
                        "level": 1,
                        "orderNum": 10,
                        "amount": 5,
                        "tx_mu": "1%",
                    },
                    {
                        "level": 2,
                        "orderNum": 20,
                        "amount": 15,
                        "tx_mu": "1%",
                    },
                    {
                        "level": 3,
                        "orderNum": 30,
                        "amount": 25,
                        "tx_mu": "1%",
                    },
                    {
                        "level": 4,
                        "orderNum": 40,
                        "amount": 35,
                        "tx_mu": "1%",
                    },
                    {
                        "level": 5,
                        "orderNum": 50,
                        "amount": 45,
                        "tx_mu": "1%",
                    },
                    {
                        "level": 6,
                        "orderNum": 60,
                        "amount": 55,
                        "tx_mu": "1%",
                    },
                    {
                        "level": 7,
                        "orderNum": 70,
                        "amount": 65,
                        "tx_mu": "1%",
                    },
                    {
                        "level": 8,
                        "orderNum": 80,
                        "amount": 75,
                        "tx_mu": "1%",
                    },
                ]
            };
        }
        console.log("@@ 主页面集市等级:", n);
        return n;
    };
    //升级
    SDKManager.prototype.upJSLevel = function () {
        console.log("@@ 升级upJSLevel");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "upJSLevel", "()V");
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.SDK_LEVEL_UP);
        }
    };
    //除虫红包配置
    SDKManager.prototype.getWormConfig = function () {
        console.log("@@ 除虫红包配置,getWormConfig");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getWormConfig", "()V");
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_CONFIG, {
                configId: 16,
                type: 16
            });
        }
    };
    //飞行红包配置
    SDKManager.prototype.getFlightConfig = function () {
        console.log("@@ 飞行红包配置,getFlightConfig");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getFlightConfig", "()V");
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_CONFIG, {
                configId: 11,
                type: 11
            });
        }
    };
    //订单红包配置
    SDKManager.prototype.getOrderRewardConfig = function () {
        console.log("@@ 订单红包配置,getOrderRewardConfig");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getOrderRewardConfig", "()V");
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_CONFIG, {
                configId: 15,
                type: 15,
                times: 3,
                mandatoryVideo: true
            });
        }
    };
    //招待顾客红包配置
    SDKManager.prototype.getCustomerConfig = function (id) {
        console.log("@@ 招待顾客红包配置,getCustomerConfig：", id);
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getCustomerConfig", "(I)V", id);
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_CONFIG, {
                configId: 17,
                type: 17,
            });
        }
    };
    //辛苦红包
    SDKManager.prototype.getHardConfig = function () {
        console.log("@@ 辛苦红包,getHardConfig");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getHardConfig", "()V");
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_CONFIG, {
                configId: 13,
                type: 13,
            });
        }
    };
    //反馈红包
    SDKManager.prototype.getFeedbackConfig = function () {
        console.log("@@ 反馈红包,getFeedbackConfig");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getFeedbackConfig", "()V");
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_CONFIG, {
                configId: 14,
                type: 14,
            });
        }
    };
    //领取奖励
    SDKManager.prototype.getRedPackReward = function (configId, playvideo) {
        if (playvideo === void 0) { playvideo = false; }
        console.log("@@ 领取奖励,getRedPackReward", configId, "      ", playvideo);
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getRedPackReward", "(Ljava/lang/String;Z)V", configId, playvideo);
        }
        else {
            // if (configId == 16) {
            //     EventDispath.send(EventType.SDK_REWARD_GOT, {
            //         "redBean": "1.533",//领取金额
            //         "userRedBean": "112.33",//用户当前总余额
            //         "type": 16,//红包类型 
            //     });
            // } else if (configId == 11) {
            //     EventDispath.send(EventType.SDK_REWARD_GOT, {
            //         "redBean": "1.3333",//领取金额
            //         "userRedBean": "113.11",//用户当前总余额
            //         "type": 11,//红包类型 
            //     });
            // } else if (configId == 15) {
            //     EventDispath.send(EventType.SDK_REWARD_GOT, {
            //         "code": 0, //0-成功 其他领取失败
            //         "msg": "领取成功", //非0情况会给出对应msg 酌情处理
            //         "redBean": "1.335",//领取金额
            //         "userRedBean": "112.33",//用户当前总余额
            //         "type": 15,//红包类型 
            //         "beseRedBean": "1.2",//本次基础红包    订单红包才会返回，其他类型不返回
            //         "addRedBean": "0.3",//本次加成红包值    订单红包才会返回，其他类型不返回
            //         "addRedMu": "25"//本次加成红包系数    订单红包才会返回，其他类型不返回
            //     });
            // } else if (configId == 17) {
            //     EventDispath.send(EventType.SDK_REWARD_GOT, {
            //         "code": 0, //0-成功 其他领取失败
            //         "msg": "领取成功", //非0情况会给出对应msg 酌情处理
            //         "redBean": "1.5333",//领取金额
            //         "userRedBean": "112.33",//用户当前总余额
            //         "type": 17,//红包类型 
            //     });
            // } else if (configId == 13) {
            //     EventDispath.send(EventType.SDK_REWARD_GOT, {
            //         "code": 0, //0-成功 其他领取失败
            //         "msg": "领取成功", //非0情况会给出对应msg 酌情处理
            //         "redBean": "3.3445",//领取金额
            //         "userRedBean": "113.33",//用户当前总余额
            //         "type": 13,//红包类型 
            //     });
            // } else if (configId == 14) {
            //     EventDispath.send(EventType.SDK_REWARD_GOT, {
            //         "code": 0, //0-成功 其他领取失败
            //         "msg": "领取成功", //非0情况会给出对应msg 酌情处理
            //         "redBean": "3.32225",//领取金额
            //         "userRedBean": "113.33",//用户当前总余额
            //         "type": 14,//红包类型 
            //     });
            // }
            MkUtils_1.default.alertTips("红包配置准备中,请重新领取");
            EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_LOST);
        }
    };
    //领取订单上报
    SDKManager.prototype.getOrderTask = function (orderId) {
        console.log("@@ 领取订单上报,getOrderTask", orderId);
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getOrderTask", "(I)V", orderId);
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.ORDER_GET_SUCCESS);
        }
    };
    //新手是否领取
    SDKManager.prototype.hasNewOrderReward = function () {
        var isNew = false;
        if (this.isAndroid()) {
            isNew = jsb.reflection.callStaticMethod(this._moudelPath_android, "hasNewOrderReward", "()Z");
        }
        else {
            isNew = false;
        }
        console.log("@@ 新手是否领取,hasNewOrderReward", isNew);
        return isNew;
    };
    //是否还可以领取招待顾客的红包奖励
    SDKManager.prototype.hasCustomerRedReward = function () {
        var isNew = false;
        if (this.isAndroid()) {
            isNew = jsb.reflection.callStaticMethod(this._moudelPath_android, "hasCustomerRedReward", "()Z");
        }
        else {
            isNew = true;
        }
        console.log("@@ 是否还可以领取招待顾客的红包奖励,hasCustomerRedReward", isNew);
        return isNew;
    };
    /**
     * 进入游戏后上报
     * @param type 0游戏启动时，1进入游戏主页
     */
    SDKManager.prototype.onStartGame = function (type) {
        console.log("@@ 进入游戏后上报,onStartGame", type);
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "onStartGame", "(I)V", type);
        }
    };
    //订单红包池
    SDKManager.prototype.getOrderPoolData = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getOrderPoolData", "()V");
        }
        else {
            EventDispath_1.default.send(EventType_1.EventType.SDK_VIDEO_NUM, 0);
        }
    };
    //插屏广告
    SDKManager.prototype.reportTrigger = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "reportTrigger", "()V");
        }
        console.log("close panel");
    };
    //订单系数
    SDKManager.prototype.getOrderCountAdd = function () {
        var num = 100;
        if (this.isAndroid()) {
            num = jsb.reflection.callStaticMethod(this._moudelPath_android, "getOrderCountAdd", "()I");
        }
        console.log("getOrderCountAdd 订单系数", num);
        return num;
    };
    SDKManager._instance = null;
    return SDKManager;
}());
;
exports.default = SDKManager.getInstance();
window["XSSdkCallback"] = function (action, jsonStr) {
    if (Utils_1.default.isUndefined(jsonStr)) {
        return;
    }
    console.log(action + "***************前端收到消息***************", "   ", jsonStr);
    var data = JSON.parse(jsonStr);
    if (action == "redpacket_config") { //1. 结账领取红包奖励
        if (data.code != 0) {
            MkUtils_1.default.alertTips(data.msg);
            return;
        }
        console.log("*************redpacket_config*******2. 红包配置接口回调********************", data);
        EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_CONFIG, data.config);
        //     "code": 0,//0领取成功 其他失败
        //         "msg": "领取成功",
        //             "config": {
        //         "configId": "UUID", //此次请求获取的配置的ID值，每次获取都不一样
        //             "type": 11//红包类型 
        //     }
        //     红包类型对应如下：
        // private static final int RED_PACK_TYPE_FLIGHT = 11;//飞行红包
        // private static final int RED_PACK_TYPE_DAILY_TASK = 12;//每日任务红包
        // private static final int RED_PACK_TYPE_HARD = 13;//辛苦红包
        // private static final int RED_PACK_TYPE_FEEDBACK = 14;//回馈红包
        // private static final int RED_PACK_TYPE_ORDER = 15;//订单红包
        // private static final int RED_PACK_TYPE_WORM = 16;//除虫
        // private static final int RED_PACK_TYPE_CUSTOMER = 17;//招待顾客
    }
    else if (action == "redpacket_got") { //红包领取接口回调 
        if (data.code != 0) {
            MkUtils_1.default.alertTips(data.msg + ",请重新领取");
            EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_LOST);
            return;
        }
        console.log("*************redpacket_got*******红包领取接口回调********************", data);
        EventDispath_1.default.send(EventType_1.EventType.SDK_REWARD_GOT, data);
        // {
        //     "code":0 //0-成功 其他领取失败
        //     "msg": "领取成功", //非0情况会给出对应msg 酌情处理
        //     "redBean":"1.5",//领取金额
        //     "userRedBean":"112.33",//用户当前总余额
        //     "type":11,//红包类型 
        //     "beseRedBean":"1.2",//本次基础红包    订单红包才会返回，其他类型不返回
        //     "addRedBean":"0.3",//本次加成红包值    订单红包才会返回，其他类型不返回
        //     "addRedMu":"25"//本次加成红包系数    订单红包才会返回，其他类型不返回
        // }
    }
    else if (action == "finish_task_result") { //5. 领取任务奖励结果回调
        if (data.code != 0) {
            MkUtils_1.default.alertTips(data.msg);
            return;
        }
        EventDispath_1.default.send(EventType_1.EventType.TASK_COMPLETE_BACK, data);
        // {
        //     "type": 1, //任务类型
        //     "taskId":1 //任务id 用于客户端领取任务奖励时候获取对应的金额和领取后上报
        //     "param":100,//任务对应参数 客户端无需关注
        //     "status":0//任务状态 默认0  0-未完成 1已完成 2已领取 
        //     //成就任务不返回已领取的任务数据 每日任务返回
        // }
    }
    else if (action == "bazaar_up_result") { //4. 集市升级结果回调
        if (data.code != 0) {
            MkUtils_1.default.alertTips(data.msg);
            return;
        }
        EventDispath_1.default.send(EventType_1.EventType.SDK_LEVEL_UP);
        // {
        //     "type": 1, //任务类型
        //     "taskId":1 //任务id 用于客户端领取任务奖励时候获取对应的金额和领取后上报
        //     "param":100,//任务对应参数 客户端无需关注
        //     "status":0//任务状态 默认0  0-未完成 1已完成 2已领取 
        //     //成就任务不返回已领取的任务数据 每日任务返回
        // }
    }
    else if (action == "order_task_result") { //当前任务完成并可领取数量结果回调
        if (data.code != 0) {
            MkUtils_1.default.alertTips(data.msg);
            return;
        }
        EventDispath_1.default.send(EventType_1.EventType.ORDER_GET_SUCCESS);
        // {
        //     "allCount":10 //可领取奖励总数量
        //     "cjCount": 7, //成就任务可领取奖励数量
        //     "dayCount":3,//每日任务可领取奖励数量
        // }
    }
    else if (action == "pool_data") { //当前任务完成并可领取数量结果回调
        if (data.code != 0) {
            MkUtils_1.default.alertTips(data.msg);
            return;
        }
        EventDispath_1.default.send(EventType_1.EventType.SDK_VIDEO_NUM, data.videoCount);
    }
    else if (action == "sync_amount") { //同步红包
        PlayerModel_1.default.getUserAmount();
    }
    else if (action == "refresh_home") { //同步微信登录
        EventDispath_1.default.send(EventType_1.EventType.SDK_WXBIND);
    }
    else if (action == "ad_play") { //视频开始播放
        // EventDispath.send(EventType.VIDEO_BACK, 1);
    }
    else if (action == "ad_over") { //视频播放结束
        if (PlayerModel_1.default.haveOrder)
            PlayerModel_1.default.orderVideoNum++;
        PlayerModel_1.default.setXfzs(1);
        EventDispath_1.default.send(EventType_1.EventType.VIDEO_BACK, 2);
    }
    else if (action == "ad_error") { //视频播放出错
        MkUtils_1.default.alertTips("视频出错了~~");
        // EventDispath.send(EventType.VIDEO_BACK, 3);
    }
    else if (action == "ad_cd") { //视频播放视频冷却中
        MkUtils_1.default.alertTips("视频冷却中~~");
        // EventDispath.send(EventType.VIDEO_BACK, 4);
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDREQUF1RDtBQUN2RCx3REFBbUQ7QUFDbkQsa0RBQWlEO0FBRWpELDRDQUF1QztBQUN2Qyx3Q0FBbUM7QUFFbkM7SUFBQTtRQUNjLHNCQUFpQixHQUFXLGlDQUFpQyxDQUFDO1FBQzlELHdCQUFtQixHQUFXLHFDQUFxQyxDQUFDO1FBQ3BFLG9CQUFlLEdBQVcsbUNBQW1DLENBQUM7UUFDOUQsZUFBVSxHQUFXLHFDQUFxQyxDQUFDO0lBd2lCekUsQ0FBQztJQXJpQlUsc0JBQVcsR0FBbEI7UUFDSSxJQUFJLFVBQVUsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzlCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNJLE9BQU8sS0FBSyxDQUFDO1FBQ2IseUNBQXlDO0lBQzdDLENBQUM7SUFDRCw2QkFBUSxHQUFSO1FBQ0ksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBQ0QsK0JBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFDRCxRQUFRO0lBQ1IsNEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENB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QUksSUFBSSxDQUFDLEVBQUU7WUFDaEIsaUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNCLE9BQU87U0FDVjtRQUNELHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtLQUM5RDtTQUFNLElBQUksTUFBTSxJQUFJLGFBQWEsRUFBRSxFQUFNLE1BQU07UUFDNUMscUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMvQjtTQUFNLElBQUksTUFBTSxJQUFJLGNBQWMsRUFBRSxFQUFNLFFBQVE7UUFFL0Msc0JBQVksQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUUzQztTQUFNLElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRSxFQUFNLFFBQVE7UUFDMUMsOENBQThDO0tBQ2pEO1NBQU0sSUFBSSxNQUFNLElBQUksU0FBUyxFQUFFLEVBQU0sUUFBUTtRQUMxQyxJQUFJLHFCQUFXLENBQUMsU0FBUztZQUFFLHFCQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkQscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsc0JBQVksQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDOUM7U0FBTSxJQUFJLE1BQU0sSUFBSSxVQUFVLEVBQUUsRUFBTSxRQUFRO1FBQzNDLGlCQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLDhDQUE4QztLQUNqRDtTQUFNLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRSxFQUFNLFdBQVc7UUFDM0MsaUJBQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsOENBQThDO0tBQ2pEO0FBQ0wsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50Q29uc3QgZnJvbSBcIi4uLy4uL2dhbWUvY29uc3RzL0V2ZW50Q29uc3RcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9nYW1lL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgTGF1bmNoZXIgZnJvbSBcIi4uL3Nkay9MYXVuY2hlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3Rvb2xzL1V0aWxzXCI7XHJcblxyXG5jbGFzcyBTREtNYW5hZ2VyIHtcclxuICAgIHByb3RlY3RlZCBfYmFzZVBhdGhfYW5kcm9pZDogc3RyaW5nID0gXCJjb20ueHN0b25lLmFuZHJvaWQueHNidXNpLlhTU2RrXCI7XHJcbiAgICBwcm90ZWN0ZWQgX21vdWRlbFBhdGhfYW5kcm9pZDogc3RyaW5nID0gXCJjb20ueHN0b25lLmFuZHJvaWQueHNidXNpLlhTQnVzaVNka1wiO1xyXG4gICAgcHJvdGVjdGVkIF9hZFBhdGhfYW5kcm9pZDogc3RyaW5nID0gXCJjb20ueHN0b25lLmFuZHJvaWQueHNidXNpLlhTQWRTZGtcIjtcclxuICAgIHByb3RlY3RlZCBfYmFzZUNvY29zOiBzdHJpbmcgPSBcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTREtNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoU0RLTWFuYWdlci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBTREtNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBTREtNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTREtNYW5hZ2VyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIGlzQW5kcm9pZCgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gcmV0dXJuIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRDtcclxuICAgIH1cclxuICAgIGlzSXBob25lKCkge1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUztcclxuICAgIH1cclxuICAgIHN5c3RlbU5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKuiuvuWkh+S4ukFuZHJpb2lkXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lwaG9uZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKirorr7lpIfkuLpJcGhvbmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/kv53mjIHlsY/luZXluLjkuq5cclxuICAgIHNldEtlZXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAganNiW1wiRGV2aWNlXCJdLnNldEtlZXBTY3JlZW5Pbih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mnI3liqHlmajml7bpl7RcclxuICAgIGdldFNlcnZlclRpbWUoKSB7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWuieWNk+iuvuWkh1wiLCB0aGlzLl9iYXNlUGF0aF9hbmRyb2lkKTtcclxuICAgICAgICAgICAgdGltZSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldEN1cnJlbnRUaW1lXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSXBob25lKCkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLoi7nmnpzorr7lpIdcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLmnKror4bliKvorr7lpIdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pyN5Yqh5Zmo5pe26Ze05Li6XCIsIHRpbWUpO1xyXG4gICAgICAgIHJldHVybiB0aW1lO1xyXG4gICAgfVxyXG4gICAgLy8tIOe7n+iuoeS6i+S7tuaOpeWPo1xyXG4gICAgb25FdmVudChhY3Rpb24sIGpzb25EYXRhPykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQEDnu5/orqHvvJpcIiwgYWN0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGpzb25EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYmFzZVBhdGhfYW5kcm9pZCwgXCJvbkV2ZW50XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGFjdGlvbiwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2Jhc2VQYXRoX2FuZHJvaWQsIFwib25FdmVudFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6KeG6aKR5bm/5ZGK5pKt5pS+5o6l5Y+jIFxyXG4gICAgc2hvd0FkKGFkQ29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgaWYgKGFkQ29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGFkQ29uZmlnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQEDop4bpopHmkq3mlL7vvJpcIiwgYWRDb25maWcpO1xyXG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9hZFBhdGhfYW5kcm9pZCwgXCJzaG93QWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoUGxheWVyTW9kZWwuaGF2ZU9yZGVyKSBQbGF5ZXJNb2RlbC5vcmRlclZpZGVvTnVtKys7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5WSURFT19CQUNLLCAyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+eUqOaIt+S9meminVxyXG4gICAgZ2V0VXNlckFtb3VudCgpIHtcclxuICAgICAgICBsZXQgbSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgbSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldFVzZXJBbW91bnRcIiwgXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIG0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQbGF5ZXJNb2RlbC5pbml0TW9uZXkobSk7XHJcbiAgICAgICAgdGhpcy5zeXN0ZW1OYW1lKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKueUqOaIt+S9meminSoqKioqKioqKioqKioqKioqKioqXCIsIG0pO1xyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfVxyXG4gICAgLy/lvq7kv6HmmK/lkKbnmbvlvZVcclxuICAgIGlzV1hCaW5kKCkge1xyXG4gICAgICAgIGxldCBpID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgaSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImlzV1hCaW5kXCIsIFwiKClaXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lwaG9uZSgpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIC8v5ZWG5Lia5YyW5byA5YWzXHJcbiAgICBpc0J1c2lPcGVuKCkge1xyXG4gICAgICAgIGxldCBpID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgaSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImlzQnVzaU9wZW5cIiwgXCIoKVpcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSXBob25lKCkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgLy/pgIDlh7rlvq7kv6HnmbvlvZVcclxuICAgIHVuQmluZFdYKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcInVuQmluZFdYXCIsIFwiKClWXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lwaG9uZSgpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v55So5oi35pi156ewXHJcbiAgICBnZXRVc2VyTmlja05hbWUoKSB7XHJcbiAgICAgICAgbGV0IG4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgbiA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldFVzZXJOaWNrTmFtZVwiLCBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lwaG9uZSgpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkBAIGdldFVzZXJOaWNrTmFtZeeUqOaIt+aYteensDpcIiwgbik7XHJcbiAgICAgICAgcmV0dXJuIG47XHJcbiAgICB9XHJcbiAgICAvL+eUqOaIt0lEXHJcbiAgICBnZXREZXZpY2VJZCgpIHtcclxuICAgICAgICBsZXQgbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBuID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsIFwiZ2V0RGV2aWNlSWRcIiwgXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCBnZXREZXZpY2VJZOeUqOaIt2lkOlwiLCBuKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH1cclxuICAgIC8v55So5oi35aS05YOPXHJcbiAgICBnZXRVc2VySWNvbigpIHtcclxuICAgICAgICBsZXQgbiA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgbiA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldFVzZXJJY29uXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSXBob25lKCkpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAgZ2V0VXNlckljb27nlKjmiLflpLTlg486XCIsIG4pO1xyXG4gICAgICAgIHJldHVybiBuO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6ZqQ56eB5pS/562WXHJcbiAgICBvcGVuUHJpdmFjeSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCwgXCJvcGVuUHJpdmFjeVwiLCBcIigpVlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+eUqOaIt+WNj+iurlxyXG4gICAgb3BlblVzZXJTZXJ2aWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcIm9wZW5Vc2VyU2VydmljZVwiLCBcIigpVlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+aEj+ingeWPjemmiFxyXG4gICAgb3BlbkZlZWRCYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcIm9wZW5GZWVkQmFja1wiLCBcIigpVlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOavj+aXpeS7u+WKoeS/oeaBr1xyXG4gICAgICovXHJcbiAgICBnZXREYWlseVRhc2tJbmZvKCkge1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhU3RyID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsIFwiZ2V0RGFpbHlUYXNrSW5mb1wiLCBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIue6ouWMheWkqeWkqeS6q1wiLC8v5Lu75Yqh6K+05piOXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0YXNrSWRcIjogMSwvL+S7u+WKoWlk77yM6aKG5Y+W5aWW5Yqx5pe26ZyA6KaBXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW1lc1wiOiA1LC8v5Lu75Yqh5oC75qyh5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyVGltZXNcIjogMC8v5Lu75Yqh5bey5a6M5oiQ55qE5qyh5pWwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIumSnuelqOmAgeS4jeWBnFwiLC8v5Lu75Yqh6K+05piOXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0YXNrSWRcIjogMiwvL+S7u+WKoWlk77yM6aKG5Y+W5aWW5Yqx5pe26ZyA6KaBXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW1lc1wiOiA1LC8v5Lu75Yqh5oC75qyh5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyVGltZXNcIjogNS8v5Lu75Yqh5bey5a6M5oiQ55qE5qyh5pWwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiaW5mb1wiOiBcIuavj+WkqeWlveaUtuaIkFwiLC8v5Lu75Yqh6K+05piOXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0YXNrSWRcIjogMywvL+S7u+WKoWlk77yM6aKG5Y+W5aWW5Yqx5pe26ZyA6KaBXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW1lc1wiOiA1LC8v5Lu75Yqh5oC75qyh5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyVGltZXNcIjogMS8v5Lu75Yqh5bey5a6M5oiQ55qE5qyh5pWwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5q+P5pel5Lu75Yqh5L+h5oGvXCIsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDpooblj5bmr4/ml6Xku7vliqHlpZblirHlkI7kuIrmiqXku7vliqHlrozlrozmiJBcclxuICAgICAqIEBwYXJhbSBpdGVtSWQg5a+55bqUaWRcclxuICAgICAqL1xyXG4gICAgdG9GaW5pc2hUYXNrKHRhc2tJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAg6aKG5Y+W5q+P5pel5Lu75Yqh5aWW5Yqx5ZCO5LiK5oql5Lu75YqhdG9GaW5pc2hUYXNrXCIsIHRhc2tJZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsIFwidG9GaW5pc2hUYXNrXCIsIFwiKEkpVlwiLCB0YXNrSWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVEFTS19DT01QTEVURV9CQUNLLCB7IHJlZEJlYW46IFwiMC4yMzQyXCIsIHVzZXJSZWRCZWFuOiAxMTMzIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aJk+W8gOaPkOeOsOmhtemdolxyXG4gICAgb3BlbldpdGhkcmF3KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKuaJk+W8gOaPkOeOsOeVjOmdoioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsIFwib3BlbldpdGhkcmF3XCIsIFwiKClWXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lwaG9uZSgpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6ZyH5YqoXHJcbiAgICB2aWJyYXRlKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKumch+WKqOaViOaenCoqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9iYXNlQ29jb3MsIFwidmlicmF0ZVwiLCBcIihJKVZcIiwgdGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/lvIDlvKDlpKnmlbBcclxuICAgIGdldExvZ2luRGF5cygpIHtcclxuICAgICAgICBsZXQgaSA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgaSA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldExvZ2luRGF5c1wiLCBcIigpSVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCDlvIDlvKDlpKnmlbBnZXRMb2dpbkRheXM6XCIsIGkpO1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgLy/po57ooYznuqLljIXml7bpl7Tpl7TpmpRcclxuICAgIGdldEZsaWdodFRpbWUoKSB7XHJcbiAgICAgICAgbGV0IGkgPSAxMDtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBpID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsIFwiZ2V0RmxpZ2h0VGltZVwiLCBcIigpSVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJcGhvbmUoKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCDpo57ooYznuqLljIXml7bpl7Tpl7TpmpRnZXRGbGlnaHRUaW1lOlwiLCBpKTtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIC8v5Li76aG16Z2i6ZuG5biC562J57qnXHJcbiAgICBnZXRKU0xldmVsSW5mbygpIHtcclxuICAgICAgICBsZXQgbjtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBsZXQganNvblN0ciA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldEpTTGV2ZWxJbmZvXCIsIFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W562J57qn55u45YWz5L+h5oGvZ2V0SlNMZXZlbEluZm86XCIsIGpzb25TdHIpO1xyXG4gICAgICAgICAgICBuID0gSlNPTi5wYXJzZShqc29uU3RyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuID0ge1xyXG4gICAgICAgICAgICAgICAgXCJqc0xldmVsXCI6IDEsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgIFwianhPcmRlck51bVwiOiAxMCwvL+mbhuW4guWNh+e6p+mcgOimgeeahOiuouWNleaVsCDnlKjkuo7orqHnrpfov5vluqZcclxuICAgICAgICAgICAgICAgIFwidXNlckp4T3JkZXJOdW1cIjogMS8v5b2T5YmN6K6i5Y2V5pWwIOeUqOS6juiuoeeul+i/m+W6plxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAg5Li76aG16Z2i6ZuG5biC562J57qnOlwiLCBuKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH1cclxuICAgIC8v6ZuG5biC562J57qn5YiX6KGoXHJcbiAgICBnZXRCYXphYXJMZXZlbEluZm8oKSB7XHJcbiAgICAgICAgbGV0IG47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAgbGV0IGpzb25TdHIgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCwgXCJnZXRCYXphYXJMZXZlbEluZm9cIiwgXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcclxuICAgICAgICAgICAgbiA9IEpTT04ucGFyc2UoanNvblN0cik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbiA9IHtcclxuICAgICAgICAgICAgICAgIFwianNBbW91bnRcIjogMzAwLC8v6ZuG5biC57Sv6K6h6aKd5bqmXHJcbiAgICAgICAgICAgICAgICBcInVzZXJPcmRlck51bVwiOiAyMCwvL+eUqOaIt+iuouWNleaVsOmHj1xyXG4gICAgICAgICAgICAgICAgXCJqc0xldmVsXCI6IDYsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgIFwianNUYXNrSW5mb3NcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZXZlbFwiOiAxLC8v6ZuG5biC562J57qnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3JkZXJOdW1cIjogMTAsLy/pm4bluILorqLljZXmlbDph49cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbW91bnRcIjogNSwvL+WlluWKsemHkeminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4X211XCI6IFwiMSVcIiwvL+aPkOeOsOavlOS+i1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxldmVsXCI6IDIsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlck51bVwiOiAyMCwvL+mbhuW4guiuouWNleaVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAxNSwvL+WlluWKsemHkeminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4X211XCI6IFwiMSVcIiwvL+aPkOeOsOavlOS+i1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxldmVsXCI6IDMsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlck51bVwiOiAzMCwvL+mbhuW4guiuouWNleaVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAyNSwvL+WlluWKsemHkeminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4X211XCI6IFwiMSVcIiwvL+aPkOeOsOavlOS+i1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxldmVsXCI6IDQsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlck51bVwiOiA0MCwvL+mbhuW4guiuouWNleaVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiAzNSwvL+WlluWKsemHkeminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4X211XCI6IFwiMSVcIiwvL+aPkOeOsOavlOS+i1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxldmVsXCI6IDUsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlck51bVwiOiA1MCwvL+mbhuW4guiuouWNleaVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiA0NSwvL+WlluWKsemHkeminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4X211XCI6IFwiMSVcIiwvL+aPkOeOsOavlOS+i1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxldmVsXCI6IDYsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlck51bVwiOiA2MCwvL+mbhuW4guiuouWNleaVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiA1NSwvL+WlluWKsemHkeminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4X211XCI6IFwiMSVcIiwvL+aPkOeOsOavlOS+i1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxldmVsXCI6IDcsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlck51bVwiOiA3MCwvL+mbhuW4guiuouWNleaVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiA2NSwvL+WlluWKsemHkeminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4X211XCI6IFwiMSVcIiwvL+aPkOeOsOavlOS+i1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxldmVsXCI6IDgsLy/pm4bluILnrYnnuqdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlck51bVwiOiA4MCwvL+mbhuW4guiuouWNleaVsOmHj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFtb3VudFwiOiA3NSwvL+WlluWKsemHkeminVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR4X211XCI6IFwiMSVcIiwvL+aPkOeOsOavlOS+i1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAg5Li76aG16Z2i6ZuG5biC562J57qnOlwiLCBuKTtcclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH1cclxuICAgIC8v5Y2H57qnXHJcbiAgICB1cEpTTGV2ZWwoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCDljYfnuqd1cEpTTGV2ZWxcIilcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCwgXCJ1cEpTTGV2ZWxcIiwgXCIoKVZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19MRVZFTF9VUCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/pmaTomavnuqLljIXphY3nva5cclxuICAgIGdldFdvcm1Db25maWcoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCDpmaTomavnuqLljIXphY3nva4sZ2V0V29ybUNvbmZpZ1wiKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldFdvcm1Db25maWdcIiwgXCIoKVZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19SRVdBUkRfQ09ORklHLCB7XHJcbiAgICAgICAgICAgICAgICBjb25maWdJZDogMTYsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAxNlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+mjnuihjOe6ouWMhemFjee9rlxyXG4gICAgZ2V0RmxpZ2h0Q29uZmlnKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAg6aOe6KGM57qi5YyF6YWN572uLGdldEZsaWdodENvbmZpZ1wiKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldEZsaWdodENvbmZpZ1wiLCBcIigpVlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuU0RLX1JFV0FSRF9DT05GSUcsIHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0lkOiAxMSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IDExXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6i5Y2V57qi5YyF6YWN572uXHJcbiAgICBnZXRPcmRlclJld2FyZENvbmZpZygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkBAIOiuouWNlee6ouWMhemFjee9rixnZXRPcmRlclJld2FyZENvbmZpZ1wiKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldE9yZGVyUmV3YXJkQ29uZmlnXCIsIFwiKClWXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TREtfUkVXQVJEX0NPTkZJRywge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnSWQ6IDE1LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogMTUsXHJcbiAgICAgICAgICAgICAgICB0aW1lczogMyxcclxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeVZpZGVvOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5oub5b6F6aG+5a6i57qi5YyF6YWN572uXHJcbiAgICBnZXRDdXN0b21lckNvbmZpZyhpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAg5oub5b6F6aG+5a6i57qi5YyF6YWN572uLGdldEN1c3RvbWVyQ29uZmln77yaXCIsIGlkKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldEN1c3RvbWVyQ29uZmlnXCIsIFwiKEkpVlwiLCBpZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19SRVdBUkRfQ09ORklHLCB7XHJcbiAgICAgICAgICAgICAgICBjb25maWdJZDogMTcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAxNyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/ovpvoi6bnuqLljIVcclxuICAgIGdldEhhcmRDb25maWcoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCDovpvoi6bnuqLljIUsZ2V0SGFyZENvbmZpZ1wiKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldEhhcmRDb25maWdcIiwgXCIoKVZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19SRVdBUkRfQ09ORklHLCB7XHJcbiAgICAgICAgICAgICAgICBjb25maWdJZDogMTMsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAxMyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/lj43ppojnuqLljIVcclxuICAgIGdldEZlZWRiYWNrQ29uZmlnKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAg5Y+N6aaI57qi5YyFLGdldEZlZWRiYWNrQ29uZmlnXCIpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsIFwiZ2V0RmVlZGJhY2tDb25maWdcIiwgXCIoKVZcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19SRVdBUkRfQ09ORklHLCB7XHJcbiAgICAgICAgICAgICAgICBjb25maWdJZDogMTQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAxNCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/pooblj5blpZblirFcclxuICAgIGdldFJlZFBhY2tSZXdhcmQoY29uZmlnSWQsIHBsYXl2aWRlbyA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCDpooblj5blpZblirEsZ2V0UmVkUGFja1Jld2FyZFwiLCBjb25maWdJZCwgXCIgICAgICBcIiwgcGxheXZpZGVvKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImdldFJlZFBhY2tSZXdhcmRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7WilWXCIsIGNvbmZpZ0lkLCBwbGF5dmlkZW8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChjb25maWdJZCA9PSAxNikge1xyXG4gICAgICAgICAgICAvLyAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19SRVdBUkRfR09ULCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJyZWRCZWFuXCI6IFwiMS41MzNcIiwvL+mihuWPlumHkeminVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwidXNlclJlZEJlYW5cIjogXCIxMTIuMzNcIiwvL+eUqOaIt+W9k+WJjeaAu+S9meminVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwidHlwZVwiOiAxNiwvL+e6ouWMheexu+WeiyBcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGNvbmZpZ0lkID09IDExKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuU0RLX1JFV0FSRF9HT1QsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBcInJlZEJlYW5cIjogXCIxLjMzMzNcIiwvL+mihuWPlumHkeminVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwidXNlclJlZEJlYW5cIjogXCIxMTMuMTFcIiwvL+eUqOaIt+W9k+WJjeaAu+S9meminVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwidHlwZVwiOiAxMSwvL+e6ouWMheexu+WeiyBcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGNvbmZpZ0lkID09IDE1KSB7XHJcbiAgICAgICAgICAgIC8vICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuU0RLX1JFV0FSRF9HT1QsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBcImNvZGVcIjogMCwgLy8wLeaIkOWKnyDlhbbku5bpooblj5blpLHotKVcclxuICAgICAgICAgICAgLy8gICAgICAgICBcIm1zZ1wiOiBcIumihuWPluaIkOWKn1wiLCAvL+mdnjDmg4XlhrXkvJrnu5nlh7rlr7nlupRtc2cg6YWM5oOF5aSE55CGXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJyZWRCZWFuXCI6IFwiMS4zMzVcIiwvL+mihuWPlumHkeminVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwidXNlclJlZEJlYW5cIjogXCIxMTIuMzNcIiwvL+eUqOaIt+W9k+WJjeaAu+S9meminVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwidHlwZVwiOiAxNSwvL+e6ouWMheexu+WeiyBcclxuICAgICAgICAgICAgLy8gICAgICAgICBcImJlc2VSZWRCZWFuXCI6IFwiMS4yXCIsLy/mnKzmrKHln7rnoYDnuqLljIUgICAg6K6i5Y2V57qi5YyF5omN5Lya6L+U5Zue77yM5YW25LuW57G75Z6L5LiN6L+U5ZueXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJhZGRSZWRCZWFuXCI6IFwiMC4zXCIsLy/mnKzmrKHliqDmiJDnuqLljIXlgLwgICAg6K6i5Y2V57qi5YyF5omN5Lya6L+U5Zue77yM5YW25LuW57G75Z6L5LiN6L+U5ZueXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJhZGRSZWRNdVwiOiBcIjI1XCIvL+acrOasoeWKoOaIkOe6ouWMheezu+aVsCAgICDorqLljZXnuqLljIXmiY3kvJrov5Tlm57vvIzlhbbku5bnsbvlnovkuI3ov5Tlm55cclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGNvbmZpZ0lkID09IDE3KSB7XHJcbiAgICAgICAgICAgIC8vICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuU0RLX1JFV0FSRF9HT1QsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBcImNvZGVcIjogMCwgLy8wLeaIkOWKnyDlhbbku5bpooblj5blpLHotKVcclxuICAgICAgICAgICAgLy8gICAgICAgICBcIm1zZ1wiOiBcIumihuWPluaIkOWKn1wiLCAvL+mdnjDmg4XlhrXkvJrnu5nlh7rlr7nlupRtc2cg6YWM5oOF5aSE55CGXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJyZWRCZWFuXCI6IFwiMS41MzMzXCIsLy/pooblj5bph5Hpop1cclxuICAgICAgICAgICAgLy8gICAgICAgICBcInVzZXJSZWRCZWFuXCI6IFwiMTEyLjMzXCIsLy/nlKjmiLflvZPliY3mgLvkvZnpop1cclxuICAgICAgICAgICAgLy8gICAgICAgICBcInR5cGVcIjogMTcsLy/nuqLljIXnsbvlnosgXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChjb25maWdJZCA9PSAxMykge1xyXG4gICAgICAgICAgICAvLyAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19SRVdBUkRfR09ULCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJjb2RlXCI6IDAsIC8vMC3miJDlip8g5YW25LuW6aKG5Y+W5aSx6LSlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJtc2dcIjogXCLpooblj5bmiJDlip9cIiwgLy/pnZ4w5oOF5Ya15Lya57uZ5Ye65a+55bqUbXNnIOmFjOaDheWkhOeQhlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwicmVkQmVhblwiOiBcIjMuMzQ0NVwiLC8v6aKG5Y+W6YeR6aKdXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJ1c2VyUmVkQmVhblwiOiBcIjExMy4zM1wiLC8v55So5oi35b2T5YmN5oC75L2Z6aKdXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgXCJ0eXBlXCI6IDEzLC8v57qi5YyF57G75Z6LIFxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoY29uZmlnSWQgPT0gMTQpIHtcclxuICAgICAgICAgICAgLy8gICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TREtfUkVXQVJEX0dPVCwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwiY29kZVwiOiAwLCAvLzAt5oiQ5YqfIOWFtuS7lumihuWPluWksei0pVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFwibXNnXCI6IFwi6aKG5Y+W5oiQ5YqfXCIsIC8v6Z2eMOaDheWGteS8mue7meWHuuWvueW6lG1zZyDphYzmg4XlpITnkIZcclxuICAgICAgICAgICAgLy8gICAgICAgICBcInJlZEJlYW5cIjogXCIzLjMyMjI1XCIsLy/pooblj5bph5Hpop1cclxuICAgICAgICAgICAgLy8gICAgICAgICBcInVzZXJSZWRCZWFuXCI6IFwiMTEzLjMzXCIsLy/nlKjmiLflvZPliY3mgLvkvZnpop1cclxuICAgICAgICAgICAgLy8gICAgICAgICBcInR5cGVcIjogMTQsLy/nuqLljIXnsbvlnosgXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhcIue6ouWMhemFjee9ruWHhuWkh+S4rSzor7fph43mlrDpooblj5ZcIilcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19SRVdBUkRfTE9TVCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/pooblj5borqLljZXkuIrmiqVcclxuICAgIGdldE9yZGVyVGFzayhvcmRlcklkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCDpooblj5borqLljZXkuIrmiqUsZ2V0T3JkZXJUYXNrXCIsIG9yZGVySWQpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbmRyb2lkKCkpIHtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsIFwiZ2V0T3JkZXJUYXNrXCIsIFwiKEkpVlwiLCBvcmRlcklkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfR0VUX1NVQ0NFU1MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5paw5omL5piv5ZCm6aKG5Y+WXHJcbiAgICBoYXNOZXdPcmRlclJld2FyZCgpIHtcclxuICAgICAgICBsZXQgaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBpc05ldyA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImhhc05ld09yZGVyUmV3YXJkXCIsIFwiKClaXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQEAg5paw5omL5piv5ZCm6aKG5Y+WLGhhc05ld09yZGVyUmV3YXJkXCIsIGlzTmV3KVxyXG4gICAgICAgIHJldHVybiBpc05ldztcclxuICAgIH1cclxuICAgIC8v5piv5ZCm6L+Y5Y+v5Lul6aKG5Y+W5oub5b6F6aG+5a6i55qE57qi5YyF5aWW5YqxXHJcbiAgICBoYXNDdXN0b21lclJlZFJld2FyZCgpIHtcclxuICAgICAgICBsZXQgaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBpc05ldyA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcImhhc0N1c3RvbWVyUmVkUmV3YXJkXCIsIFwiKClaXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJAQCDmmK/lkKbov5jlj6/ku6Xpooblj5bmi5vlvoXpob7lrqLnmoTnuqLljIXlpZblirEsaGFzQ3VzdG9tZXJSZWRSZXdhcmRcIiwgaXNOZXcpXHJcbiAgICAgICAgcmV0dXJuIGlzTmV3O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDov5vlhaXmuLjmiI/lkI7kuIrmiqVcclxuICAgICAqIEBwYXJhbSB0eXBlIDDmuLjmiI/lkK/liqjml7bvvIwx6L+b5YWl5ri45oiP5Li76aG1XHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnRHYW1lKHR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkBAIOi/m+WFpea4uOaIj+WQjuS4iuaKpSxvblN0YXJ0R2FtZVwiLCB0eXBlKVxyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcIm9uU3RhcnRHYW1lXCIsIFwiKEkpVlwiLCB0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iuouWNlee6ouWMheaxoFxyXG4gICAgZ2V0T3JkZXJQb29sRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCwgXCJnZXRPcmRlclBvb2xEYXRhXCIsIFwiKClWXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TREtfVklERU9fTlVNLCAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5o+S5bGP5bm/5ZGKXHJcbiAgICByZXBvcnRUcmlnZ2VyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQW5kcm9pZCgpKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLCBcInJlcG9ydFRyaWdnZXJcIiwgXCIoKVZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2UgcGFuZWxcIik7XHJcblxyXG4gICAgfVxyXG4gICAgLy/orqLljZXns7vmlbBcclxuICAgIGdldE9yZGVyQ291bnRBZGQoKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IDEwMDtcclxuICAgICAgICBpZiAodGhpcy5pc0FuZHJvaWQoKSkge1xyXG4gICAgICAgICAgICBudW0gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCwgXCJnZXRPcmRlckNvdW50QWRkXCIsIFwiKClJXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldE9yZGVyQ291bnRBZGQg6K6i5Y2V57O75pWwXCIsIG51bSk7XHJcblxyXG4gICAgICAgIHJldHVybiBudW07XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNES01hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxud2luZG93W1wiWFNTZGtDYWxsYmFja1wiXSA9IGZ1bmN0aW9uIChhY3Rpb24sIGpzb25TdHIpIHtcclxuICAgIGlmIChVdGlscy5pc1VuZGVmaW5lZChqc29uU3RyKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbiArIFwiKioqKioqKioqKioqKioq5YmN56uv5pS25Yiw5raI5oGvKioqKioqKioqKioqKioqXCIsIFwiICAgXCIsIGpzb25TdHIpO1xyXG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25TdHIpO1xyXG4gICAgaWYgKGFjdGlvbiA9PSBcInJlZHBhY2tldF9jb25maWdcIikgeyAgICAvLzEuIOe7k+i0pumihuWPlue6ouWMheWlluWKsVxyXG4gICAgICAgIGlmIChkYXRhLmNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhkYXRhLm1zZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKipyZWRwYWNrZXRfY29uZmlnKioqKioqKjIuIOe6ouWMhemFjee9ruaOpeWPo+WbnuiwgyoqKioqKioqKioqKioqKioqKioqXCIsIGRhdGEpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TREtfUkVXQVJEX0NPTkZJRywgZGF0YS5jb25maWcpO1xyXG4gICAgICAgIC8vICAgICBcImNvZGVcIjogMCwvLzDpooblj5bmiJDlip8g5YW25LuW5aSx6LSlXHJcbiAgICAgICAgLy8gICAgICAgICBcIm1zZ1wiOiBcIumihuWPluaIkOWKn1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIFwiY29uZmlnXCI6IHtcclxuICAgICAgICAvLyAgICAgICAgIFwiY29uZmlnSWRcIjogXCJVVUlEXCIsIC8v5q2k5qyh6K+35rGC6I635Y+W55qE6YWN572u55qESUTlgLzvvIzmr4/mrKHojrflj5bpg73kuI3kuIDmoLdcclxuICAgICAgICAvLyAgICAgICAgICAgICBcInR5cGVcIjogMTEvL+e6ouWMheexu+WeiyBcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAg57qi5YyF57G75Z6L5a+55bqU5aaC5LiL77yaXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBzdGF0aWMgZmluYWwgaW50IFJFRF9QQUNLX1RZUEVfRkxJR0hUID0gMTE7Ly/po57ooYznuqLljIVcclxuICAgICAgICAvLyBwcml2YXRlIHN0YXRpYyBmaW5hbCBpbnQgUkVEX1BBQ0tfVFlQRV9EQUlMWV9UQVNLID0gMTI7Ly/mr4/ml6Xku7vliqHnuqLljIVcclxuICAgICAgICAvLyBwcml2YXRlIHN0YXRpYyBmaW5hbCBpbnQgUkVEX1BBQ0tfVFlQRV9IQVJEID0gMTM7Ly/ovpvoi6bnuqLljIVcclxuICAgICAgICAvLyBwcml2YXRlIHN0YXRpYyBmaW5hbCBpbnQgUkVEX1BBQ0tfVFlQRV9GRUVEQkFDSyA9IDE0Oy8v5Zue6aaI57qi5YyFXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBzdGF0aWMgZmluYWwgaW50IFJFRF9QQUNLX1RZUEVfT1JERVIgPSAxNTsvL+iuouWNlee6ouWMhVxyXG4gICAgICAgIC8vIHByaXZhdGUgc3RhdGljIGZpbmFsIGludCBSRURfUEFDS19UWVBFX1dPUk0gPSAxNjsvL+mZpOiZq1xyXG4gICAgICAgIC8vIHByaXZhdGUgc3RhdGljIGZpbmFsIGludCBSRURfUEFDS19UWVBFX0NVU1RPTUVSID0gMTc7Ly/mi5vlvoXpob7lrqJcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwicmVkcGFja2V0X2dvdFwiKSB7ICAgICAvL+e6ouWMhemihuWPluaOpeWPo+WbnuiwgyBcclxuICAgICAgICBpZiAoZGF0YS5jb2RlICE9IDApIHtcclxuICAgICAgICAgICAgTUtVdGlscy5hbGVydFRpcHMoZGF0YS5tc2crXCIs6K+36YeN5paw6aKG5Y+WXCIpXHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TREtfUkVXQVJEX0xPU1QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKnJlZHBhY2tldF9nb3QqKioqKioq57qi5YyF6aKG5Y+W5o6l5Y+j5Zue6LCDKioqKioqKioqKioqKioqKioqKipcIiwgZGF0YSk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19SRVdBUkRfR09ULCBkYXRhKTtcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwiY29kZVwiOjAgLy8wLeaIkOWKnyDlhbbku5bpooblj5blpLHotKVcclxuICAgICAgICAvLyAgICAgXCJtc2dcIjogXCLpooblj5bmiJDlip9cIiwgLy/pnZ4w5oOF5Ya15Lya57uZ5Ye65a+55bqUbXNnIOmFjOaDheWkhOeQhlxyXG4gICAgICAgIC8vICAgICBcInJlZEJlYW5cIjpcIjEuNVwiLC8v6aKG5Y+W6YeR6aKdXHJcbiAgICAgICAgLy8gICAgIFwidXNlclJlZEJlYW5cIjpcIjExMi4zM1wiLC8v55So5oi35b2T5YmN5oC75L2Z6aKdXHJcbiAgICAgICAgLy8gICAgIFwidHlwZVwiOjExLC8v57qi5YyF57G75Z6LIFxyXG4gICAgICAgIC8vICAgICBcImJlc2VSZWRCZWFuXCI6XCIxLjJcIiwvL+acrOasoeWfuuehgOe6ouWMhSAgICDorqLljZXnuqLljIXmiY3kvJrov5Tlm57vvIzlhbbku5bnsbvlnovkuI3ov5Tlm55cclxuICAgICAgICAvLyAgICAgXCJhZGRSZWRCZWFuXCI6XCIwLjNcIiwvL+acrOasoeWKoOaIkOe6ouWMheWAvCAgICDorqLljZXnuqLljIXmiY3kvJrov5Tlm57vvIzlhbbku5bnsbvlnovkuI3ov5Tlm55cclxuICAgICAgICAvLyAgICAgXCJhZGRSZWRNdVwiOlwiMjVcIi8v5pys5qyh5Yqg5oiQ57qi5YyF57O75pWwICAgIOiuouWNlee6ouWMheaJjeS8mui/lOWbnu+8jOWFtuS7luexu+Wei+S4jei/lOWbnlxyXG4gICAgICAgIC8vIH1cclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiZmluaXNoX3Rhc2tfcmVzdWx0XCIpIHsgICAgIC8vNS4g6aKG5Y+W5Lu75Yqh5aWW5Yqx57uT5p6c5Zue6LCDXHJcbiAgICAgICAgaWYgKGRhdGEuY29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuYWxlcnRUaXBzKGRhdGEubXNnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5UQVNLX0NPTVBMRVRFX0JBQ0ssIGRhdGEpO1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJ0eXBlXCI6IDEsIC8v5Lu75Yqh57G75Z6LXHJcbiAgICAgICAgLy8gICAgIFwidGFza0lkXCI6MSAvL+S7u+WKoWlkIOeUqOS6juWuouaIt+err+mihuWPluS7u+WKoeWlluWKseaXtuWAmeiOt+WPluWvueW6lOeahOmHkemineWSjOmihuWPluWQjuS4iuaKpVxyXG4gICAgICAgIC8vICAgICBcInBhcmFtXCI6MTAwLC8v5Lu75Yqh5a+55bqU5Y+C5pWwIOWuouaIt+err+aXoOmcgOWFs+azqFxyXG4gICAgICAgIC8vICAgICBcInN0YXR1c1wiOjAvL+S7u+WKoeeKtuaAgSDpu5jorqQwICAwLeacquWujOaIkCAx5bey5a6M5oiQIDLlt7Lpooblj5YgXHJcbiAgICAgICAgLy8gICAgIC8v5oiQ5bCx5Lu75Yqh5LiN6L+U5Zue5bey6aKG5Y+W55qE5Lu75Yqh5pWw5o2uIOavj+aXpeS7u+WKoei/lOWbnlxyXG4gICAgICAgIC8vIH1cclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYmF6YWFyX3VwX3Jlc3VsdFwiKSB7ICAgICAvLzQuIOmbhuW4guWNh+e6p+e7k+aenOWbnuiwg1xyXG4gICAgICAgIGlmIChkYXRhLmNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhkYXRhLm1zZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuU0RLX0xFVkVMX1VQKTtcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIFwidHlwZVwiOiAxLCAvL+S7u+WKoeexu+Wei1xyXG4gICAgICAgIC8vICAgICBcInRhc2tJZFwiOjEgLy/ku7vliqFpZCDnlKjkuo7lrqLmiLfnq6/pooblj5bku7vliqHlpZblirHml7blgJnojrflj5blr7nlupTnmoTph5Hpop3lkozpooblj5blkI7kuIrmiqVcclxuICAgICAgICAvLyAgICAgXCJwYXJhbVwiOjEwMCwvL+S7u+WKoeWvueW6lOWPguaVsCDlrqLmiLfnq6/ml6DpnIDlhbPms6hcclxuICAgICAgICAvLyAgICAgXCJzdGF0dXNcIjowLy/ku7vliqHnirbmgIEg6buY6K6kMCAgMC3mnKrlrozmiJAgMeW3suWujOaIkCAy5bey6aKG5Y+WIFxyXG4gICAgICAgIC8vICAgICAvL+aIkOWwseS7u+WKoeS4jei/lOWbnuW3sumihuWPlueahOS7u+WKoeaVsOaNriDmr4/ml6Xku7vliqHov5Tlm55cclxuICAgICAgICAvLyB9XHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcIm9yZGVyX3Rhc2tfcmVzdWx0XCIpIHsgICAgIC8v5b2T5YmN5Lu75Yqh5a6M5oiQ5bm25Y+v6aKG5Y+W5pWw6YeP57uT5p6c5Zue6LCDXHJcbiAgICAgICAgaWYgKGRhdGEuY29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuYWxlcnRUaXBzKGRhdGEubXNnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfR0VUX1NVQ0NFU1MpO1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgXCJhbGxDb3VudFwiOjEwIC8v5Y+v6aKG5Y+W5aWW5Yqx5oC75pWw6YePXHJcbiAgICAgICAgLy8gICAgIFwiY2pDb3VudFwiOiA3LCAvL+aIkOWwseS7u+WKoeWPr+mihuWPluWlluWKseaVsOmHj1xyXG4gICAgICAgIC8vICAgICBcImRheUNvdW50XCI6MywvL+avj+aXpeS7u+WKoeWPr+mihuWPluWlluWKseaVsOmHj1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwicG9vbF9kYXRhXCIpIHsgICAgIC8v5b2T5YmN5Lu75Yqh5a6M5oiQ5bm25Y+v6aKG5Y+W5pWw6YeP57uT5p6c5Zue6LCDXHJcbiAgICAgICAgaWYgKGRhdGEuY29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuYWxlcnRUaXBzKGRhdGEubXNnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TREtfVklERU9fTlVNLCBkYXRhLnZpZGVvQ291bnQpXHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcInN5bmNfYW1vdW50XCIpIHsgICAgIC8v5ZCM5q2l57qi5YyFXHJcbiAgICAgICAgUGxheWVyTW9kZWwuZ2V0VXNlckFtb3VudCgpO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJyZWZyZXNoX2hvbWVcIikgeyAgICAgLy/lkIzmraXlvq7kv6HnmbvlvZVcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlNES19XWEJJTkQpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRfcGxheVwiKSB7ICAgICAvL+inhumikeW8gOWni+aSreaUvlxyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5WSURFT19CQUNLLCAxKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRfb3ZlclwiKSB7ICAgICAvL+inhumikeaSreaUvue7k+adn1xyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5oYXZlT3JkZXIpIFBsYXllck1vZGVsLm9yZGVyVmlkZW9OdW0rKztcclxuICAgICAgICBQbGF5ZXJNb2RlbC5zZXRYZnpzKDEpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5WSURFT19CQUNLLCAyKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRfZXJyb3JcIikgeyAgICAgLy/op4bpopHmkq3mlL7lh7rplJlcclxuICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhcIuinhumikeWHuumUmeS6hn5+XCIpO1xyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5WSURFT19CQUNLLCAzKTtcclxuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRfY2RcIikgeyAgICAgLy/op4bpopHmkq3mlL7op4bpopHlhrfljbTkuK1cclxuICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhcIuinhumikeWGt+WNtOS4rX5+XCIpO1xyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5WSURFT19CQUNLLCA0KTtcclxuICAgIH1cclxufSJdfQ==
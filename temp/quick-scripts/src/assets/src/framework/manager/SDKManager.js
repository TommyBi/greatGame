"use strict";
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
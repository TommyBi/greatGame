import EventConst from "../../game/consts/EventConst";
import PlayerModel from "../../game/datas/PlayerModel";
import EventDispath from "../message/EventDispath";
import { EventType } from "../message/EventType";
import Launcher from "../sdk/Launcher";
import MKUtils from "../tools/MkUtils";
import Utils from "../tools/Utils";

class SDKManager {
    protected _basePath_android: string = "com.xstone.android.xsbusi.XSSdk";
    protected _moudelPath_android: string = "com.xstone.android.xsbusi.XSBusiSdk";
    protected _adPath_android: string = "com.xstone.android.xsbusi.XSAdSdk";
    protected _baseCocos: string = "org/cocos2dx/javascript/AppActivity";

    private static _instance = null;
    static getInstance(): SDKManager {
        if (SDKManager._instance == null) {
            SDKManager._instance = new SDKManager();
        }
        return SDKManager._instance;
    }
    isAndroid() {
        return false;
        // return cc.sys.os == cc.sys.OS_ANDROID;
    }
    isIphone() {
        return cc.sys.os == cc.sys.OS_IOS;
    }
    systemName() {
        if (this.isAndroid()) {
            console.log("********************设备为Andrioid");
        } else if (this.isIphone()) {
            console.log("********************设备为Iphone");
        }
    }
    //保持屏幕常亮
    setKeep() {
        if (this.isAndroid()) {
            jsb["Device"].setKeepScreenOn(true);
        }
    }

    //服务器时间
    getServerTime() {
        let time = new Date().getTime();
        if (this.isAndroid()) {
            // console.log("安卓设备", this._basePath_android);
            time = jsb.reflection.callStaticMethod(this._moudelPath_android, "getCurrentTime", "()Ljava/lang/String;");
        } else if (this.isIphone()) {
            // console.log("苹果设备");
        } else {
            // console.log("未识别设备");
        }
        // console.log("服务器时间为", time);
        return time;
    }
    //- 统计事件接口
    onEvent(action, jsonData?) {
        if (this.isAndroid()) {
            console.log("@@统计：", action);
            if (jsonData) {
                let data = JSON.stringify(jsonData);
                jsb.reflection.callStaticMethod(this._basePath_android, "onEvent", "(Ljava/lang/String;Ljava/lang/String;)V", action, data);
            }
            else jsb.reflection.callStaticMethod(this._basePath_android, "onEvent", "(Ljava/lang/String;)V", action);
        }
    }
    //视频广告播放接口 
    showAd(adConfig) {
        if (this.isAndroid()) {
            if (adConfig) {
                let data = JSON.stringify(adConfig);
                console.log("@@视频播放：", adConfig);
                jsb.reflection.callStaticMethod(this._adPath_android, "showAd", "(Ljava/lang/String;)V", data);
            }
        } else {
            if (PlayerModel.haveOrder) PlayerModel.orderVideoNum++;
            EventDispath.send(EventType.VIDEO_BACK, 2);
        }
    }
    //用户余额
    getUserAmount() {
        let m = 0;
        if (this.isAndroid()) {
            m = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserAmount", "()Ljava/lang/String;");
        } else if (this.isIphone()) {

        }
        if (!m) {
            m = 0;
        }
        PlayerModel.initMoney(m);
        this.systemName();
        console.log("********************用户余额********************", m);
        return m;
    }
    //微信是否登录
    isWXBind() {
        let i = false;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "isWXBind", "()Z");
        } else if (this.isIphone()) {

        }
        return i;
    }
    //商业化开关
    isBusiOpen() {
        let i = false;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "isBusiOpen", "()Z");
        } else if (this.isIphone()) {

        }
        return i;
    }
    //退出微信登录
    unBindWX() {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "unBindWX", "()V");
        } else if (this.isIphone()) {

        }
    }
    //用户昵称
    getUserNickName() {
        let n = undefined;
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserNickName", "()Ljava/lang/String;");
        } else if (this.isIphone()) {

        }
        console.log("@@ getUserNickName用户昵称:", n);
        return n;
    }
    //用户ID
    getDeviceId() {
        let n = undefined;
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getDeviceId", "()Ljava/lang/String;");
        } else if (this.isIphone()) {

        }
        console.log("@@ getDeviceId用户id:", n);
        return n;
    }
    //用户头像
    getUserIcon() {
        let n = "";
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserIcon", "()Ljava/lang/String;");
        } else if (this.isIphone()) {

        }
        console.log("@@ getUserIcon用户头像:", n);
        return n;
    }

    //隐私政策
    openPrivacy() {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openPrivacy", "()V");
        } else if (this.isIphone()) {

        }
    }
    //用户协议
    openUserService() {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openUserService", "()V");
        } else if (this.isIphone()) {

        }
    }
    //意见反馈
    openFeedBack() {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openFeedBack", "()V");
        } else if (this.isIphone()) {

        }
    }
    /**
     * 每日任务信息
     */
    getDailyTaskInfo() {
        let data;
        if (this.isAndroid()) {
            let dataStr = jsb.reflection.callStaticMethod(this._moudelPath_android, "getDailyTaskInfo", "()Ljava/lang/String;");
            data = JSON.parse(dataStr);
        } else {
            data = [
                {
                    "info": "红包天天享",//任务说明
                    "taskId": 1,//任务id，领取奖励时需要
                    "times": 5,//任务总次数
                    "userTimes": 0//任务已完成的次数
                },
                {
                    "info": "钞票送不停",//任务说明
                    "taskId": 2,//任务id，领取奖励时需要
                    "times": 5,//任务总次数
                    "userTimes": 5//任务已完成的次数
                },
                {
                    "info": "每天好收成",//任务说明
                    "taskId": 3,//任务id，领取奖励时需要
                    "times": 5,//任务总次数
                    "userTimes": 1//任务已完成的次数
                },
            ]
        }
        console.log("每日任务信息", data);
        return data;
    }
    /**
     * 领取每日任务奖励后上报任务完完成
     * @param itemId 对应id
     */
    toFinishTask(taskId) {
        console.log("@@ 领取每日任务奖励后上报任务toFinishTask", taskId);
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "toFinishTask", "(I)V", taskId);
        } else {

            EventDispath.send(EventType.TASK_COMPLETE_BACK, { redBean: "0.2342", userRedBean: 1133 });
        }
    }

    //打开提现页面
    openWithdraw() {
        console.log("*************************打开提现界面*************************");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openWithdraw", "()V");
        } else if (this.isIphone()) {

        }
    }
    //震动
    vibrate(time: number) {
        console.log("*************************震动效果*************************");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._baseCocos, "vibrate", "(I)V", time);
        } else {

        }
    }
    //开张天数
    getLoginDays() {
        let i = 1;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "getLoginDays", "()I");
        } else if (this.isIphone()) {

        }
        console.log("@@ 开张天数getLoginDays:", i);
        return i;
    }
    //飞行红包时间间隔
    getFlightTime() {
        let i = 10;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "getFlightTime", "()I");
        } else if (this.isIphone()) {

        }
        console.log("@@ 飞行红包时间间隔getFlightTime:", i);
        return i;
    }
    //主页面集市等级
    getJSLevelInfo() {
        let n;
        if (this.isAndroid()) {
            let jsonStr = jsb.reflection.callStaticMethod(this._moudelPath_android, "getJSLevelInfo", "()Ljava/lang/String;");
            console.log("获取等级相关信息getJSLevelInfo:", jsonStr);
            n = JSON.parse(jsonStr);
        } else {
            n = {
                "jsLevel": 1,//集市等级
                "jxOrderNum": 10,//集市升级需要的订单数 用于计算进度
                "userJxOrderNum": 1//当前订单数 用于计算进度
            }
        }
        console.log("@@ 主页面集市等级:", n);
        return n;
    }
    //集市等级列表
    getBazaarLevelInfo() {
        let n;
        if (this.isAndroid()) {
            let jsonStr = jsb.reflection.callStaticMethod(this._moudelPath_android, "getBazaarLevelInfo", "()Ljava/lang/String;");
            n = JSON.parse(jsonStr);
        } else {
            n = {
                "jsAmount": 300,//集市累计额度
                "userOrderNum": 20,//用户订单数量
                "jsLevel": 6,//集市等级
                "jsTaskInfos": [
                    {
                        "level": 1,//集市等级
                        "orderNum": 10,//集市订单数量
                        "amount": 5,//奖励金额
                        "tx_mu": "1%",//提现比例
                    },
                    {
                        "level": 2,//集市等级
                        "orderNum": 20,//集市订单数量
                        "amount": 15,//奖励金额
                        "tx_mu": "1%",//提现比例
                    },
                    {
                        "level": 3,//集市等级
                        "orderNum": 30,//集市订单数量
                        "amount": 25,//奖励金额
                        "tx_mu": "1%",//提现比例
                    },
                    {
                        "level": 4,//集市等级
                        "orderNum": 40,//集市订单数量
                        "amount": 35,//奖励金额
                        "tx_mu": "1%",//提现比例
                    },
                    {
                        "level": 5,//集市等级
                        "orderNum": 50,//集市订单数量
                        "amount": 45,//奖励金额
                        "tx_mu": "1%",//提现比例
                    },
                    {
                        "level": 6,//集市等级
                        "orderNum": 60,//集市订单数量
                        "amount": 55,//奖励金额
                        "tx_mu": "1%",//提现比例
                    },
                    {
                        "level": 7,//集市等级
                        "orderNum": 70,//集市订单数量
                        "amount": 65,//奖励金额
                        "tx_mu": "1%",//提现比例
                    },
                    {
                        "level": 8,//集市等级
                        "orderNum": 80,//集市订单数量
                        "amount": 75,//奖励金额
                        "tx_mu": "1%",//提现比例
                    },

                ]
            }
        }
        console.log("@@ 主页面集市等级:", n);
        return n;
    }
    //升级
    upJSLevel() {
        console.log("@@ 升级upJSLevel")
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "upJSLevel", "()V");
        } else {
            EventDispath.send(EventType.SDK_LEVEL_UP);
        }
    }
    //除虫红包配置
    getWormConfig() {
        console.log("@@ 除虫红包配置,getWormConfig")
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getWormConfig", "()V");
        } else {
            EventDispath.send(EventType.SDK_REWARD_CONFIG, {
                configId: 16,
                type: 16
            });
        }
    }
    //飞行红包配置
    getFlightConfig() {
        console.log("@@ 飞行红包配置,getFlightConfig")
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getFlightConfig", "()V");
        } else {
            EventDispath.send(EventType.SDK_REWARD_CONFIG, {
                configId: 11,
                type: 11
            });
        }
    }
    //订单红包配置
    getOrderRewardConfig() {
        console.log("@@ 订单红包配置,getOrderRewardConfig")
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getOrderRewardConfig", "()V");
        } else {
            EventDispath.send(EventType.SDK_REWARD_CONFIG, {
                configId: 15,
                type: 15,
                times: 3,
                mandatoryVideo: true
            });
        }
    }
    //招待顾客红包配置
    getCustomerConfig(id) {
        console.log("@@ 招待顾客红包配置,getCustomerConfig：", id)
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getCustomerConfig", "(I)V", id);
        } else {
            EventDispath.send(EventType.SDK_REWARD_CONFIG, {
                configId: 17,
                type: 17,
            });
        }
    }
    //辛苦红包
    getHardConfig() {
        console.log("@@ 辛苦红包,getHardConfig")
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getHardConfig", "()V");
        } else {
            EventDispath.send(EventType.SDK_REWARD_CONFIG, {
                configId: 13,
                type: 13,
            });
        }
    }
    //反馈红包
    getFeedbackConfig() {
        console.log("@@ 反馈红包,getFeedbackConfig")
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getFeedbackConfig", "()V");
        } else {
            EventDispath.send(EventType.SDK_REWARD_CONFIG, {
                configId: 14,
                type: 14,
            });
        }
    }
    //领取奖励
    getRedPackReward(configId, playvideo = false) {
        console.log("@@ 领取奖励,getRedPackReward", configId, "      ", playvideo)
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getRedPackReward", "(Ljava/lang/String;Z)V", configId, playvideo);
        } else {
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
            MKUtils.alertTips("红包配置准备中,请重新领取")
            EventDispath.send(EventType.SDK_REWARD_LOST);
        }
    }
    //领取订单上报
    getOrderTask(orderId) {
        console.log("@@ 领取订单上报,getOrderTask", orderId)
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getOrderTask", "(I)V", orderId);
        } else {
            EventDispath.send(EventType.ORDER_GET_SUCCESS);
        }
    }
    //新手是否领取
    hasNewOrderReward() {
        let isNew = false;
        if (this.isAndroid()) {
            isNew = jsb.reflection.callStaticMethod(this._moudelPath_android, "hasNewOrderReward", "()Z");
        } else {
            isNew = false;
        }
        console.log("@@ 新手是否领取,hasNewOrderReward", isNew)
        return isNew;
    }
    //是否还可以领取招待顾客的红包奖励
    hasCustomerRedReward() {
        let isNew = false;
        if (this.isAndroid()) {
            isNew = jsb.reflection.callStaticMethod(this._moudelPath_android, "hasCustomerRedReward", "()Z");
        } else {
            isNew = true;
        }
        console.log("@@ 是否还可以领取招待顾客的红包奖励,hasCustomerRedReward", isNew)
        return isNew;
    }
    /**
     * 进入游戏后上报
     * @param type 0游戏启动时，1进入游戏主页
     */
    onStartGame(type) {
        console.log("@@ 进入游戏后上报,onStartGame", type)
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "onStartGame", "(I)V", type);
        }
    }
    //订单红包池
    getOrderPoolData() {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getOrderPoolData", "()V");
        } else {
            EventDispath.send(EventType.SDK_VIDEO_NUM, 0)
        }
    }
    //插屏广告
    reportTrigger() {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "reportTrigger", "()V");
        }
        console.log("close panel");

    }
    //订单系数
    getOrderCountAdd() {
        let num = 100;
        if (this.isAndroid()) {
            num = jsb.reflection.callStaticMethod(this._moudelPath_android, "getOrderCountAdd", "()I");
        }
        console.log("getOrderCountAdd 订单系数", num);

        return num;

    }


};
export default SDKManager.getInstance();
window["XSSdkCallback"] = function (action, jsonStr) {
    if (Utils.isUndefined(jsonStr)) {
        return;
    }
    console.log(action + "***************前端收到消息***************", "   ", jsonStr);
    let data = JSON.parse(jsonStr);
    if (action == "redpacket_config") {    //1. 结账领取红包奖励
        if (data.code != 0) {
            MKUtils.alertTips(data.msg)
            return;
        }
        console.log("*************redpacket_config*******2. 红包配置接口回调********************", data);
        EventDispath.send(EventType.SDK_REWARD_CONFIG, data.config);
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
    } else if (action == "redpacket_got") {     //红包领取接口回调 
        if (data.code != 0) {
            MKUtils.alertTips(data.msg+",请重新领取")
            EventDispath.send(EventType.SDK_REWARD_LOST);
            return;
        }
        console.log("*************redpacket_got*******红包领取接口回调********************", data);
        EventDispath.send(EventType.SDK_REWARD_GOT, data);
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
    } else if (action == "finish_task_result") {     //5. 领取任务奖励结果回调
        if (data.code != 0) {
            MKUtils.alertTips(data.msg)
            return;
        }
        EventDispath.send(EventType.TASK_COMPLETE_BACK, data);
        // {
        //     "type": 1, //任务类型
        //     "taskId":1 //任务id 用于客户端领取任务奖励时候获取对应的金额和领取后上报
        //     "param":100,//任务对应参数 客户端无需关注
        //     "status":0//任务状态 默认0  0-未完成 1已完成 2已领取 
        //     //成就任务不返回已领取的任务数据 每日任务返回
        // }
    } else if (action == "bazaar_up_result") {     //4. 集市升级结果回调
        if (data.code != 0) {
            MKUtils.alertTips(data.msg)
            return;
        }
        EventDispath.send(EventType.SDK_LEVEL_UP);
        // {
        //     "type": 1, //任务类型
        //     "taskId":1 //任务id 用于客户端领取任务奖励时候获取对应的金额和领取后上报
        //     "param":100,//任务对应参数 客户端无需关注
        //     "status":0//任务状态 默认0  0-未完成 1已完成 2已领取 
        //     //成就任务不返回已领取的任务数据 每日任务返回
        // }
    } else if (action == "order_task_result") {     //当前任务完成并可领取数量结果回调
        if (data.code != 0) {
            MKUtils.alertTips(data.msg)
            return;
        }

        EventDispath.send(EventType.ORDER_GET_SUCCESS);
        // {
        //     "allCount":10 //可领取奖励总数量
        //     "cjCount": 7, //成就任务可领取奖励数量
        //     "dayCount":3,//每日任务可领取奖励数量
        // }
    } else if (action == "pool_data") {     //当前任务完成并可领取数量结果回调
        if (data.code != 0) {
            MKUtils.alertTips(data.msg)
            return;
        }
        EventDispath.send(EventType.SDK_VIDEO_NUM, data.videoCount)
    } else if (action == "sync_amount") {     //同步红包
        PlayerModel.getUserAmount();
    } else if (action == "refresh_home") {     //同步微信登录

        EventDispath.send(EventType.SDK_WXBIND);

    } else if (action == "ad_play") {     //视频开始播放
        // EventDispath.send(EventType.VIDEO_BACK, 1);
    } else if (action == "ad_over") {     //视频播放结束
        if (PlayerModel.haveOrder) PlayerModel.orderVideoNum++;
        PlayerModel.setXfzs(1);
        EventDispath.send(EventType.VIDEO_BACK, 2);
    } else if (action == "ad_error") {     //视频播放出错
        MKUtils.alertTips("视频出错了~~");
        // EventDispath.send(EventType.VIDEO_BACK, 3);
    } else if (action == "ad_cd") {     //视频播放视频冷却中
        MKUtils.alertTips("视频冷却中~~");
        // EventDispath.send(EventType.VIDEO_BACK, 4);
    }
}
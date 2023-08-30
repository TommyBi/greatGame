
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/message/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33357t/CClBoqVRr7ujenC/', 'EventType');
// src/framework/message/EventType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType = /** @class */ (function () {
    function EventType() {
    }
    EventType.UPDATE_MONEY = "update_money"; // 更新钱数
    EventType.UPDATE_GOLD = "update_gold"; // 更新钞票
    EventType.UPDATE_XFZS = "update_xfzs"; // 更新幸福指数
    EventType.JX_SC = "jx_sc"; // 加速或者除虫
    EventType.JIASU = "jiasu"; // 加速
    EventType.SHACHONG = "shachong"; // 除虫
    EventType.CROP_GET = "crop_get"; // 作物收获
    EventType.CROP_ADD_SPEED = "crop_add_speed"; // 加速成熟
    EventType.CROP_PLANT = "crop_plant"; // 种植作物
    EventType.CROP_PLANT_GET = "crop_plant_get"; // 通过订单种植作物
    EventType.CROP_GC = "crop_gc"; // 作物高产
    EventType.VEGETABLES_UPDATE = "vegetables_update"; // 解锁后更新种植页面
    EventType.UPDATE_FIELD_TIPS = "update_field_tips"; //更新地块小手提示
    EventType.UPDATE_SHELVE = "update_shelve"; // 仓库变化，更新货架
    EventType.UPDATE_SHELVE_ORDER = "update_shelve_order"; // 订单变化，更新货架
    EventType.CASHIER_ADD_MULTIPLE = "cashier_add_multiple"; // 收银台加倍
    EventType.FIELD_BUILD = "field_build"; // 扩建土地
    EventType.SHELVE_BUILD = "shelve_build"; // 扩建货架
    EventType.LVUP_UPDATE = "lvup_update"; // 更新升级列表
    EventType.FIELD_LEVEL_UPDATE = "field_level_update"; //土地等级变化
    EventType.SHELVE_LEVEL_UPDATE = "shelve_level_update"; //货架等级变化
    EventType.VEGETABLE_CLOSE = "vegetable_close"; // 关闭种菜页面
    EventType.CHANGE_CASHIER = "change_cashier"; // 切换收银皮肤
    EventType.CHANGE_WAREHOUSE = "change_warehouse"; // 切换仓库皮肤
    EventType.CHANGE_WALL = "change_wall"; // 切换围墙皮肤
    EventType.CHANGE_ROAD = "change_road"; // 切换道路皮肤
    EventType.CHANGE_PIPE = "change_pipe"; // 切换水管皮肤
    EventType.CHANGE_FENCE = "change_fence"; // 切换围栏皮肤
    EventType.CHANGE_SCARECROW = "change_scarecrow"; // 切换稻草人皮肤
    EventType.HKHB_UPDATE = "hkhb_update"; //更新回馈红包
    EventType.MAIN_LOCK = "main_lock"; //锁定页面
    EventType.GUIDE_COMPLETE = "guide_complete"; //新手引导完成
    EventType.SDK_REWARD_CONFIG = "sdk_reward_config"; // 获取奖励配置
    EventType.SDK_REWARD_GOT = "sdk_reward_got"; // 领取红包奖励
    EventType.SDK_REWARD_LOST = "sdk_reward_lost"; // 领取红包奖励失败
    EventType.SDK_LEVEL_UP = "sdk_level_up"; //4. 集市升级结果回调
    EventType.SDK_WXBIND = "sdk_wxbind"; //4. 微信绑定回调
    EventType.SDK_VIDEO_NUM = "sdk_video_num"; //更新订单红包池看视频数量
    EventType.TASK_UPDATE = "task_update"; //更新任务列表
    EventType.TASK_COMPLETE_BACK = "task_complete_back"; // 领取任务奖励结果回调
    EventType.LEVEL_UPDATE = "level_update"; //更新等级列表
    EventType.ORDER_OPEN = "order_open"; //关闭订单
    EventType.ORDER_CLOSE = "order_close"; //关闭订单
    EventType.ORDER_UPDATE_INDEX = "order_update_index"; //刷新订单其中一条
    EventType.ORDER_UPDATE_LIST = "order_update_list"; //刷新订单列表
    EventType.ORDER_GIVE_UP = "order_give_up"; //放弃订单
    EventType.ORDER_UPDATE_TOP = "order_update_top"; //更新头部订单
    EventType.ORDER_UNLOCK = "order_unlock"; //解锁订单
    EventType.ORDER_CURRENT_UPDATE = "order_current_update"; //刷新当前订单
    EventType.ORDER_CURRENT_CLOSE = "order_current_close"; //关闭当前订单
    EventType.ORDER_GET_SUCCESS = "order_get_success"; //当前接单成功
    EventType.ORDER_COMPLETE_UPDATE = "order_complete_update"; //更新订单完成
    EventType.GUIDE_Hide = "guide_hide"; //更新新手引导
    EventType.GUIDE_UPDATE = "guide_update"; //更新新手引导
    EventType.CLEAR_PEST_CLOSE = "clear_pest_close"; //关闭除虫面板
    EventType.GET_CROP_CLOSE = "get_crop_close"; //关闭获得作物面板
    EventType.ADD_CAHIER_ROLE = "add_cahier_role"; // 增加结账人数
    EventType.UPDATE_CAHIER_ROLE = "update_cahier_role"; // 更新结账人数
    EventType.CASHIER_AUTO_CLOSE = "cashier_auto_close"; // 结束自动结账
    EventType.ONE_SOLICIT = "one_solicit"; // 一键招揽
    EventType.GUIDE_TASK_UPDATE = "guide_task_update"; // 更新引导任务信息
    EventType.CLOSE_MANYI_VIEW = "close_manyi_view"; // 关闭了满意界面
    EventType.FINISH_AD_AUTOSERVICE = "finish_ad_autoService"; // 成功看完了自助服务的视频广告
    EventType.CROP_SELL = "crop_sell"; // 卖出作物
    EventType.PROP_INFO = "prop_info"; // 获取设施打开小面板信息
    EventType.PROP_INFO_ERROR = "prop_info_error"; // 获取设施打开小面板信息失败
    EventType.VIDEO_BACK = "video_back"; // 看视频返回
    EventType.TASK_INFO_DAY = "task_info_day"; // 每日任务
    EventType.TASK_INFO_COUNT = "task_info_count"; // 任务红点数量
    EventType.TASK_ITEM_CHANG = "task_item_chang"; // 任务状态改变
    return EventType;
}());
exports.EventType = EventType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUF1RkEsQ0FBQztJQXRGVSxzQkFBWSxHQUFHLGNBQWMsQ0FBQyxDQUFHLE9BQU87SUFDeEMscUJBQVcsR0FBRyxhQUFhLENBQUMsQ0FBRyxPQUFPO0lBQ3RDLHFCQUFXLEdBQUcsYUFBYSxDQUFDLENBQUcsU0FBUztJQUN4QyxlQUFLLEdBQUcsT0FBTyxDQUFDLENBQUcsU0FBUztJQUM1QixlQUFLLEdBQUcsT0FBTyxDQUFDLENBQUcsS0FBSztJQUN4QixrQkFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFHLEtBQUs7SUFDOUIsa0JBQVEsR0FBRyxVQUFVLENBQUMsQ0FBRyxPQUFPO0lBQ2hDLHdCQUFjLEdBQUcsZ0JBQWdCLENBQUMsQ0FBRyxPQUFPO0lBQzVDLG9CQUFVLEdBQUcsWUFBWSxDQUFDLENBQUcsT0FBTztJQUNwQyx3QkFBYyxHQUFHLGdCQUFnQixDQUFDLENBQUcsV0FBVztJQUNoRCxpQkFBTyxHQUFHLFNBQVMsQ0FBQyxDQUFHLE9BQU87SUFDOUIsMkJBQWlCLEdBQUcsbUJBQW1CLENBQUMsQ0FBRyxZQUFZO0lBQ3ZELDJCQUFpQixHQUFHLG1CQUFtQixDQUFBLENBQUEsVUFBVTtJQUNqRCx1QkFBYSxHQUFHLGVBQWUsQ0FBQyxDQUFDLFlBQVk7SUFDN0MsNkJBQW1CLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxZQUFZO0lBQ3pELDhCQUFvQixHQUFHLHNCQUFzQixDQUFDLENBQUEsUUFBUTtJQUN0RCxxQkFBVyxHQUFHLGFBQWEsQ0FBQyxDQUFBLE9BQU87SUFDbkMsc0JBQVksR0FBRyxjQUFjLENBQUMsQ0FBQSxPQUFPO0lBQ3JDLHFCQUFXLEdBQUcsYUFBYSxDQUFDLENBQUEsU0FBUztJQUNyQyw0QkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyxDQUFBLFFBQVE7SUFDbEQsNkJBQW1C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O0lBQ2pDLHVCQUFhLEdBQUcsZUFBZSxDQUFBLENBQUEsT0FBTztJQUN0Qyx5QkFBZSxHQUFHLGlCQUFpQixDQUFBLENBQUEsU0FBUztJQUM1Qyx5QkFBZSxHQUFHLGlCQUFpQixDQUFBLENBQUEsU0FBUztJQUN2RCxnQkFBQztDQXZGRCxBQXVGQyxJQUFBO0FBdkZZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50VHlwZSB7XHJcbiAgICBzdGF0aWMgVVBEQVRFX01PTkVZID0gXCJ1cGRhdGVfbW9uZXlcIjsgICAvLyDmm7TmlrDpkrHmlbBcclxuICAgIHN0YXRpYyBVUERBVEVfR09MRCA9IFwidXBkYXRlX2dvbGRcIjsgICAvLyDmm7TmlrDpkp7npahcclxuICAgIHN0YXRpYyBVUERBVEVfWEZaUyA9IFwidXBkYXRlX3hmenNcIjsgICAvLyDmm7TmlrDlubjnpo/mjIfmlbBcclxuICAgIHN0YXRpYyBKWF9TQyA9IFwianhfc2NcIjsgICAvLyDliqDpgJ/miJbogIXpmaTomatcclxuICAgIHN0YXRpYyBKSUFTVSA9IFwiamlhc3VcIjsgICAvLyDliqDpgJ9cclxuICAgIHN0YXRpYyBTSEFDSE9ORyA9IFwic2hhY2hvbmdcIjsgICAvLyDpmaTomatcclxuICAgIHN0YXRpYyBDUk9QX0dFVCA9IFwiY3JvcF9nZXRcIjsgICAvLyDkvZznianmlLbojrdcclxuICAgIHN0YXRpYyBDUk9QX0FERF9TUEVFRCA9IFwiY3JvcF9hZGRfc3BlZWRcIjsgICAvLyDliqDpgJ/miJDnhp9cclxuICAgIHN0YXRpYyBDUk9QX1BMQU5UID0gXCJjcm9wX3BsYW50XCI7ICAgLy8g56eN5qSN5L2c54mpXHJcbiAgICBzdGF0aWMgQ1JPUF9QTEFOVF9HRVQgPSBcImNyb3BfcGxhbnRfZ2V0XCI7ICAgLy8g6YCa6L+H6K6i5Y2V56eN5qSN5L2c54mpXHJcbiAgICBzdGF0aWMgQ1JPUF9HQyA9IFwiY3JvcF9nY1wiOyAgIC8vIOS9nOeJqemrmOS6p1xyXG4gICAgc3RhdGljIFZFR0VUQUJMRVNfVVBEQVRFID0gXCJ2ZWdldGFibGVzX3VwZGF0ZVwiOyAgIC8vIOino+mUgeWQjuabtOaWsOenjeakjemhtemdolxyXG4gICAgc3RhdGljIFVQREFURV9GSUVMRF9USVBTID0gXCJ1cGRhdGVfZmllbGRfdGlwc1wiLy/mm7TmlrDlnLDlnZflsI/miYvmj5DnpLpcclxuICAgIHN0YXRpYyBVUERBVEVfU0hFTFZFID0gXCJ1cGRhdGVfc2hlbHZlXCI7IC8vIOS7k+W6k+WPmOWMlu+8jOabtOaWsOi0p+aetlxyXG4gICAgc3RhdGljIFVQREFURV9TSEVMVkVfT1JERVIgPSBcInVwZGF0ZV9zaGVsdmVfb3JkZXJcIjsgLy8g6K6i5Y2V5Y+Y5YyW77yM5pu05paw6LSn5p62XHJcbiAgICBzdGF0aWMgQ0FTSElFUl9BRERfTVVMVElQTEUgPSBcImNhc2hpZXJfYWRkX211bHRpcGxlXCI7Ly8g5pS26ZO25Y+w5Yqg5YCNXHJcbiAgICBzdGF0aWMgRklFTERfQlVJTEQgPSBcImZpZWxkX2J1aWxkXCI7Ly8g5omp5bu65Zyf5ZywXHJcbiAgICBzdGF0aWMgU0hFTFZFX0JVSUxEID0gXCJzaGVsdmVfYnVpbGRcIjsvLyDmianlu7rotKfmnrZcclxuICAgIHN0YXRpYyBMVlVQX1VQREFURSA9IFwibHZ1cF91cGRhdGVcIjsvLyDmm7TmlrDljYfnuqfliJfooahcclxuICAgIHN0YXRpYyBGSUVMRF9MRVZFTF9VUERBVEUgPSBcImZpZWxkX2xldmVsX3VwZGF0ZVwiOy8v5Zyf5Zyw562J57qn5Y+Y5YyWXHJcbiAgICBzdGF0aWMgU0hFTFZFX0xFVkVMX1VQREFURSA9IFwic2hlbHZlX2xldmVsX3VwZGF0ZVwiOy8v6LSn5p62562J57qn5Y+Y5YyWXHJcbiAgICBzdGF0aWMgVkVHRVRBQkxFX0NMT1NFID0gXCJ2ZWdldGFibGVfY2xvc2VcIjsgLy8g5YWz6Zet56eN6I+c6aG16Z2iXHJcblxyXG4gICAgc3RhdGljIENIQU5HRV9DQVNISUVSID0gXCJjaGFuZ2VfY2FzaGllclwiOy8vIOWIh+aNouaUtumTtuearuiCpFxyXG4gICAgc3RhdGljIENIQU5HRV9XQVJFSE9VU0UgPSBcImNoYW5nZV93YXJlaG91c2VcIjsvLyDliIfmjaLku5PlupPnmq7ogqRcclxuICAgIHN0YXRpYyBDSEFOR0VfV0FMTCA9IFwiY2hhbmdlX3dhbGxcIjsvLyDliIfmjaLlm7Tlopnnmq7ogqRcclxuICAgIHN0YXRpYyBDSEFOR0VfUk9BRCA9IFwiY2hhbmdlX3JvYWRcIjsvLyDliIfmjaLpgZPot6/nmq7ogqRcclxuICAgIHN0YXRpYyBDSEFOR0VfUElQRSA9IFwiY2hhbmdlX3BpcGVcIjsvLyDliIfmjaLmsLTnrqHnmq7ogqRcclxuICAgIHN0YXRpYyBDSEFOR0VfRkVOQ0UgPSBcImNoYW5nZV9mZW5jZVwiOy8vIOWIh+aNouWbtOagj+earuiCpFxyXG4gICAgc3RhdGljIENIQU5HRV9TQ0FSRUNST1cgPSBcImNoYW5nZV9zY2FyZWNyb3dcIjsvLyDliIfmjaLnqLvojYnkurrnmq7ogqRcclxuXHJcbiAgICBzdGF0aWMgSEtIQl9VUERBVEUgPSBcImhraGJfdXBkYXRlXCI7Ly/mm7TmlrDlm57ppojnuqLljIVcclxuXHJcbiAgICBzdGF0aWMgTUFJTl9MT0NLID0gXCJtYWluX2xvY2tcIjsvL+mUgeWumumhtemdolxyXG4gICAgc3RhdGljIEdVSURFX0NPTVBMRVRFID0gXCJndWlkZV9jb21wbGV0ZVwiOy8v5paw5omL5byV5a+85a6M5oiQXHJcblxyXG5cclxuICAgIHN0YXRpYyBTREtfUkVXQVJEX0NPTkZJRyA9IFwic2RrX3Jld2FyZF9jb25maWdcIjsvLyDojrflj5blpZblirHphY3nva5cclxuICAgIHN0YXRpYyBTREtfUkVXQVJEX0dPVCA9IFwic2RrX3Jld2FyZF9nb3RcIjsvLyDpooblj5bnuqLljIXlpZblirFcclxuICAgIHN0YXRpYyBTREtfUkVXQVJEX0xPU1QgPSBcInNka19yZXdhcmRfbG9zdFwiOy8vIOmihuWPlue6ouWMheWlluWKseWksei0pVxyXG4gICAgc3RhdGljIFNES19MRVZFTF9VUCA9IFwic2RrX2xldmVsX3VwXCI7Ly80LiDpm4bluILljYfnuqfnu5Pmnpzlm57osINcclxuICAgIHN0YXRpYyBTREtfV1hCSU5EID0gXCJzZGtfd3hiaW5kXCI7Ly80LiDlvq7kv6Hnu5Hlrprlm57osINcclxuICAgIHN0YXRpYyBTREtfVklERU9fTlVNID0gXCJzZGtfdmlkZW9fbnVtXCI7Ly/mm7TmlrDorqLljZXnuqLljIXmsaDnnIvop4bpopHmlbDph49cclxuXHJcbiAgICBzdGF0aWMgVEFTS19VUERBVEUgPSBcInRhc2tfdXBkYXRlXCIvL+abtOaWsOS7u+WKoeWIl+ihqFxyXG4gICAgc3RhdGljIFRBU0tfQ09NUExFVEVfQkFDSyA9IFwidGFza19jb21wbGV0ZV9iYWNrXCIvLyDpooblj5bku7vliqHlpZblirHnu5Pmnpzlm57osINcclxuICAgIHN0YXRpYyBMRVZFTF9VUERBVEUgPSBcImxldmVsX3VwZGF0ZVwiLy/mm7TmlrDnrYnnuqfliJfooahcclxuXHJcbiAgICBzdGF0aWMgT1JERVJfT1BFTiA9IFwib3JkZXJfb3BlblwiLy/lhbPpl63orqLljZVcclxuICAgIHN0YXRpYyBPUkRFUl9DTE9TRSA9IFwib3JkZXJfY2xvc2VcIi8v5YWz6Zet6K6i5Y2VXHJcbiAgICBzdGF0aWMgT1JERVJfVVBEQVRFX0lOREVYID0gXCJvcmRlcl91cGRhdGVfaW5kZXhcIi8v5Yi35paw6K6i5Y2V5YW25Lit5LiA5p2hXHJcbiAgICBzdGF0aWMgT1JERVJfVVBEQVRFX0xJU1QgPSBcIm9yZGVyX3VwZGF0ZV9saXN0XCIvL+WIt+aWsOiuouWNleWIl+ihqFxyXG4gICAgc3RhdGljIE9SREVSX0dJVkVfVVAgPSBcIm9yZGVyX2dpdmVfdXBcIi8v5pS+5byD6K6i5Y2VXHJcbiAgICBzdGF0aWMgT1JERVJfVVBEQVRFX1RPUCA9IFwib3JkZXJfdXBkYXRlX3RvcFwiLy/mm7TmlrDlpLTpg6jorqLljZVcclxuICAgIHN0YXRpYyBPUkRFUl9VTkxPQ0sgPSBcIm9yZGVyX3VubG9ja1wiLy/op6PplIHorqLljZVcclxuICAgIHN0YXRpYyBPUkRFUl9DVVJSRU5UX1VQREFURSA9IFwib3JkZXJfY3VycmVudF91cGRhdGVcIi8v5Yi35paw5b2T5YmN6K6i5Y2VXHJcbiAgICBzdGF0aWMgT1JERVJfQ1VSUkVOVF9DTE9TRSA9IFwib3JkZXJfY3VycmVudF9jbG9zZVwiLy/lhbPpl63lvZPliY3orqLljZVcclxuICAgIHN0YXRpYyBPUkRFUl9HRVRfU1VDQ0VTUyA9IFwib3JkZXJfZ2V0X3N1Y2Nlc3NcIi8v5b2T5YmN5o6l5Y2V5oiQ5YqfXHJcbiAgICBzdGF0aWMgT1JERVJfQ09NUExFVEVfVVBEQVRFID0gXCJvcmRlcl9jb21wbGV0ZV91cGRhdGVcIi8v5pu05paw6K6i5Y2V5a6M5oiQXHJcblxyXG4gICAgc3RhdGljIEdVSURFX0hpZGUgPSBcImd1aWRlX2hpZGVcIi8v5pu05paw5paw5omL5byV5a+8XHJcbiAgICBzdGF0aWMgR1VJREVfVVBEQVRFID0gXCJndWlkZV91cGRhdGVcIi8v5pu05paw5paw5omL5byV5a+8XHJcblxyXG5cclxuICAgIHN0YXRpYyBDTEVBUl9QRVNUX0NMT1NFID0gXCJjbGVhcl9wZXN0X2Nsb3NlXCI7IC8v5YWz6Zet6Zmk6Jmr6Z2i5p2/XHJcblxyXG4gICAgc3RhdGljIEdFVF9DUk9QX0NMT1NFID0gXCJnZXRfY3JvcF9jbG9zZVwiOyAvL+WFs+mXreiOt+W+l+S9nOeJqemdouadv1xyXG5cclxuXHJcbiAgICBzdGF0aWMgQUREX0NBSElFUl9ST0xFID0gXCJhZGRfY2FoaWVyX3JvbGVcIjsgLy8g5aKe5Yqg57uT6LSm5Lq65pWwXHJcbiAgICBzdGF0aWMgVVBEQVRFX0NBSElFUl9ST0xFID0gXCJ1cGRhdGVfY2FoaWVyX3JvbGVcIjsgLy8g5pu05paw57uT6LSm5Lq65pWwXHJcbiAgICBzdGF0aWMgQ0FTSElFUl9BVVRPX0NMT1NFID0gXCJjYXNoaWVyX2F1dG9fY2xvc2VcIjsgLy8g57uT5p2f6Ieq5Yqo57uT6LSmXHJcbiAgICBzdGF0aWMgT05FX1NPTElDSVQgPSBcIm9uZV9zb2xpY2l0XCI7IC8vIOS4gOmUruaLm+aPvVxyXG4gICAgc3RhdGljIEdVSURFX1RBU0tfVVBEQVRFID0gXCJndWlkZV90YXNrX3VwZGF0ZVwiOyAvLyDmm7TmlrDlvJXlr7zku7vliqHkv6Hmga9cclxuXHJcblxyXG4gICAgc3RhdGljIENMT1NFX01BTllJX1ZJRVcgPSBcImNsb3NlX21hbnlpX3ZpZXdcIjsvLyDlhbPpl63kuobmu6HmhI/nlYzpnaJcclxuICAgIHN0YXRpYyBGSU5JU0hfQURfQVVUT1NFUlZJQ0UgPSBcImZpbmlzaF9hZF9hdXRvU2VydmljZVwiLy8g5oiQ5Yqf55yL5a6M5LqG6Ieq5Yqp5pyN5Yqh55qE6KeG6aKR5bm/5ZGKXHJcblxyXG4gICAgc3RhdGljIENST1BfU0VMTCA9IFwiY3JvcF9zZWxsXCIvLyDljZblh7rkvZznialcclxuICAgIHN0YXRpYyBQUk9QX0lORk8gPSBcInByb3BfaW5mb1wiLy8g6I635Y+W6K6+5pa95omT5byA5bCP6Z2i5p2/5L+h5oGvXHJcbiAgICBzdGF0aWMgUFJPUF9JTkZPX0VSUk9SID0gXCJwcm9wX2luZm9fZXJyb3JcIi8vIOiOt+WPluiuvuaWveaJk+W8gOWwj+mdouadv+S/oeaBr+Wksei0pVxyXG4gICAgc3RhdGljIFZJREVPX0JBQ0sgPSBcInZpZGVvX2JhY2tcIi8vIOeci+inhumikei/lOWbnlxyXG4gICAgc3RhdGljIFRBU0tfSU5GT19EQVkgPSBcInRhc2tfaW5mb19kYXlcIi8vIOavj+aXpeS7u+WKoVxyXG4gICAgc3RhdGljIFRBU0tfSU5GT19DT1VOVCA9IFwidGFza19pbmZvX2NvdW50XCIvLyDku7vliqHnuqLngrnmlbDph49cclxuICAgIHN0YXRpYyBUQVNLX0lURU1fQ0hBTkcgPSBcInRhc2tfaXRlbV9jaGFuZ1wiLy8g5Lu75Yqh54q25oCB5pS55Y+YXHJcbn0iXX0=
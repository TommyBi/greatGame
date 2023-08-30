
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b6a119F4BLSoaDf4DFGUF2', 'Global');
// src/game/consts/Global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.JSON_SERVER_URL = "";
    Global.JSON_FILE = "allConf";
    //玩家数据配置
    Global.SOUND_SWITCH_OPEN = 1; //音乐开关
    Global.SOUND_SWITCH_CLOSE = 0; //音乐开关
    Global.SOUND_YINXIAO_SWITCH_OPEN = 1; // 音效开关 开
    Global.SOUND_YINXIAO_SWITCH_CLOSE = 0; // 音效开关 关
    Global.PERSONALRECOMM_SWITCH_OPEN = 1; // 个人推荐开关 1
    Global.PERSONALRECOMM_SWITCH_OFF = 0;
    //视频打点
    Global.VIDEO_CONFIG = {
        video1: { ad_id: "client_video_01", ad_source: "client_video_01", ad_type: "reward_video" },
        video2: { ad_id: "client_video_02", ad_source: "client_video_02", ad_type: "reward_video" },
        video3: { ad_id: "client_video_03", ad_source: "client_video_03", ad_type: "reward_video" },
        video4: { ad_id: "client_video_04", ad_source: "client_video_04", ad_type: "reward_video" },
        // video5: { ad_id: "client_video_05", ad_source: "client_video_05", ad_type: "reward_video" },//订单完成领取奖励
        // video6: { ad_id: "client_video_06", ad_source: "client_video_06", ad_type: "reward_video" },//订单完成助力领取
        video7: { ad_id: "client_video_07", ad_source: "client_video_07", ad_type: "reward_video" },
        video8: { ad_id: "client_video_08", ad_source: "client_video_08", ad_type: "reward_video" },
        video9: { ad_id: "client_video_09", ad_source: "client_video_09", ad_type: "reward_video" },
        video10: { ad_id: "client_video_10", ad_source: "client_video_10", ad_type: "reward_video" },
        video11: { ad_id: "client_video_11", ad_source: "client_video_11", ad_type: "reward_video" },
        video12: { ad_id: "client_video_12", ad_source: "client_video_12", ad_type: "reward_video" },
        video13: { ad_id: "client_video_13", ad_source: "client_video_13", ad_type: "reward_video" },
        video14: { ad_id: "client_video_14", ad_source: "client_video_14", ad_type: "reward_video" },
        video15: { ad_id: "client_video_15", ad_source: "client_video_15", ad_type: "reward_video" },
        video16: { ad_id: "client_video_16", ad_source: "client_video_16", ad_type: "reward_video" },
        video17: { ad_id: "client_video_17", ad_source: "client_video_17", ad_type: "reward_video" },
        video18: { ad_id: "client_video_18", ad_source: "client_video_18", ad_type: "reward_video" },
        video19: { ad_id: "client_video_19", ad_source: "client_video_19", ad_type: "reward_video" },
        video20: { ad_id: "client_video_20", ad_source: "client_video_20", ad_type: "reward_video" },
    };
    Global.EVENT_ACTION = {
        client_guide_task: "client_guide_task",
        client_seed: "client_seed",
        client_get_crops: "client_get_crops",
        client_solicit: "client_solicit",
    };
    Global.zl_click_num = 1;
    //用户协议
    Global.URL_USER = "http://gameweb.xiaoshidata.com/haiyanglefantian/pservice.html";
    //隐私政策
    Global.URL_PRIVACY = "http://gameweb.xiaoshidata.com/haiyanglefantian/pprivacy.html";
    //意见反馈
    Global.URL_PROPOSAL = "http://api.center.kumengkeji.cn/msg/index";
    Global.isCeshi_version = false;
    return Global;
}());
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQTZEQSxDQUFDO0lBNURpQixzQkFBZSxHQUFHLEVBQUUsQ0FBQztJQUVyQixnQkFBUyxHQUFHLFNBQVMsQ0FBQztJQUVwQyxRQUFRO0lBQ00sd0JBQWlCLEdBQUcsQ0FBQyxDQUFDLENBQWlCLE1BQU07SUFDN0MseUJBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQWdCLE1BQU07SUFFN0MsZ0NBQXlCLEdBQUcsQ0FBQyxDQUFDLENBQVEsU0FBUztJQUMvQyxpQ0FBMEIsR0FBRyxDQUFDLENBQUMsQ0FBTyxTQUFTO0lBRS9DLGlDQUEwQixHQUFHLENBQUMsQ0FBQyxDQUFHLFdBQVc7SUFDN0MsZ0NBQXlCLEdBQUcsQ0FBQyxDQUFDO0lBRTVDLE1BQU07SUFDUSxtQkFBWSxHQUFHO1FBQ3pCLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtRQUMzRixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7UUFFM0YsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO1FBQzNGLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtRQUUzRix5R0FBeUc7UUFDekcseUdBQXlHO1FBRXpHLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtRQUMzRixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7UUFDM0YsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO1FBQzNGLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtRQUM1RixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7UUFDNUYsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO1FBQzVGLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtRQUM1RixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7UUFDNUYsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO1FBQzVGLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtRQUM1RixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7UUFDNUYsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFO1FBRTVGLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtRQUU1RixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUU7S0FDL0YsQ0FBQTtJQUVhLG1CQUFZLEdBQUc7UUFDekIsaUJBQWlCLEVBQUUsbUJBQW1CO1FBQ3RDLFdBQVcsRUFBRSxhQUFhO1FBQzFCLGdCQUFnQixFQUFFLGtCQUFrQjtRQUNwQyxjQUFjLEVBQUUsZ0JBQWdCO0tBQ25DLENBQUE7SUFFYSxtQkFBWSxHQUFHLENBQUMsQ0FBQztJQUUvQixNQUFNO0lBQ1EsZUFBUSxHQUFHLCtEQUErRCxDQUFDO0lBQ3pGLE1BQU07SUFDUSxrQkFBVyxHQUFHLCtEQUErRCxDQUFDO0lBQzVGLE1BQU07SUFDUSxtQkFBWSxHQUFHLDJDQUEyQyxDQUFDO0lBRTNELHNCQUFlLEdBQUcsS0FBSyxDQUFDO0lBQzFDLGFBQUM7Q0E3REQsQUE2REMsSUFBQTtrQkE3RG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBKU09OX1NFUlZFUl9VUkwgPSBcIlwiO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSlNPTl9GSUxFID0gXCJhbGxDb25mXCI7XHJcblxyXG4gICAgLy/njqnlrrbmlbDmja7phY3nva5cclxuICAgIHB1YmxpYyBzdGF0aWMgU09VTkRfU1dJVENIX09QRU4gPSAxOyAgICAgICAgICAgICAgICAgLy/pn7PkuZDlvIDlhbNcclxuICAgIHB1YmxpYyBzdGF0aWMgU09VTkRfU1dJVENIX0NMT1NFID0gMDsgICAgICAgICAgICAgICAgLy/pn7PkuZDlvIDlhbNcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNPVU5EX1lJTlhJQU9fU1dJVENIX09QRU4gPSAxOyAgICAgICAgLy8g6Z+z5pWI5byA5YWzIOW8gFxyXG4gICAgcHVibGljIHN0YXRpYyBTT1VORF9ZSU5YSUFPX1NXSVRDSF9DTE9TRSA9IDA7ICAgICAgIC8vIOmfs+aViOW8gOWFsyDlhbNcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFBFUlNPTkFMUkVDT01NX1NXSVRDSF9PUEVOID0gMTsgICAvLyDkuKrkurrmjqjojZDlvIDlhbMgMVxyXG4gICAgcHVibGljIHN0YXRpYyBQRVJTT05BTFJFQ09NTV9TV0lUQ0hfT0ZGID0gMDtcclxuXHJcbiAgICAvL+inhumikeaJk+eCuVxyXG4gICAgcHVibGljIHN0YXRpYyBWSURFT19DT05GSUcgPSB7XHJcbiAgICAgICAgdmlkZW8xOiB7IGFkX2lkOiBcImNsaWVudF92aWRlb18wMVwiLCBhZF9zb3VyY2U6IFwiY2xpZW50X3ZpZGVvXzAxXCIsIGFkX3R5cGU6IFwicmV3YXJkX3ZpZGVvXCIgfSwvLyDkuIDplK7mj73lrqJcclxuICAgICAgICB2aWRlbzI6IHsgYWRfaWQ6IFwiY2xpZW50X3ZpZGVvXzAyXCIsIGFkX3NvdXJjZTogXCJjbGllbnRfdmlkZW9fMDJcIiwgYWRfdHlwZTogXCJyZXdhcmRfdmlkZW9cIiB9LC8vICDpooblj5bpkp7npagv6ZKe56Wo5LiN6LazXHJcblxyXG4gICAgICAgIHZpZGVvMzogeyBhZF9pZDogXCJjbGllbnRfdmlkZW9fMDNcIiwgYWRfc291cmNlOiBcImNsaWVudF92aWRlb18wM1wiLCBhZF90eXBlOiBcInJld2FyZF92aWRlb1wiIH0sLy/op6PplIHorqLljZVcclxuICAgICAgICB2aWRlbzQ6IHsgYWRfaWQ6IFwiY2xpZW50X3ZpZGVvXzA0XCIsIGFkX3NvdXJjZTogXCJjbGllbnRfdmlkZW9fMDRcIiwgYWRfdHlwZTogXCJyZXdhcmRfdmlkZW9cIiB9LC8v5Yi35paw6K6i5Y2VXHJcblxyXG4gICAgICAgIC8vIHZpZGVvNTogeyBhZF9pZDogXCJjbGllbnRfdmlkZW9fMDVcIiwgYWRfc291cmNlOiBcImNsaWVudF92aWRlb18wNVwiLCBhZF90eXBlOiBcInJld2FyZF92aWRlb1wiIH0sLy/orqLljZXlrozmiJDpooblj5blpZblirFcclxuICAgICAgICAvLyB2aWRlbzY6IHsgYWRfaWQ6IFwiY2xpZW50X3ZpZGVvXzA2XCIsIGFkX3NvdXJjZTogXCJjbGllbnRfdmlkZW9fMDZcIiwgYWRfdHlwZTogXCJyZXdhcmRfdmlkZW9cIiB9LC8v6K6i5Y2V5a6M5oiQ5Yqp5Yqb6aKG5Y+WXHJcblxyXG4gICAgICAgIHZpZGVvNzogeyBhZF9pZDogXCJjbGllbnRfdmlkZW9fMDdcIiwgYWRfc291cmNlOiBcImNsaWVudF92aWRlb18wN1wiLCBhZF90eXBlOiBcInJld2FyZF92aWRlb1wiIH0sLy/nnIvop4bpopHlv6vpgJ/ojrflj5bkvZznialcclxuICAgICAgICB2aWRlbzg6IHsgYWRfaWQ6IFwiY2xpZW50X3ZpZGVvXzA4XCIsIGFkX3NvdXJjZTogXCJjbGllbnRfdmlkZW9fMDhcIiwgYWRfdHlwZTogXCJyZXdhcmRfdmlkZW9cIiB9LC8v5omp5bu65Zyf5ZywXHJcbiAgICAgICAgdmlkZW85OiB7IGFkX2lkOiBcImNsaWVudF92aWRlb18wOVwiLCBhZF9zb3VyY2U6IFwiY2xpZW50X3ZpZGVvXzA5XCIsIGFkX3R5cGU6IFwicmV3YXJkX3ZpZGVvXCIgfSwvL+aJqeW7uui0p+aetlxyXG4gICAgICAgIHZpZGVvMTA6IHsgYWRfaWQ6IFwiY2xpZW50X3ZpZGVvXzEwXCIsIGFkX3NvdXJjZTogXCJjbGllbnRfdmlkZW9fMTBcIiwgYWRfdHlwZTogXCJyZXdhcmRfdmlkZW9cIiB9LC8v5pS26ZO25Y+w5Yqg6YCfIFxyXG4gICAgICAgIHZpZGVvMTE6IHsgYWRfaWQ6IFwiY2xpZW50X3ZpZGVvXzExXCIsIGFkX3NvdXJjZTogXCJjbGllbnRfdmlkZW9fMTFcIiwgYWRfdHlwZTogXCJyZXdhcmRfdmlkZW9cIiB9LC8v6Kej6ZSB5L2c54mpXHJcbiAgICAgICAgdmlkZW8xMjogeyBhZF9pZDogXCJjbGllbnRfdmlkZW9fMTJcIiwgYWRfc291cmNlOiBcImNsaWVudF92aWRlb18xMlwiLCBhZF90eXBlOiBcInJld2FyZF92aWRlb1wiIH0sLy/kvZznianpq5jkuqfmlLbojrdcclxuICAgICAgICB2aWRlbzEzOiB7IGFkX2lkOiBcImNsaWVudF92aWRlb18xM1wiLCBhZF9zb3VyY2U6IFwiY2xpZW50X3ZpZGVvXzEzXCIsIGFkX3R5cGU6IFwicmV3YXJkX3ZpZGVvXCIgfSwvL+eri+WNs+mZpOiZq1xyXG4gICAgICAgIHZpZGVvMTQ6IHsgYWRfaWQ6IFwiY2xpZW50X3ZpZGVvXzE0XCIsIGFkX3NvdXJjZTogXCJjbGllbnRfdmlkZW9fMTRcIiwgYWRfdHlwZTogXCJyZXdhcmRfdmlkZW9cIiB9LC8v5YWo5L2T5Yqg6YCfXHJcbiAgICAgICAgdmlkZW8xNTogeyBhZF9pZDogXCJjbGllbnRfdmlkZW9fMTVcIiwgYWRfc291cmNlOiBcImNsaWVudF92aWRlb18xNVwiLCBhZF90eXBlOiBcInJld2FyZF92aWRlb1wiIH0sLy/miZPlvIDlm57ppojnuqLljIVcclxuICAgICAgICB2aWRlbzE2OiB7IGFkX2lkOiBcImNsaWVudF92aWRlb18xNlwiLCBhZF9zb3VyY2U6IFwiY2xpZW50X3ZpZGVvXzE2XCIsIGFkX3R5cGU6IFwicmV3YXJkX3ZpZGVvXCIgfSwvL+WFjei0ueWNh+e6p++8iOWcn+WcsO+8jOi0p+aetuiuvuaWve+8iVxyXG4gICAgICAgIHZpZGVvMTc6IHsgYWRfaWQ6IFwiY2xpZW50X3ZpZGVvXzE3XCIsIGFkX3NvdXJjZTogXCJjbGllbnRfdmlkZW9fMTdcIiwgYWRfdHlwZTogXCJyZXdhcmRfdmlkZW9cIiB9LC8v6aKG5Y+W5q+P5pel5Lu75YqhXHJcbiAgICAgICAgdmlkZW8xODogeyBhZF9pZDogXCJjbGllbnRfdmlkZW9fMThcIiwgYWRfc291cmNlOiBcImNsaWVudF92aWRlb18xOFwiLCBhZF90eXBlOiBcInJld2FyZF92aWRlb1wiIH0sLy/miZPlvIDpo57ooYzlrp3nrrFcclxuXHJcbiAgICAgICAgdmlkZW8xOTogeyBhZF9pZDogXCJjbGllbnRfdmlkZW9fMTlcIiwgYWRfc291cmNlOiBcImNsaWVudF92aWRlb18xOVwiLCBhZF90eXBlOiBcInJld2FyZF92aWRlb1wiIH0sLy/miZPlvIDovpvoi6bnuqLljIVcclxuXHJcbiAgICAgICAgdmlkZW8yMDogeyBhZF9pZDogXCJjbGllbnRfdmlkZW9fMjBcIiwgYWRfc291cmNlOiBcImNsaWVudF92aWRlb18yMFwiLCBhZF90eXBlOiBcInJld2FyZF92aWRlb1wiIH0sLy/lv6vpgJ/mj5Dpq5jmtLvot4PluqZcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0FDVElPTiA9IHtcclxuICAgICAgICBjbGllbnRfZ3VpZGVfdGFzazogXCJjbGllbnRfZ3VpZGVfdGFza1wiLC8v5byV5a+85Lu75Yqh5a6M5oiQ5Liq5pWwXHJcbiAgICAgICAgY2xpZW50X3NlZWQ6IFwiY2xpZW50X3NlZWRcIiwvL+enjeS4i+enjeWtkOasoeaVsFxyXG4gICAgICAgIGNsaWVudF9nZXRfY3JvcHM6IFwiY2xpZW50X2dldF9jcm9wc1wiLC8v5pS26I635L2c54mp5qyh5pWwXHJcbiAgICAgICAgY2xpZW50X3NvbGljaXQ6IFwiY2xpZW50X3NvbGljaXRcIiwvL+aLm+aPvemhvuWuouS4quaVsFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgemxfY2xpY2tfbnVtID0gMTtcclxuXHJcbiAgICAvL+eUqOaIt+WNj+iurlxyXG4gICAgcHVibGljIHN0YXRpYyBVUkxfVVNFUiA9IFwiaHR0cDovL2dhbWV3ZWIueGlhb3NoaWRhdGEuY29tL2hhaXlhbmdsZWZhbnRpYW4vcHNlcnZpY2UuaHRtbFwiO1xyXG4gICAgLy/pmpDnp4HmlL/nrZZcclxuICAgIHB1YmxpYyBzdGF0aWMgVVJMX1BSSVZBQ1kgPSBcImh0dHA6Ly9nYW1ld2ViLnhpYW9zaGlkYXRhLmNvbS9oYWl5YW5nbGVmYW50aWFuL3Bwcml2YWN5Lmh0bWxcIjtcclxuICAgIC8v5oSP6KeB5Y+N6aaIXHJcbiAgICBwdWJsaWMgc3RhdGljIFVSTF9QUk9QT1NBTCA9IFwiaHR0cDovL2FwaS5jZW50ZXIua3VtZW5na2VqaS5jbi9tc2cvaW5kZXhcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQ2VzaGlfdmVyc2lvbiA9IGZhbHNlO1xyXG59Il19
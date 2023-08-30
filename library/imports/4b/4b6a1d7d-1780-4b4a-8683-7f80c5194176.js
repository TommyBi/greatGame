"use strict";
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
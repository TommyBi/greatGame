export default class Global {
    public static JSON_SERVER_URL = "";

    public static JSON_FILE = "allConf";

    //玩家数据配置
    public static SOUND_SWITCH_OPEN = 1;                 //音乐开关
    public static SOUND_SWITCH_CLOSE = 0;                //音乐开关

    public static SOUND_YINXIAO_SWITCH_OPEN = 1;        // 音效开关 开
    public static SOUND_YINXIAO_SWITCH_CLOSE = 0;       // 音效开关 关

    public static PERSONALRECOMM_SWITCH_OPEN = 1;   // 个人推荐开关 1
    public static PERSONALRECOMM_SWITCH_OFF = 0;

    //视频打点
    public static VIDEO_CONFIG = {
        video1: { ad_id: "client_video_01", ad_source: "client_video_01", ad_type: "reward_video" },// 一键揽客
        video2: { ad_id: "client_video_02", ad_source: "client_video_02", ad_type: "reward_video" },//  领取钞票/钞票不足

        video3: { ad_id: "client_video_03", ad_source: "client_video_03", ad_type: "reward_video" },//解锁订单
        video4: { ad_id: "client_video_04", ad_source: "client_video_04", ad_type: "reward_video" },//刷新订单

        // video5: { ad_id: "client_video_05", ad_source: "client_video_05", ad_type: "reward_video" },//订单完成领取奖励
        // video6: { ad_id: "client_video_06", ad_source: "client_video_06", ad_type: "reward_video" },//订单完成助力领取

        video7: { ad_id: "client_video_07", ad_source: "client_video_07", ad_type: "reward_video" },//看视频快速获取作物
        video8: { ad_id: "client_video_08", ad_source: "client_video_08", ad_type: "reward_video" },//扩建土地
        video9: { ad_id: "client_video_09", ad_source: "client_video_09", ad_type: "reward_video" },//扩建货架
        video10: { ad_id: "client_video_10", ad_source: "client_video_10", ad_type: "reward_video" },//收银台加速 
        video11: { ad_id: "client_video_11", ad_source: "client_video_11", ad_type: "reward_video" },//解锁作物
        video12: { ad_id: "client_video_12", ad_source: "client_video_12", ad_type: "reward_video" },//作物高产收获
        video13: { ad_id: "client_video_13", ad_source: "client_video_13", ad_type: "reward_video" },//立即除虫
        video14: { ad_id: "client_video_14", ad_source: "client_video_14", ad_type: "reward_video" },//全体加速
        video15: { ad_id: "client_video_15", ad_source: "client_video_15", ad_type: "reward_video" },//打开回馈红包
        video16: { ad_id: "client_video_16", ad_source: "client_video_16", ad_type: "reward_video" },//免费升级（土地，货架设施）
        video17: { ad_id: "client_video_17", ad_source: "client_video_17", ad_type: "reward_video" },//领取每日任务
        video18: { ad_id: "client_video_18", ad_source: "client_video_18", ad_type: "reward_video" },//打开飞行宝箱

        video19: { ad_id: "client_video_19", ad_source: "client_video_19", ad_type: "reward_video" },//打开辛苦红包

        video20: { ad_id: "client_video_20", ad_source: "client_video_20", ad_type: "reward_video" },//快速提高活跃度
    }

    public static EVENT_ACTION = {
        client_guide_task: "client_guide_task",//引导任务完成个数
        client_seed: "client_seed",//种下种子次数
        client_get_crops: "client_get_crops",//收获作物次数
        client_solicit: "client_solicit",//招揽顾客个数
    }

    public static zl_click_num = 1;

    //用户协议
    public static URL_USER = "http://gameweb.xiaoshidata.com/haiyanglefantian/pservice.html";
    //隐私政策
    public static URL_PRIVACY = "http://gameweb.xiaoshidata.com/haiyanglefantian/pprivacy.html";
    //意见反馈
    public static URL_PROPOSAL = "http://api.center.kumengkeji.cn/msg/index";

    public static isCeshi_version = false;
}
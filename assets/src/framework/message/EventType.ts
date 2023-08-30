export class EventType {
    static UPDATE_MONEY = "update_money";   // 更新钱数
    static UPDATE_GOLD = "update_gold";   // 更新钞票
    static UPDATE_XFZS = "update_xfzs";   // 更新幸福指数
    static JX_SC = "jx_sc";   // 加速或者除虫
    static JIASU = "jiasu";   // 加速
    static SHACHONG = "shachong";   // 除虫
    static CROP_GET = "crop_get";   // 作物收获
    static CROP_ADD_SPEED = "crop_add_speed";   // 加速成熟
    static CROP_PLANT = "crop_plant";   // 种植作物
    static CROP_PLANT_GET = "crop_plant_get";   // 通过订单种植作物
    static CROP_GC = "crop_gc";   // 作物高产
    static VEGETABLES_UPDATE = "vegetables_update";   // 解锁后更新种植页面
    static UPDATE_FIELD_TIPS = "update_field_tips"//更新地块小手提示
    static UPDATE_SHELVE = "update_shelve"; // 仓库变化，更新货架
    static UPDATE_SHELVE_ORDER = "update_shelve_order"; // 订单变化，更新货架
    static CASHIER_ADD_MULTIPLE = "cashier_add_multiple";// 收银台加倍
    static FIELD_BUILD = "field_build";// 扩建土地
    static SHELVE_BUILD = "shelve_build";// 扩建货架
    static LVUP_UPDATE = "lvup_update";// 更新升级列表
    static FIELD_LEVEL_UPDATE = "field_level_update";//土地等级变化
    static SHELVE_LEVEL_UPDATE = "shelve_level_update";//货架等级变化
    static VEGETABLE_CLOSE = "vegetable_close"; // 关闭种菜页面

    static CHANGE_CASHIER = "change_cashier";// 切换收银皮肤
    static CHANGE_WAREHOUSE = "change_warehouse";// 切换仓库皮肤
    static CHANGE_WALL = "change_wall";// 切换围墙皮肤
    static CHANGE_ROAD = "change_road";// 切换道路皮肤
    static CHANGE_PIPE = "change_pipe";// 切换水管皮肤
    static CHANGE_FENCE = "change_fence";// 切换围栏皮肤
    static CHANGE_SCARECROW = "change_scarecrow";// 切换稻草人皮肤

    static HKHB_UPDATE = "hkhb_update";//更新回馈红包

    static MAIN_LOCK = "main_lock";//锁定页面
    static GUIDE_COMPLETE = "guide_complete";//新手引导完成


    static SDK_REWARD_CONFIG = "sdk_reward_config";// 获取奖励配置
    static SDK_REWARD_GOT = "sdk_reward_got";// 领取红包奖励
    static SDK_REWARD_LOST = "sdk_reward_lost";// 领取红包奖励失败
    static SDK_LEVEL_UP = "sdk_level_up";//4. 集市升级结果回调
    static SDK_WXBIND = "sdk_wxbind";//4. 微信绑定回调
    static SDK_VIDEO_NUM = "sdk_video_num";//更新订单红包池看视频数量

    static TASK_UPDATE = "task_update"//更新任务列表
    static TASK_COMPLETE_BACK = "task_complete_back"// 领取任务奖励结果回调
    static LEVEL_UPDATE = "level_update"//更新等级列表

    static ORDER_OPEN = "order_open"//关闭订单
    static ORDER_CLOSE = "order_close"//关闭订单
    static ORDER_UPDATE_INDEX = "order_update_index"//刷新订单其中一条
    static ORDER_UPDATE_LIST = "order_update_list"//刷新订单列表
    static ORDER_GIVE_UP = "order_give_up"//放弃订单
    static ORDER_UPDATE_TOP = "order_update_top"//更新头部订单
    static ORDER_UNLOCK = "order_unlock"//解锁订单
    static ORDER_CURRENT_UPDATE = "order_current_update"//刷新当前订单
    static ORDER_CURRENT_CLOSE = "order_current_close"//关闭当前订单
    static ORDER_GET_SUCCESS = "order_get_success"//当前接单成功
    static ORDER_COMPLETE_UPDATE = "order_complete_update"//更新订单完成

    static GUIDE_Hide = "guide_hide"//更新新手引导
    static GUIDE_UPDATE = "guide_update"//更新新手引导


    static CLEAR_PEST_CLOSE = "clear_pest_close"; //关闭除虫面板

    static GET_CROP_CLOSE = "get_crop_close"; //关闭获得作物面板


    static ADD_CAHIER_ROLE = "add_cahier_role"; // 增加结账人数
    static UPDATE_CAHIER_ROLE = "update_cahier_role"; // 更新结账人数
    static CASHIER_AUTO_CLOSE = "cashier_auto_close"; // 结束自动结账
    static ONE_SOLICIT = "one_solicit"; // 一键招揽
    static GUIDE_TASK_UPDATE = "guide_task_update"; // 更新引导任务信息


    static CLOSE_MANYI_VIEW = "close_manyi_view";// 关闭了满意界面
    static FINISH_AD_AUTOSERVICE = "finish_ad_autoService"// 成功看完了自助服务的视频广告

    static CROP_SELL = "crop_sell"// 卖出作物
    static PROP_INFO = "prop_info"// 获取设施打开小面板信息
    static PROP_INFO_ERROR = "prop_info_error"// 获取设施打开小面板信息失败
    static VIDEO_BACK = "video_back"// 看视频返回
    static TASK_INFO_DAY = "task_info_day"// 每日任务
    static TASK_INFO_COUNT = "task_info_count"// 任务红点数量
    static TASK_ITEM_CHANG = "task_item_chang"// 任务状态改变
}
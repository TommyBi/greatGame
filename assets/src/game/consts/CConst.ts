//订单结构
export interface order_config {
    id: number,
    quality: number,
    crop1: number,
    num1: number,
    crop2: number,
    num2: number,
    crop3: number,
    num3: number,
    crop4: number,
    num4: number,
}
//订单权重
export interface order_weight_config {
    limit: number,
    lv1: number,
    lv2: number,
    lv3: number,
    lv4: number,
    lv5: number,
    lv6: number,
}



//作物
export interface crop_config {
    id: number,
    name: string,//作物名称
    unlock: number,//初始解锁状态
    desc: string,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
    value11: number,
}
export enum fieldType {
    ONE = 11,
    TWO = 12,
    THREE = 13,
    FOUR = 14,
    FIVE = 15,
    SIX = 16
}
export enum propType {
    cashier = 31,  // 收银台
    pipe,       // 水管
    wall,       // 围墙
    road,       // 街道
    scarecrow,   // 稻草人
    warehouse,  // 仓库
    fence,      // 栅栏
}

//菜地
export interface levelUp_config {
    id: number,
    name: string,
    type: number,
    unlock_state: number,//默认解锁状态1已解锁
    money: number//升级消耗钞票
    video_num: number,//升级所需视频数量
    reward: number,//奖励幸福指数
    add_type: number,//加成类型
    add_num: number,//加成参数
    add_desc: string,//文本(-1.无特殊奖励，不显示)
}
//等级
export interface level_config {
    level: number,
    sdzl: number,//手动招揽x次后变为自动
    gks: number,//回馈红包招揽顾客数量
}

// 货币类型
export enum CURRENCY {
    MONEY = 1,  // 红包
    GOLD = 2,   // 金币
    HAPPY = 3,  // 幸福指数
}
// 货币飞效果的数量
export enum CURRENCY_FLY_COUNT {
    DEFAULT = 10,   // 常规表现
    DOUBLE = 20,    // 视频广告等额外达成收益
}
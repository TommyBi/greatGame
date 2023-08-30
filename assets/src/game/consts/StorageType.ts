export default class StorageType {
    static level: string = 'level';//当前等级

    static gameData = "gameData";
    static uiCionfig = "uiCionfig";
    static wareHouse = "wareHouse";
    static offlineTimestamp = "offlineTimestamp";// 计算离线收益的时间戳
    static cashierGold = "cashierGold";//收银台自动收银数量
    static guide = "guide";//引导
    static zlNum = "zlNum";//手动招揽人数
    static plantNum = "plantNum";//作物种植次数
    static lvUpVideoNum = "lvUpVideoNum";//升级观看视频次数
    static order = "order";//订单缓存
}
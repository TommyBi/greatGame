/**
 * 人物行走动作
 */
var ActionType = {
    H_STAND: "bei-zhanli",//背后站立
    H_STAND_FINISH: "bei-zhanli+daizi",//背后站立+拿着袋子
    H_STAND_BUY: "bei-zhuangdai",//背后站立+装袋子

    Q_STAND_LEFT: "zheng-zhanli-zuo",//正面站立 左
    Q_STAND_RIGHT: "zheng-zhanli-you",//正面站立 右
    Q_STAND_FINISH_LEFT: "zheng-zhanli+daizi-zuo",//正面站立+拿着袋子
    Q_STAND_FINISH_RIGHT: "zheng-zhanli+daizi-you",//正面站立+拿着袋子
    Q_STAND_BUY: "zheng-zhuangdai",//正面站立+购买
    Q_WALK: "zheng-zoulu",//正面-行走
    Q_WALK_FINISH: "zheng-zoulu+daizi",//正面-拿着袋子行走

    CASHIER_STAND: "bei-zhanli",
    CASHIER_SHOUYIN: "bei-shouyin",
    CASHIER_WALK: "zheng-zoulu",
}
export default ActionType;
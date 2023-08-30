"use strict";
cc._RF.push(module, 'f2646vcbsZDG69LcSwKcxKe', 'ActionType');
// src/game/consts/ActionType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 人物行走动作
 */
var ActionType = {
    H_STAND: "bei-zhanli",
    H_STAND_FINISH: "bei-zhanli+daizi",
    H_STAND_BUY: "bei-zhuangdai",
    Q_STAND_LEFT: "zheng-zhanli-zuo",
    Q_STAND_RIGHT: "zheng-zhanli-you",
    Q_STAND_FINISH_LEFT: "zheng-zhanli+daizi-zuo",
    Q_STAND_FINISH_RIGHT: "zheng-zhanli+daizi-you",
    Q_STAND_BUY: "zheng-zhuangdai",
    Q_WALK: "zheng-zoulu",
    Q_WALK_FINISH: "zheng-zoulu+daizi",
    CASHIER_STAND: "bei-zhanli",
    CASHIER_SHOUYIN: "bei-shouyin",
    CASHIER_WALK: "zheng-zoulu",
};
exports.default = ActionType;

cc._RF.pop();
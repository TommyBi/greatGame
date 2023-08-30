
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/ActionType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvQWN0aW9uVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsSUFBSSxVQUFVLEdBQUc7SUFDYixPQUFPLEVBQUUsWUFBWTtJQUNyQixjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDLFdBQVcsRUFBRSxlQUFlO0lBRTVCLFlBQVksRUFBRSxrQkFBa0I7SUFDaEMsYUFBYSxFQUFFLGtCQUFrQjtJQUNqQyxtQkFBbUIsRUFBRSx3QkFBd0I7SUFDN0Msb0JBQW9CLEVBQUUsd0JBQXdCO0lBQzlDLFdBQVcsRUFBRSxpQkFBaUI7SUFDOUIsTUFBTSxFQUFFLGFBQWE7SUFDckIsYUFBYSxFQUFFLG1CQUFtQjtJQUVsQyxhQUFhLEVBQUUsWUFBWTtJQUMzQixlQUFlLEVBQUUsYUFBYTtJQUM5QixZQUFZLEVBQUUsYUFBYTtDQUM5QixDQUFBO0FBQ0Qsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS6uueJqeihjOi1sOWKqOS9nFxyXG4gKi9cclxudmFyIEFjdGlvblR5cGUgPSB7XHJcbiAgICBIX1NUQU5EOiBcImJlaS16aGFubGlcIiwvL+iDjOWQjuermeeri1xyXG4gICAgSF9TVEFORF9GSU5JU0g6IFwiYmVpLXpoYW5saStkYWl6aVwiLC8v6IOM5ZCO56uZ56uLK+aLv+edgOiii+WtkFxyXG4gICAgSF9TVEFORF9CVVk6IFwiYmVpLXpodWFuZ2RhaVwiLC8v6IOM5ZCO56uZ56uLK+ijheiii+WtkFxyXG5cclxuICAgIFFfU1RBTkRfTEVGVDogXCJ6aGVuZy16aGFubGktenVvXCIsLy/mraPpnaLnq5nnq4sg5bemXHJcbiAgICBRX1NUQU5EX1JJR0hUOiBcInpoZW5nLXpoYW5saS15b3VcIiwvL+ato+mdouermeeriyDlj7NcclxuICAgIFFfU1RBTkRfRklOSVNIX0xFRlQ6IFwiemhlbmctemhhbmxpK2RhaXppLXp1b1wiLC8v5q2j6Z2i56uZ56uLK+aLv+edgOiii+WtkFxyXG4gICAgUV9TVEFORF9GSU5JU0hfUklHSFQ6IFwiemhlbmctemhhbmxpK2RhaXppLXlvdVwiLC8v5q2j6Z2i56uZ56uLK+aLv+edgOiii+WtkFxyXG4gICAgUV9TVEFORF9CVVk6IFwiemhlbmctemh1YW5nZGFpXCIsLy/mraPpnaLnq5nnq4sr6LSt5LmwXHJcbiAgICBRX1dBTEs6IFwiemhlbmctem91bHVcIiwvL+ato+mdoi3ooYzotbBcclxuICAgIFFfV0FMS19GSU5JU0g6IFwiemhlbmctem91bHUrZGFpemlcIiwvL+ato+mdoi3mi7/nnYDooovlrZDooYzotbBcclxuXHJcbiAgICBDQVNISUVSX1NUQU5EOiBcImJlaS16aGFubGlcIixcclxuICAgIENBU0hJRVJfU0hPVVlJTjogXCJiZWktc2hvdXlpblwiLFxyXG4gICAgQ0FTSElFUl9XQUxLOiBcInpoZW5nLXpvdWx1XCIsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uVHlwZTsiXX0=
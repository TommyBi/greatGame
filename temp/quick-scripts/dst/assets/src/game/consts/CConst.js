
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/CConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cfbaHbFiBO04inJ7AaMuwi', 'CConst');
// src/game/consts/CConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENCY_FLY_COUNT = exports.CURRENCY = exports.propType = exports.fieldType = void 0;
var fieldType;
(function (fieldType) {
    fieldType[fieldType["ONE"] = 11] = "ONE";
    fieldType[fieldType["TWO"] = 12] = "TWO";
    fieldType[fieldType["THREE"] = 13] = "THREE";
    fieldType[fieldType["FOUR"] = 14] = "FOUR";
    fieldType[fieldType["FIVE"] = 15] = "FIVE";
    fieldType[fieldType["SIX"] = 16] = "SIX";
})(fieldType = exports.fieldType || (exports.fieldType = {}));
var propType;
(function (propType) {
    propType[propType["cashier"] = 31] = "cashier";
    propType[propType["pipe"] = 32] = "pipe";
    propType[propType["wall"] = 33] = "wall";
    propType[propType["road"] = 34] = "road";
    propType[propType["scarecrow"] = 35] = "scarecrow";
    propType[propType["warehouse"] = 36] = "warehouse";
    propType[propType["fence"] = 37] = "fence";
})(propType = exports.propType || (exports.propType = {}));
// 货币类型
var CURRENCY;
(function (CURRENCY) {
    CURRENCY[CURRENCY["MONEY"] = 1] = "MONEY";
    CURRENCY[CURRENCY["GOLD"] = 2] = "GOLD";
    CURRENCY[CURRENCY["HAPPY"] = 3] = "HAPPY";
})(CURRENCY = exports.CURRENCY || (exports.CURRENCY = {}));
// 货币飞效果的数量
var CURRENCY_FLY_COUNT;
(function (CURRENCY_FLY_COUNT) {
    CURRENCY_FLY_COUNT[CURRENCY_FLY_COUNT["DEFAULT"] = 10] = "DEFAULT";
    CURRENCY_FLY_COUNT[CURRENCY_FLY_COUNT["DOUBLE"] = 20] = "DOUBLE";
})(CURRENCY_FLY_COUNT = exports.CURRENCY_FLY_COUNT || (exports.CURRENCY_FLY_COUNT = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvQ0NvbnN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQSxJQUFZLFNBT1g7QUFQRCxXQUFZLFNBQVM7SUFDakIsd0NBQVEsQ0FBQTtJQUNSLHdDQUFRLENBQUE7SUFDUiw0Q0FBVSxDQUFBO0lBQ1YsMENBQVMsQ0FBQTtJQUNULDBDQUFTLENBQUE7SUFDVCx3Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQVBXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBT3BCO0FBQ0QsSUFBWSxRQVFYO0FBUkQsV0FBWSxRQUFRO0lBQ2hCLDhDQUFZLENBQUE7SUFDWix3Q0FBSSxDQUFBO0lBQ0osd0NBQUksQ0FBQTtJQUNKLHdDQUFJLENBQUE7SUFDSixrREFBUyxDQUFBO0lBQ1Qsa0RBQVMsQ0FBQTtJQUNULDBDQUFLLENBQUE7QUFDVCxDQUFDLEVBUlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFRbkI7QUFzQkQsT0FBTztBQUNQLElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQix5Q0FBUyxDQUFBO0lBQ1QsdUNBQVEsQ0FBQTtJQUNSLHlDQUFTLENBQUE7QUFDYixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFDRCxXQUFXO0FBQ1gsSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzFCLGtFQUFZLENBQUE7SUFDWixnRUFBVyxDQUFBO0FBQ2YsQ0FBQyxFQUhXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBRzdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/orqLljZXnu5PmnoRcclxuZXhwb3J0IGludGVyZmFjZSBvcmRlcl9jb25maWcge1xyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIHF1YWxpdHk6IG51bWJlcixcclxuICAgIGNyb3AxOiBudW1iZXIsXHJcbiAgICBudW0xOiBudW1iZXIsXHJcbiAgICBjcm9wMjogbnVtYmVyLFxyXG4gICAgbnVtMjogbnVtYmVyLFxyXG4gICAgY3JvcDM6IG51bWJlcixcclxuICAgIG51bTM6IG51bWJlcixcclxuICAgIGNyb3A0OiBudW1iZXIsXHJcbiAgICBudW00OiBudW1iZXIsXHJcbn1cclxuLy/orqLljZXmnYPph41cclxuZXhwb3J0IGludGVyZmFjZSBvcmRlcl93ZWlnaHRfY29uZmlnIHtcclxuICAgIGxpbWl0OiBudW1iZXIsXHJcbiAgICBsdjE6IG51bWJlcixcclxuICAgIGx2MjogbnVtYmVyLFxyXG4gICAgbHYzOiBudW1iZXIsXHJcbiAgICBsdjQ6IG51bWJlcixcclxuICAgIGx2NTogbnVtYmVyLFxyXG4gICAgbHY2OiBudW1iZXIsXHJcbn1cclxuXHJcblxyXG5cclxuLy/kvZznialcclxuZXhwb3J0IGludGVyZmFjZSBjcm9wX2NvbmZpZyB7XHJcbiAgICBpZDogbnVtYmVyLFxyXG4gICAgbmFtZTogc3RyaW5nLC8v5L2c54mp5ZCN56ewXHJcbiAgICB1bmxvY2s6IG51bWJlciwvL+WIneWni+ino+mUgeeKtuaAgVxyXG4gICAgZGVzYzogc3RyaW5nLFxyXG4gICAgdmFsdWUxOiBudW1iZXIsXHJcbiAgICB2YWx1ZTI6IG51bWJlcixcclxuICAgIHZhbHVlMzogbnVtYmVyLFxyXG4gICAgdmFsdWU0OiBudW1iZXIsXHJcbiAgICB2YWx1ZTU6IG51bWJlcixcclxuICAgIHZhbHVlNjogbnVtYmVyLFxyXG4gICAgdmFsdWU3OiBudW1iZXIsXHJcbiAgICB2YWx1ZTg6IG51bWJlcixcclxuICAgIHZhbHVlOTogbnVtYmVyLFxyXG4gICAgdmFsdWUxMDogbnVtYmVyLFxyXG4gICAgdmFsdWUxMTogbnVtYmVyLFxyXG59XHJcbmV4cG9ydCBlbnVtIGZpZWxkVHlwZSB7XHJcbiAgICBPTkUgPSAxMSxcclxuICAgIFRXTyA9IDEyLFxyXG4gICAgVEhSRUUgPSAxMyxcclxuICAgIEZPVVIgPSAxNCxcclxuICAgIEZJVkUgPSAxNSxcclxuICAgIFNJWCA9IDE2XHJcbn1cclxuZXhwb3J0IGVudW0gcHJvcFR5cGUge1xyXG4gICAgY2FzaGllciA9IDMxLCAgLy8g5pS26ZO25Y+wXHJcbiAgICBwaXBlLCAgICAgICAvLyDmsLTnrqFcclxuICAgIHdhbGwsICAgICAgIC8vIOWbtOWimVxyXG4gICAgcm9hZCwgICAgICAgLy8g6KGX6YGTXHJcbiAgICBzY2FyZWNyb3csICAgLy8g56i76I2J5Lq6XHJcbiAgICB3YXJlaG91c2UsICAvLyDku5PlupNcclxuICAgIGZlbmNlLCAgICAgIC8vIOagheagj1xyXG59XHJcblxyXG4vL+iPnOWcsFxyXG5leHBvcnQgaW50ZXJmYWNlIGxldmVsVXBfY29uZmlnIHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBudW1iZXIsXHJcbiAgICB1bmxvY2tfc3RhdGU6IG51bWJlciwvL+m7mOiupOino+mUgeeKtuaAgTHlt7Lop6PplIFcclxuICAgIG1vbmV5OiBudW1iZXIvL+WNh+e6p+a2iOiAl+mSnuelqFxyXG4gICAgdmlkZW9fbnVtOiBudW1iZXIsLy/ljYfnuqfmiYDpnIDop4bpopHmlbDph49cclxuICAgIHJld2FyZDogbnVtYmVyLC8v5aWW5Yqx5bm456aP5oyH5pWwXHJcbiAgICBhZGRfdHlwZTogbnVtYmVyLC8v5Yqg5oiQ57G75Z6LXHJcbiAgICBhZGRfbnVtOiBudW1iZXIsLy/liqDmiJDlj4LmlbBcclxuICAgIGFkZF9kZXNjOiBzdHJpbmcsLy/mlofmnKwoLTEu5peg54m55q6K5aWW5Yqx77yM5LiN5pi+56S6KVxyXG59XHJcbi8v562J57qnXHJcbmV4cG9ydCBpbnRlcmZhY2UgbGV2ZWxfY29uZmlnIHtcclxuICAgIGxldmVsOiBudW1iZXIsXHJcbiAgICBzZHpsOiBudW1iZXIsLy/miYvliqjmi5vmj7145qyh5ZCO5Y+Y5Li66Ieq5YqoXHJcbiAgICBna3M6IG51bWJlciwvL+WbnummiOe6ouWMheaLm+aPvemhvuWuouaVsOmHj1xyXG59XHJcblxyXG4vLyDotKfluIHnsbvlnotcclxuZXhwb3J0IGVudW0gQ1VSUkVOQ1kge1xyXG4gICAgTU9ORVkgPSAxLCAgLy8g57qi5YyFXHJcbiAgICBHT0xEID0gMiwgICAvLyDph5HluIFcclxuICAgIEhBUFBZID0gMywgIC8vIOW5uOemj+aMh+aVsFxyXG59XHJcbi8vIOi0p+W4gemjnuaViOaenOeahOaVsOmHj1xyXG5leHBvcnQgZW51bSBDVVJSRU5DWV9GTFlfQ09VTlQge1xyXG4gICAgREVGQVVMVCA9IDEwLCAgIC8vIOW4uOinhOihqOeOsFxyXG4gICAgRE9VQkxFID0gMjAsICAgIC8vIOinhumikeW5v+WRiuetiemineWklui+vuaIkOaUtuebilxyXG59Il19
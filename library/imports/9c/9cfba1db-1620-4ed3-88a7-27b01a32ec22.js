"use strict";
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
"use strict";
cc._RF.push(module, '24be7bg51BLOrBqbIyqstqw', 'StorageType');
// src/game/consts/StorageType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageType = /** @class */ (function () {
    function StorageType() {
    }
    StorageType.level = 'level'; //当前等级
    StorageType.gameData = "gameData";
    StorageType.uiCionfig = "uiCionfig";
    StorageType.wareHouse = "wareHouse";
    StorageType.offlineTimestamp = "offlineTimestamp"; // 计算离线收益的时间戳
    StorageType.cashierGold = "cashierGold"; //收银台自动收银数量
    StorageType.guide = "guide"; //引导
    StorageType.zlNum = "zlNum"; //手动招揽人数
    StorageType.plantNum = "plantNum"; //作物种植次数
    StorageType.lvUpVideoNum = "lvUpVideoNum"; //升级观看视频次数
    StorageType.order = "order"; //订单缓存
    return StorageType;
}());
exports.default = StorageType;

cc._RF.pop();
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
    StorageType.isAutoSell = "isAutoSell"; //是否自动结账
    return StorageType;
}());
exports.default = StorageType;

cc._RF.pop();
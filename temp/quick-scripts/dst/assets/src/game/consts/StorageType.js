
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/StorageType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvU3RvcmFnZVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQVBVLGlCQUFLLEdBQVcsT0FBTyxDQUFDLENBQUEsTUFBTTtJQUU5QixvQkFBUSxHQUFHLFVBQVUsQ0FBQztJQUN0QixxQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixxQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qiw0QkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxDQUFBLGFBQWE7SUFDbkQsc0JBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQSxRQUFRO0lBQzdDLGtCQUFDO0NBUkQsQUFRQyxJQUFBO2tCQVJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZVR5cGUge1xuICAgIHN0YXRpYyBsZXZlbDogc3RyaW5nID0gJ2xldmVsJzsvL+W9k+WJjeetiee6p1xuXG4gICAgc3RhdGljIGdhbWVEYXRhID0gXCJnYW1lRGF0YVwiO1xuICAgIHN0YXRpYyB1aUNpb25maWcgPSBcInVpQ2lvbmZpZ1wiO1xuICAgIHN0YXRpYyB3YXJlSG91c2UgPSBcIndhcmVIb3VzZVwiO1xuICAgIHN0YXRpYyBvZmZsaW5lVGltZXN0YW1wID0gXCJvZmZsaW5lVGltZXN0YW1wXCI7Ly8g6K6h566X56a757q/5pS255uK55qE5pe26Ze05oizXG4gICAgc3RhdGljIGlzQXV0b1NlbGwgPSBcImlzQXV0b1NlbGxcIjsvL+aYr+WQpuiHquWKqOe7k+i0plxufSJdfQ==
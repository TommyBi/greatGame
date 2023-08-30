
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvU3RvcmFnZVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBYUEsQ0FBQztJQVpVLGlCQUFLLEdBQVcsT0FBTyxDQUFDLENBQUEsTUFBTTtJQUU5QixvQkFBUSxHQUFHLFVBQVUsQ0FBQztJQUN0QixxQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixxQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qiw0QkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxDQUFBLGFBQWE7SUFDbkQsdUJBQVcsR0FBRyxhQUFhLENBQUMsQ0FBQSxXQUFXO0lBQ3ZDLGlCQUFLLEdBQUcsT0FBTyxDQUFDLENBQUEsSUFBSTtJQUNwQixpQkFBSyxHQUFHLE9BQU8sQ0FBQyxDQUFBLFFBQVE7SUFDeEIsb0JBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQSxRQUFRO0lBQzlCLHdCQUFZLEdBQUcsY0FBYyxDQUFDLENBQUEsVUFBVTtJQUN4QyxpQkFBSyxHQUFHLE9BQU8sQ0FBQyxDQUFBLE1BQU07SUFDakMsa0JBQUM7Q0FiRCxBQWFDLElBQUE7a0JBYm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlVHlwZSB7XHJcbiAgICBzdGF0aWMgbGV2ZWw6IHN0cmluZyA9ICdsZXZlbCc7Ly/lvZPliY3nrYnnuqdcclxuXHJcbiAgICBzdGF0aWMgZ2FtZURhdGEgPSBcImdhbWVEYXRhXCI7XHJcbiAgICBzdGF0aWMgdWlDaW9uZmlnID0gXCJ1aUNpb25maWdcIjtcclxuICAgIHN0YXRpYyB3YXJlSG91c2UgPSBcIndhcmVIb3VzZVwiO1xyXG4gICAgc3RhdGljIG9mZmxpbmVUaW1lc3RhbXAgPSBcIm9mZmxpbmVUaW1lc3RhbXBcIjsvLyDorqHnrpfnprvnur/mlLbnm4rnmoTml7bpl7TmiLNcclxuICAgIHN0YXRpYyBjYXNoaWVyR29sZCA9IFwiY2FzaGllckdvbGRcIjsvL+aUtumTtuWPsOiHquWKqOaUtumTtuaVsOmHj1xyXG4gICAgc3RhdGljIGd1aWRlID0gXCJndWlkZVwiOy8v5byV5a+8XHJcbiAgICBzdGF0aWMgemxOdW0gPSBcInpsTnVtXCI7Ly/miYvliqjmi5vmj73kurrmlbBcclxuICAgIHN0YXRpYyBwbGFudE51bSA9IFwicGxhbnROdW1cIjsvL+S9nOeJqeenjeakjeasoeaVsFxyXG4gICAgc3RhdGljIGx2VXBWaWRlb051bSA9IFwibHZVcFZpZGVvTnVtXCI7Ly/ljYfnuqfop4LnnIvop4bpopHmrKHmlbBcclxuICAgIHN0YXRpYyBvcmRlciA9IFwib3JkZXJcIjsvL+iuouWNlee8k+WtmFxyXG59Il19
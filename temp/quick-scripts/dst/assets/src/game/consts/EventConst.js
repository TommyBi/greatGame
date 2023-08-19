
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/EventConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb45685w5lF4JSh8kV3XE+D', 'EventConst');
// src/game/consts/EventConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventConst = {
    //返回标识
    REQUEST_SUCCESS: 0,
    //合成消息redUIType
    FLOATLAYER_REWARD: 1,
    COMPLETE_REWARD: 2,
    GUEST_REWARD: 3,
    BUFFER_REWARD: 4,
    BUFFER_RWEARD_FAIL: 0,
    TASK_CLAIMOVER: 1,
    TASK_CANCLAIM: 2,
    //动作状态
    ANIMAL_SPAWN: 0,
    ANIMAL_COMPOSE: 1,
    ANIMAL_BEREBORN: 2,
    //游戏视图状态
    VIEW_STATE_NORMAL: 0,
    VIEW_STATE_COMPOSE: 1,
};
exports.default = EventConst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvRXZlbnRDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksVUFBVSxHQUFHO0lBQ1QsTUFBTTtJQUNOLGVBQWUsRUFBRyxDQUFDO0lBRW5CLGVBQWU7SUFDZixpQkFBaUIsRUFBRyxDQUFDO0lBQ3JCLGVBQWUsRUFBRyxDQUFDO0lBQ25CLFlBQVksRUFBRyxDQUFDO0lBQ2hCLGFBQWEsRUFBRyxDQUFDO0lBRWpCLGtCQUFrQixFQUFHLENBQUM7SUFFdEIsY0FBYyxFQUFHLENBQUM7SUFDbEIsYUFBYSxFQUFHLENBQUM7SUFFakIsTUFBTTtJQUNOLFlBQVksRUFBRyxDQUFDO0lBQ2hCLGNBQWMsRUFBRyxDQUFDO0lBQ2xCLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUIsRUFBRyxDQUFDO0lBQ3JCLGtCQUFrQixFQUFHLENBQUM7Q0FDN0IsQ0FBQztBQUNGLGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFdmVudENvbnN0ID0ge1xuICAgICAgICAvL+i/lOWbnuagh+ivhlxuICAgICAgICBSRVFVRVNUX1NVQ0NFU1MgOiAwLFxuXG4gICAgICAgIC8v5ZCI5oiQ5raI5oGvcmVkVUlUeXBlXG4gICAgICAgIEZMT0FUTEFZRVJfUkVXQVJEIDogMSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rWu5bGC5aWW5YqxXG4gICAgICAgIENPTVBMRVRFX1JFV0FSRCA6IDIsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Zev5YWz57qi5YyFXG4gICAgICAgIEdVRVNUX1JFV0FSRCA6IDMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5paw5omL57qi5YyFXG4gICAgICAgIEJVRkZFUl9SRVdBUkQgOiA0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57yT5Yay5Yy66Ze057qi5YyFXG5cbiAgICAgICAgQlVGRkVSX1JXRUFSRF9GQUlMIDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgLy/nvJPlhrLljLrpl7TnuqLljIXph5Hpop3kuLowXG5cbiAgICAgICAgVEFTS19DTEFJTU9WRVIgOiAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lt7Lnu4/pooblj5ZcbiAgICAgICAgVEFTS19DQU5DTEFJTSA6IDIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lj6/pooblj5YgICBcbiAgICAgICAgXG4gICAgICAgIC8v5Yqo5L2c54q25oCBXG4gICAgICAgIEFOSU1BTF9TUEFXTiA6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Ye655Sf5Yqo5L2cXG4gICAgICAgIEFOSU1BTF9DT01QT1NFIDogMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5ZCI5oiQ5Yqo5L2cXG4gICAgICAgIEFOSU1BTF9CRVJFQk9STiA6MiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6YeN55Sf5Yqo5L2cXG4gICAgICAgIC8v5ri45oiP6KeG5Zu+54q25oCBXG4gICAgICAgIFZJRVdfU1RBVEVfTk9STUFMIDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KeG5Zu+5q2j5bi454q25oCBXG4gICAgICAgIFZJRVdfU1RBVEVfQ09NUE9TRSA6IDEsICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KeG5Zu+5pS26ZuG54q25oCBXG59O1xuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb25zdDsiXX0=
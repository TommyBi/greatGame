
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvRXZlbnRDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksVUFBVSxHQUFHO0lBQ1QsTUFBTTtJQUNOLGVBQWUsRUFBRyxDQUFDO0lBRW5CLGVBQWU7SUFDZixpQkFBaUIsRUFBRyxDQUFDO0lBQ3JCLGVBQWUsRUFBRyxDQUFDO0lBQ25CLFlBQVksRUFBRyxDQUFDO0lBQ2hCLGFBQWEsRUFBRyxDQUFDO0lBRWpCLGtCQUFrQixFQUFHLENBQUM7SUFFdEIsY0FBYyxFQUFHLENBQUM7SUFDbEIsYUFBYSxFQUFHLENBQUM7SUFFakIsTUFBTTtJQUNOLFlBQVksRUFBRyxDQUFDO0lBQ2hCLGNBQWMsRUFBRyxDQUFDO0lBQ2xCLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUIsRUFBRyxDQUFDO0lBQ3JCLGtCQUFrQixFQUFHLENBQUM7Q0FDN0IsQ0FBQztBQUNGLGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFdmVudENvbnN0ID0ge1xyXG4gICAgICAgIC8v6L+U5Zue5qCH6K+GXHJcbiAgICAgICAgUkVRVUVTVF9TVUNDRVNTIDogMCxcclxuXHJcbiAgICAgICAgLy/lkIjmiJDmtojmga9yZWRVSVR5cGVcclxuICAgICAgICBGTE9BVExBWUVSX1JFV0FSRCA6IDEsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+a1ruWxguWlluWKsVxyXG4gICAgICAgIENPTVBMRVRFX1JFV0FSRCA6IDIsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Zev5YWz57qi5YyFXHJcbiAgICAgICAgR1VFU1RfUkVXQVJEIDogMywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mlrDmiYvnuqLljIVcclxuICAgICAgICBCVUZGRVJfUkVXQVJEIDogNCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+e8k+WGsuWMuumXtOe6ouWMhVxyXG5cclxuICAgICAgICBCVUZGRVJfUldFQVJEX0ZBSUwgOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAvL+e8k+WGsuWMuumXtOe6ouWMhemHkemineS4ujBcclxuXHJcbiAgICAgICAgVEFTS19DTEFJTU9WRVIgOiAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lt7Lnu4/pooblj5ZcclxuICAgICAgICBUQVNLX0NBTkNMQUlNIDogMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WPr+mihuWPliAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5Yqo5L2c54q25oCBXHJcbiAgICAgICAgQU5JTUFMX1NQQVdOIDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lh7rnlJ/liqjkvZxcclxuICAgICAgICBBTklNQUxfQ09NUE9TRSA6IDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WQiOaIkOWKqOS9nFxyXG4gICAgICAgIEFOSU1BTF9CRVJFQk9STiA6MiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6YeN55Sf5Yqo5L2cXHJcbiAgICAgICAgLy/muLjmiI/op4blm77nirbmgIFcclxuICAgICAgICBWSUVXX1NUQVRFX05PUk1BTCA6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvL+inhuWbvuato+W4uOeKtuaAgVxyXG4gICAgICAgIFZJRVdfU1RBVEVfQ09NUE9TRSA6IDEsICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KeG5Zu+5pS26ZuG54q25oCBXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q29uc3Q7Il19
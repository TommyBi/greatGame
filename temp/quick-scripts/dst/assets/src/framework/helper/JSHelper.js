
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/helper/JSHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e2f1iCU59Jt72wei/BIooU', 'JSHelper');
// src/framework/helper/JSHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicManager_1 = require("../manager/MusicManager");
var JSHelper = /** @class */ (function () {
    function JSHelper() {
    }
    JSHelper.playClickEffect = function () {
        MusicManager_1.default.playEffect("click");
    };
    JSHelper.playEffect = function (eName, loop, isSign) {
        if (loop === void 0) { loop = false; }
        if (isSign === void 0) { isSign = false; }
        MusicManager_1.default.playEffect(eName, loop, isSign);
    };
    JSHelper.stopEffect = function (eName) {
        MusicManager_1.default.stopEffect(eName);
    };
    JSHelper.playMisuc = function (mName) {
        MusicManager_1.default.playMusic(mName, true);
    };
    JSHelper.setPauseMusic = function () {
        MusicManager_1.default.setPauseMusic();
    };
    JSHelper.setResumeMusic = function () {
        MusicManager_1.default.setResumeMusic();
    };
    JSHelper.getLastMusic = function () {
        return MusicManager_1.default.getLastMusic();
    };
    return JSHelper;
}());
;
exports.default = JSHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2hlbHBlci9KU0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUVuRDtJQUFBO0lBc0JBLENBQUM7SUFyQlUsd0JBQWUsR0FBdEI7UUFDSSxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ00sbUJBQVUsR0FBakIsVUFBa0IsS0FBSyxFQUFDLElBQVksRUFBQyxNQUFjO1FBQTNCLHFCQUFBLEVBQUEsWUFBWTtRQUFDLHVCQUFBLEVBQUEsY0FBYztRQUMvQyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTSxtQkFBVSxHQUFqQixVQUFrQixLQUFLO1FBQ25CLHNCQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTSxrQkFBUyxHQUFoQixVQUFpQixLQUFLO1FBQ2xCLHNCQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ00sc0JBQWEsR0FBcEI7UUFDSSxzQkFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTSx1QkFBYyxHQUFyQjtRQUNJLHNCQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNNLHFCQUFZLEdBQW5CO1FBQ0ksT0FBTyxzQkFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQUFBLENBQUM7QUFDRixrQkFBZSxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXVzaWNNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL011c2ljTWFuYWdlclwiO1xyXG5cclxuY2xhc3MgSlNIZWxwZXIge1xyXG4gICAgc3RhdGljIHBsYXlDbGlja0VmZmVjdCgpe1xyXG4gICAgICAgIE11c2ljTWFuYWdlci5wbGF5RWZmZWN0KFwiY2xpY2tcIik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcGxheUVmZmVjdChlTmFtZSxsb29wID0gZmFsc2UsaXNTaWduID0gZmFsc2Upe1xyXG4gICAgICAgIE11c2ljTWFuYWdlci5wbGF5RWZmZWN0KGVOYW1lLGxvb3AsaXNTaWduKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzdG9wRWZmZWN0KGVOYW1lKXtcclxuICAgICAgICBNdXNpY01hbmFnZXIuc3RvcEVmZmVjdChlTmFtZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcGxheU1pc3VjKG1OYW1lKXtcclxuICAgICAgICBNdXNpY01hbmFnZXIucGxheU11c2ljKG1OYW1lLHRydWUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldFBhdXNlTXVzaWMoKXtcclxuICAgICAgICBNdXNpY01hbmFnZXIuc2V0UGF1c2VNdXNpYygpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNldFJlc3VtZU11c2ljKCl7XHJcbiAgICAgICAgTXVzaWNNYW5hZ2VyLnNldFJlc3VtZU11c2ljKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0TGFzdE11c2ljKCl7XHJcbiAgICAgICAgcmV0dXJuIE11c2ljTWFuYWdlci5nZXRMYXN0TXVzaWMoKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSlNIZWxwZXI7Il19
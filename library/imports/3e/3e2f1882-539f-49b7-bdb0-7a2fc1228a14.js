"use strict";
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
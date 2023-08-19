"use strict";
cc._RF.push(module, '3dd09gCPsZKRrEVwIVWL/ao', 'BaseSdk');
// src/framework/sdk/BaseSdk.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseSdk = /** @class */ (function () {
    function BaseSdk() {
        this._basePath_android = "com.xstone.android.xsbusi.XSSdk";
        this._moudelPath_android = "com.xstone.android.xsbusi.XSBusiSdk";
        this._baseCocos = "org/cocos2dx/javascript/AppActivity";
    }
    BaseSdk.prototype.isAndroid = function () {
        return cc.sys.os == cc.sys.OS_ANDROID;
    };
    BaseSdk.prototype.isIphone = function () {
        return cc.sys.os == cc.sys.OS_IOS;
    };
    BaseSdk.prototype.systemName = function () {
        if (this.isAndroid()) {
            console.log("********************设备为Andrioid");
        }
        else if (this.isIphone()) {
            console.log("********************设备为Iphone");
        }
    };
    return BaseSdk;
}());
exports.default = BaseSdk;

cc._RF.pop();
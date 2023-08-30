
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/sdk/BaseSdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Nkay9CYXNlU2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFJSTtRQUhVLHNCQUFpQixHQUFZLGlDQUFpQyxDQUFDO1FBQy9ELHdCQUFtQixHQUFZLHFDQUFxQyxDQUFDO1FBQ3JFLGVBQVUsR0FBWSxxQ0FBcUMsQ0FBQztJQUV0RSxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUNJLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDMUMsQ0FBQztJQUNELDBCQUFRLEdBQVI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUFDRCw0QkFBVSxHQUFWO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ2xEO2FBQUssSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBQ0Qsa0JBQWUsT0FBTyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFzZVNka3tcclxuICAgIHByb3RlY3RlZCBfYmFzZVBhdGhfYW5kcm9pZCA6IHN0cmluZyA9IFwiY29tLnhzdG9uZS5hbmRyb2lkLnhzYnVzaS5YU1Nka1wiO1xyXG4gICAgcHJvdGVjdGVkIF9tb3VkZWxQYXRoX2FuZHJvaWQgOiBzdHJpbmcgPSBcImNvbS54c3RvbmUuYW5kcm9pZC54c2J1c2kuWFNCdXNpU2RrXCI7XHJcbiAgICBwcm90ZWN0ZWQgX2Jhc2VDb2NvcyA6IHN0cmluZyA9IFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIjtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcbiAgICBpc0FuZHJvaWQoKXtcclxuICAgICAgICByZXR1cm4gY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEO1xyXG4gICAgfVxyXG4gICAgaXNJcGhvbmUoKXtcclxuICAgICAgICByZXR1cm4gY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1M7XHJcbiAgICB9XHJcbiAgICBzeXN0ZW1OYW1lKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKirorr7lpIfkuLpBbmRyaW9pZFwiKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioq6K6+5aSH5Li6SXBob25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlU2RrOyJdfQ==
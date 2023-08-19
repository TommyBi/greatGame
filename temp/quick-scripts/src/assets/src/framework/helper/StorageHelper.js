"use strict";
cc._RF.push(module, '0749a0nyQxK55Bic4xXIWLa', 'StorageHelper');
// src/framework/helper/StorageHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageHelper = /** @class */ (function () {
    function StorageHelper() {
    }
    StorageHelper.saveValueByKey = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    StorageHelper.getValueByKey = function (key) {
        return cc.sys.localStorage.getItem(key);
    };
    StorageHelper.saveJsonByKey = function (key, value) {
        this.saveValueByKey(key, JSON.stringify(value));
    };
    StorageHelper.getJsonByKey = function (key) {
        var jsonStr = cc.sys.localStorage.getItem(key);
        if (jsonStr) {
            return JSON.parse(jsonStr);
        }
        return null;
    };
    StorageHelper.removeValueByKey = function (key) {
        return cc.sys.localStorage.removeItem(key);
    };
    StorageHelper.removeAll = function () {
        cc.sys.localStorage.clear();
    };
    return StorageHelper;
}());
exports.default = StorageHelper;

cc._RF.pop();
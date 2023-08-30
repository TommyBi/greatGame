
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/helper/StorageHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2hlbHBlci9TdG9yYWdlSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXFDQSxDQUFDO0lBbkNVLDRCQUFjLEdBQXJCLFVBQXNCLEdBQVUsRUFBQyxLQUFtQjtRQUVoRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSwyQkFBYSxHQUFwQixVQUFxQixHQUFVO1FBRTNCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSwyQkFBYSxHQUFwQixVQUFxQixHQUFVLEVBQUMsS0FBWTtRQUV4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLDBCQUFZLEdBQW5CLFVBQW9CLEdBQVU7UUFFMUIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUcsT0FBTyxFQUNWO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVNLDhCQUFnQixHQUF2QixVQUF3QixHQUFVO1FBRTlCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSx1QkFBUyxHQUFoQjtRQUVJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTCxvQkFBQztBQUFELENBckNBLEFBcUNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlSGVscGVyIHtcclxuXHJcbiAgICBzdGF0aWMgc2F2ZVZhbHVlQnlLZXkoa2V5OnN0cmluZyx2YWx1ZTpzdHJpbmd8bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRWYWx1ZUJ5S2V5KGtleTpzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBzYXZlSnNvbkJ5S2V5KGtleTpzdHJpbmcsdmFsdWU6b2JqZWN0KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2F2ZVZhbHVlQnlLZXkoa2V5LEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEpzb25CeUtleShrZXk6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBqc29uU3RyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYoanNvblN0cilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25TdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVtb3ZlVmFsdWVCeUtleShrZXk6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVtb3ZlQWxsKClcclxuICAgIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcbn0iXX0=
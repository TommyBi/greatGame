
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/loader/GroupLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7a25GfRSRMb4u8vnG7Ytpi', 'GroupLoader');
// src/framework/loader/GroupLoader.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GroupData_1 = require("./GroupData");
var LoaderManager_1 = require("../manager/LoaderManager");
var GroupLoader = /** @class */ (function () {
    function GroupLoader() {
        this.groupArr = []; //组的队列
    }
    GroupLoader.prototype.addGroup = function (arr, handler) {
        if (!!arr) {
            var data = this._getGroupData();
            var ghandler = data.getCompletetHandler();
            data.resources = arr;
            data.handler = handler;
            for (var index = 0; index < arr.length; index++) {
                var element = arr[index];
                LoaderManager_1.default.loadRes(element.fileName, element.type, ghandler, element.moduleName);
            }
        }
        else {
            cc.error('add group data error');
        }
    };
    GroupLoader.prototype._getGroupData = function () {
        for (var index = 0; index < this.groupArr.length; index++) {
            var element = this.groupArr[index];
            if (!element.isActive) {
                element.isActive = true;
                return element;
            }
        }
        var data = new GroupData_1.default();
        this.groupArr.push(data);
        return data;
    };
    return GroupLoader;
}());
exports.default = GroupLoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Hcm91cExvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1RDtBQUN2RCwwREFBcUQ7QUFHckQ7SUFBQTtRQUNZLGFBQVEsR0FBb0IsRUFBRSxDQUFDLENBQUEsTUFBTTtJQTZCakQsQ0FBQztJQTNCRyw4QkFBUSxHQUFSLFVBQVMsR0FBd0IsRUFBQyxPQUFlO1FBQzdDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUNQLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNoQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsSUFBTSxPQUFPLEdBQWlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsdUJBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEY7U0FDSjthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdkQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE9BQU8sT0FBTyxDQUFDO2FBQ2xCO1NBQ0o7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyb3VwRGF0YSwgeyBHcm91cEZpbGVEYXRhIH0gZnJvbSBcIi4vR3JvdXBEYXRhXCI7XG5pbXBvcnQgTG9hZGVyTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwTG9hZGVyICB7XG4gICAgcHJpdmF0ZSBncm91cEFycjpBcnJheTxHcm91cERhdGE+ID0gW107Ly/nu4TnmoTpmJ/liJdcbiAgICBcbiAgICBhZGRHcm91cChhcnI6QXJyYXk8R3JvdXBGaWxlRGF0YT4saGFuZGxlcjpIYW5kbGVyKXtcbiAgICAgICAgaWYgKCEhYXJyKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX2dldEdyb3VwRGF0YSgpO1xuICAgICAgICAgICAgbGV0IGdoYW5kbGVyID0gZGF0YS5nZXRDb21wbGV0ZXRIYW5kbGVyKCk7XG4gICAgICAgICAgICBkYXRhLnJlc291cmNlcyA9IGFycjtcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6R3JvdXBGaWxlRGF0YSA9IGFycltpbmRleF07XG4gICAgICAgICAgICAgICAgTG9hZGVyTWFuYWdlci5sb2FkUmVzKGVsZW1lbnQuZmlsZU5hbWUsZWxlbWVudC50eXBlLGdoYW5kbGVyLGVsZW1lbnQubW9kdWxlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcignYWRkIGdyb3VwIGRhdGEgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRHcm91cERhdGEoKXtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZ3JvdXBBcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ncm91cEFycltpbmRleF07XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBHcm91cERhdGEoKTtcbiAgICAgICAgdGhpcy5ncm91cEFyci5wdXNoKGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Hcm91cExvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1RDtBQUN2RCwwREFBcUQ7QUFHckQ7SUFBQTtRQUNZLGFBQVEsR0FBb0IsRUFBRSxDQUFDLENBQUEsTUFBTTtJQTZCakQsQ0FBQztJQTNCRyw4QkFBUSxHQUFSLFVBQVMsR0FBd0IsRUFBQyxPQUFlO1FBQzdDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUNQLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNoQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsSUFBTSxPQUFPLEdBQWlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsdUJBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEY7U0FDSjthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdkQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE9BQU8sT0FBTyxDQUFDO2FBQ2xCO1NBQ0o7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyb3VwRGF0YSwgeyBHcm91cEZpbGVEYXRhIH0gZnJvbSBcIi4vR3JvdXBEYXRhXCI7XHJcbmltcG9ydCBMb2FkZXJNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0xvYWRlck1hbmFnZXJcIjtcclxuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBMb2FkZXIgIHtcclxuICAgIHByaXZhdGUgZ3JvdXBBcnI6QXJyYXk8R3JvdXBEYXRhPiA9IFtdOy8v57uE55qE6Zif5YiXXHJcbiAgICBcclxuICAgIGFkZEdyb3VwKGFycjpBcnJheTxHcm91cEZpbGVEYXRhPixoYW5kbGVyOkhhbmRsZXIpe1xyXG4gICAgICAgIGlmICghIWFycikge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX2dldEdyb3VwRGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQgZ2hhbmRsZXIgPSBkYXRhLmdldENvbXBsZXRldEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgZGF0YS5yZXNvdXJjZXMgPSBhcnI7XHJcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50Okdyb3VwRmlsZURhdGEgPSBhcnJbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgTG9hZGVyTWFuYWdlci5sb2FkUmVzKGVsZW1lbnQuZmlsZU5hbWUsZWxlbWVudC50eXBlLGdoYW5kbGVyLGVsZW1lbnQubW9kdWxlTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcignYWRkIGdyb3VwIGRhdGEgZXJyb3InKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldEdyb3VwRGF0YSgpe1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmdyb3VwQXJyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ncm91cEFycltpbmRleF07XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBHcm91cERhdGEoKTtcclxuICAgICAgICB0aGlzLmdyb3VwQXJyLnB1c2goZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
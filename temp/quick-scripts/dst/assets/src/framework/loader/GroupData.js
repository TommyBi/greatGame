
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/loader/GroupData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c120kUIcBP8pWJONbvPDs2', 'GroupData');
// src/framework/loader/GroupData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler_1 = require("../base/Handler");
var GroupData = /** @class */ (function () {
    function GroupData() {
        this.resources = null;
        this.isActive = true; //默认可以使用
        this.handler = null; //回调函数
        this.loaderHandler = null; //单个资源加载完成的回调函数
        this.resultArr = []; //返回结果
        this.loaderCount = 0; //加载完成的数量
    }
    GroupData.prototype.getCompletetHandler = function () {
        this.resultArr.length = 0;
        this.loaderCount = 0;
        this.loaderHandler = Handler_1.default.create(this._signLoaderComplete, this, false);
        return this.loaderHandler;
    };
    GroupData.prototype._signLoaderComplete = function (res, url) {
        // cc.log(res,url);
        this._putToResultByName(res, url);
        if (this.loaderCount >= this.resources.length) {
            this.handler.call(this.resultArr);
            this.reset();
        }
        //比对是否全部加载完成 如果全部完成回调 同时重置data
    };
    GroupData.prototype._putToResultByName = function (res, url) {
        for (var index = 0; index < this.resources.length; index++) {
            var element = this.resources[index];
            if (!!url && url.indexOf(element.fileName) != -1) {
                this.resultArr[index] = res;
                this.loaderCount++;
                break;
            }
        }
    };
    GroupData.prototype.reset = function () {
        this.isActive = false;
        this.resources = null;
        if (!!this.handler) {
            this.handler.release();
        }
        if (!!this.loaderHandler) {
            this.loaderHandler.release();
        }
        this.resultArr.length = 0;
        this.loaderCount = 0;
        this.loaderHandler = null;
    };
    return GroupData;
}());
exports.default = GroupData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Hcm91cERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFPdEM7SUFBQTtRQUNXLGNBQVMsR0FBd0IsSUFBSSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBTSxRQUFRO1FBQzlCLFlBQU8sR0FBRyxJQUFJLENBQUMsQ0FBTyxNQUFNO1FBQzNCLGtCQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZTtRQUNyQyxjQUFTLEdBQWMsRUFBRSxDQUFDLENBQU8sTUFBTTtRQUN2QyxnQkFBVyxHQUFVLENBQUMsQ0FBQyxDQUFNLFNBQVM7SUEyQ2xELENBQUM7SUF6Q0csdUNBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVELHVDQUFtQixHQUFuQixVQUFvQixHQUFHLEVBQUMsR0FBRztRQUN2QixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtRQUNELDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsc0NBQWtCLEdBQWxCLFVBQW1CLEdBQUcsRUFBQyxHQUFHO1FBQ3RCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN4RCxJQUFNLE9BQU8sR0FBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUM1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwRmlsZURhdGEge1xyXG4gICAgZmlsZU5hbWU6c3RyaW5nLFxyXG4gICAgdHlwZTpzdHJpbmcsXHJcbiAgICBtb2R1bGVOYW1lOnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cERhdGEge1xyXG4gICAgcHVibGljIHJlc291cmNlczpBcnJheTxHcm91cEZpbGVEYXRhPiA9IG51bGw7XHJcbiAgICBwdWJsaWMgaXNBY3RpdmUgPSB0cnVlOyAgICAgIC8v6buY6K6k5Y+v5Lul5L2/55SoXHJcbiAgICBwdWJsaWMgaGFuZGxlciA9IG51bGw7ICAgICAgIC8v5Zue6LCD5Ye95pWwXHJcbiAgICBwcml2YXRlIGxvYWRlckhhbmRsZXIgPSBudWxsOyAvL+WNleS4qui1hOa6kOWKoOi9veWujOaIkOeahOWbnuiwg+WHveaVsFxyXG4gICAgcHJpdmF0ZSByZXN1bHRBcnI6QXJyYXk8YW55PiA9IFtdOyAgICAgICAvL+i/lOWbnue7k+aenFxyXG4gICAgcHJpdmF0ZSBsb2FkZXJDb3VudDpudW1iZXIgPSAwOyAgICAgIC8v5Yqg6L295a6M5oiQ55qE5pWw6YePXHJcblxyXG4gICAgZ2V0Q29tcGxldGV0SGFuZGxlcigpe1xyXG4gICAgICAgIHRoaXMucmVzdWx0QXJyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5sb2FkZXJDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5sb2FkZXJIYW5kbGVyID0gSGFuZGxlci5jcmVhdGUodGhpcy5fc2lnbkxvYWRlckNvbXBsZXRlLHRoaXMsZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlckhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgX3NpZ25Mb2FkZXJDb21wbGV0ZShyZXMsdXJsKXtcclxuICAgICAgICAvLyBjYy5sb2cocmVzLHVybCk7XHJcbiAgICAgICAgdGhpcy5fcHV0VG9SZXN1bHRCeU5hbWUocmVzLHVybCk7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVyQ291bnQgPj0gdGhpcy5yZXNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHRoaXMucmVzdWx0QXJyKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+avlOWvueaYr+WQpuWFqOmDqOWKoOi9veWujOaIkCDlpoLmnpzlhajpg6jlrozmiJDlm57osIMg5ZCM5pe26YeN572uZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIF9wdXRUb1Jlc3VsdEJ5TmFtZShyZXMsdXJsKXtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6R3JvdXBGaWxlRGF0YSA9IHRoaXMucmVzb3VyY2VzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKCEhdXJsICYmIHVybC5pbmRleE9mKGVsZW1lbnQuZmlsZU5hbWUpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdEFycltpbmRleF0gPSByZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlckNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG51bGw7XHJcbiAgICAgICAgaWYoISF0aGlzLmhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoISF0aGlzLmxvYWRlckhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXJIYW5kbGVyLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN1bHRBcnIubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmxvYWRlckNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmxvYWRlckhhbmRsZXIgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19
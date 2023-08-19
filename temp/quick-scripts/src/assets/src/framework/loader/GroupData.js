"use strict";
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
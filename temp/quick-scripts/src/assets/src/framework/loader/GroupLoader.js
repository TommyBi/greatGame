"use strict";
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
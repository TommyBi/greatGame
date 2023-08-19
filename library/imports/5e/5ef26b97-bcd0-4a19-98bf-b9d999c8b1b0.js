"use strict";
cc._RF.push(module, '5ef26uXvNBKGZi/udmZyLGw', 'Loader');
// src/framework/loader/Loader.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderItem_1 = require("./LoaderItem");
//资源加载器
var Loader = /** @class */ (function () {
    function Loader(isRelease) {
        this.moduleName = null;
        this.cacheItems = [];
        this.isRelease = false; //释放已经释放过了
        this.needRelease = isRelease;
    }
    Loader.prototype.addLoaderItem = function (url, type, handler) {
        var res = cc.loader.getRes(url, type);
        if (cc.isValid(res)) {
            !!handler && handler.call(res, url);
            return;
        }
        if (this._checkSameURL(url, handler)) {
            return;
        }
        var item = this.getLoaderItem();
        item.load(url, type, handler);
    };
    //检查相同的加载路径 保证只存在一个
    Loader.prototype._checkSameURL = function (url, handler) {
        var len = this.cacheItems.length;
        for (var i = 0; i < len; i++) {
            if (!this.cacheItems[i].isActive) {
                if (this.cacheItems[i].url === url) {
                    this.cacheItems[i].addSame(handler);
                    return true;
                }
            }
        }
        return false;
    };
    //获得一个加载item
    Loader.prototype.getLoaderItem = function () {
        var len = this.cacheItems.length;
        for (var i = 0; i < len; i++) {
            if (this.cacheItems[i].isActive) {
                this.cacheItems[i].isActive = false;
                return this.cacheItems[i];
            }
        }
        var item = new LoaderItem_1.default();
        item.isActive = false;
        this.cacheItems.push(item);
        return item;
    };
    Loader.prototype.getAllResUID = function (exsits) {
        if (exsits) {
            var len = this.cacheItems.length;
            for (var i = 0; i < len; i++) {
                if (!this.cacheItems[i].isActive) {
                    this.cacheItems[i].setExsitRes(exsits);
                }
            }
        }
    };
    Loader.prototype.releaseItem = function () {
        var len = this.cacheItems.length;
        for (var i = 0; i < len; i++) {
            this.cacheItems[i].reset();
        }
    };
    Loader.prototype.release = function (exsits) {
        var len = this.cacheItems.length;
        if (this.needRelease && !this.isRelease) {
            for (var i = 0; i < len; i++) {
                if (!this.cacheItems[i].isActive) {
                    this.cacheItems[i].release(exsits);
                }
            }
        }
        this.releaseItem();
    };
    return Loader;
}());
exports.default = Loader;

cc._RF.pop();
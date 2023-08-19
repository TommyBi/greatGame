"use strict";
cc._RF.push(module, 'a782bOpltZFDqYDSXLBnYiA', 'LoaderItem');
// src/framework/loader/LoaderItem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//需要加载的资源
var LoaderItem = /** @class */ (function () {
    function LoaderItem() {
        this.resources = {};
        this.isRelease = false;
        this.url = null;
        this.maxRetryTimes = 0; //最大重试次数
        this.isActive = true; //默认可以使用
        this.sameArr = null;
    }
    LoaderItem.prototype.load = function (url, type, handler) {
        var _this = this;
        this.url = url;
        cc.loader.loadRes(url, type, function (err, res) {
            if (err) {
                handler && handler.call(null);
                cc.error('资源加载失败--' + url);
                return;
            }
            !!handler && handler.call(res, url);
            if (!!_this.sameArr) {
                for (var i = 0; i < _this.sameArr.length; i++) {
                    _this.sameArr[i] && _this.sameArr[i].call(res, url);
                }
                _this.sameArr.length = 0;
            }
            _this._cacheRes(res);
        });
    };
    LoaderItem.prototype.addSame = function (handler) {
        if (!this.sameArr) {
            this.sameArr = [];
        }
        this.sameArr.push(handler);
    };
    //设置已存在的资源的key
    LoaderItem.prototype.setExsitRes = function (exsits) {
        for (var key in this.resources) {
            exsits[key] = true;
        }
    };
    /**
 * 缓存已使用资源
 * @param resource 缓存单个资源的所有使用资源
 */
    LoaderItem.prototype._cacheRes = function (resource) {
        var loader = cc.loader;
        this.cresource = resource; //存储当前资源，用于后期释放
        for (var _i = 0, _a = loader.getDependsRecursively(resource); _i < _a.length; _i++) {
            var key = _a[_i];
            // cc.log(key,this.resources[key]);
            this.resources[key] = true;
        }
    };
    //释放完成后重置加载器
    LoaderItem.prototype.reset = function () {
        this.isActive = true;
        this.url = null;
        for (var key in this.resources) {
            delete this.resources[key];
        }
        this.cresource = null;
        if (this.sameArr) {
            this.sameArr.length = 0;
        }
    };
    LoaderItem.prototype.release = function (exsits) {
        for (var key in this.resources) {
            if (key in exsits) {
                continue;
            }
            else {
                cc.loader.release(key);
            }
        }
        if (!!this.cresource) {
            cc.loader.release(this.cresource);
        }
        this.reset();
    };
    return LoaderItem;
}());
exports.default = LoaderItem;

cc._RF.pop();
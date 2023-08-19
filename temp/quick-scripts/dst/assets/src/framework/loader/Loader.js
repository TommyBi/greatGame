
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/loader/Loader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Mb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEMsT0FBTztBQUNQO0lBTUksZ0JBQVksU0FBaUI7UUFKdEIsZUFBVSxHQUFVLElBQUksQ0FBQztRQUN4QixlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQVcsS0FBSyxDQUFDLENBQUssVUFBVTtRQUc1QyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOEJBQWEsR0FBYixVQUFjLEdBQUcsRUFBQyxJQUFJLEVBQUMsT0FBTztRQUMxQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsOEJBQWEsR0FBYixVQUFjLEdBQUcsRUFBQyxPQUFPO1FBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFBO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxZQUFZO0lBQ1osOEJBQWEsR0FBYjtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDSjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2QkFBWSxHQUFaLFVBQWEsTUFBTTtRQUNmLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUE7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDMUM7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELDRCQUFXLEdBQVg7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLE1BQU07UUFDVixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0o7U0FFSjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUwsYUFBQztBQUFELENBbkZBLEFBbUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGVySXRlbSBmcm9tIFwiLi9Mb2FkZXJJdGVtXCI7XG5cbi8v6LWE5rqQ5Yqg6L295ZmoXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIge1xuICAgIHByaXZhdGUgbmVlZFJlbGVhc2U6Ym9vbGVhbjsvL+aYr+WQpumcgOimgemHiuaUvlxuICAgIHB1YmxpYyBtb2R1bGVOYW1lOnN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZUl0ZW1zOkFycmF5PExvYWRlckl0ZW0+ID0gW107XG4gICAgcHVibGljIGlzUmVsZWFzZTpib29sZWFuID0gZmFsc2U7ICAgICAvL+mHiuaUvuW3sue7j+mHiuaUvui/h+S6hlxuXG4gICAgY29uc3RydWN0b3IoaXNSZWxlYXNlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLm5lZWRSZWxlYXNlID0gaXNSZWxlYXNlO1xuICAgIH1cblxuICAgIGFkZExvYWRlckl0ZW0odXJsLHR5cGUsaGFuZGxlcil7XG4gICAgICAgIGxldCByZXMgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCx0eXBlKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocmVzKSkge1xuICAgICAgICAgICAgISFoYW5kbGVyICYmIGhhbmRsZXIuY2FsbChyZXMsdXJsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY2hlY2tTYW1lVVJMKHVybCxoYW5kbGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRMb2FkZXJJdGVtKCk7XG4gICAgICAgIGl0ZW0ubG9hZCh1cmwsdHlwZSxoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvL+ajgOafpeebuOWQjOeahOWKoOi9vei3r+W+hCDkv53or4Hlj6rlrZjlnKjkuIDkuKpcbiAgICBfY2hlY2tTYW1lVVJMKHVybCxoYW5kbGVyKXtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuY2FjaGVJdGVtcy5sZW5ndGhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FjaGVJdGVtc1tpXS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlSXRlbXNbaV0udXJsID09PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZUl0ZW1zW2ldLmFkZFNhbWUoaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy/ojrflvpfkuIDkuKrliqDovb1pdGVtXG4gICAgZ2V0TG9hZGVySXRlbSgpe1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5jYWNoZUl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVJdGVtc1tpXS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVJdGVtc1tpXS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlSXRlbXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgTG9hZGVySXRlbSgpO1xuICAgICAgICBpdGVtLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FjaGVJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBnZXRBbGxSZXNVSUQoZXhzaXRzKXtcbiAgICAgICAgaWYgKGV4c2l0cykge1xuICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMuY2FjaGVJdGVtcy5sZW5ndGhcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FjaGVJdGVtc1tpXS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlSXRlbXNbaV0uc2V0RXhzaXRSZXMoZXhzaXRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlSXRlbSgpe1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5jYWNoZUl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlSXRlbXNbaV0ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbGVhc2UoZXhzaXRzKSB7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmNhY2hlSXRlbXMubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5uZWVkUmVsZWFzZSAmJiAhdGhpcy5pc1JlbGVhc2UpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYWNoZUl0ZW1zW2ldLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVJdGVtc1tpXS5yZWxlYXNlKGV4c2l0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWxlYXNlSXRlbSgpO1xuICAgIH1cblxufVxuIl19
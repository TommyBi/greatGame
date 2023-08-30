
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/loader/LoaderItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Mb2FkZXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBUztBQUNUO0lBQUE7UUFFSSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixRQUFHLEdBQVUsSUFBSSxDQUFDO1FBQ2xCLGtCQUFhLEdBQVUsQ0FBQyxDQUFDLENBQUUsUUFBUTtRQUNuQyxhQUFRLEdBQVcsSUFBSSxDQUFDLENBQUksUUFBUTtRQUNwQyxZQUFPLEdBQWtCLElBQUksQ0FBQztJQTZFbEMsQ0FBQztJQTFFRyx5QkFBSSxHQUFKLFVBQUssR0FBRyxFQUFDLElBQUksRUFBQyxPQUFPO1FBQXJCLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsVUFBQyxHQUFHLEVBQUMsR0FBRztZQUMvQixJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE9BQU87YUFDVjtZQUNELENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEQ7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsT0FBTztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsY0FBYztJQUNkLGdDQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRUc7OztHQUdEO0lBQ0gsOEJBQVMsR0FBVCxVQUFVLFFBQVE7UUFDZCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUEsZUFBZTtRQUN6QyxLQUFnQixVQUFzQyxFQUF0QyxLQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsRUFBdEMsY0FBc0MsRUFBdEMsSUFBc0MsRUFBRTtZQUFuRCxJQUFJLEdBQUcsU0FBQTtZQUNSLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUVMLENBQUM7SUFFRCxZQUFZO0lBQ1osMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLE1BQU07UUFDVixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSyxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUNoQixTQUFTO2FBQ1o7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTCxpQkFBQztBQUFELENBcEZBLEFBb0ZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XHJcblxyXG4vL+mcgOimgeWKoOi9veeahOi1hOa6kFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXJJdGVtXHJcbntcclxuICAgIHJlc291cmNlcyA9IHt9O1xyXG4gICAgaXNSZWxlYXNlID0gZmFsc2U7XHJcbiAgICB1cmw6c3RyaW5nID0gbnVsbDtcclxuICAgIG1heFJldHJ5VGltZXM6bnVtYmVyID0gMDsgIC8v5pyA5aSn6YeN6K+V5qyh5pWwXHJcbiAgICBpc0FjdGl2ZTpib29sZWFuID0gdHJ1ZTsgICAgLy/pu5jorqTlj6/ku6Xkvb/nlKhcclxuICAgIHNhbWVBcnI6QXJyYXk8SGFuZGxlcj4gPSBudWxsO1xyXG4gICAgY3Jlc291cmNlOmNjLkFzc2V0O1xyXG5cclxuICAgIGxvYWQodXJsLHR5cGUsaGFuZGxlcil7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLHR5cGUsKGVycixyZXMpPT57XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIgJiYgaGFuZGxlci5jYWxsKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+i1hOa6kOWKoOi9veWksei0pS0tJyArIHVybCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgISFoYW5kbGVyICYmIGhhbmRsZXIuY2FsbChyZXMsdXJsKTtcclxuICAgICAgICAgICAgaWYgKCEhdGhpcy5zYW1lQXJyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2FtZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2FtZUFycltpXSAmJiB0aGlzLnNhbWVBcnJbaV0uY2FsbChyZXMsdXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2FtZUFyci5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2NhY2hlUmVzKHJlcyk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNhbWUoaGFuZGxlcil7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNhbWVBcnIpIHtcclxuICAgICAgICAgICAgdGhpcy5zYW1lQXJyID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2FtZUFyci5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u5bey5a2Y5Zyo55qE6LWE5rqQ55qEa2V5XHJcbiAgICBzZXRFeHNpdFJlcyhleHNpdHMpe1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnJlc291cmNlcykge1xyXG4gICAgICAgICAgICBleHNpdHNba2V5XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgKiDnvJPlrZjlt7Lkvb/nlKjotYTmupBcclxuICAgICAqIEBwYXJhbSByZXNvdXJjZSDnvJPlrZjljZXkuKrotYTmupDnmoTmiYDmnInkvb/nlKjotYTmupBcclxuICAgICAqL1xyXG4gICAgX2NhY2hlUmVzKHJlc291cmNlKSB7XHJcbiAgICAgICAgbGV0IGxvYWRlciA9IGNjLmxvYWRlcjtcclxuICAgICAgICB0aGlzLmNyZXNvdXJjZSA9IHJlc291cmNlOy8v5a2Y5YKo5b2T5YmN6LWE5rqQ77yM55So5LqO5ZCO5pyf6YeK5pS+XHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGxvYWRlci5nZXREZXBlbmRzUmVjdXJzaXZlbHkocmVzb3VyY2UpKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhrZXksdGhpcy5yZXNvdXJjZXNba2V5XSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzW2tleV0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+mHiuaUvuWujOaIkOWQjumHjee9ruWKoOi9veWZqFxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVybCA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMucmVzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJlc291cmNlc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZXNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuc2FtZUFycikge1xyXG4gICAgICAgICAgICB0aGlzLnNhbWVBcnIubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZShleHNpdHMpe1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnJlc291cmNlcykge1xyXG4gICAgICAgICAgICBpZiAoIGtleSBpbiBleHNpdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2Uoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISF0aGlzLmNyZXNvdXJjZSkge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSh0aGlzLmNyZXNvdXJjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
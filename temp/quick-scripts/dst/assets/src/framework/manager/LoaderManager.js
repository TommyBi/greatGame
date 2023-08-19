
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/LoaderManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d98DuCbVHjaiNY0xfwvkU', 'LoaderManager');
// src/framework/manager/LoaderManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler_1 = require("../base/Handler");
var GroupLoader_1 = require("../loader/GroupLoader");
var Loader_1 = require("../loader/Loader");
var ComponentHelper_1 = require("../tools/ComponentHelper");
var LoaderManager = /** @class */ (function () {
    function LoaderManager() {
        //模块配置数据,由外部传入
        this.moudleConfigs = {};
        //loader 模块加载器
        this.moudleLoaders = {};
        this.groupLoader = null;
    }
    LoaderManager.instance = function () {
        if (!this._instance) {
            this._instance = new LoaderManager();
        }
        return this._instance;
    };
    /**
     *
     * @param fileName 文件名
     * @param type 文件类型
     * @param handler 回调函数
     * @param mname 模块名
     */
    LoaderManager.prototype.loadRes = function (fileName, type, handler, mname) {
        var info = this.checkModuleConfig(mname);
        if (!!info) {
            if (!this.moudleLoaders[mname]) {
                this.moudleLoaders[mname] = new Loader_1.default(info.isRelease);
            }
            var url = info.url + '/' + fileName;
            this.moudleLoaders[mname].addLoaderItem(url, type, handler);
        }
        else {
            cc.error('module no exist: ' + mname);
        }
    };
    /**
     * 设置模块数据 外部调用
     * @param data 模块数据
     */
    LoaderManager.prototype.setModuleConfig = function (data) {
        if (!!data) {
            if (!this.moudleConfigs.hasOwnProperty(data.mname)) {
                this.moudleConfigs[data.mname] = data;
            }
        }
        else {
            cc.error('module config error');
        }
    };
    /**
     * 加载sprite
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderSpriteFrame = function (fileName, handler, mname) {
        this.loadRes(fileName, cc.SpriteFrame, handler, mname);
    };
    /**
     * 加载Prefab
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderPrefab = function (fileName, handler, mname) {
        this.loadRes(fileName, cc.Prefab, handler, mname);
    };
    /**
     * 加载json
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderJson = function (fileName, handler, mname) {
        this.loadRes(fileName, cc.JsonAsset, handler, mname);
    };
    /**
     * 加载spine
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderSpine = function (fileName, handler, mname) {
        this.loadRes(fileName, sp.SkeletonData, handler, mname);
    };
    /**
     * 加载动画
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderAniamteClip = function (fileName, handler, mname) {
        this.loadRes(fileName, cc.AnimationClip, handler, mname);
    };
    /**
     * 加载sprite并赋值
     * @param node sprite节点
     * @param fileName 文件名
     * @param mname 模块名
     */
    LoaderManager.prototype.load2Sprite = function (node, fileName, mname) {
        this.loadRes(fileName, cc.SpriteFrame, Handler_1.default.create(function (res) {
            ComponentHelper_1.default.spriteFrame(node, res);
        }, this), mname);
    };
    /**
     * 资源按组加载
     * @param resArr 资源集合
     * @param handler 全部加载完成回调
     */
    LoaderManager.prototype.loaderResByGroup = function (resArr, handler) {
        if (!this.groupLoader) {
            this.groupLoader = new GroupLoader_1.default();
        }
        this.groupLoader.addGroup(resArr, handler);
    };
    //通过loaderInfo加载资源 主要用于资源内存管理
    /**
     * 检查释放配置过对应的模块
     * @param moduleName 模块名称
     */
    LoaderManager.prototype.checkModuleConfig = function (moduleName) {
        if (!!this.moudleConfigs[moduleName]) {
            return this.moudleConfigs[moduleName];
        }
        return null;
    };
    /**
     * 释放模块
     * @param moduleName 模块名称
     */
    LoaderManager.prototype.releaseByModule = function (moduleName) {
        var exsitResource = {};
        //生成排除的资源集合
        for (var key in this.moudleLoaders) {
            if (!this.moudleLoaders[key].needRelease && key != moduleName) {
                this.moudleLoaders[key].getAllResUID(exsitResource);
            }
        }
        var needRelease = this.moudleLoaders[moduleName];
        if (needRelease) {
            needRelease.release(exsitResource);
        }
        // cc.log(this.moudleLoaders);
    };
    LoaderManager.prototype.releaseAllModule = function () {
        for (var key in this.moudleLoaders) {
            this.moudleLoaders[key].releaseItem();
        }
    };
    //mname 模块名
    LoaderManager.prototype.isRelease = function (mname) {
        if (this.moudleLoaders.hasOwnProperty(mname)) {
            return this.moudleLoaders[mname].needRelease;
        }
        return false;
    };
    return LoaderManager;
}());
exports.default = LoaderManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvTG9hZGVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QyxxREFBZ0Q7QUFFaEQsMkNBQXNDO0FBQ3RDLDREQUF1RDtBQVd2RDtJQUFBO1FBQ0ksY0FBYztRQUNOLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQ3ZDLGNBQWM7UUFDTixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFnQixJQUFJLENBQUM7SUFxSzVDLENBQUM7SUFqS2lCLHNCQUFRLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCwrQkFBTyxHQUFQLFVBQVEsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsT0FBZ0IsRUFBRSxLQUFhO1FBQ2hFLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNILEVB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ZSxHQUFmLFVBQWdCLFVBQWtCO1FBQzlCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN2QixXQUFXO1FBQ1gsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN2RDtTQUNKO1FBQ0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLFdBQVcsRUFBRTtZQUNiLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEM7UUFDRCw4QkFBOEI7SUFDbEMsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNJLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDWCxpQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQTFLQSxBQTBLQyxJQUFBO0FBQ0Qsa0JBQWUsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IEdyb3VwTG9hZGVyIGZyb20gXCIuLi9sb2FkZXIvR3JvdXBMb2FkZXJcIjtcbmltcG9ydCB7IEdyb3VwRmlsZURhdGEgfSBmcm9tIFwiLi4vbG9hZGVyL0dyb3VwRGF0YVwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vbG9hZGVyL0xvYWRlclwiO1xuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vdG9vbHMvQ29tcG9uZW50SGVscGVyXCI7XG5cbi8qKlxuICog6LWE5rqQ5Yqg6L295qih5Z2X5pWw5o2uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgbW9kdWxlRGF0YSB7XG4gICAgbW5hbWU6IHN0cmluZywvL+aooeWdl+WQjeensFxuICAgIHVybDogc3RyaW5nLCAvL+aooeWdl+WvueW6lOeahOi3r+W+hFxuICAgIGlzUmVsZWFzZTogYm9vbGVhbiAvL+mHiuaUvuWPr+S7pemHiuaUvlxufVxuXG5jbGFzcyBMb2FkZXJNYW5hZ2VyIHtcbiAgICAvL+aooeWdl+mFjee9ruaVsOaNriznlLHlpJbpg6jkvKDlhaVcbiAgICBwcml2YXRlIG1vdWRsZUNvbmZpZ3MgPSA8bW9kdWxlRGF0YT57fTtcbiAgICAvL2xvYWRlciDmqKHlnZfliqDovb3lmahcbiAgICBwcml2YXRlIG1vdWRsZUxvYWRlcnMgPSA8TG9hZGVyPnt9O1xuICAgIHByaXZhdGUgZ3JvdXBMb2FkZXI6IEdyb3VwTG9hZGVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTG9hZGVyTWFuYWdlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogTG9hZGVyTWFuYWdlciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IExvYWRlck1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIOaWh+S7tuWQjVxuICAgICAqIEBwYXJhbSB0eXBlIOaWh+S7tuexu+Wei1xuICAgICAqIEBwYXJhbSBoYW5kbGVyIOWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSBtbmFtZSDmqKHlnZflkI1cbiAgICAgKi9cbiAgICBsb2FkUmVzKGZpbGVOYW1lOiBzdHJpbmcsIHR5cGU6IGFueSwgaGFuZGxlcjogSGFuZGxlciwgbW5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgaW5mbzogbW9kdWxlRGF0YSA9IHRoaXMuY2hlY2tNb2R1bGVDb25maWcobW5hbWUpO1xuICAgICAgICBpZiAoISFpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91ZGxlTG9hZGVyc1ttbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdWRsZUxvYWRlcnNbbW5hbWVdID0gbmV3IExvYWRlcihpbmZvLmlzUmVsZWFzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXJsID0gaW5mby51cmwgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICAgIHRoaXMubW91ZGxlTG9hZGVyc1ttbmFtZV0uYWRkTG9hZGVySXRlbSh1cmwsIHR5cGUsIGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoJ21vZHVsZSBubyBleGlzdDogJyArIG1uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaooeWdl+aVsOaNriDlpJbpg6josIPnlKhcbiAgICAgKiBAcGFyYW0gZGF0YSDmqKHlnZfmlbDmja5cbiAgICAgKi9cbiAgICBzZXRNb2R1bGVDb25maWcoZGF0YTogbW9kdWxlRGF0YSkge1xuICAgICAgICBpZiAoISFkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91ZGxlQ29uZmlncy5oYXNPd25Qcm9wZXJ0eShkYXRhLm1uYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW91ZGxlQ29uZmlnc1tkYXRhLm1uYW1lXSA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcignbW9kdWxlIGNvbmZpZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L29c3ByaXRlXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIFxuICAgICAqIEBwYXJhbSBoYW5kbGVyIFxuICAgICAqIEBwYXJhbSBtbmFtZSBcbiAgICAgKi9cbiAgICBsb2FkZXJTcHJpdGVGcmFtZShmaWxlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCBtbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcyhmaWxlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIGhhbmRsZXIsIG1uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb1QcmVmYWJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgXG4gICAgICogQHBhcmFtIGhhbmRsZXIgXG4gICAgICogQHBhcmFtIG1uYW1lIFxuICAgICAqL1xuICAgIGxvYWRlclByZWZhYihmaWxlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCBtbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcyhmaWxlTmFtZSwgY2MuUHJlZmFiLCBoYW5kbGVyLCBtbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L29anNvblxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBcbiAgICAgKiBAcGFyYW0gbW5hbWUgXG4gICAgICovXG4gICAgbG9hZGVySnNvbihmaWxlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCBtbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcyhmaWxlTmFtZSwgY2MuSnNvbkFzc2V0LCBoYW5kbGVyLCBtbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L29c3BpbmVcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgXG4gICAgICogQHBhcmFtIGhhbmRsZXIgXG4gICAgICogQHBhcmFtIG1uYW1lIFxuICAgICAqL1xuICAgIGxvYWRlclNwaW5lKGZpbGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIsIG1uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLCBzcC5Ta2VsZXRvbkRhdGEsIGhhbmRsZXIsIG1uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3liqjnlLtcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgXG4gICAgICogQHBhcmFtIGhhbmRsZXIgXG4gICAgICogQHBhcmFtIG1uYW1lIFxuICAgICAqL1xuICAgIGxvYWRlckFuaWFtdGVDbGlwKGZpbGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIsIG1uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLCBjYy5BbmltYXRpb25DbGlwLCBoYW5kbGVyLCBtbmFtZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb1zcHJpdGXlubbotYvlgLxcbiAgICAgKiBAcGFyYW0gbm9kZSBzcHJpdGXoioLngrlcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUg5paH5Lu25ZCNXG4gICAgICogQHBhcmFtIG1uYW1lIOaooeWdl+WQjVxuICAgICAqL1xuICAgIGxvYWQyU3ByaXRlKG5vZGU6IGNjLk5vZGUsIGZpbGVOYW1lOiBzdHJpbmcsIG1uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLCBjYy5TcHJpdGVGcmFtZSwgSGFuZGxlci5jcmVhdGUoKHJlcykgPT4ge1xuICAgICAgICAgICAgQ29tcG9uZW50SGVscGVyLnNwcml0ZUZyYW1lKG5vZGUsIHJlcyk7XG4gICAgICAgIH0sIHRoaXMpLCBtbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6LWE5rqQ5oyJ57uE5Yqg6L29XG4gICAgICogQHBhcmFtIHJlc0FyciDotYTmupDpm4blkIhcbiAgICAgKiBAcGFyYW0gaGFuZGxlciDlhajpg6jliqDovb3lrozmiJDlm57osINcbiAgICAgKi9cbiAgICBsb2FkZXJSZXNCeUdyb3VwKHJlc0FycjogQXJyYXk8R3JvdXBGaWxlRGF0YT4sIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdyb3VwTG9hZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwTG9hZGVyID0gbmV3IEdyb3VwTG9hZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cExvYWRlci5hZGRHcm91cChyZXNBcnIsIGhhbmRsZXIpO1xuICAgIH1cblxuXG4gICAgLy/pgJrov4dsb2FkZXJJbmZv5Yqg6L296LWE5rqQIOS4u+imgeeUqOS6jui1hOa6kOWGheWtmOeuoeeQhlxuICAgIC8qKlxuICAgICAqIOajgOafpemHiuaUvumFjee9rui/h+WvueW6lOeahOaooeWdl1xuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lIOaooeWdl+WQjeensFxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tNb2R1bGVDb25maWcobW9kdWxlTmFtZTogc3RyaW5nKTogbW9kdWxlRGF0YSB7XG4gICAgICAgIGlmICghIXRoaXMubW91ZGxlQ29uZmlnc1ttb2R1bGVOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW91ZGxlQ29uZmlnc1ttb2R1bGVOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph4rmlL7mqKHlnZdcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZSDmqKHlnZflkI3np7BcbiAgICAgKi9cbiAgICByZWxlYXNlQnlNb2R1bGUobW9kdWxlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBleHNpdFJlc291cmNlID0ge307XG4gICAgICAgIC8v55Sf5oiQ5o6S6Zmk55qE6LWE5rqQ6ZuG5ZCIXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLm1vdWRsZUxvYWRlcnMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb3VkbGVMb2FkZXJzW2tleV0ubmVlZFJlbGVhc2UgJiYga2V5ICE9IG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdWRsZUxvYWRlcnNba2V5XS5nZXRBbGxSZXNVSUQoZXhzaXRSZXNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRSZWxlYXNlID0gdGhpcy5tb3VkbGVMb2FkZXJzW21vZHVsZU5hbWVdO1xuICAgICAgICBpZiAobmVlZFJlbGVhc2UpIHtcbiAgICAgICAgICAgIG5lZWRSZWxlYXNlLnJlbGVhc2UoZXhzaXRSZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MubG9nKHRoaXMubW91ZGxlTG9hZGVycyk7XG4gICAgfVxuXG4gICAgcmVsZWFzZUFsbE1vZHVsZSgpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMubW91ZGxlTG9hZGVycykge1xuICAgICAgICAgICAgdGhpcy5tb3VkbGVMb2FkZXJzW2tleV0ucmVsZWFzZUl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vbW5hbWUg5qih5Z2X5ZCNXG4gICAgaXNSZWxlYXNlKG1uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMubW91ZGxlTG9hZGVycy5oYXNPd25Qcm9wZXJ0eShtbmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdWRsZUxvYWRlcnNbbW5hbWVdLm5lZWRSZWxlYXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlck1hbmFnZXIuaW5zdGFuY2UoKTsiXX0=
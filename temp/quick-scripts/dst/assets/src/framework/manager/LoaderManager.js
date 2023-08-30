
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvTG9hZGVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QyxxREFBZ0Q7QUFFaEQsMkNBQXNDO0FBQ3RDLDREQUF1RDtBQWN2RDtJQUFBO1FBRUksY0FBYztRQUNOLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQ3ZDLGNBQWM7UUFDTixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFlLElBQUksQ0FBQztJQStLM0MsQ0FBQztJQTNLaUIsc0JBQVEsR0FBdEI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7U0FDeEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILCtCQUFPLEdBQVAsVUFBUSxRQUFlLEVBQUMsSUFBUSxFQUFDLE9BQWUsRUFBQyxLQUFZO1FBQ3pELElBQUksSUFBSSxHQUFjLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBQztnQkFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0Q7YUFBTTtZQUNILEVBQUUs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aUI7UUFDN0IsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLFdBQVc7UUFDWCxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0o7UUFDRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksV0FBVyxFQUFFO1lBQ2IsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0QztRQUNELDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBRUksS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQsV0FBVztJQUNYLGlDQUFTLEdBQVQsVUFBVSxLQUFZO1FBRWxCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztTQUNoRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTCxvQkFBQztBQUFELENBckxBLEFBcUxDLElBQUE7QUFDRCxrQkFBZSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XHJcbmltcG9ydCBHcm91cExvYWRlciBmcm9tIFwiLi4vbG9hZGVyL0dyb3VwTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdyb3VwRmlsZURhdGEgfSBmcm9tIFwiLi4vbG9hZGVyL0dyb3VwRGF0YVwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9sb2FkZXIvTG9hZGVyXCI7XHJcbmltcG9ydCBDb21wb25lbnRIZWxwZXIgZnJvbSBcIi4uL3Rvb2xzL0NvbXBvbmVudEhlbHBlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2dhbWUvY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi9VSUVmZmVjdE1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDotYTmupDliqDovb3mqKHlnZfmlbDmja5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgbW9kdWxlRGF0YSB7XHJcbiAgICBtbmFtZTpzdHJpbmcsLy/mqKHlnZflkI3np7BcclxuICAgIHVybDpzdHJpbmcsIC8v5qih5Z2X5a+55bqU55qE6Lev5b6EXHJcbiAgICBpc1JlbGVhc2U6Ym9vbGVhbiAvL+mHiuaUvuWPr+S7pemHiuaUvlxyXG59XHJcblxyXG5jbGFzcyBMb2FkZXJNYW5hZ2VyXHJcbntcclxuICAgIC8v5qih5Z2X6YWN572u5pWw5o2uLOeUseWklumDqOS8oOWFpVxyXG4gICAgcHJpdmF0ZSBtb3VkbGVDb25maWdzID0gPG1vZHVsZURhdGE+e307XHJcbiAgICAvL2xvYWRlciDmqKHlnZfliqDovb3lmahcclxuICAgIHByaXZhdGUgbW91ZGxlTG9hZGVycyA9IDxMb2FkZXI+e307XHJcbiAgICBwcml2YXRlIGdyb3VwTG9hZGVyOkdyb3VwTG9hZGVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6TG9hZGVyTWFuYWdlcjtcclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSgpOkxvYWRlck1hbmFnZXJcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IExvYWRlck1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUg5paH5Lu25ZCNXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDmlofku7bnsbvlnotcclxuICAgICAqIEBwYXJhbSBoYW5kbGVyIOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIG1uYW1lIOaooeWdl+WQjVxyXG4gICAgICovXHJcbiAgICBsb2FkUmVzKGZpbGVOYW1lOnN0cmluZyx0eXBlOmFueSxoYW5kbGVyOkhhbmRsZXIsbW5hbWU6c3RyaW5nKXtcclxuICAgICAgICBsZXQgaW5mbzptb2R1bGVEYXRhID0gdGhpcy5jaGVja01vZHVsZUNvbmZpZyhtbmFtZSk7XHJcbiAgICAgICAgaWYoISFpbmZvKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tb3VkbGVMb2FkZXJzW21uYW1lXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdWRsZUxvYWRlcnNbbW5hbWVdID0gbmV3IExvYWRlcihpbmZvLmlzUmVsZWFzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHVybCA9IGluZm8udXJsICsgJy8nICsgZmlsZU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubW91ZGxlTG9hZGVyc1ttbmFtZV0uYWRkTG9hZGVySXRlbSh1cmwsdHlwZSxoYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcignbW9kdWxlIG5vIGV4aXN0OiAnICsgbW5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruaooeWdl+aVsOaNriDlpJbpg6josIPnlKhcclxuICAgICAqIEBwYXJhbSBkYXRhIOaooeWdl+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBzZXRNb2R1bGVDb25maWcoZGF0YTptb2R1bGVEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghIWRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vdWRsZUNvbmZpZ3MuaGFzT3duUHJvcGVydHkoZGF0YS5tbmFtZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW91ZGxlQ29uZmlnc1tkYXRhLm1uYW1lXSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcignbW9kdWxlIGNvbmZpZyBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vXNwcml0ZVxyXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIFxyXG4gICAgICogQHBhcmFtIGhhbmRsZXIgXHJcbiAgICAgKiBAcGFyYW0gbW5hbWUgXHJcbiAgICAgKi9cclxuICAgIGxvYWRlclNwcml0ZUZyYW1lKGZpbGVOYW1lOnN0cmluZyxoYW5kbGVyOkhhbmRsZXIsbW5hbWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmxvYWRSZXMoZmlsZU5hbWUsY2MuU3ByaXRlRnJhbWUsaGFuZGxlcixtbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb1QcmVmYWJcclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBcclxuICAgICAqIEBwYXJhbSBoYW5kbGVyIFxyXG4gICAgICogQHBhcmFtIG1uYW1lIFxyXG4gICAgICovXHJcbiAgICBsb2FkZXJQcmVmYWIoZmlsZU5hbWU6c3RyaW5nLGhhbmRsZXI6SGFuZGxlcixtbmFtZTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLGNjLlByZWZhYixoYW5kbGVyLG1uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vWpzb25cclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBcclxuICAgICAqIEBwYXJhbSBoYW5kbGVyIFxyXG4gICAgICogQHBhcmFtIG1uYW1lIFxyXG4gICAgICovXHJcbiAgICBsb2FkZXJKc29uKGZpbGVOYW1lOnN0cmluZyxoYW5kbGVyOkhhbmRsZXIsbW5hbWU6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLGNjLkpzb25Bc3NldCxoYW5kbGVyLG1uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vXNwaW5lXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBcclxuICAgICAqIEBwYXJhbSBtbmFtZSBcclxuICAgICAqL1xyXG4gICAgbG9hZGVyU3BpbmUoZmlsZU5hbWU6c3RyaW5nLGhhbmRsZXI6SGFuZGxlcixtbmFtZTpzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxvYWRSZXMoZmlsZU5hbWUsc3AuU2tlbGV0b25EYXRhLGhhbmRsZXIsbW5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L295Yqo55S7XHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBcclxuICAgICAqIEBwYXJhbSBtbmFtZSBcclxuICAgICAqL1xyXG4gICAgbG9hZGVyQW5pYW10ZUNsaXAoZmlsZU5hbWU6c3RyaW5nLGhhbmRsZXI6SGFuZGxlcixtbmFtZTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLGNjLkFuaW1hdGlvbkNsaXAsaGFuZGxlcixtbmFtZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9vXNwcml0ZeW5tui1i+WAvFxyXG4gICAgICogQHBhcmFtIG5vZGUgc3ByaXRl6IqC54K5XHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUg5paH5Lu25ZCNXHJcbiAgICAgKiBAcGFyYW0gbW5hbWUg5qih5Z2X5ZCNXHJcbiAgICAgKi9cclxuICAgIGxvYWQyU3ByaXRlKG5vZGU6Y2MuTm9kZSxmaWxlTmFtZTpzdHJpbmcsbW5hbWU6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubG9hZFJlcyhmaWxlTmFtZSxjYy5TcHJpdGVGcmFtZSxIYW5kbGVyLmNyZWF0ZSgocmVzKT0+e1xyXG4gICAgICAgICAgICBDb21wb25lbnRIZWxwZXIuc3ByaXRlRnJhbWUobm9kZSxyZXMpO1xyXG4gICAgICAgIH0sdGhpcyksbW5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LWE5rqQ5oyJ57uE5Yqg6L29XHJcbiAgICAgKiBAcGFyYW0gcmVzQXJyIOi1hOa6kOmbhuWQiFxyXG4gICAgICogQHBhcmFtIGhhbmRsZXIg5YWo6YOo5Yqg6L295a6M5oiQ5Zue6LCDXHJcbiAgICAgKi9cclxuICAgIGxvYWRlclJlc0J5R3JvdXAocmVzQXJyOkFycmF5PEdyb3VwRmlsZURhdGE+LGhhbmRsZXI6SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ3JvdXBMb2FkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5ncm91cExvYWRlciA9IG5ldyBHcm91cExvYWRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VwTG9hZGVyLmFkZEdyb3VwKHJlc0FycixoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/pgJrov4dsb2FkZXJJbmZv5Yqg6L296LWE5rqQIOS4u+imgeeUqOS6jui1hOa6kOWGheWtmOeuoeeQhlxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4Dmn6Xph4rmlL7phY3nva7ov4flr7nlupTnmoTmqKHlnZdcclxuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lIOaooeWdl+WQjeensFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrTW9kdWxlQ29uZmlnKG1vZHVsZU5hbWU6c3RyaW5nKTptb2R1bGVEYXRhXHJcbiAgICB7IFxyXG4gICAgICAgIGlmICghIXRoaXMubW91ZGxlQ29uZmlnc1ttb2R1bGVOYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3VkbGVDb25maWdzW21vZHVsZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHiuaUvuaooeWdl1xyXG4gICAgICogQHBhcmFtIG1vZHVsZU5hbWUg5qih5Z2X5ZCN56ewXHJcbiAgICAgKi9cclxuICAgIHJlbGVhc2VCeU1vZHVsZShtb2R1bGVOYW1lOnN0cmluZyl7XHJcbiAgICAgICAgbGV0IGV4c2l0UmVzb3VyY2UgPSB7fTtcclxuICAgICAgICAvL+eUn+aIkOaOkumZpOeahOi1hOa6kOmbhuWQiFxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLm1vdWRsZUxvYWRlcnMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1vdWRsZUxvYWRlcnNba2V5XS5uZWVkUmVsZWFzZSAmJiBrZXkgIT0gbW9kdWxlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VkbGVMb2FkZXJzW2tleV0uZ2V0QWxsUmVzVUlEKGV4c2l0UmVzb3VyY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZWVkUmVsZWFzZSA9IHRoaXMubW91ZGxlTG9hZGVyc1ttb2R1bGVOYW1lXTtcclxuICAgICAgICBpZiAobmVlZFJlbGVhc2UpIHtcclxuICAgICAgICAgICAgbmVlZFJlbGVhc2UucmVsZWFzZShleHNpdFJlc291cmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMubW91ZGxlTG9hZGVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsZWFzZUFsbE1vZHVsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMubW91ZGxlTG9hZGVycykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdWRsZUxvYWRlcnNba2V5XS5yZWxlYXNlSXRlbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL21uYW1lIOaooeWdl+WQjVxyXG4gICAgaXNSZWxlYXNlKG1uYW1lOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5tb3VkbGVMb2FkZXJzLmhhc093blByb3BlcnR5KG1uYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3VkbGVMb2FkZXJzW21uYW1lXS5uZWVkUmVsZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJNYW5hZ2VyLmluc3RhbmNlKCk7Il19
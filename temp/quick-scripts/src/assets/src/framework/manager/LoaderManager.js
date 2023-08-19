"use strict";
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
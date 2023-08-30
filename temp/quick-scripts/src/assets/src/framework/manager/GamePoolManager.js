"use strict";
cc._RF.push(module, '72e0cNmW0dEKaTfaU0wYfBI', 'GamePoolManager');
// src/framework/manager/GamePoolManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePoolObject_1 = require("../base/BasePoolObject");
//游戏对象池 TODO 缓存依附对象的唯一id,重新class 自增id
var GamePoolManager = /** @class */ (function () {
    function GamePoolManager() {
        this.poolDic = {};
        this.pobjectCaches = []; //实例prefab对象的缓存
        this.objectIndex = 0;
        this.prefabIndex = 0; //prefab的index
        this.prePrefabName = null; //上一个prefab的名称
    }
    GamePoolManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new GamePoolManager();
        }
        return this._instance;
    };
    //注册的时候 target 支持 class 和 string两种类型
    GamePoolManager.prototype.instance = function (prefab, target) {
        if (!!prefab) {
            var targetId = this._getTargetKey(target);
            if (!targetId) {
                cc.error('实例Prefab没有设置target或者target不是class-->' + prefab.name);
                return null;
            }
            //优化 查询速度
            if (prefab.name != this.prePrefabName) {
                this.prefabIndex = 0;
                this.prePrefabName = prefab.name;
            }
            if (!this.poolDic.hasOwnProperty(prefab.name)) {
                this.poolDic[prefab.name] = [];
            }
            var arr = this.poolDic[prefab.name];
            for (var index = this.prefabIndex; index < arr.length; index++) {
                if (!arr[index].isActive && cc.isValid(arr[index].prefab)) {
                    arr[index].setTarget(targetId);
                    this.prefabIndex = index;
                    return arr[index].prefab;
                }
            }
            var object = this._getObject();
            var instance = cc.instantiate(prefab);
            targetId = this._getTargetKey(instance);
            object.setData(prefab.name, instance, targetId);
            arr.push(object);
            this.prefabIndex = arr.length - 1;
            return instance;
        }
        return null;
    };
    /**
     * 放回对象身上的某个实例
     * @param target
     * @param node
     */
    GamePoolManager.prototype.putBackItem = function (target, node) {
        if (!cc.isValid(node)) {
            return;
        }
        var elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                if (element.isSameNode(node.uuid)) {
                    element.reset();
                }
            }
        }
    };
    /**
     * 回收所有对应的prefab名
     * @param name
     */
    GamePoolManager.prototype.putBackByName = function (name) {
        if (this.poolDic.hasOwnProperty(name)) {
            this.prefabIndex = 0;
            var elements = this.poolDic[name];
            if (!!elements) {
                for (var index = 0; index < elements.length; index++) {
                    var element = elements[index];
                    element.reset();
                }
            }
        }
    };
    GamePoolManager.prototype.putBackByTarget = function (target) {
        var elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                element.reset();
            }
        }
    };
    GamePoolManager.prototype.clearByTarget = function (target) {
        var elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                element.clear();
            }
            elements.length = 0;
            this._resetObjectIndex();
        }
    };
    //name 是prefab的名称
    GamePoolManager.prototype.clearByName = function (name) {
        if (this.poolDic.hasOwnProperty(name)) {
            this.prefabIndex = 0;
            var elements = this.poolDic[name];
            if (!!elements) {
                for (var index = 0; index < elements.length; index++) {
                    var element = elements[index];
                    element.clear();
                }
                elements.length = 0;
                this._resetObjectIndex();
            }
        }
    };
    /**
     *
     * @param target
     */
    GamePoolManager.prototype._getObjectByTarget = function (target) {
        if (!!target) {
            var results = [];
            var classID = this._getTargetKey(target);
            if (!!classID) {
                for (var key in this.poolDic) {
                    var elements = this.poolDic[key];
                    if (!!elements && elements.length > 0) {
                        for (var index = 0; index < elements.length; index++) {
                            var element = elements[index];
                            var id = element.target;
                            if (classID === id) {
                                results.push(element);
                            }
                        }
                    }
                }
                return results;
            }
            else {
                cc.error('GamePoolHelper 放回 或者清理时 target 不合法');
            }
            return null;
        }
        return null;
    };
    //获得需要缓存对象的key
    GamePoolManager.prototype._getTargetKey = function (target) {
        var targetId = null;
        if (!!target) {
            var isStr = cc.js.isString(target);
            if (isStr) {
                targetId = target;
            }
            else {
                if (!!target.uuid) {
                    targetId = target.uuid;
                }
                else {
                    targetId = cc.js._getClassId(target);
                }
            }
        }
        else {
            cc.error('GamePoolHelper中缓存对象不存在');
        }
        return targetId;
    };
    //重置壳子 可用的索引
    GamePoolManager.prototype._resetObjectIndex = function () {
        for (var index = 0; index < this.pobjectCaches.length; index++) {
            var element = this.pobjectCaches[index];
            if (!element.isObjectActive) {
                this.objectIndex = index;
                break;
            }
        }
    };
    GamePoolManager.prototype._getObject = function () {
        for (var index = this.objectIndex; index < this.pobjectCaches.length; index++) {
            var element = this.pobjectCaches[index];
            if (!element.isObjectActive) {
                this.objectIndex = index;
                return element;
            }
        }
        var obj = new BasePoolObject_1.default();
        this.pobjectCaches.push(obj);
        this.objectIndex = this.pobjectCaches.length - 1;
        return obj;
    };
    GamePoolManager.prototype.initRolePool = function (prefab) {
        this.rolePool = new cc.NodePool();
        var initCount = 15;
        for (var i = 0; i < initCount; ++i) {
            var role = cc.instantiate(prefab); // 创建节点
            this.rolePool.put(role); // 通过 put 接口放入对象池
        }
    };
    GamePoolManager.prototype.createRole = function (prefab) {
        var role = null;
        if (this.rolePool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            role = this.rolePool.get();
        }
        else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            role = cc.instantiate(prefab);
        }
        return role;
    };
    GamePoolManager.prototype.putRole = function (role) {
        this.rolePool.put(role);
    };
    return GamePoolManager;
}());
exports.default = GamePoolManager.getInstance();

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/GamePoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvR2FtZVBvb2xNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBRXBELHFDQUFxQztBQUNyQztJQUFBO1FBQ1ksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDLENBQUEsZUFBZTtRQUNsQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFFLGNBQWM7UUFDeEMsa0JBQWEsR0FBVyxJQUFJLENBQUMsQ0FBQSxjQUFjO0lBa092RCxDQUFDO0lBL05VLDJCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsa0NBQVEsR0FBUixVQUFTLE1BQU0sRUFBRSxNQUFNO1FBQ25CLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNWLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVELFNBQVM7WUFDVCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNwQztZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FB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QyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSwyQkFBMkI7WUFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDOUI7YUFBTSxFQUFFLG1EQUFtRDtZQUN4RCxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCxzQkFBQztBQUFELENBdk9BLEFBdU9DLElBQUE7QUFFRCxrQkFBZSxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVBvb2xPYmplY3QgZnJvbSBcIi4uL2Jhc2UvQmFzZVBvb2xPYmplY3RcIjtcclxuXHJcbi8v5ri45oiP5a+56LGh5rGgIFRPRE8g57yT5a2Y5L6d6ZmE5a+56LGh55qE5ZSv5LiAaWQs6YeN5pawY2xhc3Mg6Ieq5aKeaWRcclxuY2xhc3MgR2FtZVBvb2xNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgcG9vbERpYyA9IHt9O1xyXG4gICAgcHJpdmF0ZSBwb2JqZWN0Q2FjaGVzID0gW107Ly/lrp7kvotwcmVmYWLlr7nosaHnmoTnvJPlrZhcclxuICAgIHByaXZhdGUgb2JqZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByZWZhYkluZGV4OiBudW1iZXIgPSAwOyAgLy9wcmVmYWLnmoRpbmRleFxyXG4gICAgcHJpdmF0ZSBwcmVQcmVmYWJOYW1lOiBzdHJpbmcgPSBudWxsOy8v5LiK5LiA5LiqcHJlZmFi55qE5ZCN56ewXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdhbWVQb29sTWFuYWdlcjtcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogR2FtZVBvb2xNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEdhbWVQb29sTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ms6jlhoznmoTml7blgJkgdGFyZ2V0IOaUr+aMgSBjbGFzcyDlkowgc3RyaW5n5Lik56eN57G75Z6LXHJcbiAgICBpbnN0YW5jZShwcmVmYWIsIHRhcmdldCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGlmICghIXByZWZhYikge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0SWQgPSB0aGlzLl9nZXRUYXJnZXRLZXkodGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+WunuS+i1ByZWZhYuayoeacieiuvue9rnRhcmdldOaIluiAhXRhcmdldOS4jeaYr2NsYXNzLS0+JyArIHByZWZhYi5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+S8mOWMliDmn6Xor6LpgJ/luqZcclxuICAgICAgICAgICAgaWYgKHByZWZhYi5uYW1lICE9IHRoaXMucHJlUHJlZmFiTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVmYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZVByZWZhYk5hbWUgPSBwcmVmYWIubmFtZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvb2xEaWMuaGFzT3duUHJvcGVydHkocHJlZmFiLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xEaWNbcHJlZmFiLm5hbWVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBhcnIgPSB0aGlzLnBvb2xEaWNbcHJlZmFiLm5hbWVdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMucHJlZmFiSW5kZXg7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhcnJbaW5kZXhdLmlzQWN0aXZlICYmIGNjLmlzVmFsaWQoYXJyW2luZGV4XS5wcmVmYWIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyW2luZGV4XS5zZXRUYXJnZXQodGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyW2luZGV4XS5wcmVmYWI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE9iamVjdCgpO1xyXG4gICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICB0YXJnZXRJZCA9IHRoaXMuX2dldFRhcmdldEtleShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIG9iamVjdC5zZXREYXRhKHByZWZhYi5uYW1lLCBpbnN0YW5jZSwgdGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICBhcnIucHVzaChvYmplY3QpO1xyXG4gICAgICAgICAgICB0aGlzLnByZWZhYkluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlL7lm57lr7nosaHouqvkuIrnmoTmn5DkuKrlrp7kvotcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKiBAcGFyYW0gbm9kZSBcclxuICAgICAqL1xyXG4gICAgcHV0QmFja0l0ZW0odGFyZ2V0LCBub2RlKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5fZ2V0T2JqZWN0QnlUYXJnZXQodGFyZ2V0KTtcclxuICAgICAgICB0aGlzLnByZWZhYkluZGV4ID0gMDtcclxuICAgICAgICBpZiAoISFlbGVtZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNTYW1lTm9kZShub2RlLnV1aWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5pS25omA5pyJ5a+55bqU55qEcHJlZmFi5ZCNXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqL1xyXG4gICAgcHV0QmFja0J5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbERpYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnByZWZhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5wb29sRGljW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoISFlbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1dEJhY2tCeVRhcmdldCh0YXJnZXQpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLl9nZXRPYmplY3RCeVRhcmdldCh0YXJnZXQpO1xyXG4gICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSAwO1xyXG4gICAgICAgIGlmICghIWVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJCeVRhcmdldCh0YXJnZXQpIHtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLl9nZXRPYmplY3RCeVRhcmdldCh0YXJnZXQpO1xyXG4gICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSAwO1xyXG4gICAgICAgIGlmICghIWVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbWVudHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fcmVzZXRPYmplY3RJbmRleCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL25hbWUg5pivcHJlZmFi55qE5ZCN56ewXHJcbiAgICBjbGVhckJ5TmFtZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9vbERpYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnByZWZhYkluZGV4ID0gMDtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5wb29sRGljW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoISFlbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0T2JqZWN0SW5kZXgoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9nZXRPYmplY3RCeVRhcmdldCh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoISF0YXJnZXQpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNsYXNzSUQgPSB0aGlzLl9nZXRUYXJnZXRLZXkodGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKCEhY2xhc3NJRCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wb29sRGljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnBvb2xEaWNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISFlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzSUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoJ0dhbWVQb29sSGVscGVyIOaUvuWbniDmiJbogIXmuIXnkIbml7YgdGFyZ2V0IOS4jeWQiOazlScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflvpfpnIDopoHnvJPlrZjlr7nosaHnmoRrZXlcclxuICAgIHByaXZhdGUgX2dldFRhcmdldEtleSh0YXJnZXQpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0SWQgPSBudWxsO1xyXG4gICAgICAgIGlmICghIXRhcmdldCkge1xyXG4gICAgICAgICAgICBsZXQgaXNTdHIgPSBjYy5qcy5pc1N0cmluZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoaXNTdHIpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGFyZ2V0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISF0YXJnZXQudXVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGFyZ2V0LnV1aWQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gY2MuanMuX2dldENsYXNzSWQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKCdHYW1lUG9vbEhlbHBlcuS4ree8k+WtmOWvueixoeS4jeWtmOWcqCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ph43nva7lo7PlrZAg5Y+v55So55qE57Si5byVXHJcbiAgICBwcml2YXRlIF9yZXNldE9iamVjdEluZGV4KCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnBvYmplY3RDYWNoZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBvYmplY3RDYWNoZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaXNPYmplY3RBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0SW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldE9iamVjdCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMub2JqZWN0SW5kZXg7IGluZGV4IDwgdGhpcy5wb2JqZWN0Q2FjaGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wb2JqZWN0Q2FjaGVzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50LmlzT2JqZWN0QWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2JqID0gbmV3IEJhc2VQb29sT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5wb2JqZWN0Q2FjaGVzLnB1c2gob2JqKTtcclxuICAgICAgICB0aGlzLm9iamVjdEluZGV4ID0gdGhpcy5wb2JqZWN0Q2FjaGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICByb2xlUG9vbDogY2MuTm9kZVBvb2w7XHJcbiAgICBpbml0Um9sZVBvb2wocHJlZmFiKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG4gICAgICAgIGxldCBpbml0Q291bnQgPSAxNTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRDb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTsgLy8g5Yib5bu66IqC54K5XHJcbiAgICAgICAgICAgIHRoaXMucm9sZVBvb2wucHV0KHJvbGUpOyAvLyDpgJrov4cgcHV0IOaOpeWPo+aUvuWFpeWvueixoeaxoFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY3JlYXRlUm9sZShwcmVmYWIpIHtcclxuICAgICAgICBsZXQgcm9sZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMucm9sZVBvb2wuc2l6ZSgpID4gMCkgeyAvLyDpgJrov4cgc2l6ZSDmjqXlj6PliKTmlq3lr7nosaHmsaDkuK3mmK/lkKbmnInnqbrpl7LnmoTlr7nosaFcclxuICAgICAgICAgICAgcm9sZSA9IHRoaXMucm9sZVBvb2wuZ2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8g5aaC5p6c5rKh5pyJ56m66Zey5a+56LGh77yM5Lmf5bCx5piv5a+56LGh5rGg5Lit5aSH55So5a+56LGh5LiN5aSf5pe277yM5oiR5Lus5bCx55SoIGNjLmluc3RhbnRpYXRlIOmHjeaWsOWIm+W7ulxyXG4gICAgICAgICAgICByb2xlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0Um9sZShyb2xlKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlUG9vbC5wdXQocm9sZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVQb29sTWFuYWdlci5nZXRJbnN0YW5jZSgpOyJdfQ==
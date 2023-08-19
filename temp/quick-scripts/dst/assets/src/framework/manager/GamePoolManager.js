
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
        var initCount = 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvR2FtZVBvb2xNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBRXBELHFDQUFxQztBQUNyQztJQUFBO1FBQ1ksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDLENBQUEsZUFBZTtRQUNsQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFFLGNBQWM7UUFDeEMsa0JBQWEsR0FBVyxJQUFJLENBQUMsQ0FBQSxjQUFjO0lBbU92RCxDQUFDO0lBaE9VLDJCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsa0NBQVEsR0FBUixVQUFTLE1BQU0sRUFBRSxNQUFNO1FBQ25CLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNWLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVELFNBQVM7WUFDVCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNwQztZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FB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QyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSwyQkFBMkI7WUFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDOUI7YUFBTSxFQUFFLG1EQUFtRDtZQUN4RCxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCxzQkFBQztBQUFELENBeE9BLEFBd09DLElBQUE7QUFFRCxrQkFBZSxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVBvb2xPYmplY3QgZnJvbSBcIi4uL2Jhc2UvQmFzZVBvb2xPYmplY3RcIjtcblxuLy/muLjmiI/lr7nosaHmsaAgVE9ETyDnvJPlrZjkvp3pmYTlr7nosaHnmoTllK/kuIBpZCzph43mlrBjbGFzcyDoh6rlop5pZFxuY2xhc3MgR2FtZVBvb2xNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHBvb2xEaWMgPSB7fTtcbiAgICBwcml2YXRlIHBvYmplY3RDYWNoZXMgPSBbXTsvL+WunuS+i3ByZWZhYuWvueixoeeahOe8k+WtmFxuICAgIHByaXZhdGUgb2JqZWN0SW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwcmVmYWJJbmRleDogbnVtYmVyID0gMDsgIC8vcHJlZmFi55qEaW5kZXhcbiAgICBwcml2YXRlIHByZVByZWZhYk5hbWU6IHN0cmluZyA9IG51bGw7Ly/kuIrkuIDkuKpwcmVmYWLnmoTlkI3np7BcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdhbWVQb29sTWFuYWdlcjtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHYW1lUG9vbE1hbmFnZXIge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lUG9vbE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy/ms6jlhoznmoTml7blgJkgdGFyZ2V0IOaUr+aMgSBjbGFzcyDlkowgc3RyaW5n5Lik56eN57G75Z6LXG4gICAgaW5zdGFuY2UocHJlZmFiLCB0YXJnZXQpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKCEhcHJlZmFiKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0SWQgPSB0aGlzLl9nZXRUYXJnZXRLZXkodGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcign5a6e5L6LUHJlZmFi5rKh5pyJ6K6+572udGFyZ2V05oiW6ICFdGFyZ2V05LiN5pivY2xhc3MtLT4nICsgcHJlZmFiLm5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL+S8mOWMliDmn6Xor6LpgJ/luqZcbiAgICAgICAgICAgIGlmIChwcmVmYWIubmFtZSAhPSB0aGlzLnByZVByZWZhYk5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZWZhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZVByZWZhYk5hbWUgPSBwcmVmYWIubmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvb2xEaWMuaGFzT3duUHJvcGVydHkocHJlZmFiLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb29sRGljW3ByZWZhYi5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5wb29sRGljW3ByZWZhYi5uYW1lXTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5wcmVmYWJJbmRleDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcnJbaW5kZXhdLmlzQWN0aXZlICYmIGNjLmlzVmFsaWQoYXJyW2luZGV4XS5wcmVmYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycltpbmRleF0uc2V0VGFyZ2V0KHRhcmdldElkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmYWJJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyW2luZGV4XS5wcmVmYWI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE9iamVjdCgpO1xuICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRhcmdldElkID0gdGhpcy5fZ2V0VGFyZ2V0S2V5KGluc3RhbmNlKTtcbiAgICAgICAgICAgIG9iamVjdC5zZXREYXRhKHByZWZhYi5uYW1lLCBpbnN0YW5jZSwgdGFyZ2V0SWQpO1xuICAgICAgICAgICAgYXJyLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlL7lm57lr7nosaHouqvkuIrnmoTmn5DkuKrlrp7kvotcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgICAqIEBwYXJhbSBub2RlIFxuICAgICAqL1xuICAgIHB1dEJhY2tJdGVtKHRhcmdldCwgbm9kZSkge1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLl9nZXRPYmplY3RCeVRhcmdldCh0YXJnZXQpO1xuICAgICAgICB0aGlzLnByZWZhYkluZGV4ID0gMDtcbiAgICAgICAgaWYgKCEhZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzU2FtZU5vZGUobm9kZS51dWlkKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zue5pS25omA5pyJ5a+55bqU55qEcHJlZmFi5ZCNXG4gICAgICogQHBhcmFtIG5hbWUgXG4gICAgICovXG4gICAgcHV0QmFja0J5TmFtZShuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnBvb2xEaWMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5wb29sRGljW25hbWVdO1xuICAgICAgICAgICAgaWYgKCEhZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXRCYWNrQnlUYXJnZXQodGFyZ2V0KSB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IHRoaXMuX2dldE9iamVjdEJ5VGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSAwO1xuICAgICAgICBpZiAoISFlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJCeVRhcmdldCh0YXJnZXQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5fZ2V0T2JqZWN0QnlUYXJnZXQodGFyZ2V0KTtcbiAgICAgICAgdGhpcy5wcmVmYWJJbmRleCA9IDA7XG4gICAgICAgIGlmICghIWVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdGhpcy5fcmVzZXRPYmplY3RJbmRleCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9uYW1lIOaYr3ByZWZhYueahOWQjeensFxuICAgIGNsZWFyQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMucG9vbERpYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmYWJJbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLnBvb2xEaWNbbmFtZV07XG4gICAgICAgICAgICBpZiAoISFlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0T2JqZWN0SW5kZXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldE9iamVjdEJ5VGFyZ2V0KHRhcmdldCkge1xuICAgICAgICBpZiAoISF0YXJnZXQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgICAgICBsZXQgY2xhc3NJRCA9IHRoaXMuX2dldFRhcmdldEtleSh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCEhY2xhc3NJRCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucG9vbERpYykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMucG9vbERpY1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc0lEID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKCdHYW1lUG9vbEhlbHBlciDmlL7lm54g5oiW6ICF5riF55CG5pe2IHRhcmdldCDkuI3lkIjms5UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy/ojrflvpfpnIDopoHnvJPlrZjlr7nosaHnmoRrZXlcbiAgICBwcml2YXRlIF9nZXRUYXJnZXRLZXkodGFyZ2V0KSB7XG4gICAgICAgIGxldCB0YXJnZXRJZCA9IG51bGw7XG4gICAgICAgIGlmICghIXRhcmdldCkge1xuICAgICAgICAgICAgbGV0IGlzU3RyID0gY2MuanMuaXNTdHJpbmcodGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChpc1N0cikge1xuICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGFyZ2V0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghIXRhcmdldC51dWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGFyZ2V0LnV1aWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSBjYy5qcy5fZ2V0Q2xhc3NJZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmVycm9yKCdHYW1lUG9vbEhlbHBlcuS4ree8k+WtmOWvueixoeS4jeWtmOWcqCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXRJZDtcbiAgICB9XG5cbiAgICAvL+mHjee9ruWjs+WtkCDlj6/nlKjnmoTntKLlvJVcbiAgICBwcml2YXRlIF9yZXNldE9iamVjdEluZGV4KCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5wb2JqZWN0Q2FjaGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9iamVjdENhY2hlc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaXNPYmplY3RBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRPYmplY3QoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5vYmplY3RJbmRleDsgaW5kZXggPCB0aGlzLnBvYmplY3RDYWNoZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wb2JqZWN0Q2FjaGVzW2luZGV4XTtcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pc09iamVjdEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgb2JqID0gbmV3IEJhc2VQb29sT2JqZWN0KCk7XG4gICAgICAgIHRoaXMucG9iamVjdENhY2hlcy5wdXNoKG9iaik7XG4gICAgICAgIHRoaXMub2JqZWN0SW5kZXggPSB0aGlzLnBvYmplY3RDYWNoZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgXG5cbiAgICByb2xlUG9vbDogY2MuTm9kZVBvb2w7XG4gICAgaW5pdFJvbGVQb29sKHByZWZhYikge1xuICAgICAgICB0aGlzLnJvbGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgIGxldCBpbml0Q291bnQgPSA1O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcm9sZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7IC8vIOWIm+W7uuiKgueCuVxuICAgICAgICAgICAgdGhpcy5yb2xlUG9vbC5wdXQocm9sZSk7IC8vIOmAmui/hyBwdXQg5o6l5Y+j5pS+5YWl5a+56LGh5rGgXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNyZWF0ZVJvbGUocHJlZmFiKSB7XG4gICAgICAgIGxldCByb2xlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucm9sZVBvb2wuc2l6ZSgpID4gMCkgeyAvLyDpgJrov4cgc2l6ZSDmjqXlj6PliKTmlq3lr7nosaHmsaDkuK3mmK/lkKbmnInnqbrpl7LnmoTlr7nosaFcbiAgICAgICAgICAgIHJvbGUgPSB0aGlzLnJvbGVQb29sLmdldCgpO1xuICAgICAgICB9IGVsc2UgeyAvLyDlpoLmnpzmsqHmnInnqbrpl7Llr7nosaHvvIzkuZ/lsLHmmK/lr7nosaHmsaDkuK3lpIfnlKjlr7nosaHkuI3lpJ/ml7bvvIzmiJHku6zlsLHnlKggY2MuaW5zdGFudGlhdGUg6YeN5paw5Yib5bu6XG4gICAgICAgICAgICByb2xlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9sZTtcbiAgICB9XG5cbiAgICBwdXRSb2xlKHJvbGUpIHtcbiAgICAgICAgdGhpcy5yb2xlUG9vbC5wdXQocm9sZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lUG9vbE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTsiXX0=
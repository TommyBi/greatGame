
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/base/BasePoolObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '474adf4xBFL37H8Il57DG0R', 'BasePoolObject');
// src/framework/base/BasePoolObject.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//prefab实例的引用壳子 主要用于复用
var BasePoolObject = /** @class */ (function () {
    function BasePoolObject() {
        this.isActive = false; //当前prefab是否可用
        this.isObjectActive = false; //该壳子是否可用
        this.pName = null; //prefab name
        this.target = null; //该实例的prefab 使用在的目标对象
        this.prefab = null;
    }
    /**
     *
     * @param name 名称
     * @param instance 对象池实例
     * @param target 绑定到目标对象的唯一标识
     */
    BasePoolObject.prototype.setData = function (name, instance, target) {
        this.isActive = true;
        this.isObjectActive = true;
        this.target = target;
        this.prefab = instance;
        this.pName = name;
    };
    BasePoolObject.prototype.setTarget = function (target) {
        this.isActive = true;
        this.isObjectActive = true;
        this.target = target;
    };
    //重置表示prefab还能被使用
    BasePoolObject.prototype.reset = function () {
        this.isActive = false;
        this.target = null;
    };
    BasePoolObject.prototype.isSameNode = function (uuid) {
        if (cc.isValid(this.prefab)) {
            return this.prefab.uuid === uuid;
        }
        return false;
    };
    //prefab不能被用，但是壳子还可以被使用
    BasePoolObject.prototype.clear = function () {
        this.isActive = false;
        this.pName = null; //prefab name
        this.target = null;
        this.isObjectActive = false;
        if (cc.isValid(this.prefab)) {
            this.prefab.destroy();
        }
        this.prefab = null;
    };
    return BasePoolObject;
}());
exports.default = BasePoolObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2Jhc2UvQmFzZVBvb2xPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDdEI7SUFBQTtRQUVXLGFBQVEsR0FBVyxLQUFLLENBQUMsQ0FBQSxjQUFjO1FBQ3ZDLG1CQUFjLEdBQVcsS0FBSyxDQUFDLENBQUEsU0FBUztRQUN4QyxVQUFLLEdBQVUsSUFBSSxDQUFDLENBQUEsYUFBYTtRQUNqQyxXQUFNLEdBQU8sSUFBSSxDQUFDLENBQUEscUJBQXFCO1FBQ3ZDLFdBQU0sR0FBVyxJQUFJLENBQUM7SUErQ2pDLENBQUM7SUE3Q0c7Ozs7O09BS0c7SUFDSCxnQ0FBTyxHQUFQLFVBQVEsSUFBVyxFQUFDLFFBQWdCLEVBQUMsTUFBb0I7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxNQUFvQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQUk7UUFFWCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUF1QjtJQUN2Qiw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQSxhQUFhO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxxQkFBQztBQUFELENBckRBLEFBcURDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL3ByZWZhYuWunuS+i+eahOW8leeUqOWjs+WtkCDkuLvopoHnlKjkuo7lpI3nlKhcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQb29sT2JqZWN0XG57XG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW4gPSBmYWxzZTsvL+W9k+WJjXByZWZhYuaYr+WQpuWPr+eUqFxuICAgIHB1YmxpYyBpc09iamVjdEFjdGl2ZTpib29sZWFuID0gZmFsc2U7Ly/or6Xlo7PlrZDmmK/lkKblj6/nlKhcbiAgICBwdWJsaWMgcE5hbWU6c3RyaW5nID0gbnVsbDsvL3ByZWZhYiBuYW1lXG4gICAgcHVibGljIHRhcmdldDphbnkgPSBudWxsOy8v6K+l5a6e5L6L55qEcHJlZmFiIOS9v+eUqOWcqOeahOebruagh+WvueixoVxuICAgIHB1YmxpYyBwcmVmYWI6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbmFtZSDlkI3np7BcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2Ug5a+56LGh5rGg5a6e5L6LXG4gICAgICogQHBhcmFtIHRhcmdldCDnu5HlrprliLDnm67moIflr7nosaHnmoTllK/kuIDmoIfor4ZcbiAgICAgKi9cbiAgICBzZXREYXRhKG5hbWU6c3RyaW5nLGluc3RhbmNlOmNjLk5vZGUsdGFyZ2V0Om51bWJlcnxzdHJpbmcpe1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc09iamVjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnByZWZhYiA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLnBOYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXRUYXJnZXQodGFyZ2V0Om51bWJlcnxzdHJpbmcpe1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc09iamVjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIC8v6YeN572u6KGo56S6cHJlZmFi6L+Y6IO96KKr5L2/55SoXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaXNTYW1lTm9kZSh1dWlkKVxuICAgIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5wcmVmYWIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVmYWIudXVpZCA9PT0gdXVpZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9wcmVmYWLkuI3og73ooqvnlKjvvIzkvYbmmK/lo7PlrZDov5jlj6/ku6Xooqvkvb/nlKhcbiAgICBjbGVhcigpe1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucE5hbWUgPSBudWxsOy8vcHJlZmFiIG5hbWVcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLmlzT2JqZWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMucHJlZmFiKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmYWIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmFiID0gbnVsbDtcbiAgICB9XG59Il19
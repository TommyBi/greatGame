
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2Jhc2UvQmFzZVBvb2xPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDdEI7SUFBQTtRQUVXLGFBQVEsR0FBVyxLQUFLLENBQUMsQ0FBQSxjQUFjO1FBQ3ZDLG1CQUFjLEdBQVcsS0FBSyxDQUFDLENBQUEsU0FBUztRQUN4QyxVQUFLLEdBQVUsSUFBSSxDQUFDLENBQUEsYUFBYTtRQUNqQyxXQUFNLEdBQU8sSUFBSSxDQUFDLENBQUEscUJBQXFCO1FBQ3ZDLFdBQU0sR0FBVyxJQUFJLENBQUM7SUErQ2pDLENBQUM7SUE3Q0c7Ozs7O09BS0c7SUFDSCxnQ0FBTyxHQUFQLFVBQVEsSUFBVyxFQUFDLFFBQWdCLEVBQUMsTUFBb0I7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxNQUFvQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQUk7UUFFWCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUF1QjtJQUN2Qiw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQSxhQUFhO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxxQkFBQztBQUFELENBckRBLEFBcURDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL3ByZWZhYuWunuS+i+eahOW8leeUqOWjs+WtkCDkuLvopoHnlKjkuo7lpI3nlKhcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBvb2xPYmplY3Rcclxue1xyXG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW4gPSBmYWxzZTsvL+W9k+WJjXByZWZhYuaYr+WQpuWPr+eUqFxyXG4gICAgcHVibGljIGlzT2JqZWN0QWN0aXZlOmJvb2xlYW4gPSBmYWxzZTsvL+ivpeWjs+WtkOaYr+WQpuWPr+eUqFxyXG4gICAgcHVibGljIHBOYW1lOnN0cmluZyA9IG51bGw7Ly9wcmVmYWIgbmFtZVxyXG4gICAgcHVibGljIHRhcmdldDphbnkgPSBudWxsOy8v6K+l5a6e5L6L55qEcHJlZmFiIOS9v+eUqOWcqOeahOebruagh+WvueixoVxyXG4gICAgcHVibGljIHByZWZhYjpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIG5hbWUg5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2Ug5a+56LGh5rGg5a6e5L6LXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOe7keWumuWIsOebruagh+WvueixoeeahOWUr+S4gOagh+ivhlxyXG4gICAgICovXHJcbiAgICBzZXREYXRhKG5hbWU6c3RyaW5nLGluc3RhbmNlOmNjLk5vZGUsdGFyZ2V0Om51bWJlcnxzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNPYmplY3RBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMucHJlZmFiID0gaW5zdGFuY2U7XHJcbiAgICAgICAgdGhpcy5wTmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFyZ2V0KHRhcmdldDpudW1iZXJ8c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzT2JqZWN0QWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvL+mHjee9ruihqOekunByZWZhYui/mOiDveiiq+S9v+eUqFxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2FtZU5vZGUodXVpZClcclxuICAgIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnByZWZhYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlZmFiLnV1aWQgPT09IHV1aWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3ByZWZhYuS4jeiDveiiq+eUqO+8jOS9huaYr+Wjs+WtkOi/mOWPr+S7peiiq+S9v+eUqFxyXG4gICAgY2xlYXIoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wTmFtZSA9IG51bGw7Ly9wcmVmYWIgbmFtZVxyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzT2JqZWN0QWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5wcmVmYWIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlZmFiLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmVmYWIgPSBudWxsO1xyXG4gICAgfVxyXG59Il19
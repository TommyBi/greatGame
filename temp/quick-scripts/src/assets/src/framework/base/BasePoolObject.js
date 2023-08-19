"use strict";
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
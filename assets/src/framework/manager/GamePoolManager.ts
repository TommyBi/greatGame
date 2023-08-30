import BasePoolObject from "../base/BasePoolObject";

//游戏对象池 TODO 缓存依附对象的唯一id,重新class 自增id
class GamePoolManager {
    private poolDic = {};
    private pobjectCaches = [];//实例prefab对象的缓存
    private objectIndex: number = 0;
    private prefabIndex: number = 0;  //prefab的index
    private prePrefabName: string = null;//上一个prefab的名称
    private static _instance: GamePoolManager;

    static getInstance(): GamePoolManager {
        if (!this._instance) {
            this._instance = new GamePoolManager();
        }
        return this._instance;
    }

    //注册的时候 target 支持 class 和 string两种类型
    instance(prefab, target): cc.Node {
        if (!!prefab) {
            let targetId = this._getTargetKey(target);
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

            let arr = this.poolDic[prefab.name];
            for (let index = this.prefabIndex; index < arr.length; index++) {
                if (!arr[index].isActive && cc.isValid(arr[index].prefab)) {
                    arr[index].setTarget(targetId);
                    this.prefabIndex = index;
                    return arr[index].prefab;
                }
            }
            let object = this._getObject();
            let instance = cc.instantiate(prefab);
            targetId = this._getTargetKey(instance);
            object.setData(prefab.name, instance, targetId);
            arr.push(object);
            this.prefabIndex = arr.length - 1;
            return instance;
        }
        return null;
    }

    /**
     * 放回对象身上的某个实例
     * @param target 
     * @param node 
     */
    putBackItem(target, node) {
        if (!cc.isValid(node)) {
            return;
        }
        let elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];
                if (element.isSameNode(node.uuid)) {
                    element.reset();
                }
            }
        }
    }

    /**
     * 回收所有对应的prefab名
     * @param name 
     */
    putBackByName(name) {
        if (this.poolDic.hasOwnProperty(name)) {
            this.prefabIndex = 0;
            let elements = this.poolDic[name];
            if (!!elements) {
                for (let index = 0; index < elements.length; index++) {
                    const element = elements[index];
                    element.reset();
                }
            }
        }
    }

    putBackByTarget(target) {
        let elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];
                element.reset();
            }
        }
    }

    clearByTarget(target) {
        let elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];
                element.clear();
            }
            elements.length = 0;
            this._resetObjectIndex();
        }
    }

    //name 是prefab的名称
    clearByName(name) {
        if (this.poolDic.hasOwnProperty(name)) {
            this.prefabIndex = 0;
            let elements = this.poolDic[name];
            if (!!elements) {
                for (let index = 0; index < elements.length; index++) {
                    const element = elements[index];
                    element.clear();
                }
                elements.length = 0;
                this._resetObjectIndex();
            }
        }
    }
    /**
     * 
     * @param target 
     */
    private _getObjectByTarget(target) {
        if (!!target) {
            let results = [];
            let classID = this._getTargetKey(target);
            if (!!classID) {
                for (const key in this.poolDic) {
                    const elements = this.poolDic[key];
                    if (!!elements && elements.length > 0) {
                        for (let index = 0; index < elements.length; index++) {
                            const element = elements[index];
                            const id = element.target;
                            if (classID === id) {
                                results.push(element);
                            }
                        }

                    }
                }
                return results;
            } else {
                cc.error('GamePoolHelper 放回 或者清理时 target 不合法');
            }

            return null;
        }
        return null;
    }

    //获得需要缓存对象的key
    private _getTargetKey(target) {
        let targetId = null;
        if (!!target) {
            let isStr = cc.js.isString(target);
            if (isStr) {
                targetId = target
            } else {
                if (!!target.uuid) {
                    targetId = target.uuid;
                } else {
                    targetId = cc.js._getClassId(target);
                }
            }
        } else {
            cc.error('GamePoolHelper中缓存对象不存在');
        }
        return targetId;
    }

    //重置壳子 可用的索引
    private _resetObjectIndex() {
        for (let index = 0; index < this.pobjectCaches.length; index++) {
            const element = this.pobjectCaches[index];
            if (!element.isObjectActive) {
                this.objectIndex = index;
                break;
            }
        }
    }

    private _getObject() {
        for (let index = this.objectIndex; index < this.pobjectCaches.length; index++) {
            const element = this.pobjectCaches[index];
            if (!element.isObjectActive) {
                this.objectIndex = index;
                return element;
            }
        }
        let obj = new BasePoolObject();
        this.pobjectCaches.push(obj);
        this.objectIndex = this.pobjectCaches.length - 1;
        return obj;
    }

    rolePool: cc.NodePool;
    initRolePool(prefab) {
        this.rolePool = new cc.NodePool();
        let initCount = 15;
        for (let i = 0; i < initCount; ++i) {
            let role = cc.instantiate(prefab); // 创建节点
            this.rolePool.put(role); // 通过 put 接口放入对象池
        }
    }


    createRole(prefab) {
        let role = null;
        if (this.rolePool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            role = this.rolePool.get();
        } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            role = cc.instantiate(prefab);
        }
        return role;
    }

    putRole(role) {
        this.rolePool.put(role);
    }
}

export default GamePoolManager.getInstance();
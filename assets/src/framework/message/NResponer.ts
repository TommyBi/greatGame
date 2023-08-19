import Utils from "../tools/Utils";
import Handler from "../base/Handler";
export interface NResponserData {
    type: number | string,
    handler: Handler
    isOnce: boolean,
}
class NResponser {
    private allHandlers = new Map();

    private static _instance: NResponser;

    public static instance(): NResponser {
        if (!this._instance) {
            this._instance = new NResponser();
        }
        return this._instance;
    }

    /**
     * 派发事件
     * @param type 类型
     * @param args 参数
     */
    dispatch(type: number | string, ...args) {
        this.allHandlers.forEach((value, key) => {
            let targetEvents: Array<NResponserData> = value;//this.allHandlers.get(value);
            if (!!targetEvents) {
                for (let i = 0; i < targetEvents.length; i++) {
                    if (targetEvents[i].type === type) {
                        targetEvents[i].handler.call(args);
                        this.checkOnceEvent(targetEvents, i);
                        break;
                    }
                }
            }
        })

    }

    /**
     * 添加事件监听
     * @param type 事件类型
     * @param handler 回调函数
     * @param target 监听绑定对象
     * @param isOnce 是否只侦听一次
     */
    on(type: number | string, handler: Handler, target: any, isOnce: boolean = false) {
        // on(type: number | string, callBack: Function, target: any, isOnce: boolean = false) {
        if (!!target) {
            if (!this.allHandlers.has(target)) {
                this.allHandlers.set(target, []);
            }
            let arr = this.allHandlers.get(target);
            arr.push({ type: type, handler: handler, isOnce: isOnce });
        }
    }

    /**
     * 是否target在侦听某个事件
     * @param type 
     * @param target 
     */
    has(type: number | string, target: any) {
        if (!!target) {
            if (this.allHandlers.has(target)) {
                let arr = this.allHandlers.get(target);
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (element.type === type) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * 移除侦听
     * @param type 
     * @param handler 
     * @param target 
     * @param isRelease 
     */
    off(type: number | string, handler: Handler, target: any, isRelease: boolean = false) {
        if (!!target) {
            let targetEvents: Array<NResponserData> = this.allHandlers.get(target);
            if (!!targetEvents) {
                for (let i = 0; i < targetEvents.length; i++) {
                    if (targetEvents[i].type === type && targetEvents[i].handler.equal(handler)) {
                        if (isRelease) {
                            targetEvents[i].handler.release();
                        }
                        Utils.arrayRemove(targetEvents, i, 1);
                        break;
                    }
                }
            }
        }
    }

    /**
     * 移除目标身上全部侦听
     * @param target 
     * @param isRelease 
     */
    targetOff(target: any, isRelease: boolean) {
        if (!!target) {
            if (this.allHandlers.has(target)) {
                if (!!isRelease) {
                    let arr = this.allHandlers.get(target);
                    if (!!arr) {
                        for (let index = 0; index < arr.length; index++) {
                            arr[index].handler.release();
                        }
                    }
                }
                this.allHandlers.delete(target);
            }

        }
    }

    /**
     * 检查一次性事件
     * @param arr 
     * @param index 
     */
    private checkOnceEvent(arr, index) {
        let data = arr[index];
        if (data.isOnce) {
            Utils.arrayRemove(arr, index);
        }
    }
};
export default NResponser.instance();
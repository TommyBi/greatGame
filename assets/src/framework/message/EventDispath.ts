import JSHelper from "../helper/JSHelper";
import MKUtils from "../tools/MkUtils";

export interface touchEventCfg {
    thisObject: any,
    nodeList: cc.Node[]
}

class EventDispath {
    NotificationCenter: cc.Node;
    nodeList = {};
    touchList = {};
    constructor() {
        this.NotificationCenter = new cc.Node();
    }
    public static singleton: EventDispath;

    public static getInstance(): EventDispath {
        if (!this.singleton) {
            this.singleton = new EventDispath();
        }
        return this.singleton;
    }

    addEventListener(type: string, callback: (notice: any) => void, target) {
        this.NotificationCenter.on(type, callback, target);
    }

    send(eventID, arg1?: any) {
        this.NotificationCenter.emit(eventID, arg1);
    }

    removeByEvent(type: string, callback: (notice: any) => void, target) {
        this.NotificationCenter.off(type, callback, target);
    }

    removeEventListeners(target) {
        this.NotificationCenter.targetOff(target);
        if (this.nodeList[target]) {
            let arr = this.nodeList[target];
            for (let i = 0; i < arr.length; i++) {
                arr[i].targetOff(target);
            }
        }
    }
    /**
     * 按钮点击缩放
     * @param btn 触摸的node
     * @param callback 点击回调
     * @param thisObj 作用域
     * @param touchIndex 触发时机，1开始时，2结束时
     * @param icon 缩放效果node
     * @param scaleX 
     * @param scaleY 
     */
    on(btn: cc.Node, callback: (notice: any) => void, thisObj, delayTime = 0.5, isAction = true, touchIndex = 2, icon?: any, scaleX?: number, scaleY?: number) {
        if (!icon) {
            icon = btn
        }

        let preScaleX = btn.scaleX
        let preScaleY = btn.scaleY

        if (scaleX) {
            preScaleX = scaleX;
        }

        if (scaleY) {
            preScaleY = scaleY;
        }
        if (!this.nodeList[thisObj]) {
            this.nodeList[thisObj] = [];
        }
        this.nodeList[thisObj].push(btn);

        this.touchList[btn.uuid] = 0;
        let self = this;
        btn.on(cc.Node.EventType.TOUCH_START, function (e) {
            if (self.touchList[icon.uuid] != 0) return;
            self.touchList[icon.uuid] = 1;
            JSHelper.playClickEffect();
            if (isAction) icon.runAction(cc.scaleTo(0.1, preScaleX * 1.1, preScaleY * 1.1))
            // icon.setScale(preScaleX*1.1, preScaleY*1.1)
            if (callback && touchIndex == 1) callback.call(thisObj, e);
        }, thisObj)

        btn.on(cc.Node.EventType.TOUCH_END, function (e) {
            if (self.touchList[icon.uuid] == 2) return;
            self.touchList[icon.uuid] = 2;
            if (isAction) {
                icon.runAction(cc.sequence(cc.scaleTo(0.1, preScaleX, preScaleY), cc.delayTime(delayTime), cc.callFunc(() => {
                    self.touchList[icon.uuid] = 0;
                })))
            } else {
                self.touchList[icon.uuid] = 0;

            }
            // icon.setScale(preScaleX, preScaleY)
            if (callback && touchIndex == 2) {
                callback.call(thisObj, e);
            }
        }, thisObj)

        // btn.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
        //     icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY))
        //     // if (callback && touchIndex == 2) callback.call(thisObj, e);
        //     // icon.setScale(preScaleX, preScaleY)
        // }, thisObj)
    }

}
export default EventDispath.getInstance();
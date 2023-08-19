"use strict";
cc._RF.push(module, 'd75abv3bmxBpojLjaznh2B3', 'EventDispath');
// src/framework/message/EventDispath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSHelper_1 = require("../helper/JSHelper");
var EventDispath = /** @class */ (function () {
    function EventDispath() {
        this.nodeList = {};
        this.touchList = {};
        this.NotificationCenter = new cc.Node();
    }
    EventDispath.getInstance = function () {
        if (!this.singleton) {
            this.singleton = new EventDispath();
        }
        return this.singleton;
    };
    EventDispath.prototype.addEventListener = function (type, callback, target) {
        this.NotificationCenter.on(type, callback, target);
    };
    EventDispath.prototype.send = function (eventID, arg1) {
        this.NotificationCenter.emit(eventID, arg1);
    };
    EventDispath.prototype.removeByEvent = function (type, callback, target) {
        this.NotificationCenter.off(type, callback, target);
    };
    EventDispath.prototype.removeEventListeners = function (target) {
        this.NotificationCenter.targetOff(target);
        if (this.nodeList[target]) {
            var arr = this.nodeList[target];
            for (var i = 0; i < arr.length; i++) {
                arr[i].targetOff(target);
            }
        }
    };
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
    EventDispath.prototype.on = function (btn, callback, thisObj, delayTime, isAction, touchIndex, icon, scaleX, scaleY) {
        if (delayTime === void 0) { delayTime = 0.5; }
        if (isAction === void 0) { isAction = true; }
        if (touchIndex === void 0) { touchIndex = 2; }
        if (!icon) {
            icon = btn;
        }
        var preScaleX = btn.scaleX;
        var preScaleY = btn.scaleY;
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
        var self = this;
        btn.on(cc.Node.EventType.TOUCH_START, function (e) {
            if (self.touchList[icon.uuid] != 0)
                return;
            self.touchList[icon.uuid] = 1;
            JSHelper_1.default.playClickEffect();
            if (isAction)
                icon.runAction(cc.scaleTo(0.1, preScaleX * 1.1, preScaleY * 1.1));
            // icon.setScale(preScaleX*1.1, preScaleY*1.1)
            if (callback && touchIndex == 1)
                callback.call(thisObj, e);
        }, thisObj);
        btn.on(cc.Node.EventType.TOUCH_END, function (e) {
            if (self.touchList[icon.uuid] == 2)
                return;
            self.touchList[icon.uuid] = 2;
            if (isAction) {
                icon.runAction(cc.sequence(cc.scaleTo(0.1, preScaleX, preScaleY), cc.delayTime(delayTime), cc.callFunc(function () {
                    self.touchList[icon.uuid] = 0;
                })));
            }
            else {
                self.touchList[icon.uuid] = 0;
            }
            // icon.setScale(preScaleX, preScaleY)
            if (callback && touchIndex == 2) {
                callback.call(thisObj, e);
            }
        }, thisObj);
        // btn.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
        //     icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY))
        //     // if (callback && touchIndex == 2) callback.call(thisObj, e);
        //     // icon.setScale(preScaleX, preScaleY)
        // }, thisObj)
    };
    return EventDispath;
}());
exports.default = EventDispath.getInstance();

cc._RF.pop();
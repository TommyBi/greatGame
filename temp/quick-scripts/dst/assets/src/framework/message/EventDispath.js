
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/message/EventDispath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBUTFDO0lBSUk7UUFGQSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVYLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBR2Esd0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixJQUFZLEVBQUUsUUFBK0IsRUFBRSxNQUFNO1FBQ2xFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLE9BQU8sRUFBRSxJQUFVO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLFFBQStCLEVBQUUsTUFBTTtRQUMvRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDJDQUFvQixHQUFwQixVQUFxQixNQUFNO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFF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Q0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ1A7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRWpDO1lBQ0Qsc0NBQXNDO1lBQ3RDLElBQUksUUFBUSxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRVgsd0RBQXdEO1FBQ3hELDREQUE0RDtRQUM1RCxxRUFBcUU7UUFDckUsNkNBQTZDO1FBQzdDLGNBQWM7SUFDbEIsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtBQUNELGtCQUFlLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU0hlbHBlciBmcm9tIFwiLi4vaGVscGVyL0pTSGVscGVyXCI7XG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vdG9vbHMvTWtVdGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIHRvdWNoRXZlbnRDZmcge1xuICAgIHRoaXNPYmplY3Q6IGFueSxcbiAgICBub2RlTGlzdDogY2MuTm9kZVtdXG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0aCB7XG4gICAgTm90aWZpY2F0aW9uQ2VudGVyOiBjYy5Ob2RlO1xuICAgIG5vZGVMaXN0ID0ge307XG4gICAgdG91Y2hMaXN0ID0ge307XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuTm90aWZpY2F0aW9uQ2VudGVyID0gbmV3IGNjLk5vZGUoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBzaW5nbGV0b246IEV2ZW50RGlzcGF0aDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRXZlbnREaXNwYXRoIHtcbiAgICAgICAgaWYgKCF0aGlzLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGV0b24gPSBuZXcgRXZlbnREaXNwYXRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogKG5vdGljZTogYW55KSA9PiB2b2lkLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5Ob3RpZmljYXRpb25DZW50ZXIub24odHlwZSwgY2FsbGJhY2ssIHRhcmdldCk7XG4gICAgfVxuXG4gICAgc2VuZChldmVudElELCBhcmcxPzogYW55KSB7XG4gICAgICAgIHRoaXMuTm90aWZpY2F0aW9uQ2VudGVyLmVtaXQoZXZlbnRJRCwgYXJnMSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQnlFdmVudCh0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiAobm90aWNlOiBhbnkpID0+IHZvaWQsIHRhcmdldCkge1xuICAgICAgICB0aGlzLk5vdGlmaWNhdGlvbkNlbnRlci5vZmYodHlwZSwgY2FsbGJhY2ssIHRhcmdldCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuTm90aWZpY2F0aW9uQ2VudGVyLnRhcmdldE9mZih0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5ub2RlTGlzdFt0YXJnZXRdKSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5ub2RlTGlzdFt0YXJnZXRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0udGFyZ2V0T2ZmKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5oyJ6ZKu54K55Ye757yp5pS+XG4gICAgICogQHBhcmFtIGJ0biDop6bmkbjnmoRub2RlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOeCueWHu+Wbnuiwg1xuICAgICAqIEBwYXJhbSB0aGlzT2JqIOS9nOeUqOWfn1xuICAgICAqIEBwYXJhbSB0b3VjaEluZGV4IOinpuWPkeaXtuacuu+8jDHlvIDlp4vml7bvvIwy57uT5p2f5pe2XG4gICAgICogQHBhcmFtIGljb24g57yp5pS+5pWI5p6cbm9kZVxuICAgICAqIEBwYXJhbSBzY2FsZVggXG4gICAgICogQHBhcmFtIHNjYWxlWSBcbiAgICAgKi9cbiAgICBvbihidG46IGNjLk5vZGUsIGNhbGxiYWNrOiAobm90aWNlOiBhbnkpID0+IHZvaWQsIHRoaXNPYmosIGRlbGF5VGltZSA9IDAuNSwgaXNBY3Rpb24gPSB0cnVlLCB0b3VjaEluZGV4ID0gMiwgaWNvbj86IGFueSwgc2NhbGVYPzogbnVtYmVyLCBzY2FsZVk/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgICBpY29uID0gYnRuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJlU2NhbGVYID0gYnRuLnNjYWxlWFxuICAgICAgICBsZXQgcHJlU2NhbGVZID0gYnRuLnNjYWxlWVxuXG4gICAgICAgIGlmIChzY2FsZVgpIHtcbiAgICAgICAgICAgIHByZVNjYWxlWCA9IHNjYWxlWDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2FsZVkpIHtcbiAgICAgICAgICAgIHByZVNjYWxlWSA9IHNjYWxlWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubm9kZUxpc3RbdGhpc09ial0pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3RbdGhpc09ial0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVMaXN0W3RoaXNPYmpdLnB1c2goYnRuKTtcblxuICAgICAgICB0aGlzLnRvdWNoTGlzdFtidG4udXVpZF0gPSAwO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnRvdWNoTGlzdFtpY29uLnV1aWRdICE9IDApIHJldHVybjtcbiAgICAgICAgICAgIHNlbGYudG91Y2hMaXN0W2ljb24udXVpZF0gPSAxO1xuICAgICAgICAgICAgSlNIZWxwZXIucGxheUNsaWNrRWZmZWN0KCk7XG4gICAgICAgICAgICBpZiAoaXNBY3Rpb24pIGljb24ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLCBwcmVTY2FsZVggKiAxLjEsIHByZVNjYWxlWSAqIDEuMSkpXG4gICAgICAgICAgICAvLyBpY29uLnNldFNjYWxlKHByZVNjYWxlWCoxLjEsIHByZVNjYWxlWSoxLjEpXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdG91Y2hJbmRleCA9PSAxKSBjYWxsYmFjay5jYWxsKHRoaXNPYmosIGUpO1xuICAgICAgICB9LCB0aGlzT2JqKVxuXG4gICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi50b3VjaExpc3RbaWNvbi51dWlkXSA9PSAyKSByZXR1cm47XG4gICAgICAgICAgICBzZWxmLnRvdWNoTGlzdFtpY29uLnV1aWRdID0gMjtcbiAgICAgICAgICAgIGlmIChpc0FjdGlvbikge1xuICAgICAgICAgICAgICAgIGljb24ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4xLCBwcmVTY2FsZVgsIHByZVNjYWxlWSksIGNjLmRlbGF5VGltZShkZWxheVRpbWUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG91Y2hMaXN0W2ljb24udXVpZF0gPSAwO1xuICAgICAgICAgICAgICAgIH0pKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi50b3VjaExpc3RbaWNvbi51dWlkXSA9IDA7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGljb24uc2V0U2NhbGUocHJlU2NhbGVYLCBwcmVTY2FsZVkpXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdG91Y2hJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzT2JqLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpc09iailcblxuICAgICAgICAvLyBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyAgICAgaWNvbi5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIHByZVNjYWxlWCwgcHJlU2NhbGVZKSlcbiAgICAgICAgLy8gICAgIC8vIGlmIChjYWxsYmFjayAmJiB0b3VjaEluZGV4ID09IDIpIGNhbGxiYWNrLmNhbGwodGhpc09iaiwgZSk7XG4gICAgICAgIC8vICAgICAvLyBpY29uLnNldFNjYWxlKHByZVNjYWxlWCwgcHJlU2NhbGVZKVxuICAgICAgICAvLyB9LCB0aGlzT2JqKVxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgRXZlbnREaXNwYXRoLmdldEluc3RhbmNlKCk7Il19
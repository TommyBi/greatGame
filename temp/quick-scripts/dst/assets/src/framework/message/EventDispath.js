
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBUTFDO0lBSUk7UUFGQSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVYLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBR2Esd0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixJQUFZLEVBQUUsUUFBK0IsRUFBRSxNQUFNO1FBQ2xFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLE9BQU8sRUFBRSxJQUFVO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLFFBQStCLEVBQUUsTUFBTTtRQUMvRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDJDQUFvQixHQUFwQixVQUFxQixNQUFNO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFF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Q0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ1A7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRWpDO1lBQ0Qsc0NBQXNDO1lBQ3RDLElBQUksUUFBUSxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRVgsd0RBQXdEO1FBQ3hELDREQUE0RDtRQUM1RCxxRUFBcUU7UUFDckUsNkNBQTZDO1FBQzdDLGNBQWM7SUFDbEIsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtBQUNELGtCQUFlLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU0hlbHBlciBmcm9tIFwiLi4vaGVscGVyL0pTSGVscGVyXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi90b29scy9Na1V0aWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIHRvdWNoRXZlbnRDZmcge1xyXG4gICAgdGhpc09iamVjdDogYW55LFxyXG4gICAgbm9kZUxpc3Q6IGNjLk5vZGVbXVxyXG59XHJcblxyXG5jbGFzcyBFdmVudERpc3BhdGgge1xyXG4gICAgTm90aWZpY2F0aW9uQ2VudGVyOiBjYy5Ob2RlO1xyXG4gICAgbm9kZUxpc3QgPSB7fTtcclxuICAgIHRvdWNoTGlzdCA9IHt9O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5Ob3RpZmljYXRpb25DZW50ZXIgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzaW5nbGV0b246IEV2ZW50RGlzcGF0aDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEV2ZW50RGlzcGF0aCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpbmdsZXRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZXRvbiA9IG5ldyBFdmVudERpc3BhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogKG5vdGljZTogYW55KSA9PiB2b2lkLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLk5vdGlmaWNhdGlvbkNlbnRlci5vbih0eXBlLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kKGV2ZW50SUQsIGFyZzE/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLk5vdGlmaWNhdGlvbkNlbnRlci5lbWl0KGV2ZW50SUQsIGFyZzEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJ5RXZlbnQodHlwZTogc3RyaW5nLCBjYWxsYmFjazogKG5vdGljZTogYW55KSA9PiB2b2lkLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLk5vdGlmaWNhdGlvbkNlbnRlci5vZmYodHlwZSwgY2FsbGJhY2ssIHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy5Ob3RpZmljYXRpb25DZW50ZXIudGFyZ2V0T2ZmKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZUxpc3RbdGFyZ2V0XSkge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5ub2RlTGlzdFt0YXJnZXRdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJyW2ldLnRhcmdldE9mZih0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInpkq7ngrnlh7vnvKnmlL5cclxuICAgICAqIEBwYXJhbSBidG4g6Kem5pG455qEbm9kZVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOeCueWHu+Wbnuiwg1xyXG4gICAgICogQHBhcmFtIHRoaXNPYmog5L2c55So5Z+fXHJcbiAgICAgKiBAcGFyYW0gdG91Y2hJbmRleCDop6blj5Hml7bmnLrvvIwx5byA5aeL5pe277yMMue7k+adn+aXtlxyXG4gICAgICogQHBhcmFtIGljb24g57yp5pS+5pWI5p6cbm9kZVxyXG4gICAgICogQHBhcmFtIHNjYWxlWCBcclxuICAgICAqIEBwYXJhbSBzY2FsZVkgXHJcbiAgICAgKi9cclxuICAgIG9uKGJ0bjogY2MuTm9kZSwgY2FsbGJhY2s6IChub3RpY2U6IGFueSkgPT4gdm9pZCwgdGhpc09iaiwgZGVsYXlUaW1lID0gMC41LCBpc0FjdGlvbiA9IHRydWUsIHRvdWNoSW5kZXggPSAyLCBpY29uPzogYW55LCBzY2FsZVg/OiBudW1iZXIsIHNjYWxlWT86IG51bWJlcikge1xyXG4gICAgICAgIGlmICghaWNvbikge1xyXG4gICAgICAgICAgICBpY29uID0gYnRuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJlU2NhbGVYID0gYnRuLnNjYWxlWFxyXG4gICAgICAgIGxldCBwcmVTY2FsZVkgPSBidG4uc2NhbGVZXHJcblxyXG4gICAgICAgIGlmIChzY2FsZVgpIHtcclxuICAgICAgICAgICAgcHJlU2NhbGVYID0gc2NhbGVYO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjYWxlWSkge1xyXG4gICAgICAgICAgICBwcmVTY2FsZVkgPSBzY2FsZVk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5ub2RlTGlzdFt0aGlzT2JqXSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVMaXN0W3RoaXNPYmpdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZUxpc3RbdGhpc09ial0ucHVzaChidG4pO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoTGlzdFtidG4udXVpZF0gPSAwO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnRvdWNoTGlzdFtpY29uLnV1aWRdICE9IDApIHJldHVybjtcclxuICAgICAgICAgICAgc2VsZi50b3VjaExpc3RbaWNvbi51dWlkXSA9IDE7XHJcbiAgICAgICAgICAgIEpTSGVscGVyLnBsYXlDbGlja0VmZmVjdCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNBY3Rpb24pIGljb24ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLCBwcmVTY2FsZVggKiAxLjEsIHByZVNjYWxlWSAqIDEuMSkpXHJcbiAgICAgICAgICAgIC8vIGljb24uc2V0U2NhbGUocHJlU2NhbGVYKjEuMSwgcHJlU2NhbGVZKjEuMSlcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIHRvdWNoSW5kZXggPT0gMSkgY2FsbGJhY2suY2FsbCh0aGlzT2JqLCBlKTtcclxuICAgICAgICB9LCB0aGlzT2JqKVxyXG5cclxuICAgICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi50b3VjaExpc3RbaWNvbi51dWlkXSA9PSAyKSByZXR1cm47XHJcbiAgICAgICAgICAgIHNlbGYudG91Y2hMaXN0W2ljb24udXVpZF0gPSAyO1xyXG4gICAgICAgICAgICBpZiAoaXNBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGljb24ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4xLCBwcmVTY2FsZVgsIHByZVNjYWxlWSksIGNjLmRlbGF5VGltZShkZWxheVRpbWUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b3VjaExpc3RbaWNvbi51dWlkXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvdWNoTGlzdFtpY29uLnV1aWRdID0gMDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWNvbi5zZXRTY2FsZShwcmVTY2FsZVgsIHByZVNjYWxlWSlcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIHRvdWNoSW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzT2JqLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXNPYmopXHJcblxyXG4gICAgICAgIC8vIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gICAgIGljb24ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4yLCBwcmVTY2FsZVgsIHByZVNjYWxlWSkpXHJcbiAgICAgICAgLy8gICAgIC8vIGlmIChjYWxsYmFjayAmJiB0b3VjaEluZGV4ID09IDIpIGNhbGxiYWNrLmNhbGwodGhpc09iaiwgZSk7XHJcbiAgICAgICAgLy8gICAgIC8vIGljb24uc2V0U2NhbGUocHJlU2NhbGVYLCBwcmVTY2FsZVkpXHJcbiAgICAgICAgLy8gfSwgdGhpc09iailcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnREaXNwYXRoLmdldEluc3RhbmNlKCk7Il19
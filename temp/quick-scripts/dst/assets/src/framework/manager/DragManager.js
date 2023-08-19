
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/DragManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f73242JYXdC/LQGTZZQMl2I', 'DragManager');
// src/framework/manager/DragManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NResponer_1 = require("../message/NResponer");
var MkUtils_1 = require("../tools/MkUtils");
var Utils_1 = require("../tools/Utils");
//拖拽管理类
var DragManager = /** @class */ (function () {
    function DragManager() {
        this.BaseDropName = 'BaseDropItem';
        this.tempItem = null;
        this.stage = null;
        this.isInitEvent = false;
        this.dragData = null;
        this.updateHandler = null;
        this.endHandler = null;
        this.startHandler = null;
        this.canDrag = true;
        this.isInit = false;
        this._inMerge = false;
        this.tempItemList = {};
    }
    DragManager.instance = function () {
        if (!this._instance) {
            this._instance = new DragManager();
        }
        return this._instance;
    };
    /**
     * 初始化顶级
     * @param screen
     */
    DragManager.prototype.initStage = function (screen, thisObj) {
        if (!this.isInit && !cc.isValid(this.stage)) {
            this.stage = screen;
            this.isInit = true;
            this.thisObj = thisObj;
        }
    };
    //开始拖动动画
    DragManager.prototype.startDragHandler = function (spriteFrame, pos, dragData) {
        this.initPos = pos;
        this.dragData = dragData;
        this.initStageEvent();
        if (cc.isValid(spriteFrame)) {
            this.setDragSkin(spriteFrame, pos);
            this.tempItem.opacity = 255;
            this.tempItem.setScale(dragData.moveTarget.scale);
            this.tempItem.stopAllActions();
            var sc = dragData.moveTarget.scale;
            this.tempItem.runAction(cc.sequence(cc.scaleTo(0.2, sc + 0.2), cc.scaleTo(0.2, sc)));
            this.canDrag = true;
        }
        else {
            this.canDrag = false;
        }
        this.startHandler && this.startHandler.call(this.thisObj, this.dragData);
    };
    //设置回调函数
    //updateHandler 更新函数
    //返回时回调
    DragManager.prototype.setCallBackHandler = function (updateHandler, endHandler, startHandler) {
        this.updateHandler = updateHandler;
        this.endHandler = endHandler;
        this.startHandler = startHandler;
    };
    //拖放是否成功的回调
    DragManager.prototype.dragSuccess = function (state) {
        NResponer_1.default.dispatch('dragStatus', state, this.dragData);
    };
    DragManager.prototype.initStageEvent = function () {
        if (!this.isInitEvent && cc.isValid(this.stage)) {
            this.createTempItem();
            this.isInitEvent = true;
            this.stage.on(cc.Node.EventType.TOUCH_MOVE, this.moveTouchHandler, this, false);
            //取消
            this.stage.on(cc.Node.EventType.TOUCH_CANCEL, this.cancelTouchHandler, this, false);
            //鼠标弹起
            this.stage.on(cc.Node.EventType.TOUCH_END, this.endTouchHandler, this, false);
        }
    };
    DragManager.prototype.moveTouchHandler = function (event) {
        if (this.canDrag) {
            // this.tempItem.x = event.getLocationX() - 640;
            // this.tempItem.y = event.getLocationY() - 360;
            this.tempItem.setPosition(this.stage.convertToNodeSpaceAR(event.getLocation()));
            if (!!this.updateHandler) {
                this.updateHandler.call(this.thisObj, this.tempItem, this.dragData);
            }
        }
    };
    DragManager.prototype.cancelTouchHandler = function (event) {
        if (this.canDrag) {
            // this.removeStageEvent(event.getLocation());
            if (this.endHandler) {
                this.endHandler.call(this.thisObj, this.tempItem, this.dragData, event.getLocation());
            }
        }
    };
    DragManager.prototype.endTouchHandler = function (event) {
        if (this.canDrag) {
            // this.removeStageEvent(event.getLocation());
            if (this.endHandler) {
                this.endHandler.call(this.thisObj, this.tempItem, this.dragData, event.getLocation());
            }
        }
    };
    DragManager.prototype.removeStageEvent = function (pos, callBack, targetPos, targetCb, mScale) {
        var _this = this;
        this.isInitEvent = false;
        this.stage.off(cc.Node.EventType.TOUCH_MOVE, this.moveTouchHandler, this);
        this.stage.off(cc.Node.EventType.TOUCH_END, this.endTouchHandler, this);
        this.stage.off(cc.Node.EventType.TOUCH_CANCEL, this.cancelTouchHandler, this);
        if (cc.isValid(this.tempItem)) {
            var dis = 0;
            // let dis = Global.HANDLE_FEEL_ANIMAL_COLLISION_DIS;
            if (mScale) {
                this.tempItem.scale = mScale;
                dis *= mScale;
            }
            if (pos) {
                var dis_1 = MkUtils_1.default.twoPointDistance(this.initPos, this.stage.convertToNodeSpaceAR(pos));
                // cc.log("distance",dis)
                var delayTime = dis_1 / 2000;
                this.tempItem.runAction(cc.sequence(cc.moveTo(delayTime, this.initPos).easing(cc.easeSineIn()), cc.callFunc(function () {
                    if (callBack) {
                        callBack.call(_this.thisObj);
                    }
                    _this.tempItem.opacity = 0;
                })));
            }
            else {
                // this._inMerge = true;
                var mScale_1 = this.tempItem.scale;
                var nodePos = this.tempItem.getParent().convertToNodeSpaceAR(targetPos);
                this.tempItem.setPosition(nodePos);
                this.tempItem.runAction(cc.sequence(cc.scaleTo(Utils_1.default._FT(3), 0.3), cc.spawn(cc.moveTo(Utils_1.default._FT(5), cc.v2(nodePos.x + dis, nodePos.y)).easing(cc.easeSineInOut()), cc.scaleTo(Utils_1.default._FT(5), mScale_1, mScale_1).easing(cc.easeSineInOut())), cc.delayTime(Utils_1.default._FT(3)), cc.spawn(cc.moveTo(Utils_1.default._FT(3), cc.v2(nodePos.x, nodePos.y)).easing(cc.easeSineInOut()), 
                // cc.scaleTo(Utils._FT(10),0.3).easing(cc.easeSineInOut())
                // cc.fadeOut(Utils._FT(5))
                cc.fadeTo(Utils_1.default._FT(3), 85)), cc.callFunc(function () {
                    _this.tempItem.opacity = 0;
                    _this.tempItem.zIndex = 999;
                    // this._inMerge = false;
                    targetCb && targetCb();
                })));
                // this.tempItem.runAction(cc.sequence(
                //     cc.spawn(cc.scaleTo(Utils._FT(3),mScale * 1.8),cc.fadeTo(Utils._FT(3),200),cc.moveTo(Utils._FT(3),nodePos)),
                //     cc.scaleTo(Utils._FT(3),mScale * 0.90),
                //     cc.callFunc(()=>{
                //         this.tempItem.zIndex = -10;
                //     }),
                //     cc.scaleTo(Utils._FT(2),mScale * 1.35),
                //     cc.scaleTo(Utils._FT(2),mScale * 0.9),
                //     cc.scaleTo(Utils._FT(3),mScale),
                //     cc.scaleTo(Utils._FT(3),0).easing(cc.easeSineIn()), cc.callFunc(() => {
                //         this.tempItem.opacity = 0;
                //         this.tempItem.zIndex = 999;
                //         targetCb && targetCb();
                //     })
                // ));
                // this.tempItem.runAction(cc.sequence(cc.scaleTo(0.2, 0).easing(cc.easeSineIn()), cc.callFunc(() => {
                //     this.tempItem.opacity = 0;
                // })))
            }
        }
        this.canDrag = false;
    };
    DragManager.prototype.setDragSkin = function (skin, pos) {
        if (cc.isValid(this.tempItem)) {
            this.tempItem.getComponent(cc.Sprite).spriteFrame = skin;
            this.tempItem.x = pos.x;
            this.tempItem.y = pos.y;
        }
    };
    DragManager.prototype.createTempItem = function () {
        var mIndex = this.dragData["index"];
        if (this.tempItemList[mIndex]) {
            this.tempItem = this.tempItemList[mIndex];
            return;
        }
        if (cc.isValid(this.tempItem)) {
            return this.tempItem;
        }
        this.tempItem = new cc.Node();
        this.tempItem.addComponent(cc.Sprite);
        this.tempItem.parent = this.stage;
        this.tempItemList[mIndex] = this.tempItem;
    };
    DragManager.prototype.getTempItemWorldPos = function () {
        if (!this.tempItem) {
            return cc.v2();
        }
        return this.tempItem.getParent().convertToWorldSpaceAR(this.tempItem.getPosition());
    };
    //获得拖拽对象的数据
    DragManager.prototype.getDragData = function () {
        return this.dragData;
    };
    return DragManager;
}());
exports.default = DragManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvRHJhZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxrREFBNkM7QUFDN0MsNENBQXVDO0FBQ3ZDLHdDQUFtQztBQUVuQyxPQUFPO0FBQ1A7SUFBQTtRQUNVLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBUSxFQUFFLENBQUM7SUF5TWpDLENBQUM7SUFyTVEsb0JBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUNwQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0JBQVMsR0FBVCxVQUFVLE1BQWUsRUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7SUFDSCxDQUFD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O0lBQ1gsaUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQXZOQSxBQXVOQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vZ2FtZS9jb25zdHMvR2xvYmFsXCI7XG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XG5pbXBvcnQgTlJlc3BvbmVyIGZyb20gXCIuLi9tZXNzYWdlL05SZXNwb25lclwiO1xuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uL3Rvb2xzL01rVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdG9vbHMvVXRpbHNcIjtcblxuLy/mi5bmi73nrqHnkIbnsbtcbmNsYXNzIERyYWdNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBCYXNlRHJvcE5hbWU6IHN0cmluZyA9ICdCYXNlRHJvcEl0ZW0nO1xuICBwcml2YXRlIHRlbXBJdGVtOiBjYy5Ob2RlID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGFnZTogY2MuTm9kZSA9IG51bGw7XG4gIHByaXZhdGUgaXNJbml0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnRGF0YSA9IG51bGw7XG4gIHByaXZhdGUgdXBkYXRlSGFuZGxlcjogSGFuZGxlciA9IG51bGw7XG4gIHByaXZhdGUgZW5kSGFuZGxlcjogSGFuZGxlciA9IG51bGw7XG4gIHByaXZhdGUgc3RhcnRIYW5kbGVyOiBIYW5kbGVyID0gbnVsbDtcbiAgcHJpdmF0ZSBjYW5EcmFnOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSB0aGlzT2JqOiBhbnk7XG4gIHByaXZhdGUgaW5pdFBvczogYW55Oy8v5Yid5aeL5L2N572uXG4gIHB1YmxpYyBfaW5NZXJnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHRlbXBJdGVtTGlzdDogYW55ID0ge307XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBEcmFnTWFuYWdlcjtcblxuICBzdGF0aWMgaW5zdGFuY2UoKTogRHJhZ01hbmFnZXIge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERyYWdNYW5hZ2VyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3lp4vljJbpobbnuqdcbiAgICogQHBhcmFtIHNjcmVlbiBcbiAgICovXG4gIGluaXRTdGFnZShzY3JlZW46IGNjLk5vZGUsIHRoaXNPYmopIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0ICYmICFjYy5pc1ZhbGlkKHRoaXMuc3RhZ2UpKSB7XG4gICAgICB0aGlzLnN0YWdlID0gc2NyZWVuO1xuICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgICAgdGhpcy50aGlzT2JqID0gdGhpc09iajtcbiAgICB9XG4gIH1cblxuICAvL+W8gOWni+aLluWKqOWKqOeUu1xuICBzdGFydERyYWdIYW5kbGVyKHNwcml0ZUZyYW1lLCBwb3MsIGRyYWdEYXRhKSB7XG4gICAgdGhpcy5pbml0UG9zID0gcG9zO1xuICAgIHRoaXMuZHJhZ0RhdGEgPSBkcmFnRGF0YTtcbiAgICB0aGlzLmluaXRTdGFnZUV2ZW50KCk7XG4gICAgaWYgKGNjLmlzVmFsaWQoc3ByaXRlRnJhbWUpKSB7XG4gICAgICB0aGlzLnNldERyYWdTa2luKHNwcml0ZUZyYW1lLCBwb3MpO1xuICAgICAgdGhpcy50ZW1wSXRlbS5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy50ZW1wSXRlbS5zZXRTY2FsZShkcmFnRGF0YS5tb3ZlVGFyZ2V0LnNjYWxlKVxuICAgICAgdGhpcy50ZW1wSXRlbS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgbGV0IHNjID0gZHJhZ0RhdGEubW92ZVRhcmdldC5zY2FsZTtcbiAgICAgIHRoaXMudGVtcEl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4yLCBzYyArIDAuMiksXG4gICAgICAgIGNjLnNjYWxlVG8oMC4yLCBzYykpKVxuICAgICAgdGhpcy5jYW5EcmFnID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW5EcmFnID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc3RhcnRIYW5kbGVyICYmIHRoaXMuc3RhcnRIYW5kbGVyLmNhbGwodGhpcy50aGlzT2JqLCB0aGlzLmRyYWdEYXRhKTtcbiAgfVxuXG4gIC8v6K6+572u5Zue6LCD5Ye95pWwXG4gIC8vdXBkYXRlSGFuZGxlciDmm7TmlrDlh73mlbBcbiAgLy/ov5Tlm57ml7blm57osINcbiAgc2V0Q2FsbEJhY2tIYW5kbGVyKHVwZGF0ZUhhbmRsZXIsIGVuZEhhbmRsZXIsIHN0YXJ0SGFuZGxlcikge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gICAgdGhpcy5lbmRIYW5kbGVyID0gZW5kSGFuZGxlcjtcbiAgICB0aGlzLnN0YXJ0SGFuZGxlciA9IHN0YXJ0SGFuZGxlcjtcbiAgfVxuXG4gIC8v5ouW5pS+5piv5ZCm5oiQ5Yqf55qE5Zue6LCDXG4gIGRyYWdTdWNjZXNzKHN0YXRlKSB7XG4gICAgTlJlc3BvbmVyLmRpc3BhdGNoKCdkcmFnU3RhdHVzJywgc3RhdGUsIHRoaXMuZHJhZ0RhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U3RhZ2VFdmVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0RXZlbnQgJiYgY2MuaXNWYWxpZCh0aGlzLnN0YWdlKSkge1xuICAgICAgdGhpcy5jcmVhdGVUZW1wSXRlbSgpO1xuICAgICAgdGhpcy5pc0luaXRFdmVudCA9IHRydWU7XG4gICAgICB0aGlzLnN0YWdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMubW92ZVRvdWNoSGFuZGxlciwgdGhpcywgZmFsc2UpO1xuICAgICAgLy/lj5bmtohcbiAgICAgIHRoaXMuc3RhZ2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmNhbmNlbFRvdWNoSGFuZGxlciwgdGhpcywgZmFsc2UpO1xuICAgICAgLy/pvKDmoIflvLnotbdcbiAgICAgIHRoaXMuc3RhZ2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVuZFRvdWNoSGFuZGxlciwgdGhpcywgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVRvdWNoSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLmNhbkRyYWcpIHtcbiAgICAgIC8vIHRoaXMudGVtcEl0ZW0ueCA9IGV2ZW50LmdldExvY2F0aW9uWCgpIC0gNjQwO1xuICAgICAgLy8gdGhpcy50ZW1wSXRlbS55ID0gZXZlbnQuZ2V0TG9jYXRpb25ZKCkgLSAzNjA7XG4gICAgICB0aGlzLnRlbXBJdGVtLnNldFBvc2l0aW9uKHRoaXMuc3RhZ2UuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSkpO1xuICAgICAgaWYgKCEhdGhpcy51cGRhdGVIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlci5jYWxsKHRoaXMudGhpc09iaiwgdGhpcy50ZW1wSXRlbSwgdGhpcy5kcmFnRGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYW5jZWxUb3VjaEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jYW5EcmFnKSB7XG4gICAgICAvLyB0aGlzLnJlbW92ZVN0YWdlRXZlbnQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICBpZiAodGhpcy5lbmRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZW5kSGFuZGxlci5jYWxsKHRoaXMudGhpc09iaiwgdGhpcy50ZW1wSXRlbSwgdGhpcy5kcmFnRGF0YSwgZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbmRUb3VjaEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jYW5EcmFnKSB7XG4gICAgICAvLyB0aGlzLnJlbW92ZVN0YWdlRXZlbnQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICBpZiAodGhpcy5lbmRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZW5kSGFuZGxlci5jYWxsKHRoaXMudGhpc09iaiwgdGhpcy50ZW1wSXRlbSwgdGhpcy5kcmFnRGF0YSwgZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlU3RhZ2VFdmVudChwb3M/LCBjYWxsQmFjaz8sIHRhcmdldFBvcz8sIHRhcmdldENiPywgbVNjYWxlPykge1xuICAgIHRoaXMuaXNJbml0RXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YWdlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm1vdmVUb3VjaEhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMuc3RhZ2Uub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5lbmRUb3VjaEhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMuc3RhZ2Uub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5jYW5jZWxUb3VjaEhhbmRsZXIsIHRoaXMpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMudGVtcEl0ZW0pKSB7XG4gICAgICBsZXQgZGlzID0gMDtcbiAgICAgIC8vIGxldCBkaXMgPSBHbG9iYWwuSEFORExFX0ZFRUxfQU5JTUFMX0NPTExJU0lPTl9ESVM7XG4gICAgICBpZiAobVNjYWxlKSB7XG4gICAgICAgIHRoaXMudGVtcEl0ZW0uc2NhbGUgPSBtU2NhbGU7XG4gICAgICAgIGRpcyAqPSBtU2NhbGU7XG4gICAgICB9XG4gICAgICBpZiAocG9zKSB7XG4gICAgICAgIGxldCBkaXMgPSBNS1V0aWxzLnR3b1BvaW50RGlzdGFuY2UodGhpcy5pbml0UG9zLCB0aGlzLnN0YWdlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcykpO1xuICAgICAgICAvLyBjYy5sb2coXCJkaXN0YW5jZVwiLGRpcylcbiAgICAgICAgbGV0IGRlbGF5VGltZSA9IGRpcyAvIDIwMDA7XG4gICAgICAgIHRoaXMudGVtcEl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhkZWxheVRpbWUsIHRoaXMuaW5pdFBvcykuZWFzaW5nKGNjLmVhc2VTaW5lSW4oKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICBpZiAoY2FsbEJhY2spIHtcbiAgICAgICAgICAgIGNhbGxCYWNrLmNhbGwodGhpcy50aGlzT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50ZW1wSXRlbS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfSkpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy5faW5NZXJnZSA9IHRydWU7XG4gICAgICAgIGxldCBtU2NhbGUgPSB0aGlzLnRlbXBJdGVtLnNjYWxlO1xuICAgICAgICBsZXQgbm9kZVBvcyA9IHRoaXMudGVtcEl0ZW0uZ2V0UGFyZW50KCkuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0UG9zKTtcbiAgICAgICAgdGhpcy50ZW1wSXRlbS5zZXRQb3NpdGlvbihub2RlUG9zKTtcbiAgICAgICAgdGhpcy50ZW1wSXRlbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgY2Muc2NhbGVUbyhVdGlscy5fRlQoMyksIDAuMyksXG4gICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oVXRpbHMuX0ZUKDUpLCBjYy52Mihub2RlUG9zLnggKyBkaXMsIG5vZGVQb3MueSkpLmVhc2luZyhjYy5lYXNlU2luZUluT3V0KCkpLFxuICAgICAgICAgICAgY2Muc2NhbGVUbyhVdGlscy5fRlQoNSksIG1TY2FsZSwgbVNjYWxlKS5lYXNpbmcoY2MuZWFzZVNpbmVJbk91dCgpKSksXG4gICAgICAgICAgY2MuZGVsYXlUaW1lKFV0aWxzLl9GVCgzKSksXG4gICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oVXRpbHMuX0ZUKDMpLCBjYy52Mihub2RlUG9zLngsIG5vZGVQb3MueSkpLmVhc2luZyhjYy5lYXNlU2luZUluT3V0KCkpLFxuICAgICAgICAgICAgLy8gY2Muc2NhbGVUbyhVdGlscy5fRlQoMTApLDAuMykuZWFzaW5nKGNjLmVhc2VTaW5lSW5PdXQoKSlcbiAgICAgICAgICAgIC8vIGNjLmZhZGVPdXQoVXRpbHMuX0ZUKDUpKVxuICAgICAgICAgICAgY2MuZmFkZVRvKFV0aWxzLl9GVCgzKSwgODUpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRlbXBJdGVtLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy50ZW1wSXRlbS56SW5kZXggPSA5OTk7XG4gICAgICAgICAgICAvLyB0aGlzLl9pbk1lcmdlID0gZmFsc2U7XG4gICAgICAgICAgICB0YXJnZXRDYiAmJiB0YXJnZXRDYigpO1xuICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgICAgICAvLyB0aGlzLnRlbXBJdGVtLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgLy8gICAgIGNjLnNwYXduKGNjLnNjYWxlVG8oVXRpbHMuX0ZUKDMpLG1TY2FsZSAqIDEuOCksY2MuZmFkZVRvKFV0aWxzLl9GVCgzKSwyMDApLGNjLm1vdmVUbyhVdGlscy5fRlQoMyksbm9kZVBvcykpLFxuICAgICAgICAvLyAgICAgY2Muc2NhbGVUbyhVdGlscy5fRlQoMyksbVNjYWxlICogMC45MCksXG4gICAgICAgIC8vICAgICBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudGVtcEl0ZW0uekluZGV4ID0gLTEwO1xuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICBjYy5zY2FsZVRvKFV0aWxzLl9GVCgyKSxtU2NhbGUgKiAxLjM1KSxcbiAgICAgICAgLy8gICAgIGNjLnNjYWxlVG8oVXRpbHMuX0ZUKDIpLG1TY2FsZSAqIDAuOSksXG4gICAgICAgIC8vICAgICBjYy5zY2FsZVRvKFV0aWxzLl9GVCgzKSxtU2NhbGUpLFxuICAgICAgICAvLyAgICAgY2Muc2NhbGVUbyhVdGlscy5fRlQoMyksMCkuZWFzaW5nKGNjLmVhc2VTaW5lSW4oKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnRlbXBJdGVtLm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudGVtcEl0ZW0uekluZGV4ID0gOTk5O1xuICAgICAgICAvLyAgICAgICAgIHRhcmdldENiICYmIHRhcmdldENiKCk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyApKTtcbiAgICAgICAgLy8gdGhpcy50ZW1wSXRlbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjIsIDApLmVhc2luZyhjYy5lYXNlU2luZUluKCkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnRlbXBJdGVtLm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyB9KSkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FuRHJhZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREcmFnU2tpbihza2luLCBwb3MpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnRlbXBJdGVtKSkge1xuICAgICAgdGhpcy50ZW1wSXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNraW47XG4gICAgICB0aGlzLnRlbXBJdGVtLnggPSBwb3MueDtcbiAgICAgIHRoaXMudGVtcEl0ZW0ueSA9IHBvcy55O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGVtcEl0ZW0oKSB7XG4gICAgbGV0IG1JbmRleCA9IHRoaXMuZHJhZ0RhdGFbXCJpbmRleFwiXTtcbiAgICBpZiAodGhpcy50ZW1wSXRlbUxpc3RbbUluZGV4XSkge1xuICAgICAgdGhpcy50ZW1wSXRlbSA9IHRoaXMudGVtcEl0ZW1MaXN0W21JbmRleF07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMudGVtcEl0ZW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZW1wSXRlbTtcbiAgICB9XG4gICAgdGhpcy50ZW1wSXRlbSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgdGhpcy50ZW1wSXRlbS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLnRlbXBJdGVtLnBhcmVudCA9IHRoaXMuc3RhZ2U7XG4gICAgdGhpcy50ZW1wSXRlbUxpc3RbbUluZGV4XSA9IHRoaXMudGVtcEl0ZW07XG4gIH1cbiAgcHVibGljIGdldFRlbXBJdGVtV29ybGRQb3MoKSB7XG4gICAgaWYgKCF0aGlzLnRlbXBJdGVtKSB7XG4gICAgICByZXR1cm4gY2MudjIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGVtcEl0ZW0uZ2V0UGFyZW50KCkuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudGVtcEl0ZW0uZ2V0UG9zaXRpb24oKSk7XG4gIH1cblxuICAvL+iOt+W+l+aLluaLveWvueixoeeahOaVsOaNrlxuICBnZXREcmFnRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnRGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnTWFuYWdlci5pbnN0YW5jZSgpOyJdfQ==
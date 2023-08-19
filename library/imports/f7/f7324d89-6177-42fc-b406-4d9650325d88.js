"use strict";
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
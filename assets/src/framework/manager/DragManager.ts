import Global from "../../game/consts/Global";
import Handler from "../base/Handler";
import NResponer from "../message/NResponer";
import MKUtils from "../tools/MkUtils";
import Utils from "../tools/Utils";

//拖拽管理类
class DragManager {
  private BaseDropName: string = 'BaseDropItem';
  private tempItem: cc.Node = null;
  private stage: cc.Node = null;
  private isInitEvent: boolean = false;
  private dragData = null;
  private updateHandler: Handler = null;
  private endHandler: Handler = null;
  private startHandler: Handler = null;
  private canDrag: boolean = true;
  private isInit: boolean = false;
  private thisObj: any;
  private initPos: any;//初始位置
  public _inMerge: boolean = false;
  private tempItemList: any = {};

  private static _instance: DragManager;

  static instance(): DragManager {
    if (!this._instance) {
      this._instance = new DragManager();
    }
    return this._instance;
  }

  /**
   * 初始化顶级
   * @param screen 
   */
  initStage(screen: cc.Node, thisObj) {
    if (!this.isInit && !cc.isValid(this.stage)) {
      this.stage = screen;
      this.isInit = true;
      this.thisObj = thisObj;
    }
  }

  //开始拖动动画
  startDragHandler(spriteFrame, pos, dragData) {
    this.initPos = pos;
    this.dragData = dragData;
    this.initStageEvent();
    if (cc.isValid(spriteFrame)) {
      this.setDragSkin(spriteFrame, pos);
      this.tempItem.opacity = 255;
      this.tempItem.setScale(dragData.moveTarget.scale)
      this.tempItem.stopAllActions();
      let sc = dragData.moveTarget.scale;
      this.tempItem.runAction(cc.sequence(cc.scaleTo(0.2, sc + 0.2),
        cc.scaleTo(0.2, sc)))
      this.canDrag = true;
    } else {
      this.canDrag = false;
    }
    this.startHandler && this.startHandler.call(this.thisObj, this.dragData);
  }

  //设置回调函数
  //updateHandler 更新函数
  //返回时回调
  setCallBackHandler(updateHandler, endHandler, startHandler) {
    this.updateHandler = updateHandler;
    this.endHandler = endHandler;
    this.startHandler = startHandler;
  }

  //拖放是否成功的回调
  dragSuccess(state) {
    NResponer.dispatch('dragStatus', state, this.dragData);
  }

  private initStageEvent() {
    if (!this.isInitEvent && cc.isValid(this.stage)) {
      this.createTempItem();
      this.isInitEvent = true;
      this.stage.on(cc.Node.EventType.TOUCH_MOVE, this.moveTouchHandler, this, false);
      //取消
      this.stage.on(cc.Node.EventType.TOUCH_CANCEL, this.cancelTouchHandler, this, false);
      //鼠标弹起
      this.stage.on(cc.Node.EventType.TOUCH_END, this.endTouchHandler, this, false);
    }
  }

  private moveTouchHandler(event) {
    if (this.canDrag) {
      // this.tempItem.x = event.getLocationX() - 640;
      // this.tempItem.y = event.getLocationY() - 360;
      this.tempItem.setPosition(this.stage.convertToNodeSpaceAR(event.getLocation()));
      if (!!this.updateHandler) {
        this.updateHandler.call(this.thisObj, this.tempItem, this.dragData);
      }
    }
  }

  private cancelTouchHandler(event) {
    if (this.canDrag) {
      // this.removeStageEvent(event.getLocation());
      if (this.endHandler) {
        this.endHandler.call(this.thisObj, this.tempItem, this.dragData, event.getLocation());
      }
    }
  }

  private endTouchHandler(event) {
    if (this.canDrag) {
      // this.removeStageEvent(event.getLocation());
      if (this.endHandler) {
        this.endHandler.call(this.thisObj, this.tempItem, this.dragData, event.getLocation());
      }
    }

  }

  public removeStageEvent(pos?, callBack?, targetPos?, targetCb?, mScale?) {
    this.isInitEvent = false;
    this.stage.off(cc.Node.EventType.TOUCH_MOVE, this.moveTouchHandler, this);
    this.stage.off(cc.Node.EventType.TOUCH_END, this.endTouchHandler, this);
    this.stage.off(cc.Node.EventType.TOUCH_CANCEL, this.cancelTouchHandler, this);
    if (cc.isValid(this.tempItem)) {
      let dis = 0;
      // let dis = Global.HANDLE_FEEL_ANIMAL_COLLISION_DIS;
      if (mScale) {
        this.tempItem.scale = mScale;
        dis *= mScale;
      }
      if (pos) {
        let dis = MKUtils.twoPointDistance(this.initPos, this.stage.convertToNodeSpaceAR(pos));
        // cc.log("distance",dis)
        let delayTime = dis / 2000;
        this.tempItem.runAction(cc.sequence(cc.moveTo(delayTime, this.initPos).easing(cc.easeSineIn()), cc.callFunc(() => {
          if (callBack) {
            callBack.call(this.thisObj);
          }
          this.tempItem.opacity = 0;
        })))
      } else {
        // this._inMerge = true;
        let mScale = this.tempItem.scale;
        let nodePos = this.tempItem.getParent().convertToNodeSpaceAR(targetPos);
        this.tempItem.setPosition(nodePos);
        this.tempItem.runAction(cc.sequence(
          cc.scaleTo(Utils._FT(3), 0.3),
          cc.spawn(
            cc.moveTo(Utils._FT(5), cc.v2(nodePos.x + dis, nodePos.y)).easing(cc.easeSineInOut()),
            cc.scaleTo(Utils._FT(5), mScale, mScale).easing(cc.easeSineInOut())),
          cc.delayTime(Utils._FT(3)),
          cc.spawn(
            cc.moveTo(Utils._FT(3), cc.v2(nodePos.x, nodePos.y)).easing(cc.easeSineInOut()),
            // cc.scaleTo(Utils._FT(10),0.3).easing(cc.easeSineInOut())
            // cc.fadeOut(Utils._FT(5))
            cc.fadeTo(Utils._FT(3), 85)
          ),
          cc.callFunc(() => {
            this.tempItem.opacity = 0;
            this.tempItem.zIndex = 999;
            // this._inMerge = false;
            targetCb && targetCb();
          })
        ));
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
  }

  private setDragSkin(skin, pos) {
    if (cc.isValid(this.tempItem)) {
      this.tempItem.getComponent(cc.Sprite).spriteFrame = skin;
      this.tempItem.x = pos.x;
      this.tempItem.y = pos.y;
    }
  }

  private createTempItem() {
    let mIndex = this.dragData["index"];
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
  }
  public getTempItemWorldPos() {
    if (!this.tempItem) {
      return cc.v2();
    }
    return this.tempItem.getParent().convertToWorldSpaceAR(this.tempItem.getPosition());
  }

  //获得拖拽对象的数据
  getDragData() {
    return this.dragData;
  }
}

export default DragManager.instance();
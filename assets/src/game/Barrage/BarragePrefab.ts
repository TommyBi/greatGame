import DataManager from "../../framework/manager/DataManager";
import MKUtils from "../../framework/tools/MkUtils";
import Utils from "../../framework/tools/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BarragePrefab extends cc.Component {

    @property(cc.Sprite)
    headIcon: cc.Sprite = null;
    @property(cc.Label)
    nameLabel: cc.Label = null;
    @property(cc.Label)
    moneyLabel: cc.Label = null;
    @property(cc.Label)
    descLb1: cc.Label = null;
    @property(cc.Label)
    descLb2: cc.Label = null;
    @property(cc.Node)
    bg: cc.Node = null;
    @property(cc.RichText)
    tipsLb: cc.RichText = null;

    onLoad() {
        // this.node.pauseSystemEvents(true);
        // let bg = this.node.getChildByName("mbg");
        // bg.pauseSystemEvents(true);
        // this.tipsLb.node.pauseSystemEvents(true);
    }
    setData() {
        let barrageData = DataManager.getJson("barrage");
        let data = barrageData[DataManager._barrageIndex];

        DataManager._barrageIndex++;
        if (DataManager._barrageIndex > barrageData.length) {
            DataManager._barrageIndex = 1;
        }

        // this.nameLabel.string = data["name"];
        // this.moneyLabel.string = data["money"] + "元";

        let num = Utils.getRandomNum(0, 110);
        let date = 0;
        let money = 0;
        if (num <= 5) {
            date = 10;
        } else if (num <= 15) {
            date = 5;
        } else if (num <= 30) {
            money = MKUtils.randomNMF(3, 5);
        } else if (num < 55) {
            money = MKUtils.randomNMF(1, 3);
        } else if (num <= 85) {
            money = MKUtils.randomNMF(0.5, 1);
        } else if (num > 85) {
            money = MKUtils.randomNMF(0.3, 0.5);
        }

        if (date != 0) {
            this.bg.width = 672;
            this.tipsLb.string = `<color=#000000>恭喜</c><color=#ff0000>${data["name"]}</c><color=#000000>成功将红包提现比例升至<color=#ff0000>${date}%</color>`;
        } else {
            this.bg.width = 480;
            this.tipsLb.string = `<color=#000000>恭喜</c><color=#ff0000>${data["name"]}</c><color=#000000>成功提现<color=#ff0000>${money.toFixed(2)}</c><color=#000000>元</color>`;
        }


        // MKUtils.loadSpriteFrame("texture/barrage/" + data["headshot"], function (spriteFrame) {  //
        //     if (spriteFrame) this.headIcon.spriteFrame = spriteFrame;
        // }.bind(this))
    }

    // private _eventManager = cc["internal"]["eventManager"];
    // private _touchListener: any;
    // InitTouch() {
    //     const EventListener = cc["EventListener"];
    //     this._touchListener = EventListener.create({
    //         event: EventListener.TOUCH_ONE_BY_ONE,
    //         swallowTouches: false,//是否吞噬touch事件
    //         owner: this.bg,
    //         mask: null,
    //         onTouchBegan: this.onTouchStart.bind(this),
    //         onTouchMoved: null,
    //         onTouchEnded: this.onTouchEnded.bind(this),
    //         onTouchCancelled: null,
    //     });
    //     this._eventManager.addListener(this._touchListener, this.bg);
    // }

    // private onTouchStart(touch: cc.Touch, event: cc.Event.EventTouch): boolean {
    //     cc.log("touch start");
    //     //此处必须返回true（表示接触到了节点）,否则TOUCH_MOVE,TOUCH_END,TOUCH_CANCEL不触发。
    //     return true;
    // }
    // private onTouchEnded(touch: cc.Touch, event: cc.Event.EventTouch): void {
    //     cc.log("touch end");
    //     // this.ClickCall(touch);
    // }
    // protected onDestroy(): void {
    //     // super.onDestroy();
    //     this._eventManager.removeListener(this._touchListener, this.node);
    // }
}

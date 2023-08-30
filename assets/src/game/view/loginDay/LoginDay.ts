// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import BasePanel from "../../../framework/ui/BasePanel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginDay extends BasePanel {

    @property(cc.Label)
    dayLb: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.init(true);
        this.scheduleOnce(() => {
            if (this.node.isValid) {
                this.onClose();
            }
        }, 3)
    }

    start() {
        let day = SDKManager.getLoginDays();
        this.dayLb.string = day + "";
    }
    onClose() {
        super.close();
    }

    // update (dt) {}
}

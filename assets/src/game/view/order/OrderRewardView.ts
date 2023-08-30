// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import BasePanel from "../../../framework/ui/BasePanel";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";

const { ccclass, property } = cc._decorator;


@ccclass
export default class OrderRewardView extends BasePanel {
    @property(cc.Label)
    addLb: cc.Label = null;

    @property(cc.Label)
    descLb: cc.Label = null;
    @property(cc.Label)
    baseLb: cc.Label = null;
    @property(cc.Label)
    rewardLb: cc.Label = null;
    @property(cc.Node)
    btnClose: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null;


    qualityNames = ["普通订单", "青铜订单", "白银订单", "黄金订单", "钻石订单", "星耀订单"]
    // LIFE-CYCLE CALLBACKS:
    mType = 0;//面板类型，0除虫奖励，1宝箱奖励
    mData;
    mData2;
    onLoad() {

    }

    protected onEnable(): void {
        // 关闭面板
        EventDispath.on(this.btnClose, this.onCloseHandle, this);
        EventDispath.on(this.btnOk, this.onClickHandle, this);

        this.initUi();

        if (PlayerModel.guideStep >= 0) {
            MKUtils.setNodeDelay(this.node, 0.5, () => {
                EventDispath.send(EventType.GUIDE_UPDATE)

            })
        }
    }

    startShow(): void {
        this.mData = this.inData[0];
        this.mData2 = this.inData[1];
    }
    initUi() {
        this.rewardLb.string = Number(this.mData.redBean).toFixed(2) + "元";

        // this.addLb.string = this.mData.addRedBean + "元";
        if (this.mData2.quality == 0) {
            this.baseLb.string = "20元";
            this.descLb.string = "新手订单加成 (0%)：";
            this.addLb.string = "0元";

        } else {
            this.baseLb.string = this.mData.beseRedBean + "元";
            this.addLb.string = this.mData.addRedBean + "元";

            this.descLb.string = this.qualityNames[this.mData2.quality - 1] + "加成 (" + ConfigManager.order_quality_add[this.mData2.quality - 1] + "%)：";
        }
    }
    onClickHandle() {
        PlayerModel.setMoney(this.mData.userRedBean, this.mData.redBean);
        let order = PlayerModel.getOrderList();
        order[0] = ConfigManager.getOrder();
        PlayerModel.setOrder();
        EventDispath.send(EventType.ORDER_UPDATE_LIST);
        EventDispath.send(EventType.ORDER_UPDATE_TOP);

        if (PlayerModel.guideStep >= 0) {
            EventDispath.send(EventType.GUIDE_UPDATE)
        }

        EventDispath.send(EventType.LEVEL_UPDATE);
        this.onCloseHandle();
    }

    onCloseHandle() {
        super.close();
    }

    getGuidePoint() {
        let p = this.btnOk.convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    }

    // update (dt) {}
}

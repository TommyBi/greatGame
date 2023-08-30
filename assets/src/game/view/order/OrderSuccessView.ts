// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SDKManager from "../../../framework/manager/SDKManager";
import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import BasePanel from "../../../framework/ui/BasePanel";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { OrderItem_Crop } from "./OrderItem";

const { ccclass, property } = cc._decorator;

/**
 *订单完成
 * TODO:
 */
@ccclass
export default class OrderSuccessView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_video_get: cc.Node = null;
    @property(cc.Node)
    btn_video_guide: cc.Node = null;
    @property(cc.Node)
    btn_video_help: cc.Node = null;
    @property(cc.Node)
    btn_get: cc.Node = null;
    @property(cc.Node)
    btn_wait: cc.Node = null;
    @property(cc.Node)
    descLb1: cc.Node = null;
    @property(cc.Node)
    descLb2: cc.Node = null;
    @property(cc.Label)
    addLb: cc.Label = null;
    @property(cc.Label)
    numLb: cc.Label = null;
    @property(cc.Label)
    descLvLb: cc.Label = null;
    @property([cc.Sprite])
    iconList: cc.Sprite[] = [];

    mData;
    sdkCfg;
    qualityNames = ["普通订单", "青铜订单", "白银订单", "黄金订单", "钻石订单", "星耀订单"]
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_video_guide, this.onGuide, this);
        EventDispath.on(this.btn_video_get, this.onVideoGet, this);
        EventDispath.on(this.btn_video_help, this.onVideoHelp, this);
        EventDispath.on(this.btn_get, this.onGet, this);
        EventDispath.on(this.btn_wait, this.onWait, this);

        EventDispath.addEventListener(EventType.SDK_REWARD_CONFIG, this.onRewardCfg, this);
        EventDispath.addEventListener(EventType.SDK_REWARD_LOST, this.onRewardLost, this);
        EventDispath.addEventListener(EventType.SDK_REWARD_GOT, this.onRewardGot, this);
        SDKManager.getOrderRewardConfig();

    }
    protected onLoad(): void {
    }
    onRewardCfg(data): void {
        this.sdkCfg = data;
        this.initUI();
    }

    startShow() {
        this.mData = PlayerModel.getCurrentOrder();
    }

    initUI() {
        if (PlayerModel.guideStep > 0) {
            this.descLvLb.string = "恭喜完成新手订单";
            this.btn_video_guide.active = true;
            // this.numLb.string =  this.sdkCfg.times;
            this.descLb2.active = true;
            MKUtils.setNodeDelay(this.node, 0.5, () => {
                EventDispath.send(EventType.GUIDE_UPDATE)
            })
            this.numLb.string = "0";

            this.addLb.string = "无加成";
        } else {
            if (!this.sdkCfg.mandatoryVideo) {

                this.btn_video_help.active = true;
                this.btn_get.active = true;
            } else {
                this.btn_video_get.active = true;
                this.btn_wait.active = true;

            }
            this.numLb.string = this.sdkCfg.times;
            if (this.sdkCfg.times == 0) {
                this.descLb2.active = true;
            } else {
                this.descLb1.active = true;
            }
            this.descLvLb.string = "恭喜完成" + this.qualityNames[this.mData.quality - 1];

            if (this.mData.quality == 1) {
                this.addLb.string = "无加成";
            } else {
                this.addLb.string = "+" + ConfigManager.order_quality_add[this.mData.quality - 1] + "%";
            }

            // this.addLb.string = ConfigManager.order_quality_add[this.mData.quality - 1] + "%";
        }

        if (this.mData.cropList.length < 3) {
            this.iconList[0].node.y = 20;
            this.iconList[1].node.y = 20;
        } else {
            this.iconList[0].node.y = 122;
            this.iconList[1].node.y = 122;
        }

        for (let i = 0; i < this.mData.cropList.length; i++) {
            this.iconList[i].node.active = true;
            MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.mData.cropList[i].cropId}`, (res) => {
                this.iconList[i].spriteFrame = res;
            });
        }

    }

    onGuide() {
        //引导领取奖励
        if (PlayerModel.guideStep >= 0) {
            EventDispath.send(EventType.GUIDE_Hide);
        }
        SDKManager.getRedPackReward(this.sdkCfg.configId, false)

    }
    onVideoGet() {
        //领取奖励
        if (PlayerModel.guideStep >= 0) {
            EventDispath.send(EventType.GUIDE_Hide);
        }
        SDKManager.getRedPackReward(this.sdkCfg.configId)
        PlayerModel.orderVideoNum = 0;

    }
    onVideoHelp() {
        //助力领取
        SDKManager.getRedPackReward(this.sdkCfg.configId, true)
        PlayerModel.orderVideoNum = 0;
    }
    onGet() {
        //普通领取
        SDKManager.getRedPackReward(this.sdkCfg.configId, false)
        PlayerModel.orderVideoNum = 0;
    }
    onWait() {
        //稍后领取
        this.onBtnCloseHandle();
    }
    onRewardLost() {
        this.onBtnCloseHandle();
    }
    onRewardGot(data) {
        let list = this.mData.cropList
        for (let i = 0; i < list.length; i++) {
            console.log("====", list);
            PlayerModel.orderReduceCrop(list[i].cropId, list[i].target);
        }
        EventDispath.send(EventType.UPDATE_SHELVE_ORDER);
        UIMananger.showPanel(UIType.orderRewardView, null, null, UIEffectType.SCALE, data, this.mData);
        this.onBtnCloseHandle();
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
    getGuidePoint() {
        let p = this.btn_video_get.convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    }
}

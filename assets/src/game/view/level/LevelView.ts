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
import SortUtils from "../../../framework/tools/SortUtils";
import Utils from "../../../framework/tools/Utils";
import BasePanel from "../../../framework/ui/BasePanel";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import AVirtualScrollView from "../task/AVirtualScrollView";

const { ccclass, property } = cc._decorator;

/**
 * 升级界面
 * TODO:
 * initPropHasList这个方法可以移至更早的登录初始化环节
 */
@ccclass
export default class LevelView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Label)
    titleLb: cc.Label = null;
    @property(cc.Label)
    moneyLb: cc.Label = null;
    @property(cc.RichText)
    descLb1: cc.RichText = null;
    @property(cc.RichText)
    descLb2: cc.RichText = null;

    @property(AVirtualScrollView)
    scroller: AVirtualScrollView = null;

    mData;
    scrollerData = [];
    currentItemData;
    nextItemData;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath.addEventListener(EventType.LEVEL_UPDATE, this.updateData, this);
        this.initUI();
    }
    protected onLoad(): void {

    }
    protected start(): void {
    }

    startShow() {
        this.mData = SDKManager.getBazaarLevelInfo();

        this.scrollerData = this.mData.jsTaskInfos;
    }

    updateData() {
        this.mData = SDKManager.getBazaarLevelInfo();
        
        this.scrollerData = this.mData.jsTaskInfos;
        this.initUI();
        UIMananger.showPanel(UIType.levelPopView, null, null, UIEffectType.SCALE, { currentData: this.currentItemData, nextData: this.nextItemData })
    }
    initUI() {
        this.titleLb.string = `集市${this.mData.jsLevel}级`
        this.moneyLb.string = this.mData.jsAmount + "元";
        if (this.mData.jsAmount >= 500) {
            this.descLb1.string = "<color=#708FCC>本次活动已结束，现已为您升级为</c><color=#ED522B>5%红包提现比例</color>"
        } else {
            this.descLb1.string = "<color=#708FCC>每满</c><color=#ED522B>500元<color=#708FCC>后自动打款至微信钱包</color>"
        }

        let num = 0;
        let isFirst = 1;
        for (let i = 0; i < this.scrollerData.length; i++) {
            let data = this.scrollerData[i];
            data.userOrderNum = this.mData.userOrderNum;

            if (data.userOrderNum >= data.orderNum) {
                this.scrollerData[i]["isFirst"] = isFirst;
                if (isFirst) {
                    this.currentItemData = this.scrollerData[i];
                    if (this.scrollerData[i + 1]) this.nextItemData = this.scrollerData[i + 1]
                }
                isFirst = 0;
            }

            num += data.amount;
        }

        this.descLb2.string = `<color=#708FCC>等级越高，奖励越高，累计可得</c><color=#ED522B>${1120}<color=#708FCC>元</color>`

        this.scroller.refreshData(this.scrollerData);
    }


    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

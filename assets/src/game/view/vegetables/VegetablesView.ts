// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import BasePanel from "../../../framework/ui/BasePanel";
import { crop_config } from "../../consts/CConst";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import AVirtualScrollView from "../task/AVirtualScrollView";
import VegetablesItem from "./VegetablesItem";

const { ccclass, property } = cc._decorator;

/**
 * 种菜界面
 * TODO:
 * 1、未解锁的图标显示的形式是蒙灰的效果还是加个锁子的效果；
 * 2、种菜界面的文档介绍要求点击解锁的是直接购买，但在详情界面是有已经解锁的蔬菜界面，同时点击详情界面的也可以购买，这里两段文档似乎有些冲突，目前处理方式是都弹详情，在详情中完成购买操作
 */
@ccclass
export default class VegetablesView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null
    @property(cc.Node)
    btn_lvUp: cc.Node = null

    @property(AVirtualScrollView)
    scroller: AVirtualScrollView = null;

    @property(cc.Prefab)
    VegetablesItem: cc.Prefab = null;

    haveCropIds = [];

    scrollerData: any[];
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);
        // 购买成功
        EventDispath.addEventListener(EventType.CROP_PLANT, this.onBtnCloseHandle, this);
        //土地升级
        EventDispath.on(this.btn_lvUp, this.onOpenLvUp, this);

        EventDispath.addEventListener(EventType.VEGETABLES_UPDATE, this.initUI, this);


        this.scroller.node.active = false;
        // MKUtils.setNodeDelay(this.node, 0.1, this.initUI.bind(this))
        this.initUI();

    }
    onDisable(): void {
    }

    on_Show(args: any): void {
        // this.initUI();
        // // MKUtils.setNodeDelay(this.node, 0.1, this.initUI.bind(this))
        super.on_Show(args);
    }
    protected start(): void {
        if (PlayerModel.guideStep >= 0) {
            MKUtils.setNodeDelay(this.node, 0.5, () => {
                EventDispath.send(EventType.GUIDE_UPDATE)

            })
        }
    }

    initUI() {
        this.scrollerData = [];
        this.scrollerData = ConfigManager.crop.slice(1);
        // 库存
        this.haveCropIds = PlayerModel.getUnlockCrop();
        this.haveCropIds.sort((a, b) => {
            return a - b;
        })
        let hotIndex = 0;

        for (let i = 0; i < this.scrollerData.length; i++) {
            let cfg = this.scrollerData[i];
            let isLock = this.haveCropIds.indexOf(cfg.id) == -1;
            let isOrder = this.checkInOrder(cfg.id);
            let data = { isLock: isLock, isOrder: isOrder };
            if (isOrder) hotIndex = i;
            for (let key in data) {
                cfg[key] = data[key];
            }
            // let item = cc.instantiate(this.VegetablesItem);
            // if (item) {
            // if (i == 0) this.guideItem = item;//引导item
            // this.uScrollView.content.addChild(item);
            // }

        }

        this.scroller.refreshData(this.scrollerData);

        this.scroller.scrollToTop();
        MKUtils.setNodeDelay(this.node, 0.1, () => {
            this.scroller.node.active = true;
        })
        // if (hotIndex > 12) {
        //     this.scroller.scrollTo(cc.v2(0, 0))
        // }

    }
    //检测是否在订单中
    checkInOrder(id) {
        if (PlayerModel.haveOrder()) {
            let orderList = PlayerModel.getCurrentOrder().cropList;
            let arr = orderList.filter((data) => {
                return data.cropId == id;
            })
            if (arr.length > 0) return true;
        }

        return false;
    }

    onOpenLvUp() {
        //打开集市管理页面
        UIMananger.showPanel(UIType.LvUpView, null, null, UIEffectType.SCALE, 1);
        this.onBtnCloseHandle();
    }


    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        EventDispath.send(EventType.VEGETABLE_CLOSE)
        super.close();
    }

    getGuidePoint() {
        let p = this.scroller.getItemByIndex(0).convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    }
    getGuidePoint1() {
        let p = this.scroller.getItemByIndex(1).convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    }

}

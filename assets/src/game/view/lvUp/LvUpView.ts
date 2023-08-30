// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import BasePanel from "../../../framework/ui/BasePanel";
import { levelUp_config, propType } from "../../consts/CConst";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import AVirtualScrollView from "../task/AVirtualScrollView";

const { ccclass, property } = cc._decorator;
export interface Lvup_Type {
    tabIndex,
    index,
    level,
    id,
    name,
    addDesc,
    type,
    isMaxLv
}
/**
 * 升级界面
 * TODO:
 * initPropHasList这个方法可以移至更早的登录初始化环节
 */
@ccclass
export default class LvUpView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.ToggleContainer)
    tabBtn: cc.ToggleContainer = null;

    @property(AVirtualScrollView)
    scroller: AVirtualScrollView = null;

    @property(cc.Node)
    toggleLb1_1: cc.Node = null;
    @property(cc.Node)
    toggleLb1_2: cc.Node = null;
    @property(cc.Node)
    toggleLb2_1: cc.Node = null;
    @property(cc.Node)
    toggleLb2_2: cc.Node = null;
    @property(cc.Node)
    toggleLb3_1: cc.Node = null;
    @property(cc.Node)
    toggleLb3_2: cc.Node = null;

    fieldList: any[] = [];
    shelveList: any[] = [];
    propList: any[] = [];

    mTab = "1";
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        // 使用成功
        EventDispath.addEventListener(EventType.LVUP_UPDATE, this.onUpdate, this);

        this.tabBtn.toggleItems[Number(this.mTab)-1].isChecked =true
        this.onUpdate();
        this.changeTab();
        this.changeData();
    }
    onTab(toggle: cc.Toggle) {
        if (toggle.checkEvents.length > 0) {
            let item = toggle.checkEvents[0];
            this.mTab = item.customEventData;

        }
        this.changeTab();
        this.changeData();

    }
    changeTab() {
        if (this.mTab == "1") {
            this.toggleLb1_1.active = true;
            this.toggleLb1_2.active = false;

            this.toggleLb2_1.active = false;
            this.toggleLb2_2.active = true;

            this.toggleLb3_1.active = false;
            this.toggleLb3_2.active = true
        } else if (this.mTab == "2") {

            this.toggleLb1_1.active = false;
            this.toggleLb1_2.active = true;

            this.toggleLb2_1.active = true;
            this.toggleLb2_2.active = false;

            this.toggleLb3_1.active = false;
            this.toggleLb3_2.active = true;
        } else if (this.mTab == "3") {
            this.toggleLb1_1.active = false;
            this.toggleLb1_2.active = true;

            this.toggleLb3_1.active = true;
            this.toggleLb3_2.active = false;

            this.toggleLb2_1.active = false;
            this.toggleLb2_2.active = true;
        }
    }
    changeData() {
        this.scroller.clearItem();
        if (this.mTab == "1") {
            if (this.fieldList.length == 0) this.updateList();
            this.scroller.refreshData(this.fieldList);
        } else if (this.mTab == "2") {
            if (this.shelveList.length == 0) this.getShleveData()
            this.scroller.refreshData(this.shelveList);
        } else if (this.mTab == "3") {
            if (this.propList.length == 0) this.getPropData()
            this.scroller.refreshData(this.propList);
        }
        this.scroller.scrollToTop();
    }
    startShow() {
        this.fieldList = [];
        this.shelveList = [];
        this.propList = [];
        this.mTab = this.inData[0];
    }

    onUpdate() {
        // this.tabBtn.sec
        if (this.mTab == "1") {
            this.updateList();
        } else if (this.mTab == "2") {
            this.getShleveData();
        } else {
            this.getPropData();
        }
        this.changeData();
    }
    getShleveData() {
        this.shelveList = [];
        let list2 = PlayerModel.getUIConfig().shelvesList;
        for (let i = 0; i < list2.length; i++) {
            let level = list2[i];
            let type = 2 + `${i + 1}`;
            let baseCfg = ConfigManager.getShelveByType(type, level);
            if (level == 0) baseCfg = ConfigManager.getShelveByType(type, 1);
            let maxLv = ConfigManager.getShelveMaxLv(type);
            let isMaxLv = level == maxLv;
            let cfg: Lvup_Type = { tabIndex: 2, index: i, level: level, id: i + 1, type: type, name: baseCfg.name, addDesc: baseCfg.add_desc, isMaxLv: isMaxLv }
            this.shelveList.push(cfg);
        }
    }
    getPropData() {

        this.propList = [];
        let uicfg = PlayerModel.getUIConfig();
        let cashierCfg = ConfigManager.getPropById(propType.cashier, uicfg.cashierlv);
        let maxLv = ConfigManager.getPropMaxLv(propType.cashier);
        let isMaxLv = uicfg.cashierlv == maxLv;
        this.propList.push({ tabIndex: 3, index: 0, level: uicfg.cashierlv, id: uicfg.cashierlv, type: propType.cashier, name: cashierCfg.name, addDesc: cashierCfg.add_desc, isMaxLv: isMaxLv })

        let pipeCfg = ConfigManager.getPropById(propType.pipe, uicfg.pipelv);
        maxLv = ConfigManager.getPropMaxLv(propType.pipe);
        isMaxLv = uicfg.pipelv == maxLv;
        this.propList.push({ tabIndex: 4, index: 1, level: uicfg.pipelv, id: uicfg.pipelv, type: propType.pipe, name: pipeCfg.name, addDesc: pipeCfg.add_desc, isMaxLv: isMaxLv })

        let wallCfg = ConfigManager.getPropById(propType.wall, uicfg.walllv);
        maxLv = ConfigManager.getPropMaxLv(propType.wall);
        isMaxLv = uicfg.walllv == maxLv;
        this.propList.push({ tabIndex: 5, index: 2, level: uicfg.walllv, id: uicfg.walllv, type: propType.wall, name: wallCfg.name, addDesc: wallCfg.add_desc, isMaxLv: isMaxLv })

        let roadCfg = ConfigManager.getPropById(propType.road, uicfg.roadlv);
        maxLv = ConfigManager.getPropMaxLv(propType.road);
        isMaxLv = uicfg.roadlv == maxLv;
        this.propList.push({ tabIndex: 6, index: 3, level: uicfg.roadlv, id: uicfg.roadlv, type: propType.road, name: roadCfg.name, addDesc: roadCfg.add_desc, isMaxLv: isMaxLv })

        let scarecrowCfg = ConfigManager.getPropById(propType.scarecrow, uicfg.scarecrowlv);
        maxLv = ConfigManager.getPropMaxLv(propType.scarecrow);
        isMaxLv = uicfg.scarecrowlv == maxLv;
        this.propList.push({ tabIndex: 7, index: 4, level: uicfg.scarecrowlv, id: uicfg.scarecrowlv, type: propType.scarecrow, name: scarecrowCfg.name, addDesc: scarecrowCfg.add_desc, isMaxLv: isMaxLv })

        let warehouseCfg = ConfigManager.getPropById(propType.warehouse, uicfg.warehouselv);
        maxLv = ConfigManager.getPropMaxLv(propType.warehouse);
        isMaxLv = uicfg.warehouselv == maxLv;
        this.propList.push({ tabIndex: 8, index: 5, level: uicfg.warehouselv, id: uicfg.warehouselv, type: propType.warehouse, name: warehouseCfg.name, addDesc: warehouseCfg.add_desc, isMaxLv: isMaxLv })

        let fenceCfg = ConfigManager.getPropById(propType.fence, uicfg.fencelv);
        maxLv = ConfigManager.getPropMaxLv(propType.fence);
        isMaxLv = uicfg.fencelv == maxLv;
        this.propList.push({ tabIndex: 9, index: 6, level: uicfg.fencelv, id: uicfg.fencelv, type: propType.fence, name: fenceCfg.name, addDesc: fenceCfg.add_desc, isMaxLv: isMaxLv })
    }
    /** 重新加载列表中的显示条目 */
    private updateList(): void {
        this.fieldList = [];
        let list1 = PlayerModel.getFieldListCfg();
        for (let i = 0; i < list1.length; i++) {
            let data = list1[i];
            let baseCfg = ConfigManager.getFieldCfgByType(data.type, data.level);
            if (data.level == 0) baseCfg = ConfigManager.getFieldCfgByType(data.type, 1);
            let maxLv = ConfigManager.getFieldMaxLv(data.type);
            let isMaxLv = data.level == maxLv;
            let cfg: Lvup_Type = { tabIndex: 1, index: i, level: data.level, id: data.id, type: data.type, name: baseCfg.name, addDesc: baseCfg.add_desc, isMaxLv: isMaxLv }
            this.fieldList.push(cfg);
        }

    }

    protected update(dt: number): void {
        // let offset = this.uScrollView.getScrollOffset();
        // let height = this.uScrollView.content.height;
        // for (let i = 0; i < this.uScrollView.content.children.length; i++) {
        //     let node = this.uScrollView.content.children[i];
        //     if (node.y <= height - offset.y + 200 && node.y >= height - offset.y - 1280 - 200) {
        //         node.opacity = 255;
        //     } else {
        //         node.opacity = 0;
        //     }
        // }
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        // this.uScrollView.content.removeAllChildren(true);
        super.close();
    }
    guideItem: cc.Node;
    getGuidePoint() {
        // let p = this.guideItem.getComponent(LvUpItem1).getGuidePoint();
        // return p;
    }
}

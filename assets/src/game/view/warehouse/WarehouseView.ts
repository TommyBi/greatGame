// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventDispath from "../../../framework/message/EventDispath";
import BasePanel from "../../../framework/ui/BasePanel";
import { propType } from "../../consts/CConst";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import AVirtualScrollView from "../task/AVirtualScrollView";

const { ccclass, property } = cc._decorator;

/**
 * 仓库界面
 */
@ccclass
export default class WarehouseView extends BasePanel {

    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(AVirtualScrollView)
    uScrollView: AVirtualScrollView = null;
    @property(cc.Label)
    ulabelCount: cc.Label = null;
    @property(cc.Label)
    ulabelMax: cc.Label = null;
    @property(cc.Label)
    proLb: cc.Label = null;
    @property(cc.Node)
    ulabelEmpty: cc.Node = null;
    @property(cc.ProgressBar)
    uBar: cc.ProgressBar = null;

    wareLv: number = 1;         // 仓库id
    wareCropList: any[] = [];    // 仓库中仍然还有的作物

    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);
        this.initUI();
    }
    onDisable(): void {
    }

    startShow() {
    }

    initUI() {
        this.wareCropList = [];
        // 拉取仓库中的作物数据（剔除掉了库存为0的作物）
        let warehouseCropInfo = PlayerModel.getWarerHouseCfg();
        this.wareCropList = warehouseCropInfo.cropList.filter(x => {
            return x.num > 0;
        })
        this.ulabelEmpty.active = !Boolean(this.wareCropList.length > 0);


        this.uScrollView.refreshData(this.wareCropList);

        this.uScrollView.scrollToTop();
        // 持仓
        let total = 0;
        this.wareCropList.map(x => {
            total += x.num;
        })
        this.ulabelCount.string = `${total}`;

        // TODO:仓库上限
        let max = this.getCurWareHouseCountMax();
        this.ulabelMax.string = `/${max}`;

        // TODO:进度
        this.uBar.progress = total / max;

        this.proLb.string = Math.floor(total / max*100) + "%";
    }

    /** 获取仓库存储上限 */
    private getCurWareHouseCountMax(): number {
        this.wareLv = PlayerModel.getUIConfig().warehouselv;
        let arr = ConfigManager.prop.filter((x) => {
            return x.id == Number(propType.warehouse + `0${this.wareLv}`);
        })
        let cfg = arr[0];
        return cfg.add_num;
    }

    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

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
import { propType } from "../../consts/CConst";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { OrderItem_Crop } from "./OrderItem";

const { ccclass, property } = cc._decorator;

/**
 *获取XX
 * TODO:
 */
@ccclass
export default class GetCropView extends BasePanel {

    @property(cc.Sprite)
    icon: cc.Sprite = null;
    @property(cc.Node)
    btn_close: cc.Node = null;
    @property(cc.Node)
    btn_plant: cc.Node = null;
    @property(cc.Node)
    btn_video: cc.Node = null;
    @property(cc.Label)
    descLb1: cc.Label = null;
    @property(cc.Label)
    descLb2: cc.Label = null;
    @property(cc.Label)
    proLb: cc.Label = null;
    @property(cc.Label)
    nameLb: cc.Label = null;
    @property(cc.Label)
    titleLb: cc.Label = null;
    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;

    mData;
    onEnable(): void {
        // 退出
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);

        EventDispath.on(this.btn_plant, this.onPlant, this);
        EventDispath.on(this.btn_video, this.onVideo, this);

        EventDispath.addEventListener(EventType.GET_CROP_CLOSE, this.onBtnCloseHandle, this);
        this.initUI();
    }
    protected onLoad(): void {
    }
    protected start(): void {
    }

    startShow() {
        this.mData = this.inData[0];
    }

    initUI() {
        let base = ConfigManager.getCropById(this.mData.cropId);
        this.titleLb.string = "获取" + base.name;
        this.nameLb.string = base.name;

        this.proLb.string = this.mData.num + "/" + this.mData.target;
        this.pro.progress = this.mData.num / this.mData.target;
        this.descLb1.string = `1.土地中种植${base.name}等待收获`
        this.descLb2.string = `2.观看视频快速获取${base.name} ×4`;

        MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.mData.cropId}`, (res) => {
            this.icon.spriteFrame = res;
        });

    }

    onPlant() {
        EventDispath.send(EventType.CROP_PLANT_GET, this.mData.cropId);
    }
    onVideo() {
        if (this.checkHouseMax(4)) {
            MKUtils.alertTips("仓库放不下了，快点卖出作物赚钱吧")
            return;
        }
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager.showAd(Global.VIDEO_CONFIG.video7)
    }
    onVideoBack() {
        PlayerModel.setHouseAddCrop(this.mData.cropId, 4);
        UIMananger.showPanel(UIType.PopGetCropView, null, null, UIEffectType.SCALE, { id: this.mData.cropId, num: 4 })
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onVideoBack, this);
        this.onBtnCloseHandle();
    }
    //检测仓库是否达到上限
    checkHouseMax(value) {
        let lv = PlayerModel.getUIConfig().warehouselv;
        // let arr = ConfigManager.prop.filter((value) => {
        //     return value.id == Number(propType.warehouse + `0${id}`);
        // })
        let cfg = ConfigManager.getPropById(propType.warehouse, lv);
        let currentNum = PlayerModel.getCurrentPutNum();
        if ((cfg.add_num - currentNum) < value) return true;
        return false;
    }
    /** 仅用于关闭操作 */
    onBtnCloseHandle() {
        super.close();
    }
}

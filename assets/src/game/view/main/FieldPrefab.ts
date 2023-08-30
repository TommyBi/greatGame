// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import JSHelper from "../../../framework/helper/JSHelper";
import SDKManager from "../../../framework/manager/SDKManager";
import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import ComponentHelper from "../../../framework/tools/ComponentHelper";
import MKUtils from "../../../framework/tools/MkUtils";
import Utils from "../../../framework/tools/Utils";
import { propType } from "../../consts/CConst";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import EffectManager from "../../manager/EffectManager";
import { PopType } from "../popView/PopView1";

const { ccclass, property } = cc._decorator;

export interface FieldConfig {
    id: number,//地块皮肤ID
    type: number, //地块类型
    state: number,//地块状态，0未解锁，1解锁
    cropState: number,//植物状态，0闲置，1种子，2幼苗，3成熟,4可卖出
    cropId: number,//种植作物ID
    lastTime: number,//剩余成熟时间
    level: number, // 地块等级
}

export enum CropState {
    EMPTY,//0闲置
    SEEDING,//种植中
    PEST,//害虫
    RIPE,//可收获
}

@ccclass
export default class FieldPrefab extends cc.Component {

    @property(cc.Sprite)
    bg: cc.Sprite = null;
    @property(cc.Node)
    buildTips: cc.Node = null;
    @property(cc.Sprite)
    crop: cc.Sprite = null;

    @property(cc.Node)
    qipao: cc.Node = null;
    @property(cc.Node)
    qpJs: cc.Node = null;
    @property(cc.Sprite)
    qipaoIcon: cc.Sprite = null;
    @property(cc.Label)
    qipaoDesc: cc.Label = null;
    @property(cc.Label)
    qpJsLb: cc.Label = null;

    @property(cc.Label)
    tipsLb: cc.Label = null;
    @property(cc.Node)
    getTips: cc.Node = null;
    @property(cc.Label)
    getTipsLb: cc.Label = null;
    @property(cc.Sprite)
    getIcon: cc.Sprite = null;

    @property(cc.ProgressBar)
    timePro: cc.ProgressBar = null;
    @property(cc.Node)
    proBg: cc.Node = null;
    @property(cc.Sprite)
    pro: cc.Sprite = null;
    @property(cc.Label)
    timeLb: cc.Label = null;
    @property(sp.Skeleton)
    lvUpEff: sp.Skeleton = null;
    @property(sp.Skeleton)
    changeSkinEff: sp.Skeleton = null;
    @property(sp.Skeleton)
    haichong: sp.Skeleton = null;
    @property(sp.Skeleton)
    chuchong: sp.Skeleton = null;
    @property([cc.SpriteFrame])
    qipaoFrame: cc.SpriteFrame[] = [];

    config: FieldConfig = {
        id: 0,
        type: 0,
        state: 0,
        cropState: 0,
        cropId: 0,
        lastTime: 0,
        level: 1,
    }
    interval = 0;
    currentCropState = CropState.EMPTY;
    isAddSpeed = false;//是否加速中
    addSpeedTime = 3;
    one_speed = 1;
    addSpeedPro = 0;
    mIndex = -1;
    saveDataTime = 0;//几秒保存一次数据
    totalTime = 0;//成熟所需总时间


    thisPoint;
    onLoad() {
        this.buildTips.active = false;
        this.lvUpEff.node.active = false;
        this.changeSkinEff.node.active = false;

        this.thisPoint = this.node;
    }
    start() {

    }
    protected onEnable(): void {
        EventDispath.on(this.qipao, this.onQipaoClick, this, 0, false);
        EventDispath.on(this.buildTips, this.onBuild, this, 0, false);

        EventDispath.addEventListener(EventType.CROP_ADD_SPEED, this.addSpeed, this);
        EventDispath.addEventListener(EventType.FIELD_BUILD, this.onBuildBack, this);
    }

    onBuild() {
        //弹出场景元素信息面板
        // this.buildTips.active = false;
        // this.config = {
        //     id: this.config.id,
        //     type: this.config.type,
        //     state: 1,
        //     cropState: 0,
        //     cropId: 0,
        //     lastTime: 0,
        //     level: 1,
        // }

        // PlayerModel.changeFieldSkin(this.mIndex, 1)
        // this.changeState(CropState.EMPTY);
        // this.changeSkin();
        // MKUtils.setNodeDelay(this.node, 1, () => {
        //     this.qipaoAnim();
        // })
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.selectBack, this);
        // let id = this.config.id + "01"
        // SDKManager.getUnlockConfig(7, Number(id));
        UIMananger.showPanel(UIType.popView1, null, () => {
            EventDispath.removeByEvent(EventType.VIDEO_BACK, this.selectBack, this);
        }, UIEffectType.SCALE, PopType.FIELD);
    }
    selectBack() {
        MKUtils.alertTips("扩建土地成功")
        this.buildTips.active = false;
        PlayerModel.changeFieldSkin(this.mIndex, 1)
        this.changeSkin();
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.selectBack, this);
        // UIMananger.showPanel(UIType.GoodsInfoView, null, null, UIEffectType.SCALE, { selectType: LVUP_TYPE.FIELD, id: id, amount: data.amount });
    }
    onBuildBack(index) {
        if (this.mIndex == index) this.selectBack();
    }

    protected update(dt: number): void {
        if (this.config.lastTime > 0 && this.config.cropState < 2 && this.config.cropState > 0 && !this.isAddSpeed) {
            this.interval++;
            if (this.interval >= 70) {
                this.saveDataTime++;
                this.config.lastTime--;

                this.proBg.active = true;
                this.pro.fillRange = (this.totalTime - this.config.lastTime) / this.totalTime;

                // if (this.config.lastTime <= 0) {
                //     this.proBg.active = false;
                //     this.timeLb.node.active = false;
                // }
                ComponentHelper.labelTimeFormat(this.timeLb.node, this.config.lastTime);
                this.interval = 0;
                // if ((this.totalTime - this.config.lastTime) < this.totalTime) {
                // if (this.currentCropState != CropState.SEEDING) {
                //     this.currentCropState = CropState.SEEDING;
                //     this.changeState(CropState.SEEDING)
                // }

                // } else 
                if (this.config.lastTime <= 1) {
                    if (this.currentCropState != CropState.RIPE) {
                        PlayerModel.setCropRipetimes();
                        this.checkHaichogn();
                    }
                }
            }
            if (this.saveDataTime >= 3) {
                this.saveDataTime=0;
                PlayerModel.saveData();
            }
        } else {
                if (this.isAddSpeed) {
                    this.addSpeedPro += dt;
                    // this.timePro.progress = (this.totalTime - this.addSpeedTime) / this.totalTime;
                    this.pro.fillRange = (this.totalTime - this.addSpeedTime) / this.totalTime;
                    this.addSpeedTime -= this.one_speed
                    if (this.addSpeedTime < 0) this.addSpeedTime = 0;
                    ComponentHelper.labelTimeFormat(this.timeLb.node, this.addSpeedTime);
                    if (this.totalTime - this.addSpeedTime >= this.totalTime) {
                        this.isAddSpeed = false;
                        if (this.currentCropState != CropState.RIPE && this.config.lastTime <= 0) {
                            PlayerModel.setCropRipetimes();
                            this.checkHaichogn();
                        }
                        this.addSpeedPro = 0;
                    }
                }
        }
    }
    //成熟检测是否有害虫
    checkHaichogn() {
        if (PlayerModel.getCropRipetimes() >= 9 && PlayerModel.pestNum < 2) {
            let addCfg = ConfigManager.getPropById(propType.scarecrow, PlayerModel.getUIConfig().scarecrowlv)
            let rate = addCfg.add_num;
            let random = MKUtils.randomNMF(0, 100)
            if (random < rate) {
                PlayerModel.pestNum++;
                this.currentCropState = CropState.PEST;
                this.changeState(CropState.PEST)
            } else {
                this.currentCropState = CropState.RIPE;
                this.changeState(CropState.RIPE)
            }
        } else {
            this.currentCropState = CropState.RIPE;
            this.changeState(CropState.RIPE)
        }
    }

    setData(index) {
        this.mIndex = index;
        this.changeSkin(0);
        // if (!PlayerModel.guideState && index == 0) {
        //     EventDispath.addEventListener(EventType.CROP_PLANT, this.onPlant, this);
        // }
    }

    changeSkin(isLvUp = 1) {
        let cfg = PlayerModel.getFieldListCfg()[this.mIndex];
        this.config = cfg;

        if (this.config.cropId != 0) {

            if (Global.isCeshi_version) this.totalTime = 5;
            else this.getPlantTime();
        }

        if (isLvUp == 0 && this.config.cropState == CropState.SEEDING) {
            let offlineTime = PlayerModel.offlineLastTimestamp;
            let currentTime = Math.floor(new Date().getTime() / 1000);
            let time = currentTime - offlineTime;
            if (this.config.lastTime > time) {
                this.config.lastTime -= time;
            } else {
                this.config.lastTime = 0;
                // this.changeState(CropState.RIPE);

                this.config.cropState = CropState.RIPE;
            }
        }

        this.currentCropState = this.config.cropState;
        if (this.config.state > 0) {
            this.buildTips.active = false;
            // if (this.config.lastTime < 0) {
            //     this.config.cropState = CropState.RIPE;
            // }
            let cState = this.config.cropState;
            this.changeState(cState);
            this.qipaoAnim();

        } else {
            this.qipao.active = false;
            this.buildTips.active = true;
        }

        if (cfg.level == 0) return;
        MKUtils.loadSpriteFrame("texture/prop/field/" + `0${cfg.level}`, (res) => {
            this.bg.spriteFrame = res;
            if (isLvUp) {
                this.changeSkinEff.node.active = true;
                this.changeSkinEff.animation = "animation";
            }
        });
    }
    //切换状态
    changeState(cState) {
        this.config.cropState = cState;
        this.crop.node.active = true;
        this.crop.node.stopAllActions();
        this.qipao.active = true;

        this.qpJs.active = false;
        this.qipaoIcon.node.active = true;

        if (cState != CropState.EMPTY) {
            MKUtils.loadSpriteFrame("texture/crop/singleIcon/" + `${this.config.cropId}`, (res) => {
                this.getIcon.spriteFrame = res;
            });
        }
        this.timeLb.node.active = false;
        this.proBg.active = false;
        this.pro.fillRange = 0;
        if (cState == CropState.EMPTY) {
            this.crop.node.active = false;
            this.timePro.node.active = false;
            this.proBg.active = false;
            this.qipaoIcon.spriteFrame = this.qipaoFrame[0];
            this.qipaoDesc.string = "种植"
        } else if (cState == CropState.SEEDING) {
            MKUtils.loadSpriteFrame("texture/crop/ripe/" + `${this.config.cropId}`, (res) => {
                this.crop.spriteFrame = res;
            });
            // ComponentHelper.setHeartAction(this.crop.node, 1, false, 1.03);
            this.qipaoIcon.node.active = false;
            this.qpJs.active = true;
            this.qpJsLb.string = ConfigManager.add_speed_gold + "";
            this.qipaoDesc.string = "加速"

            this.timeLb.node.active = true;
            this.proBg.active = true;
        } else if (cState == CropState.RIPE) {

            JSHelper.playEffect("crop_ripe");
            MKUtils.loadSpriteFrame("texture/crop/ripe/" + `${this.config.cropId}`, (res) => {
                this.crop.spriteFrame = res;
            });
            MKUtils.loadSpriteFrame("texture/crop/singleIcon/" + `${this.config.cropId}`, (res) => {
                this.qipaoIcon.spriteFrame = res;
            });

            this.timePro.node.active = false;
            this.proBg.active = false;
            this.qipaoDesc.string = "收获"
        } else if (cState == CropState.PEST) {
            this.qipaoIcon.spriteFrame = this.qipaoFrame[1];
            JSHelper.playEffect("crop_ripe");
            MKUtils.loadSpriteFrame("texture/crop/ripe/" + `${this.config.cropId}`, (res) => {
                this.crop.spriteFrame = res;
            });
            this.timePro.node.active = false;
            this.proBg.active = false;
            this.qipaoDesc.string = "除虫"

            this.haichong.node.active = true;
            this.haichong.animation = "haichong";
            this.haichong.timeScale = 0.6;
        }
        //第一版bug修改注释升级效果
        // if (cState != CropState.EMPTY) {
        //     this.lvUpEff.node.active = true;
        //     this.lvUpEff.animation = "shengji";
        // }
        PlayerModel.saveUiData();

    }
    //气泡点击
    onQipaoClick() {
        if (this.isAddSpeed) return;
        switch (this.config.cropState) {
            case 0://种植
                if (PlayerModel.guideStep >= 0) {
                    EventDispath.send(EventType.GUIDE_Hide);
                }
                //打开作物面板，选择作物
                EventDispath.addEventListener(EventType.CROP_PLANT, this.onPlant, this);
                EventDispath.addEventListener(EventType.VEGETABLE_CLOSE, this.onVrgetableClose, this)
                UIMananger.showPanel(UIType.VegetablesView,null,null,null);
                break;
            case 1://加速
                if (this.checkGold()) {
                    // EventDispath.send(EventType.JX_SC, { type: 1, point: this.thisPoint });
                    // EventDispath.addEventListener(EventType.JIASU, this.onJiasu, this);
                    this.onJiasu();
                }
                break;
            case 2://除虫
                UIMananger.showPanel(UIType.clearPestView, null, null, UIEffectType.SCALE, this.thisPoint, this.config)

                EventDispath.addEventListener(EventType.CLEAR_PEST_CLOSE, this.closePest, this);
                EventDispath.addEventListener(EventType.SHACHONG, this.onShachong, this);
                break;
            case 3://收获
                if (PlayerModel.guideStep >= 0) {
                    EventDispath.send(EventType.GUIDE_Hide);
                    EventDispath.send(EventType.MAIN_LOCK, true);
                }
                this.checkGetCrop();
                break;
            default:
                break;
        }
    }
    //种植
    onPlant(id) {
        EventDispath.removeByEvent(EventType.CROP_PLANT, this.onPlant, this);
        console.log("种植id：", id);
        // SDKManager.onEvent(Global.EVENT_ACTION.client_seed)

        PlayerModel.setPlantNumById(id);

        this.config.cropId = id;
        this.config.cropState = 1;

        if (Global.isCeshi_version) this.totalTime = 5;
        else this.getPlantTime();
        this.config.lastTime = this.totalTime;

        PlayerModel.saveUiData();
        MKUtils.setNodeDelay(this.node, 0.1, () => {
            this.currentCropState = CropState.SEEDING;
            this.changeState(CropState.SEEDING)
        })

        EventDispath.send(EventType.UPDATE_FIELD_TIPS);

    }
    onVrgetableClose() {
        EventDispath.removeByEvent(EventType.CROP_PLANT, this.onPlant, this);
        EventDispath.removeByEvent(EventType.VEGETABLE_CLOSE, this.onVrgetableClose, this)
    }
    //检测加速钞票是否充足
    diffGold = 0;
    checkGold() {
        let gold = PlayerModel.getGold();
        if (gold < ConfigManager.add_speed_gold) {
            // this.diffGold = ConfigManager.add_speed_gold - gold;
            // EventDispath.addEventListener(EventType.VIDEO_BACK, this.addGold, this);
            UIMananger.showPanel(UIType.popView1, null, () => {
                // EventDispath.removeByEvent(EventType.VIDEO_BACK, this.addGold, this);
            }, UIEffectType.SCALE, PopType.GOLD2, 1000);
            return false;
        }
        return true;
    }
    //加速
    onJiasu() {
        PlayerModel.setGold(-ConfigManager.add_speed_gold);
        this.addSpeed();
        // let cfg = ConfigManager.getPropById(propType.pipe, PlayerModel.getUIConfig().pipelv);
        // this.config.lastTime -= cfg.add_num * 60;
        // this.addSpeedTime = cfg.add_num * 60;
        // this.isAddSpeed = true;
        // this.flyJsTips(cfg.add_num)
        // EventDispath.removeByEvent(EventType.JIASU, this.onJiasu, this);
    }
    //关闭除虫面板
    closePest() {
        EventDispath.removeByEvent(EventType.SHACHONG, this.onShachong, this);
    }
    //除虫
    onShachong(data) {
        EventDispath.removeByEvent(EventType.SHACHONG, this.onShachong, this);

        this.chuchong.node.active = true;
        this.chuchong.animation = "shachong";
        this.qipao.active = false;
        this.chuchong.setCompleteListener((trackEntry, loopCount) => {
            this.chuchong.setCompleteListener(null);
            this.chuchong.node.active = false;
            this.haichong.node.active = false;
            this.changeState(CropState.RIPE);
            UIMananger.showPanel(UIType.popRewardView, null, () => {
            }, UIEffectType.SCALE, 0, data)
        })
        PlayerModel.pestNum--;
    }
    //收获
    checkGetCrop() {
        let getNum = 1;
        if (PlayerModel.crop_get_num >= ConfigManager.crop_maxGet_interval) {
            let random = MKUtils.randomNMF(0, 1);
            if (random < ConfigManager.crop_maxGet_rate) {
                getNum = ConfigManager.crop_maxGet_num;
                PlayerModel.crop_get_num = 0;
                EventDispath.addEventListener(EventType.CROP_GC, this.getCrop, this);
                // MKUtils.alertTips("弹出高产页面")
                UIMananger.showPanel(UIType.popGcView, null, () => {
                    EventDispath.removeByEvent(EventType.CROP_GC, this.getCrop, this);
                }, UIEffectType.SCALE, this.config.cropId);
                return;
            }
        }

        if (this.checkHouseMax(getNum)) {
            MKUtils.alertTips("仓库放不下了，快点卖出作物赚钱吧")
            return;
        }
        this.getCrop(1);
    }
    getCrop(num) {

        EventDispath.send(EventType.CROP_GET);
        this.changeState(CropState.EMPTY)
        this.qipao.active = false;
        EventDispath.removeByEvent(EventType.CROP_GC, this.getCrop, this);
        this.flyGetTips(num);

        PlayerModel.crop_get_num++;

        JSHelper.playEffect("crop_ripe", false, true);
        this.lvUpEff.animation = "shengji";


        let startNode = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        EffectManager.playCrop(startNode, this.config.cropId, 8, () => {
            if (!PlayerModel.guideState) EventDispath.send(EventType.MAIN_LOCK, false);
        });
        PlayerModel.setHouseAddCrop(this.config.cropId, num);
        PlayerModel.setCropGetNum(num);
        PlayerModel.setXfzs(0.2);
        this.scheduleOnce(() => {
            PlayerModel.checkAddOrder(this.config.cropId, num, () => {
                // UIMananger.showPanel(UIType.orderSuccessView);
                EventDispath.send(EventType.ORDER_COMPLETE_UPDATE)
                if (PlayerModel.guideStep >= 0) {
                    EventDispath.send(EventType.GUIDE_UPDATE)
                }
            }, () => {
                if (PlayerModel.guideStep >= 0) {
                    EventDispath.send(EventType.GUIDE_UPDATE)
                }
                //辛苦红包判断
                if (PlayerModel.getCropGetNum() >= ConfigManager.hard_hb_interval) {
                    PlayerModel.setCropGetNum(-PlayerModel.getCropGetNum());
                    if (!UIMananger.checkPanel(UIType.orderSuccessView)) {
                        UIMananger.showPanel(UIType.hardView, null, null, UIEffectType.SCALE, 0);
                    }
                }

            })

            this.reset();
            EventDispath.send(EventType.UPDATE_FIELD_TIPS);
            MKUtils.setNodeDelay(this.node, 0.5, () => {
                this.qipaoAnim();
            })
        }, 1);
        // SDKManager.onEvent(Global.EVENT_ACTION.client_get_crops)

    }
    //钞票不足，看视频
    addGold() {
        // PlayerModel.setGold(this.diffGold);
        // EventDispath.removeByEvent(EventType.VIDEO_BACK, this.addGold, this);
    }
    //加速
    addSpeed() {
        if (this.config.cropState != CropState.SEEDING) return;
        this.qipao.active = false;
        this.haichong.node.active = true;
        this.haichong.animation = "jiasu";
        this.haichong.setCompleteListener((trackEntry, loopCount) => {
            this.haichong.setCompleteListener(null);
            this.haichong.node.active = false;

            let cfg = ConfigManager.getPropById(propType.pipe, PlayerModel.getUIConfig().pipelv);
            if (this.config.lastTime > cfg.add_num * 60) {
                this.config.lastTime -= cfg.add_num * 60;
                this.addSpeedTime = cfg.add_num * 60;
            } else {

                this.addSpeedTime = this.config.lastTime;
                this.config.lastTime -= cfg.add_num * 60;
            }
            if (this.addSpeedTime > 100) {
                this.one_speed = 4
            }
            this.isAddSpeed = true;
            this.flyJsTips(cfg.add_num)
        })

    }

    reset() {
        this.config.cropId = 0;
        this.config.lastTime = 0;
        this.crop.node.active = false;
        this.qipao.active = false;

        PlayerModel.saveData();
    }
    qipaoAnim() {
        this.qipao.active = true;
        this.qipao.stopAllActions();
        this.qipao.runAction(cc.repeatForever(
            cc.sequence(
                cc.scaleTo(0.3, 1.2),
                cc.scaleTo(0.3, 1),
                cc.scaleTo(0.3, 1.2),
                cc.scaleTo(0.3, 1),
                cc.delayTime(2)
            )
        ))
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

    getPlantTime() {
        let time = ConfigManager.getCropTime(this.config.cropId, PlayerModel.getPlantNumById(this.config.cropId));
        let add = PlayerModel.getTimeAdd(this.config.type, this.config.level)
        this.totalTime = time - add * time;
    }

    flyJsTips(num) {
        this.tipsLb.node.stopAllActions();
        this.tipsLb.node.active = true;
        this.tipsLb.node.opacity = 255;
        this.tipsLb.string = `-${num}分钟`;
        this.tipsLb.node.runAction(cc.sequence(
            cc.moveTo(Utils._FT(30), cc.v2(this.tipsLb.node.x, 100)),
            cc.fadeOut(Utils._FT(15)),
            cc.callFunc(() => {
                this.tipsLb.node.active = false;
                this.tipsLb.node.y = 0;
            })
        ));
    }
    flyGetTips(num) {
        this.getTipsLb.string = "+" + num;
        this.getTips.stopAllActions();
        this.getTips.active = true;
        this.getTips.opacity = 255;
        this.getTips.runAction(cc.sequence(
            cc.moveTo(Utils._FT(30), cc.v2(this.getTips.x, 150)),
            cc.fadeOut(Utils._FT(15)),
            cc.callFunc(() => {
                this.getTips.active = false;
                this.getTips.y = 0;
            })
        ));
    }
}

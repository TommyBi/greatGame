// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import JSHelper from "../../../framework/helper/JSHelper";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import SortUtils from "../../../framework/tools/SortUtils";
import ActionType from "../../consts/ActionType";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import CashierManager from "./CashierManager";
import RolePrefab from "./RolePrefab";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CashierPrefab extends cc.Component {

    @property(cc.Sprite)
    img: cc.Sprite = null;
    @property(cc.Node)
    moeyBg: cc.Node = null;
    @property(cc.Label)
    descLb: cc.Label = null;
    @property(cc.ProgressBar)
    pro: cc.ProgressBar = null;
    @property(sp.Skeleton)
    lvUpEff: sp.Skeleton = null;


    // onLoad () {}
    roleList: RolePrefab[] = [];

    roleLength = 0;

    auto_interval = 0;
    auto_one_time = 2;//自动卖出间隔
    isAuto = true;
    mId = -1;

    startPoint = cc.v2(-340, -230)
    endPoint = cc.v2(66, -90)

    firstPoint = cc.v2(-370, -280)
    rolePoints = [];
    dayMax = 0;

    pro_one = 0.1;//每半秒增加进度
    pro_one_time = 0.5;
    pro_interval = 0;
    isAutoAddGold = false;

    addTotalTime = 0;
    addMultiple = ConfigManager.cashier_add_multiple;

    outPut = 0;//每秒产出

    flyPoint = cc.v2();
    start() {
        this.lvUpEff.node.active = false;
        CashierManager.init(this);

        this.flyPoint = this.node.convertToWorldSpaceAR(this.pro.node.getPosition());

        let lastTime = ConfigManager.cashier_add_times * 60 - Math.floor((new Date().getTime()) / 1000 - PlayerModel.getAddLastTime());
        if (lastTime > 0) {
            this.addTotalTime = lastTime;
            this.isAutoAddGold = true;
            this.outPut = ConfigManager.cashier_one * ConfigManager.cashier_add_multiple;
        } else {

            this.outPut = ConfigManager.cashier_one;
        }


    }
    protected onEnable(): void {
        EventDispath.addEventListener(EventType.ADD_CAHIER_ROLE, this.addRole, this);
        EventDispath.addEventListener(EventType.UPDATE_CAHIER_ROLE, this.updateRole, this);
        EventDispath.addEventListener(EventType.CHANGE_CASHIER, this.changeSkin, this);

        EventDispath.addEventListener(EventType.CASHIER_ADD_MULTIPLE, this.onMultiple, this);
        EventDispath.addEventListener(EventType.GUIDE_COMPLETE, this.changeState, this);

        EventDispath.on(this.node, this.showAuto, this);
        this.changeState();
    }
    protected update(dt: number): void {
        CashierManager.update(dt);

        if (this.isAuto) {
            this.auto_interval += dt;
            if (this.auto_interval >= this.auto_one_time && this.roleList.length > 0) {
                this.auto_interval = 0;
                this.roleList[0].onSell();
                // PlayerModel.setIsAutoOfflineTime(new Date().getTime() / 1000)
            }
        }

        if (this.isAutoAddGold) {
            this.addTotalTime -= dt;
            if (this.addTotalTime <= 0) {
                this.isAutoAddGold = false;
            }
        } else {
            this.outPut = ConfigManager.cashier_one;
        }

        if (PlayerModel.cashierGold < this.dayMax && PlayerModel.guideState) {
            this.descLb.string = "营业中";
            if (this.isAutoAddGold) this.descLb.string = "加速中";
            this.pro_interval += dt;
            if (this.pro_interval >= this.pro_one_time) {
                this.pro.progress += this.pro_one;
                this.pro_interval = 0;
                if (this.pro.progress >= 1) {
                    this.pro.progress = 0;
                    PlayerModel.setGold(this.outPut, 1, this.flyPoint);
                    PlayerModel.cashierGold = this.outPut;
                }
            }

        } else {
            if (!PlayerModel.guideState) this.descLb.string = "营业中";
            else this.descLb.string = "今日上限"
        }

    }
    changeState() {
        if (!PlayerModel.guideState) {
            this.moeyBg.active = false;
            this.pro.node.active = false;
            this.descLb.node.active = false;
        } else {
            this.moeyBg.active = true;
            this.pro.node.active = true;
            this.descLb.node.active = true;

        }
    }
    onMultiple() {
        this.isAutoAddGold = true;
        this.addTotalTime = ConfigManager.cashier_add_times * 60;
        this.outPut = ConfigManager.cashier_one * ConfigManager.cashier_add_multiple;
        PlayerModel.setAddLastTime(Math.floor(new Date().getTime() / 1000));
    }

    showAuto() {
        // if (isFirst) {
        //     let cfg: prop_config = ConfigManager.getPropById(propType.cashier, this.mId);
        //     this.auto_time2 = this.auto_time = cfg.other_reward;
        // }
        // PlayerModel.setIsAutoSell({ isAuto: true, lastTime: this.auto_time2, time: new Date().getTime() / 1000 });
        // let action = cc.sequence(cc.moveTo(3, this.endPoint), cc.callFunc(() => {
        //     if (this.roleList.length > 0) this.roleList[0].onSell();

        // this.isAuto = true;
        // }));
        UIMananger.showPanel(UIType.cashierView);
    }
    onAutoSell() {
        // this.cashier.animation = ActionType.CASHIER_SHOUYIN;
        // this.cashier.setCompleteListener((trackEntry, loopCount) => {
        //     this.cashier.setCompleteListener(null);
        //     this.cashier.animation = ActionType.CASHIER_STAND;
        // })
    }
    addRole(role: RolePrefab) {
        if (this.roleList.length == 0) {
            role.showSell();
        }
        this.roleList.push(role);
        role.jiezhangIndx = this.roleList.length - 1;
    }
    updateRole() {
        this.roleList.splice(0, 1);
        this.roleLength--;
        let len = this.roleList.length;
        let prePoint = this.firstPoint;
        for (let i = 0; i < len; i++) {

            this.roleList[i].changeAction(ActionType.Q_WALK_FINISH)
            let p;
            if (i < 6) {
                p = CashierManager.pointLit[i]
            } else {

                p = CashierManager.pointLit[5]
            }
            // let p = this.roleList[i].node.getPosition();
            this.move(this.roleList[i], p)
            // prePoint = p;
        }
        CashierManager.updateRole();
        // for (let i = len; i >= 0; i--) {

        //     this.roleList[i].changeAction(ActionType.Q_WALK_FINISH)
        //     if (i == 0) this.move(this.roleList[i], this.firstPoint)
        //     else {
        //         let p = this.roleList[i - 1].node.getPosition();
        //         this.move(this.roleList[i], p)
        //     }
        // }
        if (this.roleList.length > 0) {
            this.roleList[0].showSell();
        }

        let arr = [];
        for (let i = 0; i < this.roleList.length; i++) {
            arr.push(this.roleList[i].jiezhangIndx)
        }
        console.log("=================", arr)
    }
    move(role, p) {
        role.node.runAction(cc.sequence(cc.moveTo(0.5, p), cc.callFunc(() => {
            role.changeAction(ActionType.Q_STAND_FINISH_RIGHT)
        })));
    }

    get roleLen() {
        return this.roleLength - 1;
    }
    set roleLen(value) {
        this.roleLength++;
    }

    setData(id = 1) {
        if (id == 0) return;
        this.changeSkin(0);

    }

    changeSkin(isLvUp = 1) {
        this.mId = PlayerModel.getUIConfig().cashierlv;
        if (this.mId > 0) {
            // let cfg: prop_config = ConfigManager.getPropById(propType.cashier, this.mId);
            // this.auto_time2 = this.auto_time = cfg.other_reward;

            MKUtils.loadSpriteFrame("texture/prop/cashier/" + `0${this.mId}`, (res) => {
                this.img.spriteFrame = res;
                if (isLvUp) {
                    this.lvUpEff.node.active = true;
                    this.lvUpEff.animation = "animation";
                }
                this.dayMax = ConfigManager.getCashierMax();


            });
        } else {
        }
    }
}

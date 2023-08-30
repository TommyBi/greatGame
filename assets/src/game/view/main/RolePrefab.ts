// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import JSHelper from "../../../framework/helper/JSHelper";
import GamePoolManager from "../../../framework/manager/GamePoolManager";
import SDKManager from "../../../framework/manager/SDKManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import MKUtils from "../../../framework/tools/MkUtils";
import SortUtils from "../../../framework/tools/SortUtils";
import Utils from "../../../framework/tools/Utils";
import ActionType from "../../consts/ActionType";
import { crop_config, propType } from "../../consts/CConst";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import EffectManager from "../../manager/EffectManager";
import CashierManager from "./CashierManager";
import CashierPrefab from "./CashierPrefab";
import ShelvePrefab, { putOnConfig } from "./ShelvePrefab";

const { ccclass, property } = cc._decorator;

export interface buyCropCfg {
    cropId: number,//作物ID
    num: number,//已经购买的数量
}

@ccclass
export default class RolePrefab extends cc.Component {

    @property(cc.Sprite)
    crop: cc.Sprite = null;
    @property(cc.Node)
    cropNode: cc.Node = null;
    @property(cc.Node)
    tipsNode: cc.Node = null;
    @property(cc.Label)
    tipsLab: cc.Label = null;
    @property(cc.Node)
    sellNode: cc.Node = null;
    @property(cc.Node)
    sellTipsNode: cc.Node = null;
    @property(cc.Node)
    sellTipsHb: cc.Node = null;
    @property(cc.Node)
    sellTipsGold: cc.Node = null;
    @property(cc.Label)
    sellTipsMoney: cc.Label = null;
    @property(cc.Label)
    sellTipsXfzs: cc.Label = null;

    @property(sp.Skeleton)
    role: sp.Skeleton = null;

    @property([sp.SkeletonData])
    skeList: sp.SkeletonData[] = [];
    // LIFE-CYCLE CALLBACKS:
    // state

    startPoint = cc.v2(-660, 230);
    p = cc.v2(-445, 140);
    // p = cc.v2(285, 110);

    // sp1 = cc.v2(225, 180);
    // sp2 = cc.v2(-60, 70);
    // sp3 = cc.v2(190, -20);
    // sp4 = cc.v2(-40, -130);
    // sp5 = cc.v2(-700, -285);
    targetPoints = [
        cc.v2(-140, -50),
        cc.v2(130, -150),
        cc.v2(270, -10),
        cc.v2(-10, 105),
        cc.v2(-300, 220)
    ]
    accountPoint = cc.v2(400, -280)
    outPoint = cc.v2(620, -250)

    currentAction = ActionType.Q_STAND_LEFT;
    shelve: ShelvePrefab;//对应货架
    shelveIndex = -1;
    speed = 1.5;
    speed_base = 1.5;
    orderNum = -1;//排在第几个位置
    roleId = -1;
    needCropId = -1;//需要购买的作物ID
    buyCropList: buyCropCfg[] = [];
    baseCropCfg: crop_config;//需要购买的作物基础配置
    currentTimes = 1;//当前第几次购买

    isAccount = false;//是否是结账状态

    cashierPfb: CashierPrefab;//结账台

    isInit = true;
    currentY = 0;


    jiezhangIndx = 0;

    roleInSheleveIndex = -1;

    onLoad() {

    }
    setRole(value) {
        this.role.timeScale = value;
    }

    start() {
        this.cropNode.active = false;
        this.tipsNode.active = false;
        this.sellNode.active = false;
        this.sellTipsNode.active = false;
        this.buyCropList = [];
    }
    protected onEnable(): void {

        this.isInit = false;
        this.speed = this.speed_base + this.speed_base * PlayerModel.getSpeedAdd();

        EventDispath.on(this.cropNode, this.onBuy, this);
        EventDispath.on(this.sellNode, this.onSell, this);
        EventDispath.addEventListener(EventType.CHANGE_ROAD, this.updateSpeed, this);
    }
    /**
     * 
     * @param id 人物id
     * @param shelveIndex 当前货架索引
     */
    create(id, shelve: ShelvePrefab, cashierPfb: CashierPrefab) {
        this.roleId = id;
        this.cashierPfb = cashierPfb;
        if (shelve) {
            this.shelveIndex = shelve.mIndex;
            this.shelve = shelve;
            this.orderNum = this.shelve.roleNum;
        } else {
            this.shelveIndex = -1;
        }
        this.createRole();
        this.selectCrop();
    }
    //需要购买的作物
    selectCrop() {
        if (!this.shelve) return;
        let list = this.shelve.cropList;
        let id = -1;
        if (list.length > 0) {
            let crop = Utils.getRandomByArr(list);
            id = crop.cropId;
        } else {
            id = PlayerModel.getNewCrop();
        }
        this.needCropId = id;
        MKUtils.loadSpriteFrame("texture/crop/singleIcon/" + id, (res) => {
            this.crop.spriteFrame = res;
        });

        this.baseCropCfg = ConfigManager.getCropById(this.needCropId);
    }
    //创建顾客动画
    createRole() {
        new Promise((resolve, reject) => {
            this.node.setPosition(this.startPoint)
            // if (this.roleId > 9) {
            this.role.skeletonData = this.skeList[this.roleId - 1];
            this.role.animation = ActionType.Q_WALK;
            resolve(null);
            // } else {
            //     let url = "spine/role/0" + this.roleId + "/role_0" + this.roleId;
            //     MKUtils.loadSkeletonData(url, (res) => {
            //         this.role.skeletonData = res;
            //         resolve(null);
            //     }, () => { })
            // }
        }).then(() => {
            switch (this.shelveIndex) {
                case -1:
                    this.action1();
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 0:
                    this.action2();
                    break;

                default:
                    break;
            }
        })
    }
    //直接走出去
    action1() {
        this.role.animation = ActionType.Q_WALK;
        let action = cc.sequence(cc.moveTo(20, this.outPoint), cc.callFunc(() => {
        }));
        let newAction = cc.speed(action, this.speed);
        this.node.runAction(newAction);
    }
    //去走出去
    goOut(type = 1) {
        let target = this.targetPoints[this.shelveIndex]
        this.role.animation = ActionType.Q_WALK;
        if (type == 2) {
            target = this.accountPoint;
            this.role.animation = ActionType.Q_WALK_FINISH;
        }
        let dis = MKUtils.twoPointDistance(target, this.outPoint)

        let action = cc.sequence(cc.moveTo(dis / 80, this.outPoint), cc.callFunc(() => {
            this.roleInSheleveIndex = -1;
        }));
        let newAction = cc.speed(action, this.speed);
        this.node.runAction(newAction);
    }
    //去结账
    goAccount() {
        // this.role.node.scaleX = 1;
        this.shelve.refreshRole(this);
        this.roleInSheleveIndex = -1;
        this.role.animation = ActionType.Q_WALK_FINISH;
        CashierManager.addRole(this);
        // let target = this.targetPoints[this.shelveIndex]
        // let dis = MKUtils.twoPointDistance(target, this.accountPoint)
        // this.role.animation = ActionType.Q_WALK_FINISH;
        // this.cashierPfb.roleLen++;
        // this.node.parent = this.cashierPfb.roleParent;
        // let action = cc.sequence(
        //     cc.moveTo(dis / 80, this.accountPoint.x + this.cashierPfb.roleLen * 15, this.accountPoint.y + this.cashierPfb.roleLen * 15),
        //     cc.callFunc(() => {
        //         this.role.animation = ActionType.Q_STAND_FINISH_RIGHT;
        //         this.isAccount = true;
        //         // this.node.zIndex = 999;
        //         // EventDispath.send(EventType.ADD_CAHIER_ROLE, this);
        //         this.cashierPfb.addRole(this);
        //     }));
        // let newAction = cc.speed(action, this.speed);
        // this.node.runAction(newAction);
    }
    finshAction() {
        this.role.animation = ActionType.Q_STAND_FINISH_RIGHT;
    }
    showSell() {
        // this.sellNode.active = true;
    }
    //第一次走到某个摊位前
    action2() {
        let target = this.shelve.getPoint();

        if (!target) {
            this.action1();
            return;
        }
        this.shelve.walkLen++;
        // let target = this.targetPoints[this.shelveIndex]
        let dis = MKUtils.twoPointDistance(target, this.p)

        this.isMove = true;
        let action = cc.sequence(cc.moveTo(4, this.p),
            cc.callFunc(() => {
                this.role.animation = ActionType.Q_STAND_LEFT;
            }),
            cc.delayTime(1),
            cc.callFunc(() => {
                this.role.animation = ActionType.Q_WALK;
            }),
            // cc.moveTo(dis / 80, target),
            // cc.moveTo(dis / 80, target.x - this.orderNum * 10, target.y),
            cc.moveTo(dis / 80, target.x, target.y),
            cc.callFunc(() => {
                this.shelve.addRole(this);
                this.isMove = false;
                if (this.shelveIndex == 0 || this.shelveIndex == 1) {
                    this.role.animation = ActionType.Q_STAND_RIGHT;
                    // this.node.zIndex = 888;
                } else {
                    this.role.animation = ActionType.H_STAND;
                    // this.node.zIndex = 0;
                }
                if (PlayerModel.guideState) {

                    MKUtils.setNodeDelay(this.node, 1, () => {
                        this.cropNode.active = true;
                        this.autoBuy();
                    })
                } else {
                    this.cropNode.active = true;
                }
            })
        );
        let newAction = cc.speed(action, this.speed);
        this.node.runAction(newAction);
    }
    //改变摊位
    changeSheleve(shelve: ShelvePrefab) {

        let oldIdex = this.shelveIndex;
        if (shelve) this.shelveIndex = shelve.mIndex;
        else this.shelveIndex = -1;
        this.orderNum = shelve.roleNum;
        // if (this.shelveIndex == 2 || this.shelveIndex == 3) {
        //     this.node.zIndex = 999;
        // } else {
        //     this.node.zIndex = 0;
        // }
        this.role.animation = ActionType.Q_WALK_FINISH;
        this.changeScaleX(oldIdex);

        let target = this.shelve.getPoint();
        if (!target) {
            this.goAccount();
            return;
        }
        let dis = MKUtils.twoPointDistance(target, this.targetPoints[oldIdex])

        this.role.animation = ActionType.Q_WALK_FINISH;
        let action = cc.sequence(

            cc.moveTo(dis / 80, target.x, target.y),
            // cc.moveTo(dis / 80, target),
            // cc.moveTo(dis / 80, target.x + this.orderNum * 10, target.y+this.orderNum*5),
            cc.callFunc(() => {
                this.shelve.addRole(this);
                if (this.shelveIndex == 2 || this.shelveIndex == 3) {
                    this.role.animation = ActionType.Q_STAND_RIGHT;
                    // this.node.zIndex = 888;
                } else {
                    this.role.animation = ActionType.H_STAND;
                    // this.node.zIndex = 0;
                }
                this.role.node.scaleX = 1;
                MKUtils.setNodeDelay(this.node, 1, () => {
                    this.selectCrop();
                    this.cropNode.active = true;
                    this.autoBuy();
                })

            })
        );
        let newAction = cc.speed(action, this.speed);
        this.node.runAction(newAction);
    }
    changeScaleX(oldIndex) {
        if (oldIndex == 4) {
            this.role.node.scaleX = -1;
        } else if (oldIndex == 3) {
            if (this.shelveIndex == 0 || this.shelveIndex == 1 || this.shelveIndex == 2) {
                this.role.node.scaleX = -1;
            }
        } else if (oldIndex == 2) {
            if (this.shelveIndex == 0) {
                this.role.node.scaleX = -1;
            }
        } else if (oldIndex == 1) {
            if (this.shelveIndex == 0) {
                this.role.node.scaleX = -1;
            }
        } else {

            this.role.node.scaleX = 1;
        }
    }

    onBuy() {
        // this.shelve.roleNum--;
        if (this.checkSheleve()) {
            this.shelve.reduceCrop(this.needCropId, this, () => {
                this.cropNode.active = false;
                if (this.shelveIndex == 0 || this.shelveIndex == 1) {
                    this.role.animation = ActionType.Q_STAND_BUY
                } else {
                    this.role.animation = ActionType.H_STAND_BUY
                }
                this.role.setCompleteListener((trackEntry, loopCount) => {
                    this.role.setCompleteListener(null);
                    if (this.shelveIndex == 0 || this.shelveIndex == 1) {
                        this.role.animation = ActionType.Q_STAND_FINISH_RIGHT;
                    } else {
                        this.role.animation = ActionType.H_STAND_FINISH
                    }
                    MKUtils.setNodeDelay(this.node, 0.5, () => {
                        this.addBuyList();
                        //去结账
                        this.goAccount()
                    })
                })
            });

        } else {
            this.cropLostBySheleve();
        }
    }
    addBuyList() {
        let arr = this.buyCropList.filter((value) => {
            return value.cropId == this.needCropId;
        })
        if (arr.length > 0) arr[0].num++;
        else {
            this.buyCropList.push({ cropId: this.needCropId, num: 1 });
        }
    }
    //货架缺少当前作物
    cropLostBySheleve() {
        this.cropNode.active = false;
        let str = "老板种点儿" + this.baseCropCfg.name + "吧，我一会儿过来买"
        this.tipsLab.string = str;
        this.tipsNode.active = true;
        MKUtils.setNodeDelay(this.node, 1.5, () => {
            if (this.buyCropList.length > 0) {
                this.goAccount();
            } else {
                this.goOut();
                this.shelve.refreshRole(this);
            }
            this.tipsNode.active = false;
        })
    }
    //检测货架是否有当前作物
    checkSheleve() {
        let arr = this.shelve.cropList.filter((value) => {
            return value.cropId == this.needCropId;
        })
        if (arr.length > 0) return true;
        return false;
    }

    nextStep(isOver) {
        if (isOver) {
            let shelve = this.getSheleve();
            if (shelve) {
                // shelve.roleNum++;
                if (this.shelveIndex == shelve.mIndex) {
                    MKUtils.setNodeDelay(this.node, 0.5, () => {
                        this.selectCrop();
                        this.cropNode.active = true;
                        this.autoBuy();
                    })
                } else {
                    this.shelve.refreshRole(this);
                    this.shelve = shelve;
                    this.changeSheleve(shelve)
                }

            } else {
                this.goAccount();
            }
        } else {
            //去结算
            this.goAccount();
        }
    }
    shelvesType = [21, 22, 23, 24, 25,]
    getSheleve() {
        let arr = PlayerModel.sheleveList.filter((item) => {
            return item.currentNum > 0 && item.roleNum < 8;
        })
        if (arr.length > 0) {
            let shelve = Utils.getRandomByArr(arr);
            return shelve;
        }
        return null;
    }
    //卖出
    onSell() {

        let random = MKUtils.randomNMF(0, 100);


        this.sellTipsGold.active = false;
        this.sellTipsHb.active = false;
        // if (SDKManager.hasCustomerRedReward()) {

        //     if (random < 30) {
        //         let gold = MKUtils.randomNM(80, 120);
        //         this.sellBack({ gold: gold })
        //         this.sellTipsGold.active = true;
        //     } else {
        //         this.sellTipsHb.active = true;
        //         EventDispath.addEventListener(EventType.SDK_REWARD_CONFIG, this.rewardCfgBack, this)
        //         SDKManager.getCustomerConfig(this.shelve.mId);
        //     }
        // } else {
            let gold = MKUtils.randomNM(200, 230);
            this.sellBack({ gold: gold })
            this.sellTipsGold.active = true;
        // }

    }
    rewardCfgBack(data) {
        EventDispath.removeByEvent(EventType.SDK_REWARD_CONFIG, this.rewardCfgBack, this)
        EventDispath.addEventListener(EventType.SDK_REWARD_GOT, this.sellBack, this)
        SDKManager.getRedPackReward(data.configId);
    }
    /**
     * 
     * @param data 
     *  // {
     //     "code":0 //0-成功 其他领取失败 酌情处理
     //     "msg": "领取成功", //非0情况会给出对应msg 酌情处理
     //     "amount":"1.5",//当前结账领取金额
     //     "balance":"100.33",//用户总金额
     //     "level":1//用户等级
     // }
     */
    sellBack(data) {

        let type = this.shelvesType[this.shelve.mIndex]
        let add = ConfigManager.getShelveByType(type, this.shelve.mLv).add_num;

        EventDispath.removeByEvent(EventType.SDK_REWARD_GOT, this.sellBack, this)
        let xfzs = (0.2 * (1 + add / 100)).toFixed(2);
        let p = this.node.convertToWorldSpaceAR(this.cropNode.getPosition());
        if (data.gold) {
            let gold = Math.floor(data.gold * (1 + add / 100))

            this.sellTipsMoney.string = "+" + gold + "";
            this.sellTipsXfzs.string = "+" + xfzs + "";
            PlayerModel.setGold(gold, 1, p);
        } else {
            this.sellTipsMoney.string = "+" + Number(data.redBean).toFixed(2) + "元";

            PlayerModel.setMoney(data.userRedBean, data.redBean, p);
        }
        PlayerModel.setXfzs(Number(xfzs), p);

        PlayerModel.checkAddOrder(100, 1, () => {
            // UIMananger.showPanel(UIType.orderSuccessView);
            EventDispath.send(EventType.ORDER_COMPLETE_UPDATE)
        })

        PlayerModel.zdGkNum++;
        EventDispath.send(EventType.HKHB_UPDATE);

        this.sellNode.active = false;
        this.sellTipsNode.y = 100;
        this.sellTipsNode.active = true;

        this.cashierPfb.onAutoSell();

        this.sellTipsNode.runAction(cc.sequence(cc.moveTo(0.5, this.sellTipsNode.x, 200).easing(cc.easeOut(5.0)), cc.delayTime(0.5), cc.callFunc(() => {
            this.sellTipsNode.active = false;
        })))
        MKUtils.setNodeDelay(this.node, 1, () => {
            this.goOut(2);
            // MKUtils.setNodeDelay(this.node, 0.2, () => {
            this.cashierPfb.updateRole();
            // })
            // EventDispath.send(EventType.UPDATE_CAHIER_ROLE)
        })
    }
    changeAction(action) {
        this.role.animation = action;
    }
    interval = 0;
    isMove = false;
    update(dt) {
        let p = this.node.getPosition();
        if (!this.isInit && p.x >= this.outPoint.x - 30) {
            this.clear();
        }

        // this.interval++;
        // if (this.interval >= 10) {
        //     this.interval = 0;
        //     if (this.isMove) {
        //         let arr = this.node.parent.children;
        //         let len = arr.length;
        //         // SortUtils.quickSort(arr, "y", false);
        //         for (let i = 0; i < len; i++) {
        //             if (this.node.uuid == arr[i].uuid) continue;
        //             let dis = MKUtils.twoPointDistance(this.node.position, arr[i].position)
        //             if (dis < 100) {
        //                 console.log("===============");
        //                 if(this.node.y>arr[i].y){
        //                     this.node.zIndex = arr[i].zIndex-1;
        //                 }else{
        //                     this.node.zIndex = arr[i].zIndex+1;

        //                 }
        //             }

        //         }
        // }

        // }

        this.currentY = this.node.y;

    }
    autoBuy() {
        if (this.shelve.isAuto) {
            MKUtils.setNodeDelay(this.node, 1, () => {
                this.onBuy();
            })
        }
    }
    clear() {
        this.node.stopAllActions();
        this.isInit = true;
        GamePoolManager.putRole(this.node);
        this.currentTimes = 1;
        this.shelveIndex = -1;
        this.isAccount = false;
        EventDispath.removeEventListeners(this);
    }

    updateSpeed() {
        this.speed = this.speed_base + this.speed_base * PlayerModel.getSpeedAdd();
    }
    //获取引导坐标
    getGuidePoint() {
        return this.cropNode.convertToWorldSpaceAR(cc.v2(0, 0));
    }
    //  引导购买
    guideBuy() {
        // this.shelve.roleNum--;
        this.shelve.reduceCrop(this.needCropId, this);
        this.cropNode.active = false;
        this.role.animation = ActionType.H_STAND_BUY
        this.role.setCompleteListener((trackEntry, loopCount) => {
            this.role.setCompleteListener(null);
            if (this.shelveIndex == 2 || this.shelveIndex == 3) {
                this.role.animation = ActionType.Q_STAND_FINISH_RIGHT;
            } else {
                this.role.animation = ActionType.H_STAND_FINISH
            }
            MKUtils.setNodeDelay(this.node, 0.5, () => {
                this.addBuyList();
                //去结账
                this.goAccount()
            })
        })
    }
    // create(id) {
    //     console.log("1111111=");
    //     this.node.setPosition(id * 30, 0)
    //     // this.node.setPosition(this.startPoint)
    //     let url = `spine/role/0${id}/role_0${id}`;
    //     if (id > 9) {
    //         url = `spine/role/${id}/role_${id}`
    //     }
    //     // url = `spine/alien-ess`;
    //     url = `spine/skeleton`
    //     MKUtils.loadSkeletonData(url, (res) => {
    //         console.log("========spine======", res);
    //         this.role.skeletonData = res;
    //         // this.role.animation = ActionType.Q_WALK;
    //     }, () => { })
    // }
}

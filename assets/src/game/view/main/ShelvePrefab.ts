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
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import { PopType } from "../popView/PopView1";
import RolePrefab from "./RolePrefab";

const { ccclass, property } = cc._decorator;

export interface putOnConfig {
    cropId: number,//作物ID
    put_on_num: number,//作物上架数量
}

@ccclass
export default class ShelvePrefab extends cc.Component {

    @property(cc.Sprite)
    bg: cc.Sprite = null;

    @property(cc.Node)
    crop: cc.Node = null;
    @property(cc.Node)
    buildTips: cc.Node = null;
    @property(sp.Skeleton)
    lvUpEff: sp.Skeleton = null;

    cropNodeList: cc.Node[];

    cropList: putOnConfig[] = [];

    currentNum = 0;//当前作物数量
    mId = 0;//货架ID
    mLv = 0;//货架等级
    // roleNum = 0;//当前货架前的人数
    roleList = [];
    mIndex = 0;
    //每个货架前的起始点
    targetPoints = [
        cc.v2(-140, -50),
        cc.v2(220, -200),
        cc.v2(270, -10),
        cc.v2(-10, 105),
        cc.v2(-300, 200)
    ]

    allPoints = [];
    cloneAllPoints = [];
    walkLen: number = 0;//走向该摊位的顾客
    shelvesType = [21, 22, 23, 24, 25,]
    onLoad() {
        this.initComponent();
    }

    start() {
        this.lvUpEff.node.active = false;
        EventDispath.addEventListener(EventType.CASHIER_AUTO_CLOSE, this.closeAuto, this);

        EventDispath.on(this.buildTips, this.onBuild, this, 0, false);

        EventDispath.addEventListener(EventType.SHELVE_BUILD, this.onBuildComplete, this);
    }

    onBuild() {
        //弹出场景元素信息面板
        EventDispath.addEventListener(EventType.VIDEO_BACK, this.onBuildBack, this);
        UIMananger.showPanel(UIType.popView1, null, () => {
            EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onBuildBack, this);
        }, UIEffectType.SCALE, PopType.SHELVE);
    }
    onBuildBack() {
        MKUtils.alertTips("扩建货架成功")
        this.buildTips.active = false;
        PlayerModel.changeShelveSkin(this.mIndex, 1)
        this.changeSkin();
        EventDispath.removeByEvent(EventType.VIDEO_BACK, this.onBuildBack, this);
    }
    onBuildComplete(index) {
        if (this.mIndex == index) {
            this.onBuildBack();
        }
    }

    initPoint() {
        let target = this.targetPoints[this.mIndex];
        for (let i = 0; i < 8; i++) {
            let targetX = target.x - i * 20;
            let targetY = target.y + i * 8;
            if (this.mIndex == 0 || this.mIndex == 1) {
                targetX = target.x - i * 20;
                targetY = target.y + i * 8;
            }
            let v2 = cc.v2(targetX, targetY);
            this.allPoints.push(v2);
            this.cloneAllPoints.push(v2);
        }
    }
    // updatePoint() {
    //     this.allPoints = [];
    //     let target = this.targetPoints[this.mIndex];
    //     for (let i = 0; i < ConfigManager.getRoleMax(); i++) {
    //         let targetX = target.x - i * 20;
    //         let targetY = target.y + i * 8;
    //         if (this.mIndex == 0 || this.mIndex == 1) {
    //             targetX = target.x - i * 20;
    //             targetY = target.y + i * 8;
    //         }
    //         let v2 = cc.v2(targetX, targetY);
    //         this.allPoints.push(v2);
    //     }
    // }
    getPoint() {
        let p;
        for (let i = 0; i < this.cloneAllPoints.length; i++) {
            if (this.cloneAllPoints[i] != null) {
                p = this.cloneAllPoints[i];
                this.cloneAllPoints[i] = null;
                break;
            }
        }
        if (!p && this.roleNum < 8) {
            for (let i = 0; i < this.cloneAllPoints.length; i++) {
                if (!this.roleList[i]) {
                    p = this.allPoints[i];
                    break;
                }
            }
        }

        return p;
    }

    setData(id, index, list?) {
        this.mIndex = index;
        this.roleList.length = 8;
        this.cropList = list || [];
        if (id != 0) {
            this.buildTips.active = false;
            this.changeSkin(0)
            this.setCrop();
        } else {
            this.buildTips.active = true;
        }
    }
    changeSkin(isLvUp = 1) {
        let lv = PlayerModel.getUIConfig().shelvesList[this.mIndex];
        this.mLv = lv;
        if (lv == 0) return;
        this.mId = this.shelvesType[this.mIndex] * 100 + lv;
        MKUtils.loadSpriteFrame("texture/prop/shelves/" + `0${lv}`, (res) => {
            this.bg.spriteFrame = res;
            if (isLvUp) {
                this.lvUpEff.node.active = true;
                this.lvUpEff.animation = "animation";
            }
        });
    }
    //选择需要购买的蔬菜
    setCrop() {
        this.cropNodeList.forEach((node) => {
            node.active = false;
            node.name = "0";
        })
        this.currentNum = 0;
        let list = this.cropList;
        let len = 0;
        for (let i = 0; i < list.length; i++) {
            let cfg = list[i];
            if (i != 0) len += list[i - 1].put_on_num;
            for (let j = 0; j < cfg.put_on_num; j++) {
                let node: cc.Node;
                if (i == 0) {
                    node = this.cropNodeList[j]
                } else {
                    node = this.cropNodeList[len + j]
                }
                if (!node) {
                    console.log("========");

                } else {
                    this.currentNum++;
                    node.active = true;
                    node.name = cfg.cropId + "";
                    MKUtils.loadSpriteFrame("texture/crop/singleIcon/" + `${cfg.cropId}`, (res) => {
                        node.getComponent(cc.Sprite).spriteFrame = res;
                    });
                }
            }
        }
    }
    resetCrop(list) {
        this.cropList = list || [];
        this.setCrop();
    }
    //减少后补充
    addCrop(id?) {
        if (!this.mLv) return;
        if (!id) {
            let arr = PlayerModel.getRandomCrop(4 - this.currentNum);
            if (arr.length == 0) return;
            let arr1 = [];

            for (let j = 0; j < arr.length; j++) {
                let flag = false;
                for (let i = 0; i < this.cropList.length; i++) {
                    if (arr[j].cropId == this.cropList[i].cropId) {
                        this.cropList[i].put_on_num += arr[j].put_on_num;
                        flag = true;
                    }
                }
                if (!flag) arr1.push(arr[j]);
            }
            this.cropList = this.cropList.concat(arr1)
            this.setCrop();
        }
    }
    addOneCrop() {
        if (!this.mLv || this.currentNum >= 4) return;
        let crop = PlayerModel.getOneCrop();
        if (!crop) return;
        let isAdd = false;
        for (let i = 0; i < this.cropList.length; i++) {
            if (crop.cropId == this.cropList[i].cropId) {
                this.cropList[i].put_on_num += 1;
                isAdd = true;
            }
        }
        if (!isAdd) this.cropList.push({ cropId: crop.cropId, put_on_num: 1 })
        let list = this.cropNodeList.filter((node) => {
            return node.name == "0";
        });

        let node: cc.Node = list[0];
        node.opacity = 0;
        this.currentNum++;
        node.active = true;
        node.name = crop.cropId + "";
        MKUtils.loadSpriteFrame("texture/crop/singleIcon/" + `${crop.cropId}`, (res) => {
            node.getComponent(cc.Sprite).spriteFrame = res;
            node.runAction(cc.sequence(cc.delayTime(1), cc.fadeIn(1.0)));
        });
    }
    //作物减少
    reduceCrop(id, role: RolePrefab, callBack?) {
        let idx = 0;
        let arr = this.cropList.filter((item, index) => {
            if (item.cropId == id) idx = index;
            return item.cropId == id;
        })
        if (arr.length == 0) {
            //货架缺少对应作物，给出提醒
            console.log("缺少该作物");
            MKUtils.alertTips("仓库中缺少该作物")
            return;
        }
        let cfg = arr[0];
        cfg.put_on_num--;
        this.currentNum--;
        let nodeList = this.cropNodeList.filter((node) => {
            return node.name == id;
        })

        if (cfg.put_on_num <= 0) {
            this.cropList.splice(idx, 1);
        }
        // this.currentNum--;
        if (nodeList.length > 0) {
            nodeList[0].active = false;
            nodeList[0].name = "0"
            PlayerModel.reduceCrop(id);
            if (callBack) callBack();
            this.addOneCrop();
        } else {
            this.cropList.splice(idx, 1);
            role.cropLostBySheleve();
        }

        let deleteIndex = -1;

        this.cropList.forEach((item, index) => {
            if (item.put_on_num <= 0) deleteIndex = index;
        })
        if (deleteIndex != -1) this.cropList.splice(deleteIndex, 1);

        if (this.currentNum == 0) {
            this.cropNodeList.forEach((node) => {
                node.active = false;
                node.name = "0";
            })
        }

        // this.addCrop();

    }
    isAuto = false;
    changeAuto() {
        // MKUtils.setNodeDelay(this.node, 4, () => {
        //     this.isAuto = true;
        //     for (let i = 0; i < this.roleList.length; i++) {
        //         console.log("========自动卖出========");
        //         MKUtils.setNodeDelay(this.node, i * 1, () => {
        //             if (this.roleList[i]) this.roleList[i].onBuy();
        //         })
        //     }
        // })
    }
    closeAuto() {
        this.isAuto = false;
    }

    firstPoint = cc.v2();
    addRole(role) {
        this.walkLen--;
        // this.roleList.push(role);
        for (let i = 0; i < this.roleList.length; i++) {
            if (!this.roleList[i]) {
                this.roleList[i] = role;
                role.roleInSheleveIndex = i;
                return;
            }
        }
        let arr = this.roleList.filter((item) => { return item != 0 })
        console.log("货架ID：", this.mIndex, "顾客数量：", arr.length);

    }
    get roleNum() {
        let arr = this.roleList.filter((item) => {
            return item && item != 0;
        })
        return arr.length;
    }

    refreshRole(role) {
        if (role.roleInSheleveIndex != -1) {
            this.roleList[role.roleInSheleveIndex] = 0;
            this.cloneAllPoints[role.roleInSheleveIndex] = this.allPoints[role.roleInSheleveIndex];
        }
        // let index = this.roleList.indexOf(role);
        // if (index != -1) {
        //     this.roleList[index] = 0;
        // }
        let arr = this.roleList.filter((item) => { return item != 0 })
        console.log("货架ID：", this.mIndex, "顾客数量：", arr.length);
    }

    initComponent() {
        this.buildTips.active = false;
        this.cropNodeList = this.crop.children;
        this.cropNodeList.forEach((node) => {
            node.active = false;
        })

    }
}

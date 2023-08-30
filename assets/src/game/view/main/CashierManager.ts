// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import MKUtils from "../../../framework/tools/MkUtils";
import Utils from "../../../framework/tools/Utils";
import CashierPrefab from "./CashierPrefab";

const { ccclass, property } = cc._decorator;

@ccclass
class CashierManager {

    private static _instance: CashierManager;
    public barragePool: cc.NodePool = new cc.NodePool();

    static instance(): CashierManager {
        if (!this._instance) {
            this._instance = new CashierManager();
        }
        return this._instance;
    }

    point = cc.v2(400, -280);
    pointLit = [];
    clonePoints = [];

    walkRoleList = [];
    roleList = [];
    cashier: CashierPrefab;
    init(cashier: CashierPrefab) {
        this.cashier = cashier;
        for (let i = 0; i < 6; i++) {
            let p = cc.v2(this.point.x + i * 5, this.point.y + i * 5)
            this.pointLit.push(p);
            this.clonePoints.push(p);
        }
    }

    addRole(role) {
        this.walkRoleList.push(role);
        this.move(role);
    }
    frame = 0;
    update(dt) {
        if (this.isChange) {
            this.isChange = 0;
            for (let i = 0; i < this.walkRoleList.length; i++) {
                this.move(this.walkRoleList[i]);
            }
        }
        // this.frame++;
        // if (this.frame > 3) {
        //     this.frame = 0;
        //     let len = this.walkRoleList.length;
        //     for (let i = 0; i < len; i++) {
        //         let src = this.walkRoleList[i];
        //         let node = src.node;

        //         let p = this.getSpeed(node.getPosition())
        //         if (node.x > this.clonePoints[0].x) node.x += p[0];
        //         if (node.y > this.clonePoints[0].y) node.y += p[1];
        //         if (this.clonePoints.length > 0) {
        //             if (node.x <= this.clonePoints[0].x && node.y <= this.clonePoints[0].y) {
        //                 this.clonePoints.shift();
        //                 let role = this.walkRoleList.splice(i, 1);
        //                 this.roleList.push(role)
        //             }
        //         } else {
        //             if (node.x <= this.clonePoints[0].x && node.y <= this.clonePoints[0].y) {
        //                 let role = this.walkRoleList.splice(i, 1);
        //                 this.roleList.push(role)
        //             }
        //         }
        //     }
        // }
    }

    getSpeed(point) {
        let angle = Utils.getVecAngle(point, this.clonePoints[0]);
        let radian = Utils.angleToPI(angle);
        let speedX = 5 * Math.cos(radian);
        let speedY = 5 * Math.cos(radian);
        return [speedX, speedY];
    }
    isChange = 0;
    move(role) {
        let p = role.node.getPosition();
        let dis = MKUtils.twoPointDistance(p, this.point)
        role.node.stopAllActions();
        let action = cc.sequence(cc.moveTo(dis / 100, this.clonePoints[0]), cc.callFunc(() => {
            let index = this.walkRoleList.indexOf(role)
            this.walkRoleList.splice(index, 1);
            this.roleList.push(role)
            role.finshAction();
            this.cashier.addRole(role);
            if (this.clonePoints.length > 1) {
                this.isChange = 1;
                this.clonePoints.shift();
            }
        }))
        let newAction = cc.speed(action, role.speed);
        role.node.runAction(newAction)
    }
    updateRole() {
        this.roleList.splice(0, 1);
        if (this.roleList.length < 6 && this.roleList.length > 0 && this.clonePoints.length < 6) {
            this.clonePoints.unshift(this.pointLit[this.roleList.length])
        }
    }
}
export default CashierManager.instance();

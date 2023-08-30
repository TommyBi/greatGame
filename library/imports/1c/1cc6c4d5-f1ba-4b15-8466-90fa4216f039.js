"use strict";
cc._RF.push(module, '1cc6cTV8bpLFYRmkPpCFvA5', 'CashierManager');
// src/game/view/main/CashierManager.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var Utils_1 = require("../../../framework/tools/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CashierManager = /** @class */ (function () {
    function CashierManager() {
        this.barragePool = new cc.NodePool();
        this.point = cc.v2(400, -280);
        this.pointLit = [];
        this.clonePoints = [];
        this.walkRoleList = [];
        this.roleList = [];
        this.frame = 0;
        this.isChange = 0;
    }
    CashierManager_1 = CashierManager;
    CashierManager.instance = function () {
        if (!this._instance) {
            this._instance = new CashierManager_1();
        }
        return this._instance;
    };
    CashierManager.prototype.init = function (cashier) {
        this.cashier = cashier;
        for (var i = 0; i < 6; i++) {
            var p = cc.v2(this.point.x + i * 5, this.point.y + i * 5);
            this.pointLit.push(p);
            this.clonePoints.push(p);
        }
    };
    CashierManager.prototype.addRole = function (role) {
        this.walkRoleList.push(role);
        this.move(role);
    };
    CashierManager.prototype.update = function (dt) {
        if (this.isChange) {
            this.isChange = 0;
            for (var i = 0; i < this.walkRoleList.length; i++) {
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
    };
    CashierManager.prototype.getSpeed = function (point) {
        var angle = Utils_1.default.getVecAngle(point, this.clonePoints[0]);
        var radian = Utils_1.default.angleToPI(angle);
        var speedX = 5 * Math.cos(radian);
        var speedY = 5 * Math.cos(radian);
        return [speedX, speedY];
    };
    CashierManager.prototype.move = function (role) {
        var _this = this;
        var p = role.node.getPosition();
        var dis = MkUtils_1.default.twoPointDistance(p, this.point);
        role.node.stopAllActions();
        var action = cc.sequence(cc.moveTo(dis / 100, this.clonePoints[0]), cc.callFunc(function () {
            var index = _this.walkRoleList.indexOf(role);
            _this.walkRoleList.splice(index, 1);
            _this.roleList.push(role);
            role.finshAction();
            _this.cashier.addRole(role);
            if (_this.clonePoints.length > 1) {
                _this.isChange = 1;
                _this.clonePoints.shift();
            }
        }));
        var newAction = cc.speed(action, role.speed);
        role.node.runAction(newAction);
    };
    CashierManager.prototype.updateRole = function () {
        this.roleList.splice(0, 1);
        if (this.roleList.length < 6 && this.roleList.length > 0 && this.clonePoints.length < 6) {
            this.clonePoints.unshift(this.pointLit[this.roleList.length]);
        }
    };
    var CashierManager_1;
    CashierManager = CashierManager_1 = __decorate([
        ccclass
    ], CashierManager);
    return CashierManager;
}());
exports.default = CashierManager.instance();

cc._RF.pop();
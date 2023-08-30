
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/CashierManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vQ2FzaGllck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7OztBQUVsRiw0REFBdUQ7QUFDdkQsd0RBQW1EO0FBRzdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFHVyxnQkFBVyxHQUFnQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQVNwRCxVQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQWVkLFVBQUssR0FBRyxDQUFDLENBQUM7UUEwQ1YsYUFBUSxHQUFHLENBQUMsQ0FBQztJQXlCakIsQ0FBQzt1QkFuR0ssY0FBYztJQUtULHVCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWMsRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFTRCw2QkFBSSxHQUFKLFVBQUssT0FBc0I7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLENB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Ly8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL1V0aWxzXCI7XHJcbmltcG9ydCBDYXNoaWVyUHJlZmFiIGZyb20gXCIuL0Nhc2hpZXJQcmVmYWJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5jbGFzcyBDYXNoaWVyTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBDYXNoaWVyTWFuYWdlcjtcclxuICAgIHB1YmxpYyBiYXJyYWdlUG9vbDogY2MuTm9kZVBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKTogQ2FzaGllck1hbmFnZXIge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQ2FzaGllck1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHBvaW50ID0gY2MudjIoNDAwLCAtMjgwKTtcclxuICAgIHBvaW50TGl0ID0gW107XHJcbiAgICBjbG9uZVBvaW50cyA9IFtdO1xyXG5cclxuICAgIHdhbGtSb2xlTGlzdCA9IFtdO1xyXG4gICAgcm9sZUxpc3QgPSBbXTtcclxuICAgIGNhc2hpZXI6IENhc2hpZXJQcmVmYWI7XHJcbiAgICBpbml0KGNhc2hpZXI6IENhc2hpZXJQcmVmYWIpIHtcclxuICAgICAgICB0aGlzLmNhc2hpZXIgPSBjYXNoaWVyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwID0gY2MudjIodGhpcy5wb2ludC54ICsgaSAqIDUsIHRoaXMucG9pbnQueSArIGkgKiA1KVxyXG4gICAgICAgICAgICB0aGlzLnBvaW50TGl0LnB1c2gocCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvbmVQb2ludHMucHVzaChwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUm9sZShyb2xlKSB7XHJcbiAgICAgICAgdGhpcy53YWxrUm9sZUxpc3QucHVzaChyb2xlKTtcclxuICAgICAgICB0aGlzLm1vdmUocm9sZSk7XHJcbiAgICB9XHJcbiAgICBmcmFtZSA9IDA7XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhbmdlID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndhbGtSb2xlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKHRoaXMud2Fsa1JvbGVMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLmZyYW1lKys7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZnJhbWUgPiAzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgICAgIC8vICAgICBsZXQgbGVuID0gdGhpcy53YWxrUm9sZUxpc3QubGVuZ3RoO1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgc3JjID0gdGhpcy53YWxrUm9sZUxpc3RbaV07XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgbm9kZSA9IHNyYy5ub2RlO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGxldCBwID0gdGhpcy5nZXRTcGVlZChub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAobm9kZS54ID4gdGhpcy5jbG9uZVBvaW50c1swXS54KSBub2RlLnggKz0gcFswXTtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChub2RlLnkgPiB0aGlzLmNsb25lUG9pbnRzWzBdLnkpIG5vZGUueSArPSBwWzFdO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMuY2xvbmVQb2ludHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChub2RlLnggPD0gdGhpcy5jbG9uZVBvaW50c1swXS54ICYmIG5vZGUueSA8PSB0aGlzLmNsb25lUG9pbnRzWzBdLnkpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jbG9uZVBvaW50cy5zaGlmdCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMud2Fsa1JvbGVMaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5yb2xlTGlzdC5wdXNoKHJvbGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAobm9kZS54IDw9IHRoaXMuY2xvbmVQb2ludHNbMF0ueCAmJiBub2RlLnkgPD0gdGhpcy5jbG9uZVBvaW50c1swXS55KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy53YWxrUm9sZUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnJvbGVMaXN0LnB1c2gocm9sZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3BlZWQocG9pbnQpIHtcclxuICAgICAgICBsZXQgYW5nbGUgPSBVdGlscy5nZXRWZWNBbmdsZShwb2ludCwgdGhpcy5jbG9uZVBvaW50c1swXSk7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IFV0aWxzLmFuZ2xlVG9QSShhbmdsZSk7XHJcbiAgICAgICAgbGV0IHNwZWVkWCA9IDUgKiBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIGxldCBzcGVlZFkgPSA1ICogTWF0aC5jb3MocmFkaWFuKTtcclxuICAgICAgICByZXR1cm4gW3NwZWVkWCwgc3BlZWRZXTtcclxuICAgIH1cclxuICAgIGlzQ2hhbmdlID0gMDtcclxuICAgIG1vdmUocm9sZSkge1xyXG4gICAgICAgIGxldCBwID0gcm9sZS5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgbGV0IGRpcyA9IE1LVXRpbHMudHdvUG9pbnREaXN0YW5jZShwLCB0aGlzLnBvaW50KVxyXG4gICAgICAgIHJvbGUubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oZGlzIC8gMTAwLCB0aGlzLmNsb25lUG9pbnRzWzBdKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLndhbGtSb2xlTGlzdC5pbmRleE9mKHJvbGUpXHJcbiAgICAgICAgICAgIHRoaXMud2Fsa1JvbGVMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZUxpc3QucHVzaChyb2xlKVxyXG4gICAgICAgICAgICByb2xlLmZpbnNoQWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzaGllci5hZGRSb2xlKHJvbGUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbG9uZVBvaW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2hhbmdlID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvbmVQb2ludHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIGxldCBuZXdBY3Rpb24gPSBjYy5zcGVlZChhY3Rpb24sIHJvbGUuc3BlZWQpO1xyXG4gICAgICAgIHJvbGUubm9kZS5ydW5BY3Rpb24obmV3QWN0aW9uKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlUm9sZSgpIHtcclxuICAgICAgICB0aGlzLnJvbGVMaXN0LnNwbGljZSgwLCAxKTtcclxuICAgICAgICBpZiAodGhpcy5yb2xlTGlzdC5sZW5ndGggPCA2ICYmIHRoaXMucm9sZUxpc3QubGVuZ3RoID4gMCAmJiB0aGlzLmNsb25lUG9pbnRzLmxlbmd0aCA8IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9uZVBvaW50cy51bnNoaWZ0KHRoaXMucG9pbnRMaXRbdGhpcy5yb2xlTGlzdC5sZW5ndGhdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYXNoaWVyTWFuYWdlci5pbnN0YW5jZSgpO1xyXG4iXX0=
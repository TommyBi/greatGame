
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/CashierPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00f65fwzFlMhotDBSOU35PL', 'CashierPrefab');
// src/game/view/main/CashierPrefab.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var ActionType_1 = require("../../consts/ActionType");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var CashierManager_1 = require("./CashierManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CashierPrefab = /** @class */ (function (_super) {
    __extends(CashierPrefab, _super);
    function CashierPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = null;
        _this.moeyBg = null;
        _this.descLb = null;
        _this.pro = null;
        _this.lvUpEff = null;
        // onLoad () {}
        _this.roleList = [];
        _this.roleLength = 0;
        _this.auto_interval = 0;
        _this.auto_one_time = 2; //自动卖出间隔
        _this.isAuto = true;
        _this.mId = -1;
        _this.startPoint = cc.v2(-340, -230);
        _this.endPoint = cc.v2(66, -90);
        _this.firstPoint = cc.v2(-370, -280);
        _this.rolePoints = [];
        _this.dayMax = 0;
        _this.pro_one = 0.1; //每半秒增加进度
        _this.pro_one_time = 0.5;
        _this.pro_interval = 0;
        _this.isAutoAddGold = false;
        _this.addTotalTime = 0;
        _this.addMultiple = ConfigManager_1.default.cashier_add_multiple;
        _this.outPut = 0; //每秒产出
        _this.flyPoint = cc.v2();
        return _this;
    }
    CashierPrefab.prototype.start = function () {
        this.lvUpEff.node.active = false;
        CashierManager_1.default.init(this);
        this.flyPoint = this.node.convertToWorldSpaceAR(this.pro.node.getPosition());
        var lastTime = ConfigManager_1.default.cashier_add_times * 60 - Math.floor((new Date().getTime()) / 1000 - PlayerModel_1.default.getAddLastTime());
        if (lastTime > 0) {
            this.addTotalTime = lastTime;
            this.isAutoAddGold = true;
            this.outPut = ConfigManager_1.default.cashier_one * ConfigManager_1.default.cashier_add_multiple;
        }
        else {
            this.outPut = ConfigManager_1.default.cashier_one;
        }
    };
    CashierPrefab.prototype.onEnable = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.ADD_CAHIER_ROLE, this.addRole, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.UPDATE_CAHIER_ROLE, this.updateRole, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_CASHIER, this.changeSkin, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.CASHIER_ADD_MULTIPLE, this.onMultiple, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.GUIDE_COMPLETE, this.changeState, this);
        EventDispath_1.default.on(this.node, this.showAuto, this);
        this.changeState();
    };
    CashierPrefab.prototype.update = function (dt) {
        CashierManager_1.default.update(dt);
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
        }
        else {
            this.outPut = ConfigManager_1.default.cashier_one;
        }
        if (PlayerModel_1.default.cashierGold < this.dayMax && PlayerModel_1.default.guideState) {
            this.descLb.string = "营业中";
            if (this.isAutoAddGold)
                this.descLb.string = "加速中";
            this.pro_interval += dt;
            if (this.pro_interval >= this.pro_one_time) {
                this.pro.progress += this.pro_one;
                this.pro_interval = 0;
                if (this.pro.progress >= 1) {
                    this.pro.progress = 0;
                    PlayerModel_1.default.setGold(this.outPut, 1, this.flyPoint);
                    PlayerModel_1.default.cashierGold = this.outPut;
                }
            }
        }
        else {
            if (!PlayerModel_1.default.guideState)
                this.descLb.string = "营业中";
            else
                this.descLb.string = "今日上限";
        }
    };
    CashierPrefab.prototype.changeState = function () {
        if (!PlayerModel_1.default.guideState) {
            this.moeyBg.active = false;
            this.pro.node.active = false;
            this.descLb.node.active = false;
        }
        else {
            this.moeyBg.active = true;
            this.pro.node.active = true;
            this.descLb.node.active = true;
        }
    };
    CashierPrefab.prototype.onMultiple = function () {
        this.isAutoAddGold = true;
        this.addTotalTime = ConfigManager_1.default.cashier_add_times * 60;
        this.outPut = ConfigManager_1.default.cashier_one * ConfigManager_1.default.cashier_add_multiple;
        PlayerModel_1.default.setAddLastTime(Math.floor(new Date().getTime() / 1000));
    };
    CashierPrefab.prototype.showAuto = function () {
        // if (isFirst) {
        //     let cfg: prop_config = ConfigManager.getPropById(propType.cashier, this.mId);
        //     this.auto_time2 = this.auto_time = cfg.other_reward;
        // }
        // PlayerModel.setIsAutoSell({ isAuto: true, lastTime: this.auto_time2, time: new Date().getTime() / 1000 });
        // let action = cc.sequence(cc.moveTo(3, this.endPoint), cc.callFunc(() => {
        //     if (this.roleList.length > 0) this.roleList[0].onSell();
        // this.isAuto = true;
        // }));
        UIMananger_1.default.showPanel(UIType_1.default.cashierView);
    };
    CashierPrefab.prototype.onAutoSell = function () {
        // this.cashier.animation = ActionType.CASHIER_SHOUYIN;
        // this.cashier.setCompleteListener((trackEntry, loopCount) => {
        //     this.cashier.setCompleteListener(null);
        //     this.cashier.animation = ActionType.CASHIER_STAND;
        // })
    };
    CashierPrefab.prototype.addRole = function (role) {
        if (this.roleList.length == 0) {
            role.showSell();
        }
        this.roleList.push(role);
        role.jiezhangIndx = this.roleList.length - 1;
    };
    CashierPrefab.prototype.updateRole = function () {
        this.roleList.splice(0, 1);
        this.roleLength--;
        var len = this.roleList.length;
        var prePoint = this.firstPoint;
        for (var i = 0; i < len; i++) {
            this.roleList[i].changeAction(ActionType_1.default.Q_WALK_FINISH);
            var p = void 0;
            if (i < 6) {
                p = CashierManager_1.default.pointLit[i];
            }
            else {
                p = CashierManager_1.default.pointLit[5];
            }
            // let p = this.roleList[i].node.getPosition();
            this.move(this.roleList[i], p);
            // prePoint = p;
        }
        CashierManager_1.default.updateRole();
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
        var arr = [];
        for (var i = 0; i < this.roleList.length; i++) {
            arr.push(this.roleList[i].jiezhangIndx);
        }
        console.log("=================", arr);
    };
    CashierPrefab.prototype.move = function (role, p) {
        role.node.runAction(cc.sequence(cc.moveTo(0.5, p), cc.callFunc(function () {
            role.changeAction(ActionType_1.default.Q_STAND_FINISH_RIGHT);
        })));
    };
    Object.defineProperty(CashierPrefab.prototype, "roleLen", {
        get: function () {
            return this.roleLength - 1;
        },
        set: function (value) {
            this.roleLength++;
        },
        enumerable: false,
        configurable: true
    });
    CashierPrefab.prototype.setData = function (id) {
        if (id === void 0) { id = 1; }
        if (id == 0)
            return;
        this.changeSkin(0);
    };
    CashierPrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        this.mId = PlayerModel_1.default.getUIConfig().cashierlv;
        if (this.mId > 0) {
            // let cfg: prop_config = ConfigManager.getPropById(propType.cashier, this.mId);
            // this.auto_time2 = this.auto_time = cfg.other_reward;
            MkUtils_1.default.loadSpriteFrame("texture/prop/cashier/" + ("0" + this.mId), function (res) {
                _this.img.spriteFrame = res;
                if (isLvUp) {
                    _this.lvUpEff.node.active = true;
                    _this.lvUpEff.animation = "animation";
                }
                _this.dayMax = ConfigManager_1.default.getCashierMax();
            });
        }
        else {
        }
    };
    __decorate([
        property(cc.Sprite)
    ], CashierPrefab.prototype, "img", void 0);
    __decorate([
        property(cc.Node)
    ], CashierPrefab.prototype, "moeyBg", void 0);
    __decorate([
        property(cc.Label)
    ], CashierPrefab.prototype, "descLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], CashierPrefab.prototype, "pro", void 0);
    __decorate([
        property(sp.Skeleton)
    ], CashierPrefab.prototype, "lvUpEff", void 0);
    CashierPrefab = __decorate([
        ccclass
    ], CashierPrefab);
    return CashierPrefab;
}(cc.Component));
exports.default = CashierPrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vQ2FzaGllclByZWZhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRixvRUFBK0Q7QUFDL0Qsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSw0REFBdUQ7QUFFdkQsc0RBQWlEO0FBQ2pELDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBQ3hELG1EQUE4QztBQUd4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTJPQztRQXhPRyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQW1CLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUc1QixlQUFlO1FBQ2YsY0FBUSxHQUFpQixFQUFFLENBQUM7UUFFNUIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFFZixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixtQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFDMUIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLFNBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVULGdCQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzlCLGNBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRXpCLGdCQUFVLEdBQUcsRUFB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Q0FBQztJQXZPRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNFO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0RBQ007SUFYWCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMk9qQztJQUFELG9CQUFDO0NBM09ELEFBMk9DLENBM08wQyxFQUFFLENBQUMsU0FBUyxHQTJPdEQ7a0JBM09vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEpTSGVscGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvaGVscGVyL0pTSGVscGVyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgU29ydFV0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvU29ydFV0aWxzXCI7XHJcbmltcG9ydCBBY3Rpb25UeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQgQ2FzaGllck1hbmFnZXIgZnJvbSBcIi4vQ2FzaGllck1hbmFnZXJcIjtcclxuaW1wb3J0IFJvbGVQcmVmYWIgZnJvbSBcIi4vUm9sZVByZWZhYlwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhc2hpZXJQcmVmYWIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpbWc6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1vZXlCZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkZXNjTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHBybzogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgbHZVcEVmZjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHJvbGVMaXN0OiBSb2xlUHJlZmFiW10gPSBbXTtcclxuXHJcbiAgICByb2xlTGVuZ3RoID0gMDtcclxuXHJcbiAgICBhdXRvX2ludGVydmFsID0gMDtcclxuICAgIGF1dG9fb25lX3RpbWUgPSAyOy8v6Ieq5Yqo5Y2W5Ye66Ze06ZqUXHJcbiAgICBpc0F1dG8gPSB0cnVlO1xyXG4gICAgbUlkID0gLTE7XHJcblxyXG4gICAgc3RhcnRQb2ludCA9IGNjLnYyKC0zNDAsIC0yMzApXHJcbiAgICBlbmRQb2ludCA9IGNjLnYyKDY2LCAtOTApXHJcblxyXG4gICAgZmlyc3RQb2ludCA9IGNjLnYyKC0zNzAsIC0yODApXHJcbiAgICByb2xlUG9pbnRzID0gW107XHJcbiAgICBkYXlNYXggPSAwO1xyXG5cclxuICAgIHByb19vbmUgPSAwLjE7Ly/mr4/ljYrnp5Llop7liqDov5vluqZcclxuICAgIHByb19vbmVfdGltZSA9IDAuNTtcclxuICAgIHByb19pbnRlcnZhbCA9IDA7XHJcbiAgICBpc0F1dG9BZGRHb2xkID0gZmFsc2U7XHJcblxyXG4gICAgYWRkVG90YWxUaW1lID0gMDtcclxuICAgIGFkZE11bHRpcGxlID0gQ29uZmlnTWFuYWdlci5jYXNoaWVyX2FkZF9tdWx0aXBsZTtcclxuXHJcbiAgICBvdXRQdXQgPSAwOy8v5q+P56eS5Lqn5Ye6XHJcblxyXG4gICAgZmx5UG9pbnQgPSBjYy52MigpO1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5sdlVwRWZmLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgQ2FzaGllck1hbmFnZXIuaW5pdCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5mbHlQb2ludCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wcm8ubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgbGV0IGxhc3RUaW1lID0gQ29uZmlnTWFuYWdlci5jYXNoaWVyX2FkZF90aW1lcyAqIDYwIC0gTWF0aC5mbG9vcigobmV3IERhdGUoKS5nZXRUaW1lKCkpIC8gMTAwMCAtIFBsYXllck1vZGVsLmdldEFkZExhc3RUaW1lKCkpO1xyXG4gICAgICAgIGlmIChsYXN0VGltZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb3RhbFRpbWUgPSBsYXN0VGltZTtcclxuICAgICAgICAgICAgdGhpcy5pc0F1dG9BZGRHb2xkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5vdXRQdXQgPSBDb25maWdNYW5hZ2VyLmNhc2hpZXJfb25lICogQ29uZmlnTWFuYWdlci5jYXNoaWVyX2FkZF9tdWx0aXBsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vdXRQdXQgPSBDb25maWdNYW5hZ2VyLmNhc2hpZXJfb25lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5BRERfQ0FISUVSX1JPTEUsIHRoaXMuYWRkUm9sZSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlVQREFURV9DQUhJRVJfUk9MRSwgdGhpcy51cGRhdGVSb2xlLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuQ0hBTkdFX0NBU0hJRVIsIHRoaXMuY2hhbmdlU2tpbiwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5DQVNISUVSX0FERF9NVUxUSVBMRSwgdGhpcy5vbk11bHRpcGxlLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuR1VJREVfQ09NUExFVEUsIHRoaXMuY2hhbmdlU3RhdGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5ub2RlLCB0aGlzLnNob3dBdXRvLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBDYXNoaWVyTWFuYWdlci51cGRhdGUoZHQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0F1dG8pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRvX2ludGVydmFsICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvX2ludGVydmFsID49IHRoaXMuYXV0b19vbmVfdGltZSAmJiB0aGlzLnJvbGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b19pbnRlcnZhbCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVMaXN0WzBdLm9uU2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gUGxheWVyTW9kZWwuc2V0SXNBdXRvT2ZmbGluZVRpbWUobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0F1dG9BZGRHb2xkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG90YWxUaW1lIC09IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRUb3RhbFRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0F1dG9BZGRHb2xkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm91dFB1dCA9IENvbmZpZ01hbmFnZXIuY2FzaGllcl9vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuY2FzaGllckdvbGQgPCB0aGlzLmRheU1heCAmJiBQbGF5ZXJNb2RlbC5ndWlkZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwi6JCl5Lia5LitXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXV0b0FkZEdvbGQpIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwi5Yqg6YCf5LitXCI7XHJcbiAgICAgICAgICAgIHRoaXMucHJvX2ludGVydmFsICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9faW50ZXJ2YWwgPj0gdGhpcy5wcm9fb25lX3RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvLnByb2dyZXNzICs9IHRoaXMucHJvX29uZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvX2ludGVydmFsID0gMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByby5wcm9ncmVzcyA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm8ucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXllck1vZGVsLnNldEdvbGQodGhpcy5vdXRQdXQsIDEsIHRoaXMuZmx5UG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXllck1vZGVsLmNhc2hpZXJHb2xkID0gdGhpcy5vdXRQdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFQbGF5ZXJNb2RlbC5ndWlkZVN0YXRlKSB0aGlzLmRlc2NMYi5zdHJpbmcgPSBcIuiQpeS4muS4rVwiO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwi5LuK5pel5LiK6ZmQXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgY2hhbmdlU3RhdGUoKSB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJNb2RlbC5ndWlkZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9leUJnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByby5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9leUJnLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJvLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbk11bHRpcGxlKCkge1xyXG4gICAgICAgIHRoaXMuaXNBdXRvQWRkR29sZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGRUb3RhbFRpbWUgPSBDb25maWdNYW5hZ2VyLmNhc2hpZXJfYWRkX3RpbWVzICogNjA7XHJcbiAgICAgICAgdGhpcy5vdXRQdXQgPSBDb25maWdNYW5hZ2VyLmNhc2hpZXJfb25lICogQ29uZmlnTWFuYWdlci5jYXNoaWVyX2FkZF9tdWx0aXBsZTtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5zZXRBZGRMYXN0VGltZShNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBdXRvKCkge1xyXG4gICAgICAgIC8vIGlmIChpc0ZpcnN0KSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjZmc6IHByb3BfY29uZmlnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS5jYXNoaWVyLCB0aGlzLm1JZCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYXV0b190aW1lMiA9IHRoaXMuYXV0b190aW1lID0gY2ZnLm90aGVyX3Jld2FyZDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gUGxheWVyTW9kZWwuc2V0SXNBdXRvU2VsbCh7IGlzQXV0bzogdHJ1ZSwgbGFzdFRpbWU6IHRoaXMuYXV0b190aW1lMiwgdGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwIH0pO1xyXG4gICAgICAgIC8vIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMywgdGhpcy5lbmRQb2ludCksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMucm9sZUxpc3QubGVuZ3RoID4gMCkgdGhpcy5yb2xlTGlzdFswXS5vblNlbGwoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5pc0F1dG8gPSB0cnVlO1xyXG4gICAgICAgIC8vIH0pKTtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuY2FzaGllclZpZXcpO1xyXG4gICAgfVxyXG4gICAgb25BdXRvU2VsbCgpIHtcclxuICAgICAgICAvLyB0aGlzLmNhc2hpZXIuYW5pbWF0aW9uID0gQWN0aW9uVHlwZS5DQVNISUVSX1NIT1VZSU47XHJcbiAgICAgICAgLy8gdGhpcy5jYXNoaWVyLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnksIGxvb3BDb3VudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhc2hpZXIuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXNoaWVyLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuQ0FTSElFUl9TVEFORDtcclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgYWRkUm9sZShyb2xlOiBSb2xlUHJlZmFiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9sZUxpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcm9sZS5zaG93U2VsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvbGVMaXN0LnB1c2gocm9sZSk7XHJcbiAgICAgICAgcm9sZS5qaWV6aGFuZ0luZHggPSB0aGlzLnJvbGVMaXN0Lmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVSb2xlKCkge1xyXG4gICAgICAgIHRoaXMucm9sZUxpc3Quc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIHRoaXMucm9sZUxlbmd0aC0tO1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLnJvbGVMaXN0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgcHJlUG9pbnQgPSB0aGlzLmZpcnN0UG9pbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yb2xlTGlzdFtpXS5jaGFuZ2VBY3Rpb24oQWN0aW9uVHlwZS5RX1dBTEtfRklOSVNIKVxyXG4gICAgICAgICAgICBsZXQgcDtcclxuICAgICAgICAgICAgaWYgKGkgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICBwID0gQ2FzaGllck1hbmFnZXIucG9pbnRMaXRbaV1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBwID0gQ2FzaGllck1hbmFnZXIucG9pbnRMaXRbNV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsZXQgcCA9IHRoaXMucm9sZUxpc3RbaV0ubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUodGhpcy5yb2xlTGlzdFtpXSwgcClcclxuICAgICAgICAgICAgLy8gcHJlUG9pbnQgPSBwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDYXNoaWVyTWFuYWdlci51cGRhdGVSb2xlKCk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IGxlbjsgaSA+PSAwOyBpLS0pIHtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMucm9sZUxpc3RbaV0uY2hhbmdlQWN0aW9uKEFjdGlvblR5cGUuUV9XQUxLX0ZJTklTSClcclxuICAgICAgICAvLyAgICAgaWYgKGkgPT0gMCkgdGhpcy5tb3ZlKHRoaXMucm9sZUxpc3RbaV0sIHRoaXMuZmlyc3RQb2ludClcclxuICAgICAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgcCA9IHRoaXMucm9sZUxpc3RbaSAtIDFdLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubW92ZSh0aGlzLnJvbGVMaXN0W2ldLCBwKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLnJvbGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yb2xlTGlzdFswXS5zaG93U2VsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb2xlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaCh0aGlzLnJvbGVMaXN0W2ldLmppZXpoYW5nSW5keClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PVwiLCBhcnIpXHJcbiAgICB9XHJcbiAgICBtb3ZlKHJvbGUsIHApIHtcclxuICAgICAgICByb2xlLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjUsIHApLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvbGUuY2hhbmdlQWN0aW9uKEFjdGlvblR5cGUuUV9TVEFORF9GSU5JU0hfUklHSFQpXHJcbiAgICAgICAgfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcm9sZUxlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb2xlTGVuZ3RoIC0gMTtcclxuICAgIH1cclxuICAgIHNldCByb2xlTGVuKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlTGVuZ3RoKys7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0YShpZCA9IDEpIHtcclxuICAgICAgICBpZiAoaWQgPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU2tpbigwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2tpbihpc0x2VXAgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5tSWQgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLmNhc2hpZXJsdjtcclxuICAgICAgICBpZiAodGhpcy5tSWQgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBjZmc6IHByb3BfY29uZmlnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS5jYXNoaWVyLCB0aGlzLm1JZCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXV0b190aW1lMiA9IHRoaXMuYXV0b190aW1lID0gY2ZnLm90aGVyX3Jld2FyZDtcclxuXHJcbiAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL2Nhc2hpZXIvXCIgKyBgMCR7dGhpcy5tSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWcuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMdlVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sdlVwRWZmLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmx2VXBFZmYuYW5pbWF0aW9uID0gXCJhbmltYXRpb25cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5TWF4ID0gQ29uZmlnTWFuYWdlci5nZXRDYXNoaWVyTWF4KCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
"use strict";
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
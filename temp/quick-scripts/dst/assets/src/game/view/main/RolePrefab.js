
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/RolePrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e14612+Ne1IfpZTat8mSPH8', 'RolePrefab');
// src/game/view/main/RolePrefab.ts

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
var GamePoolManager_1 = require("../../../framework/manager/GamePoolManager");
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var Utils_1 = require("../../../framework/tools/Utils");
var ActionType_1 = require("../../consts/ActionType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var CashierManager_1 = require("./CashierManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RolePrefab = /** @class */ (function (_super) {
    __extends(RolePrefab, _super);
    function RolePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.crop = null;
        _this.cropNode = null;
        _this.tipsNode = null;
        _this.tipsLab = null;
        _this.sellNode = null;
        _this.sellTipsNode = null;
        _this.sellTipsHb = null;
        _this.sellTipsGold = null;
        _this.sellTipsMoney = null;
        _this.sellTipsXfzs = null;
        _this.role = null;
        _this.skeList = [];
        // LIFE-CYCLE CALLBACKS:
        // state
        _this.startPoint = cc.v2(-660, 230);
        _this.p = cc.v2(-445, 140);
        // p = cc.v2(285, 110);
        // sp1 = cc.v2(225, 180);
        // sp2 = cc.v2(-60, 70);
        // sp3 = cc.v2(190, -20);
        // sp4 = cc.v2(-40, -130);
        // sp5 = cc.v2(-700, -285);
        _this.targetPoints = [
            cc.v2(-140, -50),
            cc.v2(130, -150),
            cc.v2(270, -10),
            cc.v2(-10, 105),
            cc.v2(-300, 220)
        ];
        _this.accountPoint = cc.v2(400, -280);
        _this.outPoint = cc.v2(620, -250);
        _this.currentAction = ActionType_1.default.Q_STAND_LEFT;
        _this.shelveIndex = -1;
        _this.speed = 1.5;
        _this.speed_base = 1.5;
        _this.orderNum = -1; //排在第几个位置
        _this.roleId = -1;
        _this.needCropId = -1; //需要购买的作物ID
        _this.buyCropList = [];
        _this.currentTimes = 1; //当前第几次购买
        _this.isAccount = false; //是否是结账状态
        _this.isInit = true;
        _this.currentY = 0;
        _this.jiezhangIndx = 0;
        _this.roleInSheleveIndex = -1;
        _this.shelvesType = [21, 22, 23, 24, 25,];
        _this.interval = 0;
        _this.isMove = false;
        return _this;
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
    RolePrefab.prototype.onLoad = function () {
    };
    RolePrefab.prototype.setRole = function (value) {
        this.role.timeScale = value;
    };
    RolePrefab.prototype.start = function () {
        this.cropNode.active = false;
        this.tipsNode.active = false;
        this.sellNode.active = false;
        this.sellTipsNode.active = false;
        this.buyCropList = [];
    };
    RolePrefab.prototype.onEnable = function () {
        this.isInit = false;
        this.speed = this.speed_base + this.speed_base * PlayerModel_1.default.getSpeedAdd();
        EventDispath_1.default.on(this.cropNode, this.onBuy, this);
        EventDispath_1.default.on(this.sellNode, this.onSell, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_ROAD, this.updateSpeed, this);
    };
    /**
     *
     * @param id 人物id
     * @param shelveIndex 当前货架索引
     */
    RolePrefab.prototype.create = function (id, shelve, cashierPfb) {
        this.roleId = id;
        this.cashierPfb = cashierPfb;
        if (shelve) {
            this.shelveIndex = shelve.mIndex;
            this.shelve = shelve;
            this.orderNum = this.shelve.roleNum;
        }
        else {
            this.shelveIndex = -1;
        }
        this.createRole();
        this.selectCrop();
    };
    //需要购买的作物
    RolePrefab.prototype.selectCrop = function () {
        var _this = this;
        if (!this.shelve)
            return;
        var list = this.shelve.cropList;
        var id = -1;
        if (list.length > 0) {
            var crop = Utils_1.default.getRandomByArr(list);
            id = crop.cropId;
        }
        else {
            id = PlayerModel_1.default.getNewCrop();
        }
        this.needCropId = id;
        MkUtils_1.default.loadSpriteFrame("texture/crop/singleIcon/" + id, function (res) {
            _this.crop.spriteFrame = res;
        });
        this.baseCropCfg = ConfigManager_1.default.getCropById(this.needCropId);
    };
    //创建顾客动画
    RolePrefab.prototype.createRole = function () {
        var _this = this;
        new Promise(function (resolve, reject) {
            _this.node.setPosition(_this.startPoint);
            // if (this.roleId > 9) {
            _this.role.skeletonData = _this.skeList[_this.roleId - 1];
            _this.role.animation = ActionType_1.default.Q_WALK;
            resolve(null);
            // } else {
            //     let url = "spine/role/0" + this.roleId + "/role_0" + this.roleId;
            //     MKUtils.loadSkeletonData(url, (res) => {
            //         this.role.skeletonData = res;
            //         resolve(null);
            //     }, () => { })
            // }
        }).then(function () {
            switch (_this.shelveIndex) {
                case -1:
                    _this.action1();
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 0:
                    _this.action2();
                    break;
                default:
                    break;
            }
        });
    };
    //直接走出去
    RolePrefab.prototype.action1 = function () {
        this.role.animation = ActionType_1.default.Q_WALK;
        var action = cc.sequence(cc.moveTo(20, this.outPoint), cc.callFunc(function () {
        }));
        var newAction = cc.speed(action, this.speed);
        this.node.runAction(newAction);
    };
    //去走出去
    RolePrefab.prototype.goOut = function (type) {
        var _this = this;
        if (type === void 0) { type = 1; }
        var target = this.targetPoints[this.shelveIndex];
        this.role.animation = ActionType_1.default.Q_WALK;
        if (type == 2) {
            target = this.accountPoint;
            this.role.animation = ActionType_1.default.Q_WALK_FINISH;
        }
        var dis = MkUtils_1.default.twoPointDistance(target, this.outPoint);
        var action = cc.sequence(cc.moveTo(dis / 80, this.outPoint), cc.callFunc(function () {
            _this.roleInSheleveIndex = -1;
        }));
        var newAction = cc.speed(action, this.speed);
        this.node.runAction(newAction);
    };
    //去结账
    RolePrefab.prototype.goAccount = function () {
        // this.role.node.scaleX = 1;
        this.shelve.refreshRole(this);
        this.roleInSheleveIndex = -1;
        this.role.animation = ActionType_1.default.Q_WALK_FINISH;
        CashierManager_1.default.addRole(this);
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
    };
    RolePrefab.prototype.finshAction = function () {
        this.role.animation = ActionType_1.default.Q_STAND_FINISH_RIGHT;
    };
    RolePrefab.prototype.showSell = function () {
        // this.sellNode.active = true;
    };
    //第一次走到某个摊位前
    RolePrefab.prototype.action2 = function () {
        var _this = this;
        var target = this.shelve.getPoint();
        if (!target) {
            this.action1();
            return;
        }
        this.shelve.walkLen++;
        // let target = this.targetPoints[this.shelveIndex]
        var dis = MkUtils_1.default.twoPointDistance(target, this.p);
        this.isMove = true;
        var action = cc.sequence(cc.moveTo(4, this.p), cc.callFunc(function () {
            _this.role.animation = ActionType_1.default.Q_STAND_LEFT;
        }), cc.delayTime(1), cc.callFunc(function () {
            _this.role.animation = ActionType_1.default.Q_WALK;
        }), 
        // cc.moveTo(dis / 80, target),
        // cc.moveTo(dis / 80, target.x - this.orderNum * 10, target.y),
        cc.moveTo(dis / 80, target.x, target.y), cc.callFunc(function () {
            _this.shelve.addRole(_this);
            _this.isMove = false;
            if (_this.shelveIndex == 0 || _this.shelveIndex == 1) {
                _this.role.animation = ActionType_1.default.Q_STAND_RIGHT;
                // this.node.zIndex = 888;
            }
            else {
                _this.role.animation = ActionType_1.default.H_STAND;
                // this.node.zIndex = 0;
            }
            if (PlayerModel_1.default.guideState) {
                MkUtils_1.default.setNodeDelay(_this.node, 1, function () {
                    _this.cropNode.active = true;
                    _this.autoBuy();
                });
            }
            else {
                _this.cropNode.active = true;
            }
        }));
        var newAction = cc.speed(action, this.speed);
        this.node.runAction(newAction);
    };
    //改变摊位
    RolePrefab.prototype.changeSheleve = function (shelve) {
        var _this = this;
        var oldIdex = this.shelveIndex;
        if (shelve)
            this.shelveIndex = shelve.mIndex;
        else
            this.shelveIndex = -1;
        this.orderNum = shelve.roleNum;
        // if (this.shelveIndex == 2 || this.shelveIndex == 3) {
        //     this.node.zIndex = 999;
        // } else {
        //     this.node.zIndex = 0;
        // }
        this.role.animation = ActionType_1.default.Q_WALK_FINISH;
        this.changeScaleX(oldIdex);
        var target = this.shelve.getPoint();
        if (!target) {
            this.goAccount();
            return;
        }
        var dis = MkUtils_1.default.twoPointDistance(target, this.targetPoints[oldIdex]);
        this.role.animation = ActionType_1.default.Q_WALK_FINISH;
        var action = cc.sequence(cc.moveTo(dis / 80, target.x, target.y), 
        // cc.moveTo(dis / 80, target),
        // cc.moveTo(dis / 80, target.x + this.orderNum * 10, target.y+this.orderNum*5),
        cc.callFunc(function () {
            _this.shelve.addRole(_this);
            if (_this.shelveIndex == 2 || _this.shelveIndex == 3) {
                _this.role.animation = ActionType_1.default.Q_STAND_RIGHT;
                // this.node.zIndex = 888;
            }
            else {
                _this.role.animation = ActionType_1.default.H_STAND;
                // this.node.zIndex = 0;
            }
            _this.role.node.scaleX = 1;
            MkUtils_1.default.setNodeDelay(_this.node, 1, function () {
                _this.selectCrop();
                _this.cropNode.active = true;
                _this.autoBuy();
            });
        }));
        var newAction = cc.speed(action, this.speed);
        this.node.runAction(newAction);
    };
    RolePrefab.prototype.changeScaleX = function (oldIndex) {
        if (oldIndex == 4) {
            this.role.node.scaleX = -1;
        }
        else if (oldIndex == 3) {
            if (this.shelveIndex == 0 || this.shelveIndex == 1 || this.shelveIndex == 2) {
                this.role.node.scaleX = -1;
            }
        }
        else if (oldIndex == 2) {
            if (this.shelveIndex == 0) {
                this.role.node.scaleX = -1;
            }
        }
        else if (oldIndex == 1) {
            if (this.shelveIndex == 0) {
                this.role.node.scaleX = -1;
            }
        }
        else {
            this.role.node.scaleX = 1;
        }
    };
    RolePrefab.prototype.onBuy = function () {
        var _this = this;
        // this.shelve.roleNum--;
        if (this.checkSheleve()) {
            this.shelve.reduceCrop(this.needCropId, this, function () {
                _this.cropNode.active = false;
                if (_this.shelveIndex == 0 || _this.shelveIndex == 1) {
                    _this.role.animation = ActionType_1.default.Q_STAND_BUY;
                }
                else {
                    _this.role.animation = ActionType_1.default.H_STAND_BUY;
                }
                _this.role.setCompleteListener(function (trackEntry, loopCount) {
                    _this.role.setCompleteListener(null);
                    if (_this.shelveIndex == 0 || _this.shelveIndex == 1) {
                        _this.role.animation = ActionType_1.default.Q_STAND_FINISH_RIGHT;
                    }
                    else {
                        _this.role.animation = ActionType_1.default.H_STAND_FINISH;
                    }
                    MkUtils_1.default.setNodeDelay(_this.node, 0.5, function () {
                        _this.addBuyList();
                        //去结账
                        _this.goAccount();
                    });
                });
            });
        }
        else {
            this.cropLostBySheleve();
        }
    };
    RolePrefab.prototype.addBuyList = function () {
        var _this = this;
        var arr = this.buyCropList.filter(function (value) {
            return value.cropId == _this.needCropId;
        });
        if (arr.length > 0)
            arr[0].num++;
        else {
            this.buyCropList.push({ cropId: this.needCropId, num: 1 });
        }
    };
    //货架缺少当前作物
    RolePrefab.prototype.cropLostBySheleve = function () {
        var _this = this;
        this.cropNode.active = false;
        var str = "老板种点儿" + this.baseCropCfg.name + "吧，我一会儿过来买";
        this.tipsLab.string = str;
        this.tipsNode.active = true;
        MkUtils_1.default.setNodeDelay(this.node, 1.5, function () {
            if (_this.buyCropList.length > 0) {
                _this.goAccount();
            }
            else {
                _this.goOut();
                _this.shelve.refreshRole(_this);
            }
            _this.tipsNode.active = false;
        });
    };
    //检测货架是否有当前作物
    RolePrefab.prototype.checkSheleve = function () {
        var _this = this;
        var arr = this.shelve.cropList.filter(function (value) {
            return value.cropId == _this.needCropId;
        });
        if (arr.length > 0)
            return true;
        return false;
    };
    RolePrefab.prototype.nextStep = function (isOver) {
        var _this = this;
        if (isOver) {
            var shelve = this.getSheleve();
            if (shelve) {
                // shelve.roleNum++;
                if (this.shelveIndex == shelve.mIndex) {
                    MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                        _this.selectCrop();
                        _this.cropNode.active = true;
                        _this.autoBuy();
                    });
                }
                else {
                    this.shelve.refreshRole(this);
                    this.shelve = shelve;
                    this.changeSheleve(shelve);
                }
            }
            else {
                this.goAccount();
            }
        }
        else {
            //去结算
            this.goAccount();
        }
    };
    RolePrefab.prototype.getSheleve = function () {
        var arr = PlayerModel_1.default.sheleveList.filter(function (item) {
            return item.currentNum > 0 && item.roleNum < 8;
        });
        if (arr.length > 0) {
            var shelve = Utils_1.default.getRandomByArr(arr);
            return shelve;
        }
        return null;
    };
    //卖出
    RolePrefab.prototype.onSell = function () {
        var random = MkUtils_1.default.randomNMF(0, 100);
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
        var gold = MkUtils_1.default.randomNM(200, 230);
        this.sellBack({ gold: gold });
        this.sellTipsGold.active = true;
        // }
    };
    RolePrefab.prototype.rewardCfgBack = function (data) {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.SDK_REWARD_CONFIG, this.rewardCfgBack, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_REWARD_GOT, this.sellBack, this);
        SDKManager_1.default.getRedPackReward(data.configId);
    };
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
    RolePrefab.prototype.sellBack = function (data) {
        var _this = this;
        var type = this.shelvesType[this.shelve.mIndex];
        var add = ConfigManager_1.default.getShelveByType(type, this.shelve.mLv).add_num;
        EventDispath_1.default.removeByEvent(EventType_1.EventType.SDK_REWARD_GOT, this.sellBack, this);
        var xfzs = (0.2 * (1 + add / 100)).toFixed(2);
        var p = this.node.convertToWorldSpaceAR(this.cropNode.getPosition());
        if (data.gold) {
            var gold = Math.floor(data.gold * (1 + add / 100));
            this.sellTipsMoney.string = "+" + gold + "";
            this.sellTipsXfzs.string = "+" + xfzs + "";
            PlayerModel_1.default.setGold(gold, 1, p);
        }
        else {
            this.sellTipsMoney.string = "+" + Number(data.redBean).toFixed(2) + "元";
            PlayerModel_1.default.setMoney(data.userRedBean, data.redBean, p);
        }
        PlayerModel_1.default.setXfzs(Number(xfzs), p);
        PlayerModel_1.default.checkAddOrder(100, 1, function () {
            // UIMananger.showPanel(UIType.orderSuccessView);
            EventDispath_1.default.send(EventType_1.EventType.ORDER_COMPLETE_UPDATE);
        });
        PlayerModel_1.default.zdGkNum++;
        EventDispath_1.default.send(EventType_1.EventType.HKHB_UPDATE);
        this.sellNode.active = false;
        this.sellTipsNode.y = 100;
        this.sellTipsNode.active = true;
        this.cashierPfb.onAutoSell();
        this.sellTipsNode.runAction(cc.sequence(cc.moveTo(0.5, this.sellTipsNode.x, 200).easing(cc.easeOut(5.0)), cc.delayTime(0.5), cc.callFunc(function () {
            _this.sellTipsNode.active = false;
        })));
        MkUtils_1.default.setNodeDelay(this.node, 1, function () {
            _this.goOut(2);
            // MKUtils.setNodeDelay(this.node, 0.2, () => {
            _this.cashierPfb.updateRole();
            // })
            // EventDispath.send(EventType.UPDATE_CAHIER_ROLE)
        });
    };
    RolePrefab.prototype.changeAction = function (action) {
        this.role.animation = action;
    };
    RolePrefab.prototype.update = function (dt) {
        var p = this.node.getPosition();
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
    };
    RolePrefab.prototype.autoBuy = function () {
        var _this = this;
        if (this.shelve.isAuto) {
            MkUtils_1.default.setNodeDelay(this.node, 1, function () {
                _this.onBuy();
            });
        }
    };
    RolePrefab.prototype.clear = function () {
        this.node.stopAllActions();
        this.isInit = true;
        GamePoolManager_1.default.putRole(this.node);
        this.currentTimes = 1;
        this.shelveIndex = -1;
        this.isAccount = false;
        EventDispath_1.default.removeEventListeners(this);
    };
    RolePrefab.prototype.updateSpeed = function () {
        this.speed = this.speed_base + this.speed_base * PlayerModel_1.default.getSpeedAdd();
    };
    //获取引导坐标
    RolePrefab.prototype.getGuidePoint = function () {
        return this.cropNode.convertToWorldSpaceAR(cc.v2(0, 0));
    };
    //  引导购买
    RolePrefab.prototype.guideBuy = function () {
        var _this = this;
        // this.shelve.roleNum--;
        this.shelve.reduceCrop(this.needCropId, this);
        this.cropNode.active = false;
        this.role.animation = ActionType_1.default.H_STAND_BUY;
        this.role.setCompleteListener(function (trackEntry, loopCount) {
            _this.role.setCompleteListener(null);
            if (_this.shelveIndex == 2 || _this.shelveIndex == 3) {
                _this.role.animation = ActionType_1.default.Q_STAND_FINISH_RIGHT;
            }
            else {
                _this.role.animation = ActionType_1.default.H_STAND_FINISH;
            }
            MkUtils_1.default.setNodeDelay(_this.node, 0.5, function () {
                _this.addBuyList();
                //去结账
                _this.goAccount();
            });
        });
    };
    __decorate([
        property(cc.Sprite)
    ], RolePrefab.prototype, "crop", void 0);
    __decorate([
        property(cc.Node)
    ], RolePrefab.prototype, "cropNode", void 0);
    __decorate([
        property(cc.Node)
    ], RolePrefab.prototype, "tipsNode", void 0);
    __decorate([
        property(cc.Label)
    ], RolePrefab.prototype, "tipsLab", void 0);
    __decorate([
        property(cc.Node)
    ], RolePrefab.prototype, "sellNode", void 0);
    __decorate([
        property(cc.Node)
    ], RolePrefab.prototype, "sellTipsNode", void 0);
    __decorate([
        property(cc.Node)
    ], RolePrefab.prototype, "sellTipsHb", void 0);
    __decorate([
        property(cc.Node)
    ], RolePrefab.prototype, "sellTipsGold", void 0);
    __decorate([
        property(cc.Label)
    ], RolePrefab.prototype, "sellTipsMoney", void 0);
    __decorate([
        property(cc.Label)
    ], RolePrefab.prototype, "sellTipsXfzs", void 0);
    __decorate([
        property(sp.Skeleton)
    ], RolePrefab.prototype, "role", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], RolePrefab.prototype, "skeList", void 0);
    RolePrefab = __decorate([
        ccclass
    ], RolePrefab);
    return RolePrefab;
}(cc.Component));
exports.default = RolePrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vUm9sZVByZWZhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRiw4RUFBeUU7QUFDekUsb0VBQStEO0FBRS9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNERBQXVEO0FBRXZELHdEQUFtRDtBQUNuRCxzREFBaUQ7QUFHakQsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUV4RCxtREFBOEM7QUFJeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFRNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFnbkJDO1FBN21CRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBYSxJQUFJLENBQUM7UUFHOUIsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFzQixFQUFFLENBQUM7UUFDaEMsd0JBQXdCO1FBQ3hCLFFBQVE7UUFFUixnQkFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsT0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUs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YXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBKU0hlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2hlbHBlci9KU0hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZVBvb2xNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9HYW1lUG9vbE1hbmFnZXJcIjtcclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBTb3J0VXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Tb3J0VXRpbHNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvVXRpbHNcIjtcclxuaW1wb3J0IEFjdGlvblR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9BY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IGNyb3BfY29uZmlnLCBwcm9wVHlwZSB9IGZyb20gXCIuLi8uLi9jb25zdHMvQ0NvbnN0XCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0VmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IENhc2hpZXJNYW5hZ2VyIGZyb20gXCIuL0Nhc2hpZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCBDYXNoaWVyUHJlZmFiIGZyb20gXCIuL0Nhc2hpZXJQcmVmYWJcIjtcclxuaW1wb3J0IFNoZWx2ZVByZWZhYiwgeyBwdXRPbkNvbmZpZyB9IGZyb20gXCIuL1NoZWx2ZVByZWZhYlwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgYnV5Q3JvcENmZyB7XHJcbiAgICBjcm9wSWQ6IG51bWJlciwvL+S9nOeJqUlEXHJcbiAgICBudW06IG51bWJlciwvL+W3sue7j+i0reS5sOeahOaVsOmHj1xyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlUHJlZmFiIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgY3JvcDogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3JvcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0aXBzTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXBzTGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNlbGxOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2VsbFRpcHNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc2VsbFRpcHNIYjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNlbGxUaXBzR29sZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzZWxsVGlwc01vbmV5OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzZWxsVGlwc1hmenM6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICByb2xlOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbkRhdGFdKVxyXG4gICAgc2tlTGlzdDogc3AuU2tlbGV0b25EYXRhW10gPSBbXTtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgLy8gc3RhdGVcclxuXHJcbiAgICBzdGFydFBvaW50ID0gY2MudjIoLTY2MCwgMjMwKTtcclxuICAgIHAgPSBjYy52MigtNDQ1LCAxNDApO1xyXG4gICAgLy8gcCA9IGNjLnYyKDI4NSwgMTEwKTtcclxuXHJcbiAgICAvLyBzcDEgPSBjYy52MigyMjUsIDE4MCk7XHJcbiAgICAvLyBzcDIgPSBjYy52MigtNjAsIDcwKTtcclxuICAgIC8vIHNwMyA9IGNjLnYyKDE5MCwgLTIwKTtcclxuICAgIC8vIHNwNCA9IGNjLnYyKC00MCwgLTEzMCk7XHJcbiAgICAvLyBzcDUgPSBjYy52MigtNzAwLCAtMjg1KTtcclxuICAgIHRhcmdldFBvaW50cyA9IFtcclxuICAgICAgICBjYy52MigtMTQwLCAtNTApLFxyXG4gICAgICAgIGNjLnYyKDEzMCwgLTE1MCksXHJcbiAgICAgICAgY2MudjIoMjcwLCAtMTApLFxyXG4gICAgICAgIGNjLnYyKC0xMCwgMTA1KSxcclxuICAgICAgICBjYy52MigtMzAwLCAyMjApXHJcbiAgICBdXHJcbiAgICBhY2NvdW50UG9pbnQgPSBjYy52Mig0MDAsIC0yODApXHJcbiAgICBvdXRQb2ludCA9IGNjLnYyKDYyMCwgLTI1MClcclxuXHJcbiAgICBjdXJyZW50QWN0aW9uID0gQWN0aW9uVHlwZS5RX1NUQU5EX0xFRlQ7XHJcbiAgICBzaGVsdmU6IFNoZWx2ZVByZWZhYjsvL+WvueW6lOi0p+aetlxyXG4gICAgc2hlbHZlSW5kZXggPSAtMTtcclxuICAgIHNwZWVkID0gMS41O1xyXG4gICAgc3BlZWRfYmFzZSA9IDEuNTtcclxuICAgIG9yZGVyTnVtID0gLTE7Ly/mjpLlnKjnrKzlh6DkuKrkvY3nva5cclxuICAgIHJvbGVJZCA9IC0xO1xyXG4gICAgbmVlZENyb3BJZCA9IC0xOy8v6ZyA6KaB6LSt5Lmw55qE5L2c54mpSURcclxuICAgIGJ1eUNyb3BMaXN0OiBidXlDcm9wQ2ZnW10gPSBbXTtcclxuICAgIGJhc2VDcm9wQ2ZnOiBjcm9wX2NvbmZpZzsvL+mcgOimgei0reS5sOeahOS9nOeJqeWfuuehgOmFjee9rlxyXG4gICAgY3VycmVudFRpbWVzID0gMTsvL+W9k+WJjeesrOWHoOasoei0reS5sFxyXG5cclxuICAgIGlzQWNjb3VudCA9IGZhbHNlOy8v5piv5ZCm5piv57uT6LSm54q25oCBXHJcblxyXG4gICAgY2FzaGllclBmYjogQ2FzaGllclByZWZhYjsvL+e7k+i0puWPsFxyXG5cclxuICAgIGlzSW5pdCA9IHRydWU7XHJcbiAgICBjdXJyZW50WSA9IDA7XHJcblxyXG5cclxuICAgIGppZXpoYW5nSW5keCA9IDA7XHJcblxyXG4gICAgcm9sZUluU2hlbGV2ZUluZGV4ID0gLTE7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuICAgIHNldFJvbGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnJvbGUudGltZVNjYWxlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jcm9wTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpcHNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsbE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxsVGlwc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idXlDcm9wTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmlzSW5pdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnNwZWVkX2Jhc2UgKyB0aGlzLnNwZWVkX2Jhc2UgKiBQbGF5ZXJNb2RlbC5nZXRTcGVlZEFkZCgpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5jcm9wTm9kZSwgdGhpcy5vbkJ1eSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuc2VsbE5vZGUsIHRoaXMub25TZWxsLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuQ0hBTkdFX1JPQUQsIHRoaXMudXBkYXRlU3BlZWQsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpZCDkurrnialpZFxyXG4gICAgICogQHBhcmFtIHNoZWx2ZUluZGV4IOW9k+WJjei0p+aetue0ouW8lVxyXG4gICAgICovXHJcbiAgICBjcmVhdGUoaWQsIHNoZWx2ZTogU2hlbHZlUHJlZmFiLCBjYXNoaWVyUGZiOiBDYXNoaWVyUHJlZmFiKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlSWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNhc2hpZXJQZmIgPSBjYXNoaWVyUGZiO1xyXG4gICAgICAgIGlmIChzaGVsdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGVsdmVJbmRleCA9IHNoZWx2ZS5tSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuc2hlbHZlID0gc2hlbHZlO1xyXG4gICAgICAgICAgICB0aGlzLm9yZGVyTnVtID0gdGhpcy5zaGVsdmUucm9sZU51bTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNoZWx2ZUluZGV4ID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUm9sZSgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q3JvcCgpO1xyXG4gICAgfVxyXG4gICAgLy/pnIDopoHotK3kubDnmoTkvZznialcclxuICAgIHNlbGVjdENyb3AoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNoZWx2ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5zaGVsdmUuY3JvcExpc3Q7XHJcbiAgICAgICAgbGV0IGlkID0gLTE7XHJcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgY3JvcCA9IFV0aWxzLmdldFJhbmRvbUJ5QXJyKGxpc3QpO1xyXG4gICAgICAgICAgICBpZCA9IGNyb3AuY3JvcElkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlkID0gUGxheWVyTW9kZWwuZ2V0TmV3Q3JvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5lZWRDcm9wSWQgPSBpZDtcclxuICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvY3JvcC9zaW5nbGVJY29uL1wiICsgaWQsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcm9wLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJhc2VDcm9wQ2ZnID0gQ29uZmlnTWFuYWdlci5nZXRDcm9wQnlJZCh0aGlzLm5lZWRDcm9wSWQpO1xyXG4gICAgfVxyXG4gICAgLy/liJvlu7rpob7lrqLliqjnlLtcclxuICAgIGNyZWF0ZVJvbGUoKSB7XHJcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5zdGFydFBvaW50KVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5yb2xlSWQgPiA5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZUxpc3RbdGhpcy5yb2xlSWQgLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5yb2xlLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuUV9XQUxLO1xyXG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHVybCA9IFwic3BpbmUvcm9sZS8wXCIgKyB0aGlzLnJvbGVJZCArIFwiL3JvbGVfMFwiICsgdGhpcy5yb2xlSWQ7XHJcbiAgICAgICAgICAgIC8vICAgICBNS1V0aWxzLmxvYWRTa2VsZXRvbkRhdGEodXJsLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yb2xlLnNrZWxldG9uRGF0YSA9IHJlcztcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSwgKCkgPT4geyB9KVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zaGVsdmVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbjEoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbjIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v55u05o6l6LWw5Ye65Y67XHJcbiAgICBhY3Rpb24xKCkge1xyXG4gICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLlFfV0FMSztcclxuICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MubW92ZVRvKDIwLCB0aGlzLm91dFBvaW50KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBsZXQgbmV3QWN0aW9uID0gY2Muc3BlZWQoYWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKG5ld0FjdGlvbik7XHJcbiAgICB9XHJcbiAgICAvL+WOu+i1sOWHuuWOu1xyXG4gICAgZ29PdXQodHlwZSA9IDEpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXRQb2ludHNbdGhpcy5zaGVsdmVJbmRleF1cclxuICAgICAgICB0aGlzLnJvbGUuYW5pbWF0aW9uID0gQWN0aW9uVHlwZS5RX1dBTEs7XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLmFjY291bnRQb2ludDtcclxuICAgICAgICAgICAgdGhpcy5yb2xlLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuUV9XQUxLX0ZJTklTSDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRpcyA9IE1LVXRpbHMudHdvUG9pbnREaXN0YW5jZSh0YXJnZXQsIHRoaXMub3V0UG9pbnQpXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oZGlzIC8gODAsIHRoaXMub3V0UG9pbnQpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZUluU2hlbGV2ZUluZGV4ID0gLTE7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGxldCBuZXdBY3Rpb24gPSBjYy5zcGVlZChhY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obmV3QWN0aW9uKTtcclxuICAgIH1cclxuICAgIC8v5Y6757uT6LSmXHJcbiAgICBnb0FjY291bnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yb2xlLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICB0aGlzLnNoZWx2ZS5yZWZyZXNoUm9sZSh0aGlzKTtcclxuICAgICAgICB0aGlzLnJvbGVJblNoZWxldmVJbmRleCA9IC0xO1xyXG4gICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLlFfV0FMS19GSU5JU0g7XHJcbiAgICAgICAgQ2FzaGllck1hbmFnZXIuYWRkUm9sZSh0aGlzKTtcclxuICAgICAgICAvLyBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXRQb2ludHNbdGhpcy5zaGVsdmVJbmRleF1cclxuICAgICAgICAvLyBsZXQgZGlzID0gTUtVdGlscy50d29Qb2ludERpc3RhbmNlKHRhcmdldCwgdGhpcy5hY2NvdW50UG9pbnQpXHJcbiAgICAgICAgLy8gdGhpcy5yb2xlLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuUV9XQUxLX0ZJTklTSDtcclxuICAgICAgICAvLyB0aGlzLmNhc2hpZXJQZmIucm9sZUxlbisrO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLmNhc2hpZXJQZmIucm9sZVBhcmVudDtcclxuICAgICAgICAvLyBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgLy8gICAgIGNjLm1vdmVUbyhkaXMgLyA4MCwgdGhpcy5hY2NvdW50UG9pbnQueCArIHRoaXMuY2FzaGllclBmYi5yb2xlTGVuICogMTUsIHRoaXMuYWNjb3VudFBvaW50LnkgKyB0aGlzLmNhc2hpZXJQZmIucm9sZUxlbiAqIDE1KSxcclxuICAgICAgICAvLyAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yb2xlLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuUV9TVEFORF9GSU5JU0hfUklHSFQ7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzQWNjb3VudCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLm5vZGUuekluZGV4ID0gOTk5O1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkFERF9DQUhJRVJfUk9MRSwgdGhpcyk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNhc2hpZXJQZmIuYWRkUm9sZSh0aGlzKTtcclxuICAgICAgICAvLyAgICAgfSkpO1xyXG4gICAgICAgIC8vIGxldCBuZXdBY3Rpb24gPSBjYy5zcGVlZChhY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ydW5BY3Rpb24obmV3QWN0aW9uKTtcclxuICAgIH1cclxuICAgIGZpbnNoQWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLlFfU1RBTkRfRklOSVNIX1JJR0hUO1xyXG4gICAgfVxyXG4gICAgc2hvd1NlbGwoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZWxsTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy/nrKzkuIDmrKHotbDliLDmn5DkuKrmkYrkvY3liY1cclxuICAgIGFjdGlvbjIoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuc2hlbHZlLmdldFBvaW50KCk7XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uMSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hlbHZlLndhbGtMZW4rKztcclxuICAgICAgICAvLyBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXRQb2ludHNbdGhpcy5zaGVsdmVJbmRleF1cclxuICAgICAgICBsZXQgZGlzID0gTUtVdGlscy50d29Qb2ludERpc3RhbmNlKHRhcmdldCwgdGhpcy5wKVxyXG5cclxuICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVUbyg0LCB0aGlzLnApLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUuYW5pbWF0aW9uID0gQWN0aW9uVHlwZS5RX1NUQU5EX0xFRlQ7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLlFfV0FMSztcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIC8vIGNjLm1vdmVUbyhkaXMgLyA4MCwgdGFyZ2V0KSxcclxuICAgICAgICAgICAgLy8gY2MubW92ZVRvKGRpcyAvIDgwLCB0YXJnZXQueCAtIHRoaXMub3JkZXJOdW0gKiAxMCwgdGFyZ2V0LnkpLFxyXG4gICAgICAgICAgICBjYy5tb3ZlVG8oZGlzIC8gODAsIHRhcmdldC54LCB0YXJnZXQueSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hlbHZlLmFkZFJvbGUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hlbHZlSW5kZXggPT0gMCB8fCB0aGlzLnNoZWx2ZUluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGUuYW5pbWF0aW9uID0gQWN0aW9uVHlwZS5RX1NUQU5EX1JJR0hUO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS56SW5kZXggPSA4ODg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLkhfU1RBTkQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVyTW9kZWwuZ3VpZGVTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDEsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcm9wTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9CdXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgbmV3QWN0aW9uID0gY2Muc3BlZWQoYWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKG5ld0FjdGlvbik7XHJcbiAgICB9XHJcbiAgICAvL+aUueWPmOaRiuS9jVxyXG4gICAgY2hhbmdlU2hlbGV2ZShzaGVsdmU6IFNoZWx2ZVByZWZhYikge1xyXG5cclxuICAgICAgICBsZXQgb2xkSWRleCA9IHRoaXMuc2hlbHZlSW5kZXg7XHJcbiAgICAgICAgaWYgKHNoZWx2ZSkgdGhpcy5zaGVsdmVJbmRleCA9IHNoZWx2ZS5tSW5kZXg7XHJcbiAgICAgICAgZWxzZSB0aGlzLnNoZWx2ZUluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5vcmRlck51bSA9IHNoZWx2ZS5yb2xlTnVtO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnNoZWx2ZUluZGV4ID09IDIgfHwgdGhpcy5zaGVsdmVJbmRleCA9PSAzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS56SW5kZXggPSA5OTk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLlFfV0FMS19GSU5JU0g7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZVgob2xkSWRleCk7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnNoZWx2ZS5nZXRQb2ludCgpO1xyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ29BY2NvdW50KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRpcyA9IE1LVXRpbHMudHdvUG9pbnREaXN0YW5jZSh0YXJnZXQsIHRoaXMudGFyZ2V0UG9pbnRzW29sZElkZXhdKVxyXG5cclxuICAgICAgICB0aGlzLnJvbGUuYW5pbWF0aW9uID0gQWN0aW9uVHlwZS5RX1dBTEtfRklOSVNIO1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShcclxuXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbyhkaXMgLyA4MCwgdGFyZ2V0LngsIHRhcmdldC55KSxcclxuICAgICAgICAgICAgLy8gY2MubW92ZVRvKGRpcyAvIDgwLCB0YXJnZXQpLFxyXG4gICAgICAgICAgICAvLyBjYy5tb3ZlVG8oZGlzIC8gODAsIHRhcmdldC54ICsgdGhpcy5vcmRlck51bSAqIDEwLCB0YXJnZXQueSt0aGlzLm9yZGVyTnVtKjUpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoZWx2ZS5hZGRSb2xlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hlbHZlSW5kZXggPT0gMiB8fCB0aGlzLnNoZWx2ZUluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGUuYW5pbWF0aW9uID0gQWN0aW9uVHlwZS5RX1NUQU5EX1JJR0hUO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubm9kZS56SW5kZXggPSA4ODg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLkhfU1RBTkQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnpJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAxLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RDcm9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcm9wTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0J1eSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgbmV3QWN0aW9uID0gY2Muc3BlZWQoYWN0aW9uLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKG5ld0FjdGlvbik7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTY2FsZVgob2xkSW5kZXgpIHtcclxuICAgICAgICBpZiAob2xkSW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9sZEluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hlbHZlSW5kZXggPT0gMCB8fCB0aGlzLnNoZWx2ZUluZGV4ID09IDEgfHwgdGhpcy5zaGVsdmVJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAob2xkSW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGVsdmVJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAob2xkSW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGVsdmVJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJvbGUubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ1eSgpIHtcclxuICAgICAgICAvLyB0aGlzLnNoZWx2ZS5yb2xlTnVtLS07XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tTaGVsZXZlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGVsdmUucmVkdWNlQ3JvcCh0aGlzLm5lZWRDcm9wSWQsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGVsdmVJbmRleCA9PSAwIHx8IHRoaXMuc2hlbHZlSW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLlFfU1RBTkRfQlVZXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLkhfU1RBTkRfQlVZXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUuc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2xlLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hlbHZlSW5kZXggPT0gMCB8fCB0aGlzLnNoZWx2ZUluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2xlLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuUV9TVEFORF9GSU5JU0hfUklHSFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2xlLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuSF9TVEFORF9GSU5JU0hcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAwLjUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRCdXlMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y6757uT6LSmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29BY2NvdW50KClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JvcExvc3RCeVNoZWxldmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRCdXlMaXN0KCkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmJ1eUNyb3BMaXN0LmZpbHRlcigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNyb3BJZCA9PSB0aGlzLm5lZWRDcm9wSWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDApIGFyclswXS5udW0rKztcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idXlDcm9wTGlzdC5wdXNoKHsgY3JvcElkOiB0aGlzLm5lZWRDcm9wSWQsIG51bTogMSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+i0p+aetue8uuWwkeW9k+WJjeS9nOeJqVxyXG4gICAgY3JvcExvc3RCeVNoZWxldmUoKSB7XHJcbiAgICAgICAgdGhpcy5jcm9wTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgc3RyID0gXCLogIHmnb/np43ngrnlhL9cIiArIHRoaXMuYmFzZUNyb3BDZmcubmFtZSArIFwi5ZCn77yM5oiR5LiA5Lya5YS/6L+H5p2l5LmwXCJcclxuICAgICAgICB0aGlzLnRpcHNMYWIuc3RyaW5nID0gc3RyO1xyXG4gICAgICAgIHRoaXMudGlwc05vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDEuNSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idXlDcm9wTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvQWNjb3VudCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb091dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGVsdmUucmVmcmVzaFJvbGUodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50aXBzTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/mo4DmtYvotKfmnrbmmK/lkKbmnInlvZPliY3kvZznialcclxuICAgIGNoZWNrU2hlbGV2ZSgpIHtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5zaGVsdmUuY3JvcExpc3QuZmlsdGVyKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY3JvcElkID09IHRoaXMubmVlZENyb3BJZDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRTdGVwKGlzT3Zlcikge1xyXG4gICAgICAgIGlmIChpc092ZXIpIHtcclxuICAgICAgICAgICAgbGV0IHNoZWx2ZSA9IHRoaXMuZ2V0U2hlbGV2ZSgpO1xyXG4gICAgICAgICAgICBpZiAoc2hlbHZlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaGVsdmUucm9sZU51bSsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hlbHZlSW5kZXggPT0gc2hlbHZlLm1JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgMC41LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Q3JvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0J1eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hlbHZlLnJlZnJlc2hSb2xlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hlbHZlID0gc2hlbHZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2hlbGV2ZShzaGVsdmUpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb0FjY291bnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5Y6757uT566XXHJcbiAgICAgICAgICAgIHRoaXMuZ29BY2NvdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hlbHZlc1R5cGUgPSBbMjEsIDIyLCAyMywgMjQsIDI1LF1cclxuICAgIGdldFNoZWxldmUoKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFBsYXllck1vZGVsLnNoZWxldmVMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jdXJyZW50TnVtID4gMCAmJiBpdGVtLnJvbGVOdW0gPCA4O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzaGVsdmUgPSBVdGlscy5nZXRSYW5kb21CeUFycihhcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2hlbHZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8v5Y2W5Ye6XHJcbiAgICBvblNlbGwoKSB7XHJcblxyXG4gICAgICAgIGxldCByYW5kb20gPSBNS1V0aWxzLnJhbmRvbU5NRigwLCAxMDApO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZWxsVGlwc0dvbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxsVGlwc0hiLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGlmIChTREtNYW5hZ2VyLmhhc0N1c3RvbWVyUmVkUmV3YXJkKCkpIHtcclxuXHJcbiAgICAgICAgLy8gICAgIGlmIChyYW5kb20gPCAzMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGdvbGQgPSBNS1V0aWxzLnJhbmRvbU5NKDgwLCAxMjApO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZWxsQmFjayh7IGdvbGQ6IGdvbGQgfSlcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VsbFRpcHNHb2xkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlbGxUaXBzSGIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TREtfUkVXQVJEX0NPTkZJRywgdGhpcy5yZXdhcmRDZmdCYWNrLCB0aGlzKVxyXG4gICAgICAgIC8vICAgICAgICAgU0RLTWFuYWdlci5nZXRDdXN0b21lckNvbmZpZyh0aGlzLnNoZWx2ZS5tSWQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGdvbGQgPSBNS1V0aWxzLnJhbmRvbU5NKDIwMCwgMjMwKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxsQmFjayh7IGdvbGQ6IGdvbGQgfSlcclxuICAgICAgICAgICAgdGhpcy5zZWxsVGlwc0dvbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV3YXJkQ2ZnQmFjayhkYXRhKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlNES19SRVdBUkRfQ09ORklHLCB0aGlzLnJld2FyZENmZ0JhY2ssIHRoaXMpXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlNES19SRVdBUkRfR09ULCB0aGlzLnNlbGxCYWNrLCB0aGlzKVxyXG4gICAgICAgIFNES01hbmFnZXIuZ2V0UmVkUGFja1Jld2FyZChkYXRhLmNvbmZpZ0lkKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcclxuICAgICAqICAvLyB7XHJcbiAgICAgLy8gICAgIFwiY29kZVwiOjAgLy8wLeaIkOWKnyDlhbbku5bpooblj5blpLHotKUg6YWM5oOF5aSE55CGXHJcbiAgICAgLy8gICAgIFwibXNnXCI6IFwi6aKG5Y+W5oiQ5YqfXCIsIC8v6Z2eMOaDheWGteS8mue7meWHuuWvueW6lG1zZyDphYzmg4XlpITnkIZcclxuICAgICAvLyAgICAgXCJhbW91bnRcIjpcIjEuNVwiLC8v5b2T5YmN57uT6LSm6aKG5Y+W6YeR6aKdXHJcbiAgICAgLy8gICAgIFwiYmFsYW5jZVwiOlwiMTAwLjMzXCIsLy/nlKjmiLfmgLvph5Hpop1cclxuICAgICAvLyAgICAgXCJsZXZlbFwiOjEvL+eUqOaIt+etiee6p1xyXG4gICAgIC8vIH1cclxuICAgICAqL1xyXG4gICAgc2VsbEJhY2soZGF0YSkge1xyXG5cclxuICAgICAgICBsZXQgdHlwZSA9IHRoaXMuc2hlbHZlc1R5cGVbdGhpcy5zaGVsdmUubUluZGV4XVxyXG4gICAgICAgIGxldCBhZGQgPSBDb25maWdNYW5hZ2VyLmdldFNoZWx2ZUJ5VHlwZSh0eXBlLCB0aGlzLnNoZWx2ZS5tTHYpLmFkZF9udW07XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5TREtfUkVXQVJEX0dPVCwgdGhpcy5zZWxsQmFjaywgdGhpcylcclxuICAgICAgICBsZXQgeGZ6cyA9ICgwLjIgKiAoMSArIGFkZCAvIDEwMCkpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuY3JvcE5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgaWYgKGRhdGEuZ29sZCkge1xyXG4gICAgICAgICAgICBsZXQgZ29sZCA9IE1hdGguZmxvb3IoZGF0YS5nb2xkICogKDEgKyBhZGQgLyAxMDApKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxsVGlwc01vbmV5LnN0cmluZyA9IFwiK1wiICsgZ29sZCArIFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFRpcHNYZnpzLnN0cmluZyA9IFwiK1wiICsgeGZ6cyArIFwiXCI7XHJcbiAgICAgICAgICAgIFBsYXllck1vZGVsLnNldEdvbGQoZ29sZCwgMSwgcCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxsVGlwc01vbmV5LnN0cmluZyA9IFwiK1wiICsgTnVtYmVyKGRhdGEucmVkQmVhbikudG9GaXhlZCgyKSArIFwi5YWDXCI7XHJcblxyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5zZXRNb25leShkYXRhLnVzZXJSZWRCZWFuLCBkYXRhLnJlZEJlYW4sIHApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQbGF5ZXJNb2RlbC5zZXRYZnpzKE51bWJlcih4ZnpzKSwgcCk7XHJcblxyXG4gICAgICAgIFBsYXllck1vZGVsLmNoZWNrQWRkT3JkZXIoMTAwLCAxLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5vcmRlclN1Y2Nlc3NWaWV3KTtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLk9SREVSX0NPTVBMRVRFX1VQREFURSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBQbGF5ZXJNb2RlbC56ZEdrTnVtKys7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkhLSEJfVVBEQVRFKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxsTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGxUaXBzTm9kZS55ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuc2VsbFRpcHNOb2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2FzaGllclBmYi5vbkF1dG9TZWxsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsbFRpcHNOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC41LCB0aGlzLnNlbGxUaXBzTm9kZS54LCAyMDApLmVhc2luZyhjYy5lYXNlT3V0KDUuMCkpLCBjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGxUaXBzTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAxLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ29PdXQoMik7XHJcbiAgICAgICAgICAgIC8vIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgMC4yLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FzaGllclBmYi51cGRhdGVSb2xlKCk7XHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIC8vIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5VUERBVEVfQ0FISUVSX1JPTEUpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNoYW5nZUFjdGlvbihhY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnJvbGUuYW5pbWF0aW9uID0gYWN0aW9uO1xyXG4gICAgfVxyXG4gICAgaW50ZXJ2YWwgPSAwO1xyXG4gICAgaXNNb3ZlID0gZmFsc2U7XHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgcCA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0luaXQgJiYgcC54ID49IHRoaXMub3V0UG9pbnQueCAtIDMwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaW50ZXJ2YWwrKztcclxuICAgICAgICAvLyBpZiAodGhpcy5pbnRlcnZhbCA+PSAxMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmludGVydmFsID0gMDtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaXNNb3ZlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgYXJyID0gdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbjtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gU29ydFV0aWxzLnF1aWNrU29ydChhcnIsIFwieVwiLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMubm9kZS51dWlkID09IGFycltpXS51dWlkKSBjb250aW51ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGlzID0gTUtVdGlscy50d29Qb2ludERpc3RhbmNlKHRoaXMubm9kZS5wb3NpdGlvbiwgYXJyW2ldLnBvc2l0aW9uKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChkaXMgPCAxMDApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT1cIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmKHRoaXMubm9kZS55PmFycltpXS55KXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBhcnJbaV0uekluZGV4LTE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGFycltpXS56SW5kZXgrMTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRZID0gdGhpcy5ub2RlLnk7XHJcblxyXG4gICAgfVxyXG4gICAgYXV0b0J1eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zaGVsdmUuaXNBdXRvKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgMSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1eSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcclxuICAgICAgICBHYW1lUG9vbE1hbmFnZXIucHV0Um9sZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWVzID0gMTtcclxuICAgICAgICB0aGlzLnNoZWx2ZUluZGV4ID0gLTE7XHJcbiAgICAgICAgdGhpcy5pc0FjY291bnQgPSBmYWxzZTtcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3BlZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3BlZWRfYmFzZSArIHRoaXMuc3BlZWRfYmFzZSAqIFBsYXllck1vZGVsLmdldFNwZWVkQWRkKCk7XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluW8leWvvOWdkOagh1xyXG4gICAgZ2V0R3VpZGVQb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcm9wTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgfVxyXG4gICAgLy8gIOW8leWvvOi0reS5sFxyXG4gICAgZ3VpZGVCdXkoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zaGVsdmUucm9sZU51bS0tO1xyXG4gICAgICAgIHRoaXMuc2hlbHZlLnJlZHVjZUNyb3AodGhpcy5uZWVkQ3JvcElkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmNyb3BOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLkhfU1RBTkRfQlVZXHJcbiAgICAgICAgdGhpcy5yb2xlLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnksIGxvb3BDb3VudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJvbGUuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hlbHZlSW5kZXggPT0gMiB8fCB0aGlzLnNoZWx2ZUluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9sZS5hbmltYXRpb24gPSBBY3Rpb25UeXBlLlFfU1RBTkRfRklOSVNIX1JJR0hUO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuSF9TVEFORF9GSU5JU0hcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDAuNSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCdXlMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAvL+WOu+e7k+i0plxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb0FjY291bnQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUoaWQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIjExMTExMTE9XCIpO1xyXG4gICAgLy8gICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihpZCAqIDMwLCAwKVxyXG4gICAgLy8gICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0UG9pbnQpXHJcbiAgICAvLyAgICAgbGV0IHVybCA9IGBzcGluZS9yb2xlLzAke2lkfS9yb2xlXzAke2lkfWA7XHJcbiAgICAvLyAgICAgaWYgKGlkID4gOSkge1xyXG4gICAgLy8gICAgICAgICB1cmwgPSBgc3BpbmUvcm9sZS8ke2lkfS9yb2xlXyR7aWR9YFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyB1cmwgPSBgc3BpbmUvYWxpZW4tZXNzYDtcclxuICAgIC8vICAgICB1cmwgPSBgc3BpbmUvc2tlbGV0b25gXHJcbiAgICAvLyAgICAgTUtVdGlscy5sb2FkU2tlbGV0b25EYXRhKHVybCwgKHJlcykgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09c3BpbmU9PT09PT1cIiwgcmVzKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5yb2xlLnNrZWxldG9uRGF0YSA9IHJlcztcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5yb2xlLmFuaW1hdGlvbiA9IEFjdGlvblR5cGUuUV9XQUxLO1xyXG4gICAgLy8gICAgIH0sICgpID0+IHsgfSlcclxuICAgIC8vIH1cclxufVxyXG4iXX0=
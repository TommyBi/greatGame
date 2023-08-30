"use strict";
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
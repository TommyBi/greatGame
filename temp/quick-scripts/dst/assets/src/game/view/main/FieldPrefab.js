
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/FieldPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a9390MAHBFp654TaWVz65J', 'FieldPrefab');
// src/game/view/main/FieldPrefab.ts

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
exports.CropState = void 0;
var JSHelper_1 = require("../../../framework/helper/JSHelper");
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var Utils_1 = require("../../../framework/tools/Utils");
var CConst_1 = require("../../consts/CConst");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var EffectManager_1 = require("../../manager/EffectManager");
var PopView1_1 = require("../popView/PopView1");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CropState;
(function (CropState) {
    CropState[CropState["EMPTY"] = 0] = "EMPTY";
    CropState[CropState["SEEDING"] = 1] = "SEEDING";
    CropState[CropState["PEST"] = 2] = "PEST";
    CropState[CropState["RIPE"] = 3] = "RIPE";
})(CropState = exports.CropState || (exports.CropState = {}));
var FieldPrefab = /** @class */ (function (_super) {
    __extends(FieldPrefab, _super);
    function FieldPrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.buildTips = null;
        _this.crop = null;
        _this.qipao = null;
        _this.qpJs = null;
        _this.qipaoIcon = null;
        _this.qipaoDesc = null;
        _this.qpJsLb = null;
        _this.tipsLb = null;
        _this.getTips = null;
        _this.getTipsLb = null;
        _this.getIcon = null;
        _this.timePro = null;
        _this.proBg = null;
        _this.pro = null;
        _this.timeLb = null;
        _this.lvUpEff = null;
        _this.changeSkinEff = null;
        _this.haichong = null;
        _this.chuchong = null;
        _this.qipaoFrame = [];
        _this.config = {
            id: 0,
            type: 0,
            state: 0,
            cropState: 0,
            cropId: 0,
            lastTime: 0,
            level: 1,
        };
        _this.interval = 0;
        _this.currentCropState = CropState.EMPTY;
        _this.isAddSpeed = false; //是否加速中
        _this.addSpeedTime = 3;
        _this.one_speed = 1;
        _this.addSpeedPro = 0;
        _this.mIndex = -1;
        _this.saveDataTime = 0; //几秒保存一次数据
        _this.totalTime = 0; //成熟所需总时间
        //检测加速钞票是否充足
        _this.diffGold = 0;
        return _this;
    }
    FieldPrefab.prototype.onLoad = function () {
        this.buildTips.active = false;
        this.lvUpEff.node.active = false;
        this.changeSkinEff.node.active = false;
        this.thisPoint = this.node;
    };
    FieldPrefab.prototype.start = function () {
    };
    FieldPrefab.prototype.onEnable = function () {
        EventDispath_1.default.on(this.qipao, this.onQipaoClick, this, 0, false);
        EventDispath_1.default.on(this.buildTips, this.onBuild, this, 0, false);
        EventDispath_1.default.addEventListener(EventType_1.EventType.CROP_ADD_SPEED, this.addSpeed, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.FIELD_BUILD, this.onBuildBack, this);
    };
    FieldPrefab.prototype.onBuild = function () {
        //弹出场景元素信息面板
        // this.buildTips.active = false;
        // this.config = {
        //     id: this.config.id,
        //     type: this.config.type,
        //     state: 1,
        //     cropState: 0,
        //     cropId: 0,
        //     lastTime: 0,
        //     level: 1,
        // }
        var _this = this;
        // PlayerModel.changeFieldSkin(this.mIndex, 1)
        // this.changeState(CropState.EMPTY);
        // this.changeSkin();
        // MKUtils.setNodeDelay(this.node, 1, () => {
        //     this.qipaoAnim();
        // })
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.selectBack, this);
        // let id = this.config.id + "01"
        // SDKManager.getUnlockConfig(7, Number(id));
        UIMananger_1.default.showPanel(UIType_1.default.popView1, null, function () {
            EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, _this.selectBack, _this);
        }, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.FIELD);
    };
    FieldPrefab.prototype.selectBack = function () {
        MkUtils_1.default.alertTips("扩建土地成功");
        this.buildTips.active = false;
        PlayerModel_1.default.changeFieldSkin(this.mIndex, 1);
        this.changeSkin();
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.selectBack, this);
        // UIMananger.showPanel(UIType.GoodsInfoView, null, null, UIEffectType.SCALE, { selectType: LVUP_TYPE.FIELD, id: id, amount: data.amount });
    };
    FieldPrefab.prototype.onBuildBack = function (index) {
        if (this.mIndex == index)
            this.selectBack();
    };
    FieldPrefab.prototype.update = function (dt) {
        if (this.config.lastTime > 0 && this.config.cropState < 2 && this.config.cropState > 0 && !this.isAddSpeed) {
            this.interval++;
            if (this.interval >= 70) {
                this.saveDataTime++;
                this.config.lastTime--;
                this.proBg.active = true;
                this.pro.fillRange = (this.totalTime - this.config.lastTime) / this.totalTime;
                // if (this.config.lastTime <= 0) {
                //     this.proBg.active = false;
                //     this.timeLb.node.active = false;
                // }
                ComponentHelper_1.default.labelTimeFormat(this.timeLb.node, this.config.lastTime);
                this.interval = 0;
                // if ((this.totalTime - this.config.lastTime) < this.totalTime) {
                // if (this.currentCropState != CropState.SEEDING) {
                //     this.currentCropState = CropState.SEEDING;
                //     this.changeState(CropState.SEEDING)
                // }
                // } else 
                if (this.config.lastTime <= 1) {
                    if (this.currentCropState != CropState.RIPE) {
                        PlayerModel_1.default.setCropRipetimes();
                        this.checkHaichogn();
                    }
                }
            }
            if (this.saveDataTime >= 3) {
                this.saveDataTime = 0;
                PlayerModel_1.default.saveData();
            }
        }
        else {
            if (this.isAddSpeed) {
                this.addSpeedPro += dt;
                // this.timePro.progress = (this.totalTime - this.addSpeedTime) / this.totalTime;
                this.pro.fillRange = (this.totalTime - this.addSpeedTime) / this.totalTime;
                this.addSpeedTime -= this.one_speed;
                if (this.addSpeedTime < 0)
                    this.addSpeedTime = 0;
                ComponentHelper_1.default.labelTimeFormat(this.timeLb.node, this.addSpeedTime);
                if (this.totalTime - this.addSpeedTime >= this.totalTime) {
                    this.isAddSpeed = false;
                    if (this.currentCropState != CropState.RIPE && this.config.lastTime <= 0) {
                        PlayerModel_1.default.setCropRipetimes();
                        this.checkHaichogn();
                    }
                    this.addSpeedPro = 0;
                }
            }
        }
    };
    //成熟检测是否有害虫
    FieldPrefab.prototype.checkHaichogn = function () {
        if (PlayerModel_1.default.getCropRipetimes() >= 9 && PlayerModel_1.default.pestNum < 2) {
            var addCfg = ConfigManager_1.default.getPropById(CConst_1.propType.scarecrow, PlayerModel_1.default.getUIConfig().scarecrowlv);
            var rate = addCfg.add_num;
            var random = MkUtils_1.default.randomNMF(0, 100);
            if (random < rate) {
                PlayerModel_1.default.pestNum++;
                this.currentCropState = CropState.PEST;
                this.changeState(CropState.PEST);
            }
            else {
                this.currentCropState = CropState.RIPE;
                this.changeState(CropState.RIPE);
            }
        }
        else {
            this.currentCropState = CropState.RIPE;
            this.changeState(CropState.RIPE);
        }
    };
    FieldPrefab.prototype.setData = function (index) {
        this.mIndex = index;
        this.changeSkin(0);
        // if (!PlayerModel.guideState && index == 0) {
        //     EventDispath.addEventListener(EventType.CROP_PLANT, this.onPlant, this);
        // }
    };
    FieldPrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        var cfg = PlayerModel_1.default.getFieldListCfg()[this.mIndex];
        this.config = cfg;
        if (this.config.cropId != 0) {
            if (Global_1.default.isCeshi_version)
                this.totalTime = 5;
            else
                this.getPlantTime();
        }
        if (isLvUp == 0 && this.config.cropState == CropState.SEEDING) {
            var offlineTime = PlayerModel_1.default.offlineLastTimestamp;
            var currentTime = Math.floor(new Date().getTime() / 1000);
            var time = currentTime - offlineTime;
            if (this.config.lastTime > time) {
                this.config.lastTime -= time;
            }
            else {
                this.config.lastTime = 0;
                // this.changeState(CropState.RIPE);
                this.config.cropState = CropState.RIPE;
            }
        }
        this.currentCropState = this.config.cropState;
        if (this.config.state > 0) {
            this.buildTips.active = false;
            // if (this.config.lastTime < 0) {
            //     this.config.cropState = CropState.RIPE;
            // }
            var cState = this.config.cropState;
            this.changeState(cState);
            this.qipaoAnim();
        }
        else {
            this.qipao.active = false;
            this.buildTips.active = true;
        }
        if (cfg.level == 0)
            return;
        MkUtils_1.default.loadSpriteFrame("texture/prop/field/" + ("0" + cfg.level), function (res) {
            _this.bg.spriteFrame = res;
            if (isLvUp) {
                _this.changeSkinEff.node.active = true;
                _this.changeSkinEff.animation = "animation";
            }
        });
    };
    //切换状态
    FieldPrefab.prototype.changeState = function (cState) {
        var _this = this;
        this.config.cropState = cState;
        this.crop.node.active = true;
        this.crop.node.stopAllActions();
        this.qipao.active = true;
        this.qpJs.active = false;
        this.qipaoIcon.node.active = true;
        if (cState != CropState.EMPTY) {
            MkUtils_1.default.loadSpriteFrame("texture/crop/singleIcon/" + ("" + this.config.cropId), function (res) {
                _this.getIcon.spriteFrame = res;
            });
        }
        this.timeLb.node.active = false;
        this.proBg.active = false;
        this.pro.fillRange = 0;
        if (cState == CropState.EMPTY) {
            this.crop.node.active = false;
            this.timePro.node.active = false;
            this.proBg.active = false;
            this.qipaoIcon.spriteFrame = this.qipaoFrame[0];
            this.qipaoDesc.string = "种植";
        }
        else if (cState == CropState.SEEDING) {
            MkUtils_1.default.loadSpriteFrame("texture/crop/ripe/" + ("" + this.config.cropId), function (res) {
                _this.crop.spriteFrame = res;
            });
            // ComponentHelper.setHeartAction(this.crop.node, 1, false, 1.03);
            this.qipaoIcon.node.active = false;
            this.qpJs.active = true;
            this.qpJsLb.string = ConfigManager_1.default.add_speed_gold + "";
            this.qipaoDesc.string = "加速";
            this.timeLb.node.active = true;
            this.proBg.active = true;
        }
        else if (cState == CropState.RIPE) {
            JSHelper_1.default.playEffect("crop_ripe");
            MkUtils_1.default.loadSpriteFrame("texture/crop/ripe/" + ("" + this.config.cropId), function (res) {
                _this.crop.spriteFrame = res;
            });
            MkUtils_1.default.loadSpriteFrame("texture/crop/singleIcon/" + ("" + this.config.cropId), function (res) {
                _this.qipaoIcon.spriteFrame = res;
            });
            this.timePro.node.active = false;
            this.proBg.active = false;
            this.qipaoDesc.string = "收获";
        }
        else if (cState == CropState.PEST) {
            this.qipaoIcon.spriteFrame = this.qipaoFrame[1];
            JSHelper_1.default.playEffect("crop_ripe");
            MkUtils_1.default.loadSpriteFrame("texture/crop/ripe/" + ("" + this.config.cropId), function (res) {
                _this.crop.spriteFrame = res;
            });
            this.timePro.node.active = false;
            this.proBg.active = false;
            this.qipaoDesc.string = "除虫";
            this.haichong.node.active = true;
            this.haichong.animation = "haichong";
            this.haichong.timeScale = 0.6;
        }
        //第一版bug修改注释升级效果
        // if (cState != CropState.EMPTY) {
        //     this.lvUpEff.node.active = true;
        //     this.lvUpEff.animation = "shengji";
        // }
        PlayerModel_1.default.saveUiData();
    };
    //气泡点击
    FieldPrefab.prototype.onQipaoClick = function () {
        if (this.isAddSpeed)
            return;
        switch (this.config.cropState) {
            case 0: //种植
                if (PlayerModel_1.default.guideStep >= 0) {
                    EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
                }
                //打开作物面板，选择作物
                EventDispath_1.default.addEventListener(EventType_1.EventType.CROP_PLANT, this.onPlant, this);
                EventDispath_1.default.addEventListener(EventType_1.EventType.VEGETABLE_CLOSE, this.onVrgetableClose, this);
                UIMananger_1.default.showPanel(UIType_1.default.VegetablesView, null, null, null);
                break;
            case 1: //加速
                if (this.checkGold()) {
                    // EventDispath.send(EventType.JX_SC, { type: 1, point: this.thisPoint });
                    // EventDispath.addEventListener(EventType.JIASU, this.onJiasu, this);
                    this.onJiasu();
                }
                break;
            case 2: //除虫
                UIMananger_1.default.showPanel(UIType_1.default.clearPestView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.thisPoint, this.config);
                EventDispath_1.default.addEventListener(EventType_1.EventType.CLEAR_PEST_CLOSE, this.closePest, this);
                EventDispath_1.default.addEventListener(EventType_1.EventType.SHACHONG, this.onShachong, this);
                break;
            case 3: //收获
                if (PlayerModel_1.default.guideStep >= 0) {
                    EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
                    EventDispath_1.default.send(EventType_1.EventType.MAIN_LOCK, true);
                }
                this.checkGetCrop();
                break;
            default:
                break;
        }
    };
    //种植
    FieldPrefab.prototype.onPlant = function (id) {
        var _this = this;
        EventDispath_1.default.removeByEvent(EventType_1.EventType.CROP_PLANT, this.onPlant, this);
        console.log("种植id：", id);
        // SDKManager.onEvent(Global.EVENT_ACTION.client_seed)
        PlayerModel_1.default.setPlantNumById(id);
        this.config.cropId = id;
        this.config.cropState = 1;
        if (Global_1.default.isCeshi_version)
            this.totalTime = 5;
        else
            this.getPlantTime();
        this.config.lastTime = this.totalTime;
        PlayerModel_1.default.saveUiData();
        MkUtils_1.default.setNodeDelay(this.node, 0.1, function () {
            _this.currentCropState = CropState.SEEDING;
            _this.changeState(CropState.SEEDING);
        });
        EventDispath_1.default.send(EventType_1.EventType.UPDATE_FIELD_TIPS);
    };
    FieldPrefab.prototype.onVrgetableClose = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.CROP_PLANT, this.onPlant, this);
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VEGETABLE_CLOSE, this.onVrgetableClose, this);
    };
    FieldPrefab.prototype.checkGold = function () {
        var gold = PlayerModel_1.default.getGold();
        if (gold < ConfigManager_1.default.add_speed_gold) {
            // this.diffGold = ConfigManager.add_speed_gold - gold;
            // EventDispath.addEventListener(EventType.VIDEO_BACK, this.addGold, this);
            UIMananger_1.default.showPanel(UIType_1.default.popView1, null, function () {
                // EventDispath.removeByEvent(EventType.VIDEO_BACK, this.addGold, this);
            }, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.GOLD2, 1000);
            return false;
        }
        return true;
    };
    //加速
    FieldPrefab.prototype.onJiasu = function () {
        PlayerModel_1.default.setGold(-ConfigManager_1.default.add_speed_gold);
        this.addSpeed();
        // let cfg = ConfigManager.getPropById(propType.pipe, PlayerModel.getUIConfig().pipelv);
        // this.config.lastTime -= cfg.add_num * 60;
        // this.addSpeedTime = cfg.add_num * 60;
        // this.isAddSpeed = true;
        // this.flyJsTips(cfg.add_num)
        // EventDispath.removeByEvent(EventType.JIASU, this.onJiasu, this);
    };
    //关闭除虫面板
    FieldPrefab.prototype.closePest = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.SHACHONG, this.onShachong, this);
    };
    //除虫
    FieldPrefab.prototype.onShachong = function (data) {
        var _this = this;
        EventDispath_1.default.removeByEvent(EventType_1.EventType.SHACHONG, this.onShachong, this);
        this.chuchong.node.active = true;
        this.chuchong.animation = "shachong";
        this.qipao.active = false;
        this.chuchong.setCompleteListener(function (trackEntry, loopCount) {
            _this.chuchong.setCompleteListener(null);
            _this.chuchong.node.active = false;
            _this.haichong.node.active = false;
            _this.changeState(CropState.RIPE);
            UIMananger_1.default.showPanel(UIType_1.default.popRewardView, null, function () {
            }, UIEffectManager_1.UIEffectType.SCALE, 0, data);
        });
        PlayerModel_1.default.pestNum--;
    };
    //收获
    FieldPrefab.prototype.checkGetCrop = function () {
        var _this = this;
        var getNum = 1;
        if (PlayerModel_1.default.crop_get_num >= ConfigManager_1.default.crop_maxGet_interval) {
            var random = MkUtils_1.default.randomNMF(0, 1);
            if (random < ConfigManager_1.default.crop_maxGet_rate) {
                getNum = ConfigManager_1.default.crop_maxGet_num;
                PlayerModel_1.default.crop_get_num = 0;
                EventDispath_1.default.addEventListener(EventType_1.EventType.CROP_GC, this.getCrop, this);
                // MKUtils.alertTips("弹出高产页面")
                UIMananger_1.default.showPanel(UIType_1.default.popGcView, null, function () {
                    EventDispath_1.default.removeByEvent(EventType_1.EventType.CROP_GC, _this.getCrop, _this);
                }, UIEffectManager_1.UIEffectType.SCALE, this.config.cropId);
                return;
            }
        }
        if (this.checkHouseMax(getNum)) {
            MkUtils_1.default.alertTips("仓库放不下了，快点卖出作物赚钱吧");
            return;
        }
        this.getCrop(1);
    };
    FieldPrefab.prototype.getCrop = function (num) {
        var _this = this;
        EventDispath_1.default.send(EventType_1.EventType.CROP_GET);
        this.changeState(CropState.EMPTY);
        this.qipao.active = false;
        EventDispath_1.default.removeByEvent(EventType_1.EventType.CROP_GC, this.getCrop, this);
        this.flyGetTips(num);
        PlayerModel_1.default.crop_get_num++;
        JSHelper_1.default.playEffect("crop_ripe", false, true);
        this.lvUpEff.animation = "shengji";
        var startNode = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        EffectManager_1.default.playCrop(startNode, this.config.cropId, 8, function () {
            if (!PlayerModel_1.default.guideState)
                EventDispath_1.default.send(EventType_1.EventType.MAIN_LOCK, false);
        });
        PlayerModel_1.default.setHouseAddCrop(this.config.cropId, num);
        PlayerModel_1.default.setCropGetNum(num);
        PlayerModel_1.default.setXfzs(0.2);
        this.scheduleOnce(function () {
            PlayerModel_1.default.checkAddOrder(_this.config.cropId, num, function () {
                // UIMananger.showPanel(UIType.orderSuccessView);
                EventDispath_1.default.send(EventType_1.EventType.ORDER_COMPLETE_UPDATE);
                if (PlayerModel_1.default.guideStep >= 0) {
                    EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
                }
            }, function () {
                if (PlayerModel_1.default.guideStep >= 0) {
                    EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
                }
                //辛苦红包判断
                if (PlayerModel_1.default.getCropGetNum() >= ConfigManager_1.default.hard_hb_interval) {
                    PlayerModel_1.default.setCropGetNum(-PlayerModel_1.default.getCropGetNum());
                    if (!UIMananger_1.default.checkPanel(UIType_1.default.orderSuccessView)) {
                        UIMananger_1.default.showPanel(UIType_1.default.hardView, null, null, UIEffectManager_1.UIEffectType.SCALE, 0);
                    }
                }
            });
            _this.reset();
            EventDispath_1.default.send(EventType_1.EventType.UPDATE_FIELD_TIPS);
            MkUtils_1.default.setNodeDelay(_this.node, 0.5, function () {
                _this.qipaoAnim();
            });
        }, 1);
        // SDKManager.onEvent(Global.EVENT_ACTION.client_get_crops)
    };
    //钞票不足，看视频
    FieldPrefab.prototype.addGold = function () {
        // PlayerModel.setGold(this.diffGold);
        // EventDispath.removeByEvent(EventType.VIDEO_BACK, this.addGold, this);
    };
    //加速
    FieldPrefab.prototype.addSpeed = function () {
        var _this = this;
        if (this.config.cropState != CropState.SEEDING)
            return;
        this.qipao.active = false;
        this.haichong.node.active = true;
        this.haichong.animation = "jiasu";
        this.haichong.setCompleteListener(function (trackEntry, loopCount) {
            _this.haichong.setCompleteListener(null);
            _this.haichong.node.active = false;
            var cfg = ConfigManager_1.default.getPropById(CConst_1.propType.pipe, PlayerModel_1.default.getUIConfig().pipelv);
            if (_this.config.lastTime > cfg.add_num * 60) {
                _this.config.lastTime -= cfg.add_num * 60;
                _this.addSpeedTime = cfg.add_num * 60;
            }
            else {
                _this.addSpeedTime = _this.config.lastTime;
                _this.config.lastTime -= cfg.add_num * 60;
            }
            if (_this.addSpeedTime > 100) {
                _this.one_speed = 4;
            }
            _this.isAddSpeed = true;
            _this.flyJsTips(cfg.add_num);
        });
    };
    FieldPrefab.prototype.reset = function () {
        this.config.cropId = 0;
        this.config.lastTime = 0;
        this.crop.node.active = false;
        this.qipao.active = false;
        PlayerModel_1.default.saveData();
    };
    FieldPrefab.prototype.qipaoAnim = function () {
        this.qipao.active = true;
        this.qipao.stopAllActions();
        this.qipao.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.3, 1.2), cc.scaleTo(0.3, 1), cc.scaleTo(0.3, 1.2), cc.scaleTo(0.3, 1), cc.delayTime(2))));
    };
    //检测仓库是否达到上限
    FieldPrefab.prototype.checkHouseMax = function (value) {
        var lv = PlayerModel_1.default.getUIConfig().warehouselv;
        // let arr = ConfigManager.prop.filter((value) => {
        //     return value.id == Number(propType.warehouse + `0${id}`);
        // })
        var cfg = ConfigManager_1.default.getPropById(CConst_1.propType.warehouse, lv);
        var currentNum = PlayerModel_1.default.getCurrentPutNum();
        if ((cfg.add_num - currentNum) < value)
            return true;
        return false;
    };
    FieldPrefab.prototype.getPlantTime = function () {
        var time = ConfigManager_1.default.getCropTime(this.config.cropId, PlayerModel_1.default.getPlantNumById(this.config.cropId));
        var add = PlayerModel_1.default.getTimeAdd(this.config.type, this.config.level);
        this.totalTime = time - add * time;
    };
    FieldPrefab.prototype.flyJsTips = function (num) {
        var _this = this;
        this.tipsLb.node.stopAllActions();
        this.tipsLb.node.active = true;
        this.tipsLb.node.opacity = 255;
        this.tipsLb.string = "-" + num + "\u5206\u949F";
        this.tipsLb.node.runAction(cc.sequence(cc.moveTo(Utils_1.default._FT(30), cc.v2(this.tipsLb.node.x, 100)), cc.fadeOut(Utils_1.default._FT(15)), cc.callFunc(function () {
            _this.tipsLb.node.active = false;
            _this.tipsLb.node.y = 0;
        })));
    };
    FieldPrefab.prototype.flyGetTips = function (num) {
        var _this = this;
        this.getTipsLb.string = "+" + num;
        this.getTips.stopAllActions();
        this.getTips.active = true;
        this.getTips.opacity = 255;
        this.getTips.runAction(cc.sequence(cc.moveTo(Utils_1.default._FT(30), cc.v2(this.getTips.x, 150)), cc.fadeOut(Utils_1.default._FT(15)), cc.callFunc(function () {
            _this.getTips.active = false;
            _this.getTips.y = 0;
        })));
    };
    __decorate([
        property(cc.Sprite)
    ], FieldPrefab.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], FieldPrefab.prototype, "buildTips", void 0);
    __decorate([
        property(cc.Sprite)
    ], FieldPrefab.prototype, "crop", void 0);
    __decorate([
        property(cc.Node)
    ], FieldPrefab.prototype, "qipao", void 0);
    __decorate([
        property(cc.Node)
    ], FieldPrefab.prototype, "qpJs", void 0);
    __decorate([
        property(cc.Sprite)
    ], FieldPrefab.prototype, "qipaoIcon", void 0);
    __decorate([
        property(cc.Label)
    ], FieldPrefab.prototype, "qipaoDesc", void 0);
    __decorate([
        property(cc.Label)
    ], FieldPrefab.prototype, "qpJsLb", void 0);
    __decorate([
        property(cc.Label)
    ], FieldPrefab.prototype, "tipsLb", void 0);
    __decorate([
        property(cc.Node)
    ], FieldPrefab.prototype, "getTips", void 0);
    __decorate([
        property(cc.Label)
    ], FieldPrefab.prototype, "getTipsLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], FieldPrefab.prototype, "getIcon", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], FieldPrefab.prototype, "timePro", void 0);
    __decorate([
        property(cc.Node)
    ], FieldPrefab.prototype, "proBg", void 0);
    __decorate([
        property(cc.Sprite)
    ], FieldPrefab.prototype, "pro", void 0);
    __decorate([
        property(cc.Label)
    ], FieldPrefab.prototype, "timeLb", void 0);
    __decorate([
        property(sp.Skeleton)
    ], FieldPrefab.prototype, "lvUpEff", void 0);
    __decorate([
        property(sp.Skeleton)
    ], FieldPrefab.prototype, "changeSkinEff", void 0);
    __decorate([
        property(sp.Skeleton)
    ], FieldPrefab.prototype, "haichong", void 0);
    __decorate([
        property(sp.Skeleton)
    ], FieldPrefab.prototype, "chuchong", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], FieldPrefab.prototype, "qipaoFrame", void 0);
    FieldPrefab = __decorate([
        ccclass
    ], FieldPrefab);
    return FieldPrefab;
}(cc.Component));
exports.default = FieldPrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vRmllbGRQcmVmYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtEQUEwRDtBQUUxRCw4RUFBMEU7QUFDMUUsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNEVBQXVFO0FBQ3ZFLDREQUF1RDtBQUN2RCx3REFBbUQ7QUFDbkQsOENBQStDO0FBQy9DLDhDQUF5QztBQUN6Qyw4Q0FBeUM7QUFDekMsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUN4RCw2REFBd0Q7QUFDeEQsZ0RBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBWTVDLElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNqQiwyQ0FBSyxDQUFBO0lBQ0wsK0NBQU8sQ0FBQTtJQUNQLHlDQUFJLENBQUE7SUFDSix5Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCO0FBR0Q7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFrbUJDO1FBL2xCRyxRQUFFLEdBQWMsSUFBSSxDQUFDO1FBRXJCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVks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c291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEpTSGVscGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvaGVscGVyL0pTSGVscGVyXCI7XHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvVXRpbHNcIjtcclxuaW1wb3J0IHsgcHJvcFR5cGUgfSBmcm9tIFwiLi4vLi4vY29uc3RzL0NDb25zdFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCBFZmZlY3RNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0VmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUG9wVHlwZSB9IGZyb20gXCIuLi9wb3BWaWV3L1BvcFZpZXcxXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWVsZENvbmZpZyB7XHJcbiAgICBpZDogbnVtYmVyLC8v5Zyw5Z2X55qu6IKkSURcclxuICAgIHR5cGU6IG51bWJlciwgLy/lnLDlnZfnsbvlnotcclxuICAgIHN0YXRlOiBudW1iZXIsLy/lnLDlnZfnirbmgIHvvIww5pyq6Kej6ZSB77yMMeino+mUgVxyXG4gICAgY3JvcFN0YXRlOiBudW1iZXIsLy/mpI3niannirbmgIHvvIww6Zey572u77yMMeenjeWtkO+8jDLlubzoi5fvvIwz5oiQ54afLDTlj6/ljZblh7pcclxuICAgIGNyb3BJZDogbnVtYmVyLC8v56eN5qSN5L2c54mpSURcclxuICAgIGxhc3RUaW1lOiBudW1iZXIsLy/liankvZnmiJDnhp/ml7bpl7RcclxuICAgIGxldmVsOiBudW1iZXIsIC8vIOWcsOWdl+etiee6p1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBDcm9wU3RhdGUge1xyXG4gICAgRU1QVFksLy8w6Zey572uXHJcbiAgICBTRUVESU5HLC8v56eN5qSN5LitXHJcbiAgICBQRVNULC8v5a6z6JmrXHJcbiAgICBSSVBFLC8v5Y+v5pS26I63XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkUHJlZmFiIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYmc6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1aWxkVGlwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgY3JvcDogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHFpcGFvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcXBKczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcWlwYW9JY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcWlwYW9EZXNjOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBxcEpzTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXBzTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2V0VGlwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBnZXRUaXBzTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBnZXRJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHRpbWVQcm86IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvQmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHBybzogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgbHZVcEVmZjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgY2hhbmdlU2tpbkVmZjogc3AuU2tlbGV0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgaGFpY2hvbmc6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGNodWNob25nOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcclxuICAgIHFpcGFvRnJhbWU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBjb25maWc6IEZpZWxkQ29uZmlnID0ge1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgc3RhdGU6IDAsXHJcbiAgICAgICAgY3JvcFN0YXRlOiAwLFxyXG4gICAgICAgIGNyb3BJZDogMCxcclxuICAgICAgICBsYXN0VGltZTogMCxcclxuICAgICAgICBsZXZlbDogMSxcclxuICAgIH1cclxuICAgIGludGVydmFsID0gMDtcclxuICAgIGN1cnJlbnRDcm9wU3RhdGUgPSBDcm9wU3RhdGUuRU1QVFk7XHJcbiAgICBpc0FkZFNwZWVkID0gZmFsc2U7Ly/mmK/lkKbliqDpgJ/kuK1cclxuICAgIGFkZFNwZWVkVGltZSA9IDM7XHJcbiAgICBvbmVfc3BlZWQgPSAxO1xyXG4gICAgYWRkU3BlZWRQcm8gPSAwO1xyXG4gICAgbUluZGV4ID0gLTE7XHJcbiAgICBzYXZlRGF0YVRpbWUgPSAwOy8v5Yeg56eS5L+d5a2Y5LiA5qyh5pWw5o2uXHJcbiAgICB0b3RhbFRpbWUgPSAwOy8v5oiQ54af5omA6ZyA5oC75pe26Ze0XHJcblxyXG5cclxuICAgIHRoaXNQb2ludDtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkVGlwcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmx2VXBFZmYubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNoYW5nZVNraW5FZmYubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy50aGlzUG9pbnQgPSB0aGlzLm5vZGU7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMucWlwYW8sIHRoaXMub25RaXBhb0NsaWNrLCB0aGlzLCAwLCBmYWxzZSk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnVpbGRUaXBzLCB0aGlzLm9uQnVpbGQsIHRoaXMsIDAsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNST1BfQUREX1NQRUVELCB0aGlzLmFkZFNwZWVkLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuRklFTERfQlVJTEQsIHRoaXMub25CdWlsZEJhY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnVpbGQoKSB7XHJcbiAgICAgICAgLy/lvLnlh7rlnLrmma/lhYPntKDkv6Hmga/pnaLmnb9cclxuICAgICAgICAvLyB0aGlzLmJ1aWxkVGlwcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgICAvLyAgICAgaWQ6IHRoaXMuY29uZmlnLmlkLFxyXG4gICAgICAgIC8vICAgICB0eXBlOiB0aGlzLmNvbmZpZy50eXBlLFxyXG4gICAgICAgIC8vICAgICBzdGF0ZTogMSxcclxuICAgICAgICAvLyAgICAgY3JvcFN0YXRlOiAwLFxyXG4gICAgICAgIC8vICAgICBjcm9wSWQ6IDAsXHJcbiAgICAgICAgLy8gICAgIGxhc3RUaW1lOiAwLFxyXG4gICAgICAgIC8vICAgICBsZXZlbDogMSxcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIFBsYXllck1vZGVsLmNoYW5nZUZpZWxkU2tpbih0aGlzLm1JbmRleCwgMSlcclxuICAgICAgICAvLyB0aGlzLmNoYW5nZVN0YXRlKENyb3BTdGF0ZS5FTVBUWSk7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VTa2luKCk7XHJcbiAgICAgICAgLy8gTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAxLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucWlwYW9BbmltKCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5zZWxlY3RCYWNrLCB0aGlzKTtcclxuICAgICAgICAvLyBsZXQgaWQgPSB0aGlzLmNvbmZpZy5pZCArIFwiMDFcIlxyXG4gICAgICAgIC8vIFNES01hbmFnZXIuZ2V0VW5sb2NrQ29uZmlnKDcsIE51bWJlcihpZCkpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5wb3BWaWV3MSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5zZWxlY3RCYWNrLCB0aGlzKTtcclxuICAgICAgICB9LCBVSUVmZmVjdFR5cGUuU0NBTEUsIFBvcFR5cGUuRklFTEQpO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QmFjaygpIHtcclxuICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhcIuaJqeW7uuWcn+WcsOaIkOWKn1wiKVxyXG4gICAgICAgIHRoaXMuYnVpbGRUaXBzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIFBsYXllck1vZGVsLmNoYW5nZUZpZWxkU2tpbih0aGlzLm1JbmRleCwgMSlcclxuICAgICAgICB0aGlzLmNoYW5nZVNraW4oKTtcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5zZWxlY3RCYWNrLCB0aGlzKTtcclxuICAgICAgICAvLyBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuR29vZHNJbmZvVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB7IHNlbGVjdFR5cGU6IExWVVBfVFlQRS5GSUVMRCwgaWQ6IGlkLCBhbW91bnQ6IGRhdGEuYW1vdW50IH0pO1xyXG4gICAgfVxyXG4gICAgb25CdWlsZEJhY2soaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5tSW5kZXggPT0gaW5kZXgpIHRoaXMuc2VsZWN0QmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5sYXN0VGltZSA+IDAgJiYgdGhpcy5jb25maWcuY3JvcFN0YXRlIDwgMiAmJiB0aGlzLmNvbmZpZy5jcm9wU3RhdGUgPiAwICYmICF0aGlzLmlzQWRkU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCA+PSA3MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlRGF0YVRpbWUrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxhc3RUaW1lLS07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9CZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm8uZmlsbFJhbmdlID0gKHRoaXMudG90YWxUaW1lIC0gdGhpcy5jb25maWcubGFzdFRpbWUpIC8gdGhpcy50b3RhbFRpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuY29uZmlnLmxhc3RUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnByb0JnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudGltZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnRIZWxwZXIubGFiZWxUaW1lRm9ybWF0KHRoaXMudGltZUxiLm5vZGUsIHRoaXMuY29uZmlnLmxhc3RUaW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKCh0aGlzLnRvdGFsVGltZSAtIHRoaXMuY29uZmlnLmxhc3RUaW1lKSA8IHRoaXMudG90YWxUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50Q3JvcFN0YXRlICE9IENyb3BTdGF0ZS5TRUVESU5HKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50Q3JvcFN0YXRlID0gQ3JvcFN0YXRlLlNFRURJTkc7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jaGFuZ2VTdGF0ZShDcm9wU3RhdGUuU0VFRElORylcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcubGFzdFRpbWUgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDcm9wU3RhdGUgIT0gQ3JvcFN0YXRlLlJJUEUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVyTW9kZWwuc2V0Q3JvcFJpcGV0aW1lcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSGFpY2hvZ24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2F2ZURhdGFUaW1lID49IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZURhdGFUaW1lPTA7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJNb2RlbC5zYXZlRGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQWRkU3BlZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNwZWVkUHJvICs9IGR0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudGltZVByby5wcm9ncmVzcyA9ICh0aGlzLnRvdGFsVGltZSAtIHRoaXMuYWRkU3BlZWRUaW1lKSAvIHRoaXMudG90YWxUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvLmZpbGxSYW5nZSA9ICh0aGlzLnRvdGFsVGltZSAtIHRoaXMuYWRkU3BlZWRUaW1lKSAvIHRoaXMudG90YWxUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU3BlZWRUaW1lIC09IHRoaXMub25lX3NwZWVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkU3BlZWRUaW1lIDwgMCkgdGhpcy5hZGRTcGVlZFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudEhlbHBlci5sYWJlbFRpbWVGb3JtYXQodGhpcy50aW1lTGIubm9kZSwgdGhpcy5hZGRTcGVlZFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsVGltZSAtIHRoaXMuYWRkU3BlZWRUaW1lID49IHRoaXMudG90YWxUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBZGRTcGVlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Q3JvcFN0YXRlICE9IENyb3BTdGF0ZS5SSVBFICYmIHRoaXMuY29uZmlnLmxhc3RUaW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllck1vZGVsLnNldENyb3BSaXBldGltZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tIYWljaG9nbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU3BlZWRQcm8gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+aIkOeGn+ajgOa1i+aYr+WQpuacieWus+iZq1xyXG4gICAgY2hlY2tIYWljaG9nbigpIHtcclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuZ2V0Q3JvcFJpcGV0aW1lcygpID49IDkgJiYgUGxheWVyTW9kZWwucGVzdE51bSA8IDIpIHtcclxuICAgICAgICAgICAgbGV0IGFkZENmZyA9IENvbmZpZ01hbmFnZXIuZ2V0UHJvcEJ5SWQocHJvcFR5cGUuc2NhcmVjcm93LCBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLnNjYXJlY3Jvd2x2KVxyXG4gICAgICAgICAgICBsZXQgcmF0ZSA9IGFkZENmZy5hZGRfbnVtO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tID0gTUtVdGlscy5yYW5kb21OTUYoMCwgMTAwKVxyXG4gICAgICAgICAgICBpZiAocmFuZG9tIDwgcmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgUGxheWVyTW9kZWwucGVzdE51bSsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q3JvcFN0YXRlID0gQ3JvcFN0YXRlLlBFU1Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKENyb3BTdGF0ZS5QRVNUKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q3JvcFN0YXRlID0gQ3JvcFN0YXRlLlJJUEU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKENyb3BTdGF0ZS5SSVBFKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q3JvcFN0YXRlID0gQ3JvcFN0YXRlLlJJUEU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoQ3JvcFN0YXRlLlJJUEUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLm1JbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU2tpbigwKTtcclxuICAgICAgICAvLyBpZiAoIVBsYXllck1vZGVsLmd1aWRlU3RhdGUgJiYgaW5kZXggPT0gMCkge1xyXG4gICAgICAgIC8vICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuQ1JPUF9QTEFOVCwgdGhpcy5vblBsYW50LCB0aGlzKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2tpbihpc0x2VXAgPSAxKSB7XHJcbiAgICAgICAgbGV0IGNmZyA9IFBsYXllck1vZGVsLmdldEZpZWxkTGlzdENmZygpW3RoaXMubUluZGV4XTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNmZztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmNyb3BJZCAhPSAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoR2xvYmFsLmlzQ2VzaGlfdmVyc2lvbikgdGhpcy50b3RhbFRpbWUgPSA1O1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZ2V0UGxhbnRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNMdlVwID09IDAgJiYgdGhpcy5jb25maWcuY3JvcFN0YXRlID09IENyb3BTdGF0ZS5TRUVESU5HKSB7XHJcbiAgICAgICAgICAgIGxldCBvZmZsaW5lVGltZSA9IFBsYXllck1vZGVsLm9mZmxpbmVMYXN0VGltZXN0YW1wO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gY3VycmVudFRpbWUgLSBvZmZsaW5lVGltZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmxhc3RUaW1lID4gdGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcubGFzdFRpbWUgLT0gdGltZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxhc3RUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhbmdlU3RhdGUoQ3JvcFN0YXRlLlJJUEUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNyb3BTdGF0ZSA9IENyb3BTdGF0ZS5SSVBFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRDcm9wU3RhdGUgPSB0aGlzLmNvbmZpZy5jcm9wU3RhdGU7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXRlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVGlwcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuY29uZmlnLmxhc3RUaW1lIDwgMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jb25maWcuY3JvcFN0YXRlID0gQ3JvcFN0YXRlLlJJUEU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgbGV0IGNTdGF0ZSA9IHRoaXMuY29uZmlnLmNyb3BTdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShjU3RhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLnFpcGFvQW5pbSgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnFpcGFvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkVGlwcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNmZy5sZXZlbCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL3Byb3AvZmllbGQvXCIgKyBgMCR7Y2ZnLmxldmVsfWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5iZy5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgaWYgKGlzTHZVcCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTa2luRWZmLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2tpbkVmZi5hbmltYXRpb24gPSBcImFuaW1hdGlvblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL+WIh+aNoueKtuaAgVxyXG4gICAgY2hhbmdlU3RhdGUoY1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcuY3JvcFN0YXRlID0gY1N0YXRlO1xyXG4gICAgICAgIHRoaXMuY3JvcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jcm9wLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnFpcGFvLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMucXBKcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnFpcGFvSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChjU3RhdGUgIT0gQ3JvcFN0YXRlLkVNUFRZKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jcm9wL3NpbmdsZUljb24vXCIgKyBgJHt0aGlzLmNvbmZpZy5jcm9wSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb0JnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJvLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgaWYgKGNTdGF0ZSA9PSBDcm9wU3RhdGUuRU1QVFkpIHtcclxuICAgICAgICAgICAgdGhpcy5jcm9wLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVByby5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByb0JnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnFpcGFvSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMucWlwYW9GcmFtZVswXTtcclxuICAgICAgICAgICAgdGhpcy5xaXBhb0Rlc2Muc3RyaW5nID0gXCLnp43mpI1cIlxyXG4gICAgICAgIH0gZWxzZSBpZiAoY1N0YXRlID09IENyb3BTdGF0ZS5TRUVESU5HKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jcm9wL3JpcGUvXCIgKyBgJHt0aGlzLmNvbmZpZy5jcm9wSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gQ29tcG9uZW50SGVscGVyLnNldEhlYXJ0QWN0aW9uKHRoaXMuY3JvcC5ub2RlLCAxLCBmYWxzZSwgMS4wMyk7XHJcbiAgICAgICAgICAgIHRoaXMucWlwYW9JY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucXBKcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnFwSnNMYi5zdHJpbmcgPSBDb25maWdNYW5hZ2VyLmFkZF9zcGVlZF9nb2xkICsgXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5xaXBhb0Rlc2Muc3RyaW5nID0gXCLliqDpgJ9cIlxyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnByb0JnLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjU3RhdGUgPT0gQ3JvcFN0YXRlLlJJUEUpIHtcclxuXHJcbiAgICAgICAgICAgIEpTSGVscGVyLnBsYXlFZmZlY3QoXCJjcm9wX3JpcGVcIik7XHJcbiAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jcm9wL3JpcGUvXCIgKyBgJHt0aGlzLmNvbmZpZy5jcm9wSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2Nyb3Avc2luZ2xlSWNvbi9cIiArIGAke3RoaXMuY29uZmlnLmNyb3BJZH1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFpcGFvSWNvbi5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWVQcm8ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9CZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5xaXBhb0Rlc2Muc3RyaW5nID0gXCLmlLbojrdcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAoY1N0YXRlID09IENyb3BTdGF0ZS5QRVNUKSB7XHJcbiAgICAgICAgICAgIHRoaXMucWlwYW9JY29uLnNwcml0ZUZyYW1lID0gdGhpcy5xaXBhb0ZyYW1lWzFdO1xyXG4gICAgICAgICAgICBKU0hlbHBlci5wbGF5RWZmZWN0KFwiY3JvcF9yaXBlXCIpO1xyXG4gICAgICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvY3JvcC9yaXBlL1wiICsgYCR7dGhpcy5jb25maWcuY3JvcElkfWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcC5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVByby5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByb0JnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnFpcGFvRGVzYy5zdHJpbmcgPSBcIumZpOiZq1wiXHJcblxyXG4gICAgICAgICAgICB0aGlzLmhhaWNob25nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oYWljaG9uZy5hbmltYXRpb24gPSBcImhhaWNob25nXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaGFpY2hvbmcudGltZVNjYWxlID0gMC42O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+esrOS4gOeJiGJ1Z+S/ruaUueazqOmHiuWNh+e6p+aViOaenFxyXG4gICAgICAgIC8vIGlmIChjU3RhdGUgIT0gQ3JvcFN0YXRlLkVNUFRZKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubHZVcEVmZi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubHZVcEVmZi5hbmltYXRpb24gPSBcInNoZW5namlcIjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgUGxheWVyTW9kZWwuc2F2ZVVpRGF0YSgpO1xyXG5cclxuICAgIH1cclxuICAgIC8v5rCU5rOh54K55Ye7XHJcbiAgICBvblFpcGFvQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBZGRTcGVlZCkgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb25maWcuY3JvcFN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDovL+enjeakjVxyXG4gICAgICAgICAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkdVSURFX0hpZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/miZPlvIDkvZznianpnaLmnb/vvIzpgInmi6nkvZznialcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5DUk9QX1BMQU5ULCB0aGlzLm9uUGxhbnQsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlZFR0VUQUJMRV9DTE9TRSwgdGhpcy5vblZyZ2V0YWJsZUNsb3NlLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLlZlZ2V0YWJsZXNWaWV3LG51bGwsbnVsbCxudWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/liqDpgJ9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrR29sZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkpYX1NDLCB7IHR5cGU6IDEsIHBvaW50OiB0aGlzLnRoaXNQb2ludCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuSklBU1UsIHRoaXMub25KaWFzdSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkppYXN1KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOi8v6Zmk6JmrXHJcbiAgICAgICAgICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuY2xlYXJQZXN0VmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB0aGlzLnRoaXNQb2ludCwgdGhpcy5jb25maWcpXHJcblxyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNMRUFSX1BFU1RfQ0xPU0UsIHRoaXMuY2xvc2VQZXN0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5TSEFDSE9ORywgdGhpcy5vblNoYWNob25nLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6Ly/mlLbojrdcclxuICAgICAgICAgICAgICAgIGlmIChQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5HVUlERV9IaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuTUFJTl9MT0NLLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tHZXRDcm9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v56eN5qSNXHJcbiAgICBvblBsYW50KGlkKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLkNST1BfUExBTlQsIHRoaXMub25QbGFudCwgdGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnp43mpI1pZO+8mlwiLCBpZCk7XHJcbiAgICAgICAgLy8gU0RLTWFuYWdlci5vbkV2ZW50KEdsb2JhbC5FVkVOVF9BQ1RJT04uY2xpZW50X3NlZWQpXHJcblxyXG4gICAgICAgIFBsYXllck1vZGVsLnNldFBsYW50TnVtQnlJZChpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnLmNyb3BJZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmNyb3BTdGF0ZSA9IDE7XHJcblxyXG4gICAgICAgIGlmIChHbG9iYWwuaXNDZXNoaV92ZXJzaW9uKSB0aGlzLnRvdGFsVGltZSA9IDU7XHJcbiAgICAgICAgZWxzZSB0aGlzLmdldFBsYW50VGltZSgpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmxhc3RUaW1lID0gdGhpcy50b3RhbFRpbWU7XHJcblxyXG4gICAgICAgIFBsYXllck1vZGVsLnNhdmVVaURhdGEoKTtcclxuICAgICAgICBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDAuMSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDcm9wU3RhdGUgPSBDcm9wU3RhdGUuU0VFRElORztcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShDcm9wU3RhdGUuU0VFRElORylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX0ZJRUxEX1RJUFMpO1xyXG5cclxuICAgIH1cclxuICAgIG9uVnJnZXRhYmxlQ2xvc2UoKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLkNST1BfUExBTlQsIHRoaXMub25QbGFudCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlZFR0VUQUJMRV9DTE9TRSwgdGhpcy5vblZyZ2V0YWJsZUNsb3NlLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgLy/mo4DmtYvliqDpgJ/pkp7npajmmK/lkKblhYXotrNcclxuICAgIGRpZmZHb2xkID0gMDtcclxuICAgIGNoZWNrR29sZCgpIHtcclxuICAgICAgICBsZXQgZ29sZCA9IFBsYXllck1vZGVsLmdldEdvbGQoKTtcclxuICAgICAgICBpZiAoZ29sZCA8IENvbmZpZ01hbmFnZXIuYWRkX3NwZWVkX2dvbGQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5kaWZmR29sZCA9IENvbmZpZ01hbmFnZXIuYWRkX3NwZWVkX2dvbGQgLSBnb2xkO1xyXG4gICAgICAgICAgICAvLyBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5hZGRHb2xkLCB0aGlzKTtcclxuICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnBvcFZpZXcxLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5hZGRHb2xkLCB0aGlzKTtcclxuICAgICAgICAgICAgfSwgVUlFZmZlY3RUeXBlLlNDQUxFLCBQb3BUeXBlLkdPTEQyLCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8v5Yqg6YCfXHJcbiAgICBvbkppYXN1KCkge1xyXG4gICAgICAgIFBsYXllck1vZGVsLnNldEdvbGQoLUNvbmZpZ01hbmFnZXIuYWRkX3NwZWVkX2dvbGQpO1xyXG4gICAgICAgIHRoaXMuYWRkU3BlZWQoKTtcclxuICAgICAgICAvLyBsZXQgY2ZnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS5waXBlLCBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLnBpcGVsdik7XHJcbiAgICAgICAgLy8gdGhpcy5jb25maWcubGFzdFRpbWUgLT0gY2ZnLmFkZF9udW0gKiA2MDtcclxuICAgICAgICAvLyB0aGlzLmFkZFNwZWVkVGltZSA9IGNmZy5hZGRfbnVtICogNjA7XHJcbiAgICAgICAgLy8gdGhpcy5pc0FkZFNwZWVkID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLmZseUpzVGlwcyhjZmcuYWRkX251bSlcclxuICAgICAgICAvLyBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuSklBU1UsIHRoaXMub25KaWFzdSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICAvL+WFs+mXremZpOiZq+mdouadv1xyXG4gICAgY2xvc2VQZXN0KCkge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5TSEFDSE9ORywgdGhpcy5vblNoYWNob25nLCB0aGlzKTtcclxuICAgIH1cclxuICAgIC8v6Zmk6JmrXHJcbiAgICBvblNoYWNob25nKGRhdGEpIHtcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuU0hBQ0hPTkcsIHRoaXMub25TaGFjaG9uZywgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2h1Y2hvbmcubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2h1Y2hvbmcuYW5pbWF0aW9uID0gXCJzaGFjaG9uZ1wiO1xyXG4gICAgICAgIHRoaXMucWlwYW8uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaHVjaG9uZy5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5LCBsb29wQ291bnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaHVjaG9uZy5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmNodWNob25nLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaGFpY2hvbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShDcm9wU3RhdGUuUklQRSk7XHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5wb3BSZXdhcmRWaWV3LCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIH0sIFVJRWZmZWN0VHlwZS5TQ0FMRSwgMCwgZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFBsYXllck1vZGVsLnBlc3ROdW0tLTtcclxuICAgIH1cclxuICAgIC8v5pS26I63XHJcbiAgICBjaGVja0dldENyb3AoKSB7XHJcbiAgICAgICAgbGV0IGdldE51bSA9IDE7XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmNyb3BfZ2V0X251bSA+PSBDb25maWdNYW5hZ2VyLmNyb3BfbWF4R2V0X2ludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNS1V0aWxzLnJhbmRvbU5NRigwLCAxKTtcclxuICAgICAgICAgICAgaWYgKHJhbmRvbSA8IENvbmZpZ01hbmFnZXIuY3JvcF9tYXhHZXRfcmF0ZSkge1xyXG4gICAgICAgICAgICAgICAgZ2V0TnVtID0gQ29uZmlnTWFuYWdlci5jcm9wX21heEdldF9udW07XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJNb2RlbC5jcm9wX2dldF9udW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNST1BfR0MsIHRoaXMuZ2V0Q3JvcCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBNS1V0aWxzLmFsZXJ0VGlwcyhcIuW8ueWHuumrmOS6p+mhtemdolwiKVxyXG4gICAgICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnBvcEdjVmlldywgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5DUk9QX0dDLCB0aGlzLmdldENyb3AsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSwgVUlFZmZlY3RUeXBlLlNDQUxFLCB0aGlzLmNvbmZpZy5jcm9wSWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGVja0hvdXNlTWF4KGdldE51bSkpIHtcclxuICAgICAgICAgICAgTUtVdGlscy5hbGVydFRpcHMoXCLku5PlupPmlL7kuI3kuIvkuobvvIzlv6vngrnljZblh7rkvZznianotZrpkrHlkKdcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldENyb3AoMSk7XHJcbiAgICB9XHJcbiAgICBnZXRDcm9wKG51bSkge1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuQ1JPUF9HRVQpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoQ3JvcFN0YXRlLkVNUFRZKVxyXG4gICAgICAgIHRoaXMucWlwYW8uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLkNST1BfR0MsIHRoaXMuZ2V0Q3JvcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5mbHlHZXRUaXBzKG51bSk7XHJcblxyXG4gICAgICAgIFBsYXllck1vZGVsLmNyb3BfZ2V0X251bSsrO1xyXG5cclxuICAgICAgICBKU0hlbHBlci5wbGF5RWZmZWN0KFwiY3JvcF9yaXBlXCIsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmx2VXBFZmYuYW5pbWF0aW9uID0gXCJzaGVuZ2ppXCI7XHJcblxyXG5cclxuICAgICAgICBsZXQgc3RhcnROb2RlID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgRWZmZWN0TWFuYWdlci5wbGF5Q3JvcChzdGFydE5vZGUsIHRoaXMuY29uZmlnLmNyb3BJZCwgOCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVBsYXllck1vZGVsLmd1aWRlU3RhdGUpIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5NQUlOX0xPQ0ssIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5zZXRIb3VzZUFkZENyb3AodGhpcy5jb25maWcuY3JvcElkLCBudW0pO1xyXG4gICAgICAgIFBsYXllck1vZGVsLnNldENyb3BHZXROdW0obnVtKTtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5zZXRYZnpzKDAuMik7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5jaGVja0FkZE9yZGVyKHRoaXMuY29uZmlnLmNyb3BJZCwgbnVtLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUub3JkZXJTdWNjZXNzVmlldyk7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfQ09NUExFVEVfVVBEQVRFKVxyXG4gICAgICAgICAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkdVSURFX1VQREFURSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkdVSURFX1VQREFURSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v6L6b6Ium57qi5YyF5Yik5patXHJcbiAgICAgICAgICAgICAgICBpZiAoUGxheWVyTW9kZWwuZ2V0Q3JvcEdldE51bSgpID49IENvbmZpZ01hbmFnZXIuaGFyZF9oYl9pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFBsYXllck1vZGVsLnNldENyb3BHZXROdW0oLVBsYXllck1vZGVsLmdldENyb3BHZXROdW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFVSU1hbmFuZ2VyLmNoZWNrUGFuZWwoVUlUeXBlLm9yZGVyU3VjY2Vzc1ZpZXcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5oYXJkVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX0ZJRUxEX1RJUFMpO1xyXG4gICAgICAgICAgICBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDAuNSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xaXBhb0FuaW0oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICAvLyBTREtNYW5hZ2VyLm9uRXZlbnQoR2xvYmFsLkVWRU5UX0FDVElPTi5jbGllbnRfZ2V0X2Nyb3BzKVxyXG5cclxuICAgIH1cclxuICAgIC8v6ZKe56Wo5LiN6Laz77yM55yL6KeG6aKRXHJcbiAgICBhZGRHb2xkKCkge1xyXG4gICAgICAgIC8vIFBsYXllck1vZGVsLnNldEdvbGQodGhpcy5kaWZmR29sZCk7XHJcbiAgICAgICAgLy8gRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMuYWRkR29sZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICAvL+WKoOmAn1xyXG4gICAgYWRkU3BlZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmNyb3BTdGF0ZSAhPSBDcm9wU3RhdGUuU0VFRElORykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucWlwYW8uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oYWljaG9uZy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oYWljaG9uZy5hbmltYXRpb24gPSBcImppYXN1XCI7XHJcbiAgICAgICAgdGhpcy5oYWljaG9uZy5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5LCBsb29wQ291bnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYWljaG9uZy5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmhhaWNob25nLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2ZnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS5waXBlLCBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLnBpcGVsdik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5sYXN0VGltZSA+IGNmZy5hZGRfbnVtICogNjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxhc3RUaW1lIC09IGNmZy5hZGRfbnVtICogNjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNwZWVkVGltZSA9IGNmZy5hZGRfbnVtICogNjA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTcGVlZFRpbWUgPSB0aGlzLmNvbmZpZy5sYXN0VGltZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxhc3RUaW1lIC09IGNmZy5hZGRfbnVtICogNjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkU3BlZWRUaW1lID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uZV9zcGVlZCA9IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzQWRkU3BlZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZseUpzVGlwcyhjZmcuYWRkX251bSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZy5jcm9wSWQgPSAwO1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmNyb3Aubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnFpcGFvLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBQbGF5ZXJNb2RlbC5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgcWlwYW9BbmltKCkge1xyXG4gICAgICAgIHRoaXMucWlwYW8uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnFpcGFvLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5xaXBhby5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMywgMS4yKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCAxKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCAxLjIpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjMsIDEpLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApKVxyXG4gICAgfVxyXG4gICAgLy/mo4DmtYvku5PlupPmmK/lkKbovr7liLDkuIrpmZBcclxuICAgIGNoZWNrSG91c2VNYXgodmFsdWUpIHtcclxuICAgICAgICBsZXQgbHYgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLndhcmVob3VzZWx2O1xyXG4gICAgICAgIC8vIGxldCBhcnIgPSBDb25maWdNYW5hZ2VyLnByb3AuZmlsdGVyKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdmFsdWUuaWQgPT0gTnVtYmVyKHByb3BUeXBlLndhcmVob3VzZSArIGAwJHtpZH1gKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIGxldCBjZmcgPSBDb25maWdNYW5hZ2VyLmdldFByb3BCeUlkKHByb3BUeXBlLndhcmVob3VzZSwgbHYpO1xyXG4gICAgICAgIGxldCBjdXJyZW50TnVtID0gUGxheWVyTW9kZWwuZ2V0Q3VycmVudFB1dE51bSgpO1xyXG4gICAgICAgIGlmICgoY2ZnLmFkZF9udW0gLSBjdXJyZW50TnVtKSA8IHZhbHVlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxhbnRUaW1lKCkge1xyXG4gICAgICAgIGxldCB0aW1lID0gQ29uZmlnTWFuYWdlci5nZXRDcm9wVGltZSh0aGlzLmNvbmZpZy5jcm9wSWQsIFBsYXllck1vZGVsLmdldFBsYW50TnVtQnlJZCh0aGlzLmNvbmZpZy5jcm9wSWQpKTtcclxuICAgICAgICBsZXQgYWRkID0gUGxheWVyTW9kZWwuZ2V0VGltZUFkZCh0aGlzLmNvbmZpZy50eXBlLCB0aGlzLmNvbmZpZy5sZXZlbClcclxuICAgICAgICB0aGlzLnRvdGFsVGltZSA9IHRpbWUgLSBhZGQgKiB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZseUpzVGlwcyhudW0pIHtcclxuICAgICAgICB0aGlzLnRpcHNMYi5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy50aXBzTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGlwc0xiLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLnRpcHNMYi5zdHJpbmcgPSBgLSR7bnVtfeWIhumSn2A7XHJcbiAgICAgICAgdGhpcy50aXBzTGIubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbyhVdGlscy5fRlQoMzApLCBjYy52Mih0aGlzLnRpcHNMYi5ub2RlLngsIDEwMCkpLFxyXG4gICAgICAgICAgICBjYy5mYWRlT3V0KFV0aWxzLl9GVCgxNSkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHNMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBzTGIubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuICAgIGZseUdldFRpcHMobnVtKSB7XHJcbiAgICAgICAgdGhpcy5nZXRUaXBzTGIuc3RyaW5nID0gXCIrXCIgKyBudW07XHJcbiAgICAgICAgdGhpcy5nZXRUaXBzLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5nZXRUaXBzLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZXRUaXBzLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5nZXRUaXBzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MubW92ZVRvKFV0aWxzLl9GVCgzMCksIGNjLnYyKHRoaXMuZ2V0VGlwcy54LCAxNTApKSxcclxuICAgICAgICAgICAgY2MuZmFkZU91dChVdGlscy5fRlQoMTUpKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaXBzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaXBzLnkgPSAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
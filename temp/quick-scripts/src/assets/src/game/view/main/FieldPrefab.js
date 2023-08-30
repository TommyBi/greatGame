"use strict";
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
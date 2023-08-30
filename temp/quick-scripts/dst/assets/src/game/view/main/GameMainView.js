
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/GameMainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8501OjIe9ECZm+UxIscUF3', 'GameMainView');
// src/game/view/main/GameMainView.ts

"use strict";
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
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var Utils_1 = require("../../../framework/tools/Utils");
var BaseView_1 = require("../../../framework/ui/BaseView");
var CConst_1 = require("../../consts/CConst");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var CashierPrefab_1 = require("./CashierPrefab");
var FencePrefab_1 = require("./FencePrefab");
var FieldPrefab_1 = require("./FieldPrefab");
var PipePrefab_1 = require("./PipePrefab");
var RoadPrefab_1 = require("./RoadPrefab");
var RolePrefab_1 = require("./RolePrefab");
var ScarecrowPrefab_1 = require("./ScarecrowPrefab");
var ShelvePrefab_1 = require("./ShelvePrefab");
var WallPrefab_1 = require("./WallPrefab");
var WarehousePrefab_1 = require("./WarehousePrefab");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameMainView = /** @class */ (function (_super) {
    __extends(GameMainView, _super);
    function GameMainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.roadPrefab = null;
        _this.wallPrefab = null;
        _this.cashierPrefab = null;
        _this.pipePrefab = null;
        _this.shelvePrefab = null;
        _this.fieldPrefab = null;
        _this.fencePrefab = null;
        _this.warehousePrefab = null;
        _this.scarecrowPrefab = null;
        _this.rolePrefab = null;
        _this.barragePrefab = null;
        _this.btn_lvUp = null;
        _this.btn_task = null;
        _this.btn_zlgk = null;
        _this.btn_ljcs = null;
        _this.btn_order = null;
        _this.shouTips = null;
        _this.lock = null;
        _this.btn_test1 = null;
        _this.btn_test2 = null;
        _this.btn_test3 = null;
        _this.jx_sc = null;
        _this.shelvesPfbList = [];
        _this.fieldPfbList = [];
        _this.roleIdList = [];
        _this.cloneRoleIdList = [];
        _this.roleList = [];
        _this.zl_guideTime = 20;
        _this.zl_guideState = 0;
        _this.zl_guideInterval = 0;
        _this.zl_state = 0; //0：手动招揽，1：自动招揽，2：自动招揽中
        _this.zlClcikNum = 0; //招揽顾客按钮点击次数
        _this.zl_roleNum = 0;
        _this.zl_auto_num = 0; //自动招揽人数
        _this.isAutoSolicit = false;
        _this.createTime = 3; //自动招揽时间间隔
        _this.currentTime = 0;
        _this.n = 1;
        _this.arr = [];
        _this.zl_max = 0;
        _this.guideZl = 0;
        _this.actionNUm = 0;
        _this.barragePool = new cc.NodePool();
        return _this;
    }
    GameMainView.prototype.onLoad = function () {
        this._initComponet();
        this.bottom.y = -cc.winSize.height / 2;
        this.roleIdList = Utils_1.default.createArr(1, 11);
        GamePoolManager_1.default.initRolePool(this.rolePrefab);
        this.changeZlBtn();
        // SDKManager.getTaskRewardCount();
    };
    GameMainView.prototype.update = function (dt) {
        if (PlayerModel_1.default.guideStep >= 0)
            return;
        this.currentTime += dt;
        if (this.zl_state == 2) {
            // this.zl_pro.progress = this.currentTime / 2;
            // if (this.currentTime > 2) {
            //     this.createRole();
            //     this.currentTime = 0;
            // }
        }
        else {
            if (this.currentTime > PlayerModel_1.default.getAutoRoleTime()) {
                this.createRole();
                this.currentTime = 0;
            }
        }
    };
    GameMainView.prototype.filedTips = function () {
        // this.shouTips.stopAllActions();
        // this.shouTips.active = false;
        // if (!this.shouTips.active) {
        //     let node: cc.Node;
        //     for (let i = 0; i < this.fieldPfbList.length; i++) {
        //         let item = this.fieldPfbList[i];
        //         if (item.config.cropId == 0 && item.config.state > 0) {
        //             node = item.node;
        //             break;
        //         }
        //     }
        //     if (node) {
        //         this.shouTips.active = true;
        //         let p = Utils.convertNodeToNodeSpace(node, this.node)
        //         this.shouTips.setPosition(p.x, p.y + 150);
        //         ComponentHelper.setHeartAction(this.shouTips);
        //     }
        // }
    };
    GameMainView.prototype.start = function () {
        var _this = this;
        // if (PlayerModel.guideStep >= 0) return;
        if (PlayerModel_1.default.guideState)
            this.createRole();
        // MKUtils.setNodeDelay(this.node, 2, () => {
        //     this.createRole();
        // })
        this.zl_roleNum = PlayerModel_1.default.getZlNum();
        var max = ConfigManager_1.default.getCurrentLvCfg().sdzl; //单次最大招揽人数
        this.zlClcikNum = 0;
        if (this.zl_roleNum >= max) {
            this.zl_state = 1;
            this.zl_roleNum = 0;
            this.changeZlBtn();
        }
        MkUtils_1.default.setNodeDelay(this.node, 2, function () {
            _this.initBarrage();
            _this.filedTips();
            _this.flyBox();
        });
        // this.testEffect();
        this.updateHkHb();
        ComponentHelper_1.default.setUpDownAction(this.addSpeedTips);
    };
    GameMainView.prototype.onEnable = function () {
        EventDispath_1.default.on(this.btn_lvUp, this.onLvUp, this);
        EventDispath_1.default.on(this.btn_task, this.onTask, this);
        EventDispath_1.default.on(this.btn_zlgk, this.onZlgk, this, 0);
        EventDispath_1.default.on(this.btn_ljcs, this.onLjcs, this);
        EventDispath_1.default.on(this.btn_order, this.onOrder, this);
        EventDispath_1.default.on(this.warehousePfb, this.onShowHouse, this);
        // EventDispath.on(this.box, this.onOpenBox, this);
        EventDispath_1.default.on(this.hkhb, this.onOpenHkHb, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.CROP_GET, this.getCrop, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.UPDATE_SHELVE, this.updateShelve, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.UPDATE_SHELVE_ORDER, this.orderUpdateShelve, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ONE_SOLICIT, this.createFifteen, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.FIELD_LEVEL_UPDATE, this.changeFieldByIndex, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SHELVE_LEVEL_UPDATE, this.changeShelveByIndex, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_PIPE, this.changePipe, this);
        // EventDispath.addEventListener(EventType.TASK_INFO_COUNT, this.updateTaskHd, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.UPDATE_FIELD_TIPS, this.filedTips, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.JX_SC, this.jxOrSc, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.CROP_PLANT_GET, this.onPlant, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.HKHB_UPDATE, this.updateHkHb, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.CHANGE_WALL, this.changeZlBtn, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.MAIN_LOCK, this.onLock, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.GUIDE_COMPLETE, this.guidComplete, this);
    };
    GameMainView.prototype.onLvUp = function () {
        console.log("升级");
        UIMananger_1.default.showPanel(UIType_1.default.LvUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, 1);
    };
    GameMainView.prototype.onTask = function () {
        UIMananger_1.default.showPanel(UIType_1.default.TaskView);
        console.log("任务");
        // PlayerModel.setAcceptDegree(10, cc.v2(cc.winSize.width / 2, cc.winSize.height / 2))
    };
    //招揽顾客
    GameMainView.prototype.onZlgk = function () {
        if (this.zl_state == 2)
            return;
        if (this.zl_state == 0) {
            // this.zlClcikNum++;
            // if (this.zlClcikNum >= Global.zl_click_num) {
            this.zl_roleNum++;
            // SDKManager.onEvent(Global.EVENT_ACTION.client_solicit, { "count": 1 })
            this.addOneLb();
            this.createRole();
            PlayerModel_1.default.setZlNum(this.zl_roleNum);
            // let max = PlayerModel.getAcceptBaseCfg().solicit_num;
            var max = ConfigManager_1.default.getCurrentLvCfg().sdzl; //单次最大招揽人数
            this.zlClcikNum = 0;
            if (this.zl_roleNum >= max) {
                this.zl_state = 1;
                this.zl_roleNum = 0;
                this.changeZlBtn();
            }
            // }
        }
        else {
            //打开招揽页面
            UIMananger_1.default.showPanel(UIType_1.default.popZlView);
        }
        this.zl_guideState = 0;
        this.zl_guideInterval = 0;
        // this.n++;
    };
    //新增飘字
    GameMainView.prototype.addOneLb = function () {
        console.log("手动添加：", this.zl_roleNum);
        var lb = cc.instantiate(this.zl_addOne);
        lb.parent = this.btn_zlgk;
        // this.arr.push(lb);
        lb.y = 137;
        lb.opacity = 255;
        lb.runAction(cc.sequence(cc.moveTo(0.8, 0, 250), cc.fadeOut(1.0), cc.callFunc(function () {
            lb.destroy();
        })));
    };
    //一键招揽15个
    GameMainView.prototype.createFifteen = function () {
        this.zl_state = 2;
        this.changeZlBtn();
        MkUtils_1.default.alertTips("一键招揽进行中");
        this.zl_guideInterval = 0;
        this.zl_guideState = 0;
        this.isAutoSolicit = true;
        this.zl_max = ConfigManager_1.default.getPropById(CConst_1.propType.wall, PlayerModel_1.default.getUIConfig().walllv).add_num;
        PlayerModel_1.default.setZlNum(0);
        this.autoSolicit();
    };
    //自动招揽
    GameMainView.prototype.autoSolicit = function () {
        var _this = this;
        cc.tween(this.zl_pro).to(2, { progress: 1 }).call(function () {
            _this.zl_pro.progress = 0;
            _this.createRole();
            _this.zl_auto_num++;
            _this.addOneLb();
            if (_this.zl_auto_num >= _this.zl_max) {
                _this.zl_state = 0;
                _this.zl_auto_num = 0;
                _this.isAutoSolicit = false;
                _this.changeZlBtn();
            }
            else {
                _this.autoSolicit();
            }
        }).start();
    };
    GameMainView.prototype.changeZlBtn = function () {
        this.zl_pro.node.active = false;
        this.zl_desc.node.active = true;
        this.zl_descBg.active = true;
        if (this.zl_state == 0) {
            this.zl_pro.node.active = false;
            this.zl.active = true;
            this.zl_one.active = false;
            this.zl_desc.string = "顾客+1";
        }
        else if (this.zl_state == 1) {
            this.zl.active = false;
            this.zl_one.active = true;
            this.zl_desc.string = "顾客+" + ConfigManager_1.default.getPropById(CConst_1.propType.wall, PlayerModel_1.default.getUIConfig().walllv).add_num;
        }
        else {
            this.zl_descBg.active = false;
            this.zl_pro.node.active = true;
            this.zl_pro.progress = 0;
            this.zl_desc.node.active = false;
            this.zl.active = false;
            this.zl_one.active = true;
        }
    };
    //立即成熟
    GameMainView.prototype.onLjcs = function () {
        var _this = this;
        console.log("全体加速");
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_Hide);
            EventDispath_1.default.send(EventType_1.EventType.CROP_ADD_SPEED);
            this.lock.active = true;
            MkUtils_1.default.setNodeDelay(this.node, 4, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
                _this.lock.active = false;
            });
        }
        else {
            UIMananger_1.default.showPanel(UIType_1.default.popJsView);
        }
    };
    GameMainView.prototype.onLock = function (data) {
        this.lock.active = data;
    };
    //订单
    GameMainView.prototype.onOrder = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderView, null, null, null);
    };
    GameMainView.prototype.onShowHouse = function () {
        UIMananger_1.default.showPanel(UIType_1.default.WarehouseView);
    };
    //打开飞行红包
    GameMainView.prototype.onOpenBox = function () {
        var _this = this;
        this.box.stopAllActions();
        this.box.active = false;
        UIMananger_1.default.showPanel(UIType_1.default.flyBoxView, null, function () {
            _this.scheduleOnce(_this.flyBox, SDKManager_1.default.getFlightTime());
        });
    };
    //打开回馈红包
    GameMainView.prototype.onOpenHkHb = function () {
        if (this.hkPro.progress < 1) {
            var lv = ConfigManager_1.default.getCurrentLvCfg();
            MkUtils_1.default.alertTips("\u518D\u62DB\u5F85" + (lv.gks - PlayerModel_1.default.zdGkNum) + "\u987E\u5BA2\u83B7\u5F97\u7EA2\u5305");
            return;
        }
        UIMananger_1.default.showPanel(UIType_1.default.hardView, null, null, UIEffectManager_1.UIEffectType.SCALE, 1);
    };
    //收获作物进入仓库，仓库动效
    GameMainView.prototype.getCrop = function () {
        this.warehousePfb.runAction(cc.sequence(cc.scaleTo(0.2, 1.05), cc.scaleTo(0.2, 1), cc.scaleTo(0.2, 1.05), cc.scaleTo(0.2, 1), cc.callFunc(function () {
            // this.lock.active = false;
        })));
    };
    //仓库有新增，刷新货架
    GameMainView.prototype.updateShelve = function () {
        var _this = this;
        MkUtils_1.default.setNodeDelay(this.node, 2, function () {
            for (var i = 0; i < _this.shelvesPfbList.length; i++) {
                var shelve = _this.shelvesPfbList[i];
                var script = shelve.getComponent(ShelvePrefab_1.default);
                if (script.currentNum < 4) {
                    script.addCrop();
                }
            }
        });
    };
    //订单完成后更新
    GameMainView.prototype.orderUpdateShelve = function () {
        PlayerModel_1.default.initPutCropList();
        var putOnList = PlayerModel_1.default.put_on_crop_list;
        for (var i = 0; i < this.shelvesPfbList.length; i++) {
            var shelve = this.shelvesPfbList[i];
            var cfg = void 0;
            if (i < putOnList.length) {
                cfg = putOnList[i];
            }
            shelve.resetCrop(cfg);
        }
    };
    GameMainView.prototype.createRole = function () {
        var role = this.getRole();
        if (this.cloneRoleIdList.length == 0)
            Utils_1.default.arrayCopy(this.roleIdList, this.cloneRoleIdList);
        this.cloneRoleIdList.sort(MkUtils_1.default.randomSort);
        var id = this.cloneRoleIdList.splice(0, 1)[0];
        this.roleList.push(role);
        var shelvePrefab = this.checkShelve();
        if (PlayerModel_1.default.guideStep == 6) {
            role.speed = 3;
            role.setRole(3);
        }
        else {
            // role.speed = 5;
            // role.speed = 1.5;
            role.setRole(1.5);
        }
        role.create(id, shelvePrefab, this.cashierPfb);
        PlayerModel_1.default.addDayAutoRoleNum();
        this.roleNode.addChild(role.node, 100);
    };
    GameMainView.prototype.getRole = function () {
        var item = GamePoolManager_1.default.createRole(this.rolePrefab);
        var roleItem = item.getComponent(RolePrefab_1.default);
        return roleItem;
    };
    /**
     * 检测那个摊位可以上人
     */
    GameMainView.prototype.checkShelve = function () {
        if (this.isShelveRoleFull1())
            return;
        var arr = [];
        for (var i = 0; i < this.shelvesPfbList.length; i++) {
            var src = this.shelvesPfbList[i];
            if (src.mId > 0) {
                // if (this.isShelveRoleFull1()) {
                //     if (src.roleNum < PlayerModel.one_shelves_shopper_max) {
                //         arr.push(src);
                //     }
                // } 
                // else {
                if (src.roleNum + src.walkLen < ConfigManager_1.default.getRoleMax()) {
                    arr.push(src);
                }
                // }
            }
        }
        if (arr.length == 0)
            return null;
        var arr1 = arr.filter(function (item) {
            return item.currentNum > 0;
        });
        var pfb;
        if (arr1.length > 0) {
            pfb = Utils_1.default.getRandomByArr(arr1);
        }
        else {
            pfb = arr[0];
        }
        return pfb;
    };
    // //检测是否货架没有解锁
    // isShelveUnlock(shelve) {
    //     let arr = this.shelvesPfbList.filter((item) => {
    //         return item.mId == 0;
    //     })
    //     if (arr.length < 5) return false;
    //     return true;
    // }
    //检测是否所有货架为空
    GameMainView.prototype.isShelveEmpty = function () {
        var arr = this.shelvesPfbList.filter(function (item) {
            return item.currentNum == 0;
        });
        if (arr.length < 5)
            return false;
        return true;
    };
    //检测是否所有摊位前都已经达到初始人数
    GameMainView.prototype.isShelveRoleFull1 = function () {
        var arr = this.shelvesPfbList.filter(function (item) {
            var t1 = item.roleNum < ConfigManager_1.default.getRoleMax();
            var t2 = item.mId > 0;
            return t1 && t2;
        });
        if (arr.length > 0)
            return false;
        return true;
    };
    /**
     * 加速或者杀虫
     * @param type 1加速2杀虫
     */
    GameMainView.prototype.jxOrSc = function (data) {
        var _this = this;
        this.jx_sc.node.active = true;
        var p = Utils_1.default.convertNodeToNodeSpace(data.point, this.node);
        this.jx_sc.node.setPosition(p);
        if (data.type == 1) {
            this.jx_sc.animation = "jiasu";
        }
        else {
            this.jx_sc.animation = "shachong";
        }
        this.jx_sc.setCompleteListener(function (trackEntry, loopCount) {
            _this.jx_sc.setCompleteListener(null);
            _this.jx_sc.node.active = false;
            console.log(data.type, "杀虫或者加速");
            if (data.type == 1) {
                EventDispath_1.default.send(EventType_1.EventType.JIASU);
            }
            else {
                EventDispath_1.default.send(EventType_1.EventType.SHACHONG);
            }
        });
    };
    GameMainView.prototype.onPlant = function (id) {
        var arr = this.fieldPfbList.filter(function (value, index) {
            return value.config.state == 1 && value.config.cropId == 0;
        });
        if (arr.length > 0) {
            var cfg = ConfigManager_1.default.getCropById(id);
            MkUtils_1.default.alertTips(cfg.name + "\u5DF2\u6210\u529F\u79CD\u4E0B ");
            EventDispath_1.default.send(EventType_1.EventType.GET_CROP_CLOSE);
            arr[0].onPlant(id);
        }
        else {
            MkUtils_1.default.alertTips("没有空闲土地可以种植了");
        }
    };
    //切换货架皮肤
    GameMainView.prototype.changeShelveByIndex = function (index) {
        this.shelvesPfbList[index].changeSkin();
        this.updateShelve();
    };
    //切换地块皮肤
    GameMainView.prototype.changeFieldByIndex = function (index) {
        this.fieldPfbList[index].changeSkin();
    };
    //切换水管皮肤
    GameMainView.prototype.changePipe = function (data) {
        var water = this.node.getChildByName('water');
        water.active = true;
    };
    //更新回馈红包
    GameMainView.prototype.updateHkHb = function () {
        this.hkIcon.stopAllActions();
        var lv = ConfigManager_1.default.getCurrentLvCfg();
        if (PlayerModel_1.default.zdGkNum >= lv.gks) {
            ComponentHelper_1.default.setHeartAction(this.hkIcon);
            this.hkLb.string = lv.gks + "/" + lv.gks;
            this.hkDesc.string = "<color=#000000>\u8BF7\u9886\u53D6</c><color=#EC5454>\u56DE\u9988\u7EA2\u5305</c></color>";
        }
        else {
            this.hkLb.string = PlayerModel_1.default.zdGkNum + "/" + lv.gks;
            this.hkDesc.string = "<color=#000000>\u518D\u62DB\u5F85</c><color=#EC5454>" + (lv.gks - PlayerModel_1.default.zdGkNum) + "\u4F4D<color=#000000>\u987E\u5BA2\u83B7\u5F97<color=#EC5454>\u7EA2\u5305</c></color>";
        }
        this.hkPro.progress = PlayerModel_1.default.zdGkNum / lv.gks;
    };
    // updateTaskHd(data) {
    //     if (data.allCount > 0) {
    //         this.taskHd.active = true;
    //         this.taskHdLab.string = data.allCount;
    //     } else {
    //         this.taskHdLab.string = "0";
    //         this.taskHd.active = false;
    //     }
    // }
    // update (dt) {}
    //初始化场景中的节点
    GameMainView.prototype._initComponet = function () {
        this.bottom = this.node.getChildByName('bottom');
        this.box = this.node.getChildByName('box');
        this.guide_task = this.bottom.getChildByName('guide_task');
        this.zl_addOne = this.btn_zlgk.getChildByName("addOne");
        this.hkhb = this.bottom.getChildByName('hkhb');
        this.hkIcon = this.hkhb.getChildByName("hkHbIcon");
        this.hkDesc = this.hkhb.getChildByName("hkDeacLb").getComponent(cc.RichText);
        ;
        this.hkLb = this.hkhb.getChildByName("hkLb").getComponent(cc.Label);
        ;
        this.hkPro = this.hkhb.getChildByName("hkPro").getComponent(cc.ProgressBar);
        ;
        this.addSpeedTips = this.btn_ljcs.getChildByName("tips");
        this.zl = this.btn_zlgk.getChildByName("zl");
        this.zl_one = this.btn_zlgk.getChildByName("zl_one");
        this.zl_descBg = this.btn_zlgk.getChildByName("zl_descBg");
        this.zl_pro = this.btn_zlgk.getChildByName("pro").getComponent(cc.ProgressBar);
        this.zl_desc = this.btn_zlgk.getChildByName("addDesc").getComponent(cc.Label);
        var road = this.node.getChildByName('road');
        var wall = this.node.getChildByName('wall');
        var cashier = this.node.getChildByName('cashier');
        var pipe = this.node.getChildByName('pipe');
        var shelvesGp = this.node.getChildByName('shelvesGp');
        var shelvesList = shelvesGp.children;
        var field = this.node.getChildByName('field');
        var fence = this.node.getChildByName('fence');
        var warehouse = this.node.getChildByName('warehouse');
        var scarecrow = this.node.getChildByName('scarecrow');
        this.roleNode = this.node.getChildByName('role');
        this.taskHd = this.btn_task.getChildByName("taskHongdian");
        this.taskHdLab = this.taskHd.getChildByName("taskHd").getComponent(cc.Label);
        var uiCfg = PlayerModel_1.default.getUIConfig();
        this.roadPfb = cc.instantiate(this.roadPrefab);
        road.addChild(this.roadPfb);
        // this.roadPfb.parent = this.node;
        // let roadP = road.convertToWorldSpaceAR(cc.v2(0,0));
        // this.roadPfb.setPosition(this.node.convertToNodeSpaceAR(roadP))
        this.roadPfb.getComponent(RoadPrefab_1.default).setData(uiCfg.roadlv);
        this.wallPfb = cc.instantiate(this.wallPrefab);
        wall.addChild(this.wallPfb);
        // this.wallPfb.parent = this.node;
        // let wallP = wall.convertToWorldSpaceAR(cc.v2(0,0));
        // this.wallPfb.setPosition(this.node.convertToNodeSpaceAR(wallP))
        this.wallPfb.getComponent(WallPrefab_1.default).setData(uiCfg.walllv);
        this.pipePfb = cc.instantiate(this.pipePrefab);
        pipe.addChild(this.pipePfb);
        this.pipePfb.getComponent(PipePrefab_1.default).setData(uiCfg.pipelv);
        if (uiCfg.pipelv > 0) {
            var water = this.node.getChildByName('water');
            water.active = true;
        }
        this.fencePfb = cc.instantiate(this.fencePrefab);
        fence.addChild(this.fencePfb);
        this.fencePfb.getComponent(FencePrefab_1.default).setData(uiCfg.fencelv);
        this.warehousePfb = cc.instantiate(this.warehousePrefab);
        warehouse.addChild(this.warehousePfb);
        this.warehousePfb.getComponent(WarehousePrefab_1.default).setData(uiCfg.warehouselv);
        this.scarecrowPfb = cc.instantiate(this.scarecrowPrefab);
        scarecrow.addChild(this.scarecrowPfb);
        this.scarecrowPfb.getComponent(ScarecrowPrefab_1.default).setData(uiCfg.scarecrowlv);
        var putOnList = PlayerModel_1.default.put_on_crop_list;
        for (var i = 0; i < shelvesList.length; i++) {
            var shelve = cc.instantiate(this.shelvePrefab);
            shelvesList[i].addChild(shelve);
            var src = shelve.getComponent(ShelvePrefab_1.default);
            this.shelvesPfbList.push(src);
            PlayerModel_1.default.sheleveList.push(src);
            var cfg = void 0;
            if (i < putOnList.length) {
                cfg = putOnList[i];
            }
            src.setData(uiCfg.shelvesList[i], i, cfg);
            src.initPoint();
        }
        var fieldList = field.children;
        for (var i = 0; i < fieldList.length; i++) {
            var field_1 = cc.instantiate(this.fieldPrefab);
            fieldList[i].addChild(field_1);
            // field.addChild(field);
            // field.setPosition(fieldList[i].getPosition())
            var src = field_1.getComponent(FieldPrefab_1.default);
            src.setData(i);
            this.fieldPfbList.push(src);
        }
        // MKUtils.setNodeDelay(this.node, 0.1, () => {
        var cashierPrefab = cc.instantiate(this.cashierPrefab);
        cashier.addChild(cashierPrefab);
        this.cashierPfb = cashierPrefab.getComponent(CashierPrefab_1.default);
        this.cashierPfb.setData(uiCfg.cashierlv);
        // })
    };
    //新手引导第一个地块位置
    GameMainView.prototype.getGuidePoint = function () {
        var point = this.fieldPfbList[0].node.convertToWorldSpaceAR(cc.v2(0.0));
        return point;
    };
    GameMainView.prototype.getGuidePoint1 = function () {
        var point = this.fieldPfbList[1].node.convertToWorldSpaceAR(cc.v2(0.0));
        return point;
    };
    GameMainView.prototype.getGuideJsPoint = function () {
        var point = this.btn_ljcs.convertToWorldSpaceAR(cc.v2(0.0));
        return point;
    };
    //新手引导收获
    GameMainView.prototype.getGuideCrop = function () {
        this.fieldPfbList[0].getCrop(1);
    };
    GameMainView.prototype.getRolePoint = function () {
        var p = this.roleList[0].getGuidePoint();
        return p;
    };
    GameMainView.prototype.guideBuy = function () {
        this.roleList[0].guideBuy();
    };
    GameMainView.prototype.guideSell = function () {
        this.roleList[0].onSell();
    };
    GameMainView.prototype.getZlPoint = function () {
        return this.btn_zlgk.convertToWorldSpaceAR(cc.v2(0, 0));
    };
    GameMainView.prototype.guideClickZL = function (callBack) {
        this.guideZl++;
        this.onZlgk();
        if (this.guideZl >= Global_1.default.zl_click_num) {
            this.guideZl = 0;
            if (callBack)
                callBack();
        }
    };
    GameMainView.prototype.getGuideTaskPoint = function () {
        return this.guide_task.convertToWorldSpaceAR(cc.v2(0, 0));
    };
    GameMainView.prototype.guideTaskClick = function () {
        this.initBarrage();
    };
    /**
     * 弹幕
     */
    GameMainView.prototype.initBarrage = function () {
        var _this = this;
        var barrage = this.barragePool.get();
        if (!barrage) {
            barrage = cc.instantiate(this.barragePrefab);
        }
        barrage.getComponent("BarragePrefab").setData();
        UIMananger_1.default.effLayer.addChild(barrage);
        var y1 = cc.winSize.height / 2 - 460;
        var p = cc.v2(1080, y1);
        barrage.setPosition(p);
        barrage.runAction(cc.sequence(cc.moveTo(10, -750, barrage.y), cc.callFunc(function () {
            _this.barragePool.put(barrage);
            _this.initBarrage();
        })));
    };
    GameMainView.prototype.flyBox = function () {
        var _this = this;
        this.box.active = true;
        var w = cc.winSize.width;
        var y = cc.winSize.height / 2;
        this.box.setPosition(700, 0);
        var time = SDKManager_1.default.getFlightTime();
        this.box.runAction(cc.sequence(cc.moveTo(2, w / 4 + w / 8, 0), cc.moveTo(4, (w / 4) - w / 8, 200), cc.moveTo(2, 0, 100), cc.moveTo(4, cc.v2(-w / 4 + 100, 300)), cc.moveTo(2, cc.v2(-w / 4, 100)), cc.moveTo(5, cc.v2(-w / 3 - 50, y / 2)), cc.moveTo(4, cc.v2(-w / 2 - 250, y / 2 + 100)), cc.callFunc(function () {
            _this.scheduleOnce(_this.flyBox, time);
        })));
    };
    GameMainView.prototype.guidComplete = function () {
        this.createRole();
    };
    GameMainView.prototype.addGold = function () {
        PlayerModel_1.default.setGold(1000);
    };
    GameMainView.prototype.addXfzs = function () {
        PlayerModel_1.default.setXfzs(100);
    };
    GameMainView.prototype.hideTest = function () {
        this.btn_test1.active = false;
        this.btn_test2.active = false;
        this.btn_test3.active = false;
    };
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "roadPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "wallPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "cashierPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "pipePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "shelvePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "fieldPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "fencePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "warehousePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "scarecrowPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "rolePrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameMainView.prototype, "barragePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "btn_lvUp", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "btn_task", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "btn_zlgk", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "btn_ljcs", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "btn_order", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "shouTips", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "lock", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "btn_test1", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "btn_test2", void 0);
    __decorate([
        property(cc.Node)
    ], GameMainView.prototype, "btn_test3", void 0);
    __decorate([
        property(sp.Skeleton)
    ], GameMainView.prototype, "jx_sc", void 0);
    GameMainView = __decorate([
        ccclass
    ], GameMainView);
    return GameMainView;
}(BaseView_1.default));
exports.default = GameMainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vR2FtZU1haW5WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhFQUF5RTtBQUN6RSxvRUFBK0Q7QUFDL0QsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSw0REFBdUQ7QUFDdkQsd0RBQW1EO0FBQ25ELDJEQUFzRDtBQUN0RCw4Q0FBNkU7QUFDN0UsOENBQXlDO0FBQ3pDLDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBSXhELGlEQUE0QztBQUM1Qyw2Q0FBd0M7QUFDeEMsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUN0QywyQ0FBc0M7QUFDdEMsMkNBQXNDO0FBQ3RDLHFEQUFnRDtBQUNoRCwrQ0FBMkQ7QUFDM0QsMkNBQXNDO0FBQ3RDLHFEQUFnRDtBQUcxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBUTtJQUFsRDtRQUFBLHFFQWt6QkM7UUEveUJHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRWxDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElB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QyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFBLENBQUM7UUFDckUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUc3RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FB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RSxDQUFDLElBQUksQ0FBQzttREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0NBQ0k7SUFoRFQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWt6QmhDO0lBQUQsbUJBQUM7Q0FsekJELEFBa3pCQyxDQWx6QnlDLGtCQUFRLEdBa3pCakQ7a0JBbHpCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU0hlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL2hlbHBlci9KU0hlbHBlclwiO1xyXG5pbXBvcnQgR2FtZVBvb2xNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9HYW1lUG9vbE1hbmFnZXJcIjtcclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJRWZmZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudERpc3BhdGhcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvQ29tcG9uZW50SGVscGVyXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9VdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlVmlld1wiO1xyXG5pbXBvcnQgeyBDVVJSRU5DWSwgQ1VSUkVOQ1lfRkxZX0NPVU5ULCBwcm9wVHlwZSB9IGZyb20gXCIuLi8uLi9jb25zdHMvQ0NvbnN0XCI7XHJcbmltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL2NvbnN0cy9HbG9iYWxcIjtcclxuaW1wb3J0IFVJVHlwZSBmcm9tIFwiLi4vLi4vY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvRWZmZWN0TWFuYWdlclwiO1xyXG5pbXBvcnQgTWVzc2FnZUNlbnRlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9NZXNzYWdlQ2VudGVyXCI7XHJcbmltcG9ydCB7IFBvcFR5cGUgfSBmcm9tIFwiLi4vcG9wVmlldy9Qb3BWaWV3MVwiO1xyXG5pbXBvcnQgQ2FzaGllclByZWZhYiBmcm9tIFwiLi9DYXNoaWVyUHJlZmFiXCI7XHJcbmltcG9ydCBGZW5jZVByZWZhYiBmcm9tIFwiLi9GZW5jZVByZWZhYlwiO1xyXG5pbXBvcnQgRmllbGRQcmVmYWIgZnJvbSBcIi4vRmllbGRQcmVmYWJcIjtcclxuaW1wb3J0IFBpcGVQcmVmYWIgZnJvbSBcIi4vUGlwZVByZWZhYlwiO1xyXG5pbXBvcnQgUm9hZFByZWZhYiBmcm9tIFwiLi9Sb2FkUHJlZmFiXCI7XHJcbmltcG9ydCBSb2xlUHJlZmFiIGZyb20gXCIuL1JvbGVQcmVmYWJcIjtcclxuaW1wb3J0IFNjYXJlY3Jvd1ByZWZhYiBmcm9tIFwiLi9TY2FyZWNyb3dQcmVmYWJcIjtcclxuaW1wb3J0IFNoZWx2ZVByZWZhYiwgeyBwdXRPbkNvbmZpZyB9IGZyb20gXCIuL1NoZWx2ZVByZWZhYlwiO1xyXG5pbXBvcnQgV2FsbFByZWZhYiBmcm9tIFwiLi9XYWxsUHJlZmFiXCI7XHJcbmltcG9ydCBXYXJlaG91c2VQcmVmYWIgZnJvbSBcIi4vV2FyZWhvdXNlUHJlZmFiXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYWluVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcm9hZFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICB3YWxsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGNhc2hpZXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcGlwZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzaGVsdmVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZmllbGRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgZmVuY2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgd2FyZWhvdXNlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNjYXJlY3Jvd1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICByb2xlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhcnJhZ2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fbHZVcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl90YXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX3psZ2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fbGpjczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9vcmRlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNob3VUaXBzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbG9jazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fdGVzdDE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fdGVzdDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fdGVzdDM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIGp4X3NjOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSByb2FkOiBjYy5Ob2RlOy8v6YGT6LevXHJcbiAgICAvLyBwcml2YXRlIHdhbGw6IGNjLk5vZGU7Ly/loplcclxuICAgIC8vIHByaXZhdGUgY2FzaGllcjogY2MuTm9kZTsvL+aUtumTtuWPsFxyXG4gICAgLy8gcHJpdmF0ZSBwaXBlOiBjYy5Ob2RlOy8v5rC0566hXHJcbiAgICAvLyBwcml2YXRlIHNoZWx2ZXNHcDogY2MuTm9kZTsvL+i0p+aetlxyXG4gICAgLy8gcHJpdmF0ZSBzaGVsdmVzTGlzdDogY2MuTm9kZVtdOy8v6LSn5p625YiX6KGoXHJcbiAgICAvLyBwcml2YXRlIGZpZWxkOiBjYy5Ob2RlOy8v6I+c5ZywXHJcbiAgICAvLyBwcml2YXRlIGZpZWxkTGlzdDogY2MuTm9kZVtdOy8v6I+c5Zyw5YiX6KGoXHJcbiAgICAvLyBwcml2YXRlIGZlbmNlOiBjYy5Ob2RlOy8v6I+c5Zyw5Zu05qCPXHJcbiAgICAvLyBwcml2YXRlIHdhcmVob3VzZTogY2MuTm9kZTsvL+S7k+W6k1xyXG4gICAgLy8gcHJpdmF0ZSBzY2FyZWNyb3c6IGNjLk5vZGU7Ly/oo4XppbDnqLvojYnkurpcclxuICAgIGFkZFNwZWVkVGlwczogY2MuTm9kZTtcclxuXHJcbiAgICByb2xlTm9kZTogY2MuTm9kZTtcclxuICAgIGJvdHRvbTogY2MuTm9kZTtcclxuXHJcbiAgICByb2xlUGZiOiBjYy5Ob2RlO1xyXG4gICAgcm9hZFBmYjogY2MuTm9kZTtcclxuICAgIHdhbGxQZmI6IGNjLk5vZGU7XHJcbiAgICBjYXNoaWVyUGZiOiBDYXNoaWVyUHJlZmFiO1xyXG4gICAgcGlwZVBmYjogY2MuTm9kZTtcclxuICAgIHNoZWx2ZXNQZmJMaXN0OiBTaGVsdmVQcmVmYWJbXSA9IFtdO1xyXG4gICAgZmllbGRQZmJMaXN0OiBGaWVsZFByZWZhYltdID0gW107XHJcbiAgICBmZW5jZVBmYjogY2MuTm9kZTtcclxuICAgIHdhcmVob3VzZVBmYjogY2MuTm9kZTtcclxuICAgIHNjYXJlY3Jvd1BmYjogY2MuTm9kZTtcclxuICAgIHJvbGVJZExpc3QgPSBbXTtcclxuICAgIGNsb25lUm9sZUlkTGlzdCA9IFtdO1xyXG4gICAgcm9sZUxpc3Q6IFJvbGVQcmVmYWJbXSA9IFtdO1xyXG4gICAgYm94OiBjYy5Ob2RlO1xyXG5cclxuICAgIGhraGI6IGNjLk5vZGU7XHJcbiAgICBoa0ljb246IGNjLk5vZGU7XHJcbiAgICBoa0Rlc2M6IGNjLlJpY2hUZXh0O1xyXG4gICAgaGtMYjogY2MuTGFiZWw7XHJcbiAgICBoa1BybzogY2MuUHJvZ3Jlc3NCYXI7XHJcblxyXG4gICAgdGFza0hkOiBjYy5Ob2RlO1xyXG4gICAgdGFza0hkTGFiOiBjYy5MYWJlbDtcclxuXHJcbiAgICB6bF9hZGRPbmU6IGNjLk5vZGU7XHJcbiAgICB6bDogY2MuTm9kZTtcclxuICAgIHpsX29uZTogY2MuTm9kZTtcclxuICAgIHpsX2d1aWRlVGltZSA9IDIwO1xyXG4gICAgemxfZ3VpZGVTdGF0ZSA9IDA7XHJcbiAgICB6bF9ndWlkZUludGVydmFsID0gMDtcclxuICAgIHpsX3N0YXRlID0gMDsvLzDvvJrmiYvliqjmi5vmj73vvIwx77ya6Ieq5Yqo5oub5o+977yMMu+8muiHquWKqOaLm+aPveS4rVxyXG4gICAgemxDbGNpa051bSA9IDA7Ly/mi5vmj73pob7lrqLmjInpkq7ngrnlh7vmrKHmlbBcclxuICAgIHpsX3JvbGVOdW0gPSAwO1xyXG4gICAgemxfYXV0b19udW0gPSAwOy8v6Ieq5Yqo5oub5o+95Lq65pWwXHJcbiAgICBpc0F1dG9Tb2xpY2l0ID0gZmFsc2U7XHJcblxyXG4gICAgY3JlYXRlVGltZTogbnVtYmVyID0gMzsvL+iHquWKqOaLm+aPveaXtumXtOmXtOmalFxyXG4gICAgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXRDb21wb25ldCgpO1xyXG4gICAgICAgIHRoaXMuYm90dG9tLnkgPSAtY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICB0aGlzLnJvbGVJZExpc3QgPSBVdGlscy5jcmVhdGVBcnIoMSwgMTEpO1xyXG5cclxuICAgICAgICBHYW1lUG9vbE1hbmFnZXIuaW5pdFJvbGVQb29sKHRoaXMucm9sZVByZWZhYik7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlWmxCdG4oKTtcclxuXHJcbiAgICAgICAgLy8gU0RLTWFuYWdlci5nZXRUYXNrUmV3YXJkQ291bnQoKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuZ3VpZGVTdGVwID49IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLnpsX3N0YXRlID09IDIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy56bF9wcm8ucHJvZ3Jlc3MgPSB0aGlzLmN1cnJlbnRUaW1lIC8gMjtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFRpbWUgPiAyKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNyZWF0ZVJvbGUoKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPiBQbGF5ZXJNb2RlbC5nZXRBdXRvUm9sZVRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSb2xlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZpbGVkVGlwcygpIHtcclxuICAgICAgICAvLyB0aGlzLnNob3VUaXBzLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zaG91VGlwcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuc2hvdVRpcHMuYWN0aXZlKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlOiBjYy5Ob2RlO1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGRQZmJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZmllbGRQZmJMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGl0ZW0uY29uZmlnLmNyb3BJZCA9PSAwICYmIGl0ZW0uY29uZmlnLnN0YXRlID4gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5vZGUgPSBpdGVtLm5vZGU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2hvdVRpcHMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBwID0gVXRpbHMuY29udmVydE5vZGVUb05vZGVTcGFjZShub2RlLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNob3VUaXBzLnNldFBvc2l0aW9uKHAueCwgcC55ICsgMTUwKTtcclxuICAgICAgICAvLyAgICAgICAgIENvbXBvbmVudEhlbHBlci5zZXRIZWFydEFjdGlvbih0aGlzLnNob3VUaXBzKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgLy8gaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RhdGUpIHRoaXMuY3JlYXRlUm9sZSgpO1xyXG4gICAgICAgIC8vIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgMiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNyZWF0ZVJvbGUoKTtcclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICB0aGlzLnpsX3JvbGVOdW0gPSBQbGF5ZXJNb2RlbC5nZXRabE51bSgpO1xyXG5cclxuICAgICAgICBsZXQgbWF4ID0gQ29uZmlnTWFuYWdlci5nZXRDdXJyZW50THZDZmcoKS5zZHpsOy8v5Y2V5qyh5pyA5aSn5oub5o+95Lq65pWwXHJcblxyXG4gICAgICAgIHRoaXMuemxDbGNpa051bSA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuemxfcm9sZU51bSA+PSBtYXgpIHtcclxuICAgICAgICAgICAgdGhpcy56bF9zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuemxfcm9sZU51bSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlWmxCdG4oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgMiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRCYXJyYWdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZWRUaXBzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmx5Qm94KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyB0aGlzLnRlc3RFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhrSGIoKTtcclxuXHJcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLnNldFVwRG93bkFjdGlvbih0aGlzLmFkZFNwZWVkVGlwcylcclxuICAgIH1cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9sdlVwLCB0aGlzLm9uTHZVcCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX3Rhc2ssIHRoaXMub25UYXNrLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5femxnaywgdGhpcy5vblpsZ2ssIHRoaXMsIDApO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9samNzLCB0aGlzLm9uTGpjcywgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX29yZGVyLCB0aGlzLm9uT3JkZXIsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLndhcmVob3VzZVBmYiwgdGhpcy5vblNob3dIb3VzZSwgdGhpcyk7XHJcbiAgICAgICAgLy8gRXZlbnREaXNwYXRoLm9uKHRoaXMuYm94LCB0aGlzLm9uT3BlbkJveCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuaGtoYiwgdGhpcy5vbk9wZW5Ia0hiLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuQ1JPUF9HRVQsIHRoaXMuZ2V0Q3JvcCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlVQREFURV9TSEVMVkUsIHRoaXMudXBkYXRlU2hlbHZlLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVVBEQVRFX1NIRUxWRV9PUkRFUiwgdGhpcy5vcmRlclVwZGF0ZVNoZWx2ZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5PTkVfU09MSUNJVCwgdGhpcy5jcmVhdGVGaWZ0ZWVuLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkZJRUxEX0xFVkVMX1VQREFURSwgdGhpcy5jaGFuZ2VGaWVsZEJ5SW5kZXgsIHRoaXMpXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlNIRUxWRV9MRVZFTF9VUERBVEUsIHRoaXMuY2hhbmdlU2hlbHZlQnlJbmRleCwgdGhpcylcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNIQU5HRV9QSVBFLCB0aGlzLmNoYW5nZVBpcGUsIHRoaXMpO1xyXG4gICAgICAgIC8vIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5UQVNLX0lORk9fQ09VTlQsIHRoaXMudXBkYXRlVGFza0hkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlVQREFURV9GSUVMRF9USVBTLCB0aGlzLmZpbGVkVGlwcywgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkpYX1NDLCB0aGlzLmp4T3JTYywgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5DUk9QX1BMQU5UX0dFVCwgdGhpcy5vblBsYW50LCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkhLSEJfVVBEQVRFLCB0aGlzLnVwZGF0ZUhrSGIsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuQ0hBTkdFX1dBTEwsIHRoaXMuY2hhbmdlWmxCdG4sIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuTUFJTl9MT0NLLCB0aGlzLm9uTG9jaywgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5HVUlERV9DT01QTEVURSwgdGhpcy5ndWlkQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25MdlVwKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Y2H57qnXCIpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5MdlVwVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCAxKTtcclxuXHJcbiAgICB9XHJcbiAgICBvblRhc2soKSB7XHJcbiAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLlRhc2tWaWV3KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuS7u+WKoVwiKTtcclxuICAgICAgICAvLyBQbGF5ZXJNb2RlbC5zZXRBY2NlcHREZWdyZWUoMTAsIGNjLnYyKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIpKVxyXG4gICAgfVxyXG4gICAgbiA9IDE7XHJcbiAgICAvL+aLm+aPvemhvuWuolxyXG4gICAgb25abGdrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnpsX3N0YXRlID09IDIpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy56bF9zdGF0ZSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnpsQ2xjaWtOdW0rKztcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuemxDbGNpa051bSA+PSBHbG9iYWwuemxfY2xpY2tfbnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuemxfcm9sZU51bSsrO1xyXG4gICAgICAgICAgICAvLyBTREtNYW5hZ2VyLm9uRXZlbnQoR2xvYmFsLkVWRU5UX0FDVElPTi5jbGllbnRfc29saWNpdCwgeyBcImNvdW50XCI6IDEgfSlcclxuICAgICAgICAgICAgdGhpcy5hZGRPbmVMYigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJvbGUoKTtcclxuICAgICAgICAgICAgUGxheWVyTW9kZWwuc2V0WmxOdW0odGhpcy56bF9yb2xlTnVtKTtcclxuICAgICAgICAgICAgLy8gbGV0IG1heCA9IFBsYXllck1vZGVsLmdldEFjY2VwdEJhc2VDZmcoKS5zb2xpY2l0X251bTtcclxuICAgICAgICAgICAgbGV0IG1heCA9IENvbmZpZ01hbmFnZXIuZ2V0Q3VycmVudEx2Q2ZnKCkuc2R6bDsvL+WNleasoeacgOWkp+aLm+aPveS6uuaVsFxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuemxDbGNpa051bSA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnpsX3JvbGVOdW0gPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpsX3N0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuemxfcm9sZU51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVpsQnRuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5omT5byA5oub5o+96aG16Z2iXHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5wb3BabFZpZXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy56bF9ndWlkZVN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLnpsX2d1aWRlSW50ZXJ2YWwgPSAwO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm4rKztcclxuICAgIH1cclxuICAgIGFyciA9IFtdO1xyXG4gICAgLy/mlrDlop7po5jlrZdcclxuICAgIGFkZE9uZUxiKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5omL5Yqo5re75Yqg77yaXCIsIHRoaXMuemxfcm9sZU51bSk7XHJcblxyXG4gICAgICAgIGxldCBsYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuemxfYWRkT25lKTtcclxuICAgICAgICBsYi5wYXJlbnQgPSB0aGlzLmJ0bl96bGdrO1xyXG4gICAgICAgIC8vIHRoaXMuYXJyLnB1c2gobGIpO1xyXG4gICAgICAgIGxiLnkgPSAxMzc7XHJcbiAgICAgICAgbGIub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICBsYi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuOCwgMCwgMjUwKSwgY2MuZmFkZU91dCgxLjApLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIGxiLmRlc3Ryb3koKTtcclxuICAgICAgICB9KSkpXHJcbiAgICB9XHJcbiAgICAvL+S4gOmUruaLm+aPvTE15LiqXHJcbiAgICBjcmVhdGVGaWZ0ZWVuKCkge1xyXG4gICAgICAgIHRoaXMuemxfc3RhdGUgPSAyO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlWmxCdG4oKTtcclxuICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhcIuS4gOmUruaLm+aPvei/m+ihjOS4rVwiKVxyXG4gICAgICAgIHRoaXMuemxfZ3VpZGVJbnRlcnZhbCA9IDA7XHJcbiAgICAgICAgdGhpcy56bF9ndWlkZVN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLmlzQXV0b1NvbGljaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuemxfbWF4ID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS53YWxsLCBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLndhbGxsdikuYWRkX251bTtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5zZXRabE51bSgwKTtcclxuICAgICAgICB0aGlzLmF1dG9Tb2xpY2l0KCk7XHJcbiAgICB9XHJcbiAgICAvL+iHquWKqOaLm+aPvVxyXG4gICAgYXV0b1NvbGljaXQoKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy56bF9wcm8pLnRvKDIsIHsgcHJvZ3Jlc3M6IDEgfVxyXG4gICAgICAgICkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuemxfcHJvLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVSb2xlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuemxfYXV0b19udW0rKztcclxuICAgICAgICAgICAgdGhpcy5hZGRPbmVMYigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuemxfYXV0b19udW0gPj0gdGhpcy56bF9tYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuemxfc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy56bF9hdXRvX251bSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQXV0b1NvbGljaXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlWmxCdG4oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b1NvbGljaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICB6bF9wcm86IGNjLlByb2dyZXNzQmFyO1xyXG4gICAgemxfZGVzYzogY2MuTGFiZWw7XHJcbiAgICB6bF9tYXggPSAwO1xyXG4gICAgemxfZGVzY0JnOiBjYy5Ob2RlO1xyXG4gICAgY2hhbmdlWmxCdG4oKSB7XHJcbiAgICAgICAgdGhpcy56bF9wcm8ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnpsX2Rlc2Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuemxfZGVzY0JnLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuemxfc3RhdGUgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnpsX3Byby5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnpsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuemxfb25lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnpsX2Rlc2Muc3RyaW5nID0gXCLpob7lrqIrMVwiXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnpsX3N0YXRlID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuemwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuemxfb25lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuemxfZGVzYy5zdHJpbmcgPSBcIumhvuWuoitcIiArIENvbmZpZ01hbmFnZXIuZ2V0UHJvcEJ5SWQocHJvcFR5cGUud2FsbCwgUGxheWVyTW9kZWwuZ2V0VUlDb25maWcoKS53YWxsbHYpLmFkZF9udW1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnpsX2Rlc2NCZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy56bF9wcm8ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnpsX3Byby5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuemxfZGVzYy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnpsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnpsX29uZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v56uL5Y2z5oiQ54afXHJcbiAgICBvbkxqY3MoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlhajkvZPliqDpgJ9cIik7XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5HVUlERV9IaWRlKVxyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuQ1JPUF9BRERfU1BFRUQpO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCA0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuR1VJREVfVVBEQVRFKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5wb3BKc1ZpZXcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uTG9jayhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5sb2NrLmFjdGl2ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICAvL+iuouWNlVxyXG4gICAgb25PcmRlcigpIHtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUub3JkZXJWaWV3LCBudWxsLCBudWxsLCBudWxsKTtcclxuICAgIH1cclxuICAgIG9uU2hvd0hvdXNlKCkge1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5XYXJlaG91c2VWaWV3KTtcclxuICAgIH1cclxuICAgIC8v5omT5byA6aOe6KGM57qi5YyFXHJcbiAgICBvbk9wZW5Cb3goKSB7XHJcbiAgICAgICAgdGhpcy5ib3guc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuZmx5Qm94VmlldywgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmZseUJveCwgU0RLTWFuYWdlci5nZXRGbGlnaHRUaW1lKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy/miZPlvIDlm57ppojnuqLljIVcclxuICAgIG9uT3BlbkhrSGIoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhrUHJvLnByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICAgICBsZXQgbHYgPSBDb25maWdNYW5hZ2VyLmdldEN1cnJlbnRMdkNmZygpO1xyXG4gICAgICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhg5YaN5oub5b6FJHtsdi5na3MgLSBQbGF5ZXJNb2RlbC56ZEdrTnVtfemhvuWuouiOt+W+l+e6ouWMhWApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5oYXJkVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCAxKTtcclxuICAgIH1cclxuICAgIC8v5pS26I635L2c54mp6L+b5YWl5LuT5bqT77yM5LuT5bqT5Yqo5pWIXHJcbiAgICBnZXRDcm9wKCkge1xyXG4gICAgICAgIHRoaXMud2FyZWhvdXNlUGZiLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMiwgMS4wNSksXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxKSxcclxuICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDEuMDUpLFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubG9jay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKVxyXG4gICAgfVxyXG4gICAgLy/ku5PlupPmnInmlrDlop7vvIzliLfmlrDotKfmnrZcclxuICAgIHVwZGF0ZVNoZWx2ZSgpIHtcclxuICAgICAgICBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDIsICgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoZWx2ZXNQZmJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hlbHZlID0gdGhpcy5zaGVsdmVzUGZiTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBzaGVsdmUuZ2V0Q29tcG9uZW50KFNoZWx2ZVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2NyaXB0LmN1cnJlbnROdW0gPCA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LmFkZENyb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL+iuouWNleWujOaIkOWQjuabtOaWsFxyXG4gICAgb3JkZXJVcGRhdGVTaGVsdmUoKSB7XHJcbiAgICAgICAgUGxheWVyTW9kZWwuaW5pdFB1dENyb3BMaXN0KCk7XHJcbiAgICAgICAgbGV0IHB1dE9uTGlzdCA9IFBsYXllck1vZGVsLnB1dF9vbl9jcm9wX2xpc3Q7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsdmVzUGZiTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2hlbHZlID0gdGhpcy5zaGVsdmVzUGZiTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IGNmZzogcHV0T25Db25maWc7XHJcbiAgICAgICAgICAgIGlmIChpIDwgcHV0T25MaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2ZnID0gcHV0T25MaXN0W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNoZWx2ZS5yZXNldENyb3AoY2ZnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVSb2xlKCkge1xyXG4gICAgICAgIGxldCByb2xlID0gdGhpcy5nZXRSb2xlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xvbmVSb2xlSWRMaXN0Lmxlbmd0aCA9PSAwKSBVdGlscy5hcnJheUNvcHkodGhpcy5yb2xlSWRMaXN0LCB0aGlzLmNsb25lUm9sZUlkTGlzdCk7XHJcbiAgICAgICAgdGhpcy5jbG9uZVJvbGVJZExpc3Quc29ydChNS1V0aWxzLnJhbmRvbVNvcnQpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuY2xvbmVSb2xlSWRMaXN0LnNwbGljZSgwLCAxKVswXVxyXG4gICAgICAgIHRoaXMucm9sZUxpc3QucHVzaChyb2xlKTtcclxuICAgICAgICBsZXQgc2hlbHZlUHJlZmFiID0gdGhpcy5jaGVja1NoZWx2ZSgpO1xyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPT0gNikge1xyXG4gICAgICAgICAgICByb2xlLnNwZWVkID0gMztcclxuICAgICAgICAgICAgcm9sZS5zZXRSb2xlKDMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHJvbGUuc3BlZWQgPSA1O1xyXG4gICAgICAgICAgICAvLyByb2xlLnNwZWVkID0gMS41O1xyXG4gICAgICAgICAgICByb2xlLnNldFJvbGUoMS41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm9sZS5jcmVhdGUoaWQsIHNoZWx2ZVByZWZhYiwgdGhpcy5jYXNoaWVyUGZiKTtcclxuXHJcbiAgICAgICAgUGxheWVyTW9kZWwuYWRkRGF5QXV0b1JvbGVOdW0oKTtcclxuICAgICAgICB0aGlzLnJvbGVOb2RlLmFkZENoaWxkKHJvbGUubm9kZSwgMTAwKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRSb2xlKCkge1xyXG4gICAgICAgIGxldCBpdGVtOiBjYy5Ob2RlID0gR2FtZVBvb2xNYW5hZ2VyLmNyZWF0ZVJvbGUodGhpcy5yb2xlUHJlZmFiKTtcclxuICAgICAgICBsZXQgcm9sZUl0ZW06IFJvbGVQcmVmYWIgPSBpdGVtLmdldENvbXBvbmVudChSb2xlUHJlZmFiKTtcclxuICAgICAgICByZXR1cm4gcm9sZUl0ZW07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOajgOa1i+mCo+S4quaRiuS9jeWPr+S7peS4iuS6ulxyXG4gICAgICovXHJcbiAgICBjaGVja1NoZWx2ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NoZWx2ZVJvbGVGdWxsMSgpKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGVsdmVzUGZiTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc3JjID0gdGhpcy5zaGVsdmVzUGZiTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYgKHNyYy5tSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc1NoZWx2ZVJvbGVGdWxsMSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHNyYy5yb2xlTnVtIDwgUGxheWVyTW9kZWwub25lX3NoZWx2ZXNfc2hvcHBlcl9tYXgpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgYXJyLnB1c2goc3JjKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9IFxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3JjLnJvbGVOdW0gKyBzcmMud2Fsa0xlbiA8IENvbmZpZ01hbmFnZXIuZ2V0Um9sZU1heCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc3JjKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGFycjEgPSBhcnIuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmN1cnJlbnROdW0gPiAwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHBmYjtcclxuICAgICAgICBpZiAoYXJyMS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBmYiA9IFV0aWxzLmdldFJhbmRvbUJ5QXJyKGFycjEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBmYiA9IGFyclswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBmYjtcclxuICAgIH1cclxuICAgIC8vIC8v5qOA5rWL5piv5ZCm6LSn5p625rKh5pyJ6Kej6ZSBXHJcbiAgICAvLyBpc1NoZWx2ZVVubG9jayhzaGVsdmUpIHtcclxuICAgIC8vICAgICBsZXQgYXJyID0gdGhpcy5zaGVsdmVzUGZiTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGl0ZW0ubUlkID09IDA7XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICBpZiAoYXJyLmxlbmd0aCA8IDUpIHJldHVybiBmYWxzZTtcclxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxuICAgIC8v5qOA5rWL5piv5ZCm5omA5pyJ6LSn5p625Li656m6XHJcbiAgICBpc1NoZWx2ZUVtcHR5KCkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNoZWx2ZXNQZmJMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jdXJyZW50TnVtID09IDA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA8IDUpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8v5qOA5rWL5piv5ZCm5omA5pyJ5pGK5L2N5YmN6YO95bey57uP6L6+5Yiw5Yid5aeL5Lq65pWwXHJcbiAgICBpc1NoZWx2ZVJvbGVGdWxsMSgpIHtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5zaGVsdmVzUGZiTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHQxID0gaXRlbS5yb2xlTnVtIDwgQ29uZmlnTWFuYWdlci5nZXRSb2xlTWF4KCk7XHJcbiAgICAgICAgICAgIGxldCB0MiA9IGl0ZW0ubUlkID4gMDtcclxuICAgICAgICAgICAgcmV0dXJuIHQxICYmIHQyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWKoOmAn+aIluiAheadgOiZq1xyXG4gICAgICogQHBhcmFtIHR5cGUgMeWKoOmAnzLmnYDomatcclxuICAgICAqL1xyXG4gICAganhPclNjKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmp4X3NjLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcCA9IFV0aWxzLmNvbnZlcnROb2RlVG9Ob2RlU3BhY2UoZGF0YS5wb2ludCwgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuanhfc2Mubm9kZS5zZXRQb3NpdGlvbihwKTtcclxuICAgICAgICBpZiAoZGF0YS50eXBlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5qeF9zYy5hbmltYXRpb24gPSBcImppYXN1XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmp4X3NjLmFuaW1hdGlvbiA9IFwic2hhY2hvbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5qeF9zYy5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5LCBsb29wQ291bnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5qeF9zYy5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmp4X3NjLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudHlwZSwgXCLmnYDomavmiJbogIXliqDpgJ9cIik7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkpJQVNVKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TSEFDSE9ORyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblBsYW50KGlkKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuZmllbGRQZmJMaXN0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jb25maWcuc3RhdGUgPT0gMSAmJiB2YWx1ZS5jb25maWcuY3JvcElkID09IDA7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgY2ZnID0gQ29uZmlnTWFuYWdlci5nZXRDcm9wQnlJZChpZCk7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuYWxlcnRUaXBzKGAke2NmZy5uYW1lfeW3suaIkOWKn+enjeS4iyBgKVxyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuR0VUX0NST1BfQ0xPU0UpXHJcbiAgICAgICAgICAgIGFyclswXS5vblBsYW50KGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuYWxlcnRUaXBzKFwi5rKh5pyJ56m66Zey5Zyf5Zyw5Y+v5Lul56eN5qSN5LqGXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5YiH5o2i6LSn5p6255qu6IKkXHJcbiAgICBjaGFuZ2VTaGVsdmVCeUluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zaGVsdmVzUGZiTGlzdFtpbmRleF0uY2hhbmdlU2tpbigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hlbHZlKCk7XHJcbiAgICB9XHJcbiAgICAvL+WIh+aNouWcsOWdl+earuiCpFxyXG4gICAgY2hhbmdlRmllbGRCeUluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5maWVsZFBmYkxpc3RbaW5kZXhdLmNoYW5nZVNraW4oKTtcclxuICAgIH1cclxuICAgIC8v5YiH5o2i5rC0566h55qu6IKkXHJcbiAgICBjaGFuZ2VQaXBlKGRhdGEpIHtcclxuICAgICAgICBsZXQgd2F0ZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dhdGVyJyk7XHJcbiAgICAgICAgd2F0ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8v5pu05paw5Zue6aaI57qi5YyFXHJcbiAgICB1cGRhdGVIa0hiKCkge1xyXG4gICAgICAgIHRoaXMuaGtJY29uLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbGV0IGx2ID0gQ29uZmlnTWFuYWdlci5nZXRDdXJyZW50THZDZmcoKTtcclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuemRHa051bSA+PSBsdi5na3MpIHtcclxuICAgICAgICAgICAgQ29tcG9uZW50SGVscGVyLnNldEhlYXJ0QWN0aW9uKHRoaXMuaGtJY29uKTtcclxuICAgICAgICAgICAgdGhpcy5oa0xiLnN0cmluZyA9IGx2LmdrcyArIFwiL1wiICsgbHYuZ2tzO1xyXG4gICAgICAgICAgICB0aGlzLmhrRGVzYy5zdHJpbmcgPSBgPGNvbG9yPSMwMDAwMDA+6K+36aKG5Y+WPC9jPjxjb2xvcj0jRUM1NDU0PuWbnummiOe6ouWMhTwvYz48L2NvbG9yPmBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhrTGIuc3RyaW5nID0gUGxheWVyTW9kZWwuemRHa051bSArIFwiL1wiICsgbHYuZ2tzO1xyXG4gICAgICAgICAgICB0aGlzLmhrRGVzYy5zdHJpbmcgPSBgPGNvbG9yPSMwMDAwMDA+5YaN5oub5b6FPC9jPjxjb2xvcj0jRUM1NDU0PiR7bHYuZ2tzIC0gUGxheWVyTW9kZWwuemRHa051bX3kvY08Y29sb3I9IzAwMDAwMD7pob7lrqLojrflvpc8Y29sb3I9I0VDNTQ1ND7nuqLljIU8L2M+PC9jb2xvcj5gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGtQcm8ucHJvZ3Jlc3MgPSBQbGF5ZXJNb2RlbC56ZEdrTnVtIC8gbHYuZ2tzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZVRhc2tIZChkYXRhKSB7XHJcbiAgICAvLyAgICAgaWYgKGRhdGEuYWxsQ291bnQgPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGFza0hkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGFza0hkTGFiLnN0cmluZyA9IGRhdGEuYWxsQ291bnQ7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy50YXNrSGRMYWIuc3RyaW5nID0gXCIwXCI7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGFza0hkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gICAgLy/liJ3lp4vljJblnLrmma/kuK3nmoToioLngrlcclxuICAgIF9pbml0Q29tcG9uZXQoKSB7XHJcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2JvdHRvbScpO1xyXG4gICAgICAgIHRoaXMuYm94ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdib3gnKTtcclxuICAgICAgICB0aGlzLmd1aWRlX3Rhc2sgPSB0aGlzLmJvdHRvbS5nZXRDaGlsZEJ5TmFtZSgnZ3VpZGVfdGFzaycpO1xyXG5cclxuICAgICAgICB0aGlzLnpsX2FkZE9uZSA9IHRoaXMuYnRuX3psZ2suZ2V0Q2hpbGRCeU5hbWUoXCJhZGRPbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaGtoYiA9IHRoaXMuYm90dG9tLmdldENoaWxkQnlOYW1lKCdoa2hiJyk7XHJcbiAgICAgICAgdGhpcy5oa0ljb24gPSB0aGlzLmhraGIuZ2V0Q2hpbGRCeU5hbWUoXCJoa0hiSWNvblwiKTtcclxuICAgICAgICB0aGlzLmhrRGVzYyA9IHRoaXMuaGtoYi5nZXRDaGlsZEJ5TmFtZShcImhrRGVhY0xiXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCk7O1xyXG4gICAgICAgIHRoaXMuaGtMYiA9IHRoaXMuaGtoYi5nZXRDaGlsZEJ5TmFtZShcImhrTGJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTs7XHJcbiAgICAgICAgdGhpcy5oa1BybyA9IHRoaXMuaGtoYi5nZXRDaGlsZEJ5TmFtZShcImhrUHJvXCIpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5hZGRTcGVlZFRpcHMgPSB0aGlzLmJ0bl9samNzLmdldENoaWxkQnlOYW1lKFwidGlwc1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy56bCA9IHRoaXMuYnRuX3psZ2suZ2V0Q2hpbGRCeU5hbWUoXCJ6bFwiKTtcclxuICAgICAgICB0aGlzLnpsX29uZSA9IHRoaXMuYnRuX3psZ2suZ2V0Q2hpbGRCeU5hbWUoXCJ6bF9vbmVcIik7XHJcbiAgICAgICAgdGhpcy56bF9kZXNjQmcgPSB0aGlzLmJ0bl96bGdrLmdldENoaWxkQnlOYW1lKFwiemxfZGVzY0JnXCIpO1xyXG4gICAgICAgIHRoaXMuemxfcHJvID0gdGhpcy5idG5femxnay5nZXRDaGlsZEJ5TmFtZShcInByb1wiKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgIHRoaXMuemxfZGVzYyA9IHRoaXMuYnRuX3psZ2suZ2V0Q2hpbGRCeU5hbWUoXCJhZGREZXNjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIGxldCByb2FkID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdyb2FkJyk7XHJcbiAgICAgICAgbGV0IHdhbGwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dhbGwnKTtcclxuICAgICAgICBsZXQgY2FzaGllciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnY2FzaGllcicpO1xyXG4gICAgICAgIGxldCBwaXBlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdwaXBlJyk7XHJcbiAgICAgICAgbGV0IHNoZWx2ZXNHcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2hlbHZlc0dwJyk7XHJcbiAgICAgICAgbGV0IHNoZWx2ZXNMaXN0ID0gc2hlbHZlc0dwLmNoaWxkcmVuO1xyXG4gICAgICAgIGxldCBmaWVsZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZmllbGQnKTtcclxuXHJcbiAgICAgICAgbGV0IGZlbmNlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdmZW5jZScpO1xyXG4gICAgICAgIGxldCB3YXJlaG91c2UgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3dhcmVob3VzZScpO1xyXG4gICAgICAgIGxldCBzY2FyZWNyb3cgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NjYXJlY3JvdycpO1xyXG4gICAgICAgIHRoaXMucm9sZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3JvbGUnKTtcclxuXHJcbiAgICAgICAgdGhpcy50YXNrSGQgPSB0aGlzLmJ0bl90YXNrLmdldENoaWxkQnlOYW1lKFwidGFza0hvbmdkaWFuXCIpO1xyXG4gICAgICAgIHRoaXMudGFza0hkTGFiID0gdGhpcy50YXNrSGQuZ2V0Q2hpbGRCeU5hbWUoXCJ0YXNrSGRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHJcblxyXG4gICAgICAgIGxldCB1aUNmZyA9IFBsYXllck1vZGVsLmdldFVJQ29uZmlnKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJvYWRQZmIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvYWRQcmVmYWIpO1xyXG4gICAgICAgIHJvYWQuYWRkQ2hpbGQodGhpcy5yb2FkUGZiKTtcclxuICAgICAgICAvLyB0aGlzLnJvYWRQZmIucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIC8vIGxldCByb2FkUCA9IHJvYWQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsMCkpO1xyXG4gICAgICAgIC8vIHRoaXMucm9hZFBmYi5zZXRQb3NpdGlvbih0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocm9hZFApKVxyXG4gICAgICAgIHRoaXMucm9hZFBmYi5nZXRDb21wb25lbnQoUm9hZFByZWZhYikuc2V0RGF0YSh1aUNmZy5yb2FkbHYpO1xyXG5cclxuICAgICAgICB0aGlzLndhbGxQZmIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLndhbGxQcmVmYWIpO1xyXG4gICAgICAgIHdhbGwuYWRkQ2hpbGQodGhpcy53YWxsUGZiKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy53YWxsUGZiLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAvLyBsZXQgd2FsbFAgPSB3YWxsLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcclxuICAgICAgICAvLyB0aGlzLndhbGxQZmIuc2V0UG9zaXRpb24odGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdhbGxQKSlcclxuICAgICAgICB0aGlzLndhbGxQZmIuZ2V0Q29tcG9uZW50KFdhbGxQcmVmYWIpLnNldERhdGEodWlDZmcud2FsbGx2KTtcclxuXHJcbiAgICAgICAgdGhpcy5waXBlUGZiID0gY2MuaW5zdGFudGlhdGUodGhpcy5waXBlUHJlZmFiKTtcclxuICAgICAgICBwaXBlLmFkZENoaWxkKHRoaXMucGlwZVBmYik7XHJcbiAgICAgICAgdGhpcy5waXBlUGZiLmdldENvbXBvbmVudChQaXBlUHJlZmFiKS5zZXREYXRhKHVpQ2ZnLnBpcGVsdik7XHJcbiAgICAgICAgaWYgKHVpQ2ZnLnBpcGVsdiA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHdhdGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCd3YXRlcicpO1xyXG4gICAgICAgICAgICB3YXRlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mZW5jZVBmYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZmVuY2VQcmVmYWIpO1xyXG4gICAgICAgIGZlbmNlLmFkZENoaWxkKHRoaXMuZmVuY2VQZmIpO1xyXG4gICAgICAgIHRoaXMuZmVuY2VQZmIuZ2V0Q29tcG9uZW50KEZlbmNlUHJlZmFiKS5zZXREYXRhKHVpQ2ZnLmZlbmNlbHYpO1xyXG5cclxuICAgICAgICB0aGlzLndhcmVob3VzZVBmYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMud2FyZWhvdXNlUHJlZmFiKTtcclxuICAgICAgICB3YXJlaG91c2UuYWRkQ2hpbGQodGhpcy53YXJlaG91c2VQZmIpO1xyXG4gICAgICAgIHRoaXMud2FyZWhvdXNlUGZiLmdldENvbXBvbmVudChXYXJlaG91c2VQcmVmYWIpLnNldERhdGEodWlDZmcud2FyZWhvdXNlbHYpO1xyXG5cclxuICAgICAgICB0aGlzLnNjYXJlY3Jvd1BmYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2NhcmVjcm93UHJlZmFiKTtcclxuICAgICAgICBzY2FyZWNyb3cuYWRkQ2hpbGQodGhpcy5zY2FyZWNyb3dQZmIpO1xyXG4gICAgICAgIHRoaXMuc2NhcmVjcm93UGZiLmdldENvbXBvbmVudChTY2FyZWNyb3dQcmVmYWIpLnNldERhdGEodWlDZmcuc2NhcmVjcm93bHYpO1xyXG5cclxuICAgICAgICBsZXQgcHV0T25MaXN0ID0gUGxheWVyTW9kZWwucHV0X29uX2Nyb3BfbGlzdDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoZWx2ZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzaGVsdmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNoZWx2ZVByZWZhYik7XHJcbiAgICAgICAgICAgIHNoZWx2ZXNMaXN0W2ldLmFkZENoaWxkKHNoZWx2ZSk7XHJcbiAgICAgICAgICAgIGxldCBzcmMgPSBzaGVsdmUuZ2V0Q29tcG9uZW50KFNoZWx2ZVByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hlbHZlc1BmYkxpc3QucHVzaChzcmMpO1xyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5zaGVsZXZlTGlzdC5wdXNoKHNyYyk7XHJcbiAgICAgICAgICAgIGxldCBjZmc6IHB1dE9uQ29uZmlnO1xyXG4gICAgICAgICAgICBpZiAoaSA8IHB1dE9uTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNmZyA9IHB1dE9uTGlzdFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcmMuc2V0RGF0YSh1aUNmZy5zaGVsdmVzTGlzdFtpXSwgaSwgY2ZnKTtcclxuICAgICAgICAgICAgc3JjLmluaXRQb2ludCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmllbGRMaXN0ID0gZmllbGQuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGZpZWxkID0gY2MuaW5zdGFudGlhdGUodGhpcy5maWVsZFByZWZhYik7XHJcbiAgICAgICAgICAgIGZpZWxkTGlzdFtpXS5hZGRDaGlsZChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBmaWVsZC5hZGRDaGlsZChmaWVsZCk7XHJcbiAgICAgICAgICAgIC8vIGZpZWxkLnNldFBvc2l0aW9uKGZpZWxkTGlzdFtpXS5nZXRQb3NpdGlvbigpKVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBzcmMgPSBmaWVsZC5nZXRDb21wb25lbnQoRmllbGRQcmVmYWIpO1xyXG4gICAgICAgICAgICBzcmMuc2V0RGF0YShpKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFBmYkxpc3QucHVzaChzcmMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAwLjEsICgpID0+IHtcclxuICAgICAgICBsZXQgY2FzaGllclByZWZhYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FzaGllclByZWZhYik7XHJcbiAgICAgICAgY2FzaGllci5hZGRDaGlsZChjYXNoaWVyUHJlZmFiKTtcclxuICAgICAgICB0aGlzLmNhc2hpZXJQZmIgPSBjYXNoaWVyUHJlZmFiLmdldENvbXBvbmVudChDYXNoaWVyUHJlZmFiKVxyXG4gICAgICAgIHRoaXMuY2FzaGllclBmYi5zZXREYXRhKHVpQ2ZnLmNhc2hpZXJsdik7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICB9XHJcbiAgICAvL+aWsOaJi+W8leWvvOesrOS4gOS4quWcsOWdl+S9jee9rlxyXG4gICAgZ2V0R3VpZGVQb2ludCgpIHtcclxuICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLmZpZWxkUGZiTGlzdFswXS5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLjApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgfVxyXG4gICAgZ2V0R3VpZGVQb2ludDEoKSB7XHJcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5maWVsZFBmYkxpc3RbMV0ubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMC4wKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwb2ludDtcclxuICAgIH1cclxuICAgIGdldEd1aWRlSnNQb2ludCgpIHtcclxuICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLmJ0bl9samNzLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLjApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgfVxyXG4gICAgLy/mlrDmiYvlvJXlr7zmlLbojrdcclxuICAgIGdldEd1aWRlQ3JvcCgpIHtcclxuICAgICAgICB0aGlzLmZpZWxkUGZiTGlzdFswXS5nZXRDcm9wKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvbGVQb2ludCgpIHtcclxuICAgICAgICBsZXQgcCA9IHRoaXMucm9sZUxpc3RbMF0uZ2V0R3VpZGVQb2ludCgpO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgZ3VpZGVCdXkoKSB7XHJcbiAgICAgICAgdGhpcy5yb2xlTGlzdFswXS5ndWlkZUJ1eSgpO1xyXG4gICAgfVxyXG4gICAgZ3VpZGVTZWxsKCkge1xyXG5cclxuICAgICAgICB0aGlzLnJvbGVMaXN0WzBdLm9uU2VsbCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0WmxQb2ludCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5idG5femxnay5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgfVxyXG4gICAgZ3VpZGVabCA9IDA7XHJcbiAgICBndWlkZUNsaWNrWkwoY2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLmd1aWRlWmwrKztcclxuICAgICAgICB0aGlzLm9uWmxnaygpO1xyXG4gICAgICAgIGlmICh0aGlzLmd1aWRlWmwgPj0gR2xvYmFsLnpsX2NsaWNrX251bSkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRlWmwgPSAwO1xyXG4gICAgICAgICAgICBpZiAoY2FsbEJhY2spIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ3VpZGVfdGFzazogY2MuTm9kZTtcclxuICAgIGdldEd1aWRlVGFza1BvaW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmd1aWRlX3Rhc2suY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgIH1cclxuICAgIGd1aWRlVGFza0NsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEJhcnJhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3Rpb25OVW0gPSAwO1xyXG4gICAgYmFycmFnZVBvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAvKipcclxuICAgICAqIOW8ueW5lVxyXG4gICAgICovXHJcbiAgICBpbml0QmFycmFnZSgpIHtcclxuICAgICAgICBsZXQgYmFycmFnZSA9IHRoaXMuYmFycmFnZVBvb2wuZ2V0KCk7XHJcbiAgICAgICAgaWYgKCFiYXJyYWdlKSB7XHJcbiAgICAgICAgICAgIGJhcnJhZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhcnJhZ2VQcmVmYWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXJyYWdlLmdldENvbXBvbmVudChcIkJhcnJhZ2VQcmVmYWJcIikuc2V0RGF0YSgpO1xyXG4gICAgICAgIFVJTWFuYW5nZXIuZWZmTGF5ZXIuYWRkQ2hpbGQoYmFycmFnZSk7XHJcblxyXG4gICAgICAgIGxldCB5MSA9IGNjLndpblNpemUuaGVpZ2h0IC8gMiAtIDQ2MDtcclxuICAgICAgICBsZXQgcCA9IGNjLnYyKDEwODAsIHkxKVxyXG4gICAgICAgIGJhcnJhZ2Uuc2V0UG9zaXRpb24ocCk7XHJcblxyXG4gICAgICAgIGJhcnJhZ2UucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxMCwgLTc1MCwgYmFycmFnZS55KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJhcnJhZ2VQb29sLnB1dChiYXJyYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0QmFycmFnZSgpO1xyXG4gICAgICAgIH0pKSlcclxuICAgIH1cclxuXHJcbiAgICBmbHlCb3goKSB7XHJcbiAgICAgICAgdGhpcy5ib3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdyA9IGNjLndpblNpemUud2lkdGg7XHJcbiAgICAgICAgbGV0IHkgPSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgdGhpcy5ib3guc2V0UG9zaXRpb24oNzAwLCAwKVxyXG5cclxuICAgICAgICBsZXQgdGltZSA9IFNES01hbmFnZXIuZ2V0RmxpZ2h0VGltZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJveC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbygyLCB3IC8gNCArIHcgLyA4LCAwKSxcclxuICAgICAgICAgICAgY2MubW92ZVRvKDQsICh3IC8gNCkgLSB3IC8gOCwgMjAwKSxcclxuICAgICAgICAgICAgY2MubW92ZVRvKDIsIDAsIDEwMCksXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbyg0LCBjYy52MigtdyAvIDQgKyAxMDAsIDMwMCkpLFxyXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMiwgY2MudjIoLXcgLyA0LCAxMDApKSxcclxuICAgICAgICAgICAgY2MubW92ZVRvKDUsIGNjLnYyKC13IC8gMyAtIDUwLCB5IC8gMikpLFxyXG4gICAgICAgICAgICBjYy5tb3ZlVG8oNCwgY2MudjIoLXcgLyAyIC0gMjUwLCB5IC8gMiArIDEwMCkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmZseUJveCwgdGltZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIGd1aWRDb21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJvbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRHb2xkKCkge1xyXG4gICAgICAgIFBsYXllck1vZGVsLnNldEdvbGQoMTAwMClcclxuICAgIH1cclxuICAgIGFkZFhmenMoKSB7XHJcbiAgICAgICAgUGxheWVyTW9kZWwuc2V0WGZ6cygxMDApO1xyXG4gICAgfVxyXG4gICAgaGlkZVRlc3QoKSB7XHJcbiAgICAgICAgdGhpcy5idG5fdGVzdDEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5fdGVzdDIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5fdGVzdDMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
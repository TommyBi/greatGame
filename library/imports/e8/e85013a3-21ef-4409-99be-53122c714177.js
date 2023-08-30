"use strict";
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
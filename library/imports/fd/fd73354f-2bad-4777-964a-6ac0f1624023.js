"use strict";
cc._RF.push(module, 'fd733VPK61Hd5ZKasDxYkAj', 'LvUpView');
// src/game/view/lvUp/LvUpView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var CConst_1 = require("../../consts/CConst");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 升级界面
 * TODO:
 * initPropHasList这个方法可以移至更早的登录初始化环节
 */
var LvUpView = /** @class */ (function (_super) {
    __extends(LvUpView, _super);
    function LvUpView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.tabBtn = null;
        _this.scroller = null;
        _this.toggleLb1_1 = null;
        _this.toggleLb1_2 = null;
        _this.toggleLb2_1 = null;
        _this.toggleLb2_2 = null;
        _this.toggleLb3_1 = null;
        _this.toggleLb3_2 = null;
        _this.fieldList = [];
        _this.shelveList = [];
        _this.propList = [];
        _this.mTab = "1";
        return _this;
    }
    LvUpView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        // 使用成功
        EventDispath_1.default.addEventListener(EventType_1.EventType.LVUP_UPDATE, this.onUpdate, this);
        this.tabBtn.toggleItems[Number(this.mTab) - 1].isChecked = true;
        this.onUpdate();
        this.changeTab();
        this.changeData();
    };
    LvUpView.prototype.onTab = function (toggle) {
        if (toggle.checkEvents.length > 0) {
            var item = toggle.checkEvents[0];
            this.mTab = item.customEventData;
        }
        this.changeTab();
        this.changeData();
    };
    LvUpView.prototype.changeTab = function () {
        if (this.mTab == "1") {
            this.toggleLb1_1.active = true;
            this.toggleLb1_2.active = false;
            this.toggleLb2_1.active = false;
            this.toggleLb2_2.active = true;
            this.toggleLb3_1.active = false;
            this.toggleLb3_2.active = true;
        }
        else if (this.mTab == "2") {
            this.toggleLb1_1.active = false;
            this.toggleLb1_2.active = true;
            this.toggleLb2_1.active = true;
            this.toggleLb2_2.active = false;
            this.toggleLb3_1.active = false;
            this.toggleLb3_2.active = true;
        }
        else if (this.mTab == "3") {
            this.toggleLb1_1.active = false;
            this.toggleLb1_2.active = true;
            this.toggleLb3_1.active = true;
            this.toggleLb3_2.active = false;
            this.toggleLb2_1.active = false;
            this.toggleLb2_2.active = true;
        }
    };
    LvUpView.prototype.changeData = function () {
        this.scroller.clearItem();
        if (this.mTab == "1") {
            if (this.fieldList.length == 0)
                this.updateList();
            this.scroller.refreshData(this.fieldList);
        }
        else if (this.mTab == "2") {
            if (this.shelveList.length == 0)
                this.getShleveData();
            this.scroller.refreshData(this.shelveList);
        }
        else if (this.mTab == "3") {
            if (this.propList.length == 0)
                this.getPropData();
            this.scroller.refreshData(this.propList);
        }
        this.scroller.scrollToTop();
    };
    LvUpView.prototype.startShow = function () {
        this.fieldList = [];
        this.shelveList = [];
        this.propList = [];
        this.mTab = this.inData[0];
    };
    LvUpView.prototype.onUpdate = function () {
        // this.tabBtn.sec
        if (this.mTab == "1") {
            this.updateList();
        }
        else if (this.mTab == "2") {
            this.getShleveData();
        }
        else {
            this.getPropData();
        }
        this.changeData();
    };
    LvUpView.prototype.getShleveData = function () {
        this.shelveList = [];
        var list2 = PlayerModel_1.default.getUIConfig().shelvesList;
        for (var i = 0; i < list2.length; i++) {
            var level = list2[i];
            var type = 2 + ("" + (i + 1));
            var baseCfg = ConfigManager_1.default.getShelveByType(type, level);
            if (level == 0)
                baseCfg = ConfigManager_1.default.getShelveByType(type, 1);
            var maxLv = ConfigManager_1.default.getShelveMaxLv(type);
            var isMaxLv = level == maxLv;
            var cfg = { tabIndex: 2, index: i, level: level, id: i + 1, type: type, name: baseCfg.name, addDesc: baseCfg.add_desc, isMaxLv: isMaxLv };
            this.shelveList.push(cfg);
        }
    };
    LvUpView.prototype.getPropData = function () {
        this.propList = [];
        var uicfg = PlayerModel_1.default.getUIConfig();
        var cashierCfg = ConfigManager_1.default.getPropById(CConst_1.propType.cashier, uicfg.cashierlv);
        var maxLv = ConfigManager_1.default.getPropMaxLv(CConst_1.propType.cashier);
        var isMaxLv = uicfg.cashierlv == maxLv;
        this.propList.push({ tabIndex: 3, index: 0, level: uicfg.cashierlv, id: uicfg.cashierlv, type: CConst_1.propType.cashier, name: cashierCfg.name, addDesc: cashierCfg.add_desc, isMaxLv: isMaxLv });
        var pipeCfg = ConfigManager_1.default.getPropById(CConst_1.propType.pipe, uicfg.pipelv);
        maxLv = ConfigManager_1.default.getPropMaxLv(CConst_1.propType.pipe);
        isMaxLv = uicfg.pipelv == maxLv;
        this.propList.push({ tabIndex: 4, index: 1, level: uicfg.pipelv, id: uicfg.pipelv, type: CConst_1.propType.pipe, name: pipeCfg.name, addDesc: pipeCfg.add_desc, isMaxLv: isMaxLv });
        var wallCfg = ConfigManager_1.default.getPropById(CConst_1.propType.wall, uicfg.walllv);
        maxLv = ConfigManager_1.default.getPropMaxLv(CConst_1.propType.wall);
        isMaxLv = uicfg.walllv == maxLv;
        this.propList.push({ tabIndex: 5, index: 2, level: uicfg.walllv, id: uicfg.walllv, type: CConst_1.propType.wall, name: wallCfg.name, addDesc: wallCfg.add_desc, isMaxLv: isMaxLv });
        var roadCfg = ConfigManager_1.default.getPropById(CConst_1.propType.road, uicfg.roadlv);
        maxLv = ConfigManager_1.default.getPropMaxLv(CConst_1.propType.road);
        isMaxLv = uicfg.roadlv == maxLv;
        this.propList.push({ tabIndex: 6, index: 3, level: uicfg.roadlv, id: uicfg.roadlv, type: CConst_1.propType.road, name: roadCfg.name, addDesc: roadCfg.add_desc, isMaxLv: isMaxLv });
        var scarecrowCfg = ConfigManager_1.default.getPropById(CConst_1.propType.scarecrow, uicfg.scarecrowlv);
        maxLv = ConfigManager_1.default.getPropMaxLv(CConst_1.propType.scarecrow);
        isMaxLv = uicfg.scarecrowlv == maxLv;
        this.propList.push({ tabIndex: 7, index: 4, level: uicfg.scarecrowlv, id: uicfg.scarecrowlv, type: CConst_1.propType.scarecrow, name: scarecrowCfg.name, addDesc: scarecrowCfg.add_desc, isMaxLv: isMaxLv });
        var warehouseCfg = ConfigManager_1.default.getPropById(CConst_1.propType.warehouse, uicfg.warehouselv);
        maxLv = ConfigManager_1.default.getPropMaxLv(CConst_1.propType.warehouse);
        isMaxLv = uicfg.warehouselv == maxLv;
        this.propList.push({ tabIndex: 8, index: 5, level: uicfg.warehouselv, id: uicfg.warehouselv, type: CConst_1.propType.warehouse, name: warehouseCfg.name, addDesc: warehouseCfg.add_desc, isMaxLv: isMaxLv });
        var fenceCfg = ConfigManager_1.default.getPropById(CConst_1.propType.fence, uicfg.fencelv);
        maxLv = ConfigManager_1.default.getPropMaxLv(CConst_1.propType.fence);
        isMaxLv = uicfg.fencelv == maxLv;
        this.propList.push({ tabIndex: 9, index: 6, level: uicfg.fencelv, id: uicfg.fencelv, type: CConst_1.propType.fence, name: fenceCfg.name, addDesc: fenceCfg.add_desc, isMaxLv: isMaxLv });
    };
    /** 重新加载列表中的显示条目 */
    LvUpView.prototype.updateList = function () {
        this.fieldList = [];
        var list1 = PlayerModel_1.default.getFieldListCfg();
        for (var i = 0; i < list1.length; i++) {
            var data = list1[i];
            var baseCfg = ConfigManager_1.default.getFieldCfgByType(data.type, data.level);
            if (data.level == 0)
                baseCfg = ConfigManager_1.default.getFieldCfgByType(data.type, 1);
            var maxLv = ConfigManager_1.default.getFieldMaxLv(data.type);
            var isMaxLv = data.level == maxLv;
            var cfg = { tabIndex: 1, index: i, level: data.level, id: data.id, type: data.type, name: baseCfg.name, addDesc: baseCfg.add_desc, isMaxLv: isMaxLv };
            this.fieldList.push(cfg);
        }
    };
    LvUpView.prototype.update = function (dt) {
        // let offset = this.uScrollView.getScrollOffset();
        // let height = this.uScrollView.content.height;
        // for (let i = 0; i < this.uScrollView.content.children.length; i++) {
        //     let node = this.uScrollView.content.children[i];
        //     if (node.y <= height - offset.y + 200 && node.y >= height - offset.y - 1280 - 200) {
        //         node.opacity = 255;
        //     } else {
        //         node.opacity = 0;
        //     }
        // }
    };
    /** 仅用于关闭操作 */
    LvUpView.prototype.onBtnCloseHandle = function () {
        // this.uScrollView.content.removeAllChildren(true);
        _super.prototype.close.call(this);
    };
    LvUpView.prototype.getGuidePoint = function () {
        // let p = this.guideItem.getComponent(LvUpItem1).getGuidePoint();
        // return p;
    };
    __decorate([
        property(cc.Node)
    ], LvUpView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], LvUpView.prototype, "tabBtn", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], LvUpView.prototype, "scroller", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpView.prototype, "toggleLb1_1", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpView.prototype, "toggleLb1_2", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpView.prototype, "toggleLb2_1", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpView.prototype, "toggleLb2_2", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpView.prototype, "toggleLb3_1", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpView.prototype, "toggleLb3_2", void 0);
    LvUpView = __decorate([
        ccclass
    ], LvUpView);
    return LvUpView;
}(BasePanel_1.default));
exports.default = LvUpView;

cc._RF.pop();
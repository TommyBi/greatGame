
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/lvUp/LvUpView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2x2VXAvTHZVcFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSw2REFBd0Q7QUFDeEQsOENBQStEO0FBQy9ELHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsaUVBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBVzVDOzs7O0dBSUc7QUFFSDtJQUFzQyw0QkFBUztJQUEvQztRQUFBLHFFQTZNQztRQTFNRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBdUIsSUFBSSxDQUFDO1FBR2xDLGNBQVEsR0FBdUIsSUFBSSxDQUFDO1FBR3BDLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsZ0JBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsY0FBUSxHQUFVLEVBQUUsQ0FBQztRQUVyQixVQUFJLEdBQUcsR0FBRyxDQUFDOztJQWtMZixDQUFDO0lBakxHLDJCQUFRLEdBQVI7UUFDSSxLQUFLO1FBQ0wsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0QsT0FBTztRQUNQLHNCQUFZ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RSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBRTFLLElBQUksT0FBTyxHQUFHLHVCQUFhLENBQUMsV0FBVyxDQUFDLGlCQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxLQUFLLEdBQUcsdUJBQWEsQ0FBQyxZQUFZLENBQUMsaUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGlCQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBRTFLLElBQUksT0FBTyxHQUFHLHVCQUFhLENBQUMsV0FBVyxDQUFDLGlCQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxLQUFLLEdBQUcsdUJBQWEsQ0FBQyxZQUFZLENBQUMsaUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGlCQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMs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LENBQUM7OENBQ087SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFyQlgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZNNUI7SUFBRCxlQUFDO0NBN01ELEFBNk1DLENBN01xQyxtQkFBUyxHQTZNOUM7a0JBN01vQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgeyBsZXZlbFVwX2NvbmZpZywgcHJvcFR5cGUgfSBmcm9tIFwiLi4vLi4vY29uc3RzL0NDb25zdFwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IEFWaXJ0dWFsU2Nyb2xsVmlldyBmcm9tIFwiLi4vdGFzay9BVmlydHVhbFNjcm9sbFZpZXdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTHZ1cF9UeXBlIHtcclxuICAgIHRhYkluZGV4LFxyXG4gICAgaW5kZXgsXHJcbiAgICBsZXZlbCxcclxuICAgIGlkLFxyXG4gICAgbmFtZSxcclxuICAgIGFkZERlc2MsXHJcbiAgICB0eXBlLFxyXG4gICAgaXNNYXhMdlxyXG59XHJcbi8qKlxyXG4gKiDljYfnuqfnlYzpnaJcclxuICogVE9ETzpcclxuICogaW5pdFByb3BIYXNMaXN06L+Z5Liq5pa55rOV5Y+v5Lul56e76Iez5pu05pep55qE55m75b2V5Yid5aeL5YyW546v6IqCXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMdlVwVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcclxuICAgIHRhYkJ0bjogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoQVZpcnR1YWxTY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsZXI6IEFWaXJ0dWFsU2Nyb2xsVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b2dnbGVMYjFfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvZ2dsZUxiMV8yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdG9nZ2xlTGIyXzE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0b2dnbGVMYjJfMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHRvZ2dsZUxiM18xOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdG9nZ2xlTGIzXzI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGZpZWxkTGlzdDogYW55W10gPSBbXTtcclxuICAgIHNoZWx2ZUxpc3Q6IGFueVtdID0gW107XHJcbiAgICBwcm9wTGlzdDogYW55W10gPSBbXTtcclxuXHJcbiAgICBtVGFiID0gXCIxXCI7XHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDpgIDlh7pcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fY2xvc2UsIHRoaXMub25CdG5DbG9zZUhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOS9v+eUqOaIkOWKn1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5MVlVQX1VQREFURSwgdGhpcy5vblVwZGF0ZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudGFiQnRuLnRvZ2dsZUl0ZW1zW051bWJlcih0aGlzLm1UYWIpLTFdLmlzQ2hlY2tlZCA9dHJ1ZVxyXG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVRhYigpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgb25UYWIodG9nZ2xlOiBjYy5Ub2dnbGUpIHtcclxuICAgICAgICBpZiAodG9nZ2xlLmNoZWNrRXZlbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0b2dnbGUuY2hlY2tFdmVudHNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubVRhYiA9IGl0ZW0uY3VzdG9tRXZlbnREYXRhO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUYWIoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZURhdGEoKTtcclxuXHJcbiAgICB9XHJcbiAgICBjaGFuZ2VUYWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubVRhYiA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUxiMV8xLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTGIxXzIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUxiMl8xLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUxiMl8yLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUxiM18xLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUxiM18yLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubVRhYiA9PSBcIjJcIikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2dnbGVMYjFfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVMYjFfMi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2dnbGVMYjJfMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUxiMl8yLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b2dnbGVMYjNfMS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVMYjNfMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tVGFiID09IFwiM1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTGIxXzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTGIxXzIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTGIzXzEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVMYjNfMi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTGIyXzEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTGIyXzIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuY2xlYXJJdGVtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubVRhYiA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZExpc3QubGVuZ3RoID09IDApIHRoaXMudXBkYXRlTGlzdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyLnJlZnJlc2hEYXRhKHRoaXMuZmllbGRMaXN0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubVRhYiA9PSBcIjJcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaGVsdmVMaXN0Lmxlbmd0aCA9PSAwKSB0aGlzLmdldFNobGV2ZURhdGEoKVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyLnJlZnJlc2hEYXRhKHRoaXMuc2hlbHZlTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1UYWIgPT0gXCIzXCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcExpc3QubGVuZ3RoID09IDApIHRoaXMuZ2V0UHJvcERhdGEoKVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyLnJlZnJlc2hEYXRhKHRoaXMucHJvcExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvVG9wKCk7XHJcbiAgICB9XHJcbiAgICBzdGFydFNob3coKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnNoZWx2ZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnByb3BMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5tVGFiID0gdGhpcy5pbkRhdGFbMF07XHJcbiAgICB9XHJcblxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy50YWJCdG4uc2VjXHJcbiAgICAgICAgaWYgKHRoaXMubVRhYiA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubVRhYiA9PSBcIjJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdldFNobGV2ZURhdGEoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdldFByb3BEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhbmdlRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2hsZXZlRGF0YSgpIHtcclxuICAgICAgICB0aGlzLnNoZWx2ZUxpc3QgPSBbXTtcclxuICAgICAgICBsZXQgbGlzdDIgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLnNoZWx2ZXNMaXN0O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdDIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxldmVsID0gbGlzdDJbaV07XHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gMiArIGAke2kgKyAxfWA7XHJcbiAgICAgICAgICAgIGxldCBiYXNlQ2ZnID0gQ29uZmlnTWFuYWdlci5nZXRTaGVsdmVCeVR5cGUodHlwZSwgbGV2ZWwpO1xyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT0gMCkgYmFzZUNmZyA9IENvbmZpZ01hbmFnZXIuZ2V0U2hlbHZlQnlUeXBlKHR5cGUsIDEpO1xyXG4gICAgICAgICAgICBsZXQgbWF4THYgPSBDb25maWdNYW5hZ2VyLmdldFNoZWx2ZU1heEx2KHR5cGUpO1xyXG4gICAgICAgICAgICBsZXQgaXNNYXhMdiA9IGxldmVsID09IG1heEx2O1xyXG4gICAgICAgICAgICBsZXQgY2ZnOiBMdnVwX1R5cGUgPSB7IHRhYkluZGV4OiAyLCBpbmRleDogaSwgbGV2ZWw6IGxldmVsLCBpZDogaSArIDEsIHR5cGU6IHR5cGUsIG5hbWU6IGJhc2VDZmcubmFtZSwgYWRkRGVzYzogYmFzZUNmZy5hZGRfZGVzYywgaXNNYXhMdjogaXNNYXhMdiB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hlbHZlTGlzdC5wdXNoKGNmZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UHJvcERhdGEoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcExpc3QgPSBbXTtcclxuICAgICAgICBsZXQgdWljZmcgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpO1xyXG4gICAgICAgIGxldCBjYXNoaWVyQ2ZnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS5jYXNoaWVyLCB1aWNmZy5jYXNoaWVybHYpO1xyXG4gICAgICAgIGxldCBtYXhMdiA9IENvbmZpZ01hbmFnZXIuZ2V0UHJvcE1heEx2KHByb3BUeXBlLmNhc2hpZXIpO1xyXG4gICAgICAgIGxldCBpc01heEx2ID0gdWljZmcuY2FzaGllcmx2ID09IG1heEx2O1xyXG4gICAgICAgIHRoaXMucHJvcExpc3QucHVzaCh7IHRhYkluZGV4OiAzLCBpbmRleDogMCwgbGV2ZWw6IHVpY2ZnLmNhc2hpZXJsdiwgaWQ6IHVpY2ZnLmNhc2hpZXJsdiwgdHlwZTogcHJvcFR5cGUuY2FzaGllciwgbmFtZTogY2FzaGllckNmZy5uYW1lLCBhZGREZXNjOiBjYXNoaWVyQ2ZnLmFkZF9kZXNjLCBpc01heEx2OiBpc01heEx2IH0pXHJcblxyXG4gICAgICAgIGxldCBwaXBlQ2ZnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS5waXBlLCB1aWNmZy5waXBlbHYpO1xyXG4gICAgICAgIG1heEx2ID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wTWF4THYocHJvcFR5cGUucGlwZSk7XHJcbiAgICAgICAgaXNNYXhMdiA9IHVpY2ZnLnBpcGVsdiA9PSBtYXhMdjtcclxuICAgICAgICB0aGlzLnByb3BMaXN0LnB1c2goeyB0YWJJbmRleDogNCwgaW5kZXg6IDEsIGxldmVsOiB1aWNmZy5waXBlbHYsIGlkOiB1aWNmZy5waXBlbHYsIHR5cGU6IHByb3BUeXBlLnBpcGUsIG5hbWU6IHBpcGVDZmcubmFtZSwgYWRkRGVzYzogcGlwZUNmZy5hZGRfZGVzYywgaXNNYXhMdjogaXNNYXhMdiB9KVxyXG5cclxuICAgICAgICBsZXQgd2FsbENmZyA9IENvbmZpZ01hbmFnZXIuZ2V0UHJvcEJ5SWQocHJvcFR5cGUud2FsbCwgdWljZmcud2FsbGx2KTtcclxuICAgICAgICBtYXhMdiA9IENvbmZpZ01hbmFnZXIuZ2V0UHJvcE1heEx2KHByb3BUeXBlLndhbGwpO1xyXG4gICAgICAgIGlzTWF4THYgPSB1aWNmZy53YWxsbHYgPT0gbWF4THY7XHJcbiAgICAgICAgdGhpcy5wcm9wTGlzdC5wdXNoKHsgdGFiSW5kZXg6IDUsIGluZGV4OiAyLCBsZXZlbDogdWljZmcud2FsbGx2LCBpZDogdWljZmcud2FsbGx2LCB0eXBlOiBwcm9wVHlwZS53YWxsLCBuYW1lOiB3YWxsQ2ZnLm5hbWUsIGFkZERlc2M6IHdhbGxDZmcuYWRkX2Rlc2MsIGlzTWF4THY6IGlzTWF4THYgfSlcclxuXHJcbiAgICAgICAgbGV0IHJvYWRDZmcgPSBDb25maWdNYW5hZ2VyLmdldFByb3BCeUlkKHByb3BUeXBlLnJvYWQsIHVpY2ZnLnJvYWRsdik7XHJcbiAgICAgICAgbWF4THYgPSBDb25maWdNYW5hZ2VyLmdldFByb3BNYXhMdihwcm9wVHlwZS5yb2FkKTtcclxuICAgICAgICBpc01heEx2ID0gdWljZmcucm9hZGx2ID09IG1heEx2O1xyXG4gICAgICAgIHRoaXMucHJvcExpc3QucHVzaCh7IHRhYkluZGV4OiA2LCBpbmRleDogMywgbGV2ZWw6IHVpY2ZnLnJvYWRsdiwgaWQ6IHVpY2ZnLnJvYWRsdiwgdHlwZTogcHJvcFR5cGUucm9hZCwgbmFtZTogcm9hZENmZy5uYW1lLCBhZGREZXNjOiByb2FkQ2ZnLmFkZF9kZXNjLCBpc01heEx2OiBpc01heEx2IH0pXHJcblxyXG4gICAgICAgIGxldCBzY2FyZWNyb3dDZmcgPSBDb25maWdNYW5hZ2VyLmdldFByb3BCeUlkKHByb3BUeXBlLnNjYXJlY3JvdywgdWljZmcuc2NhcmVjcm93bHYpO1xyXG4gICAgICAgIG1heEx2ID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wTWF4THYocHJvcFR5cGUuc2NhcmVjcm93KTtcclxuICAgICAgICBpc01heEx2ID0gdWljZmcuc2NhcmVjcm93bHYgPT0gbWF4THY7XHJcbiAgICAgICAgdGhpcy5wcm9wTGlzdC5wdXNoKHsgdGFiSW5kZXg6IDcsIGluZGV4OiA0LCBsZXZlbDogdWljZmcuc2NhcmVjcm93bHYsIGlkOiB1aWNmZy5zY2FyZWNyb3dsdiwgdHlwZTogcHJvcFR5cGUuc2NhcmVjcm93LCBuYW1lOiBzY2FyZWNyb3dDZmcubmFtZSwgYWRkRGVzYzogc2NhcmVjcm93Q2ZnLmFkZF9kZXNjLCBpc01heEx2OiBpc01heEx2IH0pXHJcblxyXG4gICAgICAgIGxldCB3YXJlaG91c2VDZmcgPSBDb25maWdNYW5hZ2VyLmdldFByb3BCeUlkKHByb3BUeXBlLndhcmVob3VzZSwgdWljZmcud2FyZWhvdXNlbHYpO1xyXG4gICAgICAgIG1heEx2ID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wTWF4THYocHJvcFR5cGUud2FyZWhvdXNlKTtcclxuICAgICAgICBpc01heEx2ID0gdWljZmcud2FyZWhvdXNlbHYgPT0gbWF4THY7XHJcbiAgICAgICAgdGhpcy5wcm9wTGlzdC5wdXNoKHsgdGFiSW5kZXg6IDgsIGluZGV4OiA1LCBsZXZlbDogdWljZmcud2FyZWhvdXNlbHYsIGlkOiB1aWNmZy53YXJlaG91c2VsdiwgdHlwZTogcHJvcFR5cGUud2FyZWhvdXNlLCBuYW1lOiB3YXJlaG91c2VDZmcubmFtZSwgYWRkRGVzYzogd2FyZWhvdXNlQ2ZnLmFkZF9kZXNjLCBpc01heEx2OiBpc01heEx2IH0pXHJcblxyXG4gICAgICAgIGxldCBmZW5jZUNmZyA9IENvbmZpZ01hbmFnZXIuZ2V0UHJvcEJ5SWQocHJvcFR5cGUuZmVuY2UsIHVpY2ZnLmZlbmNlbHYpO1xyXG4gICAgICAgIG1heEx2ID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wTWF4THYocHJvcFR5cGUuZmVuY2UpO1xyXG4gICAgICAgIGlzTWF4THYgPSB1aWNmZy5mZW5jZWx2ID09IG1heEx2O1xyXG4gICAgICAgIHRoaXMucHJvcExpc3QucHVzaCh7IHRhYkluZGV4OiA5LCBpbmRleDogNiwgbGV2ZWw6IHVpY2ZnLmZlbmNlbHYsIGlkOiB1aWNmZy5mZW5jZWx2LCB0eXBlOiBwcm9wVHlwZS5mZW5jZSwgbmFtZTogZmVuY2VDZmcubmFtZSwgYWRkRGVzYzogZmVuY2VDZmcuYWRkX2Rlc2MsIGlzTWF4THY6IGlzTWF4THYgfSlcclxuICAgIH1cclxuICAgIC8qKiDph43mlrDliqDovb3liJfooajkuK3nmoTmmL7npLrmnaHnm64gKi9cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpZWxkTGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBsaXN0MSA9IFBsYXllck1vZGVsLmdldEZpZWxkTGlzdENmZygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdDEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBsaXN0MVtpXTtcclxuICAgICAgICAgICAgbGV0IGJhc2VDZmcgPSBDb25maWdNYW5hZ2VyLmdldEZpZWxkQ2ZnQnlUeXBlKGRhdGEudHlwZSwgZGF0YS5sZXZlbCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxldmVsID09IDApIGJhc2VDZmcgPSBDb25maWdNYW5hZ2VyLmdldEZpZWxkQ2ZnQnlUeXBlKGRhdGEudHlwZSwgMSk7XHJcbiAgICAgICAgICAgIGxldCBtYXhMdiA9IENvbmZpZ01hbmFnZXIuZ2V0RmllbGRNYXhMdihkYXRhLnR5cGUpO1xyXG4gICAgICAgICAgICBsZXQgaXNNYXhMdiA9IGRhdGEubGV2ZWwgPT0gbWF4THY7XHJcbiAgICAgICAgICAgIGxldCBjZmc6IEx2dXBfVHlwZSA9IHsgdGFiSW5kZXg6IDEsIGluZGV4OiBpLCBsZXZlbDogZGF0YS5sZXZlbCwgaWQ6IGRhdGEuaWQsIHR5cGU6IGRhdGEudHlwZSwgbmFtZTogYmFzZUNmZy5uYW1lLCBhZGREZXNjOiBiYXNlQ2ZnLmFkZF9kZXNjLCBpc01heEx2OiBpc01heEx2IH1cclxuICAgICAgICAgICAgdGhpcy5maWVsZExpc3QucHVzaChjZmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbGV0IG9mZnNldCA9IHRoaXMudVNjcm9sbFZpZXcuZ2V0U2Nyb2xsT2Zmc2V0KCk7XHJcbiAgICAgICAgLy8gbGV0IGhlaWdodCA9IHRoaXMudVNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQ7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVTY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSB0aGlzLnVTY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW5baV07XHJcbiAgICAgICAgLy8gICAgIGlmIChub2RlLnkgPD0gaGVpZ2h0IC0gb2Zmc2V0LnkgKyAyMDAgJiYgbm9kZS55ID49IGhlaWdodCAtIG9mZnNldC55IC0gMTI4MCAtIDIwMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5LuF55So5LqO5YWz6Zet5pON5L2cICovXHJcbiAgICBvbkJ0bkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIC8vIHRoaXMudVNjcm9sbFZpZXcuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgZ3VpZGVJdGVtOiBjYy5Ob2RlO1xyXG4gICAgZ2V0R3VpZGVQb2ludCgpIHtcclxuICAgICAgICAvLyBsZXQgcCA9IHRoaXMuZ3VpZGVJdGVtLmdldENvbXBvbmVudChMdlVwSXRlbTEpLmdldEd1aWRlUG9pbnQoKTtcclxuICAgICAgICAvLyByZXR1cm4gcDtcclxuICAgIH1cclxufVxyXG4iXX0=
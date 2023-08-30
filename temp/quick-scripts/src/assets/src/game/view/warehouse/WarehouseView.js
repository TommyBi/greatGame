"use strict";
cc._RF.push(module, '36677TqL0ZNrabcLYybZywE', 'WarehouseView');
// src/game/view/warehouse/WarehouseView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var CConst_1 = require("../../consts/CConst");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 仓库界面
 */
var WarehouseView = /** @class */ (function (_super) {
    __extends(WarehouseView, _super);
    function WarehouseView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.uScrollView = null;
        _this.ulabelCount = null;
        _this.ulabelMax = null;
        _this.proLb = null;
        _this.ulabelEmpty = null;
        _this.uBar = null;
        _this.wareLv = 1; // 仓库id
        _this.wareCropList = []; // 仓库中仍然还有的作物
        return _this;
    }
    WarehouseView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        this.initUI();
    };
    WarehouseView.prototype.onDisable = function () {
    };
    WarehouseView.prototype.startShow = function () {
    };
    WarehouseView.prototype.initUI = function () {
        this.wareCropList = [];
        // 拉取仓库中的作物数据（剔除掉了库存为0的作物）
        var warehouseCropInfo = PlayerModel_1.default.getWarerHouseCfg();
        this.wareCropList = warehouseCropInfo.cropList.filter(function (x) {
            return x.num > 0;
        });
        this.ulabelEmpty.active = !Boolean(this.wareCropList.length > 0);
        this.uScrollView.refreshData(this.wareCropList);
        this.uScrollView.scrollToTop();
        // 持仓
        var total = 0;
        this.wareCropList.map(function (x) {
            total += x.num;
        });
        this.ulabelCount.string = "" + total;
        // TODO:仓库上限
        var max = this.getCurWareHouseCountMax();
        this.ulabelMax.string = "/" + max;
        // TODO:进度
        this.uBar.progress = total / max;
        this.proLb.string = Math.floor(total / max * 100) + "%";
    };
    /** 获取仓库存储上限 */
    WarehouseView.prototype.getCurWareHouseCountMax = function () {
        var _this = this;
        this.wareLv = PlayerModel_1.default.getUIConfig().warehouselv;
        var arr = ConfigManager_1.default.prop.filter(function (x) {
            return x.id == Number(CConst_1.propType.warehouse + ("0" + _this.wareLv));
        });
        var cfg = arr[0];
        return cfg.add_num;
    };
    /** 仅用于关闭操作 */
    WarehouseView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], WarehouseView.prototype, "btn_close", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], WarehouseView.prototype, "uScrollView", void 0);
    __decorate([
        property(cc.Label)
    ], WarehouseView.prototype, "ulabelCount", void 0);
    __decorate([
        property(cc.Label)
    ], WarehouseView.prototype, "ulabelMax", void 0);
    __decorate([
        property(cc.Label)
    ], WarehouseView.prototype, "proLb", void 0);
    __decorate([
        property(cc.Node)
    ], WarehouseView.prototype, "ulabelEmpty", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], WarehouseView.prototype, "uBar", void 0);
    WarehouseView = __decorate([
        ccclass
    ], WarehouseView);
    return WarehouseView;
}(BasePanel_1.default));
exports.default = WarehouseView;

cc._RF.pop();
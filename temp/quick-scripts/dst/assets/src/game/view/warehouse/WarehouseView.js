
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/warehouse/WarehouseView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3dhcmVob3VzZS9XYXJlaG91c2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHdFQUFtRTtBQUNuRSw2REFBd0Q7QUFDeEQsOENBQStDO0FBQy9DLHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsaUVBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOztHQUVHO0FBRUg7SUFBMkMsaUNBQVM7SUFBcEQ7UUFBQSxxRUEyRUM7UUF4RUcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUF1QixJQUFJLENBQUM7UUFFdkMsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLFVBQUksR0FBbUIsSUFBSSxDQUFDO1FBRTVCLFlBQU0sR0FBVyxDQUFDLENBQUMsQ0FBUyxPQUFPO1FBQ25DLGtCQUFZLEdBQVUsRUFBRSxDQUFDLENBQUksYUFBYTs7SUF5RDlDLENBQUM7SUF2REcsZ0NBQVEsR0FBUjtRQUNJLEtBQUs7UUFDTCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELGlDQUFTLEdBQVQ7SUFDQSxDQUFDO0lBRUQsaUNBQVMsR0FBVDtJQUNBLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FB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IExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCB7IHByb3BUeXBlIH0gZnJvbSBcIi4uLy4uL2NvbnN0cy9DQ29uc3RcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCBBVmlydHVhbFNjcm9sbFZpZXcgZnJvbSBcIi4uL3Rhc2svQVZpcnR1YWxTY3JvbGxWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOS7k+W6k+eVjOmdolxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FyZWhvdXNlVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KEFWaXJ0dWFsU2Nyb2xsVmlldylcclxuICAgIHVTY3JvbGxWaWV3OiBBVmlydHVhbFNjcm9sbFZpZXcgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdWxhYmVsQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHVsYWJlbE1heDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJvTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdWxhYmVsRW1wdHk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgdUJhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIHdhcmVMdjogbnVtYmVyID0gMTsgICAgICAgICAvLyDku5PlupNpZFxyXG4gICAgd2FyZUNyb3BMaXN0OiBhbnlbXSA9IFtdOyAgICAvLyDku5PlupPkuK3ku43nhLbov5jmnInnmoTkvZznialcclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDpgIDlh7pcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fY2xvc2UsIHRoaXMub25CdG5DbG9zZUhhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNob3coKSB7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMud2FyZUNyb3BMaXN0ID0gW107XHJcbiAgICAgICAgLy8g5ouJ5Y+W5LuT5bqT5Lit55qE5L2c54mp5pWw5o2u77yI5YmU6Zmk5o6J5LqG5bqT5a2Y5Li6MOeahOS9nOeJqe+8iVxyXG4gICAgICAgIGxldCB3YXJlaG91c2VDcm9wSW5mbyA9IFBsYXllck1vZGVsLmdldFdhcmVySG91c2VDZmcoKTtcclxuICAgICAgICB0aGlzLndhcmVDcm9wTGlzdCA9IHdhcmVob3VzZUNyb3BJbmZvLmNyb3BMaXN0LmZpbHRlcih4ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHgubnVtID4gMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudWxhYmVsRW1wdHkuYWN0aXZlID0gIUJvb2xlYW4odGhpcy53YXJlQ3JvcExpc3QubGVuZ3RoID4gMCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnVTY3JvbGxWaWV3LnJlZnJlc2hEYXRhKHRoaXMud2FyZUNyb3BMaXN0KTtcclxuXHJcbiAgICAgICAgdGhpcy51U2Nyb2xsVmlldy5zY3JvbGxUb1RvcCgpO1xyXG4gICAgICAgIC8vIOaMgeS7k1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy53YXJlQ3JvcExpc3QubWFwKHggPT4ge1xyXG4gICAgICAgICAgICB0b3RhbCArPSB4Lm51bTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMudWxhYmVsQ291bnQuc3RyaW5nID0gYCR7dG90YWx9YDtcclxuXHJcbiAgICAgICAgLy8gVE9ETzrku5PlupPkuIrpmZBcclxuICAgICAgICBsZXQgbWF4ID0gdGhpcy5nZXRDdXJXYXJlSG91c2VDb3VudE1heCgpO1xyXG4gICAgICAgIHRoaXMudWxhYmVsTWF4LnN0cmluZyA9IGAvJHttYXh9YDtcclxuXHJcbiAgICAgICAgLy8gVE9ETzrov5vluqZcclxuICAgICAgICB0aGlzLnVCYXIucHJvZ3Jlc3MgPSB0b3RhbCAvIG1heDtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9MYi5zdHJpbmcgPSBNYXRoLmZsb29yKHRvdGFsIC8gbWF4KjEwMCkgKyBcIiVcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+W5LuT5bqT5a2Y5YKo5LiK6ZmQICovXHJcbiAgICBwcml2YXRlIGdldEN1cldhcmVIb3VzZUNvdW50TWF4KCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy53YXJlTHYgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLndhcmVob3VzZWx2O1xyXG4gICAgICAgIGxldCBhcnIgPSBDb25maWdNYW5hZ2VyLnByb3AuZmlsdGVyKCh4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB4LmlkID09IE51bWJlcihwcm9wVHlwZS53YXJlaG91c2UgKyBgMCR7dGhpcy53YXJlTHZ9YCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgY2ZnID0gYXJyWzBdO1xyXG4gICAgICAgIHJldHVybiBjZmcuYWRkX251bTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5LuF55So5LqO5YWz6Zet5pON5L2cICovXHJcbiAgICBvbkJ0bkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
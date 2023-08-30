
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/cashier/CashierView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ada74+01chKAJm1ElXiMxj5', 'CashierView');
// src/game/view/cashier/CashierView.ts

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
var SDKManager_1 = require("../../../framework/manager/SDKManager");
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var ComponentHelper_1 = require("../../../framework/tools/ComponentHelper");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
var CashierView = /** @class */ (function (_super) {
    __extends(CashierView, _super);
    function CashierView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.btn_hideClick = null;
        _this.btn_add = null;
        _this.btn_lvUp = null;
        _this.btn_close = null;
        _this.numLb = null;
        _this.timeLb = null;
        _this.proLb = null;
        _this.descLb = null;
        _this.pro = null;
        _this.lastTime = 0;
        return _this;
    }
    CashierView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_lvUp, this.onLvUp, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.initUI();
    };
    CashierView.prototype.onLoad = function () {
        this.btnVideo = this.btn_add.getChildByName("videoIcon");
        this.btnLb = this.btn_add.getChildByName("contentLabel").getComponent(cc.Label);
    };
    CashierView.prototype.startShow = function () {
    };
    CashierView.prototype.initUI = function () {
        var _this = this;
        this.proLb.string = PlayerModel_1.default.cashierGold + "/" + ConfigManager_1.default.getCashierMax();
        this.numLb.string = "x" + ConfigManager_1.default.cashier_one;
        this.lastTime = ConfigManager_1.default.cashier_add_times * 60 - Math.floor((new Date().getTime() / 1000 - PlayerModel_1.default.getAddLastTime()));
        if (this.lastTime > 0) {
            this.btnLb.node.x = 0;
            this.btnVideo.active = false;
            this.btnLb.string = "3倍加速中";
            this.btn_hideClick.active = true;
            this.numLb.string = "x" + ConfigManager_1.default.cashier_one * 3;
        }
        else {
            this.resetVideoBtn();
        }
        var lv = PlayerModel_1.default.getUIConfig().cashierlv;
        MkUtils_1.default.loadSpriteFrame("texture/prop/cashier/icon/" + ("0" + lv), function (res) {
            _this.icon.spriteFrame = res;
        });
    };
    CashierView.prototype.resetVideoBtn = function () {
        this.btn_hideClick.active = false;
        this.timeLb.string = "3分钟";
        this.btnLb.string = "3倍加速";
        this.btnLb.node.x = 48;
        this.btnVideo.active = true;
    };
    CashierView.prototype.onLvUp = function () {
        UIMananger_1.default.showPanel(UIType_1.default.LvUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, 3);
        this.onBtnCloseHandle();
    };
    CashierView.prototype.update = function (dt) {
        this.lastTime -= dt;
        if (this.lastTime > 0) {
            ComponentHelper_1.default.labelTimeSs(this.timeLb.node, this.lastTime);
        }
        else {
            this.resetVideoBtn();
            // this.btn_add.interactable = true;
        }
        this.pro.progress = PlayerModel_1.default.cashierGold / ConfigManager_1.default.getCashierMax();
        this.proLb.string = PlayerModel_1.default.cashierGold + "/" + ConfigManager_1.default.getCashierMax();
        if (PlayerModel_1.default.cashierGold >= ConfigManager_1.default.getCashierMax()) {
            // this.btn_add.interactable = false;
            this.descLb.string = "今日产出已达上限，急需升级收银台";
        }
        else {
            this.descLb.string = "收银台正在源源不断产出钞票";
        }
    };
    CashierView.prototype.onBtnShowAd = function () {
        if (PlayerModel_1.default.cashierGold >= ConfigManager_1.default.getCashierMax()) {
            MkUtils_1.default.alertTips("今日产出已达上限");
            return;
        }
        // if (PlayerModel.getAutoServiceLeftTimes() <= 0) {
        //     MKUtils.alertTips("今日自动服务已达上限，请明日继续使用");
        //     return;
        // }
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video10);
    };
    CashierView.prototype.onVideoBack = function () {
        this.isVideoClose = true;
        MkUtils_1.default.alertTips("收银台3倍加速中");
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.CASHIER_ADD_MULTIPLE);
        this.onBtnCloseHandle();
    };
    CashierView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Sprite)
    ], CashierView.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], CashierView.prototype, "btn_hideClick", void 0);
    __decorate([
        property(cc.Node)
    ], CashierView.prototype, "btn_add", void 0);
    __decorate([
        property(cc.Node)
    ], CashierView.prototype, "btn_lvUp", void 0);
    __decorate([
        property(cc.Node)
    ], CashierView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], CashierView.prototype, "numLb", void 0);
    __decorate([
        property(cc.Label)
    ], CashierView.prototype, "timeLb", void 0);
    __decorate([
        property(cc.Label)
    ], CashierView.prototype, "proLb", void 0);
    __decorate([
        property(cc.Label)
    ], CashierView.prototype, "descLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], CashierView.prototype, "pro", void 0);
    CashierView = __decorate([
        ccclass
    ], CashierView);
    return CashierView;
}(BasePanel_1.default));
exports.default = CashierView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2Nhc2hpZXIvQ2FzaGllclZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0VBQStEO0FBQy9ELDhFQUEwRTtBQUMxRSxvRUFBK0Q7QUFDL0Qsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSw0RUFBdUU7QUFDdkUsNERBQXVEO0FBQ3ZELDZEQUF3RDtBQUN4RCw4Q0FBeUM7QUFDekMsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7Ozs7R0FJRztBQUVIO0lBQXlDLCtCQUFTO0lBQWxEO1FBQUEscUVBcUhDO1FBbkhHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQW1CLElBQUksQ0FBQztRQUkzQixjQUFRLEdBQUcsQ0FBQyxDQUFDOztJQTZGakIsQ0FBQztJQTVGRyw4QkFBUSxHQUFSO1FBQ0ksS0FBSztRQUNMLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdELHNC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SGpEO2tCQXJIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOiHquWKqeacjeWKoeeVjOmdolxyXG4gKiBUT0RPOlxyXG4gKiDpnIDopoHmiY3miJDlip/op4LnnIvlub/lkYrlkI7vvIznm5HlkKxGSU5JU0hfQURfQVVUT1NFUlZJQ0Xkuovku7bvvIzlubblsIbkuLvnlYzpnaLnmoToh6rliqnmnI3liqHml7bpl7Tlu7bplb/lvZPliY3nrYnnuqflr7nlupTnmoTml7bplb9cclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhc2hpZXJWaWV3IGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5faGlkZUNsaWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2FkZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9sdlVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG51bUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb0xiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkZXNjTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHBybzogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIGJ0blZpZGVvOiBjYy5Ob2RlO1xyXG4gICAgYnRuTGI6IGNjLkxhYmVsO1xyXG4gICAgbGFzdFRpbWUgPSAwO1xyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6YCA5Ye6XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fbHZVcCwgdGhpcy5vbkx2VXAsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vblZpZGVvQmFjaywgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnRuVmlkZW8gPSB0aGlzLmJ0bl9hZGQuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb0ljb25cIik7XHJcbiAgICAgICAgdGhpcy5idG5MYiA9IHRoaXMuYnRuX2FkZC5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgfVxyXG4gICAgc3RhcnRTaG93KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9MYi5zdHJpbmcgPSBQbGF5ZXJNb2RlbC5jYXNoaWVyR29sZCArIFwiL1wiICsgQ29uZmlnTWFuYWdlci5nZXRDYXNoaWVyTWF4KCk7XHJcbiAgICAgICAgdGhpcy5udW1MYi5zdHJpbmcgPSBcInhcIiArIENvbmZpZ01hbmFnZXIuY2FzaGllcl9vbmU7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBDb25maWdNYW5hZ2VyLmNhc2hpZXJfYWRkX3RpbWVzICogNjAgLSBNYXRoLmZsb29yKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAgLSBQbGF5ZXJNb2RlbC5nZXRBZGRMYXN0VGltZSgpKSk7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuTGIubm9kZS54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idG5WaWRlby5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5MYi5zdHJpbmcgPSBcIjPlgI3liqDpgJ/kuK1cIlxyXG4gICAgICAgICAgICB0aGlzLmJ0bl9oaWRlQ2xpY2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5udW1MYi5zdHJpbmcgPSBcInhcIiArIENvbmZpZ01hbmFnZXIuY2FzaGllcl9vbmUgKiAzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRWaWRlb0J0bigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGx2ID0gUGxheWVyTW9kZWwuZ2V0VUlDb25maWcoKS5jYXNoaWVybHY7XHJcbiAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL3Byb3AvY2FzaGllci9pY29uL1wiICsgYDAke2x2fWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzZXRWaWRlb0J0bigpIHtcclxuICAgICAgICB0aGlzLmJ0bl9oaWRlQ2xpY2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lTGIuc3RyaW5nID0gXCIz5YiG6ZKfXCI7XHJcbiAgICAgICAgdGhpcy5idG5MYi5zdHJpbmcgPSBcIjPlgI3liqDpgJ9cIlxyXG4gICAgICAgIHRoaXMuYnRuTGIubm9kZS54ID0gNDg7XHJcbiAgICAgICAgdGhpcy5idG5WaWRlby5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgb25MdlVwKCkge1xyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5MdlVwVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCAzKTtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RUaW1lIC09IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBDb21wb25lbnRIZWxwZXIubGFiZWxUaW1lU3ModGhpcy50aW1lTGIubm9kZSwgdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNldFZpZGVvQnRuKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYnRuX2FkZC5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByby5wcm9ncmVzcyA9IFBsYXllck1vZGVsLmNhc2hpZXJHb2xkIC8gQ29uZmlnTWFuYWdlci5nZXRDYXNoaWVyTWF4KCk7XHJcbiAgICAgICAgdGhpcy5wcm9MYi5zdHJpbmcgPSBQbGF5ZXJNb2RlbC5jYXNoaWVyR29sZCArIFwiL1wiICsgQ29uZmlnTWFuYWdlci5nZXRDYXNoaWVyTWF4KCk7XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmNhc2hpZXJHb2xkID49IENvbmZpZ01hbmFnZXIuZ2V0Q2FzaGllck1heCgpKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYnRuX2FkZC5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIuc3RyaW5nID0gXCLku4rml6Xkuqflh7rlt7Lovr7kuIrpmZDvvIzmgKXpnIDljYfnuqfmlLbpk7blj7BcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYi5zdHJpbmcgPSBcIuaUtumTtuWPsOato+WcqOa6kOa6kOS4jeaWreS6p+WHuumSnuelqFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blNob3dBZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuY2FzaGllckdvbGQgPj0gQ29uZmlnTWFuYWdlci5nZXRDYXNoaWVyTWF4KCkpIHtcclxuICAgICAgICAgICAgTUtVdGlscy5hbGVydFRpcHMoXCLku4rml6Xkuqflh7rlt7Lovr7kuIrpmZBcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoUGxheWVyTW9kZWwuZ2V0QXV0b1NlcnZpY2VMZWZ0VGltZXMoKSA8PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIE1LVXRpbHMuYWxlcnRUaXBzKFwi5LuK5pel6Ieq5Yqo5pyN5Yqh5bey6L6+5LiK6ZmQ77yM6K+35piO5pel57un57ut5L2/55SoXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvMTApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlkZW9CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNWaWRlb0Nsb3NlID0gdHJ1ZTtcclxuICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhcIuaUtumTtuWPsDPlgI3liqDpgJ/kuK1cIilcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vblZpZGVvQmFjaywgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkNBU0hJRVJfQUREX01VTFRJUExFKTtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0bkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
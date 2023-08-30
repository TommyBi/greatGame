
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/lvUp/LvUpPopView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91365JdjdxD+rbMWB67ynzl', 'LvUpPopView');
// src/game/view/lvUp/LvUpPopView.ts

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
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var PopView1_1 = require("../popView/PopView1");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自助服务界面
 * TODO:
 * 需要才成功观看广告后，监听FINISH_AD_AUTOSERVICE事件，并将主界面的自助服务时间延长当前等级对应的时长
 */
var LvUpPopView = /** @class */ (function (_super) {
    __extends(LvUpPopView, _super);
    function LvUpPopView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_video = null;
        _this.btn_lvUp = null;
        _this.btn_close = null;
        _this.needGoldLb = null;
        _this.currentIcon = null;
        _this.nextIcon = null;
        _this.currentLv = null;
        _this.nextLv = null;
        _this.cDescLb = null;
        _this.nDescLb = null;
        _this.titleLb = null;
        _this.proLb = null;
        _this.xingfuLb = null;
        _this.pro = null;
        _this.preVideoNum = 0; //已观看视频次数
        _this.typeIndex = 0;
        _this.resList = ["field", "shelves", "cashier", "pipe", "wall", "road", "scarecrow", "warehouse", "fence"];
        return _this;
    }
    LvUpPopView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_lvUp, this.onLvUp, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.initUI();
    };
    LvUpPopView.prototype.onDisable = function () {
    };
    LvUpPopView.prototype.startShow = function () {
        this.mData = this.inData[0];
        this.typeIndex = this.mData.tabIndex;
    };
    LvUpPopView.prototype.initUI = function () {
        var _this = this;
        this.currentLv.string = "\u5F53\u524D" + this.mData.level + "\u7EA7";
        this.nextLv.string = this.mData.level + 1 + "\u7EA7";
        this.titleLb.string = this.mData.name + "升级";
        if (this.typeIndex == 1) {
            this.currentCfg = ConfigManager_1.default.getFieldCfgByType(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager_1.default.getFieldCfgByType(this.mData.type, this.mData.level + 1);
        }
        else if (this.typeIndex == 2) {
            this.currentCfg = ConfigManager_1.default.getShelveByType(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager_1.default.getShelveByType(this.mData.type, this.mData.level + 1);
        }
        else {
            this.currentCfg = ConfigManager_1.default.getPropById(this.mData.type, this.mData.level);
            this.nextCfg = ConfigManager_1.default.getPropById(this.mData.type, this.mData.level + 1);
        }
        this.cDescLb.string = "当前效果：" + this.mData.addDesc;
        this.nDescLb.string = "升级效果：" + this.nextCfg.add_desc;
        this.xingfuLb.string = "x" + this.currentCfg.reward;
        this.needGoldLb.string = this.currentCfg.money + "";
        MkUtils_1.default.loadSpriteFrame("texture/prop/" + this.resList[this.typeIndex - 1] + "/icon/" + ("0" + this.mData["level"]), function (res) {
            _this.currentIcon.spriteFrame = res;
        });
        MkUtils_1.default.loadSpriteFrame("texture/prop/" + this.resList[this.typeIndex - 1] + "/icon/" + ("0" + (this.mData["level"] + 1)), function (res) {
            _this.nextIcon.spriteFrame = res;
        });
        if (this.currentCfg.video_num > 1) {
            this.updateVideoPro();
        }
        else {
            this.pro.node.active = false;
            this.proLb.node.active = false;
        }
    };
    LvUpPopView.prototype.updateVideoPro = function () {
        this.preVideoNum = PlayerModel_1.default.getLvupVideoNum(this.currentCfg.id);
        this.pro.progress = this.preVideoNum / this.currentCfg.video_num;
        this.proLb.string = this.preVideoNum + "/" + this.currentCfg.video_num;
    };
    LvUpPopView.prototype.onLvUp = function () {
        if (this.currentCfg.money <= PlayerModel_1.default.getGold()) {
            PlayerModel_1.default.setGold(-this.currentCfg.money);
            this.lvUpComplete();
        }
        else {
            UIMananger_1.default.showPanel(UIType_1.default.popView1, null, null, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.GOLD2, 1000);
            this.onBtnCloseHandle();
        }
    };
    LvUpPopView.prototype.lvUpComplete = function () {
        switch (this.mData.tabIndex) {
            case 1:
                PlayerModel_1.default.changeFieldSkin(this.mData.index, this.mData.level + 1);
                break;
            case 2:
                PlayerModel_1.default.changeShelveSkin(this.mData.index, this.mData.level + 1);
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                PlayerModel_1.default.setUiLv(this.mData.tabIndex - 3);
                break;
        }
        UIMananger_1.default.showPanel(UIType_1.default.LvUpCompleteView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData, this.nextCfg, this.currentCfg);
        EventDispath_1.default.send(EventType_1.EventType.LVUP_UPDATE);
        this.onBtnCloseHandle();
    };
    LvUpPopView.prototype.onBtnShowAd = function () {
        // if (PlayerModel.getAutoServiceLeftTimes() <= 0) {
        //     MKUtils.alertTips("今日自动服务已达上限，请明日继续使用");
        //     return;
        // }
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video16);
    };
    LvUpPopView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.preVideoNum++;
        if (this.currentCfg.video_num == this.preVideoNum) {
            this.lvUpComplete();
            this.onBtnCloseHandle();
        }
        else {
            MkUtils_1.default.alertTips("\u518D\u770B" + (this.currentCfg.video_num - this.preVideoNum) + "\u4E2A\u89C6\u9891\u5C31\u80FD\u5347\u7EA7\u5566");
            PlayerModel_1.default.saveLvupVideoNum(this.currentCfg.id, this.preVideoNum);
            this.updateVideoPro();
        }
    };
    LvUpPopView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Button)
    ], LvUpPopView.prototype, "btn_video", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpPopView.prototype, "btn_lvUp", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpPopView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "needGoldLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], LvUpPopView.prototype, "currentIcon", void 0);
    __decorate([
        property(cc.Sprite)
    ], LvUpPopView.prototype, "nextIcon", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "currentLv", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "nextLv", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "cDescLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "nDescLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "proLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpPopView.prototype, "xingfuLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LvUpPopView.prototype, "pro", void 0);
    LvUpPopView = __decorate([
        ccclass
    ], LvUpPopView);
    return LvUpPopView;
}(BasePanel_1.default));
exports.default = LvUpPopView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2x2VXAvTHZVcFBvcFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0VBQStEO0FBQy9ELDhFQUEwRTtBQUMxRSxvRUFBK0Q7QUFDL0Qsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUVqRSw0REFBdUQ7QUFDdkQsNkRBQXdEO0FBRXhELDhDQUF5QztBQUN6Qyw4Q0FBeUM7QUFDekMsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUN4RCxnREFBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7Ozs7R0FJRztBQUVIO0lBQXlDLCtCQUFTO0lBQWxEO1FBQUEscUVBNEpDO1FBMUpHLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixTQUFHLEdBQW1CLElBQUksQ0FBQztRQUszQixpQkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFBLFNBQVM7UUFFekIsZUFBUyxHQUFHLENB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O2dEQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzRDQUNFO0lBN0JWLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0Si9CO0lBQUQsa0JBQUM7Q0E1SkQsQUE0SkMsQ0E1SndDLG1CQUFTLEdBNEpqRDtrQkE1Sm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBDb21wb25lbnRIZWxwZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Db21wb25lbnRIZWxwZXJcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlUGFuZWxcIjtcclxuaW1wb3J0IHsgbGV2ZWxVcF9jb25maWcgfSBmcm9tIFwiLi4vLi4vY29uc3RzL0NDb25zdFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFBvcFR5cGUgfSBmcm9tIFwiLi4vcG9wVmlldy9Qb3BWaWV3MVwiO1xyXG5pbXBvcnQgeyBMdnVwX1R5cGUgfSBmcm9tIFwiLi9MdlVwVmlld1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDoh6rliqnmnI3liqHnlYzpnaJcclxuICogVE9ETzpcclxuICog6ZyA6KaB5omN5oiQ5Yqf6KeC55yL5bm/5ZGK5ZCO77yM55uR5ZCsRklOSVNIX0FEX0FVVE9TRVJWSUNF5LqL5Lu277yM5bm25bCG5Li755WM6Z2i55qE6Ieq5Yqp5pyN5Yqh5pe26Ze05bu26ZW/5b2T5YmN562J57qn5a+55bqU55qE5pe26ZW/XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMdlVwUG9wVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuX3ZpZGVvOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fbHZVcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9jbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBuZWVkR29sZExiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgY3VycmVudEljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgbmV4dEljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjdXJyZW50THY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG5leHRMdjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY0Rlc2NMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbkRlc2NMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGl0bGVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb0xiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB4aW5nZnVMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcHJvOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgY3VycmVudENmZzogbGV2ZWxVcF9jb25maWc7XHJcbiAgICBuZXh0Q2ZnOiBsZXZlbFVwX2NvbmZpZztcclxuXHJcbiAgICBwcmVWaWRlb051bSA9IDA7Ly/lt7Lop4LnnIvop4bpopHmrKHmlbBcclxuICAgIG1EYXRhOiBMdnVwX1R5cGU7XHJcbiAgICB0eXBlSW5kZXggPSAwO1xyXG4gICAgcmVzTGlzdCA9IFtcImZpZWxkXCIsIFwic2hlbHZlc1wiLCBcImNhc2hpZXJcIiwgXCJwaXBlXCIsIFwid2FsbFwiLCBcInJvYWRcIiwgXCJzY2FyZWNyb3dcIiwgXCJ3YXJlaG91c2VcIiwgXCJmZW5jZVwiXVxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6YCA5Ye6XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fbHZVcCwgdGhpcy5vbkx2VXAsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vblZpZGVvQmFjaywgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG4gICAgICAgIHRoaXMubURhdGEgPSB0aGlzLmluRGF0YVswXTtcclxuICAgICAgICB0aGlzLnR5cGVJbmRleCA9IHRoaXMubURhdGEudGFiSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEx2LnN0cmluZyA9IGDlvZPliY0ke3RoaXMubURhdGEubGV2ZWx957qnYDtcclxuICAgICAgICB0aGlzLm5leHRMdi5zdHJpbmcgPSBgJHt0aGlzLm1EYXRhLmxldmVsICsgMX3nuqdgO1xyXG4gICAgICAgIHRoaXMudGl0bGVMYi5zdHJpbmcgPSB0aGlzLm1EYXRhLm5hbWUgKyBcIuWNh+e6p1wiO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGVJbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENmZyA9IENvbmZpZ01hbmFnZXIuZ2V0RmllbGRDZmdCeVR5cGUodGhpcy5tRGF0YS50eXBlLCB0aGlzLm1EYXRhLmxldmVsKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0Q2ZnID0gQ29uZmlnTWFuYWdlci5nZXRGaWVsZENmZ0J5VHlwZSh0aGlzLm1EYXRhLnR5cGUsIHRoaXMubURhdGEubGV2ZWwgKyAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZUluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2ZnID0gQ29uZmlnTWFuYWdlci5nZXRTaGVsdmVCeVR5cGUodGhpcy5tRGF0YS50eXBlLCB0aGlzLm1EYXRhLmxldmVsKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0Q2ZnID0gQ29uZmlnTWFuYWdlci5nZXRTaGVsdmVCeVR5cGUodGhpcy5tRGF0YS50eXBlLCB0aGlzLm1EYXRhLmxldmVsICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2ZnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZCh0aGlzLm1EYXRhLnR5cGUsIHRoaXMubURhdGEubGV2ZWwpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRDZmcgPSBDb25maWdNYW5hZ2VyLmdldFByb3BCeUlkKHRoaXMubURhdGEudHlwZSwgdGhpcy5tRGF0YS5sZXZlbCArIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jRGVzY0xiLnN0cmluZyA9IFwi5b2T5YmN5pWI5p6c77yaXCIgKyB0aGlzLm1EYXRhLmFkZERlc2M7XHJcbiAgICAgICAgdGhpcy5uRGVzY0xiLnN0cmluZyA9IFwi5Y2H57qn5pWI5p6c77yaXCIgKyB0aGlzLm5leHRDZmcuYWRkX2Rlc2M7XHJcblxyXG4gICAgICAgIHRoaXMueGluZ2Z1TGIuc3RyaW5nID0gXCJ4XCIgKyB0aGlzLmN1cnJlbnRDZmcucmV3YXJkO1xyXG4gICAgICAgIHRoaXMubmVlZEdvbGRMYi5zdHJpbmcgPSB0aGlzLmN1cnJlbnRDZmcubW9uZXkgKyBcIlwiO1xyXG5cclxuICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvcHJvcC9cIiArIHRoaXMucmVzTGlzdFt0aGlzLnR5cGVJbmRleCAtIDFdICsgXCIvaWNvbi9cIiArIGAwJHt0aGlzLm1EYXRhW1wibGV2ZWxcIl19YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL1wiICsgdGhpcy5yZXNMaXN0W3RoaXMudHlwZUluZGV4IC0gMV0gKyBcIi9pY29uL1wiICsgYDAke3RoaXMubURhdGFbXCJsZXZlbFwiXSArIDF9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRJY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q2ZnLnZpZGVvX251bSA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWRlb1BybygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJvTGIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlkZW9Qcm8oKSB7XHJcbiAgICAgICAgdGhpcy5wcmVWaWRlb051bSA9IFBsYXllck1vZGVsLmdldEx2dXBWaWRlb051bSh0aGlzLmN1cnJlbnRDZmcuaWQpO1xyXG4gICAgICAgIHRoaXMucHJvLnByb2dyZXNzID0gdGhpcy5wcmVWaWRlb051bSAvIHRoaXMuY3VycmVudENmZy52aWRlb19udW07XHJcbiAgICAgICAgdGhpcy5wcm9MYi5zdHJpbmcgPSB0aGlzLnByZVZpZGVvTnVtICsgXCIvXCIgKyB0aGlzLmN1cnJlbnRDZmcudmlkZW9fbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTHZVcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q2ZnLm1vbmV5IDw9IFBsYXllck1vZGVsLmdldEdvbGQoKSkge1xyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5zZXRHb2xkKC10aGlzLmN1cnJlbnRDZmcubW9uZXkpO1xyXG4gICAgICAgICAgICB0aGlzLmx2VXBDb21wbGV0ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5wb3BWaWV3MSwgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCBQb3BUeXBlLkdPTEQyLCAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGx2VXBDb21wbGV0ZSgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubURhdGEudGFiSW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgUGxheWVyTW9kZWwuY2hhbmdlRmllbGRTa2luKHRoaXMubURhdGEuaW5kZXgsIHRoaXMubURhdGEubGV2ZWwgKyAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJNb2RlbC5jaGFuZ2VTaGVsdmVTa2luKHRoaXMubURhdGEuaW5kZXgsIHRoaXMubURhdGEubGV2ZWwgKyAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJNb2RlbC5zZXRVaUx2KHRoaXMubURhdGEudGFiSW5kZXggLSAzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuTHZVcENvbXBsZXRlVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB0aGlzLm1EYXRhLCB0aGlzLm5leHRDZmcsIHRoaXMuY3VycmVudENmZyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkxWVVBfVVBEQVRFKTtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ0blNob3dBZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoUGxheWVyTW9kZWwuZ2V0QXV0b1NlcnZpY2VMZWZ0VGltZXMoKSA8PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIE1LVXRpbHMuYWxlcnRUaXBzKFwi5LuK5pel6Ieq5Yqo5pyN5Yqh5bey6L6+5LiK6ZmQ77yM6K+35piO5pel57un57ut5L2/55SoXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlkZW9CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnByZVZpZGVvTnVtKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENmZy52aWRlb19udW0gPT0gdGhpcy5wcmVWaWRlb051bSkge1xyXG4gICAgICAgICAgICB0aGlzLmx2VXBDb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBNS1V0aWxzLmFsZXJ0VGlwcyhg5YaN55yLJHt0aGlzLmN1cnJlbnRDZmcudmlkZW9fbnVtLXRoaXMucHJlVmlkZW9OdW195Liq6KeG6aKR5bCx6IO95Y2H57qn5ZWmYClcclxuICAgICAgICAgICAgUGxheWVyTW9kZWwuc2F2ZUx2dXBWaWRlb051bSh0aGlzLmN1cnJlbnRDZmcuaWQsIHRoaXMucHJlVmlkZW9OdW0pO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZGVvUHJvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/GetCropView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f0096giXFErZnlkmgVfH0p', 'GetCropView');
// src/game/view/order/GetCropView.ts

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
var CConst_1 = require("../../consts/CConst");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *获取XX
 * TODO:
 */
var GetCropView = /** @class */ (function (_super) {
    __extends(GetCropView, _super);
    function GetCropView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.btn_close = null;
        _this.btn_plant = null;
        _this.btn_video = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.proLb = null;
        _this.nameLb = null;
        _this.titleLb = null;
        _this.pro = null;
        return _this;
    }
    GetCropView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_plant, this.onPlant, this);
        EventDispath_1.default.on(this.btn_video, this.onVideo, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.GET_CROP_CLOSE, this.onBtnCloseHandle, this);
        this.initUI();
    };
    GetCropView.prototype.onLoad = function () {
    };
    GetCropView.prototype.start = function () {
    };
    GetCropView.prototype.startShow = function () {
        this.mData = this.inData[0];
    };
    GetCropView.prototype.initUI = function () {
        var _this = this;
        var base = ConfigManager_1.default.getCropById(this.mData.cropId);
        this.titleLb.string = "获取" + base.name;
        this.nameLb.string = base.name;
        this.proLb.string = this.mData.num + "/" + this.mData.target;
        this.pro.progress = this.mData.num / this.mData.target;
        this.descLb1.string = "1.\u571F\u5730\u4E2D\u79CD\u690D" + base.name + "\u7B49\u5F85\u6536\u83B7";
        this.descLb2.string = "2.\u89C2\u770B\u89C6\u9891\u5FEB\u901F\u83B7\u53D6" + base.name + " \u00D74";
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mData.cropId), function (res) {
            _this.icon.spriteFrame = res;
        });
    };
    GetCropView.prototype.onPlant = function () {
        EventDispath_1.default.send(EventType_1.EventType.CROP_PLANT_GET, this.mData.cropId);
    };
    GetCropView.prototype.onVideo = function () {
        if (this.checkHouseMax(4)) {
            MkUtils_1.default.alertTips("仓库放不下了，快点卖出作物赚钱吧");
            return;
        }
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video7);
    };
    GetCropView.prototype.onVideoBack = function () {
        PlayerModel_1.default.setHouseAddCrop(this.mData.cropId, 4);
        UIMananger_1.default.showPanel(UIType_1.default.PopGetCropView, null, null, UIEffectManager_1.UIEffectType.SCALE, { id: this.mData.cropId, num: 4 });
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        this.onBtnCloseHandle();
    };
    //检测仓库是否达到上限
    GetCropView.prototype.checkHouseMax = function (value) {
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
    /** 仅用于关闭操作 */
    GetCropView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Sprite)
    ], GetCropView.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], GetCropView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], GetCropView.prototype, "btn_plant", void 0);
    __decorate([
        property(cc.Node)
    ], GetCropView.prototype, "btn_video", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "descLb2", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "proLb", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], GetCropView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GetCropView.prototype, "pro", void 0);
    GetCropView = __decorate([
        ccclass
    ], GetCropView);
    return GetCropView;
}(BasePanel_1.default));
exports.default = GetCropView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL0dldENyb3BWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUErRDtBQUMvRCw4RUFBMEU7QUFDMUUsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNERBQXVEO0FBQ3ZELDZEQUF3RDtBQUN4RCw4Q0FBK0M7QUFDL0MsOENBQXlDO0FBQ3pDLDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBR2xELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7R0FHRztBQUVIO0lBQXlDLCtCQUFTO0lBQWxEO1FBQUEscUVBMkZDO1FBeEZHLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFNBQUcsR0FBbUIsSUFBSSxDQUFDOztJQXNFL0IsQ0FBQztJQW5FRyw4QkFBUSxHQUFSO1FBQ0ksS0FBSztRQUNMLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxT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QURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NENBQ0U7SUFyQlYsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTJGL0I7SUFBRCxrQkFBQztDQTNGRCxBQTJGQyxDQTNGd0MsbUJBQVMsR0EyRmpEO2tCQTNGb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlUGFuZWxcIjtcclxuaW1wb3J0IHsgcHJvcFR5cGUgfSBmcm9tIFwiLi4vLi4vY29uc3RzL0NDb25zdFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IE9yZGVySXRlbV9Dcm9wIH0gZnJvbSBcIi4vT3JkZXJJdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAq6I635Y+WWFhcclxuICogVE9ETzpcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldENyb3BWaWV3IGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX3BsYW50OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX3ZpZGVvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NMYjE6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NMYjI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb0xiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpdGxlTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcclxuICAgIHBybzogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIG1EYXRhO1xyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6YCA5Ye6XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fcGxhbnQsIHRoaXMub25QbGFudCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX3ZpZGVvLCB0aGlzLm9uVmlkZW8sIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuR0VUX0NST1BfQ0xPU0UsIHRoaXMub25CdG5DbG9zZUhhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG4gICAgICAgIHRoaXMubURhdGEgPSB0aGlzLmluRGF0YVswXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgbGV0IGJhc2UgPSBDb25maWdNYW5hZ2VyLmdldENyb3BCeUlkKHRoaXMubURhdGEuY3JvcElkKTtcclxuICAgICAgICB0aGlzLnRpdGxlTGIuc3RyaW5nID0gXCLojrflj5ZcIiArIGJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLm5hbWVMYi5zdHJpbmcgPSBiYXNlLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMucHJvTGIuc3RyaW5nID0gdGhpcy5tRGF0YS5udW0gKyBcIi9cIiArIHRoaXMubURhdGEudGFyZ2V0O1xyXG4gICAgICAgIHRoaXMucHJvLnByb2dyZXNzID0gdGhpcy5tRGF0YS5udW0gLyB0aGlzLm1EYXRhLnRhcmdldDtcclxuICAgICAgICB0aGlzLmRlc2NMYjEuc3RyaW5nID0gYDEu5Zyf5Zyw5Lit56eN5qSNJHtiYXNlLm5hbWV9562J5b6F5pS26I63YFxyXG4gICAgICAgIHRoaXMuZGVzY0xiMi5zdHJpbmcgPSBgMi7op4LnnIvop4bpopHlv6vpgJ/ojrflj5Yke2Jhc2UubmFtZX0gw5c0YDtcclxuXHJcbiAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2Nyb3AvaWNvbi9cIiArIGAke3RoaXMubURhdGEuY3JvcElkfWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblBsYW50KCkge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5DUk9QX1BMQU5UX0dFVCwgdGhpcy5tRGF0YS5jcm9wSWQpO1xyXG4gICAgfVxyXG4gICAgb25WaWRlbygpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0hvdXNlTWF4KDQpKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuYWxlcnRUaXBzKFwi5LuT5bqT5pS+5LiN5LiL5LqG77yM5b+r54K55Y2W5Ye65L2c54mp6LWa6ZKx5ZCnXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25WaWRlb0JhY2ssIHRoaXMpO1xyXG4gICAgICAgIFNES01hbmFnZXIuc2hvd0FkKEdsb2JhbC5WSURFT19DT05GSUcudmlkZW83KVxyXG4gICAgfVxyXG4gICAgb25WaWRlb0JhY2soKSB7XHJcbiAgICAgICAgUGxheWVyTW9kZWwuc2V0SG91c2VBZGRDcm9wKHRoaXMubURhdGEuY3JvcElkLCA0KTtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuUG9wR2V0Q3JvcFZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgeyBpZDogdGhpcy5tRGF0YS5jcm9wSWQsIG51bTogNCB9KVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuICAgIC8v5qOA5rWL5LuT5bqT5piv5ZCm6L6+5Yiw5LiK6ZmQXHJcbiAgICBjaGVja0hvdXNlTWF4KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGx2ID0gUGxheWVyTW9kZWwuZ2V0VUlDb25maWcoKS53YXJlaG91c2VsdjtcclxuICAgICAgICAvLyBsZXQgYXJyID0gQ29uZmlnTWFuYWdlci5wcm9wLmZpbHRlcigodmFsdWUpID0+IHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHZhbHVlLmlkID09IE51bWJlcihwcm9wVHlwZS53YXJlaG91c2UgKyBgMCR7aWR9YCk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICBsZXQgY2ZnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS53YXJlaG91c2UsIGx2KTtcclxuICAgICAgICBsZXQgY3VycmVudE51bSA9IFBsYXllck1vZGVsLmdldEN1cnJlbnRQdXROdW0oKTtcclxuICAgICAgICBpZiAoKGNmZy5hZGRfbnVtIC0gY3VycmVudE51bSkgPCB2YWx1ZSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqIOS7heeUqOS6juWFs+mXreaTjeS9nCAqL1xyXG4gICAgb25CdG5DbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
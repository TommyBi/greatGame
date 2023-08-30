
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/popView/PopZlView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4e3exTl9hA7bfMTOd1d9V2', 'PopZlView');
// src/game/view/popView/PopZlView.ts

"use strict";
// 一建招揽
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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var CConst_1 = require("../../consts/CConst");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopZlView = /** @class */ (function (_super) {
    __extends(PopZlView, _super);
    function PopZlView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numLb = null;
        _this.btnClose = null;
        _this.btnVideo = null;
        _this.btnOk = null;
        // LIFE-CYCLE CALLBACKS:
        _this.mId = 0;
        return _this;
        // update (dt) {}
    }
    PopZlView.prototype.onLoad = function () {
    };
    PopZlView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        EventDispath_1.default.on(this.btnVideo, this.onVideo, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
    };
    PopZlView.prototype.startShow = function () {
        this.numLb.string = "" + ConfigManager_1.default.getPropById(CConst_1.propType.wall, PlayerModel_1.default.getUIConfig().walllv).add_num;
    };
    PopZlView.prototype.onClickHandle = function () {
        //升级围墙
        UIMananger_1.default.showPanel(UIType_1.default.LvUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, 3);
        this.onCloseHandle();
    };
    PopZlView.prototype.onVideo = function () {
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video1);
    };
    PopZlView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.ONE_SOLICIT);
        this.onVideoClose();
    };
    PopZlView.prototype.onVideoClose = function () {
        _super.prototype.close1.call(this);
    };
    PopZlView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Label)
    ], PopZlView.prototype, "numLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopZlView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopZlView.prototype, "btnVideo", void 0);
    __decorate([
        property(cc.Node)
    ], PopZlView.prototype, "btnOk", void 0);
    PopZlView = __decorate([
        ccclass
    ], PopZlView);
    return PopZlView;
}(BasePanel_1.default));
exports.default = PopZlView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3BvcFZpZXcvUG9wWmxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxvRUFBK0Q7QUFDL0QsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDZEQUF3RDtBQUN4RCw4Q0FBK0M7QUFDL0MsOENBQXlDO0FBQ3pDLDhDQUF5QztBQUN6Qyx1REFBa0Q7QUFDbEQsNkRBQXdEO0FBRWxELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFTO0lBQWhEO1FBQUEscUVBcURDO1FBbERHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsd0JBQXdCO1FBQ3hCLFNBQUcsR0FBRyxDQUFDLENBQUM7O1FBdUNSLGlCQUFpQjtJQUNyQixDQUFDO0lBdENHLDBCQUFNLEdBQU47SUFFQSxDQUFDO0lBRVMsNEJBQVEsR0FBbEI7UUFDSSxPQUFPO1FBQ1Asc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkQsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLHVCQUFhLENBQUMsV0FBVyxDQUFDLGlCQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2hILENBQUM7SUFDRCxpQ0FBYSxHQUFiO1FBQ0ksTUFBTTtRQUNOLG9CQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsOEJBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwyQkFBTyxHQUFQO1FBQ0ksb0JBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELCtCQUFXLEdBQVg7UUFDSSxzQkFBWSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxnQ0FBWSxHQUFaO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBL0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFUTCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBcUQ3QjtJQUFELGdCQUFDO0NBckRELEFBcURDLENBckRzQyxtQkFBUyxHQXFEL0M7a0JBckRvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5LiA5bu65oub5o+9XHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlUGFuZWxcIjtcclxuaW1wb3J0IHsgcHJvcFR5cGUgfSBmcm9tIFwiLi4vLi4vY29uc3RzL0NDb25zdFwiO1xyXG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9jb25zdHMvR2xvYmFsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IFBsYXllck1vZGVsIGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wWmxWaWV3IGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW1MYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5DbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blZpZGVvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuT2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG1JZCA9IDA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g5YWz6Zet6Z2i5p2/XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuQ2xvc2UsIHRoaXMub25DbG9zZUhhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuT2ssIHRoaXMub25DbGlja0hhbmRsZSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuVmlkZW8sIHRoaXMub25WaWRlbywgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5udW1MYi5zdHJpbmcgPSBcIlwiICsgQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS53YWxsLCBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLndhbGxsdikuYWRkX251bTtcclxuICAgIH1cclxuICAgIG9uQ2xpY2tIYW5kbGUoKSB7XHJcbiAgICAgICAgLy/ljYfnuqflm7TloplcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuTHZVcFZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgMyk7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvblZpZGVvKCkge1xyXG4gICAgICAgIFNES01hbmFnZXIuc2hvd0FkKEdsb2JhbC5WSURFT19DT05GSUcudmlkZW8xKTtcclxuICAgIH1cclxuICAgIG9uVmlkZW9CYWNrKCkge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT05FX1NPTElDSVQpO1xyXG4gICAgICAgIHRoaXMub25WaWRlb0Nsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBvblZpZGVvQ2xvc2UoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UxKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
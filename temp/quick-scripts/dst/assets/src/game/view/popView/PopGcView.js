
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/popView/PopGcView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b022w1JUxIp7yjSFfCKzSY', 'PopGcView');
// src/game/view/popView/PopGcView.ts

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
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var Global_1 = require("../../consts/Global");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopGcView = /** @class */ (function (_super) {
    __extends(PopGcView, _super);
    function PopGcView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gcIcon = null;
        _this.descLb = null;
        _this.titleLb = null;
        _this.btnClose = null;
        _this.btnVideo = null;
        _this.btnOk = null;
        // LIFE-CYCLE CALLBACKS:
        _this.mId = 0;
        return _this;
        // update (dt) {}
    }
    PopGcView.prototype.onLoad = function () {
    };
    PopGcView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        EventDispath_1.default.on(this.btnVideo, this.onVideo, this);
    };
    PopGcView.prototype.startShow = function () {
        var _this = this;
        this.mId = this.inData[0];
        var cropCfg = ConfigManager_1.default.getCropById(this.mId);
        this.titleLb.string = cropCfg.name + "高产";
        this.descLb.string = "人品大爆发，" + cropCfg.name + "产量飙升，可收获";
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mId), function (res) {
            _this.gcIcon.spriteFrame = res;
        });
    };
    PopGcView.prototype.onClickHandle = function () {
        EventDispath_1.default.send(EventType_1.EventType.CROP_GC, 1);
        this.onCloseHandle();
    };
    PopGcView.prototype.onVideo = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video12);
    };
    PopGcView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.CROP_GC, 5);
        this.onVideoClose();
    };
    PopGcView.prototype.onVideoClose = function () {
        _super.prototype.close1.call(this);
    };
    PopGcView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Sprite)
    ], PopGcView.prototype, "gcIcon", void 0);
    __decorate([
        property(cc.Label)
    ], PopGcView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Label)
    ], PopGcView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Node)
    ], PopGcView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopGcView.prototype, "btnVideo", void 0);
    __decorate([
        property(cc.Node)
    ], PopGcView.prototype, "btnOk", void 0);
    PopGcView = __decorate([
        ccclass
    ], PopGcView);
    return PopGcView;
}(BasePanel_1.default));
exports.default = PopGcView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3BvcFZpZXcvUG9wR2NWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDREQUF1RDtBQUN2RCw2REFBd0Q7QUFDeEQsOENBQXlDO0FBQ3pDLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQTZEQztRQTNERyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0Qix3QkFBd0I7UUFDeEIsU0FBRyxHQUFHLENBQUMsQ0FBQzs7UUEyQ1IsaUJBQWlCO0lBQ3JCLENBQUM7SUExQ0csMEJBQU0sR0FBTjtJQUVBLENBQUM7SUFFUyw0QkFBUSxHQUFsQjtRQUNJLE9BQU87UUFDUCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksT0FBTyxHQUFHLHVCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDMUQsaUJBQU8sQ0FBQyxlQUFlLENBQUMsb0JBQW9CLElBQUcsS0FBRyxJQUFJLENBQUMsR0FBSyxDQUFBLEVBQUUsVUFBQyxHQUFHO1lBQzlELEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxpQ0FBYSxHQUFiO1FBQ0ksc0JBQVksQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwyQkFBTyxHQUFQO1FBQ0ksc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVFLG9CQUFVLENBQUMsTUFBTSxDQUFDLGdCQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0ksc0JBQVksQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxzQkFBWSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELGdDQUFZLEdBQVo7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUNJLGlCQUFNLEtBQUssV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUF4REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFiTCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBNkQ3QjtJQUFELGdCQUFDO0NBN0RELEFBNkRDLENBN0RzQyxtQkFBUyxHQTZEL0M7a0JBN0RvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlUGFuZWxcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgQ29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wR2NWaWV3IGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBnY0ljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkZXNjTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXRsZUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuVmlkZW86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5PazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgbUlkID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDlhbPpl63pnaLmnb9cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5DbG9zZSwgdGhpcy5vbkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5PaywgdGhpcy5vbkNsaWNrSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5WaWRlbywgdGhpcy5vblZpZGVvLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tSWQgPSB0aGlzLmluRGF0YVswXTtcclxuICAgICAgICBsZXQgY3JvcENmZyA9IENvbmZpZ01hbmFnZXIuZ2V0Q3JvcEJ5SWQodGhpcy5tSWQpO1xyXG4gICAgICAgIHRoaXMudGl0bGVMYi5zdHJpbmcgPSBjcm9wQ2ZnLm5hbWUgKyBcIumrmOS6p1wiO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnN0cmluZyA9IFwi5Lq65ZOB5aSn54iG5Y+R77yMXCIgKyBjcm9wQ2ZnLm5hbWUgKyBcIuS6p+mHj+mjmeWNh++8jOWPr+aUtuiOt1wiO1xyXG4gICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jcm9wL2ljb24vXCIgKyBgJHt0aGlzLm1JZH1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2NJY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25DbGlja0hhbmRsZSgpIHtcclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuQ1JPUF9HQywgMSk7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvblZpZGVvKCkge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvMTIpO1xyXG4gICAgfVxyXG4gICAgb25WaWRlb0JhY2soKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25WaWRlb0JhY2ssIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5DUk9QX0dDLCA1KTtcclxuICAgICAgICB0aGlzLm9uVmlkZW9DbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgb25WaWRlb0Nsb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlMSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
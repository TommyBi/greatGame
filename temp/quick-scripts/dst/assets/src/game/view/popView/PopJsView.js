
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/popView/PopJsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41166ajy/tBl6Braq02VYUl', 'PopJsView');
// src/game/view/popView/PopJsView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var CConst_1 = require("../../consts/CConst");
var Global_1 = require("../../consts/Global");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//全体加速
var PopJsView = /** @class */ (function (_super) {
    __extends(PopJsView, _super);
    function PopJsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.btnVideo = null;
        _this.btnOk = null;
        _this.numLb = null;
        return _this;
        // update (dt) {}
    }
    PopJsView.prototype.onLoad = function () {
    };
    PopJsView.prototype.onEnable = function () {
        // 关闭面板
        EventDispath_1.default.on(this.btnClose, this.onCloseHandle, this);
        EventDispath_1.default.on(this.btnOk, this.onClickHandle, this);
        EventDispath_1.default.on(this.btnVideo, this.onVideo, this);
    };
    PopJsView.prototype.startShow = function () {
        var cfg = ConfigManager_1.default.getPropById(CConst_1.propType.pipe, PlayerModel_1.default.getUIConfig().pipelv);
        this.numLb.string = cfg.add_num + "分钟";
    };
    PopJsView.prototype.onClickHandle = function () {
        //升级水管
        UIMananger_1.default.showPanel(UIType_1.default.LvUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, 3);
        this.onCloseHandle();
    };
    PopJsView.prototype.onVideo = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video14);
    };
    PopJsView.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.CROP_ADD_SPEED);
        this.onVideoClose();
    };
    PopJsView.prototype.onVideoClose = function () {
        _super.prototype.close1.call(this);
    };
    PopJsView.prototype.onCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], PopJsView.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopJsView.prototype, "btnVideo", void 0);
    __decorate([
        property(cc.Node)
    ], PopJsView.prototype, "btnOk", void 0);
    __decorate([
        property(cc.Label)
    ], PopJsView.prototype, "numLb", void 0);
    PopJsView = __decorate([
        ccclass
    ], PopJsView);
    return PopJsView;
}(BasePanel_1.default));
exports.default = PopJsView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3BvcFZpZXcvUG9wSnNWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUErRDtBQUMvRCw4RUFBMEU7QUFDMUUsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFFakUsNkRBQXdEO0FBQ3hELDhDQUErQztBQUMvQyw4Q0FBeUM7QUFDekMsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFFbEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsTUFBTTtBQUVOO0lBQXVDLDZCQUFTO0lBQWhEO1FBQUEscUVBaURDO1FBL0NHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBYSxJQUFJLENBQUM7O1FBd0N2QixpQkFBaUI7SUFDckIsQ0FBQztJQXRDRywwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVTLDRCQUFRLEdBQWxCO1FBQ0ksT0FBTztRQUNQLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksSUFBSSxHQUFHLEdBQUcsdUJBQWEsQ0FBQyxXQUFXLENBQUMsaUJBQVEsQ0FBQyxJQUFJLEVBQUUscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtJQUMxQyxDQUFDO0lBQ0QsaUNBQWEsR0FBYjtRQUNJLE1BQU07UUFDTixvQkFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDhCQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsMkJBQU8sR0FBUDtRQUNJLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsK0JBQVcsR0FBWDtRQUNJLHNCQUFZLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekUsc0JBQVksQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELGdDQUFZLEdBQVo7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaUNBQWEsR0FBYjtRQUNJLGlCQUFNLEtBQUssV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQVJOLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FpRDdCO0lBQUQsZ0JBQUM7Q0FqREQsQUFpREMsQ0FqRHNDLG1CQUFTLEdBaUQvQztrQkFqRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCB7IHByb3BUeXBlIH0gZnJvbSBcIi4uLy4uL2NvbnN0cy9DQ29uc3RcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLy/lhajkvZPliqDpgJ9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wSnNWaWV3IGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5WaWRlbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9rOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG51bUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOWFs+mXremdouadv1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bkNsb3NlLCB0aGlzLm9uQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bk9rLCB0aGlzLm9uQ2xpY2tIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0blZpZGVvLCB0aGlzLm9uVmlkZW8sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2hvdygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2ZnID0gQ29uZmlnTWFuYWdlci5nZXRQcm9wQnlJZChwcm9wVHlwZS5waXBlLCBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLnBpcGVsdik7XHJcbiAgICAgICAgdGhpcy5udW1MYi5zdHJpbmcgPSBjZmcuYWRkX251bSArIFwi5YiG6ZKfXCJcclxuICAgIH1cclxuICAgIG9uQ2xpY2tIYW5kbGUoKSB7XHJcbiAgICAgICAgLy/ljYfnuqfmsLTnrqFcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuTHZVcFZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgMyk7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvblZpZGVvKCkge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvMTQpO1xyXG4gICAgfVxyXG4gICAgb25WaWRlb0JhY2soKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25WaWRlb0JhY2ssIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5DUk9QX0FERF9TUEVFRCk7XHJcbiAgICAgICAgdGhpcy5vblZpZGVvQ2xvc2UoKTtcclxuICAgIH1cclxuICAgIG9uVmlkZW9DbG9zZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZTEoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
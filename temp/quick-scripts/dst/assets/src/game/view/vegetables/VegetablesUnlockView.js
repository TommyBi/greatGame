
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/vegetables/VegetablesUnlockView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bea1rZ7WNBkYAOAcZsSJ17', 'VegetablesUnlockView');
// src/game/view/vegetables/VegetablesUnlockView.ts

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
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 显示解锁作物界面
 * 调用示例：UIMananger.showPanel(UIType.VegetablesUnlockView, UIEffectType.SCALE, 2);// 2为作物id
 */
var VegetablesUnlockView = /** @class */ (function (_super) {
    __extends(VegetablesUnlockView, _super);
    function VegetablesUnlockView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_video = null;
        _this.titleLb = null;
        _this.nameLb = null;
        _this.descLb = null;
        _this.cropDescLb = null;
        _this.uImgCrop = null;
        _this.mId = -1;
        return _this;
    }
    VegetablesUnlockView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_video, this.onVideo, this);
    };
    VegetablesUnlockView.prototype.onDisable = function () {
    };
    VegetablesUnlockView.prototype.startShow = function () {
        this.mId = this.inData[0];
        this.mCrop = ConfigManager_1.default.getCropById(this.mId);
        this.initUI();
    };
    VegetablesUnlockView.prototype.initUI = function () {
        var _this = this;
        this.nameLb.string = this.mCrop.name;
        this.descLb.string = "\u89E3\u9501\u540E\u5C31\u53EF\u4EE5\u79CD\u690D" + this.mCrop.name + "\u5566";
        this.cropDescLb.string = "    " + this.mCrop.desc;
        this.titleLb.string = "\u89E3\u9501" + this.mCrop.name;
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.mId), function (res) {
            _this.uImgCrop.spriteFrame = res;
        });
    };
    VegetablesUnlockView.prototype.onVideo = function () {
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        SDKManager_1.default.showAd(Global_1.default.VIDEO_CONFIG.video11);
    };
    VegetablesUnlockView.prototype.onVideoBack = function () {
        PlayerModel_1.default.setNewCrop(this.mId);
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.VEGETABLES_UPDATE);
        MkUtils_1.default.alertTips(this.mCrop.name + "\u5DF2\u89E3\u9501\uFF0C\u5FEB\u53BB\u79CD\u690D\u5427");
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    VegetablesUnlockView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], VegetablesUnlockView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesUnlockView.prototype, "btn_video", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesUnlockView.prototype, "titleLb", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesUnlockView.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesUnlockView.prototype, "descLb", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesUnlockView.prototype, "cropDescLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], VegetablesUnlockView.prototype, "uImgCrop", void 0);
    VegetablesUnlockView = __decorate([
        ccclass
    ], VegetablesUnlockView);
    return VegetablesUnlockView;
}(BasePanel_1.default));
exports.default = VegetablesUnlockView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3ZlZ2V0YWJsZXMvVmVnZXRhYmxlc1VubG9ja1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNERBQXVEO0FBQ3ZELDZEQUF3RDtBQUV4RCw4Q0FBeUM7QUFDekMsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7O0dBR0c7QUFFSDtJQUFrRCx3Q0FBUztJQUEzRDtRQUFBLHFFQTJEQztRQXhERyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixTQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBMENiLENBQUM7SUF4Q0csdUNBQVEsR0FBUjtRQUNJLEtBQUs7UUFDTCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELHdDQUFTLEdBQVQ7SUFDQSxDQUFDO0lBRUQsd0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELHFDQUFNLEdBQU47UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLHFEQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFHLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGlCQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBTSxDQUFDO1FBQzdDLGlCQUFPLENBQUMsZUFBZSxDQUFDLG9CQUFvQixJQUFHLEtBQUcsSUFBSSxDQUFDLEdBQUssQ0FBQSxFQUFFLFVBQUMsR0FBRztZQUM5RCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsc0NBQU8sR0FBUDtRQUNJLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsMENBQVcsR0FBWDtRQUNJLHFCQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxzQkFBWSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQyxpQkFBTyxDQUFDLFNBQVMsQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksMkRBQVcsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxjQUFjO0lBQ2QsK0NBQWdCLEdBQWhCO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7SUFDbEIsQ0FBQztJQXZERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNPO0lBZlYsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0EyRHhDO0lBQUQsMkJBQUM7Q0EzREQsQUEyREMsQ0EzRGlELG1CQUFTLEdBMkQxRDtrQkEzRG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCB7IGNyb3BfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbnN0cy9DQ29uc3RcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBDb25maWdNYW5hZ2VyIGZyb20gXCIuLi8uLi9tYW5hZ2VyL0NvbmZpZ01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog5pi+56S66Kej6ZSB5L2c54mp55WM6Z2iXHJcbiAqIOiwg+eUqOekuuS+i++8mlVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5WZWdldGFibGVzVW5sb2NrVmlldywgVUlFZmZlY3RUeXBlLlNDQUxFLCAyKTsvLyAy5Li65L2c54mpaWRcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlZ2V0YWJsZXNVbmxvY2tWaWV3IGV4dGVuZHMgQmFzZVBhbmVsIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9jbG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl92aWRlbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aXRsZUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY3JvcERlc2NMYjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHVJbWdDcm9wOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIG1JZCA9IC0xO1xyXG4gICAgbUNyb3A6IGNyb3BfY29uZmlnO1xyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g6YCA5Ye6XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2Nsb3NlLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fdmlkZW8sIHRoaXMub25WaWRlbywgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG4gICAgICAgIHRoaXMubUlkID0gdGhpcy5pbkRhdGFbMF07XHJcbiAgICAgICAgdGhpcy5tQ3JvcCA9IENvbmZpZ01hbmFnZXIuZ2V0Q3JvcEJ5SWQodGhpcy5tSWQpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IHRoaXMubUNyb3AubmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NMYi5zdHJpbmcgPSBg6Kej6ZSB5ZCO5bCx5Y+v5Lul56eN5qSNJHt0aGlzLm1Dcm9wLm5hbWV95ZWmYDtcclxuICAgICAgICB0aGlzLmNyb3BEZXNjTGIuc3RyaW5nID0gXCIgICAgXCIgKyB0aGlzLm1Dcm9wLmRlc2M7XHJcbiAgICAgICAgdGhpcy50aXRsZUxiLnN0cmluZyA9IGDop6PplIEke3RoaXMubUNyb3AubmFtZX1gO1xyXG4gICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jcm9wL2ljb24vXCIgKyBgJHt0aGlzLm1JZH1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudUltZ0Nyb3Auc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblZpZGVvKCkge1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvMTEpO1xyXG4gICAgfVxyXG4gICAgb25WaWRlb0JhY2soKSB7XHJcbiAgICAgICAgUGxheWVyTW9kZWwuc2V0TmV3Q3JvcCh0aGlzLm1JZCk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25WaWRlb0JhY2ssIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5WRUdFVEFCTEVTX1VQREFURSk7XHJcbiAgICAgICAgTUtVdGlscy5hbGVydFRpcHMoYCR7dGhpcy5tQ3JvcC5uYW1lfeW3suino+mUge+8jOW/q+WOu+enjeakjeWQp2ApXHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOS7heeUqOS6juWFs+mXreaTjeS9nCAqL1xyXG4gICAgb25CdG5DbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
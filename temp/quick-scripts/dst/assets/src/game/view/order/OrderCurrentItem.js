
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/OrderCurrentItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c537P94mlIBKQiMrqG556X', 'OrderCurrentItem');
// src/game/view/order/OrderCurrentItem.ts

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
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OrderCurrentItem = /** @class */ (function (_super) {
    __extends(OrderCurrentItem, _super);
    function OrderCurrentItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLb = null;
        _this.proLb = null;
        _this.icon = null;
        _this.ywcTips = null;
        _this.btn_go = null;
        _this.pro = null;
        return _this;
    }
    // onLoad () {}
    OrderCurrentItem.prototype.start = function () {
    };
    OrderCurrentItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    OrderCurrentItem.prototype.initUI = function () {
        var _this = this;
        if (this.data.cropId == 100) {
            this.nameLb.string = "招待顾客";
        }
        else {
            var base = ConfigManager_1.default.getCropById(this.data.cropId);
            this.nameLb.string = base.name;
        }
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.data.cropId), function (res) {
            _this.icon.spriteFrame = res;
        });
        this.pro.progress = this.data.num / this.data.target;
        if (this.data.num >= this.data.target) {
            this.ywcTips.active = true;
            this.proLb.string = this.data.target + "/" + this.data.target;
        }
        else {
            this.proLb.string = this.data.num + "/" + this.data.target;
            this.btn_go.active = true;
        }
    };
    OrderCurrentItem.prototype.onGo = function () {
        EventDispath_1.default.send(EventType_1.EventType.ORDER_CLOSE);
        EventDispath_1.default.send(EventType_1.EventType.ORDER_CURRENT_CLOSE);
        if (this.data.cropId == 100) {
            UIMananger_1.default.showPanel(UIType_1.default.zhaoDaiView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data);
        }
        else {
            if (PlayerModel_1.default.checkCropUnlock(this.data.cropId)) {
                UIMananger_1.default.showPanel(UIType_1.default.getCropView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data);
            }
            else {
                UIMananger_1.default.showPanel(UIType_1.default.VegetablesUnlockView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data.cropId);
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], OrderCurrentItem.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], OrderCurrentItem.prototype, "proLb", void 0);
    __decorate([
        property(cc.Sprite)
    ], OrderCurrentItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], OrderCurrentItem.prototype, "ywcTips", void 0);
    __decorate([
        property(cc.Node)
    ], OrderCurrentItem.prototype, "btn_go", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], OrderCurrentItem.prototype, "pro", void 0);
    OrderCurrentItem = __decorate([
        ccclass
    ], OrderCurrentItem);
    return OrderCurrentItem;
}(AItemRenerer_1.default));
exports.default = OrderCurrentItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL09yZGVyQ3VycmVudEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBRWpFLDREQUF1RDtBQUV2RCw4Q0FBeUM7QUFDekMsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUN4RCxxREFBaUQ7QUFFM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBOEMsb0NBQXFCO0lBQW5FO1FBQUEscUVBNERDO1FBeERHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixTQUFHLEdBQW1CLElBQUksQ0FBQzs7SUE4Qy9CLENBQUM7SUE1Q0csZUFBZTtJQUVmLGdDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRVMsc0NBQVcsR0FBckI7UUFDSSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQUEsaUJBa0JDO1FBakJHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUMvQjthQUFNO1lBQ0gsSUFBSSxJQUFJLEdBQUcsdUJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElB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IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQgQUl0ZW1SZW5kZXJlciBmcm9tIFwiLi4vdGFzay9BSXRlbVJlbmVyZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyQ3VycmVudEl0ZW0gZXh0ZW5kcyBBSXRlbVJlbmRlcmVyPHN0cmluZz4ge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBuYW1lTGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb0xiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgeXdjVGlwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9nbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm86IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIGluaXRVSSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNyb3BJZCA9PSAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTGIuc3RyaW5nID0gXCLmi5vlvoXpob7lrqJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYmFzZSA9IENvbmZpZ01hbmFnZXIuZ2V0Q3JvcEJ5SWQodGhpcy5kYXRhLmNyb3BJZCk7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IGJhc2UubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2Nyb3AvaWNvbi9cIiArIGAke3RoaXMuZGF0YS5jcm9wSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm8ucHJvZ3Jlc3MgPSB0aGlzLmRhdGEubnVtIC8gdGhpcy5kYXRhLnRhcmdldDtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLm51bSA+PSB0aGlzLmRhdGEudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueXdjVGlwcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnByb0xiLnN0cmluZyA9IHRoaXMuZGF0YS50YXJnZXQgKyBcIi9cIiArIHRoaXMuZGF0YS50YXJnZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9MYi5zdHJpbmcgPSB0aGlzLmRhdGEubnVtICsgXCIvXCIgKyB0aGlzLmRhdGEudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLmJ0bl9nby5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uR28oKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLk9SREVSX0NMT1NFKVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5PUkRFUl9DVVJSRU5UX0NMT1NFKVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY3JvcElkID09IDEwMCkge1xyXG4gICAgICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuemhhb0RhaVZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgdGhpcy5kYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoUGxheWVyTW9kZWwuY2hlY2tDcm9wVW5sb2NrKHRoaXMuZGF0YS5jcm9wSWQpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLmdldENyb3BWaWV3LCBudWxsLCBudWxsLCBVSUVmZmVjdFR5cGUuU0NBTEUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuVmVnZXRhYmxlc1VubG9ja1ZpZXcsIG51bGwsIG51bGwsIFVJRWZmZWN0VHlwZS5TQ0FMRSwgdGhpcy5kYXRhLmNyb3BJZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
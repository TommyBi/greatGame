
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/lvUp/LvUpItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '455dbl4vxlIopwZwmYneyhu', 'LvUpItem');
// src/game/view/lvUp/LvUpItem.ts

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
var PopView1_1 = require("../popView/PopView1");
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/** 单个元素的详细条目 */
var LvUpItem = /** @class */ (function (_super) {
    __extends(LvUpItem, _super);
    function LvUpItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null; // 物品图标
        _this.lvNode = null;
        _this.btn_lvUp = null;
        _this.btn_build = null;
        _this.maxLv = null; // 是否最高级
        _this.addLb = null; //加成描述
        _this.nameLb = null;
        _this.lvLb = null;
        return _this;
    }
    LvUpItem.prototype.onLoad = function () {
    };
    LvUpItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    LvUpItem.prototype.initUI = function () {
        var _this = this;
        this.btn_build.active = false;
        this.btn_lvUp.active = false;
        this.maxLv.active = false;
        switch (this.data.tabIndex) {
            case 1:
                MkUtils_1.default.loadSpriteFrame("texture/prop/field/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
            case 2:
                MkUtils_1.default.loadSpriteFrame("texture/prop/shelves/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
            case 3:
                MkUtils_1.default.loadSpriteFrame("texture/prop/cashier/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
            case 4:
                MkUtils_1.default.loadSpriteFrame("texture/prop/pipe/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
            case 5:
                MkUtils_1.default.loadSpriteFrame("texture/prop/wall/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
            case 6:
                MkUtils_1.default.loadSpriteFrame("texture/prop/road/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
            case 7:
                MkUtils_1.default.loadSpriteFrame("texture/prop/scarecrow/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
            case 8:
                MkUtils_1.default.loadSpriteFrame("texture/prop/warehouse/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
            case 9:
                MkUtils_1.default.loadSpriteFrame("texture/prop/fence/icon/" + ("0" + this.data["level"]), function (res) {
                    _this.icon.spriteFrame = res;
                });
                break;
        }
        this.nameLb.string = "" + this.data.name;
        if (this.data.level == 0) {
            this.lvLb.node.active = false;
            this.lvNode.active = false;
            this.btn_build.active = true;
            this.addLb.string = "未扩建";
        }
        else {
            this.addLb.string = this.data.addDesc;
            if (this.data.isMaxLv) {
                this.maxLv.active = true;
            }
            else {
                this.btn_lvUp.active = true;
            }
            this.lvLb.node.active = true;
            this.lvNode.active = true;
            this.lvLb.string = this.data.level + "级";
        }
        // this.isLock = this.data.isLock;
        // this.uImgLock.enabled = this.isLock ? true : false;
        // this.uImgMask.enabled = this.uImgLock.enabled;
    };
    LvUpItem.prototype.onBuild = function () {
        var _this = this;
        // MKUtils.alertTips("扩建")
        if (this.data.tabIndex == 1) {
            EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onBuildBack, this);
            // let id = this.config.id + "01"
            // SDKManager.getUnlockConfig(7, Number(id));
            UIMananger_1.default.showPanel(UIType_1.default.popView1, null, function () {
                EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, _this.onBuildBack, _this);
            }, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.FIELD);
        }
        else if (this.data.tabIndex == 2) {
            EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onBuildBack, this);
            // let id = this.config.id + "01"
            // SDKManager.getUnlockConfig(7, Number(id));
            UIMananger_1.default.showPanel(UIType_1.default.popView1, null, function () {
                EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, _this.onBuildBack, _this);
            }, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.SHELVE);
        }
    };
    LvUpItem.prototype.onLvUp = function () {
        // MKUtils.alertTips("升级")
        UIMananger_1.default.showPanel(UIType_1.default.LvUpPopView, null, function () {
        }, UIEffectManager_1.UIEffectType.SCALE, this.data);
        // EventDispath.addEventListener(EventType.PROP_INFO, this.selectBack, this);
    };
    LvUpItem.prototype.onBuildBack = function () {
        if (this.data.tabIndex == 1) {
            EventDispath_1.default.send(EventType_1.EventType.FIELD_BUILD, this.data.index);
        }
        else if (this.data.tabIndex == 2) {
            EventDispath_1.default.send(EventType_1.EventType.SHELVE_BUILD, this.data.index);
        }
        EventDispath_1.default.send(EventType_1.EventType.LVUP_UPDATE);
        // EventDispath.removeByEvent(EventType.PROP_INFO, this.selectBack, this);
    };
    LvUpItem.prototype.onDestroy = function () {
        EventDispath_1.default.removeEventListeners(this);
    };
    __decorate([
        property(cc.Sprite)
    ], LvUpItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpItem.prototype, "lvNode", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpItem.prototype, "btn_lvUp", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpItem.prototype, "btn_build", void 0);
    __decorate([
        property(cc.Node)
    ], LvUpItem.prototype, "maxLv", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpItem.prototype, "addLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpItem.prototype, "nameLb", void 0);
    __decorate([
        property(cc.Label)
    ], LvUpItem.prototype, "lvLb", void 0);
    LvUpItem = __decorate([
        ccclass
    ], LvUpItem);
    return LvUpItem;
}(AItemRenerer_1.default));
exports.default = LvUpItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2x2VXAvTHZVcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEYsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDREQUF1RDtBQUN2RCw4Q0FBeUM7QUFFekMsZ0RBQThDO0FBQzlDLHFEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxnQkFBZ0I7QUFFaEI7SUFBc0MsNEJBQXFCO0lBQTNEO1FBQUEscUVBK0lDO1FBNUlHLFVBQUksR0FBYyxJQUFJLENBQUMsQ0FBSyxPQUFPO1FBR25DLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBWSxJQUFJLENBQUMsQ0FBTSxRQUFRO1FBR3BDLFdBQUssR0FBYSxJQUFJLENBQUMsQ0FBSSxNQUFNO1FBRWpDLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFhLElBQUksQ0FBQzs7SUE0SDFCLENBQUM7SUF6SEcseUJBQU0sR0FBTjtJQUNBLENBQUM7SUFDUyw4QkFBVyxHQUFyQjtRQUNJLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELHlCQUFNLEdBQU47UUFBQSxpQkF5RUM7UUF4RUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJ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U2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IHsgUG9wVHlwZSB9IGZyb20gXCIuLi9wb3BWaWV3L1BvcFZpZXcxXCI7XHJcbmltcG9ydCBBSXRlbVJlbmRlcmVyIGZyb20gXCIuLi90YXNrL0FJdGVtUmVuZXJlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKiDljZXkuKrlhYPntKDnmoTor6bnu4bmnaHnm64gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTHZVcEl0ZW0gZXh0ZW5kcyBBSXRlbVJlbmRlcmVyPHN0cmluZz4ge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsOyAgICAgLy8g54mp5ZOB5Zu+5qCHXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsdk5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fbHZVcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bl9idWlsZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1heEx2OiBjYy5Ob2RlID0gbnVsbDsgICAgICAvLyDmmK/lkKbmnIDpq5jnuqdcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhZGRMYjogY2MuTGFiZWwgPSBudWxsOyAgICAvL+WKoOaIkOaPj+i/sFxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZUxiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsdkxiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBkYXRhQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5idG5fYnVpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5fbHZVcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1heEx2LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnRhYkluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL2ZpZWxkL2ljb24vXCIgKyBgMCR7dGhpcy5kYXRhW1wibGV2ZWxcIl19YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL3NoZWx2ZXMvaWNvbi9cIiArIGAwJHt0aGlzLmRhdGFbXCJsZXZlbFwiXX1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL3Byb3AvY2FzaGllci9pY29uL1wiICsgYDAke3RoaXMuZGF0YVtcImxldmVsXCJdfWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvcHJvcC9waXBlL2ljb24vXCIgKyBgMCR7dGhpcy5kYXRhW1wibGV2ZWxcIl19YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL3dhbGwvaWNvbi9cIiArIGAwJHt0aGlzLmRhdGFbXCJsZXZlbFwiXX1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL3Byb3Avcm9hZC9pY29uL1wiICsgYDAke3RoaXMuZGF0YVtcImxldmVsXCJdfWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvcHJvcC9zY2FyZWNyb3cvaWNvbi9cIiArIGAwJHt0aGlzLmRhdGFbXCJsZXZlbFwiXX1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL3Byb3Avd2FyZWhvdXNlL2ljb24vXCIgKyBgMCR7dGhpcy5kYXRhW1wibGV2ZWxcIl19YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL2ZlbmNlL2ljb24vXCIgKyBgMCR7dGhpcy5kYXRhW1wibGV2ZWxcIl19YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmFtZUxiLnN0cmluZyA9IGAke3RoaXMuZGF0YS5uYW1lfWA7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubHZMYi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5idG5fYnVpbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hZGRMYi5zdHJpbmcgPSBcIuacquaJqeW7ulwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGIuc3RyaW5nID0gdGhpcy5kYXRhLmFkZERlc2M7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuaXNNYXhMdikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhMdi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5fbHZVcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubHZMYi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubHZMYi5zdHJpbmcgPSB0aGlzLmRhdGEubGV2ZWwgKyBcIue6p1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5pc0xvY2sgPSB0aGlzLmRhdGEuaXNMb2NrO1xyXG4gICAgICAgIC8vIHRoaXMudUltZ0xvY2suZW5hYmxlZCA9IHRoaXMuaXNMb2NrID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMudUltZ01hc2suZW5hYmxlZCA9IHRoaXMudUltZ0xvY2suZW5hYmxlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CdWlsZCgpIHtcclxuICAgICAgICAvLyBNS1V0aWxzLmFsZXJ0VGlwcyhcIuaJqeW7ulwiKVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEudGFiSW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vbkJ1aWxkQmFjaywgdGhpcyk7XHJcbiAgICAgICAgICAgIC8vIGxldCBpZCA9IHRoaXMuY29uZmlnLmlkICsgXCIwMVwiXHJcbiAgICAgICAgICAgIC8vIFNES01hbmFnZXIuZ2V0VW5sb2NrQ29uZmlnKDcsIE51bWJlcihpZCkpO1xyXG4gICAgICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUucG9wVmlldzEsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uQnVpbGRCYWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgfSwgVUlFZmZlY3RUeXBlLlNDQUxFLCBQb3BUeXBlLkZJRUxEKTtcclxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5kYXRhLnRhYkluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMub25CdWlsZEJhY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAvLyBsZXQgaWQgPSB0aGlzLmNvbmZpZy5pZCArIFwiMDFcIlxyXG4gICAgICAgICAgICAvLyBTREtNYW5hZ2VyLmdldFVubG9ja0NvbmZpZyg3LCBOdW1iZXIoaWQpKTtcclxuICAgICAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnBvcFZpZXcxLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vbkJ1aWxkQmFjaywgdGhpcyk7XHJcbiAgICAgICAgICAgIH0sIFVJRWZmZWN0VHlwZS5TQ0FMRSwgUG9wVHlwZS5TSEVMVkUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkx2VXAoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTUtVdGlscy5hbGVydFRpcHMoXCLljYfnuqdcIilcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUuTHZVcFBvcFZpZXcsIG51bGwsICgpID0+IHtcclxuICAgICAgICB9LCBVSUVmZmVjdFR5cGUuU0NBTEUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgLy8gRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlBST1BfSU5GTywgdGhpcy5zZWxlY3RCYWNrLCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uQnVpbGRCYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEudGFiSW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuRklFTERfQlVJTEQsIHRoaXMuZGF0YS5pbmRleCk7XHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuZGF0YS50YWJJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5TSEVMVkVfQlVJTEQsIHRoaXMuZGF0YS5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5MVlVQX1VQREFURSk7XHJcbiAgICAgICAgLy8gRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlBST1BfSU5GTywgdGhpcy5zZWxlY3RCYWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
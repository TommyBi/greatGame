"use strict";
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
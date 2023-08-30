"use strict";
cc._RF.push(module, '850e3f+WcZFdqzDG55D2eBe', 'VegetablesView');
// src/game/view/vegetables/VegetablesView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 种菜界面
 * TODO:
 * 1、未解锁的图标显示的形式是蒙灰的效果还是加个锁子的效果；
 * 2、种菜界面的文档介绍要求点击解锁的是直接购买，但在详情界面是有已经解锁的蔬菜界面，同时点击详情界面的也可以购买，这里两段文档似乎有些冲突，目前处理方式是都弹详情，在详情中完成购买操作
 */
var VegetablesView = /** @class */ (function (_super) {
    __extends(VegetablesView, _super);
    function VegetablesView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_lvUp = null;
        _this.scroller = null;
        _this.VegetablesItem = null;
        _this.haveCropIds = [];
        return _this;
    }
    VegetablesView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        // 购买成功
        EventDispath_1.default.addEventListener(EventType_1.EventType.CROP_PLANT, this.onBtnCloseHandle, this);
        //土地升级
        EventDispath_1.default.on(this.btn_lvUp, this.onOpenLvUp, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.VEGETABLES_UPDATE, this.initUI, this);
        this.scroller.node.active = false;
        // MKUtils.setNodeDelay(this.node, 0.1, this.initUI.bind(this))
        this.initUI();
    };
    VegetablesView.prototype.onDisable = function () {
    };
    VegetablesView.prototype.on_Show = function (args) {
        // this.initUI();
        // // MKUtils.setNodeDelay(this.node, 0.1, this.initUI.bind(this))
        _super.prototype.on_Show.call(this, args);
    };
    VegetablesView.prototype.start = function () {
        if (PlayerModel_1.default.guideStep >= 0) {
            MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
            });
        }
    };
    VegetablesView.prototype.initUI = function () {
        var _this = this;
        this.scrollerData = [];
        this.scrollerData = ConfigManager_1.default.crop.slice(1);
        // 库存
        this.haveCropIds = PlayerModel_1.default.getUnlockCrop();
        this.haveCropIds.sort(function (a, b) {
            return a - b;
        });
        var hotIndex = 0;
        for (var i = 0; i < this.scrollerData.length; i++) {
            var cfg = this.scrollerData[i];
            var isLock = this.haveCropIds.indexOf(cfg.id) == -1;
            var isOrder = this.checkInOrder(cfg.id);
            var data = { isLock: isLock, isOrder: isOrder };
            if (isOrder)
                hotIndex = i;
            for (var key in data) {
                cfg[key] = data[key];
            }
            // let item = cc.instantiate(this.VegetablesItem);
            // if (item) {
            // if (i == 0) this.guideItem = item;//引导item
            // this.uScrollView.content.addChild(item);
            // }
        }
        this.scroller.refreshData(this.scrollerData);
        this.scroller.scrollToTop();
        MkUtils_1.default.setNodeDelay(this.node, 0.1, function () {
            _this.scroller.node.active = true;
        });
        // if (hotIndex > 12) {
        //     this.scroller.scrollTo(cc.v2(0, 0))
        // }
    };
    //检测是否在订单中
    VegetablesView.prototype.checkInOrder = function (id) {
        if (PlayerModel_1.default.haveOrder()) {
            var orderList = PlayerModel_1.default.getCurrentOrder().cropList;
            var arr = orderList.filter(function (data) {
                return data.cropId == id;
            });
            if (arr.length > 0)
                return true;
        }
        return false;
    };
    VegetablesView.prototype.onOpenLvUp = function () {
        //打开集市管理页面
        UIMananger_1.default.showPanel(UIType_1.default.LvUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, 1);
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    VegetablesView.prototype.onBtnCloseHandle = function () {
        EventDispath_1.default.send(EventType_1.EventType.VEGETABLE_CLOSE);
        _super.prototype.close.call(this);
    };
    VegetablesView.prototype.getGuidePoint = function () {
        var p = this.scroller.getItemByIndex(0).convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    };
    VegetablesView.prototype.getGuidePoint1 = function () {
        var p = this.scroller.getItemByIndex(1).convertToWorldSpaceAR(cc.v2(0, 0));
        return p;
    };
    __decorate([
        property(cc.Node)
    ], VegetablesView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesView.prototype, "btn_lvUp", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], VegetablesView.prototype, "scroller", void 0);
    __decorate([
        property(cc.Prefab)
    ], VegetablesView.prototype, "VegetablesItem", void 0);
    VegetablesView = __decorate([
        ccclass
    ], VegetablesView);
    return VegetablesView;
}(BasePanel_1.default));
exports.default = VegetablesView;

cc._RF.pop();
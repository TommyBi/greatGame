
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/vegetables/VegetablesItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06ca6CIYapGjaktI/341WQD', 'VegetablesItem');
// src/game/view/vegetables/VegetablesItem.ts

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
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VegetablesItem = /** @class */ (function (_super) {
    __extends(VegetablesItem, _super);
    function VegetablesItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn = null;
        _this.orderTips = null;
        _this.uImgCrop = null;
        _this.ulabelName = null;
        _this.uImgLock = null;
        _this.uImgMask = null;
        _this.isLock = true; // 当前item是否未解锁
        return _this;
    }
    VegetablesItem.prototype.onLoad = function () {
        // EventDispath.on(this.node, this.onSelect, this);
        // this.setTouchCallback(this.onSelect, this);
    };
    VegetablesItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    VegetablesItem.prototype.initUI = function () {
        var _this = this;
        this.orderTips.active = false;
        if (this.data.isOrder)
            this.orderTips.active = true;
        MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + this.data["id"]), function (res) {
            _this.uImgCrop.spriteFrame = res;
        });
        this.ulabelName.string = "" + this.data.name;
        this.isLock = this.data.isLock;
        this.btn.active = this.isLock ? false : true;
        this.uImgLock.active = this.isLock ? true : false;
        this.uImgMask.active = this.uImgLock.active;
    };
    // setData(data: crop_config, haveIds: number[]) {
    //     MKUtils.loadSpriteFrame("texture/crop/singleIcon/" + `${data.id}`, (res) => {
    //         this.uImgCrop.spriteFrame = res;
    //     });
    //     this.ulabelName.string = `${data.name}`;
    //     this.ulabelCount.string = `${data.money}`;
    //     this.isLock = haveIds.indexOf(data.id) == -1;
    //     this.uImgLock.enabled = this.isLock ? true : false;
    //     this.uImgMask.enabled = this.uImgLock.enabled;
    //     // 是否是热卖
    //     let lastId = haveIds.length == 0 ? -1 : haveIds[haveIds.length - 1];
    //     let isHot = data.id == lastId;
    //     this.uImgFlag.enabled = isHot;
    //     this.uImgBgHot.enabled = isHot;
    //     this.uImgBg.enabled = !isHot;
    //     this.cropCfg = data;
    // }
    VegetablesItem.prototype.onSelect = function () {
        if (this.isLock) {
            this.onShowInfo();
            return;
        }
        EventDispath_1.default.send(EventType_1.EventType.CROP_PLANT, this.data.id);
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
        }
    };
    /** 查看作物详情 */
    VegetablesItem.prototype.onShowInfo = function () {
        // 显示作物详情
        UIMananger_1.default.showPanel(UIType_1.default.VegetablesUnlockView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.data.id);
    };
    VegetablesItem.prototype.onDestroy = function () {
        EventDispath_1.default.removeEventListeners(this);
    };
    __decorate([
        property(cc.Node)
    ], VegetablesItem.prototype, "btn", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesItem.prototype, "orderTips", void 0);
    __decorate([
        property(cc.Sprite)
    ], VegetablesItem.prototype, "uImgCrop", void 0);
    __decorate([
        property(cc.Label)
    ], VegetablesItem.prototype, "ulabelName", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesItem.prototype, "uImgLock", void 0);
    __decorate([
        property(cc.Node)
    ], VegetablesItem.prototype, "uImgMask", void 0);
    VegetablesItem = __decorate([
        ccclass
    ], VegetablesItem);
    return VegetablesItem;
}(AItemRenerer_1.default));
exports.default = VegetablesItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3ZlZ2V0YWJsZXMvVmVnZXRhYmxlc0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDREQUF1RDtBQUV2RCw4Q0FBeUM7QUFDekMsdURBQWtEO0FBQ2xELHFEQUFpRDtBQUUzQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBcUI7SUFBakU7UUFBQSxxRUEyRkM7UUF0RkcsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBWSxJQUFJLENBQUMsQ0FBUyxjQUFjOztJQXNFbEQsQ0FBQztJQXBFRywrQkFBTSxHQUFOO1FBQ0ksbURBQW1EO1FBQ25ELDhDQUE4QztJQUNsRCxDQUFDO0lBRVMsb0NBQVcsR0FBckI7UUFDSSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQUEsaUJBZ0JDO1FBZEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTlCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXBELGlCQUFPLENBQUMsZUFBZSxDQUFDLG9CQUFvQixJQUFHLEtBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUcsQ0FBQSxFQUFFLFVBQUMsR0FBRztZQUNyRSxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBTSxDQUFDO1FBRTdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFFaEQsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxvRkFBb0Y7SUFDcEYsMkNBQTJDO0lBQzNDLFVBQVU7SUFDViwrQ0FBK0M7SUFDL0MsaURBQWlEO0lBRWpELG9EQUFvRDtJQUNwRCwwREFBMEQ7SUFDMUQscURBQXFEO0lBRXJELGVBQWU7SUFDZiwyRUFBMkU7SUFDM0UscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMsb0NBQW9DO0lBRXBDLDJCQUEyQjtJQUMzQixJQUFJO0lBRUosaUNBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixPQUFPO1NBQ1Y7UUFDRCxzQkFBWSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUkscUJBQVcsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQzVCLHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDNUM7SUFDTCxDQUFDO0lBRUQsYUFBYTtJQUNiLG1DQUFVLEdBQVY7UUFDSSxTQUFTO1FBQ1Qsb0JBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQU0sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDhCQUFZLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELGtDQUFTLEdBQVQ7UUFDSSxzQkFBWSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFyRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ087SUFuQlIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTJGbEM7SUFBRCxxQkFBQztDQTNGRCxBQTJGQyxDQTNGMkMsc0JBQWEsR0EyRnhEO2tCQTNGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCB7IGNyb3BfY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbnN0cy9DQ29uc3RcIjtcclxuaW1wb3J0IFVJVHlwZSBmcm9tIFwiLi4vLi4vY29uc3RzL1VJVHlwZVwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCBBSXRlbVJlbmRlcmVyIGZyb20gXCIuLi90YXNrL0FJdGVtUmVuZXJlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlZ2V0YWJsZXNJdGVtIGV4dGVuZHMgQUl0ZW1SZW5kZXJlcjxzdHJpbmc+IHtcclxuXHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb3JkZXJUaXBzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgdUltZ0Nyb3A6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdWxhYmVsTmFtZTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdUltZ0xvY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdUltZ01hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGlzTG9jazogYm9vbGVhbiA9IHRydWU7ICAgICAgICAgLy8g5b2T5YmNaXRlbeaYr+WQpuacquino+mUgVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBFdmVudERpc3BhdGgub24odGhpcy5ub2RlLCB0aGlzLm9uU2VsZWN0LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLnNldFRvdWNoQ2FsbGJhY2sodGhpcy5vblNlbGVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIGluaXRVSSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vcmRlclRpcHMuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaXNPcmRlcikgdGhpcy5vcmRlclRpcHMuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2Nyb3AvaWNvbi9cIiArIGAke3RoaXMuZGF0YVtcImlkXCJdfWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51SW1nQ3JvcC5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnVsYWJlbE5hbWUuc3RyaW5nID0gYCR7dGhpcy5kYXRhLm5hbWV9YDtcclxuXHJcbiAgICAgICAgdGhpcy5pc0xvY2sgPSB0aGlzLmRhdGEuaXNMb2NrO1xyXG4gICAgICAgIHRoaXMuYnRuLmFjdGl2ZSA9IHRoaXMuaXNMb2NrID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMudUltZ0xvY2suYWN0aXZlID0gdGhpcy5pc0xvY2sgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy51SW1nTWFzay5hY3RpdmUgPSB0aGlzLnVJbWdMb2NrLmFjdGl2ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0RGF0YShkYXRhOiBjcm9wX2NvbmZpZywgaGF2ZUlkczogbnVtYmVyW10pIHtcclxuICAgIC8vICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvY3JvcC9zaW5nbGVJY29uL1wiICsgYCR7ZGF0YS5pZH1gLCAocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudUltZ0Nyb3Auc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgdGhpcy51bGFiZWxOYW1lLnN0cmluZyA9IGAke2RhdGEubmFtZX1gO1xyXG4gICAgLy8gICAgIHRoaXMudWxhYmVsQ291bnQuc3RyaW5nID0gYCR7ZGF0YS5tb25leX1gO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmlzTG9jayA9IGhhdmVJZHMuaW5kZXhPZihkYXRhLmlkKSA9PSAtMTtcclxuICAgIC8vICAgICB0aGlzLnVJbWdMb2NrLmVuYWJsZWQgPSB0aGlzLmlzTG9jayA/IHRydWUgOiBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLnVJbWdNYXNrLmVuYWJsZWQgPSB0aGlzLnVJbWdMb2NrLmVuYWJsZWQ7XHJcblxyXG4gICAgLy8gICAgIC8vIOaYr+WQpuaYr+eDreWNllxyXG4gICAgLy8gICAgIGxldCBsYXN0SWQgPSBoYXZlSWRzLmxlbmd0aCA9PSAwID8gLTEgOiBoYXZlSWRzW2hhdmVJZHMubGVuZ3RoIC0gMV07XHJcbiAgICAvLyAgICAgbGV0IGlzSG90ID0gZGF0YS5pZCA9PSBsYXN0SWQ7XHJcbiAgICAvLyAgICAgdGhpcy51SW1nRmxhZy5lbmFibGVkID0gaXNIb3Q7XHJcbiAgICAvLyAgICAgdGhpcy51SW1nQmdIb3QuZW5hYmxlZCA9IGlzSG90O1xyXG4gICAgLy8gICAgIHRoaXMudUltZ0JnLmVuYWJsZWQgPSAhaXNIb3Q7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuY3JvcENmZyA9IGRhdGE7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25TZWxlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TaG93SW5mbygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5DUk9QX1BMQU5ULCB0aGlzLmRhdGEuaWQpO1xyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5ndWlkZVN0ZXAgPj0gMCkge1xyXG4gICAgICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuR1VJREVfVVBEQVRFKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5p+l55yL5L2c54mp6K+m5oOFICovXHJcbiAgICBvblNob3dJbmZvKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOaYvuekuuS9nOeJqeivpuaDhVxyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5WZWdldGFibGVzVW5sb2NrVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCB0aGlzLmRhdGEuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19
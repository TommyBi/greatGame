
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/vegetables/VegetablesView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3ZlZ2V0YWJsZXMvVmVnZXRhYmxlc1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsOEVBQTBFO0FBQzFFLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDREQUF1RDtBQUN2RCw2REFBd0Q7QUFFeEQsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsaUVBQTREO0FBR3RELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOzs7OztHQUtHO0FBRUg7SUFBNEMsa0NBQVM7SUFBckQ7UUFBQSxxRUEwSEM7UUF2SEcsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBR3hCLGNBQVEsR0FBdUIsSUFBSSxDQUFDO1FBR3BDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGlCQUFXLEdBQUcsRUFBRSxDQUFDOztJQTZHckIsQ0FBQztJQTFHRyxpQ0FBUSxHQUFSO1FBQ0ksS0FBSztRQUNMLHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELE9BQU87UUFDUCxzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixNQUFNO1FBQ04sc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FB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LENBQUM7SUFySEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLDRCQUFrQixDQUFDO29EQUNPO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ2E7SUFYaEIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTBIbEM7SUFBRCxxQkFBQztDQTFIRCxBQTBIQyxDQTFIMkMsbUJBQVMsR0EwSHBEO2tCQTFIb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlUGFuZWxcIjtcclxuaW1wb3J0IHsgY3JvcF9jb25maWcgfSBmcm9tIFwiLi4vLi4vY29uc3RzL0NDb25zdFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQgQVZpcnR1YWxTY3JvbGxWaWV3IGZyb20gXCIuLi90YXNrL0FWaXJ0dWFsU2Nyb2xsVmlld1wiO1xyXG5pbXBvcnQgVmVnZXRhYmxlc0l0ZW0gZnJvbSBcIi4vVmVnZXRhYmxlc0l0ZW1cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog56eN6I+c55WM6Z2iXHJcbiAqIFRPRE86XHJcbiAqIDHjgIHmnKrop6PplIHnmoTlm77moIfmmL7npLrnmoTlvaLlvI/mmK/okpnngbDnmoTmlYjmnpzov5jmmK/liqDkuKrplIHlrZDnmoTmlYjmnpzvvJtcclxuICogMuOAgeenjeiPnOeVjOmdoueahOaWh+aho+S7i+e7jeimgeaxgueCueWHu+ino+mUgeeahOaYr+ebtOaOpei0reS5sO+8jOS9huWcqOivpuaDheeVjOmdouaYr+acieW3sue7j+ino+mUgeeahOiUrOiPnOeVjOmdou+8jOWQjOaXtueCueWHu+ivpuaDheeVjOmdoueahOS5n+WPr+S7pei0reS5sO+8jOi/memHjOS4pOauteaWh+aho+S8vOS5juacieS6m+WGsueqge+8jOebruWJjeWkhOeQhuaWueW8j+aYr+mDveW8ueivpuaDhe+8jOWcqOivpuaDheS4reWujOaIkOi0reS5sOaTjeS9nFxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVnZXRhYmxlc1ZpZXcgZXh0ZW5kcyBCYXNlUGFuZWwge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fbHZVcDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoQVZpcnR1YWxTY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsZXI6IEFWaXJ0dWFsU2Nyb2xsVmlldyA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIFZlZ2V0YWJsZXNJdGVtOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGhhdmVDcm9wSWRzID0gW107XHJcblxyXG4gICAgc2Nyb2xsZXJEYXRhOiBhbnlbXTtcclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICAvLyDotK3kubDmiJDlip9cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuQ1JPUF9QTEFOVCwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuICAgICAgICAvL+Wcn+WcsOWNh+e6p1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9sdlVwLCB0aGlzLm9uT3Blbkx2VXAsIHRoaXMpO1xyXG5cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVkVHRVRBQkxFU19VUERBVEUsIHRoaXMuaW5pdFVJLCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDAuMSwgdGhpcy5pbml0VUkuYmluZCh0aGlzKSlcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG5cclxuICAgIH1cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBvbl9TaG93KGFyZ3M6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuaW5pdFVJKCk7XHJcbiAgICAgICAgLy8gLy8gTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAwLjEsIHRoaXMuaW5pdFVJLmJpbmQodGhpcykpXHJcbiAgICAgICAgc3VwZXIub25fU2hvdyhhcmdzKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuZ3VpZGVTdGVwID49IDApIHtcclxuICAgICAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAwLjUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5HVUlERV9VUERBVEUpXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0VUkoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlckRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyRGF0YSA9IENvbmZpZ01hbmFnZXIuY3JvcC5zbGljZSgxKTtcclxuICAgICAgICAvLyDlupPlrZhcclxuICAgICAgICB0aGlzLmhhdmVDcm9wSWRzID0gUGxheWVyTW9kZWwuZ2V0VW5sb2NrQ3JvcCgpO1xyXG4gICAgICAgIHRoaXMuaGF2ZUNyb3BJZHMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYSAtIGI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgaG90SW5kZXggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Nyb2xsZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjZmcgPSB0aGlzLnNjcm9sbGVyRGF0YVtpXTtcclxuICAgICAgICAgICAgbGV0IGlzTG9jayA9IHRoaXMuaGF2ZUNyb3BJZHMuaW5kZXhPZihjZmcuaWQpID09IC0xO1xyXG4gICAgICAgICAgICBsZXQgaXNPcmRlciA9IHRoaXMuY2hlY2tJbk9yZGVyKGNmZy5pZCk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0geyBpc0xvY2s6IGlzTG9jaywgaXNPcmRlcjogaXNPcmRlciB9O1xyXG4gICAgICAgICAgICBpZiAoaXNPcmRlcikgaG90SW5kZXggPSBpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2ZnW2tleV0gPSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlZlZ2V0YWJsZXNJdGVtKTtcclxuICAgICAgICAgICAgLy8gaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgLy8gaWYgKGkgPT0gMCkgdGhpcy5ndWlkZUl0ZW0gPSBpdGVtOy8v5byV5a+8aXRlbVxyXG4gICAgICAgICAgICAvLyB0aGlzLnVTY3JvbGxWaWV3LmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnJlZnJlc2hEYXRhKHRoaXMuc2Nyb2xsZXJEYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5zY3JvbGxUb1RvcCgpO1xyXG4gICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgMC4xLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gaWYgKGhvdEluZGV4ID4gMTIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY3JvbGxlci5zY3JvbGxUbyhjYy52MigwLCAwKSlcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG4gICAgLy/mo4DmtYvmmK/lkKblnKjorqLljZXkuK1cclxuICAgIGNoZWNrSW5PcmRlcihpZCkge1xyXG4gICAgICAgIGlmIChQbGF5ZXJNb2RlbC5oYXZlT3JkZXIoKSkge1xyXG4gICAgICAgICAgICBsZXQgb3JkZXJMaXN0ID0gUGxheWVyTW9kZWwuZ2V0Q3VycmVudE9yZGVyKCkuY3JvcExpc3Q7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBvcmRlckxpc3QuZmlsdGVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5jcm9wSWQgPT0gaWQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuTHZVcCgpIHtcclxuICAgICAgICAvL+aJk+W8gOmbhuW4gueuoeeQhumhtemdolxyXG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1BhbmVsKFVJVHlwZS5MdlVwVmlldywgbnVsbCwgbnVsbCwgVUlFZmZlY3RUeXBlLlNDQUxFLCAxKTtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqIOS7heeUqOS6juWFs+mXreaTjeS9nCAqL1xyXG4gICAgb25CdG5DbG9zZUhhbmRsZSgpIHtcclxuICAgICAgICBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVkVHRVRBQkxFX0NMT1NFKVxyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3VpZGVQb2ludCgpIHtcclxuICAgICAgICBsZXQgcCA9IHRoaXMuc2Nyb2xsZXIuZ2V0SXRlbUJ5SW5kZXgoMCkuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIGdldEd1aWRlUG9pbnQxKCkge1xyXG4gICAgICAgIGxldCBwID0gdGhpcy5zY3JvbGxlci5nZXRJdGVtQnlJbmRleCgxKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
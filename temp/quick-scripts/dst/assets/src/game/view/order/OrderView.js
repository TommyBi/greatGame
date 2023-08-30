
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/OrderView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '282e7LgYwpLrZ61EJ4WG7KY', 'OrderView');
// src/game/view/order/OrderView.ts

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
var Utils_1 = require("../../../framework/tools/Utils");
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var ConfigManager_1 = require("../../manager/ConfigManager");
var PopView1_1 = require("../popView/PopView1");
var AVirtualScrollView_1 = require("../task/AVirtualScrollView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 订单中心
 * TODO:
 */
var OrderView = /** @class */ (function (_super) {
    __extends(OrderView, _super);
    function OrderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_quality = null;
        _this.btn_update = null;
        _this.xfzsLb = null;
        _this.scroller = null;
        _this.scrollerData = [];
        return _this;
    }
    OrderView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_quality, this.onQuality, this);
        EventDispath_1.default.on(this.btn_update, this.onUpdate, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_CLOSE, this.onBtnCloseHandle, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_UPDATE_INDEX, this.updateData, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_UPDATE_LIST, this.completeUpate, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_GIVE_UP, this.onGiveUp, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.ORDER_UNLOCK, this.onUnlock, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.GUIDE_COMPLETE, this.guidComplete, this);
        var list = PlayerModel_1.default.getOrderList();
        this.scrollerData = list;
        this.initUI();
    };
    OrderView.prototype.onLoad = function () {
    };
    OrderView.prototype.start = function () {
    };
    OrderView.prototype.on_Show = function (args) {
        if (PlayerModel_1.default.guideStep >= 0) {
            this.scroller.vertical = false;
            MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
            });
        }
        // MKUtils.setNodeDelay(this.node, 0.1, this.initUI.bind(this))
        // this.initUI();
        _super.prototype.on_Show.call(this, args);
    };
    OrderView.prototype.startShow = function () {
    };
    //放弃订单
    OrderView.prototype.onGiveUp = function () {
        PlayerModel_1.default.orderVideoNum = 0;
        // this.scrollerData[0] = ConfigManager.getOrder();
        this.initUI();
    };
    //订单奖励领取后更新列表
    OrderView.prototype.completeUpate = function () {
        this.scrollerData[0] = ConfigManager_1.default.getOrder();
        this.initUI();
    };
    //刷新订单列表
    OrderView.prototype.updateList = function () {
        MkUtils_1.default.alertTips("刷新订单成功");
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.updateList, this);
        for (var i = 0; i < this.scrollerData.length; i++) {
            var item = this.scrollerData[i];
            if (!item.state && item.unlock) {
                this.scrollerData[i] = ConfigManager_1.default.getOrder();
            }
        }
        this.initUI();
    };
    OrderView.prototype.onUnlock = function () {
        this.scroller.scrollToTop();
        var list = PlayerModel_1.default.getOrderList();
        var indexList = [];
        var arr = list.filter(function (value, index) {
            if (value.unlock == 0)
                indexList.push(index);
            return value.unlock == 0;
        });
        list[indexList[0]] = ConfigManager_1.default.getOrder();
        PlayerModel_1.default.orderLen++;
        this.scrollerData = PlayerModel_1.default.getOrderList();
        ;
        this.initUI();
        this.scroller.scrollToTop();
    };
    OrderView.prototype.updateData = function (index) {
        this.scrollerData[index] = ConfigManager_1.default.getOrder();
        this.initUI();
    };
    OrderView.prototype.initUI = function () {
        var _this = this;
        for (var i = 0; i < this.scrollerData.length; i++) {
            var item = this.scrollerData[i];
            var lastTime = item.time - Math.floor(Utils_1.default.returnTime() / 1000);
            if (lastTime <= 0 && !item.state) {
                this.scrollerData[i] = ConfigManager_1.default.getOrder();
            }
        }
        this.scroller.refreshData(this.scrollerData);
        this.scroller.scrollToTop();
        this.scroller.node.active = false;
        MkUtils_1.default.setNodeDelay(this.node, 0.1, function () {
            _this.scroller.node.active = true;
        });
        this.xfzsLb.string = PlayerModel_1.default.getXfzs() + "";
    };
    OrderView.prototype.onQuality = function () {
        UIMananger_1.default.showPanel(UIType_1.default.orderQualityView);
    };
    //刷新订单
    OrderView.prototype.onUpdate = function () {
        var _this = this;
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.updateList, this);
        UIMananger_1.default.showPanel(UIType_1.default.popView1, null, function () {
            EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, _this.updateList, _this);
        }, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.REFRESH_ORDER);
    };
    /** 仅用于关闭操作 */
    OrderView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    OrderView.prototype.getGuidePoint = function () {
        // let node = this.xfzsLb.node;
        var p = this.scroller.getItemByIndex(0).convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    };
    OrderView.prototype.getGuidePoint1 = function () {
        // let node = this.xfzsLb.node;
        var p = this.scroller.node.convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    };
    OrderView.prototype.guidComplete = function () {
        this.scroller.vertical = true;
    };
    __decorate([
        property(cc.Node)
    ], OrderView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderView.prototype, "btn_quality", void 0);
    __decorate([
        property(cc.Node)
    ], OrderView.prototype, "btn_update", void 0);
    __decorate([
        property(cc.Label)
    ], OrderView.prototype, "xfzsLb", void 0);
    __decorate([
        property(AVirtualScrollView_1.default)
    ], OrderView.prototype, "scroller", void 0);
    OrderView = __decorate([
        ccclass
    ], OrderView);
    return OrderView;
}(BasePanel_1.default));
exports.default = OrderView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL09yZGVyVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRiw4RUFBMEU7QUFDMUUsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNERBQXVEO0FBRXZELHdEQUFtRDtBQUNuRCw2REFBd0Q7QUFDeEQsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUNsRCw2REFBd0Q7QUFDeEQsZ0RBQThDO0FBQzlDLGlFQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7O0dBR0c7QUFFSDtJQUF1Qyw2QkFBUztJQUFoRDtRQUFBLHFFQW1KQztRQWhKRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsY0FBUSxHQUF1QixJQUFJLENBQUM7UUFFcEMsa0JBQVksR0FBRyxFQUFFLENBQUM7O0lBcUl0QixDQUFDO0lBcElHLDRCQUFRLEdBQVI7UUFDSSxLQUFLO1FBQ0wsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0Qsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELHNCQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0RCxzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRixzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRixzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRixzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUUsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqRixJQUFJLElBQUksR0FBRyxxQkFBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVsQixDQUFDO0lBQ1MsMEJBQU0sR0FBaEI7SUFFQSxDQUFDO0lBQ1MseUJBQUssR0FBZjtJQUNBLENBQUM7SUFDRCwyQkFBTyxHQUFQLFVBQVEsSUFBUztRQUNiLElBQUkscUJBQVcsQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMvQixpQkFBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFDakMsc0JBQVksQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUU3QyxDQUFDLENBQUMsQ0FBQTtTQUNMO1FBQ0QsK0RBQStEO1FBQy9ELGlCQUFpQjtRQUNqQixpQkFBTSxPQUFPLFlBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7SUFDQSxDQUFDO0lBQ0QsTUFBTTtJQUNOLDRCQUFRLEdBQVI7UUFDSSxxQkFBVyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDOUIsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsYUFBYTtJQUNiLGlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLHVCQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxRQUFRO0lBQ1IsOEJBQVUsR0FBVjtRQUNJLGlCQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNCLHNCQUFZLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyx1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25EO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLHFCQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUMvQixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE9BQU8sS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsdUJBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QyxxQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUFBLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsOEJBQVUsR0FBVixVQUFXLEtBQUs7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLHVCQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCwwQkFBTSxHQUFOO1FBQUEsaUJBaUJDO1FBaEJHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDakUsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyx1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ25EO1NBQ0o7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLGlCQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUVwRCxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLG9CQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsTUFBTTtJQUNOLDRCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxvQkFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDeEMsc0JBQVksQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsQ0FBQztRQUM1RSxDQUFDLEVBQUUsOEJBQVksQ0FBQyxLQUFLLEVBQUUsa0JBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsY0FBYztJQUNkLG9DQUFnQixHQUFoQjtRQUNJLGlCQUFNLEtBQUssV0FBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0ksK0JBQStCO1FBQy9CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0Usa0RBQWtEO1FBQ2xELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELGtDQUFjLEdBQWQ7UUFDSSwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxrREFBa0Q7UUFDbEQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBL0lEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsNEJBQWtCLENBQUM7K0NBQ087SUFabkIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1KN0I7SUFBRCxnQkFBQztDQW5KRCxBQW1KQyxDQW5Kc0MsbUJBQVMsR0FtSi9DO2tCQW5Kb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBTREtNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9TREtNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJRWZmZWN0VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSUVmZmVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XHJcbmltcG9ydCBTb3J0VXRpbHMgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Tb3J0VXRpbHNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvVXRpbHNcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQb3BUeXBlIH0gZnJvbSBcIi4uL3BvcFZpZXcvUG9wVmlldzFcIjtcclxuaW1wb3J0IEFWaXJ0dWFsU2Nyb2xsVmlldyBmcm9tIFwiLi4vdGFzay9BVmlydHVhbFNjcm9sbFZpZXdcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICog6K6i5Y2V5Lit5b+DXHJcbiAqIFRPRE86XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBCYXNlUGFuZWwge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2Nsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX3F1YWxpdHk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fdXBkYXRlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHhmenNMYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShBVmlydHVhbFNjcm9sbFZpZXcpXHJcbiAgICBzY3JvbGxlcjogQVZpcnR1YWxTY3JvbGxWaWV3ID0gbnVsbDtcclxuXHJcbiAgICBzY3JvbGxlckRhdGEgPSBbXTtcclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX3F1YWxpdHksIHRoaXMub25RdWFsaXR5LCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fdXBkYXRlLCB0aGlzLm9uVXBkYXRlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk9SREVSX0NMT1NFLCB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5PUkRFUl9VUERBVEVfSU5ERVgsIHRoaXMudXBkYXRlRGF0YSwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLk9SREVSX1VQREFURV9MSVNULCB0aGlzLmNvbXBsZXRlVXBhdGUsIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5PUkRFUl9HSVZFX1VQLCB0aGlzLm9uR2l2ZVVwLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuT1JERVJfVU5MT0NLLCB0aGlzLm9uVW5sb2NrLCB0aGlzKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuR1VJREVfQ09NUExFVEUsIHRoaXMuZ3VpZENvbXBsZXRlLCB0aGlzKTtcclxuICAgICAgXHJcbiAgICAgICAgbGV0IGxpc3QgPSBQbGF5ZXJNb2RlbC5nZXRPcmRlckxpc3QoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyRGF0YSA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgIH1cclxuICAgIG9uX1Nob3coYXJnczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXIudmVydGljYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAwLjUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5HVUlERV9VUERBVEUpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAwLjEsIHRoaXMuaW5pdFVJLmJpbmQodGhpcykpXHJcbiAgICAgICAgLy8gdGhpcy5pbml0VUkoKTtcclxuICAgICAgICBzdXBlci5vbl9TaG93KGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U2hvdygpIHtcclxuICAgIH1cclxuICAgIC8v5pS+5byD6K6i5Y2VXHJcbiAgICBvbkdpdmVVcCgpIHtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5vcmRlclZpZGVvTnVtID0gMDtcclxuICAgICAgICAvLyB0aGlzLnNjcm9sbGVyRGF0YVswXSA9IENvbmZpZ01hbmFnZXIuZ2V0T3JkZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG4gICAgLy/orqLljZXlpZblirHpooblj5blkI7mm7TmlrDliJfooahcclxuICAgIGNvbXBsZXRlVXBhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlckRhdGFbMF0gPSBDb25maWdNYW5hZ2VyLmdldE9yZGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIC8v5Yi35paw6K6i5Y2V5YiX6KGoXHJcbiAgICB1cGRhdGVMaXN0KCkge1xyXG4gICAgICAgIE1LVXRpbHMuYWxlcnRUaXBzKFwi5Yi35paw6K6i5Y2V5oiQ5YqfXCIpXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMudXBkYXRlTGlzdCwgdGhpcyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjcm9sbGVyRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2Nyb2xsZXJEYXRhW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uc3RhdGUgJiYgaXRlbS51bmxvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsZXJEYXRhW2ldID0gQ29uZmlnTWFuYWdlci5nZXRPcmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XHJcbiAgICB9XHJcbiAgICBvblVubG9jaygpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvVG9wKCk7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBQbGF5ZXJNb2RlbC5nZXRPcmRlckxpc3QoKTtcclxuICAgICAgICBsZXQgaW5kZXhMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGFyciA9IGxpc3QuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnVubG9jayA9PSAwKSBpbmRleExpc3QucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS51bmxvY2sgPT0gMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxpc3RbaW5kZXhMaXN0WzBdXSA9IENvbmZpZ01hbmFnZXIuZ2V0T3JkZXIoKTtcclxuICAgICAgICBQbGF5ZXJNb2RlbC5vcmRlckxlbisrO1xyXG5cclxuICAgICAgICB0aGlzLnNjcm9sbGVyRGF0YSA9IFBsYXllck1vZGVsLmdldE9yZGVyTGlzdCgpOztcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9Ub3AoKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZURhdGEoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyRGF0YVtpbmRleF0gPSBDb25maWdNYW5hZ2VyLmdldE9yZGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuICAgIGluaXRVSSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Nyb2xsZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5zY3JvbGxlckRhdGFbaV07XHJcbiAgICAgICAgICAgIGxldCBsYXN0VGltZSA9IGl0ZW0udGltZSAtIE1hdGguZmxvb3IoVXRpbHMucmV0dXJuVGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIGlmIChsYXN0VGltZSA8PSAwICYmICFpdGVtLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVyRGF0YVtpXSA9IENvbmZpZ01hbmFnZXIuZ2V0T3JkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5yZWZyZXNoRGF0YSh0aGlzLnNjcm9sbGVyRGF0YSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5zY3JvbGxUb1RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDAuMSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbGVyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMueGZ6c0xiLnN0cmluZyA9IFBsYXllck1vZGVsLmdldFhmenMoKSArIFwiXCI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUXVhbGl0eSgpIHtcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUub3JkZXJRdWFsaXR5Vmlldyk7XHJcbiAgICB9XHJcbiAgICAvL+WIt+aWsOiuouWNlVxyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlZJREVPX0JBQ0ssIHRoaXMudXBkYXRlTGlzdCwgdGhpcyk7XHJcbiAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnBvcFZpZXcxLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLnVwZGF0ZUxpc3QsIHRoaXMpO1xyXG4gICAgICAgIH0sIFVJRWZmZWN0VHlwZS5TQ0FMRSwgUG9wVHlwZS5SRUZSRVNIX09SREVSKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5LuF55So5LqO5YWz6Zet5pON5L2cICovXHJcbiAgICBvbkJ0bkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3VpZGVQb2ludCgpIHtcclxuICAgICAgICAvLyBsZXQgbm9kZSA9IHRoaXMueGZ6c0xiLm5vZGU7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLnNjcm9sbGVyLmdldEl0ZW1CeUluZGV4KDApLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgLy8gbGV0IHAgPSBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLDApKTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIGdldEd1aWRlUG9pbnQxKCkge1xyXG4gICAgICAgIC8vIGxldCBub2RlID0gdGhpcy54ZnpzTGIubm9kZTtcclxuICAgICAgICBsZXQgcCA9IHRoaXMuc2Nyb2xsZXIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIC8vIGxldCBwID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG4gICAgZ3VpZENvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIudmVydGljYWwgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
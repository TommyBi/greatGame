
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/OrderGetScuessView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '455actdzmxOv7IcOFDooGh+', 'OrderGetScuessView');
// src/game/view/order/OrderGetScuessView.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 接单成功、温馨提示
 * TODO:
 */
var OrderGetScuessView = /** @class */ (function (_super) {
    __extends(OrderGetScuessView, _super);
    function OrderGetScuessView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_giveUp = null;
        _this.btn_go = null;
        _this.btn_continue = null;
        _this.lvIconSp = [];
        _this.lvIcon = null;
        _this.cLb = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.titleLb1 = null;
        _this.titleLb2 = null;
        _this.proLb = null;
        _this.cropItems = [];
        _this.mType = 0; //0接单成功、1温馨提示
        return _this;
    }
    OrderGetScuessView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_giveUp, this.onGiveUp, this);
        EventDispath_1.default.on(this.btn_go, this.onGo, this);
        EventDispath_1.default.on(this.btn_continue, this.onContinue, this);
        this.initUI();
        if (PlayerModel_1.default.guideStep >= 0) {
            MkUtils_1.default.setNodeDelay(this.node, 0.5, function () {
                EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
            });
        }
    };
    OrderGetScuessView.prototype.onLoad = function () {
        this._initComponet();
    };
    OrderGetScuessView.prototype.start = function () {
    };
    OrderGetScuessView.prototype.startShow = function () {
        this.mType = this.inData[0];
        this.mData = this.inData[1];
    };
    OrderGetScuessView.prototype.updateData = function () {
        this.initUI();
    };
    OrderGetScuessView.prototype.initUI = function () {
        if (this.mType == 0) {
            this.btn_go.active = true;
            this.descLb1.active = true;
            this.titleLb1.active = true;
            this.cLb.active = true;
        }
        else {
            this.titleLb2.active = true;
            this.btn_continue.active = true;
            this.btn_giveUp.active = true;
            this.descLb2.active = true;
            this.cLb.active = false;
        }
        var len = this.mData.cropList.length;
        var total = 0;
        var current = 0;
        var _loop_1 = function (i) {
            var data = this_1.mData.cropList[i];
            var item = this_1.cropItems[i];
            item.icon.node.active = true;
            item.nameLb.node.active = true;
            item.proLb.node.active = true;
            if (data.cropId == 100) {
                item.nameLb.string = "招待顾客";
            }
            else {
                var base = ConfigManager_1.default.getCropById(data.cropId);
                item.nameLb.string = base.name;
            }
            total += data.target;
            current += data.num;
            item.proLb.string = data.num + "/" + data.target;
            MkUtils_1.default.loadSpriteFrame("texture/crop/icon/" + ("" + data.cropId), function (res) {
                item.icon.spriteFrame = res;
            });
        };
        var this_1 = this;
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        if (this.mData.quality < 2) {
            this.proLb.string = "无加成";
        }
        else {
            this.proLb.string = "+" + ConfigManager_1.default.order_quality_add[this.mData.quality - 1] + "%";
        }
        // this.proLb.string = Math.floor(current / total) * 100 + "%"
        if (this.mData.quality > 0)
            this.lvIcon.spriteFrame = this.lvIconSp[this.mData.quality - 1];
        else
            this.lvIcon.spriteFrame = this.lvIconSp[0];
    };
    OrderGetScuessView.prototype.onGiveUp = function () {
        //仍要放弃
        // EventDispath.send(EventType.ORDER_GIVE_UP)
        // let list = PlayerModel.getOrderList();
        // list[0] = ConfigManager.getOrder();
        // EventDispath.send(EventType.ORDER_UPDATE_TOP);
        // PlayerModel.orderVideoNum = 0;
        // MKUtils.alertTips("订单已放弃，请重新接单")
        UIMananger_1.default.showPanel(UIType_1.default.orderGiveUpView, null, null, UIEffectManager_1.UIEffectType.SCALE, this.mData);
        this.onBtnCloseHandle();
    };
    OrderGetScuessView.prototype.onGo = function () {
        //现在就去
        if (PlayerModel_1.default.guideStep >= 0) {
            EventDispath_1.default.send(EventType_1.EventType.GUIDE_UPDATE);
        }
        this.onBtnCloseHandle();
    };
    OrderGetScuessView.prototype.onContinue = function () {
        this.onBtnCloseHandle();
        //继续完成
    };
    OrderGetScuessView.prototype._initComponet = function () {
        this.lvIcon = this.node.getChildByName("lvIcon").getComponent(cc.Sprite);
        this.proLb = this.node.getChildByName("proLb").getComponent(cc.Label);
        this.descLb1 = this.node.getChildByName("descLb1");
        this.descLb2 = this.node.getChildByName("descLb2");
        this.titleLb1 = this.node.getChildByName("titleLb1");
        this.titleLb2 = this.node.getChildByName("titleLb2");
        this.cLb = this.node.getChildByName("cLb");
        for (var i = 1; i < 5; i++) {
            var nameLb = this.node.getChildByName("nameLb" + i).getComponent(cc.Label);
            var proLb = this.node.getChildByName("cropProLb" + i).getComponent(cc.Label);
            var icon = this.node.getChildByName("icon" + i).getComponent(cc.Sprite);
            nameLb.node.active = false;
            proLb.node.active = false;
            icon.node.active = false;
            this.cropItems.push({ icon: icon, nameLb: nameLb, proLb: proLb });
        }
    };
    /** 仅用于关闭操作 */
    OrderGetScuessView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    OrderGetScuessView.prototype.getGuidePoint = function () {
        // let node = this.xfzsLb.node;
        var p = this.btn_go.convertToWorldSpaceAR(cc.v2(0, 0));
        // let p = node.convertToWorldSpaceAR(cc.v2(0,0));
        return p;
    };
    __decorate([
        property(cc.Node)
    ], OrderGetScuessView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderGetScuessView.prototype, "btn_giveUp", void 0);
    __decorate([
        property(cc.Node)
    ], OrderGetScuessView.prototype, "btn_go", void 0);
    __decorate([
        property(cc.Node)
    ], OrderGetScuessView.prototype, "btn_continue", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], OrderGetScuessView.prototype, "lvIconSp", void 0);
    OrderGetScuessView = __decorate([
        ccclass
    ], OrderGetScuessView);
    return OrderGetScuessView;
}(BasePanel_1.default));
exports.default = OrderGetScuessView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL09yZGVyR2V0U2N1ZXNzVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw4RUFBMEU7QUFDMUUsb0VBQStEO0FBQy9ELHdFQUFtRTtBQUNuRSxrRUFBaUU7QUFDakUsNERBQXVEO0FBQ3ZELDZEQUF3RDtBQUN4RCw4Q0FBeUM7QUFFekMsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUdsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7O0dBR0c7QUFFSDtJQUFnRCxzQ0FBUztJQUF6RDtRQUFBLHFFQWdLQztRQTdKRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFxQixFQUFFLENBQUM7UUFFaEMsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUVqQyxXQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUEsYUFBYTs7SUF3STNCLENBQUM7SUF0SUcscUNBQVEsR0FBUjtRQUNJLEtBQUs7UUFDTCxzQkFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMs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QUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNyRTtJQUNMLENBQUM7SUFFRCxjQUFjO0lBQ2QsNkNBQWdCLEdBQWhCO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDSSwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELGtEQUFrRDtRQUNsRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUE1SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3REFDSztJQVhmLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBZ0t0QztJQUFELHlCQUFDO0NBaEtELEFBZ0tDLENBaEsrQyxtQkFBUyxHQWdLeEQ7a0JBaEtvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVBhbmVsXCI7XHJcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4uLy4uL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IHsgb3JkZXJDYWNoZSB9IGZyb20gXCIuLi8uLi9kYXRhcy9QbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBPcmRlckl0ZW1fQ3JvcCB9IGZyb20gXCIuL09yZGVySXRlbVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDmjqXljZXmiJDlip/jgIHmuKnppqjmj5DnpLpcclxuICogVE9ETzpcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyR2V0U2N1ZXNzVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fZ2l2ZVVwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2dvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuX2NvbnRpbnVlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxyXG4gICAgbHZJY29uU3A6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBsdkljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgY0xiOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGRlc2NMYjE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgZGVzY0xiMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICB0aXRsZUxiMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICB0aXRsZUxiMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcm9MYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGNyb3BJdGVtczogT3JkZXJJdGVtX0Nyb3BbXSA9IFtdO1xyXG5cclxuICAgIG1UeXBlID0gMDsvLzDmjqXljZXmiJDlip/jgIEx5rip6aao5o+Q56S6XHJcbiAgICBtRGF0YTogb3JkZXJDYWNoZTtcclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIOmAgOWHulxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jbG9zZSwgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2dpdmVVcCwgdGhpcy5vbkdpdmVVcCwgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2dvLCB0aGlzLm9uR28sIHRoaXMpO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9jb250aW51ZSwgdGhpcy5vbkNvbnRpbnVlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG5cclxuICAgICAgICBpZiAoUGxheWVyTW9kZWwuZ3VpZGVTdGVwID49IDApIHtcclxuICAgICAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAwLjUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5HVUlERV9VUERBVEUpXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faW5pdENvbXBvbmV0KCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTaG93KCkge1xyXG4gICAgICAgIHRoaXMubVR5cGUgPSB0aGlzLmluRGF0YVswXTtcclxuICAgICAgICB0aGlzLm1EYXRhID0gdGhpcy5pbkRhdGFbMV07XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1UeXBlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5idG5fZ28uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjTGIxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVMYjEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jTGIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGIyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX2NvbnRpbnVlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuX2dpdmVVcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jTGIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGVuID0gdGhpcy5tRGF0YS5jcm9wTGlzdC5sZW5ndGhcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5tRGF0YS5jcm9wTGlzdFtpXTtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNyb3BJdGVtc1tpXTtcclxuICAgICAgICAgICAgaXRlbS5pY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXRlbS5uYW1lTGIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpdGVtLnByb0xiLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9wSWQgPT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5hbWVMYi5zdHJpbmcgPSBcIuaLm+W+hemhvuWuolwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2UgPSBDb25maWdNYW5hZ2VyLmdldENyb3BCeUlkKGRhdGEuY3JvcElkKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubmFtZUxiLnN0cmluZyA9IGJhc2UubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbCArPSBkYXRhLnRhcmdldDtcclxuICAgICAgICAgICAgY3VycmVudCArPSBkYXRhLm51bTtcclxuICAgICAgICAgICAgaXRlbS5wcm9MYi5zdHJpbmcgPSBkYXRhLm51bSArIFwiL1wiICsgZGF0YS50YXJnZXQ7XHJcbiAgICAgICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9jcm9wL2ljb24vXCIgKyBgJHtkYXRhLmNyb3BJZH1gLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmljb24uc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tRGF0YS5xdWFsaXR5IDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLnByb0xiLnN0cmluZyA9IFwi5peg5Yqg5oiQXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9MYi5zdHJpbmcgPSBcIitcIiArIENvbmZpZ01hbmFnZXIub3JkZXJfcXVhbGl0eV9hZGRbdGhpcy5tRGF0YS5xdWFsaXR5IC0gMV0gKyBcIiVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5wcm9MYi5zdHJpbmcgPSBNYXRoLmZsb29yKGN1cnJlbnQgLyB0b3RhbCkgKiAxMDAgKyBcIiVcIlxyXG4gICAgICAgaWYodGhpcy5tRGF0YS5xdWFsaXR5PjApIHRoaXMubHZJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5sdkljb25TcFt0aGlzLm1EYXRhLnF1YWxpdHkgLSAxXTtcclxuICAgICAgIGVsc2UgdGhpcy5sdkljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmx2SWNvblNwWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2l2ZVVwKCkge1xyXG4gICAgICAgIC8v5LuN6KaB5pS+5byDXHJcbiAgICAgICAgLy8gRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLk9SREVSX0dJVkVfVVApXHJcbiAgICAgICAgLy8gbGV0IGxpc3QgPSBQbGF5ZXJNb2RlbC5nZXRPcmRlckxpc3QoKTtcclxuICAgICAgICAvLyBsaXN0WzBdID0gQ29uZmlnTWFuYWdlci5nZXRPcmRlcigpO1xyXG5cclxuICAgICAgICAvLyBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuT1JERVJfVVBEQVRFX1RPUCk7XHJcbiAgICAgICAgLy8gUGxheWVyTW9kZWwub3JkZXJWaWRlb051bSA9IDA7XHJcbiAgICAgICAgLy8gTUtVdGlscy5hbGVydFRpcHMoXCLorqLljZXlt7LmlL7lvIPvvIzor7fph43mlrDmjqXljZVcIilcclxuICAgICAgICBVSU1hbmFuZ2VyLnNob3dQYW5lbChVSVR5cGUub3JkZXJHaXZlVXBWaWV3LCBudWxsLCBudWxsLCBVSUVmZmVjdFR5cGUuU0NBTEUsIHRoaXMubURhdGEpXHJcbiAgICAgICAgdGhpcy5vbkJ0bkNsb3NlSGFuZGxlKCk7XHJcbiAgICB9XHJcbiAgICBvbkdvKCkge1xyXG4gICAgICAgIC8v546w5Zyo5bCx5Y67XHJcbiAgICAgICAgaWYgKFBsYXllck1vZGVsLmd1aWRlU3RlcCA+PSAwKSB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5zZW5kKEV2ZW50VHlwZS5HVUlERV9VUERBVEUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25CdG5DbG9zZUhhbmRsZSgpO1xyXG4gICAgfVxyXG4gICAgb25Db250aW51ZSgpIHtcclxuICAgICAgICB0aGlzLm9uQnRuQ2xvc2VIYW5kbGUoKTtcclxuICAgICAgICAvL+e7p+e7reWujOaIkFxyXG4gICAgfVxyXG4gICAgX2luaXRDb21wb25ldCgpIHtcclxuICAgICAgICB0aGlzLmx2SWNvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImx2SWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnByb0xiID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvTGJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmRlc2NMYjEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjTGIxXCIpO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRlc2NMYjJcIik7XHJcbiAgICAgICAgdGhpcy50aXRsZUxiMSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlTGIxXCIpO1xyXG4gICAgICAgIHRoaXMudGl0bGVMYjIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZUxiMlwiKTtcclxuICAgICAgICB0aGlzLmNMYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNMYlwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5hbWVMYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVMYlwiICsgaSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGV0IHByb0xiID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY3JvcFByb0xiXCIgKyBpKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIiArIGkpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICAgICAgbmFtZUxiLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByb0xiLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3JvcEl0ZW1zLnB1c2goeyBpY29uOiBpY29uLCBuYW1lTGI6IG5hbWVMYiwgcHJvTGI6IHByb0xiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiog5LuF55So5LqO5YWz6Zet5pON5L2cICovXHJcbiAgICBvbkJ0bkNsb3NlSGFuZGxlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3VpZGVQb2ludCgpIHtcclxuICAgICAgICAvLyBsZXQgbm9kZSA9IHRoaXMueGZ6c0xiLm5vZGU7XHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLmJ0bl9nby5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIC8vIGxldCBwID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbn1cclxuIl19
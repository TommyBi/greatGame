
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/level/LevelItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17df3dJHX5EtY+funkCWXCL', 'LevelItem');
// src/game/view/level/LevelItem.ts

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
var AItemRenerer_1 = require("../task/AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelItem = /** @class */ (function (_super) {
    __extends(LevelItem, _super);
    function LevelItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn1 = null;
        _this.btn2 = null;
        _this.targetLb = null;
        _this.moneyLb = null;
        _this.lvLb = null;
        _this.proLb = null;
        _this.pro = null;
        return _this;
    }
    // onLoad () {}
    LevelItem.prototype.start = function () {
    };
    LevelItem.prototype.dataChanged = function () {
        // console.log(this.data);
        this.initUI();
    };
    LevelItem.prototype.initUI = function () {
        this.btn1.active = this.btn2.active = false;
        if (this.data.userOrderNum >= this.data.orderNum && this.data.isFirst) {
            this.btn1.active = true;
            this.proLb.string = this.data.orderNum + "/" + this.data.orderNum;
            this.targetLb.string = "\u53EF\u5347\u7EA7";
        }
        else {
            this.btn2.active = true;
            this.proLb.string = this.data.userOrderNum + "/" + this.data.orderNum;
            if (this.data.userOrderNum >= this.data.orderNum) {
                this.targetLb.string = "\u53EF\u5347\u7EA7";
            }
            else {
                this.targetLb.string = "\u518D\u5B8C\u6210" + (this.data.orderNum - this.data.userOrderNum) + "\u4E2A\u8BA2\u5355\u53EF\u5347\u7EA7";
            }
        }
        this.pro.progress = this.data.userOrderNum / this.data.orderNum;
        this.lvLb.string = this.data.level;
        this.moneyLb.string = this.data.amount + "元";
    };
    // "userOrderNum": 10,//用户订单数量
    // "jsLevel": 6,//集市等级
    // "jsTaskInfos": [
    //     {
    //         "level": 1,//集市等级
    //         "orderNum": 10,//集市订单数量
    //         "amount": 5,//奖励金额
    //         "tx_mu": "1%",//提现比例
    //     },
    LevelItem.prototype.onGet = function () {
        SDKManager_1.default.upJSLevel();
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_LEVEL_UP, this.onVideoBack, this);
        // SDKManager.showAd(Global.VIDEO_CONFIG.video17)
    };
    LevelItem.prototype.onVideoBack = function () {
        EventDispath_1.default.removeByEvent(EventType_1.EventType.SDK_LEVEL_UP, this.onVideoBack, this);
        EventDispath_1.default.send(EventType_1.EventType.LEVEL_UPDATE);
    };
    __decorate([
        property(cc.Node)
    ], LevelItem.prototype, "btn1", void 0);
    __decorate([
        property(cc.Node)
    ], LevelItem.prototype, "btn2", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "targetLb", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "moneyLb", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "lvLb", void 0);
    __decorate([
        property(cc.Label)
    ], LevelItem.prototype, "proLb", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LevelItem.prototype, "pro", void 0);
    LevelItem = __decorate([
        ccclass
    ], LevelItem);
    return LevelItem;
}(AItemRenerer_1.default));
exports.default = LevelItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L2xldmVsL0xldmVsSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixvRUFBK0Q7QUFHL0Qsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUtqRSxxREFBaUQ7QUFFM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMsNkJBQXFCO0lBQTVEO1FBQUEscUVBZ0VDO1FBN0RHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLFNBQUcsR0FBbUIsSUFBSSxDQUFDOztJQWlEL0IsQ0FBQztJQWhERyxlQUFlO0lBRWYseUJBQUssR0FBTDtJQUVBLENBQUM7SUFFUywrQkFBVyxHQUFyQjtRQUNJLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLG9CQUFLLENBQUE7U0FDL0I7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEUsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsb0JBQUssQ0FBQTthQUMvQjtpQkFBSztnQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyx3QkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksMENBQVEsQ0FBQTthQUNuRjtTQUNKO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDO0lBQy9DLENBQUM7SUFDRCw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCx5QkFBSyxHQUFMO1FBQ0ksb0JBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QixzQkFBWSxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUUsaURBQWlEO0lBRXJELENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0ksc0JBQVksQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSxzQkFBWSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUE1REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNHO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzswQ0FDRTtJQWZWLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FnRTdCO0lBQUQsZ0JBQUM7Q0FoRUQsQUFnRUMsQ0FoRXNDLHNCQUFhLEdBZ0VuRDtrQkFoRW9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgU0RLTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvU0RLTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBDb21wb25lbnRIZWxwZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay90b29scy9Db21wb25lbnRIZWxwZXJcIjtcclxuaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IEFJdGVtUmVuZGVyZXIgZnJvbSBcIi4uL3Rhc2svQUl0ZW1SZW5lcmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbEl0ZW0gZXh0ZW5kcyBBSXRlbVJlbmRlcmVyPHN0cmluZz4ge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bjI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdGFyZ2V0TGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1vbmV5TGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGx2TGI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb0xiOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm86IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhKTtcclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMuYnRuMS5hY3RpdmUgPSB0aGlzLmJ0bjIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS51c2VyT3JkZXJOdW0gPj0gdGhpcy5kYXRhLm9yZGVyTnVtICYmIHRoaXMuZGF0YS5pc0ZpcnN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnByb0xiLnN0cmluZyA9IHRoaXMuZGF0YS5vcmRlck51bSArIFwiL1wiICsgdGhpcy5kYXRhLm9yZGVyTnVtO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExiLnN0cmluZyA9IGDlj6/ljYfnuqdgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idG4yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJvTGIuc3RyaW5nID0gdGhpcy5kYXRhLnVzZXJPcmRlck51bSArIFwiL1wiICsgdGhpcy5kYXRhLm9yZGVyTnVtO1xyXG4gICAgICAgICAgICBpZih0aGlzLmRhdGEudXNlck9yZGVyTnVtPj10aGlzLmRhdGEub3JkZXJOdW0gKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0TGIuc3RyaW5nID0gYOWPr+WNh+e6p2BcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRMYi5zdHJpbmcgPSBg5YaN5a6M5oiQJHt0aGlzLmRhdGEub3JkZXJOdW0gLSB0aGlzLmRhdGEudXNlck9yZGVyTnVtfeS4quiuouWNleWPr+WNh+e6p2BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByby5wcm9ncmVzcyA9IHRoaXMuZGF0YS51c2VyT3JkZXJOdW0gLyB0aGlzLmRhdGEub3JkZXJOdW07XHJcbiAgICAgICAgdGhpcy5sdkxiLnN0cmluZyA9IHRoaXMuZGF0YS5sZXZlbDtcclxuICAgICAgICB0aGlzLm1vbmV5TGIuc3RyaW5nID0gdGhpcy5kYXRhLmFtb3VudCtcIuWFg1wiO1xyXG4gICAgfVxyXG4gICAgLy8gXCJ1c2VyT3JkZXJOdW1cIjogMTAsLy/nlKjmiLforqLljZXmlbDph49cclxuICAgIC8vIFwianNMZXZlbFwiOiA2LC8v6ZuG5biC562J57qnXHJcbiAgICAvLyBcImpzVGFza0luZm9zXCI6IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIFwibGV2ZWxcIjogMSwvL+mbhuW4guetiee6p1xyXG4gICAgLy8gICAgICAgICBcIm9yZGVyTnVtXCI6IDEwLC8v6ZuG5biC6K6i5Y2V5pWw6YePXHJcbiAgICAvLyAgICAgICAgIFwiYW1vdW50XCI6IDUsLy/lpZblirHph5Hpop1cclxuICAgIC8vICAgICAgICAgXCJ0eF9tdVwiOiBcIjElXCIsLy/mj5DnjrDmr5TkvotcclxuICAgIC8vICAgICB9LFxyXG4gICAgb25HZXQoKSB7XHJcbiAgICAgICAgU0RLTWFuYWdlci51cEpTTGV2ZWwoKTtcclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuU0RLX0xFVkVMX1VQLCB0aGlzLm9uVmlkZW9CYWNrLCB0aGlzKTtcclxuICAgICAgICAvLyBTREtNYW5hZ2VyLnNob3dBZChHbG9iYWwuVklERU9fQ09ORklHLnZpZGVvMTcpXHJcblxyXG4gICAgfVxyXG4gICAgb25WaWRlb0JhY2soKSB7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUJ5RXZlbnQoRXZlbnRUeXBlLlNES19MRVZFTF9VUCwgdGhpcy5vblZpZGVvQmFjaywgdGhpcyk7XHJcbiAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLkxFVkVMX1VQREFURSk7XHJcbiAgICB9XHJcbn1cclxuIl19
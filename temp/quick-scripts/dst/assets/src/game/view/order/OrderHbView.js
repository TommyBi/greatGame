
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/order/OrderHbView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e58cdgsNGVBmJKmV8AmOTpz', 'OrderHbView');
// src/game/view/order/OrderHbView.ts

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
var BasePanel_1 = require("../../../framework/ui/BasePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 *订单红包池
 * TODO:
 */
var OrderHbView = /** @class */ (function (_super) {
    __extends(OrderHbView, _super);
    function OrderHbView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_ok = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        _this.numLb = null;
        return _this;
    }
    OrderHbView.prototype.onEnable = function () {
        // 退出
        EventDispath_1.default.on(this.btn_close, this.onBtnCloseHandle, this);
        EventDispath_1.default.on(this.btn_ok, this.onOk, this);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SDK_VIDEO_NUM, this.updateNum, this);
        SDKManager_1.default.getOrderPoolData();
    };
    OrderHbView.prototype.onLoad = function () {
    };
    OrderHbView.prototype.start = function () {
    };
    OrderHbView.prototype.updateNum = function (num) {
        if (!num)
            num = 0;
        this.numLb.string = num + "";
        if (num > 0) {
            this.descLb1.active = true;
        }
        else {
            this.descLb2.active = true;
        }
    };
    OrderHbView.prototype.onOk = function () {
        //知道了
        this.onBtnCloseHandle();
    };
    /** 仅用于关闭操作 */
    OrderHbView.prototype.onBtnCloseHandle = function () {
        _super.prototype.close.call(this);
    };
    __decorate([
        property(cc.Node)
    ], OrderHbView.prototype, "btn_close", void 0);
    __decorate([
        property(cc.Node)
    ], OrderHbView.prototype, "btn_ok", void 0);
    __decorate([
        property(cc.Node)
    ], OrderHbView.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Node)
    ], OrderHbView.prototype, "descLb2", void 0);
    __decorate([
        property(cc.Label)
    ], OrderHbView.prototype, "numLb", void 0);
    OrderHbView = __decorate([
        ccclass
    ], OrderHbView);
    return OrderHbView;
}(BasePanel_1.default));
exports.default = OrderHbView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L29yZGVyL09yZGVySGJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG9FQUErRDtBQUMvRCx3RUFBbUU7QUFDbkUsa0VBQWlFO0FBQ2pFLDZEQUF3RDtBQUlsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7O0dBR0c7QUFFSDtJQUF5QywrQkFBUztJQUFsRDtRQUFBLHFFQStDQztRQTVDRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBYSxJQUFJLENBQUM7O0lBb0MzQixDQUFDO0lBakNHLDhCQUFRLEdBQVI7UUFDSSxLQUFLO1FBQ0wsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFN0Qsc0JBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlDLHNCQUFZLENBQUMsZ0JBQWdCLENBQUMscUJBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxvQkFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNTLDRCQUFNLEdBQWhCO0lBQ0EsQ0FBQztJQUNTLDJCQUFLLEdBQWY7SUFDQSxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLEdBQUc7UUFDVCxJQUFJLENBQUMsR0FBRztZQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDOUI7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCwwQkFBSSxHQUFKO1FBQ0ksS0FBSztRQUNMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxjQUFjO0lBQ2Qsc0NBQWdCLEdBQWhCO1FBQ0ksaUJBQU0sS0FBSyxXQUFFLENBQUM7SUFDbEIsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0k7SUFYTixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBK0MvQjtJQUFELGtCQUFDO0NBL0NELEFBK0NDLENBL0N3QyxtQkFBUyxHQStDakQ7a0JBL0NvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNES01hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL1NES01hbmFnZXJcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0aCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWVzc2FnZS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IEJhc2VQYW5lbCBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbFwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2RhdGFzL1BsYXllck1vZGVsXCI7XHJcbmltcG9ydCB7IE9yZGVySXRlbV9Dcm9wIH0gZnJvbSBcIi4vT3JkZXJJdGVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAq6K6i5Y2V57qi5YyF5rGgXHJcbiAqIFRPRE86XHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckhiVmlldyBleHRlbmRzIEJhc2VQYW5lbCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fY2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5fb2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkZXNjTGIxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGVzY0xiMjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBudW1MYjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyDpgIDlh7pcclxuICAgICAgICBFdmVudERpc3BhdGgub24odGhpcy5idG5fY2xvc2UsIHRoaXMub25CdG5DbG9zZUhhbmRsZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5vbih0aGlzLmJ0bl9vaywgdGhpcy5vbk9rLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlNES19WSURFT19OVU0sIHRoaXMudXBkYXRlTnVtLCB0aGlzKTtcclxuICAgICAgICBTREtNYW5hZ2VyLmdldE9yZGVyUG9vbERhdGEoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTnVtKG51bSkge1xyXG4gICAgICAgIGlmICghbnVtKSBudW0gPSAwO1xyXG4gICAgICAgIHRoaXMubnVtTGIuc3RyaW5nID0gbnVtICsgXCJcIjtcclxuICAgICAgICBpZiAobnVtID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYjEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NMYjIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25PaygpIHtcclxuICAgICAgICAvL+efpemBk+S6hlxyXG4gICAgICAgIHRoaXMub25CdG5DbG9zZUhhbmRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDku4XnlKjkuo7lhbPpl63mk43kvZwgKi9cclxuICAgIG9uQnRuQ2xvc2VIYW5kbGUoKSB7XHJcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
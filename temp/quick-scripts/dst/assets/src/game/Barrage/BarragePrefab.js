
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/Barrage/BarragePrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1cc832kSBdIlb/3RP+GUph6', 'BarragePrefab');
// src/game/Barrage/BarragePrefab.ts

"use strict";
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
var DataManager_1 = require("../../framework/manager/DataManager");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BarragePrefab = /** @class */ (function (_super) {
    __extends(BarragePrefab, _super);
    function BarragePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headIcon = null;
        _this.nameLabel = null;
        _this.moneyLabel = null;
        _this.descLb1 = null;
        _this.descLb2 = null;
        return _this;
    }
    BarragePrefab.prototype.setData = function () {
        var barrageData = DataManager_1.default.getJson("barrage");
        var data = barrageData[DataManager_1.default._barrageIndex];
        DataManager_1.default._barrageIndex++;
        if (DataManager_1.default._barrageIndex > 392) {
            DataManager_1.default._barrageIndex = 1;
        }
        this.nameLabel.string = data["name"];
        this.moneyLabel.string = data["money"] + "元";
        MkUtils_1.default.loadSpriteFrame("texture/barrage/" + data["headshot"], function (spriteFrame) {
            if (spriteFrame)
                this.headIcon.spriteFrame = spriteFrame;
        }.bind(this));
    };
    __decorate([
        property(cc.Sprite)
    ], BarragePrefab.prototype, "headIcon", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "moneyLabel", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "descLb1", void 0);
    __decorate([
        property(cc.Label)
    ], BarragePrefab.prototype, "descLb2", void 0);
    BarragePrefab = __decorate([
        ccclass
    ], BarragePrefab);
    return BarragePrefab;
}(cc.Component));
exports.default = BarragePrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9CYXJyYWdlL0JhcnJhZ2VQcmVmYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELHlEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTZCQztRQTFCRyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWMsSUFBSSxDQUFDOztJQWtCOUIsQ0FBQztJQWhCRywrQkFBTyxHQUFQO1FBQ0ksSUFBSSxXQUFXLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLHFCQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEQscUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixJQUFJLHFCQUFXLENBQUMsYUFBYSxHQUFHLEdBQUcsRUFBRTtZQUNqQyxxQkFBVyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUU3QyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsVUFBVSxXQUFXO1lBQ2pGLElBQUcsV0FBVztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUF6QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNPO0lBWFQsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTZCakM7SUFBRCxvQkFBQztDQTdCRCxBQTZCQyxDQTdCMEMsRUFBRSxDQUFDLFNBQVMsR0E2QnREO2tCQTdCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhcnJhZ2VQcmVmYWIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBoZWFkSWNvbiA6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIG5hbWVMYWJlbCA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbW9uZXlMYWJlbCA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZGVzY0xiMSA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZGVzY0xiMiA6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHNldERhdGEoKXtcbiAgICAgICAgbGV0IGJhcnJhZ2VEYXRhID0gRGF0YU1hbmFnZXIuZ2V0SnNvbihcImJhcnJhZ2VcIik7XG4gICAgICAgIGxldCBkYXRhID0gYmFycmFnZURhdGFbRGF0YU1hbmFnZXIuX2JhcnJhZ2VJbmRleF07XG4gICAgICAgIFxuICAgICAgICBEYXRhTWFuYWdlci5fYmFycmFnZUluZGV4Kys7XG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5fYmFycmFnZUluZGV4ID4gMzkyKSB7XG4gICAgICAgICAgICBEYXRhTWFuYWdlci5fYmFycmFnZUluZGV4ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IGRhdGFbXCJuYW1lXCJdO1xuICAgICAgICB0aGlzLm1vbmV5TGFiZWwuc3RyaW5nID0gZGF0YVtcIm1vbmV5XCJdICsgXCLlhYNcIjtcblxuICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvYmFycmFnZS9cIiArIGRhdGFbXCJoZWFkc2hvdFwiXSwgZnVuY3Rpb24gKHNwcml0ZUZyYW1lKSB7ICAvL1xuICAgICAgICAgICBpZihzcHJpdGVGcmFtZSkgdGhpcy5oZWFkSWNvbi5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfVxufVxuIl19
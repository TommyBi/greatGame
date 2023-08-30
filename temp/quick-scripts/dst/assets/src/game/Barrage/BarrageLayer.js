
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/Barrage/BarrageLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0812Q9NF9HepddxndFa2jO', 'BarrageLayer');
// src/game/Barrage/BarrageLayer.ts

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
var UIMananger_1 = require("../../framework/manager/UIMananger");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var BarragePrefab_1 = require("./BarragePrefab");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BarrageLayer = /** @class */ (function (_super) {
    __extends(BarrageLayer, _super);
    function BarrageLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.barrageNode = null;
        _this._barrageIndex = 0;
        _this._actionNum = 0;
        return _this;
    }
    BarrageLayer.prototype.start = function () {
        //一秒之后
        this.scheduleOnce(this.initBarrage.bind(this), 1);
    };
    BarrageLayer.prototype.initBarrage = function () {
        var _this = this;
        var barrageNode = UIMananger_1.default.barragePool.get();
        if (!barrageNode) {
            barrageNode = cc.instantiate(this.barrageNode);
        }
        barrageNode.getComponent(BarragePrefab_1.default).setData();
        cc.director.getScene().addChild(barrageNode);
        var y1 = this._barrageIndex == 0 ? cc.winSize.height - 500 : cc.winSize.height - 700;
        var p = cc.v2(1330, y1);
        barrageNode.setPosition(p);
        barrageNode.runAction(cc.sequence(cc.moveTo(10, 0, barrageNode.y), cc.moveTo(5, -690, barrageNode.y), cc.callFunc(function () {
            UIMananger_1.default.barragePool.put(barrageNode);
            if (_this._actionNum == 0) {
                _this._actionNum++;
                return;
            }
            if (_this._barrageIndex == 2) {
                var delayTime = MkUtils_1.default.randomNM(3, 8);
                _this.scheduleOnce(function () {
                    _this._barrageIndex = 0;
                    _this._actionNum = 0;
                    _this.initBarrage();
                }, delayTime);
            }
        })));
        if (this._barrageIndex == 0) {
            var time = MkUtils_1.default.randomNM(2, 20);
            this.scheduleOnce(function () {
                _this.initBarrage();
            }, time);
        }
        this._barrageIndex++;
    };
    __decorate([
        property(cc.Prefab)
    ], BarrageLayer.prototype, "barrageNode", void 0);
    BarrageLayer = __decorate([
        ccclass
    ], BarrageLayer);
    return BarrageLayer;
}(cc.Component));
exports.default = BarrageLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9CYXJyYWdlL0JhcnJhZ2VMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQseURBQW9EO0FBQ3BELGlEQUE0QztBQUV0QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTRDQztRQTFDRyxpQkFBVyxHQUFlLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFZLENBQUMsQ0FBQztRQUMzQixnQkFBVSxHQUFZLENBQUMsQ0FBQzs7SUF1QzVCLENBQUM7SUF0Q0csNEJBQUssR0FBTDtRQUNJLE1BQU07UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxrQ0FBVyxHQUFYO1FBQUEsaUJBaUNDO1FBaENHLElBQUksV0FBVyxHQUFHLG9CQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9DLElBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDWixXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxXQUFXLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDckYsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUM5RyxvQkFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEMsSUFBSSxLQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLEtBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO2dCQUN6QixJQUFJLFNBQVMsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQTthQUNoQjtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNKLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNYO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDVztJQUZkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0Q2hDO0lBQUQsbUJBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3lDLEVBQUUsQ0FBQyxTQUFTLEdBNENyRDtrQkE1Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IEJhcnJhZ2VQcmVmYWIgZnJvbSBcIi4vQmFycmFnZVByZWZhYlwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJyYWdlTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGJhcnJhZ2VOb2RlIDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBfYmFycmFnZUluZGV4IDogbnVtYmVyID0gMDtcclxuICAgIF9hY3Rpb25OdW0gOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICAvL+S4gOenkuS5i+WQjlxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuaW5pdEJhcnJhZ2UuYmluZCh0aGlzKSwxKTtcclxuICAgIH1cclxuICAgIGluaXRCYXJyYWdlKCl7XHJcbiAgICAgICAgbGV0IGJhcnJhZ2VOb2RlID0gVUlNYW5hbmdlci5iYXJyYWdlUG9vbC5nZXQoKTtcclxuICAgICAgICBpZighYmFycmFnZU5vZGUpe1xyXG4gICAgICAgICAgICBiYXJyYWdlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFycmFnZU5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXJyYWdlTm9kZS5nZXRDb21wb25lbnQoQmFycmFnZVByZWZhYikuc2V0RGF0YSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQoYmFycmFnZU5vZGUpO1xyXG5cclxuICAgICAgICBsZXQgeTEgPSB0aGlzLl9iYXJyYWdlSW5kZXggPT0gMCA/IGNjLndpblNpemUuaGVpZ2h0IC0gNTAwIDogY2Mud2luU2l6ZS5oZWlnaHQgLSA3MDA7XHJcbiAgICAgICAgbGV0IHAgPSBjYy52MigxMzMwLHkxKTtcclxuICAgICAgICBiYXJyYWdlTm9kZS5zZXRQb3NpdGlvbihwKTtcclxuICAgICAgICBiYXJyYWdlTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDEwLCAwLCBiYXJyYWdlTm9kZS55KSwgY2MubW92ZVRvKDUsIC02OTAsIGJhcnJhZ2VOb2RlLnkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIFVJTWFuYW5nZXIuYmFycmFnZVBvb2wucHV0KGJhcnJhZ2VOb2RlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbk51bSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb25OdW0rKztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYmFycmFnZUluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxheVRpbWUgPSBNS1V0aWxzLnJhbmRvbU5NKDMsIDgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2JhcnJhZ2VJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uTnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCYXJyYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheVRpbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgaWYgKHRoaXMuX2JhcnJhZ2VJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gTUtVdGlscy5yYW5kb21OTSgyLCAyMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEJhcnJhZ2UoKTtcclxuICAgICAgICAgICAgfSwgdGltZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYmFycmFnZUluZGV4Kys7XHJcbiAgICB9XHJcbn1cclxuIl19
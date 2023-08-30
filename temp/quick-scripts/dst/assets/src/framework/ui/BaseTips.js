
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/BaseTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46727hHQx1Kb4C+eWcFtHdK', 'BaseTips');
// src/framework/ui/BaseTips.ts

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
var Handler_1 = require("../base/Handler");
var LoaderManager_1 = require("../manager/LoaderManager");
var UIMananger_1 = require("../manager/UIMananger");
var ComponentHelper_1 = require("../tools/ComponentHelper");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseTips = /** @class */ (function (_super) {
    __extends(BaseTips, _super);
    function BaseTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._inData = null;
        _this._uiName = "";
        _this._effect = null;
        _this.modelUIOpacity = 150;
        _this._delayRemove = null;
        _this.maskURL = "mbg"; //资源放在common模块中
        return _this;
    }
    BaseTips.prototype.close = function () {
        UIMananger_1.default.hideTips(this.node);
        this.modelUI.stopAllActions();
        this.modelUI.runAction(cc.fadeOut(0.2));
    };
    BaseTips.prototype.setUIParent = function (parentNode) {
        this.node.parent = parentNode;
    };
    BaseTips.prototype._show_ = function (args) {
        this._inData = args;
        this._initModule();
    };
    BaseTips.prototype.setDelayRemove = function (dr) {
        this._delayRemove = dr;
    };
    BaseTips.prototype.setUIName = function (uiName) {
        this._uiName = uiName;
    };
    BaseTips.prototype.setEffect = function (effect) {
        this._effect = effect;
    };
    BaseTips.prototype.startHide = function () {
    };
    BaseTips.prototype._hide_ = function () {
        this.node.destroy();
    };
    BaseTips.prototype.on_Show = function () {
        var _this = this;
        this._showModuleAction();
        if (this._delayRemove && this._inData) {
            var reward = this._inData[0];
            this.node.runAction(cc.sequence(cc.delayTime(this._delayRemove), cc.callFunc(function () {
                _this.scheduleOnce(_this.close.bind(_this), 0);
            })));
            var noCoin = this._inData[1];
        }
    };
    BaseTips.prototype._initModule = function () {
        if (!cc.isValid(this.modelUI)) {
            this.modelUI = ComponentHelper_1.default.createSprite(null, null);
            LoaderManager_1.default.loaderSpriteFrame(this.maskURL, Handler_1.default.create(this._moduleComplete, this), 'commonRes');
            this.modelUI.addComponent(cc.BlockInputEvents);
            this.modelUI.opacity = 0;
            this.modelUI.parent = this.node;
            this.modelUI.setSiblingIndex(0);
        }
    };
    BaseTips.prototype._moduleComplete = function (res) {
        var sprite = ComponentHelper_1.default.spriteFrame(this.modelUI, res);
        sprite.trim = false;
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        var msize = cc.view.getVisibleSize();
        this.modelUI.width = msize.width;
        this.modelUI.height = msize.height;
        this._clickClose();
    };
    BaseTips.prototype._showModuleAction = function () {
        if (cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
            this.modelUI.runAction(cc.fadeTo(0.2, this.modelUIOpacity));
        }
    };
    BaseTips.prototype.startShow = function () { };
    //点击空白区域关闭
    BaseTips.prototype._clickClose = function () {
        var _this = this;
        this.modelUI.on('touchend', function (event) {
            event.stopPropagation();
            _this.node.stopAllActions();
            var clickPos = event.getLocation();
            var visibleSize = cc.view.getVisibleSize();
            clickPos.x = clickPos.x - visibleSize.width / 2;
            clickPos.y = clickPos.y - visibleSize.height / 2;
            var rect = _this.node.getBoundingBox();
            if (!rect.contains(clickPos)) {
                _this.close();
            }
        });
    };
    BaseTips = __decorate([
        ccclass
    ], BaseTips);
    return BaseTips;
}(cc.Component));
exports.default = BaseTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VUaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLDJDQUFzQztBQUN0QywwREFBcUQ7QUFDckQsb0RBQStDO0FBQy9DLDREQUF1RDtBQUVqRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTRGQztRQTFGRyxhQUFPLEdBQVMsSUFBSSxDQUFDO1FBQ3JCLGFBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsYUFBTyxHQUFPLElBQUksQ0FBQztRQUVuQixvQkFBYyxHQUFZLEdBQUcsQ0FBQztRQUM5QixrQkFBWSxHQUFTLElBQUksQ0FBQztRQUNuQixhQUFPLEdBQVUsS0FBSyxDQUFDLENBQUEsZUFBZTs7SUFvRmpELENBQUM7SUFuRkcsd0JBQUssR0FBTDtRQUNJLG9CQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLFVBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sSUFBSTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsaUNBQWMsR0FBZCxVQUFlLEVBQUU7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FB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IGZyb20gXCIuLi8uLi9nYW1lL2NvbnN0cy9VSVR5cGVcIjtcclxuaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4uLy4uL2dhbWUvbWFuYWdlci9FZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBNZXNzYWdlQ2VudGVyIGZyb20gXCIuLi8uLi9nYW1lL21hbmFnZXIvTWVzc2FnZUNlbnRlclwiO1xyXG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XHJcbmltcG9ydCBMb2FkZXJNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0xvYWRlck1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uL21hbmFnZXIvVUlNYW5hbmdlclwiO1xyXG5pbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi90b29scy9Db21wb25lbnRIZWxwZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVRpcHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIF9pbkRhdGEgOiBhbnkgPSBudWxsO1xyXG4gICAgX3VpTmFtZTpzdHJpbmcgPSBcIlwiO1xyXG4gICAgX2VmZmVjdDphbnkgPSBudWxsO1xyXG4gICAgbW9kZWxVSTpjYy5Ob2RlO1xyXG4gICAgbW9kZWxVSU9wYWNpdHkgOiBudW1iZXIgPSAxNTA7XHJcbiAgICBfZGVsYXlSZW1vdmUgOiBhbnkgPSBudWxsO1xyXG4gICAgcHVibGljIG1hc2tVUkw6c3RyaW5nID0gXCJtYmdcIjsvL+i1hOa6kOaUvuWcqGNvbW1vbuaooeWdl+S4rVxyXG4gICAgY2xvc2UoKXtcclxuICAgICAgICBVSU1hbmFuZ2VyLmhpZGVUaXBzKHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFVJLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFVJLnJ1bkFjdGlvbihjYy5mYWRlT3V0KDAuMikpO1xyXG4gICAgfVxyXG4gICAgc2V0VUlQYXJlbnQocGFyZW50Tm9kZSl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICBfc2hvd18oYXJncyl7XHJcbiAgICAgICAgdGhpcy5faW5EYXRhID0gYXJncztcclxuICAgICAgICB0aGlzLl9pbml0TW9kdWxlKCk7XHJcbiAgICB9XHJcbiAgICBzZXREZWxheVJlbW92ZShkcil7XHJcbiAgICAgICAgdGhpcy5fZGVsYXlSZW1vdmUgPSBkcjtcclxuICAgIH0gICBcclxuICAgIHNldFVJTmFtZSh1aU5hbWUpe1xyXG4gICAgICAgIHRoaXMuX3VpTmFtZSA9IHVpTmFtZTtcclxuICAgIH1cclxuICAgIHNldEVmZmVjdChlZmZlY3Qpe1xyXG4gICAgICAgIHRoaXMuX2VmZmVjdCA9IGVmZmVjdDtcclxuICAgIH1cclxuICAgIHN0YXJ0SGlkZSgpe1xyXG4gICAgfVxyXG4gICAgX2hpZGVfKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIG9uX1Nob3coKXtcclxuICAgICAgICB0aGlzLl9zaG93TW9kdWxlQWN0aW9uKCk7XHJcbiAgICAgICAgaWYodGhpcy5fZGVsYXlSZW1vdmUgJiYgdGhpcy5faW5EYXRhKXtcclxuICAgICAgICAgICAgbGV0IHJld2FyZCA9IHRoaXMuX2luRGF0YVswXTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSh0aGlzLl9kZWxheVJlbW92ZSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2xvc2UuYmluZCh0aGlzKSwwKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICBsZXQgbm9Db2luID0gdGhpcy5faW5EYXRhWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX2luaXRNb2R1bGUoKXtcclxuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5tb2RlbFVJKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkgPSBDb21wb25lbnRIZWxwZXIuY3JlYXRlU3ByaXRlKG51bGwsbnVsbCk7XHJcbiAgICAgICAgICAgIExvYWRlck1hbmFnZXIubG9hZGVyU3ByaXRlRnJhbWUodGhpcy5tYXNrVVJMLEhhbmRsZXIuY3JlYXRlKHRoaXMuX21vZHVsZUNvbXBsZXRlLHRoaXMpLCdjb21tb25SZXMnKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkuc2V0U2libGluZ0luZGV4KDApOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9tb2R1bGVDb21wbGV0ZShyZXMpe1xyXG4gICAgICAgIGxldCBzcHJpdGU6Y2MuU3ByaXRlID0gQ29tcG9uZW50SGVscGVyLnNwcml0ZUZyYW1lKHRoaXMubW9kZWxVSSxyZXMpO1xyXG4gICAgICAgIHNwcml0ZS50cmltID0gZmFsc2U7XHJcbiAgICAgICAgc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgICAgICBsZXQgbXNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbFVJLndpZHRoID0gbXNpemUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5tb2RlbFVJLmhlaWdodCA9IG1zaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLl9jbGlja0Nsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX3Nob3dNb2R1bGVBY3Rpb24oKXtcclxuICAgICAgICBpZihjYy5pc1ZhbGlkKHRoaXMubW9kZWxVSSkpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnJ1bkFjdGlvbihjYy5mYWRlVG8oMC4yLHRoaXMubW9kZWxVSU9wYWNpdHkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydFNob3coKXt9XHJcbiAgICAvL+eCueWHu+epuueZveWMuuWfn+WFs+mXrVxyXG4gICAgX2NsaWNrQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLm1vZGVsVUkub24oJ3RvdWNoZW5kJywgKGV2ZW50KT0+IHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBsZXQgY2xpY2tQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpc2libGVTaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tQb3MueCA9IGNsaWNrUG9zLnggLSB2aXNpYmxlU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjbGlja1Bvcy55ID0gY2xpY2tQb3MueSAtIHZpc2libGVTaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXJlY3QuY29udGFpbnMoY2xpY2tQb3MpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
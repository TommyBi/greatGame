
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VUaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QywwREFBcUQ7QUFDckQsb0RBQStDO0FBQy9DLDREQUF1RDtBQUVqRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTRGQztRQTFGRyxhQUFPLEdBQVMsSUFBSSxDQUFDO1FBQ3JCLGFBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsYUFBTyxHQUFPLElBQUksQ0FBQztRQUVuQixvQkFBYyxHQUFZLEdBQUcsQ0FBQztRQUM5QixrQkFBWSxHQUFTLElBQUksQ0FBQztRQUNuQixhQUFPLEdBQVUsS0FBSyxDQUFDLENBQUEsZUFBZTs7SUFvRmpELENBQUM7SUFuRkcsd0JBQUssR0FBTDtRQUNJLG9CQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsOEJBQVcsR0FBWCxVQUFZLFVBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sSUFBSTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsaUNBQWMsR0FBZCxVQUFlLEVBQUU7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FB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ciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XG5pbXBvcnQgTG9hZGVyTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vbWFuYWdlci9VSU1hbmFuZ2VyXCI7XG5pbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi90b29scy9Db21wb25lbnRIZWxwZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVGlwcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBfaW5EYXRhIDogYW55ID0gbnVsbDtcbiAgICBfdWlOYW1lOnN0cmluZyA9IFwiXCI7XG4gICAgX2VmZmVjdDphbnkgPSBudWxsO1xuICAgIG1vZGVsVUk6Y2MuTm9kZTtcbiAgICBtb2RlbFVJT3BhY2l0eSA6IG51bWJlciA9IDE1MDtcbiAgICBfZGVsYXlSZW1vdmUgOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBtYXNrVVJMOnN0cmluZyA9IFwibWJnXCI7Ly/otYTmupDmlL7lnKhjb21tb27mqKHlnZfkuK1cbiAgICBjbG9zZSgpe1xuICAgICAgICBVSU1hbmFuZ2VyLmhpZGVUaXBzKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMubW9kZWxVSS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLm1vZGVsVUkucnVuQWN0aW9uKGNjLmZhZGVPdXQoMC4yKSk7XG4gICAgfVxuICAgIHNldFVJUGFyZW50KHBhcmVudE5vZGUpe1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICB9XG4gICAgX3Nob3dfKGFyZ3Mpe1xuICAgICAgICB0aGlzLl9pbkRhdGEgPSBhcmdzO1xuICAgICAgICB0aGlzLl9pbml0TW9kdWxlKCk7XG4gICAgfVxuICAgIHNldERlbGF5UmVtb3ZlKGRyKXtcbiAgICAgICAgdGhpcy5fZGVsYXlSZW1vdmUgPSBkcjtcbiAgICB9ICAgXG4gICAgc2V0VUlOYW1lKHVpTmFtZSl7XG4gICAgICAgIHRoaXMuX3VpTmFtZSA9IHVpTmFtZTtcbiAgICB9XG4gICAgc2V0RWZmZWN0KGVmZmVjdCl7XG4gICAgICAgIHRoaXMuX2VmZmVjdCA9IGVmZmVjdDtcbiAgICB9XG4gICAgc3RhcnRIaWRlKCl7XG4gICAgfVxuICAgIF9oaWRlXygpe1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICBvbl9TaG93KCl7XG4gICAgICAgIHRoaXMuX3Nob3dNb2R1bGVBY3Rpb24oKTtcbiAgICAgICAgaWYodGhpcy5fZGVsYXlSZW1vdmUgJiYgdGhpcy5faW5EYXRhKXtcbiAgICAgICAgICAgIGxldCByZXdhcmQgPSB0aGlzLl9pbkRhdGFbMF07XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSh0aGlzLl9kZWxheVJlbW92ZSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jbG9zZS5iaW5kKHRoaXMpLDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICAgIGxldCBub0NvaW4gPSB0aGlzLl9pbkRhdGFbMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfaW5pdE1vZHVsZSgpe1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5tb2RlbFVJKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJID0gQ29tcG9uZW50SGVscGVyLmNyZWF0ZVNwcml0ZShudWxsLG51bGwpO1xuICAgICAgICAgICAgTG9hZGVyTWFuYWdlci5sb2FkZXJTcHJpdGVGcmFtZSh0aGlzLm1hc2tVUkwsSGFuZGxlci5jcmVhdGUodGhpcy5fbW9kdWxlQ29tcGxldGUsdGhpcyksJ2NvbW1vblJlcycpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkuc2V0U2libGluZ0luZGV4KDApOyAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgcHJpdmF0ZSBfbW9kdWxlQ29tcGxldGUocmVzKXtcbiAgICAgICAgbGV0IHNwcml0ZTpjYy5TcHJpdGUgPSBDb21wb25lbnRIZWxwZXIuc3ByaXRlRnJhbWUodGhpcy5tb2RlbFVJLHJlcyk7XG4gICAgICAgIHNwcml0ZS50cmltID0gZmFsc2U7XG4gICAgICAgIHNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgIGxldCBtc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgdGhpcy5tb2RlbFVJLndpZHRoID0gbXNpemUud2lkdGg7XG4gICAgICAgIHRoaXMubW9kZWxVSS5oZWlnaHQgPSBtc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NsaWNrQ2xvc2UoKTtcbiAgICB9XG4gICAgcHVibGljIF9zaG93TW9kdWxlQWN0aW9uKCl7XG4gICAgICAgIGlmKGNjLmlzVmFsaWQodGhpcy5tb2RlbFVJKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkucnVuQWN0aW9uKGNjLmZhZGVUbygwLjIsdGhpcy5tb2RlbFVJT3BhY2l0eSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0U2hvdygpe31cbiAgICAvL+eCueWHu+epuueZveWMuuWfn+WFs+mXrVxuICAgIF9jbGlja0Nsb3NlKCl7XG4gICAgICAgIHRoaXMubW9kZWxVSS5vbigndG91Y2hlbmQnLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGxldCBjbGlja1BvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgbGV0IHZpc2libGVTaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICAgICAgICAgIGNsaWNrUG9zLnggPSBjbGlja1Bvcy54IC0gdmlzaWJsZVNpemUud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGNsaWNrUG9zLnkgPSBjbGlja1Bvcy55IC0gdmlzaWJsZVNpemUuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgIGlmKCFyZWN0LmNvbnRhaW5zKGNsaWNrUG9zKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
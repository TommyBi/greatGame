
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
var Utils_1 = require("../../framework/tools/Utils");
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
        _this.bg = null;
        _this.tipsLb = null;
        return _this;
        // private _eventManager = cc["internal"]["eventManager"];
        // private _touchListener: any;
        // InitTouch() {
        //     const EventListener = cc["EventListener"];
        //     this._touchListener = EventListener.create({
        //         event: EventListener.TOUCH_ONE_BY_ONE,
        //         swallowTouches: false,//是否吞噬touch事件
        //         owner: this.bg,
        //         mask: null,
        //         onTouchBegan: this.onTouchStart.bind(this),
        //         onTouchMoved: null,
        //         onTouchEnded: this.onTouchEnded.bind(this),
        //         onTouchCancelled: null,
        //     });
        //     this._eventManager.addListener(this._touchListener, this.bg);
        // }
        // private onTouchStart(touch: cc.Touch, event: cc.Event.EventTouch): boolean {
        //     cc.log("touch start");
        //     //此处必须返回true（表示接触到了节点）,否则TOUCH_MOVE,TOUCH_END,TOUCH_CANCEL不触发。
        //     return true;
        // }
        // private onTouchEnded(touch: cc.Touch, event: cc.Event.EventTouch): void {
        //     cc.log("touch end");
        //     // this.ClickCall(touch);
        // }
        // protected onDestroy(): void {
        //     // super.onDestroy();
        //     this._eventManager.removeListener(this._touchListener, this.node);
        // }
    }
    BarragePrefab.prototype.onLoad = function () {
        // this.node.pauseSystemEvents(true);
        // let bg = this.node.getChildByName("mbg");
        // bg.pauseSystemEvents(true);
        // this.tipsLb.node.pauseSystemEvents(true);
    };
    BarragePrefab.prototype.setData = function () {
        var barrageData = DataManager_1.default.getJson("barrage");
        var data = barrageData[DataManager_1.default._barrageIndex];
        DataManager_1.default._barrageIndex++;
        if (DataManager_1.default._barrageIndex > barrageData.length) {
            DataManager_1.default._barrageIndex = 1;
        }
        // this.nameLabel.string = data["name"];
        // this.moneyLabel.string = data["money"] + "元";
        var num = Utils_1.default.getRandomNum(0, 110);
        var date = 0;
        var money = 0;
        if (num <= 5) {
            date = 10;
        }
        else if (num <= 15) {
            date = 5;
        }
        else if (num <= 30) {
            money = MkUtils_1.default.randomNMF(3, 5);
        }
        else if (num < 55) {
            money = MkUtils_1.default.randomNMF(1, 3);
        }
        else if (num <= 85) {
            money = MkUtils_1.default.randomNMF(0.5, 1);
        }
        else if (num > 85) {
            money = MkUtils_1.default.randomNMF(0.3, 0.5);
        }
        if (date != 0) {
            this.bg.width = 672;
            this.tipsLb.string = "<color=#000000>\u606D\u559C</c><color=#ff0000>" + data["name"] + "</c><color=#000000>\u6210\u529F\u5C06\u7EA2\u5305\u63D0\u73B0\u6BD4\u4F8B\u5347\u81F3<color=#ff0000>" + date + "%</color>";
        }
        else {
            this.bg.width = 480;
            this.tipsLb.string = "<color=#000000>\u606D\u559C</c><color=#ff0000>" + data["name"] + "</c><color=#000000>\u6210\u529F\u63D0\u73B0<color=#ff0000>" + money.toFixed(2) + "</c><color=#000000>\u5143</color>";
        }
        // MKUtils.loadSpriteFrame("texture/barrage/" + data["headshot"], function (spriteFrame) {  //
        //     if (spriteFrame) this.headIcon.spriteFrame = spriteFrame;
        // }.bind(this))
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
    __decorate([
        property(cc.Node)
    ], BarragePrefab.prototype, "bg", void 0);
    __decorate([
        property(cc.RichText)
    ], BarragePrefab.prototype, "tipsLb", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9CYXJyYWdlL0JhcnJhZ2VQcmVmYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELHlEQUFvRDtBQUNwRCxxREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFnR0M7UUE3RkcsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLFlBQU0sR0FBZ0IsSUFBSSxDQUFDOztRQW1EM0IsMERBQTBEO1FBQzFELCtCQUErQjtRQUMvQixnQkFBZ0I7UUFDaEIsaURBQWlEO1FBQ2pELG1EQUFtRDtRQUNuRCxpREFBaUQ7UUFDakQsOENBQThDO1FBQzlDLDBCQUEwQjtRQUMxQixzQkFBc0I7UUFDdEIsc0RBQXNEO1FBQ3RELDhCQUE4QjtRQUM5QixzREFBc0Q7UUFDdEQsa0NBQWtDO1FBQ2xDLFVBQVU7UUFDVixvRUFBb0U7UUFDcEUsSUFBSTtRQUVKLCtFQUErRTtRQUMvRSw2QkFBNkI7UUFDN0IscUVBQXFFO1FBQ3JFLG1CQUFtQjtRQUNuQixJQUFJO1FBQ0osNEVBQTRFO1FBQzVFLDJCQUEyQjtRQUMzQixnQ0FBZ0M7UUFDaEMsSUFBSTtRQUNKLGdDQUFnQztRQUNoQyw0QkFBNEI7UUFDNUIseUVBQXlFO1FBQ3pFLElBQUk7SUFDUixDQUFDO0lBL0VHLDhCQUFNLEdBQU47UUFDSSxxQ0FBcUM7UUFDckMsNENBQTRDO1FBQzVDLDhCQUE4QjtRQUM5Qiw0Q0FBNEM7SUFD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dGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdG9vbHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJyYWdlUHJlZmFiIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgaGVhZEljb246IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBuYW1lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1vbmV5TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NMYjE6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGRlc2NMYjI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmc6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgdGlwc0xiOiBjYy5SaWNoVGV4dCA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAvLyBsZXQgYmcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYmdcIik7XHJcbiAgICAgICAgLy8gYmcucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgLy8gdGhpcy50aXBzTGIubm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgIH1cclxuICAgIHNldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGJhcnJhZ2VEYXRhID0gRGF0YU1hbmFnZXIuZ2V0SnNvbihcImJhcnJhZ2VcIik7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBiYXJyYWdlRGF0YVtEYXRhTWFuYWdlci5fYmFycmFnZUluZGV4XTtcclxuXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuX2JhcnJhZ2VJbmRleCsrO1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5fYmFycmFnZUluZGV4ID4gYmFycmFnZURhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLl9iYXJyYWdlSW5kZXggPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gZGF0YVtcIm5hbWVcIl07XHJcbiAgICAgICAgLy8gdGhpcy5tb25leUxhYmVsLnN0cmluZyA9IGRhdGFbXCJtb25leVwiXSArIFwi5YWDXCI7XHJcblxyXG4gICAgICAgIGxldCBudW0gPSBVdGlscy5nZXRSYW5kb21OdW0oMCwgMTEwKTtcclxuICAgICAgICBsZXQgZGF0ZSA9IDA7XHJcbiAgICAgICAgbGV0IG1vbmV5ID0gMDtcclxuICAgICAgICBpZiAobnVtIDw9IDUpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IDEwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDw9IDE1KSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSA1O1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDw9IDMwKSB7XHJcbiAgICAgICAgICAgIG1vbmV5ID0gTUtVdGlscy5yYW5kb21OTUYoMywgNSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA1NSkge1xyXG4gICAgICAgICAgICBtb25leSA9IE1LVXRpbHMucmFuZG9tTk1GKDEsIDMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDw9IDg1KSB7XHJcbiAgICAgICAgICAgIG1vbmV5ID0gTUtVdGlscy5yYW5kb21OTUYoMC41LCAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA+IDg1KSB7XHJcbiAgICAgICAgICAgIG1vbmV5ID0gTUtVdGlscy5yYW5kb21OTUYoMC4zLCAwLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGUgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJnLndpZHRoID0gNjcyO1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNMYi5zdHJpbmcgPSBgPGNvbG9yPSMwMDAwMDA+5oGt5ZacPC9jPjxjb2xvcj0jZmYwMDAwPiR7ZGF0YVtcIm5hbWVcIl19PC9jPjxjb2xvcj0jMDAwMDAwPuaIkOWKn+Wwhue6ouWMheaPkOeOsOavlOS+i+WNh+iHszxjb2xvcj0jZmYwMDAwPiR7ZGF0ZX0lPC9jb2xvcj5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmcud2lkdGggPSA0ODA7XHJcbiAgICAgICAgICAgIHRoaXMudGlwc0xiLnN0cmluZyA9IGA8Y29sb3I9IzAwMDAwMD7mga3llpw8L2M+PGNvbG9yPSNmZjAwMDA+JHtkYXRhW1wibmFtZVwiXX08L2M+PGNvbG9yPSMwMDAwMDA+5oiQ5Yqf5o+Q546wPGNvbG9yPSNmZjAwMDA+JHttb25leS50b0ZpeGVkKDIpfTwvYz48Y29sb3I9IzAwMDAwMD7lhYM8L2NvbG9yPmA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2JhcnJhZ2UvXCIgKyBkYXRhW1wiaGVhZHNob3RcIl0sIGZ1bmN0aW9uIChzcHJpdGVGcmFtZSkgeyAgLy9cclxuICAgICAgICAvLyAgICAgaWYgKHNwcml0ZUZyYW1lKSB0aGlzLmhlYWRJY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgLy8gfS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgX2V2ZW50TWFuYWdlciA9IGNjW1wiaW50ZXJuYWxcIl1bXCJldmVudE1hbmFnZXJcIl07XHJcbiAgICAvLyBwcml2YXRlIF90b3VjaExpc3RlbmVyOiBhbnk7XHJcbiAgICAvLyBJbml0VG91Y2goKSB7XHJcbiAgICAvLyAgICAgY29uc3QgRXZlbnRMaXN0ZW5lciA9IGNjW1wiRXZlbnRMaXN0ZW5lclwiXTtcclxuICAgIC8vICAgICB0aGlzLl90b3VjaExpc3RlbmVyID0gRXZlbnRMaXN0ZW5lci5jcmVhdGUoe1xyXG4gICAgLy8gICAgICAgICBldmVudDogRXZlbnRMaXN0ZW5lci5UT1VDSF9PTkVfQllfT05FLFxyXG4gICAgLy8gICAgICAgICBzd2FsbG93VG91Y2hlczogZmFsc2UsLy/mmK/lkKblkJ7lmax0b3VjaOS6i+S7tlxyXG4gICAgLy8gICAgICAgICBvd25lcjogdGhpcy5iZyxcclxuICAgIC8vICAgICAgICAgbWFzazogbnVsbCxcclxuICAgIC8vICAgICAgICAgb25Ub3VjaEJlZ2FuOiB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpLFxyXG4gICAgLy8gICAgICAgICBvblRvdWNoTW92ZWQ6IG51bGwsXHJcbiAgICAvLyAgICAgICAgIG9uVG91Y2hFbmRlZDogdGhpcy5vblRvdWNoRW5kZWQuYmluZCh0aGlzKSxcclxuICAgIC8vICAgICAgICAgb25Ub3VjaENhbmNlbGxlZDogbnVsbCxcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICB0aGlzLl9ldmVudE1hbmFnZXIuYWRkTGlzdGVuZXIodGhpcy5fdG91Y2hMaXN0ZW5lciwgdGhpcy5iZyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBvblRvdWNoU3RhcnQodG91Y2g6IGNjLlRvdWNoLCBldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gICAgIGNjLmxvZyhcInRvdWNoIHN0YXJ0XCIpO1xyXG4gICAgLy8gICAgIC8v5q2k5aSE5b+F6aG76L+U5ZuedHJ1Ze+8iOihqOekuuaOpeinpuWIsOS6huiKgueCue+8iSzlkKbliJlUT1VDSF9NT1ZFLFRPVUNIX0VORCxUT1VDSF9DQU5DRUzkuI3op6blj5HjgIJcclxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxuICAgIC8vIHByaXZhdGUgb25Ub3VjaEVuZGVkKHRvdWNoOiBjYy5Ub3VjaCwgZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpOiB2b2lkIHtcclxuICAgIC8vICAgICBjYy5sb2coXCJ0b3VjaCBlbmRcIik7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5DbGlja0NhbGwodG91Y2gpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vICAgICAvLyBzdXBlci5vbkRlc3Ryb3koKTtcclxuICAgIC8vICAgICB0aGlzLl9ldmVudE1hbmFnZXIucmVtb3ZlTGlzdGVuZXIodGhpcy5fdG91Y2hMaXN0ZW5lciwgdGhpcy5ub2RlKTtcclxuICAgIC8vIH1cclxufVxyXG4iXX0=
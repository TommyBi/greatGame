
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/GameMainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8501OjIe9ECZm+UxIscUF3', 'GameMainView');
// src/game/view/main/GameMainView.ts

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
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var BaseView_1 = require("../../../framework/ui/BaseView");
var ccclass = cc._decorator.ccclass;
var GameMainView = /** @class */ (function (_super) {
    __extends(GameMainView, _super);
    function GameMainView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameMainView.prototype.onLoad = function () {
        this._initComponet();
        cc.winSize.height;
    };
    GameMainView.prototype.update = function (dt) {
    };
    GameMainView.prototype.start = function () {
        MkUtils_1.default.setNodeDelay(this.node, 2, function () {
            // 延迟做todo
        });
    };
    GameMainView.prototype.onEnable = function () {
        // EventDispath.on(this.btn_lvUp, this.onLvUp, this);
        // EventDispath.addEventListener(EventType.CROP_GET, this.getCrop, this);
    };
    //初始化场景中的节点
    GameMainView.prototype._initComponet = function () {
        // this.zlPro = this.btn_zlgk.getChildByName("zl_proBar").getComponent(cc.ProgressBar);
        // this.roadPfb = cc.instantiate(this.roadPrefab);
        // road.addChild(this.roadPfb);
        // this.roadPfb.getComponent(RoadPrefab).setData(uiCfg.roadId);
    };
    GameMainView = __decorate([
        ccclass
    ], GameMainView);
    return GameMainView;
}(BaseView_1.default));
exports.default = GameMainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vR2FtZU1haW5WaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUF1RDtBQUN2RCwyREFBc0Q7QUFFOUMsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFHbEM7SUFBMEMsZ0NBQVE7SUFBbEQ7O0lBMkJBLENBQUM7SUF6QkcsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtJQUNyQixDQUFDO0lBRVMsNkJBQU0sR0FBaEIsVUFBaUIsRUFBVTtJQUMzQixDQUFDO0lBRUQsNEJBQUssR0FBTDtRQUNJLGlCQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQy9CLFVBQVU7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQ0kscURBQXFEO1FBQ3JELHlFQUF5RTtJQUM3RSxDQUFDO0lBRUQsV0FBVztJQUNYLG9DQUFhLEdBQWI7UUFDSSx1RkFBdUY7UUFDdkYsa0RBQWtEO1FBQ2xELCtCQUErQjtRQUMvQiwrREFBK0Q7SUFDbkUsQ0FBQztJQTFCZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTJCaEM7SUFBRCxtQkFBQztDQTNCRCxBQTJCQyxDQTNCeUMsa0JBQVEsR0EyQmpEO2tCQTNCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xuaW1wb3J0IEJhc2VWaWV3IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVZpZXdcIjtcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1haW5WaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9pbml0Q29tcG9uZXQoKTtcbiAgICAgICAgY2Mud2luU2l6ZS5oZWlnaHRcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgTUtVdGlscy5zZXROb2RlRGVsYXkodGhpcy5ub2RlLCAyLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyDlu7bov5/lgZp0b2RvXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gRXZlbnREaXNwYXRoLm9uKHRoaXMuYnRuX2x2VXAsIHRoaXMub25MdlVwLCB0aGlzKTtcbiAgICAgICAgLy8gRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLkNST1BfR0VULCB0aGlzLmdldENyb3AsIHRoaXMpO1xuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5Zy65pmv5Lit55qE6IqC54K5XG4gICAgX2luaXRDb21wb25ldCgpIHtcbiAgICAgICAgLy8gdGhpcy56bFBybyA9IHRoaXMuYnRuX3psZ2suZ2V0Q2hpbGRCeU5hbWUoXCJ6bF9wcm9CYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgLy8gdGhpcy5yb2FkUGZiID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2FkUHJlZmFiKTtcbiAgICAgICAgLy8gcm9hZC5hZGRDaGlsZCh0aGlzLnJvYWRQZmIpO1xuICAgICAgICAvLyB0aGlzLnJvYWRQZmIuZ2V0Q29tcG9uZW50KFJvYWRQcmVmYWIpLnNldERhdGEodWlDZmcucm9hZElkKTtcbiAgICB9XG59XG4iXX0=
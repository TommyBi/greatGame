"use strict";
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
"use strict";
cc._RF.push(module, 'c3e9eEzkHlPB4Ff4UQ3r1OX', 'Loading');
// src/game/Loading.ts

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
var Handler_1 = require("../framework/base/Handler");
var LoaderManager_1 = require("../framework/manager/LoaderManager");
var MkUtils_1 = require("../framework/tools/MkUtils");
var LoaderType_1 = require("./consts/LoaderType");
var UIType_1 = require("./consts/UIType");
var PlayerModel_1 = require("./datas/PlayerModel");
var ConfigManager_1 = require("./manager/ConfigManager");
cc.macro.CLEANUP_IMAGE_CACHE = false;
cc.dynamicAtlasManager.enabled = true;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingBar = null;
        return _this;
    }
    Loading.prototype.onLoad = function () {
        var _this = this;
        LoaderType_1.default.initConfig();
        UIType_1.default.init();
        ConfigManager_1.default.init();
        this.loadingBar.node.active = true;
        this.loadingBar.progress = 0;
        var backup = cc.loader.onProgress;
        cc.loader.onProgress = function (count, amount) {
            if (this.loadingBar)
                this.loadingBar.progress = count / amount;
        }.bind(this);
        var gameView = UIType_1.default.gameView;
        LoaderManager_1.default.loaderPrefab(gameView.uname, Handler_1.default.create(function (res) {
            _this.initDataSuccess();
        }, this), gameView.mname);
    };
    Loading.prototype.start = function () {
        MkUtils_1.default.setStatsColor(cc.Color.WHITE);
        cc.game.setFrameRate(60);
        this.initData();
    };
    Loading.prototype.initData = function () {
        // PlayerModel.loadData();
        this.initDataSuccess();
    };
    Loading.prototype.initDataSuccess = function () {
        PlayerModel_1.default.loadData();
        cc.director.loadScene("main");
        cc.director.preloadScene("main", function (count, total) {
        });
        console.log("查看分辨率", JSON.stringify(cc.winSize));
    };
    __decorate([
        property(cc.ProgressBar)
    ], Loading.prototype, "loadingBar", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

cc._RF.pop();
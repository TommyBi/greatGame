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
var DataManager_1 = require("../framework/manager/DataManager");
var LoaderManager_1 = require("../framework/manager/LoaderManager");
var SDKManager_1 = require("../framework/manager/SDKManager");
var NResponer_1 = require("../framework/message/NResponer");
var MkUtils_1 = require("../framework/tools/MkUtils");
var LoaderType_1 = require("./consts/LoaderType");
var UIType_1 = require("./consts/UIType");
var PlayerModel_1 = require("./datas/PlayerModel");
var ConfigManager_1 = require("./manager/ConfigManager");
var Message_1 = require("./view/Message");
cc.macro.CLEANUP_IMAGE_CACHE = false;
cc.dynamicAtlasManager.enabled = true;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingBar = null;
        return _this;
        // update (dt) {}
    }
    Loading.prototype.onLoad = function () {
        var _this = this;
        SDKManager_1.default.onStartGame(0);
        LoaderType_1.default.initConfig();
        UIType_1.default.init();
        NResponer_1.default.on(Message_1.Message.configComplete, Handler_1.default.create(function () {
            // UIMananger.showView(UIType.mainView);
        }, this), this);
        ConfigManager_1.default.init();
        this.loadingBar.node.active = true;
        this.loadingBar.progress = 0;
        var backup = cc.loader.onProgress;
        cc.loader.onProgress = function (count, amount) {
            this.loadingBar.progress = count / amount;
        }.bind(this);
        DataManager_1.default.init();
        cc.director.preloadScene("main", function () {
            cc.loader.onProgress = backup;
            _this.loadingBar.node.active = false;
            _this.initDataSuccess();
        });
        var gameView = UIType_1.default.gameView;
        LoaderManager_1.default.loaderPrefab(gameView.uname, Handler_1.default.create(function (res) {
        }, this), gameView.mname);
    };
    Loading.prototype.start = function () {
        MkUtils_1.default.setStatsColor(cc.Color.RED);
        cc.game.setFrameRate(60);
        this.initData();
        // ConfigManager.loadGameZipJson("immotalJsonZip", Global.JSON_FILE.split("|"), function () {
        //     this.initDataSuccess();
        // }.bind(this), true)
    };
    Loading.prototype.initData = function () {
        // PlayerModel.loadData();
    };
    Loading.prototype.initDataSuccess = function () {
        PlayerModel_1.default.initUiCfg();
        PlayerModel_1.default.loadData();
        // this.scheduleOnce(() => {
        //     cc.director.loadScene("main");
        // }, 0.1);
        cc.director.loadScene("main");
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
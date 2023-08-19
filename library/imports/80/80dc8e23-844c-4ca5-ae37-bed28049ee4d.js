"use strict";
cc._RF.push(module, '80dc84jhExMpa43vtKASe5N', 'Main');
// src/game/Main.ts

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
var UIMananger_1 = require("../framework/manager/UIMananger");
var UIType_1 = require("./consts/UIType");
var DataManager_1 = require("../framework/manager/DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.onLoad = function () {
        cc.macro.CLEANUP_IMAGE_CACHE = true;
        cc.dynamicAtlasManager.enabled = true;
        UIMananger_1.default.init();
        DataManager_1.default.init();
        // MusicManager.initMusic();
        // JSHelper.playMisuc("bgm");
        this.init();
    };
    Main.prototype.init = function () {
        UIMananger_1.default.showView(UIType_1.default.gameView);
        // MusicManager.playMusic('bg.mp3');
    };
    Main.prototype.start = function () { };
    Main.prototype.update = function (dt) { };
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();
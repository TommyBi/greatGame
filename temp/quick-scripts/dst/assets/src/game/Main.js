
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCwwQ0FBcUM7QUFDckMsZ0VBQTJEO0FBRXJELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDOztJQXNCQSxDQUFDO0lBckJHLHFCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQztRQUNwQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QyxvQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLHFCQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELG1CQUFJLEdBQUo7UUFDSSxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLG9DQUFvQztJQUN4QyxDQUFDO0lBR0Qsb0JBQUssR0FBTCxjQUFVLENBQUM7SUFFWCxxQkFBTSxHQUFOLFVBQU8sRUFBRSxJQUFJLENBQUM7SUFuQkcsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNCeEI7SUFBRCxXQUFDO0NBdEJELEFBc0JDLENBdEJpQyxFQUFFLENBQUMsU0FBUyxHQXNCN0M7a0JBdEJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uL2ZyYW1ld29yay9tYW5hZ2VyL1VJTWFuYW5nZXJcIjtcbmltcG9ydCBVSVR5cGUgZnJvbSBcIi4vY29uc3RzL1VJVHlwZVwiO1xuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9EYXRhTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5tYWNyby5DTEVBTlVQX0lNQUdFX0NBQ0hFID0gdHJ1ZTtcbiAgICAgICAgY2MuZHluYW1pY0F0bGFzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgVUlNYW5hbmdlci5pbml0KCk7XG4gICAgICAgIERhdGFNYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgLy8gTXVzaWNNYW5hZ2VyLmluaXRNdXNpYygpO1xuICAgICAgICAvLyBKU0hlbHBlci5wbGF5TWlzdWMoXCJiZ21cIik7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIFVJTWFuYW5nZXIuc2hvd1ZpZXcoVUlUeXBlLmdhbWVWaWV3KTtcbiAgICAgICAgLy8gTXVzaWNNYW5hZ2VyLnBsYXlNdXNpYygnYmcubXAzJyk7XG4gICAgfVxuXG5cbiAgICBzdGFydCgpIHsgfVxuXG4gICAgdXBkYXRlKGR0KSB7IH1cbiAgICAvLyBodHRwczovL2ZvcnVtLmNvY29zLm9yZy90L2NvY29zLWNyZWF0b3ItNTAvOTQ5OTkgICAgICAvL+mmluWxj1xuXG59XG4iXX0=
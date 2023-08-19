
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/src/framework/base/BasePoolObject');
require('./assets/src/framework/base/Handler');
require('./assets/src/framework/helper/JSHelper');
require('./assets/src/framework/helper/StorageHelper');
require('./assets/src/framework/loader/GroupData');
require('./assets/src/framework/loader/GroupLoader');
require('./assets/src/framework/loader/Loader');
require('./assets/src/framework/loader/LoaderItem');
require('./assets/src/framework/manager/DataManager');
require('./assets/src/framework/manager/DragManager');
require('./assets/src/framework/manager/GamePoolManager');
require('./assets/src/framework/manager/LoaderManager');
require('./assets/src/framework/manager/MusicManager');
require('./assets/src/framework/manager/UIEffectManager');
require('./assets/src/framework/manager/UIMananger');
require('./assets/src/framework/message/EventDispath');
require('./assets/src/framework/message/EventType');
require('./assets/src/framework/message/NResponer');
require('./assets/src/framework/sdk/BaseSdk');
require('./assets/src/framework/sdk/Launcher');
require('./assets/src/framework/tools/ComponentHelper');
require('./assets/src/framework/tools/MkUtils');
require('./assets/src/framework/tools/SortUtils');
require('./assets/src/framework/tools/Utils');
require('./assets/src/framework/ui/BasePanel');
require('./assets/src/framework/ui/BaseTips');
require('./assets/src/framework/ui/BaseUIEffect');
require('./assets/src/framework/ui/BaseView');
require('./assets/src/framework/ui/UIState');
require('./assets/src/framework/ui/effect/FadeBackUIEffect');
require('./assets/src/framework/ui/effect/FadeUIEffect');
require('./assets/src/framework/ui/effect/ScaleBackUIEffect');
require('./assets/src/framework/ui/effect/ScaleUIEffect');
require('./assets/src/framework/ui/effect/TopBackUIEffect');
require('./assets/src/framework/ui/effect/TopUIEffect');
require('./assets/src/game/Barrage/BarrageLayer');
require('./assets/src/game/Barrage/BarragePrefab');
require('./assets/src/game/Loading');
require('./assets/src/game/Main');
require('./assets/src/game/com/AlertTips');
require('./assets/src/game/consts/EventConst');
require('./assets/src/game/consts/Global');
require('./assets/src/game/consts/LoaderType');
require('./assets/src/game/consts/StorageType');
require('./assets/src/game/consts/UIType');
require('./assets/src/game/datas/PlayerData');
require('./assets/src/game/datas/PlayerModel');
require('./assets/src/game/manager/ConfigManager');
require('./assets/src/game/manager/EffectManager');
require('./assets/src/game/testloading');
require('./assets/src/game/view/main/GameMainView');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/testloading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db293zSVbZDPLAVKryiINfI', 'testloading');
// src/game/testloading.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.test = [];
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.JsonAsset)
    ], NewClass.prototype, "test", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS90ZXN0bG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFCQztRQWxCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHdkIsVUFBSSxHQUFrQixFQUFFLENBQUM7O1FBV3pCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ0U7SUFUUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICBAcHJvcGVydHkoY2MuSnNvbkFzc2V0KVxuICAgIHRlc3Q6Y2MuSnNvbkFzc2V0W10gPSBbXTtcblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/ScaleBackUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b76cbWgUNlAy5uyyE3oYdy/', 'ScaleBackUIEffect');
// src/framework/ui/effect/ScaleBackUIEffect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUIEffect_1 = require("../BaseUIEffect");
var ScaleBackUIEffect = /** @class */ (function (_super) {
    __extends(ScaleBackUIEffect, _super);
    function ScaleBackUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleBackUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        node.scale = 1;
        node.runAction(cc.sequence(cc.scaleTo(time, 0, 0).easing(cc.easeBackIn()), cc.callFunc(function () { if (!!handler) {
            handler.call(node);
        } })));
    };
    return ScaleBackUIEffect;
}(BaseUIEffect_1.default));
exports.default = ScaleBackUIEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9TY2FsZUJhY2tVSUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFHM0M7SUFBK0MscUNBQVk7SUFBM0Q7O0lBT0EsQ0FBQztJQU5HLCtCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsSUFBVyxFQUFDLE1BQWMsRUFBQyxPQUFlO1FBRXZELElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBTSxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUM7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEksQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FQQSxBQU9DLENBUDhDLHNCQUFZLEdBTzFEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSUVmZmVjdCBmcm9tIFwiLi4vQmFzZVVJRWZmZWN0XCI7XG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vLi4vYmFzZS9IYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlQmFja1VJRWZmZWN0IGV4dGVuZHMgQmFzZVVJRWZmZWN0e1xuICAgIHJ1bihub2RlOmNjLk5vZGUsdGltZTpudW1iZXIsaXNPcGVuOmJvb2xlYW4saGFuZGxlcjpIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgdGltZSA9IHRpbWUgfHwgdGhpcy50aW1lO1xuICAgICAgICBub2RlLnNjYWxlID0gMTtcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbyh0aW1lLDAsMCkuZWFzaW5nKGNjLmVhc2VCYWNrSW4oKSksY2MuY2FsbEZ1bmMoKCk9PnsgaWYoISFoYW5kbGVyKXsgaGFuZGxlci5jYWxsKG5vZGUpOyB9IH0pKSk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b6a119F4BLSoaDf4DFGUF2', 'Global');
// src/game/consts/Global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.JSON_SERVER_URL = "";
    Global.JSON_FILE = "allConf";
    return Global;
}());
exports.default = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQUdBLENBQUM7SUFGaUIsc0JBQWUsR0FBRyxFQUFFLENBQUM7SUFDckIsZ0JBQVMsR0FBRyxTQUFTLENBQUM7SUFDeEMsYUFBQztDQUhELEFBR0MsSUFBQTtrQkFIb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbCB7XG4gICAgcHVibGljIHN0YXRpYyBKU09OX1NFUlZFUl9VUkwgPSBcIlwiO1xuICAgIHB1YmxpYyBzdGF0aWMgSlNPTl9GSUxFID0gXCJhbGxDb25mXCI7XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/com/AlertTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '707acqvQdNCVYVyaN4vhOfy', 'AlertTips');
// src/game/com/AlertTips.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AlertTips = /** @class */ (function (_super) {
    __extends(AlertTips, _super);
    function AlertTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.label1 = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    AlertTips.prototype.start = function () {
    };
    AlertTips.prototype.setTips = function (tips) {
        this.label.string = tips;
    };
    AlertTips.prototype.getTips = function () {
        return this.label.string;
    };
    __decorate([
        property(cc.Label)
    ], AlertTips.prototype, "label", void 0);
    __decorate([
        property(cc.Label)
    ], AlertTips.prototype, "label1", void 0);
    AlertTips = __decorate([
        ccclass
    ], AlertTips);
    return AlertTips;
}(cc.Component));
exports.default = AlertTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb20vQWxlcnRUaXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBbUJDO1FBaEJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFhLElBQUksQ0FBQzs7UUFheEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFaRyxlQUFlO0lBRWYseUJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwyQkFBTyxHQUFQLFVBQVEsSUFBWTtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDNUIsQ0FBQztJQUNELDJCQUFPLEdBQVA7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFkRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ0s7SUFMUCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBbUI3QjtJQUFELGdCQUFDO0NBbkJELEFBbUJDLENBbkJzQyxFQUFFLENBQUMsU0FBUyxHQW1CbEQ7a0JBbkJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydFRpcHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsMTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICBzZXRUaXBzKHRpcHM6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRpcHNcbiAgICB9XG4gICAgZ2V0VGlwcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWwuc3RyaW5nO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/datas/PlayerData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '941b0Q87mVFr5fhAL82Kc/6', 'PlayerData');
// src/game/datas/PlayerData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageHelper_1 = require("../../framework/helper/StorageHelper");
var Utils_1 = require("../../framework/tools/Utils");
var StorageType_1 = require("../consts/StorageType");
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        this.level = 1;
    }
    PlayerData.prototype.saveData = function () {
        var sdata = {
            level: this.level,
        };
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.gameData, sdata);
    };
    PlayerData.prototype.setIsAuto = function (autoCfg) {
        StorageHelper_1.default.saveJsonByKey(StorageType_1.default.isAutoSell, autoCfg);
    };
    PlayerData.prototype.getData = function () {
        var data = StorageHelper_1.default.getJsonByKey(StorageType_1.default.gameData);
        cc.log("debug:缓存数据：", data);
        if (data) {
            this.level = Utils_1.default.isUndefined(data.level) ? this.level : data.level;
        }
        else {
            this.level = 1;
        }
    };
    PlayerData.prototype.resetData = function () {
        this.saveData();
    };
    return PlayerData;
}());
exports.default = PlayerData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9kYXRhcy9QbGF5ZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLHFEQUFnRDtBQUNoRCxxREFBZ0Q7QUFNaEQ7SUFBQTtRQUNXLFVBQUssR0FBVyxDQUFDLENBQUM7SUEwQjdCLENBQUM7SUF4QkcsNkJBQVEsR0FBUjtRQUNJLElBQUksS0FBSyxHQUFHO1lBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCLENBQUM7UUFDRix1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLE9BQU87UUFDYix1QkFBYSxDQUFDLGFBQWEsQ0FBQyxxQkFBVyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxHQUFHLHVCQUFhLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3hFO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTCxpQkFBQztBQUFELENBM0JBLEFBMkJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmFnZUhlbHBlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2hlbHBlci9TdG9yYWdlSGVscGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay90b29scy9VdGlsc1wiO1xuaW1wb3J0IFN0b3JhZ2VUeXBlIGZyb20gXCIuLi9jb25zdHMvU3RvcmFnZVR5cGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVSUNvbmZpZyB7XG4gICAgc2tpbklkOiBudW1iZXIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckRhdGEge1xuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyID0gMTtcblxuICAgIHNhdmVEYXRhKCkge1xuICAgICAgICBsZXQgc2RhdGEgPSB7XG4gICAgICAgICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgICAgfTtcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmdhbWVEYXRhLCBzZGF0YSk7XG4gICAgfVxuXG4gICAgc2V0SXNBdXRvKGF1dG9DZmcpIHtcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlSnNvbkJ5S2V5KFN0b3JhZ2VUeXBlLmlzQXV0b1NlbGwsIGF1dG9DZmcpO1xuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0gU3RvcmFnZUhlbHBlci5nZXRKc29uQnlLZXkoU3RvcmFnZVR5cGUuZ2FtZURhdGEpO1xuICAgICAgICBjYy5sb2coXCJkZWJ1ZzrnvJPlrZjmlbDmja7vvJpcIiwgZGF0YSk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsID0gVXRpbHMuaXNVbmRlZmluZWQoZGF0YS5sZXZlbCkgPyB0aGlzLmxldmVsIDogZGF0YS5sZXZlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXREYXRhKCkge1xuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9Mb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCxvRUFBK0Q7QUFDL0Qsc0RBQWlEO0FBQ2pELGtEQUE2QztBQUM3QywwQ0FBcUM7QUFDckMsbURBQThDO0FBQzlDLHlEQUFvRDtBQUVwRCxFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztBQUNyQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRDQztRQXpDQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBeUNwQyxDQUFDO0lBdkNDLHdCQUFNLEdBQU47UUFBQSxpQkFrQkM7UUFqQkMsb0JBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixnQkFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsdUJBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLEtBQUssRUFBRSxNQUFNO1lBQzVDLElBQUksSUFBSSxDQUFDLFVBQVU7Z0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNqRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBS2IsSUFBSSxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxRQUFRLENBQUM7UUFDL0IsdUJBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUc7WUFDNUQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDRSxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sMEJBQVEsR0FBaEI7UUFDRSwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCxpQ0FBZSxHQUFmO1FBQ0UscUJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUMsVUFBQyxLQUFLLEVBQUMsS0FBSztRQUU1QyxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNTO0lBSGYsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTRDM0I7SUFBRCxjQUFDO0NBNUNELEFBNENDLENBNUNvQyxFQUFFLENBQUMsU0FBUyxHQTRDaEQ7a0JBNUNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2ZyYW1ld29yay9iYXNlL0hhbmRsZXJcIjtcbmltcG9ydCBMb2FkZXJNYW5hZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHNcIjtcbmltcG9ydCBMb2FkZXJUeXBlIGZyb20gXCIuL2NvbnN0cy9Mb2FkZXJUeXBlXCI7XG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuL2NvbnN0cy9VSVR5cGVcIjtcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4vbWFuYWdlci9Db25maWdNYW5hZ2VyXCI7XG5cbmNjLm1hY3JvLkNMRUFOVVBfSU1BR0VfQ0FDSEUgPSBmYWxzZTtcbmNjLmR5bmFtaWNBdGxhc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICBsb2FkaW5nQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIExvYWRlclR5cGUuaW5pdENvbmZpZygpO1xuICAgIFVJVHlwZS5pbml0KCk7XG4gICAgQ29uZmlnTWFuYWdlci5pbml0KCk7XG4gICAgdGhpcy5sb2FkaW5nQmFyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSAwO1xuICAgIGxldCBiYWNrdXAgPSBjYy5sb2FkZXIub25Qcm9ncmVzcztcbiAgICBjYy5sb2FkZXIub25Qcm9ncmVzcyA9IGZ1bmN0aW9uIChjb3VudCwgYW1vdW50KSB7XG4gICAgICBpZiAodGhpcy5sb2FkaW5nQmFyKSB0aGlzLmxvYWRpbmdCYXIucHJvZ3Jlc3MgPSBjb3VudCAvIGFtb3VudDtcbiAgICB9LmJpbmQodGhpcyk7XG5cblxuXG5cbiAgICBsZXQgZ2FtZVZpZXcgPSBVSVR5cGUuZ2FtZVZpZXc7XG4gICAgTG9hZGVyTWFuYWdlci5sb2FkZXJQcmVmYWIoZ2FtZVZpZXcudW5hbWUsIEhhbmRsZXIuY3JlYXRlKChyZXMpID0+IHtcbiAgICAgIHRoaXMuaW5pdERhdGFTdWNjZXNzKCk7XG4gICAgfSwgdGhpcyksIGdhbWVWaWV3Lm1uYW1lKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIE1LVXRpbHMuc2V0U3RhdHNDb2xvcihjYy5Db2xvci5XSElURSk7XG4gICAgY2MuZ2FtZS5zZXRGcmFtZVJhdGUoNjApO1xuICAgIHRoaXMuaW5pdERhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERhdGEoKSB7XG4gICAgLy8gUGxheWVyTW9kZWwubG9hZERhdGEoKTtcbiAgICB0aGlzLmluaXREYXRhU3VjY2VzcygpXG4gIH1cblxuICBpbml0RGF0YVN1Y2Nlc3MoKSB7XG4gICAgUGxheWVyTW9kZWwubG9hZERhdGEoKTtcbiAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluXCIpO1xuICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcIm1haW5cIiwoY291bnQsdG90YWwpPT57XG5cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwi5p+l55yL5YiG6L6o546HXCIsIEpTT04uc3RyaW5naWZ5KGNjLndpblNpemUpKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/manager/ConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0da7dg7/WBIx6aLD65qJ7hv', 'ConfigManager');
// src/game/manager/ConfigManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderManager_1 = require("../../framework/manager/LoaderManager");
var Handler_1 = require("../../framework/base/Handler");
var Global_1 = require("../consts/Global");
var ConfigManager = /** @class */ (function () {
    function ConfigManager() {
        this.gameJson = {}; //单个游戏json配置
        this.jsonLoadNum = 0;
    }
    ConfigManager.instance = function () {
        if (!this._instance) {
            this._instance = new ConfigManager();
        }
        return this._instance;
    };
    ConfigManager.prototype.init = function () {
        var _this = this;
        LoaderManager_1.default.loaderJson('allConf', Handler_1.default.create(function (res) {
            _this.allConfig = res.json;
            console.log("配置文件：", _this.allConfig);
            // todo: send event 
        }, this), 'config');
    };
    ConfigManager.prototype.loadGameZipJson = function (name, jsonStringArray, callback, isLocalJson, path, isRetry) {
        var _this = this;
        if (this.gameJson[name]) {
            callback();
            return;
        }
        if (isLocalJson) {
            this.jsonLoadNum = jsonStringArray.length;
            // you now have every files contained in the loaded zip
            for (var i = 0; i < jsonStringArray.length; i++) {
                LoaderManager_1.default.loaderJson(jsonStringArray[i], Handler_1.default.create(function (res) {
                    _this.jsonLoadNum--;
                    if (_this.jsonLoadNum == 0) {
                        callback();
                    }
                }, this), 'config');
            }
        }
        else {
            var fullUrl = Global_1.default.JSON_SERVER_URL + name + ".zip";
            if (path) {
                fullUrl = path + name + ".zip";
            }
        }
    };
    return ConfigManager;
}());
exports.default = ConfigManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tYW5hZ2VyL0NvbmZpZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFDbEUsd0RBQW1EO0FBQ25ELDJDQUFzQztBQUV0QztJQUFBO1FBSVMsYUFBUSxHQUFXLEVBQUUsQ0FBQyxDQUFBLFlBQVk7UUFDekMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7SUF5Q2xCLENBQUM7SUF2Q1Esc0JBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUFBLGlCQU1DO1FBTEMsdUJBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRztZQUNyRCxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLG9CQUFvQjtRQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLHVDQUFlLEdBQXRCLFVBQXVCLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBa0IsRUFBRSxXQUFXLEVBQUUsSUFBYSxFQUFFLE9BQWlCO1FBQS9HLGlCQXVCQztRQXRCQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsUUFBUSxFQUFFLENBQUE7WUFDVixPQUFNO1NBQ1A7UUFFRCxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQTtZQUN6Qyx1REFBdUQ7WUFDdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9DLHVCQUFhLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUc7b0JBQzlELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtvQkFDbEIsSUFBSSxLQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTt3QkFDekIsUUFBUSxFQUFFLENBQUE7cUJBQ1g7Z0JBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLElBQUksT0FBTyxHQUFHLGdCQUFNLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUE7WUFDcEQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFBO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQTlDQSxBQThDQyxJQUFBO0FBRUQsa0JBQWUsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYWRlck1hbmFnZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL0xvYWRlck1hbmFnZXJcIjtcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvYmFzZS9IYW5kbGVyXCI7XG5pbXBvcnQgR2xvYmFsIGZyb20gXCIuLi9jb25zdHMvR2xvYmFsXCI7XG5cbmNsYXNzIENvbmZpZ01hbmFnZXIge1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IENvbmZpZ01hbmFnZXI7XG5cbiAgcHJpdmF0ZSBhbGxDb25maWc6IGFueTtcbiAgcHVibGljIGdhbWVKc29uOiBvYmplY3QgPSB7fTsvL+WNleS4qua4uOaIj2pzb27phY3nva5cbiAganNvbkxvYWROdW0gPSAwO1xuXG4gIHN0YXRpYyBpbnN0YW5jZSgpIHtcbiAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBDb25maWdNYW5hZ2VyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgTG9hZGVyTWFuYWdlci5sb2FkZXJKc29uKCdhbGxDb25mJywgSGFuZGxlci5jcmVhdGUoKHJlcykgPT4ge1xuICAgICAgdGhpcy5hbGxDb25maWcgPSByZXMuanNvbjtcbiAgICAgIGNvbnNvbGUubG9nKFwi6YWN572u5paH5Lu277yaXCIsIHRoaXMuYWxsQ29uZmlnKTtcbiAgICAgIC8vIHRvZG86IHNlbmQgZXZlbnQgXG4gICAgfSwgdGhpcyksICdjb25maWcnKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkR2FtZVppcEpzb24obmFtZSwganNvblN0cmluZ0FycmF5LCBjYWxsYmFjazogRnVuY3Rpb24sIGlzTG9jYWxKc29uLCBwYXRoPzogU3RyaW5nLCBpc1JldHJ5PzogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmdhbWVKc29uW25hbWVdKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNMb2NhbEpzb24pIHtcbiAgICAgIHRoaXMuanNvbkxvYWROdW0gPSBqc29uU3RyaW5nQXJyYXkubGVuZ3RoXG4gICAgICAvLyB5b3Ugbm93IGhhdmUgZXZlcnkgZmlsZXMgY29udGFpbmVkIGluIHRoZSBsb2FkZWQgemlwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25TdHJpbmdBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBMb2FkZXJNYW5hZ2VyLmxvYWRlckpzb24oanNvblN0cmluZ0FycmF5W2ldLCBIYW5kbGVyLmNyZWF0ZSgocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5qc29uTG9hZE51bS0tXG4gICAgICAgICAgaWYgKHRoaXMuanNvbkxvYWROdW0gPT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyksICdjb25maWcnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZnVsbFVybCA9IEdsb2JhbC5KU09OX1NFUlZFUl9VUkwgKyBuYW1lICsgXCIuemlwXCJcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIGZ1bGxVcmwgPSBwYXRoICsgbmFtZSArIFwiLnppcFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ01hbmFnZXIuaW5zdGFuY2UoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/helper/JSHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e2f1iCU59Jt72wei/BIooU', 'JSHelper');
// src/framework/helper/JSHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicManager_1 = require("../manager/MusicManager");
var JSHelper = /** @class */ (function () {
    function JSHelper() {
    }
    JSHelper.playClickEffect = function () {
        MusicManager_1.default.playEffect("click");
    };
    JSHelper.playEffect = function (eName, loop, isSign) {
        if (loop === void 0) { loop = false; }
        if (isSign === void 0) { isSign = false; }
        MusicManager_1.default.playEffect(eName, loop, isSign);
    };
    JSHelper.stopEffect = function (eName) {
        MusicManager_1.default.stopEffect(eName);
    };
    JSHelper.playMisuc = function (mName) {
        MusicManager_1.default.playMusic(mName, true);
    };
    JSHelper.setPauseMusic = function () {
        MusicManager_1.default.setPauseMusic();
    };
    JSHelper.setResumeMusic = function () {
        MusicManager_1.default.setResumeMusic();
    };
    JSHelper.getLastMusic = function () {
        return MusicManager_1.default.getLastMusic();
    };
    return JSHelper;
}());
;
exports.default = JSHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2hlbHBlci9KU0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUVuRDtJQUFBO0lBc0JBLENBQUM7SUFyQlUsd0JBQWUsR0FBdEI7UUFDSSxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ00sbUJBQVUsR0FBakIsVUFBa0IsS0FBSyxFQUFDLElBQVksRUFBQyxNQUFjO1FBQTNCLHFCQUFBLEVBQUEsWUFBWTtRQUFDLHVCQUFBLEVBQUEsY0FBYztRQUMvQyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTSxtQkFBVSxHQUFqQixVQUFrQixLQUFLO1FBQ25CLHNCQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTSxrQkFBUyxHQUFoQixVQUFpQixLQUFLO1FBQ2xCLHNCQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ00sc0JBQWEsR0FBcEI7UUFDSSxzQkFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTSx1QkFBYyxHQUFyQjtRQUNJLHNCQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNNLHFCQUFZLEdBQW5CO1FBQ0ksT0FBTyxzQkFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQUFBLENBQUM7QUFDRixrQkFBZSxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXVzaWNNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL011c2ljTWFuYWdlclwiO1xuXG5jbGFzcyBKU0hlbHBlciB7XG4gICAgc3RhdGljIHBsYXlDbGlja0VmZmVjdCgpe1xuICAgICAgICBNdXNpY01hbmFnZXIucGxheUVmZmVjdChcImNsaWNrXCIpO1xuICAgIH1cbiAgICBzdGF0aWMgcGxheUVmZmVjdChlTmFtZSxsb29wID0gZmFsc2UsaXNTaWduID0gZmFsc2Upe1xuICAgICAgICBNdXNpY01hbmFnZXIucGxheUVmZmVjdChlTmFtZSxsb29wLGlzU2lnbik7XG4gICAgfVxuICAgIHN0YXRpYyBzdG9wRWZmZWN0KGVOYW1lKXtcbiAgICAgICAgTXVzaWNNYW5hZ2VyLnN0b3BFZmZlY3QoZU5hbWUpO1xuICAgIH1cbiAgICBzdGF0aWMgcGxheU1pc3VjKG1OYW1lKXtcbiAgICAgICAgTXVzaWNNYW5hZ2VyLnBsYXlNdXNpYyhtTmFtZSx0cnVlKTtcbiAgICB9XG4gICAgc3RhdGljIHNldFBhdXNlTXVzaWMoKXtcbiAgICAgICAgTXVzaWNNYW5hZ2VyLnNldFBhdXNlTXVzaWMoKTtcbiAgICB9XG4gICAgc3RhdGljIHNldFJlc3VtZU11c2ljKCl7XG4gICAgICAgIE11c2ljTWFuYWdlci5zZXRSZXN1bWVNdXNpYygpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TGFzdE11c2ljKCl7XG4gICAgICAgIHJldHVybiBNdXNpY01hbmFnZXIuZ2V0TGFzdE11c2ljKCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEpTSGVscGVyOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/loader/GroupLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7a25GfRSRMb4u8vnG7Ytpi', 'GroupLoader');
// src/framework/loader/GroupLoader.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GroupData_1 = require("./GroupData");
var LoaderManager_1 = require("../manager/LoaderManager");
var GroupLoader = /** @class */ (function () {
    function GroupLoader() {
        this.groupArr = []; //组的队列
    }
    GroupLoader.prototype.addGroup = function (arr, handler) {
        if (!!arr) {
            var data = this._getGroupData();
            var ghandler = data.getCompletetHandler();
            data.resources = arr;
            data.handler = handler;
            for (var index = 0; index < arr.length; index++) {
                var element = arr[index];
                LoaderManager_1.default.loadRes(element.fileName, element.type, ghandler, element.moduleName);
            }
        }
        else {
            cc.error('add group data error');
        }
    };
    GroupLoader.prototype._getGroupData = function () {
        for (var index = 0; index < this.groupArr.length; index++) {
            var element = this.groupArr[index];
            if (!element.isActive) {
                element.isActive = true;
                return element;
            }
        }
        var data = new GroupData_1.default();
        this.groupArr.push(data);
        return data;
    };
    return GroupLoader;
}());
exports.default = GroupLoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Hcm91cExvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1RDtBQUN2RCwwREFBcUQ7QUFHckQ7SUFBQTtRQUNZLGFBQVEsR0FBb0IsRUFBRSxDQUFDLENBQUEsTUFBTTtJQTZCakQsQ0FBQztJQTNCRyw4QkFBUSxHQUFSLFVBQVMsR0FBd0IsRUFBQyxPQUFlO1FBQzdDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUNQLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNoQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsSUFBTSxPQUFPLEdBQWlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsdUJBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDcEY7U0FDSjthQUFNO1lBQ0gsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdkQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE9BQU8sT0FBTyxDQUFDO2FBQ2xCO1NBQ0o7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdyb3VwRGF0YSwgeyBHcm91cEZpbGVEYXRhIH0gZnJvbSBcIi4vR3JvdXBEYXRhXCI7XG5pbXBvcnQgTG9hZGVyTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwTG9hZGVyICB7XG4gICAgcHJpdmF0ZSBncm91cEFycjpBcnJheTxHcm91cERhdGE+ID0gW107Ly/nu4TnmoTpmJ/liJdcbiAgICBcbiAgICBhZGRHcm91cChhcnI6QXJyYXk8R3JvdXBGaWxlRGF0YT4saGFuZGxlcjpIYW5kbGVyKXtcbiAgICAgICAgaWYgKCEhYXJyKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX2dldEdyb3VwRGF0YSgpO1xuICAgICAgICAgICAgbGV0IGdoYW5kbGVyID0gZGF0YS5nZXRDb21wbGV0ZXRIYW5kbGVyKCk7XG4gICAgICAgICAgICBkYXRhLnJlc291cmNlcyA9IGFycjtcbiAgICAgICAgICAgIGRhdGEuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6R3JvdXBGaWxlRGF0YSA9IGFycltpbmRleF07XG4gICAgICAgICAgICAgICAgTG9hZGVyTWFuYWdlci5sb2FkUmVzKGVsZW1lbnQuZmlsZU5hbWUsZWxlbWVudC50eXBlLGdoYW5kbGVyLGVsZW1lbnQubW9kdWxlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcignYWRkIGdyb3VwIGRhdGEgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRHcm91cERhdGEoKXtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZ3JvdXBBcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5ncm91cEFycltpbmRleF07XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IG5ldyBHcm91cERhdGEoKTtcbiAgICAgICAgdGhpcy5ncm91cEFyci5wdXNoKGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/GamePoolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72e0cNmW0dEKaTfaU0wYfBI', 'GamePoolManager');
// src/framework/manager/GamePoolManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasePoolObject_1 = require("../base/BasePoolObject");
//游戏对象池 TODO 缓存依附对象的唯一id,重新class 自增id
var GamePoolManager = /** @class */ (function () {
    function GamePoolManager() {
        this.poolDic = {};
        this.pobjectCaches = []; //实例prefab对象的缓存
        this.objectIndex = 0;
        this.prefabIndex = 0; //prefab的index
        this.prePrefabName = null; //上一个prefab的名称
    }
    GamePoolManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new GamePoolManager();
        }
        return this._instance;
    };
    //注册的时候 target 支持 class 和 string两种类型
    GamePoolManager.prototype.instance = function (prefab, target) {
        if (!!prefab) {
            var targetId = this._getTargetKey(target);
            if (!targetId) {
                cc.error('实例Prefab没有设置target或者target不是class-->' + prefab.name);
                return null;
            }
            //优化 查询速度
            if (prefab.name != this.prePrefabName) {
                this.prefabIndex = 0;
                this.prePrefabName = prefab.name;
            }
            if (!this.poolDic.hasOwnProperty(prefab.name)) {
                this.poolDic[prefab.name] = [];
            }
            var arr = this.poolDic[prefab.name];
            for (var index = this.prefabIndex; index < arr.length; index++) {
                if (!arr[index].isActive && cc.isValid(arr[index].prefab)) {
                    arr[index].setTarget(targetId);
                    this.prefabIndex = index;
                    return arr[index].prefab;
                }
            }
            var object = this._getObject();
            var instance = cc.instantiate(prefab);
            targetId = this._getTargetKey(instance);
            object.setData(prefab.name, instance, targetId);
            arr.push(object);
            this.prefabIndex = arr.length - 1;
            return instance;
        }
        return null;
    };
    /**
     * 放回对象身上的某个实例
     * @param target
     * @param node
     */
    GamePoolManager.prototype.putBackItem = function (target, node) {
        if (!cc.isValid(node)) {
            return;
        }
        var elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                if (element.isSameNode(node.uuid)) {
                    element.reset();
                }
            }
        }
    };
    /**
     * 回收所有对应的prefab名
     * @param name
     */
    GamePoolManager.prototype.putBackByName = function (name) {
        if (this.poolDic.hasOwnProperty(name)) {
            this.prefabIndex = 0;
            var elements = this.poolDic[name];
            if (!!elements) {
                for (var index = 0; index < elements.length; index++) {
                    var element = elements[index];
                    element.reset();
                }
            }
        }
    };
    GamePoolManager.prototype.putBackByTarget = function (target) {
        var elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                element.reset();
            }
        }
    };
    GamePoolManager.prototype.clearByTarget = function (target) {
        var elements = this._getObjectByTarget(target);
        this.prefabIndex = 0;
        if (!!elements) {
            for (var index = 0; index < elements.length; index++) {
                var element = elements[index];
                element.clear();
            }
            elements.length = 0;
            this._resetObjectIndex();
        }
    };
    //name 是prefab的名称
    GamePoolManager.prototype.clearByName = function (name) {
        if (this.poolDic.hasOwnProperty(name)) {
            this.prefabIndex = 0;
            var elements = this.poolDic[name];
            if (!!elements) {
                for (var index = 0; index < elements.length; index++) {
                    var element = elements[index];
                    element.clear();
                }
                elements.length = 0;
                this._resetObjectIndex();
            }
        }
    };
    /**
     *
     * @param target
     */
    GamePoolManager.prototype._getObjectByTarget = function (target) {
        if (!!target) {
            var results = [];
            var classID = this._getTargetKey(target);
            if (!!classID) {
                for (var key in this.poolDic) {
                    var elements = this.poolDic[key];
                    if (!!elements && elements.length > 0) {
                        for (var index = 0; index < elements.length; index++) {
                            var element = elements[index];
                            var id = element.target;
                            if (classID === id) {
                                results.push(element);
                            }
                        }
                    }
                }
                return results;
            }
            else {
                cc.error('GamePoolHelper 放回 或者清理时 target 不合法');
            }
            return null;
        }
        return null;
    };
    //获得需要缓存对象的key
    GamePoolManager.prototype._getTargetKey = function (target) {
        var targetId = null;
        if (!!target) {
            var isStr = cc.js.isString(target);
            if (isStr) {
                targetId = target;
            }
            else {
                if (!!target.uuid) {
                    targetId = target.uuid;
                }
                else {
                    targetId = cc.js._getClassId(target);
                }
            }
        }
        else {
            cc.error('GamePoolHelper中缓存对象不存在');
        }
        return targetId;
    };
    //重置壳子 可用的索引
    GamePoolManager.prototype._resetObjectIndex = function () {
        for (var index = 0; index < this.pobjectCaches.length; index++) {
            var element = this.pobjectCaches[index];
            if (!element.isObjectActive) {
                this.objectIndex = index;
                break;
            }
        }
    };
    GamePoolManager.prototype._getObject = function () {
        for (var index = this.objectIndex; index < this.pobjectCaches.length; index++) {
            var element = this.pobjectCaches[index];
            if (!element.isObjectActive) {
                this.objectIndex = index;
                return element;
            }
        }
        var obj = new BasePoolObject_1.default();
        this.pobjectCaches.push(obj);
        this.objectIndex = this.pobjectCaches.length - 1;
        return obj;
    };
    GamePoolManager.prototype.initRolePool = function (prefab) {
        this.rolePool = new cc.NodePool();
        var initCount = 5;
        for (var i = 0; i < initCount; ++i) {
            var role = cc.instantiate(prefab); // 创建节点
            this.rolePool.put(role); // 通过 put 接口放入对象池
        }
    };
    GamePoolManager.prototype.createRole = function (prefab) {
        var role = null;
        if (this.rolePool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
            role = this.rolePool.get();
        }
        else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
            role = cc.instantiate(prefab);
        }
        return role;
    };
    GamePoolManager.prototype.putRole = function (role) {
        this.rolePool.put(role);
    };
    return GamePoolManager;
}());
exports.default = GamePoolManager.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvR2FtZVBvb2xNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBRXBELHFDQUFxQztBQUNyQztJQUFBO1FBQ1ksWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDLENBQUEsZUFBZTtRQUNsQyxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUN4QixnQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFFLGNBQWM7UUFDeEMsa0JBQWEsR0FBVyxJQUFJLENBQUMsQ0FBQSxjQUFjO0lBbU92RCxDQUFDO0lBaE9VLDJCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsa0NBQVEsR0FBUixVQUFTLE1BQU0sRUFBRSxNQUFNO1FBQ25CLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNWLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVELFNBQVM7WUFDVCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNwQztZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FB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QyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSwyQkFBMkI7WUFDdkQsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDOUI7YUFBTSxFQUFFLG1EQUFtRDtZQUN4RCxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCxzQkFBQztBQUFELENBeE9BLEFBd09DLElBQUE7QUFFRCxrQkFBZSxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVBvb2xPYmplY3QgZnJvbSBcIi4uL2Jhc2UvQmFzZVBvb2xPYmplY3RcIjtcblxuLy/muLjmiI/lr7nosaHmsaAgVE9ETyDnvJPlrZjkvp3pmYTlr7nosaHnmoTllK/kuIBpZCzph43mlrBjbGFzcyDoh6rlop5pZFxuY2xhc3MgR2FtZVBvb2xNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHBvb2xEaWMgPSB7fTtcbiAgICBwcml2YXRlIHBvYmplY3RDYWNoZXMgPSBbXTsvL+WunuS+i3ByZWZhYuWvueixoeeahOe8k+WtmFxuICAgIHByaXZhdGUgb2JqZWN0SW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwcmVmYWJJbmRleDogbnVtYmVyID0gMDsgIC8vcHJlZmFi55qEaW5kZXhcbiAgICBwcml2YXRlIHByZVByZWZhYk5hbWU6IHN0cmluZyA9IG51bGw7Ly/kuIrkuIDkuKpwcmVmYWLnmoTlkI3np7BcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdhbWVQb29sTWFuYWdlcjtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHYW1lUG9vbE1hbmFnZXIge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lUG9vbE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy/ms6jlhoznmoTml7blgJkgdGFyZ2V0IOaUr+aMgSBjbGFzcyDlkowgc3RyaW5n5Lik56eN57G75Z6LXG4gICAgaW5zdGFuY2UocHJlZmFiLCB0YXJnZXQpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKCEhcHJlZmFiKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0SWQgPSB0aGlzLl9nZXRUYXJnZXRLZXkodGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcign5a6e5L6LUHJlZmFi5rKh5pyJ6K6+572udGFyZ2V05oiW6ICFdGFyZ2V05LiN5pivY2xhc3MtLT4nICsgcHJlZmFiLm5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL+S8mOWMliDmn6Xor6LpgJ/luqZcbiAgICAgICAgICAgIGlmIChwcmVmYWIubmFtZSAhPSB0aGlzLnByZVByZWZhYk5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZWZhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZVByZWZhYk5hbWUgPSBwcmVmYWIubmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvb2xEaWMuaGFzT3duUHJvcGVydHkocHJlZmFiLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb29sRGljW3ByZWZhYi5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5wb29sRGljW3ByZWZhYi5uYW1lXTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5wcmVmYWJJbmRleDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhcnJbaW5kZXhdLmlzQWN0aXZlICYmIGNjLmlzVmFsaWQoYXJyW2luZGV4XS5wcmVmYWIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycltpbmRleF0uc2V0VGFyZ2V0KHRhcmdldElkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmYWJJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyW2luZGV4XS5wcmVmYWI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHRoaXMuX2dldE9iamVjdCgpO1xuICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRhcmdldElkID0gdGhpcy5fZ2V0VGFyZ2V0S2V5KGluc3RhbmNlKTtcbiAgICAgICAgICAgIG9iamVjdC5zZXREYXRhKHByZWZhYi5uYW1lLCBpbnN0YW5jZSwgdGFyZ2V0SWQpO1xuICAgICAgICAgICAgYXJyLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSBhcnIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlL7lm57lr7nosaHouqvkuIrnmoTmn5DkuKrlrp7kvotcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgICAqIEBwYXJhbSBub2RlIFxuICAgICAqL1xuICAgIHB1dEJhY2tJdGVtKHRhcmdldCwgbm9kZSkge1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLl9nZXRPYmplY3RCeVRhcmdldCh0YXJnZXQpO1xuICAgICAgICB0aGlzLnByZWZhYkluZGV4ID0gMDtcbiAgICAgICAgaWYgKCEhZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzU2FtZU5vZGUobm9kZS51dWlkKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zue5pS25omA5pyJ5a+55bqU55qEcHJlZmFi5ZCNXG4gICAgICogQHBhcmFtIG5hbWUgXG4gICAgICovXG4gICAgcHV0QmFja0J5TmFtZShuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnBvb2xEaWMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSAwO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5wb29sRGljW25hbWVdO1xuICAgICAgICAgICAgaWYgKCEhZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXRCYWNrQnlUYXJnZXQodGFyZ2V0KSB7XG4gICAgICAgIGxldCBlbGVtZW50cyA9IHRoaXMuX2dldE9iamVjdEJ5VGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIHRoaXMucHJlZmFiSW5kZXggPSAwO1xuICAgICAgICBpZiAoISFlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJCeVRhcmdldCh0YXJnZXQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5fZ2V0T2JqZWN0QnlUYXJnZXQodGFyZ2V0KTtcbiAgICAgICAgdGhpcy5wcmVmYWJJbmRleCA9IDA7XG4gICAgICAgIGlmICghIWVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdGhpcy5fcmVzZXRPYmplY3RJbmRleCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9uYW1lIOaYr3ByZWZhYueahOWQjeensFxuICAgIGNsZWFyQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMucG9vbERpYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmYWJJbmRleCA9IDA7XG4gICAgICAgICAgICBsZXQgZWxlbWVudHMgPSB0aGlzLnBvb2xEaWNbbmFtZV07XG4gICAgICAgICAgICBpZiAoISFlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0T2JqZWN0SW5kZXgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgICAqL1xuICAgIHByaXZhdGUgX2dldE9iamVjdEJ5VGFyZ2V0KHRhcmdldCkge1xuICAgICAgICBpZiAoISF0YXJnZXQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgICAgICBsZXQgY2xhc3NJRCA9IHRoaXMuX2dldFRhcmdldEtleSh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCEhY2xhc3NJRCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucG9vbERpYykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMucG9vbERpY1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISFlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGVsZW1lbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc0lEID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKCdHYW1lUG9vbEhlbHBlciDmlL7lm54g5oiW6ICF5riF55CG5pe2IHRhcmdldCDkuI3lkIjms5UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy/ojrflvpfpnIDopoHnvJPlrZjlr7nosaHnmoRrZXlcbiAgICBwcml2YXRlIF9nZXRUYXJnZXRLZXkodGFyZ2V0KSB7XG4gICAgICAgIGxldCB0YXJnZXRJZCA9IG51bGw7XG4gICAgICAgIGlmICghIXRhcmdldCkge1xuICAgICAgICAgICAgbGV0IGlzU3RyID0gY2MuanMuaXNTdHJpbmcodGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChpc1N0cikge1xuICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGFyZ2V0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghIXRhcmdldC51dWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGFyZ2V0LnV1aWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQgPSBjYy5qcy5fZ2V0Q2xhc3NJZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmVycm9yKCdHYW1lUG9vbEhlbHBlcuS4ree8k+WtmOWvueixoeS4jeWtmOWcqCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXRJZDtcbiAgICB9XG5cbiAgICAvL+mHjee9ruWjs+WtkCDlj6/nlKjnmoTntKLlvJVcbiAgICBwcml2YXRlIF9yZXNldE9iamVjdEluZGV4KCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5wb2JqZWN0Q2FjaGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9iamVjdENhY2hlc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQuaXNPYmplY3RBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRPYmplY3QoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5vYmplY3RJbmRleDsgaW5kZXggPCB0aGlzLnBvYmplY3RDYWNoZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wb2JqZWN0Q2FjaGVzW2luZGV4XTtcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pc09iamVjdEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgb2JqID0gbmV3IEJhc2VQb29sT2JqZWN0KCk7XG4gICAgICAgIHRoaXMucG9iamVjdENhY2hlcy5wdXNoKG9iaik7XG4gICAgICAgIHRoaXMub2JqZWN0SW5kZXggPSB0aGlzLnBvYmplY3RDYWNoZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgXG5cbiAgICByb2xlUG9vbDogY2MuTm9kZVBvb2w7XG4gICAgaW5pdFJvbGVQb29sKHByZWZhYikge1xuICAgICAgICB0aGlzLnJvbGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XG4gICAgICAgIGxldCBpbml0Q291bnQgPSA1O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcm9sZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7IC8vIOWIm+W7uuiKgueCuVxuICAgICAgICAgICAgdGhpcy5yb2xlUG9vbC5wdXQocm9sZSk7IC8vIOmAmui/hyBwdXQg5o6l5Y+j5pS+5YWl5a+56LGh5rGgXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNyZWF0ZVJvbGUocHJlZmFiKSB7XG4gICAgICAgIGxldCByb2xlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucm9sZVBvb2wuc2l6ZSgpID4gMCkgeyAvLyDpgJrov4cgc2l6ZSDmjqXlj6PliKTmlq3lr7nosaHmsaDkuK3mmK/lkKbmnInnqbrpl7LnmoTlr7nosaFcbiAgICAgICAgICAgIHJvbGUgPSB0aGlzLnJvbGVQb29sLmdldCgpO1xuICAgICAgICB9IGVsc2UgeyAvLyDlpoLmnpzmsqHmnInnqbrpl7Llr7nosaHvvIzkuZ/lsLHmmK/lr7nosaHmsaDkuK3lpIfnlKjlr7nosaHkuI3lpJ/ml7bvvIzmiJHku6zlsLHnlKggY2MuaW5zdGFudGlhdGUg6YeN5paw5Yib5bu6XG4gICAgICAgICAgICByb2xlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9sZTtcbiAgICB9XG5cbiAgICBwdXRSb2xlKHJvbGUpIHtcbiAgICAgICAgdGhpcy5yb2xlUG9vbC5wdXQocm9sZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lUG9vbE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/base/BasePoolObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '474adf4xBFL37H8Il57DG0R', 'BasePoolObject');
// src/framework/base/BasePoolObject.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//prefab实例的引用壳子 主要用于复用
var BasePoolObject = /** @class */ (function () {
    function BasePoolObject() {
        this.isActive = false; //当前prefab是否可用
        this.isObjectActive = false; //该壳子是否可用
        this.pName = null; //prefab name
        this.target = null; //该实例的prefab 使用在的目标对象
        this.prefab = null;
    }
    /**
     *
     * @param name 名称
     * @param instance 对象池实例
     * @param target 绑定到目标对象的唯一标识
     */
    BasePoolObject.prototype.setData = function (name, instance, target) {
        this.isActive = true;
        this.isObjectActive = true;
        this.target = target;
        this.prefab = instance;
        this.pName = name;
    };
    BasePoolObject.prototype.setTarget = function (target) {
        this.isActive = true;
        this.isObjectActive = true;
        this.target = target;
    };
    //重置表示prefab还能被使用
    BasePoolObject.prototype.reset = function () {
        this.isActive = false;
        this.target = null;
    };
    BasePoolObject.prototype.isSameNode = function (uuid) {
        if (cc.isValid(this.prefab)) {
            return this.prefab.uuid === uuid;
        }
        return false;
    };
    //prefab不能被用，但是壳子还可以被使用
    BasePoolObject.prototype.clear = function () {
        this.isActive = false;
        this.pName = null; //prefab name
        this.target = null;
        this.isObjectActive = false;
        if (cc.isValid(this.prefab)) {
            this.prefab.destroy();
        }
        this.prefab = null;
    };
    return BasePoolObject;
}());
exports.default = BasePoolObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2Jhc2UvQmFzZVBvb2xPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDdEI7SUFBQTtRQUVXLGFBQVEsR0FBVyxLQUFLLENBQUMsQ0FBQSxjQUFjO1FBQ3ZDLG1CQUFjLEdBQVcsS0FBSyxDQUFDLENBQUEsU0FBUztRQUN4QyxVQUFLLEdBQVUsSUFBSSxDQUFDLENBQUEsYUFBYTtRQUNqQyxXQUFNLEdBQU8sSUFBSSxDQUFDLENBQUEscUJBQXFCO1FBQ3ZDLFdBQU0sR0FBVyxJQUFJLENBQUM7SUErQ2pDLENBQUM7SUE3Q0c7Ozs7O09BS0c7SUFDSCxnQ0FBTyxHQUFQLFVBQVEsSUFBVyxFQUFDLFFBQWdCLEVBQUMsTUFBb0I7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxNQUFvQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsaUJBQWlCO0lBQ2pCLDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQUk7UUFFWCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUF1QjtJQUN2Qiw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQSxhQUFhO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxxQkFBQztBQUFELENBckRBLEFBcURDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL3ByZWZhYuWunuS+i+eahOW8leeUqOWjs+WtkCDkuLvopoHnlKjkuo7lpI3nlKhcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VQb29sT2JqZWN0XG57XG4gICAgcHVibGljIGlzQWN0aXZlOmJvb2xlYW4gPSBmYWxzZTsvL+W9k+WJjXByZWZhYuaYr+WQpuWPr+eUqFxuICAgIHB1YmxpYyBpc09iamVjdEFjdGl2ZTpib29sZWFuID0gZmFsc2U7Ly/or6Xlo7PlrZDmmK/lkKblj6/nlKhcbiAgICBwdWJsaWMgcE5hbWU6c3RyaW5nID0gbnVsbDsvL3ByZWZhYiBuYW1lXG4gICAgcHVibGljIHRhcmdldDphbnkgPSBudWxsOy8v6K+l5a6e5L6L55qEcHJlZmFiIOS9v+eUqOWcqOeahOebruagh+WvueixoVxuICAgIHB1YmxpYyBwcmVmYWI6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbmFtZSDlkI3np7BcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2Ug5a+56LGh5rGg5a6e5L6LXG4gICAgICogQHBhcmFtIHRhcmdldCDnu5HlrprliLDnm67moIflr7nosaHnmoTllK/kuIDmoIfor4ZcbiAgICAgKi9cbiAgICBzZXREYXRhKG5hbWU6c3RyaW5nLGluc3RhbmNlOmNjLk5vZGUsdGFyZ2V0Om51bWJlcnxzdHJpbmcpe1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc09iamVjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLnByZWZhYiA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLnBOYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXRUYXJnZXQodGFyZ2V0Om51bWJlcnxzdHJpbmcpe1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc09iamVjdEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIC8v6YeN572u6KGo56S6cHJlZmFi6L+Y6IO96KKr5L2/55SoXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaXNTYW1lTm9kZSh1dWlkKVxuICAgIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5wcmVmYWIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVmYWIudXVpZCA9PT0gdXVpZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9wcmVmYWLkuI3og73ooqvnlKjvvIzkvYbmmK/lo7PlrZDov5jlj6/ku6Xooqvkvb/nlKhcbiAgICBjbGVhcigpe1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucE5hbWUgPSBudWxsOy8vcHJlZmFiIG5hbWVcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuICAgICAgICB0aGlzLmlzT2JqZWN0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMucHJlZmFiKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVmYWIuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmFiID0gbnVsbDtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/message/EventDispath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd75abv3bmxBpojLjaznh2B3', 'EventDispath');
// src/framework/message/EventDispath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSHelper_1 = require("../helper/JSHelper");
var EventDispath = /** @class */ (function () {
    function EventDispath() {
        this.nodeList = {};
        this.touchList = {};
        this.NotificationCenter = new cc.Node();
    }
    EventDispath.getInstance = function () {
        if (!this.singleton) {
            this.singleton = new EventDispath();
        }
        return this.singleton;
    };
    EventDispath.prototype.addEventListener = function (type, callback, target) {
        this.NotificationCenter.on(type, callback, target);
    };
    EventDispath.prototype.send = function (eventID, arg1) {
        this.NotificationCenter.emit(eventID, arg1);
    };
    EventDispath.prototype.removeByEvent = function (type, callback, target) {
        this.NotificationCenter.off(type, callback, target);
    };
    EventDispath.prototype.removeEventListeners = function (target) {
        this.NotificationCenter.targetOff(target);
        if (this.nodeList[target]) {
            var arr = this.nodeList[target];
            for (var i = 0; i < arr.length; i++) {
                arr[i].targetOff(target);
            }
        }
    };
    /**
     * 按钮点击缩放
     * @param btn 触摸的node
     * @param callback 点击回调
     * @param thisObj 作用域
     * @param touchIndex 触发时机，1开始时，2结束时
     * @param icon 缩放效果node
     * @param scaleX
     * @param scaleY
     */
    EventDispath.prototype.on = function (btn, callback, thisObj, delayTime, isAction, touchIndex, icon, scaleX, scaleY) {
        if (delayTime === void 0) { delayTime = 0.5; }
        if (isAction === void 0) { isAction = true; }
        if (touchIndex === void 0) { touchIndex = 2; }
        if (!icon) {
            icon = btn;
        }
        var preScaleX = btn.scaleX;
        var preScaleY = btn.scaleY;
        if (scaleX) {
            preScaleX = scaleX;
        }
        if (scaleY) {
            preScaleY = scaleY;
        }
        if (!this.nodeList[thisObj]) {
            this.nodeList[thisObj] = [];
        }
        this.nodeList[thisObj].push(btn);
        this.touchList[btn.uuid] = 0;
        var self = this;
        btn.on(cc.Node.EventType.TOUCH_START, function (e) {
            if (self.touchList[icon.uuid] != 0)
                return;
            self.touchList[icon.uuid] = 1;
            JSHelper_1.default.playClickEffect();
            if (isAction)
                icon.runAction(cc.scaleTo(0.1, preScaleX * 1.1, preScaleY * 1.1));
            // icon.setScale(preScaleX*1.1, preScaleY*1.1)
            if (callback && touchIndex == 1)
                callback.call(thisObj, e);
        }, thisObj);
        btn.on(cc.Node.EventType.TOUCH_END, function (e) {
            if (self.touchList[icon.uuid] == 2)
                return;
            self.touchList[icon.uuid] = 2;
            if (isAction) {
                icon.runAction(cc.sequence(cc.scaleTo(0.1, preScaleX, preScaleY), cc.delayTime(delayTime), cc.callFunc(function () {
                    self.touchList[icon.uuid] = 0;
                })));
            }
            else {
                self.touchList[icon.uuid] = 0;
            }
            // icon.setScale(preScaleX, preScaleY)
            if (callback && touchIndex == 2) {
                callback.call(thisObj, e);
            }
        }, thisObj);
        // btn.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
        //     icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY))
        //     // if (callback && touchIndex == 2) callback.call(thisObj, e);
        //     // icon.setScale(preScaleX, preScaleY)
        // }, thisObj)
    };
    return EventDispath;
}());
exports.default = EventDispath.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnREaXNwYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBUTFDO0lBSUk7UUFGQSxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVYLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBR2Esd0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixJQUFZLEVBQUUsUUFBK0IsRUFBRSxNQUFNO1FBQ2xFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLE9BQU8sRUFBRSxJQUFVO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBWSxFQUFFLFFBQStCLEVBQUUsTUFBTTtRQUMvRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDJDQUFvQixHQUFwQixVQUFxQixNQUFNO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFF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Q0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ1A7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRWpDO1lBQ0Qsc0NBQXNDO1lBQ3RDLElBQUksUUFBUSxJQUFJLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRVgsd0RBQXdEO1FBQ3hELDREQUE0RDtRQUM1RCxxRUFBcUU7UUFDckUsNkNBQTZDO1FBQzdDLGNBQWM7SUFDbEIsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtBQUNELGtCQUFlLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU0hlbHBlciBmcm9tIFwiLi4vaGVscGVyL0pTSGVscGVyXCI7XG5pbXBvcnQgTUtVdGlscyBmcm9tIFwiLi4vdG9vbHMvTWtVdGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIHRvdWNoRXZlbnRDZmcge1xuICAgIHRoaXNPYmplY3Q6IGFueSxcbiAgICBub2RlTGlzdDogY2MuTm9kZVtdXG59XG5cbmNsYXNzIEV2ZW50RGlzcGF0aCB7XG4gICAgTm90aWZpY2F0aW9uQ2VudGVyOiBjYy5Ob2RlO1xuICAgIG5vZGVMaXN0ID0ge307XG4gICAgdG91Y2hMaXN0ID0ge307XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuTm90aWZpY2F0aW9uQ2VudGVyID0gbmV3IGNjLk5vZGUoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBzaW5nbGV0b246IEV2ZW50RGlzcGF0aDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRXZlbnREaXNwYXRoIHtcbiAgICAgICAgaWYgKCF0aGlzLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgdGhpcy5zaW5nbGV0b24gPSBuZXcgRXZlbnREaXNwYXRoKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBjYWxsYmFjazogKG5vdGljZTogYW55KSA9PiB2b2lkLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5Ob3RpZmljYXRpb25DZW50ZXIub24odHlwZSwgY2FsbGJhY2ssIHRhcmdldCk7XG4gICAgfVxuXG4gICAgc2VuZChldmVudElELCBhcmcxPzogYW55KSB7XG4gICAgICAgIHRoaXMuTm90aWZpY2F0aW9uQ2VudGVyLmVtaXQoZXZlbnRJRCwgYXJnMSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQnlFdmVudCh0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiAobm90aWNlOiBhbnkpID0+IHZvaWQsIHRhcmdldCkge1xuICAgICAgICB0aGlzLk5vdGlmaWNhdGlvbkNlbnRlci5vZmYodHlwZSwgY2FsbGJhY2ssIHRhcmdldCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuTm90aWZpY2F0aW9uQ2VudGVyLnRhcmdldE9mZih0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5ub2RlTGlzdFt0YXJnZXRdKSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5ub2RlTGlzdFt0YXJnZXRdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0udGFyZ2V0T2ZmKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5oyJ6ZKu54K55Ye757yp5pS+XG4gICAgICogQHBhcmFtIGJ0biDop6bmkbjnmoRub2RlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIOeCueWHu+Wbnuiwg1xuICAgICAqIEBwYXJhbSB0aGlzT2JqIOS9nOeUqOWfn1xuICAgICAqIEBwYXJhbSB0b3VjaEluZGV4IOinpuWPkeaXtuacuu+8jDHlvIDlp4vml7bvvIwy57uT5p2f5pe2XG4gICAgICogQHBhcmFtIGljb24g57yp5pS+5pWI5p6cbm9kZVxuICAgICAqIEBwYXJhbSBzY2FsZVggXG4gICAgICogQHBhcmFtIHNjYWxlWSBcbiAgICAgKi9cbiAgICBvbihidG46IGNjLk5vZGUsIGNhbGxiYWNrOiAobm90aWNlOiBhbnkpID0+IHZvaWQsIHRoaXNPYmosIGRlbGF5VGltZSA9IDAuNSwgaXNBY3Rpb24gPSB0cnVlLCB0b3VjaEluZGV4ID0gMiwgaWNvbj86IGFueSwgc2NhbGVYPzogbnVtYmVyLCBzY2FsZVk/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgICAgICBpY29uID0gYnRuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJlU2NhbGVYID0gYnRuLnNjYWxlWFxuICAgICAgICBsZXQgcHJlU2NhbGVZID0gYnRuLnNjYWxlWVxuXG4gICAgICAgIGlmIChzY2FsZVgpIHtcbiAgICAgICAgICAgIHByZVNjYWxlWCA9IHNjYWxlWDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY2FsZVkpIHtcbiAgICAgICAgICAgIHByZVNjYWxlWSA9IHNjYWxlWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubm9kZUxpc3RbdGhpc09ial0pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3RbdGhpc09ial0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVMaXN0W3RoaXNPYmpdLnB1c2goYnRuKTtcblxuICAgICAgICB0aGlzLnRvdWNoTGlzdFtidG4udXVpZF0gPSAwO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnRvdWNoTGlzdFtpY29uLnV1aWRdICE9IDApIHJldHVybjtcbiAgICAgICAgICAgIHNlbGYudG91Y2hMaXN0W2ljb24udXVpZF0gPSAxO1xuICAgICAgICAgICAgSlNIZWxwZXIucGxheUNsaWNrRWZmZWN0KCk7XG4gICAgICAgICAgICBpZiAoaXNBY3Rpb24pIGljb24ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLCBwcmVTY2FsZVggKiAxLjEsIHByZVNjYWxlWSAqIDEuMSkpXG4gICAgICAgICAgICAvLyBpY29uLnNldFNjYWxlKHByZVNjYWxlWCoxLjEsIHByZVNjYWxlWSoxLjEpXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdG91Y2hJbmRleCA9PSAxKSBjYWxsYmFjay5jYWxsKHRoaXNPYmosIGUpO1xuICAgICAgICB9LCB0aGlzT2JqKVxuXG4gICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi50b3VjaExpc3RbaWNvbi51dWlkXSA9PSAyKSByZXR1cm47XG4gICAgICAgICAgICBzZWxmLnRvdWNoTGlzdFtpY29uLnV1aWRdID0gMjtcbiAgICAgICAgICAgIGlmIChpc0FjdGlvbikge1xuICAgICAgICAgICAgICAgIGljb24ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4xLCBwcmVTY2FsZVgsIHByZVNjYWxlWSksIGNjLmRlbGF5VGltZShkZWxheVRpbWUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG91Y2hMaXN0W2ljb24udXVpZF0gPSAwO1xuICAgICAgICAgICAgICAgIH0pKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi50b3VjaExpc3RbaWNvbi51dWlkXSA9IDA7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGljb24uc2V0U2NhbGUocHJlU2NhbGVYLCBwcmVTY2FsZVkpXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdG91Y2hJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzT2JqLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpc09iailcblxuICAgICAgICAvLyBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyAgICAgaWNvbi5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIHByZVNjYWxlWCwgcHJlU2NhbGVZKSlcbiAgICAgICAgLy8gICAgIC8vIGlmIChjYWxsYmFjayAmJiB0b3VjaEluZGV4ID09IDIpIGNhbGxiYWNrLmNhbGwodGhpc09iaiwgZSk7XG4gICAgICAgIC8vICAgICAvLyBpY29uLnNldFNjYWxlKHByZVNjYWxlWCwgcHJlU2NhbGVZKVxuICAgICAgICAvLyB9LCB0aGlzT2JqKVxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgRXZlbnREaXNwYXRoLmdldEluc3RhbmNlKCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/sdk/BaseSdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3dd09gCPsZKRrEVwIVWL/ao', 'BaseSdk');
// src/framework/sdk/BaseSdk.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseSdk = /** @class */ (function () {
    function BaseSdk() {
        this._basePath_android = "com.xstone.android.xsbusi.XSSdk";
        this._moudelPath_android = "com.xstone.android.xsbusi.XSBusiSdk";
        this._baseCocos = "org/cocos2dx/javascript/AppActivity";
    }
    BaseSdk.prototype.isAndroid = function () {
        return cc.sys.os == cc.sys.OS_ANDROID;
    };
    BaseSdk.prototype.isIphone = function () {
        return cc.sys.os == cc.sys.OS_IOS;
    };
    BaseSdk.prototype.systemName = function () {
        if (this.isAndroid()) {
            console.log("********************设备为Andrioid");
        }
        else if (this.isIphone()) {
            console.log("********************设备为Iphone");
        }
    };
    return BaseSdk;
}());
exports.default = BaseSdk;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Nkay9CYXNlU2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFJSTtRQUhVLHNCQUFpQixHQUFZLGlDQUFpQyxDQUFDO1FBQy9ELHdCQUFtQixHQUFZLHFDQUFxQyxDQUFDO1FBQ3JFLGVBQVUsR0FBWSxxQ0FBcUMsQ0FBQztJQUV0RSxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUNJLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDMUMsQ0FBQztJQUNELDBCQUFRLEdBQVI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3RDLENBQUM7SUFDRCw0QkFBVSxHQUFWO1FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ2xEO2FBQUssSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBQ0Qsa0JBQWUsT0FBTyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmFzZVNka3tcbiAgICBwcm90ZWN0ZWQgX2Jhc2VQYXRoX2FuZHJvaWQgOiBzdHJpbmcgPSBcImNvbS54c3RvbmUuYW5kcm9pZC54c2J1c2kuWFNTZGtcIjtcbiAgICBwcm90ZWN0ZWQgX21vdWRlbFBhdGhfYW5kcm9pZCA6IHN0cmluZyA9IFwiY29tLnhzdG9uZS5hbmRyb2lkLnhzYnVzaS5YU0J1c2lTZGtcIjtcbiAgICBwcm90ZWN0ZWQgX2Jhc2VDb2NvcyA6IHN0cmluZyA9IFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIjtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBpc0FuZHJvaWQoKXtcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRDtcbiAgICB9XG4gICAgaXNJcGhvbmUoKXtcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TO1xuICAgIH1cbiAgICBzeXN0ZW1OYW1lKCl7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKuiuvuWkh+S4ukFuZHJpb2lkXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKuiuvuWkh+S4uklwaG9uZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJhc2VTZGs7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/EventConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb45685w5lF4JSh8kV3XE+D', 'EventConst');
// src/game/consts/EventConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventConst = {
    //返回标识
    REQUEST_SUCCESS: 0,
    //合成消息redUIType
    FLOATLAYER_REWARD: 1,
    COMPLETE_REWARD: 2,
    GUEST_REWARD: 3,
    BUFFER_REWARD: 4,
    BUFFER_RWEARD_FAIL: 0,
    TASK_CLAIMOVER: 1,
    TASK_CANCLAIM: 2,
    //动作状态
    ANIMAL_SPAWN: 0,
    ANIMAL_COMPOSE: 1,
    ANIMAL_BEREBORN: 2,
    //游戏视图状态
    VIEW_STATE_NORMAL: 0,
    VIEW_STATE_COMPOSE: 1,
};
exports.default = EventConst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvRXZlbnRDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksVUFBVSxHQUFHO0lBQ1QsTUFBTTtJQUNOLGVBQWUsRUFBRyxDQUFDO0lBRW5CLGVBQWU7SUFDZixpQkFBaUIsRUFBRyxDQUFDO0lBQ3JCLGVBQWUsRUFBRyxDQUFDO0lBQ25CLFlBQVksRUFBRyxDQUFDO0lBQ2hCLGFBQWEsRUFBRyxDQUFDO0lBRWpCLGtCQUFrQixFQUFHLENBQUM7SUFFdEIsY0FBYyxFQUFHLENBQUM7SUFDbEIsYUFBYSxFQUFHLENBQUM7SUFFakIsTUFBTTtJQUNOLFlBQVksRUFBRyxDQUFDO0lBQ2hCLGNBQWMsRUFBRyxDQUFDO0lBQ2xCLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUIsRUFBRyxDQUFDO0lBQ3JCLGtCQUFrQixFQUFHLENBQUM7Q0FDN0IsQ0FBQztBQUNGLGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFdmVudENvbnN0ID0ge1xuICAgICAgICAvL+i/lOWbnuagh+ivhlxuICAgICAgICBSRVFVRVNUX1NVQ0NFU1MgOiAwLFxuXG4gICAgICAgIC8v5ZCI5oiQ5raI5oGvcmVkVUlUeXBlXG4gICAgICAgIEZMT0FUTEFZRVJfUkVXQVJEIDogMSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5rWu5bGC5aWW5YqxXG4gICAgICAgIENPTVBMRVRFX1JFV0FSRCA6IDIsICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Zev5YWz57qi5YyFXG4gICAgICAgIEdVRVNUX1JFV0FSRCA6IDMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5paw5omL57qi5YyFXG4gICAgICAgIEJVRkZFUl9SRVdBUkQgOiA0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57yT5Yay5Yy66Ze057qi5YyFXG5cbiAgICAgICAgQlVGRkVSX1JXRUFSRF9GQUlMIDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgLy/nvJPlhrLljLrpl7TnuqLljIXph5Hpop3kuLowXG5cbiAgICAgICAgVEFTS19DTEFJTU9WRVIgOiAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lt7Lnu4/pooblj5ZcbiAgICAgICAgVEFTS19DQU5DTEFJTSA6IDIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lj6/pooblj5YgICBcbiAgICAgICAgXG4gICAgICAgIC8v5Yqo5L2c54q25oCBXG4gICAgICAgIEFOSU1BTF9TUEFXTiA6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Ye655Sf5Yqo5L2cXG4gICAgICAgIEFOSU1BTF9DT01QT1NFIDogMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5ZCI5oiQ5Yqo5L2cXG4gICAgICAgIEFOSU1BTF9CRVJFQk9STiA6MiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6YeN55Sf5Yqo5L2cXG4gICAgICAgIC8v5ri45oiP6KeG5Zu+54q25oCBXG4gICAgICAgIFZJRVdfU1RBVEVfTk9STUFMIDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KeG5Zu+5q2j5bi454q25oCBXG4gICAgICAgIFZJRVdfU1RBVEVfQ09NUE9TRSA6IDEsICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KeG5Zu+5pS26ZuG54q25oCBXG59O1xuZXhwb3J0IGRlZmF1bHQgRXZlbnRDb25zdDsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/tools/MkUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb314S0VRBDNq1MwS/BUHoe', 'MkUtils');
// src/framework/tools/MkUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MKUtils = /** @class */ (function () {
    function MKUtils() {
    }
    MKUtils.isNative = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID);
    };
    MKUtils.isIOS = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_IOS);
    };
    MKUtils.isWechatGame = function () {
        return (cc.sys.platform == cc.sys.WECHAT_GAME);
    };
    MKUtils.isAndroid = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_ANDROID);
    };
    MKUtils.findNodeByName = function (root, name) {
        if (root) {
            var widget = root.getChildByName(name);
            if (widget) {
                return widget;
            }
            else {
                var children = root.children;
                for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                    var c = children_1[_i];
                    widget = MKUtils.findNodeByName(c, name);
                    if (widget) {
                        return widget;
                    }
                }
                return null;
            }
        }
        return null;
    };
    //获取屏幕显示区域尺寸
    MKUtils.getShowSize = function () {
        var canvasSize = cc.view.getCanvasSize();
        var winSize = cc.winSize;
        var showSize = cc.size(winSize.width, winSize.height);
        var canvasPro = canvasSize.width / canvasSize.height;
        var winPro = winSize.width / winSize.height;
        if (canvasPro > winPro) {
            showSize.width = winSize.height * canvasPro;
        }
        else {
            showSize.height = winSize.width / canvasPro;
        }
        return showSize;
    };
    //获取显示区域和设计尺寸的宽高比例
    MKUtils.getShowScale = function () {
        var showSize = MKUtils.getShowSize();
        var winSize = cc.winSize;
        return cc.v2(showSize.width / winSize.width, showSize.height / winSize.height);
    };
    MKUtils.playScaleAni = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.scale;
        parent.scale = preScale * 0.3;
        parent.runAction(cc.scaleTo(0.2, preScale * 1).easing(cc.easeBackOut()));
    };
    MKUtils.playScaleAni2 = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.scale;
        parent.scale = preScale * 0.3;
        parent.runAction(cc.sequence(cc.scaleTo(0.3, preScale * 1.3), cc.scaleTo(0.3, preScale * 1).easing(cc.easeBackInOut())));
    };
    MKUtils.playScaleAniBig = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.scale;
        parent.scale = preScale * 0.3;
        var scale1 = cc.scaleTo(0.3, preScale * 1.3);
        var scale2 = cc.scaleTo(0.1, preScale * 1);
        parent.runAction(cc.sequence(scale1, scale2));
    };
    MKUtils.playScaleAniSmallToNormal = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.scale;
        parent.scale = 0.1;
        var scale1 = cc.scaleTo(0.3, preScale * 1.1);
        var scale2 = cc.scaleTo(0.2, preScale * 1);
        parent.runAction(cc.sequence(scale1, scale2));
    };
    MKUtils.playBlackBgAct = function (blackBg, time) {
        if (!blackBg) {
            return;
        }
        if (time == undefined) {
            time = 0.2;
        }
        var preOpacity = blackBg.opacity;
        blackBg.opacity = 0;
        blackBg.runAction(cc.fadeTo(time, preOpacity));
    };
    MKUtils.playDialogActBig = function (blackBg, baseNode) {
        MKUtils.playBlackBgAct(blackBg, 0.3);
        MKUtils.playScaleAniBig(baseNode);
    };
    MKUtils.playDialogAct = function (blackBg, baseNode) {
        MKUtils.playBlackBgAct(blackBg);
        MKUtils.playScaleAni(baseNode);
    };
    MKUtils.playDialogAct2 = function (blackBg, baseNode) {
        MKUtils.playBlackBgAct(blackBg);
        MKUtils.playScaleAni2(baseNode);
    };
    MKUtils.btnScaleAct = function (btn, scale) {
        if (!btn) {
            return;
        }
        btn.stopAllActions();
        var preScale = scale || btn.scale;
        btn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.2, 1.13 * preScale), cc.scaleTo(0.2, 1 * preScale), cc.delayTime(0.6))));
    };
    MKUtils.btnScaleAct1 = function (btn, scale) {
        if (!btn) {
            return;
        }
        var preScale = scale || btn.scale;
        btn.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.5), cc.scaleTo(0.18, 1.15 * preScale), cc.scaleTo(0.18, preScale), cc.scaleTo(0.18, 1.15 * preScale), cc.scaleTo(0.18, preScale), cc.delayTime(0.5))));
    };
    //按钮点击缩放，btn为触摸的node，icon为缩放效果node
    MKUtils.addTouch = function (btn, icon, scaleX, scaleY) {
        if (!icon) {
            icon = btn;
        }
        var preScaleX = btn.scaleX;
        var preScaleY = btn.scaleY;
        if (scaleX) {
            preScaleX = scaleX;
        }
        if (scaleY) {
            preScaleY = scaleY;
        }
        btn.on(cc.Node.EventType.TOUCH_START, function (e) {
            icon.runAction(cc.scaleTo(0.1, preScaleX * 1.1, preScaleY * 1.1));
            // icon.setScale(preScaleX*1.1, preScaleY*1.1)
        }.bind(btn), btn);
        btn.on(cc.Node.EventType.TOUCH_END, function (e) {
            icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY));
            // icon.setScale(preScaleX, preScaleY)
        }.bind(btn), btn);
        btn.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
            icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY));
            // icon.setScale(preScaleX, preScaleY)
        }.bind(btn), btn);
    };
    // 名字最大长度截取
    MKUtils.nameMaxCut = function (input, maxLen) {
        var output = "";
        var strlen = 0;
        for (var i = 0; i < input.length; i++) {
            var ch = input[i];
            if (ch.charCodeAt(0) > 255) //如果是汉字，则字符串长度加2
             {
                strlen += 2;
            }
            else {
                strlen++;
            }
            if (strlen <= maxLen) {
                output += ch;
            }
        }
        if (strlen > maxLen) {
            return output += "...";
        }
        return output;
    };
    MKUtils.alertTips = function (str, showTime, closeAct, tipType) {
        var isShow = MKUtils.currentTipsList.filter(function (value, index) {
            return value === str;
        });
        if (isShow.length > 0)
            return;
        if (!showTime) {
            showTime = 1.2;
        }
        var prefabUrl = "prefab/common/AlertTips";
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            MKUtils.currentTipsList.push(str);
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                return;
            }
            if (!(loadedResource instanceof cc.Prefab)) {
                cc.log('你载入的不是预制资源!');
                return;
            }
            var prefab = cc.instantiate(loadedResource);
            prefab.getComponent("AlertTips").setTips(str, tipType);
            cc.director.getScene().addChild(prefab, 9999);
            prefab.setPosition(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2 - 100));
            if (!closeAct) {
                MKUtils.playScaleAni(prefab);
            }
            prefab.runAction(cc.sequence(cc.delayTime(showTime), cc.spawn(cc.moveBy(1, 0, 400), cc.fadeOut(1)), cc.callFunc(function () {
                var str = prefab.getComponent("AlertTips").getTips();
                var idx = -1;
                MKUtils.currentTipsList.filter(function (value, index) {
                    if (value === str)
                        idx = index;
                });
                if (idx >= 0)
                    MKUtils.currentTipsList.splice(idx, 1);
                prefab.removeFromParent();
            })));
        });
    };
    //获取当前系统时间戳(秒)
    MKUtils.getCurOsTime = function () {
        var curTime = new Date();
        return Math.floor(curTime.getTime() / 1000);
    };
    MKUtils.getCurOsMillisecond = function () {
        var curTime = new Date();
        return curTime.getTime();
    };
    //生成n-m随机数  包括n和m
    MKUtils.randomNM = function (n, m) {
        return n + Math.floor(Math.random() * (m - n + 1));
    };
    //生成n-m随机数  包括n和m：浮点数
    MKUtils.randomNMF = function (n, m) {
        return n + Math.random() * (m - n);
    };
    //适配不同版本
    MKUtils.compareVersion = function (v1, v2) {
        v1 = v1.split('.');
        v2 = v2.split('.');
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            }
            else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    };
    //显示跑马灯
    MKUtils.showBroad = function (pos, id) {
        var w = MKUtils.getShowSize().width;
        var h = MKUtils.getShowSize().height;
        var prefabUrl = "public/prefabs/CommonBroad";
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            //检查资源加载
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                return;
            }
            if (!(loadedResource instanceof cc.Prefab)) {
                cc.log('你载入的不是预制资源!');
                return;
            }
            //开始实例化预制资源
            var prefab = cc.instantiate(loadedResource);
            if (pos) {
                prefab.setPosition(pos);
            }
            else {
                prefab.setPosition(cc.v2(w, h - 40));
            }
            var broadCom = prefab.getComponent("CommonBroad");
            if (broadCom) {
                if (id == 1) {
                    broadCom.showBroad(id);
                }
                else {
                    broadCom.showBroad();
                }
            }
            cc.director.getScene().addChild(prefab, 999);
        });
    };
    MKUtils.twoPointDistance = function (pos1, pos2) {
        var x1 = pos1.x; // 第一个点的横坐标
        var y1 = pos1.y; // 第一个点的纵坐标
        var x2 = pos2.x; // 第二个点的横坐标
        var y2 = pos2.y; // 第二个点的纵坐标
        var xdiff = x2 - x1; // 计算两个点的横坐标之差
        var ydiff = y2 - y1; // 计算两个点的纵坐标之差
        return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5); // 计算两点之间的距离，并将结果返回表单元素
    };
    MKUtils.loadPrefab = function (prefabUrl, successCallback, failCallback) {
        var prefab = cc.loader.getRes(prefabUrl, cc.Prefab);
        if (prefab && prefab != null) {
            if (successCallback) {
                successCallback(prefab);
            }
        }
        else {
            cc.loader.loadRes(prefabUrl, function (errorMessage, downPrefab) {
                if (errorMessage) {
                    cc.log("load " + prefabUrl + " error : " + errorMessage);
                    if (failCallback) {
                        failCallback();
                    }
                    return;
                }
                if (successCallback) {
                    successCallback(downPrefab);
                }
            }.bind(this));
        }
    };
    MKUtils.loadDir = function (frameUrl, successCallback, failCallback, type) {
        if (type === void 0) { type = cc.SpriteFrame; }
        cc.resources.loadDir(frameUrl, type, function (err, assets) {
            // ...
            cc.log("===========", assets);
            // if()
        });
    };
    MKUtils.loadSpriteFrame = function (frameUrl, successCallback, failCallback) {
        var spriteFrame = cc.loader.getRes(frameUrl, cc.SpriteFrame);
        if (spriteFrame && spriteFrame != null) {
            if (successCallback) {
                successCallback(spriteFrame);
            }
        }
        else {
            cc.loader.loadRes(frameUrl, cc.SpriteFrame, function (err, downSpriteFrame) {
                if (err) {
                    cc.log("load " + frameUrl + " error : " + err);
                    if (failCallback) {
                        failCallback();
                    }
                    return;
                }
                if (successCallback) {
                    successCallback(downSpriteFrame);
                }
            }.bind(this));
        }
    };
    MKUtils.loadSoundEffect = function (url) {
        var gameloadSound = cc.sys.localStorage.getItem("gameloadSound");
        // if (gameloadSound && gameloadSound == "1") {
        //     DataManager.getInstance().setIsPlaySound(false);
        // } else {
        //     DataManager.getInstance().setIsPlaySound(true);
        // }
        // if (!DataManager.getInstance().getIsPlaySound()) {
        //     return
        // }
        var audioClip = cc.loader.getRes(url, cc.AudioClip);
        if (audioClip) {
            if (!MKUtils.effectIsOpen()) {
                return;
            }
            cc.audioEngine.play(audioClip, false, 1);
        }
        else {
            cc.loader.loadRes(url, function (errorMessage, loadedResource) {
                if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                }
                if (!(loadedResource instanceof cc.AudioClip)) {
                    cc.log('你载入的不是声音资源!');
                    return;
                }
                if (!MKUtils.effectIsOpen()) {
                    return;
                }
                cc.audioEngine.play(loadedResource, false, 1);
            }.bind(this));
        }
    };
    MKUtils.loadSoundMusic = function (url) {
        var gameloadMusic = cc.sys.localStorage.getItem("gameloadMusic");
        // if (gameloadMusic && gameloadMusic == "1") {
        //     DataManager.getInstance().setIsPlayMusic(false);
        // } else {
        //     DataManager.getInstance().setIsPlayMusic(true);
        // }
        // if (!DataManager.getInstance().getIsPlayMusic()) {
        //     return
        // }
        cc.sys.localStorage.setItem("MusicPlayUrl", url);
        var audioClip = cc.loader.getRes(url, cc.AudioClip);
        if (audioClip) {
            if (!MKUtils.musicIsOpen()) {
                return;
            }
            cc.audioEngine.playMusic(audioClip, true);
        }
        else {
            cc.loader.loadRes(url, function (errorMessage, loadedResource) {
                if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                }
                if (!(loadedResource instanceof cc.AudioClip)) {
                    cc.log('你载入的不是声音资源!');
                    return;
                }
                if (!MKUtils.musicIsOpen()) {
                    return;
                }
                cc.audioEngine.playMusic(loadedResource, true);
                // DataManager.getInstance().isNeverPlayMusic = true
            }.bind(this));
        }
    };
    MKUtils.stopMusic = function () {
        cc.sys.localStorage.setItem("MusicPlayUrl", "");
        cc.audioEngine.stopMusic();
    };
    MKUtils.setEffect = function (open) {
        cc.sys.localStorage.setItem("EffectSwitch", (open ? "1" : "0"));
        if (!open) {
            cc.audioEngine.stopAllEffects();
        }
    };
    MKUtils.effectIsOpen = function () {
        return cc.sys.localStorage.getItem("EffectSwitch") != "0";
    };
    MKUtils.setMusic = function (open) {
        if (open == MKUtils.musicIsOpen()) {
            return;
        }
        cc.sys.localStorage.setItem("MusicSwitch", (open ? "1" : "0"));
        if (!open) {
            cc.audioEngine.stopMusic();
        }
        else {
            var MusicPlayUrl = cc.sys.localStorage.getItem("MusicPlayUrl");
            if (MusicPlayUrl && MusicPlayUrl != "") {
                MKUtils.loadSoundMusic(MusicPlayUrl);
            }
        }
    };
    MKUtils.musicIsOpen = function () {
        return cc.sys.localStorage.getItem("MusicSwitch") != "0";
    };
    MKUtils.setSound = function (open) {
        MKUtils.setEffect(open);
        MKUtils.setMusic(open);
    };
    MKUtils.preLoadSoundEffect = function (prefabUrl, successCallback, failCallback) {
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                failCallback();
                return;
            }
            if (!(loadedResource instanceof cc.AudioClip)) {
                cc.log('你载入的不是声音资源!');
                return;
            }
            successCallback();
        }.bind(this));
    };
    MKUtils.loadSkeletonData = function (url, successCallback, failCallback) {
        console.log("2222222222", url);
        // let res = null;
        var res = cc.loader.getRes(url, sp.SkeletonData);
        console.log(res, "xxxxxxx", url);
        if (res && res != null) {
            if (successCallback) {
                console.log(res, "aaaaaaaaaaaaaaa", url);
                successCallback(res);
            }
        }
        else {
            console.log("33333333333333=", url);
            cc.loader.loadRes(url, sp.SkeletonData, function (errorMessage, res) {
                console.log("44444444444444", res);
                if (errorMessage) {
                    cc.log("load " + url + " error : " + errorMessage);
                    if (failCallback) {
                        failCallback();
                    }
                    return;
                }
                if (successCallback) {
                    successCallback(res);
                }
            }.bind(this));
        }
    };
    //重复利用node
    MKUtils.repeatPrefab = function (prefabUrl, parent, nodeName, successCallback, zIndex) {
        if (zIndex == undefined) {
            zIndex = 0;
        }
        var node = MKUtils.findNodeByName(parent, nodeName);
        if (node) {
            node.stopAllActions();
            node.active = true;
            node.zIndex = zIndex;
            successCallback(node);
        }
        else {
            MKUtils.loadPrefab(prefabUrl, function (prefab) {
                node = cc.instantiate(prefab);
                parent.addChild(node, zIndex, nodeName);
                successCallback(node);
            });
        }
    };
    MKUtils.repeatSpine = function (url, parent, nodeName, successCallback, zIndex) {
        if (zIndex == undefined) {
            zIndex = 0;
        }
        var node = MKUtils.findNodeByName(parent, nodeName);
        if (node) {
            node.stopAllActions();
            node.active = true;
            node.zIndex = zIndex;
            successCallback(node);
        }
        else {
            MKUtils.loadSkeletonData(url, function (spineres) {
                var node = new cc.Node();
                var spine = node.addComponent(sp.Skeleton);
                spine.skeletonData = spineres;
                spine.premultipliedAlpha = false;
                parent.addChild(node, zIndex, nodeName);
                successCallback(node);
            });
        }
    };
    // 顺时针角度
    MKUtils.getAngle = function (from, to) {
        var x = to.x - from.x;
        var y = to.y - from.y;
        var mathAngle = 90; //逆时针
        if (x == 0) {
            if (y >= 0) {
                mathAngle = 90;
            }
            else {
                mathAngle = 270;
            }
        }
        else {
            var tanAngle = Math.atan(y / x) * 180 / Math.PI;
            if (x > 0) {
                if (y >= 0) {
                    mathAngle = tanAngle;
                }
                else {
                    mathAngle = tanAngle + 360;
                }
            }
            else {
                mathAngle = tanAngle + 180;
            }
        }
        // cc.log("mathAngle = ", mathAngle)
        var cocosAngle = (360 - mathAngle + 90) % 360;
        // cc.log("cocosAngle = ", cocosAngle)
        return cocosAngle;
    };
    MKUtils.getUUID = function () {
        var UUIDStr = "game_only_uuid";
        var uuid = cc.sys.localStorage.getItem(UUIDStr);
        if (uuid) {
            return uuid;
        }
        uuid = "uuid_" + MKUtils.getCurOsTime() + "_" + MKUtils.randomNM(0, 999) + "_" + MKUtils.randomNM(0, 999);
        cc.sys.localStorage.setItem(UUIDStr, uuid);
        return uuid;
    };
    // 01:30
    MKUtils.tranTime1 = function (sec) {
        sec = Math.ceil(sec);
        if (sec <= 0) {
            return "00:00";
        }
        var min = Math.floor(sec / 60);
        var s = Math.floor((sec - min * 60));
        return "" + MKUtils.add0(min) + ":" + MKUtils.add0(s);
    };
    //1小时20分
    MKUtils.tranTime2 = function (sec) {
        if (sec <= 0) {
            return "0分";
        }
        var hour = Math.floor(sec / 3600);
        var min = Math.floor((sec - hour * 3600) / 60);
        var str = "";
        if (hour > 0) {
            str += ("" + hour + "小时");
        }
        if (min > 0) {
            str += ("" + min + "分钟");
        }
        return str;
    };
    MKUtils.add0 = function (m) {
        return m < 10 ? '0' + m : m;
    };
    MKUtils.isOneDay = function (time1, time2) {
        var data1 = new Date(time1);
        var data2 = new Date(time2);
        return data1.getFullYear() == data2.getFullYear() && data1.getMonth() == data2.getMonth() && data1.getDate() == data2.getDate();
    };
    MKUtils.tranDateHMS = function (time) {
        var date = new Date(time);
        return {
            hour: date.getHours(),
            min: date.getMinutes(),
            sec: date.getSeconds()
        };
    };
    MKUtils.changeProAct1 = function (sprite, num1, num2, time) {
        time = time || 0.5;
        var speed = (num2 - num1) / time;
        cc.director.getScheduler().unscheduleAllForTarget(sprite);
        cc.director.getScheduler().schedule(function (dt) {
            num1 = num1 + speed * dt;
            if (speed == 0 || (speed > 0 && num1 >= num2) || (speed < 0 && num1 <= num2)) {
                num1 = num2;
                cc.director.getScheduler().unscheduleAllForTarget(sprite);
            }
            sprite.fillRange = num1;
        }, sprite, 0);
    };
    MKUtils.changeNumLabelAct1 = function (label, num1, num2, callback, time) {
        time = time || 1;
        var speed = (num2 - num1) / time;
        cc.director.getScheduler().unscheduleAllForTarget(label);
        cc.director.getScheduler().schedule(function (dt) {
            num1 = num1 + speed * dt;
            if (speed == 0 || (speed > 0 && num1 >= num2) || (speed < 0 && num1 <= num2)) {
                num1 = num2;
                cc.director.getScheduler().unscheduleAllForTarget(label);
            }
            callback(num1);
        }, label, 0);
    };
    //取小数点后几位
    MKUtils.cutPoint = function (num, point) {
        var ten = Math.pow(10, Math.floor(point));
        return Math.floor(num * ten) / ten;
    };
    MKUtils.cutPointCeil = function (num, point) {
        var ten = Math.pow(10, Math.floor(point));
        return Math.ceil(num * ten) / ten;
    };
    MKUtils.tranNumOld = function (num) {
        var str = "";
        var showNum = 0;
        if (num < 0) {
            str = "" + Math.floor(num);
        }
        else if (num <= 9999) {
            str = "" + Math.round(num);
        }
        else if (num < 999500) {
            showNum = Math.round(num / 1000);
            str = "" + showNum + "A";
        }
        else if (num < 999500000) {
            showNum = Math.round(num / 1000000);
            str = "" + showNum + "B";
        }
        else if (num < 999500000000) {
            showNum = Math.round(num / 1000000000);
            str = "" + showNum + "C";
        }
        else {
            showNum = Math.round(num / 1000000000000);
            str = "" + showNum + "D";
        }
        return str;
    };
    MKUtils.tranNum = function (num, isFloat) {
        var str = "";
        var showNum = 0;
        if (num <= 0) {
            if (isFloat) {
                str = "" + num.toFixed(1);
            }
            else {
                str = "" + Math.floor(num);
            }
        }
        else if (num <= 9999) {
            if (isFloat) {
                str = "" + num.toFixed(1);
            }
            else {
                str = "" + Math.round(num);
            }
        }
        else {
            var syms = ['K', 'M', 'B', 'T', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU'];
            var maxNum = 999500;
            var cc = 1000;
            var index = -1;
            for (var i = 0; i < syms.length; i++) {
                if (num < maxNum) {
                    showNum = Math.round(num / cc);
                    str = "" + showNum + syms[i];
                    index = i;
                    break;
                }
                else {
                    maxNum *= 1000;
                    cc *= 1000;
                }
            }
            if (index == -1) {
                showNum = Math.round(num / cc);
                str = "" + showNum + "Z";
            }
        }
        return str;
    };
    MKUtils.split = function (str, s1) {
        var arr = str.split(s1);
        if (arr.length == 1 && arr[0] == "") {
            arr = [];
        }
        return arr;
    };
    MKUtils.getWorldPos = function (node) {
        return node.convertToWorldSpaceAR(cc.v2(0, 0)).add(cc.v2(-cc.winSize.width / 2, -cc.winSize.height / 2));
    };
    MKUtils.versionCompare = function (versionA, versionB) {
        var vA = versionA.split('.');
        var vB = versionB.split('.');
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) {
                continue;
            }
            else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        else {
            return 0;
        }
    };
    MKUtils.subName = function (str) {
        return (str.length > 6 ? (str.substring(0, 6) + "...") : str);
    };
    //scrollview item touchEnd
    MKUtils.itemOnTouchCall = function (node, callback) {
        var enable = false;
        node.on(cc.Node.EventType.TOUCH_START, function (e) {
            enable = true;
        });
        node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            var moveY = Math.abs(e.touch._point.y - e.touch._startPoint.y);
            if (moveY > 10) {
                enable = false;
            }
        });
        node.on(cc.Node.EventType.TOUCH_END, function (e) {
            if (enable && callback) {
                callback();
            }
        });
    };
    MKUtils.fixProgress = function (progress) {
        if (progress < 0.05) {
            return 0;
        }
        if (progress < 0.1) {
            return 0.1;
        }
        return progress;
    };
    //时间转换 天时分 传入秒
    MKUtils.sencondsFormat = function (s) {
        if (s < 0) {
            return "0天0時0分";
        }
        var d = 24 * 3600;
        var day = Math.floor(s / d);
        var hour = Math.floor((s - day * d) / 3600);
        var minute = Math.floor((s - day * d - hour * 3600) / 60);
        // const sencond = s - day * d - hour * 3600 - minute * 60;
        var format = day + "天" + hour + "時" + minute + "分";
        return format;
    };
    //js去掉所有空格 \s表示查找空格带上加好表示连续的空格
    MKUtils.trimSpace = function (str) {
        var str1 = str.replace(/\s+/g, "");
        return str1;
    };
    // 计时器
    MKUtils.setNodeDelay = function (baseNode, delayTime, callback) {
        baseNode.runAction(cc.sequence(cc.delayTime(delayTime), cc.callFunc(function () {
            if (callback) {
                callback();
            }
        }.bind(this))));
    };
    //随机数组
    MKUtils.randomSort = function (a, b) {
        return Math.random() > 0.5 ? 1 : -1;
    };
    MKUtils.setStatsColor = function (font, background) {
        if (font === void 0) { font = cc.Color.WHITE; }
        if (background === void 0) { background = cc.color(0, 0, 0, 150); }
        var profiler = cc.find('PROFILER-NODE');
        if (!profiler)
            return cc.warn('未找到统计面板节点！');
        // 文字
        profiler.children.forEach(function (node) {
            node.color = font;
            node.getComponent(cc.Label).fontSize = 18;
            // node.addComponent(cc.LabelOutline).color = cc.Color.WHITE;
        });
        // 背景
        var node = profiler.getChildByName('BACKGROUND');
        if (!node) {
            node = new cc.Node('BACKGROUND');
            profiler.addChild(node, cc.macro.MIN_ZINDEX);
            node.setContentSize(profiler.getBoundingBoxToWorld());
            node.setPosition(0, 0);
        }
        var graphics = node.getComponent(cc.Graphics) || node.addComponent(cc.Graphics);
        graphics.clear();
        graphics.rect(-5, 12.5, node.width + 10, node.height - 10);
        graphics.fillColor = background;
        graphics.fill();
    };
    /** 计算今天的0点时刻对应的时间戳（ms） */
    MKUtils.calculNowDayStartTimeStamp = function () {
        // 1. 获取当前时间戳 - 秒
        var currTs = Date.now() / 1000;
        // 2. 获取日总秒数 = 时*分*秒
        var dayTs = 24 * 60 * 60;
        // 3. 求总天数
        var dayTotal = Math.floor(currTs / dayTs);
        // 4. 求出当日开始时秒数
        var dayZeroTs = dayTotal * dayTs;
        // 5. 去掉时差(返回的是分)，需要转成秒
        var offset = new Date().getTimezoneOffset() * 60; // -480
        var curStartSecond = (dayZeroTs + offset) * 1000;
        return curStartSecond;
    };
    MKUtils.currentTipsList = [];
    return MKUtils;
}());
exports.default = MKUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBbzNCQSxDQUFDO0lBbDNCZSxnQkFBUSxHQUF0QjtRQUNFLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRWEsYUFBSyxHQUFuQjtRQUNFLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRWEsb0JBQVksR0FBMUI7UUFDRSxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRWEsaUJBQVMsR0FBdkI7UUFDRSxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVhLHNCQUFjLEdBQTVCLFVBQTZCLElBQUksRUFBRSxJQUFJO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPLE1BQU0sQ0FBQTthQUNk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LE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUUsT0FBTztRQUUxRCxJQUFJLGNBQWMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakQsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQXhxQmMsdUJBQWUsR0FBRyxFQUFFLENBQUM7SUF5cUJ0QyxjQUFDO0NBcDNCRCxBQW8zQkMsSUFBQTtrQkFwM0JvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUtVdGlscyB7XG5cbiAgcHVibGljIHN0YXRpYyBpc05hdGl2ZSgpIHtcbiAgICByZXR1cm4gKGNjLnN5cy5pc05hdGl2ZSkgJiYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSU9TKCkge1xuICAgIHJldHVybiAoY2Muc3lzLmlzTmF0aXZlKSAmJiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc1dlY2hhdEdhbWUoKSB7XG4gICAgcmV0dXJuIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNBbmRyb2lkKCkge1xuICAgIHJldHVybiAoY2Muc3lzLmlzTmF0aXZlKSAmJiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmluZE5vZGVCeU5hbWUocm9vdCwgbmFtZSkge1xuICAgIGlmIChyb290KSB7XG4gICAgICBsZXQgd2lkZ2V0ID0gcm9vdC5nZXRDaGlsZEJ5TmFtZShuYW1lKTtcbiAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgcmV0dXJuIHdpZGdldFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gcm9vdC5jaGlsZHJlblxuICAgICAgICBmb3IgKGxldCBjIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgd2lkZ2V0ID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShjLCBuYW1lKVxuICAgICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8v6I635Y+W5bGP5bmV5pi+56S65Yy65Z+f5bC65a+4XG4gIHB1YmxpYyBzdGF0aWMgZ2V0U2hvd1NpemUoKSB7XG4gICAgbGV0IGNhbnZhc1NpemUgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKVxuICAgIGxldCB3aW5TaXplID0gY2Mud2luU2l6ZVxuICAgIGxldCBzaG93U2l6ZSA9IGNjLnNpemUod2luU2l6ZS53aWR0aCwgd2luU2l6ZS5oZWlnaHQpXG4gICAgbGV0IGNhbnZhc1BybyA9IGNhbnZhc1NpemUud2lkdGggLyBjYW52YXNTaXplLmhlaWdodFxuICAgIGxldCB3aW5Qcm8gPSB3aW5TaXplLndpZHRoIC8gd2luU2l6ZS5oZWlnaHRcbiAgICBpZiAoY2FudmFzUHJvID4gd2luUHJvKSB7XG4gICAgICBzaG93U2l6ZS53aWR0aCA9IHdpblNpemUuaGVpZ2h0ICogY2FudmFzUHJvXG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dTaXplLmhlaWdodCA9IHdpblNpemUud2lkdGggLyBjYW52YXNQcm9cbiAgICB9XG4gICAgcmV0dXJuIHNob3dTaXplXG4gIH1cblxuICAvL+iOt+WPluaYvuekuuWMuuWfn+WSjOiuvuiuoeWwuuWvuOeahOWuvemrmOavlOS+i1xuICBwdWJsaWMgc3RhdGljIGdldFNob3dTY2FsZSgpIHtcbiAgICBsZXQgc2hvd1NpemUgPSBNS1V0aWxzLmdldFNob3dTaXplKClcbiAgICBsZXQgd2luU2l6ZSA9IGNjLndpblNpemU7XG4gICAgcmV0dXJuIGNjLnYyKHNob3dTaXplLndpZHRoIC8gd2luU2l6ZS53aWR0aCwgc2hvd1NpemUuaGVpZ2h0IC8gd2luU2l6ZS5oZWlnaHQpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBsYXlTY2FsZUFuaShwYXJlbnQ6IGNjLk5vZGUpIHtcbiAgICAvL+eVjOmdomxheW91dCDlsLrlr7jku444MCXliLAxMTAl5YaN5Zue5YiwMTAwJVxuICAgIGlmICghcGFyZW50KSB7IHJldHVybiB9XG4gICAgbGV0IHByZVNjYWxlID0gcGFyZW50LnNjYWxlO1xuICAgIHBhcmVudC5zY2FsZSA9IHByZVNjYWxlICogMC4zO1xuICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIHByZVNjYWxlICogMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgcGxheVNjYWxlQW5pMihwYXJlbnQ6IGNjLk5vZGUpIHtcbiAgICAvL+eVjOmdomxheW91dCDlsLrlr7jku444MCXliLAxMTAl5YaN5Zue5YiwMTAwJVxuICAgIGlmICghcGFyZW50KSB7IHJldHVybiB9XG4gICAgbGV0IHByZVNjYWxlID0gcGFyZW50LnNjYWxlO1xuICAgIHBhcmVudC5zY2FsZSA9IHByZVNjYWxlICogMC4zO1xuICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICBjYy5zY2FsZVRvKDAuMywgcHJlU2NhbGUgKiAxLjMpLFxuICAgICAgY2Muc2NhbGVUbygwLjMsIHByZVNjYWxlICogMSkuZWFzaW5nKGNjLmVhc2VCYWNrSW5PdXQoKSksXG4gICAgKSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcGxheVNjYWxlQW5pQmlnKHBhcmVudDogY2MuTm9kZSkgeyAvLyDlpKfluYXluqbnmoTnvKnmlL5cbiAgICAvL+eVjOmdomxheW91dCDlsLrlr7jku444MCXliLAxMTAl5YaN5Zue5YiwMTAwJVxuICAgIGlmICghcGFyZW50KSB7IHJldHVybiB9XG4gICAgbGV0IHByZVNjYWxlID0gcGFyZW50LnNjYWxlO1xuICAgIHBhcmVudC5zY2FsZSA9IHByZVNjYWxlICogMC4zO1xuICAgIGxldCBzY2FsZTEgPSBjYy5zY2FsZVRvKDAuMywgcHJlU2NhbGUgKiAxLjMpXG4gICAgbGV0IHNjYWxlMiA9IGNjLnNjYWxlVG8oMC4xLCBwcmVTY2FsZSAqIDEpXG4gICAgcGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZTEsIHNjYWxlMikpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBsYXlTY2FsZUFuaVNtYWxsVG9Ob3JtYWwocGFyZW50OiBjYy5Ob2RlKSB7IC8vIOWkp+W5heW6pueahOe8qeaUvlxuICAgIC8v55WM6Z2ibGF5b3V0IOWwuuWvuOS7jjgwJeWIsDExMCXlho3lm57liLAxMDAlXG4gICAgaWYgKCFwYXJlbnQpIHsgcmV0dXJuIH1cbiAgICBsZXQgcHJlU2NhbGUgPSBwYXJlbnQuc2NhbGU7XG4gICAgcGFyZW50LnNjYWxlID0gMC4xO1xuICAgIGxldCBzY2FsZTEgPSBjYy5zY2FsZVRvKDAuMywgcHJlU2NhbGUgKiAxLjEpXG4gICAgbGV0IHNjYWxlMiA9IGNjLnNjYWxlVG8oMC4yLCBwcmVTY2FsZSAqIDEpXG4gICAgcGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZTEsIHNjYWxlMikpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBsYXlCbGFja0JnQWN0KGJsYWNrQmc6IGNjLk5vZGUsIHRpbWU/OiBhbnkpIHtcbiAgICBpZiAoIWJsYWNrQmcpIHsgcmV0dXJuIH1cbiAgICBpZiAodGltZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWUgPSAwLjJcbiAgICB9XG4gICAgbGV0IHByZU9wYWNpdHkgPSBibGFja0JnLm9wYWNpdHlcbiAgICBibGFja0JnLm9wYWNpdHkgPSAwXG4gICAgYmxhY2tCZy5ydW5BY3Rpb24oY2MuZmFkZVRvKHRpbWUsIHByZU9wYWNpdHkpKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBwbGF5RGlhbG9nQWN0QmlnKGJsYWNrQmc6IGNjLk5vZGUsIGJhc2VOb2RlOiBjYy5Ob2RlKSB7XG4gICAgTUtVdGlscy5wbGF5QmxhY2tCZ0FjdChibGFja0JnLCAwLjMpXG4gICAgTUtVdGlscy5wbGF5U2NhbGVBbmlCaWcoYmFzZU5vZGUpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBsYXlEaWFsb2dBY3QoYmxhY2tCZzogY2MuTm9kZSwgYmFzZU5vZGU6IGNjLk5vZGUpIHtcbiAgICBNS1V0aWxzLnBsYXlCbGFja0JnQWN0KGJsYWNrQmcpXG4gICAgTUtVdGlscy5wbGF5U2NhbGVBbmkoYmFzZU5vZGUpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBwbGF5RGlhbG9nQWN0MihibGFja0JnOiBjYy5Ob2RlLCBiYXNlTm9kZTogY2MuTm9kZSkge1xuICAgIE1LVXRpbHMucGxheUJsYWNrQmdBY3QoYmxhY2tCZylcbiAgICBNS1V0aWxzLnBsYXlTY2FsZUFuaTIoYmFzZU5vZGUpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJ0blNjYWxlQWN0KGJ0bjogY2MuTm9kZSwgc2NhbGU/OiBhbnkpIHtcbiAgICBpZiAoIWJ0bikgeyByZXR1cm4gfVxuICAgIGJ0bi5zdG9wQWxsQWN0aW9ucygpXG4gICAgbGV0IHByZVNjYWxlID0gc2NhbGUgfHwgYnRuLnNjYWxlXG4gICAgYnRuLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKFxuICAgICAgY2Muc2NhbGVUbygwLjIsIDEuMTMgKiBwcmVTY2FsZSksXG4gICAgICBjYy5zY2FsZVRvKDAuMiwgMSAqIHByZVNjYWxlKSxcbiAgICAgIGNjLmRlbGF5VGltZSgwLjYpXG4gICAgKSkpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJ0blNjYWxlQWN0MShidG46IGNjLk5vZGUsIHNjYWxlPzogYW55KSB7XG4gICAgaWYgKCFidG4pIHsgcmV0dXJuIH1cbiAgICBsZXQgcHJlU2NhbGUgPSBzY2FsZSB8fCBidG4uc2NhbGVcbiAgICBidG4ucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXG4gICAgICBjYy5kZWxheVRpbWUoMC41KSxcbiAgICAgIGNjLnNjYWxlVG8oMC4xOCwgMS4xNSAqIHByZVNjYWxlKSxcbiAgICAgIGNjLnNjYWxlVG8oMC4xOCwgcHJlU2NhbGUpLFxuICAgICAgY2Muc2NhbGVUbygwLjE4LCAxLjE1ICogcHJlU2NhbGUpLFxuICAgICAgY2Muc2NhbGVUbygwLjE4LCBwcmVTY2FsZSksXG4gICAgICBjYy5kZWxheVRpbWUoMC41KVxuICAgICkpKVxuICB9XG5cbiAgLy/mjInpkq7ngrnlh7vnvKnmlL7vvIxidG7kuLrop6bmkbjnmoRub2Rl77yMaWNvbuS4uue8qeaUvuaViOaenG5vZGVcbiAgcHVibGljIHN0YXRpYyBhZGRUb3VjaChidG46IGNjLk5vZGUsIGljb24/OiBhbnksIHNjYWxlWD86IG51bWJlciwgc2NhbGVZPzogbnVtYmVyKSB7XG4gICAgaWYgKCFpY29uKSB7XG4gICAgICBpY29uID0gYnRuXG4gICAgfVxuXG4gICAgbGV0IHByZVNjYWxlWCA9IGJ0bi5zY2FsZVhcbiAgICBsZXQgcHJlU2NhbGVZID0gYnRuLnNjYWxlWVxuXG4gICAgaWYgKHNjYWxlWCkge1xuICAgICAgcHJlU2NhbGVYID0gc2NhbGVYO1xuICAgIH1cblxuICAgIGlmIChzY2FsZVkpIHtcbiAgICAgIHByZVNjYWxlWSA9IHNjYWxlWTtcbiAgICB9XG5cbiAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpY29uLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMSwgcHJlU2NhbGVYICogMS4xLCBwcmVTY2FsZVkgKiAxLjEpKVxuICAgICAgLy8gaWNvbi5zZXRTY2FsZShwcmVTY2FsZVgqMS4xLCBwcmVTY2FsZVkqMS4xKVxuICAgIH0uYmluZChidG4pLCBidG4pXG5cbiAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWNvbi5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIHByZVNjYWxlWCwgcHJlU2NhbGVZKSlcbiAgICAgIC8vIGljb24uc2V0U2NhbGUocHJlU2NhbGVYLCBwcmVTY2FsZVkpXG4gICAgfS5iaW5kKGJ0biksIGJ0bilcblxuICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpY29uLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMiwgcHJlU2NhbGVYLCBwcmVTY2FsZVkpKVxuICAgICAgLy8gaWNvbi5zZXRTY2FsZShwcmVTY2FsZVgsIHByZVNjYWxlWSlcbiAgICB9LmJpbmQoYnRuKSwgYnRuKVxuICB9XG5cbiAgLy8g5ZCN5a2X5pyA5aSn6ZW/5bqm5oiq5Y+WXG4gIHB1YmxpYyBzdGF0aWMgbmFtZU1heEN1dChpbnB1dDogc3RyaW5nLCBtYXhMZW46IG51bWJlcikge1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIHZhciBzdHJsZW4gPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaCA9IGlucHV0W2ldO1xuICAgICAgaWYgKGNoLmNoYXJDb2RlQXQoMCkgPiAyNTUpIC8v5aaC5p6c5piv5rGJ5a2X77yM5YiZ5a2X56ym5Liy6ZW/5bqm5YqgMlxuICAgICAge1xuICAgICAgICBzdHJsZW4gKz0gMjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdHJsZW4rKztcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmxlbiA8PSBtYXhMZW4pIHtcbiAgICAgICAgb3V0cHV0ICs9IGNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJsZW4gPiBtYXhMZW4pIHtcbiAgICAgIHJldHVybiBvdXRwdXQgKz0gXCIuLi5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG4gIHByaXZhdGUgc3RhdGljIGN1cnJlbnRUaXBzTGlzdCA9IFtdO1xuICBwdWJsaWMgc3RhdGljIGFsZXJ0VGlwcyhzdHI6IHN0cmluZywgc2hvd1RpbWU/OiBudW1iZXIsIGNsb3NlQWN0PzogYm9vbGVhbiwgdGlwVHlwZT86IG51bWJlcikge1xuXG4gICAgbGV0IGlzU2hvdyA9IE1LVXRpbHMuY3VycmVudFRpcHNMaXN0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHN0cjtcbiAgICB9KVxuICAgIGlmIChpc1Nob3cubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG4gICAgaWYgKCFzaG93VGltZSkgeyBzaG93VGltZSA9IDEuMiB9XG4gICAgbGV0IHByZWZhYlVybCA9IFwicHJlZmFiL2NvbW1vbi9BbGVydFRpcHNcIlxuICAgIGNjLmxvYWRlci5sb2FkUmVzKHByZWZhYlVybCwgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UpIHtcbiAgICAgIE1LVXRpbHMuY3VycmVudFRpcHNMaXN0LnB1c2goc3RyKTtcbiAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHsgY2MubG9nKCfovb3lhaXpooTliLbotYTmupDlpLHotKUsIOWOn+WboDonICsgZXJyb3JNZXNzYWdlKTsgcmV0dXJuOyB9XG4gICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYikpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/pooTliLbotYTmupAhJyk7IHJldHVybjsgfVxuICAgICAgdmFyIHByZWZhYiA9IGNjLmluc3RhbnRpYXRlKGxvYWRlZFJlc291cmNlKVxuICAgICAgcHJlZmFiLmdldENvbXBvbmVudChcIkFsZXJ0VGlwc1wiKS5zZXRUaXBzKHN0ciwgdGlwVHlwZSlcbiAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQocHJlZmFiLCA5OTk5KVxuICAgICAgcHJlZmFiLnNldFBvc2l0aW9uKGNjLnYyKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIgLSAxMDApKVxuICAgICAgaWYgKCFjbG9zZUFjdCkge1xuICAgICAgICBNS1V0aWxzLnBsYXlTY2FsZUFuaShwcmVmYWIpXG4gICAgICB9XG4gICAgICBwcmVmYWIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShzaG93VGltZSksIGNjLnNwYXduKGNjLm1vdmVCeSgxLCAwLCA0MDApLCBjYy5mYWRlT3V0KDEpKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc3RyID0gcHJlZmFiLmdldENvbXBvbmVudChcIkFsZXJ0VGlwc1wiKS5nZXRUaXBzKCk7XG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgTUtVdGlscy5jdXJyZW50VGlwc0xpc3QuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IHN0cikgaWR4ID0gaW5kZXg7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChpZHggPj0gMCkgTUtVdGlscy5jdXJyZW50VGlwc0xpc3Quc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgcHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKVxuICAgICAgfSkpKVxuICAgIH0pXG4gIH1cblxuICAvL+iOt+WPluW9k+WJjeezu+e7n+aXtumXtOaIsyjnp5IpXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q3VyT3NUaW1lKCkge1xuICAgIGxldCBjdXJUaW1lID0gbmV3IERhdGUoKVxuICAgIHJldHVybiBNYXRoLmZsb29yKGN1clRpbWUuZ2V0VGltZSgpIC8gMTAwMClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q3VyT3NNaWxsaXNlY29uZCgpIHtcbiAgICBsZXQgY3VyVGltZSA9IG5ldyBEYXRlKClcbiAgICByZXR1cm4gY3VyVGltZS5nZXRUaW1lKClcbiAgfVxuXG4gIC8v55Sf5oiQbi1t6ZqP5py65pWwICDljIXmi6xu5ZKMbVxuICBwdWJsaWMgc3RhdGljIHJhbmRvbU5NKG46IG51bWJlciwgbTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobSAtIG4gKyAxKSlcbiAgfVxuXG4gIC8v55Sf5oiQbi1t6ZqP5py65pWwICDljIXmi6xu5ZKMbe+8mua1rueCueaVsFxuICBwdWJsaWMgc3RhdGljIHJhbmRvbU5NRihuOiBudW1iZXIsIG06IG51bWJlcikge1xuICAgIHJldHVybiBuICsgTWF0aC5yYW5kb20oKSAqIChtIC0gbilcbiAgfVxuXG4gIC8v6YCC6YWN5LiN5ZCM54mI5pysXG4gIHB1YmxpYyBzdGF0aWMgY29tcGFyZVZlcnNpb24odjEsIHYyKSB7XG4gICAgdjEgPSB2MS5zcGxpdCgnLicpXG4gICAgdjIgPSB2Mi5zcGxpdCgnLicpXG4gICAgY29uc3QgbGVuID0gTWF0aC5tYXgodjEubGVuZ3RoLCB2Mi5sZW5ndGgpXG5cbiAgICB3aGlsZSAodjEubGVuZ3RoIDwgbGVuKSB7XG4gICAgICB2MS5wdXNoKCcwJylcbiAgICB9XG4gICAgd2hpbGUgKHYyLmxlbmd0aCA8IGxlbikge1xuICAgICAgdjIucHVzaCgnMCcpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgbnVtMSA9IHBhcnNlSW50KHYxW2ldKVxuICAgICAgY29uc3QgbnVtMiA9IHBhcnNlSW50KHYyW2ldKVxuICAgICAgaWYgKG51bTEgPiBudW0yKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKG51bTEgPCBudW0yKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy/mmL7npLrot5Hpqaznga9cbiAgcHVibGljIHN0YXRpYyBzaG93QnJvYWQocG9zPzogY2MuVmVjMiwgaWQ/OiBhbnkpIHtcbiAgICBsZXQgdyA9IE1LVXRpbHMuZ2V0U2hvd1NpemUoKS53aWR0aDtcbiAgICBsZXQgaCA9IE1LVXRpbHMuZ2V0U2hvd1NpemUoKS5oZWlnaHQ7XG5cbiAgICBsZXQgcHJlZmFiVXJsID0gXCJwdWJsaWMvcHJlZmFicy9Db21tb25Ccm9hZFwiO1xuICAgIGNjLmxvYWRlci5sb2FkUmVzKHByZWZhYlVybCwgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UpIHtcbiAgICAgIC8v5qOA5p+l6LWE5rqQ5Yqg6L29XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7IGNjLmxvZygn6L295YWl6aKE5Yi26LWE5rqQ5aSx6LSlLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSk7IHJldHVybjsgfVxuICAgICAgaWYgKCEobG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIpKSB7IGNjLmxvZygn5L2g6L295YWl55qE5LiN5piv6aKE5Yi26LWE5rqQIScpOyByZXR1cm47IH1cbiAgICAgIC8v5byA5aeL5a6e5L6L5YyW6aKE5Yi26LWE5rqQXG4gICAgICB2YXIgcHJlZmFiID0gY2MuaW5zdGFudGlhdGUobG9hZGVkUmVzb3VyY2UpO1xuICAgICAgaWYgKHBvcykge1xuICAgICAgICBwcmVmYWIuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZWZhYi5zZXRQb3NpdGlvbihjYy52Mih3LCBoIC0gNDApKTtcbiAgICAgIH1cbiAgICAgIGxldCBicm9hZENvbSA9IHByZWZhYi5nZXRDb21wb25lbnQoXCJDb21tb25Ccm9hZFwiKTtcbiAgICAgIGlmIChicm9hZENvbSkge1xuICAgICAgICBpZiAoaWQgPT0gMSkge1xuICAgICAgICAgIGJyb2FkQ29tLnNob3dCcm9hZChpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJvYWRDb20uc2hvd0Jyb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQocHJlZmFiLCA5OTkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0d29Qb2ludERpc3RhbmNlKHBvczEsIHBvczIpIHvCoMKgwqDCoMKgwqAgLy8g5LuOZm9ybeeahOihqOWNleS4reWIhuWIq+aPkOWPluS4pOS4queCueeahOaoquOAgee6teWdkOagh1xuICAgIGxldCB4MSA9IHBvczEueDvCoMKgIC8vIOesrOS4gOS4queCueeahOaoquWdkOagh1xuICAgIGxldCB5MSA9IHBvczEueTvCoMKgIC8vIOesrOS4gOS4queCueeahOe6teWdkOagh1xuICAgIGxldCB4MiA9IHBvczIueDvCoMKgIC8vIOesrOS6jOS4queCueeahOaoquWdkOagh1xuICAgIGxldCB5MiA9IHBvczIueTvCoMKgIC8vIOesrOS6jOS4queCueeahOe6teWdkOagh1xuICAgIGxldCB4ZGlmZiA9IHgyIC0geDE7wqDCoMKgwqDCoMKgwqDCoMKgwqDCoCAvLyDorqHnrpfkuKTkuKrngrnnmoTmqKrlnZDmoIfkuYvlt65cbiAgICBsZXQgeWRpZmYgPSB5MiAtIHkxO8KgwqDCoMKgwqDCoMKgwqDCoMKgwqAgLy8g6K6h566X5Lik5Liq54K555qE57q15Z2Q5qCH5LmL5beuXG4gICAgcmV0dXJuIE1hdGgucG93KCh4ZGlmZiAqIHhkaWZmICsgeWRpZmYgKiB5ZGlmZiksIDAuNSk7wqDCoCAvLyDorqHnrpfkuKTngrnkuYvpl7TnmoTot53nprvvvIzlubblsIbnu5Pmnpzov5Tlm57ooajljZXlhYPntKBcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbG9hZFByZWZhYihwcmVmYWJVcmwsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZmFpbENhbGxiYWNrPzogYW55KSB7XG4gICAgbGV0IHByZWZhYiA9IGNjLmxvYWRlci5nZXRSZXMocHJlZmFiVXJsLCBjYy5QcmVmYWIpXG4gICAgaWYgKHByZWZhYiAmJiBwcmVmYWIgIT0gbnVsbCkge1xuICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICBzdWNjZXNzQ2FsbGJhY2socHJlZmFiKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyhwcmVmYWJVcmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGRvd25QcmVmYWIpIHtcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgIGNjLmxvZyhcImxvYWQgXCIgKyBwcmVmYWJVcmwgKyBcIiBlcnJvciA6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICBpZiAoZmFpbENhbGxiYWNrKSB7XG4gICAgICAgICAgICBmYWlsQ2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhkb3duUHJlZmFiKVxuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc3RhdGljIGxvYWREaXIoZnJhbWVVcmwsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZmFpbENhbGxiYWNrPzogYW55LCB0eXBlID0gY2MuU3ByaXRlRnJhbWUpIHtcbiAgICBjYy5yZXNvdXJjZXMubG9hZERpcihmcmFtZVVybCwgdHlwZSwgZnVuY3Rpb24gKGVyciwgYXNzZXRzKSB7XG4gICAgICAvLyAuLi5cbiAgICAgIGNjLmxvZyhcIj09PT09PT09PT09XCIsIGFzc2V0cyk7XG4gICAgICAvLyBpZigpXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGxvYWRTcHJpdGVGcmFtZShmcmFtZVVybCwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBmYWlsQ2FsbGJhY2s/OiBhbnkpIHtcbiAgICBsZXQgc3ByaXRlRnJhbWUgPSBjYy5sb2FkZXIuZ2V0UmVzKGZyYW1lVXJsLCBjYy5TcHJpdGVGcmFtZSlcbiAgICBpZiAoc3ByaXRlRnJhbWUgJiYgc3ByaXRlRnJhbWUgIT0gbnVsbCkge1xuICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soc3ByaXRlRnJhbWUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGZyYW1lVXJsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgZG93blNwcml0ZUZyYW1lKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjYy5sb2coXCJsb2FkIFwiICsgZnJhbWVVcmwgKyBcIiBlcnJvciA6IFwiICsgZXJyKTtcbiAgICAgICAgICBpZiAoZmFpbENhbGxiYWNrKSB7XG4gICAgICAgICAgICBmYWlsQ2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhkb3duU3ByaXRlRnJhbWUpXG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBsb2FkU291bmRFZmZlY3QodXJsKSB7XG4gICAgbGV0IGdhbWVsb2FkU291bmQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lbG9hZFNvdW5kXCIpXG4gICAgLy8gaWYgKGdhbWVsb2FkU291bmQgJiYgZ2FtZWxvYWRTb3VuZCA9PSBcIjFcIikge1xuICAgIC8vICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldElzUGxheVNvdW5kKGZhbHNlKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldElzUGxheVNvdW5kKHRydWUpO1xuICAgIC8vIH1cblxuICAgIC8vIGlmICghRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRJc1BsYXlTb3VuZCgpKSB7XG4gICAgLy8gICAgIHJldHVyblxuICAgIC8vIH1cblxuICAgIGxldCBhdWRpb0NsaXAgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuQXVkaW9DbGlwKVxuICAgIGlmIChhdWRpb0NsaXApIHtcbiAgICAgIGlmICghTUtVdGlscy5lZmZlY3RJc09wZW4oKSkgeyByZXR1cm4gfVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb0NsaXAsIGZhbHNlLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKSB7XG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICBjYy5sb2coJ+i9veWFpemihOWItui1hOa6kOWksei0pSwg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLkF1ZGlvQ2xpcCkpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/lo7Dpn7PotYTmupAhJyk7IHJldHVybjsgfVxuICAgICAgICBpZiAoIU1LVXRpbHMuZWZmZWN0SXNPcGVuKCkpIHsgcmV0dXJuIH1cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShsb2FkZWRSZXNvdXJjZSwgZmFsc2UsIDEpXG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbG9hZFNvdW5kTXVzaWModXJsKSB7XG4gICAgbGV0IGdhbWVsb2FkTXVzaWMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lbG9hZE11c2ljXCIpXG4gICAgLy8gaWYgKGdhbWVsb2FkTXVzaWMgJiYgZ2FtZWxvYWRNdXNpYyA9PSBcIjFcIikge1xuICAgIC8vICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldElzUGxheU11c2ljKGZhbHNlKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldElzUGxheU11c2ljKHRydWUpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAoIURhdGFNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0SXNQbGF5TXVzaWMoKSkge1xuICAgIC8vICAgICByZXR1cm5cbiAgICAvLyB9XG5cbiAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJNdXNpY1BsYXlVcmxcIiwgdXJsKVxuICAgIGxldCBhdWRpb0NsaXAgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuQXVkaW9DbGlwKVxuICAgIGlmIChhdWRpb0NsaXApIHtcbiAgICAgIGlmICghTUtVdGlscy5tdXNpY0lzT3BlbigpKSB7IHJldHVybiB9XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW9DbGlwLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKSB7XG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICBjYy5sb2coJ+i9veWFpemihOWItui1hOa6kOWksei0pSwg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLkF1ZGlvQ2xpcCkpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/lo7Dpn7PotYTmupAhJyk7IHJldHVybjsgfVxuICAgICAgICBpZiAoIU1LVXRpbHMubXVzaWNJc09wZW4oKSkgeyByZXR1cm4gfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMobG9hZGVkUmVzb3VyY2UsIHRydWUpXG4gICAgICAgIC8vIERhdGFNYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNOZXZlclBsYXlNdXNpYyA9IHRydWVcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzdG9wTXVzaWMoKSB7XG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTXVzaWNQbGF5VXJsXCIsIFwiXCIpXG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0RWZmZWN0KG9wZW46IGJvb2xlYW4pIHtcbiAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJFZmZlY3RTd2l0Y2hcIiwgKG9wZW4gPyBcIjFcIiA6IFwiMFwiKSlcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVmZmVjdElzT3BlbigpIHtcbiAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiRWZmZWN0U3dpdGNoXCIpICE9IFwiMFwiXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNldE11c2ljKG9wZW46IGJvb2xlYW4pIHtcbiAgICBpZiAob3BlbiA9PSBNS1V0aWxzLm11c2ljSXNPcGVuKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJNdXNpY1N3aXRjaFwiLCAob3BlbiA/IFwiMVwiIDogXCIwXCIpKVxuICAgIGlmICghb3Blbikge1xuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IE11c2ljUGxheVVybCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk11c2ljUGxheVVybFwiKVxuICAgICAgaWYgKE11c2ljUGxheVVybCAmJiBNdXNpY1BsYXlVcmwgIT0gXCJcIikge1xuICAgICAgICBNS1V0aWxzLmxvYWRTb3VuZE11c2ljKE11c2ljUGxheVVybClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG11c2ljSXNPcGVuKCkge1xuICAgIHJldHVybiBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJNdXNpY1N3aXRjaFwiKSAhPSBcIjBcIlxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXRTb3VuZChvcGVuOiBib29sZWFuKSB7XG4gICAgTUtVdGlscy5zZXRFZmZlY3Qob3BlbilcbiAgICBNS1V0aWxzLnNldE11c2ljKG9wZW4pXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHByZUxvYWRTb3VuZEVmZmVjdChwcmVmYWJVcmwsIHN1Y2Nlc3NDYWxsYmFjazogYW55LCBmYWlsQ2FsbGJhY2s/OiBhbnkpIHtcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhwcmVmYWJVcmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKSB7XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGNjLmxvZygn6L295YWl6aKE5Yi26LWE5rqQ5aSx6LSlLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIGZhaWxDYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLkF1ZGlvQ2xpcCkpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/lo7Dpn7PotYTmupAhJyk7IHJldHVybjsgfVxuICAgICAgc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbG9hZFNrZWxldG9uRGF0YSh1cmwsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZmFpbENhbGxiYWNrPzogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCIyMjIyMjIyMjIyXCIsIHVybCk7XG4gICAgLy8gbGV0IHJlcyA9IG51bGw7XG4gICAgbGV0IHJlcyA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBzcC5Ta2VsZXRvbkRhdGEpXG4gICAgY29uc29sZS5sb2cocmVzLCBcInh4eHh4eHhcIiwgdXJsKTtcbiAgICBpZiAocmVzICYmIHJlcyAhPSBudWxsKSB7XG4gICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJhYWFhYWFhYWFhYWFhYWFcIiwgdXJsKTtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHJlcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCIzMzMzMzMzMzMzMzMzMz1cIiwgdXJsKTtcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgc3AuU2tlbGV0b25EYXRhLCBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlLCByZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCI0NDQ0NDQ0NDQ0NDQ0NFwiLCByZXMpO1xuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgY2MubG9nKFwibG9hZCBcIiArIHVybCArIFwiIGVycm9yIDogXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIGlmIChmYWlsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIGZhaWxDYWxsYmFjaygpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHJlcylcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICAvL+mHjeWkjeWIqeeUqG5vZGVcbiAgcHVibGljIHN0YXRpYyByZXBlYXRQcmVmYWIocHJlZmFiVXJsLCBwYXJlbnQsIG5vZGVOYW1lLCBzdWNjZXNzQ2FsbGJhY2ssIHpJbmRleD86IG51bWJlcikge1xuICAgIGlmICh6SW5kZXggPT0gdW5kZWZpbmVkKSB7IHpJbmRleCA9IDAgfVxuICAgIGxldCBub2RlOiBjYy5Ob2RlID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShwYXJlbnQsIG5vZGVOYW1lKVxuICAgIGlmIChub2RlKSB7XG4gICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgbm9kZS56SW5kZXggPSB6SW5kZXhcbiAgICAgIHN1Y2Nlc3NDYWxsYmFjayhub2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBNS1V0aWxzLmxvYWRQcmVmYWIocHJlZmFiVXJsLCBmdW5jdGlvbiAocHJlZmFiKSB7XG4gICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXG4gICAgICAgIHBhcmVudC5hZGRDaGlsZChub2RlLCB6SW5kZXgsIG5vZGVOYW1lKVxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2sobm9kZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZXBlYXRTcGluZSh1cmwsIHBhcmVudCwgbm9kZU5hbWUsIHN1Y2Nlc3NDYWxsYmFjaywgekluZGV4PzogbnVtYmVyKSB7XG4gICAgaWYgKHpJbmRleCA9PSB1bmRlZmluZWQpIHsgekluZGV4ID0gMCB9XG4gICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBNS1V0aWxzLmZpbmROb2RlQnlOYW1lKHBhcmVudCwgbm9kZU5hbWUpXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICBub2RlLnpJbmRleCA9IHpJbmRleFxuICAgICAgc3VjY2Vzc0NhbGxiYWNrKG5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIE1LVXRpbHMubG9hZFNrZWxldG9uRGF0YSh1cmwsIGZ1bmN0aW9uIChzcGluZXJlczogc3AuU2tlbGV0b25EYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKVxuICAgICAgICBsZXQgc3BpbmUgPSBub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgc3BpbmUuc2tlbGV0b25EYXRhID0gc3BpbmVyZXNcbiAgICAgICAgc3BpbmUucHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2VcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKG5vZGUsIHpJbmRleCwgbm9kZU5hbWUpXG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhub2RlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyDpobrml7bpkojop5LluqZcbiAgcHVibGljIHN0YXRpYyBnZXRBbmdsZShmcm9tOiBjYy5WZWMyLCB0bzogY2MuVmVjMikge1xuICAgIGxldCB4ID0gdG8ueCAtIGZyb20ueFxuICAgIGxldCB5ID0gdG8ueSAtIGZyb20ueVxuICAgIGxldCBtYXRoQW5nbGUgPSA5MCAvL+mAhuaXtumSiFxuICAgIGlmICh4ID09IDApIHtcbiAgICAgIGlmICh5ID49IDApIHtcbiAgICAgICAgbWF0aEFuZ2xlID0gOTBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGhBbmdsZSA9IDI3MFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGFuQW5nbGUgPSBNYXRoLmF0YW4oeSAvIHgpICogMTgwIC8gTWF0aC5QSVxuICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgIGlmICh5ID49IDApIHtcbiAgICAgICAgICBtYXRoQW5nbGUgPSB0YW5BbmdsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGhBbmdsZSA9IHRhbkFuZ2xlICsgMzYwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGhBbmdsZSA9IHRhbkFuZ2xlICsgMTgwXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2MubG9nKFwibWF0aEFuZ2xlID0gXCIsIG1hdGhBbmdsZSlcbiAgICBsZXQgY29jb3NBbmdsZSA9ICgzNjAgLSBtYXRoQW5nbGUgKyA5MCkgJSAzNjBcbiAgICAvLyBjYy5sb2coXCJjb2Nvc0FuZ2xlID0gXCIsIGNvY29zQW5nbGUpXG4gICAgcmV0dXJuIGNvY29zQW5nbGVcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VVVJRCgpIHtcbiAgICBsZXQgVVVJRFN0ciA9IFwiZ2FtZV9vbmx5X3V1aWRcIlxuICAgIGxldCB1dWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFVVSURTdHIpXG4gICAgaWYgKHV1aWQpIHtcbiAgICAgIHJldHVybiB1dWlkXG4gICAgfVxuICAgIHV1aWQgPSBcInV1aWRfXCIgKyBNS1V0aWxzLmdldEN1ck9zVGltZSgpICsgXCJfXCIgKyBNS1V0aWxzLnJhbmRvbU5NKDAsIDk5OSkgKyBcIl9cIiArIE1LVXRpbHMucmFuZG9tTk0oMCwgOTk5KVxuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShVVUlEU3RyLCB1dWlkKVxuICAgIHJldHVybiB1dWlkXG4gIH1cblxuICAvLyAwMTozMFxuICBwdWJsaWMgc3RhdGljIHRyYW5UaW1lMShzZWMpIHtcbiAgICBzZWMgPSBNYXRoLmNlaWwoc2VjKVxuICAgIGlmIChzZWMgPD0gMCkgeyByZXR1cm4gXCIwMDowMFwiIH1cbiAgICBsZXQgbWluID0gTWF0aC5mbG9vcihzZWMgLyA2MClcbiAgICBsZXQgcyA9IE1hdGguZmxvb3IoKHNlYyAtIG1pbiAqIDYwKSlcbiAgICByZXR1cm4gXCJcIiArIE1LVXRpbHMuYWRkMChtaW4pICsgXCI6XCIgKyBNS1V0aWxzLmFkZDAocylcbiAgfVxuXG4gIC8vMeWwj+aXtjIw5YiGXG4gIHB1YmxpYyBzdGF0aWMgdHJhblRpbWUyKHNlYykge1xuICAgIGlmIChzZWMgPD0gMCkgeyByZXR1cm4gXCIw5YiGXCIgfVxuICAgIGxldCBob3VyID0gTWF0aC5mbG9vcihzZWMgLyAzNjAwKVxuICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKChzZWMgLSBob3VyICogMzYwMCkgLyA2MClcbiAgICBsZXQgc3RyID0gXCJcIlxuICAgIGlmIChob3VyID4gMCkge1xuICAgICAgc3RyICs9IChcIlwiICsgaG91ciArIFwi5bCP5pe2XCIpXG4gICAgfVxuICAgIGlmIChtaW4gPiAwKSB7XG4gICAgICBzdHIgKz0gKFwiXCIgKyBtaW4gKyBcIuWIhumSn1wiKVxuICAgIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZDAobTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG0gPCAxMCA/ICcwJyArIG0gOiBtO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc09uZURheSh0aW1lMSwgdGltZTIpIHtcbiAgICBsZXQgZGF0YTEgPSBuZXcgRGF0ZSh0aW1lMSlcbiAgICBsZXQgZGF0YTIgPSBuZXcgRGF0ZSh0aW1lMilcbiAgICByZXR1cm4gZGF0YTEuZ2V0RnVsbFllYXIoKSA9PSBkYXRhMi5nZXRGdWxsWWVhcigpICYmIGRhdGExLmdldE1vbnRoKCkgPT0gZGF0YTIuZ2V0TW9udGgoKSAmJiBkYXRhMS5nZXREYXRlKCkgPT0gZGF0YTIuZ2V0RGF0ZSgpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRyYW5EYXRlSE1TKHRpbWUpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhvdXI6IGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgIG1pbjogZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBzZWM6IGRhdGUuZ2V0U2Vjb25kcygpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjaGFuZ2VQcm9BY3QxKHNwcml0ZTogY2MuU3ByaXRlLCBudW0xOiBudW1iZXIsIG51bTI6IG51bWJlciwgdGltZT86IG51bWJlcikge1xuICAgIHRpbWUgPSB0aW1lIHx8IDAuNVxuICAgIGxldCBzcGVlZCA9IChudW0yIC0gbnVtMSkgLyB0aW1lXG5cbiAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHNwcml0ZSlcbiAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zY2hlZHVsZShmdW5jdGlvbiAoZHQpIHtcbiAgICAgIG51bTEgPSBudW0xICsgc3BlZWQgKiBkdFxuICAgICAgaWYgKHNwZWVkID09IDAgfHwgKHNwZWVkID4gMCAmJiBudW0xID49IG51bTIpIHx8IChzcGVlZCA8IDAgJiYgbnVtMSA8PSBudW0yKSkge1xuICAgICAgICBudW0xID0gbnVtMlxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHNwcml0ZSlcbiAgICAgIH1cbiAgICAgIHNwcml0ZS5maWxsUmFuZ2UgPSBudW0xXG4gICAgfSwgc3ByaXRlLCAwKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjaGFuZ2VOdW1MYWJlbEFjdDEobGFiZWw6IGNjLkxhYmVsLCBudW0xOiBudW1iZXIsIG51bTI6IG51bWJlciwgY2FsbGJhY2s6IGFueSwgdGltZT86IG51bWJlcikge1xuICAgIHRpbWUgPSB0aW1lIHx8IDFcbiAgICBsZXQgc3BlZWQgPSAobnVtMiAtIG51bTEpIC8gdGltZVxuXG4gICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZUFsbEZvclRhcmdldChsYWJlbClcbiAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zY2hlZHVsZShmdW5jdGlvbiAoZHQpIHtcbiAgICAgIG51bTEgPSBudW0xICsgc3BlZWQgKiBkdFxuICAgICAgaWYgKHNwZWVkID09IDAgfHwgKHNwZWVkID4gMCAmJiBudW0xID49IG51bTIpIHx8IChzcGVlZCA8IDAgJiYgbnVtMSA8PSBudW0yKSkge1xuICAgICAgICBudW0xID0gbnVtMlxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KGxhYmVsKVxuICAgICAgfVxuICAgICAgY2FsbGJhY2sobnVtMSlcbiAgICB9LCBsYWJlbCwgMClcbiAgfVxuXG4gIC8v5Y+W5bCP5pWw54K55ZCO5Yeg5L2NXG4gIHB1YmxpYyBzdGF0aWMgY3V0UG9pbnQobnVtOiBudW1iZXIsIHBvaW50OiBudW1iZXIpIHtcbiAgICBsZXQgdGVuID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IocG9pbnQpKVxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSAqIHRlbikgLyB0ZW5cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3V0UG9pbnRDZWlsKG51bTogbnVtYmVyLCBwb2ludDogbnVtYmVyKSB7XG4gICAgbGV0IHRlbiA9IE1hdGgucG93KDEwLCBNYXRoLmZsb29yKHBvaW50KSlcbiAgICByZXR1cm4gTWF0aC5jZWlsKG51bSAqIHRlbikgLyB0ZW5cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHJhbk51bU9sZChudW06IG51bWJlcikge1xuICAgIGxldCBzdHIgPSBcIlwiXG4gICAgbGV0IHNob3dOdW0gPSAwXG4gICAgaWYgKG51bSA8IDApIHtcbiAgICAgIHN0ciA9IFwiXCIgKyBNYXRoLmZsb29yKG51bSlcbiAgICB9IGVsc2UgaWYgKG51bSA8PSA5OTk5KSB7XG4gICAgICBzdHIgPSBcIlwiICsgTWF0aC5yb3VuZChudW0pXG4gICAgfSBlbHNlIGlmIChudW0gPCA5OTk1MDApIHtcbiAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDApXG4gICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiQVwiXG4gICAgfSBlbHNlIGlmIChudW0gPCA5OTk1MDAwMDApIHtcbiAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDAwMDApXG4gICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiQlwiXG4gICAgfSBlbHNlIGlmIChudW0gPCA5OTk1MDAwMDAwMDApIHtcbiAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDAwMDAwMDApXG4gICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiQ1wiXG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDAwMDAwMDAwMDApXG4gICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiRFwiXG4gICAgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHJhbk51bShudW06IG51bWJlciwgaXNGbG9hdD86IGJvb2xlYW4pIHtcbiAgICBsZXQgc3RyID0gXCJcIlxuICAgIGxldCBzaG93TnVtID0gMFxuICAgIGlmIChudW0gPD0gMCkge1xuICAgICAgaWYgKGlzRmxvYXQpIHtcbiAgICAgICAgc3RyID0gXCJcIiArIG51bS50b0ZpeGVkKDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBcIlwiICsgTWF0aC5mbG9vcihudW0pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChudW0gPD0gOTk5OSkge1xuICAgICAgaWYgKGlzRmxvYXQpIHtcbiAgICAgICAgc3RyID0gXCJcIiArIG51bS50b0ZpeGVkKDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBcIlwiICsgTWF0aC5yb3VuZChudW0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzeW1zID0gWydLJywgJ00nLCAnQicsICdUJywgJ0FBJywgJ0FCJywgJ0FDJywgJ0FEJywgJ0FFJywgJ0FGJywgJ0FHJywgJ0FIJywgJ0FJJywgJ0FKJywgJ0FLJywgJ0FMJywgJ0FNJywgJ0FOJywgJ0FPJywgJ0FQJywgJ0FRJywgJ0FSJywgJ0FTJywgJ0FUJywgJ0FVJ11cbiAgICAgIGxldCBtYXhOdW0gPSA5OTk1MDBcbiAgICAgIGxldCBjYyA9IDEwMDBcbiAgICAgIGxldCBpbmRleCA9IC0xXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG51bSA8IG1heE51bSkge1xuICAgICAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIGNjKVxuICAgICAgICAgIHN0ciA9IFwiXCIgKyBzaG93TnVtICsgc3ltc1tpXVxuICAgICAgICAgIGluZGV4ID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF4TnVtICo9IDEwMDBcbiAgICAgICAgICBjYyAqPSAxMDAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICBzaG93TnVtID0gTWF0aC5yb3VuZChudW0gLyBjYylcbiAgICAgICAgc3RyID0gXCJcIiArIHNob3dOdW0gKyBcIlpcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc3BsaXQoc3RyLCBzMSkge1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoczEpXG4gICAgaWYgKGFyci5sZW5ndGggPT0gMSAmJiBhcnJbMF0gPT0gXCJcIikge1xuICAgICAgYXJyID0gW11cbiAgICB9XG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRXb3JsZFBvcyhub2RlOiBjYy5Ob2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKS5hZGQoY2MudjIoLWNjLndpblNpemUud2lkdGggLyAyLCAtY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdmVyc2lvbkNvbXBhcmUodmVyc2lvbkEsIHZlcnNpb25CKSB7XG4gICAgdmFyIHZBID0gdmVyc2lvbkEuc3BsaXQoJy4nKTtcbiAgICB2YXIgdkIgPSB2ZXJzaW9uQi5zcGxpdCgnLicpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdkEubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBhID0gcGFyc2VJbnQodkFbaV0pO1xuICAgICAgdmFyIGIgPSBwYXJzZUludCh2QltpXSB8fCAwKTtcbiAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZCLmxlbmd0aCA+IHZBLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc3ViTmFtZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiAoc3RyLmxlbmd0aCA+IDYgPyAoc3RyLnN1YnN0cmluZygwLCA2KSArIFwiLi4uXCIpIDogc3RyKVxuICB9XG5cbiAgLy9zY3JvbGx2aWV3IGl0ZW0gdG91Y2hFbmRcbiAgcHVibGljIHN0YXRpYyBpdGVtT25Ub3VjaENhbGwobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s/OiBhbnkpIHtcbiAgICBsZXQgZW5hYmxlID0gZmFsc2VcbiAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZSkge1xuICAgICAgZW5hYmxlID0gdHJ1ZVxuICAgIH0pXG4gICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IG1vdmVZID0gTWF0aC5hYnMoZS50b3VjaC5fcG9pbnQueSAtIGUudG91Y2guX3N0YXJ0UG9pbnQueSlcbiAgICAgIGlmIChtb3ZlWSA+IDEwKSB7IGVuYWJsZSA9IGZhbHNlIH1cbiAgICB9KVxuICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGVuYWJsZSAmJiBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZml4UHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIGlmIChwcm9ncmVzcyA8IDAuMDUpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgaWYgKHByb2dyZXNzIDwgMC4xKSB7XG4gICAgICByZXR1cm4gMC4xXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2dyZXNzXG4gIH1cblxuICAvL+aXtumXtOi9rOaNoiDlpKnml7bliIYg5Lyg5YWl56eSXG4gIHB1YmxpYyBzdGF0aWMgc2VuY29uZHNGb3JtYXQoczogbnVtYmVyKSB7XG4gICAgaWYgKHMgPCAwKSB7XG4gICAgICByZXR1cm4gXCIw5aSpMOaZgjDliIZcIjtcbiAgICB9XG4gICAgY29uc3QgZCA9IDI0ICogMzYwMDtcbiAgICBjb25zdCBkYXkgPSBNYXRoLmZsb29yKHMgLyBkKTtcbiAgICBjb25zdCBob3VyID0gTWF0aC5mbG9vcigocyAtIGRheSAqIGQpIC8gMzYwMCk7XG4gICAgY29uc3QgbWludXRlID0gTWF0aC5mbG9vcigocyAtIGRheSAqIGQgLSBob3VyICogMzYwMCkgLyA2MCk7XG4gICAgLy8gY29uc3Qgc2VuY29uZCA9IHMgLSBkYXkgKiBkIC0gaG91ciAqIDM2MDAgLSBtaW51dGUgKiA2MDtcbiAgICBjb25zdCBmb3JtYXQgPSBkYXkgKyBcIuWkqVwiICsgaG91ciArIFwi5pmCXCIgKyBtaW51dGUgKyBcIuWIhlwiO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICAvL2pz5Y675o6J5omA5pyJ56m65qC8IFxcc+ihqOekuuafpeaJvuepuuagvOW4puS4iuWKoOWlveihqOekuui/nue7reeahOepuuagvFxuICBwdWJsaWMgc3RhdGljIHRyaW1TcGFjZShzdHI6IHN0cmluZykge1xuICAgIGxldCBzdHIxID0gc3RyLnJlcGxhY2UoL1xccysvZywgXCJcIilcbiAgICByZXR1cm4gc3RyMVxuICB9XG5cbiAgLy8g6K6h5pe25ZmoXG4gIHB1YmxpYyBzdGF0aWMgc2V0Tm9kZURlbGF5KGJhc2VOb2RlLCBkZWxheVRpbWUsIGNhbGxiYWNrKSB7XG4gICAgYmFzZU5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkZWxheVRpbWUpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSkpKVxuICB9XG4gIC8v6ZqP5py65pWw57uEXG4gIHB1YmxpYyBzdGF0aWMgcmFuZG9tU29ydChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNldFN0YXRzQ29sb3IoZm9udDogY2MuQ29sb3IgPSBjYy5Db2xvci5XSElURSwgYmFja2dyb3VuZDogY2MuQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAxNTApKSB7XG4gICAgY29uc3QgcHJvZmlsZXIgPSBjYy5maW5kKCdQUk9GSUxFUi1OT0RFJyk7XG4gICAgaWYgKCFwcm9maWxlcikgcmV0dXJuIGNjLndhcm4oJ+acquaJvuWIsOe7n+iuoemdouadv+iKgueCue+8gScpO1xuXG4gICAgLy8g5paH5a2XXG4gICAgcHJvZmlsZXIuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgIG5vZGUuY29sb3IgPSBmb250O1xuICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gMThcbiAgICAgIC8vIG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICB9KTtcblxuICAgIC8vIOiDjOaZr1xuICAgIGxldCBub2RlID0gcHJvZmlsZXIuZ2V0Q2hpbGRCeU5hbWUoJ0JBQ0tHUk9VTkQnKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIG5vZGUgPSBuZXcgY2MuTm9kZSgnQkFDS0dST1VORCcpO1xuICAgICAgcHJvZmlsZXIuYWRkQ2hpbGQobm9kZSwgY2MubWFjcm8uTUlOX1pJTkRFWCk7XG4gICAgICBub2RlLnNldENvbnRlbnRTaXplKHByb2ZpbGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpKTtcbiAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgfVxuICAgIGNvbnN0IGdyYXBoaWNzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpIHx8IG5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICBncmFwaGljcy5jbGVhcigpO1xuICAgIGdyYXBoaWNzLnJlY3QoLTUsIDEyLjUsIG5vZGUud2lkdGggKyAxMCwgbm9kZS5oZWlnaHQgLSAxMCk7XG4gICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gYmFja2dyb3VuZDtcbiAgICBncmFwaGljcy5maWxsKCk7XG4gIH1cblxuXG4gIC8qKiDorqHnrpfku4rlpKnnmoQw54K55pe25Yi75a+55bqU55qE5pe26Ze05oiz77yIbXPvvIkgKi9cbiAgcHVibGljIHN0YXRpYyBjYWxjdWxOb3dEYXlTdGFydFRpbWVTdGFtcCgpOiBudW1iZXIge1xuICAgIC8vIDEuIOiOt+WPluW9k+WJjeaXtumXtOaIsyAtIOenklxuICAgIGxldCBjdXJyVHMgPSBEYXRlLm5vdygpIC8gMTAwMDtcblxuICAgIC8vIDIuIOiOt+WPluaXpeaAu+enkuaVsCA9IOaXtirliIYq56eSXG4gICAgbGV0IGRheVRzID0gMjQgKiA2MCAqIDYwO1xuXG4gICAgLy8gMy4g5rGC5oC75aSp5pWwXG4gICAgbGV0IGRheVRvdGFsID0gTWF0aC5mbG9vcihjdXJyVHMgLyBkYXlUcyk7XG5cbiAgICAvLyA0LiDmsYLlh7rlvZPml6XlvIDlp4vml7bnp5LmlbBcbiAgICBsZXQgZGF5WmVyb1RzID0gZGF5VG90YWwgKiBkYXlUcztcblxuICAgIC8vIDUuIOWOu+aOieaXtuW3rijov5Tlm57nmoTmmK/liIYp77yM6ZyA6KaB6L2s5oiQ56eSXG4gICAgbGV0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwOyAgLy8gLTQ4MFxuXG4gICAgbGV0IGN1clN0YXJ0U2Vjb25kID0gKGRheVplcm9UcyArIG9mZnNldCkgKiAxMDAwO1xuICAgIHJldHVybiBjdXJTdGFydFNlY29uZDtcbiAgfVxufVxuXG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/UIType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbe8bWphk5MTILAjW/MJXs1', 'UIType');
// src/game/consts/UIType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderType_1 = require("./LoaderType");
var UIType = /** @class */ (function () {
    function UIType() {
    }
    UIType.init = function () {
        LoaderType_1.default.addUIModule(this.gameView);
    };
    UIType.gameView = { mname: "main", uname: "GameMainView", isRelease: false, url: null, clickClose: true }; //网格
    return UIType;
}());
exports.default = UIType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvVUlUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNDO0FBRXRDO0lBQUE7SUFRQSxDQUFDO0lBSlUsV0FBSSxHQUFYO1FBQ0ksb0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFKTSxlQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQSxDQUFBLElBQUk7SUFNakgsYUFBQztDQVJELEFBUUMsSUFBQTtrQkFSb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2FkZXJUeXBlIGZyb20gXCIuL0xvYWRlclR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlUeXBlIHtcblxuICAgIHN0YXRpYyBnYW1lVmlldyA9IHsgbW5hbWU6IFwibWFpblwiLCB1bmFtZTogXCJHYW1lTWFpblZpZXdcIiwgaXNSZWxlYXNlOiBmYWxzZSwgdXJsOiBudWxsLCBjbGlja0Nsb3NlOiB0cnVlIH0vL+e9keagvFxuXG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIExvYWRlclR5cGUuYWRkVUlNb2R1bGUodGhpcy5nYW1lVmlldyk7XG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/StorageType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24be7bg51BLOrBqbIyqstqw', 'StorageType');
// src/game/consts/StorageType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageType = /** @class */ (function () {
    function StorageType() {
    }
    StorageType.level = 'level'; //当前等级
    StorageType.gameData = "gameData";
    StorageType.uiCionfig = "uiCionfig";
    StorageType.wareHouse = "wareHouse";
    StorageType.offlineTimestamp = "offlineTimestamp"; // 计算离线收益的时间戳
    StorageType.isAutoSell = "isAutoSell"; //是否自动结账
    return StorageType;
}());
exports.default = StorageType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvU3RvcmFnZVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQVBVLGlCQUFLLEdBQVcsT0FBTyxDQUFDLENBQUEsTUFBTTtJQUU5QixvQkFBUSxHQUFHLFVBQVUsQ0FBQztJQUN0QixxQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixxQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qiw0QkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxDQUFBLGFBQWE7SUFDbkQsc0JBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQSxRQUFRO0lBQzdDLGtCQUFDO0NBUkQsQUFRQyxJQUFBO2tCQVJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZVR5cGUge1xuICAgIHN0YXRpYyBsZXZlbDogc3RyaW5nID0gJ2xldmVsJzsvL+W9k+WJjeetiee6p1xuXG4gICAgc3RhdGljIGdhbWVEYXRhID0gXCJnYW1lRGF0YVwiO1xuICAgIHN0YXRpYyB1aUNpb25maWcgPSBcInVpQ2lvbmZpZ1wiO1xuICAgIHN0YXRpYyB3YXJlSG91c2UgPSBcIndhcmVIb3VzZVwiO1xuICAgIHN0YXRpYyBvZmZsaW5lVGltZXN0YW1wID0gXCJvZmZsaW5lVGltZXN0YW1wXCI7Ly8g6K6h566X56a757q/5pS255uK55qE5pe26Ze05oizXG4gICAgc3RhdGljIGlzQXV0b1NlbGwgPSBcImlzQXV0b1NlbGxcIjsvL+aYr+WQpuiHquWKqOe7k+i0plxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/consts/LoaderType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f458ZAWxtG2r021kEgJxgl', 'LoaderType');
// src/game/consts/LoaderType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleType = void 0;
var LoaderManager_1 = require("../../framework/manager/LoaderManager");
var ModuleType;
(function (ModuleType) {
    ModuleType["commonRes"] = "commonRes";
})(ModuleType = exports.ModuleType || (exports.ModuleType = {}));
var LoaderType = /** @class */ (function () {
    function LoaderType() {
    }
    //命名规则 texture 统一 用 res 当后缀，prefab无特殊后缀
    LoaderType.initConfig = function () {
        var key;
        //prefab
        for (key in this.prefabs) {
            LoaderManager_1.default.setModuleConfig(this.prefabs[key]);
        }
        //textures
        for (key in this.textures) {
            LoaderManager_1.default.setModuleConfig(this.textures[key]);
        }
        //config
        LoaderManager_1.default.setModuleConfig(this.config);
    };
    /**
     * 添加UI加载模块
     */
    LoaderType.addUIModule = function (data) {
        if (!!data) {
            data.url = this.UIURL + data.mname;
            LoaderManager_1.default.setModuleConfig(data);
        }
    };
    LoaderType.UIURL = "prefab/";
    LoaderType.textures = {
        'commonRes': { mname: 'common', url: 'texture/common', isRelease: false },
    };
    LoaderType.prefabs = {
        itemIcon: { mname: 'itemIcon', url: 'main', isRelease: true },
    };
    LoaderType.config = { mname: 'config', url: 'config', isRelease: true };
    return LoaderType;
}());
exports.default = LoaderType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvTG9hZGVyVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0Y7QUFDbEYsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ2xCLHFDQUF1QixDQUFBO0FBQzNCLENBQUMsRUFGVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUVyQjtBQUNEO0lBQUE7SUF3Q0EsQ0FBQztJQTVCRyx1Q0FBdUM7SUFDaEMscUJBQVUsR0FBakI7UUFDSSxJQUFJLEdBQUcsQ0FBQztRQUNSLFFBQVE7UUFDUixLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RCLHVCQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELFVBQVU7UUFDVixLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLHVCQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUVELFFBQVE7UUFDUix1QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksc0JBQVcsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuQyx1QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUVMLENBQUM7SUF0Q00sZ0JBQUssR0FBVyxTQUFTLENBQUM7SUFDMUIsbUJBQVEsR0FBRztRQUNkLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7S0FDNUUsQ0FBQTtJQUVNLGtCQUFPLEdBQUc7UUFDYixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtLQUNoRSxDQUFBO0lBRU0saUJBQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUE7SUE4QnZFLGlCQUFDO0NBeENELEFBd0NDLElBQUE7a0JBeENvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYWRlck1hbmFnZXIsIHsgbW9kdWxlRGF0YSB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XG5leHBvcnQgZW51bSBNb2R1bGVUeXBlIHtcbiAgICBjb21tb25SZXMgPSBcImNvbW1vblJlc1wiLFxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyVHlwZSB7XG4gICAgc3RhdGljIFVJVVJMOiBzdHJpbmcgPSBcInByZWZhYi9cIjtcbiAgICBzdGF0aWMgdGV4dHVyZXMgPSB7XG4gICAgICAgICdjb21tb25SZXMnOiB7IG1uYW1lOiAnY29tbW9uJywgdXJsOiAndGV4dHVyZS9jb21tb24nLCBpc1JlbGVhc2U6IGZhbHNlIH0sXG4gICAgfVxuXG4gICAgc3RhdGljIHByZWZhYnMgPSB7XG4gICAgICAgIGl0ZW1JY29uOiB7IG1uYW1lOiAnaXRlbUljb24nLCB1cmw6ICdtYWluJywgaXNSZWxlYXNlOiB0cnVlIH0sXG4gICAgfVxuXG4gICAgc3RhdGljIGNvbmZpZyA9IHsgbW5hbWU6ICdjb25maWcnLCB1cmw6ICdjb25maWcnLCBpc1JlbGVhc2U6IHRydWUgfVxuXG4gICAgLy/lkb3lkI3op4TliJkgdGV4dHVyZSDnu5/kuIAg55SoIHJlcyDlvZPlkI7nvIDvvIxwcmVmYWLml6DnibnmrorlkI7nvIBcbiAgICBzdGF0aWMgaW5pdENvbmZpZygpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgLy9wcmVmYWJcbiAgICAgICAgZm9yIChrZXkgaW4gdGhpcy5wcmVmYWJzKSB7XG4gICAgICAgICAgICBMb2FkZXJNYW5hZ2VyLnNldE1vZHVsZUNvbmZpZyh0aGlzLnByZWZhYnNba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3RleHR1cmVzXG4gICAgICAgIGZvciAoa2V5IGluIHRoaXMudGV4dHVyZXMpIHtcbiAgICAgICAgICAgIExvYWRlck1hbmFnZXIuc2V0TW9kdWxlQ29uZmlnKHRoaXMudGV4dHVyZXNba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NvbmZpZ1xuICAgICAgICBMb2FkZXJNYW5hZ2VyLnNldE1vZHVsZUNvbmZpZyh0aGlzLmNvbmZpZyk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqBVSeWKoOi9veaooeWdl1xuICAgICAqL1xuICAgIHN0YXRpYyBhZGRVSU1vZHVsZShkYXRhKSB7XG4gICAgICAgIGlmICghIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEudXJsID0gdGhpcy5VSVVSTCArIGRhdGEubW5hbWU7XG4gICAgICAgICAgICBMb2FkZXJNYW5hZ2VyLnNldE1vZHVsZUNvbmZpZyhkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/helper/StorageHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0749a0nyQxK55Bic4xXIWLa', 'StorageHelper');
// src/framework/helper/StorageHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageHelper = /** @class */ (function () {
    function StorageHelper() {
    }
    StorageHelper.saveValueByKey = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    StorageHelper.getValueByKey = function (key) {
        return cc.sys.localStorage.getItem(key);
    };
    StorageHelper.saveJsonByKey = function (key, value) {
        this.saveValueByKey(key, JSON.stringify(value));
    };
    StorageHelper.getJsonByKey = function (key) {
        var jsonStr = cc.sys.localStorage.getItem(key);
        if (jsonStr) {
            return JSON.parse(jsonStr);
        }
        return null;
    };
    StorageHelper.removeValueByKey = function (key) {
        return cc.sys.localStorage.removeItem(key);
    };
    StorageHelper.removeAll = function () {
        cc.sys.localStorage.clear();
    };
    return StorageHelper;
}());
exports.default = StorageHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2hlbHBlci9TdG9yYWdlSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXFDQSxDQUFDO0lBbkNVLDRCQUFjLEdBQXJCLFVBQXNCLEdBQVUsRUFBQyxLQUFtQjtRQUVoRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSwyQkFBYSxHQUFwQixVQUFxQixHQUFVO1FBRTNCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSwyQkFBYSxHQUFwQixVQUFxQixHQUFVLEVBQUMsS0FBWTtRQUV4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLDBCQUFZLEdBQW5CLFVBQW9CLEdBQVU7UUFFMUIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUcsT0FBTyxFQUNWO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVNLDhCQUFnQixHQUF2QixVQUF3QixHQUFVO1FBRTlCLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSx1QkFBUyxHQUFoQjtRQUVJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTCxvQkFBQztBQUFELENBckNBLEFBcUNDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlSGVscGVyIHtcblxuICAgIHN0YXRpYyBzYXZlVmFsdWVCeUtleShrZXk6c3RyaW5nLHZhbHVlOnN0cmluZ3xudW1iZXIpXG4gICAge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LHZhbHVlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VmFsdWVCeUtleShrZXk6c3RyaW5nKTogc3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBzYXZlSnNvbkJ5S2V5KGtleTpzdHJpbmcsdmFsdWU6b2JqZWN0KVxuICAgIHtcbiAgICAgICAgdGhpcy5zYXZlVmFsdWVCeUtleShrZXksSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SnNvbkJ5S2V5KGtleTpzdHJpbmcpXG4gICAge1xuICAgICAgICB2YXIganNvblN0ciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZihqc29uU3RyKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uU3RyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVZhbHVlQnlLZXkoa2V5OnN0cmluZylcbiAgICB7XG4gICAgICAgIHJldHVybiBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlQWxsKClcbiAgICB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/manager/EffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02b31nAW5lCxqeiXU1dH2M0', 'EffectManager');
// src/game/manager/EffectManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSHelper_1 = require("../../framework/helper/JSHelper");
var EventDispath_1 = require("../../framework/message/EventDispath");
var EventType_1 = require("../../framework/message/EventType");
var MkUtils_1 = require("../../framework/tools/MkUtils");
var EffectManager = /** @class */ (function () {
    function EffectManager() {
        this.init();
    }
    EffectManager.instance = function () {
        if (!this._instance) {
            this._instance = new EffectManager();
        }
        return this._instance;
    };
    EffectManager.prototype.init = function () {
    };
    // 飞金币
    EffectManager.prototype.playCoinFly = function (startPos, coinType, moneyNum, count, cb) {
        if (coinType === void 0) { coinType = 1; }
        if (moneyNum === void 0) { moneyNum = 0; }
        if (cb === void 0) { cb = null; }
        if (!count) {
            count = 10;
        }
        JSHelper_1.default.playEffect("reward_normal", false, true);
        var num = 0;
        var _loop_1 = function (index) {
            var goodsNodeName = "imgMoney";
            if (coinType == 2) {
                goodsNodeName = "imgGold";
            }
            else if (coinType == 3) {
                goodsNodeName = "imgMyd";
            }
            var goodsNode = MkUtils_1.default.findNodeByName(cc.director.getScene(), goodsNodeName);
            if (goodsNode) {
                var node_1 = new cc.Node();
                var sprite_1 = node_1.addComponent(cc.Sprite);
                var imgUrl = "texture/common/icon_money";
                if (coinType == 2) {
                    imgUrl = "texture/common/icon_gold";
                }
                else if (coinType == 3) {
                    imgUrl = "texture/common/icon_myd";
                }
                MkUtils_1.default.loadSpriteFrame(imgUrl, function (spriteFrame) {
                    sprite_1.spriteFrame = spriteFrame;
                    cc.director.getScene().addChild(node_1, 200);
                    node_1.setPosition(startPos);
                    var scale = MkUtils_1.default.randomNMF(0.8, 1.2);
                    node_1.setScale(scale);
                    var endWorldPos = goodsNode.convertToWorldSpaceAR(cc.v2(0, 0));
                    var endNodePos = endWorldPos;
                    var dis = MkUtils_1.default.twoPointDistance(endNodePos, node_1.getPosition());
                    if (coinType == 1) {
                        var xPos = MkUtils_1.default.randomNM(-200, 200);
                        var yPos = MkUtils_1.default.randomNM(-200, 200);
                        var xPos1 = MkUtils_1.default.randomNM(-200, 200);
                        var yPos1 = MkUtils_1.default.randomNM(-200, 200);
                        var bezier = [cc.v2(startPos.x + xPos, startPos.y + yPos), cc.v2(endNodePos.x + xPos1, endNodePos.y + yPos1), endNodePos];
                        node_1.runAction(cc.sequence(cc.moveBy(0.2, cc.v2(-5, 5)).easing(cc.easeOut(4.0)), cc.delayTime(0.2), cc.bezierTo(dis / 800, bezier).easing(cc.easeOut(1.0)), cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(function () {
                            if (index == count - 1) {
                                cb && cb();
                                EventDispath_1.default.send(EventType_1.EventType.UPDATE_MONEY, moneyNum);
                            }
                        }), cc.destroySelf()));
                    }
                    else {
                        var xPos = MkUtils_1.default.randomNM(-100, 100);
                        var yPos = MkUtils_1.default.randomNM(-100, 100);
                        num++;
                        var delayTime = 0.1 + num * 0.05;
                        node_1.runAction(cc.sequence(cc.moveBy(0.4, cc.v2(xPos, yPos)).easing(cc.easeOut(4.0)), cc.delayTime(delayTime), cc.moveTo(dis / 1500, endNodePos).easing(cc.easeOut(1.0)), cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(function () {
                            if (index == count - 1) {
                                cb && cb();
                                if (coinType == 2)
                                    EventDispath_1.default.send(EventType_1.EventType.UPDATE_GOLD, moneyNum);
                                else
                                    EventDispath_1.default.send(EventType_1.EventType.UPDATE_ACCET_DEGREE);
                            }
                        }), cc.destroySelf()));
                    }
                }.bind(this_1));
            }
        };
        var this_1 = this;
        for (var index = 0; index < count; index++) {
            _loop_1(index);
        }
    };
    return EffectManager;
}());
exports.default = EffectManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tYW5hZ2VyL0VmZmVjdE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQscUVBQWdFO0FBQ2hFLCtEQUE4RDtBQUM5RCx5REFBb0Q7QUFFcEQ7SUFHSTtRQUNJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sc0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBRWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUUxQixDQUFDO0lBRU8sNEJBQUksR0FBWjtJQUVBLENBQUM7SUFDRCxNQUFNO0lBQ04sbUNBQVcsR0FBWCxVQUFZLFFBQWlCLEVBQUUsUUFBWSxFQUFFLFFBQVksRUFBRSxLQUFjLEVBQUUsRUFBbUI7UUFBL0QseUJBQUEsRUFBQSxZQUFZO1FBQUUseUJBQUEsRUFBQSxZQUFZO1FBQWtCLG1CQUFBLEVBQUEsU0FBbUI7UUFDMUYsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDZDtRQUNELGtCQUFRLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dDQUNILEtBQUs7WUFDVixJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUE7WUFDOUIsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUNmLGFBQWEsR0FBRyxTQUFTLENBQUE7YUFDNUI7aUJBQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUN0QixhQUFhLEdBQUcsUUFBUSxDQUFBO2FBRTNCO1lBQ0QsSUFBSSxTQUFTLEdBQVksaUJBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQTtZQUN0RixJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLE1BQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtnQkFDeEIsSUFBSSxRQUFNLEdBQUcsTUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBRXpDLElBQUksTUFBTSxHQUFHLDJCQUEyQixDQUFBO2dCQUN4QyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ2YsTUFBTSxHQUFHLDBCQUEwQixDQUFBO2lCQUN0QztxQkFBTSxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLE1BQU0sR0FBRyx5QkFBeUIsQ0FBQTtpQkFFckM7Z0JBQ0QsaUJBQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFVBQVUsV0FBVztvQkFDakQsUUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7b0JBQ2hDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQUksRUFBRSxHQUFHLENBQUMsQ0FBQTtvQkFDMUMsTUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFFMUIsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO29CQUN2QyxNQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUVwQixJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDOUQsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFBO29CQUM1QixJQUFJLEdBQUcsR0FBRyxpQkFBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxNQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtvQkFDbEUsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO3dCQUNmLElBQUksSUFBSSxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO3dCQUN0QyxJQUFJLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDdEMsSUFBSSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7d0JBQ3ZDLElBQUksS0FBSyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO3dCQUN2QyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQzFILE1BQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDdEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3BELEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN0RCxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDcEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBQ1IsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQ0FDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO2dDQUNYLHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzZCQUN2RDt3QkFDTCxDQUFDLENBQUMsRUFDRixFQUFFLENBQUMsV0FBVyxFQUFFLENBQ25CLENBQUMsQ0FBQTtxQkFDTDt5QkFBTTt3QkFDSCxJQUFJLElBQUksR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDdEMsSUFBSSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7d0JBQ3RDLEdBQUcsRUFBRSxDQUFDO3dCQUNOLElBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO3dCQUNqQyxNQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3RCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDekQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3pELEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNwQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFDbEIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDUixJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dDQUNwQixFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Z0NBQ1gsSUFBSSxRQUFRLElBQUksQ0FBQztvQ0FBRSxzQkFBWSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQzs7b0NBQ2pFLHNCQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs2QkFDekQ7d0JBQ0wsQ0FBQyxDQUFDLEVBQ0YsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUNuQixDQUFDLENBQUE7cUJBQ0w7Z0JBQ0wsQ0FBQyxDQUFDLElBQUksUUFBTSxDQUFDLENBQUE7YUFDaEI7OztRQXpFTCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRTtvQkFBakMsS0FBSztTQTBFYjtJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBdEdBLEFBc0dDLElBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSlNIZWxwZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9oZWxwZXIvSlNIZWxwZXJcIjtcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50VHlwZVwiO1xuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XG5cbmNsYXNzIEVmZmVjdE1hbmFnZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRWZmZWN0TWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcblxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRWZmZWN0TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpIHtcblxuICAgIH1cbiAgICAvLyDpo57ph5HluIFcbiAgICBwbGF5Q29pbkZseShzdGFydFBvczogY2MuVmVjMiwgY29pblR5cGUgPSAxLCBtb25leU51bSA9IDAsIGNvdW50PzogbnVtYmVyLCBjYjogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGlmICghY291bnQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgSlNIZWxwZXIucGxheUVmZmVjdChcInJld2FyZF9ub3JtYWxcIiwgZmFsc2UsIHRydWUpO1xuICAgICAgICBsZXQgbnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZ29vZHNOb2RlTmFtZSA9IFwiaW1nTW9uZXlcIlxuICAgICAgICAgICAgaWYgKGNvaW5UeXBlID09IDIpIHtcbiAgICAgICAgICAgICAgICBnb29kc05vZGVOYW1lID0gXCJpbWdHb2xkXCJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29pblR5cGUgPT0gMykge1xuICAgICAgICAgICAgICAgIGdvb2RzTm9kZU5hbWUgPSBcImltZ015ZFwiXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBnb29kc05vZGU6IGNjLk5vZGUgPSBNS1V0aWxzLmZpbmROb2RlQnlOYW1lKGNjLmRpcmVjdG9yLmdldFNjZW5lKCksIGdvb2RzTm9kZU5hbWUpXG4gICAgICAgICAgICBpZiAoZ29vZHNOb2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSlcblxuICAgICAgICAgICAgICAgIGxldCBpbWdVcmwgPSBcInRleHR1cmUvY29tbW9uL2ljb25fbW9uZXlcIlxuICAgICAgICAgICAgICAgIGlmIChjb2luVHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZ1VybCA9IFwidGV4dHVyZS9jb21tb24vaWNvbl9nb2xkXCJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvaW5UeXBlID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nVXJsID0gXCJ0ZXh0dXJlL2NvbW1vbi9pY29uX215ZFwiXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoaW1nVXJsLCBmdW5jdGlvbiAoc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChub2RlLCAyMDApXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oc3RhcnRQb3MpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gTUtVdGlscy5yYW5kb21OTUYoMC44LCAxLjIpXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUoc2NhbGUpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFdvcmxkUG9zID0gZ29vZHNOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZE5vZGVQb3MgPSBlbmRXb3JsZFBvc1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzID0gTUtVdGlscy50d29Qb2ludERpc3RhbmNlKGVuZE5vZGVQb3MsIG5vZGUuZ2V0UG9zaXRpb24oKSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvaW5UeXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4UG9zID0gTUtVdGlscy5yYW5kb21OTSgtMjAwLCAyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeVBvcyA9IE1LVXRpbHMucmFuZG9tTk0oLTIwMCwgMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHhQb3MxID0gTUtVdGlscy5yYW5kb21OTSgtMjAwLCAyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeVBvczEgPSBNS1V0aWxzLnJhbmRvbU5NKC0yMDAsIDIwMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZXppZXIgPSBbY2MudjIoc3RhcnRQb3MueCArIHhQb3MsIHN0YXJ0UG9zLnkgKyB5UG9zKSwgY2MudjIoZW5kTm9kZVBvcy54ICsgeFBvczEsIGVuZE5vZGVQb3MueSArIHlQb3MxKSwgZW5kTm9kZVBvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoMC4yLCBjYy52MigtNSwgNSkpLmVhc2luZyhjYy5lYXNlT3V0KDQuMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmJlemllclRvKGRpcyAvIDgwMCwgYmV6aWVyKS5lYXNpbmcoY2MuZWFzZU91dCgxLjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMS4yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gY291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlVQREFURV9NT05FWSwgbW9uZXlOdW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVzdHJveVNlbGYoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4UG9zID0gTUtVdGlscy5yYW5kb21OTSgtMTAwLCAxMDApXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeVBvcyA9IE1LVXRpbHMucmFuZG9tTk0oLTEwMCwgMTAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVsYXlUaW1lID0gMC4xICsgbnVtICogMC4wNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSgwLjQsIGNjLnYyKHhQb3MsIHlQb3MpKS5lYXNpbmcoY2MuZWFzZU91dCg0LjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoZGVsYXlUaW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oZGlzIC8gMTUwMCwgZW5kTm9kZVBvcykuZWFzaW5nKGNjLmVhc2VPdXQoMS4wKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEuMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2luVHlwZSA9PSAyKSBFdmVudERpc3BhdGguc2VuZChFdmVudFR5cGUuVVBEQVRFX0dPTEQsIG1vbmV5TnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgRXZlbnREaXNwYXRoLnNlbmQoRXZlbnRUeXBlLlVQREFURV9BQ0NFVF9ERUdSRUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVzdHJveVNlbGYoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWZmZWN0TWFuYWdlci5pbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/loader/GroupData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c120kUIcBP8pWJONbvPDs2', 'GroupData');
// src/framework/loader/GroupData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler_1 = require("../base/Handler");
var GroupData = /** @class */ (function () {
    function GroupData() {
        this.resources = null;
        this.isActive = true; //默认可以使用
        this.handler = null; //回调函数
        this.loaderHandler = null; //单个资源加载完成的回调函数
        this.resultArr = []; //返回结果
        this.loaderCount = 0; //加载完成的数量
    }
    GroupData.prototype.getCompletetHandler = function () {
        this.resultArr.length = 0;
        this.loaderCount = 0;
        this.loaderHandler = Handler_1.default.create(this._signLoaderComplete, this, false);
        return this.loaderHandler;
    };
    GroupData.prototype._signLoaderComplete = function (res, url) {
        // cc.log(res,url);
        this._putToResultByName(res, url);
        if (this.loaderCount >= this.resources.length) {
            this.handler.call(this.resultArr);
            this.reset();
        }
        //比对是否全部加载完成 如果全部完成回调 同时重置data
    };
    GroupData.prototype._putToResultByName = function (res, url) {
        for (var index = 0; index < this.resources.length; index++) {
            var element = this.resources[index];
            if (!!url && url.indexOf(element.fileName) != -1) {
                this.resultArr[index] = res;
                this.loaderCount++;
                break;
            }
        }
    };
    GroupData.prototype.reset = function () {
        this.isActive = false;
        this.resources = null;
        if (!!this.handler) {
            this.handler.release();
        }
        if (!!this.loaderHandler) {
            this.loaderHandler.release();
        }
        this.resultArr.length = 0;
        this.loaderCount = 0;
        this.loaderHandler = null;
    };
    return GroupData;
}());
exports.default = GroupData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Hcm91cERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFPdEM7SUFBQTtRQUNXLGNBQVMsR0FBd0IsSUFBSSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBTSxRQUFRO1FBQzlCLFlBQU8sR0FBRyxJQUFJLENBQUMsQ0FBTyxNQUFNO1FBQzNCLGtCQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZTtRQUNyQyxjQUFTLEdBQWMsRUFBRSxDQUFDLENBQU8sTUFBTTtRQUN2QyxnQkFBVyxHQUFVLENBQUMsQ0FBQyxDQUFNLFNBQVM7SUEyQ2xELENBQUM7SUF6Q0csdUNBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVELHVDQUFtQixHQUFuQixVQUFvQixHQUFHLEVBQUMsR0FBRztRQUN2QixtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtRQUNELDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsc0NBQWtCLEdBQWxCLFVBQW1CLEdBQUcsRUFBQyxHQUFHO1FBQ3RCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN4RCxJQUFNLE9BQU8sR0FBaUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUM1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07YUFDVDtTQUNKO0lBQ0wsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMxQjtRQUNELElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuZXhwb3J0IGludGVyZmFjZSBHcm91cEZpbGVEYXRhIHtcbiAgICBmaWxlTmFtZTpzdHJpbmcsXG4gICAgdHlwZTpzdHJpbmcsXG4gICAgbW9kdWxlTmFtZTpzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBEYXRhIHtcbiAgICBwdWJsaWMgcmVzb3VyY2VzOkFycmF5PEdyb3VwRmlsZURhdGE+ID0gbnVsbDtcbiAgICBwdWJsaWMgaXNBY3RpdmUgPSB0cnVlOyAgICAgIC8v6buY6K6k5Y+v5Lul5L2/55SoXG4gICAgcHVibGljIGhhbmRsZXIgPSBudWxsOyAgICAgICAvL+Wbnuiwg+WHveaVsFxuICAgIHByaXZhdGUgbG9hZGVySGFuZGxlciA9IG51bGw7IC8v5Y2V5Liq6LWE5rqQ5Yqg6L295a6M5oiQ55qE5Zue6LCD5Ye95pWwXG4gICAgcHJpdmF0ZSByZXN1bHRBcnI6QXJyYXk8YW55PiA9IFtdOyAgICAgICAvL+i/lOWbnue7k+aenFxuICAgIHByaXZhdGUgbG9hZGVyQ291bnQ6bnVtYmVyID0gMDsgICAgICAvL+WKoOi9veWujOaIkOeahOaVsOmHj1xuXG4gICAgZ2V0Q29tcGxldGV0SGFuZGxlcigpe1xuICAgICAgICB0aGlzLnJlc3VsdEFyci5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmxvYWRlckNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5sb2FkZXJIYW5kbGVyID0gSGFuZGxlci5jcmVhdGUodGhpcy5fc2lnbkxvYWRlckNvbXBsZXRlLHRoaXMsZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZXJIYW5kbGVyO1xuICAgIH1cblxuICAgIF9zaWduTG9hZGVyQ29tcGxldGUocmVzLHVybCl7XG4gICAgICAgIC8vIGNjLmxvZyhyZXMsdXJsKTtcbiAgICAgICAgdGhpcy5fcHV0VG9SZXN1bHRCeU5hbWUocmVzLHVybCk7XG4gICAgICAgIGlmICh0aGlzLmxvYWRlckNvdW50ID49IHRoaXMucmVzb3VyY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwodGhpcy5yZXN1bHRBcnIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIC8v5q+U5a+55piv5ZCm5YWo6YOo5Yqg6L295a6M5oiQIOWmguaenOWFqOmDqOWujOaIkOWbnuiwgyDlkIzml7bph43nva5kYXRhXG4gICAgfVxuXG4gICAgX3B1dFRvUmVzdWx0QnlOYW1lKHJlcyx1cmwpe1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50Okdyb3VwRmlsZURhdGEgPSB0aGlzLnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoISF1cmwgJiYgdXJsLmluZGV4T2YoZWxlbWVudC5maWxlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdEFycltpbmRleF0gPSByZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZXJDb3VudCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IG51bGw7XG4gICAgICAgIGlmKCEhdGhpcy5oYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCEhdGhpcy5sb2FkZXJIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlckhhbmRsZXIucmVsZWFzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0QXJyLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMubG9hZGVyQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmxvYWRlckhhbmRsZXIgPSBudWxsO1xuICAgIH1cbn1cblxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/loader/LoaderItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a782bOpltZFDqYDSXLBnYiA', 'LoaderItem');
// src/framework/loader/LoaderItem.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//需要加载的资源
var LoaderItem = /** @class */ (function () {
    function LoaderItem() {
        this.resources = {};
        this.isRelease = false;
        this.url = null;
        this.maxRetryTimes = 0; //最大重试次数
        this.isActive = true; //默认可以使用
        this.sameArr = null;
    }
    LoaderItem.prototype.load = function (url, type, handler) {
        var _this = this;
        this.url = url;
        cc.loader.loadRes(url, type, function (err, res) {
            if (err) {
                handler && handler.call(null);
                cc.error('资源加载失败--' + url);
                return;
            }
            !!handler && handler.call(res, url);
            if (!!_this.sameArr) {
                for (var i = 0; i < _this.sameArr.length; i++) {
                    _this.sameArr[i] && _this.sameArr[i].call(res, url);
                }
                _this.sameArr.length = 0;
            }
            _this._cacheRes(res);
        });
    };
    LoaderItem.prototype.addSame = function (handler) {
        if (!this.sameArr) {
            this.sameArr = [];
        }
        this.sameArr.push(handler);
    };
    //设置已存在的资源的key
    LoaderItem.prototype.setExsitRes = function (exsits) {
        for (var key in this.resources) {
            exsits[key] = true;
        }
    };
    /**
 * 缓存已使用资源
 * @param resource 缓存单个资源的所有使用资源
 */
    LoaderItem.prototype._cacheRes = function (resource) {
        var loader = cc.loader;
        this.cresource = resource; //存储当前资源，用于后期释放
        for (var _i = 0, _a = loader.getDependsRecursively(resource); _i < _a.length; _i++) {
            var key = _a[_i];
            // cc.log(key,this.resources[key]);
            this.resources[key] = true;
        }
    };
    //释放完成后重置加载器
    LoaderItem.prototype.reset = function () {
        this.isActive = true;
        this.url = null;
        for (var key in this.resources) {
            delete this.resources[key];
        }
        this.cresource = null;
        if (this.sameArr) {
            this.sameArr.length = 0;
        }
    };
    LoaderItem.prototype.release = function (exsits) {
        for (var key in this.resources) {
            if (key in exsits) {
                continue;
            }
            else {
                cc.loader.release(key);
            }
        }
        if (!!this.cresource) {
            cc.loader.release(this.cresource);
        }
        this.reset();
    };
    return LoaderItem;
}());
exports.default = LoaderItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Mb2FkZXJJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBUztBQUNUO0lBQUE7UUFFSSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixRQUFHLEdBQVUsSUFBSSxDQUFDO1FBQ2xCLGtCQUFhLEdBQVUsQ0FBQyxDQUFDLENBQUUsUUFBUTtRQUNuQyxhQUFRLEdBQVcsSUFBSSxDQUFDLENBQUksUUFBUTtRQUNwQyxZQUFPLEdBQWtCLElBQUksQ0FBQztJQTZFbEMsQ0FBQztJQTFFRyx5QkFBSSxHQUFKLFVBQUssR0FBRyxFQUFDLElBQUksRUFBQyxPQUFPO1FBQXJCLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUMsVUFBQyxHQUFHLEVBQUMsR0FBRztZQUMvQixJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE9BQU87YUFDVjtZQUNELENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEQ7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsT0FBTztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsY0FBYztJQUNkLGdDQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRUc7OztHQUdEO0lBQ0gsOEJBQVMsR0FBVCxVQUFVLFFBQVE7UUFDZCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUEsZUFBZTtRQUN6QyxLQUFnQixVQUFzQyxFQUF0QyxLQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsRUFBdEMsY0FBc0MsRUFBdEMsSUFBc0MsRUFBRTtZQUFuRCxJQUFJLEdBQUcsU0FBQTtZQUNSLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUVMLENBQUM7SUFFRCxZQUFZO0lBQ1osMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLE1BQU07UUFDVixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSyxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUNoQixTQUFTO2FBQ1o7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDSjtRQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTCxpQkFBQztBQUFELENBcEZBLEFBb0ZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XG5cbi8v6ZyA6KaB5Yqg6L2955qE6LWE5rqQXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXJJdGVtXG57XG4gICAgcmVzb3VyY2VzID0ge307XG4gICAgaXNSZWxlYXNlID0gZmFsc2U7XG4gICAgdXJsOnN0cmluZyA9IG51bGw7XG4gICAgbWF4UmV0cnlUaW1lczpudW1iZXIgPSAwOyAgLy/mnIDlpKfph43or5XmrKHmlbBcbiAgICBpc0FjdGl2ZTpib29sZWFuID0gdHJ1ZTsgICAgLy/pu5jorqTlj6/ku6Xkvb/nlKhcbiAgICBzYW1lQXJyOkFycmF5PEhhbmRsZXI+ID0gbnVsbDtcbiAgICBjcmVzb3VyY2U6Y2MuQXNzZXQ7XG5cbiAgICBsb2FkKHVybCx0eXBlLGhhbmRsZXIpe1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLHR5cGUsKGVycixyZXMpPT57XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciAmJiBoYW5kbGVyLmNhbGwobnVsbCk7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+i1hOa6kOWKoOi9veWksei0pS0tJyArIHVybCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgISFoYW5kbGVyICYmIGhhbmRsZXIuY2FsbChyZXMsdXJsKTtcbiAgICAgICAgICAgIGlmICghIXRoaXMuc2FtZUFycikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zYW1lQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2FtZUFycltpXSAmJiB0aGlzLnNhbWVBcnJbaV0uY2FsbChyZXMsdXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zYW1lQXJyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jYWNoZVJlcyhyZXMpO1xuICAgICAgICB9KTsgXG4gICAgfVxuXG4gICAgYWRkU2FtZShoYW5kbGVyKXtcbiAgICAgICAgaWYgKCF0aGlzLnNhbWVBcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2FtZUFyciA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2FtZUFyci5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8v6K6+572u5bey5a2Y5Zyo55qE6LWE5rqQ55qEa2V5XG4gICAgc2V0RXhzaXRSZXMoZXhzaXRzKXtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgICAgICAgICBleHNpdHNba2V5XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgICAgIC8qKlxuICAgICAqIOe8k+WtmOW3suS9v+eUqOi1hOa6kFxuICAgICAqIEBwYXJhbSByZXNvdXJjZSDnvJPlrZjljZXkuKrotYTmupDnmoTmiYDmnInkvb/nlKjotYTmupBcbiAgICAgKi9cbiAgICBfY2FjaGVSZXMocmVzb3VyY2UpIHtcbiAgICAgICAgbGV0IGxvYWRlciA9IGNjLmxvYWRlcjtcbiAgICAgICAgdGhpcy5jcmVzb3VyY2UgPSByZXNvdXJjZTsvL+WtmOWCqOW9k+WJjei1hOa6kO+8jOeUqOS6juWQjuacn+mHiuaUvlxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgbG9hZGVyLmdldERlcGVuZHNSZWN1cnNpdmVseShyZXNvdXJjZSkpIHtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhrZXksdGhpcy5yZXNvdXJjZXNba2V5XSk7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlc1trZXldID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvL+mHiuaUvuWujOaIkOWQjumHjee9ruWKoOi9veWZqFxuICAgIHJlc2V0KCl7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVybCA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnJlc291cmNlcykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVzb3VyY2VzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVzb3VyY2UgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5zYW1lQXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNhbWVBcnIubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbGVhc2UoZXhzaXRzKXtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMucmVzb3VyY2VzKSB7XG4gICAgICAgICAgICBpZiAoIGtleSBpbiBleHNpdHMpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2Uoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoISF0aGlzLmNyZXNvdXJjZSkge1xuICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UodGhpcy5jcmVzb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43a9eM2IMFLF72v/Sws7ycN', 'DataManager');
// src/framework/manager/DataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventConst_1 = require("../../game/consts/EventConst");
var DataManager = /** @class */ (function () {
    function DataManager() {
        this._configData = {};
        this._barrageIndex = 1;
        this._viewState = EventConst_1.default.VIEW_STATE_NORMAL;
    }
    DataManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new DataManager();
        }
        return this._instance;
    };
    DataManager.prototype.init = function () {
        this.loadJson();
    };
    DataManager.prototype.loadJson = function () {
        var _this = this;
        var baseUrl = "config/";
        var jsonList = [
            "allConf"
        ];
        var _loop_1 = function (i) {
            var jsonFile = baseUrl + jsonList[i];
            cc.loader.loadRes(jsonFile, cc.JsonAsset, function (error, res) {
                if (error) {
                    console.error("JSON文件加载失败 ", jsonFile);
                    return;
                }
                _this._configData[jsonList[i]] = res;
            });
        };
        for (var i = 0; i < jsonList.length; ++i) {
            _loop_1(i);
        }
    };
    DataManager.prototype.getConfig = function (mname) {
        return this._configData[mname] || null;
    };
    DataManager.prototype.getJson = function (mname) {
        var config = this.getConfig(mname);
        if (!config) {
            return null;
        }
        return config["json"];
    };
    DataManager.prototype.setViewState = function (state) {
        this._viewState = state;
    };
    DataManager.prototype.getViewState = function () {
        return this._viewState;
    };
    DataManager._instance = null;
    return DataManager;
}());
;
exports.default = DataManager.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvRGF0YU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFdEQ7SUFBQTtRQUNVLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGVBQVUsR0FBVyxvQkFBVSxDQUFDLGlCQUFpQixDQUFDO0lBZ0Q1RCxDQUFDO0lBL0NRLHVCQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQyxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDeEIsSUFBSSxRQUFRLEdBQUc7WUFDYixTQUFTO1NBQ1YsQ0FBQztnQ0FDTyxDQUFDO1lBQ1IsSUFBSSxRQUFRLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO2dCQUNuRCxJQUFJLEtBQUssRUFBRTtvQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDdkMsT0FBTztpQkFDUjtnQkFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQzs7UUFSTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7b0JBQS9CLENBQUM7U0FTVDtJQUNILENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3pDLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsS0FBYTtRQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFoRE0scUJBQVMsR0FBZ0IsSUFBSSxDQUFDO0lBaUR2QyxrQkFBQztDQXBERCxBQW9EQyxJQUFBO0FBQUEsQ0FBQztBQUNGLGtCQUFlLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudENvbnN0IGZyb20gXCIuLi8uLi9nYW1lL2NvbnN0cy9FdmVudENvbnN0XCI7XG5cbmNsYXNzIERhdGFNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBfY29uZmlnRGF0YTogYW55ID0ge307XG4gIHB1YmxpYyBfYmFycmFnZUluZGV4OiBudW1iZXIgPSAxO1xuICBzdGF0aWMgX2luc3RhbmNlOiBEYXRhTWFuYWdlciA9IG51bGw7XG4gIHByaXZhdGUgX3ZpZXdTdGF0ZTogbnVtYmVyID0gRXZlbnRDb25zdC5WSUVXX1NUQVRFX05PUk1BTDtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERhdGFNYW5hZ2VyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5sb2FkSnNvbigpO1xuICB9XG5cbiAgbG9hZEpzb24oKSB7XG4gICAgbGV0IGJhc2VVcmwgPSBcImNvbmZpZy9cIjtcbiAgICBsZXQganNvbkxpc3QgPSBbXG4gICAgICBcImFsbENvbmZcIlxuICAgIF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IGpzb25GaWxlID0gYmFzZVVybCArIGpzb25MaXN0W2ldO1xuICAgICAgY2MubG9hZGVyLmxvYWRSZXMoanNvbkZpbGUsIGNjLkpzb25Bc3NldCwgKGVycm9yLCByZXMpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkpTT07mlofku7bliqDovb3lpLHotKUgXCIsIGpzb25GaWxlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29uZmlnRGF0YVtqc29uTGlzdFtpXV0gPSByZXM7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRDb25maWcobW5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWdEYXRhW21uYW1lXSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0SnNvbihtbmFtZTogc3RyaW5nKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKG1uYW1lKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb25maWdbXCJqc29uXCJdO1xuICB9XG5cbiAgc2V0Vmlld1N0YXRlKHN0YXRlOiBudW1iZXIpIHtcbiAgICB0aGlzLl92aWV3U3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIGdldFZpZXdTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld1N0YXRlO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/LoaderManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d98DuCbVHjaiNY0xfwvkU', 'LoaderManager');
// src/framework/manager/LoaderManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler_1 = require("../base/Handler");
var GroupLoader_1 = require("../loader/GroupLoader");
var Loader_1 = require("../loader/Loader");
var ComponentHelper_1 = require("../tools/ComponentHelper");
var LoaderManager = /** @class */ (function () {
    function LoaderManager() {
        //模块配置数据,由外部传入
        this.moudleConfigs = {};
        //loader 模块加载器
        this.moudleLoaders = {};
        this.groupLoader = null;
    }
    LoaderManager.instance = function () {
        if (!this._instance) {
            this._instance = new LoaderManager();
        }
        return this._instance;
    };
    /**
     *
     * @param fileName 文件名
     * @param type 文件类型
     * @param handler 回调函数
     * @param mname 模块名
     */
    LoaderManager.prototype.loadRes = function (fileName, type, handler, mname) {
        var info = this.checkModuleConfig(mname);
        if (!!info) {
            if (!this.moudleLoaders[mname]) {
                this.moudleLoaders[mname] = new Loader_1.default(info.isRelease);
            }
            var url = info.url + '/' + fileName;
            this.moudleLoaders[mname].addLoaderItem(url, type, handler);
        }
        else {
            cc.error('module no exist: ' + mname);
        }
    };
    /**
     * 设置模块数据 外部调用
     * @param data 模块数据
     */
    LoaderManager.prototype.setModuleConfig = function (data) {
        if (!!data) {
            if (!this.moudleConfigs.hasOwnProperty(data.mname)) {
                this.moudleConfigs[data.mname] = data;
            }
        }
        else {
            cc.error('module config error');
        }
    };
    /**
     * 加载sprite
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderSpriteFrame = function (fileName, handler, mname) {
        this.loadRes(fileName, cc.SpriteFrame, handler, mname);
    };
    /**
     * 加载Prefab
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderPrefab = function (fileName, handler, mname) {
        this.loadRes(fileName, cc.Prefab, handler, mname);
    };
    /**
     * 加载json
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderJson = function (fileName, handler, mname) {
        this.loadRes(fileName, cc.JsonAsset, handler, mname);
    };
    /**
     * 加载spine
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderSpine = function (fileName, handler, mname) {
        this.loadRes(fileName, sp.SkeletonData, handler, mname);
    };
    /**
     * 加载动画
     * @param fileName
     * @param handler
     * @param mname
     */
    LoaderManager.prototype.loaderAniamteClip = function (fileName, handler, mname) {
        this.loadRes(fileName, cc.AnimationClip, handler, mname);
    };
    /**
     * 加载sprite并赋值
     * @param node sprite节点
     * @param fileName 文件名
     * @param mname 模块名
     */
    LoaderManager.prototype.load2Sprite = function (node, fileName, mname) {
        this.loadRes(fileName, cc.SpriteFrame, Handler_1.default.create(function (res) {
            ComponentHelper_1.default.spriteFrame(node, res);
        }, this), mname);
    };
    /**
     * 资源按组加载
     * @param resArr 资源集合
     * @param handler 全部加载完成回调
     */
    LoaderManager.prototype.loaderResByGroup = function (resArr, handler) {
        if (!this.groupLoader) {
            this.groupLoader = new GroupLoader_1.default();
        }
        this.groupLoader.addGroup(resArr, handler);
    };
    //通过loaderInfo加载资源 主要用于资源内存管理
    /**
     * 检查释放配置过对应的模块
     * @param moduleName 模块名称
     */
    LoaderManager.prototype.checkModuleConfig = function (moduleName) {
        if (!!this.moudleConfigs[moduleName]) {
            return this.moudleConfigs[moduleName];
        }
        return null;
    };
    /**
     * 释放模块
     * @param moduleName 模块名称
     */
    LoaderManager.prototype.releaseByModule = function (moduleName) {
        var exsitResource = {};
        //生成排除的资源集合
        for (var key in this.moudleLoaders) {
            if (!this.moudleLoaders[key].needRelease && key != moduleName) {
                this.moudleLoaders[key].getAllResUID(exsitResource);
            }
        }
        var needRelease = this.moudleLoaders[moduleName];
        if (needRelease) {
            needRelease.release(exsitResource);
        }
        // cc.log(this.moudleLoaders);
    };
    LoaderManager.prototype.releaseAllModule = function () {
        for (var key in this.moudleLoaders) {
            this.moudleLoaders[key].releaseItem();
        }
    };
    //mname 模块名
    LoaderManager.prototype.isRelease = function (mname) {
        if (this.moudleLoaders.hasOwnProperty(mname)) {
            return this.moudleLoaders[mname].needRelease;
        }
        return false;
    };
    return LoaderManager;
}());
exports.default = LoaderManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvTG9hZGVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QyxxREFBZ0Q7QUFFaEQsMkNBQXNDO0FBQ3RDLDREQUF1RDtBQVd2RDtJQUFBO1FBQ0ksY0FBYztRQUNOLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBQ3ZDLGNBQWM7UUFDTixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFnQixJQUFJLENBQUM7SUFxSzVDLENBQUM7SUFqS2lCLHNCQUFRLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCwrQkFBTyxHQUFQLFVBQVEsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsT0FBZ0IsRUFBRSxLQUFhO1FBQ2hFLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNILEVB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ZSxHQUFmLFVBQWdCLFVBQWtCO1FBQzlCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN2QixXQUFXO1FBQ1gsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN2RDtTQUNKO1FBQ0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLFdBQVcsRUFBRTtZQUNiLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEM7UUFDRCw4QkFBOEI7SUFDbEMsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNJLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVELFdBQVc7SUFDWCxpQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQTFLQSxBQTBLQyxJQUFBO0FBQ0Qsa0JBQWUsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IEdyb3VwTG9hZGVyIGZyb20gXCIuLi9sb2FkZXIvR3JvdXBMb2FkZXJcIjtcbmltcG9ydCB7IEdyb3VwRmlsZURhdGEgfSBmcm9tIFwiLi4vbG9hZGVyL0dyb3VwRGF0YVwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vbG9hZGVyL0xvYWRlclwiO1xuaW1wb3J0IENvbXBvbmVudEhlbHBlciBmcm9tIFwiLi4vdG9vbHMvQ29tcG9uZW50SGVscGVyXCI7XG5cbi8qKlxuICog6LWE5rqQ5Yqg6L295qih5Z2X5pWw5o2uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgbW9kdWxlRGF0YSB7XG4gICAgbW5hbWU6IHN0cmluZywvL+aooeWdl+WQjeensFxuICAgIHVybDogc3RyaW5nLCAvL+aooeWdl+WvueW6lOeahOi3r+W+hFxuICAgIGlzUmVsZWFzZTogYm9vbGVhbiAvL+mHiuaUvuWPr+S7pemHiuaUvlxufVxuXG5jbGFzcyBMb2FkZXJNYW5hZ2VyIHtcbiAgICAvL+aooeWdl+mFjee9ruaVsOaNriznlLHlpJbpg6jkvKDlhaVcbiAgICBwcml2YXRlIG1vdWRsZUNvbmZpZ3MgPSA8bW9kdWxlRGF0YT57fTtcbiAgICAvL2xvYWRlciDmqKHlnZfliqDovb3lmahcbiAgICBwcml2YXRlIG1vdWRsZUxvYWRlcnMgPSA8TG9hZGVyPnt9O1xuICAgIHByaXZhdGUgZ3JvdXBMb2FkZXI6IEdyb3VwTG9hZGVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTG9hZGVyTWFuYWdlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogTG9hZGVyTWFuYWdlciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IExvYWRlck1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIOaWh+S7tuWQjVxuICAgICAqIEBwYXJhbSB0eXBlIOaWh+S7tuexu+Wei1xuICAgICAqIEBwYXJhbSBoYW5kbGVyIOWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSBtbmFtZSDmqKHlnZflkI1cbiAgICAgKi9cbiAgICBsb2FkUmVzKGZpbGVOYW1lOiBzdHJpbmcsIHR5cGU6IGFueSwgaGFuZGxlcjogSGFuZGxlciwgbW5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgaW5mbzogbW9kdWxlRGF0YSA9IHRoaXMuY2hlY2tNb2R1bGVDb25maWcobW5hbWUpO1xuICAgICAgICBpZiAoISFpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91ZGxlTG9hZGVyc1ttbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdWRsZUxvYWRlcnNbbW5hbWVdID0gbmV3IExvYWRlcihpbmZvLmlzUmVsZWFzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXJsID0gaW5mby51cmwgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICAgIHRoaXMubW91ZGxlTG9hZGVyc1ttbmFtZV0uYWRkTG9hZGVySXRlbSh1cmwsIHR5cGUsIGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoJ21vZHVsZSBubyBleGlzdDogJyArIG1uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaooeWdl+aVsOaNriDlpJbpg6josIPnlKhcbiAgICAgKiBAcGFyYW0gZGF0YSDmqKHlnZfmlbDmja5cbiAgICAgKi9cbiAgICBzZXRNb2R1bGVDb25maWcoZGF0YTogbW9kdWxlRGF0YSkge1xuICAgICAgICBpZiAoISFkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW91ZGxlQ29uZmlncy5oYXNPd25Qcm9wZXJ0eShkYXRhLm1uYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW91ZGxlQ29uZmlnc1tkYXRhLm1uYW1lXSA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcignbW9kdWxlIGNvbmZpZyBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L29c3ByaXRlXG4gICAgICogQHBhcmFtIGZpbGVOYW1lIFxuICAgICAqIEBwYXJhbSBoYW5kbGVyIFxuICAgICAqIEBwYXJhbSBtbmFtZSBcbiAgICAgKi9cbiAgICBsb2FkZXJTcHJpdGVGcmFtZShmaWxlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCBtbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcyhmaWxlTmFtZSwgY2MuU3ByaXRlRnJhbWUsIGhhbmRsZXIsIG1uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb1QcmVmYWJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgXG4gICAgICogQHBhcmFtIGhhbmRsZXIgXG4gICAgICogQHBhcmFtIG1uYW1lIFxuICAgICAqL1xuICAgIGxvYWRlclByZWZhYihmaWxlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCBtbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcyhmaWxlTmFtZSwgY2MuUHJlZmFiLCBoYW5kbGVyLCBtbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L29anNvblxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSBcbiAgICAgKiBAcGFyYW0gaGFuZGxlciBcbiAgICAgKiBAcGFyYW0gbW5hbWUgXG4gICAgICovXG4gICAgbG9hZGVySnNvbihmaWxlTmFtZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCBtbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcyhmaWxlTmFtZSwgY2MuSnNvbkFzc2V0LCBoYW5kbGVyLCBtbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L29c3BpbmVcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgXG4gICAgICogQHBhcmFtIGhhbmRsZXIgXG4gICAgICogQHBhcmFtIG1uYW1lIFxuICAgICAqL1xuICAgIGxvYWRlclNwaW5lKGZpbGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIsIG1uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLCBzcC5Ta2VsZXRvbkRhdGEsIGhhbmRsZXIsIG1uYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3liqjnlLtcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgXG4gICAgICogQHBhcmFtIGhhbmRsZXIgXG4gICAgICogQHBhcmFtIG1uYW1lIFxuICAgICAqL1xuICAgIGxvYWRlckFuaWFtdGVDbGlwKGZpbGVOYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIsIG1uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLCBjYy5BbmltYXRpb25DbGlwLCBoYW5kbGVyLCBtbmFtZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb1zcHJpdGXlubbotYvlgLxcbiAgICAgKiBAcGFyYW0gbm9kZSBzcHJpdGXoioLngrlcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUg5paH5Lu25ZCNXG4gICAgICogQHBhcmFtIG1uYW1lIOaooeWdl+WQjVxuICAgICAqL1xuICAgIGxvYWQyU3ByaXRlKG5vZGU6IGNjLk5vZGUsIGZpbGVOYW1lOiBzdHJpbmcsIG1uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzKGZpbGVOYW1lLCBjYy5TcHJpdGVGcmFtZSwgSGFuZGxlci5jcmVhdGUoKHJlcykgPT4ge1xuICAgICAgICAgICAgQ29tcG9uZW50SGVscGVyLnNwcml0ZUZyYW1lKG5vZGUsIHJlcyk7XG4gICAgICAgIH0sIHRoaXMpLCBtbmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6LWE5rqQ5oyJ57uE5Yqg6L29XG4gICAgICogQHBhcmFtIHJlc0FyciDotYTmupDpm4blkIhcbiAgICAgKiBAcGFyYW0gaGFuZGxlciDlhajpg6jliqDovb3lrozmiJDlm57osINcbiAgICAgKi9cbiAgICBsb2FkZXJSZXNCeUdyb3VwKHJlc0FycjogQXJyYXk8R3JvdXBGaWxlRGF0YT4sIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmdyb3VwTG9hZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdyb3VwTG9hZGVyID0gbmV3IEdyb3VwTG9hZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncm91cExvYWRlci5hZGRHcm91cChyZXNBcnIsIGhhbmRsZXIpO1xuICAgIH1cblxuXG4gICAgLy/pgJrov4dsb2FkZXJJbmZv5Yqg6L296LWE5rqQIOS4u+imgeeUqOS6jui1hOa6kOWGheWtmOeuoeeQhlxuICAgIC8qKlxuICAgICAqIOajgOafpemHiuaUvumFjee9rui/h+WvueW6lOeahOaooeWdl1xuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lIOaooeWdl+WQjeensFxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tNb2R1bGVDb25maWcobW9kdWxlTmFtZTogc3RyaW5nKTogbW9kdWxlRGF0YSB7XG4gICAgICAgIGlmICghIXRoaXMubW91ZGxlQ29uZmlnc1ttb2R1bGVOYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW91ZGxlQ29uZmlnc1ttb2R1bGVOYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph4rmlL7mqKHlnZdcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZSDmqKHlnZflkI3np7BcbiAgICAgKi9cbiAgICByZWxlYXNlQnlNb2R1bGUobW9kdWxlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBleHNpdFJlc291cmNlID0ge307XG4gICAgICAgIC8v55Sf5oiQ5o6S6Zmk55qE6LWE5rqQ6ZuG5ZCIXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLm1vdWRsZUxvYWRlcnMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb3VkbGVMb2FkZXJzW2tleV0ubmVlZFJlbGVhc2UgJiYga2V5ICE9IG1vZHVsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdWRsZUxvYWRlcnNba2V5XS5nZXRBbGxSZXNVSUQoZXhzaXRSZXNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRSZWxlYXNlID0gdGhpcy5tb3VkbGVMb2FkZXJzW21vZHVsZU5hbWVdO1xuICAgICAgICBpZiAobmVlZFJlbGVhc2UpIHtcbiAgICAgICAgICAgIG5lZWRSZWxlYXNlLnJlbGVhc2UoZXhzaXRSZXNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MubG9nKHRoaXMubW91ZGxlTG9hZGVycyk7XG4gICAgfVxuXG4gICAgcmVsZWFzZUFsbE1vZHVsZSgpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMubW91ZGxlTG9hZGVycykge1xuICAgICAgICAgICAgdGhpcy5tb3VkbGVMb2FkZXJzW2tleV0ucmVsZWFzZUl0ZW0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vbW5hbWUg5qih5Z2X5ZCNXG4gICAgaXNSZWxlYXNlKG1uYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMubW91ZGxlTG9hZGVycy5oYXNPd25Qcm9wZXJ0eShtbmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdWRsZUxvYWRlcnNbbW5hbWVdLm5lZWRSZWxlYXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRlck1hbmFnZXIuaW5zdGFuY2UoKTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/UIEffectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26202sVGqBE0YykrPyeNJkW', 'UIEffectManager');
// src/framework/manager/UIEffectManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIEffectType = void 0;
var ScaleUIEffect_1 = require("../ui/effect/ScaleUIEffect");
var FadeUIEffect_1 = require("../ui/effect/FadeUIEffect");
var TopUIEffect_1 = require("../ui/effect/TopUIEffect");
var TopBackUIEffect_1 = require("../ui/effect/TopBackUIEffect");
var ScaleBackUIEffect_1 = require("../ui/effect/ScaleBackUIEffect");
var FadeBackUIEffect_1 = require("../ui/effect/FadeBackUIEffect");
var UIEffectType;
(function (UIEffectType) {
    UIEffectType["SCALE"] = "scale";
    UIEffectType["SCALEBACK"] = "scaleback";
    UIEffectType["FADE"] = "fade";
    UIEffectType["FADEBACK"] = "fadeback";
    UIEffectType["LEFT"] = "left";
    UIEffectType["RIGHT"] = "right";
    UIEffectType["TOP"] = "top";
    UIEffectType["BOTTOM"] = "bottom";
    UIEffectType["TOPBACK"] = "topback";
})(UIEffectType = exports.UIEffectType || (exports.UIEffectType = {}));
var UIEffectManager = /** @class */ (function () {
    function UIEffectManager() {
        this.effectObj = {};
        this.effectType = {};
        this.effectType[UIEffectType.SCALE] = ScaleUIEffect_1.default;
        this.effectType[UIEffectType.FADE] = FadeUIEffect_1.default;
        this.effectType[UIEffectType.TOP] = TopUIEffect_1.default;
        this.effectType[UIEffectType.TOPBACK] = TopBackUIEffect_1.default;
        this.effectType[UIEffectType.SCALEBACK] = ScaleBackUIEffect_1.default;
        this.effectType[UIEffectType.FADEBACK] = FadeBackUIEffect_1.default;
    }
    UIEffectManager.instance = function () {
        if (!this._instance) {
            this._instance = new UIEffectManager();
        }
        return this._instance;
    };
    UIEffectManager.prototype.effect = function (type, node, isOpen, handler, time) {
        if (time === void 0) { time = 0.3; }
        if (!this.effectObj.hasOwnProperty(type)) {
            this.effectObj[type] = new this.effectType[type]();
        }
        this.effectObj[type].run(node, time, isOpen, handler);
    };
    return UIEffectManager;
}());
exports.default = UIEffectManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDREQUF1RDtBQUN2RCwwREFBcUQ7QUFDckQsd0RBQW1EO0FBQ25ELGdFQUEyRDtBQUMzRCxvRUFBK0Q7QUFDL0Qsa0VBQTZEO0FBRTdELElBQVksWUFVWDtBQVZELFdBQVksWUFBWTtJQUN0QiwrQkFBZSxDQUFBO0lBQ2YsdUNBQXVCLENBQUE7SUFDdkIsNkJBQWEsQ0FBQTtJQUNiLHFDQUFxQixDQUFBO0lBQ3JCLDZCQUFhLENBQUE7SUFDYiwrQkFBZSxDQUFBO0lBQ2YsMkJBQVcsQ0FBQTtJQUNYLGlDQUFpQixDQUFBO0lBQ2pCLG1DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFWVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQVV2QjtBQUNEO0lBS0U7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyx1QkFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLHNCQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyx5QkFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLDJCQUFpQixDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLDBCQUFnQixDQUFDO0lBQzVELENBQUM7SUFFTSx3QkFBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sSUFBWSxFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsT0FBZ0IsRUFBRSxJQUFrQjtRQUFsQixxQkFBQSxFQUFBLFVBQWtCO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQUVELGtCQUFlLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi9iYXNlL0hhbmRsZXJcIjtcbmltcG9ydCBTY2FsZVVJRWZmZWN0IGZyb20gXCIuLi91aS9lZmZlY3QvU2NhbGVVSUVmZmVjdFwiO1xuaW1wb3J0IEZhZGVVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L0ZhZGVVSUVmZmVjdFwiO1xuaW1wb3J0IFRvcFVJRWZmZWN0IGZyb20gXCIuLi91aS9lZmZlY3QvVG9wVUlFZmZlY3RcIjtcbmltcG9ydCBUb3BCYWNrVUlFZmZlY3QgZnJvbSBcIi4uL3VpL2VmZmVjdC9Ub3BCYWNrVUlFZmZlY3RcIjtcbmltcG9ydCBTY2FsZUJhY2tVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L1NjYWxlQmFja1VJRWZmZWN0XCI7XG5pbXBvcnQgRmFkZUJhY2tVSUVmZmVjdCBmcm9tIFwiLi4vdWkvZWZmZWN0L0ZhZGVCYWNrVUlFZmZlY3RcIjtcblxuZXhwb3J0IGVudW0gVUlFZmZlY3RUeXBlIHtcbiAgU0NBTEUgPSBcInNjYWxlXCIsXG4gIFNDQUxFQkFDSyA9IFwic2NhbGViYWNrXCIsXG4gIEZBREUgPSBcImZhZGVcIixcbiAgRkFERUJBQ0sgPSAnZmFkZWJhY2snLFxuICBMRUZUID0gXCJsZWZ0XCIsXG4gIFJJR0hUID0gXCJyaWdodFwiLFxuICBUT1AgPSBcInRvcFwiLFxuICBCT1RUT00gPSBcImJvdHRvbVwiLFxuICBUT1BCQUNLID0gXCJ0b3BiYWNrXCIsXG59XG5jbGFzcyBVSUVmZmVjdE1hbmFnZXIge1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFVJRWZmZWN0TWFuYWdlcjtcbiAgcHJpdmF0ZSBlZmZlY3RPYmo6IE9iamVjdDtcbiAgcHJpdmF0ZSBlZmZlY3RUeXBlOiBPYmplY3Q7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZmZlY3RPYmogPSB7fTtcbiAgICB0aGlzLmVmZmVjdFR5cGUgPSB7fTtcbiAgICB0aGlzLmVmZmVjdFR5cGVbVUlFZmZlY3RUeXBlLlNDQUxFXSA9IFNjYWxlVUlFZmZlY3Q7XG4gICAgdGhpcy5lZmZlY3RUeXBlW1VJRWZmZWN0VHlwZS5GQURFXSA9IEZhZGVVSUVmZmVjdDtcbiAgICB0aGlzLmVmZmVjdFR5cGVbVUlFZmZlY3RUeXBlLlRPUF0gPSBUb3BVSUVmZmVjdDtcbiAgICB0aGlzLmVmZmVjdFR5cGVbVUlFZmZlY3RUeXBlLlRPUEJBQ0tdID0gVG9wQmFja1VJRWZmZWN0O1xuICAgIHRoaXMuZWZmZWN0VHlwZVtVSUVmZmVjdFR5cGUuU0NBTEVCQUNLXSA9IFNjYWxlQmFja1VJRWZmZWN0O1xuICAgIHRoaXMuZWZmZWN0VHlwZVtVSUVmZmVjdFR5cGUuRkFERUJBQ0tdID0gRmFkZUJhY2tVSUVmZmVjdDtcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YW5jZSgpOiBVSUVmZmVjdE1hbmFnZXIge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFVJRWZmZWN0TWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBlZmZlY3QodHlwZTogc3RyaW5nLCBub2RlOiBjYy5Ob2RlLCBpc09wZW46IGJvb2xlYW4sIGhhbmRsZXI6IEhhbmRsZXIsIHRpbWU6IG51bWJlciA9IDAuMykge1xuICAgIGlmICghdGhpcy5lZmZlY3RPYmouaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgIHRoaXMuZWZmZWN0T2JqW3R5cGVdID0gbmV3IHRoaXMuZWZmZWN0VHlwZVt0eXBlXSgpO1xuICAgIH1cbiAgICB0aGlzLmVmZmVjdE9ialt0eXBlXS5ydW4obm9kZSwgdGltZSwgaXNPcGVuLCBoYW5kbGVyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSUVmZmVjdE1hbmFnZXIuaW5zdGFuY2UoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/UIMananger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81ea29RSKFHk6XLJxBkjz8t', 'UIMananger');
// src/framework/manager/UIMananger.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderManager_1 = require("./LoaderManager");
var Handler_1 = require("../base/Handler");
var GamePoolManager_1 = require("./GamePoolManager");
var UIEffectManager_1 = require("./UIEffectManager");
var UIState_1 = require("../ui/UIState");
var BaseTips_1 = require("../ui/BaseTips");
var BasePanel_1 = require("../ui/BasePanel");
var UIManager = /** @class */ (function () {
    function UIManager() {
        //resDic 资源集合
        this.ui_cache = {};
        this.view_cache = {};
        this.uiStateArr = []; //ui打开关闭管理
        this.activeStateArr = []; //当前激活的uistate
        this.barragePool = new cc.NodePool();
    }
    UIManager.instance = function () {
        if (!this._instance) {
            this._instance = new UIManager();
        }
        return this._instance;
    };
    UIManager.prototype.init = function () {
        this.viewLayer = new cc.Node('viewLayer');
        this.uiLayer = new cc.Node('uiLayer');
        this.maskLayer = new cc.Node('maskLayer');
        this.tipLayer = new cc.Node('tipLayer');
        this.sceneLayer = new cc.Node('sceneLayer');
        var canvas = cc.director.getScene().getChildByName('Canvas');
        this.viewLayer.parent = canvas;
        this.sceneLayer.parent = canvas;
        this.maskLayer.parent = canvas;
        this.uiLayer.parent = canvas;
        this.tipLayer.parent = canvas;
        this.currentView = null; //当前的view
    };
    UIManager.prototype.setTop = function () {
        if (!this.top)
            return;
        if (!this.top.parent) {
            this.uiLayer.addChild(this.top);
            this.top.setPosition(0, cc.winSize.height / 2 - 110);
        }
    };
    //显示view
    //pdata UIType中的key
    UIManager.prototype.showView = function (pdata) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!!pdata) {
            if (!!this.currentView) {
                if (this.currentView.uiName === pdata.uname) {
                    this.currentView.on_Show(args);
                    return;
                }
            }
            LoaderManager_1.default.loaderPrefab(pdata.uname, Handler_1.default.create(function (res) {
                if (!!res) {
                    res = GamePoolManager_1.default.instance(res, 'UView-' + pdata.uname);
                }
                else {
                    return;
                }
                if (!!_this.currentView) {
                    _this.closeAllOpenPanel();
                    _this.currentView.close();
                }
                var baseView = res.getComponent("BaseView");
                _this.view_cache[pdata.uname] = res;
                if (baseView) {
                    _this.currentView = baseView;
                    baseView.setUIName(pdata.uname);
                    baseView.setModuleName(pdata.mname);
                    baseView._show_();
                    baseView.on_Show(args);
                }
                else {
                    cc.error("请给面板添加BaseView的子类脚本");
                }
                // res.parent = this.viewLayer;
                _this.viewLayer.addChild(res);
                res.x = 0;
                res.y = 0;
            }, this), pdata.mname);
        }
        else {
            cc.log('制定打开的脚本不存在');
        }
    };
    UIManager.prototype.hideView = function (name) {
        var baseUI = this.view_cache[name].getComponent("BaseView");
        baseUI._hide_();
        baseUI.on_Hide();
        if (LoaderManager_1.default.isRelease(baseUI.moduleName)) {
            LoaderManager_1.default.releaseByModule(baseUI.moduleName);
            GamePoolManager_1.default.clearByTarget('UView-' + name);
        }
        else {
            GamePoolManager_1.default.putBackByTarget('UView-' + name);
        }
        this.view_cache[name] = null;
    };
    UIManager.prototype.showPanel = function (pdata, effect) {
        var _this = this;
        if (effect === void 0) { effect = UIEffectManager_1.UIEffectType.SCALE; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        console.log("打开面板", JSON.stringify(pdata));
        var state = this.checkPanelOpen(pdata); //如果有已经打开，并且不是可以多开的
        if (state) {
            return;
        }
        var newSate = this.getUIState(pdata);
        LoaderManager_1.default.loaderPrefab(pdata.uname, Handler_1.default.create(function (res, url, state) {
            if (res) {
                var panel = GamePoolManager_1.default.instance(res, 'UPanel-' + pdata.uname);
                var baseUI = panel.getComponent("BasePanel");
                if (!!baseUI) {
                    baseUI.init(pdata.clickClose);
                    baseUI.setUIName(pdata.uname);
                    baseUI.setModuleName(pdata.mname);
                    baseUI.setEffect(effect);
                    baseUI._show_(args); //打开前需要执行的函数
                    baseUI.startShow();
                    baseUI.setUIState(state);
                }
                else {
                    cc.error("请给面板添加BaseUI的子类脚本");
                    return;
                }
                // this.ui_cache[pdata.uname] = panel;
                if (!!effect) {
                    UIEffectManager_1.default.effect(effect, panel, false, Handler_1.default.create(_this.effectComplete, _this));
                }
                else {
                    baseUI.on_Show(); //真正的打开
                }
                baseUI.setUIParent(_this.uiLayer);
            }
        }, this, true, newSate), pdata.mname);
    };
    UIManager.prototype.checkPanel = function (panelName) {
        var uiLayerChild = this.uiLayer.children;
        for (var i = 0; i < uiLayerChild.length; ++i) {
            var layer = uiLayerChild[i];
            if (!layer.getComponent(BasePanel_1.default)) {
                continue;
            }
            if (layer.getComponent(BasePanel_1.default).uiName == panelName) {
                return true;
            }
        }
        return false;
    };
    /**
     * 通过ui名称隐藏
     * @param name ui名称
     */
    UIManager.prototype.hidePanel = function (name) {
        var uname = '';
        if (typeof (name) === 'string') {
            uname = name;
        }
        else {
            uname = name.uname;
        }
        var state = this.getUIStateByName(uname, true);
        if (!!state) {
            var baseUI = state.ui;
            baseUI.startHide();
            if (!!baseUI.effect) {
                //     UIEffectManager.effect(baseUI.effect + "back", baseUI.node, false, Handler.create(this.effectBackComplete, this));
                // } else {
                this.effectBackComplete(baseUI.node);
            }
        }
    };
    UIManager.prototype.showTips = function (pdata, effect) {
        var _this = this;
        if (effect === void 0) { effect = UIEffectManager_1.UIEffectType.SCALE; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var url = "prefab/" + pdata.mname + "/" + pdata.uname;
        var completeCb = function (err, res) {
            if (err) {
                cc.error('资源加载失败--' + url);
                return;
            }
            var tips = GamePoolManager_1.default.instance(res, 'UITips-' + pdata.uname);
            var baseTips = tips.getComponent(BaseTips_1.default);
            if (baseTips) {
                baseTips.setUIName(pdata.uname);
                baseTips._show_(args);
                baseTips.setDelayRemove(pdata.delayRemove);
                baseTips.setEffect(effect);
                baseTips.startShow();
            }
            else {
                cc.error("\u8BF7\u7ED9" + pdata.uname + "\u6DFB\u52A0BaseTips\u7684\u5B50\u7C7B\u811A\u672C");
            }
            if (effect) {
                // UIEffectManager.effect(effect, tips, false, Handler.create(this.effectComplete, this));
                UIEffectManager_1.default.effect(effect, tips, false, null); //Handle先不传
            }
            baseTips.setUIParent(_this.tipLayer);
            baseTips.on_Show();
        };
        var res = cc.loader.getRes(url, cc.Prefab);
        if (res) {
            completeCb(null, res);
            return;
        }
        cc.loader.loadRes(url, cc.Prefab, completeCb);
    };
    UIManager.prototype.checkTips = function (uName) {
        var tipLayerChild = this.tipLayer.children;
        for (var i = 0; i < tipLayerChild.length; ++i) {
            var layer = tipLayerChild[i];
            if (layer.getComponent(BaseTips_1.default)._uiName == uName) {
                return true;
            }
        }
        return false;
    };
    UIManager.prototype.hideTips = function (node) {
        if (!node) {
            return;
        }
        var baseTips = node.getComponent(BaseTips_1.default);
        if (baseTips) {
            baseTips.startHide();
            if (baseTips._effect) {
                UIEffectManager_1.default.effect(baseTips._effect + "back", node, false, Handler_1.default.create(function (tips) {
                    if (cc.isValid(tips)) {
                        baseTips._hide_();
                    }
                }, this));
            }
        }
    };
    UIManager.prototype.effectComplete = function (panel) {
        if (cc.isValid(panel)) {
            var baseUI = panel.getComponent("BasePanel");
            baseUI.on_Show();
        }
    };
    UIManager.prototype.effectBackComplete = function (panel) {
        if (cc.isValid(panel)) {
            var baseUI = panel.getComponent('BasePanel');
            baseUI.on_Hide();
            baseUI._hide_();
            // if (LoaderManager.isRelease(baseUI.moduleName)) {
            //     LoaderManager.releaseByModule(baseUI.moduleName);
            //     GamePoolManager.clearByTarget('UPanel-' + baseUI.uiName);
            // } else {
            //     GamePoolManager.putBackByTarget('UPanel-' + baseUI.uiName);
            // }
        }
    };
    UIManager.prototype.isShow = function (path) {
        if (this.ui_cache[path]) {
            return true;
        }
        return false;
    };
    UIManager.prototype.getUIStateByName = function (name, isRemove) {
        if (isRemove === void 0) { isRemove = false; }
        for (var index = 0; index < this.activeStateArr.length; index++) {
            var element = this.activeStateArr[index];
            if (name === element.uName) {
                if (isRemove) {
                    this.activeStateArr.splice(index, 1);
                }
                return element;
            }
        }
    };
    UIManager.prototype.closeAllOpenPanel = function () {
        for (var index = 0; index < this.activeStateArr.length; index++) {
            var element = this.activeStateArr[index];
            element.reset();
        }
        this.activeStateArr.length = 0;
    };
    UIManager.prototype.checkPanelOpen = function (data) {
        if (!!data) {
            //检测面板能否多开
            if (!!data.isMutl) {
                return false;
            }
            for (var index = this.activeStateArr.length - 1; index >= 0; index--) {
                var element = this.activeStateArr[index];
                if (element.isActive && element.uName === data.uname && element.openState > 0) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * 获得可用的uistate
     */
    UIManager.prototype.getUIState = function (data) {
        for (var index = 0; index < this.uiStateArr.length; index++) {
            var element = this.uiStateArr[index];
            if (!element.isActive) {
                element.reset();
                element.setData(data);
                this.activeStateArr.push(element);
                return element;
            }
        }
        var state = new UIState_1.UIState();
        state.setData(data);
        this.uiStateArr.push(state);
        this.activeStateArr.push(state);
        return state;
    };
    return UIManager;
}());
exports.default = UIManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlEQUE0QztBQUM1QywyQ0FBc0M7QUFDdEMscURBQWdEO0FBQ2hELHFEQUFrRTtBQUNsRSx5Q0FBd0M7QUFDeEMsMkNBQXNDO0FBQ3RDLDZDQUF3QztBQUl4QztJQUFBO1FBQ0UsYUFBYTtRQUNMLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBbUIsRUFBRSxDQUFDLENBQUEsVUFBVTtRQUMxQyxtQkFBYyxHQUFtQixFQUFFLENBQUMsQ0FBQSxjQUFjO1FBUW5ELGdCQUFXLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBdVR0RCxDQUFDO0lBclRRLGtCQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1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SSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsT0FBTyxLQUFLLENBQUM7SUFFZixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQXBVQSxBQW9VQyxJQUFBO0FBRUQsa0JBQWUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VWaWV3IGZyb20gXCIuLi91aS9CYXNlVmlld1wiO1xuaW1wb3J0IExvYWRlck1hbmFnZXIgZnJvbSBcIi4vTG9hZGVyTWFuYWdlclwiO1xuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IEdhbWVQb29sTWFuYWdlciBmcm9tIFwiLi9HYW1lUG9vbE1hbmFnZXJcIjtcbmltcG9ydCBVSUVmZmVjdE1hbmFnZXIsIHsgVUlFZmZlY3RUeXBlIH0gZnJvbSBcIi4vVUlFZmZlY3RNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSVN0YXRlIH0gZnJvbSBcIi4uL3VpL1VJU3RhdGVcIjtcbmltcG9ydCBCYXNlVGlwcyBmcm9tIFwiLi4vdWkvQmFzZVRpcHNcIjtcbmltcG9ydCBCYXNlUGFuZWwgZnJvbSBcIi4uL3VpL0Jhc2VQYW5lbFwiO1xuXG5cblxuY2xhc3MgVUlNYW5hZ2VyIHtcbiAgLy9yZXNEaWMg6LWE5rqQ6ZuG5ZCIXG4gIHByaXZhdGUgdWlfY2FjaGUgPSB7fTtcbiAgcHJpdmF0ZSB2aWV3X2NhY2hlID0ge307XG4gIHByaXZhdGUgdWlTdGF0ZUFycjogQXJyYXk8VUlTdGF0ZT4gPSBbXTsvL3Vp5omT5byA5YWz6Zet566h55CGXG4gIHByaXZhdGUgYWN0aXZlU3RhdGVBcnI6IEFycmF5PFVJU3RhdGU+ID0gW107Ly/lvZPliY3mv4DmtLvnmoR1aXN0YXRlXG4gIHB1YmxpYyB2aWV3TGF5ZXI6IGNjLk5vZGU7XG4gIHB1YmxpYyBtYXNrTGF5ZXI6IGNjLk5vZGU7XG4gIHB1YmxpYyB1aUxheWVyOiBjYy5Ob2RlO1xuICBwdWJsaWMgdGlwTGF5ZXI6IGNjLk5vZGU7XG4gIHB1YmxpYyBzY2VuZUxheWVyOiBjYy5Ob2RlO1xuICBwdWJsaWMgY3VycmVudFZpZXc6IEJhc2VWaWV3O1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFVJTWFuYWdlcjtcbiAgcHVibGljIGJhcnJhZ2VQb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xuXG4gIHN0YXRpYyBpbnN0YW5jZSgpOiBVSU1hbmFnZXIge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFVJTWFuYWdlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMudmlld0xheWVyID0gbmV3IGNjLk5vZGUoJ3ZpZXdMYXllcicpO1xuICAgIHRoaXMudWlMYXllciA9IG5ldyBjYy5Ob2RlKCd1aUxheWVyJyk7XG4gICAgdGhpcy5tYXNrTGF5ZXIgPSBuZXcgY2MuTm9kZSgnbWFza0xheWVyJyk7XG4gICAgdGhpcy50aXBMYXllciA9IG5ldyBjYy5Ob2RlKCd0aXBMYXllcicpO1xuICAgIHRoaXMuc2NlbmVMYXllciA9IG5ldyBjYy5Ob2RlKCdzY2VuZUxheWVyJyk7XG4gICAgbGV0IGNhbnZhcyA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpO1xuICAgIHRoaXMudmlld0xheWVyLnBhcmVudCA9IGNhbnZhcztcbiAgICB0aGlzLnNjZW5lTGF5ZXIucGFyZW50ID0gY2FudmFzO1xuICAgIHRoaXMubWFza0xheWVyLnBhcmVudCA9IGNhbnZhcztcbiAgICB0aGlzLnVpTGF5ZXIucGFyZW50ID0gY2FudmFzO1xuICAgIHRoaXMudGlwTGF5ZXIucGFyZW50ID0gY2FudmFzO1xuICAgIHRoaXMuY3VycmVudFZpZXcgPSBudWxsOy8v5b2T5YmN55qEdmlld1xuICB9XG4gIHRvcDogY2MuTm9kZTtcbiAgc2V0VG9wKCkge1xuICAgIGlmICghdGhpcy50b3ApIHJldHVybjtcbiAgICBpZiAoIXRoaXMudG9wLnBhcmVudCkge1xuICAgICAgdGhpcy51aUxheWVyLmFkZENoaWxkKHRoaXMudG9wKVxuICAgICAgdGhpcy50b3Auc2V0UG9zaXRpb24oMCwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyIC0gMTEwKTtcbiAgICB9XG4gIH1cblxuICAvL+aYvuekunZpZXdcbiAgLy9wZGF0YSBVSVR5cGXkuK3nmoRrZXlcbiAgc2hvd1ZpZXcocGRhdGEsIC4uLmFyZ3MpIHtcbiAgICBpZiAoISFwZGF0YSkge1xuICAgICAgaWYgKCEhdGhpcy5jdXJyZW50Vmlldykge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Vmlldy51aU5hbWUgPT09IHBkYXRhLnVuYW1lKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Vmlldy5vbl9TaG93KGFyZ3MpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBMb2FkZXJNYW5hZ2VyLmxvYWRlclByZWZhYihwZGF0YS51bmFtZSwgSGFuZGxlci5jcmVhdGUoKHJlcykgPT4ge1xuICAgICAgICBpZiAoISFyZXMpIHtcbiAgICAgICAgICByZXMgPSBHYW1lUG9vbE1hbmFnZXIuaW5zdGFuY2UocmVzLCAnVVZpZXctJyArIHBkYXRhLnVuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISF0aGlzLmN1cnJlbnRWaWV3KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUFsbE9wZW5QYW5lbCgpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFZpZXcuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFzZVZpZXcgPSByZXMuZ2V0Q29tcG9uZW50KFwiQmFzZVZpZXdcIik7XG5cbiAgICAgICAgdGhpcy52aWV3X2NhY2hlW3BkYXRhLnVuYW1lXSA9IHJlcztcbiAgICAgICAgaWYgKGJhc2VWaWV3KSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IGJhc2VWaWV3O1xuICAgICAgICAgIGJhc2VWaWV3LnNldFVJTmFtZShwZGF0YS51bmFtZSk7XG4gICAgICAgICAgYmFzZVZpZXcuc2V0TW9kdWxlTmFtZShwZGF0YS5tbmFtZSk7XG4gICAgICAgICAgYmFzZVZpZXcuX3Nob3dfKCk7XG4gICAgICAgICAgYmFzZVZpZXcub25fU2hvdyhhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjYy5lcnJvcihcIuivt+e7memdouadv+a3u+WKoEJhc2VWaWV355qE5a2Q57G76ISa5pysXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlcy5wYXJlbnQgPSB0aGlzLnZpZXdMYXllcjtcbiAgICAgICAgdGhpcy52aWV3TGF5ZXIuYWRkQ2hpbGQocmVzKTtcbiAgICAgICAgcmVzLnggPSAwO1xuICAgICAgICByZXMueSA9IDA7XG4gICAgICB9LCB0aGlzKSwgcGRhdGEubW5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYy5sb2coJ+WItuWumuaJk+W8gOeahOiEmuacrOS4jeWtmOWcqCcpO1xuICAgIH1cblxuICB9XG5cbiAgaGlkZVZpZXcobmFtZSkge1xuICAgIGxldCBiYXNlVUkgPSB0aGlzLnZpZXdfY2FjaGVbbmFtZV0uZ2V0Q29tcG9uZW50KFwiQmFzZVZpZXdcIik7XG4gICAgYmFzZVVJLl9oaWRlXygpO1xuICAgIGJhc2VVSS5vbl9IaWRlKCk7XG4gICAgaWYgKExvYWRlck1hbmFnZXIuaXNSZWxlYXNlKGJhc2VVSS5tb2R1bGVOYW1lKSkge1xuICAgICAgTG9hZGVyTWFuYWdlci5yZWxlYXNlQnlNb2R1bGUoYmFzZVVJLm1vZHVsZU5hbWUpO1xuICAgICAgR2FtZVBvb2xNYW5hZ2VyLmNsZWFyQnlUYXJnZXQoJ1VWaWV3LScgKyBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCgnVVZpZXctJyArIG5hbWUpO1xuICAgIH1cbiAgICB0aGlzLnZpZXdfY2FjaGVbbmFtZV0gPSBudWxsO1xuICB9XG5cbiAgc2hvd1BhbmVsKHBkYXRhLCBlZmZlY3QgPSBVSUVmZmVjdFR5cGUuU0NBTEUsIC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIuaJk+W8gOmdouadv1wiLCBKU09OLnN0cmluZ2lmeShwZGF0YSkpO1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuY2hlY2tQYW5lbE9wZW4ocGRhdGEpOy8v5aaC5p6c5pyJ5bey57uP5omT5byA77yM5bm25LiU5LiN5piv5Y+v5Lul5aSa5byA55qEXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBuZXdTYXRlID0gdGhpcy5nZXRVSVN0YXRlKHBkYXRhKTtcbiAgICBMb2FkZXJNYW5hZ2VyLmxvYWRlclByZWZhYihwZGF0YS51bmFtZSwgSGFuZGxlci5jcmVhdGUoKHJlcywgdXJsLCBzdGF0ZSkgPT4ge1xuICAgICAgaWYgKHJlcykge1xuICAgICAgICBsZXQgcGFuZWwgPSBHYW1lUG9vbE1hbmFnZXIuaW5zdGFuY2UocmVzLCAnVVBhbmVsLScgKyBwZGF0YS51bmFtZSk7XG4gICAgICAgIGxldCBiYXNlVUkgPSBwYW5lbC5nZXRDb21wb25lbnQoXCJCYXNlUGFuZWxcIik7XG4gICAgICAgIGlmICghIWJhc2VVSSkge1xuICAgICAgICAgIGJhc2VVSS5pbml0KHBkYXRhLmNsaWNrQ2xvc2UpO1xuICAgICAgICAgIGJhc2VVSS5zZXRVSU5hbWUocGRhdGEudW5hbWUpO1xuICAgICAgICAgIGJhc2VVSS5zZXRNb2R1bGVOYW1lKHBkYXRhLm1uYW1lKTtcbiAgICAgICAgICBiYXNlVUkuc2V0RWZmZWN0KGVmZmVjdCk7XG4gICAgICAgICAgYmFzZVVJLl9zaG93XyhhcmdzKTsvL+aJk+W8gOWJjemcgOimgeaJp+ihjOeahOWHveaVsFxuICAgICAgICAgIGJhc2VVSS5zdGFydFNob3coKTtcbiAgICAgICAgICBiYXNlVUkuc2V0VUlTdGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2MuZXJyb3IoXCLor7fnu5npnaLmnb/mt7vliqBCYXNlVUnnmoTlrZDnsbvohJrmnKxcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMudWlfY2FjaGVbcGRhdGEudW5hbWVdID0gcGFuZWw7XG4gICAgICAgIGlmICghIWVmZmVjdCkge1xuICAgICAgICAgIFVJRWZmZWN0TWFuYWdlci5lZmZlY3QoZWZmZWN0LCBwYW5lbCwgZmFsc2UsIEhhbmRsZXIuY3JlYXRlKHRoaXMuZWZmZWN0Q29tcGxldGUsIHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiYXNlVUkub25fU2hvdygpOy8v55yf5q2j55qE5omT5byAXG4gICAgICAgIH1cbiAgICAgICAgYmFzZVVJLnNldFVJUGFyZW50KHRoaXMudWlMYXllcik7XG4gICAgICB9XG5cbiAgICB9LCB0aGlzLCB0cnVlLCBuZXdTYXRlKSwgcGRhdGEubW5hbWUpO1xuICB9XG4gIGNoZWNrUGFuZWwocGFuZWxOYW1lKSB7XG4gICAgbGV0IHVpTGF5ZXJDaGlsZCA9IHRoaXMudWlMYXllci5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpTGF5ZXJDaGlsZC5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IGxheWVyID0gdWlMYXllckNoaWxkW2ldO1xuICAgICAgaWYgKCFsYXllci5nZXRDb21wb25lbnQoQmFzZVBhbmVsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXllci5nZXRDb21wb25lbnQoQmFzZVBhbmVsKS51aU5hbWUgPT0gcGFuZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog6YCa6L+HdWnlkI3np7DpmpDol49cbiAgICogQHBhcmFtIG5hbWUgdWnlkI3np7BcbiAgICovXG4gIGhpZGVQYW5lbChuYW1lOiBhbnkpIHtcbiAgICBsZXQgdW5hbWUgPSAnJztcbiAgICBpZiAodHlwZW9mIChuYW1lKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuYW1lID0gbmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5hbWUgPSBuYW1lLnVuYW1lO1xuICAgIH1cbiAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFVJU3RhdGVCeU5hbWUodW5hbWUsIHRydWUpO1xuICAgIGlmICghIXN0YXRlKSB7XG4gICAgICBsZXQgYmFzZVVJID0gc3RhdGUudWk7XG4gICAgICBiYXNlVUkuc3RhcnRIaWRlKCk7XG4gICAgICBpZiAoISFiYXNlVUkuZWZmZWN0KSB7XG4gICAgICAgIC8vICAgICBVSUVmZmVjdE1hbmFnZXIuZWZmZWN0KGJhc2VVSS5lZmZlY3QgKyBcImJhY2tcIiwgYmFzZVVJLm5vZGUsIGZhbHNlLCBIYW5kbGVyLmNyZWF0ZSh0aGlzLmVmZmVjdEJhY2tDb21wbGV0ZSwgdGhpcykpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVmZmVjdEJhY2tDb21wbGV0ZShiYXNlVUkubm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzaG93VGlwcyhwZGF0YSwgZWZmZWN0ID0gVUlFZmZlY3RUeXBlLlNDQUxFLCAuLi5hcmdzKSB7XG4gICAgbGV0IHVybCA9IFwicHJlZmFiL1wiICsgcGRhdGEubW5hbWUgKyBcIi9cIiArIHBkYXRhLnVuYW1lO1xuICAgIGxldCBjb21wbGV0ZUNiID0gKGVyciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNjLmVycm9yKCfotYTmupDliqDovb3lpLHotKUtLScgKyB1cmwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgdGlwczogY2MuTm9kZSA9IEdhbWVQb29sTWFuYWdlci5pbnN0YW5jZShyZXMsICdVSVRpcHMtJyArIHBkYXRhLnVuYW1lKTtcbiAgICAgIGxldCBiYXNlVGlwcyA9IHRpcHMuZ2V0Q29tcG9uZW50KEJhc2VUaXBzKTtcbiAgICAgIGlmIChiYXNlVGlwcykge1xuICAgICAgICBiYXNlVGlwcy5zZXRVSU5hbWUocGRhdGEudW5hbWUpO1xuICAgICAgICBiYXNlVGlwcy5fc2hvd18oYXJncyk7XG4gICAgICAgIGJhc2VUaXBzLnNldERlbGF5UmVtb3ZlKHBkYXRhLmRlbGF5UmVtb3ZlKTtcbiAgICAgICAgYmFzZVRpcHMuc2V0RWZmZWN0KGVmZmVjdCk7XG4gICAgICAgIGJhc2VUaXBzLnN0YXJ0U2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2MuZXJyb3IoYOivt+e7mSR7cGRhdGEudW5hbWV95re75YqgQmFzZVRpcHPnmoTlrZDnsbvohJrmnKxgKTtcbiAgICAgIH1cbiAgICAgIGlmIChlZmZlY3QpIHtcbiAgICAgICAgLy8gVUlFZmZlY3RNYW5hZ2VyLmVmZmVjdChlZmZlY3QsIHRpcHMsIGZhbHNlLCBIYW5kbGVyLmNyZWF0ZSh0aGlzLmVmZmVjdENvbXBsZXRlLCB0aGlzKSk7XG4gICAgICAgIFVJRWZmZWN0TWFuYWdlci5lZmZlY3QoZWZmZWN0LCB0aXBzLCBmYWxzZSwgbnVsbCk7Ly9IYW5kbGXlhYjkuI3kvKBcbiAgICAgIH1cbiAgICAgIGJhc2VUaXBzLnNldFVJUGFyZW50KHRoaXMudGlwTGF5ZXIpO1xuICAgICAgYmFzZVRpcHMub25fU2hvdygpO1xuICAgIH1cbiAgICBsZXQgcmVzID0gY2MubG9hZGVyLmdldFJlcyh1cmwsIGNjLlByZWZhYik7XG4gICAgaWYgKHJlcykge1xuICAgICAgY29tcGxldGVDYihudWxsLCByZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGNjLlByZWZhYiwgY29tcGxldGVDYik7XG4gIH1cbiAgY2hlY2tUaXBzKHVOYW1lKSB7XG4gICAgbGV0IHRpcExheWVyQ2hpbGQgPSB0aGlzLnRpcExheWVyLmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlwTGF5ZXJDaGlsZC5sZW5ndGg7ICsraSkge1xuICAgICAgbGV0IGxheWVyID0gdGlwTGF5ZXJDaGlsZFtpXTtcbiAgICAgIGlmIChsYXllci5nZXRDb21wb25lbnQoQmFzZVRpcHMpLl91aU5hbWUgPT0gdU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBoaWRlVGlwcyhub2RlOiBjYy5Ob2RlKSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGJhc2VUaXBzID0gbm9kZS5nZXRDb21wb25lbnQoQmFzZVRpcHMpO1xuICAgIGlmIChiYXNlVGlwcykge1xuICAgICAgYmFzZVRpcHMuc3RhcnRIaWRlKCk7XG4gICAgICBpZiAoYmFzZVRpcHMuX2VmZmVjdCkge1xuICAgICAgICBVSUVmZmVjdE1hbmFnZXIuZWZmZWN0KGJhc2VUaXBzLl9lZmZlY3QgKyBcImJhY2tcIiwgbm9kZSwgZmFsc2UsIEhhbmRsZXIuY3JlYXRlKCh0aXBzKSA9PiB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGlwcykpIHtcbiAgICAgICAgICAgIGJhc2VUaXBzLl9oaWRlXygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVmZmVjdENvbXBsZXRlKHBhbmVsKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQocGFuZWwpKSB7XG4gICAgICBsZXQgYmFzZVVJID0gcGFuZWwuZ2V0Q29tcG9uZW50KFwiQmFzZVBhbmVsXCIpO1xuICAgICAgYmFzZVVJLm9uX1Nob3coKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVmZmVjdEJhY2tDb21wbGV0ZShwYW5lbCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHBhbmVsKSkge1xuICAgICAgbGV0IGJhc2VVSSA9IHBhbmVsLmdldENvbXBvbmVudCgnQmFzZVBhbmVsJyk7XG4gICAgICBiYXNlVUkub25fSGlkZSgpO1xuICAgICAgYmFzZVVJLl9oaWRlXygpO1xuICAgICAgLy8gaWYgKExvYWRlck1hbmFnZXIuaXNSZWxlYXNlKGJhc2VVSS5tb2R1bGVOYW1lKSkge1xuICAgICAgLy8gICAgIExvYWRlck1hbmFnZXIucmVsZWFzZUJ5TW9kdWxlKGJhc2VVSS5tb2R1bGVOYW1lKTtcbiAgICAgIC8vICAgICBHYW1lUG9vbE1hbmFnZXIuY2xlYXJCeVRhcmdldCgnVVBhbmVsLScgKyBiYXNlVUkudWlOYW1lKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCgnVVBhbmVsLScgKyBiYXNlVUkudWlOYW1lKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cblxuXG4gIGlzU2hvdyhwYXRoKSB7XG4gICAgaWYgKHRoaXMudWlfY2FjaGVbcGF0aF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGdldFVJU3RhdGVCeU5hbWUobmFtZTogc3RyaW5nLCBpc1JlbW92ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuYWN0aXZlU3RhdGVBcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hY3RpdmVTdGF0ZUFycltpbmRleF07XG4gICAgICBpZiAobmFtZSA9PT0gZWxlbWVudC51TmFtZSkge1xuICAgICAgICBpZiAoaXNSZW1vdmUpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVN0YXRlQXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUFsbE9wZW5QYW5lbCgpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hY3RpdmVTdGF0ZUFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmFjdGl2ZVN0YXRlQXJyW2luZGV4XTtcbiAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVTdGF0ZUFyci5sZW5ndGggPSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1BhbmVsT3BlbihkYXRhKSB7XG4gICAgaWYgKCEhZGF0YSkge1xuICAgICAgLy/mo4DmtYvpnaLmnb/og73lkKblpJrlvIBcbiAgICAgIGlmICghIWRhdGEuaXNNdXRsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLmFjdGl2ZVN0YXRlQXJyLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYWN0aXZlU3RhdGVBcnJbaW5kZXhdO1xuICAgICAgICBpZiAoZWxlbWVudC5pc0FjdGl2ZSAmJiBlbGVtZW50LnVOYW1lID09PSBkYXRhLnVuYW1lICYmIGVsZW1lbnQub3BlblN0YXRlID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIOiOt+W+l+WPr+eUqOeahHVpc3RhdGVcbiAgICovXG4gIHByaXZhdGUgZ2V0VUlTdGF0ZShkYXRhKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudWlTdGF0ZUFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnVpU3RhdGVBcnJbaW5kZXhdO1xuICAgICAgaWYgKCFlbGVtZW50LmlzQWN0aXZlKSB7XG4gICAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgZWxlbWVudC5zZXREYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLmFjdGl2ZVN0YXRlQXJyLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RhdGU6IFVJU3RhdGUgPSBuZXcgVUlTdGF0ZSgpO1xuICAgIHN0YXRlLnNldERhdGEoZGF0YSk7XG4gICAgdGhpcy51aVN0YXRlQXJyLnB1c2goc3RhdGUpO1xuICAgIHRoaXMuYWN0aXZlU3RhdGVBcnIucHVzaChzdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUlNYW5hZ2VyLmluc3RhbmNlKCk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/MusicManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3c189Gbd1Bnrfpx4fA56Fd', 'MusicManager');
// src/framework/manager/MusicManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerModel_1 = require("../../game/datas/PlayerModel");
var StorageHelper_1 = require("../helper/StorageHelper");
var MusicManager = /** @class */ (function () {
    function MusicManager() {
        this._musicVolume = 1;
        this._switchEffect = true; //是否开启音效
        this._switchMusic = true; //是否开启背景音效
        this._playEffect = {};
        this.cacheClips = {};
        this._lastEffect = ''; //上一次播放的音效
        this._lastMusic = ''; //上次播放的音乐
        this.preURL = 'sound/'; //音效路径的前缀
    }
    MusicManager.instance = function () {
        if (!this._instance) {
            this._instance = new MusicManager();
        }
        return this._instance;
    };
    /**
     * 播放音效文件
     * url: 音效文件相对地址
     * loop: 是否循环播放
     * isSign: 每次只能播放一次 如果同时播放多个时 则后边的会全部不播放
     * isStopPre
     */
    /**
     * 播放音效文件
     * @param url 音效文件相对地址
     * @param loop 是否循环播放
     * @param isSign 每次只能播放一次 如果同时播放多个时 则后边的会全部不播放
     * @param isStopPre 播放同一个音效时 是否停止上一个音效
     * @param handler  播放完成的回调函数
     * @returns
     */
    MusicManager.prototype.playEffect = function (url, loop, isSign, isStopPre, handler) {
        var _this = this;
        if (loop === void 0) { loop = false; }
        if (isSign === void 0) { isSign = false; }
        if (isStopPre === void 0) { isStopPre = false; }
        if (handler === void 0) { handler = null; }
        if (this._switchEffect) {
            if (isSign) {
                if (this._lastEffect == url) {
                    return;
                }
            }
            if (isStopPre) {
                this.stopEffect(url);
            }
            this._lastEffect = url;
            url = this.preURL + url;
            var clip = this._getClip(url);
            var effectId_1 = -1;
            if (!!clip) {
                effectId_1 = cc.audioEngine.playEffect(clip, loop);
                if (!loop && handler) {
                    cc.audioEngine.setFinishCallback(effectId_1, function (id) {
                        handler.call();
                    });
                }
                this._playEffect[url] = effectId_1;
            }
            else {
                cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
                    effectId_1 = cc.audioEngine.playEffect(clip, loop);
                    if (!loop && handler) {
                        cc.audioEngine.setFinishCallback(effectId_1, function (id) {
                            handler.call();
                        });
                    }
                    _this.cacheClips[url] = clip;
                    _this._playEffect[url] = effectId_1;
                });
            }
        }
    };
    MusicManager.prototype.clearLastEffect = function () {
        this._lastEffect = null;
    };
    MusicManager.prototype.stopEffectByID = function (id) {
        cc.audioEngine.stopEffect(id);
    };
    MusicManager.prototype.stopEffect = function (url) {
        var effectId = this._playEffect[this.preURL + url];
        delete this._playEffect[this.preURL + url];
        cc.audioEngine.stopEffect(effectId);
    };
    /**
     * 背景音乐播放
     * url: 资源路径
     * loop: 是否循环
     */
    MusicManager.prototype.playMusic = function (url, loop) {
        var _this = this;
        if (loop === void 0) { loop = false; }
        if (this._switchMusic) {
            if (this._lastMusic === url) {
                return;
            }
            this._lastMusic = url;
            url = this.preURL + url;
            var clip = this._getClip(url);
            if (!!clip) {
                cc.audioEngine.playMusic(clip, loop);
            }
            else {
                cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
                    cc.audioEngine.playMusic(clip, loop);
                    _this.cacheClips[url] = clip;
                });
            }
        }
    };
    MusicManager.prototype.getLastMusic = function () {
        if (this._lastMusic == '') {
            return null;
        }
        else {
            return this._lastMusic;
        }
    };
    /**
 * 暂停当前播放音乐
 */
    MusicManager.prototype.setPauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    /**
     * 恢复当前被暂停音乐音乐
     */
    MusicManager.prototype.setResumeMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    /**
     * 重新播放该背景音乐
     */
    MusicManager.prototype.replayMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    /**
     * 停止播放音乐
     * releaseData： 控制是否释放音乐资源 true释放资源 | false不释放资源
     */
    MusicManager.prototype.setStopMusic = function (releaseData) {
        if (releaseData === void 0) { releaseData = true; }
        cc.audioEngine.stopMusic();
    };
    MusicManager.prototype.setMusicVolume = function (value) {
        this._musicVolume = value;
        cc.audioEngine.setMusicVolume(value);
    };
    MusicManager.prototype.getMusicVolume = function () {
        return cc.audioEngine.getMusicVolume();
    };
    MusicManager.prototype.setEffectSwitch = function (value) {
        this._switchEffect = value;
        StorageHelper_1.default.saveValueByKey('audio', value);
    };
    MusicManager.prototype.setMusicSwitch = function (value) {
        this._switchMusic = value;
        if (!value) {
            this.setPauseMusic();
        }
        else {
            this.setResumeMusic();
        }
        StorageHelper_1.default.saveValueByKey('music', value);
    };
    MusicManager.prototype.getEffectSwitch = function () {
        return PlayerModel_1.default.getSoundYinXiaoSwitch() == true;
    };
    MusicManager.prototype.getMusicSwitch = function () {
        // let statusStr = StorageHelper.getValueByKey('music');
        // let status = true;
        // if (statusStr != null) {
        //     if(typeof statusStr != "boolean")
        //     {
        //         if(statusStr === 'false') {
        //             status = false;
        //         } else {
        //             status = true;
        //         }
        //     } else {
        //         status = statusStr;
        //     }
        // } else {
        //     status = true;
        // }
        // return status;
        return PlayerModel_1.default.getSoundSwitch() == true;
    };
    MusicManager.prototype.initMusic = function () {
        this._switchEffect = this.getEffectSwitch();
        this._switchMusic = this.getMusicSwitch();
    };
    /**
     * 音乐是否正在播放（验证些方法来实现背景音乐是否播放完成）
     * return boolen
     */
    MusicManager.prototype.isMusicPlaying = function () {
        return cc.audioEngine.isMusicPlaying();
    };
    /**
     * 释放指定音效资源
     * @param url 地址
     * @param isEffect 是否是音效
     */
    MusicManager.prototype.releaseAudio = function (url, isEffect) {
        if (isEffect === void 0) { isEffect = false; }
        var clip = this._getClip(this.preURL + url);
        if (clip) {
            if (isEffect) {
                this.stopEffect(url);
            }
            else {
                this.setStopMusic();
            }
            delete this.cacheClips[url];
            cc.audioEngine.uncache(clip);
        }
        else {
            cc.error("【音频】资源" + url + "不存在,释放失败");
        }
    };
    MusicManager.prototype.releaseAllAudio = function () {
        cc.audioEngine.uncacheAll();
    };
    MusicManager.prototype._getClip = function (name) {
        if (this.cacheClips.hasOwnProperty(name)) {
            return this.cacheClips[name];
        }
        return null;
    };
    return MusicManager;
}());
exports.default = MusicManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvTXVzaWNNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNERBQXVEO0FBRXZELHlEQUFvRDtBQUVwRDtJQUFBO1FBRVksaUJBQVksR0FBWSxDQUFDLENBQUM7UUFDMUIsa0JBQWEsR0FBYyxJQUFJLENBQUMsQ0FBQSxRQUFRO1FBQ3hDLGlCQUFZLEdBQWEsSUFBSSxDQUFDLENBQUEsVUFBVTtRQUN4QyxnQkFBVyxHQUFJLEVBQUUsQ0FBQztRQUNsQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDLENBQUEsVUFBVTtRQUNuQyxlQUFVLEdBQVcsRUFBRSxDQUFDLENBQUEsU0FBUztRQUlqQyxXQUFNLEdBQVUsUUFBUSxDQUFDLENBQUEsU0FBUztJQTBQOUMsQ0FBQztJQXhQaUIscUJBQVEsR0FBdEI7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUdEOzs7Ozs7T0FNRztJQUVIOzs7Ozs7OztPQVFHO0lBQ0gsaUNBQVUsR0FBVixVQUFXLEdBQVUsRUFBQyxJQUFrQixFQUFDLE1BQW9CLEVBQUMsU0FBdUIsRUFBQyxPQUFvQjtRQUExRyxpQkF1Q0M7UUF2Q3FCLHFCQUFBLEVBQUEsWUFBa0I7UUFBQyx1QkFBQSxFQUFBLGNBQW9CO1FBQUMsMEJBQUEsRUFBQSxpQkFBdUI7UUFBQyx3QkFBQSxFQUFBLGNBQW9CO1FBRXRHLElBQUcsSUFBSSxDQUFDLGFBQWEsRUFDckI7WUFDSSxJQUFJLE1BQU0sRUFBRTtnQkFDUixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxFQUFFO29CQUN6QixPQUFPO2lCQUNWO2FBQ0o7WUFFRCxJQUFL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RSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1DQUFZLEdBQVosVUFBYSxHQUFVLEVBQUMsUUFBc0I7UUFBdEIseUJBQUEsRUFBQSxnQkFBc0I7UUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSyxRQUFRLEVBQUc7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7WUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7YUFBSTtZQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBRUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxtQkFBQztBQUFELENBdFFBLEFBc1FDLElBQUE7QUFFRCxrQkFBZSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2xvYmFsIGZyb20gXCIuLi8uLi9nYW1lL2NvbnN0cy9HbG9iYWxcIjtcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZ2FtZS9kYXRhcy9QbGF5ZXJNb2RlbFwiO1xuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IFN0b3JhZ2VIZWxwZXIgZnJvbSBcIi4uL2hlbHBlci9TdG9yYWdlSGVscGVyXCI7XG5cbmNsYXNzIE11c2ljTWFuYWdlclxue1xuICAgIHByaXZhdGUgX211c2ljVm9sdW1lIDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9zd2l0Y2hFZmZlY3QgOiBib29sZWFuID0gIHRydWU7Ly/mmK/lkKblvIDlkK/pn7PmlYhcbiAgICBwcml2YXRlIF9zd2l0Y2hNdXNpYyA6IGJvb2xlYW4gPSB0cnVlOy8v5piv5ZCm5byA5ZCv6IOM5pmv6Z+z5pWIXG4gICAgcHJpdmF0ZSBfcGxheUVmZmVjdCAgPSB7fTtcbiAgICBwcml2YXRlIGNhY2hlQ2xpcHMgPSB7fTtcbiAgICBwcml2YXRlIF9sYXN0RWZmZWN0OiBzdHJpbmcgPSAnJzsvL+S4iuS4gOasoeaSreaUvueahOmfs+aViFxuICAgIHByaXZhdGUgX2xhc3RNdXNpYzogc3RyaW5nID0gJyc7Ly/kuIrmrKHmkq3mlL7nmoTpn7PkuZBcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpNdXNpY01hbmFnZXI7XG4gICAgXG4gICAgcHJpdmF0ZSBwcmVVUkw6c3RyaW5nID0gJ3NvdW5kLyc7Ly/pn7PmlYjot6/lvoTnmoTliY3nvIBcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTpNdXNpY01hbmFnZXJcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE11c2ljTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOaSreaUvumfs+aViOaWh+S7tlxuICAgICAqIHVybDog6Z+z5pWI5paH5Lu255u45a+55Zyw5Z2AXG4gICAgICogbG9vcDog5piv5ZCm5b6q546v5pKt5pS+XG4gICAgICogaXNTaWduOiDmr4/mrKHlj6rog73mkq3mlL7kuIDmrKEg5aaC5p6c5ZCM5pe25pKt5pS+5aSa5Liq5pe2IOWImeWQjui+ueeahOS8muWFqOmDqOS4jeaSreaUvlxuICAgICAqIGlzU3RvcFByZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICog5pKt5pS+6Z+z5pWI5paH5Lu2XG4gICAgICogQHBhcmFtIHVybCDpn7PmlYjmlofku7bnm7jlr7nlnLDlnYBcbiAgICAgKiBAcGFyYW0gbG9vcCDmmK/lkKblvqrnjq/mkq3mlL5cbiAgICAgKiBAcGFyYW0gaXNTaWduIOavj+asoeWPquiDveaSreaUvuS4gOasoSDlpoLmnpzlkIzml7bmkq3mlL7lpJrkuKrml7Yg5YiZ5ZCO6L6555qE5Lya5YWo6YOo5LiN5pKt5pS+XG4gICAgICogQHBhcmFtIGlzU3RvcFByZSDmkq3mlL7lkIzkuIDkuKrpn7PmlYjml7Yg5piv5ZCm5YGc5q2i5LiK5LiA5Liq6Z+z5pWIXG4gICAgICogQHBhcmFtIGhhbmRsZXIgIOaSreaUvuWujOaIkOeahOWbnuiwg+WHveaVsFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHBsYXlFZmZlY3QodXJsOnN0cmluZyxsb29wOmJvb2xlYW49ZmFsc2UsaXNTaWduOmJvb2xlYW49ZmFsc2UsaXNTdG9wUHJlOmJvb2xlYW49ZmFsc2UsaGFuZGxlcjpIYW5kbGVyPW51bGwpXG4gICAge1xuICAgICAgICBpZih0aGlzLl9zd2l0Y2hFZmZlY3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChpc1NpZ24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFzdEVmZmVjdCA9PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCBpc1N0b3BQcmUgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRWZmZWN0KHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9sYXN0RWZmZWN0ID0gdXJsO1xuICAgICAgICAgICAgdXJsID0gdGhpcy5wcmVVUkwgKyB1cmw7XG4gICAgICAgICAgICBsZXQgY2xpcCA9IHRoaXMuX2dldENsaXAodXJsKTtcbiAgICAgICAgICAgIGxldCBlZmZlY3RJZCA9IC0xO1xuICAgICAgICAgICAgaWYgKCEhY2xpcCkge1xuICAgICAgICAgICAgICAgIGVmZmVjdElkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBsb29wKTtcbiAgICAgICAgICAgICAgICBpZiAoICFsb29wICYmIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soIGVmZmVjdElkLChpZCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlFZmZlY3RbdXJsXSA9IGVmZmVjdElkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgY2xpcCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdElkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBsb29wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhbG9vcCAmJiBoYW5kbGVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soIGVmZmVjdElkLChpZCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlQ2xpcHNbdXJsXSA9IGNsaXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlFZmZlY3RbdXJsXSA9IGVmZmVjdElkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckxhc3RFZmZlY3QoKXtcbiAgICAgICAgdGhpcy5fbGFzdEVmZmVjdCA9IG51bGw7XG4gICAgfVxuXG4gICAgc3RvcEVmZmVjdEJ5SUQoaWQ6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChpZCk7XG4gICAgfVxuXG4gICAgc3RvcEVmZmVjdCh1cmwpXG4gICAge1xuICAgICAgICBsZXQgZWZmZWN0SWQgPSB0aGlzLl9wbGF5RWZmZWN0W3RoaXMucHJlVVJMICsgdXJsXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3BsYXlFZmZlY3RbdGhpcy5wcmVVUkwgKyB1cmxdO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGVmZmVjdElkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDog4zmma/pn7PkuZDmkq3mlL5cbiAgICAgKiB1cmw6IOi1hOa6kOi3r+W+hFxuICAgICAqIGxvb3A6IOaYr+WQpuW+queOr1xuICAgICAqL1xuICAgIHBsYXlNdXNpYyAodXJsOnN0cmluZywgbG9vcDpib29sZWFuPWZhbHNlKXtcbiAgICAgICAgaWYodGhpcy5fc3dpdGNoTXVzaWMpe1xuICAgICAgICAgICAgaWYgKHRoaXMuX2xhc3RNdXNpYyA9PT0gdXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbGFzdE11c2ljID0gdXJsO1xuICAgICAgICAgICAgdXJsID0gdGhpcy5wcmVVUkwgKyB1cmw7XG4gICAgICAgICAgICBsZXQgY2xpcCA9IHRoaXMuX2dldENsaXAodXJsKTtcbiAgICAgICAgICAgIGlmICghIWNsaXApIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgbG9vcCk7ICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgY2xpcCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCBsb29wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZUNsaXBzW3VybF0gPSBjbGlwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0TGFzdE11c2ljKCl7XG4gICAgICAgIGlmKHRoaXMuX2xhc3RNdXNpYyA9PSAnJyl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFzdE11c2ljO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAqIOaaguWBnOW9k+WJjeaSreaUvumfs+S5kFxuICAgICAqL1xuICAgIHNldFBhdXNlTXVzaWMoKVxuICAgIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaBouWkjeW9k+WJjeiiq+aaguWBnOmfs+S5kOmfs+S5kFxuICAgICAqL1xuICAgIHNldFJlc3VtZU11c2ljKClcbiAgICB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeN5paw5pKt5pS+6K+l6IOM5pmv6Z+z5LmQXG4gICAgICovXG4gICAgcmVwbGF5TXVzaWMoKVxuICAgIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlgZzmraLmkq3mlL7pn7PkuZBcbiAgICAgKiByZWxlYXNlRGF0Ye+8miDmjqfliLbmmK/lkKbph4rmlL7pn7PkuZDotYTmupAgdHJ1ZemHiuaUvui1hOa6kCB8IGZhbHNl5LiN6YeK5pS+6LWE5rqQXG4gICAgICovXG4gICAgc2V0U3RvcE11c2ljKHJlbGVhc2VEYXRhID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgIH1cblxuICAgIHNldE11c2ljVm9sdW1lKHZhbHVlKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbXVzaWNWb2x1bWUgPSB2YWx1ZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodmFsdWUpO1xuICAgIH1cblxuICAgIGdldE11c2ljVm9sdW1lKClcbiAgICB7XG4gICAgICAgIHJldHVybiBjYy5hdWRpb0VuZ2luZS5nZXRNdXNpY1ZvbHVtZSgpO1xuICAgIH1cblxuICAgIHNldEVmZmVjdFN3aXRjaCh2YWx1ZSlcbiAgICB7XG4gICAgICAgIHRoaXMuX3N3aXRjaEVmZmVjdCA9IHZhbHVlO1xuICAgICAgICBTdG9yYWdlSGVscGVyLnNhdmVWYWx1ZUJ5S2V5KCdhdWRpbycsdmFsdWUpO1xuICAgIH1cblxuICAgIHNldE11c2ljU3dpdGNoKHZhbHVlKXtcbiAgICAgICAgdGhpcy5fc3dpdGNoTXVzaWMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQYXVzZU11c2ljKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFJlc3VtZU11c2ljKCk7XG4gICAgICAgIH1cbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlVmFsdWVCeUtleSgnbXVzaWMnLHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRFZmZlY3RTd2l0Y2goKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIFBsYXllck1vZGVsLmdldFNvdW5kWWluWGlhb1N3aXRjaCgpID09IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0TXVzaWNTd2l0Y2goKVxuICAgIHtcbiAgICAgICAgLy8gbGV0IHN0YXR1c1N0ciA9IFN0b3JhZ2VIZWxwZXIuZ2V0VmFsdWVCeUtleSgnbXVzaWMnKTtcbiAgICAgICAgLy8gbGV0IHN0YXR1cyA9IHRydWU7XG4gICAgICAgIC8vIGlmIChzdGF0dXNTdHIgIT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgaWYodHlwZW9mIHN0YXR1c1N0ciAhPSBcImJvb2xlYW5cIilcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBpZihzdGF0dXNTdHIgPT09ICdmYWxzZScpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHN0YXR1cyA9IHN0YXR1c1N0cjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIHN0YXR1cztcbiAgICAgICAgcmV0dXJuIFBsYXllck1vZGVsLmdldFNvdW5kU3dpdGNoKCkgPT0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbml0TXVzaWMoKVxuICAgIHtcbiAgICAgICAgdGhpcy5fc3dpdGNoRWZmZWN0ID0gdGhpcy5nZXRFZmZlY3RTd2l0Y2goKTtcbiAgICAgICAgdGhpcy5fc3dpdGNoTXVzaWMgPSB0aGlzLmdldE11c2ljU3dpdGNoKCk7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIOmfs+S5kOaYr+WQpuato+WcqOaSreaUvu+8iOmqjOivgeS6m+aWueazleadpeWunueOsOiDjOaZr+mfs+S5kOaYr+WQpuaSreaUvuWujOaIkO+8iVxuICAgICAqIHJldHVybiBib29sZW5cbiAgICAgKi9cbiAgICBpc011c2ljUGxheWluZygpXG4gICAge1xuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUuaXNNdXNpY1BsYXlpbmcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph4rmlL7mjIflrprpn7PmlYjotYTmupBcbiAgICAgKiBAcGFyYW0gdXJsIOWcsOWdgFxuICAgICAqIEBwYXJhbSBpc0VmZmVjdCDmmK/lkKbmmK/pn7PmlYggXG4gICAgICovXG4gICAgcmVsZWFzZUF1ZGlvKHVybDpzdHJpbmcsaXNFZmZlY3Q6Ym9vbGVhbj1mYWxzZSl7XG4gICAgICAgIGxldCBjbGlwID0gdGhpcy5fZ2V0Q2xpcCh0aGlzLnByZVVSTCArIHVybCk7XG4gICAgICAgIGlmKCBjbGlwICl7XG4gICAgICAgICAgICBpZiAoIGlzRWZmZWN0ICkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEVmZmVjdCh1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0b3BNdXNpYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2FjaGVDbGlwc1t1cmxdO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUudW5jYWNoZShjbGlwKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuOAkOmfs+mikeOAkei1hOa6kFwiICsgdXJsICsgXCLkuI3lrZjlnKgs6YeK5pS+5aSx6LSlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVsZWFzZUFsbEF1ZGlvKClcbiAgICB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnVuY2FjaGVBbGwoKTtcbiAgICB9XG5cbiAgICBfZ2V0Q2xpcChuYW1lKXtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVDbGlwcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVDbGlwc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11c2ljTWFuYWdlci5pbnN0YW5jZSgpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/loader/Loader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ef26uXvNBKGZi/udmZyLGw', 'Loader');
// src/framework/loader/Loader.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderItem_1 = require("./LoaderItem");
//资源加载器
var Loader = /** @class */ (function () {
    function Loader(isRelease) {
        this.moduleName = null;
        this.cacheItems = [];
        this.isRelease = false; //释放已经释放过了
        this.needRelease = isRelease;
    }
    Loader.prototype.addLoaderItem = function (url, type, handler) {
        var res = cc.loader.getRes(url, type);
        if (cc.isValid(res)) {
            !!handler && handler.call(res, url);
            return;
        }
        if (this._checkSameURL(url, handler)) {
            return;
        }
        var item = this.getLoaderItem();
        item.load(url, type, handler);
    };
    //检查相同的加载路径 保证只存在一个
    Loader.prototype._checkSameURL = function (url, handler) {
        var len = this.cacheItems.length;
        for (var i = 0; i < len; i++) {
            if (!this.cacheItems[i].isActive) {
                if (this.cacheItems[i].url === url) {
                    this.cacheItems[i].addSame(handler);
                    return true;
                }
            }
        }
        return false;
    };
    //获得一个加载item
    Loader.prototype.getLoaderItem = function () {
        var len = this.cacheItems.length;
        for (var i = 0; i < len; i++) {
            if (this.cacheItems[i].isActive) {
                this.cacheItems[i].isActive = false;
                return this.cacheItems[i];
            }
        }
        var item = new LoaderItem_1.default();
        item.isActive = false;
        this.cacheItems.push(item);
        return item;
    };
    Loader.prototype.getAllResUID = function (exsits) {
        if (exsits) {
            var len = this.cacheItems.length;
            for (var i = 0; i < len; i++) {
                if (!this.cacheItems[i].isActive) {
                    this.cacheItems[i].setExsitRes(exsits);
                }
            }
        }
    };
    Loader.prototype.releaseItem = function () {
        var len = this.cacheItems.length;
        for (var i = 0; i < len; i++) {
            this.cacheItems[i].reset();
        }
    };
    Loader.prototype.release = function (exsits) {
        var len = this.cacheItems.length;
        if (this.needRelease && !this.isRelease) {
            for (var i = 0; i < len; i++) {
                if (!this.cacheItems[i].isActive) {
                    this.cacheItems[i].release(exsits);
                }
            }
        }
        this.releaseItem();
    };
    return Loader;
}());
exports.default = Loader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2xvYWRlci9Mb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEMsT0FBTztBQUNQO0lBTUksZ0JBQVksU0FBaUI7UUFKdEIsZUFBVSxHQUFVLElBQUksQ0FBQztRQUN4QixlQUFVLEdBQXFCLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQVcsS0FBSyxDQUFDLENBQUssVUFBVTtRQUc1QyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsOEJBQWEsR0FBYixVQUFjLEdBQUcsRUFBQyxJQUFJLEVBQUMsT0FBTztRQUMxQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsOEJBQWEsR0FBYixVQUFjLEdBQUcsRUFBQyxPQUFPO1FBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFBO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtvQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxZQUFZO0lBQ1osOEJBQWEsR0FBYjtRQUNJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDSjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2QkFBWSxHQUFaLFVBQWEsTUFBTTtRQUNmLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUE7WUFDaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDMUM7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELDRCQUFXLEdBQVg7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLE1BQU07UUFDVixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3RDO2FBQ0o7U0FFSjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUwsYUFBQztBQUFELENBbkZBLEFBbUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGVySXRlbSBmcm9tIFwiLi9Mb2FkZXJJdGVtXCI7XG5cbi8v6LWE5rqQ5Yqg6L295ZmoXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIge1xuICAgIHByaXZhdGUgbmVlZFJlbGVhc2U6Ym9vbGVhbjsvL+aYr+WQpumcgOimgemHiuaUvlxuICAgIHB1YmxpYyBtb2R1bGVOYW1lOnN0cmluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZUl0ZW1zOkFycmF5PExvYWRlckl0ZW0+ID0gW107XG4gICAgcHVibGljIGlzUmVsZWFzZTpib29sZWFuID0gZmFsc2U7ICAgICAvL+mHiuaUvuW3sue7j+mHiuaUvui/h+S6hlxuXG4gICAgY29uc3RydWN0b3IoaXNSZWxlYXNlOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLm5lZWRSZWxlYXNlID0gaXNSZWxlYXNlO1xuICAgIH1cblxuICAgIGFkZExvYWRlckl0ZW0odXJsLHR5cGUsaGFuZGxlcil7XG4gICAgICAgIGxldCByZXMgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCx0eXBlKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocmVzKSkge1xuICAgICAgICAgICAgISFoYW5kbGVyICYmIGhhbmRsZXIuY2FsbChyZXMsdXJsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY2hlY2tTYW1lVVJMKHVybCxoYW5kbGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRMb2FkZXJJdGVtKCk7XG4gICAgICAgIGl0ZW0ubG9hZCh1cmwsdHlwZSxoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvL+ajgOafpeebuOWQjOeahOWKoOi9vei3r+W+hCDkv53or4Hlj6rlrZjlnKjkuIDkuKpcbiAgICBfY2hlY2tTYW1lVVJMKHVybCxoYW5kbGVyKXtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMuY2FjaGVJdGVtcy5sZW5ndGhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FjaGVJdGVtc1tpXS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlSXRlbXNbaV0udXJsID09PSB1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZUl0ZW1zW2ldLmFkZFNhbWUoaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy/ojrflvpfkuIDkuKrliqDovb1pdGVtXG4gICAgZ2V0TG9hZGVySXRlbSgpe1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5jYWNoZUl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVJdGVtc1tpXS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVJdGVtc1tpXS5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlSXRlbXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgTG9hZGVySXRlbSgpO1xuICAgICAgICBpdGVtLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FjaGVJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICBnZXRBbGxSZXNVSUQoZXhzaXRzKXtcbiAgICAgICAgaWYgKGV4c2l0cykge1xuICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMuY2FjaGVJdGVtcy5sZW5ndGhcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FjaGVJdGVtc1tpXS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlSXRlbXNbaV0uc2V0RXhzaXRSZXMoZXhzaXRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWxlYXNlSXRlbSgpe1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5jYWNoZUl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47aSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlSXRlbXNbaV0ucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbGVhc2UoZXhzaXRzKSB7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmNhY2hlSXRlbXMubGVuZ3RoO1xuICAgICAgICBpZiAodGhpcy5uZWVkUmVsZWFzZSAmJiAhdGhpcy5pc1JlbGVhc2UpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuO2krKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYWNoZUl0ZW1zW2ldLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVJdGVtc1tpXS5yZWxlYXNlKGV4c2l0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWxlYXNlSXRlbSgpO1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/message/NResponer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f8f52wrXZEK4ncHSY2qLA5', 'NResponer');
// src/framework/message/NResponer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../tools/Utils");
var NResponser = /** @class */ (function () {
    function NResponser() {
        this.allHandlers = new Map();
    }
    NResponser.instance = function () {
        if (!this._instance) {
            this._instance = new NResponser();
        }
        return this._instance;
    };
    /**
     * 派发事件
     * @param type 类型
     * @param args 参数
     */
    NResponser.prototype.dispatch = function (type) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.allHandlers.forEach(function (value, key) {
            var targetEvents = value; //this.allHandlers.get(value);
            if (!!targetEvents) {
                for (var i = 0; i < targetEvents.length; i++) {
                    if (targetEvents[i].type === type) {
                        targetEvents[i].handler.call(args);
                        _this.checkOnceEvent(targetEvents, i);
                        break;
                    }
                }
            }
        });
    };
    /**
     * 添加事件监听
     * @param type 事件类型
     * @param handler 回调函数
     * @param target 监听绑定对象
     * @param isOnce 是否只侦听一次
     */
    NResponser.prototype.on = function (type, handler, target, isOnce) {
        if (isOnce === void 0) { isOnce = false; }
        // on(type: number | string, callBack: Function, target: any, isOnce: boolean = false) {
        if (!!target) {
            if (!this.allHandlers.has(target)) {
                this.allHandlers.set(target, []);
            }
            var arr = this.allHandlers.get(target);
            arr.push({ type: type, handler: handler, isOnce: isOnce });
        }
    };
    /**
     * 是否target在侦听某个事件
     * @param type
     * @param target
     */
    NResponser.prototype.has = function (type, target) {
        if (!!target) {
            if (this.allHandlers.has(target)) {
                var arr = this.allHandlers.get(target);
                for (var index = 0; index < arr.length; index++) {
                    var element = arr[index];
                    if (element.type === type) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    /**
     * 移除侦听
     * @param type
     * @param handler
     * @param target
     * @param isRelease
     */
    NResponser.prototype.off = function (type, handler, target, isRelease) {
        if (isRelease === void 0) { isRelease = false; }
        if (!!target) {
            var targetEvents = this.allHandlers.get(target);
            if (!!targetEvents) {
                for (var i = 0; i < targetEvents.length; i++) {
                    if (targetEvents[i].type === type && targetEvents[i].handler.equal(handler)) {
                        if (isRelease) {
                            targetEvents[i].handler.release();
                        }
                        Utils_1.default.arrayRemove(targetEvents, i, 1);
                        break;
                    }
                }
            }
        }
    };
    /**
     * 移除目标身上全部侦听
     * @param target
     * @param isRelease
     */
    NResponser.prototype.targetOff = function (target, isRelease) {
        if (!!target) {
            if (this.allHandlers.has(target)) {
                if (!!isRelease) {
                    var arr = this.allHandlers.get(target);
                    if (!!arr) {
                        for (var index = 0; index < arr.length; index++) {
                            arr[index].handler.release();
                        }
                    }
                }
                this.allHandlers.delete(target);
            }
        }
    };
    /**
     * 检查一次性事件
     * @param arr
     * @param index
     */
    NResponser.prototype.checkOnceEvent = function (arr, index) {
        var data = arr[index];
        if (data.isOnce) {
            Utils_1.default.arrayRemove(arr, index);
        }
    };
    return NResponser;
}());
;
exports.default = NResponser.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21lc3NhZ2UvTlJlc3BvbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW1DO0FBT25DO0lBQUE7UUFDWSxnQkFBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUErSHBDLENBQUM7SUEzSGlCLG1CQUFRLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkJBQVEsR0FBUixVQUFTLElBQXFCO1FBQTlCLGlCQWNDO1FBZCtCLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAsNkJBQU87O1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEdBQUc7WUFDaEMsSUFBSSxZQUFZLEdBQTBCLEtBQUssQ0FBQyxDQUFBLDhCQUE4QjtZQUM5RSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMxQyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO3dCQUMvQixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLE1BQU07cUJBQ1Q7aUJBQ0o7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNI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QUssR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOzRCQUM3QyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3lCQUNoQztxQkFDSjtpQkFDSjtnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQztTQUVKO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxtQ0FBYyxHQUF0QixVQUF1QixHQUFHLEVBQUUsS0FBSztRQUM3QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsZUFBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWhJQSxBQWdJQyxJQUFBO0FBQUEsQ0FBQztBQUNGLGtCQUFlLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vdG9vbHMvVXRpbHNcIjtcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi9iYXNlL0hhbmRsZXJcIjtcbmV4cG9ydCBpbnRlcmZhY2UgTlJlc3BvbnNlckRhdGEge1xuICAgIHR5cGU6IG51bWJlciB8IHN0cmluZyxcbiAgICBoYW5kbGVyOiBIYW5kbGVyXG4gICAgaXNPbmNlOiBib29sZWFuLFxufVxuY2xhc3MgTlJlc3BvbnNlciB7XG4gICAgcHJpdmF0ZSBhbGxIYW5kbGVycyA9IG5ldyBNYXAoKTtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogTlJlc3BvbnNlcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogTlJlc3BvbnNlciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5SZXNwb25zZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rS+5Y+R5LqL5Lu2XG4gICAgICogQHBhcmFtIHR5cGUg57G75Z6LXG4gICAgICogQHBhcmFtIGFyZ3Mg5Y+C5pWwXG4gICAgICovXG4gICAgZGlzcGF0Y2godHlwZTogbnVtYmVyIHwgc3RyaW5nLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuYWxsSGFuZGxlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldEV2ZW50czogQXJyYXk8TlJlc3BvbnNlckRhdGE+ID0gdmFsdWU7Ly90aGlzLmFsbEhhbmRsZXJzLmdldCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoISF0YXJnZXRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldEV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RXZlbnRzW2ldLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEV2ZW50c1tpXS5oYW5kbGVyLmNhbGwoYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrT25jZUV2ZW50KHRhcmdldEV2ZW50cywgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa3u+WKoOS6i+S7tuebkeWQrFxuICAgICAqIEBwYXJhbSB0eXBlIOS6i+S7tuexu+Wei1xuICAgICAqIEBwYXJhbSBoYW5kbGVyIOWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSB0YXJnZXQg55uR5ZCs57uR5a6a5a+56LGhXG4gICAgICogQHBhcmFtIGlzT25jZSDmmK/lkKblj6rkvqblkKzkuIDmrKFcbiAgICAgKi9cbiAgICBvbih0eXBlOiBudW1iZXIgfCBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIsIHRhcmdldDogYW55LCBpc09uY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICAvLyBvbih0eXBlOiBudW1iZXIgfCBzdHJpbmcsIGNhbGxCYWNrOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnksIGlzT25jZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghIXRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbEhhbmRsZXJzLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxIYW5kbGVycy5zZXQodGFyZ2V0LCBbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5hbGxIYW5kbGVycy5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIGFyci5wdXNoKHsgdHlwZTogdHlwZSwgaGFuZGxlcjogaGFuZGxlciwgaXNPbmNlOiBpc09uY2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKZ0YXJnZXTlnKjkvqblkKzmn5DkuKrkuovku7ZcbiAgICAgKiBAcGFyYW0gdHlwZSBcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFxuICAgICAqL1xuICAgIGhhcyh0eXBlOiBudW1iZXIgfCBzdHJpbmcsIHRhcmdldDogYW55KSB7XG4gICAgICAgIGlmICghIXRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsSGFuZGxlcnMuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5hbGxIYW5kbGVycy5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOS+puWQrFxuICAgICAqIEBwYXJhbSB0eXBlIFxuICAgICAqIEBwYXJhbSBoYW5kbGVyIFxuICAgICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgICogQHBhcmFtIGlzUmVsZWFzZSBcbiAgICAgKi9cbiAgICBvZmYodHlwZTogbnVtYmVyIHwgc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyLCB0YXJnZXQ6IGFueSwgaXNSZWxlYXNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCEhdGFyZ2V0KSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0RXZlbnRzOiBBcnJheTxOUmVzcG9uc2VyRGF0YT4gPSB0aGlzLmFsbEhhbmRsZXJzLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCEhdGFyZ2V0RXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEV2ZW50c1tpXS50eXBlID09PSB0eXBlICYmIHRhcmdldEV2ZW50c1tpXS5oYW5kbGVyLmVxdWFsKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZWxlYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RXZlbnRzW2ldLmhhbmRsZXIucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuYXJyYXlSZW1vdmUodGFyZ2V0RXZlbnRzLCBpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk55uu5qCH6Lqr5LiK5YWo6YOo5L6m5ZCsXG4gICAgICogQHBhcmFtIHRhcmdldCBcbiAgICAgKiBAcGFyYW0gaXNSZWxlYXNlIFxuICAgICAqL1xuICAgIHRhcmdldE9mZih0YXJnZXQ6IGFueSwgaXNSZWxlYXNlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghIXRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxsSGFuZGxlcnMuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISFpc1JlbGVhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMuYWxsSGFuZGxlcnMuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIWFycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbaW5kZXhdLmhhbmRsZXIucmVsZWFzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWxsSGFuZGxlcnMuZGVsZXRlKHRhcmdldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOajgOafpeS4gOasoeaAp+S6i+S7tlxuICAgICAqIEBwYXJhbSBhcnIgXG4gICAgICogQHBhcmFtIGluZGV4IFxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tPbmNlRXZlbnQoYXJyLCBpbmRleCkge1xuICAgICAgICBsZXQgZGF0YSA9IGFycltpbmRleF07XG4gICAgICAgIGlmIChkYXRhLmlzT25jZSkge1xuICAgICAgICAgICAgVXRpbHMuYXJyYXlSZW1vdmUoYXJyLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTlJlc3BvbnNlci5pbnN0YW5jZSgpOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/datas/PlayerModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6565X/qIRN8Yc8PKbNL1Ju', 'PlayerModel');
// src/game/datas/PlayerModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicManager_1 = require("../../framework/manager/MusicManager");
var PlayerData_1 = require("../datas/PlayerData");
var PlayerModel = /** @class */ (function () {
    function PlayerModel() {
        this.data = new PlayerData_1.default();
    }
    PlayerModel.instance = function () {
        if (!this._instance) {
            this._instance = new PlayerModel();
        }
        return this._instance;
    };
    PlayerModel.prototype.loadData = function () {
        this.data.getData();
    };
    PlayerModel.prototype.getLevel = function () {
        return this.data.level;
    };
    PlayerModel.prototype.setLevel = function () {
        this.data.level++;
    };
    PlayerModel.prototype.setSoundSwitch = function (val) {
        // this.data.soundSwitch = val;
        MusicManager_1.default.initMusic();
        this.saveData();
    };
    PlayerModel.prototype.getSoundSwitch = function () {
        return true;
    };
    PlayerModel.prototype.setSoundYinXiaoSwitch = function (v) {
        // this.data.soundYinXiao = v;
        MusicManager_1.default.initMusic();
        this.saveData();
    };
    PlayerModel.prototype.getSoundYinXiaoSwitch = function () {
        return true;
    };
    PlayerModel.prototype.saveData = function () {
        this.data.saveData();
    };
    PlayerModel.prototype.resetData = function () {
        this.data.resetData();
    };
    return PlayerModel;
}());
exports.default = PlayerModel.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9kYXRhcy9QbGF5ZXJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSxrREFBNkM7QUFFN0M7SUFBQTtRQUdZLFNBQUksR0FBZSxJQUFJLG9CQUFVLEVBQUUsQ0FBQztJQStDaEQsQ0FBQztJQTdDVSxvQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsR0FBRztRQUNkLCtCQUErQjtRQUMvQixzQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0NBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQ0FBcUIsR0FBckIsVUFBc0IsQ0FBQztRQUNuQiw4QkFBOEI7UUFDOUIsc0JBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELDJDQUFxQixHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsK0JBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FsREEsQUFrREMsSUFBQTtBQUVELGtCQUFlLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXNpY01hbmFnZXIgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL011c2ljTWFuYWdlclwiO1xuaW1wb3J0IFBsYXllckRhdGEgZnJvbSBcIi4uL2RhdGFzL1BsYXllckRhdGFcIjtcblxuY2xhc3MgUGxheWVyTW9kZWwge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUGxheWVyTW9kZWw7XG5cbiAgICBwcml2YXRlIGRhdGE6IFBsYXllckRhdGEgPSBuZXcgUGxheWVyRGF0YSgpO1xuXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQbGF5ZXJNb2RlbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmdldERhdGEoKTtcbiAgICB9XG5cbiAgICBnZXRMZXZlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZXZlbDtcbiAgICB9XG5cbiAgICBzZXRMZXZlbCgpIHtcbiAgICAgICAgdGhpcy5kYXRhLmxldmVsKys7XG4gICAgfVxuXG4gICAgc2V0U291bmRTd2l0Y2godmFsKSB7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5zb3VuZFN3aXRjaCA9IHZhbDtcbiAgICAgICAgTXVzaWNNYW5hZ2VyLmluaXRNdXNpYygpO1xuICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XG4gICAgfVxuXG4gICAgZ2V0U291bmRTd2l0Y2goKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNldFNvdW5kWWluWGlhb1N3aXRjaCh2KSB7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5zb3VuZFlpblhpYW8gPSB2O1xuICAgICAgICBNdXNpY01hbmFnZXIuaW5pdE11c2ljKCk7XG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcbiAgICB9XG5cbiAgICBnZXRTb3VuZFlpblhpYW9Td2l0Y2goKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHNhdmVEYXRhKCkge1xuICAgICAgICB0aGlzLmRhdGEuc2F2ZURhdGEoKTtcbiAgICB9XG4gICAgcmVzZXREYXRhKCkge1xuICAgICAgICB0aGlzLmRhdGEucmVzZXREYXRhKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJNb2RlbC5pbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/tools/ComponentHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10e20CiVLlP3rcY+od6MQ8s', 'ComponentHelper');
// src/framework/tools/ComponentHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 组件设置
 */
var ComponentHelper = /** @class */ (function () {
    function ComponentHelper() {
    }
    //对文本赋值
    ComponentHelper.labelString = function (node, text, force, maxChars) {
        if (force === void 0) { force = false; }
        if (maxChars === void 0) { maxChars = null; }
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.Label);
            if (!!maxChars) {
                text = ComponentHelper.strClamp(text.toString(), maxChars, '...');
            }
            if (!!label) {
                label.string = text + "";
                if (force) {
                    label._forceUpdateRenderData(true);
                }
            }
        }
    };
    ComponentHelper.labelTimeFormat = function (node, text) {
        var result = this._secondToDate(text);
        ComponentHelper.labelString(node, result);
    };
    //分割的时间格式 00:00:00
    ComponentHelper.labelTimeFormatGap = function (node1, node2, node3, time) {
        var h = Math.floor(time / 3600);
        var m = Math.floor((time / 60 % 60));
        var s = Math.floor((time % 60));
        h = h > 9 ? h : '0' + h;
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        ComponentHelper.labelString(node1, h);
        ComponentHelper.labelString(node2, m);
        ComponentHelper.labelString(node3, s);
    };
    //00:00
    ComponentHelper.labelTimeSs = function (node, time) {
        var timeStr = this._secondToDate2(time);
        ComponentHelper.labelString(node, timeStr);
    };
    ComponentHelper._secondToDate2 = function (result) {
        var m = Math.floor((result / 60 % 60));
        var s = Math.floor((result % 60));
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        return m + ":" + s;
    };
    ComponentHelper._secondToDate = function (result) {
        var h = Math.floor(result / 3600);
        var m = Math.floor((result / 60 % 60));
        var s = Math.floor((result % 60));
        h = h > 9 ? h : '0' + h;
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        return h + ":" + m + ":" + s;
    };
    ComponentHelper.getLabelString = function (node) {
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.Label);
            if (!!label) {
                return label.string;
            }
        }
        return '';
    };
    //cLHeight 是否改变行高
    ComponentHelper.setLabelSize = function (node, size, cLHeight, space) {
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.Label);
            if (!!label) {
                label.fontSize = size;
                if (!!cLHeight) {
                    label.lineHeight = size;
                }
                if (!!space) {
                    label.spacingX = space;
                }
            }
        }
    };
    ComponentHelper.createLabel = function (size, color, content, font) {
        var node = new cc.Node();
        var label = node.addComponent(cc.Label);
        label.fontSize = size;
        label.font = font;
        node.color = color;
        label.string = content;
        return node;
    };
    //设置字体
    ComponentHelper.setLabelFont = function (node, font) {
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.Label);
            if (!!label) {
                label.font = font;
            }
        }
    };
    //对富文本进行赋值
    ComponentHelper.richLabelString = function (node, text, lineHeight) {
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.RichText);
            if (label) {
                if (!!lineHeight && lineHeight > 0) {
                    label.lineHeight = lineHeight;
                }
                label.string = text;
            }
        }
    };
    //拥有纹理时直接赋值
    ComponentHelper.spriteFrame = function (node, spriteFrame) {
        if (cc.isValid(node)) {
            var sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = spriteFrame;
            }
            return sprite;
        }
        return null;
    };
    ComponentHelper.getSpriteFrame = function (node) {
        if (cc.isValid(node)) {
            var sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                return sprite.spriteFrame;
            }
        }
        return null;
    };
    ComponentHelper.createSprite = function (res, anchor) {
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = res;
        if (!!anchor) {
            node.anchorX = anchor.x;
            node.anchorY = anchor.y;
        }
        return node;
    };
    ComponentHelper.clearSpriteFrame = function (node) {
        if (cc.isValid(node)) {
            var sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = null;
            }
        }
    };
    ComponentHelper.spriteGray = function (node, isGray) {
        if (cc.isValid(node)) {
            var sprite = node.getComponent(cc.Sprite);
            if (!sprite) {
                sprite = node.getComponent(cc.Label);
            }
            if (!!sprite) {
                if (isGray) {
                    sprite.setMaterial(0, cc.Material.getBuiltinMaterial('2d-gray-sprite'));
                }
                else {
                    sprite.setMaterial(0, cc.Material.getBuiltinMaterial('2d-sprite'));
                }
            }
        }
    };
    //获得scrollView 并滑动到指定位置
    ComponentHelper.getScrollViewAndScroll = function (node, x, y) {
        var scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToOffset(cc.v2(x, y), 0);
        }
        return scrollView;
    };
    //获得scrollView 并滑动到指定位置
    ComponentHelper.getScrollViewAndScrollPercent = function (node, x, y) {
        var scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollTo(cc.v2(x, y), 0);
        }
        return scrollView;
    };
    //滑动到顶部
    ComponentHelper.getScrollViewAndScrollTop = function (node, time) {
        if (time === void 0) { time = 0; }
        var scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToTop(time);
        }
        return scrollView;
    };
    //滑动到左侧
    ComponentHelper.getScrollViewAndScrollLeft = function (node, time) {
        if (time === void 0) { time = 0; }
        var scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToLeft(time);
        }
        return scrollView;
    };
    ComponentHelper.setScrollViewEnabled = function (node, value) {
        if (value === void 0) { value = true; }
        var scrollView = node.getComponent(cc.ScrollView);
        if (!!scrollView) {
            scrollView.enabled = value;
        }
        return scrollView;
    };
    //设置通用货币  xx万 或者 xx亿
    ComponentHelper.setCommonCurrenyLabel = function (node, count) {
        if (cc.isValid(node)) {
            var label = node.getComponent('CommonCurrencyLabel');
            if (label) {
                label.setContent(count);
            }
        }
    };
    //小数点数字
    ComponentHelper.setDotLabel = function (node, value, isUint) {
        if (isUint === void 0) { isUint = true; }
        if (cc.isValid(node)) {
            var label = node.getComponent('DotLabel');
            if (label) {
                label.string(value, isUint);
            }
        }
    };
    ComponentHelper.setLabelColor = function (node, color) {
        if (cc.isValid(node)) {
            node.color = color;
        }
    };
    ComponentHelper.getEditorString = function (node) {
        if (cc.isValid(node)) {
            var editbox = node.getComponent(cc.EditBox);
            if (!!editbox) {
                return editbox.string;
            }
        }
        return '';
    };
    ComponentHelper.setEditorString = function (node, str) {
        if (cc.isValid(node)) {
            var editbox = node.getComponent(cc.EditBox);
            if (!!editbox) {
                editbox.string = str;
            }
        }
    };
    //设置文字描边
    ComponentHelper.setLabelOut = function (node, color, width) {
        if (cc.isValid(node)) {
            var labelOut = node.addComponent(cc.LabelOutline);
            labelOut.color = color;
            labelOut.width = width;
        }
    };
    //移除描边
    ComponentHelper.removeLineOut = function (node) {
        if (cc.isValid(node)) {
            var labelOut = node.removeComponent(cc.LabelOutline);
        }
    };
    //获得输入框的内容
    ComponentHelper.getEditBoxString = function (node) {
        if (cc.isValid(node)) {
            var editBox = node.getComponent(cc.EditBox);
            if (editBox.string != editBox.placeholder) {
                return editBox.string;
            }
        }
        return null;
    };
    ComponentHelper.strClamp = function (str, maxChars, suffix) {
        if (str === '') {
            return '';
        }
        var toCodePoint = function (unicodeSurrogates) {
            var r = [], c = 0, p = 0, i = 0;
            while (i < unicodeSurrogates.length) {
                var pos = i;
                c = unicodeSurrogates.charCodeAt(i++); //返回位置的字符的 Unicode 编码 
                if (c == 0xfe0f) {
                    continue;
                }
                if (p) {
                    var value = (0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00));
                    r.push({
                        v: value,
                        pos: pos,
                    }); //计算4字节的unicode
                    p = 0;
                }
                else if (0xD800 <= c && c <= 0xDBFF) {
                    p = c; //如果unicode编码在oxD800-0xDBff之间，则需要与后一个字符放在一起
                }
                else {
                    r.push({
                        v: c,
                        pos: pos
                    }); //如果是2字节，直接将码点转为对应的十六进制形式
                }
            }
            return r;
        };
        suffix = suffix === null ? '...' : suffix;
        maxChars *= 2;
        var codeArr = toCodePoint(str);
        var numChar = 0;
        var index = 0;
        for (var i = 0; i < codeArr.length; ++i) {
            var code = codeArr[i].v;
            var add = 1;
            if (code >= 128) {
                add = 2;
            }
            //如果超过了限制，则按上一个为准
            if (numChar + add > maxChars) {
                break;
            }
            index = i;
            //累加
            numChar += add;
        }
        if (codeArr.length - 1 == index) {
            return str;
        }
        var more = suffix ? 1 : 0;
        return str.substring(0, codeArr[index - more].pos + 1) + suffix;
    };
    //获得checkbox的选择状态
    ComponentHelper.getToggle = function (node) {
        if (cc.isValid(node)) {
            var toggle = node.getComponent(cc.Toggle);
            if (!!toggle) {
                return toggle.isChecked;
            }
        }
        return false;
    };
    ComponentHelper.setToggleListener = function (node, func, host) {
        if (cc.isValid(node)) {
            node.on('toggle', function (e) {
                func && func.call(host, e.isChecked);
            });
        }
    };
    ComponentHelper.setButtonInteractable = function (node, status) {
        if (cc.isValid(node)) {
            var button = node.getComponent(cc.Button);
            if (!!button) {
                button.interactable = status;
            }
        }
    };
    ComponentHelper.getButtonInteractabel = function (node) {
        if (cc.isValid(node)) {
            var button = node.getComponent(cc.Button);
            if (!!button) {
                return button.interactable;
            }
        }
        return true;
    };
    ComponentHelper.addClickEvent = function (node, target, component, handler) {
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        var clickEvents = node.getComponent(cc.Button).clickEvents;
        for (var i = 0; i < clickEvents.length; i++) {
            if (clickEvents[i] && clickEvents[i].handler == eventHandler.handler && clickEvents[i].component == eventHandler.component) {
                return;
            }
        }
        clickEvents.push(eventHandler);
    };
    //设置进度
    ComponentHelper.setProgressBar = function (node, value) {
        if (cc.isValid(node)) {
            var bar = node.getComponent(cc.ProgressBar);
            if (!!bar) {
                bar.progress = value;
            }
        }
    };
    ComponentHelper.setSpineStop = function (node, isStop) {
        if (cc.isValid(node)) {
            var spine = node.getComponent(sp.Skeleton);
            if (!!spine) {
                spine.paused = isStop;
            }
        }
    };
    //设置spine皮肤
    ComponentHelper.setSpineSkin = function (node, skin) {
        if (cc.isValid(node)) {
            var spine = node.getComponent(sp.Skeleton);
            if (!!spine) {
                spine.setSkin(skin);
            }
        }
    };
    //设置spine动画
    ComponentHelper.setSpineAnimate = function (node, animation, isLoop, func, host, arg) {
        if (cc.isValid(node)) {
            var spine_1 = node.getComponent(sp.Skeleton);
            if (!!spine_1) {
                spine_1.setAnimation(0, animation, isLoop);
            }
            if (!!func) {
                spine_1.setCompleteListener(function (trackEntry, loopCount) {
                    spine_1.setCompleteListener(null);
                    func.call(host, arg);
                });
            }
        }
    };
    //闪烁Action 
    ComponentHelper.setFlickerAction = function (node, time, count) {
        if (cc.isValid(node)) {
            // cc.log('开始闪烁了++++++++++++++');
            node.stopAllActions();
            node.runAction(cc.blink(time, count));
        }
    };
    //heartAction 心跳
    ComponentHelper.setHeartAction = function (node, time, isStartBig, bigScale, smallScale, special) {
        if (time === void 0) { time = 0.5; }
        if (isStartBig === void 0) { isStartBig = false; }
        if (bigScale === void 0) { bigScale = 1.2; }
        if (smallScale === void 0) { smallScale = 0.9; }
        if (special === void 0) { special = false; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var delayAction = null;
            if (special) {
                time = time - 0.2;
                delayAction = cc.delayTime(0.2);
            }
            var scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            var scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            var action = null;
            if (special) {
                action = isStartBig ? cc.sequence(delayAction, scaleBigAction, delayAction, scaleSmallAction) : cc.sequence(delayAction, scaleSmallAction, delayAction, scaleBigAction);
            }
            else {
                action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            }
            node.runAction(cc.repeatForever(action));
        }
    };
    //heartAction 短时间心跳
    ComponentHelper.setHeartActionByTime = function (node, num, callBack, time, isStartBig, bigScale, smallScale, special) {
        if (num === void 0) { num = 5; }
        if (callBack === void 0) { callBack = null; }
        if (time === void 0) { time = 0.5; }
        if (isStartBig === void 0) { isStartBig = false; }
        if (bigScale === void 0) { bigScale = 1.2; }
        if (smallScale === void 0) { smallScale = 0.9; }
        if (special === void 0) { special = false; }
        if (cc.isValid(node)) {
            node.active = true;
            node.stopAllActions();
            var delayAction = null;
            if (special) {
                time = time - 0.2;
                delayAction = cc.delayTime(0.2);
            }
            var currentNum_1 = 0;
            var scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            var scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            var scaleFun = cc.callFunc(function () {
                currentNum_1++;
                if (callBack && currentNum_1 >= num) {
                    if (callBack)
                        callBack();
                    node.stopAllActions();
                }
            });
            var action = null;
            if (special) {
                action = isStartBig ? cc.sequence(delayAction, scaleBigAction, delayAction, scaleSmallAction, scaleFun) : cc.sequence(delayAction, scaleSmallAction, delayAction, scaleBigAction, scaleFun);
            }
            else {
                action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction, scaleFun) : cc.sequence(scaleSmallAction, scaleBigAction, scaleFun);
            }
            node.runAction(cc.repeat(action, num));
        }
    };
    //上下浮动
    ComponentHelper.setUpDownAction = function (node, time, y) {
        if (time === void 0) { time = 0.5; }
        if (y === void 0) { y = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            var moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    };
    ComponentHelper.setLRAction = function (node, time, x) {
        if (time === void 0) { time = 0.5; }
        if (x === void 0) { x = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.moveTo(time, cc.v2(pos.x + x, pos.y));
            var moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    };
    ComponentHelper.setScaleGuoDong = function (node, time, isStartBig, bigScale, smallScale) {
        if (time === void 0) { time = 0.1; }
        if (isStartBig === void 0) { isStartBig = true; }
        if (bigScale === void 0) { bigScale = 1.3; }
        if (smallScale === void 0) { smallScale = 1.0; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            var scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            var action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            node.runAction(action);
        }
    };
    ComponentHelper.setJumpActiom = function (node, time, y) {
        if (time === void 0) { time = 0.3; }
        if (y === void 0) { y = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            var moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(action);
        }
    };
    ComponentHelper.setReJumpActiom = function (node, time, y) {
        if (time === void 0) { time = 0.3; }
        if (y === void 0) { y = 10; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            var moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y - y));
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    };
    //某个方向循环移动
    //distance循环移动的距离
    ComponentHelper.setForEverMoveAction = function (node, distance, time, isStartBig, axis, isEase) {
        if (distance === void 0) { distance = 5; }
        if (time === void 0) { time = 0.5; }
        if (isStartBig === void 0) { isStartBig = false; }
        if (axis === void 0) { axis = 'x'; }
        if (isEase === void 0) { isEase = false; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = node.getPosition();
            var scaleBigAction = axis === 'x' ? cc.moveTo(time, pos.x + distance, pos.y) : cc.moveTo(time, pos.x, pos.y + distance);
            if (isEase) {
                scaleBigAction = scaleBigAction.easing(cc.easeOut(1.5));
            }
            var scaleSmallAction = cc.moveTo(time, pos.x, pos.y);
            var action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            node.runAction(cc.repeatForever(action));
        }
    };
    //循环移动 播放指定时间
    ComponentHelper.setLoopAction = function (node, callBack, axis, distance, actionTime, duration, isStartBig) {
        if (axis === void 0) { axis = 'y'; }
        if (distance === void 0) { distance = 5; }
        if (actionTime === void 0) { actionTime = 0.5; }
        if (duration === void 0) { duration = 3; }
        if (isStartBig === void 0) { isStartBig = false; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = node.getPosition();
            var scaleBigAction = axis === 'x' ? cc.moveTo(actionTime, pos.x + distance, pos.y) : cc.moveTo(actionTime, pos.x, pos.y + distance);
            var scaleSmallAction = cc.moveTo(actionTime, pos.x, pos.y);
            var action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            var count = duration / (actionTime * 2);
            node.runAction(cc.sequence(cc.repeat(action, count), cc.callFunc(function () {
                callBack && callBack();
            })));
        }
    };
    //缩放显示回弹
    ComponentHelper.setScaleBounce = function (node, callBack, duration, bduration, bRadio) {
        if (duration === void 0) { duration = 0.1; }
        if (bduration === void 0) { bduration = 0.6; }
        if (bRadio === void 0) { bRadio = 1.8; }
        if (cc.isValid(node)) {
            var bAction = cc.scaleTo(duration, bRadio, bRadio);
            var sAction = cc.scaleTo(bduration, 1, 1).easing(cc.easeBounceOut());
            node.runAction(cc.sequence(bAction, cc.delayTime(0.1), sAction, cc.callFunc(function () {
                callBack && callBack();
            })));
        }
    };
    /**
     * 设置下砸效果
     * @param node 节点
     * @param duration 持续时间
     * @param bigScale 起始最大值
     * @param smallScale 缩放到最小值
     */
    ComponentHelper.setDownAction = function (node, duration, bigScale, smallScale) {
        if (duration === void 0) { duration = 0.2; }
        if (bigScale === void 0) { bigScale = 3; }
        if (smallScale === void 0) { smallScale = 1; }
        if (cc.isValid(node)) {
            node.scaleX = node.scaleY = bigScale;
            node.runAction(cc.scaleTo(duration, smallScale, smallScale).easing(cc.easeBounceInOut()));
        }
    };
    //TODO 后期修改成震动类
    ComponentHelper.shakeEffect = function (node, duration) {
        if (duration === void 0) { duration = 0.6; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            node.runAction(cc.repeatForever(cc.sequence(cc.moveTo(0.02, cc.v2(5, 7)), cc.moveTo(0.02, cc.v2(-6, 7)), cc.moveTo(0.02, cc.v2(-13, 3)), cc.moveTo(0.02, cc.v2(3, -6)), cc.moveTo(0.02, cc.v2(-5, 5)), cc.moveTo(0.02, cc.v2(2, -8)), cc.moveTo(0.02, cc.v2(-8, -10)), cc.moveTo(0.02, cc.v2(3, 10)), cc.moveTo(0.02, cc.v2(0, 0)))));
            setTimeout(function () {
                node.stopAllActions();
                node.setPosition(0, 0);
            }, duration * 1000);
        }
    };
    return ComponentHelper;
}());
exports.default = ComponentHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0g7SUFBQTtJQWtwQkEsQ0FBQztJQS9vQkcsT0FBTztJQUNPLDJCQUFXLEdBQXpCLFVBQTBCLElBQWEsRUFBRSxJQUF1QixFQUFFLEtBQXNCLEVBQUUsUUFBdUI7UUFBL0Msc0JBQUEsRUFBQSxhQUFzQjtRQUFFLHlCQUFBLEVBQUEsZUFBdUI7UUFDN0csSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDWixJQUFJLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QzthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRWEsK0JBQWUsR0FBN0IsVUFBOEIsSUFBYSxFQUFFLElBQVk7UUFDckQsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0JBQWtCO0lBQ0osa0NBQWtCLEdBQWhDLFVBQWlDLEtBQWMsRUFBRSxLQUFjLEVBQUUsS0FBYyxFQUFFLElBQVk7UUFDekYs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LEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQy9CLENBQ0osQ0FDSixDQUFDO1lBRUYsVUFBVSxDQUFDO2dCQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUVMLENBQUM7SUFDTCxzQkFBQztBQUFELENBbHBCQSxBQWtwQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog57uE5Lu26K6+572uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudEhlbHBlciB7XG5cblxuICAgIC8v5a+55paH5pys6LWL5YC8XG4gICAgcHVibGljIHN0YXRpYyBsYWJlbFN0cmluZyhub2RlOiBjYy5Ob2RlLCB0ZXh0OiAoc3RyaW5nIHwgbnVtYmVyKSwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSwgbWF4Q2hhcnM6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICghIW1heENoYXJzKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IENvbXBvbmVudEhlbHBlci5zdHJDbGFtcCh0ZXh0LnRvU3RyaW5nKCksIG1heENoYXJzLCAnLi4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFsYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRleHQgKyBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChmb3JjZSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbGFiZWxUaW1lRm9ybWF0KG5vZGU6IGNjLk5vZGUsIHRleHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSB0aGlzLl9zZWNvbmRUb0RhdGUodGV4dCk7XG4gICAgICAgIENvbXBvbmVudEhlbHBlci5sYWJlbFN0cmluZyhub2RlLCByZXN1bHQpO1xuICAgIH1cblxuICAgIC8v5YiG5Ymy55qE5pe26Ze05qC85byPIDAwOjAwOjAwXG4gICAgcHVibGljIHN0YXRpYyBsYWJlbFRpbWVGb3JtYXRHYXAobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlLCBub2RlMzogY2MuTm9kZSwgdGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBoOiAobnVtYmVyIHwgc3RyaW5nKSA9IE1hdGguZmxvb3IodGltZSAvIDM2MDApO1xuICAgICAgICBsZXQgbTogKG51bWJlciB8IHN0cmluZykgPSBNYXRoLmZsb29yKCh0aW1lIC8gNjAgJSA2MCkpO1xuICAgICAgICBsZXQgczogKG51bWJlciB8IHN0cmluZykgPSBNYXRoLmZsb29yKCh0aW1lICUgNjApKTtcbiAgICAgICAgaCA9IGggPiA5ID8gaCA6ICcwJyArIGg7XG4gICAgICAgIG0gPSBtID4gOSA/IG0gOiAnMCcgKyBtO1xuICAgICAgICBzID0gcyA+IDkgPyBzIDogJzAnICsgcztcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmxhYmVsU3RyaW5nKG5vZGUxLCBoKTtcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmxhYmVsU3RyaW5nKG5vZGUyLCBtKTtcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmxhYmVsU3RyaW5nKG5vZGUzLCBzKTtcbiAgICB9XG5cbiAgICAvLzAwOjAwXG4gICAgcHVibGljIHN0YXRpYyBsYWJlbFRpbWVTcyhub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRpbWVTdHIgPSB0aGlzLl9zZWNvbmRUb0RhdGUyKHRpbWUpO1xuICAgICAgICBDb21wb25lbnRIZWxwZXIubGFiZWxTdHJpbmcobm9kZSwgdGltZVN0cik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NlY29uZFRvRGF0ZTIocmVzdWx0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbTogKHN0cmluZyB8IG51bWJlcikgPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSk7XG4gICAgICAgIGxldCBzOiAoc3RyaW5nIHwgbnVtYmVyKSA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSk7XG5cbiAgICAgICAgbSA9IG0gPiA5ID8gbSA6ICcwJyArIG07XG4gICAgICAgIHMgPSBzID4gOSA/IHMgOiAnMCcgKyBzO1xuICAgICAgICByZXR1cm4gbSArIFwiOlwiICsgcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfc2Vjb25kVG9EYXRlKHJlc3VsdDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGg6IChzdHJpbmcgfCBudW1iZXIpID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKTtcbiAgICAgICAgbGV0IG06IChzdHJpbmcgfCBudW1iZXIpID0gTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpO1xuICAgICAgICBsZXQgczogKHN0cmluZyB8IG51bWJlcikgPSBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xuICAgICAgICBoID0gaCA+IDkgPyBoIDogJzAnICsgaDtcbiAgICAgICAgbSA9IG0gPiA5ID8gbSA6ICcwJyArIG07XG4gICAgICAgIHMgPSBzID4gOSA/IHMgOiAnMCcgKyBzO1xuICAgICAgICByZXR1cm4gaCArIFwiOlwiICsgbSArIFwiOlwiICsgcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldExhYmVsU3RyaW5nKG5vZGU6IGNjLk5vZGUpOiBzdHJpbmcge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKCEhbGFiZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgLy9jTEhlaWdodCDmmK/lkKbmlLnlj5jooYzpq5hcbiAgICBwdWJsaWMgc3RhdGljIHNldExhYmVsU2l6ZShub2RlOiBjYy5Ob2RlLCBzaXplOiBudW1iZXIsIGNMSGVpZ2h0OiBudW1iZXIsIHNwYWNlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICghIWxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIGlmICghIWNMSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSBzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoISFzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zcGFjaW5nWCA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTGFiZWwoc2l6ZTogbnVtYmVyLCBjb2xvcjogY2MuQ29sb3IsIGNvbnRlbnQ/OiBzdHJpbmcsIGZvbnQ/OiBjYy5Gb250KTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbGV0IGxhYmVsOiBjYy5MYWJlbCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwuZm9udFNpemUgPSBzaXplO1xuICAgICAgICBsYWJlbC5mb250ID0gZm9udDtcbiAgICAgICAgbm9kZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICBsYWJlbC5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvL+iuvue9ruWtl+S9k1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0TGFiZWxGb250KG5vZGU6IGNjLk5vZGUsIGZvbnQ6IGNjLkZvbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICghIWxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuZm9udCA9IGZvbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WvueWvjOaWh+acrOi/m+ihjOi1i+WAvFxuICAgIHB1YmxpYyBzdGF0aWMgcmljaExhYmVsU3RyaW5nKG5vZGU6IGNjLk5vZGUsIHRleHQ6IHN0cmluZywgbGluZUhlaWdodD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhbGluZUhlaWdodCAmJiBsaW5lSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5oul5pyJ57q555CG5pe255u05o6l6LWL5YC8XG4gICAgcHVibGljIHN0YXRpYyBzcHJpdGVGcmFtZShub2RlOiBjYy5Ob2RlLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpOiBjYy5TcHJpdGUge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3ByaXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3ByaXRlRnJhbWUobm9kZTogY2MuTm9kZSk6IGNjLlNwcml0ZUZyYW1lIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcHJpdGUuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTcHJpdGUocmVzOiBjYy5TcHJpdGVGcmFtZSwgYW5jaG9yPzogY2MuVmVjMikge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSByZXM7XG4gICAgICAgIGlmICghIWFuY2hvcikge1xuICAgICAgICAgICAgbm9kZS5hbmNob3JYID0gYW5jaG9yLng7XG4gICAgICAgICAgICBub2RlLmFuY2hvclkgPSBhbmNob3IueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyU3ByaXRlRnJhbWUobm9kZTogY2MuTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3ByaXRlR3JheShub2RlOiBjYy5Ob2RlLCBpc0dyYXk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBzcHJpdGU6IGFueSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoIXNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghIXNwcml0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0dyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbCgnMmQtZ3JheS1zcHJpdGUnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbCgnMmQtc3ByaXRlJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6I635b6Xc2Nyb2xsVmlldyDlubbmu5HliqjliLDmjIflrprkvY3nva5cbiAgICBwdWJsaWMgc3RhdGljIGdldFNjcm9sbFZpZXdBbmRTY3JvbGwobm9kZTogY2MuTm9kZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBjYy5TY3JvbGxWaWV3IHtcbiAgICAgICAgbGV0IHNjcm9sbFZpZXcgPSBub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKTtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoeCwgeSksIDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY3JvbGxWaWV3O1xuICAgIH1cblxuICAgIC8v6I635b6Xc2Nyb2xsVmlldyDlubbmu5HliqjliLDmjIflrprkvY3nva5cbiAgICBwdWJsaWMgc3RhdGljIGdldFNjcm9sbFZpZXdBbmRTY3JvbGxQZXJjZW50KG5vZGU6IGNjLk5vZGUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogY2MuU2Nyb2xsVmlldyB7XG4gICAgICAgIGxldCBzY3JvbGxWaWV3ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgICAgIGlmIChzY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICBzY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XG4gICAgICAgICAgICBzY3JvbGxWaWV3LnNjcm9sbFRvKGNjLnYyKHgsIHkpLCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2Nyb2xsVmlldztcbiAgICB9XG5cblxuICAgIC8v5ruR5Yqo5Yiw6aG26YOoXG4gICAgcHVibGljIHN0YXRpYyBnZXRTY3JvbGxWaWV3QW5kU2Nyb2xsVG9wKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IDApOiBjYy5TY3JvbGxWaWV3IHtcbiAgICAgICAgbGV0IHNjcm9sbFZpZXcgPSBub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKTtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuc2Nyb2xsVG9Ub3AodGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjcm9sbFZpZXc7XG4gICAgfVxuXG5cbiAgICAvL+a7keWKqOWIsOW3puS+p1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2Nyb2xsVmlld0FuZFNjcm9sbExlZnQobm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMCk6IGNjLlNjcm9sbFZpZXcge1xuICAgICAgICBsZXQgc2Nyb2xsVmlldyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgICAgICBpZiAoc2Nyb2xsVmlldykge1xuICAgICAgICAgICAgc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xuICAgICAgICAgICAgc2Nyb2xsVmlldy5zY3JvbGxUb0xlZnQodGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjcm9sbFZpZXc7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFNjcm9sbFZpZXdFbmFibGVkKG5vZGU6IGNjLk5vZGUsIHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IGNjLlNjcm9sbFZpZXcge1xuICAgICAgICBsZXQgc2Nyb2xsVmlldyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgICAgICBpZiAoISFzY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICBzY3JvbGxWaWV3LmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2Nyb2xsVmlld1xuICAgIH1cblxuICAgIC8v6K6+572u6YCa55So6LSn5biBICB4eOS4hyDmiJbogIUgeHjkur9cbiAgICBwdWJsaWMgc3RhdGljIHNldENvbW1vbkN1cnJlbnlMYWJlbChub2RlOiBjYy5Ob2RlLCBjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudCgnQ29tbW9uQ3VycmVuY3lMYWJlbCcpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0Q29udGVudChjb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+Wwj+aVsOeCueaVsOWtl1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0RG90TGFiZWwobm9kZTogY2MuTm9kZSwgdmFsdWU6IG51bWJlciwgaXNVaW50OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoJ0RvdExhYmVsJyk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcodmFsdWUsIGlzVWludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldExhYmVsQ29sb3Iobm9kZTogY2MuTm9kZSwgY29sb3I6IGNjLkNvbG9yKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLmNvbG9yID0gY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEVkaXRvclN0cmluZyhub2RlOiBjYy5Ob2RlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBlZGl0Ym94ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgICAgICBpZiAoISFlZGl0Ym94KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRib3guc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldEVkaXRvclN0cmluZyhub2RlOiBjYy5Ob2RlLCBzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGVkaXRib3ggPSBub2RlLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcbiAgICAgICAgICAgIGlmICghIWVkaXRib3gpIHtcbiAgICAgICAgICAgICAgICBlZGl0Ym94LnN0cmluZyA9IHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6K6+572u5paH5a2X5o+P6L65XG4gICAgcHVibGljIHN0YXRpYyBzZXRMYWJlbE91dChub2RlOiBjYy5Ob2RlLCBjb2xvcjogY2MuQ29sb3IsIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbE91dCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgICAgICBsYWJlbE91dC5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgbGFiZWxPdXQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v56e76Zmk5o+P6L65XG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVMaW5lT3V0KG5vZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbE91dCA9IG5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+iOt+W+l+i+k+WFpeahhueahOWGheWuuVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RWRpdEJveFN0cmluZyhub2RlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBlZGl0Qm94ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgICAgICBpZiAoZWRpdEJveC5zdHJpbmcgIT0gZWRpdEJveC5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0Qm94LnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0ckNsYW1wKHN0cjogc3RyaW5nLCBtYXhDaGFyczogbnVtYmVyLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzdHIgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvQ29kZVBvaW50ID0gZnVuY3Rpb24gKHVuaWNvZGVTdXJyb2dhdGVzKSB7XG4gICAgICAgICAgICBsZXQgciA9IFtdLCBjID0gMCwgcCA9IDAsIGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB1bmljb2RlU3Vycm9nYXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gaTtcbiAgICAgICAgICAgICAgICBjID0gdW5pY29kZVN1cnJvZ2F0ZXMuY2hhckNvZGVBdChpKyspOy8v6L+U5Zue5L2N572u55qE5a2X56ym55qEIFVuaWNvZGUg57yW56CBIFxuICAgICAgICAgICAgICAgIGlmIChjID09IDB4ZmUwZikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gKDB4MTAwMDAgKyAoKHAgLSAweEQ4MDApIDw8IDEwKSArIChjIC0gMHhEQzAwKSk7XG4gICAgICAgICAgICAgICAgICAgIHIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgICAgICAgICAgICB9KTsgLy/orqHnrpc05a2X6IqC55qEdW5pY29kZVxuICAgICAgICAgICAgICAgICAgICBwID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDB4RDgwMCA8PSBjICYmIGMgPD0gMHhEQkZGKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBjOyAvL+WmguaenHVuaWNvZGXnvJbnoIHlnKhveEQ4MDAtMHhEQmZm5LmL6Ze077yM5YiZ6ZyA6KaB5LiO5ZCO5LiA5Liq5a2X56ym5pS+5Zyo5LiA6LW3XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHY6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICB9KTsgLy/lpoLmnpzmmK8y5a2X6IqC77yM55u05o6l5bCG56CB54K56L2s5Li65a+55bqU55qE5Y2B5YWt6L+b5Yi25b2i5byPXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cblxuICAgICAgICBzdWZmaXggPSBzdWZmaXggPT09IG51bGwgPyAnLi4uJyA6IHN1ZmZpeDtcbiAgICAgICAgbWF4Q2hhcnMgKj0gMjtcblxuICAgICAgICBsZXQgY29kZUFyciA9IHRvQ29kZVBvaW50KHN0cik7XG4gICAgICAgIGxldCBudW1DaGFyID0gMDtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlQXJyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgY29kZSA9IGNvZGVBcnJbaV0udjtcbiAgICAgICAgICAgIGxldCBhZGQgPSAxO1xuICAgICAgICAgICAgaWYgKGNvZGUgPj0gMTI4KSB7XG4gICAgICAgICAgICAgICAgYWRkID0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/lpoLmnpzotoXov4fkuobpmZDliLbvvIzliJnmjInkuIrkuIDkuKrkuLrlh4ZcbiAgICAgICAgICAgIGlmIChudW1DaGFyICsgYWRkID4gbWF4Q2hhcnMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgLy/ntK/liqBcbiAgICAgICAgICAgIG51bUNoYXIgKz0gYWRkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlQXJyLmxlbmd0aCAtIDEgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vcmUgPSBzdWZmaXggPyAxIDogMDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgY29kZUFycltpbmRleCAtIG1vcmVdLnBvcyArIDEpICsgc3VmZml4O1xuICAgIH1cblxuICAgIC8v6I635b6XY2hlY2tib3jnmoTpgInmi6nnirbmgIFcbiAgICBwdWJsaWMgc3RhdGljIGdldFRvZ2dsZShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgdG9nZ2xlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgICAgIGlmICghIXRvZ2dsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2dnbGUuaXNDaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFRvZ2dsZUxpc3RlbmVyKG5vZGUsIGZ1bmMsIGhvc3QpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGUub24oJ3RvZ2dsZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuYyAmJiBmdW5jLmNhbGwoaG9zdCwgZS5pc0NoZWNrZWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0QnV0dG9uSW50ZXJhY3RhYmxlKG5vZGU6IGNjLk5vZGUsIHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpZiAoISFidXR0b24pIHtcbiAgICAgICAgICAgICAgICBidXR0b24uaW50ZXJhY3RhYmxlID0gc3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRCdXR0b25JbnRlcmFjdGFiZWwobm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpZiAoISFidXR0b24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uLmludGVyYWN0YWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZENsaWNrRXZlbnQobm9kZSwgdGFyZ2V0LCBjb21wb25lbnQsIGhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGV2ZW50SGFuZGxlci50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIGV2ZW50SGFuZGxlci5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGlja0V2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNsaWNrRXZlbnRzW2ldICYmIGNsaWNrRXZlbnRzW2ldLmhhbmRsZXIgPT0gZXZlbnRIYW5kbGVyLmhhbmRsZXIgJiYgY2xpY2tFdmVudHNbaV0uY29tcG9uZW50ID09IGV2ZW50SGFuZGxlci5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xpY2tFdmVudHMucHVzaChldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8v6K6+572u6L+b5bqmXG4gICAgcHVibGljIHN0YXRpYyBzZXRQcm9ncmVzc0Jhcihub2RlOiBjYy5Ob2RlLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgYmFyID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICAgICAgaWYgKCEhYmFyKSB7XG4gICAgICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFNwaW5lU3RvcChub2RlOiBjYy5Ob2RlLCBpc1N0b3A6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBzcGluZSA9IG5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIGlmICghIXNwaW5lKSB7XG4gICAgICAgICAgICAgICAgc3BpbmUucGF1c2VkID0gaXNTdG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL+iuvue9rnNwaW5l55qu6IKkXG4gICAgcHVibGljIHN0YXRpYyBzZXRTcGluZVNraW4obm9kZTogY2MuTm9kZSwgc2tpbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgc3BpbmUgPSBub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBpZiAoISFzcGluZSkge1xuICAgICAgICAgICAgICAgIHNwaW5lLnNldFNraW4oc2tpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+iuvue9rnNwaW5l5Yqo55S7XG4gICAgcHVibGljIHN0YXRpYyBzZXRTcGluZUFuaW1hdGUobm9kZTogY2MuTm9kZSwgYW5pbWF0aW9uOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiwgZnVuYzogKGFyZzogYW55KSA9PiB2b2lkLCBob3N0OiBhbnksIGFyZzogYW55KSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgc3BpbmUgPSBub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBpZiAoISFzcGluZSkge1xuICAgICAgICAgICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBhbmltYXRpb24sIGlzTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFmdW5jKSB7XG4gICAgICAgICAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmMuY2FsbChob3N0LCBhcmcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+mXqueDgUFjdGlvbiBcbiAgICBwdWJsaWMgc3RhdGljIHNldEZsaWNrZXJBY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICAvLyBjYy5sb2coJ+W8gOWni+mXqueDgeS6hisrKysrKysrKysrKysrJyk7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5ibGluayh0aW1lLCBjb3VudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9oZWFydEFjdGlvbiDlv4Pot7NcbiAgICBwdWJsaWMgc3RhdGljIHNldEhlYXJ0QWN0aW9uKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IDAuNSwgaXNTdGFydEJpZzogYm9vbGVhbiA9IGZhbHNlLCBiaWdTY2FsZTogbnVtYmVyID0gMS4yLCBzbWFsbFNjYWxlOiBudW1iZXIgPSAwLjksIHNwZWNpYWw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbGV0IGRlbGF5QWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUgLSAwLjI7XG4gICAgICAgICAgICAgICAgZGVsYXlBY3Rpb24gPSBjYy5kZWxheVRpbWUoMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzY2FsZUJpZ0FjdGlvbiA9IGNjLnNjYWxlVG8odGltZSwgYmlnU2NhbGUsIGJpZ1NjYWxlKTtcbiAgICAgICAgICAgIGxldCBzY2FsZVNtYWxsQWN0aW9uID0gY2Muc2NhbGVUbyh0aW1lLCBzbWFsbFNjYWxlLCBzbWFsbFNjYWxlKTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHNwZWNpYWwpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2UoZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uLCBkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbikgOiBjYy5zZXF1ZW5jZShkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2Uoc2NhbGVCaWdBY3Rpb24sIHNjYWxlU21hbGxBY3Rpb24pIDogY2Muc2VxdWVuY2Uoc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVCaWdBY3Rpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGFjdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vaGVhcnRBY3Rpb24g55+t5pe26Ze05b+D6LezXG4gICAgcHVibGljIHN0YXRpYyBzZXRIZWFydEFjdGlvbkJ5VGltZShub2RlOiBjYy5Ob2RlLCBudW0gPSA1LCBjYWxsQmFjayA9IG51bGwsIHRpbWU6IG51bWJlciA9IDAuNSwgaXNTdGFydEJpZzogYm9vbGVhbiA9IGZhbHNlLCBiaWdTY2FsZTogbnVtYmVyID0gMS4yLCBzbWFsbFNjYWxlOiBudW1iZXIgPSAwLjksIHNwZWNpYWw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbGV0IGRlbGF5QWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUgLSAwLjI7XG4gICAgICAgICAgICAgICAgZGVsYXlBY3Rpb24gPSBjYy5kZWxheVRpbWUoMC4yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGN1cnJlbnROdW0gPSAwO1xuXG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBjYy5zY2FsZVRvKHRpbWUsIGJpZ1NjYWxlLCBiaWdTY2FsZSk7XG4gICAgICAgICAgICBsZXQgc2NhbGVTbWFsbEFjdGlvbiA9IGNjLnNjYWxlVG8odGltZSwgc21hbGxTY2FsZSwgc21hbGxTY2FsZSk7XG4gICAgICAgICAgICBsZXQgc2NhbGVGdW4gPSBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudE51bSsrO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsQmFjayAmJiBjdXJyZW50TnVtID49IG51bSkge1xuICAgICAgICAgICAgICAgICAgICBpZihjYWxsQmFjayljYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHNwZWNpYWwpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2UoZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uLCBkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVGdW4pIDogY2Muc2VxdWVuY2UoZGVsYXlBY3Rpb24sIHNjYWxlU21hbGxBY3Rpb24sIGRlbGF5QWN0aW9uLCBzY2FsZUJpZ0FjdGlvbiwgc2NhbGVGdW4pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IGlzU3RhcnRCaWcgPyBjYy5zZXF1ZW5jZShzY2FsZUJpZ0FjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVGdW4pIDogY2Muc2VxdWVuY2Uoc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVCaWdBY3Rpb24sIHNjYWxlRnVuKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0KGFjdGlvbiwgbnVtKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+S4iuS4i+a1ruWKqFxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VXBEb3duQWN0aW9uKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IDAuNSwgeTogbnVtYmVyID0gMjApOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mihub2RlLngsIG5vZGUueSlcbiAgICAgICAgICAgIGxldCBtb3ZlVXAgPSBjYy5tb3ZlVG8odGltZSwgY2MudjIocG9zLngsIHBvcy55ICsgeSkpO1xuICAgICAgICAgICAgbGV0IG1vdmVEb3duID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSkpO1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKG1vdmVVcCwgbW92ZURvd24pO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhY3Rpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TFJBY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC41LCB4OiBudW1iZXIgPSAyMCkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKG5vZGUueCwgbm9kZS55KVxuICAgICAgICAgICAgbGV0IG1vdmVVcCA9IGNjLm1vdmVUbyh0aW1lLCBjYy52Mihwb3MueCArIHgsIHBvcy55KSk7XG4gICAgICAgICAgICBsZXQgbW92ZURvd24gPSBjYy5tb3ZlVG8odGltZSwgY2MudjIocG9zLngsIHBvcy55KSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UobW92ZVVwLCBtb3ZlRG93bik7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGFjdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXRTY2FsZUd1b0Rvbmcobm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC4xLCBpc1N0YXJ0QmlnOiBib29sZWFuID0gdHJ1ZSwgYmlnU2NhbGU6IG51bWJlciA9IDEuMywgc21hbGxTY2FsZTogbnVtYmVyID0gMS4wKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBjYy5zY2FsZVRvKHRpbWUsIGJpZ1NjYWxlLCBiaWdTY2FsZSk7XG4gICAgICAgICAgICBsZXQgc2NhbGVTbWFsbEFjdGlvbiA9IGNjLnNjYWxlVG8odGltZSwgc21hbGxTY2FsZSwgc21hbGxTY2FsZSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gaXNTdGFydEJpZyA/IGNjLnNlcXVlbmNlKHNjYWxlQmlnQWN0aW9uLCBzY2FsZVNtYWxsQWN0aW9uKSA6IGNjLnNlcXVlbmNlKHNjYWxlU21hbGxBY3Rpb24sIHNjYWxlQmlnQWN0aW9uKVxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SnVtcEFjdGlvbShub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIgPSAwLjMsIHk6IG51bWJlciA9IDIwKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpXG4gICAgICAgICAgICBsZXQgbW92ZVVwID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSArIHkpKTtcbiAgICAgICAgICAgIGxldCBtb3ZlRG93biA9IGNjLm1vdmVUbyh0aW1lLCBjYy52Mihwb3MueCwgcG9zLnkpKTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShtb3ZlVXAsIG1vdmVEb3duKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFJlSnVtcEFjdGlvbShub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIgPSAwLjMsIHk6IG51bWJlciA9IDEwKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpXG4gICAgICAgICAgICBsZXQgbW92ZVVwID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSArIHkpKTtcbiAgICAgICAgICAgIGxldCBtb3ZlRG93biA9IGNjLm1vdmVUbyh0aW1lLCBjYy52Mihwb3MueCwgcG9zLnkgLSB5KSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UobW92ZVVwLCBtb3ZlRG93bik7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGFjdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/mn5DkuKrmlrnlkJHlvqrnjq/np7vliqhcbiAgICAvL2Rpc3RhbmNl5b6q546v56e75Yqo55qE6Led56a7XG4gICAgcHVibGljIHN0YXRpYyBzZXRGb3JFdmVyTW92ZUFjdGlvbihub2RlOiBjYy5Ob2RlLCBkaXN0YW5jZTogbnVtYmVyID0gNSwgdGltZTogbnVtYmVyID0gMC41LCBpc1N0YXJ0QmlnOiBib29sZWFuID0gZmFsc2UsIGF4aXM6IHN0cmluZyA9ICd4JywgaXNFYXNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBheGlzID09PSAneCcgPyBjYy5tb3ZlVG8odGltZSwgcG9zLnggKyBkaXN0YW5jZSwgcG9zLnkpIDogY2MubW92ZVRvKHRpbWUsIHBvcy54LCBwb3MueSArIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIGlmIChpc0Vhc2UpIHtcbiAgICAgICAgICAgICAgICBzY2FsZUJpZ0FjdGlvbiA9IHNjYWxlQmlnQWN0aW9uLmVhc2luZyhjYy5lYXNlT3V0KDEuNSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNjYWxlU21hbGxBY3Rpb24gPSBjYy5tb3ZlVG8odGltZSwgcG9zLngsIHBvcy55KVxuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGlzU3RhcnRCaWcgPyBjYy5zZXF1ZW5jZShzY2FsZUJpZ0FjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbikgOiBjYy5zZXF1ZW5jZShzY2FsZVNtYWxsQWN0aW9uLCBzY2FsZUJpZ0FjdGlvbilcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoYWN0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+W+queOr+enu+WKqCDmkq3mlL7mjIflrprml7bpl7RcbiAgICBwdWJsaWMgc3RhdGljIHNldExvb3BBY3Rpb24obm9kZTogY2MuTm9kZSwgY2FsbEJhY2s6ICgpID0+IHZvaWQsIGF4aXM6IHN0cmluZyA9ICd5JywgZGlzdGFuY2U6IG51bWJlciA9IDUsIGFjdGlvblRpbWU6IG51bWJlciA9IDAuNSwgZHVyYXRpb246IG51bWJlciA9IDMsIGlzU3RhcnRCaWc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGxldCBzY2FsZUJpZ0FjdGlvbiA9IGF4aXMgPT09ICd4JyA/IGNjLm1vdmVUbyhhY3Rpb25UaW1lLCBwb3MueCArIGRpc3RhbmNlLCBwb3MueSkgOiBjYy5tb3ZlVG8oYWN0aW9uVGltZSwgcG9zLngsIHBvcy55ICsgZGlzdGFuY2UpO1xuICAgICAgICAgICAgbGV0IHNjYWxlU21hbGxBY3Rpb24gPSBjYy5tb3ZlVG8oYWN0aW9uVGltZSwgcG9zLngsIHBvcy55KTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2Uoc2NhbGVCaWdBY3Rpb24sIHNjYWxlU21hbGxBY3Rpb24pIDogY2Muc2VxdWVuY2Uoc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVCaWdBY3Rpb24pO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gZHVyYXRpb24gLyAoYWN0aW9uVGltZSAqIDIpO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MucmVwZWF0KGFjdGlvbiwgY291bnQpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soKTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+e8qeaUvuaYvuekuuWbnuW8uVxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2NhbGVCb3VuY2Uobm9kZTogY2MuTm9kZSwgY2FsbEJhY2s6ICgpID0+IHZvaWQsIGR1cmF0aW9uOiBudW1iZXIgPSAwLjEsIGJkdXJhdGlvbjogbnVtYmVyID0gMC42LCBiUmFkaW86IG51bWJlciA9IDEuOCk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGJBY3Rpb24gPSBjYy5zY2FsZVRvKGR1cmF0aW9uLCBiUmFkaW8sIGJSYWRpbyk7XG4gICAgICAgICAgICBsZXQgc0FjdGlvbiA9IGNjLnNjYWxlVG8oYmR1cmF0aW9uLCAxLCAxKS5lYXNpbmcoY2MuZWFzZUJvdW5jZU91dCgpKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGJBY3Rpb24sIGNjLmRlbGF5VGltZSgwLjEpLCBzQWN0aW9uLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soKTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7kuIvnoLjmlYjmnpxcbiAgICAgKiBAcGFyYW0gbm9kZSDoioLngrlcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g5oyB57ut5pe26Ze0XG4gICAgICogQHBhcmFtIGJpZ1NjYWxlIOi1t+Wni+acgOWkp+WAvFxuICAgICAqIEBwYXJhbSBzbWFsbFNjYWxlIOe8qeaUvuWIsOacgOWwj+WAvFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0RG93bkFjdGlvbihub2RlOiBjYy5Ob2RlLCBkdXJhdGlvbjogbnVtYmVyID0gMC4yLCBiaWdTY2FsZTogbnVtYmVyID0gMywgc21hbGxTY2FsZTogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5zY2FsZVggPSBub2RlLnNjYWxlWSA9IGJpZ1NjYWxlO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbyhkdXJhdGlvbiwgc21hbGxTY2FsZSwgc21hbGxTY2FsZSkuZWFzaW5nKGNjLmVhc2VCb3VuY2VJbk91dCgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1RPRE8g5ZCO5pyf5L+u5pS55oiQ6ZyH5Yqo57G7XG4gICAgcHVibGljIHN0YXRpYyBzaGFrZUVmZmVjdChub2RlOiBjYy5Ob2RlLCBkdXJhdGlvbjogbnVtYmVyID0gMC42KTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICBjYy5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52Mig1LCA3KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoLTYsIDcpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigtMTMsIDMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigzLCAtNikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDIsIGNjLnYyKC01LCA1KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoMiwgLTgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigtOCwgLTEwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoMywgMTApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigwLCAwKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24gKiAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/manager/DragManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f73242JYXdC/LQGTZZQMl2I', 'DragManager');
// src/framework/manager/DragManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NResponer_1 = require("../message/NResponer");
var MkUtils_1 = require("../tools/MkUtils");
var Utils_1 = require("../tools/Utils");
//拖拽管理类
var DragManager = /** @class */ (function () {
    function DragManager() {
        this.BaseDropName = 'BaseDropItem';
        this.tempItem = null;
        this.stage = null;
        this.isInitEvent = false;
        this.dragData = null;
        this.updateHandler = null;
        this.endHandler = null;
        this.startHandler = null;
        this.canDrag = true;
        this.isInit = false;
        this._inMerge = false;
        this.tempItemList = {};
    }
    DragManager.instance = function () {
        if (!this._instance) {
            this._instance = new DragManager();
        }
        return this._instance;
    };
    /**
     * 初始化顶级
     * @param screen
     */
    DragManager.prototype.initStage = function (screen, thisObj) {
        if (!this.isInit && !cc.isValid(this.stage)) {
            this.stage = screen;
            this.isInit = true;
            this.thisObj = thisObj;
        }
    };
    //开始拖动动画
    DragManager.prototype.startDragHandler = function (spriteFrame, pos, dragData) {
        this.initPos = pos;
        this.dragData = dragData;
        this.initStageEvent();
        if (cc.isValid(spriteFrame)) {
            this.setDragSkin(spriteFrame, pos);
            this.tempItem.opacity = 255;
            this.tempItem.setScale(dragData.moveTarget.scale);
            this.tempItem.stopAllActions();
            var sc = dragData.moveTarget.scale;
            this.tempItem.runAction(cc.sequence(cc.scaleTo(0.2, sc + 0.2), cc.scaleTo(0.2, sc)));
            this.canDrag = true;
        }
        else {
            this.canDrag = false;
        }
        this.startHandler && this.startHandler.call(this.thisObj, this.dragData);
    };
    //设置回调函数
    //updateHandler 更新函数
    //返回时回调
    DragManager.prototype.setCallBackHandler = function (updateHandler, endHandler, startHandler) {
        this.updateHandler = updateHandler;
        this.endHandler = endHandler;
        this.startHandler = startHandler;
    };
    //拖放是否成功的回调
    DragManager.prototype.dragSuccess = function (state) {
        NResponer_1.default.dispatch('dragStatus', state, this.dragData);
    };
    DragManager.prototype.initStageEvent = function () {
        if (!this.isInitEvent && cc.isValid(this.stage)) {
            this.createTempItem();
            this.isInitEvent = true;
            this.stage.on(cc.Node.EventType.TOUCH_MOVE, this.moveTouchHandler, this, false);
            //取消
            this.stage.on(cc.Node.EventType.TOUCH_CANCEL, this.cancelTouchHandler, this, false);
            //鼠标弹起
            this.stage.on(cc.Node.EventType.TOUCH_END, this.endTouchHandler, this, false);
        }
    };
    DragManager.prototype.moveTouchHandler = function (event) {
        if (this.canDrag) {
            // this.tempItem.x = event.getLocationX() - 640;
            // this.tempItem.y = event.getLocationY() - 360;
            this.tempItem.setPosition(this.stage.convertToNodeSpaceAR(event.getLocation()));
            if (!!this.updateHandler) {
                this.updateHandler.call(this.thisObj, this.tempItem, this.dragData);
            }
        }
    };
    DragManager.prototype.cancelTouchHandler = function (event) {
        if (this.canDrag) {
            // this.removeStageEvent(event.getLocation());
            if (this.endHandler) {
                this.endHandler.call(this.thisObj, this.tempItem, this.dragData, event.getLocation());
            }
        }
    };
    DragManager.prototype.endTouchHandler = function (event) {
        if (this.canDrag) {
            // this.removeStageEvent(event.getLocation());
            if (this.endHandler) {
                this.endHandler.call(this.thisObj, this.tempItem, this.dragData, event.getLocation());
            }
        }
    };
    DragManager.prototype.removeStageEvent = function (pos, callBack, targetPos, targetCb, mScale) {
        var _this = this;
        this.isInitEvent = false;
        this.stage.off(cc.Node.EventType.TOUCH_MOVE, this.moveTouchHandler, this);
        this.stage.off(cc.Node.EventType.TOUCH_END, this.endTouchHandler, this);
        this.stage.off(cc.Node.EventType.TOUCH_CANCEL, this.cancelTouchHandler, this);
        if (cc.isValid(this.tempItem)) {
            var dis = 0;
            // let dis = Global.HANDLE_FEEL_ANIMAL_COLLISION_DIS;
            if (mScale) {
                this.tempItem.scale = mScale;
                dis *= mScale;
            }
            if (pos) {
                var dis_1 = MkUtils_1.default.twoPointDistance(this.initPos, this.stage.convertToNodeSpaceAR(pos));
                // cc.log("distance",dis)
                var delayTime = dis_1 / 2000;
                this.tempItem.runAction(cc.sequence(cc.moveTo(delayTime, this.initPos).easing(cc.easeSineIn()), cc.callFunc(function () {
                    if (callBack) {
                        callBack.call(_this.thisObj);
                    }
                    _this.tempItem.opacity = 0;
                })));
            }
            else {
                // this._inMerge = true;
                var mScale_1 = this.tempItem.scale;
                var nodePos = this.tempItem.getParent().convertToNodeSpaceAR(targetPos);
                this.tempItem.setPosition(nodePos);
                this.tempItem.runAction(cc.sequence(cc.scaleTo(Utils_1.default._FT(3), 0.3), cc.spawn(cc.moveTo(Utils_1.default._FT(5), cc.v2(nodePos.x + dis, nodePos.y)).easing(cc.easeSineInOut()), cc.scaleTo(Utils_1.default._FT(5), mScale_1, mScale_1).easing(cc.easeSineInOut())), cc.delayTime(Utils_1.default._FT(3)), cc.spawn(cc.moveTo(Utils_1.default._FT(3), cc.v2(nodePos.x, nodePos.y)).easing(cc.easeSineInOut()), 
                // cc.scaleTo(Utils._FT(10),0.3).easing(cc.easeSineInOut())
                // cc.fadeOut(Utils._FT(5))
                cc.fadeTo(Utils_1.default._FT(3), 85)), cc.callFunc(function () {
                    _this.tempItem.opacity = 0;
                    _this.tempItem.zIndex = 999;
                    // this._inMerge = false;
                    targetCb && targetCb();
                })));
                // this.tempItem.runAction(cc.sequence(
                //     cc.spawn(cc.scaleTo(Utils._FT(3),mScale * 1.8),cc.fadeTo(Utils._FT(3),200),cc.moveTo(Utils._FT(3),nodePos)),
                //     cc.scaleTo(Utils._FT(3),mScale * 0.90),
                //     cc.callFunc(()=>{
                //         this.tempItem.zIndex = -10;
                //     }),
                //     cc.scaleTo(Utils._FT(2),mScale * 1.35),
                //     cc.scaleTo(Utils._FT(2),mScale * 0.9),
                //     cc.scaleTo(Utils._FT(3),mScale),
                //     cc.scaleTo(Utils._FT(3),0).easing(cc.easeSineIn()), cc.callFunc(() => {
                //         this.tempItem.opacity = 0;
                //         this.tempItem.zIndex = 999;
                //         targetCb && targetCb();
                //     })
                // ));
                // this.tempItem.runAction(cc.sequence(cc.scaleTo(0.2, 0).easing(cc.easeSineIn()), cc.callFunc(() => {
                //     this.tempItem.opacity = 0;
                // })))
            }
        }
        this.canDrag = false;
    };
    DragManager.prototype.setDragSkin = function (skin, pos) {
        if (cc.isValid(this.tempItem)) {
            this.tempItem.getComponent(cc.Sprite).spriteFrame = skin;
            this.tempItem.x = pos.x;
            this.tempItem.y = pos.y;
        }
    };
    DragManager.prototype.createTempItem = function () {
        var mIndex = this.dragData["index"];
        if (this.tempItemList[mIndex]) {
            this.tempItem = this.tempItemList[mIndex];
            return;
        }
        if (cc.isValid(this.tempItem)) {
            return this.tempItem;
        }
        this.tempItem = new cc.Node();
        this.tempItem.addComponent(cc.Sprite);
        this.tempItem.parent = this.stage;
        this.tempItemList[mIndex] = this.tempItem;
    };
    DragManager.prototype.getTempItemWorldPos = function () {
        if (!this.tempItem) {
            return cc.v2();
        }
        return this.tempItem.getParent().convertToWorldSpaceAR(this.tempItem.getPosition());
    };
    //获得拖拽对象的数据
    DragManager.prototype.getDragData = function () {
        return this.dragData;
    };
    return DragManager;
}());
exports.default = DragManager.instance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvRHJhZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxrREFBNkM7QUFDN0MsNENBQXVDO0FBQ3ZDLHdDQUFtQztBQUVuQyxPQUFPO0FBQ1A7SUFBQTtRQUNVLGlCQUFZLEdBQVcsY0FBYyxDQUFDO1FBQ3RDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBUSxFQUFFLENBQUM7SUF5TWpDLENBQUM7SUFyTVEsb0JBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUNwQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsK0JBQVMsR0FBVCxVQUFVLE1BQWUsRUFBRSxPQUFPO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7SUFDSCxDQUFD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O0lBQ1gsaUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQXZOQSxBQXVOQyxJQUFBO0FBRUQsa0JBQWUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbCBmcm9tIFwiLi4vLi4vZ2FtZS9jb25zdHMvR2xvYmFsXCI7XG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vYmFzZS9IYW5kbGVyXCI7XG5pbXBvcnQgTlJlc3BvbmVyIGZyb20gXCIuLi9tZXNzYWdlL05SZXNwb25lclwiO1xuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uL3Rvb2xzL01rVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdG9vbHMvVXRpbHNcIjtcblxuLy/mi5bmi73nrqHnkIbnsbtcbmNsYXNzIERyYWdNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBCYXNlRHJvcE5hbWU6IHN0cmluZyA9ICdCYXNlRHJvcEl0ZW0nO1xuICBwcml2YXRlIHRlbXBJdGVtOiBjYy5Ob2RlID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGFnZTogY2MuTm9kZSA9IG51bGw7XG4gIHByaXZhdGUgaXNJbml0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnRGF0YSA9IG51bGw7XG4gIHByaXZhdGUgdXBkYXRlSGFuZGxlcjogSGFuZGxlciA9IG51bGw7XG4gIHByaXZhdGUgZW5kSGFuZGxlcjogSGFuZGxlciA9IG51bGw7XG4gIHByaXZhdGUgc3RhcnRIYW5kbGVyOiBIYW5kbGVyID0gbnVsbDtcbiAgcHJpdmF0ZSBjYW5EcmFnOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSB0aGlzT2JqOiBhbnk7XG4gIHByaXZhdGUgaW5pdFBvczogYW55Oy8v5Yid5aeL5L2N572uXG4gIHB1YmxpYyBfaW5NZXJnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHRlbXBJdGVtTGlzdDogYW55ID0ge307XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBEcmFnTWFuYWdlcjtcblxuICBzdGF0aWMgaW5zdGFuY2UoKTogRHJhZ01hbmFnZXIge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IERyYWdNYW5hZ2VyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3lp4vljJbpobbnuqdcbiAgICogQHBhcmFtIHNjcmVlbiBcbiAgICovXG4gIGluaXRTdGFnZShzY3JlZW46IGNjLk5vZGUsIHRoaXNPYmopIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0ICYmICFjYy5pc1ZhbGlkKHRoaXMuc3RhZ2UpKSB7XG4gICAgICB0aGlzLnN0YWdlID0gc2NyZWVuO1xuICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgICAgdGhpcy50aGlzT2JqID0gdGhpc09iajtcbiAgICB9XG4gIH1cblxuICAvL+W8gOWni+aLluWKqOWKqOeUu1xuICBzdGFydERyYWdIYW5kbGVyKHNwcml0ZUZyYW1lLCBwb3MsIGRyYWdEYXRhKSB7XG4gICAgdGhpcy5pbml0UG9zID0gcG9zO1xuICAgIHRoaXMuZHJhZ0RhdGEgPSBkcmFnRGF0YTtcbiAgICB0aGlzLmluaXRTdGFnZUV2ZW50KCk7XG4gICAgaWYgKGNjLmlzVmFsaWQoc3ByaXRlRnJhbWUpKSB7XG4gICAgICB0aGlzLnNldERyYWdTa2luKHNwcml0ZUZyYW1lLCBwb3MpO1xuICAgICAgdGhpcy50ZW1wSXRlbS5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy50ZW1wSXRlbS5zZXRTY2FsZShkcmFnRGF0YS5tb3ZlVGFyZ2V0LnNjYWxlKVxuICAgICAgdGhpcy50ZW1wSXRlbS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgbGV0IHNjID0gZHJhZ0RhdGEubW92ZVRhcmdldC5zY2FsZTtcbiAgICAgIHRoaXMudGVtcEl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4yLCBzYyArIDAuMiksXG4gICAgICAgIGNjLnNjYWxlVG8oMC4yLCBzYykpKVxuICAgICAgdGhpcy5jYW5EcmFnID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW5EcmFnID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc3RhcnRIYW5kbGVyICYmIHRoaXMuc3RhcnRIYW5kbGVyLmNhbGwodGhpcy50aGlzT2JqLCB0aGlzLmRyYWdEYXRhKTtcbiAgfVxuXG4gIC8v6K6+572u5Zue6LCD5Ye95pWwXG4gIC8vdXBkYXRlSGFuZGxlciDmm7TmlrDlh73mlbBcbiAgLy/ov5Tlm57ml7blm57osINcbiAgc2V0Q2FsbEJhY2tIYW5kbGVyKHVwZGF0ZUhhbmRsZXIsIGVuZEhhbmRsZXIsIHN0YXJ0SGFuZGxlcikge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gICAgdGhpcy5lbmRIYW5kbGVyID0gZW5kSGFuZGxlcjtcbiAgICB0aGlzLnN0YXJ0SGFuZGxlciA9IHN0YXJ0SGFuZGxlcjtcbiAgfVxuXG4gIC8v5ouW5pS+5piv5ZCm5oiQ5Yqf55qE5Zue6LCDXG4gIGRyYWdTdWNjZXNzKHN0YXRlKSB7XG4gICAgTlJlc3BvbmVyLmRpc3BhdGNoKCdkcmFnU3RhdHVzJywgc3RhdGUsIHRoaXMuZHJhZ0RhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U3RhZ2VFdmVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0RXZlbnQgJiYgY2MuaXNWYWxpZCh0aGlzLnN0YWdlKSkge1xuICAgICAgdGhpcy5jcmVhdGVUZW1wSXRlbSgpO1xuICAgICAgdGhpcy5pc0luaXRFdmVudCA9IHRydWU7XG4gICAgICB0aGlzLnN0YWdlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMubW92ZVRvdWNoSGFuZGxlciwgdGhpcywgZmFsc2UpO1xuICAgICAgLy/lj5bmtohcbiAgICAgIHRoaXMuc3RhZ2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmNhbmNlbFRvdWNoSGFuZGxlciwgdGhpcywgZmFsc2UpO1xuICAgICAgLy/pvKDmoIflvLnotbdcbiAgICAgIHRoaXMuc3RhZ2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVuZFRvdWNoSGFuZGxlciwgdGhpcywgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVRvdWNoSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLmNhbkRyYWcpIHtcbiAgICAgIC8vIHRoaXMudGVtcEl0ZW0ueCA9IGV2ZW50LmdldExvY2F0aW9uWCgpIC0gNjQwO1xuICAgICAgLy8gdGhpcy50ZW1wSXRlbS55ID0gZXZlbnQuZ2V0TG9jYXRpb25ZKCkgLSAzNjA7XG4gICAgICB0aGlzLnRlbXBJdGVtLnNldFBvc2l0aW9uKHRoaXMuc3RhZ2UuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSkpO1xuICAgICAgaWYgKCEhdGhpcy51cGRhdGVIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlci5jYWxsKHRoaXMudGhpc09iaiwgdGhpcy50ZW1wSXRlbSwgdGhpcy5kcmFnRGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYW5jZWxUb3VjaEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jYW5EcmFnKSB7XG4gICAgICAvLyB0aGlzLnJlbW92ZVN0YWdlRXZlbnQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICBpZiAodGhpcy5lbmRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZW5kSGFuZGxlci5jYWxsKHRoaXMudGhpc09iaiwgdGhpcy50ZW1wSXRlbSwgdGhpcy5kcmFnRGF0YSwgZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbmRUb3VjaEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5jYW5EcmFnKSB7XG4gICAgICAvLyB0aGlzLnJlbW92ZVN0YWdlRXZlbnQoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICBpZiAodGhpcy5lbmRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZW5kSGFuZGxlci5jYWxsKHRoaXMudGhpc09iaiwgdGhpcy50ZW1wSXRlbSwgdGhpcy5kcmFnRGF0YSwgZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlU3RhZ2VFdmVudChwb3M/LCBjYWxsQmFjaz8sIHRhcmdldFBvcz8sIHRhcmdldENiPywgbVNjYWxlPykge1xuICAgIHRoaXMuaXNJbml0RXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YWdlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm1vdmVUb3VjaEhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMuc3RhZ2Uub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5lbmRUb3VjaEhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMuc3RhZ2Uub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5jYW5jZWxUb3VjaEhhbmRsZXIsIHRoaXMpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMudGVtcEl0ZW0pKSB7XG4gICAgICBsZXQgZGlzID0gMDtcbiAgICAgIC8vIGxldCBkaXMgPSBHbG9iYWwuSEFORExFX0ZFRUxfQU5JTUFMX0NPTExJU0lPTl9ESVM7XG4gICAgICBpZiAobVNjYWxlKSB7XG4gICAgICAgIHRoaXMudGVtcEl0ZW0uc2NhbGUgPSBtU2NhbGU7XG4gICAgICAgIGRpcyAqPSBtU2NhbGU7XG4gICAgICB9XG4gICAgICBpZiAocG9zKSB7XG4gICAgICAgIGxldCBkaXMgPSBNS1V0aWxzLnR3b1BvaW50RGlzdGFuY2UodGhpcy5pbml0UG9zLCB0aGlzLnN0YWdlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcykpO1xuICAgICAgICAvLyBjYy5sb2coXCJkaXN0YW5jZVwiLGRpcylcbiAgICAgICAgbGV0IGRlbGF5VGltZSA9IGRpcyAvIDIwMDA7XG4gICAgICAgIHRoaXMudGVtcEl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhkZWxheVRpbWUsIHRoaXMuaW5pdFBvcykuZWFzaW5nKGNjLmVhc2VTaW5lSW4oKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICBpZiAoY2FsbEJhY2spIHtcbiAgICAgICAgICAgIGNhbGxCYWNrLmNhbGwodGhpcy50aGlzT2JqKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50ZW1wSXRlbS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfSkpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcy5faW5NZXJnZSA9IHRydWU7XG4gICAgICAgIGxldCBtU2NhbGUgPSB0aGlzLnRlbXBJdGVtLnNjYWxlO1xuICAgICAgICBsZXQgbm9kZVBvcyA9IHRoaXMudGVtcEl0ZW0uZ2V0UGFyZW50KCkuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0UG9zKTtcbiAgICAgICAgdGhpcy50ZW1wSXRlbS5zZXRQb3NpdGlvbihub2RlUG9zKTtcbiAgICAgICAgdGhpcy50ZW1wSXRlbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgY2Muc2NhbGVUbyhVdGlscy5fRlQoMyksIDAuMyksXG4gICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oVXRpbHMuX0ZUKDUpLCBjYy52Mihub2RlUG9zLnggKyBkaXMsIG5vZGVQb3MueSkpLmVhc2luZyhjYy5lYXNlU2luZUluT3V0KCkpLFxuICAgICAgICAgICAgY2Muc2NhbGVUbyhVdGlscy5fRlQoNSksIG1TY2FsZSwgbVNjYWxlKS5lYXNpbmcoY2MuZWFzZVNpbmVJbk91dCgpKSksXG4gICAgICAgICAgY2MuZGVsYXlUaW1lKFV0aWxzLl9GVCgzKSksXG4gICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oVXRpbHMuX0ZUKDMpLCBjYy52Mihub2RlUG9zLngsIG5vZGVQb3MueSkpLmVhc2luZyhjYy5lYXNlU2luZUluT3V0KCkpLFxuICAgICAgICAgICAgLy8gY2Muc2NhbGVUbyhVdGlscy5fRlQoMTApLDAuMykuZWFzaW5nKGNjLmVhc2VTaW5lSW5PdXQoKSlcbiAgICAgICAgICAgIC8vIGNjLmZhZGVPdXQoVXRpbHMuX0ZUKDUpKVxuICAgICAgICAgICAgY2MuZmFkZVRvKFV0aWxzLl9GVCgzKSwgODUpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRlbXBJdGVtLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy50ZW1wSXRlbS56SW5kZXggPSA5OTk7XG4gICAgICAgICAgICAvLyB0aGlzLl9pbk1lcmdlID0gZmFsc2U7XG4gICAgICAgICAgICB0YXJnZXRDYiAmJiB0YXJnZXRDYigpO1xuICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgICAgICAvLyB0aGlzLnRlbXBJdGVtLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgLy8gICAgIGNjLnNwYXduKGNjLnNjYWxlVG8oVXRpbHMuX0ZUKDMpLG1TY2FsZSAqIDEuOCksY2MuZmFkZVRvKFV0aWxzLl9GVCgzKSwyMDApLGNjLm1vdmVUbyhVdGlscy5fRlQoMyksbm9kZVBvcykpLFxuICAgICAgICAvLyAgICAgY2Muc2NhbGVUbyhVdGlscy5fRlQoMyksbVNjYWxlICogMC45MCksXG4gICAgICAgIC8vICAgICBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudGVtcEl0ZW0uekluZGV4ID0gLTEwO1xuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICBjYy5zY2FsZVRvKFV0aWxzLl9GVCgyKSxtU2NhbGUgKiAxLjM1KSxcbiAgICAgICAgLy8gICAgIGNjLnNjYWxlVG8oVXRpbHMuX0ZUKDIpLG1TY2FsZSAqIDAuOSksXG4gICAgICAgIC8vICAgICBjYy5zY2FsZVRvKFV0aWxzLl9GVCgzKSxtU2NhbGUpLFxuICAgICAgICAvLyAgICAgY2Muc2NhbGVUbyhVdGlscy5fRlQoMyksMCkuZWFzaW5nKGNjLmVhc2VTaW5lSW4oKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnRlbXBJdGVtLm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMudGVtcEl0ZW0uekluZGV4ID0gOTk5O1xuICAgICAgICAvLyAgICAgICAgIHRhcmdldENiICYmIHRhcmdldENiKCk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyApKTtcbiAgICAgICAgLy8gdGhpcy50ZW1wSXRlbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjIsIDApLmVhc2luZyhjYy5lYXNlU2luZUluKCkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnRlbXBJdGVtLm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyB9KSkpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FuRHJhZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREcmFnU2tpbihza2luLCBwb3MpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnRlbXBJdGVtKSkge1xuICAgICAgdGhpcy50ZW1wSXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNraW47XG4gICAgICB0aGlzLnRlbXBJdGVtLnggPSBwb3MueDtcbiAgICAgIHRoaXMudGVtcEl0ZW0ueSA9IHBvcy55O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGVtcEl0ZW0oKSB7XG4gICAgbGV0IG1JbmRleCA9IHRoaXMuZHJhZ0RhdGFbXCJpbmRleFwiXTtcbiAgICBpZiAodGhpcy50ZW1wSXRlbUxpc3RbbUluZGV4XSkge1xuICAgICAgdGhpcy50ZW1wSXRlbSA9IHRoaXMudGVtcEl0ZW1MaXN0W21JbmRleF07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMudGVtcEl0ZW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZW1wSXRlbTtcbiAgICB9XG4gICAgdGhpcy50ZW1wSXRlbSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgdGhpcy50ZW1wSXRlbS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLnRlbXBJdGVtLnBhcmVudCA9IHRoaXMuc3RhZ2U7XG4gICAgdGhpcy50ZW1wSXRlbUxpc3RbbUluZGV4XSA9IHRoaXMudGVtcEl0ZW07XG4gIH1cbiAgcHVibGljIGdldFRlbXBJdGVtV29ybGRQb3MoKSB7XG4gICAgaWYgKCF0aGlzLnRlbXBJdGVtKSB7XG4gICAgICByZXR1cm4gY2MudjIoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGVtcEl0ZW0uZ2V0UGFyZW50KCkuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudGVtcEl0ZW0uZ2V0UG9zaXRpb24oKSk7XG4gIH1cblxuICAvL+iOt+W+l+aLluaLveWvueixoeeahOaVsOaNrlxuICBnZXREcmFnRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnRGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnTWFuYWdlci5pbnN0YW5jZSgpOyJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/tools/SortUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2695bm4arVIq6Dj0pAiuMEV', 'SortUtils');
// src/framework/tools/SortUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//排序算法集合
var SortUtils = /** @class */ (function () {
    function SortUtils() {
    }
    /**
     * 冒泡排序算法
     * @param collects
     * @param key 如果是对象则使用key值进行比较
     * @returns
     */
    SortUtils.bubbleSort = function (collects, key) {
        var isNeedKey = !!key;
        if (collects) {
            var len = collects.length;
            for (var i = 0; i < len - 1; i++) {
                var flag = true; //优化 如果一轮检查下来发现没有可交换的 说明已经是有序的，不用再检查了
                var frist = null; //前一个需要比较值
                var next = null; //后一个需要比较的值
                for (var j = 0; j < len - i - 1; j++) {
                    if (isNeedKey) { //是否是对象需要排序
                        frist = collects[j][key];
                        next = collects[j + 1][key];
                    }
                    else {
                        frist = collects[j];
                        next = collects[j + 1];
                    }
                    if (frist < next) {
                        //进行交换
                        var temp = collects[j + 1];
                        collects[j + 1] = collects[j];
                        collects[j] = temp;
                        flag = false;
                    }
                }
                // console.log(i + "执行了多少次");
                if (flag) {
                    break;
                }
            }
        }
        return collects;
    };
    /**
     * 希尔排序
     * @param collects
     * @param key
     * @returns
     */
    SortUtils.shellSort = function (collects, key) {
        var len = collects.length;
        return collects;
    };
    SortUtils.insertArr = function () {
    };
    /**
     * 插入排序算法
     * @param collects 需要排序的集合
     * @param key 如果是对象需要排序，需要提供一个key 来获取number类型的值进行排序
     * @returns 返回一个排序好的数组
     */
    SortUtils.insertSort = function (collects, key) {
        if (!collects || collects.length < 2) {
            return collects;
        }
        var isNeedKey = !!key;
        var preElement = null; //前一个元素
        var nextElement = null; //后一个元素
        for (var index = 1; index < collects.length; index++) {
            preElement = isNeedKey ? collects[index - 1][key] : collects[index - 1];
            nextElement = isNeedKey ? collects[index][key] : collects[index];
            if (preElement > nextElement) {
                //TODO 优化思考
                var i = index;
                //排序之前的元素
                for (i; i > 0; i--) {
                    var cValue = isNeedKey ? collects[i][key] : collects[i];
                    var cPre = isNeedKey ? collects[i - 1][key] : collects[i - 1];
                    if (cValue < cPre) {
                        var temp = collects[i];
                        collects[i] = collects[i - 1];
                        collects[i - 1] = temp;
                    }
                }
            }
        }
        return collects;
    };
    // /**
    //  * 通过二分法查找 因为对于当前元素前边都是已经排序好的，通过二分法减少查看次数
    //  * @param collects 
    //  * @param key 
    //  * @param index   collects 中已经检查到的索引
    //  * @returns 
    //  */
    // private static insertFindBinary<T>(collects:Array<T>,key:string,index:number):number
    // {
    //     let isNeedKey:boolean = !!key;
    //     let midIndex:number = Math.floor( index/2 );
    //     let needValue = isNeedKey ? collects[index][key] : collects[index];//需要比较的当前值
    //     while(true)
    //     {
    //         const mValue =  isNeedKey ? collects[midIndex][key] : collects[midIndex];
    //         if (needValue > mValue) {
    //             midIndex = Math.floor( midIndex / 2 );
    //         } else if (mValue == needValue) {
    //             return midIndex;
    //         } else {
    //             midIndex = Math.floor( (index - midIndex) / 2 );
    //         }
    //         if (midIndex <= 0) {
    //             break;
    //         }
    //     }
    //     return index;
    // }
    /**
     * 快速排序
     * @param collects 需要排序的集合
     * @param key 如果是对象的话，需要按照key进行
     * @isBig 是否是从大到小排序
     * @returns 返回排序好的集合
     */
    SortUtils.quickSort = function (collects, key, isBig) {
        if (isBig === void 0) { isBig = true; }
        SortUtils.quickSortHandle(collects, 0, collects.length - 1, key);
        return collects;
    };
    /**
     * 快速排序的逻辑
     * @param collects 排序的集合
     * @param start 开始位置
     * @param end   结束位置
     * @param key   如果是对象进行排序 需要用到的key obj[key] is number
     * @returns
     */
    SortUtils.quickSortHandle = function (collects, start, end, key, isBig) {
        if (isBig === void 0) { isBig = true; }
        if (start >= end) {
            return;
        }
        var isNeedKey = !!key; //是否需要根据key 进行排序
        var mindex = start; //Math.floor( (end - start)/2 );//取第一个值或者中间的值
        var midValue = isNeedKey ? collects[mindex][key] : collects[mindex];
        var midOrg = collects[mindex]; //中间的原始值
        var i = start;
        var j = end;
        while (i < j) {
            //找到右侧比基准值小的 索引 同时暂停右侧的查询，执行左侧的查询，找到比基准值大把当前j索引的值替换掉，防止数值重复
            var currValue = isNeedKey ? collects[j][key] : collects[j];
            if (isBig) {
                while (i < j && currValue < midValue) {
                    j--;
                    currValue = isNeedKey ? collects[j][key] : collects[j];
                }
            }
            else {
                while (i < j && currValue > midValue) {
                    j--;
                    currValue = isNeedKey ? collects[j][key] : collects[j];
                }
            }
            //把右侧的大的值赋给左侧
            if (i < j) {
                collects[i] = collects[j];
                i++;
            }
            currValue = isNeedKey ? collects[i][key] : collects[i];
            while (i < j && currValue < midValue) {
                i++;
                currValue = isNeedKey ? collects[i][key] : collects[i];
            }
            if (i < j) {
                collects[j] = collects[i];
                j--;
            }
        }
        collects[i] = midOrg;
        SortUtils.quickSortHandle(collects, start, i - 1, key);
        SortUtils.quickSortHandle(collects, i + 1, end, key);
    };
    /**
     * 快速排序
     * @param collects 需要排序的集合
     * @param key 如果是对象的话，需要按照key进行
     * @returns 返回排序好的集合
     */
    SortUtils.quickSortNode = function (collects, key) {
        SortUtils.quickSortHandle(collects, 0, collects.length - 1, key);
        return collects;
    };
    /**
     * 快速排序的逻辑
     * @param collects 排序的集合
     * @param start 开始位置
     * @param end   结束位置
     * @param key   如果是对象进行排序 需要用到的key obj[key] is number
     * @returns
     */
    SortUtils.quickSortNodeHandler = function (collects, start, end, key) {
        if (start >= end) {
            return;
        }
        var isNeedKey = !!key; //是否需要根据key 进行排序
        var mindex = start; //Math.floor( (end - start)/2 );//取第一个值或者中间的值
        var midValue = isNeedKey ? collects[mindex][key] : collects[mindex];
        var midOrg = collects[mindex]; //中间的原始值
        var i = start;
        var j = end;
        while (i < j) {
            //找到右侧比基准值小的 索引 同时暂停右侧的查询，执行左侧的查询，找到比基准值大把当前j索引的值替换掉，防止数值重复
            var currValue = isNeedKey ? collects[j][key] : collects[j];
            while (i < j && currValue > midValue) {
                j--;
                currValue = isNeedKey ? collects[j][key] : collects[j];
            }
            //把右侧的大的值赋给左侧
            if (i < j) {
                collects[i] = collects[j];
                i++;
            }
            currValue = isNeedKey ? collects[i][key] : collects[i];
            while (i < j && currValue < midValue) {
                i++;
                currValue = isNeedKey ? collects[i][key] : collects[i];
            }
            if (i < j) {
                collects[j] = collects[i];
                j--;
            }
        }
        collects[i] = midOrg;
        SortUtils.quickSortHandle(collects, start, i - 1, key);
        SortUtils.quickSortHandle(collects, i + 1, end, key);
    };
    return SortUtils;
}());
exports.default = SortUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL1NvcnRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQVE7QUFDUjtJQUFBO0lBc1FBLENBQUM7SUFwUUc7Ozs7O09BS0c7SUFDSSxvQkFBVSxHQUFqQixVQUFxQixRQUFrQixFQUFFLEdBQVk7UUFDakQsSUFBSSxTQUFTLEdBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQyxDQUFBLHFDQUFxQztnQkFDOUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUEsVUFBVTtnQkFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUEsV0FBVztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsQyxJQUFJLFNBQVMsRUFBRSxFQUFDLFdBQVc7d0JBQ3ZCLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMvQjt5QkFBTTt3QkFDSCxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDMUI7b0JBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO3dCQUNk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QUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFDdEMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsMkRBQTJEO1lBQzNELElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxRQUFRLEVBQUU7Z0JBQ2xDLENBQUMsRUFBRSxDQUFDO2dCQUNKLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsYUFBYTtZQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUUsQ0FBQzthQUNQO1lBRUQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxRQUFRLEVBQUU7Z0JBQ2xDLENBQUMsRUFBRSxDQUFDO2dCQUNKLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsRUFBRSxDQUFDO2FBQ1A7U0FFSjtRQUNELFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDckIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0F0UUEsQUFzUUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5o6S5bqP566X5rOV6ZuG5ZCIXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0VXRpbHMge1xuXG4gICAgLyoqXG4gICAgICog5YaS5rOh5o6S5bqP566X5rOVXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIFxuICAgICAqIEBwYXJhbSBrZXkg5aaC5p6c5piv5a+56LGh5YiZ5L2/55Soa2V55YC86L+b6KGM5q+U6L6DXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGJ1YmJsZVNvcnQ8VD4oY29sbGVjdHM6IEFycmF5PFQ+LCBrZXk/OiBzdHJpbmcpOiBBcnJheTxUPiB7XG4gICAgICAgIGxldCBpc05lZWRLZXk6IGJvb2xlYW4gPSAhIWtleTtcbiAgICAgICAgaWYgKGNvbGxlY3RzKSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gY29sbGVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZmxhZzogYm9vbGVhbiA9IHRydWU7Ly/kvJjljJYg5aaC5p6c5LiA6L2u5qOA5p+l5LiL5p2l5Y+R546w5rKh5pyJ5Y+v5Lqk5o2i55qEIOivtOaYjuW3sue7j+aYr+acieW6j+eahO+8jOS4jeeUqOWGjeajgOafpeS6hlxuICAgICAgICAgICAgICAgIGxldCBmcmlzdCA9IG51bGw7Ly/liY3kuIDkuKrpnIDopoHmr5TovoPlgLxcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IG51bGw7Ly/lkI7kuIDkuKrpnIDopoHmr5TovoPnmoTlgLxcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbiAtIGkgLSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmVlZEtleSkgey8v5piv5ZCm5piv5a+56LGh6ZyA6KaB5o6S5bqPXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmlzdCA9IGNvbGxlY3RzW2pdW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY29sbGVjdHNbaiArIDFdW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmlzdCA9IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGNvbGxlY3RzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmlzdCA8IG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6L+b6KGM5Lqk5o2iXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNvbGxlY3RzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RzW2ogKyAxXSA9IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdHNbal0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkgKyBcIuaJp+ihjOS6huWkmuWwkeasoVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5biM5bCU5o6S5bqPXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIFxuICAgICAqIEBwYXJhbSBrZXkgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIHNoZWxsU29ydDxUPihjb2xsZWN0czogQXJyYXk8VD4sIGtleT86IHN0cmluZyk6IEFycmF5PFQ+IHtcbiAgICAgICAgbGV0IGxlbiA9IGNvbGxlY3RzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gY29sbGVjdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zZXJ0QXJyKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5o+S5YWl5o6S5bqP566X5rOVXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIOmcgOimgeaOkuW6j+eahOmbhuWQiFxuICAgICAqIEBwYXJhbSBrZXkg5aaC5p6c5piv5a+56LGh6ZyA6KaB5o6S5bqP77yM6ZyA6KaB5o+Q5L6b5LiA5Liqa2V5IOadpeiOt+WPlm51bWJlcuexu+Wei+eahOWAvOi/m+ihjOaOkuW6j1xuICAgICAqIEByZXR1cm5zIOi/lOWbnuS4gOS4quaOkuW6j+WlveeahOaVsOe7hFxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnRTb3J0PFQ+KGNvbGxlY3RzOiBBcnJheTxUPiwga2V5Pzogc3RyaW5nKTogQXJyYXk8VD4ge1xuICAgICAgICBpZiAoIWNvbGxlY3RzIHx8IGNvbGxlY3RzLmxlbmd0aCA8IDIpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3RzO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc05lZWRLZXk6IGJvb2xlYW4gPSAhIWtleTtcbiAgICAgICAgbGV0IHByZUVsZW1lbnQgPSBudWxsOy8v5YmN5LiA5Liq5YWD57SgXG4gICAgICAgIGxldCBuZXh0RWxlbWVudCA9IG51bGw7Ly/lkI7kuIDkuKrlhYPntKBcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgY29sbGVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBwcmVFbGVtZW50ID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaW5kZXggLSAxXVtrZXldIDogY29sbGVjdHNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIG5leHRFbGVtZW50ID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaW5kZXhdW2tleV0gOiBjb2xsZWN0c1tpbmRleF07XG4gICAgICAgICAgICBpZiAocHJlRWxlbWVudCA+IG5leHRFbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAvL1RPRE8g5LyY5YyW5oCd6ICDXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAvL+aOkuW6j+S5i+WJjeeahOWFg+e0oFxuICAgICAgICAgICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpXVtrZXldIDogY29sbGVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNQcmUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpIC0gMV1ba2V5XSA6IGNvbGxlY3RzW2kgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNWYWx1ZSA8IGNQcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gY29sbGVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0c1tpXSA9IGNvbGxlY3RzW2kgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RzW2kgLSAxXSA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsZWN0cztcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiDpgJrov4fkuozliIbms5Xmn6Xmib4g5Zug5Li65a+55LqO5b2T5YmN5YWD57Sg5YmN6L656YO95piv5bey57uP5o6S5bqP5aW955qE77yM6YCa6L+H5LqM5YiG5rOV5YeP5bCR5p+l55yL5qyh5pWwXG4gICAgLy8gICogQHBhcmFtIGNvbGxlY3RzIFxuICAgIC8vICAqIEBwYXJhbSBrZXkgXG4gICAgLy8gICogQHBhcmFtIGluZGV4ICAgY29sbGVjdHMg5Lit5bey57uP5qOA5p+l5Yiw55qE57Si5byVXG4gICAgLy8gICogQHJldHVybnMgXG4gICAgLy8gICovXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgaW5zZXJ0RmluZEJpbmFyeTxUPihjb2xsZWN0czpBcnJheTxUPixrZXk6c3RyaW5nLGluZGV4Om51bWJlcik6bnVtYmVyXG4gICAgLy8ge1xuICAgIC8vICAgICBsZXQgaXNOZWVkS2V5OmJvb2xlYW4gPSAhIWtleTtcblxuICAgIC8vICAgICBsZXQgbWlkSW5kZXg6bnVtYmVyID0gTWF0aC5mbG9vciggaW5kZXgvMiApO1xuICAgIC8vICAgICBsZXQgbmVlZFZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaW5kZXhdW2tleV0gOiBjb2xsZWN0c1tpbmRleF07Ly/pnIDopoHmr5TovoPnmoTlvZPliY3lgLxcbiAgICAvLyAgICAgd2hpbGUodHJ1ZSlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgY29uc3QgbVZhbHVlID0gIGlzTmVlZEtleSA/IGNvbGxlY3RzW21pZEluZGV4XVtrZXldIDogY29sbGVjdHNbbWlkSW5kZXhdO1xuICAgIC8vICAgICAgICAgaWYgKG5lZWRWYWx1ZSA+IG1WYWx1ZSkge1xuICAgIC8vICAgICAgICAgICAgIG1pZEluZGV4ID0gTWF0aC5mbG9vciggbWlkSW5kZXggLyAyICk7XG4gICAgLy8gICAgICAgICB9IGVsc2UgaWYgKG1WYWx1ZSA9PSBuZWVkVmFsdWUpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gbWlkSW5kZXg7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIG1pZEluZGV4ID0gTWF0aC5mbG9vciggKGluZGV4IC0gbWlkSW5kZXgpIC8gMiApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKG1pZEluZGV4IDw9IDApIHtcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHJldHVybiBpbmRleDtcbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiDlv6vpgJ/mjpLluo9cbiAgICAgKiBAcGFyYW0gY29sbGVjdHMg6ZyA6KaB5o6S5bqP55qE6ZuG5ZCIXG4gICAgICogQHBhcmFtIGtleSDlpoLmnpzmmK/lr7nosaHnmoTor53vvIzpnIDopoHmjInnhadrZXnov5vooYxcbiAgICAgKiBAaXNCaWcg5piv5ZCm5piv5LuO5aSn5Yiw5bCP5o6S5bqPXG4gICAgICogQHJldHVybnMg6L+U5Zue5o6S5bqP5aW955qE6ZuG5ZCIXG4gICAgICovXG4gICAgc3RhdGljIHF1aWNrU29ydDxUPihjb2xsZWN0czogQXJyYXk8VD4sIGtleT86IHN0cmluZywgaXNCaWcgPSB0cnVlKTogQXJyYXk8VD4ge1xuICAgICAgICBTb3J0VXRpbHMucXVpY2tTb3J0SGFuZGxlKGNvbGxlY3RzLCAwLCBjb2xsZWN0cy5sZW5ndGggLSAxLCBrZXkpO1xuICAgICAgICByZXR1cm4gY29sbGVjdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b+r6YCf5o6S5bqP55qE6YC76L6RXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIOaOkuW6j+eahOmbhuWQiFxuICAgICAqIEBwYXJhbSBzdGFydCDlvIDlp4vkvY3nva5cbiAgICAgKiBAcGFyYW0gZW5kICAg57uT5p2f5L2N572uXG4gICAgICogQHBhcmFtIGtleSAgIOWmguaenOaYr+Wvueixoei/m+ihjOaOkuW6jyDpnIDopoHnlKjliLDnmoRrZXkgb2JqW2tleV0gaXMgbnVtYmVyXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcXVpY2tTb3J0SGFuZGxlPFQ+KGNvbGxlY3RzOiBBcnJheTxUPiwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGtleT86IHN0cmluZywgaXNCaWcgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc05lZWRLZXk6IGJvb2xlYW4gPSAhIWtleTsvL+aYr+WQpumcgOimgeagueaNrmtleSDov5vooYzmjpLluo9cbiAgICAgICAgbGV0IG1pbmRleDogbnVtYmVyID0gc3RhcnQ7Ly9NYXRoLmZsb29yKCAoZW5kIC0gc3RhcnQpLzIgKTsvL+WPluesrOS4gOS4quWAvOaIluiAheS4remXtOeahOWAvFxuICAgICAgICBsZXQgbWlkVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1ttaW5kZXhdW2tleV0gOiBjb2xsZWN0c1ttaW5kZXhdO1xuICAgICAgICBsZXQgbWlkT3JnID0gY29sbGVjdHNbbWluZGV4XTsvL+S4remXtOeahOWOn+Wni+WAvFxuICAgICAgICBsZXQgaSA9IHN0YXJ0O1xuICAgICAgICBsZXQgaiA9IGVuZDtcblxuICAgICAgICB3aGlsZSAoaSA8IGopIHtcbiAgICAgICAgICAgIC8v5om+5Yiw5Y+z5L6n5q+U5Z+65YeG5YC85bCP55qEIOe0ouW8lSDlkIzml7bmmoLlgZzlj7PkvqfnmoTmn6Xor6LvvIzmiafooYzlt6bkvqfnmoTmn6Xor6LvvIzmib7liLDmr5Tln7rlh4blgLzlpKfmiorlvZPliY1q57Si5byV55qE5YC85pu/5o2i5o6J77yM6Ziy5q2i5pWw5YC86YeN5aSNXG4gICAgICAgICAgICBsZXQgY3VyclZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbal1ba2V5XSA6IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgaWYgKGlzQmlnKSB7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IGogJiYgY3VyclZhbHVlIDwgbWlkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgICAgICAgICBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tqXVtrZXldIDogY29sbGVjdHNbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaiAmJiBjdXJyVmFsdWUgPiBtaWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgICAgIGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2pdW2tleV0gOiBjb2xsZWN0c1tqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5oqK5Y+z5L6n55qE5aSn55qE5YC86LWL57uZ5bem5L6nXG4gICAgICAgICAgICBpZiAoaSA8IGopIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0c1tpXSA9IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VyclZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaV1ba2V5XSA6IGNvbGxlY3RzW2ldO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBqICYmIGN1cnJWYWx1ZSA8IG1pZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2ldW2tleV0gOiBjb2xsZWN0c1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkgPCBqKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdHNbal0gPSBjb2xsZWN0c1tpXTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBjb2xsZWN0c1tpXSA9IG1pZE9yZztcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgc3RhcnQsIGkgLSAxLCBrZXkpO1xuICAgICAgICBTb3J0VXRpbHMucXVpY2tTb3J0SGFuZGxlKGNvbGxlY3RzLCBpICsgMSwgZW5kLCBrZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlv6vpgJ/mjpLluo9cbiAgICAgKiBAcGFyYW0gY29sbGVjdHMg6ZyA6KaB5o6S5bqP55qE6ZuG5ZCIXG4gICAgICogQHBhcmFtIGtleSDlpoLmnpzmmK/lr7nosaHnmoTor53vvIzpnIDopoHmjInnhadrZXnov5vooYxcbiAgICAgKiBAcmV0dXJucyDov5Tlm57mjpLluo/lpb3nmoTpm4blkIhcbiAgICAgKi9cbiAgICBzdGF0aWMgcXVpY2tTb3J0Tm9kZTxUPihjb2xsZWN0czogQXJyYXk8VD4sIGtleT86IHN0cmluZyk6IEFycmF5PFQ+IHtcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgMCwgY29sbGVjdHMubGVuZ3RoIC0gMSwga2V5KTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3RzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlv6vpgJ/mjpLluo/nmoTpgLvovpFcbiAgICAgKiBAcGFyYW0gY29sbGVjdHMg5o6S5bqP55qE6ZuG5ZCIXG4gICAgICogQHBhcmFtIHN0YXJ0IOW8gOWni+S9jee9rlxuICAgICAqIEBwYXJhbSBlbmQgICDnu5PmnZ/kvY3nva5cbiAgICAgKiBAcGFyYW0ga2V5ICAg5aaC5p6c5piv5a+56LGh6L+b6KGM5o6S5bqPIOmcgOimgeeUqOWIsOeahGtleSBvYmpba2V5XSBpcyBudW1iZXJcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBxdWlja1NvcnROb2RlSGFuZGxlcjxUPihjb2xsZWN0czogQXJyYXk8VD4sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBrZXk/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzTmVlZEtleTogYm9vbGVhbiA9ICEha2V5Oy8v5piv5ZCm6ZyA6KaB5qC55o2ua2V5IOi/m+ihjOaOkuW6j1xuICAgICAgICBsZXQgbWluZGV4OiBudW1iZXIgPSBzdGFydDsvL01hdGguZmxvb3IoIChlbmQgLSBzdGFydCkvMiApOy8v5Y+W56ys5LiA5Liq5YC85oiW6ICF5Lit6Ze055qE5YC8XG4gICAgICAgIGxldCBtaWRWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW21pbmRleF1ba2V5XSA6IGNvbGxlY3RzW21pbmRleF07XG4gICAgICAgIGxldCBtaWRPcmcgPSBjb2xsZWN0c1ttaW5kZXhdOy8v5Lit6Ze055qE5Y6f5aeL5YC8XG4gICAgICAgIGxldCBpID0gc3RhcnQ7XG4gICAgICAgIGxldCBqID0gZW5kO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgLy/mib7liLDlj7Pkvqfmr5Tln7rlh4blgLzlsI/nmoQg57Si5byVIOWQjOaXtuaaguWBnOWPs+S+p+eahOafpeivou+8jOaJp+ihjOW3puS+p+eahOafpeivou+8jOaJvuWIsOavlOWfuuWHhuWAvOWkp+aKiuW9k+WJjWrntKLlvJXnmoTlgLzmm7/mjaLmjonvvIzpmLLmraLmlbDlgLzph43lpI1cbiAgICAgICAgICAgIGxldCBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tqXVtrZXldIDogY29sbGVjdHNbal07XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGogJiYgY3VyclZhbHVlID4gbWlkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgY3VyclZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbal1ba2V5XSA6IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL+aKiuWPs+S+p+eahOWkp+eahOWAvOi1i+e7meW3puS+p1xuICAgICAgICAgICAgaWYgKGkgPCBqKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdHNbaV0gPSBjb2xsZWN0c1tqXTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2ldW2tleV0gOiBjb2xsZWN0c1tpXTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgaiAmJiBjdXJyVmFsdWUgPCBtaWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpXVtrZXldIDogY29sbGVjdHNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpIDwgaikge1xuICAgICAgICAgICAgICAgIGNvbGxlY3RzW2pdID0gY29sbGVjdHNbaV07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgY29sbGVjdHNbaV0gPSBtaWRPcmc7XG4gICAgICAgIFNvcnRVdGlscy5xdWlja1NvcnRIYW5kbGUoY29sbGVjdHMsIHN0YXJ0LCBpIC0gMSwga2V5KTtcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgaSArIDEsIGVuZCwga2V5KTtcbiAgICB9XG5cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/BasePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51410HUvXBLMacPUvZBl8j5', 'BasePanel');
// src/framework/ui/BasePanel.ts

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
var ComponentHelper_1 = require("../tools/ComponentHelper");
var Handler_1 = require("../base/Handler");
var LoaderManager_1 = require("../manager/LoaderManager");
var UIMananger_1 = require("../manager/UIMananger");
var UIState_1 = require("./UIState");
var EventDispath_1 = require("../message/EventDispath");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BasePanel = /** @class */ (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiName = "basePanel";
        //点击面板其他位置是否关不面板 需要在prefab中设置node的size大小
        _this.maskURL = "mbg"; //资源放在common模块中
        _this._ismask = true;
        _this.effect = null;
        _this.clickOtherClose = false;
        return _this;
    }
    BasePanel.prototype.init = function (clickClose) {
        if (this._ismask) {
            this._initModule();
        }
        this.clickOtherClose = clickClose;
    };
    BasePanel.prototype.setUIName = function (name) {
        this.uiName = name;
    };
    BasePanel.prototype.setModuleName = function (mname) {
        this.moduleName = mname;
    };
    BasePanel.prototype.setClickClose = function (value) {
        this.clickOtherClose = value;
    };
    BasePanel.prototype.setEffect = function (value) {
        this.effect = value;
    };
    /**
     * 设置ui状态
     */
    BasePanel.prototype.setUIState = function (state) {
        this.uiState = state;
        this.uiState.ui = this;
    };
    BasePanel.prototype.upDateState = function (state) {
        if (!!this.uiState) {
            this.uiState.openState = state;
            if (state === UIState_1.StateType.close) {
                this.uiState.reset();
            }
        }
    };
    //打开面板前 先执行的函数
    BasePanel.prototype._show_ = function (args) {
        this.inData = args;
        this.upDateState(UIState_1.StateType.opening);
    };
    /**
     * 是否能立即关闭，主要用于有些面板不能立马关闭，需要等条件完成才能，例如转盘
     */
    BasePanel.prototype.canHideNow = function () {
        return true;
    };
    BasePanel.prototype.startHide = function () {
    };
    BasePanel.prototype.startShow = function () {
    };
    BasePanel.prototype._hide_ = function () {
        this._hideModeule();
        this.upDateState(UIState_1.StateType.close);
        this.node.destroy();
    };
    //关时清理
    BasePanel.prototype._closeClear = function () {
    };
    //销毁时清理
    BasePanel.prototype._destroyClear = function () {
    };
    //设置ui的父容器
    BasePanel.prototype.setUIParent = function (parent) {
        if (cc.isValid(parent)) {
            this.node.parent = parent;
        }
    };
    //打开时调用
    BasePanel.prototype.on_Show = function (args) {
        this._showModuleAction();
        this.upDateState(UIState_1.StateType.open);
    };
    BasePanel.prototype.on_Hide = function () {
        this._hideModeule();
    };
    BasePanel.prototype.close = function () {
        EventDispath_1.default.removeEventListeners(this);
        UIMananger_1.default.hidePanel(this.uiName);
    };
    //初始化模态
    BasePanel.prototype._initModule = function () {
        if (!cc.isValid(this.modelUI)) {
            this.modelUI = ComponentHelper_1.default.createSprite(null, null);
            LoaderManager_1.default.loaderSpriteFrame(this.maskURL, Handler_1.default.create(this._moduleComplete, this), 'commonRes');
            this.modelUI.addComponent(cc.BlockInputEvents);
            this.modelUI.opacity = 0;
            this.modelUI.parent = this.node;
            this.modelUI.setSiblingIndex(0);
        }
    };
    BasePanel.prototype._moduleComplete = function (res) {
        var sprite = ComponentHelper_1.default.spriteFrame(this.modelUI, res);
        sprite.trim = false;
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        var msize = cc.view.getVisibleSize();
        this.modelUI.width = msize.width;
        this.modelUI.height = msize.height;
        this._clickClose();
    };
    //模态效果
    BasePanel.prototype._showModuleAction = function () {
        if (cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
            this.modelUI.runAction(cc.fadeTo(0.2, 150));
        }
    };
    BasePanel.prototype._hideModeule = function () {
        if (cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
        }
    };
    //点击空白区域关闭
    BasePanel.prototype._clickClose = function () {
        var _this = this;
        this.modelUI.on('touchend', function (event) {
            event.stopPropagation();
            if (_this.clickOtherClose) {
                var clickPos = event.getLocation();
                var visibleSize = cc.view.getVisibleSize();
                clickPos.x = clickPos.x - visibleSize.width / 2;
                clickPos.y = clickPos.y - visibleSize.height / 2;
                var rect = _this.node.getBoundingBox();
                if (!rect.contains(clickPos)) {
                    _this.close();
                }
            }
        });
    };
    BasePanel = __decorate([
        ccclass
    ], BasePanel);
    return BasePanel;
}(cc.Component));
exports.default = BasePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQsMkNBQXNDO0FBQ3RDLDBEQUFxRDtBQUVyRCxvREFBK0M7QUFDL0MscUNBQStDO0FBQy9DLHdEQUFtRDtBQUU3QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXdLQztRQXRLVSxZQUFNLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLHdDQUF3QztRQUNqQyxhQUFPLEdBQVcsS0FBSyxDQUFDLENBQUEsZUFBZTtRQUN0QyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFlBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIscUJBQWUsR0FBWSxLQUFLLENBQUM7O0lBaUs1QyxDQUFDO0lBNUpHLHdCQUFJLEdBQUosVUFBSyxVQUFVO1FBQ1gsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVELDZCQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJ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TyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBQzlCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixJQUFJLEtBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3RCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDM0MsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2pELElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUMxQixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2hCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF0S2dCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3SzdCO0lBQUQsZ0JBQUM7Q0F4S0QsQUF3S0MsQ0F4S3NDLEVBQUUsQ0FBQyxTQUFTLEdBd0tsRDtrQkF4S29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50SGVscGVyIGZyb20gXCIuLi90b29scy9Db21wb25lbnRIZWxwZXJcIjtcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi9iYXNlL0hhbmRsZXJcIjtcbmltcG9ydCBMb2FkZXJNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0xvYWRlck1hbmFnZXJcIjtcbmltcG9ydCBHYW1lUG9vbE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvR2FtZVBvb2xNYW5hZ2VyXCI7XG5pbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vbWFuYWdlci9VSU1hbmFuZ2VyXCI7XG5pbXBvcnQgeyBVSVN0YXRlLCBTdGF0ZVR5cGUgfSBmcm9tIFwiLi9VSVN0YXRlXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRoIGZyb20gXCIuLi9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyB1aU5hbWU6IHN0cmluZyA9IFwiYmFzZVBhbmVsXCI7XG4gICAgLy/ngrnlh7vpnaLmnb/lhbbku5bkvY3nva7mmK/lkKblhbPkuI3pnaLmnb8g6ZyA6KaB5ZyocHJlZmFi5Lit6K6+572ubm9kZeeahHNpemXlpKflsI9cbiAgICBwdWJsaWMgbWFza1VSTDogc3RyaW5nID0gXCJtYmdcIjsvL+i1hOa6kOaUvuWcqGNvbW1vbuaooeWdl+S4rVxuICAgIHByaXZhdGUgX2lzbWFzazogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGVmZmVjdDogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgY2xpY2tPdGhlckNsb3NlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIG1vZHVsZU5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgaW5EYXRhOiBhbnk7XG4gICAgcHJpdmF0ZSBtb2RlbFVJOiBjYy5Ob2RlOy8v6IOM5pmvXG4gICAgcHJpdmF0ZSB1aVN0YXRlOiBVSVN0YXRlO1xuICAgIGluaXQoY2xpY2tDbG9zZSkge1xuICAgICAgICBpZiAodGhpcy5faXNtYXNrKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0TW9kdWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGlja090aGVyQ2xvc2UgPSBjbGlja0Nsb3NlO1xuICAgIH1cblxuICAgIHNldFVJTmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMudWlOYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBzZXRNb2R1bGVOYW1lKG1uYW1lKSB7XG4gICAgICAgIHRoaXMubW9kdWxlTmFtZSA9IG1uYW1lO1xuICAgIH1cblxuICAgIHNldENsaWNrQ2xvc2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jbGlja090aGVyQ2xvc2UgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRFZmZlY3QodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lZmZlY3QgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva51aeeKtuaAgVxuICAgICAqL1xuICAgIHNldFVJU3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy51aVN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMudWlTdGF0ZS51aSA9IHRoaXM7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHVwRGF0ZVN0YXRlKHN0YXRlOiBTdGF0ZVR5cGUpIHtcbiAgICAgICAgaWYgKCEhdGhpcy51aVN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVpU3RhdGUub3BlblN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IFN0YXRlVHlwZS5jbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlTdGF0ZS5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/miZPlvIDpnaLmnb/liY0g5YWI5omn6KGM55qE5Ye95pWwXG4gICAgX3Nob3dfKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5pbkRhdGEgPSBhcmdzO1xuICAgICAgICB0aGlzLnVwRGF0ZVN0YXRlKFN0YXRlVHlwZS5vcGVuaW5nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbog73nq4vljbPlhbPpl63vvIzkuLvopoHnlKjkuo7mnInkupvpnaLmnb/kuI3og73nq4vpqazlhbPpl63vvIzpnIDopoHnrYnmnaHku7blrozmiJDmiY3og73vvIzkvovlpoLovaznm5hcbiAgICAgKi9cbiAgICBjYW5IaWRlTm93KCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydEhpZGUoKSB7XG5cbiAgICB9XG5cbiAgICBzdGFydFNob3coKSB7XG5cbiAgICB9XG5cbiAgICBfaGlkZV8oKSB7XG4gICAgICAgIHRoaXMuX2hpZGVNb2RldWxlKCk7XG4gICAgICAgIHRoaXMudXBEYXRlU3RhdGUoU3RhdGVUeXBlLmNsb3NlKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvL+WFs+aXtua4heeQhlxuICAgIHByaXZhdGUgX2Nsb3NlQ2xlYXIoKSB7XG5cbiAgICB9XG5cbiAgICAvL+mUgOavgeaXtua4heeQhlxuICAgIHByaXZhdGUgX2Rlc3Ryb3lDbGVhcigpIHtcblxuICAgIH1cblxuICAgIC8v6K6+572udWnnmoTniLblrrnlmahcbiAgICBzZXRVSVBhcmVudChwYXJlbnQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQocGFyZW50KSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5omT5byA5pe26LCD55SoXG4gICAgb25fU2hvdyhhcmdzKSB7XG4gICAgICAgIHRoaXMuX3Nob3dNb2R1bGVBY3Rpb24oKTtcbiAgICAgICAgdGhpcy51cERhdGVTdGF0ZShTdGF0ZVR5cGUub3Blbik7XG4gICAgfVxuXG4gICAgb25fSGlkZSgpIHtcbiAgICAgICAgdGhpcy5faGlkZU1vZGV1bGUoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgRXZlbnREaXNwYXRoLnJlbW92ZUV2ZW50TGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICBVSU1hbmFuZ2VyLmhpZGVQYW5lbCh0aGlzLnVpTmFtZSk7XG4gICAgfVxuXG4gICAgLy/liJ3lp4vljJbmqKHmgIFcbiAgICBwcml2YXRlIF9pbml0TW9kdWxlKCkge1xuICAgICAgICBpZiAoIWNjLmlzVmFsaWQodGhpcy5tb2RlbFVJKSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJID0gQ29tcG9uZW50SGVscGVyLmNyZWF0ZVNwcml0ZShudWxsLCBudWxsKTtcbiAgICAgICAgICAgIExvYWRlck1hbmFnZXIubG9hZGVyU3ByaXRlRnJhbWUodGhpcy5tYXNrVVJMLCBIYW5kbGVyLmNyZWF0ZSh0aGlzLl9tb2R1bGVDb21wbGV0ZSwgdGhpcyksICdjb21tb25SZXMnKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbW9kdWxlQ29tcGxldGUocmVzKSB7XG4gICAgICAgIGxldCBzcHJpdGU6IGNjLlNwcml0ZSA9IENvbXBvbmVudEhlbHBlci5zcHJpdGVGcmFtZSh0aGlzLm1vZGVsVUksIHJlcyk7XG4gICAgICAgIHNwcml0ZS50cmltID0gZmFsc2U7XG4gICAgICAgIHNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgIGxldCBtc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgdGhpcy5tb2RlbFVJLndpZHRoID0gbXNpemUud2lkdGg7XG4gICAgICAgIHRoaXMubW9kZWxVSS5oZWlnaHQgPSBtc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NsaWNrQ2xvc2UoKTtcbiAgICB9XG5cbiAgICAvL+aooeaAgeaViOaenFxuICAgIHByaXZhdGUgX3Nob3dNb2R1bGVBY3Rpb24oKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubW9kZWxVSSkpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFVJLnJ1bkFjdGlvbihjYy5mYWRlVG8oMC4yLCAxNTApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZGVNb2RldWxlKCkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm1vZGVsVUkpKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsVUkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxVSS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v54K55Ye756m655m95Yy65Z+f5YWz6ZetXG4gICAgX2NsaWNrQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMubW9kZWxVSS5vbigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tPdGhlckNsb3NlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgICAgICBsZXQgdmlzaWJsZVNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgICAgICAgICAgY2xpY2tQb3MueCA9IGNsaWNrUG9zLnggLSB2aXNpYmxlU2l6ZS53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgY2xpY2tQb3MueSA9IGNsaWNrUG9zLnkgLSB2aXNpYmxlU2l6ZS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIGxldCByZWN0ID0gdGhpcy5ub2RlLmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWN0LmNvbnRhaW5zKGNsaWNrUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/tools/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d997NXvhNDTbMpB4rEU7g2', 'Utils');
// src/framework/tools/Utils.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // cdegress:Num Math.PI/180,
    // cangle:180/Math.PI,
    Utils.emoji2Str = function (str) {
        return unescape(escape(str).replace(/\%uD.{3}/g, ''));
    };
    Utils.isEmojiCharacter = function (substring) {
        for (var i = 0; i < substring.length; i++) {
            var hs = substring.charCodeAt(i);
            var ls = void 0;
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    ls = substring.charCodeAt(i + 1);
                    var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            }
            else if (substring.length > 1) {
                ls = substring.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            }
            else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                }
                else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                }
                else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                }
                else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                }
                else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                    || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                    || hs == 0x2b50) {
                    return true;
                }
            }
        }
    };
    //是否字符串有空格
    Utils.isStrSpace = function (str) {
        return str.indexOf(' ') === -1;
    };
    //角度转弧度
    Utils.angleToPI = function (degrees) {
        return degrees * cc.macro.RAD;
    };
    Utils.piToAngle = function (radians) {
        return radians * cc.macro.DEG;
    };
    //获得两点之间的角度
    Utils.getVecAngle = function (currVec, nextVec) {
        // let p1 = (180 / Math.PI);
        var vec = cc.v2(nextVec).sub(cc.v2(currVec));
        var a1 = -Math.atan2(vec.y, vec.x);
        var r1 = a1 * cc.macro.DEG;
        return r1;
    };
    //把一个节点下的坐标转成全局坐标
    Utils.convertNodeToWorldSpace = function (node, npos) {
        if (cc.isValid(node)) {
            return node.convertToWorldSpaceAR(npos);
        }
        return cc.v2();
    };
    //把一个节点下的坐标转成另一个节点的坐标
    Utils.convertNodeToNodeSpace = function (node, targetParent) {
        if (cc.isValid(node)) {
            if (!!node.parent) {
                var wpos = node.parent.convertToWorldSpaceAR(node.getPosition());
                if (cc.isValid(targetParent)) {
                    return targetParent.convertToNodeSpaceAR(wpos);
                }
            }
        }
        cc.log('坐标转换有问题');
        return cc.v2(0, 0);
    };
    //把全局坐标转成另一个节点的坐标
    Utils.convertWorldToNodeSpace = function (node, wpos, isParent) {
        if (cc.isValid(node)) {
            if (!!isParent && node.parent) {
                return node.parent.convertToNodeSpaceAR(wpos);
            }
            return node.convertToNodeSpaceAR(wpos);
        }
        return cc.v2(0, 0);
    };
    /**
     * Function name isPhoneNumer
     * @param phoneNum 电话号码
     * 判断传入的数字是否符合手机号码的格式
     */
    Utils.isPhonenumber = function (phoneNum) {
        if (!(/^1[34578]\d{9}$/.test(phoneNum))) {
            return false;
        }
        return true;
    };
    /**
    * Function name getShortName
    * @param name 玩家昵称
    * 玩家中文昵称最多只显示5个汉字，超出则在后面加“...” 一个中文2个字符
    */
    Utils.getShortName = function (name, maxChar) {
        if (maxChar === void 0) { maxChar = 10; }
        if (!name) {
            return "";
        }
        var strlen = 0;
        var s = "";
        for (var i = 0; i < name.length; i++) {
            if (name.charCodeAt(i) > 128) {
                strlen += 2;
            }
            else {
                strlen++;
            }
            s += name.charAt(i);
            if (strlen >= maxChar) {
                return s + "...";
            }
        }
        return s;
    };
    /**
     * 计算两点之间的中点,
     * coefficient 距离系数
     */
    Utils.calculationMidPoint = function (begianPos, endPos, coefficient, offsetY) {
        if (coefficient === void 0) { coefficient = 0.5; }
        if (offsetY === void 0) { offsetY = 300; }
        var newPos = begianPos;
        var subx = 0;
        var suby = 0;
        if (begianPos.x <= endPos.x && begianPos.y <= endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        else if (begianPos.x > endPos.x && begianPos.y < endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        else if (begianPos.x > endPos.x && begianPos.y > endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        else if (begianPos.x < endPos.x && begianPos.y > endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        return newPos;
    };
    //生成范围内的随机数
    Utils.randSectionNum = function (minnum, maxnum) {
        return Math.floor(minnum + Math.random() * (maxnum - minnum));
    };
    //获得数组内的随机值
    Utils.getRandomByArr = function (arr) {
        var index = this.randSectionNum(0, arr.length);
        return arr[index];
    };
    //生成区间内的数组
    Utils.createArr = function (startIndex, endIndex) {
        var arr = [];
        for (var index = startIndex; index < endIndex; index++) {
            arr.push(index);
        }
        return arr;
    };
    /**
    * 从指定数组随机出几个值并组成新数组(返回值为原元素类型)
    * @param arr:源数组
    * @param num:要几个随机元素
    */
    Utils.randomNewArr = function (arr, num) {
        var arrOld = new Array();
        arrOld = __spreadArrays(arr);
        if (arrOld.length <= num) {
            return arrOld;
        }
        var arrNew = new Array();
        for (var i = 0; i < num; i++) {
            var random = this.getRandomNum(0, arrOld.length - 1); //产生随机数用作下标 
            arrNew.push(arrOld[random]);
            arrOld.splice(random, 1);
        }
        return arrNew;
    };
    /**
     * 获取范围内随机整数(包含最大值)
     * @param min 最小值
     * @param max 最大值
     */
    Utils.getRandomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Utils.crossMul = function (v1, v2) {
        return v1.x * v2.y - v1.y * v2.x;
    };
    Utils.quadratic = function (begin, c1, end, t) {
        var p = cc.v2();
        p.x = begin.x * (1 - t) * (1 - t) + c1.x * 2 * t * (1 - t) + end.x * t * t;
        p.y = begin.y * (1 - t) * (1 - t) + c1.y * 2 * t * (1 - t) + end.y * t * t;
        return p;
    };
    Utils.exchange = function (p1, p2) {
        var p = cc.v2();
        p.x = p2.x;
        p.y = p2.y;
        p2.x = p1.x;
        p2.y = p1.y;
        p1.x = p.x;
        p1.y = p.y;
    };
    //数组删除某一个索引的对象
    //index 开始索引
    //num 删除数量 默认为1个
    Utils.arrayRemove = function (arr, index, num) {
        if (num === void 0) { num = 1; }
        var i, len;
        for (i = index + num, len = arr.length; i < len; i++) {
            arr[i - num] = arr[i];
        }
        arr.length = len - num;
    };
    //通过数组中的值移除数组
    Utils.arrayRemoveValue = function (arr, value) {
        for (var index = 0; index < arr.length; index++) {
            var element = arr[index];
            if (element === value) {
                this.arrayRemove(arr, index);
                break;
            }
        }
    };
    //数组copy
    Utils.arrayCopy = function (sourceArr, destArr) {
        if (!!sourceArr && !!destArr) {
            for (var index = 0; index < sourceArr.length; index++) {
                var element = sourceArr[index];
                destArr.push(element);
            }
        }
    };
    //从数组中获得指定数量，同时改变原有的数组
    Utils.arrayGetSync = function (sourceArr, num) {
        if (num === void 0) { num = 1; }
        var resultArr = [];
        if (num > sourceArr.length) {
            this.arrayCopy(sourceArr, resultArr);
            sourceArr.length = 0;
        }
        else {
            var dIndex = 0;
            for (var index = 0; index < num; index++) {
                dIndex = Math.floor(Math.random() * sourceArr.length);
                resultArr.push(sourceArr[dIndex]);
                this.arrayRemove(sourceArr, dIndex, 1);
            }
        }
        return resultArr;
    };
    //平滑
    Utils.lerp = function (a, b, t) {
        return a + t * (b - a);
    };
    Utils.matchBgSize = function (bg) {
        if (cc.isValid(bg)) {
            bg.setScale(1, 1);
            var hvalue = bg.width;
            if (bg.width <= 0) {
                hvalue = cc.view.getDesignResolutionSize().width;
            }
            var size = cc.view.getVisibleSize();
            var hrate = size.width / hvalue;
            bg.setScale(hrate, hrate);
            return hrate;
        }
    };
    Utils.matchBgHSize = function (bg) {
        if (cc.isValid(bg)) {
            bg.setScale(1, 1);
            var hvalue = bg.height;
            if (bg.height <= 0) {
                hvalue = cc.view.getDesignResolutionSize().height;
            }
            var size = cc.view.getVisibleSize();
            var hrate = size.height / hvalue;
            bg.setScale(hrate, hrate);
            return hrate;
        }
    };
    /**
     * 把数字转成0101的数组
     * @param {*} num
     * @param {*} count
     */
    Utils.numberToBinary = function (num, count) {
        var arr = [];
        for (var index = 0; index < count; index++) {
            arr.push(num >> index & 1);
        }
        return arr;
    };
    /**
     *
     * @param {*} arr
     */
    Utils.binaryArrToNum = function (arr) {
        if (!!arr) {
            var str = '';
            for (var index = 0; index < arr.length; index++) {
                str += arr[index];
            }
            cc.log(str);
            return parseInt(str, 2);
        }
        return null;
    };
    /**
     * 是否是pc操作平台
     */
    Utils.isPcPlantFrom = function () {
        if (cc.sys.platform === cc.sys.ANDROID || cc.sys.platform === cc.sys.IPHONE) {
            return false;
        }
        return true;
    };
    /**
     * 获得唯一id
     * @param len
     * @param radix
     */
    Utils.genUuid = function (len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvvxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;
        if (len) {
            // Compact form
            for (i = 0; i < len; i++)
                uuid[i] = chars[0 | Math.random() * radix];
        }
        else {
            // rfc4122, version 4 form
            var r = void 0;
            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    };
    /** <p>判断线段是否在矩形内 </p>
         * 先看线段所在直线是否与矩形相交，
         * 如果不相交则返回false，
         * 如果相交，
         * 则看线段的两个点是否在矩形的同一边（即两点的x(y)坐标都比矩形的小x(y)坐标小，或者大）,
         * 若在同一边则返回false，
         * 否则就是相交的情况。
         * @param linePointX1 线段起始点x坐标
         * @param linePointY1 线段起始点y坐标
         * @param linePointX2 线段结束点x坐标
         * @param linePointY2 线段结束点y坐标
         * @param rectangleLeftTopX 矩形左上点x坐标
         * @param rectangleLeftTopY 矩形左上点y坐标
         * @param rectangleRightBottomX 矩形右下点x坐标
         * @param rectangleRightBottomY 矩形右下点y坐标
         * @return 是否相交
         */
    Utils.isLineIntersectRectangle = function (linePointX1, linePointY1, linePointX2, linePointY2, rectangleLeftTopX, rectangleLeftTopY, rectangleRightBottomX, rectangleRightBottomY) {
        var lineHeight = linePointY1 - linePointY2;
        var lineWidth = linePointX2 - linePointX1; // 计算叉乘 
        var c = linePointX1 * linePointY2 - linePointX2 * linePointY1;
        if ((lineHeight * rectangleLeftTopX + lineWidth * rectangleLeftTopY + c >= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleRightBottomY + c <= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleLeftTopY + c <= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleRightBottomY + c >= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleRightBottomY + c >= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleLeftTopY + c <= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleRightBottomY + c <= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleLeftTopY + c >= 0)) {
            if (rectangleLeftTopX > rectangleRightBottomX) {
                var temp = rectangleLeftTopX;
                rectangleLeftTopX = rectangleRightBottomX;
                rectangleRightBottomX = temp;
            }
            if (rectangleLeftTopY < rectangleRightBottomY) {
                var temp1 = rectangleLeftTopY;
                rectangleLeftTopY = rectangleRightBottomY;
                rectangleRightBottomY = temp1;
            }
            if ((linePointX1 < rectangleLeftTopX && linePointX2 < rectangleLeftTopX)
                || (linePointX1 > rectangleRightBottomX && linePointX2 > rectangleRightBottomX)
                || (linePointY1 > rectangleLeftTopY && linePointY2 > rectangleLeftTopY)
                || (linePointY1 < rectangleRightBottomY && linePointY2 < rectangleRightBottomY)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    /**
     * 由慢到快
     * @param start
     * @param end
     * @param easing
     * @returns
     */
    Utils.easeIn = function (start, end, easing) {
        if (easing === void 0) { easing = 0.1; }
        start = start - (start - end) * easing;
        return start;
    };
    /**
     * 由快到慢
     * @param start
     * @param end
     * @param easing
     * @returns
     */
    Utils.easeOut = function (start, end, easing) {
        if (easing === void 0) { easing = 0.1; }
        start = start + (end - start) * easing;
        return start;
    };
    /**
     * 当前数字是否时一个质数
     * 被1和自己整除
     * @param num
     */
    Utils.isPrime = function (num) {
        var squrtNum = Math.floor(Math.sqrt(num));
        for (var index = 2; index < num; index++) {
            if (num % index == 0) {
                return false;
            }
        }
        return true;
    };
    /**
     * 找到距离这个数字最近的质数（质数用于随机分布中）
     * @param num
     * @returns
     */
    Utils.getPrime = function (num) {
        while (!this.isPrime(num)) {
            num++;
        }
        return num;
    };
    Utils.create = function (C) {
        return new C();
    };
    /**
     * 适配节点到相对于舞台的的边角位置
     * @param node
     * @param bord
     * @param offsetX
     * @param offsetY
     */
    Utils.fitToBoard = function (node, bord, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        var size = cc.view.getVisibleSize();
        if (bord == 'tl') {
            node.x = -size.width / 2 + node.width / 2 + offsetX;
            node.y = node.height / 2 - node.height / 2 + offsetY;
        }
        else if (bord == 'tr') {
            node.x = size.width / 2 - node.width / 2 + offsetX;
            node.y = node.height / 2 - node.height / 2 + offsetY;
        }
        else if (bord == 'dl') {
            node.x = -size.width / 2 + node.width / 2 + offsetX;
            node.y = -node.height / 2 + node.height / 2 + offsetY;
        }
        else if (bord == 'dr') {
            node.x = size.width / 2 - node.width / 2 + offsetX;
            node.y = -node.height / 2 + node.height / 2 + offsetY;
        }
    };
    /**
     * 返回帧数用时
     * @param num
     */
    Utils._FT = function (num) {
        return num * 0.0333333;
    };
    Utils.isUndefined = function (obj) {
        return typeof obj == "undefined";
    };
    Utils.numberPlus = function (num1, num2) {
        return (num1 * 100 + num2 * 100) / 100;
    };
    Utils.numberReduce = function (num1, num2) {
        return (num1 * 100 - num2 * 100) / 100;
    };
    Utils.numberMulti = function (num1, num2) {
        return (num1 * 100 * num2 * 100) / (100 * 100);
    };
    return Utils;
}());
exports.default = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE0aEJBLENBQUM7SUEzaEJHLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFFZixlQUFTLEdBQWhCLFVBQWlCLEdBQUc7UUFDaEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sc0JBQWdCLEdBQXZCLFVBQXdCLFNBQVM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLEVBQUUsU0FBQSxDQUFDO1lBQ1AsSUFBSSxNQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQzlCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLEVBQUUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7b0JBQzNELElBQUksT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksT0FBTyxFQUFFO3dCQUNoQyxPQUFPLElBQUksQ0FBQztxQkFDZjtpQkFDSjthQUNKO2lCQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLEVBQUUsR0FBRyxTQUFTLENBQUMs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TSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUNoRzthQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUNoRzthQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdB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R0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQTVoQkEsQUE0aEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gICAgLy8gY2RlZ3Jlc3M6TnVtIE1hdGguUEkvMTgwLFxuICAgIC8vIGNhbmdsZToxODAvTWF0aC5QSSxcblxuICAgIHN0YXRpYyBlbW9qaTJTdHIoc3RyKSB7XG4gICAgICAgIHJldHVybiB1bmVzY2FwZShlc2NhcGUoc3RyKS5yZXBsYWNlKC9cXCV1RC57M30vZywgJycpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNFbW9qaUNoYXJhY3RlcihzdWJzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBocyA9IHN1YnN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgbGV0IGxzO1xuICAgICAgICAgICAgaWYgKDB4ZDgwMCA8PSBocyAmJiBocyA8PSAweGRiZmYpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic3RyaW5nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbHMgPSBzdWJzdHJpbmcuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1YyA9ICgoaHMgLSAweGQ4MDApICogMHg0MDApICsgKGxzIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICgweDFkMDAwIDw9IHVjICYmIHVjIDw9IDB4MWY3N2YpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJzdHJpbmcubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGxzID0gc3Vic3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgICAgIGlmIChscyA9PSAweDIwZTMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoMHgyMTAwIDw9IGhzICYmIGhzIDw9IDB4MjdmZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDB4MkIwNSA8PSBocyAmJiBocyA8PSAweDJiMDcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgweDI5MzQgPD0gaHMgJiYgaHMgPD0gMHgyOTM1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMHgzMjk3IDw9IGhzICYmIGhzIDw9IDB4MzI5OSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhzID09IDB4YTkgfHwgaHMgPT0gMHhhZSB8fCBocyA9PSAweDMwM2QgfHwgaHMgPT0gMHgzMDMwXG4gICAgICAgICAgICAgICAgICAgIHx8IGhzID09IDB4MmI1NSB8fCBocyA9PSAweDJiMWMgfHwgaHMgPT0gMHgyYjFiXG4gICAgICAgICAgICAgICAgICAgIHx8IGhzID09IDB4MmI1MCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aYr+WQpuWtl+espuS4suacieepuuagvFxuICAgIHN0YXRpYyBpc1N0clNwYWNlKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLmluZGV4T2YoJyAnKSA9PT0gLTE7XG4gICAgfVxuXG4gICAgLy/op5LluqbovazlvKfluqZcbiAgICBzdGF0aWMgYW5nbGVUb1BJKGRlZ3JlZXMpIHtcbiAgICAgICAgcmV0dXJuIGRlZ3JlZXMgKiBjYy5tYWNyby5SQUQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHBpVG9BbmdsZShyYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiByYWRpYW5zICogY2MubWFjcm8uREVHO1xuICAgIH1cblxuICAgIC8v6I635b6X5Lik54K55LmL6Ze055qE6KeS5bqmXG4gICAgc3RhdGljIGdldFZlY0FuZ2xlKGN1cnJWZWMsIG5leHRWZWMpIHtcbiAgICAgICAgLy8gbGV0IHAxID0gKDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBsZXQgdmVjID0gY2MudjIobmV4dFZlYykuc3ViKGNjLnYyKGN1cnJWZWMpKTtcbiAgICAgICAgbGV0IGExID0gLU1hdGguYXRhbjIodmVjLnksIHZlYy54KTtcbiAgICAgICAgbGV0IHIxID0gYTEgKiBjYy5tYWNyby5ERUc7XG4gICAgICAgIHJldHVybiByMTtcbiAgICB9XG5cbiAgICAvL+aKiuS4gOS4quiKgueCueS4i+eahOWdkOagh+i9rOaIkOWFqOWxgOWdkOagh1xuICAgIHN0YXRpYyBjb252ZXJ0Tm9kZVRvV29ybGRTcGFjZShub2RlOiBjYy5Ob2RlLCBucG9zKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobnBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNjLnYyKCk7XG4gICAgfVxuXG4gICAgLy/miorkuIDkuKroioLngrnkuIvnmoTlnZDmoIfovazmiJDlj6bkuIDkuKroioLngrnnmoTlnZDmoIdcbiAgICBzdGF0aWMgY29udmVydE5vZGVUb05vZGVTcGFjZShub2RlLCB0YXJnZXRQYXJlbnQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGlmICghIW5vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHdwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5nZXRQb3NpdGlvbigpKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRhcmdldFBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3cG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKCflnZDmoIfovazmjaLmnInpl67popgnKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDApO1xuICAgIH1cblxuICAgIC8v5oqK5YWo5bGA5Z2Q5qCH6L2s5oiQ5Y+m5LiA5Liq6IqC54K555qE5Z2Q5qCHXG4gICAgc3RhdGljIGNvbnZlcnRXb3JsZFRvTm9kZVNwYWNlKG5vZGUsIHdwb3MsIGlzUGFyZW50KSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBpZiAoISFpc1BhcmVudCAmJiBub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3cG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdwb3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYy52MigwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBuYW1lIGlzUGhvbmVOdW1lclxuICAgICAqIEBwYXJhbSBwaG9uZU51bSDnlLXor53lj7fnoIFcbiAgICAgKiDliKTmlq3kvKDlhaXnmoTmlbDlrZfmmK/lkKbnrKblkIjmiYvmnLrlj7fnoIHnmoTmoLzlvI9cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNQaG9uZW51bWJlcihwaG9uZU51bSkge1xuICAgICAgICBpZiAoISgvXjFbMzQ1NzhdXFxkezl9JC8udGVzdChwaG9uZU51bSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICogRnVuY3Rpb24gbmFtZSBnZXRTaG9ydE5hbWVcbiAgICAqIEBwYXJhbSBuYW1lIOeOqeWutuaYteensFxuICAgICog546p5a625Lit5paH5pi156ew5pyA5aSa5Y+q5pi+56S6NeS4quaxieWtl++8jOi2heWHuuWImeWcqOWQjumdouWKoOKAnC4uLuKAnSDkuIDkuKrkuK3mlocy5Liq5a2X56ymXG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0U2hvcnROYW1lKG5hbWUsIG1heENoYXI6IG51bWJlciA9IDEwKSB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0cmxlbiA9IDA7XG4gICAgICAgIGxldCBzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmFtZS5jaGFyQ29kZUF0KGkpID4gMTI4KSB7XG4gICAgICAgICAgICAgICAgc3RybGVuICs9IDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmxlbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcyArPSBuYW1lLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGlmIChzdHJsZW4gPj0gbWF4Q2hhcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCIuLi5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorqHnrpfkuKTngrnkuYvpl7TnmoTkuK3ngrksXG4gICAgICogY29lZmZpY2llbnQg6Led56a757O75pWwXG4gICAgICovXG4gICAgc3RhdGljIGNhbGN1bGF0aW9uTWlkUG9pbnQoYmVnaWFuUG9zOiBjYy5WZWMyLCBlbmRQb3M6IGNjLlZlYzIsIGNvZWZmaWNpZW50OiBudW1iZXIgPSAwLjUsIG9mZnNldFk6IG51bWJlciA9IDMwMCkge1xuICAgICAgICBsZXQgbmV3UG9zID0gYmVnaWFuUG9zO1xuICAgICAgICBsZXQgc3VieDogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHN1Ynk6IG51bWJlciA9IDA7XG4gICAgICAgIGlmIChiZWdpYW5Qb3MueCA8PSBlbmRQb3MueCAmJiBiZWdpYW5Qb3MueSA8PSBlbmRQb3MueSkge1xuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xuICAgICAgICB9IGVsc2UgaWYgKGJlZ2lhblBvcy54ID4gZW5kUG9zLnggJiYgYmVnaWFuUG9zLnkgPCBlbmRQb3MueSkge1xuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xuICAgICAgICB9IGVsc2UgaWYgKGJlZ2lhblBvcy54ID4gZW5kUG9zLnggJiYgYmVnaWFuUG9zLnkgPiBlbmRQb3MueSkge1xuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xuICAgICAgICB9IGVsc2UgaWYgKGJlZ2lhblBvcy54IDwgZW5kUG9zLnggJiYgYmVnaWFuUG9zLnkgPiBlbmRQb3MueSkge1xuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdQb3M7XG4gICAgfVxuXG5cbiAgICAvL+eUn+aIkOiMg+WbtOWGheeahOmaj+acuuaVsFxuICAgIHN0YXRpYyByYW5kU2VjdGlvbk51bShtaW5udW0sIG1heG51bSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbm51bSArIE1hdGgucmFuZG9tKCkgKiAobWF4bnVtIC0gbWlubnVtKSk7XG4gICAgfVxuICAgIC8v6I635b6X5pWw57uE5YaF55qE6ZqP5py65YC8XG4gICAgc3RhdGljIGdldFJhbmRvbUJ5QXJyKGFycikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJhbmRTZWN0aW9uTnVtKDAsIGFyci5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gYXJyW2luZGV4XTtcbiAgICB9XG4gICAgLy/nlJ/miJDljLrpl7TlhoXnmoTmlbDnu4RcbiAgICBzdGF0aWMgY3JlYXRlQXJyKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBzdGFydEluZGV4OyBpbmRleCA8IGVuZEluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIOS7juaMh+WumuaVsOe7hOmaj+acuuWHuuWHoOS4quWAvOW5tue7hOaIkOaWsOaVsOe7hCjov5Tlm57lgLzkuLrljp/lhYPntKDnsbvlnospXG4gICAgKiBAcGFyYW0gYXJyOua6kOaVsOe7hFxuICAgICogQHBhcmFtIG51bTropoHlh6DkuKrpmo/mnLrlhYPntKBcbiAgICAqL1xuICAgIHN0YXRpYyByYW5kb21OZXdBcnIoYXJyOiBBcnJheTxhbnk+LCBudW06IG51bWJlcikge1xuICAgICAgICBsZXQgYXJyT2xkOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAgICAgYXJyT2xkID0gWy4uLmFycl07XG4gICAgICAgIGlmIChhcnJPbGQubGVuZ3RoIDw9IG51bSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyck9sZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJyTmV3OiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IHRoaXMuZ2V0UmFuZG9tTnVtKDAsIGFyck9sZC5sZW5ndGggLSAxKTsvL+S6p+eUn+maj+acuuaVsOeUqOS9nOS4i+aghyBcbiAgICAgICAgICAgIGFyck5ldy5wdXNoKGFyck9sZFtyYW5kb21dKTtcbiAgICAgICAgICAgIGFyck9sZC5zcGxpY2UocmFuZG9tLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyTmV3O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bojIPlm7TlhoXpmo/mnLrmlbTmlbAo5YyF5ZCr5pyA5aSn5YC8KVxuICAgICAqIEBwYXJhbSBtaW4g5pyA5bCP5YC8XG4gICAgICogQHBhcmFtIG1heCDmnIDlpKflgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tTnVtKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3Jvc3NNdWwodjE6IGNjLlZlYzIsIHYyOiBjYy5WZWMyKSB7XG4gICAgICAgIHJldHVybiB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHF1YWRyYXRpYyhiZWdpbiwgYzEsIGVuZCwgdCkge1xuICAgICAgICBsZXQgcCA9IGNjLnYyKCk7XG4gICAgICAgIHAueCA9IGJlZ2luLnggKiAoMSAtIHQpICogKDEgLSB0KSArIGMxLnggKiAyICogdCAqICgxIC0gdCkgKyBlbmQueCAqIHQgKiB0O1xuICAgICAgICBwLnkgPSBiZWdpbi55ICogKDEgLSB0KSAqICgxIC0gdCkgKyBjMS55ICogMiAqIHQgKiAoMSAtIHQpICsgZW5kLnkgKiB0ICogdDtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZXhjaGFuZ2UocDE6IGNjLlZlYzIsIHAyOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBwID0gY2MudjIoKTtcbiAgICAgICAgcC54ID0gcDIueDtcbiAgICAgICAgcC55ID0gcDIueTtcbiAgICAgICAgcDIueCA9IHAxLng7XG4gICAgICAgIHAyLnkgPSBwMS55O1xuICAgICAgICBwMS54ID0gcC54O1xuICAgICAgICBwMS55ID0gcC55O1xuICAgIH1cblxuICAgIC8v5pWw57uE5Yig6Zmk5p+Q5LiA5Liq57Si5byV55qE5a+56LGhXG4gICAgLy9pbmRleCDlvIDlp4vntKLlvJVcbiAgICAvL251bSDliKDpmaTmlbDph48g6buY6K6k5Li6MeS4qlxuICAgIHN0YXRpYyBhcnJheVJlbW92ZShhcnI6IEFycmF5PGFueT4sIGluZGV4LCBudW0gPSAxKSB7XG4gICAgICAgIGxldCBpLCBsZW47XG4gICAgICAgIGZvciAoaSA9IGluZGV4ICsgbnVtLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGFycltpIC0gbnVtXSA9IGFycltpXTtcbiAgICAgICAgfVxuICAgICAgICBhcnIubGVuZ3RoID0gbGVuIC0gbnVtO1xuICAgIH1cblxuICAgIC8v6YCa6L+H5pWw57uE5Lit55qE5YC856e76Zmk5pWw57uEXG4gICAgc3RhdGljIGFycmF5UmVtb3ZlVmFsdWUoYXJyOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+LCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlSZW1vdmUoYXJyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aVsOe7hGNvcHlcbiAgICBzdGF0aWMgYXJyYXlDb3B5KHNvdXJjZUFycjogQXJyYXk8YW55PiwgZGVzdEFycjogQXJyYXk8YW55Pikge1xuICAgICAgICBpZiAoISFzb3VyY2VBcnIgJiYgISFkZXN0QXJyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc291cmNlQXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzb3VyY2VBcnJbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGRlc3RBcnIucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5LuO5pWw57uE5Lit6I635b6X5oyH5a6a5pWw6YeP77yM5ZCM5pe25pS55Y+Y5Y6f5pyJ55qE5pWw57uEXG4gICAgc3RhdGljIGFycmF5R2V0U3luYyhzb3VyY2VBcnI6IEFycmF5PGFueT4sIG51bTogbnVtYmVyID0gMSkge1xuICAgICAgICBsZXQgcmVzdWx0QXJyID0gW107XG4gICAgICAgIGlmIChudW0gPiBzb3VyY2VBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5Q29weShzb3VyY2VBcnIsIHJlc3VsdEFycik7XG4gICAgICAgICAgICBzb3VyY2VBcnIubGVuZ3RoID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkSW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvdXJjZUFyci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdEFyci5wdXNoKHNvdXJjZUFycltkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5UmVtb3ZlKHNvdXJjZUFyciwgZEluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0QXJyO1xuICAgIH1cblxuICAgIC8v5bmz5ruRXG4gICAgc3RhdGljIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYSArIHQgKiAoYiAtIGEpO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYXRjaEJnU2l6ZShiZzogY2MuTm9kZSkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChiZykpIHtcbiAgICAgICAgICAgIGJnLnNldFNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgbGV0IGh2YWx1ZSA9IGJnLndpZHRoO1xuICAgICAgICAgICAgaWYgKGJnLndpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBodmFsdWUgPSBjYy52aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCkud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgICAgIGxldCBocmF0ZSA9IHNpemUud2lkdGggLyBodmFsdWU7XG4gICAgICAgICAgICBiZy5zZXRTY2FsZShocmF0ZSwgaHJhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGhyYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG1hdGNoQmdIU2l6ZShiZzogY2MuTm9kZSkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChiZykpIHtcbiAgICAgICAgICAgIGJnLnNldFNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgbGV0IGh2YWx1ZSA9IGJnLmhlaWdodDtcbiAgICAgICAgICAgIGlmIChiZy5oZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGh2YWx1ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgICAgIGxldCBocmF0ZSA9IHNpemUuaGVpZ2h0IC8gaHZhbHVlO1xuICAgICAgICAgICAgYmcuc2V0U2NhbGUoaHJhdGUsIGhyYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBocmF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaKiuaVsOWtl+i9rOaIkDAxMDHnmoTmlbDnu4RcbiAgICAgKiBAcGFyYW0geyp9IG51bSBcbiAgICAgKiBAcGFyYW0geyp9IGNvdW50IFxuICAgICAqL1xuICAgIHN0YXRpYyBudW1iZXJUb0JpbmFyeShudW0sIGNvdW50KSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChudW0gPj4gaW5kZXggJiAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gYXJyIFxuICAgICAqL1xuICAgIHN0YXRpYyBiaW5hcnlBcnJUb051bShhcnIpIHtcbiAgICAgICAgaWYgKCEhYXJyKSB7XG4gICAgICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHN0ciArPSBhcnJbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MubG9nKHN0cik7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyLCAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmK9wY+aTjeS9nOW5s+WPsFxuICAgICAqL1xuICAgIHN0YXRpYyBpc1BjUGxhbnRGcm9tKCkge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuQU5EUk9JRCB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEhPTkUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflvpfllK/kuIBpZFxuICAgICAqIEBwYXJhbSBsZW4gXG4gICAgICogQHBhcmFtIHJhZGl4IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZW5VdWlkKGxlbiwgcmFkaXgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgY2hhcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnZ4eXonLnNwbGl0KCcnKTtcbiAgICAgICAgbGV0IHV1aWQgPSBbXSwgaTtcbiAgICAgICAgcmFkaXggPSByYWRpeCB8fCBjaGFycy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgLy8gQ29tcGFjdCBmb3JtXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHV1aWRbaV0gPSBjaGFyc1swIHwgTWF0aC5yYW5kb20oKSAqIHJhZGl4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJmYzQxMjIsIHZlcnNpb24gNCBmb3JtXG4gICAgICAgICAgICBsZXQgcjtcblxuICAgICAgICAgICAgLy8gcmZjNDEyMiByZXF1aXJlcyB0aGVzZSBjaGFyYWN0ZXJzXG4gICAgICAgICAgICB1dWlkWzhdID0gdXVpZFsxM10gPSB1dWlkWzE4XSA9IHV1aWRbMjNdID0gJy0nO1xuICAgICAgICAgICAgdXVpZFsxNF0gPSAnNCc7XG4gICAgICAgICAgICAvLyBGaWxsIGluIHJhbmRvbSBkYXRhLiAgQXQgaT09MTkgc2V0IHRoZSBoaWdoIGJpdHMgb2YgY2xvY2sgc2VxdWVuY2UgYXNcbiAgICAgICAgICAgIC8vIHBlciByZmM0MTIyLCBzZWMuIDQuMS41XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdXVpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICByID0gMCB8IE1hdGgucmFuZG9tKCkgKiAxNjtcbiAgICAgICAgICAgICAgICAgICAgdXVpZFtpXSA9IGNoYXJzWyhpID09IDE5KSA/IChyICYgMHgzKSB8IDB4OCA6IHJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXVpZC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvKiogPHA+5Yik5pat57q/5q615piv5ZCm5Zyo55+p5b2i5YaFIDwvcD5cbiAgICAgICAgICog5YWI55yL57q/5q615omA5Zyo55u057q/5piv5ZCm5LiO55+p5b2i55u45Lqk77yMIFxuICAgICAgICAgKiDlpoLmnpzkuI3nm7jkuqTliJnov5Tlm55mYWxzZe+8jCBcbiAgICAgICAgICog5aaC5p6c55u45Lqk77yMIFxuICAgICAgICAgKiDliJnnnIvnur/mrrXnmoTkuKTkuKrngrnmmK/lkKblnKjnn6nlvaLnmoTlkIzkuIDovrnvvIjljbPkuKTngrnnmoR4KHkp5Z2Q5qCH6YO95q+U55+p5b2i55qE5bCPeCh5KeWdkOagh+Wwj++8jOaIluiAheWkp++8iSwgXG4gICAgICAgICAqIOiLpeWcqOWQjOS4gOi+ueWImei/lOWbnmZhbHNl77yMIFxuICAgICAgICAgKiDlkKbliJnlsLHmmK/nm7jkuqTnmoTmg4XlhrXjgIJcbiAgICAgICAgICogQHBhcmFtIGxpbmVQb2ludFgxIOe6v+autei1t+Wni+eCuXjlnZDmoIcgXG4gICAgICAgICAqIEBwYXJhbSBsaW5lUG9pbnRZMSDnur/mrrXotbflp4vngrl55Z2Q5qCHIFxuICAgICAgICAgKiBAcGFyYW0gbGluZVBvaW50WDIg57q/5q6157uT5p2f54K5eOWdkOaghyBcbiAgICAgICAgICogQHBhcmFtIGxpbmVQb2ludFkyIOe6v+autee7k+adn+eCuXnlnZDmoIcgXG4gICAgICAgICAqIEBwYXJhbSByZWN0YW5nbGVMZWZ0VG9wWCDnn6nlvaLlt6bkuIrngrl45Z2Q5qCHIFxuICAgICAgICAgKiBAcGFyYW0gcmVjdGFuZ2xlTGVmdFRvcFkg55+p5b2i5bem5LiK54K5eeWdkOaghyBcbiAgICAgICAgICogQHBhcmFtIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCDnn6nlvaLlj7PkuIvngrl45Z2Q5qCHIFxuICAgICAgICAgKiBAcGFyYW0gcmVjdGFuZ2xlUmlnaHRCb3R0b21ZIOefqeW9ouWPs+S4i+eCuXnlnZDmoIcgXG4gICAgICAgICAqIEByZXR1cm4g5piv5ZCm55u45LqkXG4gICAgICAgICAqL1xuICAgIHN0YXRpYyBpc0xpbmVJbnRlcnNlY3RSZWN0YW5nbGUobGluZVBvaW50WDE6IG51bWJlciwgbGluZVBvaW50WTE6IG51bWJlciwgbGluZVBvaW50WDI6IG51bWJlciwgbGluZVBvaW50WTI6IG51bWJlcixcbiAgICAgICAgcmVjdGFuZ2xlTGVmdFRvcFg6IG51bWJlcixcbiAgICAgICAgcmVjdGFuZ2xlTGVmdFRvcFk6IG51bWJlcixcbiAgICAgICAgcmVjdGFuZ2xlUmlnaHRCb3R0b21YOiBudW1iZXIsXG4gICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBsaW5lSGVpZ2h0OiBudW1iZXIgPSBsaW5lUG9pbnRZMSAtIGxpbmVQb2ludFkyO1xuICAgICAgICBsZXQgbGluZVdpZHRoOiBudW1iZXIgPSBsaW5lUG9pbnRYMiAtIGxpbmVQb2ludFgxOyAgLy8g6K6h566X5Y+J5LmYIFxuICAgICAgICBsZXQgYzogbnVtYmVyID0gbGluZVBvaW50WDEgKiBsaW5lUG9pbnRZMiAtIGxpbmVQb2ludFgyICogbGluZVBvaW50WTE7XG4gICAgICAgIGlmICgobGluZUhlaWdodCAqIHJlY3RhbmdsZUxlZnRUb3BYICsgbGluZVdpZHRoICogcmVjdGFuZ2xlTGVmdFRvcFkgKyBjID49IDAgJiYgbGluZUhlaWdodCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCArIGxpbmVXaWR0aCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSArIGMgPD0gMClcbiAgICAgICAgICAgIHx8IChsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlTGVmdFRvcFggKyBsaW5lV2lkdGggKiByZWN0YW5nbGVMZWZ0VG9wWSArIGMgPD0gMCAmJiBsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlUmlnaHRCb3R0b21YICsgbGluZVdpZHRoICogcmVjdGFuZ2xlUmlnaHRCb3R0b21ZICsgYyA+PSAwKVxuICAgICAgICAgICAgfHwgKGxpbmVIZWlnaHQgKiByZWN0YW5nbGVMZWZ0VG9wWCArIGxpbmVXaWR0aCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSArIGMgPj0gMCAmJiBsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlUmlnaHRCb3R0b21YICsgbGluZVdpZHRoICogcmVjdGFuZ2xlTGVmdFRvcFkgKyBjIDw9IDApXG4gICAgICAgICAgICB8fCAobGluZUhlaWdodCAqIHJlY3RhbmdsZUxlZnRUb3BYICsgbGluZVdpZHRoICogcmVjdGFuZ2xlUmlnaHRCb3R0b21ZICsgYyA8PSAwICYmIGxpbmVIZWlnaHQgKiByZWN0YW5nbGVSaWdodEJvdHRvbVggKyBsaW5lV2lkdGggKiByZWN0YW5nbGVMZWZ0VG9wWSArIGMgPj0gMCkpIHtcblxuICAgICAgICAgICAgaWYgKHJlY3RhbmdsZUxlZnRUb3BYID4gcmVjdGFuZ2xlUmlnaHRCb3R0b21YKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXA6IG51bWJlciA9IHJlY3RhbmdsZUxlZnRUb3BYO1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZUxlZnRUb3BYID0gcmVjdGFuZ2xlUmlnaHRCb3R0b21YO1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjdGFuZ2xlTGVmdFRvcFkgPCByZWN0YW5nbGVSaWdodEJvdHRvbVkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcDE6IG51bWJlciA9IHJlY3RhbmdsZUxlZnRUb3BZO1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZUxlZnRUb3BZID0gcmVjdGFuZ2xlUmlnaHRCb3R0b21ZO1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSA9IHRlbXAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChsaW5lUG9pbnRYMSA8IHJlY3RhbmdsZUxlZnRUb3BYICYmIGxpbmVQb2ludFgyIDwgcmVjdGFuZ2xlTGVmdFRvcFgpXG4gICAgICAgICAgICAgICAgfHwgKGxpbmVQb2ludFgxID4gcmVjdGFuZ2xlUmlnaHRCb3R0b21YICYmIGxpbmVQb2ludFgyID4gcmVjdGFuZ2xlUmlnaHRCb3R0b21YKVxuICAgICAgICAgICAgICAgIHx8IChsaW5lUG9pbnRZMSA+IHJlY3RhbmdsZUxlZnRUb3BZICYmIGxpbmVQb2ludFkyID4gcmVjdGFuZ2xlTGVmdFRvcFkpXG4gICAgICAgICAgICAgICAgfHwgKGxpbmVQb2ludFkxIDwgcmVjdGFuZ2xlUmlnaHRCb3R0b21ZICYmIGxpbmVQb2ludFkyIDwgcmVjdGFuZ2xlUmlnaHRCb3R0b21ZKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlLHmhaLliLDlv6tcbiAgICAgKiBAcGFyYW0gc3RhcnQgXG4gICAgICogQHBhcmFtIGVuZCBcbiAgICAgKiBAcGFyYW0gZWFzaW5nIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBlYXNlSW4oc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGVhc2luZzogbnVtYmVyID0gMC4xKSB7XG4gICAgICAgIHN0YXJ0ID0gc3RhcnQgLSAoc3RhcnQgLSBlbmQpICogZWFzaW5nO1xuICAgICAgICByZXR1cm4gc3RhcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55Sx5b+r5Yiw5oWiXG4gICAgICogQHBhcmFtIHN0YXJ0IFxuICAgICAqIEBwYXJhbSBlbmQgXG4gICAgICogQHBhcmFtIGVhc2luZyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZWFzZU91dChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZWFzaW5nOiBudW1iZXIgPSAwLjEpIHtcbiAgICAgICAgc3RhcnQgPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiBlYXNpbmc7XG4gICAgICAgIHJldHVybiBzdGFydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvZPliY3mlbDlrZfmmK/lkKbml7bkuIDkuKrotKjmlbBcbiAgICAgKiDooqsx5ZKM6Ieq5bex5pW06ZmkXG4gICAgICogQHBhcmFtIG51bSBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNQcmltZShudW06IG51bWJlcikge1xuICAgICAgICBsZXQgc3F1cnROdW0gPSBNYXRoLmZsb29yKE1hdGguc3FydChudW0pKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAyOyBpbmRleCA8IG51bTsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKG51bSAlIGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5om+5Yiw6Led56a76L+Z5Liq5pWw5a2X5pyA6L+R55qE6LSo5pWw77yI6LSo5pWw55So5LqO6ZqP5py65YiG5biD5Lit77yJXG4gICAgICogQHBhcmFtIG51bSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJpbWUobnVtOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzUHJpbWUobnVtKSkge1xuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlPFQ+KEM6IHsgbmV3KCk6IFQgfSk6IFQge1xuICAgICAgICByZXR1cm4gbmV3IEMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgILphY3oioLngrnliLDnm7jlr7nkuo7oiJ7lj7DnmoTnmoTovrnop5LkvY3nva5cbiAgICAgKiBAcGFyYW0gbm9kZSBcbiAgICAgKiBAcGFyYW0gYm9yZCBcbiAgICAgKiBAcGFyYW0gb2Zmc2V0WCBcbiAgICAgKiBAcGFyYW0gb2Zmc2V0WSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZml0VG9Cb2FyZChub2RlOiBjYy5Ob2RlLCBib3JkOiBzdHJpbmcsIG9mZnNldFg6IG51bWJlciA9IDAsIG9mZnNldFk6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgaWYgKGJvcmQgPT0gJ3RsJykge1xuICAgICAgICAgICAgbm9kZS54ID0gLXNpemUud2lkdGggLyAyICsgbm9kZS53aWR0aCAvIDIgKyBvZmZzZXRYO1xuICAgICAgICAgICAgbm9kZS55ID0gbm9kZS5oZWlnaHQgLyAyIC0gbm9kZS5oZWlnaHQgLyAyICsgb2Zmc2V0WTtcbiAgICAgICAgfSBlbHNlIGlmIChib3JkID09ICd0cicpIHtcbiAgICAgICAgICAgIG5vZGUueCA9IHNpemUud2lkdGggLyAyIC0gbm9kZS53aWR0aCAvIDIgKyBvZmZzZXRYO1xuICAgICAgICAgICAgbm9kZS55ID0gbm9kZS5oZWlnaHQgLyAyIC0gbm9kZS5oZWlnaHQgLyAyICsgb2Zmc2V0WTtcbiAgICAgICAgfSBlbHNlIGlmIChib3JkID09ICdkbCcpIHtcblxuICAgICAgICAgICAgbm9kZS54ID0gLXNpemUud2lkdGggLyAyICsgbm9kZS53aWR0aCAvIDIgKyBvZmZzZXRYO1xuICAgICAgICAgICAgbm9kZS55ID0gLW5vZGUuaGVpZ2h0IC8gMiArIG5vZGUuaGVpZ2h0IC8gMiArIG9mZnNldFk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9yZCA9PSAnZHInKSB7XG4gICAgICAgICAgICBub2RlLnggPSBzaXplLndpZHRoIC8gMiAtIG5vZGUud2lkdGggLyAyICsgb2Zmc2V0WDtcbiAgICAgICAgICAgIG5vZGUueSA9IC1ub2RlLmhlaWdodCAvIDIgKyBub2RlLmhlaWdodCAvIDIgKyBvZmZzZXRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi/lOWbnuW4p+aVsOeUqOaXtlxuICAgICAqIEBwYXJhbSBudW1cbiAgICAgKi9cbiAgICBzdGF0aWMgX0ZUKG51bTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW0gKiAwLjAzMzMzMzM7XG4gICAgfVxuICAgIHN0YXRpYyBpc1VuZGVmaW5lZChvYmo6IGFueSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSBcInVuZGVmaW5lZFwiO1xuICAgIH1cbiAgICBzdGF0aWMgbnVtYmVyUGx1cyhudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAobnVtMSAqIDEwMCArIG51bTIgKiAxMDApIC8gMTAwO1xuICAgIH1cbiAgICBzdGF0aWMgbnVtYmVyUmVkdWNlKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIChudW0xICogMTAwIC0gbnVtMiAqIDEwMCkgLyAxMDA7XG4gICAgfVxuICAgIHN0YXRpYyBudW1iZXJNdWx0aShudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAobnVtMSAqIDEwMCAqIG51bTIgKiAxMDApIC8gKDEwMCAqIDEwMCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/BaseView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1774ey9vgZJTaj3njez1q4t', 'BaseView');
// src/framework/ui/BaseView.ts

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
var LoaderManager_1 = require("../manager/LoaderManager");
var GamePoolManager_1 = require("../manager/GamePoolManager");
var UIMananger_1 = require("../manager/UIMananger");
var Handler_1 = require("../base/Handler");
var NResponer_1 = require("../message/NResponer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseView = /** @class */ (function (_super) {
    __extends(BaseView, _super);
    function BaseView() {
        var _this = _super.call(this) || this;
        _this.isOnLoad = true;
        return _this;
    }
    BaseView.prototype.setUIName = function (url) {
        this.uiName = url;
    };
    BaseView.prototype.setModuleName = function (mname) {
        this.moduleName = mname;
    };
    //开始显示
    BaseView.prototype._show_ = function () {
    };
    BaseView.prototype._hide_ = function () {
        if (LoaderManager_1.default.isRelease(this.moduleName)) {
            this.node.destroy();
            GamePoolManager_1.default.clearByTarget(this);
            this._destroyClear();
        }
        else {
            GamePoolManager_1.default.putBackByTarget(this);
            if (!!this.node.parent) {
                this.node.removeFromParent(false);
            }
            this._closeClear();
        }
    };
    //关时清理
    BaseView.prototype._closeClear = function () {
    };
    //销毁时清理
    BaseView.prototype._destroyClear = function () {
    };
    BaseView.prototype.on_Show = function (args) {
    };
    BaseView.prototype.on_Hide = function () {
    };
    BaseView.prototype.close = function () {
        UIMananger_1.default.hideView(this.uiName);
    };
    BaseView.prototype.onDestroy = function () {
        cc.log('BaseView 被销毁');
        NResponer_1.default.targetOff(this, true);
        Handler_1.default.releaseByHost(this);
        this.isOnLoad = false;
    };
    BaseView = __decorate([
        ccclass
    ], BaseView);
    return BaseView;
}(cc.Component));
exports.default = BaseView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCw4REFBeUQ7QUFDekQsb0RBQStDO0FBQy9DLDJDQUFzQztBQUN0QyxrREFBNkM7QUFFdkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFNOUM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7SUFDekIsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxHQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQ0FBYSxHQUFiLFVBQWMsS0FBWTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsTUFBTTtJQUNOLHlCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNJLElBQUksdUJBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIseUJBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDSCx5QkFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxNQUFNO0lBQ04sOEJBQVcsR0FBWDtJQUVBLENBQUM7SUFFRCxPQUFPO0lBQ1AsZ0NBQWEsR0FBYjtJQUVBLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsSUFBSTtJQUVaLENBQUM7SUFFRCwwQkFBTyxHQUFQO0lBRUEsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFFSSxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZCLG1CQUFTLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixpQkFBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBbEVnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUU1QjtJQUFELGVBQUM7Q0FuRUQsQUFtRUMsQ0FuRXFDLEVBQUUsQ0FBQyxTQUFTLEdBbUVqRDtrQkFuRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGVyTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9Mb2FkZXJNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZVBvb2xNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0dhbWVQb29sTWFuYWdlclwiO1xuaW1wb3J0IFVJTWFuYW5nZXIgZnJvbSBcIi4uL21hbmFnZXIvVUlNYW5hbmdlclwiO1xuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IE5SZXNwb25lciBmcm9tIFwiLi4vbWVzc2FnZS9OUmVzcG9uZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgdWlOYW1lOnN0cmluZztcbiAgICBwdWJsaWMgbW9kdWxlTmFtZTpzdHJpbmc7XG4gICAgcHVibGljIGlzT25Mb2FkOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzT25Mb2FkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRVSU5hbWUodXJsOnN0cmluZyl7XG4gICAgICAgIHRoaXMudWlOYW1lID0gdXJsO1xuICAgIH1cblxuICAgIHNldE1vZHVsZU5hbWUobW5hbWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5tb2R1bGVOYW1lID0gbW5hbWU7XG4gICAgfVxuXG4gICAgLy/lvIDlp4vmmL7npLpcbiAgICBfc2hvd18oKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgX2hpZGVfKCl7XG4gICAgICAgIGlmIChMb2FkZXJNYW5hZ2VyLmlzUmVsZWFzZSh0aGlzLm1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgR2FtZVBvb2xNYW5hZ2VyLmNsZWFyQnlUYXJnZXQodGhpcyk7IFxuICAgICAgICAgICAgdGhpcy5fZGVzdHJveUNsZWFyKCk7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgR2FtZVBvb2xNYW5hZ2VyLnB1dEJhY2tCeVRhcmdldCh0aGlzKTtcbiAgICAgICAgICAgIGlmICghIXRoaXMubm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jbG9zZUNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WFs+aXtua4heeQhlxuICAgIF9jbG9zZUNsZWFyKCl7XG5cbiAgICB9XG5cbiAgICAvL+mUgOavgeaXtua4heeQhlxuICAgIF9kZXN0cm95Q2xlYXIoKXtcblxuICAgIH1cblxuICAgIG9uX1Nob3coYXJncyl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uX0hpZGUoKXtcblxuICAgIH1cblxuICAgIGNsb3NlKClcbiAgICB7XG4gICAgICAgIFVJTWFuYW5nZXIuaGlkZVZpZXcodGhpcy51aU5hbWUpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpe1xuICAgICAgICBjYy5sb2coJ0Jhc2VWaWV3IOiiq+mUgOavgScpO1xuICAgICAgICBOUmVzcG9uZXIudGFyZ2V0T2ZmKHRoaXMsdHJ1ZSk7XG4gICAgICAgIEhhbmRsZXIucmVsZWFzZUJ5SG9zdCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09uTG9hZCA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/UIState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd52d3KUVu5NEKYy4s6U/Qeg', 'UIState');
// src/framework/ui/UIState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIState = exports.StateType = void 0;
var StateType;
(function (StateType) {
    StateType[StateType["close"] = 0] = "close";
    StateType[StateType["opening"] = 1] = "opening";
    StateType[StateType["open"] = 2] = "open"; //完全打开
})(StateType = exports.StateType || (exports.StateType = {}));
/**
 * ui状态
 */
var UIState = /** @class */ (function () {
    function UIState() {
        this.uinId = 0;
        this.uinId = UIState.StateID++;
    }
    UIState.prototype.setData = function (data) {
        this.uName = data.uname;
        this.openState = StateType.opening;
        this.isActive = true;
    };
    UIState.prototype.reset = function () {
        if (this.ui) {
            this.ui.close();
        }
        this.ui = null;
        this.uName = '';
        this.openState = StateType.close;
    };
    UIState.StateID = 0;
    return UIState;
}());
exports.UIState = UIState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL1VJU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBRWpCLDJDQUFLLENBQUE7SUFDTCwrQ0FBTyxDQUFBO0lBQ1AseUNBQUksQ0FBQSxDQUFHLE1BQU07QUFDakIsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCO0FBRUQ7O0dBRUc7QUFDSDtJQU9JO1FBSEEsVUFBSyxHQUFVLENBQUMsQ0FBQztRQUtiLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCx5QkFBTyxHQUFQLFVBQVEsSUFBSTtRQUVSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFFSSxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQXBCTSxlQUFPLEdBQVUsQ0FBQyxDQUFDO0lBcUI5QixjQUFDO0NBM0JELEFBMkJDLElBQUE7QUEzQlksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVBhbmVsIGZyb20gXCIuL0Jhc2VQYW5lbFwiO1xuXG5leHBvcnQgZW51bSBTdGF0ZVR5cGVcbntcbiAgICBjbG9zZSwvL+WFs+mXreeKtuaAgVxuICAgIG9wZW5pbmcsLy/miZPlvIDkuK1cbiAgICBvcGVuICAgLy/lrozlhajmiZPlvIBcbn1cblxuLyoqXG4gKiB1aeeKtuaAgVxuICovXG5leHBvcnQgY2xhc3MgVUlTdGF0ZSB7XG4gICAgdU5hbWU6c3RyaW5nOy8vdWnlkI3np7BcbiAgICBvcGVuU3RhdGU6U3RhdGVUeXBlOy8v5omT5byA54q25oCBIDAg5YWz6ZetICAx5q2j5Zyo5omT5byA5LitKOWKoOi9veS4re+8jOaIluiAheWKqOeUu+S4rSkgICAgMuWujOWFqOaJk+W8gFxuICAgIGlzQWN0aXZlOmJvb2xlYW47Ly/lvZPliY3ov5nkuKrlr7nosaHmmK/lkKblj6/ku6Xkvb/nlKgg55So5LqO5a+56LGh5rGgXG4gICAgdWluSWQ6bnVtYmVyID0gMDtcbiAgICB1aTpCYXNlUGFuZWw7XG4gICAgc3RhdGljIFN0YXRlSUQ6bnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLnVpbklkID0gVUlTdGF0ZS5TdGF0ZUlEKys7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSlcbiAgICB7XG4gICAgICAgIHRoaXMudU5hbWUgPSBkYXRhLnVuYW1lO1xuICAgICAgICB0aGlzLm9wZW5TdGF0ZSA9IFN0YXRlVHlwZS5vcGVuaW5nO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNldCgpXG4gICAge1xuICAgICAgICBpZiAodGhpcy51aSkge1xuICAgICAgICAgICAgdGhpcy51aS5jbG9zZSgpOyAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpID0gbnVsbDtcbiAgICAgICAgdGhpcy51TmFtZSA9ICcnO1xuICAgICAgICB0aGlzLm9wZW5TdGF0ZSA9IFN0YXRlVHlwZS5jbG9zZTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/TopUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd06c0350WlFqoxRPOQCbopS', 'TopUIEffect');
// src/framework/ui/effect/TopUIEffect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUIEffect_1 = require("../BaseUIEffect");
var TopUIEffect = /** @class */ (function (_super) {
    __extends(TopUIEffect, _super);
    function TopUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        if (isOpen) {
            if (!!handler) {
                handler.call(node);
            }
        }
        else {
            var size = cc.view.getVisibleSize();
            node.opacity = 0;
            node.y = size.height / 2;
            var action = cc.spawn(cc.fadeIn(time), cc.moveTo(time, 0, 0).easing(cc.easeBackOut()));
            node.runAction(cc.sequence(action, cc.callFunc(function () { node.x = 0; node.y = 0; if (!!handler) {
                handler.call(node);
            } })));
        }
    };
    return TopUIEffect;
}(BaseUIEffect_1.default));
exports.default = TopUIEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9Ub3BVSUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBMkM7QUFFM0M7SUFBeUMsK0JBQVk7SUFBckQ7O0lBc0JBLENBQUM7SUFwQkcseUJBQUcsR0FBSCxVQUFJLElBQVksRUFBQyxJQUFXLEVBQUMsTUFBYyxFQUFDLE9BQWU7UUFFdkQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUcsTUFBTSxFQUNUO1lBQ0ksSUFBRyxDQUFDLENBQUMsT0FBTyxFQUNaO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7U0FDSjthQUVEO1lBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBQztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEg7SUFFTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxDQXRCd0Msc0JBQVksR0FzQnBEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uLy4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IEJhc2VVSUVmZmVjdCBmcm9tIFwiLi4vQmFzZVVJRWZmZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFVJRWZmZWN0IGV4dGVuZHMgQmFzZVVJRWZmZWN0e1xuICAgIFxuICAgIHJ1bihub2RlOmNjLk5vZGUsdGltZTpudW1iZXIsaXNPcGVuOmJvb2xlYW4saGFuZGxlcjpIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgdGltZSA9IHRpbWUgfHwgdGhpcy50aW1lO1xuICAgICAgICBpZihpc09wZW4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCEhaGFuZGxlcilcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKG5vZGUpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIG5vZGUueSA9IHNpemUuaGVpZ2h0LzI7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc3Bhd24oY2MuZmFkZUluKHRpbWUpLGNjLm1vdmVUbyh0aW1lLDAsMCkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbixjYy5jYWxsRnVuYygoKT0+eyBub2RlLnggPSAwO25vZGUueSA9IDA7IGlmKCEhaGFuZGxlcil7IGhhbmRsZXIuY2FsbChub2RlKTsgfSB9KSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/ScaleUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4730ewKYf5GuaUMZwsnLaTC', 'ScaleUIEffect');
// src/framework/ui/effect/ScaleUIEffect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUIEffect_1 = require("../BaseUIEffect");
var ScaleUIEffect = /** @class */ (function (_super) {
    __extends(ScaleUIEffect, _super);
    function ScaleUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScaleUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        node.scale = 0;
        node.runAction(cc.sequence(cc.scaleTo(time, 1, 1).easing(cc.easeBackOut()), cc.callFunc(function () { if (!!handler) {
            handler.call(node);
        } })));
    };
    return ScaleUIEffect;
}(BaseUIEffect_1.default));
exports.default = ScaleUIEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9TY2FsZVVJRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdEQUEyQztBQUUzQztJQUEyQyxpQ0FBWTtJQUF2RDs7SUFTQSxDQUFDO0lBUEcsMkJBQUcsR0FBSCxVQUFJLElBQVksRUFBQyxJQUFXLEVBQUMsTUFBYyxFQUFDLE9BQWU7UUFFdkQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFNLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBQztZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6SSxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUMEMsc0JBQVksR0FTdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vLi4vYmFzZS9IYW5kbGVyXCI7XG5pbXBvcnQgQmFzZVVJRWZmZWN0IGZyb20gXCIuLi9CYXNlVUlFZmZlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGVVSUVmZmVjdCBleHRlbmRzIEJhc2VVSUVmZmVjdHtcbiAgICBcbiAgICBydW4obm9kZTpjYy5Ob2RlLHRpbWU6bnVtYmVyLGlzT3Blbjpib29sZWFuLGhhbmRsZXI6SGFuZGxlcilcbiAgICB7XG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IHRoaXMudGltZTtcbiAgICAgICAgbm9kZS5zY2FsZSA9IDA7XG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8odGltZSwxLDEpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSxjYy5jYWxsRnVuYygoKT0+eyBpZighIWhhbmRsZXIpeyBoYW5kbGVyLmNhbGwobm9kZSk7IH0gfSkpKTtcbiAgICAgICAgXG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/FadeUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bbbbXHPUZBeaWRJIeUNPAv', 'FadeUIEffect');
// src/framework/ui/effect/FadeUIEffect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUIEffect_1 = require("../BaseUIEffect");
var FadeUIEffect = /** @class */ (function (_super) {
    __extends(FadeUIEffect, _super);
    function FadeUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        if (isOpen) {
            node.opacity = 0;
            node.runAction(cc.sequence(cc.fadeTo(time, 255), cc.callFunc(function () { if (!!handler) {
                handler.call(node);
            } })));
        }
        else {
            node.runAction(cc.sequence(cc.fadeIn(time), cc.callFunc(function () { if (!!handler) {
                handler.call(node);
            } })));
        }
    };
    return FadeUIEffect;
}(BaseUIEffect_1.default));
exports.default = FadeUIEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9GYWRlVUlFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBRzNDO0lBQTBDLGdDQUFZO0lBQXREOztJQWVBLENBQUM7SUFiRywwQkFBRyxHQUFILFVBQUksSUFBWSxFQUFDLElBQVcsRUFBQyxNQUFjLEVBQUMsT0FBZTtRQUV2RCxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBRyxNQUFNLEVBQ1Q7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBRSxjQUFNLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBQztnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEg7YUFFRDtZQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUUsY0FBTSxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUM7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVHO0lBQ0wsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FmQSxBQWVDLENBZnlDLHNCQUFZLEdBZXJEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSUVmZmVjdCBmcm9tIFwiLi4vQmFzZVVJRWZmZWN0XCI7XG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vLi4vYmFzZS9IYW5kbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhZGVVSUVmZmVjdCBleHRlbmRzIEJhc2VVSUVmZmVjdHtcbiAgICBcbiAgICBydW4obm9kZTpjYy5Ob2RlLHRpbWU6bnVtYmVyLGlzT3Blbjpib29sZWFuLGhhbmRsZXI6SGFuZGxlcilcbiAgICB7XG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IHRoaXMudGltZTtcbiAgICAgICAgaWYoaXNPcGVuKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZVRvKHRpbWUsMjU1KSxjYy5jYWxsRnVuYyggKCk9PnsgaWYoISFoYW5kbGVyKXsgaGFuZGxlci5jYWxsKG5vZGUpOyB9IH0gKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKHRpbWUpLGNjLmNhbGxGdW5jKCAoKT0+eyBpZighIWhhbmRsZXIpeyBoYW5kbGVyLmNhbGwobm9kZSk7IH0gfSApKSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/TopBackUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c251I3Mj5G+qlPeX7akbDR', 'TopBackUIEffect');
// src/framework/ui/effect/TopBackUIEffect.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUIEffect_1 = require("../BaseUIEffect");
var TopBackUIEffect = /** @class */ (function (_super) {
    __extends(TopBackUIEffect, _super);
    function TopBackUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopBackUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        if (isOpen) {
            if (!!handler) {
                handler.call(node);
            }
        }
        else {
            var size_1 = cc.view.getVisibleSize();
            var action = cc.spawn(cc.fadeIn(time), cc.moveTo(time, 0, size_1.height).easing(cc.easeBackIn()));
            node.runAction(cc.sequence(action, cc.callFunc(function () { node.x = 0; node.y = size_1.height; if (!!handler) {
                handler.call(node);
            } })));
        }
    };
    return TopBackUIEffect;
}(BaseUIEffect_1.default));
exports.default = TopBackUIEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9Ub3BCYWNrVUlFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQTJDO0FBRTNDO0lBQTZDLG1DQUFZO0lBQXpEOztJQW9CQSxDQUFDO0lBbEJHLDZCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsSUFBVyxFQUFDLE1BQWMsRUFBQyxPQUFlO1FBRXZELElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFHLE1BQU0sRUFDVDtZQUNJLElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFDWjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1NBQ0o7YUFFRDtZQUNJLElBQUksTUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUM7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xJO0lBRUwsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsQ0FwQjRDLHNCQUFZLEdBb0J4RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYW5kbGVyIGZyb20gXCIuLi8uLi9iYXNlL0hhbmRsZXJcIjtcbmltcG9ydCBCYXNlVUlFZmZlY3QgZnJvbSBcIi4uL0Jhc2VVSUVmZmVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BCYWNrVUlFZmZlY3QgZXh0ZW5kcyBCYXNlVUlFZmZlY3R7XG4gICAgXG4gICAgcnVuKG5vZGU6Y2MuTm9kZSx0aW1lOm51bWJlcixpc09wZW46Ym9vbGVhbixoYW5kbGVyOkhhbmRsZXIpXG4gICAge1xuICAgICAgICB0aW1lID0gdGltZSB8fCB0aGlzLnRpbWU7XG4gICAgICAgIGlmKGlzT3BlbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoISFoYW5kbGVyKVxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwobm9kZSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc3Bhd24oY2MuZmFkZUluKHRpbWUpLGNjLm1vdmVUbyh0aW1lLDAsc2l6ZS5oZWlnaHQpLmVhc2luZyhjYy5lYXNlQmFja0luKCkpKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbixjYy5jYWxsRnVuYygoKT0+eyBub2RlLnggPSAwO25vZGUueSA9IHNpemUuaGVpZ2h0OyBpZighIWhhbmRsZXIpeyBoYW5kbGVyLmNhbGwobm9kZSk7IH0gfSkpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/message/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33357t/CClBoqVRr7ujenC/', 'EventType');
// src/framework/message/EventType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType = /** @class */ (function () {
    function EventType() {
    }
    EventType.UPDATE_MONEY = "update_money"; // 更新钱数
    EventType.configComplete = "configComplete"; // 配置加载完成
    return EventType;
}());
exports.EventType = EventType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFHQSxDQUFDO0lBRlUsc0JBQVksR0FBRyxjQUFjLENBQUMsQ0FBRyxPQUFPO0lBQ3hDLHdCQUFjLEdBQUcsZ0JBQWdCLENBQUMsQ0FBRyxTQUFTO0lBQ3pELGdCQUFDO0NBSEQsQUFHQyxJQUFBO0FBSFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnRUeXBlIHtcbiAgICBzdGF0aWMgVVBEQVRFX01PTkVZID0gXCJ1cGRhdGVfbW9uZXlcIjsgICAvLyDmm7TmlrDpkrHmlbBcbiAgICBzdGF0aWMgY29uZmlnQ29tcGxldGUgPSBcImNvbmZpZ0NvbXBsZXRlXCI7ICAgLy8g6YWN572u5Yqg6L295a6M5oiQXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/effect/FadeBackUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57e67CJg3hIG5hT7vhXRknh', 'FadeBackUIEffect');
// src/framework/ui/effect/FadeBackUIEffect.ts

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
var BaseUIEffect_1 = require("../BaseUIEffect");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FadeBackUIEffect = /** @class */ (function (_super) {
    __extends(FadeBackUIEffect, _super);
    function FadeBackUIEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeBackUIEffect.prototype.run = function (node, time, isOpen, handler) {
        time = time || this.time;
        node.runAction(cc.sequence(cc.fadeOut(time), cc.callFunc(function () { if (!!handler) {
            handler.call(node);
        } })));
    };
    FadeBackUIEffect = __decorate([
        ccclass
    ], FadeBackUIEffect);
    return FadeBackUIEffect;
}(BaseUIEffect_1.default));
exports.default = FadeBackUIEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL2VmZmVjdC9GYWRlQmFja1VJRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDs7SUFPQSxDQUFDO0lBTEcsOEJBQUcsR0FBSCxVQUFJLElBQVksRUFBQyxJQUFXLEVBQUMsTUFBYyxFQUFDLE9BQWU7UUFFdkQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUUsY0FBTSxJQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUM7WUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQUUsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQU5nQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQU9wQztJQUFELHVCQUFDO0NBUEQsQUFPQyxDQVA2QyxzQkFBWSxHQU96RDtrQkFQb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uLy4uL2Jhc2UvSGFuZGxlclwiO1xuaW1wb3J0IEJhc2VVSUVmZmVjdCBmcm9tIFwiLi4vQmFzZVVJRWZmZWN0XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFkZUJhY2tVSUVmZmVjdCBleHRlbmRzIEJhc2VVSUVmZmVjdHtcbiAgICBcbiAgICBydW4obm9kZTpjYy5Ob2RlLHRpbWU6bnVtYmVyLGlzT3Blbjpib29sZWFuLGhhbmRsZXI6SGFuZGxlcilcbiAgICB7XG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IHRoaXMudGltZTtcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZU91dCh0aW1lKSxjYy5jYWxsRnVuYyggKCk9PnsgaWYoISFoYW5kbGVyKXsgaGFuZGxlci5jYWxsKG5vZGUpOyB9IH0gKSkpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/base/Handler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'beb2eNp2VNBuJ/EFm4M42b8', 'Handler');
// src/framework/base/Handler.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = /** @class */ (function () {
    function Handler(fun, host, once) {
        if (once === void 0) { once = true; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this.active = true;
        this.callBack = fun;
        this.host = host;
        this.args = args;
        this.once = once;
        this.id = Handler.index + 1;
    }
    /**
     * 创建回调句柄
     * @param fun 回调函数
     * @param host 函数指向
     * @param isOnce 是否调用一次后释放
     */
    Handler.create = function (fun, host, isOnce) {
        if (isOnce === void 0) { isOnce = true; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        var len = Handler.handler_cache.length;
        for (var i = 0; i < len; i++) {
            if (!Handler.handler_cache[i].active) {
                Handler.handler_cache[i].active = true;
                Handler.handler_cache[i].callBack = fun;
                Handler.handler_cache[i].host = host;
                if (!host.hasOwnProperty('hostUuid')) {
                    host.hostUuid = Handler.hostUUID++;
                }
                if (!!args) {
                    Handler.handler_cache[i].args = args;
                }
                else {
                    !!Handler.handler_cache[i].args ? Handler.handler_cache[i].args.length = 0 : Handler.handler_cache[i].args = [];
                }
                Handler.handler_cache[i].once = isOnce;
                return Handler.handler_cache[i];
            }
        }
        var handler = new (Handler.bind.apply(Handler, __spreadArrays([void 0, fun, host, isOnce], args)))();
        if (!host.hasOwnProperty('hostUuid')) {
            host.hostUuid = Handler.hostUUID++;
        }
        Handler.handler_cache.push(handler);
        return handler;
    };
    /**
     * 释放当前host上的所有handler
     * @param host
     */
    Handler.releaseByHost = function (host) {
        if (!!host) {
            var len = Handler.handler_cache.length;
            for (var i = 0; i < len; i++) {
                if (!!Handler.handler_cache[i].host) {
                    if (host.hostUuid === Handler.handler_cache[i].host.hostUuid) {
                        Handler.handler_cache[i].active = false;
                        Handler.handler_cache[i].host = null;
                        Handler.handler_cache[i].callBack = null;
                    }
                }
            }
        }
    };
    /**
     * 是否host 当前正在拥有这个handler
     * @param host
     */
    Handler.prototype.isHostOwn = function (host) {
        if (!!host && host.hasOwnProperty('hostUuid')) {
            if (!!this.host) {
                if (this.host.hostUuid === host.hostUuid) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * 调用handler
     * @param args
     */
    Handler.prototype.call = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!!this.host) {
            for (var i = 0; i < this.args.length; i++) {
                args.push(this.args[i]);
            }
            var result = this.callBack.apply(this.host, args);
            if (this.once) {
                this.active = false;
                this.callBack = null;
                this.host = null;
            }
            return result;
        }
        else {
            cc.error("handler 调用时 this 对象不存在:" + this.callBack);
        }
    };
    Handler.prototype.equal = function (handler) {
        if (!!handler && this.id === handler.id) {
            return true;
        }
        return false;
    };
    /**
     * 释放当前handler
     */
    Handler.prototype.release = function () {
        this.host = null;
        this.callBack = null;
        this.args.length = 0;
        this.active = false;
    };
    Handler.index = 0;
    Handler.handler_cache = [];
    Handler.hostUUID = 1000;
    return Handler;
}());
exports.default = Handler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL2Jhc2UvSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQVlJLGlCQUFvQixHQUFZLEVBQUMsSUFBUSxFQUFDLElBQW1CO1FBQW5CLHFCQUFBLEVBQUEsV0FBbUI7UUFBQyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLDZCQUFPOztRQVA3RCxXQUFNLEdBQVcsSUFBSSxDQUFDO1FBUTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksY0FBTSxHQUFiLFVBQWMsR0FBWSxFQUFDLElBQVEsRUFBQyxNQUFvQjtRQUFwQix1QkFBQSxFQUFBLGFBQW9CO1FBQUMsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDNUQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFDdEI7WUFDSSxJQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQ25DO2dCQUNJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdkMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcs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SUFoSWMsYUFBSyxHQUFVLENBQUMsQ0FBQztJQUNqQixxQkFBYSxHQUFrQixFQUFFLENBQUM7SUFDbEMsZ0JBQVEsR0FBVSxJQUFJLENBQUM7SUErSDFDLGNBQUM7Q0F6SUQsQUF5SUMsSUFBQTtrQkF6SW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZXJcbntcbiAgICBwcml2YXRlIGNhbGxCYWNrOkZ1bmN0aW9uO1xuICAgIHByaXZhdGUgaG9zdDphbnk7XG4gICAgcHJpdmF0ZSBhcmdzOkFycmF5PGFueT47XG4gICAgcHJpdmF0ZSBhY3RpdmU6Ym9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBpZDpudW1iZXI7XG4gICAgcHJpdmF0ZSBvbmNlOmJvb2xlYW47XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5kZXg6bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHN0YXRpYyBoYW5kbGVyX2NhY2hlOkFycmF5PEhhbmRsZXI+ID0gW107XG4gICAgcHJpdmF0ZSBzdGF0aWMgaG9zdFVVSUQ6bnVtYmVyID0gMTAwMDtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZnVuOkZ1bmN0aW9uLGhvc3Q6YW55LG9uY2U6Ym9vbGVhbiA9IHRydWUsLi4uYXJncyl7XG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBmdW47XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMub25jZSA9IG9uY2U7XG4gICAgICAgIHRoaXMuaWQgPSBIYW5kbGVyLmluZGV4ICsgMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rlm57osIPlj6Xmn4RcbiAgICAgKiBAcGFyYW0gZnVuIOWbnuiwg+WHveaVsFxuICAgICAqIEBwYXJhbSBob3N0IOWHveaVsOaMh+WQkVxuICAgICAqIEBwYXJhbSBpc09uY2Ug5piv5ZCm6LCD55So5LiA5qyh5ZCO6YeK5pS+XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZShmdW46RnVuY3Rpb24saG9zdDphbnksaXNPbmNlOmJvb2xlYW49IHRydWUsLi4uYXJncyl7XG4gICAgICAgIGxldCBsZW4gPSBIYW5kbGVyLmhhbmRsZXJfY2FjaGUubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBsZW47IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZighSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uY2FsbEJhY2sgPSBmdW47XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5ob3N0ID0gaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFob3N0Lmhhc093blByb3BlcnR5KCdob3N0VXVpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0Lmhvc3RVdWlkID0gSGFuZGxlci5ob3N0VVVJRCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKCEhYXJncylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmFyZ3MgPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgISFIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYXJncyA/IEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5hcmdzLmxlbmd0aCA9IDAgOiBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5vbmNlID0gaXNPbmNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gbmV3IEhhbmRsZXIoZnVuLGhvc3QsaXNPbmNlLC4uLmFyZ3MpO1xuICAgICAgICAgICAgaWYgKCFob3N0Lmhhc093blByb3BlcnR5KCdob3N0VXVpZCcpKSB7XG4gICAgICAgICAgICAgICAgaG9zdC5ob3N0VXVpZCA9IEhhbmRsZXIuaG9zdFVVSUQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEhhbmRsZXIuaGFuZGxlcl9jYWNoZS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOmHiuaUvuW9k+WJjWhvc3TkuIrnmoTmiYDmnIloYW5kbGVyXG4gICAgICogQHBhcmFtIGhvc3QgXG4gICAgICovXG4gICAgc3RhdGljIHJlbGVhc2VCeUhvc3QoaG9zdDphbnkpe1xuICAgICAgICBpZiAoISFob3N0KSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gSGFuZGxlci5oYW5kbGVyX2NhY2hlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhSGFuZGxlci5oYW5kbGVyX2NhY2hlW2ldLmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3QuaG9zdFV1aWQgPT09IEhhbmRsZXIuaGFuZGxlcl9jYWNoZVtpXS5ob3N0Lmhvc3RVdWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uaG9zdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kbGVyLmhhbmRsZXJfY2FjaGVbaV0uY2FsbEJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5piv5ZCmaG9zdCDlvZPliY3mraPlnKjmi6XmnInov5nkuKpoYW5kbGVyXG4gICAgICogQHBhcmFtIGhvc3QgXG4gICAgICovXG4gICAgaXNIb3N0T3duKGhvc3QpXG4gICAge1xuICAgICAgICBpZiAoISFob3N0ICYmIGhvc3QuaGFzT3duUHJvcGVydHkoJ2hvc3RVdWlkJykpIHtcbiAgICAgICAgICAgIGlmICghIXRoaXMuaG9zdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhvc3QuaG9zdFV1aWQgPT09IGhvc3QuaG9zdFV1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDosIPnlKhoYW5kbGVyXG4gICAgICogQHBhcmFtIGFyZ3MgXG4gICAgICovXG4gICAgY2FsbCguLi5hcmdzKVxuICAgIHtcbiAgICAgICAgaWYoISF0aGlzLmhvc3QpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuYXJnc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5jYWxsQmFjay5hcHBseSh0aGlzLmhvc3QsYXJncyk7XG4gICAgICAgICAgICBpZih0aGlzLm9uY2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiaGFuZGxlciDosIPnlKjml7YgdGhpcyDlr7nosaHkuI3lrZjlnKg6XCIrdGhpcy5jYWxsQmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXF1YWwoaGFuZGxlcjpIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgaWYgKCEhaGFuZGxlciAmJiB0aGlzLmlkID09PSBoYW5kbGVyLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeK5pS+5b2T5YmNaGFuZGxlclxuICAgICAqL1xuICAgIHJlbGVhc2UoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ob3N0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuYXJncy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/sdk/Launcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f060aGxAWpF3ozluLB0qGpk', 'Launcher');
// src/framework/sdk/Launcher.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseSdk_1 = require("./BaseSdk");
var Launcher = /** @class */ (function (_super) {
    __extends(Launcher, _super);
    function Launcher() {
        var _this = _super.call(this) || this;
        console.log("SDK ------------------------------------------>Launcher complete");
        return _this;
    }
    //服务器时间
    Launcher.prototype.getServerTime = function () {
        var time;
        if (this.isAndroid()) {
            console.log("安卓设备", this._basePath_android);
            time = jsb.reflection.callStaticMethod(this._basePath_android, "getCurrentTime", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
            console.log("苹果设备");
        }
        else {
            console.log("未识别设备");
        }
        console.log("服务器时间为", time);
        return time;
    };
    //用户余额
    Launcher.prototype.getUserAmount = function () {
        var m = 0;
        if (this.isAndroid()) {
            m = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserAmount", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        if (!m) {
            m = 0;
        }
        this.systemName();
        console.log("********************用户余额********************", m);
        return m;
    };
    //通关总数
    Launcher.prototype.getSUCCCount = function () {
        var c = 0;
        if (this.isAndroid()) {
            c = jsb.reflection.callStaticMethod(this._moudelPath_android, "getSUCCCount", "()I");
        }
        else if (this.isIphone()) {
        }
        return c;
    };
    //合成上报
    Launcher.prototype.reportSynthetic = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "reportSynthetic", "()V");
        }
        else if (this.isIphone()) {
        }
        this.systemName();
        console.log("******************合成上报******************");
        this.vibrate(100);
    };
    //领红包奖励接口
    Launcher.prototype.getRedPacketReward = function (configId, isVideo) {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getRedPacketReward", "(Ljava/lang/String;Z)V", configId, isVideo);
        }
        else if (this.isIphone()) {
        }
        this.systemName();
        console.log("******************领红包****************** ID", configId, "  isVideo ", isVideo);
    };
    //获取任务金额和状态
    Launcher.prototype.getTaskListData = function () {
        var t = "";
        if (this.isAndroid()) {
            t = jsb.reflection.callStaticMethod(this._moudelPath_android, "getTaskListData", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        // TaskManager.
        console.log("******************任务金额和状态******************", t);
        return t;
    };
    //任务展示
    Launcher.prototype.getTaskInfo = function (taskId) {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getTaskInfo", "(I)V", taskId);
        }
        else if (this.isIphone()) {
        }
        console.log("******************任务展示******************", taskId);
    };
    //任务领取奖励
    Launcher.prototype.getTaskReward = function (taskId) {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "getTaskReward", "(I)V", taskId);
        }
        else if (this.isIphone()) {
        }
        console.log("******************任务展示******************", taskId);
    };
    //气泡提示信息
    Launcher.prototype.getGuideBubblesText = function () {
        var b = "";
        if (this.isAndroid()) {
            b = jsb.reflection.callStaticMethod(this._moudelPath_android, "getGuideBubblesText", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        return b;
    };
    //下次抽奖需要的分数
    Launcher.prototype.getNextDrawScore = function () {
        var s = 0;
        if (this.isAndroid()) {
            s = jsb.reflection.callStaticMethod(this._moudelPath_android, "getNextDrawScore", "()I");
            console.log("下次需要的", s);
        }
        else if (this.isIphone()) {
        }
        return s;
    };
    //提现抽奖的当前分数
    Launcher.prototype.getCurrentScore = function () {
        var s = 0;
        if (this.isAndroid()) {
            s = jsb.reflection.callStaticMethod(this._moudelPath_android, "getCurrentScore", "()I");
            console.log("当前的", s);
        }
        else if (this.isIphone()) {
        }
        return s;
    };
    //微信是否登录
    Launcher.prototype.isWXBind = function () {
        var i = false;
        if (this.isAndroid()) {
            i = jsb.reflection.callStaticMethod(this._moudelPath_android, "isWXBind", "()Z");
        }
        else if (this.isIphone()) {
        }
        return i;
    };
    //退出微信登录
    Launcher.prototype.unBindWX = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "unBindWX", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //用户昵称
    Launcher.prototype.getUserNickName = function () {
        var n = undefined;
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserNickName", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        return n;
    };
    //用户头像
    Launcher.prototype.getUserIcon = function () {
        var n = "";
        if (this.isAndroid()) {
            n = jsb.reflection.callStaticMethod(this._moudelPath_android, "getUserIcon", "()Ljava/lang/String;");
        }
        else if (this.isIphone()) {
        }
        return n;
    };
    //隐私政策
    Launcher.prototype.openPrivacy = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openPrivacy", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //用户协议
    Launcher.prototype.openUserService = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openUserService", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //意见反馈
    Launcher.prototype.openFeedBack = function () {
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openFeedBack", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //打开提现页面
    Launcher.prototype.openWithdraw = function () {
        console.log("*************************打开提现界面*************************");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._moudelPath_android, "openWithdraw", "()V");
        }
        else if (this.isIphone()) {
        }
    };
    //震动
    Launcher.prototype.vibrate = function (time) {
        console.log("*************************震动效果*************************");
        if (this.isAndroid()) {
            jsb.reflection.callStaticMethod(this._baseCocos, "vibrate", "(I)V", time);
        }
        else {
        }
    };
    //测试接口
    Launcher.prototype.testResult = function () {
        var test = "";
        if (this.isAndroid()) {
            var test2 = jsb.reflection.callStaticMethod(this._moudelPath_android, "testResult", "()Ljava/lang/String;");
            console.log("*************************测试接口*****************2222222222222********", test);
        }
        else if (this.isIphone()) {
        }
        console.log("*************************测试接口*************************", test);
        return test;
    };
    return Launcher;
}(BaseSdk_1.default));
exports.default = Launcher;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Nkay9MYXVuY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFFaEM7SUFBdUIsNEJBQU87SUFDMUI7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxPQUFPLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7O0lBQ3BGLENBQUM7SUFDRCxPQUFPO0lBQ1AsZ0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDMUc7YUFBSyxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO2FBQUk7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELE1BQU07SUFDTixnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUM7WUFDaEIsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3hHO2FBQUssSUFBRyxJQUFJ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QUFELENBM05BLEFBMk5DLENBM05zQixpQkFBTyxHQTJON0I7QUFDRCxrQkFBZSxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNkayBmcm9tIFwiLi9CYXNlU2RrXCI7XG5cbmNsYXNzIExhdW5jaGVyIGV4dGVuZHMgQmFzZVNkayB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU0RLIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLT5MYXVuY2hlciBjb21wbGV0ZVwiKTsgICAgICAgIFxuICAgIH1cbiAgICAvL+acjeWKoeWZqOaXtumXtFxuICAgIGdldFNlcnZlclRpbWUoKXtcbiAgICAgICAgbGV0IHRpbWU7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlronljZPorr7lpIdcIix0aGlzLl9iYXNlUGF0aF9hbmRyb2lkKTtcbiAgICAgICAgICAgIHRpbWUgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX2Jhc2VQYXRoX2FuZHJvaWQsXCJnZXRDdXJyZW50VGltZVwiLFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiLueaenOiuvuWkh1wiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacquivhuWIq+iuvuWkh1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIuacjeWKoeWZqOaXtumXtOS4ulwiLHRpbWUpO1xuICAgICAgICByZXR1cm4gdGltZTtcbiAgICB9XG4gICAgLy/nlKjmiLfkvZnpop1cbiAgICBnZXRVc2VyQW1vdW50KCl7XG4gICAgICAgIGxldCBtID0gMDtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBtID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJnZXRVc2VyQW1vdW50XCIsXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKXtcblxuICAgICAgICB9XG4gICAgICAgIGlmKCFtKXtcbiAgICAgICAgICAgIG0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3lzdGVtTmFtZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioq55So5oi35L2Z6aKdKioqKioqKioqKioqKioqKioqKipcIixtKTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuICAgIC8v6YCa5YWz5oC75pWwXG4gICAgZ2V0U1VDQ0NvdW50KCl7XG4gICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBjID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJnZXRTVUNDQ291bnRcIixcIigpSVwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKXtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICAvL+WQiOaIkOS4iuaKpVxuICAgIHJlcG9ydFN5bnRoZXRpYygpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwicmVwb3J0U3ludGhldGljXCIsXCIoKVZcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN5c3RlbU5hbWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirlkIjmiJDkuIrmiqUqKioqKioqKioqKioqKioqKipcIik7XG4gICAgICAgIHRoaXMudmlicmF0ZSgxMDApO1xuICAgIH1cbiAgICAvL+mihue6ouWMheWlluWKseaOpeWPo1xuICAgIGdldFJlZFBhY2tldFJld2FyZChjb25maWdJZDpzdHJpbmcsaXNWaWRlbyA6IGJvb2xlYW4pe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwiZ2V0UmVkUGFja2V0UmV3YXJkXCIsXCIoTGphdmEvbGFuZy9TdHJpbmc7WilWXCIsY29uZmlnSWQsaXNWaWRlbyk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN5c3RlbU5hbWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirpoobnuqLljIUqKioqKioqKioqKioqKioqKiogSURcIixjb25maWdJZCxcIiAgaXNWaWRlbyBcIixpc1ZpZGVvKTtcbiAgICB9XG4gICAgLy/ojrflj5bku7vliqHph5Hpop3lkoznirbmgIFcbiAgICBnZXRUYXNrTGlzdERhdGEoKXtcbiAgICAgICAgbGV0IHQgPSBcIlwiO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIHQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFRhc2tMaXN0RGF0YVwiLFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gVGFza01hbmFnZXIuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioq5Lu75Yqh6YeR6aKd5ZKM54q25oCBKioqKioqKioqKioqKioqKioqXCIsdCk7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cbiAgICAvL+S7u+WKoeWxleekulxuICAgIGdldFRhc2tJbmZvKHRhc2tJZDpudW1iZXIpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwiZ2V0VGFza0luZm9cIixcIihJKVZcIix0YXNrSWQpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioq5Lu75Yqh5bGV56S6KioqKioqKioqKioqKioqKioqXCIsdGFza0lkKTtcbiAgICB9XG4gICAgLy/ku7vliqHpooblj5blpZblirFcbiAgICBnZXRUYXNrUmV3YXJkKHRhc2tJZDpudW1iZXIpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwiZ2V0VGFza1Jld2FyZFwiLFwiKEkpVlwiLHRhc2tJZCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKirku7vliqHlsZXnpLoqKioqKioqKioqKioqKioqKipcIix0YXNrSWQpO1xuICAgIH1cbiAgICAvL+awlOazoeaPkOekuuS/oeaBr1xuICAgIGdldEd1aWRlQnViYmxlc1RleHQoKXtcbiAgICAgICAgbGV0IGIgPSBcIlwiO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGIgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldEd1aWRlQnViYmxlc1RleHRcIixcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICAvL+S4i+asoeaKveWllumcgOimgeeahOWIhuaVsFxuICAgIGdldE5leHREcmF3U2NvcmUoKXtcbiAgICAgICAgbGV0IHMgPSAwO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIHMgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldE5leHREcmF3U2NvcmVcIixcIigpSVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiL5qyh6ZyA6KaB55qEXCIscyk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIC8v5o+Q546w5oq95aWW55qE5b2T5YmN5YiG5pWwXG4gICAgZ2V0Q3VycmVudFNjb3JlKCl7XG4gICAgICAgIGxldCBzID0gMDtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBzID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJnZXRDdXJyZW50U2NvcmVcIixcIigpSVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5b2T5YmN55qEXCIscyk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIC8v5b6u5L+h5piv5ZCm55m75b2VXG4gICAgaXNXWEJpbmQoKXtcbiAgICAgICAgbGV0IGkgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBpID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJpc1dYQmluZFwiLFwiKClaXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgICAvL+mAgOWHuuW+ruS/oeeZu+W9lVxuICAgIHVuQmluZFdYKCl7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJ1bkJpbmRXWFwiLFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8v55So5oi35pi156ewXG4gICAgZ2V0VXNlck5pY2tOYW1lKCl7XG4gICAgICAgIGxldCBuID0gdW5kZWZpbmVkO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIG4gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFVzZXJOaWNrTmFtZVwiLFwiKClMamF2YS9sYW5nL1N0cmluZztcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIC8v55So5oi35aS05YOPXG4gICAgZ2V0VXNlckljb24oKXtcbiAgICAgICAgbGV0IG4gPSBcIlwiO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIG4gPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcImdldFVzZXJJY29uXCIsXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKSB7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgLy/pmpDnp4HmlL/nrZZcbiAgICBvcGVuUHJpdmFjeSgpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwib3BlblByaXZhY3lcIixcIigpVlwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+eUqOaIt+WNj+iurlxuICAgIG9wZW5Vc2VyU2VydmljZSgpe1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fbW91ZGVsUGF0aF9hbmRyb2lkLFwib3BlblVzZXJTZXJ2aWNlXCIsXCIoKVZcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSkge1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/mhI/op4Hlj43ppohcbiAgICBvcGVuRmVlZEJhY2soKXtcbiAgICAgICAgaWYodGhpcy5pc0FuZHJvaWQoKSl7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKHRoaXMuX21vdWRlbFBhdGhfYW5kcm9pZCxcIm9wZW5GZWVkQmFja1wiLFwiKClWXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmlzSXBob25lKCkpIHtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8v5omT5byA5o+Q546w6aG16Z2iXG4gICAgb3BlbldpdGhkcmF3KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKuaJk+W8gOaPkOeOsOeVjOmdoioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJvcGVuV2l0aGRyYXdcIixcIigpVlwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5pc0lwaG9uZSgpKSB7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+mch+WKqFxuICAgIHZpYnJhdGUodGltZTpudW1iZXIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKirpnIfliqjmlYjmnpwqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xuICAgICAgICBpZih0aGlzLmlzQW5kcm9pZCgpKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QodGhpcy5fYmFzZUNvY29zLFwidmlicmF0ZVwiLFwiKEkpVlwiLHRpbWUpO1xuICAgICAgICB9ZWxzZXtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8v5rWL6K+V5o6l5Y+jXG4gICAgdGVzdFJlc3VsdCgpe1xuICAgICAgICBsZXQgdGVzdCA6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGlmKHRoaXMuaXNBbmRyb2lkKCkpe1xuICAgICAgICAgICAgbGV0IHRlc3QyID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9tb3VkZWxQYXRoX2FuZHJvaWQsXCJ0ZXN0UmVzdWx0XCIsXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKua1i+ivleaOpeWPoyoqKioqKioqKioqKioqKioqMjIyMjIyMjIyMjIyMioqKioqKioqXCIsdGVzdCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuaXNJcGhvbmUoKSl7XG5cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKirmtYvor5XmjqXlj6MqKioqKioqKioqKioqKioqKioqKioqKioqXCIsdGVzdCk7XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExhdW5jaGVyOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/BaseUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29d1ejPy4hAtZTNuaVToEwQ', 'BaseUIEffect');
// src/framework/ui/BaseUIEffect.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUIEffect = /** @class */ (function () {
    function BaseUIEffect(type) {
        this.time = 0.2;
        this.type = type;
    }
    BaseUIEffect.prototype.run = function (node, time, isOpen, handler) {
    };
    return BaseUIEffect;
}());
exports.default = BaseUIEffect;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VVSUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBR0ksc0JBQVksSUFBSTtRQURULFNBQUksR0FBVSxHQUFHLENBQUM7UUFHckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsSUFBVyxFQUFDLE1BQWMsRUFBQyxPQUFlO0lBRzNELENBQUM7SUFDTCxtQkFBQztBQUFELENBWkEsQUFZQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVUlFZmZlY3R7XG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xuICAgIHB1YmxpYyB0aW1lOm51bWJlciA9IDAuMjtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKVxuICAgIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBydW4obm9kZTpjYy5Ob2RlLHRpbWU6bnVtYmVyLGlzT3Blbjpib29sZWFuLGhhbmRsZXI6SGFuZGxlcilcbiAgICB7XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
        return _this;
    }
    BarragePrefab.prototype.setData = function () {
        var barrageData = DataManager_1.default.getJson("barrage");
        var data = barrageData[DataManager_1.default._barrageIndex];
        DataManager_1.default._barrageIndex++;
        if (DataManager_1.default._barrageIndex > 392) {
            DataManager_1.default._barrageIndex = 1;
        }
        this.nameLabel.string = data["name"];
        this.moneyLabel.string = data["money"] + "元";
        MkUtils_1.default.loadSpriteFrame("texture/barrage/" + data["headshot"], function (spriteFrame) {
            if (spriteFrame)
                this.headIcon.spriteFrame = spriteFrame;
        }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9CYXJyYWdlL0JhcnJhZ2VQcmVmYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELHlEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTZCQztRQTFCRyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWMsSUFBSSxDQUFDOztJQWtCOUIsQ0FBQztJQWhCRywrQkFBTyxHQUFQO1FBQ0ksSUFBSSxXQUFXLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDLHFCQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbEQscUJBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM1QixJQUFJLHFCQUFXLENBQUMsYUFBYSxHQUFHLEdBQUcsRUFBRTtZQUNqQyxxQkFBVyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUU3QyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsVUFBVSxXQUFXO1lBQ2pGLElBQUcsV0FBVztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUF6QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNPO0lBWFQsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTZCakM7SUFBRCxvQkFBQztDQTdCRCxBQTZCQyxDQTdCMEMsRUFBRSxDQUFDLFNBQVMsR0E2QnREO2tCQTdCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhcnJhZ2VQcmVmYWIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBoZWFkSWNvbiA6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIG5hbWVMYWJlbCA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbW9uZXlMYWJlbCA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZGVzY0xiMSA6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZGVzY0xiMiA6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHNldERhdGEoKXtcbiAgICAgICAgbGV0IGJhcnJhZ2VEYXRhID0gRGF0YU1hbmFnZXIuZ2V0SnNvbihcImJhcnJhZ2VcIik7XG4gICAgICAgIGxldCBkYXRhID0gYmFycmFnZURhdGFbRGF0YU1hbmFnZXIuX2JhcnJhZ2VJbmRleF07XG4gICAgICAgIFxuICAgICAgICBEYXRhTWFuYWdlci5fYmFycmFnZUluZGV4Kys7XG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5fYmFycmFnZUluZGV4ID4gMzkyKSB7XG4gICAgICAgICAgICBEYXRhTWFuYWdlci5fYmFycmFnZUluZGV4ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IGRhdGFbXCJuYW1lXCJdO1xuICAgICAgICB0aGlzLm1vbmV5TGFiZWwuc3RyaW5nID0gZGF0YVtcIm1vbmV5XCJdICsgXCLlhYNcIjtcblxuICAgICAgICBNS1V0aWxzLmxvYWRTcHJpdGVGcmFtZShcInRleHR1cmUvYmFycmFnZS9cIiArIGRhdGFbXCJoZWFkc2hvdFwiXSwgZnVuY3Rpb24gKHNwcml0ZUZyYW1lKSB7ICAvL1xuICAgICAgICAgICBpZihzcHJpdGVGcmFtZSkgdGhpcy5oZWFkSWNvbi5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9CYXJyYWdlL0JhcnJhZ2VMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQseURBQW9EO0FBQ3BELGlEQUE0QztBQUV0QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTRDQztRQTFDRyxpQkFBVyxHQUFlLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFZLENBQUMsQ0FBQztRQUMzQixnQkFBVSxHQUFZLENBQUMsQ0FBQzs7SUF1QzVCLENBQUM7SUF0Q0csNEJBQUssR0FBTDtRQUNJLE1BQU07UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxrQ0FBVyxHQUFYO1FBQUEsaUJBaUNDO1FBaENHLElBQUksV0FBVyxHQUFHLG9CQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9DLElBQUcsQ0FBQyxXQUFXLEVBQUM7WUFDWixXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxXQUFXLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDckYsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUM5RyxvQkFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEMsSUFBSSxLQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLEtBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO2dCQUN6QixJQUFJLFNBQVMsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2QsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQTthQUNoQjtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNKLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxJQUFJLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNYO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDVztJQUZkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0Q2hDO0lBQUQsbUJBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3lDLEVBQUUsQ0FBQyxTQUFTLEdBNENyRDtrQkE1Q29CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlNYW5hbmdlciBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlNYW5hbmdlclwiO1xuaW1wb3J0IE1LVXRpbHMgZnJvbSBcIi4uLy4uL2ZyYW1ld29yay90b29scy9Na1V0aWxzXCI7XG5pbXBvcnQgQmFycmFnZVByZWZhYiBmcm9tIFwiLi9CYXJyYWdlUHJlZmFiXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFycmFnZUxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJhcnJhZ2VOb2RlIDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIF9iYXJyYWdlSW5kZXggOiBudW1iZXIgPSAwO1xuICAgIF9hY3Rpb25OdW0gOiBudW1iZXIgPSAwO1xuICAgIHN0YXJ0KCl7XG4gICAgICAgIC8v5LiA56eS5LmL5ZCOXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuaW5pdEJhcnJhZ2UuYmluZCh0aGlzKSwxKTtcbiAgICB9XG4gICAgaW5pdEJhcnJhZ2UoKXtcbiAgICAgICAgbGV0IGJhcnJhZ2VOb2RlID0gVUlNYW5hbmdlci5iYXJyYWdlUG9vbC5nZXQoKTtcbiAgICAgICAgaWYoIWJhcnJhZ2VOb2RlKXtcbiAgICAgICAgICAgIGJhcnJhZ2VOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5iYXJyYWdlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgYmFycmFnZU5vZGUuZ2V0Q29tcG9uZW50KEJhcnJhZ2VQcmVmYWIpLnNldERhdGEoKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChiYXJyYWdlTm9kZSk7XG5cbiAgICAgICAgbGV0IHkxID0gdGhpcy5fYmFycmFnZUluZGV4ID09IDAgPyBjYy53aW5TaXplLmhlaWdodCAtIDUwMCA6IGNjLndpblNpemUuaGVpZ2h0IC0gNzAwO1xuICAgICAgICBsZXQgcCA9IGNjLnYyKDEzMzAseTEpO1xuICAgICAgICBiYXJyYWdlTm9kZS5zZXRQb3NpdGlvbihwKTtcbiAgICAgICAgYmFycmFnZU5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxMCwgMCwgYmFycmFnZU5vZGUueSksIGNjLm1vdmVUbyg1LCAtNjkwLCBiYXJyYWdlTm9kZS55KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgVUlNYW5hbmdlci5iYXJyYWdlUG9vbC5wdXQoYmFycmFnZU5vZGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbk51bSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aW9uTnVtKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2JhcnJhZ2VJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5VGltZSA9IE1LVXRpbHMucmFuZG9tTk0oMywgOCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYXJyYWdlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb25OdW0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRCYXJyYWdlKCk7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXlUaW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkpXG4gICAgICAgIGlmICh0aGlzLl9iYXJyYWdlSW5kZXggPT0gMCkge1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBNS1V0aWxzLnJhbmRvbU5NKDIsIDIwKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRCYXJyYWdlKCk7XG4gICAgICAgICAgICB9LCB0aW1lKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JhcnJhZ2VJbmRleCsrO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

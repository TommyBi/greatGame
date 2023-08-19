
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
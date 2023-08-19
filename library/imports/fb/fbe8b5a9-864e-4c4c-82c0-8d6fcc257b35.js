"use strict";
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
"use strict";
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
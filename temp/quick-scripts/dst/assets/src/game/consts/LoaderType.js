
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
    ModuleType["gameRes"] = "gameRes";
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
        'commonRes': { mname: 'commonRes', url: 'texture/common', isRelease: false },
        'gameRes': { mname: 'gameRes', url: 'texture/itemIcon1', isRelease: false },
    };
    LoaderType.prefabs = {
        itemIcon: { mname: 'itemIcon', url: 'prefab/main', isRelease: true },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb25zdHMvTG9hZGVyVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0Y7QUFDbEYsSUFBWSxVQUlYO0FBSkQsV0FBWSxVQUFVO0lBQ2xCLHFDQUF1QixDQUFBO0lBQ3ZCLGlDQUFtQixDQUFBO0FBRXZCLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQjtBQUNEO0lBQUE7SUEyQ0EsQ0FBQztJQTlCRyx1Q0FBdUM7SUFDaEMscUJBQVUsR0FBakI7UUFDSSxJQUFJLEdBQUcsQ0FBQztRQUNSLFFBQVE7UUFDUixLQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUN2QjtZQUNJLHVCQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELFVBQVU7UUFDVixLQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ3JCLHVCQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyRDtRQUVELFFBQVE7UUFDUix1QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksc0JBQVcsR0FBbEIsVUFBbUIsSUFBSTtRQUVuQixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNuQyx1QkFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUVMLENBQUM7SUF6Q00sZ0JBQUssR0FBWSxTQUFTLENBQUM7SUFDM0IsbUJBQVEsR0FBRztRQUNkLFdBQVcsRUFBQyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsR0FBRyxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUM7UUFDcEUsU0FBUyxFQUFDLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxHQUFHLEVBQUMsbUJBQW1CLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQztLQUN0RSxDQUFBO0lBRU0sa0JBQU8sR0FBRztRQUNiLFFBQVEsRUFBQyxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFDLGFBQWEsRUFBQyxTQUFTLEVBQUMsSUFBSSxFQUFDO0tBQy9ELENBQUE7SUFFTSxpQkFBTSxHQUFHLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsQ0FBQTtJQWdDaEUsaUJBQUM7Q0EzQ0QsQUEyQ0MsSUFBQTtrQkEzQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGVyTWFuYWdlciwgeyBtb2R1bGVEYXRhIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL0xvYWRlck1hbmFnZXJcIjtcclxuZXhwb3J0IGVudW0gTW9kdWxlVHlwZSB7XHJcbiAgICBjb21tb25SZXMgPSBcImNvbW1vblJlc1wiLFxyXG4gICAgZ2FtZVJlcyA9ICdnYW1lUmVzJyxcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlclR5cGUge1xyXG4gICAgc3RhdGljIFVJVVJMIDpzdHJpbmcgPSAgXCJwcmVmYWIvXCI7XHJcbiAgICBzdGF0aWMgdGV4dHVyZXMgPSB7XHJcbiAgICAgICAgJ2NvbW1vblJlcyc6e21uYW1lOidjb21tb25SZXMnLHVybDondGV4dHVyZS9jb21tb24nLGlzUmVsZWFzZTpmYWxzZX0sXHJcbiAgICAgICAgJ2dhbWVSZXMnOnttbmFtZTonZ2FtZVJlcycsdXJsOid0ZXh0dXJlL2l0ZW1JY29uMScsaXNSZWxlYXNlOmZhbHNlfSxcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIHByZWZhYnMgPSB7XHJcbiAgICAgICAgaXRlbUljb246e21uYW1lOidpdGVtSWNvbicsdXJsOidwcmVmYWIvbWFpbicsaXNSZWxlYXNlOnRydWV9LFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25maWcgPSB7bW5hbWU6J2NvbmZpZycsdXJsOidjb25maWcnLGlzUmVsZWFzZTp0cnVlfVxyXG5cclxuICAgIC8v5ZG95ZCN6KeE5YiZIHRleHR1cmUg57uf5LiAIOeUqCByZXMg5b2T5ZCO57yA77yMcHJlZmFi5peg54m55q6K5ZCO57yAXHJcbiAgICBzdGF0aWMgaW5pdENvbmZpZygpe1xyXG4gICAgICAgIGxldCBrZXk7XHJcbiAgICAgICAgLy9wcmVmYWJcclxuICAgICAgICBmb3Ioa2V5IGluIHRoaXMucHJlZmFicylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExvYWRlck1hbmFnZXIuc2V0TW9kdWxlQ29uZmlnKHRoaXMucHJlZmFic1trZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGV4dHVyZXNcclxuICAgICAgICBmb3Ioa2V5IGluIHRoaXMudGV4dHVyZXMpe1xyXG4gICAgICAgICAgICBMb2FkZXJNYW5hZ2VyLnNldE1vZHVsZUNvbmZpZyh0aGlzLnRleHR1cmVzW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb25maWdcclxuICAgICAgICBMb2FkZXJNYW5hZ2VyLnNldE1vZHVsZUNvbmZpZyh0aGlzLmNvbmZpZyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75YqgVUnliqDovb3mqKHlnZdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZFVJTW9kdWxlKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCEhZGF0YSkge1xyXG4gICAgICAgICAgICBkYXRhLnVybCA9IHRoaXMuVUlVUkwgKyBkYXRhLm1uYW1lO1xyXG4gICAgICAgICAgICBMb2FkZXJNYW5hZ2VyLnNldE1vZHVsZUNvbmZpZyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=
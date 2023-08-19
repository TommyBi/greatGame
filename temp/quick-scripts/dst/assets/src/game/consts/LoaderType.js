
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
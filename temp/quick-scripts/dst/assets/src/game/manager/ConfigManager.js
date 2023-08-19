
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
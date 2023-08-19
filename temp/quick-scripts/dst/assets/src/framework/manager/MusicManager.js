
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

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
var Global_1 = require("../../game/consts/Global");
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
        // let statusStr = StorageHelper.getValueByKey('audio');
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
        return PlayerModel_1.default.getSoundYinXiaoSwitch() == Global_1.default.SOUND_YINXIAO_SWITCH_OPEN;
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
        return PlayerModel_1.default.getSoundSwitch() == Global_1.default.SOUND_SWITCH_OPEN;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL21hbmFnZXIvTXVzaWNNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBQzlDLDREQUF1RDtBQUV2RCx5REFBb0Q7QUFFcEQ7SUFBQTtRQUVZLGlCQUFZLEdBQVksQ0FBQyxDQUFDO1FBQzFCLGtCQUFhLEdBQWMsSUFBSSxDQUFDLENBQUEsUUFBUTtRQUN4QyxpQkFBWSxHQUFhLElBQUksQ0FBQyxDQUFBLFVBQVU7UUFDeEMsZ0JBQVcsR0FBSSxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVyxHQUFXLEVBQUUsQ0FBQyxDQUFBLFVBQVU7UUFDbkMsZUFBVSxHQUFXLEVBQUUsQ0FBQyxDQUFBLFNBQVM7UUFJakMsV0FBTSxHQUFVLFFBQVEsQ0FBQyxDQUFBLFNBQVM7SUE0UTlDLENBQUM7SUExUWlCLHFCQUFRLEdBQXRCO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFHRDs7Ozs7O09BTUc7SUFFSDs7Ozs7Ozs7T0FRRztJQUNILGlDQUFVLEdBQVYsVUFBVyxHQUFVLEVBQUMsSUFBa0IsRUFBQyxNQUFvQixFQUFDLFNBQXVCLEVBQUMsT0FBb0I7UUFBMUcsaUJBdUNDO1FBdkNxQixxQkFBQSxFQUFBLFlBQWtCO1FBQUMsdUJBQUEsRUFBQSxjQUFvQjtRQUFDLDBCQUFBLEVBQUEsaUJBQXVCO1FBQUMsd0JBQUEsRUFBQSxjQUFvQjtRQUV0RyxJQUFHLElBQUksQ0FBQyxhQUFhLEVBQ3JCO1lBQ0ksSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsRUFBRTtvQkFDekIsT0FBTztpQkFDVjth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dEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0F4UkEsQUF3UkMsSUFBQTtBQUVELGtCQUFlLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWwgZnJvbSBcIi4uLy4uL2dhbWUvY29uc3RzL0dsb2JhbFwiO1xyXG5pbXBvcnQgUGxheWVyTW9kZWwgZnJvbSBcIi4uLy4uL2dhbWUvZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xyXG5pbXBvcnQgU3RvcmFnZUhlbHBlciBmcm9tIFwiLi4vaGVscGVyL1N0b3JhZ2VIZWxwZXJcIjtcclxuXHJcbmNsYXNzIE11c2ljTWFuYWdlclxyXG57XHJcbiAgICBwcml2YXRlIF9tdXNpY1ZvbHVtZSA6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIF9zd2l0Y2hFZmZlY3QgOiBib29sZWFuID0gIHRydWU7Ly/mmK/lkKblvIDlkK/pn7PmlYhcclxuICAgIHByaXZhdGUgX3N3aXRjaE11c2ljIDogYm9vbGVhbiA9IHRydWU7Ly/mmK/lkKblvIDlkK/og4zmma/pn7PmlYhcclxuICAgIHByaXZhdGUgX3BsYXlFZmZlY3QgID0ge307XHJcbiAgICBwcml2YXRlIGNhY2hlQ2xpcHMgPSB7fTtcclxuICAgIHByaXZhdGUgX2xhc3RFZmZlY3Q6IHN0cmluZyA9ICcnOy8v5LiK5LiA5qyh5pKt5pS+55qE6Z+z5pWIXHJcbiAgICBwcml2YXRlIF9sYXN0TXVzaWM6IHN0cmluZyA9ICcnOy8v5LiK5qyh5pKt5pS+55qE6Z+z5LmQXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOk11c2ljTWFuYWdlcjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBwcmVVUkw6c3RyaW5nID0gJ3NvdW5kLyc7Ly/pn7PmlYjot6/lvoTnmoTliY3nvIBcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKCk6TXVzaWNNYW5hZ2VyXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBNdXNpY01hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViOaWh+S7tlxyXG4gICAgICogdXJsOiDpn7PmlYjmlofku7bnm7jlr7nlnLDlnYBcclxuICAgICAqIGxvb3A6IOaYr+WQpuW+queOr+aSreaUvlxyXG4gICAgICogaXNTaWduOiDmr4/mrKHlj6rog73mkq3mlL7kuIDmrKEg5aaC5p6c5ZCM5pe25pKt5pS+5aSa5Liq5pe2IOWImeWQjui+ueeahOS8muWFqOmDqOS4jeaSreaUvlxyXG4gICAgICogaXNTdG9wUHJlXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViOaWh+S7tlxyXG4gICAgICogQHBhcmFtIHVybCDpn7PmlYjmlofku7bnm7jlr7nlnLDlnYBcclxuICAgICAqIEBwYXJhbSBsb29wIOaYr+WQpuW+queOr+aSreaUvlxyXG4gICAgICogQHBhcmFtIGlzU2lnbiDmr4/mrKHlj6rog73mkq3mlL7kuIDmrKEg5aaC5p6c5ZCM5pe25pKt5pS+5aSa5Liq5pe2IOWImeWQjui+ueeahOS8muWFqOmDqOS4jeaSreaUvlxyXG4gICAgICogQHBhcmFtIGlzU3RvcFByZSDmkq3mlL7lkIzkuIDkuKrpn7PmlYjml7Yg5piv5ZCm5YGc5q2i5LiK5LiA5Liq6Z+z5pWIXHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlciAg5pKt5pS+5a6M5oiQ55qE5Zue6LCD5Ye95pWwXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcGxheUVmZmVjdCh1cmw6c3RyaW5nLGxvb3A6Ym9vbGVhbj1mYWxzZSxpc1NpZ246Ym9vbGVhbj1mYWxzZSxpc1N0b3BQcmU6Ym9vbGVhbj1mYWxzZSxoYW5kbGVyOkhhbmRsZXI9bnVsbClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLl9zd2l0Y2hFZmZlY3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoaXNTaWduKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbGFzdEVmZmVjdCA9PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggaXNTdG9wUHJlICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRWZmZWN0KHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fbGFzdEVmZmVjdCA9IHVybDtcclxuICAgICAgICAgICAgdXJsID0gdGhpcy5wcmVVUkwgKyB1cmw7XHJcbiAgICAgICAgICAgIGxldCBjbGlwID0gdGhpcy5fZ2V0Q2xpcCh1cmwpO1xyXG4gICAgICAgICAgICBsZXQgZWZmZWN0SWQgPSAtMTtcclxuICAgICAgICAgICAgaWYgKCEhY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgZWZmZWN0SWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGxvb3ApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhbG9vcCAmJiBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soIGVmZmVjdElkLChpZCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUVmZmVjdFt1cmxdID0gZWZmZWN0SWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgY2xpcCkgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0SWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGxvb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggIWxvb3AgJiYgaGFuZGxlciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soIGVmZmVjdElkLChpZCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVDbGlwc1t1cmxdID0gY2xpcDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5RWZmZWN0W3VybF0gPSBlZmZlY3RJZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhckxhc3RFZmZlY3QoKXtcclxuICAgICAgICB0aGlzLl9sYXN0RWZmZWN0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRWZmZWN0QnlJRChpZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEVmZmVjdCh1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVmZmVjdElkID0gdGhpcy5fcGxheUVmZmVjdFt0aGlzLnByZVVSTCArIHVybF07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3BsYXlFZmZlY3RbdGhpcy5wcmVVUkwgKyB1cmxdO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoZWZmZWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6IOM5pmv6Z+z5LmQ5pKt5pS+XHJcbiAgICAgKiB1cmw6IOi1hOa6kOi3r+W+hFxyXG4gICAgICogbG9vcDog5piv5ZCm5b6q546vXHJcbiAgICAgKi9cclxuICAgIHBsYXlNdXNpYyAodXJsOnN0cmluZywgbG9vcDpib29sZWFuPWZhbHNlKXtcclxuICAgICAgICBpZih0aGlzLl9zd2l0Y2hNdXNpYyl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sYXN0TXVzaWMgPT09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RNdXNpYyA9IHVybDtcclxuICAgICAgICAgICAgdXJsID0gdGhpcy5wcmVVUkwgKyB1cmw7XHJcbiAgICAgICAgICAgIGxldCBjbGlwID0gdGhpcy5fZ2V0Q2xpcCh1cmwpO1xyXG4gICAgICAgICAgICBpZiAoISFjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgbG9vcCk7ICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5BdWRpb0NsaXAsIChlcnIsIGNsaXApID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCBsb29wKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlQ2xpcHNbdXJsXSA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRMYXN0TXVzaWMoKXtcclxuICAgICAgICBpZih0aGlzLl9sYXN0TXVzaWMgPT0gJycpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RNdXNpYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICog5pqC5YGc5b2T5YmN5pKt5pS+6Z+z5LmQXHJcbiAgICAgKi9cclxuICAgIHNldFBhdXNlTXVzaWMoKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaBouWkjeW9k+WJjeiiq+aaguWBnOmfs+S5kOmfs+S5kFxyXG4gICAgICovXHJcbiAgICBzZXRSZXN1bWVNdXNpYygpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjeaWsOaSreaUvuivpeiDjOaZr+mfs+S5kFxyXG4gICAgICovXHJcbiAgICByZXBsYXlNdXNpYygpXHJcbiAgICB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouaSreaUvumfs+S5kFxyXG4gICAgICogcmVsZWFzZURhdGHvvJog5o6n5Yi25piv5ZCm6YeK5pS+6Z+z5LmQ6LWE5rqQIHRydWXph4rmlL7otYTmupAgfCBmYWxzZeS4jemHiuaUvui1hOa6kFxyXG4gICAgICovXHJcbiAgICBzZXRTdG9wTXVzaWMocmVsZWFzZURhdGEgPSB0cnVlKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE11c2ljVm9sdW1lKHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX211c2ljVm9sdW1lID0gdmFsdWU7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE11c2ljVm9sdW1lKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUuZ2V0TXVzaWNWb2x1bWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFZmZlY3RTd2l0Y2godmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fc3dpdGNoRWZmZWN0ID0gdmFsdWU7XHJcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlVmFsdWVCeUtleSgnYXVkaW8nLHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNdXNpY1N3aXRjaCh2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5fc3dpdGNoTXVzaWMgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGF1c2VNdXNpYygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UmVzdW1lTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgU3RvcmFnZUhlbHBlci5zYXZlVmFsdWVCeUtleSgnbXVzaWMnLHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFZmZlY3RTd2l0Y2goKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGxldCBzdGF0dXNTdHIgPSBTdG9yYWdlSGVscGVyLmdldFZhbHVlQnlLZXkoJ2F1ZGlvJyk7XHJcbiAgICAgICAgLy8gbGV0IHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgLy8gaWYgKHN0YXR1c1N0ciAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIGlmKHR5cGVvZiBzdGF0dXNTdHIgIT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKHN0YXR1c1N0ciA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgc3RhdHVzID0gc3RhdHVzU3RyO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gcmV0dXJuIHN0YXR1cztcclxuICAgICAgICByZXR1cm4gUGxheWVyTW9kZWwuZ2V0U291bmRZaW5YaWFvU3dpdGNoKCkgPT0gR2xvYmFsLlNPVU5EX1lJTlhJQU9fU1dJVENIX09QRU47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TXVzaWNTd2l0Y2goKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGxldCBzdGF0dXNTdHIgPSBTdG9yYWdlSGVscGVyLmdldFZhbHVlQnlLZXkoJ211c2ljJyk7XHJcbiAgICAgICAgLy8gbGV0IHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgLy8gaWYgKHN0YXR1c1N0ciAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIGlmKHR5cGVvZiBzdGF0dXNTdHIgIT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmKHN0YXR1c1N0ciA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgc3RhdHVzID0gc3RhdHVzU3RyO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHN0YXR1cztcclxuICAgICAgICByZXR1cm4gUGxheWVyTW9kZWwuZ2V0U291bmRTd2l0Y2goKSA9PSBHbG9iYWwuU09VTkRfU1dJVENIX09QRU47XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE11c2ljKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9zd2l0Y2hFZmZlY3QgPSB0aGlzLmdldEVmZmVjdFN3aXRjaCgpO1xyXG4gICAgICAgIHRoaXMuX3N3aXRjaE11c2ljID0gdGhpcy5nZXRNdXNpY1N3aXRjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOmfs+S5kOaYr+WQpuato+WcqOaSreaUvu+8iOmqjOivgeS6m+aWueazleadpeWunueOsOiDjOaZr+mfs+S5kOaYr+WQpuaSreaUvuWujOaIkO+8iVxyXG4gICAgICogcmV0dXJuIGJvb2xlblxyXG4gICAgICovXHJcbiAgICBpc011c2ljUGxheWluZygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph4rmlL7mjIflrprpn7PmlYjotYTmupBcclxuICAgICAqIEBwYXJhbSB1cmwg5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0gaXNFZmZlY3Qg5piv5ZCm5piv6Z+z5pWIIFxyXG4gICAgICovXHJcbiAgICByZWxlYXNlQXVkaW8odXJsOnN0cmluZyxpc0VmZmVjdDpib29sZWFuPWZhbHNlKXtcclxuICAgICAgICBsZXQgY2xpcCA9IHRoaXMuX2dldENsaXAodGhpcy5wcmVVUkwgKyB1cmwpO1xyXG4gICAgICAgIGlmKCBjbGlwICl7XHJcbiAgICAgICAgICAgIGlmICggaXNFZmZlY3QgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BFZmZlY3QodXJsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2FjaGVDbGlwc1t1cmxdO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS51bmNhY2hlKGNsaXApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIuOAkOmfs+mikeOAkei1hOa6kFwiICsgdXJsICsgXCLkuI3lrZjlnKgs6YeK5pS+5aSx6LSlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWxlYXNlQWxsQXVkaW8oKVxyXG4gICAge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnVuY2FjaGVBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Q2xpcChuYW1lKXtcclxuICAgICAgICBpZiAodGhpcy5jYWNoZUNsaXBzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlQ2xpcHNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNdXNpY01hbmFnZXIuaW5zdGFuY2UoKTsiXX0=
"use strict";
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
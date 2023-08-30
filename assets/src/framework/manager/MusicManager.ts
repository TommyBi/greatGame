import Global from "../../game/consts/Global";
import PlayerModel from "../../game/datas/PlayerModel";
import Handler from "../base/Handler";
import StorageHelper from "../helper/StorageHelper";

class MusicManager
{
    private _musicVolume : number = 1;
    private _switchEffect : boolean =  true;//是否开启音效
    private _switchMusic : boolean = true;//是否开启背景音效
    private _playEffect  = {};
    private cacheClips = {};
    private _lastEffect: string = '';//上一次播放的音效
    private _lastMusic: string = '';//上次播放的音乐

    private static _instance:MusicManager;
    
    private preURL:string = 'sound/';//音效路径的前缀

    public static instance():MusicManager
    {
        if (!this._instance) {
            this._instance = new MusicManager();
        }
        return this._instance;
    }


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
    playEffect(url:string,loop:boolean=false,isSign:boolean=false,isStopPre:boolean=false,handler:Handler=null)
    {
        if(this._switchEffect)
        {
            if (isSign) {
                if (this._lastEffect == url) {
                    return;
                }
            }

            if ( isStopPre ) {
                this.stopEffect(url);
            }
            this._lastEffect = url;
            url = this.preURL + url;
            let clip = this._getClip(url);
            let effectId = -1;
            if (!!clip) {
                effectId = cc.audioEngine.playEffect(clip, loop);
                if ( !loop && handler) {
                    cc.audioEngine.setFinishCallback( effectId,(id)=>{
                        handler.call();
                    } );
                }
                this._playEffect[url] = effectId;
            } else {
                cc.loader.loadRes(url, cc.AudioClip, (err, clip) =>{
                    effectId = cc.audioEngine.playEffect(clip, loop);
                    if ( !loop && handler ) {
                        cc.audioEngine.setFinishCallback( effectId,(id)=>{
                            handler.call();
                        } );
                    }
                    this.cacheClips[url] = clip;
                    this._playEffect[url] = effectId;
                });
            }
            
        }
    }

    clearLastEffect(){
        this._lastEffect = null;
    }

    stopEffectByID(id:number)
    {
        cc.audioEngine.stopEffect(id);
    }

    stopEffect(url)
    {
        let effectId = this._playEffect[this.preURL + url];
        delete this._playEffect[this.preURL + url];
        cc.audioEngine.stopEffect(effectId);
    }

    /**
     * 背景音乐播放
     * url: 资源路径
     * loop: 是否循环
     */
    playMusic (url:string, loop:boolean=false){
        if(this._switchMusic){
            if (this._lastMusic === url) {
                return;
            }
            this._lastMusic = url;
            url = this.preURL + url;
            let clip = this._getClip(url);
            if (!!clip) {
                cc.audioEngine.playMusic(clip, loop);    
            } else {
                cc.loader.loadRes(url, cc.AudioClip, (err, clip) =>{
                    cc.audioEngine.playMusic(clip, loop);
                    this.cacheClips[url] = clip;
                });
            }
            
        }
    }
    getLastMusic(){
        if(this._lastMusic == ''){
            return null;
        }else{
            return this._lastMusic;
        }
    }

        /**
     * 暂停当前播放音乐
     */
    setPauseMusic()
    {
        cc.audioEngine.pauseMusic();
    }

    /**
     * 恢复当前被暂停音乐音乐
     */
    setResumeMusic()
    {
        cc.audioEngine.resumeMusic();
    }

    /**
     * 重新播放该背景音乐
     */
    replayMusic()
    {
        cc.audioEngine.resumeMusic();
    }

    /**
     * 停止播放音乐
     * releaseData： 控制是否释放音乐资源 true释放资源 | false不释放资源
     */
    setStopMusic(releaseData = true)
    {
        cc.audioEngine.stopMusic();
    }

    setMusicVolume(value)
    {
        this._musicVolume = value;
        cc.audioEngine.setMusicVolume(value);
    }

    getMusicVolume()
    {
        return cc.audioEngine.getMusicVolume();
    }

    setEffectSwitch(value)
    {
        this._switchEffect = value;
        StorageHelper.saveValueByKey('audio',value);
    }

    setMusicSwitch(value){
        this._switchMusic = value;
        if (!value) {
            this.setPauseMusic();
        } else {
            this.setResumeMusic();
        }
        StorageHelper.saveValueByKey('music',value);
    }

    getEffectSwitch()
    {
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
        return PlayerModel.getSoundYinXiaoSwitch() == Global.SOUND_YINXIAO_SWITCH_OPEN;
    }

    getMusicSwitch()
    {
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
        return PlayerModel.getSoundSwitch() == Global.SOUND_SWITCH_OPEN;
    }

    initMusic()
    {
        this._switchEffect = this.getEffectSwitch();
        this._switchMusic = this.getMusicSwitch();
    }

    /** 
     * 音乐是否正在播放（验证些方法来实现背景音乐是否播放完成）
     * return boolen
     */
    isMusicPlaying()
    {
        return cc.audioEngine.isMusicPlaying();
    }

    /**
     * 释放指定音效资源
     * @param url 地址
     * @param isEffect 是否是音效 
     */
    releaseAudio(url:string,isEffect:boolean=false){
        let clip = this._getClip(this.preURL + url);
        if( clip ){
            if ( isEffect ) {
                this.stopEffect(url);
            } else {
                this.setStopMusic();
            }
            delete this.cacheClips[url];
            cc.audioEngine.uncache(clip);
        }else{
            cc.error("【音频】资源" + url + "不存在,释放失败");
        }
    }

    releaseAllAudio()
    {
        cc.audioEngine.uncacheAll();
    }

    _getClip(name){
        if (this.cacheClips.hasOwnProperty(name)) {
            return this.cacheClips[name];
        }
        return null;
    }
}

export default MusicManager.instance();
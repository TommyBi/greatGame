import JSHelper from "../../../framework/helper/JSHelper";
import SDKManager from "../../../framework/manager/SDKManager";
import EventDispath from "../../../framework/message/EventDispath";
import Utils from "../../../framework/tools/Utils";
import BasePanel from "../../../framework/ui/BasePanel";
import Global from "../../consts/Global";
import PlayerModel from "../../datas/PlayerModel";

const { ccclass, property } = cc._decorator;

/**
 * TODO: 
 * 1、「客服帮助」sdk缺失；
 * 2、用户uid数据缺失，待数据来源提供后完善；
 * 3、「自定义推荐」sdk缺失；
 * 4、「关于我们」sdk缺失；
 * 5、经验对应的升级进度概念目前没有相应的数据，待完善；
 */
@ccclass
export default class SettingView extends BasePanel {

    @property(cc.Node)
    headIcon: cc.Node = null;
    @property(cc.Label)
    nameLabel: cc.Label = null;
    @property(cc.Label)
    idLabel: cc.Label = null;
    @property(cc.Node)
    btn_sound: cc.Node = null;

    @property(cc.Node)
    uImgSoundStatusOn = null // 音乐开
    @property(cc.Node)
    uImgSoundStatusOff = null// 音乐关

    @property(cc.Node)
    btn2: (cc.Node) = null;// 音效设置开关
    @property(cc.Node)
    btn2On: cc.Node = null;// 音效开
    @property(cc.Node)
    btn2Off: cc.Node = null;// 音效关
   

    @property(cc.Node)
    btn_user: (cc.Node) = null; // 用户协议
    @property(cc.Node)
    btn_privacy: (cc.Node) = null;// 隐私政策
    @property(cc.Node)
    btn_restart: (cc.Node) = null;// 注销
    @property(cc.Node)
    btn_close: (cc.Node) = null;// 关闭面板


    onEnable(): void {
        // 背景音
        EventDispath.on(this.btn_sound, this.onBtnSoundHandle, this);
        // 音效
        EventDispath.on(this.btn2, this.onBtnSoundYinXiao, this);

        // 用户协议
        EventDispath.on(this.btn_user, this.onBtnUserHandle, this);
        // 隐私政策
        EventDispath.on(this.btn_privacy, this.onBtnPrivacyHandle, this);
        // 客服帮助
        // EventDispath.on(this.btn_helper, this.onBtnHelper, this);
        // // 关于我们
        // EventDispath.on(this.btn_ours, this.onBtnAboutOurs, this);
        // 注销
        EventDispath.on(this.btn_restart, this.onBtnRestartHandle, this);
        // 退出登录
        // EventDispath.on(this.btn_quit, this.onBtnQuitHandle, this);
        // 关闭面板
        EventDispath.on(this.btn_close, this.onBtnCloseHandle, this);
        this.initUI();
    }
    onDisable(): void {
    }

    startShow() {
    }
    initUI() {

        let headUrl = SDKManager.getUserIcon();
        if (headUrl && headUrl != "") {
            let self = this;
            cc.assetManager.loadRemote(headUrl, { ext: '.png' }, function (err, texture:cc.Texture2D) {
                if (err) {
                    console.log("头像加载失败", headUrl);
                    return;
                }
                self.headIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            });
        }
        let userName = SDKManager.getUserNickName();
        if (!Utils.isUndefined(userName) && userName !="") {
            this.nameLabel.string = userName;
        } else {
            this.nameLabel.string = "游客";
        }

        this.idLabel.string = "ID:"+SDKManager.getDeviceId();

        this.refreshBtnSoundState();
        this.refreshBtnSoundYinXiaoState();
        this.refreshPersonalRecommendationState();
    }

    refreshBtnSoundState() {
        let result = "";
        if (PlayerModel.getSoundSwitch() == Global.SOUND_SWITCH_OPEN) {
            this.uImgSoundStatusOff.active = true;
            this.uImgSoundStatusOn.active = false;
        } else {
            this.uImgSoundStatusOff.active = false;
            this.uImgSoundStatusOn.active = true;
        }
    }

    refreshBtnSoundYinXiaoState(): void {
        let result = ""
        if (PlayerModel.getSoundYinXiaoSwitch() == Global.SOUND_YINXIAO_SWITCH_OPEN) {
            this.btn2Off.active = false;
            this.btn2On.active = true;
        } else {
            this.btn2Off.active = true;
            this.btn2On.active = false;
        }
    }

    /** 设置背景音乐 */
    onBtnSoundHandle() {

        let soundResult = PlayerModel.getSoundSwitch() == Global.SOUND_SWITCH_OPEN ? Global.SOUND_SWITCH_CLOSE : Global.SOUND_SWITCH_OPEN;
        PlayerModel.setSoundSwitch(soundResult);
        this.refreshBtnSoundState();

        if (PlayerModel.getSoundSwitch() == Global.SOUND_SWITCH_OPEN) {
            if (JSHelper.getLastMusic()) {
                JSHelper.setResumeMusic();
            } else {
                JSHelper.playMisuc("bgm");
            }
        } else {
            JSHelper.setPauseMusic();
        }
    }

    /** 设置音效 */
    onBtnSoundYinXiao(): void {
        let soundYinXiaoResult = PlayerModel.getSoundYinXiaoSwitch() == Global.SOUND_YINXIAO_SWITCH_OPEN ? Global.SOUND_YINXIAO_SWITCH_CLOSE : Global.SOUND_YINXIAO_SWITCH_OPEN;
        PlayerModel.setSoundYinXiaoSwitch(soundYinXiaoResult);
        this.refreshBtnSoundYinXiaoState();
    }

    /** 个性推荐  */
    onBtnPersonalRecommendation(): void {
        let personalRecommResult = PlayerModel.getPersonRecommSwitch() == Global.PERSONALRECOMM_SWITCH_OPEN ? Global.PERSONALRECOMM_SWITCH_OFF : Global.PERSONALRECOMM_SWITCH_OPEN;
        PlayerModel.SetPersonRecommSwitch(personalRecommResult);
        this.refreshPersonalRecommendationState();
    }

    /** 刷新个性推荐状态  */
    refreshPersonalRecommendationState(): void {
        let result = "";
        if (PlayerModel.getPersonRecommSwitch() == Global.PERSONALRECOMM_SWITCH_OPEN) {
        } else {
        }
    }

    onBtnUserHandle() {
        SDKManager.openUserService();
    }
    onBtnPrivacyHandle() {
        SDKManager.openPrivacy();
    }
    onBtnRestartHandle() {
        SDKManager.unBindWX();
    }
    onBtnQuitHandle() {
        SDKManager.unBindWX();
    }
    /** 客服帮助 */
    onBtnHelper(): void {
        SDKManager.openFeedBack()
    }
    /** 关于我们 */
    onBtnAboutOurs(): void {
    }
    onBtnCloseHandle() {
        super.close();
    }
}

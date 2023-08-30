import UIMananger from "../framework/manager/UIMananger";
import UIType from "./consts/UIType";
import MusicManager from "../framework/manager/MusicManager";
import MKUtils from "../framework/tools/MkUtils";
import DataManager from "../framework/manager/DataManager";
import PlayerModel from "./datas/PlayerModel";
import { UIEffectType } from "../framework/manager/UIEffectManager";
import SKDManager from "../framework/manager/SDKManager";
import JSHelper from "../framework/helper/JSHelper";
import SDKManager from "../framework/manager/SDKManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {
    @property(cc.Prefab)
    top: cc.Prefab = null;
    @property(cc.Prefab)
    guide: cc.Prefab = null;
    onLoad() {
        cc.macro.CLEANUP_IMAGE_CACHE = false;
        cc.dynamicAtlasManager.enabled = true;
        UIMananger.init();
        DataManager.init();
        MusicManager.initMusic();
        JSHelper.playMisuc("bgm");
        this.init();
    }

    init() {

        SDKManager.onStartGame(1);

        // console.log(16/9,"   长宽比：",cc.winSize.height/cc.winSize.width);

        if (SDKManager.hasNewOrderReward()) {
            PlayerModel.guideStep = 0;
            PlayerModel.guideState = 0;
        }
        else {
            PlayerModel.guideState = 1;
            PlayerModel.guideStep = -1;
        }

        UIMananger.showView(UIType.gameView);
        SDKManager.getUserAmount();
        // NResponer.on(Message.configComplete,Handler.create( ()=>{
        // if (!PlayerModel.guideState) PlayerModel.guideStep = 0;
        MKUtils.setNodeDelay(this.node, 0, () => {
            UIMananger.top = cc.instantiate(this.top);
            UIMananger.setTop();

            if (PlayerModel.guideStep >= 0) this.showGuide();
            else UIMananger.showPanel(UIType.loginDay);
        })

        // PlayerModel.initMoney(101.25)

        // },this ),this);

        // MusicManager.playMusic('bg.mp3');
    }


    start() {

    }
    offlineTime_interval = 0;
    taskHd = 0;
    update(dt) {
        this.offlineTime_interval += dt;

        if (this.offlineTime_interval >= 5) {
            this.offlineTime_interval = 0;
            PlayerModel.setOfflineTimestamp();
        }

        this.taskHd += dt;

        if (this.taskHd >= 10) {
            this.taskHd = 0;
            // SDKManager.getTaskRewardCount();
        }
    }


    showGuide() {
        UIMananger.guide = cc.instantiate(this.guide);
        UIMananger.showGuide();
    }
    // https://forum.cocos.org/t/cocos-creator-50/94999      //首屏

}

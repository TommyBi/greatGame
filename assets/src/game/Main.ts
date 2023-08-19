import UIMananger from "../framework/manager/UIMananger";
import UIType from "./consts/UIType";
import DataManager from "../framework/manager/DataManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {
    onLoad() {
        cc.macro.CLEANUP_IMAGE_CACHE = true;
        cc.dynamicAtlasManager.enabled = true;
        UIMananger.init();
        DataManager.init();
        // MusicManager.initMusic();
        // JSHelper.playMisuc("bgm");
        this.init();
    }

    init() {
        UIMananger.showView(UIType.gameView);
        // MusicManager.playMusic('bg.mp3');
    }


    start() { }

    update(dt) { }
    // https://forum.cocos.org/t/cocos-creator-50/94999      //首屏

}

import Handler from "../framework/base/Handler";
import DataManager from "../framework/manager/DataManager";
import LoaderManager from "../framework/manager/LoaderManager";
import SDKManager from "../framework/manager/SDKManager";
import UIMananger from "../framework/manager/UIMananger";
import NResponer from "../framework/message/NResponer";
import MKUtils from "../framework/tools/MkUtils";
import Global from "./consts/Global";
import LoaderType from "./consts/LoaderType";
import UIType from "./consts/UIType";
import PlayerModel from "./datas/PlayerModel";
import ConfigManager from "./manager/ConfigManager";
import { Message } from "./view/Message";

cc.macro.CLEANUP_IMAGE_CACHE = false;
cc.dynamicAtlasManager.enabled = true;
const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    @property(cc.ProgressBar)
    loadingBar: cc.ProgressBar = null;

    onLoad() {

        SDKManager.onStartGame(0);

        LoaderType.initConfig();
        UIType.init();
        NResponer.on(Message.configComplete, Handler.create(() => {
            // UIMananger.showView(UIType.mainView);
        }, this), this);
        ConfigManager.init();
        this.loadingBar.node.active = true;
        this.loadingBar.progress = 0;
        let backup = cc.loader.onProgress;
        cc.loader.onProgress = function (count, amount) {
            this.loadingBar.progress = count / amount;
        }.bind(this);

        DataManager.init();

        cc.director.preloadScene("main", () => {
            cc.loader.onProgress = backup;
            this.loadingBar.node.active = false;
            this.initDataSuccess();
        });
        let gameView = UIType.gameView;
        LoaderManager.loaderPrefab(gameView.uname, Handler.create((res) => {
        }, this), gameView.mname);
    }

    start() {

        MKUtils.setStatsColor(cc.Color.RED);

        cc.game.setFrameRate(60);
        this.initData();
        // ConfigManager.loadGameZipJson("immotalJsonZip", Global.JSON_FILE.split("|"), function () {
        //     this.initDataSuccess();
        // }.bind(this), true)
    }

    private initData() {
        // PlayerModel.loadData();
    }

    initDataSuccess() {

        PlayerModel.initUiCfg();

        PlayerModel.loadData();
        // this.scheduleOnce(() => {
        //     cc.director.loadScene("main");
        // }, 0.1);
        cc.director.loadScene("main");
        console.log("查看分辨率", JSON.stringify(cc.winSize));
    }
    // update (dt) {}
}

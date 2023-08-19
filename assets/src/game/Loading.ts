import Handler from "../framework/base/Handler";
import LoaderManager from "../framework/manager/LoaderManager";
import MKUtils from "../framework/tools/MkUtils";
import LoaderType from "./consts/LoaderType";
import UIType from "./consts/UIType";
import PlayerModel from "./datas/PlayerModel";
import ConfigManager from "./manager/ConfigManager";

cc.macro.CLEANUP_IMAGE_CACHE = false;
cc.dynamicAtlasManager.enabled = true;
const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading extends cc.Component {

  @property(cc.ProgressBar)
  loadingBar: cc.ProgressBar = null;

  onLoad() {
    LoaderType.initConfig();
    UIType.init();
    ConfigManager.init();
    this.loadingBar.node.active = true;
    this.loadingBar.progress = 0;
    let backup = cc.loader.onProgress;
    cc.loader.onProgress = function (count, amount) {
      if (this.loadingBar) this.loadingBar.progress = count / amount;
    }.bind(this);




    let gameView = UIType.gameView;
    LoaderManager.loaderPrefab(gameView.uname, Handler.create((res) => {
      this.initDataSuccess();
    }, this), gameView.mname);
  }

  start() {
    MKUtils.setStatsColor(cc.Color.WHITE);
    cc.game.setFrameRate(60);
    this.initData();
  }

  private initData() {
    // PlayerModel.loadData();
    this.initDataSuccess()
  }

  initDataSuccess() {
    PlayerModel.loadData();
    cc.director.loadScene("main");
    cc.director.preloadScene("main",(count,total)=>{

    })
    console.log("查看分辨率", JSON.stringify(cc.winSize));
  }
}

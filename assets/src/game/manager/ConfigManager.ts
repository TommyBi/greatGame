import LoaderManager from "../../framework/manager/LoaderManager";
import Handler from "../../framework/base/Handler";
import Global from "../consts/Global";

class ConfigManager {
  private static _instance: ConfigManager;

  private allConfig: any;
  public gameJson: object = {};//单个游戏json配置
  jsonLoadNum = 0;

  static instance() {
    if (!this._instance) {
      this._instance = new ConfigManager();
    }
    return this._instance;
  }

  init() {
    LoaderManager.loaderJson('allConf', Handler.create((res) => {
      this.allConfig = res.json;
      console.log("配置文件：", this.allConfig);
      // todo: send event 
    }, this), 'config');
  }

  public loadGameZipJson(name, jsonStringArray, callback: Function, isLocalJson, path?: String, isRetry?: boolean) {
    if (this.gameJson[name]) {
      callback()
      return
    }

    if (isLocalJson) {
      this.jsonLoadNum = jsonStringArray.length
      // you now have every files contained in the loaded zip
      for (let i = 0; i < jsonStringArray.length; i++) {
        LoaderManager.loaderJson(jsonStringArray[i], Handler.create((res) => {
          this.jsonLoadNum--
          if (this.jsonLoadNum == 0) {
            callback()
          }
        }, this), 'config')
      }
    } else {
      let fullUrl = Global.JSON_SERVER_URL + name + ".zip"
      if (path) {
        fullUrl = path + name + ".zip"
      }
    }
  }
}

export default ConfigManager.instance();

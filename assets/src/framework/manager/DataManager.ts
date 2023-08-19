import EventConst from "../../game/consts/EventConst";

class DataManager {
  private _configData: any = {};
  public _barrageIndex: number = 1;
  static _instance: DataManager = null;
  private _viewState: number = EventConst.VIEW_STATE_NORMAL;
  static getInstance() {
    if (!this._instance) {
      this._instance = new DataManager();
    }
    return this._instance;
  }

  init() {
    this.loadJson();
  }

  loadJson() {
    let baseUrl = "config/";
    let jsonList = [
      "allConf"
    ];
    for (let i = 0; i < jsonList.length; ++i) {
      let jsonFile = baseUrl + jsonList[i];
      cc.loader.loadRes(jsonFile, cc.JsonAsset, (error, res) => {
        if (error) {
          console.error("JSON文件加载失败 ", jsonFile);
          return;
        }
        this._configData[jsonList[i]] = res;
      });
    }
  }

  getConfig(mname: string) {
    return this._configData[mname] || null;
  }

  getJson(mname: string) {
    let config = this.getConfig(mname);
    if (!config) {
      return null;
    }
    return config["json"];
  }

  setViewState(state: number) {
    this._viewState = state;
  }

  getViewState() {
    return this._viewState;
  }
};
export default DataManager.getInstance();
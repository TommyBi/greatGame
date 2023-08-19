import LoaderType from "./LoaderType";

export default class UIType {

    static gameView = { mname: "main", uname: "GameMainView", isRelease: false, url: null, clickClose: true }//网格

    static init() {
        LoaderType.addUIModule(this.gameView);
    }

}
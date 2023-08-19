import StorageHelper from "../../framework/helper/StorageHelper";
import Utils from "../../framework/tools/Utils";
import StorageType from "../consts/StorageType";

export interface UIConfig {
    skinId: number,
}

export default class PlayerData {
    public level: number = 1;

    saveData() {
        let sdata = {
            level: this.level,
        };
        StorageHelper.saveJsonByKey(StorageType.gameData, sdata);
    }

    setIsAuto(autoCfg) {
        StorageHelper.saveJsonByKey(StorageType.isAutoSell, autoCfg);
    }

    getData() {
        let data = StorageHelper.getJsonByKey(StorageType.gameData);
        cc.log("debug:缓存数据：", data);
        if (data) {
            this.level = Utils.isUndefined(data.level) ? this.level : data.level;
        } else {
            this.level = 1;
        }
    }

    resetData() {
        this.saveData();
    }
}
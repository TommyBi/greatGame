import MusicManager from "../../framework/manager/MusicManager";
import PlayerData from "../datas/PlayerData";

class PlayerModel {
    private static _instance: PlayerModel;

    private data: PlayerData = new PlayerData();

    static instance() {
        if (!this._instance) {
            this._instance = new PlayerModel();
        }
        return this._instance;
    }

    loadData() {
        this.data.getData();
    }

    getLevel() {
        return this.data.level;
    }

    setLevel() {
        this.data.level++;
    }

    setSoundSwitch(val) {
        // this.data.soundSwitch = val;
        MusicManager.initMusic();
        this.saveData();
    }

    getSoundSwitch(): boolean {
        return true;
    }

    setSoundYinXiaoSwitch(v) {
        // this.data.soundYinXiao = v;
        MusicManager.initMusic();
        this.saveData();
    }

    getSoundYinXiaoSwitch(): boolean {
        return true;
    }

    saveData() {
        this.data.saveData();
    }
    resetData() {
        this.data.resetData();
    }
}

export default PlayerModel.instance();

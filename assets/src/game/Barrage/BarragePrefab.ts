import DataManager from "../../framework/manager/DataManager";
import MKUtils from "../../framework/tools/MkUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BarragePrefab extends cc.Component {

    @property(cc.Sprite)
    headIcon : cc.Sprite = null;
    @property(cc.Label)
    nameLabel : cc.Label = null;
    @property(cc.Label)
    moneyLabel : cc.Label = null;
    @property(cc.Label)
    descLb1 : cc.Label = null;
    @property(cc.Label)
    descLb2 : cc.Label = null;

    setData(){
        let barrageData = DataManager.getJson("barrage");
        let data = barrageData[DataManager._barrageIndex];
        
        DataManager._barrageIndex++;
        if (DataManager._barrageIndex > 392) {
            DataManager._barrageIndex = 1;
        }

        this.nameLabel.string = data["name"];
        this.moneyLabel.string = data["money"] + "元";

        MKUtils.loadSpriteFrame("texture/barrage/" + data["headshot"], function (spriteFrame) {  //
           if(spriteFrame) this.headIcon.spriteFrame = spriteFrame;
        }.bind(this))
    }
}

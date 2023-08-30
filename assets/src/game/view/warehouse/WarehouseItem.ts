// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventDispath from "../../../framework/message/EventDispath";
import MKUtils from "../../../framework/tools/MkUtils";
import ConfigManager from "../../manager/ConfigManager";
import { storeConfig } from "../main/WarehousePrefab";
import AItemRenderer from "../task/AItemRenerer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WarehouseItem extends AItemRenderer<string> {

    @property(cc.Sprite)
    uImgCrop: cc.Sprite = null;

    @property(cc.Label)
    ulabelRepertory: cc.Label = null;   // 库存

    @property(cc.Label)
    ulabelName: cc.Label = null;

    onLoad() {
        // EventDispath.on(this.node, this.onSelect, this);
    }
    protected dataChanged(): void {
        // console.log(this.data);
        this.initUI();
    }
    initUI() {
        let cropCfg = ConfigManager.getCropById(this.data.cropId);
        this.ulabelName.string = `${cropCfg.name}`;
        this.ulabelRepertory.string = `数量:${this.data.num}`;
        MKUtils.loadSpriteFrame("texture/crop/icon/" + `${this.data.cropId}`, (res) => {
            this.uImgCrop.spriteFrame = res;
        });
    }

    onSelect(): void {
        // cc.log("点击了item");
    }

    onDestroy() {
        // EventDispath.removeEventListeners(this);
    }
}

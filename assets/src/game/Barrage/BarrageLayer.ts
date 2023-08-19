import UIMananger from "../../framework/manager/UIMananger";
import MKUtils from "../../framework/tools/MkUtils";
import BarragePrefab from "./BarragePrefab";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BarrageLayer extends cc.Component {
    @property(cc.Prefab)
    barrageNode : cc.Prefab = null;

    _barrageIndex : number = 0;
    _actionNum : number = 0;
    start(){
        //一秒之后
        this.scheduleOnce(this.initBarrage.bind(this),1);
    }
    initBarrage(){
        let barrageNode = UIMananger.barragePool.get();
        if(!barrageNode){
            barrageNode = cc.instantiate(this.barrageNode);
        }
        barrageNode.getComponent(BarragePrefab).setData();
        cc.director.getScene().addChild(barrageNode);

        let y1 = this._barrageIndex == 0 ? cc.winSize.height - 500 : cc.winSize.height - 700;
        let p = cc.v2(1330,y1);
        barrageNode.setPosition(p);
        barrageNode.runAction(cc.sequence(cc.moveTo(10, 0, barrageNode.y), cc.moveTo(5, -690, barrageNode.y), cc.callFunc(() => {
            UIMananger.barragePool.put(barrageNode);
            if (this._actionNum == 0) {
                this._actionNum++;
                return;
            }
            if (this._barrageIndex == 2) {
                let delayTime = MKUtils.randomNM(3, 8);
                this.scheduleOnce(() => {
                    this._barrageIndex = 0;
                    this._actionNum = 0;
                    this.initBarrage();
                }, delayTime)
            }
        })))
        if (this._barrageIndex == 0) {
            let time = MKUtils.randomNM(2, 20);
            this.scheduleOnce(() => {
                this.initBarrage();
            }, time)
        }
        this._barrageIndex++;
    }
}

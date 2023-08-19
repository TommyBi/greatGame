import MKUtils from "../../../framework/tools/MkUtils";
import BaseView from "../../../framework/ui/BaseView";

const { ccclass } = cc._decorator;

@ccclass
export default class GameMainView extends BaseView {

    onLoad() {
        this._initComponet();
        cc.winSize.height
    }

    protected update(dt: number): void {
    }

    start() {
        MKUtils.setNodeDelay(this.node, 2, () => {
            // 延迟做todo
        });
    }
    onEnable(): void {
        // EventDispath.on(this.btn_lvUp, this.onLvUp, this);
        // EventDispath.addEventListener(EventType.CROP_GET, this.getCrop, this);
    }

    //初始化场景中的节点
    _initComponet() {
        // this.zlPro = this.btn_zlgk.getChildByName("zl_proBar").getComponent(cc.ProgressBar);
        // this.roadPfb = cc.instantiate(this.roadPrefab);
        // road.addChild(this.roadPfb);
        // this.roadPfb.getComponent(RoadPrefab).setData(uiCfg.roadId);
    }
}

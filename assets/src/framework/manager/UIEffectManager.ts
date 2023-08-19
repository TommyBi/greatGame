import Handler from "../base/Handler";
import ScaleUIEffect from "../ui/effect/ScaleUIEffect";
import FadeUIEffect from "../ui/effect/FadeUIEffect";
import TopUIEffect from "../ui/effect/TopUIEffect";
import TopBackUIEffect from "../ui/effect/TopBackUIEffect";
import ScaleBackUIEffect from "../ui/effect/ScaleBackUIEffect";
import FadeBackUIEffect from "../ui/effect/FadeBackUIEffect";

export enum UIEffectType {
  SCALE = "scale",
  SCALEBACK = "scaleback",
  FADE = "fade",
  FADEBACK = 'fadeback',
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
  TOPBACK = "topback",
}
class UIEffectManager {
  private static _instance: UIEffectManager;
  private effectObj: Object;
  private effectType: Object;

  constructor() {
    this.effectObj = {};
    this.effectType = {};
    this.effectType[UIEffectType.SCALE] = ScaleUIEffect;
    this.effectType[UIEffectType.FADE] = FadeUIEffect;
    this.effectType[UIEffectType.TOP] = TopUIEffect;
    this.effectType[UIEffectType.TOPBACK] = TopBackUIEffect;
    this.effectType[UIEffectType.SCALEBACK] = ScaleBackUIEffect;
    this.effectType[UIEffectType.FADEBACK] = FadeBackUIEffect;
  }

  static instance(): UIEffectManager {
    if (!this._instance) {
      this._instance = new UIEffectManager();
    }
    return this._instance;
  }

  effect(type: string, node: cc.Node, isOpen: boolean, handler: Handler, time: number = 0.3) {
    if (!this.effectObj.hasOwnProperty(type)) {
      this.effectObj[type] = new this.effectType[type]();
    }
    this.effectObj[type].run(node, time, isOpen, handler);
  }
}

export default UIEffectManager.instance();

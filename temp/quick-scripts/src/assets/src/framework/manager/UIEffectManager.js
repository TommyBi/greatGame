"use strict";
cc._RF.push(module, '26202sVGqBE0YykrPyeNJkW', 'UIEffectManager');
// src/framework/manager/UIEffectManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIEffectType = void 0;
var ScaleUIEffect_1 = require("../ui/effect/ScaleUIEffect");
var FadeUIEffect_1 = require("../ui/effect/FadeUIEffect");
var TopUIEffect_1 = require("../ui/effect/TopUIEffect");
var TopBackUIEffect_1 = require("../ui/effect/TopBackUIEffect");
var ScaleBackUIEffect_1 = require("../ui/effect/ScaleBackUIEffect");
var FadeBackUIEffect_1 = require("../ui/effect/FadeBackUIEffect");
var UIEffectType;
(function (UIEffectType) {
    UIEffectType["SCALE"] = "scale";
    UIEffectType["SCALEBACK"] = "scaleback";
    UIEffectType["FADE"] = "fade";
    UIEffectType["FADEBACK"] = "fadeback";
    UIEffectType["LEFT"] = "left";
    UIEffectType["RIGHT"] = "right";
    UIEffectType["TOP"] = "top";
    UIEffectType["BOTTOM"] = "bottom";
    UIEffectType["TOPBACK"] = "topback";
})(UIEffectType = exports.UIEffectType || (exports.UIEffectType = {}));
var UIEffectManager = /** @class */ (function () {
    function UIEffectManager() {
        this.effectObj = {};
        this.effectType = {};
        this.effectType[UIEffectType.SCALE] = ScaleUIEffect_1.default;
        this.effectType[UIEffectType.FADE] = FadeUIEffect_1.default;
        this.effectType[UIEffectType.TOP] = TopUIEffect_1.default;
        this.effectType[UIEffectType.TOPBACK] = TopBackUIEffect_1.default;
        this.effectType[UIEffectType.SCALEBACK] = ScaleBackUIEffect_1.default;
        this.effectType[UIEffectType.FADEBACK] = FadeBackUIEffect_1.default;
    }
    UIEffectManager.instance = function () {
        if (!this._instance) {
            this._instance = new UIEffectManager();
        }
        return this._instance;
    };
    UIEffectManager.prototype.effect = function (type, node, isOpen, handler, time) {
        if (time === void 0) { time = 0.3; }
        if (!this.effectObj.hasOwnProperty(type)) {
            this.effectObj[type] = new this.effectType[type]();
        }
        this.effectObj[type].run(node, time, isOpen, handler);
    };
    return UIEffectManager;
}());
exports.default = UIEffectManager.instance();

cc._RF.pop();
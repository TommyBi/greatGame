"use strict";
cc._RF.push(module, '29d1ejPy4hAtZTNuaVToEwQ', 'BaseUIEffect');
// src/framework/ui/BaseUIEffect.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseUIEffect = /** @class */ (function () {
    function BaseUIEffect(type) {
        this.time = 0.2;
        this.type = type;
    }
    BaseUIEffect.prototype.run = function (node, time, isOpen, handler) {
    };
    return BaseUIEffect;
}());
exports.default = BaseUIEffect;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/ui/BaseUIEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VVSUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBR0ksc0JBQVksSUFBSTtRQURULFNBQUksR0FBVSxHQUFHLENBQUM7UUFHckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsSUFBVyxFQUFDLE1BQWMsRUFBQyxPQUFlO0lBRzNELENBQUM7SUFDTCxtQkFBQztBQUFELENBWkEsQUFZQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVVJRWZmZWN0e1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIHRpbWU6bnVtYmVyID0gMC4yO1xyXG4gICAgY29uc3RydWN0b3IodHlwZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bihub2RlOmNjLk5vZGUsdGltZTpudW1iZXIsaXNPcGVuOmJvb2xlYW4saGFuZGxlcjpIYW5kbGVyKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=
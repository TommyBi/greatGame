
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3VpL0Jhc2VVSUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBR0ksc0JBQVksSUFBSTtRQURULFNBQUksR0FBVSxHQUFHLENBQUM7UUFHckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsSUFBVyxFQUFDLE1BQWMsRUFBQyxPQUFlO0lBRzNELENBQUM7SUFDTCxtQkFBQztBQUFELENBWkEsQUFZQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbmRsZXIgZnJvbSBcIi4uL2Jhc2UvSGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVUlFZmZlY3R7XG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xuICAgIHB1YmxpYyB0aW1lOm51bWJlciA9IDAuMjtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKVxuICAgIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBydW4obm9kZTpjYy5Ob2RlLHRpbWU6bnVtYmVyLGlzT3Blbjpib29sZWFuLGhhbmRsZXI6SGFuZGxlcilcbiAgICB7XG5cbiAgICB9XG59XG4iXX0=
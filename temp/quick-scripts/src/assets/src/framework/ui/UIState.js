"use strict";
cc._RF.push(module, 'd52d3KUVu5NEKYy4s6U/Qeg', 'UIState');
// src/framework/ui/UIState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIState = exports.StateType = void 0;
var StateType;
(function (StateType) {
    StateType[StateType["close"] = 0] = "close";
    StateType[StateType["opening"] = 1] = "opening";
    StateType[StateType["open"] = 2] = "open"; //完全打开
})(StateType = exports.StateType || (exports.StateType = {}));
/**
 * ui状态
 */
var UIState = /** @class */ (function () {
    function UIState() {
        this.uinId = 0;
        this.uinId = UIState.StateID++;
    }
    UIState.prototype.setData = function (data) {
        this.uName = data.uname;
        this.openState = StateType.opening;
        this.isActive = true;
    };
    UIState.prototype.reset = function () {
        if (this.ui) {
            this.ui.close();
        }
        this.ui = null;
        this.uName = '';
        this.openState = StateType.close;
    };
    UIState.StateID = 0;
    return UIState;
}());
exports.UIState = UIState;

cc._RF.pop();
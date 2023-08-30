"use strict";
cc._RF.push(module, '19303+m491CoJ92k/V2kUYM', 'AItemRenerer');
// src/game/view/task/AItemRenerer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 单项渲染基类 T数据结构
 * @author slf
 *  */
var AItemRenderer = /** @class */ (function (_super) {
    __extends(AItemRenderer, _super);
    function AItemRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isClick = false;
        return _this;
    }
    Object.defineProperty(AItemRenderer.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (v) {
            this._index = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AItemRenderer.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (v) {
            this._data = v;
            this.dataChanged();
        },
        enumerable: false,
        configurable: true
    });
    /**数据发生变化 子类重写*/
    AItemRenderer.prototype.dataChanged = function () { };
    /**刷新数据 */
    AItemRenderer.prototype.refreshData = function () {
        this.dataChanged();
    };
    /**销毁 */
    AItemRenderer.prototype.onDestroy = function () {
        this._data = null;
    };
    /**
     * 设置点击回调
     * @param cb 回调函数
     * @param cbT 回调作用域
     */
    AItemRenderer.prototype.setTouchCallback = function (cb, cbT) {
        this.callback = cb;
        this.cbThis = cbT;
        if (this.node) {
            if (this.node.hasEventListener(cc.Node.EventType.TOUCH_END)) {
                this.node.off(cc.Node.EventType.TOUCH_END, this.onClickCallback, this);
            }
            this.node.on(cc.Node.EventType.TOUCH_END, this.onClickCallback, this);
        }
    };
    /**
     * 预制体点击回调 会携带data
     * @param e
     */
    AItemRenderer.prototype.onClickCallback = function (e) {
        this.callback && this.callback.call(this.cbThis, this.data);
    };
    __decorate([
        property({ displayName: "是否添加点击事件" })
    ], AItemRenderer.prototype, "isClick", void 0);
    AItemRenderer = __decorate([
        ccclass
    ], AItemRenderer);
    return AItemRenderer;
}(cc.Component));
exports.default = AItemRenderer;

cc._RF.pop();
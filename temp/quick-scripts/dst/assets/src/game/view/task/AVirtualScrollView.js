
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/task/AVirtualScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06cdcCr0YVMXJ9Tq9EWQH4M', 'AVirtualScrollView');
// src/game/view/task/AVirtualScrollView.ts

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
var AItemRenerer_1 = require("./AItemRenerer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 虚拟滚动视图 扩展cc.ScrollView
 * 渲染预制体必需挂载 AItemRenderer子类
 * @author slf
 */
var AVirtualScrollView = /** @class */ (function (_super) {
    __extends(AVirtualScrollView, _super);
    function AVirtualScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**渲染预制体必需挂载 AItemRenderer子类 */
        _this.itemRenderer = null;
        _this.oldIdx = 0;
        _this.newIdx = 0;
        _this.isFirst = true;
        return _this;
    }
    AVirtualScrollView.prototype.onLoad = function () {
        this.itemList = [];
        this.itemPool = [];
        this.itemRendererList = [];
        this.contentLayout = this.content.getComponent(cc.Layout);
        this.contentLayout.enabled = false;
        //起始位置
        var itemNode = this.itemRenderer.data;
        this.startPos = new cc.Vec2(itemNode.width * itemNode.anchorX + this.contentLayout.paddingLeft, -(itemNode.height * itemNode.anchorY + this.contentLayout.paddingTop));
        //预制体宽高
        this.itemW = itemNode.width + this.contentLayout.spacingX;
        this.itemH = itemNode.height + this.contentLayout.spacingY;
        //垂直、水平最大预制体数量
        this.horizontalCount = Math.ceil(this.node.width / this.itemW) + 1;
        this.verticalCount = Math.ceil(this.node.height / this.itemH) + 1;
        if (this.contentLayout.type == cc.Layout.Type.GRID) {
            if (this.contentLayout.startAxis == cc.Layout.AxisDirection.HORIZONTAL) {
                this.horizontalCount = Math.floor(this.node.width / this.itemW);
            }
            else {
                this.verticalCount = Math.floor(this.node.height / this.itemH);
            }
        }
    };
    AVirtualScrollView.prototype.onDestroy = function () {
        this.dataList = null;
        this.itemList = null;
        this.itemRendererList = null;
        clearInterval(this.interval);
    };
    /**利用cc.ScrollView本身方法 来标记滑动中 */
    AVirtualScrollView.prototype.setContentPosition = function (position) {
        _super.prototype.setContentPosition.call(this, position);
        ++this.oldIdx;
    };
    /**
    * 设置列表 子项点击回调
    * 回调会携带当前子项的 data
    * @param cb 回调
    * @param cbT 作用域
    */
    AVirtualScrollView.prototype.setTouchItemCallback = function (cb, cbT) {
        this.callback = cb;
        this.cbThis = cbT;
    };
    /**选中数据 */
    AVirtualScrollView.prototype.onItemTap = function (data) {
        this.callback && this.callback.call(this.cbThis, data);
    };
    /**
     * 刷新数据
     * @param data 数据源 单项|队列
     */
    AVirtualScrollView.prototype.refreshData = function (data) {
        if (Array.isArray(data)) {
            this.dataList = data;
        }
        else {
            this.dataList = [data];
        }
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.clearItem();
        this.addItem();
        this.refreshContentSize();
        this.interval = setInterval(this.refreshItem.bind(this), 1000 / 10);
    };
    /**添加预制体 */
    AVirtualScrollView.prototype.addItem = function () {
        var len = 0;
        switch (this.contentLayout.type) {
            case cc.Layout.Type.HORIZONTAL:
                len = this.horizontalCount;
                break;
            case cc.Layout.Type.VERTICAL:
                len = this.verticalCount;
                break;
            case cc.Layout.Type.GRID:
                len = this.horizontalCount * this.verticalCount;
                break;
        }
        len = Math.min(len, this.dataList.length);
        var itemListLen = this.itemList.length;
        if (itemListLen < len) {
            var itemRenderer = null;
            for (var i = itemListLen; i < len; i++) {
                var child = this.itemPool.length > 0 ? this.itemPool.shift() : cc.instantiate(this.itemRenderer);
                this.content.addChild(child);
                this.itemList.push(child);
                itemRenderer = child.getComponent(AItemRenerer_1.default);
                this.itemRendererList.push(itemRenderer);
                if (!this.isFirst) {
                    itemRenderer.data = this.dataList[i];
                }
                if (itemRenderer.isClick) {
                    itemRenderer.setTouchCallback(this.onItemTap, this);
                }
            }
        }
        else {
            var cL = this.content.childrenCount;
            var item = void 0;
            while (cL > len) {
                item = this.itemList[cL - 1];
                this.content.removeChild(item);
                this.itemList.splice(cL - 1, 1);
                this.itemRendererList.splice(cL - 1, 1);
                this.itemPool.push(item);
                cL = this.content.childrenCount;
            }
        }
    };
    AVirtualScrollView.prototype.clearItem = function () {
        for (var i = 0; i < this.itemList.length; i++) {
            var item = this.itemList[i];
            this.content.removeChild(item);
            this.itemPool.push(item);
        }
        this.itemList = [];
        this.itemRendererList = [];
    };
    /**根据数据数量 改变content宽高 */
    AVirtualScrollView.prototype.refreshContentSize = function () {
        var layout = this.contentLayout;
        var dataListLen = this.dataList.length;
        switch (this.contentLayout.type) {
            case cc.Layout.Type.VERTICAL:
                this.content.height = layout.paddingTop + dataListLen * this.itemH + layout.paddingBottom;
                break;
            case cc.Layout.Type.HORIZONTAL:
                this.content.width = layout.paddingLeft + dataListLen * this.itemW + layout.paddingRight;
                break;
            case cc.Layout.Type.GRID:
                if (this.contentLayout.startAxis == cc.Layout.AxisDirection.HORIZONTAL) {
                    this.content.height = layout.paddingTop + Math.ceil(dataListLen / this.horizontalCount) * this.itemH + layout.paddingBottom;
                }
                else if (this.contentLayout.startAxis == cc.Layout.AxisDirection.VERTICAL) {
                    this.content.width = layout.paddingLeft + Math.ceil(dataListLen / this.verticalCount) * this.itemW + layout.paddingRight;
                }
                break;
        }
    };
    /**刷新预制体位置 和 数据填充 */
    AVirtualScrollView.prototype.refreshItem = function () {
        if (this.oldIdx == this.newIdx) {
            return;
        }
        this.isFirst = false;
        this.newIdx = this.oldIdx;
        switch (this.contentLayout.type) {
            case cc.Layout.Type.HORIZONTAL:
                this.refreshHorizontal();
                break;
            case cc.Layout.Type.VERTICAL:
                this.refreshVertical();
                break;
            case cc.Layout.Type.GRID:
                this.refreshGrid();
                break;
        }
    };
    /**刷新水平 */
    AVirtualScrollView.prototype.refreshHorizontal = function () {
        var start = Math.floor(Math.abs(this.getContentPosition().x) / this.itemW);
        if (start < 0 || this.getContentPosition().x > 0) { //超出边界处理
            start = 0;
        }
        var end = start + this.horizontalCount;
        if (end > this.dataList.length) { //超出边界处理
            end = this.dataList.length;
            start = Math.max(end - this.horizontalCount, 0);
        }
        var tempV = 0;
        var itemListLen = this.itemList.length;
        var item, idx;
        for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            tempV = this.startPos.x + ((start + i) * this.itemW);
            if (item.x != tempV) {
                item.x = tempV;
                this.itemRendererList[idx].index = i;
                this.itemRendererList[idx].data = this.dataList[start + i];
                // console.log("修改的数据=" + (start + this.itemRendererList[idx].data))
            }
        }
    };
    /**刷新垂直 */
    AVirtualScrollView.prototype.refreshVertical = function () {
        var start = Math.floor(Math.abs(this.getContentPosition().y) / this.itemH);
        if (start < 0 || this.getContentPosition().y < 0) {
            start = 0;
        }
        var end = start + this.verticalCount;
        if (end > this.dataList.length) {
            end = this.dataList.length;
            start = Math.max(end - this.verticalCount, 0);
        }
        var tempV = 0;
        var itemListLen = this.itemList.length;
        var item, idx;
        for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            tempV = this.startPos.y + (-(start + i) * this.itemH);
            if (item.y != tempV) {
                // console.log("修改的数据=" + (start + i))
                item.y = tempV;
                this.itemRendererList[idx].index = i;
                this.itemRendererList[idx].data = this.dataList[start + i];
            }
        }
    };
    /**刷新网格 */
    AVirtualScrollView.prototype.refreshGrid = function () {
        //是否垂直方向 添加网格
        var isVDirection = this.contentLayout.startAxis == cc.Layout.AxisDirection.VERTICAL;
        var start = Math.floor(Math.abs(this.getContentPosition().y) / this.itemH) * this.horizontalCount;
        if (isVDirection) {
            start = Math.floor(Math.abs(this.getContentPosition().x) / this.itemW) * this.verticalCount;
            if (this.getContentPosition().x > 0) {
                start = 0;
            }
        }
        else if (this.getContentPosition().y < 0) {
            start = 0;
        }
        if (start < 0) {
            start = 0;
        }
        var end = start + this.horizontalCount * this.verticalCount;
        if (end > this.dataList.length) {
            end = this.dataList.length;
            start = Math.max(end - this.horizontalCount * this.verticalCount, 0);
        }
        var tempX = 0;
        var tempY = 0;
        var itemListLen = this.itemList.length;
        var item, idx;
        for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            if (isVDirection) {
                tempX = this.startPos.x + (Math.floor((start + i) / this.verticalCount)) * this.itemW;
                tempY = this.startPos.y + -((start + i) % this.verticalCount) * this.itemH;
            }
            else {
                tempX = this.startPos.x + ((start + i) % this.horizontalCount) * this.itemW;
                tempY = this.startPos.y + -(Math.floor((start + i) / this.horizontalCount)) * this.itemH;
            }
            if (item.y != tempY || item.x != tempX) {
                // console.log("修改的数据=" + (start + i))
                item.x = tempX;
                item.y = tempY;
                this.itemRendererList[idx].index = i;
                this.itemRendererList[idx].data = this.dataList[start + i];
            }
        }
    };
    AVirtualScrollView.prototype.getItemByIndex = function (index) {
        return this.itemList[index];
    };
    __decorate([
        property({ type: cc.Prefab, serializable: true, displayName: "渲染预制体" })
    ], AVirtualScrollView.prototype, "itemRenderer", void 0);
    AVirtualScrollView = __decorate([
        ccclass
    ], AVirtualScrollView);
    return AVirtualScrollView;
}(cc.ScrollView));
exports.default = AVirtualScrollView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L3Rhc2svQVZpcnR1YWxTY3JvbGxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1Qzs7OztHQUlHO0FBRUg7SUFBZ0Qsc0NBQWE7SUFBN0Q7UUFBQSxxRUE2VEM7UUE1VEcsK0JBQStCO1FBRS9CLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBNEJ2QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFlBQU0sR0FBVyxDQUFDLENBQUM7UUE0SjNCLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBaUluQixDQUFDO0lBM1JhLG1DQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFbkMsTUFBTTtRQUNOLElBQUksUUFBUSxHQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENB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SyxDQUFDO2dCQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlEO1NBQ0o7SUFDTCxDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLEtBQUs7UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUF6VEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQzs0REFDekM7SUFIZCxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQTZUdEM7SUFBRCx5QkFBQztDQTdURCxBQTZUQyxDQTdUK0MsRUFBRSxDQUFDLFVBQVUsR0E2VDVEO2tCQTdUb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFJdGVtUmVuZGVyZXIgZnJvbSBcIi4vQUl0ZW1SZW5lcmVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIOiZmuaLn+a7muWKqOinhuWbviDmianlsZVjYy5TY3JvbGxWaWV3XHJcbiAqIOa4suafk+mihOWItuS9k+W/hemcgOaMgui9vSBBSXRlbVJlbmRlcmVy5a2Q57G7XHJcbiAqIEBhdXRob3Igc2xmXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBVmlydHVhbFNjcm9sbFZpZXcgZXh0ZW5kcyBjYy5TY3JvbGxWaWV3IHtcclxuICAgIC8qKua4suafk+mihOWItuS9k+W/hemcgOaMgui9vSBBSXRlbVJlbmRlcmVy5a2Q57G7ICovXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHNlcmlhbGl6YWJsZTogdHJ1ZSwgZGlzcGxheU5hbWU6IFwi5riy5p+T6aKE5Yi25L2TXCIgfSlcclxuICAgIGl0ZW1SZW5kZXJlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvKirlrZDpobnngrnlh7sg5Zue6LCD5Ye95pWwICDlm57osIPkvZznlKjln58qL1xyXG4gICAgcHJvdGVjdGVkIGNhbGxiYWNrOiBGdW5jdGlvbjtcclxuICAgIHByb3RlY3RlZCBjYlRoaXM6IGFueTtcclxuXHJcbiAgICAvKirmnIDlpKfmuLLmn5PpooTliLbkvZMg5Z6C55u05pWw6YePICovXHJcbiAgICBwcml2YXRlIHZlcnRpY2FsQ291bnQ6IG51bWJlcjtcclxuICAgIC8qKuacgOWkp+a4suafk+mihOWItuS9kyDmsLTlubPmlbDph48gKi9cclxuICAgIHByaXZhdGUgaG9yaXpvbnRhbENvdW50OiBudW1iZXI7XHJcbiAgICAvKirpooTliLbkvZPlrr3pq5ggKi9cclxuICAgIHByaXZhdGUgaXRlbVc6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaXRlbUg6IG51bWJlcjtcclxuICAgIC8qKuWumuaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgLyoq6aKE5Yi25L2T5rGgICovXHJcbiAgICBwcml2YXRlIGl0ZW1Qb29sOiBhbnlbXTtcclxuICAgIC8qKumihOWItuS9k+WIl+ihqCAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogYW55W107XHJcbiAgICAvKirpooTliLbkvZPmuLLmn5PnsbvliJfooaggKi9cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcmVyTGlzdDogYW55W107XHJcbiAgICAvKirmlbDmja7liJfooaggKi9cclxuICAgIHByaXZhdGUgZGF0YUxpc3Q6IGFueVtdO1xyXG4gICAgLyoq5byA5aeL5Z2Q5qCHICovXHJcbiAgICBwcml2YXRlIHN0YXJ0UG9zOiBjYy5WZWMyO1xyXG4gICAgLyoq5biD5bGAKi9cclxuICAgIHByaXZhdGUgY29udGVudExheW91dDogY2MuTGF5b3V0O1xyXG5cclxuICAgIHByaXZhdGUgb2xkSWR4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBuZXdJZHg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5pdGVtUG9vbCA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXRlbVJlbmRlcmVyTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29udGVudExheW91dCA9IHRoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRMYXlvdXQuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL+i1t+Wni+S9jee9rlxyXG4gICAgICAgIGxldCBpdGVtTm9kZTogY2MuTm9kZSA9IHRoaXMuaXRlbVJlbmRlcmVyLmRhdGE7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IG5ldyBjYy5WZWMyKGl0ZW1Ob2RlLndpZHRoICogaXRlbU5vZGUuYW5jaG9yWCArIHRoaXMuY29udGVudExheW91dC5wYWRkaW5nTGVmdCwgLShpdGVtTm9kZS5oZWlnaHQgKiBpdGVtTm9kZS5hbmNob3JZICsgdGhpcy5jb250ZW50TGF5b3V0LnBhZGRpbmdUb3ApKTtcclxuICAgICAgICAvL+mihOWItuS9k+WuvemrmFxyXG4gICAgICAgIHRoaXMuaXRlbVcgPSBpdGVtTm9kZS53aWR0aCArIHRoaXMuY29udGVudExheW91dC5zcGFjaW5nWDtcclxuICAgICAgICB0aGlzLml0ZW1IID0gaXRlbU5vZGUuaGVpZ2h0ICsgdGhpcy5jb250ZW50TGF5b3V0LnNwYWNpbmdZO1xyXG4gICAgICAgIC8v5Z6C55u044CB5rC05bmz5pyA5aSn6aKE5Yi25L2T5pWw6YePXHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsQ291bnQgPSBNYXRoLmNlaWwodGhpcy5ub2RlLndpZHRoIC8gdGhpcy5pdGVtVykgKyAxO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxDb3VudCA9IE1hdGguY2VpbCh0aGlzLm5vZGUuaGVpZ2h0IC8gdGhpcy5pdGVtSCkgKyAxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250ZW50TGF5b3V0LnR5cGUgPT0gY2MuTGF5b3V0LlR5cGUuR1JJRCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50TGF5b3V0LnN0YXJ0QXhpcyA9PSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWxDb3VudCA9IE1hdGguZmxvb3IodGhpcy5ub2RlLndpZHRoIC8gdGhpcy5pdGVtVyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsQ291bnQgPSBNYXRoLmZsb29yKHRoaXMubm9kZS5oZWlnaHQgLyB0aGlzLml0ZW1IKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXRlbVJlbmRlcmVyTGlzdCA9IG51bGw7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliKnnlKhjYy5TY3JvbGxWaWV35pys6Lqr5pa55rOVIOadpeagh+iusOa7keWKqOS4rSAqL1xyXG4gICAgc2V0Q29udGVudFBvc2l0aW9uKHBvc2l0aW9uOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0Q29udGVudFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICArK3RoaXMub2xkSWR4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDorr7nva7liJfooagg5a2Q6aG554K55Ye75Zue6LCDXHJcbiAgICAqIOWbnuiwg+S8muaQuuW4puW9k+WJjeWtkOmhueeahCBkYXRhXHJcbiAgICAqIEBwYXJhbSBjYiDlm57osINcclxuICAgICogQHBhcmFtIGNiVCDkvZznlKjln59cclxuICAgICovXHJcbiAgICBwdWJsaWMgc2V0VG91Y2hJdGVtQ2FsbGJhY2soY2I6IEZ1bmN0aW9uLCBjYlQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYjtcclxuICAgICAgICB0aGlzLmNiVGhpcyA9IGNiVDtcclxuICAgIH1cclxuXHJcbiAgICAvKirpgInkuK3mlbDmja4gKi9cclxuICAgIHByaXZhdGUgb25JdGVtVGFwKGRhdGE6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2suY2FsbCh0aGlzLmNiVGhpcywgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliLfmlrDmlbDmja5cclxuICAgICAqIEBwYXJhbSBkYXRhIOaVsOaNrua6kCDljZXpobl86Zif5YiXXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWZyZXNoRGF0YShkYXRhOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbZGF0YV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFySXRlbSgpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZEl0ZW0oKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnJlZnJlc2hJdGVtLmJpbmQodGhpcyksIDEwMDAgLyAxMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKua3u+WKoOmihOWItuS9kyAqL1xyXG4gICAgcHJpdmF0ZSBhZGRJdGVtKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBsZW46IG51bWJlciA9IDA7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvbnRlbnRMYXlvdXQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICBsZW4gPSB0aGlzLmhvcml6b250YWxDb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgbGVuID0gdGhpcy52ZXJ0aWNhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgIGxlbiA9IHRoaXMuaG9yaXpvbnRhbENvdW50ICogdGhpcy52ZXJ0aWNhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxlbiA9IE1hdGgubWluKGxlbiwgdGhpcy5kYXRhTGlzdC5sZW5ndGgpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbUxpc3RMZW4gPSB0aGlzLml0ZW1MaXN0Lmxlbmd0aDtcclxuICAgICAgICBpZiAoaXRlbUxpc3RMZW4gPCBsZW4pIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1SZW5kZXJlciA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBpdGVtTGlzdExlbjsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLml0ZW1Qb29sLmxlbmd0aCA+IDAgPyB0aGlzLml0ZW1Qb29sLnNoaWZ0KCkgOiBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1SZW5kZXJlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXJlciA9IGNoaWxkLmdldENvbXBvbmVudChBSXRlbVJlbmRlcmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVJlbmRlcmVyTGlzdC5wdXNoKGl0ZW1SZW5kZXJlcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1SZW5kZXJlci5kYXRhID0gdGhpcy5kYXRhTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVJlbmRlcmVyLmlzQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyZXIuc2V0VG91Y2hDYWxsYmFjayh0aGlzLm9uSXRlbVRhcCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY0w6IG51bWJlciA9IHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgICAgICBsZXQgaXRlbTtcclxuICAgICAgICAgICAgd2hpbGUgKGNMID4gbGVuKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5pdGVtTGlzdFtjTCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zcGxpY2UoY0wgLSAxLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVJlbmRlcmVyTGlzdC5zcGxpY2UoY0wgLSAxLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVBvb2wucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGNMID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjbGVhckl0ZW0oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtTGlzdFtpXTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUNoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1Qb29sLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLml0ZW1SZW5kZXJlckxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmoLnmja7mlbDmja7mlbDph48g5pS55Y+YY29udGVudOWuvemrmCAqL1xyXG4gICAgcHJpdmF0ZSByZWZyZXNoQ29udGVudFNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGxheW91dDogY2MuTGF5b3V0ID0gdGhpcy5jb250ZW50TGF5b3V0O1xyXG4gICAgICAgIGxldCBkYXRhTGlzdExlbjogbnVtYmVyID0gdGhpcy5kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvbnRlbnRMYXlvdXQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9IGxheW91dC5wYWRkaW5nVG9wICsgZGF0YUxpc3RMZW4gKiB0aGlzLml0ZW1IICsgbGF5b3V0LnBhZGRpbmdCb3R0b207XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LndpZHRoID0gbGF5b3V0LnBhZGRpbmdMZWZ0ICsgZGF0YUxpc3RMZW4gKiB0aGlzLml0ZW1XICsgbGF5b3V0LnBhZGRpbmdSaWdodDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZW50TGF5b3V0LnN0YXJ0QXhpcyA9PSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmhlaWdodCA9IGxheW91dC5wYWRkaW5nVG9wICsgTWF0aC5jZWlsKGRhdGFMaXN0TGVuIC8gdGhpcy5ob3Jpem9udGFsQ291bnQpICogdGhpcy5pdGVtSCArIGxheW91dC5wYWRkaW5nQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRMYXlvdXQuc3RhcnRBeGlzID09IGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LndpZHRoID0gbGF5b3V0LnBhZGRpbmdMZWZ0ICsgTWF0aC5jZWlsKGRhdGFMaXN0TGVuIC8gdGhpcy52ZXJ0aWNhbENvdW50KSAqIHRoaXMuaXRlbVcgKyBsYXlvdXQucGFkZGluZ1JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNGaXJzdCA9IHRydWU7XHJcbiAgICAvKirliLfmlrDpooTliLbkvZPkvY3nva4g5ZKMIOaVsOaNruWhq+WFhSAqL1xyXG4gICAgcHJpdmF0ZSByZWZyZXNoSXRlbSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5vbGRJZHggPT0gdGhpcy5uZXdJZHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5ld0lkeCA9IHRoaXMub2xkSWR4O1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb250ZW50TGF5b3V0LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoSG9yaXpvbnRhbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hWZXJ0aWNhbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuR1JJRDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEdyaWQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirliLfmlrDmsLTlubMgKi9cclxuICAgIHByaXZhdGUgcmVmcmVzaEhvcml6b250YWwoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLmdldENvbnRlbnRQb3NpdGlvbigpLngpIC8gdGhpcy5pdGVtVyk7XHJcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmdldENvbnRlbnRQb3NpdGlvbigpLnggPiAwKSB7ICAgICAgICAgICAgICAgIC8v6LaF5Ye66L6555WM5aSE55CGXHJcbiAgICAgICAgICAgIHN0YXJ0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgdGhpcy5ob3Jpem9udGFsQ291bnQ7XHJcbiAgICAgICAgaWYgKGVuZCA+IHRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7Ly/otoXlh7rovrnnlYzlpITnkIZcclxuICAgICAgICAgICAgZW5kID0gdGhpcy5kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoZW5kIC0gdGhpcy5ob3Jpem9udGFsQ291bnQsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGVtcFYgPSAwO1xyXG4gICAgICAgIGxldCBpdGVtTGlzdExlbiA9IHRoaXMuaXRlbUxpc3QubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpdGVtLCBpZHg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtTGlzdExlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlkeCA9IChzdGFydCArIGkpICUgaXRlbUxpc3RMZW47XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1MaXN0W2lkeF07XHJcbiAgICAgICAgICAgIHRlbXBWID0gdGhpcy5zdGFydFBvcy54ICsgKChzdGFydCArIGkpICogdGhpcy5pdGVtVyk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnggIT0gdGVtcFYpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ueCA9IHRlbXBWO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtUmVuZGVyZXJMaXN0W2lkeF0uaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtUmVuZGVyZXJMaXN0W2lkeF0uZGF0YSA9IHRoaXMuZGF0YUxpc3Rbc3RhcnQgKyBpXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5L+u5pS555qE5pWw5o2uPVwiICsgKHN0YXJ0ICsgdGhpcy5pdGVtUmVuZGVyZXJMaXN0W2lkeF0uZGF0YSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yi35paw5Z6C55u0ICovXHJcbiAgICBwcml2YXRlIHJlZnJlc2hWZXJ0aWNhbCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RhcnQgPSBNYXRoLmZsb29yKE1hdGguYWJzKHRoaXMuZ2V0Q29udGVudFBvc2l0aW9uKCkueSkgLyB0aGlzLml0ZW1IKTtcclxuICAgICAgICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMuZ2V0Q29udGVudFBvc2l0aW9uKCkueSA8IDApIHtcclxuICAgICAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgdGhpcy52ZXJ0aWNhbENvdW50O1xyXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbmQgPSB0aGlzLmRhdGFMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgc3RhcnQgPSBNYXRoLm1heChlbmQgLSB0aGlzLnZlcnRpY2FsQ291bnQsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRlbXBWID0gMDtcclxuICAgICAgICBsZXQgaXRlbUxpc3RMZW4gPSB0aGlzLml0ZW1MaXN0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgaXRlbSwgaWR4O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbUxpc3RMZW47IGkrKykge1xyXG4gICAgICAgICAgICBpZHggPSAoc3RhcnQgKyBpKSAlIGl0ZW1MaXN0TGVuO1xyXG4gICAgICAgICAgICBpdGVtID0gdGhpcy5pdGVtTGlzdFtpZHhdO1xyXG4gICAgICAgICAgICB0ZW1wViA9IHRoaXMuc3RhcnRQb3MueSArICgtKHN0YXJ0ICsgaSkgKiB0aGlzLml0ZW1IKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ueSAhPSB0ZW1wVikge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkv67mlLnnmoTmlbDmja49XCIgKyAoc3RhcnQgKyBpKSlcclxuICAgICAgICAgICAgICAgIGl0ZW0ueSA9IHRlbXBWO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtUmVuZGVyZXJMaXN0W2lkeF0uaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtUmVuZGVyZXJMaXN0W2lkeF0uZGF0YSA9IHRoaXMuZGF0YUxpc3Rbc3RhcnQgKyBpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirliLfmlrDnvZHmoLwgKi9cclxuICAgIHByaXZhdGUgcmVmcmVzaEdyaWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy/mmK/lkKblnoLnm7TmlrnlkJEg5re75Yqg572R5qC8XHJcbiAgICAgICAgbGV0IGlzVkRpcmVjdGlvbiA9IHRoaXMuY29udGVudExheW91dC5zdGFydEF4aXMgPT0gY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLmdldENvbnRlbnRQb3NpdGlvbigpLnkpIC8gdGhpcy5pdGVtSCkgKiB0aGlzLmhvcml6b250YWxDb3VudDtcclxuICAgICAgICBpZiAoaXNWRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLmdldENvbnRlbnRQb3NpdGlvbigpLngpIC8gdGhpcy5pdGVtVykgKiB0aGlzLnZlcnRpY2FsQ291bnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldENvbnRlbnRQb3NpdGlvbigpLnggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0Q29udGVudFBvc2l0aW9uKCkueSA8IDApIHtcclxuICAgICAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkge1xyXG4gICAgICAgICAgICBzdGFydCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZW5kID0gc3RhcnQgKyB0aGlzLmhvcml6b250YWxDb3VudCAqIHRoaXMudmVydGljYWxDb3VudDtcclxuICAgICAgICBpZiAoZW5kID4gdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZW5kID0gdGhpcy5kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoZW5kIC0gdGhpcy5ob3Jpem9udGFsQ291bnQgKiB0aGlzLnZlcnRpY2FsQ291bnQsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRlbXBYID0gMDtcclxuICAgICAgICBsZXQgdGVtcFkgPSAwO1xyXG4gICAgICAgIGxldCBpdGVtTGlzdExlbiA9IHRoaXMuaXRlbUxpc3QubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpdGVtLCBpZHg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtTGlzdExlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlkeCA9IChzdGFydCArIGkpICUgaXRlbUxpc3RMZW47XHJcbiAgICAgICAgICAgIGl0ZW0gPSB0aGlzLml0ZW1MaXN0W2lkeF07XHJcbiAgICAgICAgICAgIGlmIChpc1ZEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRlbXBYID0gdGhpcy5zdGFydFBvcy54ICsgKE1hdGguZmxvb3IoKHN0YXJ0ICsgaSkgLyB0aGlzLnZlcnRpY2FsQ291bnQpKSAqIHRoaXMuaXRlbVc7XHJcbiAgICAgICAgICAgICAgICB0ZW1wWSA9IHRoaXMuc3RhcnRQb3MueSArIC0oKHN0YXJ0ICsgaSkgJSB0aGlzLnZlcnRpY2FsQ291bnQpICogdGhpcy5pdGVtSDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRlbXBYID0gdGhpcy5zdGFydFBvcy54ICsgKChzdGFydCArIGkpICUgdGhpcy5ob3Jpem9udGFsQ291bnQpICogdGhpcy5pdGVtVztcclxuICAgICAgICAgICAgICAgIHRlbXBZID0gdGhpcy5zdGFydFBvcy55ICsgLShNYXRoLmZsb29yKChzdGFydCArIGkpIC8gdGhpcy5ob3Jpem9udGFsQ291bnQpKSAqIHRoaXMuaXRlbUg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnkgIT0gdGVtcFkgfHwgaXRlbS54ICE9IHRlbXBYKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS/ruaUueeahOaVsOaNrj1cIiArIChzdGFydCArIGkpKVxyXG4gICAgICAgICAgICAgICAgaXRlbS54ID0gdGVtcFg7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnkgPSB0ZW1wWTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVJlbmRlcmVyTGlzdFtpZHhdLmluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVJlbmRlcmVyTGlzdFtpZHhdLmRhdGEgPSB0aGlzLmRhdGFMaXN0W3N0YXJ0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbUJ5SW5kZXgoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtTGlzdFtpbmRleF07XHJcbiAgICB9XHJcbn1cclxuIl19
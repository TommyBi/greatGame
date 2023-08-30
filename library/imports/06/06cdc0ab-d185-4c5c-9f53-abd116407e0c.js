"use strict";
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
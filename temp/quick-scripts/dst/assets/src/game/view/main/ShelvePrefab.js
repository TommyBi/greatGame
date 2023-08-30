
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/view/main/ShelvePrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7813fhQ5B9HjKdQB2Z31HsF', 'ShelvePrefab');
// src/game/view/main/ShelvePrefab.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var UIEffectManager_1 = require("../../../framework/manager/UIEffectManager");
var UIMananger_1 = require("../../../framework/manager/UIMananger");
var EventDispath_1 = require("../../../framework/message/EventDispath");
var EventType_1 = require("../../../framework/message/EventType");
var MkUtils_1 = require("../../../framework/tools/MkUtils");
var UIType_1 = require("../../consts/UIType");
var PlayerModel_1 = require("../../datas/PlayerModel");
var PopView1_1 = require("../popView/PopView1");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShelvePrefab = /** @class */ (function (_super) {
    __extends(ShelvePrefab, _super);
    function ShelvePrefab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.crop = null;
        _this.buildTips = null;
        _this.lvUpEff = null;
        _this.cropList = [];
        _this.currentNum = 0; //当前作物数量
        _this.mId = 0; //货架ID
        _this.mLv = 0; //货架等级
        // roleNum = 0;//当前货架前的人数
        _this.roleList = [];
        _this.mIndex = 0;
        //每个货架前的起始点
        _this.targetPoints = [
            cc.v2(-140, -50),
            cc.v2(220, -200),
            cc.v2(270, -10),
            cc.v2(-10, 105),
            cc.v2(-300, 200)
        ];
        _this.allPoints = [];
        _this.cloneAllPoints = [];
        _this.walkLen = 0; //走向该摊位的顾客
        _this.shelvesType = [21, 22, 23, 24, 25,];
        _this.isAuto = false;
        _this.firstPoint = cc.v2();
        return _this;
    }
    ShelvePrefab.prototype.onLoad = function () {
        this.initComponent();
    };
    ShelvePrefab.prototype.start = function () {
        this.lvUpEff.node.active = false;
        EventDispath_1.default.addEventListener(EventType_1.EventType.CASHIER_AUTO_CLOSE, this.closeAuto, this);
        EventDispath_1.default.on(this.buildTips, this.onBuild, this, 0, false);
        EventDispath_1.default.addEventListener(EventType_1.EventType.SHELVE_BUILD, this.onBuildComplete, this);
    };
    ShelvePrefab.prototype.onBuild = function () {
        var _this = this;
        //弹出场景元素信息面板
        EventDispath_1.default.addEventListener(EventType_1.EventType.VIDEO_BACK, this.onBuildBack, this);
        UIMananger_1.default.showPanel(UIType_1.default.popView1, null, function () {
            EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, _this.onBuildBack, _this);
        }, UIEffectManager_1.UIEffectType.SCALE, PopView1_1.PopType.SHELVE);
    };
    ShelvePrefab.prototype.onBuildBack = function () {
        MkUtils_1.default.alertTips("扩建货架成功");
        this.buildTips.active = false;
        PlayerModel_1.default.changeShelveSkin(this.mIndex, 1);
        this.changeSkin();
        EventDispath_1.default.removeByEvent(EventType_1.EventType.VIDEO_BACK, this.onBuildBack, this);
    };
    ShelvePrefab.prototype.onBuildComplete = function (index) {
        if (this.mIndex == index) {
            this.onBuildBack();
        }
    };
    ShelvePrefab.prototype.initPoint = function () {
        var target = this.targetPoints[this.mIndex];
        for (var i = 0; i < 8; i++) {
            var targetX = target.x - i * 20;
            var targetY = target.y + i * 8;
            if (this.mIndex == 0 || this.mIndex == 1) {
                targetX = target.x - i * 20;
                targetY = target.y + i * 8;
            }
            var v2 = cc.v2(targetX, targetY);
            this.allPoints.push(v2);
            this.cloneAllPoints.push(v2);
        }
    };
    // updatePoint() {
    //     this.allPoints = [];
    //     let target = this.targetPoints[this.mIndex];
    //     for (let i = 0; i < ConfigManager.getRoleMax(); i++) {
    //         let targetX = target.x - i * 20;
    //         let targetY = target.y + i * 8;
    //         if (this.mIndex == 0 || this.mIndex == 1) {
    //             targetX = target.x - i * 20;
    //             targetY = target.y + i * 8;
    //         }
    //         let v2 = cc.v2(targetX, targetY);
    //         this.allPoints.push(v2);
    //     }
    // }
    ShelvePrefab.prototype.getPoint = function () {
        var p;
        for (var i = 0; i < this.cloneAllPoints.length; i++) {
            if (this.cloneAllPoints[i] != null) {
                p = this.cloneAllPoints[i];
                this.cloneAllPoints[i] = null;
                break;
            }
        }
        if (!p && this.roleNum < 8) {
            for (var i = 0; i < this.cloneAllPoints.length; i++) {
                if (!this.roleList[i]) {
                    p = this.allPoints[i];
                    break;
                }
            }
        }
        return p;
    };
    ShelvePrefab.prototype.setData = function (id, index, list) {
        this.mIndex = index;
        this.roleList.length = 8;
        this.cropList = list || [];
        if (id != 0) {
            this.buildTips.active = false;
            this.changeSkin(0);
            this.setCrop();
        }
        else {
            this.buildTips.active = true;
        }
    };
    ShelvePrefab.prototype.changeSkin = function (isLvUp) {
        var _this = this;
        if (isLvUp === void 0) { isLvUp = 1; }
        var lv = PlayerModel_1.default.getUIConfig().shelvesList[this.mIndex];
        this.mLv = lv;
        if (lv == 0)
            return;
        this.mId = this.shelvesType[this.mIndex] * 100 + lv;
        MkUtils_1.default.loadSpriteFrame("texture/prop/shelves/" + ("0" + lv), function (res) {
            _this.bg.spriteFrame = res;
            if (isLvUp) {
                _this.lvUpEff.node.active = true;
                _this.lvUpEff.animation = "animation";
            }
        });
    };
    //选择需要购买的蔬菜
    ShelvePrefab.prototype.setCrop = function () {
        this.cropNodeList.forEach(function (node) {
            node.active = false;
            node.name = "0";
        });
        this.currentNum = 0;
        var list = this.cropList;
        var len = 0;
        for (var i = 0; i < list.length; i++) {
            var cfg = list[i];
            if (i != 0)
                len += list[i - 1].put_on_num;
            var _loop_1 = function (j) {
                var node;
                if (i == 0) {
                    node = this_1.cropNodeList[j];
                }
                else {
                    node = this_1.cropNodeList[len + j];
                }
                if (!node) {
                    console.log("========");
                }
                else {
                    this_1.currentNum++;
                    node.active = true;
                    node.name = cfg.cropId + "";
                    MkUtils_1.default.loadSpriteFrame("texture/crop/singleIcon/" + ("" + cfg.cropId), function (res) {
                        node.getComponent(cc.Sprite).spriteFrame = res;
                    });
                }
            };
            var this_1 = this;
            for (var j = 0; j < cfg.put_on_num; j++) {
                _loop_1(j);
            }
        }
    };
    ShelvePrefab.prototype.resetCrop = function (list) {
        this.cropList = list || [];
        this.setCrop();
    };
    //减少后补充
    ShelvePrefab.prototype.addCrop = function (id) {
        if (!this.mLv)
            return;
        if (!id) {
            var arr = PlayerModel_1.default.getRandomCrop(4 - this.currentNum);
            if (arr.length == 0)
                return;
            var arr1 = [];
            for (var j = 0; j < arr.length; j++) {
                var flag = false;
                for (var i = 0; i < this.cropList.length; i++) {
                    if (arr[j].cropId == this.cropList[i].cropId) {
                        this.cropList[i].put_on_num += arr[j].put_on_num;
                        flag = true;
                    }
                }
                if (!flag)
                    arr1.push(arr[j]);
            }
            this.cropList = this.cropList.concat(arr1);
            this.setCrop();
        }
    };
    ShelvePrefab.prototype.addOneCrop = function () {
        if (!this.mLv || this.currentNum >= 4)
            return;
        var crop = PlayerModel_1.default.getOneCrop();
        if (!crop)
            return;
        var isAdd = false;
        for (var i = 0; i < this.cropList.length; i++) {
            if (crop.cropId == this.cropList[i].cropId) {
                this.cropList[i].put_on_num += 1;
                isAdd = true;
            }
        }
        if (!isAdd)
            this.cropList.push({ cropId: crop.cropId, put_on_num: 1 });
        var list = this.cropNodeList.filter(function (node) {
            return node.name == "0";
        });
        var node = list[0];
        node.opacity = 0;
        this.currentNum++;
        node.active = true;
        node.name = crop.cropId + "";
        MkUtils_1.default.loadSpriteFrame("texture/crop/singleIcon/" + ("" + crop.cropId), function (res) {
            node.getComponent(cc.Sprite).spriteFrame = res;
            node.runAction(cc.sequence(cc.delayTime(1), cc.fadeIn(1.0)));
        });
    };
    //作物减少
    ShelvePrefab.prototype.reduceCrop = function (id, role, callBack) {
        var idx = 0;
        var arr = this.cropList.filter(function (item, index) {
            if (item.cropId == id)
                idx = index;
            return item.cropId == id;
        });
        if (arr.length == 0) {
            //货架缺少对应作物，给出提醒
            console.log("缺少该作物");
            MkUtils_1.default.alertTips("仓库中缺少该作物");
            return;
        }
        var cfg = arr[0];
        cfg.put_on_num--;
        this.currentNum--;
        var nodeList = this.cropNodeList.filter(function (node) {
            return node.name == id;
        });
        if (cfg.put_on_num <= 0) {
            this.cropList.splice(idx, 1);
        }
        // this.currentNum--;
        if (nodeList.length > 0) {
            nodeList[0].active = false;
            nodeList[0].name = "0";
            PlayerModel_1.default.reduceCrop(id);
            if (callBack)
                callBack();
            this.addOneCrop();
        }
        else {
            this.cropList.splice(idx, 1);
            role.cropLostBySheleve();
        }
        var deleteIndex = -1;
        this.cropList.forEach(function (item, index) {
            if (item.put_on_num <= 0)
                deleteIndex = index;
        });
        if (deleteIndex != -1)
            this.cropList.splice(deleteIndex, 1);
        if (this.currentNum == 0) {
            this.cropNodeList.forEach(function (node) {
                node.active = false;
                node.name = "0";
            });
        }
        // this.addCrop();
    };
    ShelvePrefab.prototype.changeAuto = function () {
        // MKUtils.setNodeDelay(this.node, 4, () => {
        //     this.isAuto = true;
        //     for (let i = 0; i < this.roleList.length; i++) {
        //         console.log("========自动卖出========");
        //         MKUtils.setNodeDelay(this.node, i * 1, () => {
        //             if (this.roleList[i]) this.roleList[i].onBuy();
        //         })
        //     }
        // })
    };
    ShelvePrefab.prototype.closeAuto = function () {
        this.isAuto = false;
    };
    ShelvePrefab.prototype.addRole = function (role) {
        this.walkLen--;
        // this.roleList.push(role);
        for (var i = 0; i < this.roleList.length; i++) {
            if (!this.roleList[i]) {
                this.roleList[i] = role;
                role.roleInSheleveIndex = i;
                return;
            }
        }
        var arr = this.roleList.filter(function (item) { return item != 0; });
        console.log("货架ID：", this.mIndex, "顾客数量：", arr.length);
    };
    Object.defineProperty(ShelvePrefab.prototype, "roleNum", {
        get: function () {
            var arr = this.roleList.filter(function (item) {
                return item && item != 0;
            });
            return arr.length;
        },
        enumerable: false,
        configurable: true
    });
    ShelvePrefab.prototype.refreshRole = function (role) {
        if (role.roleInSheleveIndex != -1) {
            this.roleList[role.roleInSheleveIndex] = 0;
            this.cloneAllPoints[role.roleInSheleveIndex] = this.allPoints[role.roleInSheleveIndex];
        }
        // let index = this.roleList.indexOf(role);
        // if (index != -1) {
        //     this.roleList[index] = 0;
        // }
        var arr = this.roleList.filter(function (item) { return item != 0; });
        console.log("货架ID：", this.mIndex, "顾客数量：", arr.length);
    };
    ShelvePrefab.prototype.initComponent = function () {
        this.buildTips.active = false;
        this.cropNodeList = this.crop.children;
        this.cropNodeList.forEach(function (node) {
            node.active = false;
        });
    };
    __decorate([
        property(cc.Sprite)
    ], ShelvePrefab.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], ShelvePrefab.prototype, "crop", void 0);
    __decorate([
        property(cc.Node)
    ], ShelvePrefab.prototype, "buildTips", void 0);
    __decorate([
        property(sp.Skeleton)
    ], ShelvePrefab.prototype, "lvUpEff", void 0);
    ShelvePrefab = __decorate([
        ccclass
    ], ShelvePrefab);
    return ShelvePrefab;
}(cc.Component));
exports.default = ShelvePrefab;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS92aWV3L21haW4vU2hlbHZlUHJlZmFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDhFQUEwRTtBQUMxRSxvRUFBK0Q7QUFDL0Qsd0VBQW1FO0FBQ25FLGtFQUFpRTtBQUNqRSw0REFBdUQ7QUFDdkQsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUVsRCxnREFBOEM7QUFHeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFRNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFrVkM7UUEvVUcsUUFBRSxHQUFjLElBQUksQ0FBQztRQUdyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFJNUIsY0FBUSxHQUFrQixFQUFFLENBQUM7UUFFN0IsZ0JBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQSxRQUFRO1FBQ3ZCLFNBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxNQUFNO1FBQ2QsU0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDZCx5QkFBeUI7UUFDekIsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFXO1FBQ1gsa0JBQVksR0FBRztZQUNYLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDaEIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7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QUM7Q0FsVkQsQUFrVkMsQ0FsVnlDLEVBQUUsQ0FBQyxTQUFTLEdBa1ZyRDtrQkFsVm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBVSUVmZmVjdFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvVUlFZmZlY3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFuZ2VyIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9VSU1hbmFuZ2VyXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGggZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9tZXNzYWdlL0V2ZW50RGlzcGF0aFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL21lc3NhZ2UvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBNS1V0aWxzIGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdG9vbHMvTWtVdGlsc1wiO1xyXG5pbXBvcnQgVUlUeXBlIGZyb20gXCIuLi8uLi9jb25zdHMvVUlUeXBlXCI7XHJcbmltcG9ydCBQbGF5ZXJNb2RlbCBmcm9tIFwiLi4vLi4vZGF0YXMvUGxheWVyTW9kZWxcIjtcclxuaW1wb3J0IENvbmZpZ01hbmFnZXIgZnJvbSBcIi4uLy4uL21hbmFnZXIvQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQb3BUeXBlIH0gZnJvbSBcIi4uL3BvcFZpZXcvUG9wVmlldzFcIjtcclxuaW1wb3J0IFJvbGVQcmVmYWIgZnJvbSBcIi4vUm9sZVByZWZhYlwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgcHV0T25Db25maWcge1xyXG4gICAgY3JvcElkOiBudW1iZXIsLy/kvZznialJRFxyXG4gICAgcHV0X29uX251bTogbnVtYmVyLC8v5L2c54mp5LiK5p625pWw6YePXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoZWx2ZVByZWZhYiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGJnOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY3JvcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1aWxkVGlwczogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBsdlVwRWZmOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgY3JvcE5vZGVMaXN0OiBjYy5Ob2RlW107XHJcblxyXG4gICAgY3JvcExpc3Q6IHB1dE9uQ29uZmlnW10gPSBbXTtcclxuXHJcbiAgICBjdXJyZW50TnVtID0gMDsvL+W9k+WJjeS9nOeJqeaVsOmHj1xyXG4gICAgbUlkID0gMDsvL+i0p+aetklEXHJcbiAgICBtTHYgPSAwOy8v6LSn5p62562J57qnXHJcbiAgICAvLyByb2xlTnVtID0gMDsvL+W9k+WJjei0p+aetuWJjeeahOS6uuaVsFxyXG4gICAgcm9sZUxpc3QgPSBbXTtcclxuICAgIG1JbmRleCA9IDA7XHJcbiAgICAvL+avj+S4qui0p+aetuWJjeeahOi1t+Wni+eCuVxyXG4gICAgdGFyZ2V0UG9pbnRzID0gW1xyXG4gICAgICAgIGNjLnYyKC0xNDAsIC01MCksXHJcbiAgICAgICAgY2MudjIoMjIwLCAtMjAwKSxcclxuICAgICAgICBjYy52MigyNzAsIC0xMCksXHJcbiAgICAgICAgY2MudjIoLTEwLCAxMDUpLFxyXG4gICAgICAgIGNjLnYyKC0zMDAsIDIwMClcclxuICAgIF1cclxuXHJcbiAgICBhbGxQb2ludHMgPSBbXTtcclxuICAgIGNsb25lQWxsUG9pbnRzID0gW107XHJcbiAgICB3YWxrTGVuOiBudW1iZXIgPSAwOy8v6LWw5ZCR6K+l5pGK5L2N55qE6aG+5a6iXHJcbiAgICBzaGVsdmVzVHlwZSA9IFsyMSwgMjIsIDIzLCAyNCwgMjUsXVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdENvbXBvbmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubHZVcEVmZi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIEV2ZW50RGlzcGF0aC5hZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5DQVNISUVSX0FVVE9fQ0xPU0UsIHRoaXMuY2xvc2VBdXRvLCB0aGlzKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLm9uKHRoaXMuYnVpbGRUaXBzLCB0aGlzLm9uQnVpbGQsIHRoaXMsIDAsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgRXZlbnREaXNwYXRoLmFkZEV2ZW50TGlzdGVuZXIoRXZlbnRUeXBlLlNIRUxWRV9CVUlMRCwgdGhpcy5vbkJ1aWxkQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnVpbGQoKSB7XHJcbiAgICAgICAgLy/lvLnlh7rlnLrmma/lhYPntKDkv6Hmga/pnaLmnb9cclxuICAgICAgICBFdmVudERpc3BhdGguYWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vbkJ1aWxkQmFjaywgdGhpcyk7XHJcbiAgICAgICAgVUlNYW5hbmdlci5zaG93UGFuZWwoVUlUeXBlLnBvcFZpZXcxLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEV2ZW50RGlzcGF0aC5yZW1vdmVCeUV2ZW50KEV2ZW50VHlwZS5WSURFT19CQUNLLCB0aGlzLm9uQnVpbGRCYWNrLCB0aGlzKTtcclxuICAgICAgICB9LCBVSUVmZmVjdFR5cGUuU0NBTEUsIFBvcFR5cGUuU0hFTFZFKTtcclxuICAgIH1cclxuICAgIG9uQnVpbGRCYWNrKCkge1xyXG4gICAgICAgIE1LVXRpbHMuYWxlcnRUaXBzKFwi5omp5bu66LSn5p625oiQ5YqfXCIpXHJcbiAgICAgICAgdGhpcy5idWlsZFRpcHMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgUGxheWVyTW9kZWwuY2hhbmdlU2hlbHZlU2tpbih0aGlzLm1JbmRleCwgMSlcclxuICAgICAgICB0aGlzLmNoYW5nZVNraW4oKTtcclxuICAgICAgICBFdmVudERpc3BhdGgucmVtb3ZlQnlFdmVudChFdmVudFR5cGUuVklERU9fQkFDSywgdGhpcy5vbkJ1aWxkQmFjaywgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbkJ1aWxkQ29tcGxldGUoaW5kZXgpIHtcclxuICAgICAgICBpZiAodGhpcy5tSW5kZXggPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJ1aWxkQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0UG9pbnQoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMudGFyZ2V0UG9pbnRzW3RoaXMubUluZGV4XTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WCA9IHRhcmdldC54IC0gaSAqIDIwO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WSA9IHRhcmdldC55ICsgaSAqIDg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1JbmRleCA9PSAwIHx8IHRoaXMubUluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFggPSB0YXJnZXQueCAtIGkgKiAyMDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSB0YXJnZXQueSArIGkgKiA4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB2MiA9IGNjLnYyKHRhcmdldFgsIHRhcmdldFkpO1xyXG4gICAgICAgICAgICB0aGlzLmFsbFBvaW50cy5wdXNoKHYyKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9uZUFsbFBvaW50cy5wdXNoKHYyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGVQb2ludCgpIHtcclxuICAgIC8vICAgICB0aGlzLmFsbFBvaW50cyA9IFtdO1xyXG4gICAgLy8gICAgIGxldCB0YXJnZXQgPSB0aGlzLnRhcmdldFBvaW50c1t0aGlzLm1JbmRleF07XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25maWdNYW5hZ2VyLmdldFJvbGVNYXgoKTsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCB0YXJnZXRYID0gdGFyZ2V0LnggLSBpICogMjA7XHJcbiAgICAvLyAgICAgICAgIGxldCB0YXJnZXRZID0gdGFyZ2V0LnkgKyBpICogODtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMubUluZGV4ID09IDAgfHwgdGhpcy5tSW5kZXggPT0gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGFyZ2V0WCA9IHRhcmdldC54IC0gaSAqIDIwO1xyXG4gICAgLy8gICAgICAgICAgICAgdGFyZ2V0WSA9IHRhcmdldC55ICsgaSAqIDg7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgbGV0IHYyID0gY2MudjIodGFyZ2V0WCwgdGFyZ2V0WSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYWxsUG9pbnRzLnB1c2godjIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGdldFBvaW50KCkge1xyXG4gICAgICAgIGxldCBwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbG9uZUFsbFBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbG9uZUFsbFBvaW50c1tpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwID0gdGhpcy5jbG9uZUFsbFBvaW50c1tpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvbmVBbGxQb2ludHNbaV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwICYmIHRoaXMucm9sZU51bSA8IDgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNsb25lQWxsUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMucm9sZUxpc3RbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwID0gdGhpcy5hbGxQb2ludHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoaWQsIGluZGV4LCBsaXN0Pykge1xyXG4gICAgICAgIHRoaXMubUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5yb2xlTGlzdC5sZW5ndGggPSA4O1xyXG4gICAgICAgIHRoaXMuY3JvcExpc3QgPSBsaXN0IHx8IFtdO1xyXG4gICAgICAgIGlmIChpZCAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRUaXBzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNraW4oMClcclxuICAgICAgICAgICAgdGhpcy5zZXRDcm9wKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFRpcHMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VTa2luKGlzTHZVcCA9IDEpIHtcclxuICAgICAgICBsZXQgbHYgPSBQbGF5ZXJNb2RlbC5nZXRVSUNvbmZpZygpLnNoZWx2ZXNMaXN0W3RoaXMubUluZGV4XTtcclxuICAgICAgICB0aGlzLm1MdiA9IGx2O1xyXG4gICAgICAgIGlmIChsdiA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5tSWQgPSB0aGlzLnNoZWx2ZXNUeXBlW3RoaXMubUluZGV4XSAqIDEwMCArIGx2O1xyXG4gICAgICAgIE1LVXRpbHMubG9hZFNwcml0ZUZyYW1lKFwidGV4dHVyZS9wcm9wL3NoZWx2ZXMvXCIgKyBgMCR7bHZ9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJnLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICBpZiAoaXNMdlVwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmx2VXBFZmYubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sdlVwRWZmLmFuaW1hdGlvbiA9IFwiYW5pbWF0aW9uXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8v6YCJ5oup6ZyA6KaB6LSt5Lmw55qE6JSs6I+cXHJcbiAgICBzZXRDcm9wKCkge1xyXG4gICAgICAgIHRoaXMuY3JvcE5vZGVMaXN0LmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCIwXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmN1cnJlbnROdW0gPSAwO1xyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5jcm9wTGlzdDtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNmZyA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChpICE9IDApIGxlbiArPSBsaXN0W2kgLSAxXS5wdXRfb25fbnVtO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNmZy5wdXRfb25fbnVtOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLmNyb3BOb2RlTGlzdFtqXVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlID0gdGhpcy5jcm9wTm9kZUxpc3RbbGVuICsgal1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROdW0rKztcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5uYW1lID0gY2ZnLmNyb3BJZCArIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2Nyb3Avc2luZ2xlSWNvbi9cIiArIGAke2NmZy5jcm9wSWR9YCwgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzZXRDcm9wKGxpc3QpIHtcclxuICAgICAgICB0aGlzLmNyb3BMaXN0ID0gbGlzdCB8fCBbXTtcclxuICAgICAgICB0aGlzLnNldENyb3AoKTtcclxuICAgIH1cclxuICAgIC8v5YeP5bCR5ZCO6KGl5YWFXHJcbiAgICBhZGRDcm9wKGlkPykge1xyXG4gICAgICAgIGlmICghdGhpcy5tTHYpIHJldHVybjtcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBQbGF5ZXJNb2RlbC5nZXRSYW5kb21Dcm9wKDQgLSB0aGlzLmN1cnJlbnROdW0pO1xyXG4gICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBhcnIxID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jcm9wTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbal0uY3JvcElkID09IHRoaXMuY3JvcExpc3RbaV0uY3JvcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcExpc3RbaV0ucHV0X29uX251bSArPSBhcnJbal0ucHV0X29uX251bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFmbGFnKSBhcnIxLnB1c2goYXJyW2pdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNyb3BMaXN0ID0gdGhpcy5jcm9wTGlzdC5jb25jYXQoYXJyMSlcclxuICAgICAgICAgICAgdGhpcy5zZXRDcm9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkT25lQ3JvcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubUx2IHx8IHRoaXMuY3VycmVudE51bSA+PSA0KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNyb3AgPSBQbGF5ZXJNb2RlbC5nZXRPbmVDcm9wKCk7XHJcbiAgICAgICAgaWYgKCFjcm9wKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGlzQWRkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNyb3BMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjcm9wLmNyb3BJZCA9PSB0aGlzLmNyb3BMaXN0W2ldLmNyb3BJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wTGlzdFtpXS5wdXRfb25fbnVtICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpc0FkZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0FkZCkgdGhpcy5jcm9wTGlzdC5wdXNoKHsgY3JvcElkOiBjcm9wLmNyb3BJZCwgcHV0X29uX251bTogMSB9KVxyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5jcm9wTm9kZUxpc3QuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLm5hbWUgPT0gXCIwXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gbGlzdFswXTtcclxuICAgICAgICBub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE51bSsrO1xyXG4gICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLm5hbWUgPSBjcm9wLmNyb3BJZCArIFwiXCI7XHJcbiAgICAgICAgTUtVdGlscy5sb2FkU3ByaXRlRnJhbWUoXCJ0ZXh0dXJlL2Nyb3Avc2luZ2xlSWNvbi9cIiArIGAke2Nyb3AuY3JvcElkfWAsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHJlcztcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEpLCBjYy5mYWRlSW4oMS4wKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy/kvZznianlh4/lsJFcclxuICAgIHJlZHVjZUNyb3AoaWQsIHJvbGU6IFJvbGVQcmVmYWIsIGNhbGxCYWNrPykge1xyXG4gICAgICAgIGxldCBpZHggPSAwO1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmNyb3BMaXN0LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY3JvcElkID09IGlkKSBpZHggPSBpbmRleDtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY3JvcElkID09IGlkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvL+i0p+aetue8uuWwkeWvueW6lOS9nOeJqe+8jOe7meWHuuaPkOmGklxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIue8uuWwkeivpeS9nOeJqVwiKTtcclxuICAgICAgICAgICAgTUtVdGlscy5hbGVydFRpcHMoXCLku5PlupPkuK3nvLrlsJHor6XkvZznialcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2ZnID0gYXJyWzBdO1xyXG4gICAgICAgIGNmZy5wdXRfb25fbnVtLS07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TnVtLS07XHJcbiAgICAgICAgbGV0IG5vZGVMaXN0ID0gdGhpcy5jcm9wTm9kZUxpc3QuZmlsdGVyKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLm5hbWUgPT0gaWQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKGNmZy5wdXRfb25fbnVtIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jcm9wTGlzdC5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50TnVtLS07XHJcbiAgICAgICAgaWYgKG5vZGVMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbm9kZUxpc3RbMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5vZGVMaXN0WzBdLm5hbWUgPSBcIjBcIlxyXG4gICAgICAgICAgICBQbGF5ZXJNb2RlbC5yZWR1Y2VDcm9wKGlkKTtcclxuICAgICAgICAgICAgaWYgKGNhbGxCYWNrKSBjYWxsQmFjaygpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZE9uZUNyb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNyb3BMaXN0LnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICByb2xlLmNyb3BMb3N0QnlTaGVsZXZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGVsZXRlSW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgdGhpcy5jcm9wTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5wdXRfb25fbnVtIDw9IDApIGRlbGV0ZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoZGVsZXRlSW5kZXggIT0gLTEpIHRoaXMuY3JvcExpc3Quc3BsaWNlKGRlbGV0ZUluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE51bSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JvcE5vZGVMaXN0LmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlLm5hbWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYWRkQ3JvcCgpO1xyXG5cclxuICAgIH1cclxuICAgIGlzQXV0byA9IGZhbHNlO1xyXG4gICAgY2hhbmdlQXV0bygpIHtcclxuICAgICAgICAvLyBNS1V0aWxzLnNldE5vZGVEZWxheSh0aGlzLm5vZGUsIDQsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0F1dG8gPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT3oh6rliqjljZblh7o9PT09PT09PVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIE1LVXRpbHMuc2V0Tm9kZURlbGF5KHRoaXMubm9kZSwgaSAqIDEsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5yb2xlTGlzdFtpXSkgdGhpcy5yb2xlTGlzdFtpXS5vbkJ1eSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcbiAgICBjbG9zZUF1dG8oKSB7XHJcbiAgICAgICAgdGhpcy5pc0F1dG8gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdFBvaW50ID0gY2MudjIoKTtcclxuICAgIGFkZFJvbGUocm9sZSkge1xyXG4gICAgICAgIHRoaXMud2Fsa0xlbi0tO1xyXG4gICAgICAgIC8vIHRoaXMucm9sZUxpc3QucHVzaChyb2xlKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9sZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJvbGVMaXN0W2ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVMaXN0W2ldID0gcm9sZTtcclxuICAgICAgICAgICAgICAgIHJvbGUucm9sZUluU2hlbGV2ZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5yb2xlTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0gIT0gMCB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6LSn5p62SUTvvJpcIiwgdGhpcy5tSW5kZXgsIFwi6aG+5a6i5pWw6YeP77yaXCIsIGFyci5sZW5ndGgpO1xyXG5cclxuICAgIH1cclxuICAgIGdldCByb2xlTnVtKCkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnJvbGVMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSAmJiBpdGVtICE9IDA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXJyLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUm9sZShyb2xlKSB7XHJcbiAgICAgICAgaWYgKHJvbGUucm9sZUluU2hlbGV2ZUluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZUxpc3Rbcm9sZS5yb2xlSW5TaGVsZXZlSW5kZXhdID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jbG9uZUFsbFBvaW50c1tyb2xlLnJvbGVJblNoZWxldmVJbmRleF0gPSB0aGlzLmFsbFBvaW50c1tyb2xlLnJvbGVJblNoZWxldmVJbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBpbmRleCA9IHRoaXMucm9sZUxpc3QuaW5kZXhPZihyb2xlKTtcclxuICAgICAgICAvLyBpZiAoaW5kZXggIT0gLTEpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5yb2xlTGlzdFtpbmRleF0gPSAwO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5yb2xlTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0gIT0gMCB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6LSn5p62SUTvvJpcIiwgdGhpcy5tSW5kZXgsIFwi6aG+5a6i5pWw6YeP77yaXCIsIGFyci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb21wb25lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5idWlsZFRpcHMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jcm9wTm9kZUxpc3QgPSB0aGlzLmNyb3AuY2hpbGRyZW47XHJcbiAgICAgICAgdGhpcy5jcm9wTm9kZUxpc3QuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
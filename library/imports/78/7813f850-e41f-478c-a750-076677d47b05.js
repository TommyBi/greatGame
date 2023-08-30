"use strict";
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
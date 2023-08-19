
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/tools/MkUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb314S0VRBDNq1MwS/BUHoe', 'MkUtils');
// src/framework/tools/MkUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MKUtils = /** @class */ (function () {
    function MKUtils() {
    }
    MKUtils.isNative = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID);
    };
    MKUtils.isIOS = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_IOS);
    };
    MKUtils.isWechatGame = function () {
        return (cc.sys.platform == cc.sys.WECHAT_GAME);
    };
    MKUtils.isAndroid = function () {
        return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_ANDROID);
    };
    MKUtils.findNodeByName = function (root, name) {
        if (root) {
            var widget = root.getChildByName(name);
            if (widget) {
                return widget;
            }
            else {
                var children = root.children;
                for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                    var c = children_1[_i];
                    widget = MKUtils.findNodeByName(c, name);
                    if (widget) {
                        return widget;
                    }
                }
                return null;
            }
        }
        return null;
    };
    //获取屏幕显示区域尺寸
    MKUtils.getShowSize = function () {
        var canvasSize = cc.view.getCanvasSize();
        var winSize = cc.winSize;
        var showSize = cc.size(winSize.width, winSize.height);
        var canvasPro = canvasSize.width / canvasSize.height;
        var winPro = winSize.width / winSize.height;
        if (canvasPro > winPro) {
            showSize.width = winSize.height * canvasPro;
        }
        else {
            showSize.height = winSize.width / canvasPro;
        }
        return showSize;
    };
    //获取显示区域和设计尺寸的宽高比例
    MKUtils.getShowScale = function () {
        var showSize = MKUtils.getShowSize();
        var winSize = cc.winSize;
        return cc.v2(showSize.width / winSize.width, showSize.height / winSize.height);
    };
    MKUtils.playScaleAni = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.scale;
        parent.scale = preScale * 0.3;
        parent.runAction(cc.scaleTo(0.2, preScale * 1).easing(cc.easeBackOut()));
    };
    MKUtils.playScaleAni2 = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.scale;
        parent.scale = preScale * 0.3;
        parent.runAction(cc.sequence(cc.scaleTo(0.3, preScale * 1.3), cc.scaleTo(0.3, preScale * 1).easing(cc.easeBackInOut())));
    };
    MKUtils.playScaleAniBig = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.scale;
        parent.scale = preScale * 0.3;
        var scale1 = cc.scaleTo(0.3, preScale * 1.3);
        var scale2 = cc.scaleTo(0.1, preScale * 1);
        parent.runAction(cc.sequence(scale1, scale2));
    };
    MKUtils.playScaleAniSmallToNormal = function (parent) {
        //界面layout 尺寸从80%到110%再回到100%
        if (!parent) {
            return;
        }
        var preScale = parent.scale;
        parent.scale = 0.1;
        var scale1 = cc.scaleTo(0.3, preScale * 1.1);
        var scale2 = cc.scaleTo(0.2, preScale * 1);
        parent.runAction(cc.sequence(scale1, scale2));
    };
    MKUtils.playBlackBgAct = function (blackBg, time) {
        if (!blackBg) {
            return;
        }
        if (time == undefined) {
            time = 0.2;
        }
        var preOpacity = blackBg.opacity;
        blackBg.opacity = 0;
        blackBg.runAction(cc.fadeTo(time, preOpacity));
    };
    MKUtils.playDialogActBig = function (blackBg, baseNode) {
        MKUtils.playBlackBgAct(blackBg, 0.3);
        MKUtils.playScaleAniBig(baseNode);
    };
    MKUtils.playDialogAct = function (blackBg, baseNode) {
        MKUtils.playBlackBgAct(blackBg);
        MKUtils.playScaleAni(baseNode);
    };
    MKUtils.playDialogAct2 = function (blackBg, baseNode) {
        MKUtils.playBlackBgAct(blackBg);
        MKUtils.playScaleAni2(baseNode);
    };
    MKUtils.btnScaleAct = function (btn, scale) {
        if (!btn) {
            return;
        }
        btn.stopAllActions();
        var preScale = scale || btn.scale;
        btn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.2, 1.13 * preScale), cc.scaleTo(0.2, 1 * preScale), cc.delayTime(0.6))));
    };
    MKUtils.btnScaleAct1 = function (btn, scale) {
        if (!btn) {
            return;
        }
        var preScale = scale || btn.scale;
        btn.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.5), cc.scaleTo(0.18, 1.15 * preScale), cc.scaleTo(0.18, preScale), cc.scaleTo(0.18, 1.15 * preScale), cc.scaleTo(0.18, preScale), cc.delayTime(0.5))));
    };
    //按钮点击缩放，btn为触摸的node，icon为缩放效果node
    MKUtils.addTouch = function (btn, icon, scaleX, scaleY) {
        if (!icon) {
            icon = btn;
        }
        var preScaleX = btn.scaleX;
        var preScaleY = btn.scaleY;
        if (scaleX) {
            preScaleX = scaleX;
        }
        if (scaleY) {
            preScaleY = scaleY;
        }
        btn.on(cc.Node.EventType.TOUCH_START, function (e) {
            icon.runAction(cc.scaleTo(0.1, preScaleX * 1.1, preScaleY * 1.1));
            // icon.setScale(preScaleX*1.1, preScaleY*1.1)
        }.bind(btn), btn);
        btn.on(cc.Node.EventType.TOUCH_END, function (e) {
            icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY));
            // icon.setScale(preScaleX, preScaleY)
        }.bind(btn), btn);
        btn.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
            icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY));
            // icon.setScale(preScaleX, preScaleY)
        }.bind(btn), btn);
    };
    // 名字最大长度截取
    MKUtils.nameMaxCut = function (input, maxLen) {
        var output = "";
        var strlen = 0;
        for (var i = 0; i < input.length; i++) {
            var ch = input[i];
            if (ch.charCodeAt(0) > 255) //如果是汉字，则字符串长度加2
             {
                strlen += 2;
            }
            else {
                strlen++;
            }
            if (strlen <= maxLen) {
                output += ch;
            }
        }
        if (strlen > maxLen) {
            return output += "...";
        }
        return output;
    };
    MKUtils.alertTips = function (str, showTime, closeAct, tipType) {
        var isShow = MKUtils.currentTipsList.filter(function (value, index) {
            return value === str;
        });
        if (isShow.length > 0)
            return;
        if (!showTime) {
            showTime = 1.2;
        }
        var prefabUrl = "prefab/common/AlertTips";
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            MKUtils.currentTipsList.push(str);
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                return;
            }
            if (!(loadedResource instanceof cc.Prefab)) {
                cc.log('你载入的不是预制资源!');
                return;
            }
            var prefab = cc.instantiate(loadedResource);
            prefab.getComponent("AlertTips").setTips(str, tipType);
            cc.director.getScene().addChild(prefab, 9999);
            prefab.setPosition(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2 - 100));
            if (!closeAct) {
                MKUtils.playScaleAni(prefab);
            }
            prefab.runAction(cc.sequence(cc.delayTime(showTime), cc.spawn(cc.moveBy(1, 0, 400), cc.fadeOut(1)), cc.callFunc(function () {
                var str = prefab.getComponent("AlertTips").getTips();
                var idx = -1;
                MKUtils.currentTipsList.filter(function (value, index) {
                    if (value === str)
                        idx = index;
                });
                if (idx >= 0)
                    MKUtils.currentTipsList.splice(idx, 1);
                prefab.removeFromParent();
            })));
        });
    };
    //获取当前系统时间戳(秒)
    MKUtils.getCurOsTime = function () {
        var curTime = new Date();
        return Math.floor(curTime.getTime() / 1000);
    };
    MKUtils.getCurOsMillisecond = function () {
        var curTime = new Date();
        return curTime.getTime();
    };
    //生成n-m随机数  包括n和m
    MKUtils.randomNM = function (n, m) {
        return n + Math.floor(Math.random() * (m - n + 1));
    };
    //生成n-m随机数  包括n和m：浮点数
    MKUtils.randomNMF = function (n, m) {
        return n + Math.random() * (m - n);
    };
    //适配不同版本
    MKUtils.compareVersion = function (v1, v2) {
        v1 = v1.split('.');
        v2 = v2.split('.');
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            }
            else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    };
    //显示跑马灯
    MKUtils.showBroad = function (pos, id) {
        var w = MKUtils.getShowSize().width;
        var h = MKUtils.getShowSize().height;
        var prefabUrl = "public/prefabs/CommonBroad";
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            //检查资源加载
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                return;
            }
            if (!(loadedResource instanceof cc.Prefab)) {
                cc.log('你载入的不是预制资源!');
                return;
            }
            //开始实例化预制资源
            var prefab = cc.instantiate(loadedResource);
            if (pos) {
                prefab.setPosition(pos);
            }
            else {
                prefab.setPosition(cc.v2(w, h - 40));
            }
            var broadCom = prefab.getComponent("CommonBroad");
            if (broadCom) {
                if (id == 1) {
                    broadCom.showBroad(id);
                }
                else {
                    broadCom.showBroad();
                }
            }
            cc.director.getScene().addChild(prefab, 999);
        });
    };
    MKUtils.twoPointDistance = function (pos1, pos2) {
        var x1 = pos1.x; // 第一个点的横坐标
        var y1 = pos1.y; // 第一个点的纵坐标
        var x2 = pos2.x; // 第二个点的横坐标
        var y2 = pos2.y; // 第二个点的纵坐标
        var xdiff = x2 - x1; // 计算两个点的横坐标之差
        var ydiff = y2 - y1; // 计算两个点的纵坐标之差
        return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5); // 计算两点之间的距离，并将结果返回表单元素
    };
    MKUtils.loadPrefab = function (prefabUrl, successCallback, failCallback) {
        var prefab = cc.loader.getRes(prefabUrl, cc.Prefab);
        if (prefab && prefab != null) {
            if (successCallback) {
                successCallback(prefab);
            }
        }
        else {
            cc.loader.loadRes(prefabUrl, function (errorMessage, downPrefab) {
                if (errorMessage) {
                    cc.log("load " + prefabUrl + " error : " + errorMessage);
                    if (failCallback) {
                        failCallback();
                    }
                    return;
                }
                if (successCallback) {
                    successCallback(downPrefab);
                }
            }.bind(this));
        }
    };
    MKUtils.loadDir = function (frameUrl, successCallback, failCallback, type) {
        if (type === void 0) { type = cc.SpriteFrame; }
        cc.resources.loadDir(frameUrl, type, function (err, assets) {
            // ...
            cc.log("===========", assets);
            // if()
        });
    };
    MKUtils.loadSpriteFrame = function (frameUrl, successCallback, failCallback) {
        var spriteFrame = cc.loader.getRes(frameUrl, cc.SpriteFrame);
        if (spriteFrame && spriteFrame != null) {
            if (successCallback) {
                successCallback(spriteFrame);
            }
        }
        else {
            cc.loader.loadRes(frameUrl, cc.SpriteFrame, function (err, downSpriteFrame) {
                if (err) {
                    cc.log("load " + frameUrl + " error : " + err);
                    if (failCallback) {
                        failCallback();
                    }
                    return;
                }
                if (successCallback) {
                    successCallback(downSpriteFrame);
                }
            }.bind(this));
        }
    };
    MKUtils.loadSoundEffect = function (url) {
        var gameloadSound = cc.sys.localStorage.getItem("gameloadSound");
        // if (gameloadSound && gameloadSound == "1") {
        //     DataManager.getInstance().setIsPlaySound(false);
        // } else {
        //     DataManager.getInstance().setIsPlaySound(true);
        // }
        // if (!DataManager.getInstance().getIsPlaySound()) {
        //     return
        // }
        var audioClip = cc.loader.getRes(url, cc.AudioClip);
        if (audioClip) {
            if (!MKUtils.effectIsOpen()) {
                return;
            }
            cc.audioEngine.play(audioClip, false, 1);
        }
        else {
            cc.loader.loadRes(url, function (errorMessage, loadedResource) {
                if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                }
                if (!(loadedResource instanceof cc.AudioClip)) {
                    cc.log('你载入的不是声音资源!');
                    return;
                }
                if (!MKUtils.effectIsOpen()) {
                    return;
                }
                cc.audioEngine.play(loadedResource, false, 1);
            }.bind(this));
        }
    };
    MKUtils.loadSoundMusic = function (url) {
        var gameloadMusic = cc.sys.localStorage.getItem("gameloadMusic");
        // if (gameloadMusic && gameloadMusic == "1") {
        //     DataManager.getInstance().setIsPlayMusic(false);
        // } else {
        //     DataManager.getInstance().setIsPlayMusic(true);
        // }
        // if (!DataManager.getInstance().getIsPlayMusic()) {
        //     return
        // }
        cc.sys.localStorage.setItem("MusicPlayUrl", url);
        var audioClip = cc.loader.getRes(url, cc.AudioClip);
        if (audioClip) {
            if (!MKUtils.musicIsOpen()) {
                return;
            }
            cc.audioEngine.playMusic(audioClip, true);
        }
        else {
            cc.loader.loadRes(url, function (errorMessage, loadedResource) {
                if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                }
                if (!(loadedResource instanceof cc.AudioClip)) {
                    cc.log('你载入的不是声音资源!');
                    return;
                }
                if (!MKUtils.musicIsOpen()) {
                    return;
                }
                cc.audioEngine.playMusic(loadedResource, true);
                // DataManager.getInstance().isNeverPlayMusic = true
            }.bind(this));
        }
    };
    MKUtils.stopMusic = function () {
        cc.sys.localStorage.setItem("MusicPlayUrl", "");
        cc.audioEngine.stopMusic();
    };
    MKUtils.setEffect = function (open) {
        cc.sys.localStorage.setItem("EffectSwitch", (open ? "1" : "0"));
        if (!open) {
            cc.audioEngine.stopAllEffects();
        }
    };
    MKUtils.effectIsOpen = function () {
        return cc.sys.localStorage.getItem("EffectSwitch") != "0";
    };
    MKUtils.setMusic = function (open) {
        if (open == MKUtils.musicIsOpen()) {
            return;
        }
        cc.sys.localStorage.setItem("MusicSwitch", (open ? "1" : "0"));
        if (!open) {
            cc.audioEngine.stopMusic();
        }
        else {
            var MusicPlayUrl = cc.sys.localStorage.getItem("MusicPlayUrl");
            if (MusicPlayUrl && MusicPlayUrl != "") {
                MKUtils.loadSoundMusic(MusicPlayUrl);
            }
        }
    };
    MKUtils.musicIsOpen = function () {
        return cc.sys.localStorage.getItem("MusicSwitch") != "0";
    };
    MKUtils.setSound = function (open) {
        MKUtils.setEffect(open);
        MKUtils.setMusic(open);
    };
    MKUtils.preLoadSoundEffect = function (prefabUrl, successCallback, failCallback) {
        cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
            if (errorMessage) {
                cc.log('载入预制资源失败, 原因:' + errorMessage);
                failCallback();
                return;
            }
            if (!(loadedResource instanceof cc.AudioClip)) {
                cc.log('你载入的不是声音资源!');
                return;
            }
            successCallback();
        }.bind(this));
    };
    MKUtils.loadSkeletonData = function (url, successCallback, failCallback) {
        console.log("2222222222", url);
        // let res = null;
        var res = cc.loader.getRes(url, sp.SkeletonData);
        console.log(res, "xxxxxxx", url);
        if (res && res != null) {
            if (successCallback) {
                console.log(res, "aaaaaaaaaaaaaaa", url);
                successCallback(res);
            }
        }
        else {
            console.log("33333333333333=", url);
            cc.loader.loadRes(url, sp.SkeletonData, function (errorMessage, res) {
                console.log("44444444444444", res);
                if (errorMessage) {
                    cc.log("load " + url + " error : " + errorMessage);
                    if (failCallback) {
                        failCallback();
                    }
                    return;
                }
                if (successCallback) {
                    successCallback(res);
                }
            }.bind(this));
        }
    };
    //重复利用node
    MKUtils.repeatPrefab = function (prefabUrl, parent, nodeName, successCallback, zIndex) {
        if (zIndex == undefined) {
            zIndex = 0;
        }
        var node = MKUtils.findNodeByName(parent, nodeName);
        if (node) {
            node.stopAllActions();
            node.active = true;
            node.zIndex = zIndex;
            successCallback(node);
        }
        else {
            MKUtils.loadPrefab(prefabUrl, function (prefab) {
                node = cc.instantiate(prefab);
                parent.addChild(node, zIndex, nodeName);
                successCallback(node);
            });
        }
    };
    MKUtils.repeatSpine = function (url, parent, nodeName, successCallback, zIndex) {
        if (zIndex == undefined) {
            zIndex = 0;
        }
        var node = MKUtils.findNodeByName(parent, nodeName);
        if (node) {
            node.stopAllActions();
            node.active = true;
            node.zIndex = zIndex;
            successCallback(node);
        }
        else {
            MKUtils.loadSkeletonData(url, function (spineres) {
                var node = new cc.Node();
                var spine = node.addComponent(sp.Skeleton);
                spine.skeletonData = spineres;
                spine.premultipliedAlpha = false;
                parent.addChild(node, zIndex, nodeName);
                successCallback(node);
            });
        }
    };
    // 顺时针角度
    MKUtils.getAngle = function (from, to) {
        var x = to.x - from.x;
        var y = to.y - from.y;
        var mathAngle = 90; //逆时针
        if (x == 0) {
            if (y >= 0) {
                mathAngle = 90;
            }
            else {
                mathAngle = 270;
            }
        }
        else {
            var tanAngle = Math.atan(y / x) * 180 / Math.PI;
            if (x > 0) {
                if (y >= 0) {
                    mathAngle = tanAngle;
                }
                else {
                    mathAngle = tanAngle + 360;
                }
            }
            else {
                mathAngle = tanAngle + 180;
            }
        }
        // cc.log("mathAngle = ", mathAngle)
        var cocosAngle = (360 - mathAngle + 90) % 360;
        // cc.log("cocosAngle = ", cocosAngle)
        return cocosAngle;
    };
    MKUtils.getUUID = function () {
        var UUIDStr = "game_only_uuid";
        var uuid = cc.sys.localStorage.getItem(UUIDStr);
        if (uuid) {
            return uuid;
        }
        uuid = "uuid_" + MKUtils.getCurOsTime() + "_" + MKUtils.randomNM(0, 999) + "_" + MKUtils.randomNM(0, 999);
        cc.sys.localStorage.setItem(UUIDStr, uuid);
        return uuid;
    };
    // 01:30
    MKUtils.tranTime1 = function (sec) {
        sec = Math.ceil(sec);
        if (sec <= 0) {
            return "00:00";
        }
        var min = Math.floor(sec / 60);
        var s = Math.floor((sec - min * 60));
        return "" + MKUtils.add0(min) + ":" + MKUtils.add0(s);
    };
    //1小时20分
    MKUtils.tranTime2 = function (sec) {
        if (sec <= 0) {
            return "0分";
        }
        var hour = Math.floor(sec / 3600);
        var min = Math.floor((sec - hour * 3600) / 60);
        var str = "";
        if (hour > 0) {
            str += ("" + hour + "小时");
        }
        if (min > 0) {
            str += ("" + min + "分钟");
        }
        return str;
    };
    MKUtils.add0 = function (m) {
        return m < 10 ? '0' + m : m;
    };
    MKUtils.isOneDay = function (time1, time2) {
        var data1 = new Date(time1);
        var data2 = new Date(time2);
        return data1.getFullYear() == data2.getFullYear() && data1.getMonth() == data2.getMonth() && data1.getDate() == data2.getDate();
    };
    MKUtils.tranDateHMS = function (time) {
        var date = new Date(time);
        return {
            hour: date.getHours(),
            min: date.getMinutes(),
            sec: date.getSeconds()
        };
    };
    MKUtils.changeProAct1 = function (sprite, num1, num2, time) {
        time = time || 0.5;
        var speed = (num2 - num1) / time;
        cc.director.getScheduler().unscheduleAllForTarget(sprite);
        cc.director.getScheduler().schedule(function (dt) {
            num1 = num1 + speed * dt;
            if (speed == 0 || (speed > 0 && num1 >= num2) || (speed < 0 && num1 <= num2)) {
                num1 = num2;
                cc.director.getScheduler().unscheduleAllForTarget(sprite);
            }
            sprite.fillRange = num1;
        }, sprite, 0);
    };
    MKUtils.changeNumLabelAct1 = function (label, num1, num2, callback, time) {
        time = time || 1;
        var speed = (num2 - num1) / time;
        cc.director.getScheduler().unscheduleAllForTarget(label);
        cc.director.getScheduler().schedule(function (dt) {
            num1 = num1 + speed * dt;
            if (speed == 0 || (speed > 0 && num1 >= num2) || (speed < 0 && num1 <= num2)) {
                num1 = num2;
                cc.director.getScheduler().unscheduleAllForTarget(label);
            }
            callback(num1);
        }, label, 0);
    };
    //取小数点后几位
    MKUtils.cutPoint = function (num, point) {
        var ten = Math.pow(10, Math.floor(point));
        return Math.floor(num * ten) / ten;
    };
    MKUtils.cutPointCeil = function (num, point) {
        var ten = Math.pow(10, Math.floor(point));
        return Math.ceil(num * ten) / ten;
    };
    MKUtils.tranNumOld = function (num) {
        var str = "";
        var showNum = 0;
        if (num < 0) {
            str = "" + Math.floor(num);
        }
        else if (num <= 9999) {
            str = "" + Math.round(num);
        }
        else if (num < 999500) {
            showNum = Math.round(num / 1000);
            str = "" + showNum + "A";
        }
        else if (num < 999500000) {
            showNum = Math.round(num / 1000000);
            str = "" + showNum + "B";
        }
        else if (num < 999500000000) {
            showNum = Math.round(num / 1000000000);
            str = "" + showNum + "C";
        }
        else {
            showNum = Math.round(num / 1000000000000);
            str = "" + showNum + "D";
        }
        return str;
    };
    MKUtils.tranNum = function (num, isFloat) {
        var str = "";
        var showNum = 0;
        if (num <= 0) {
            if (isFloat) {
                str = "" + num.toFixed(1);
            }
            else {
                str = "" + Math.floor(num);
            }
        }
        else if (num <= 9999) {
            if (isFloat) {
                str = "" + num.toFixed(1);
            }
            else {
                str = "" + Math.round(num);
            }
        }
        else {
            var syms = ['K', 'M', 'B', 'T', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU'];
            var maxNum = 999500;
            var cc = 1000;
            var index = -1;
            for (var i = 0; i < syms.length; i++) {
                if (num < maxNum) {
                    showNum = Math.round(num / cc);
                    str = "" + showNum + syms[i];
                    index = i;
                    break;
                }
                else {
                    maxNum *= 1000;
                    cc *= 1000;
                }
            }
            if (index == -1) {
                showNum = Math.round(num / cc);
                str = "" + showNum + "Z";
            }
        }
        return str;
    };
    MKUtils.split = function (str, s1) {
        var arr = str.split(s1);
        if (arr.length == 1 && arr[0] == "") {
            arr = [];
        }
        return arr;
    };
    MKUtils.getWorldPos = function (node) {
        return node.convertToWorldSpaceAR(cc.v2(0, 0)).add(cc.v2(-cc.winSize.width / 2, -cc.winSize.height / 2));
    };
    MKUtils.versionCompare = function (versionA, versionB) {
        var vA = versionA.split('.');
        var vB = versionB.split('.');
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) {
                continue;
            }
            else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        else {
            return 0;
        }
    };
    MKUtils.subName = function (str) {
        return (str.length > 6 ? (str.substring(0, 6) + "...") : str);
    };
    //scrollview item touchEnd
    MKUtils.itemOnTouchCall = function (node, callback) {
        var enable = false;
        node.on(cc.Node.EventType.TOUCH_START, function (e) {
            enable = true;
        });
        node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
            var moveY = Math.abs(e.touch._point.y - e.touch._startPoint.y);
            if (moveY > 10) {
                enable = false;
            }
        });
        node.on(cc.Node.EventType.TOUCH_END, function (e) {
            if (enable && callback) {
                callback();
            }
        });
    };
    MKUtils.fixProgress = function (progress) {
        if (progress < 0.05) {
            return 0;
        }
        if (progress < 0.1) {
            return 0.1;
        }
        return progress;
    };
    //时间转换 天时分 传入秒
    MKUtils.sencondsFormat = function (s) {
        if (s < 0) {
            return "0天0時0分";
        }
        var d = 24 * 3600;
        var day = Math.floor(s / d);
        var hour = Math.floor((s - day * d) / 3600);
        var minute = Math.floor((s - day * d - hour * 3600) / 60);
        // const sencond = s - day * d - hour * 3600 - minute * 60;
        var format = day + "天" + hour + "時" + minute + "分";
        return format;
    };
    //js去掉所有空格 \s表示查找空格带上加好表示连续的空格
    MKUtils.trimSpace = function (str) {
        var str1 = str.replace(/\s+/g, "");
        return str1;
    };
    // 计时器
    MKUtils.setNodeDelay = function (baseNode, delayTime, callback) {
        baseNode.runAction(cc.sequence(cc.delayTime(delayTime), cc.callFunc(function () {
            if (callback) {
                callback();
            }
        }.bind(this))));
    };
    //随机数组
    MKUtils.randomSort = function (a, b) {
        return Math.random() > 0.5 ? 1 : -1;
    };
    MKUtils.setStatsColor = function (font, background) {
        if (font === void 0) { font = cc.Color.WHITE; }
        if (background === void 0) { background = cc.color(0, 0, 0, 150); }
        var profiler = cc.find('PROFILER-NODE');
        if (!profiler)
            return cc.warn('未找到统计面板节点！');
        // 文字
        profiler.children.forEach(function (node) {
            node.color = font;
            node.getComponent(cc.Label).fontSize = 18;
            // node.addComponent(cc.LabelOutline).color = cc.Color.WHITE;
        });
        // 背景
        var node = profiler.getChildByName('BACKGROUND');
        if (!node) {
            node = new cc.Node('BACKGROUND');
            profiler.addChild(node, cc.macro.MIN_ZINDEX);
            node.setContentSize(profiler.getBoundingBoxToWorld());
            node.setPosition(0, 0);
        }
        var graphics = node.getComponent(cc.Graphics) || node.addComponent(cc.Graphics);
        graphics.clear();
        graphics.rect(-5, 12.5, node.width + 10, node.height - 10);
        graphics.fillColor = background;
        graphics.fill();
    };
    /** 计算今天的0点时刻对应的时间戳（ms） */
    MKUtils.calculNowDayStartTimeStamp = function () {
        // 1. 获取当前时间戳 - 秒
        var currTs = Date.now() / 1000;
        // 2. 获取日总秒数 = 时*分*秒
        var dayTs = 24 * 60 * 60;
        // 3. 求总天数
        var dayTotal = Math.floor(currTs / dayTs);
        // 4. 求出当日开始时秒数
        var dayZeroTs = dayTotal * dayTs;
        // 5. 去掉时差(返回的是分)，需要转成秒
        var offset = new Date().getTimezoneOffset() * 60; // -480
        var curStartSecond = (dayZeroTs + offset) * 1000;
        return curStartSecond;
    };
    MKUtils.currentTipsList = [];
    return MKUtils;
}());
exports.default = MKUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBbzNCQSxDQUFDO0lBbDNCZSxnQkFBUSxHQUF0QjtRQUNFLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRWEsYUFBSyxHQUFuQjtRQUNFLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRWEsb0JBQVksR0FBMUI7UUFDRSxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRWEsaUJBQVMsR0FBdkI7UUFDRSxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVhLHNCQUFjLEdBQTVCLFVBQTZCLElBQUksRUFBRSxJQUFJO1FBQ3JDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixPQUFPLE1BQU0sQ0FBQTthQUNk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LE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUUsT0FBTztRQUUxRCxJQUFJLGNBQWMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakQsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQXhxQmMsdUJBQWUsR0FBRyxFQUFFLENBQUM7SUF5cUJ0QyxjQUFDO0NBcDNCRCxBQW8zQkMsSUFBQTtrQkFwM0JvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUtVdGlscyB7XG5cbiAgcHVibGljIHN0YXRpYyBpc05hdGl2ZSgpIHtcbiAgICByZXR1cm4gKGNjLnN5cy5pc05hdGl2ZSkgJiYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzSU9TKCkge1xuICAgIHJldHVybiAoY2Muc3lzLmlzTmF0aXZlKSAmJiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc1dlY2hhdEdhbWUoKSB7XG4gICAgcmV0dXJuIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNBbmRyb2lkKCkge1xuICAgIHJldHVybiAoY2Muc3lzLmlzTmF0aXZlKSAmJiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmluZE5vZGVCeU5hbWUocm9vdCwgbmFtZSkge1xuICAgIGlmIChyb290KSB7XG4gICAgICBsZXQgd2lkZ2V0ID0gcm9vdC5nZXRDaGlsZEJ5TmFtZShuYW1lKTtcbiAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgcmV0dXJuIHdpZGdldFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gcm9vdC5jaGlsZHJlblxuICAgICAgICBmb3IgKGxldCBjIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgICAgd2lkZ2V0ID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShjLCBuYW1lKVxuICAgICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8v6I635Y+W5bGP5bmV5pi+56S65Yy65Z+f5bC65a+4XG4gIHB1YmxpYyBzdGF0aWMgZ2V0U2hvd1NpemUoKSB7XG4gICAgbGV0IGNhbnZhc1NpemUgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKVxuICAgIGxldCB3aW5TaXplID0gY2Mud2luU2l6ZVxuICAgIGxldCBzaG93U2l6ZSA9IGNjLnNpemUod2luU2l6ZS53aWR0aCwgd2luU2l6ZS5oZWlnaHQpXG4gICAgbGV0IGNhbnZhc1BybyA9IGNhbnZhc1NpemUud2lkdGggLyBjYW52YXNTaXplLmhlaWdodFxuICAgIGxldCB3aW5Qcm8gPSB3aW5TaXplLndpZHRoIC8gd2luU2l6ZS5oZWlnaHRcbiAgICBpZiAoY2FudmFzUHJvID4gd2luUHJvKSB7XG4gICAgICBzaG93U2l6ZS53aWR0aCA9IHdpblNpemUuaGVpZ2h0ICogY2FudmFzUHJvXG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dTaXplLmhlaWdodCA9IHdpblNpemUud2lkdGggLyBjYW52YXNQcm9cbiAgICB9XG4gICAgcmV0dXJuIHNob3dTaXplXG4gIH1cblxuICAvL+iOt+WPluaYvuekuuWMuuWfn+WSjOiuvuiuoeWwuuWvuOeahOWuvemrmOavlOS+i1xuICBwdWJsaWMgc3RhdGljIGdldFNob3dTY2FsZSgpIHtcbiAgICBsZXQgc2hvd1NpemUgPSBNS1V0aWxzLmdldFNob3dTaXplKClcbiAgICBsZXQgd2luU2l6ZSA9IGNjLndpblNpemU7XG4gICAgcmV0dXJuIGNjLnYyKHNob3dTaXplLndpZHRoIC8gd2luU2l6ZS53aWR0aCwgc2hvd1NpemUuaGVpZ2h0IC8gd2luU2l6ZS5oZWlnaHQpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBsYXlTY2FsZUFuaShwYXJlbnQ6IGNjLk5vZGUpIHtcbiAgICAvL+eVjOmdomxheW91dCDlsLrlr7jku444MCXliLAxMTAl5YaN5Zue5YiwMTAwJVxuICAgIGlmICghcGFyZW50KSB7IHJldHVybiB9XG4gICAgbGV0IHByZVNjYWxlID0gcGFyZW50LnNjYWxlO1xuICAgIHBhcmVudC5zY2FsZSA9IHByZVNjYWxlICogMC4zO1xuICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIHByZVNjYWxlICogMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpKVxuICB9XG4gIHB1YmxpYyBzdGF0aWMgcGxheVNjYWxlQW5pMihwYXJlbnQ6IGNjLk5vZGUpIHtcbiAgICAvL+eVjOmdomxheW91dCDlsLrlr7jku444MCXliLAxMTAl5YaN5Zue5YiwMTAwJVxuICAgIGlmICghcGFyZW50KSB7IHJldHVybiB9XG4gICAgbGV0IHByZVNjYWxlID0gcGFyZW50LnNjYWxlO1xuICAgIHBhcmVudC5zY2FsZSA9IHByZVNjYWxlICogMC4zO1xuICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICBjYy5zY2FsZVRvKDAuMywgcHJlU2NhbGUgKiAxLjMpLFxuICAgICAgY2Muc2NhbGVUbygwLjMsIHByZVNjYWxlICogMSkuZWFzaW5nKGNjLmVhc2VCYWNrSW5PdXQoKSksXG4gICAgKSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcGxheVNjYWxlQW5pQmlnKHBhcmVudDogY2MuTm9kZSkgeyAvLyDlpKfluYXluqbnmoTnvKnmlL5cbiAgICAvL+eVjOmdomxheW91dCDlsLrlr7jku444MCXliLAxMTAl5YaN5Zue5YiwMTAwJVxuICAgIGlmICghcGFyZW50KSB7IHJldHVybiB9XG4gICAgbGV0IHByZVNjYWxlID0gcGFyZW50LnNjYWxlO1xuICAgIHBhcmVudC5zY2FsZSA9IHByZVNjYWxlICogMC4zO1xuICAgIGxldCBzY2FsZTEgPSBjYy5zY2FsZVRvKDAuMywgcHJlU2NhbGUgKiAxLjMpXG4gICAgbGV0IHNjYWxlMiA9IGNjLnNjYWxlVG8oMC4xLCBwcmVTY2FsZSAqIDEpXG4gICAgcGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZTEsIHNjYWxlMikpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBsYXlTY2FsZUFuaVNtYWxsVG9Ob3JtYWwocGFyZW50OiBjYy5Ob2RlKSB7IC8vIOWkp+W5heW6pueahOe8qeaUvlxuICAgIC8v55WM6Z2ibGF5b3V0IOWwuuWvuOS7jjgwJeWIsDExMCXlho3lm57liLAxMDAlXG4gICAgaWYgKCFwYXJlbnQpIHsgcmV0dXJuIH1cbiAgICBsZXQgcHJlU2NhbGUgPSBwYXJlbnQuc2NhbGU7XG4gICAgcGFyZW50LnNjYWxlID0gMC4xO1xuICAgIGxldCBzY2FsZTEgPSBjYy5zY2FsZVRvKDAuMywgcHJlU2NhbGUgKiAxLjEpXG4gICAgbGV0IHNjYWxlMiA9IGNjLnNjYWxlVG8oMC4yLCBwcmVTY2FsZSAqIDEpXG4gICAgcGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZTEsIHNjYWxlMikpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBsYXlCbGFja0JnQWN0KGJsYWNrQmc6IGNjLk5vZGUsIHRpbWU/OiBhbnkpIHtcbiAgICBpZiAoIWJsYWNrQmcpIHsgcmV0dXJuIH1cbiAgICBpZiAodGltZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWUgPSAwLjJcbiAgICB9XG4gICAgbGV0IHByZU9wYWNpdHkgPSBibGFja0JnLm9wYWNpdHlcbiAgICBibGFja0JnLm9wYWNpdHkgPSAwXG4gICAgYmxhY2tCZy5ydW5BY3Rpb24oY2MuZmFkZVRvKHRpbWUsIHByZU9wYWNpdHkpKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBwbGF5RGlhbG9nQWN0QmlnKGJsYWNrQmc6IGNjLk5vZGUsIGJhc2VOb2RlOiBjYy5Ob2RlKSB7XG4gICAgTUtVdGlscy5wbGF5QmxhY2tCZ0FjdChibGFja0JnLCAwLjMpXG4gICAgTUtVdGlscy5wbGF5U2NhbGVBbmlCaWcoYmFzZU5vZGUpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHBsYXlEaWFsb2dBY3QoYmxhY2tCZzogY2MuTm9kZSwgYmFzZU5vZGU6IGNjLk5vZGUpIHtcbiAgICBNS1V0aWxzLnBsYXlCbGFja0JnQWN0KGJsYWNrQmcpXG4gICAgTUtVdGlscy5wbGF5U2NhbGVBbmkoYmFzZU5vZGUpXG4gIH1cbiAgcHVibGljIHN0YXRpYyBwbGF5RGlhbG9nQWN0MihibGFja0JnOiBjYy5Ob2RlLCBiYXNlTm9kZTogY2MuTm9kZSkge1xuICAgIE1LVXRpbHMucGxheUJsYWNrQmdBY3QoYmxhY2tCZylcbiAgICBNS1V0aWxzLnBsYXlTY2FsZUFuaTIoYmFzZU5vZGUpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJ0blNjYWxlQWN0KGJ0bjogY2MuTm9kZSwgc2NhbGU/OiBhbnkpIHtcbiAgICBpZiAoIWJ0bikgeyByZXR1cm4gfVxuICAgIGJ0bi5zdG9wQWxsQWN0aW9ucygpXG4gICAgbGV0IHByZVNjYWxlID0gc2NhbGUgfHwgYnRuLnNjYWxlXG4gICAgYnRuLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKFxuICAgICAgY2Muc2NhbGVUbygwLjIsIDEuMTMgKiBwcmVTY2FsZSksXG4gICAgICBjYy5zY2FsZVRvKDAuMiwgMSAqIHByZVNjYWxlKSxcbiAgICAgIGNjLmRlbGF5VGltZSgwLjYpXG4gICAgKSkpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJ0blNjYWxlQWN0MShidG46IGNjLk5vZGUsIHNjYWxlPzogYW55KSB7XG4gICAgaWYgKCFidG4pIHsgcmV0dXJuIH1cbiAgICBsZXQgcHJlU2NhbGUgPSBzY2FsZSB8fCBidG4uc2NhbGVcbiAgICBidG4ucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXG4gICAgICBjYy5kZWxheVRpbWUoMC41KSxcbiAgICAgIGNjLnNjYWxlVG8oMC4xOCwgMS4xNSAqIHByZVNjYWxlKSxcbiAgICAgIGNjLnNjYWxlVG8oMC4xOCwgcHJlU2NhbGUpLFxuICAgICAgY2Muc2NhbGVUbygwLjE4LCAxLjE1ICogcHJlU2NhbGUpLFxuICAgICAgY2Muc2NhbGVUbygwLjE4LCBwcmVTY2FsZSksXG4gICAgICBjYy5kZWxheVRpbWUoMC41KVxuICAgICkpKVxuICB9XG5cbiAgLy/mjInpkq7ngrnlh7vnvKnmlL7vvIxidG7kuLrop6bmkbjnmoRub2Rl77yMaWNvbuS4uue8qeaUvuaViOaenG5vZGVcbiAgcHVibGljIHN0YXRpYyBhZGRUb3VjaChidG46IGNjLk5vZGUsIGljb24/OiBhbnksIHNjYWxlWD86IG51bWJlciwgc2NhbGVZPzogbnVtYmVyKSB7XG4gICAgaWYgKCFpY29uKSB7XG4gICAgICBpY29uID0gYnRuXG4gICAgfVxuXG4gICAgbGV0IHByZVNjYWxlWCA9IGJ0bi5zY2FsZVhcbiAgICBsZXQgcHJlU2NhbGVZID0gYnRuLnNjYWxlWVxuXG4gICAgaWYgKHNjYWxlWCkge1xuICAgICAgcHJlU2NhbGVYID0gc2NhbGVYO1xuICAgIH1cblxuICAgIGlmIChzY2FsZVkpIHtcbiAgICAgIHByZVNjYWxlWSA9IHNjYWxlWTtcbiAgICB9XG5cbiAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpY29uLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMSwgcHJlU2NhbGVYICogMS4xLCBwcmVTY2FsZVkgKiAxLjEpKVxuICAgICAgLy8gaWNvbi5zZXRTY2FsZShwcmVTY2FsZVgqMS4xLCBwcmVTY2FsZVkqMS4xKVxuICAgIH0uYmluZChidG4pLCBidG4pXG5cbiAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWNvbi5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIHByZVNjYWxlWCwgcHJlU2NhbGVZKSlcbiAgICAgIC8vIGljb24uc2V0U2NhbGUocHJlU2NhbGVYLCBwcmVTY2FsZVkpXG4gICAgfS5iaW5kKGJ0biksIGJ0bilcblxuICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpY29uLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMiwgcHJlU2NhbGVYLCBwcmVTY2FsZVkpKVxuICAgICAgLy8gaWNvbi5zZXRTY2FsZShwcmVTY2FsZVgsIHByZVNjYWxlWSlcbiAgICB9LmJpbmQoYnRuKSwgYnRuKVxuICB9XG5cbiAgLy8g5ZCN5a2X5pyA5aSn6ZW/5bqm5oiq5Y+WXG4gIHB1YmxpYyBzdGF0aWMgbmFtZU1heEN1dChpbnB1dDogc3RyaW5nLCBtYXhMZW46IG51bWJlcikge1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIHZhciBzdHJsZW4gPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaCA9IGlucHV0W2ldO1xuICAgICAgaWYgKGNoLmNoYXJDb2RlQXQoMCkgPiAyNTUpIC8v5aaC5p6c5piv5rGJ5a2X77yM5YiZ5a2X56ym5Liy6ZW/5bqm5YqgMlxuICAgICAge1xuICAgICAgICBzdHJsZW4gKz0gMjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdHJsZW4rKztcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmxlbiA8PSBtYXhMZW4pIHtcbiAgICAgICAgb3V0cHV0ICs9IGNoO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJsZW4gPiBtYXhMZW4pIHtcbiAgICAgIHJldHVybiBvdXRwdXQgKz0gXCIuLi5cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG4gIHByaXZhdGUgc3RhdGljIGN1cnJlbnRUaXBzTGlzdCA9IFtdO1xuICBwdWJsaWMgc3RhdGljIGFsZXJ0VGlwcyhzdHI6IHN0cmluZywgc2hvd1RpbWU/OiBudW1iZXIsIGNsb3NlQWN0PzogYm9vbGVhbiwgdGlwVHlwZT86IG51bWJlcikge1xuXG4gICAgbGV0IGlzU2hvdyA9IE1LVXRpbHMuY3VycmVudFRpcHNMaXN0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IHN0cjtcbiAgICB9KVxuICAgIGlmIChpc1Nob3cubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG4gICAgaWYgKCFzaG93VGltZSkgeyBzaG93VGltZSA9IDEuMiB9XG4gICAgbGV0IHByZWZhYlVybCA9IFwicHJlZmFiL2NvbW1vbi9BbGVydFRpcHNcIlxuICAgIGNjLmxvYWRlci5sb2FkUmVzKHByZWZhYlVybCwgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UpIHtcbiAgICAgIE1LVXRpbHMuY3VycmVudFRpcHNMaXN0LnB1c2goc3RyKTtcbiAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHsgY2MubG9nKCfovb3lhaXpooTliLbotYTmupDlpLHotKUsIOWOn+WboDonICsgZXJyb3JNZXNzYWdlKTsgcmV0dXJuOyB9XG4gICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYikpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/pooTliLbotYTmupAhJyk7IHJldHVybjsgfVxuICAgICAgdmFyIHByZWZhYiA9IGNjLmluc3RhbnRpYXRlKGxvYWRlZFJlc291cmNlKVxuICAgICAgcHJlZmFiLmdldENvbXBvbmVudChcIkFsZXJ0VGlwc1wiKS5zZXRUaXBzKHN0ciwgdGlwVHlwZSlcbiAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQocHJlZmFiLCA5OTk5KVxuICAgICAgcHJlZmFiLnNldFBvc2l0aW9uKGNjLnYyKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIgLSAxMDApKVxuICAgICAgaWYgKCFjbG9zZUFjdCkge1xuICAgICAgICBNS1V0aWxzLnBsYXlTY2FsZUFuaShwcmVmYWIpXG4gICAgICB9XG4gICAgICBwcmVmYWIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShzaG93VGltZSksIGNjLnNwYXduKGNjLm1vdmVCeSgxLCAwLCA0MDApLCBjYy5mYWRlT3V0KDEpKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc3RyID0gcHJlZmFiLmdldENvbXBvbmVudChcIkFsZXJ0VGlwc1wiKS5nZXRUaXBzKCk7XG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgTUtVdGlscy5jdXJyZW50VGlwc0xpc3QuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IHN0cikgaWR4ID0gaW5kZXg7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChpZHggPj0gMCkgTUtVdGlscy5jdXJyZW50VGlwc0xpc3Quc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgcHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKVxuICAgICAgfSkpKVxuICAgIH0pXG4gIH1cblxuICAvL+iOt+WPluW9k+WJjeezu+e7n+aXtumXtOaIsyjnp5IpXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q3VyT3NUaW1lKCkge1xuICAgIGxldCBjdXJUaW1lID0gbmV3IERhdGUoKVxuICAgIHJldHVybiBNYXRoLmZsb29yKGN1clRpbWUuZ2V0VGltZSgpIC8gMTAwMClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q3VyT3NNaWxsaXNlY29uZCgpIHtcbiAgICBsZXQgY3VyVGltZSA9IG5ldyBEYXRlKClcbiAgICByZXR1cm4gY3VyVGltZS5nZXRUaW1lKClcbiAgfVxuXG4gIC8v55Sf5oiQbi1t6ZqP5py65pWwICDljIXmi6xu5ZKMbVxuICBwdWJsaWMgc3RhdGljIHJhbmRvbU5NKG46IG51bWJlciwgbTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG4gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobSAtIG4gKyAxKSlcbiAgfVxuXG4gIC8v55Sf5oiQbi1t6ZqP5py65pWwICDljIXmi6xu5ZKMbe+8mua1rueCueaVsFxuICBwdWJsaWMgc3RhdGljIHJhbmRvbU5NRihuOiBudW1iZXIsIG06IG51bWJlcikge1xuICAgIHJldHVybiBuICsgTWF0aC5yYW5kb20oKSAqIChtIC0gbilcbiAgfVxuXG4gIC8v6YCC6YWN5LiN5ZCM54mI5pysXG4gIHB1YmxpYyBzdGF0aWMgY29tcGFyZVZlcnNpb24odjEsIHYyKSB7XG4gICAgdjEgPSB2MS5zcGxpdCgnLicpXG4gICAgdjIgPSB2Mi5zcGxpdCgnLicpXG4gICAgY29uc3QgbGVuID0gTWF0aC5tYXgodjEubGVuZ3RoLCB2Mi5sZW5ndGgpXG5cbiAgICB3aGlsZSAodjEubGVuZ3RoIDwgbGVuKSB7XG4gICAgICB2MS5wdXNoKCcwJylcbiAgICB9XG4gICAgd2hpbGUgKHYyLmxlbmd0aCA8IGxlbikge1xuICAgICAgdjIucHVzaCgnMCcpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgbnVtMSA9IHBhcnNlSW50KHYxW2ldKVxuICAgICAgY29uc3QgbnVtMiA9IHBhcnNlSW50KHYyW2ldKVxuICAgICAgaWYgKG51bTEgPiBudW0yKSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2UgaWYgKG51bTEgPCBudW0yKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy/mmL7npLrot5Hpqaznga9cbiAgcHVibGljIHN0YXRpYyBzaG93QnJvYWQocG9zPzogY2MuVmVjMiwgaWQ/OiBhbnkpIHtcbiAgICBsZXQgdyA9IE1LVXRpbHMuZ2V0U2hvd1NpemUoKS53aWR0aDtcbiAgICBsZXQgaCA9IE1LVXRpbHMuZ2V0U2hvd1NpemUoKS5oZWlnaHQ7XG5cbiAgICBsZXQgcHJlZmFiVXJsID0gXCJwdWJsaWMvcHJlZmFicy9Db21tb25Ccm9hZFwiO1xuICAgIGNjLmxvYWRlci5sb2FkUmVzKHByZWZhYlVybCwgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UpIHtcbiAgICAgIC8v5qOA5p+l6LWE5rqQ5Yqg6L29XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7IGNjLmxvZygn6L295YWl6aKE5Yi26LWE5rqQ5aSx6LSlLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSk7IHJldHVybjsgfVxuICAgICAgaWYgKCEobG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIpKSB7IGNjLmxvZygn5L2g6L295YWl55qE5LiN5piv6aKE5Yi26LWE5rqQIScpOyByZXR1cm47IH1cbiAgICAgIC8v5byA5aeL5a6e5L6L5YyW6aKE5Yi26LWE5rqQXG4gICAgICB2YXIgcHJlZmFiID0gY2MuaW5zdGFudGlhdGUobG9hZGVkUmVzb3VyY2UpO1xuICAgICAgaWYgKHBvcykge1xuICAgICAgICBwcmVmYWIuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZWZhYi5zZXRQb3NpdGlvbihjYy52Mih3LCBoIC0gNDApKTtcbiAgICAgIH1cbiAgICAgIGxldCBicm9hZENvbSA9IHByZWZhYi5nZXRDb21wb25lbnQoXCJDb21tb25Ccm9hZFwiKTtcbiAgICAgIGlmIChicm9hZENvbSkge1xuICAgICAgICBpZiAoaWQgPT0gMSkge1xuICAgICAgICAgIGJyb2FkQ29tLnNob3dCcm9hZChpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJvYWRDb20uc2hvd0Jyb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQocHJlZmFiLCA5OTkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0d29Qb2ludERpc3RhbmNlKHBvczEsIHBvczIpIHvCoMKgwqDCoMKgwqAgLy8g5LuOZm9ybeeahOihqOWNleS4reWIhuWIq+aPkOWPluS4pOS4queCueeahOaoquOAgee6teWdkOagh1xuICAgIGxldCB4MSA9IHBvczEueDvCoMKgIC8vIOesrOS4gOS4queCueeahOaoquWdkOagh1xuICAgIGxldCB5MSA9IHBvczEueTvCoMKgIC8vIOesrOS4gOS4queCueeahOe6teWdkOagh1xuICAgIGxldCB4MiA9IHBvczIueDvCoMKgIC8vIOesrOS6jOS4queCueeahOaoquWdkOagh1xuICAgIGxldCB5MiA9IHBvczIueTvCoMKgIC8vIOesrOS6jOS4queCueeahOe6teWdkOagh1xuICAgIGxldCB4ZGlmZiA9IHgyIC0geDE7wqDCoMKgwqDCoMKgwqDCoMKgwqDCoCAvLyDorqHnrpfkuKTkuKrngrnnmoTmqKrlnZDmoIfkuYvlt65cbiAgICBsZXQgeWRpZmYgPSB5MiAtIHkxO8KgwqDCoMKgwqDCoMKgwqDCoMKgwqAgLy8g6K6h566X5Lik5Liq54K555qE57q15Z2Q5qCH5LmL5beuXG4gICAgcmV0dXJuIE1hdGgucG93KCh4ZGlmZiAqIHhkaWZmICsgeWRpZmYgKiB5ZGlmZiksIDAuNSk7wqDCoCAvLyDorqHnrpfkuKTngrnkuYvpl7TnmoTot53nprvvvIzlubblsIbnu5Pmnpzov5Tlm57ooajljZXlhYPntKBcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbG9hZFByZWZhYihwcmVmYWJVcmwsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZmFpbENhbGxiYWNrPzogYW55KSB7XG4gICAgbGV0IHByZWZhYiA9IGNjLmxvYWRlci5nZXRSZXMocHJlZmFiVXJsLCBjYy5QcmVmYWIpXG4gICAgaWYgKHByZWZhYiAmJiBwcmVmYWIgIT0gbnVsbCkge1xuICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICBzdWNjZXNzQ2FsbGJhY2socHJlZmFiKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyhwcmVmYWJVcmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGRvd25QcmVmYWIpIHtcbiAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgIGNjLmxvZyhcImxvYWQgXCIgKyBwcmVmYWJVcmwgKyBcIiBlcnJvciA6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICBpZiAoZmFpbENhbGxiYWNrKSB7XG4gICAgICAgICAgICBmYWlsQ2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhkb3duUHJlZmFiKVxuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc3RhdGljIGxvYWREaXIoZnJhbWVVcmwsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZmFpbENhbGxiYWNrPzogYW55LCB0eXBlID0gY2MuU3ByaXRlRnJhbWUpIHtcbiAgICBjYy5yZXNvdXJjZXMubG9hZERpcihmcmFtZVVybCwgdHlwZSwgZnVuY3Rpb24gKGVyciwgYXNzZXRzKSB7XG4gICAgICAvLyAuLi5cbiAgICAgIGNjLmxvZyhcIj09PT09PT09PT09XCIsIGFzc2V0cyk7XG4gICAgICAvLyBpZigpXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGxvYWRTcHJpdGVGcmFtZShmcmFtZVVybCwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBmYWlsQ2FsbGJhY2s/OiBhbnkpIHtcbiAgICBsZXQgc3ByaXRlRnJhbWUgPSBjYy5sb2FkZXIuZ2V0UmVzKGZyYW1lVXJsLCBjYy5TcHJpdGVGcmFtZSlcbiAgICBpZiAoc3ByaXRlRnJhbWUgJiYgc3ByaXRlRnJhbWUgIT0gbnVsbCkge1xuICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICBzdWNjZXNzQ2FsbGJhY2soc3ByaXRlRnJhbWUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGZyYW1lVXJsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgZG93blNwcml0ZUZyYW1lKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjYy5sb2coXCJsb2FkIFwiICsgZnJhbWVVcmwgKyBcIiBlcnJvciA6IFwiICsgZXJyKTtcbiAgICAgICAgICBpZiAoZmFpbENhbGxiYWNrKSB7XG4gICAgICAgICAgICBmYWlsQ2FsbGJhY2soKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xuICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhkb3duU3ByaXRlRnJhbWUpXG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBsb2FkU291bmRFZmZlY3QodXJsKSB7XG4gICAgbGV0IGdhbWVsb2FkU291bmQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lbG9hZFNvdW5kXCIpXG4gICAgLy8gaWYgKGdhbWVsb2FkU291bmQgJiYgZ2FtZWxvYWRTb3VuZCA9PSBcIjFcIikge1xuICAgIC8vICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldElzUGxheVNvdW5kKGZhbHNlKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldElzUGxheVNvdW5kKHRydWUpO1xuICAgIC8vIH1cblxuICAgIC8vIGlmICghRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRJc1BsYXlTb3VuZCgpKSB7XG4gICAgLy8gICAgIHJldHVyblxuICAgIC8vIH1cblxuICAgIGxldCBhdWRpb0NsaXAgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuQXVkaW9DbGlwKVxuICAgIGlmIChhdWRpb0NsaXApIHtcbiAgICAgIGlmICghTUtVdGlscy5lZmZlY3RJc09wZW4oKSkgeyByZXR1cm4gfVxuICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb0NsaXAsIGZhbHNlLCAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKSB7XG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICBjYy5sb2coJ+i9veWFpemihOWItui1hOa6kOWksei0pSwg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLkF1ZGlvQ2xpcCkpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/lo7Dpn7PotYTmupAhJyk7IHJldHVybjsgfVxuICAgICAgICBpZiAoIU1LVXRpbHMuZWZmZWN0SXNPcGVuKCkpIHsgcmV0dXJuIH1cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShsb2FkZWRSZXNvdXJjZSwgZmFsc2UsIDEpXG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbG9hZFNvdW5kTXVzaWModXJsKSB7XG4gICAgbGV0IGdhbWVsb2FkTXVzaWMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lbG9hZE11c2ljXCIpXG4gICAgLy8gaWYgKGdhbWVsb2FkTXVzaWMgJiYgZ2FtZWxvYWRNdXNpYyA9PSBcIjFcIikge1xuICAgIC8vICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldElzUGxheU11c2ljKGZhbHNlKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgICBEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldElzUGxheU11c2ljKHRydWUpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAoIURhdGFNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0SXNQbGF5TXVzaWMoKSkge1xuICAgIC8vICAgICByZXR1cm5cbiAgICAvLyB9XG5cbiAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJNdXNpY1BsYXlVcmxcIiwgdXJsKVxuICAgIGxldCBhdWRpb0NsaXAgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuQXVkaW9DbGlwKVxuICAgIGlmIChhdWRpb0NsaXApIHtcbiAgICAgIGlmICghTUtVdGlscy5tdXNpY0lzT3BlbigpKSB7IHJldHVybiB9XG4gICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW9DbGlwLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKSB7XG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICBjYy5sb2coJ+i9veWFpemihOWItui1hOa6kOWksei0pSwg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLkF1ZGlvQ2xpcCkpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/lo7Dpn7PotYTmupAhJyk7IHJldHVybjsgfVxuICAgICAgICBpZiAoIU1LVXRpbHMubXVzaWNJc09wZW4oKSkgeyByZXR1cm4gfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMobG9hZGVkUmVzb3VyY2UsIHRydWUpXG4gICAgICAgIC8vIERhdGFNYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNOZXZlclBsYXlNdXNpYyA9IHRydWVcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzdG9wTXVzaWMoKSB7XG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTXVzaWNQbGF5VXJsXCIsIFwiXCIpXG4gICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0RWZmZWN0KG9wZW46IGJvb2xlYW4pIHtcbiAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJFZmZlY3RTd2l0Y2hcIiwgKG9wZW4gPyBcIjFcIiA6IFwiMFwiKSlcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVmZmVjdElzT3BlbigpIHtcbiAgICByZXR1cm4gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiRWZmZWN0U3dpdGNoXCIpICE9IFwiMFwiXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNldE11c2ljKG9wZW46IGJvb2xlYW4pIHtcbiAgICBpZiAob3BlbiA9PSBNS1V0aWxzLm11c2ljSXNPcGVuKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJNdXNpY1N3aXRjaFwiLCAob3BlbiA/IFwiMVwiIDogXCIwXCIpKVxuICAgIGlmICghb3Blbikge1xuICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IE11c2ljUGxheVVybCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk11c2ljUGxheVVybFwiKVxuICAgICAgaWYgKE11c2ljUGxheVVybCAmJiBNdXNpY1BsYXlVcmwgIT0gXCJcIikge1xuICAgICAgICBNS1V0aWxzLmxvYWRTb3VuZE11c2ljKE11c2ljUGxheVVybClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG11c2ljSXNPcGVuKCkge1xuICAgIHJldHVybiBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJNdXNpY1N3aXRjaFwiKSAhPSBcIjBcIlxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZXRTb3VuZChvcGVuOiBib29sZWFuKSB7XG4gICAgTUtVdGlscy5zZXRFZmZlY3Qob3BlbilcbiAgICBNS1V0aWxzLnNldE11c2ljKG9wZW4pXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHByZUxvYWRTb3VuZEVmZmVjdChwcmVmYWJVcmwsIHN1Y2Nlc3NDYWxsYmFjazogYW55LCBmYWlsQ2FsbGJhY2s/OiBhbnkpIHtcbiAgICBjYy5sb2FkZXIubG9hZFJlcyhwcmVmYWJVcmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKSB7XG4gICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGNjLmxvZygn6L295YWl6aKE5Yi26LWE5rqQ5aSx6LSlLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIGZhaWxDYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLkF1ZGlvQ2xpcCkpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/lo7Dpn7PotYTmupAhJyk7IHJldHVybjsgfVxuICAgICAgc3VjY2Vzc0NhbGxiYWNrKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbG9hZFNrZWxldG9uRGF0YSh1cmwsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZmFpbENhbGxiYWNrPzogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCIyMjIyMjIyMjIyXCIsIHVybCk7XG4gICAgLy8gbGV0IHJlcyA9IG51bGw7XG4gICAgbGV0IHJlcyA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBzcC5Ta2VsZXRvbkRhdGEpXG4gICAgY29uc29sZS5sb2cocmVzLCBcInh4eHh4eHhcIiwgdXJsKTtcbiAgICBpZiAocmVzICYmIHJlcyAhPSBudWxsKSB7XG4gICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJhYWFhYWFhYWFhYWFhYWFcIiwgdXJsKTtcbiAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHJlcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCIzMzMzMzMzMzMzMzMzMz1cIiwgdXJsKTtcbiAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgc3AuU2tlbGV0b25EYXRhLCBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlLCByZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCI0NDQ0NDQ0NDQ0NDQ0NFwiLCByZXMpO1xuICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgY2MubG9nKFwibG9hZCBcIiArIHVybCArIFwiIGVycm9yIDogXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgIGlmIChmYWlsQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIGZhaWxDYWxsYmFjaygpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHJlcylcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICAvL+mHjeWkjeWIqeeUqG5vZGVcbiAgcHVibGljIHN0YXRpYyByZXBlYXRQcmVmYWIocHJlZmFiVXJsLCBwYXJlbnQsIG5vZGVOYW1lLCBzdWNjZXNzQ2FsbGJhY2ssIHpJbmRleD86IG51bWJlcikge1xuICAgIGlmICh6SW5kZXggPT0gdW5kZWZpbmVkKSB7IHpJbmRleCA9IDAgfVxuICAgIGxldCBub2RlOiBjYy5Ob2RlID0gTUtVdGlscy5maW5kTm9kZUJ5TmFtZShwYXJlbnQsIG5vZGVOYW1lKVxuICAgIGlmIChub2RlKSB7XG4gICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgbm9kZS56SW5kZXggPSB6SW5kZXhcbiAgICAgIHN1Y2Nlc3NDYWxsYmFjayhub2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBNS1V0aWxzLmxvYWRQcmVmYWIocHJlZmFiVXJsLCBmdW5jdGlvbiAocHJlZmFiKSB7XG4gICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXG4gICAgICAgIHBhcmVudC5hZGRDaGlsZChub2RlLCB6SW5kZXgsIG5vZGVOYW1lKVxuICAgICAgICBzdWNjZXNzQ2FsbGJhY2sobm9kZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZXBlYXRTcGluZSh1cmwsIHBhcmVudCwgbm9kZU5hbWUsIHN1Y2Nlc3NDYWxsYmFjaywgekluZGV4PzogbnVtYmVyKSB7XG4gICAgaWYgKHpJbmRleCA9PSB1bmRlZmluZWQpIHsgekluZGV4ID0gMCB9XG4gICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBNS1V0aWxzLmZpbmROb2RlQnlOYW1lKHBhcmVudCwgbm9kZU5hbWUpXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICBub2RlLnpJbmRleCA9IHpJbmRleFxuICAgICAgc3VjY2Vzc0NhbGxiYWNrKG5vZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIE1LVXRpbHMubG9hZFNrZWxldG9uRGF0YSh1cmwsIGZ1bmN0aW9uIChzcGluZXJlczogc3AuU2tlbGV0b25EYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKVxuICAgICAgICBsZXQgc3BpbmUgPSBub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbilcbiAgICAgICAgc3BpbmUuc2tlbGV0b25EYXRhID0gc3BpbmVyZXNcbiAgICAgICAgc3BpbmUucHJlbXVsdGlwbGllZEFscGhhID0gZmFsc2VcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKG5vZGUsIHpJbmRleCwgbm9kZU5hbWUpXG4gICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhub2RlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyDpobrml7bpkojop5LluqZcbiAgcHVibGljIHN0YXRpYyBnZXRBbmdsZShmcm9tOiBjYy5WZWMyLCB0bzogY2MuVmVjMikge1xuICAgIGxldCB4ID0gdG8ueCAtIGZyb20ueFxuICAgIGxldCB5ID0gdG8ueSAtIGZyb20ueVxuICAgIGxldCBtYXRoQW5nbGUgPSA5MCAvL+mAhuaXtumSiFxuICAgIGlmICh4ID09IDApIHtcbiAgICAgIGlmICh5ID49IDApIHtcbiAgICAgICAgbWF0aEFuZ2xlID0gOTBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGhBbmdsZSA9IDI3MFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdGFuQW5nbGUgPSBNYXRoLmF0YW4oeSAvIHgpICogMTgwIC8gTWF0aC5QSVxuICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgIGlmICh5ID49IDApIHtcbiAgICAgICAgICBtYXRoQW5nbGUgPSB0YW5BbmdsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGhBbmdsZSA9IHRhbkFuZ2xlICsgMzYwXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1hdGhBbmdsZSA9IHRhbkFuZ2xlICsgMTgwXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2MubG9nKFwibWF0aEFuZ2xlID0gXCIsIG1hdGhBbmdsZSlcbiAgICBsZXQgY29jb3NBbmdsZSA9ICgzNjAgLSBtYXRoQW5nbGUgKyA5MCkgJSAzNjBcbiAgICAvLyBjYy5sb2coXCJjb2Nvc0FuZ2xlID0gXCIsIGNvY29zQW5nbGUpXG4gICAgcmV0dXJuIGNvY29zQW5nbGVcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VVVJRCgpIHtcbiAgICBsZXQgVVVJRFN0ciA9IFwiZ2FtZV9vbmx5X3V1aWRcIlxuICAgIGxldCB1dWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFVVSURTdHIpXG4gICAgaWYgKHV1aWQpIHtcbiAgICAgIHJldHVybiB1dWlkXG4gICAgfVxuICAgIHV1aWQgPSBcInV1aWRfXCIgKyBNS1V0aWxzLmdldEN1ck9zVGltZSgpICsgXCJfXCIgKyBNS1V0aWxzLnJhbmRvbU5NKDAsIDk5OSkgKyBcIl9cIiArIE1LVXRpbHMucmFuZG9tTk0oMCwgOTk5KVxuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShVVUlEU3RyLCB1dWlkKVxuICAgIHJldHVybiB1dWlkXG4gIH1cblxuICAvLyAwMTozMFxuICBwdWJsaWMgc3RhdGljIHRyYW5UaW1lMShzZWMpIHtcbiAgICBzZWMgPSBNYXRoLmNlaWwoc2VjKVxuICAgIGlmIChzZWMgPD0gMCkgeyByZXR1cm4gXCIwMDowMFwiIH1cbiAgICBsZXQgbWluID0gTWF0aC5mbG9vcihzZWMgLyA2MClcbiAgICBsZXQgcyA9IE1hdGguZmxvb3IoKHNlYyAtIG1pbiAqIDYwKSlcbiAgICByZXR1cm4gXCJcIiArIE1LVXRpbHMuYWRkMChtaW4pICsgXCI6XCIgKyBNS1V0aWxzLmFkZDAocylcbiAgfVxuXG4gIC8vMeWwj+aXtjIw5YiGXG4gIHB1YmxpYyBzdGF0aWMgdHJhblRpbWUyKHNlYykge1xuICAgIGlmIChzZWMgPD0gMCkgeyByZXR1cm4gXCIw5YiGXCIgfVxuICAgIGxldCBob3VyID0gTWF0aC5mbG9vcihzZWMgLyAzNjAwKVxuICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKChzZWMgLSBob3VyICogMzYwMCkgLyA2MClcbiAgICBsZXQgc3RyID0gXCJcIlxuICAgIGlmIChob3VyID4gMCkge1xuICAgICAgc3RyICs9IChcIlwiICsgaG91ciArIFwi5bCP5pe2XCIpXG4gICAgfVxuICAgIGlmIChtaW4gPiAwKSB7XG4gICAgICBzdHIgKz0gKFwiXCIgKyBtaW4gKyBcIuWIhumSn1wiKVxuICAgIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZDAobTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG0gPCAxMCA/ICcwJyArIG0gOiBtO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc09uZURheSh0aW1lMSwgdGltZTIpIHtcbiAgICBsZXQgZGF0YTEgPSBuZXcgRGF0ZSh0aW1lMSlcbiAgICBsZXQgZGF0YTIgPSBuZXcgRGF0ZSh0aW1lMilcbiAgICByZXR1cm4gZGF0YTEuZ2V0RnVsbFllYXIoKSA9PSBkYXRhMi5nZXRGdWxsWWVhcigpICYmIGRhdGExLmdldE1vbnRoKCkgPT0gZGF0YTIuZ2V0TW9udGgoKSAmJiBkYXRhMS5nZXREYXRlKCkgPT0gZGF0YTIuZ2V0RGF0ZSgpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRyYW5EYXRlSE1TKHRpbWUpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhvdXI6IGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgIG1pbjogZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBzZWM6IGRhdGUuZ2V0U2Vjb25kcygpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjaGFuZ2VQcm9BY3QxKHNwcml0ZTogY2MuU3ByaXRlLCBudW0xOiBudW1iZXIsIG51bTI6IG51bWJlciwgdGltZT86IG51bWJlcikge1xuICAgIHRpbWUgPSB0aW1lIHx8IDAuNVxuICAgIGxldCBzcGVlZCA9IChudW0yIC0gbnVtMSkgLyB0aW1lXG5cbiAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHNwcml0ZSlcbiAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zY2hlZHVsZShmdW5jdGlvbiAoZHQpIHtcbiAgICAgIG51bTEgPSBudW0xICsgc3BlZWQgKiBkdFxuICAgICAgaWYgKHNwZWVkID09IDAgfHwgKHNwZWVkID4gMCAmJiBudW0xID49IG51bTIpIHx8IChzcGVlZCA8IDAgJiYgbnVtMSA8PSBudW0yKSkge1xuICAgICAgICBudW0xID0gbnVtMlxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHNwcml0ZSlcbiAgICAgIH1cbiAgICAgIHNwcml0ZS5maWxsUmFuZ2UgPSBudW0xXG4gICAgfSwgc3ByaXRlLCAwKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjaGFuZ2VOdW1MYWJlbEFjdDEobGFiZWw6IGNjLkxhYmVsLCBudW0xOiBudW1iZXIsIG51bTI6IG51bWJlciwgY2FsbGJhY2s6IGFueSwgdGltZT86IG51bWJlcikge1xuICAgIHRpbWUgPSB0aW1lIHx8IDFcbiAgICBsZXQgc3BlZWQgPSAobnVtMiAtIG51bTEpIC8gdGltZVxuXG4gICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZUFsbEZvclRhcmdldChsYWJlbClcbiAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5zY2hlZHVsZShmdW5jdGlvbiAoZHQpIHtcbiAgICAgIG51bTEgPSBudW0xICsgc3BlZWQgKiBkdFxuICAgICAgaWYgKHNwZWVkID09IDAgfHwgKHNwZWVkID4gMCAmJiBudW0xID49IG51bTIpIHx8IChzcGVlZCA8IDAgJiYgbnVtMSA8PSBudW0yKSkge1xuICAgICAgICBudW0xID0gbnVtMlxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KGxhYmVsKVxuICAgICAgfVxuICAgICAgY2FsbGJhY2sobnVtMSlcbiAgICB9LCBsYWJlbCwgMClcbiAgfVxuXG4gIC8v5Y+W5bCP5pWw54K55ZCO5Yeg5L2NXG4gIHB1YmxpYyBzdGF0aWMgY3V0UG9pbnQobnVtOiBudW1iZXIsIHBvaW50OiBudW1iZXIpIHtcbiAgICBsZXQgdGVuID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IocG9pbnQpKVxuICAgIHJldHVybiBNYXRoLmZsb29yKG51bSAqIHRlbikgLyB0ZW5cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3V0UG9pbnRDZWlsKG51bTogbnVtYmVyLCBwb2ludDogbnVtYmVyKSB7XG4gICAgbGV0IHRlbiA9IE1hdGgucG93KDEwLCBNYXRoLmZsb29yKHBvaW50KSlcbiAgICByZXR1cm4gTWF0aC5jZWlsKG51bSAqIHRlbikgLyB0ZW5cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHJhbk51bU9sZChudW06IG51bWJlcikge1xuICAgIGxldCBzdHIgPSBcIlwiXG4gICAgbGV0IHNob3dOdW0gPSAwXG4gICAgaWYgKG51bSA8IDApIHtcbiAgICAgIHN0ciA9IFwiXCIgKyBNYXRoLmZsb29yKG51bSlcbiAgICB9IGVsc2UgaWYgKG51bSA8PSA5OTk5KSB7XG4gICAgICBzdHIgPSBcIlwiICsgTWF0aC5yb3VuZChudW0pXG4gICAgfSBlbHNlIGlmIChudW0gPCA5OTk1MDApIHtcbiAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDApXG4gICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiQVwiXG4gICAgfSBlbHNlIGlmIChudW0gPCA5OTk1MDAwMDApIHtcbiAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDAwMDApXG4gICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiQlwiXG4gICAgfSBlbHNlIGlmIChudW0gPCA5OTk1MDAwMDAwMDApIHtcbiAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDAwMDAwMDApXG4gICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiQ1wiXG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDAwMDAwMDAwMDApXG4gICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiRFwiXG4gICAgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdHJhbk51bShudW06IG51bWJlciwgaXNGbG9hdD86IGJvb2xlYW4pIHtcbiAgICBsZXQgc3RyID0gXCJcIlxuICAgIGxldCBzaG93TnVtID0gMFxuICAgIGlmIChudW0gPD0gMCkge1xuICAgICAgaWYgKGlzRmxvYXQpIHtcbiAgICAgICAgc3RyID0gXCJcIiArIG51bS50b0ZpeGVkKDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBcIlwiICsgTWF0aC5mbG9vcihudW0pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChudW0gPD0gOTk5OSkge1xuICAgICAgaWYgKGlzRmxvYXQpIHtcbiAgICAgICAgc3RyID0gXCJcIiArIG51bS50b0ZpeGVkKDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBcIlwiICsgTWF0aC5yb3VuZChudW0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzeW1zID0gWydLJywgJ00nLCAnQicsICdUJywgJ0FBJywgJ0FCJywgJ0FDJywgJ0FEJywgJ0FFJywgJ0FGJywgJ0FHJywgJ0FIJywgJ0FJJywgJ0FKJywgJ0FLJywgJ0FMJywgJ0FNJywgJ0FOJywgJ0FPJywgJ0FQJywgJ0FRJywgJ0FSJywgJ0FTJywgJ0FUJywgJ0FVJ11cbiAgICAgIGxldCBtYXhOdW0gPSA5OTk1MDBcbiAgICAgIGxldCBjYyA9IDEwMDBcbiAgICAgIGxldCBpbmRleCA9IC0xXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG51bSA8IG1heE51bSkge1xuICAgICAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIGNjKVxuICAgICAgICAgIHN0ciA9IFwiXCIgKyBzaG93TnVtICsgc3ltc1tpXVxuICAgICAgICAgIGluZGV4ID0gaVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF4TnVtICo9IDEwMDBcbiAgICAgICAgICBjYyAqPSAxMDAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICBzaG93TnVtID0gTWF0aC5yb3VuZChudW0gLyBjYylcbiAgICAgICAgc3RyID0gXCJcIiArIHNob3dOdW0gKyBcIlpcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc3BsaXQoc3RyLCBzMSkge1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoczEpXG4gICAgaWYgKGFyci5sZW5ndGggPT0gMSAmJiBhcnJbMF0gPT0gXCJcIikge1xuICAgICAgYXJyID0gW11cbiAgICB9XG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRXb3JsZFBvcyhub2RlOiBjYy5Ob2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKS5hZGQoY2MudjIoLWNjLndpblNpemUud2lkdGggLyAyLCAtY2Mud2luU2l6ZS5oZWlnaHQgLyAyKSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdmVyc2lvbkNvbXBhcmUodmVyc2lvbkEsIHZlcnNpb25CKSB7XG4gICAgdmFyIHZBID0gdmVyc2lvbkEuc3BsaXQoJy4nKTtcbiAgICB2YXIgdkIgPSB2ZXJzaW9uQi5zcGxpdCgnLicpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdkEubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBhID0gcGFyc2VJbnQodkFbaV0pO1xuICAgICAgdmFyIGIgPSBwYXJzZUludCh2QltpXSB8fCAwKTtcbiAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZCLmxlbmd0aCA+IHZBLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc3ViTmFtZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiAoc3RyLmxlbmd0aCA+IDYgPyAoc3RyLnN1YnN0cmluZygwLCA2KSArIFwiLi4uXCIpIDogc3RyKVxuICB9XG5cbiAgLy9zY3JvbGx2aWV3IGl0ZW0gdG91Y2hFbmRcbiAgcHVibGljIHN0YXRpYyBpdGVtT25Ub3VjaENhbGwobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s/OiBhbnkpIHtcbiAgICBsZXQgZW5hYmxlID0gZmFsc2VcbiAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZSkge1xuICAgICAgZW5hYmxlID0gdHJ1ZVxuICAgIH0pXG4gICAgbm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IG1vdmVZID0gTWF0aC5hYnMoZS50b3VjaC5fcG9pbnQueSAtIGUudG91Y2guX3N0YXJ0UG9pbnQueSlcbiAgICAgIGlmIChtb3ZlWSA+IDEwKSB7IGVuYWJsZSA9IGZhbHNlIH1cbiAgICB9KVxuICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGVuYWJsZSAmJiBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZml4UHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIGlmIChwcm9ncmVzcyA8IDAuMDUpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgaWYgKHByb2dyZXNzIDwgMC4xKSB7XG4gICAgICByZXR1cm4gMC4xXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2dyZXNzXG4gIH1cblxuICAvL+aXtumXtOi9rOaNoiDlpKnml7bliIYg5Lyg5YWl56eSXG4gIHB1YmxpYyBzdGF0aWMgc2VuY29uZHNGb3JtYXQoczogbnVtYmVyKSB7XG4gICAgaWYgKHMgPCAwKSB7XG4gICAgICByZXR1cm4gXCIw5aSpMOaZgjDliIZcIjtcbiAgICB9XG4gICAgY29uc3QgZCA9IDI0ICogMzYwMDtcbiAgICBjb25zdCBkYXkgPSBNYXRoLmZsb29yKHMgLyBkKTtcbiAgICBjb25zdCBob3VyID0gTWF0aC5mbG9vcigocyAtIGRheSAqIGQpIC8gMzYwMCk7XG4gICAgY29uc3QgbWludXRlID0gTWF0aC5mbG9vcigocyAtIGRheSAqIGQgLSBob3VyICogMzYwMCkgLyA2MCk7XG4gICAgLy8gY29uc3Qgc2VuY29uZCA9IHMgLSBkYXkgKiBkIC0gaG91ciAqIDM2MDAgLSBtaW51dGUgKiA2MDtcbiAgICBjb25zdCBmb3JtYXQgPSBkYXkgKyBcIuWkqVwiICsgaG91ciArIFwi5pmCXCIgKyBtaW51dGUgKyBcIuWIhlwiO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH1cblxuICAvL2pz5Y675o6J5omA5pyJ56m65qC8IFxcc+ihqOekuuafpeaJvuepuuagvOW4puS4iuWKoOWlveihqOekuui/nue7reeahOepuuagvFxuICBwdWJsaWMgc3RhdGljIHRyaW1TcGFjZShzdHI6IHN0cmluZykge1xuICAgIGxldCBzdHIxID0gc3RyLnJlcGxhY2UoL1xccysvZywgXCJcIilcbiAgICByZXR1cm4gc3RyMVxuICB9XG5cbiAgLy8g6K6h5pe25ZmoXG4gIHB1YmxpYyBzdGF0aWMgc2V0Tm9kZURlbGF5KGJhc2VOb2RlLCBkZWxheVRpbWUsIGNhbGxiYWNrKSB7XG4gICAgYmFzZU5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkZWxheVRpbWUpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSkpKVxuICB9XG4gIC8v6ZqP5py65pWw57uEXG4gIHB1YmxpYyBzdGF0aWMgcmFuZG9tU29ydChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNldFN0YXRzQ29sb3IoZm9udDogY2MuQ29sb3IgPSBjYy5Db2xvci5XSElURSwgYmFja2dyb3VuZDogY2MuQ29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAxNTApKSB7XG4gICAgY29uc3QgcHJvZmlsZXIgPSBjYy5maW5kKCdQUk9GSUxFUi1OT0RFJyk7XG4gICAgaWYgKCFwcm9maWxlcikgcmV0dXJuIGNjLndhcm4oJ+acquaJvuWIsOe7n+iuoemdouadv+iKgueCue+8gScpO1xuXG4gICAgLy8g5paH5a2XXG4gICAgcHJvZmlsZXIuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgIG5vZGUuY29sb3IgPSBmb250O1xuICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gMThcbiAgICAgIC8vIG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICB9KTtcblxuICAgIC8vIOiDjOaZr1xuICAgIGxldCBub2RlID0gcHJvZmlsZXIuZ2V0Q2hpbGRCeU5hbWUoJ0JBQ0tHUk9VTkQnKTtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIG5vZGUgPSBuZXcgY2MuTm9kZSgnQkFDS0dST1VORCcpO1xuICAgICAgcHJvZmlsZXIuYWRkQ2hpbGQobm9kZSwgY2MubWFjcm8uTUlOX1pJTkRFWCk7XG4gICAgICBub2RlLnNldENvbnRlbnRTaXplKHByb2ZpbGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpKTtcbiAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgfVxuICAgIGNvbnN0IGdyYXBoaWNzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpIHx8IG5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICBncmFwaGljcy5jbGVhcigpO1xuICAgIGdyYXBoaWNzLnJlY3QoLTUsIDEyLjUsIG5vZGUud2lkdGggKyAxMCwgbm9kZS5oZWlnaHQgLSAxMCk7XG4gICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gYmFja2dyb3VuZDtcbiAgICBncmFwaGljcy5maWxsKCk7XG4gIH1cblxuXG4gIC8qKiDorqHnrpfku4rlpKnnmoQw54K55pe25Yi75a+55bqU55qE5pe26Ze05oiz77yIbXPvvIkgKi9cbiAgcHVibGljIHN0YXRpYyBjYWxjdWxOb3dEYXlTdGFydFRpbWVTdGFtcCgpOiBudW1iZXIge1xuICAgIC8vIDEuIOiOt+WPluW9k+WJjeaXtumXtOaIsyAtIOenklxuICAgIGxldCBjdXJyVHMgPSBEYXRlLm5vdygpIC8gMTAwMDtcblxuICAgIC8vIDIuIOiOt+WPluaXpeaAu+enkuaVsCA9IOaXtirliIYq56eSXG4gICAgbGV0IGRheVRzID0gMjQgKiA2MCAqIDYwO1xuXG4gICAgLy8gMy4g5rGC5oC75aSp5pWwXG4gICAgbGV0IGRheVRvdGFsID0gTWF0aC5mbG9vcihjdXJyVHMgLyBkYXlUcyk7XG5cbiAgICAvLyA0LiDmsYLlh7rlvZPml6XlvIDlp4vml7bnp5LmlbBcbiAgICBsZXQgZGF5WmVyb1RzID0gZGF5VG90YWwgKiBkYXlUcztcblxuICAgIC8vIDUuIOWOu+aOieaXtuW3rijov5Tlm57nmoTmmK/liIYp77yM6ZyA6KaB6L2s5oiQ56eSXG4gICAgbGV0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwOyAgLy8gLTQ4MFxuXG4gICAgbGV0IGN1clN0YXJ0U2Vjb25kID0gKGRheVplcm9UcyArIG9mZnNldCkgKiAxMDAwO1xuICAgIHJldHVybiBjdXJTdGFydFNlY29uZDtcbiAgfVxufVxuXG5cbiJdfQ==
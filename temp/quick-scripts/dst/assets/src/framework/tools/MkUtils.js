
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
            // node.color = font;
            // node.getComponent(cc.Label).fontSize = 38
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
        graphics.rect(-5, 12.5, node.width + 10, 120);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL01rVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBbzNCQSxDQUFDO0lBbDNCaUIsZ0JBQVEsR0FBdEI7UUFDSSxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVhLGFBQUssR0FBbkI7UUFDSSxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVhLG9CQUFZLEdBQTFCO1FBQ0ksT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVhLGlCQUFTLEdBQXZCO1FBQ0ksT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFYSxzQkFBYyxHQUE1QixVQUE2QixJQUFJLEVBQUUsSUFBSTtRQUNuQyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsT0FBTyxNQUFNLENBQUE7YUFD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LFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDakQsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQXhxQmMsdUJBQWUsR0FBRyxFQUFFLENBQUM7SUF5cUJ4QyxjQUFDO0NBcDNCRCxBQW8zQkMsSUFBQTtrQkFwM0JvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUtVdGlscyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc05hdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gKGNjLnN5cy5pc05hdGl2ZSkgJiYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TIHx8IGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc0lPUygpIHtcclxuICAgICAgICByZXR1cm4gKGNjLnN5cy5pc05hdGl2ZSkgJiYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzV2VjaGF0R2FtZSgpIHtcclxuICAgICAgICByZXR1cm4gKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBbmRyb2lkKCkge1xyXG4gICAgICAgIHJldHVybiAoY2Muc3lzLmlzTmF0aXZlKSAmJiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZpbmROb2RlQnlOYW1lKHJvb3QsIG5hbWUpIHtcclxuICAgICAgICBpZiAocm9vdCkge1xyXG4gICAgICAgICAgICBsZXQgd2lkZ2V0ID0gcm9vdC5nZXRDaGlsZEJ5TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKHdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gcm9vdC5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldCA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUoYywgbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5blsY/luZXmmL7npLrljLrln5/lsLrlr7hcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2hvd1NpemUoKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhc1NpemUgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKVxyXG4gICAgICAgIGxldCB3aW5TaXplID0gY2Mud2luU2l6ZVxyXG4gICAgICAgIGxldCBzaG93U2l6ZSA9IGNjLnNpemUod2luU2l6ZS53aWR0aCwgd2luU2l6ZS5oZWlnaHQpXHJcbiAgICAgICAgbGV0IGNhbnZhc1BybyA9IGNhbnZhc1NpemUud2lkdGggLyBjYW52YXNTaXplLmhlaWdodFxyXG4gICAgICAgIGxldCB3aW5Qcm8gPSB3aW5TaXplLndpZHRoIC8gd2luU2l6ZS5oZWlnaHRcclxuICAgICAgICBpZiAoY2FudmFzUHJvID4gd2luUHJvKSB7XHJcbiAgICAgICAgICAgIHNob3dTaXplLndpZHRoID0gd2luU2l6ZS5oZWlnaHQgKiBjYW52YXNQcm9cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93U2l6ZS5oZWlnaHQgPSB3aW5TaXplLndpZHRoIC8gY2FudmFzUHJvXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaG93U2l6ZVxyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W5pi+56S65Yy65Z+f5ZKM6K6+6K6h5bC65a+455qE5a696auY5q+U5L6LXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNob3dTY2FsZSgpIHtcclxuICAgICAgICBsZXQgc2hvd1NpemUgPSBNS1V0aWxzLmdldFNob3dTaXplKClcclxuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLndpblNpemU7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKHNob3dTaXplLndpZHRoIC8gd2luU2l6ZS53aWR0aCwgc2hvd1NpemUuaGVpZ2h0IC8gd2luU2l6ZS5oZWlnaHQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5U2NhbGVBbmkocGFyZW50OiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgLy/nlYzpnaJsYXlvdXQg5bC65a+45LuOODAl5YiwMTEwJeWGjeWbnuWIsDEwMCVcclxuICAgICAgICBpZiAoIXBhcmVudCkgeyByZXR1cm4gfVxyXG4gICAgICAgIGxldCBwcmVTY2FsZSA9IHBhcmVudC5zY2FsZTtcclxuICAgICAgICBwYXJlbnQuc2NhbGUgPSBwcmVTY2FsZSAqIDAuMztcclxuICAgICAgICBwYXJlbnQucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4yLCBwcmVTY2FsZSAqIDEpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheVNjYWxlQW5pMihwYXJlbnQ6IGNjLk5vZGUpIHtcclxuICAgICAgICAvL+eVjOmdomxheW91dCDlsLrlr7jku444MCXliLAxMTAl5YaN5Zue5YiwMTAwJVxyXG4gICAgICAgIGlmICghcGFyZW50KSB7IHJldHVybiB9XHJcbiAgICAgICAgbGV0IHByZVNjYWxlID0gcGFyZW50LnNjYWxlO1xyXG4gICAgICAgIHBhcmVudC5zY2FsZSA9IHByZVNjYWxlICogMC4zO1xyXG4gICAgICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCBwcmVTY2FsZSAqIDEuMyksXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCBwcmVTY2FsZSAqIDEpLmVhc2luZyhjYy5lYXNlQmFja0luT3V0KCkpLFxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5U2NhbGVBbmlCaWcocGFyZW50OiBjYy5Ob2RlKSB7IC8vIOWkp+W5heW6pueahOe8qeaUvlxyXG4gICAgICAgIC8v55WM6Z2ibGF5b3V0IOWwuuWvuOS7jjgwJeWIsDExMCXlho3lm57liLAxMDAlXHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHsgcmV0dXJuIH1cclxuICAgICAgICBsZXQgcHJlU2NhbGUgPSBwYXJlbnQuc2NhbGU7XHJcbiAgICAgICAgcGFyZW50LnNjYWxlID0gcHJlU2NhbGUgKiAwLjM7XHJcbiAgICAgICAgbGV0IHNjYWxlMSA9IGNjLnNjYWxlVG8oMC4zLCBwcmVTY2FsZSAqIDEuMylcclxuICAgICAgICBsZXQgc2NhbGUyID0gY2Muc2NhbGVUbygwLjEsIHByZVNjYWxlICogMSlcclxuICAgICAgICBwYXJlbnQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHNjYWxlMSwgc2NhbGUyKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBsYXlTY2FsZUFuaVNtYWxsVG9Ob3JtYWwocGFyZW50OiBjYy5Ob2RlKSB7IC8vIOWkp+W5heW6pueahOe8qeaUvlxyXG4gICAgICAgIC8v55WM6Z2ibGF5b3V0IOWwuuWvuOS7jjgwJeWIsDExMCXlho3lm57liLAxMDAlXHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHsgcmV0dXJuIH1cclxuICAgICAgICBsZXQgcHJlU2NhbGUgPSBwYXJlbnQuc2NhbGU7XHJcbiAgICAgICAgcGFyZW50LnNjYWxlID0gMC4xO1xyXG4gICAgICAgIGxldCBzY2FsZTEgPSBjYy5zY2FsZVRvKDAuMywgcHJlU2NhbGUgKiAxLjEpXHJcbiAgICAgICAgbGV0IHNjYWxlMiA9IGNjLnNjYWxlVG8oMC4yLCBwcmVTY2FsZSAqIDEpXHJcbiAgICAgICAgcGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZTEsIHNjYWxlMikpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwbGF5QmxhY2tCZ0FjdChibGFja0JnOiBjYy5Ob2RlLCB0aW1lPzogYW55KSB7XHJcbiAgICAgICAgaWYgKCFibGFja0JnKSB7IHJldHVybiB9XHJcbiAgICAgICAgaWYgKHRpbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSAwLjJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByZU9wYWNpdHkgPSBibGFja0JnLm9wYWNpdHlcclxuICAgICAgICBibGFja0JnLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgYmxhY2tCZy5ydW5BY3Rpb24oY2MuZmFkZVRvKHRpbWUsIHByZU9wYWNpdHkpKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheURpYWxvZ0FjdEJpZyhibGFja0JnOiBjYy5Ob2RlLCBiYXNlTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIE1LVXRpbHMucGxheUJsYWNrQmdBY3QoYmxhY2tCZywgMC4zKVxyXG4gICAgICAgIE1LVXRpbHMucGxheVNjYWxlQW5pQmlnKGJhc2VOb2RlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheURpYWxvZ0FjdChibGFja0JnOiBjYy5Ob2RlLCBiYXNlTm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIE1LVXRpbHMucGxheUJsYWNrQmdBY3QoYmxhY2tCZylcclxuICAgICAgICBNS1V0aWxzLnBsYXlTY2FsZUFuaShiYXNlTm9kZSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgcGxheURpYWxvZ0FjdDIoYmxhY2tCZzogY2MuTm9kZSwgYmFzZU5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBNS1V0aWxzLnBsYXlCbGFja0JnQWN0KGJsYWNrQmcpXHJcbiAgICAgICAgTUtVdGlscy5wbGF5U2NhbGVBbmkyKGJhc2VOb2RlKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnRuU2NhbGVBY3QoYnRuOiBjYy5Ob2RlLCBzY2FsZT86IGFueSkge1xyXG4gICAgICAgIGlmICghYnRuKSB7IHJldHVybiB9XHJcbiAgICAgICAgYnRuLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICBsZXQgcHJlU2NhbGUgPSBzY2FsZSB8fCBidG4uc2NhbGVcclxuICAgICAgICBidG4ucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxLjEzICogcHJlU2NhbGUpLFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMSAqIHByZVNjYWxlKSxcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNilcclxuICAgICAgICApKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ0blNjYWxlQWN0MShidG46IGNjLk5vZGUsIHNjYWxlPzogYW55KSB7XHJcbiAgICAgICAgaWYgKCFidG4pIHsgcmV0dXJuIH1cclxuICAgICAgICBsZXQgcHJlU2NhbGUgPSBzY2FsZSB8fCBidG4uc2NhbGVcclxuICAgICAgICBidG4ucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjUpLFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTgsIDEuMTUgKiBwcmVTY2FsZSksXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xOCwgcHJlU2NhbGUpLFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTgsIDEuMTUgKiBwcmVTY2FsZSksXHJcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xOCwgcHJlU2NhbGUpLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KVxyXG4gICAgICAgICkpKVxyXG4gICAgfVxyXG5cclxuICAgIC8v5oyJ6ZKu54K55Ye757yp5pS+77yMYnRu5Li66Kem5pG455qEbm9kZe+8jGljb27kuLrnvKnmlL7mlYjmnpxub2RlXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZFRvdWNoKGJ0bjogY2MuTm9kZSwgaWNvbj86IGFueSwgc2NhbGVYPzogbnVtYmVyLCBzY2FsZVk/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIWljb24pIHtcclxuICAgICAgICAgICAgaWNvbiA9IGJ0blxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByZVNjYWxlWCA9IGJ0bi5zY2FsZVhcclxuICAgICAgICBsZXQgcHJlU2NhbGVZID0gYnRuLnNjYWxlWVxyXG5cclxuICAgICAgICBpZiAoc2NhbGVYKSB7XHJcbiAgICAgICAgICAgIHByZVNjYWxlWCA9IHNjYWxlWDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY2FsZVkpIHtcclxuICAgICAgICAgICAgcHJlU2NhbGVZID0gc2NhbGVZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpY29uLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMSwgcHJlU2NhbGVYICogMS4xLCBwcmVTY2FsZVkgKiAxLjEpKVxyXG4gICAgICAgICAgICAvLyBpY29uLnNldFNjYWxlKHByZVNjYWxlWCoxLjEsIHByZVNjYWxlWSoxLjEpXHJcbiAgICAgICAgfS5iaW5kKGJ0biksIGJ0bilcclxuXHJcbiAgICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWNvbi5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIHByZVNjYWxlWCwgcHJlU2NhbGVZKSlcclxuICAgICAgICAgICAgLy8gaWNvbi5zZXRTY2FsZShwcmVTY2FsZVgsIHByZVNjYWxlWSlcclxuICAgICAgICB9LmJpbmQoYnRuKSwgYnRuKVxyXG5cclxuICAgICAgICBidG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpY29uLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMiwgcHJlU2NhbGVYLCBwcmVTY2FsZVkpKVxyXG4gICAgICAgICAgICAvLyBpY29uLnNldFNjYWxlKHByZVNjYWxlWCwgcHJlU2NhbGVZKVxyXG4gICAgICAgIH0uYmluZChidG4pLCBidG4pXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ZCN5a2X5pyA5aSn6ZW/5bqm5oiq5Y+WXHJcbiAgICBwdWJsaWMgc3RhdGljIG5hbWVNYXhDdXQoaW5wdXQ6IHN0cmluZywgbWF4TGVuOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICB2YXIgc3RybGVuID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICBpZiAoY2guY2hhckNvZGVBdCgwKSA+IDI1NSkgLy/lpoLmnpzmmK/msYnlrZfvvIzliJnlrZfnrKbkuLLplb/luqbliqAyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0cmxlbiArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RybGVuKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdHJsZW4gPD0gbWF4TGVuKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzdHJsZW4gPiBtYXhMZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dCArPSBcIi4uLlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhdGljIGN1cnJlbnRUaXBzTGlzdCA9IFtdO1xyXG4gICAgcHVibGljIHN0YXRpYyBhbGVydFRpcHMoc3RyOiBzdHJpbmcsIHNob3dUaW1lPzogbnVtYmVyLCBjbG9zZUFjdD86IGJvb2xlYW4sIHRpcFR5cGU/OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IGlzU2hvdyA9IE1LVXRpbHMuY3VycmVudFRpcHNMaXN0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gc3RyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGlzU2hvdy5sZW5ndGggPiAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghc2hvd1RpbWUpIHsgc2hvd1RpbWUgPSAxLjIgfVxyXG4gICAgICAgIGxldCBwcmVmYWJVcmwgPSBcInByZWZhYi9jb21tb24vQWxlcnRUaXBzXCJcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhwcmVmYWJVcmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMuY3VycmVudFRpcHNMaXN0LnB1c2goc3RyKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkgeyBjYy5sb2coJ+i9veWFpemihOWItui1hOa6kOWksei0pSwg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UpOyByZXR1cm47IH1cclxuICAgICAgICAgICAgaWYgKCEobG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5QcmVmYWIpKSB7IGNjLmxvZygn5L2g6L295YWl55qE5LiN5piv6aKE5Yi26LWE5rqQIScpOyByZXR1cm47IH1cclxuICAgICAgICAgICAgdmFyIHByZWZhYiA9IGNjLmluc3RhbnRpYXRlKGxvYWRlZFJlc291cmNlKVxyXG4gICAgICAgICAgICBwcmVmYWIuZ2V0Q29tcG9uZW50KFwiQWxlcnRUaXBzXCIpLnNldFRpcHMoc3RyLCB0aXBUeXBlKVxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHByZWZhYiwgOTk5OSlcclxuICAgICAgICAgICAgcHJlZmFiLnNldFBvc2l0aW9uKGNjLnYyKGNjLndpblNpemUud2lkdGggLyAyLCBjYy53aW5TaXplLmhlaWdodCAvIDIgLSAxMDApKVxyXG4gICAgICAgICAgICBpZiAoIWNsb3NlQWN0KSB7XHJcbiAgICAgICAgICAgICAgICBNS1V0aWxzLnBsYXlTY2FsZUFuaShwcmVmYWIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJlZmFiLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoc2hvd1RpbWUpLCBjYy5zcGF3bihjYy5tb3ZlQnkoMSwgMCwgNDAwKSwgY2MuZmFkZU91dCgxKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdHIgPSBwcmVmYWIuZ2V0Q29tcG9uZW50KFwiQWxlcnRUaXBzXCIpLmdldFRpcHMoKTtcclxuICAgICAgICAgICAgICAgIGxldCBpZHggPSAtMTtcclxuICAgICAgICAgICAgICAgIE1LVXRpbHMuY3VycmVudFRpcHNMaXN0LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBzdHIpIGlkeCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChpZHggPj0gMCkgTUtVdGlscy5jdXJyZW50VGlwc0xpc3Quc3BsaWNlKGlkeCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluW9k+WJjeezu+e7n+aXtumXtOaIsyjnp5IpXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEN1ck9zVGltZSgpIHtcclxuICAgICAgICBsZXQgY3VyVGltZSA9IG5ldyBEYXRlKClcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihjdXJUaW1lLmdldFRpbWUoKSAvIDEwMDApXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRDdXJPc01pbGxpc2Vjb25kKCkge1xyXG4gICAgICAgIGxldCBjdXJUaW1lID0gbmV3IERhdGUoKVxyXG4gICAgICAgIHJldHVybiBjdXJUaW1lLmdldFRpbWUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8v55Sf5oiQbi1t6ZqP5py65pWwICDljIXmi6xu5ZKMbVxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21OTShuOiBudW1iZXIsIG06IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG0gLSBuICsgMSkpXHJcbiAgICB9XHJcblxyXG4gICAgLy/nlJ/miJBuLW3pmo/mnLrmlbAgIOWMheaLrG7lkoxt77ya5rWu54K55pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbU5NRihuOiBudW1iZXIsIG06IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuICsgTWF0aC5yYW5kb20oKSAqIChtIC0gbilcclxuICAgIH1cclxuXHJcbiAgICAvL+mAgumFjeS4jeWQjOeJiOacrFxyXG4gICAgcHVibGljIHN0YXRpYyBjb21wYXJlVmVyc2lvbih2MSwgdjIpIHtcclxuICAgICAgICB2MSA9IHYxLnNwbGl0KCcuJylcclxuICAgICAgICB2MiA9IHYyLnNwbGl0KCcuJylcclxuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLm1heCh2MS5sZW5ndGgsIHYyLmxlbmd0aClcclxuXHJcbiAgICAgICAgd2hpbGUgKHYxLmxlbmd0aCA8IGxlbikge1xyXG4gICAgICAgICAgICB2MS5wdXNoKCcwJylcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHYyLmxlbmd0aCA8IGxlbikge1xyXG4gICAgICAgICAgICB2Mi5wdXNoKCcwJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbnVtMSA9IHBhcnNlSW50KHYxW2ldKVxyXG4gICAgICAgICAgICBjb25zdCBudW0yID0gcGFyc2VJbnQodjJbaV0pXHJcbiAgICAgICAgICAgIGlmIChudW0xID4gbnVtMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW0xIDwgbnVtMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDBcclxuICAgIH1cclxuXHJcbiAgICAvL+aYvuekuui3kemprOeBr1xyXG4gICAgcHVibGljIHN0YXRpYyBzaG93QnJvYWQocG9zPzogY2MuVmVjMiwgaWQ/OiBhbnkpIHtcclxuICAgICAgICBsZXQgdyA9IE1LVXRpbHMuZ2V0U2hvd1NpemUoKS53aWR0aDtcclxuICAgICAgICBsZXQgaCA9IE1LVXRpbHMuZ2V0U2hvd1NpemUoKS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBwcmVmYWJVcmwgPSBcInB1YmxpYy9wcmVmYWJzL0NvbW1vbkJyb2FkXCI7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocHJlZmFiVXJsLCBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSkge1xyXG4gICAgICAgICAgICAvL+ajgOafpei1hOa6kOWKoOi9vVxyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7IGNjLmxvZygn6L295YWl6aKE5Yi26LWE5rqQ5aSx6LSlLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLlByZWZhYikpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/pooTliLbotYTmupAhJyk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAvL+W8gOWni+WunuS+i+WMlumihOWItui1hOa6kFxyXG4gICAgICAgICAgICB2YXIgcHJlZmFiID0gY2MuaW5zdGFudGlhdGUobG9hZGVkUmVzb3VyY2UpO1xyXG4gICAgICAgICAgICBpZiAocG9zKSB7XHJcbiAgICAgICAgICAgICAgICBwcmVmYWIuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByZWZhYi5zZXRQb3NpdGlvbihjYy52Mih3LCBoIC0gNDApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYnJvYWRDb20gPSBwcmVmYWIuZ2V0Q29tcG9uZW50KFwiQ29tbW9uQnJvYWRcIik7XHJcbiAgICAgICAgICAgIGlmIChicm9hZENvbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBicm9hZENvbS5zaG93QnJvYWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicm9hZENvbS5zaG93QnJvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKHByZWZhYiwgOTk5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHR3b1BvaW50RGlzdGFuY2UocG9zMSwgcG9zMikge8KgwqDCoMKgwqDCoCAvLyDku45mb3Jt55qE6KGo5Y2V5Lit5YiG5Yir5o+Q5Y+W5Lik5Liq54K555qE5qiq44CB57q15Z2Q5qCHXHJcbiAgICAgICAgbGV0IHgxID0gcG9zMS54O8KgwqAgLy8g56ys5LiA5Liq54K555qE5qiq5Z2Q5qCHXHJcbiAgICAgICAgbGV0IHkxID0gcG9zMS55O8KgwqAgLy8g56ys5LiA5Liq54K555qE57q15Z2Q5qCHXHJcbiAgICAgICAgbGV0IHgyID0gcG9zMi54O8KgwqAgLy8g56ys5LqM5Liq54K555qE5qiq5Z2Q5qCHXHJcbiAgICAgICAgbGV0IHkyID0gcG9zMi55O8KgwqAgLy8g56ys5LqM5Liq54K555qE57q15Z2Q5qCHXHJcbiAgICAgICAgbGV0IHhkaWZmID0geDIgLSB4MTvCoMKgwqDCoMKgwqDCoMKgwqDCoMKgIC8vIOiuoeeul+S4pOS4queCueeahOaoquWdkOagh+S5i+W3rlxyXG4gICAgICAgIGxldCB5ZGlmZiA9IHkyIC0geTE7wqDCoMKgwqDCoMKgwqDCoMKgwqDCoCAvLyDorqHnrpfkuKTkuKrngrnnmoTnurXlnZDmoIfkuYvlt65cclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coKHhkaWZmICogeGRpZmYgKyB5ZGlmZiAqIHlkaWZmKSwgMC41KTvCoMKgIC8vIOiuoeeul+S4pOeCueS5i+mXtOeahOi3neemu++8jOW5tuWwhue7k+aenOi/lOWbnuihqOWNleWFg+e0oFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFByZWZhYihwcmVmYWJVcmwsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZmFpbENhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgbGV0IHByZWZhYiA9IGNjLmxvYWRlci5nZXRSZXMocHJlZmFiVXJsLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgaWYgKHByZWZhYiAmJiBwcmVmYWIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2socHJlZmFiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocHJlZmFiVXJsLCBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlLCBkb3duUHJlZmFiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwibG9hZCBcIiArIHByZWZhYlVybCArIFwiIGVycm9yIDogXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWlsQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbENhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhkb3duUHJlZmFiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZERpcihmcmFtZVVybCwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBmYWlsQ2FsbGJhY2s/OiBhbnksIHR5cGUgPSBjYy5TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKGZyYW1lVXJsLCB0eXBlLCBmdW5jdGlvbiAoZXJyLCBhc3NldHMpIHtcclxuICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIj09PT09PT09PT09XCIsIGFzc2V0cyk7XHJcbiAgICAgICAgICAgIC8vIGlmKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTcHJpdGVGcmFtZShmcmFtZVVybCwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBmYWlsQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBjYy5sb2FkZXIuZ2V0UmVzKGZyYW1lVXJsLCBjYy5TcHJpdGVGcmFtZSlcclxuICAgICAgICBpZiAoc3ByaXRlRnJhbWUgJiYgc3ByaXRlRnJhbWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2soc3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhmcmFtZVVybCwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIGRvd25TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImxvYWQgXCIgKyBmcmFtZVVybCArIFwiIGVycm9yIDogXCIgKyBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWlsQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbENhbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhkb3duU3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFNvdW5kRWZmZWN0KHVybCkge1xyXG4gICAgICAgIGxldCBnYW1lbG9hZFNvdW5kID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2FtZWxvYWRTb3VuZFwiKVxyXG4gICAgICAgIC8vIGlmIChnYW1lbG9hZFNvdW5kICYmIGdhbWVsb2FkU291bmQgPT0gXCIxXCIpIHtcclxuICAgICAgICAvLyAgICAgRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRJc1BsYXlTb3VuZChmYWxzZSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRJc1BsYXlTb3VuZCh0cnVlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmICghRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRJc1BsYXlTb3VuZCgpKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVyblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgbGV0IGF1ZGlvQ2xpcCA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBjYy5BdWRpb0NsaXApXHJcbiAgICAgICAgaWYgKGF1ZGlvQ2xpcCkge1xyXG4gICAgICAgICAgICBpZiAoIU1LVXRpbHMuZWZmZWN0SXNPcGVuKCkpIHsgcmV0dXJuIH1cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShhdWRpb0NsaXAsIGZhbHNlLCAxKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSwgbG9hZGVkUmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ+i9veWFpemihOWItui1hOa6kOWksei0pSwg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghKGxvYWRlZFJlc291cmNlIGluc3RhbmNlb2YgY2MuQXVkaW9DbGlwKSkgeyBjYy5sb2coJ+S9oOi9veWFpeeahOS4jeaYr+WjsOmfs+i1hOa6kCEnKTsgcmV0dXJuOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIU1LVXRpbHMuZWZmZWN0SXNPcGVuKCkpIHsgcmV0dXJuIH1cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkobG9hZGVkUmVzb3VyY2UsIGZhbHNlLCAxKVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTb3VuZE11c2ljKHVybCkge1xyXG4gICAgICAgIGxldCBnYW1lbG9hZE11c2ljID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2FtZWxvYWRNdXNpY1wiKVxyXG4gICAgICAgIC8vIGlmIChnYW1lbG9hZE11c2ljICYmIGdhbWVsb2FkTXVzaWMgPT0gXCIxXCIpIHtcclxuICAgICAgICAvLyAgICAgRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRJc1BsYXlNdXNpYyhmYWxzZSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgRGF0YU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5zZXRJc1BsYXlNdXNpYyh0cnVlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKCFEYXRhTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldElzUGxheU11c2ljKCkpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJNdXNpY1BsYXlVcmxcIiwgdXJsKVxyXG4gICAgICAgIGxldCBhdWRpb0NsaXAgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuQXVkaW9DbGlwKVxyXG4gICAgICAgIGlmIChhdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgaWYgKCFNS1V0aWxzLm11c2ljSXNPcGVuKCkpIHsgcmV0dXJuIH1cclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGF1ZGlvQ2xpcCwgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIGxvYWRlZFJlc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKCfovb3lhaXpooTliLbotYTmupDlpLHotKUsIOWOn+WboDonICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIShsb2FkZWRSZXNvdXJjZSBpbnN0YW5jZW9mIGNjLkF1ZGlvQ2xpcCkpIHsgY2MubG9nKCfkvaDovb3lhaXnmoTkuI3mmK/lo7Dpn7PotYTmupAhJyk7IHJldHVybjsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFNS1V0aWxzLm11c2ljSXNPcGVuKCkpIHsgcmV0dXJuIH1cclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhsb2FkZWRSZXNvdXJjZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC8vIERhdGFNYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNOZXZlclBsYXlNdXNpYyA9IHRydWVcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdG9wTXVzaWMoKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTXVzaWNQbGF5VXJsXCIsIFwiXCIpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEVmZmVjdChvcGVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiRWZmZWN0U3dpdGNoXCIsIChvcGVuID8gXCIxXCIgOiBcIjBcIikpXHJcbiAgICAgICAgaWYgKCFvcGVuKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlZmZlY3RJc09wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkVmZmVjdFN3aXRjaFwiKSAhPSBcIjBcIlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TXVzaWMob3BlbjogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChvcGVuID09IE1LVXRpbHMubXVzaWNJc09wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTXVzaWNTd2l0Y2hcIiwgKG9wZW4gPyBcIjFcIiA6IFwiMFwiKSlcclxuICAgICAgICBpZiAoIW9wZW4pIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgTXVzaWNQbGF5VXJsID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiTXVzaWNQbGF5VXJsXCIpXHJcbiAgICAgICAgICAgIGlmIChNdXNpY1BsYXlVcmwgJiYgTXVzaWNQbGF5VXJsICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIE1LVXRpbHMubG9hZFNvdW5kTXVzaWMoTXVzaWNQbGF5VXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVzaWNJc09wZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk11c2ljU3dpdGNoXCIpICE9IFwiMFwiXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTb3VuZChvcGVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgTUtVdGlscy5zZXRFZmZlY3Qob3BlbilcclxuICAgICAgICBNS1V0aWxzLnNldE11c2ljKG9wZW4pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwcmVMb2FkU291bmRFZmZlY3QocHJlZmFiVXJsLCBzdWNjZXNzQ2FsbGJhY2s6IGFueSwgZmFpbENhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocHJlZmFiVXJsLCBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlLCBsb2FkZWRSZXNvdXJjZSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+i9veWFpemihOWItui1hOa6kOWksei0pSwg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZmFpbENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEobG9hZGVkUmVzb3VyY2UgaW5zdGFuY2VvZiBjYy5BdWRpb0NsaXApKSB7IGNjLmxvZygn5L2g6L295YWl55qE5LiN5piv5aOw6Z+z6LWE5rqQIScpOyByZXR1cm47IH1cclxuICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRTa2VsZXRvbkRhdGEodXJsLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGZhaWxDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMjIyMjIyMjIyMlwiLCB1cmwpO1xyXG4gICAgICAgIC8vIGxldCByZXMgPSBudWxsO1xyXG4gICAgICAgIGxldCByZXMgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCwgc3AuU2tlbGV0b25EYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJ4eHh4eHh4XCIsIHVybCk7XHJcbiAgICAgICAgaWYgKHJlcyAmJiByZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsIFwiYWFhYWFhYWFhYWFhYWFhXCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2socmVzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIzMzMzMzMzMzMzMzMzMz1cIiwgdXJsKTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBzcC5Ta2VsZXRvbkRhdGEsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI0NDQ0NDQ0NDQ0NDQ0NFwiLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcImxvYWQgXCIgKyB1cmwgKyBcIiBlcnJvciA6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmFpbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxDYWxsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2socmVzKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+mHjeWkjeWIqeeUqG5vZGVcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVwZWF0UHJlZmFiKHByZWZhYlVybCwgcGFyZW50LCBub2RlTmFtZSwgc3VjY2Vzc0NhbGxiYWNrLCB6SW5kZXg/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoekluZGV4ID09IHVuZGVmaW5lZCkgeyB6SW5kZXggPSAwIH1cclxuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUocGFyZW50LCBub2RlTmFtZSlcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIG5vZGUuekluZGV4ID0gekluZGV4XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhub2RlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMubG9hZFByZWZhYihwcmVmYWJVcmwsIGZ1bmN0aW9uIChwcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSwgekluZGV4LCBub2RlTmFtZSlcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhub2RlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGVhdFNwaW5lKHVybCwgcGFyZW50LCBub2RlTmFtZSwgc3VjY2Vzc0NhbGxiYWNrLCB6SW5kZXg/OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoekluZGV4ID09IHVuZGVmaW5lZCkgeyB6SW5kZXggPSAwIH1cclxuICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IE1LVXRpbHMuZmluZE5vZGVCeU5hbWUocGFyZW50LCBub2RlTmFtZSlcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIG5vZGUuekluZGV4ID0gekluZGV4XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhub2RlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE1LVXRpbHMubG9hZFNrZWxldG9uRGF0YSh1cmwsIGZ1bmN0aW9uIChzcGluZXJlczogc3AuU2tlbGV0b25EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKClcclxuICAgICAgICAgICAgICAgIGxldCBzcGluZSA9IG5vZGUuYWRkQ29tcG9uZW50KHNwLlNrZWxldG9uKVxyXG4gICAgICAgICAgICAgICAgc3BpbmUuc2tlbGV0b25EYXRhID0gc3BpbmVyZXNcclxuICAgICAgICAgICAgICAgIHNwaW5lLnByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSwgekluZGV4LCBub2RlTmFtZSlcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhub2RlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDpobrml7bpkojop5LluqZcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QW5nbGUoZnJvbTogY2MuVmVjMiwgdG86IGNjLlZlYzIpIHtcclxuICAgICAgICBsZXQgeCA9IHRvLnggLSBmcm9tLnhcclxuICAgICAgICBsZXQgeSA9IHRvLnkgLSBmcm9tLnlcclxuICAgICAgICBsZXQgbWF0aEFuZ2xlID0gOTAgLy/pgIbml7bpkohcclxuICAgICAgICBpZiAoeCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh5ID49IDApIHtcclxuICAgICAgICAgICAgICAgIG1hdGhBbmdsZSA9IDkwXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRoQW5nbGUgPSAyNzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB0YW5BbmdsZSA9IE1hdGguYXRhbih5IC8geCkgKiAxODAgLyBNYXRoLlBJXHJcbiAgICAgICAgICAgIGlmICh4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGhBbmdsZSA9IHRhbkFuZ2xlXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGhBbmdsZSA9IHRhbkFuZ2xlICsgMzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtYXRoQW5nbGUgPSB0YW5BbmdsZSArIDE4MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYy5sb2coXCJtYXRoQW5nbGUgPSBcIiwgbWF0aEFuZ2xlKVxyXG4gICAgICAgIGxldCBjb2Nvc0FuZ2xlID0gKDM2MCAtIG1hdGhBbmdsZSArIDkwKSAlIDM2MFxyXG4gICAgICAgIC8vIGNjLmxvZyhcImNvY29zQW5nbGUgPSBcIiwgY29jb3NBbmdsZSlcclxuICAgICAgICByZXR1cm4gY29jb3NBbmdsZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VVVJRCgpIHtcclxuICAgICAgICBsZXQgVVVJRFN0ciA9IFwiZ2FtZV9vbmx5X3V1aWRcIlxyXG4gICAgICAgIGxldCB1dWlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFVVSURTdHIpXHJcbiAgICAgICAgaWYgKHV1aWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHV1aWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdXVpZCA9IFwidXVpZF9cIiArIE1LVXRpbHMuZ2V0Q3VyT3NUaW1lKCkgKyBcIl9cIiArIE1LVXRpbHMucmFuZG9tTk0oMCwgOTk5KSArIFwiX1wiICsgTUtVdGlscy5yYW5kb21OTSgwLCA5OTkpXHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFVVSURTdHIsIHV1aWQpXHJcbiAgICAgICAgcmV0dXJuIHV1aWRcclxuICAgIH1cclxuXHJcbiAgICAvLyAwMTozMFxyXG4gICAgcHVibGljIHN0YXRpYyB0cmFuVGltZTEoc2VjKSB7XHJcbiAgICAgICAgc2VjID0gTWF0aC5jZWlsKHNlYylcclxuICAgICAgICBpZiAoc2VjIDw9IDApIHsgcmV0dXJuIFwiMDA6MDBcIiB9XHJcbiAgICAgICAgbGV0IG1pbiA9IE1hdGguZmxvb3Ioc2VjIC8gNjApXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLmZsb29yKChzZWMgLSBtaW4gKiA2MCkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBNS1V0aWxzLmFkZDAobWluKSArIFwiOlwiICsgTUtVdGlscy5hZGQwKHMpXHJcbiAgICB9XHJcblxyXG4gICAgLy8x5bCP5pe2MjDliIZcclxuICAgIHB1YmxpYyBzdGF0aWMgdHJhblRpbWUyKHNlYykge1xyXG4gICAgICAgIGlmIChzZWMgPD0gMCkgeyByZXR1cm4gXCIw5YiGXCIgfVxyXG4gICAgICAgIGxldCBob3VyID0gTWF0aC5mbG9vcihzZWMgLyAzNjAwKVxyXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKChzZWMgLSBob3VyICogMzYwMCkgLyA2MClcclxuICAgICAgICBsZXQgc3RyID0gXCJcIlxyXG4gICAgICAgIGlmIChob3VyID4gMCkge1xyXG4gICAgICAgICAgICBzdHIgKz0gKFwiXCIgKyBob3VyICsgXCLlsI/ml7ZcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1pbiA+IDApIHtcclxuICAgICAgICAgICAgc3RyICs9IChcIlwiICsgbWluICsgXCLliIbpkp9cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkMChtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbSA8IDEwID8gJzAnICsgbSA6IG07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpc09uZURheSh0aW1lMSwgdGltZTIpIHtcclxuICAgICAgICBsZXQgZGF0YTEgPSBuZXcgRGF0ZSh0aW1lMSlcclxuICAgICAgICBsZXQgZGF0YTIgPSBuZXcgRGF0ZSh0aW1lMilcclxuICAgICAgICByZXR1cm4gZGF0YTEuZ2V0RnVsbFllYXIoKSA9PSBkYXRhMi5nZXRGdWxsWWVhcigpICYmIGRhdGExLmdldE1vbnRoKCkgPT0gZGF0YTIuZ2V0TW9udGgoKSAmJiBkYXRhMS5nZXREYXRlKCkgPT0gZGF0YTIuZ2V0RGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0cmFuRGF0ZUhNUyh0aW1lKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhvdXI6IGRhdGUuZ2V0SG91cnMoKSxcclxuICAgICAgICAgICAgbWluOiBkYXRlLmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgICAgc2VjOiBkYXRlLmdldFNlY29uZHMoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoYW5nZVByb0FjdDEoc3ByaXRlOiBjYy5TcHJpdGUsIG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyLCB0aW1lPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGltZSA9IHRpbWUgfHwgMC41XHJcbiAgICAgICAgbGV0IHNwZWVkID0gKG51bTIgLSBudW0xKSAvIHRpbWVcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZUFsbEZvclRhcmdldChzcHJpdGUpXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuc2NoZWR1bGUoZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgICAgIG51bTEgPSBudW0xICsgc3BlZWQgKiBkdFxyXG4gICAgICAgICAgICBpZiAoc3BlZWQgPT0gMCB8fCAoc3BlZWQgPiAwICYmIG51bTEgPj0gbnVtMikgfHwgKHNwZWVkIDwgMCAmJiBudW0xIDw9IG51bTIpKSB7XHJcbiAgICAgICAgICAgICAgICBudW0xID0gbnVtMlxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZUFsbEZvclRhcmdldChzcHJpdGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ByaXRlLmZpbGxSYW5nZSA9IG51bTFcclxuICAgICAgICB9LCBzcHJpdGUsIDApXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjaGFuZ2VOdW1MYWJlbEFjdDEobGFiZWw6IGNjLkxhYmVsLCBudW0xOiBudW1iZXIsIG51bTI6IG51bWJlciwgY2FsbGJhY2s6IGFueSwgdGltZT86IG51bWJlcikge1xyXG4gICAgICAgIHRpbWUgPSB0aW1lIHx8IDFcclxuICAgICAgICBsZXQgc3BlZWQgPSAobnVtMiAtIG51bTEpIC8gdGltZVxyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KGxhYmVsKVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnNjaGVkdWxlKGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgICAgICBudW0xID0gbnVtMSArIHNwZWVkICogZHRcclxuICAgICAgICAgICAgaWYgKHNwZWVkID09IDAgfHwgKHNwZWVkID4gMCAmJiBudW0xID49IG51bTIpIHx8IChzcGVlZCA8IDAgJiYgbnVtMSA8PSBudW0yKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtMSA9IG51bTJcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnVuc2NoZWR1bGVBbGxGb3JUYXJnZXQobGFiZWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2sobnVtMSlcclxuICAgICAgICB9LCBsYWJlbCwgMClcclxuICAgIH1cclxuXHJcbiAgICAvL+WPluWwj+aVsOeCueWQjuWHoOS9jVxyXG4gICAgcHVibGljIHN0YXRpYyBjdXRQb2ludChudW06IG51bWJlciwgcG9pbnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0ZW4gPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihwb2ludCkpXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtICogdGVuKSAvIHRlblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3V0UG9pbnRDZWlsKG51bTogbnVtYmVyLCBwb2ludDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRlbiA9IE1hdGgucG93KDEwLCBNYXRoLmZsb29yKHBvaW50KSlcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bSAqIHRlbikgLyB0ZW5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRyYW5OdW1PbGQobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgc3RyID0gXCJcIlxyXG4gICAgICAgIGxldCBzaG93TnVtID0gMFxyXG4gICAgICAgIGlmIChudW0gPCAwKSB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiXCIgKyBNYXRoLmZsb29yKG51bSlcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA8PSA5OTk5KSB7XHJcbiAgICAgICAgICAgIHN0ciA9IFwiXCIgKyBNYXRoLnJvdW5kKG51bSlcclxuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDk5OTUwMCkge1xyXG4gICAgICAgICAgICBzaG93TnVtID0gTWF0aC5yb3VuZChudW0gLyAxMDAwKVxyXG4gICAgICAgICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiQVwiXHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCA5OTk1MDAwMDApIHtcclxuICAgICAgICAgICAgc2hvd051bSA9IE1hdGgucm91bmQobnVtIC8gMTAwMDAwMClcclxuICAgICAgICAgICAgc3RyID0gXCJcIiArIHNob3dOdW0gKyBcIkJcIlxyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgOTk5NTAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIDEwMDAwMDAwMDApXHJcbiAgICAgICAgICAgIHN0ciA9IFwiXCIgKyBzaG93TnVtICsgXCJDXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93TnVtID0gTWF0aC5yb3VuZChudW0gLyAxMDAwMDAwMDAwMDAwKVxyXG4gICAgICAgICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIFwiRFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRyYW5OdW0obnVtOiBudW1iZXIsIGlzRmxvYXQ/OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFwiXCJcclxuICAgICAgICBsZXQgc2hvd051bSA9IDBcclxuICAgICAgICBpZiAobnVtIDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKGlzRmxvYXQpIHtcclxuICAgICAgICAgICAgICAgIHN0ciA9IFwiXCIgKyBudW0udG9GaXhlZCgxKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RyID0gXCJcIiArIE1hdGguZmxvb3IobnVtKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPD0gOTk5OSkge1xyXG4gICAgICAgICAgICBpZiAoaXNGbG9hdCkge1xyXG4gICAgICAgICAgICAgICAgc3RyID0gXCJcIiArIG51bS50b0ZpeGVkKDEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBcIlwiICsgTWF0aC5yb3VuZChudW0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc3ltcyA9IFsnSycsICdNJywgJ0InLCAnVCcsICdBQScsICdBQicsICdBQycsICdBRCcsICdBRScsICdBRicsICdBRycsICdBSCcsICdBSScsICdBSicsICdBSycsICdBTCcsICdBTScsICdBTicsICdBTycsICdBUCcsICdBUScsICdBUicsICdBUycsICdBVCcsICdBVSddXHJcbiAgICAgICAgICAgIGxldCBtYXhOdW0gPSA5OTk1MDBcclxuICAgICAgICAgICAgbGV0IGNjID0gMTAwMFxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChudW0gPCBtYXhOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93TnVtID0gTWF0aC5yb3VuZChudW0gLyBjYylcclxuICAgICAgICAgICAgICAgICAgICBzdHIgPSBcIlwiICsgc2hvd051bSArIHN5bXNbaV1cclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGlcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhOdW0gKj0gMTAwMFxyXG4gICAgICAgICAgICAgICAgICAgIGNjICo9IDEwMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHNob3dOdW0gPSBNYXRoLnJvdW5kKG51bSAvIGNjKVxyXG4gICAgICAgICAgICAgICAgc3RyID0gXCJcIiArIHNob3dOdW0gKyBcIlpcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RyXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzcGxpdChzdHIsIHMxKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IHN0ci5zcGxpdChzMSlcclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PSAxICYmIGFyclswXSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFyciA9IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFdvcmxkUG9zKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLmFkZChjYy52MigtY2Mud2luU2l6ZS53aWR0aCAvIDIsIC1jYy53aW5TaXplLmhlaWdodCAvIDIpKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdmVyc2lvbkNvbXBhcmUodmVyc2lvbkEsIHZlcnNpb25CKSB7XHJcbiAgICAgICAgdmFyIHZBID0gdmVyc2lvbkEuc3BsaXQoJy4nKTtcclxuICAgICAgICB2YXIgdkIgPSB2ZXJzaW9uQi5zcGxpdCgnLicpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdkEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIGEgPSBwYXJzZUludCh2QVtpXSk7XHJcbiAgICAgICAgICAgIHZhciBiID0gcGFyc2VJbnQodkJbaV0gfHwgMCk7XHJcbiAgICAgICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodkIubGVuZ3RoID4gdkEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN1Yk5hbWUoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gKHN0ci5sZW5ndGggPiA2ID8gKHN0ci5zdWJzdHJpbmcoMCwgNikgKyBcIi4uLlwiKSA6IHN0cilcclxuICAgIH1cclxuXHJcbiAgICAvL3Njcm9sbHZpZXcgaXRlbSB0b3VjaEVuZFxyXG4gICAgcHVibGljIHN0YXRpYyBpdGVtT25Ub3VjaENhbGwobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBsZXQgZW5hYmxlID0gZmFsc2VcclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlbmFibGUgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlWSA9IE1hdGguYWJzKGUudG91Y2guX3BvaW50LnkgLSBlLnRvdWNoLl9zdGFydFBvaW50LnkpXHJcbiAgICAgICAgICAgIGlmIChtb3ZlWSA+IDEwKSB7IGVuYWJsZSA9IGZhbHNlIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZml4UHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDAuMDUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IDAuMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMC4xXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3NcclxuICAgIH1cclxuXHJcbiAgICAvL+aXtumXtOi9rOaNoiDlpKnml7bliIYg5Lyg5YWl56eSXHJcbiAgICBwdWJsaWMgc3RhdGljIHNlbmNvbmRzRm9ybWF0KHM6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChzIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIw5aSpMOaZgjDliIZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZCA9IDI0ICogMzYwMDtcclxuICAgICAgICBjb25zdCBkYXkgPSBNYXRoLmZsb29yKHMgLyBkKTtcclxuICAgICAgICBjb25zdCBob3VyID0gTWF0aC5mbG9vcigocyAtIGRheSAqIGQpIC8gMzYwMCk7XHJcbiAgICAgICAgY29uc3QgbWludXRlID0gTWF0aC5mbG9vcigocyAtIGRheSAqIGQgLSBob3VyICogMzYwMCkgLyA2MCk7XHJcbiAgICAgICAgLy8gY29uc3Qgc2VuY29uZCA9IHMgLSBkYXkgKiBkIC0gaG91ciAqIDM2MDAgLSBtaW51dGUgKiA2MDtcclxuICAgICAgICBjb25zdCBmb3JtYXQgPSBkYXkgKyBcIuWkqVwiICsgaG91ciArIFwi5pmCXCIgKyBtaW51dGUgKyBcIuWIhlwiO1xyXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9qc+WOu+aOieaJgOacieepuuagvCBcXHPooajnpLrmn6Xmib7nqbrmoLzluKbkuIrliqDlpb3ooajnpLrov57nu63nmoTnqbrmoLxcclxuICAgIHB1YmxpYyBzdGF0aWMgdHJpbVNwYWNlKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHN0cjEgPSBzdHIucmVwbGFjZSgvXFxzKy9nLCBcIlwiKVxyXG4gICAgICAgIHJldHVybiBzdHIxXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6h5pe25ZmoXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldE5vZGVEZWxheShiYXNlTm9kZSwgZGVsYXlUaW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGJhc2VOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoZGVsYXlUaW1lKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSkpKVxyXG4gICAgfVxyXG4gICAgLy/pmo/mnLrmlbDnu4RcclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tU29ydChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTdGF0c0NvbG9yKGZvbnQ6IGNjLkNvbG9yID0gY2MuQ29sb3IuV0hJVEUsIGJhY2tncm91bmQ6IGNjLkNvbG9yID0gY2MuY29sb3IoMCwgMCwgMCwgMTUwKSkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVyID0gY2MuZmluZCgnUFJPRklMRVItTk9ERScpO1xyXG4gICAgICAgIGlmICghcHJvZmlsZXIpIHJldHVybiBjYy53YXJuKCfmnKrmib7liLDnu5/orqHpnaLmnb/oioLngrnvvIEnKTtcclxuXHJcbiAgICAgICAgLy8g5paH5a2XXHJcbiAgICAgICAgcHJvZmlsZXIuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICAgICAgLy8gbm9kZS5jb2xvciA9IGZvbnQ7XHJcbiAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDM4XHJcbiAgICAgICAgICAgIC8vIG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g6IOM5pmvXHJcbiAgICAgICAgbGV0IG5vZGUgPSBwcm9maWxlci5nZXRDaGlsZEJ5TmFtZSgnQkFDS0dST1VORCcpO1xyXG4gICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgICBub2RlID0gbmV3IGNjLk5vZGUoJ0JBQ0tHUk9VTkQnKTtcclxuICAgICAgICAgICAgcHJvZmlsZXIuYWRkQ2hpbGQobm9kZSwgY2MubWFjcm8uTUlOX1pJTkRFWCk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUocHJvZmlsZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkpO1xyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBncmFwaGljcyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKSB8fCBub2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICBncmFwaGljcy5yZWN0KC01LCAxMi41LCBub2RlLndpZHRoICsgMTAsIDEyMCk7XHJcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gYmFja2dyb3VuZDtcclxuICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvKiog6K6h566X5LuK5aSp55qEMOeCueaXtuWIu+WvueW6lOeahOaXtumXtOaIs++8iG1z77yJICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbGN1bE5vd0RheVN0YXJ0VGltZVN0YW1wKCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gMS4g6I635Y+W5b2T5YmN5pe26Ze05oizIC0g56eSXHJcbiAgICAgICAgbGV0IGN1cnJUcyA9IERhdGUubm93KCkgLyAxMDAwO1xyXG5cclxuICAgICAgICAvLyAyLiDojrflj5bml6XmgLvnp5LmlbAgPSDml7Yq5YiGKuenklxyXG4gICAgICAgIGxldCBkYXlUcyA9IDI0ICogNjAgKiA2MDtcclxuXHJcbiAgICAgICAgLy8gMy4g5rGC5oC75aSp5pWwXHJcbiAgICAgICAgbGV0IGRheVRvdGFsID0gTWF0aC5mbG9vcihjdXJyVHMgLyBkYXlUcyk7XHJcblxyXG4gICAgICAgIC8vIDQuIOaxguWHuuW9k+aXpeW8gOWni+aXtuenkuaVsFxyXG4gICAgICAgIGxldCBkYXlaZXJvVHMgPSBkYXlUb3RhbCAqIGRheVRzO1xyXG5cclxuICAgICAgICAvLyA1LiDljrvmjonml7blt64o6L+U5Zue55qE5piv5YiGKe+8jOmcgOimgei9rOaIkOenklxyXG4gICAgICAgIGxldCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDsgIC8vIC00ODBcclxuXHJcbiAgICAgICAgbGV0IGN1clN0YXJ0U2Vjb25kID0gKGRheVplcm9UcyArIG9mZnNldCkgKiAxMDAwO1xyXG4gICAgICAgIHJldHVybiBjdXJTdGFydFNlY29uZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0=
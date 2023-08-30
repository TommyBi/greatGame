"use strict";
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
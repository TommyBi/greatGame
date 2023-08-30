
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/tools/ComponentHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10e20CiVLlP3rcY+od6MQ8s', 'ComponentHelper');
// src/framework/tools/ComponentHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 组件设置
 */
var ComponentHelper = /** @class */ (function () {
    function ComponentHelper() {
    }
    //对文本赋值
    ComponentHelper.labelString = function (node, text, force, maxChars) {
        if (force === void 0) { force = false; }
        if (maxChars === void 0) { maxChars = null; }
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.Label);
            if (!!maxChars) {
                text = ComponentHelper.strClamp(text.toString(), maxChars, '...');
            }
            if (!!label) {
                label.string = text + "";
                if (force) {
                    label._forceUpdateRenderData(true);
                }
            }
        }
    };
    ComponentHelper.labelTimeFormat = function (node, text) {
        var result = this._secondToDate(text);
        ComponentHelper.labelString(node, result);
    };
    //分割的时间格式 00:00:00
    ComponentHelper.labelTimeFormatGap = function (node1, node2, node3, time) {
        var h = Math.floor(time / 3600);
        var m = Math.floor((time / 60 % 60));
        var s = Math.floor((time % 60));
        h = h > 9 ? h : '0' + h;
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        ComponentHelper.labelString(node1, h);
        ComponentHelper.labelString(node2, m);
        ComponentHelper.labelString(node3, s);
    };
    //00:00
    ComponentHelper.labelTimeSs = function (node, time) {
        var timeStr = this._secondToDate2(time);
        ComponentHelper.labelString(node, timeStr);
    };
    ComponentHelper._secondToDate2 = function (result) {
        var m = Math.floor((result / 60 % 60));
        var s = Math.floor((result % 60));
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        return m + ":" + s;
    };
    ComponentHelper._secondToDate = function (result) {
        var h = Math.floor(result / 3600);
        var m = Math.floor((result / 60 % 60));
        var s = Math.floor((result % 60));
        h = h > 9 ? h : '0' + h;
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        return h + ":" + m + ":" + s;
    };
    ComponentHelper.getLabelString = function (node) {
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.Label);
            if (!!label) {
                return label.string;
            }
        }
        return '';
    };
    //cLHeight 是否改变行高
    ComponentHelper.setLabelSize = function (node, size, cLHeight, space) {
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.Label);
            if (!!label) {
                label.fontSize = size;
                if (!!cLHeight) {
                    label.lineHeight = size;
                }
                if (!!space) {
                    label.spacingX = space;
                }
            }
        }
    };
    ComponentHelper.createLabel = function (size, color, content, font) {
        var node = new cc.Node();
        var label = node.addComponent(cc.Label);
        label.fontSize = size;
        label.font = font;
        node.color = color;
        label.string = content;
        return node;
    };
    //设置字体
    ComponentHelper.setLabelFont = function (node, font) {
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.Label);
            if (!!label) {
                label.font = font;
            }
        }
    };
    //对富文本进行赋值
    ComponentHelper.richLabelString = function (node, text, lineHeight) {
        if (cc.isValid(node)) {
            var label = node.getComponent(cc.RichText);
            if (label) {
                if (!!lineHeight && lineHeight > 0) {
                    label.lineHeight = lineHeight;
                }
                label.string = text;
            }
        }
    };
    //拥有纹理时直接赋值
    ComponentHelper.spriteFrame = function (node, spriteFrame) {
        if (cc.isValid(node)) {
            var sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = spriteFrame;
            }
            return sprite;
        }
        return null;
    };
    ComponentHelper.getSpriteFrame = function (node) {
        if (cc.isValid(node)) {
            var sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                return sprite.spriteFrame;
            }
        }
        return null;
    };
    ComponentHelper.createSprite = function (res, anchor) {
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = res;
        if (!!anchor) {
            node.anchorX = anchor.x;
            node.anchorY = anchor.y;
        }
        return node;
    };
    ComponentHelper.clearSpriteFrame = function (node) {
        if (cc.isValid(node)) {
            var sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = null;
            }
        }
    };
    ComponentHelper.spriteGray = function (node, isGray) {
        if (cc.isValid(node)) {
            var sprite = node.getComponent(cc.Sprite);
            if (!sprite) {
                sprite = node.getComponent(cc.Label);
            }
            if (!!sprite) {
                if (isGray) {
                    sprite.setMaterial(0, cc.Material.getBuiltinMaterial('2d-gray-sprite'));
                }
                else {
                    sprite.setMaterial(0, cc.Material.getBuiltinMaterial('2d-sprite'));
                }
            }
        }
    };
    //获得scrollView 并滑动到指定位置
    ComponentHelper.getScrollViewAndScroll = function (node, x, y) {
        var scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToOffset(cc.v2(x, y), 0);
        }
        return scrollView;
    };
    //获得scrollView 并滑动到指定位置
    ComponentHelper.getScrollViewAndScrollPercent = function (node, x, y) {
        var scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollTo(cc.v2(x, y), 0);
        }
        return scrollView;
    };
    //滑动到顶部
    ComponentHelper.getScrollViewAndScrollTop = function (node, time) {
        if (time === void 0) { time = 0; }
        var scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToTop(time);
        }
        return scrollView;
    };
    //滑动到左侧
    ComponentHelper.getScrollViewAndScrollLeft = function (node, time) {
        if (time === void 0) { time = 0; }
        var scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToLeft(time);
        }
        return scrollView;
    };
    ComponentHelper.setScrollViewEnabled = function (node, value) {
        if (value === void 0) { value = true; }
        var scrollView = node.getComponent(cc.ScrollView);
        if (!!scrollView) {
            scrollView.enabled = value;
        }
        return scrollView;
    };
    //设置通用货币  xx万 或者 xx亿
    ComponentHelper.setCommonCurrenyLabel = function (node, count) {
        if (cc.isValid(node)) {
            var label = node.getComponent('CommonCurrencyLabel');
            if (label) {
                label.setContent(count);
            }
        }
    };
    //小数点数字
    ComponentHelper.setDotLabel = function (node, value, isUint) {
        if (isUint === void 0) { isUint = true; }
        if (cc.isValid(node)) {
            var label = node.getComponent('DotLabel');
            if (label) {
                label.string(value, isUint);
            }
        }
    };
    ComponentHelper.setLabelColor = function (node, color) {
        if (cc.isValid(node)) {
            node.color = color;
        }
    };
    ComponentHelper.getEditorString = function (node) {
        if (cc.isValid(node)) {
            var editbox = node.getComponent(cc.EditBox);
            if (!!editbox) {
                return editbox.string;
            }
        }
        return '';
    };
    ComponentHelper.setEditorString = function (node, str) {
        if (cc.isValid(node)) {
            var editbox = node.getComponent(cc.EditBox);
            if (!!editbox) {
                editbox.string = str;
            }
        }
    };
    //设置文字描边
    ComponentHelper.setLabelOut = function (node, color, width) {
        if (cc.isValid(node)) {
            var labelOut = node.addComponent(cc.LabelOutline);
            labelOut.color = color;
            labelOut.width = width;
        }
    };
    //移除描边
    ComponentHelper.removeLineOut = function (node) {
        if (cc.isValid(node)) {
            var labelOut = node.removeComponent(cc.LabelOutline);
        }
    };
    //获得输入框的内容
    ComponentHelper.getEditBoxString = function (node) {
        if (cc.isValid(node)) {
            var editBox = node.getComponent(cc.EditBox);
            if (editBox.string != editBox.placeholder) {
                return editBox.string;
            }
        }
        return null;
    };
    ComponentHelper.strClamp = function (str, maxChars, suffix) {
        if (str === '') {
            return '';
        }
        var toCodePoint = function (unicodeSurrogates) {
            var r = [], c = 0, p = 0, i = 0;
            while (i < unicodeSurrogates.length) {
                var pos = i;
                c = unicodeSurrogates.charCodeAt(i++); //返回位置的字符的 Unicode 编码 
                if (c == 0xfe0f) {
                    continue;
                }
                if (p) {
                    var value = (0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00));
                    r.push({
                        v: value,
                        pos: pos,
                    }); //计算4字节的unicode
                    p = 0;
                }
                else if (0xD800 <= c && c <= 0xDBFF) {
                    p = c; //如果unicode编码在oxD800-0xDBff之间，则需要与后一个字符放在一起
                }
                else {
                    r.push({
                        v: c,
                        pos: pos
                    }); //如果是2字节，直接将码点转为对应的十六进制形式
                }
            }
            return r;
        };
        suffix = suffix === null ? '...' : suffix;
        maxChars *= 2;
        var codeArr = toCodePoint(str);
        var numChar = 0;
        var index = 0;
        for (var i = 0; i < codeArr.length; ++i) {
            var code = codeArr[i].v;
            var add = 1;
            if (code >= 128) {
                add = 2;
            }
            //如果超过了限制，则按上一个为准
            if (numChar + add > maxChars) {
                break;
            }
            index = i;
            //累加
            numChar += add;
        }
        if (codeArr.length - 1 == index) {
            return str;
        }
        var more = suffix ? 1 : 0;
        return str.substring(0, codeArr[index - more].pos + 1) + suffix;
    };
    //获得checkbox的选择状态
    ComponentHelper.getToggle = function (node) {
        if (cc.isValid(node)) {
            var toggle = node.getComponent(cc.Toggle);
            if (!!toggle) {
                return toggle.isChecked;
            }
        }
        return false;
    };
    ComponentHelper.setToggleListener = function (node, func, host) {
        if (cc.isValid(node)) {
            node.on('toggle', function (e) {
                func && func.call(host, e.isChecked);
            });
        }
    };
    ComponentHelper.setButtonInteractable = function (node, status) {
        if (cc.isValid(node)) {
            var button = node.getComponent(cc.Button);
            if (!!button) {
                button.interactable = status;
            }
        }
    };
    ComponentHelper.getButtonInteractabel = function (node) {
        if (cc.isValid(node)) {
            var button = node.getComponent(cc.Button);
            if (!!button) {
                return button.interactable;
            }
        }
        return true;
    };
    ComponentHelper.addClickEvent = function (node, target, component, handler) {
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = target;
        eventHandler.component = component;
        eventHandler.handler = handler;
        var clickEvents = node.getComponent(cc.Button).clickEvents;
        for (var i = 0; i < clickEvents.length; i++) {
            if (clickEvents[i] && clickEvents[i].handler == eventHandler.handler && clickEvents[i].component == eventHandler.component) {
                return;
            }
        }
        clickEvents.push(eventHandler);
    };
    //设置进度
    ComponentHelper.setProgressBar = function (node, value) {
        if (cc.isValid(node)) {
            var bar = node.getComponent(cc.ProgressBar);
            if (!!bar) {
                bar.progress = value;
            }
        }
    };
    ComponentHelper.setSpineStop = function (node, isStop) {
        if (cc.isValid(node)) {
            var spine = node.getComponent(sp.Skeleton);
            if (!!spine) {
                spine.paused = isStop;
            }
        }
    };
    //设置spine皮肤
    ComponentHelper.setSpineSkin = function (node, skin) {
        if (cc.isValid(node)) {
            var spine = node.getComponent(sp.Skeleton);
            if (!!spine) {
                spine.setSkin(skin);
            }
        }
    };
    //设置spine动画
    ComponentHelper.setSpineAnimate = function (node, animation, isLoop, func, host, arg) {
        if (cc.isValid(node)) {
            var spine_1 = node.getComponent(sp.Skeleton);
            if (!!spine_1) {
                spine_1.setAnimation(0, animation, isLoop);
            }
            if (!!func) {
                spine_1.setCompleteListener(function (trackEntry, loopCount) {
                    spine_1.setCompleteListener(null);
                    func.call(host, arg);
                });
            }
        }
    };
    //闪烁Action 
    ComponentHelper.setFlickerAction = function (node, time, count) {
        if (cc.isValid(node)) {
            // cc.log('开始闪烁了++++++++++++++');
            node.stopAllActions();
            node.runAction(cc.blink(time, count));
        }
    };
    //heartAction 心跳
    ComponentHelper.setHeartAction = function (node, time, isStartBig, bigScale, smallScale, special) {
        if (time === void 0) { time = 0.5; }
        if (isStartBig === void 0) { isStartBig = false; }
        if (bigScale === void 0) { bigScale = 1.2; }
        if (smallScale === void 0) { smallScale = 0.9; }
        if (special === void 0) { special = false; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var delayAction = null;
            if (special) {
                time = time - 0.2;
                delayAction = cc.delayTime(0.2);
            }
            var scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            var scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            var action = null;
            if (special) {
                action = isStartBig ? cc.sequence(delayAction, scaleBigAction, delayAction, scaleSmallAction) : cc.sequence(delayAction, scaleSmallAction, delayAction, scaleBigAction);
            }
            else {
                action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            }
            node.runAction(cc.repeatForever(action));
        }
    };
    //heartAction 短时间心跳
    ComponentHelper.setHeartActionByTime = function (node, num, callBack, time, isStartBig, bigScale, smallScale, special) {
        if (num === void 0) { num = 5; }
        if (callBack === void 0) { callBack = null; }
        if (time === void 0) { time = 0.5; }
        if (isStartBig === void 0) { isStartBig = false; }
        if (bigScale === void 0) { bigScale = 1.2; }
        if (smallScale === void 0) { smallScale = 0.9; }
        if (special === void 0) { special = false; }
        if (cc.isValid(node)) {
            node.active = true;
            node.stopAllActions();
            var delayAction = null;
            if (special) {
                time = time - 0.2;
                delayAction = cc.delayTime(0.2);
            }
            var currentNum_1 = 0;
            var scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            var scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            var scaleFun = cc.callFunc(function () {
                currentNum_1++;
                if (callBack && currentNum_1 >= num) {
                    if (callBack)
                        callBack();
                    node.stopAllActions();
                }
            });
            var action = null;
            if (special) {
                action = isStartBig ? cc.sequence(delayAction, scaleBigAction, delayAction, scaleSmallAction, scaleFun) : cc.sequence(delayAction, scaleSmallAction, delayAction, scaleBigAction, scaleFun);
            }
            else {
                action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction, scaleFun) : cc.sequence(scaleSmallAction, scaleBigAction, scaleFun);
            }
            node.runAction(cc.repeat(action, num));
        }
    };
    //上下浮动
    ComponentHelper.setUpDownAction = function (node, time, y) {
        if (time === void 0) { time = 0.5; }
        if (y === void 0) { y = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            var moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    };
    ComponentHelper.setLRAction = function (node, time, x) {
        if (time === void 0) { time = 0.5; }
        if (x === void 0) { x = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.moveTo(time, cc.v2(pos.x + x, pos.y));
            var moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    };
    ComponentHelper.setRotation = function (node, time, x) {
        if (time === void 0) { time = 0.5; }
        if (x === void 0) { x = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.rotateTo(time, 10);
            var moveDown = cc.rotateTo(time, -10);
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    };
    ComponentHelper.setScaleGuoDong = function (node, time, isStartBig, bigScale, smallScale) {
        if (time === void 0) { time = 0.1; }
        if (isStartBig === void 0) { isStartBig = true; }
        if (bigScale === void 0) { bigScale = 1.3; }
        if (smallScale === void 0) { smallScale = 1.0; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            var scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            var action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            node.runAction(action);
        }
    };
    ComponentHelper.setJumpActiom = function (node, time, y) {
        if (time === void 0) { time = 0.3; }
        if (y === void 0) { y = 20; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            var moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(action);
        }
    };
    ComponentHelper.setReJumpActiom = function (node, time, y) {
        if (time === void 0) { time = 0.3; }
        if (y === void 0) { y = 10; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = cc.v2(node.x, node.y);
            var moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            var moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y - y));
            var action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    };
    //某个方向循环移动
    //distance循环移动的距离
    ComponentHelper.setForEverMoveAction = function (node, distance, time, isStartBig, axis, isEase) {
        if (distance === void 0) { distance = 5; }
        if (time === void 0) { time = 0.5; }
        if (isStartBig === void 0) { isStartBig = false; }
        if (axis === void 0) { axis = 'x'; }
        if (isEase === void 0) { isEase = false; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = node.getPosition();
            var scaleBigAction = axis === 'x' ? cc.moveTo(time, pos.x + distance, pos.y) : cc.moveTo(time, pos.x, pos.y + distance);
            if (isEase) {
                scaleBigAction = scaleBigAction.easing(cc.easeOut(1.5));
            }
            var scaleSmallAction = cc.moveTo(time, pos.x, pos.y);
            var action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            node.runAction(cc.repeatForever(action));
        }
    };
    //循环移动 播放指定时间
    ComponentHelper.setLoopAction = function (node, callBack, axis, distance, actionTime, duration, isStartBig) {
        if (axis === void 0) { axis = 'y'; }
        if (distance === void 0) { distance = 5; }
        if (actionTime === void 0) { actionTime = 0.5; }
        if (duration === void 0) { duration = 3; }
        if (isStartBig === void 0) { isStartBig = false; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            var pos = node.getPosition();
            var scaleBigAction = axis === 'x' ? cc.moveTo(actionTime, pos.x + distance, pos.y) : cc.moveTo(actionTime, pos.x, pos.y + distance);
            var scaleSmallAction = cc.moveTo(actionTime, pos.x, pos.y);
            var action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            var count = duration / (actionTime * 2);
            node.runAction(cc.sequence(cc.repeat(action, count), cc.callFunc(function () {
                callBack && callBack();
            })));
        }
    };
    //缩放显示回弹
    ComponentHelper.setScaleBounce = function (node, callBack, duration, bduration, bRadio) {
        if (duration === void 0) { duration = 0.1; }
        if (bduration === void 0) { bduration = 0.6; }
        if (bRadio === void 0) { bRadio = 1.8; }
        if (cc.isValid(node)) {
            var bAction = cc.scaleTo(duration, bRadio, bRadio);
            var sAction = cc.scaleTo(bduration, 1, 1).easing(cc.easeBounceOut());
            node.runAction(cc.sequence(bAction, cc.delayTime(0.1), sAction, cc.callFunc(function () {
                callBack && callBack();
            })));
        }
    };
    /**
     * 设置下砸效果
     * @param node 节点
     * @param duration 持续时间
     * @param bigScale 起始最大值
     * @param smallScale 缩放到最小值
     */
    ComponentHelper.setDownAction = function (node, duration, bigScale, smallScale) {
        if (duration === void 0) { duration = 0.2; }
        if (bigScale === void 0) { bigScale = 3; }
        if (smallScale === void 0) { smallScale = 1; }
        if (cc.isValid(node)) {
            node.scaleX = node.scaleY = bigScale;
            node.runAction(cc.scaleTo(duration, smallScale, smallScale).easing(cc.easeBounceInOut()));
        }
    };
    //TODO 后期修改成震动类
    ComponentHelper.shakeEffect = function (node, duration) {
        if (duration === void 0) { duration = 0.6; }
        if (cc.isValid(node)) {
            node.stopAllActions();
            node.runAction(cc.repeatForever(cc.sequence(cc.moveTo(0.02, cc.v2(5, 7)), cc.moveTo(0.02, cc.v2(-6, 7)), cc.moveTo(0.02, cc.v2(-13, 3)), cc.moveTo(0.02, cc.v2(3, -6)), cc.moveTo(0.02, cc.v2(-5, 5)), cc.moveTo(0.02, cc.v2(2, -8)), cc.moveTo(0.02, cc.v2(-8, -10)), cc.moveTo(0.02, cc.v2(3, 10)), cc.moveTo(0.02, cc.v2(0, 0)))));
            setTimeout(function () {
                node.stopAllActions();
                node.setPosition(0, 0);
            }, duration * 1000);
        }
    };
    return ComponentHelper;
}());
exports.default = ComponentHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0g7SUFBQTtJQTRwQkEsQ0FBQztJQXpwQkcsT0FBTztJQUNPLDJCQUFXLEdBQXpCLFVBQTBCLElBQWEsRUFBRSxJQUF1QixFQUFFLEtBQXNCLEVBQUUsUUFBdUI7UUFBL0Msc0JBQUEsRUFBQSxhQUFzQjtRQUFFLHlCQUFBLEVBQUEsZUFBdUI7UUFDN0csSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDWixJQUFJLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QzthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRWEsK0JBQWUsR0FBN0IsVUFBOEIsSUFBYSxFQUFFLElBQVk7UUFDckQsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0JBQWtCO0lBQ0osa0NBQWtCLEdBQWhDLFVBQWlDLEtBQWMsRUFBRSxLQUFjLEVBQUUsS0FBYyxFQUFFLElBQVk7UUFDekYs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LENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FDVixFQUFFLENBQUMsYUFBYSxDQUNaLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDNUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUM3QixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzlCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUM3QixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUM3QixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUMvQixDQUNKLENBQ0osQ0FBQztZQUVGLFVBQVUsQ0FBQztnQkFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFFTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQTVwQkEsQUE0cEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog57uE5Lu26K6+572uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRIZWxwZXIge1xyXG5cclxuXHJcbiAgICAvL+WvueaWh+acrOi1i+WAvFxyXG4gICAgcHVibGljIHN0YXRpYyBsYWJlbFN0cmluZyhub2RlOiBjYy5Ob2RlLCB0ZXh0OiAoc3RyaW5nIHwgbnVtYmVyKSwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSwgbWF4Q2hhcnM6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmICghIW1heENoYXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gQ29tcG9uZW50SGVscGVyLnN0ckNsYW1wKHRleHQudG9TdHJpbmcoKSwgbWF4Q2hhcnMsICcuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISFsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGV4dCArIFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9yY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbGFiZWxUaW1lRm9ybWF0KG5vZGU6IGNjLk5vZGUsIHRleHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IHN0cmluZyA9IHRoaXMuX3NlY29uZFRvRGF0ZSh0ZXh0KTtcclxuICAgICAgICBDb21wb25lbnRIZWxwZXIubGFiZWxTdHJpbmcobm9kZSwgcmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WIhuWJsueahOaXtumXtOagvOW8jyAwMDowMDowMFxyXG4gICAgcHVibGljIHN0YXRpYyBsYWJlbFRpbWVGb3JtYXRHYXAobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlLCBub2RlMzogY2MuTm9kZSwgdGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGg6IChudW1iZXIgfCBzdHJpbmcpID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgICAgICAgbGV0IG06IChudW1iZXIgfCBzdHJpbmcpID0gTWF0aC5mbG9vcigodGltZSAvIDYwICUgNjApKTtcclxuICAgICAgICBsZXQgczogKG51bWJlciB8IHN0cmluZykgPSBNYXRoLmZsb29yKCh0aW1lICUgNjApKTtcclxuICAgICAgICBoID0gaCA+IDkgPyBoIDogJzAnICsgaDtcclxuICAgICAgICBtID0gbSA+IDkgPyBtIDogJzAnICsgbTtcclxuICAgICAgICBzID0gcyA+IDkgPyBzIDogJzAnICsgcztcclxuICAgICAgICBDb21wb25lbnRIZWxwZXIubGFiZWxTdHJpbmcobm9kZTEsIGgpO1xyXG4gICAgICAgIENvbXBvbmVudEhlbHBlci5sYWJlbFN0cmluZyhub2RlMiwgbSk7XHJcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmxhYmVsU3RyaW5nKG5vZGUzLCBzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLzAwOjAwXHJcbiAgICBwdWJsaWMgc3RhdGljIGxhYmVsVGltZVNzKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0aW1lU3RyID0gdGhpcy5fc2Vjb25kVG9EYXRlMih0aW1lKTtcclxuICAgICAgICBDb21wb25lbnRIZWxwZXIubGFiZWxTdHJpbmcobm9kZSwgdGltZVN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NlY29uZFRvRGF0ZTIocmVzdWx0OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBtOiAoc3RyaW5nIHwgbnVtYmVyKSA9IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKTtcclxuICAgICAgICBsZXQgczogKHN0cmluZyB8IG51bWJlcikgPSBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cclxuICAgICAgICBtID0gbSA+IDkgPyBtIDogJzAnICsgbTtcclxuICAgICAgICBzID0gcyA+IDkgPyBzIDogJzAnICsgcztcclxuICAgICAgICByZXR1cm4gbSArIFwiOlwiICsgcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2Vjb25kVG9EYXRlKHJlc3VsdDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgaDogKHN0cmluZyB8IG51bWJlcikgPSBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApO1xyXG4gICAgICAgIGxldCBtOiAoc3RyaW5nIHwgbnVtYmVyKSA9IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKTtcclxuICAgICAgICBsZXQgczogKHN0cmluZyB8IG51bWJlcikgPSBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG4gICAgICAgIGggPSBoID4gOSA/IGggOiAnMCcgKyBoO1xyXG4gICAgICAgIG0gPSBtID4gOSA/IG0gOiAnMCcgKyBtO1xyXG4gICAgICAgIHMgPSBzID4gOSA/IHMgOiAnMCcgKyBzO1xyXG4gICAgICAgIHJldHVybiBoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFiZWxTdHJpbmcobm9kZTogY2MuTm9kZSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBpZiAoISFsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhYmVsLnN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICAvL2NMSGVpZ2h0IOaYr+WQpuaUueWPmOihjOmrmFxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRMYWJlbFNpemUobm9kZTogY2MuTm9kZSwgc2l6ZTogbnVtYmVyLCBjTEhlaWdodDogbnVtYmVyLCBzcGFjZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBpZiAoISFsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhY0xIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5saW5lSGVpZ2h0ID0gc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghIXNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3BhY2luZ1ggPSBzcGFjZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUxhYmVsKHNpemU6IG51bWJlciwgY29sb3I6IGNjLkNvbG9yLCBjb250ZW50Pzogc3RyaW5nLCBmb250PzogY2MuRm9udCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsZXQgbGFiZWw6IGNjLkxhYmVsID0gbm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGxhYmVsLmZvbnRTaXplID0gc2l6ZTtcclxuICAgICAgICBsYWJlbC5mb250ID0gZm9udDtcclxuICAgICAgICBub2RlLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gY29udGVudDtcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICAvL+iuvue9ruWtl+S9k1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRMYWJlbEZvbnQobm9kZTogY2MuTm9kZSwgZm9udDogY2MuRm9udCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgaWYgKCEhbGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLmZvbnQgPSBmb250O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5a+55a+M5paH5pys6L+b6KGM6LWL5YC8XHJcbiAgICBwdWJsaWMgc3RhdGljIHJpY2hMYWJlbFN0cmluZyhub2RlOiBjYy5Ob2RlLCB0ZXh0OiBzdHJpbmcsIGxpbmVIZWlnaHQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCk7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEhbGluZUhlaWdodCAmJiBsaW5lSGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aLpeaciee6ueeQhuaXtuebtOaOpei1i+WAvFxyXG4gICAgcHVibGljIHN0YXRpYyBzcHJpdGVGcmFtZShub2RlOiBjYy5Ob2RlLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpOiBjYy5TcHJpdGUge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3ByaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNwcml0ZUZyYW1lKG5vZGU6IGNjLk5vZGUpOiBjYy5TcHJpdGVGcmFtZSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzcHJpdGUuc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTcHJpdGUocmVzOiBjYy5TcHJpdGVGcmFtZSwgYW5jaG9yPzogY2MuVmVjMikge1xyXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgaWYgKCEhYW5jaG9yKSB7XHJcbiAgICAgICAgICAgIG5vZGUuYW5jaG9yWCA9IGFuY2hvci54O1xyXG4gICAgICAgICAgICBub2RlLmFuY2hvclkgPSBhbmNob3IueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjbGVhclNwcml0ZUZyYW1lKG5vZGU6IGNjLk5vZGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNwcml0ZUdyYXkobm9kZTogY2MuTm9kZSwgaXNHcmF5OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZTogYW55ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKCFzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISFzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0dyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWwuZ2V0QnVpbHRpbk1hdGVyaWFsKCcyZC1ncmF5LXNwcml0ZScpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbCgnMmQtc3ByaXRlJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6I635b6Xc2Nyb2xsVmlldyDlubbmu5HliqjliLDmjIflrprkvY3nva5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2Nyb2xsVmlld0FuZFNjcm9sbChub2RlOiBjYy5Ob2RlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGNjLlNjcm9sbFZpZXcge1xyXG4gICAgICAgIGxldCBzY3JvbGxWaWV3ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcpIHtcclxuICAgICAgICAgICAgc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgICAgICBzY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KGNjLnYyKHgsIHkpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNjcm9sbFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflvpdzY3JvbGxWaWV3IOW5tua7keWKqOWIsOaMh+WumuS9jee9rlxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTY3JvbGxWaWV3QW5kU2Nyb2xsUGVyY2VudChub2RlOiBjYy5Ob2RlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGNjLlNjcm9sbFZpZXcge1xyXG4gICAgICAgIGxldCBzY3JvbGxWaWV3ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcpIHtcclxuICAgICAgICAgICAgc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgICAgICBzY3JvbGxWaWV3LnNjcm9sbFRvKGNjLnYyKHgsIHkpLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNjcm9sbFZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5ruR5Yqo5Yiw6aG26YOoXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNjcm9sbFZpZXdBbmRTY3JvbGxUb3Aobm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMCk6IGNjLlNjcm9sbFZpZXcge1xyXG4gICAgICAgIGxldCBzY3JvbGxWaWV3ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcpIHtcclxuICAgICAgICAgICAgc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgICAgICBzY3JvbGxWaWV3LnNjcm9sbFRvVG9wKHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2Nyb2xsVmlldztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/mu5HliqjliLDlt6bkvqdcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2Nyb2xsVmlld0FuZFNjcm9sbExlZnQobm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMCk6IGNjLlNjcm9sbFZpZXcge1xyXG4gICAgICAgIGxldCBzY3JvbGxWaWV3ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcpIHtcclxuICAgICAgICAgICAgc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xyXG4gICAgICAgICAgICBzY3JvbGxWaWV3LnNjcm9sbFRvTGVmdCh0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNjcm9sbFZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2Nyb2xsVmlld0VuYWJsZWQobm9kZTogY2MuTm9kZSwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogY2MuU2Nyb2xsVmlldyB7XHJcbiAgICAgICAgbGV0IHNjcm9sbFZpZXcgPSBub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuICAgICAgICBpZiAoISFzY3JvbGxWaWV3KSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2Nyb2xsVmlld1xyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u6YCa55So6LSn5biBICB4eOS4hyDmiJbogIUgeHjkur9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q29tbW9uQ3VycmVueUxhYmVsKG5vZGU6IGNjLk5vZGUsIGNvdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudCgnQ29tbW9uQ3VycmVuY3lMYWJlbCcpO1xyXG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnNldENvbnRlbnQoY291bnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5bCP5pWw54K55pWw5a2XXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERvdExhYmVsKG5vZGU6IGNjLk5vZGUsIHZhbHVlOiBudW1iZXIsIGlzVWludDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudCgnRG90TGFiZWwnKTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcodmFsdWUsIGlzVWludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRMYWJlbENvbG9yKG5vZGU6IGNjLk5vZGUsIGNvbG9yOiBjYy5Db2xvcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRFZGl0b3JTdHJpbmcobm9kZTogY2MuTm9kZSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IGVkaXRib3ggPSBub2RlLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICAgICAgaWYgKCEhZWRpdGJveCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRib3guc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEVkaXRvclN0cmluZyhub2RlOiBjYy5Ob2RlLCBzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBlZGl0Ym94ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgICAgIGlmICghIWVkaXRib3gpIHtcclxuICAgICAgICAgICAgICAgIGVkaXRib3guc3RyaW5nID0gc3RyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u5paH5a2X5o+P6L65XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldExhYmVsT3V0KG5vZGU6IGNjLk5vZGUsIGNvbG9yOiBjYy5Db2xvciwgd2lkdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbE91dCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XHJcbiAgICAgICAgICAgIGxhYmVsT3V0LmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIGxhYmVsT3V0LndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v56e76Zmk5o+P6L65XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUxpbmVPdXQobm9kZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbE91dCA9IG5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6I635b6X6L6T5YWl5qGG55qE5YaF5a65XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEVkaXRCb3hTdHJpbmcobm9kZSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IGVkaXRCb3ggPSBub2RlLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICAgICAgaWYgKGVkaXRCb3guc3RyaW5nICE9IGVkaXRCb3gucGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0Qm94LnN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0ckNsYW1wKHN0cjogc3RyaW5nLCBtYXhDaGFyczogbnVtYmVyLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHN0ciA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG9Db2RlUG9pbnQgPSBmdW5jdGlvbiAodW5pY29kZVN1cnJvZ2F0ZXMpIHtcclxuICAgICAgICAgICAgbGV0IHIgPSBbXSwgYyA9IDAsIHAgPSAwLCBpID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCB1bmljb2RlU3Vycm9nYXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBpO1xyXG4gICAgICAgICAgICAgICAgYyA9IHVuaWNvZGVTdXJyb2dhdGVzLmNoYXJDb2RlQXQoaSsrKTsvL+i/lOWbnuS9jee9rueahOWtl+espueahCBVbmljb2RlIOe8lueggSBcclxuICAgICAgICAgICAgICAgIGlmIChjID09IDB4ZmUwZikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAoMHgxMDAwMCArICgocCAtIDB4RDgwMCkgPDwgMTApICsgKGMgLSAweERDMDApKTtcclxuICAgICAgICAgICAgICAgICAgICByLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2OiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7IC8v6K6h566XNOWtl+iKgueahHVuaWNvZGVcclxuICAgICAgICAgICAgICAgICAgICBwID0gMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMHhEODAwIDw9IGMgJiYgYyA8PSAweERCRkYpIHtcclxuICAgICAgICAgICAgICAgICAgICBwID0gYzsgLy/lpoLmnpx1bmljb2Rl57yW56CB5Zyob3hEODAwLTB4REJmZuS5i+mXtO+8jOWImemcgOimgeS4juWQjuS4gOS4quWtl+espuaUvuWcqOS4gOi1t1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2OiBjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAvL+WmguaenOaYrzLlrZfoioLvvIznm7TmjqXlsIbnoIHngrnovazkuLrlr7nlupTnmoTljYHlha3ov5vliLblvaLlvI9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1ZmZpeCA9IHN1ZmZpeCA9PT0gbnVsbCA/ICcuLi4nIDogc3VmZml4O1xyXG4gICAgICAgIG1heENoYXJzICo9IDI7XHJcblxyXG4gICAgICAgIGxldCBjb2RlQXJyID0gdG9Db2RlUG9pbnQoc3RyKTtcclxuICAgICAgICBsZXQgbnVtQ2hhciA9IDA7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGVBcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNvZGUgPSBjb2RlQXJyW2ldLnY7XHJcbiAgICAgICAgICAgIGxldCBhZGQgPSAxO1xyXG4gICAgICAgICAgICBpZiAoY29kZSA+PSAxMjgpIHtcclxuICAgICAgICAgICAgICAgIGFkZCA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5aaC5p6c6LaF6L+H5LqG6ZmQ5Yi277yM5YiZ5oyJ5LiK5LiA5Liq5Li65YeGXHJcbiAgICAgICAgICAgIGlmIChudW1DaGFyICsgYWRkID4gbWF4Q2hhcnMpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgIC8v57Sv5YqgXHJcbiAgICAgICAgICAgIG51bUNoYXIgKz0gYWRkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29kZUFyci5sZW5ndGggLSAxID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtb3JlID0gc3VmZml4ID8gMSA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgY29kZUFycltpbmRleCAtIG1vcmVdLnBvcyArIDEpICsgc3VmZml4O1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635b6XY2hlY2tib3jnmoTpgInmi6nnirbmgIFcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VG9nZ2xlKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBsZXQgdG9nZ2xlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcclxuICAgICAgICAgICAgaWYgKCEhdG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9nZ2xlLmlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRUb2dnbGVMaXN0ZW5lcihub2RlLCBmdW5jLCBob3N0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbm9kZS5vbigndG9nZ2xlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZ1bmMgJiYgZnVuYy5jYWxsKGhvc3QsIGUuaXNDaGVja2VkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRCdXR0b25JbnRlcmFjdGFibGUobm9kZTogY2MuTm9kZSwgc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmICghIWJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmludGVyYWN0YWJsZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEJ1dHRvbkludGVyYWN0YWJlbChub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgICAgIGlmICghIWJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbi5pbnRlcmFjdGFibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhZGRDbGlja0V2ZW50KG5vZGUsIHRhcmdldCwgY29tcG9uZW50LCBoYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZXZlbnRIYW5kbGVyLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICBldmVudEhhbmRsZXIuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIGV2ZW50SGFuZGxlci5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB2YXIgY2xpY2tFdmVudHMgPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xpY2tFdmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNsaWNrRXZlbnRzW2ldICYmIGNsaWNrRXZlbnRzW2ldLmhhbmRsZXIgPT0gZXZlbnRIYW5kbGVyLmhhbmRsZXIgJiYgY2xpY2tFdmVudHNbaV0uY29tcG9uZW50ID09IGV2ZW50SGFuZGxlci5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGlja0V2ZW50cy5wdXNoKGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy/orr7nva7ov5vluqZcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UHJvZ3Jlc3NCYXIobm9kZTogY2MuTm9kZSwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBiYXIgPSBub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgICAgIGlmICghIWJhcikge1xyXG4gICAgICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTcGluZVN0b3Aobm9kZTogY2MuTm9kZSwgaXNTdG9wOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IHNwaW5lID0gbm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICBpZiAoISFzcGluZSkge1xyXG4gICAgICAgICAgICAgICAgc3BpbmUucGF1c2VkID0gaXNTdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+iuvue9rnNwaW5l55qu6IKkXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFNwaW5lU2tpbihub2RlOiBjYy5Ob2RlLCBza2luOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBsZXQgc3BpbmUgPSBub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgICAgIGlmICghIXNwaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBzcGluZS5zZXRTa2luKHNraW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572uc3BpbmXliqjnlLtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U3BpbmVBbmltYXRlKG5vZGU6IGNjLk5vZGUsIGFuaW1hdGlvbjogc3RyaW5nLCBpc0xvb3A6IGJvb2xlYW4sIGZ1bmM6IChhcmc6IGFueSkgPT4gdm9pZCwgaG9zdDogYW55LCBhcmc6IGFueSkge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBzcGluZSA9IG5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgaWYgKCEhc3BpbmUpIHtcclxuICAgICAgICAgICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBhbmltYXRpb24sIGlzTG9vcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEhZnVuYykge1xyXG4gICAgICAgICAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmNhbGwoaG9zdCwgYXJnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/pl6rng4FBY3Rpb24gXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEZsaWNrZXJBY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCflvIDlp4vpl6rng4HkuoYrKysrKysrKysrKysrKycpO1xyXG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLmJsaW5rKHRpbWUsIGNvdW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vaGVhcnRBY3Rpb24g5b+D6LezXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEhlYXJ0QWN0aW9uKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IDAuNSwgaXNTdGFydEJpZzogYm9vbGVhbiA9IGZhbHNlLCBiaWdTY2FsZTogbnVtYmVyID0gMS4yLCBzbWFsbFNjYWxlOiBudW1iZXIgPSAwLjksIHNwZWNpYWw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgbGV0IGRlbGF5QWN0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aW1lIC0gMC4yO1xyXG4gICAgICAgICAgICAgICAgZGVsYXlBY3Rpb24gPSBjYy5kZWxheVRpbWUoMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBjYy5zY2FsZVRvKHRpbWUsIGJpZ1NjYWxlLCBiaWdTY2FsZSk7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVNtYWxsQWN0aW9uID0gY2Muc2NhbGVUbyh0aW1lLCBzbWFsbFNjYWxlLCBzbWFsbFNjYWxlKTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2UoZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uLCBkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbikgOiBjYy5zZXF1ZW5jZShkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gaXNTdGFydEJpZyA/IGNjLnNlcXVlbmNlKHNjYWxlQmlnQWN0aW9uLCBzY2FsZVNtYWxsQWN0aW9uKSA6IGNjLnNlcXVlbmNlKHNjYWxlU21hbGxBY3Rpb24sIHNjYWxlQmlnQWN0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoYWN0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy9oZWFydEFjdGlvbiDnn63ml7bpl7Tlv4Pot7NcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SGVhcnRBY3Rpb25CeVRpbWUobm9kZTogY2MuTm9kZSwgbnVtID0gNSwgY2FsbEJhY2sgPSBudWxsLCB0aW1lOiBudW1iZXIgPSAwLjUsIGlzU3RhcnRCaWc6IGJvb2xlYW4gPSBmYWxzZSwgYmlnU2NhbGU6IG51bWJlciA9IDEuMiwgc21hbGxTY2FsZTogbnVtYmVyID0gMC45LCBzcGVjaWFsOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgbGV0IGRlbGF5QWN0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aW1lIC0gMC4yO1xyXG4gICAgICAgICAgICAgICAgZGVsYXlBY3Rpb24gPSBjYy5kZWxheVRpbWUoMC4yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnROdW0gPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNjYWxlQmlnQWN0aW9uID0gY2Muc2NhbGVUbyh0aW1lLCBiaWdTY2FsZSwgYmlnU2NhbGUpO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVTbWFsbEFjdGlvbiA9IGNjLnNjYWxlVG8odGltZSwgc21hbGxTY2FsZSwgc21hbGxTY2FsZSk7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZUZ1biA9IGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnROdW0rKztcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsQmFjayAmJiBjdXJyZW50TnVtID49IG51bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbGxCYWNrKWNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IGlzU3RhcnRCaWcgPyBjYy5zZXF1ZW5jZShkZWxheUFjdGlvbiwgc2NhbGVCaWdBY3Rpb24sIGRlbGF5QWN0aW9uLCBzY2FsZVNtYWxsQWN0aW9uLCBzY2FsZUZ1bikgOiBjYy5zZXF1ZW5jZShkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uLCBzY2FsZUZ1bilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IGlzU3RhcnRCaWcgPyBjYy5zZXF1ZW5jZShzY2FsZUJpZ0FjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVGdW4pIDogY2Muc2VxdWVuY2Uoc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVCaWdBY3Rpb24sIHNjYWxlRnVuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdChhY3Rpb24sIG51bSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S4iuS4i+a1ruWKqFxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRVcERvd25BY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC41LCB5OiBudW1iZXIgPSAyMCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKG5vZGUueCwgbm9kZS55KVxyXG4gICAgICAgICAgICBsZXQgbW92ZVVwID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSArIHkpKTtcclxuICAgICAgICAgICAgbGV0IG1vdmVEb3duID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSkpO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UobW92ZVVwLCBtb3ZlRG93bik7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoYWN0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TFJBY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC41LCB4OiBudW1iZXIgPSAyMCkge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKG5vZGUueCwgbm9kZS55KVxyXG4gICAgICAgICAgICBsZXQgbW92ZVVwID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54ICsgeCwgcG9zLnkpKTtcclxuICAgICAgICAgICAgbGV0IG1vdmVEb3duID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSkpO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UobW92ZVVwLCBtb3ZlRG93bik7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoYWN0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRSb3RhdGlvbihub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIgPSAwLjUsIHg6IG51bWJlciA9IDIwKSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpXHJcbiAgICAgICAgICAgIGxldCBtb3ZlVXAgPSBjYy5yb3RhdGVUbyh0aW1lLCAxMCk7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlRG93biA9IGNjLnJvdGF0ZVRvKHRpbWUsIC0xMCk7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShtb3ZlVXAsIG1vdmVEb3duKTtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhY3Rpb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTY2FsZUd1b0Rvbmcobm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC4xLCBpc1N0YXJ0QmlnOiBib29sZWFuID0gdHJ1ZSwgYmlnU2NhbGU6IG51bWJlciA9IDEuMywgc21hbGxTY2FsZTogbnVtYmVyID0gMS4wKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBjYy5zY2FsZVRvKHRpbWUsIGJpZ1NjYWxlLCBiaWdTY2FsZSk7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVNtYWxsQWN0aW9uID0gY2Muc2NhbGVUbyh0aW1lLCBzbWFsbFNjYWxlLCBzbWFsbFNjYWxlKTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGlzU3RhcnRCaWcgPyBjYy5zZXF1ZW5jZShzY2FsZUJpZ0FjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbikgOiBjYy5zZXF1ZW5jZShzY2FsZVNtYWxsQWN0aW9uLCBzY2FsZUJpZ0FjdGlvbilcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRKdW1wQWN0aW9tKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IDAuMywgeTogbnVtYmVyID0gMjApOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xyXG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mihub2RlLngsIG5vZGUueSlcclxuICAgICAgICAgICAgbGV0IG1vdmVVcCA9IGNjLm1vdmVUbyh0aW1lLCBjYy52Mihwb3MueCwgcG9zLnkgKyB5KSk7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlRG93biA9IGNjLm1vdmVUbyh0aW1lLCBjYy52Mihwb3MueCwgcG9zLnkpKTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKG1vdmVVcCwgbW92ZURvd24pO1xyXG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFJlSnVtcEFjdGlvbShub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIgPSAwLjMsIHk6IG51bWJlciA9IDEwKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpXHJcbiAgICAgICAgICAgIGxldCBtb3ZlVXAgPSBjYy5tb3ZlVG8odGltZSwgY2MudjIocG9zLngsIHBvcy55ICsgeSkpO1xyXG4gICAgICAgICAgICBsZXQgbW92ZURvd24gPSBjYy5tb3ZlVG8odGltZSwgY2MudjIocG9zLngsIHBvcy55IC0geSkpO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UobW92ZVVwLCBtb3ZlRG93bik7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoYWN0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5p+Q5Liq5pa55ZCR5b6q546v56e75YqoXHJcbiAgICAvL2Rpc3RhbmNl5b6q546v56e75Yqo55qE6Led56a7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEZvckV2ZXJNb3ZlQWN0aW9uKG5vZGU6IGNjLk5vZGUsIGRpc3RhbmNlOiBudW1iZXIgPSA1LCB0aW1lOiBudW1iZXIgPSAwLjUsIGlzU3RhcnRCaWc6IGJvb2xlYW4gPSBmYWxzZSwgYXhpczogc3RyaW5nID0gJ3gnLCBpc0Vhc2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlQmlnQWN0aW9uID0gYXhpcyA9PT0gJ3gnID8gY2MubW92ZVRvKHRpbWUsIHBvcy54ICsgZGlzdGFuY2UsIHBvcy55KSA6IGNjLm1vdmVUbyh0aW1lLCBwb3MueCwgcG9zLnkgKyBkaXN0YW5jZSk7XHJcbiAgICAgICAgICAgIGlmIChpc0Vhc2UpIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlQmlnQWN0aW9uID0gc2NhbGVCaWdBY3Rpb24uZWFzaW5nKGNjLmVhc2VPdXQoMS41KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNjYWxlU21hbGxBY3Rpb24gPSBjYy5tb3ZlVG8odGltZSwgcG9zLngsIHBvcy55KVxyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gaXNTdGFydEJpZyA/IGNjLnNlcXVlbmNlKHNjYWxlQmlnQWN0aW9uLCBzY2FsZVNtYWxsQWN0aW9uKSA6IGNjLnNlcXVlbmNlKHNjYWxlU21hbGxBY3Rpb24sIHNjYWxlQmlnQWN0aW9uKVxyXG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGFjdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+W+queOr+enu+WKqCDmkq3mlL7mjIflrprml7bpl7RcclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TG9vcEFjdGlvbihub2RlOiBjYy5Ob2RlLCBjYWxsQmFjazogKCkgPT4gdm9pZCwgYXhpczogc3RyaW5nID0gJ3knLCBkaXN0YW5jZTogbnVtYmVyID0gNSwgYWN0aW9uVGltZTogbnVtYmVyID0gMC41LCBkdXJhdGlvbjogbnVtYmVyID0gMywgaXNTdGFydEJpZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gbm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBheGlzID09PSAneCcgPyBjYy5tb3ZlVG8oYWN0aW9uVGltZSwgcG9zLnggKyBkaXN0YW5jZSwgcG9zLnkpIDogY2MubW92ZVRvKGFjdGlvblRpbWUsIHBvcy54LCBwb3MueSArIGRpc3RhbmNlKTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlU21hbGxBY3Rpb24gPSBjYy5tb3ZlVG8oYWN0aW9uVGltZSwgcG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGlzU3RhcnRCaWcgPyBjYy5zZXF1ZW5jZShzY2FsZUJpZ0FjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbikgOiBjYy5zZXF1ZW5jZShzY2FsZVNtYWxsQWN0aW9uLCBzY2FsZUJpZ0FjdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGR1cmF0aW9uIC8gKGFjdGlvblRpbWUgKiAyKTtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MucmVwZWF0KGFjdGlvbiwgY291bnQpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjaygpO1xyXG4gICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+e8qeaUvuaYvuekuuWbnuW8uVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRTY2FsZUJvdW5jZShub2RlOiBjYy5Ob2RlLCBjYWxsQmFjazogKCkgPT4gdm9pZCwgZHVyYXRpb246IG51bWJlciA9IDAuMSwgYmR1cmF0aW9uOiBudW1iZXIgPSAwLjYsIGJSYWRpbzogbnVtYmVyID0gMS44KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgbGV0IGJBY3Rpb24gPSBjYy5zY2FsZVRvKGR1cmF0aW9uLCBiUmFkaW8sIGJSYWRpbyk7XHJcbiAgICAgICAgICAgIGxldCBzQWN0aW9uID0gY2Muc2NhbGVUbyhiZHVyYXRpb24sIDEsIDEpLmVhc2luZyhjYy5lYXNlQm91bmNlT3V0KCkpO1xyXG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShiQWN0aW9uLCBjYy5kZWxheVRpbWUoMC4xKSwgc0FjdGlvbiwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soKTtcclxuICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7kuIvnoLjmlYjmnpxcclxuICAgICAqIEBwYXJhbSBub2RlIOiKgueCuVxyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIOaMgee7reaXtumXtFxyXG4gICAgICogQHBhcmFtIGJpZ1NjYWxlIOi1t+Wni+acgOWkp+WAvFxyXG4gICAgICogQHBhcmFtIHNtYWxsU2NhbGUg57yp5pS+5Yiw5pyA5bCP5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0RG93bkFjdGlvbihub2RlOiBjYy5Ob2RlLCBkdXJhdGlvbjogbnVtYmVyID0gMC4yLCBiaWdTY2FsZTogbnVtYmVyID0gMywgc21hbGxTY2FsZTogbnVtYmVyID0gMSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGVYID0gbm9kZS5zY2FsZVkgPSBiaWdTY2FsZTtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbyhkdXJhdGlvbiwgc21hbGxTY2FsZSwgc21hbGxTY2FsZSkuZWFzaW5nKGNjLmVhc2VCb3VuY2VJbk91dCgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vVE9ETyDlkI7mnJ/kv67mlLnmiJDpnIfliqjnsbtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2hha2VFZmZlY3Qobm9kZTogY2MuTm9kZSwgZHVyYXRpb246IG51bWJlciA9IDAuNik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoNSwgNykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoLTYsIDcpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDIsIGNjLnYyKC0xMywgMykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoMywgLTYpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDIsIGNjLnYyKC01LCA1KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigyLCAtOCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoLTgsIC0xMCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoMywgMTApKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDIsIGNjLnYyKDAsIDApKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgfSwgZHVyYXRpb24gKiAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il19
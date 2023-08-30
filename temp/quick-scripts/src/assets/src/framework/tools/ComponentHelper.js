"use strict";
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
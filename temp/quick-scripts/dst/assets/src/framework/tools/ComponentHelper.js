
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL0NvbXBvbmVudEhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0g7SUFBQTtJQWtwQkEsQ0FBQztJQS9vQkcsT0FBTztJQUNPLDJCQUFXLEdBQXpCLFVBQTBCLElBQWEsRUFBRSxJQUF1QixFQUFFLEtBQXNCLEVBQUUsUUFBdUI7UUFBL0Msc0JBQUEsRUFBQSxhQUFzQjtRQUFFLHlCQUFBLEVBQUEsZUFBdUI7UUFDN0csSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDWixJQUFJLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JFO1lBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUNULEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QzthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRWEsK0JBQWUsR0FBN0IsVUFBOEIsSUFBYSxFQUFFLElBQVk7UUFDckQsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0JBQWtCO0lBQ0osa0NBQWtCLEdBQWhDLFVBQWlDLEtBQWMsRUFBRSxLQUFjLEVBQUUsS0FBYyxFQUFFLElBQVk7UUFDekYs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LEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQy9CLENBQ0osQ0FDSixDQUFDO1lBRUYsVUFBVSxDQUFDO2dCQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUVMLENBQUM7SUFDTCxzQkFBQztBQUFELENBbHBCQSxBQWtwQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog57uE5Lu26K6+572uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudEhlbHBlciB7XG5cblxuICAgIC8v5a+55paH5pys6LWL5YC8XG4gICAgcHVibGljIHN0YXRpYyBsYWJlbFN0cmluZyhub2RlOiBjYy5Ob2RlLCB0ZXh0OiAoc3RyaW5nIHwgbnVtYmVyKSwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSwgbWF4Q2hhcnM6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICghIW1heENoYXJzKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IENvbXBvbmVudEhlbHBlci5zdHJDbGFtcCh0ZXh0LnRvU3RyaW5nKCksIG1heENoYXJzLCAnLi4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFsYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRleHQgKyBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChmb3JjZSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbGFiZWxUaW1lRm9ybWF0KG5vZGU6IGNjLk5vZGUsIHRleHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgcmVzdWx0OiBzdHJpbmcgPSB0aGlzLl9zZWNvbmRUb0RhdGUodGV4dCk7XG4gICAgICAgIENvbXBvbmVudEhlbHBlci5sYWJlbFN0cmluZyhub2RlLCByZXN1bHQpO1xuICAgIH1cblxuICAgIC8v5YiG5Ymy55qE5pe26Ze05qC85byPIDAwOjAwOjAwXG4gICAgcHVibGljIHN0YXRpYyBsYWJlbFRpbWVGb3JtYXRHYXAobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlLCBub2RlMzogY2MuTm9kZSwgdGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBoOiAobnVtYmVyIHwgc3RyaW5nKSA9IE1hdGguZmxvb3IodGltZSAvIDM2MDApO1xuICAgICAgICBsZXQgbTogKG51bWJlciB8IHN0cmluZykgPSBNYXRoLmZsb29yKCh0aW1lIC8gNjAgJSA2MCkpO1xuICAgICAgICBsZXQgczogKG51bWJlciB8IHN0cmluZykgPSBNYXRoLmZsb29yKCh0aW1lICUgNjApKTtcbiAgICAgICAgaCA9IGggPiA5ID8gaCA6ICcwJyArIGg7XG4gICAgICAgIG0gPSBtID4gOSA/IG0gOiAnMCcgKyBtO1xuICAgICAgICBzID0gcyA+IDkgPyBzIDogJzAnICsgcztcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmxhYmVsU3RyaW5nKG5vZGUxLCBoKTtcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmxhYmVsU3RyaW5nKG5vZGUyLCBtKTtcbiAgICAgICAgQ29tcG9uZW50SGVscGVyLmxhYmVsU3RyaW5nKG5vZGUzLCBzKTtcbiAgICB9XG5cbiAgICAvLzAwOjAwXG4gICAgcHVibGljIHN0YXRpYyBsYWJlbFRpbWVTcyhub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRpbWVTdHIgPSB0aGlzLl9zZWNvbmRUb0RhdGUyKHRpbWUpO1xuICAgICAgICBDb21wb25lbnRIZWxwZXIubGFiZWxTdHJpbmcobm9kZSwgdGltZVN0cik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NlY29uZFRvRGF0ZTIocmVzdWx0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbTogKHN0cmluZyB8IG51bWJlcikgPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSk7XG4gICAgICAgIGxldCBzOiAoc3RyaW5nIHwgbnVtYmVyKSA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSk7XG5cbiAgICAgICAgbSA9IG0gPiA5ID8gbSA6ICcwJyArIG07XG4gICAgICAgIHMgPSBzID4gOSA/IHMgOiAnMCcgKyBzO1xuICAgICAgICByZXR1cm4gbSArIFwiOlwiICsgcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfc2Vjb25kVG9EYXRlKHJlc3VsdDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGg6IChzdHJpbmcgfCBudW1iZXIpID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKTtcbiAgICAgICAgbGV0IG06IChzdHJpbmcgfCBudW1iZXIpID0gTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpO1xuICAgICAgICBsZXQgczogKHN0cmluZyB8IG51bWJlcikgPSBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xuICAgICAgICBoID0gaCA+IDkgPyBoIDogJzAnICsgaDtcbiAgICAgICAgbSA9IG0gPiA5ID8gbSA6ICcwJyArIG07XG4gICAgICAgIHMgPSBzID4gOSA/IHMgOiAnMCcgKyBzO1xuICAgICAgICByZXR1cm4gaCArIFwiOlwiICsgbSArIFwiOlwiICsgcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldExhYmVsU3RyaW5nKG5vZGU6IGNjLk5vZGUpOiBzdHJpbmcge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKCEhbGFiZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGFiZWwuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgLy9jTEhlaWdodCDmmK/lkKbmlLnlj5jooYzpq5hcbiAgICBwdWJsaWMgc3RhdGljIHNldExhYmVsU2l6ZShub2RlOiBjYy5Ob2RlLCBzaXplOiBudW1iZXIsIGNMSGVpZ2h0OiBudW1iZXIsIHNwYWNlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICghIWxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSBzaXplO1xuICAgICAgICAgICAgICAgIGlmICghIWNMSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSBzaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoISFzcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zcGFjaW5nWCA9IHNwYWNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlTGFiZWwoc2l6ZTogbnVtYmVyLCBjb2xvcjogY2MuQ29sb3IsIGNvbnRlbnQ/OiBzdHJpbmcsIGZvbnQ/OiBjYy5Gb250KTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgbGV0IGxhYmVsOiBjYy5MYWJlbCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwuZm9udFNpemUgPSBzaXplO1xuICAgICAgICBsYWJlbC5mb250ID0gZm9udDtcbiAgICAgICAgbm9kZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICBsYWJlbC5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvL+iuvue9ruWtl+S9k1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0TGFiZWxGb250KG5vZGU6IGNjLk5vZGUsIGZvbnQ6IGNjLkZvbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICghIWxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuZm9udCA9IGZvbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WvueWvjOaWh+acrOi/m+ihjOi1i+WAvFxuICAgIHB1YmxpYyBzdGF0aWMgcmljaExhYmVsU3RyaW5nKG5vZGU6IGNjLk5vZGUsIHRleHQ6IHN0cmluZywgbGluZUhlaWdodD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEhbGluZUhlaWdodCAmJiBsaW5lSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5oul5pyJ57q555CG5pe255u05o6l6LWL5YC8XG4gICAgcHVibGljIHN0YXRpYyBzcHJpdGVGcmFtZShub2RlOiBjYy5Ob2RlLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpOiBjYy5TcHJpdGUge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3ByaXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U3ByaXRlRnJhbWUobm9kZTogY2MuTm9kZSk6IGNjLlNwcml0ZUZyYW1lIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcHJpdGUuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVTcHJpdGUocmVzOiBjYy5TcHJpdGVGcmFtZSwgYW5jaG9yPzogY2MuVmVjMikge1xuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSByZXM7XG4gICAgICAgIGlmICghIWFuY2hvcikge1xuICAgICAgICAgICAgbm9kZS5hbmNob3JYID0gYW5jaG9yLng7XG4gICAgICAgICAgICBub2RlLmFuY2hvclkgPSBhbmNob3IueTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyU3ByaXRlRnJhbWUobm9kZTogY2MuTm9kZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3ByaXRlR3JheShub2RlOiBjYy5Ob2RlLCBpc0dyYXk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBzcHJpdGU6IGFueSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoIXNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghIXNwcml0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0dyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbCgnMmQtZ3JheS1zcHJpdGUnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldE1hdGVyaWFsKDAsIGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbCgnMmQtc3ByaXRlJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6I635b6Xc2Nyb2xsVmlldyDlubbmu5HliqjliLDmjIflrprkvY3nva5cbiAgICBwdWJsaWMgc3RhdGljIGdldFNjcm9sbFZpZXdBbmRTY3JvbGwobm9kZTogY2MuTm9kZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBjYy5TY3JvbGxWaWV3IHtcbiAgICAgICAgbGV0IHNjcm9sbFZpZXcgPSBub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKTtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoeCwgeSksIDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY3JvbGxWaWV3O1xuICAgIH1cblxuICAgIC8v6I635b6Xc2Nyb2xsVmlldyDlubbmu5HliqjliLDmjIflrprkvY3nva5cbiAgICBwdWJsaWMgc3RhdGljIGdldFNjcm9sbFZpZXdBbmRTY3JvbGxQZXJjZW50KG5vZGU6IGNjLk5vZGUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogY2MuU2Nyb2xsVmlldyB7XG4gICAgICAgIGxldCBzY3JvbGxWaWV3ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgICAgIGlmIChzY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICBzY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XG4gICAgICAgICAgICBzY3JvbGxWaWV3LnNjcm9sbFRvKGNjLnYyKHgsIHkpLCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2Nyb2xsVmlldztcbiAgICB9XG5cblxuICAgIC8v5ruR5Yqo5Yiw6aG26YOoXG4gICAgcHVibGljIHN0YXRpYyBnZXRTY3JvbGxWaWV3QW5kU2Nyb2xsVG9wKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IDApOiBjYy5TY3JvbGxWaWV3IHtcbiAgICAgICAgbGV0IHNjcm9sbFZpZXcgPSBub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKTtcbiAgICAgICAgICAgIHNjcm9sbFZpZXcuc2Nyb2xsVG9Ub3AodGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjcm9sbFZpZXc7XG4gICAgfVxuXG5cbiAgICAvL+a7keWKqOWIsOW3puS+p1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2Nyb2xsVmlld0FuZFNjcm9sbExlZnQobm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMCk6IGNjLlNjcm9sbFZpZXcge1xuICAgICAgICBsZXQgc2Nyb2xsVmlldyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgICAgICBpZiAoc2Nyb2xsVmlldykge1xuICAgICAgICAgICAgc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpO1xuICAgICAgICAgICAgc2Nyb2xsVmlldy5zY3JvbGxUb0xlZnQodGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjcm9sbFZpZXc7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFNjcm9sbFZpZXdFbmFibGVkKG5vZGU6IGNjLk5vZGUsIHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IGNjLlNjcm9sbFZpZXcge1xuICAgICAgICBsZXQgc2Nyb2xsVmlldyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgICAgICBpZiAoISFzY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICBzY3JvbGxWaWV3LmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2Nyb2xsVmlld1xuICAgIH1cblxuICAgIC8v6K6+572u6YCa55So6LSn5biBICB4eOS4hyDmiJbogIUgeHjkur9cbiAgICBwdWJsaWMgc3RhdGljIHNldENvbW1vbkN1cnJlbnlMYWJlbChub2RlOiBjYy5Ob2RlLCBjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudCgnQ29tbW9uQ3VycmVuY3lMYWJlbCcpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc2V0Q29udGVudChjb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+Wwj+aVsOeCueaVsOWtl1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0RG90TGFiZWwobm9kZTogY2MuTm9kZSwgdmFsdWU6IG51bWJlciwgaXNVaW50OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbm9kZS5nZXRDb21wb25lbnQoJ0RvdExhYmVsJyk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcodmFsdWUsIGlzVWludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldExhYmVsQ29sb3Iobm9kZTogY2MuTm9kZSwgY29sb3I6IGNjLkNvbG9yKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLmNvbG9yID0gY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEVkaXRvclN0cmluZyhub2RlOiBjYy5Ob2RlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBlZGl0Ym94ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgICAgICBpZiAoISFlZGl0Ym94KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRib3guc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldEVkaXRvclN0cmluZyhub2RlOiBjYy5Ob2RlLCBzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGVkaXRib3ggPSBub2RlLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcbiAgICAgICAgICAgIGlmICghIWVkaXRib3gpIHtcbiAgICAgICAgICAgICAgICBlZGl0Ym94LnN0cmluZyA9IHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6K6+572u5paH5a2X5o+P6L65XG4gICAgcHVibGljIHN0YXRpYyBzZXRMYWJlbE91dChub2RlOiBjYy5Ob2RlLCBjb2xvcjogY2MuQ29sb3IsIHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbE91dCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgICAgICBsYWJlbE91dC5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgbGFiZWxPdXQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v56e76Zmk5o+P6L65XG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVMaW5lT3V0KG5vZGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbE91dCA9IG5vZGUucmVtb3ZlQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+iOt+W+l+i+k+WFpeahhueahOWGheWuuVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RWRpdEJveFN0cmluZyhub2RlKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBlZGl0Qm94ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgICAgICBpZiAoZWRpdEJveC5zdHJpbmcgIT0gZWRpdEJveC5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlZGl0Qm94LnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0ckNsYW1wKHN0cjogc3RyaW5nLCBtYXhDaGFyczogbnVtYmVyLCBzdWZmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzdHIgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvQ29kZVBvaW50ID0gZnVuY3Rpb24gKHVuaWNvZGVTdXJyb2dhdGVzKSB7XG4gICAgICAgICAgICBsZXQgciA9IFtdLCBjID0gMCwgcCA9IDAsIGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB1bmljb2RlU3Vycm9nYXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gaTtcbiAgICAgICAgICAgICAgICBjID0gdW5pY29kZVN1cnJvZ2F0ZXMuY2hhckNvZGVBdChpKyspOy8v6L+U5Zue5L2N572u55qE5a2X56ym55qEIFVuaWNvZGUg57yW56CBIFxuICAgICAgICAgICAgICAgIGlmIChjID09IDB4ZmUwZikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gKDB4MTAwMDAgKyAoKHAgLSAweEQ4MDApIDw8IDEwKSArIChjIC0gMHhEQzAwKSk7XG4gICAgICAgICAgICAgICAgICAgIHIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgICAgICAgICAgICB9KTsgLy/orqHnrpc05a2X6IqC55qEdW5pY29kZVxuICAgICAgICAgICAgICAgICAgICBwID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDB4RDgwMCA8PSBjICYmIGMgPD0gMHhEQkZGKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBjOyAvL+WmguaenHVuaWNvZGXnvJbnoIHlnKhveEQ4MDAtMHhEQmZm5LmL6Ze077yM5YiZ6ZyA6KaB5LiO5ZCO5LiA5Liq5a2X56ym5pS+5Zyo5LiA6LW3XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHY6IGMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICB9KTsgLy/lpoLmnpzmmK8y5a2X6IqC77yM55u05o6l5bCG56CB54K56L2s5Li65a+55bqU55qE5Y2B5YWt6L+b5Yi25b2i5byPXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cblxuICAgICAgICBzdWZmaXggPSBzdWZmaXggPT09IG51bGwgPyAnLi4uJyA6IHN1ZmZpeDtcbiAgICAgICAgbWF4Q2hhcnMgKj0gMjtcblxuICAgICAgICBsZXQgY29kZUFyciA9IHRvQ29kZVBvaW50KHN0cik7XG4gICAgICAgIGxldCBudW1DaGFyID0gMDtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlQXJyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgY29kZSA9IGNvZGVBcnJbaV0udjtcbiAgICAgICAgICAgIGxldCBhZGQgPSAxO1xuICAgICAgICAgICAgaWYgKGNvZGUgPj0gMTI4KSB7XG4gICAgICAgICAgICAgICAgYWRkID0gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/lpoLmnpzotoXov4fkuobpmZDliLbvvIzliJnmjInkuIrkuIDkuKrkuLrlh4ZcbiAgICAgICAgICAgIGlmIChudW1DaGFyICsgYWRkID4gbWF4Q2hhcnMpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgLy/ntK/liqBcbiAgICAgICAgICAgIG51bUNoYXIgKz0gYWRkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlQXJyLmxlbmd0aCAtIDEgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vcmUgPSBzdWZmaXggPyAxIDogMDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgY29kZUFycltpbmRleCAtIG1vcmVdLnBvcyArIDEpICsgc3VmZml4O1xuICAgIH1cblxuICAgIC8v6I635b6XY2hlY2tib3jnmoTpgInmi6nnirbmgIFcbiAgICBwdWJsaWMgc3RhdGljIGdldFRvZ2dsZShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgdG9nZ2xlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgICAgIGlmICghIXRvZ2dsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2dnbGUuaXNDaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFRvZ2dsZUxpc3RlbmVyKG5vZGUsIGZ1bmMsIGhvc3QpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGUub24oJ3RvZ2dsZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuYyAmJiBmdW5jLmNhbGwoaG9zdCwgZS5pc0NoZWNrZWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0QnV0dG9uSW50ZXJhY3RhYmxlKG5vZGU6IGNjLk5vZGUsIHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpZiAoISFidXR0b24pIHtcbiAgICAgICAgICAgICAgICBidXR0b24uaW50ZXJhY3RhYmxlID0gc3RhdHVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRCdXR0b25JbnRlcmFjdGFiZWwobm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpZiAoISFidXR0b24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uLmludGVyYWN0YWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFkZENsaWNrRXZlbnQobm9kZSwgdGFyZ2V0LCBjb21wb25lbnQsIGhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGV2ZW50SGFuZGxlci50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIGV2ZW50SGFuZGxlci5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdmFyIGNsaWNrRXZlbnRzID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGlja0V2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNsaWNrRXZlbnRzW2ldICYmIGNsaWNrRXZlbnRzW2ldLmhhbmRsZXIgPT0gZXZlbnRIYW5kbGVyLmhhbmRsZXIgJiYgY2xpY2tFdmVudHNbaV0uY29tcG9uZW50ID09IGV2ZW50SGFuZGxlci5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xpY2tFdmVudHMucHVzaChldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8v6K6+572u6L+b5bqmXG4gICAgcHVibGljIHN0YXRpYyBzZXRQcm9ncmVzc0Jhcihub2RlOiBjYy5Ob2RlLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgYmFyID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICAgICAgaWYgKCEhYmFyKSB7XG4gICAgICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFNwaW5lU3RvcChub2RlOiBjYy5Ob2RlLCBpc1N0b3A6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGxldCBzcGluZSA9IG5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIGlmICghIXNwaW5lKSB7XG4gICAgICAgICAgICAgICAgc3BpbmUucGF1c2VkID0gaXNTdG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvL+iuvue9rnNwaW5l55qu6IKkXG4gICAgcHVibGljIHN0YXRpYyBzZXRTcGluZVNraW4obm9kZTogY2MuTm9kZSwgc2tpbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgc3BpbmUgPSBub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBpZiAoISFzcGluZSkge1xuICAgICAgICAgICAgICAgIHNwaW5lLnNldFNraW4oc2tpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+iuvue9rnNwaW5l5Yqo55S7XG4gICAgcHVibGljIHN0YXRpYyBzZXRTcGluZUFuaW1hdGUobm9kZTogY2MuTm9kZSwgYW5pbWF0aW9uOiBzdHJpbmcsIGlzTG9vcDogYm9vbGVhbiwgZnVuYzogKGFyZzogYW55KSA9PiB2b2lkLCBob3N0OiBhbnksIGFyZzogYW55KSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBsZXQgc3BpbmUgPSBub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBpZiAoISFzcGluZSkge1xuICAgICAgICAgICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBhbmltYXRpb24sIGlzTG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFmdW5jKSB7XG4gICAgICAgICAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmMuY2FsbChob3N0LCBhcmcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+mXqueDgUFjdGlvbiBcbiAgICBwdWJsaWMgc3RhdGljIHNldEZsaWNrZXJBY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICAvLyBjYy5sb2coJ+W8gOWni+mXqueDgeS6hisrKysrKysrKysrKysrJyk7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5ibGluayh0aW1lLCBjb3VudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9oZWFydEFjdGlvbiDlv4Pot7NcbiAgICBwdWJsaWMgc3RhdGljIHNldEhlYXJ0QWN0aW9uKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IDAuNSwgaXNTdGFydEJpZzogYm9vbGVhbiA9IGZhbHNlLCBiaWdTY2FsZTogbnVtYmVyID0gMS4yLCBzbWFsbFNjYWxlOiBudW1iZXIgPSAwLjksIHNwZWNpYWw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbGV0IGRlbGF5QWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUgLSAwLjI7XG4gICAgICAgICAgICAgICAgZGVsYXlBY3Rpb24gPSBjYy5kZWxheVRpbWUoMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzY2FsZUJpZ0FjdGlvbiA9IGNjLnNjYWxlVG8odGltZSwgYmlnU2NhbGUsIGJpZ1NjYWxlKTtcbiAgICAgICAgICAgIGxldCBzY2FsZVNtYWxsQWN0aW9uID0gY2Muc2NhbGVUbyh0aW1lLCBzbWFsbFNjYWxlLCBzbWFsbFNjYWxlKTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHNwZWNpYWwpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2UoZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uLCBkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbikgOiBjYy5zZXF1ZW5jZShkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2Uoc2NhbGVCaWdBY3Rpb24sIHNjYWxlU21hbGxBY3Rpb24pIDogY2Muc2VxdWVuY2Uoc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVCaWdBY3Rpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGFjdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vaGVhcnRBY3Rpb24g55+t5pe26Ze05b+D6LezXG4gICAgcHVibGljIHN0YXRpYyBzZXRIZWFydEFjdGlvbkJ5VGltZShub2RlOiBjYy5Ob2RlLCBudW0gPSA1LCBjYWxsQmFjayA9IG51bGwsIHRpbWU6IG51bWJlciA9IDAuNSwgaXNTdGFydEJpZzogYm9vbGVhbiA9IGZhbHNlLCBiaWdTY2FsZTogbnVtYmVyID0gMS4yLCBzbWFsbFNjYWxlOiBudW1iZXIgPSAwLjksIHNwZWNpYWw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbGV0IGRlbGF5QWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IHRpbWUgLSAwLjI7XG4gICAgICAgICAgICAgICAgZGVsYXlBY3Rpb24gPSBjYy5kZWxheVRpbWUoMC4yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGN1cnJlbnROdW0gPSAwO1xuXG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBjYy5zY2FsZVRvKHRpbWUsIGJpZ1NjYWxlLCBiaWdTY2FsZSk7XG4gICAgICAgICAgICBsZXQgc2NhbGVTbWFsbEFjdGlvbiA9IGNjLnNjYWxlVG8odGltZSwgc21hbGxTY2FsZSwgc21hbGxTY2FsZSk7XG4gICAgICAgICAgICBsZXQgc2NhbGVGdW4gPSBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudE51bSsrO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsQmFjayAmJiBjdXJyZW50TnVtID49IG51bSkge1xuICAgICAgICAgICAgICAgICAgICBpZihjYWxsQmFjayljYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHNwZWNpYWwpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2UoZGVsYXlBY3Rpb24sIHNjYWxlQmlnQWN0aW9uLCBkZWxheUFjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVGdW4pIDogY2Muc2VxdWVuY2UoZGVsYXlBY3Rpb24sIHNjYWxlU21hbGxBY3Rpb24sIGRlbGF5QWN0aW9uLCBzY2FsZUJpZ0FjdGlvbiwgc2NhbGVGdW4pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IGlzU3RhcnRCaWcgPyBjYy5zZXF1ZW5jZShzY2FsZUJpZ0FjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVGdW4pIDogY2Muc2VxdWVuY2Uoc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVCaWdBY3Rpb24sIHNjYWxlRnVuKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0KGFjdGlvbiwgbnVtKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+S4iuS4i+a1ruWKqFxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VXBEb3duQWN0aW9uKG5vZGU6IGNjLk5vZGUsIHRpbWU6IG51bWJlciA9IDAuNSwgeTogbnVtYmVyID0gMjApOiB2b2lkIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mihub2RlLngsIG5vZGUueSlcbiAgICAgICAgICAgIGxldCBtb3ZlVXAgPSBjYy5tb3ZlVG8odGltZSwgY2MudjIocG9zLngsIHBvcy55ICsgeSkpO1xuICAgICAgICAgICAgbGV0IG1vdmVEb3duID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSkpO1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKG1vdmVVcCwgbW92ZURvd24pO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihhY3Rpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TFJBY3Rpb24obm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC41LCB4OiBudW1iZXIgPSAyMCkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKG5vZGUueCwgbm9kZS55KVxuICAgICAgICAgICAgbGV0IG1vdmVVcCA9IGNjLm1vdmVUbyh0aW1lLCBjYy52Mihwb3MueCArIHgsIHBvcy55KSk7XG4gICAgICAgICAgICBsZXQgbW92ZURvd24gPSBjYy5tb3ZlVG8odGltZSwgY2MudjIocG9zLngsIHBvcy55KSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UobW92ZVVwLCBtb3ZlRG93bik7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGFjdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXRTY2FsZUd1b0Rvbmcobm9kZTogY2MuTm9kZSwgdGltZTogbnVtYmVyID0gMC4xLCBpc1N0YXJ0QmlnOiBib29sZWFuID0gdHJ1ZSwgYmlnU2NhbGU6IG51bWJlciA9IDEuMywgc21hbGxTY2FsZTogbnVtYmVyID0gMS4wKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBjYy5zY2FsZVRvKHRpbWUsIGJpZ1NjYWxlLCBiaWdTY2FsZSk7XG4gICAgICAgICAgICBsZXQgc2NhbGVTbWFsbEFjdGlvbiA9IGNjLnNjYWxlVG8odGltZSwgc21hbGxTY2FsZSwgc21hbGxTY2FsZSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gaXNTdGFydEJpZyA/IGNjLnNlcXVlbmNlKHNjYWxlQmlnQWN0aW9uLCBzY2FsZVNtYWxsQWN0aW9uKSA6IGNjLnNlcXVlbmNlKHNjYWxlU21hbGxBY3Rpb24sIHNjYWxlQmlnQWN0aW9uKVxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SnVtcEFjdGlvbShub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIgPSAwLjMsIHk6IG51bWJlciA9IDIwKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpXG4gICAgICAgICAgICBsZXQgbW92ZVVwID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSArIHkpKTtcbiAgICAgICAgICAgIGxldCBtb3ZlRG93biA9IGNjLm1vdmVUbyh0aW1lLCBjYy52Mihwb3MueCwgcG9zLnkpKTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShtb3ZlVXAsIG1vdmVEb3duKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldFJlSnVtcEFjdGlvbShub2RlOiBjYy5Ob2RlLCB0aW1lOiBudW1iZXIgPSAwLjMsIHk6IG51bWJlciA9IDEwKTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIobm9kZS54LCBub2RlLnkpXG4gICAgICAgICAgICBsZXQgbW92ZVVwID0gY2MubW92ZVRvKHRpbWUsIGNjLnYyKHBvcy54LCBwb3MueSArIHkpKTtcbiAgICAgICAgICAgIGxldCBtb3ZlRG93biA9IGNjLm1vdmVUbyh0aW1lLCBjYy52Mihwb3MueCwgcG9zLnkgLSB5KSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UobW92ZVVwLCBtb3ZlRG93bik7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGFjdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/mn5DkuKrmlrnlkJHlvqrnjq/np7vliqhcbiAgICAvL2Rpc3RhbmNl5b6q546v56e75Yqo55qE6Led56a7XG4gICAgcHVibGljIHN0YXRpYyBzZXRGb3JFdmVyTW92ZUFjdGlvbihub2RlOiBjYy5Ob2RlLCBkaXN0YW5jZTogbnVtYmVyID0gNSwgdGltZTogbnVtYmVyID0gMC41LCBpc1N0YXJ0QmlnOiBib29sZWFuID0gZmFsc2UsIGF4aXM6IHN0cmluZyA9ICd4JywgaXNFYXNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBsZXQgc2NhbGVCaWdBY3Rpb24gPSBheGlzID09PSAneCcgPyBjYy5tb3ZlVG8odGltZSwgcG9zLnggKyBkaXN0YW5jZSwgcG9zLnkpIDogY2MubW92ZVRvKHRpbWUsIHBvcy54LCBwb3MueSArIGRpc3RhbmNlKTtcbiAgICAgICAgICAgIGlmIChpc0Vhc2UpIHtcbiAgICAgICAgICAgICAgICBzY2FsZUJpZ0FjdGlvbiA9IHNjYWxlQmlnQWN0aW9uLmVhc2luZyhjYy5lYXNlT3V0KDEuNSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNjYWxlU21hbGxBY3Rpb24gPSBjYy5tb3ZlVG8odGltZSwgcG9zLngsIHBvcy55KVxuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGlzU3RhcnRCaWcgPyBjYy5zZXF1ZW5jZShzY2FsZUJpZ0FjdGlvbiwgc2NhbGVTbWFsbEFjdGlvbikgOiBjYy5zZXF1ZW5jZShzY2FsZVNtYWxsQWN0aW9uLCBzY2FsZUJpZ0FjdGlvbilcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoYWN0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+W+queOr+enu+WKqCDmkq3mlL7mjIflrprml7bpl7RcbiAgICBwdWJsaWMgc3RhdGljIHNldExvb3BBY3Rpb24obm9kZTogY2MuTm9kZSwgY2FsbEJhY2s6ICgpID0+IHZvaWQsIGF4aXM6IHN0cmluZyA9ICd5JywgZGlzdGFuY2U6IG51bWJlciA9IDUsIGFjdGlvblRpbWU6IG51bWJlciA9IDAuNSwgZHVyYXRpb246IG51bWJlciA9IDMsIGlzU3RhcnRCaWc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbGV0IHBvcyA9IG5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGxldCBzY2FsZUJpZ0FjdGlvbiA9IGF4aXMgPT09ICd4JyA/IGNjLm1vdmVUbyhhY3Rpb25UaW1lLCBwb3MueCArIGRpc3RhbmNlLCBwb3MueSkgOiBjYy5tb3ZlVG8oYWN0aW9uVGltZSwgcG9zLngsIHBvcy55ICsgZGlzdGFuY2UpO1xuICAgICAgICAgICAgbGV0IHNjYWxlU21hbGxBY3Rpb24gPSBjYy5tb3ZlVG8oYWN0aW9uVGltZSwgcG9zLngsIHBvcy55KTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBpc1N0YXJ0QmlnID8gY2Muc2VxdWVuY2Uoc2NhbGVCaWdBY3Rpb24sIHNjYWxlU21hbGxBY3Rpb24pIDogY2Muc2VxdWVuY2Uoc2NhbGVTbWFsbEFjdGlvbiwgc2NhbGVCaWdBY3Rpb24pO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gZHVyYXRpb24gLyAoYWN0aW9uVGltZSAqIDIpO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MucmVwZWF0KGFjdGlvbiwgY291bnQpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soKTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+e8qeaUvuaYvuekuuWbnuW8uVxuICAgIHB1YmxpYyBzdGF0aWMgc2V0U2NhbGVCb3VuY2Uobm9kZTogY2MuTm9kZSwgY2FsbEJhY2s6ICgpID0+IHZvaWQsIGR1cmF0aW9uOiBudW1iZXIgPSAwLjEsIGJkdXJhdGlvbjogbnVtYmVyID0gMC42LCBiUmFkaW86IG51bWJlciA9IDEuOCk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbGV0IGJBY3Rpb24gPSBjYy5zY2FsZVRvKGR1cmF0aW9uLCBiUmFkaW8sIGJSYWRpbyk7XG4gICAgICAgICAgICBsZXQgc0FjdGlvbiA9IGNjLnNjYWxlVG8oYmR1cmF0aW9uLCAxLCAxKS5lYXNpbmcoY2MuZWFzZUJvdW5jZU91dCgpKTtcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGJBY3Rpb24sIGNjLmRlbGF5VGltZSgwLjEpLCBzQWN0aW9uLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soKTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7kuIvnoLjmlYjmnpxcbiAgICAgKiBAcGFyYW0gbm9kZSDoioLngrlcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g5oyB57ut5pe26Ze0XG4gICAgICogQHBhcmFtIGJpZ1NjYWxlIOi1t+Wni+acgOWkp+WAvFxuICAgICAqIEBwYXJhbSBzbWFsbFNjYWxlIOe8qeaUvuWIsOacgOWwj+WAvFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0RG93bkFjdGlvbihub2RlOiBjYy5Ob2RlLCBkdXJhdGlvbjogbnVtYmVyID0gMC4yLCBiaWdTY2FsZTogbnVtYmVyID0gMywgc21hbGxTY2FsZTogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChub2RlKSkge1xuICAgICAgICAgICAgbm9kZS5zY2FsZVggPSBub2RlLnNjYWxlWSA9IGJpZ1NjYWxlO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbyhkdXJhdGlvbiwgc21hbGxTY2FsZSwgc21hbGxTY2FsZSkuZWFzaW5nKGNjLmVhc2VCb3VuY2VJbk91dCgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1RPRE8g5ZCO5pyf5L+u5pS55oiQ6ZyH5Yqo57G7XG4gICAgcHVibGljIHN0YXRpYyBzaGFrZUVmZmVjdChub2RlOiBjYy5Ob2RlLCBkdXJhdGlvbjogbnVtYmVyID0gMC42KTogdm9pZCB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICBjYy5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52Mig1LCA3KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoLTYsIDcpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigtMTMsIDMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigzLCAtNikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMDIsIGNjLnYyKC01LCA1KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoMiwgLTgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigtOCwgLTEwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4wMiwgY2MudjIoMywgMTApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjAyLCBjYy52MigwLCAwKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24gKiAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ==
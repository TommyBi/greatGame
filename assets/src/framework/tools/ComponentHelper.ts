/**
 * 组件设置
 */
export default class ComponentHelper {


    //对文本赋值
    public static labelString(node: cc.Node, text: (string | number), force: boolean = false, maxChars: number = null): void {
        if (cc.isValid(node)) {
            let label = node.getComponent(cc.Label);
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
    }

    public static labelTimeFormat(node: cc.Node, text: number): void {
        let result: string = this._secondToDate(text);
        ComponentHelper.labelString(node, result);
    }

    //分割的时间格式 00:00:00
    public static labelTimeFormatGap(node1: cc.Node, node2: cc.Node, node3: cc.Node, time: number) {
        let h: (number | string) = Math.floor(time / 3600);
        let m: (number | string) = Math.floor((time / 60 % 60));
        let s: (number | string) = Math.floor((time % 60));
        h = h > 9 ? h : '0' + h;
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        ComponentHelper.labelString(node1, h);
        ComponentHelper.labelString(node2, m);
        ComponentHelper.labelString(node3, s);
    }

    //00:00
    public static labelTimeSs(node: cc.Node, time: number) {
        let timeStr = this._secondToDate2(time);
        ComponentHelper.labelString(node, timeStr);
    }

    private static _secondToDate2(result: number): string {
        let m: (string | number) = Math.floor((result / 60 % 60));
        let s: (string | number) = Math.floor((result % 60));

        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        return m + ":" + s;
    }

    private static _secondToDate(result: number): string {
        let h: (string | number) = Math.floor(result / 3600);
        let m: (string | number) = Math.floor((result / 60 % 60));
        let s: (string | number) = Math.floor((result % 60));
        h = h > 9 ? h : '0' + h;
        m = m > 9 ? m : '0' + m;
        s = s > 9 ? s : '0' + s;
        return h + ":" + m + ":" + s;
    }

    public static getLabelString(node: cc.Node): string {
        if (cc.isValid(node)) {
            let label = node.getComponent(cc.Label);
            if (!!label) {
                return label.string;
            }
        }
        return '';
    }
    //cLHeight 是否改变行高
    public static setLabelSize(node: cc.Node, size: number, cLHeight: number, space: number): void {
        if (cc.isValid(node)) {
            let label = node.getComponent(cc.Label);
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
    }

    public static createLabel(size: number, color: cc.Color, content?: string, font?: cc.Font): cc.Node {
        let node = new cc.Node();
        let label: cc.Label = node.addComponent(cc.Label);
        label.fontSize = size;
        label.font = font;
        node.color = color;
        label.string = content;
        return node;
    }

    //设置字体
    public static setLabelFont(node: cc.Node, font: cc.Font): void {
        if (cc.isValid(node)) {
            let label = node.getComponent(cc.Label);
            if (!!label) {
                label.font = font;
            }
        }
    }

    //对富文本进行赋值
    public static richLabelString(node: cc.Node, text: string, lineHeight?: number): void {
        if (cc.isValid(node)) {
            let label = node.getComponent(cc.RichText);
            if (label) {
                if (!!lineHeight && lineHeight > 0) {
                    label.lineHeight = lineHeight;
                }
                label.string = text;
            }
        }
    }

    //拥有纹理时直接赋值
    public static spriteFrame(node: cc.Node, spriteFrame: cc.SpriteFrame): cc.Sprite {
        if (cc.isValid(node)) {
            let sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = spriteFrame;
            }
            return sprite;
        }
        return null;
    }

    public static getSpriteFrame(node: cc.Node): cc.SpriteFrame {
        if (cc.isValid(node)) {
            let sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                return sprite.spriteFrame;
            }
        }
        return null;
    }

    public static createSprite(res: cc.SpriteFrame, anchor?: cc.Vec2) {
        let node = new cc.Node();
        let sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = res;
        if (!!anchor) {
            node.anchorX = anchor.x;
            node.anchorY = anchor.y;
        }
        return node;
    }

    public static clearSpriteFrame(node: cc.Node): void {
        if (cc.isValid(node)) {
            let sprite = node.getComponent(cc.Sprite);
            if (sprite) {
                sprite.spriteFrame = null;
            }
        }
    }

    public static spriteGray(node: cc.Node, isGray: boolean): void {
        if (cc.isValid(node)) {
            let sprite: any = node.getComponent(cc.Sprite);
            if (!sprite) {
                sprite = node.getComponent(cc.Label);
            }
            if (!!sprite) {
                if (isGray) {
                    sprite.setMaterial(0, cc.Material.getBuiltinMaterial('2d-gray-sprite'));
                } else {
                    sprite.setMaterial(0, cc.Material.getBuiltinMaterial('2d-sprite'));
                }
            }
        }
    }

    //获得scrollView 并滑动到指定位置
    public static getScrollViewAndScroll(node: cc.Node, x: number, y: number): cc.ScrollView {
        let scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToOffset(cc.v2(x, y), 0);
        }
        return scrollView;
    }

    //获得scrollView 并滑动到指定位置
    public static getScrollViewAndScrollPercent(node: cc.Node, x: number, y: number): cc.ScrollView {
        let scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollTo(cc.v2(x, y), 0);
        }
        return scrollView;
    }


    //滑动到顶部
    public static getScrollViewAndScrollTop(node: cc.Node, time: number = 0): cc.ScrollView {
        let scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToTop(time);
        }
        return scrollView;
    }


    //滑动到左侧
    public static getScrollViewAndScrollLeft(node: cc.Node, time: number = 0): cc.ScrollView {
        let scrollView = node.getComponent(cc.ScrollView);
        if (scrollView) {
            scrollView.stopAutoScroll();
            scrollView.scrollToLeft(time);
        }
        return scrollView;
    }


    public static setScrollViewEnabled(node: cc.Node, value: boolean = true): cc.ScrollView {
        let scrollView = node.getComponent(cc.ScrollView);
        if (!!scrollView) {
            scrollView.enabled = value;
        }
        return scrollView
    }

    //设置通用货币  xx万 或者 xx亿
    public static setCommonCurrenyLabel(node: cc.Node, count: number): void {
        if (cc.isValid(node)) {
            let label = node.getComponent('CommonCurrencyLabel');
            if (label) {
                label.setContent(count);
            }
        }
    }

    //小数点数字
    public static setDotLabel(node: cc.Node, value: number, isUint: boolean = true): void {
        if (cc.isValid(node)) {
            let label = node.getComponent('DotLabel');
            if (label) {
                label.string(value, isUint);
            }
        }
    }

    public static setLabelColor(node: cc.Node, color: cc.Color): void {
        if (cc.isValid(node)) {
            node.color = color;
        }
    }

    public static getEditorString(node: cc.Node): string {
        if (cc.isValid(node)) {
            let editbox = node.getComponent(cc.EditBox);
            if (!!editbox) {
                return editbox.string;
            }
        }
        return '';
    }

    public static setEditorString(node: cc.Node, str: string) {
        if (cc.isValid(node)) {
            let editbox = node.getComponent(cc.EditBox);
            if (!!editbox) {
                editbox.string = str;
            }
        }
    }

    //设置文字描边
    public static setLabelOut(node: cc.Node, color: cc.Color, width: number): void {
        if (cc.isValid(node)) {
            let labelOut = node.addComponent(cc.LabelOutline);
            labelOut.color = color;
            labelOut.width = width;
        }
    }

    //移除描边
    public static removeLineOut(node): void {
        if (cc.isValid(node)) {
            let labelOut = node.removeComponent(cc.LabelOutline);
        }
    }

    //获得输入框的内容
    public static getEditBoxString(node): string {
        if (cc.isValid(node)) {
            let editBox = node.getComponent(cc.EditBox);
            if (editBox.string != editBox.placeholder) {
                return editBox.string;
            }
        }
        return null;
    }

    public static strClamp(str: string, maxChars: number, suffix: string): string {
        if (str === '') {
            return '';
        }
        let toCodePoint = function (unicodeSurrogates) {
            let r = [], c = 0, p = 0, i = 0;
            while (i < unicodeSurrogates.length) {
                let pos = i;
                c = unicodeSurrogates.charCodeAt(i++);//返回位置的字符的 Unicode 编码 
                if (c == 0xfe0f) {
                    continue;
                }
                if (p) {
                    let value = (0x10000 + ((p - 0xD800) << 10) + (c - 0xDC00));
                    r.push({
                        v: value,
                        pos: pos,
                    }); //计算4字节的unicode
                    p = 0;
                } else if (0xD800 <= c && c <= 0xDBFF) {
                    p = c; //如果unicode编码在oxD800-0xDBff之间，则需要与后一个字符放在一起
                } else {
                    r.push({
                        v: c,
                        pos: pos
                    }); //如果是2字节，直接将码点转为对应的十六进制形式
                }
            }
            return r;
        }

        suffix = suffix === null ? '...' : suffix;
        maxChars *= 2;

        let codeArr = toCodePoint(str);
        let numChar = 0;
        let index = 0;
        for (let i = 0; i < codeArr.length; ++i) {
            let code = codeArr[i].v;
            let add = 1;
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
        let more = suffix ? 1 : 0;
        return str.substring(0, codeArr[index - more].pos + 1) + suffix;
    }

    //获得checkbox的选择状态
    public static getToggle(node: cc.Node): boolean {
        if (cc.isValid(node)) {
            let toggle = node.getComponent(cc.Toggle);
            if (!!toggle) {
                return toggle.isChecked;
            }
        }
        return false;
    }

    public static setToggleListener(node, func, host): void {
        if (cc.isValid(node)) {
            node.on('toggle', (e) => {
                func && func.call(host, e.isChecked);
            })
        }
    }

    public static setButtonInteractable(node: cc.Node, status: boolean): void {
        if (cc.isValid(node)) {
            let button = node.getComponent(cc.Button);
            if (!!button) {
                button.interactable = status;
            }
        }
    }

    public static getButtonInteractabel(node: cc.Node): boolean {
        if (cc.isValid(node)) {
            let button = node.getComponent(cc.Button);
            if (!!button) {
                return button.interactable;
            }
        }
        return true;
    }

    public static addClickEvent(node, target, component, handler): void {
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
    }

    //设置进度
    public static setProgressBar(node: cc.Node, value: number): void {
        if (cc.isValid(node)) {
            let bar = node.getComponent(cc.ProgressBar);
            if (!!bar) {
                bar.progress = value;
            }
        }
    }

    public static setSpineStop(node: cc.Node, isStop: boolean): void {
        if (cc.isValid(node)) {
            let spine = node.getComponent(sp.Skeleton);
            if (!!spine) {
                spine.paused = isStop;
            }
        }

    }

    //设置spine皮肤
    public static setSpineSkin(node: cc.Node, skin: string): void {
        if (cc.isValid(node)) {
            let spine = node.getComponent(sp.Skeleton);
            if (!!spine) {
                spine.setSkin(skin);
            }
        }
    }

    //设置spine动画
    public static setSpineAnimate(node: cc.Node, animation: string, isLoop: boolean, func: (arg: any) => void, host: any, arg: any) {
        if (cc.isValid(node)) {
            let spine = node.getComponent(sp.Skeleton);
            if (!!spine) {
                spine.setAnimation(0, animation, isLoop);
            }
            if (!!func) {
                spine.setCompleteListener((trackEntry, loopCount) => {
                    spine.setCompleteListener(null);
                    func.call(host, arg);
                })
            }

        }
    }
    //闪烁Action 
    public static setFlickerAction(node: cc.Node, time: number, count: number): void {
        if (cc.isValid(node)) {
            // cc.log('开始闪烁了++++++++++++++');
            node.stopAllActions();
            node.runAction(cc.blink(time, count));
        }
    }

    //heartAction 心跳
    public static setHeartAction(node: cc.Node, time: number = 0.5, isStartBig: boolean = false, bigScale: number = 1.2, smallScale: number = 0.9, special: boolean = false): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let delayAction = null;
            if (special) {
                time = time - 0.2;
                delayAction = cc.delayTime(0.2);
            }
            let scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            let scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            let action = null;
            if (special) {
                action = isStartBig ? cc.sequence(delayAction, scaleBigAction, delayAction, scaleSmallAction) : cc.sequence(delayAction, scaleSmallAction, delayAction, scaleBigAction)
            } else {
                action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction)
            }
            node.runAction(cc.repeatForever(action));
        }
    }
    //heartAction 短时间心跳
    public static setHeartActionByTime(node: cc.Node, num = 5, callBack = null, time: number = 0.5, isStartBig: boolean = false, bigScale: number = 1.2, smallScale: number = 0.9, special: boolean = false): void {
        if (cc.isValid(node)) {
            node.active = true;
            node.stopAllActions();
            let delayAction = null;
            if (special) {
                time = time - 0.2;
                delayAction = cc.delayTime(0.2);
            }

            let currentNum = 0;

            let scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            let scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            let scaleFun = cc.callFunc(() => {
                currentNum++;
                if (callBack && currentNum >= num) {
                    if(callBack)callBack();
                    node.stopAllActions();
                }
            })
            let action = null;
            if (special) {
                action = isStartBig ? cc.sequence(delayAction, scaleBigAction, delayAction, scaleSmallAction, scaleFun) : cc.sequence(delayAction, scaleSmallAction, delayAction, scaleBigAction, scaleFun)
            } else {
                action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction, scaleFun) : cc.sequence(scaleSmallAction, scaleBigAction, scaleFun)
            }
            node.runAction(cc.repeat(action, num));
        }
    }

    //上下浮动
    public static setUpDownAction(node: cc.Node, time: number = 0.5, y: number = 20): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let pos = cc.v2(node.x, node.y)
            let moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            let moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            let action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    }

    public static setLRAction(node: cc.Node, time: number = 0.5, x: number = 20) {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let pos = cc.v2(node.x, node.y)
            let moveUp = cc.moveTo(time, cc.v2(pos.x + x, pos.y));
            let moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            let action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    }

    public static setScaleGuoDong(node: cc.Node, time: number = 0.1, isStartBig: boolean = true, bigScale: number = 1.3, smallScale: number = 1.0): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let scaleBigAction = cc.scaleTo(time, bigScale, bigScale);
            let scaleSmallAction = cc.scaleTo(time, smallScale, smallScale);
            let action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction)
            node.runAction(action);
        }
    }

    public static setJumpActiom(node: cc.Node, time: number = 0.3, y: number = 20): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let pos = cc.v2(node.x, node.y)
            let moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            let moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y));
            let action = cc.sequence(moveUp, moveDown);
            node.runAction(action);
        }
    }

    public static setReJumpActiom(node: cc.Node, time: number = 0.3, y: number = 10): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let pos = cc.v2(node.x, node.y)
            let moveUp = cc.moveTo(time, cc.v2(pos.x, pos.y + y));
            let moveDown = cc.moveTo(time, cc.v2(pos.x, pos.y - y));
            let action = cc.sequence(moveUp, moveDown);
            node.runAction(cc.repeatForever(action));
        }
    }

    //某个方向循环移动
    //distance循环移动的距离
    public static setForEverMoveAction(node: cc.Node, distance: number = 5, time: number = 0.5, isStartBig: boolean = false, axis: string = 'x', isEase: boolean = false) {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let pos = node.getPosition();
            let scaleBigAction = axis === 'x' ? cc.moveTo(time, pos.x + distance, pos.y) : cc.moveTo(time, pos.x, pos.y + distance);
            if (isEase) {
                scaleBigAction = scaleBigAction.easing(cc.easeOut(1.5));
            }
            let scaleSmallAction = cc.moveTo(time, pos.x, pos.y)
            let action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction)
            node.runAction(cc.repeatForever(action));
        }
    }

    //循环移动 播放指定时间
    public static setLoopAction(node: cc.Node, callBack: () => void, axis: string = 'y', distance: number = 5, actionTime: number = 0.5, duration: number = 3, isStartBig: boolean = false): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            let pos = node.getPosition();
            let scaleBigAction = axis === 'x' ? cc.moveTo(actionTime, pos.x + distance, pos.y) : cc.moveTo(actionTime, pos.x, pos.y + distance);
            let scaleSmallAction = cc.moveTo(actionTime, pos.x, pos.y);
            let action = isStartBig ? cc.sequence(scaleBigAction, scaleSmallAction) : cc.sequence(scaleSmallAction, scaleBigAction);
            let count = duration / (actionTime * 2);
            node.runAction(cc.sequence(cc.repeat(action, count), cc.callFunc(function () {
                callBack && callBack();
            })));
        }
    }

    //缩放显示回弹
    public static setScaleBounce(node: cc.Node, callBack: () => void, duration: number = 0.1, bduration: number = 0.6, bRadio: number = 1.8): void {
        if (cc.isValid(node)) {
            let bAction = cc.scaleTo(duration, bRadio, bRadio);
            let sAction = cc.scaleTo(bduration, 1, 1).easing(cc.easeBounceOut());
            node.runAction(cc.sequence(bAction, cc.delayTime(0.1), sAction, cc.callFunc(function () {
                callBack && callBack();
            })));
        }
    }

    /**
     * 设置下砸效果
     * @param node 节点
     * @param duration 持续时间
     * @param bigScale 起始最大值
     * @param smallScale 缩放到最小值
     */
    public static setDownAction(node: cc.Node, duration: number = 0.2, bigScale: number = 3, smallScale: number = 1): void {
        if (cc.isValid(node)) {
            node.scaleX = node.scaleY = bigScale;
            node.runAction(cc.scaleTo(duration, smallScale, smallScale).easing(cc.easeBounceInOut()));
        }
    }

    //TODO 后期修改成震动类
    public static shakeEffect(node: cc.Node, duration: number = 0.6): void {
        if (cc.isValid(node)) {
            node.stopAllActions();
            node.runAction(
                cc.repeatForever(
                    cc.sequence(
                        cc.moveTo(0.02, cc.v2(5, 7)),
                        cc.moveTo(0.02, cc.v2(-6, 7)),
                        cc.moveTo(0.02, cc.v2(-13, 3)),
                        cc.moveTo(0.02, cc.v2(3, -6)),
                        cc.moveTo(0.02, cc.v2(-5, 5)),
                        cc.moveTo(0.02, cc.v2(2, -8)),
                        cc.moveTo(0.02, cc.v2(-8, -10)),
                        cc.moveTo(0.02, cc.v2(3, 10)),
                        cc.moveTo(0.02, cc.v2(0, 0))
                    )
                )
            );

            setTimeout(() => {
                node.stopAllActions();
                node.setPosition(0, 0);
            }, duration * 1000);
        }

    }
}
"use strict";
cc._RF.push(module, '2d997NXvhNDTbMpB4rEU7g2', 'Utils');
// src/framework/tools/Utils.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // cdegress:Num Math.PI/180,
    // cangle:180/Math.PI,
    Utils.emoji2Str = function (str) {
        return unescape(escape(str).replace(/\%uD.{3}/g, ''));
    };
    Utils.isEmojiCharacter = function (substring) {
        for (var i = 0; i < substring.length; i++) {
            var hs = substring.charCodeAt(i);
            var ls = void 0;
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    ls = substring.charCodeAt(i + 1);
                    var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            }
            else if (substring.length > 1) {
                ls = substring.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            }
            else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                }
                else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                }
                else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                }
                else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                }
                else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                    || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                    || hs == 0x2b50) {
                    return true;
                }
            }
        }
    };
    //是否字符串有空格
    Utils.isStrSpace = function (str) {
        return str.indexOf(' ') === -1;
    };
    //角度转弧度
    Utils.angleToPI = function (degrees) {
        return degrees * cc.macro.RAD;
    };
    Utils.piToAngle = function (radians) {
        return radians * cc.macro.DEG;
    };
    //获得两点之间的角度
    Utils.getVecAngle = function (currVec, nextVec) {
        // let p1 = (180 / Math.PI);
        var vec = cc.v2(nextVec).sub(cc.v2(currVec));
        var a1 = -Math.atan2(vec.y, vec.x);
        var r1 = a1 * cc.macro.DEG;
        return r1;
    };
    //把一个节点下的坐标转成全局坐标
    Utils.convertNodeToWorldSpace = function (node, npos) {
        if (cc.isValid(node)) {
            return node.convertToWorldSpaceAR(npos);
        }
        return cc.v2();
    };
    //把一个节点下的坐标转成另一个节点的坐标
    Utils.convertNodeToNodeSpace = function (node, targetParent) {
        if (cc.isValid(node)) {
            if (!!node.parent) {
                var wpos = node.parent.convertToWorldSpaceAR(node.getPosition());
                if (cc.isValid(targetParent)) {
                    return targetParent.convertToNodeSpaceAR(wpos);
                }
            }
        }
        cc.log('坐标转换有问题');
        return cc.v2(0, 0);
    };
    //把全局坐标转成另一个节点的坐标
    Utils.convertWorldToNodeSpace = function (node, wpos, isParent) {
        if (cc.isValid(node)) {
            if (!!isParent && node.parent) {
                return node.parent.convertToNodeSpaceAR(wpos);
            }
            return node.convertToNodeSpaceAR(wpos);
        }
        return cc.v2(0, 0);
    };
    /**
     * Function name isPhoneNumer
     * @param phoneNum 电话号码
     * 判断传入的数字是否符合手机号码的格式
     */
    Utils.isPhonenumber = function (phoneNum) {
        if (!(/^1[34578]\d{9}$/.test(phoneNum))) {
            return false;
        }
        return true;
    };
    /**
    * Function name getShortName
    * @param name 玩家昵称
    * 玩家中文昵称最多只显示5个汉字，超出则在后面加“...” 一个中文2个字符
    */
    Utils.getShortName = function (name, maxChar) {
        if (maxChar === void 0) { maxChar = 10; }
        if (!name) {
            return "";
        }
        var strlen = 0;
        var s = "";
        for (var i = 0; i < name.length; i++) {
            if (name.charCodeAt(i) > 128) {
                strlen += 2;
            }
            else {
                strlen++;
            }
            s += name.charAt(i);
            if (strlen >= maxChar) {
                return s + "...";
            }
        }
        return s;
    };
    /**
     * 计算两点之间的中点,
     * coefficient 距离系数
     */
    Utils.calculationMidPoint = function (begianPos, endPos, coefficient, offsetY) {
        if (coefficient === void 0) { coefficient = 0.5; }
        if (offsetY === void 0) { offsetY = 300; }
        var newPos = begianPos;
        var subx = 0;
        var suby = 0;
        if (begianPos.x <= endPos.x && begianPos.y <= endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        else if (begianPos.x > endPos.x && begianPos.y < endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        else if (begianPos.x > endPos.x && begianPos.y > endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        else if (begianPos.x < endPos.x && begianPos.y > endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        return newPos;
    };
    //生成范围内的随机数
    Utils.randSectionNum = function (minnum, maxnum) {
        return Math.floor(minnum + Math.random() * (maxnum - minnum));
    };
    //获得数组内的随机值
    Utils.getRandomByArr = function (arr) {
        var index = this.randSectionNum(0, arr.length);
        return arr[index];
    };
    //生成区间内的数组
    Utils.createArr = function (startIndex, endIndex) {
        var arr = [];
        for (var index = startIndex; index < endIndex; index++) {
            arr.push(index);
        }
        return arr;
    };
    /**
    * 从指定数组随机出几个值并组成新数组(返回值为原元素类型)
    * @param arr:源数组
    * @param num:要几个随机元素
    */
    Utils.randomNewArr = function (arr, num) {
        var arrOld = new Array();
        arrOld = __spreadArrays(arr);
        if (arrOld.length <= num) {
            return arrOld;
        }
        var arrNew = new Array();
        for (var i = 0; i < num; i++) {
            var random = this.getRandomNum(0, arrOld.length - 1); //产生随机数用作下标 
            arrNew.push(arrOld[random]);
            arrOld.splice(random, 1);
        }
        return arrNew;
    };
    /**
     * 获取范围内随机整数(包含最大值)
     * @param min 最小值
     * @param max 最大值
     */
    Utils.getRandomNum = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Utils.crossMul = function (v1, v2) {
        return v1.x * v2.y - v1.y * v2.x;
    };
    Utils.quadratic = function (begin, c1, end, t) {
        var p = cc.v2();
        p.x = begin.x * (1 - t) * (1 - t) + c1.x * 2 * t * (1 - t) + end.x * t * t;
        p.y = begin.y * (1 - t) * (1 - t) + c1.y * 2 * t * (1 - t) + end.y * t * t;
        return p;
    };
    Utils.exchange = function (p1, p2) {
        var p = cc.v2();
        p.x = p2.x;
        p.y = p2.y;
        p2.x = p1.x;
        p2.y = p1.y;
        p1.x = p.x;
        p1.y = p.y;
    };
    //数组删除某一个索引的对象
    //index 开始索引
    //num 删除数量 默认为1个
    Utils.arrayRemove = function (arr, index, num) {
        if (num === void 0) { num = 1; }
        var i, len;
        for (i = index + num, len = arr.length; i < len; i++) {
            arr[i - num] = arr[i];
        }
        arr.length = len - num;
    };
    //通过数组中的值移除数组
    Utils.arrayRemoveValue = function (arr, value) {
        for (var index = 0; index < arr.length; index++) {
            var element = arr[index];
            if (element === value) {
                this.arrayRemove(arr, index);
                break;
            }
        }
    };
    //数组copy
    Utils.arrayCopy = function (sourceArr, destArr) {
        if (!!sourceArr && !!destArr) {
            for (var index = 0; index < sourceArr.length; index++) {
                var element = sourceArr[index];
                destArr.push(element);
            }
        }
    };
    //从数组中获得指定数量，同时改变原有的数组
    Utils.arrayGetSync = function (sourceArr, num) {
        if (num === void 0) { num = 1; }
        var resultArr = [];
        if (num > sourceArr.length) {
            this.arrayCopy(sourceArr, resultArr);
            sourceArr.length = 0;
        }
        else {
            var dIndex = 0;
            for (var index = 0; index < num; index++) {
                dIndex = Math.floor(Math.random() * sourceArr.length);
                resultArr.push(sourceArr[dIndex]);
                this.arrayRemove(sourceArr, dIndex, 1);
            }
        }
        return resultArr;
    };
    //平滑
    Utils.lerp = function (a, b, t) {
        return a + t * (b - a);
    };
    Utils.matchBgSize = function (bg) {
        if (cc.isValid(bg)) {
            bg.setScale(1, 1);
            var hvalue = bg.width;
            if (bg.width <= 0) {
                hvalue = cc.view.getDesignResolutionSize().width;
            }
            var size = cc.view.getVisibleSize();
            var hrate = size.width / hvalue;
            bg.setScale(hrate, hrate);
            return hrate;
        }
    };
    Utils.matchBgHSize = function (bg) {
        if (cc.isValid(bg)) {
            bg.setScale(1, 1);
            var hvalue = bg.height;
            if (bg.height <= 0) {
                hvalue = cc.view.getDesignResolutionSize().height;
            }
            var size = cc.view.getVisibleSize();
            var hrate = size.height / hvalue;
            bg.setScale(hrate, hrate);
            return hrate;
        }
    };
    /**
     * 把数字转成0101的数组
     * @param {*} num
     * @param {*} count
     */
    Utils.numberToBinary = function (num, count) {
        var arr = [];
        for (var index = 0; index < count; index++) {
            arr.push(num >> index & 1);
        }
        return arr;
    };
    /**
     *
     * @param {*} arr
     */
    Utils.binaryArrToNum = function (arr) {
        if (!!arr) {
            var str = '';
            for (var index = 0; index < arr.length; index++) {
                str += arr[index];
            }
            cc.log(str);
            return parseInt(str, 2);
        }
        return null;
    };
    /**
     * 是否是pc操作平台
     */
    Utils.isPcPlantFrom = function () {
        if (cc.sys.platform === cc.sys.ANDROID || cc.sys.platform === cc.sys.IPHONE) {
            return false;
        }
        return true;
    };
    /**
     * 获得唯一id
     * @param len
     * @param radix
     */
    Utils.genUuid = function (len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvvxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;
        if (len) {
            // Compact form
            for (i = 0; i < len; i++)
                uuid[i] = chars[0 | Math.random() * radix];
        }
        else {
            // rfc4122, version 4 form
            var r = void 0;
            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    };
    /** <p>判断线段是否在矩形内 </p>
         * 先看线段所在直线是否与矩形相交，
         * 如果不相交则返回false，
         * 如果相交，
         * 则看线段的两个点是否在矩形的同一边（即两点的x(y)坐标都比矩形的小x(y)坐标小，或者大）,
         * 若在同一边则返回false，
         * 否则就是相交的情况。
         * @param linePointX1 线段起始点x坐标
         * @param linePointY1 线段起始点y坐标
         * @param linePointX2 线段结束点x坐标
         * @param linePointY2 线段结束点y坐标
         * @param rectangleLeftTopX 矩形左上点x坐标
         * @param rectangleLeftTopY 矩形左上点y坐标
         * @param rectangleRightBottomX 矩形右下点x坐标
         * @param rectangleRightBottomY 矩形右下点y坐标
         * @return 是否相交
         */
    Utils.isLineIntersectRectangle = function (linePointX1, linePointY1, linePointX2, linePointY2, rectangleLeftTopX, rectangleLeftTopY, rectangleRightBottomX, rectangleRightBottomY) {
        var lineHeight = linePointY1 - linePointY2;
        var lineWidth = linePointX2 - linePointX1; // 计算叉乘 
        var c = linePointX1 * linePointY2 - linePointX2 * linePointY1;
        if ((lineHeight * rectangleLeftTopX + lineWidth * rectangleLeftTopY + c >= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleRightBottomY + c <= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleLeftTopY + c <= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleRightBottomY + c >= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleRightBottomY + c >= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleLeftTopY + c <= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleRightBottomY + c <= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleLeftTopY + c >= 0)) {
            if (rectangleLeftTopX > rectangleRightBottomX) {
                var temp = rectangleLeftTopX;
                rectangleLeftTopX = rectangleRightBottomX;
                rectangleRightBottomX = temp;
            }
            if (rectangleLeftTopY < rectangleRightBottomY) {
                var temp1 = rectangleLeftTopY;
                rectangleLeftTopY = rectangleRightBottomY;
                rectangleRightBottomY = temp1;
            }
            if ((linePointX1 < rectangleLeftTopX && linePointX2 < rectangleLeftTopX)
                || (linePointX1 > rectangleRightBottomX && linePointX2 > rectangleRightBottomX)
                || (linePointY1 > rectangleLeftTopY && linePointY2 > rectangleLeftTopY)
                || (linePointY1 < rectangleRightBottomY && linePointY2 < rectangleRightBottomY)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    /**
     * 由慢到快
     * @param start
     * @param end
     * @param easing
     * @returns
     */
    Utils.easeIn = function (start, end, easing) {
        if (easing === void 0) { easing = 0.1; }
        start = start - (start - end) * easing;
        return start;
    };
    /**
     * 由快到慢
     * @param start
     * @param end
     * @param easing
     * @returns
     */
    Utils.easeOut = function (start, end, easing) {
        if (easing === void 0) { easing = 0.1; }
        start = start + (end - start) * easing;
        return start;
    };
    /**
     * 当前数字是否时一个质数
     * 被1和自己整除
     * @param num
     */
    Utils.isPrime = function (num) {
        var squrtNum = Math.floor(Math.sqrt(num));
        for (var index = 2; index < num; index++) {
            if (num % index == 0) {
                return false;
            }
        }
        return true;
    };
    /**
     * 找到距离这个数字最近的质数（质数用于随机分布中）
     * @param num
     * @returns
     */
    Utils.getPrime = function (num) {
        while (!this.isPrime(num)) {
            num++;
        }
        return num;
    };
    Utils.create = function (C) {
        return new C();
    };
    /**
     * 适配节点到相对于舞台的的边角位置
     * @param node
     * @param bord
     * @param offsetX
     * @param offsetY
     */
    Utils.fitToBoard = function (node, bord, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        var size = cc.view.getVisibleSize();
        if (bord == 'tl') {
            node.x = -size.width / 2 + node.width / 2 + offsetX;
            node.y = node.height / 2 - node.height / 2 + offsetY;
        }
        else if (bord == 'tr') {
            node.x = size.width / 2 - node.width / 2 + offsetX;
            node.y = node.height / 2 - node.height / 2 + offsetY;
        }
        else if (bord == 'dl') {
            node.x = -size.width / 2 + node.width / 2 + offsetX;
            node.y = -node.height / 2 + node.height / 2 + offsetY;
        }
        else if (bord == 'dr') {
            node.x = size.width / 2 - node.width / 2 + offsetX;
            node.y = -node.height / 2 + node.height / 2 + offsetY;
        }
    };
    /**
     * 返回帧数用时
     * @param num
     */
    Utils._FT = function (num) {
        return num * 0.0333333;
    };
    Utils.isUndefined = function (obj) {
        return typeof obj == "undefined";
    };
    Utils.numberPlus = function (num1, num2) {
        return (num1 * 100 + num2 * 100) / 100;
    };
    Utils.numberReduce = function (num1, num2) {
        return (num1 * 100 - num2 * 100) / 100;
    };
    Utils.numberMulti = function (num1, num2) {
        return (num1 * 100 * num2 * 100) / (100 * 100);
    };
    return Utils;
}());
exports.default = Utils;

cc._RF.pop();
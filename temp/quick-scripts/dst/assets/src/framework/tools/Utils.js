
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/tools/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE0aEJBLENBQUM7SUEzaEJHLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFFZixlQUFTLEdBQWhCLFVBQWlCLEdBQUc7UUFDaEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sc0JBQWdCLEdBQXZCLFVBQXdCLFNBQVM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLEVBQUUsU0FBQSxDQUFDO1lBQ1AsSUFBSSxNQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQzlCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLEVBQUUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7b0JBQzNELElBQUksT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksT0FBTyxFQUFFO3dCQUNoQyxPQUFPLElBQUksQ0FBQztxQkFDZjtpQkFDSjthQUNKO2lCQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLEVBQUUsR0FBRyxTQUFTLENBQUMs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TSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUNoRzthQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUNoRzthQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdB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R0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQTVoQkEsQUE0aEJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG4gICAgLy8gY2RlZ3Jlc3M6TnVtIE1hdGguUEkvMTgwLFxuICAgIC8vIGNhbmdsZToxODAvTWF0aC5QSSxcblxuICAgIHN0YXRpYyBlbW9qaTJTdHIoc3RyKSB7XG4gICAgICAgIHJldHVybiB1bmVzY2FwZShlc2NhcGUoc3RyKS5yZXBsYWNlKC9cXCV1RC57M30vZywgJycpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNFbW9qaUNoYXJhY3RlcihzdWJzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBocyA9IHN1YnN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgbGV0IGxzO1xuICAgICAgICAgICAgaWYgKDB4ZDgwMCA8PSBocyAmJiBocyA8PSAweGRiZmYpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Vic3RyaW5nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbHMgPSBzdWJzdHJpbmcuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1YyA9ICgoaHMgLSAweGQ4MDApICogMHg0MDApICsgKGxzIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICgweDFkMDAwIDw9IHVjICYmIHVjIDw9IDB4MWY3N2YpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdWJzdHJpbmcubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGxzID0gc3Vic3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgICAgIGlmIChscyA9PSAweDIwZTMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoMHgyMTAwIDw9IGhzICYmIGhzIDw9IDB4MjdmZikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDB4MkIwNSA8PSBocyAmJiBocyA8PSAweDJiMDcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgweDI5MzQgPD0gaHMgJiYgaHMgPD0gMHgyOTM1KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMHgzMjk3IDw9IGhzICYmIGhzIDw9IDB4MzI5OSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhzID09IDB4YTkgfHwgaHMgPT0gMHhhZSB8fCBocyA9PSAweDMwM2QgfHwgaHMgPT0gMHgzMDMwXG4gICAgICAgICAgICAgICAgICAgIHx8IGhzID09IDB4MmI1NSB8fCBocyA9PSAweDJiMWMgfHwgaHMgPT0gMHgyYjFiXG4gICAgICAgICAgICAgICAgICAgIHx8IGhzID09IDB4MmI1MCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aYr+WQpuWtl+espuS4suacieepuuagvFxuICAgIHN0YXRpYyBpc1N0clNwYWNlKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLmluZGV4T2YoJyAnKSA9PT0gLTE7XG4gICAgfVxuXG4gICAgLy/op5LluqbovazlvKfluqZcbiAgICBzdGF0aWMgYW5nbGVUb1BJKGRlZ3JlZXMpIHtcbiAgICAgICAgcmV0dXJuIGRlZ3JlZXMgKiBjYy5tYWNyby5SQUQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHBpVG9BbmdsZShyYWRpYW5zKSB7XG4gICAgICAgIHJldHVybiByYWRpYW5zICogY2MubWFjcm8uREVHO1xuICAgIH1cblxuICAgIC8v6I635b6X5Lik54K55LmL6Ze055qE6KeS5bqmXG4gICAgc3RhdGljIGdldFZlY0FuZ2xlKGN1cnJWZWMsIG5leHRWZWMpIHtcbiAgICAgICAgLy8gbGV0IHAxID0gKDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBsZXQgdmVjID0gY2MudjIobmV4dFZlYykuc3ViKGNjLnYyKGN1cnJWZWMpKTtcbiAgICAgICAgbGV0IGExID0gLU1hdGguYXRhbjIodmVjLnksIHZlYy54KTtcbiAgICAgICAgbGV0IHIxID0gYTEgKiBjYy5tYWNyby5ERUc7XG4gICAgICAgIHJldHVybiByMTtcbiAgICB9XG5cbiAgICAvL+aKiuS4gOS4quiKgueCueS4i+eahOWdkOagh+i9rOaIkOWFqOWxgOWdkOagh1xuICAgIHN0YXRpYyBjb252ZXJ0Tm9kZVRvV29ybGRTcGFjZShub2RlOiBjYy5Ob2RlLCBucG9zKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobnBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNjLnYyKCk7XG4gICAgfVxuXG4gICAgLy/miorkuIDkuKroioLngrnkuIvnmoTlnZDmoIfovazmiJDlj6bkuIDkuKroioLngrnnmoTlnZDmoIdcbiAgICBzdGF0aWMgY29udmVydE5vZGVUb05vZGVTcGFjZShub2RlLCB0YXJnZXRQYXJlbnQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcbiAgICAgICAgICAgIGlmICghIW5vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHdwb3MgPSBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5nZXRQb3NpdGlvbigpKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHRhcmdldFBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3cG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKCflnZDmoIfovazmjaLmnInpl67popgnKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDApO1xuICAgIH1cblxuICAgIC8v5oqK5YWo5bGA5Z2Q5qCH6L2s5oiQ5Y+m5LiA5Liq6IqC54K555qE5Z2Q5qCHXG4gICAgc3RhdGljIGNvbnZlcnRXb3JsZFRvTm9kZVNwYWNlKG5vZGUsIHdwb3MsIGlzUGFyZW50KSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XG4gICAgICAgICAgICBpZiAoISFpc1BhcmVudCAmJiBub2RlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3cG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdwb3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYy52MigwLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBuYW1lIGlzUGhvbmVOdW1lclxuICAgICAqIEBwYXJhbSBwaG9uZU51bSDnlLXor53lj7fnoIFcbiAgICAgKiDliKTmlq3kvKDlhaXnmoTmlbDlrZfmmK/lkKbnrKblkIjmiYvmnLrlj7fnoIHnmoTmoLzlvI9cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNQaG9uZW51bWJlcihwaG9uZU51bSkge1xuICAgICAgICBpZiAoISgvXjFbMzQ1NzhdXFxkezl9JC8udGVzdChwaG9uZU51bSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICogRnVuY3Rpb24gbmFtZSBnZXRTaG9ydE5hbWVcbiAgICAqIEBwYXJhbSBuYW1lIOeOqeWutuaYteensFxuICAgICog546p5a625Lit5paH5pi156ew5pyA5aSa5Y+q5pi+56S6NeS4quaxieWtl++8jOi2heWHuuWImeWcqOWQjumdouWKoOKAnC4uLuKAnSDkuIDkuKrkuK3mlocy5Liq5a2X56ymXG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0U2hvcnROYW1lKG5hbWUsIG1heENoYXI6IG51bWJlciA9IDEwKSB7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0cmxlbiA9IDA7XG4gICAgICAgIGxldCBzID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmFtZS5jaGFyQ29kZUF0KGkpID4gMTI4KSB7XG4gICAgICAgICAgICAgICAgc3RybGVuICs9IDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmxlbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcyArPSBuYW1lLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGlmIChzdHJsZW4gPj0gbWF4Q2hhcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCIuLi5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorqHnrpfkuKTngrnkuYvpl7TnmoTkuK3ngrksXG4gICAgICogY29lZmZpY2llbnQg6Led56a757O75pWwXG4gICAgICovXG4gICAgc3RhdGljIGNhbGN1bGF0aW9uTWlkUG9pbnQoYmVnaWFuUG9zOiBjYy5WZWMyLCBlbmRQb3M6IGNjLlZlYzIsIGNvZWZmaWNpZW50OiBudW1iZXIgPSAwLjUsIG9mZnNldFk6IG51bWJlciA9IDMwMCkge1xuICAgICAgICBsZXQgbmV3UG9zID0gYmVnaWFuUG9zO1xuICAgICAgICBsZXQgc3VieDogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHN1Ynk6IG51bWJlciA9IDA7XG4gICAgICAgIGlmIChiZWdpYW5Qb3MueCA8PSBlbmRQb3MueCAmJiBiZWdpYW5Qb3MueSA8PSBlbmRQb3MueSkge1xuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xuICAgICAgICB9IGVsc2UgaWYgKGJlZ2lhblBvcy54ID4gZW5kUG9zLnggJiYgYmVnaWFuUG9zLnkgPCBlbmRQb3MueSkge1xuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xuICAgICAgICB9IGVsc2UgaWYgKGJlZ2lhblBvcy54ID4gZW5kUG9zLnggJiYgYmVnaWFuUG9zLnkgPiBlbmRQb3MueSkge1xuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xuICAgICAgICB9IGVsc2UgaWYgKGJlZ2lhblBvcy54IDwgZW5kUG9zLnggJiYgYmVnaWFuUG9zLnkgPiBlbmRQb3MueSkge1xuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdQb3M7XG4gICAgfVxuXG5cbiAgICAvL+eUn+aIkOiMg+WbtOWGheeahOmaj+acuuaVsFxuICAgIHN0YXRpYyByYW5kU2VjdGlvbk51bShtaW5udW0sIG1heG51bSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbm51bSArIE1hdGgucmFuZG9tKCkgKiAobWF4bnVtIC0gbWlubnVtKSk7XG4gICAgfVxuICAgIC8v6I635b6X5pWw57uE5YaF55qE6ZqP5py65YC8XG4gICAgc3RhdGljIGdldFJhbmRvbUJ5QXJyKGFycikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJhbmRTZWN0aW9uTnVtKDAsIGFyci5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gYXJyW2luZGV4XTtcbiAgICB9XG4gICAgLy/nlJ/miJDljLrpl7TlhoXnmoTmlbDnu4RcbiAgICBzdGF0aWMgY3JlYXRlQXJyKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSBzdGFydEluZGV4OyBpbmRleCA8IGVuZEluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIOS7juaMh+WumuaVsOe7hOmaj+acuuWHuuWHoOS4quWAvOW5tue7hOaIkOaWsOaVsOe7hCjov5Tlm57lgLzkuLrljp/lhYPntKDnsbvlnospXG4gICAgKiBAcGFyYW0gYXJyOua6kOaVsOe7hFxuICAgICogQHBhcmFtIG51bTropoHlh6DkuKrpmo/mnLrlhYPntKBcbiAgICAqL1xuICAgIHN0YXRpYyByYW5kb21OZXdBcnIoYXJyOiBBcnJheTxhbnk+LCBudW06IG51bWJlcikge1xuICAgICAgICBsZXQgYXJyT2xkOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAgICAgYXJyT2xkID0gWy4uLmFycl07XG4gICAgICAgIGlmIChhcnJPbGQubGVuZ3RoIDw9IG51bSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyck9sZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXJyTmV3OiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IHRoaXMuZ2V0UmFuZG9tTnVtKDAsIGFyck9sZC5sZW5ndGggLSAxKTsvL+S6p+eUn+maj+acuuaVsOeUqOS9nOS4i+aghyBcbiAgICAgICAgICAgIGFyck5ldy5wdXNoKGFyck9sZFtyYW5kb21dKTtcbiAgICAgICAgICAgIGFyck9sZC5zcGxpY2UocmFuZG9tLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyTmV3O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bojIPlm7TlhoXpmo/mnLrmlbTmlbAo5YyF5ZCr5pyA5aSn5YC8KVxuICAgICAqIEBwYXJhbSBtaW4g5pyA5bCP5YC8XG4gICAgICogQHBhcmFtIG1heCDmnIDlpKflgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmFuZG9tTnVtKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgY3Jvc3NNdWwodjE6IGNjLlZlYzIsIHYyOiBjYy5WZWMyKSB7XG4gICAgICAgIHJldHVybiB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54O1xuICAgIH1cblxuXG4gICAgc3RhdGljIHF1YWRyYXRpYyhiZWdpbiwgYzEsIGVuZCwgdCkge1xuICAgICAgICBsZXQgcCA9IGNjLnYyKCk7XG4gICAgICAgIHAueCA9IGJlZ2luLnggKiAoMSAtIHQpICogKDEgLSB0KSArIGMxLnggKiAyICogdCAqICgxIC0gdCkgKyBlbmQueCAqIHQgKiB0O1xuICAgICAgICBwLnkgPSBiZWdpbi55ICogKDEgLSB0KSAqICgxIC0gdCkgKyBjMS55ICogMiAqIHQgKiAoMSAtIHQpICsgZW5kLnkgKiB0ICogdDtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgZXhjaGFuZ2UocDE6IGNjLlZlYzIsIHAyOiBjYy5WZWMyKSB7XG4gICAgICAgIGxldCBwID0gY2MudjIoKTtcbiAgICAgICAgcC54ID0gcDIueDtcbiAgICAgICAgcC55ID0gcDIueTtcbiAgICAgICAgcDIueCA9IHAxLng7XG4gICAgICAgIHAyLnkgPSBwMS55O1xuICAgICAgICBwMS54ID0gcC54O1xuICAgICAgICBwMS55ID0gcC55O1xuICAgIH1cblxuICAgIC8v5pWw57uE5Yig6Zmk5p+Q5LiA5Liq57Si5byV55qE5a+56LGhXG4gICAgLy9pbmRleCDlvIDlp4vntKLlvJVcbiAgICAvL251bSDliKDpmaTmlbDph48g6buY6K6k5Li6MeS4qlxuICAgIHN0YXRpYyBhcnJheVJlbW92ZShhcnI6IEFycmF5PGFueT4sIGluZGV4LCBudW0gPSAxKSB7XG4gICAgICAgIGxldCBpLCBsZW47XG4gICAgICAgIGZvciAoaSA9IGluZGV4ICsgbnVtLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGFycltpIC0gbnVtXSA9IGFycltpXTtcbiAgICAgICAgfVxuICAgICAgICBhcnIubGVuZ3RoID0gbGVuIC0gbnVtO1xuICAgIH1cblxuICAgIC8v6YCa6L+H5pWw57uE5Lit55qE5YC856e76Zmk5pWw57uEXG4gICAgc3RhdGljIGFycmF5UmVtb3ZlVmFsdWUoYXJyOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+LCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXJyW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlSZW1vdmUoYXJyLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aVsOe7hGNvcHlcbiAgICBzdGF0aWMgYXJyYXlDb3B5KHNvdXJjZUFycjogQXJyYXk8YW55PiwgZGVzdEFycjogQXJyYXk8YW55Pikge1xuICAgICAgICBpZiAoISFzb3VyY2VBcnIgJiYgISFkZXN0QXJyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc291cmNlQXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzb3VyY2VBcnJbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGRlc3RBcnIucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5LuO5pWw57uE5Lit6I635b6X5oyH5a6a5pWw6YeP77yM5ZCM5pe25pS55Y+Y5Y6f5pyJ55qE5pWw57uEXG4gICAgc3RhdGljIGFycmF5R2V0U3luYyhzb3VyY2VBcnI6IEFycmF5PGFueT4sIG51bTogbnVtYmVyID0gMSkge1xuICAgICAgICBsZXQgcmVzdWx0QXJyID0gW107XG4gICAgICAgIGlmIChudW0gPiBzb3VyY2VBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFycmF5Q29weShzb3VyY2VBcnIsIHJlc3VsdEFycik7XG4gICAgICAgICAgICBzb3VyY2VBcnIubGVuZ3RoID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkSW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvdXJjZUFyci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdEFyci5wdXNoKHNvdXJjZUFycltkSW5kZXhdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5UmVtb3ZlKHNvdXJjZUFyciwgZEluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0QXJyO1xuICAgIH1cblxuICAgIC8v5bmz5ruRXG4gICAgc3RhdGljIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYSArIHQgKiAoYiAtIGEpO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYXRjaEJnU2l6ZShiZzogY2MuTm9kZSkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChiZykpIHtcbiAgICAgICAgICAgIGJnLnNldFNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgbGV0IGh2YWx1ZSA9IGJnLndpZHRoO1xuICAgICAgICAgICAgaWYgKGJnLndpZHRoIDw9IDApIHtcbiAgICAgICAgICAgICAgICBodmFsdWUgPSBjYy52aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCkud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgICAgIGxldCBocmF0ZSA9IHNpemUud2lkdGggLyBodmFsdWU7XG4gICAgICAgICAgICBiZy5zZXRTY2FsZShocmF0ZSwgaHJhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGhyYXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG1hdGNoQmdIU2l6ZShiZzogY2MuTm9kZSkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChiZykpIHtcbiAgICAgICAgICAgIGJnLnNldFNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgbGV0IGh2YWx1ZSA9IGJnLmhlaWdodDtcbiAgICAgICAgICAgIGlmIChiZy5oZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGh2YWx1ZSA9IGNjLnZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICAgICAgICAgIGxldCBocmF0ZSA9IHNpemUuaGVpZ2h0IC8gaHZhbHVlO1xuICAgICAgICAgICAgYmcuc2V0U2NhbGUoaHJhdGUsIGhyYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBocmF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaKiuaVsOWtl+i9rOaIkDAxMDHnmoTmlbDnu4RcbiAgICAgKiBAcGFyYW0geyp9IG51bSBcbiAgICAgKiBAcGFyYW0geyp9IGNvdW50IFxuICAgICAqL1xuICAgIHN0YXRpYyBudW1iZXJUb0JpbmFyeShudW0sIGNvdW50KSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChudW0gPj4gaW5kZXggJiAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gYXJyIFxuICAgICAqL1xuICAgIHN0YXRpYyBiaW5hcnlBcnJUb051bShhcnIpIHtcbiAgICAgICAgaWYgKCEhYXJyKSB7XG4gICAgICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHN0ciArPSBhcnJbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MubG9nKHN0cik7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyLCAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmK9wY+aTjeS9nOW5s+WPsFxuICAgICAqL1xuICAgIHN0YXRpYyBpc1BjUGxhbnRGcm9tKCkge1xuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuQU5EUk9JRCB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5JUEhPTkUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflvpfllK/kuIBpZFxuICAgICAqIEBwYXJhbSBsZW4gXG4gICAgICogQHBhcmFtIHJhZGl4IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZW5VdWlkKGxlbiwgcmFkaXgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgY2hhcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnZ4eXonLnNwbGl0KCcnKTtcbiAgICAgICAgbGV0IHV1aWQgPSBbXSwgaTtcbiAgICAgICAgcmFkaXggPSByYWRpeCB8fCBjaGFycy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgLy8gQ29tcGFjdCBmb3JtXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHV1aWRbaV0gPSBjaGFyc1swIHwgTWF0aC5yYW5kb20oKSAqIHJhZGl4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJmYzQxMjIsIHZlcnNpb24gNCBmb3JtXG4gICAgICAgICAgICBsZXQgcjtcblxuICAgICAgICAgICAgLy8gcmZjNDEyMiByZXF1aXJlcyB0aGVzZSBjaGFyYWN0ZXJzXG4gICAgICAgICAgICB1dWlkWzhdID0gdXVpZFsxM10gPSB1dWlkWzE4XSA9IHV1aWRbMjNdID0gJy0nO1xuICAgICAgICAgICAgdXVpZFsxNF0gPSAnNCc7XG4gICAgICAgICAgICAvLyBGaWxsIGluIHJhbmRvbSBkYXRhLiAgQXQgaT09MTkgc2V0IHRoZSBoaWdoIGJpdHMgb2YgY2xvY2sgc2VxdWVuY2UgYXNcbiAgICAgICAgICAgIC8vIHBlciByZmM0MTIyLCBzZWMuIDQuMS41XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdXVpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICByID0gMCB8IE1hdGgucmFuZG9tKCkgKiAxNjtcbiAgICAgICAgICAgICAgICAgICAgdXVpZFtpXSA9IGNoYXJzWyhpID09IDE5KSA/IChyICYgMHgzKSB8IDB4OCA6IHJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXVpZC5qb2luKCcnKTtcbiAgICB9XG5cbiAgICAvKiogPHA+5Yik5pat57q/5q615piv5ZCm5Zyo55+p5b2i5YaFIDwvcD5cbiAgICAgICAgICog5YWI55yL57q/5q615omA5Zyo55u057q/5piv5ZCm5LiO55+p5b2i55u45Lqk77yMIFxuICAgICAgICAgKiDlpoLmnpzkuI3nm7jkuqTliJnov5Tlm55mYWxzZe+8jCBcbiAgICAgICAgICog5aaC5p6c55u45Lqk77yMIFxuICAgICAgICAgKiDliJnnnIvnur/mrrXnmoTkuKTkuKrngrnmmK/lkKblnKjnn6nlvaLnmoTlkIzkuIDovrnvvIjljbPkuKTngrnnmoR4KHkp5Z2Q5qCH6YO95q+U55+p5b2i55qE5bCPeCh5KeWdkOagh+Wwj++8jOaIluiAheWkp++8iSwgXG4gICAgICAgICAqIOiLpeWcqOWQjOS4gOi+ueWImei/lOWbnmZhbHNl77yMIFxuICAgICAgICAgKiDlkKbliJnlsLHmmK/nm7jkuqTnmoTmg4XlhrXjgIJcbiAgICAgICAgICogQHBhcmFtIGxpbmVQb2ludFgxIOe6v+autei1t+Wni+eCuXjlnZDmoIcgXG4gICAgICAgICAqIEBwYXJhbSBsaW5lUG9pbnRZMSDnur/mrrXotbflp4vngrl55Z2Q5qCHIFxuICAgICAgICAgKiBAcGFyYW0gbGluZVBvaW50WDIg57q/5q6157uT5p2f54K5eOWdkOaghyBcbiAgICAgICAgICogQHBhcmFtIGxpbmVQb2ludFkyIOe6v+autee7k+adn+eCuXnlnZDmoIcgXG4gICAgICAgICAqIEBwYXJhbSByZWN0YW5nbGVMZWZ0VG9wWCDnn6nlvaLlt6bkuIrngrl45Z2Q5qCHIFxuICAgICAgICAgKiBAcGFyYW0gcmVjdGFuZ2xlTGVmdFRvcFkg55+p5b2i5bem5LiK54K5eeWdkOaghyBcbiAgICAgICAgICogQHBhcmFtIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCDnn6nlvaLlj7PkuIvngrl45Z2Q5qCHIFxuICAgICAgICAgKiBAcGFyYW0gcmVjdGFuZ2xlUmlnaHRCb3R0b21ZIOefqeW9ouWPs+S4i+eCuXnlnZDmoIcgXG4gICAgICAgICAqIEByZXR1cm4g5piv5ZCm55u45LqkXG4gICAgICAgICAqL1xuICAgIHN0YXRpYyBpc0xpbmVJbnRlcnNlY3RSZWN0YW5nbGUobGluZVBvaW50WDE6IG51bWJlciwgbGluZVBvaW50WTE6IG51bWJlciwgbGluZVBvaW50WDI6IG51bWJlciwgbGluZVBvaW50WTI6IG51bWJlcixcbiAgICAgICAgcmVjdGFuZ2xlTGVmdFRvcFg6IG51bWJlcixcbiAgICAgICAgcmVjdGFuZ2xlTGVmdFRvcFk6IG51bWJlcixcbiAgICAgICAgcmVjdGFuZ2xlUmlnaHRCb3R0b21YOiBudW1iZXIsXG4gICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBsaW5lSGVpZ2h0OiBudW1iZXIgPSBsaW5lUG9pbnRZMSAtIGxpbmVQb2ludFkyO1xuICAgICAgICBsZXQgbGluZVdpZHRoOiBudW1iZXIgPSBsaW5lUG9pbnRYMiAtIGxpbmVQb2ludFgxOyAgLy8g6K6h566X5Y+J5LmYIFxuICAgICAgICBsZXQgYzogbnVtYmVyID0gbGluZVBvaW50WDEgKiBsaW5lUG9pbnRZMiAtIGxpbmVQb2ludFgyICogbGluZVBvaW50WTE7XG4gICAgICAgIGlmICgobGluZUhlaWdodCAqIHJlY3RhbmdsZUxlZnRUb3BYICsgbGluZVdpZHRoICogcmVjdGFuZ2xlTGVmdFRvcFkgKyBjID49IDAgJiYgbGluZUhlaWdodCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCArIGxpbmVXaWR0aCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSArIGMgPD0gMClcbiAgICAgICAgICAgIHx8IChsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlTGVmdFRvcFggKyBsaW5lV2lkdGggKiByZWN0YW5nbGVMZWZ0VG9wWSArIGMgPD0gMCAmJiBsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlUmlnaHRCb3R0b21YICsgbGluZVdpZHRoICogcmVjdGFuZ2xlUmlnaHRCb3R0b21ZICsgYyA+PSAwKVxuICAgICAgICAgICAgfHwgKGxpbmVIZWlnaHQgKiByZWN0YW5nbGVMZWZ0VG9wWCArIGxpbmVXaWR0aCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSArIGMgPj0gMCAmJiBsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlUmlnaHRCb3R0b21YICsgbGluZVdpZHRoICogcmVjdGFuZ2xlTGVmdFRvcFkgKyBjIDw9IDApXG4gICAgICAgICAgICB8fCAobGluZUhlaWdodCAqIHJlY3RhbmdsZUxlZnRUb3BYICsgbGluZVdpZHRoICogcmVjdGFuZ2xlUmlnaHRCb3R0b21ZICsgYyA8PSAwICYmIGxpbmVIZWlnaHQgKiByZWN0YW5nbGVSaWdodEJvdHRvbVggKyBsaW5lV2lkdGggKiByZWN0YW5nbGVMZWZ0VG9wWSArIGMgPj0gMCkpIHtcblxuICAgICAgICAgICAgaWYgKHJlY3RhbmdsZUxlZnRUb3BYID4gcmVjdGFuZ2xlUmlnaHRCb3R0b21YKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXA6IG51bWJlciA9IHJlY3RhbmdsZUxlZnRUb3BYO1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZUxlZnRUb3BYID0gcmVjdGFuZ2xlUmlnaHRCb3R0b21YO1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjdGFuZ2xlTGVmdFRvcFkgPCByZWN0YW5nbGVSaWdodEJvdHRvbVkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcDE6IG51bWJlciA9IHJlY3RhbmdsZUxlZnRUb3BZO1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZUxlZnRUb3BZID0gcmVjdGFuZ2xlUmlnaHRCb3R0b21ZO1xuICAgICAgICAgICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSA9IHRlbXAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChsaW5lUG9pbnRYMSA8IHJlY3RhbmdsZUxlZnRUb3BYICYmIGxpbmVQb2ludFgyIDwgcmVjdGFuZ2xlTGVmdFRvcFgpXG4gICAgICAgICAgICAgICAgfHwgKGxpbmVQb2ludFgxID4gcmVjdGFuZ2xlUmlnaHRCb3R0b21YICYmIGxpbmVQb2ludFgyID4gcmVjdGFuZ2xlUmlnaHRCb3R0b21YKVxuICAgICAgICAgICAgICAgIHx8IChsaW5lUG9pbnRZMSA+IHJlY3RhbmdsZUxlZnRUb3BZICYmIGxpbmVQb2ludFkyID4gcmVjdGFuZ2xlTGVmdFRvcFkpXG4gICAgICAgICAgICAgICAgfHwgKGxpbmVQb2ludFkxIDwgcmVjdGFuZ2xlUmlnaHRCb3R0b21ZICYmIGxpbmVQb2ludFkyIDwgcmVjdGFuZ2xlUmlnaHRCb3R0b21ZKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlLHmhaLliLDlv6tcbiAgICAgKiBAcGFyYW0gc3RhcnQgXG4gICAgICogQHBhcmFtIGVuZCBcbiAgICAgKiBAcGFyYW0gZWFzaW5nIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHN0YXRpYyBlYXNlSW4oc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGVhc2luZzogbnVtYmVyID0gMC4xKSB7XG4gICAgICAgIHN0YXJ0ID0gc3RhcnQgLSAoc3RhcnQgLSBlbmQpICogZWFzaW5nO1xuICAgICAgICByZXR1cm4gc3RhcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55Sx5b+r5Yiw5oWiXG4gICAgICogQHBhcmFtIHN0YXJ0IFxuICAgICAqIEBwYXJhbSBlbmQgXG4gICAgICogQHBhcmFtIGVhc2luZyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZWFzZU91dChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZWFzaW5nOiBudW1iZXIgPSAwLjEpIHtcbiAgICAgICAgc3RhcnQgPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiBlYXNpbmc7XG4gICAgICAgIHJldHVybiBzdGFydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvZPliY3mlbDlrZfmmK/lkKbml7bkuIDkuKrotKjmlbBcbiAgICAgKiDooqsx5ZKM6Ieq5bex5pW06ZmkXG4gICAgICogQHBhcmFtIG51bSBcbiAgICAgKi9cbiAgICBzdGF0aWMgaXNQcmltZShudW06IG51bWJlcikge1xuICAgICAgICBsZXQgc3F1cnROdW0gPSBNYXRoLmZsb29yKE1hdGguc3FydChudW0pKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAyOyBpbmRleCA8IG51bTsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKG51bSAlIGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5om+5Yiw6Led56a76L+Z5Liq5pWw5a2X5pyA6L+R55qE6LSo5pWw77yI6LSo5pWw55So5LqO6ZqP5py65YiG5biD5Lit77yJXG4gICAgICogQHBhcmFtIG51bSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJpbWUobnVtOiBudW1iZXIpIHtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzUHJpbWUobnVtKSkge1xuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlPFQ+KEM6IHsgbmV3KCk6IFQgfSk6IFQge1xuICAgICAgICByZXR1cm4gbmV3IEMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpgILphY3oioLngrnliLDnm7jlr7nkuo7oiJ7lj7DnmoTnmoTovrnop5LkvY3nva5cbiAgICAgKiBAcGFyYW0gbm9kZSBcbiAgICAgKiBAcGFyYW0gYm9yZCBcbiAgICAgKiBAcGFyYW0gb2Zmc2V0WCBcbiAgICAgKiBAcGFyYW0gb2Zmc2V0WSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZml0VG9Cb2FyZChub2RlOiBjYy5Ob2RlLCBib3JkOiBzdHJpbmcsIG9mZnNldFg6IG51bWJlciA9IDAsIG9mZnNldFk6IG51bWJlciA9IDApIHtcbiAgICAgICAgbGV0IHNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgaWYgKGJvcmQgPT0gJ3RsJykge1xuICAgICAgICAgICAgbm9kZS54ID0gLXNpemUud2lkdGggLyAyICsgbm9kZS53aWR0aCAvIDIgKyBvZmZzZXRYO1xuICAgICAgICAgICAgbm9kZS55ID0gbm9kZS5oZWlnaHQgLyAyIC0gbm9kZS5oZWlnaHQgLyAyICsgb2Zmc2V0WTtcbiAgICAgICAgfSBlbHNlIGlmIChib3JkID09ICd0cicpIHtcbiAgICAgICAgICAgIG5vZGUueCA9IHNpemUud2lkdGggLyAyIC0gbm9kZS53aWR0aCAvIDIgKyBvZmZzZXRYO1xuICAgICAgICAgICAgbm9kZS55ID0gbm9kZS5oZWlnaHQgLyAyIC0gbm9kZS5oZWlnaHQgLyAyICsgb2Zmc2V0WTtcbiAgICAgICAgfSBlbHNlIGlmIChib3JkID09ICdkbCcpIHtcblxuICAgICAgICAgICAgbm9kZS54ID0gLXNpemUud2lkdGggLyAyICsgbm9kZS53aWR0aCAvIDIgKyBvZmZzZXRYO1xuICAgICAgICAgICAgbm9kZS55ID0gLW5vZGUuaGVpZ2h0IC8gMiArIG5vZGUuaGVpZ2h0IC8gMiArIG9mZnNldFk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9yZCA9PSAnZHInKSB7XG4gICAgICAgICAgICBub2RlLnggPSBzaXplLndpZHRoIC8gMiAtIG5vZGUud2lkdGggLyAyICsgb2Zmc2V0WDtcbiAgICAgICAgICAgIG5vZGUueSA9IC1ub2RlLmhlaWdodCAvIDIgKyBub2RlLmhlaWdodCAvIDIgKyBvZmZzZXRZO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi/lOWbnuW4p+aVsOeUqOaXtlxuICAgICAqIEBwYXJhbSBudW1cbiAgICAgKi9cbiAgICBzdGF0aWMgX0ZUKG51bTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW0gKiAwLjAzMzMzMzM7XG4gICAgfVxuICAgIHN0YXRpYyBpc1VuZGVmaW5lZChvYmo6IGFueSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PSBcInVuZGVmaW5lZFwiO1xuICAgIH1cbiAgICBzdGF0aWMgbnVtYmVyUGx1cyhudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAobnVtMSAqIDEwMCArIG51bTIgKiAxMDApIC8gMTAwO1xuICAgIH1cbiAgICBzdGF0aWMgbnVtYmVyUmVkdWNlKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIChudW0xICogMTAwIC0gbnVtMiAqIDEwMCkgLyAxMDA7XG4gICAgfVxuICAgIHN0YXRpYyBudW1iZXJNdWx0aShudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAobnVtMSAqIDEwMCAqIG51bTIgKiAxMDApIC8gKDEwMCAqIDEwMCk7XG4gICAgfVxufVxuIl19

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
    Utils.returnTime = function () {
        return new Date().getTime();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUEraEJBLENBQUM7SUE5aEJHLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFFZixlQUFTLEdBQWhCLFVBQWlCLEdBQUc7UUFDaEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sc0JBQWdCLEdBQXZCLFVBQXdCLFNBQVM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLEVBQUUsU0FBQSxDQUFDO1lBQ1AsSUFBSSxNQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxNQUFNLEVBQUU7Z0JBQzlCLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLEVBQUUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7b0JBQzNELElBQUksT0FBTyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksT0FBTyxFQUFFO3dCQUNoQyxPQUFPLElBQUksQ0FBQztxQkFDZjtpQkFDSjthQUNKO2lCQUFNLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLEVBQUUsR0FBRyxTQUFTLENBQUMs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TSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUNoRzthQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUNoRzthQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUN6RCxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdB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ekMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0EvaEJBLEFBK2hCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xyXG4gICAgLy8gY2RlZ3Jlc3M6TnVtIE1hdGguUEkvMTgwLFxyXG4gICAgLy8gY2FuZ2xlOjE4MC9NYXRoLlBJLFxyXG5cclxuICAgIHN0YXRpYyBlbW9qaTJTdHIoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZXNjYXBlKGVzY2FwZShzdHIpLnJlcGxhY2UoL1xcJXVELnszfS9nLCAnJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0Vtb2ppQ2hhcmFjdGVyKHN1YnN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBocyA9IHN1YnN0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBsZXQgbHM7XHJcbiAgICAgICAgICAgIGlmICgweGQ4MDAgPD0gaHMgJiYgaHMgPD0gMHhkYmZmKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Vic3RyaW5nLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBscyA9IHN1YnN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdWMgPSAoKGhzIC0gMHhkODAwKSAqIDB4NDAwKSArIChscyAtIDB4ZGMwMCkgKyAweDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgweDFkMDAwIDw9IHVjICYmIHVjIDw9IDB4MWY3N2YpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN1YnN0cmluZy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBscyA9IHN1YnN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChscyA9PSAweDIwZTMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgweDIxMDAgPD0gaHMgJiYgaHMgPD0gMHgyN2ZmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDB4MkIwNSA8PSBocyAmJiBocyA8PSAweDJiMDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoMHgyOTM0IDw9IGhzICYmIGhzIDw9IDB4MjkzNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgweDMyOTcgPD0gaHMgJiYgaHMgPD0gMHgzMjk5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhzID09IDB4YTkgfHwgaHMgPT0gMHhhZSB8fCBocyA9PSAweDMwM2QgfHwgaHMgPT0gMHgzMDMwXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgaHMgPT0gMHgyYjU1IHx8IGhzID09IDB4MmIxYyB8fCBocyA9PSAweDJiMWJcclxuICAgICAgICAgICAgICAgICAgICB8fCBocyA9PSAweDJiNTApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aYr+WQpuWtl+espuS4suacieepuuagvFxyXG4gICAgc3RhdGljIGlzU3RyU3BhY2Uoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKCcgJykgPT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6KeS5bqm6L2s5byn5bqmXHJcbiAgICBzdGF0aWMgYW5nbGVUb1BJKGRlZ3JlZXMpIHtcclxuICAgICAgICByZXR1cm4gZGVncmVlcyAqIGNjLm1hY3JvLlJBRDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGlUb0FuZ2xlKHJhZGlhbnMpIHtcclxuICAgICAgICByZXR1cm4gcmFkaWFucyAqIGNjLm1hY3JvLkRFRztcclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+W+l+S4pOeCueS5i+mXtOeahOinkuW6plxyXG4gICAgc3RhdGljIGdldFZlY0FuZ2xlKGN1cnJWZWMsIG5leHRWZWMpIHtcclxuICAgICAgICAvLyBsZXQgcDEgPSAoMTgwIC8gTWF0aC5QSSk7XHJcbiAgICAgICAgbGV0IHZlYyA9IGNjLnYyKG5leHRWZWMpLnN1YihjYy52MihjdXJyVmVjKSk7XHJcbiAgICAgICAgbGV0IGExID0gLU1hdGguYXRhbjIodmVjLnksIHZlYy54KTtcclxuICAgICAgICBsZXQgcjEgPSBhMSAqIGNjLm1hY3JvLkRFRztcclxuICAgICAgICByZXR1cm4gcjE7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miorkuIDkuKroioLngrnkuIvnmoTlnZDmoIfovazmiJDlhajlsYDlnZDmoIdcclxuICAgIHN0YXRpYyBjb252ZXJ0Tm9kZVRvV29ybGRTcGFjZShub2RlOiBjYy5Ob2RlLCBucG9zKSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKG5wb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2MudjIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aKiuS4gOS4quiKgueCueS4i+eahOWdkOagh+i9rOaIkOWPpuS4gOS4quiKgueCueeahOWdkOagh1xyXG4gICAgc3RhdGljIGNvbnZlcnROb2RlVG9Ob2RlU3BhY2Uobm9kZSwgdGFyZ2V0UGFyZW50KSB7XHJcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgaWYgKCEhbm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB3cG9zID0gbm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGFyZ2V0UGFyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRQYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod3Bvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKCflnZDmoIfovazmjaLmnInpl67popgnKTtcclxuICAgICAgICByZXR1cm4gY2MudjIoMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/miorlhajlsYDlnZDmoIfovazmiJDlj6bkuIDkuKroioLngrnnmoTlnZDmoIdcclxuICAgIHN0YXRpYyBjb252ZXJ0V29ybGRUb05vZGVTcGFjZShub2RlLCB3cG9zLCBpc1BhcmVudCkge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIGlmICghIWlzUGFyZW50ICYmIG5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod3Bvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod3Bvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy52MigwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIG5hbWUgaXNQaG9uZU51bWVyXHJcbiAgICAgKiBAcGFyYW0gcGhvbmVOdW0g55S16K+d5Y+356CBXHJcbiAgICAgKiDliKTmlq3kvKDlhaXnmoTmlbDlrZfmmK/lkKbnrKblkIjmiYvmnLrlj7fnoIHnmoTmoLzlvI9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzUGhvbmVudW1iZXIocGhvbmVOdW0pIHtcclxuICAgICAgICBpZiAoISgvXjFbMzQ1NzhdXFxkezl9JC8udGVzdChwaG9uZU51bSkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogRnVuY3Rpb24gbmFtZSBnZXRTaG9ydE5hbWVcclxuICAgICogQHBhcmFtIG5hbWUg546p5a625pi156ewXHJcbiAgICAqIOeOqeWutuS4reaWh+aYteensOacgOWkmuWPquaYvuekujXkuKrmsYnlrZfvvIzotoXlh7rliJnlnKjlkI7pnaLliqDigJwuLi7igJ0g5LiA5Liq5Lit5paHMuS4quWtl+esplxyXG4gICAgKi9cclxuICAgIHN0YXRpYyBnZXRTaG9ydE5hbWUobmFtZSwgbWF4Q2hhcjogbnVtYmVyID0gMTApIHtcclxuICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHJsZW4gPSAwO1xyXG4gICAgICAgIGxldCBzID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUuY2hhckNvZGVBdChpKSA+IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgc3RybGVuICs9IDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHJsZW4rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzICs9IG5hbWUuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICBpZiAoc3RybGVuID49IG1heENoYXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgXCIuLi5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+S4pOeCueS5i+mXtOeahOS4reeCuSxcclxuICAgICAqIGNvZWZmaWNpZW50IOi3neemu+ezu+aVsFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY2FsY3VsYXRpb25NaWRQb2ludChiZWdpYW5Qb3M6IGNjLlZlYzIsIGVuZFBvczogY2MuVmVjMiwgY29lZmZpY2llbnQ6IG51bWJlciA9IDAuNSwgb2Zmc2V0WTogbnVtYmVyID0gMzAwKSB7XHJcbiAgICAgICAgbGV0IG5ld1BvcyA9IGJlZ2lhblBvcztcclxuICAgICAgICBsZXQgc3VieDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgc3VieTogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAoYmVnaWFuUG9zLnggPD0gZW5kUG9zLnggJiYgYmVnaWFuUG9zLnkgPD0gZW5kUG9zLnkpIHtcclxuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XHJcbiAgICAgICAgICAgIHN1YnkgPSBlbmRQb3MueSAtIGJlZ2lhblBvcy55O1xyXG4gICAgICAgICAgICBuZXdQb3MgPSBjYy52MihiZWdpYW5Qb3MueCArIHN1YnggKiBjb2VmZmljaWVudCwgYmVnaWFuUG9zLnkgKyBzdWJ5ICogY29lZmZpY2llbnQgKyBvZmZzZXRZKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJlZ2lhblBvcy54ID4gZW5kUG9zLnggJiYgYmVnaWFuUG9zLnkgPCBlbmRQb3MueSkge1xyXG4gICAgICAgICAgICBzdWJ4ID0gZW5kUG9zLnggLSBiZWdpYW5Qb3MueDtcclxuICAgICAgICAgICAgc3VieSA9IGVuZFBvcy55IC0gYmVnaWFuUG9zLnk7XHJcbiAgICAgICAgICAgIG5ld1BvcyA9IGNjLnYyKGJlZ2lhblBvcy54ICsgc3VieCAqIGNvZWZmaWNpZW50LCBiZWdpYW5Qb3MueSArIHN1YnkgKiBjb2VmZmljaWVudCArIG9mZnNldFkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYmVnaWFuUG9zLnggPiBlbmRQb3MueCAmJiBiZWdpYW5Qb3MueSA+IGVuZFBvcy55KSB7XHJcbiAgICAgICAgICAgIHN1YnggPSBlbmRQb3MueCAtIGJlZ2lhblBvcy54O1xyXG4gICAgICAgICAgICBzdWJ5ID0gZW5kUG9zLnkgLSBiZWdpYW5Qb3MueTtcclxuICAgICAgICAgICAgbmV3UG9zID0gY2MudjIoYmVnaWFuUG9zLnggKyBzdWJ4ICogY29lZmZpY2llbnQsIGJlZ2lhblBvcy55ICsgc3VieSAqIGNvZWZmaWNpZW50ICsgb2Zmc2V0WSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChiZWdpYW5Qb3MueCA8IGVuZFBvcy54ICYmIGJlZ2lhblBvcy55ID4gZW5kUG9zLnkpIHtcclxuICAgICAgICAgICAgc3VieCA9IGVuZFBvcy54IC0gYmVnaWFuUG9zLng7XHJcbiAgICAgICAgICAgIHN1YnkgPSBlbmRQb3MueSAtIGJlZ2lhblBvcy55O1xyXG4gICAgICAgICAgICBuZXdQb3MgPSBjYy52MihiZWdpYW5Qb3MueCArIHN1YnggKiBjb2VmZmljaWVudCwgYmVnaWFuUG9zLnkgKyBzdWJ5ICogY29lZmZpY2llbnQgKyBvZmZzZXRZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1BvcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/nlJ/miJDojIPlm7TlhoXnmoTpmo/mnLrmlbBcclxuICAgIHN0YXRpYyByYW5kU2VjdGlvbk51bShtaW5udW0sIG1heG51bSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWlubnVtICsgTWF0aC5yYW5kb20oKSAqIChtYXhudW0gLSBtaW5udW0pKTtcclxuICAgIH1cclxuICAgIC8v6I635b6X5pWw57uE5YaF55qE6ZqP5py65YC8XHJcbiAgICBzdGF0aWMgZ2V0UmFuZG9tQnlBcnIoYXJyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5yYW5kU2VjdGlvbk51bSgwLCBhcnIubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gYXJyW2luZGV4XTtcclxuICAgIH1cclxuICAgIC8v55Sf5oiQ5Yy66Ze05YaF55qE5pWw57uEXHJcbiAgICBzdGF0aWMgY3JlYXRlQXJyKHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gc3RhcnRJbmRleDsgaW5kZXggPCBlbmRJbmRleDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOS7juaMh+WumuaVsOe7hOmaj+acuuWHuuWHoOS4quWAvOW5tue7hOaIkOaWsOaVsOe7hCjov5Tlm57lgLzkuLrljp/lhYPntKDnsbvlnospXHJcbiAgICAqIEBwYXJhbSBhcnI65rqQ5pWw57uEXHJcbiAgICAqIEBwYXJhbSBudW066KaB5Yeg5Liq6ZqP5py65YWD57SgXHJcbiAgICAqL1xyXG4gICAgc3RhdGljIHJhbmRvbU5ld0FycihhcnI6IEFycmF5PGFueT4sIG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGFyck9sZDogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgYXJyT2xkID0gWy4uLmFycl07XHJcbiAgICAgICAgaWYgKGFyck9sZC5sZW5ndGggPD0gbnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJPbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhcnJOZXc6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IHRoaXMuZ2V0UmFuZG9tTnVtKDAsIGFyck9sZC5sZW5ndGggLSAxKTsvL+S6p+eUn+maj+acuuaVsOeUqOS9nOS4i+aghyBcclxuICAgICAgICAgICAgYXJyTmV3LnB1c2goYXJyT2xkW3JhbmRvbV0pO1xyXG4gICAgICAgICAgICBhcnJPbGQuc3BsaWNlKHJhbmRvbSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJOZXc7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluiMg+WbtOWGhemaj+acuuaVtOaVsCjljIXlkKvmnIDlpKflgLwpXHJcbiAgICAgKiBAcGFyYW0gbWluIOacgOWwj+WAvFxyXG4gICAgICogQHBhcmFtIG1heCDmnIDlpKflgLxcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFJhbmRvbU51bShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBjcm9zc011bCh2MTogY2MuVmVjMiwgdjI6IGNjLlZlYzIpIHtcclxuICAgICAgICByZXR1cm4gdjEueCAqIHYyLnkgLSB2MS55ICogdjIueDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHF1YWRyYXRpYyhiZWdpbiwgYzEsIGVuZCwgdCkge1xyXG4gICAgICAgIGxldCBwID0gY2MudjIoKTtcclxuICAgICAgICBwLnggPSBiZWdpbi54ICogKDEgLSB0KSAqICgxIC0gdCkgKyBjMS54ICogMiAqIHQgKiAoMSAtIHQpICsgZW5kLnggKiB0ICogdDtcclxuICAgICAgICBwLnkgPSBiZWdpbi55ICogKDEgLSB0KSAqICgxIC0gdCkgKyBjMS55ICogMiAqIHQgKiAoMSAtIHQpICsgZW5kLnkgKiB0ICogdDtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGV4Y2hhbmdlKHAxOiBjYy5WZWMyLCBwMjogY2MuVmVjMikge1xyXG4gICAgICAgIGxldCBwID0gY2MudjIoKTtcclxuICAgICAgICBwLnggPSBwMi54O1xyXG4gICAgICAgIHAueSA9IHAyLnk7XHJcbiAgICAgICAgcDIueCA9IHAxLng7XHJcbiAgICAgICAgcDIueSA9IHAxLnk7XHJcbiAgICAgICAgcDEueCA9IHAueDtcclxuICAgICAgICBwMS55ID0gcC55O1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pWw57uE5Yig6Zmk5p+Q5LiA5Liq57Si5byV55qE5a+56LGhXHJcbiAgICAvL2luZGV4IOW8gOWni+e0ouW8lVxyXG4gICAgLy9udW0g5Yig6Zmk5pWw6YePIOm7mOiupOS4ujHkuKpcclxuICAgIHN0YXRpYyBhcnJheVJlbW92ZShhcnI6IEFycmF5PGFueT4sIGluZGV4LCBudW0gPSAxKSB7XHJcbiAgICAgICAgbGV0IGksIGxlbjtcclxuICAgICAgICBmb3IgKGkgPSBpbmRleCArIG51bSwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFycltpIC0gbnVtXSA9IGFycltpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJyLmxlbmd0aCA9IGxlbiAtIG51bTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mAmui/h+aVsOe7hOS4reeahOWAvOenu+mZpOaVsOe7hFxyXG4gICAgc3RhdGljIGFycmF5UmVtb3ZlVmFsdWUoYXJyOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+LCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycltpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVJlbW92ZShhcnIsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5pWw57uEY29weVxyXG4gICAgc3RhdGljIGFycmF5Q29weShzb3VyY2VBcnI6IEFycmF5PGFueT4sIGRlc3RBcnI6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBpZiAoISFzb3VyY2VBcnIgJiYgISFkZXN0QXJyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzb3VyY2VBcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gc291cmNlQXJyW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGRlc3RBcnIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S7juaVsOe7hOS4reiOt+W+l+aMh+WumuaVsOmHj++8jOWQjOaXtuaUueWPmOWOn+acieeahOaVsOe7hFxyXG4gICAgc3RhdGljIGFycmF5R2V0U3luYyhzb3VyY2VBcnI6IEFycmF5PGFueT4sIG51bTogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGxldCByZXN1bHRBcnIgPSBbXTtcclxuICAgICAgICBpZiAobnVtID4gc291cmNlQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5Q29weShzb3VyY2VBcnIsIHJlc3VsdEFycik7XHJcbiAgICAgICAgICAgIHNvdXJjZUFyci5sZW5ndGggPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBkSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb3VyY2VBcnIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEFyci5wdXNoKHNvdXJjZUFycltkSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlSZW1vdmUoc291cmNlQXJyLCBkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy/lubPmu5FcclxuICAgIHN0YXRpYyBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB0OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gYSArIHQgKiAoYiAtIGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYXRjaEJnU2l6ZShiZzogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGJnKSkge1xyXG4gICAgICAgICAgICBiZy5zZXRTY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgbGV0IGh2YWx1ZSA9IGJnLndpZHRoO1xyXG4gICAgICAgICAgICBpZiAoYmcud2lkdGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaHZhbHVlID0gY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xyXG4gICAgICAgICAgICBsZXQgaHJhdGUgPSBzaXplLndpZHRoIC8gaHZhbHVlO1xyXG4gICAgICAgICAgICBiZy5zZXRTY2FsZShocmF0ZSwgaHJhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaHJhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYXRjaEJnSFNpemUoYmc6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoY2MuaXNWYWxpZChiZykpIHtcclxuICAgICAgICAgICAgYmcuc2V0U2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgIGxldCBodmFsdWUgPSBiZy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChiZy5oZWlnaHQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaHZhbHVlID0gY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICAgICAgbGV0IGhyYXRlID0gc2l6ZS5oZWlnaHQgLyBodmFsdWU7XHJcbiAgICAgICAgICAgIGJnLnNldFNjYWxlKGhyYXRlLCBocmF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBocmF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiormlbDlrZfovazmiJAwMTAx55qE5pWw57uEXHJcbiAgICAgKiBAcGFyYW0geyp9IG51bSBcclxuICAgICAqIEBwYXJhbSB7Kn0gY291bnQgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBudW1iZXJUb0JpbmFyeShudW0sIGNvdW50KSB7XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChudW0gPj4gaW5kZXggJiAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSBhcnIgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiaW5hcnlBcnJUb051bShhcnIpIHtcclxuICAgICAgICBpZiAoISFhcnIpIHtcclxuICAgICAgICAgICAgbGV0IHN0ciA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IGFycltpbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKHN0cik7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChzdHIsIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYr3Bj5pON5L2c5bmz5Y+wXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1BjUGxhbnRGcm9tKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5BTkRST0lEIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLklQSE9ORSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5ZSv5LiAaWRcclxuICAgICAqIEBwYXJhbSBsZW4gXHJcbiAgICAgKiBAcGFyYW0gcmFkaXggXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5VdWlkKGxlbiwgcmFkaXgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjaGFycyA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2dnh5eicuc3BsaXQoJycpO1xyXG4gICAgICAgIGxldCB1dWlkID0gW10sIGk7XHJcbiAgICAgICAgcmFkaXggPSByYWRpeCB8fCBjaGFycy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChsZW4pIHtcclxuICAgICAgICAgICAgLy8gQ29tcGFjdCBmb3JtXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykgdXVpZFtpXSA9IGNoYXJzWzAgfCBNYXRoLnJhbmRvbSgpICogcmFkaXhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHJmYzQxMjIsIHZlcnNpb24gNCBmb3JtXHJcbiAgICAgICAgICAgIGxldCByO1xyXG5cclxuICAgICAgICAgICAgLy8gcmZjNDEyMiByZXF1aXJlcyB0aGVzZSBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgIHV1aWRbOF0gPSB1dWlkWzEzXSA9IHV1aWRbMThdID0gdXVpZFsyM10gPSAnLSc7XHJcbiAgICAgICAgICAgIHV1aWRbMTRdID0gJzQnO1xyXG4gICAgICAgICAgICAvLyBGaWxsIGluIHJhbmRvbSBkYXRhLiAgQXQgaT09MTkgc2V0IHRoZSBoaWdoIGJpdHMgb2YgY2xvY2sgc2VxdWVuY2UgYXNcclxuICAgICAgICAgICAgLy8gcGVyIHJmYzQxMjIsIHNlYy4gNC4xLjVcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDM2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdXVpZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSAwIHwgTWF0aC5yYW5kb20oKSAqIDE2O1xyXG4gICAgICAgICAgICAgICAgICAgIHV1aWRbaV0gPSBjaGFyc1soaSA9PSAxOSkgPyAociAmIDB4MykgfCAweDggOiByXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXVpZC5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogPHA+5Yik5pat57q/5q615piv5ZCm5Zyo55+p5b2i5YaFIDwvcD5cclxuICAgICAgICAgKiDlhYjnnIvnur/mrrXmiYDlnKjnm7Tnur/mmK/lkKbkuI7nn6nlvaLnm7jkuqTvvIwgXHJcbiAgICAgICAgICog5aaC5p6c5LiN55u45Lqk5YiZ6L+U5ZueZmFsc2XvvIwgXHJcbiAgICAgICAgICog5aaC5p6c55u45Lqk77yMIFxyXG4gICAgICAgICAqIOWImeeci+e6v+auteeahOS4pOS4queCueaYr+WQpuWcqOefqeW9oueahOWQjOS4gOi+ue+8iOWNs+S4pOeCueeahHgoeSnlnZDmoIfpg73mr5Tnn6nlvaLnmoTlsI94KHkp5Z2Q5qCH5bCP77yM5oiW6ICF5aSn77yJLCBcclxuICAgICAgICAgKiDoi6XlnKjlkIzkuIDovrnliJnov5Tlm55mYWxzZe+8jCBcclxuICAgICAgICAgKiDlkKbliJnlsLHmmK/nm7jkuqTnmoTmg4XlhrXjgIJcclxuICAgICAgICAgKiBAcGFyYW0gbGluZVBvaW50WDEg57q/5q616LW35aeL54K5eOWdkOaghyBcclxuICAgICAgICAgKiBAcGFyYW0gbGluZVBvaW50WTEg57q/5q616LW35aeL54K5eeWdkOaghyBcclxuICAgICAgICAgKiBAcGFyYW0gbGluZVBvaW50WDIg57q/5q6157uT5p2f54K5eOWdkOaghyBcclxuICAgICAgICAgKiBAcGFyYW0gbGluZVBvaW50WTIg57q/5q6157uT5p2f54K5eeWdkOaghyBcclxuICAgICAgICAgKiBAcGFyYW0gcmVjdGFuZ2xlTGVmdFRvcFgg55+p5b2i5bem5LiK54K5eOWdkOaghyBcclxuICAgICAgICAgKiBAcGFyYW0gcmVjdGFuZ2xlTGVmdFRvcFkg55+p5b2i5bem5LiK54K5eeWdkOaghyBcclxuICAgICAgICAgKiBAcGFyYW0gcmVjdGFuZ2xlUmlnaHRCb3R0b21YIOefqeW9ouWPs+S4i+eCuXjlnZDmoIcgXHJcbiAgICAgICAgICogQHBhcmFtIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSDnn6nlvaLlj7PkuIvngrl55Z2Q5qCHIFxyXG4gICAgICAgICAqIEByZXR1cm4g5piv5ZCm55u45LqkXHJcbiAgICAgICAgICovXHJcbiAgICBzdGF0aWMgaXNMaW5lSW50ZXJzZWN0UmVjdGFuZ2xlKGxpbmVQb2ludFgxOiBudW1iZXIsIGxpbmVQb2ludFkxOiBudW1iZXIsIGxpbmVQb2ludFgyOiBudW1iZXIsIGxpbmVQb2ludFkyOiBudW1iZXIsXHJcbiAgICAgICAgcmVjdGFuZ2xlTGVmdFRvcFg6IG51bWJlcixcclxuICAgICAgICByZWN0YW5nbGVMZWZ0VG9wWTogbnVtYmVyLFxyXG4gICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWDogbnVtYmVyLFxyXG4gICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGxpbmVIZWlnaHQ6IG51bWJlciA9IGxpbmVQb2ludFkxIC0gbGluZVBvaW50WTI7XHJcbiAgICAgICAgbGV0IGxpbmVXaWR0aDogbnVtYmVyID0gbGluZVBvaW50WDIgLSBsaW5lUG9pbnRYMTsgIC8vIOiuoeeul+WPieS5mCBcclxuICAgICAgICBsZXQgYzogbnVtYmVyID0gbGluZVBvaW50WDEgKiBsaW5lUG9pbnRZMiAtIGxpbmVQb2ludFgyICogbGluZVBvaW50WTE7XHJcbiAgICAgICAgaWYgKChsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlTGVmdFRvcFggKyBsaW5lV2lkdGggKiByZWN0YW5nbGVMZWZ0VG9wWSArIGMgPj0gMCAmJiBsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlUmlnaHRCb3R0b21YICsgbGluZVdpZHRoICogcmVjdGFuZ2xlUmlnaHRCb3R0b21ZICsgYyA8PSAwKVxyXG4gICAgICAgICAgICB8fCAobGluZUhlaWdodCAqIHJlY3RhbmdsZUxlZnRUb3BYICsgbGluZVdpZHRoICogcmVjdGFuZ2xlTGVmdFRvcFkgKyBjIDw9IDAgJiYgbGluZUhlaWdodCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCArIGxpbmVXaWR0aCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSArIGMgPj0gMClcclxuICAgICAgICAgICAgfHwgKGxpbmVIZWlnaHQgKiByZWN0YW5nbGVMZWZ0VG9wWCArIGxpbmVXaWR0aCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWSArIGMgPj0gMCAmJiBsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlUmlnaHRCb3R0b21YICsgbGluZVdpZHRoICogcmVjdGFuZ2xlTGVmdFRvcFkgKyBjIDw9IDApXHJcbiAgICAgICAgICAgIHx8IChsaW5lSGVpZ2h0ICogcmVjdGFuZ2xlTGVmdFRvcFggKyBsaW5lV2lkdGggKiByZWN0YW5nbGVSaWdodEJvdHRvbVkgKyBjIDw9IDAgJiYgbGluZUhlaWdodCAqIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCArIGxpbmVXaWR0aCAqIHJlY3RhbmdsZUxlZnRUb3BZICsgYyA+PSAwKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlY3RhbmdsZUxlZnRUb3BYID4gcmVjdGFuZ2xlUmlnaHRCb3R0b21YKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcDogbnVtYmVyID0gcmVjdGFuZ2xlTGVmdFRvcFg7XHJcbiAgICAgICAgICAgICAgICByZWN0YW5nbGVMZWZ0VG9wWCA9IHJlY3RhbmdsZVJpZ2h0Qm90dG9tWDtcclxuICAgICAgICAgICAgICAgIHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCA9IHRlbXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlY3RhbmdsZUxlZnRUb3BZIDwgcmVjdGFuZ2xlUmlnaHRCb3R0b21ZKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcDE6IG51bWJlciA9IHJlY3RhbmdsZUxlZnRUb3BZO1xyXG4gICAgICAgICAgICAgICAgcmVjdGFuZ2xlTGVmdFRvcFkgPSByZWN0YW5nbGVSaWdodEJvdHRvbVk7XHJcbiAgICAgICAgICAgICAgICByZWN0YW5nbGVSaWdodEJvdHRvbVkgPSB0ZW1wMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKGxpbmVQb2ludFgxIDwgcmVjdGFuZ2xlTGVmdFRvcFggJiYgbGluZVBvaW50WDIgPCByZWN0YW5nbGVMZWZ0VG9wWClcclxuICAgICAgICAgICAgICAgIHx8IChsaW5lUG9pbnRYMSA+IHJlY3RhbmdsZVJpZ2h0Qm90dG9tWCAmJiBsaW5lUG9pbnRYMiA+IHJlY3RhbmdsZVJpZ2h0Qm90dG9tWClcclxuICAgICAgICAgICAgICAgIHx8IChsaW5lUG9pbnRZMSA+IHJlY3RhbmdsZUxlZnRUb3BZICYmIGxpbmVQb2ludFkyID4gcmVjdGFuZ2xlTGVmdFRvcFkpXHJcbiAgICAgICAgICAgICAgICB8fCAobGluZVBvaW50WTEgPCByZWN0YW5nbGVSaWdodEJvdHRvbVkgJiYgbGluZVBvaW50WTIgPCByZWN0YW5nbGVSaWdodEJvdHRvbVkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHmhaLliLDlv6tcclxuICAgICAqIEBwYXJhbSBzdGFydCBcclxuICAgICAqIEBwYXJhbSBlbmQgXHJcbiAgICAgKiBAcGFyYW0gZWFzaW5nIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBlYXNlSW4oc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGVhc2luZzogbnVtYmVyID0gMC4xKSB7XHJcbiAgICAgICAgc3RhcnQgPSBzdGFydCAtIChzdGFydCAtIGVuZCkgKiBlYXNpbmc7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sx5b+r5Yiw5oWiXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgXHJcbiAgICAgKiBAcGFyYW0gZW5kIFxyXG4gICAgICogQHBhcmFtIGVhc2luZyBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZWFzZU91dChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZWFzaW5nOiBudW1iZXIgPSAwLjEpIHtcclxuICAgICAgICBzdGFydCA9IHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIGVhc2luZztcclxuICAgICAgICByZXR1cm4gc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3mlbDlrZfmmK/lkKbml7bkuIDkuKrotKjmlbBcclxuICAgICAqIOiiqzHlkozoh6rlt7HmlbTpmaRcclxuICAgICAqIEBwYXJhbSBudW0gXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1ByaW1lKG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHNxdXJ0TnVtID0gTWF0aC5mbG9vcihNYXRoLnNxcnQobnVtKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAyOyBpbmRleCA8IG51bTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAobnVtICUgaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5om+5Yiw6Led56a76L+Z5Liq5pWw5a2X5pyA6L+R55qE6LSo5pWw77yI6LSo5pWw55So5LqO6ZqP5py65YiG5biD5Lit77yJXHJcbiAgICAgKiBAcGFyYW0gbnVtIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRQcmltZShudW06IG51bWJlcikge1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5pc1ByaW1lKG51bSkpIHtcclxuICAgICAgICAgICAgbnVtKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZTxUPihDOiB7IG5ldygpOiBUIH0pOiBUIHtcclxuICAgICAgICByZXR1cm4gbmV3IEMoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZXR1cm5UaW1lKCApIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgILphY3oioLngrnliLDnm7jlr7nkuo7oiJ7lj7DnmoTnmoTovrnop5LkvY3nva5cclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICogQHBhcmFtIGJvcmQgXHJcbiAgICAgKiBAcGFyYW0gb2Zmc2V0WCBcclxuICAgICAqIEBwYXJhbSBvZmZzZXRZIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZml0VG9Cb2FyZChub2RlOiBjYy5Ob2RlLCBib3JkOiBzdHJpbmcsIG9mZnNldFg6IG51bWJlciA9IDAsIG9mZnNldFk6IG51bWJlciA9IDApIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuXHJcbiAgICAgICAgaWYgKGJvcmQgPT0gJ3RsJykge1xyXG4gICAgICAgICAgICBub2RlLnggPSAtc2l6ZS53aWR0aCAvIDIgKyBub2RlLndpZHRoIC8gMiArIG9mZnNldFg7XHJcbiAgICAgICAgICAgIG5vZGUueSA9IG5vZGUuaGVpZ2h0IC8gMiAtIG5vZGUuaGVpZ2h0IC8gMiArIG9mZnNldFk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib3JkID09ICd0cicpIHtcclxuICAgICAgICAgICAgbm9kZS54ID0gc2l6ZS53aWR0aCAvIDIgLSBub2RlLndpZHRoIC8gMiArIG9mZnNldFg7XHJcbiAgICAgICAgICAgIG5vZGUueSA9IG5vZGUuaGVpZ2h0IC8gMiAtIG5vZGUuaGVpZ2h0IC8gMiArIG9mZnNldFk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib3JkID09ICdkbCcpIHtcclxuXHJcbiAgICAgICAgICAgIG5vZGUueCA9IC1zaXplLndpZHRoIC8gMiArIG5vZGUud2lkdGggLyAyICsgb2Zmc2V0WDtcclxuICAgICAgICAgICAgbm9kZS55ID0gLW5vZGUuaGVpZ2h0IC8gMiArIG5vZGUuaGVpZ2h0IC8gMiArIG9mZnNldFk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChib3JkID09ICdkcicpIHtcclxuICAgICAgICAgICAgbm9kZS54ID0gc2l6ZS53aWR0aCAvIDIgLSBub2RlLndpZHRoIC8gMiArIG9mZnNldFg7XHJcbiAgICAgICAgICAgIG5vZGUueSA9IC1ub2RlLmhlaWdodCAvIDIgKyBub2RlLmhlaWdodCAvIDIgKyBvZmZzZXRZO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5bin5pWw55So5pe2XHJcbiAgICAgKiBAcGFyYW0gbnVtXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBfRlQobnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVtICogMC4wMzMzMzMzO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGlzVW5kZWZpbmVkKG9iajogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBudW1iZXJQbHVzKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKG51bTEgKiAxMDAgKyBudW0yICogMTAwKSAvIDEwMDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBudW1iZXJSZWR1Y2UobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAobnVtMSAqIDEwMCAtIG51bTIgKiAxMDApIC8gMTAwO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG51bWJlck11bHRpKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKG51bTEgKiAxMDAgKiBudW0yICogMTAwKSAvICgxMDAgKiAxMDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
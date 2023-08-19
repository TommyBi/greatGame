export default class Utils {
    // cdegress:Num Math.PI/180,
    // cangle:180/Math.PI,

    static emoji2Str(str) {
        return unescape(escape(str).replace(/\%uD.{3}/g, ''));
    }

    static isEmojiCharacter(substring) {
        for (let i = 0; i < substring.length; i++) {
            let hs = substring.charCodeAt(i);
            let ls;
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    ls = substring.charCodeAt(i + 1);
                    let uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            } else if (substring.length > 1) {
                ls = substring.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            } else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                } else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                } else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                } else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                    || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                    || hs == 0x2b50) {
                    return true;
                }
            }
        }
    }

    //是否字符串有空格
    static isStrSpace(str) {
        return str.indexOf(' ') === -1;
    }

    //角度转弧度
    static angleToPI(degrees) {
        return degrees * cc.macro.RAD;
    }

    static piToAngle(radians) {
        return radians * cc.macro.DEG;
    }

    //获得两点之间的角度
    static getVecAngle(currVec, nextVec) {
        // let p1 = (180 / Math.PI);
        let vec = cc.v2(nextVec).sub(cc.v2(currVec));
        let a1 = -Math.atan2(vec.y, vec.x);
        let r1 = a1 * cc.macro.DEG;
        return r1;
    }

    //把一个节点下的坐标转成全局坐标
    static convertNodeToWorldSpace(node: cc.Node, npos) {
        if (cc.isValid(node)) {
            return node.convertToWorldSpaceAR(npos);
        }
        return cc.v2();
    }

    //把一个节点下的坐标转成另一个节点的坐标
    static convertNodeToNodeSpace(node, targetParent) {
        if (cc.isValid(node)) {
            if (!!node.parent) {
                let wpos = node.parent.convertToWorldSpaceAR(node.getPosition());

                if (cc.isValid(targetParent)) {
                    return targetParent.convertToNodeSpaceAR(wpos);
                }
            }
        }
        cc.log('坐标转换有问题');
        return cc.v2(0, 0);
    }

    //把全局坐标转成另一个节点的坐标
    static convertWorldToNodeSpace(node, wpos, isParent) {
        if (cc.isValid(node)) {
            if (!!isParent && node.parent) {
                return node.parent.convertToNodeSpaceAR(wpos);
            }
            return node.convertToNodeSpaceAR(wpos);
        }
        return cc.v2(0, 0);
    }

    /**
     * Function name isPhoneNumer
     * @param phoneNum 电话号码
     * 判断传入的数字是否符合手机号码的格式
     */
    static isPhonenumber(phoneNum) {
        if (!(/^1[34578]\d{9}$/.test(phoneNum))) {
            return false;
        }
        return true;
    }
    /**
    * Function name getShortName
    * @param name 玩家昵称
    * 玩家中文昵称最多只显示5个汉字，超出则在后面加“...” 一个中文2个字符
    */
    static getShortName(name, maxChar: number = 10) {
        if (!name) {
            return "";
        }
        let strlen = 0;
        let s = "";
        for (let i = 0; i < name.length; i++) {
            if (name.charCodeAt(i) > 128) {
                strlen += 2;
            } else {
                strlen++;
            }
            s += name.charAt(i);
            if (strlen >= maxChar) {
                return s + "...";
            }
        }
        return s;
    }

    /**
     * 计算两点之间的中点,
     * coefficient 距离系数
     */
    static calculationMidPoint(begianPos: cc.Vec2, endPos: cc.Vec2, coefficient: number = 0.5, offsetY: number = 300) {
        let newPos = begianPos;
        let subx: number = 0;
        let suby: number = 0;
        if (begianPos.x <= endPos.x && begianPos.y <= endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        } else if (begianPos.x > endPos.x && begianPos.y < endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        } else if (begianPos.x > endPos.x && begianPos.y > endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        } else if (begianPos.x < endPos.x && begianPos.y > endPos.y) {
            subx = endPos.x - begianPos.x;
            suby = endPos.y - begianPos.y;
            newPos = cc.v2(begianPos.x + subx * coefficient, begianPos.y + suby * coefficient + offsetY);
        }
        return newPos;
    }


    //生成范围内的随机数
    static randSectionNum(minnum, maxnum): number {
        return Math.floor(minnum + Math.random() * (maxnum - minnum));
    }
    //获得数组内的随机值
    static getRandomByArr(arr) {
        let index = this.randSectionNum(0, arr.length);
        return arr[index];
    }
    //生成区间内的数组
    static createArr(startIndex, endIndex) {
        let arr = [];
        for (let index = startIndex; index < endIndex; index++) {
            arr.push(index);
        }
        return arr;
    }

    /**
    * 从指定数组随机出几个值并组成新数组(返回值为原元素类型)
    * @param arr:源数组
    * @param num:要几个随机元素
    */
    static randomNewArr(arr: Array<any>, num: number) {
        let arrOld: Array<any> = new Array<any>();
        arrOld = [...arr];
        if (arrOld.length <= num) {
            return arrOld;
        }
        let arrNew: Array<any> = new Array<any>();
        for (let i = 0; i < num; i++) {
            let random = this.getRandomNum(0, arrOld.length - 1);//产生随机数用作下标 
            arrNew.push(arrOld[random]);
            arrOld.splice(random, 1);
        }
        return arrNew;
    }
    /**
     * 获取范围内随机整数(包含最大值)
     * @param min 最小值
     * @param max 最大值
     */
    static getRandomNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    static crossMul(v1: cc.Vec2, v2: cc.Vec2) {
        return v1.x * v2.y - v1.y * v2.x;
    }


    static quadratic(begin, c1, end, t) {
        let p = cc.v2();
        p.x = begin.x * (1 - t) * (1 - t) + c1.x * 2 * t * (1 - t) + end.x * t * t;
        p.y = begin.y * (1 - t) * (1 - t) + c1.y * 2 * t * (1 - t) + end.y * t * t;
        return p;
    }


    static exchange(p1: cc.Vec2, p2: cc.Vec2) {
        let p = cc.v2();
        p.x = p2.x;
        p.y = p2.y;
        p2.x = p1.x;
        p2.y = p1.y;
        p1.x = p.x;
        p1.y = p.y;
    }

    //数组删除某一个索引的对象
    //index 开始索引
    //num 删除数量 默认为1个
    static arrayRemove(arr: Array<any>, index, num = 1) {
        let i, len;
        for (i = index + num, len = arr.length; i < len; i++) {
            arr[i - num] = arr[i];
        }
        arr.length = len - num;
    }

    //通过数组中的值移除数组
    static arrayRemoveValue(arr: Array<number | string>, value: string | number) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element === value) {
                this.arrayRemove(arr, index);
                break;
            }
        }
    }

    //数组copy
    static arrayCopy(sourceArr: Array<any>, destArr: Array<any>) {
        if (!!sourceArr && !!destArr) {
            for (let index = 0; index < sourceArr.length; index++) {
                const element = sourceArr[index];
                destArr.push(element);
            }
        }
    }

    //从数组中获得指定数量，同时改变原有的数组
    static arrayGetSync(sourceArr: Array<any>, num: number = 1) {
        let resultArr = [];
        if (num > sourceArr.length) {
            this.arrayCopy(sourceArr, resultArr);
            sourceArr.length = 0;
        } else {
            let dIndex = 0;
            for (let index = 0; index < num; index++) {
                dIndex = Math.floor(Math.random() * sourceArr.length);
                resultArr.push(sourceArr[dIndex]);
                this.arrayRemove(sourceArr, dIndex, 1);
            }
        }
        return resultArr;
    }

    //平滑
    static lerp(a: number, b: number, t: number) {
        return a + t * (b - a);
    }

    static matchBgSize(bg: cc.Node) {
        if (cc.isValid(bg)) {
            bg.setScale(1, 1);
            let hvalue = bg.width;
            if (bg.width <= 0) {
                hvalue = cc.view.getDesignResolutionSize().width;
            }
            let size = cc.view.getVisibleSize();
            let hrate = size.width / hvalue;
            bg.setScale(hrate, hrate);
            return hrate;
        }
    }

    static matchBgHSize(bg: cc.Node) {
        if (cc.isValid(bg)) {
            bg.setScale(1, 1);
            let hvalue = bg.height;
            if (bg.height <= 0) {
                hvalue = cc.view.getDesignResolutionSize().height;
            }
            let size = cc.view.getVisibleSize();
            let hrate = size.height / hvalue;
            bg.setScale(hrate, hrate);
            return hrate;
        }
    }

    /**
     * 把数字转成0101的数组
     * @param {*} num 
     * @param {*} count 
     */
    static numberToBinary(num, count) {
        let arr = [];
        for (let index = 0; index < count; index++) {
            arr.push(num >> index & 1);
        }
        return arr;
    }

    /**
     * 
     * @param {*} arr 
     */
    static binaryArrToNum(arr) {
        if (!!arr) {
            let str = '';
            for (let index = 0; index < arr.length; index++) {
                str += arr[index];
            }
            cc.log(str);
            return parseInt(str, 2);
        }
        return null;
    }

    /**
     * 是否是pc操作平台
     */
    static isPcPlantFrom() {
        if (cc.sys.platform === cc.sys.ANDROID || cc.sys.platform === cc.sys.IPHONE) {
            return false;
        }
        return true;
    }

    /**
     * 获得唯一id
     * @param len 
     * @param radix 
     */
    static genUuid(len, radix): string {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvvxyz'.split('');
        let uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            // rfc4122, version 4 form
            let r;

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
    }

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
    static isLineIntersectRectangle(linePointX1: number, linePointY1: number, linePointX2: number, linePointY2: number,
        rectangleLeftTopX: number,
        rectangleLeftTopY: number,
        rectangleRightBottomX: number,
        rectangleRightBottomY: number): boolean {
        let lineHeight: number = linePointY1 - linePointY2;
        let lineWidth: number = linePointX2 - linePointX1;  // 计算叉乘 
        let c: number = linePointX1 * linePointY2 - linePointX2 * linePointY1;
        if ((lineHeight * rectangleLeftTopX + lineWidth * rectangleLeftTopY + c >= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleRightBottomY + c <= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleLeftTopY + c <= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleRightBottomY + c >= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleRightBottomY + c >= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleLeftTopY + c <= 0)
            || (lineHeight * rectangleLeftTopX + lineWidth * rectangleRightBottomY + c <= 0 && lineHeight * rectangleRightBottomX + lineWidth * rectangleLeftTopY + c >= 0)) {

            if (rectangleLeftTopX > rectangleRightBottomX) {
                let temp: number = rectangleLeftTopX;
                rectangleLeftTopX = rectangleRightBottomX;
                rectangleRightBottomX = temp;
            }
            if (rectangleLeftTopY < rectangleRightBottomY) {
                let temp1: number = rectangleLeftTopY;
                rectangleLeftTopY = rectangleRightBottomY;
                rectangleRightBottomY = temp1;
            }
            if ((linePointX1 < rectangleLeftTopX && linePointX2 < rectangleLeftTopX)
                || (linePointX1 > rectangleRightBottomX && linePointX2 > rectangleRightBottomX)
                || (linePointY1 > rectangleLeftTopY && linePointY2 > rectangleLeftTopY)
                || (linePointY1 < rectangleRightBottomY && linePointY2 < rectangleRightBottomY)) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    /**
     * 由慢到快
     * @param start 
     * @param end 
     * @param easing 
     * @returns 
     */
    static easeIn(start: number, end: number, easing: number = 0.1) {
        start = start - (start - end) * easing;
        return start;
    }

    /**
     * 由快到慢
     * @param start 
     * @param end 
     * @param easing 
     * @returns 
     */
    static easeOut(start: number, end: number, easing: number = 0.1) {
        start = start + (end - start) * easing;
        return start;
    }

    /**
     * 当前数字是否时一个质数
     * 被1和自己整除
     * @param num 
     */
    static isPrime(num: number) {
        let squrtNum = Math.floor(Math.sqrt(num));
        for (let index = 2; index < num; index++) {
            if (num % index == 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * 找到距离这个数字最近的质数（质数用于随机分布中）
     * @param num 
     * @returns 
     */
    static getPrime(num: number) {
        while (!this.isPrime(num)) {
            num++;
        }
        return num;
    }

    static create<T>(C: { new(): T }): T {
        return new C();
    }

    /**
     * 适配节点到相对于舞台的的边角位置
     * @param node 
     * @param bord 
     * @param offsetX 
     * @param offsetY 
     */
    static fitToBoard(node: cc.Node, bord: string, offsetX: number = 0, offsetY: number = 0) {
        let size = cc.view.getVisibleSize();

        if (bord == 'tl') {
            node.x = -size.width / 2 + node.width / 2 + offsetX;
            node.y = node.height / 2 - node.height / 2 + offsetY;
        } else if (bord == 'tr') {
            node.x = size.width / 2 - node.width / 2 + offsetX;
            node.y = node.height / 2 - node.height / 2 + offsetY;
        } else if (bord == 'dl') {

            node.x = -size.width / 2 + node.width / 2 + offsetX;
            node.y = -node.height / 2 + node.height / 2 + offsetY;
        } else if (bord == 'dr') {
            node.x = size.width / 2 - node.width / 2 + offsetX;
            node.y = -node.height / 2 + node.height / 2 + offsetY;
        }
    }
    /**
     * 返回帧数用时
     * @param num
     */
    static _FT(num: number) {
        return num * 0.0333333;
    }
    static isUndefined(obj: any) {
        return typeof obj == "undefined";
    }
    static numberPlus(num1: number, num2: number): number {
        return (num1 * 100 + num2 * 100) / 100;
    }
    static numberReduce(num1: number, num2: number): number {
        return (num1 * 100 - num2 * 100) / 100;
    }
    static numberMulti(num1: number, num2: number): number {
        return (num1 * 100 * num2 * 100) / (100 * 100);
    }
}

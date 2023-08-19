"use strict";
cc._RF.push(module, '2695bm4arVIq6Dj0pAiuMEV', 'SortUtils');
// src/framework/tools/SortUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//排序算法集合
var SortUtils = /** @class */ (function () {
    function SortUtils() {
    }
    /**
     * 冒泡排序算法
     * @param collects
     * @param key 如果是对象则使用key值进行比较
     * @returns
     */
    SortUtils.bubbleSort = function (collects, key) {
        var isNeedKey = !!key;
        if (collects) {
            var len = collects.length;
            for (var i = 0; i < len - 1; i++) {
                var flag = true; //优化 如果一轮检查下来发现没有可交换的 说明已经是有序的，不用再检查了
                var frist = null; //前一个需要比较值
                var next = null; //后一个需要比较的值
                for (var j = 0; j < len - i - 1; j++) {
                    if (isNeedKey) { //是否是对象需要排序
                        frist = collects[j][key];
                        next = collects[j + 1][key];
                    }
                    else {
                        frist = collects[j];
                        next = collects[j + 1];
                    }
                    if (frist < next) {
                        //进行交换
                        var temp = collects[j + 1];
                        collects[j + 1] = collects[j];
                        collects[j] = temp;
                        flag = false;
                    }
                }
                // console.log(i + "执行了多少次");
                if (flag) {
                    break;
                }
            }
        }
        return collects;
    };
    /**
     * 希尔排序
     * @param collects
     * @param key
     * @returns
     */
    SortUtils.shellSort = function (collects, key) {
        var len = collects.length;
        return collects;
    };
    SortUtils.insertArr = function () {
    };
    /**
     * 插入排序算法
     * @param collects 需要排序的集合
     * @param key 如果是对象需要排序，需要提供一个key 来获取number类型的值进行排序
     * @returns 返回一个排序好的数组
     */
    SortUtils.insertSort = function (collects, key) {
        if (!collects || collects.length < 2) {
            return collects;
        }
        var isNeedKey = !!key;
        var preElement = null; //前一个元素
        var nextElement = null; //后一个元素
        for (var index = 1; index < collects.length; index++) {
            preElement = isNeedKey ? collects[index - 1][key] : collects[index - 1];
            nextElement = isNeedKey ? collects[index][key] : collects[index];
            if (preElement > nextElement) {
                //TODO 优化思考
                var i = index;
                //排序之前的元素
                for (i; i > 0; i--) {
                    var cValue = isNeedKey ? collects[i][key] : collects[i];
                    var cPre = isNeedKey ? collects[i - 1][key] : collects[i - 1];
                    if (cValue < cPre) {
                        var temp = collects[i];
                        collects[i] = collects[i - 1];
                        collects[i - 1] = temp;
                    }
                }
            }
        }
        return collects;
    };
    // /**
    //  * 通过二分法查找 因为对于当前元素前边都是已经排序好的，通过二分法减少查看次数
    //  * @param collects 
    //  * @param key 
    //  * @param index   collects 中已经检查到的索引
    //  * @returns 
    //  */
    // private static insertFindBinary<T>(collects:Array<T>,key:string,index:number):number
    // {
    //     let isNeedKey:boolean = !!key;
    //     let midIndex:number = Math.floor( index/2 );
    //     let needValue = isNeedKey ? collects[index][key] : collects[index];//需要比较的当前值
    //     while(true)
    //     {
    //         const mValue =  isNeedKey ? collects[midIndex][key] : collects[midIndex];
    //         if (needValue > mValue) {
    //             midIndex = Math.floor( midIndex / 2 );
    //         } else if (mValue == needValue) {
    //             return midIndex;
    //         } else {
    //             midIndex = Math.floor( (index - midIndex) / 2 );
    //         }
    //         if (midIndex <= 0) {
    //             break;
    //         }
    //     }
    //     return index;
    // }
    /**
     * 快速排序
     * @param collects 需要排序的集合
     * @param key 如果是对象的话，需要按照key进行
     * @isBig 是否是从大到小排序
     * @returns 返回排序好的集合
     */
    SortUtils.quickSort = function (collects, key, isBig) {
        if (isBig === void 0) { isBig = true; }
        SortUtils.quickSortHandle(collects, 0, collects.length - 1, key);
        return collects;
    };
    /**
     * 快速排序的逻辑
     * @param collects 排序的集合
     * @param start 开始位置
     * @param end   结束位置
     * @param key   如果是对象进行排序 需要用到的key obj[key] is number
     * @returns
     */
    SortUtils.quickSortHandle = function (collects, start, end, key, isBig) {
        if (isBig === void 0) { isBig = true; }
        if (start >= end) {
            return;
        }
        var isNeedKey = !!key; //是否需要根据key 进行排序
        var mindex = start; //Math.floor( (end - start)/2 );//取第一个值或者中间的值
        var midValue = isNeedKey ? collects[mindex][key] : collects[mindex];
        var midOrg = collects[mindex]; //中间的原始值
        var i = start;
        var j = end;
        while (i < j) {
            //找到右侧比基准值小的 索引 同时暂停右侧的查询，执行左侧的查询，找到比基准值大把当前j索引的值替换掉，防止数值重复
            var currValue = isNeedKey ? collects[j][key] : collects[j];
            if (isBig) {
                while (i < j && currValue < midValue) {
                    j--;
                    currValue = isNeedKey ? collects[j][key] : collects[j];
                }
            }
            else {
                while (i < j && currValue > midValue) {
                    j--;
                    currValue = isNeedKey ? collects[j][key] : collects[j];
                }
            }
            //把右侧的大的值赋给左侧
            if (i < j) {
                collects[i] = collects[j];
                i++;
            }
            currValue = isNeedKey ? collects[i][key] : collects[i];
            while (i < j && currValue < midValue) {
                i++;
                currValue = isNeedKey ? collects[i][key] : collects[i];
            }
            if (i < j) {
                collects[j] = collects[i];
                j--;
            }
        }
        collects[i] = midOrg;
        SortUtils.quickSortHandle(collects, start, i - 1, key);
        SortUtils.quickSortHandle(collects, i + 1, end, key);
    };
    /**
     * 快速排序
     * @param collects 需要排序的集合
     * @param key 如果是对象的话，需要按照key进行
     * @returns 返回排序好的集合
     */
    SortUtils.quickSortNode = function (collects, key) {
        SortUtils.quickSortHandle(collects, 0, collects.length - 1, key);
        return collects;
    };
    /**
     * 快速排序的逻辑
     * @param collects 排序的集合
     * @param start 开始位置
     * @param end   结束位置
     * @param key   如果是对象进行排序 需要用到的key obj[key] is number
     * @returns
     */
    SortUtils.quickSortNodeHandler = function (collects, start, end, key) {
        if (start >= end) {
            return;
        }
        var isNeedKey = !!key; //是否需要根据key 进行排序
        var mindex = start; //Math.floor( (end - start)/2 );//取第一个值或者中间的值
        var midValue = isNeedKey ? collects[mindex][key] : collects[mindex];
        var midOrg = collects[mindex]; //中间的原始值
        var i = start;
        var j = end;
        while (i < j) {
            //找到右侧比基准值小的 索引 同时暂停右侧的查询，执行左侧的查询，找到比基准值大把当前j索引的值替换掉，防止数值重复
            var currValue = isNeedKey ? collects[j][key] : collects[j];
            while (i < j && currValue > midValue) {
                j--;
                currValue = isNeedKey ? collects[j][key] : collects[j];
            }
            //把右侧的大的值赋给左侧
            if (i < j) {
                collects[i] = collects[j];
                i++;
            }
            currValue = isNeedKey ? collects[i][key] : collects[i];
            while (i < j && currValue < midValue) {
                i++;
                currValue = isNeedKey ? collects[i][key] : collects[i];
            }
            if (i < j) {
                collects[j] = collects[i];
                j--;
            }
        }
        collects[i] = midOrg;
        SortUtils.quickSortHandle(collects, start, i - 1, key);
        SortUtils.quickSortHandle(collects, i + 1, end, key);
    };
    return SortUtils;
}());
exports.default = SortUtils;

cc._RF.pop();
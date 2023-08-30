
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/framework/tools/SortUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    SortUtils.quickSort = function (collects, isBig, key) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL1NvcnRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQVE7QUFDUjtJQUFBO0lBc1FBLENBQUM7SUFwUUc7Ozs7O09BS0c7SUFDSSxvQkFBVSxHQUFqQixVQUFxQixRQUFrQixFQUFFLEdBQVk7UUFDakQsSUFBSSxTQUFTLEdBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQyxDQUFBLHFDQUFxQztnQkFDOUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUEsVUFBVTtnQkFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUEsV0FBVztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsQyxJQUFJLFNBQVMsRUFBRSxFQUFDLFdBQVc7d0JBQ3ZCLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMvQjt5QkFBTTt3QkFDSCxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDMUI7b0JBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO3dCQUNk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QyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxRDtZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUUsQ0FBQzthQUNQO1NBRUo7UUFDRCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFHTCxnQkFBQztBQUFELENBdFFBLEFBc1FDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+aOkuW6j+eul+azlembhuWQiFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0VXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YaS5rOh5o6S5bqP566X5rOVXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdHMgXHJcbiAgICAgKiBAcGFyYW0ga2V5IOWmguaenOaYr+WvueixoeWImeS9v+eUqGtleeWAvOi/m+ihjOavlOi+g1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBidWJibGVTb3J0PFQ+KGNvbGxlY3RzOiBBcnJheTxUPiwga2V5Pzogc3RyaW5nKTogQXJyYXk8VD4ge1xyXG4gICAgICAgIGxldCBpc05lZWRLZXk6IGJvb2xlYW4gPSAhIWtleTtcclxuICAgICAgICBpZiAoY29sbGVjdHMpIHtcclxuICAgICAgICAgICAgbGV0IGxlbiA9IGNvbGxlY3RzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBmbGFnOiBib29sZWFuID0gdHJ1ZTsvL+S8mOWMliDlpoLmnpzkuIDova7mo4Dmn6XkuIvmnaXlj5HnjrDmsqHmnInlj6/kuqTmjaLnmoQg6K+05piO5bey57uP5piv5pyJ5bqP55qE77yM5LiN55So5YaN5qOA5p+l5LqGXHJcbiAgICAgICAgICAgICAgICBsZXQgZnJpc3QgPSBudWxsOy8v5YmN5LiA5Liq6ZyA6KaB5q+U6L6D5YC8XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IG51bGw7Ly/lkI7kuIDkuKrpnIDopoHmr5TovoPnmoTlgLxcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuIC0gaSAtIDE7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05lZWRLZXkpIHsvL+aYr+WQpuaYr+WvueixoemcgOimgeaOkuW6j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmlzdCA9IGNvbGxlY3RzW2pdW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBjb2xsZWN0c1tqICsgMV1ba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmlzdCA9IGNvbGxlY3RzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY29sbGVjdHNbaiArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyaXN0IDwgbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+i/m+ihjOS6pOaNolxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNvbGxlY3RzW2ogKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdHNbaiArIDFdID0gY29sbGVjdHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RzW2pdID0gdGVtcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkgKyBcIuaJp+ihjOS6huWkmuWwkeasoVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xsZWN0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW4jOWwlOaOkuW6j1xyXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIFxyXG4gICAgICogQHBhcmFtIGtleSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2hlbGxTb3J0PFQ+KGNvbGxlY3RzOiBBcnJheTxUPiwga2V5Pzogc3RyaW5nKTogQXJyYXk8VD4ge1xyXG4gICAgICAgIGxldCBsZW4gPSBjb2xsZWN0cy5sZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiBjb2xsZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnNlcnRBcnIoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5o+S5YWl5o6S5bqP566X5rOVXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdHMg6ZyA6KaB5o6S5bqP55qE6ZuG5ZCIXHJcbiAgICAgKiBAcGFyYW0ga2V5IOWmguaenOaYr+WvueixoemcgOimgeaOkuW6j++8jOmcgOimgeaPkOS+m+S4gOS4qmtleSDmnaXojrflj5ZudW1iZXLnsbvlnovnmoTlgLzov5vooYzmjpLluo9cclxuICAgICAqIEByZXR1cm5zIOi/lOWbnuS4gOS4quaOkuW6j+WlveeahOaVsOe7hFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zZXJ0U29ydDxUPihjb2xsZWN0czogQXJyYXk8VD4sIGtleT86IHN0cmluZyk6IEFycmF5PFQ+IHtcclxuICAgICAgICBpZiAoIWNvbGxlY3RzIHx8IGNvbGxlY3RzLmxlbmd0aCA8IDIpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlzTmVlZEtleTogYm9vbGVhbiA9ICEha2V5O1xyXG4gICAgICAgIGxldCBwcmVFbGVtZW50ID0gbnVsbDsvL+WJjeS4gOS4quWFg+e0oFxyXG4gICAgICAgIGxldCBuZXh0RWxlbWVudCA9IG51bGw7Ly/lkI7kuIDkuKrlhYPntKBcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IGNvbGxlY3RzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBwcmVFbGVtZW50ID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaW5kZXggLSAxXVtrZXldIDogY29sbGVjdHNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgbmV4dEVsZW1lbnQgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpbmRleF1ba2V5XSA6IGNvbGxlY3RzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKHByZUVsZW1lbnQgPiBuZXh0RWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vVE9ETyDkvJjljJbmgJ3ogINcclxuICAgICAgICAgICAgICAgIGxldCBpID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAvL+aOkuW6j+S5i+WJjeeahOWFg+e0oFxyXG4gICAgICAgICAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY1ZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaV1ba2V5XSA6IGNvbGxlY3RzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNQcmUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpIC0gMV1ba2V5XSA6IGNvbGxlY3RzW2kgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY1ZhbHVlIDwgY1ByZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNvbGxlY3RzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0c1tpXSA9IGNvbGxlY3RzW2kgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdHNbaSAtIDFdID0gdGVtcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29sbGVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiDpgJrov4fkuozliIbms5Xmn6Xmib4g5Zug5Li65a+55LqO5b2T5YmN5YWD57Sg5YmN6L656YO95piv5bey57uP5o6S5bqP5aW955qE77yM6YCa6L+H5LqM5YiG5rOV5YeP5bCR5p+l55yL5qyh5pWwXHJcbiAgICAvLyAgKiBAcGFyYW0gY29sbGVjdHMgXHJcbiAgICAvLyAgKiBAcGFyYW0ga2V5IFxyXG4gICAgLy8gICogQHBhcmFtIGluZGV4ICAgY29sbGVjdHMg5Lit5bey57uP5qOA5p+l5Yiw55qE57Si5byVXHJcbiAgICAvLyAgKiBAcmV0dXJucyBcclxuICAgIC8vICAqL1xyXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgaW5zZXJ0RmluZEJpbmFyeTxUPihjb2xsZWN0czpBcnJheTxUPixrZXk6c3RyaW5nLGluZGV4Om51bWJlcik6bnVtYmVyXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgbGV0IGlzTmVlZEtleTpib29sZWFuID0gISFrZXk7XHJcblxyXG4gICAgLy8gICAgIGxldCBtaWRJbmRleDpudW1iZXIgPSBNYXRoLmZsb29yKCBpbmRleC8yICk7XHJcbiAgICAvLyAgICAgbGV0IG5lZWRWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2luZGV4XVtrZXldIDogY29sbGVjdHNbaW5kZXhdOy8v6ZyA6KaB5q+U6L6D55qE5b2T5YmN5YC8XHJcbiAgICAvLyAgICAgd2hpbGUodHJ1ZSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IG1WYWx1ZSA9ICBpc05lZWRLZXkgPyBjb2xsZWN0c1ttaWRJbmRleF1ba2V5XSA6IGNvbGxlY3RzW21pZEluZGV4XTtcclxuICAgIC8vICAgICAgICAgaWYgKG5lZWRWYWx1ZSA+IG1WYWx1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgbWlkSW5kZXggPSBNYXRoLmZsb29yKCBtaWRJbmRleCAvIDIgKTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIGlmIChtVmFsdWUgPT0gbmVlZFZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gbWlkSW5kZXg7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBtaWRJbmRleCA9IE1hdGguZmxvb3IoIChpbmRleCAtIG1pZEluZGV4KSAvIDIgKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBpZiAobWlkSW5kZXggPD0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBpbmRleDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW/q+mAn+aOkuW6j1xyXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIOmcgOimgeaOkuW6j+eahOmbhuWQiFxyXG4gICAgICogQHBhcmFtIGtleSDlpoLmnpzmmK/lr7nosaHnmoTor53vvIzpnIDopoHmjInnhadrZXnov5vooYxcclxuICAgICAqIEBpc0JpZyDmmK/lkKbmmK/ku47lpKfliLDlsI/mjpLluo9cclxuICAgICAqIEByZXR1cm5zIOi/lOWbnuaOkuW6j+WlveeahOmbhuWQiFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcXVpY2tTb3J0PFQ+KGNvbGxlY3RzOiBBcnJheTxUPiwgaXNCaWcgPSB0cnVlLCBrZXk/OiBzdHJpbmcpOiBBcnJheTxUPiB7XHJcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgMCwgY29sbGVjdHMubGVuZ3RoIC0gMSwga2V5KTtcclxuICAgICAgICByZXR1cm4gY29sbGVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlv6vpgJ/mjpLluo/nmoTpgLvovpFcclxuICAgICAqIEBwYXJhbSBjb2xsZWN0cyDmjpLluo/nmoTpm4blkIhcclxuICAgICAqIEBwYXJhbSBzdGFydCDlvIDlp4vkvY3nva5cclxuICAgICAqIEBwYXJhbSBlbmQgICDnu5PmnZ/kvY3nva5cclxuICAgICAqIEBwYXJhbSBrZXkgICDlpoLmnpzmmK/lr7nosaHov5vooYzmjpLluo8g6ZyA6KaB55So5Yiw55qEa2V5IG9ialtrZXldIGlzIG51bWJlclxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIHF1aWNrU29ydEhhbmRsZTxUPihjb2xsZWN0czogQXJyYXk8VD4sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBrZXk/OiBzdHJpbmcsIGlzQmlnID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGlzTmVlZEtleTogYm9vbGVhbiA9ICEha2V5Oy8v5piv5ZCm6ZyA6KaB5qC55o2ua2V5IOi/m+ihjOaOkuW6j1xyXG4gICAgICAgIGxldCBtaW5kZXg6IG51bWJlciA9IHN0YXJ0Oy8vTWF0aC5mbG9vciggKGVuZCAtIHN0YXJ0KS8yICk7Ly/lj5bnrKzkuIDkuKrlgLzmiJbogIXkuK3pl7TnmoTlgLxcclxuICAgICAgICBsZXQgbWlkVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1ttaW5kZXhdW2tleV0gOiBjb2xsZWN0c1ttaW5kZXhdO1xyXG4gICAgICAgIGxldCBtaWRPcmcgPSBjb2xsZWN0c1ttaW5kZXhdOy8v5Lit6Ze055qE5Y6f5aeL5YC8XHJcbiAgICAgICAgbGV0IGkgPSBzdGFydDtcclxuICAgICAgICBsZXQgaiA9IGVuZDtcclxuXHJcbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XHJcbiAgICAgICAgICAgIC8v5om+5Yiw5Y+z5L6n5q+U5Z+65YeG5YC85bCP55qEIOe0ouW8lSDlkIzml7bmmoLlgZzlj7PkvqfnmoTmn6Xor6LvvIzmiafooYzlt6bkvqfnmoTmn6Xor6LvvIzmib7liLDmr5Tln7rlh4blgLzlpKfmiorlvZPliY1q57Si5byV55qE5YC85pu/5o2i5o6J77yM6Ziy5q2i5pWw5YC86YeN5aSNXHJcbiAgICAgICAgICAgIGxldCBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tqXVtrZXldIDogY29sbGVjdHNbal07XHJcbiAgICAgICAgICAgIGlmIChpc0JpZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaiAmJiBjdXJyVmFsdWUgPCBtaWRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGotLTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tqXVtrZXldIDogY29sbGVjdHNbal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBqICYmIGN1cnJWYWx1ZSA+IG1pZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgai0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2pdW2tleV0gOiBjb2xsZWN0c1tqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/miorlj7PkvqfnmoTlpKfnmoTlgLzotYvnu5nlt6bkvqdcclxuICAgICAgICAgICAgaWYgKGkgPCBqKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0c1tpXSA9IGNvbGxlY3RzW2pdO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpXVtrZXldIDogY29sbGVjdHNbaV07XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgaiAmJiBjdXJyVmFsdWUgPCBtaWRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgY3VyclZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaV1ba2V5XSA6IGNvbGxlY3RzW2ldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaSA8IGopIHtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RzW2pdID0gY29sbGVjdHNbaV07XHJcbiAgICAgICAgICAgICAgICBqLS07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbGxlY3RzW2ldID0gbWlkT3JnO1xyXG4gICAgICAgIFNvcnRVdGlscy5xdWlja1NvcnRIYW5kbGUoY29sbGVjdHMsIHN0YXJ0LCBpIC0gMSwga2V5KTtcclxuICAgICAgICBTb3J0VXRpbHMucXVpY2tTb3J0SGFuZGxlKGNvbGxlY3RzLCBpICsgMSwgZW5kLCBrZXkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlv6vpgJ/mjpLluo9cclxuICAgICAqIEBwYXJhbSBjb2xsZWN0cyDpnIDopoHmjpLluo/nmoTpm4blkIhcclxuICAgICAqIEBwYXJhbSBrZXkg5aaC5p6c5piv5a+56LGh55qE6K+d77yM6ZyA6KaB5oyJ54Wna2V56L+b6KGMXHJcbiAgICAgKiBAcmV0dXJucyDov5Tlm57mjpLluo/lpb3nmoTpm4blkIhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHF1aWNrU29ydE5vZGU8VD4oY29sbGVjdHM6IEFycmF5PFQ+LCBrZXk/OiBzdHJpbmcpOiBBcnJheTxUPiB7XHJcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgMCwgY29sbGVjdHMubGVuZ3RoIC0gMSwga2V5KTtcclxuICAgICAgICByZXR1cm4gY29sbGVjdHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW/q+mAn+aOkuW6j+eahOmAu+i+kVxyXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIOaOkuW6j+eahOmbhuWQiFxyXG4gICAgICogQHBhcmFtIHN0YXJ0IOW8gOWni+S9jee9rlxyXG4gICAgICogQHBhcmFtIGVuZCAgIOe7k+adn+S9jee9rlxyXG4gICAgICogQHBhcmFtIGtleSAgIOWmguaenOaYr+Wvueixoei/m+ihjOaOkuW6jyDpnIDopoHnlKjliLDnmoRrZXkgb2JqW2tleV0gaXMgbnVtYmVyXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcXVpY2tTb3J0Tm9kZUhhbmRsZXI8VD4oY29sbGVjdHM6IEFycmF5PFQ+LCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwga2V5Pzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IGVuZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaXNOZWVkS2V5OiBib29sZWFuID0gISFrZXk7Ly/mmK/lkKbpnIDopoHmoLnmja5rZXkg6L+b6KGM5o6S5bqPXHJcbiAgICAgICAgbGV0IG1pbmRleDogbnVtYmVyID0gc3RhcnQ7Ly9NYXRoLmZsb29yKCAoZW5kIC0gc3RhcnQpLzIgKTsvL+WPluesrOS4gOS4quWAvOaIluiAheS4remXtOeahOWAvFxyXG4gICAgICAgIGxldCBtaWRWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW21pbmRleF1ba2V5XSA6IGNvbGxlY3RzW21pbmRleF07XHJcbiAgICAgICAgbGV0IG1pZE9yZyA9IGNvbGxlY3RzW21pbmRleF07Ly/kuK3pl7TnmoTljp/lp4vlgLxcclxuICAgICAgICBsZXQgaSA9IHN0YXJ0O1xyXG4gICAgICAgIGxldCBqID0gZW5kO1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IGopIHtcclxuICAgICAgICAgICAgLy/mib7liLDlj7Pkvqfmr5Tln7rlh4blgLzlsI/nmoQg57Si5byVIOWQjOaXtuaaguWBnOWPs+S+p+eahOafpeivou+8jOaJp+ihjOW3puS+p+eahOafpeivou+8jOaJvuWIsOavlOWfuuWHhuWAvOWkp+aKiuW9k+WJjWrntKLlvJXnmoTlgLzmm7/mjaLmjonvvIzpmLLmraLmlbDlgLzph43lpI1cclxuICAgICAgICAgICAgbGV0IGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2pdW2tleV0gOiBjb2xsZWN0c1tqXTtcclxuICAgICAgICAgICAgd2hpbGUgKGkgPCBqICYmIGN1cnJWYWx1ZSA+IG1pZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBqLS07XHJcbiAgICAgICAgICAgICAgICBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tqXVtrZXldIDogY29sbGVjdHNbal07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5oqK5Y+z5L6n55qE5aSn55qE5YC86LWL57uZ5bem5L6nXHJcbiAgICAgICAgICAgIGlmIChpIDwgaikge1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdHNbaV0gPSBjb2xsZWN0c1tqXTtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VyclZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaV1ba2V5XSA6IGNvbGxlY3RzW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoaSA8IGogJiYgY3VyclZhbHVlIDwgbWlkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgIGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2ldW2tleV0gOiBjb2xsZWN0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkgPCBqKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0c1tqXSA9IGNvbGxlY3RzW2ldO1xyXG4gICAgICAgICAgICAgICAgai0tO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsZWN0c1tpXSA9IG1pZE9yZztcclxuICAgICAgICBTb3J0VXRpbHMucXVpY2tTb3J0SGFuZGxlKGNvbGxlY3RzLCBzdGFydCwgaSAtIDEsIGtleSk7XHJcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgaSArIDEsIGVuZCwga2V5KTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
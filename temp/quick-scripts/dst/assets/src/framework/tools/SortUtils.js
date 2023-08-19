
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZnJhbWV3b3JrL3Rvb2xzL1NvcnRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQVE7QUFDUjtJQUFBO0lBc1FBLENBQUM7SUFwUUc7Ozs7O09BS0c7SUFDSSxvQkFBVSxHQUFqQixVQUFxQixRQUFrQixFQUFFLEdBQVk7UUFDakQsSUFBSSxTQUFTLEdBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQyxDQUFBLHFDQUFxQztnQkFDOUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUEsVUFBVTtnQkFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUEsV0FBVztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsQyxJQUFJLFNBQVMsRUFBRSxFQUFDLFdBQVc7d0JBQ3ZCLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMvQjt5QkFBTTt3QkFDSCxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDMUI7b0JBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO3dCQUNk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QUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BFLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFDdEMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1YsMkRBQTJEO1lBQzNELElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxRQUFRLEVBQUU7Z0JBQ2xDLENBQUMsRUFBRSxDQUFDO2dCQUNKLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsYUFBYTtZQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLEVBQUUsQ0FBQzthQUNQO1lBRUQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxRQUFRLEVBQUU7Z0JBQ2xDLENBQUMsRUFBRSxDQUFDO2dCQUNKLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsRUFBRSxDQUFDO2FBQ1A7U0FFSjtRQUNELFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDckIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkQsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0F0UUEsQUFzUUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5o6S5bqP566X5rOV6ZuG5ZCIXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0VXRpbHMge1xuXG4gICAgLyoqXG4gICAgICog5YaS5rOh5o6S5bqP566X5rOVXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIFxuICAgICAqIEBwYXJhbSBrZXkg5aaC5p6c5piv5a+56LGh5YiZ5L2/55Soa2V55YC86L+b6KGM5q+U6L6DXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIGJ1YmJsZVNvcnQ8VD4oY29sbGVjdHM6IEFycmF5PFQ+LCBrZXk/OiBzdHJpbmcpOiBBcnJheTxUPiB7XG4gICAgICAgIGxldCBpc05lZWRLZXk6IGJvb2xlYW4gPSAhIWtleTtcbiAgICAgICAgaWYgKGNvbGxlY3RzKSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gY29sbGVjdHMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZmxhZzogYm9vbGVhbiA9IHRydWU7Ly/kvJjljJYg5aaC5p6c5LiA6L2u5qOA5p+l5LiL5p2l5Y+R546w5rKh5pyJ5Y+v5Lqk5o2i55qEIOivtOaYjuW3sue7j+aYr+acieW6j+eahO+8jOS4jeeUqOWGjeajgOafpeS6hlxuICAgICAgICAgICAgICAgIGxldCBmcmlzdCA9IG51bGw7Ly/liY3kuIDkuKrpnIDopoHmr5TovoPlgLxcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IG51bGw7Ly/lkI7kuIDkuKrpnIDopoHmr5TovoPnmoTlgLxcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbiAtIGkgLSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmVlZEtleSkgey8v5piv5ZCm5piv5a+56LGh6ZyA6KaB5o6S5bqPXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmlzdCA9IGNvbGxlY3RzW2pdW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gY29sbGVjdHNbaiArIDFdW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmlzdCA9IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGNvbGxlY3RzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmlzdCA8IG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v6L+b6KGM5Lqk5o2iXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNvbGxlY3RzW2ogKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RzW2ogKyAxXSA9IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdHNbal0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkgKyBcIuaJp+ihjOS6huWkmuWwkeasoVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5biM5bCU5o6S5bqPXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIFxuICAgICAqIEBwYXJhbSBrZXkgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc3RhdGljIHNoZWxsU29ydDxUPihjb2xsZWN0czogQXJyYXk8VD4sIGtleT86IHN0cmluZyk6IEFycmF5PFQ+IHtcbiAgICAgICAgbGV0IGxlbiA9IGNvbGxlY3RzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gY29sbGVjdHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zZXJ0QXJyKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5o+S5YWl5o6S5bqP566X5rOVXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIOmcgOimgeaOkuW6j+eahOmbhuWQiFxuICAgICAqIEBwYXJhbSBrZXkg5aaC5p6c5piv5a+56LGh6ZyA6KaB5o6S5bqP77yM6ZyA6KaB5o+Q5L6b5LiA5Liqa2V5IOadpeiOt+WPlm51bWJlcuexu+Wei+eahOWAvOi/m+ihjOaOkuW6j1xuICAgICAqIEByZXR1cm5zIOi/lOWbnuS4gOS4quaOkuW6j+WlveeahOaVsOe7hFxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnRTb3J0PFQ+KGNvbGxlY3RzOiBBcnJheTxUPiwga2V5Pzogc3RyaW5nKTogQXJyYXk8VD4ge1xuICAgICAgICBpZiAoIWNvbGxlY3RzIHx8IGNvbGxlY3RzLmxlbmd0aCA8IDIpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3RzO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc05lZWRLZXk6IGJvb2xlYW4gPSAhIWtleTtcbiAgICAgICAgbGV0IHByZUVsZW1lbnQgPSBudWxsOy8v5YmN5LiA5Liq5YWD57SgXG4gICAgICAgIGxldCBuZXh0RWxlbWVudCA9IG51bGw7Ly/lkI7kuIDkuKrlhYPntKBcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgY29sbGVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBwcmVFbGVtZW50ID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaW5kZXggLSAxXVtrZXldIDogY29sbGVjdHNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgIG5leHRFbGVtZW50ID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaW5kZXhdW2tleV0gOiBjb2xsZWN0c1tpbmRleF07XG4gICAgICAgICAgICBpZiAocHJlRWxlbWVudCA+IG5leHRFbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAvL1RPRE8g5LyY5YyW5oCd6ICDXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAvL+aOkuW6j+S5i+WJjeeahOWFg+e0oFxuICAgICAgICAgICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpXVtrZXldIDogY29sbGVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNQcmUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpIC0gMV1ba2V5XSA6IGNvbGxlY3RzW2kgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNWYWx1ZSA8IGNQcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gY29sbGVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0c1tpXSA9IGNvbGxlY3RzW2kgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3RzW2kgLSAxXSA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2xsZWN0cztcbiAgICB9XG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiDpgJrov4fkuozliIbms5Xmn6Xmib4g5Zug5Li65a+55LqO5b2T5YmN5YWD57Sg5YmN6L656YO95piv5bey57uP5o6S5bqP5aW955qE77yM6YCa6L+H5LqM5YiG5rOV5YeP5bCR5p+l55yL5qyh5pWwXG4gICAgLy8gICogQHBhcmFtIGNvbGxlY3RzIFxuICAgIC8vICAqIEBwYXJhbSBrZXkgXG4gICAgLy8gICogQHBhcmFtIGluZGV4ICAgY29sbGVjdHMg5Lit5bey57uP5qOA5p+l5Yiw55qE57Si5byVXG4gICAgLy8gICogQHJldHVybnMgXG4gICAgLy8gICovXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgaW5zZXJ0RmluZEJpbmFyeTxUPihjb2xsZWN0czpBcnJheTxUPixrZXk6c3RyaW5nLGluZGV4Om51bWJlcik6bnVtYmVyXG4gICAgLy8ge1xuICAgIC8vICAgICBsZXQgaXNOZWVkS2V5OmJvb2xlYW4gPSAhIWtleTtcblxuICAgIC8vICAgICBsZXQgbWlkSW5kZXg6bnVtYmVyID0gTWF0aC5mbG9vciggaW5kZXgvMiApO1xuICAgIC8vICAgICBsZXQgbmVlZFZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaW5kZXhdW2tleV0gOiBjb2xsZWN0c1tpbmRleF07Ly/pnIDopoHmr5TovoPnmoTlvZPliY3lgLxcbiAgICAvLyAgICAgd2hpbGUodHJ1ZSlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgY29uc3QgbVZhbHVlID0gIGlzTmVlZEtleSA/IGNvbGxlY3RzW21pZEluZGV4XVtrZXldIDogY29sbGVjdHNbbWlkSW5kZXhdO1xuICAgIC8vICAgICAgICAgaWYgKG5lZWRWYWx1ZSA+IG1WYWx1ZSkge1xuICAgIC8vICAgICAgICAgICAgIG1pZEluZGV4ID0gTWF0aC5mbG9vciggbWlkSW5kZXggLyAyICk7XG4gICAgLy8gICAgICAgICB9IGVsc2UgaWYgKG1WYWx1ZSA9PSBuZWVkVmFsdWUpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gbWlkSW5kZXg7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIG1pZEluZGV4ID0gTWF0aC5mbG9vciggKGluZGV4IC0gbWlkSW5kZXgpIC8gMiApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKG1pZEluZGV4IDw9IDApIHtcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHJldHVybiBpbmRleDtcbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiDlv6vpgJ/mjpLluo9cbiAgICAgKiBAcGFyYW0gY29sbGVjdHMg6ZyA6KaB5o6S5bqP55qE6ZuG5ZCIXG4gICAgICogQHBhcmFtIGtleSDlpoLmnpzmmK/lr7nosaHnmoTor53vvIzpnIDopoHmjInnhadrZXnov5vooYxcbiAgICAgKiBAaXNCaWcg5piv5ZCm5piv5LuO5aSn5Yiw5bCP5o6S5bqPXG4gICAgICogQHJldHVybnMg6L+U5Zue5o6S5bqP5aW955qE6ZuG5ZCIXG4gICAgICovXG4gICAgc3RhdGljIHF1aWNrU29ydDxUPihjb2xsZWN0czogQXJyYXk8VD4sIGtleT86IHN0cmluZywgaXNCaWcgPSB0cnVlKTogQXJyYXk8VD4ge1xuICAgICAgICBTb3J0VXRpbHMucXVpY2tTb3J0SGFuZGxlKGNvbGxlY3RzLCAwLCBjb2xsZWN0cy5sZW5ndGggLSAxLCBrZXkpO1xuICAgICAgICByZXR1cm4gY29sbGVjdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5b+r6YCf5o6S5bqP55qE6YC76L6RXG4gICAgICogQHBhcmFtIGNvbGxlY3RzIOaOkuW6j+eahOmbhuWQiFxuICAgICAqIEBwYXJhbSBzdGFydCDlvIDlp4vkvY3nva5cbiAgICAgKiBAcGFyYW0gZW5kICAg57uT5p2f5L2N572uXG4gICAgICogQHBhcmFtIGtleSAgIOWmguaenOaYr+Wvueixoei/m+ihjOaOkuW6jyDpnIDopoHnlKjliLDnmoRrZXkgb2JqW2tleV0gaXMgbnVtYmVyXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcXVpY2tTb3J0SGFuZGxlPFQ+KGNvbGxlY3RzOiBBcnJheTxUPiwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGtleT86IHN0cmluZywgaXNCaWcgPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc05lZWRLZXk6IGJvb2xlYW4gPSAhIWtleTsvL+aYr+WQpumcgOimgeagueaNrmtleSDov5vooYzmjpLluo9cbiAgICAgICAgbGV0IG1pbmRleDogbnVtYmVyID0gc3RhcnQ7Ly9NYXRoLmZsb29yKCAoZW5kIC0gc3RhcnQpLzIgKTsvL+WPluesrOS4gOS4quWAvOaIluiAheS4remXtOeahOWAvFxuICAgICAgICBsZXQgbWlkVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1ttaW5kZXhdW2tleV0gOiBjb2xsZWN0c1ttaW5kZXhdO1xuICAgICAgICBsZXQgbWlkT3JnID0gY29sbGVjdHNbbWluZGV4XTsvL+S4remXtOeahOWOn+Wni+WAvFxuICAgICAgICBsZXQgaSA9IHN0YXJ0O1xuICAgICAgICBsZXQgaiA9IGVuZDtcblxuICAgICAgICB3aGlsZSAoaSA8IGopIHtcbiAgICAgICAgICAgIC8v5om+5Yiw5Y+z5L6n5q+U5Z+65YeG5YC85bCP55qEIOe0ouW8lSDlkIzml7bmmoLlgZzlj7PkvqfnmoTmn6Xor6LvvIzmiafooYzlt6bkvqfnmoTmn6Xor6LvvIzmib7liLDmr5Tln7rlh4blgLzlpKfmiorlvZPliY1q57Si5byV55qE5YC85pu/5o2i5o6J77yM6Ziy5q2i5pWw5YC86YeN5aSNXG4gICAgICAgICAgICBsZXQgY3VyclZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbal1ba2V5XSA6IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgaWYgKGlzQmlnKSB7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IGogJiYgY3VyclZhbHVlIDwgbWlkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgICAgICAgICBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tqXVtrZXldIDogY29sbGVjdHNbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgaiAmJiBjdXJyVmFsdWUgPiBtaWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgICAgIGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2pdW2tleV0gOiBjb2xsZWN0c1tqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5oqK5Y+z5L6n55qE5aSn55qE5YC86LWL57uZ5bem5L6nXG4gICAgICAgICAgICBpZiAoaSA8IGopIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0c1tpXSA9IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VyclZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbaV1ba2V5XSA6IGNvbGxlY3RzW2ldO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBqICYmIGN1cnJWYWx1ZSA8IG1pZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2ldW2tleV0gOiBjb2xsZWN0c1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkgPCBqKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdHNbal0gPSBjb2xsZWN0c1tpXTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBjb2xsZWN0c1tpXSA9IG1pZE9yZztcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgc3RhcnQsIGkgLSAxLCBrZXkpO1xuICAgICAgICBTb3J0VXRpbHMucXVpY2tTb3J0SGFuZGxlKGNvbGxlY3RzLCBpICsgMSwgZW5kLCBrZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlv6vpgJ/mjpLluo9cbiAgICAgKiBAcGFyYW0gY29sbGVjdHMg6ZyA6KaB5o6S5bqP55qE6ZuG5ZCIXG4gICAgICogQHBhcmFtIGtleSDlpoLmnpzmmK/lr7nosaHnmoTor53vvIzpnIDopoHmjInnhadrZXnov5vooYxcbiAgICAgKiBAcmV0dXJucyDov5Tlm57mjpLluo/lpb3nmoTpm4blkIhcbiAgICAgKi9cbiAgICBzdGF0aWMgcXVpY2tTb3J0Tm9kZTxUPihjb2xsZWN0czogQXJyYXk8VD4sIGtleT86IHN0cmluZyk6IEFycmF5PFQ+IHtcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgMCwgY29sbGVjdHMubGVuZ3RoIC0gMSwga2V5KTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3RzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlv6vpgJ/mjpLluo/nmoTpgLvovpFcbiAgICAgKiBAcGFyYW0gY29sbGVjdHMg5o6S5bqP55qE6ZuG5ZCIXG4gICAgICogQHBhcmFtIHN0YXJ0IOW8gOWni+S9jee9rlxuICAgICAqIEBwYXJhbSBlbmQgICDnu5PmnZ/kvY3nva5cbiAgICAgKiBAcGFyYW0ga2V5ICAg5aaC5p6c5piv5a+56LGh6L+b6KGM5o6S5bqPIOmcgOimgeeUqOWIsOeahGtleSBvYmpba2V5XSBpcyBudW1iZXJcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBxdWlja1NvcnROb2RlSGFuZGxlcjxUPihjb2xsZWN0czogQXJyYXk8VD4sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBrZXk/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzTmVlZEtleTogYm9vbGVhbiA9ICEha2V5Oy8v5piv5ZCm6ZyA6KaB5qC55o2ua2V5IOi/m+ihjOaOkuW6j1xuICAgICAgICBsZXQgbWluZGV4OiBudW1iZXIgPSBzdGFydDsvL01hdGguZmxvb3IoIChlbmQgLSBzdGFydCkvMiApOy8v5Y+W56ys5LiA5Liq5YC85oiW6ICF5Lit6Ze055qE5YC8XG4gICAgICAgIGxldCBtaWRWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW21pbmRleF1ba2V5XSA6IGNvbGxlY3RzW21pbmRleF07XG4gICAgICAgIGxldCBtaWRPcmcgPSBjb2xsZWN0c1ttaW5kZXhdOy8v5Lit6Ze055qE5Y6f5aeL5YC8XG4gICAgICAgIGxldCBpID0gc3RhcnQ7XG4gICAgICAgIGxldCBqID0gZW5kO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgLy/mib7liLDlj7Pkvqfmr5Tln7rlh4blgLzlsI/nmoQg57Si5byVIOWQjOaXtuaaguWBnOWPs+S+p+eahOafpeivou+8jOaJp+ihjOW3puS+p+eahOafpeivou+8jOaJvuWIsOavlOWfuuWHhuWAvOWkp+aKiuW9k+WJjWrntKLlvJXnmoTlgLzmm7/mjaLmjonvvIzpmLLmraLmlbDlgLzph43lpI1cbiAgICAgICAgICAgIGxldCBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tqXVtrZXldIDogY29sbGVjdHNbal07XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGogJiYgY3VyclZhbHVlID4gbWlkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICAgICAgY3VyclZhbHVlID0gaXNOZWVkS2V5ID8gY29sbGVjdHNbal1ba2V5XSA6IGNvbGxlY3RzW2pdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL+aKiuWPs+S+p+eahOWkp+eahOWAvOi1i+e7meW3puS+p1xuICAgICAgICAgICAgaWYgKGkgPCBqKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdHNbaV0gPSBjb2xsZWN0c1tqXTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJWYWx1ZSA9IGlzTmVlZEtleSA/IGNvbGxlY3RzW2ldW2tleV0gOiBjb2xsZWN0c1tpXTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgaiAmJiBjdXJyVmFsdWUgPCBtaWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjdXJyVmFsdWUgPSBpc05lZWRLZXkgPyBjb2xsZWN0c1tpXVtrZXldIDogY29sbGVjdHNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpIDwgaikge1xuICAgICAgICAgICAgICAgIGNvbGxlY3RzW2pdID0gY29sbGVjdHNbaV07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgY29sbGVjdHNbaV0gPSBtaWRPcmc7XG4gICAgICAgIFNvcnRVdGlscy5xdWlja1NvcnRIYW5kbGUoY29sbGVjdHMsIHN0YXJ0LCBpIC0gMSwga2V5KTtcbiAgICAgICAgU29ydFV0aWxzLnF1aWNrU29ydEhhbmRsZShjb2xsZWN0cywgaSArIDEsIGVuZCwga2V5KTtcbiAgICB9XG5cblxufSJdfQ==
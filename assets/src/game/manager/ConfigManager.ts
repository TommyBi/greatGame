import LoaderManager from "../../framework/manager/LoaderManager";
import Handler from "../../framework/base/Handler";
import PlayerModel from "../datas/PlayerModel";
import NResponer from "../../framework/message/NResponer";
import { Message } from "../view/Message";
import Utils from "../../framework/tools/Utils";
import Global from "../consts/Global";
import { crop_config, levelUp_config, level_config, order_config, order_weight_config, propType } from "../consts/CConst";
import SDKManager from "../../framework/manager/SDKManager";
import MKUtils from "../../framework/tools/MkUtils";

class ConfigManager {
    private static _instance: ConfigManager;

    private allConfig: any;
    public gameJson: object = {};//单个游戏json配置
    jsonLoadNum = 0;

    cashier_interval = 5;//收银台间隔几秒产出一次
    cashier_one = 10;//收银台间一次产出
    cashier_add_multiple = 3;//加速倍数
    cashier_add_times = 3;//加速分钟数
    add_speed_gold = 300;//作物加速所需钞票数

    crop_maxGet_interval = 6;//判定高产间隔次数
    crop_maxGet_rate = 0.6;//每次判定高产概率
    crop_maxGet_num = 5;//高产作物数量

    hard_hb_interval = 9;//辛苦红包收获作物数量间隔

    order_quality_add = [0, 10, 25, 40, 60, 80];

    crop: crop_config[];
    field: levelUp_config[];
    shelves: levelUp_config[];
    prop: levelUp_config[];
    level: level_config[];
    order: order_config[];
    order_weight: order_weight_config[];

    static instance() {
        if (!this._instance) {
            this._instance = new ConfigManager();
        }
        return this._instance;
    }

    init() {
        LoaderManager.loaderJson('allConf', Handler.create((res) => {
            this.allConfig = res.json;
            console.log("配置文件：", this.allConfig);
            this.crop = this.allConfig["crop_time"];
            this.field = this.allConfig["field"];
            this.shelves = this.allConfig["shelves"];
            this.prop = this.allConfig["prop"];
            this.level = this.allConfig["level"];
            this.order = this.allConfig["order"];
            this.order_weight = this.allConfig["order_weight"];

            NResponer.dispatch(Message.configComplete);

        }, this), 'config');
    }

    public loadGameZipJson(name, jsonStringArray, callback: Function, isLocalJson, path?: String, isRetry?: boolean) {
        if (this.gameJson[name]) {
            callback()
            return
        }

        if (isLocalJson) {
            this.jsonLoadNum = jsonStringArray.length
            // you now have every files contained in the loaded zip
            for (let i = 0; i < jsonStringArray.length; i++) {
                LoaderManager.loaderJson(jsonStringArray[i], Handler.create((res) => {
                    this.jsonLoadNum--
                    if (this.jsonLoadNum == 0) {
                        callback()
                    }
                }, this), 'config')
            }
        } else {
            let fullUrl = Global.JSON_SERVER_URL + name + ".zip"
            if (path) {
                fullUrl = path + name + ".zip"
            }

            // SDKManager.getInstance().sdkZibUtil(fullUrl, jsonStringArray, function (gafFiles) {
            //     cc.log("download file: ", gafFiles)
            //     DataManager.getInstance().jsonLoadNum = jsonStringArray.length
            //     // you now have every files contained in the loaded zip
            //     for (let i = 0; i < jsonStringArray.length; i++) {
            //         let fileString = gafFiles[jsonStringArray[i] + ".json"]
            //         let fileJson = JSON.parse(fileString)
            //         DataManager.getInstance().gameJson[jsonStringArray[i]] = fileJson

            //         DataManager.getInstance().jsonLoadNum --
            //         if (DataManager.getInstance().jsonLoadNum == 0) {
            //             callback()
            //         }
            //     }
            // }.bind(this), function () {
            //     //zip下载失败重新下载
            //     if (isRetry) {return}
            //     DataManager.getInstance().loadGameZipJson(name, jsonStringArray, callback, isLocalJson, path, true)
            // }.bind(this))
        }
    }

    getOrderList() {
        let orderList = [];
        let len = PlayerModel.orderLen;
        let time = Math.floor(Utils.returnTime() / 1000) + 3600;
        if (Global.isCeshi_version) {
            time = Math.floor(Utils.returnTime() / 1000) + 60;
        }

        if (SDKManager.hasNewOrderReward()) {
            // if (!PlayerModel.guideState) {
            let item = this.order[0];
            orderList.push({
                id: item.id, unlock: 1, time: time, index: 0,
                quality: item.quality, state: 0, cropList: [
                    { cropId: item.crop1, target: item.num1, num: 0 },
                    { cropId: item.crop2, target: item.num2, num: 0 },
                ]
            })
            len = PlayerModel.orderLen - 1;
        }
        let wegitCfg = this.getOrderWegit();
        for (let i = 0; i < len; i++) {
            let order = this.getOrderByWegit(wegitCfg);
            let value = {
                id: order.id, unlock: 1, time: time, index: i + 1,
                quality: order.quality, state: 0, cropList: [
                    { cropId: order.crop1, target: this.getOrderNumBySDK(order.num1), num: 0 },
                    { cropId: order.crop2, target: this.getOrderNumBySDK(order.num2), num: 0 },
                    { cropId: order.crop3, target: this.getOrderNumBySDK(order.num3), num: 0 },
                    { cropId: order.crop4, target: this.getOrderNumBySDK(order.num4), num: 0 },
                ]
            }
            // let random = MKUtils.randomNMF(0, 100);
            // if (random < 50) {
            //     let item = Utils.getRandomByArr(value.cropList);
            //     item.cropId = 100;
            // }
            this.sortCropList(value.cropList);
            orderList.push(value);
        }
        for (let k = 0; k < 5 - PlayerModel.orderLen; k++) {
            let value = {
                id: -1, unlock: 0, lastTime: -1, index: k + len,
                quality: 0, state: 0, cropList: [
                ]
            }
            orderList.push(value);
        }
        return orderList;

    }
    getOrder() {
        let wegitCfg = this.getOrderWegit();
        let order = this.getOrderByWegit(wegitCfg);
        let time = Math.floor(Utils.returnTime() / 1000) + 3600;
        if (Global.isCeshi_version) {
            time = Math.floor(Utils.returnTime() / 1000) + 60;
        }
        let value = {
            id: order.id, unlock: 1, time: time, index: 1,
            quality: order.quality, state: 0, cropList: [
                { cropId: order.crop1, target: this.getOrderNumBySDK(order.num1), num: 0 },
                { cropId: order.crop2, target: this.getOrderNumBySDK(order.num2), num: 0 },
                { cropId: order.crop3, target: this.getOrderNumBySDK(order.num3), num: 0 },
                { cropId: order.crop4, target: this.getOrderNumBySDK(order.num4), num: 0 },
            ]
        }
        // let random = MKUtils.randomNMF(0, 100);
        // if (random < 50) {
        //     let item = Utils.getRandomByArr(value.cropList);
        //     item.cropId = 100;
        // }
        this.sortCropList(value.cropList);
        return value;
    }
    //
    getOrderNumBySDK(num) {
        let flag = SDKManager.getOrderCountAdd();
        let num1 = Math.round((num * flag) / 100);
        return num1;
    }
    sortCropList(arr: any[]) {
        arr.sort((a, b) => {
            return a.cropId - b.cropId;
        })
    }
    getOrderByWegit(wegit) {
        let total = 0;
        for (let i = 1; i < 7; i++) {
            total += wegit["lv" + i];
        }
        let random = MKUtils.randomNMF(0, total);
        let wegitTotal = 0;
        let quality = 0;
        for (let j = 1; j < 7; j++) {
            wegitTotal += wegit["lv" + j];
            if (random < wegitTotal) {
                quality = j;
                break;
            }
        }
        let orderList = this.order.slice(1)
        let arr = orderList.filter((value, index) => {
            return value.quality == quality;
        })

        let order = Utils.getRandomByArr(arr);
        return order;
    }

    //获取当前幸福指数对应权重
    getOrderWegit() {
        let cfgList = this.order_weight;
        let xfzs = PlayerModel.getXfzs();
        let cfg: order_weight_config;
        if (xfzs >= cfgList[cfgList.length - 1].limit) {
            return cfgList[cfgList.length - 1];
        }
        for (let i = 0; i < cfgList.length; i++) {
            if (xfzs < cfgList[i].limit) {
                cfg = cfgList[i - 1];
                break;
            }
        }
        return cfg;
    }

    //获取设施
    getPropById(type, level): levelUp_config {
        let itemId = type + "0" + level;
        let arr = this.prop.filter((item) => {
            return item.id == Number(itemId);
        })
        return arr[0];
    }
    getPropMaxLv(type) {
        let arr = this.prop.filter((item) => {
            return item.type == type;
        })
        return arr.length;
    }
    //每个货架最多排队X位顾客
    getRoleMax() {
        let itemId = propType.road + "0" + PlayerModel.getUIConfig().roadlv;
        let arr = this.prop.filter((item) => {
            return item.id == Number(itemId);
        })
        return arr[0].add_num
    }

    /**
     * 地块配置
     * @param id 
     * @returns 
     */
    getFieldCfgByType(type, level) {
        let itemId = type + "0" + level;
        let arr = this.field.filter((item) => {
            return item.id == Number(itemId);
        })
        return arr[0];
    }
    getFieldMaxLv(type) {
        let arr = this.field.filter((item) => {
            return item.type == type;
        })
        return arr.length;
    }
    /**
     * 货架配置
     * @returns 
     */
    getShelveByType(type, level) {
        let itemId = type + "0" + level;
        let arr = this.shelves.filter((item) => {
            return item.id == Number(itemId);
        })
        return arr[0];
    }
    getShelveMaxLv(type) {
        let arr = this.shelves.filter((item) => {
            return item.type == type;
        })
        return arr.length;
    }
    /** 通过id索引作物 */
    getCropById(id: number): crop_config {
        return this.crop.filter(x => {
            return id == x.id;
        })[0];
    }
    //收银台每日自动获取钞票上限
    getCashierMax() {
        let lv = PlayerModel.getUIConfig().cashierlv;
        let id = Number(propType.cashier + "0" + lv);
        let arr = this.prop.filter((item) => {
            return item.id == id;
        })
        return arr[0].add_num;
    }
    //获取当前等级配置
    getCurrentLvCfg() {
        let lv = PlayerModel.getLevel();
        let arr = this.level.filter((cfg) => {
            return cfg.level == lv;
        })
        return arr[0];
    }
    /**
     * 获取作物成熟时间
     * @param id 
     * @param num 仓库中拥有数量
     * @returns 
     */
    getCropTime(id, num) {
        let numObj = this.crop[0];
        let key;
        let preKey;
        for (let numkey in numObj) {
            let value = numkey.slice(0, 5);
            if (value != "value") continue;
            if (!preKey) preKey = numkey;
            if (num <= numObj[numkey]) {
                key = preKey;
                break;
            }
            preKey = numkey;
        }

        if (!key) key = preKey;

        let timeObj: crop_config;
        for (let i = 1; i < this.crop.length; i++) {
            if (this.crop[i].id == id) {
                timeObj = this.crop[i];
            }
        }

        return timeObj[key];

    }
}

export default ConfigManager.instance();

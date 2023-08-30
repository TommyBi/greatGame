"use strict";
cc._RF.push(module, 'fbe8bWphk5MTILAjW/MJXs1', 'UIType');
// src/game/consts/UIType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoaderType_1 = require("./LoaderType");
var UIType = /** @class */ (function () {
    function UIType() {
    }
    UIType.init = function () {
        LoaderType_1.default.addUIModule(this.gameView);
        LoaderType_1.default.addUIModule(this.settingView);
        LoaderType_1.default.addUIModule(this.loginDay);
        LoaderType_1.default.addUIModule(this.popView1);
        LoaderType_1.default.addUIModule(this.popGcView);
        LoaderType_1.default.addUIModule(this.popZlView);
        LoaderType_1.default.addUIModule(this.popJsView);
        LoaderType_1.default.addUIModule(this.popRewardView);
        LoaderType_1.default.addUIModule(this.cashierView);
        LoaderType_1.default.addUIModule(this.VegetablesUnlockView);
        LoaderType_1.default.addUIModule(this.VegetablesView);
        LoaderType_1.default.addUIModule(this.WarehouseView);
        LoaderType_1.default.addUIModule(this.LvUpView);
        LoaderType_1.default.addUIModule(this.LvUpPopView);
        LoaderType_1.default.addUIModule(this.LvUpCompleteView);
        LoaderType_1.default.addUIModule(this.clearPestView);
        LoaderType_1.default.addUIModule(this.flyBoxView);
        LoaderType_1.default.addUIModule(this.xfzsView);
        LoaderType_1.default.addUIModule(this.xfzsHelpView);
        LoaderType_1.default.addUIModule(this.orderView);
        LoaderType_1.default.addUIModule(this.orderCurrentView);
        LoaderType_1.default.addUIModule(this.orderQualityView);
        LoaderType_1.default.addUIModule(this.orderGiveUpView);
        LoaderType_1.default.addUIModule(this.orderGetScuessView);
        LoaderType_1.default.addUIModule(this.orderSuccessView);
        LoaderType_1.default.addUIModule(this.orderRewardView);
        LoaderType_1.default.addUIModule(this.orderHbView);
        LoaderType_1.default.addUIModule(this.getCropView);
        LoaderType_1.default.addUIModule(this.taskRewardView);
        LoaderType_1.default.addUIModule(this.levelView);
        LoaderType_1.default.addUIModule(this.levelPopView);
        LoaderType_1.default.addUIModule(this.hardView);
        LoaderType_1.default.addUIModule(this.hardOpenView);
        LoaderType_1.default.addUIModule(this.PopGetCropView);
        LoaderType_1.default.addUIModule(this.TaskView);
    };
    UIType.gameView = { mname: "main", uname: "GameMainView", isRelease: false, url: null, clickClose: false }; //网格
    // setting
    UIType.settingView = { mname: "setting", uname: "SettingView", isRelease: false, url: null, clickClose: false };
    // CashierView
    UIType.cashierView = { mname: "cashier", uname: "CashierView", isRelease: false, url: null, clickClose: false };
    UIType.loginDay = { mname: "loginDay", uname: "LoginDay", isRelease: false, url: null, clickClose: true };
    UIType.popView1 = { mname: "popView", uname: "PopView1", isRelease: false, url: null, clickClose: false };
    UIType.popGcView = { mname: "popView", uname: "PopGcView", isRelease: false, url: null, clickClose: false };
    UIType.popZlView = { mname: "popView", uname: "PopZlView", isRelease: false, url: null, clickClose: false };
    UIType.popJsView = { mname: "popView", uname: "PopJsView", isRelease: false, url: null, clickClose: false };
    UIType.popRewardView = { mname: "popView", uname: "PopRewardView", isRelease: false, url: null, clickClose: false };
    UIType.PopGetCropView = { mname: "popView", uname: "PopGetCropView", isRelease: false, url: null, clickClose: false };
    // vegetables
    UIType.VegetablesView = { mname: "vegetables", uname: "VegetablesView", isRelease: false, url: null, clickClose: false };
    // VegetablesUnlockView 
    UIType.VegetablesUnlockView = { mname: "vegetables", uname: "VegetablesUnlockView", isRelease: false, url: null, clickClose: false };
    // LvUpView
    UIType.LvUpView = { mname: "lvUp", uname: "LvUpView", isRelease: false, url: null, clickClose: false };
    UIType.LvUpPopView = { mname: "lvUp", uname: "LvUpPopView", isRelease: false, url: null, clickClose: false };
    UIType.LvUpCompleteView = { mname: "lvUp", uname: "LvUpCompleteView", isRelease: false, url: null, clickClose: false };
    //clearPest
    UIType.clearPestView = { mname: "clearPest", uname: "ClearPestView", isRelease: false, url: null, clickClose: false };
    //flyBox
    UIType.flyBoxView = { mname: "flyBox", uname: "FlyBoxView", isRelease: false, url: null, clickClose: false };
    //xfzs
    UIType.xfzsView = { mname: "xfzs", uname: "XfzsView", isRelease: false, url: null, clickClose: false };
    UIType.xfzsHelpView = { mname: "xfzs", uname: "XfzsHelpView", isRelease: false, url: null, clickClose: false };
    //order
    UIType.orderView = { mname: "order", uname: "OrderView", isRelease: false, url: null, clickClose: false };
    UIType.orderQualityView = { mname: "order", uname: "OrderQualityView", isRelease: false, url: null, clickClose: false };
    UIType.orderCurrentView = { mname: "order", uname: "OrderCurrentView", isRelease: false, url: null, clickClose: false };
    UIType.orderGiveUpView = { mname: "order", uname: "OrderGiveUpView", isRelease: false, url: null, clickClose: false };
    UIType.orderGetScuessView = { mname: "order", uname: "OrderGetScuessView", isRelease: false, url: null, clickClose: false };
    UIType.orderHbView = { mname: "order", uname: "OrderHbView", isRelease: false, url: null, clickClose: false };
    UIType.orderSuccessView = { mname: "order", uname: "OrderSuccessView", isRelease: false, url: null, clickClose: false };
    UIType.orderRewardView = { mname: "order", uname: "OrderRewardView", isRelease: false, url: null, clickClose: false };
    UIType.getCropView = { mname: "order", uname: "GetCropView", isRelease: false, url: null, clickClose: false };
    UIType.zhaoDaiView = { mname: "order", uname: "ZhaoDaiView", isRelease: false, url: null, clickClose: false };
    //TaskView
    UIType.TaskView = { mname: "task", uname: "TaskView", isRelease: false, url: null, clickClose: false };
    // taskRewardView
    UIType.taskRewardView = { mname: "task", uname: "TaskRewardView", isRelease: false, url: null, clickClose: false };
    // levelView
    UIType.levelView = { mname: "level", uname: "LevelView", isRelease: false, url: null, clickClose: false };
    UIType.levelPopView = { mname: "level", uname: "LevelPopView", isRelease: false, url: null, clickClose: false };
    UIType.hardView = { mname: "hbPop", uname: "HardView", isRelease: false, url: null, clickClose: false };
    UIType.hardOpenView = { mname: "hbPop", uname: "HardOpenView", isRelease: false, url: null, clickClose: false };
    // warehouse
    UIType.WarehouseView = { mname: "warehouse", uname: "WarehouseView", isRelease: false, url: null, clickClose: false };
    return UIType;
}());
exports.default = UIType;

cc._RF.pop();
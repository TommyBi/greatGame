import LoaderType from "./LoaderType";

export default class UIType {



    static gameView = { mname: "main", uname: "GameMainView", isRelease: false, url: null, clickClose: false }//网格
    // setting
    static settingView = { mname: "setting", uname: "SettingView", isRelease: false, url: null, clickClose: false };
    // CashierView
    static cashierView = { mname: "cashier", uname: "CashierView", isRelease: false, url: null, clickClose: false };

    static loginDay = { mname: "loginDay", uname: "LoginDay", isRelease: false, url: null, clickClose: true };
    static popView1 = { mname: "popView", uname: "PopView1", isRelease: false, url: null, clickClose: false };
    static popGcView = { mname: "popView", uname: "PopGcView", isRelease: false, url: null, clickClose: false };
    static popZlView = { mname: "popView", uname: "PopZlView", isRelease: false, url: null, clickClose: false };
    static popJsView = { mname: "popView", uname: "PopJsView", isRelease: false, url: null, clickClose: false };
    static popRewardView = { mname: "popView", uname: "PopRewardView", isRelease: false, url: null, clickClose: false };
    static PopGetCropView = { mname: "popView", uname: "PopGetCropView", isRelease: false, url: null, clickClose: false };
    // vegetables
    static VegetablesView = { mname: "vegetables", uname: "VegetablesView", isRelease: false, url: null, clickClose: false };
    // VegetablesUnlockView 
    static VegetablesUnlockView = { mname: "vegetables", uname: "VegetablesUnlockView", isRelease: false, url: null, clickClose: false };
    // LvUpView
    static LvUpView = { mname: "lvUp", uname: "LvUpView", isRelease: false, url: null, clickClose: false };
    static LvUpPopView = { mname: "lvUp", uname: "LvUpPopView", isRelease: false, url: null, clickClose: false };
    static LvUpCompleteView = { mname: "lvUp", uname: "LvUpCompleteView", isRelease: false, url: null, clickClose: false };
    //clearPest
    static clearPestView = { mname: "clearPest", uname: "ClearPestView", isRelease: false, url: null, clickClose: false };
    //flyBox
    static flyBoxView = { mname: "flyBox", uname: "FlyBoxView", isRelease: false, url: null, clickClose: false };
    //xfzs
    static xfzsView = { mname: "xfzs", uname: "XfzsView", isRelease: false, url: null, clickClose: false };
    static xfzsHelpView = { mname: "xfzs", uname: "XfzsHelpView", isRelease: false, url: null, clickClose: false };
    //order
    static orderView = { mname: "order", uname: "OrderView", isRelease: false, url: null, clickClose: false };
    static orderQualityView = { mname: "order", uname: "OrderQualityView", isRelease: false, url: null, clickClose: false };
    static orderCurrentView = { mname: "order", uname: "OrderCurrentView", isRelease: false, url: null, clickClose: false };
    static orderGiveUpView = { mname: "order", uname: "OrderGiveUpView", isRelease: false, url: null, clickClose: false };
    static orderGetScuessView = { mname: "order", uname: "OrderGetScuessView", isRelease: false, url: null, clickClose: false };
    static orderHbView = { mname: "order", uname: "OrderHbView", isRelease: false, url: null, clickClose: false };
    static orderSuccessView = { mname: "order", uname: "OrderSuccessView", isRelease: false, url: null, clickClose: false };
    static orderRewardView = { mname: "order", uname: "OrderRewardView", isRelease: false, url: null, clickClose: false };
    static getCropView = { mname: "order", uname: "GetCropView", isRelease: false, url: null, clickClose: false };
    static zhaoDaiView = { mname: "order", uname: "ZhaoDaiView", isRelease: false, url: null, clickClose: false };
    //TaskView
    static TaskView = { mname: "task", uname: "TaskView", isRelease: false, url: null, clickClose: false };
    // taskRewardView
    static taskRewardView = { mname: "task", uname: "TaskRewardView", isRelease: false, url: null, clickClose: false };
    // levelView
    static levelView = { mname: "level", uname: "LevelView", isRelease: false, url: null, clickClose: false };
    static levelPopView = { mname: "level", uname: "LevelPopView", isRelease: false, url: null, clickClose: false };
    
    static hardView = { mname: "hbPop", uname: "HardView", isRelease: false, url: null, clickClose: false };
    static hardOpenView = { mname: "hbPop", uname: "HardOpenView", isRelease: false, url: null, clickClose: false };


    // warehouse
    static WarehouseView = { mname: "warehouse", uname: "WarehouseView", isRelease: false, url: null, clickClose: false };



    static init() {
        LoaderType.addUIModule(this.gameView);
        LoaderType.addUIModule(this.settingView);
        LoaderType.addUIModule(this.loginDay);
        LoaderType.addUIModule(this.popView1);
        LoaderType.addUIModule(this.popGcView);
        LoaderType.addUIModule(this.popZlView);
        LoaderType.addUIModule(this.popJsView);
        LoaderType.addUIModule(this.popRewardView);
        LoaderType.addUIModule(this.cashierView);
        LoaderType.addUIModule(this.VegetablesUnlockView);
        LoaderType.addUIModule(this.VegetablesView);
        LoaderType.addUIModule(this.WarehouseView);
        LoaderType.addUIModule(this.LvUpView);
        LoaderType.addUIModule(this.LvUpPopView);
        LoaderType.addUIModule(this.LvUpCompleteView);
        LoaderType.addUIModule(this.clearPestView);
        LoaderType.addUIModule(this.flyBoxView);
        LoaderType.addUIModule(this.xfzsView);
        LoaderType.addUIModule(this.xfzsHelpView);
        LoaderType.addUIModule(this.orderView);
        LoaderType.addUIModule(this.orderCurrentView);
        LoaderType.addUIModule(this.orderQualityView);
        LoaderType.addUIModule(this.orderGiveUpView);
        LoaderType.addUIModule(this.orderGetScuessView);
        LoaderType.addUIModule(this.orderSuccessView);
        LoaderType.addUIModule(this.orderRewardView);
        LoaderType.addUIModule(this.orderHbView);
        LoaderType.addUIModule(this.getCropView);
        LoaderType.addUIModule(this.taskRewardView);
        LoaderType.addUIModule(this.levelView);
        LoaderType.addUIModule(this.levelPopView);
        LoaderType.addUIModule(this.hardView);
        LoaderType.addUIModule(this.hardOpenView);
        LoaderType.addUIModule(this.PopGetCropView);

        LoaderType.addUIModule(this.TaskView);
    }

}
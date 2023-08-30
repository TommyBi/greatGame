class BaseSdk{
    protected _basePath_android : string = "com.xstone.android.xsbusi.XSSdk";
    protected _moudelPath_android : string = "com.xstone.android.xsbusi.XSBusiSdk";
    protected _baseCocos : string = "org/cocos2dx/javascript/AppActivity";
    constructor(){
    }
    isAndroid(){
        return cc.sys.os == cc.sys.OS_ANDROID;
    }
    isIphone(){
        return cc.sys.os == cc.sys.OS_IOS;
    }
    systemName(){
        if(this.isAndroid()){
            console.log("********************设备为Andrioid");
        }else if(this.isIphone()){
            console.log("********************设备为Iphone");
        }
    }
}
export default BaseSdk;
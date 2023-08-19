import BaseSdk from "./BaseSdk";

class Launcher extends BaseSdk {
    constructor() {
        super();
        console.log("SDK ------------------------------------------>Launcher complete");        
    }
    //服务器时间
    getServerTime(){
        let time;
        if(this.isAndroid()){
            console.log("安卓设备",this._basePath_android);
            time = jsb.reflection.callStaticMethod(this._basePath_android,"getCurrentTime","()Ljava/lang/String;");
        }else if(this.isIphone()){
            console.log("苹果设备");
        }else{
            console.log("未识别设备");
        }
        console.log("服务器时间为",time);
        return time;
    }
    //用户余额
    getUserAmount(){
        let m = 0;
        if(this.isAndroid()){
            m = jsb.reflection.callStaticMethod(this._moudelPath_android,"getUserAmount","()Ljava/lang/String;");
        }else if(this.isIphone()){

        }
        if(!m){
            m = 0;
        }
        this.systemName();
        console.log("********************用户余额********************",m);
        return m;
    }
    //通关总数
    getSUCCCount(){
        let c = 0;
        if(this.isAndroid()){
            c = jsb.reflection.callStaticMethod(this._moudelPath_android,"getSUCCCount","()I");
        }else if(this.isIphone()){

        }
        return c;
    }
    //合成上报
    reportSynthetic(){
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"reportSynthetic","()V");
        }else if(this.isIphone()){

        }
        this.systemName();
        console.log("******************合成上报******************");
        this.vibrate(100);
    }
    //领红包奖励接口
    getRedPacketReward(configId:string,isVideo : boolean){
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"getRedPacketReward","(Ljava/lang/String;Z)V",configId,isVideo);
        }else if(this.isIphone()){

        }
        this.systemName();
        console.log("******************领红包****************** ID",configId,"  isVideo ",isVideo);
    }
    //获取任务金额和状态
    getTaskListData(){
        let t = "";
        if(this.isAndroid()){
            t = jsb.reflection.callStaticMethod(this._moudelPath_android,"getTaskListData","()Ljava/lang/String;");
        }else if(this.isIphone()) {

        }
        // TaskManager.
        console.log("******************任务金额和状态******************",t);
        return t;
    }
    //任务展示
    getTaskInfo(taskId:number){
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"getTaskInfo","(I)V",taskId);
        }else if(this.isIphone()) {

        }
        console.log("******************任务展示******************",taskId);
    }
    //任务领取奖励
    getTaskReward(taskId:number){
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"getTaskReward","(I)V",taskId);
        }else if(this.isIphone()) {

        }
        console.log("******************任务展示******************",taskId);
    }
    //气泡提示信息
    getGuideBubblesText(){
        let b = "";
        if(this.isAndroid()){
            b = jsb.reflection.callStaticMethod(this._moudelPath_android,"getGuideBubblesText","()Ljava/lang/String;");
        }else if(this.isIphone()) {

        }
        return b;
    }
    //下次抽奖需要的分数
    getNextDrawScore(){
        let s = 0;
        if(this.isAndroid()){
            s = jsb.reflection.callStaticMethod(this._moudelPath_android,"getNextDrawScore","()I");
            console.log("下次需要的",s);
        }else if(this.isIphone()) {

        }
        return s;
    }
    //提现抽奖的当前分数
    getCurrentScore(){
        let s = 0;
        if(this.isAndroid()){
            s = jsb.reflection.callStaticMethod(this._moudelPath_android,"getCurrentScore","()I");
            console.log("当前的",s);
        }else if(this.isIphone()) {

        }
        return s;
    }
    //微信是否登录
    isWXBind(){
        let i = false;
        if(this.isAndroid()){
            i = jsb.reflection.callStaticMethod(this._moudelPath_android,"isWXBind","()Z");
        }else if(this.isIphone()) {

        }
        return i;
    }
    //退出微信登录
    unBindWX(){
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"unBindWX","()V");
        }else if(this.isIphone()) {

        }
    }
    //用户昵称
    getUserNickName(){
        let n = undefined;
        if(this.isAndroid()){
            n = jsb.reflection.callStaticMethod(this._moudelPath_android,"getUserNickName","()Ljava/lang/String;");
        }else if(this.isIphone()) {

        }
        return n;
    }
    //用户头像
    getUserIcon(){
        let n = "";
        if(this.isAndroid()){
            n = jsb.reflection.callStaticMethod(this._moudelPath_android,"getUserIcon","()Ljava/lang/String;");
        }else if(this.isIphone()) {

        }
        return n;
    }
    //隐私政策
    openPrivacy(){
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"openPrivacy","()V");
        }else if(this.isIphone()) {

        }
    }
    //用户协议
    openUserService(){
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"openUserService","()V");
        }else if(this.isIphone()) {

        }
    }
    //意见反馈
    openFeedBack(){
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"openFeedBack","()V");
        }else if(this.isIphone()) {

        }
    }
    //打开提现页面
    openWithdraw(){
        console.log("*************************打开提现界面*************************");
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._moudelPath_android,"openWithdraw","()V");
        }else if(this.isIphone()) {

        }
    }
    //震动
    vibrate(time:number){
        console.log("*************************震动效果*************************");
        if(this.isAndroid()){
            jsb.reflection.callStaticMethod(this._baseCocos,"vibrate","(I)V",time);
        }else{

        }
    }
    //测试接口
    testResult(){
        let test : string = "";
        if(this.isAndroid()){
            let test2 = jsb.reflection.callStaticMethod(this._moudelPath_android,"testResult","()Ljava/lang/String;");
            console.log("*************************测试接口*****************2222222222222********",test);
        }else if(this.isIphone()){

        }
        console.log("*************************测试接口*************************",test);
        return test;
    }
}
export default Launcher;
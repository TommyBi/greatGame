import Handler from "../base/Handler";
import GroupLoader from "../loader/GroupLoader";
import { GroupFileData } from "../loader/GroupData";
import Loader from "../loader/Loader";
import ComponentHelper from "../tools/ComponentHelper";
import UIMananger from "./UIMananger";
import UIType from "../../game/consts/UIType";
import { UIEffectType } from "./UIEffectManager";

/**
 * 资源加载模块数据
 */
export interface moduleData {
    mname:string,//模块名称
    url:string, //模块对应的路径
    isRelease:boolean //释放可以释放
}

class LoaderManager
{
    //模块配置数据,由外部传入
    private moudleConfigs = <moduleData>{};
    //loader 模块加载器
    private moudleLoaders = <Loader>{};
    private groupLoader:GroupLoader = null;

    private static _instance:LoaderManager;
    
    public static instance():LoaderManager
    {
        if (!this._instance) {
            this._instance = new LoaderManager();
        }
        return this._instance;
    }

    /**
     * 
     * @param fileName 文件名
     * @param type 文件类型
     * @param handler 回调函数
     * @param mname 模块名
     */
    loadRes(fileName:string,type:any,handler:Handler,mname:string){
        let info:moduleData = this.checkModuleConfig(mname);
        if(!!info) {
            if (!this.moudleLoaders[mname]){
                this.moudleLoaders[mname] = new Loader(info.isRelease);
            }
            let url = info.url + '/' + fileName;
            this.moudleLoaders[mname].addLoaderItem(url,type,handler);
        } else {
            cc.error('module no exist: ' + mname);
        }
    }

    /**
     * 设置模块数据 外部调用
     * @param data 模块数据
     */
    setModuleConfig(data:moduleData)
    {
        if (!!data) {
            if (!this.moudleConfigs.hasOwnProperty(data.mname))
            {
                this.moudleConfigs[data.mname] = data;
            }
        } else {
            cc.error('module config error');
        }
    }

    /**
     * 加载sprite
     * @param fileName 
     * @param handler 
     * @param mname 
     */
    loaderSpriteFrame(fileName:string,handler:Handler,mname:string){
        this.loadRes(fileName,cc.SpriteFrame,handler,mname);
    }

    /**
     * 加载Prefab
     * @param fileName 
     * @param handler 
     * @param mname 
     */
    loaderPrefab(fileName:string,handler:Handler,mname:string)
    {
        this.loadRes(fileName,cc.Prefab,handler,mname);
    }

    /**
     * 加载json
     * @param fileName 
     * @param handler 
     * @param mname 
     */
    loaderJson(fileName:string,handler:Handler,mname:string) {
        this.loadRes(fileName,cc.JsonAsset,handler,mname);
    }

    /**
     * 加载spine
     * @param fileName 
     * @param handler 
     * @param mname 
     */
    loaderSpine(fileName:string,handler:Handler,mname:string) {
        this.loadRes(fileName,sp.SkeletonData,handler,mname);
    }

    /**
     * 加载动画
     * @param fileName 
     * @param handler 
     * @param mname 
     */
    loaderAniamteClip(fileName:string,handler:Handler,mname:string)
    {
        this.loadRes(fileName,cc.AnimationClip,handler,mname)
    }

    /**
     * 加载sprite并赋值
     * @param node sprite节点
     * @param fileName 文件名
     * @param mname 模块名
     */
    load2Sprite(node:cc.Node,fileName:string,mname:string)
    {
        this.loadRes(fileName,cc.SpriteFrame,Handler.create((res)=>{
            ComponentHelper.spriteFrame(node,res);
        },this),mname);
    }

    /**
     * 资源按组加载
     * @param resArr 资源集合
     * @param handler 全部加载完成回调
     */
    loaderResByGroup(resArr:Array<GroupFileData>,handler:Handler)
    {
        if (!this.groupLoader) {
            this.groupLoader = new GroupLoader();
        }
        this.groupLoader.addGroup(resArr,handler);
    }


    //通过loaderInfo加载资源 主要用于资源内存管理
    /**
     * 检查释放配置过对应的模块
     * @param moduleName 模块名称
     */
    private checkModuleConfig(moduleName:string):moduleData
    { 
        if (!!this.moudleConfigs[moduleName]) {
            return this.moudleConfigs[moduleName];
        }
        return null;
    }

    /**
     * 释放模块
     * @param moduleName 模块名称
     */
    releaseByModule(moduleName:string){
        let exsitResource = {};
        //生成排除的资源集合
        for (let key in this.moudleLoaders) {
            if (!this.moudleLoaders[key].needRelease && key != moduleName) {
                this.moudleLoaders[key].getAllResUID(exsitResource);
            }
        }
        let needRelease = this.moudleLoaders[moduleName];
        if (needRelease) {
            needRelease.release(exsitResource);
        }
        // cc.log(this.moudleLoaders);
    }

    releaseAllModule()
    {
        for (let key in this.moudleLoaders) {
            this.moudleLoaders[key].releaseItem();
        }
    }

    //mname 模块名
    isRelease(mname:string)
    {
        if (this.moudleLoaders.hasOwnProperty(mname)) {
            return this.moudleLoaders[mname].needRelease;
        }
        return false;
    }
   
}
export default LoaderManager.instance();
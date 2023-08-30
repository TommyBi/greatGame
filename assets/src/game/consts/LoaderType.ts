import LoaderManager, { moduleData } from "../../framework/manager/LoaderManager";
export enum ModuleType {
    commonRes = "commonRes",
    gameRes = 'gameRes',
    
}
export default class LoaderType {
    static UIURL :string =  "prefab/";
    static textures = {
        'commonRes':{mname:'commonRes',url:'texture/common',isRelease:false},
        'gameRes':{mname:'gameRes',url:'texture/itemIcon1',isRelease:false},
    }
    
    static prefabs = {
        itemIcon:{mname:'itemIcon',url:'prefab/main',isRelease:true},
    }

    static config = {mname:'config',url:'config',isRelease:true}

    //命名规则 texture 统一 用 res 当后缀，prefab无特殊后缀
    static initConfig(){
        let key;
        //prefab
        for(key in this.prefabs)
        {
            LoaderManager.setModuleConfig(this.prefabs[key]);
        }

        //textures
        for(key in this.textures){
            LoaderManager.setModuleConfig(this.textures[key]);
        }

        //config
        LoaderManager.setModuleConfig(this.config);

    }

    /**
     * 添加UI加载模块
     */
    static addUIModule(data)
    {
        if (!!data) {
            data.url = this.UIURL + data.mname;
            LoaderManager.setModuleConfig(data);
        }
        
    }
}
export default class StorageHelper {

    static saveValueByKey(key:string,value:string|number)
    {
        cc.sys.localStorage.setItem(key,value);
    }

    static getValueByKey(key:string): string
    {
        return cc.sys.localStorage.getItem(key);
    }
    
    static saveJsonByKey(key:string,value:object)
    {
        this.saveValueByKey(key,JSON.stringify(value));
    }

    static getJsonByKey(key:string)
    {
        var jsonStr = cc.sys.localStorage.getItem(key);
        if(jsonStr)
        {
            return JSON.parse(jsonStr);
        }
        return null;
        
    }

    static removeValueByKey(key:string)
    {
        return cc.sys.localStorage.removeItem(key);
    }

    static removeAll()
    {
        cc.sys.localStorage.clear();
    }
}
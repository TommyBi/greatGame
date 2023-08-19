import GroupData, { GroupFileData } from "./GroupData";
import LoaderManager from "../manager/LoaderManager";
import Handler from "../base/Handler";

export default class GroupLoader  {
    private groupArr:Array<GroupData> = [];//组的队列
    
    addGroup(arr:Array<GroupFileData>,handler:Handler){
        if (!!arr) {
            let data = this._getGroupData();
            let ghandler = data.getCompletetHandler();
            data.resources = arr;
            data.handler = handler;
            for (let index = 0; index < arr.length; index++) {
                const element:GroupFileData = arr[index];
                LoaderManager.loadRes(element.fileName,element.type,ghandler,element.moduleName);
            }
        } else {
            cc.error('add group data error');
        }
    }

    _getGroupData(){
        for (let index = 0; index < this.groupArr.length; index++) {
            const element = this.groupArr[index];
            if (!element.isActive) {
                element.isActive = true;
                return element;
            }
        }
        let data = new GroupData();
        this.groupArr.push(data);
        return data;
    }
}


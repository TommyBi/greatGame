// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import SortUtils from "../../framework/tools/SortUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleController extends cc.Component {


    // onLoad () {}
    isShort = 0;
    toatl = 0;
    start() {


    }

    update(dt) { }

    protected lateUpdate(dt: number): void {

        this.isShort++;

        
        if (this.isShort >= 10) {
            let arr = this.node.children;
            // SortUtils.quickSort(arr, "y");
            SortUtils.bubbleSort(arr, "y");

            this.isShort = 0;

            let len = arr.length;
            for (let i = 0; i < len; i++) {
                arr[i].zIndex = i;
            }
        }
    }
}

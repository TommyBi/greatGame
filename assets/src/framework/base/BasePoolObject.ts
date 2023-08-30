//prefab实例的引用壳子 主要用于复用
export default class BasePoolObject
{
    public isActive:boolean = false;//当前prefab是否可用
    public isObjectActive:boolean = false;//该壳子是否可用
    public pName:string = null;//prefab name
    public target:any = null;//该实例的prefab 使用在的目标对象
    public prefab:cc.Node = null;

    /**
     * 
     * @param name 名称
     * @param instance 对象池实例
     * @param target 绑定到目标对象的唯一标识
     */
    setData(name:string,instance:cc.Node,target:number|string){
        this.isActive = true;
        this.isObjectActive = true;
        this.target = target;
        this.prefab = instance;
        this.pName = name;
    }

    setTarget(target:number|string){
        this.isActive = true;
        this.isObjectActive = true;
        this.target = target;
    }

    //重置表示prefab还能被使用
    reset(){
        this.isActive = false;
        this.target = null;
    }

    isSameNode(uuid)
    {
        if (cc.isValid(this.prefab)) {
            return this.prefab.uuid === uuid;
        }
        return false;
    }

    //prefab不能被用，但是壳子还可以被使用
    clear(){
        this.isActive = false;
        this.pName = null;//prefab name
        this.target = null;
        this.isObjectActive = false;
        if (cc.isValid(this.prefab)) {
            this.prefab.destroy();
        }
        this.prefab = null;
    }
}
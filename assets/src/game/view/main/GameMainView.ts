import JSHelper from "../../../framework/helper/JSHelper";
import GamePoolManager from "../../../framework/manager/GamePoolManager";
import SDKManager from "../../../framework/manager/SDKManager";
import { UIEffectType } from "../../../framework/manager/UIEffectManager";
import UIMananger from "../../../framework/manager/UIMananger";
import EventDispath from "../../../framework/message/EventDispath";
import { EventType } from "../../../framework/message/EventType";
import ComponentHelper from "../../../framework/tools/ComponentHelper";
import MKUtils from "../../../framework/tools/MkUtils";
import Utils from "../../../framework/tools/Utils";
import BaseView from "../../../framework/ui/BaseView";
import { CURRENCY, CURRENCY_FLY_COUNT, propType } from "../../consts/CConst";
import Global from "../../consts/Global";
import UIType from "../../consts/UIType";
import PlayerModel from "../../datas/PlayerModel";
import ConfigManager from "../../manager/ConfigManager";
import EffectManager from "../../manager/EffectManager";
import MessageCenter from "../../manager/MessageCenter";
import { PopType } from "../popView/PopView1";
import CashierPrefab from "./CashierPrefab";
import FencePrefab from "./FencePrefab";
import FieldPrefab from "./FieldPrefab";
import PipePrefab from "./PipePrefab";
import RoadPrefab from "./RoadPrefab";
import RolePrefab from "./RolePrefab";
import ScarecrowPrefab from "./ScarecrowPrefab";
import ShelvePrefab, { putOnConfig } from "./ShelvePrefab";
import WallPrefab from "./WallPrefab";
import WarehousePrefab from "./WarehousePrefab";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameMainView extends BaseView {

    @property(cc.Prefab)
    roadPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    wallPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    cashierPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    pipePrefab: cc.Prefab = null;
    @property(cc.Prefab)
    shelvePrefab: cc.Prefab = null;
    @property(cc.Prefab)
    fieldPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    fencePrefab: cc.Prefab = null;
    @property(cc.Prefab)
    warehousePrefab: cc.Prefab = null;
    @property(cc.Prefab)
    scarecrowPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    rolePrefab: cc.Prefab = null;
    @property(cc.Prefab)
    barragePrefab: cc.Prefab = null;

    @property(cc.Node)
    btn_lvUp: cc.Node = null;
    @property(cc.Node)
    btn_task: cc.Node = null;
    @property(cc.Node)
    btn_zlgk: cc.Node = null;
    @property(cc.Node)
    btn_ljcs: cc.Node = null;
    @property(cc.Node)
    btn_order: cc.Node = null;
    @property(cc.Node)
    shouTips: cc.Node = null;
    @property(cc.Node)
    lock: cc.Node = null;

    @property(cc.Node)
    btn_test1: cc.Node = null;
    @property(cc.Node)
    btn_test2: cc.Node = null;
    @property(cc.Node)
    btn_test3: cc.Node = null;

    @property(sp.Skeleton)
    jx_sc: sp.Skeleton = null;

    // private road: cc.Node;//道路
    // private wall: cc.Node;//墙
    // private cashier: cc.Node;//收银台
    // private pipe: cc.Node;//水管
    // private shelvesGp: cc.Node;//货架
    // private shelvesList: cc.Node[];//货架列表
    // private field: cc.Node;//菜地
    // private fieldList: cc.Node[];//菜地列表
    // private fence: cc.Node;//菜地围栏
    // private warehouse: cc.Node;//仓库
    // private scarecrow: cc.Node;//装饰稻草人
    addSpeedTips: cc.Node;

    roleNode: cc.Node;
    bottom: cc.Node;

    rolePfb: cc.Node;
    roadPfb: cc.Node;
    wallPfb: cc.Node;
    cashierPfb: CashierPrefab;
    pipePfb: cc.Node;
    shelvesPfbList: ShelvePrefab[] = [];
    fieldPfbList: FieldPrefab[] = [];
    fencePfb: cc.Node;
    warehousePfb: cc.Node;
    scarecrowPfb: cc.Node;
    roleIdList = [];
    cloneRoleIdList = [];
    roleList: RolePrefab[] = [];
    box: cc.Node;

    hkhb: cc.Node;
    hkIcon: cc.Node;
    hkDesc: cc.RichText;
    hkLb: cc.Label;
    hkPro: cc.ProgressBar;

    taskHd: cc.Node;
    taskHdLab: cc.Label;

    zl_addOne: cc.Node;
    zl: cc.Node;
    zl_one: cc.Node;
    zl_guideTime = 20;
    zl_guideState = 0;
    zl_guideInterval = 0;
    zl_state = 0;//0：手动招揽，1：自动招揽，2：自动招揽中
    zlClcikNum = 0;//招揽顾客按钮点击次数
    zl_roleNum = 0;
    zl_auto_num = 0;//自动招揽人数
    isAutoSolicit = false;

    createTime: number = 3;//自动招揽时间间隔
    currentTime: number = 0;

    onLoad() {
        this._initComponet();
        this.bottom.y = -cc.winSize.height / 2;

        this.roleIdList = Utils.createArr(1, 11);

        GamePoolManager.initRolePool(this.rolePrefab);

        this.changeZlBtn();

        // SDKManager.getTaskRewardCount();


    }

    protected update(dt: number): void {

        if (PlayerModel.guideStep >= 0) return;
        this.currentTime += dt;
        if (this.zl_state == 2) {
            // this.zl_pro.progress = this.currentTime / 2;
            // if (this.currentTime > 2) {
            //     this.createRole();
            //     this.currentTime = 0;
            // }
        } else {
            if (this.currentTime > PlayerModel.getAutoRoleTime()) {
                this.createRole();
                this.currentTime = 0;
            }
        }
    }
    filedTips() {
        // this.shouTips.stopAllActions();
        // this.shouTips.active = false;
        // if (!this.shouTips.active) {
        //     let node: cc.Node;
        //     for (let i = 0; i < this.fieldPfbList.length; i++) {
        //         let item = this.fieldPfbList[i];
        //         if (item.config.cropId == 0 && item.config.state > 0) {
        //             node = item.node;
        //             break;
        //         }
        //     }
        //     if (node) {
        //         this.shouTips.active = true;
        //         let p = Utils.convertNodeToNodeSpace(node, this.node)
        //         this.shouTips.setPosition(p.x, p.y + 150);
        //         ComponentHelper.setHeartAction(this.shouTips);
        //     }
        // }
    }

    start() {

        // if (PlayerModel.guideStep >= 0) return;
        if (PlayerModel.guideState) this.createRole();
        // MKUtils.setNodeDelay(this.node, 2, () => {
        //     this.createRole();
        // })

        this.zl_roleNum = PlayerModel.getZlNum();

        let max = ConfigManager.getCurrentLvCfg().sdzl;//单次最大招揽人数

        this.zlClcikNum = 0;
        if (this.zl_roleNum >= max) {
            this.zl_state = 1;
            this.zl_roleNum = 0;
            this.changeZlBtn();
        }

        MKUtils.setNodeDelay(this.node, 2, () => {
            this.initBarrage();
            this.filedTips();
            this.flyBox();
        })
        // this.testEffect();
        this.updateHkHb();

        ComponentHelper.setUpDownAction(this.addSpeedTips)
    }
    onEnable(): void {
        EventDispath.on(this.btn_lvUp, this.onLvUp, this);
        EventDispath.on(this.btn_task, this.onTask, this);
        EventDispath.on(this.btn_zlgk, this.onZlgk, this, 0);
        EventDispath.on(this.btn_ljcs, this.onLjcs, this);
        EventDispath.on(this.btn_order, this.onOrder, this);
        EventDispath.on(this.warehousePfb, this.onShowHouse, this);
        // EventDispath.on(this.box, this.onOpenBox, this);
        EventDispath.on(this.hkhb, this.onOpenHkHb, this);
        EventDispath.addEventListener(EventType.CROP_GET, this.getCrop, this);
        EventDispath.addEventListener(EventType.UPDATE_SHELVE, this.updateShelve, this);
        EventDispath.addEventListener(EventType.UPDATE_SHELVE_ORDER, this.orderUpdateShelve, this);

        EventDispath.addEventListener(EventType.ONE_SOLICIT, this.createFifteen, this);

        EventDispath.addEventListener(EventType.FIELD_LEVEL_UPDATE, this.changeFieldByIndex, this)
        EventDispath.addEventListener(EventType.SHELVE_LEVEL_UPDATE, this.changeShelveByIndex, this)

        EventDispath.addEventListener(EventType.CHANGE_PIPE, this.changePipe, this);
        // EventDispath.addEventListener(EventType.TASK_INFO_COUNT, this.updateTaskHd, this);

        EventDispath.addEventListener(EventType.UPDATE_FIELD_TIPS, this.filedTips, this);
        EventDispath.addEventListener(EventType.JX_SC, this.jxOrSc, this);

        EventDispath.addEventListener(EventType.CROP_PLANT_GET, this.onPlant, this);

        EventDispath.addEventListener(EventType.HKHB_UPDATE, this.updateHkHb, this);

        EventDispath.addEventListener(EventType.CHANGE_WALL, this.changeZlBtn, this);

        EventDispath.addEventListener(EventType.MAIN_LOCK, this.onLock, this);

        EventDispath.addEventListener(EventType.GUIDE_COMPLETE, this.guidComplete, this);
    }
    onLvUp() {
        console.log("升级");
        UIMananger.showPanel(UIType.LvUpView, null, null, UIEffectType.SCALE, 1);

    }
    onTask() {
        UIMananger.showPanel(UIType.TaskView);
        console.log("任务");
        // PlayerModel.setAcceptDegree(10, cc.v2(cc.winSize.width / 2, cc.winSize.height / 2))
    }
    n = 1;
    //招揽顾客
    onZlgk() {
        if (this.zl_state == 2) return;
        if (this.zl_state == 0) {

            // this.zlClcikNum++;
            // if (this.zlClcikNum >= Global.zl_click_num) {
            this.zl_roleNum++;
            // SDKManager.onEvent(Global.EVENT_ACTION.client_solicit, { "count": 1 })
            this.addOneLb();
            this.createRole();
            PlayerModel.setZlNum(this.zl_roleNum);
            // let max = PlayerModel.getAcceptBaseCfg().solicit_num;
            let max = ConfigManager.getCurrentLvCfg().sdzl;//单次最大招揽人数


            this.zlClcikNum = 0;
            if (this.zl_roleNum >= max) {
                this.zl_state = 1;
                this.zl_roleNum = 0;
                this.changeZlBtn();
            }
            // }
        } else {
            //打开招揽页面
            UIMananger.showPanel(UIType.popZlView);
        }

        this.zl_guideState = 0;
        this.zl_guideInterval = 0;

        // this.n++;
    }
    arr = [];
    //新增飘字
    addOneLb() {
        console.log("手动添加：", this.zl_roleNum);

        let lb = cc.instantiate(this.zl_addOne);
        lb.parent = this.btn_zlgk;
        // this.arr.push(lb);
        lb.y = 137;
        lb.opacity = 255;
        lb.runAction(cc.sequence(cc.moveTo(0.8, 0, 250), cc.fadeOut(1.0), cc.callFunc(() => {
            lb.destroy();
        })))
    }
    //一键招揽15个
    createFifteen() {
        this.zl_state = 2;
        this.changeZlBtn();
        MKUtils.alertTips("一键招揽进行中")
        this.zl_guideInterval = 0;
        this.zl_guideState = 0;
        this.isAutoSolicit = true;
        this.zl_max = ConfigManager.getPropById(propType.wall, PlayerModel.getUIConfig().walllv).add_num;
        PlayerModel.setZlNum(0);
        this.autoSolicit();
    }
    //自动招揽
    autoSolicit() {
        cc.tween(this.zl_pro).to(2, { progress: 1 }
        ).call(() => {
            this.zl_pro.progress = 0;
            this.createRole();
            this.zl_auto_num++;
            this.addOneLb();

            if (this.zl_auto_num >= this.zl_max) {
                this.zl_state = 0;
                this.zl_auto_num = 0;
                this.isAutoSolicit = false;
                this.changeZlBtn();
            } else {
                this.autoSolicit();
            }
        }).start();
    }
    zl_pro: cc.ProgressBar;
    zl_desc: cc.Label;
    zl_max = 0;
    zl_descBg: cc.Node;
    changeZlBtn() {
        this.zl_pro.node.active = false;
        this.zl_desc.node.active = true;
        this.zl_descBg.active = true;
        if (this.zl_state == 0) {
            this.zl_pro.node.active = false;
            this.zl.active = true;
            this.zl_one.active = false;
            this.zl_desc.string = "顾客+1"
        } else if (this.zl_state == 1) {

            this.zl.active = false;
            this.zl_one.active = true;
            this.zl_desc.string = "顾客+" + ConfigManager.getPropById(propType.wall, PlayerModel.getUIConfig().walllv).add_num
        } else {
            this.zl_descBg.active = false;
            this.zl_pro.node.active = true;
            this.zl_pro.progress = 0;
            this.zl_desc.node.active = false;
            this.zl.active = false;
            this.zl_one.active = true;
        }
    }
    //立即成熟
    onLjcs() {
        console.log("全体加速");
        if (PlayerModel.guideStep >= 0) {
            EventDispath.send(EventType.GUIDE_Hide)
            EventDispath.send(EventType.CROP_ADD_SPEED);
            this.lock.active = true;
            MKUtils.setNodeDelay(this.node, 4, () => {
                EventDispath.send(EventType.GUIDE_UPDATE)
                this.lock.active = false;
            })
        } else {
            UIMananger.showPanel(UIType.popJsView)
        }

    }
    onLock(data) {
        this.lock.active = data;
    }
    //订单
    onOrder() {
        UIMananger.showPanel(UIType.orderView, null, null, null);
    }
    onShowHouse() {
        UIMananger.showPanel(UIType.WarehouseView);
    }
    //打开飞行红包
    onOpenBox() {
        this.box.stopAllActions();
        this.box.active = false;
        UIMananger.showPanel(UIType.flyBoxView, null, () => {
            this.scheduleOnce(this.flyBox, SDKManager.getFlightTime());
        });
    }
    //打开回馈红包
    onOpenHkHb() {

        if (this.hkPro.progress < 1) {
            let lv = ConfigManager.getCurrentLvCfg();
            MKUtils.alertTips(`再招待${lv.gks - PlayerModel.zdGkNum}顾客获得红包`)
            return;
        }

        UIMananger.showPanel(UIType.hardView, null, null, UIEffectType.SCALE, 1);
    }
    //收获作物进入仓库，仓库动效
    getCrop() {
        this.warehousePfb.runAction(cc.sequence(cc.scaleTo(0.2, 1.05),
            cc.scaleTo(0.2, 1),
            cc.scaleTo(0.2, 1.05),
            cc.scaleTo(0.2, 1),
            cc.callFunc(() => {
                // this.lock.active = false;
            })
        ))
    }
    //仓库有新增，刷新货架
    updateShelve() {
        MKUtils.setNodeDelay(this.node, 2, () => {
            for (let i = 0; i < this.shelvesPfbList.length; i++) {
                let shelve = this.shelvesPfbList[i];
                let script = shelve.getComponent(ShelvePrefab);
                if (script.currentNum < 4) {
                    script.addCrop();
                }
            }
        })
    }
    //订单完成后更新
    orderUpdateShelve() {
        PlayerModel.initPutCropList();
        let putOnList = PlayerModel.put_on_crop_list;

        for (let i = 0; i < this.shelvesPfbList.length; i++) {
            let shelve = this.shelvesPfbList[i];
            let cfg: putOnConfig;
            if (i < putOnList.length) {
                cfg = putOnList[i];
            }
            shelve.resetCrop(cfg)
        }
    }

    createRole() {
        let role = this.getRole();
        if (this.cloneRoleIdList.length == 0) Utils.arrayCopy(this.roleIdList, this.cloneRoleIdList);
        this.cloneRoleIdList.sort(MKUtils.randomSort);
        let id = this.cloneRoleIdList.splice(0, 1)[0]
        this.roleList.push(role);
        let shelvePrefab = this.checkShelve();
        if (PlayerModel.guideStep == 6) {
            role.speed = 3;
            role.setRole(3);
        } else {
            // role.speed = 5;
            // role.speed = 1.5;
            role.setRole(1.5);
        }
        role.create(id, shelvePrefab, this.cashierPfb);

        PlayerModel.addDayAutoRoleNum();
        this.roleNode.addChild(role.node, 100)

    }

    getRole() {
        let item: cc.Node = GamePoolManager.createRole(this.rolePrefab);
        let roleItem: RolePrefab = item.getComponent(RolePrefab);
        return roleItem;
    }
    /**
     * 检测那个摊位可以上人
     */
    checkShelve() {
        if (this.isShelveRoleFull1()) return;
        let arr = [];
        for (let i = 0; i < this.shelvesPfbList.length; i++) {
            let src = this.shelvesPfbList[i];
            if (src.mId > 0) {
                // if (this.isShelveRoleFull1()) {
                //     if (src.roleNum < PlayerModel.one_shelves_shopper_max) {
                //         arr.push(src);
                //     }
                // } 
                // else {
                if (src.roleNum + src.walkLen < ConfigManager.getRoleMax()) {
                    arr.push(src);
                }
                // }
            }
        }
        if (arr.length == 0) return null;

        let arr1 = arr.filter((item) => {
            return item.currentNum > 0;
        })
        let pfb;
        if (arr1.length > 0) {
            pfb = Utils.getRandomByArr(arr1);
        } else {
            pfb = arr[0];
        }
        return pfb;
    }
    // //检测是否货架没有解锁
    // isShelveUnlock(shelve) {
    //     let arr = this.shelvesPfbList.filter((item) => {
    //         return item.mId == 0;
    //     })
    //     if (arr.length < 5) return false;
    //     return true;
    // }
    //检测是否所有货架为空
    isShelveEmpty() {
        let arr = this.shelvesPfbList.filter((item) => {
            return item.currentNum == 0;
        })
        if (arr.length < 5) return false;
        return true;
    }
    //检测是否所有摊位前都已经达到初始人数
    isShelveRoleFull1() {
        let arr = this.shelvesPfbList.filter((item) => {
            let t1 = item.roleNum < ConfigManager.getRoleMax();
            let t2 = item.mId > 0;
            return t1 && t2;
        })
        if (arr.length > 0) return false;
        return true;
    }
    /**
     * 加速或者杀虫
     * @param type 1加速2杀虫
     */
    jxOrSc(data) {
        this.jx_sc.node.active = true;
        let p = Utils.convertNodeToNodeSpace(data.point, this.node)
        this.jx_sc.node.setPosition(p);
        if (data.type == 1) {
            this.jx_sc.animation = "jiasu";
        }
        else {
            this.jx_sc.animation = "shachong";
        }
        this.jx_sc.setCompleteListener((trackEntry, loopCount) => {
            this.jx_sc.setCompleteListener(null);
            this.jx_sc.node.active = false;
            console.log(data.type, "杀虫或者加速");
            if (data.type == 1) {
                EventDispath.send(EventType.JIASU);
            } else {
                EventDispath.send(EventType.SHACHONG);
            }

        })
    }

    onPlant(id) {
        let arr = this.fieldPfbList.filter((value, index) => {
            return value.config.state == 1 && value.config.cropId == 0;
        })


        if (arr.length > 0) {
            let cfg = ConfigManager.getCropById(id);
            MKUtils.alertTips(`${cfg.name}已成功种下 `)
            EventDispath.send(EventType.GET_CROP_CLOSE)
            arr[0].onPlant(id);
        }
        else {
            MKUtils.alertTips("没有空闲土地可以种植了")
        }
    }

    //切换货架皮肤
    changeShelveByIndex(index) {
        this.shelvesPfbList[index].changeSkin();
        this.updateShelve();
    }
    //切换地块皮肤
    changeFieldByIndex(index) {
        this.fieldPfbList[index].changeSkin();
    }
    //切换水管皮肤
    changePipe(data) {
        let water = this.node.getChildByName('water');
        water.active = true;
    }
    //更新回馈红包
    updateHkHb() {
        this.hkIcon.stopAllActions();
        let lv = ConfigManager.getCurrentLvCfg();
        if (PlayerModel.zdGkNum >= lv.gks) {
            ComponentHelper.setHeartAction(this.hkIcon);
            this.hkLb.string = lv.gks + "/" + lv.gks;
            this.hkDesc.string = `<color=#000000>请领取</c><color=#EC5454>回馈红包</c></color>`
        } else {
            this.hkLb.string = PlayerModel.zdGkNum + "/" + lv.gks;
            this.hkDesc.string = `<color=#000000>再招待</c><color=#EC5454>${lv.gks - PlayerModel.zdGkNum}位<color=#000000>顾客获得<color=#EC5454>红包</c></color>`
        }
        this.hkPro.progress = PlayerModel.zdGkNum / lv.gks;
    }

    // updateTaskHd(data) {
    //     if (data.allCount > 0) {
    //         this.taskHd.active = true;
    //         this.taskHdLab.string = data.allCount;
    //     } else {
    //         this.taskHdLab.string = "0";
    //         this.taskHd.active = false;
    //     }
    // }

    // update (dt) {}
    //初始化场景中的节点
    _initComponet() {
        this.bottom = this.node.getChildByName('bottom');
        this.box = this.node.getChildByName('box');
        this.guide_task = this.bottom.getChildByName('guide_task');

        this.zl_addOne = this.btn_zlgk.getChildByName("addOne");

        this.hkhb = this.bottom.getChildByName('hkhb');
        this.hkIcon = this.hkhb.getChildByName("hkHbIcon");
        this.hkDesc = this.hkhb.getChildByName("hkDeacLb").getComponent(cc.RichText);;
        this.hkLb = this.hkhb.getChildByName("hkLb").getComponent(cc.Label);;
        this.hkPro = this.hkhb.getChildByName("hkPro").getComponent(cc.ProgressBar);;


        this.addSpeedTips = this.btn_ljcs.getChildByName("tips");

        this.zl = this.btn_zlgk.getChildByName("zl");
        this.zl_one = this.btn_zlgk.getChildByName("zl_one");
        this.zl_descBg = this.btn_zlgk.getChildByName("zl_descBg");
        this.zl_pro = this.btn_zlgk.getChildByName("pro").getComponent(cc.ProgressBar);
        this.zl_desc = this.btn_zlgk.getChildByName("addDesc").getComponent(cc.Label);

        let road = this.node.getChildByName('road');
        let wall = this.node.getChildByName('wall');
        let cashier = this.node.getChildByName('cashier');
        let pipe = this.node.getChildByName('pipe');
        let shelvesGp = this.node.getChildByName('shelvesGp');
        let shelvesList = shelvesGp.children;
        let field = this.node.getChildByName('field');

        let fence = this.node.getChildByName('fence');
        let warehouse = this.node.getChildByName('warehouse');
        let scarecrow = this.node.getChildByName('scarecrow');
        this.roleNode = this.node.getChildByName('role');

        this.taskHd = this.btn_task.getChildByName("taskHongdian");
        this.taskHdLab = this.taskHd.getChildByName("taskHd").getComponent(cc.Label);


        let uiCfg = PlayerModel.getUIConfig();


        this.roadPfb = cc.instantiate(this.roadPrefab);
        road.addChild(this.roadPfb);
        // this.roadPfb.parent = this.node;
        // let roadP = road.convertToWorldSpaceAR(cc.v2(0,0));
        // this.roadPfb.setPosition(this.node.convertToNodeSpaceAR(roadP))
        this.roadPfb.getComponent(RoadPrefab).setData(uiCfg.roadlv);

        this.wallPfb = cc.instantiate(this.wallPrefab);
        wall.addChild(this.wallPfb);

        // this.wallPfb.parent = this.node;
        // let wallP = wall.convertToWorldSpaceAR(cc.v2(0,0));
        // this.wallPfb.setPosition(this.node.convertToNodeSpaceAR(wallP))
        this.wallPfb.getComponent(WallPrefab).setData(uiCfg.walllv);

        this.pipePfb = cc.instantiate(this.pipePrefab);
        pipe.addChild(this.pipePfb);
        this.pipePfb.getComponent(PipePrefab).setData(uiCfg.pipelv);
        if (uiCfg.pipelv > 0) {
            let water = this.node.getChildByName('water');
            water.active = true;
        }

        this.fencePfb = cc.instantiate(this.fencePrefab);
        fence.addChild(this.fencePfb);
        this.fencePfb.getComponent(FencePrefab).setData(uiCfg.fencelv);

        this.warehousePfb = cc.instantiate(this.warehousePrefab);
        warehouse.addChild(this.warehousePfb);
        this.warehousePfb.getComponent(WarehousePrefab).setData(uiCfg.warehouselv);

        this.scarecrowPfb = cc.instantiate(this.scarecrowPrefab);
        scarecrow.addChild(this.scarecrowPfb);
        this.scarecrowPfb.getComponent(ScarecrowPrefab).setData(uiCfg.scarecrowlv);

        let putOnList = PlayerModel.put_on_crop_list;
        for (let i = 0; i < shelvesList.length; i++) {
            let shelve = cc.instantiate(this.shelvePrefab);
            shelvesList[i].addChild(shelve);
            let src = shelve.getComponent(ShelvePrefab);
            this.shelvesPfbList.push(src);
            PlayerModel.sheleveList.push(src);
            let cfg: putOnConfig;
            if (i < putOnList.length) {
                cfg = putOnList[i];
            }
            src.setData(uiCfg.shelvesList[i], i, cfg);
            src.initPoint();
        }
        let fieldList = field.children;
        for (let i = 0; i < fieldList.length; i++) {
            let field = cc.instantiate(this.fieldPrefab);
            fieldList[i].addChild(field);

            // field.addChild(field);
            // field.setPosition(fieldList[i].getPosition())


            let src = field.getComponent(FieldPrefab);
            src.setData(i);
            this.fieldPfbList.push(src);
        }

        // MKUtils.setNodeDelay(this.node, 0.1, () => {
        let cashierPrefab = cc.instantiate(this.cashierPrefab);
        cashier.addChild(cashierPrefab);
        this.cashierPfb = cashierPrefab.getComponent(CashierPrefab)
        this.cashierPfb.setData(uiCfg.cashierlv);
        // })

    }
    //新手引导第一个地块位置
    getGuidePoint() {
        let point = this.fieldPfbList[0].node.convertToWorldSpaceAR(cc.v2(0.0));

        return point;
    }
    getGuidePoint1() {
        let point = this.fieldPfbList[1].node.convertToWorldSpaceAR(cc.v2(0.0));

        return point;
    }
    getGuideJsPoint() {
        let point = this.btn_ljcs.convertToWorldSpaceAR(cc.v2(0.0));

        return point;
    }
    //新手引导收获
    getGuideCrop() {
        this.fieldPfbList[0].getCrop(1);
    }

    getRolePoint() {
        let p = this.roleList[0].getGuidePoint();
        return p;
    }
    guideBuy() {
        this.roleList[0].guideBuy();
    }
    guideSell() {

        this.roleList[0].onSell();
    }
    getZlPoint() {
        return this.btn_zlgk.convertToWorldSpaceAR(cc.v2(0, 0));
    }
    guideZl = 0;
    guideClickZL(callBack) {
        this.guideZl++;
        this.onZlgk();
        if (this.guideZl >= Global.zl_click_num) {
            this.guideZl = 0;
            if (callBack) callBack();
        }
    }
    guide_task: cc.Node;
    getGuideTaskPoint() {
        return this.guide_task.convertToWorldSpaceAR(cc.v2(0, 0));
    }
    guideTaskClick() {
        this.initBarrage();
    }

    actionNUm = 0;
    barragePool: cc.NodePool = new cc.NodePool();
    /**
     * 弹幕
     */
    initBarrage() {
        let barrage = this.barragePool.get();
        if (!barrage) {
            barrage = cc.instantiate(this.barragePrefab);
        }
        barrage.getComponent("BarragePrefab").setData();
        UIMananger.effLayer.addChild(barrage);

        let y1 = cc.winSize.height / 2 - 460;
        let p = cc.v2(1080, y1)
        barrage.setPosition(p);

        barrage.runAction(cc.sequence(cc.moveTo(10, -750, barrage.y), cc.callFunc(() => {
            this.barragePool.put(barrage);
            this.initBarrage();
        })))
    }

    flyBox() {
        this.box.active = true;
        let w = cc.winSize.width;
        let y = cc.winSize.height / 2;
        this.box.setPosition(700, 0)

        let time = SDKManager.getFlightTime();

        this.box.runAction(cc.sequence(
            cc.moveTo(2, w / 4 + w / 8, 0),
            cc.moveTo(4, (w / 4) - w / 8, 200),
            cc.moveTo(2, 0, 100),
            cc.moveTo(4, cc.v2(-w / 4 + 100, 300)),
            cc.moveTo(2, cc.v2(-w / 4, 100)),
            cc.moveTo(5, cc.v2(-w / 3 - 50, y / 2)),
            cc.moveTo(4, cc.v2(-w / 2 - 250, y / 2 + 100)),
            cc.callFunc(() => {
                this.scheduleOnce(this.flyBox, time)
            })
        ))
    }

    guidComplete() {
        this.createRole();
    }

    addGold() {
        PlayerModel.setGold(1000)
    }
    addXfzs() {
        PlayerModel.setXfzs(100);
    }
    hideTest() {
        this.btn_test1.active = false;
        this.btn_test2.active = false;
        this.btn_test3.active = false;
    }

}

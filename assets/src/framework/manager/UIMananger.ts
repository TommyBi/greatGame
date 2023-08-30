import BaseView from "../ui/BaseView";
import LoaderManager from "./LoaderManager";
import Handler from "../base/Handler";
import GamePoolManager from "./GamePoolManager";
import UIEffectManager, { UIEffectType } from "./UIEffectManager";
import { UIState } from "../ui/UIState";
import BaseTips from "../ui/BaseTips";
import BasePanel from "../ui/BasePanel";
import SDKManager from "./SDKManager";



class UIManager {
    //TODO 保存近期打开的3个面板，如果多余3个时 把最早的释放
    //resDic 资源集合
    private ui_cache = {};
    private view_cache = {};
    private uiStateArr: Array<UIState> = [];//ui打开关闭管理
    private activeStateArr: Array<UIState> = [];//当前激活的uistate
    public viewLayer: cc.Node;
    public guideLayer: cc.Node;
    public uiLayer: cc.Node;
    public tipLayer: cc.Node;
    public effLayer: cc.Node;
    public sceneLayer: cc.Node;
    public currentView: BaseView;
    private static _instance: UIManager;
    public barragePool: cc.NodePool = new cc.NodePool();

    static instance(): UIManager {
        if (!this._instance) {
            this._instance = new UIManager();
        }
        return this._instance;
    }

    init() {
        this.viewLayer = new cc.Node('viewLayer');
        this.effLayer = new cc.Node('tipLayer');
        this.uiLayer = new cc.Node('uiLayer');
        this.tipLayer = new cc.Node('tipLayer');
        this.sceneLayer = new cc.Node('sceneLayer');
        this.guideLayer = new cc.Node('guideLayer');
        let canvas = cc.director.getScene().getChildByName('Canvas');
        this.viewLayer.parent = canvas;
        this.sceneLayer.parent = canvas;
        this.effLayer.parent = canvas;
        this.uiLayer.parent = canvas;
        this.tipLayer.parent = canvas;
        this.guideLayer.parent = canvas;
        this.currentView = null;//当前的view
        // this.barragePool = new cc.NodePool();
        //TODO test
        // this.viewLayer.opacity = 60;
        // this.uiLayer.opacity = 60;

    }
    top: cc.Node;
    setTop() {
        if (!this.top) return;
        if (!this.top.parent) {
            this.viewLayer.addChild(this.top)
            if (cc.winSize.height / cc.winSize.width > (16 / 9 + 0.1)) {
                this.top.setPosition(0, cc.winSize.height / 2 - 210);
            } else {

                this.top.setPosition(0, cc.winSize.height / 2 - 110);
            }
        }
    }
    guide: cc.Node;
    showGuide() {
        if (!this.guide) return;
        if (!this.guide.parent) {
            this.guide.parent = this.guideLayer;
        }
    }
    hideGuide() {
        if (!this.guide) return;
        if (this.guide.parent) {
            this.guideLayer.removeAllChildren();
        }
    }

    //显示view
    //pdata UIType中的key
    showView(pdata, ...args) {
        if (!!pdata) {
            if (!!this.currentView) {
                if (this.currentView.uiName === pdata.uname) {
                    this.currentView.on_Show(args);
                    return;
                }
            }

            LoaderManager.loaderPrefab(pdata.uname, Handler.create((res) => {
                if (!!res) {
                    res = GamePoolManager.instance(res, 'UView-' + pdata.uname);
                } else {
                    return;
                }

                if (!!this.currentView) {
                    this.closeAllOpenPanel();
                    this.currentView.close();
                }
                let baseView = res.getComponent("BaseView");

                this.view_cache[pdata.uname] = res;
                if (baseView) {
                    this.currentView = baseView;
                    baseView.setUIName(pdata.uname);
                    baseView.setModuleName(pdata.mname);
                    baseView._show_();
                    baseView.on_Show(args);
                }
                else {
                    cc.error("请给面板添加BaseView的子类脚本");
                }
                // res.parent = this.viewLayer;
                this.viewLayer.addChild(res);
                res.x = 0;
                res.y = 0;
            }, this), pdata.mname);
        } else {
            cc.log('制定打开的脚本不存在');
        }

    }

    hideView(name) {
        let baseUI = this.view_cache[name].getComponent("BaseView");
        baseUI._hide_();
        baseUI.on_Hide();
        if (LoaderManager.isRelease(baseUI.moduleName)) {
            LoaderManager.releaseByModule(baseUI.moduleName);
            GamePoolManager.clearByTarget('UView-' + name);
        } else {
            GamePoolManager.putBackByTarget('UView-' + name);
        }
        this.view_cache[name] = null;
    }
    showPanel(pdata, openBack?, closeBack?, effect = null, ...args) {
        console.log("打开面板", JSON.stringify(pdata));
        let state = this.checkPanelOpen(pdata);//如果有已经打开，并且不是可以多开的
        if (state) {
            return;
        }
        //去掉所有弹框效果
        if (effect) {
            effect = null;
        }
        let newSate = this.getUIState(pdata);
        LoaderManager.loaderPrefab(pdata.uname, Handler.create((res, url, state) => {
            if (res) {
                let panel = GamePoolManager.instance(res, 'UPanel-' + pdata.uname);
                let baseUI = panel.getComponent("BasePanel");
                if (!!baseUI) {
                    baseUI.init(pdata.clickClose);
                    baseUI.setUIName(pdata.uname);
                    baseUI.setModuleName(pdata.mname);
                    baseUI.setEffect(effect);
                    baseUI._show_(closeBack, args);//打开前需要执行的函数
                    baseUI.startShow();
                    baseUI.setUIState(state);
                }
                else {
                    cc.error("请给面板添加BaseUI的子类脚本");
                    return;
                }
                // this.ui_cache[pdata.uname] = panel;
                baseUI.setUIParent(this.uiLayer);
                if (!!effect) {
                    UIEffectManager.effect(effect, panel, false, Handler.create(this.effectComplete, this));
                } else {
                    baseUI.on_Show();//真正的打开
                }
                if (openBack) openBack();
            }

        }, this, true, newSate), pdata.mname);
    }
    checkPanel(panelName) {
        let uiLayerChild = this.uiLayer.children;
        for (let i = 0; i < uiLayerChild.length; ++i) {
            let layer = uiLayerChild[i];
            if (!layer.getComponent(BasePanel)) {
                continue;
            }
            if (layer.getComponent(BasePanel).uiName == panelName) {
                return true;
            }
        }
        return false;
    }

    /**
     * 通过ui名称隐藏
     * @param name ui名称
     */
    hidePanel(name: any) {
        let uname = '';
        if (typeof (name) === 'string') {
            uname = name;
        } else {
            uname = name.uname;
        }
        let state = this.getUIStateByName(uname, true);
        if (!!state) {
            let baseUI = state.ui;
            baseUI.startHide();
            // let isNew = SDKManager.hasNewOrderReward();
            SDKManager.reportTrigger()
            // if (!!baseUI.effect) {
            //     UIEffectManager.effect(baseUI.effect + "back", baseUI.node, false, Handler.create(this.effectBackComplete, this));
            // } else {
            this.effectBackComplete(baseUI.node);
            // }
        }

    }

    showTips(pdata, effect = UIEffectType.SCALE, ...args) {
        let url = "prefab/" + pdata.mname + "/" + pdata.uname;
        let completeCb = (err, res) => {
            if (err) {
                cc.error('资源加载失败--' + url);
                return;
            }
            let tips: cc.Node = GamePoolManager.instance(res, 'UITips-' + pdata.uname);
            let baseTips = tips.getComponent(BaseTips);
            if (baseTips) {
                baseTips.setUIName(pdata.uname);
                baseTips._show_(args);
                baseTips.setDelayRemove(pdata.delayRemove);
                baseTips.setEffect(effect);
                baseTips.startShow();
            } else {
                cc.error(`请给${pdata.uname}添加BaseTips的子类脚本`);
            }
            if (effect) {
                // UIEffectManager.effect(effect, tips, false, Handler.create(this.effectComplete, this));
                UIEffectManager.effect(effect, tips, false, null);//Handle先不传
            }
            baseTips.setUIParent(this.tipLayer);
            baseTips.on_Show();
        }
        let res = cc.loader.getRes(url, cc.Prefab);
        if (res) {
            completeCb(null, res);
            return;
        }
        cc.loader.loadRes(url, cc.Prefab, completeCb);
    }
    checkTips(uName) {
        let tipLayerChild = this.tipLayer.children;
        for (let i = 0; i < tipLayerChild.length; ++i) {
            let layer = tipLayerChild[i];
            if (layer.getComponent(BaseTips)._uiName == uName) {
                return true;
            }
        }
        return false;
    }
    hideTips(node: cc.Node) {
        if (!node) {
            return;
        }

        let baseTips = node.getComponent(BaseTips);
        if (baseTips) {
            baseTips.startHide();
            if (baseTips._effect) {
                UIEffectManager.effect(baseTips._effect + "back", node, false, Handler.create((tips) => {
                    if (cc.isValid(tips)) {
                        baseTips._hide_();
                    }
                }, this));
            }
        }
    }

    effectComplete(panel) {
        if (cc.isValid(panel)) {
            let baseUI = panel.getComponent("BasePanel");
            baseUI.on_Show();
        }
    }

    private effectBackComplete(panel) {
        if (cc.isValid(panel)) {
            let baseUI = panel.getComponent('BasePanel');
            baseUI.on_Hide();
            baseUI._hide_();
            // if (LoaderManager.isRelease(baseUI.moduleName)) {
            //     LoaderManager.releaseByModule(baseUI.moduleName);
            //     GamePoolManager.clearByTarget('UPanel-' + baseUI.uiName);
            // } else {
            //     GamePoolManager.putBackByTarget('UPanel-' + baseUI.uiName);
            // }
        }
    }


    isShow(path) {
        if (this.ui_cache[path]) {
            return true;
        }
        return false;
    }

    private getUIStateByName(name: string, isRemove: boolean = false) {
        for (let index = 0; index < this.activeStateArr.length; index++) {
            const element = this.activeStateArr[index];
            if (name === element.uName) {
                if (isRemove) {
                    this.activeStateArr.splice(index, 1);
                }
                return element;
            }
        }
    }

    private closeAllOpenPanel() {
        for (let index = 0; index < this.activeStateArr.length; index++) {
            const element = this.activeStateArr[index];
            element.reset();
        }
        this.activeStateArr.length = 0;
    }

    private checkPanelOpen(data) {
        if (!!data) {
            //检测面板能否多开
            if (!!data.isMutl) {
                return false;
            }

            for (let index = this.activeStateArr.length - 1; index >= 0; index--) {
                const element = this.activeStateArr[index];
                if (element.isActive && element.uName === data.uname && element.openState > 0) {
                    return true;
                }
            }
        }
        return false;
    }


    /**
     * 获得可用的uistate
     */
    private getUIState(data) {
        for (let index = 0; index < this.uiStateArr.length; index++) {
            const element = this.uiStateArr[index];
            if (!element.isActive) {
                element.reset();
                element.setData(data);
                this.activeStateArr.push(element);
                return element;
            }
        }
        let state: UIState = new UIState();
        state.setData(data);
        this.uiStateArr.push(state);
        this.activeStateArr.push(state);
        return state;

    }
}

export default UIManager.instance();
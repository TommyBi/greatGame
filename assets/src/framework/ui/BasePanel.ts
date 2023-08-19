import ComponentHelper from "../tools/ComponentHelper";
import Handler from "../base/Handler";
import LoaderManager from "../manager/LoaderManager";
import GamePoolManager from "../manager/GamePoolManager";
import UIMananger from "../manager/UIMananger";
import { UIState, StateType } from "./UIState";
import EventDispath from "../message/EventDispath";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BasePanel extends cc.Component {

    public uiName: string = "basePanel";
    //点击面板其他位置是否关不面板 需要在prefab中设置node的size大小
    public maskURL: string = "mbg";//资源放在common模块中
    private _ismask: boolean = true;
    public effect: any = null;
    public clickOtherClose: boolean = false;
    public moduleName: string;
    public inData: any;
    private modelUI: cc.Node;//背景
    private uiState: UIState;
    init(clickClose) {
        if (this._ismask) {
            this._initModule();
        }
        this.clickOtherClose = clickClose;
    }

    setUIName(name) {
        this.uiName = name;
    }

    setModuleName(mname) {
        this.moduleName = mname;
    }

    setClickClose(value) {
        this.clickOtherClose = value;
    }

    setEffect(value) {
        this.effect = value;
    }

    /**
     * 设置ui状态
     */
    setUIState(state) {
        this.uiState = state;
        this.uiState.ui = this;
    }


    private upDateState(state: StateType) {
        if (!!this.uiState) {
            this.uiState.openState = state;
            if (state === StateType.close) {
                this.uiState.reset();
            }
        }
    }

    //打开面板前 先执行的函数
    _show_(args) {
        this.inData = args;
        this.upDateState(StateType.opening);
    }

    /**
     * 是否能立即关闭，主要用于有些面板不能立马关闭，需要等条件完成才能，例如转盘
     */
    canHideNow() {
        return true;
    }

    startHide() {

    }

    startShow() {

    }

    _hide_() {
        this._hideModeule();
        this.upDateState(StateType.close);
        this.node.destroy();
    }

    //关时清理
    private _closeClear() {

    }

    //销毁时清理
    private _destroyClear() {

    }

    //设置ui的父容器
    setUIParent(parent) {
        if (cc.isValid(parent)) {
            this.node.parent = parent;
        }
    }

    //打开时调用
    on_Show(args) {
        this._showModuleAction();
        this.upDateState(StateType.open);
    }

    on_Hide() {
        this._hideModeule();
    }

    close() {
        EventDispath.removeEventListeners(this);
        UIMananger.hidePanel(this.uiName);
    }

    //初始化模态
    private _initModule() {
        if (!cc.isValid(this.modelUI)) {
            this.modelUI = ComponentHelper.createSprite(null, null);
            LoaderManager.loaderSpriteFrame(this.maskURL, Handler.create(this._moduleComplete, this), 'commonRes');
            this.modelUI.addComponent(cc.BlockInputEvents);
            this.modelUI.opacity = 0;
            this.modelUI.parent = this.node;
            this.modelUI.setSiblingIndex(0);
        }

    }

    private _moduleComplete(res) {
        let sprite: cc.Sprite = ComponentHelper.spriteFrame(this.modelUI, res);
        sprite.trim = false;
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        let msize = cc.view.getVisibleSize();
        this.modelUI.width = msize.width;
        this.modelUI.height = msize.height;
        this._clickClose();
    }

    //模态效果
    private _showModuleAction() {
        if (cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
            this.modelUI.runAction(cc.fadeTo(0.2, 150));
        }
    }

    private _hideModeule() {
        if (cc.isValid(this.modelUI)) {
            this.modelUI.stopAllActions();
            this.modelUI.opacity = 0;
        }
    }

    //点击空白区域关闭
    _clickClose() {
        this.modelUI.on('touchend', (event) => {
            event.stopPropagation();
            if (this.clickOtherClose) {
                let clickPos = event.getLocation();
                let visibleSize = cc.view.getVisibleSize();
                clickPos.x = clickPos.x - visibleSize.width / 2;
                clickPos.y = clickPos.y - visibleSize.height / 2;
                let rect = this.node.getBoundingBox();
                if (!rect.contains(clickPos)) {
                    this.close();
                }
            }
        });
    }

}

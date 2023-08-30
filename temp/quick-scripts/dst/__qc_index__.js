
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/src/framework/base/BasePoolObject');
require('./assets/src/framework/base/Handler');
require('./assets/src/framework/helper/JSHelper');
require('./assets/src/framework/helper/StorageHelper');
require('./assets/src/framework/loader/GroupData');
require('./assets/src/framework/loader/GroupLoader');
require('./assets/src/framework/loader/Loader');
require('./assets/src/framework/loader/LoaderItem');
require('./assets/src/framework/manager/DataManager');
require('./assets/src/framework/manager/DragManager');
require('./assets/src/framework/manager/GamePoolManager');
require('./assets/src/framework/manager/LoaderManager');
require('./assets/src/framework/manager/MusicManager');
require('./assets/src/framework/manager/SDKManager');
require('./assets/src/framework/manager/UIEffectManager');
require('./assets/src/framework/manager/UIMananger');
require('./assets/src/framework/message/EventDispath');
require('./assets/src/framework/message/EventType');
require('./assets/src/framework/message/NResponer');
require('./assets/src/framework/sdk/BaseSdk');
require('./assets/src/framework/sdk/Launcher');
require('./assets/src/framework/tools/ComponentHelper');
require('./assets/src/framework/tools/MkUtils');
require('./assets/src/framework/tools/SortUtils');
require('./assets/src/framework/tools/Utils');
require('./assets/src/framework/ui/BasePanel');
require('./assets/src/framework/ui/BaseTips');
require('./assets/src/framework/ui/BaseUIEffect');
require('./assets/src/framework/ui/BaseView');
require('./assets/src/framework/ui/UIState');
require('./assets/src/framework/ui/effect/FadeBackUIEffect');
require('./assets/src/framework/ui/effect/FadeUIEffect');
require('./assets/src/framework/ui/effect/ScaleBackUIEffect');
require('./assets/src/framework/ui/effect/ScaleUIEffect');
require('./assets/src/framework/ui/effect/TopBackUIEffect');
require('./assets/src/framework/ui/effect/TopUIEffect');
require('./assets/src/game/Barrage/BarrageLayer');
require('./assets/src/game/Barrage/BarragePrefab');
require('./assets/src/game/Loading');
require('./assets/src/game/Main');
require('./assets/src/game/com/AlertTips');
require('./assets/src/game/com/RoleController');
require('./assets/src/game/consts/ActionType');
require('./assets/src/game/consts/CConst');
require('./assets/src/game/consts/EventConst');
require('./assets/src/game/consts/Global');
require('./assets/src/game/consts/LoaderType');
require('./assets/src/game/consts/StorageType');
require('./assets/src/game/consts/UIType');
require('./assets/src/game/datas/PlayerData');
require('./assets/src/game/datas/PlayerModel');
require('./assets/src/game/manager/ConfigManager');
require('./assets/src/game/manager/EffectManager');
require('./assets/src/game/manager/MessageCenter');
require('./assets/src/game/view/Message');
require('./assets/src/game/view/cashier/CashierView');
require('./assets/src/game/view/clearPest/ClearPestView');
require('./assets/src/game/view/flyBox/FlyBoxView');
require('./assets/src/game/view/guide/GuidePrefab');
require('./assets/src/game/view/hbPop/HardOpenView');
require('./assets/src/game/view/hbPop/HardView');
require('./assets/src/game/view/level/LevelItem');
require('./assets/src/game/view/level/LevelPopView');
require('./assets/src/game/view/level/LevelView');
require('./assets/src/game/view/loginDay/LoginDay');
require('./assets/src/game/view/lvUp/LvUpCompleteView');
require('./assets/src/game/view/lvUp/LvUpItem');
require('./assets/src/game/view/lvUp/LvUpPopView');
require('./assets/src/game/view/lvUp/LvUpView');
require('./assets/src/game/view/main/CashierManager');
require('./assets/src/game/view/main/CashierPrefab');
require('./assets/src/game/view/main/FencePrefab');
require('./assets/src/game/view/main/FieldPrefab');
require('./assets/src/game/view/main/GameMainView');
require('./assets/src/game/view/main/PipePrefab');
require('./assets/src/game/view/main/RepayRedBox');
require('./assets/src/game/view/main/RoadPrefab');
require('./assets/src/game/view/main/RolePrefab');
require('./assets/src/game/view/main/ScarecrowPrefab');
require('./assets/src/game/view/main/ShelvePrefab');
require('./assets/src/game/view/main/TopOrderItem');
require('./assets/src/game/view/main/TopOrderPrefab');
require('./assets/src/game/view/main/TopPrefab');
require('./assets/src/game/view/main/WallPrefab');
require('./assets/src/game/view/main/WarehousePrefab');
require('./assets/src/game/view/order/GetCropView');
require('./assets/src/game/view/order/OrderCurrentItem');
require('./assets/src/game/view/order/OrderCurrentView');
require('./assets/src/game/view/order/OrderGetScuessView');
require('./assets/src/game/view/order/OrderGiveUpView');
require('./assets/src/game/view/order/OrderHbView');
require('./assets/src/game/view/order/OrderItem');
require('./assets/src/game/view/order/OrderQualityView');
require('./assets/src/game/view/order/OrderRewardView');
require('./assets/src/game/view/order/OrderSuccessView');
require('./assets/src/game/view/order/OrderView');
require('./assets/src/game/view/order/ZhaoDaiView');
require('./assets/src/game/view/popView/PopGcView');
require('./assets/src/game/view/popView/PopGetCropView');
require('./assets/src/game/view/popView/PopJsView');
require('./assets/src/game/view/popView/PopRewardView');
require('./assets/src/game/view/popView/PopView1');
require('./assets/src/game/view/popView/PopZlView');
require('./assets/src/game/view/setting/SettingView');
require('./assets/src/game/view/task/AItemRenerer');
require('./assets/src/game/view/task/AVirtualScrollView');
require('./assets/src/game/view/task/TaskItem');
require('./assets/src/game/view/task/TaskRewardView');
require('./assets/src/game/view/task/TaskView');
require('./assets/src/game/view/vegetables/VegetablesItem');
require('./assets/src/game/view/vegetables/VegetablesUnlockView');
require('./assets/src/game/view/vegetables/VegetablesView');
require('./assets/src/game/view/warehouse/WarehouseItem');
require('./assets/src/game/view/warehouse/WarehouseView');
require('./assets/src/game/view/xfzs/XfzsHelpView');
require('./assets/src/game/view/xfzs/XfzsView');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
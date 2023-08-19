
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
require('./assets/src/game/consts/EventConst');
require('./assets/src/game/consts/Global');
require('./assets/src/game/consts/LoaderType');
require('./assets/src/game/consts/StorageType');
require('./assets/src/game/consts/UIType');
require('./assets/src/game/datas/PlayerData');
require('./assets/src/game/datas/PlayerModel');
require('./assets/src/game/manager/ConfigManager');
require('./assets/src/game/manager/EffectManager');
require('./assets/src/game/testloading');
require('./assets/src/game/view/main/GameMainView');

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
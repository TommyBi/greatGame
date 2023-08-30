
(function () {
var scripts = [{"deps":{"./assets/src/game/Main":1,"./assets/src/game/Barrage/BarragePrefab":2,"./assets/src/framework/base/Handler":3,"./assets/src/framework/ui/effect/FadeUIEffect":4,"./assets/src/game/com/AlertTips":5,"./assets/src/game/view/cashier/CashierView":6,"./assets/src/game/Loading":7,"./assets/src/game/consts/LoaderType":8,"./assets/src/game/manager/EffectManager":9,"./assets/src/game/datas/PlayerData":10,"./assets/src/game/view/guide/GuidePrefab":11,"./assets/src/game/view/flyBox/FlyBoxView":12,"./assets/src/game/view/clearPest/ClearPestView":13,"./assets/src/game/view/hbPop/HardView":14,"./assets/src/game/view/level/LevelPopView":15,"./assets/src/game/view/loginDay/LoginDay":16,"./assets/src/game/view/lvUp/LvUpPopView":17,"./assets/src/game/view/main/FencePrefab":18,"./assets/src/game/view/order/OrderCurrentItem":19,"./assets/src/game/view/popView/PopGetCropView":20,"./assets/src/game/view/setting/SettingView":21,"./assets/src/game/view/task/AVirtualScrollView":22,"./assets/src/game/view/vegetables/VegetablesUnlockView":23,"./assets/src/game/view/xfzs/XfzsHelpView":24,"./assets/src/framework/helper/JSHelper":25,"./assets/src/game/view/warehouse/WarehouseView":26,"./assets/src/framework/loader/GroupData":27,"./assets/src/framework/manager/DragManager":28,"./assets/src/framework/message/EventType":29,"./assets/src/framework/sdk/Launcher":30,"./assets/src/game/consts/Global":31,"./assets/src/framework/tools/MkUtils":32,"./assets/src/game/consts/ActionType":33,"./assets/src/game/consts/UIType":34,"./assets/src/game/datas/PlayerModel":35,"./assets/src/game/manager/ConfigManager":36,"./assets/src/game/manager/MessageCenter":37,"./assets/src/game/consts/EventConst":38,"./assets/src/game/view/Message":39,"./assets/src/game/view/level/LevelItem":40,"./assets/src/game/view/level/LevelView":41,"./assets/src/game/view/lvUp/LvUpItem":42,"./assets/src/game/view/lvUp/LvUpCompleteView":43,"./assets/src/game/view/lvUp/LvUpView":44,"./assets/src/game/view/main/CashierPrefab":45,"./assets/src/game/view/main/GameMainView":46,"./assets/src/game/consts/StorageType":47,"./assets/src/game/view/main/RepayRedBox":48,"./assets/src/game/view/main/RolePrefab":49,"./assets/src/game/view/main/RoadPrefab":50,"./assets/src/game/view/main/ScarecrowPrefab":51,"./assets/src/game/view/main/ShelvePrefab":52,"./assets/src/game/view/main/TopPrefab":53,"./assets/src/game/view/main/WallPrefab":54,"./assets/src/game/view/main/TopOrderPrefab":55,"./assets/src/game/view/main/PipePrefab":56,"./assets/src/game/view/main/TopOrderItem":57,"./assets/src/game/view/main/WarehousePrefab":58,"./assets/src/game/view/order/OrderHbView":59,"./assets/src/game/view/order/OrderGiveUpView":60,"./assets/src/game/view/order/OrderGetScuessView":61,"./assets/src/game/view/order/OrderCurrentView":62,"./assets/src/game/view/order/OrderQualityView":63,"./assets/src/game/view/order/OrderRewardView":64,"./assets/src/game/view/order/OrderItem":65,"./assets/src/game/view/order/OrderView":66,"./assets/src/game/view/order/GetCropView":67,"./assets/src/game/view/order/OrderSuccessView":68,"./assets/src/game/view/order/ZhaoDaiView":69,"./assets/src/game/view/popView/PopRewardView":70,"./assets/src/game/view/popView/PopView1":71,"./assets/src/game/view/popView/PopJsView":72,"./assets/src/game/view/popView/PopGcView":73,"./assets/src/game/view/main/CashierManager":74,"./assets/src/game/view/task/TaskRewardView":75,"./assets/src/game/view/popView/PopZlView":76,"./assets/src/game/view/hbPop/HardOpenView":77,"./assets/src/game/view/task/TaskView":78,"./assets/src/game/view/vegetables/VegetablesView":79,"./assets/src/game/view/vegetables/VegetablesItem":80,"./assets/src/game/view/task/TaskItem":81,"./assets/src/game/view/xfzs/XfzsView":82,"./assets/src/game/view/warehouse/WarehouseItem":83,"./assets/src/framework/base/BasePoolObject":84,"./assets/src/framework/helper/StorageHelper":85,"./assets/src/framework/manager/GamePoolManager":86,"./assets/src/framework/manager/LoaderManager":87,"./assets/src/game/view/main/FieldPrefab":88,"./assets/src/framework/loader/GroupLoader":89,"./assets/src/framework/manager/UIEffectManager":90,"./assets/src/framework/manager/DataManager":91,"./assets/src/framework/manager/SDKManager":92,"./assets/src/framework/manager/MusicManager":93,"./assets/src/game/view/task/AItemRenerer":94,"./assets/src/framework/manager/UIMananger":95,"./assets/src/framework/message/NResponer":96,"./assets/src/framework/loader/Loader":97,"./assets/src/framework/sdk/BaseSdk":98,"./assets/src/framework/ui/BaseUIEffect":99,"./assets/src/framework/tools/ComponentHelper":100,"./assets/src/framework/ui/BaseView":101,"./assets/src/framework/ui/BaseTips":102,"./assets/src/framework/ui/UIState":103,"./assets/src/framework/ui/BasePanel":104,"./assets/src/framework/ui/effect/ScaleUIEffect":105,"./assets/src/framework/tools/Utils":106,"./assets/src/framework/message/EventDispath":107,"./assets/src/framework/ui/effect/TopUIEffect":108,"./assets/src/framework/ui/effect/ScaleBackUIEffect":109,"./assets/src/framework/tools/SortUtils":110,"./assets/src/framework/ui/effect/FadeBackUIEffect":111,"./assets/src/framework/ui/effect/TopBackUIEffect":112,"./assets/src/framework/loader/LoaderItem":113,"./assets/src/game/Barrage/BarrageLayer":114,"./assets/src/game/consts/CConst":115,"./assets/src/game/com/RoleController":116},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../framework/manager/UIMananger":95,"./consts/UIType":34,"../framework/manager/MusicManager":93,"../framework/tools/MkUtils":32,"../framework/manager/DataManager":91,"./datas/PlayerModel":35,"../framework/helper/JSHelper":25,"../framework/manager/SDKManager":92},"path":"preview-scripts/assets/src/game/Main.js"},{"deps":{"../../framework/manager/DataManager":91,"../../framework/tools/MkUtils":32,"../../framework/tools/Utils":106},"path":"preview-scripts/assets/src/game/Barrage/BarragePrefab.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/base/Handler.js"},{"deps":{"../BaseUIEffect":99},"path":"preview-scripts/assets/src/framework/ui/effect/FadeUIEffect.js"},{"deps":{},"path":"preview-scripts/assets/src/game/com/AlertTips.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/ComponentHelper":100,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/Global":31,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/cashier/CashierView.js"},{"deps":{"../framework/base/Handler":3,"../framework/manager/DataManager":91,"../framework/manager/LoaderManager":87,"../framework/manager/SDKManager":92,"../framework/message/NResponer":96,"../framework/tools/MkUtils":32,"./consts/LoaderType":8,"./consts/UIType":34,"./datas/PlayerModel":35,"./manager/ConfigManager":36,"./view/Message":39},"path":"preview-scripts/assets/src/game/Loading.js"},{"deps":{"../../framework/manager/LoaderManager":87},"path":"preview-scripts/assets/src/game/consts/LoaderType.js"},{"deps":{"../../framework/helper/JSHelper":25,"../../framework/manager/UIMananger":95,"../../framework/message/EventDispath":107,"../../framework/message/EventType":29,"../../framework/tools/MkUtils":32},"path":"preview-scripts/assets/src/game/manager/EffectManager.js"},{"deps":{"../../framework/helper/StorageHelper":85,"../../framework/tools/MkUtils":32,"../../framework/tools/SortUtils":110,"../../framework/tools/Utils":106,"../consts/Global":31,"../consts/StorageType":47},"path":"preview-scripts/assets/src/game/datas/PlayerData.js"},{"deps":{"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/ComponentHelper":100,"../../../framework/tools/MkUtils":32,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../main/GameMainView":46,"../main/TopPrefab":53,"../order/OrderGetScuessView":61,"../order/OrderRewardView":64,"../order/OrderSuccessView":68,"../order/OrderView":66,"../vegetables/VegetablesView":79},"path":"preview-scripts/assets/src/game/view/guide/GuidePrefab.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/Global":31,"../../consts/UIType":34},"path":"preview-scripts/assets/src/game/view/flyBox/FlyBoxView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/Global":31,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/clearPest/ClearPestView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/hbPop/HardView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/ui/BasePanel":104},"path":"preview-scripts/assets/src/game/view/level/LevelPopView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/ui/BasePanel":104},"path":"preview-scripts/assets/src/game/view/loginDay/LoginDay.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/Global":31,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../popView/PopView1":71},"path":"preview-scripts/assets/src/game/view/lvUp/LvUpPopView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/main/FencePrefab.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../task/AItemRenerer":94},"path":"preview-scripts/assets/src/game/view/order/OrderCurrentItem.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../../manager/EffectManager":9},"path":"preview-scripts/assets/src/game/view/popView/PopGetCropView.js"},{"deps":{"../../../framework/helper/JSHelper":25,"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/tools/Utils":106,"../../../framework/ui/BasePanel":104,"../../consts/Global":31,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/setting/SettingView.js"},{"deps":{"./AItemRenerer":94},"path":"preview-scripts/assets/src/game/view/task/AVirtualScrollView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/Global":31,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/vegetables/VegetablesUnlockView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/ui/BasePanel":104},"path":"preview-scripts/assets/src/game/view/xfzs/XfzsHelpView.js"},{"deps":{"../manager/MusicManager":93},"path":"preview-scripts/assets/src/framework/helper/JSHelper.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/ui/BasePanel":104,"../../consts/CConst":115,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../task/AVirtualScrollView":22},"path":"preview-scripts/assets/src/game/view/warehouse/WarehouseView.js"},{"deps":{"../base/Handler":3},"path":"preview-scripts/assets/src/framework/loader/GroupData.js"},{"deps":{"../message/NResponer":96,"../tools/MkUtils":32,"../tools/Utils":106},"path":"preview-scripts/assets/src/framework/manager/DragManager.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/message/EventType.js"},{"deps":{"./BaseSdk":98},"path":"preview-scripts/assets/src/framework/sdk/Launcher.js"},{"deps":{},"path":"preview-scripts/assets/src/game/consts/Global.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/tools/MkUtils.js"},{"deps":{},"path":"preview-scripts/assets/src/game/consts/ActionType.js"},{"deps":{"./LoaderType":8},"path":"preview-scripts/assets/src/game/consts/UIType.js"},{"deps":{"../../framework/manager/MusicManager":93,"../../framework/message/EventDispath":107,"../../framework/message/EventType":29,"../../framework/tools/SortUtils":110,"../../framework/tools/Utils":106,"../datas/PlayerData":10,"../manager/ConfigManager":36,"../manager/EffectManager":9,"../../framework/manager/SDKManager":92,"../consts/CConst":115},"path":"preview-scripts/assets/src/game/datas/PlayerModel.js"},{"deps":{"../../framework/manager/LoaderManager":87,"../../framework/base/Handler":3,"../datas/PlayerModel":35,"../../framework/message/NResponer":96,"../view/Message":39,"../../framework/tools/Utils":106,"../consts/Global":31,"../consts/CConst":115,"../../framework/manager/SDKManager":92,"../../framework/tools/MkUtils":32},"path":"preview-scripts/assets/src/game/manager/ConfigManager.js"},{"deps":{},"path":"preview-scripts/assets/src/game/manager/MessageCenter.js"},{"deps":{},"path":"preview-scripts/assets/src/game/consts/EventConst.js"},{"deps":{},"path":"preview-scripts/assets/src/game/view/Message.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../task/AItemRenerer":94},"path":"preview-scripts/assets/src/game/view/level/LevelItem.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../task/AVirtualScrollView":22},"path":"preview-scripts/assets/src/game/view/level/LevelView.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../consts/UIType":34,"../popView/PopView1":71,"../task/AItemRenerer":94},"path":"preview-scripts/assets/src/game/view/lvUp/LvUpItem.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/lvUp/LvUpCompleteView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104,"../../consts/CConst":115,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../task/AVirtualScrollView":22},"path":"preview-scripts/assets/src/game/view/lvUp/LvUpView.js"},{"deps":{"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../consts/ActionType":33,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"./CashierManager":74},"path":"preview-scripts/assets/src/game/view/main/CashierPrefab.js"},{"deps":{"../../../framework/manager/GamePoolManager":86,"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/ComponentHelper":100,"../../../framework/tools/MkUtils":32,"../../../framework/tools/Utils":106,"../../../framework/ui/BaseView":101,"../../consts/CConst":115,"../../consts/Global":31,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"./CashierPrefab":45,"./FencePrefab":18,"./FieldPrefab":88,"./PipePrefab":56,"./RoadPrefab":50,"./RolePrefab":49,"./ScarecrowPrefab":51,"./ShelvePrefab":52,"./WallPrefab":54,"./WarehousePrefab":58},"path":"preview-scripts/assets/src/game/view/main/GameMainView.js"},{"deps":{},"path":"preview-scripts/assets/src/game/consts/StorageType.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/tools/ComponentHelper":100},"path":"preview-scripts/assets/src/game/view/main/RepayRedBox.js"},{"deps":{"../../../framework/manager/GamePoolManager":86,"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/tools/Utils":106,"../../consts/ActionType":33,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"./CashierManager":74},"path":"preview-scripts/assets/src/game/view/main/RolePrefab.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/main/RoadPrefab.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/main/ScarecrowPrefab.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../popView/PopView1":71},"path":"preview-scripts/assets/src/game/view/main/ShelvePrefab.js"},{"deps":{"../../../framework/helper/JSHelper":25,"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/ComponentHelper":100,"../../../framework/tools/Utils":106,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../popView/PopView1":71,"./TopOrderPrefab":55},"path":"preview-scripts/assets/src/game/view/main/TopPrefab.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/main/WallPrefab.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/ComponentHelper":100,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"./TopOrderItem":57},"path":"preview-scripts/assets/src/game/view/main/TopOrderPrefab.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/main/PipePrefab.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/tools/MkUtils":32,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/main/TopOrderItem.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/main/WarehousePrefab.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104},"path":"preview-scripts/assets/src/game/view/order/OrderHbView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/order/OrderGiveUpView.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/order/OrderGetScuessView.js"},{"deps":{"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../task/AVirtualScrollView":22},"path":"preview-scripts/assets/src/game/view/order/OrderCurrentView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/ui/BasePanel":104,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/order/OrderQualityView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/order/OrderRewardView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/ComponentHelper":100,"../../../framework/tools/MkUtils":32,"../../../framework/tools/Utils":106,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../popView/PopView1":71,"../task/AItemRenerer":94},"path":"preview-scripts/assets/src/game/view/order/OrderItem.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/tools/Utils":106,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../popView/PopView1":71,"../task/AVirtualScrollView":22},"path":"preview-scripts/assets/src/game/view/order/OrderView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/CConst":115,"../../consts/Global":31,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/order/GetCropView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/order/OrderSuccessView.js"},{"deps":{"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/order/ZhaoDaiView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/ui/BasePanel":104,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/popView/PopRewardView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104,"../../consts/Global":31,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/popView/PopView1.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104,"../../consts/CConst":115,"../../consts/Global":31,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/popView/PopJsView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/Global":31,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/popView/PopGcView.js"},{"deps":{"../../../framework/tools/MkUtils":32,"../../../framework/tools/Utils":106},"path":"preview-scripts/assets/src/game/view/main/CashierManager.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../datas/PlayerModel":35,"../../manager/EffectManager":9},"path":"preview-scripts/assets/src/game/view/task/TaskRewardView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104,"../../consts/CConst":115,"../../consts/Global":31,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36},"path":"preview-scripts/assets/src/game/view/popView/PopZlView.js"},{"deps":{"../../../framework/message/EventDispath":107,"../../../framework/ui/BasePanel":104,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/hbPop/HardOpenView.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/ui/BasePanel":104,"./AVirtualScrollView":22},"path":"preview-scripts/assets/src/game/view/task/TaskView.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../task/AVirtualScrollView":22},"path":"preview-scripts/assets/src/game/view/vegetables/VegetablesView.js"},{"deps":{"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../task/AItemRenerer":94},"path":"preview-scripts/assets/src/game/view/vegetables/VegetablesItem.js"},{"deps":{"../../../framework/manager/SDKManager":92,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/MkUtils":32,"../../consts/UIType":34,"./AItemRenerer":94},"path":"preview-scripts/assets/src/game/view/task/TaskItem.js"},{"deps":{"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/ui/BasePanel":104,"../../consts/UIType":34,"../../datas/PlayerModel":35},"path":"preview-scripts/assets/src/game/view/xfzs/XfzsView.js"},{"deps":{"../../../framework/tools/MkUtils":32,"../../manager/ConfigManager":36,"../task/AItemRenerer":94},"path":"preview-scripts/assets/src/game/view/warehouse/WarehouseItem.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/base/BasePoolObject.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/helper/StorageHelper.js"},{"deps":{"../base/BasePoolObject":84},"path":"preview-scripts/assets/src/framework/manager/GamePoolManager.js"},{"deps":{"../base/Handler":3,"../loader/GroupLoader":89,"../loader/Loader":97,"../tools/ComponentHelper":100},"path":"preview-scripts/assets/src/framework/manager/LoaderManager.js"},{"deps":{"../../../framework/helper/JSHelper":25,"../../../framework/manager/UIEffectManager":90,"../../../framework/manager/UIMananger":95,"../../../framework/message/EventDispath":107,"../../../framework/message/EventType":29,"../../../framework/tools/ComponentHelper":100,"../../../framework/tools/MkUtils":32,"../../../framework/tools/Utils":106,"../../consts/CConst":115,"../../consts/Global":31,"../../consts/UIType":34,"../../datas/PlayerModel":35,"../../manager/ConfigManager":36,"../../manager/EffectManager":9,"../popView/PopView1":71},"path":"preview-scripts/assets/src/game/view/main/FieldPrefab.js"},{"deps":{"./GroupData":27,"../manager/LoaderManager":87},"path":"preview-scripts/assets/src/framework/loader/GroupLoader.js"},{"deps":{"../ui/effect/ScaleUIEffect":105,"../ui/effect/FadeUIEffect":4,"../ui/effect/TopUIEffect":108,"../ui/effect/TopBackUIEffect":112,"../ui/effect/ScaleBackUIEffect":109,"../ui/effect/FadeBackUIEffect":111},"path":"preview-scripts/assets/src/framework/manager/UIEffectManager.js"},{"deps":{"../../game/consts/EventConst":38},"path":"preview-scripts/assets/src/framework/manager/DataManager.js"},{"deps":{"../../game/datas/PlayerModel":35,"../message/EventDispath":107,"../message/EventType":29,"../tools/MkUtils":32,"../tools/Utils":106},"path":"preview-scripts/assets/src/framework/manager/SDKManager.js"},{"deps":{"../../game/consts/Global":31,"../../game/datas/PlayerModel":35,"../helper/StorageHelper":85},"path":"preview-scripts/assets/src/framework/manager/MusicManager.js"},{"deps":{},"path":"preview-scripts/assets/src/game/view/task/AItemRenerer.js"},{"deps":{"./LoaderManager":87,"../base/Handler":3,"./GamePoolManager":86,"./UIEffectManager":90,"../ui/UIState":103,"../ui/BaseTips":102,"../ui/BasePanel":104,"./SDKManager":92},"path":"preview-scripts/assets/src/framework/manager/UIMananger.js"},{"deps":{"../tools/Utils":106},"path":"preview-scripts/assets/src/framework/message/NResponer.js"},{"deps":{"./LoaderItem":113},"path":"preview-scripts/assets/src/framework/loader/Loader.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/sdk/BaseSdk.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/ui/BaseUIEffect.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/tools/ComponentHelper.js"},{"deps":{"../manager/LoaderManager":87,"../manager/GamePoolManager":86,"../manager/UIMananger":95,"../base/Handler":3,"../message/NResponer":96},"path":"preview-scripts/assets/src/framework/ui/BaseView.js"},{"deps":{"../base/Handler":3,"../manager/LoaderManager":87,"../manager/UIMananger":95,"../tools/ComponentHelper":100},"path":"preview-scripts/assets/src/framework/ui/BaseTips.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/ui/UIState.js"},{"deps":{"../tools/ComponentHelper":100,"../base/Handler":3,"../manager/LoaderManager":87,"../manager/UIMananger":95,"./UIState":103,"../message/EventDispath":107},"path":"preview-scripts/assets/src/framework/ui/BasePanel.js"},{"deps":{"../BaseUIEffect":99},"path":"preview-scripts/assets/src/framework/ui/effect/ScaleUIEffect.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/tools/Utils.js"},{"deps":{"../helper/JSHelper":25},"path":"preview-scripts/assets/src/framework/message/EventDispath.js"},{"deps":{"../BaseUIEffect":99},"path":"preview-scripts/assets/src/framework/ui/effect/TopUIEffect.js"},{"deps":{"../BaseUIEffect":99},"path":"preview-scripts/assets/src/framework/ui/effect/ScaleBackUIEffect.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/tools/SortUtils.js"},{"deps":{"../BaseUIEffect":99},"path":"preview-scripts/assets/src/framework/ui/effect/FadeBackUIEffect.js"},{"deps":{"../BaseUIEffect":99},"path":"preview-scripts/assets/src/framework/ui/effect/TopBackUIEffect.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/loader/LoaderItem.js"},{"deps":{"../../framework/manager/UIMananger":95,"../../framework/tools/MkUtils":32,"./BarragePrefab":2},"path":"preview-scripts/assets/src/game/Barrage/BarrageLayer.js"},{"deps":{},"path":"preview-scripts/assets/src/game/consts/CConst.js"},{"deps":{"../../framework/tools/SortUtils":110},"path":"preview-scripts/assets/src/game/com/RoleController.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    
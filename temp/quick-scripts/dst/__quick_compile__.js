
(function () {
var scripts = [{"deps":{"./assets/src/game/Main":1,"./assets/src/game/view/main/GameMainView":2,"./assets/src/game/testloading":3,"./assets/src/framework/ui/effect/ScaleBackUIEffect":4,"./assets/src/game/consts/Global":5,"./assets/src/game/com/AlertTips":6,"./assets/src/game/datas/PlayerData":7,"./assets/src/game/Loading":8,"./assets/src/game/manager/ConfigManager":9,"./assets/src/framework/helper/JSHelper":10,"./assets/src/framework/loader/GroupLoader":11,"./assets/src/framework/manager/GamePoolManager":12,"./assets/src/framework/base/BasePoolObject":13,"./assets/src/framework/message/EventDispath":14,"./assets/src/framework/sdk/BaseSdk":15,"./assets/src/game/consts/EventConst":16,"./assets/src/framework/tools/MkUtils":17,"./assets/src/game/consts/UIType":18,"./assets/src/game/consts/StorageType":19,"./assets/src/game/consts/LoaderType":20,"./assets/src/framework/helper/StorageHelper":21,"./assets/src/game/manager/EffectManager":22,"./assets/src/framework/loader/GroupData":23,"./assets/src/framework/loader/LoaderItem":24,"./assets/src/framework/manager/DataManager":25,"./assets/src/framework/manager/LoaderManager":26,"./assets/src/framework/manager/UIEffectManager":27,"./assets/src/framework/manager/UIMananger":28,"./assets/src/framework/manager/MusicManager":29,"./assets/src/framework/loader/Loader":30,"./assets/src/framework/message/NResponer":31,"./assets/src/game/datas/PlayerModel":32,"./assets/src/framework/tools/ComponentHelper":33,"./assets/src/framework/manager/DragManager":34,"./assets/src/framework/ui/BaseTips":35,"./assets/src/framework/tools/SortUtils":36,"./assets/src/framework/ui/BasePanel":37,"./assets/src/framework/tools/Utils":38,"./assets/src/framework/ui/BaseView":39,"./assets/src/framework/ui/UIState":40,"./assets/src/framework/ui/effect/TopUIEffect":41,"./assets/src/framework/ui/effect/ScaleUIEffect":42,"./assets/src/framework/ui/effect/FadeUIEffect":43,"./assets/src/framework/ui/effect/TopBackUIEffect":44,"./assets/src/framework/message/EventType":45,"./assets/src/framework/ui/effect/FadeBackUIEffect":46,"./assets/src/framework/base/Handler":47,"./assets/src/framework/sdk/Launcher":48,"./assets/src/framework/ui/BaseUIEffect":49,"./assets/src/game/Barrage/BarragePrefab":50,"./assets/src/game/Barrage/BarrageLayer":51},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../framework/manager/UIMananger":28,"./consts/UIType":18,"../framework/manager/DataManager":25},"path":"preview-scripts/assets/src/game/Main.js"},{"deps":{"../../../framework/tools/MkUtils":17,"../../../framework/ui/BaseView":39},"path":"preview-scripts/assets/src/game/view/main/GameMainView.js"},{"deps":{},"path":"preview-scripts/assets/src/game/testloading.js"},{"deps":{"../BaseUIEffect":49},"path":"preview-scripts/assets/src/framework/ui/effect/ScaleBackUIEffect.js"},{"deps":{},"path":"preview-scripts/assets/src/game/consts/Global.js"},{"deps":{},"path":"preview-scripts/assets/src/game/com/AlertTips.js"},{"deps":{"../../framework/helper/StorageHelper":21,"../../framework/tools/Utils":38,"../consts/StorageType":19},"path":"preview-scripts/assets/src/game/datas/PlayerData.js"},{"deps":{"../framework/base/Handler":47,"../framework/manager/LoaderManager":26,"../framework/tools/MkUtils":17,"./consts/LoaderType":20,"./consts/UIType":18,"./datas/PlayerModel":32,"./manager/ConfigManager":9},"path":"preview-scripts/assets/src/game/Loading.js"},{"deps":{"../../framework/manager/LoaderManager":26,"../../framework/base/Handler":47,"../consts/Global":5},"path":"preview-scripts/assets/src/game/manager/ConfigManager.js"},{"deps":{"../manager/MusicManager":29},"path":"preview-scripts/assets/src/framework/helper/JSHelper.js"},{"deps":{"./GroupData":23,"../manager/LoaderManager":26},"path":"preview-scripts/assets/src/framework/loader/GroupLoader.js"},{"deps":{"../base/BasePoolObject":13},"path":"preview-scripts/assets/src/framework/manager/GamePoolManager.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/base/BasePoolObject.js"},{"deps":{"../helper/JSHelper":10},"path":"preview-scripts/assets/src/framework/message/EventDispath.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/sdk/BaseSdk.js"},{"deps":{},"path":"preview-scripts/assets/src/game/consts/EventConst.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/tools/MkUtils.js"},{"deps":{"./LoaderType":20},"path":"preview-scripts/assets/src/game/consts/UIType.js"},{"deps":{},"path":"preview-scripts/assets/src/game/consts/StorageType.js"},{"deps":{"../../framework/manager/LoaderManager":26},"path":"preview-scripts/assets/src/game/consts/LoaderType.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/helper/StorageHelper.js"},{"deps":{"../../framework/helper/JSHelper":10,"../../framework/message/EventDispath":14,"../../framework/message/EventType":45,"../../framework/tools/MkUtils":17},"path":"preview-scripts/assets/src/game/manager/EffectManager.js"},{"deps":{"../base/Handler":47},"path":"preview-scripts/assets/src/framework/loader/GroupData.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/loader/LoaderItem.js"},{"deps":{"../../game/consts/EventConst":16},"path":"preview-scripts/assets/src/framework/manager/DataManager.js"},{"deps":{"../base/Handler":47,"../loader/GroupLoader":11,"../loader/Loader":30,"../tools/ComponentHelper":33},"path":"preview-scripts/assets/src/framework/manager/LoaderManager.js"},{"deps":{"../ui/effect/ScaleUIEffect":42,"../ui/effect/FadeUIEffect":43,"../ui/effect/TopUIEffect":41,"../ui/effect/TopBackUIEffect":44,"../ui/effect/ScaleBackUIEffect":4,"../ui/effect/FadeBackUIEffect":46},"path":"preview-scripts/assets/src/framework/manager/UIEffectManager.js"},{"deps":{"./LoaderManager":26,"../base/Handler":47,"./GamePoolManager":12,"./UIEffectManager":27,"../ui/UIState":40,"../ui/BaseTips":35,"../ui/BasePanel":37},"path":"preview-scripts/assets/src/framework/manager/UIMananger.js"},{"deps":{"../../game/datas/PlayerModel":32,"../helper/StorageHelper":21},"path":"preview-scripts/assets/src/framework/manager/MusicManager.js"},{"deps":{"./LoaderItem":24},"path":"preview-scripts/assets/src/framework/loader/Loader.js"},{"deps":{"../tools/Utils":38},"path":"preview-scripts/assets/src/framework/message/NResponer.js"},{"deps":{"../../framework/manager/MusicManager":29,"../datas/PlayerData":7},"path":"preview-scripts/assets/src/game/datas/PlayerModel.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/tools/ComponentHelper.js"},{"deps":{"../message/NResponer":31,"../tools/MkUtils":17,"../tools/Utils":38},"path":"preview-scripts/assets/src/framework/manager/DragManager.js"},{"deps":{"../base/Handler":47,"../manager/LoaderManager":26,"../manager/UIMananger":28,"../tools/ComponentHelper":33},"path":"preview-scripts/assets/src/framework/ui/BaseTips.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/tools/SortUtils.js"},{"deps":{"../tools/ComponentHelper":33,"../base/Handler":47,"../manager/LoaderManager":26,"../manager/UIMananger":28,"./UIState":40,"../message/EventDispath":14},"path":"preview-scripts/assets/src/framework/ui/BasePanel.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/tools/Utils.js"},{"deps":{"../manager/LoaderManager":26,"../manager/GamePoolManager":12,"../manager/UIMananger":28,"../base/Handler":47,"../message/NResponer":31},"path":"preview-scripts/assets/src/framework/ui/BaseView.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/ui/UIState.js"},{"deps":{"../BaseUIEffect":49},"path":"preview-scripts/assets/src/framework/ui/effect/TopUIEffect.js"},{"deps":{"../BaseUIEffect":49},"path":"preview-scripts/assets/src/framework/ui/effect/ScaleUIEffect.js"},{"deps":{"../BaseUIEffect":49},"path":"preview-scripts/assets/src/framework/ui/effect/FadeUIEffect.js"},{"deps":{"../BaseUIEffect":49},"path":"preview-scripts/assets/src/framework/ui/effect/TopBackUIEffect.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/message/EventType.js"},{"deps":{"../BaseUIEffect":49},"path":"preview-scripts/assets/src/framework/ui/effect/FadeBackUIEffect.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/base/Handler.js"},{"deps":{"./BaseSdk":15},"path":"preview-scripts/assets/src/framework/sdk/Launcher.js"},{"deps":{},"path":"preview-scripts/assets/src/framework/ui/BaseUIEffect.js"},{"deps":{"../../framework/manager/DataManager":25,"../../framework/tools/MkUtils":17},"path":"preview-scripts/assets/src/game/Barrage/BarragePrefab.js"},{"deps":{"../../framework/manager/UIMananger":28,"../../framework/tools/MkUtils":17,"./BarragePrefab":50},"path":"preview-scripts/assets/src/game/Barrage/BarrageLayer.js"}];
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
    
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bhp86":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a9d70c9e26d96407";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"bxLYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Editor", ()=>(0, _editor.Editor));
var _editor = require("./components/Editor");

},{"./components/Editor":"6bAgN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6bAgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Editor", ()=>Editor);
var _react = require("react");
var _scriptLoader2 = require("../ScriptLoader2");
var _tinyMCE = require("../TinyMCE");
var _utils = require("../Utils");
var _editorPropTypes = require("./EditorPropTypes");
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Editor = /** @class */ function(_super) {
    __extends(Editor, _super);
    function Editor(props) {
        var _this = this;
        var _a, _b, _c;
        _this = _super.call(this, props) || this;
        _this.rollbackTimer = undefined;
        _this.valueCursor = undefined;
        _this.rollbackChange = function() {
            var editor = _this.editor;
            var value = _this.props.value;
            if (editor && value && value !== _this.currentContent) editor.undoManager.ignore(function() {
                editor.setContent(value);
                // only restore cursor on inline editors when they are focused
                // as otherwise it will cause a focus grab
                if (_this.valueCursor && (!_this.inline || editor.hasFocus())) try {
                    editor.selection.moveToBookmark(_this.valueCursor);
                } catch (e) {}
            });
            _this.rollbackTimer = undefined;
        };
        _this.handleBeforeInput = function(_evt) {
            if (_this.props.value !== undefined && _this.props.value === _this.currentContent && _this.editor) {
                if (!_this.inline || _this.editor.hasFocus()) try {
                    // getBookmark throws exceptions when the editor has not been focused
                    // possibly only in inline mode but I'm not taking chances
                    _this.valueCursor = _this.editor.selection.getBookmark(3);
                } catch (e) {}
            }
        };
        _this.handleBeforeInputSpecial = function(evt) {
            if (evt.key === "Enter" || evt.key === "Backspace" || evt.key === "Delete") _this.handleBeforeInput(evt);
        };
        _this.handleEditorChange = function(_evt) {
            var editor = _this.editor;
            if (editor && editor.initialized) {
                var newContent = editor.getContent();
                if (_this.props.value !== undefined && _this.props.value !== newContent && _this.props.rollback !== false) // start a timer and revert to the value if not applied in time
                {
                    if (!_this.rollbackTimer) _this.rollbackTimer = window.setTimeout(_this.rollbackChange, typeof _this.props.rollback === "number" ? _this.props.rollback : 200);
                }
                if (newContent !== _this.currentContent) {
                    _this.currentContent = newContent;
                    if ((0, _utils.isFunction)(_this.props.onEditorChange)) _this.props.onEditorChange(newContent, editor);
                }
            }
        };
        _this.handleEditorChangeSpecial = function(evt) {
            if (evt.key === "Backspace" || evt.key === "Delete") _this.handleEditorChange(evt);
        };
        _this.initialise = function(attempts) {
            var _a, _b, _c;
            if (attempts === void 0) attempts = 0;
            var target = _this.elementRef.current;
            if (!target) return; // Editor has been unmounted
            if (!(0, _utils.isInDoc)(target)) {
                // this is probably someone trying to help by rendering us offscreen
                // but we can't do that because the editor iframe must be in the document
                // in order to have state
                if (attempts === 0) // we probably just need to wait for the current events to be processed
                setTimeout(function() {
                    return _this.initialise(1);
                }, 1);
                else if (attempts < 100) // wait for ten seconds, polling every tenth of a second
                setTimeout(function() {
                    return _this.initialise(attempts + 1);
                }, 100);
                else // give up, at this point it seems that more polling is unlikely to help
                throw new Error("tinymce can only be initialised when in a document");
                return;
            }
            var tinymce = (0, _tinyMCE.getTinymce)(_this.view);
            if (!tinymce) throw new Error("tinymce should have been loaded into global scope");
            var finalInit = __assign(__assign({}, _this.props.init), {
                selector: undefined,
                target: target,
                readonly: _this.props.disabled,
                inline: _this.inline,
                plugins: (0, _utils.mergePlugins)((_a = _this.props.init) === null || _a === void 0 ? void 0 : _a.plugins, _this.props.plugins),
                toolbar: (_b = _this.props.toolbar) !== null && _b !== void 0 ? _b : (_c = _this.props.init) === null || _c === void 0 ? void 0 : _c.toolbar,
                setup: function(editor) {
                    _this.editor = editor;
                    _this.bindHandlers({});
                    // When running in inline mode the editor gets the initial value
                    // from the innerHTML of the element it is initialized on.
                    // However we don't want to take on the responsibility of sanitizing
                    // to remove XSS in the react integration so we have a chicken and egg
                    // problem... We avoid it by sneaking in a set content before the first
                    // "official" setContent and using TinyMCE to do the sanitization.
                    if (_this.inline && !(0, _utils.isTextareaOrInput)(target)) editor.once("PostRender", function(_evt) {
                        editor.setContent(_this.getInitialValue(), {
                            no_events: true
                        });
                    });
                    if (_this.props.init && (0, _utils.isFunction)(_this.props.init.setup)) _this.props.init.setup(editor);
                },
                init_instance_callback: function(editor) {
                    var _a, _b;
                    // check for changes that happened since tinymce.init() was called
                    var initialValue = _this.getInitialValue();
                    _this.currentContent = (_a = _this.currentContent) !== null && _a !== void 0 ? _a : editor.getContent();
                    if (_this.currentContent !== initialValue) {
                        _this.currentContent = initialValue;
                        // same as resetContent in TinyMCE 5
                        editor.setContent(initialValue);
                        editor.undoManager.clear();
                        editor.undoManager.add();
                        editor.setDirty(false);
                    }
                    var disabled = (_b = _this.props.disabled) !== null && _b !== void 0 ? _b : false;
                    (0, _utils.setMode)(_this.editor, disabled ? "readonly" : "design");
                    // ensure existing init_instance_callback is called
                    if (_this.props.init && (0, _utils.isFunction)(_this.props.init.init_instance_callback)) _this.props.init.init_instance_callback(editor);
                }
            });
            if (!_this.inline) target.style.visibility = "";
            if ((0, _utils.isTextareaOrInput)(target)) target.value = _this.getInitialValue();
            tinymce.init(finalInit);
        };
        _this.id = _this.props.id || (0, _utils.uuid)("tiny-react");
        _this.elementRef = _react.createRef();
        _this.inline = (_c = (_a = _this.props.inline) !== null && _a !== void 0 ? _a : (_b = _this.props.init) === null || _b === void 0 ? void 0 : _b.inline) !== null && _c !== void 0 ? _c : false;
        _this.boundHandlers = {};
        return _this;
    }
    Object.defineProperty(Editor.prototype, "view", {
        get: function() {
            var _a, _b;
            return (_b = (_a = this.elementRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument.defaultView) !== null && _b !== void 0 ? _b : window;
        },
        enumerable: false,
        configurable: true
    });
    Editor.prototype.componentDidUpdate = function(prevProps) {
        var _this = this;
        var _a, _b;
        if (this.rollbackTimer) {
            clearTimeout(this.rollbackTimer);
            this.rollbackTimer = undefined;
        }
        if (this.editor) {
            this.bindHandlers(prevProps);
            if (this.editor.initialized) {
                this.currentContent = (_a = this.currentContent) !== null && _a !== void 0 ? _a : this.editor.getContent();
                if (typeof this.props.initialValue === "string" && this.props.initialValue !== prevProps.initialValue) {
                    // same as resetContent in TinyMCE 5
                    this.editor.setContent(this.props.initialValue);
                    this.editor.undoManager.clear();
                    this.editor.undoManager.add();
                    this.editor.setDirty(false);
                } else if (typeof this.props.value === "string" && this.props.value !== this.currentContent) {
                    var localEditor_1 = this.editor;
                    localEditor_1.undoManager.transact(function() {
                        // inline editors grab focus when restoring selection
                        // so we don't try to keep their selection unless they are currently focused
                        var cursor;
                        if (!_this.inline || localEditor_1.hasFocus()) try {
                            // getBookmark throws exceptions when the editor has not been focused
                            // possibly only in inline mode but I'm not taking chances
                            cursor = localEditor_1.selection.getBookmark(3);
                        } catch (e) {}
                        var valueCursor = _this.valueCursor;
                        localEditor_1.setContent(_this.props.value);
                        if (!_this.inline || localEditor_1.hasFocus()) for(var _i = 0, _a = [
                            cursor,
                            valueCursor
                        ]; _i < _a.length; _i++){
                            var bookmark = _a[_i];
                            if (bookmark) try {
                                localEditor_1.selection.moveToBookmark(bookmark);
                                _this.valueCursor = bookmark;
                                break;
                            } catch (e) {}
                        }
                    });
                }
                if (this.props.disabled !== prevProps.disabled) {
                    var disabled = (_b = this.props.disabled) !== null && _b !== void 0 ? _b : false;
                    (0, _utils.setMode)(this.editor, disabled ? "readonly" : "design");
                }
            }
        }
    };
    Editor.prototype.componentDidMount = function() {
        var _this = this;
        var _a, _b, _c, _d, _e;
        if ((0, _tinyMCE.getTinymce)(this.view) !== null) this.initialise();
        else if (Array.isArray(this.props.tinymceScriptSrc) && this.props.tinymceScriptSrc.length === 0) (_b = (_a = this.props).onScriptsLoadError) === null || _b === void 0 || _b.call(_a, new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));
        else if ((_c = this.elementRef.current) === null || _c === void 0 ? void 0 : _c.ownerDocument) {
            var successHandler = function() {
                var _a, _b;
                (_b = (_a = _this.props).onScriptsLoad) === null || _b === void 0 || _b.call(_a);
                _this.initialise();
            };
            var errorHandler = function(err) {
                var _a, _b;
                (_b = (_a = _this.props).onScriptsLoadError) === null || _b === void 0 || _b.call(_a, err);
            };
            (0, _scriptLoader2.ScriptLoader).loadList(this.elementRef.current.ownerDocument, this.getScriptSources(), (_e = (_d = this.props.scriptLoading) === null || _d === void 0 ? void 0 : _d.delay) !== null && _e !== void 0 ? _e : 0, successHandler, errorHandler);
        }
    };
    Editor.prototype.componentWillUnmount = function() {
        var _this = this;
        var editor = this.editor;
        if (editor) {
            editor.off(this.changeEvents(), this.handleEditorChange);
            editor.off(this.beforeInputEvent(), this.handleBeforeInput);
            editor.off("keypress", this.handleEditorChangeSpecial);
            editor.off("keydown", this.handleBeforeInputSpecial);
            editor.off("NewBlock", this.handleEditorChange);
            Object.keys(this.boundHandlers).forEach(function(eventName) {
                editor.off(eventName, _this.boundHandlers[eventName]);
            });
            this.boundHandlers = {};
            editor.remove();
            this.editor = undefined;
        }
    };
    Editor.prototype.render = function() {
        return this.inline ? this.renderInline() : this.renderIframe();
    };
    Editor.prototype.changeEvents = function() {
        var _a, _b, _c;
        var isIE = (_c = (_b = (_a = (0, _tinyMCE.getTinymce)(this.view)) === null || _a === void 0 ? void 0 : _a.Env) === null || _b === void 0 ? void 0 : _b.browser) === null || _c === void 0 ? void 0 : _c.isIE();
        return isIE ? "change keyup compositionend setcontent CommentChange" : "change input compositionend setcontent CommentChange";
    };
    Editor.prototype.beforeInputEvent = function() {
        return (0, _utils.isBeforeInputEventAvailable)() ? "beforeinput SelectionChange" : "SelectionChange";
    };
    Editor.prototype.renderInline = function() {
        var _a = this.props.tagName, tagName = _a === void 0 ? "div" : _a;
        return _react.createElement(tagName, {
            ref: this.elementRef,
            id: this.id
        });
    };
    Editor.prototype.renderIframe = function() {
        return _react.createElement("textarea", {
            ref: this.elementRef,
            style: {
                visibility: "hidden"
            },
            name: this.props.textareaName,
            id: this.id
        });
    };
    Editor.prototype.getScriptSources = function() {
        var _a, _b;
        var async = (_a = this.props.scriptLoading) === null || _a === void 0 ? void 0 : _a.async;
        var defer = (_b = this.props.scriptLoading) === null || _b === void 0 ? void 0 : _b.defer;
        if (this.props.tinymceScriptSrc !== undefined) {
            if (typeof this.props.tinymceScriptSrc === "string") return [
                {
                    src: this.props.tinymceScriptSrc,
                    async: async,
                    defer: defer
                }
            ];
            // multiple scripts can be specified which allows for hybrid mode
            return this.props.tinymceScriptSrc.map(function(item) {
                if (typeof item === "string") // async does not make sense for multiple items unless
                // they are not dependent (which will be unlikely)
                return {
                    src: item,
                    async: async,
                    defer: defer
                };
                else return item;
            });
        }
        // fallback to the cloud when the tinymceScriptSrc is not specified
        var channel = this.props.cloudChannel;
        var apiKey = this.props.apiKey ? this.props.apiKey : "no-api-key";
        var cloudTinyJs = "https://cdn.tiny.cloud/1/".concat(apiKey, "/tinymce/").concat(channel, "/tinymce.min.js");
        return [
            {
                src: cloudTinyJs,
                async: async,
                defer: defer
            }
        ];
    };
    Editor.prototype.getInitialValue = function() {
        if (typeof this.props.initialValue === "string") return this.props.initialValue;
        else if (typeof this.props.value === "string") return this.props.value;
        else return "";
    };
    Editor.prototype.bindHandlers = function(prevProps) {
        var _this = this;
        if (this.editor !== undefined) {
            // typescript chokes trying to understand the type of the lookup function
            (0, _utils.configHandlers)(this.editor, prevProps, this.props, this.boundHandlers, function(key) {
                return _this.props[key];
            });
            // check if we should monitor editor changes
            var isValueControlled = function(p) {
                return p.onEditorChange !== undefined || p.value !== undefined;
            };
            var wasControlled = isValueControlled(prevProps);
            var nowControlled = isValueControlled(this.props);
            if (!wasControlled && nowControlled) {
                this.editor.on(this.changeEvents(), this.handleEditorChange);
                this.editor.on(this.beforeInputEvent(), this.handleBeforeInput);
                this.editor.on("keydown", this.handleBeforeInputSpecial);
                this.editor.on("keyup", this.handleEditorChangeSpecial);
                this.editor.on("NewBlock", this.handleEditorChange);
            } else if (wasControlled && !nowControlled) {
                this.editor.off(this.changeEvents(), this.handleEditorChange);
                this.editor.off(this.beforeInputEvent(), this.handleBeforeInput);
                this.editor.off("keydown", this.handleBeforeInputSpecial);
                this.editor.off("keyup", this.handleEditorChangeSpecial);
                this.editor.off("NewBlock", this.handleEditorChange);
            }
        }
    };
    Editor.propTypes = (0, _editorPropTypes.EditorPropTypes);
    Editor.defaultProps = {
        cloudChannel: "6"
    };
    return Editor;
}(_react.Component);

},{"react":"21dqq","../ScriptLoader2":"6lRpw","../TinyMCE":"b6ngf","../Utils":"d1v8a","./EditorPropTypes":"9tGvv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6lRpw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScriptLoader", ()=>ScriptLoader);
var _utils = require("./Utils");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var injectScriptTag = function(doc, item, handler) {
    var _a, _b;
    var scriptTag = doc.createElement("script");
    scriptTag.referrerPolicy = "origin";
    scriptTag.type = "application/javascript";
    scriptTag.id = item.id;
    scriptTag.src = item.src;
    scriptTag.async = (_a = item.async) !== null && _a !== void 0 ? _a : false;
    scriptTag.defer = (_b = item.defer) !== null && _b !== void 0 ? _b : false;
    var loadHandler = function() {
        scriptTag.removeEventListener("load", loadHandler);
        scriptTag.removeEventListener("error", errorHandler);
        handler(item.src);
    };
    var errorHandler = function(err) {
        scriptTag.removeEventListener("load", loadHandler);
        scriptTag.removeEventListener("error", errorHandler);
        handler(item.src, err);
    };
    scriptTag.addEventListener("load", loadHandler);
    scriptTag.addEventListener("error", errorHandler);
    if (doc.head) doc.head.appendChild(scriptTag);
};
var createDocumentScriptLoader = function(doc) {
    var lookup = {};
    var scriptLoadOrErrorHandler = function(src, err) {
        var item = lookup[src];
        item.done = true;
        item.error = err;
        for(var _i = 0, _a = item.handlers; _i < _a.length; _i++){
            var h = _a[_i];
            h(src, err);
        }
        item.handlers = [];
    };
    var loadScripts = function(items, success, failure) {
        // eslint-disable-next-line no-console
        var failureOrLog = function(err) {
            return failure !== undefined ? failure(err) : console.error(err);
        };
        if (items.length === 0) {
            failureOrLog(new Error("At least one script must be provided"));
            return;
        }
        var successCount = 0;
        var failed = false;
        var loaded = function(_src, err) {
            if (failed) return;
            if (err) {
                failed = true;
                failureOrLog(err);
            } else if (++successCount === items.length) success();
        };
        for(var _i = 0, items_1 = items; _i < items_1.length; _i++){
            var item = items_1[_i];
            var existing = lookup[item.src];
            if (existing) {
                if (existing.done) loaded(item.src, existing.error);
                else existing.handlers.push(loaded);
            } else {
                // create a new entry
                var id = (0, _utils.uuid)("tiny-");
                lookup[item.src] = {
                    id: id,
                    src: item.src,
                    done: false,
                    error: null,
                    handlers: [
                        loaded
                    ]
                };
                injectScriptTag(doc, __assign({
                    id: id
                }, item), scriptLoadOrErrorHandler);
            }
        }
    };
    var deleteScripts = function() {
        var _a;
        for(var _i = 0, _b = Object.values(lookup); _i < _b.length; _i++){
            var item = _b[_i];
            var scriptTag = doc.getElementById(item.id);
            if (scriptTag != null && scriptTag.tagName === "SCRIPT") (_a = scriptTag.parentNode) === null || _a === void 0 || _a.removeChild(scriptTag);
        }
        lookup = {};
    };
    var getDocument = function() {
        return doc;
    };
    return {
        loadScripts: loadScripts,
        deleteScripts: deleteScripts,
        getDocument: getDocument
    };
};
var createScriptLoader = function() {
    var cache = [];
    var getDocumentScriptLoader = function(doc) {
        var loader = cache.find(function(l) {
            return l.getDocument() === doc;
        });
        if (loader === undefined) {
            loader = createDocumentScriptLoader(doc);
            cache.push(loader);
        }
        return loader;
    };
    var loadList = function(doc, items, delay, success, failure) {
        var doLoad = function() {
            return getDocumentScriptLoader(doc).loadScripts(items, success, failure);
        };
        if (delay > 0) setTimeout(doLoad, delay);
        else doLoad();
    };
    var reinitialize = function() {
        for(var loader = cache.pop(); loader != null; loader = cache.pop())loader.deleteScripts();
    };
    return {
        loadList: loadList,
        reinitialize: reinitialize
    };
};
var ScriptLoader = createScriptLoader();

},{"./Utils":"d1v8a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1v8a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "configHandlers2", ()=>configHandlers2);
parcelHelpers.export(exports, "configHandlers", ()=>configHandlers);
parcelHelpers.export(exports, "uuid", ()=>uuid);
parcelHelpers.export(exports, "isTextareaOrInput", ()=>isTextareaOrInput);
parcelHelpers.export(exports, "mergePlugins", ()=>mergePlugins);
parcelHelpers.export(exports, "isBeforeInputEventAvailable", ()=>isBeforeInputEventAvailable);
parcelHelpers.export(exports, "isInDoc", ()=>isInDoc);
parcelHelpers.export(exports, "setMode", ()=>setMode);
var _editorPropTypes = require("./components/EditorPropTypes");
var isFunction = function(x) {
    return typeof x === "function";
};
var isEventProp = function(name) {
    return name in (0, _editorPropTypes.eventPropTypes);
};
var eventAttrToEventName = function(attrName) {
    return attrName.substr(2);
};
var configHandlers2 = function(handlerLookup, on, off, adapter, prevProps, props, boundHandlers) {
    var prevEventKeys = Object.keys(prevProps).filter(isEventProp);
    var currEventKeys = Object.keys(props).filter(isEventProp);
    var removedKeys = prevEventKeys.filter(function(key) {
        return props[key] === undefined;
    });
    var addedKeys = currEventKeys.filter(function(key) {
        return prevProps[key] === undefined;
    });
    removedKeys.forEach(function(key) {
        // remove event handler
        var eventName = eventAttrToEventName(key);
        var wrappedHandler = boundHandlers[eventName];
        off(eventName, wrappedHandler);
        delete boundHandlers[eventName];
    });
    addedKeys.forEach(function(key) {
        var wrappedHandler = adapter(handlerLookup, key);
        var eventName = eventAttrToEventName(key);
        boundHandlers[eventName] = wrappedHandler;
        on(eventName, wrappedHandler);
    });
};
var configHandlers = function(editor, prevProps, props, boundHandlers, lookup) {
    return configHandlers2(lookup, editor.on.bind(editor), editor.off.bind(editor), // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    function(handlerLookup, key) {
        return function(e) {
            var _a;
            return (_a = handlerLookup(key)) === null || _a === void 0 ? void 0 : _a(e, editor);
        };
    }, prevProps, props, boundHandlers);
};
var unique = 0;
var uuid = function(prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + "_" + random + unique + String(time);
};
var isTextareaOrInput = function(element) {
    return element !== null && (element.tagName.toLowerCase() === "textarea" || element.tagName.toLowerCase() === "input");
};
var normalizePluginArray = function(plugins) {
    if (typeof plugins === "undefined" || plugins === "") return [];
    return Array.isArray(plugins) ? plugins : plugins.split(" ");
};
var mergePlugins = function(initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isBeforeInputEventAvailable = function() {
    return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
};
var isInDoc = function(elem) {
    if (!("isConnected" in Node.prototype)) {
        // Fallback for IE and old Edge
        var current = elem;
        var parent_1 = elem.parentNode;
        while(parent_1 != null){
            current = parent_1;
            parent_1 = current.parentNode;
        }
        return current === elem.ownerDocument;
    }
    return elem.isConnected;
};
var setMode = function(editor, mode) {
    if (editor !== undefined) {
        if (editor.mode != null && typeof editor.mode === "object" && typeof editor.mode.set === "function") editor.mode.set(mode);
        else editor.setMode(mode);
    }
};

},{"./components/EditorPropTypes":"9tGvv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9tGvv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventPropTypes", ()=>eventPropTypes);
parcelHelpers.export(exports, "EditorPropTypes", ()=>EditorPropTypes);
var _propTypes = require("prop-types");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var eventPropTypes = {
    onActivate: _propTypes.func,
    onAddUndo: _propTypes.func,
    onBeforeAddUndo: _propTypes.func,
    onBeforeExecCommand: _propTypes.func,
    onBeforeGetContent: _propTypes.func,
    onBeforeRenderUI: _propTypes.func,
    onBeforeSetContent: _propTypes.func,
    onBeforePaste: _propTypes.func,
    onBlur: _propTypes.func,
    onChange: _propTypes.func,
    onClearUndos: _propTypes.func,
    onClick: _propTypes.func,
    onContextMenu: _propTypes.func,
    onCommentChange: _propTypes.func,
    onCopy: _propTypes.func,
    onCut: _propTypes.func,
    onDblclick: _propTypes.func,
    onDeactivate: _propTypes.func,
    onDirty: _propTypes.func,
    onDrag: _propTypes.func,
    onDragDrop: _propTypes.func,
    onDragEnd: _propTypes.func,
    onDragGesture: _propTypes.func,
    onDragOver: _propTypes.func,
    onDrop: _propTypes.func,
    onExecCommand: _propTypes.func,
    onFocus: _propTypes.func,
    onFocusIn: _propTypes.func,
    onFocusOut: _propTypes.func,
    onGetContent: _propTypes.func,
    onHide: _propTypes.func,
    onInit: _propTypes.func,
    onKeyDown: _propTypes.func,
    onKeyPress: _propTypes.func,
    onKeyUp: _propTypes.func,
    onLoadContent: _propTypes.func,
    onMouseDown: _propTypes.func,
    onMouseEnter: _propTypes.func,
    onMouseLeave: _propTypes.func,
    onMouseMove: _propTypes.func,
    onMouseOut: _propTypes.func,
    onMouseOver: _propTypes.func,
    onMouseUp: _propTypes.func,
    onNodeChange: _propTypes.func,
    onObjectResizeStart: _propTypes.func,
    onObjectResized: _propTypes.func,
    onObjectSelected: _propTypes.func,
    onPaste: _propTypes.func,
    onPostProcess: _propTypes.func,
    onPostRender: _propTypes.func,
    onPreProcess: _propTypes.func,
    onProgressState: _propTypes.func,
    onRedo: _propTypes.func,
    onRemove: _propTypes.func,
    onReset: _propTypes.func,
    onSaveContent: _propTypes.func,
    onSelectionChange: _propTypes.func,
    onSetAttrib: _propTypes.func,
    onSetContent: _propTypes.func,
    onShow: _propTypes.func,
    onSubmit: _propTypes.func,
    onUndo: _propTypes.func,
    onVisualAid: _propTypes.func,
    onSkinLoadError: _propTypes.func,
    onThemeLoadError: _propTypes.func,
    onModelLoadError: _propTypes.func,
    onPluginLoadError: _propTypes.func,
    onIconsLoadError: _propTypes.func,
    onLanguageLoadError: _propTypes.func,
    onScriptsLoad: _propTypes.func,
    onScriptsLoadError: _propTypes.func
};
var EditorPropTypes = __assign({
    apiKey: _propTypes.string,
    id: _propTypes.string,
    inline: _propTypes.bool,
    init: _propTypes.object,
    initialValue: _propTypes.string,
    onEditorChange: _propTypes.func,
    value: _propTypes.string,
    tagName: _propTypes.string,
    cloudChannel: _propTypes.string,
    plugins: _propTypes.oneOfType([
        _propTypes.string,
        _propTypes.array
    ]),
    toolbar: _propTypes.oneOfType([
        _propTypes.string,
        _propTypes.array
    ]),
    disabled: _propTypes.bool,
    textareaName: _propTypes.string,
    tinymceScriptSrc: _propTypes.oneOfType([
        _propTypes.string,
        _propTypes.arrayOf(_propTypes.string),
        _propTypes.arrayOf(_propTypes.shape({
            src: _propTypes.string,
            async: _propTypes.bool,
            defer: _propTypes.bool
        }))
    ]),
    rollback: _propTypes.oneOfType([
        _propTypes.number,
        _propTypes.oneOf([
            false
        ])
    ]),
    scriptLoading: _propTypes.shape({
        async: _propTypes.bool,
        defer: _propTypes.bool,
        delay: _propTypes.number
    })
}, eventPropTypes);

},{"prop-types":"7wKI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6ngf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTinymce", ()=>getTinymce);
var getTinymce = function(view) {
    var global = view;
    return global && global.tinymce ? global.tinymce : null;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bhp86","1xC6H"], null, "parcelRequire4366")

//# sourceMappingURL=ts.26d96407.js.map

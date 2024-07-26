var __defProp = Object.defineProperty;
var __defNormalProp = (obj2, key, value) => key in obj2 ? __defProp(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField = (obj2, key, value) => {
  __defNormalProp(obj2, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var emptyObject = Object.freeze({});
function isUndef(v) {
  return v === void 0 || v === null;
}
function isDef(v) {
  return v !== void 0 && v !== null;
}
function isTrue(v) {
  return v === true;
}
function isFalse(v) {
  return v === false;
}
function isPrimitive$1(value) {
  return typeof value === "string" || typeof value === "number" || // $flow-disable-line
  typeof value === "symbol" || typeof value === "boolean";
}
function isObject$9(obj2) {
  return obj2 !== null && typeof obj2 === "object";
}
var _toString = Object.prototype.toString;
function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
function isPlainObject$2(obj2) {
  return _toString.call(obj2) === "[object Object]";
}
function isRegExp(v) {
  return _toString.call(v) === "[object RegExp]";
}
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function isPromise(val) {
  return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
}
function toString(val) {
  return val == null ? "" : Array.isArray(val) || isPlainObject$2(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
function makeMap(str, expectsLowerCase) {
  var map2 = /* @__PURE__ */ Object.create(null);
  var list = str.split(",");
  for (var i = 0; i < list.length; i++) {
    map2[list[i]] = true;
  }
  return expectsLowerCase ? function(val) {
    return map2[val.toLowerCase()];
  } : function(val) {
    return map2[val];
  };
}
makeMap("slot,component", true);
var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
function remove(arr, item) {
  if (arr.length) {
    var index2 = arr.indexOf(item);
    if (index2 > -1) {
      return arr.splice(index2, 1);
    }
  }
}
var hasOwnProperty$c = Object.prototype.hasOwnProperty;
function hasOwn(obj2, key) {
  return hasOwnProperty$c.call(obj2, key);
}
function cached(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
var camelizeRE = /-(\w)/g;
var camelize = cached(function(str) {
  return str.replace(camelizeRE, function(_, c) {
    return c ? c.toUpperCase() : "";
  });
});
var capitalize = cached(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function(str) {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
function polyfillBind(fn, ctx2) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx2, arguments) : fn.call(ctx2, a) : fn.call(ctx2);
  }
  boundFn._length = fn.length;
  return boundFn;
}
function nativeBind(fn, ctx2) {
  return fn.bind(ctx2);
}
var bind$1 = Function.prototype.bind ? nativeBind : polyfillBind;
function toArray$1(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}
function extend$1(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}
function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend$1(res, arr[i]);
    }
  }
  return res;
}
function noop$1(a, b, c) {
}
var no = function(a, b, c) {
  return false;
};
var identity$3 = function(_) {
  return _;
};
function looseEqual(a, b) {
  if (a === b) {
    return true;
  }
  var isObjectA = isObject$9(a);
  var isObjectB = isObject$9(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function(e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function(key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}
function once$1(fn) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}
var SSR_ATTR = "data-server-rendered";
var ASSET_TYPES = [
  "component",
  "directive",
  "filter"
];
var LIFECYCLE_HOOKS = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch"
];
var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: /* @__PURE__ */ Object.create(null),
  /**
   * Whether to suppress warnings.
   */
  silent: false,
  /**
   * Show production mode tip message on boot?
   */
  productionTip: false,
  /**
   * Whether to enable devtools
   */
  devtools: false,
  /**
   * Whether to record perf
   */
  performance: false,
  /**
   * Error handler for watcher errors
   */
  errorHandler: null,
  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,
  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],
  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: /* @__PURE__ */ Object.create(null),
  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,
  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,
  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,
  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop$1,
  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity$3,
  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,
  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,
  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function isReserved(str) {
  var c = (str + "").charCodeAt(0);
  return c === 36 || c === 95;
}
function def(obj2, key, val, enumerable) {
  Object.defineProperty(obj2, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
function parsePath$1(path) {
  if (bailRE.test(path)) {
    return;
  }
  var segments = path.split(".");
  return function(obj2) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj2) {
        return;
      }
      obj2 = obj2[segments[i]];
    }
    return obj2;
  };
}
var hasProto$1 = "__proto__" in {};
var inBrowser$1 = typeof window !== "undefined";
var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser$1 && window.navigator.userAgent.toLowerCase();
var isIE$2 = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
var isEdge = UA && UA.indexOf("edge/") > 0;
UA && UA.indexOf("android") > 0 || weexPlatform === "android";
var isIOS$1 = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === "ios";
var isFF = UA && UA.match(/firefox\/(\d+)/);
var nativeWatch = {}.watch;
var supportsPassive$2 = false;
if (inBrowser$1) {
  try {
    var opts$1 = {};
    Object.defineProperty(opts$1, "passive", {
      get: function get3() {
        supportsPassive$2 = true;
      }
    });
    window.addEventListener("test-passive", null, opts$1);
  } catch (e) {
  }
}
var _isServer;
var isServerRendering = function() {
  if (_isServer === void 0) {
    if (!inBrowser$1 && !inWeex && typeof global !== "undefined") {
      _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
    } else {
      _isServer = false;
    }
  }
  return _isServer;
};
var devtools = inBrowser$1 && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function isNative(Ctor) {
  return typeof Ctor === "function" && /native code/.test(Ctor.toString());
}
var hasSymbol$1 = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
var _Set$1;
if (typeof Set !== "undefined" && isNative(Set)) {
  _Set$1 = Set;
} else {
  _Set$1 = /* @__PURE__ */ function() {
    function Set2() {
      this.set = /* @__PURE__ */ Object.create(null);
    }
    Set2.prototype.has = function has4(key) {
      return this.set[key] === true;
    };
    Set2.prototype.add = function add4(key) {
      this.set[key] = true;
    };
    Set2.prototype.clear = function clear2() {
      this.set = /* @__PURE__ */ Object.create(null);
    };
    return Set2;
  }();
}
var warn$1 = noop$1;
var uid = 0;
var Dep = function Dep2() {
  this.id = uid++;
  this.subs = [];
};
Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};
Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};
Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};
Dep.prototype.notify = function notify() {
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};
Dep.target = null;
var targetStack = [];
function pushTarget(target2) {
  targetStack.push(target2);
  Dep.target = target2;
}
function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
var VNode = function VNode2(tag, data2, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data2;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = void 0;
  this.context = context;
  this.fnContext = void 0;
  this.fnOptions = void 0;
  this.fnScopeId = void 0;
  this.key = data2 && data2.key;
  this.componentOptions = componentOptions;
  this.componentInstance = void 0;
  this.parent = void 0;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = void 0;
  this.isAsyncPlaceholder = false;
};
var prototypeAccessors$8 = { child: { configurable: true } };
prototypeAccessors$8.child.get = function() {
  return this.componentInstance;
};
Object.defineProperties(VNode.prototype, prototypeAccessors$8);
var createEmptyVNode = function(text) {
  if (text === void 0)
    text = "";
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};
function createTextVNode(val) {
  return new VNode(void 0, void 0, void 0, String(val));
}
function cloneVNode(vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
var arrayProto$1 = Array.prototype;
var arrayMethods = Object.create(arrayProto$1);
var methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
methodsToPatch.forEach(function(method) {
  var original = arrayProto$1[method];
  def(arrayMethods, method, function mutator() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted3;
    switch (method) {
      case "push":
      case "unshift":
        inserted3 = args;
        break;
      case "splice":
        inserted3 = args.slice(2);
        break;
    }
    if (inserted3) {
      ob.observeArray(inserted3);
    }
    ob.dep.notify();
    return result;
  });
});
var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
var shouldObserve = true;
function toggleObserving(value) {
  shouldObserve = value;
}
var Observer = function Observer2(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, "__ob__", this);
  if (Array.isArray(value)) {
    if (hasProto$1) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
Observer.prototype.walk = function walk(obj2) {
  var keys2 = Object.keys(obj2);
  for (var i = 0; i < keys2.length; i++) {
    defineReactive$$1(obj2, keys2[i]);
  }
};
Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};
function protoAugment(target2, src) {
  target2.__proto__ = src;
}
function copyAugment(target2, src, keys2) {
  for (var i = 0, l = keys2.length; i < l; i++) {
    var key = keys2[i];
    def(target2, key, src[key]);
  }
}
function observe(value, asRootData) {
  if (!isObject$9(value) || value instanceof VNode) {
    return;
  }
  var ob;
  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject$2(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob;
}
function defineReactive$$1(obj2, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj2, key);
  if (property && property.configurable === false) {
    return;
  }
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj2[key];
  }
  var childOb = !shallow && observe(val);
  Object.defineProperty(obj2, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj2) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj2) : val;
      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      if (getter && !setter) {
        return;
      }
      if (setter) {
        setter.call(obj2, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
function set(target2, key, val) {
  if (Array.isArray(target2) && isValidArrayIndex(key)) {
    target2.length = Math.max(target2.length, key);
    target2.splice(key, 1, val);
    return val;
  }
  if (key in target2 && !(key in Object.prototype)) {
    target2[key] = val;
    return val;
  }
  var ob = target2.__ob__;
  if (target2._isVue || ob && ob.vmCount) {
    return val;
  }
  if (!ob) {
    target2[key] = val;
    return val;
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
function del(target2, key) {
  if (Array.isArray(target2) && isValidArrayIndex(key)) {
    target2.splice(key, 1);
    return;
  }
  var ob = target2.__ob__;
  if (target2._isVue || ob && ob.vmCount) {
    return;
  }
  if (!hasOwn(target2, key)) {
    return;
  }
  delete target2[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}
function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
var strats = config.optionMergeStrategies;
function mergeData(to, from) {
  if (!from) {
    return to;
  }
  var key, toVal, fromVal;
  var keys2 = hasSymbol$1 ? Reflect.ownKeys(from) : Object.keys(from);
  for (var i = 0; i < keys2.length; i++) {
    key = keys2[i];
    if (key === "__ob__") {
      continue;
    }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject$2(toVal) && isPlainObject$2(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}
function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    if (!childVal) {
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    return function mergedDataFn() {
      return mergeData(
        typeof childVal === "function" ? childVal.call(this, this) : childVal,
        typeof parentVal === "function" ? parentVal.call(this, this) : parentVal
      );
    };
  } else {
    return function mergedInstanceDataFn() {
      var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}
strats.data = function(parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== "function") {
      return parentVal;
    }
    return mergeDataOrFn(parentVal, childVal);
  }
  return mergeDataOrFn(parentVal, childVal, vm);
};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks2) {
  var res = [];
  for (var i = 0; i < hooks2.length; i++) {
    if (res.indexOf(hooks2[i]) === -1) {
      res.push(hooks2[i]);
    }
  }
  return res;
}
LIFECYCLE_HOOKS.forEach(function(hook) {
  strats[hook] = mergeHook;
});
function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    return extend$1(res, childVal);
  } else {
    return res;
  }
}
ASSET_TYPES.forEach(function(type) {
  strats[type + "s"] = mergeAssets;
});
strats.watch = function(parentVal, childVal, vm, key) {
  if (parentVal === nativeWatch) {
    parentVal = void 0;
  }
  if (childVal === nativeWatch) {
    childVal = void 0;
  }
  if (!childVal) {
    return Object.create(parentVal || null);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = {};
  extend$1(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }
  return ret;
};
strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
  if (childVal && false) {
    assertObjectType(key, childVal);
  }
  if (!parentVal) {
    return childVal;
  }
  var ret = /* @__PURE__ */ Object.create(null);
  extend$1(ret, parentVal);
  if (childVal) {
    extend$1(ret, childVal);
  }
  return ret;
};
strats.provide = mergeDataOrFn;
var defaultStrat = function(parentVal, childVal) {
  return childVal === void 0 ? parentVal : childVal;
};
function normalizeProps(options2, vm) {
  var props2 = options2.props;
  if (!props2) {
    return;
  }
  var res = {};
  var i, val, name;
  if (Array.isArray(props2)) {
    i = props2.length;
    while (i--) {
      val = props2[i];
      if (typeof val === "string") {
        name = camelize(val);
        res[name] = { type: null };
      }
    }
  } else if (isPlainObject$2(props2)) {
    for (var key in props2) {
      val = props2[key];
      name = camelize(key);
      res[name] = isPlainObject$2(val) ? val : { type: val };
    }
  } else
    ;
  options2.props = res;
}
function normalizeInject(options2, vm) {
  var inject = options2.inject;
  if (!inject) {
    return;
  }
  var normalized = options2.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject$2(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject$2(val) ? extend$1({ from: key }, val) : { from: val };
    }
  } else
    ;
}
function normalizeDirectives(options2) {
  var dirs = options2.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === "function") {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}
function assertObjectType(name, value, vm) {
  if (!isPlainObject$2(value)) {
    warn$1(
      'Invalid value for option "' + name + '": expected an Object, but got ' + toRawType(value) + "."
    );
  }
}
function mergeOptions(parent, child, vm) {
  if (typeof child === "function") {
    child = child.options;
  }
  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }
  var options2 = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key2) {
    var strat = strats[key2] || defaultStrat;
    options2[key2] = strat(parent[key2], child[key2], vm, key2);
  }
  return options2;
}
function resolveAsset(options2, type, id2, warnMissing) {
  if (typeof id2 !== "string") {
    return;
  }
  var assets = options2[type];
  if (hasOwn(assets, id2)) {
    return assets[id2];
  }
  var camelizedId = camelize(id2);
  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  }
  var res = assets[id2] || assets[camelizedId] || assets[PascalCaseId];
  return res;
}
function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, "default")) {
      value = false;
    } else if (value === "" || value === hyphenate(key)) {
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  if (value === void 0) {
    value = getPropDefaultValue(vm, prop, key);
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  return value;
}
function getPropDefaultValue(vm, prop, key) {
  if (!hasOwn(prop, "default")) {
    return void 0;
  }
  var def2 = prop.default;
  if (vm && vm.$options.propsData && vm.$options.propsData[key] === void 0 && vm._props[key] !== void 0) {
    return vm._props[key];
  }
  return typeof def2 === "function" && getType(prop.type) !== "Function" ? def2.call(vm) : def2;
}
var functionTypeCheckRE = /^\s*function (\w+)/;
function getType(fn) {
  var match3 = fn && fn.toString().match(functionTypeCheckRE);
  return match3 ? match3[1] : "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }
  return -1;
}
function handleError(err, vm, info) {
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while (cur = cur.$parent) {
        var hooks2 = cur.$options.errorCaptured;
        if (hooks2) {
          for (var i = 0; i < hooks2.length; i++) {
            try {
              var capture = hooks2[i].call(cur, err, vm, info) === false;
              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, "errorCaptured hook");
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}
function invokeWithErrorHandling(handler2, context, args, vm, info) {
  var res;
  try {
    res = args ? handler2.apply(context, args) : handler2.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function(e) {
        return handleError(e, vm, info + " (Promise/async)");
      });
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res;
}
function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      if (e !== err) {
        logError(e);
      }
    }
  }
  logError(err);
}
function logError(err, vm, info) {
  if ((inBrowser$1 || inWeex) && typeof console !== "undefined") {
    console.error(err);
  } else {
    throw err;
  }
}
var isUsingMicroTask = false;
var callbacks = [];
var pending = false;
function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}
var timerFunc;
if (typeof Promise !== "undefined" && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function() {
    p.then(flushCallbacks);
    if (isIOS$1) {
      setTimeout(noop$1);
    }
  };
  isUsingMicroTask = true;
} else if (!isIE$2 && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function() {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  timerFunc = function() {
    setImmediate(flushCallbacks);
  };
} else {
  timerFunc = function() {
    setTimeout(flushCallbacks, 0);
  };
}
function nextTick(cb, ctx2) {
  var _resolve;
  callbacks.push(function() {
    if (cb) {
      try {
        cb.call(ctx2);
      } catch (e) {
        handleError(e, ctx2, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx2);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  if (!cb && typeof Promise !== "undefined") {
    return new Promise(function(resolve2) {
      _resolve = resolve2;
    });
  }
}
var seenObjects = new _Set$1();
function traverse(val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}
function _traverse(val, seen2) {
  var i, keys2;
  var isA = Array.isArray(val);
  if (!isA && !isObject$9(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen2.has(depId)) {
      return;
    }
    seen2.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) {
      _traverse(val[i], seen2);
    }
  } else {
    keys2 = Object.keys(val);
    i = keys2.length;
    while (i--) {
      _traverse(val[keys2[i]], seen2);
    }
  }
}
var normalizeEvent = cached(function(name) {
  var passive2 = name.charAt(0) === "&";
  name = passive2 ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === "~";
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === "!";
  name = capture ? name.slice(1) : name;
  return {
    name,
    once: once$$1,
    capture,
    passive: passive2
  };
});
function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns2 = invoker.fns;
    if (Array.isArray(fns2)) {
      var cloned = fns2.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      return invokeWithErrorHandling(fns2, null, arguments, vm, "v-on handler");
    }
  }
  invoker.fns = fns;
  return invoker;
}
function updateListeners(on, oldOn, add4, remove$$12, createOnceHandler2, vm) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur))
      ;
    else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler2(event.name, cur, event.capture);
      }
      add4(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$12(event.name, oldOn[name], event.capture);
    }
  }
}
function mergeVNodeHook(def2, hookKey, hook) {
  if (def2 instanceof VNode) {
    def2 = def2.data.hook || (def2.data.hook = {});
  }
  var invoker;
  var oldHook = def2[hookKey];
  function wrappedHook() {
    hook.apply(this, arguments);
    remove(invoker.fns, wrappedHook);
  }
  if (isUndef(oldHook)) {
    invoker = createFnInvoker([wrappedHook]);
  } else {
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }
  invoker.merged = true;
  def2[hookKey] = invoker;
}
function extractPropsFromVNodeData(data2, Ctor, tag) {
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return;
  }
  var res = {};
  var attrs2 = data2.attrs;
  var props2 = data2.props;
  if (isDef(attrs2) || isDef(props2)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props2, key, altKey, true) || checkProp(res, attrs2, key, altKey, false);
    }
  }
  return res;
}
function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true;
    }
  }
  return false;
}
function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }
  return children;
}
function normalizeChildren(children) {
  return isPrimitive$1(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : void 0;
}
function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}
function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === "boolean") {
      continue;
    }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive$1(c)) {
      if (isTextNode(last)) {
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== "") {
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res;
}
function initProvide(vm) {
  var provide3 = vm.$options.provide;
  if (provide3) {
    vm._provided = typeof provide3 === "function" ? provide3.call(vm) : provide3;
  }
}
function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function(key) {
      {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}
function resolveInject(inject, vm) {
  if (inject) {
    var result = /* @__PURE__ */ Object.create(null);
    var keys2 = hasSymbol$1 ? Reflect.ownKeys(inject) : Object.keys(inject);
    for (var i = 0; i < keys2.length; i++) {
      var key = keys2[i];
      if (key === "__ob__") {
        continue;
      }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }
        source = source.$parent;
      }
      if (!source) {
        if ("default" in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
        }
      }
    }
    return result;
  }
}
function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data2 = child.data;
    if (data2 && data2.attrs && data2.attrs.slot) {
      delete data2.attrs.slot;
    }
    if ((child.context === context || child.fnContext === context) && data2 && data2.slot != null) {
      var name = data2.slot;
      var slot = slots[name] || (slots[name] = []);
      if (child.tag === "template") {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots;
}
function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === " ";
}
function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    return prevSlots;
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== "$") {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }
  def(res, "$stable", isStable);
  def(res, "$key", key);
  def(res, "$hasNormal", hasNormalSlots);
  return res;
}
function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function() {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === "object" && !Array.isArray(res) ? [res] : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) ? void 0 : res;
  };
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized;
}
function proxyNormalSlot(slots, key) {
  return function() {
    return slots[key];
  };
}
function renderList(val, render9) {
  var ret, i, l, keys2, key;
  if (Array.isArray(val) || typeof val === "string") {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render9(val[i], i);
    }
  } else if (typeof val === "number") {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render9(i + 1, i);
    }
  } else if (isObject$9(val)) {
    if (hasSymbol$1 && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render9(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys2 = Object.keys(val);
      ret = new Array(keys2.length);
      for (i = 0, l = keys2.length; i < l; i++) {
        key = keys2[i];
        ret[i] = render9(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  ret._isVList = true;
  return ret;
}
function renderSlot(name, fallbackRender, props2, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    props2 = props2 || {};
    if (bindObject) {
      props2 = extend$1(extend$1({}, bindObject), props2);
    }
    nodes = scopedSlotFn(props2) || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
  } else {
    nodes = this.$slots[name] || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
  }
  var target2 = props2 && props2.slot;
  if (target2) {
    return this.$createElement("template", { slot: target2 }, nodes);
  } else {
    return nodes;
  }
}
function resolveFilter(id2) {
  return resolveAsset(this.$options, "filters", id2) || identity$3;
}
function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
  return eventKeyCode === void 0;
}
function bindObjectProps(data2, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject$9(value))
      ;
    else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function(key2) {
        if (key2 === "class" || key2 === "style" || isReservedAttribute(key2)) {
          hash = data2;
        } else {
          var type = data2.attrs && data2.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key2) ? data2.domProps || (data2.domProps = {}) : data2.attrs || (data2.attrs = {});
        }
        var camelizedKey = camelize(key2);
        var hyphenatedKey = hyphenate(key2);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key2] = value[key2];
          if (isSync) {
            var on = data2.on || (data2.on = {});
            on["update:" + key2] = function($event) {
              value[key2] = $event;
            };
          }
        }
      };
      for (var key in value)
        loop(key);
    }
  }
  return data2;
}
function renderStatic(index2, isInFor) {
  var cached2 = this._staticTrees || (this._staticTrees = []);
  var tree = cached2[index2];
  if (tree && !isInFor) {
    return tree;
  }
  tree = cached2[index2] = this.$options.staticRenderFns[index2].call(
    this._renderProxy,
    null,
    this
    // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index2, false);
  return tree;
}
function markOnce(tree, index2, key) {
  markStatic(tree, "__once__" + index2 + (key ? "_" + key : ""), true);
  return tree;
}
function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== "string") {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}
function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
function bindObjectListeners(data2, value) {
  if (value) {
    if (!isPlainObject$2(value))
      ;
    else {
      var on = data2.on = data2.on ? extend$1({}, data2.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data2;
}
function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    res.$key = contentHashKey;
  }
  return res;
}
function bindDynamicKeys(baseObj, values2) {
  for (var i = 0; i < values2.length; i += 2) {
    var key = values2[i];
    if (typeof key === "string" && key) {
      baseObj[values2[i]] = values2[i + 1];
    }
  }
  return baseObj;
}
function prependModifier(value, symbol) {
  return typeof value === "string" ? symbol + value : value;
}
function installRenderHelpers(target2) {
  target2._o = markOnce;
  target2._n = toNumber;
  target2._s = toString;
  target2._l = renderList;
  target2._t = renderSlot;
  target2._q = looseEqual;
  target2._i = looseIndexOf;
  target2._m = renderStatic;
  target2._f = resolveFilter;
  target2._k = checkKeyCodes;
  target2._b = bindObjectProps;
  target2._v = createTextVNode;
  target2._e = createEmptyVNode;
  target2._u = resolveScopedSlots;
  target2._g = bindObjectListeners;
  target2._d = bindDynamicKeys;
  target2._p = prependModifier;
}
function FunctionalRenderContext(data2, props2, children, parent, Ctor) {
  var this$1$1 = this;
  var options2 = Ctor.options;
  var contextVm;
  if (hasOwn(parent, "_uid")) {
    contextVm = Object.create(parent);
    contextVm._original = parent;
  } else {
    contextVm = parent;
    parent = parent._original;
  }
  var isCompiled = isTrue(options2._compiled);
  var needNormalization = !isCompiled;
  this.data = data2;
  this.props = props2;
  this.children = children;
  this.parent = parent;
  this.listeners = data2.on || emptyObject;
  this.injections = resolveInject(options2.inject, parent);
  this.slots = function() {
    if (!this$1$1.$slots) {
      normalizeScopedSlots(
        data2.scopedSlots,
        this$1$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1$1.$slots;
  };
  Object.defineProperty(this, "scopedSlots", {
    enumerable: true,
    get: function get3() {
      return normalizeScopedSlots(data2.scopedSlots, this.slots());
    }
  });
  if (isCompiled) {
    this.$options = options2;
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data2.scopedSlots, this.$slots);
  }
  if (options2._scopeId) {
    this._c = function(a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options2._scopeId;
        vnode.fnContext = parent;
      }
      return vnode;
    };
  } else {
    this._c = function(a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}
installRenderHelpers(FunctionalRenderContext.prototype);
function createFunctionalComponent(Ctor, propsData, data2, contextVm, children) {
  var options2 = Ctor.options;
  var props2 = {};
  var propOptions = options2.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props2[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data2.attrs)) {
      mergeProps(props2, data2.attrs);
    }
    if (isDef(data2.props)) {
      mergeProps(props2, data2.props);
    }
  }
  var renderContext = new FunctionalRenderContext(
    data2,
    props2,
    children,
    contextVm,
    Ctor
  );
  var vnode = options2.render.call(null, renderContext._c, renderContext);
  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data2, renderContext.parent, options2);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data2, renderContext.parent, options2);
    }
    return res;
  }
}
function cloneAndMarkFunctionalResult(vnode, data2, contextVm, options2, renderContext) {
  var clone2 = cloneVNode(vnode);
  clone2.fnContext = contextVm;
  clone2.fnOptions = options2;
  if (data2.slot) {
    (clone2.data || (clone2.data = {})).slot = data2.slot;
  }
  return clone2;
}
function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      var mountedNode = vnode;
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : void 0, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options2 = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options2.propsData,
      // updated props
      options2.listeners,
      // updated listeners
      vnode,
      // new parent vnode
      options2.children
      // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, "mounted");
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(
          componentInstance,
          true
          /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(
          componentInstance,
          true
          /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);
function createComponent(Ctor, data2, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }
  var baseCtor = context.$options._base;
  if (isObject$9(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }
  if (typeof Ctor !== "function") {
    return;
  }
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === void 0) {
      return createAsyncPlaceholder(
        asyncFactory,
        data2,
        context,
        children,
        tag
      );
    }
  }
  data2 = data2 || {};
  resolveConstructorOptions(Ctor);
  if (isDef(data2.model)) {
    transformModel(Ctor.options, data2);
  }
  var propsData = extractPropsFromVNodeData(data2, Ctor);
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data2, context, children);
  }
  var listeners = data2.on;
  data2.on = data2.nativeOn;
  if (isTrue(Ctor.options.abstract)) {
    var slot = data2.slot;
    data2 = {};
    if (slot) {
      data2.slot = slot;
    }
  }
  installComponentHooks(data2);
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    "vue-component-" + Ctor.cid + (name ? "-" + name : ""),
    data2,
    void 0,
    void 0,
    void 0,
    context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  );
  return vnode;
}
function createComponentInstanceForVnode(vnode, parent) {
  var options2 = {
    _isComponent: true,
    _parentVnode: vnode,
    parent
  };
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options2.render = inlineTemplate.render;
    options2.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options2);
}
function installComponentHooks(data2) {
  var hooks2 = data2.hook || (data2.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks2[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks2[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}
function mergeHook$1(f1, f2) {
  var merged = function(a, b) {
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged;
}
function transformModel(options2, data2) {
  var prop = options2.model && options2.model.prop || "value";
  var event = options2.model && options2.model.event || "input";
  (data2.attrs || (data2.attrs = {}))[prop] = data2.model.value;
  var on = data2.on || (data2.on = {});
  var existing = on[event];
  var callback = data2.model.callback;
  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;
function createElement(context, tag, data2, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data2) || isPrimitive$1(data2)) {
    normalizationType = children;
    children = data2;
    data2 = void 0;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data2, children, normalizationType);
}
function _createElement(context, tag, data2, children, normalizationType) {
  if (isDef(data2) && isDef(data2.__ob__)) {
    return createEmptyVNode();
  }
  if (isDef(data2) && isDef(data2.is)) {
    tag = data2.is;
  }
  if (!tag) {
    return createEmptyVNode();
  }
  if (Array.isArray(children) && typeof children[0] === "function") {
    data2 = data2 || {};
    data2.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === "string") {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      vnode = new VNode(
        config.parsePlatformTagName(tag),
        data2,
        children,
        void 0,
        void 0,
        context
      );
    } else if ((!data2 || !data2.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
      vnode = createComponent(Ctor, data2, context, children, tag);
    } else {
      vnode = new VNode(
        tag,
        data2,
        children,
        void 0,
        void 0,
        context
      );
    }
  } else {
    vnode = createComponent(tag, data2, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }
    if (isDef(data2)) {
      registerDeepBindings(data2);
    }
    return vnode;
  } else {
    return createEmptyVNode();
  }
}
function applyNS(vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === "foreignObject") {
    ns = void 0;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
        applyNS(child, ns, force);
      }
    }
  }
}
function registerDeepBindings(data2) {
  if (isObject$9(data2.style)) {
    traverse(data2.style);
  }
  if (isObject$9(data2.class)) {
    traverse(data2.class);
  }
}
function initRender(vm) {
  vm._vnode = null;
  vm._staticTrees = null;
  var options2 = vm.$options;
  var parentVnode = vm.$vnode = options2._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options2._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  vm._c = function(a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  };
  vm.$createElement = function(a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  };
  var parentData = parentVnode && parentVnode.data;
  {
    defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, "$listeners", options2._parentListeners || emptyObject, null, true);
  }
}
var currentRenderingInstance = null;
function renderMixin(Vue2) {
  installRenderHelpers(Vue2.prototype);
  Vue2.prototype.$nextTick = function(fn) {
    return nextTick(fn, this);
  };
  Vue2.prototype._render = function() {
    var vm = this;
    var ref2 = vm.$options;
    var render9 = ref2.render;
    var _parentVnode = ref2._parentVnode;
    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }
    vm.$vnode = _parentVnode;
    var vnode;
    try {
      currentRenderingInstance = vm;
      vnode = render9.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    if (!(vnode instanceof VNode)) {
      vnode = createEmptyVNode();
    }
    vnode.parent = _parentVnode;
    return vnode;
  };
}
function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol$1 && comp[Symbol.toStringTag] === "Module") {
    comp = comp.default;
  }
  return isObject$9(comp) ? base.extend(comp) : comp;
}
function createAsyncPlaceholder(factory, data2, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data2, context, children, tag };
  return node;
}
function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }
  if (isDef(factory.resolved)) {
    return factory.resolved;
  }
  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    factory.owners.push(owner);
  }
  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }
  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on("hook:destroyed", function() {
      return remove(owners, owner);
    });
    var forceRender = function(renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }
      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };
    var resolve2 = once$1(function(res2) {
      factory.resolved = ensureCtor(res2, baseCtor);
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once$1(function(reason) {
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve2, reject);
    if (isObject$9(res)) {
      if (isPromise(res)) {
        if (isUndef(factory.resolved)) {
          res.then(resolve2, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve2, reject);
        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }
        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function() {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }
        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function() {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                null
              );
            }
          }, res.timeout);
        }
      }
    }
    sync = false;
    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
function initEvents(vm) {
  vm._events = /* @__PURE__ */ Object.create(null);
  vm._hasHookEvent = false;
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}
var target;
function add(event, fn) {
  target.$on(event, fn);
}
function remove$1(event, fn) {
  target.$off(event, fn);
}
function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}
function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = void 0;
}
function eventsMixin(Vue2) {
  var hookRE = /^hook:/;
  Vue2.prototype.$on = function(event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm;
  };
  Vue2.prototype.$once = function(event, fn) {
    var vm = this;
    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };
  Vue2.prototype.$off = function(event, fn) {
    var vm = this;
    if (!arguments.length) {
      vm._events = /* @__PURE__ */ Object.create(null);
      return vm;
    }
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm;
    }
    var cbs = vm._events[event];
    if (!cbs) {
      return vm;
    }
    if (!fn) {
      vm._events[event] = null;
      return vm;
    }
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }
    return vm;
  };
  Vue2.prototype.$emit = function(event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray$1(cbs) : cbs;
      var args = toArray$1(arguments, 1);
      var info = 'event handler for "' + event + '"';
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm;
  };
}
var activeInstance = null;
function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function() {
    activeInstance = prevActiveInstance;
  };
}
function initLifecycle(vm) {
  var options2 = vm.$options;
  var parent = options2.parent;
  if (parent && !options2.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }
  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}
function lifecycleMixin(Vue2) {
  Vue2.prototype._update = function(vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    if (!prevVnode) {
      vm.$el = vm.__patch__(
        vm.$el,
        vnode,
        hydrating,
        false
        /* removeOnly */
      );
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
  };
  Vue2.prototype.$forceUpdate = function() {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };
  Vue2.prototype.$destroy = function() {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, "beforeDestroy");
    vm._isBeingDestroyed = true;
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    vm._isDestroyed = true;
    vm.__patch__(vm._vnode, null);
    callHook(vm, "destroyed");
    vm.$off();
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}
function mountComponent(vm, el, hydrating) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
  }
  callHook(vm, "beforeMount");
  var updateComponent;
  {
    updateComponent = function() {
      vm._update(vm._render(), hydrating);
    };
  }
  new Watcher(
    vm,
    updateComponent,
    noop$1,
    {
      before: function before2() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, "beforeUpdate");
        }
      }
    },
    true
    /* isRenderWatcher */
  );
  hydrating = false;
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, "mounted");
  }
  return vm;
}
function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key);
  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode;
  if (vm._vnode) {
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props2 = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props;
      props2[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    vm.$options.propsData = propsData;
  }
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}
function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }
  return false;
}
function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, "activated");
  }
}
function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return;
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, "deactivated");
  }
}
function callHook(vm, hook) {
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit("hook:" + hook);
  }
  popTarget();
}
var queue = [];
var activatedChildren = [];
var has = {};
var waiting = false;
var flushing = false;
var index = 0;
function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  waiting = flushing = false;
}
var currentFlushTimestamp = 0;
var getNow = Date.now;
if (inBrowser$1 && !isIE$2) {
  var performance = window.performance;
  if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
    getNow = function() {
      return performance.now();
    };
  }
}
function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id2;
  queue.sort(function(a, b) {
    return a.id - b.id;
  });
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id2 = watcher.id;
    has[id2] = null;
    watcher.run();
  }
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState();
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);
  if (devtools && config.devtools) {
    devtools.emit("flush");
  }
}
function callUpdatedHooks(queue2) {
  var i = queue2.length;
  while (i--) {
    var watcher = queue2[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, "updated");
    }
  }
}
function queueActivatedComponent(vm) {
  vm._inactive = false;
  activatedChildren.push(vm);
}
function callActivatedHooks(queue2) {
  for (var i = 0; i < queue2.length; i++) {
    queue2[i]._inactive = true;
    activateChildComponent(
      queue2[i],
      true
      /* true */
    );
  }
}
function queueWatcher(watcher) {
  var id2 = watcher.id;
  if (has[id2] == null) {
    has[id2] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}
var uid$2 = 0;
var Watcher = function Watcher2(vm, expOrFn, cb, options2, isRenderWatcher) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  if (options2) {
    this.deep = !!options2.deep;
    this.user = !!options2.user;
    this.lazy = !!options2.lazy;
    this.sync = !!options2.sync;
    this.before = options2.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2;
  this.active = true;
  this.dirty = this.lazy;
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set$1();
  this.newDepIds = new _Set$1();
  this.expression = "";
  if (typeof expOrFn === "function") {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath$1(expOrFn);
    if (!this.getter) {
      this.getter = noop$1;
    }
  }
  this.value = this.lazy ? void 0 : this.get();
};
Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, 'getter for watcher "' + this.expression + '"');
    } else {
      throw e;
    }
  } finally {
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value;
};
Watcher.prototype.addDep = function addDep(dep) {
  var id2 = dep.id;
  if (!this.newDepIds.has(id2)) {
    this.newDepIds.add(id2);
    this.newDeps.push(dep);
    if (!this.depIds.has(id2)) {
      dep.addSub(this);
    }
  }
};
Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
Watcher.prototype.update = function update() {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();
    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject$9(value) || this.deep) {
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = 'callback for watcher "' + this.expression + '"';
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
Watcher.prototype.depend = function depend2() {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};
Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop$1,
  set: noop$1
};
function proxy(target2, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target2, key, sharedPropertyDefinition);
}
function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) {
    initProps(vm, opts.props);
  }
  if (opts.methods) {
    initMethods(vm, opts.methods);
  }
  if (opts.data) {
    initData(vm);
  } else {
    observe(
      vm._data = {},
      true
      /* asRootData */
    );
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}
function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props2 = vm._props = {};
  var keys2 = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function(key2) {
    keys2.push(key2);
    var value = validateProp(key2, propsOptions, propsData, vm);
    {
      defineReactive$$1(props2, key2, value);
    }
    if (!(key2 in vm)) {
      proxy(vm, "_props", key2);
    }
  };
  for (var key in propsOptions)
    loop(key);
  toggleObserving(true);
}
function initData(vm) {
  var data2 = vm.$options.data;
  data2 = vm._data = typeof data2 === "function" ? getData(data2, vm) : data2 || {};
  if (!isPlainObject$2(data2)) {
    data2 = {};
  }
  var keys2 = Object.keys(data2);
  var props2 = vm.$options.props;
  vm.$options.methods;
  var i = keys2.length;
  while (i--) {
    var key = keys2[i];
    if (props2 && hasOwn(props2, key))
      ;
    else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  observe(
    data2,
    true
    /* asRootData */
  );
}
function getData(data2, vm) {
  pushTarget();
  try {
    return data2.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}
var computedWatcherOptions = { lazy: true };
function initComputed(vm, computed) {
  var watchers = vm._computedWatchers = /* @__PURE__ */ Object.create(null);
  var isSSR = isServerRendering();
  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === "function" ? userDef : userDef.get;
    if (!isSSR) {
      watchers[key] = new Watcher(
        vm,
        getter || noop$1,
        noop$1,
        computedWatcherOptions
      );
    }
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}
function defineComputed(target2, key, userDef) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === "function") {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop$1;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop$1;
    sharedPropertyDefinition.set = userDef.set || noop$1;
  }
  Object.defineProperty(target2, key, sharedPropertyDefinition);
}
function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    }
  };
}
function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}
function initMethods(vm, methods) {
  vm.$options.props;
  for (var key in methods) {
    vm[key] = typeof methods[key] !== "function" ? noop$1 : bind$1(methods[key], vm);
  }
}
function initWatch(vm, watch) {
  for (var key in watch) {
    var handler2 = watch[key];
    if (Array.isArray(handler2)) {
      for (var i = 0; i < handler2.length; i++) {
        createWatcher(vm, key, handler2[i]);
      }
    } else {
      createWatcher(vm, key, handler2);
    }
  }
}
function createWatcher(vm, expOrFn, handler2, options2) {
  if (isPlainObject$2(handler2)) {
    options2 = handler2;
    handler2 = handler2.handler;
  }
  if (typeof handler2 === "string") {
    handler2 = vm[handler2];
  }
  return vm.$watch(expOrFn, handler2, options2);
}
function stateMixin(Vue2) {
  var dataDef = {};
  dataDef.get = function() {
    return this._data;
  };
  var propsDef = {};
  propsDef.get = function() {
    return this._props;
  };
  Object.defineProperty(Vue2.prototype, "$data", dataDef);
  Object.defineProperty(Vue2.prototype, "$props", propsDef);
  Vue2.prototype.$set = set;
  Vue2.prototype.$delete = del;
  Vue2.prototype.$watch = function(expOrFn, cb, options2) {
    var vm = this;
    if (isPlainObject$2(cb)) {
      return createWatcher(vm, expOrFn, cb, options2);
    }
    options2 = options2 || {};
    options2.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options2);
    if (options2.immediate) {
      var info = 'callback for immediate watcher "' + watcher.expression + '"';
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
var uid$3 = 0;
function initMixin(Vue2) {
  Vue2.prototype._init = function(options2) {
    var vm = this;
    vm._uid = uid$3++;
    vm._isVue = true;
    if (options2 && options2._isComponent) {
      initInternalComponent(vm, options2);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options2 || {},
        vm
      );
    }
    {
      vm._renderProxy = vm;
    }
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, "beforeCreate");
    initInjections(vm);
    initState(vm);
    initProvide(vm);
    callHook(vm, "created");
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}
function initInternalComponent(vm, options2) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  var parentVnode = options2._parentVnode;
  opts.parent = options2.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;
  if (options2.render) {
    opts.render = options2.render;
    opts.staticRenderFns = options2.staticRenderFns;
  }
}
function resolveConstructorOptions(Ctor) {
  var options2 = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      Ctor.superOptions = superOptions;
      var modifiedOptions = resolveModifiedOptions(Ctor);
      if (modifiedOptions) {
        extend$1(Ctor.extendOptions, modifiedOptions);
      }
      options2 = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options2.name) {
        options2.components[options2.name] = Ctor;
      }
    }
  }
  return options2;
}
function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }
      modified[key] = latest[key];
    }
  }
  return modified;
}
function Vue$1(options2) {
  this._init(options2);
}
initMixin(Vue$1);
stateMixin(Vue$1);
eventsMixin(Vue$1);
lifecycleMixin(Vue$1);
renderMixin(Vue$1);
function initUse(Vue2) {
  Vue2.use = function(plugin2) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin2) > -1) {
      return this;
    }
    var args = toArray$1(arguments, 1);
    args.unshift(this);
    if (typeof plugin2.install === "function") {
      plugin2.install.apply(plugin2, args);
    } else if (typeof plugin2 === "function") {
      plugin2.apply(null, args);
    }
    installedPlugins.push(plugin2);
    return this;
  };
}
function initMixin$1(Vue2) {
  Vue2.mixin = function(mixin2) {
    this.options = mergeOptions(this.options, mixin2);
    return this;
  };
}
function initExtend(Vue2) {
  Vue2.cid = 0;
  var cid = 1;
  Vue2.extend = function(extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }
    var name = extendOptions.name || Super.options.name;
    var Sub = function VueComponent(options2) {
      this._init(options2);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub["super"] = Super;
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;
    ASSET_TYPES.forEach(function(type) {
      Sub[type] = Super[type];
    });
    if (name) {
      Sub.options.components[name] = Sub;
    }
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend$1({}, Sub.options);
    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}
function initProps$1(Comp) {
  var props2 = Comp.options.props;
  for (var key in props2) {
    proxy(Comp.prototype, "_props", key);
  }
}
function initComputed$1(Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
function initAssetRegisters(Vue2) {
  ASSET_TYPES.forEach(function(type) {
    Vue2[type] = function(id2, definition) {
      if (!definition) {
        return this.options[type + "s"][id2];
      } else {
        if (type === "component" && isPlainObject$2(definition)) {
          definition.name = definition.name || id2;
          definition = this.options._base.extend(definition);
        }
        if (type === "directive" && typeof definition === "function") {
          definition = { bind: definition, update: definition };
        }
        this.options[type + "s"][id2] = definition;
        return definition;
      }
    };
  });
}
function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}
function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === "string") {
    return pattern.split(",").indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  return false;
}
function pruneCache(keepAliveInstance, filter2) {
  var cache = keepAliveInstance.cache;
  var keys2 = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter2(name)) {
        pruneCacheEntry(cache, key, keys2, _vnode);
      }
    }
  }
}
function pruneCacheEntry(cache, key, keys2, current) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys2, key);
}
var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: "keep-alive",
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function cacheVNode() {
      var ref2 = this;
      var cache = ref2.cache;
      var keys2 = ref2.keys;
      var vnodeToCache = ref2.vnodeToCache;
      var keyToCache = ref2.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag,
          componentInstance
        };
        keys2.push(keyToCache);
        if (this.max && keys2.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys2[0], keys2, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },
  created: function created() {
    this.cache = /* @__PURE__ */ Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1$1 = this;
    this.cacheVNode();
    this.$watch("include", function(val) {
      pruneCache(this$1$1, function(name) {
        return matches(val, name);
      });
    });
    this.$watch("exclude", function(val) {
      pruneCache(this$1$1, function(name) {
        return !matches(val, name);
      });
    });
  },
  updated: function updated() {
    this.cacheVNode();
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      var name = getComponentName(componentOptions);
      var ref2 = this;
      var include = ref2.include;
      var exclude = ref2.exclude;
      if (
        // not included
        include && (!name || !matches(include, name)) || // excluded
        exclude && name && matches(exclude, name)
      ) {
        return vnode;
      }
      var ref$1 = this;
      var cache = ref$1.cache;
      var keys2 = ref$1.keys;
      var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        remove(keys2, key);
        keys2.push(key);
      } else {
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }
      vnode.data.keepAlive = true;
    }
    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive
};
function initGlobalAPI(Vue2) {
  var configDef = {};
  configDef.get = function() {
    return config;
  };
  Object.defineProperty(Vue2, "config", configDef);
  Vue2.util = {
    warn: warn$1,
    extend: extend$1,
    mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue2.set = set;
  Vue2.delete = del;
  Vue2.nextTick = nextTick;
  Vue2.observable = function(obj2) {
    observe(obj2);
    return obj2;
  };
  Vue2.options = /* @__PURE__ */ Object.create(null);
  ASSET_TYPES.forEach(function(type) {
    Vue2.options[type + "s"] = /* @__PURE__ */ Object.create(null);
  });
  Vue2.options._base = Vue2;
  extend$1(Vue2.options.components, builtInComponents);
  initUse(Vue2);
  initMixin$1(Vue2);
  initExtend(Vue2);
  initAssetRegisters(Vue2);
}
initGlobalAPI(Vue$1);
Object.defineProperty(Vue$1.prototype, "$isServer", {
  get: isServerRendering
});
Object.defineProperty(Vue$1.prototype, "$ssrContext", {
  get: function get2() {
    return this.$vnode && this.$vnode.ssrContext;
  }
});
Object.defineProperty(Vue$1, "FunctionalRenderContext", {
  value: FunctionalRenderContext
});
Vue$1.version = "2.6.14";
var isReservedAttr = makeMap("style,class");
var acceptValue = makeMap("input,textarea,option,select,progress");
var mustUseProp = function(tag, type, attr) {
  return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
};
var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
var convertEnumeratedValue = function(key, value) {
  return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
};
var isBooleanAttr = makeMap(
  "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"
);
var xlinkNS = "http://www.w3.org/1999/xlink";
var isXlink = function(name) {
  return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
};
var getXlinkProp = function(name) {
  return isXlink(name) ? name.slice(6, name.length) : "";
};
var isFalsyAttrValue = function(val) {
  return val == null || val === false;
};
function genClassForVnode(vnode) {
  var data2 = vnode.data;
  var parentNode2 = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data2 = mergeClassData(childNode.data, data2);
    }
  }
  while (isDef(parentNode2 = parentNode2.parent)) {
    if (parentNode2 && parentNode2.data) {
      data2 = mergeClassData(data2, parentNode2.data);
    }
  }
  return renderClass(data2.staticClass, data2.class);
}
function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}
function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  return "";
}
function concat(a, b) {
  return a ? b ? a + " " + b : a : b || "";
}
function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }
  if (isObject$9(value)) {
    return stringifyObject(value);
  }
  if (typeof value === "string") {
    return value;
  }
  return "";
}
function stringifyArray(value) {
  var res = "";
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
      if (res) {
        res += " ";
      }
      res += stringified;
    }
  }
  return res;
}
function stringifyObject(value) {
  var res = "";
  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += " ";
      }
      res += key;
    }
  }
  return res;
}
var namespaceMap = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
};
var isHTMLTag = makeMap(
  "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
);
var isSVG = makeMap(
  "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
  true
);
var isReservedTag = function(tag) {
  return isHTMLTag(tag) || isSVG(tag);
};
function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return "svg";
  }
  if (tag === "math") {
    return "math";
  }
}
var unknownElementCache = /* @__PURE__ */ Object.create(null);
function isUnknownElement(tag) {
  if (!inBrowser$1) {
    return true;
  }
  if (isReservedTag(tag)) {
    return false;
  }
  tag = tag.toLowerCase();
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }
  var el = document.createElement(tag);
  if (tag.indexOf("-") > -1) {
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}
var isTextInputType = makeMap("text,number,password,search,email,tel,url");
function query(el) {
  if (typeof el === "string") {
    var selected = document.querySelector(el);
    if (!selected) {
      return document.createElement("div");
    }
    return selected;
  } else {
    return el;
  }
}
function createElement$1(tagName2, vnode) {
  var elm = document.createElement(tagName2);
  if (tagName2 !== "select") {
    return elm;
  }
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== void 0) {
    elm.setAttribute("multiple", "multiple");
  }
  return elm;
}
function createElementNS(namespace, tagName2) {
  return document.createElementNS(namespaceMap[namespace], tagName2);
}
function createTextNode(text) {
  return document.createTextNode(text);
}
function createComment(text) {
  return document.createComment(text);
}
function insertBefore(parentNode2, newNode, referenceNode) {
  parentNode2.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
  node.removeChild(child);
}
function appendChild(node, child) {
  node.appendChild(child);
}
function parentNode(node) {
  return node.parentNode;
}
function nextSibling(node) {
  return node.nextSibling;
}
function tagName(node) {
  return node.tagName;
}
function setTextContent(node, text) {
  node.textContent = text;
}
function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, "");
}
var nodeOps = /* @__PURE__ */ Object.freeze({
  createElement: createElement$1,
  createElementNS,
  createTextNode,
  createComment,
  insertBefore,
  removeChild,
  appendChild,
  parentNode,
  nextSibling,
  tagName,
  setTextContent,
  setStyleScope
});
var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update2(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy2(vnode) {
    registerRef(vnode, true);
  }
};
function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) {
    return;
  }
  var vm = vnode.context;
  var ref2 = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref2);
    } else if (refs[key] === ref2) {
      refs[key] = void 0;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref2];
      } else if (refs[key].indexOf(ref2) < 0) {
        refs[key].push(ref2);
      }
    } else {
      refs[key] = ref2;
    }
  }
}
var emptyNode = new VNode("", {}, []);
var hooks = ["create", "activate", "update", "remove", "destroy"];
function sameVnode(a, b) {
  return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
}
function sameInputType(a, b) {
  if (a.tag !== "input") {
    return true;
  }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map2 = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) {
      map2[key] = i;
    }
  }
  return map2;
}
function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules2 = backend.modules;
  var nodeOps2 = backend.nodeOps;
  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules2.length; ++j) {
      if (isDef(modules2[j][hooks[i]])) {
        cbs[hooks[i]].push(modules2[j][hooks[i]]);
      }
    }
  }
  function emptyNodeAt(elm) {
    return new VNode(nodeOps2.tagName(elm).toLowerCase(), {}, [], void 0, elm);
  }
  function createRmCb(childElm, listeners) {
    function remove$$12() {
      if (--remove$$12.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$12.listeners = listeners;
    return remove$$12;
  }
  function removeNode(el) {
    var parent = nodeOps2.parentNode(el);
    if (isDef(parent)) {
      nodeOps2.removeChild(parent, el);
    }
  }
  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index2) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      vnode = ownerArray[index2] = cloneVNode(vnode);
    }
    vnode.isRootInsert = !nested;
    if (createComponent2(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }
    var data2 = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      vnode.elm = vnode.ns ? nodeOps2.createElementNS(vnode.ns, tag) : nodeOps2.createElement(tag, vnode);
      setScope(vnode);
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data2)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert2(parentElm, vnode.elm, refElm);
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps2.createComment(vnode.text);
      insert2(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps2.createTextNode(vnode.text);
      insert2(parentElm, vnode.elm, refElm);
    }
  }
  function createComponent2(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i2 = vnode.data;
    if (isDef(i2)) {
      var isReactivated = isDef(vnode.componentInstance) && i2.keepAlive;
      if (isDef(i2 = i2.hook) && isDef(i2 = i2.init)) {
        i2(
          vnode,
          false
          /* hydrating */
        );
      }
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert2(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true;
      }
    }
  }
  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      registerRef(vnode);
      insertedVnodeQueue.push(vnode);
    }
  }
  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i2;
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i2 = innerNode.data) && isDef(i2 = i2.transition)) {
        for (i2 = 0; i2 < cbs.activate.length; ++i2) {
          cbs.activate[i2](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break;
      }
    }
    insert2(parentElm, vnode.elm, refElm);
  }
  function insert2(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps2.parentNode(ref$$1) === parent) {
          nodeOps2.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps2.appendChild(parent, elm);
      }
    }
  }
  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i2 = 0; i2 < children.length; ++i2) {
        createElm(children[i2], insertedVnodeQueue, vnode.elm, null, true, children, i2);
      }
    } else if (isPrimitive$1(vnode.text)) {
      nodeOps2.appendChild(vnode.elm, nodeOps2.createTextNode(String(vnode.text)));
    }
  }
  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
  }
  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook;
    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }
      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  }
  function setScope(vnode) {
    var i2;
    if (isDef(i2 = vnode.fnScopeId)) {
      nodeOps2.setStyleScope(vnode.elm, i2);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i2 = ancestor.context) && isDef(i2 = i2.$options._scopeId)) {
          nodeOps2.setStyleScope(vnode.elm, i2);
        }
        ancestor = ancestor.parent;
      }
    }
    if (isDef(i2 = activeInstance) && i2 !== vnode.context && i2 !== vnode.fnContext && isDef(i2 = i2.$options._scopeId)) {
      nodeOps2.setStyleScope(vnode.elm, i2);
    }
  }
  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }
  function invokeDestroyHook(vnode) {
    var i2, j2;
    var data2 = vnode.data;
    if (isDef(data2)) {
      if (isDef(i2 = data2.hook) && isDef(i2 = i2.destroy)) {
        i2(vnode);
      }
      for (i2 = 0; i2 < cbs.destroy.length; ++i2) {
        cbs.destroy[i2](vnode);
      }
    }
    if (isDef(i2 = vnode.children)) {
      for (j2 = 0; j2 < vnode.children.length; ++j2) {
        invokeDestroyHook(vnode.children[j2]);
      }
    }
  }
  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          removeNode(ch.elm);
        }
      }
    }
  }
  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i2;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        rm.listeners += listeners;
      } else {
        rm = createRmCb(vnode.elm, listeners);
      }
      if (isDef(i2 = vnode.componentInstance) && isDef(i2 = i2._vnode) && isDef(i2.data)) {
        removeAndInvokeRemoveHook(i2, rm);
      }
      for (i2 = 0; i2 < cbs.remove.length; ++i2) {
        cbs.remove[i2](vnode, rm);
      }
      if (isDef(i2 = vnode.data.hook) && isDef(i2 = i2.remove)) {
        i2(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }
  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
    var canMove = !removeOnly;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx];
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps2.insertBefore(parentElm, oldStartVnode.elm, nodeOps2.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps2.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) {
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = void 0;
            canMove && nodeOps2.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }
  function findIdxInOld(node, oldCh, start, end) {
    for (var i2 = start; i2 < end; i2++) {
      var c = oldCh[i2];
      if (isDef(c) && sameVnode(node, c)) {
        return i2;
      }
    }
  }
  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index2, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      vnode = ownerArray[index2] = cloneVNode(vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return;
    }
    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }
    var i2;
    var data2 = vnode.data;
    if (isDef(data2) && isDef(i2 = data2.hook) && isDef(i2 = i2.prepatch)) {
      i2(oldVnode, vnode);
    }
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data2) && isPatchable(vnode)) {
      for (i2 = 0; i2 < cbs.update.length; ++i2) {
        cbs.update[i2](oldVnode, vnode);
      }
      if (isDef(i2 = data2.hook) && isDef(i2 = i2.update)) {
        i2(oldVnode, vnode);
      }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) {
          nodeOps2.setTextContent(elm, "");
        }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps2.setTextContent(elm, "");
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps2.setTextContent(elm, vnode.text);
    }
    if (isDef(data2)) {
      if (isDef(i2 = data2.hook) && isDef(i2 = i2.postpatch)) {
        i2(oldVnode, vnode);
      }
    }
  }
  function invokeInsertHook(vnode, queue2, initial) {
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue2;
    } else {
      for (var i2 = 0; i2 < queue2.length; ++i2) {
        queue2[i2].data.hook.insert(queue2[i2]);
      }
    }
  }
  var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i2;
    var tag = vnode.tag;
    var data2 = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data2 && data2.pre;
    vnode.elm = elm;
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    }
    if (isDef(data2)) {
      if (isDef(i2 = data2.hook) && isDef(i2 = i2.init)) {
        i2(
          vnode,
          true
          /* hydrating */
        );
      }
      if (isDef(i2 = vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          if (isDef(i2 = data2) && isDef(i2 = i2.domProps) && isDef(i2 = i2.innerHTML)) {
            if (i2 !== elm.innerHTML) {
              return false;
            }
          } else {
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }
              childNode = childNode.nextSibling;
            }
            if (!childrenMatch || childNode) {
              return false;
            }
          }
        }
      }
      if (isDef(data2)) {
        var fullInvoke = false;
        for (var key in data2) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }
        if (!fullInvoke && data2["class"]) {
          traverse(data2["class"]);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true;
  }
  return function patch2(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }
      return;
    }
    var isInitialPatch = false;
    var insertedVnodeQueue = [];
    if (isUndef(oldVnode)) {
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            }
          }
          oldVnode = emptyNodeAt(oldVnode);
        }
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps2.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps2.nextSibling(oldElm)
        );
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i2 = 0; i2 < cbs.destroy.length; ++i2) {
              cbs.destroy[i2](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              var insert3 = ancestor.data.hook.insert;
              if (insert3.merged) {
                for (var i$2 = 1; i$2 < insert3.fns.length; i$2++) {
                  insert3.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }
    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};
function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}
function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      callHook$1(dir, "bind", vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, "update", vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }
  if (dirsWithInsert.length) {
    var callInsert = function() {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, "insert", callInsert);
    } else {
      callInsert();
    }
  }
  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, "postpatch", function() {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
      }
    });
  }
  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
      }
    }
  }
}
var emptyModifiers = /* @__PURE__ */ Object.create(null);
function normalizeDirectives$1(dirs, vm) {
  var res = /* @__PURE__ */ Object.create(null);
  if (!dirs) {
    return res;
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, "directives", dir.name);
  }
  return res;
}
function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
}
function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}
var baseModules = [
  ref,
  directives
];
function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs2 = vnode.data.attrs || {};
  if (isDef(attrs2.__ob__)) {
    attrs2 = vnode.data.attrs = extend$1({}, attrs2);
  }
  for (key in attrs2) {
    cur = attrs2[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  if ((isIE$2 || isEdge) && attrs2.value !== oldAttrs.value) {
    setAttr(elm, "value", attrs2.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs2[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}
function setAttr(el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf("-") > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}
function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    if (isIE$2 && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
      var blocker = function(e) {
        e.stopImmediatePropagation();
        el.removeEventListener("input", blocker);
      };
      el.addEventListener("input", blocker);
      el.__ieph = true;
    }
    el.setAttribute(key, value);
  }
}
var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data2 = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data2.staticClass) && isUndef(data2.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }
  var cls = genClassForVnode(vnode);
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }
  if (cls !== el._prevClass) {
    el.setAttribute("class", cls);
    el._prevClass = cls;
  }
}
var klass = {
  create: updateClass,
  update: updateClass
};
var RANGE_TOKEN = "__r";
var CHECKBOX_RADIO_TOKEN = "__c";
function normalizeEvents$1(on) {
  if (isDef(on[RANGE_TOKEN])) {
    var event = isIE$2 ? "change" : "input";
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}
var target$1;
function createOnceHandler$1(event, handler2, capture) {
  var _target = target$1;
  return function onceHandler() {
    var res = handler2.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
}
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
function add$1(name, handler2, capture, passive2) {
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler2;
    handler2 = original._wrapper = function(e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget || // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments);
      }
    };
  }
  target$1.addEventListener(
    name,
    handler2,
    supportsPassive$2 ? { capture, passive: passive2 } : capture
  );
}
function remove$2(name, handler2, capture, _target) {
  (_target || target$1).removeEventListener(
    name,
    handler2._wrapper || handler2,
    capture
  );
}
function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents$1(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = void 0;
}
var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
var svgContainer;
function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props2 = vnode.data.domProps || {};
  if (isDef(props2.__ob__)) {
    props2 = vnode.data.domProps = extend$1({}, props2);
  }
  for (key in oldProps) {
    if (!(key in props2)) {
      elm[key] = "";
    }
  }
  for (key in props2) {
    cur = props2[key];
    if (key === "textContent" || key === "innerHTML") {
      if (vnode.children) {
        vnode.children.length = 0;
      }
      if (cur === oldProps[key]) {
        continue;
      }
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }
    if (key === "value" && elm.tagName !== "PROGRESS") {
      elm._value = cur;
      var strCur = isUndef(cur) ? "" : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      svgContainer = svgContainer || document.createElement("div");
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      try {
        elm[key] = cur;
      } catch (e) {
      }
    }
  }
}
function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}
function isNotInFocusAndDirty(elm, checkVal) {
  var notInFocus = true;
  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {
  }
  return notInFocus && elm.value !== checkVal;
}
function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers2 = elm._vModifiers;
  if (isDef(modifiers2)) {
    if (modifiers2.number) {
      return toNumber(value) !== toNumber(newVal);
    }
    if (modifiers2.trim) {
      return value.trim() !== newVal.trim();
    }
  }
  return value !== newVal;
}
var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
var parseStyleText = cached(function(cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function(item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
});
function normalizeStyleData(data2) {
  var style2 = normalizeStyleBinding(data2.style);
  return data2.staticStyle ? extend$1(data2.staticStyle, style2) : style2;
}
function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }
  if (typeof bindingStyle === "string") {
    return parseStyleText(bindingStyle);
  }
  return bindingStyle;
}
function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;
  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend$1(res, styleData);
      }
    }
  }
  if (styleData = normalizeStyleData(vnode.data)) {
    extend$1(res, styleData);
  }
  var parentNode2 = vnode;
  while (parentNode2 = parentNode2.parent) {
    if (parentNode2.data && (styleData = normalizeStyleData(parentNode2.data))) {
      extend$1(res, styleData);
    }
  }
  return res;
}
var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function(el, name, val) {
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
  } else {
    var normalizedName = normalize$1(name);
    if (Array.isArray(val)) {
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};
var vendorNames = ["Webkit", "Moz", "ms"];
var emptyStyle;
var normalize$1 = cached(function(prop) {
  emptyStyle = emptyStyle || document.createElement("div").style;
  prop = camelize(prop);
  if (prop !== "filter" && prop in emptyStyle) {
    return prop;
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name;
    }
  }
});
function updateStyle(oldVnode, vnode) {
  var data2 = vnode.data;
  var oldData = oldVnode.data;
  if (isUndef(data2.staticStyle) && isUndef(data2.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }
  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style2 = normalizeStyleBinding(vnode.data.style) || {};
  vnode.data.normalizedStyle = isDef(style2.__ob__) ? extend$1({}, style2) : style2;
  var newStyle = getStyle(vnode, true);
  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, "");
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      setProp(el, name, cur == null ? "" : cur);
    }
  }
}
var style = {
  create: updateStyle,
  update: updateStyle
};
var whitespaceRE = /\s+/;
function addClass$1(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  if (el.classList) {
    if (cls.indexOf(" ") > -1) {
      cls.split(whitespaceRE).forEach(function(c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute("class") || "") + " ";
    if (cur.indexOf(" " + cls + " ") < 0) {
      el.setAttribute("class", (cur + cls).trim());
    }
  }
}
function removeClass$1(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  if (el.classList) {
    if (cls.indexOf(" ") > -1) {
      cls.split(whitespaceRE).forEach(function(c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute("class");
    }
  } else {
    var cur = " " + (el.getAttribute("class") || "") + " ";
    var tar = " " + cls + " ";
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, " ");
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute("class", cur);
    } else {
      el.removeAttribute("class");
    }
  }
}
function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  if (typeof def$$1 === "object") {
    var res = {};
    if (def$$1.css !== false) {
      extend$1(res, autoCssTransition(def$$1.name || "v"));
    }
    extend$1(res, def$$1);
    return res;
  } else if (typeof def$$1 === "string") {
    return autoCssTransition(def$$1);
  }
}
var autoCssTransition = cached(function(name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser$1 && !isIE9;
var TRANSITION = "transition";
var ANIMATION = "animation";
var transitionProp = "transition";
var transitionEndEvent = "transitionend";
var animationProp = "animation";
var animationEndEvent = "animationend";
if (hasTransition) {
  if (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0) {
    transitionProp = "WebkitTransition";
    transitionEndEvent = "webkitTransitionEnd";
  }
  if (window.onanimationend === void 0 && window.onwebkitanimationend !== void 0) {
    animationProp = "WebkitAnimation";
    animationEndEvent = "webkitAnimationEnd";
  }
}
var raf = inBrowser$1 ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
  /* istanbul ignore next */
  function(fn) {
    return fn();
  }
);
function nextFrame(fn) {
  raf(function() {
    raf(fn);
  });
}
function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass$1(el, cls);
  }
}
function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass$1(el, cls);
}
function whenTransitionEnds(el, expectedType, cb) {
  var ref2 = getTransitionInfo(el, expectedType);
  var type = ref2.type;
  var timeout = ref2.timeout;
  var propCount = ref2.propCount;
  if (!type) {
    return cb();
  }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function() {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function(e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function() {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}
var transformRE = /\b(transform|all)(,|$)/;
function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
  var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
  var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max.apply(null, durations.map(function(d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
}
function toMs(s) {
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function enter(vnode, toggleDisplay) {
  var el = vnode.elm;
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }
  var data2 = resolveTransition(vnode.data.transition);
  if (isUndef(data2)) {
    return;
  }
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }
  var css = data2.css;
  var type = data2.type;
  var enterClass = data2.enterClass;
  var enterToClass = data2.enterToClass;
  var enterActiveClass = data2.enterActiveClass;
  var appearClass = data2.appearClass;
  var appearToClass = data2.appearToClass;
  var appearActiveClass = data2.appearActiveClass;
  var beforeEnter = data2.beforeEnter;
  var enter2 = data2.enter;
  var afterEnter = data2.afterEnter;
  var enterCancelled = data2.enterCancelled;
  var beforeAppear = data2.beforeAppear;
  var appear = data2.appear;
  var afterAppear = data2.afterAppear;
  var appearCancelled = data2.appearCancelled;
  var duration = data2.duration;
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }
  var isAppear = !context._isMounted || !vnode.isRootInsert;
  if (isAppear && !appear && appear !== "") {
    return;
  }
  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === "function" ? appear : enter2 : enter2;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(
    isObject$9(duration) ? duration.enter : duration
  );
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once$1(function() {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });
  if (!vnode.data.show) {
    mergeVNodeHook(vnode, "insert", function() {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function() {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }
  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }
  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}
function leave(vnode, rm) {
  var el = vnode.elm;
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }
  var data2 = resolveTransition(vnode.data.transition);
  if (isUndef(data2) || el.nodeType !== 1) {
    return rm();
  }
  if (isDef(el._leaveCb)) {
    return;
  }
  var css = data2.css;
  var type = data2.type;
  var leaveClass = data2.leaveClass;
  var leaveToClass = data2.leaveToClass;
  var leaveActiveClass = data2.leaveActiveClass;
  var beforeLeave = data2.beforeLeave;
  var leave2 = data2.leave;
  var afterLeave = data2.afterLeave;
  var leaveCancelled = data2.leaveCancelled;
  var delayLeave = data2.delayLeave;
  var duration = data2.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave2);
  var explicitLeaveDuration = toNumber(
    isObject$9(duration) ? duration.leave : duration
  );
  var cb = el._leaveCb = once$1(function() {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });
  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }
  function performLeave() {
    if (cb.cancelled) {
      return;
    }
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function() {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave2 && leave2(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}
function isValidDuration(val) {
  return typeof val === "number" && !isNaN(val);
}
function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    return getHookArgumentsLength(
      Array.isArray(invokerFns) ? invokerFns[0] : invokerFns
    );
  } else {
    return (fn._length || fn.length) > 1;
  }
}
function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}
var transition = inBrowser$1 ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];
var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({ nodeOps, modules });
if (isIE9) {
  document.addEventListener("selectionchange", function() {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, "input");
    }
  });
}
var directive$2 = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === "select") {
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, "postpatch", function() {
          directive$2.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue$2);
    } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener("compositionstart", onCompositionStart);
        el.addEventListener("compositionend", onCompositionEnd);
        el.addEventListener("change", onCompositionEnd);
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === "select") {
      setSelected(el, binding, vnode.context);
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue$2);
      if (curOptions.some(function(o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        var needReset = el.multiple ? binding.value.some(function(v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, "change");
        }
      }
    }
  }
};
function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding);
  if (isIE$2 || isEdge) {
    setTimeout(function() {
      actuallySetSelected(el, binding);
    }, 0);
  }
}
function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    return;
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue$2(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue$2(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return;
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}
function hasNoMatchingOption(value, options2) {
  return options2.every(function(o) {
    return !looseEqual(o, value);
  });
}
function getValue$2(option) {
  return "_value" in option ? option._value : option.value;
}
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  if (!e.target.composing) {
    return;
  }
  e.target.composing = false;
  trigger(e.target, "input");
}
function trigger(el, type) {
  var e = document.createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}
var show = {
  bind: function bind(el, ref2, vnode) {
    var value = ref2.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function() {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : "none";
    }
  },
  update: function update3(el, ref2, vnode) {
    var value = ref2.value;
    var oldValue = ref2.oldValue;
    if (!value === !oldValue) {
      return;
    }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function() {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function() {
          el.style.display = "none";
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : "none";
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive$2,
  show
};
var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}
function extractTransitionData(comp) {
  var data2 = {};
  var options2 = comp.$options;
  for (var key in options2.propsData) {
    data2[key] = comp[key];
  }
  var listeners = options2._parentListeners;
  for (var key$1 in listeners) {
    data2[camelize(key$1)] = listeners[key$1];
  }
  return data2;
}
function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h("keep-alive", {
      props: rawChild.componentOptions.propsData
    });
  }
}
function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}
function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}
var isNotTextNode = function(c) {
  return c.tag || isAsyncPlaceholder(c);
};
var isVShowDirective = function(d) {
  return d.name === "show";
};
var Transition = {
  name: "transition",
  props: transitionProps,
  abstract: true,
  render: function render2(h) {
    var this$1$1 = this;
    var children = this.$slots.default;
    if (!children) {
      return;
    }
    children = children.filter(isNotTextNode);
    if (!children.length) {
      return;
    }
    var mode = this.mode;
    var rawChild = children[0];
    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    }
    var child = getRealChild(rawChild);
    if (!child) {
      return rawChild;
    }
    if (this._leaving) {
      return placeholder(h, rawChild);
    }
    var id2 = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id2 + "comment" : id2 + child.tag : isPrimitive$1(child.key) ? String(child.key).indexOf(id2) === 0 ? child.key : id2 + child.key : child.key;
    var data2 = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }
    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      var oldData = oldChild.data.transition = extend$1({}, data2);
      if (mode === "out-in") {
        this._leaving = true;
        mergeVNodeHook(oldData, "afterLeave", function() {
          this$1$1._leaving = false;
          this$1$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === "in-out") {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }
        var delayedLeave;
        var performLeave = function() {
          delayedLeave();
        };
        mergeVNodeHook(data2, "afterEnter", performLeave);
        mergeVNodeHook(data2, "enterCancelled", performLeave);
        mergeVNodeHook(oldData, "delayLeave", function(leave2) {
          delayedLeave = leave2;
        });
      }
    }
    return rawChild;
  }
};
var props = extend$1({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props,
  beforeMount: function beforeMount() {
    var this$1$1 = this;
    var update11 = this._update;
    this._update = function(vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1$1);
      this$1$1.__patch__(
        this$1$1._vnode,
        this$1$1.kept,
        false,
        // hydrating
        true
        // removeOnly (!important, avoids unnecessary moves)
      );
      this$1$1._vnode = this$1$1.kept;
      restoreActiveInstance();
      update11.call(this$1$1, vnode, hydrating);
    };
  },
  render: function render3(h) {
    var tag = this.tag || this.$vnode.data.tag || "span";
    var map2 = /* @__PURE__ */ Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);
    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
          children.push(c);
          map2[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        }
      }
    }
    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map2[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }
    return h(tag, null, children);
  },
  updated: function updated2() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || "v") + "-move";
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    }
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);
    this._reflow = document.body.offsetHeight;
    children.forEach(function(c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = "";
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      if (!hasTransition) {
        return false;
      }
      if (this._hasMove) {
        return this._hasMove;
      }
      var clone2 = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function(cls) {
          removeClass$1(clone2, cls);
        });
      }
      addClass$1(clone2, moveClass);
      clone2.style.display = "none";
      this.$el.appendChild(clone2);
      var info = getTransitionInfo(clone2);
      this.$el.removeChild(clone2);
      return this._hasMove = info.hasTransform;
    }
  }
};
function callPendingCbs(c) {
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}
function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}
function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = "0s";
  }
}
var platformComponents = {
  Transition,
  TransitionGroup
};
Vue$1.config.mustUseProp = mustUseProp;
Vue$1.config.isReservedTag = isReservedTag;
Vue$1.config.isReservedAttr = isReservedAttr;
Vue$1.config.getTagNamespace = getTagNamespace;
Vue$1.config.isUnknownElement = isUnknownElement;
extend$1(Vue$1.options.directives, platformDirectives);
extend$1(Vue$1.options.components, platformComponents);
Vue$1.prototype.__patch__ = inBrowser$1 ? patch : noop$1;
Vue$1.prototype.$mount = function(el, hydrating) {
  el = el && inBrowser$1 ? query(el) : void 0;
  return mountComponent(this, el, hydrating);
};
if (inBrowser$1) {
  setTimeout(function() {
    if (config.devtools) {
      if (devtools) {
        devtools.emit("init", Vue$1);
      }
    }
  }, 0);
}
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */
function _typeof$1(obj2) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function(obj3) {
      return typeof obj3;
    };
  } else {
    _typeof$1 = function(obj3) {
      return obj3 && typeof Symbol === "function" && obj3.constructor === Symbol && obj3 !== Symbol.prototype ? "symbol" : typeof obj3;
    };
  }
  return _typeof$1(obj2);
}
function _defineProperty$2(obj2, key, value) {
  if (key in obj2) {
    Object.defineProperty(obj2, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj2[key] = value;
  }
  return obj2;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  }
}
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
    return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function reflectionIsSupported() {
  return typeof Reflect !== "undefined" && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function(key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function(key) {
    forwardMetadata(to, from, key);
  });
}
function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function(metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);
    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}
var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function(target2, key, index2) {
    var Ctor = typeof target2 === "function" ? target2 : target2.constructor;
    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }
    if (typeof index2 !== "number") {
      index2 = void 0;
    }
    Ctor.__decorators__.push(function(options2) {
      return factory(options2, key, index2);
    });
  };
}
function isPrimitive(value) {
  var type = _typeof$1(value);
  return value == null || type !== "object" && type !== "function";
}
function collectDataFromConstructor(vm, Component2) {
  var originalInit = Component2.prototype._init;
  Component2.prototype._init = function() {
    var _this = this;
    var keys2 = Object.getOwnPropertyNames(vm);
    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys2.push(key);
        }
      }
    }
    keys2.forEach(function(key2) {
      Object.defineProperty(_this, key2, {
        get: function get3() {
          return vm[key2];
        },
        set: function set2(value) {
          vm[key2] = value;
        },
        configurable: true
      });
    });
  };
  var data2 = new Component2();
  Component2.prototype._init = originalInit;
  var plainData = {};
  Object.keys(data2).forEach(function(key) {
    if (data2[key] !== void 0) {
      plainData[key] = data2[key];
    }
  });
  return plainData;
}
var $internalHooks = [
  "data",
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeDestroy",
  "destroyed",
  "beforeUpdate",
  "updated",
  "activated",
  "deactivated",
  "render",
  "errorCaptured",
  "serverPrefetch"
  // 2.6
];
function componentFactory(Component2) {
  var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  options2.name = options2.name || Component2._componentTag || Component2.name;
  var proto = Component2.prototype;
  Object.getOwnPropertyNames(proto).forEach(function(key) {
    if (key === "constructor") {
      return;
    }
    if ($internalHooks.indexOf(key) > -1) {
      options2[key] = proto[key];
      return;
    }
    var descriptor = Object.getOwnPropertyDescriptor(proto, key);
    if (descriptor.value !== void 0) {
      if (typeof descriptor.value === "function") {
        (options2.methods || (options2.methods = {}))[key] = descriptor.value;
      } else {
        (options2.mixins || (options2.mixins = [])).push({
          data: function data2() {
            return _defineProperty$2({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      (options2.computed || (options2.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options2.mixins || (options2.mixins = [])).push({
    data: function data2() {
      return collectDataFromConstructor(this, Component2);
    }
  });
  var decorators = Component2.__decorators__;
  if (decorators) {
    decorators.forEach(function(fn) {
      return fn(options2);
    });
    delete Component2.__decorators__;
  }
  var superProto = Object.getPrototypeOf(Component2.prototype);
  var Super = superProto instanceof Vue$1 ? superProto.constructor : Vue$1;
  var Extended = Super.extend(options2);
  forwardStaticMembers(Extended, Component2, Super);
  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component2);
  }
  return Extended;
}
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
  Object.getOwnPropertyNames(Original).forEach(function(key) {
    if (shouldIgnore[key]) {
      return;
    }
    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }
    var descriptor = Object.getOwnPropertyDescriptor(Original, key);
    if (!hasProto) {
      if (key === "cid") {
        return;
      }
      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    }
    Object.defineProperty(Extended, key, descriptor);
  });
}
function Component(options2) {
  if (typeof options2 === "function") {
    return componentFactory(options2);
  }
  return function(Component2) {
    return componentFactory(Component2, options2);
  };
}
Component.registerHooks = function registerHooks(keys2) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys2));
};
var reflectMetadataIsSupported = typeof Reflect !== "undefined" && typeof Reflect.getMetadata !== "undefined";
function applyMetadata(options2, target2, key) {
  if (reflectMetadataIsSupported) {
    if (!Array.isArray(options2) && typeof options2 !== "function" && typeof options2.type === "undefined") {
      var type = Reflect.getMetadata("design:type", target2, key);
      if (type !== Object) {
        options2.type = type;
      }
    }
  }
}
function Prop(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  return function(target2, key) {
    applyMetadata(options2, target2, key);
    createDecorator(function(componentOptions, k) {
      (componentOptions.props || (componentOptions.props = {}))[k] = options2;
    })(target2, key);
  };
}
function Watch(path, options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var _a = options2.deep, deep = _a === void 0 ? false : _a, _b = options2.immediate, immediate = _b === void 0 ? false : _b;
  return createDecorator(function(componentOptions, handler2) {
    if (typeof componentOptions.watch !== "object") {
      componentOptions.watch = /* @__PURE__ */ Object.create(null);
    }
    var watch = componentOptions.watch;
    if (typeof watch[path] === "object" && !Array.isArray(watch[path])) {
      watch[path] = [watch[path]];
    } else if (typeof watch[path] === "undefined") {
      watch[path] = [];
    }
    watch[path].push({ handler: handler2, deep, immediate });
  });
}
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target2, key, result);
  return result;
};
let Toggle$1 = class Toggle extends Vue$1 {
  constructor() {
    super(...arguments);
    __publicField(this, "values");
    __publicField(this, "value");
    __publicField(this, "variation");
  }
  get toggleClass() {
    if (this.variation) {
      return `s-toggle--${this.variation}`;
    }
  }
};
__decorateClass$4([
  Prop()
], Toggle$1.prototype, "values", 2);
__decorateClass$4([
  Prop()
], Toggle$1.prototype, "value", 2);
__decorateClass$4([
  Prop()
], Toggle$1.prototype, "variation", 2);
Toggle$1 = __decorateClass$4([
  Component({
    filters: {
      capitalize(value) {
        if (!value)
          return "";
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  })
], Toggle$1);
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: ["s-toggle", _vm.toggleClass]
  }, _vm._l(_vm.values, function(val, key) {
    return _c("button", {
      key: val.id,
      class: ["s-toggle__option", {
        "s-toggle__option--active": _vm.value === key
      }],
      attrs: {
        "type": "button",
        "title": _vm._f("capitalize")(key)
      },
      domProps: {
        "innerHTML": _vm._s(val)
      },
      on: {
        "click": function($event) {
          return _vm.$emit("input", key);
        }
      }
    }, [_vm._v(" " + _vm._s(val) + " ")]);
  }), 0);
};
var staticRenderFns$4 = [];
const Toggle_vue_vue_type_style_index_0_lang = "";
function normalizeComponent$2(scriptExports, render9, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options2 = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render9) {
    options2.render = render9;
    options2.staticRenderFns = staticRenderFns2;
    options2._compiled = true;
  }
  if (functionalTemplate) {
    options2.functional = true;
  }
  if (scopeId) {
    options2._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options2._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options2.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options2.functional) {
      options2._injectStyles = hook;
      var originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options: options2
  };
}
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent$2(
  Toggle$1,
  render$4,
  staticRenderFns$4,
  false,
  __vue2_injectStyles$4,
  null,
  null,
  null
);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
const Toggle2 = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
const EventBus = new Vue$1();
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target2, key, result);
  return result;
};
let Icons = class extends Vue$1 {
  constructor() {
    super(...arguments);
    __publicField(this, "messages", []);
  }
  get visibleMessages() {
    const msgs = this.messages.filter((msg, idx) => idx < 5);
    msgs.forEach((msg) => {
      if (!msg.timerStarted) {
        msg.timerStarted = true;
        setTimeout(() => {
          const idx = this.messages.findIndex((message) => msg.id === message.id);
          this.messages.splice(idx, 1);
        }, 5e3);
      }
    });
    return msgs;
  }
  created() {
    EventBus.$on("copy-success", this.onCopySuccess);
    EventBus.$on("copy-error", this.onCopyError);
  }
  destroyed() {
    EventBus.$off("copy-success");
    EventBus.$off("copy-error");
  }
  onCopySuccess(e) {
    let msg = typeof e === "string" ? e : e.text;
    this.setCopyMsg({
      id: this.setCopyMsgId(),
      msg,
      status: "success",
      timerStarted: false
    });
  }
  onCopyError(e) {
    this.setCopyMsg({
      id: this.setCopyMsgId(),
      msg: "Failed to copy to clipboard",
      status: "error",
      timerStarted: false
    });
  }
  setCopyMsgId() {
    return Math.ceil(Math.random() * 1e4);
  }
  setCopyMsg({ id: id2, msg, status, timerStarted }) {
    const message = { id: id2, msg, status, timerStarted };
    this.messages.push(message);
  }
};
Icons = __decorateClass$3([
  Component({})
], Icons);
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("transition-group", {
    staticClass: "notifications",
    attrs: {
      "name": "fadeX-from-right",
      "tag": "div"
    }
  }, _vm._l(_vm.visibleMessages, function(_ref) {
    var id2 = _ref.id, msg = _ref.msg, status = _ref.status;
    return _c("div", {
      key: `msg-${id2}`,
      staticClass: "notification-msg",
      class: {
        "notification-msg--error": status === "error"
      }
    }, [_vm._v(" " + _vm._s(msg) + " ")]);
  }), 0)], 1);
};
var staticRenderFns$3 = [];
const CopyNotification_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent$2(
  Icons,
  render$3,
  staticRenderFns$3,
  false,
  __vue2_injectStyles$3,
  "9a397180",
  null,
  null
);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
const CopyNotification = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/beaker/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const demos = /* @__PURE__ */ Object.assign({ "./Accordions.vue": () => __vitePreload(() => import("./Accordions-24c2c264.js"), true ? ["assets/Accordions-24c2c264.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-d8bdef32.js","assets/DemoSection-25a80090.css","assets/Accordions-959ce5b6.css"] : void 0), "./Announcements.vue": () => __vitePreload(() => import("./Announcements-23ab25c0.js"), true ? ["assets/Announcements-23ab25c0.js","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/vue-mq.es-228d853f.js","assets/index-213b3b83.js","assets/Announcements-f0f44fa4.css"] : void 0), "./Assets.vue": () => __vitePreload(() => import("./Assets-f4bee681.js"), true ? ["assets/Assets-f4bee681.js","assets/logo-8a0a8934.js","assets/Assets-92040f63.css"] : void 0), "./Badges.vue": () => __vitePreload(() => import("./Badges-e4a941e2.js"), true ? ["assets/Badges-e4a941e2.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/Badge-2f139b6a.js","assets/Badge-953e10dc.css","assets/Callout-1ea6582d.js","assets/Callout-00a8d2d9.css","assets/DemoSection-d8bdef32.js","assets/DemoSection-25a80090.css","assets/Badges-af51f001.css"] : void 0), "./Banners.vue": () => __vitePreload(() => import("./Banners-eaee77a2.js"), true ? ["assets/Banners-eaee77a2.js","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/Banners-fd4b8c17.css"] : void 0), "./Buttons.vue": () => __vitePreload(() => import("./Buttons-06c72025.js"), true ? ["assets/Buttons-06c72025.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/DemoSection-d8bdef32.js","assets/DemoSection-25a80090.css","assets/Buttons-20626ca3.css"] : void 0), "./Calendars.vue": () => __vitePreload(() => import("./Calendars-eda45789.js"), true ? ["assets/Calendars-eda45789.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/PaneDropdown-1ff494dd.js","assets/vue-focus.common-28b20e5f.js","assets/PaneDropdown-fea89d79.css","assets/Calendars-216f2a1a.css"] : void 0), "./CallToActions.vue": () => __vitePreload(() => import("./CallToActions-289b960e.js"), true ? ["assets/CallToActions-289b960e.js","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/vue-mq.es-228d853f.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/logo-8a0a8934.js","assets/CallToActions-2dd34f77.css"] : void 0), "./Callouts.vue": () => __vitePreload(() => import("./Callouts-57b2dfd1.js"), true ? ["assets/Callouts-57b2dfd1.js","assets/Callout-1ea6582d.js","assets/Badge-2f139b6a.js","assets/Badge-953e10dc.css","assets/Callout-00a8d2d9.css","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css"] : void 0), "./ColorPickers.vue": () => __vitePreload(() => import("./ColorPickers-49868079.js"), true ? ["assets/ColorPickers-49868079.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/ColorPickers-45624716.css"] : void 0), "./Colors.vue": () => __vitePreload(() => import("./Colors-40531c34.js"), true ? ["assets/Colors-40531c34.js","assets/Colors-b6b7ba6e.css"] : void 0), "./CreatorSites.vue": () => __vitePreload(() => import("./CreatorSites-368a1fbf.js"), true ? ["assets/CreatorSites-368a1fbf.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-d8bdef32.js","assets/DemoSection-25a80090.css","assets/SSProSimulator-25ae21d0.js","assets/SSProSimulator-127727b5.css","assets/CreatorSites-2e3dc152.css"] : void 0), "./EmptySections.vue": () => __vitePreload(() => import("./EmptySections-668dcd46.js"), true ? ["assets/EmptySections-668dcd46.js","assets/EmptySection-2a9711f8.js","assets/EmptySection-021ef966.css","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css"] : void 0), "./Extras.vue": () => __vitePreload(() => import("./Extras-0a96a709.js"), true ? ["assets/Extras-0a96a709.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/Extras-08117fea.css"] : void 0), "./Forms.vue": () => __vitePreload(() => import("./Forms-b87ccdad.js"), true ? ["assets/Forms-b87ccdad.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/FormGroup-a1ca8cc5.js","assets/FormGroup-e374f358.css","assets/Selector-5d96266a.js","assets/Selector-4aa6935a.css","assets/TextInput-2ccb4081.js","assets/_baseClone-bc178edd.js","assets/TextInput-abc2fd36.css","assets/Forms-63cb73ba.css"] : void 0), "./Guards.vue": () => __vitePreload(() => import("./Guards-922ac8ef.js"), true ? ["assets/Guards-922ac8ef.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/TextInput-2ccb4081.js","assets/_baseClone-bc178edd.js","assets/TextInput-abc2fd36.css","assets/Guards-23c2afa5.css"] : void 0), "./Icons.vue": () => __vitePreload(() => import("./Icons-972212ef.js"), true ? ["assets/Icons-972212ef.js","assets/Icons-0ca18d11.css"] : void 0), "./Inputs.vue": () => __vitePreload(() => import("./Inputs-c5c83f4e.js"), true ? ["assets/Inputs-c5c83f4e.js","assets/Selector-5d96266a.js","assets/Selector-4aa6935a.css","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/FormGroup-a1ca8cc5.js","assets/FormGroup-e374f358.css","assets/ResizeObserver.es-25312764.js","assets/TextInput-2ccb4081.js","assets/_baseClone-bc178edd.js","assets/TextInput-abc2fd36.css","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/fuse.esm-aec42c40.js","assets/Inputs-7513eeae.css"] : void 0), "./Installation.vue": () => __vitePreload(() => import("./Installation-248fa967.js"), true ? [] : void 0), "./Layouts.vue": () => __vitePreload(() => import("./Layouts-14e02f09.js"), true ? ["assets/Layouts-14e02f09.js","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/vue-mq.es-228d853f.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/Layouts-977e6348.css"] : void 0), "./LeftNavigation.vue": () => __vitePreload(() => Promise.resolve().then(() => LeftNavigation$1), true ? void 0 : void 0), "./Loaders.vue": () => __vitePreload(() => import("./Loaders-198d9444.js"), true ? ["assets/Loaders-198d9444.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/DemoSection-d8bdef32.js","assets/DemoSection-25a80090.css","assets/Spinner-e272b66e.js","assets/Spinner-3b9a3285.css","assets/Loaders-4ab96410.css"] : void 0), "./MediaPickers.vue": () => __vitePreload(() => import("./MediaPickers-662caa03.js"), true ? ["assets/MediaPickers-662caa03.js","assets/FormGroup-a1ca8cc5.js","assets/FormGroup-e374f358.css","assets/vue-focus.common-28b20e5f.js","assets/ResizeObserver.es-25312764.js","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/MediaPickers-aba7a67d.css"] : void 0), "./Modals.vue": () => __vitePreload(() => import("./Modals-0bff43ec.js"), true ? ["assets/Modals-0bff43ec.js","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/ModalComp-0ba07c9c.js","assets/Badge-2f139b6a.js","assets/Badge-953e10dc.css","assets/Spinner-e272b66e.js","assets/Spinner-3b9a3285.css","assets/index-213b3b83.js","assets/ModalComp-73401248.css"] : void 0), "./Navigations.vue": () => __vitePreload(() => import("./Navigations-fe65dbbb.js"), true ? ["assets/Navigations-fe65dbbb.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/ScrollNav-9b449aba.js","assets/ScrollNav-c83ab99c.css"] : void 0), "./Notices.vue": () => __vitePreload(() => import("./Notices-89f6988b.js"), true ? ["assets/Notices-89f6988b.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/Notices-e047cf32.css"] : void 0), "./Onboardings.vue": () => __vitePreload(() => import("./Onboardings-006aae9b.js"), true ? ["assets/Onboardings-006aae9b.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/SSProSimulator-25ae21d0.js","assets/SSProSimulator-127727b5.css","assets/Onboardings-68d42318.css"] : void 0), "./Paginations.vue": () => __vitePreload(() => import("./Paginations-d20b8ad8.js"), true ? ["assets/Paginations-d20b8ad8.js","assets/ResizeObserver.es-25312764.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/Paginations-295b7afc.css"] : void 0), "./PaneDropdowns.vue": () => __vitePreload(() => import("./PaneDropdowns-0ecfc452.js"), true ? ["assets/PaneDropdowns-0ecfc452.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/PaneDropdown-1ff494dd.js","assets/vue-focus.common-28b20e5f.js","assets/PaneDropdown-fea89d79.css"] : void 0), "./Prime.vue": () => __vitePreload(() => import("./Prime-4e8cc763.js"), true ? ["assets/Prime-4e8cc763.js","assets/Badge-2f139b6a.js","assets/Badge-953e10dc.css","assets/Button-8b9ecd72.js","assets/Button-c5bac8a6.css","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/ModalComp-0ba07c9c.js","assets/Spinner-e272b66e.js","assets/Spinner-3b9a3285.css","assets/index-213b3b83.js","assets/ModalComp-73401248.css","assets/EmptySection-2a9711f8.js","assets/EmptySection-021ef966.css","assets/Prime-14f28d77.css"] : void 0), "./ProgressBars.vue": () => __vitePreload(() => import("./ProgressBars-736d46ab.js"), true ? ["assets/ProgressBars-736d46ab.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/ProgressBars-12079be1.css"] : void 0), "./SiteSearchDemo.vue": () => __vitePreload(() => import("./SiteSearchDemo-8a9412a5.js"), true ? ["assets/SiteSearchDemo-8a9412a5.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-d8bdef32.js","assets/DemoSection-25a80090.css","assets/fuse.esm-aec42c40.js","assets/SiteSearchDemo-a2a5b256.css"] : void 0), "./Sliders.vue": () => __vitePreload(() => import("./Sliders-d4de247d.js"), true ? ["assets/Sliders-d4de247d.js","assets/ResizeObserver.es-25312764.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-d8bdef32.js","assets/DemoSection-25a80090.css","assets/Sliders-ad288ec3.css"] : void 0), "./Steps.vue": () => __vitePreload(() => import("./Steps-10f7cdb8.js"), true ? ["assets/Steps-10f7cdb8.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/FormGroup-a1ca8cc5.js","assets/FormGroup-e374f358.css","assets/Badge-2f139b6a.js","assets/Badge-953e10dc.css","assets/Steps-1f3dfd29.css"] : void 0), "./Tables.vue": () => __vitePreload(() => import("./Tables-015fc679.js"), true ? [] : void 0), "./Tabs.vue": () => __vitePreload(() => import("./Tabs-f1c3aef0.js"), true ? ["assets/Tabs-f1c3aef0.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/ScrollNav-9b449aba.js","assets/ScrollNav-c83ab99c.css","assets/ResizeObserver.es-25312764.js","assets/PaneDropdown-1ff494dd.js","assets/vue-focus.common-28b20e5f.js","assets/PaneDropdown-fea89d79.css","assets/_baseClone-bc178edd.js","assets/Tabs-c82d20f5.css"] : void 0), "./Toggles.vue": () => __vitePreload(() => import("./Toggles-2952acd7.js"), true ? ["assets/Toggles-2952acd7.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css"] : void 0), "./TransitionsDemo.vue": () => __vitePreload(() => import("./TransitionsDemo-f6f92d0f.js"), true ? ["assets/TransitionsDemo-f6f92d0f.js","assets/TransitionsDemo-18e46bc0.css"] : void 0), "./Typography.vue": () => __vitePreload(() => import("./Typography-60e6382e.js"), true ? ["assets/Typography-60e6382e.js","assets/FormGroup-a1ca8cc5.js","assets/FormGroup-e374f358.css","assets/Typography-e16997fc.css"] : void 0), "./VirtualItems.vue": () => __vitePreload(() => import("./VirtualItems-52d1d7ed.js"), true ? ["assets/VirtualItems-52d1d7ed.js","assets/DemoSection-d8bdef32.js","assets/Accordion-7aa9b24d.js","assets/Accordion-47a5597f.css","assets/DemoSection-25a80090.css","assets/VirtualItems-6d9acfe8.css"] : void 0) });
const components = Object.keys(demos).map((key) => {
  const componentName = key.slice(2, -4);
  const label = componentName.split(/(?=[A-Z])/).join(" ");
  const name = label.replace(/ /g, "-").toLowerCase();
  const component = demos[key];
  return {
    component,
    name,
    componentName,
    label
  };
});
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target2, key, result);
  return result;
};
const excludeFromComponentDemos = [
  "assets",
  "colors",
  "installation",
  "left-navigation",
  "navigations",
  "icons",
  "typography"
];
let LeftNavigation$2 = class LeftNavigation extends Vue$1 {
  constructor() {
    super(...arguments);
    __publicField(this, "componentDemos", components.filter(
      ({ name }) => !excludeFromComponentDemos.includes(name)
    ));
    __publicField(this, "activeSection");
  }
  changeSection(activeSection) {
    this.$emit("update-section", activeSection);
  }
};
__decorateClass$2([
  Prop()
], LeftNavigation$2.prototype, "activeSection", 2);
LeftNavigation$2 = __decorateClass$2([
  Component({})
], LeftNavigation$2);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "left-navigation"
  }, [_c("div", {
    staticClass: "left-navigation-section"
  }, [_c("h4", [_vm._v("Essentials")]), _c("router-link", {
    attrs: {
      "to": "installation"
    }
  }, [_vm._v("Installation")]), _c("router-link", {
    attrs: {
      "to": "assets"
    }
  }, [_vm._v("Assets")]), _c("router-link", {
    attrs: {
      "to": "colors"
    }
  }, [_vm._v("Colors")]), _c("router-link", {
    attrs: {
      "to": "icons"
    }
  }, [_vm._v("Icons")]), _c("router-link", {
    attrs: {
      "to": "typography"
    }
  }, [_vm._v("Typography")])], 1), _c("div", {
    staticClass: "left-navigation-section"
  }, [_c("h4", [_vm._v("Components")]), _vm._l(_vm.componentDemos, function(_ref) {
    var name = _ref.name, label = _ref.label;
    return [_c("router-link", {
      key: name,
      attrs: {
        "to": name
      }
    }, [_vm._v(_vm._s(label))])];
  })], 2)]);
};
var staticRenderFns$2 = [];
const LeftNavigation_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent$2(
  LeftNavigation$2,
  render$2,
  staticRenderFns$2,
  false,
  __vue2_injectStyles$2,
  "518eaceb",
  null,
  null
);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
const LeftNavigation2 = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
const LeftNavigation$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LeftNavigation2
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target2, key, result);
  return result;
};
let Documentation$1 = class Documentation extends Vue$1 {
  constructor() {
    super(...arguments);
    __publicField(this, "activeSection", "installation");
  }
  changeSection(activeSection) {
    this.activeSection = activeSection;
  }
};
Documentation$1 = __decorateClass$1([
  Component({
    components: {
      CopyNotification,
      LeftNavigation: LeftNavigation2
    }
  })
], Documentation$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "documentation"
  }, [_c("left-navigation", {
    attrs: {
      "active-section": _vm.activeSection
    },
    on: {
      "update-section": _vm.changeSection
    }
  }), _c("div", {
    staticClass: "content"
  }, [_c("router-view")], 1), _c("copy-notification")], 1);
};
var staticRenderFns$1 = [];
const Documentation_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent$2(
  Documentation$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  null,
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
const Documentation2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target2, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target2, key) : target2;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target2, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target2, key, result);
  return result;
};
let App$1 = class App extends Vue$1 {
  constructor() {
    super(...arguments);
    __publicField(this, "appClass", "app-wrapper");
    __publicField(this, "nightClasses", ["night", "night-theme"]);
    __publicField(this, "theme", "night");
    __publicField(this, "themes", {
      day: "Day",
      night: "Night"
    });
  }
  get isNightTheme() {
    return this.theme === "night";
  }
};
App$1 = __decorateClass([
  Component({
    components: {
      Toggle: Toggle2,
      Documentation: Documentation2
    }
  })
], App$1);
const __$_require_34879f5f__ = "/beaker/assets/beaker-full-night-6e36257e.svg";
const __$_require_ad3111ec__ = "/beaker/assets/beaker-full-f2a782b4.svg";
const __$_require_bbcc9ef8__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=";
const __$_require_9b5255be__ = "/beaker/assets/npm-f437ab34.svg";
var render4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: [_vm.isNightTheme ? _vm.nightClasses : "", _vm.appClass],
    attrs: {
      "id": "app"
    }
  }, [_c("div", {
    attrs: {
      "id": "nav"
    }
  }, [_c("div", {
    staticClass: "logo"
  }, [_vm.isNightTheme ? _c("img", {
    attrs: {
      "src": __$_require_34879f5f__
    }
  }) : _c("img", {
    attrs: {
      "src": __$_require_ad3111ec__
    }
  })]), _c("toggle", {
    attrs: {
      "values": _vm.themes
    },
    model: {
      value: _vm.theme,
      callback: function($$v) {
        _vm.theme = $$v;
      },
      expression: "theme"
    }
  })], 1), _c("documentation"), _vm._m(0)], 1);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "floating-links"
  }, [_c("a", {
    staticClass: "floating-link",
    attrs: {
      "target": "_blank",
      "href": "https://github.com/mbiemiller/beaker"
    }
  }, [_c("img", {
    attrs: {
      "src": __$_require_bbcc9ef8__
    }
  })]), _c("a", {
    staticClass: "floating-link",
    attrs: {
      "target": "_blank",
      "href": "https://www.npmjs.com/package/streamlabs-beaker"
    }
  }, [_c("img", {
    attrs: {
      "src": __$_require_9b5255be__
    }
  })])]);
}];
const App_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent$2(
  App$1,
  render4,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  null,
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const App2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */
function extend(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function(c) {
  return "%" + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;
var encode = function(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ",");
};
function decode(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
  }
  return str;
}
function resolveQuery(query2, extraQuery, _parseQuery) {
  if (extraQuery === void 0)
    extraQuery = {};
  var parse2 = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse2(query2 || "");
  } catch (e) {
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value) ? value.map(castQueryParamValue) : castQueryParamValue(value);
  }
  return parsedQuery;
}
var castQueryParamValue = function(value) {
  return value == null || typeof value === "object" ? value : String(value);
};
function parseQuery(query2) {
  var res = {};
  query2 = query2.trim().replace(/^(\?|#|&)/, "");
  if (!query2) {
    return res;
  }
  query2.split("&").forEach(function(param) {
    var parts = param.replace(/\+/g, " ").split("=");
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join("=")) : null;
    if (res[key] === void 0) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });
  return res;
}
function stringifyQuery(obj2) {
  var res = obj2 ? Object.keys(obj2).map(function(key) {
    var val = obj2[key];
    if (val === void 0) {
      return "";
    }
    if (val === null) {
      return encode(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function(val2) {
        if (val2 === void 0) {
          return;
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + "=" + encode(val2));
        }
      });
      return result.join("&");
    }
    return encode(key) + "=" + encode(val);
  }).filter(function(x) {
    return x.length > 0;
  }).join("&") : null;
  return res ? "?" + res : "";
}
var trailingSlashRE = /\/?$/;
function createRoute(record, location, redirectedFrom, router2) {
  var stringifyQuery2 = router2 && router2.options.stringifyQuery;
  var query2 = location.query || {};
  try {
    query2 = clone(query2);
  } catch (e) {
  }
  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || "/",
    hash: location.hash || "",
    query: query2,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery2),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery2);
  }
  return Object.freeze(route);
}
function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && typeof value === "object") {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res;
  } else {
    return value;
  }
}
var START = createRoute(null, {
  path: "/"
});
function formatMatch(record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res;
}
function getFullPath(ref2, _stringifyQuery) {
  var path = ref2.path;
  var query2 = ref2.query;
  if (query2 === void 0)
    query2 = {};
  var hash = ref2.hash;
  if (hash === void 0)
    hash = "";
  var stringify = _stringifyQuery || stringifyQuery;
  return (path || "/") + stringify(query2) + hash;
}
function isSameRoute(a, b, onlyPath) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, "") === b.path.replace(trailingSlashRE, "") && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query));
  } else if (a.name && b.name) {
    return a.name === b.name && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params));
  } else {
    return false;
  }
}
function isObjectEqual(a, b) {
  if (a === void 0)
    a = {};
  if (b === void 0)
    b = {};
  if (!a || !b) {
    return a === b;
  }
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  return aKeys.every(function(key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];
    if (bKey !== key) {
      return false;
    }
    var bVal = b[key];
    if (aVal == null || bVal == null) {
      return aVal === bVal;
    }
    if (typeof aVal === "object" && typeof bVal === "object") {
      return isObjectEqual(aVal, bVal);
    }
    return String(aVal) === String(bVal);
  });
}
function isIncludedRoute(current, target2) {
  return current.path.replace(trailingSlashRE, "/").indexOf(
    target2.path.replace(trailingSlashRE, "/")
  ) === 0 && (!target2.hash || current.hash === target2.hash) && queryIncludes(current.query, target2.query);
}
function queryIncludes(current, target2) {
  for (var key in target2) {
    if (!(key in current)) {
      return false;
    }
  }
  return true;
}
function handleRouteEntered(route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];
    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];
      if (!instance || !cbs) {
        continue;
      }
      delete record.enteredCbs[name];
      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) {
          cbs[i$1](instance);
        }
      }
    }
  }
}
var View = {
  name: "RouterView",
  functional: true,
  props: {
    name: {
      type: String,
      default: "default"
    }
  },
  render: function render5(_, ref2) {
    var props2 = ref2.props;
    var children = ref2.children;
    var parent = ref2.parent;
    var data2 = ref2.data;
    data2.routerView = true;
    var h = parent.$createElement;
    var name = props2.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data2.routerViewDepth = depth;
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data2, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data2, children);
      } else {
        return h();
      }
    }
    var matched = route.matched[depth];
    var component = matched && matched.components[name];
    if (!matched || !component) {
      cache[name] = null;
      return h();
    }
    cache[name] = { component };
    data2.registerRouteInstance = function(vm, val) {
      var current = matched.instances[name];
      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    };
    (data2.hook || (data2.hook = {})).prepatch = function(_2, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };
    data2.hook.init = function(vnode) {
      if (vnode.data.keepAlive && vnode.componentInstance && vnode.componentInstance !== matched.instances[name]) {
        matched.instances[name] = vnode.componentInstance;
      }
      handleRouteEntered(route);
    };
    var configProps = matched.props && matched.props[name];
    if (configProps) {
      extend(cache[name], {
        route,
        configProps
      });
      fillPropsinData(component, data2, route, configProps);
    }
    return h(component, data2, children);
  }
};
function fillPropsinData(component, data2, route, configProps) {
  var propsToPass = data2.props = resolveProps(route, configProps);
  if (propsToPass) {
    propsToPass = data2.props = extend({}, propsToPass);
    var attrs2 = data2.attrs = data2.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs2[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}
function resolveProps(route, config2) {
  switch (typeof config2) {
    case "undefined":
      return;
    case "object":
      return config2;
    case "function":
      return config2(route);
    case "boolean":
      return config2 ? route.params : void 0;
  }
}
function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);
  if (firstChar === "/") {
    return relative;
  }
  if (firstChar === "?" || firstChar === "#") {
    return base + relative;
  }
  var stack = base.split("/");
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }
  var segments = relative.replace(/^\//, "").split("/");
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === "..") {
      stack.pop();
    } else if (segment !== ".") {
      stack.push(segment);
    }
  }
  if (stack[0] !== "") {
    stack.unshift("");
  }
  return stack.join("/");
}
function parsePath(path) {
  var hash = "";
  var query2 = "";
  var hashIndex = path.indexOf("#");
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }
  var queryIndex = path.indexOf("?");
  if (queryIndex >= 0) {
    query2 = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }
  return {
    path,
    query: query2,
    hash
  };
}
function cleanPath(path) {
  return path.replace(/\/(?:\s*\/)+/g, "/");
}
var isarray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == "[object Array]";
};
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse$1;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  "(\\\\.)",
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse$1(str, options2) {
  var tokens = [];
  var key = 0;
  var index2 = 0;
  var path = "";
  var defaultDelimiter = options2 && options2.delimiter || "/";
  var res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset2 = res.index;
    path += str.slice(index2, offset2);
    index2 = offset2 + m.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    var next = str[index2];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];
    if (path) {
      tokens.push(path);
      path = "";
    }
    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (index2 < str.length) {
    path += str.substr(index2);
  }
  if (path) {
    tokens.push(path);
  }
  return tokens;
}
function compile(str, options2) {
  return tokensToFunction(parse$1(str, options2), options2);
}
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToFunction(tokens, options2) {
  var matches3 = new Array(tokens.length);
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === "object") {
      matches3[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options2));
    }
  }
  return function(obj2, opts) {
    var path = "";
    var data2 = obj2 || {};
    var options3 = opts || {};
    var encode2 = options3.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (var i2 = 0; i2 < tokens.length; i2++) {
      var token = tokens[i2];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data2[token.name];
      var segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (var j = 0; j < value.length; j++) {
          segment = encode2(value[j]);
          if (!matches3[i2].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode2(value);
      if (!matches3[i2].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, "\\$1");
}
function attachKeys(re, keys2) {
  re.keys = keys2;
  return re;
}
function flags(options2) {
  return options2 && options2.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys2) {
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys2.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }
  return attachKeys(path, keys2);
}
function arrayToRegexp(path, keys2, options2) {
  var parts = [];
  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys2, options2).source);
  }
  var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options2));
  return attachKeys(regexp, keys2);
}
function stringToRegexp(path, keys2, options2) {
  return tokensToRegExp(parse$1(path, options2), keys2, options2);
}
function tokensToRegExp(tokens, keys2, options2) {
  if (!isarray(keys2)) {
    options2 = /** @type {!Object} */
    keys2 || options2;
    keys2 = [];
  }
  options2 = options2 || {};
  var strict = options2.strict;
  var end = options2.end !== false;
  var route = "";
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token === "string") {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = "(?:" + token.pattern + ")";
      keys2.push(token);
      if (token.repeat) {
        capture += "(?:" + prefix + capture + ")*";
      }
      if (token.optional) {
        if (!token.partial) {
          capture = "(?:" + prefix + "(" + capture + "))?";
        } else {
          capture = prefix + "(" + capture + ")?";
        }
      } else {
        capture = prefix + "(" + capture + ")";
      }
      route += capture;
    }
  }
  var delimiter = escapeString(options2.delimiter || "/");
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + "(?:" + delimiter + "(?=$))?";
  }
  if (end) {
    route += "$";
  } else {
    route += strict && endsWithDelimiter ? "" : "(?=" + delimiter + "|$)";
  }
  return attachKeys(new RegExp("^" + route, flags(options2)), keys2);
}
function pathToRegexp(path, keys2, options2) {
  if (!isarray(keys2)) {
    options2 = /** @type {!Object} */
    keys2 || options2;
    keys2 = [];
  }
  options2 = options2 || {};
  if (path instanceof RegExp) {
    return regexpToRegexp(
      path,
      /** @type {!Array} */
      keys2
    );
  }
  if (isarray(path)) {
    return arrayToRegexp(
      /** @type {!Array} */
      path,
      /** @type {!Array} */
      keys2,
      options2
    );
  }
  return stringToRegexp(
    /** @type {string} */
    path,
    /** @type {!Array} */
    keys2,
    options2
  );
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
var regexpCompileCache = /* @__PURE__ */ Object.create(null);
function fillParams(path, params, routeMsg) {
  params = params || {};
  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    if (typeof params.pathMatch === "string") {
      params[0] = params.pathMatch;
    }
    return filler(params, { pretty: true });
  } catch (e) {
    return "";
  } finally {
    delete params[0];
  }
}
function normalizeLocation(raw, current, append, router2) {
  var next = typeof raw === "string" ? { path: raw } : raw;
  if (next._normalized) {
    return next;
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === "object") {
      next.params = extend({}, params);
    }
    return next;
  }
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, "path " + current.path);
    } else
      ;
    return next;
  }
  var parsedPath = parsePath(next.path || "");
  var basePath = current && current.path || "/";
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;
  var query2 = resolveQuery(
    parsedPath.query,
    next.query,
    router2 && router2.options.parseQuery
  );
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== "#") {
    hash = "#" + hash;
  }
  return {
    _normalized: true,
    path,
    query: query2,
    hash
  };
}
var toTypes = [String, Object];
var eventTypes = [String, Array];
var noop = function() {
};
var Link = {
  name: "RouterLink",
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: "a"
    },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    event: {
      type: eventTypes,
      default: "click"
    }
  },
  render: function render6(h) {
    var this$1$1 = this;
    var router2 = this.$router;
    var current = this.$route;
    var ref2 = router2.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref2.location;
    var route = ref2.route;
    var href = ref2.href;
    var classes2 = {};
    var globalActiveClass = router2.options.linkActiveClass;
    var globalExactActiveClass = router2.options.linkExactActiveClass;
    var activeClassFallback = globalActiveClass == null ? "router-link-active" : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? "router-link-exact-active" : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = route.redirectedFrom ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router2) : route;
    classes2[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
    classes2[activeClass] = this.exact || this.exactPath ? classes2[exactActiveClass] : isIncludedRoute(current, compareTarget);
    var ariaCurrentValue = classes2[exactActiveClass] ? this.ariaCurrentValue : null;
    var handler2 = function(e) {
      if (guardEvent(e)) {
        if (this$1$1.replace) {
          router2.replace(location, noop);
        } else {
          router2.push(location, noop);
        }
      }
    };
    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function(e) {
        on[e] = handler2;
      });
    } else {
      on[this.event] = handler2;
    }
    var data2 = { class: classes2 };
    var scopedSlot = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
      href,
      route,
      navigate: handler2,
      isActive: classes2[activeClass],
      isExactActive: classes2[exactActiveClass]
    });
    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0];
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        return scopedSlot.length === 0 ? h() : h("span", {}, scopedSlot);
      }
    }
    if (this.tag === "a") {
      data2.on = on;
      data2.attrs = { href, "aria-current": ariaCurrentValue };
    } else {
      var a = findAnchor(this.$slots.default);
      if (a) {
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = aData.on || {};
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler2;
          }
        }
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
        aAttrs["aria-current"] = ariaCurrentValue;
      } else {
        data2.on = on;
      }
    }
    return h(this.tag, data2, this.$slots.default);
  }
};
function guardEvent(e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  }
  if (e.defaultPrevented) {
    return;
  }
  if (e.button !== void 0 && e.button !== 0) {
    return;
  }
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target2 = e.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target2)) {
      return;
    }
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true;
}
function findAnchor(children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === "a") {
        return child;
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}
var _Vue;
function install$2(Vue2) {
  if (install$2.installed && _Vue === Vue2) {
    return;
  }
  install$2.installed = true;
  _Vue = Vue2;
  var isDef2 = function(v) {
    return v !== void 0;
  };
  var registerInstance = function(vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef2(i) && isDef2(i = i.data) && isDef2(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };
  Vue2.mixin({
    beforeCreate: function beforeCreate2() {
      if (isDef2(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue2.util.defineReactive(this, "_route", this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed2() {
      registerInstance(this);
    }
  });
  Object.defineProperty(Vue2.prototype, "$router", {
    get: function get3() {
      return this._routerRoot._router;
    }
  });
  Object.defineProperty(Vue2.prototype, "$route", {
    get: function get3() {
      return this._routerRoot._route;
    }
  });
  Vue2.component("RouterView", View);
  Vue2.component("RouterLink", Link);
  var strats2 = Vue2.config.optionMergeStrategies;
  strats2.beforeRouteEnter = strats2.beforeRouteLeave = strats2.beforeRouteUpdate = strats2.created;
}
var inBrowser = typeof window !== "undefined";
function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap, parentRoute) {
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || /* @__PURE__ */ Object.create(null);
  var nameMap = oldNameMap || /* @__PURE__ */ Object.create(null);
  routes.forEach(function(route) {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  });
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === "*") {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }
  return {
    pathList,
    pathMap,
    nameMap
  };
}
function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;
  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);
  if (typeof route.caseSensitive === "boolean") {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    alias: route.alias ? typeof route.alias === "string" ? [route.alias] : route.alias : [],
    instances: {},
    enteredCbs: {},
    name,
    parent,
    matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : { default: route.props }
  };
  if (route.children) {
    route.children.forEach(function(child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : void 0;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }
  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }
  if (route.alias !== void 0) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || "/"
        // matchAs
      );
    }
  }
  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    }
  }
}
function compileRouteRegex(path, pathToRegexpOptions) {
  var regex2 = pathToRegexp_1(path, [], pathToRegexpOptions);
  return regex2;
}
function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, "");
  }
  if (path[0] === "/") {
    return path;
  }
  if (parent == null) {
    return path;
  }
  return cleanPath(parent.path + "/" + path);
}
function createMatcher(routes, router2) {
  var ref2 = createRouteMap(routes);
  var pathList = ref2.pathList;
  var pathMap = ref2.pathMap;
  var nameMap = ref2.nameMap;
  function addRoutes2(routes2) {
    createRouteMap(routes2, pathList, pathMap, nameMap);
  }
  function addRoute2(parentOrRoute, route) {
    var parent = typeof parentOrRoute !== "object" ? nameMap[parentOrRoute] : void 0;
    createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent);
    if (parent && parent.alias.length) {
      createRouteMap(
        // $flow-disable-line route is defined if parent is
        parent.alias.map(function(alias2) {
          return { path: alias2, children: [route] };
        }),
        pathList,
        pathMap,
        nameMap,
        parent
      );
    }
  }
  function getRoutes2() {
    return pathList.map(function(path) {
      return pathMap[path];
    });
  }
  function match3(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router2);
    var name = location.name;
    if (name) {
      var record = nameMap[name];
      if (!record) {
        return _createRoute(null, location);
      }
      var paramNames2 = record.regex.keys.filter(function(key2) {
        return !key2.optional;
      }).map(function(key2) {
        return key2.name;
      });
      if (typeof location.params !== "object") {
        location.params = {};
      }
      if (currentRoute && typeof currentRoute.params === "object") {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames2.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }
      location.path = fillParams(record.path, location.params);
      return _createRoute(record, location, redirectedFrom);
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    }
    return _createRoute(null, location);
  }
  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect2 = typeof originalRedirect === "function" ? originalRedirect(createRoute(record, location, null, router2)) : originalRedirect;
    if (typeof redirect2 === "string") {
      redirect2 = { path: redirect2 };
    }
    if (!redirect2 || typeof redirect2 !== "object") {
      return _createRoute(null, location);
    }
    var re = redirect2;
    var name = re.name;
    var path = re.path;
    var query2 = location.query;
    var hash = location.hash;
    var params = location.params;
    query2 = re.hasOwnProperty("query") ? re.query : query2;
    hash = re.hasOwnProperty("hash") ? re.hash : hash;
    params = re.hasOwnProperty("params") ? re.params : params;
    if (name) {
      nameMap[name];
      return match3({
        _normalized: true,
        name,
        query: query2,
        hash,
        params
      }, void 0, location);
    } else if (path) {
      var rawPath = resolveRecordPath(path, record);
      var resolvedPath = fillParams(rawPath, params);
      return match3({
        _normalized: true,
        path: resolvedPath,
        query: query2,
        hash
      }, void 0, location);
    } else {
      return _createRoute(null, location);
    }
  }
  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params);
    var aliasedMatch = match3({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }
    return _createRoute(null, location);
  }
  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }
    return createRoute(record, location, redirectedFrom, router2);
  }
  return {
    match: match3,
    addRoute: addRoute2,
    getRoutes: getRoutes2,
    addRoutes: addRoutes2
  };
}
function matchRoute(regex2, path, params) {
  var m = path.match(regex2);
  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }
  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex2.keys[i - 1];
    if (key) {
      params[key.name || "pathMatch"] = typeof m[i] === "string" ? decode(m[i]) : m[i];
    }
  }
  return true;
}
function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : "/", true);
}
var Time = inBrowser && window.performance && window.performance.now ? window.performance : Date;
function genStateKey() {
  return Time.now().toFixed(3);
}
var _key = genStateKey();
function getStateKey() {
  return _key;
}
function setStateKey(key) {
  return _key = key;
}
var positionStore = /* @__PURE__ */ Object.create(null);
function setupScroll() {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  var protocolAndPath = window.location.protocol + "//" + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, "");
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, "", absolutePath);
  window.addEventListener("popstate", handlePopState);
  return function() {
    window.removeEventListener("popstate", handlePopState);
  };
}
function handleScroll(router2, to, from, isPop) {
  if (!router2.app) {
    return;
  }
  var behavior = router2.options.scrollBehavior;
  if (!behavior) {
    return;
  }
  router2.app.$nextTick(function() {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router2,
      to,
      from,
      isPop ? position : null
    );
    if (!shouldScroll) {
      return;
    }
    if (typeof shouldScroll.then === "function") {
      shouldScroll.then(function(shouldScroll2) {
        scrollToPosition(shouldScroll2, position);
      }).catch(function(err) {
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}
function saveScrollPosition() {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}
function handlePopState(e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}
function getScrollPosition() {
  var key = getStateKey();
  if (key) {
    return positionStore[key];
  }
}
function getElementPosition(el, offset2) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset2.x,
    y: elRect.top - docRect.top - offset2.y
  };
}
function isValidPosition(obj2) {
  return isNumber(obj2.x) || isNumber(obj2.y);
}
function normalizePosition(obj2) {
  return {
    x: isNumber(obj2.x) ? obj2.x : window.pageXOffset,
    y: isNumber(obj2.y) ? obj2.y : window.pageYOffset
  };
}
function normalizeOffset(obj2) {
  return {
    x: isNumber(obj2.x) ? obj2.x : 0,
    y: isNumber(obj2.y) ? obj2.y : 0
  };
}
function isNumber(v) {
  return typeof v === "number";
}
var hashStartsWithNumberRE = /^#\d/;
function scrollToPosition(shouldScroll, position) {
  var isObject2 = typeof shouldScroll === "object";
  if (isObject2 && typeof shouldScroll.selector === "string") {
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) ? document.getElementById(shouldScroll.selector.slice(1)) : document.querySelector(shouldScroll.selector);
    if (el) {
      var offset2 = shouldScroll.offset && typeof shouldScroll.offset === "object" ? shouldScroll.offset : {};
      offset2 = normalizeOffset(offset2);
      position = getElementPosition(el, offset2);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject2 && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }
  if (position) {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}
var supportsPushState = inBrowser && function() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf("Android 2.") !== -1 || ua.indexOf("Android 4.0") !== -1) && ua.indexOf("Mobile Safari") !== -1 && ua.indexOf("Chrome") === -1 && ua.indexOf("Windows Phone") === -1) {
    return false;
  }
  return window.history && typeof window.history.pushState === "function";
}();
function pushState(url2, replace2) {
  saveScrollPosition();
  var history = window.history;
  try {
    if (replace2) {
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, "", url2);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, "", url2);
    }
  } catch (e) {
    window.location[replace2 ? "replace" : "assign"](url2);
  }
}
function replaceState(url2) {
  pushState(url2, true);
}
var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};
function createNavigationRedirectedError(from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    'Redirected when going from "' + from.fullPath + '" to "' + stringifyRoute(
      to
    ) + '" via a navigation guard.'
  );
}
function createNavigationDuplicatedError(from, to) {
  var error = createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    'Avoided redundant navigation to current location: "' + from.fullPath + '".'
  );
  error.name = "NavigationDuplicated";
  return error;
}
function createNavigationCancelledError(from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    'Navigation cancelled from "' + from.fullPath + '" to "' + to.fullPath + '" with a new navigation.'
  );
}
function createNavigationAbortedError(from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    'Navigation aborted from "' + from.fullPath + '" to "' + to.fullPath + '" via a navigation guard.'
  );
}
function createRouterError(from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;
  return error;
}
var propertiesToLog = ["params", "query", "hash"];
function stringifyRoute(to) {
  if (typeof to === "string") {
    return to;
  }
  if ("path" in to) {
    return to.path;
  }
  var location = {};
  propertiesToLog.forEach(function(key) {
    if (key in to) {
      location[key] = to[key];
    }
  });
  return JSON.stringify(location, null, 2);
}
function isError(err) {
  return Object.prototype.toString.call(err).indexOf("Error") > -1;
}
function isNavigationFailure(err, errorType) {
  return isError(err) && err._isRouter && (errorType == null || err.type === errorType);
}
function runQueue(queue2, fn, cb) {
  var step = function(index2) {
    if (index2 >= queue2.length) {
      cb();
    } else {
      if (queue2[index2]) {
        fn(queue2[index2], function() {
          step(index2 + 1);
        });
      } else {
        step(index2 + 1);
      }
    }
  };
  step(0);
}
function resolveAsyncComponents(matched) {
  return function(to, from, next) {
    var hasAsync = false;
    var pending2 = 0;
    var error = null;
    flatMapComponents(matched, function(def2, _, match3, key) {
      if (typeof def2 === "function" && def2.cid === void 0) {
        hasAsync = true;
        pending2++;
        var resolve2 = once(function(resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          def2.resolved = typeof resolvedDef === "function" ? resolvedDef : _Vue.extend(resolvedDef);
          match3.components[key] = resolvedDef;
          pending2--;
          if (pending2 <= 0) {
            next();
          }
        });
        var reject = once(function(reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });
        var res;
        try {
          res = def2(resolve2, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === "function") {
            res.then(resolve2, reject);
          } else {
            var comp = res.component;
            if (comp && typeof comp.then === "function") {
              comp.then(resolve2, reject);
            }
          }
        }
      }
    });
    if (!hasAsync) {
      next();
    }
  };
}
function flatMapComponents(matched, fn) {
  return flatten(matched.map(function(m) {
    return Object.keys(m.components).map(function(key) {
      return fn(
        m.components[key],
        m.instances[key],
        m,
        key
      );
    });
  }));
}
function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}
var hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
function isESModule(obj2) {
  return obj2.__esModule || hasSymbol && obj2[Symbol.toStringTag] === "Module";
}
function once(fn) {
  var called = false;
  return function() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    if (called) {
      return;
    }
    called = true;
    return fn.apply(this, args);
  };
}
var History = function History2(router2, base) {
  this.router = router2;
  this.base = normalizeBase(base);
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};
History.prototype.listen = function listen(cb) {
  this.cb = cb;
};
History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};
History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};
History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1$1 = this;
  var route;
  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function(cb) {
      cb(e);
    });
    throw e;
  }
  var prev = this.current;
  this.confirmTransition(
    route,
    function() {
      this$1$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1$1.ensureURL();
      this$1$1.router.afterHooks.forEach(function(hook) {
        hook && hook(route, prev);
      });
      if (!this$1$1.ready) {
        this$1$1.ready = true;
        this$1$1.readyCbs.forEach(function(cb) {
          cb(route);
        });
      }
    },
    function(err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1$1.ready) {
        if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
          this$1$1.ready = true;
          this$1$1.readyErrorCbs.forEach(function(cb) {
            cb(err);
          });
        }
      }
    }
  );
};
History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1$1 = this;
  var current = this.current;
  this.pending = route;
  var abort = function(err) {
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1$1.errorCbs.length) {
        this$1$1.errorCbs.forEach(function(cb) {
          cb(err);
        });
      } else {
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;
  if (isSameRoute(route, current) && // in the case the route map has been dynamically appended to
  lastRouteIndex === lastCurrentIndex && route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]) {
    this.ensureURL();
    if (route.hash) {
      handleScroll(this.router, current, route, false);
    }
    return abort(createNavigationDuplicatedError(current, route));
  }
  var ref2 = resolveQueue(
    this.current.matched,
    route.matched
  );
  var updated3 = ref2.updated;
  var deactivated4 = ref2.deactivated;
  var activated3 = ref2.activated;
  var queue2 = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated4),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated3),
    // in-config enter guards
    activated3.map(function(m) {
      return m.beforeEnter;
    }),
    // async components
    resolveAsyncComponents(activated3)
  );
  var iterator = function(hook, next) {
    if (this$1$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route));
    }
    try {
      hook(route, current, function(to) {
        if (to === false) {
          this$1$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1$1.ensureURL(true);
          abort(to);
        } else if (typeof to === "string" || typeof to === "object" && (typeof to.path === "string" || typeof to.name === "string")) {
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === "object" && to.replace) {
            this$1$1.replace(to);
          } else {
            this$1$1.push(to);
          }
        } else {
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };
  runQueue(queue2, iterator, function() {
    var enterGuards = extractEnterGuards(activated3);
    var queue3 = enterGuards.concat(this$1$1.router.resolveHooks);
    runQueue(queue3, iterator, function() {
      if (this$1$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route));
      }
      this$1$1.pending = null;
      onComplete(route);
      if (this$1$1.router.app) {
        this$1$1.router.app.$nextTick(function() {
          handleRouteEntered(route);
        });
      }
    });
  });
};
History.prototype.updateRoute = function updateRoute(route) {
  this.current = route;
  this.cb && this.cb(route);
};
History.prototype.setupListeners = function setupListeners() {
};
History.prototype.teardown = function teardown2() {
  this.listeners.forEach(function(cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];
  this.current = START;
  this.pending = null;
};
function normalizeBase(base) {
  if (!base) {
    if (inBrowser) {
      var baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^https?:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base.charAt(0) !== "/") {
    base = "/" + base;
  }
  return base.replace(/\/$/, "");
}
function resolveQueue(current, next) {
  var i;
  var max2 = Math.max(current.length, next.length);
  for (i = 0; i < max2; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}
function extractGuards(records, name, bind5, reverse) {
  var guards = flatMapComponents(records, function(def2, instance, match3, key) {
    var guard = extractGuard(def2, name);
    if (guard) {
      return Array.isArray(guard) ? guard.map(function(guard2) {
        return bind5(guard2, instance, match3, key);
      }) : bind5(guard, instance, match3, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}
function extractGuard(def2, key) {
  if (typeof def2 !== "function") {
    def2 = _Vue.extend(def2);
  }
  return def2.options[key];
}
function extractLeaveGuards(deactivated4) {
  return extractGuards(deactivated4, "beforeRouteLeave", bindGuard, true);
}
function extractUpdateHooks(updated3) {
  return extractGuards(updated3, "beforeRouteUpdate", bindGuard);
}
function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}
function extractEnterGuards(activated3) {
  return extractGuards(
    activated3,
    "beforeRouteEnter",
    function(guard, _, match3, key) {
      return bindEnterGuard(guard, match3, key);
    }
  );
}
function bindEnterGuard(guard, match3, key) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function(cb) {
      if (typeof cb === "function") {
        if (!match3.enteredCbs[key]) {
          match3.enteredCbs[key] = [];
        }
        match3.enteredCbs[key].push(cb);
      }
      next(cb);
    });
  };
}
var HTML5History = /* @__PURE__ */ function(History3) {
  function HTML5History2(router2, base) {
    History3.call(this, router2, base);
    this._startLocation = getLocation(this.base);
  }
  if (History3)
    HTML5History2.__proto__ = History3;
  HTML5History2.prototype = Object.create(History3 && History3.prototype);
  HTML5History2.prototype.constructor = HTML5History2;
  HTML5History2.prototype.setupListeners = function setupListeners2() {
    var this$1$1 = this;
    if (this.listeners.length > 0) {
      return;
    }
    var router2 = this.router;
    var expectScroll = router2.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;
    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }
    var handleRoutingEvent = function() {
      var current = this$1$1.current;
      var location = getLocation(this$1$1.base);
      if (this$1$1.current === START && location === this$1$1._startLocation) {
        return;
      }
      this$1$1.transitionTo(location, function(route) {
        if (supportsScroll) {
          handleScroll(router2, route, current, true);
        }
      });
    };
    window.addEventListener("popstate", handleRoutingEvent);
    this.listeners.push(function() {
      window.removeEventListener("popstate", handleRoutingEvent);
    });
  };
  HTML5History2.prototype.go = function go2(n) {
    window.history.go(n);
  };
  HTML5History2.prototype.push = function push3(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref2 = this;
    var fromRoute = ref2.current;
    this.transitionTo(location, function(route) {
      pushState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HTML5History2.prototype.replace = function replace2(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref2 = this;
    var fromRoute = ref2.current;
    this.transitionTo(location, function(route) {
      replaceState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };
  HTML5History2.prototype.ensureURL = function ensureURL(push3) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push3 ? pushState(current) : replaceState(current);
    }
  };
  HTML5History2.prototype.getCurrentLocation = function getCurrentLocation() {
    return getLocation(this.base);
  };
  return HTML5History2;
}(History);
function getLocation(base) {
  var path = window.location.pathname;
  var pathLowerCase = path.toLowerCase();
  var baseLowerCase = base.toLowerCase();
  if (base && (pathLowerCase === baseLowerCase || pathLowerCase.indexOf(cleanPath(baseLowerCase + "/")) === 0)) {
    path = path.slice(base.length);
  }
  return (path || "/") + window.location.search + window.location.hash;
}
var HashHistory = /* @__PURE__ */ function(History3) {
  function HashHistory2(router2, base, fallback) {
    History3.call(this, router2, base);
    if (fallback && checkFallback(this.base)) {
      return;
    }
    ensureSlash();
  }
  if (History3)
    HashHistory2.__proto__ = History3;
  HashHistory2.prototype = Object.create(History3 && History3.prototype);
  HashHistory2.prototype.constructor = HashHistory2;
  HashHistory2.prototype.setupListeners = function setupListeners2() {
    var this$1$1 = this;
    if (this.listeners.length > 0) {
      return;
    }
    var router2 = this.router;
    var expectScroll = router2.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;
    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }
    var handleRoutingEvent = function() {
      var current = this$1$1.current;
      if (!ensureSlash()) {
        return;
      }
      this$1$1.transitionTo(getHash(), function(route) {
        if (supportsScroll) {
          handleScroll(this$1$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? "popstate" : "hashchange";
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function() {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };
  HashHistory2.prototype.push = function push3(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref2 = this;
    var fromRoute = ref2.current;
    this.transitionTo(
      location,
      function(route) {
        pushHash(route.fullPath);
        handleScroll(this$1$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };
  HashHistory2.prototype.replace = function replace2(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref2 = this;
    var fromRoute = ref2.current;
    this.transitionTo(
      location,
      function(route) {
        replaceHash(route.fullPath);
        handleScroll(this$1$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };
  HashHistory2.prototype.go = function go2(n) {
    window.history.go(n);
  };
  HashHistory2.prototype.ensureURL = function ensureURL(push3) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push3 ? pushHash(current) : replaceHash(current);
    }
  };
  HashHistory2.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };
  return HashHistory2;
}(History);
function checkFallback(base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + "/#" + location));
    return true;
  }
}
function ensureSlash() {
  var path = getHash();
  if (path.charAt(0) === "/") {
    return true;
  }
  replaceHash("/" + path);
  return false;
}
function getHash() {
  var href = window.location.href;
  var index2 = href.indexOf("#");
  if (index2 < 0) {
    return "";
  }
  href = href.slice(index2 + 1);
  return href;
}
function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf("#");
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}
function pushHash(path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}
function replaceHash(path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}
var AbstractHistory = /* @__PURE__ */ function(History3) {
  function AbstractHistory2(router2, base) {
    History3.call(this, router2, base);
    this.stack = [];
    this.index = -1;
  }
  if (History3)
    AbstractHistory2.__proto__ = History3;
  AbstractHistory2.prototype = Object.create(History3 && History3.prototype);
  AbstractHistory2.prototype.constructor = AbstractHistory2;
  AbstractHistory2.prototype.push = function push3(location, onComplete, onAbort) {
    var this$1$1 = this;
    this.transitionTo(
      location,
      function(route) {
        this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route);
        this$1$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };
  AbstractHistory2.prototype.replace = function replace2(location, onComplete, onAbort) {
    var this$1$1 = this;
    this.transitionTo(
      location,
      function(route) {
        this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };
  AbstractHistory2.prototype.go = function go2(n) {
    var this$1$1 = this;
    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function() {
        var prev = this$1$1.current;
        this$1$1.index = targetIndex;
        this$1$1.updateRoute(route);
        this$1$1.router.afterHooks.forEach(function(hook) {
          hook && hook(route, prev);
        });
      },
      function(err) {
        if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
          this$1$1.index = targetIndex;
        }
      }
    );
  };
  AbstractHistory2.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : "/";
  };
  AbstractHistory2.prototype.ensureURL = function ensureURL() {
  };
  return AbstractHistory2;
}(History);
var VueRouter = function VueRouter2(options2) {
  if (options2 === void 0)
    options2 = {};
  this.app = null;
  this.apps = [];
  this.options = options2;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options2.routes || [], this);
  var mode = options2.mode || "hash";
  this.fallback = mode === "history" && !supportsPushState && options2.fallback !== false;
  if (this.fallback) {
    mode = "hash";
  }
  if (!inBrowser) {
    mode = "abstract";
  }
  this.mode = mode;
  switch (mode) {
    case "history":
      this.history = new HTML5History(this, options2.base);
      break;
    case "hash":
      this.history = new HashHistory(this, options2.base, this.fallback);
      break;
    case "abstract":
      this.history = new AbstractHistory(this, options2.base);
      break;
  }
};
var prototypeAccessors$7 = { currentRoute: { configurable: true } };
VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};
prototypeAccessors$7.currentRoute.get = function() {
  return this.history && this.history.current;
};
VueRouter.prototype.init = function init2(app) {
  var this$1$1 = this;
  this.apps.push(app);
  app.$once("hook:destroyed", function() {
    var index2 = this$1$1.apps.indexOf(app);
    if (index2 > -1) {
      this$1$1.apps.splice(index2, 1);
    }
    if (this$1$1.app === app) {
      this$1$1.app = this$1$1.apps[0] || null;
    }
    if (!this$1$1.app) {
      this$1$1.history.teardown();
    }
  });
  if (this.app) {
    return;
  }
  this.app = app;
  var history = this.history;
  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function(routeOrError) {
      var from = history.current;
      var expectScroll = this$1$1.options.scrollBehavior;
      var supportsScroll = supportsPushState && expectScroll;
      if (supportsScroll && "fullPath" in routeOrError) {
        handleScroll(this$1$1, routeOrError, from, false);
      }
    };
    var setupListeners2 = function(routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupListeners2,
      setupListeners2
    );
  }
  history.listen(function(route) {
    this$1$1.apps.forEach(function(app2) {
      app2._route = route;
    });
  });
};
VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};
VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};
VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};
VueRouter.prototype.onReady = function onReady2(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};
VueRouter.prototype.onError = function onError2(errorCb) {
  this.history.onError(errorCb);
};
VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  var this$1$1 = this;
  if (!onComplete && !onAbort && typeof Promise !== "undefined") {
    return new Promise(function(resolve2, reject) {
      this$1$1.history.push(location, resolve2, reject);
    });
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};
VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  var this$1$1 = this;
  if (!onComplete && !onAbort && typeof Promise !== "undefined") {
    return new Promise(function(resolve2, reject) {
      this$1$1.history.replace(location, resolve2, reject);
    });
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};
VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};
VueRouter.prototype.back = function back() {
  this.go(-1);
};
VueRouter.prototype.forward = function forward() {
  this.go(1);
};
VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;
  if (!route) {
    return [];
  }
  return [].concat.apply(
    [],
    route.matched.map(function(m) {
      return Object.keys(m.components).map(function(key) {
        return m.components[key];
      });
    })
  );
};
VueRouter.prototype.resolve = function resolve(to, current, append) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location,
    route,
    href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};
VueRouter.prototype.getRoutes = function getRoutes() {
  return this.matcher.getRoutes();
};
VueRouter.prototype.addRoute = function addRoute(parentOrRoute, route) {
  this.matcher.addRoute(parentOrRoute, route);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};
VueRouter.prototype.addRoutes = function addRoutes(routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};
Object.defineProperties(VueRouter.prototype, prototypeAccessors$7);
var VueRouter$1 = VueRouter;
function registerHook(list, fn) {
  list.push(fn);
  return function() {
    var i = list.indexOf(fn);
    if (i > -1) {
      list.splice(i, 1);
    }
  };
}
function createHref(base, fullPath, mode) {
  var path = mode === "hash" ? "#" + fullPath : fullPath;
  return base ? cleanPath(base + "/" + path) : path;
}
VueRouter.install = install$2;
VueRouter.version = "3.6.5";
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;
VueRouter.START_LOCATION = START;
if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}
/**
  * vee-validate v2.2.15
  * (c) 2019 Abdelrahman Awad
  * @license MIT
  */
var isTextInput = function(el) {
  return includes(["text", "password", "search", "email", "tel", "url", "textarea", "number"], el.type);
};
var isCheckboxOrRadioInput = function(el) {
  return includes(["radio", "checkbox"], el.type);
};
var isDateInput = function(el) {
  return includes(["date", "week", "month", "datetime-local", "time"], el.type);
};
var getDataAttribute = function(el, name) {
  return el.getAttribute("data-vv-" + name);
};
var isNaN$1 = function(value) {
  if ("isNaN" in Number) {
    return Number.isNaN(value);
  }
  return typeof value === "number" && value !== value;
};
var isNullOrUndefined = function() {
  var values2 = [], len = arguments.length;
  while (len--)
    values2[len] = arguments[len];
  return values2.every(function(value) {
    return value === null || value === void 0;
  });
};
var createFlags = function() {
  return {
    untouched: true,
    touched: false,
    dirty: false,
    pristine: true,
    valid: null,
    invalid: null,
    validated: false,
    pending: false,
    required: false,
    changed: false
  };
};
var isEqual$2 = function(lhs, rhs) {
  if (lhs instanceof RegExp && rhs instanceof RegExp) {
    return isEqual$2(lhs.source, rhs.source) && isEqual$2(lhs.flags, rhs.flags);
  }
  if (Array.isArray(lhs) && Array.isArray(rhs)) {
    if (lhs.length !== rhs.length) {
      return false;
    }
    for (var i = 0; i < lhs.length; i++) {
      if (!isEqual$2(lhs[i], rhs[i])) {
        return false;
      }
    }
    return true;
  }
  if (isObject$8(lhs) && isObject$8(rhs)) {
    return Object.keys(lhs).every(function(key) {
      return isEqual$2(lhs[key], rhs[key]);
    }) && Object.keys(rhs).every(function(key) {
      return isEqual$2(lhs[key], rhs[key]);
    });
  }
  if (isNaN$1(lhs) && isNaN$1(rhs)) {
    return true;
  }
  return lhs === rhs;
};
var getScope = function(el) {
  var scope = getDataAttribute(el, "scope");
  if (isNullOrUndefined(scope)) {
    var form = getForm(el);
    if (form) {
      scope = getDataAttribute(form, "scope");
    }
  }
  return !isNullOrUndefined(scope) ? scope : null;
};
var getForm = function(el) {
  if (isNullOrUndefined(el)) {
    return null;
  }
  if (el.tagName === "FORM") {
    return el;
  }
  if (!isNullOrUndefined(el.form)) {
    return el.form;
  }
  return !isNullOrUndefined(el.parentNode) ? getForm(el.parentNode) : null;
};
var getPath = function(path, target2, def2) {
  if (def2 === void 0)
    def2 = void 0;
  if (!path || !target2) {
    return def2;
  }
  var value = target2;
  path.split(".").every(function(prop) {
    if (prop in value) {
      value = value[prop];
      return true;
    }
    value = def2;
    return false;
  });
  return value;
};
var hasPath = function(path, target2) {
  var obj2 = target2;
  var isValidPath = path.split(".").reduce(function(reducer, prop) {
    if (obj2 == null || typeof obj2 !== "object") {
      return reducer && false;
    }
    if (prop in obj2) {
      obj2 = obj2[prop];
      return reducer && true;
    }
    return reducer && false;
  }, true);
  return isValidPath;
};
var parseRule = function(rule) {
  var params = [];
  var name = rule.split(":")[0];
  if (includes(rule, ":")) {
    params = rule.split(":").slice(1).join(":").split(",");
  }
  return { name, params };
};
var debounce$1 = function(fn, wait, token) {
  if (wait === void 0)
    wait = 0;
  if (token === void 0)
    token = { cancelled: false };
  if (wait === 0) {
    return fn;
  }
  var timeout;
  return function() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    var later = function() {
      timeout = null;
      if (!token.cancelled) {
        fn.apply(void 0, args);
      }
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (!timeout) {
      fn.apply(void 0, args);
    }
  };
};
var appendRule = function(rule, rules) {
  if (!rules) {
    return normalizeRules(rule);
  }
  if (!rule) {
    return normalizeRules(rules);
  }
  if (typeof rules === "string") {
    rules = normalizeRules(rules);
  }
  return assign({}, rules, normalizeRules(rule));
};
var normalizeRules = function(rules) {
  if (!rules) {
    return {};
  }
  if (isObject$8(rules)) {
    return Object.keys(rules).reduce(function(prev, curr) {
      var params = [];
      if (rules[curr] === true) {
        params = [];
      } else if (Array.isArray(rules[curr])) {
        params = rules[curr];
      } else if (isObject$8(rules[curr])) {
        params = rules[curr];
      } else {
        params = [rules[curr]];
      }
      if (rules[curr] !== false) {
        prev[curr] = params;
      }
      return prev;
    }, {});
  }
  if (typeof rules !== "string") {
    warn("rules must be either a string or an object.");
    return {};
  }
  return rules.split("|").reduce(function(prev, rule) {
    var parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev;
    }
    prev[parsedRule.name] = parsedRule.params;
    return prev;
  }, {});
};
var warn = function(message) {
  console.warn("[vee-validate] " + message);
};
var createError = function(message) {
  return new Error("[vee-validate] " + message);
};
var isObject$8 = function(obj2) {
  return obj2 !== null && obj2 && typeof obj2 === "object" && !Array.isArray(obj2);
};
var isCallable = function(func) {
  return typeof func === "function";
};
var hasClass = function(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }
  return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
};
var addClass = function(el, className) {
  if (el.classList) {
    el.classList.add(className);
    return;
  }
  if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};
var removeClass = function(el, className) {
  if (el.classList) {
    el.classList.remove(className);
    return;
  }
  if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
};
var toggleClass = function(el, className, status) {
  if (!el || !className) {
    return;
  }
  if (Array.isArray(className)) {
    className.forEach(function(item) {
      return toggleClass(el, item, status);
    });
    return;
  }
  if (status) {
    return addClass(el, className);
  }
  removeClass(el, className);
};
var toArray = function(arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }
  var array = [];
  var length2 = arrayLike.length;
  for (var i = 0; i < length2; i++) {
    array.push(arrayLike[i]);
  }
  return array;
};
var ensureArray = function(arrayLike) {
  if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  }
  var array = toArray(arrayLike);
  return isEmptyArray(array) ? [arrayLike] : array;
};
var assign = function(target2) {
  var others = [], len = arguments.length - 1;
  while (len-- > 0)
    others[len] = arguments[len + 1];
  if (isCallable(Object.assign)) {
    return Object.assign.apply(Object, [target2].concat(others));
  }
  if (target2 == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  var to = Object(target2);
  others.forEach(function(arg) {
    if (arg != null) {
      Object.keys(arg).forEach(function(key) {
        to[key] = arg[key];
      });
    }
  });
  return to;
};
var id = 0;
var idTemplate = "{id}";
var uniqId = function() {
  if (id >= 9999) {
    id = 0;
    idTemplate = idTemplate.replace("{id}", "_{id}");
  }
  id++;
  var newId = idTemplate.replace("{id}", String(id));
  return newId;
};
var findIndex$1 = function(arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }
  return -1;
};
var find$1 = function(arrayLike, predicate) {
  var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
  var idx = findIndex$1(array, predicate);
  return idx === -1 ? void 0 : array[idx];
};
var isBuiltInComponent = function(vnode) {
  if (!vnode) {
    return false;
  }
  var tag = vnode.componentOptions.tag;
  return /^(keep-alive|transition|transition-group)$/.test(tag);
};
var makeDelayObject = function(events2, delay, delayConfig) {
  if (typeof delay === "number") {
    return events2.reduce(function(prev, e) {
      prev[e] = delay;
      return prev;
    }, {});
  }
  return events2.reduce(function(prev, e) {
    if (typeof delay === "object" && e in delay) {
      prev[e] = delay[e];
      return prev;
    }
    if (typeof delayConfig === "number") {
      prev[e] = delayConfig;
      return prev;
    }
    prev[e] = delayConfig && delayConfig[e] || 0;
    return prev;
  }, {});
};
var deepParseInt = function(input) {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    return parseInt(input);
  }
  var map2 = {};
  for (var element in input) {
    map2[element] = parseInt(input[element]);
  }
  return map2;
};
var merge$2 = function(target2, source) {
  if (!(isObject$8(target2) && isObject$8(source))) {
    return target2;
  }
  Object.keys(source).forEach(function(key) {
    var obj2, obj$1;
    if (isObject$8(source[key])) {
      if (!target2[key]) {
        assign(target2, (obj2 = {}, obj2[key] = {}, obj2));
      }
      merge$2(target2[key], source[key]);
      return;
    }
    assign(target2, (obj$1 = {}, obj$1[key] = source[key], obj$1));
  });
  return target2;
};
var fillRulesFromElement = function(el, rules) {
  if (el.required) {
    rules = appendRule("required", rules);
  }
  if (isTextInput(el)) {
    if (el.type === "email") {
      rules = appendRule("email" + (el.multiple ? ":multiple" : ""), rules);
    }
    if (el.pattern) {
      rules = appendRule({ regex: el.pattern }, rules);
    }
    if (el.maxLength >= 0 && el.maxLength < 524288) {
      rules = appendRule("max:" + el.maxLength, rules);
    }
    if (el.minLength > 0) {
      rules = appendRule("min:" + el.minLength, rules);
    }
    if (el.type === "number") {
      rules = appendRule("decimal", rules);
      if (el.min !== "") {
        rules = appendRule("min_value:" + el.min, rules);
      }
      if (el.max !== "") {
        rules = appendRule("max_value:" + el.max, rules);
      }
    }
    return rules;
  }
  if (isDateInput(el)) {
    var timeFormat = el.step && Number(el.step) < 60 ? "HH:mm:ss" : "HH:mm";
    if (el.type === "date") {
      return appendRule("date_format:yyyy-MM-dd", rules);
    }
    if (el.type === "datetime-local") {
      return appendRule("date_format:yyyy-MM-ddT" + timeFormat, rules);
    }
    if (el.type === "month") {
      return appendRule("date_format:yyyy-MM", rules);
    }
    if (el.type === "week") {
      return appendRule("date_format:yyyy-[W]WW", rules);
    }
    if (el.type === "time") {
      return appendRule("date_format:" + timeFormat, rules);
    }
  }
  return rules;
};
var values = function(obj2) {
  if (isCallable(Object.values)) {
    return Object.values(obj2);
  }
  return Object.keys(obj2).map(function(k) {
    return obj2[k];
  });
};
var parseSelector = function(selector) {
  var rule = null;
  if (includes(selector, ":")) {
    rule = selector.split(":").pop();
    selector = selector.replace(":" + rule, "");
  }
  if (selector[0] === "#") {
    return {
      id: selector.slice(1),
      rule,
      name: null,
      scope: null
    };
  }
  var scope = null;
  var name = selector;
  if (includes(selector, ".")) {
    var parts = selector.split(".");
    scope = parts[0];
    name = parts.slice(1).join(".");
  }
  return {
    id: null,
    scope,
    name,
    rule
  };
};
var includes = function(collection, item) {
  return collection.indexOf(item) !== -1;
};
var isEmptyArray = function(arr) {
  return Array.isArray(arr) && arr.length === 0;
};
var defineNonReactive = function(obj2, prop, value) {
  Object.defineProperty(obj2, prop, {
    configurable: false,
    writable: true,
    value
  });
};
var LOCALE = "en";
var Dictionary = function Dictionary2(dictionary) {
  if (dictionary === void 0)
    dictionary = {};
  this.container = {};
  this.merge(dictionary);
};
var prototypeAccessors = { locale: { configurable: true } };
prototypeAccessors.locale.get = function() {
  return LOCALE;
};
prototypeAccessors.locale.set = function(value) {
  LOCALE = value || "en";
};
Dictionary.prototype.hasLocale = function hasLocale(locale2) {
  return !!this.container[locale2];
};
Dictionary.prototype.setDateFormat = function setDateFormat(locale2, format2) {
  if (!this.container[locale2]) {
    this.container[locale2] = {};
  }
  this.container[locale2].dateFormat = format2;
};
Dictionary.prototype.getDateFormat = function getDateFormat(locale2) {
  if (!this.container[locale2] || !this.container[locale2].dateFormat) {
    return null;
  }
  return this.container[locale2].dateFormat;
};
Dictionary.prototype.getMessage = function getMessage(locale2, key, data2) {
  var message = null;
  if (!this.hasMessage(locale2, key)) {
    message = this._getDefaultMessage(locale2);
  } else {
    message = this.container[locale2].messages[key];
  }
  return isCallable(message) ? message.apply(void 0, data2) : message;
};
Dictionary.prototype.getFieldMessage = function getFieldMessage(locale2, field, key, data2) {
  if (!this.hasLocale(locale2)) {
    return this.getMessage(locale2, key, data2);
  }
  var dict = this.container[locale2].custom && this.container[locale2].custom[field];
  if (!dict || !dict[key]) {
    return this.getMessage(locale2, key, data2);
  }
  var message = dict[key];
  return isCallable(message) ? message.apply(void 0, data2) : message;
};
Dictionary.prototype._getDefaultMessage = function _getDefaultMessage(locale2) {
  if (this.hasMessage(locale2, "_default")) {
    return this.container[locale2].messages._default;
  }
  return this.container.en.messages._default;
};
Dictionary.prototype.getAttribute = function getAttribute(locale2, key, fallback) {
  if (fallback === void 0)
    fallback = "";
  if (!this.hasAttribute(locale2, key)) {
    return fallback;
  }
  return this.container[locale2].attributes[key];
};
Dictionary.prototype.hasMessage = function hasMessage(locale2, key) {
  return !!(this.hasLocale(locale2) && this.container[locale2].messages && this.container[locale2].messages[key]);
};
Dictionary.prototype.hasAttribute = function hasAttribute(locale2, key) {
  return !!(this.hasLocale(locale2) && this.container[locale2].attributes && this.container[locale2].attributes[key]);
};
Dictionary.prototype.merge = function merge$1(dictionary) {
  merge$2(this.container, dictionary);
};
Dictionary.prototype.setMessage = function setMessage(locale2, key, message) {
  if (!this.hasLocale(locale2)) {
    this.container[locale2] = {
      messages: {},
      attributes: {}
    };
  }
  if (!this.container[locale2].messages) {
    this.container[locale2].messages = {};
  }
  this.container[locale2].messages[key] = message;
};
Dictionary.prototype.setAttribute = function setAttribute(locale2, key, attribute) {
  if (!this.hasLocale(locale2)) {
    this.container[locale2] = {
      messages: {},
      attributes: {}
    };
  }
  this.container[locale2].attributes[key] = attribute;
};
Object.defineProperties(Dictionary.prototype, prototypeAccessors);
var drivers = {
  default: new Dictionary({
    en: {
      messages: {},
      attributes: {},
      custom: {}
    }
  })
};
var currentDriver = "default";
var DictionaryResolver = function DictionaryResolver2() {
};
DictionaryResolver._checkDriverName = function _checkDriverName(driver) {
  if (!driver) {
    throw createError("you must provide a name to the dictionary driver");
  }
};
DictionaryResolver.setDriver = function setDriver(driver, implementation) {
  if (implementation === void 0)
    implementation = null;
  this._checkDriverName(driver);
  if (implementation) {
    drivers[driver] = implementation;
  }
  currentDriver = driver;
};
DictionaryResolver.getDriver = function getDriver() {
  return drivers[currentDriver];
};
var ErrorBag = function ErrorBag2(errorBag, id2) {
  if (errorBag === void 0)
    errorBag = null;
  if (id2 === void 0)
    id2 = null;
  this.vmId = id2 || null;
  if (errorBag && errorBag instanceof ErrorBag2) {
    this.items = errorBag.items;
  } else {
    this.items = [];
  }
};
ErrorBag.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
  var this$1$1 = this;
  var index2 = 0;
  return {
    next: function() {
      return { value: this$1$1.items[index2++], done: index2 > this$1$1.items.length };
    }
  };
};
ErrorBag.prototype.add = function add2(error) {
  var ref2;
  (ref2 = this.items).push.apply(
    ref2,
    this._normalizeError(error)
  );
};
ErrorBag.prototype._normalizeError = function _normalizeError(error) {
  var this$1$1 = this;
  if (Array.isArray(error)) {
    return error.map(function(e) {
      e.scope = !isNullOrUndefined(e.scope) ? e.scope : null;
      e.vmId = !isNullOrUndefined(e.vmId) ? e.vmId : this$1$1.vmId || null;
      return e;
    });
  }
  error.scope = !isNullOrUndefined(error.scope) ? error.scope : null;
  error.vmId = !isNullOrUndefined(error.vmId) ? error.vmId : this.vmId || null;
  return [error];
};
ErrorBag.prototype.regenerate = function regenerate() {
  this.items.forEach(function(i) {
    i.msg = isCallable(i.regenerate) ? i.regenerate() : i.msg;
  });
};
ErrorBag.prototype.update = function update4(id2, error) {
  var item = find$1(this.items, function(i) {
    return i.id === id2;
  });
  if (!item) {
    return;
  }
  var idx = this.items.indexOf(item);
  this.items.splice(idx, 1);
  item.scope = error.scope;
  this.items.push(item);
};
ErrorBag.prototype.all = function all(scope) {
  var this$1$1 = this;
  var filterFn = function(item) {
    var matchesScope = true;
    var matchesVM = true;
    if (!isNullOrUndefined(scope)) {
      matchesScope = item.scope === scope;
    }
    if (!isNullOrUndefined(this$1$1.vmId)) {
      matchesVM = item.vmId === this$1$1.vmId;
    }
    return matchesVM && matchesScope;
  };
  return this.items.filter(filterFn).map(function(e) {
    return e.msg;
  });
};
ErrorBag.prototype.any = function any(scope) {
  var this$1$1 = this;
  var filterFn = function(item) {
    var matchesScope = true;
    var matchesVM = true;
    if (!isNullOrUndefined(scope)) {
      matchesScope = item.scope === scope;
    }
    if (!isNullOrUndefined(this$1$1.vmId)) {
      matchesVM = item.vmId === this$1$1.vmId;
    }
    return matchesVM && matchesScope;
  };
  return !!this.items.filter(filterFn).length;
};
ErrorBag.prototype.clear = function clear(scope) {
  var this$1$1 = this;
  var matchesVM = isNullOrUndefined(this.vmId) ? function() {
    return true;
  } : function(i2) {
    return i2.vmId === this$1$1.vmId;
  };
  var matchesScope = function(i2) {
    return i2.scope === scope;
  };
  if (arguments.length === 0) {
    matchesScope = function() {
      return true;
    };
  } else if (isNullOrUndefined(scope)) {
    scope = null;
  }
  for (var i = 0; i < this.items.length; ++i) {
    if (matchesVM(this.items[i]) && matchesScope(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};
ErrorBag.prototype.collect = function collect(field, scope, map2) {
  var this$1$1 = this;
  if (map2 === void 0)
    map2 = true;
  var isSingleField = !isNullOrUndefined(field) && !field.includes("*");
  var groupErrors = function(items) {
    var errors = items.reduce(function(collection, error) {
      if (!isNullOrUndefined(this$1$1.vmId) && error.vmId !== this$1$1.vmId) {
        return collection;
      }
      if (!collection[error.field]) {
        collection[error.field] = [];
      }
      collection[error.field].push(map2 ? error.msg : error);
      return collection;
    }, {});
    if (isSingleField) {
      return values(errors)[0] || [];
    }
    return errors;
  };
  if (isNullOrUndefined(field)) {
    return groupErrors(this.items);
  }
  var selector = isNullOrUndefined(scope) ? String(field) : scope + "." + field;
  var ref2 = this._makeCandidateFilters(selector);
  var isPrimary = ref2.isPrimary;
  var isAlt = ref2.isAlt;
  var collected = this.items.reduce(function(prev, curr) {
    if (isPrimary(curr)) {
      prev.primary.push(curr);
    }
    if (isAlt(curr)) {
      prev.alt.push(curr);
    }
    return prev;
  }, { primary: [], alt: [] });
  collected = collected.primary.length ? collected.primary : collected.alt;
  return groupErrors(collected);
};
ErrorBag.prototype.count = function count() {
  var this$1$1 = this;
  if (this.vmId) {
    return this.items.filter(function(e) {
      return e.vmId === this$1$1.vmId;
    }).length;
  }
  return this.items.length;
};
ErrorBag.prototype.firstById = function firstById(id2) {
  var error = find$1(this.items, function(i) {
    return i.id === id2;
  });
  return error ? error.msg : void 0;
};
ErrorBag.prototype.first = function first(field, scope) {
  if (scope === void 0)
    scope = null;
  var selector = isNullOrUndefined(scope) ? field : scope + "." + field;
  var match3 = this._match(selector);
  return match3 && match3.msg;
};
ErrorBag.prototype.firstRule = function firstRule(field, scope) {
  var errors = this.collect(field, scope, false);
  return errors.length && errors[0].rule || void 0;
};
ErrorBag.prototype.has = function has2(field, scope) {
  if (scope === void 0)
    scope = null;
  return !!this.first(field, scope);
};
ErrorBag.prototype.firstByRule = function firstByRule(name, rule, scope) {
  if (scope === void 0)
    scope = null;
  var error = this.collect(name, scope, false).filter(function(e) {
    return e.rule === rule;
  })[0];
  return error && error.msg || void 0;
};
ErrorBag.prototype.firstNot = function firstNot(name, rule, scope) {
  if (rule === void 0)
    rule = "required";
  if (scope === void 0)
    scope = null;
  var error = this.collect(name, scope, false).filter(function(e) {
    return e.rule !== rule;
  })[0];
  return error && error.msg || void 0;
};
ErrorBag.prototype.removeById = function removeById(id2) {
  var condition = function(item) {
    return item.id === id2;
  };
  if (Array.isArray(id2)) {
    condition = function(item) {
      return id2.indexOf(item.id) !== -1;
    };
  }
  for (var i = 0; i < this.items.length; ++i) {
    if (condition(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};
ErrorBag.prototype.remove = function remove2(field, scope, vmId) {
  if (isNullOrUndefined(field)) {
    return;
  }
  var selector = isNullOrUndefined(scope) ? String(field) : scope + "." + field;
  var ref2 = this._makeCandidateFilters(selector);
  var isPrimary = ref2.isPrimary;
  var isAlt = ref2.isAlt;
  var matches3 = function(item) {
    return isPrimary(item) || isAlt(item);
  };
  var shouldRemove = function(item) {
    if (isNullOrUndefined(vmId)) {
      return matches3(item);
    }
    return matches3(item) && item.vmId === vmId;
  };
  for (var i = 0; i < this.items.length; ++i) {
    if (shouldRemove(this.items[i])) {
      this.items.splice(i, 1);
      --i;
    }
  }
};
ErrorBag.prototype._makeCandidateFilters = function _makeCandidateFilters(selector) {
  var this$1$1 = this;
  var matchesRule = function() {
    return true;
  };
  var matchesScope = function() {
    return true;
  };
  var matchesName = function() {
    return true;
  };
  var matchesVM = function() {
    return true;
  };
  var ref2 = parseSelector(selector);
  var id2 = ref2.id;
  var rule = ref2.rule;
  var scope = ref2.scope;
  var name = ref2.name;
  if (rule) {
    matchesRule = function(item) {
      return item.rule === rule;
    };
  }
  if (id2) {
    return {
      isPrimary: function(item) {
        return matchesRule(item) && function(item2) {
          return id2 === item2.id;
        };
      },
      isAlt: function() {
        return false;
      }
    };
  }
  if (isNullOrUndefined(scope)) {
    matchesScope = function(item) {
      return isNullOrUndefined(item.scope);
    };
  } else {
    matchesScope = function(item) {
      return item.scope === scope;
    };
  }
  if (!isNullOrUndefined(name) && name !== "*") {
    matchesName = function(item) {
      return item.field === name;
    };
  }
  if (!isNullOrUndefined(this.vmId)) {
    matchesVM = function(item) {
      return item.vmId === this$1$1.vmId;
    };
  }
  var isPrimary = function(item) {
    return matchesVM(item) && matchesName(item) && matchesRule(item) && matchesScope(item);
  };
  var isAlt = function(item) {
    return matchesVM(item) && matchesRule(item) && item.field === scope + "." + name;
  };
  return {
    isPrimary,
    isAlt
  };
};
ErrorBag.prototype._match = function _match(selector) {
  if (isNullOrUndefined(selector)) {
    return void 0;
  }
  var ref2 = this._makeCandidateFilters(selector);
  var isPrimary = ref2.isPrimary;
  var isAlt = ref2.isAlt;
  return this.items.reduce(function(prev, item, idx, arr) {
    var isLast = idx === arr.length - 1;
    if (prev.primary) {
      return isLast ? prev.primary : prev;
    }
    if (isPrimary(item)) {
      prev.primary = item;
    }
    if (isAlt(item)) {
      prev.alt = item;
    }
    if (!isLast) {
      return prev;
    }
    return prev.primary || prev.alt;
  }, {});
};
var DEFAULT_CONFIG = {
  locale: "en",
  delay: 0,
  errorBagName: "errors",
  dictionary: null,
  fieldsBagName: "fields",
  classes: false,
  classNames: null,
  events: "input",
  inject: true,
  fastExit: true,
  aria: true,
  validity: false,
  mode: "aggressive",
  useConstraintAttrs: true,
  i18n: null,
  i18nRootKey: "validation"
};
var currentConfig = assign({}, DEFAULT_CONFIG);
var resolveConfig = function(ctx2) {
  var selfConfig = getPath("$options.$_veeValidate", ctx2, {});
  return assign({}, currentConfig, selfConfig);
};
var getConfig = function() {
  return currentConfig;
};
var setConfig = function(newConf) {
  currentConfig = assign({}, currentConfig, newConf);
};
function findModel(vnode) {
  if (!vnode.data) {
    return null;
  }
  if (vnode.data.model) {
    return vnode.data.model;
  }
  return !!vnode.data.directives && find$1(vnode.data.directives, function(d) {
    return d.name === "model";
  });
}
function extractChildren(vnode) {
  if (Array.isArray(vnode)) {
    return vnode;
  }
  if (Array.isArray(vnode.children)) {
    return vnode.children;
  }
  if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
    return vnode.componentOptions.children;
  }
  return [];
}
function extractVNodes(vnode) {
  if (findModel(vnode)) {
    return [vnode];
  }
  var children = extractChildren(vnode);
  return children.reduce(function(nodes, node) {
    var candidates = extractVNodes(node);
    if (candidates.length) {
      nodes.push.apply(nodes, candidates);
    }
    return nodes;
  }, []);
}
function findModelConfig(vnode) {
  if (!vnode.componentOptions) {
    return null;
  }
  return vnode.componentOptions.Ctor.options.model;
}
function mergeVNodeListeners(obj2, eventName, handler2) {
  if (isCallable(obj2[eventName])) {
    var prevHandler = obj2[eventName];
    obj2[eventName] = [prevHandler];
  }
  if (isNullOrUndefined(obj2[eventName])) {
    obj2[eventName] = [];
  }
  obj2[eventName].push(handler2);
}
function addNativeNodeListener(node, eventName, handler2) {
  if (isNullOrUndefined(node.data.on)) {
    node.data.on = {};
  }
  mergeVNodeListeners(node.data.on, eventName, handler2);
}
function addComponentNodeListener(node, eventName, handler2) {
  if (!node.componentOptions.listeners) {
    node.componentOptions.listeners = {};
  }
  mergeVNodeListeners(node.componentOptions.listeners, eventName, handler2);
}
function addVNodeListener(vnode, eventName, handler2) {
  if (vnode.componentOptions) {
    addComponentNodeListener(vnode, eventName, handler2);
    return;
  }
  addNativeNodeListener(vnode, eventName, handler2);
}
function getInputEventName(vnode, model) {
  if (vnode.componentOptions) {
    var ref2 = findModelConfig(vnode) || { event: "input" };
    var event = ref2.event;
    return event;
  }
  if (model && model.modifiers && model.modifiers.lazy || vnode.tag === "select") {
    return "change";
  }
  if (vnode.data.attrs && isTextInput({ type: vnode.data.attrs.type || "text" })) {
    return "input";
  }
  return "change";
}
function normalizeSlots(slots, ctx2) {
  return Object.keys(slots).reduce(function(arr, key) {
    slots[key].forEach(function(vnode) {
      if (!vnode.context) {
        slots[key].context = ctx2;
        if (!vnode.data) {
          vnode.data = {};
        }
        vnode.data.slot = key;
      }
    });
    return arr.concat(slots[key]);
  }, []);
}
function createRenderless(h, children) {
  if (Array.isArray(children) && children[0]) {
    return children[0];
  }
  if (children) {
    return children;
  }
  return h();
}
var Resolver = function Resolver2() {
};
Resolver.generate = function generate(el, binding, vnode) {
  var model = Resolver.resolveModel(binding, vnode);
  var options2 = resolveConfig(vnode.context);
  return {
    name: Resolver.resolveName(el, vnode),
    el,
    listen: !binding.modifiers.disable,
    bails: binding.modifiers.bails ? true : binding.modifiers.continues === true ? false : void 0,
    scope: Resolver.resolveScope(el, binding, vnode),
    vm: vnode.context,
    expression: binding.value,
    component: vnode.componentInstance,
    classes: options2.classes,
    classNames: options2.classNames,
    getter: Resolver.resolveGetter(el, vnode, model),
    events: Resolver.resolveEvents(el, vnode) || options2.events,
    model,
    delay: Resolver.resolveDelay(el, vnode, options2),
    rules: Resolver.resolveRules(el, binding, vnode),
    immediate: !!binding.modifiers.initial || !!binding.modifiers.immediate,
    persist: !!binding.modifiers.persist,
    validity: options2.validity && !vnode.componentInstance,
    aria: options2.aria && !vnode.componentInstance,
    initialValue: Resolver.resolveInitialValue(vnode)
  };
};
Resolver.getCtorConfig = function getCtorConfig(vnode) {
  if (!vnode.componentInstance) {
    return null;
  }
  var config2 = getPath("componentInstance.$options.$_veeValidate", vnode);
  return config2;
};
Resolver.resolveRules = function resolveRules(el, binding, vnode) {
  var rules = "";
  if (!binding.value && (!binding || !binding.expression)) {
    rules = getDataAttribute(el, "rules");
  }
  if (binding.value && includes(["string", "object"], typeof binding.value.rules)) {
    rules = binding.value.rules;
  } else if (binding.value) {
    rules = binding.value;
  }
  if (vnode.componentInstance) {
    return rules;
  }
  var normalized = normalizeRules(rules);
  if (!getConfig().useConstraintAttrs) {
    return normalized;
  }
  return assign({}, fillRulesFromElement(el, {}), normalized);
};
Resolver.resolveInitialValue = function resolveInitialValue(vnode) {
  var model = vnode.data.model || find$1(vnode.data.directives, function(d) {
    return d.name === "model";
  });
  return model && model.value;
};
Resolver.resolveDelay = function resolveDelay(el, vnode, options2) {
  var delay = getDataAttribute(el, "delay");
  var globalDelay = options2 && "delay" in options2 ? options2.delay : 0;
  if (!delay && vnode.componentInstance && vnode.componentInstance.$attrs) {
    delay = vnode.componentInstance.$attrs["data-vv-delay"];
  }
  if (!isObject$8(globalDelay)) {
    return deepParseInt(delay || globalDelay);
  }
  if (!isNullOrUndefined(delay)) {
    globalDelay.input = delay;
  }
  return deepParseInt(globalDelay);
};
Resolver.resolveEvents = function resolveEvents(el, vnode) {
  var events2 = getDataAttribute(el, "validate-on");
  if (!events2 && vnode.componentInstance && vnode.componentInstance.$attrs) {
    events2 = vnode.componentInstance.$attrs["data-vv-validate-on"];
  }
  if (!events2 && vnode.componentInstance) {
    var config2 = Resolver.getCtorConfig(vnode);
    events2 = config2 && config2.events;
  }
  if (!events2 && getConfig().events) {
    events2 = getConfig().events;
  }
  if (events2 && vnode.componentInstance && includes(events2, "input")) {
    var ref2 = vnode.componentInstance.$options.model || { event: "input" };
    var event = ref2.event;
    if (!event) {
      return events2;
    }
    events2 = events2.replace("input", event);
  }
  return events2;
};
Resolver.resolveScope = function resolveScope(el, binding, vnode) {
  if (vnode === void 0)
    vnode = {};
  var scope = null;
  if (vnode.componentInstance && isNullOrUndefined(scope)) {
    scope = vnode.componentInstance.$attrs && vnode.componentInstance.$attrs["data-vv-scope"];
  }
  return !isNullOrUndefined(scope) ? scope : getScope(el);
};
Resolver.resolveModel = function resolveModel(binding, vnode) {
  if (binding.arg) {
    return { expression: binding.arg };
  }
  var model = findModel(vnode);
  if (!model) {
    return null;
  }
  var watchable = !/[^\w.$]/.test(model.expression) && hasPath(model.expression, vnode.context);
  var lazy2 = !!(model.modifiers && model.modifiers.lazy);
  if (!watchable) {
    return { expression: null, lazy: lazy2 };
  }
  return { expression: model.expression, lazy: lazy2 };
};
Resolver.resolveName = function resolveName(el, vnode) {
  var name = getDataAttribute(el, "name");
  if (!name && !vnode.componentInstance) {
    return el.name;
  }
  if (!name && vnode.componentInstance && vnode.componentInstance.$attrs) {
    name = vnode.componentInstance.$attrs["data-vv-name"] || vnode.componentInstance.$attrs["name"];
  }
  if (!name && vnode.componentInstance) {
    var config2 = Resolver.getCtorConfig(vnode);
    if (config2 && isCallable(config2.name)) {
      var boundGetter = config2.name.bind(vnode.componentInstance);
      return boundGetter();
    }
    return vnode.componentInstance.name;
  }
  return name;
};
Resolver.resolveGetter = function resolveGetter(el, vnode, model) {
  if (model && model.expression) {
    return function() {
      return getPath(model.expression, vnode.context);
    };
  }
  if (vnode.componentInstance) {
    var path = getDataAttribute(el, "value-path") || vnode.componentInstance.$attrs && vnode.componentInstance.$attrs["data-vv-value-path"];
    if (path) {
      return function() {
        return getPath(path, vnode.componentInstance);
      };
    }
    var config2 = Resolver.getCtorConfig(vnode);
    if (config2 && isCallable(config2.value)) {
      var boundGetter = config2.value.bind(vnode.componentInstance);
      return function() {
        return boundGetter();
      };
    }
    var ref2 = vnode.componentInstance.$options.model || { prop: "value" };
    var prop = ref2.prop;
    return function() {
      return vnode.componentInstance[prop];
    };
  }
  switch (el.type) {
    case "checkbox":
      return function() {
        var els = document.querySelectorAll('input[name="' + el.name + '"]');
        els = toArray(els).filter(function(el2) {
          return el2.checked;
        });
        if (!els.length) {
          return void 0;
        }
        return els.map(function(checkbox) {
          return checkbox.value;
        });
      };
    case "radio":
      return function() {
        var els = document.querySelectorAll('input[name="' + el.name + '"]');
        var elm = find$1(els, function(el2) {
          return el2.checked;
        });
        return elm && elm.value;
      };
    case "file":
      return function(context) {
        return toArray(el.files);
      };
    case "select-multiple":
      return function() {
        return toArray(el.options).filter(function(opt) {
          return opt.selected;
        }).map(function(opt) {
          return opt.value;
        });
      };
    default:
      return function() {
        return el && el.value;
      };
  }
};
var RULES = {};
var RuleContainer = function RuleContainer2() {
};
var staticAccessors = { rules: { configurable: true } };
RuleContainer.add = function add3(name, ref2) {
  var validate6 = ref2.validate;
  var options2 = ref2.options;
  var paramNames2 = ref2.paramNames;
  RULES[name] = {
    validate: validate6,
    options: options2,
    paramNames: paramNames2
  };
};
staticAccessors.rules.get = function() {
  return RULES;
};
RuleContainer.has = function has3(name) {
  return !!RULES[name];
};
RuleContainer.isImmediate = function isImmediate(name) {
  return !!(RULES[name] && RULES[name].options.immediate);
};
RuleContainer.isRequireRule = function isRequireRule(name) {
  return !!(RULES[name] && RULES[name].options.computesRequired);
};
RuleContainer.isTargetRule = function isTargetRule(name) {
  return !!(RULES[name] && RULES[name].options.hasTarget);
};
RuleContainer.remove = function remove3(ruleName) {
  delete RULES[ruleName];
};
RuleContainer.getParamNames = function getParamNames(ruleName) {
  return RULES[ruleName] && RULES[ruleName].paramNames;
};
RuleContainer.getOptions = function getOptions(ruleName) {
  return RULES[ruleName] && RULES[ruleName].options;
};
RuleContainer.getValidatorMethod = function getValidatorMethod(ruleName) {
  return RULES[ruleName] ? RULES[ruleName].validate : null;
};
Object.defineProperties(RuleContainer, staticAccessors);
var isEvent = function(evt) {
  return typeof Event !== "undefined" && isCallable(Event) && evt instanceof Event || evt && evt.srcElement;
};
var normalizeEvents = function(evts) {
  if (!evts) {
    return [];
  }
  return typeof evts === "string" ? evts.split("|") : evts;
};
var supportsPassive$1 = true;
var detectPassiveSupport = function() {
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get3() {
        supportsPassive$1 = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {
    supportsPassive$1 = false;
  }
  return supportsPassive$1;
};
var addEventListener = function(el, eventName, cb) {
  el.addEventListener(eventName, cb, supportsPassive$1 ? { passive: true } : false);
};
var DEFAULT_OPTIONS$1 = {
  targetOf: null,
  immediate: false,
  persist: false,
  scope: null,
  listen: true,
  name: null,
  rules: {},
  vm: null,
  classes: false,
  validity: true,
  aria: true,
  events: "input|blur",
  delay: 0,
  classNames: {
    touched: "touched",
    // the control has been blurred
    untouched: "untouched",
    // the control hasn't been blurred
    valid: "valid",
    // model is valid
    invalid: "invalid",
    // model is invalid
    pristine: "pristine",
    // control has not been interacted with
    dirty: "dirty"
    // control has been interacted with
  }
};
var Field = function Field2(options2) {
  if (options2 === void 0)
    options2 = {};
  this.id = uniqId();
  this.el = options2.el;
  this.updated = false;
  this.vmId = options2.vmId;
  defineNonReactive(this, "dependencies", []);
  defineNonReactive(this, "watchers", []);
  defineNonReactive(this, "events", []);
  this.delay = 0;
  this.rules = {};
  this.forceRequired = false;
  this._cacheId(options2);
  this.classNames = assign({}, DEFAULT_OPTIONS$1.classNames);
  options2 = assign({}, DEFAULT_OPTIONS$1, options2);
  this._delay = !isNullOrUndefined(options2.delay) ? options2.delay : 0;
  this.validity = options2.validity;
  this.aria = options2.aria;
  this.flags = options2.flags || createFlags();
  defineNonReactive(this, "vm", options2.vm);
  defineNonReactive(this, "componentInstance", options2.component);
  this.ctorConfig = this.componentInstance ? getPath("$options.$_veeValidate", this.componentInstance) : void 0;
  this.update(options2);
  this.initialValue = this.value;
  this.updated = false;
};
var prototypeAccessors$1 = { validator: { configurable: true }, isRequired: { configurable: true }, isDisabled: { configurable: true }, alias: { configurable: true }, value: { configurable: true }, bails: { configurable: true }, rejectsFalse: { configurable: true } };
prototypeAccessors$1.validator.get = function() {
  if (!this.vm || !this.vm.$validator) {
    return { validate: function() {
      return Promise.resolve(true);
    } };
  }
  return this.vm.$validator;
};
prototypeAccessors$1.isRequired.get = function() {
  return !!this.rules.required || this.forceRequired;
};
prototypeAccessors$1.isDisabled.get = function() {
  return !!(this.el && this.el.disabled);
};
prototypeAccessors$1.alias.get = function() {
  if (this._alias) {
    return this._alias;
  }
  var alias = null;
  if (this.ctorConfig && this.ctorConfig.alias) {
    alias = isCallable(this.ctorConfig.alias) ? this.ctorConfig.alias.call(this.componentInstance) : this.ctorConfig.alias;
  }
  if (!alias && this.el) {
    alias = getDataAttribute(this.el, "as");
  }
  if (!alias && this.componentInstance) {
    return this.componentInstance.$attrs && this.componentInstance.$attrs["data-vv-as"];
  }
  return alias;
};
prototypeAccessors$1.value.get = function() {
  if (!isCallable(this.getter)) {
    return void 0;
  }
  return this.getter();
};
prototypeAccessors$1.bails.get = function() {
  return this._bails;
};
prototypeAccessors$1.rejectsFalse.get = function() {
  if (this.componentInstance && this.ctorConfig) {
    return !!this.ctorConfig.rejectsFalse;
  }
  if (!this.el) {
    return false;
  }
  return this.el.type === "checkbox";
};
Field.prototype.matches = function matches2(options2) {
  var this$1$1 = this;
  if (!options2) {
    return true;
  }
  if (options2.id) {
    return this.id === options2.id;
  }
  var matchesComponentId = isNullOrUndefined(options2.vmId) ? function() {
    return true;
  } : function(id2) {
    return id2 === this$1$1.vmId;
  };
  if (!matchesComponentId(options2.vmId)) {
    return false;
  }
  if (options2.name === void 0 && options2.scope === void 0) {
    return true;
  }
  if (options2.scope === void 0) {
    return this.name === options2.name;
  }
  if (options2.name === void 0) {
    return this.scope === options2.scope;
  }
  return options2.name === this.name && options2.scope === this.scope;
};
Field.prototype._cacheId = function _cacheId(options2) {
  if (this.el && !options2.targetOf) {
    this.el._veeValidateId = this.id;
  }
};
Field.prototype.waitFor = function waitFor(pendingPromise) {
  this._waitingFor = pendingPromise;
};
Field.prototype.isWaitingFor = function isWaitingFor(promise) {
  return this._waitingFor === promise;
};
Field.prototype.update = function update5(options2) {
  var this$1$1 = this;
  this.targetOf = options2.targetOf || null;
  this.immediate = options2.immediate || this.immediate || false;
  this.persist = options2.persist || this.persist || false;
  if (!isNullOrUndefined(options2.scope) && options2.scope !== this.scope && isCallable(this.validator.update)) {
    this.validator.update(this.id, { scope: options2.scope });
  }
  this.scope = !isNullOrUndefined(options2.scope) ? options2.scope : !isNullOrUndefined(this.scope) ? this.scope : null;
  this.name = (!isNullOrUndefined(options2.name) ? String(options2.name) : options2.name) || this.name || null;
  this.rules = options2.rules !== void 0 ? normalizeRules(options2.rules) : this.rules;
  this._bails = options2.bails !== void 0 ? options2.bails : this._bails;
  this.model = options2.model || this.model;
  this.listen = options2.listen !== void 0 ? options2.listen : this.listen;
  this.classes = (options2.classes || this.classes || false) && !this.componentInstance;
  this.classNames = isObject$8(options2.classNames) ? merge$2(this.classNames, options2.classNames) : this.classNames;
  this.getter = isCallable(options2.getter) ? options2.getter : this.getter;
  this._alias = options2.alias || this._alias;
  this.events = options2.events ? normalizeEvents(options2.events) : this.events;
  this.delay = makeDelayObject(this.events, options2.delay || this.delay, this._delay);
  this.updateDependencies();
  this.addActionListeners();
  if (options2.rules !== void 0) {
    this.flags.required = this.isRequired;
  }
  if (Object.keys(options2.rules || {}).length === 0 && this.updated) {
    var resetFlag = this.flags.validated;
    this.validator.validate("#" + this.id).then(function() {
      this$1$1.flags.validated = resetFlag;
    });
  }
  if (this.flags.validated && options2.rules !== void 0 && this.updated) {
    this.validator.validate("#" + this.id);
  }
  this.updated = true;
  this.addValueListeners();
  if (!this.el) {
    return;
  }
  this.updateClasses();
  this.updateAriaAttrs();
};
Field.prototype.reset = function reset() {
  var this$1$1 = this;
  if (this._cancellationToken) {
    this._cancellationToken.cancelled = true;
    delete this._cancellationToken;
  }
  var defaults = createFlags();
  Object.keys(this.flags).filter(function(flag3) {
    return flag3 !== "required";
  }).forEach(function(flag3) {
    this$1$1.flags[flag3] = defaults[flag3];
  });
  this.initialValue = this.value;
  this.flags.changed = false;
  this.addValueListeners();
  this.addActionListeners();
  this.updateClasses(true);
  this.updateAriaAttrs();
  this.updateCustomValidity();
};
Field.prototype.setFlags = function setFlags(flags2) {
  var this$1$1 = this;
  var negated = {
    pristine: "dirty",
    dirty: "pristine",
    valid: "invalid",
    invalid: "valid",
    touched: "untouched",
    untouched: "touched"
  };
  Object.keys(flags2).forEach(function(flag3) {
    this$1$1.flags[flag3] = flags2[flag3];
    if (negated[flag3] && flags2[negated[flag3]] === void 0) {
      this$1$1.flags[negated[flag3]] = !flags2[flag3];
    }
  });
  if (flags2.untouched !== void 0 || flags2.touched !== void 0 || flags2.dirty !== void 0 || flags2.pristine !== void 0) {
    this.addActionListeners();
  }
  this.updateClasses();
  this.updateAriaAttrs();
  this.updateCustomValidity();
};
Field.prototype.updateDependencies = function updateDependencies() {
  var this$1$1 = this;
  this.dependencies.forEach(function(d) {
    return d.field.destroy();
  });
  this.dependencies = [];
  var fields = Object.keys(this.rules).reduce(function(prev, r) {
    if (RuleContainer.isTargetRule(r)) {
      prev.push({ selector: this$1$1.rules[r][0], name: r });
    }
    return prev;
  }, []);
  if (!fields.length || !this.vm || !this.vm.$el) {
    return;
  }
  fields.forEach(function(ref$1) {
    var selector = ref$1.selector;
    var name = ref$1.name;
    var ref2 = this$1$1.vm.$refs[selector];
    var el = Array.isArray(ref2) ? ref2[0] : ref2;
    if (!el) {
      return;
    }
    var options2 = {
      vm: this$1$1.vm,
      classes: this$1$1.classes,
      classNames: this$1$1.classNames,
      delay: this$1$1.delay,
      scope: this$1$1.scope,
      events: this$1$1.events.join("|"),
      immediate: this$1$1.immediate,
      targetOf: this$1$1.id
    };
    if (isCallable(el.$watch)) {
      options2.component = el;
      options2.el = el.$el;
      options2.getter = Resolver.resolveGetter(el.$el, el.$vnode);
    } else {
      options2.el = el;
      options2.getter = Resolver.resolveGetter(el, {});
    }
    this$1$1.dependencies.push({ name, field: new Field(options2) });
  });
};
Field.prototype.unwatch = function unwatch(tag) {
  if (tag === void 0)
    tag = null;
  if (!tag) {
    this.watchers.forEach(function(w) {
      return w.unwatch();
    });
    this.watchers = [];
    return;
  }
  this.watchers.filter(function(w) {
    return tag.test(w.tag);
  }).forEach(function(w) {
    return w.unwatch();
  });
  this.watchers = this.watchers.filter(function(w) {
    return !tag.test(w.tag);
  });
};
Field.prototype.updateClasses = function updateClasses(isReset) {
  var this$1$1 = this;
  if (isReset === void 0)
    isReset = false;
  if (!this.classes || this.isDisabled) {
    return;
  }
  var applyClasses = function(el) {
    toggleClass(el, this$1$1.classNames.dirty, this$1$1.flags.dirty);
    toggleClass(el, this$1$1.classNames.pristine, this$1$1.flags.pristine);
    toggleClass(el, this$1$1.classNames.touched, this$1$1.flags.touched);
    toggleClass(el, this$1$1.classNames.untouched, this$1$1.flags.untouched);
    if (isReset) {
      toggleClass(el, this$1$1.classNames.valid, false);
      toggleClass(el, this$1$1.classNames.invalid, false);
    }
    if (!isNullOrUndefined(this$1$1.flags.valid) && this$1$1.flags.validated) {
      toggleClass(el, this$1$1.classNames.valid, this$1$1.flags.valid);
    }
    if (!isNullOrUndefined(this$1$1.flags.invalid) && this$1$1.flags.validated) {
      toggleClass(el, this$1$1.classNames.invalid, this$1$1.flags.invalid);
    }
  };
  if (!isCheckboxOrRadioInput(this.el)) {
    applyClasses(this.el);
    return;
  }
  var els = document.querySelectorAll('input[name="' + this.el.name + '"]');
  toArray(els).forEach(applyClasses);
};
Field.prototype.addActionListeners = function addActionListeners() {
  var this$1$1 = this;
  this.unwatch(/class/);
  if (!this.el) {
    return;
  }
  var onBlur = function() {
    this$1$1.flags.touched = true;
    this$1$1.flags.untouched = false;
    if (this$1$1.classes) {
      toggleClass(this$1$1.el, this$1$1.classNames.touched, true);
      toggleClass(this$1$1.el, this$1$1.classNames.untouched, false);
    }
    this$1$1.unwatch(/^class_blur$/);
  };
  var inputEvent = isTextInput(this.el) ? "input" : "change";
  var onInput = function() {
    this$1$1.flags.dirty = true;
    this$1$1.flags.pristine = false;
    if (this$1$1.classes) {
      toggleClass(this$1$1.el, this$1$1.classNames.pristine, false);
      toggleClass(this$1$1.el, this$1$1.classNames.dirty, true);
    }
    this$1$1.unwatch(/^class_input$/);
  };
  if (this.componentInstance && isCallable(this.componentInstance.$once)) {
    this.componentInstance.$once("input", onInput);
    this.componentInstance.$once("blur", onBlur);
    this.watchers.push({
      tag: "class_input",
      unwatch: function() {
        this$1$1.componentInstance.$off("input", onInput);
      }
    });
    this.watchers.push({
      tag: "class_blur",
      unwatch: function() {
        this$1$1.componentInstance.$off("blur", onBlur);
      }
    });
    return;
  }
  if (!this.el) {
    return;
  }
  addEventListener(this.el, inputEvent, onInput);
  var blurEvent = isCheckboxOrRadioInput(this.el) ? "change" : "blur";
  addEventListener(this.el, blurEvent, onBlur);
  this.watchers.push({
    tag: "class_input",
    unwatch: function() {
      this$1$1.el.removeEventListener(inputEvent, onInput);
    }
  });
  this.watchers.push({
    tag: "class_blur",
    unwatch: function() {
      this$1$1.el.removeEventListener(blurEvent, onBlur);
    }
  });
};
Field.prototype.checkValueChanged = function checkValueChanged() {
  if (this.initialValue === null && this.value === "" && isTextInput(this.el)) {
    return false;
  }
  return this.value !== this.initialValue;
};
Field.prototype._determineInputEvent = function _determineInputEvent() {
  if (this.componentInstance) {
    return this.componentInstance.$options.model && this.componentInstance.$options.model.event || "input";
  }
  if (this.model && this.model.lazy) {
    return "change";
  }
  if (isTextInput(this.el)) {
    return "input";
  }
  return "change";
};
Field.prototype._determineEventList = function _determineEventList(defaultInputEvent) {
  var this$1$1 = this;
  if (!this.events.length || this.componentInstance || isTextInput(this.el)) {
    return [].concat(this.events).map(function(evt) {
      if (evt === "input" && this$1$1.model && this$1$1.model.lazy) {
        return "change";
      }
      return evt;
    });
  }
  return this.events.map(function(e) {
    if (e === "input") {
      return defaultInputEvent;
    }
    return e;
  });
};
Field.prototype.addValueListeners = function addValueListeners() {
  var this$1$1 = this;
  this.unwatch(/^input_.+/);
  if (!this.listen || !this.el) {
    return;
  }
  var token = { cancelled: false };
  var fn = this.targetOf ? function() {
    var target2 = this$1$1.validator._resolveField("#" + this$1$1.targetOf);
    if (target2 && target2.flags.validated) {
      this$1$1.validator.validate("#" + this$1$1.targetOf);
    }
  } : function() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    if (args.length === 0 || isEvent(args[0])) {
      args[0] = this$1$1.value;
    }
    this$1$1.flags.pending = true;
    this$1$1._cancellationToken = token;
    this$1$1.validator.validate("#" + this$1$1.id, args[0]);
  };
  var inputEvent = this._determineInputEvent();
  var events2 = this._determineEventList(inputEvent);
  if (includes(events2, inputEvent)) {
    var ctx2 = null;
    var expression = null;
    var watchCtxVm = false;
    if (this.model && this.model.expression) {
      ctx2 = this.vm;
      expression = this.model.expression;
      watchCtxVm = true;
    }
    if (!expression && this.componentInstance && this.componentInstance.$options.model) {
      ctx2 = this.componentInstance;
      expression = this.componentInstance.$options.model.prop || "value";
    }
    if (ctx2 && expression) {
      var debouncedFn = debounce$1(fn, this.delay[inputEvent], token);
      var unwatch2 = ctx2.$watch(expression, debouncedFn);
      this.watchers.push({
        tag: "input_model",
        unwatch: function() {
          this$1$1.vm.$nextTick(function() {
            unwatch2();
          });
        }
      });
      if (watchCtxVm) {
        events2 = events2.filter(function(e) {
          return e !== inputEvent;
        });
      }
    }
  }
  events2.forEach(function(e) {
    var debouncedFn2 = debounce$1(fn, this$1$1.delay[e], token);
    this$1$1._addComponentEventListener(e, debouncedFn2);
    this$1$1._addHTMLEventListener(e, debouncedFn2);
  });
};
Field.prototype._addComponentEventListener = function _addComponentEventListener(evt, validate6) {
  var this$1$1 = this;
  if (!this.componentInstance) {
    return;
  }
  this.componentInstance.$on(evt, validate6);
  this.watchers.push({
    tag: "input_vue",
    unwatch: function() {
      this$1$1.componentInstance.$off(evt, validate6);
    }
  });
};
Field.prototype._addHTMLEventListener = function _addHTMLEventListener(evt, validate6) {
  var this$1$1 = this;
  if (!this.el || this.componentInstance) {
    return;
  }
  var addListener = function(el) {
    addEventListener(el, evt, validate6);
    this$1$1.watchers.push({
      tag: "input_native",
      unwatch: function() {
        el.removeEventListener(evt, validate6);
      }
    });
  };
  addListener(this.el);
  if (!isCheckboxOrRadioInput(this.el)) {
    return;
  }
  var els = document.querySelectorAll('input[name="' + this.el.name + '"]');
  toArray(els).forEach(function(el) {
    if (el._veeValidateId && el !== this$1$1.el) {
      return;
    }
    addListener(el);
  });
};
Field.prototype.updateAriaAttrs = function updateAriaAttrs() {
  var this$1$1 = this;
  if (!this.aria || !this.el || !isCallable(this.el.setAttribute)) {
    return;
  }
  var applyAriaAttrs = function(el) {
    el.setAttribute("aria-required", this$1$1.isRequired ? "true" : "false");
    el.setAttribute("aria-invalid", this$1$1.flags.invalid ? "true" : "false");
  };
  if (!isCheckboxOrRadioInput(this.el)) {
    applyAriaAttrs(this.el);
    return;
  }
  var els = document.querySelectorAll('input[name="' + this.el.name + '"]');
  toArray(els).forEach(applyAriaAttrs);
};
Field.prototype.updateCustomValidity = function updateCustomValidity() {
  if (!this.validity || !this.el || !isCallable(this.el.setCustomValidity) || !this.validator.errors) {
    return;
  }
  this.el.setCustomValidity(this.flags.valid ? "" : this.validator.errors.firstById(this.id) || "");
};
Field.prototype.destroy = function destroy3() {
  if (this._cancellationToken) {
    this._cancellationToken.cancelled = true;
  }
  this.unwatch();
  this.dependencies.forEach(function(d) {
    return d.field.destroy();
  });
  this.dependencies = [];
};
Object.defineProperties(Field.prototype, prototypeAccessors$1);
var FieldBag = function FieldBag2(items) {
  if (items === void 0)
    items = [];
  this.items = items || [];
  this.itemsById = this.items.reduce(function(itemsById, item) {
    itemsById[item.id] = item;
    return itemsById;
  }, {});
};
var prototypeAccessors$2 = { length: { configurable: true } };
FieldBag.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
  var this$1$1 = this;
  var index2 = 0;
  return {
    next: function() {
      return { value: this$1$1.items[index2++], done: index2 > this$1$1.items.length };
    }
  };
};
prototypeAccessors$2.length.get = function() {
  return this.items.length;
};
FieldBag.prototype.find = function find$1$1(matcher) {
  return find$1(this.items, function(item) {
    return item.matches(matcher);
  });
};
FieldBag.prototype.findById = function findById(id2) {
  return this.itemsById[id2] || null;
};
FieldBag.prototype.filter = function filter(matcher) {
  if (Array.isArray(matcher)) {
    return this.items.filter(function(item) {
      return matcher.some(function(m) {
        return item.matches(m);
      });
    });
  }
  return this.items.filter(function(item) {
    return item.matches(matcher);
  });
};
FieldBag.prototype.map = function map(mapper) {
  return this.items.map(mapper);
};
FieldBag.prototype.remove = function remove4(matcher) {
  var item = null;
  if (matcher instanceof Field) {
    item = matcher;
  } else {
    item = this.find(matcher);
  }
  if (!item) {
    return null;
  }
  var index2 = this.items.indexOf(item);
  this.items.splice(index2, 1);
  delete this.itemsById[item.id];
  return item;
};
FieldBag.prototype.push = function push2(item) {
  if (!(item instanceof Field)) {
    throw createError("FieldBag only accepts instances of Field that has an id defined.");
  }
  if (!item.id) {
    throw createError("Field id must be defined.");
  }
  if (this.findById(item.id)) {
    throw createError("Field with id " + item.id + " is already added.");
  }
  this.items.push(item);
  this.itemsById[item.id] = item;
};
Object.defineProperties(FieldBag.prototype, prototypeAccessors$2);
var ScopedValidator = function ScopedValidator2(base, vm) {
  this.id = vm._uid;
  this._base = base;
  this._paused = false;
  this.errors = new ErrorBag(base.errors, this.id);
};
var prototypeAccessors$3 = { flags: { configurable: true }, rules: { configurable: true }, fields: { configurable: true }, dictionary: { configurable: true }, locale: { configurable: true } };
prototypeAccessors$3.flags.get = function() {
  var this$1$1 = this;
  return this._base.fields.items.filter(function(f) {
    return f.vmId === this$1$1.id;
  }).reduce(function(acc, field) {
    if (field.scope) {
      if (!acc["$" + field.scope]) {
        acc["$" + field.scope] = {};
      }
      acc["$" + field.scope][field.name] = field.flags;
    }
    acc[field.name] = field.flags;
    return acc;
  }, {});
};
prototypeAccessors$3.rules.get = function() {
  return this._base.rules;
};
prototypeAccessors$3.fields.get = function() {
  return new FieldBag(this._base.fields.filter({ vmId: this.id }));
};
prototypeAccessors$3.dictionary.get = function() {
  return this._base.dictionary;
};
prototypeAccessors$3.locale.get = function() {
  return this._base.locale;
};
prototypeAccessors$3.locale.set = function(val) {
  this._base.locale = val;
};
ScopedValidator.prototype.localize = function localize() {
  var ref2;
  var args = [], len = arguments.length;
  while (len--)
    args[len] = arguments[len];
  return (ref2 = this._base).localize.apply(ref2, args);
};
ScopedValidator.prototype.update = function update6() {
  var ref2;
  var args = [], len = arguments.length;
  while (len--)
    args[len] = arguments[len];
  return (ref2 = this._base).update.apply(ref2, args);
};
ScopedValidator.prototype.attach = function attach(opts) {
  var attachOpts = assign({}, opts, { vmId: this.id });
  return this._base.attach(attachOpts);
};
ScopedValidator.prototype.pause = function pause() {
  this._paused = true;
};
ScopedValidator.prototype.resume = function resume() {
  this._paused = false;
};
ScopedValidator.prototype.remove = function remove5(ruleName) {
  return this._base.remove(ruleName);
};
ScopedValidator.prototype.detach = function detach(name, scope) {
  return this._base.detach(name, scope, this.id);
};
ScopedValidator.prototype.extend = function extend2() {
  var ref2;
  var args = [], len = arguments.length;
  while (len--)
    args[len] = arguments[len];
  return (ref2 = this._base).extend.apply(ref2, args);
};
ScopedValidator.prototype.validate = function validate(descriptor, value, opts) {
  if (opts === void 0)
    opts = {};
  if (this._paused) {
    return Promise.resolve(true);
  }
  return this._base.validate(descriptor, value, assign({}, { vmId: this.id }, opts || {}));
};
ScopedValidator.prototype.verify = function verify() {
  var ref2;
  var args = [], len = arguments.length;
  while (len--)
    args[len] = arguments[len];
  return (ref2 = this._base).verify.apply(ref2, args);
};
ScopedValidator.prototype.validateAll = function validateAll(values2, opts) {
  if (opts === void 0)
    opts = {};
  if (this._paused) {
    return Promise.resolve(true);
  }
  return this._base.validateAll(values2, assign({}, { vmId: this.id }, opts || {}));
};
ScopedValidator.prototype.validateScopes = function validateScopes(opts) {
  if (opts === void 0)
    opts = {};
  if (this._paused) {
    return Promise.resolve(true);
  }
  return this._base.validateScopes(assign({}, { vmId: this.id }, opts || {}));
};
ScopedValidator.prototype.destroy = function destroy4() {
  delete this.id;
  delete this._base;
};
ScopedValidator.prototype.reset = function reset2(matcher) {
  return this._base.reset(Object.assign({}, matcher || {}, { vmId: this.id }));
};
ScopedValidator.prototype.flag = function flag() {
  var ref2;
  var args = [], len = arguments.length;
  while (len--)
    args[len] = arguments[len];
  return (ref2 = this._base).flag.apply(ref2, args.concat([this.id]));
};
ScopedValidator.prototype._resolveField = function _resolveField() {
  var ref2;
  var args = [], len = arguments.length;
  while (len--)
    args[len] = arguments[len];
  return (ref2 = this._base)._resolveField.apply(ref2, args);
};
Object.defineProperties(ScopedValidator.prototype, prototypeAccessors$3);
var VALIDATOR = null;
var getValidator = function() {
  return VALIDATOR;
};
var setValidator = function(value) {
  VALIDATOR = value;
  return value;
};
var requestsValidator = function(injections) {
  if (isObject$8(injections) && injections.$validator) {
    return true;
  }
  return false;
};
var mixin = {
  provide: function provide() {
    if (this.$validator && !isBuiltInComponent(this.$vnode)) {
      return {
        $validator: this.$validator
      };
    }
    return {};
  },
  beforeCreate: function beforeCreate() {
    if (isBuiltInComponent(this.$vnode) || this.$options.$__veeInject === false) {
      return;
    }
    if (!this.$parent) {
      setConfig(this.$options.$_veeValidate || {});
    }
    var options2 = resolveConfig(this);
    if (!this.$parent || this.$options.$_veeValidate && /new/.test(this.$options.$_veeValidate.validator)) {
      this.$validator = new ScopedValidator(getValidator(), this);
    }
    var requested = requestsValidator(this.$options.inject);
    if (!this.$validator && options2.inject && !requested) {
      this.$validator = new ScopedValidator(getValidator(), this);
    }
    if (!requested && !this.$validator) {
      return;
    }
    if (!requested && this.$validator) {
      var Vue2 = this.$options._base;
      Vue2.util.defineReactive(this.$validator, "errors", this.$validator.errors);
    }
    if (!this.$options.computed) {
      this.$options.computed = {};
    }
    this.$options.computed[options2.errorBagName || "errors"] = function errorBagGetter() {
      return this.$validator.errors;
    };
    this.$options.computed[options2.fieldsBagName || "fields"] = function fieldBagGetter() {
      return this.$validator.fields.items.reduce(function(acc, field) {
        if (field.scope) {
          if (!acc["$" + field.scope]) {
            acc["$" + field.scope] = {};
          }
          acc["$" + field.scope][field.name] = field.flags;
          return acc;
        }
        acc[field.name] = field.flags;
        return acc;
      }, {});
    };
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$validator && this._uid === this.$validator.id) {
      this.$validator.errors.clear();
    }
  }
};
function findField(el, context) {
  if (!context || !context.$validator) {
    return null;
  }
  return context.$validator.fields.findById(el._veeValidateId);
}
var directive$1 = {
  bind: function bind2(el, binding, vnode) {
    var validator = vnode.context.$validator;
    if (!validator) {
      return;
    }
    var fieldOptions = Resolver.generate(el, binding, vnode);
    validator.attach(fieldOptions);
  },
  inserted: function inserted2(el, binding, vnode) {
    var field = findField(el, vnode.context);
    var scope = Resolver.resolveScope(el, binding, vnode);
    if (!field || scope === field.scope) {
      return;
    }
    field.update({ scope });
    field.updated = false;
  },
  update: function update7(el, binding, vnode) {
    var field = findField(el, vnode.context);
    if (!field || field.updated && isEqual$2(binding.value, binding.oldValue)) {
      return;
    }
    var scope = Resolver.resolveScope(el, binding, vnode);
    var rules = Resolver.resolveRules(el, binding, vnode);
    field.update({
      scope,
      rules
    });
  },
  unbind: function unbind2(el, binding, ref2) {
    var context = ref2.context;
    var field = findField(el, context);
    if (!field) {
      return;
    }
    context.$validator.detach(field);
  }
};
var Validator = function Validator2(validations, options2, pluginContainer) {
  if (options2 === void 0)
    options2 = { fastExit: true };
  if (pluginContainer === void 0)
    pluginContainer = null;
  this.errors = new ErrorBag();
  this.fields = new FieldBag();
  this._createFields(validations);
  this.paused = false;
  this.fastExit = !isNullOrUndefined(options2 && options2.fastExit) ? options2.fastExit : true;
  this.$vee = pluginContainer || {
    _vm: {
      $nextTick: function(cb) {
        return isCallable(cb) ? cb() : Promise.resolve();
      },
      $emit: function() {
      },
      $off: function() {
      }
    }
  };
};
var prototypeAccessors$4 = { rules: { configurable: true }, dictionary: { configurable: true }, flags: { configurable: true }, locale: { configurable: true } };
var staticAccessors$1 = { rules: { configurable: true }, dictionary: { configurable: true }, locale: { configurable: true } };
staticAccessors$1.rules.get = function() {
  return RuleContainer.rules;
};
prototypeAccessors$4.rules.get = function() {
  return RuleContainer.rules;
};
prototypeAccessors$4.dictionary.get = function() {
  return DictionaryResolver.getDriver();
};
staticAccessors$1.dictionary.get = function() {
  return DictionaryResolver.getDriver();
};
prototypeAccessors$4.flags.get = function() {
  return this.fields.items.reduce(function(acc, field) {
    var obj2;
    if (field.scope) {
      acc["$" + field.scope] = (obj2 = {}, obj2[field.name] = field.flags, obj2);
      return acc;
    }
    acc[field.name] = field.flags;
    return acc;
  }, {});
};
prototypeAccessors$4.locale.get = function() {
  return Validator.locale;
};
prototypeAccessors$4.locale.set = function(value) {
  Validator.locale = value;
};
staticAccessors$1.locale.get = function() {
  return DictionaryResolver.getDriver().locale;
};
staticAccessors$1.locale.set = function(value) {
  var hasChanged = value !== DictionaryResolver.getDriver().locale;
  DictionaryResolver.getDriver().locale = value;
  if (hasChanged && Validator.$vee && Validator.$vee._vm) {
    Validator.$vee._vm.$emit("localeChanged");
  }
};
Validator.create = function create2(validations, options2) {
  return new Validator(validations, options2);
};
Validator.extend = function extend3(name, validator, options2) {
  if (options2 === void 0)
    options2 = {};
  Validator._guardExtend(name, validator);
  var mergedOpts = validator.options || {};
  Validator._merge(name, {
    validator,
    paramNames: options2 && options2.paramNames || validator.paramNames,
    options: assign({ hasTarget: false, immediate: true }, mergedOpts, options2 || {})
  });
};
Validator.remove = function remove6(name) {
  RuleContainer.remove(name);
};
Validator.prototype.localize = function localize2(lang, dictionary) {
  Validator.localize(lang, dictionary);
};
Validator.localize = function localize3(lang, dictionary) {
  var obj2;
  if (isObject$8(lang)) {
    DictionaryResolver.getDriver().merge(lang);
    return;
  }
  if (dictionary) {
    var locale2 = lang || dictionary.name;
    dictionary = assign({}, dictionary);
    DictionaryResolver.getDriver().merge((obj2 = {}, obj2[locale2] = dictionary, obj2));
  }
  if (lang) {
    Validator.locale = lang;
  }
};
Validator.prototype.attach = function attach2(fieldOpts) {
  var this$1$1 = this;
  var oldFieldMatcher = { name: fieldOpts.name, scope: fieldOpts.scope, persist: true };
  var oldField = fieldOpts.persist ? this.fields.find(oldFieldMatcher) : null;
  if (oldField) {
    fieldOpts.flags = oldField.flags;
    oldField.destroy();
    this.fields.remove(oldField);
  }
  var value = fieldOpts.initialValue;
  var field = new Field(fieldOpts);
  this.fields.push(field);
  if (field.immediate) {
    this.$vee._vm.$nextTick(function() {
      return this$1$1.validate("#" + field.id, value || field.value, { vmId: fieldOpts.vmId });
    });
  } else {
    this._validate(field, value || field.value, { initial: true }).then(function(result) {
      field.flags.valid = result.valid;
      field.flags.invalid = !result.valid;
    });
  }
  return field;
};
Validator.prototype.flag = function flag2(name, flags2, uid2) {
  if (uid2 === void 0)
    uid2 = null;
  var field = this._resolveField(name, void 0, uid2);
  if (!field || !flags2) {
    return;
  }
  field.setFlags(flags2);
};
Validator.prototype.detach = function detach2(name, scope, uid2) {
  var field = isCallable(name.destroy) ? name : this._resolveField(name, scope, uid2);
  if (!field) {
    return;
  }
  if (!field.persist) {
    field.destroy();
    this.errors.remove(field.name, field.scope, field.vmId);
    this.fields.remove(field);
  }
};
Validator.prototype.extend = function extend4(name, validator, options2) {
  if (options2 === void 0)
    options2 = {};
  Validator.extend(name, validator, options2);
};
Validator.prototype.reset = function reset3(matcher) {
  var this$1$1 = this;
  return this.$vee._vm.$nextTick().then(function() {
    return this$1$1.$vee._vm.$nextTick();
  }).then(function() {
    this$1$1.fields.filter(matcher).forEach(function(field) {
      field.waitFor(null);
      field.reset();
      this$1$1.errors.remove(field.name, field.scope, matcher && matcher.vmId);
    });
  });
};
Validator.prototype.update = function update8(id2, ref2) {
  var scope = ref2.scope;
  var field = this._resolveField("#" + id2);
  if (!field) {
    return;
  }
  this.errors.update(id2, { scope });
};
Validator.prototype.remove = function remove7(name) {
  Validator.remove(name);
};
Validator.prototype.validate = function validate2(fieldDescriptor, value, ref2) {
  var this$1$1 = this;
  if (ref2 === void 0)
    ref2 = {};
  var silent = ref2.silent;
  var vmId = ref2.vmId;
  if (this.paused) {
    return Promise.resolve(true);
  }
  if (isNullOrUndefined(fieldDescriptor)) {
    return this.validateScopes({ silent, vmId });
  }
  if (fieldDescriptor === "*") {
    return this.validateAll(void 0, { silent, vmId });
  }
  if (/^(.+)\.\*$/.test(fieldDescriptor)) {
    var matched = fieldDescriptor.match(/^(.+)\.\*$/)[1];
    return this.validateAll(matched);
  }
  var field = this._resolveField(fieldDescriptor);
  if (!field) {
    return this._handleFieldNotFound(fieldDescriptor);
  }
  if (!silent) {
    field.flags.pending = true;
  }
  if (value === void 0) {
    value = field.value;
  }
  var validationPromise = this._validate(field, value);
  field.waitFor(validationPromise);
  return validationPromise.then(function(result) {
    if (!silent && field.isWaitingFor(validationPromise)) {
      field.waitFor(null);
      this$1$1._handleValidationResults([result], vmId);
    }
    return result.valid;
  });
};
Validator.prototype.pause = function pause2() {
  this.paused = true;
  return this;
};
Validator.prototype.resume = function resume2() {
  this.paused = false;
  return this;
};
Validator.prototype.validateAll = function validateAll2(values2, ref2) {
  var this$1$1 = this;
  if (ref2 === void 0)
    ref2 = {};
  var silent = ref2.silent;
  var vmId = ref2.vmId;
  if (this.paused) {
    return Promise.resolve(true);
  }
  var matcher = null;
  var providedValues = false;
  if (typeof values2 === "string") {
    matcher = { scope: values2, vmId };
  } else if (isObject$8(values2)) {
    matcher = Object.keys(values2).map(function(key) {
      return { name: key, vmId, scope: null };
    });
    providedValues = true;
  } else if (Array.isArray(values2)) {
    matcher = values2.map(function(key) {
      return typeof key === "object" ? Object.assign({ vmId }, key) : { name: key, vmId };
    });
  } else {
    matcher = { scope: null, vmId };
  }
  return Promise.all(
    this.fields.filter(matcher).map(function(field) {
      return this$1$1._validate(field, providedValues ? values2[field.name] : field.value);
    })
  ).then(function(results) {
    if (!silent) {
      this$1$1._handleValidationResults(results, vmId);
    }
    return results.every(function(t) {
      return t.valid;
    });
  });
};
Validator.prototype.validateScopes = function validateScopes2(ref2) {
  var this$1$1 = this;
  if (ref2 === void 0)
    ref2 = {};
  var silent = ref2.silent;
  var vmId = ref2.vmId;
  if (this.paused) {
    return Promise.resolve(true);
  }
  return Promise.all(
    this.fields.filter({ vmId }).map(function(field) {
      return this$1$1._validate(field, field.value);
    })
  ).then(function(results) {
    if (!silent) {
      this$1$1._handleValidationResults(results, vmId);
    }
    return results.every(function(t) {
      return t.valid;
    });
  });
};
Validator.prototype.verify = function verify2(value, rules, options2) {
  if (options2 === void 0)
    options2 = {};
  var field = {
    name: options2 && options2.name || "{field}",
    rules: normalizeRules(rules),
    bails: getPath("bails", options2, true),
    forceRequired: false,
    get isRequired() {
      return !!this.rules.required || this.forceRequired;
    }
  };
  var targetRules = Object.keys(field.rules).filter(RuleContainer.isTargetRule);
  if (targetRules.length && options2 && isObject$8(options2.values)) {
    field.dependencies = targetRules.map(function(rule) {
      var ref2 = field.rules[rule];
      var targetKey = ref2[0];
      return {
        name: rule,
        field: { value: options2.values[targetKey] }
      };
    });
  }
  return this._validate(field, value).then(function(result) {
    var errors = [];
    var ruleMap = {};
    result.errors.forEach(function(e) {
      errors.push(e.msg);
      ruleMap[e.rule] = e.msg;
    });
    return {
      valid: result.valid,
      errors,
      failedRules: ruleMap
    };
  });
};
Validator.prototype.destroy = function destroy5() {
  this.$vee._vm.$off("localeChanged");
};
Validator.prototype._createFields = function _createFields(validations) {
  var this$1$1 = this;
  if (!validations) {
    return;
  }
  Object.keys(validations).forEach(function(field) {
    var options2 = assign({}, { name: field, rules: validations[field] });
    this$1$1.attach(options2);
  });
};
Validator.prototype._getDateFormat = function _getDateFormat(validations) {
  var format2 = null;
  if (validations.date_format && Array.isArray(validations.date_format)) {
    format2 = validations.date_format[0];
  }
  return format2 || DictionaryResolver.getDriver().getDateFormat(this.locale);
};
Validator.prototype._formatErrorMessage = function _formatErrorMessage(field, rule, data2, targetName) {
  if (data2 === void 0)
    data2 = {};
  if (targetName === void 0)
    targetName = null;
  var name = this._getFieldDisplayName(field);
  var params = this._getLocalizedParams(rule, targetName);
  return DictionaryResolver.getDriver().getFieldMessage(this.locale, field.name, rule.name, [name, params, data2]);
};
Validator.prototype._convertParamObjectToArray = function _convertParamObjectToArray(obj2, ruleName) {
  if (Array.isArray(obj2)) {
    return obj2;
  }
  var paramNames2 = RuleContainer.getParamNames(ruleName);
  if (!paramNames2 || !isObject$8(obj2)) {
    return obj2;
  }
  return paramNames2.reduce(function(prev, paramName) {
    if (paramName in obj2) {
      prev.push(obj2[paramName]);
    }
    return prev;
  }, []);
};
Validator.prototype._getLocalizedParams = function _getLocalizedParams(rule, targetName) {
  if (targetName === void 0)
    targetName = null;
  var params = this._convertParamObjectToArray(rule.params, rule.name);
  if (rule.options.hasTarget && params && params[0]) {
    var localizedName = targetName || DictionaryResolver.getDriver().getAttribute(this.locale, params[0], params[0]);
    return [localizedName].concat(params.slice(1));
  }
  return params;
};
Validator.prototype._getFieldDisplayName = function _getFieldDisplayName(field) {
  return field.alias || DictionaryResolver.getDriver().getAttribute(this.locale, field.name, field.name);
};
Validator.prototype._convertParamArrayToObj = function _convertParamArrayToObj(params, ruleName) {
  var paramNames2 = RuleContainer.getParamNames(ruleName);
  if (!paramNames2) {
    return params;
  }
  if (isObject$8(params)) {
    var hasKeys = paramNames2.some(function(name) {
      return Object.keys(params).indexOf(name) !== -1;
    });
    if (hasKeys) {
      return params;
    }
    params = [params];
  }
  return params.reduce(function(prev, value, idx) {
    prev[paramNames2[idx]] = value;
    return prev;
  }, {});
};
Validator.prototype._test = function _test(field, value, rule) {
  var this$1$1 = this;
  var validator = RuleContainer.getValidatorMethod(rule.name);
  var params = Array.isArray(rule.params) ? toArray(rule.params) : rule.params;
  if (!params) {
    params = [];
  }
  var targetName = null;
  if (!validator || typeof validator !== "function") {
    return Promise.reject(createError("No such validator '" + rule.name + "' exists."));
  }
  if (rule.options.hasTarget && field.dependencies) {
    var target2 = find$1(field.dependencies, function(d) {
      return d.name === rule.name;
    });
    if (target2) {
      targetName = target2.field.alias;
      params = [target2.field.value].concat(params.slice(1));
    }
  } else if (rule.name === "required" && field.rejectsFalse) {
    params = params.length ? params : [true];
  }
  if (rule.options.isDate) {
    var dateFormat = this._getDateFormat(field.rules);
    if (rule.name !== "date_format") {
      params.push(dateFormat);
    }
  }
  var result = validator(value, this._convertParamArrayToObj(params, rule.name));
  if (isCallable(result.then)) {
    return result.then(function(values2) {
      var allValid = true;
      var data2 = {};
      if (Array.isArray(values2)) {
        allValid = values2.every(function(t) {
          return isObject$8(t) ? t.valid : t;
        });
      } else {
        allValid = isObject$8(values2) ? values2.valid : values2;
        data2 = values2.data;
      }
      return {
        valid: allValid,
        data: result.data,
        errors: allValid ? [] : [this$1$1._createFieldError(field, rule, data2, targetName)]
      };
    });
  }
  if (!isObject$8(result)) {
    result = { valid: result, data: {} };
  }
  return {
    valid: result.valid,
    data: result.data,
    errors: result.valid ? [] : [this._createFieldError(field, rule, result.data, targetName)]
  };
};
Validator._merge = function _merge(name, ref2) {
  var validator = ref2.validator;
  var options2 = ref2.options;
  var paramNames2 = ref2.paramNames;
  var validate6 = isCallable(validator) ? validator : validator.validate;
  if (validator.getMessage) {
    DictionaryResolver.getDriver().setMessage(Validator.locale, name, validator.getMessage);
  }
  RuleContainer.add(name, {
    validate: validate6,
    options: options2,
    paramNames: paramNames2
  });
};
Validator._guardExtend = function _guardExtend(name, validator) {
  if (isCallable(validator)) {
    return;
  }
  if (!isCallable(validator.validate)) {
    throw createError(
      "Extension Error: The validator '" + name + "' must be a function or have a 'validate' method."
    );
  }
};
Validator.prototype._createFieldError = function _createFieldError(field, rule, data2, targetName) {
  var this$1$1 = this;
  return {
    id: field.id,
    vmId: field.vmId,
    field: field.name,
    msg: this._formatErrorMessage(field, rule, data2, targetName),
    rule: rule.name,
    scope: field.scope,
    regenerate: function() {
      return this$1$1._formatErrorMessage(field, rule, data2, targetName);
    }
  };
};
Validator.prototype._resolveField = function _resolveField2(name, scope, uid2) {
  if (name[0] === "#") {
    return this.fields.findById(name.slice(1));
  }
  if (!isNullOrUndefined(scope)) {
    return this.fields.find({ name, scope, vmId: uid2 });
  }
  if (includes(name, ".")) {
    var ref2 = name.split(".");
    var fieldScope = ref2[0];
    var fieldName = ref2.slice(1);
    var field = this.fields.find({ name: fieldName.join("."), scope: fieldScope, vmId: uid2 });
    if (field) {
      return field;
    }
  }
  return this.fields.find({ name, scope: null, vmId: uid2 });
};
Validator.prototype._handleFieldNotFound = function _handleFieldNotFound(name, scope) {
  var fullName = isNullOrUndefined(scope) ? name : (!isNullOrUndefined(scope) ? scope + "." : "") + name;
  return Promise.reject(createError(
    'Validating a non-existent field: "' + fullName + '". Use "attach()" first.'
  ));
};
Validator.prototype._handleValidationResults = function _handleValidationResults(results, vmId) {
  var this$1$1 = this;
  var matchers = results.map(function(result) {
    return { id: result.id };
  });
  this.errors.removeById(matchers.map(function(m) {
    return m.id;
  }));
  results.forEach(function(result) {
    this$1$1.errors.remove(result.field, result.scope, vmId);
  });
  var allErrors = results.reduce(function(prev, curr) {
    prev.push.apply(prev, curr.errors);
    return prev;
  }, []);
  this.errors.add(allErrors);
  this.fields.filter(matchers).forEach(function(field) {
    var result = find$1(results, function(r) {
      return r.id === field.id;
    });
    field.setFlags({
      pending: false,
      valid: result.valid,
      validated: true
    });
  });
};
Validator.prototype._shouldSkip = function _shouldSkip(field, value) {
  if (field.bails === false) {
    return false;
  }
  if (field.isDisabled && getConfig().useConstraintAttrs) {
    return true;
  }
  return !field.isRequired && (isNullOrUndefined(value) || value === "" || isEmptyArray(value));
};
Validator.prototype._shouldBail = function _shouldBail(field) {
  if (field.bails !== void 0) {
    return field.bails;
  }
  return this.fastExit;
};
Validator.prototype._validate = function _validate(field, value, ref2) {
  var this$1$1 = this;
  if (ref2 === void 0)
    ref2 = {};
  var initial = ref2.initial;
  var requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
  field.forceRequired = false;
  requireRules.forEach(function(rule) {
    var ruleOptions = RuleContainer.getOptions(rule);
    var result = this$1$1._test(field, value, { name: rule, params: field.rules[rule], options: ruleOptions });
    if (isCallable(result.then)) {
      throw createError("Require rules cannot be async");
    }
    if (!isObject$8(result)) {
      throw createError("Require rules has to return an object (see docs)");
    }
    if (result.data.required === true) {
      field.forceRequired = true;
    }
  });
  if (this._shouldSkip(field, value)) {
    return Promise.resolve({ valid: true, id: field.id, field: field.name, scope: field.scope, errors: [] });
  }
  var promises = [];
  var errors = [];
  var isExitEarly = false;
  if (isCallable(field.checkValueChanged)) {
    field.flags.changed = field.checkValueChanged();
  }
  Object.keys(field.rules).filter(function(rule) {
    if (!initial || !RuleContainer.has(rule)) {
      return true;
    }
    return RuleContainer.isImmediate(rule);
  }).some(function(rule) {
    var ruleOptions = RuleContainer.getOptions(rule);
    var result = this$1$1._test(field, value, { name: rule, params: field.rules[rule], options: ruleOptions });
    if (isCallable(result.then)) {
      promises.push(result);
    } else if (!result.valid && this$1$1._shouldBail(field)) {
      errors.push.apply(errors, result.errors);
      isExitEarly = true;
    } else {
      promises.push(new Promise(function(resolve2) {
        return resolve2(result);
      }));
    }
    return isExitEarly;
  });
  if (isExitEarly) {
    return Promise.resolve({ valid: false, errors, id: field.id, field: field.name, scope: field.scope });
  }
  return Promise.all(promises).then(function(results) {
    return results.reduce(function(prev, v) {
      var ref3;
      if (!v.valid) {
        (ref3 = prev.errors).push.apply(ref3, v.errors);
      }
      prev.valid = prev.valid && v.valid;
      return prev;
    }, { valid: true, errors, id: field.id, field: field.name, scope: field.scope });
  });
};
Object.defineProperties(Validator.prototype, prototypeAccessors$4);
Object.defineProperties(Validator, staticAccessors$1);
var normalizeValue = function(value) {
  if (isObject$8(value)) {
    return Object.keys(value).reduce(function(prev, key) {
      prev[key] = normalizeValue(value[key]);
      return prev;
    }, {});
  }
  if (isCallable(value)) {
    return value("{0}", ["{1}", "{2}", "{3}"]);
  }
  return value;
};
var normalizeFormat = function(locale2) {
  var dictionary = {};
  if (locale2.messages) {
    dictionary.messages = normalizeValue(locale2.messages);
  }
  if (locale2.custom) {
    dictionary.custom = normalizeValue(locale2.custom);
  }
  if (locale2.attributes) {
    dictionary.attributes = locale2.attributes;
  }
  if (!isNullOrUndefined(locale2.dateFormat)) {
    dictionary.dateFormat = locale2.dateFormat;
  }
  return dictionary;
};
var I18nDictionary = function I18nDictionary2(i18n, rootKey) {
  this.i18n = i18n;
  this.rootKey = rootKey;
};
var prototypeAccessors$5 = { locale: { configurable: true } };
prototypeAccessors$5.locale.get = function() {
  return this.i18n.locale;
};
prototypeAccessors$5.locale.set = function(value) {
  warn("Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead");
};
I18nDictionary.prototype.getDateFormat = function getDateFormat2(locale2) {
  return this.i18n.getDateTimeFormat(locale2 || this.locale);
};
I18nDictionary.prototype.setDateFormat = function setDateFormat2(locale2, value) {
  this.i18n.setDateTimeFormat(locale2 || this.locale, value);
};
I18nDictionary.prototype.getMessage = function getMessage2(_, key, data2) {
  var path = this.rootKey + ".messages." + key;
  var dataOptions = data2;
  if (Array.isArray(data2)) {
    dataOptions = [].concat.apply([], data2);
  }
  if (this.i18n.te(path)) {
    return this.i18n.t(path, dataOptions);
  }
  if (this.i18n.te(path, this.i18n.fallbackLocale)) {
    return this.i18n.t(path, this.i18n.fallbackLocale, dataOptions);
  }
  return this.i18n.t(this.rootKey + ".messages._default", dataOptions);
};
I18nDictionary.prototype.getAttribute = function getAttribute2(_, key, fallback) {
  if (fallback === void 0)
    fallback = "";
  var path = this.rootKey + ".attributes." + key;
  if (this.i18n.te(path)) {
    return this.i18n.t(path);
  }
  return fallback;
};
I18nDictionary.prototype.getFieldMessage = function getFieldMessage2(_, field, key, data2) {
  var path = this.rootKey + ".custom." + field + "." + key;
  if (this.i18n.te(path)) {
    return this.i18n.t(path, data2);
  }
  return this.getMessage(_, key, data2);
};
I18nDictionary.prototype.merge = function merge$12(dictionary) {
  var this$1$1 = this;
  Object.keys(dictionary).forEach(function(localeKey) {
    var obj2;
    var clone2 = merge$2({}, getPath(localeKey + "." + this$1$1.rootKey, this$1$1.i18n.messages, {}));
    var locale2 = merge$2(clone2, normalizeFormat(dictionary[localeKey]));
    this$1$1.i18n.mergeLocaleMessage(localeKey, (obj2 = {}, obj2[this$1$1.rootKey] = locale2, obj2));
    if (locale2.dateFormat) {
      this$1$1.i18n.setDateTimeFormat(localeKey, locale2.dateFormat);
    }
  });
};
I18nDictionary.prototype.setMessage = function setMessage2(locale2, key, value) {
  var obj2, obj$1;
  this.merge((obj$1 = {}, obj$1[locale2] = {
    messages: (obj2 = {}, obj2[key] = value, obj2)
  }, obj$1));
};
I18nDictionary.prototype.setAttribute = function setAttribute2(locale2, key, value) {
  var obj2, obj$1;
  this.merge((obj$1 = {}, obj$1[locale2] = {
    attributes: (obj2 = {}, obj2[key] = value, obj2)
  }, obj$1));
};
Object.defineProperties(I18nDictionary.prototype, prototypeAccessors$5);
var aggressive = function() {
  return {
    on: ["input"]
  };
};
var lazy = function() {
  return {
    on: ["change"]
  };
};
var eager = function(ref2) {
  var errors = ref2.errors;
  if (errors.length) {
    return {
      on: ["input"]
    };
  }
  return {
    on: ["change", "blur"]
  };
};
var passive = function() {
  return {
    on: []
  };
};
var modes = {
  aggressive,
  eager,
  passive,
  lazy
};
var Vue;
var pendingPlugins;
var pluginInstance;
var VeeValidate$1 = function VeeValidate2(config2, _Vue2) {
  this.configure(config2);
  pluginInstance = this;
  if (_Vue2) {
    Vue = _Vue2;
  }
  this._validator = setValidator(
    new Validator(null, { fastExit: config2 && config2.fastExit }, this)
  );
  this._initVM(this.config);
  this._initI18n(this.config);
};
var prototypeAccessors$6 = { i18nDriver: { configurable: true }, config: { configurable: true } };
var staticAccessors$2 = { i18nDriver: { configurable: true }, config: { configurable: true } };
VeeValidate$1.setI18nDriver = function setI18nDriver(driver, instance) {
  DictionaryResolver.setDriver(driver, instance);
};
VeeValidate$1.configure = function configure(cfg) {
  setConfig(cfg);
};
VeeValidate$1.setMode = function setMode(mode, implementation) {
  setConfig({ mode });
  if (!implementation) {
    return;
  }
  if (!isCallable(implementation)) {
    throw new Error("A mode implementation must be a function");
  }
  modes[mode] = implementation;
};
VeeValidate$1.use = function use(plugin2, options2) {
  if (options2 === void 0)
    options2 = {};
  if (!isCallable(plugin2)) {
    return warn("The plugin must be a callable function");
  }
  if (!pluginInstance) {
    if (!pendingPlugins) {
      pendingPlugins = [];
    }
    pendingPlugins.push({ plugin: plugin2, options: options2 });
    return;
  }
  plugin2({ Validator, ErrorBag, Rules: Validator.rules }, options2);
};
VeeValidate$1.install = function install(_Vue2, opts) {
  if (Vue && _Vue2 === Vue) {
    return;
  }
  Vue = _Vue2;
  pluginInstance = new VeeValidate$1(opts);
  Validator.$vee = pluginInstance;
  detectPassiveSupport();
  Vue.mixin(mixin);
  Vue.directive("validate", directive$1);
  if (pendingPlugins) {
    pendingPlugins.forEach(function(ref2) {
      var plugin2 = ref2.plugin;
      var options2 = ref2.options;
      VeeValidate$1.use(plugin2, options2);
    });
    pendingPlugins = null;
  }
};
prototypeAccessors$6.i18nDriver.get = function() {
  return DictionaryResolver.getDriver();
};
staticAccessors$2.i18nDriver.get = function() {
  return DictionaryResolver.getDriver();
};
prototypeAccessors$6.config.get = function() {
  return getConfig();
};
staticAccessors$2.config.get = function() {
  return getConfig();
};
VeeValidate$1.prototype._initVM = function _initVM(config2) {
  var this$1$1 = this;
  this._vm = new Vue({
    data: function() {
      return {
        errors: this$1$1._validator.errors,
        fields: this$1$1._validator.fields
      };
    }
  });
};
VeeValidate$1.prototype._initI18n = function _initI18n(config2) {
  var this$1$1 = this;
  var dictionary = config2.dictionary;
  var i18n = config2.i18n;
  var i18nRootKey = config2.i18nRootKey;
  var locale2 = config2.locale;
  var onLocaleChanged = function() {
    if (dictionary) {
      this$1$1.i18nDriver.merge(dictionary);
    }
    this$1$1._validator.errors.regenerate();
  };
  if (i18n) {
    VeeValidate$1.setI18nDriver("i18n", new I18nDictionary(i18n, i18nRootKey));
    i18n._vm.$watch("locale", onLocaleChanged);
  } else if (typeof window !== "undefined") {
    this._vm.$on("localeChanged", onLocaleChanged);
  }
  if (dictionary) {
    this.i18nDriver.merge(dictionary);
  }
  if (locale2 && !i18n) {
    this._validator.localize(locale2);
  }
};
VeeValidate$1.prototype.configure = function configure2(cfg) {
  setConfig(cfg);
};
Object.defineProperties(VeeValidate$1.prototype, prototypeAccessors$6);
Object.defineProperties(VeeValidate$1, staticAccessors$2);
VeeValidate$1.mixin = mixin;
VeeValidate$1.directive = directive$1;
VeeValidate$1.Validator = Validator;
VeeValidate$1.ErrorBag = ErrorBag;
var formatFileSize = function(size2) {
  var units = ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var threshold = 1024;
  size2 = Number(size2) * threshold;
  var i = size2 === 0 ? 0 : Math.floor(Math.log(size2) / Math.log(threshold));
  return (size2 / Math.pow(threshold, i)).toFixed(2) * 1 + " " + units[i];
};
var isDefinedGlobally = function() {
  return typeof VeeValidate !== "undefined";
};
var obj;
var messages = {
  _default: function(field) {
    return "The " + field + " value is not valid";
  },
  after: function(field, ref2) {
    var target2 = ref2[0];
    var inclusion = ref2[1];
    return "The " + field + " must be after " + (inclusion ? "or equal to " : "") + target2;
  },
  alpha: function(field) {
    return "The " + field + " field may only contain alphabetic characters";
  },
  alpha_dash: function(field) {
    return "The " + field + " field may contain alpha-numeric characters as well as dashes and underscores";
  },
  alpha_num: function(field) {
    return "The " + field + " field may only contain alpha-numeric characters";
  },
  alpha_spaces: function(field) {
    return "The " + field + " field may only contain alphabetic characters as well as spaces";
  },
  before: function(field, ref2) {
    var target2 = ref2[0];
    var inclusion = ref2[1];
    return "The " + field + " must be before " + (inclusion ? "or equal to " : "") + target2;
  },
  between: function(field, ref2) {
    var min2 = ref2[0];
    var max2 = ref2[1];
    return "The " + field + " field must be between " + min2 + " and " + max2;
  },
  confirmed: function(field) {
    return "The " + field + " confirmation does not match";
  },
  credit_card: function(field) {
    return "The " + field + " field is invalid";
  },
  date_between: function(field, ref2) {
    var min2 = ref2[0];
    var max2 = ref2[1];
    return "The " + field + " must be between " + min2 + " and " + max2;
  },
  date_format: function(field, ref2) {
    var format2 = ref2[0];
    return "The " + field + " must be in the format " + format2;
  },
  decimal: function(field, ref2) {
    if (ref2 === void 0)
      ref2 = [];
    var decimals = ref2[0];
    if (decimals === void 0)
      decimals = "*";
    return "The " + field + " field must be numeric and may contain" + (!decimals || decimals === "*" ? "" : " " + decimals) + " decimal points";
  },
  digits: function(field, ref2) {
    var length2 = ref2[0];
    return "The " + field + " field must be numeric and contains exactly " + length2 + " digits";
  },
  dimensions: function(field, ref2) {
    var width = ref2[0];
    var height = ref2[1];
    return "The " + field + " field must be " + width + " pixels by " + height + " pixels";
  },
  email: function(field) {
    return "The " + field + " field must be a valid email";
  },
  excluded: function(field) {
    return "The " + field + " field must be a valid value";
  },
  ext: function(field) {
    return "The " + field + " field must be a valid file";
  },
  image: function(field) {
    return "The " + field + " field must be an image";
  },
  included: function(field) {
    return "The " + field + " field must be a valid value";
  },
  integer: function(field) {
    return "The " + field + " field must be an integer";
  },
  ip: function(field) {
    return "The " + field + " field must be a valid ip address";
  },
  ip_or_fqdn: function(field) {
    return "The " + field + " field must be a valid ip address or FQDN";
  },
  length: function(field, ref2) {
    var length2 = ref2[0];
    var max2 = ref2[1];
    if (max2) {
      return "The " + field + " length must be between " + length2 + " and " + max2;
    }
    return "The " + field + " length must be " + length2;
  },
  max: function(field, ref2) {
    var length2 = ref2[0];
    return "The " + field + " field may not be greater than " + length2 + " characters";
  },
  max_value: function(field, ref2) {
    var max2 = ref2[0];
    return "The " + field + " field must be " + max2 + " or less";
  },
  mimes: function(field) {
    return "The " + field + " field must have a valid file type";
  },
  min: function(field, ref2) {
    var length2 = ref2[0];
    return "The " + field + " field must be at least " + length2 + " characters";
  },
  min_value: function(field, ref2) {
    var min2 = ref2[0];
    return "The " + field + " field must be " + min2 + " or more";
  },
  numeric: function(field) {
    return "The " + field + " field may only contain numeric characters";
  },
  regex: function(field) {
    return "The " + field + " field format is invalid";
  },
  required: function(field) {
    return "The " + field + " field is required";
  },
  required_if: function(field, ref2) {
    var target2 = ref2[0];
    return "The " + field + " field is required when the " + target2 + " field has this value";
  },
  size: function(field, ref2) {
    var size2 = ref2[0];
    return "The " + field + " size must be less than " + formatFileSize(size2);
  },
  url: function(field) {
    return "The " + field + " field is not a valid URL";
  }
};
var locale = {
  name: "en",
  messages,
  attributes: {}
};
if (isDefinedGlobally()) {
  VeeValidate.Validator.localize((obj = {}, obj[locale.name] = locale, obj));
}
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
var MILLISECONDS_IN_MINUTE = 6e4;
function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = date.getTimezoneOffset();
  date.setSeconds(0, 0);
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE$1 = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // timezone tokens
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var options2 = dirtyOptions || {};
  var additionalDigits = options2.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options2.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);
  if (isNaN(date)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset2;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (isNaN(time)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    if (dateStrings.timezone) {
      offset2 = parseTimezone(dateStrings.timezone);
      if (isNaN(offset2)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    } else {
      offset2 = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset2 = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset2));
    }
    return new Date(timestamp + time + offset2);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimeter);
  var timeString;
  if (patterns.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];
  var token;
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  var token;
  var date;
  var month;
  var week;
  if (dateString.length === 0) {
    date = /* @__PURE__ */ new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  token = patterns.MM.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    if (!validateDate(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    if (!validateDate(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    if (!validateWeekDate(year, week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  var token;
  var hours;
  var minutes;
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1;
  }
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1 + seconds * 1e3;
  }
  return null;
}
function parseTimezone(timezoneString) {
  var token;
  var absoluteOffset;
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }
  var hours;
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    if (!validateTimezone()) {
      return NaN;
    }
    absoluteOffset = hours * MILLISECONDS_IN_HOUR;
    return token[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    var minutes = parseInt(token[3], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE$1;
    return token[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  return 0;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}
function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false;
  }
  return true;
}
function addMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var timestamp = toDate(dirtyDate, dirtyOptions).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
function isValid(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  return !isNaN(date);
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
function formatDistance(token, count2, options2) {
  options2 = options2 || {};
  var result;
  if (typeof formatDistanceLocale[token] === "string") {
    result = formatDistanceLocale[token];
  } else if (count2 === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace("{{count}}", count2);
  }
  if (options2.addSuffix) {
    if (options2.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
}
function buildFormatLongFn(args) {
  return function(dirtyOptions) {
    var options2 = dirtyOptions || {};
    var width = options2.width ? String(options2.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
function formatRelative(token, date, baseDate, options2) {
  return formatRelativeLocale[token];
}
function buildLocalizeFn(args) {
  return function(dirtyIndex, dirtyOptions) {
    var options2 = dirtyOptions || {};
    var width = options2.width ? String(options2.width) : args.defaultWidth;
    var context = options2.context ? String(options2.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      valuesArray = args.formattingValues[width] || args.formattingValues[args.defaultFormattingWidth];
    } else {
      valuesArray = args.values[width] || args.values[args.defaultWidth];
    }
    var index2 = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index2];
  };
}
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
}
var localize4 = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaulFormattingWidth: "wide"
  })
};
function buildMatchPatternFn(args) {
  return function(dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options2 = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) {
      return null;
    }
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options2.valueCallback ? options2.valueCallback(value) : value;
    return {
      value,
      rest: string.slice(matchedString.length)
    };
  };
}
function buildMatchFn(args) {
  return function(dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options2 = dirtyOptions || {};
    var width = options2.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;
    if (Object.prototype.toString.call(parsePatterns) === "[object Array]") {
      value = parsePatterns.findIndex(function(pattern) {
        return pattern.test(string);
      });
    } else {
      value = findKey(parsePatterns, function(pattern) {
        return pattern.test(string);
      });
    }
    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options2.valueCallback ? options2.valueCallback(value) : value;
    return {
      value,
      rest: string.slice(matchedString.length)
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match2 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function(index2) {
      return index2 + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var locale$1 = {
  formatDistance,
  formatLong,
  formatRelative,
  localize: localize4,
  match: match2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
function startOfUTCISOWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCISOWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear, dirtyOptions);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear, dirtyOptions);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCISOWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var year = getUTCISOWeekYear(dirtyDate, dirtyOptions);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary, dirtyOptions);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCISOWeek(date, dirtyOptions).getTime() - startOfUTCISOWeekYear(date, dirtyOptions).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function startOfUTCWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var options2 = dirtyOptions || {};
  var locale2 = options2.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options2.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options2.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate, options2);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options2 = dirtyOptions || {};
  var locale2 = options2.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options2.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options2.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var options2 = dirtyOptions || {};
  var locale2 = options2.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options2.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options2.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCWeek(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var diff = startOfUTCWeek(date, dirtyOptions).getTime() - startOfUTCWeekYear(date, dirtyOptions).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize5) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize5.era(era, { width: "abbreviated" });
      case "GGGGG":
        return localize5.era(era, { width: "narrow" });
      case "GGGG":
      default:
        return localize5.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize5, options2) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    if (token === "yy") {
      var twoDigitYear = year % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "yo") {
      return localize5.ordinalNumber(year, { unit: "year" });
    }
    return addLeadingZeros(year, token.length);
  },
  // Local week-numbering year
  Y: function(date, token, localize5, options2) {
    var signedWeekYear = getUTCWeekYear(date, options2);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize5.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token, localize5, options2) {
    var isoWeekYear = getUTCISOWeekYear(date, options2);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token, localize5, options2) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize5, options2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize5.ordinalNumber(quarter, { unit: "quarter" });
      case "QQQ":
        return localize5.quarter(quarter, { width: "abbreviated", context: "formatting" });
      case "QQQQQ":
        return localize5.quarter(quarter, { width: "narrow", context: "formatting" });
      case "QQQQ":
      default:
        return localize5.quarter(quarter, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize5, options2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize5.ordinalNumber(quarter, { unit: "quarter" });
      case "qqq":
        return localize5.quarter(quarter, { width: "abbreviated", context: "standalone" });
      case "qqqqq":
        return localize5.quarter(quarter, { width: "narrow", context: "standalone" });
      case "qqqq":
      default:
        return localize5.quarter(quarter, { width: "wide", context: "standalone" });
    }
  },
  // Month
  M: function(date, token, localize5, options2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
        return String(month + 1);
      case "MM":
        return addLeadingZeros(month + 1, 2);
      case "Mo":
        return localize5.ordinalNumber(month + 1, { unit: "month" });
      case "MMM":
        return localize5.month(month, { width: "abbreviated", context: "formatting" });
      case "MMMMM":
        return localize5.month(month, { width: "narrow", context: "formatting" });
      case "MMMM":
      default:
        return localize5.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize5, options2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize5.ordinalNumber(month + 1, { unit: "month" });
      case "LLL":
        return localize5.month(month, { width: "abbreviated", context: "standalone" });
      case "LLLLL":
        return localize5.month(month, { width: "narrow", context: "standalone" });
      case "LLLL":
      default:
        return localize5.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize5, options2) {
    var week = getUTCWeek(date, options2);
    if (token === "wo") {
      return localize5.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize5, options2) {
    var isoWeek = getUTCISOWeek(date, options2);
    if (token === "Io") {
      return localize5.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize5, options2) {
    var dayOfMonth = date.getUTCDate();
    if (token === "do") {
      return localize5.ordinalNumber(dayOfMonth, { unit: "date" });
    }
    return addLeadingZeros(dayOfMonth, token.length);
  },
  // Day of year
  D: function(date, token, localize5, options2) {
    var dayOfYear = getUTCDayOfYear(date, options2);
    if (token === "Do") {
      return localize5.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize5, options2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize5.day(dayOfWeek, { width: "abbreviated", context: "formatting" });
      case "EEEEE":
        return localize5.day(dayOfWeek, { width: "narrow", context: "formatting" });
      case "EEEEEE":
        return localize5.day(dayOfWeek, { width: "short", context: "formatting" });
      case "EEEE":
      default:
        return localize5.day(dayOfWeek, { width: "wide", context: "formatting" });
    }
  },
  // Local day of week
  e: function(date, token, localize5, options2) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options2.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize5.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize5.day(dayOfWeek, { width: "abbreviated", context: "formatting" });
      case "eeeee":
        return localize5.day(dayOfWeek, { width: "narrow", context: "formatting" });
      case "eeeeee":
        return localize5.day(dayOfWeek, { width: "short", context: "formatting" });
      case "eeee":
      default:
        return localize5.day(dayOfWeek, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize5, options2) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options2.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize5.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize5.day(dayOfWeek, { width: "abbreviated", context: "standalone" });
      case "ccccc":
        return localize5.day(dayOfWeek, { width: "narrow", context: "standalone" });
      case "cccccc":
        return localize5.day(dayOfWeek, { width: "short", context: "standalone" });
      case "cccc":
      default:
        return localize5.day(dayOfWeek, { width: "wide", context: "standalone" });
    }
  },
  // ISO day of week
  i: function(date, token, localize5, options2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize5.ordinalNumber(isoDayOfWeek, { unit: "day" });
      case "iii":
        return localize5.day(dayOfWeek, { width: "abbreviated", context: "formatting" });
      case "iiiii":
        return localize5.day(dayOfWeek, { width: "narrow", context: "formatting" });
      case "iiiiii":
        return localize5.day(dayOfWeek, { width: "short", context: "formatting" });
      case "iiii":
      default:
        return localize5.day(dayOfWeek, { width: "wide", context: "formatting" });
    }
  },
  // AM or PM
  a: function(date, token, localize5) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "abbreviated", context: "formatting" });
      case "aaaaa":
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "narrow", context: "formatting" });
      case "aaaa":
      default:
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "wide", context: "formatting" });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize5) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "abbreviated", context: "formatting" });
      case "bbbbb":
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "narrow", context: "formatting" });
      case "bbbb":
      default:
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "wide", context: "formatting" });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize5) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "abbreviated", context: "formatting" });
      case "BBBBB":
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "narrow", context: "formatting" });
      case "BBBB":
      default:
        return localize5.dayPeriod(dayPeriodEnumValue, { width: "wide", context: "formatting" });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize5, options2) {
    var hours = date.getUTCHours() % 12;
    if (hours === 0) {
      hours = 12;
    }
    if (token === "ho") {
      return localize5.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [0-23]
  H: function(date, token, localize5, options2) {
    var hours = date.getUTCHours();
    if (token === "Ho") {
      return localize5.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [0-11]
  K: function(date, token, localize5, options2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize5.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize5, options2) {
    var hours = date.getUTCHours();
    if (hours === 0) {
      hours = 24;
    }
    if (token === "ko") {
      return localize5.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize5, options2) {
    var minutes = date.getUTCMinutes();
    if (token === "mo") {
      return localize5.ordinalNumber(minutes, { unit: "minute" });
    }
    return addLeadingZeros(minutes, token.length);
  },
  // Second
  s: function(date, token, localize5, options2) {
    var seconds = date.getUTCSeconds();
    if (token === "so") {
      return localize5.ordinalNumber(seconds, { unit: "second" });
    }
    return addLeadingZeros(seconds, token.length);
  },
  // Fraction of second
  S: function(date, token, localize5, options2) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, numberOfDigits);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, localize5, options2) {
    var originalDate = options2._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, localize5, options2) {
    var originalDate = options2._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, localize5, options2) {
    var originalDate = options2._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, localize5, options2) {
    var originalDate = options2._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, localize5, options2) {
    var originalDate = options2._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, localize5, options2) {
    var originalDate = options2._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
function formatTimezone(offset2, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || "";
  var sign = offset2 > 0 ? "-" : "+";
  var absOffset = Math.abs(offset2);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimeter + minutes;
}
function formatTimezoneWithOptionalMinutes(offset2, dirtyDelimeter) {
  if (offset2 % 60 === 0) {
    var sign = offset2 > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset2) / 60, 2);
  }
  return formatTimezone(offset2, dirtyDelimeter);
}
function formatTimezoneShort(offset2, dirtyDelimeter) {
  var sign = offset2 > 0 ? "-" : "+";
  var absOffset = Math.abs(offset2);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimeter = dirtyDelimeter || "";
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2);
}
function dateLongFormatter(pattern, formatLong2, options2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
}
function timeLongFormatter(pattern, formatLong2, options2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
}
function dateTimeLongFormatter(pattern, formatLong2, options2) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
}
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
function subMilliseconds(dirtyDate, dirtyAmount, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount, dirtyOptions);
}
var protectedTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedToken(token) {
  return protectedTokens.indexOf(token) !== -1;
}
function throwProtectedError(token) {
  throw new RangeError(
    "`options.awareOfUnicodeTokens` must be set to `true` to use `" + token + "` token; see: https://git.io/fxCyr"
  );
}
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'(.*?)'?$/;
var doubleQuoteRegExp = /''/g;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError(
      "2 arguments required, but only " + arguments.length + " present"
    );
  }
  var formatStr = String(dirtyFormatStr);
  var options2 = dirtyOptions || {};
  var locale2 = options2.locale || locale$1;
  var localeFirstWeekContainsDate = locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options2.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options2.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  }
  var localeWeekStartsOn = locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options2.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options2.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate, options2);
  if (!isValid(originalDate, options2)) {
    return "Invalid Date";
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset, options2);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale2.formatLong, formatterOptions);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters[firstCharacter];
    if (formatter) {
      if (!options2.awareOfUnicodeTokens && isProtectedToken(substring)) {
        throwProtectedError(substring);
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
function isAfter(dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() > dateToCompare.getTime();
}
function isBefore(dirtyDate, dirtyDateToCompare, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var dateToCompare = toDate(dirtyDateToCompare, dirtyOptions);
  return date.getTime() < dateToCompare.getTime();
}
function isEqual$1$1(dirtyLeftDate, dirtyRightDate, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var dateLeft = toDate(dirtyLeftDate, dirtyOptions);
  var dateRight = toDate(dirtyRightDate, dirtyOptions);
  return dateLeft.getTime() === dateRight.getTime();
}
function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var options2 = dirtyOptions || {};
  var locale2 = options2.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options2.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options2.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var day = toInteger(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
function setUTCWeek(dirtyDate, dirtyWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var week = toInteger(dirtyWeek);
  var diff = getUTCWeek(date, dirtyOptions) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
function setUTCISODay(dirtyDate, dirtyDay, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var day = toInteger(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = toDate(dirtyDate, dirtyOptions);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
function setUTCISOWeek(dirtyDate, dirtyISOWeek, dirtyOptions) {
  if (arguments.length < 2) {
    throw new TypeError("2 arguments required, but only " + arguments.length + " present");
  }
  var date = toDate(dirtyDate, dirtyOptions);
  var isoWeek = toInteger(dirtyISOWeek);
  var diff = getUTCISOWeek(date, dirtyOptions) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
var MILLISECONDS_IN_HOUR$1 = 36e5;
var MILLISECONDS_IN_MINUTE$2 = 6e4;
var MILLISECONDS_IN_SECOND = 1e3;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);
  if (!matchResult) {
    return null;
  }
  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }
  var sign = matchResult[1] === "+" ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$2 + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}
function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), string, valueCallback);
  }
}
function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), string, valueCallback);
  }
}
function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
var DAYS_IN_MONTH$1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR$1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex$1(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return match3.era(string, { width: "abbreviated" }) || match3.era(string, { width: "narrow" });
        case "GGGGG":
          return match3.era(string, { width: "narrow" });
        case "GGGG":
        default:
          return match3.era(string, { width: "wide" }) || match3.era(string, { width: "abbreviated" }) || match3.era(string, { width: "narrow" });
      }
    },
    set: function(date, value, options2) {
      date.setUTCFullYear(value === 1 ? 10 : -9, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function(string, token, match3, options2) {
      var valueCallback = function(year) {
        return {
          year,
          isTwoDigitYear: token === "yy"
        };
      };
      switch (token) {
        case "y":
          return parseNDigits(4, string, valueCallback);
        case "yo":
          return match3.ordinalNumber(string, { unit: "year", valueCallback });
        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function(date, value, options2) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function(date, value, options2) {
      var currentYear = getUTCWeekYear(date, options2);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function(string, token, match3, options2) {
      var valueCallback = function(year) {
        return {
          year,
          isTwoDigitYear: token === "YY"
        };
      };
      switch (token) {
        case "Y":
          return parseNDigits(4, string, valueCallback);
        case "Yo":
          return match3.ordinalNumber(string, { unit: "year", valueCallback });
        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function(date, value, options2) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function(date, value, options2) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options2.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options2);
      }
      var year = currentYear > 0 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options2.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek(date, options2);
    }
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function(string, token, match3, options2) {
      if (token === "R") {
        return parseNDigitsSigned(4, string);
      }
      return parseNDigitsSigned(token.length, string);
    },
    set: function(date, value, options2) {
      var firstWeekOfYear = /* @__PURE__ */ new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek(firstWeekOfYear);
    }
  },
  // Extended year
  u: {
    priority: 130,
    parse: function(string, token, match3, options2) {
      if (token === "u") {
        return parseNDigitsSigned(4, string);
      }
      return parseNDigitsSigned(token.length, string);
    },
    set: function(date, value, options2) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "Q":
        case "QQ":
          return parseNDigits(token.length, string);
        case "Qo":
          return match3.ordinalNumber(string, { unit: "quarter" });
        case "QQQ":
          return match3.quarter(string, { width: "abbreviated", context: "formatting" }) || match3.quarter(string, { width: "narrow", context: "formatting" });
        case "QQQQQ":
          return match3.quarter(string, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return match3.quarter(string, { width: "wide", context: "formatting" }) || match3.quarter(string, { width: "abbreviated", context: "formatting" }) || match3.quarter(string, { width: "narrow", context: "formatting" });
      }
    },
    validate: function(date, value, options2) {
      return value >= 1 && value <= 4;
    },
    set: function(date, value, options2) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "q":
        case "qq":
          return parseNDigits(token.length, string);
        case "qo":
          return match3.ordinalNumber(string, { unit: "quarter" });
        case "qqq":
          return match3.quarter(string, { width: "abbreviated", context: "standalone" }) || match3.quarter(string, { width: "narrow", context: "standalone" });
        case "qqqqq":
          return match3.quarter(string, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return match3.quarter(string, { width: "wide", context: "standalone" }) || match3.quarter(string, { width: "abbreviated", context: "standalone" }) || match3.quarter(string, { width: "narrow", context: "standalone" });
      }
    },
    validate: function(date, value, options2) {
      return value >= 1 && value <= 4;
    },
    set: function(date, value, options2) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Month
  M: {
    priority: 110,
    parse: function(string, token, match3, options2) {
      var valueCallback = function(value) {
        return value - 1;
      };
      switch (token) {
        case "M":
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        case "MM":
          return parseNDigits(2, string, valueCallback);
        case "Mo":
          return match3.ordinalNumber(string, { unit: "month", valueCallback });
        case "MMM":
          return match3.month(string, { width: "abbreviated", context: "formatting" }) || match3.month(string, { width: "narrow", context: "formatting" });
        case "MMMMM":
          return match3.month(string, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return match3.month(string, { width: "wide", context: "formatting" }) || match3.month(string, { width: "abbreviated", context: "formatting" }) || match3.month(string, { width: "narrow", context: "formatting" });
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 11;
    },
    set: function(date, value, options2) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function(string, token, match3, options2) {
      var valueCallback = function(value) {
        return value - 1;
      };
      switch (token) {
        case "L":
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        case "LL":
          return parseNDigits(2, string, valueCallback);
        case "Lo":
          return match3.ordinalNumber(string, { unit: "month", valueCallback });
        case "LLL":
          return match3.month(string, { width: "abbreviated", context: "standalone" }) || match3.month(string, { width: "narrow", context: "standalone" });
        case "LLLLL":
          return match3.month(string, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return match3.month(string, { width: "wide", context: "standalone" }) || match3.month(string, { width: "abbreviated", context: "standalone" }) || match3.month(string, { width: "narrow", context: "standalone" });
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 11;
    },
    set: function(date, value, options2) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "w":
          return parseNumericPattern(numericPatterns.week, string);
        case "wo":
          return match3.ordinalNumber(string, { unit: "week" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      return value >= 1 && value <= 53;
    },
    set: function(date, value, options2) {
      return startOfUTCWeek(setUTCWeek(date, value, options2), options2);
    }
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "I":
          return parseNumericPattern(numericPatterns.week, string);
        case "Io":
          return match3.ordinalNumber(string, { unit: "week" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      return value >= 1 && value <= 53;
    },
    set: function(date, value, options2) {
      return startOfUTCISOWeek(setUTCISOWeek(date, value, options2), options2);
    }
  },
  // Day of the month
  d: {
    priority: 90,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "d":
          return parseNumericPattern(numericPatterns.date, string);
        case "do":
          return match3.ordinalNumber(string, { unit: "date" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR$1[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH$1[month];
      }
    },
    set: function(date, value, options2) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Day of year
  D: {
    priority: 90,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "D":
        case "DD":
          return parseNumericPattern(numericPatterns.dayOfYear, string);
        case "Do":
          return match3.ordinalNumber(string, { unit: "date" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function(date, value, options2) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Day of week
  E: {
    priority: 90,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return match3.day(string, { width: "abbreviated", context: "formatting" }) || match3.day(string, { width: "short", context: "formatting" }) || match3.day(string, { width: "narrow", context: "formatting" });
        case "EEEEE":
          return match3.day(string, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return match3.day(string, { width: "short", context: "formatting" }) || match3.day(string, { width: "narrow", context: "formatting" });
        case "EEEE":
        default:
          return match3.day(string, { width: "wide", context: "formatting" }) || match3.day(string, { width: "abbreviated", context: "formatting" }) || match3.day(string, { width: "short", context: "formatting" }) || match3.day(string, { width: "narrow", context: "formatting" });
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 6;
    },
    set: function(date, value, options2) {
      date = setUTCDay(date, value, options2);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function(string, token, match3, options2) {
      var valueCallback = function(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options2.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "e":
        case "ee":
          return parseNDigits(token.length, string, valueCallback);
        case "eo":
          return match3.ordinalNumber(string, { unit: "day", valueCallback });
        case "eee":
          return match3.day(string, { width: "abbreviated", context: "formatting" }) || match3.day(string, { width: "short", context: "formatting" }) || match3.day(string, { width: "narrow", context: "formatting" });
        case "eeeee":
          return match3.day(string, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return match3.day(string, { width: "short", context: "formatting" }) || match3.day(string, { width: "narrow", context: "formatting" });
        case "eeee":
        default:
          return match3.day(string, { width: "wide", context: "formatting" }) || match3.day(string, { width: "abbreviated", context: "formatting" }) || match3.day(string, { width: "short", context: "formatting" }) || match3.day(string, { width: "narrow", context: "formatting" });
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 6;
    },
    set: function(date, value, options2) {
      date = setUTCDay(date, value, options2);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function(string, token, match3, options2) {
      var valueCallback = function(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options2.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "c":
        case "cc":
          return parseNDigits(token.length, string, valueCallback);
        case "co":
          return match3.ordinalNumber(string, { unit: "day", valueCallback });
        case "ccc":
          return match3.day(string, { width: "abbreviated", context: "standalone" }) || match3.day(string, { width: "short", context: "standalone" }) || match3.day(string, { width: "narrow", context: "standalone" });
        case "ccccc":
          return match3.day(string, { width: "narrow", context: "standalone" });
        case "cccccc":
          return match3.day(string, { width: "short", context: "standalone" }) || match3.day(string, { width: "narrow", context: "standalone" });
        case "cccc":
        default:
          return match3.day(string, { width: "wide", context: "standalone" }) || match3.day(string, { width: "abbreviated", context: "standalone" }) || match3.day(string, { width: "short", context: "standalone" }) || match3.day(string, { width: "narrow", context: "standalone" });
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 6;
    },
    set: function(date, value, options2) {
      date = setUTCDay(date, value, options2);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function(string, token, match3, options2) {
      var valueCallback = function(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        case "i":
        case "ii":
          return parseNDigits(token.length, string);
        case "io":
          return match3.ordinalNumber(string, { unit: "day" });
        case "iii":
          return match3.day(string, { width: "abbreviated", context: "formatting", valueCallback }) || match3.day(string, { width: "short", context: "formatting", valueCallback }) || match3.day(string, { width: "narrow", context: "formatting", valueCallback });
        case "iiiii":
          return match3.day(string, { width: "narrow", context: "formatting", valueCallback });
        case "iiiiii":
          return match3.day(string, { width: "short", context: "formatting", valueCallback }) || match3.day(string, { width: "narrow", context: "formatting", valueCallback });
        case "iiii":
        default:
          return match3.day(string, { width: "wide", context: "formatting", valueCallback }) || match3.day(string, { width: "abbreviated", context: "formatting", valueCallback }) || match3.day(string, { width: "short", context: "formatting", valueCallback }) || match3.day(string, { width: "narrow", context: "formatting", valueCallback });
      }
    },
    validate: function(date, value, options2) {
      return value >= 1 && value <= 7;
    },
    set: function(date, value, options2) {
      date = setUTCISODay(date, value, options2);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "a":
        case "aa":
        case "aaa":
          return match3.dayPeriod(string, { width: "abbreviated", context: "formatting" }) || match3.dayPeriod(string, { width: "narrow", context: "formatting" });
        case "aaaaa":
          return match3.dayPeriod(string, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return match3.dayPeriod(string, { width: "wide", context: "formatting" }) || match3.dayPeriod(string, { width: "abbreviated", context: "formatting" }) || match3.dayPeriod(string, { width: "narrow", context: "formatting" });
      }
    },
    set: function(date, value, options2) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "b":
        case "bb":
        case "bbb":
          return match3.dayPeriod(string, { width: "abbreviated", context: "formatting" }) || match3.dayPeriod(string, { width: "narrow", context: "formatting" });
        case "bbbbb":
          return match3.dayPeriod(string, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return match3.dayPeriod(string, { width: "wide", context: "formatting" }) || match3.dayPeriod(string, { width: "abbreviated", context: "formatting" }) || match3.dayPeriod(string, { width: "narrow", context: "formatting" });
      }
    },
    set: function(date, value, options2) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return match3.dayPeriod(string, { width: "abbreviated", context: "formatting" }) || match3.dayPeriod(string, { width: "narrow", context: "formatting" });
        case "BBBBB":
          return match3.dayPeriod(string, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return match3.dayPeriod(string, { width: "wide", context: "formatting" }) || match3.dayPeriod(string, { width: "abbreviated", context: "formatting" }) || match3.dayPeriod(string, { width: "narrow", context: "formatting" });
      }
    },
    set: function(date, value, options2) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "h":
          return parseNumericPattern(numericPatterns.hour12h, string);
        case "ho":
          return match3.ordinalNumber(string, { unit: "hour" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      return value >= 1 && value <= 12;
    },
    set: function(date, value, options2) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "H":
          return parseNumericPattern(numericPatterns.hour23h, string);
        case "Ho":
          return match3.ordinalNumber(string, { unit: "hour" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 23;
    },
    set: function(date, value, options2) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "K":
          return parseNumericPattern(numericPatterns.hour11h, string);
        case "Ko":
          return match3.ordinalNumber(string, { unit: "hour" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 11;
    },
    set: function(date, value, options2) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "k":
          return parseNumericPattern(numericPatterns.hour24h, string);
        case "ko":
          return match3.ordinalNumber(string, { unit: "hour" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      return value >= 1 && value <= 24;
    },
    set: function(date, value, options2) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  },
  // Minute
  m: {
    priority: 60,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "m":
          return parseNumericPattern(numericPatterns.minute, string);
        case "mo":
          return match3.ordinalNumber(string, { unit: "minute" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 59;
    },
    set: function(date, value, options2) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  },
  // Second
  s: {
    priority: 50,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "s":
          return parseNumericPattern(numericPatterns.second, string);
        case "so":
          return match3.ordinalNumber(string, { unit: "second" });
        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function(date, value, options2) {
      return value >= 0 && value <= 59;
    },
    set: function(date, value, options2) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  },
  // Fraction of second
  S: {
    priority: 40,
    parse: function(string, token, match3, options2) {
      var valueCallback = function(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return parseNDigits(token.length, string, valueCallback);
    },
    set: function(date, value, options2) {
      date.setUTCMilliseconds(value);
      return date;
    }
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 20,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "X":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
        case "XX":
          return parseTimezonePattern(timezonePatterns.basic, string);
        case "XXXX":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
        case "XXXXX":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
        case "XXX":
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function(date, value, options2) {
      return new Date(date.getTime() - value);
    }
  },
  // Timezone (ISO-8601)
  x: {
    priority: 20,
    parse: function(string, token, match3, options2) {
      switch (token) {
        case "x":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
        case "xx":
          return parseTimezonePattern(timezonePatterns.basic, string);
        case "xxxx":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
        case "xxxxx":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
        case "xxx":
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function(date, value, options2) {
      return new Date(date.getTime() - value);
    }
  },
  // Seconds timestamp
  t: {
    priority: 10,
    parse: function(string, token, match3, options2) {
      return parseAnyDigitsSigned(string);
    },
    set: function(date, value, options2) {
      return new Date(value * 1e3);
    }
  },
  // Milliseconds timestamp
  T: {
    priority: 10,
    parse: function(string, token, match3, options2) {
      return parseAnyDigitsSigned(string);
    },
    set: function(date, value, options2) {
      return new Date(value);
    }
  }
};
var TIMEZONE_UNIT_PRIORITY = 20;
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'(.*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var notWhitespaceRegExp = /\S/;
function parse(dirtyDateString, dirtyFormatString, dirtyBaseDate, dirtyOptions) {
  if (arguments.length < 3) {
    throw new TypeError(
      "3 arguments required, but only " + arguments.length + " present"
    );
  }
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options2 = dirtyOptions || {};
  var locale2 = options2.locale || locale$1;
  if (!locale2.match) {
    throw new RangeError("locale must contain match property");
  }
  var localeFirstWeekContainsDate = locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options2.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options2.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  }
  var localeWeekStartsOn = locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options2.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options2.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (formatString === "") {
    if (dateString === "") {
      return toDate(dirtyBaseDate, options2);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2
  };
  var setters = [
    {
      priority: TIMEZONE_UNIT_PRIORITY,
      set: dateToSystemTimezone,
      index: 0
    }
  ];
  var i;
  var tokens = formatString.match(formattingTokensRegExp$1);
  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (!options2.awareOfUnicodeTokens && isProtectedToken(token)) {
      throwProtectedError(token);
    }
    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];
    if (parser) {
      var parseResult = parser.parse(
        dateString,
        token,
        locale2.match,
        subFnOptions
      );
      if (!parseResult) {
        return /* @__PURE__ */ new Date(NaN);
      }
      setters.push({
        priority: parser.priority,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString$1(token);
      }
      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function(setter2) {
    return setter2.priority;
  }).sort(function(a, b) {
    return b - a;
  }).filter(function(priority, index2, array) {
    return array.indexOf(priority) === index2;
  }).map(function(priority) {
    return setters.filter(function(setter2) {
      return setter2.priority === priority;
    }).reverse();
  }).map(function(setterArray) {
    return setterArray[0];
  });
  var date = toDate(dirtyBaseDate, options2);
  if (isNaN(date)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];
    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    utcDate = setter.set(utcDate, setter.value, subFnOptions);
  }
  return utcDate;
}
function dateToSystemTimezone(date) {
  var convertedDate = /* @__PURE__ */ new Date(0);
  convertedDate.setFullYear(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  convertedDate.setHours(
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  return convertedDate;
}
function cleanEscapedString$1(input) {
  return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
}
function parseDate$1(date, format$1) {
  if (typeof date !== "string") {
    return isValid(date) ? date : null;
  }
  var parsed = parse(date, format$1, /* @__PURE__ */ new Date());
  if (!isValid(parsed) || format(parsed, format$1) !== date) {
    return null;
  }
  return parsed;
}
var afterValidator = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var targetValue = ref2.targetValue;
  var inclusion = ref2.inclusion;
  if (inclusion === void 0)
    inclusion = false;
  var format2 = ref2.format;
  if (typeof format2 === "undefined") {
    format2 = inclusion;
    inclusion = false;
  }
  value = parseDate$1(value, format2);
  targetValue = parseDate$1(targetValue, format2);
  if (!value || !targetValue) {
    return false;
  }
  return isAfter(value, targetValue) || inclusion && isEqual$1$1(value, targetValue);
};
var options = {
  hasTarget: true,
  isDate: true
};
var paramNames = ["targetValue", "inclusion", "format"];
var after = {
  validate: afterValidator,
  options,
  paramNames
};
var alpha = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[A-Z\xC0-\xFF]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  sv: /^[A-ZÅÄÖ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ]*$/i
};
var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی\s]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  it: /^[A-Z\xC0-\xFF\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  sv: /^[A-ZÅÄÖ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i
};
var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[0-9A-Z\xC0-\xFF]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  sv: /^[0-9A-ZÅÄÖ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i
};
var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی_-]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  sv: /^[0-9A-ZÅÄÖ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i
};
var validate3 = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var locale2 = ref2.locale;
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate3(val, [locale2]);
    });
  }
  if (!locale2) {
    return Object.keys(alpha).some(function(loc) {
      return alpha[loc].test(value);
    });
  }
  return (alpha[locale2] || alpha.en).test(value);
};
var paramNames$1 = ["locale"];
var alpha$1 = {
  validate: validate3,
  paramNames: paramNames$1
};
var validate$1 = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var locale2 = ref2.locale;
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$1(val, [locale2]);
    });
  }
  if (!locale2) {
    return Object.keys(alphaDash).some(function(loc) {
      return alphaDash[loc].test(value);
    });
  }
  return (alphaDash[locale2] || alphaDash.en).test(value);
};
var paramNames$2 = ["locale"];
var alpha_dash = {
  validate: validate$1,
  paramNames: paramNames$2
};
var validate$2 = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var locale2 = ref2.locale;
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$2(val, [locale2]);
    });
  }
  if (!locale2) {
    return Object.keys(alphanumeric).some(function(loc) {
      return alphanumeric[loc].test(value);
    });
  }
  return (alphanumeric[locale2] || alphanumeric.en).test(value);
};
var paramNames$3 = ["locale"];
var alpha_num = {
  validate: validate$2,
  paramNames: paramNames$3
};
var validate$3 = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var locale2 = ref2.locale;
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$3(val, [locale2]);
    });
  }
  if (!locale2) {
    return Object.keys(alphaSpaces).some(function(loc) {
      return alphaSpaces[loc].test(value);
    });
  }
  return (alphaSpaces[locale2] || alphaSpaces.en).test(value);
};
var paramNames$4 = ["locale"];
var alpha_spaces = {
  validate: validate$3,
  paramNames: paramNames$4
};
var validate$4 = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var targetValue = ref2.targetValue;
  var inclusion = ref2.inclusion;
  if (inclusion === void 0)
    inclusion = false;
  var format2 = ref2.format;
  if (typeof format2 === "undefined") {
    format2 = inclusion;
    inclusion = false;
  }
  value = parseDate$1(value, format2);
  targetValue = parseDate$1(targetValue, format2);
  if (!value || !targetValue) {
    return false;
  }
  return isBefore(value, targetValue) || inclusion && isEqual$1$1(value, targetValue);
};
var options$1 = {
  hasTarget: true,
  isDate: true
};
var paramNames$5 = ["targetValue", "inclusion", "format"];
var before = {
  validate: validate$4,
  options: options$1,
  paramNames: paramNames$5
};
var validate$5 = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var min2 = ref2.min;
  var max2 = ref2.max;
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$5(val, { min: min2, max: max2 });
    });
  }
  return Number(min2) <= value && Number(max2) >= value;
};
var paramNames$6 = ["min", "max"];
var between = {
  validate: validate$5,
  paramNames: paramNames$6
};
var validate$6 = function(value, ref2) {
  var targetValue = ref2.targetValue;
  return String(value) === String(targetValue);
};
var options$2 = {
  hasTarget: true
};
var paramNames$7 = ["targetValue"];
var confirmed = {
  validate: validate$6,
  options: options$2,
  paramNames: paramNames$7
};
function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var assertString_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = assertString;
  function _typeof2(obj2) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj3) {
        return typeof obj3;
      };
    } else {
      _typeof2 = function _typeof3(obj3) {
        return obj3 && typeof Symbol === "function" && obj3.constructor === Symbol && obj3 !== Symbol.prototype ? "symbol" : typeof obj3;
      };
    }
    return _typeof2(obj2);
  }
  function assertString(input) {
    var isString = typeof input === "string" || input instanceof String;
    if (!isString) {
      var invalidType;
      if (input === null) {
        invalidType = "null";
      } else {
        invalidType = _typeof2(input);
        if (invalidType === "object" && input.constructor && input.constructor.hasOwnProperty("name")) {
          invalidType = input.constructor.name;
        } else {
          invalidType = "a ".concat(invalidType);
        }
      }
      throw new TypeError("Expected string but received ".concat(invalidType, "."));
    }
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
});
unwrapExports(assertString_1);
var isCreditCard_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isCreditCard2;
  var _assertString = _interopRequireDefault(assertString_1);
  function _interopRequireDefault(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
  function isCreditCard2(str) {
    (0, _assertString.default)(str);
    var sanitized = str.replace(/[- ]+/g, "");
    if (!creditCard.test(sanitized)) {
      return false;
    }
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for (var i = sanitized.length - 1; i >= 0; i--) {
      digit = sanitized.substring(i, i + 1);
      tmpNum = parseInt(digit, 10);
      if (shouldDouble) {
        tmpNum *= 2;
        if (tmpNum >= 10) {
          sum += tmpNum % 10 + 1;
        } else {
          sum += tmpNum;
        }
      } else {
        sum += tmpNum;
      }
      shouldDouble = !shouldDouble;
    }
    return !!(sum % 10 === 0 ? sanitized : false);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
});
var isCreditCard = unwrapExports(isCreditCard_1);
var validate$7 = function(value) {
  return isCreditCard(String(value));
};
var credit_card = {
  validate: validate$7
};
var validate$8 = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var min2 = ref2.min;
  var max2 = ref2.max;
  var inclusivity = ref2.inclusivity;
  if (inclusivity === void 0)
    inclusivity = "()";
  var format2 = ref2.format;
  if (typeof format2 === "undefined") {
    format2 = inclusivity;
    inclusivity = "()";
  }
  var minDate = parseDate$1(String(min2), format2);
  var maxDate = parseDate$1(String(max2), format2);
  var dateVal = parseDate$1(String(value), format2);
  if (!minDate || !maxDate || !dateVal) {
    return false;
  }
  if (inclusivity === "()") {
    return isAfter(dateVal, minDate) && isBefore(dateVal, maxDate);
  }
  if (inclusivity === "(]") {
    return isAfter(dateVal, minDate) && (isEqual$1$1(dateVal, maxDate) || isBefore(dateVal, maxDate));
  }
  if (inclusivity === "[)") {
    return isBefore(dateVal, maxDate) && (isEqual$1$1(dateVal, minDate) || isAfter(dateVal, minDate));
  }
  return isEqual$1$1(dateVal, maxDate) || isEqual$1$1(dateVal, minDate) || isBefore(dateVal, maxDate) && isAfter(dateVal, minDate);
};
var options$3 = {
  isDate: true
};
var paramNames$8 = ["min", "max", "inclusivity", "format"];
var date_between = {
  validate: validate$8,
  options: options$3,
  paramNames: paramNames$8
};
var validate$9 = function(value, ref2) {
  var format2 = ref2.format;
  return !!parseDate$1(value, format2);
};
var options$4 = {
  isDate: true
};
var paramNames$9 = ["format"];
var date_format = {
  validate: validate$9,
  options: options$4,
  paramNames: paramNames$9
};
var validate$a = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var decimals = ref2.decimals;
  if (decimals === void 0)
    decimals = "*";
  var separator = ref2.separator;
  if (separator === void 0)
    separator = ".";
  if (isNullOrUndefined(value) || value === "") {
    return false;
  }
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$a(val, { decimals, separator });
    });
  }
  if (Number(decimals) === 0) {
    return /^-?\d*$/.test(value);
  }
  var regexPart = decimals === "*" ? "+" : "{1," + decimals + "}";
  var regex2 = new RegExp("^[-+]?\\d*(\\" + separator + "\\d" + regexPart + ")?([eE]{1}[-]?\\d+)?$");
  if (!regex2.test(value)) {
    return false;
  }
  var parsedValue = parseFloat(value);
  return parsedValue === parsedValue;
};
var paramNames$a = ["decimals", "separator"];
var decimal = {
  validate: validate$a,
  paramNames: paramNames$a
};
var validate$b = function(value, ref2) {
  var length2 = ref2[0];
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$b(val, [length2]);
    });
  }
  var strVal = String(value);
  return /^[0-9]*$/.test(strVal) && strVal.length === Number(length2);
};
var digits = {
  validate: validate$b
};
var imageRegex = /\.(jpg|svg|jpeg|png|bmp|gif)$/i;
var validateImage = function(file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function(resolve2) {
    var image2 = new Image();
    image2.onerror = function() {
      return resolve2({ valid: false });
    };
    image2.onload = function() {
      return resolve2({
        valid: image2.width === Number(width) && image2.height === Number(height)
      });
    };
    image2.src = URL.createObjectURL(file);
  });
};
var validate$c = function(files, ref2) {
  var width = ref2[0];
  var height = ref2[1];
  var images = ensureArray(files).filter(function(file) {
    return imageRegex.test(file.name);
  });
  if (images.length === 0) {
    return false;
  }
  return Promise.all(images.map(function(image2) {
    return validateImage(image2, width, height);
  }));
};
var dimensions = {
  validate: validate$c
};
var merge_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = merge2;
  function merge2() {
    var obj2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var defaults = arguments.length > 1 ? arguments[1] : void 0;
    for (var key in defaults) {
      if (typeof obj2[key] === "undefined") {
        obj2[key] = defaults[key];
      }
    }
    return obj2;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
});
unwrapExports(merge_1$1);
var isByteLength_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isByteLength;
  var _assertString = _interopRequireDefault(assertString_1);
  function _interopRequireDefault(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  function _typeof2(obj2) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof3(obj3) {
        return typeof obj3;
      };
    } else {
      _typeof2 = function _typeof3(obj3) {
        return obj3 && typeof Symbol === "function" && obj3.constructor === Symbol && obj3 !== Symbol.prototype ? "symbol" : typeof obj3;
      };
    }
    return _typeof2(obj2);
  }
  function isByteLength(str, options2) {
    (0, _assertString.default)(str);
    var min2;
    var max2;
    if (_typeof2(options2) === "object") {
      min2 = options2.min || 0;
      max2 = options2.max;
    } else {
      min2 = arguments[1];
      max2 = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min2 && (typeof max2 === "undefined" || len <= max2);
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
});
unwrapExports(isByteLength_1);
var isFQDN_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isFQDN2;
  var _assertString = _interopRequireDefault(assertString_1);
  var _merge2 = _interopRequireDefault(merge_1$1);
  function _interopRequireDefault(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false
  };
  function isFQDN2(str, options2) {
    (0, _assertString.default)(str);
    options2 = (0, _merge2.default)(options2, default_fqdn_options);
    if (options2.allow_trailing_dot && str[str.length - 1] === ".") {
      str = str.substring(0, str.length - 1);
    }
    var parts = str.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].length > 63) {
        return false;
      }
    }
    if (options2.require_tld) {
      var tld = parts.pop();
      if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
        return false;
      }
      if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
        return false;
      }
    }
    for (var part, _i = 0; _i < parts.length; _i++) {
      part = parts[_i];
      if (options2.allow_underscores) {
        part = part.replace(/_/g, "");
      }
      if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
        return false;
      }
      if (/[\uff01-\uff5e]/.test(part)) {
        return false;
      }
      if (part[0] === "-" || part[part.length - 1] === "-") {
        return false;
      }
    }
    return true;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
});
var isFQDN = unwrapExports(isFQDN_1);
var isIP_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isIP2;
  var _assertString = _interopRequireDefault(assertString_1);
  function _interopRequireDefault(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  var ipv6Block = /^[0-9A-F]{1,4}$/i;
  function isIP2(str) {
    var version2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (0, _assertString.default)(str);
    version2 = String(version2);
    if (!version2) {
      return isIP2(str, 4) || isIP2(str, 6);
    } else if (version2 === "4") {
      if (!ipv4Maybe.test(str)) {
        return false;
      }
      var parts = str.split(".").sort(function(a, b) {
        return a - b;
      });
      return parts[3] <= 255;
    } else if (version2 === "6") {
      var blocks = str.split(":");
      var foundOmissionBlock = false;
      var foundIPv4TransitionBlock = isIP2(blocks[blocks.length - 1], 4);
      var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;
      if (blocks.length > expectedNumberOfBlocks) {
        return false;
      }
      if (str === "::") {
        return true;
      } else if (str.substr(0, 2) === "::") {
        blocks.shift();
        blocks.shift();
        foundOmissionBlock = true;
      } else if (str.substr(str.length - 2) === "::") {
        blocks.pop();
        blocks.pop();
        foundOmissionBlock = true;
      }
      for (var i = 0; i < blocks.length; ++i) {
        if (blocks[i] === "" && i > 0 && i < blocks.length - 1) {
          if (foundOmissionBlock) {
            return false;
          }
          foundOmissionBlock = true;
        } else if (foundIPv4TransitionBlock && i === blocks.length - 1)
          ;
        else if (!ipv6Block.test(blocks[i])) {
          return false;
        }
      }
      if (foundOmissionBlock) {
        return blocks.length >= 1;
      }
      return blocks.length === expectedNumberOfBlocks;
    }
    return false;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
});
var isIP = unwrapExports(isIP_1);
var isEmail_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isEmail2;
  var _assertString = _interopRequireDefault(assertString_1);
  var _merge2 = _interopRequireDefault(merge_1$1);
  var _isByteLength = _interopRequireDefault(isByteLength_1);
  var _isFQDN = _interopRequireDefault(isFQDN_1);
  var _isIP = _interopRequireDefault(isIP_1);
  function _interopRequireDefault(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var default_email_options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true
  };
  var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
  var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
  var gmailUserPart = /^[a-z\d]+$/;
  var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
  var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
  var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  function isEmail2(str, options2) {
    (0, _assertString.default)(str);
    options2 = (0, _merge2.default)(options2, default_email_options);
    if (options2.require_display_name || options2.allow_display_name) {
      var display_email = str.match(displayName);
      if (display_email) {
        str = display_email[1];
      } else if (options2.require_display_name) {
        return false;
      }
    }
    var parts = str.split("@");
    var domain = parts.pop();
    var user = parts.join("@");
    var lower_domain = domain.toLowerCase();
    if (options2.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
      user = user.toLowerCase();
      var username = user.split("+")[0];
      if (!(0, _isByteLength.default)(username.replace(".", ""), {
        min: 6,
        max: 30
      })) {
        return false;
      }
      var _user_parts = username.split(".");
      for (var i = 0; i < _user_parts.length; i++) {
        if (!gmailUserPart.test(_user_parts[i])) {
          return false;
        }
      }
    }
    if (!(0, _isByteLength.default)(user, {
      max: 64
    }) || !(0, _isByteLength.default)(domain, {
      max: 254
    })) {
      return false;
    }
    if (!(0, _isFQDN.default)(domain, {
      require_tld: options2.require_tld
    })) {
      if (!options2.allow_ip_domain) {
        return false;
      }
      if (!(0, _isIP.default)(domain)) {
        if (!domain.startsWith("[") || !domain.endsWith("]")) {
          return false;
        }
        var noBracketdomain = domain.substr(1, domain.length - 2);
        if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
          return false;
        }
      }
    }
    if (user[0] === '"') {
      user = user.slice(1, user.length - 1);
      return options2.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }
    var pattern = options2.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split(".");
    for (var _i = 0; _i < user_parts.length; _i++) {
      if (!pattern.test(user_parts[_i])) {
        return false;
      }
    }
    return true;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
});
var isEmail = unwrapExports(isEmail_1);
function objectWithoutProperties(obj2, exclude) {
  var target2 = {};
  for (var k in obj2)
    if (Object.prototype.hasOwnProperty.call(obj2, k) && exclude.indexOf(k) === -1)
      target2[k] = obj2[k];
  return target2;
}
var validate$d = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var multiple = ref2.multiple;
  if (multiple === void 0)
    multiple = false;
  var rest = objectWithoutProperties(ref2, ["multiple"]);
  var options2 = rest;
  if (multiple && !Array.isArray(value)) {
    value = String(value).split(",").map(function(emailStr) {
      return emailStr.trim();
    });
  }
  var validatorOptions = assign({}, options2);
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return isEmail(String(val), validatorOptions);
    });
  }
  return isEmail(String(value), validatorOptions);
};
var email = {
  validate: validate$d
};
var validate$e = function(value, options2) {
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$e(val, options2);
    });
  }
  return toArray(options2).some(function(item) {
    return item == value;
  });
};
var included = {
  validate: validate$e
};
var validate$f = function() {
  var args = [], len = arguments.length;
  while (len--)
    args[len] = arguments[len];
  return !validate$e.apply(void 0, args);
};
var excluded = {
  validate: validate$f
};
var validate$g = function(files, extensions) {
  var regex2 = new RegExp(".(" + extensions.join("|") + ")$", "i");
  return ensureArray(files).every(function(file) {
    return regex2.test(file.name);
  });
};
var ext = {
  validate: validate$g
};
var validate$h = function(files) {
  return (Array.isArray(files) ? files : [files]).every(function(file) {
    return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(file.name);
  });
};
var image = {
  validate: validate$h
};
var validate$i = function(value) {
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return /^-?[0-9]+$/.test(String(val));
    });
  }
  return /^-?[0-9]+$/.test(String(value));
};
var integer = {
  validate: validate$i
};
var validate$j = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var version2 = ref2.version;
  if (version2 === void 0)
    version2 = 4;
  if (isNullOrUndefined(value)) {
    value = "";
  }
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return isIP(val, version2);
    });
  }
  return isIP(value, version2);
};
var paramNames$b = ["version"];
var ip = {
  validate: validate$j,
  paramNames: paramNames$b
};
var validate$k = function(value) {
  if (isNullOrUndefined(value)) {
    value = "";
  }
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return isIP(val, "") || isFQDN(val);
    });
  }
  return isIP(value, "") || isFQDN(value);
};
var ip_or_fqdn = {
  validate: validate$k
};
var validate$l = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = [];
  var other = ref2[0];
  return value === other;
};
var is = {
  validate: validate$l
};
var validate$m = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = [];
  var other = ref2[0];
  return value !== other;
};
var is_not = {
  validate: validate$m
};
var compare = function(value, length2, max2) {
  if (max2 === void 0) {
    return value.length === length2;
  }
  max2 = Number(max2);
  return value.length >= length2 && value.length <= max2;
};
var validate$n = function(value, ref2) {
  var length2 = ref2[0];
  var max2 = ref2[1];
  if (max2 === void 0)
    max2 = void 0;
  if (isNullOrUndefined(value)) {
    return false;
  }
  length2 = Number(length2);
  if (typeof value === "number") {
    value = String(value);
  }
  if (!value.length) {
    value = toArray(value);
  }
  return compare(value, length2, max2);
};
var length = {
  validate: validate$n
};
var validate$o = function(value, ref2) {
  var length2 = ref2[0];
  if (isNullOrUndefined(value)) {
    return length2 >= 0;
  }
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$o(val, [length2]);
    });
  }
  return String(value).length <= length2;
};
var max = {
  validate: validate$o
};
var validate$p = function(value, ref2) {
  var max2 = ref2[0];
  if (isNullOrUndefined(value) || value === "") {
    return false;
  }
  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function(val) {
      return validate$p(val, [max2]);
    });
  }
  return Number(value) <= max2;
};
var max_value = {
  validate: validate$p
};
var validate$q = function(files, mimes2) {
  var regex2 = new RegExp(mimes2.join("|").replace("*", ".+") + "$", "i");
  return ensureArray(files).every(function(file) {
    return regex2.test(file.type);
  });
};
var mimes = {
  validate: validate$q
};
var validate$r = function(value, ref2) {
  var length2 = ref2[0];
  if (isNullOrUndefined(value)) {
    return false;
  }
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$r(val, [length2]);
    });
  }
  return String(value).length >= length2;
};
var min = {
  validate: validate$r
};
var validate$s = function(value, ref2) {
  var min2 = ref2[0];
  if (isNullOrUndefined(value) || value === "") {
    return false;
  }
  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function(val) {
      return validate$s(val, [min2]);
    });
  }
  return Number(value) >= min2;
};
var min_value = {
  validate: validate$s
};
var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;
var validate$t = function(value) {
  var testValue = function(val) {
    var strValue = String(val);
    return en.test(strValue) || ar.test(strValue);
  };
  if (Array.isArray(value)) {
    return value.every(testValue);
  }
  return testValue(value);
};
var numeric = {
  validate: validate$t
};
var validate$u = function(value, ref2) {
  var expression = ref2.expression;
  if (typeof expression === "string") {
    expression = new RegExp(expression);
  }
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return validate$u(val, { expression });
    });
  }
  return expression.test(String(value));
};
var paramNames$c = ["expression"];
var regex = {
  validate: validate$u,
  paramNames: paramNames$c
};
var validate$v = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = [];
  var invalidateFalse = ref2[0];
  if (invalidateFalse === void 0)
    invalidateFalse = false;
  if (isNullOrUndefined(value) || isEmptyArray(value)) {
    return false;
  }
  if (value === false && invalidateFalse) {
    return false;
  }
  return !!String(value).trim().length;
};
var required = {
  validate: validate$v
};
var validate$w = function(value, ref2) {
  if (ref2 === void 0)
    ref2 = [];
  var otherFieldVal = ref2[0];
  var possibleVals = ref2.slice(1);
  var required2 = possibleVals.includes(String(otherFieldVal).trim());
  if (!required2) {
    return {
      valid: true,
      data: {
        required: required2
      }
    };
  }
  var invalid = isEmptyArray(value) || [false, null, void 0].includes(value);
  invalid = invalid || !String(value).trim().length;
  return {
    valid: !invalid,
    data: {
      required: required2
    }
  };
};
var options$5 = {
  hasTarget: true,
  computesRequired: true
};
var required_if = {
  validate: validate$w,
  options: options$5
};
var validate$x = function(files, ref2) {
  var size2 = ref2[0];
  if (isNaN(size2)) {
    return false;
  }
  var nSize = Number(size2) * 1024;
  return ensureArray(files).every(function(file) {
    return file.size <= nSize;
  });
};
var size = {
  validate: validate$x
};
var isURL_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isURL2;
  var _assertString = _interopRequireDefault(assertString_1);
  var _isFQDN = _interopRequireDefault(isFQDN_1);
  var _isIP = _interopRequireDefault(isIP_1);
  var _merge2 = _interopRequireDefault(merge_1$1);
  function _interopRequireDefault(obj2) {
    return obj2 && obj2.__esModule ? obj2 : { default: obj2 };
  }
  var default_url_options = {
    protocols: ["http", "https", "ftp"],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false
  };
  var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function isRegExp2(obj2) {
    return Object.prototype.toString.call(obj2) === "[object RegExp]";
  }
  function checkHost(host, matches3) {
    for (var i = 0; i < matches3.length; i++) {
      var match3 = matches3[i];
      if (host === match3 || isRegExp2(match3) && match3.test(host)) {
        return true;
      }
    }
    return false;
  }
  function isURL2(url2, options2) {
    (0, _assertString.default)(url2);
    if (!url2 || url2.length >= 2083 || /[\s<>]/.test(url2)) {
      return false;
    }
    if (url2.indexOf("mailto:") === 0) {
      return false;
    }
    options2 = (0, _merge2.default)(options2, default_url_options);
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url2.split("#");
    url2 = split.shift();
    split = url2.split("?");
    url2 = split.shift();
    split = url2.split("://");
    if (split.length > 1) {
      protocol = split.shift().toLowerCase();
      if (options2.require_valid_protocol && options2.protocols.indexOf(protocol) === -1) {
        return false;
      }
    } else if (options2.require_protocol) {
      return false;
    } else if (url2.substr(0, 2) === "//") {
      if (!options2.allow_protocol_relative_urls) {
        return false;
      }
      split[0] = url2.substr(2);
    }
    url2 = split.join("://");
    if (url2 === "") {
      return false;
    }
    split = url2.split("/");
    url2 = split.shift();
    if (url2 === "" && !options2.require_host) {
      return true;
    }
    split = url2.split("@");
    if (split.length > 1) {
      if (options2.disallow_auth) {
        return false;
      }
      auth = split.shift();
      if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) {
        return false;
      }
    }
    hostname = split.join("@");
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
      host = "";
      ipv6 = ipv6_match[1];
      port_str = ipv6_match[2] || null;
    } else {
      split = hostname.split(":");
      host = split.shift();
      if (split.length) {
        port_str = split.join(":");
      }
    }
    if (port_str !== null) {
      port = parseInt(port_str, 10);
      if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
        return false;
      }
    }
    if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options2) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
      return false;
    }
    host = host || ipv6;
    if (options2.host_whitelist && !checkHost(host, options2.host_whitelist)) {
      return false;
    }
    if (options2.host_blacklist && checkHost(host, options2.host_blacklist)) {
      return false;
    }
    return true;
  }
  module.exports = exports.default;
  module.exports.default = exports.default;
});
var isURL = unwrapExports(isURL_1);
var validate$y = function(value, options2) {
  if (options2 === void 0)
    options2 = {};
  if (isNullOrUndefined(value)) {
    value = "";
  }
  var validatorOptions = assign({}, options2);
  if (Array.isArray(value)) {
    return value.every(function(val) {
      return isURL(val, validatorOptions);
    });
  }
  return isURL(value, validatorOptions);
};
var url = {
  validate: validate$y
};
var Rules = /* @__PURE__ */ Object.freeze({
  after,
  alpha_dash,
  alpha_num,
  alpha_spaces,
  alpha: alpha$1,
  before,
  between,
  confirmed,
  credit_card,
  date_between,
  date_format,
  decimal,
  digits,
  dimensions,
  email,
  ext,
  image,
  included,
  integer,
  length,
  ip,
  ip_or_fqdn,
  is_not,
  is,
  max,
  max_value,
  mimes,
  min,
  min_value,
  excluded,
  numeric,
  regex,
  required,
  required_if,
  size,
  url
});
var normalize = function(fields) {
  if (Array.isArray(fields)) {
    return fields.reduce(function(prev, curr) {
      if (includes(curr, ".")) {
        prev[curr.split(".")[1]] = curr;
      } else {
        prev[curr] = curr;
      }
      return prev;
    }, {});
  }
  return fields;
};
var combine = function(lhs, rhs) {
  var mapper = {
    pristine: function(lhs2, rhs2) {
      return lhs2 && rhs2;
    },
    dirty: function(lhs2, rhs2) {
      return lhs2 || rhs2;
    },
    touched: function(lhs2, rhs2) {
      return lhs2 || rhs2;
    },
    untouched: function(lhs2, rhs2) {
      return lhs2 && rhs2;
    },
    valid: function(lhs2, rhs2) {
      return lhs2 && rhs2;
    },
    invalid: function(lhs2, rhs2) {
      return lhs2 || rhs2;
    },
    pending: function(lhs2, rhs2) {
      return lhs2 || rhs2;
    },
    required: function(lhs2, rhs2) {
      return lhs2 || rhs2;
    },
    validated: function(lhs2, rhs2) {
      return lhs2 && rhs2;
    }
  };
  return Object.keys(mapper).reduce(function(flags2, flag3) {
    flags2[flag3] = mapper[flag3](lhs[flag3], rhs[flag3]);
    return flags2;
  }, {});
};
var mapScope = function(scope, deep) {
  if (deep === void 0)
    deep = true;
  return Object.keys(scope).reduce(function(flags2, field) {
    if (!flags2) {
      flags2 = assign({}, scope[field]);
      return flags2;
    }
    var isScope = field.indexOf("$") === 0;
    if (deep && isScope) {
      return combine(mapScope(scope[field]), flags2);
    } else if (!deep && isScope) {
      return flags2;
    }
    flags2 = combine(flags2, scope[field]);
    return flags2;
  }, null);
};
var mapFields = function(fields) {
  if (!fields) {
    return function() {
      return mapScope(this.$validator.flags);
    };
  }
  var normalized = normalize(fields);
  return Object.keys(normalized).reduce(function(prev, curr) {
    var field = normalized[curr];
    prev[curr] = function mappedField() {
      if (this.$validator.flags[field]) {
        return this.$validator.flags[field];
      }
      if (normalized[curr] === "*") {
        return mapScope(this.$validator.flags, false);
      }
      var index2 = field.indexOf(".");
      if (index2 <= 0) {
        return {};
      }
      var ref2 = field.split(".");
      var scope = ref2[0];
      var name = ref2.slice(1);
      scope = this.$validator.flags["$" + scope];
      name = name.join(".");
      if (name === "*" && scope) {
        return mapScope(scope);
      }
      if (scope && scope[name]) {
        return scope[name];
      }
      return {};
    };
    return prev;
  }, {});
};
var $validator = null;
var PROVIDER_COUNTER = 0;
var ValidationProvider = {
  $__veeInject: false,
  inject: {
    $_veeObserver: {
      from: "$_veeObserver",
      default: function default$1() {
        if (!this.$vnode.context.$_veeObserver) {
          this.$vnode.context.$_veeObserver = createObserver();
        }
        return this.$vnode.context.$_veeObserver;
      }
    }
  },
  props: {
    vid: {
      type: [String, Number],
      default: function() {
        PROVIDER_COUNTER++;
        return "_vee_" + PROVIDER_COUNTER;
      }
    },
    name: {
      type: String,
      default: null
    },
    mode: {
      type: [String, Function],
      default: function() {
        return getConfig().mode;
      }
    },
    events: {
      type: Array,
      validate: function() {
        return true;
      },
      default: function() {
        var events2 = getConfig().events;
        if (typeof events2 === "string") {
          return events2.split("|");
        }
        return events2;
      }
    },
    rules: {
      type: [Object, String],
      default: null
    },
    immediate: {
      type: Boolean,
      default: false
    },
    persist: {
      type: Boolean,
      default: false
    },
    bails: {
      type: Boolean,
      default: function() {
        return getConfig().fastExit;
      }
    },
    debounce: {
      type: Number,
      default: function() {
        return getConfig().delay || 0;
      }
    },
    tag: {
      type: String,
      default: "span"
    },
    slim: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    rules: {
      deep: true,
      handler: function handler(val, oldVal) {
        this._needsValidation = !isEqual$2(val, oldVal);
      }
    }
  },
  data: function() {
    return {
      messages: [],
      value: void 0,
      initialized: false,
      initialValue: void 0,
      flags: createFlags(),
      failedRules: {},
      forceRequired: false,
      isDeactivated: false,
      id: null
    };
  },
  computed: {
    isValid: function isValid2() {
      return this.flags.valid;
    },
    fieldDeps: function fieldDeps() {
      var this$1$1 = this;
      var rules = normalizeRules(this.rules);
      return Object.keys(rules).filter(RuleContainer.isTargetRule).map(function(rule) {
        var depName = rules[rule][0];
        watchCrossFieldDep(this$1$1, depName);
        return depName;
      });
    },
    normalizedEvents: function normalizedEvents() {
      var this$1$1 = this;
      var ref2 = computeModeSetting(this);
      var on = ref2.on;
      return normalizeEvents(on || this.events || []).map(function(e) {
        if (e === "input") {
          return this$1$1._inputEventName;
        }
        return e;
      });
    },
    isRequired: function isRequired() {
      var rules = normalizeRules(this.rules);
      var forceRequired = this.forceRequired;
      var isRequired2 = rules.required || forceRequired;
      this.flags.required = isRequired2;
      return isRequired2;
    },
    classes: function classes() {
      var this$1$1 = this;
      var names = getConfig().classNames;
      return Object.keys(this.flags).reduce(function(classes2, flag3) {
        var className = names && names[flag3] || flag3;
        if (isNullOrUndefined(this$1$1.flags[flag3])) {
          return classes2;
        }
        if (className) {
          classes2[className] = this$1$1.flags[flag3];
        }
        return classes2;
      }, {});
    }
  },
  render: function render7(h) {
    var this$1$1 = this;
    this.registerField();
    var ctx2 = createValidationCtx(this);
    var slot = this.$scopedSlots.default;
    if (!isCallable(slot)) {
      return h(this.tag, this.$slots.default);
    }
    var nodes = slot(ctx2);
    extractVNodes(nodes).forEach(function(input) {
      addListeners$1.call(this$1$1, input);
    });
    return this.slim ? createRenderless(h, nodes) : h(this.tag, nodes);
  },
  beforeDestroy: function beforeDestroy2() {
    this.$_veeObserver.unsubscribe(this);
  },
  activated: function activated() {
    this.$_veeObserver.subscribe(this);
    this.isDeactivated = false;
  },
  deactivated: function deactivated() {
    this.$_veeObserver.unsubscribe(this);
    this.isDeactivated = true;
  },
  methods: {
    setFlags: function setFlags2(flags2) {
      var this$1$1 = this;
      Object.keys(flags2).forEach(function(flag3) {
        this$1$1.flags[flag3] = flags2[flag3];
      });
    },
    syncValue: function syncValue(e) {
      var value = normalizeValue$1(e);
      this.value = value;
      this.flags.changed = this.initialValue !== value;
    },
    reset: function reset4() {
      this.messages = [];
      this._pendingValidation = null;
      this.initialValue = this.value;
      var flags2 = createFlags();
      this.setFlags(flags2);
    },
    validate: function validate4() {
      var this$1$1 = this;
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      if (args.length > 0) {
        this.syncValue(args[0]);
      }
      return this.validateSilent().then(function(result) {
        this$1$1.applyResult(result);
        return result;
      });
    },
    validateSilent: function validateSilent() {
      var this$1$1 = this;
      this.setFlags({ pending: true });
      return $validator.verify(this.value, this.rules, {
        name: this.name,
        values: createValuesLookup(this),
        bails: this.bails
      }).then(function(result) {
        this$1$1.setFlags({ pending: false });
        if (!this$1$1.isRequired) {
          this$1$1.setFlags({ valid: result.valid, invalid: !result.valid });
        }
        return result;
      });
    },
    applyResult: function applyResult(ref2) {
      var errors = ref2.errors;
      var failedRules = ref2.failedRules;
      this.messages = errors;
      this.failedRules = assign({}, failedRules);
      this.setFlags({
        valid: !errors.length,
        changed: this.value !== this.initialValue,
        invalid: !!errors.length,
        validated: true
      });
    },
    registerField: function registerField() {
      if (!$validator) {
        $validator = getValidator() || new Validator(null, { fastExit: getConfig().fastExit });
      }
      updateRenderingContextRefs(this);
    }
  }
};
function createValidationCtx(ctx2) {
  return {
    errors: ctx2.messages,
    flags: ctx2.flags,
    classes: ctx2.classes,
    valid: ctx2.isValid,
    failedRules: ctx2.failedRules,
    reset: function() {
      return ctx2.reset();
    },
    validate: function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return ctx2.validate.apply(ctx2, args);
    },
    aria: {
      "aria-invalid": ctx2.flags.invalid ? "true" : "false",
      "aria-required": ctx2.isRequired ? "true" : "false"
    }
  };
}
function normalizeValue$1(value) {
  if (isEvent(value)) {
    return value.target.type === "file" ? toArray(value.target.files) : value.target.value;
  }
  return value;
}
function shouldValidate(ctx2, model) {
  if (!ctx2._ignoreImmediate && ctx2.immediate) {
    return true;
  }
  if (ctx2.value !== model.value) {
    return true;
  }
  if (ctx2._needsValidation) {
    return true;
  }
  if (!ctx2.initialized && model.value === void 0) {
    return true;
  }
  return false;
}
function computeModeSetting(ctx2) {
  var compute = isCallable(ctx2.mode) ? ctx2.mode : modes[ctx2.mode];
  return compute({
    errors: ctx2.messages,
    value: ctx2.value,
    flags: ctx2.flags
  });
}
function onRenderUpdate(model) {
  if (!this.initialized) {
    this.initialValue = model.value;
  }
  var validateNow = shouldValidate(this, model);
  this._needsValidation = false;
  this.value = model.value;
  this._ignoreImmediate = true;
  if (!validateNow) {
    return;
  }
  this.validateSilent().then(this.immediate || this.flags.validated ? this.applyResult : function(x) {
    return x;
  });
}
function createCommonHandlers(ctx2) {
  var onInput = function(e) {
    ctx2.syncValue(e);
    ctx2.setFlags({ dirty: true, pristine: false });
  };
  var onBlur = function() {
    ctx2.setFlags({ touched: true, untouched: false });
  };
  var onValidate = ctx2.$veeHandler;
  var mode = computeModeSetting(ctx2);
  if (!onValidate || ctx2.$veeDebounce !== ctx2.debounce) {
    onValidate = debounce$1(
      function() {
        ctx2.$nextTick(function() {
          var pendingPromise = ctx2.validateSilent();
          ctx2._pendingValidation = pendingPromise;
          pendingPromise.then(function(result) {
            if (pendingPromise === ctx2._pendingValidation) {
              ctx2.applyResult(result);
              ctx2._pendingValidation = null;
            }
          });
        });
      },
      mode.debounce || ctx2.debounce
    );
    ctx2.$veeHandler = onValidate;
    ctx2.$veeDebounce = ctx2.debounce;
  }
  return { onInput, onBlur, onValidate };
}
function addListeners$1(node) {
  var model = findModel(node);
  this._inputEventName = this._inputEventName || getInputEventName(node, model);
  onRenderUpdate.call(this, model);
  var ref2 = createCommonHandlers(this);
  var onInput = ref2.onInput;
  var onBlur = ref2.onBlur;
  var onValidate = ref2.onValidate;
  addVNodeListener(node, this._inputEventName, onInput);
  addVNodeListener(node, "blur", onBlur);
  this.normalizedEvents.forEach(function(evt) {
    addVNodeListener(node, evt, onValidate);
  });
  this.initialized = true;
}
function createValuesLookup(ctx2) {
  var providers = ctx2.$_veeObserver.refs;
  return ctx2.fieldDeps.reduce(function(acc, depName) {
    if (!providers[depName]) {
      return acc;
    }
    acc[depName] = providers[depName].value;
    return acc;
  }, {});
}
function updateRenderingContextRefs(ctx2) {
  if (isNullOrUndefined(ctx2.id) && ctx2.id === ctx2.vid) {
    ctx2.id = PROVIDER_COUNTER;
    PROVIDER_COUNTER++;
  }
  var id2 = ctx2.id;
  var vid = ctx2.vid;
  if (ctx2.isDeactivated || id2 === vid && ctx2.$_veeObserver.refs[id2]) {
    return;
  }
  if (id2 !== vid && ctx2.$_veeObserver.refs[id2] === ctx2) {
    ctx2.$_veeObserver.unsubscribe({ vid: id2 });
  }
  ctx2.$_veeObserver.subscribe(ctx2);
  ctx2.id = vid;
}
function createObserver() {
  return {
    refs: {},
    subscribe: function subscribe2(ctx2) {
      this.refs[ctx2.vid] = ctx2;
    },
    unsubscribe: function unsubscribe2(ctx2) {
      delete this.refs[ctx2.vid];
    }
  };
}
function watchCrossFieldDep(ctx2, depName, withHooks) {
  if (withHooks === void 0)
    withHooks = true;
  var providers = ctx2.$_veeObserver.refs;
  if (!ctx2._veeWatchers) {
    ctx2._veeWatchers = {};
  }
  if (!providers[depName] && withHooks) {
    return ctx2.$once("hook:mounted", function() {
      watchCrossFieldDep(ctx2, depName, false);
    });
  }
  if (!isCallable(ctx2._veeWatchers[depName]) && providers[depName]) {
    ctx2._veeWatchers[depName] = providers[depName].$watch("value", function() {
      if (ctx2.flags.validated) {
        ctx2._needsValidation = true;
        ctx2.validate();
      }
    });
  }
}
var flagMergingStrategy = {
  pristine: "every",
  dirty: "some",
  touched: "some",
  untouched: "every",
  valid: "every",
  invalid: "some",
  pending: "some",
  validated: "every"
};
function mergeFlags(lhs, rhs, strategy) {
  var stratName = flagMergingStrategy[strategy];
  return [lhs, rhs][stratName](function(f) {
    return f;
  });
}
var OBSERVER_COUNTER = 0;
var ValidationObserver = {
  name: "ValidationObserver",
  provide: function provide2() {
    return {
      $_veeObserver: this
    };
  },
  inject: {
    $_veeObserver: {
      from: "$_veeObserver",
      default: function default$12() {
        if (!this.$vnode.context.$_veeObserver) {
          return null;
        }
        return this.$vnode.context.$_veeObserver;
      }
    }
  },
  props: {
    tag: {
      type: String,
      default: "span"
    },
    slim: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      vid: "obs_" + OBSERVER_COUNTER++,
      refs: {},
      observers: [],
      persistedStore: {}
    };
  },
  computed: {
    ctx: function ctx() {
      var this$1$1 = this;
      var ctx2 = {
        errors: {},
        validate: function(arg) {
          var promise = this$1$1.validate(arg);
          return {
            then: function then(thenable) {
              return promise.then(function(success) {
                if (success && isCallable(thenable)) {
                  return Promise.resolve(thenable());
                }
                return Promise.resolve(success);
              });
            }
          };
        },
        reset: function() {
          return this$1$1.reset();
        }
      };
      return values(this.refs).concat(
        Object.keys(this.persistedStore).map(function(key) {
          return {
            vid: key,
            flags: this$1$1.persistedStore[key].flags,
            messages: this$1$1.persistedStore[key].errors
          };
        }),
        this.observers
      ).reduce(function(acc, provider) {
        Object.keys(flagMergingStrategy).forEach(function(flag3) {
          var flags2 = provider.flags || provider.ctx;
          if (!(flag3 in acc)) {
            acc[flag3] = flags2[flag3];
            return;
          }
          acc[flag3] = mergeFlags(acc[flag3], flags2[flag3], flag3);
        });
        acc.errors[provider.vid] = provider.messages || values(provider.ctx.errors).reduce(function(errs, obsErrors) {
          return errs.concat(obsErrors);
        }, []);
        return acc;
      }, ctx2);
    }
  },
  created: function created2() {
    if (this.$_veeObserver) {
      this.$_veeObserver.subscribe(this, "observer");
    }
  },
  activated: function activated2() {
    if (this.$_veeObserver) {
      this.$_veeObserver.subscribe(this, "observer");
    }
  },
  deactivated: function deactivated2() {
    if (this.$_veeObserver) {
      this.$_veeObserver.unsubscribe(this, "observer");
    }
  },
  beforeDestroy: function beforeDestroy3() {
    if (this.$_veeObserver) {
      this.$_veeObserver.unsubscribe(this, "observer");
    }
  },
  render: function render8(h) {
    var slots = this.$slots.default || this.$scopedSlots.default || [];
    if (isCallable(slots)) {
      slots = slots(this.ctx);
    }
    return this.slim ? createRenderless(h, slots) : h(this.tag, { on: this.$listeners, attrs: this.$attrs }, slots);
  },
  methods: {
    subscribe: function subscribe(subscriber, kind) {
      var obj2;
      if (kind === void 0)
        kind = "provider";
      if (kind === "observer") {
        this.observers.push(subscriber);
        return;
      }
      this.refs = Object.assign({}, this.refs, (obj2 = {}, obj2[subscriber.vid] = subscriber, obj2));
      if (subscriber.persist && this.persistedStore[subscriber.vid]) {
        this.restoreProviderState(subscriber);
      }
    },
    unsubscribe: function unsubscribe(ref2, kind) {
      var vid = ref2.vid;
      if (kind === void 0)
        kind = "provider";
      if (kind === "provider") {
        this.removeProvider(vid);
      }
      var idx = findIndex$1(this.observers, function(o) {
        return o.vid === vid;
      });
      if (idx !== -1) {
        this.observers.splice(idx, 1);
      }
    },
    validate: function validate5(ref2) {
      if (ref2 === void 0)
        ref2 = { silent: false };
      var silent = ref2.silent;
      return Promise.all(values(this.refs).map(function(ref3) {
        return ref3[silent ? "validateSilent" : "validate"]().then(function(r) {
          return r.valid;
        });
      }).concat(
        this.observers.map(function(obs) {
          return obs.validate({ silent });
        })
      )).then(function(results) {
        return results.every(function(r) {
          return r;
        });
      });
    },
    reset: function reset5() {
      var this$1$1 = this;
      Object.keys(this.persistedStore).forEach(function(key) {
        this$1$1.$delete(this$1$1.persistedStore, key);
      });
      return values(this.refs).concat(this.observers).forEach(function(ref2) {
        return ref2.reset();
      });
    },
    restoreProviderState: function restoreProviderState(provider) {
      var state2 = this.persistedStore[provider.vid];
      provider.setFlags(state2.flags);
      provider.applyResult(state2);
      this.$delete(this.persistedStore, provider.vid);
    },
    removeProvider: function removeProvider(vid) {
      var obj2;
      var provider = this.refs[vid];
      if (provider && provider.persist) {
        this.persistedStore = assign({}, this.persistedStore, (obj2 = {}, obj2[vid] = {
          flags: provider.flags,
          errors: provider.messages,
          failedRules: provider.failedRules
        }, obj2));
      }
      this.$delete(this.refs, vid);
    }
  }
};
function withValidation(component, ctxToProps) {
  if (ctxToProps === void 0)
    ctxToProps = null;
  var options2 = isCallable(component) ? component.options : component;
  options2.$__veeInject = false;
  var hoc = {
    name: (options2.name || "AnonymousHoc") + "WithValidation",
    props: assign({}, ValidationProvider.props),
    data: ValidationProvider.data,
    computed: assign({}, ValidationProvider.computed),
    methods: assign({}, ValidationProvider.methods),
    $__veeInject: false,
    beforeDestroy: ValidationProvider.beforeDestroy,
    inject: ValidationProvider.inject
  };
  if (!ctxToProps) {
    ctxToProps = function(ctx2) {
      return ctx2;
    };
  }
  var eventName = options2.model && options2.model.event || "input";
  hoc.render = function(h) {
    var obj2;
    this.registerField();
    var vctx = createValidationCtx(this);
    var listeners = assign({}, this.$listeners);
    var model = findModel(this.$vnode);
    this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
    onRenderUpdate.call(this, model);
    var ref2 = createCommonHandlers(this);
    var onInput = ref2.onInput;
    var onBlur = ref2.onBlur;
    var onValidate = ref2.onValidate;
    mergeVNodeListeners(listeners, eventName, onInput);
    mergeVNodeListeners(listeners, "blur", onBlur);
    this.normalizedEvents.forEach(function(evt, idx) {
      mergeVNodeListeners(listeners, evt, onValidate);
    });
    var ref$1 = findModelConfig(this.$vnode) || { prop: "value" };
    var prop = ref$1.prop;
    var props2 = assign({}, this.$attrs, (obj2 = {}, obj2[prop] = model.value, obj2), ctxToProps(vctx));
    return h(options2, {
      attrs: this.$attrs,
      props: props2,
      on: listeners
    }, normalizeSlots(this.$slots, this.$vnode.context));
  };
  return hoc;
}
var version = "2.2.15";
Object.keys(Rules).forEach(function(rule) {
  Validator.extend(rule, Rules[rule].validate, assign({}, Rules[rule].options, { paramNames: Rules[rule].paramNames }));
});
Validator.localize({ en: locale });
VeeValidate$1.install;
VeeValidate$1.version = version;
VeeValidate$1.mapFields = mapFields;
VeeValidate$1.ValidationProvider = ValidationProvider;
VeeValidate$1.ValidationObserver = ValidationObserver;
VeeValidate$1.withValidation = withValidation;
Vue$1.use(VueRouter$1);
Vue$1.use(VeeValidate$1);
const router = new VueRouter$1({
  routes: [
    ...components.map(({ name, component }) => {
      return {
        path: `/${name}`,
        name,
        component
      };
    }),
    {
      path: "*",
      redirect: "/installation"
    }
  ]
});
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty$1(obj2, key, value) {
  key = toPropertyKey(key);
  if (key in obj2) {
    Object.defineProperty(obj2, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj2[key] = value;
  }
  return obj2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target2, props2) {
  for (var i = 0; i < props2.length; i++) {
    var descriptor = props2[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
var timeoutDuration = function() {
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();
function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser && window.Promise;
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
function isFunction$4(functionToCheck) {
  var getType2 = {};
  return functionToCheck && getType2.toString.call(functionToCheck) === "[object Function]";
}
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  var window2 = element.ownerDocument.defaultView;
  var css = window2.getComputedStyle(element, null);
  return property ? css[property] : css;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }
  var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
function isIE$1(version2) {
  if (version2 === 11) {
    return isIE11;
  }
  if (version2 === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE$1(10) ? document.body : null;
  var offsetParent = element.offsetParent || null;
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }
  if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
function getBordersSize(styles, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles["border" + sideA + "Width"]) + parseFloat(styles["border" + sideB + "Width"]);
}
function getSize(axis, body, html, computedStyle) {
  return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE$1(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
}
function getWindowSizes(document2) {
  var body = document2.body;
  var html = document2.documentElement;
  var computedStyle = isIE$1(10) && getComputedStyle(html);
  return {
    height: getSize("Height", body, html, computedStyle),
    width: getSize("Width", body, html, computedStyle)
  };
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target2, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target2, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty$3 = function(obj2, key, value) {
  if (key in obj2) {
    Object.defineProperty(obj2, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj2[key] = value;
  }
  return obj2;
};
var _extends = Object.assign || function(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target2[key] = source[key];
      }
    }
  }
  return target2;
};
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
function getBoundingClientRect(element) {
  var rect = {};
  try {
    if (isIE$1(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {
  }
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, "x");
    vertScrollbar -= getBordersSize(styles, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isIE102 = isIE$1(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (!isIE102 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  var offset2 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height
  };
  return getClientRect(offset2);
}
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  var parentNode2 = getParentNode(element);
  if (!parentNode2) {
    return false;
  }
  return isFixed(parentNode2);
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement || isIE$1()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  padding = padding || 0;
  var isPaddingNumber = typeof padding === "number";
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}
function getArea(_ref) {
  var width = _ref.width, height = _ref.height;
  return width * height;
}
function computeAutoPlacement(placement2, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement2.indexOf("auto") === -1) {
    return placement2;
  }
  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function(key) {
    return _extends({
      key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function(a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function(_ref2) {
    var width = _ref2.width, height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement2.split("-")[1];
  return computedPlacement + (variation ? "-" + variation : "");
}
function getReferenceOffsets(state2, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
function getOuterSizes(element) {
  var window2 = element.ownerDocument.defaultView;
  var styles = window2.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
function getOppositePlacement(placement2) {
  var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement2.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperOffsets(popper, referenceOffsets, placement2) {
  placement2 = placement2.split("-")[0];
  var popperRect = getOuterSizes(popper);
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };
  var isHoriz = ["right", "left"].indexOf(placement2) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement2 === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}
function find(arr, check) {
  if (Array.prototype.find) {
    return arr.find(check);
  }
  return arr.filter(check)[0];
}
function findIndex(arr, prop, value) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop] === value;
    });
  }
  var match3 = find(arr, function(obj2) {
    return obj2[prop] === value;
  });
  return arr.indexOf(match3);
}
function runModifiers(modifiers2, data2, ends) {
  var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn;
    if (modifier.enabled && isFunction$4(fn)) {
      data2.offsets.popper = getClientRect(data2.offsets.popper);
      data2.offsets.reference = getClientRect(data2.offsets.reference);
      data2 = fn(data2, modifier);
    }
  });
  return data2;
}
function update9() {
  if (this.state.isDestroyed) {
    return;
  }
  var data2 = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };
  data2.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  data2.placement = computeAutoPlacement(this.options.placement, data2.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  data2.originalPlacement = data2.placement;
  data2.positionFixed = this.options.positionFixed;
  data2.offsets.popper = getPopperOffsets(this.popper, data2.offsets.reference, data2.placement);
  data2.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
  data2 = runModifiers(this.modifiers, data2);
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data2);
  } else {
    this.options.onUpdate(data2);
  }
}
function isModifierEnabled(modifiers2, modifierName) {
  return modifiers2.some(function(_ref) {
    var name = _ref.name, enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? "" + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
function destroy6() {
  this.state.isDestroyed = true;
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }
  this.disableEventListeners();
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target2 = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target2.addEventListener(event, callback, { passive: true });
  if (!isBody) {
    attachToScrollParents(getScrollParent(target2.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target2);
}
function setupEventListeners(reference, options2, state2, updateBound) {
  state2.updateBound = updateBound;
  getWindow(reference).addEventListener("resize", state2.updateBound, { passive: true });
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, "scroll", state2.updateBound, state2.scrollParents);
  state2.scrollElement = scrollElement;
  state2.eventsEnabled = true;
  return state2;
}
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
function removeEventListeners(reference, state2) {
  getWindow(reference).removeEventListener("resize", state2.updateBound);
  state2.scrollParents.forEach(function(target2) {
    target2.removeEventListener("scroll", state2.updateBound);
  });
  state2.updateBound = null;
  state2.scrollParents = [];
  state2.scrollElement = null;
  state2.eventsEnabled = false;
  return state2;
}
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
}
function setStyles(element, styles) {
  Object.keys(styles).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = "px";
    }
    element.style[prop] = styles[prop] + unit;
  });
}
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
function applyStyle(data2) {
  setStyles(data2.instance.popper, data2.styles);
  setAttributes(data2.instance.popper, data2.attributes);
  if (data2.arrowElement && Object.keys(data2.arrowStyles).length) {
    setStyles(data2.arrowElement, data2.arrowStyles);
  }
  return data2;
}
function applyStyleOnLoad(reference, popper, options2, modifierOptions, state2) {
  var referenceOffsets = getReferenceOffsets(state2, popper, reference, options2.positionFixed);
  var placement2 = computeAutoPlacement(options2.placement, referenceOffsets, popper, reference, options2.modifiers.flip.boundariesElement, options2.modifiers.flip.padding);
  popper.setAttribute("x-placement", placement2);
  setStyles(popper, { position: options2.positionFixed ? "fixed" : "absolute" });
  return options2;
}
function getRoundedOffsets(data2, shouldRound) {
  var _data$offsets = data2.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var round = Math.round, floor = Math.floor;
  var noRound = function noRound2(v) {
    return v;
  };
  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ["left", "right"].indexOf(data2.placement) !== -1;
  var isVariation = data2.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
function computeStyle(data2, options2) {
  var x = options2.x, y = options2.y;
  var popper = data2.offsets.popper;
  var legacyGpuAccelerationOption = find(data2.instance.modifiers, function(modifier) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== void 0) {
    console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options2.gpuAcceleration;
  var offsetParent = getOffsetParent(data2.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);
  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data2, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === "bottom" ? "top" : "bottom";
  var sideB = y === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left = void 0, top = void 0;
  if (sideA === "bottom") {
    if (offsetParent.nodeName === "HTML") {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data2.placement
  };
  data2.attributes = _extends({}, attributes, data2.attributes);
  data2.styles = _extends({}, styles, data2.styles);
  data2.arrowStyles = _extends({}, data2.offsets.arrow, data2.arrowStyles);
  return data2;
}
function isModifierRequired(modifiers2, requestingName, requestedName) {
  var requesting = find(modifiers2, function(_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired2 = !!requesting && modifiers2.some(function(modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired2) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
  }
  return isRequired2;
}
function arrow(data2, options2) {
  var _data$offsets$arrow;
  if (!isModifierRequired(data2.instance.modifiers, "arrow", "keepTogether")) {
    return data2;
  }
  var arrowElement = options2.element;
  if (typeof arrowElement === "string") {
    arrowElement = data2.instance.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return data2;
    }
  } else {
    if (!data2.instance.popper.contains(arrowElement)) {
      console.warn("WARNING: `arrow.element` must be child of its popper element!");
      return data2;
    }
  }
  var placement2 = data2.placement.split("-")[0];
  var _data$offsets = data2.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement2) !== -1;
  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data2.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data2.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data2.offsets.popper = getClientRect(data2.offsets.popper);
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
  var css = getStyleComputedProperty(data2.instance.popper);
  var popperMarginSide = parseFloat(css["margin" + sideCapitalized]);
  var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
  var sideValue = center - data2.offsets.popper[side] - popperMarginSide - popperBorderSide;
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data2.arrowElement = arrowElement;
  data2.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$3(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$3(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
  return data2;
}
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}
var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var validPlacements = placements.slice(3);
function clockwise(placement2) {
  var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var index2 = validPlacements.indexOf(placement2);
  var arr = validPlacements.slice(index2 + 1).concat(validPlacements.slice(0, index2));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function flip(data2, options2) {
  if (isModifierEnabled(data2.instance.modifiers, "inner")) {
    return data2;
  }
  if (data2.flipped && data2.placement === data2.originalPlacement) {
    return data2;
  }
  var boundaries = getBoundaries(data2.instance.popper, data2.instance.reference, options2.padding, options2.boundariesElement, data2.positionFixed);
  var placement2 = data2.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement2);
  var variation = data2.placement.split("-")[1] || "";
  var flipOrder = [];
  switch (options2.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement2, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement2);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement2, true);
      break;
    default:
      flipOrder = options2.behavior;
  }
  flipOrder.forEach(function(step, index2) {
    if (placement2 !== step || flipOrder.length === index2 + 1) {
      return data2;
    }
    placement2 = data2.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement2);
    var popperOffsets = data2.offsets.popper;
    var refOffsets = data2.offsets.reference;
    var floor = Math.floor;
    var overlapsRef = placement2 === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement2 === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement2 === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement2 === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement2 === "left" && overflowsLeft || placement2 === "right" && overflowsRight || placement2 === "top" && overflowsTop || placement2 === "bottom" && overflowsBottom;
    var isVertical = ["top", "bottom"].indexOf(placement2) !== -1;
    var flippedVariationByRef = !!options2.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
    var flippedVariationByContent = !!options2.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      data2.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement2 = flipOrder[index2 + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data2.placement = placement2 + (variation ? "-" + variation : "");
      data2.offsets.popper = _extends({}, data2.offsets.popper, getPopperOffsets(data2.instance.popper, data2.offsets.reference, data2.placement));
      data2 = runModifiers(data2.instance.modifiers, data2, "flip");
    }
  });
  return data2;
}
function keepTogether(data2) {
  var _data$offsets = data2.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var placement2 = data2.placement.split("-")[0];
  var floor = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement2) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";
  if (popper[side] < floor(reference[opSide])) {
    data2.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data2.offsets.popper[opSide] = floor(reference[side]);
  }
  return data2;
}
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];
  if (!value) {
    return str;
  }
  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }
    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === "vh" || unit === "vw") {
    var size2 = void 0;
    if (unit === "vh") {
      size2 = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size2 = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size2 / 100 * value;
  } else {
    return value;
  }
}
function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
  var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });
  var divider = fragments.indexOf(find(fragments, function(frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  }
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
  ops = ops.map(function(op, index2) {
    var measurement = (index2 === 1 ? !useHeight : useHeight) ? "height" : "width";
    var mergeWithPrevious = false;
    return op.reduce(function(a, b) {
      if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []).map(function(str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });
  ops.forEach(function(op, index2) {
    op.forEach(function(frag, index22) {
      if (isNumeric(frag)) {
        offsets[index2] += frag * (op[index22 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}
function offset(data2, _ref) {
  var offset2 = _ref.offset;
  var placement2 = data2.placement, _data$offsets = data2.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var basePlacement = placement2.split("-")[0];
  var offsets = void 0;
  if (isNumeric(+offset2)) {
    offsets = [+offset2, 0];
  } else {
    offsets = parseOffset(offset2, popper, reference, basePlacement);
  }
  if (basePlacement === "left") {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === "top") {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }
  data2.popper = popper;
  return data2;
}
function preventOverflow(data2, options2) {
  var boundariesElement = options2.boundariesElement || getOffsetParent(data2.instance.popper);
  if (data2.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }
  var transformProp = getSupportedPropertyName("transform");
  var popperStyles = data2.instance.popper.style;
  var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";
  var boundaries = getBoundaries(data2.instance.popper, data2.instance.reference, options2.padding, boundariesElement, data2.positionFixed);
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options2.boundaries = boundaries;
  var order = options2.priority;
  var popper = data2.offsets.popper;
  var check = {
    primary: function primary(placement2) {
      var value = popper[placement2];
      if (popper[placement2] < boundaries[placement2] && !options2.escapeWithReference) {
        value = Math.max(popper[placement2], boundaries[placement2]);
      }
      return defineProperty$3({}, placement2, value);
    },
    secondary: function secondary(placement2) {
      var mainSide = placement2 === "right" ? "left" : "top";
      var value = popper[mainSide];
      if (popper[placement2] > boundaries[placement2] && !options2.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement2] - (placement2 === "right" ? popper.width : popper.height));
      }
      return defineProperty$3({}, mainSide, value);
    }
  };
  order.forEach(function(placement2) {
    var side = ["left", "top"].indexOf(placement2) !== -1 ? "primary" : "secondary";
    popper = _extends({}, popper, check[side](placement2));
  });
  data2.offsets.popper = popper;
  return data2;
}
function shift(data2) {
  var placement2 = data2.placement;
  var basePlacement = placement2.split("-")[0];
  var shiftvariation = placement2.split("-")[1];
  if (shiftvariation) {
    var _data$offsets = data2.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    var shiftOffsets = {
      start: defineProperty$3({}, side, reference[side]),
      end: defineProperty$3({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data2.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }
  return data2;
}
function hide(data2) {
  if (!isModifierRequired(data2.instance.modifiers, "hide", "preventOverflow")) {
    return data2;
  }
  var refRect = data2.offsets.reference;
  var bound = find(data2.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    if (data2.hide === true) {
      return data2;
    }
    data2.hide = true;
    data2.attributes["x-out-of-boundaries"] = "";
  } else {
    if (data2.hide === false) {
      return data2;
    }
    data2.hide = false;
    data2.attributes["x-out-of-boundaries"] = false;
  }
  return data2;
}
function inner(data2) {
  var placement2 = data2.placement;
  var basePlacement = placement2.split("-")[0];
  var _data$offsets = data2.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
  popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
  data2.placement = getOppositePlacement(placement2);
  data2.offsets.popper = getClientRect(popper);
  return data2;
}
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },
  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },
  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ["left", "right", "top", "bottom"],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: "scrollParent"
  },
  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },
  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: "[x-arrow]"
  },
  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: "flip",
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: "viewport",
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },
  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },
  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },
  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: "bottom",
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: "right"
  },
  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: void 0
  }
};
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: "bottom",
  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,
  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,
  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,
  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {
  },
  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {
  },
  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers
};
var Popper = function() {
  function Popper2(reference, popper) {
    var _this = this;
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    classCallCheck(this, Popper2);
    this.scheduleUpdate = function() {
      return requestAnimationFrame(_this.update);
    };
    this.update = debounce(this.update.bind(this));
    this.options = _extends({}, Popper2.Defaults, options2);
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper2.Defaults.modifiers, options2.modifiers)).forEach(function(name) {
      _this.options.modifiers[name] = _extends({}, Popper2.Defaults.modifiers[name] || {}, options2.modifiers ? options2.modifiers[name] : {});
    });
    this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
      return _extends({
        name
      }, _this.options.modifiers[name]);
    }).sort(function(a, b) {
      return a.order - b.order;
    });
    this.modifiers.forEach(function(modifierOptions) {
      if (modifierOptions.enabled && isFunction$4(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }
  createClass(Popper2, [{
    key: "update",
    value: function update$$1() {
      return update9.call(this);
    }
  }, {
    key: "destroy",
    value: function destroy$$1() {
      return destroy6.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */
    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */
  }]);
  return Popper2;
}();
Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
const Popper$1 = Popper;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$5(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$5;
var eq$4 = eq_1;
function assocIndexOf$4(array, key) {
  var length2 = array.length;
  while (length2--) {
    if (eq$4(array[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$3(data2, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data2 = this.__data__, index2 = assocIndexOf$2(data2, key);
  return index2 < 0 ? void 0 : data2[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$4 = root$7.Symbol;
var _Symbol = Symbol$4;
var Symbol$3 = _Symbol;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$7;
var baseGetTag$4 = _baseGetTag, isObject$6 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$6(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$5 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$c = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$5(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$5 = _root;
var Map$3 = getNative$6(root$5, "Map");
var _Map = Map$3;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashGet$1(key) {
  var data2 = this.__data__;
  if (nativeCreate$2) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$9.call(data2, key) ? data2[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashHas$1(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$8.call(data2, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$2 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
  var data2 = map2.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data2 = getMapData(this, key), size2 = data2.size;
  data2.set(key, value);
  this.size += data2.size == size2 ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$2(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$2.prototype.clear = mapCacheClear;
MapCache$2.prototype["delete"] = mapCacheDelete;
MapCache$2.prototype.get = mapCacheGet;
MapCache$2.prototype.has = mapCacheHas;
MapCache$2.prototype.set = mapCacheSet;
var _MapCache = MapCache$2;
var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache$1) {
    var pairs = data2.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache$1(pairs);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values2) {
  var index2 = -1, length2 = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache();
  while (++index2 < length2) {
    this.add(values2[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array, predicate) {
  var index2 = -1, length2 = array == null ? 0 : array.length;
  while (++index2 < length2) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen2 = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen2) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen2, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen2.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$2 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$2;
function mapToArray$1(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$1 = _Symbol, Uint8Array$1 = _Uint8Array, eq$3 = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq$3(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array, values2) {
  var index2 = -1, length2 = values2.length, offset2 = array.length;
  while (++index2 < length2) {
    array[offset2 + index2] = values2[index2];
  }
  return array;
}
var _arrayPush = arrayPush$1;
var isArray$4 = Array.isArray;
var isArray_1 = isArray$4;
var arrayPush = _arrayPush, isArray$3 = isArray_1;
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$3(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array, predicate) {
  var index2 = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length2) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$9 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
var _getSymbols = getSymbols$1;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
function isObjectLike$6(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$6;
var baseGetTag$3 = _baseGetTag, isObjectLike$5 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$5(value) && baseGetTag$3(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$4 = isObjectLike_1;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var propertyIsEnumerable = objectProto$8.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$4(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var isBuffer$3 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$3.exports;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$3, isBuffer$3.exports);
var isBufferExports = isBuffer$3.exports;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length2) {
  var type = typeof value;
  length2 = length2 == null ? MAX_SAFE_INTEGER$1 : length2;
  return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
}
var _isIndex = isIndex$2;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$2;
var baseGetTag$2 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$3 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$3 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$3(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$3;
var baseTimes = _baseTimes, isArguments$1 = isArguments_1, isArray$2 = isArray_1, isBuffer$2 = isBufferExports, isIndex$1 = _isIndex, isTypedArray$2 = isTypedArray_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$2(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex$1(key, length2)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$6 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$6;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$5 = Object.prototype;
var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$5.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction$1 = isFunction_1, isLength = isLength_1;
function isArrayLike$4(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$4;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$3 = isArrayLike_1;
function keys$1(object) {
  return isArrayLike$3(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$4.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$4 = _getNative, root$3 = _root;
var DataView$1 = getNative$4(root$3, "DataView");
var _DataView = DataView$1;
var getNative$3 = _getNative, root$2 = _root;
var Promise$2 = getNative$3(root$2, "Promise");
var _Promise = Promise$2;
var getNative$2 = _getNative, root$1 = _root;
var Set$2 = getNative$2(root$1, "Set");
var _Set = Set$2;
var getNative$1 = _getNative, root = _root;
var WeakMap$1 = getNative$1(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
var getTag$1 = baseGetTag$1;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag$1(new Map()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1()) != setTag || WeakMap && getTag$1(new WeakMap()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag$1(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$1 = isArray_1, isBuffer$1 = isBufferExports, isTypedArray$1 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag$1 = "[object Object]";
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag$1 : objTag;
  othTag = othTag == argsTag ? objectTag$1 : othTag;
  var objIsObj = objTag == objectTag$1, othIsObj = othTag == objectTag$1, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$3.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$3.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$2 = isObjectLike_1;
function baseIsEqual$1(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$2(value) && !isObjectLike$2(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
}
var _baseIsEqual = baseIsEqual$1;
var baseIsEqual = _baseIsEqual;
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var isEqual_1 = isEqual;
const isEqual$1 = /* @__PURE__ */ getDefaultExportFromCjs(isEqual_1);
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return -1;
}
var isIE;
function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}
var script$1 = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted2() {
    var _this = this;
    initCompat();
    this.$nextTick(function() {
      _this._w = _this.$el.offsetWidth;
      _this._h = _this.$el.offsetHeight;
      if (_this.emitOnMount) {
        _this.emitSize();
      }
    });
    var object = document.createElement("object");
    this._resizeObject = object;
    object.setAttribute("aria-hidden", "true");
    object.setAttribute("tabindex", -1);
    object.onload = this.addResizeHandlers;
    object.type = "text/html";
    if (isIE) {
      this.$el.appendChild(object);
    }
    object.data = "about:blank";
    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeDestroy: function beforeDestroy4() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify: function compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize: function emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers: function addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify);
      this.compareAndNotify();
    },
    removeResizeHandlers: function removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify);
        }
        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};
function normalizeComponent$1(template, style2, script2, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== "boolean") {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  var options2 = typeof script2 === "function" ? script2.options : script2;
  if (template && template.render) {
    options2.render = template.render;
    options2.staticRenderFns = template.staticRenderFns;
    options2._compiled = true;
    if (isFunctionalTemplate) {
      options2.functional = true;
    }
  }
  if (scopeId) {
    options2._scopeId = scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function hook2(context) {
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (style2) {
        style2.call(this, createInjectorSSR(context));
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options2._ssrRegister = hook;
  } else if (style2) {
    hook = shadowMode ? function(context) {
      style2.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function(context) {
      style2.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options2.functional) {
      var originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script2;
}
var __vue_script__$1 = script$1;
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "resize-observer",
    attrs: {
      tabindex: "-1"
    }
  });
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
var __vue_inject_styles__$1 = void 0;
var __vue_scope_id__$1 = "data-v-8859cc6c";
var __vue_module_identifier__$1 = void 0;
var __vue_is_functional_template__$1 = false;
var __vue_component__$1 = /* @__PURE__ */ normalizeComponent$1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, void 0, void 0, void 0);
function install$1(Vue2) {
  Vue2.component("resize-observer", __vue_component__$1);
  Vue2.component("ResizeObserver", __vue_component__$1);
}
var plugin$2 = {
  // eslint-disable-next-line no-undef
  version: "1.0.1",
  install: install$1
};
var GlobalVue$1 = null;
if (typeof window !== "undefined") {
  GlobalVue$1 = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue$1 = global.Vue;
}
if (GlobalVue$1) {
  GlobalVue$1.use(plugin$2);
}
var getNative = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$3(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue, eq$2 = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq$2(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props2 = keysFunc(object), length2 = props2.length;
    while (length2--) {
      var key = props2[fromRight ? length2 : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;
var Uint8Array2 = _Uint8Array;
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$1;
var cloneArrayBuffer = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
function copyArray$1(source, array) {
  var index2 = -1, length2 = source.length;
  array || (array = Array(length2));
  while (++index2 < length2) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$1;
var isObject$4 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$4(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var baseCreate = _baseCreate, getPrototype$1 = _getPrototype, isPrototype$1 = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype$1(object) ? baseCreate(getPrototype$1(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var isArrayLike$2 = isArrayLike_1, isObjectLike$1 = isObjectLike_1;
function isArrayLikeObject$1(value) {
  return isObjectLike$1(value) && isArrayLike$2(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$1;
var baseGetTag = _baseGetTag, getPrototype = _getPrototype, isObjectLike = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$1.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$1;
var assignValue = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$1(source, props2, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length2 = props2.length;
  while (++index2 < length2) {
    var key = props2[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$3 = isObject_1, isPrototype = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$2(object) {
  return isArrayLike$1(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$2;
var copyObject = _copyObject, keysIn$1 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject(value, keysIn$1(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer = _cloneBufferExports, cloneTypedArray = _cloneTypedArray, copyArray = _copyArray, initCloneObject = _initCloneObject, isArguments = isArguments_1, isArray = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer = isBufferExports, isFunction = isFunction_1, isObject$2 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$2(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$1 = isObject_1, keysIn = keysIn_1, safeGet = _safeGet;
function baseMerge$1(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject$1(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var _baseMerge = baseMerge$1;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length2 = nativeMax(args.length - start, 0), array = Array(length2);
    while (++index2 < length2) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count2 = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count2 >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count2 = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
var eq = eq_1, isArrayLike = isArrayLike_1, isIndex = _isIndex, isObject = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
var baseRest = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$1(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : void 0, guard = length2 > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length2 < 3 ? void 0 : customizer;
      length2 = 1;
    }
    object = Object(object);
    while (++index2 < length2) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$1;
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge_1 = merge;
const merge$13 = /* @__PURE__ */ getDefaultExportFromCjs(merge_1);
var SVGAnimatedString = function SVGAnimatedString2() {
};
if (typeof window !== "undefined") {
  SVGAnimatedString = window.SVGAnimatedString;
}
function convertToArray(value) {
  if (typeof value === "string") {
    value = value.split(" ");
  }
  return value;
}
function addClasses(el, classes2) {
  var newClasses = convertToArray(classes2);
  var classList;
  if (el.className instanceof SVGAnimatedString) {
    classList = convertToArray(el.className.baseVal);
  } else {
    classList = convertToArray(el.className);
  }
  newClasses.forEach(function(newClass) {
    if (classList.indexOf(newClass) === -1) {
      classList.push(newClass);
    }
  });
  if (el instanceof SVGElement) {
    el.setAttribute("class", classList.join(" "));
  } else {
    el.className = classList.join(" ");
  }
}
function removeClasses(el, classes2) {
  var newClasses = convertToArray(classes2);
  var classList;
  if (el.className instanceof SVGAnimatedString) {
    classList = convertToArray(el.className.baseVal);
  } else {
    classList = convertToArray(el.className);
  }
  newClasses.forEach(function(newClass) {
    var index2 = classList.indexOf(newClass);
    if (index2 !== -1) {
      classList.splice(index2, 1);
    }
  });
  if (el instanceof SVGElement) {
    el.setAttribute("class", classList.join(" "));
  } else {
    el.className = classList.join(" ");
  }
}
var supportsPassive = false;
if (typeof window !== "undefined") {
  supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get3() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {
  }
}
function ownKeys$2(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$2(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty$1(target2, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target2;
}
var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: "top",
  title: "",
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  offset: 0
};
var openTooltips = [];
var Tooltip = /* @__PURE__ */ function() {
  function Tooltip2(_reference, _options) {
    var _this = this;
    _classCallCheck(this, Tooltip2);
    _defineProperty$1(this, "_events", []);
    _defineProperty$1(this, "_setTooltipNodeEvent", function(evt, reference, delay, options2) {
      var relatedreference = evt.relatedreference || evt.toElement || evt.relatedTarget;
      var callback = function callback2(evt2) {
        var relatedreference2 = evt2.relatedreference || evt2.toElement || evt2.relatedTarget;
        _this._tooltipNode.removeEventListener(evt.type, callback2);
        if (!reference.contains(relatedreference2)) {
          _this._scheduleHide(reference, options2.delay, options2, evt2);
        }
      };
      if (_this._tooltipNode.contains(relatedreference)) {
        _this._tooltipNode.addEventListener(evt.type, callback);
        return true;
      }
      return false;
    });
    _options = _objectSpread$2(_objectSpread$2({}, DEFAULT_OPTIONS), _options);
    _reference.jquery && (_reference = _reference[0]);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.reference = _reference;
    this.options = _options;
    this._isOpen = false;
    this._init();
  }
  _createClass(Tooltip2, [{
    key: "show",
    value: function show3() {
      this._show(this.reference, this.options);
    }
    /**
     * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#hide
     * @memberof Tooltip
     */
  }, {
    key: "hide",
    value: function hide3() {
      this._hide();
    }
    /**
     * Hides and destroys an element’s tooltip.
     * @method Tooltip#dispose
     * @memberof Tooltip
     */
  }, {
    key: "dispose",
    value: function dispose2() {
      this._dispose();
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * @method Tooltip#toggle
     * @memberof Tooltip
     */
  }, {
    key: "toggle",
    value: function toggle() {
      if (this._isOpen) {
        return this.hide();
      } else {
        return this.show();
      }
    }
  }, {
    key: "setClasses",
    value: function setClasses(classes2) {
      this._classes = classes2;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      this.options.title = content;
      if (this._tooltipNode) {
        this._setContent(content, this.options);
      }
    }
  }, {
    key: "setOptions",
    value: function setOptions(options2) {
      var classesUpdated = false;
      var classes2 = options2 && options2.classes || directive.options.defaultClass;
      if (!isEqual$1(this._classes, classes2)) {
        this.setClasses(classes2);
        classesUpdated = true;
      }
      options2 = getOptions2(options2);
      var needPopperUpdate = false;
      var needRestart = false;
      if (this.options.offset !== options2.offset || this.options.placement !== options2.placement) {
        needPopperUpdate = true;
      }
      if (this.options.template !== options2.template || this.options.trigger !== options2.trigger || this.options.container !== options2.container || classesUpdated) {
        needRestart = true;
      }
      for (var key in options2) {
        this.options[key] = options2[key];
      }
      if (this._tooltipNode) {
        if (needRestart) {
          var isOpen = this._isOpen;
          this.dispose();
          this._init();
          if (isOpen) {
            this.show();
          }
        } else if (needPopperUpdate) {
          this.popperInstance.update();
        }
      }
    }
    //
    // Private methods
    //
  }, {
    key: "_init",
    value: function _init() {
      var events2 = typeof this.options.trigger === "string" ? this.options.trigger.split(" ") : [];
      this._isDisposed = false;
      this._enableDocumentTouch = events2.indexOf("manual") === -1;
      events2 = events2.filter(function(trigger3) {
        return ["click", "hover", "focus"].indexOf(trigger3) !== -1;
      });
      this._setEventListeners(this.reference, events2, this.options);
      this.$_originalTitle = this.reference.getAttribute("title");
      this.reference.removeAttribute("title");
      this.reference.setAttribute("data-original-title", this.$_originalTitle);
    }
    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} reference
     * @param {String} template
     * @param {String|HTMLElement|TitleFunction} title
     * @param {Boolean} allowHtml
     * @return {HTMLelement} tooltipNode
     */
  }, {
    key: "_create",
    value: function _create(reference, template) {
      var _this2 = this;
      var tooltipGenerator = window.document.createElement("div");
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0];
      tooltipNode.id = this.options.ariaId || "tooltip_".concat(Math.random().toString(36).substr(2, 10));
      tooltipNode.setAttribute("aria-hidden", "true");
      if (this.options.autoHide && this.options.trigger.indexOf("hover") !== -1) {
        tooltipNode.addEventListener("mouseenter", function(evt) {
          return _this2._scheduleHide(reference, _this2.options.delay, _this2.options, evt);
        });
        tooltipNode.addEventListener("click", function(evt) {
          return _this2._scheduleHide(reference, _this2.options.delay, _this2.options, evt);
        });
      }
      return tooltipNode;
    }
  }, {
    key: "_setContent",
    value: function _setContent(content, options2) {
      var _this3 = this;
      this.asyncContent = false;
      this._applyContent(content, options2).then(function() {
        if (!_this3.popperInstance)
          return;
        _this3.popperInstance.update();
      });
    }
  }, {
    key: "_applyContent",
    value: function _applyContent(title, options2) {
      var _this4 = this;
      return new Promise(function(resolve2, reject) {
        var allowHtml = options2.html;
        var rootNode = _this4._tooltipNode;
        if (!rootNode)
          return;
        var titleNode = rootNode.querySelector(_this4.options.innerSelector);
        if (title.nodeType === 1) {
          if (allowHtml) {
            while (titleNode.firstChild) {
              titleNode.removeChild(titleNode.firstChild);
            }
            titleNode.appendChild(title);
          }
        } else if (typeof title === "function") {
          var result = title();
          if (result && typeof result.then === "function") {
            _this4.asyncContent = true;
            options2.loadingClass && addClasses(rootNode, options2.loadingClass);
            if (options2.loadingContent) {
              _this4._applyContent(options2.loadingContent, options2);
            }
            result.then(function(asyncResult) {
              options2.loadingClass && removeClasses(rootNode, options2.loadingClass);
              return _this4._applyContent(asyncResult, options2);
            }).then(resolve2).catch(reject);
          } else {
            _this4._applyContent(result, options2).then(resolve2).catch(reject);
          }
          return;
        } else {
          allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
        }
        resolve2();
      });
    }
  }, {
    key: "_show",
    value: function _show(reference, options2) {
      if (options2 && typeof options2.container === "string") {
        var container2 = document.querySelector(options2.container);
        if (!container2)
          return;
      }
      clearTimeout(this._disposeTimer);
      options2 = Object.assign({}, options2);
      delete options2.offset;
      var updateClasses2 = true;
      if (this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes);
        updateClasses2 = false;
      }
      var result = this._ensureShown(reference, options2);
      if (updateClasses2 && this._tooltipNode) {
        addClasses(this._tooltipNode, this._classes);
      }
      addClasses(reference, ["v-tooltip-open"]);
      return result;
    }
  }, {
    key: "_ensureShown",
    value: function _ensureShown(reference, options2) {
      var _this5 = this;
      if (this._isOpen) {
        return this;
      }
      this._isOpen = true;
      openTooltips.push(this);
      if (this._tooltipNode) {
        this._tooltipNode.style.display = "";
        this._tooltipNode.setAttribute("aria-hidden", "false");
        this.popperInstance.enableEventListeners();
        this.popperInstance.update();
        if (this.asyncContent) {
          this._setContent(options2.title, options2);
        }
        return this;
      }
      var title = reference.getAttribute("title") || options2.title;
      if (!title) {
        return this;
      }
      var tooltipNode = this._create(reference, options2.template);
      this._tooltipNode = tooltipNode;
      reference.setAttribute("aria-describedby", tooltipNode.id);
      var container2 = this._findContainer(options2.container, reference);
      this._append(tooltipNode, container2);
      var popperOptions = _objectSpread$2(_objectSpread$2({}, options2.popperOptions), {}, {
        placement: options2.placement
      });
      popperOptions.modifiers = _objectSpread$2(_objectSpread$2({}, popperOptions.modifiers), {}, {
        arrow: {
          element: this.options.arrowSelector
        }
      });
      if (options2.boundariesElement) {
        popperOptions.modifiers.preventOverflow = {
          boundariesElement: options2.boundariesElement
        };
      }
      this.popperInstance = new Popper$1(reference, tooltipNode, popperOptions);
      this._setContent(title, options2);
      requestAnimationFrame(function() {
        if (!_this5._isDisposed && _this5.popperInstance) {
          _this5.popperInstance.update();
          requestAnimationFrame(function() {
            if (!_this5._isDisposed) {
              _this5._isOpen && tooltipNode.setAttribute("aria-hidden", "false");
            } else {
              _this5.dispose();
            }
          });
        } else {
          _this5.dispose();
        }
      });
      return this;
    }
  }, {
    key: "_noLongerOpen",
    value: function _noLongerOpen() {
      var index2 = openTooltips.indexOf(this);
      if (index2 !== -1) {
        openTooltips.splice(index2, 1);
      }
    }
  }, {
    key: "_hide",
    value: function _hide() {
      var _this6 = this;
      if (!this._isOpen) {
        return this;
      }
      this._isOpen = false;
      this._noLongerOpen();
      this._tooltipNode.style.display = "none";
      this._tooltipNode.setAttribute("aria-hidden", "true");
      if (this.popperInstance) {
        this.popperInstance.disableEventListeners();
      }
      clearTimeout(this._disposeTimer);
      var disposeTime = directive.options.disposeTimeout;
      if (disposeTime !== null) {
        this._disposeTimer = setTimeout(function() {
          if (_this6._tooltipNode) {
            _this6._tooltipNode.removeEventListener("mouseenter", _this6.hide);
            _this6._tooltipNode.removeEventListener("click", _this6.hide);
            _this6._removeTooltipNode();
          }
        }, disposeTime);
      }
      removeClasses(this.reference, ["v-tooltip-open"]);
      return this;
    }
  }, {
    key: "_removeTooltipNode",
    value: function _removeTooltipNode() {
      if (!this._tooltipNode)
        return;
      var parentNode2 = this._tooltipNode.parentNode;
      if (parentNode2) {
        parentNode2.removeChild(this._tooltipNode);
        this.reference.removeAttribute("aria-describedby");
      }
      this._tooltipNode = null;
    }
  }, {
    key: "_dispose",
    value: function _dispose() {
      var _this7 = this;
      this._isDisposed = true;
      this.reference.removeAttribute("data-original-title");
      if (this.$_originalTitle) {
        this.reference.setAttribute("title", this.$_originalTitle);
      }
      this._events.forEach(function(_ref) {
        var func = _ref.func, event = _ref.event;
        _this7.reference.removeEventListener(event, func);
      });
      this._events = [];
      if (this._tooltipNode) {
        this._hide();
        this._tooltipNode.removeEventListener("mouseenter", this.hide);
        this._tooltipNode.removeEventListener("click", this.hide);
        this.popperInstance.destroy();
        if (!this.popperInstance.options.removeOnDestroy) {
          this._removeTooltipNode();
        }
      } else {
        this._noLongerOpen();
      }
      return this;
    }
  }, {
    key: "_findContainer",
    value: function _findContainer(container2, reference) {
      if (typeof container2 === "string") {
        container2 = window.document.querySelector(container2);
      } else if (container2 === false) {
        container2 = reference.parentNode;
      }
      return container2;
    }
    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param {HTMLElement} tooltip
     * @param {HTMLElement|String|false} container
     */
  }, {
    key: "_append",
    value: function _append(tooltipNode, container2) {
      container2.appendChild(tooltipNode);
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(reference, events2, options2) {
      var _this8 = this;
      var directEvents = [];
      var oppositeEvents = [];
      events2.forEach(function(event) {
        switch (event) {
          case "hover":
            directEvents.push("mouseenter");
            oppositeEvents.push("mouseleave");
            if (_this8.options.hideOnTargetClick)
              oppositeEvents.push("click");
            break;
          case "focus":
            directEvents.push("focus");
            oppositeEvents.push("blur");
            if (_this8.options.hideOnTargetClick)
              oppositeEvents.push("click");
            break;
          case "click":
            directEvents.push("click");
            oppositeEvents.push("click");
            break;
        }
      });
      directEvents.forEach(function(event) {
        var func = function func2(evt) {
          if (_this8._isOpen === true) {
            return;
          }
          evt.usedByTooltip = true;
          _this8._scheduleShow(reference, options2.delay, options2, evt);
        };
        _this8._events.push({
          event,
          func
        });
        reference.addEventListener(event, func);
      });
      oppositeEvents.forEach(function(event) {
        var func = function func2(evt) {
          if (evt.usedByTooltip === true) {
            return;
          }
          _this8._scheduleHide(reference, options2.delay, options2, evt);
        };
        _this8._events.push({
          event,
          func
        });
        reference.addEventListener(event, func);
      });
    }
  }, {
    key: "_onDocumentTouch",
    value: function _onDocumentTouch(event) {
      if (this._enableDocumentTouch) {
        this._scheduleHide(this.reference, this.options.delay, this.options, event);
      }
    }
  }, {
    key: "_scheduleShow",
    value: function _scheduleShow(reference, delay, options2) {
      var _this9 = this;
      var computedDelay = delay && delay.show || delay || 0;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(function() {
        return _this9._show(reference, options2);
      }, computedDelay);
    }
  }, {
    key: "_scheduleHide",
    value: function _scheduleHide(reference, delay, options2, evt) {
      var _this10 = this;
      var computedDelay = delay && delay.hide || delay || 0;
      clearTimeout(this._scheduleTimer);
      this._scheduleTimer = window.setTimeout(function() {
        if (_this10._isOpen === false) {
          return;
        }
        if (!_this10._tooltipNode.ownerDocument.body.contains(_this10._tooltipNode)) {
          return;
        }
        if (evt.type === "mouseleave") {
          var isSet = _this10._setTooltipNodeEvent(evt, reference, delay, options2);
          if (isSet) {
            return;
          }
        }
        _this10._hide(reference, options2);
      }, computedDelay);
    }
  }]);
  return Tooltip2;
}();
if (typeof document !== "undefined") {
  document.addEventListener("touchstart", function(event) {
    for (var i = 0; i < openTooltips.length; i++) {
      openTooltips[i]._onDocumentTouch(event);
    }
  }, supportsPassive ? {
    passive: true,
    capture: true
  } : true);
}
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$1(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target2, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target2;
}
var state = {
  enabled: true
};
var positions = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"];
var defaultOptions = {
  // Default tooltip placement relative to target element
  defaultPlacement: "top",
  // Default CSS classes applied to the tooltip element
  defaultClass: "vue-tooltip-theme",
  // Default CSS classes applied to the target element of the tooltip
  defaultTargetClass: "has-tooltip",
  // Is the content HTML by default?
  defaultHtml: true,
  // Default HTML template of the tooltip element
  // It must include `tooltip-arrow` & `tooltip-inner` CSS classes (can be configured, see below)
  // Change if the classes conflict with other libraries (for example bootstrap)
  defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  // Selector used to get the arrow element in the tooltip template
  defaultArrowSelector: ".tooltip-arrow, .tooltip__arrow",
  // Selector used to get the inner content element in the tooltip template
  defaultInnerSelector: ".tooltip-inner, .tooltip__inner",
  // Delay (ms)
  defaultDelay: 0,
  // Default events that trigger the tooltip
  defaultTrigger: "hover focus",
  // Default position offset (px)
  defaultOffset: 0,
  // Default container where the tooltip will be appended
  defaultContainer: "body",
  defaultBoundariesElement: void 0,
  defaultPopperOptions: {},
  // Class added when content is loading
  defaultLoadingClass: "tooltip-loading",
  // Displayed when tooltip content is loading
  defaultLoadingContent: "...",
  // Hide on mouseover tooltip
  autoHide: true,
  // Close tooltip on click on tooltip target?
  defaultHideOnTargetClick: true,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5e3,
  // Options for popover
  popover: {
    defaultPlacement: "bottom",
    // Use the `popoverClass` prop for theming
    defaultClass: "vue-popover-theme",
    // Base class (change if conflicts with other libraries)
    defaultBaseClass: "tooltip popover",
    // Wrapper class (contains arrow and inner)
    defaultWrapperClass: "wrapper",
    // Inner content class
    defaultInnerClass: "tooltip-inner popover-inner",
    // Arrow class
    defaultArrowClass: "tooltip-arrow popover-arrow",
    // Class added when popover is open
    defaultOpenClass: "open",
    defaultDelay: 0,
    defaultTrigger: "click",
    defaultOffset: 0,
    defaultContainer: "body",
    defaultBoundariesElement: void 0,
    defaultPopperOptions: {},
    // Hides if clicked outside of popover
    defaultAutoHide: true,
    // Update popper on content resize
    defaultHandleResize: true
  }
};
function getOptions2(options2) {
  var result = {
    placement: typeof options2.placement !== "undefined" ? options2.placement : directive.options.defaultPlacement,
    delay: typeof options2.delay !== "undefined" ? options2.delay : directive.options.defaultDelay,
    html: typeof options2.html !== "undefined" ? options2.html : directive.options.defaultHtml,
    template: typeof options2.template !== "undefined" ? options2.template : directive.options.defaultTemplate,
    arrowSelector: typeof options2.arrowSelector !== "undefined" ? options2.arrowSelector : directive.options.defaultArrowSelector,
    innerSelector: typeof options2.innerSelector !== "undefined" ? options2.innerSelector : directive.options.defaultInnerSelector,
    trigger: typeof options2.trigger !== "undefined" ? options2.trigger : directive.options.defaultTrigger,
    offset: typeof options2.offset !== "undefined" ? options2.offset : directive.options.defaultOffset,
    container: typeof options2.container !== "undefined" ? options2.container : directive.options.defaultContainer,
    boundariesElement: typeof options2.boundariesElement !== "undefined" ? options2.boundariesElement : directive.options.defaultBoundariesElement,
    autoHide: typeof options2.autoHide !== "undefined" ? options2.autoHide : directive.options.autoHide,
    hideOnTargetClick: typeof options2.hideOnTargetClick !== "undefined" ? options2.hideOnTargetClick : directive.options.defaultHideOnTargetClick,
    loadingClass: typeof options2.loadingClass !== "undefined" ? options2.loadingClass : directive.options.defaultLoadingClass,
    loadingContent: typeof options2.loadingContent !== "undefined" ? options2.loadingContent : directive.options.defaultLoadingContent,
    popperOptions: _objectSpread$1({}, typeof options2.popperOptions !== "undefined" ? options2.popperOptions : directive.options.defaultPopperOptions)
  };
  if (result.offset) {
    var typeofOffset = _typeof(result.offset);
    var offset2 = result.offset;
    if (typeofOffset === "number" || typeofOffset === "string" && offset2.indexOf(",") === -1) {
      offset2 = "0, ".concat(offset2);
    }
    if (!result.popperOptions.modifiers) {
      result.popperOptions.modifiers = {};
    }
    result.popperOptions.modifiers.offset = {
      offset: offset2
    };
  }
  if (result.trigger && result.trigger.indexOf("click") !== -1) {
    result.hideOnTargetClick = false;
  }
  return result;
}
function getPlacement(value, modifiers2) {
  var placement2 = value.placement;
  for (var i = 0; i < positions.length; i++) {
    var pos = positions[i];
    if (modifiers2[pos]) {
      placement2 = pos;
    }
  }
  return placement2;
}
function getContent(value) {
  var type = _typeof(value);
  if (type === "string") {
    return value;
  } else if (value && type === "object") {
    return value.content;
  } else {
    return false;
  }
}
function createTooltip(el, value) {
  var modifiers2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var content = getContent(value);
  var classes2 = typeof value.classes !== "undefined" ? value.classes : directive.options.defaultClass;
  var opts = _objectSpread$1({
    title: content
  }, getOptions2(_objectSpread$1(_objectSpread$1({}, _typeof(value) === "object" ? value : {}), {}, {
    placement: getPlacement(value, modifiers2)
  })));
  var tooltip = el._tooltip = new Tooltip(el, opts);
  tooltip.setClasses(classes2);
  tooltip._vueEl = el;
  var targetClasses = typeof value.targetClasses !== "undefined" ? value.targetClasses : directive.options.defaultTargetClass;
  el._tooltipTargetClasses = targetClasses;
  addClasses(el, targetClasses);
  return tooltip;
}
function destroyTooltip(el) {
  if (el._tooltip) {
    el._tooltip.dispose();
    delete el._tooltip;
    delete el._tooltipOldShow;
  }
  if (el._tooltipTargetClasses) {
    removeClasses(el, el._tooltipTargetClasses);
    delete el._tooltipTargetClasses;
  }
}
function bind3(el, _ref) {
  var value = _ref.value;
  _ref.oldValue;
  var modifiers2 = _ref.modifiers;
  var content = getContent(value);
  if (!content || !state.enabled) {
    destroyTooltip(el);
  } else {
    var tooltip;
    if (el._tooltip) {
      tooltip = el._tooltip;
      tooltip.setContent(content);
      tooltip.setOptions(_objectSpread$1(_objectSpread$1({}, value), {}, {
        placement: getPlacement(value, modifiers2)
      }));
    } else {
      tooltip = createTooltip(el, value, modifiers2);
    }
    if (typeof value.show !== "undefined" && value.show !== el._tooltipOldShow) {
      el._tooltipOldShow = value.show;
      value.show ? tooltip.show() : tooltip.hide();
    }
  }
}
var directive = {
  options: defaultOptions,
  bind: bind3,
  update: bind3,
  unbind: function unbind3(el) {
    destroyTooltip(el);
  }
};
function addListeners(el) {
  el.addEventListener("click", onClick);
  el.addEventListener("touchstart", onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}
function removeListeners(el) {
  el.removeEventListener("click", onClick);
  el.removeEventListener("touchstart", onTouchStart);
  el.removeEventListener("touchend", onTouchEnd);
  el.removeEventListener("touchcancel", onTouchCancel);
}
function onClick(event) {
  var el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}
function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    var touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchCancel);
  }
}
function onTouchEnd(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
  if (event.changedTouches.length === 1) {
    var touch = event.changedTouches[0];
    var firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}
function onTouchCancel(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}
var vclosepopover = {
  bind: function bind4(el, _ref) {
    var value = _ref.value, modifiers2 = _ref.modifiers;
    el.$_closePopoverModifiers = modifiers2;
    if (typeof value === "undefined" || value) {
      addListeners(el);
    }
  },
  update: function update10(el, _ref2) {
    var value = _ref2.value, oldValue = _ref2.oldValue, modifiers2 = _ref2.modifiers;
    el.$_closePopoverModifiers = modifiers2;
    if (value !== oldValue) {
      if (typeof value === "undefined" || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  unbind: function unbind4(el) {
    removeListeners(el);
  }
};
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty$1(target2, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target2;
}
function getDefault(key) {
  var value = directive.options.popover[key];
  if (typeof value === "undefined") {
    return directive.options[key];
  }
  return value;
}
var isIOS = false;
if (typeof window !== "undefined" && typeof navigator !== "undefined") {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
var openPopovers = [];
var Element$1 = function Element2() {
};
if (typeof window !== "undefined") {
  Element$1 = window.Element;
}
var script = {
  name: "VPopover",
  components: {
    ResizeObserver: __vue_component__$1
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: function _default() {
        return getDefault("defaultPlacement");
      }
    },
    delay: {
      type: [String, Number, Object],
      default: function _default2() {
        return getDefault("defaultDelay");
      }
    },
    offset: {
      type: [String, Number],
      default: function _default3() {
        return getDefault("defaultOffset");
      }
    },
    trigger: {
      type: String,
      default: function _default4() {
        return getDefault("defaultTrigger");
      }
    },
    container: {
      type: [String, Object, Element$1, Boolean],
      default: function _default5() {
        return getDefault("defaultContainer");
      }
    },
    boundariesElement: {
      type: [String, Element$1],
      default: function _default6() {
        return getDefault("defaultBoundariesElement");
      }
    },
    popperOptions: {
      type: Object,
      default: function _default7() {
        return getDefault("defaultPopperOptions");
      }
    },
    popoverClass: {
      type: [String, Array],
      default: function _default8() {
        return getDefault("defaultClass");
      }
    },
    popoverBaseClass: {
      type: [String, Array],
      default: function _default9() {
        return directive.options.popover.defaultBaseClass;
      }
    },
    popoverInnerClass: {
      type: [String, Array],
      default: function _default10() {
        return directive.options.popover.defaultInnerClass;
      }
    },
    popoverWrapperClass: {
      type: [String, Array],
      default: function _default11() {
        return directive.options.popover.defaultWrapperClass;
      }
    },
    popoverArrowClass: {
      type: [String, Array],
      default: function _default12() {
        return directive.options.popover.defaultArrowClass;
      }
    },
    autoHide: {
      type: Boolean,
      default: function _default13() {
        return directive.options.popover.defaultAutoHide;
      }
    },
    handleResize: {
      type: Boolean,
      default: function _default14() {
        return directive.options.popover.defaultHandleResize;
      }
    },
    openGroup: {
      type: String,
      default: null
    },
    openClass: {
      type: [String, Array],
      default: function _default15() {
        return directive.options.popover.defaultOpenClass;
      }
    },
    ariaId: {
      default: null
    }
  },
  data: function data() {
    return {
      isOpen: false,
      id: Math.random().toString(36).substr(2, 10)
    };
  },
  computed: {
    cssClass: function cssClass() {
      return _defineProperty$1({}, this.openClass, this.isOpen);
    },
    popoverId: function popoverId() {
      return "popover_".concat(this.ariaId != null ? this.ariaId : this.id);
    }
  },
  watch: {
    open: function open(val) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    },
    disabled: function disabled(val, oldVal) {
      if (val !== oldVal) {
        if (val) {
          this.hide();
        } else if (this.open) {
          this.show();
        }
      }
    },
    container: function container(val) {
      if (this.isOpen && this.popperInstance) {
        var popoverNode = this.$refs.popover;
        var reference = this.$refs.trigger;
        var container2 = this.$_findContainer(this.container, reference);
        if (!container2) {
          console.warn("No container for popover", this);
          return;
        }
        container2.appendChild(popoverNode);
        this.popperInstance.scheduleUpdate();
      }
    },
    trigger: function trigger2(val) {
      this.$_removeEventListeners();
      this.$_addEventListeners();
    },
    placement: function placement(val) {
      var _this = this;
      this.$_updatePopper(function() {
        _this.popperInstance.options.placement = val;
      });
    },
    offset: "$_restartPopper",
    boundariesElement: "$_restartPopper",
    popperOptions: {
      handler: "$_restartPopper",
      deep: true
    }
  },
  created: function created3() {
    this.$_isDisposed = false;
    this.$_mounted = false;
    this.$_events = [];
    this.$_preventOpen = false;
  },
  mounted: function mounted3() {
    var popoverNode = this.$refs.popover;
    popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
    this.$_init();
    if (this.open) {
      this.show();
    }
  },
  deactivated: function deactivated3() {
    this.hide();
  },
  beforeDestroy: function beforeDestroy5() {
    this.dispose();
  },
  methods: {
    show: function show2() {
      var _this2 = this;
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, event = _ref2.event;
      _ref2.skipDelay;
      var _ref2$force = _ref2.force, force = _ref2$force === void 0 ? false : _ref2$force;
      if (force || !this.disabled) {
        this.$_scheduleShow(event);
        this.$emit("show");
      }
      this.$emit("update:open", true);
      this.$_beingShowed = true;
      requestAnimationFrame(function() {
        _this2.$_beingShowed = false;
      });
    },
    hide: function hide2() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, event = _ref3.event;
      _ref3.skipDelay;
      this.$_scheduleHide(event);
      this.$emit("hide");
      this.$emit("update:open", false);
    },
    dispose: function dispose() {
      this.$_isDisposed = true;
      this.$_removeEventListeners();
      this.hide({
        skipDelay: true
      });
      if (this.popperInstance) {
        this.popperInstance.destroy();
        if (!this.popperInstance.options.removeOnDestroy) {
          var popoverNode = this.$refs.popover;
          popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
        }
      }
      this.$_mounted = false;
      this.popperInstance = null;
      this.isOpen = false;
      this.$emit("dispose");
    },
    $_init: function $_init() {
      if (this.trigger.indexOf("manual") === -1) {
        this.$_addEventListeners();
      }
    },
    $_show: function $_show() {
      var _this3 = this;
      var reference = this.$refs.trigger;
      var popoverNode = this.$refs.popover;
      clearTimeout(this.$_disposeTimer);
      if (this.isOpen) {
        return;
      }
      if (this.popperInstance) {
        this.isOpen = true;
        this.popperInstance.enableEventListeners();
        this.popperInstance.scheduleUpdate();
      }
      if (!this.$_mounted) {
        var container2 = this.$_findContainer(this.container, reference);
        if (!container2) {
          console.warn("No container for popover", this);
          return;
        }
        container2.appendChild(popoverNode);
        this.$_mounted = true;
        this.isOpen = false;
        if (this.popperInstance) {
          requestAnimationFrame(function() {
            if (!_this3.hidden) {
              _this3.isOpen = true;
            }
          });
        }
      }
      if (!this.popperInstance) {
        var popperOptions = _objectSpread(_objectSpread({}, this.popperOptions), {}, {
          placement: this.placement
        });
        popperOptions.modifiers = _objectSpread(_objectSpread({}, popperOptions.modifiers), {}, {
          arrow: _objectSpread(_objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.arrow), {}, {
            element: this.$refs.arrow
          })
        });
        if (this.offset) {
          var offset2 = this.$_getOffset();
          popperOptions.modifiers.offset = _objectSpread(_objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.offset), {}, {
            offset: offset2
          });
        }
        if (this.boundariesElement) {
          popperOptions.modifiers.preventOverflow = _objectSpread(_objectSpread({}, popperOptions.modifiers && popperOptions.modifiers.preventOverflow), {}, {
            boundariesElement: this.boundariesElement
          });
        }
        this.popperInstance = new Popper$1(reference, popoverNode, popperOptions);
        requestAnimationFrame(function() {
          if (_this3.hidden) {
            _this3.hidden = false;
            _this3.$_hide();
            return;
          }
          if (!_this3.$_isDisposed && _this3.popperInstance) {
            _this3.popperInstance.scheduleUpdate();
            requestAnimationFrame(function() {
              if (_this3.hidden) {
                _this3.hidden = false;
                _this3.$_hide();
                return;
              }
              if (!_this3.$_isDisposed) {
                _this3.isOpen = true;
              } else {
                _this3.dispose();
              }
            });
          } else {
            _this3.dispose();
          }
        });
      }
      var openGroup = this.openGroup;
      if (openGroup) {
        var popover;
        for (var i = 0; i < openPopovers.length; i++) {
          popover = openPopovers[i];
          if (popover.openGroup !== openGroup) {
            popover.hide();
            popover.$emit("close-group");
          }
        }
      }
      openPopovers.push(this);
      this.$emit("apply-show");
    },
    $_hide: function $_hide() {
      var _this4 = this;
      if (!this.isOpen) {
        return;
      }
      var index2 = openPopovers.indexOf(this);
      if (index2 !== -1) {
        openPopovers.splice(index2, 1);
      }
      this.isOpen = false;
      if (this.popperInstance) {
        this.popperInstance.disableEventListeners();
      }
      clearTimeout(this.$_disposeTimer);
      var disposeTime = directive.options.popover.disposeTimeout || directive.options.disposeTimeout;
      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(function() {
          var popoverNode = _this4.$refs.popover;
          if (popoverNode) {
            popoverNode.parentNode && popoverNode.parentNode.removeChild(popoverNode);
            _this4.$_mounted = false;
          }
        }, disposeTime);
      }
      this.$emit("apply-hide");
    },
    $_findContainer: function $_findContainer(container2, reference) {
      if (typeof container2 === "string") {
        container2 = window.document.querySelector(container2);
      } else if (container2 === false) {
        container2 = reference.parentNode;
      }
      return container2;
    },
    $_getOffset: function $_getOffset() {
      var typeofOffset = _typeof(this.offset);
      var offset2 = this.offset;
      if (typeofOffset === "number" || typeofOffset === "string" && offset2.indexOf(",") === -1) {
        offset2 = "0, ".concat(offset2);
      }
      return offset2;
    },
    $_addEventListeners: function $_addEventListeners() {
      var _this5 = this;
      var reference = this.$refs.trigger;
      var directEvents = [];
      var oppositeEvents = [];
      var events2 = typeof this.trigger === "string" ? this.trigger.split(" ").filter(function(trigger3) {
        return ["click", "hover", "focus"].indexOf(trigger3) !== -1;
      }) : [];
      events2.forEach(function(event) {
        switch (event) {
          case "hover":
            directEvents.push("mouseenter");
            oppositeEvents.push("mouseleave");
            break;
          case "focus":
            directEvents.push("focus");
            oppositeEvents.push("blur");
            break;
          case "click":
            directEvents.push("click");
            oppositeEvents.push("click");
            break;
        }
      });
      directEvents.forEach(function(event) {
        var func = function func2(event2) {
          if (_this5.isOpen) {
            return;
          }
          event2.usedByTooltip = true;
          !_this5.$_preventOpen && _this5.show({
            event: event2
          });
          _this5.hidden = false;
        };
        _this5.$_events.push({
          event,
          func
        });
        reference.addEventListener(event, func);
      });
      oppositeEvents.forEach(function(event) {
        var func = function func2(event2) {
          if (event2.usedByTooltip) {
            return;
          }
          _this5.hide({
            event: event2
          });
          _this5.hidden = true;
        };
        _this5.$_events.push({
          event,
          func
        });
        reference.addEventListener(event, func);
      });
    },
    $_scheduleShow: function $_scheduleShow() {
      var skipDelay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      clearTimeout(this.$_scheduleTimer);
      if (skipDelay) {
        this.$_show();
      } else {
        var computedDelay = parseInt(this.delay && this.delay.show || this.delay || 0);
        this.$_scheduleTimer = setTimeout(this.$_show.bind(this), computedDelay);
      }
    },
    $_scheduleHide: function $_scheduleHide() {
      var _this6 = this;
      var event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      var skipDelay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      clearTimeout(this.$_scheduleTimer);
      if (skipDelay) {
        this.$_hide();
      } else {
        var computedDelay = parseInt(this.delay && this.delay.hide || this.delay || 0);
        this.$_scheduleTimer = setTimeout(function() {
          if (!_this6.isOpen) {
            return;
          }
          if (event && event.type === "mouseleave") {
            var isSet = _this6.$_setTooltipNodeEvent(event);
            if (isSet) {
              return;
            }
          }
          _this6.$_hide();
        }, computedDelay);
      }
    },
    $_setTooltipNodeEvent: function $_setTooltipNodeEvent(event) {
      var _this7 = this;
      var reference = this.$refs.trigger;
      var popoverNode = this.$refs.popover;
      var relatedreference = event.relatedreference || event.toElement || event.relatedTarget;
      var callback = function callback2(event2) {
        var relatedreference2 = event2.relatedreference || event2.toElement || event2.relatedTarget;
        popoverNode.removeEventListener(event.type, callback2);
        if (!reference.contains(relatedreference2)) {
          _this7.hide({
            event: event2
          });
        }
      };
      if (popoverNode.contains(relatedreference)) {
        popoverNode.addEventListener(event.type, callback);
        return true;
      }
      return false;
    },
    $_removeEventListeners: function $_removeEventListeners() {
      var reference = this.$refs.trigger;
      this.$_events.forEach(function(_ref4) {
        var func = _ref4.func, event = _ref4.event;
        reference.removeEventListener(event, func);
      });
      this.$_events = [];
    },
    $_updatePopper: function $_updatePopper(cb) {
      if (this.popperInstance) {
        cb();
        if (this.isOpen)
          this.popperInstance.scheduleUpdate();
      }
    },
    $_restartPopper: function $_restartPopper() {
      if (this.popperInstance) {
        var isOpen = this.isOpen;
        this.dispose();
        this.$_isDisposed = false;
        this.$_init();
        if (isOpen) {
          this.show({
            skipDelay: true,
            force: true
          });
        }
      }
    },
    $_handleGlobalClose: function $_handleGlobalClose(event) {
      var _this8 = this;
      var touch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (this.$_beingShowed)
        return;
      this.hide({
        event
      });
      if (event.closePopover) {
        this.$emit("close-directive");
      } else {
        this.$emit("auto-hide");
      }
      if (touch) {
        this.$_preventOpen = true;
        setTimeout(function() {
          _this8.$_preventOpen = false;
        }, 300);
      }
    },
    $_handleResize: function $_handleResize() {
      if (this.isOpen && this.popperInstance) {
        this.popperInstance.scheduleUpdate();
        this.$emit("resize");
      }
    }
  }
};
if (typeof document !== "undefined" && typeof window !== "undefined") {
  if (isIOS) {
    document.addEventListener("touchend", handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener("click", handleGlobalClick, true);
  }
}
function handleGlobalClick(event) {
  handleGlobalClose(event);
}
function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}
function handleGlobalClose(event) {
  var touch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var _loop = function _loop2(i2) {
    var popover = openPopovers[i2];
    if (popover.$refs.popover) {
      var contains = popover.$refs.popover.contains(event.target);
      requestAnimationFrame(function() {
        if (event.closeAllPopover || event.closePopover && contains || popover.autoHide && !contains) {
          popover.$_handleGlobalClose(event, touch);
        }
      });
    }
  };
  for (var i = 0; i < openPopovers.length; i++) {
    _loop(i);
  }
}
function normalizeComponent(template, style2, script2, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== "boolean") {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  const options2 = typeof script2 === "function" ? script2.options : script2;
  if (template && template.render) {
    options2.render = template.render;
    options2.staticRenderFns = template.staticRenderFns;
    options2._compiled = true;
    if (isFunctionalTemplate) {
      options2.functional = true;
    }
  }
  if (scopeId) {
    options2._scopeId = scopeId;
  }
  let hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (style2) {
        style2.call(this, createInjectorSSR(context));
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options2._ssrRegister = hook;
  } else if (style2) {
    hook = shadowMode ? function(context) {
      style2.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function(context) {
      style2.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options2.functional) {
      const originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      const existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script2;
}
var __vue_script__ = script;
var __vue_render__2 = function __vue_render__3() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "v-popover",
    class: _vm.cssClass
  }, [_c("div", {
    ref: "trigger",
    staticClass: "trigger",
    staticStyle: {
      display: "inline-block"
    },
    attrs: {
      "aria-describedby": _vm.isOpen ? _vm.popoverId : void 0,
      tabindex: _vm.trigger.indexOf("focus") !== -1 ? 0 : void 0
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c("div", {
    ref: "popover",
    class: [_vm.popoverBaseClass, _vm.popoverClass, _vm.cssClass],
    style: {
      visibility: _vm.isOpen ? "visible" : "hidden"
    },
    attrs: {
      id: _vm.popoverId,
      "aria-hidden": _vm.isOpen ? "false" : "true",
      tabindex: _vm.autoHide ? 0 : void 0
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }
        _vm.autoHide && _vm.hide();
      }
    }
  }, [_c("div", {
    class: _vm.popoverWrapperClass
  }, [_c("div", {
    ref: "inner",
    class: _vm.popoverInnerClass,
    staticStyle: {
      position: "relative"
    }
  }, [_c("div", [_vm._t("popover", null, {
    isOpen: _vm.isOpen
  })], 2), _vm._v(" "), _vm.handleResize ? _c("ResizeObserver", {
    on: {
      notify: _vm.$_handleResize
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    ref: "arrow",
    class: _vm.popoverArrowClass
  })])])]);
};
var __vue_staticRenderFns__ = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__ = void 0;
var __vue_scope_id__ = void 0;
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
var __vue_component__ = /* @__PURE__ */ normalizeComponent({
  render: __vue_render__2,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, void 0, void 0, void 0);
function styleInject(css, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css;
  } else {
    style2.appendChild(document.createTextNode(css));
  }
}
var css_248z = ".resize-observer[data-v-8859cc6c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-8859cc6c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}";
styleInject(css_248z);
function install2(Vue2) {
  var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (install2.installed)
    return;
  install2.installed = true;
  var finalOptions = {};
  merge$13(finalOptions, defaultOptions, options2);
  plugin$1.options = finalOptions;
  directive.options = finalOptions;
  Vue2.directive("tooltip", directive);
  Vue2.directive("close-popover", vclosepopover);
  Vue2.component("VPopover", __vue_component__);
}
var plugin$1 = {
  install: install2,
  get enabled() {
    return state.enabled;
  },
  set enabled(value) {
    state.enabled = value;
  }
};
var GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin$1);
}
var vueClipboard = { exports: {} };
var clipboard_min = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    return n = { 686: function(t, e, n2) {
      n2.d(e, { default: function() {
        return b;
      } });
      var e = n2(279), i = n2.n(e), e = n2(370), u = n2.n(e), e = n2(817), r2 = n2.n(e);
      function c(t2) {
        try {
          return document.execCommand(t2);
        } catch (t3) {
          return;
        }
      }
      var a = function(t2) {
        t2 = r2()(t2);
        return c("cut"), t2;
      };
      function o2(t2, e2) {
        var n3, o3, t2 = (n3 = t2, o3 = "rtl" === document.documentElement.getAttribute("dir"), (t2 = document.createElement("textarea")).style.fontSize = "12pt", t2.style.border = "0", t2.style.padding = "0", t2.style.margin = "0", t2.style.position = "absolute", t2.style[o3 ? "right" : "left"] = "-9999px", o3 = window.pageYOffset || document.documentElement.scrollTop, t2.style.top = "".concat(o3, "px"), t2.setAttribute("readonly", ""), t2.value = n3, t2);
        return e2.container.appendChild(t2), e2 = r2()(t2), c("copy"), t2.remove(), e2;
      }
      var f = function(t2) {
        var e2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { container: document.body }, n3 = "";
        return "string" == typeof t2 ? n3 = o2(t2, e2) : t2 instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t2 ? void 0 : t2.type) ? n3 = o2(t2.value, e2) : (n3 = r2()(t2), c("copy")), n3;
      };
      function l(t2) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      var s = function() {
        var t2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e2 = t2.action, n3 = void 0 === e2 ? "copy" : e2, o3 = t2.container, e2 = t2.target, t2 = t2.text;
        if ("copy" !== n3 && "cut" !== n3)
          throw new Error('Invalid "action" value, use either "copy" or "cut"');
        if (void 0 !== e2) {
          if (!e2 || "object" !== l(e2) || 1 !== e2.nodeType)
            throw new Error('Invalid "target" value, use a valid Element');
          if ("copy" === n3 && e2.hasAttribute("disabled"))
            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
          if ("cut" === n3 && (e2.hasAttribute("readonly") || e2.hasAttribute("disabled")))
            throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
        }
        return t2 ? f(t2, { container: o3 }) : e2 ? "cut" === n3 ? a(e2) : f(e2, { container: o3 }) : void 0;
      };
      function p(t2) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      function d(t2, e2) {
        for (var n3 = 0; n3 < e2.length; n3++) {
          var o3 = e2[n3];
          o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(t2, o3.key, o3);
        }
      }
      function y(t2, e2) {
        return (y = Object.setPrototypeOf || function(t3, e3) {
          return t3.__proto__ = e3, t3;
        })(t2, e2);
      }
      function h(n3) {
        var o3 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
          } catch (t2) {
            return false;
          }
        }();
        return function() {
          var t2, e2 = v(n3);
          return t2 = o3 ? (t2 = v(this).constructor, Reflect.construct(e2, arguments, t2)) : e2.apply(this, arguments), e2 = this, !(t2 = t2) || "object" !== p(t2) && "function" != typeof t2 ? function(t3) {
            if (void 0 !== t3)
              return t3;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }(e2) : t2;
        };
      }
      function v(t2) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        })(t2);
      }
      function m(t2, e2) {
        t2 = "data-clipboard-".concat(t2);
        if (e2.hasAttribute(t2))
          return e2.getAttribute(t2);
      }
      var b = function() {
        !function(t3, e3) {
          if ("function" != typeof e3 && null !== e3)
            throw new TypeError("Super expression must either be null or a function");
          t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && y(t3, e3);
        }(r3, i());
        var t2, e2, n3, o3 = h(r3);
        function r3(t3, e3) {
          var n4;
          return function(t4) {
            if (!(t4 instanceof r3))
              throw new TypeError("Cannot call a class as a function");
          }(this), (n4 = o3.call(this)).resolveOptions(e3), n4.listenClick(t3), n4;
        }
        return t2 = r3, n3 = [{ key: "copy", value: function(t3) {
          var e3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { container: document.body };
          return f(t3, e3);
        } }, { key: "cut", value: function(t3) {
          return a(t3);
        } }, { key: "isSupported", value: function() {
          var t3 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"], t3 = "string" == typeof t3 ? [t3] : t3, e3 = !!document.queryCommandSupported;
          return t3.forEach(function(t4) {
            e3 = e3 && !!document.queryCommandSupported(t4);
          }), e3;
        } }], (e2 = [{ key: "resolveOptions", value: function() {
          var t3 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.action = "function" == typeof t3.action ? t3.action : this.defaultAction, this.target = "function" == typeof t3.target ? t3.target : this.defaultTarget, this.text = "function" == typeof t3.text ? t3.text : this.defaultText, this.container = "object" === p(t3.container) ? t3.container : document.body;
        } }, { key: "listenClick", value: function(t3) {
          var e3 = this;
          this.listener = u()(t3, "click", function(t4) {
            return e3.onClick(t4);
          });
        } }, { key: "onClick", value: function(t3) {
          var e3 = t3.delegateTarget || t3.currentTarget, n4 = this.action(e3) || "copy", t3 = s({ action: n4, container: this.container, target: this.target(e3), text: this.text(e3) });
          this.emit(t3 ? "success" : "error", { action: n4, text: t3, trigger: e3, clearSelection: function() {
            e3 && e3.focus(), window.getSelection().removeAllRanges();
          } });
        } }, { key: "defaultAction", value: function(t3) {
          return m("action", t3);
        } }, { key: "defaultTarget", value: function(t3) {
          t3 = m("target", t3);
          if (t3)
            return document.querySelector(t3);
        } }, { key: "defaultText", value: function(t3) {
          return m("text", t3);
        } }, { key: "destroy", value: function() {
          this.listener.destroy();
        } }]) && d(t2.prototype, e2), n3 && d(t2, n3), r3;
      }();
    }, 828: function(t) {
      var e;
      "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function(t2, e2) {
        for (; t2 && 9 !== t2.nodeType; ) {
          if ("function" == typeof t2.matches && t2.matches(e2))
            return t2;
          t2 = t2.parentNode;
        }
      };
    }, 438: function(t, e, n2) {
      var u = n2(828);
      function i(t2, e2, n3, o2, r2) {
        var i2 = (function(e3, n4, t3, o3) {
          return function(t4) {
            t4.delegateTarget = u(t4.target, n4), t4.delegateTarget && o3.call(e3, t4);
          };
        }).apply(this, arguments);
        return t2.addEventListener(n3, i2, r2), { destroy: function() {
          t2.removeEventListener(n3, i2, r2);
        } };
      }
      t.exports = function(t2, e2, n3, o2, r2) {
        return "function" == typeof t2.addEventListener ? i.apply(null, arguments) : "function" == typeof n3 ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t2 && (t2 = document.querySelectorAll(t2)), Array.prototype.map.call(t2, function(t3) {
          return i(t3, e2, n3, o2, r2);
        }));
      };
    }, 879: function(t, n2) {
      n2.node = function(t2) {
        return void 0 !== t2 && t2 instanceof HTMLElement && 1 === t2.nodeType;
      }, n2.nodeList = function(t2) {
        var e = Object.prototype.toString.call(t2);
        return void 0 !== t2 && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t2 && (0 === t2.length || n2.node(t2[0]));
      }, n2.string = function(t2) {
        return "string" == typeof t2 || t2 instanceof String;
      }, n2.fn = function(t2) {
        return "[object Function]" === Object.prototype.toString.call(t2);
      };
    }, 370: function(t, e, n2) {
      var f = n2(879), l = n2(438);
      t.exports = function(t2, e2, n3) {
        if (!t2 && !e2 && !n3)
          throw new Error("Missing required arguments");
        if (!f.string(e2))
          throw new TypeError("Second argument must be a String");
        if (!f.fn(n3))
          throw new TypeError("Third argument must be a Function");
        if (f.node(t2))
          return c = e2, a = n3, (u = t2).addEventListener(c, a), { destroy: function() {
            u.removeEventListener(c, a);
          } };
        if (f.nodeList(t2))
          return o2 = t2, r2 = e2, i = n3, Array.prototype.forEach.call(o2, function(t3) {
            t3.addEventListener(r2, i);
          }), { destroy: function() {
            Array.prototype.forEach.call(o2, function(t3) {
              t3.removeEventListener(r2, i);
            });
          } };
        if (f.string(t2))
          return t2 = t2, e2 = e2, n3 = n3, l(document.body, t2, e2, n3);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
        var o2, r2, i, u, c, a;
      };
    }, 817: function(t) {
      t.exports = function(t2) {
        var e, n2 = "SELECT" === t2.nodeName ? (t2.focus(), t2.value) : "INPUT" === t2.nodeName || "TEXTAREA" === t2.nodeName ? ((e = t2.hasAttribute("readonly")) || t2.setAttribute("readonly", ""), t2.select(), t2.setSelectionRange(0, t2.value.length), e || t2.removeAttribute("readonly"), t2.value) : (t2.hasAttribute("contenteditable") && t2.focus(), n2 = window.getSelection(), (e = document.createRange()).selectNodeContents(t2), n2.removeAllRanges(), n2.addRange(e), n2.toString());
        return n2;
      };
    }, 279: function(t) {
      function e() {
      }
      e.prototype = { on: function(t2, e2, n2) {
        var o2 = this.e || (this.e = {});
        return (o2[t2] || (o2[t2] = [])).push({ fn: e2, ctx: n2 }), this;
      }, once: function(t2, e2, n2) {
        var o2 = this;
        function r2() {
          o2.off(t2, r2), e2.apply(n2, arguments);
        }
        return r2._ = e2, this.on(t2, r2, n2);
      }, emit: function(t2) {
        for (var e2 = [].slice.call(arguments, 1), n2 = ((this.e || (this.e = {}))[t2] || []).slice(), o2 = 0, r2 = n2.length; o2 < r2; o2++)
          n2[o2].fn.apply(n2[o2].ctx, e2);
        return this;
      }, off: function(t2, e2) {
        var n2 = this.e || (this.e = {}), o2 = n2[t2], r2 = [];
        if (o2 && e2)
          for (var i = 0, u = o2.length; i < u; i++)
            o2[i].fn !== e2 && o2[i].fn._ !== e2 && r2.push(o2[i]);
        return r2.length ? n2[t2] = r2 : delete n2[t2], this;
      } }, t.exports = e, t.exports.TinyEmitter = e;
    } }, r = {}, o.n = function(t) {
      var e = t && t.__esModule ? function() {
        return t.default;
      } : function() {
        return t;
      };
      return o.d(e, { a: e }), e;
    }, o.d = function(t, e) {
      for (var n2 in e)
        o.o(e, n2) && !o.o(t, n2) && Object.defineProperty(t, n2, { enumerable: true, get: e[n2] });
    }, o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, o(686).default;
    function o(t) {
      if (r[t])
        return r[t].exports;
      var e = r[t] = { exports: {} };
      return n[t](e, e.exports, o), e.exports;
    }
    var n, r;
  });
})(clipboard_min);
var clipboard_minExports = clipboard_min.exports;
(function(module, exports) {
  var Clipboard = clipboard_minExports;
  var VueClipboardConfig = {
    autoSetContainer: false,
    appendToBody: true
    // This fixes IE, see #50
  };
  var VueClipboard2 = {
    install: function(Vue2) {
      var globalPrototype = Vue2.version.slice(0, 2) === "3." ? Vue2.config.globalProperties : Vue2.prototype;
      globalPrototype.$clipboardConfig = VueClipboardConfig;
      globalPrototype.$copyText = function(text, container2) {
        return new Promise(function(resolve2, reject) {
          var fakeElement = document.createElement("button");
          var clipboard = new Clipboard(fakeElement, {
            text: function() {
              return text;
            },
            action: function() {
              return "copy";
            },
            container: typeof container2 === "object" ? container2 : document.body
          });
          clipboard.on("success", function(e) {
            clipboard.destroy();
            resolve2(e);
          });
          clipboard.on("error", function(e) {
            clipboard.destroy();
            reject(e);
          });
          if (VueClipboardConfig.appendToBody)
            document.body.appendChild(fakeElement);
          fakeElement.click();
          if (VueClipboardConfig.appendToBody)
            document.body.removeChild(fakeElement);
        });
      };
      Vue2.directive("clipboard", {
        bind: function(el, binding, vnode) {
          if (binding.arg === "success") {
            el._vClipboard_success = binding.value;
          } else if (binding.arg === "error") {
            el._vClipboard_error = binding.value;
          } else {
            var clipboard = new Clipboard(el, {
              text: function() {
                return binding.value;
              },
              action: function() {
                return binding.arg === "cut" ? "cut" : "copy";
              },
              container: VueClipboardConfig.autoSetContainer ? el : void 0
            });
            clipboard.on("success", function(e) {
              var callback = el._vClipboard_success;
              callback && callback(e);
            });
            clipboard.on("error", function(e) {
              var callback = el._vClipboard_error;
              callback && callback(e);
            });
            el._vClipboard = clipboard;
          }
        },
        update: function(el, binding) {
          if (binding.arg === "success") {
            el._vClipboard_success = binding.value;
          } else if (binding.arg === "error") {
            el._vClipboard_error = binding.value;
          } else {
            el._vClipboard.text = function() {
              return binding.value;
            };
            el._vClipboard.action = function() {
              return binding.arg === "cut" ? "cut" : "copy";
            };
          }
        },
        unbind: function(el, binding) {
          if (!el._vClipboard)
            return;
          if (binding.arg === "success") {
            delete el._vClipboard_success;
          } else if (binding.arg === "error") {
            delete el._vClipboard_error;
          } else {
            el._vClipboard.destroy();
            delete el._vClipboard;
          }
        }
      });
    },
    config: VueClipboardConfig
  };
  {
    module.exports = VueClipboard2;
  }
})(vueClipboard);
var vueClipboardExports = vueClipboard.exports;
const VueClipboard = /* @__PURE__ */ getDefaultExportFromCjs(vueClipboardExports);
var whatInput$1 = { exports: {} };
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    return (
      /******/
      function(modules2) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId])
            return installedModules[moduleId].exports;
          var module2 = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
            /******/
          };
          modules2[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.loaded = true;
          return module2.exports;
        }
        __webpack_require__.m = modules2;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
      }([
        /* 0 */
        /***/
        function(module2, exports2) {
          module2.exports = function() {
            if (typeof document === "undefined" || typeof window === "undefined") {
              return {
                // always return "initial" because no interaction will ever be detected
                ask: function ask() {
                  return "initial";
                },
                // always return null
                element: function element() {
                  return null;
                },
                // no-op
                ignoreKeys: function ignoreKeys() {
                },
                // no-op
                specificKeys: function specificKeys() {
                },
                // no-op
                registerOnChange: function registerOnChange() {
                },
                // no-op
                unRegisterOnChange: function unRegisterOnChange() {
                }
              };
            }
            var docElem = document.documentElement;
            var currentElement = null;
            var currentInput = "initial";
            var currentIntent = currentInput;
            var currentTimestamp = Date.now();
            var shouldPersist = false;
            var formInputs = ["button", "input", "select", "textarea"];
            var functionList = [];
            var ignoreMap = [
              16,
              // shift
              17,
              // control
              18,
              // alt
              91,
              // Windows key / left Apple cmd
              93
              // Windows menu / right Apple cmd
            ];
            var specificMap = [];
            var inputMap = {
              keydown: "keyboard",
              keyup: "keyboard",
              mousedown: "mouse",
              mousemove: "mouse",
              MSPointerDown: "pointer",
              MSPointerMove: "pointer",
              pointerdown: "pointer",
              pointermove: "pointer",
              touchstart: "touch",
              touchend: "touch"
              // boolean: true if the page is being scrolled
            };
            var isScrolling = false;
            var mousePos = {
              x: null,
              y: null
              // map of IE 10 pointer events
            };
            var pointerMap = {
              2: "touch",
              3: "touch",
              // treat pen like touch
              4: "mouse"
              // check support for passive event listeners
            };
            var supportsPassive2 = false;
            try {
              var opts = Object.defineProperty({}, "passive", {
                get: function get3() {
                  supportsPassive2 = true;
                }
              });
              window.addEventListener("test", null, opts);
            } catch (e) {
            }
            var setUp = function setUp2() {
              inputMap[detectWheel()] = "mouse";
              addListeners2();
            };
            var addListeners2 = function addListeners3() {
              var options2 = supportsPassive2 ? { passive: true, capture: true } : true;
              document.addEventListener("DOMContentLoaded", setPersist, true);
              if (window.PointerEvent) {
                window.addEventListener("pointerdown", setInput, true);
                window.addEventListener("pointermove", setIntent, true);
              } else if (window.MSPointerEvent) {
                window.addEventListener("MSPointerDown", setInput, true);
                window.addEventListener("MSPointerMove", setIntent, true);
              } else {
                window.addEventListener("mousedown", setInput, true);
                window.addEventListener("mousemove", setIntent, true);
                if ("ontouchstart" in window) {
                  window.addEventListener("touchstart", setInput, options2);
                  window.addEventListener("touchend", setInput, true);
                }
              }
              window.addEventListener(detectWheel(), setIntent, options2);
              window.addEventListener("keydown", setInput, true);
              window.addEventListener("keyup", setInput, true);
              window.addEventListener("focusin", setElement, true);
              window.addEventListener("focusout", clearElement, true);
            };
            var setPersist = function setPersist2() {
              shouldPersist = !(docElem.getAttribute("data-whatpersist") === "false" || document.body.getAttribute("data-whatpersist") === "false");
              if (shouldPersist) {
                try {
                  if (window.sessionStorage.getItem("what-input")) {
                    currentInput = window.sessionStorage.getItem("what-input");
                  }
                  if (window.sessionStorage.getItem("what-intent")) {
                    currentIntent = window.sessionStorage.getItem("what-intent");
                  }
                } catch (e) {
                }
              }
              doUpdate("input");
              doUpdate("intent");
            };
            var setInput = function setInput2(event) {
              var eventKey = event.which;
              var value = inputMap[event.type];
              if (value === "pointer") {
                value = pointerType(event);
              }
              var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;
              var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;
              var shouldUpdate = value === "keyboard" && eventKey && (ignoreMatch || specificMatch) || value === "mouse" || value === "touch";
              if (validateTouch(value)) {
                shouldUpdate = false;
              }
              if (shouldUpdate && currentInput !== value) {
                currentInput = value;
                persistInput("input", currentInput);
                doUpdate("input");
              }
              if (shouldUpdate && currentIntent !== value) {
                var activeElem = document.activeElement;
                var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === "button" && !checkClosest(activeElem, "form"));
                if (notFormInput) {
                  currentIntent = value;
                  persistInput("intent", currentIntent);
                  doUpdate("intent");
                }
              }
            };
            var doUpdate = function doUpdate2(which) {
              docElem.setAttribute("data-what" + which, which === "input" ? currentInput : currentIntent);
              fireFunctions(which);
            };
            var setIntent = function setIntent2(event) {
              var value = inputMap[event.type];
              if (value === "pointer") {
                value = pointerType(event);
              }
              detectScrolling(event);
              if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === "wheel" || event.type === "mousewheel" || event.type === "DOMMouseScroll") && currentIntent !== value) {
                currentIntent = value;
                persistInput("intent", currentIntent);
                doUpdate("intent");
              }
            };
            var setElement = function setElement2(event) {
              if (!event.target.nodeName) {
                clearElement();
                return;
              }
              currentElement = event.target.nodeName.toLowerCase();
              docElem.setAttribute("data-whatelement", currentElement);
              if (event.target.classList && event.target.classList.length) {
                docElem.setAttribute("data-whatclasses", event.target.classList.toString().replace(" ", ","));
              }
            };
            var clearElement = function clearElement2() {
              currentElement = null;
              docElem.removeAttribute("data-whatelement");
              docElem.removeAttribute("data-whatclasses");
            };
            var persistInput = function persistInput2(which, value) {
              if (shouldPersist) {
                try {
                  window.sessionStorage.setItem("what-" + which, value);
                } catch (e) {
                }
              }
            };
            var pointerType = function pointerType2(event) {
              if (typeof event.pointerType === "number") {
                return pointerMap[event.pointerType];
              } else {
                return event.pointerType === "pen" ? "touch" : event.pointerType;
              }
            };
            var validateTouch = function validateTouch2(value) {
              var timestamp = Date.now();
              var touchIsValid = value === "mouse" && currentInput === "touch" && timestamp - currentTimestamp < 200;
              currentTimestamp = timestamp;
              return touchIsValid;
            };
            var detectWheel = function detectWheel2() {
              var wheelType = null;
              if ("onwheel" in document.createElement("div")) {
                wheelType = "wheel";
              } else {
                wheelType = document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll";
              }
              return wheelType;
            };
            var fireFunctions = function fireFunctions2(type) {
              for (var i = 0, len = functionList.length; i < len; i++) {
                if (functionList[i].type === type) {
                  functionList[i].fn.call(void 0, type === "input" ? currentInput : currentIntent);
                }
              }
            };
            var objPos = function objPos2(match3) {
              for (var i = 0, len = functionList.length; i < len; i++) {
                if (functionList[i].fn === match3) {
                  return i;
                }
              }
            };
            var detectScrolling = function detectScrolling2(event) {
              if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
                isScrolling = false;
                mousePos.x = event.screenX;
                mousePos.y = event.screenY;
              } else {
                isScrolling = true;
              }
            };
            var checkClosest = function checkClosest2(elem, tag) {
              var ElementPrototype = window.Element.prototype;
              if (!ElementPrototype.matches) {
                ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
              }
              if (!ElementPrototype.closest) {
                do {
                  if (elem.matches(tag)) {
                    return elem;
                  }
                  elem = elem.parentElement || elem.parentNode;
                } while (elem !== null && elem.nodeType === 1);
                return null;
              } else {
                return elem.closest(tag);
              }
            };
            if ("addEventListener" in window && Array.prototype.indexOf) {
              setUp();
            }
            return {
              // returns string: the current input type
              // opt: 'intent'|'input'
              // 'input' (default): returns the same value as the `data-whatinput` attribute
              // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
              ask: function ask(opt) {
                return opt === "intent" ? currentIntent : currentInput;
              },
              // returns string: the currently focused element or null
              element: function element() {
                return currentElement;
              },
              // overwrites ignored keys with provided array
              ignoreKeys: function ignoreKeys(arr) {
                ignoreMap = arr;
              },
              // overwrites specific char keys to update on
              specificKeys: function specificKeys(arr) {
                specificMap = arr;
              },
              // attach functions to input and intent "events"
              // funct: function to fire on change
              // eventType: 'input'|'intent'
              registerOnChange: function registerOnChange(fn, eventType) {
                functionList.push({
                  fn,
                  type: eventType || "input"
                });
              },
              unRegisterOnChange: function unRegisterOnChange(fn) {
                var position = objPos(fn);
                if (position || position === 0) {
                  functionList.splice(position, 1);
                }
              },
              clearStorage: function clearStorage() {
                window.sessionStorage.clear();
              }
            };
          }();
        }
        /******/
      ])
    );
  });
})(whatInput$1);
var whatInputExports = whatInput$1.exports;
const whatInput = /* @__PURE__ */ getDefaultExportFromCjs(whatInputExports);
const plugin = {
  install(Vue2) {
    Vue2.prototype.$whatInput = whatInput;
  }
};
Vue$1.config.productionTip = false;
Vue$1.use(plugin$1);
Vue$1.use(VueClipboard);
Vue$1.use(plugin);
new Vue$1({
  el: "#app",
  router,
  render: (h) => h(App2)
}).$mount("#app");
export {
  Component as C,
  EventBus as E,
  Prop as P,
  Toggle2 as T,
  Vue$1 as V,
  Watch as W,
  commonjsGlobal as c,
  getDefaultExportFromCjs as g,
  normalizeComponent$2 as n
};
//# sourceMappingURL=index-158ccef1.js.map

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as Watch, C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { i as isArray, a as isSymbol, t as toString, S as Symbol$1, b as isObjectLike, c as baseGetTag, d as arrayMap } from "./DemoSection-d8bdef32.js";
import { d as defineProperty, M as MapCache, i as isArguments, a as arrayPush, g as getPrototype, c as copyObject, b as getAllKeysIn, e as baseClone } from "./_baseClone-bc178edd.js";
function identity(value) {
  return value;
}
function apply(func, thisArg, args) {
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
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
const baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
const setToString$1 = setToString;
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
const stringToPath$1 = stringToPath;
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function isNil(value) {
  return value == null;
}
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
function customOmitClone(value) {
  return isPlainObject(value) ? void 0 : value;
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
const omit$1 = omit;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
let TextInput$1 = class TextInput extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "name");
    __publicField(this, "value");
    __publicField(this, "error");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "step");
    __publicField(this, "helpText");
    __publicField(this, "type");
    __publicField(this, "placeholder");
    __publicField(this, "disabled");
    __publicField(this, "label");
    __publicField(this, "readonly");
    __publicField(this, "autoComplete");
    __publicField(this, "autofocus");
    __publicField(this, "content", "");
  }
  created() {
    this.content = this.value !== void 0 && this.value !== null ? this.value.toString() : "";
    this.$parent.$on("update", this.updateValue);
  }
  focus() {
    this.$refs.input.focus();
  }
  get filteredListeners() {
    return omit$1(this.$listeners, ["input"]);
  }
  get isMaxReached() {
    return this.type === "number" && !isNil(this.max) && Number(this.value) >= this.max;
  }
  get isMinReached() {
    return this.type === "number" && !isNil(this.min) && Number(this.value) <= this.min;
  }
  valueChanged(newValue) {
    this.content = newValue.toString();
    this.$emit("onChange", newValue);
  }
  handleInput(event) {
    this.update(
      this.type === "number" ? Number(event.target.value) : event.target.value
    );
  }
  updateValue(val) {
    this.$refs.input.value = val;
  }
  onKeyUp(event) {
    this.$emit("keyup", event);
  }
  onFocus(event) {
    this.$emit("focus", event);
  }
  onClick(event) {
    this.$emit("click", event);
  }
  increment() {
    if (this.isMaxReached)
      return;
    this.update(Number(this.content) + this.step);
  }
  decrement() {
    if (this.isMinReached)
      return;
    this.update(Number(this.content) - this.step);
  }
  mouseWheel(event) {
    if (this.type === "number") {
      if (event.deltaY > 0)
        this.decrement();
      else
        this.increment();
      event.preventDefault();
    }
  }
  update(value) {
    this.$emit("input", value);
  }
};
__decorateClass([
  Prop({ type: String })
], TextInput$1.prototype, "name", 2);
__decorateClass([
  Prop({ type: [String, Number] })
], TextInput$1.prototype, "value", 2);
__decorateClass([
  Prop({ type: String })
], TextInput$1.prototype, "error", 2);
__decorateClass([
  Prop({ type: Number })
], TextInput$1.prototype, "min", 2);
__decorateClass([
  Prop({ type: Number })
], TextInput$1.prototype, "max", 2);
__decorateClass([
  Prop({ type: Number, default: 1 })
], TextInput$1.prototype, "step", 2);
__decorateClass([
  Prop({ type: String })
], TextInput$1.prototype, "helpText", 2);
__decorateClass([
  Prop({ type: String, default: "text" })
], TextInput$1.prototype, "type", 2);
__decorateClass([
  Prop({ type: String })
], TextInput$1.prototype, "placeholder", 2);
__decorateClass([
  Prop({ type: Boolean })
], TextInput$1.prototype, "disabled", 2);
__decorateClass([
  Prop({ type: String })
], TextInput$1.prototype, "label", 2);
__decorateClass([
  Prop({ type: Boolean })
], TextInput$1.prototype, "readonly", 2);
__decorateClass([
  Prop({ type: String, default: "off" })
], TextInput$1.prototype, "autoComplete", 2);
__decorateClass([
  Prop({ type: Boolean })
], TextInput$1.prototype, "autofocus", 2);
__decorateClass([
  Watch("value")
], TextInput$1.prototype, "valueChanged", 1);
TextInput$1 = __decorateClass([
  Component({})
], TextInput$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-form-field",
    class: {
      "s-form-field--with-label": _vm.label,
      "s-form-field--disabled": _vm.disabled
    }
  }, [_vm.type === "number" ? _c("div", {
    staticClass: "s-arrows"
  }, [_c("div", {
    class: {
      "s-arrow arrow-up": true,
      "s-arrow--disabled": _vm.isMaxReached
    },
    on: {
      "click": _vm.increment
    }
  }, [_c("i", {
    staticClass: "fas fa-caret-up"
  })]), _c("div", {
    class: {
      "s-arrow arrow-down": true,
      "s-arrow--disabled": _vm.isMinReached
    },
    on: {
      "click": _vm.decrement
    }
  }, [_c("i", {
    staticClass: "fas fa-caret-down"
  })])]) : _vm._e(), _vm.type === "checkbox" ? _c("input", _vm._g({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    ref: "input",
    class: {
      "s-form-field__input": true,
      "s-form-field__input--error": !!_vm.error,
      "s-form-field__input--disabled": _vm.disabled
    },
    attrs: {
      "placeholder": _vm.placeholder,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autoComplete,
      "autofocus": _vm.autofocus,
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.content) ? _vm._i(_vm.content, null) > -1 : _vm.content
    },
    on: {
      "input": _vm.handleInput,
      "blur": function($event) {
        return _vm.$emit("blur");
      },
      "focus": _vm.onFocus,
      "click": _vm.onClick,
      "keyup": _vm.onKeyUp,
      "mousewheel": _vm.mouseWheel,
      "change": function($event) {
        var $$a = _vm.content, $$el = $event.target, $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null, $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.content = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.content = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.content = $$c;
        }
      }
    }
  }, _vm.filteredListeners)) : _vm.type === "radio" ? _c("input", _vm._g({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    ref: "input",
    class: {
      "s-form-field__input": true,
      "s-form-field__input--error": !!_vm.error,
      "s-form-field__input--disabled": _vm.disabled
    },
    attrs: {
      "placeholder": _vm.placeholder,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autoComplete,
      "autofocus": _vm.autofocus,
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.content, null)
    },
    on: {
      "input": _vm.handleInput,
      "blur": function($event) {
        return _vm.$emit("blur");
      },
      "focus": _vm.onFocus,
      "click": _vm.onClick,
      "keyup": _vm.onKeyUp,
      "mousewheel": _vm.mouseWheel,
      "change": function($event) {
        _vm.content = null;
      }
    }
  }, _vm.filteredListeners)) : _c("input", _vm._g({
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    ref: "input",
    class: {
      "s-form-field__input": true,
      "s-form-field__input--error": !!_vm.error,
      "s-form-field__input--disabled": _vm.disabled
    },
    attrs: {
      "placeholder": _vm.placeholder,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "autocomplete": _vm.autoComplete,
      "autofocus": _vm.autofocus,
      "type": _vm.type
    },
    domProps: {
      "value": _vm.content
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing)
          return;
        _vm.content = $event.target.value;
      }, _vm.handleInput],
      "blur": function($event) {
        return _vm.$emit("blur");
      },
      "focus": _vm.onFocus,
      "click": _vm.onClick,
      "keyup": _vm.onKeyUp,
      "mousewheel": _vm.mouseWheel
    }
  }, _vm.filteredListeners)), _vm.label ? _c("label", {
    staticClass: "s-form-field__label",
    class: {
      "s-form-field__label--top": _vm.value !== "" && !_vm.disabled
    }
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.error,
      expression: "error"
    }],
    staticClass: "s-form-field__input-error"
  }, [_c("i", {
    staticClass: "icon-error"
  }), _vm._v(" " + _vm._s(_vm.error) + " ")]), _c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.helpText,
      expression: "helpText"
    }],
    staticClass: "s-form-field__help-text"
  }, [_vm._v(_vm._s(_vm.helpText))])]);
};
var staticRenderFns = [];
const TextInput_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  TextInput$1,
  render,
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
const TextInput2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  TextInput2 as T,
  omit$1 as o
};
//# sourceMappingURL=TextInput-2ccb4081.js.map

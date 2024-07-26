var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { A as Accordion } from "./Accordion-7aa9b24d.js";
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
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
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
const isArray$1 = isArray;
var INFINITY = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var escapeHtmlChar = basePropertyOf(htmlEscapes);
const escapeHtmlChar$1 = escapeHtmlChar;
var reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape(string) {
  string = toString(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar$1) : string;
}
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
let DemoSection$1 = class DemoSection extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "title");
    __publicField(this, "code");
  }
  get escapedHtml() {
    const codeRegEx = new RegExp(
      `title="${this.title}" :code="demoCode">\\s*<template #components>([\\S\\s]*?)<\\/template>\\s*</DemoSection>`,
      "gm"
    );
    const codeMatch = codeRegEx.exec(this.code);
    const lines = codeMatch[1].split("\n");
    const matches = /^\s+/.exec(lines[1]);
    const indentation = matches != null ? matches[0] : null;
    let indentedLines = [];
    if (indentation) {
      indentedLines = lines.map((line) => line.replace(indentation, ""));
    }
    return escape(indentedLines.join("\n").trim());
  }
};
__decorateClass([
  Prop()
], DemoSection$1.prototype, "title", 2);
__decorateClass([
  Prop({ required: true })
], DemoSection$1.prototype, "code", 2);
DemoSection$1 = __decorateClass([
  Component({
    components: {
      Accordion
    }
  })
], DemoSection$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-demo-section"
  }, [_c("Accordion", {
    attrs: {
      "openedTitle": "Hide Code",
      "closedTitle": "Show Code"
    }
  }, [_c("div", {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c("pre", [_c("code", {
    domProps: {
      "innerHTML": _vm._s(_vm.escapedHtml)
    }
  })])])]), _c("div", {
    staticClass: "s-demo-section__content"
  }, [_vm._t("components")], 2)], 1);
};
var staticRenderFns = [];
const DemoSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  DemoSection$1,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "c568a2d0",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const DemoSection2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  DemoSection2 as D,
  Symbol$2 as S,
  isSymbol as a,
  isObjectLike as b,
  baseGetTag as c,
  arrayMap as d,
  freeGlobal$1 as f,
  isArray$1 as i,
  root$1 as r,
  toString as t
};
//# sourceMappingURL=DemoSection-d8bdef32.js.map

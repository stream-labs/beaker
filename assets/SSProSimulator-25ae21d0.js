var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let UrlBar$1 = class UrlBar extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "domain");
  }
};
__decorateClass$1([
  Prop({
    default: "https://awkwardraccoon.com"
  })
], UrlBar$1.prototype, "domain", 2);
UrlBar$1 = __decorateClass$1([
  Component({})
], UrlBar$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-cs-simulator__web-bar"
  }, [_vm._m(0), _c("div", {
    staticClass: "s-cs-simulator__url-container"
  }, [_vm._v(_vm._s(_vm.domain))])]);
};
var staticRenderFns$1 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-cs-simulator__web-bar-dots"
  }, [_c("div", {
    staticClass: "s-cs-simulator__web-bar-dot"
  }), _c("div", {
    staticClass: "s-cs-simulator__web-bar-dot"
  }), _c("div", {
    staticClass: "s-cs-simulator__web-bar-dot"
  })]);
}];
const UrlBar_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  UrlBar$1,
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
const UrlBar2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
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
let ScsroSimulator = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "username");
    __publicField(this, "icon");
    __publicField(this, "domain");
    __publicField(this, "themeClasses", ["teal", "orange", "purple", "electric-blue", "red", "lime"]);
    __publicField(this, "themeClass", "");
    __publicField(this, "myInt");
  }
  rotateClasses() {
    let it = this.themeClasses[Symbol.iterator]();
    this.myInt = setInterval(() => {
      const next = it.next();
      if (!next.done) {
        this.themeClass = "s-cs-simulator__web-page--" + next.value;
      } else {
        it = this.themeClasses[Symbol.iterator]();
      }
    }, 2e3);
  }
  beforeDestroy() {
    clearInterval(this.myInt);
  }
  mounted() {
    this.rotateClasses();
  }
};
__decorateClass([
  Prop({ default: "Awkward__Raccoon" })
], ScsroSimulator.prototype, "username", 2);
__decorateClass([
  Prop({
    default: "https://live.kickstarter.com/images/avatar/medium/avatars4.png"
  })
], ScsroSimulator.prototype, "icon", 2);
__decorateClass([
  Prop({ default: "https://awkwardraccoon.tv" })
], ScsroSimulator.prototype, "domain", 2);
ScsroSimulator = __decorateClass([
  Component({
    components: {
      UrlBar: UrlBar2
    }
  })
], ScsroSimulator);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-cs-simulator"
  }, [_c("UrlBar", {
    attrs: {
      "domain": _vm.domain
    }
  }), _c("div", {
    staticClass: "s-cs-simulator__web-page",
    class: _vm.themeClass
  }, [_c("div", {
    staticClass: "s-cs-simulator__heading"
  }, [_c("img", {
    staticClass: "s-cs-simulator__icon",
    attrs: {
      "src": _vm.icon
    }
  }), _c("div", {
    staticClass: "s-cs-simulator__header-text"
  }, [_c("h1", {
    staticClass: "s-cs-simulator__username"
  }, [_vm._v(_vm._s(_vm.username))]), _c("div", {
    staticClass: "s-cs-simulator__desc"
  })])]), _vm._m(0), _vm._m(1), _c("div", {
    staticClass: "s-cs-simulator__section"
  }), _c("div", {
    staticClass: "s-cs-simulator__section"
  }), _c("div", {
    staticClass: "s-cs-simulator__section"
  }), _c("div", {
    staticClass: "s-cs-simulator__section"
  })])], 1);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-cs-simulator__section"
  }, [_c("div", {
    staticClass: "s-cs-simulator__video"
  }, [_c("i", {
    staticClass: "icon-media-share-2"
  })])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-cs-simulator__section"
  }, [_c("div", {
    staticClass: "s-cs-simulator__fake-input"
  }), _c("div", {
    staticClass: "s-cs-simulator__fake-input"
  }), _c("div", {
    staticClass: "s-cs-simulator__fake-input"
  }), _c("div", {
    staticClass: "s-cs-simulator__fake-button"
  })]);
}];
const SSProSimulator_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  ScsroSimulator,
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
const SSProSimulator = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  SSProSimulator as S,
  UrlBar2 as U
};
//# sourceMappingURL=SSProSimulator-25ae21d0.js.map

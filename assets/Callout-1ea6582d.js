var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { B as Badge } from "./Badge-2f139b6a.js";
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
let Callout$1 = class Callout extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "variation");
    __publicField(this, "icon");
    __publicField(this, "customIcon");
    __publicField(this, "closeable");
    __publicField(this, "onClose");
    __publicField(this, "closed", false);
    __publicField(this, "calloutClosedClass", "");
  }
  closeCallout() {
    this.calloutClosedClass = "callout--closed";
    setTimeout(() => {
      typeof this.onClose === "function" && this.onClose();
    }, 275);
  }
  get calloutClass() {
    return `s-callout--${this.variation}`;
  }
  get calloutIcon() {
    if (this.customIcon)
      return this.customIcon;
    switch (this.variation) {
      case "success":
      case "success-alt":
        return "icon-check";
      case "warning":
      case "warning-alt":
        return "icon-error";
      case "info":
        return "icon-information";
      case "cookies":
        return "icon-information";
    }
  }
  get isPrime() {
    return this.variation === "prime";
  }
};
__decorateClass([
  Prop({ default: "success" })
], Callout$1.prototype, "variation", 2);
__decorateClass([
  Prop({ default: true })
], Callout$1.prototype, "icon", 2);
__decorateClass([
  Prop()
], Callout$1.prototype, "customIcon", 2);
__decorateClass([
  Prop({ default: false })
], Callout$1.prototype, "closeable", 2);
__decorateClass([
  Prop()
], Callout$1.prototype, "onClose", 2);
Callout$1 = __decorateClass([
  Component({
    components: {
      Badge
    }
  })
], Callout$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.closed ? _c("div", {
    staticClass: "s-callout",
    class: [_vm.calloutClass, _vm.calloutClosedClass]
  }, [_c("span", {
    staticClass: "s-callout__content"
  }, [_vm.icon ? _c("i", {
    class: [_vm.calloutIcon]
  }) : _vm._e(), _vm.isPrime ? _c("Badge", {
    attrs: {
      "variant": "prime",
      "align-left": true
    }
  }) : _vm._e(), _c("span", [_vm._t("default")], 2), _vm.closeable ? _c("i", {
    staticClass: "icon-close s-callout__close-button",
    on: {
      "click": function($event) {
        return _vm.closeCallout();
      }
    }
  }) : _vm._e(), _vm.isPrime ? _c("a", {
    staticClass: "s-callout__more",
    on: {
      "click": function($event) {
        return _vm.$emit("onClick");
      }
    }
  }, [_vm._v("Learn more")]) : _vm._e()], 1)]) : _vm._e();
};
var staticRenderFns = [];
const Callout_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Callout$1,
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
const Callout2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Callout2 as C
};
//# sourceMappingURL=Callout-1ea6582d.js.map

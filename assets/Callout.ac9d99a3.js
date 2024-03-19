var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index.4fb8a6cb.js";
import { B as Badge } from "./Badge.2c39dd0d.js";
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
let Callout$1 = class extends Vue {
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
const Callout_vue_vue_type_style_index_0_lang = "";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return !_vm.closed ? _c("div", { staticClass: "s-callout", class: [_vm.calloutClass, _vm.calloutClosedClass] }, [_c("span", { staticClass: "s-callout__content" }, [_vm.icon ? _c("i", { class: [_vm.calloutIcon] }) : _vm._e(), _vm.isPrime ? _c("Badge", { attrs: { "variant": "prime", "align-left": true } }) : _vm._e(), _c("span", [_vm._t("default")], 2), _vm.closeable ? _c("i", { staticClass: "icon-close s-callout__close-button", on: { "click": function($event) {
    return _vm.closeCallout();
  } } }) : _vm._e(), _vm.isPrime ? _c("a", { staticClass: "s-callout__more", on: { "click": function($event) {
    return _vm.$emit("onClick");
  } } }, [_vm._v("Learn more")]) : _vm._e()], 1)]) : _vm._e();
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  Callout$1,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const Callout = __component__.exports;
export {
  Callout as C
};
//# sourceMappingURL=Callout.ac9d99a3.js.map

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index.4fb8a6cb.js";
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
let Spinner = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "variation");
    __publicField(this, "title");
    __publicField(this, "subtitle");
    __publicField(this, "titleSlot");
    __publicField(this, "hasLink");
  }
};
__decorateClass([
  Prop({ default: "text" })
], Spinner.prototype, "variation", 2);
__decorateClass([
  Prop({ default: "Streamlabs.com" })
], Spinner.prototype, "title", 2);
__decorateClass([
  Prop({ default: "" })
], Spinner.prototype, "subtitle", 2);
__decorateClass([
  Prop({ default: false })
], Spinner.prototype, "titleSlot", 2);
__decorateClass([
  Prop({ default: false })
], Spinner.prototype, "hasLink", 2);
Spinner = __decorateClass([
  Component({})
], Spinner);
const EmptySection_vue_vue_type_style_index_0_lang = "";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "s-empty-section" }, [this.variation === "search" ? _c("i", { staticClass: "icon-search" }) : _vm._e(), this.variation === "text" ? _c("i", { staticClass: "icon-empty" }) : _vm._e(), this.variation === "prime" ? _c("i", { staticClass: "icon-lock" }) : _vm._e(), this.variation === "warning" ? _c("i", { staticClass: "icon-error" }) : _vm._e(), _vm.titleSlot ? _c("div", { staticClass: "s-empty-section__title" }, [_vm._t("title")], 2) : _c("div", { staticClass: "s-empty-section__title" }, [_vm._v(_vm._s(_vm.title))]), _c("div", { staticClass: "s-empty-section__subtitle" }, [_vm._v(_vm._s(_vm.subtitle))]), _vm._t("default"), _vm.hasLink ? _c("div", [_vm._t("link")], 2) : _vm._e()], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  Spinner,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const EmptySection = __component__.exports;
export {
  EmptySection as E
};
//# sourceMappingURL=EmptySection.71dd93db.js.map

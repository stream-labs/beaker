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
let FormGroup$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "helpText");
    __publicField(this, "tooltip");
    __publicField(this, "title");
  }
};
__decorateClass([
  Prop()
], FormGroup$1.prototype, "helpText", 2);
__decorateClass([
  Prop()
], FormGroup$1.prototype, "tooltip", 2);
__decorateClass([
  Prop()
], FormGroup$1.prototype, "title", 2);
FormGroup$1 = __decorateClass([
  Component({})
], FormGroup$1);
const FormGroup_vue_vue_type_style_index_0_lang = "";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "s-form-group" }, [_vm._t("input")], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  FormGroup$1,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const FormGroup = __component__.exports;
export {
  FormGroup as F
};
//# sourceMappingURL=FormGroup.79b6121d.js.map

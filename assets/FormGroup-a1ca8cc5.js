var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
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
let FormGroup$1 = class FormGroup extends Vue {
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
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-form-group"
  }, [_vm._t("input")], 2);
};
var staticRenderFns = [];
const FormGroup_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  FormGroup$1,
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
const FormGroup2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  FormGroup2 as F
};
//# sourceMappingURL=FormGroup-a1ca8cc5.js.map

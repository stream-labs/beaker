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
let Badge$1 = class Badge extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "variant");
    __publicField(this, "alignLeft");
    __publicField(this, "noMargin");
    __publicField(this, "backgroundColor");
    __publicField(this, "textColor");
    __publicField(this, "current");
    __publicField(this, "total");
    __publicField(this, "separator");
    __publicField(this, "suffix");
    __publicField(this, "small");
    __publicField(this, "badgeProRewrite", {
      background: this.backgroundColor,
      color: this.textColor
    });
  }
  get badgeStyles() {
    const styles = [];
    if (this.backgroundColor && this.variant !== "progress") {
      styles.push(this.badgeProRewrite);
    }
    return styles;
  }
  get badgeClasses() {
    const classes = [];
    classes.push(`s-badge--${this.variant}`);
    if (this.alignLeft) {
      classes.push(`s-badge--left`);
    }
    if (this.noMargin) {
      classes.push("s-badge--no-margin");
    }
    if (this.small) {
      classes.push("s-badge--small");
    }
    return classes;
  }
};
__decorateClass([
  Prop({ default: "success" })
], Badge$1.prototype, "variant", 2);
__decorateClass([
  Prop({ default: false })
], Badge$1.prototype, "alignLeft", 2);
__decorateClass([
  Prop({ default: false })
], Badge$1.prototype, "noMargin", 2);
__decorateClass([
  Prop()
], Badge$1.prototype, "backgroundColor", 2);
__decorateClass([
  Prop({ default: "#ffffff" })
], Badge$1.prototype, "textColor", 2);
__decorateClass([
  Prop()
], Badge$1.prototype, "current", 2);
__decorateClass([
  Prop()
], Badge$1.prototype, "total", 2);
__decorateClass([
  Prop({ default: "/" })
], Badge$1.prototype, "separator", 2);
__decorateClass([
  Prop()
], Badge$1.prototype, "suffix", 2);
__decorateClass([
  Prop()
], Badge$1.prototype, "small", 2);
Badge$1 = __decorateClass([
  Component({})
], Badge$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-badge",
    class: _vm.badgeClasses,
    style: _vm.badgeStyles
  }, [_vm.variant === "progress" ? _c("div", {
    style: {
      "background-image": `linear-gradient(
        to right,
        ${_vm.backgroundColor} ${parseInt(_vm.current / _vm.total * 100)}%,
        rgba(0,0,0,0) 0%
      )`,
      color: _vm.textColor
    }
  }, [_vm._v(" " + _vm._s(`${_vm.current}${_vm.separator}${_vm.total} ${_vm.suffix}`) + " ")]) : _vm._e(), _vm.variant === "prime" || _vm.variant === "prime-alt" ? _c("div", [_vm.variant === "prime" ? _c("i", {
    staticClass: "icon-prime"
  }) : _vm._e(), _vm._v("Prime ")]) : _vm.variant === "ultra" || _vm.variant === "ultra-alt" ? _c("div", [_vm.variant === "ultra" ? _c("i", {
    staticClass: "icon-ultra"
  }) : _vm._e()]) : _vm._t("default")], 2);
};
var staticRenderFns = [];
const Badge_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Badge$1,
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
const Badge2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Badge2 as B
};
//# sourceMappingURL=Badge-2f139b6a.js.map

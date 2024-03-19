import { d as defineComponent, r as ref$1, c as computed, n as normalizeComponent } from "./index.4fb8a6cb.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    variant: { default: "success" },
    alignLeft: { type: Boolean, default: false },
    noMargin: { type: Boolean, default: false },
    backgroundColor: null,
    textColor: { default: "#ffffff" },
    current: null,
    total: null,
    separator: { default: "/" },
    suffix: null,
    small: null
  },
  setup(__props) {
    const props = __props;
    const badgeProRewrite = ref$1({
      background: props.backgroundColor,
      color: props.textColor
    });
    const badgeStyles = computed(
      () => props.backgroundColor && props.variant !== "progress" ? [badgeProRewrite.value] : []
    );
    const badgeClasses = computed(() => {
      const classes = [];
      classes.push(`s-badge--${props.variant}`);
      if (props.alignLeft) {
        classes.push(`s-badge--left`);
      }
      if (props.noMargin) {
        classes.push("s-badge--no-margin");
      }
      if (props.small) {
        classes.push("s-badge--small");
      }
      return classes;
    });
    const progressPercentage = computed(
      () => props.current && props.total ? props.current / props.total * 100 : 0
    );
    return { __sfc: true, props, badgeProRewrite, badgeStyles, badgeClasses, progressPercentage };
  }
});
const Badge_vue_vue_type_style_index_0_lang = "";
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("div", { staticClass: "s-badge", class: _setup.badgeClasses, style: _setup.badgeStyles }, [_vm.variant === "progress" ? _c("div", { style: {
    "background-image": `linear-gradient(
          to right,
          ${_vm.backgroundColor} ${_setup.progressPercentage}%,
          rgba(0,0,0,0) 0%
        )`,
    color: _vm.textColor
  } }, [_vm._v(" " + _vm._s(`${_vm.current}${_vm.separator}${_vm.total} ${_vm.suffix}`) + " ")]) : _vm._e(), _vm.variant === "prime" || _vm.variant === "prime-alt" ? _c("div", [_vm.variant === "prime" ? _c("i", { staticClass: "icon-prime" }) : _vm._e(), _vm._v("Prime ")]) : _vm.variant === "ultra" || _vm.variant === "ultra-alt" ? _c("div", [_vm.variant === "ultra" ? _c("i", { staticClass: "icon-ultra" }) : _vm._e()]) : _vm._t("default")], 2);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const Badge = __component__.exports;
export {
  Badge as B
};
//# sourceMappingURL=Badge.2c39dd0d.js.map

import { C as Component, V as Vue, n as normalizeComponent } from "./index.4fb8a6cb.js";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let Installation$1 = class extends Vue {
};
Installation$1 = __decorateClass([
  Component({})
], Installation$1);
var _sfc_render = function render() {
  var _vm = this;
  _vm._self._c;
  _vm._self._setupProxy;
  return _vm._m(0);
};
var _sfc_staticRenderFns = [function() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "section" }, [_c("h1", [_vm._v("Welcome to Beaker")]), _c("p", [_vm._v("A design system built for Streamlabs related products.")]), _c("h3", [_vm._v("To install Beaker, run:")]), _c("pre", [_c("code", [_vm._v("yarn add streamlabs-beaker")])]), _c("p", [_vm._v("or")]), _c("pre", [_c("code", [_vm._v("yarn add streamlabs-beaker@{version}")])]), _c("br"), _c("h3", [_vm._v("To use a component, add:")]), _c("pre", [_c("code", [_vm._v("import { Accordion, Button, ProgressBar } from 'streamlabs-beaker';\n\ncomponents: {\n  Accordion,\n  Button,\n  ProgressBar\n}")])]), _c("h3", [_vm._v("Installed CLI Plugins")]), _c("ul", [_c("li", [_c("a", { attrs: { "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel", "target": "_blank", "rel": "noopener" } }, [_vm._v("Babel")])]), _c("li", [_c("a", { attrs: { "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript", "target": "_blank", "rel": "noopener" } }, [_vm._v("Typescript")])]), _c("li", [_c("a", { attrs: { "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint", "target": "_blank", "rel": "noopener" } }, [_vm._v("Eslint")])])]), _c("h3", [_vm._v("Essential Links")]), _c("ul", [_c("li", [_c("a", { attrs: { "href": "https://vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("Vue Core Docs")])]), _c("li", [_c("a", { attrs: { "href": "https://getbem.com", "target": "_blank", "rel": "noopener" } }, [_vm._v("BEM documentation")])]), _c("li", [_c("a", { attrs: { "href": "https://chat.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("Community Chat")])]), _c("li", [_c("a", { attrs: { "href": "https://twitter.com/vuejs", "target": "_blank", "rel": "noopener" } }, [_vm._v("Twitter")])]), _c("li", [_c("a", { attrs: { "href": "https://news.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("News")])])])]);
}];
var __component__ = /* @__PURE__ */ normalizeComponent(
  Installation$1,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const Installation = __component__.exports;
export {
  Installation as default
};
//# sourceMappingURL=Installation.0d72c387.js.map

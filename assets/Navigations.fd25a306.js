import { C as Component, V as Vue, n as normalizeComponent } from "./index.4fb8a6cb.js";
import { A as Accordion } from "./Accordion.09c82396.js";
import { S as ScrollNav } from "./ScrollNav.943a041d.js";
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
let Navigations$1 = class extends Vue {
};
Navigations$1 = __decorateClass([
  Component({
    components: {
      ScrollNav,
      Accordion
    }
  })
], Navigations$1);
var _sfc_render = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", [_c("div", { staticClass: "section" }, [_c("h2", [_vm._v("Horizintal Scroll")]), _vm._m(0), _c("accordion", { attrs: { "openedTitle": "Hide Code", "closedTitle": "Show Code" } }, [_c("div", { attrs: { "slot": "content" }, slot: "content" }, [_c("pre", [_c("code", [_vm._v('<slider\n  :min="0"\n  :max="100"\n  :interval="1"\n  :value="50">\n</slider>')])])])]), _c("div", { staticClass: "row" }, [_c("scroll-nav")], 1), _vm._m(1)], 1)]);
};
var _sfc_staticRenderFns = [function() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("p", [_vm._v(" Our slider component is extended from "), _c("a", { attrs: { "target": "_blank", "href": "https://github.com/NightCatSama/vue-slider-component" } }, [_vm._v("Vue Slider Component")])]);
}, function() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("table", { staticClass: "docs-table" }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("interval")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("1")]), _c("td", [_vm._v("The steps between the values")])]), _c("tr", [_c("td", [_vm._v("max")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("The maximum numerical value that can be selected")])]), _c("tr", [_c("td", [_vm._v("min")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("The minimum numerical value that can be selected")])]), _c("tr", [_c("td", [_vm._v("suffix")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("px")]), _c("td", [_vm._v(" Suffix label that will be displayed next to the value in the tooltip ")])]), _c("tr", [_c("td", [_vm._v("tooltip")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("always")]), _c("td", [_vm._v("Show the tooltip or not. Options are 'always' or 'false'")])]), _c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("Number, String, Array, Object")]), _c("td", [_vm._v("1")]), _c("td", [_vm._v("Initial value of the slider.")])])])]);
}];
var __component__ = /* @__PURE__ */ normalizeComponent(
  Navigations$1,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const Navigations = __component__.exports;
export {
  Navigations as default
};
//# sourceMappingURL=Navigations.fd25a306.js.map

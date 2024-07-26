import { C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { F as FormGroup } from "./FormGroup-a1ca8cc5.js";
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
let Typography$1 = class Typography extends Vue {
};
Typography$1 = __decorateClass([
  Component({
    components: {
      FormGroup
    }
  })
], Typography$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-typography"
  }, [_c("h1", [_vm._v("Typography")]), _vm._m(0), _vm._m(1), _c("h4", {
    staticClass: "s-typography__header"
  }, [_vm._v("TYPE SCALE")]), _c("span", {
    staticClass: "subtitle"
  }, [_vm._v("Marketing")]), _c("FormGroup", [_c("div", {
    staticClass: "section",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_c("div", {
    staticClass: "type-scale barlow extrabold s48"
  }, [_vm._v(" H1: Barlow ExtraBold 48px ")]), _c("div", {
    staticClass: "type-scale barlow bold s32"
  }, [_vm._v(" H2: Barlow Bold 32px ")])]), _c("span", {
    staticClass: "subtitle",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v("Dashboard and Marketing")]), _c("div", {
    staticClass: "type-scale bold s22",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Marketing Title: Roboto Bold 22px ")]), _c("div", {
    staticClass: "type-scale bold s20",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Title: Roboto Bold 20px ")]), _c("div", {
    staticClass: "type-scale medium s18",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Marketing Subtitle: Roboto Medium 18px ")]), _c("div", {
    staticClass: "type-scale medium s16",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Subtitle: Roboto Medium 16px ")]), _c("div", {
    staticClass: "type-scale gray s16",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Marketing Paragraph: Roboto Regular 16px ")]), _c("div", {
    staticClass: "type-scale gray s14",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Subtitle: Roboto Regular 14px ")]), _c("div", {
    staticClass: "type-scale gray medium underline s16",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Marketing Link: Roboto Medium 16px ")]), _c("div", {
    staticClass: "type-scale gray medium underline s14",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Link: Roboto Medium 14px ")]), _c("div", {
    staticClass: "type-scale teal medium s16",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Marketing Label: Roboto Medium 16px ")]), _c("div", {
    staticClass: "type-scale teal medium s14",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Label: Roboto Medium 14px ")]), _c("div", {
    staticClass: "type-scale gray s14",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Marketing Caption: Roboto Regular 14px ")]), _c("div", {
    staticClass: "type-scale gray s12",
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(" Caption: Roboto Regular 12px ")])])], 1);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "row section"
  }, [_c("h4", {
    staticClass: "s-typography__header"
  }, [_vm._v("FONTS")]), _c("h1", [_vm._v("Barlow")]), _c("div", {
    staticClass: "font-style barlow"
  }, [_vm._v("Barlow")]), _c("div", {
    staticClass: "side-by-side"
  }, [_c("div", {
    staticClass: "subtitle"
  }, [_vm._v("Marketing Headings")]), _c("p", [_vm._v("Bold, ExtraBold")])]), _c("div", {
    staticClass: "font-style roboto"
  }, [_vm._v("Roboto")]), _c("div", {
    staticClass: "side-by-side"
  }, [_c("div", {
    staticClass: "subtitle"
  }, [_vm._v("UI & Content")]), _c("p", [_vm._v("Regular, Medium, Bold")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "row section"
  }, [_c("h4", {
    staticClass: "s-typography__header"
  }, [_vm._v("TYPOGRAPHY")]), _c("div", {
    staticClass: "side-by-side"
  }, [_c("div", {
    staticClass: "subtitle"
  }, [_vm._v("Letter Spacing")]), _c("p", [_vm._v("0%")])]), _c("div", {
    staticClass: "side-by-side"
  }, [_c("div", {
    staticClass: "subtitle"
  }, [_vm._v("Line Height")]), _c("p", [_vm._v("110% (H1, H2), 150% (Everything Else)")])]), _c("div", {
    staticClass: "side-by-side"
  }, [_c("div", {
    staticClass: "subtitle"
  }, [_vm._v("Paragraph Spacing")]), _c("p", [_vm._v("8px")])])]);
}];
const Typography_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Typography$1,
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
const Typography2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Typography2 as default
};
//# sourceMappingURL=Typography-60e6382e.js.map

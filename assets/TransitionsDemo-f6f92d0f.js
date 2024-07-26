var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
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
let TransitionsDemo$1 = class TransitionsDemo extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "flip", true);
  }
  flipProc() {
    this.flip = !this.flip;
  }
  mounted() {
    setInterval(this.flipProc, 2500);
  }
};
TransitionsDemo$1 = __decorateClass([
  Component({})
], TransitionsDemo$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "flip-cont"
  }, [_c("transition-group", {
    attrs: {
      "name": "fadeX-from-left",
      "tag": "div"
    }
  }, [_vm.flip ? _c("div", {
    key: "fadeXFirstLeft",
    staticClass: "first"
  }, [_c("h2", [_vm._v("fadeX-from-left")]), _c("p", [_vm._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolores suscipit ut consequuntur necessitatibus reprehenderit placeat repellendus. Doloremque amet ducimus magni nam reprehenderit, suscipit vero! Unde rem expedita exercitationem recusandae? ")])]) : _c("div", {
    key: "fadeXSecondLeft",
    staticClass: "second"
  }, [_c("h2", [_vm._v("fadeX-from-left")]), _c("p", [_vm._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores rerum ex minima, consequatur error laboriosam iusto voluptates quisquam cumque placeat porro nulla? Sequi ex reiciendis illo quia nesciunt odio id? ")])])])], 1), _c("div", {
    staticClass: "flip-cont"
  }, [_c("transition-group", {
    attrs: {
      "name": "fadeX-from-right",
      "tag": "div"
    }
  }, [_vm.flip ? _c("div", {
    key: "fadeXFirstRight",
    staticClass: "first"
  }, [_c("h2", [_vm._v("fadeX-from-right")]), _c("p", [_vm._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero architecto nobis recusandae porro necessitatibus tempore commodi distinctio rem deleniti veritatis veniam ab deserunt quidem neque asperiores eos, esse repellendus nemo? ")])]) : _c("div", {
    key: "fadeXSecondRight",
    staticClass: "second"
  }, [_c("h2", [_vm._v("fadeX-from-right")]), _c("p", [_vm._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores accusamus voluptate tempora inventore dolor magnam assumenda reiciendis eum officia est impedit omnis aut, id vel dignissimos veritatis rerum vitae voluptas. ")])])])], 1), _c("div", {
    staticClass: "flip-cont"
  }, [_c("transition-group", {
    attrs: {
      "name": "fadeY-from-top",
      "tag": "div"
    }
  }, [_vm.flip ? _c("div", {
    key: "fadeYFirstTop",
    staticClass: "first"
  }, [_c("h2", [_vm._v("fadeY-from-top")]), _c("p", [_vm._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero architecto nobis recusandae porro necessitatibus tempore commodi distinctio rem deleniti veritatis veniam ab deserunt quidem neque asperiores eos, esse repellendus nemo? ")])]) : _c("div", {
    key: "fadeYSecondTop",
    staticClass: "second"
  }, [_c("h2", [_vm._v("fadeY-from-top")]), _c("p", [_vm._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. At maiores accusantium consequatur praesentium voluptas facere tempora facilis quod sint a id saepe nulla voluptate eaque voluptatibus deserunt, fuga aliquid eveniet? ")])])])], 1), _c("div", {
    staticClass: "flip-cont"
  }, [_c("transition-group", {
    attrs: {
      "name": "fadeY-from-bottom",
      "tag": "div"
    }
  }, [_vm.flip ? _c("div", {
    key: "fadeYFirstBottom",
    staticClass: "first"
  }, [_c("h2", [_vm._v("fadeY-from-bottom")]), _c("p", [_vm._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero architecto nobis recusandae porro necessitatibus tempore commodi distinctio rem deleniti veritatis veniam ab deserunt quidem neque asperiores eos, esse repellendus nemo? ")])]) : _c("div", {
    key: "fadeYSecondBottom",
    staticClass: "second"
  }, [_c("h2", [_vm._v("fadeY-from-bottom")]), _c("p", [_vm._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. At maiores accusantium consequatur praesentium voluptas facere tempora facilis quod sint a id saepe nulla voluptate eaque voluptatibus deserunt, fuga aliquid eveniet? ")])])])], 1)])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Global Transitions")]), _c("p", [_vm._v(" This is the start of a collection of pre-made transitions to use in Beaker components. The CSS for these is automatically imported with a standard beaker CSS Import. They are used by wrapping an element which is dynamically shown with "), _c("code", [_vm._v("v-if")]), _vm._v(", "), _c("code", [_vm._v("v-else")]), _vm._v(", or "), _c("code", [_vm._v("v-show")]), _vm._v(" by wrapping it with "), _c("code", [_vm._v("<transition>")]), _vm._v(" or "), _c("code", [_vm._v("<transition-group>")]), _vm._v(". ")]), _c("pre", [_c("code", [_vm._v('<transition name="fadeY-from-left">\n  <div v-if="boolean"></div>\n</transition>')])])]);
}];
const TransitionsDemo_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  TransitionsDemo$1,
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
const TransitionsDemo2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  TransitionsDemo2 as default
};
//# sourceMappingURL=TransitionsDemo-f6f92d0f.js.map

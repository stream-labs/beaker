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
let Tables$1 = class Tables extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "users", [
      {
        name: "Morgan",
        date: "10/22/2018",
        event: "Donation",
        amount: "$60.00"
      },
      {
        name: "Josh",
        date: "10/21/2018",
        event: "Bits",
        amount: "200"
      },
      {
        name: "Karl",
        date: "10/20/2018",
        event: "Tiltify",
        amount: "$100.00"
      },
      {
        name: "Salman",
        date: "10/19/2018",
        event: "Donation",
        amount: "$30.00"
      },
      {
        name: "Charmili",
        date: "10/18/2018",
        event: "Bits",
        amount: "100"
      },
      {
        name: "Runxi",
        date: "10/18/2018",
        event: "Donation",
        amount: "$20.50"
      }
    ]);
  }
};
Tables$1 = __decorateClass([
  Component({})
], Tables$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_vm._m(0), _c("div", {
    staticClass: "row"
  }, [_c("table", [_vm._m(1), _c("tbody", _vm._l(_vm.users, function(user) {
    return _c("tr", {
      key: user.id
    }, [_c("td", [_vm._v(_vm._s(user.name))]), _c("td", [_vm._v(_vm._s(user.date))]), _c("td", [_vm._v(_vm._s(user.event))]), _c("td", [_vm._v(_vm._s(user.amount))])]);
  }), 0)])])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "row"
  }, [_c("h1", [_vm._v("Tables")]), _c("p", [_vm._v(" Tables should automatically style themselves to look like the one below ")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Name")]), _c("th", [_vm._v("Date")]), _c("th", [_vm._v("Event")]), _c("th", [_vm._v("Amout")])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Tables$1,
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
const Tables2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Tables2 as default
};
//# sourceMappingURL=Tables-015fc679.js.map

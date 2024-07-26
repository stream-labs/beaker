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
let AppsNav = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "items");
    __publicField(this, "value");
    __publicField(this, "isMounted", false);
    __publicField(this, "appTabsContainer");
    __publicField(this, "canScroll", false);
    __publicField(this, "hasNext", false);
    __publicField(this, "hasPrev", false);
    __publicField(this, "scrollIncrement", 100);
  }
  created() {
    window.addEventListener("resize", this.calculateScrolls);
  }
  destroyed() {
    window.removeEventListener("resize", this.calculateScrolls);
  }
  mounted() {
    this.isMounted = true;
    this.appTabsContainer = this.$refs.scrollable_nav;
    this.calculateScrolls();
  }
  scrollLeft() {
    this.appTabsContainer.scrollLeft = this.appTabsContainer.scrollLeft - this.scrollIncrement;
  }
  scrollRight() {
    this.appTabsContainer.scrollLeft = this.appTabsContainer.scrollLeft + this.scrollIncrement;
  }
  calculateScrolls() {
    if (!this.isMounted)
      return false;
    this.canScroll = this.appTabsContainer.scrollWidth > this.appTabsContainer.clientWidth;
    this.hasPrev = this.appTabsContainer.scrollLeft > 0;
    let scrollRight = this.appTabsContainer.scrollWidth - (this.appTabsContainer.scrollLeft + this.appTabsContainer.clientWidth);
    this.hasNext = scrollRight > 0;
  }
  navigateItem(item) {
    this.$emit("input", item);
  }
};
__decorateClass([
  Prop()
], AppsNav.prototype, "items", 2);
__decorateClass([
  Prop()
], AppsNav.prototype, "value", 2);
AppsNav = __decorateClass([
  Component({})
], AppsNav);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", {
    staticClass: "s-apps-nav"
  }, [_vm.hasPrev ? _c("div", {
    staticClass: "s-apps-nav-control flex s-has-prev",
    on: {
      "click": _vm.scrollLeft
    }
  }, [_c("i", {
    staticClass: "icon-down icon-left"
  }), _c("span", [_vm._v("...")])]) : _vm._e(), _c("div", {
    ref: "scrollable_nav",
    staticClass: "s-apps-tab__container",
    class: {
      "s-has-next": _vm.hasNext,
      "s-has-prev": _vm.hasPrev
    },
    on: {
      "scroll": _vm.calculateScrolls
    }
  }, _vm._l(_vm.items, function(item) {
    return _c("span", {
      key: item.value,
      staticClass: "s-app-tab",
      class: {
        "s-is-active": item.value === _vm.value
      },
      on: {
        "click": function($event) {
          return _vm.navigateItem(item.value);
        }
      }
    }, [_c("span", [_vm._v(_vm._s(item.name))])]);
  }), 0), _vm.hasNext ? _c("div", {
    staticClass: "s-apps-nav-control flex s-has-next",
    on: {
      "click": _vm.scrollRight
    }
  }, [_c("span", [_vm._v("...")]), _c("i", {
    staticClass: "icon-down icon-right"
  })]) : _vm._e()])]);
};
var staticRenderFns = [];
const ScrollNav_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  AppsNav,
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
const ScrollNav = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  ScrollNav as S
};
//# sourceMappingURL=ScrollNav-9b449aba.js.map

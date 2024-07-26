var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as Watch, C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { m as mixin_1 } from "./vue-focus.common-28b20e5f.js";
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
let PaneDropdown$1 = class PaneDropdown extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "dropdownIcon");
    __publicField(this, "menuAlign");
    __publicField(this, "openAbove");
    __publicField(this, "autoHeight");
    __publicField(this, "closeOnSelect");
    __publicField(this, "custom");
    __publicField(this, "relativeMenu");
    __publicField(this, "simpleMenu");
    __publicField(this, "hoverOption");
    __publicField(this, "nested");
    __publicField(this, "paneMenuOpen", false);
  }
  created() {
    document.addEventListener("click", this.documentClick);
  }
  destroyed() {
    document.removeEventListener("click", this.documentClick);
  }
  get menuClasses() {
    let classes = [];
    if (this.menuAlign) {
      classes.push(`s-pane-dropdown__menu--${this.menuAlign}`);
    }
    if (this.openAbove) {
      classes.push("s-pane-dropdown__menu--top");
    }
    if (this.autoHeight) {
      classes.push("s-pane-dropdown__menu--auto-height");
    }
    if (this.relativeMenu) {
      classes.push("s-pane-dropdown__menu--relative");
    }
    if (this.simpleMenu) {
      classes.push("s-pane-dropdown__menu--simple");
    }
    return classes;
  }
  watchPaneMenuOpen(newVal) {
    if (newVal && !this.custom) {
      this.$nextTick(() => {
        const list = this.$refs.paneList;
        const lastSlotItem = list.lastElementChild;
        const onTab = (e) => {
          if (e.keyCode === 9 && !e.shiftKey)
            this.hide();
        };
        lastSlotItem.addEventListener("keydown", onTab);
      });
    }
  }
  afterOpen(element) {
    element.style.height = "auto";
  }
  open(element) {
    let width = getComputedStyle(element).width;
    element.style.width = width;
    let maxWidth = getComputedStyle(element).width;
    element.style.maxWidth = maxWidth;
    element.style.position = `absolute`;
    element.style.visibility = `hidden`;
    element.style.height = `auto`;
    let height = getComputedStyle(element).height;
    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = height;
    });
  }
  close(element) {
    if ("target" in element)
      return;
    let height = getComputedStyle(element).height;
    element.style.height = height;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = 0;
    });
  }
  documentClick(e) {
    let el = this.$refs.paneMenu;
    let target = e.target;
    if (el !== target && !el.contains(target)) {
      this.paneMenuOpen = false;
    }
  }
  onMenuClick() {
    this.closeOnSelect ? this.paneMenuOpen = !this.paneMenuOpen : null;
  }
  hide() {
    this.paneMenuOpen = false;
  }
  show() {
    this.paneMenuOpen = true;
  }
};
__decorateClass([
  Prop({ default: true })
], PaneDropdown$1.prototype, "dropdownIcon", 2);
__decorateClass([
  Prop({ default: null })
], PaneDropdown$1.prototype, "menuAlign", 2);
__decorateClass([
  Prop({ default: false })
], PaneDropdown$1.prototype, "openAbove", 2);
__decorateClass([
  Prop({ default: false })
], PaneDropdown$1.prototype, "autoHeight", 2);
__decorateClass([
  Prop({ default: true })
], PaneDropdown$1.prototype, "closeOnSelect", 2);
__decorateClass([
  Prop({ default: false })
], PaneDropdown$1.prototype, "custom", 2);
__decorateClass([
  Prop({ default: false })
], PaneDropdown$1.prototype, "relativeMenu", 2);
__decorateClass([
  Prop({ default: false })
], PaneDropdown$1.prototype, "simpleMenu", 2);
__decorateClass([
  Prop({ default: false })
], PaneDropdown$1.prototype, "hoverOption", 2);
__decorateClass([
  Prop({ default: false })
], PaneDropdown$1.prototype, "nested", 2);
__decorateClass([
  Watch("paneMenuOpen")
], PaneDropdown$1.prototype, "watchPaneMenuOpen", 1);
PaneDropdown$1 = __decorateClass([
  Component({
    name: "PaneDropdown",
    mixins: [mixin_1]
  })
], PaneDropdown$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", _vm._g({
    ref: "paneMenu",
    staticClass: "s-pane-dropdown",
    on: {
      "blur": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.close.apply(null, arguments);
      }
    }
  }, _vm.hoverOption ? {
    mouseleave: _vm.hide
  } : {}), [_c("div", _vm._g({
    ref: "paneToggle",
    staticClass: "s-pane-dropdown__toggle",
    class: {
      "s-pane-dropdown__toggle--active": _vm.paneMenuOpen
    },
    attrs: {
      "tabindex": 0
    },
    on: {
      "click": function($event) {
        _vm.paneMenuOpen = !_vm.paneMenuOpen;
      },
      "keydown": [function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
          return null;
        $event.preventDefault();
        _vm.paneMenuOpen = !_vm.paneMenuOpen;
      }, function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter"))
          return null;
        $event.preventDefault();
        _vm.paneMenuOpen = !_vm.paneMenuOpen;
      }, function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"]))
          return null;
        $event.preventDefault();
        return _vm.hide.apply(null, arguments);
      }, function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab"))
          return null;
        if (!$event.shiftKey)
          return null;
        return _vm.hide.apply(null, arguments);
      }]
    }
  }, _vm.hoverOption ? {
    mouseover: _vm.show
  } : {}), [_c("span", [_vm._t("title"), _vm.dropdownIcon ? _c("i", {
    staticClass: "icon-dropdown"
  }) : _vm._e()], 2)]), _c("transition", {
    attrs: {
      "name": "expand-dropdown"
    },
    on: {
      "enter": _vm.open,
      "after-enter": _vm.afterOpen,
      "leave": _vm.close
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.paneMenuOpen,
      expression: "paneMenuOpen"
    }],
    staticClass: "s-pane-dropdown__menu",
    class: _vm.menuClasses
  }, [_vm.custom ? _vm._t("default") : _c("div", {
    ref: "paneList",
    staticClass: "s-pane-dropdown__list",
    on: {
      "mouseup": _vm.onMenuClick,
      "keydown": function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"]))
          return null;
        $event.preventDefault();
        return _vm.hide.apply(null, arguments);
      }
    }
  }, [_vm._t("default")], 2)], 2)])], 1);
};
var staticRenderFns = [];
const PaneDropdown_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  PaneDropdown$1,
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
const PaneDropdown2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  PaneDropdown2 as P
};
//# sourceMappingURL=PaneDropdown-1ff494dd.js.map

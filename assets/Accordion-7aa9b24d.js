var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as Watch, C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
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
let Accordian = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "openedTitle");
    __publicField(this, "closedTitle");
    __publicField(this, "title");
    __publicField(this, "isOpened");
    __publicField(this, "noBorder");
    __publicField(this, "leftNav");
    __publicField(this, "value");
    __publicField(this, "isOpen", false);
    __publicField(this, "focused", false);
    __publicField(this, "defaultBorder", false);
  }
  handleIsOpened(val) {
    this.isOpen = val;
  }
  handleIsOpen(val) {
    this.$emit("input", val);
  }
  get accordionTitle() {
    if (this.title !== void 0) {
      return this.title;
    } else {
      if (this.isOpen) {
        return this.openedTitle;
      } else {
        return this.closedTitle;
      }
    }
  }
  get hasTitleSlot() {
    return !!this.$slots.title;
  }
  get accordionClasses() {
    let classes = [];
    if (this.noBorder) {
      classes.push("no-border");
    }
    if (this.leftNav) {
      classes.push("left-nav");
    }
    return classes.join(" ");
  }
  isKeyFocused(event) {
    console.log("TCL: Accordian -> isKeyFocused -> event", event);
  }
  openContent(event) {
    let blockedNodes = ["INPUT", "BUTTON", "LABEL"];
    if (blockedNodes.indexOf(event.target.nodeName) !== -1 || blockedNodes.indexOf(event.target.parentNode.parentNode.nodeName) !== -1) {
      return;
    }
    this.isOpen = !this.isOpen;
    this.$emit("content-opened", { isOpen: this.isOpen, event });
  }
  afterOpen(element) {
    element.style.height = "auto";
  }
  open(element) {
    let width = getComputedStyle(element).width;
    element.style.width = width;
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
    let height = getComputedStyle(element).height;
    element.style.height = height;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = 0;
    });
  }
  mounted() {
    if (this.value) {
      this.isOpen = this.value;
    }
  }
};
__decorateClass([
  Prop()
], Accordian.prototype, "openedTitle", 2);
__decorateClass([
  Prop()
], Accordian.prototype, "closedTitle", 2);
__decorateClass([
  Prop()
], Accordian.prototype, "title", 2);
__decorateClass([
  Prop()
], Accordian.prototype, "isOpened", 2);
__decorateClass([
  Prop()
], Accordian.prototype, "noBorder", 2);
__decorateClass([
  Prop()
], Accordian.prototype, "leftNav", 2);
__decorateClass([
  Prop()
], Accordian.prototype, "value", 2);
__decorateClass([
  Watch("value")
], Accordian.prototype, "handleIsOpened", 1);
__decorateClass([
  Watch("isOpen")
], Accordian.prototype, "handleIsOpen", 1);
Accordian = __decorateClass([
  Component({})
], Accordian);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-accordion",
    class: [_vm.accordionClasses],
    attrs: {
      "tabindex": "0"
    },
    on: {
      "keydown": function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
          return null;
        if ($event.target !== $event.currentTarget)
          return null;
        $event.preventDefault();
        return _vm.openContent.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "s-accordion__head",
    class: {
      "is-open": _vm.isOpen
    },
    on: {
      "click": _vm.openContent
    }
  }, [_c("div", {
    staticClass: "s-accordion__button"
  }, [_vm._t("open-close-icon", function() {
    return [_c("svg", {
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "14px",
        "height": "14px"
      }
    }, [_c("path", {
      staticClass: "s-accordion__svg--back",
      attrs: {
        "d": "M13 14H1a1 1 0 0 1-1-1V1c0-.6.5-1 1-1h12c.6 0 1 .5 1 1v12c0 .6-.4 1-1 1z",
        "fill": "#e3e8eb"
      }
    }), _c("transition", {
      attrs: {
        "name": "twist-h"
      }
    }, [!_vm.isOpen ? _c("g", [_c("path", {
      staticClass: "s-accordion__svg--line",
      attrs: {
        "d": "M10 8H4a1 1 0 0 1-1-1c0-.6.5-1 1-1h6c.6 0 1 .5 1 1s-.4 1-1 1z"
      }
    }), _c("path", {
      staticClass: "s-accordion__svg--line",
      attrs: {
        "d": "M8 4v6c0 .6-.5 1-1 1a1 1 0 0 1-1-1V4c0-.6.5-1 1-1s1 .5 1 1z"
      }
    })]) : _vm._e()]), _c("transition", {
      attrs: {
        "name": "twist-v"
      }
    }, [_vm.isOpen ? _c("path", {
      staticClass: "s-accordion__svg--line",
      attrs: {
        "d": "M10 8H4a1 1 0 0 1-1-1c0-.6.5-1 1-1h6c.6 0 1 .5 1 1s-.4 1-1 1z"
      }
    }) : _vm._e()])], 1)];
  }, {
    "isOpen": _vm.isOpen
  })], 2), _vm.hasTitleSlot ? _c("div", {
    staticClass: "s-accordion--title"
  }, [_vm._t("title")], 2) : _c("div", {
    staticClass: "s-accordion--title"
  }, [_vm._v(_vm._s(_vm.accordionTitle))])]), _c("transition", {
    attrs: {
      "name": "expand"
    },
    on: {
      "enter": _vm.open,
      "after-enter": _vm.afterOpen,
      "leave": _vm.close
    }
  }, [_vm.isOpen ? _c("div", {
    staticClass: "s-accordion__content",
    class: [{
      "is-open": _vm.isOpen
    }, {
      "left-nav": _vm.leftNav
    }]
  }, [_vm._t("content", null, {
    "isOpen": _vm.isOpen
  })], 2) : _vm._e()])], 1);
};
var staticRenderFns = [];
const Accordion_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Accordian,
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
const Accordion = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Accordion as A
};
//# sourceMappingURL=Accordion-7aa9b24d.js.map

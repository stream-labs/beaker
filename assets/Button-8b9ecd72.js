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
let Button$1 = class Button extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "onClick");
    __publicField(this, "bgColor");
    __publicField(this, "textColor");
    __publicField(this, "icon");
    __publicField(this, "iconPosition");
    __publicField(this, "iconImg");
    __publicField(this, "title");
    __publicField(this, "price");
    __publicField(this, "description");
    __publicField(this, "href");
    __publicField(this, "target");
    __publicField(this, "size");
    __publicField(this, "state");
    __publicField(this, "type");
    __publicField(this, "to");
    __publicField(this, "tag");
    __publicField(this, "variation");
    __publicField(this, "primeBgColor");
    __publicField(this, "primeTitle");
    __publicField(this, "ultraTitle");
    __publicField(this, "slobsDownloadTitle");
    __publicField(this, "osType");
    __publicField(this, "rippleStartX", 0);
    __publicField(this, "rippleStartY", 0);
    __publicField(this, "rippleSize", 0);
    __publicField(this, "rippleColor", "#000000");
    __publicField(this, "rippleOpacity", 0.075);
    __publicField(this, "rippleDuration", "");
    __publicField(this, "rippleAnimate", false);
  }
  get buttonClasses() {
    const classes = [];
    if (this.variation) {
      classes.push(`s-button--${this.variation}`);
    }
    if (this.size) {
      classes.push(`s-button--${this.size}`);
    }
    if (this.state) {
      classes.push(`is-${this.state}`);
    }
    return classes.join(" ");
  }
  get iconClass() {
    const classes = [];
    if (this.icon) {
      if (this.icon.indexOf("fa-") !== -1) {
        classes.push(this.icon);
      } else {
        classes.push(`icon-${this.icon}`);
      }
    }
    return classes.join(" ");
  }
  get slobsDownloadIconClass() {
    return this.osType === "windows" ? "icon-windows" : "icon-app-store";
  }
  get slobsDownloadText() {
    const tests = [];
    tests.push("Free");
    tests.push(this.osType === "windows" ? "Win" : "macOS 10.15+");
    tests.push(this.osType === "windows" ? "~240MB" : "309MB");
    return tests;
  }
  get buttonStyle() {
    let s = "--ripple-x:" + this.rippleStartX + "px; --ripple-y:" + this.rippleStartY + "px; --ripple-size:" + this.rippleSize + "px; --ripple-color:" + this.rippleColor + "; --ripple-opacity:" + this.rippleOpacity + "; --ripple-duration:" + this.rippleDuration + "; background-color:" + this.bgColor + "; color:" + this.textColor;
    return s;
  }
  // get _variation() {
  //   return this.bgColor ? "custom" : this.variation;
  // }
  rippleAnimation() {
    return new Promise((resolve) => {
      this.rippleAnimate = true;
      let animationEnded = (e) => {
        this.$el.removeEventListener("animationnend", animationEnded);
        resolve();
      };
      this.$el.addEventListener("animationend", animationEnded);
    });
  }
  pressDown(e) {
    let buttonRect = this.$el.getBoundingClientRect();
    let clickLoc = { x: e.pageX, y: e.pageY };
    let buttonVar = JSON.stringify(this.variation);
    let buttonSize = JSON.stringify(this.size);
    this.rippleSize = Math.floor(buttonRect.width * 2);
    this.rippleStartX = Math.floor(
      Math.abs(buttonRect.left - clickLoc.x) - this.rippleSize / 2
    );
    this.rippleStartY = Math.floor(
      Math.abs(buttonRect.top - clickLoc.y) - this.rippleSize / 2
    );
    if (buttonVar === '"paypal"') {
      this.rippleColor = "#e3b63b";
      this.rippleDuration = "800ms";
      this.rippleOpacity = 0.5;
    }
    if (buttonVar === '"warning"') {
      this.rippleColor = "#ce4a38";
    }
    if (buttonVar === '"subscribe"' || buttonSize === '"full-width"' || buttonVar === '"paypal"') {
      this.rippleDuration = "800ms";
    } else {
      this.rippleDuration = "400ms";
    }
    if (!this.rippleAnimate) {
      this.rippleAnimation().then(() => this.rippleAnimate = false);
    }
  }
};
__decorateClass([
  Prop()
], Button$1.prototype, "onClick", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "bgColor", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "textColor", 2);
__decorateClass([
  Prop(String)
], Button$1.prototype, "icon", 2);
__decorateClass([
  Prop({ default: "left" })
], Button$1.prototype, "iconPosition", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "iconImg", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "title", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "price", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "description", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "href", 2);
__decorateClass([
  Prop({ default: "_self" })
], Button$1.prototype, "target", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "size", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "state", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "type", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "to", 2);
__decorateClass([
  Prop({ default: "button" })
], Button$1.prototype, "tag", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "variation", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "primeBgColor", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "primeTitle", 2);
__decorateClass([
  Prop()
], Button$1.prototype, "ultraTitle", 2);
__decorateClass([
  Prop({ default: "Download Streamlabs" })
], Button$1.prototype, "slobsDownloadTitle", 2);
__decorateClass([
  Prop({ default: "windows" })
], Button$1.prototype, "osType", 2);
Button$1 = __decorateClass([
  Component({})
], Button$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.tag, {
    tag: "component",
    staticClass: "s-button ripple",
    class: [_vm.buttonClasses, {
      "ripple-animate": _vm.rippleAnimate
    }],
    style: _vm.buttonStyle,
    attrs: {
      "icon": _vm.icon,
      "icon-img": _vm.iconImg,
      "title": _vm.title,
      "price": _vm.price,
      "description": _vm.description,
      "to": _vm.to,
      "href": _vm.href,
      "type": _vm.type,
      "disabled": _vm.state === "disabled" || _vm.state === "loading",
      "target": _vm.target
    },
    on: {
      "click": function($event) {
        return _vm.$emit("click");
      },
      "mousedown": _vm.pressDown
    }
  }, [!_vm.$slots.custom ? _c("span", [_c("span", [_vm.variation === "prime-simple" && this.primeTitle ? _c("span", [_vm._v(" " + _vm._s(_vm.primeTitle) + " ")]) : _vm.variation === "prime-simple" ? _c("span", {
    staticClass: "prime-simple"
  }, [_vm._v(" Free with "), _c("span", {
    staticClass: "prime-simple__bold"
  }, [_vm._v(" Prime")])]) : _vm._e(), _vm.iconClass && _vm.iconPosition === "left" ? _c("i", {
    class: _vm.iconClass
  }) : _vm._e(), _vm.iconImg ? _c("i", {
    staticClass: "icon-img"
  }, [_c("img", {
    attrs: {
      "src": _vm.iconImg,
      "alt": `${_vm.title} Icon Image`
    }
  })]) : _vm._e(), _vm._v(" " + _vm._s(_vm.title) + " ")]), _vm.description ? _c("span", {
    staticClass: "s-button__description"
  }, [_vm._v(" " + _vm._s(_vm.description) + " ")]) : _vm._e(), _vm.iconClass && _vm.iconPosition === "right" ? _c("i", {
    class: ["icon--right", _vm.iconClass]
  }) : _vm._e()]) : _vm._e(), _vm._t("custom"), _vm.variation === "slobs-download" ? _c("i", {
    staticClass: "icon-windows"
  }) : _vm._e(), _vm.price ? _c("span", [_vm._v(_vm._s(_vm.price))]) : _vm._e(), _vm.variation === "slobs-download-landing" ? _c("div", {
    staticClass: "slobs-download-landing"
  }, [_c("div", {
    staticClass: "slobs-download-landing__upper"
  }, [_c("i", {
    staticClass: "slobs-download-landing__icon",
    class: _vm.slobsDownloadIconClass
  }), _c("p", {
    staticClass: "slobs-download-landing__title"
  }, [_vm._v(_vm._s(_vm.slobsDownloadTitle))])]), _c("div", {
    staticClass: "slobs-download-landing__bottom"
  }, [_c("p", {
    staticClass: "slobs-download-landing__subtitle"
  }, [_vm._t("subtitle", function() {
    return _vm._l(_vm.slobsDownloadText, function(text) {
      return _c("span", {
        key: text,
        domProps: {
          "textContent": _vm._s(text)
        }
      });
    });
  })], 2)])]) : _vm._e()], 2);
};
var staticRenderFns = [];
const Button_vue_vue_type_style_index_0_lang = "";
const Button_vue_vue_type_style_index_1_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Button$1,
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
const Button2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Button2 as B
};
//# sourceMappingURL=Button-8b9ecd72.js.map

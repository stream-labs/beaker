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
let Spinner$1 = class Spinner extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "firefox", false);
    __publicField(this, "size");
    __publicField(this, "swap");
  }
  get spinnerClass() {
    return `s-spinner--${this.size}`;
  }
  get swapMode() {
    if (this.swap === true) {
      return "s-spinner--modeswap";
    }
  }
  mounted() {
    if (navigator.userAgent.indexOf("Firefox") != -1) {
      this.firefox = true;
    }
  }
};
__decorateClass([
  Prop({ default: "small" })
], Spinner$1.prototype, "size", 2);
__decorateClass([
  Prop({ default: false })
], Spinner$1.prototype, "swap", 2);
Spinner$1 = __decorateClass([
  Component({
    name: "Spinner"
  })
], Spinner$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-spinner"
  }, [_c("div", {
    staticClass: "s-bars",
    attrs: {
      "size": _vm.size,
      "swap": _vm.swap
    }
  }, [_c("svg", {
    class: _vm.spinnerClass,
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "viewBox": "0 0 28 40"
    }
  }, [_c("path", {
    attrs: {
      "d": "M0 0, l0 4, l0 -4",
      "id": "s-bar-y-path"
    }
  }), _c("rect", {
    staticClass: "s-spinner__bar",
    class: _vm.swapMode,
    attrs: {
      "width": "4",
      "height": "40",
      "x": "0",
      "y": "0",
      "ry": "2",
      "rx": "2"
    }
  }, [_c("animate", {
    attrs: {
      "attributeName": "opacity",
      "values": ".24; .08; .24",
      "begin": "0s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }), _c("animate", {
    attrs: {
      "attributeName": "height",
      "values": "40; 32; 40",
      "begin": "0s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }), _vm.firefox ? _c("animateTransform", {
    attrs: {
      "attributeName": "transform",
      "type": "translate",
      "values": "0 0 ; 0 4; 0 0",
      "begin": "0s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }) : _vm._e(), _c("animateMotion", {
    attrs: {
      "begin": "0s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }, [_c("mpath", {
    attrs: {
      "xlink:href": "#s-bar-y-path"
    }
  })], 1)], 1), _c("rect", {
    staticClass: "s-spinner__bar",
    class: _vm.swapMode,
    attrs: {
      "width": "4",
      "height": "40",
      "x": "12",
      "y": "0",
      "ry": "2",
      "rx": "2"
    }
  }, [_c("animate", {
    attrs: {
      "attributeName": "opacity",
      "values": ".24; .24; .24",
      "begin": "0s",
      "dur": "0.4s"
    }
  }), _c("animate", {
    attrs: {
      "attributeName": "opacity",
      "values": ".24; .08; .24",
      "begin": "0.4s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }), _c("animate", {
    attrs: {
      "attributeName": "height",
      "values": "40; 32; 40",
      "begin": "0.4s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }), _vm.firefox ? _c("animateTransform", {
    attrs: {
      "attributeName": "transform",
      "type": "translate",
      "values": "0 0 ; 0 4; 0 0",
      "begin": "0.4s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }) : _vm._e(), _c("animateMotion", {
    attrs: {
      "begin": "0.4s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }, [_c("mpath", {
    attrs: {
      "xlink:href": "#s-bar-y-path"
    }
  })], 1)], 1), _c("rect", {
    staticClass: "s-spinner__bar",
    class: _vm.swapMode,
    attrs: {
      "width": "4",
      "height": "40",
      "x": "24",
      "y": "0",
      "ry": "2",
      "rx": "2"
    }
  }, [_c("animate", {
    attrs: {
      "attributeName": "opacity",
      "values": ".24; .24; .24",
      "begin": "0s",
      "dur": "0.8s"
    }
  }), _c("animate", {
    attrs: {
      "attributeName": "opacity",
      "values": ".24; .08; .24",
      "begin": "0.8s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }), _c("animate", {
    attrs: {
      "attributeName": "height",
      "values": "40; 32; 40",
      "begin": "0.8s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }), _vm.firefox ? _c("animateTransform", {
    attrs: {
      "attributeName": "transform",
      "type": "translate",
      "values": "0 0 ; 0 4; 0 0",
      "begin": "0.8s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }) : _vm._e(), _c("animateMotion", {
    attrs: {
      "begin": "0.8s",
      "dur": "1.2s",
      "repeatCount": "indefinite"
    }
  }, [_c("mpath", {
    attrs: {
      "xlink:href": "#s-bar-y-path"
    }
  })], 1)], 1)])])]);
};
var staticRenderFns = [];
const Spinner_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Spinner$1,
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
const Spinner2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Spinner2 as S
};
//# sourceMappingURL=Spinner-e272b66e.js.map

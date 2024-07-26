var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, E as EventBus, n as normalizeComponent } from "./index-158ccef1.js";
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
let Colors$1 = class Colors extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "messages", []);
    __publicField(this, "colors", [
      [
        { color: "Teal (Night primary)", hex: "#31C3A2", name: "@teal" },
        { color: "Dark Teal (Day primary)", hex: "#128079", name: "@teal-dark" },
        {
          color: "Red (Count Badges, Warnings, Errors)",
          hex: "#F85640",
          name: "@red"
        },
        {
          color: "Dark Red (Day Count Badges, Warnings, Errors)",
          hex: "#B14334",
          name: "@red-dark"
        },
        { color: "Yellow (Night Info)", hex: "#E3973E", name: "@yellow" },
        { color: "Dark Yellow (Day Info)", hex: "#A96311", name: "@yellow-dark" }
      ],
      [
        { color: "Dark 1 (App Store Icons BG)", hex: "#000000", name: "@dark-1" },
        {
          color: "Dark 2 (Day Title, Subtitle, Selected)",
          hex: "#09161D",
          name: "@dark-2"
        },
        { color: "Dark 3 (Night BG)", hex: "#17242D", name: "@dark-3" },
        {
          color: "Dark 4 (Night Cards/Sections BG)",
          hex: "#2B383F",
          name: "@dark-4"
        },
        {
          color: "Dark 5 (Day P, Night Button, Night Cards)",
          hex: "#4F5E65",
          name: "@dark-5"
        }
      ],
      [
        { color: "Light 1 (Day Title + BG)", hex: "#FFFFFF", name: "@light-1" },
        {
          color: "Light 2 (Day Tip Page BG, Cards)",
          hex: "#F5F8FA",
          name: "@light-2"
        },
        { color: "Light 3 (Day Button)", hex: "#E3E8EB", name: "@light-3" },
        { color: "Light 4 (Night P)", hex: "#BDC2C4", name: "@light-4" },
        {
          color: "Light 5 (Day + Night Icons, Captions)",
          hex: "#91979A",
          name: "@light-5"
        }
      ],
      [
        { color: "Blue", hex: "#36ADE0", name: "@blue" },
        { color: "Dark Blue (Day", hex: "#2B5BD7", name: "@blue-dark" },
        { color: "Pink", hex: "#EB7777", name: "@pink" },
        { color: "Dark Pink (Day", hex: "#C22571", name: "@pink-dark" },
        { color: "Purple", hex: "#C57BFF", name: "@purple" },
        { color: "Dark Purple (Day", hex: "#5E3BEC", name: "@purple-dark" },
        { color: "Navy", hex: "#233A4A", name: "@navy" }
      ],
      [
        { color: "Prime", hex: "#CAA368", name: "@prime" },
        { color: "Dark Prime", hex: "#8F6F3F", name: "@prime-dark" }
      ]
    ]);
  }
  get visibleMessages() {
    const msgs = this.messages.filter((msg, idx) => idx < 5);
    msgs.forEach((msg) => {
      if (!msg.timerStarted) {
        msg.timerStarted = true;
        setTimeout(() => {
          const idx = this.messages.findIndex((message) => msg.id === message.id);
          this.messages.splice(idx, 1);
        }, 5e3);
      }
    });
    return msgs;
  }
  emitCopySuccess(e) {
    EventBus.$emit("copy-success", `${e.text} copied`);
  }
  emitCopyError(e) {
    EventBus.$emit("copy-copy", e);
  }
};
Colors$1 = __decorateClass([
  Component({})
], Colors$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-colors"
  }, [_vm._m(0), _vm._l(_vm.colors, function(colorGroup, index) {
    return _c("div", {
      key: `color-group-${index}`,
      staticClass: "section"
    }, _vm._l(colorGroup, function(color) {
      return _c("div", {
        key: color.color,
        staticClass: "side-by-side"
      }, [_c("div", {
        staticClass: "nospace-flex"
      }, [_c("div", {
        staticClass: "color-square",
        style: "background-color:" + color.hex + ";"
      }), _c("div", {
        staticClass: "subtitle"
      }, [_vm._v(" " + _vm._s(color.color) + " ")])]), _c("div", [_c("span", {
        directives: [{
          name: "clipboard",
          rawName: "v-clipboard:copy",
          value: color.name,
          expression: "color.name",
          arg: "copy"
        }, {
          name: "clipboard",
          rawName: "v-clipboard:success",
          value: _vm.emitCopySuccess,
          expression: "emitCopySuccess",
          arg: "success"
        }, {
          name: "clipboard",
          rawName: "v-clipboard:error",
          value: _vm.emitCopyError,
          expression: "emitCopyError",
          arg: "error"
        }],
        staticClass: "name color-code"
      }, [_vm._v(_vm._s(color.name))]), _c("span", {
        directives: [{
          name: "clipboard",
          rawName: "v-clipboard:copy",
          value: color.hex,
          expression: "color.hex",
          arg: "copy"
        }, {
          name: "clipboard",
          rawName: "v-clipboard:success",
          value: _vm.emitCopySuccess,
          expression: "emitCopySuccess",
          arg: "success"
        }, {
          name: "clipboard",
          rawName: "v-clipboard:error",
          value: _vm.emitCopyError,
          expression: "emitCopyError",
          arg: "error"
        }],
        staticClass: "hex color-code"
      }, [_vm._v(_vm._s(color.hex))])])]);
    }), 0);
  })], 2);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Colors")]), _c("p", [_vm._v(" Colors used on Streamlabs platforms. Click on a color to copy its variable code to the clipboard. ")])]);
}];
const Colors_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Colors$1,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "3f7c7dd9",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Colors2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Colors2 as default
};
//# sourceMappingURL=Colors-40531c34.js.map

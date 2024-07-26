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
const ICON_STYLESHEET_URL = "https://cdn.streamlabs.com/icons/style.css";
let Icons$1 = class Icons extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "iconList", []);
    __publicField(this, "selectedIcon", "");
  }
  mounted() {
    var _a;
    const styleSheetsList = Array.from(document.styleSheets);
    const link = Array.from(((_a = styleSheetsList.find((ss) => ss.href === ICON_STYLESHEET_URL)) == null ? void 0 : _a.cssRules) || []);
    this.iconList = link == null ? void 0 : link.filter((rule) => rule.cssText.startsWith(".icon")).map((rule) => {
      var _a2;
      return ((_a2 = rule.cssText.match(/([a-zA-Z0-9-])*(?=::before)/)) == null ? void 0 : _a2[0]) || "";
    }).sort();
  }
  selectIconData(icon) {
    this.selectedIcon = icon;
  }
  emitCopySuccess(e) {
    EventBus.$emit("copy-success", `Copied "${e.text}" to clipboard`);
  }
  emitCopyError(e) {
    EventBus.$emit("copy-copy", e);
  }
};
Icons$1 = __decorateClass([
  Component({})
], Icons$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "icons"
  }, [_vm._m(0), _vm.iconList.length ? _c("div", {
    directives: [{
      name: "clipboard",
      rawName: "v-clipboard:copy",
      value: _vm.selectedIcon,
      expression: "selectedIcon",
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
    staticClass: "icon__grid"
  }, _vm._l(_vm.iconList, function(icon) {
    return _c("div", {
      key: icon,
      staticClass: "icon",
      attrs: {
        "title": icon
      },
      on: {
        "click": function($event) {
          return _vm.selectIconData(`${icon}`);
        }
      }
    }, [_c("i", {
      staticClass: "icon__glyph",
      class: icon
    }, [_c("i", {
      staticClass: "icon-copy"
    })]), _c("span", {
      staticClass: "icon__label"
    }, [_vm._v(_vm._s(icon))])]);
  }), 0) : _c("h1", {
    staticClass: "icon__error"
  }, [_c("i", {
    staticClass: "icon-error"
  }), _vm._v(" There was an error loading the icons")])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Icons")]), _c("p", [_vm._v(" In order to gain access to the icons add the following link tag to your main HTML file: "), _c("code", [_vm._v(' <link href="https://cdn.streamlabs.com/icons/style.css" rel="stylesheet" /> ')])]), _c("p", [_vm._v(" Click on an icon to copy the icon class name to the clipboard. Hover over an icon to display the full icon name and icon code. ")])]);
}];
const Icons_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Icons$1,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "4f69e2d0",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Icons2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Icons2 as default
};
//# sourceMappingURL=Icons-972212ef.js.map

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { g as getDefaultExportFromCjs, C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { A as Accordion } from "./Accordion-7aa9b24d.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { U as UrlBar, S as SSProSimulator } from "./SSProSimulator-25ae21d0.js";
const CreatorSitesCode = `<template>
  <div>
    <div class="section">
      <h1>Creator Sites Components</h1>

      <pre><code>import { SSProSimulator, UrlBar } from 'streamlabs-beaker';

components: {
  SSProSimulator,
  UrlBar
}</code></pre>
    </div>

    <div class="section">
      <h2>Creator Sites Simulator</h2>

      <DemoSection title="Creator Sites Simulator" :code="demoCode">
        <template #components>
          <SSProSimulator :username="username" :domain="domain" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <table class="docs-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>domain</td>
            <td>string</td>
            <td>-</td>
            <td>Domain name for the Url Bar.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>
              "https://live.kickstarter.com/images/avatar/medium/avatars4.png"
            </td>
            <td>Set this to users platform icon.</td>
          </tr>
          <tr>
            <td>username</td>
            <td>string</td>
            <td>"Awkward_Raccoon"</td>
            <td>Set this to users platform username.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>URL Bar</h2>

      <DemoSection title="URL Bar" :code="demoCode">
        <template #components>
          <UrlBar :domain="domain" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <table class="docs-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>domain</td>
            <td>string</td>
            <td>-</td>
            <td>Domain name for the Url Bar.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Creator Sites Layout Picker</h2>

      <DemoSection title="Layout Picker" :code="demoCode">
        <template #components>
          <CSLayoutPicker>
            <div
              slot="layouts"
              v-for="layout in webLayouts"
              :key="layout.id"
              class="s-cs-layout-picker__layout"
            >
              <div>
                <img :src="layout.src" />
              </div>
            </div>
          </CSLayoutPicker>
        </template>
      </DemoSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import CreatorSitesCode from "./CreatorSites.vue?raw";
import CSLayoutPicker from "./../components/CSLayoutPicker.vue";
import DemoSection from "./../components/DemoSection.vue";
import SSProSimulator from "./../components/SSProSimulator.vue";
import UrlBar from "./../components/UrlBar.vue";

@Component({
  components: {
    Accordion,
    CSLayoutPicker,
    DemoSection,
    UrlBar,
    SSProSimulator
  }
})
export default class CreatorSitesDemo extends Vue {
  demoCode = CreatorSitesCode;
  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";

  domain = "morganleeeeeeeeeee.com";

  webLayouts = [
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    }
  ];
}
<\/script>

<style lang="less" scoped>
.s-cs-layout-picker__layouts-bar {
  .s-cs-layout-picker__layout:last-child {
    &:before {
      display: none;
    }
  }
}

.s-cs-layout-picker__layout {
  position: relative;

  &:before {
    content: "";
    height: 32px;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.08);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: -16px;
  }
}

.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
`;
var vueClickOutside = { exports: {} };
(function(module, exports) {
  function validate(binding) {
    if (typeof binding.value !== "function") {
      console.warn("[Vue-click-outside:] provided expression", binding.expression, "is not a function.");
      return false;
    }
    return true;
  }
  function isPopup(popupItem, elements) {
    if (!popupItem || !elements)
      return false;
    for (var i = 0, len = elements.length; i < len; i++) {
      try {
        if (popupItem.contains(elements[i])) {
          return true;
        }
        if (elements[i].contains(popupItem)) {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function isServer(vNode) {
    return typeof vNode.componentInstance !== "undefined" && vNode.componentInstance.$isServer;
  }
  module.exports = {
    bind: function(el, binding, vNode) {
      if (!validate(binding))
        return;
      function handler(e) {
        if (!vNode.context)
          return;
        var elements = e.path || e.composedPath && e.composedPath();
        elements && elements.length > 0 && elements.unshift(e.target);
        if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements))
          return;
        el.__vueClickOutside__.callback(e);
      }
      el.__vueClickOutside__ = {
        handler,
        callback: binding.value
      };
      const clickHandler = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !isServer(vNode) && document.addEventListener(clickHandler, handler);
    },
    update: function(el, binding) {
      if (validate(binding))
        el.__vueClickOutside__.callback = binding.value;
    },
    unbind: function(el, binding, vNode) {
      const clickHandler = "ontouchstart" in document.documentElement ? "touchstart" : "click";
      !isServer(vNode) && el.__vueClickOutside__ && document.removeEventListener(clickHandler, el.__vueClickOutside__.handler);
      delete el.__vueClickOutside__;
    }
  };
})(vueClickOutside);
var vueClickOutsideExports = vueClickOutside.exports;
const ClickOutside = /* @__PURE__ */ getDefaultExportFromCjs(vueClickOutsideExports);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let CSLayoutPicker$1 = class CSLayoutPicker extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "addLayout", true);
    __publicField(this, "chooseLayout", false);
  }
  showChooseLayout() {
    this.chooseLayout = true;
    this.addLayout = false;
  }
  showAddLayout() {
    this.chooseLayout = false;
    this.addLayout = true;
  }
  closeChooseLayout() {
    this.chooseLayout = false;
    this.addLayout = true;
  }
};
CSLayoutPicker$1 = __decorateClass$1([
  Component({
    directives: {
      ClickOutside
    }
  })
], CSLayoutPicker$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-cs-layout-picker"
  }, [_vm.addLayout ? _c("div", {
    staticClass: "s-cs-layout-picker__add-bar",
    on: {
      "click": _vm.showChooseLayout
    }
  }, [_c("i", {
    staticClass: "icon-add"
  })]) : _vm._e(), _vm.chooseLayout ? _c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.showAddLayout,
      expression: "showAddLayout"
    }],
    staticClass: "s-cs-layout-picker__layouts-bar"
  }, [_vm._t("layouts")], 2) : _vm._e()]);
};
var staticRenderFns$1 = [];
const CSLayoutPicker_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  CSLayoutPicker$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  null,
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
const CSLayoutPicker2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
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
let CreatorSitesDemo = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", CreatorSitesCode);
    __publicField(this, "username", "morganleee");
    __publicField(this, "icon", "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg");
    __publicField(this, "domain", "morganleeeeeeeeeee.com");
    __publicField(this, "webLayouts", [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
      }
    ]);
  }
};
CreatorSitesDemo = __decorateClass([
  Component({
    components: {
      Accordion,
      CSLayoutPicker: CSLayoutPicker2,
      DemoSection,
      UrlBar,
      SSProSimulator
    }
  })
], CreatorSitesDemo);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Creator Sites Simulator")]), _c("DemoSection", {
    attrs: {
      "title": "Creator Sites Simulator",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._m(1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("URL Bar")]), _c("DemoSection", {
    attrs: {
      "title": "URL Bar",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("UrlBar", {
          attrs: {
            "domain": _vm.domain
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._m(2), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Creator Sites Layout Picker")]), _c("DemoSection", {
    attrs: {
      "title": "Layout Picker",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("CSLayoutPicker", _vm._l(_vm.webLayouts, function(layout) {
          return _c("div", {
            key: layout.id,
            staticClass: "s-cs-layout-picker__layout",
            attrs: {
              "slot": "layouts"
            },
            slot: "layouts"
          }, [_c("div", [_c("img", {
            attrs: {
              "src": layout.src
            }
          })])]);
        }), 0)];
      },
      proxy: true
    }])
  })], 1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Creator Sites Components")]), _c("pre", [_c("code", [_vm._v("import { SSProSimulator, UrlBar } from 'streamlabs-beaker';\n\ncomponents: {\n  SSProSimulator,\n  UrlBar\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("domain")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("-")]), _c("td", [_vm._v("Domain name for the Url Bar.")])]), _c("tr", [_c("td", [_vm._v("icon")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v(' "https://live.kickstarter.com/images/avatar/medium/avatars4.png" ')]), _c("td", [_vm._v("Set this to users platform icon.")])]), _c("tr", [_c("td", [_vm._v("username")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v('"Awkward_Raccoon"')]), _c("td", [_vm._v("Set this to users platform username.")])])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("domain")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("-")]), _c("td", [_vm._v("Domain name for the Url Bar.")])])])])]);
}];
const CreatorSites_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  CreatorSitesDemo,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "13a1e468",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const CreatorSites = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  CreatorSites as default
};
//# sourceMappingURL=CreatorSites-368a1fbf.js.map

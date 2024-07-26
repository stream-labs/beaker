var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, T as Toggle, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Accordion-7aa9b24d.js";
const TogglesCode = `<template>
  <div>
    <div class="section">
      <h1>Toggles</h1>
      <p>Toggle between multiple custom options such as show and hide.</p>

      <pre><code>import { Toggle } from 'streamlabs-beaker';

components: {
  Toggle
}</code></pre>
    </div>

    <div class="section">
      <h2>Icon Toggles</h2>
      <DemoSection title="Icon Toggles" :code="demoCode">
        <template #components>
          <Toggle
            :values="{
              show: \`<i class='icon-view'></i>\`,
              hide: \`<i class='icon-hide'></i>\`
            }"
            v-model="selectedOption"
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Text Toggles</h2>
      <DemoSection title="Text Toggles" :code="demoCode">
        <template #components>
          <Toggle
            :values="{
              revenue: 'Revenue',
              growth: 'Growth'
            }"
            v-model="selectedTextOption"
            :variation="'text'"
          />
        </template>
      </DemoSection>
    </div>

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
          <td>values</td>
          <td>object</td>
          <td>null</td>
          <td>
            Set toggle options with strings for the keys and HTML for the
            values. Keys will also be displayed as toggle title attributes.
          </td>
        </tr>
        <tr>
          <td>v-model</td>
          <td>string</td>
          <td>null</td>
          <td>Use as a bind to the currently selected toggle option.</td>
        </tr>
        <tr>
          <td>variation</td>
          <td>string</td>
          <td>null</td>
          <td>
            Add a toggle variation for a subtle style change. Options are
            <code>text</code>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import Toggle from "./../components/Toggle.vue";
import TogglesCode from "./Toggles.vue?raw";

@Component({
  components: {
    DemoSection,
    Toggle
  }
})
export default class Toggles extends Vue {
  demoCode = TogglesCode;
  selectedOption = "show";
  selectedTextOption = "revenue";
}
<\/script>
`;
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
let Toggles$1 = class Toggles extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", TogglesCode);
    __publicField(this, "selectedOption", "show");
    __publicField(this, "selectedTextOption", "revenue");
  }
};
Toggles$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      Toggle
    }
  })
], Toggles$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Icon Toggles")]), _c("DemoSection", {
    attrs: {
      "title": "Icon Toggles",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Toggle", {
          attrs: {
            "values": {
              show: `<i class='icon-view'></i>`,
              hide: `<i class='icon-hide'></i>`
            }
          },
          model: {
            value: _vm.selectedOption,
            callback: function($$v) {
              _vm.selectedOption = $$v;
            },
            expression: "selectedOption"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Text Toggles")]), _c("DemoSection", {
    attrs: {
      "title": "Text Toggles",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Toggle", {
          attrs: {
            "values": {
              revenue: "Revenue",
              growth: "Growth"
            },
            "variation": "text"
          },
          model: {
            value: _vm.selectedTextOption,
            callback: function($$v) {
              _vm.selectedTextOption = $$v;
            },
            expression: "selectedTextOption"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Toggles")]), _c("p", [_vm._v("Toggle between multiple custom options such as show and hide.")]), _c("pre", [_c("code", [_vm._v("import { Toggle } from 'streamlabs-beaker';\n\ncomponents: {\n  Toggle\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("values")]), _c("td", [_vm._v("object")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Set toggle options with strings for the keys and HTML for the values. Keys will also be displayed as toggle title attributes. ")])]), _c("tr", [_c("td", [_vm._v("v-model")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Use as a bind to the currently selected toggle option.")])]), _c("tr", [_c("td", [_vm._v("variation")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Add a toggle variation for a subtle style change. Options are "), _c("code", [_vm._v("text")]), _vm._v(". ")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Toggles$1,
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
const Toggles2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Toggles2 as default
};
//# sourceMappingURL=Toggles-2952acd7.js.map

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { E as EmptySection } from "./EmptySection-2a9711f8.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Accordion-7aa9b24d.js";
const EmptySectionsCode = `<template>
  <div>
    <div class="section">
      <h1>Empty Sections</h1>
      <pre><code>import { EmptySection } from 'streamlabs-beaker';

components: {
  EmptySection
}</code></pre>
    </div>

    <div class="section">
      <h2>Search Variation</h2>

      <DemoSection title="Search Variation" :code="demoCode">
        <template #components>
          <EmptySection
            variation="search"
            title="No results found for 'sadasdasd'"
            subtitle="Try another search term."
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Text Variation</h2>

      <DemoSection title="Text Variation" :code="demoCode">
        <template #components>
          <EmptySection
            title="You don't have any pending users yet"
            subtitle="Open a queue to get started."
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Warning Variation</h2>

      <DemoSection title="Warning Variation" :code="demoCode">
        <template #components>
          <EmptySection
            variation="warning"
            title="You need to setup your domain"
            subtitle="A domain name is required for custom email."
          />
        </template>
      </DemoSection>
    </div>

    <table class="docs-table">
      <thead>
        <tr>
          <th>Props</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>variation</td>
          <td>String</td>
          <td>'text'</td>
          <td>The icon within the element</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>'Streamlabs.com'</td>
          <td>The title for the empty section</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td>String</td>
          <td>''</td>
          <td>A subtitle for the empty section</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EmptySection from "./../components/EmptySection.vue";
import EmptySectionsCode from "./EmptySections.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    DemoSection,
    EmptySection
  }
})
export default class EmptySections extends Vue {
  demoCode = EmptySectionsCode;
  value = "hi";
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
let EmptySections$1 = class EmptySections extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", EmptySectionsCode);
    __publicField(this, "value", "hi");
  }
};
EmptySections$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      EmptySection
    }
  })
], EmptySections$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Search Variation")]), _c("DemoSection", {
    attrs: {
      "title": "Search Variation",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("EmptySection", {
          attrs: {
            "variation": "search",
            "title": "No results found for 'sadasdasd'",
            "subtitle": "Try another search term."
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Text Variation")]), _c("DemoSection", {
    attrs: {
      "title": "Text Variation",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("EmptySection", {
          attrs: {
            "title": "You don't have any pending users yet",
            "subtitle": "Open a queue to get started."
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Warning Variation")]), _c("DemoSection", {
    attrs: {
      "title": "Warning Variation",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("EmptySection", {
          attrs: {
            "variation": "warning",
            "title": "You need to setup your domain",
            "subtitle": "A domain name is required for custom email."
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
  }, [_c("h1", [_vm._v("Empty Sections")]), _c("pre", [_c("code", [_vm._v("import { EmptySection } from 'streamlabs-beaker';\n\ncomponents: {\n  EmptySection\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("variation")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("'text'")]), _c("td", [_vm._v("The icon within the element")])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("'Streamlabs.com'")]), _c("td", [_vm._v("The title for the empty section")])]), _c("tr", [_c("td", [_vm._v("subtitle")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("''")]), _c("td", [_vm._v("A subtitle for the empty section")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  EmptySections$1,
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
const EmptySections2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  EmptySections2 as default
};
//# sourceMappingURL=EmptySections-668dcd46.js.map

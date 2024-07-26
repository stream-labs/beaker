var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Accordion-7aa9b24d.js";
const ExtrasCode = `<template>
  <div>
    <div class="section">
      <h1>Extras</h1>
      <p>
        Premade designs you can slot into modals, marketing sections, etc to
        make your lives easier.
      </p>
    </div>

    <div class="section">
      <div class="section">
        <h2>Fake Alert</h2>
        <pre><code>import { FakeAlert } from 'streamlabs-beaker';

  components: {
    FakeAlert
  }</code></pre>
      </div>

      <DemoSection title="Fake Alert" :code="demoCode">
        <template #components>
          <FakeAlert username="SalmanSux19" />
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
          <td>alertText</td>
          <td>string</td>
          <td>'galazy83 donated $50.00'</td>
          <td>First line of text in the alert.</td>
        </tr>
        <tr>
          <td>alertMessage</td>
          <td>string</td>
          <td>'Thanks for the stream. Go CivRyan!'</td>
          <td>Second line of text in the alert.</td>
        </tr>
        <tr>
          <td>alertImage</td>
          <td>string</td>
          <td>'https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif'</td>
          <td>Alert graphic.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import ExtrasCode from "./Extras.vue?raw";
import FakeAlert from "./../components/FakeAlert.vue";

@Component({
  components: {
    DemoSection,
    FakeAlert
  }
})
export default class Extras extends Vue {
  demoCode = ExtrasCode;
}
<\/script>
`;
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
let FakeAlert$1 = class FakeAlert extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "alertText");
    __publicField(this, "alertMessage");
    __publicField(this, "alertImage");
  }
};
__decorateClass$1([
  Prop({ default: "galazy83 donated $50.00" })
], FakeAlert$1.prototype, "alertText", 2);
__decorateClass$1([
  Prop({ default: "Thanks for the stream. Go CivRyan!" })
], FakeAlert$1.prototype, "alertMessage", 2);
__decorateClass$1([
  Prop({
    default: "https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif"
  })
], FakeAlert$1.prototype, "alertImage", 2);
FakeAlert$1 = __decorateClass$1([
  Component({})
], FakeAlert$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-fake-alert"
  }, [_c("p", {
    staticClass: "s-fake-alert__text"
  }, [_vm._v(_vm._s(_vm.alertText))]), _c("div", {
    staticClass: "s-fake-alert__message"
  }, [_vm._v(" " + _vm._s(_vm.alertMessage) + " "), _c("span", {
    staticClass: "s-fake-alert__icon"
  }, [_c("img", {
    attrs: {
      "src": _vm.alertImage
    }
  })])])]);
};
var staticRenderFns$1 = [];
const FakeAlert_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  FakeAlert$1,
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
const FakeAlert2 = /* @__PURE__ */ function() {
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
let Extras$1 = class Extras extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", ExtrasCode);
  }
};
Extras$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      FakeAlert: FakeAlert2
    }
  })
], Extras$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_vm._m(1), _c("DemoSection", {
    attrs: {
      "title": "Fake Alert",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FakeAlert", {
          attrs: {
            "username": "SalmanSux19"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._m(2)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Extras")]), _c("p", [_vm._v(" Premade designs you can slot into modals, marketing sections, etc to make your lives easier. ")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Fake Alert")]), _c("pre", [_c("code", [_vm._v("import { FakeAlert } from 'streamlabs-beaker';\n\ncomponents: {\n  FakeAlert\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("alertText")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("'galazy83 donated $50.00'")]), _c("td", [_vm._v("First line of text in the alert.")])]), _c("tr", [_c("td", [_vm._v("alertMessage")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("'Thanks for the stream. Go CivRyan!'")]), _c("td", [_vm._v("Second line of text in the alert.")])]), _c("tr", [_c("td", [_vm._v("alertImage")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("'https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif'")]), _c("td", [_vm._v("Alert graphic.")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Extras$1,
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
const Extras2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Extras2 as default
};
//# sourceMappingURL=Extras-0a96a709.js.map

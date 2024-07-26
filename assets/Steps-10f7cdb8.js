var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { F as FormGroup } from "./FormGroup-a1ca8cc5.js";
import { B as Badge } from "./Badge-2f139b6a.js";
import "./Accordion-7aa9b24d.js";
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
let Step$1 = class Step extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "title");
    __publicField(this, "icon");
    __publicField(this, "isCompleted");
    __publicField(this, "completedText");
    __publicField(this, "hasCheckmark");
    __publicField(this, "hasPrime");
  }
};
__decorateClass$1([
  Prop(String)
], Step$1.prototype, "title", 2);
__decorateClass$1([
  Prop(String)
], Step$1.prototype, "icon", 2);
__decorateClass$1([
  Prop({ default: false })
], Step$1.prototype, "isCompleted", 2);
__decorateClass$1([
  Prop(String)
], Step$1.prototype, "completedText", 2);
__decorateClass$1([
  Prop({ default: false })
], Step$1.prototype, "hasCheckmark", 2);
__decorateClass$1([
  Prop({ default: false })
], Step$1.prototype, "hasPrime", 2);
Step$1 = __decorateClass$1([
  Component({
    components: {
      Badge
    }
  })
], Step$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-step",
    class: {
      "s-step--completed": _vm.isCompleted,
      checked: _vm.hasCheckmark
    }
  }, [_c("div", {
    staticClass: "s-step__title"
  }, [_vm.icon ? _c("span", {
    staticClass: "s-step__icon",
    class: _vm.icon
  }) : _vm._e(), _vm.hasCheckmark ? _c("span", {
    staticClass: "s-step__icon icon-check-mark"
  }) : _vm._e(), _c("p", {
    staticClass: "s-step__title-text"
  }, [_vm._v(_vm._s(_vm.title))]), _vm.hasPrime ? _c("Badge", {
    staticClass: "s-step__badge",
    attrs: {
      "variant": "prime-alt",
      "align-left": true
    }
  }) : _vm._e()], 1), !_vm.isCompleted ? _vm._t("default") : _vm._e(), _vm.isCompleted ? _c("div", [_vm._v(_vm._s(_vm.completedText))]) : _vm._e()], 2);
};
var staticRenderFns$1 = [];
const Step_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  Step$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  "ae29c310",
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
const Step2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const StepsCode = `<template>
  <div>
    <div class="section">
      <h1>Step</h1>
      <p>step component</p>

      <pre><code>import { Step } from 'streamlabs-beaker';

components: {
  Step
}</code></pre>
    </div>

    <div class="section">
      <div class="row">
        <DemoSection title="Default" :code="demoCode">
          <template #components>
            <FormGroup>
              <Step slot="input" title="Enable Pro">
                <div class="info">
                  <p>+20 CCV</p>
                  <i class="icon-information"></i>
                </div>
              </Step>

              <Step
                slot="input"
                title="Enable Pro"
                :isCompleted="true"
                :hasCheckmark="true"
                completedText="Complete"
              >
                <div class="info">
                  <p>+20 CCV</p>
                  <i class="icon-information"></i>
                </div>
              </Step>

              <Step
                slot="input"
                icon="icon-donation-settings"
                title="Tip"
                :hasPrime="true"
                >0/1</Step
              >

              <Step
                slot="input"
                icon="icon-donation-settings"
                title="Tip"
                :isCompleted="true"
                completedText="1/1"
                >0/1</Step
              >
            </FormGroup>
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
            <td>title</td>
            <td>String</td>
            <td>null</td>
            <td>title to display</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>String</td>
            <td>null</td>
            <td>icon to display</td>
          </tr>
          <tr>
            <td>isCompleted</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              background would be @dark-4, color would be @dark-5 when it is
              true
            </td>
          </tr>
          <tr>
            <td>completedText</td>
            <td>String</td>
            <td>null</td>
            <td>
              It shows instead of slot when isCompleted is true
            </td>
          </tr>
          <tr>
            <td>isChecked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              add check mark icon and line through for title when it is true
            </td>
          </tr>
          <tr>
            <td>hasPrime</td>
            <td>Boolean</td>
            <td>false</td>
            <td>It shows prime alt badge when it is true</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import FormGroup from "./../components/FormGroup.vue";
import Step from "./../components/Step.vue";
import StepsCode from "./Steps.vue?raw";

@Component({
  components: {
    DemoSection,
    FormGroup,
    Step
  }
})
export default class Steps extends Vue {
  demoCode = StepsCode;
}
<\/script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    .margin(0);
    margin-right: 15px;
    color: @dark-5;
    background: @light-blue;
    .weight(@medium);
    .radius();
    .padding();
  }
}
</style>
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
let Steps$1 = class Steps extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", StepsCode);
  }
};
Steps$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      FormGroup,
      Step: Step2
    }
  })
], Steps$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FormGroup", [_c("Step", {
          attrs: {
            "slot": "input",
            "title": "Enable Pro"
          },
          slot: "input"
        }, [_c("div", {
          staticClass: "info"
        }, [_c("p", [_vm._v("+20 CCV")]), _c("i", {
          staticClass: "icon-information"
        })])]), _c("Step", {
          attrs: {
            "slot": "input",
            "title": "Enable Pro",
            "isCompleted": true,
            "hasCheckmark": true,
            "completedText": "Complete"
          },
          slot: "input"
        }, [_c("div", {
          staticClass: "info"
        }, [_c("p", [_vm._v("+20 CCV")]), _c("i", {
          staticClass: "icon-information"
        })])]), _c("Step", {
          attrs: {
            "slot": "input",
            "icon": "icon-donation-settings",
            "title": "Tip",
            "hasPrime": true
          },
          slot: "input"
        }, [_vm._v("0/1")]), _c("Step", {
          attrs: {
            "slot": "input",
            "icon": "icon-donation-settings",
            "title": "Tip",
            "isCompleted": true,
            "completedText": "1/1"
          },
          slot: "input"
        }, [_vm._v("0/1")])], 1)];
      },
      proxy: true
    }])
  })], 1), _vm._m(1)])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Step")]), _c("p", [_vm._v("step component")]), _c("pre", [_c("code", [_vm._v("import { Step } from 'streamlabs-beaker';\n\ncomponents: {\n  Step\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("title to display")])]), _c("tr", [_c("td", [_vm._v("icon")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("icon to display")])]), _c("tr", [_c("td", [_vm._v("isCompleted")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" background would be @dark-4, color would be @dark-5 when it is true ")])]), _c("tr", [_c("td", [_vm._v("completedText")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" It shows instead of slot when isCompleted is true ")])]), _c("tr", [_c("td", [_vm._v("isChecked")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" add check mark icon and line through for title when it is true ")])]), _c("tr", [_c("td", [_vm._v("hasPrime")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("It shows prime alt badge when it is true")])])])]);
}];
const Steps_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Steps$1,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "2ab8e317",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Steps2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Steps2 as default
};
//# sourceMappingURL=Steps-10f7cdb8.js.map

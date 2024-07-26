var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { F as FormGroup } from "./FormGroup-a1ca8cc5.js";
import { C as Checkbox, R as Radio, S as Selector } from "./Selector-5d96266a.js";
import { T as TextInput } from "./TextInput-2ccb4081.js";
import "./Accordion-7aa9b24d.js";
import "./_baseClone-bc178edd.js";
const FormsCode = `<template>
  <div>
    <div class="section">
      <h1>Forms</h1>
      <p>
        Wrap input components in form groups for different input and label
        layouts.
      </p>

      <pre><code>import { FormGroup, FormGroupH, FormGroupV } from 'streamlabs-beaker';

components: {
  FormGroup,
  FormGroupH,
  FormGroupV
}</code></pre>
    </div>

    <div class="section">
      <h2>Form Group</h2>

      <DemoSection title="Form Group" :code="demoCode">
        <template #components>
          <FormGroup>
            <TextInput
              slot="input"
              :type="textInputType"
              :placeholder="textInputPlaceholder"
              :label="title"
              v-model="inputValue"
            />
          </FormGroup>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Horizontal Form Group</h2>

      <DemoSection title="Horizontal Form Group" :code="demoCode">
        <template #components>
          <FormGroupH :title="title" :helpText="helpText" :tooltip="tooltip">
            <TextInput
              slot="input"
              :type="textInputType"
              :placeholder="textInputPlaceholder"
              v-model="inputValue"
            />
          </FormGroupH>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Vertical Form Group</h2>

      <DemoSection title="Vertical Form Group" :code="demoCode">
        <template #components>
          <FormGroupV
            :title="title"
            label="Vertical Form Group Input"
            titleLayout="flex-start"
            :tooltip="tooltip"
            :helpText="helpText"
          >
            <TextInput
              slot="input"
              :type="textInputType"
              :placeholder="textInputPlaceholder"
              v-model="inputValue"
            />
          </FormGroupV>
        </template>
      </DemoSection>
    </div>

    <!-- <div class="section">
      <h2>Payment Form</h2>

      <DemoSection title="Payment Form" :code="demoCode">
        <template #components>
          <PaymentForm />
        </template>
      </DemoSection>
    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import FormsCode from "./Forms.vue?raw";
import FormGroup from "./../components/FormGroup.vue";
import FormGroupH from "./../components/FormGroupH.vue";
import FormGroupV from "./../components/FormGroupV.vue";
import PaymentForm from "./../components/PaymentForm.vue";
import TextInput from "./../components/TextInput.vue";

@Component({
  components: {
    DemoSection,
    FormGroup,
    FormGroupH,
    FormGroupV,
    PaymentForm,
    TextInput
  }
})
export default class Forms extends Vue {
  demoCode = FormsCode;
  title = "Text Input";
  tooltip = "Input tooltip message.";
  helpText = "This is help text";
  textInputPlaceholder = "Text input placeholder";
  textInputType = "text";
  inputValue = "";
}
<\/script>
`;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let FormGroupH$1 = class FormGroupH extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "helpText");
    __publicField(this, "tooltip");
    __publicField(this, "title");
  }
};
__decorateClass$3([
  Prop()
], FormGroupH$1.prototype, "helpText", 2);
__decorateClass$3([
  Prop()
], FormGroupH$1.prototype, "tooltip", 2);
__decorateClass$3([
  Prop()
], FormGroupH$1.prototype, "title", 2);
FormGroupH$1 = __decorateClass$3([
  Component({})
], FormGroupH$1);
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-form-group-h"
  }, [_c("div", {
    staticClass: "s-form-group-h__title"
  }, [_c("label", [_vm._v(_vm._s(_vm.title))]), _vm.tooltip ? _c("i", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.auto",
      value: _vm.tooltip,
      expression: "tooltip",
      modifiers: {
        "auto": true
      }
    }],
    staticClass: "s-tooltip icon-question"
  }) : _vm._e()]), _c("div", {
    staticClass: "s-form-group-h__input-wrapper"
  }, [_vm._t("input"), _vm.helpText ? _c("div", {
    staticClass: "s-form-group-h__help-text"
  }, [_vm._v(" " + _vm._s(_vm.helpText) + " ")]) : _vm._e()], 2)]);
};
var staticRenderFns$3 = [];
const FormGroupH_vue_vue_type_style_index_0_lang = "";
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  FormGroupH$1,
  render$3,
  staticRenderFns$3,
  false,
  __vue2_injectStyles$3,
  null,
  null,
  null
);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
const FormGroupH2 = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let FormGroupV$1 = class FormGroupV extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "helpText");
    __publicField(this, "title");
    __publicField(this, "tooltip");
    __publicField(this, "titleLayout");
  }
  get titleLayoutStyle() {
    return {
      "justify-content": this.titleLayout
    };
  }
};
__decorateClass$2([
  Prop()
], FormGroupV$1.prototype, "helpText", 2);
__decorateClass$2([
  Prop()
], FormGroupV$1.prototype, "title", 2);
__decorateClass$2([
  Prop({ default: "" })
], FormGroupV$1.prototype, "tooltip", 2);
__decorateClass$2([
  Prop({ default: "space-between" })
], FormGroupV$1.prototype, "titleLayout", 2);
FormGroupV$1 = __decorateClass$2([
  Component({})
], FormGroupV$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-form-group-v"
  }, [_c("div", {
    staticClass: "s-form-group-v__title",
    style: _vm.titleLayoutStyle
  }, [!this.$slots.header ? [_vm.title ? _c("label", [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm.tooltip ? _c("i", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.auto",
      value: _vm.tooltip,
      expression: "tooltip",
      modifiers: {
        "auto": true
      }
    }],
    staticClass: "tooltip icon-question"
  }) : _vm._e()] : _vm._e(), _vm._t("header")], 2), _c("div", {
    staticClass: "s-form-group-v__input-wrapper"
  }, [_vm._t("input"), _vm.helpText ? _c("div", {
    staticClass: "s-form-group-v__help-text"
  }, [_vm._v(" " + _vm._s(_vm.helpText) + " ")]) : _vm._e()], 2)]);
};
var staticRenderFns$2 = [];
const FormGroupV_vue_vue_type_style_index_0_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  FormGroupV$1,
  render$2,
  staticRenderFns$2,
  false,
  __vue2_injectStyles$2,
  null,
  null,
  null
);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
const FormGroupV2 = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
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
let PaymentForm$1 = class PaymentForm extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "savePaymentMethod", true);
  }
};
PaymentForm$1 = __decorateClass$1([
  Component({
    components: {
      Checkbox,
      Radio,
      Selector,
      TextInput
    }
  })
], PaymentForm$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-payment-form"
  }, [_vm._m(0), _c("div", {
    staticClass: "s-payment-form__option"
  }, [_c("form", {
    staticClass: "s-credit-card-form s-form"
  }, [_c("div", {
    staticClass: "s-form-group"
  }, [_c("selector", {
    attrs: {
      "placeholder": "Add new credit card"
    }
  })], 1), _c("div", {
    staticClass: "s-form-group s-credit-card-form__inputs"
  }, [_c("text-input", {
    staticClass: "s-credit-card-form__cc-number",
    attrs: {
      "type": "text",
      "placeholder": "Name on card"
    }
  }), _c("text-input", {
    staticClass: "s-credit-card-form__cc-exp",
    attrs: {
      "type": "text",
      "placeholder": "Expiry MM/YYYY"
    }
  }), _c("text-input", {
    staticClass: "s-credit-card-form__cc-cvc",
    attrs: {
      "type": "text",
      "placeholder": "CVC"
    }
  }), _c("text-input", {
    staticClass: "s-credit-card-form__cc-zip",
    attrs: {
      "type": "text",
      "placeholder": "Zip/Postal"
    }
  }), _c("selector", {
    staticClass: "s-credit-card-form__cc-country",
    attrs: {
      "placeholder": "Country"
    }
  })], 1), _c("div", {
    staticClass: "s-form-group"
  }, [_c("checkbox", {
    attrs: {
      "label": "Save this payment method for next time"
    },
    model: {
      value: _vm.savePaymentMethod,
      callback: function($$v) {
        _vm.savePaymentMethod = $$v;
      },
      expression: "savePaymentMethod"
    }
  })], 1)])])]);
};
var staticRenderFns$1 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-payment-form__option"
  }, [_c("form")]);
}];
const PaymentForm_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  PaymentForm$1,
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
const PaymentForm2 = /* @__PURE__ */ function() {
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
let Forms$1 = class Forms extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", FormsCode);
    __publicField(this, "title", "Text Input");
    __publicField(this, "tooltip", "Input tooltip message.");
    __publicField(this, "helpText", "This is help text");
    __publicField(this, "textInputPlaceholder", "Text input placeholder");
    __publicField(this, "textInputType", "text");
    __publicField(this, "inputValue", "");
  }
};
Forms$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      FormGroup,
      FormGroupH: FormGroupH2,
      FormGroupV: FormGroupV2,
      PaymentForm: PaymentForm2,
      TextInput
    }
  })
], Forms$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Form Group")]), _c("DemoSection", {
    attrs: {
      "title": "Form Group",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FormGroup", [_c("TextInput", {
          attrs: {
            "slot": "input",
            "type": _vm.textInputType,
            "placeholder": _vm.textInputPlaceholder,
            "label": _vm.title
          },
          slot: "input",
          model: {
            value: _vm.inputValue,
            callback: function($$v) {
              _vm.inputValue = $$v;
            },
            expression: "inputValue"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Horizontal Form Group")]), _c("DemoSection", {
    attrs: {
      "title": "Horizontal Form Group",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FormGroupH", {
          attrs: {
            "title": _vm.title,
            "helpText": _vm.helpText,
            "tooltip": _vm.tooltip
          }
        }, [_c("TextInput", {
          attrs: {
            "slot": "input",
            "type": _vm.textInputType,
            "placeholder": _vm.textInputPlaceholder
          },
          slot: "input",
          model: {
            value: _vm.inputValue,
            callback: function($$v) {
              _vm.inputValue = $$v;
            },
            expression: "inputValue"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Vertical Form Group")]), _c("DemoSection", {
    attrs: {
      "title": "Vertical Form Group",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FormGroupV", {
          attrs: {
            "title": _vm.title,
            "label": "Vertical Form Group Input",
            "titleLayout": "flex-start",
            "tooltip": _vm.tooltip,
            "helpText": _vm.helpText
          }
        }, [_c("TextInput", {
          attrs: {
            "slot": "input",
            "type": _vm.textInputType,
            "placeholder": _vm.textInputPlaceholder
          },
          slot: "input",
          model: {
            value: _vm.inputValue,
            callback: function($$v) {
              _vm.inputValue = $$v;
            },
            expression: "inputValue"
          }
        })], 1)];
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
  }, [_c("h1", [_vm._v("Forms")]), _c("p", [_vm._v(" Wrap input components in form groups for different input and label layouts. ")]), _c("pre", [_c("code", [_vm._v("import { FormGroup, FormGroupH, FormGroupV } from 'streamlabs-beaker';\n\ncomponents: {\n  FormGroup,\n  FormGroupH,\n  FormGroupV\n}")])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Forms$1,
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
const Forms2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Forms2 as default
};
//# sourceMappingURL=Forms-b87ccdad.js.map

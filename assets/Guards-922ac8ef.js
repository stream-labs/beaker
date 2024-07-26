var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { T as TextInput } from "./TextInput-2ccb4081.js";
import "./Accordion-7aa9b24d.js";
import "./_baseClone-bc178edd.js";
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
let Guard$1 = class Guard extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "value");
    __publicField(this, "placeholder");
    __publicField(this, "showOnClick");
    __publicField(this, "variation");
    __publicField(this, "type");
    __publicField(this, "visible", true);
  }
  get prefix() {
    return this.type === "input" ? "s-input-guard" : "s-text-guard";
  }
  showText() {
    if (this.showOnClick) {
      this.visible = false;
    } else {
      this.$emit("click");
    }
  }
  get guardClasses() {
    const classes = [];
    if (this.visible) {
      classes.push(this.prefix);
    } else {
      classes.push(`${this.prefix}--readable`);
    }
    if (this.variation === "alt") {
      classes.push(`${this.prefix}--alt`);
    }
    return classes;
  }
};
__decorateClass$2([
  Prop()
], Guard$1.prototype, "value", 2);
__decorateClass$2([
  Prop({ default: "Click to show" })
], Guard$1.prototype, "placeholder", 2);
__decorateClass$2([
  Prop({ default: true })
], Guard$1.prototype, "showOnClick", 2);
__decorateClass$2([
  Prop({ default: "normal" })
], Guard$1.prototype, "variation", 2);
__decorateClass$2([
  Prop({ default: "text" })
], Guard$1.prototype, "type", 2);
Guard$1 = __decorateClass$2([
  Component({})
], Guard$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    class: _vm.guardClasses,
    on: {
      "click": _vm.showText
    }
  }, [_vm.visible ? _c("div", {
    class: `${_vm.prefix}__text`
  }, [_c("i", {
    staticClass: "fas fa-lock"
  }), _vm._v(" " + _vm._s(_vm.placeholder) + " ")]) : _vm._e(), _c("div", {
    class: _vm.visible ? `${_vm.prefix}-wrapper` : `${_vm.prefix}-wrapper ${_vm.prefix}-wrapper--readable`
  }, [_vm.$slots.content ? _vm._t("content") : _c("div", [_vm._v(_vm._s(_vm.value))])], 2)]);
};
var staticRenderFns$2 = [];
const Guard_vue_vue_type_style_index_0_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  Guard$1,
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
const Guard2 = /* @__PURE__ */ function() {
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
let GuardNew$1 = class GuardNew extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "value");
    __publicField(this, "placeholder");
    __publicField(this, "visible", false);
  }
  showText(e) {
    if (!this.visible) {
      this.visible = true;
    } else {
      this.$emit("click");
    }
    if (e.type === "keydown") {
      setTimeout(() => e.target.select(), 200);
    }
  }
  checkSelectedText(e) {
    const target = e.target;
    if (!this.visible)
      target.setSelectionRange(0, 0);
    target.focus();
  }
};
__decorateClass$1([
  Prop()
], GuardNew$1.prototype, "value", 2);
__decorateClass$1([
  Prop({ default: "Click to show" })
], GuardNew$1.prototype, "placeholder", 2);
GuardNew$1 = __decorateClass$1([
  Component({
    components: {
      TextInput
    }
  })
], GuardNew$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-guard",
    class: {
      "s-guard--hidden": !_vm.visible
    },
    on: {
      "click": _vm.showText
    }
  }, [_c("div", {
    staticClass: "s-guard__placeholder"
  }, [_c("i", {
    staticClass: "icon-lock"
  }), _vm._v(" " + _vm._s(_vm.placeholder) + " ")]), _c("div", {
    staticClass: "s-guard__text"
  }, [_c("TextInput", {
    attrs: {
      "readonly": "",
      "type": "text"
    },
    on: {
      "focus": _vm.checkSelectedText,
      "keydown": function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
          return null;
        $event.preventDefault();
        return _vm.showText.apply(null, arguments);
      }
    },
    model: {
      value: _vm.value,
      callback: function($$v) {
        _vm.value = $$v;
      },
      expression: "value"
    }
  })], 1)]);
};
var staticRenderFns$1 = [];
const GuardNew_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  GuardNew$1,
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
const GuardNew2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const GuardsCode = `<template>
  <div>
    <div class="section">
      <h1>Guards</h1>

      <pre><code>import { Guard } from 'streamlabs-beaker';

components: {
  Guard
}</code></pre>
    </div>

    <div class="section">
      <h2>Text Guard</h2>

      <DemoSection title="Text Guard" :code="demoCode">
        <template #components>
          <Guard class="guard-margin" type="alt" value="Text" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Input Guard</h2>

      <DemoSection title="Input Guard" :code="demoCode">
        <template #components>
          <Guard type="input">
            <div slot="content">
              <TextInput
                slot="input"
                label="Text input"
                type="text"
                :placeholder="textInputPlaceholder"
                v-model="textInputValue"
                name="textExample"
              />
            </div>
          </Guard>
        </template>
      </DemoSection>
    </div>

    <!-- <div class="section">
      <h2>Text Guard</h2>

      <DemoSection title="Text Guard" :code="demoCode">
        <template #components>
          <GuardNew :value="textInputValue" />
        </template>
      </DemoSection>
    </div>-->

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
          <td>value</td>
          <td>string</td>
          <td>null</td>
          <td>Text Value</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>text</td>
          <td>
            This can be either text or input (supply content slot for input)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import Guard from "./../components/Guard.vue";
import GuardNew from "./../components/GuardNew.vue";
import GuardsCode from "./Guards.vue?raw";
import TextInput from "./../components/TextInput.vue";

@Component({
  components: {
    DemoSection,
    Guard,
    GuardNew,
    TextInput
  }
})
export default class Accordions extends Vue {
  demoCode = GuardsCode;
  textInputPlaceholder = "placeholder";
  textInputValue = "This is something super secret...";
}
<\/script>

<style lang="less">
@import (reference) "./../styles/Imports";

.guard-margin {
  margin-bottom: 10px;
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
let Accordions = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", GuardsCode);
    __publicField(this, "textInputPlaceholder", "placeholder");
    __publicField(this, "textInputValue", "This is something super secret...");
  }
};
Accordions = __decorateClass([
  Component({
    components: {
      DemoSection,
      Guard: Guard2,
      GuardNew: GuardNew2,
      TextInput
    }
  })
], Accordions);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Text Guard")]), _c("DemoSection", {
    attrs: {
      "title": "Text Guard",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Guard", {
          staticClass: "guard-margin",
          attrs: {
            "type": "alt",
            "value": "Text"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Input Guard")]), _c("DemoSection", {
    attrs: {
      "title": "Input Guard",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Guard", {
          attrs: {
            "type": "input"
          }
        }, [_c("div", {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, [_c("TextInput", {
          attrs: {
            "slot": "input",
            "label": "Text input",
            "type": "text",
            "placeholder": _vm.textInputPlaceholder,
            "name": "textExample"
          },
          slot: "input",
          model: {
            value: _vm.textInputValue,
            callback: function($$v) {
              _vm.textInputValue = $$v;
            },
            expression: "textInputValue"
          }
        })], 1)])];
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
  }, [_c("h1", [_vm._v("Guards")]), _c("pre", [_c("code", [_vm._v("import { Guard } from 'streamlabs-beaker';\n\ncomponents: {\n  Guard\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Text Value")])]), _c("tr", [_c("td", [_vm._v("type")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("text")]), _c("td", [_vm._v(" This can be either text or input (supply content slot for input) ")])])])]);
}];
const Guards_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Accordions,
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
const Guards = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Guards as default
};
//# sourceMappingURL=Guards-922ac8ef.js.map

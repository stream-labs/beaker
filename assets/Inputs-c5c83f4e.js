var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent, W as Watch } from "./index-158ccef1.js";
import { C as Checkbox, R as Radio, S as Selector } from "./Selector-5d96266a.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { F as FormGroup } from "./FormGroup-a1ca8cc5.js";
import { i as index } from "./ResizeObserver.es-25312764.js";
import { o as omit, T as TextInput } from "./TextInput-2ccb4081.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { F as Fuse } from "./fuse.esm-aec42c40.js";
import "./Accordion-7aa9b24d.js";
import "./_baseClone-bc178edd.js";
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
let ImagePickerInput$1 = class ImagePickerInput extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "value");
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "options");
    __publicField(this, "containerWidth", 0);
  }
  get selectedItemIndex() {
    return this.options.findIndex((option) => option.value === this.value);
  }
  get totalRows() {
    const items = this.options.length;
    const itemsWidth = (parseInt(this.width, 10) || 64) + 8;
    const total = items * itemsWidth;
    return Math.ceil(total / this.containerWidth);
  }
  get itemsPerRow() {
    const itemsWidth = (parseInt(this.width, 10) || 64) + 8;
    return Math.floor(this.containerWidth / itemsWidth);
  }
  get itemsInFinalRow() {
    return this.options.length % this.itemsPerRow;
  }
  get itemPosMatrix() {
    let itemMap = [];
    let currentRow = 1;
    let currentColumn = 1;
    let totalItems = this.options.length;
    let count = 0;
    while (count < totalItems) {
      itemMap.push([currentRow, currentColumn]);
      currentColumn++;
      if (currentColumn > this.itemsPerRow) {
        currentColumn = 1;
        currentRow++;
      }
      count++;
    }
    return itemMap;
  }
  mounted() {
    this.$nextTick(() => {
      const imagePickerInput = document.querySelector(
        ".s-image-picker-input"
      );
      const ro = new index((entries, observer) => {
        for (const entry of entries) {
          const { left, top, width, height } = entry.contentRect;
          this.containerWidth = width;
        }
      });
      ro.observe(imagePickerInput);
      this.containerWidth = imagePickerInput.clientWidth;
    });
  }
  emitInput(val) {
    this.$emit("input", val);
  }
  setValueByKeyPress(direction) {
    let currentPosition = [...this.itemPosMatrix[this.selectedItemIndex]];
    let posIndex = this.selectedItemIndex;
    if (direction === "UP") {
      if (currentPosition[0] <= 1) {
        currentPosition[0] = 1;
      } else {
        currentPosition[0]--;
      }
    }
    if (direction === "DOWN") {
      if (currentPosition[0] >= this.totalRows) {
        currentPosition[0] = this.totalRows;
      } else {
        currentPosition[0]++;
        if (currentPosition[1] > this.itemsInFinalRow) {
          currentPosition[1] = this.itemsInFinalRow;
        }
      }
    }
    if (direction === "LEFT") {
      if (currentPosition[0] <= 1 && currentPosition[1] <= 1) {
        currentPosition[1] = 1;
      } else if (currentPosition[0] > 1 && currentPosition[1] === 1) {
        currentPosition[0]--;
        currentPosition[1] = this.itemsPerRow;
      } else {
        currentPosition[1]--;
      }
    }
    if (direction === "RIGHT") {
      if (this.options.length < this.itemsPerRow && currentPosition[1] >= this.options.length) {
        currentPosition[1] = this.options.length;
      } else if (currentPosition[1] >= this.itemsInFinalRow && currentPosition[0] === this.totalRows) {
        currentPosition[1] = this.itemsInFinalRow;
      } else if (currentPosition[1] === this.itemsPerRow && currentPosition[0] < this.totalRows) {
        currentPosition[0]++;
        currentPosition[1] = 1;
      } else {
        currentPosition[1]++;
      }
    }
    posIndex = this.itemPosMatrix.findIndex(
      (pos) => pos[0] === currentPosition[0] && pos[1] === currentPosition[1]
    );
    this.$refs.imagePickerItem[posIndex].focus();
    this.emitInput(this.options[posIndex].value);
  }
};
__decorateClass$5([
  Prop({ default: "above" })
], ImagePickerInput$1.prototype, "value", 2);
__decorateClass$5([
  Prop(String)
], ImagePickerInput$1.prototype, "width", 2);
__decorateClass$5([
  Prop(String)
], ImagePickerInput$1.prototype, "height", 2);
__decorateClass$5([
  Prop({
    default: () => [
      {
        value: "above",
        title: "Above",
        image: "https://cdn.streamlabs.com/layouts/img/above.png"
      },
      {
        value: "banner",
        title: "Banner",
        image: "https://cdn.streamlabs.com/layouts/img/banner.png"
      },
      {
        value: "side",
        title: "Side",
        image: "https://cdn.streamlabs.com/layouts/img/side.png"
      }
    ]
  })
], ImagePickerInput$1.prototype, "options", 2);
ImagePickerInput$1 = __decorateClass$5([
  Component({})
], ImagePickerInput$1);
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-image-picker-input"
  }, _vm._l(_vm.options, function(option) {
    return _c("div", {
      key: option.value,
      ref: "imagePickerItem",
      refInFor: true,
      staticClass: "s-image-picker-input__option",
      class: [_vm.value === option.value ? "active" : ""],
      style: {
        width: _vm.width,
        height: _vm.height
      },
      attrs: {
        "value": option.value,
        "title": option.title,
        "image": option.image,
        "tabindex": _vm.value === option.value ? "0" : "-1"
      },
      on: {
        "click": function($event) {
          return _vm.emitInput(option.value);
        },
        "keydown": [function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"]))
            return null;
          $event.preventDefault();
          return _vm.setValueByKeyPress("UP");
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"]))
            return null;
          $event.preventDefault();
          return _vm.setValueByKeyPress("DOWN");
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"]))
            return null;
          if ("button" in $event && $event.button !== 0)
            return null;
          $event.preventDefault();
          return _vm.setValueByKeyPress("LEFT");
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"]))
            return null;
          if ("button" in $event && $event.button !== 2)
            return null;
          $event.preventDefault();
          return _vm.setValueByKeyPress("RIGHT");
        }]
      }
    }, [_c("img", {
      attrs: {
        "src": option.image
      }
    })]);
  }), 0);
};
var staticRenderFns$5 = [];
const ImagePickerInput_vue_vue_type_style_index_0_lang = "";
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  ImagePickerInput$1,
  render$5,
  staticRenderFns$5,
  false,
  __vue2_injectStyles$5,
  null,
  null,
  null
);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
const ImagePickerInput2 = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
const InputsCode = `<template>
  <div>
    <h1>Inputs</h1>

    <div class="section">
      <h2>Text Inputs</h2>
      <p>
        These 6 fields below are wrapped in a
        <code>FormGroup</code> component. This will put 16px of margin between
        form fields and 24px margin between form groups.
      </p>

      <pre><code>import { TextInput, TextArea, VariableMenu } from 'streamlabs-beaker';

components: {
  TextInput,
  TextArea,
  VariableMenu
}</code></pre>

      <DemoSection title="Text Inputs" :code="demoCode">
        <template #components>
          <FormGroup>
            <TextInput
              slot="input"
              type="text"
              label="Text Input"
              v-model="textInputValue"
              name="textExample"
              :placeholder="textInputPlaceholder"
              autoComplete="on"
            />

            <TextInput
              slot="input"
              type="number"
              label="Number Input"
              v-model="numberInputValue"
              name="numberinputExample"
              :placeholder="textInputPlaceholder"
              :min="0"
              :max="100"
              v-validate="'required|between:0,100'"
              :error="errors.first('numberinputExample')"
            />

            <TextInput
              slot="input"
              type="email"
              label="Email Input"
              v-model="emailInputValue"
              name="emailExample"
              :placeholder="emailInputPlaceholder"
            />

            <TextInput
              slot="input"
              type="password"
              label="Password Input"
              v-model="passwordInputValue"
              name="passwordExample"
              :placeholder="passwordInputPlaceholder"
              disabled
            />

            <TextInput
              slot="input"
              type="text"
              label="Input With Error"
              v-model="errorTextInputValue"
              name="textExample"
              :placeholder="textInputPlaceholder"
              :error="'Enter a number'"
            />

            <TextArea
              slot="input"
              label="Text Area"
              v-model="textAreaInputValue"
              name="myarea"
              placeholder="This is where you put some cool stuff"
              autoResize="true"
              :maxLength="1000"
              :maxHeight="100"
            />
          </FormGroup>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Text Inputs with Variable Menu Wrapper</h2>
      <p>
        A new way to navigate variables, just wrap your input with the Variable
        Menu. This is not work with FormGroup preformatting.
      </p>

      <DemoSection title="Variable Menu" :code="demoCode">
        <template #components>
          <VariableMenu :jsonSearch="varData">
            <text-input
              slot="input"
              type="text"
              v-model="variTextValue"
              name="textExample"
              :placeholder="'w/ Variable Menu'"
            />
          </VariableMenu>

          <VariableMenu :jsonSearch="varData">
            <TextArea
              slot="input"
              ref="textArea"
              v-model="variAreaValue"
              name="myarea"
              placeholder="w/ Variable Menu"
              rows="3"
              :maxLength="1000"
              :maxHeight="100"
            />
          </VariableMenu>
        </template>
      </DemoSection>

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
            <td>disabled</td>
            <td>boolean</td>
            <td>null</td>
            <td>
              Puts a disabled class on the form field and disables the input.
            </td>
          </tr>
          <tr>
            <td>error</td>
            <td>string</td>
            <td>null</td>
            <td>
              If there is error text, error classes will go on the input - we
              plan to add better validation handling.
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>null</td>
            <td>Optional label for the input.</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>null</td>
            <td>Input name attribute.</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>string</td>
            <td>null</td>
            <td>Input placeholder text.</td>
          </tr>
          <tr>
            <td>type</td>
            <td>string</td>
            <td>text</td>
            <td>
              Input type:
              <code>text</code>, <code>email</code>, <code>password</code>.
            </td>
          </tr>
          <tr>
            <td>value</td>
            <td>string</td>
            <td>null</td>
            <td>Input value using v-model.</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>boolean</td>
            <td>null</td>
            <td>Specifies that an input field is read-only.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Tagging Input</h2>
      <pre><code>import { TaggingInput } from 'streamlabs-beaker';

components: {
  TaggingInput
}</code></pre>

      <DemoSection title="Tagging Input" :code="demoCode">
        <template #components>
          <TaggingInput
            name="aliases"
            placeholder="!hello"
            maxItems="10"
            inputValidation="required"
            @keydown.space.prevent
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Selector</h2>

      <pre><code>import { Selector } from 'streamlabs-beaker';

components: {
  Selector
}</code></pre>

      <DemoSection title="Selector" :code="demoCode">
        <template #components>
          <FormGroup>
            <Selector
              slot="input"
              v-model="selected"
              :options="['Option A', 'Option B', 'Option C']"
            />

            <Selector
              slot="input"
              v-model="selectedGroup"
              :options="optionGroups"
              group-values="items"
              group-label="group"
              :searchable="false"
            />

            <Selector
              slot="input"
              v-model="selected"
              :options="['Option A', 'Option B', 'Option C']"
              disabled
            />

            <Selector
              slot="input"
              multiple
              v-model="multipleSelected"
              :options="['Option A', 'Option B', 'Option C']"
              :searchable="false"
            />

            <Selector
              slot="input"
              multiple
              v-model="multipleSelected"
              :options="['Option A', 'Option B', 'Option C']"
              disabled
            />
          </FormGroup>
        </template>
      </DemoSection>

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
            <td>Current selected value.</td>
          </tr>
          <tr>
            <td>options</td>
            <td>[''] or {}</td>
            <td>null</td>
            <td>Array of strings or objects to use as the options.</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Optional label for the input.</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>String</td>
            <td>''</td>
            <td>Equivalent to the \`placeholder\` attribute on an input.</td>
          </tr>
          <tr>
            <td>searchable</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Optional label for the input.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              Puts a disabled class on the form field and disables the input.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Checkboxes and Radios</h2>
      <pre><code>import { Checkbox, Radio } from 'streamlabs-beaker';

components: {
  Checkbox,
  Radio
}</code></pre>

      <div class="section">
        <h2>Single Checkbox</h2>

        <DemoSection title="Checkbox" :code="demoCode">
          <template #components>
            <Checkbox
              v-model="checkboxValue1"
              id="checkbox"
              name="checkbox"
              label="Checkbox Label"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Checkbox Group</h2>

        <DemoSection title="Checkbox Group" :code="demoCode">
          <template #components>
            <div class="s-checkbox-group">
              <Checkbox
                v-model="checkboxValue2"
                id="checkbox1"
                name="checkbox1"
                label="Checkbox Label 1"
              />
              <Checkbox
                v-model="checkboxValue3"
                id="checkbox2"
                name="checkbox2"
                label="Checkbox Label 2"
              />
              <Checkbox
                v-model="checkboxValue4"
                id="checkbox3"
                name="checkbox3"
                label="Checkbox Label 3"
              />
            </div>
          </template>
        </DemoSection>
      </div>
    </div>

    <div class="section">
      <h2>Radios</h2>

      <DemoSection title="Radios" :code="demoCode">
        <template #components>
          <div class="s-checkbox-group">
            <Radio
              v-model="radioValue"
              id="radio1"
              name="radioGroup"
              label="Enabled"
              :val="true"
            />
            <Radio
              v-model="radioValue"
              id="radio2"
              name="radioGroup"
              label="Disabled"
              :val="false"
            />
          </div>
        </template>
      </DemoSection>

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
            <td>id</td>
            <td>string</td>
            <td>""</td>
            <td>Indentifier for associated label.</td>
          </tr>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>""</td>
            <td>Name for radio group.</td>
          </tr>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>null</td>
            <td>Optional label for the radio input.</td>
          </tr>
          <tr>
            <td>val</td>
            <td>string, boolean</td>
            <td>""</td>
            <td>Radio input value when selected</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Status Switch</h2>
      <pre><code>import { StatusSwitch } from 'streamlabs-beaker';

components: {
  StatusSwitch
}</code></pre>

      <div class="section">
        <DemoSection title="Status Switch" :code="demoCode">
          <template #components>
            <FormGroup>
              <StatusSwitch
                slot="input"
                v-model="statusValue"
                label="Switch Label"
              />

              <StatusSwitch
                slot="input"
                size="small"
                v-model="statusValue"
                label="Small Switch Label"
              />
            </FormGroup>
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
            <td>value</td>
            <td>boolean</td>
            <td>false</td>
            <td>Available for v-model 2-way data binding.</td>
          </tr>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>null</td>
            <td>Optional label for the input.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Other available sizes. Current alternate size option:
              <code>small</code>.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Image Input Picker</h2>
      <pre><code>import { ImagePickerInput } from 'streamlabs-beaker';

components: {
  ImagePickerInput
}</code></pre>

      <div class="section">
        <h3>Default</h3>
        <p>
          By default, the image input picker is setup to have our Alert Box
          layout styles as the options.
        </p>

        <DemoSection title="Default Image Input Picker" :code="demoCode">
          <template #components>
            <ImagePickerInput v-model="layoutValue" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Custom</h3>
        <p>
          You can pass in any options you'd like with the options prop. This is
          an example using our Jar options.
        </p>
        <DemoSection title="Custom Image Input Picker" :code="demoCode">
          <template #components>
            <ImagePickerInput v-model="jarValue" :options="options" />
          </template>
        </DemoSection>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

import Checkbox from "./../components/Checkbox.vue";
import DemoSection from "./../components/DemoSection.vue";
import FormGroup from "./../components/FormGroup.vue";
import ImagePickerInput from "./../components/ImagePickerInput.vue";
import InputsCode from "./Inputs.vue?raw";
import Radio from "./../components/Radio.vue";
import Selector from "./../components/Selector.vue";
import StatusSwitch from "./../components/StatusSwitch.vue";
import TaggingInput from "./../components/TaggingInput.vue";
import TextArea from "./../components/TextArea.vue";
import TextInput from "./../components/TextInput.vue";
import varSearch from "./../components/cloudbotvariables.json";
import VariableMenu from "./../components/VariableMenu.vue";

@Component({
  components: {
    Checkbox,
    DemoSection,
    FormGroup,
    ImagePickerInput,
    Radio,
    Selector,
    StatusSwitch,
    TaggingInput,
    TextArea,
    TextInput,
    VariableMenu
  }
})
export default class Inputs extends Vue {
  demoCode = InputsCode;
  data = "";

  radioValue = true;

  checkboxValue1 = true;
  checkboxValue2 = false;
  checkboxValue3 = true;
  checkboxValue4 = false;
  selected = "Option A";
  selectedGroup = "Option A";
  multipleSelected = ["Option B", "Option C"];
  optionGroups = [
    {
      group: "Group A",
      items: ["Option A", "Option B", "Option C"]
    },
    {
      group: "Group B",
      items: ["Option A", "Option B", "Option C"]
    },
    {
      group: "Group C",
      items: ["Option A", "Option B", "Option C"]
    }
  ];
  optionSelected = ["Glass Pint", "Glass Beer"];
  objectSelected = {
    value: "glass-pint",
    title: "Glass Pint",
    image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"
  };
  statusValue = true;
  testingInput = null;

  layoutValue = "above";
  jarValue = "glass-pint";

  // For Variable Menu
  varData = varSearch;
  variAreaValue = "";
  variTextValue = "";

  // Text inputs
  textInputValue = "test";
  numberInputValue = 0;
  emailInputValue = "";
  passwordInputValue = "";
  errorTextInputValue = "";
  textAreaInputValue = "";

  textInputPlaceholder = "Placeholder";
  emailInputPlaceholder = "Placeholder";
  passwordInputPlaceholder = "Placeholder";

  options = [
    {
      value: "glass-pint",
      title: "Glass Pint",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"
    },
    {
      value: "glass-beer",
      title: "Glass Beer",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer.png"
    },
    {
      value: "glass-beer-2",
      title: "Glass Beer 2",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer2.png"
    },
    {
      value: "glass-coffee",
      title: "Glass Coffee",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee.png"
    },
    {
      value: "glass-fancy",
      title: "Glass Fancy",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-fancy.png"
    },
    {
      value: "glass-whiskey",
      title: "Glass Whiskey",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-whiskey.png"
    },
    {
      value: "glass-burbon",
      title: "Glass Burbon",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-burbon.png"
    },
    {
      value: "glass-martini",
      title: "Glass Martini",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-martini.png"
    },
    {
      value: "glass-beer-3",
      title: "Glass Beer 3",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer3.png"
    },
    {
      value: "glass-wine",
      title: "Glass Wine",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-wine.png"
    },
    {
      value: "glass-baileys",
      title: "Glass Baileys",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-baileys.png"
    },
    {
      value: "glass-champagne",
      title: "Glass Champagne",
      image:
        "https://cdn.streamlabs.com/static/tip-jar/jars/glass-champagne.png"
    },
    {
      value: "glass-coffee-no-handle",
      title: "Glass Coffee No Handle",
      image:
        "https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee-no-handle.png"
    },
    {
      value: "glass-plinko",
      title: "Glass Plinko",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-plinko.png"
    },
    {
      value: "glass-stocking",
      title: "Glass Stocking",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-stocking.png"
    },
    {
      value: "glass-snowman",
      title: "Glass Snowman",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-snowman.png"
    }
  ];

  show = [
    "Bounce",
    "Bounce In",
    "Bounce In Down",
    "Bounce In Left",
    "Bounce In Right",
    "Bounce In Up",
    "Fade In",
    "Fade In Down",
    "Fade In Down Big",
    "Fade In Left",
    "Fade In Left Big",
    "Fade In Right",
    "Fade In",
    "Fade In Up",
    "Fade In Up Big"
  ];
}
<\/script>
`;
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
let StatusSwitch$1 = class StatusSwitch extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "label");
    __publicField(this, "size");
    __publicField(this, "value");
  }
};
__decorateClass$4([
  Prop()
], StatusSwitch$1.prototype, "label", 2);
__decorateClass$4([
  Prop()
], StatusSwitch$1.prototype, "size", 2);
__decorateClass$4([
  Prop({ default: false })
], StatusSwitch$1.prototype, "value", 2);
StatusSwitch$1 = __decorateClass$4([
  Component({})
], StatusSwitch$1);
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-status-switch",
    class: {
      enabled: !!_vm.value
    },
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        return _vm.$emit("input", !_vm.value);
      },
      "keydown": [function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
          return null;
        $event.preventDefault();
        return _vm.$emit("input", !_vm.value);
      }, function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter"))
          return null;
        $event.preventDefault();
        return _vm.$emit("input", !_vm.value);
      }]
    }
  }, [_c("div", {
    staticClass: "s-status-switch__paddle",
    class: {
      "s-status-switch__paddle--small": _vm.size === "small"
    }
  }), _vm.label ? _c("label", [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._t("default")], 2);
};
var staticRenderFns$4 = [];
const StatusSwitch_vue_vue_type_style_index_0_lang = "";
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  StatusSwitch$1,
  render$4,
  staticRenderFns$4,
  false,
  __vue2_injectStyles$4,
  null,
  null,
  null
);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
const StatusSwitch2 = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
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
let TextArea$1 = class TextArea extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "name");
    __publicField(this, "label");
    __publicField(this, "placeholder");
    __publicField(this, "value");
    __publicField(this, "error");
    __publicField(this, "helpText");
    __publicField(this, "cols");
    __publicField(this, "rows");
    __publicField(this, "maxLength");
    __publicField(this, "autoResize");
    __publicField(this, "maxHeight");
    __publicField(this, "localValue", "");
    __publicField(this, "hasScroll", false);
  }
  created() {
    this.$parent.$on("update", this.updateValue);
  }
  mounted() {
    this.updateSize();
    this.updateCountPos();
  }
  focus() {
    this.$refs.textArea.focus();
  }
  get filteredListeners() {
    return omit(this.$listeners, ["input"]);
  }
  get currentLength() {
    return this.value.length;
  }
  updated() {
    this.updateCountPos();
  }
  onValueChange(event) {
    this.$emit("input", event.target.value);
    this.updateSize();
  }
  onKeyUp(event) {
    this.$emit("keyup", event.target.selectionStart);
  }
  onFocus(event) {
    this.$emit("focus", event.target.selectionStart);
  }
  onClick(event) {
    this.$emit("click", event.target.selectionStart);
  }
  updateValue(val) {
    this.$refs.textArea.value = val;
    this.$emit("input", val);
  }
  updateSize() {
    if (this.autoResize) {
      this.$refs.textArea.style.cssText = "height:auto;";
      const newHeight = this.$refs.textArea.scrollHeight > this.maxHeight && this.maxHeight ? this.maxHeight + 2 : this.$refs.textArea.scrollHeight + 2;
      this.$refs.textArea.style.cssText = "height:" + newHeight + "px";
    }
  }
  updateCountPos() {
    this.$nextTick(() => {
      const textArea = this.$refs.textArea;
      this.hasScroll = textArea.scrollHeight > textArea.clientHeight;
    });
  }
};
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "name", 2);
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "label", 2);
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "placeholder", 2);
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "value", 2);
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "error", 2);
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "helpText", 2);
__decorateClass$3([
  Prop({ default: 100 })
], TextArea$1.prototype, "cols", 2);
__decorateClass$3([
  Prop({ default: 3 })
], TextArea$1.prototype, "rows", 2);
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "maxLength", 2);
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "autoResize", 2);
__decorateClass$3([
  Prop()
], TextArea$1.prototype, "maxHeight", 2);
TextArea$1 = __decorateClass$3([
  Component({})
], TextArea$1);
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-form-area",
    class: {
      "s-form-area--with-label": _vm.label
    }
  }, [_c("div", {
    staticClass: "s-form-area__container"
  }, [_c("textarea", _vm._g({
    ref: "textArea",
    class: {
      "s-form-area__input": true,
      "s-form-area__input--error": !!_vm.error,
      "s-form-area__input--count": !!_vm.maxLength
    },
    attrs: {
      "name": _vm.name,
      "cols": _vm.cols,
      "rows": _vm.rows,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxLength
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.onValueChange,
      "focus": _vm.onFocus,
      "click": _vm.onClick,
      "keyup": _vm.onKeyUp
    }
  }, _vm.filteredListeners)), _vm.label ? _c("label", {
    staticClass: "s-form-area__label",
    class: {
      "s-form-area__label--top": _vm.value !== ""
    }
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm.error ? _c("div", {
    staticClass: "s-form-area__input-error"
  }, [_c("i", {
    staticClass: "icon-error"
  }), _vm._v(" " + _vm._s(_vm.error) + " ")]) : _vm._e(), _c("div", {
    staticClass: "s-form-area__characters",
    class: {
      "s-form-area__characters--scrollbar": _vm.hasScroll
    }
  }, [_vm.maxLength ? _c("span", {
    staticClass: "s-form-area__char-count"
  }, [_vm._v(_vm._s(_vm.currentLength) + "/" + _vm._s(_vm.maxLength))]) : _vm._e()])]), _c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.helpText,
      expression: "helpText"
    }],
    staticClass: "s-form-area__help-text"
  }, [_vm._v(_vm._s(_vm.helpText))])]);
};
var staticRenderFns$3 = [];
const TextArea_vue_vue_type_style_index_0_lang = "";
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  TextArea$1,
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
const TextArea2 = /* @__PURE__ */ function() {
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
let TaggingInput$1 = class TaggingInput extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "label");
    __publicField(this, "placeholder");
    __publicField(this, "buttonText");
    __publicField(this, "buttonVariation");
    __publicField(this, "value");
    __publicField(this, "text");
    __publicField(this, "inputValidation");
    __publicField(this, "prefix");
    __publicField(this, "tagVariation");
    __publicField(this, "maxItems");
    __publicField(this, "input", "");
    __publicField(this, "tags", []);
  }
  watchValue(newValue) {
    this.tags = newValue;
  }
  watchText(newValue) {
    this.input = newValue;
  }
  onAdd() {
    if (this.$validator.errors.items.length !== 0) {
      this.$emit("error", this.$validator.errors.items, false);
      return;
    }
    if (this.tags.length >= this.maxItems) {
      this.$emit("error", ["Max items reached"], true);
      return;
    }
    let inputValue = this.input.trim();
    const found = this.tags.find((v) => {
      if (this.prefix && !inputValue.startsWith(this.prefix)) {
        return v.toLowerCase() === this.prefix + inputValue.trim().toLowerCase();
      } else {
        return v.toLowerCase() === inputValue.trim().toLowerCase();
      }
    });
    if (!found && inputValue.length !== 0) {
      if (this.prefix && !inputValue.startsWith(this.prefix)) {
        inputValue = this.prefix + inputValue;
      }
      this.tags.push(inputValue);
      this.input = "";
      this.emitTagEvents("add");
    }
  }
  onRemove(index2) {
    this.tags.splice(index2, 1);
    this.emitTagEvents("remove");
  }
  emitTagEvents(...events) {
    ["input", "change", "update:value", ...events].forEach(
      (event) => this.$emit(event, this.tags)
    );
  }
};
__decorateClass$2([
  Prop()
], TaggingInput$1.prototype, "name", 2);
__decorateClass$2([
  Prop()
], TaggingInput$1.prototype, "label", 2);
__decorateClass$2([
  Prop()
], TaggingInput$1.prototype, "placeholder", 2);
__decorateClass$2([
  Prop({ default: "Add Tag" })
], TaggingInput$1.prototype, "buttonText", 2);
__decorateClass$2([
  Prop({ default: "default" })
], TaggingInput$1.prototype, "buttonVariation", 2);
__decorateClass$2([
  Prop({ default: () => [] })
], TaggingInput$1.prototype, "value", 2);
__decorateClass$2([
  Prop({ default: "" })
], TaggingInput$1.prototype, "text", 2);
__decorateClass$2([
  Prop()
], TaggingInput$1.prototype, "inputValidation", 2);
__decorateClass$2([
  Prop()
], TaggingInput$1.prototype, "prefix", 2);
__decorateClass$2([
  Prop({ default: "default" })
], TaggingInput$1.prototype, "tagVariation", 2);
__decorateClass$2([
  Prop({ default: 25 })
], TaggingInput$1.prototype, "maxItems", 2);
__decorateClass$2([
  Watch("value", { immediate: true })
], TaggingInput$1.prototype, "watchValue", 1);
__decorateClass$2([
  Watch("text", { immediate: true })
], TaggingInput$1.prototype, "watchText", 1);
TaggingInput$1 = __decorateClass$2([
  Component({
    components: {
      TextInput,
      TextArea: TextArea2,
      Button
    }
  })
], TaggingInput$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-tagging-input"
  }, [_c("div", {
    staticClass: "s-tagging-input__container"
  }, [_c("text-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: _vm.inputValidation,
      expression: "inputValidation"
    }],
    attrs: {
      "slot": "input",
      "name": _vm.name,
      "label": _vm.label,
      "placeholder": _vm.placeholder,
      "type": "text",
      "error": _vm.errors.first(_vm.name)
    },
    on: {
      "input": function($event) {
        return _vm.$emit("update:text", $event);
      },
      "keydown": function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter"))
          return null;
        $event.preventDefault();
        return _vm.onAdd.apply(null, arguments);
      }
    },
    slot: "input",
    model: {
      value: _vm.input,
      callback: function($$v) {
        _vm.input = $$v;
      },
      expression: "input"
    }
  }), _c("Button", {
    attrs: {
      "title": _vm.buttonText,
      "type": "button",
      "variation": _vm.buttonVariation,
      "disabled": _vm.value.length >= _vm.maxItems
    },
    on: {
      "click": _vm.onAdd
    }
  })], 1), _c("div", {
    staticClass: "s-tagging-input__tags"
  }, _vm._l(_vm.value, function(tag, index2) {
    return _c("div", {
      key: index2,
      staticClass: "s-tagging-input-tag",
      class: [`s-tagging-input-tag--${_vm.tagVariation}`]
    }, [_c("div", {
      staticClass: "s-tagging-input-tag__text"
    }, [_vm._v(_vm._s(tag))]), _c("i", {
      staticClass: "s-tagging-input-tag__icon icon-close",
      on: {
        "click": function($event) {
          return _vm.onRemove(index2);
        }
      }
    })]);
  }), 0)]);
};
var staticRenderFns$2 = [];
const TaggingInput_vue_vue_type_style_index_0_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  TaggingInput$1,
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
const TaggingInput2 = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
const varSearch = [
  {
    variable: "{min}",
    description: "Replaces {min} with the minimum amount of loyalty that has to be bet.",
    example: 'Betting is open for "{title}" use {command} <{options}> <{min}-{max}> to register your bet. ',
    result: 'Betting is open for "How many tries will this boss take me?" use !bet <1 | 2 | 3 | 4 | 5+> <10-1000> to register your bet',
    tags: [
      "Betting"
    ]
  },
  {
    variable: "{max}",
    description: "Replaces {max} with the maximum amount of loyalty that can be bet.",
    example: 'Betting is open for "{title}" use {command} <{options}> <{min}-{max}> to register your bet. ',
    result: 'Betting is open for "How many tries will this boss take me?" use !bet <1 | 2 | 3 | 4 | 5+> <10-1000> to register your bet',
    tags: [
      "Betting"
    ]
  },
  {
    variable: "{option}",
    description: "Replaces {option} the winning option of a poll or betting.",
    example: "{option} was the most voted option of the poll with {amount}% of the votes.",
    result: "Legend of Zelda was the most voted option of the poll with 56% of the votes.",
    tags: [
      "Betting",
      "Poll"
    ]
  },
  {
    variable: "{options}",
    description: "Replaces {options} with all the available options for a poll or betting.",
    example: 'A poll has opened for "Which started should I pick?" use !vote <{options}> to vote.',
    result: 'A poll has opened for "Which started should I pick?" use !vote <Pikachu | Squirtle | Charmander> to vote.',
    tags: [
      "Betting",
      "Poll"
    ]
  },
  {
    variable: "{cooldown}",
    description: "Replaces {cooldown} variable with command's remaining cooldown.",
    example: "{user.name} -> {command} is on cooldown for {cooldown} seconds.",
    result: "Streamlabs -> !test is on cooldown for 20 seconds.",
    tags: [
      "Command Settings"
    ]
  },
  {
    variable: "{command}",
    description: "Replaces {command} with current command that's being used.",
    example: "This command is called {command}",
    result: "This command is called !test",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{user.id}",
    description: "Replaces {user.id} variable with the id of the current user.",
    example: "My Youtube Channel Id is https://youtube.com/channel/{user.id}",
    result: "My Youtube Channel Id is https://youtube.com/channel/UCNL8jaJ9hId96P13QmQXNtA",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{user.name}",
    description: "Replaces {user.name} variable with the viewers name.",
    example: "My name is {user.name}",
    result: "My name is Streamlabs",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{randnum.<min>-<max>}",
    description: "Replaces {randnum.<min>-<max>} variable the random number between min & max.",
    example: "{user.name}, you have rolled {randnum.1-100}.",
    result: "Streamlabs, you have rolled 100.",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{target.name}",
    description: "Replaces {target.name} variable with the target's name.",
    example: "{user.name} gives {target.name} a hug!",
    result: "Streamlabs gives RedUnicornCat38745 a hug!",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{arg}",
    description: "Replaced by a word in a specific position, arg is denoted by a number.",
    example: "Your first three words: {1} {2} {3}",
    result: "Your first three words: I am going",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{start:end}",
    description: "Replaced with all the words between the start and end.",
    example: "The colors you picked are: {1:3}",
    result: "he colors you picked are: Red Green Blue",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{uptime}",
    description: "Replaces {uptime} with how long the stream has been live for. (Twitch/Mixer only)",
    example: "The stream has been live for {uptime}",
    result: "The stream has been live for 10 minutes 50 seconds",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{time.<continent>/<city>}",
    description: "Replaces {time.<continent>/<city>} variable with the current time for that specific continent/city.",
    example: "Right now it is {time.Australia/Sydney} in Sydney.",
    result: "Right now it is 12:00 in Sydney.",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{readapi.<url_here>}",
    description: "Replaces {readapi.<url_here>} variable with the data from the API endpoint.",
    example: "The stream has been live for {readapi.https://decapi.me/twitch/uptime?channel=streamlabs}",
    result: "The stream has been live for 17 hours, 50 minutes, 55 seconds",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{merch.link}",
    description: "Replaces {merch.link} with your Streamlabs Merch link.",
    example: "You can checkout my merch store over at {merch.link}",
    result: "You can checkout my merch store over at https://streamlabs.com/streamlabs#/merch",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{donation.link}",
    description: "Replaces {donation.link} with your Streamlabs donation link.",
    example: "Do you want to support the stream? You can do so by going to {donation.link}",
    result: "Do you want to support the stream? You can do so by going to https://streamlabs.com/streamlabs",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{facemask.link}",
    description: "Replaces {facemask.link} with your Streamlabs Facemask Donation link.",
    example: "Do you want to put awesome masks on my face? Go to {facemask.link}",
    result: "Do you want to put awesome masks on my face? Go to https://streamlabs.com/streamlabs/masks",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{channel.name}",
    description: "Replaces {channel.name} with your Channel name.",
    example: "Our channel is {channel.name}",
    result: "Our channel is Streamlabs",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{streamlabels.<filename>}",
    description: "Replaces {streamlabels.<filename>} with the data from the streamlabels file.",
    example: "Session Top Donator: {streamlabels.session_top_donator}",
    result: "Session Top Donator: AnkhHeart",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{count <name>}",
    description: "Increments the counter by one and displays it.",
    example: "Deaths: {count deaths}",
    result: "Deaths: 2",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{count <name> +<value>}",
    description: "Increments the counter by your value and displays it.",
    example: "Deaths: {count deaths +5}",
    result: "Deaths: 7",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{count <name> -<value>}",
    description: "Decrements the counter by your value and displays it.",
    example: "Deaths: {count deaths -5}",
    result: "Deaths: 2",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{count <name> <value>}",
    description: "Sets the counter to your value and displays it.",
    example: "Deaths: {count deaths 100}",
    result: "Deaths: 100",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{getcount <name>}",
    description: "Displays the specified counter.",
    example: "Deaths: {count deaths}",
    result: "Deaths: 100",
    tags: [
      "Custom Commands"
    ]
  },
  {
    variable: "{channel.subpoints}",
    description: "Replaces {channel.subpoints} with channel's sub points.",
    example: "Sub Count: {channel.subpoints}",
    result: "Sub Count: 100",
    tags: [
      "Custom Commands",
      "Twitch"
    ]
  },
  {
    variable: "{user.followage}",
    description: "Replaces {user.followage} with the amount of time the user has been following the channel.",
    example: "{user.name} has been following the channel for {user.followage}",
    result: "AnkhHeart has been following the channel for 2 days 3 weeks",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{target.followage}",
    description: "Replaces {target.followage} with the amount of time the target has been following the channel.",
    example: "{target.name} has been following the channel for {target.followage}",
    result: "AnkhHeart has been following the channel for 2 days 3 weeks",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{channel.title}",
    description: "Replaces {channel.title} with the title of the stream.",
    example: "The title is {channel.title}",
    result: "The title is Playing Apex Legends o.o",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{user.title}",
    description: "Replaces {user.title} with the user's stream title.",
    example: "The title is {user.title}",
    result: "The title is Playing Apex Legends o.o",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{target.title}",
    description: "Replaces {target.title} with the target's stream title.",
    example: "The title is {target.title}",
    result: "The title is Playing Apex Legends o.o",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{touser.title}",
    description: "Replaces {touser.title} with the target's or user's stream title.",
    example: "The title is {touser.title}",
    result: "The title is Playing Apex Legends o.o",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{channel.game}",
    description: "Replaces {channel.game} with the currently played game.",
    example: "The game is {channel.game}",
    result: "The game is Apex Legends",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{user.game}",
    description: "Replaces {user.game} with user's last played game.",
    example: "The game is {user.game}",
    result: "The game is Apex Legends",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{target.game}",
    description: "Replaces {target.game} with target's last played game.",
    example: "The game is {target.game}",
    result: "The game is Apex Legends",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{touser.game}",
    description: "Replaces {touser.game} with target's or user's last played game.",
    example: "The game is {touser.game}",
    result: "The game is Apex Legends",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{channel.followers}",
    description: "Replaces {channel.followers} with channel's follower count.",
    example: "Follower Count: {channel.followers}",
    result: "Follower Count: 123",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{user.followers}",
    description: "Replaces {user.followers} with user's follower count.",
    example: "Follower Count: {user.followers}",
    result: "Follower Count: 123",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{target.followers}",
    description: "Replaces {target.followers} with target's follower count.",
    example: "Follower Count: {target.followers}",
    result: "Follower Count: 123",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{touser.followers}",
    description: "Replaces {touser.followers} with target's or user's follower count.",
    example: "Follower Count: {touser.followers}",
    result: "Follower Count: 123",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{channel.subs}",
    description: "Replaces {channel.subs} with channel's sub count.",
    example: "Sub Count: {channel.subs}",
    result: "Sub Count: 100",
    tags: [
      "Custom Commands",
      "Twitch",
      "Mixer"
    ]
  },
  {
    variable: "{reward}",
    description: "Replaces {reward} with the amount of currency you have earned through gamble.",
    example: "Rolled {amount}, @{user.name} won {reward} {loyalty.name} and now has {user.points} {loyalty.name}",
    result: "Rolled 100, @Streamlabs won 200 points and now has 500 points.",
    tags: [
      "Gamble"
    ]
  },
  {
    variable: "{prize}",
    description: "Replaces {prize} with the giveaway prize. Only works with giveaways.",
    example: "A {prize} raffle has started for {permission}. Use {command} to enter the raffle.",
    result: "A t-shirt raffle has started for everyone. Use !raffle to enter the raffle.",
    tags: [
      "Giveaways"
    ]
  },
  {
    variable: "{permission}",
    description: "Replaces {permission} with the permission required to join a Giveaway.",
    example: "A {prize} raffle has started for {permission}. Use {command} to enter the raffle.",
    result: "A t-shirt raffle has started for everyone. Use !raffle to enter the raffle.",
    tags: [
      "Giveaways"
    ]
  },
  {
    variable: "{amount}",
    description: "Replaces {amount} variable with donation amount, tickets, months, etc..",
    example: "@{user.name}, you received {amount} ticket(s)!",
    result: "@Streamlabs, you received 10 ticket(s)!",
    tags: [
      "Giveaways"
    ]
  },
  {
    variable: "{link}",
    description: "Replaces {link} with your Merch giveaway redemption link.",
    example: "You can redeem your giveaway prize over at {link}",
    result: "You can redeem your giveaway prize over at https://streamlabs.com/streamlabs?redemption=true#/merch",
    tags: [
      "Giveaways"
    ]
  },
  {
    variable: "{timer}",
    description: "Replaces {timer} with the remaining time of a giveaway/poll/betting countdown timer. Only available in the repeat message.",
    example: 'A Poll is going on for "{title}" use {command} <{options}> to vote. You have {timer} seconds left to join.',
    result: 'A Poll is going on for "What starter should I pick?" use !vote <Squirtle | Charmander | Bulbasaur> to vote. You have 600 seconds left to join.',
    tags: [
      "Giveaways",
      "Betting",
      "Poll"
    ]
  },
  {
    variable: "{results}",
    description: "Replaces {results} with the names of the survivors or a heist or poll results.",
    example: "A few managed to survive: {results}",
    result: "A few managed to survive: SOWHOYOUdotCOM (200), AnkhHeart (200)",
    tags: [
      "Heist",
      "Poll"
    ]
  },
  {
    variable: "{duration}",
    description: "Replaces {duration} with the duration of the permit.",
    example: "@{target.name}, You have been given {duration} seconds to post a link!",
    result: "@AnkhHeart, You have 60 seconds to post a link!",
    tags: [
      "Link Protection"
    ]
  },
  {
    variable: "{loyalty.toppoints}",
    description: "Replaces {loyalty.toppoints} with a list of the top 10 users by points.",
    example: "Top {amount} Points: {loyalty.toppoints}.",
    result: "Top 10 Points: 1. AnkhHeart (1000), 2. H4rsh4 (999), 3. MissBlackBear (990), 4. Raichu (989), ... ",
    tags: [
      "Loyalty"
    ]
  },
  {
    variable: "{loyalty.tophours}",
    description: "Replaces {loyalty.tophours} with a list of the top 10 users by hours.",
    example: "Top {amount} Points: {loyalty.tophours}.",
    result: "Top 10 Points: 1. AnkhHeart (5.8), 2. H4rsh4 (4.2), 3. MissBlackBear (3.5), 4. Raichu (3.4), ... ",
    tags: [
      "Loyalty"
    ]
  },
  {
    variable: "{user.points}",
    description: "Replaces {user.points} with the user's loyalty.",
    example: "@{user.name}, you have {user.points} {loyalty.name}.",
    result: "@Streamlabs, you have 1000 points.",
    tags: [
      "Loyalty",
      "Custom Commands"
    ]
  },
  {
    variable: "{user.time}",
    description: "Replaces {user.time} with the user's time watched.",
    example: "@{user.name} has watched the stream for {user.time} minutes.",
    result: "@Streamlabs has watched the stream for 2 hours.",
    tags: [
      "Loyalty",
      "Custom Commands"
    ]
  },
  {
    variable: "{loyalty.name}",
    description: "Replaces {loyalty.name} with the loyalty name.",
    example: "My loyalty is called {loyalty.name}.",
    result: "My loyalty is called points.",
    tags: [
      "Loyalty",
      "Custom Commands"
    ]
  },
  {
    variable: "{media.name}",
    description: "Replaces {media.name} with the media requests title.",
    example: '@{user.name}, "{media.name}" has been added to the queue.',
    result: '@Streamlabs, "Electric Swing Circus - Golden Hour" has been added to the queue.',
    tags: [
      "Media Share"
    ]
  },
  {
    variable: "{media.requestedby}",
    description: "Replaces {media.requestedby} with the name of who requested the media.",
    example: '@{user.name}, currently "{media.name}" is playing which was requested by {media.requestedby}.',
    result: '@Streamlabs, currently "Electric Swing Circus - Golden Hour" is playing which was requested by AnkhHeart.',
    tags: [
      "Media Share"
    ]
  },
  {
    variable: "{currency}",
    description: "Replaces {currency} with current selected currency.",
    example: "@{user.name} just tipped {amount} {currency}!",
    result: "@Streamlabs just tipped 20 USD!",
    tags: [
      "Notifications"
    ]
  },
  {
    variable: "{position}",
    description: "Replaces {position} with the queue position of the user.",
    example: "@{user.name}, you have joined the queue at position #{position}.",
    result: "@Streamlabs, you have joined the queue at position #1.",
    tags: [
      "Queue"
    ]
  },
  {
    variable: "{users}",
    description: "Replaces {users} with all the users that are up next in the queue.",
    example: "Next up: {users}",
    result: "Next up: sowhoyoudotcom, ankhheart",
    tags: [
      "Queue"
    ]
  },
  {
    variable: "{title}",
    description: "Replaces {title} with the title of the Poll, Bet or Queue.",
    example: "A queue has opened for {title}. Type {command} <note> to join!",
    result: "A queue has opened for Warframe. Type !join <note> to join!",
    tags: [
      "Queue",
      "Poll",
      "Betting"
    ]
  },
  {
    variable: "{quote.id}",
    description: "Replaces {quote.id} with the id of the quote.",
    example: "Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",
    result: 'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',
    tags: [
      "Quotes"
    ]
  },
  {
    variable: "{quote.game}",
    description: "Replaces {quote.game} with the game of the quote.",
    example: "Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",
    result: 'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',
    tags: [
      "Quotes"
    ]
  },
  {
    variable: "{quote.msg}",
    description: "Replaces {quote.msg} with quote itself.",
    example: "Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",
    result: 'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',
    tags: [
      "Quotes"
    ]
  },
  {
    variable: "{quote.date}",
    description: "Replaces {quote.date} with quote's  date.",
    example: "Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",
    result: 'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',
    tags: [
      "Quotes"
    ]
  }
];
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
let VariableMenu$1 = class VariableMenu extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "result", []);
    __publicField(this, "queryLength", 0);
    __publicField(this, "phaseOne", false);
    __publicField(this, "phaseTwo", false);
    __publicField(this, "searchFromClick", false);
    __publicField(this, "fuse", null);
    __publicField(this, "value", "");
    __publicField(this, "currentResult", 0);
    __publicField(this, "cursorPos", 0);
    __publicField(this, "input_cursor");
    __publicField(this, "jsonSearch");
    __publicField(this, "searchData", this.jsonSearch);
    __publicField(this, "search");
    __publicField(this, "eventName");
    __publicField(this, "inputChangeEventName");
  }
  get options() {
    let options = {
      caseSensitive: false,
      includeScore: true,
      includeMatches: false,
      tokenize: false,
      matchAllTokens: false,
      findAllMatches: true,
      shouldSort: true,
      threshold: 0.2,
      location: 1,
      distance: 10,
      maxPatternLength: 12,
      minMatchCharLength: 0,
      keys: ["variable"]
    };
    return options;
  }
  get noResults() {
    if (this.result.length === 0 && this.value != "") {
      return true;
    } else {
      return false;
    }
  }
  get limitedResult() {
    return this.result.reverse();
  }
  get selectedResult() {
    return this.limitedResult[this.currentResult].item.variable;
  }
  get currentLength() {
    return this.value.length;
  }
  get calcTransform() {
    let nudge = this.$refs.variableMenu.offsetHeight;
    return "transform: translateY(-" + nudge + "px);";
  }
  afterOpen(element) {
    element.style.height = "auto";
  }
  open(element) {
    let width = getComputedStyle(element).width;
    element.style.width = width;
    element.style.position = `absolute`;
    element.style.visibility = `hidden`;
    element.style.height = `auto`;
    let height = getComputedStyle(element).height;
    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = height;
    });
  }
  close(element) {
    let height = getComputedStyle(element).height;
    element.style.height = height;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = 0;
    });
  }
  watchCursor(val) {
    this.cursorPos = val.target.selectionStart;
    this.getSearchString();
    if (this.noResults)
      this.playClosingSequence();
    if (this.value.length <= 0)
      this.playClosingSequence();
  }
  watchInput(val) {
    this.value = val.target.value;
  }
  watchValue() {
    this.$parent.$emit(this.inputChangeEventName, this.value);
    this.$emit(this.inputChangeEventName, this.value);
    if (this.value.includes("{")) {
      this.getSearchString();
      if (this.noResults)
        this.playClosingSequence();
      if (this.value.length <= 0)
        this.playClosingSequence();
    }
    if (this.value === "")
      this.result = [];
  }
  watchResult(val, oldVal) {
    if (this.noResults || this.value == "" || val.length != oldVal.length) {
      this.currentResult = this.limitedResult.length - 1;
    }
    this.$emit(this.eventName, this.result);
    this.$parent.$emit(this.eventName, this.result);
    this.noResults ? this.playClosingSequence() : this.playOpeningSequence();
  }
  getSearchString() {
    if (this.value.trim() === "") {
      this.result = [];
    } else {
      const cursorPos = this.cursorPos;
      const bracketOpen = this.value.lastIndexOf("{", cursorPos - 1);
      const searchValue = this.value.substring(bracketOpen, cursorPos);
      const bracketClose = searchValue.lastIndexOf("}");
      if (cursorPos > bracketOpen && bracketClose === -1 && bracketOpen !== -1) {
        this.result = this.fuse.search(searchValue);
        this.queryLength = searchValue.length;
      } else {
        this.playClosingSequence();
      }
    }
  }
  keyEvent(event) {
    if (event.keyCode === 38 && this.currentResult > 0) {
      if (this.currentResult <= this.limitedResult.length - 7) {
        this.$refs.resultArea.scrollBy(0, -32);
      }
      event.preventDefault();
      event.stopPropagation();
      this.currentResult--;
    }
    if (event.keyCode === 40 && this.currentResult < this.limitedResult.length - 1) {
      if (this.currentResult >= 6) {
        this.$refs.resultArea.scrollBy(0, 32);
      }
      event.stopPropagation();
      this.currentResult++;
    }
    if (event.keyCode === 13 && this.phaseOne) {
      if (this.result != []) {
        event.preventDefault();
        event.stopPropagation();
        this.mergeValues();
      }
    }
    if (event.keyCode === 27 && this.phaseOne) {
      this.blurSearch();
    }
    if (event.keyCode === 9 && this.phaseOne) {
      if (this.result != []) {
        event.preventDefault();
        event.stopPropagation();
        this.mergeValues();
      }
    }
  }
  mergeValues() {
    const cursor = this.cursorPos;
    this.value = this.value.substring(0, cursor) + this.selectedResult.substring(this.queryLength) + this.value.substring(cursor);
    setTimeout(() => {
      this.result = [];
    });
    this.$emit("update", this.value);
    if (this.searchFromClick)
      !this.searchFromClick;
  }
  playClosingSequence() {
    if (this.phaseTwo) {
      setTimeout(() => {
        this.phaseTwo = !this.phaseTwo;
      }, 100);
      setTimeout(() => {
        this.phaseOne = !this.phaseOne;
      }, 200);
    }
  }
  playOpeningSequence() {
    if (!this.phaseOne) {
      this.phaseOne = !this.phaseOne;
      setTimeout(() => {
        this.phaseTwo = !this.phaseTwo;
      }, 100);
    }
  }
  initFuse() {
    this.fuse = new Fuse(this.searchData, this.options);
    if (this.search) {
      this.value = this.search;
    }
  }
  blurSearch() {
    this.currentResult = 0;
  }
  mounted() {
    this.initFuse();
  }
};
__decorateClass$1([
  Prop()
], VariableMenu$1.prototype, "input_cursor", 2);
__decorateClass$1([
  Prop()
], VariableMenu$1.prototype, "jsonSearch", 2);
__decorateClass$1([
  Prop({ default: "" })
], VariableMenu$1.prototype, "search", 2);
__decorateClass$1([
  Prop({ default: "fuseResultsUpdated" })
], VariableMenu$1.prototype, "eventName", 2);
__decorateClass$1([
  Prop({ default: "fuseInputChanged" })
], VariableMenu$1.prototype, "inputChangeEventName", 2);
__decorateClass$1([
  Watch("value", { immediate: true })
], VariableMenu$1.prototype, "watchValue", 1);
__decorateClass$1([
  Watch("result")
], VariableMenu$1.prototype, "watchResult", 1);
VariableMenu$1 = __decorateClass$1([
  Component({})
], VariableMenu$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    ref: "variableMenu",
    staticClass: "s-variablemenu",
    on: {
      "input": function($event) {
        return _vm.watchInput($event);
      },
      "focus": function($event) {
        return _vm.watchCursor($event);
      },
      "click": function($event) {
        return _vm.watchCursor($event);
      },
      "keyup": function($event) {
        return _vm.watchCursor($event);
      },
      "keydown": _vm.keyEvent
    }
  }, [_c("transition", {
    attrs: {
      "name": "expand",
      "tag": "div"
    },
    on: {
      "enter": _vm.open,
      "after-enter": _vm.afterOpen,
      "leave": _vm.close
    }
  }, [_vm.phaseTwo && _vm.limitedResult.length >= 1 ? _c("div", {
    ref: "resultArea",
    staticClass: "s-variablemenu-results__cont",
    style: _vm.calcTransform
  }, [_c("transition-group", {
    attrs: {
      "name": "s-variablemenu--fadeX"
    }
  }, _vm._l(_vm.limitedResult, function(searchResult, i) {
    return _c("div", {
      key: searchResult.item.variable,
      staticClass: "s-variablemenu-results",
      class: {
        "s-active-result": _vm.currentResult === i
      },
      on: {
        "mouseover": function($event) {
          _vm.currentResult = i;
        },
        "mousedown": _vm.mergeValues,
        "mouseup": _vm.blurSearch
      }
    }, [_c("div", {
      staticClass: "s-variablemenu__result--title"
    }, [_vm._v(" " + _vm._s(searchResult.item.variable) + " ")]), _c("div", {
      staticClass: "s-variablemenu__result--desc"
    }, [_vm._v(" " + _vm._s(searchResult.item.description) + " ")])]);
  }), 0)], 1) : _vm._e()]), _c("div", {
    ref: "inputCont",
    staticClass: "s-variablemenu--searchbar__cont"
  }, [_vm._t("input")], 2)], 1);
};
var staticRenderFns$1 = [];
const VariableMenu_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  VariableMenu$1,
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
const VariableMenu2 = /* @__PURE__ */ function() {
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
let Inputs$1 = class Inputs extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", InputsCode);
    __publicField(this, "data", "");
    __publicField(this, "radioValue", true);
    __publicField(this, "checkboxValue1", true);
    __publicField(this, "checkboxValue2", false);
    __publicField(this, "checkboxValue3", true);
    __publicField(this, "checkboxValue4", false);
    __publicField(this, "selected", "Option A");
    __publicField(this, "selectedGroup", "Option A");
    __publicField(this, "multipleSelected", ["Option B", "Option C"]);
    __publicField(this, "optionGroups", [
      {
        group: "Group A",
        items: ["Option A", "Option B", "Option C"]
      },
      {
        group: "Group B",
        items: ["Option A", "Option B", "Option C"]
      },
      {
        group: "Group C",
        items: ["Option A", "Option B", "Option C"]
      }
    ]);
    __publicField(this, "optionSelected", ["Glass Pint", "Glass Beer"]);
    __publicField(this, "objectSelected", {
      value: "glass-pint",
      title: "Glass Pint",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"
    });
    __publicField(this, "statusValue", true);
    __publicField(this, "testingInput", null);
    __publicField(this, "layoutValue", "above");
    __publicField(this, "jarValue", "glass-pint");
    // For Variable Menu
    __publicField(this, "varData", varSearch);
    __publicField(this, "variAreaValue", "");
    __publicField(this, "variTextValue", "");
    // Text inputs
    __publicField(this, "textInputValue", "test");
    __publicField(this, "numberInputValue", 0);
    __publicField(this, "emailInputValue", "");
    __publicField(this, "passwordInputValue", "");
    __publicField(this, "errorTextInputValue", "");
    __publicField(this, "textAreaInputValue", "");
    __publicField(this, "textInputPlaceholder", "Placeholder");
    __publicField(this, "emailInputPlaceholder", "Placeholder");
    __publicField(this, "passwordInputPlaceholder", "Placeholder");
    __publicField(this, "options", [
      {
        value: "glass-pint",
        title: "Glass Pint",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"
      },
      {
        value: "glass-beer",
        title: "Glass Beer",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer.png"
      },
      {
        value: "glass-beer-2",
        title: "Glass Beer 2",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer2.png"
      },
      {
        value: "glass-coffee",
        title: "Glass Coffee",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee.png"
      },
      {
        value: "glass-fancy",
        title: "Glass Fancy",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-fancy.png"
      },
      {
        value: "glass-whiskey",
        title: "Glass Whiskey",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-whiskey.png"
      },
      {
        value: "glass-burbon",
        title: "Glass Burbon",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-burbon.png"
      },
      {
        value: "glass-martini",
        title: "Glass Martini",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-martini.png"
      },
      {
        value: "glass-beer-3",
        title: "Glass Beer 3",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer3.png"
      },
      {
        value: "glass-wine",
        title: "Glass Wine",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-wine.png"
      },
      {
        value: "glass-baileys",
        title: "Glass Baileys",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-baileys.png"
      },
      {
        value: "glass-champagne",
        title: "Glass Champagne",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-champagne.png"
      },
      {
        value: "glass-coffee-no-handle",
        title: "Glass Coffee No Handle",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee-no-handle.png"
      },
      {
        value: "glass-plinko",
        title: "Glass Plinko",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-plinko.png"
      },
      {
        value: "glass-stocking",
        title: "Glass Stocking",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-stocking.png"
      },
      {
        value: "glass-snowman",
        title: "Glass Snowman",
        image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-snowman.png"
      }
    ]);
    __publicField(this, "show", [
      "Bounce",
      "Bounce In",
      "Bounce In Down",
      "Bounce In Left",
      "Bounce In Right",
      "Bounce In Up",
      "Fade In",
      "Fade In Down",
      "Fade In Down Big",
      "Fade In Left",
      "Fade In Left Big",
      "Fade In Right",
      "Fade In",
      "Fade In Up",
      "Fade In Up Big"
    ]);
  }
};
Inputs$1 = __decorateClass([
  Component({
    components: {
      Checkbox,
      DemoSection,
      FormGroup,
      ImagePickerInput: ImagePickerInput2,
      Radio,
      Selector,
      StatusSwitch: StatusSwitch2,
      TaggingInput: TaggingInput2,
      TextArea: TextArea2,
      TextInput,
      VariableMenu: VariableMenu2
    }
  })
], Inputs$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h1", [_vm._v("Inputs")]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Text Inputs")]), _vm._m(0), _vm._m(1), _c("DemoSection", {
    attrs: {
      "title": "Text Inputs",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FormGroup", [_c("TextInput", {
          attrs: {
            "slot": "input",
            "type": "text",
            "label": "Text Input",
            "name": "textExample",
            "placeholder": _vm.textInputPlaceholder,
            "autoComplete": "on"
          },
          slot: "input",
          model: {
            value: _vm.textInputValue,
            callback: function($$v) {
              _vm.textInputValue = $$v;
            },
            expression: "textInputValue"
          }
        }), _c("TextInput", {
          directives: [{
            name: "validate",
            rawName: "v-validate",
            value: "required|between:0,100",
            expression: "'required|between:0,100'"
          }],
          attrs: {
            "slot": "input",
            "type": "number",
            "label": "Number Input",
            "name": "numberinputExample",
            "placeholder": _vm.textInputPlaceholder,
            "min": 0,
            "max": 100,
            "error": _vm.errors.first("numberinputExample")
          },
          slot: "input",
          model: {
            value: _vm.numberInputValue,
            callback: function($$v) {
              _vm.numberInputValue = $$v;
            },
            expression: "numberInputValue"
          }
        }), _c("TextInput", {
          attrs: {
            "slot": "input",
            "type": "email",
            "label": "Email Input",
            "name": "emailExample",
            "placeholder": _vm.emailInputPlaceholder
          },
          slot: "input",
          model: {
            value: _vm.emailInputValue,
            callback: function($$v) {
              _vm.emailInputValue = $$v;
            },
            expression: "emailInputValue"
          }
        }), _c("TextInput", {
          attrs: {
            "slot": "input",
            "type": "password",
            "label": "Password Input",
            "name": "passwordExample",
            "placeholder": _vm.passwordInputPlaceholder,
            "disabled": ""
          },
          slot: "input",
          model: {
            value: _vm.passwordInputValue,
            callback: function($$v) {
              _vm.passwordInputValue = $$v;
            },
            expression: "passwordInputValue"
          }
        }), _c("TextInput", {
          attrs: {
            "slot": "input",
            "type": "text",
            "label": "Input With Error",
            "name": "textExample",
            "placeholder": _vm.textInputPlaceholder,
            "error": "Enter a number"
          },
          slot: "input",
          model: {
            value: _vm.errorTextInputValue,
            callback: function($$v) {
              _vm.errorTextInputValue = $$v;
            },
            expression: "errorTextInputValue"
          }
        }), _c("TextArea", {
          attrs: {
            "slot": "input",
            "label": "Text Area",
            "name": "myarea",
            "placeholder": "This is where you put some cool stuff",
            "autoResize": "true",
            "maxLength": 1e3,
            "maxHeight": 100
          },
          slot: "input",
          model: {
            value: _vm.textAreaInputValue,
            callback: function($$v) {
              _vm.textAreaInputValue = $$v;
            },
            expression: "textAreaInputValue"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Text Inputs with Variable Menu Wrapper")]), _c("p", [_vm._v(" A new way to navigate variables, just wrap your input with the Variable Menu. This is not work with FormGroup preformatting. ")]), _c("DemoSection", {
    attrs: {
      "title": "Variable Menu",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("VariableMenu", {
          attrs: {
            "jsonSearch": _vm.varData
          }
        }, [_c("text-input", {
          attrs: {
            "slot": "input",
            "type": "text",
            "name": "textExample",
            "placeholder": "w/ Variable Menu"
          },
          slot: "input",
          model: {
            value: _vm.variTextValue,
            callback: function($$v) {
              _vm.variTextValue = $$v;
            },
            expression: "variTextValue"
          }
        })], 1), _c("VariableMenu", {
          attrs: {
            "jsonSearch": _vm.varData
          }
        }, [_c("TextArea", {
          ref: "textArea",
          attrs: {
            "slot": "input",
            "name": "myarea",
            "placeholder": "w/ Variable Menu",
            "rows": "3",
            "maxLength": 1e3,
            "maxHeight": 100
          },
          slot: "input",
          model: {
            value: _vm.variAreaValue,
            callback: function($$v) {
              _vm.variAreaValue = $$v;
            },
            expression: "variAreaValue"
          }
        })], 1)];
      },
      proxy: true
    }])
  }), _vm._m(2)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Tagging Input")]), _vm._m(3), _c("DemoSection", {
    attrs: {
      "title": "Tagging Input",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("TaggingInput", {
          attrs: {
            "name": "aliases",
            "placeholder": "!hello",
            "maxItems": "10",
            "inputValidation": "required"
          },
          on: {
            "keydown": function($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
                return null;
              $event.preventDefault();
            }
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Selector")]), _vm._m(4), _c("DemoSection", {
    attrs: {
      "title": "Selector",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FormGroup", [_c("Selector", {
          attrs: {
            "slot": "input",
            "options": ["Option A", "Option B", "Option C"]
          },
          slot: "input",
          model: {
            value: _vm.selected,
            callback: function($$v) {
              _vm.selected = $$v;
            },
            expression: "selected"
          }
        }), _c("Selector", {
          attrs: {
            "slot": "input",
            "options": _vm.optionGroups,
            "group-values": "items",
            "group-label": "group",
            "searchable": false
          },
          slot: "input",
          model: {
            value: _vm.selectedGroup,
            callback: function($$v) {
              _vm.selectedGroup = $$v;
            },
            expression: "selectedGroup"
          }
        }), _c("Selector", {
          attrs: {
            "slot": "input",
            "options": ["Option A", "Option B", "Option C"],
            "disabled": ""
          },
          slot: "input",
          model: {
            value: _vm.selected,
            callback: function($$v) {
              _vm.selected = $$v;
            },
            expression: "selected"
          }
        }), _c("Selector", {
          attrs: {
            "slot": "input",
            "multiple": "",
            "options": ["Option A", "Option B", "Option C"],
            "searchable": false
          },
          slot: "input",
          model: {
            value: _vm.multipleSelected,
            callback: function($$v) {
              _vm.multipleSelected = $$v;
            },
            expression: "multipleSelected"
          }
        }), _c("Selector", {
          attrs: {
            "slot": "input",
            "multiple": "",
            "options": ["Option A", "Option B", "Option C"],
            "disabled": ""
          },
          slot: "input",
          model: {
            value: _vm.multipleSelected,
            callback: function($$v) {
              _vm.multipleSelected = $$v;
            },
            expression: "multipleSelected"
          }
        })], 1)];
      },
      proxy: true
    }])
  }), _vm._m(5)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Checkboxes and Radios")]), _vm._m(6), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Single Checkbox")]), _c("DemoSection", {
    attrs: {
      "title": "Checkbox",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Checkbox", {
          attrs: {
            "id": "checkbox",
            "name": "checkbox",
            "label": "Checkbox Label"
          },
          model: {
            value: _vm.checkboxValue1,
            callback: function($$v) {
              _vm.checkboxValue1 = $$v;
            },
            expression: "checkboxValue1"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Checkbox Group")]), _c("DemoSection", {
    attrs: {
      "title": "Checkbox Group",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-checkbox-group"
        }, [_c("Checkbox", {
          attrs: {
            "id": "checkbox1",
            "name": "checkbox1",
            "label": "Checkbox Label 1"
          },
          model: {
            value: _vm.checkboxValue2,
            callback: function($$v) {
              _vm.checkboxValue2 = $$v;
            },
            expression: "checkboxValue2"
          }
        }), _c("Checkbox", {
          attrs: {
            "id": "checkbox2",
            "name": "checkbox2",
            "label": "Checkbox Label 2"
          },
          model: {
            value: _vm.checkboxValue3,
            callback: function($$v) {
              _vm.checkboxValue3 = $$v;
            },
            expression: "checkboxValue3"
          }
        }), _c("Checkbox", {
          attrs: {
            "id": "checkbox3",
            "name": "checkbox3",
            "label": "Checkbox Label 3"
          },
          model: {
            value: _vm.checkboxValue4,
            callback: function($$v) {
              _vm.checkboxValue4 = $$v;
            },
            expression: "checkboxValue4"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1)]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Radios")]), _c("DemoSection", {
    attrs: {
      "title": "Radios",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-checkbox-group"
        }, [_c("Radio", {
          attrs: {
            "id": "radio1",
            "name": "radioGroup",
            "label": "Enabled",
            "val": true
          },
          model: {
            value: _vm.radioValue,
            callback: function($$v) {
              _vm.radioValue = $$v;
            },
            expression: "radioValue"
          }
        }), _c("Radio", {
          attrs: {
            "id": "radio2",
            "name": "radioGroup",
            "label": "Disabled",
            "val": false
          },
          model: {
            value: _vm.radioValue,
            callback: function($$v) {
              _vm.radioValue = $$v;
            },
            expression: "radioValue"
          }
        })], 1)];
      },
      proxy: true
    }])
  }), _vm._m(7)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Status Switch")]), _vm._m(8), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Status Switch",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FormGroup", [_c("StatusSwitch", {
          attrs: {
            "slot": "input",
            "label": "Switch Label"
          },
          slot: "input",
          model: {
            value: _vm.statusValue,
            callback: function($$v) {
              _vm.statusValue = $$v;
            },
            expression: "statusValue"
          }
        }), _c("StatusSwitch", {
          attrs: {
            "slot": "input",
            "size": "small",
            "label": "Small Switch Label"
          },
          slot: "input",
          model: {
            value: _vm.statusValue,
            callback: function($$v) {
              _vm.statusValue = $$v;
            },
            expression: "statusValue"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _vm._m(9)]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Image Input Picker")]), _vm._m(10), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Default")]), _c("p", [_vm._v(" By default, the image input picker is setup to have our Alert Box layout styles as the options. ")]), _c("DemoSection", {
    attrs: {
      "title": "Default Image Input Picker",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ImagePickerInput", {
          model: {
            value: _vm.layoutValue,
            callback: function($$v) {
              _vm.layoutValue = $$v;
            },
            expression: "layoutValue"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Custom")]), _c("p", [_vm._v(" You can pass in any options you'd like with the options prop. This is an example using our Jar options. ")]), _c("DemoSection", {
    attrs: {
      "title": "Custom Image Input Picker",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ImagePickerInput", {
          attrs: {
            "options": _vm.options
          },
          model: {
            value: _vm.jarValue,
            callback: function($$v) {
              _vm.jarValue = $$v;
            },
            expression: "jarValue"
          }
        })];
      },
      proxy: true
    }])
  })], 1)])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", [_vm._v(" These 6 fields below are wrapped in a "), _c("code", [_vm._v("FormGroup")]), _vm._v(" component. This will put 16px of margin between form fields and 24px margin between form groups. ")]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { TextInput, TextArea, VariableMenu } from 'streamlabs-beaker';\n\ncomponents: {\n  TextInput,\n  TextArea,\n  VariableMenu\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("disabled")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Puts a disabled class on the form field and disables the input. ")])]), _c("tr", [_c("td", [_vm._v("error")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" If there is error text, error classes will go on the input - we plan to add better validation handling. ")])]), _c("tr", [_c("td", [_vm._v("label")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Optional label for the input.")])]), _c("tr", [_c("td", [_vm._v("name")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Input name attribute.")])]), _c("tr", [_c("td", [_vm._v("placeholder")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Input placeholder text.")])]), _c("tr", [_c("td", [_vm._v("type")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("text")]), _c("td", [_vm._v(" Input type: "), _c("code", [_vm._v("text")]), _vm._v(", "), _c("code", [_vm._v("email")]), _vm._v(", "), _c("code", [_vm._v("password")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Input value using v-model.")])]), _c("tr", [_c("td", [_vm._v("readonly")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Specifies that an input field is read-only.")])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { TaggingInput } from 'streamlabs-beaker';\n\ncomponents: {\n  TaggingInput\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { Selector } from 'streamlabs-beaker';\n\ncomponents: {\n  Selector\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Current selected value.")])]), _c("tr", [_c("td", [_vm._v("options")]), _c("td", [_vm._v("[''] or {}")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Array of strings or objects to use as the options.")])]), _c("tr", [_c("td", [_vm._v("multiple")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Optional label for the input.")])]), _c("tr", [_c("td", [_vm._v("placeholder")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("''")]), _c("td", [_vm._v("Equivalent to the `placeholder` attribute on an input.")])]), _c("tr", [_c("td", [_vm._v("searchable")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("Optional label for the input.")])]), _c("tr", [_c("td", [_vm._v("disabled")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Puts a disabled class on the form field and disables the input. ")])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { Checkbox, Radio } from 'streamlabs-beaker';\n\ncomponents: {\n  Checkbox,\n  Radio\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("id")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v('""')]), _c("td", [_vm._v("Indentifier for associated label.")])]), _c("tr", [_c("td", [_vm._v("name")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v('""')]), _c("td", [_vm._v("Name for radio group.")])]), _c("tr", [_c("td", [_vm._v("label")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Optional label for the radio input.")])]), _c("tr", [_c("td", [_vm._v("val")]), _c("td", [_vm._v("string, boolean")]), _c("td", [_vm._v('""')]), _c("td", [_vm._v("Radio input value when selected")])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { StatusSwitch } from 'streamlabs-beaker';\n\ncomponents: {\n  StatusSwitch\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Available for v-model 2-way data binding.")])]), _c("tr", [_c("td", [_vm._v("label")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Optional label for the input.")])]), _c("tr", [_c("td", [_vm._v("size")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Other available sizes. Current alternate size option: "), _c("code", [_vm._v("small")]), _vm._v(". ")])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { ImagePickerInput } from 'streamlabs-beaker';\n\ncomponents: {\n  ImagePickerInput\n}")])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Inputs$1,
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
const Inputs2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Inputs2 as default
};
//# sourceMappingURL=Inputs-c5c83f4e.js.map

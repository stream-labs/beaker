var V=Object.defineProperty;var T=(t,e,a)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var o=(t,e,a)=>(T(t,typeof e!="symbol"?e+"":e,a),a);import{C as v,P as i,V as b,n as g,d as P,r as R,c as y,W as w}from"./index.4fb8a6cb.js";import{C as D,R as O,S as A}from"./Selector.7d087e2e.js";import{D as j}from"./DemoSection.79ee11c0.js";import{F as G}from"./FormGroup.79b6121d.js";import{i as B}from"./ResizeObserver.es.bd9ff68d.js";import{o as C,T as k}from"./TextInput.6d9c9908.js";import{B as F}from"./Button.b26dacc2.js";import{F as M}from"./fuse.esm.249bd5bb.js";import"./Accordion.09c82396.js";import"./_baseClone.a549c660.js";var q=Object.defineProperty,L=Object.getOwnPropertyDescriptor,f=(t,e,a,n)=>{for(var s=n>1?void 0:n?L(e,a):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=(n?r(e,a,s):r(s))||s);return n&&s&&q(e,a,s),s};let m=class extends b{constructor(){super(...arguments);o(this,"$refs");o(this,"value");o(this,"width");o(this,"height");o(this,"options");o(this,"containerWidth",0)}get selectedItemIndex(){return this.options.findIndex(e=>e.value===this.value)}get totalRows(){const e=this.options.length,a=(parseInt(this.width,10)||64)+8,n=e*a;return Math.ceil(n/this.containerWidth)}get itemsPerRow(){const e=(parseInt(this.width,10)||64)+8;return Math.floor(this.containerWidth/e)}get itemsInFinalRow(){return this.options.length%this.itemsPerRow}get itemPosMatrix(){let e=[],a=1,n=1,s=this.options.length,l=0;for(;l<s;)e.push([a,n]),n++,n>this.itemsPerRow&&(n=1,a++),l++;return e}mounted(){this.$nextTick(()=>{const e=document.querySelector(".s-image-picker-input");new B((n,s)=>{for(const l of n){const{left:r,top:ye,width:S,height:we}=l.contentRect;this.containerWidth=S}}).observe(e),this.containerWidth=e.clientWidth})}emitInput(e){this.$emit("input",e)}setValueByKeyPress(e){let a=[...this.itemPosMatrix[this.selectedItemIndex]],n=this.selectedItemIndex;e==="UP"&&(a[0]<=1?a[0]=1:a[0]--),e==="DOWN"&&(a[0]>=this.totalRows?a[0]=this.totalRows:(a[0]++,a[1]>this.itemsInFinalRow&&(a[1]=this.itemsInFinalRow))),e==="LEFT"&&(a[0]<=1&&a[1]<=1?a[1]=1:a[0]>1&&a[1]===1?(a[0]--,a[1]=this.itemsPerRow):a[1]--),e==="RIGHT"&&(this.options.length<this.itemsPerRow&&a[1]>=this.options.length?a[1]=this.options.length:a[1]>=this.itemsInFinalRow&&a[0]===this.totalRows?a[1]=this.itemsInFinalRow:a[1]===this.itemsPerRow&&a[0]<this.totalRows?(a[0]++,a[1]=1):a[1]++),n=this.itemPosMatrix.findIndex(s=>s[0]===a[0]&&s[1]===a[1]),this.$refs.imagePickerItem[n].focus(),this.emitInput(this.options[n].value)}};f([i({default:"above"})],m.prototype,"value",2);f([i(String)],m.prototype,"width",2);f([i(String)],m.prototype,"height",2);f([i({default:()=>[{value:"above",title:"Above",image:"https://cdn.streamlabs.com/layouts/img/above.png"},{value:"banner",title:"Banner",image:"https://cdn.streamlabs.com/layouts/img/banner.png"},{value:"side",title:"Side",image:"https://cdn.streamlabs.com/layouts/img/side.png"}]})],m.prototype,"options",2);m=f([v({})],m);var $=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("div",{staticClass:"s-image-picker-input"},e._l(e.options,function(n){return a("div",{key:n.value,ref:"imagePickerItem",refInFor:!0,staticClass:"s-image-picker-input__option",class:[e.value===n.value?"active":""],style:{width:e.width,height:e.height},attrs:{value:n.value,title:n.title,image:n.image,tabindex:e.value===n.value?"0":"-1"},on:{click:function(s){return e.emitInput(n.value)},keydown:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:(s.preventDefault(),e.setValueByKeyPress("UP"))},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:(s.preventDefault(),e.setValueByKeyPress("DOWN"))},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"left",37,s.key,["Left","ArrowLeft"])||"button"in s&&s.button!==0?null:(s.preventDefault(),e.setValueByKeyPress("LEFT"))},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"right",39,s.key,["Right","ArrowRight"])||"button"in s&&s.button!==2?null:(s.preventDefault(),e.setValueByKeyPress("RIGHT"))}]}},[a("img",{attrs:{src:n.image}})])}),0)},E=[],H=g(m,$,E,!1,null,null,null,null);const z=H.exports,W=`<template>
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
`;var N=Object.defineProperty,U=Object.getOwnPropertyDescriptor,x=(t,e,a,n)=>{for(var s=n>1?void 0:n?U(e,a):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=(n?r(e,a,s):r(s))||s);return n&&s&&N(e,a,s),s};let h=class extends b{constructor(){super(...arguments);o(this,"label");o(this,"size");o(this,"value")}};x([i()],h.prototype,"label",2);x([i()],h.prototype,"size",2);x([i({default:!1})],h.prototype,"value",2);h=x([v({})],h);var Q=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("div",{staticClass:"s-status-switch",class:{enabled:!!e.value},attrs:{tabindex:"0"},on:{click:function(n){return e.$emit("input",!e.value)},keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])?null:(n.preventDefault(),e.$emit("input",!e.value))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),e.$emit("input",!e.value))}]}},[a("div",{staticClass:"s-status-switch__paddle",class:{"s-status-switch__paddle--small":e.size==="small"}}),e.label?a("label",[e._v(e._s(e.label))]):e._e(),e._t("default")],2)},Y=[],K=g(h,Q,Y,!1,null,null,null,null);const X=K.exports;var J=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,p=(t,e,a,n)=>{for(var s=n>1?void 0:n?Z(e,a):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=(n?r(e,a,s):r(s))||s);return n&&s&&J(e,a,s),s};let u=class extends b{constructor(){super(...arguments);o(this,"$refs");o(this,"name");o(this,"label");o(this,"placeholder");o(this,"value");o(this,"error");o(this,"helpText");o(this,"cols");o(this,"rows");o(this,"maxLength");o(this,"autoResize");o(this,"maxHeight");o(this,"localValue","");o(this,"hasScroll",!1)}created(){this.$parent.$on("update",this.updateValue)}mounted(){this.updateSize(),this.updateCountPos()}focus(){this.$refs.textArea.focus()}get filteredListeners(){return C(this.$listeners,["input"])}get currentLength(){return this.value.length}updated(){this.updateCountPos()}onValueChange(e){this.$emit("input",e.target.value),this.updateSize()}onKeyUp(e){this.$emit("keyup",e.target.selectionStart)}onFocus(e){this.$emit("focus",e.target.selectionStart)}onClick(e){this.$emit("click",e.target.selectionStart)}updateValue(e){this.$refs.textArea.value=e,this.$emit("input",e)}updateSize(){if(this.autoResize){this.$refs.textArea.style.cssText="height:auto;";const e=this.$refs.textArea.scrollHeight>this.maxHeight&&this.maxHeight?this.maxHeight+2:this.$refs.textArea.scrollHeight+2;this.$refs.textArea.style.cssText="height:"+e+"px"}}updateCountPos(){this.$nextTick(()=>{const e=this.$refs.textArea;this.hasScroll=e.scrollHeight>e.clientHeight})}};p([i()],u.prototype,"name",2);p([i()],u.prototype,"label",2);p([i()],u.prototype,"placeholder",2);p([i()],u.prototype,"value",2);p([i()],u.prototype,"error",2);p([i()],u.prototype,"helpText",2);p([i({default:100})],u.prototype,"cols",2);p([i({default:3})],u.prototype,"rows",2);p([i()],u.prototype,"maxLength",2);p([i()],u.prototype,"autoResize",2);p([i()],u.prototype,"maxHeight",2);u=p([v({})],u);var ee=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("div",{staticClass:"s-form-area",class:{"s-form-area--with-label":e.label}},[a("div",{staticClass:"s-form-area__container"},[a("textarea",e._g({ref:"textArea",class:{"s-form-area__input":!0,"s-form-area__input--error":!!e.error,"s-form-area__input--count":!!e.maxLength},attrs:{name:e.name,cols:e.cols,rows:e.rows,placeholder:e.placeholder,maxlength:e.maxLength},domProps:{value:e.value},on:{input:e.onValueChange,focus:e.onFocus,click:e.onClick,keyup:e.onKeyUp}},e.filteredListeners)),e.label?a("label",{staticClass:"s-form-area__label",class:{"s-form-area__label--top":e.value!==""}},[e._v(e._s(e.label))]):e._e(),e.error?a("div",{staticClass:"s-form-area__input-error"},[a("i",{staticClass:"icon-error"}),e._v(" "+e._s(e.error)+" ")]):e._e(),a("div",{staticClass:"s-form-area__characters",class:{"s-form-area__characters--scrollbar":e.hasScroll}},[e.maxLength?a("span",{staticClass:"s-form-area__char-count"},[e._v(e._s(e.currentLength)+"/"+e._s(e.maxLength))]):e._e()])]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.helpText,expression:"helpText"}],staticClass:"s-form-area__help-text"},[e._v(e._s(e.helpText))])])},te=[],ae=g(u,ee,te,!1,null,null,null,null);const I=ae.exports,ne=P({components:{TextInput:k,TextArea:I,Button:F},props:{name:{type:String},label:{type:String},placeholder:{type:String},buttonText:{type:String,default:"Add Tag"},buttonVariation:{type:String,default:"default"},value:{type:Array,default:()=>[]},inputValidation:{type:String},prefix:{type:String},tagVariation:{type:String,default:"default"},maxItems:{type:Number,default:25}},setup(t,{attrs:e}){const a=R(""),n=y(()=>`s-tagging-input__tag s-tagging-input__tag--${t.tagVariation}`),s=y(()=>C(e,["input"]));return{textInputValue:a,tagClasses:n,filteredListeners:s,onRemove:r=>{t.value.splice(r,1)}}},methods:{onAdd(){if(this.$validator.errors.items.length!==0||this.value.length>=this.maxItems)return;this.textInputValue=this.textInputValue.trim(),!this.value.find(e=>this.prefix&&!this.textInputValue.startsWith(this.prefix)?e.toLowerCase()===this.prefix+this.textInputValue.trim().toLowerCase():e.toLowerCase()===this.textInputValue.trim().toLowerCase())&&this.textInputValue.length!==0&&(this.prefix&&!this.textInputValue.startsWith(this.prefix)&&(this.textInputValue=this.prefix+this.textInputValue),this.value.push(this.textInputValue)),this.textInputValue=""}}});var se=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("div",{staticClass:"s-tagging-input"},[a("div",{staticClass:"s-tagging-input__container"},[a("text-input",e._g({directives:[{name:"validate",rawName:"v-validate",value:e.inputValidation,expression:"inputValidation"}],attrs:{slot:"input",label:e.label,placeholder:e.placeholder,name:e.name,type:"text",error:e.errors.first(e.name)},on:{keydown:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),e.onAdd.apply(null,arguments))}},slot:"input",model:{value:e.textInputValue,callback:function(n){e.textInputValue=n},expression:"textInputValue"}},e.$listeners)),a("Button",{attrs:{variation:e.buttonVariation,title:e.buttonText,disabled:e.value.length>=e.maxItems,type:"button"},on:{click:e.onAdd}})],1),a("div",{staticClass:"s-tagging-input__tags"},e._l(e.value,function(n,s){return a("div",{key:s,class:e.tagClasses},[a("div",{staticClass:"s-tagging-input__tag-text"},[e._v(e._s(n))]),a("i",{staticClass:"s-tagging-input__tag-icon icon-close",on:{click:function(l){return e.onRemove(s)}}})])}),0)])},oe=[],le=g(ne,se,oe,!1,null,null,null,null);const ie=le.exports,re=[{variable:"{min}",description:"Replaces {min} with the minimum amount of loyalty that has to be bet.",example:'Betting is open for "{title}" use {command} <{options}> <{min}-{max}> to register your bet. ',result:'Betting is open for "How many tries will this boss take me?" use !bet <1 | 2 | 3 | 4 | 5+> <10-1000> to register your bet',tags:["Betting"]},{variable:"{max}",description:"Replaces {max} with the maximum amount of loyalty that can be bet.",example:'Betting is open for "{title}" use {command} <{options}> <{min}-{max}> to register your bet. ',result:'Betting is open for "How many tries will this boss take me?" use !bet <1 | 2 | 3 | 4 | 5+> <10-1000> to register your bet',tags:["Betting"]},{variable:"{option}",description:"Replaces {option} the winning option of a poll or betting.",example:"{option} was the most voted option of the poll with {amount}% of the votes.",result:"Legend of Zelda was the most voted option of the poll with 56% of the votes.",tags:["Betting","Poll"]},{variable:"{options}",description:"Replaces {options} with all the available options for a poll or betting.",example:'A poll has opened for "Which started should I pick?" use !vote <{options}> to vote.',result:'A poll has opened for "Which started should I pick?" use !vote <Pikachu | Squirtle | Charmander> to vote.',tags:["Betting","Poll"]},{variable:"{cooldown}",description:"Replaces {cooldown} variable with command's remaining cooldown.",example:"{user.name} -> {command} is on cooldown for {cooldown} seconds.",result:"Streamlabs -> !test is on cooldown for 20 seconds.",tags:["Command Settings"]},{variable:"{command}",description:"Replaces {command} with current command that's being used.",example:"This command is called {command}",result:"This command is called !test",tags:["Custom Commands"]},{variable:"{user.id}",description:"Replaces {user.id} variable with the id of the current user.",example:"My Youtube Channel Id is https://youtube.com/channel/{user.id}",result:"My Youtube Channel Id is https://youtube.com/channel/UCNL8jaJ9hId96P13QmQXNtA",tags:["Custom Commands"]},{variable:"{user.name}",description:"Replaces {user.name} variable with the viewers name.",example:"My name is {user.name}",result:"My name is Streamlabs",tags:["Custom Commands"]},{variable:"{randnum.<min>-<max>}",description:"Replaces {randnum.<min>-<max>} variable the random number between min & max.",example:"{user.name}, you have rolled {randnum.1-100}.",result:"Streamlabs, you have rolled 100.",tags:["Custom Commands"]},{variable:"{target.name}",description:"Replaces {target.name} variable with the target's name.",example:"{user.name} gives {target.name} a hug!",result:"Streamlabs gives RedUnicornCat38745 a hug!",tags:["Custom Commands"]},{variable:"{arg}",description:"Replaced by a word in a specific position, arg is denoted by a number.",example:"Your first three words: {1} {2} {3}",result:"Your first three words: I am going",tags:["Custom Commands"]},{variable:"{start:end}",description:"Replaced with all the words between the start and end.",example:"The colors you picked are: {1:3}",result:"he colors you picked are: Red Green Blue",tags:["Custom Commands"]},{variable:"{uptime}",description:"Replaces {uptime} with how long the stream has been live for. (Twitch/Mixer only)",example:"The stream has been live for {uptime}",result:"The stream has been live for 10 minutes 50 seconds",tags:["Custom Commands"]},{variable:"{time.<continent>/<city>}",description:"Replaces {time.<continent>/<city>} variable with the current time for that specific continent/city.",example:"Right now it is {time.Australia/Sydney} in Sydney.",result:"Right now it is 12:00 in Sydney.",tags:["Custom Commands"]},{variable:"{readapi.<url_here>}",description:"Replaces {readapi.<url_here>} variable with the data from the API endpoint.",example:"The stream has been live for {readapi.https://decapi.me/twitch/uptime?channel=streamlabs}",result:"The stream has been live for 17 hours, 50 minutes, 55 seconds",tags:["Custom Commands"]},{variable:"{merch.link}",description:"Replaces {merch.link} with your Streamlabs Merch link.",example:"You can checkout my merch store over at {merch.link}",result:"You can checkout my merch store over at https://streamlabs.com/streamlabs#/merch",tags:["Custom Commands"]},{variable:"{donation.link}",description:"Replaces {donation.link} with your Streamlabs donation link.",example:"Do you want to support the stream? You can do so by going to {donation.link}",result:"Do you want to support the stream? You can do so by going to https://streamlabs.com/streamlabs",tags:["Custom Commands"]},{variable:"{facemask.link}",description:"Replaces {facemask.link} with your Streamlabs Facemask Donation link.",example:"Do you want to put awesome masks on my face? Go to {facemask.link}",result:"Do you want to put awesome masks on my face? Go to https://streamlabs.com/streamlabs/masks",tags:["Custom Commands"]},{variable:"{channel.name}",description:"Replaces {channel.name} with your Channel name.",example:"Our channel is {channel.name}",result:"Our channel is Streamlabs",tags:["Custom Commands"]},{variable:"{streamlabels.<filename>}",description:"Replaces {streamlabels.<filename>} with the data from the streamlabels file.",example:"Session Top Donator: {streamlabels.session_top_donator}",result:"Session Top Donator: AnkhHeart",tags:["Custom Commands"]},{variable:"{count <name>}",description:"Increments the counter by one and displays it.",example:"Deaths: {count deaths}",result:"Deaths: 2",tags:["Custom Commands"]},{variable:"{count <name> +<value>}",description:"Increments the counter by your value and displays it.",example:"Deaths: {count deaths +5}",result:"Deaths: 7",tags:["Custom Commands"]},{variable:"{count <name> -<value>}",description:"Decrements the counter by your value and displays it.",example:"Deaths: {count deaths -5}",result:"Deaths: 2",tags:["Custom Commands"]},{variable:"{count <name> <value>}",description:"Sets the counter to your value and displays it.",example:"Deaths: {count deaths 100}",result:"Deaths: 100",tags:["Custom Commands"]},{variable:"{getcount <name>}",description:"Displays the specified counter.",example:"Deaths: {count deaths}",result:"Deaths: 100",tags:["Custom Commands"]},{variable:"{channel.subpoints}",description:"Replaces {channel.subpoints} with channel's sub points.",example:"Sub Count: {channel.subpoints}",result:"Sub Count: 100",tags:["Custom Commands","Twitch"]},{variable:"{user.followage}",description:"Replaces {user.followage} with the amount of time the user has been following the channel.",example:"{user.name} has been following the channel for {user.followage}",result:"AnkhHeart has been following the channel for 2 days 3 weeks",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{target.followage}",description:"Replaces {target.followage} with the amount of time the target has been following the channel.",example:"{target.name} has been following the channel for {target.followage}",result:"AnkhHeart has been following the channel for 2 days 3 weeks",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{channel.title}",description:"Replaces {channel.title} with the title of the stream.",example:"The title is {channel.title}",result:"The title is Playing Apex Legends o.o",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{user.title}",description:"Replaces {user.title} with the user's stream title.",example:"The title is {user.title}",result:"The title is Playing Apex Legends o.o",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{target.title}",description:"Replaces {target.title} with the target's stream title.",example:"The title is {target.title}",result:"The title is Playing Apex Legends o.o",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{touser.title}",description:"Replaces {touser.title} with the target's or user's stream title.",example:"The title is {touser.title}",result:"The title is Playing Apex Legends o.o",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{channel.game}",description:"Replaces {channel.game} with the currently played game.",example:"The game is {channel.game}",result:"The game is Apex Legends",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{user.game}",description:"Replaces {user.game} with user's last played game.",example:"The game is {user.game}",result:"The game is Apex Legends",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{target.game}",description:"Replaces {target.game} with target's last played game.",example:"The game is {target.game}",result:"The game is Apex Legends",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{touser.game}",description:"Replaces {touser.game} with target's or user's last played game.",example:"The game is {touser.game}",result:"The game is Apex Legends",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{channel.followers}",description:"Replaces {channel.followers} with channel's follower count.",example:"Follower Count: {channel.followers}",result:"Follower Count: 123",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{user.followers}",description:"Replaces {user.followers} with user's follower count.",example:"Follower Count: {user.followers}",result:"Follower Count: 123",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{target.followers}",description:"Replaces {target.followers} with target's follower count.",example:"Follower Count: {target.followers}",result:"Follower Count: 123",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{touser.followers}",description:"Replaces {touser.followers} with target's or user's follower count.",example:"Follower Count: {touser.followers}",result:"Follower Count: 123",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{channel.subs}",description:"Replaces {channel.subs} with channel's sub count.",example:"Sub Count: {channel.subs}",result:"Sub Count: 100",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{reward}",description:"Replaces {reward} with the amount of currency you have earned through gamble.",example:"Rolled {amount}, @{user.name} won {reward} {loyalty.name} and now has {user.points} {loyalty.name}",result:"Rolled 100, @Streamlabs won 200 points and now has 500 points.",tags:["Gamble"]},{variable:"{prize}",description:"Replaces {prize} with the giveaway prize. Only works with giveaways.",example:"A {prize} raffle has started for {permission}. Use {command} to enter the raffle.",result:"A t-shirt raffle has started for everyone. Use !raffle to enter the raffle.",tags:["Giveaways"]},{variable:"{permission}",description:"Replaces {permission} with the permission required to join a Giveaway.",example:"A {prize} raffle has started for {permission}. Use {command} to enter the raffle.",result:"A t-shirt raffle has started for everyone. Use !raffle to enter the raffle.",tags:["Giveaways"]},{variable:"{amount}",description:"Replaces {amount} variable with donation amount, tickets, months, etc..",example:"@{user.name}, you received {amount} ticket(s)!",result:"@Streamlabs, you received 10 ticket(s)!",tags:["Giveaways"]},{variable:"{link}",description:"Replaces {link} with your Merch giveaway redemption link.",example:"You can redeem your giveaway prize over at {link}",result:"You can redeem your giveaway prize over at https://streamlabs.com/streamlabs?redemption=true#/merch",tags:["Giveaways"]},{variable:"{timer}",description:"Replaces {timer} with the remaining time of a giveaway/poll/betting countdown timer. Only available in the repeat message.",example:'A Poll is going on for "{title}" use {command} <{options}> to vote. You have {timer} seconds left to join.',result:'A Poll is going on for "What starter should I pick?" use !vote <Squirtle | Charmander | Bulbasaur> to vote. You have 600 seconds left to join.',tags:["Giveaways","Betting","Poll"]},{variable:"{results}",description:"Replaces {results} with the names of the survivors or a heist or poll results.",example:"A few managed to survive: {results}",result:"A few managed to survive: SOWHOYOUdotCOM (200), AnkhHeart (200)",tags:["Heist","Poll"]},{variable:"{duration}",description:"Replaces {duration} with the duration of the permit.",example:"@{target.name}, You have been given {duration} seconds to post a link!",result:"@AnkhHeart, You have 60 seconds to post a link!",tags:["Link Protection"]},{variable:"{loyalty.toppoints}",description:"Replaces {loyalty.toppoints} with a list of the top 10 users by points.",example:"Top {amount} Points: {loyalty.toppoints}.",result:"Top 10 Points: 1. AnkhHeart (1000), 2. H4rsh4 (999), 3. MissBlackBear (990), 4. Raichu (989), ... ",tags:["Loyalty"]},{variable:"{loyalty.tophours}",description:"Replaces {loyalty.tophours} with a list of the top 10 users by hours.",example:"Top {amount} Points: {loyalty.tophours}.",result:"Top 10 Points: 1. AnkhHeart (5.8), 2. H4rsh4 (4.2), 3. MissBlackBear (3.5), 4. Raichu (3.4), ... ",tags:["Loyalty"]},{variable:"{user.points}",description:"Replaces {user.points} with the user's loyalty.",example:"@{user.name}, you have {user.points} {loyalty.name}.",result:"@Streamlabs, you have 1000 points.",tags:["Loyalty","Custom Commands"]},{variable:"{user.time}",description:"Replaces {user.time} with the user's time watched.",example:"@{user.name} has watched the stream for {user.time} minutes.",result:"@Streamlabs has watched the stream for 2 hours.",tags:["Loyalty","Custom Commands"]},{variable:"{loyalty.name}",description:"Replaces {loyalty.name} with the loyalty name.",example:"My loyalty is called {loyalty.name}.",result:"My loyalty is called points.",tags:["Loyalty","Custom Commands"]},{variable:"{media.name}",description:"Replaces {media.name} with the media requests title.",example:'@{user.name}, "{media.name}" has been added to the queue.',result:'@Streamlabs, "Electric Swing Circus - Golden Hour" has been added to the queue.',tags:["Media Share"]},{variable:"{media.requestedby}",description:"Replaces {media.requestedby} with the name of who requested the media.",example:'@{user.name}, currently "{media.name}" is playing which was requested by {media.requestedby}.',result:'@Streamlabs, currently "Electric Swing Circus - Golden Hour" is playing which was requested by AnkhHeart.',tags:["Media Share"]},{variable:"{currency}",description:"Replaces {currency} with current selected currency.",example:"@{user.name} just tipped {amount} {currency}!",result:"@Streamlabs just tipped 20 USD!",tags:["Notifications"]},{variable:"{position}",description:"Replaces {position} with the queue position of the user.",example:"@{user.name}, you have joined the queue at position #{position}.",result:"@Streamlabs, you have joined the queue at position #1.",tags:["Queue"]},{variable:"{users}",description:"Replaces {users} with all the users that are up next in the queue.",example:"Next up: {users}",result:"Next up: sowhoyoudotcom, ankhheart",tags:["Queue"]},{variable:"{title}",description:"Replaces {title} with the title of the Poll, Bet or Queue.",example:"A queue has opened for {title}. Type {command} <note> to join!",result:"A queue has opened for Warframe. Type !join <note> to join!",tags:["Queue","Poll","Betting"]},{variable:"{quote.id}",description:"Replaces {quote.id} with the id of the quote.",example:"Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",result:'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',tags:["Quotes"]},{variable:"{quote.game}",description:"Replaces {quote.game} with the game of the quote.",example:"Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",result:'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',tags:["Quotes"]},{variable:"{quote.msg}",description:"Replaces {quote.msg} with quote itself.",example:"Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",result:'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',tags:["Quotes"]},{variable:"{quote.date}",description:"Replaces {quote.date} with quote's  date.",example:"Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",result:'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',tags:["Quotes"]}];var ue=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,d=(t,e,a,n)=>{for(var s=n>1?void 0:n?pe(e,a):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=(n?r(e,a,s):r(s))||s);return n&&s&&ue(e,a,s),s};let c=class extends b{constructor(){super(...arguments);o(this,"$refs");o(this,"result",[]);o(this,"queryLength",0);o(this,"phaseOne",!1);o(this,"phaseTwo",!1);o(this,"searchFromClick",!1);o(this,"fuse",null);o(this,"value","");o(this,"currentResult",0);o(this,"cursorPos",0);o(this,"input_cursor");o(this,"jsonSearch");o(this,"searchData",this.jsonSearch);o(this,"search");o(this,"eventName");o(this,"inputChangeEventName")}get options(){return{caseSensitive:!1,includeScore:!0,includeMatches:!1,tokenize:!1,matchAllTokens:!1,findAllMatches:!0,shouldSort:!0,threshold:.2,location:1,distance:10,maxPatternLength:12,minMatchCharLength:0,keys:["variable"]}}get noResults(){return this.result.length===0&&this.value!=""}get limitedResult(){return this.result.reverse()}get selectedResult(){return this.limitedResult[this.currentResult].item.variable}get currentLength(){return this.value.length}get calcTransform(){return"transform: translateY(-"+this.$refs.variableMenu.offsetHeight+"px);"}afterOpen(e){e.style.height="auto"}open(e){let a=getComputedStyle(e).width;e.style.width=a,e.style.position="absolute",e.style.visibility="hidden",e.style.height="auto";let n=getComputedStyle(e).height;e.style.width=null,e.style.position=null,e.style.visibility=null,e.style.height=0,getComputedStyle(e).height,setTimeout(()=>{e.style.height=n})}close(e){let a=getComputedStyle(e).height;e.style.height=a,getComputedStyle(e).height,setTimeout(()=>{e.style.height=0})}watchCursor(e){this.cursorPos=e.target.selectionStart,this.getSearchString(),this.noResults&&this.playClosingSequence(),this.value.length<=0&&this.playClosingSequence()}watchInput(e){this.value=e.target.value}watchValue(){this.$parent.$emit(this.inputChangeEventName,this.value),this.$emit(this.inputChangeEventName,this.value),this.value.includes("{")&&(this.getSearchString(),this.noResults&&this.playClosingSequence(),this.value.length<=0&&this.playClosingSequence()),this.value===""&&(this.result=[])}watchResult(e,a){(this.noResults||this.value==""||e.length!=a.length)&&(this.currentResult=this.limitedResult.length-1),this.$emit(this.eventName,this.result),this.$parent.$emit(this.eventName,this.result),this.noResults?this.playClosingSequence():this.playOpeningSequence()}getSearchString(){if(this.value.trim()==="")this.result=[];else{const e=this.cursorPos,a=this.value.lastIndexOf("{",e-1),n=this.value.substring(a,e),s=n.lastIndexOf("}");e>a&&s===-1&&a!==-1?(this.result=this.fuse.search(n),this.queryLength=n.length):this.playClosingSequence()}}keyEvent(e){e.keyCode===38&&this.currentResult>0&&(this.currentResult<=this.limitedResult.length-7&&this.$refs.resultArea.scrollBy(0,-32),e.preventDefault(),e.stopPropagation(),this.currentResult--),e.keyCode===40&&this.currentResult<this.limitedResult.length-1&&(this.currentResult>=6&&this.$refs.resultArea.scrollBy(0,32),e.stopPropagation(),this.currentResult++),e.keyCode===13&&this.phaseOne&&this.result!=[]&&(e.preventDefault(),e.stopPropagation(),this.mergeValues()),e.keyCode===27&&this.phaseOne&&this.blurSearch(),e.keyCode===9&&this.phaseOne&&this.result!=[]&&(e.preventDefault(),e.stopPropagation(),this.mergeValues())}mergeValues(){const e=this.cursorPos;this.value=this.value.substring(0,e)+this.selectedResult.substring(this.queryLength)+this.value.substring(e),setTimeout(()=>{this.result=[]}),this.$emit("update",this.value),this.searchFromClick&&this.searchFromClick}playClosingSequence(){this.phaseTwo&&(setTimeout(()=>{this.phaseTwo=!this.phaseTwo},100),setTimeout(()=>{this.phaseOne=!this.phaseOne},200))}playOpeningSequence(){this.phaseOne||(this.phaseOne=!this.phaseOne,setTimeout(()=>{this.phaseTwo=!this.phaseTwo},100))}initFuse(){this.fuse=new M(this.searchData,this.options),this.search&&(this.value=this.search)}blurSearch(){this.currentResult=0}mounted(){this.initFuse()}};d([i()],c.prototype,"input_cursor",2);d([i()],c.prototype,"jsonSearch",2);d([i({default:""})],c.prototype,"search",2);d([i({default:"fuseResultsUpdated"})],c.prototype,"eventName",2);d([i({default:"fuseInputChanged"})],c.prototype,"inputChangeEventName",2);d([w("value",{immediate:!0})],c.prototype,"watchValue",1);d([w("result")],c.prototype,"watchResult",1);c=d([v({})],c);var ce=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("div",{ref:"variableMenu",staticClass:"s-variablemenu",on:{input:function(n){return e.watchInput(n)},focus:function(n){return e.watchCursor(n)},click:function(n){return e.watchCursor(n)},keyup:function(n){return e.watchCursor(n)},keydown:e.keyEvent}},[a("transition",{attrs:{name:"expand",tag:"div"},on:{enter:e.open,"after-enter":e.afterOpen,leave:e.close}},[e.phaseTwo&&e.limitedResult.length>=1?a("div",{ref:"resultArea",staticClass:"s-variablemenu-results__cont",style:e.calcTransform},[a("transition-group",{attrs:{name:"s-variablemenu--fadeX"}},e._l(e.limitedResult,function(n,s){return a("div",{key:n.item.variable,staticClass:"s-variablemenu-results",class:{"s-active-result":e.currentResult===s},on:{mouseover:function(l){e.currentResult=s},mousedown:e.mergeValues,mouseup:e.blurSearch}},[a("div",{staticClass:"s-variablemenu__result--title"},[e._v(" "+e._s(n.item.variable)+" ")]),a("div",{staticClass:"s-variablemenu__result--desc"},[e._v(" "+e._s(n.item.description)+" ")])])}),0)],1):e._e()]),a("div",{ref:"inputCont",staticClass:"s-variablemenu--searchbar__cont"},[e._t("input")],2)],1)},de=[],me=g(c,ce,de,!1,null,null,null,null);const he=me.exports;var ge=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,be=(t,e,a,n)=>{for(var s=n>1?void 0:n?ve(e,a):e,l=t.length-1,r;l>=0;l--)(r=t[l])&&(s=(n?r(e,a,s):r(s))||s);return n&&s&&ge(e,a,s),s};let _=class extends b{constructor(){super(...arguments);o(this,"demoCode",W);o(this,"data","");o(this,"radioValue",!0);o(this,"checkboxValue1",!0);o(this,"checkboxValue2",!1);o(this,"checkboxValue3",!0);o(this,"checkboxValue4",!1);o(this,"selected","Option A");o(this,"selectedGroup","Option A");o(this,"multipleSelected",["Option B","Option C"]);o(this,"optionGroups",[{group:"Group A",items:["Option A","Option B","Option C"]},{group:"Group B",items:["Option A","Option B","Option C"]},{group:"Group C",items:["Option A","Option B","Option C"]}]);o(this,"optionSelected",["Glass Pint","Glass Beer"]);o(this,"objectSelected",{value:"glass-pint",title:"Glass Pint",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"});o(this,"statusValue",!0);o(this,"testingInput",null);o(this,"layoutValue","above");o(this,"jarValue","glass-pint");o(this,"varData",re);o(this,"variAreaValue","");o(this,"variTextValue","");o(this,"textInputValue","test");o(this,"numberInputValue",0);o(this,"emailInputValue","");o(this,"passwordInputValue","");o(this,"errorTextInputValue","");o(this,"textAreaInputValue","");o(this,"textInputPlaceholder","Placeholder");o(this,"emailInputPlaceholder","Placeholder");o(this,"passwordInputPlaceholder","Placeholder");o(this,"options",[{value:"glass-pint",title:"Glass Pint",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"},{value:"glass-beer",title:"Glass Beer",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer.png"},{value:"glass-beer-2",title:"Glass Beer 2",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer2.png"},{value:"glass-coffee",title:"Glass Coffee",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee.png"},{value:"glass-fancy",title:"Glass Fancy",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-fancy.png"},{value:"glass-whiskey",title:"Glass Whiskey",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-whiskey.png"},{value:"glass-burbon",title:"Glass Burbon",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-burbon.png"},{value:"glass-martini",title:"Glass Martini",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-martini.png"},{value:"glass-beer-3",title:"Glass Beer 3",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer3.png"},{value:"glass-wine",title:"Glass Wine",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-wine.png"},{value:"glass-baileys",title:"Glass Baileys",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-baileys.png"},{value:"glass-champagne",title:"Glass Champagne",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-champagne.png"},{value:"glass-coffee-no-handle",title:"Glass Coffee No Handle",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee-no-handle.png"},{value:"glass-plinko",title:"Glass Plinko",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-plinko.png"},{value:"glass-stocking",title:"Glass Stocking",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-stocking.png"},{value:"glass-snowman",title:"Glass Snowman",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-snowman.png"}]);o(this,"show",["Bounce","Bounce In","Bounce In Down","Bounce In Left","Bounce In Right","Bounce In Up","Fade In","Fade In Down","Fade In Down Big","Fade In Left","Fade In Left Big","Fade In Right","Fade In","Fade In Up","Fade In Up Big"])}};_=be([v({components:{Checkbox:D,DemoSection:j,FormGroup:G,ImagePickerInput:z,Radio:O,Selector:A,StatusSwitch:X,TaggingInput:ie,TextArea:I,TextInput:k,VariableMenu:he}})],_);var fe=function(){var e=this,a=e._self._c;return e._self._setupProxy,a("div",[a("h1",[e._v("Inputs")]),a("div",{staticClass:"section"},[a("h2",[e._v("Text Inputs")]),e._m(0),e._m(1),a("DemoSection",{attrs:{title:"Text Inputs",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("FormGroup",[a("TextInput",{attrs:{slot:"input",type:"text",label:"Text Input",name:"textExample",placeholder:e.textInputPlaceholder,autoComplete:"on"},slot:"input",model:{value:e.textInputValue,callback:function(n){e.textInputValue=n},expression:"textInputValue"}}),a("TextInput",{directives:[{name:"validate",rawName:"v-validate",value:"required|between:0,100",expression:"'required|between:0,100'"}],attrs:{slot:"input",type:"number",label:"Number Input",name:"numberinputExample",placeholder:e.textInputPlaceholder,min:0,max:100,error:e.errors.first("numberinputExample")},slot:"input",model:{value:e.numberInputValue,callback:function(n){e.numberInputValue=n},expression:"numberInputValue"}}),a("TextInput",{attrs:{slot:"input",type:"email",label:"Email Input",name:"emailExample",placeholder:e.emailInputPlaceholder},slot:"input",model:{value:e.emailInputValue,callback:function(n){e.emailInputValue=n},expression:"emailInputValue"}}),a("TextInput",{attrs:{slot:"input",type:"password",label:"Password Input",name:"passwordExample",placeholder:e.passwordInputPlaceholder,disabled:""},slot:"input",model:{value:e.passwordInputValue,callback:function(n){e.passwordInputValue=n},expression:"passwordInputValue"}}),a("TextInput",{attrs:{slot:"input",type:"text",label:"Input With Error",name:"textExample",placeholder:e.textInputPlaceholder,error:"Enter a number"},slot:"input",model:{value:e.errorTextInputValue,callback:function(n){e.errorTextInputValue=n},expression:"errorTextInputValue"}}),a("TextArea",{attrs:{slot:"input",label:"Text Area",name:"myarea",placeholder:"This is where you put some cool stuff",autoResize:"true",maxLength:1e3,maxHeight:100},slot:"input",model:{value:e.textAreaInputValue,callback:function(n){e.textAreaInputValue=n},expression:"textAreaInputValue"}})],1)]},proxy:!0}])})],1),a("div",{staticClass:"section"},[a("h2",[e._v("Text Inputs with Variable Menu Wrapper")]),a("p",[e._v(" A new way to navigate variables, just wrap your input with the Variable Menu. This is not work with FormGroup preformatting. ")]),a("DemoSection",{attrs:{title:"Variable Menu",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("VariableMenu",{attrs:{jsonSearch:e.varData}},[a("text-input",{attrs:{slot:"input",type:"text",name:"textExample",placeholder:"w/ Variable Menu"},slot:"input",model:{value:e.variTextValue,callback:function(n){e.variTextValue=n},expression:"variTextValue"}})],1),a("VariableMenu",{attrs:{jsonSearch:e.varData}},[a("TextArea",{ref:"textArea",attrs:{slot:"input",name:"myarea",placeholder:"w/ Variable Menu",rows:"3",maxLength:1e3,maxHeight:100},slot:"input",model:{value:e.variAreaValue,callback:function(n){e.variAreaValue=n},expression:"variAreaValue"}})],1)]},proxy:!0}])}),e._m(2)],1),a("div",{staticClass:"section"},[a("h2",[e._v("Tagging Input")]),e._m(3),a("DemoSection",{attrs:{title:"Tagging Input",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("TaggingInput",{attrs:{name:"aliases",placeholder:"!hello",maxItems:"10",inputValidation:"required"},on:{keydown:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"space",32,n.key,[" ","Spacebar"]))return null;n.preventDefault()}}})]},proxy:!0}])})],1),a("div",{staticClass:"section"},[a("h2",[e._v("Selector")]),e._m(4),a("DemoSection",{attrs:{title:"Selector",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("FormGroup",[a("Selector",{attrs:{slot:"input",options:["Option A","Option B","Option C"]},slot:"input",model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),a("Selector",{attrs:{slot:"input",options:e.optionGroups,"group-values":"items","group-label":"group",searchable:!1},slot:"input",model:{value:e.selectedGroup,callback:function(n){e.selectedGroup=n},expression:"selectedGroup"}}),a("Selector",{attrs:{slot:"input",options:["Option A","Option B","Option C"],disabled:""},slot:"input",model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),a("Selector",{attrs:{slot:"input",multiple:"",options:["Option A","Option B","Option C"],searchable:!1},slot:"input",model:{value:e.multipleSelected,callback:function(n){e.multipleSelected=n},expression:"multipleSelected"}}),a("Selector",{attrs:{slot:"input",multiple:"",options:["Option A","Option B","Option C"],disabled:""},slot:"input",model:{value:e.multipleSelected,callback:function(n){e.multipleSelected=n},expression:"multipleSelected"}})],1)]},proxy:!0}])}),e._m(5)],1),a("div",{staticClass:"section"},[a("h2",[e._v("Checkboxes and Radios")]),e._m(6),a("div",{staticClass:"section"},[a("h2",[e._v("Single Checkbox")]),a("DemoSection",{attrs:{title:"Checkbox",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("Checkbox",{attrs:{id:"checkbox",name:"checkbox",label:"Checkbox Label"},model:{value:e.checkboxValue1,callback:function(n){e.checkboxValue1=n},expression:"checkboxValue1"}})]},proxy:!0}])})],1),a("div",{staticClass:"section"},[a("h2",[e._v("Checkbox Group")]),a("DemoSection",{attrs:{title:"Checkbox Group",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("div",{staticClass:"s-checkbox-group"},[a("Checkbox",{attrs:{id:"checkbox1",name:"checkbox1",label:"Checkbox Label 1"},model:{value:e.checkboxValue2,callback:function(n){e.checkboxValue2=n},expression:"checkboxValue2"}}),a("Checkbox",{attrs:{id:"checkbox2",name:"checkbox2",label:"Checkbox Label 2"},model:{value:e.checkboxValue3,callback:function(n){e.checkboxValue3=n},expression:"checkboxValue3"}}),a("Checkbox",{attrs:{id:"checkbox3",name:"checkbox3",label:"Checkbox Label 3"},model:{value:e.checkboxValue4,callback:function(n){e.checkboxValue4=n},expression:"checkboxValue4"}})],1)]},proxy:!0}])})],1)]),a("div",{staticClass:"section"},[a("h2",[e._v("Radios")]),a("DemoSection",{attrs:{title:"Radios",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("div",{staticClass:"s-checkbox-group"},[a("Radio",{attrs:{id:"radio1",name:"radioGroup",label:"Enabled",val:!0},model:{value:e.radioValue,callback:function(n){e.radioValue=n},expression:"radioValue"}}),a("Radio",{attrs:{id:"radio2",name:"radioGroup",label:"Disabled",val:!1},model:{value:e.radioValue,callback:function(n){e.radioValue=n},expression:"radioValue"}})],1)]},proxy:!0}])}),e._m(7)],1),a("div",{staticClass:"section"},[a("h2",[e._v("Status Switch")]),e._m(8),a("div",{staticClass:"section"},[a("DemoSection",{attrs:{title:"Status Switch",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("FormGroup",[a("StatusSwitch",{attrs:{slot:"input",label:"Switch Label"},slot:"input",model:{value:e.statusValue,callback:function(n){e.statusValue=n},expression:"statusValue"}}),a("StatusSwitch",{attrs:{slot:"input",size:"small",label:"Small Switch Label"},slot:"input",model:{value:e.statusValue,callback:function(n){e.statusValue=n},expression:"statusValue"}})],1)]},proxy:!0}])})],1),e._m(9)]),a("div",{staticClass:"section"},[a("h2",[e._v("Image Input Picker")]),e._m(10),a("div",{staticClass:"section"},[a("h3",[e._v("Default")]),a("p",[e._v(" By default, the image input picker is setup to have our Alert Box layout styles as the options. ")]),a("DemoSection",{attrs:{title:"Default Image Input Picker",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("ImagePickerInput",{model:{value:e.layoutValue,callback:function(n){e.layoutValue=n},expression:"layoutValue"}})]},proxy:!0}])})],1),a("div",{staticClass:"section"},[a("h3",[e._v("Custom")]),a("p",[e._v(" You can pass in any options you'd like with the options prop. This is an example using our Jar options. ")]),a("DemoSection",{attrs:{title:"Custom Image Input Picker",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[a("ImagePickerInput",{attrs:{options:e.options},model:{value:e.jarValue,callback:function(n){e.jarValue=n},expression:"jarValue"}})]},proxy:!0}])})],1)])])},xe=[function(){var t=this,e=t._self._c;return t._self._setupProxy,e("p",[t._v(" These 6 fields below are wrapped in a "),e("code",[t._v("FormGroup")]),t._v(" component. This will put 16px of margin between form fields and 24px margin between form groups. ")])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("pre",[e("code",[t._v(`import { TextInput, TextArea, VariableMenu } from 'streamlabs-beaker';

components: {
  TextInput,
  TextArea,
  VariableMenu
}`)])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("boolean")]),e("td",[t._v("null")]),e("td",[t._v(" Puts a disabled class on the form field and disables the input. ")])]),e("tr",[e("td",[t._v("error")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" If there is error text, error classes will go on the input - we plan to add better validation handling. ")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Optional label for the input.")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Input name attribute.")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Input placeholder text.")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("string")]),e("td",[t._v("text")]),e("td",[t._v(" Input type: "),e("code",[t._v("text")]),t._v(", "),e("code",[t._v("email")]),t._v(", "),e("code",[t._v("password")]),t._v(". ")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Input value using v-model.")])]),e("tr",[e("td",[t._v("readonly")]),e("td",[t._v("boolean")]),e("td",[t._v("null")]),e("td",[t._v("Specifies that an input field is read-only.")])])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("pre",[e("code",[t._v(`import { TaggingInput } from 'streamlabs-beaker';

components: {
  TaggingInput
}`)])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("pre",[e("code",[t._v(`import { Selector } from 'streamlabs-beaker';

components: {
  Selector
}`)])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Current selected value.")])]),e("tr",[e("td",[t._v("options")]),e("td",[t._v("[''] or {}")]),e("td",[t._v("null")]),e("td",[t._v("Array of strings or objects to use as the options.")])]),e("tr",[e("td",[t._v("multiple")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("Optional label for the input.")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("String")]),e("td",[t._v("''")]),e("td",[t._v("Equivalent to the `placeholder` attribute on an input.")])]),e("tr",[e("td",[t._v("searchable")]),e("td",[t._v("Boolean")]),e("td",[t._v("true")]),e("td",[t._v("Optional label for the input.")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v(" Puts a disabled class on the form field and disables the input. ")])])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("pre",[e("code",[t._v(`import { Checkbox, Radio } from 'streamlabs-beaker';

components: {
  Checkbox,
  Radio
}`)])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("id")]),e("td",[t._v("string")]),e("td",[t._v('""')]),e("td",[t._v("Indentifier for associated label.")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("string")]),e("td",[t._v('""')]),e("td",[t._v("Name for radio group.")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Optional label for the radio input.")])]),e("tr",[e("td",[t._v("val")]),e("td",[t._v("string, boolean")]),e("td",[t._v('""')]),e("td",[t._v("Radio input value when selected")])])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("pre",[e("code",[t._v(`import { StatusSwitch } from 'streamlabs-beaker';

components: {
  StatusSwitch
}`)])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Available for v-model 2-way data binding.")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Optional label for the input.")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v(" Other available sizes. Current alternate size option: "),e("code",[t._v("small")]),t._v(". ")])])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("pre",[e("code",[t._v(`import { ImagePickerInput } from 'streamlabs-beaker';

components: {
  ImagePickerInput
}`)])])}],_e=g(_,fe,xe,!1,null,null,null,null);const je=_e.exports;export{je as default};
//# sourceMappingURL=Inputs.4dfd53c1.js.map

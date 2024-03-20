var j=Object.defineProperty;var A=(e,s,t)=>s in e?j(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var o=(e,s,t)=>(A(e,typeof s!="symbol"?s+"":s,t),t);import{C as b,P as l,V as f,n as x,W as y}from"./index-e8bb31bb.js";import{C as G,R as B,S as M}from"./Selector-440bdcee.js";import{D as $}from"./DemoSection-b2dfe451.js";import{F}from"./FormGroup-8689511b.js";import{i as q}from"./ResizeObserver.es-0f9f8adb.js";import{o as L,T as P}from"./TextInput-5b58a628.js";import{B as E}from"./Button-3cf72d47.js";import{F as H}from"./fuse.esm-88e2763d.js";import"./Accordion-79d22a9d.js";import"./_baseClone-20eb31a7.js";var z=Object.defineProperty,W=Object.getOwnPropertyDescriptor,_=(e,s,t,a)=>{for(var n=a>1?void 0:a?W(s,t):s,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(a?r(s,t,n):r(n))||n);return a&&n&&z(s,t,n),n};let v=class extends f{constructor(){super(...arguments);o(this,"$refs");o(this,"value");o(this,"width");o(this,"height");o(this,"options");o(this,"containerWidth",0)}get selectedItemIndex(){return this.options.findIndex(t=>t.value===this.value)}get totalRows(){const t=this.options.length,a=(parseInt(this.width,10)||64)+8,n=t*a;return Math.ceil(n/this.containerWidth)}get itemsPerRow(){const t=(parseInt(this.width,10)||64)+8;return Math.floor(this.containerWidth/t)}get itemsInFinalRow(){return this.options.length%this.itemsPerRow}get itemPosMatrix(){let t=[],a=1,n=1,i=this.options.length,r=0;for(;r<i;)t.push([a,n]),n++,n>this.itemsPerRow&&(n=1,a++),r++;return t}mounted(){this.$nextTick(()=>{const t=document.querySelector(".s-image-picker-input");new q((n,i)=>{for(const r of n){const{left:je,top:Ae,width:D,height:Ge}=r.contentRect;this.containerWidth=D}}).observe(t),this.containerWidth=t.clientWidth})}emitInput(t){this.$emit("input",t)}setValueByKeyPress(t){let a=[...this.itemPosMatrix[this.selectedItemIndex]],n=this.selectedItemIndex;t==="UP"&&(a[0]<=1?a[0]=1:a[0]--),t==="DOWN"&&(a[0]>=this.totalRows?a[0]=this.totalRows:(a[0]++,a[1]>this.itemsInFinalRow&&(a[1]=this.itemsInFinalRow))),t==="LEFT"&&(a[0]<=1&&a[1]<=1?a[1]=1:a[0]>1&&a[1]===1?(a[0]--,a[1]=this.itemsPerRow):a[1]--),t==="RIGHT"&&(this.options.length<this.itemsPerRow&&a[1]>=this.options.length?a[1]=this.options.length:a[1]>=this.itemsInFinalRow&&a[0]===this.totalRows?a[1]=this.itemsInFinalRow:a[1]===this.itemsPerRow&&a[0]<this.totalRows?(a[0]++,a[1]=1):a[1]++),n=this.itemPosMatrix.findIndex(i=>i[0]===a[0]&&i[1]===a[1]),this.$refs.imagePickerItem[n].focus(),this.emitInput(this.options[n].value)}};_([l({default:"above"})],v.prototype,"value",2);_([l(String)],v.prototype,"width",2);_([l(String)],v.prototype,"height",2);_([l({default:()=>[{value:"above",title:"Above",image:"https://cdn.streamlabs.com/layouts/img/above.png"},{value:"banner",title:"Banner",image:"https://cdn.streamlabs.com/layouts/img/banner.png"},{value:"side",title:"Side",image:"https://cdn.streamlabs.com/layouts/img/side.png"}]})],v.prototype,"options",2);v=_([b({})],v);var N=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"s-image-picker-input"},e._l(e.options,function(a){return t("div",{key:a.value,ref:"imagePickerItem",refInFor:!0,staticClass:"s-image-picker-input__option",class:[e.value===a.value?"active":""],style:{width:e.width,height:e.height},attrs:{value:a.value,title:a.title,image:a.image,tabindex:e.value===a.value?"0":"-1"},on:{click:function(n){return e.emitInput(a.value)},keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?null:(n.preventDefault(),e.setValueByKeyPress("UP"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?null:(n.preventDefault(),e.setValueByKeyPress("DOWN"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&n.button!==0?null:(n.preventDefault(),e.setValueByKeyPress("LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&n.button!==2?null:(n.preventDefault(),e.setValueByKeyPress("RIGHT"))}]}},[t("img",{attrs:{src:a.image}})])}),0)},U=[];const k={};var Q=x(v,N,U,!1,Y,null,null,null);function Y(e){for(let s in k)this[s]=k[s]}const K=function(){return Q.exports}(),X=`<template>
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
`;var J=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,w=(e,s,t,a)=>{for(var n=a>1?void 0:a?Z(s,t):s,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(a?r(s,t,n):r(n))||n);return a&&n&&J(s,t,n),n};let g=class extends f{constructor(){super(...arguments);o(this,"label");o(this,"size");o(this,"value")}};w([l()],g.prototype,"label",2);w([l()],g.prototype,"size",2);w([l({default:!1})],g.prototype,"value",2);g=w([b({})],g);var ee=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"s-status-switch",class:{enabled:!!e.value},attrs:{tabindex:"0"},on:{click:function(a){return e.$emit("input",!e.value)},keydown:[function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"space",32,a.key,[" ","Spacebar"])?null:(a.preventDefault(),e.$emit("input",!e.value))},function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),e.$emit("input",!e.value))}]}},[t("div",{staticClass:"s-status-switch__paddle",class:{"s-status-switch__paddle--small":e.size==="small"}}),e.label?t("label",[e._v(e._s(e.label))]):e._e(),e._t("default")],2)},te=[];const I={};var ae=x(g,ee,te,!1,ne,null,null,null);function ne(e){for(let s in I)this[s]=I[s]}const se=function(){return ae.exports}();var oe=Object.defineProperty,le=Object.getOwnPropertyDescriptor,d=(e,s,t,a)=>{for(var n=a>1?void 0:a?le(s,t):s,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(a?r(s,t,n):r(n))||n);return a&&n&&oe(s,t,n),n};let p=class extends f{constructor(){super(...arguments);o(this,"$refs");o(this,"name");o(this,"label");o(this,"placeholder");o(this,"value");o(this,"error");o(this,"helpText");o(this,"cols");o(this,"rows");o(this,"maxLength");o(this,"autoResize");o(this,"maxHeight");o(this,"localValue","");o(this,"hasScroll",!1)}created(){this.$parent.$on("update",this.updateValue)}mounted(){this.updateSize(),this.updateCountPos()}focus(){this.$refs.textArea.focus()}get filteredListeners(){return L(this.$listeners,["input"])}get currentLength(){return this.value.length}updated(){this.updateCountPos()}onValueChange(t){this.$emit("input",t.target.value),this.updateSize()}onKeyUp(t){this.$emit("keyup",t.target.selectionStart)}onFocus(t){this.$emit("focus",t.target.selectionStart)}onClick(t){this.$emit("click",t.target.selectionStart)}updateValue(t){this.$refs.textArea.value=t,this.$emit("input",t)}updateSize(){if(this.autoResize){this.$refs.textArea.style.cssText="height:auto;";const t=this.$refs.textArea.scrollHeight>this.maxHeight&&this.maxHeight?this.maxHeight+2:this.$refs.textArea.scrollHeight+2;this.$refs.textArea.style.cssText="height:"+t+"px"}}updateCountPos(){this.$nextTick(()=>{const t=this.$refs.textArea;this.hasScroll=t.scrollHeight>t.clientHeight})}};d([l()],p.prototype,"name",2);d([l()],p.prototype,"label",2);d([l()],p.prototype,"placeholder",2);d([l()],p.prototype,"value",2);d([l()],p.prototype,"error",2);d([l()],p.prototype,"helpText",2);d([l({default:100})],p.prototype,"cols",2);d([l({default:3})],p.prototype,"rows",2);d([l()],p.prototype,"maxLength",2);d([l()],p.prototype,"autoResize",2);d([l()],p.prototype,"maxHeight",2);p=d([b({})],p);var ie=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"s-form-area",class:{"s-form-area--with-label":e.label}},[t("div",{staticClass:"s-form-area__container"},[t("textarea",e._g({ref:"textArea",class:{"s-form-area__input":!0,"s-form-area__input--error":!!e.error,"s-form-area__input--count":!!e.maxLength},attrs:{name:e.name,cols:e.cols,rows:e.rows,placeholder:e.placeholder,maxlength:e.maxLength},domProps:{value:e.value},on:{input:e.onValueChange,focus:e.onFocus,click:e.onClick,keyup:e.onKeyUp}},e.filteredListeners)),e.label?t("label",{staticClass:"s-form-area__label",class:{"s-form-area__label--top":e.value!==""}},[e._v(e._s(e.label))]):e._e(),e.error?t("div",{staticClass:"s-form-area__input-error"},[t("i",{staticClass:"icon-error"}),e._v(" "+e._s(e.error)+" ")]):e._e(),t("div",{staticClass:"s-form-area__characters",class:{"s-form-area__characters--scrollbar":e.hasScroll}},[e.maxLength?t("span",{staticClass:"s-form-area__char-count"},[e._v(e._s(e.currentLength)+"/"+e._s(e.maxLength))]):e._e()])]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.helpText,expression:"helpText"}],staticClass:"s-form-area__help-text"},[e._v(e._s(e.helpText))])])},re=[];const S={};var ue=x(p,ie,re,!1,pe,null,null,null);function pe(e){for(let s in S)this[s]=S[s]}const O=function(){return ue.exports}();var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,c=(e,s,t,a)=>{for(var n=a>1?void 0:a?de(s,t):s,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(a?r(s,t,n):r(n))||n);return a&&n&&ce(s,t,n),n};let u=class extends f{constructor(){super(...arguments);o(this,"name");o(this,"label");o(this,"placeholder");o(this,"buttonText");o(this,"buttonVariation");o(this,"value");o(this,"text");o(this,"inputValidation");o(this,"prefix");o(this,"tagVariation");o(this,"maxItems");o(this,"input","");o(this,"tags",[])}watchValue(t){this.tags=t}watchText(t){this.input=t}onAdd(){if(this.$validator.errors.items.length!==0){this.$emit("error",this.$validator.errors.items,!1);return}if(this.tags.length>=this.maxItems){this.$emit("error",["Max items reached"],!0);return}let t=this.input.trim();!this.tags.find(n=>this.prefix&&!t.startsWith(this.prefix)?n.toLowerCase()===this.prefix+t.trim().toLowerCase():n.toLowerCase()===t.trim().toLowerCase())&&t.length!==0&&(this.prefix&&!t.startsWith(this.prefix)&&(t=this.prefix+t),this.tags.push(t),this.input="",this.emitTagEvents("add"))}onRemove(t){this.tags.splice(t,1),this.emitTagEvents("remove")}emitTagEvents(...t){["input","change","update:value",...t].forEach(a=>this.$emit(a,this.tags))}};c([l()],u.prototype,"name",2);c([l()],u.prototype,"label",2);c([l()],u.prototype,"placeholder",2);c([l({default:"Add Tag"})],u.prototype,"buttonText",2);c([l({default:"default"})],u.prototype,"buttonVariation",2);c([l({default:()=>[]})],u.prototype,"value",2);c([l({default:""})],u.prototype,"text",2);c([l()],u.prototype,"inputValidation",2);c([l()],u.prototype,"prefix",2);c([l({default:"default"})],u.prototype,"tagVariation",2);c([l({default:25})],u.prototype,"maxItems",2);c([y("value",{immediate:!0})],u.prototype,"watchValue",1);c([y("text",{immediate:!0})],u.prototype,"watchText",1);u=c([b({components:{TextInput:P,TextArea:O,Button:E}})],u);var me=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"s-tagging-input"},[t("div",{staticClass:"s-tagging-input__container"},[t("text-input",{directives:[{name:"validate",rawName:"v-validate",value:e.inputValidation,expression:"inputValidation"}],attrs:{slot:"input",name:e.name,label:e.label,placeholder:e.placeholder,type:"text",error:e.errors.first(e.name)},on:{input:function(a){return e.$emit("update:text",a)},keydown:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),e.onAdd.apply(null,arguments))}},slot:"input",model:{value:e.input,callback:function(a){e.input=a},expression:"input"}}),t("Button",{attrs:{title:e.buttonText,type:"button",variation:e.buttonVariation,disabled:e.value.length>=e.maxItems},on:{click:e.onAdd}})],1),t("div",{staticClass:"s-tagging-input__tags"},e._l(e.value,function(a,n){return t("div",{key:n,staticClass:"s-tagging-input-tag",class:[`s-tagging-input-tag--${e.tagVariation}`]},[t("div",{staticClass:"s-tagging-input-tag__text"},[e._v(e._s(a))]),t("i",{staticClass:"s-tagging-input-tag__icon icon-close",on:{click:function(i){return e.onRemove(n)}}})])}),0)])},he=[];const T={};var ve=x(u,me,he,!1,ge,null,null,null);function ge(e){for(let s in T)this[s]=T[s]}const be=function(){return ve.exports}(),fe=[{variable:"{min}",description:"Replaces {min} with the minimum amount of loyalty that has to be bet.",example:'Betting is open for "{title}" use {command} <{options}> <{min}-{max}> to register your bet. ',result:'Betting is open for "How many tries will this boss take me?" use !bet <1 | 2 | 3 | 4 | 5+> <10-1000> to register your bet',tags:["Betting"]},{variable:"{max}",description:"Replaces {max} with the maximum amount of loyalty that can be bet.",example:'Betting is open for "{title}" use {command} <{options}> <{min}-{max}> to register your bet. ',result:'Betting is open for "How many tries will this boss take me?" use !bet <1 | 2 | 3 | 4 | 5+> <10-1000> to register your bet',tags:["Betting"]},{variable:"{option}",description:"Replaces {option} the winning option of a poll or betting.",example:"{option} was the most voted option of the poll with {amount}% of the votes.",result:"Legend of Zelda was the most voted option of the poll with 56% of the votes.",tags:["Betting","Poll"]},{variable:"{options}",description:"Replaces {options} with all the available options for a poll or betting.",example:'A poll has opened for "Which started should I pick?" use !vote <{options}> to vote.',result:'A poll has opened for "Which started should I pick?" use !vote <Pikachu | Squirtle | Charmander> to vote.',tags:["Betting","Poll"]},{variable:"{cooldown}",description:"Replaces {cooldown} variable with command's remaining cooldown.",example:"{user.name} -> {command} is on cooldown for {cooldown} seconds.",result:"Streamlabs -> !test is on cooldown for 20 seconds.",tags:["Command Settings"]},{variable:"{command}",description:"Replaces {command} with current command that's being used.",example:"This command is called {command}",result:"This command is called !test",tags:["Custom Commands"]},{variable:"{user.id}",description:"Replaces {user.id} variable with the id of the current user.",example:"My Youtube Channel Id is https://youtube.com/channel/{user.id}",result:"My Youtube Channel Id is https://youtube.com/channel/UCNL8jaJ9hId96P13QmQXNtA",tags:["Custom Commands"]},{variable:"{user.name}",description:"Replaces {user.name} variable with the viewers name.",example:"My name is {user.name}",result:"My name is Streamlabs",tags:["Custom Commands"]},{variable:"{randnum.<min>-<max>}",description:"Replaces {randnum.<min>-<max>} variable the random number between min & max.",example:"{user.name}, you have rolled {randnum.1-100}.",result:"Streamlabs, you have rolled 100.",tags:["Custom Commands"]},{variable:"{target.name}",description:"Replaces {target.name} variable with the target's name.",example:"{user.name} gives {target.name} a hug!",result:"Streamlabs gives RedUnicornCat38745 a hug!",tags:["Custom Commands"]},{variable:"{arg}",description:"Replaced by a word in a specific position, arg is denoted by a number.",example:"Your first three words: {1} {2} {3}",result:"Your first three words: I am going",tags:["Custom Commands"]},{variable:"{start:end}",description:"Replaced with all the words between the start and end.",example:"The colors you picked are: {1:3}",result:"he colors you picked are: Red Green Blue",tags:["Custom Commands"]},{variable:"{uptime}",description:"Replaces {uptime} with how long the stream has been live for. (Twitch/Mixer only)",example:"The stream has been live for {uptime}",result:"The stream has been live for 10 minutes 50 seconds",tags:["Custom Commands"]},{variable:"{time.<continent>/<city>}",description:"Replaces {time.<continent>/<city>} variable with the current time for that specific continent/city.",example:"Right now it is {time.Australia/Sydney} in Sydney.",result:"Right now it is 12:00 in Sydney.",tags:["Custom Commands"]},{variable:"{readapi.<url_here>}",description:"Replaces {readapi.<url_here>} variable with the data from the API endpoint.",example:"The stream has been live for {readapi.https://decapi.me/twitch/uptime?channel=streamlabs}",result:"The stream has been live for 17 hours, 50 minutes, 55 seconds",tags:["Custom Commands"]},{variable:"{merch.link}",description:"Replaces {merch.link} with your Streamlabs Merch link.",example:"You can checkout my merch store over at {merch.link}",result:"You can checkout my merch store over at https://streamlabs.com/streamlabs#/merch",tags:["Custom Commands"]},{variable:"{donation.link}",description:"Replaces {donation.link} with your Streamlabs donation link.",example:"Do you want to support the stream? You can do so by going to {donation.link}",result:"Do you want to support the stream? You can do so by going to https://streamlabs.com/streamlabs",tags:["Custom Commands"]},{variable:"{facemask.link}",description:"Replaces {facemask.link} with your Streamlabs Facemask Donation link.",example:"Do you want to put awesome masks on my face? Go to {facemask.link}",result:"Do you want to put awesome masks on my face? Go to https://streamlabs.com/streamlabs/masks",tags:["Custom Commands"]},{variable:"{channel.name}",description:"Replaces {channel.name} with your Channel name.",example:"Our channel is {channel.name}",result:"Our channel is Streamlabs",tags:["Custom Commands"]},{variable:"{streamlabels.<filename>}",description:"Replaces {streamlabels.<filename>} with the data from the streamlabels file.",example:"Session Top Donator: {streamlabels.session_top_donator}",result:"Session Top Donator: AnkhHeart",tags:["Custom Commands"]},{variable:"{count <name>}",description:"Increments the counter by one and displays it.",example:"Deaths: {count deaths}",result:"Deaths: 2",tags:["Custom Commands"]},{variable:"{count <name> +<value>}",description:"Increments the counter by your value and displays it.",example:"Deaths: {count deaths +5}",result:"Deaths: 7",tags:["Custom Commands"]},{variable:"{count <name> -<value>}",description:"Decrements the counter by your value and displays it.",example:"Deaths: {count deaths -5}",result:"Deaths: 2",tags:["Custom Commands"]},{variable:"{count <name> <value>}",description:"Sets the counter to your value and displays it.",example:"Deaths: {count deaths 100}",result:"Deaths: 100",tags:["Custom Commands"]},{variable:"{getcount <name>}",description:"Displays the specified counter.",example:"Deaths: {count deaths}",result:"Deaths: 100",tags:["Custom Commands"]},{variable:"{channel.subpoints}",description:"Replaces {channel.subpoints} with channel's sub points.",example:"Sub Count: {channel.subpoints}",result:"Sub Count: 100",tags:["Custom Commands","Twitch"]},{variable:"{user.followage}",description:"Replaces {user.followage} with the amount of time the user has been following the channel.",example:"{user.name} has been following the channel for {user.followage}",result:"AnkhHeart has been following the channel for 2 days 3 weeks",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{target.followage}",description:"Replaces {target.followage} with the amount of time the target has been following the channel.",example:"{target.name} has been following the channel for {target.followage}",result:"AnkhHeart has been following the channel for 2 days 3 weeks",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{channel.title}",description:"Replaces {channel.title} with the title of the stream.",example:"The title is {channel.title}",result:"The title is Playing Apex Legends o.o",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{user.title}",description:"Replaces {user.title} with the user's stream title.",example:"The title is {user.title}",result:"The title is Playing Apex Legends o.o",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{target.title}",description:"Replaces {target.title} with the target's stream title.",example:"The title is {target.title}",result:"The title is Playing Apex Legends o.o",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{touser.title}",description:"Replaces {touser.title} with the target's or user's stream title.",example:"The title is {touser.title}",result:"The title is Playing Apex Legends o.o",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{channel.game}",description:"Replaces {channel.game} with the currently played game.",example:"The game is {channel.game}",result:"The game is Apex Legends",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{user.game}",description:"Replaces {user.game} with user's last played game.",example:"The game is {user.game}",result:"The game is Apex Legends",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{target.game}",description:"Replaces {target.game} with target's last played game.",example:"The game is {target.game}",result:"The game is Apex Legends",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{touser.game}",description:"Replaces {touser.game} with target's or user's last played game.",example:"The game is {touser.game}",result:"The game is Apex Legends",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{channel.followers}",description:"Replaces {channel.followers} with channel's follower count.",example:"Follower Count: {channel.followers}",result:"Follower Count: 123",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{user.followers}",description:"Replaces {user.followers} with user's follower count.",example:"Follower Count: {user.followers}",result:"Follower Count: 123",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{target.followers}",description:"Replaces {target.followers} with target's follower count.",example:"Follower Count: {target.followers}",result:"Follower Count: 123",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{touser.followers}",description:"Replaces {touser.followers} with target's or user's follower count.",example:"Follower Count: {touser.followers}",result:"Follower Count: 123",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{channel.subs}",description:"Replaces {channel.subs} with channel's sub count.",example:"Sub Count: {channel.subs}",result:"Sub Count: 100",tags:["Custom Commands","Twitch","Mixer"]},{variable:"{reward}",description:"Replaces {reward} with the amount of currency you have earned through gamble.",example:"Rolled {amount}, @{user.name} won {reward} {loyalty.name} and now has {user.points} {loyalty.name}",result:"Rolled 100, @Streamlabs won 200 points and now has 500 points.",tags:["Gamble"]},{variable:"{prize}",description:"Replaces {prize} with the giveaway prize. Only works with giveaways.",example:"A {prize} raffle has started for {permission}. Use {command} to enter the raffle.",result:"A t-shirt raffle has started for everyone. Use !raffle to enter the raffle.",tags:["Giveaways"]},{variable:"{permission}",description:"Replaces {permission} with the permission required to join a Giveaway.",example:"A {prize} raffle has started for {permission}. Use {command} to enter the raffle.",result:"A t-shirt raffle has started for everyone. Use !raffle to enter the raffle.",tags:["Giveaways"]},{variable:"{amount}",description:"Replaces {amount} variable with donation amount, tickets, months, etc..",example:"@{user.name}, you received {amount} ticket(s)!",result:"@Streamlabs, you received 10 ticket(s)!",tags:["Giveaways"]},{variable:"{link}",description:"Replaces {link} with your Merch giveaway redemption link.",example:"You can redeem your giveaway prize over at {link}",result:"You can redeem your giveaway prize over at https://streamlabs.com/streamlabs?redemption=true#/merch",tags:["Giveaways"]},{variable:"{timer}",description:"Replaces {timer} with the remaining time of a giveaway/poll/betting countdown timer. Only available in the repeat message.",example:'A Poll is going on for "{title}" use {command} <{options}> to vote. You have {timer} seconds left to join.',result:'A Poll is going on for "What starter should I pick?" use !vote <Squirtle | Charmander | Bulbasaur> to vote. You have 600 seconds left to join.',tags:["Giveaways","Betting","Poll"]},{variable:"{results}",description:"Replaces {results} with the names of the survivors or a heist or poll results.",example:"A few managed to survive: {results}",result:"A few managed to survive: SOWHOYOUdotCOM (200), AnkhHeart (200)",tags:["Heist","Poll"]},{variable:"{duration}",description:"Replaces {duration} with the duration of the permit.",example:"@{target.name}, You have been given {duration} seconds to post a link!",result:"@AnkhHeart, You have 60 seconds to post a link!",tags:["Link Protection"]},{variable:"{loyalty.toppoints}",description:"Replaces {loyalty.toppoints} with a list of the top 10 users by points.",example:"Top {amount} Points: {loyalty.toppoints}.",result:"Top 10 Points: 1. AnkhHeart (1000), 2. H4rsh4 (999), 3. MissBlackBear (990), 4. Raichu (989), ... ",tags:["Loyalty"]},{variable:"{loyalty.tophours}",description:"Replaces {loyalty.tophours} with a list of the top 10 users by hours.",example:"Top {amount} Points: {loyalty.tophours}.",result:"Top 10 Points: 1. AnkhHeart (5.8), 2. H4rsh4 (4.2), 3. MissBlackBear (3.5), 4. Raichu (3.4), ... ",tags:["Loyalty"]},{variable:"{user.points}",description:"Replaces {user.points} with the user's loyalty.",example:"@{user.name}, you have {user.points} {loyalty.name}.",result:"@Streamlabs, you have 1000 points.",tags:["Loyalty","Custom Commands"]},{variable:"{user.time}",description:"Replaces {user.time} with the user's time watched.",example:"@{user.name} has watched the stream for {user.time} minutes.",result:"@Streamlabs has watched the stream for 2 hours.",tags:["Loyalty","Custom Commands"]},{variable:"{loyalty.name}",description:"Replaces {loyalty.name} with the loyalty name.",example:"My loyalty is called {loyalty.name}.",result:"My loyalty is called points.",tags:["Loyalty","Custom Commands"]},{variable:"{media.name}",description:"Replaces {media.name} with the media requests title.",example:'@{user.name}, "{media.name}" has been added to the queue.',result:'@Streamlabs, "Electric Swing Circus - Golden Hour" has been added to the queue.',tags:["Media Share"]},{variable:"{media.requestedby}",description:"Replaces {media.requestedby} with the name of who requested the media.",example:'@{user.name}, currently "{media.name}" is playing which was requested by {media.requestedby}.',result:'@Streamlabs, currently "Electric Swing Circus - Golden Hour" is playing which was requested by AnkhHeart.',tags:["Media Share"]},{variable:"{currency}",description:"Replaces {currency} with current selected currency.",example:"@{user.name} just tipped {amount} {currency}!",result:"@Streamlabs just tipped 20 USD!",tags:["Notifications"]},{variable:"{position}",description:"Replaces {position} with the queue position of the user.",example:"@{user.name}, you have joined the queue at position #{position}.",result:"@Streamlabs, you have joined the queue at position #1.",tags:["Queue"]},{variable:"{users}",description:"Replaces {users} with all the users that are up next in the queue.",example:"Next up: {users}",result:"Next up: sowhoyoudotcom, ankhheart",tags:["Queue"]},{variable:"{title}",description:"Replaces {title} with the title of the Poll, Bet or Queue.",example:"A queue has opened for {title}. Type {command} <note> to join!",result:"A queue has opened for Warframe. Type !join <note> to join!",tags:["Queue","Poll","Betting"]},{variable:"{quote.id}",description:"Replaces {quote.id} with the id of the quote.",example:"Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",result:'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',tags:["Quotes"]},{variable:"{quote.game}",description:"Replaces {quote.game} with the game of the quote.",example:"Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",result:'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',tags:["Quotes"]},{variable:"{quote.msg}",description:"Replaces {quote.msg} with quote itself.",example:"Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",result:'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',tags:["Quotes"]},{variable:"{quote.date}",description:"Replaces {quote.date} with quote's  date.",example:"Quote #{quote.id} {quote.msg} [{quote.game}] [{quote.date}]",result:'Quote #1 "I am a cat! Meow!" [Final Fantasy XIV] [01/04/2019]',tags:["Quotes"]}];var xe=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,h=(e,s,t,a)=>{for(var n=a>1?void 0:a?_e(s,t):s,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(a?r(s,t,n):r(n))||n);return a&&n&&xe(s,t,n),n};let m=class extends f{constructor(){super(...arguments);o(this,"$refs");o(this,"result",[]);o(this,"queryLength",0);o(this,"phaseOne",!1);o(this,"phaseTwo",!1);o(this,"searchFromClick",!1);o(this,"fuse",null);o(this,"value","");o(this,"currentResult",0);o(this,"cursorPos",0);o(this,"input_cursor");o(this,"jsonSearch");o(this,"searchData",this.jsonSearch);o(this,"search");o(this,"eventName");o(this,"inputChangeEventName")}get options(){return{caseSensitive:!1,includeScore:!0,includeMatches:!1,tokenize:!1,matchAllTokens:!1,findAllMatches:!0,shouldSort:!0,threshold:.2,location:1,distance:10,maxPatternLength:12,minMatchCharLength:0,keys:["variable"]}}get noResults(){return this.result.length===0&&this.value!=""}get limitedResult(){return this.result.reverse()}get selectedResult(){return this.limitedResult[this.currentResult].item.variable}get currentLength(){return this.value.length}get calcTransform(){return"transform: translateY(-"+this.$refs.variableMenu.offsetHeight+"px);"}afterOpen(t){t.style.height="auto"}open(t){let a=getComputedStyle(t).width;t.style.width=a,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";let n=getComputedStyle(t).height;t.style.width=null,t.style.position=null,t.style.visibility=null,t.style.height=0,getComputedStyle(t).height,setTimeout(()=>{t.style.height=n})}close(t){let a=getComputedStyle(t).height;t.style.height=a,getComputedStyle(t).height,setTimeout(()=>{t.style.height=0})}watchCursor(t){this.cursorPos=t.target.selectionStart,this.getSearchString(),this.noResults&&this.playClosingSequence(),this.value.length<=0&&this.playClosingSequence()}watchInput(t){this.value=t.target.value}watchValue(){this.$parent.$emit(this.inputChangeEventName,this.value),this.$emit(this.inputChangeEventName,this.value),this.value.includes("{")&&(this.getSearchString(),this.noResults&&this.playClosingSequence(),this.value.length<=0&&this.playClosingSequence()),this.value===""&&(this.result=[])}watchResult(t,a){(this.noResults||this.value==""||t.length!=a.length)&&(this.currentResult=this.limitedResult.length-1),this.$emit(this.eventName,this.result),this.$parent.$emit(this.eventName,this.result),this.noResults?this.playClosingSequence():this.playOpeningSequence()}getSearchString(){if(this.value.trim()==="")this.result=[];else{const t=this.cursorPos,a=this.value.lastIndexOf("{",t-1),n=this.value.substring(a,t),i=n.lastIndexOf("}");t>a&&i===-1&&a!==-1?(this.result=this.fuse.search(n),this.queryLength=n.length):this.playClosingSequence()}}keyEvent(t){t.keyCode===38&&this.currentResult>0&&(this.currentResult<=this.limitedResult.length-7&&this.$refs.resultArea.scrollBy(0,-32),t.preventDefault(),t.stopPropagation(),this.currentResult--),t.keyCode===40&&this.currentResult<this.limitedResult.length-1&&(this.currentResult>=6&&this.$refs.resultArea.scrollBy(0,32),t.stopPropagation(),this.currentResult++),t.keyCode===13&&this.phaseOne&&this.result!=[]&&(t.preventDefault(),t.stopPropagation(),this.mergeValues()),t.keyCode===27&&this.phaseOne&&this.blurSearch(),t.keyCode===9&&this.phaseOne&&this.result!=[]&&(t.preventDefault(),t.stopPropagation(),this.mergeValues())}mergeValues(){const t=this.cursorPos;this.value=this.value.substring(0,t)+this.selectedResult.substring(this.queryLength)+this.value.substring(t),setTimeout(()=>{this.result=[]}),this.$emit("update",this.value),this.searchFromClick&&this.searchFromClick}playClosingSequence(){this.phaseTwo&&(setTimeout(()=>{this.phaseTwo=!this.phaseTwo},100),setTimeout(()=>{this.phaseOne=!this.phaseOne},200))}playOpeningSequence(){this.phaseOne||(this.phaseOne=!this.phaseOne,setTimeout(()=>{this.phaseTwo=!this.phaseTwo},100))}initFuse(){this.fuse=new H(this.searchData,this.options),this.search&&(this.value=this.search)}blurSearch(){this.currentResult=0}mounted(){this.initFuse()}};h([l()],m.prototype,"input_cursor",2);h([l()],m.prototype,"jsonSearch",2);h([l({default:""})],m.prototype,"search",2);h([l({default:"fuseResultsUpdated"})],m.prototype,"eventName",2);h([l({default:"fuseInputChanged"})],m.prototype,"inputChangeEventName",2);h([y("value",{immediate:!0})],m.prototype,"watchValue",1);h([y("result")],m.prototype,"watchResult",1);m=h([b({})],m);var ye=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{ref:"variableMenu",staticClass:"s-variablemenu",on:{input:function(a){return e.watchInput(a)},focus:function(a){return e.watchCursor(a)},click:function(a){return e.watchCursor(a)},keyup:function(a){return e.watchCursor(a)},keydown:e.keyEvent}},[t("transition",{attrs:{name:"expand",tag:"div"},on:{enter:e.open,"after-enter":e.afterOpen,leave:e.close}},[e.phaseTwo&&e.limitedResult.length>=1?t("div",{ref:"resultArea",staticClass:"s-variablemenu-results__cont",style:e.calcTransform},[t("transition-group",{attrs:{name:"s-variablemenu--fadeX"}},e._l(e.limitedResult,function(a,n){return t("div",{key:a.item.variable,staticClass:"s-variablemenu-results",class:{"s-active-result":e.currentResult===n},on:{mouseover:function(i){e.currentResult=n},mousedown:e.mergeValues,mouseup:e.blurSearch}},[t("div",{staticClass:"s-variablemenu__result--title"},[e._v(" "+e._s(a.item.variable)+" ")]),t("div",{staticClass:"s-variablemenu__result--desc"},[e._v(" "+e._s(a.item.description)+" ")])])}),0)],1):e._e()]),t("div",{ref:"inputCont",staticClass:"s-variablemenu--searchbar__cont"},[e._t("input")],2)],1)},we=[];const V={};var Ce=x(m,ye,we,!1,ke,null,null,null);function ke(e){for(let s in V)this[s]=V[s]}const Ie=function(){return Ce.exports}();var Se=Object.defineProperty,Te=Object.getOwnPropertyDescriptor,Ve=(e,s,t,a)=>{for(var n=a>1?void 0:a?Te(s,t):s,i=e.length-1,r;i>=0;i--)(r=e[i])&&(n=(a?r(s,t,n):r(n))||n);return a&&n&&Se(s,t,n),n};let C=class extends f{constructor(){super(...arguments);o(this,"demoCode",X);o(this,"data","");o(this,"radioValue",!0);o(this,"checkboxValue1",!0);o(this,"checkboxValue2",!1);o(this,"checkboxValue3",!0);o(this,"checkboxValue4",!1);o(this,"selected","Option A");o(this,"selectedGroup","Option A");o(this,"multipleSelected",["Option B","Option C"]);o(this,"optionGroups",[{group:"Group A",items:["Option A","Option B","Option C"]},{group:"Group B",items:["Option A","Option B","Option C"]},{group:"Group C",items:["Option A","Option B","Option C"]}]);o(this,"optionSelected",["Glass Pint","Glass Beer"]);o(this,"objectSelected",{value:"glass-pint",title:"Glass Pint",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"});o(this,"statusValue",!0);o(this,"testingInput",null);o(this,"layoutValue","above");o(this,"jarValue","glass-pint");o(this,"varData",fe);o(this,"variAreaValue","");o(this,"variTextValue","");o(this,"textInputValue","test");o(this,"numberInputValue",0);o(this,"emailInputValue","");o(this,"passwordInputValue","");o(this,"errorTextInputValue","");o(this,"textAreaInputValue","");o(this,"textInputPlaceholder","Placeholder");o(this,"emailInputPlaceholder","Placeholder");o(this,"passwordInputPlaceholder","Placeholder");o(this,"options",[{value:"glass-pint",title:"Glass Pint",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"},{value:"glass-beer",title:"Glass Beer",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer.png"},{value:"glass-beer-2",title:"Glass Beer 2",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer2.png"},{value:"glass-coffee",title:"Glass Coffee",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee.png"},{value:"glass-fancy",title:"Glass Fancy",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-fancy.png"},{value:"glass-whiskey",title:"Glass Whiskey",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-whiskey.png"},{value:"glass-burbon",title:"Glass Burbon",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-burbon.png"},{value:"glass-martini",title:"Glass Martini",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-martini.png"},{value:"glass-beer-3",title:"Glass Beer 3",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer3.png"},{value:"glass-wine",title:"Glass Wine",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-wine.png"},{value:"glass-baileys",title:"Glass Baileys",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-baileys.png"},{value:"glass-champagne",title:"Glass Champagne",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-champagne.png"},{value:"glass-coffee-no-handle",title:"Glass Coffee No Handle",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee-no-handle.png"},{value:"glass-plinko",title:"Glass Plinko",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-plinko.png"},{value:"glass-stocking",title:"Glass Stocking",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-stocking.png"},{value:"glass-snowman",title:"Glass Snowman",image:"https://cdn.streamlabs.com/static/tip-jar/jars/glass-snowman.png"}]);o(this,"show",["Bounce","Bounce In","Bounce In Down","Bounce In Left","Bounce In Right","Bounce In Up","Fade In","Fade In Down","Fade In Down Big","Fade In Left","Fade In Left Big","Fade In Right","Fade In","Fade In Up","Fade In Up Big"])}};C=Ve([b({components:{Checkbox:G,DemoSection:$,FormGroup:F,ImagePickerInput:K,Radio:B,Selector:M,StatusSwitch:se,TaggingInput:be,TextArea:O,TextInput:P,VariableMenu:Ie}})],C);var Re=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("Inputs")]),t("div",{staticClass:"section"},[t("h2",[e._v("Text Inputs")]),e._m(0),e._m(1),t("DemoSection",{attrs:{title:"Text Inputs",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("FormGroup",[t("TextInput",{attrs:{slot:"input",type:"text",label:"Text Input",name:"textExample",placeholder:e.textInputPlaceholder,autoComplete:"on"},slot:"input",model:{value:e.textInputValue,callback:function(a){e.textInputValue=a},expression:"textInputValue"}}),t("TextInput",{directives:[{name:"validate",rawName:"v-validate",value:"required|between:0,100",expression:"'required|between:0,100'"}],attrs:{slot:"input",type:"number",label:"Number Input",name:"numberinputExample",placeholder:e.textInputPlaceholder,min:0,max:100,error:e.errors.first("numberinputExample")},slot:"input",model:{value:e.numberInputValue,callback:function(a){e.numberInputValue=a},expression:"numberInputValue"}}),t("TextInput",{attrs:{slot:"input",type:"email",label:"Email Input",name:"emailExample",placeholder:e.emailInputPlaceholder},slot:"input",model:{value:e.emailInputValue,callback:function(a){e.emailInputValue=a},expression:"emailInputValue"}}),t("TextInput",{attrs:{slot:"input",type:"password",label:"Password Input",name:"passwordExample",placeholder:e.passwordInputPlaceholder,disabled:""},slot:"input",model:{value:e.passwordInputValue,callback:function(a){e.passwordInputValue=a},expression:"passwordInputValue"}}),t("TextInput",{attrs:{slot:"input",type:"text",label:"Input With Error",name:"textExample",placeholder:e.textInputPlaceholder,error:"Enter a number"},slot:"input",model:{value:e.errorTextInputValue,callback:function(a){e.errorTextInputValue=a},expression:"errorTextInputValue"}}),t("TextArea",{attrs:{slot:"input",label:"Text Area",name:"myarea",placeholder:"This is where you put some cool stuff",autoResize:"true",maxLength:1e3,maxHeight:100},slot:"input",model:{value:e.textAreaInputValue,callback:function(a){e.textAreaInputValue=a},expression:"textAreaInputValue"}})],1)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Text Inputs with Variable Menu Wrapper")]),t("p",[e._v(" A new way to navigate variables, just wrap your input with the Variable Menu. This is not work with FormGroup preformatting. ")]),t("DemoSection",{attrs:{title:"Variable Menu",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("VariableMenu",{attrs:{jsonSearch:e.varData}},[t("text-input",{attrs:{slot:"input",type:"text",name:"textExample",placeholder:"w/ Variable Menu"},slot:"input",model:{value:e.variTextValue,callback:function(a){e.variTextValue=a},expression:"variTextValue"}})],1),t("VariableMenu",{attrs:{jsonSearch:e.varData}},[t("TextArea",{ref:"textArea",attrs:{slot:"input",name:"myarea",placeholder:"w/ Variable Menu",rows:"3",maxLength:1e3,maxHeight:100},slot:"input",model:{value:e.variAreaValue,callback:function(a){e.variAreaValue=a},expression:"variAreaValue"}})],1)]},proxy:!0}])}),e._m(2)],1),t("div",{staticClass:"section"},[t("h2",[e._v("Tagging Input")]),e._m(3),t("DemoSection",{attrs:{title:"Tagging Input",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("TaggingInput",{attrs:{name:"aliases",placeholder:"!hello",maxItems:"10",inputValidation:"required"},on:{keydown:function(a){if(!a.type.indexOf("key")&&e._k(a.keyCode,"space",32,a.key,[" ","Spacebar"]))return null;a.preventDefault()}}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Selector")]),e._m(4),t("DemoSection",{attrs:{title:"Selector",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("FormGroup",[t("Selector",{attrs:{slot:"input",options:["Option A","Option B","Option C"]},slot:"input",model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}}),t("Selector",{attrs:{slot:"input",options:e.optionGroups,"group-values":"items","group-label":"group",searchable:!1},slot:"input",model:{value:e.selectedGroup,callback:function(a){e.selectedGroup=a},expression:"selectedGroup"}}),t("Selector",{attrs:{slot:"input",options:["Option A","Option B","Option C"],disabled:""},slot:"input",model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}}),t("Selector",{attrs:{slot:"input",multiple:"",options:["Option A","Option B","Option C"],searchable:!1},slot:"input",model:{value:e.multipleSelected,callback:function(a){e.multipleSelected=a},expression:"multipleSelected"}}),t("Selector",{attrs:{slot:"input",multiple:"",options:["Option A","Option B","Option C"],disabled:""},slot:"input",model:{value:e.multipleSelected,callback:function(a){e.multipleSelected=a},expression:"multipleSelected"}})],1)]},proxy:!0}])}),e._m(5)],1),t("div",{staticClass:"section"},[t("h2",[e._v("Checkboxes and Radios")]),e._m(6),t("div",{staticClass:"section"},[t("h2",[e._v("Single Checkbox")]),t("DemoSection",{attrs:{title:"Checkbox",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Checkbox",{attrs:{id:"checkbox",name:"checkbox",label:"Checkbox Label"},model:{value:e.checkboxValue1,callback:function(a){e.checkboxValue1=a},expression:"checkboxValue1"}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Checkbox Group")]),t("DemoSection",{attrs:{title:"Checkbox Group",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("div",{staticClass:"s-checkbox-group"},[t("Checkbox",{attrs:{id:"checkbox1",name:"checkbox1",label:"Checkbox Label 1"},model:{value:e.checkboxValue2,callback:function(a){e.checkboxValue2=a},expression:"checkboxValue2"}}),t("Checkbox",{attrs:{id:"checkbox2",name:"checkbox2",label:"Checkbox Label 2"},model:{value:e.checkboxValue3,callback:function(a){e.checkboxValue3=a},expression:"checkboxValue3"}}),t("Checkbox",{attrs:{id:"checkbox3",name:"checkbox3",label:"Checkbox Label 3"},model:{value:e.checkboxValue4,callback:function(a){e.checkboxValue4=a},expression:"checkboxValue4"}})],1)]},proxy:!0}])})],1)]),t("div",{staticClass:"section"},[t("h2",[e._v("Radios")]),t("DemoSection",{attrs:{title:"Radios",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("div",{staticClass:"s-checkbox-group"},[t("Radio",{attrs:{id:"radio1",name:"radioGroup",label:"Enabled",val:!0},model:{value:e.radioValue,callback:function(a){e.radioValue=a},expression:"radioValue"}}),t("Radio",{attrs:{id:"radio2",name:"radioGroup",label:"Disabled",val:!1},model:{value:e.radioValue,callback:function(a){e.radioValue=a},expression:"radioValue"}})],1)]},proxy:!0}])}),e._m(7)],1),t("div",{staticClass:"section"},[t("h2",[e._v("Status Switch")]),e._m(8),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Status Switch",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("FormGroup",[t("StatusSwitch",{attrs:{slot:"input",label:"Switch Label"},slot:"input",model:{value:e.statusValue,callback:function(a){e.statusValue=a},expression:"statusValue"}}),t("StatusSwitch",{attrs:{slot:"input",size:"small",label:"Small Switch Label"},slot:"input",model:{value:e.statusValue,callback:function(a){e.statusValue=a},expression:"statusValue"}})],1)]},proxy:!0}])})],1),e._m(9)]),t("div",{staticClass:"section"},[t("h2",[e._v("Image Input Picker")]),e._m(10),t("div",{staticClass:"section"},[t("h3",[e._v("Default")]),t("p",[e._v(" By default, the image input picker is setup to have our Alert Box layout styles as the options. ")]),t("DemoSection",{attrs:{title:"Default Image Input Picker",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("ImagePickerInput",{model:{value:e.layoutValue,callback:function(a){e.layoutValue=a},expression:"layoutValue"}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h3",[e._v("Custom")]),t("p",[e._v(" You can pass in any options you'd like with the options prop. This is an example using our Jar options. ")]),t("DemoSection",{attrs:{title:"Custom Image Input Picker",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("ImagePickerInput",{attrs:{options:e.options},model:{value:e.jarValue,callback:function(a){e.jarValue=a},expression:"jarValue"}})]},proxy:!0}])})],1)])])},Pe=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",[e._v(" These 6 fields below are wrapped in a "),t("code",[e._v("FormGroup")]),e._v(" component. This will put 16px of margin between form fields and 24px margin between form groups. ")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",[t("code",[e._v(`import { TextInput, TextArea, VariableMenu } from 'streamlabs-beaker';

components: {
  TextInput,
  TextArea,
  VariableMenu
}`)])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v(" Puts a disabled class on the form field and disables the input. ")])]),t("tr",[t("td",[e._v("error")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" If there is error text, error classes will go on the input - we plan to add better validation handling. ")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Optional label for the input.")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Input name attribute.")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Input placeholder text.")])]),t("tr",[t("td",[e._v("type")]),t("td",[e._v("string")]),t("td",[e._v("text")]),t("td",[e._v(" Input type: "),t("code",[e._v("text")]),e._v(", "),t("code",[e._v("email")]),e._v(", "),t("code",[e._v("password")]),e._v(". ")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Input value using v-model.")])]),t("tr",[t("td",[e._v("readonly")]),t("td",[e._v("boolean")]),t("td",[e._v("null")]),t("td",[e._v("Specifies that an input field is read-only.")])])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",[t("code",[e._v(`import { TaggingInput } from 'streamlabs-beaker';

components: {
  TaggingInput
}`)])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",[t("code",[e._v(`import { Selector } from 'streamlabs-beaker';

components: {
  Selector
}`)])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Current selected value.")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("[''] or {}")]),t("td",[e._v("null")]),t("td",[e._v("Array of strings or objects to use as the options.")])]),t("tr",[t("td",[e._v("multiple")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("Optional label for the input.")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("String")]),t("td",[e._v("''")]),t("td",[e._v("Equivalent to the `placeholder` attribute on an input.")])]),t("tr",[t("td",[e._v("searchable")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("Optional label for the input.")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v(" Puts a disabled class on the form field and disables the input. ")])])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",[t("code",[e._v(`import { Checkbox, Radio } from 'streamlabs-beaker';

components: {
  Checkbox,
  Radio
}`)])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("id")]),t("td",[e._v("string")]),t("td",[e._v('""')]),t("td",[e._v("Indentifier for associated label.")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("string")]),t("td",[e._v('""')]),t("td",[e._v("Name for radio group.")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Optional label for the radio input.")])]),t("tr",[t("td",[e._v("val")]),t("td",[e._v("string, boolean")]),t("td",[e._v('""')]),t("td",[e._v("Radio input value when selected")])])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",[t("code",[e._v(`import { StatusSwitch } from 'streamlabs-beaker';

components: {
  StatusSwitch
}`)])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Available for v-model 2-way data binding.")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Optional label for the input.")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v(" Other available sizes. Current alternate size option: "),t("code",[e._v("small")]),e._v(". ")])])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",[t("code",[e._v(`import { ImagePickerInput } from 'streamlabs-beaker';

components: {
  ImagePickerInput
}`)])])}];const R={};var Oe=x(C,Re,Pe,!1,De,null,null,null);function De(e){for(let s in R)this[s]=R[s]}const Ze=function(){return Oe.exports}();export{Ze as default};
//# sourceMappingURL=Inputs-0f12b299.js.map

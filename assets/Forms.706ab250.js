var T=Object.defineProperty;var P=(t,o,e)=>o in t?T(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var p=(t,o,e)=>(P(t,typeof o!="symbol"?o+"":o,e),e);import{C as m,P as a,V as _,n as d}from"./index.17a864f5.js";import{D as V}from"./DemoSection.a0f0b33e.js";import{F as $}from"./FormGroup.87e771a1.js";import{C as I,R as b,S}from"./Selector.4adddbf7.js";import{T as G}from"./TextInput.96a62e1b.js";import"./Accordion.a5b0018d.js";import"./_baseClone.a3c057f3.js";const D=`<template>
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
`;var g=Object.defineProperty,H=Object.getOwnPropertyDescriptor,v=(t,o,e,r)=>{for(var n=r>1?void 0:r?H(o,e):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(n=(r?s(o,e,n):s(n))||n);return r&&n&&g(o,e,n),n};let u=class extends _{constructor(){super(...arguments);p(this,"helpText");p(this,"tooltip");p(this,"title")}};v([a()],u.prototype,"helpText",2);v([a()],u.prototype,"tooltip",2);v([a()],u.prototype,"title",2);u=v([m({})],u);var O=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"s-form-group-h"},[e("div",{staticClass:"s-form-group-h__title"},[e("label",[t._v(t._s(t.title))]),t.tooltip?e("i",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.tooltip,expression:"tooltip",modifiers:{auto:!0}}],staticClass:"s-tooltip icon-question"}):t._e()]),e("div",{staticClass:"s-form-group-h__input-wrapper"},[t._t("input"),t.helpText?e("div",{staticClass:"s-form-group-h__help-text"},[t._v(" "+t._s(t.helpText)+" ")]):t._e()],2)])},w=[];const x={};var j=d(u,O,w,!1,M,null,null,null);function M(t){for(let o in x)this[o]=x[o]}const E=function(){return j.exports}();var L=Object.defineProperty,z=Object.getOwnPropertyDescriptor,c=(t,o,e,r)=>{for(var n=r>1?void 0:r?z(o,e):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(n=(r?s(o,e,n):s(n))||n);return r&&n&&L(o,e,n),n};let i=class extends _{constructor(){super(...arguments);p(this,"helpText");p(this,"title");p(this,"tooltip");p(this,"titleLayout")}get titleLayoutStyle(){return{"justify-content":this.titleLayout}}};c([a()],i.prototype,"helpText",2);c([a()],i.prototype,"title",2);c([a({default:""})],i.prototype,"tooltip",2);c([a({default:"space-between"})],i.prototype,"titleLayout",2);i=c([m({})],i);var R=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"s-form-group-v"},[e("div",{staticClass:"s-form-group-v__title",style:t.titleLayoutStyle},[this.$slots.header?t._e():[t.title?e("label",[t._v(t._s(t.title))]):t._e(),t.tooltip?e("i",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.tooltip,expression:"tooltip",modifiers:{auto:!0}}],staticClass:"tooltip icon-question"}):t._e()],t._t("header")],2),e("div",{staticClass:"s-form-group-v__input-wrapper"},[t._t("input"),t.helpText?e("div",{staticClass:"s-form-group-v__help-text"},[t._v(" "+t._s(t.helpText)+" ")]):t._e()],2)])},Y=[];const y={};var N=d(i,R,Y,!1,q,null,null,null);function q(t){for(let o in y)this[o]=y[o]}const W=function(){return N.exports}();var A=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,B=(t,o,e,r)=>{for(var n=r>1?void 0:r?Z(o,e):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(n=(r?s(o,e,n):s(n))||n);return r&&n&&A(o,e,n),n};let f=class extends _{constructor(){super(...arguments);p(this,"savePaymentMethod",!0)}};f=B([m({components:{Checkbox:I,Radio:b,Selector:S,TextInput:G}})],f);var J=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"s-payment-form"},[t._m(0),e("div",{staticClass:"s-payment-form__option"},[e("form",{staticClass:"s-credit-card-form s-form"},[e("div",{staticClass:"s-form-group"},[e("selector",{attrs:{placeholder:"Add new credit card"}})],1),e("div",{staticClass:"s-form-group s-credit-card-form__inputs"},[e("text-input",{staticClass:"s-credit-card-form__cc-number",attrs:{type:"text",placeholder:"Name on card"}}),e("text-input",{staticClass:"s-credit-card-form__cc-exp",attrs:{type:"text",placeholder:"Expiry MM/YYYY"}}),e("text-input",{staticClass:"s-credit-card-form__cc-cvc",attrs:{type:"text",placeholder:"CVC"}}),e("text-input",{staticClass:"s-credit-card-form__cc-zip",attrs:{type:"text",placeholder:"Zip/Postal"}}),e("selector",{staticClass:"s-credit-card-form__cc-country",attrs:{placeholder:"Country"}})],1),e("div",{staticClass:"s-form-group"},[e("checkbox",{attrs:{label:"Save this payment method for next time"},model:{value:t.savePaymentMethod,callback:function(r){t.savePaymentMethod=r},expression:"savePaymentMethod"}})],1)])])])},K=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"s-payment-form__option"},[e("form")])}];const F={};var Q=d(f,J,K,!1,U,null,null,null);function U(t){for(let o in F)this[o]=F[o]}const X=function(){return Q.exports}();var k=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,et=(t,o,e,r)=>{for(var n=r>1?void 0:r?tt(o,e):o,l=t.length-1,s;l>=0;l--)(s=t[l])&&(n=(r?s(o,e,n):s(n))||n);return r&&n&&k(o,e,n),n};let h=class extends _{constructor(){super(...arguments);p(this,"demoCode",D);p(this,"title","Text Input");p(this,"tooltip","Input tooltip message.");p(this,"helpText","This is help text");p(this,"textInputPlaceholder","Text input placeholder");p(this,"textInputType","text");p(this,"inputValue","")}};h=et([m({components:{DemoSection:V,FormGroup:$,FormGroupH:E,FormGroupV:W,PaymentForm:X,TextInput:G}})],h);var ot=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Form Group")]),e("DemoSection",{attrs:{title:"Form Group",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("FormGroup",[e("TextInput",{attrs:{slot:"input",type:t.textInputType,placeholder:t.textInputPlaceholder,label:t.title},slot:"input",model:{value:t.inputValue,callback:function(r){t.inputValue=r},expression:"inputValue"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Horizontal Form Group")]),e("DemoSection",{attrs:{title:"Horizontal Form Group",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("FormGroupH",{attrs:{title:t.title,helpText:t.helpText,tooltip:t.tooltip}},[e("TextInput",{attrs:{slot:"input",type:t.textInputType,placeholder:t.textInputPlaceholder},slot:"input",model:{value:t.inputValue,callback:function(r){t.inputValue=r},expression:"inputValue"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Vertical Form Group")]),e("DemoSection",{attrs:{title:"Vertical Form Group",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("FormGroupV",{attrs:{title:t.title,label:"Vertical Form Group Input",titleLayout:"flex-start",tooltip:t.tooltip,helpText:t.helpText}},[e("TextInput",{attrs:{slot:"input",type:t.textInputType,placeholder:t.textInputPlaceholder},slot:"input",model:{value:t.inputValue,callback:function(r){t.inputValue=r},expression:"inputValue"}})],1)]},proxy:!0}])})],1)])},nt=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"section"},[e("h1",[t._v("Forms")]),e("p",[t._v(" Wrap input components in form groups for different input and label layouts. ")]),e("pre",[e("code",[t._v(`import { FormGroup, FormGroupH, FormGroupV } from 'streamlabs-beaker';

components: {
  FormGroup,
  FormGroupH,
  FormGroupV
}`)])])])}];const C={};var rt=d(h,ot,nt,!1,pt,null,null,null);function pt(t){for(let o in C)this[o]=C[o]}const dt=function(){return rt.exports}();export{dt as default};
//# sourceMappingURL=Forms.706ab250.js.map

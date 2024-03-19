var y=Object.defineProperty;var F=(o,t,e)=>t in o?y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var p=(o,t,e)=>(F(o,typeof t!="symbol"?t+"":t,e),e);import{C as c,P as a,V as _,n as d}from"./index.4fb8a6cb.js";import{D as C}from"./DemoSection.79ee11c0.js";import{F as G}from"./FormGroup.79b6121d.js";import{C as P,R as T,S as V}from"./Selector.7d087e2e.js";import{T as h}from"./TextInput.6d9c9908.js";import"./Accordion.09c82396.js";import"./_baseClone.a549c660.js";const I=`<template>
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
`;var b=Object.defineProperty,D=Object.getOwnPropertyDescriptor,v=(o,t,e,n)=>{for(var r=n>1?void 0:n?D(t,e):t,l=o.length-1,s;l>=0;l--)(s=o[l])&&(r=(n?s(t,e,r):s(r))||r);return n&&r&&b(t,e,r),r};let u=class extends _{constructor(){super(...arguments);p(this,"helpText");p(this,"tooltip");p(this,"title")}};v([a()],u.prototype,"helpText",2);v([a()],u.prototype,"tooltip",2);v([a()],u.prototype,"title",2);u=v([c({})],u);var S=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"s-form-group-h"},[e("div",{staticClass:"s-form-group-h__title"},[e("label",[t._v(t._s(t.title))]),t.tooltip?e("i",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.tooltip,expression:"tooltip",modifiers:{auto:!0}}],staticClass:"s-tooltip icon-question"}):t._e()]),e("div",{staticClass:"s-form-group-h__input-wrapper"},[t._t("input"),t.helpText?e("div",{staticClass:"s-form-group-h__help-text"},[t._v(" "+t._s(t.helpText)+" ")]):t._e()],2)])},$=[],g=d(u,S,$,!1,null,null,null,null);const H=g.exports;var O=Object.defineProperty,w=Object.getOwnPropertyDescriptor,m=(o,t,e,n)=>{for(var r=n>1?void 0:n?w(t,e):t,l=o.length-1,s;l>=0;l--)(s=o[l])&&(r=(n?s(t,e,r):s(r))||r);return n&&r&&O(t,e,r),r};let i=class extends _{constructor(){super(...arguments);p(this,"helpText");p(this,"title");p(this,"tooltip");p(this,"titleLayout")}get titleLayoutStyle(){return{"justify-content":this.titleLayout}}};m([a()],i.prototype,"helpText",2);m([a()],i.prototype,"title",2);m([a({default:""})],i.prototype,"tooltip",2);m([a({default:"space-between"})],i.prototype,"titleLayout",2);i=m([c({})],i);var j=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"s-form-group-v"},[e("div",{staticClass:"s-form-group-v__title",style:t.titleLayoutStyle},[this.$slots.header?t._e():[t.title?e("label",[t._v(t._s(t.title))]):t._e(),t.tooltip?e("i",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.tooltip,expression:"tooltip",modifiers:{auto:!0}}],staticClass:"tooltip icon-question"}):t._e()],t._t("header")],2),e("div",{staticClass:"s-form-group-v__input-wrapper"},[t._t("input"),t.helpText?e("div",{staticClass:"s-form-group-v__help-text"},[t._v(" "+t._s(t.helpText)+" ")]):t._e()],2)])},L=[],z=d(i,j,L,!1,null,null,null,null);const M=z.exports;var R=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,N=(o,t,e,n)=>{for(var r=n>1?void 0:n?Y(t,e):t,l=o.length-1,s;l>=0;l--)(s=o[l])&&(r=(n?s(t,e,r):s(r))||r);return n&&r&&R(t,e,r),r};let f=class extends _{constructor(){super(...arguments);p(this,"savePaymentMethod",!0)}};f=N([c({components:{Checkbox:P,Radio:T,Selector:V,TextInput:h}})],f);var q=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"s-payment-form"},[t._m(0),e("div",{staticClass:"s-payment-form__option"},[e("form",{staticClass:"s-credit-card-form s-form"},[e("div",{staticClass:"s-form-group"},[e("selector",{attrs:{placeholder:"Add new credit card"}})],1),e("div",{staticClass:"s-form-group s-credit-card-form__inputs"},[e("text-input",{staticClass:"s-credit-card-form__cc-number",attrs:{type:"text",placeholder:"Name on card"}}),e("text-input",{staticClass:"s-credit-card-form__cc-exp",attrs:{type:"text",placeholder:"Expiry MM/YYYY"}}),e("text-input",{staticClass:"s-credit-card-form__cc-cvc",attrs:{type:"text",placeholder:"CVC"}}),e("text-input",{staticClass:"s-credit-card-form__cc-zip",attrs:{type:"text",placeholder:"Zip/Postal"}}),e("selector",{staticClass:"s-credit-card-form__cc-country",attrs:{placeholder:"Country"}})],1),e("div",{staticClass:"s-form-group"},[e("checkbox",{attrs:{label:"Save this payment method for next time"},model:{value:t.savePaymentMethod,callback:function(n){t.savePaymentMethod=n},expression:"savePaymentMethod"}})],1)])])])},W=[function(){var o=this,t=o._self._c;return o._self._setupProxy,t("div",{staticClass:"s-payment-form__option"},[t("form")])}],A=d(f,q,W,!1,null,null,null,null);const E=A.exports;var Z=Object.defineProperty,B=Object.getOwnPropertyDescriptor,J=(o,t,e,n)=>{for(var r=n>1?void 0:n?B(t,e):t,l=o.length-1,s;l>=0;l--)(s=o[l])&&(r=(n?s(t,e,r):s(r))||r);return n&&r&&Z(t,e,r),r};let x=class extends _{constructor(){super(...arguments);p(this,"demoCode",I);p(this,"title","Text Input");p(this,"tooltip","Input tooltip message.");p(this,"helpText","This is help text");p(this,"textInputPlaceholder","Text input placeholder");p(this,"textInputType","text");p(this,"inputValue","")}};x=J([c({components:{DemoSection:C,FormGroup:G,FormGroupH:H,FormGroupV:M,PaymentForm:E,TextInput:h}})],x);var K=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",[t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Form Group")]),e("DemoSection",{attrs:{title:"Form Group",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("FormGroup",[e("TextInput",{attrs:{slot:"input",type:t.textInputType,placeholder:t.textInputPlaceholder,label:t.title},slot:"input",model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Horizontal Form Group")]),e("DemoSection",{attrs:{title:"Horizontal Form Group",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("FormGroupH",{attrs:{title:t.title,helpText:t.helpText,tooltip:t.tooltip}},[e("TextInput",{attrs:{slot:"input",type:t.textInputType,placeholder:t.textInputPlaceholder},slot:"input",model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Vertical Form Group")]),e("DemoSection",{attrs:{title:"Vertical Form Group",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("FormGroupV",{attrs:{title:t.title,label:"Vertical Form Group Input",titleLayout:"flex-start",tooltip:t.tooltip,helpText:t.helpText}},[e("TextInput",{attrs:{slot:"input",type:t.textInputType,placeholder:t.textInputPlaceholder},slot:"input",model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}})],1)]},proxy:!0}])})],1)])},Q=[function(){var o=this,t=o._self._c;return o._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[o._v("Forms")]),t("p",[o._v(" Wrap input components in form groups for different input and label layouts. ")]),t("pre",[t("code",[o._v(`import { FormGroup, FormGroupH, FormGroupV } from 'streamlabs-beaker';

components: {
  FormGroup,
  FormGroupH,
  FormGroupV
}`)])])])}],U=d(x,K,Q,!1,null,null,null,null);const lt=U.exports;export{lt as default};
//# sourceMappingURL=Forms.0a463350.js.map

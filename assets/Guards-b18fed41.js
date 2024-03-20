var b=Object.defineProperty;var C=(e,n,t)=>n in e?b(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var o=(e,n,t)=>(C(e,typeof n!="symbol"?n+"":n,t),t);import{C as v,P as u,V as _,n as m}from"./index-e8bb31bb.js";import{D as T}from"./DemoSection-b2dfe451.js";import{T as G}from"./TextInput-5b58a628.js";import"./Accordion-79d22a9d.js";import"./_baseClone-20eb31a7.js";var g=Object.defineProperty,w=Object.getOwnPropertyDescriptor,c=(e,n,t,r)=>{for(var s=r>1?void 0:r?w(n,t):n,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(r?l(n,t,s):l(s))||s);return r&&s&&g(n,t,s),s};let i=class extends _{constructor(){super(...arguments);o(this,"value");o(this,"placeholder");o(this,"showOnClick");o(this,"variation");o(this,"type");o(this,"visible",!0)}get prefix(){return this.type==="input"?"s-input-guard":"s-text-guard"}showText(){this.showOnClick?this.visible=!1:this.$emit("click")}get guardClasses(){const t=[];return this.visible?t.push(this.prefix):t.push(`${this.prefix}--readable`),this.variation==="alt"&&t.push(`${this.prefix}--alt`),t}};c([u()],i.prototype,"value",2);c([u({default:"Click to show"})],i.prototype,"placeholder",2);c([u({default:!0})],i.prototype,"showOnClick",2);c([u({default:"normal"})],i.prototype,"variation",2);c([u({default:"text"})],i.prototype,"type",2);i=c([v({})],i);var $=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:e.guardClasses,on:{click:e.showText}},[e.visible?t("div",{class:`${e.prefix}__text`},[t("i",{staticClass:"fas fa-lock"}),e._v(" "+e._s(e.placeholder)+" ")]):e._e(),t("div",{class:e.visible?`${e.prefix}-wrapper`:`${e.prefix}-wrapper ${e.prefix}-wrapper--readable`},[e.$slots.content?e._t("content"):t("div",[e._v(e._s(e.value))])],2)])},D=[];const f={};var I=m(i,$,D,!1,S,null,null,null);function S(e){for(let n in f)this[n]=f[n]}const P=function(){return I.exports}();var O=Object.defineProperty,V=Object.getOwnPropertyDescriptor,h=(e,n,t,r)=>{for(var s=r>1?void 0:r?V(n,t):n,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(r?l(n,t,s):l(s))||s);return r&&s&&O(n,t,s),s};let p=class extends _{constructor(){super(...arguments);o(this,"value");o(this,"placeholder");o(this,"visible",!1)}showText(t){this.visible?this.$emit("click"):this.visible=!0,t.type==="keydown"&&setTimeout(()=>t.target.select(),200)}checkSelectedText(t){const r=t.target;this.visible||r.setSelectionRange(0,0),r.focus()}};h([u()],p.prototype,"value",2);h([u({default:"Click to show"})],p.prototype,"placeholder",2);p=h([v({components:{TextInput:G}})],p);var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"s-guard",class:{"s-guard--hidden":!e.visible},on:{click:e.showText}},[t("div",{staticClass:"s-guard__placeholder"},[t("i",{staticClass:"icon-lock"}),e._v(" "+e._s(e.placeholder)+" ")]),t("div",{staticClass:"s-guard__text"},[t("TextInput",{attrs:{readonly:"",type:"text"},on:{focus:e.checkSelectedText,keydown:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"space",32,r.key,[" ","Spacebar"])?null:(r.preventDefault(),e.showText.apply(null,arguments))}},model:{value:e.value,callback:function(r){e.value=r},expression:"value"}})],1)])},j=[];const x={};var N=m(p,k,j,!1,E,null,null,null);function E(e){for(let n in x)this[n]=x[n]}const R=function(){return N.exports}(),F=`<template>
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
`;var M=Object.defineProperty,A=Object.getOwnPropertyDescriptor,z=(e,n,t,r)=>{for(var s=r>1?void 0:r?A(n,t):n,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=(r?l(n,t,s):l(s))||s);return r&&s&&M(n,t,s),s};let d=class extends _{constructor(){super(...arguments);o(this,"demoCode",F);o(this,"textInputPlaceholder","placeholder");o(this,"textInputValue","This is something super secret...")}};d=z([v({components:{DemoSection:T,Guard:P,GuardNew:R,TextInput:G}})],d);var q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("div",{staticClass:"section"},[t("h2",[e._v("Text Guard")]),t("DemoSection",{attrs:{title:"Text Guard",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Guard",{staticClass:"guard-margin",attrs:{type:"alt",value:"Text"}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Input Guard")]),t("DemoSection",{attrs:{title:"Input Guard",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Guard",{attrs:{type:"input"}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("TextInput",{attrs:{slot:"input",label:"Text input",type:"text",placeholder:e.textInputPlaceholder,name:"textExample"},slot:"input",model:{value:e.textInputValue,callback:function(r){e.textInputValue=r},expression:"textInputValue"}})],1)])]},proxy:!0}])})],1),e._m(1)])},B=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"section"},[t("h1",[e._v("Guards")]),t("pre",[t("code",[e._v(`import { Guard } from 'streamlabs-beaker';

components: {
  Guard
}`)])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Text Value")])]),t("tr",[t("td",[e._v("type")]),t("td",[e._v("string")]),t("td",[e._v("text")]),t("td",[e._v(" This can be either text or input (supply content slot for input) ")])])])])}];const y={};var H=m(d,q,B,!1,J,null,null,null);function J(e){for(let n in y)this[n]=y[n]}const ee=function(){return H.exports}();export{ee as default};
//# sourceMappingURL=Guards-b18fed41.js.map

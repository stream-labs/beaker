var x=Object.defineProperty;var y=(n,e,t)=>e in n?x(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var o=(n,e,t)=>(y(n,typeof e!="symbol"?e+"":e,t),t);import{C as _,P as u,V as v,n as m}from"./index.4fb8a6cb.js";import{D as G}from"./DemoSection.79ee11c0.js";import{T as h}from"./TextInput.6d9c9908.js";import"./Accordion.09c82396.js";import"./_baseClone.a549c660.js";var b=Object.defineProperty,C=Object.getOwnPropertyDescriptor,p=(n,e,t,s)=>{for(var r=s>1?void 0:s?C(e,t):e,a=n.length-1,l;a>=0;a--)(l=n[a])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&b(e,t,r),r};let i=class extends v{constructor(){super(...arguments);o(this,"value");o(this,"placeholder");o(this,"showOnClick");o(this,"variation");o(this,"type");o(this,"visible",!0)}get prefix(){return this.type==="input"?"s-input-guard":"s-text-guard"}showText(){this.showOnClick?this.visible=!1:this.$emit("click")}get guardClasses(){const e=[];return this.visible?e.push(this.prefix):e.push(`${this.prefix}--readable`),this.variation==="alt"&&e.push(`${this.prefix}--alt`),e}};p([u()],i.prototype,"value",2);p([u({default:"Click to show"})],i.prototype,"placeholder",2);p([u({default:!0})],i.prototype,"showOnClick",2);p([u({default:"normal"})],i.prototype,"variation",2);p([u({default:"text"})],i.prototype,"type",2);i=p([_({})],i);var T=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{class:e.guardClasses,on:{click:e.showText}},[e.visible?t("div",{class:`${e.prefix}__text`},[t("i",{staticClass:"fas fa-lock"}),e._v(" "+e._s(e.placeholder)+" ")]):e._e(),t("div",{class:e.visible?`${e.prefix}-wrapper`:`${e.prefix}-wrapper ${e.prefix}-wrapper--readable`},[e.$slots.content?e._t("content"):t("div",[e._v(e._s(e.value))])],2)])},g=[],w=m(i,T,g,!1,null,null,null,null);const P=w.exports;var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,f=(n,e,t,s)=>{for(var r=s>1?void 0:s?I(e,t):e,a=n.length-1,l;a>=0;a--)(l=n[a])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&D(e,t,r),r};let c=class extends v{constructor(){super(...arguments);o(this,"value");o(this,"placeholder");o(this,"visible",!1)}showText(e){this.visible?this.$emit("click"):this.visible=!0,e.type==="keydown"&&setTimeout(()=>e.target.select(),200)}checkSelectedText(e){const t=e.target;this.visible||t.setSelectionRange(0,0),t.focus()}};f([u()],c.prototype,"value",2);f([u({default:"Click to show"})],c.prototype,"placeholder",2);c=f([_({components:{TextInput:h}})],c);var $=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"s-guard",class:{"s-guard--hidden":!e.visible},on:{click:e.showText}},[t("div",{staticClass:"s-guard__placeholder"},[t("i",{staticClass:"icon-lock"}),e._v(" "+e._s(e.placeholder)+" ")]),t("div",{staticClass:"s-guard__text"},[t("TextInput",{attrs:{readonly:"",type:"text"},on:{focus:e.checkSelectedText,keydown:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"])?null:(s.preventDefault(),e.showText.apply(null,arguments))}},model:{value:e.value,callback:function(s){e.value=s},expression:"value"}})],1)])},S=[],O=m(c,$,S,!1,null,null,null,null);const V=O.exports,k=`<template>
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
`;var N=Object.defineProperty,j=Object.getOwnPropertyDescriptor,R=(n,e,t,s)=>{for(var r=s>1?void 0:s?j(e,t):e,a=n.length-1,l;a>=0;a--)(l=n[a])&&(r=(s?l(e,t,r):l(r))||r);return s&&r&&N(e,t,r),r};let d=class extends v{constructor(){super(...arguments);o(this,"demoCode",k);o(this,"textInputPlaceholder","placeholder");o(this,"textInputValue","This is something super secret...")}};d=R([_({components:{DemoSection:G,Guard:P,GuardNew:V,TextInput:h}})],d);var F=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[e._m(0),t("div",{staticClass:"section"},[t("h2",[e._v("Text Guard")]),t("DemoSection",{attrs:{title:"Text Guard",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Guard",{staticClass:"guard-margin",attrs:{type:"alt",value:"Text"}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Input Guard")]),t("DemoSection",{attrs:{title:"Input Guard",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Guard",{attrs:{type:"input"}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("TextInput",{attrs:{slot:"input",label:"Text input",type:"text",placeholder:e.textInputPlaceholder,name:"textExample"},slot:"input",model:{value:e.textInputValue,callback:function(s){e.textInputValue=s},expression:"textInputValue"}})],1)])]},proxy:!0}])})],1),e._m(1)])},A=[function(){var n=this,e=n._self._c;return n._self._setupProxy,e("div",{staticClass:"section"},[e("h1",[n._v("Guards")]),e("pre",[e("code",[n._v(`import { Guard } from 'streamlabs-beaker';

components: {
  Guard
}`)])])])},function(){var n=this,e=n._self._c;return n._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[n._v("Prop")]),e("th",[n._v("Type")]),e("th",[n._v("Default")]),e("th",[n._v("Description")])])]),e("tbody",[e("tr",[e("td",[n._v("value")]),e("td",[n._v("string")]),e("td",[n._v("null")]),e("td",[n._v("Text Value")])]),e("tr",[e("td",[n._v("type")]),e("td",[n._v("string")]),e("td",[n._v("text")]),e("td",[n._v(" This can be either text or input (supply content slot for input) ")])])])])}],E=m(d,F,A,!1,null,null,null,null);const L=E.exports;export{L as default};
//# sourceMappingURL=Guards.6bd8d70b.js.map

var c=Object.defineProperty;var g=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var l=(e,n,t)=>(g(e,typeof n!="symbol"?n+"":n,t),t);import{C as v,T as p,V as m,n as u}from"./index.17a864f5.js";import{D as h}from"./DemoSection.a0f0b33e.js";import"./Accordion.a5b0018d.js";const _=`<template>
  <div>
    <div class="section">
      <h1>Toggles</h1>
      <p>Toggle between multiple custom options such as show and hide.</p>

      <pre><code>import { Toggle } from 'streamlabs-beaker';

components: {
  Toggle
}</code></pre>
    </div>

    <div class="section">
      <h2>Icon Toggles</h2>
      <DemoSection title="Icon Toggles" :code="demoCode">
        <template #components>
          <Toggle
            :values="{
              show: \`<i class='icon-view'></i>\`,
              hide: \`<i class='icon-hide'></i>\`
            }"
            v-model="selectedOption"
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Text Toggles</h2>
      <DemoSection title="Text Toggles" :code="demoCode">
        <template #components>
          <Toggle
            :values="{
              revenue: 'Revenue',
              growth: 'Growth'
            }"
            v-model="selectedTextOption"
            :variation="'text'"
          />
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
          <td>values</td>
          <td>object</td>
          <td>null</td>
          <td>
            Set toggle options with strings for the keys and HTML for the
            values. Keys will also be displayed as toggle title attributes.
          </td>
        </tr>
        <tr>
          <td>v-model</td>
          <td>string</td>
          <td>null</td>
          <td>Use as a bind to the currently selected toggle option.</td>
        </tr>
        <tr>
          <td>variation</td>
          <td>string</td>
          <td>null</td>
          <td>
            Add a toggle variation for a subtle style change. Options are
            <code>text</code>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import Toggle from "./../components/Toggle.vue";
import TogglesCode from "./Toggles.vue?raw";

@Component({
  components: {
    DemoSection,
    Toggle
  }
})
export default class Toggles extends Vue {
  demoCode = TogglesCode;
  selectedOption = "show";
  selectedTextOption = "revenue";
}
<\/script>
`;var T=Object.defineProperty,f=Object.getOwnPropertyDescriptor,b=(e,n,t,o)=>{for(var s=o>1?void 0:o?f(n,t):n,i=e.length-1,r;i>=0;i--)(r=e[i])&&(s=(o?r(n,t,s):r(s))||s);return o&&s&&T(n,t,s),s};let d=class extends m{constructor(){super(...arguments);l(this,"demoCode",_);l(this,"selectedOption","show");l(this,"selectedTextOption","revenue")}};d=b([v({components:{DemoSection:h,Toggle:p}})],d);var x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("div",{staticClass:"section"},[t("h2",[e._v("Icon Toggles")]),t("DemoSection",{attrs:{title:"Icon Toggles",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Toggle",{attrs:{values:{show:"<i class='icon-view'></i>",hide:"<i class='icon-hide'></i>"}},model:{value:e.selectedOption,callback:function(o){e.selectedOption=o},expression:"selectedOption"}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Text Toggles")]),t("DemoSection",{attrs:{title:"Text Toggles",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Toggle",{attrs:{values:{revenue:"Revenue",growth:"Growth"},variation:"text"},model:{value:e.selectedTextOption,callback:function(o){e.selectedTextOption=o},expression:"selectedTextOption"}})]},proxy:!0}])})],1),e._m(1)])},w=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"section"},[t("h1",[e._v("Toggles")]),t("p",[e._v("Toggle between multiple custom options such as show and hide.")]),t("pre",[t("code",[e._v(`import { Toggle } from 'streamlabs-beaker';

components: {
  Toggle
}`)])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("values")]),t("td",[e._v("object")]),t("td",[e._v("null")]),t("td",[e._v(" Set toggle options with strings for the keys and HTML for the values. Keys will also be displayed as toggle title attributes. ")])]),t("tr",[t("td",[e._v("v-model")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Use as a bind to the currently selected toggle option.")])]),t("tr",[t("td",[e._v("variation")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" Add a toggle variation for a subtle style change. Options are "),t("code",[e._v("text")]),e._v(". ")])])])])}];const a={};var y=u(d,x,w,!1,C,null,null,null);function C(e){for(let n in a)this[n]=a[n]}const j=function(){return y.exports}();export{j as default};
//# sourceMappingURL=Toggles.12faf7da.js.map

var a=Object.defineProperty;var c=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var l=(t,e,n)=>(c(t,typeof e!="symbol"?e+"":e,n),n);import{C as g,T as p,V as v,n as m}from"./index.4fb8a6cb.js";import{D as u}from"./DemoSection.79ee11c0.js";import"./Accordion.09c82396.js";const _=`<template>
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
`;var h=Object.defineProperty,T=Object.getOwnPropertyDescriptor,f=(t,e,n,o)=>{for(var s=o>1?void 0:o?T(e,n):e,i=t.length-1,d;i>=0;i--)(d=t[i])&&(s=(o?d(e,n,s):d(s))||s);return o&&s&&h(e,n,s),s};let r=class extends v{constructor(){super(...arguments);l(this,"demoCode",_);l(this,"selectedOption","show");l(this,"selectedTextOption","revenue")}};r=f([g({components:{DemoSection:u,Toggle:p}})],r);var b=function(){var e=this,n=e._self._c;return e._self._setupProxy,n("div",[e._m(0),n("div",{staticClass:"section"},[n("h2",[e._v("Icon Toggles")]),n("DemoSection",{attrs:{title:"Icon Toggles",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[n("Toggle",{attrs:{values:{show:"<i class='icon-view'></i>",hide:"<i class='icon-hide'></i>"}},model:{value:e.selectedOption,callback:function(o){e.selectedOption=o},expression:"selectedOption"}})]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[e._v("Text Toggles")]),n("DemoSection",{attrs:{title:"Text Toggles",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[n("Toggle",{attrs:{values:{revenue:"Revenue",growth:"Growth"},variation:"text"},model:{value:e.selectedTextOption,callback:function(o){e.selectedTextOption=o},expression:"selectedTextOption"}})]},proxy:!0}])})],1),e._m(1)])},x=[function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"section"},[e("h1",[t._v("Toggles")]),e("p",[t._v("Toggle between multiple custom options such as show and hide.")]),e("pre",[e("code",[t._v(`import { Toggle } from 'streamlabs-beaker';

components: {
  Toggle
}`)])])])},function(){var t=this,e=t._self._c;return t._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("values")]),e("td",[t._v("object")]),e("td",[t._v("null")]),e("td",[t._v(" Set toggle options with strings for the keys and HTML for the values. Keys will also be displayed as toggle title attributes. ")])]),e("tr",[e("td",[t._v("v-model")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Use as a bind to the currently selected toggle option.")])]),e("tr",[e("td",[t._v("variation")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Add a toggle variation for a subtle style change. Options are "),e("code",[t._v("text")]),t._v(". ")])])])])}],y=m(r,b,x,!1,null,null,null,null);const S=y.exports;export{S as default};
//# sourceMappingURL=Toggles.92f67a51.js.map

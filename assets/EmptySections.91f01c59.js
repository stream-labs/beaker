var d=Object.defineProperty;var p=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var s=(e,n,t)=>(p(e,typeof n!="symbol"?n+"":n,t),t);import{C as l,V as u,n as v}from"./index.17a864f5.js";import{E as h}from"./EmptySection.d5fbd15f.js";import{D as _}from"./DemoSection.a0f0b33e.js";import"./Accordion.a5b0018d.js";const S=`<template>
  <div>
    <div class="section">
      <h1>Empty Sections</h1>
      <pre><code>import { EmptySection } from 'streamlabs-beaker';

components: {
  EmptySection
}</code></pre>
    </div>

    <div class="section">
      <h2>Search Variation</h2>

      <DemoSection title="Search Variation" :code="demoCode">
        <template #components>
          <EmptySection
            variation="search"
            title="No results found for 'sadasdasd'"
            subtitle="Try another search term."
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Text Variation</h2>

      <DemoSection title="Text Variation" :code="demoCode">
        <template #components>
          <EmptySection
            title="You don't have any pending users yet"
            subtitle="Open a queue to get started."
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Warning Variation</h2>

      <DemoSection title="Warning Variation" :code="demoCode">
        <template #components>
          <EmptySection
            variation="warning"
            title="You need to setup your domain"
            subtitle="A domain name is required for custom email."
          />
        </template>
      </DemoSection>
    </div>

    <table class="docs-table">
      <thead>
        <tr>
          <th>Props</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>variation</td>
          <td>String</td>
          <td>'text'</td>
          <td>The icon within the element</td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>'Streamlabs.com'</td>
          <td>The title for the empty section</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td>String</td>
          <td>''</td>
          <td>A subtitle for the empty section</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EmptySection from "./../components/EmptySection.vue";
import EmptySectionsCode from "./EmptySections.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    DemoSection,
    EmptySection
  }
})
export default class EmptySections extends Vue {
  demoCode = EmptySectionsCode;
  value = "hi";
}
<\/script>
`;var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,E=(e,n,t,i)=>{for(var o=i>1?void 0:i?f(n,t):n,r=e.length-1,a;r>=0;r--)(a=e[r])&&(o=(i?a(n,t,o):a(o))||o);return i&&o&&y(n,t,o),o};let c=class extends u{constructor(){super(...arguments);s(this,"demoCode",S);s(this,"value","hi")}};c=E([l({components:{DemoSection:_,EmptySection:h}})],c);var b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("div",{staticClass:"section"},[t("h2",[e._v("Search Variation")]),t("DemoSection",{attrs:{title:"Search Variation",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("EmptySection",{attrs:{variation:"search",title:"No results found for 'sadasdasd'",subtitle:"Try another search term."}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Text Variation")]),t("DemoSection",{attrs:{title:"Text Variation",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("EmptySection",{attrs:{title:"You don't have any pending users yet",subtitle:"Open a queue to get started."}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Warning Variation")]),t("DemoSection",{attrs:{title:"Warning Variation",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("EmptySection",{attrs:{variation:"warning",title:"You need to setup your domain",subtitle:"A domain name is required for custom email."}})]},proxy:!0}])})],1),e._m(1)])},C=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"section"},[t("h1",[e._v("Empty Sections")]),t("pre",[t("code",[e._v(`import { EmptySection } from 'streamlabs-beaker';

components: {
  EmptySection
}`)])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Props")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("variation")]),t("td",[e._v("String")]),t("td",[e._v("'text'")]),t("td",[e._v("The icon within the element")])]),t("tr",[t("td",[e._v("title")]),t("td",[e._v("String")]),t("td",[e._v("'Streamlabs.com'")]),t("td",[e._v("The title for the empty section")])]),t("tr",[t("td",[e._v("subtitle")]),t("td",[e._v("String")]),t("td",[e._v("''")]),t("td",[e._v("A subtitle for the empty section")])])])])}];const m={};var D=v(c,b,C,!1,g,null,null,null);function g(e){for(let n in m)this[n]=m[n]}const P=function(){return D.exports}();export{P as default};
//# sourceMappingURL=EmptySections.91f01c59.js.map

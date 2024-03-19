var d=Object.defineProperty;var m=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var a=(e,t,n)=>(m(e,typeof t!="symbol"?t+"":t,n),n);import{C as p,V as l,n as u}from"./index.4fb8a6cb.js";import{E as v}from"./EmptySection.71dd93db.js";import{D as _}from"./DemoSection.79ee11c0.js";import"./Accordion.09c82396.js";const h=`<template>
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
`;var S=Object.defineProperty,y=Object.getOwnPropertyDescriptor,f=(e,t,n,i)=>{for(var o=i>1?void 0:i?y(t,n):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(i?s(t,n,o):s(o))||o);return i&&o&&S(t,n,o),o};let c=class extends l{constructor(){super(...arguments);a(this,"demoCode",h);a(this,"value","hi")}};c=f([p({components:{DemoSection:_,EmptySection:v}})],c);var b=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",[t._m(0),n("div",{staticClass:"section"},[n("h2",[t._v("Search Variation")]),n("DemoSection",{attrs:{title:"Search Variation",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("EmptySection",{attrs:{variation:"search",title:"No results found for 'sadasdasd'",subtitle:"Try another search term."}})]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[t._v("Text Variation")]),n("DemoSection",{attrs:{title:"Text Variation",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("EmptySection",{attrs:{title:"You don't have any pending users yet",subtitle:"Open a queue to get started."}})]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[t._v("Warning Variation")]),n("DemoSection",{attrs:{title:"Warning Variation",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("EmptySection",{attrs:{variation:"warning",title:"You need to setup your domain",subtitle:"A domain name is required for custom email."}})]},proxy:!0}])})],1),t._m(1)])},E=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[e._v("Empty Sections")]),t("pre",[t("code",[e._v(`import { EmptySection } from 'streamlabs-beaker';

components: {
  EmptySection
}`)])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Props")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("variation")]),t("td",[e._v("String")]),t("td",[e._v("'text'")]),t("td",[e._v("The icon within the element")])]),t("tr",[t("td",[e._v("title")]),t("td",[e._v("String")]),t("td",[e._v("'Streamlabs.com'")]),t("td",[e._v("The title for the empty section")])]),t("tr",[t("td",[e._v("subtitle")]),t("td",[e._v("String")]),t("td",[e._v("''")]),t("td",[e._v("A subtitle for the empty section")])])])])}],C=u(c,b,E,!1,null,null,null,null);const P=C.exports;export{P as default};
//# sourceMappingURL=EmptySections.a7241bf0.js.map

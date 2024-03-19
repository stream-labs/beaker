var l=Object.defineProperty;var g=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var i=(e,t,n)=>(g(e,typeof t!="symbol"?t+"":t,n),n);import{C as c,V as v,n as u}from"./index.4fb8a6cb.js";import{A as m}from"./Accordion.09c82396.js";import{B as p}from"./Badge.2c39dd0d.js";import{C as f}from"./Callout.ac9d99a3.js";import{D as _}from"./DemoSection.79ee11c0.js";const B=`<template>
  <div>
    <div class="section">
      <h1>Badges</h1>
      <p>
        By default, our Badges are designed to be on the right side of elements
        with 8px of margin on the left. If you would like to use a Badge on the
        left side of an element, set prop
        <code>align-left="true"</code> and it will switch the margin to be on
        the right side.
      </p>

      <pre><code>import { Badge } from 'streamlabs-beaker';

components: {
  Badge
}</code></pre>

      <div class="section">
        <h2>Standard Badges</h2>
        <DemoSection title="Standard Badges" :code="demoCode">
          <template #components>
            <Badge variant="beta" :align-left="true">Beta</Badge>
            <Badge variant="new" :align-left="true">New</Badge>
            <Badge variant="warning" :align-left="true">Error</Badge>
            <Badge variant="tag" :align-left="true">Tag</Badge>
            <Badge variant="pro" :align-left="true">Pro</Badge>
            <Badge
              :align-left="true"
              background-color="pink"
              text-color="#ffffff"
              >Custom</Badge
            >
            <Badge variant="prime" :align-left="true" />
            <Badge variant="ultra" :align-left="true" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Alt Badges</h2>
        <DemoSection title="Alt Badges" :code="demoCode">
          <template #components>
            <Badge variant="beta-alt" :align-left="true">Beta</Badge>
            <Badge variant="new-alt" :align-left="true">New</Badge>
            <Badge variant="warning-alt" :align-left="true">Error</Badge>
            <Badge variant="tag-alt" :align-left="true">Tag</Badge>
            <Badge variant="pro-alt" :align-left="true">Pro</Badge>
            <Badge variant="prime-alt" :align-left="true"></Badge>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Small Badges</h2>
        <DemoSection title="Small Badges" :code="demoCode">
          <template #components>
            <Badge :small="true" variant="beta" :align-left="true">Beta</Badge>
            <Badge :small="true" variant="new" :align-left="true">New</Badge>
            <Badge :small="true" variant="warning" :align-left="true">
              Error
            </Badge>
            <Badge :small="true" variant="tag" :align-left="true">Tag</Badge>
            <Badge :small="true" variant="pro" :align-left="true">Pro</Badge>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Progress Badge</h2>
        <p>Used to show amount of items sold in merch.</p>
        <DemoSection title="Progress Badge" :code="demoCode">
          <template #components>
            <Badge
              :align-left="true"
              variant="progress"
              backgroundColor="#8736e0"
              :current="17"
              :total="25"
              suffix="Sold"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Count Badge</h2>
        <p>Used to show amount of items sold in merch.</p>
        <DemoSection title="Count Badge" :code="demoCode">
          <template #components>
            <Badge variant="count">3</Badge>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Mod Badge</h2>
        <p>Used in an info callout.</p>
        <DemoSection title="Mod Badge" :code="demoCode">
          <template #components>
            <Callout variation="info">
              Remember to
              <Badge variant="mod">/mod Streamlabs</Badge>
              to initiate Cloudbot.
            </Callout>
          </template>
        </DemoSection>
      </div>
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
          <td>variant</td>
          <td>string</td>
          <td>"success"</td>
          <td>
            How the Badge will look or funciton. Variants:
            <code>success</code>, <code>tag</code>*, <code>new</code>*,
            <code>beta</code>*, <code>warning</code>*, <code>pro</code>*,
            <code>progress</code>, <code>mod</code>, and <code>count</code>.
            <br />
            <small>
              *Alternate style available by adding
              <code>-alt</code> to variant string.
            </small>
          </td>
        </tr>
        <tr>
          <td>alignLeft</td>
          <td>boolean</td>
          <td>false</td>
          <td>Moves 8px of margin from the left to the right.</td>
        </tr>
        <tr>
          <td>noMargin</td>
          <td>boolean</td>
          <td>false</td>
          <td>Removes margin from left and right.</td>
        </tr>
        <tr>
          <td>backgroundColor</td>
          <td>string</td>
          <td>"#31c3a2"</td>
          <td>
            Use this prop to change the background color only if you need an
            option that's not one of the provided variants.
          </td>
        </tr>
        <tr>
          <td>textColor</td>
          <td>string</td>
          <td>"#ffffff"</td>
          <td>
            Use this prop to change the text color only if you need an option
            that's not one of the provided variants.
          </td>
        </tr>
        <tr>
          <td>current</td>
          <td>number</td>
          <td>null</td>
          <td>
            Current progress amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>total</td>
          <td>number</td>
          <td>null</td>
          <td>
            Total progross amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>separator</td>
          <td>string</td>
          <td>"/"</td>
          <td>
            Separator between current and total amounts is displayed.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>string</td>
          <td>null</td>
          <td>
            String to the right of the total amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import Badge from "./../components/Badge.vue";
import BadgesCode from "./Badges.vue?raw";
import Callout from "./../components/Callout.vue";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    Accordion,
    Badge,
    Callout,
    DemoSection
  }
})
export default class Badges extends Vue {
  demoCode = BadgesCode;
}
<\/script>

<style lang="less" scoped>
.section__components {
  display: flex;
  align-items: center;
}
</style>
`;var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,C=(e,t,n,a)=>{for(var o=a>1?void 0:a?b(t,n):t,r=e.length-1,d;r>=0;r--)(d=e[r])&&(o=(a?d(t,n,o):d(o))||o);return a&&o&&h(t,n,o),o};let s=class extends v{constructor(){super(...arguments);i(this,"demoCode",B)}};s=C([c({components:{Accordion:m,Badge:p,Callout:f,DemoSection:_}})],s);var y=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",[n("div",{staticClass:"section"},[n("h1",[t._v("Badges")]),t._m(0),t._m(1),n("div",{staticClass:"section"},[n("h2",[t._v("Standard Badges")]),n("DemoSection",{attrs:{title:"Standard Badges",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Badge",{attrs:{variant:"beta","align-left":!0}},[t._v("Beta")]),n("Badge",{attrs:{variant:"new","align-left":!0}},[t._v("New")]),n("Badge",{attrs:{variant:"warning","align-left":!0}},[t._v("Error")]),n("Badge",{attrs:{variant:"tag","align-left":!0}},[t._v("Tag")]),n("Badge",{attrs:{variant:"pro","align-left":!0}},[t._v("Pro")]),n("Badge",{attrs:{"align-left":!0,"background-color":"pink","text-color":"#ffffff"}},[t._v("Custom")]),n("Badge",{attrs:{variant:"prime","align-left":!0}}),n("Badge",{attrs:{variant:"ultra","align-left":!0}})]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[t._v("Alt Badges")]),n("DemoSection",{attrs:{title:"Alt Badges",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Badge",{attrs:{variant:"beta-alt","align-left":!0}},[t._v("Beta")]),n("Badge",{attrs:{variant:"new-alt","align-left":!0}},[t._v("New")]),n("Badge",{attrs:{variant:"warning-alt","align-left":!0}},[t._v("Error")]),n("Badge",{attrs:{variant:"tag-alt","align-left":!0}},[t._v("Tag")]),n("Badge",{attrs:{variant:"pro-alt","align-left":!0}},[t._v("Pro")]),n("Badge",{attrs:{variant:"prime-alt","align-left":!0}})]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[t._v("Small Badges")]),n("DemoSection",{attrs:{title:"Small Badges",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Badge",{attrs:{small:!0,variant:"beta","align-left":!0}},[t._v("Beta")]),n("Badge",{attrs:{small:!0,variant:"new","align-left":!0}},[t._v("New")]),n("Badge",{attrs:{small:!0,variant:"warning","align-left":!0}},[t._v(" Error ")]),n("Badge",{attrs:{small:!0,variant:"tag","align-left":!0}},[t._v("Tag")]),n("Badge",{attrs:{small:!0,variant:"pro","align-left":!0}},[t._v("Pro")])]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[t._v("Progress Badge")]),n("p",[t._v("Used to show amount of items sold in merch.")]),n("DemoSection",{attrs:{title:"Progress Badge",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Badge",{attrs:{"align-left":!0,variant:"progress",backgroundColor:"#8736e0",current:17,total:25,suffix:"Sold"}})]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[t._v("Count Badge")]),n("p",[t._v("Used to show amount of items sold in merch.")]),n("DemoSection",{attrs:{title:"Count Badge",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Badge",{attrs:{variant:"count"}},[t._v("3")])]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[t._v("Mod Badge")]),n("p",[t._v("Used in an info callout.")]),n("DemoSection",{attrs:{title:"Mod Badge",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Callout",{attrs:{variation:"info"}},[t._v(" Remember to "),n("Badge",{attrs:{variant:"mod"}},[t._v("/mod Streamlabs")]),t._v(" to initiate Cloudbot. ")],1)]},proxy:!0}])})],1)]),t._m(2)])},S=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("p",[e._v(" By default, our Badges are designed to be on the right side of elements with 8px of margin on the left. If you would like to use a Badge on the left side of an element, set prop "),t("code",[e._v('align-left="true"')]),e._v(" and it will switch the margin to be on the right side. ")])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("pre",[t("code",[e._v(`import { Badge } from 'streamlabs-beaker';

components: {
  Badge
}`)])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("variant")]),t("td",[e._v("string")]),t("td",[e._v('"success"')]),t("td",[e._v(" How the Badge will look or funciton. Variants: "),t("code",[e._v("success")]),e._v(", "),t("code",[e._v("tag")]),e._v("*, "),t("code",[e._v("new")]),e._v("*, "),t("code",[e._v("beta")]),e._v("*, "),t("code",[e._v("warning")]),e._v("*, "),t("code",[e._v("pro")]),e._v("*, "),t("code",[e._v("progress")]),e._v(", "),t("code",[e._v("mod")]),e._v(", and "),t("code",[e._v("count")]),e._v(". "),t("br"),t("small",[e._v(" *Alternate style available by adding "),t("code",[e._v("-alt")]),e._v(" to variant string. ")])])]),t("tr",[t("td",[e._v("alignLeft")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Moves 8px of margin from the left to the right.")])]),t("tr",[t("td",[e._v("noMargin")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Removes margin from left and right.")])]),t("tr",[t("td",[e._v("backgroundColor")]),t("td",[e._v("string")]),t("td",[e._v('"#31c3a2"')]),t("td",[e._v(" Use this prop to change the background color only if you need an option that's not one of the provided variants. ")])]),t("tr",[t("td",[e._v("textColor")]),t("td",[e._v("string")]),t("td",[e._v('"#ffffff"')]),t("td",[e._v(" Use this prop to change the text color only if you need an option that's not one of the provided variants. ")])]),t("tr",[t("td",[e._v("current")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v(" Current progress amount. "),t("code",[e._v("variant")]),e._v(" prop must be set to "),t("code",[e._v("progress")]),e._v(". ")])]),t("tr",[t("td",[e._v("total")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v(" Total progross amount. "),t("code",[e._v("variant")]),e._v(" prop must be set to "),t("code",[e._v("progress")]),e._v(". ")])]),t("tr",[t("td",[e._v("separator")]),t("td",[e._v("string")]),t("td",[e._v('"/"')]),t("td",[e._v(" Separator between current and total amounts is displayed. "),t("code",[e._v("variant")]),e._v(" prop must be set to "),t("code",[e._v("progress")]),e._v(". ")])]),t("tr",[t("td",[e._v("suffix")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" String to the right of the total amount. "),t("code",[e._v("variant")]),e._v(" prop must be set to "),t("code",[e._v("progress")]),e._v(". ")])])])])}],w=u(s,y,S,!1,null,"585d259f",null,null);const U=w.exports;export{U as default};
//# sourceMappingURL=Badges.098563da.js.map

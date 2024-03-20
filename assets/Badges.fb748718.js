var c=Object.defineProperty;var g=(t,n,e)=>n in t?c(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var i=(t,n,e)=>(g(t,typeof n!="symbol"?n+"":n,e),e);import{C as v,V as m,n as u}from"./index.17a864f5.js";import{A as p}from"./Accordion.a5b0018d.js";import{B as f}from"./Badge.5516ee12.js";import{C as _}from"./Callout.d953ccb2.js";import{D as B}from"./DemoSection.a0f0b33e.js";const h=`<template>
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
`;var b=Object.defineProperty,C=Object.getOwnPropertyDescriptor,S=(t,n,e,o)=>{for(var a=o>1?void 0:o?C(n,e):n,r=t.length-1,d;r>=0;r--)(d=t[r])&&(a=(o?d(n,e,a):d(a))||a);return o&&a&&b(n,e,a),a};let s=class extends m{constructor(){super(...arguments);i(this,"demoCode",h)}};s=S([v({components:{Accordion:p,Badge:f,Callout:_,DemoSection:B}})],s);var w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"section"},[e("h1",[t._v("Badges")]),t._m(0),t._m(1),e("div",{staticClass:"section"},[e("h2",[t._v("Standard Badges")]),e("DemoSection",{attrs:{title:"Standard Badges",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Badge",{attrs:{variant:"beta","align-left":!0}},[t._v("Beta")]),e("Badge",{attrs:{variant:"new","align-left":!0}},[t._v("New")]),e("Badge",{attrs:{variant:"warning","align-left":!0}},[t._v("Error")]),e("Badge",{attrs:{variant:"tag","align-left":!0}},[t._v("Tag")]),e("Badge",{attrs:{variant:"pro","align-left":!0}},[t._v("Pro")]),e("Badge",{attrs:{"align-left":!0,"background-color":"pink","text-color":"#ffffff"}},[t._v("Custom")]),e("Badge",{attrs:{variant:"prime","align-left":!0}}),e("Badge",{attrs:{variant:"ultra","align-left":!0}})]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Alt Badges")]),e("DemoSection",{attrs:{title:"Alt Badges",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Badge",{attrs:{variant:"beta-alt","align-left":!0}},[t._v("Beta")]),e("Badge",{attrs:{variant:"new-alt","align-left":!0}},[t._v("New")]),e("Badge",{attrs:{variant:"warning-alt","align-left":!0}},[t._v("Error")]),e("Badge",{attrs:{variant:"tag-alt","align-left":!0}},[t._v("Tag")]),e("Badge",{attrs:{variant:"pro-alt","align-left":!0}},[t._v("Pro")]),e("Badge",{attrs:{variant:"prime-alt","align-left":!0}})]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Small Badges")]),e("DemoSection",{attrs:{title:"Small Badges",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Badge",{attrs:{small:!0,variant:"beta","align-left":!0}},[t._v("Beta")]),e("Badge",{attrs:{small:!0,variant:"new","align-left":!0}},[t._v("New")]),e("Badge",{attrs:{small:!0,variant:"warning","align-left":!0}},[t._v(" Error ")]),e("Badge",{attrs:{small:!0,variant:"tag","align-left":!0}},[t._v("Tag")]),e("Badge",{attrs:{small:!0,variant:"pro","align-left":!0}},[t._v("Pro")])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Progress Badge")]),e("p",[t._v("Used to show amount of items sold in merch.")]),e("DemoSection",{attrs:{title:"Progress Badge",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Badge",{attrs:{"align-left":!0,variant:"progress",backgroundColor:"#8736e0",current:17,total:25,suffix:"Sold"}})]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Count Badge")]),e("p",[t._v("Used to show amount of items sold in merch.")]),e("DemoSection",{attrs:{title:"Count Badge",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Badge",{attrs:{variant:"count"}},[t._v("3")])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Mod Badge")]),e("p",[t._v("Used in an info callout.")]),e("DemoSection",{attrs:{title:"Mod Badge",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Callout",{attrs:{variation:"info"}},[t._v(" Remember to "),e("Badge",{attrs:{variant:"mod"}},[t._v("/mod Streamlabs")]),t._v(" to initiate Cloudbot. ")],1)]},proxy:!0}])})],1)]),t._m(2)])},y=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v(" By default, our Badges are designed to be on the right side of elements with 8px of margin on the left. If you would like to use a Badge on the left side of an element, set prop "),e("code",[t._v('align-left="true"')]),t._v(" and it will switch the margin to be on the right side. ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",[e("code",[t._v(`import { Badge } from 'streamlabs-beaker';

components: {
  Badge
}`)])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("variant")]),e("td",[t._v("string")]),e("td",[t._v('"success"')]),e("td",[t._v(" How the Badge will look or funciton. Variants: "),e("code",[t._v("success")]),t._v(", "),e("code",[t._v("tag")]),t._v("*, "),e("code",[t._v("new")]),t._v("*, "),e("code",[t._v("beta")]),t._v("*, "),e("code",[t._v("warning")]),t._v("*, "),e("code",[t._v("pro")]),t._v("*, "),e("code",[t._v("progress")]),t._v(", "),e("code",[t._v("mod")]),t._v(", and "),e("code",[t._v("count")]),t._v(". "),e("br"),e("small",[t._v(" *Alternate style available by adding "),e("code",[t._v("-alt")]),t._v(" to variant string. ")])])]),e("tr",[e("td",[t._v("alignLeft")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Moves 8px of margin from the left to the right.")])]),e("tr",[e("td",[t._v("noMargin")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Removes margin from left and right.")])]),e("tr",[e("td",[t._v("backgroundColor")]),e("td",[t._v("string")]),e("td",[t._v('"#31c3a2"')]),e("td",[t._v(" Use this prop to change the background color only if you need an option that's not one of the provided variants. ")])]),e("tr",[e("td",[t._v("textColor")]),e("td",[t._v("string")]),e("td",[t._v('"#ffffff"')]),e("td",[t._v(" Use this prop to change the text color only if you need an option that's not one of the provided variants. ")])]),e("tr",[e("td",[t._v("current")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v(" Current progress amount. "),e("code",[t._v("variant")]),t._v(" prop must be set to "),e("code",[t._v("progress")]),t._v(". ")])]),e("tr",[e("td",[t._v("total")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v(" Total progross amount. "),e("code",[t._v("variant")]),t._v(" prop must be set to "),e("code",[t._v("progress")]),t._v(". ")])]),e("tr",[e("td",[t._v("separator")]),e("td",[t._v("string")]),e("td",[t._v('"/"')]),e("td",[t._v(" Separator between current and total amounts is displayed. "),e("code",[t._v("variant")]),t._v(" prop must be set to "),e("code",[t._v("progress")]),t._v(". ")])]),e("tr",[e("td",[t._v("suffix")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" String to the right of the total amount. "),e("code",[t._v("variant")]),t._v(" prop must be set to "),e("code",[t._v("progress")]),t._v(". ")])])])])}];const l={};var D=u(s,w,y,!1,x,"0c9dfa1c",null,null);function x(t){for(let n in l)this[n]=l[n]}const M=function(){return D.exports}();export{M as default};
//# sourceMappingURL=Badges.fb748718.js.map

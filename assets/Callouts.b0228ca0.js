var u=Object.defineProperty;var d=(o,e,t)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var c=(o,e,t)=>(d(o,typeof e!="symbol"?e+"":e,t),t);import{C as v,V as m,n as C}from"./index.17a864f5.js";import{C as p}from"./Callout.d953ccb2.js";import{D as h}from"./DemoSection.a0f0b33e.js";import"./Badge.5516ee12.js";import"./Accordion.a5b0018d.js";const _=`<template>
  <div>
    <div class="section">
      <h1>Callouts</h1>
      <p>
        You can use our callout component if you need to display a message to
        users.
      </p>
      <h4>Rules</h4>
      <ul></ul>

      <pre><code>import { Callout } from 'streamlabs-beaker';

components: {
  Callout
}</code></pre>
    </div>

    <div class="section">
      <h2>Default Callouts</h2>
      <p>
        There are 3 basic callout variations: success, warning, and info. These
        can be used whenever necessary but please limit to 1 callout per page
        and limit the text to 1 line. You can link to more info in a modal or
        another page if needed.
      </p>

      <DemoSection title="Default Callouts" :code="demoCode">
        <template #components>
          <Callout variation="success">
            Success callout. <a href="#0">Link</a>
          </Callout>

          <Callout variation="warning">
            Warning callout. <a href="#0">Link</a>
          </Callout>

          <Callout variation="info">
            Info callout. <a href="#0">Link</a>
          </Callout>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Strong Callouts</h2>
      <p>
        These should be used
        <strong>very sparingly</strong>. These should be used in cases when
        something is going to be completed removed or something could become
        broken/lost if action is not taken.
      </p>

      <p>There are 3 strong callout variations: success, warning, and info.</p>

      <DemoSection title="Strong Callouts" :code="demoCode">
        <template #components>
          <Callout variation="success strong">
            Success callout. <a href="#0">Link</a>
          </Callout>

          <Callout variation="warning strong" icon="warning">
            Warning callout. <a href="#0">Link</a>
          </Callout>

          <Callout variation="info strong">
            Info callout. <a href="#0">Link</a>
          </Callout>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Cookies Callout</h2>
      <p>
        Used on landing page to warn users about use of cookies on our site.
      </p>

      <DemoSection title="Cookies Callouts" :code="demoCode">
        <template #components>
          <Callout
            variation="cookies"
            icon="info"
            :closeable="true"
            :onClose="cookieCalloutClosed"
          >
            Cookies callout. <a href="#0">Link</a>
          </Callout>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Prime Callout</h2>
      <p>
        Prime Callout.
      </p>

      <DemoSection title="Prime Callouts" :code="demoCode">
        <template #components>
          <Callout
            variation="prime"
            :closeable="true"
            @onClick="cookieCalloutClosed"
            :onClose="cookieCalloutClosed"
          >
            Themes, apps, website, merch and more. All included with Prime.
          </Callout>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Callout Options</h2>

      <div class="section">
        <h3>Closable</h3>
        <p>
          Use the <strong>closeable</strong> prop to give the callout the
          ability to close.
        </p>

        <DemoSection title="Closable Callouts" :code="demoCode">
          <template #components>
            <Callout variation="success" :closeable="true">
              Success callout. <a href="#0">Link</a>
            </Callout>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>With Icon</h3>
        <p>
          You can use the
          <code>icon</code> prop to set it to 'success', 'warning', or 'info'
          for most common cases. If you need a different icon you can simply use
          it inline.
        </p>

        <DemoSection title="Icon Callouts" :code="demoCode">
          <template #components>
            <Callout icon="success" variation="success" :closeable="true">
              Success callout. <a href="#0">Link</a>
            </Callout>

            <Callout icon="warning" variation="warning" :closeable="true">
              Warning callout. <a href="#0">Link</a>
            </Callout>

            <Callout icon="info" variation="info" :closeable="true">
              Info callout. <a href="#0">Link</a>
            </Callout>

            <Callout variation="info" :closeable="true">
              <i class="icon-settings"></i> Settings have moved. Visit them
              <a href="#0">here</a>.
            </Callout>
          </template>
        </DemoSection>
      </div>
    </div>

    <div class="section">
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
            <td>variation</td>
            <td>string</td>
            <td>'success'</td>
            <td>
              Use
              <code>'success'</code>, <code>'warning'</code>,
              <code>'info'</code>, <code>'cookies'</code> or
              <code>'prime'</code>. Add <code>'strong'</code> when necessary.
            </td>
          </tr>
          <tr>
            <td>closeable</td>
            <td>boolean</td>
            <td>false</td>
            <td>Added an icon with a function that closes the callout.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Set to false if you don't want an icon before the callout content.
            </td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>Function</td>
            <td>-</td>
            <td>on close callback</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Callout from "./../components/Callout.vue";
import CalloutsCode from "./Callouts.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    Callout,
    DemoSection
  }
})
export default class Callouts extends Vue {
  demoCode = CalloutsCode;
  cookieCalloutClosed() {
    console.log("cookie callout closed");
  }
}
<\/script>

<style lang="less" scoped></style>
`;var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,b=(o,e,t,a)=>{for(var n=a>1?void 0:a?g(e,t):e,l=o.length-1,s;l>=0;l--)(s=o[l])&&(n=(a?s(e,t,n):s(n))||n);return a&&n&&f(e,t,n),n};let i=class extends m{constructor(){super(...arguments);c(this,"demoCode",_)}cookieCalloutClosed(){console.log("cookie callout closed")}};i=b([v({components:{Callout:p,DemoSection:h}})],i);var k=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[o._m(0),t("div",{staticClass:"section"},[t("h2",[o._v("Default Callouts")]),t("p",[o._v(" There are 3 basic callout variations: success, warning, and info. These can be used whenever necessary but please limit to 1 callout per page and limit the text to 1 line. You can link to more info in a modal or another page if needed. ")]),t("DemoSection",{attrs:{title:"Default Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[t("Callout",{attrs:{variation:"success"}},[o._v(" Success callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])]),t("Callout",{attrs:{variation:"warning"}},[o._v(" Warning callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])]),t("Callout",{attrs:{variation:"info"}},[o._v(" Info callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[o._v("Strong Callouts")]),o._m(1),t("p",[o._v("There are 3 strong callout variations: success, warning, and info.")]),t("DemoSection",{attrs:{title:"Strong Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[t("Callout",{attrs:{variation:"success strong"}},[o._v(" Success callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])]),t("Callout",{attrs:{variation:"warning strong",icon:"warning"}},[o._v(" Warning callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])]),t("Callout",{attrs:{variation:"info strong"}},[o._v(" Info callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[o._v("Cookies Callout")]),t("p",[o._v(" Used on landing page to warn users about use of cookies on our site. ")]),t("DemoSection",{attrs:{title:"Cookies Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[t("Callout",{attrs:{variation:"cookies",icon:"info",closeable:!0,onClose:o.cookieCalloutClosed}},[o._v(" Cookies callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[o._v("Prime Callout")]),t("p",[o._v(" Prime Callout. ")]),t("DemoSection",{attrs:{title:"Prime Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[t("Callout",{attrs:{variation:"prime",closeable:!0,onClose:o.cookieCalloutClosed},on:{onClick:o.cookieCalloutClosed}},[o._v(" Themes, apps, website, merch and more. All included with Prime. ")])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[o._v("Callout Options")]),t("div",{staticClass:"section"},[t("h3",[o._v("Closable")]),o._m(2),t("DemoSection",{attrs:{title:"Closable Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[t("Callout",{attrs:{variation:"success",closeable:!0}},[o._v(" Success callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h3",[o._v("With Icon")]),o._m(3),t("DemoSection",{attrs:{title:"Icon Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[t("Callout",{attrs:{icon:"success",variation:"success",closeable:!0}},[o._v(" Success callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])]),t("Callout",{attrs:{icon:"warning",variation:"warning",closeable:!0}},[o._v(" Warning callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])]),t("Callout",{attrs:{icon:"info",variation:"info",closeable:!0}},[o._v(" Info callout. "),t("a",{attrs:{href:"#0"}},[o._v("Link")])]),t("Callout",{attrs:{variation:"info",closeable:!0}},[t("i",{staticClass:"icon-settings"}),o._v(" Settings have moved. Visit them "),t("a",{attrs:{href:"#0"}},[o._v("here")]),o._v(". ")])]},proxy:!0}])})],1)]),o._m(4)])},S=[function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"section"},[t("h1",[o._v("Callouts")]),t("p",[o._v(" You can use our callout component if you need to display a message to users. ")]),t("h4",[o._v("Rules")]),t("ul"),t("pre",[t("code",[o._v(`import { Callout } from 'streamlabs-beaker';

components: {
  Callout
}`)])])])},function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("p",[o._v(" These should be used "),t("strong",[o._v("very sparingly")]),o._v(". These should be used in cases when something is going to be completed removed or something could become broken/lost if action is not taken. ")])},function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("p",[o._v(" Use the "),t("strong",[o._v("closeable")]),o._v(" prop to give the callout the ability to close. ")])},function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("p",[o._v(" You can use the "),t("code",[o._v("icon")]),o._v(" prop to set it to 'success', 'warning', or 'info' for most common cases. If you need a different icon you can simply use it inline. ")])},function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"section"},[t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[o._v("Prop")]),t("th",[o._v("Type")]),t("th",[o._v("Default")]),t("th",[o._v("Description")])])]),t("tbody",[t("tr",[t("td",[o._v("variation")]),t("td",[o._v("string")]),t("td",[o._v("'success'")]),t("td",[o._v(" Use "),t("code",[o._v("'success'")]),o._v(", "),t("code",[o._v("'warning'")]),o._v(", "),t("code",[o._v("'info'")]),o._v(", "),t("code",[o._v("'cookies'")]),o._v(" or "),t("code",[o._v("'prime'")]),o._v(". Add "),t("code",[o._v("'strong'")]),o._v(" when necessary. ")])]),t("tr",[t("td",[o._v("closeable")]),t("td",[o._v("boolean")]),t("td",[o._v("false")]),t("td",[o._v("Added an icon with a function that closes the callout.")])]),t("tr",[t("td",[o._v("icon")]),t("td",[o._v("boolean")]),t("td",[o._v("true")]),t("td",[o._v(" Set to false if you don't want an icon before the callout content. ")])]),t("tr",[t("td",[o._v("onClose")]),t("td",[o._v("Function")]),t("td",[o._v("-")]),t("td",[o._v("on close callback")])])])])])}];const r={};var y=C(i,k,S,!1,w,null,null,null);function w(o){for(let e in r)this[e]=r[e]}const W=function(){return y.exports}();export{W as default};
//# sourceMappingURL=Callouts.b0228ca0.js.map

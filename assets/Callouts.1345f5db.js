var r=Object.defineProperty;var u=(t,o,e)=>o in t?r(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var c=(t,o,e)=>(u(t,typeof o!="symbol"?o+"":o,e),e);import{C as d,V as v,n as m}from"./index.4fb8a6cb.js";import{C as p}from"./Callout.ac9d99a3.js";import{D as _}from"./DemoSection.79ee11c0.js";import"./Badge.2c39dd0d.js";import"./Accordion.09c82396.js";const C=`<template>
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
`;var f=Object.defineProperty,h=Object.getOwnPropertyDescriptor,g=(t,o,e,a)=>{for(var n=a>1?void 0:a?h(o,e):o,s=t.length-1,l;s>=0;s--)(l=t[s])&&(n=(a?l(o,e,n):l(n))||n);return a&&n&&f(o,e,n),n};let i=class extends v{constructor(){super(...arguments);c(this,"demoCode",C)}cookieCalloutClosed(){console.log("cookie callout closed")}};i=g([d({components:{Callout:p,DemoSection:_}})],i);var b=function(){var o=this,e=o._self._c;return o._self._setupProxy,e("div",[o._m(0),e("div",{staticClass:"section"},[e("h2",[o._v("Default Callouts")]),e("p",[o._v(" There are 3 basic callout variations: success, warning, and info. These can be used whenever necessary but please limit to 1 callout per page and limit the text to 1 line. You can link to more info in a modal or another page if needed. ")]),e("DemoSection",{attrs:{title:"Default Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[e("Callout",{attrs:{variation:"success"}},[o._v(" Success callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])]),e("Callout",{attrs:{variation:"warning"}},[o._v(" Warning callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])]),e("Callout",{attrs:{variation:"info"}},[o._v(" Info callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[o._v("Strong Callouts")]),o._m(1),e("p",[o._v("There are 3 strong callout variations: success, warning, and info.")]),e("DemoSection",{attrs:{title:"Strong Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[e("Callout",{attrs:{variation:"success strong"}},[o._v(" Success callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])]),e("Callout",{attrs:{variation:"warning strong",icon:"warning"}},[o._v(" Warning callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])]),e("Callout",{attrs:{variation:"info strong"}},[o._v(" Info callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[o._v("Cookies Callout")]),e("p",[o._v(" Used on landing page to warn users about use of cookies on our site. ")]),e("DemoSection",{attrs:{title:"Cookies Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[e("Callout",{attrs:{variation:"cookies",icon:"info",closeable:!0,onClose:o.cookieCalloutClosed}},[o._v(" Cookies callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[o._v("Prime Callout")]),e("p",[o._v(" Prime Callout. ")]),e("DemoSection",{attrs:{title:"Prime Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[e("Callout",{attrs:{variation:"prime",closeable:!0,onClose:o.cookieCalloutClosed},on:{onClick:o.cookieCalloutClosed}},[o._v(" Themes, apps, website, merch and more. All included with Prime. ")])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[o._v("Callout Options")]),e("div",{staticClass:"section"},[e("h3",[o._v("Closable")]),o._m(2),e("DemoSection",{attrs:{title:"Closable Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[e("Callout",{attrs:{variation:"success",closeable:!0}},[o._v(" Success callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h3",[o._v("With Icon")]),o._m(3),e("DemoSection",{attrs:{title:"Icon Callouts",code:o.demoCode},scopedSlots:o._u([{key:"components",fn:function(){return[e("Callout",{attrs:{icon:"success",variation:"success",closeable:!0}},[o._v(" Success callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])]),e("Callout",{attrs:{icon:"warning",variation:"warning",closeable:!0}},[o._v(" Warning callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])]),e("Callout",{attrs:{icon:"info",variation:"info",closeable:!0}},[o._v(" Info callout. "),e("a",{attrs:{href:"#0"}},[o._v("Link")])]),e("Callout",{attrs:{variation:"info",closeable:!0}},[e("i",{staticClass:"icon-settings"}),o._v(" Settings have moved. Visit them "),e("a",{attrs:{href:"#0"}},[o._v("here")]),o._v(". ")])]},proxy:!0}])})],1)]),o._m(4)])},k=[function(){var t=this,o=t._self._c;return t._self._setupProxy,o("div",{staticClass:"section"},[o("h1",[t._v("Callouts")]),o("p",[t._v(" You can use our callout component if you need to display a message to users. ")]),o("h4",[t._v("Rules")]),o("ul"),o("pre",[o("code",[t._v(`import { Callout } from 'streamlabs-beaker';

components: {
  Callout
}`)])])])},function(){var t=this,o=t._self._c;return t._self._setupProxy,o("p",[t._v(" These should be used "),o("strong",[t._v("very sparingly")]),t._v(". These should be used in cases when something is going to be completed removed or something could become broken/lost if action is not taken. ")])},function(){var t=this,o=t._self._c;return t._self._setupProxy,o("p",[t._v(" Use the "),o("strong",[t._v("closeable")]),t._v(" prop to give the callout the ability to close. ")])},function(){var t=this,o=t._self._c;return t._self._setupProxy,o("p",[t._v(" You can use the "),o("code",[t._v("icon")]),t._v(" prop to set it to 'success', 'warning', or 'info' for most common cases. If you need a different icon you can simply use it inline. ")])},function(){var t=this,o=t._self._c;return t._self._setupProxy,o("div",{staticClass:"section"},[o("table",{staticClass:"docs-table"},[o("thead",[o("tr",[o("th",[t._v("Prop")]),o("th",[t._v("Type")]),o("th",[t._v("Default")]),o("th",[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[t._v("variation")]),o("td",[t._v("string")]),o("td",[t._v("'success'")]),o("td",[t._v(" Use "),o("code",[t._v("'success'")]),t._v(", "),o("code",[t._v("'warning'")]),t._v(", "),o("code",[t._v("'info'")]),t._v(", "),o("code",[t._v("'cookies'")]),t._v(" or "),o("code",[t._v("'prime'")]),t._v(". Add "),o("code",[t._v("'strong'")]),t._v(" when necessary. ")])]),o("tr",[o("td",[t._v("closeable")]),o("td",[t._v("boolean")]),o("td",[t._v("false")]),o("td",[t._v("Added an icon with a function that closes the callout.")])]),o("tr",[o("td",[t._v("icon")]),o("td",[t._v("boolean")]),o("td",[t._v("true")]),o("td",[t._v(" Set to false if you don't want an icon before the callout content. ")])]),o("tr",[o("td",[t._v("onClose")]),o("td",[t._v("Function")]),o("td",[t._v("-")]),o("td",[t._v("on close callback")])])])])])}],y=m(i,b,k,!1,null,"e9af6ae8",null,null);const T=y.exports;export{T as default};
//# sourceMappingURL=Callouts.1345f5db.js.map

var b=Object.defineProperty;var h=(t,e,n)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(h(t,typeof e!="symbol"?e+"":e,n),n);import{V as v,C as m,P as l,n as f}from"./index.17a864f5.js";import{B as y}from"./Button.5177b229.js";import{i as C}from"./vue-mq.es.e994b893.js";import{D as w}from"./DemoSection.a0f0b33e.js";import"./Accordion.a5b0018d.js";var g=Object.defineProperty,T=Object.getOwnPropertyDescriptor,d=(t,e,n,i)=>{for(var o=i>1?void 0:i?T(e,n):e,a=t.length-1,c;a>=0;a--)(c=t[a])&&(o=(i?c(e,n,o):c(o))||o);return i&&o&&g(e,n,o),o};v.use(C,{breakpoints:{sm:900,md:1250,lg:1/0},defaultBreakpoint:"sm"});let s=class extends v{constructor(){super(...arguments);r(this,"icon");r(this,"btnVariation");r(this,"btnTitle");r(this,"buttonHref");r(this,"buttonTo");r(this,"buttonTag");r(this,"$mq")}get contentRowMq(){return this.$mq==="sm"?"s-content-row-mq":""}get contentBoxMq(){return this.$mq==="sm"?"s-content-box-mq":""}get bannerIconMq(){return this.$mq==="sm"?"s-banner__icon-mq":""}get contentTitleMq(){return this.$mq==="sm"?"s-content__title-mq":""}get contentTextMq(){return this.$mq==="sm"?"s-content__text-mq":""}};d([l()],s.prototype,"icon",2);d([l({default:"default"})],s.prototype,"btnVariation",2);d([l({default:"Default"})],s.prototype,"btnTitle",2);d([l()],s.prototype,"buttonHref",2);d([l()],s.prototype,"buttonTo",2);d([l({default:"button"})],s.prototype,"buttonTag",2);s=d([m({components:{Button:y}})],s);var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-content-row",class:t.contentRowMq},[n("div",{staticClass:"s-content-box",class:t.contentBoxMq},[t.icon?n("i",{staticClass:"s-banner__icon",class:`icon-${t.icon}`}):t._e(),n("h2",{staticClass:"s-content__title",class:t.contentTitleMq},[t._t("title")],2),n("p",{staticClass:"s-content__text",class:t.contentTextMq},[t._t("text")],2)]),n("div",{staticClass:"s-button-container"},[n("Button",{attrs:{size:"fixed-width",variation:t.btnVariation,title:t.btnTitle,onClick:"buttonClick",href:t.buttonHref,to:t.buttonTo,tag:t.buttonTag}})],1)])},R=[];const u={};var D=f(s,x,R,!1,$,null,null,null);function $(t){for(let e in u)this[e]=u[e]}const q=function(){return D.exports}(),P=`<template>
  <div>
    <div class="section">
      <h1>Content Row</h1>
      <pre><code>import { ContentRow } from 'streamlabs-beaker';

components: {
  ContentRow
}</code></pre>
    </div>

    <div class="section">
      <h2>Content Row</h2>
      <p>Used for content row.</p>

      <DemoSection title="Content Row" :code="demoCode">
        <template #components>
          <ContentRow
            :icon="'desktop'"
            :btnVariation="'default'"
            :btnTitle="'Default'"
          >
            <span slot="title">Tiltify</span>
            <span slot="text">
              Link your account and visit Alert Box to configure your Tiltify
              Events.
            </span>
          </ContentRow>
        </template>
      </DemoSection>

      <ContentRow
        :icon="'education'"
        :btnVariation="'action'"
        :btnTitle="'Action'"
      >
        <template slot="title"
          >Tiltify</template
        >
        <template slot="text"
          >Link your account and visit Alert Box to configure your Tiltify
          Events.</template
        >
      </ContentRow>
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
          <td>icon</td>
          <td>string</td>
          <td>null</td>
          <td>icon to display. Options are listed in Icons page.</td>
        </tr>

        <tr>
          <td>btnVariation</td>
          <td>string</td>
          <td>default</td>
          <td>
            The variation style of a button. Primary options are
            <code>default</code>, <code>action</code> and <code>warning</code>.
            Other options are <code>subscribe</code>, <code>paypal</code>,
            <code>download</code> and <code>navigation</code>. Platform options
            are <code>facebook</code>, <code>mixer</code>, <code>twitch</code>,
            <code>yt</code>, <code>periscope</code> and <code>picarto</code>.
          </td>
        </tr>

        <tr>
          <td>btnTitle</td>
          <td>string</td>
          <td>null</td>
          <td>button title to display</td>
        </tr>

        <tr>
          <td>buttonHref</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used if the the
            <code>type</code> is an <code>a</code> element (links).
          </td>
        </tr>
        <tr>
          <td>buttonTo</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used if the the
            <code>type</code> is a <code>router-link</code>. Define the path.
          </td>
        </tr>
        <tr>
          <td>buttonTag</td>
          <td>String</td>
          <td>button</td>
          <td>
            What type of element the component is. Options are
            <code>button</code>, <code>a</code>,
            <code>router-link</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContentRow from "./../components/ContentRow.vue";
import DemoSection from "./../components/DemoSection.vue";
import LayoutsCode from "./Layouts.vue?raw";

@Component({
  components: {
    ContentRow,
    DemoSection
  }
})
export default class Layouts extends Vue {
  demoCode = LayoutsCode;
}
<\/script>
`;var S=Object.defineProperty,O=Object.getOwnPropertyDescriptor,V=(t,e,n,i)=>{for(var o=i>1?void 0:i?O(e,n):e,a=t.length-1,c;a>=0;a--)(c=t[a])&&(o=(i?c(e,n,o):c(o))||o);return i&&o&&S(e,n,o),o};let _=class extends v{constructor(){super(...arguments);r(this,"demoCode",P)}};_=V([m({components:{ContentRow:q,DemoSection:w}})],_);var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"section"},[n("h2",[t._v("Content Row")]),n("p",[t._v("Used for content row.")]),n("DemoSection",{attrs:{title:"Content Row",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("ContentRow",{attrs:{icon:"desktop",btnVariation:"default",btnTitle:"Default"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Tiltify")]),n("span",{attrs:{slot:"text"},slot:"text"},[t._v(" Link your account and visit Alert Box to configure your Tiltify Events. ")])])]},proxy:!0}])}),n("ContentRow",{attrs:{icon:"education",btnVariation:"action",btnTitle:"Action"}},[n("template",{slot:"title"},[t._v("Tiltify")]),n("template",{slot:"text"},[t._v("Link your account and visit Alert Box to configure your Tiltify Events.")])],2)],1),t._m(1)])},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h1",[t._v("Content Row")]),n("pre",[n("code",[t._v(`import { ContentRow } from 'streamlabs-beaker';

components: {
  ContentRow
}`)])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("icon")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("icon to display. Options are listed in Icons page.")])]),n("tr",[n("td",[t._v("btnVariation")]),n("td",[t._v("string")]),n("td",[t._v("default")]),n("td",[t._v(" The variation style of a button. Primary options are "),n("code",[t._v("default")]),t._v(", "),n("code",[t._v("action")]),t._v(" and "),n("code",[t._v("warning")]),t._v(". Other options are "),n("code",[t._v("subscribe")]),t._v(", "),n("code",[t._v("paypal")]),t._v(", "),n("code",[t._v("download")]),t._v(" and "),n("code",[t._v("navigation")]),t._v(". Platform options are "),n("code",[t._v("facebook")]),t._v(", "),n("code",[t._v("mixer")]),t._v(", "),n("code",[t._v("twitch")]),t._v(", "),n("code",[t._v("yt")]),t._v(", "),n("code",[t._v("periscope")]),t._v(" and "),n("code",[t._v("picarto")]),t._v(". ")])]),n("tr",[n("td",[t._v("btnTitle")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("button title to display")])]),n("tr",[n("td",[t._v("buttonHref")]),n("td",[t._v("String")]),n("td",[t._v("null")]),n("td",[t._v(" Used if the the "),n("code",[t._v("type")]),t._v(" is an "),n("code",[t._v("a")]),t._v(" element (links). ")])]),n("tr",[n("td",[t._v("buttonTo")]),n("td",[t._v("String")]),n("td",[t._v("null")]),n("td",[t._v(" Used if the the "),n("code",[t._v("type")]),t._v(" is a "),n("code",[t._v("router-link")]),t._v(". Define the path. ")])]),n("tr",[n("td",[t._v("buttonTag")]),n("td",[t._v("String")]),n("td",[t._v("button")]),n("td",[t._v(" What type of element the component is. Options are "),n("code",[t._v("button")]),t._v(", "),n("code",[t._v("a")]),t._v(", "),n("code",[t._v("router-link")])])])])])}];const p={};var M=f(_,k,L,!1,B,null,null,null);function B(t){for(let e in p)this[e]=p[e]}const z=function(){return M.exports}();export{z as default};
//# sourceMappingURL=Layouts.d05a31a2.js.map

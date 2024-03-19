var m=Object.defineProperty;var f=(n,t,e)=>t in n?m(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var s=(n,t,e)=>(f(n,typeof t!="symbol"?t+"":t,e),e);import{V as p,C as v,P as l,n as u}from"./index.4fb8a6cb.js";import{B as b}from"./Button.b26dacc2.js";import{i as y}from"./vue-mq.es.e994b893.js";import{D as h}from"./DemoSection.79ee11c0.js";import"./Accordion.09c82396.js";var C=Object.defineProperty,w=Object.getOwnPropertyDescriptor,c=(n,t,e,i)=>{for(var o=i>1?void 0:i?w(t,e):t,a=n.length-1,d;a>=0;a--)(d=n[a])&&(o=(i?d(t,e,o):d(o))||o);return i&&o&&C(t,e,o),o};p.use(y,{breakpoints:{sm:900,md:1250,lg:1/0},defaultBreakpoint:"sm"});let r=class extends p{constructor(){super(...arguments);s(this,"icon");s(this,"btnVariation");s(this,"btnTitle");s(this,"buttonHref");s(this,"buttonTo");s(this,"buttonTag");s(this,"$mq")}get contentRowMq(){return this.$mq==="sm"?"s-content-row-mq":""}get contentBoxMq(){return this.$mq==="sm"?"s-content-box-mq":""}get bannerIconMq(){return this.$mq==="sm"?"s-banner__icon-mq":""}get contentTitleMq(){return this.$mq==="sm"?"s-content__title-mq":""}get contentTextMq(){return this.$mq==="sm"?"s-content__text-mq":""}};c([l()],r.prototype,"icon",2);c([l({default:"default"})],r.prototype,"btnVariation",2);c([l({default:"Default"})],r.prototype,"btnTitle",2);c([l()],r.prototype,"buttonHref",2);c([l()],r.prototype,"buttonTo",2);c([l({default:"button"})],r.prototype,"buttonTag",2);r=c([v({components:{Button:b}})],r);var g=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"s-content-row",class:t.contentRowMq},[e("div",{staticClass:"s-content-box",class:t.contentBoxMq},[t.icon?e("i",{staticClass:"s-banner__icon",class:`icon-${t.icon}`}):t._e(),e("h2",{staticClass:"s-content__title",class:t.contentTitleMq},[t._t("title")],2),e("p",{staticClass:"s-content__text",class:t.contentTextMq},[t._t("text")],2)]),e("div",{staticClass:"s-button-container"},[e("Button",{attrs:{size:"fixed-width",variation:t.btnVariation,title:t.btnTitle,onClick:"buttonClick",href:t.buttonHref,to:t.buttonTo,tag:t.buttonTag}})],1)])},x=[],T=u(r,g,x,!1,null,null,null,null);const R=T.exports,D=`<template>
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
`;var q=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=(n,t,e,i)=>{for(var o=i>1?void 0:i?P(t,e):t,a=n.length-1,d;a>=0;a--)(d=n[a])&&(o=(i?d(t,e,o):d(o))||o);return i&&o&&q(t,e,o),o};let _=class extends p{constructor(){super(...arguments);s(this,"demoCode",D)}};_=$([v({components:{ContentRow:R,DemoSection:h}})],_);var O=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",[t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Content Row")]),e("p",[t._v("Used for content row.")]),e("DemoSection",{attrs:{title:"Content Row",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("ContentRow",{attrs:{icon:"desktop",btnVariation:"default",btnTitle:"Default"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Tiltify")]),e("span",{attrs:{slot:"text"},slot:"text"},[t._v(" Link your account and visit Alert Box to configure your Tiltify Events. ")])])]},proxy:!0}])}),e("ContentRow",{attrs:{icon:"education",btnVariation:"action",btnTitle:"Action"}},[e("template",{slot:"title"},[t._v("Tiltify")]),e("template",{slot:"text"},[t._v("Link your account and visit Alert Box to configure your Tiltify Events.")])],2)],1),t._m(1)])},S=[function(){var n=this,t=n._self._c;return n._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[n._v("Content Row")]),t("pre",[t("code",[n._v(`import { ContentRow } from 'streamlabs-beaker';

components: {
  ContentRow
}`)])])])},function(){var n=this,t=n._self._c;return n._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Props")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("icon")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v("icon to display. Options are listed in Icons page.")])]),t("tr",[t("td",[n._v("btnVariation")]),t("td",[n._v("string")]),t("td",[n._v("default")]),t("td",[n._v(" The variation style of a button. Primary options are "),t("code",[n._v("default")]),n._v(", "),t("code",[n._v("action")]),n._v(" and "),t("code",[n._v("warning")]),n._v(". Other options are "),t("code",[n._v("subscribe")]),n._v(", "),t("code",[n._v("paypal")]),n._v(", "),t("code",[n._v("download")]),n._v(" and "),t("code",[n._v("navigation")]),n._v(". Platform options are "),t("code",[n._v("facebook")]),n._v(", "),t("code",[n._v("mixer")]),n._v(", "),t("code",[n._v("twitch")]),n._v(", "),t("code",[n._v("yt")]),n._v(", "),t("code",[n._v("periscope")]),n._v(" and "),t("code",[n._v("picarto")]),n._v(". ")])]),t("tr",[t("td",[n._v("btnTitle")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v("button title to display")])]),t("tr",[t("td",[n._v("buttonHref")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" Used if the the "),t("code",[n._v("type")]),n._v(" is an "),t("code",[n._v("a")]),n._v(" element (links). ")])]),t("tr",[t("td",[n._v("buttonTo")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" Used if the the "),t("code",[n._v("type")]),n._v(" is a "),t("code",[n._v("router-link")]),n._v(". Define the path. ")])]),t("tr",[t("td",[n._v("buttonTag")]),t("td",[n._v("String")]),t("td",[n._v("button")]),t("td",[n._v(" What type of element the component is. Options are "),t("code",[n._v("button")]),n._v(", "),t("code",[n._v("a")]),n._v(", "),t("code",[n._v("router-link")])])])])])}],V=u(_,O,S,!1,null,null,null,null);const H=V.exports;export{H as default};
//# sourceMappingURL=Layouts.712eda7c.js.map

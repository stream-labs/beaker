var f=Object.defineProperty;var u=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var i=(e,t,n)=>(u(e,typeof t!="symbol"?t+"":t,n),n);import{C as m,P as _,V as p,n as v}from"./index.4fb8a6cb.js";import{D as h}from"./DemoSection.79ee11c0.js";import"./Accordion.09c82396.js";const g=`<template>
  <div>
    <div class="section">
      <h1>Extras</h1>
      <p>
        Premade designs you can slot into modals, marketing sections, etc to
        make your lives easier.
      </p>
    </div>

    <div class="section">
      <div class="section">
        <h2>Fake Alert</h2>
        <pre><code>import { FakeAlert } from 'streamlabs-beaker';

  components: {
    FakeAlert
  }</code></pre>
      </div>

      <DemoSection title="Fake Alert" :code="demoCode">
        <template #components>
          <FakeAlert username="SalmanSux19" />
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
          <td>alertText</td>
          <td>string</td>
          <td>'galazy83 donated $50.00'</td>
          <td>First line of text in the alert.</td>
        </tr>
        <tr>
          <td>alertMessage</td>
          <td>string</td>
          <td>'Thanks for the stream. Go CivRyan!'</td>
          <td>Second line of text in the alert.</td>
        </tr>
        <tr>
          <td>alertImage</td>
          <td>string</td>
          <td>'https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif'</td>
          <td>Alert graphic.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import ExtrasCode from "./Extras.vue?raw";
import FakeAlert from "./../components/FakeAlert.vue";

@Component({
  components: {
    DemoSection,
    FakeAlert
  }
})
export default class Extras extends Vue {
  demoCode = ExtrasCode;
}
<\/script>
`;var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=(e,t,n,s)=>{for(var r=s>1?void 0:s?y(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(r=(s?o(t,n,r):o(r))||r);return s&&r&&x(t,n,r),r};let l=class extends p{constructor(){super(...arguments);i(this,"alertText");i(this,"alertMessage");i(this,"alertImage")}};d([_({default:"galazy83 donated $50.00"})],l.prototype,"alertText",2);d([_({default:"Thanks for the stream. Go CivRyan!"})],l.prototype,"alertMessage",2);d([_({default:"https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif"})],l.prototype,"alertImage",2);l=d([m({})],l);var C=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",{staticClass:"s-fake-alert"},[n("p",{staticClass:"s-fake-alert__text"},[t._v(t._s(t.alertText))]),n("div",{staticClass:"s-fake-alert__message"},[t._v(" "+t._s(t.alertMessage)+" "),n("span",{staticClass:"s-fake-alert__icon"},[n("img",{attrs:{src:t.alertImage}})])])])},P=[],k=v(l,C,P,!1,null,null,null,null);const F=k.exports;var b=Object.defineProperty,A=Object.getOwnPropertyDescriptor,D=(e,t,n,s)=>{for(var r=s>1?void 0:s?A(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(r=(s?o(t,n,r):o(r))||r);return s&&r&&b(t,n,r),r};let c=class extends p{constructor(){super(...arguments);i(this,"demoCode",g)}};c=D([m({components:{DemoSection:h,FakeAlert:F}})],c);var S=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",[t._m(0),n("div",{staticClass:"section"},[t._m(1),n("DemoSection",{attrs:{title:"Fake Alert",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("FakeAlert",{attrs:{username:"SalmanSux19"}})]},proxy:!0}])})],1),t._m(2)])},$=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[e._v("Extras")]),t("p",[e._v(" Premade designs you can slot into modals, marketing sections, etc to make your lives easier. ")])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"section"},[t("h2",[e._v("Fake Alert")]),t("pre",[t("code",[e._v(`import { FakeAlert } from 'streamlabs-beaker';

components: {
  FakeAlert
}`)])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("alertText")]),t("td",[e._v("string")]),t("td",[e._v("'galazy83 donated $50.00'")]),t("td",[e._v("First line of text in the alert.")])]),t("tr",[t("td",[e._v("alertMessage")]),t("td",[e._v("string")]),t("td",[e._v("'Thanks for the stream. Go CivRyan!'")]),t("td",[e._v("Second line of text in the alert.")])]),t("tr",[t("td",[e._v("alertImage")]),t("td",[e._v("string")]),t("td",[e._v("'https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif'")]),t("td",[e._v("Alert graphic.")])])])])}],T=v(c,S,$,!1,null,null,null,null);const w=T.exports;export{w as default};
//# sourceMappingURL=Extras.18df4ef4.js.map

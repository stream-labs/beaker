var h=Object.defineProperty;var g=(t,n,e)=>n in t?h(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var i=(t,n,e)=>(g(t,typeof n!="symbol"?n+"":n,e),e);import{C as p,P as _,V as f,n as u}from"./index-e8bb31bb.js";import{D as x}from"./DemoSection-b2dfe451.js";import"./Accordion-79d22a9d.js";const y=`<template>
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
`;var C=Object.defineProperty,k=Object.getOwnPropertyDescriptor,c=(t,n,e,a)=>{for(var r=a>1?void 0:a?k(n,e):n,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(a?o(n,e,r):o(r))||r);return a&&r&&C(n,e,r),r};let l=class extends f{constructor(){super(...arguments);i(this,"alertText");i(this,"alertMessage");i(this,"alertImage")}};c([_({default:"galazy83 donated $50.00"})],l.prototype,"alertText",2);c([_({default:"Thanks for the stream. Go CivRyan!"})],l.prototype,"alertMessage",2);c([_({default:"https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif"})],l.prototype,"alertImage",2);l=c([p({})],l);var F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"s-fake-alert"},[e("p",{staticClass:"s-fake-alert__text"},[t._v(t._s(t.alertText))]),e("div",{staticClass:"s-fake-alert__message"},[t._v(" "+t._s(t.alertMessage)+" "),e("span",{staticClass:"s-fake-alert__icon"},[e("img",{attrs:{src:t.alertImage}})])])])},b=[];const m={};var A=u(l,F,b,!1,P,null,null,null);function P(t){for(let n in m)this[n]=m[n]}const $=function(){return A.exports}();var D=Object.defineProperty,S=Object.getOwnPropertyDescriptor,E=(t,n,e,a)=>{for(var r=a>1?void 0:a?S(n,e):n,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(a?o(n,e,r):o(r))||r);return a&&r&&D(n,e,r),r};let d=class extends f{constructor(){super(...arguments);i(this,"demoCode",y)}};d=E([p({components:{DemoSection:x,FakeAlert:$}})],d);var T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),e("div",{staticClass:"section"},[t._m(1),e("DemoSection",{attrs:{title:"Fake Alert",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("FakeAlert",{attrs:{username:"SalmanSux19"}})]},proxy:!0}])})],1),t._m(2)])},I=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section"},[e("h1",[t._v("Extras")]),e("p",[t._v(" Premade designs you can slot into modals, marketing sections, etc to make your lives easier. ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section"},[e("h2",[t._v("Fake Alert")]),e("pre",[e("code",[t._v(`import { FakeAlert } from 'streamlabs-beaker';

components: {
  FakeAlert
}`)])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("alertText")]),e("td",[t._v("string")]),e("td",[t._v("'galazy83 donated $50.00'")]),e("td",[t._v("First line of text in the alert.")])]),e("tr",[e("td",[t._v("alertMessage")]),e("td",[t._v("string")]),e("td",[t._v("'Thanks for the stream. Go CivRyan!'")]),e("td",[t._v("Second line of text in the alert.")])]),e("tr",[e("td",[t._v("alertImage")]),e("td",[t._v("string")]),e("td",[t._v("'https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif'")]),e("td",[t._v("Alert graphic.")])])])])}];const v={};var O=u(d,T,I,!1,z,null,null,null);function z(t){for(let n in v)this[n]=v[n]}const q=function(){return O.exports}();export{q as default};
//# sourceMappingURL=Extras-849a0b80.js.map

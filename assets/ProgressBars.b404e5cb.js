var v=Object.defineProperty;var u=(r,e,s)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var p=(r,e,s)=>(u(r,typeof e!="symbol"?e+"":e,s),s);import{C as _,P as f,V as m,n as d}from"./index.4fb8a6cb.js";import{D as g}from"./DemoSection.79ee11c0.js";import"./Accordion.09c82396.js";var P=Object.defineProperty,h=Object.getOwnPropertyDescriptor,i=(r,e,s,o)=>{for(var t=o>1?void 0:o?h(e,s):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(t=(o?a(e,s,t):a(t))||t);return o&&t&&P(e,s,t),t};let l=class extends m{constructor(){super(...arguments);p(this,"progressComplete")}get getProgress(){return"width:"+this.progressComplete+"%"}};i([f()],l.prototype,"progressComplete",2);l=i([_({})],l);var C=function(){var e=this,s=e._self._c;return e._self._setupProxy,s("div",{staticClass:"s-progress"},[s("div",{staticClass:"s-progress-bar",style:e.getProgress})])},B=[],b=d(l,C,B,!1,null,null,null,null);const D=b.exports,y=`<template>
  <div>
    <div class="section">
      <h1>Progress Bars</h1>

      <pre><code>import { ProgressBar } from "streamlabs-beaker"

components: {
  ProgressBar
}</code></pre>

      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <ProgressBar :progressComplete="50" />
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
          <td>progressComplete</td>
          <td>Number</td>
          <td>null</td>
          <td>Progress complete in percentage</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProgressBar from "./../components/ProgressBar.vue";
import ProgressBarsCode from "./ProgressBars.vue?raw";
import DemoSection from "./../components/DemoSection.vue";
@Component({
  components: {
    DemoSection,
    ProgressBar
  }
})
export default class ProgressBars extends Vue {
  demoCode = ProgressBarsCode;
  value = 50;
}
<\/script>
`;var x=Object.defineProperty,O=Object.getOwnPropertyDescriptor,S=(r,e,s,o)=>{for(var t=o>1?void 0:o?O(e,s):e,n=r.length-1,a;n>=0;n--)(a=r[n])&&(t=(o?a(e,s,t):a(t))||t);return o&&t&&x(e,s,t),t};let c=class extends m{constructor(){super(...arguments);p(this,"demoCode",y);p(this,"value",50)}};c=S([_({components:{DemoSection:g,ProgressBar:D}})],c);var $=function(){var e=this,s=e._self._c;return e._self._setupProxy,s("div",[s("div",{staticClass:"section"},[s("h1",[e._v("Progress Bars")]),e._m(0),s("DemoSection",{attrs:{title:"Default",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[s("ProgressBar",{attrs:{progressComplete:50}})]},proxy:!0}])})],1),e._m(1)])},w=[function(){var r=this,e=r._self._c;return r._self._setupProxy,e("pre",[e("code",[r._v(`import { ProgressBar } from "streamlabs-beaker"

components: {
  ProgressBar
}`)])])},function(){var r=this,e=r._self._c;return r._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[r._v("Props")]),e("th",[r._v("Type")]),e("th",[r._v("Default")]),e("th",[r._v("Description")])])]),e("tbody",[e("tr",[e("td",[r._v("progressComplete")]),e("td",[r._v("Number")]),e("td",[r._v("null")]),e("td",[r._v("Progress complete in percentage")])])])])}],j=d(c,$,w,!1,null,null,null,null);const T=j.exports;export{T as default};
//# sourceMappingURL=ProgressBars.b404e5cb.js.map

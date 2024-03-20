var g=Object.defineProperty;var f=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var l=(e,t,r)=>(f(e,typeof t!="symbol"?t+"":t,r),r);import{C as i,P,V as v,n as d}from"./index-e8bb31bb.js";import{D as h}from"./DemoSection-b2dfe451.js";import"./Accordion-79d22a9d.js";var C=Object.defineProperty,B=Object.getOwnPropertyDescriptor,u=(e,t,r,o)=>{for(var s=o>1?void 0:o?B(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&C(t,r,s),s};let c=class extends v{constructor(){super(...arguments);l(this,"progressComplete")}get getProgress(){return"width:"+this.progressComplete+"%"}};u([P()],c.prototype,"progressComplete",2);c=u([i({})],c);var b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"s-progress"},[r("div",{staticClass:"s-progress-bar",style:e.getProgress})])},D=[];const m={};var y=d(c,b,D,!1,$,null,null,null);function $(e){for(let t in m)this[t]=m[t]}const x=function(){return y.exports}(),S=`<template>
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
`;var O=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=(e,t,r,o)=>{for(var s=o>1?void 0:o?j(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&O(t,r,s),s};let p=class extends v{constructor(){super(...arguments);l(this,"demoCode",S);l(this,"value",50)}};p=w([i({components:{DemoSection:h,ProgressBar:x}})],p);var E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"section"},[r("h1",[e._v("Progress Bars")]),e._m(0),r("DemoSection",{attrs:{title:"Default",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[r("ProgressBar",{attrs:{progressComplete:50}})]},proxy:!0}])})],1),e._m(1)])},V=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v(`import { ProgressBar } from "streamlabs-beaker"

components: {
  ProgressBar
}`)])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"docs-table"},[r("thead",[r("tr",[r("th",[e._v("Props")]),r("th",[e._v("Type")]),r("th",[e._v("Default")]),r("th",[e._v("Description")])])]),r("tbody",[r("tr",[r("td",[e._v("progressComplete")]),r("td",[e._v("Number")]),r("td",[e._v("null")]),r("td",[e._v("Progress complete in percentage")])])])])}];const _={};var F=d(p,E,V,!1,M,null,null,null);function M(e){for(let t in _)this[t]=_[t]}const G=function(){return F.exports}();export{G as default};
//# sourceMappingURL=ProgressBars-464ac771.js.map

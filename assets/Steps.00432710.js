var v=Object.defineProperty;var f=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var r=(e,t,n)=>(f(e,typeof t!="symbol"?t+"":t,n),n);import{C as _,P as a,V as m,n as u}from"./index.4fb8a6cb.js";import{D as h}from"./DemoSection.79ee11c0.js";import{F as C}from"./FormGroup.79b6121d.js";import{B as S}from"./Badge.2c39dd0d.js";import"./Accordion.09c82396.js";var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(e,t,n,s)=>{for(var o=s>1?void 0:s?b(t,n):t,d=e.length-1,l;d>=0;d--)(l=e[d])&&(o=(s?l(t,n,o):l(o))||o);return s&&o&&g(t,n,o),o};let i=class extends m{constructor(){super(...arguments);r(this,"title");r(this,"icon");r(this,"isCompleted");r(this,"completedText");r(this,"hasCheckmark");r(this,"hasPrime")}};p([a(String)],i.prototype,"title",2);p([a(String)],i.prototype,"icon",2);p([a({default:!1})],i.prototype,"isCompleted",2);p([a(String)],i.prototype,"completedText",2);p([a({default:!1})],i.prototype,"hasCheckmark",2);p([a({default:!1})],i.prototype,"hasPrime",2);i=p([_({components:{Badge:S}})],i);var y=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",{staticClass:"s-step",class:{"s-step--completed":t.isCompleted,checked:t.hasCheckmark}},[n("div",{staticClass:"s-step__title"},[t.icon?n("span",{staticClass:"s-step__icon",class:t.icon}):t._e(),t.hasCheckmark?n("span",{staticClass:"s-step__icon icon-check-mark"}):t._e(),n("p",{staticClass:"s-step__title-text"},[t._v(t._s(t.title))]),t.hasPrime?n("Badge",{staticClass:"s-step__badge",attrs:{variant:"prime-alt","align-left":!0}}):t._e()],1),t.isCompleted?t._e():t._t("default"),t.isCompleted?n("div",[t._v(t._s(t.completedText))]):t._e()],2)},P=[],x=u(i,y,P,!1,null,"c0d0cd2a",null,null);const w=x.exports,k=`<template>
  <div>
    <div class="section">
      <h1>Step</h1>
      <p>step component</p>

      <pre><code>import { Step } from 'streamlabs-beaker';

components: {
  Step
}</code></pre>
    </div>

    <div class="section">
      <div class="row">
        <DemoSection title="Default" :code="demoCode">
          <template #components>
            <FormGroup>
              <Step slot="input" title="Enable Pro">
                <div class="info">
                  <p>+20 CCV</p>
                  <i class="icon-information"></i>
                </div>
              </Step>

              <Step
                slot="input"
                title="Enable Pro"
                :isCompleted="true"
                :hasCheckmark="true"
                completedText="Complete"
              >
                <div class="info">
                  <p>+20 CCV</p>
                  <i class="icon-information"></i>
                </div>
              </Step>

              <Step
                slot="input"
                icon="icon-donation-settings"
                title="Tip"
                :hasPrime="true"
                >0/1</Step
              >

              <Step
                slot="input"
                icon="icon-donation-settings"
                title="Tip"
                :isCompleted="true"
                completedText="1/1"
                >0/1</Step
              >
            </FormGroup>
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
            <td>title</td>
            <td>String</td>
            <td>null</td>
            <td>title to display</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>String</td>
            <td>null</td>
            <td>icon to display</td>
          </tr>
          <tr>
            <td>isCompleted</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              background would be @dark-4, color would be @dark-5 when it is
              true
            </td>
          </tr>
          <tr>
            <td>completedText</td>
            <td>String</td>
            <td>null</td>
            <td>
              It shows instead of slot when isCompleted is true
            </td>
          </tr>
          <tr>
            <td>isChecked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              add check mark icon and line through for title when it is true
            </td>
          </tr>
          <tr>
            <td>hasPrime</td>
            <td>Boolean</td>
            <td>false</td>
            <td>It shows prime alt badge when it is true</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import FormGroup from "./../components/FormGroup.vue";
import Step from "./../components/Step.vue";
import StepsCode from "./Steps.vue?raw";

@Component({
  components: {
    DemoSection,
    FormGroup,
    Step
  }
})
export default class Steps extends Vue {
  demoCode = StepsCode;
}
<\/script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    .margin(0);
    margin-right: 15px;
    color: @dark-5;
    background: @light-blue;
    .weight(@medium);
    .radius();
    .padding();
  }
}
</style>
`;var D=Object.defineProperty,T=Object.getOwnPropertyDescriptor,F=(e,t,n,s)=>{for(var o=s>1?void 0:s?T(t,n):t,d=e.length-1,l;d>=0;d--)(l=e[d])&&(o=(s?l(t,n,o):l(o))||o);return s&&o&&D(t,n,o),o};let c=class extends m{constructor(){super(...arguments);r(this,"demoCode",k)}};c=F([_({components:{DemoSection:h,FormGroup:C,Step:w}})],c);var B=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",[t._m(0),n("div",{staticClass:"section"},[n("div",{staticClass:"row"},[n("DemoSection",{attrs:{title:"Default",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("FormGroup",[n("Step",{attrs:{slot:"input",title:"Enable Pro"},slot:"input"},[n("div",{staticClass:"info"},[n("p",[t._v("+20 CCV")]),n("i",{staticClass:"icon-information"})])]),n("Step",{attrs:{slot:"input",title:"Enable Pro",isCompleted:!0,hasCheckmark:!0,completedText:"Complete"},slot:"input"},[n("div",{staticClass:"info"},[n("p",[t._v("+20 CCV")]),n("i",{staticClass:"icon-information"})])]),n("Step",{attrs:{slot:"input",icon:"icon-donation-settings",title:"Tip",hasPrime:!0},slot:"input"},[t._v("0/1")]),n("Step",{attrs:{slot:"input",icon:"icon-donation-settings",title:"Tip",isCompleted:!0,completedText:"1/1"},slot:"input"},[t._v("0/1")])],1)]},proxy:!0}])})],1),t._m(1)])])},O=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[e._v("Step")]),t("p",[e._v("step component")]),t("pre",[t("code",[e._v(`import { Step } from 'streamlabs-beaker';

components: {
  Step
}`)])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Props")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("title")]),t("td",[e._v("String")]),t("td",[e._v("null")]),t("td",[e._v("title to display")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("String")]),t("td",[e._v("null")]),t("td",[e._v("icon to display")])]),t("tr",[t("td",[e._v("isCompleted")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v(" background would be @dark-4, color would be @dark-5 when it is true ")])]),t("tr",[t("td",[e._v("completedText")]),t("td",[e._v("String")]),t("td",[e._v("null")]),t("td",[e._v(" It shows instead of slot when isCompleted is true ")])]),t("tr",[t("td",[e._v("isChecked")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v(" add check mark icon and line through for title when it is true ")])]),t("tr",[t("td",[e._v("hasPrime")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("It shows prime alt badge when it is true")])])])])}],V=u(c,B,O,!1,null,"6a93d89c",null,null);const z=V.exports;export{z as default};
//# sourceMappingURL=Steps.00432710.js.map

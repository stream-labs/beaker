var h=Object.defineProperty;var C=(t,n,e)=>n in t?h(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var r=(t,n,e)=>(C(t,typeof n!="symbol"?n+"":n,e),e);import{C as u,P as p,V as v,n as f}from"./index-e8bb31bb.js";import{D as S}from"./DemoSection-b2dfe451.js";import{F as g}from"./FormGroup-8689511b.js";import{B as b}from"./Badge-717b81bb.js";import"./Accordion-79d22a9d.js";var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,d=(t,n,e,s)=>{for(var o=s>1?void 0:s?w(n,e):n,a=t.length-1,l;a>=0;a--)(l=t[a])&&(o=(s?l(n,e,o):l(o))||o);return s&&o&&y(n,e,o),o};let i=class extends v{constructor(){super(...arguments);r(this,"title");r(this,"icon");r(this,"isCompleted");r(this,"completedText");r(this,"hasCheckmark");r(this,"hasPrime")}};d([p(String)],i.prototype,"title",2);d([p(String)],i.prototype,"icon",2);d([p({default:!1})],i.prototype,"isCompleted",2);d([p(String)],i.prototype,"completedText",2);d([p({default:!1})],i.prototype,"hasCheckmark",2);d([p({default:!1})],i.prototype,"hasPrime",2);i=d([u({components:{Badge:b}})],i);var x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"s-step",class:{"s-step--completed":t.isCompleted,checked:t.hasCheckmark}},[e("div",{staticClass:"s-step__title"},[t.icon?e("span",{staticClass:"s-step__icon",class:t.icon}):t._e(),t.hasCheckmark?e("span",{staticClass:"s-step__icon icon-check-mark"}):t._e(),e("p",{staticClass:"s-step__title-text"},[t._v(t._s(t.title))]),t.hasPrime?e("Badge",{staticClass:"s-step__badge",attrs:{variant:"prime-alt","align-left":!0}}):t._e()],1),t.isCompleted?t._e():t._t("default"),t.isCompleted?e("div",[t._v(t._s(t.completedText))]):t._e()],2)},P=[];const m={};var k=f(i,x,P,!1,D,"ae29c310",null,null);function D(t){for(let n in m)this[n]=m[n]}const T=function(){return k.exports}(),$=`<template>
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
`;var F=Object.defineProperty,B=Object.getOwnPropertyDescriptor,E=(t,n,e,s)=>{for(var o=s>1?void 0:s?B(n,e):n,a=t.length-1,l;a>=0;a--)(l=t[a])&&(o=(s?l(n,e,o):l(o))||o);return s&&o&&F(n,e,o),o};let c=class extends v{constructor(){super(...arguments);r(this,"demoCode",$)}};c=E([u({components:{DemoSection:S,FormGroup:g,Step:T}})],c);var O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),e("div",{staticClass:"section"},[e("div",{staticClass:"row"},[e("DemoSection",{attrs:{title:"Default",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("FormGroup",[e("Step",{attrs:{slot:"input",title:"Enable Pro"},slot:"input"},[e("div",{staticClass:"info"},[e("p",[t._v("+20 CCV")]),e("i",{staticClass:"icon-information"})])]),e("Step",{attrs:{slot:"input",title:"Enable Pro",isCompleted:!0,hasCheckmark:!0,completedText:"Complete"},slot:"input"},[e("div",{staticClass:"info"},[e("p",[t._v("+20 CCV")]),e("i",{staticClass:"icon-information"})])]),e("Step",{attrs:{slot:"input",icon:"icon-donation-settings",title:"Tip",hasPrime:!0},slot:"input"},[t._v("0/1")]),e("Step",{attrs:{slot:"input",icon:"icon-donation-settings",title:"Tip",isCompleted:!0,completedText:"1/1"},slot:"input"},[t._v("0/1")])],1)]},proxy:!0}])})],1),t._m(1)])])},V=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section"},[e("h1",[t._v("Step")]),e("p",[t._v("step component")]),e("pre",[e("code",[t._v(`import { Step } from 'streamlabs-beaker';

components: {
  Step
}`)])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Props")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("String")]),e("td",[t._v("null")]),e("td",[t._v("title to display")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("String")]),e("td",[t._v("null")]),e("td",[t._v("icon to display")])]),e("tr",[e("td",[t._v("isCompleted")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v(" background would be @dark-4, color would be @dark-5 when it is true ")])]),e("tr",[e("td",[t._v("completedText")]),e("td",[t._v("String")]),e("td",[t._v("null")]),e("td",[t._v(" It shows instead of slot when isCompleted is true ")])]),e("tr",[e("td",[t._v("isChecked")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v(" add check mark icon and line through for title when it is true ")])]),e("tr",[e("td",[t._v("hasPrime")]),e("td",[t._v("Boolean")]),e("td",[t._v("false")]),e("td",[t._v("It shows prime alt badge when it is true")])])])])}];const _={};var j=f(c,O,V,!1,G,"2ab8e317",null,null);function G(t){for(let n in _)this[n]=_[n]}const K=function(){return j.exports}();export{K as default};
//# sourceMappingURL=Steps-812b9dc2.js.map

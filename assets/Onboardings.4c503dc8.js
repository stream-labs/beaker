var h=Object.defineProperty;var O=(n,t,e)=>t in n?h(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var s=(n,t,e)=>(O(n,typeof t!="symbol"?t+"":t,e),e);import{C as m,P as i,V as _,n as S}from"./index.4fb8a6cb.js";import{D as k}from"./DemoSection.79ee11c0.js";import{B as b}from"./Button.b26dacc2.js";import{S as C}from"./SSProSimulator.bb0379a3.js";import"./Accordion.09c82396.js";var F=Object.defineProperty,y=Object.getOwnPropertyDescriptor,v=(n,t,e,r)=>{for(var o=r>1?void 0:r?y(t,e):t,d=n.length-1,p;d>=0;d--)(p=n[d])&&(o=(r?p(t,e,o):p(o))||o);return r&&o&&F(t,e,o),o};let c=class extends _{constructor(){super(...arguments);s(this,"title");s(this,"desc")}};v([i()],c.prototype,"title",2);v([i()],c.prototype,"desc",2);c=v([m({components:{Button:b}})],c);var P=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"s-onboarding-step"},[e("h1",[t._t("title")],2),e("p",[t._t("desc")],2),e("div",[t._t("default")],2)])},H=[],w=S(c,P,H,!1,null,null,null,null);const f=w.exports;var D=Object.defineProperty,B=Object.getOwnPropertyDescriptor,l=(n,t,e,r)=>{for(var o=r>1?void 0:r?B(t,e):t,d=n.length-1,p;d>=0;d--)(p=n[d])&&(o=(r?p(t,e,o):p(o))||o);return r&&o&&D(t,e,o),o};let a=class extends _{constructor(){super(...arguments);s(this,"steps");s(this,"stepLocation");s(this,"currentStep");s(this,"completeHandler");s(this,"continueHandler");s(this,"skipHandler");s(this,"prevHandler");s(this,"skippable");s(this,"disableControls");s(this,"hideSkip");s(this,"hideBack");s(this,"hideButton")}get location(){if(this.stepLocation==="left")return"s-onboarding__left";if(this.stepLocation==="top")return"s-onboarding__top"}get namedSteps(){return this.steps.every(t=>!!t.name)}get isCompleted(){return this.steps.every(t=>t.complete)}currentStepStyle(t){return t+1===this.currentStep}checkmarkStyle(t){return this.steps[t].complete}};l([i()],a.prototype,"steps",2);l([i({default:"left"})],a.prototype,"stepLocation",2);l([i()],a.prototype,"currentStep",2);l([i()],a.prototype,"completeHandler",2);l([i()],a.prototype,"continueHandler",2);l([i()],a.prototype,"skipHandler",2);l([i()],a.prototype,"prevHandler",2);l([i()],a.prototype,"skippable",2);l([i({default:!1})],a.prototype,"disableControls",2);l([i({default:!1})],a.prototype,"hideSkip",2);l([i({default:!1})],a.prototype,"hideBack",2);l([i({default:!1})],a.prototype,"hideButton",2);a=l([m({components:{OnboardingStep:f,Button:b}})],a);var x=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"s-onboarding"},[e("div",{staticClass:"s-onboarding-main",class:t.location},[t.namedSteps?e("div",{staticClass:"s-onboarding-progress s-onboarding__top s-step__cont"},t._l(t.steps,function(r,o){return e("div",{key:o,staticClass:"s-step-name__cont"},[o>0?e("div",{staticClass:"s-name-caret"},[e("i",{staticClass:"icon-back"})]):t._e(),e("div",{staticClass:"s-name-step",class:{"current-step":t.currentStepStyle(o)}},[t._v(" "+t._s(r.name)+" ")])])}),0):e("div",{staticClass:"s-onboarding-progress",class:t.location},[e("div",{staticClass:"s-onboarding-progress__line",class:t.location}),t._l(t.steps,function(r,o){return e("div",{key:o,staticClass:"s-bullet",class:{"current-step":t.currentStepStyle(o)}},[e("i",{class:{"icon-check-mark":t.checkmarkStyle(o)}})])})],2),e("div",{staticClass:"s-onboarding-body"},[t._t(t.currentStep)],2)]),!t.hideButton||!t.hideSkip||!t.hideBack?e("div",{staticClass:"s-onboarding-footer"},[e("div",{staticClass:"s-previousStep"},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.currentStep!==1&&!t.hideBack,expression:"currentStep !== 1 && !hideBack"}],on:{click:t.prevHandler}},[t._v("Back")])]),e("div",{staticClass:"s-nextStep"},[t.skippable&&!t.hideSkip?e("p",{on:{click:t.skipHandler}},[t._v(" Skip ")]):t._e(),t.skippable&&t.currentStep===t.steps&&!t.isCompleted?e("div",{staticClass:"s-onboarding-skip__warning"},[t._v(" You skipped a step ")]):t._e(),t.hideButton?t._e():e("Button",{attrs:{variation:"action",title:t.currentStep===t.steps.length?"Complete":"Continue",state:t.disableControls||t.currentStep===t.steps.length&&!t.isCompleted?"disabled":null},on:{click:function(r){t.currentStep===t.steps.length?t.completeHandler():t.continueHandler()}}})],1)]):t._e()])},T=[],j=S(a,x,T,!1,null,null,null,null);const $=j.exports,g=`<template>
  <div>
    <div class="section">
      <h1>Onboarding</h1>
      <p>Onboarding component - now with all logic outside of component!</p>

      <pre><code>import { Onboarding, OnboardingStep } from "streamlabs-beaker"

@Component({
  components: {
    Onboarding,
    OnboardingStep,
  }
})</code></pre>
    </div>

    <div class="section">
      <h2>Onboarding - Named Steps</h2>
      <DemoSection title="Onboarding - Named Steps" :code="demoCode">
        <template #components>
          <Onboarding
            :steps="steps"
            :skippable="true"
            :currentStep="currentStep"
            :stepLocation="'top'"
            :skipHandler="skipFunc"
            :prevHandler="previousFunc"
            :continueHandler="continueFunc"
            :completeHandler="completeFunc"
          >
            <OnboardingStep slot="1">
              <span slot="title">Getting Started</span>
              <span slot="desc">Slot 1</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="2">
              <span slot="title">A Few More Things</span>
              <span slot="desc">Slot 2</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="3">
              <span slot="title">Almost There</span>
              <span slot="desc">Slot 3</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="4">
              <span slot="title">Getting Started</span>
              <span slot="desc">Slot 4</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
          </Onboarding>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <Onboarding
            :steps="stepsTest"
            :skippable="true"
            :currentStep="currentStep"
            :stepLocation="'top'"
            :skipHandler="skipFunc"
            :prevHandler="previousFunc"
            :continueHandler="continueFunc"
            :completeHandler="completeFunc"
          >
            <OnboardingStep slot="1">
              <span slot="title">Getting Started</span>
              <span slot="desc">Slot 1</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="2">
              <span slot="title">A Few More Things</span>
              <span slot="desc">Slot 2</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="3">
              <span slot="title">Almost There</span>
              <span slot="desc">Slot 3</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="4">
              <span slot="title">Getting Started</span>
              <span slot="desc">Slot 4</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
          </Onboarding>
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
          <td>steps</td>
          <td>Object</td>
          <td>null</td>
          <td><code>[{name: "Step Name", complete: Boolean}]</code></td>
        </tr>
        <tr>
          <td>stepLocation</td>
          <td>string</td>
          <td>'left'</td>
          <td>
            Location of Progress Bar: <code>left</code> or <code>top</code>
          </td>
        </tr>
        <tr>
          <td>currentStep</td>
          <td>number</td>
          <td>null</td>
          <td>The number of the step you are on</td>
        </tr>
        <tr>
          <td>completeHandler</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Function to perform when <code>complete</code> button is clicked
          </td>
        </tr>
        <tr>
          <td>continueHandler</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Function to perform when <code>continue</code> button is clicked
          </td>
        </tr>
        <tr>
          <td>skipHandler</td>
          <td>Function</td>
          <td>null</td>
          <td>Function to perform when <code>skip</code> is clicked</td>
        </tr>
        <tr>
          <td>previousHandler</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Function to perform when <code>previous</code> button is clicked
          </td>
        </tr>
        <tr>
          <td>skippable</td>
          <td>boolean</td>
          <td>null</td>
          <td>make steps skippable</td>
        </tr>
        <tr>
          <td>disableControls</td>
          <td>boolean</td>
          <td>false</td>
          <td>to disable controls</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import Onboarding from "./../components/Onboarding.vue";
import OnboardingStep from "./../components/OnboardingStep.vue";
import OnboardingsCode from "./Onboardings.vue?raw";
import SSProSimulator from "./../components/SSProSimulator.vue";

@Component({
  components: {
    DemoSection,
    Onboarding,
    OnboardingStep,
    OnboardingsCode,
    SSProSimulator
  }
})
export default class Onboardings extends Vue {
  demoCode = OnboardingsCode;
  currentStep: number = 1;

  steps: Object = [
    { name: "Donations", complete: false },
    { name: "Cloudbot", complete: false },
    { name: "Streamlabs OBS", complete: false },
    { name: "Alert Box", complete: false }
  ];

  stepsTest: Object = [
    { complete: false },
    { complete: false },
    { complete: false },
    { complete: false }
  ];

  continueFunc() {
    this.stepsTest[this.currentStep - 1].complete = true;
    this.currentStep++;
  }

  skipFunc() {
    this.currentStep++;
  }

  previousFunc() {
    this.currentStep--;
  }

  completeFunc() {
    console.log("complete clicked");
  }

  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";

  domain = "morganleeeeeeeeeee.com";
}
<\/script>
`;var L=Object.defineProperty,A=Object.getOwnPropertyDescriptor,G=(n,t,e,r)=>{for(var o=r>1?void 0:r?A(t,e):t,d=n.length-1,p;d>=0;d--)(p=n[d])&&(o=(r?p(t,e,o):p(o))||o);return r&&o&&L(t,e,o),o};let u=class extends _{constructor(){super(...arguments);s(this,"demoCode",g);s(this,"currentStep",1);s(this,"steps",[{name:"Donations",complete:!1},{name:"Cloudbot",complete:!1},{name:"Streamlabs OBS",complete:!1},{name:"Alert Box",complete:!1}]);s(this,"stepsTest",[{complete:!1},{complete:!1},{complete:!1},{complete:!1}]);s(this,"username","morganleee");s(this,"icon","https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg");s(this,"domain","morganleeeeeeeeeee.com")}continueFunc(){this.stepsTest[this.currentStep-1].complete=!0,this.currentStep++}skipFunc(){this.currentStep++}previousFunc(){this.currentStep--}completeFunc(){console.log("complete clicked")}};u=G([m({components:{DemoSection:k,Onboarding:$,OnboardingStep:f,OnboardingsCode:g,SSProSimulator:C}})],u);var N=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",[t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Onboarding - Named Steps")]),e("DemoSection",{attrs:{title:"Onboarding - Named Steps",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Onboarding",{attrs:{steps:t.steps,skippable:!0,currentStep:t.currentStep,stepLocation:"top",skipHandler:t.skipFunc,prevHandler:t.previousFunc,continueHandler:t.continueFunc,completeHandler:t.completeFunc}},[e("OnboardingStep",{attrs:{slot:"1"},slot:"1"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Getting Started")]),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 1")]),e("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),e("OnboardingStep",{attrs:{slot:"2"},slot:"2"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("A Few More Things")]),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 2")]),e("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),e("OnboardingStep",{attrs:{slot:"3"},slot:"3"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Almost There")]),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 3")]),e("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),e("OnboardingStep",{attrs:{slot:"4"},slot:"4"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Getting Started")]),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 4")]),e("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1)],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("DemoSection",{attrs:{title:"Default",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Onboarding",{attrs:{steps:t.stepsTest,skippable:!0,currentStep:t.currentStep,stepLocation:"top",skipHandler:t.skipFunc,prevHandler:t.previousFunc,continueHandler:t.continueFunc,completeHandler:t.completeFunc}},[e("OnboardingStep",{attrs:{slot:"1"},slot:"1"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Getting Started")]),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 1")]),e("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),e("OnboardingStep",{attrs:{slot:"2"},slot:"2"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("A Few More Things")]),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 2")]),e("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),e("OnboardingStep",{attrs:{slot:"3"},slot:"3"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Almost There")]),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 3")]),e("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),e("OnboardingStep",{attrs:{slot:"4"},slot:"4"},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Getting Started")]),e("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 4")]),e("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1)],1)]},proxy:!0}])})],1),t._m(1)])},M=[function(){var n=this,t=n._self._c;return n._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[n._v("Onboarding")]),t("p",[n._v("Onboarding component - now with all logic outside of component!")]),t("pre",[t("code",[n._v(`import { Onboarding, OnboardingStep } from "streamlabs-beaker"

@Component({
  components: {
    Onboarding,
    OnboardingStep,
  }
})`)])])])},function(){var n=this,t=n._self._c;return n._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Prop")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("steps")]),t("td",[n._v("Object")]),t("td",[n._v("null")]),t("td",[t("code",[n._v('[{name: "Step Name", complete: Boolean}]')])])]),t("tr",[t("td",[n._v("stepLocation")]),t("td",[n._v("string")]),t("td",[n._v("'left'")]),t("td",[n._v(" Location of Progress Bar: "),t("code",[n._v("left")]),n._v(" or "),t("code",[n._v("top")])])]),t("tr",[t("td",[n._v("currentStep")]),t("td",[n._v("number")]),t("td",[n._v("null")]),t("td",[n._v("The number of the step you are on")])]),t("tr",[t("td",[n._v("completeHandler")]),t("td",[n._v("Function")]),t("td",[n._v("null")]),t("td",[n._v(" Function to perform when "),t("code",[n._v("complete")]),n._v(" button is clicked ")])]),t("tr",[t("td",[n._v("continueHandler")]),t("td",[n._v("Function")]),t("td",[n._v("null")]),t("td",[n._v(" Function to perform when "),t("code",[n._v("continue")]),n._v(" button is clicked ")])]),t("tr",[t("td",[n._v("skipHandler")]),t("td",[n._v("Function")]),t("td",[n._v("null")]),t("td",[n._v("Function to perform when "),t("code",[n._v("skip")]),n._v(" is clicked")])]),t("tr",[t("td",[n._v("previousHandler")]),t("td",[n._v("Function")]),t("td",[n._v("null")]),t("td",[n._v(" Function to perform when "),t("code",[n._v("previous")]),n._v(" button is clicked ")])]),t("tr",[t("td",[n._v("skippable")]),t("td",[n._v("boolean")]),t("td",[n._v("null")]),t("td",[n._v("make steps skippable")])]),t("tr",[t("td",[n._v("disableControls")]),t("td",[n._v("boolean")]),t("td",[n._v("false")]),t("td",[n._v("to disable controls")])])])])}],V=S(u,N,M,!1,null,null,null,null);const J=V.exports;export{J as default};
//# sourceMappingURL=Onboardings.4c503dc8.js.map

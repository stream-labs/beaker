var C=Object.defineProperty;var F=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var s=(t,e,n)=>(F(t,typeof e!="symbol"?e+"":e,n),n);import{C as m,P as i,V as _,n as v}from"./index-e8bb31bb.js";import{D as y}from"./DemoSection-b2dfe451.js";import{B as h}from"./Button-3cf72d47.js";import{S as P}from"./SSProSimulator-d84d4f1f.js";import"./Accordion-79d22a9d.js";var H=Object.defineProperty,w=Object.getOwnPropertyDescriptor,S=(t,e,n,r)=>{for(var o=r>1?void 0:r?w(e,n):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(o=(r?d(e,n,o):d(o))||o);return r&&o&&H(e,n,o),o};let p=class extends _{constructor(){super(...arguments);s(this,"title");s(this,"desc")}};S([i()],p.prototype,"title",2);S([i()],p.prototype,"desc",2);p=S([m({components:{Button:h}})],p);var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-onboarding-step"},[n("h1",[t._t("title")],2),n("p",[t._t("desc")],2),n("div",[t._t("default")],2)])},$=[];const b={};var B=v(p,D,$,!1,j,null,null,null);function j(t){for(let e in b)this[e]=b[e]}const O=function(){return B.exports}();var x=Object.defineProperty,T=Object.getOwnPropertyDescriptor,l=(t,e,n,r)=>{for(var o=r>1?void 0:r?T(e,n):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(o=(r?d(e,n,o):d(o))||o);return r&&o&&x(e,n,o),o};let a=class extends _{constructor(){super(...arguments);s(this,"steps");s(this,"stepLocation");s(this,"currentStep");s(this,"completeHandler");s(this,"continueHandler");s(this,"skipHandler");s(this,"prevHandler");s(this,"skippable");s(this,"disableControls");s(this,"hideSkip");s(this,"hideBack");s(this,"hideButton")}get location(){if(this.stepLocation==="left")return"s-onboarding__left";if(this.stepLocation==="top")return"s-onboarding__top"}get namedSteps(){return this.steps.every(n=>!!n.name)}get isCompleted(){return this.steps.every(n=>n.complete)}currentStepStyle(n){return n+1===this.currentStep}checkmarkStyle(n){return this.steps[n].complete}};l([i()],a.prototype,"steps",2);l([i({default:"left"})],a.prototype,"stepLocation",2);l([i()],a.prototype,"currentStep",2);l([i()],a.prototype,"completeHandler",2);l([i()],a.prototype,"continueHandler",2);l([i()],a.prototype,"skipHandler",2);l([i()],a.prototype,"prevHandler",2);l([i()],a.prototype,"skippable",2);l([i({default:!1})],a.prototype,"disableControls",2);l([i({default:!1})],a.prototype,"hideSkip",2);l([i({default:!1})],a.prototype,"hideBack",2);l([i({default:!1})],a.prototype,"hideButton",2);a=l([m({components:{OnboardingStep:O,Button:h}})],a);var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-onboarding"},[n("div",{staticClass:"s-onboarding-main",class:t.location},[t.namedSteps?n("div",{staticClass:"s-onboarding-progress s-onboarding__top s-step__cont"},t._l(t.steps,function(r,o){return n("div",{key:o,staticClass:"s-step-name__cont"},[o>0?n("div",{staticClass:"s-name-caret"},[n("i",{staticClass:"icon-back"})]):t._e(),n("div",{staticClass:"s-name-step",class:{"current-step":t.currentStepStyle(o)}},[t._v(" "+t._s(r.name)+" ")])])}),0):n("div",{staticClass:"s-onboarding-progress",class:t.location},[n("div",{staticClass:"s-onboarding-progress__line",class:t.location}),t._l(t.steps,function(r,o){return n("div",{key:o,staticClass:"s-bullet",class:{"current-step":t.currentStepStyle(o)}},[n("i",{class:{"icon-check-mark":t.checkmarkStyle(o)}})])})],2),n("div",{staticClass:"s-onboarding-body"},[t._t(t.currentStep)],2)]),!t.hideButton||!t.hideSkip||!t.hideBack?n("div",{staticClass:"s-onboarding-footer"},[n("div",{staticClass:"s-previousStep"},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.currentStep!==1&&!t.hideBack,expression:"currentStep !== 1 && !hideBack"}],on:{click:t.prevHandler}},[t._v("Back")])]),n("div",{staticClass:"s-nextStep"},[t.skippable&&!t.hideSkip?n("p",{on:{click:t.skipHandler}},[t._v(" Skip ")]):t._e(),t.skippable&&t.currentStep===t.steps&&!t.isCompleted?n("div",{staticClass:"s-onboarding-skip__warning"},[t._v(" You skipped a step ")]):t._e(),t.hideButton?t._e():n("Button",{attrs:{variation:"action",title:t.currentStep===t.steps.length?"Complete":"Continue",state:t.disableControls||t.currentStep===t.steps.length&&!t.isCompleted?"disabled":null},on:{click:function(r){t.currentStep===t.steps.length?t.completeHandler():t.continueHandler()}}})],1)]):t._e()])},A=[];const g={};var G=v(a,L,A,!1,M,null,null,null);function M(t){for(let e in g)this[e]=g[e]}const N=function(){return G.exports}(),k=`<template>
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
`;var E=Object.defineProperty,V=Object.getOwnPropertyDescriptor,R=(t,e,n,r)=>{for(var o=r>1?void 0:r?V(e,n):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(o=(r?d(e,n,o):d(o))||o);return r&&o&&E(e,n,o),o};let u=class extends _{constructor(){super(...arguments);s(this,"demoCode",k);s(this,"currentStep",1);s(this,"steps",[{name:"Donations",complete:!1},{name:"Cloudbot",complete:!1},{name:"Streamlabs OBS",complete:!1},{name:"Alert Box",complete:!1}]);s(this,"stepsTest",[{complete:!1},{complete:!1},{complete:!1},{complete:!1}]);s(this,"username","morganleee");s(this,"icon","https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg");s(this,"domain","morganleeeeeeeeeee.com")}continueFunc(){this.stepsTest[this.currentStep-1].complete=!0,this.currentStep++}skipFunc(){this.currentStep++}previousFunc(){this.currentStep--}completeFunc(){console.log("complete clicked")}};u=R([m({components:{DemoSection:y,Onboarding:N,OnboardingStep:O,OnboardingsCode:k,SSProSimulator:P}})],u);var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"section"},[n("h2",[t._v("Onboarding - Named Steps")]),n("DemoSection",{attrs:{title:"Onboarding - Named Steps",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Onboarding",{attrs:{steps:t.steps,skippable:!0,currentStep:t.currentStep,stepLocation:"top",skipHandler:t.skipFunc,prevHandler:t.previousFunc,continueHandler:t.continueFunc,completeHandler:t.completeFunc}},[n("OnboardingStep",{attrs:{slot:"1"},slot:"1"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Getting Started")]),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 1")]),n("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),n("OnboardingStep",{attrs:{slot:"2"},slot:"2"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("A Few More Things")]),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 2")]),n("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),n("OnboardingStep",{attrs:{slot:"3"},slot:"3"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Almost There")]),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 3")]),n("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),n("OnboardingStep",{attrs:{slot:"4"},slot:"4"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Getting Started")]),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 4")]),n("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1)],1)]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("DemoSection",{attrs:{title:"Default",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Onboarding",{attrs:{steps:t.stepsTest,skippable:!0,currentStep:t.currentStep,stepLocation:"top",skipHandler:t.skipFunc,prevHandler:t.previousFunc,continueHandler:t.continueFunc,completeHandler:t.completeFunc}},[n("OnboardingStep",{attrs:{slot:"1"},slot:"1"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Getting Started")]),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 1")]),n("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),n("OnboardingStep",{attrs:{slot:"2"},slot:"2"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("A Few More Things")]),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 2")]),n("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),n("OnboardingStep",{attrs:{slot:"3"},slot:"3"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Almost There")]),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 3")]),n("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1),n("OnboardingStep",{attrs:{slot:"4"},slot:"4"},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Getting Started")]),n("span",{attrs:{slot:"desc"},slot:"desc"},[t._v("Slot 4")]),n("SSProSimulator",{attrs:{username:t.username,domain:t.domain,icon:t.icon}})],1)],1)]},proxy:!0}])})],1),t._m(1)])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h1",[t._v("Onboarding")]),n("p",[t._v("Onboarding component - now with all logic outside of component!")]),n("pre",[n("code",[t._v(`import { Onboarding, OnboardingStep } from "streamlabs-beaker"

@Component({
  components: {
    Onboarding,
    OnboardingStep,
  }
})`)])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[t._v("Prop")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("steps")]),n("td",[t._v("Object")]),n("td",[t._v("null")]),n("td",[n("code",[t._v('[{name: "Step Name", complete: Boolean}]')])])]),n("tr",[n("td",[t._v("stepLocation")]),n("td",[t._v("string")]),n("td",[t._v("'left'")]),n("td",[t._v(" Location of Progress Bar: "),n("code",[t._v("left")]),t._v(" or "),n("code",[t._v("top")])])]),n("tr",[n("td",[t._v("currentStep")]),n("td",[t._v("number")]),n("td",[t._v("null")]),n("td",[t._v("The number of the step you are on")])]),n("tr",[n("td",[t._v("completeHandler")]),n("td",[t._v("Function")]),n("td",[t._v("null")]),n("td",[t._v(" Function to perform when "),n("code",[t._v("complete")]),t._v(" button is clicked ")])]),n("tr",[n("td",[t._v("continueHandler")]),n("td",[t._v("Function")]),n("td",[t._v("null")]),n("td",[t._v(" Function to perform when "),n("code",[t._v("continue")]),t._v(" button is clicked ")])]),n("tr",[n("td",[t._v("skipHandler")]),n("td",[t._v("Function")]),n("td",[t._v("null")]),n("td",[t._v("Function to perform when "),n("code",[t._v("skip")]),t._v(" is clicked")])]),n("tr",[n("td",[t._v("previousHandler")]),n("td",[t._v("Function")]),n("td",[t._v("null")]),n("td",[t._v(" Function to perform when "),n("code",[t._v("previous")]),t._v(" button is clicked ")])]),n("tr",[n("td",[t._v("skippable")]),n("td",[t._v("boolean")]),n("td",[t._v("null")]),n("td",[t._v("make steps skippable")])]),n("tr",[n("td",[t._v("disableControls")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v("to disable controls")])])])])}];const f={};var q=v(u,z,Y,!1,I,null,null,null);function I(t){for(let e in f)this[e]=f[e]}const et=function(){return q.exports}();export{et as default};
//# sourceMappingURL=Onboardings-01f3fd12.js.map

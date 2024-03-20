var S=Object.defineProperty;var y=(e,n,t)=>n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var r=(e,n,t)=>(y(e,typeof n!="symbol"?n+"":n,t),t);import{C as v,P as m,V as _,n as f}from"./index-e8bb31bb.js";import{B as g}from"./Badge-717b81bb.js";import{B as C}from"./Button-3cf72d47.js";import{D as k}from"./DemoSection-b2dfe451.js";import{M as B,W as $}from"./ModalComp-5d633388.js";import{E as w}from"./EmptySection-a336163c.js";import"./Accordion-79d22a9d.js";import"./Spinner-41948dcb.js";import"./index-4af456d0.js";var D=Object.defineProperty,x=Object.getOwnPropertyDescriptor,c=(e,n,t,i)=>{for(var o=i>1?void 0:i?x(n,t):n,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(i?a(n,t,o):a(o))||o);return i&&o&&D(n,t,o),o};let l=class extends _{constructor(){super(...arguments);r(this,"bgColor");r(this,"description");r(this,"buttonVariation");r(this,"buttonTitle");r(this,"buttonHref");r(this,"buttonTo");r(this,"buttonTag");r(this,"onClick");r(this,"callToActionBg",{backgroundColor:this.bgColor})}};c([m()],l.prototype,"bgColor",2);c([m({default:"Over 800k creators use Streamlabs OBS daily, delivering entertainment."})],l.prototype,"description",2);c([m({default:"slobs-download"})],l.prototype,"buttonVariation",2);c([m({default:"Download Streamlabs OBS"})],l.prototype,"buttonTitle",2);c([m()],l.prototype,"buttonHref",2);c([m()],l.prototype,"buttonTo",2);c([m()],l.prototype,"buttonTag",2);c([m()],l.prototype,"onClick",2);l=c([v({components:{Button:C}})],l);var M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"s-call-to-action s-call-to-action--nav",style:e.callToActionBg},[t("div",{staticClass:"s-title"},[e._t("title")],2),t("div",[e._v(e._s(e.description))]),t("div",{staticClass:"s-call-to-action__extras"},[e._t("extras")],2),t("Button",{attrs:{variation:e.buttonVariation,size:"small",title:e.buttonTitle,href:e.buttonHref,to:e.buttonTo,tag:e.buttonTag},on:{click:function(i){return e.$emit("click")}}})],1)},T=[];const P={};var A=f(l,M,T,!1,N,null,null,null);function N(e){for(let n in P)this[n]=P[n]}const W=function(){return A.exports}(),O=`<template>
  <div>
    <div class="section">
      <h1>Prime Components</h1>
    </div>

    <div class="section">
      <h2>Standard Badges & Alt Badges</h2>
      <pre><code>import { Badge } from "streamlabs-beaker"

@Component({
  components: {
    Badge
  }
})</code></pre>

      <DemoSection title="Badges" :code="demoCode">
        <template #components>
          <Badge variant="prime" />
          <Badge variant="prime-alt" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Prime Feature Overlay</h2>
      <pre><code>import { PrimeSection } from "streamlabs-beaker"

@Component({
  components: {
    PrimeSection
  }
})</code></pre>

      <DemoSection title="Prime Lock Overlay" :code="demoCode">
        <template #components>
          <div class="cs-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi
            magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet
            egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum
            congue euismod enim non venenatis. Sed sed varius neque. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam nisi magna,
            venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque aliquet egestas
            tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue
            euismod enim non venenatis. Sed sed varius neque.
            <PrimeSection
              subtitle="77% trust custom email addresses over regular."
              @click="testClick"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Prime Call to Action</h2>
      <pre><code>import { NavCallToAction } from "streamlabs-beaker"

@Component({
  components: {
    NavCallToAction
  }
})</code></pre>

      <DemoSection title="Prime Call to Action" :code="demoCode">
        <template #components>
          <NavCallToAction
            description="Forward email from your custom domain name to your current mailbox.
            "
            buttonTitle="Join Prime"
            buttonVariation="prime"
            @click="testNavClick"
          >
            <div slot="title">
              Unlock unlimited themes with
              <Badge variant="prime-alt" />
            </div>
            <div slot="extras">
              <div>Prime also includes:</div>
              <div>Custom Domain Name</div>
              <div>30+ Professional Themes</div>
              <div>Advanced SEO & Analytics</div>
            </div>
          </NavCallToAction>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Modal Welcome Prime</h2>
      <pre><code>import { ModalComp } from "streamlabs-beaker"

@Component({
  components: {
    ModalComp
  }
})</code></pre>

      <DemoSection title="Welcome Prime Modal" :code="demoCode">
        <template #components>
          <ModalComp
            type="welcome-prime"
            :width="600"
            @onClickPrime="testWelcomePrime"
            :hasPrimeCloseButton="true"
          />

          <div class="button-container button-container--left">
            <Button
              variation="default"
              title="modal welcome prime"
              @click="$modal.show('modal-welcome-prime')"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Welcome Prime</h2>
      <pre><code>import { WelcomePrime } from "streamlabs-beaker"

@Component({
  components: {
    WelcomePrime
  }
})</code></pre>

      <DemoSection title="Welcome Prime" :code="demoCode">
        <template #components>
          <WelcomePrime class="welcome-prime" @onClickPrime="testClick" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Modal Prime Intro</h2>
      <pre><code>import { ModalComp } from "streamlabs-beaker"

@Component({
  components: {
    ModalComp
  }
})</code></pre>

      <DemoSection title="Prime Intro Modal" :code="demoCode">
        <template #components>
          <ModalComp
            type="prime-intro"
            :width="680"
            @onClickPrime="testPrimeIntro"
            :hasPrimeCloseButton="true"
          />

          <div class="button-container button-container--left">
            <Button
              variation="default"
              title="Modal Prime Intro"
              @click="$modal.show('modal-prime-intro')"
            />
          </div>
        </template>
      </DemoSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Badge from "./../components/Badge.vue";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import ModalComp from "./../components/ModalComp.vue";
import NavCallToAction from "./../components/NavCallToAction.vue";
import PrimeCode from "./Prime.vue?raw";
import PrimeSection from "./../components/PrimeSection.vue";
import WelcomePrime from "./../components/WelcomePrime.vue";

@Component({
  components: {
    Badge,
    Button,
    DemoSection,
    ModalComp,
    NavCallToAction,
    PrimeSection,
    WelcomePrime
  }
})
export default class PrimeComponents extends Vue {
  demoCode = PrimeCode;

  testClick() {
    console.log("test prime section click");
  }

  testNavClick() {
    console.log("test prime nav click");
  }

  testWelcomePrime() {
    console.log("test welcome prime click");
  }

  testPrimeIntro() {
    console.log("test prime info click");
  }
}
<\/script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

.cs-section {
  position: relative;
  width: 260px;
}

.welcome-prime {
  width: 600px;
}
</style>
`;var q=Object.defineProperty,E=Object.getOwnPropertyDescriptor,p=(e,n,t,i)=>{for(var o=i>1?void 0:i?E(n,t):n,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(i?a(n,t,o):a(o))||o);return i&&o&&q(n,t,o),o};let d=class extends _{constructor(){super(...arguments);r(this,"subtitle");r(this,"href");r(this,"onClick")}};p([m({})],d.prototype,"subtitle",2);p([m({})],d.prototype,"href",2);p([m()],d.prototype,"onClick",2);d=p([v({components:{Badge:g,Button:C,EmptySection:w}})],d);var V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"prime-section"},[t("empty-section",{attrs:{variation:"prime",titleSlot:!0,subtitle:e.subtitle,hasLink:!0}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("Badge",{attrs:{"align-left":!0,variant:"prime-alt"}}),e._v("Feature ")],1),t("div",{attrs:{slot:"link"},slot:"link"},[t("Button",{attrs:{tag:"a",variation:"link",href:e.href,title:"Try Prime Now"},on:{click:function(i){return e.$emit("click")}}})],1)])],1)},F=[];const b={};var I=f(d,V,F,!1,L,null,null,null);function L(e){for(let n in b)this[n]=b[n]}const j=function(){return I.exports}();var H=Object.defineProperty,R=Object.getOwnPropertyDescriptor,z=(e,n,t,i)=>{for(var o=i>1?void 0:i?R(n,t):n,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(i?a(n,t,o):a(o))||o);return i&&o&&H(n,t,o),o};let u=class extends _{constructor(){super(...arguments);r(this,"demoCode",O)}testClick(){console.log("test prime section click")}testNavClick(){console.log("test prime nav click")}testWelcomePrime(){console.log("test welcome prime click")}testPrimeIntro(){console.log("test prime info click")}};u=z([v({components:{Badge:g,Button:C,DemoSection:k,ModalComp:B,NavCallToAction:W,PrimeSection:j,WelcomePrime:$}})],u);var J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._m(0),t("div",{staticClass:"section"},[t("h2",[e._v("Standard Badges & Alt Badges")]),e._m(1),t("DemoSection",{attrs:{title:"Badges",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Badge",{attrs:{variant:"prime"}}),t("Badge",{attrs:{variant:"prime-alt"}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Prime Feature Overlay")]),e._m(2),t("DemoSection",{attrs:{title:"Prime Lock Overlay",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("div",{staticClass:"cs-section"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed sed varius neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed sed varius neque. "),t("PrimeSection",{attrs:{subtitle:"77% trust custom email addresses over regular."},on:{click:e.testClick}})],1)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Prime Call to Action")]),e._m(3),t("DemoSection",{attrs:{title:"Prime Call to Action",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("NavCallToAction",{attrs:{description:`Forward email from your custom domain name to your current mailbox.
            `,buttonTitle:"Join Prime",buttonVariation:"prime"},on:{click:e.testNavClick}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Unlock unlimited themes with "),t("Badge",{attrs:{variant:"prime-alt"}})],1),t("div",{attrs:{slot:"extras"},slot:"extras"},[t("div",[e._v("Prime also includes:")]),t("div",[e._v("Custom Domain Name")]),t("div",[e._v("30+ Professional Themes")]),t("div",[e._v("Advanced SEO & Analytics")])])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Modal Welcome Prime")]),e._m(4),t("DemoSection",{attrs:{title:"Welcome Prime Modal",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("ModalComp",{attrs:{type:"welcome-prime",width:600,hasPrimeCloseButton:!0},on:{onClickPrime:e.testWelcomePrime}}),t("div",{staticClass:"button-container button-container--left"},[t("Button",{attrs:{variation:"default",title:"modal welcome prime"},on:{click:function(i){return e.$modal.show("modal-welcome-prime")}}})],1)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Welcome Prime")]),e._m(5),t("DemoSection",{attrs:{title:"Welcome Prime",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("WelcomePrime",{staticClass:"welcome-prime",on:{onClickPrime:e.testClick}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Modal Prime Intro")]),e._m(6),t("DemoSection",{attrs:{title:"Prime Intro Modal",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("ModalComp",{attrs:{type:"prime-intro",width:680,hasPrimeCloseButton:!0},on:{onClickPrime:e.testPrimeIntro}}),t("div",{staticClass:"button-container button-container--left"},[t("Button",{attrs:{variation:"default",title:"Modal Prime Intro"},on:{click:function(i){return e.$modal.show("modal-prime-intro")}}})],1)]},proxy:!0}])})],1)])},U=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"section"},[t("h1",[e._v("Prime Components")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",[e._v(`import { Badge } from "streamlabs-beaker"

@Component({
  components: {
    Badge
  }
})`)])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",[e._v(`import { PrimeSection } from "streamlabs-beaker"

@Component({
  components: {
    PrimeSection
  }
})`)])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",[e._v(`import { NavCallToAction } from "streamlabs-beaker"

@Component({
  components: {
    NavCallToAction
  }
})`)])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",[e._v(`import { ModalComp } from "streamlabs-beaker"

@Component({
  components: {
    ModalComp
  }
})`)])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",[e._v(`import { WelcomePrime } from "streamlabs-beaker"

@Component({
  components: {
    WelcomePrime
  }
})`)])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("pre",[t("code",[e._v(`import { ModalComp } from "streamlabs-beaker"

@Component({
  components: {
    ModalComp
  }
})`)])])}];const h={};var G=f(u,J,U,!1,K,"68a5afb8",null,null);function K(e){for(let n in h)this[n]=h[n]}const le=function(){return G.exports}();export{le as default};
//# sourceMappingURL=Prime-0e89f49b.js.map

var b=Object.defineProperty;var g=(n,e,t)=>e in n?b(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>(g(n,typeof e!="symbol"?e+"":e,t),t);import{C as v,P as a,V as _,n as f}from"./index.4fb8a6cb.js";import{B as P}from"./Badge.2c39dd0d.js";import{B as C}from"./Button.b26dacc2.js";import{D as y}from"./DemoSection.79ee11c0.js";import{M as h,W as S}from"./ModalComp.12fcb69e.js";import{E as k}from"./EmptySection.71dd93db.js";import"./Accordion.09c82396.js";import"./Spinner.2fef2c20.js";import"./index.3042f557.js";var B=Object.defineProperty,x=Object.getOwnPropertyDescriptor,c=(n,e,t,i)=>{for(var o=i>1?void 0:i?x(e,t):e,r=n.length-1,l;r>=0;r--)(l=n[r])&&(o=(i?l(e,t,o):l(o))||o);return i&&o&&B(e,t,o),o};let m=class extends _{constructor(){super(...arguments);s(this,"bgColor");s(this,"description");s(this,"buttonVariation");s(this,"buttonTitle");s(this,"buttonHref");s(this,"buttonTo");s(this,"buttonTag");s(this,"onClick");s(this,"callToActionBg",{backgroundColor:this.bgColor})}};c([a()],m.prototype,"bgColor",2);c([a({default:"Over 800k creators use Streamlabs OBS daily, delivering entertainment."})],m.prototype,"description",2);c([a({default:"slobs-download"})],m.prototype,"buttonVariation",2);c([a({default:"Download Streamlabs OBS"})],m.prototype,"buttonTitle",2);c([a()],m.prototype,"buttonHref",2);c([a()],m.prototype,"buttonTo",2);c([a()],m.prototype,"buttonTag",2);c([a()],m.prototype,"onClick",2);m=c([v({components:{Button:C}})],m);var w=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"s-call-to-action s-call-to-action--nav",style:e.callToActionBg},[t("div",{staticClass:"s-title"},[e._t("title")],2),t("div",[e._v(e._s(e.description))]),t("div",{staticClass:"s-call-to-action__extras"},[e._t("extras")],2),t("Button",{attrs:{variation:e.buttonVariation,size:"small",title:e.buttonTitle,href:e.buttonHref,to:e.buttonTo,tag:e.buttonTag},on:{click:function(i){return e.$emit("click")}}})],1)},D=[],T=f(m,w,D,!1,null,null,null,null);const M=T.exports,A=`<template>
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
`;var N=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(n,e,t,i)=>{for(var o=i>1?void 0:i?$(e,t):e,r=n.length-1,l;r>=0;r--)(l=n[r])&&(o=(i?l(e,t,o):l(o))||o);return i&&o&&N(e,t,o),o};let p=class extends _{constructor(){super(...arguments);s(this,"subtitle");s(this,"href");s(this,"onClick")}};d([a({})],p.prototype,"subtitle",2);d([a({})],p.prototype,"href",2);d([a()],p.prototype,"onClick",2);p=d([v({components:{Badge:P,Button:C,EmptySection:k}})],p);var W=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"prime-section"},[t("empty-section",{attrs:{variation:"prime",titleSlot:!0,subtitle:e.subtitle,hasLink:!0}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("Badge",{attrs:{"align-left":!0,variant:"prime-alt"}}),e._v("Feature ")],1),t("div",{attrs:{slot:"link"},slot:"link"},[t("Button",{attrs:{tag:"a",variation:"link",href:e.href,title:"Try Prime Now"},on:{click:function(i){return e.$emit("click")}}})],1)])],1)},O=[],q=f(p,W,O,!1,null,null,null,null);const V=q.exports;var F=Object.defineProperty,I=Object.getOwnPropertyDescriptor,L=(n,e,t,i)=>{for(var o=i>1?void 0:i?I(e,t):e,r=n.length-1,l;r>=0;r--)(l=n[r])&&(o=(i?l(e,t,o):l(o))||o);return i&&o&&F(e,t,o),o};let u=class extends _{constructor(){super(...arguments);s(this,"demoCode",A)}testClick(){console.log("test prime section click")}testNavClick(){console.log("test prime nav click")}testWelcomePrime(){console.log("test welcome prime click")}testPrimeIntro(){console.log("test prime info click")}};u=L([v({components:{Badge:P,Button:C,DemoSection:y,ModalComp:h,NavCallToAction:M,PrimeSection:V,WelcomePrime:S}})],u);var j=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[e._m(0),t("div",{staticClass:"section"},[t("h2",[e._v("Standard Badges & Alt Badges")]),e._m(1),t("DemoSection",{attrs:{title:"Badges",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Badge",{attrs:{variant:"prime"}}),t("Badge",{attrs:{variant:"prime-alt"}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Prime Feature Overlay")]),e._m(2),t("DemoSection",{attrs:{title:"Prime Lock Overlay",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("div",{staticClass:"cs-section"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed sed varius neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed sed varius neque. "),t("PrimeSection",{attrs:{subtitle:"77% trust custom email addresses over regular."},on:{click:e.testClick}})],1)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Prime Call to Action")]),e._m(3),t("DemoSection",{attrs:{title:"Prime Call to Action",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("NavCallToAction",{attrs:{description:`Forward email from your custom domain name to your current mailbox.
            `,buttonTitle:"Join Prime",buttonVariation:"prime"},on:{click:e.testNavClick}},[t("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Unlock unlimited themes with "),t("Badge",{attrs:{variant:"prime-alt"}})],1),t("div",{attrs:{slot:"extras"},slot:"extras"},[t("div",[e._v("Prime also includes:")]),t("div",[e._v("Custom Domain Name")]),t("div",[e._v("30+ Professional Themes")]),t("div",[e._v("Advanced SEO & Analytics")])])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Modal Welcome Prime")]),e._m(4),t("DemoSection",{attrs:{title:"Welcome Prime Modal",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("ModalComp",{attrs:{type:"welcome-prime",width:600,hasPrimeCloseButton:!0},on:{onClickPrime:e.testWelcomePrime}}),t("div",{staticClass:"button-container button-container--left"},[t("Button",{attrs:{variation:"default",title:"modal welcome prime"},on:{click:function(i){return e.$modal.show("modal-welcome-prime")}}})],1)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Welcome Prime")]),e._m(5),t("DemoSection",{attrs:{title:"Welcome Prime",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("WelcomePrime",{staticClass:"welcome-prime",on:{onClickPrime:e.testClick}})]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Modal Prime Intro")]),e._m(6),t("DemoSection",{attrs:{title:"Prime Intro Modal",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("ModalComp",{attrs:{type:"prime-intro",width:680,hasPrimeCloseButton:!0},on:{onClickPrime:e.testPrimeIntro}}),t("div",{staticClass:"button-container button-container--left"},[t("Button",{attrs:{variation:"default",title:"Modal Prime Intro"},on:{click:function(i){return e.$modal.show("modal-prime-intro")}}})],1)]},proxy:!0}])})],1)])},E=[function(){var n=this,e=n._self._c;return n._self._setupProxy,e("div",{staticClass:"section"},[e("h1",[n._v("Prime Components")])])},function(){var n=this,e=n._self._c;return n._self._setupProxy,e("pre",[e("code",[n._v(`import { Badge } from "streamlabs-beaker"

@Component({
  components: {
    Badge
  }
})`)])])},function(){var n=this,e=n._self._c;return n._self._setupProxy,e("pre",[e("code",[n._v(`import { PrimeSection } from "streamlabs-beaker"

@Component({
  components: {
    PrimeSection
  }
})`)])])},function(){var n=this,e=n._self._c;return n._self._setupProxy,e("pre",[e("code",[n._v(`import { NavCallToAction } from "streamlabs-beaker"

@Component({
  components: {
    NavCallToAction
  }
})`)])])},function(){var n=this,e=n._self._c;return n._self._setupProxy,e("pre",[e("code",[n._v(`import { ModalComp } from "streamlabs-beaker"

@Component({
  components: {
    ModalComp
  }
})`)])])},function(){var n=this,e=n._self._c;return n._self._setupProxy,e("pre",[e("code",[n._v(`import { WelcomePrime } from "streamlabs-beaker"

@Component({
  components: {
    WelcomePrime
  }
})`)])])},function(){var n=this,e=n._self._c;return n._self._setupProxy,e("pre",[e("code",[n._v(`import { ModalComp } from "streamlabs-beaker"

@Component({
  components: {
    ModalComp
  }
})`)])])}],H=f(u,j,E,!1,null,"f6af387c",null,null);const ee=H.exports;export{ee as default};
//# sourceMappingURL=Prime.876f9922.js.map

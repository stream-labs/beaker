var y=Object.defineProperty;var S=(e,o,t)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var c=(e,o,t)=>(S(e,typeof o!="symbol"?o+"":o,t),t);import{g as w,C as h,V as g,n as x}from"./index-e8bb31bb.js";import{A as C}from"./Accordion-79d22a9d.js";import{D as b}from"./DemoSection-b2dfe451.js";import{U as A,S as L}from"./SSProSimulator-d84d4f1f.js";const P=`<template>
  <div>
    <div class="section">
      <h1>Creator Sites Components</h1>

      <pre><code>import { SSProSimulator, UrlBar } from 'streamlabs-beaker';

components: {
  SSProSimulator,
  UrlBar
}</code></pre>
    </div>

    <div class="section">
      <h2>Creator Sites Simulator</h2>

      <DemoSection title="Creator Sites Simulator" :code="demoCode">
        <template #components>
          <SSProSimulator :username="username" :domain="domain" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
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
            <td>domain</td>
            <td>string</td>
            <td>-</td>
            <td>Domain name for the Url Bar.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>
              "https://live.kickstarter.com/images/avatar/medium/avatars4.png"
            </td>
            <td>Set this to users platform icon.</td>
          </tr>
          <tr>
            <td>username</td>
            <td>string</td>
            <td>"Awkward_Raccoon"</td>
            <td>Set this to users platform username.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>URL Bar</h2>

      <DemoSection title="URL Bar" :code="demoCode">
        <template #components>
          <UrlBar :domain="domain" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
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
            <td>domain</td>
            <td>string</td>
            <td>-</td>
            <td>Domain name for the Url Bar.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Creator Sites Layout Picker</h2>

      <DemoSection title="Layout Picker" :code="demoCode">
        <template #components>
          <CSLayoutPicker>
            <div
              slot="layouts"
              v-for="layout in webLayouts"
              :key="layout.id"
              class="s-cs-layout-picker__layout"
            >
              <div>
                <img :src="layout.src" />
              </div>
            </div>
          </CSLayoutPicker>
        </template>
      </DemoSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import CreatorSitesCode from "./CreatorSites.vue?raw";
import CSLayoutPicker from "./../components/CSLayoutPicker.vue";
import DemoSection from "./../components/DemoSection.vue";
import SSProSimulator from "./../components/SSProSimulator.vue";
import UrlBar from "./../components/UrlBar.vue";

@Component({
  components: {
    Accordion,
    CSLayoutPicker,
    DemoSection,
    UrlBar,
    SSProSimulator
  }
})
export default class CreatorSitesDemo extends Vue {
  demoCode = CreatorSitesCode;
  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";

  domain = "morganleeeeeeeeeee.com";

  webLayouts = [
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    }
  ];
}
<\/script>

<style lang="less" scoped>
.s-cs-layout-picker__layouts-bar {
  .s-cs-layout-picker__layout:last-child {
    &:before {
      display: none;
    }
  }
}

.s-cs-layout-picker__layout {
  position: relative;

  &:before {
    content: "";
    height: 32px;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.08);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: -16px;
  }
}

.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
`;var k={exports:{}};(function(e,o){function t(n){return typeof n.value!="function"?(console.warn("[Vue-click-outside:] provided expression",n.expression,"is not a function."),!1):!0}function r(n,s){if(!n||!s)return!1;for(var a=0,p=s.length;a<p;a++)try{if(n.contains(s[a]))return!0;if(s[a].contains(n))return!1}catch{return!1}return!1}function i(n){return typeof n.componentInstance<"u"&&n.componentInstance.$isServer}e.exports={bind:function(n,s,a){if(!t(s))return;function p(d){if(a.context){var m=d.path||d.composedPath&&d.composedPath();m&&m.length>0&&m.unshift(d.target),!(n.contains(d.target)||r(a.context.popupItem,m))&&n.__vueClickOutside__.callback(d)}}n.__vueClickOutside__={handler:p,callback:s.value};const v="ontouchstart"in document.documentElement?"touchstart":"click";!i(a)&&document.addEventListener(v,p)},update:function(n,s){t(s)&&(n.__vueClickOutside__.callback=s.value)},unbind:function(n,s,a){const p="ontouchstart"in document.documentElement?"touchstart":"click";!i(a)&&n.__vueClickOutside__&&document.removeEventListener(p,n.__vueClickOutside__.handler),delete n.__vueClickOutside__}}})(k);var D=k.exports;const U=w(D);var B=Object.defineProperty,O=Object.getOwnPropertyDescriptor,j=(e,o,t,r)=>{for(var i=r>1?void 0:r?O(o,t):o,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(r?s(o,t,i):s(i))||i);return r&&i&&B(o,t,i),i};let u=class extends g{constructor(){super(...arguments);c(this,"addLayout",!0);c(this,"chooseLayout",!1)}showChooseLayout(){this.chooseLayout=!0,this.addLayout=!1}showAddLayout(){this.chooseLayout=!1,this.addLayout=!0}closeChooseLayout(){this.chooseLayout=!1,this.addLayout=!0}};u=j([h({directives:{ClickOutside:U}})],u);var $=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"s-cs-layout-picker"},[e.addLayout?t("div",{staticClass:"s-cs-layout-picker__add-bar",on:{click:e.showChooseLayout}},[t("i",{staticClass:"icon-add"})]):e._e(),e.chooseLayout?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.showAddLayout,expression:"showAddLayout"}],staticClass:"s-cs-layout-picker__layouts-bar"},[e._t("layouts")],2):e._e()])},E=[];const f={};var R=x(u,$,E,!1,V,null,null,null);function V(e){for(let o in f)this[o]=f[o]}const T=function(){return R.exports}();var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,M=(e,o,t,r)=>{for(var i=r>1?void 0:r?H(o,t):o,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(r?s(o,t,i):s(i))||i);return r&&i&&F(o,t,i),i};let l=class extends g{constructor(){super(...arguments);c(this,"demoCode",P);c(this,"username","morganleee");c(this,"icon","https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg");c(this,"domain","morganleeeeeeeeeee.com");c(this,"webLayouts",[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"}])}};l=M([h({components:{Accordion:C,CSLayoutPicker:T,DemoSection:b,UrlBar:A,SSProSimulator:L}})],l);var z=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._m(0),t("div",{staticClass:"section"},[t("h2",[e._v("Creator Sites Simulator")]),t("DemoSection",{attrs:{title:"Creator Sites Simulator",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("SSProSimulator",{attrs:{username:e.username,domain:e.domain}})]},proxy:!0}])})],1),e._m(1),t("div",{staticClass:"section"},[t("h2",[e._v("URL Bar")]),t("DemoSection",{attrs:{title:"URL Bar",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("UrlBar",{attrs:{domain:e.domain}})]},proxy:!0}])})],1),e._m(2),t("div",{staticClass:"section"},[t("h2",[e._v("Creator Sites Layout Picker")]),t("DemoSection",{attrs:{title:"Layout Picker",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("CSLayoutPicker",e._l(e.webLayouts,function(r){return t("div",{key:r.id,staticClass:"s-cs-layout-picker__layout",attrs:{slot:"layouts"},slot:"layouts"},[t("div",[t("img",{attrs:{src:r.src}})])])}),0)]},proxy:!0}])})],1)])},I=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"section"},[t("h1",[e._v("Creator Sites Components")]),t("pre",[t("code",[e._v(`import { SSProSimulator, UrlBar } from 'streamlabs-beaker';

components: {
  SSProSimulator,
  UrlBar
}`)])])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"section"},[t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("domain")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("Domain name for the Url Bar.")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("string")]),t("td",[e._v(' "https://live.kickstarter.com/images/avatar/medium/avatars4.png" ')]),t("td",[e._v("Set this to users platform icon.")])]),t("tr",[t("td",[e._v("username")]),t("td",[e._v("string")]),t("td",[e._v('"Awkward_Raccoon"')]),t("td",[e._v("Set this to users platform username.")])])])])])},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"section"},[t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("domain")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("Domain name for the Url Bar.")])])])])])}];const _={};var q=x(l,z,I,!1,G,"13a1e468",null,null);function G(e){for(let o in _)this[o]=_[o]}const Z=function(){return q.exports}();export{Z as default};
//# sourceMappingURL=CreatorSites-fab90a92.js.map

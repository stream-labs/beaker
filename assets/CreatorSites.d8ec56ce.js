var x=Object.defineProperty;var k=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var c=(e,t,o)=>(k(e,typeof t!="symbol"?t+"":t,o),o);import{C as f,V as _,n as h}from"./index.4fb8a6cb.js";import{A as y}from"./Accordion.09c82396.js";import{D as S}from"./DemoSection.79ee11c0.js";import{U as w,S as C}from"./SSProSimulator.bb0379a3.js";const b=`<template>
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
`;var g={exports:{}};(function(e,t){function o(n){return typeof n.value!="function"?(console.warn("[Vue-click-outside:] provided expression",n.expression,"is not a function."),!1):!0}function r(n,s){if(!n||!s)return!1;for(var a=0,p=s.length;a<p;a++)try{if(n.contains(s[a]))return!0;if(s[a].contains(n))return!1}catch{return!1}return!1}function i(n){return typeof n.componentInstance<"u"&&n.componentInstance.$isServer}e.exports={bind:function(n,s,a){if(!o(s))return;function p(d){if(!!a.context){var m=d.path||d.composedPath&&d.composedPath();m&&m.length>0&&m.unshift(d.target),!(n.contains(d.target)||r(a.context.popupItem,m))&&n.__vueClickOutside__.callback(d)}}n.__vueClickOutside__={handler:p,callback:s.value};const v="ontouchstart"in document.documentElement?"touchstart":"click";!i(a)&&document.addEventListener(v,p)},update:function(n,s){o(s)&&(n.__vueClickOutside__.callback=s.value)},unbind:function(n,s,a){const p="ontouchstart"in document.documentElement?"touchstart":"click";!i(a)&&n.__vueClickOutside__&&document.removeEventListener(p,n.__vueClickOutside__.handler),delete n.__vueClickOutside__}}})(g);const A=g.exports;var P=Object.defineProperty,L=Object.getOwnPropertyDescriptor,D=(e,t,o,r)=>{for(var i=r>1?void 0:r?L(t,o):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(r?s(t,o,i):s(i))||i);return r&&i&&P(t,o,i),i};let u=class extends _{constructor(){super(...arguments);c(this,"addLayout",!0);c(this,"chooseLayout",!1)}showChooseLayout(){this.chooseLayout=!0,this.addLayout=!1}showAddLayout(){this.chooseLayout=!1,this.addLayout=!0}closeChooseLayout(){this.chooseLayout=!1,this.addLayout=!0}};u=D([f({directives:{ClickOutside:A}})],u);var U=function(){var t=this,o=t._self._c;return t._self._setupProxy,o("div",{staticClass:"s-cs-layout-picker"},[t.addLayout?o("div",{staticClass:"s-cs-layout-picker__add-bar",on:{click:t.showChooseLayout}},[o("i",{staticClass:"icon-add"})]):t._e(),t.chooseLayout?o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.showAddLayout,expression:"showAddLayout"}],staticClass:"s-cs-layout-picker__layouts-bar"},[t._t("layouts")],2):t._e()])},B=[],O=h(u,U,B,!1,null,null,null,null);const j=O.exports;var R=Object.defineProperty,$=Object.getOwnPropertyDescriptor,V=(e,t,o,r)=>{for(var i=r>1?void 0:r?$(t,o):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(i=(r?s(t,o,i):s(i))||i);return r&&i&&R(t,o,i),i};let l=class extends _{constructor(){super(...arguments);c(this,"demoCode",b);c(this,"username","morganleee");c(this,"icon","https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg");c(this,"domain","morganleeeeeeeeeee.com");c(this,"webLayouts",[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"}])}};l=V([f({components:{Accordion:y,CSLayoutPicker:j,DemoSection:S,UrlBar:w,SSProSimulator:C}})],l);var E=function(){var t=this,o=t._self._c;return t._self._setupProxy,o("div",[t._m(0),o("div",{staticClass:"section"},[o("h2",[t._v("Creator Sites Simulator")]),o("DemoSection",{attrs:{title:"Creator Sites Simulator",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[o("SSProSimulator",{attrs:{username:t.username,domain:t.domain}})]},proxy:!0}])})],1),t._m(1),o("div",{staticClass:"section"},[o("h2",[t._v("URL Bar")]),o("DemoSection",{attrs:{title:"URL Bar",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[o("UrlBar",{attrs:{domain:t.domain}})]},proxy:!0}])})],1),t._m(2),o("div",{staticClass:"section"},[o("h2",[t._v("Creator Sites Layout Picker")]),o("DemoSection",{attrs:{title:"Layout Picker",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[o("CSLayoutPicker",t._l(t.webLayouts,function(r){return o("div",{key:r.id,staticClass:"s-cs-layout-picker__layout",attrs:{slot:"layouts"},slot:"layouts"},[o("div",[o("img",{attrs:{src:r.src}})])])}),0)]},proxy:!0}])})],1)])},T=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[e._v("Creator Sites Components")]),t("pre",[t("code",[e._v(`import { SSProSimulator, UrlBar } from 'streamlabs-beaker';

components: {
  SSProSimulator,
  UrlBar
}`)])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"section"},[t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("domain")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("Domain name for the Url Bar.")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("string")]),t("td",[e._v(' "https://live.kickstarter.com/images/avatar/medium/avatars4.png" ')]),t("td",[e._v("Set this to users platform icon.")])]),t("tr",[t("td",[e._v("username")]),t("td",[e._v("string")]),t("td",[e._v('"Awkward_Raccoon"')]),t("td",[e._v("Set this to users platform username.")])])])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"section"},[t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("domain")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("Domain name for the Url Bar.")])])])])])}],F=h(l,E,T,!1,null,"0a925046",null,null);const J=F.exports;export{J as default};
//# sourceMappingURL=CreatorSites.d8ec56ce.js.map

var l=Object.defineProperty;var r=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var c=(e,n,t)=>(r(e,typeof n!="symbol"?n+"":n,t),t);import{C as v,V as p,n as m}from"./index.4fb8a6cb.js";import{A as u}from"./Accordion.09c82396.js";import{D as f}from"./DemoSection.79ee11c0.js";const _=`<template>
  <div>
    <div class="section">
      <h1>Accordions</h1>

      <pre><code>Import { Accordion } from 'streamlabs-beaker';

components: {
  Accordion
}</code></pre>
    </div>

    <!-- Default Settings -->
    <div class="section">
      <h3>Default Settings</h3>
      <DemoSection title="Default Settings" :code="demoCode">
        <template #components>
          <div @click="openAccordion(true)">Open Accordion</div>
          <div @click="openAccordion(false)">Close Accordion</div>

          <Accordion
            opened-title="Hide Content"
            closed-title="Show Content"
            v-model="isOpened"
          >
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <!-- Set to be open -->
    <div class="section">
      <h3>Set to be open</h3>
      <DemoSection title="Set to be open" :code="demoCode">
        <template #components>
          <Accordion
            opened-title="Hide Content"
            closed-title="Show Content"
            :isOpened="true"
          >
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <!-- Alternative - No Border -->
    <div class="section">
      <h3>Alternative - No Border</h3>
      <DemoSection title="Alternative - No Border" :code="demoCode">
        <template #components>
          <Accordion
            opened-title="Hide Content"
            closed-title="Show Content"
            :noBorder="true"
          >
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <!-- Accordion within an Accordion -->
    <div class="section">
      <h3>Accordion within an Accordion</h3>
      <DemoSection title="Accordion within an Accordion" :code="demoCode">
        <template #components>
          <Accordion
            opened-title="Hide Inner Accordion"
            closed-title="Show Inner Accordion"
          >
            <div slot="content">
              <div class="section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>

              <Accordion
                opened-title="Hide Content"
                closed-title="Show Content"
                v-model="isOpened"
              >
                <div slot="content">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              </Accordion>
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <!-- Variant - Left Navigation -->
    <div class="section">
      <h3>Variant - Left Navigation</h3>
      <DemoSection title="Left Navigation" :code="demoCode">
        <template #components>
          <Accordion :leftNav="true">
            <div slot="title">Left Navigation</div>
            <div slot="content">
              <div class="fake-nav">
                <a href="#" class="fake-nav-item">
                  <div class="fake-nav-icon">
                    <i class="icon-community"></i>
                  </div>
                  <div class="fake-nav-title">Nav Item</div>
                </a>
                <a href="#" class="fake-nav-item">
                  <div class="fake-nav-icon">
                    <i class="icon-dashboard"></i>
                  </div>
                  <div class="fake-nav-title">Styling Handled By</div>
                </a>
                <a href="#" class="fake-nav-item">
                  <div class="fake-nav-icon">
                    <i class="icon-earnings"></i>
                  </div>
                  <div class="fake-nav-title">Slot and navigation.less</div>
                </a>
              </div>
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h3>Open/Close Icon</h3>
      <DemoSection title="Open/Close Settings" :code="demoCode">
        <template #components>
          <Accordion opened-title="Hide Content" closed-title="Show Content">
            <template #open-close-icon="{isOpen}">
              <transition name="fadeFast" mode="out-in">
                <i v-if="!isOpen" key="open" class="icon-down" />
                <i v-else key="close" class="icon-back" />
              </transition>
            </template>
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Accordion>
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
            <td>v-model</td>
            <td>boolean</td>
            <td>null</td>
            <td>Use to sync accordion being open/closed</td>
          </tr>
          <tr>
            <td>openedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>Title to display when accordion is open</td>
          </tr>
          <tr>
            <td>closedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>Title to display when accordion is closed</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>null</td>
            <td>(Optional) Overrides both open and closed titles</td>
          </tr>
          <tr>
            <td>isOpened</td>
            <td>boolean</td>
            <td>false</td>
            <td>Have the accordion open by default</td>
          </tr>
          <tr>
            <td>noBorder</td>
            <td>boolean</td>
            <td>false</td>
            <td>Alternative style with no border or padding</td>
          </tr>
          <tr>
            <td>leftNav</td>
            <td>boolean</td>
            <td>false</td>
            <td>Alternative style for use in Left Navigation</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import AccordionCode from "./Accordions.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    Accordion,
    DemoSection
  }
})
export default class Accordions extends Vue {
  demoCode = AccordionCode;
  isOpened: boolean | null = true;

  openAccordion(bool) {
    this.isOpened = bool;
  }
}
<\/script>

<style lang="less">
@import (reference) "./../styles/Imports";

.fake-nav {
  width: 300px;
  display: flex;
  flex-direction: column;

  &-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 32px;
    text-decoration: none;
  }

  &-icon {
    color: @dark-2;
    .margin-right(1);
  }

  &-title {
    color: @dark-2;
    font-weight: @medium;
    font-size: 14px;
  }
}

.night {
  .fake-nav {
    &-icon,
    &-title {
      color: @white;
    }
  }
}
</style>
`;var h=Object.defineProperty,C=Object.getOwnPropertyDescriptor,A=(e,n,t,o)=>{for(var i=o>1?void 0:o?C(n,t):n,d=e.length-1,s;d>=0;d--)(s=e[d])&&(i=(o?s(n,t,i):s(i))||i);return o&&i&&h(n,t,i),i};let a=class extends p{constructor(){super(...arguments);c(this,"demoCode",_);c(this,"isOpened",!0)}openAccordion(n){this.isOpened=n}};a=A([v({components:{Accordion:u,DemoSection:f}})],a);var S=function(){var n=this,t=n._self._c;return n._self._setupProxy,t("div",[n._m(0),t("div",{staticClass:"section"},[t("h3",[n._v("Default Settings")]),t("DemoSection",{attrs:{title:"Default Settings",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("div",{on:{click:function(o){return n.openAccordion(!0)}}},[n._v("Open Accordion")]),t("div",{on:{click:function(o){return n.openAccordion(!1)}}},[n._v("Close Accordion")]),t("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content"},model:{value:n.isOpened,callback:function(o){n.isOpened=o},expression:"isOpened"}},[t("div",{attrs:{slot:"content"},slot:"content"},[n._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h3",[n._v("Set to be open")]),t("DemoSection",{attrs:{title:"Set to be open",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content",isOpened:!0}},[t("div",{attrs:{slot:"content"},slot:"content"},[n._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h3",[n._v("Alternative - No Border")]),t("DemoSection",{attrs:{title:"Alternative - No Border",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content",noBorder:!0}},[t("div",{attrs:{slot:"content"},slot:"content"},[n._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h3",[n._v("Accordion within an Accordion")]),t("DemoSection",{attrs:{title:"Accordion within an Accordion",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Accordion",{attrs:{"opened-title":"Hide Inner Accordion","closed-title":"Show Inner Accordion"}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("div",{staticClass:"section"},[n._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),t("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content"},model:{value:n.isOpened,callback:function(o){n.isOpened=o},expression:"isOpened"}},[t("div",{attrs:{slot:"content"},slot:"content"},[n._v(" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ")])])],1)])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h3",[n._v("Variant - Left Navigation")]),t("DemoSection",{attrs:{title:"Left Navigation",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Accordion",{attrs:{leftNav:!0}},[t("div",{attrs:{slot:"title"},slot:"title"},[n._v("Left Navigation")]),t("div",{attrs:{slot:"content"},slot:"content"},[t("div",{staticClass:"fake-nav"},[t("a",{staticClass:"fake-nav-item",attrs:{href:"#"}},[t("div",{staticClass:"fake-nav-icon"},[t("i",{staticClass:"icon-community"})]),t("div",{staticClass:"fake-nav-title"},[n._v("Nav Item")])]),t("a",{staticClass:"fake-nav-item",attrs:{href:"#"}},[t("div",{staticClass:"fake-nav-icon"},[t("i",{staticClass:"icon-dashboard"})]),t("div",{staticClass:"fake-nav-title"},[n._v("Styling Handled By")])]),t("a",{staticClass:"fake-nav-item",attrs:{href:"#"}},[t("div",{staticClass:"fake-nav-icon"},[t("i",{staticClass:"icon-earnings"})]),t("div",{staticClass:"fake-nav-title"},[n._v("Slot and navigation.less")])])])])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h3",[n._v("Open/Close Icon")]),t("DemoSection",{attrs:{title:"Open/Close Settings",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content"},scopedSlots:n._u([{key:"open-close-icon",fn:function({isOpen:o}){return[t("transition",{attrs:{name:"fadeFast",mode:"out-in"}},[o?t("i",{key:"close",staticClass:"icon-back"}):t("i",{key:"open",staticClass:"icon-down"})])]}}])},[t("div",{attrs:{slot:"content"},slot:"content"},[n._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])]},proxy:!0}])})],1),n._m(1)])},g=[function(){var e=this,n=e._self._c;return e._self._setupProxy,n("div",{staticClass:"section"},[n("h1",[e._v("Accordions")]),n("pre",[n("code",[e._v(`Import { Accordion } from 'streamlabs-beaker';

components: {
  Accordion
}`)])])])},function(){var e=this,n=e._self._c;return e._self._setupProxy,n("div",{staticClass:"section"},[n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[e._v("Prop")]),n("th",[e._v("Type")]),n("th",[e._v("Default")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("v-model")]),n("td",[e._v("boolean")]),n("td",[e._v("null")]),n("td",[e._v("Use to sync accordion being open/closed")])]),n("tr",[n("td",[e._v("openedTitle")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("Title to display when accordion is open")])]),n("tr",[n("td",[e._v("closedTitle")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("Title to display when accordion is closed")])]),n("tr",[n("td",[e._v("title")]),n("td",[e._v("string")]),n("td",[e._v("null")]),n("td",[e._v("(Optional) Overrides both open and closed titles")])]),n("tr",[n("td",[e._v("isOpened")]),n("td",[e._v("boolean")]),n("td",[e._v("false")]),n("td",[e._v("Have the accordion open by default")])]),n("tr",[n("td",[e._v("noBorder")]),n("td",[e._v("boolean")]),n("td",[e._v("false")]),n("td",[e._v("Alternative style with no border or padding")])]),n("tr",[n("td",[e._v("leftNav")]),n("td",[e._v("boolean")]),n("td",[e._v("false")]),n("td",[e._v("Alternative style for use in Left Navigation")])])])])])}],y=m(a,S,g,!1,null,null,null,null);const O=y.exports;export{O as default};
//# sourceMappingURL=Accordions.adb5413a.js.map

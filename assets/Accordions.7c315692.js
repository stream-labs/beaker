var r=Object.defineProperty;var v=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var c=(t,e,n)=>(v(t,typeof e!="symbol"?e+"":e,n),n);import{C as p,V as m,n as u}from"./index.17a864f5.js";import{A as f}from"./Accordion.a5b0018d.js";import{D as _}from"./DemoSection.a0f0b33e.js";const h=`<template>
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
`;var C=Object.defineProperty,A=Object.getOwnPropertyDescriptor,S=(t,e,n,o)=>{for(var i=o>1?void 0:o?A(e,n):e,d=t.length-1,s;d>=0;d--)(s=t[d])&&(i=(o?s(e,n,i):s(i))||i);return o&&i&&C(e,n,i),i};let a=class extends m{constructor(){super(...arguments);c(this,"demoCode",h);c(this,"isOpened",!0)}openAccordion(e){this.isOpened=e}};a=S([p({components:{Accordion:f,DemoSection:_}})],a);var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"section"},[n("h3",[t._v("Default Settings")]),n("DemoSection",{attrs:{title:"Default Settings",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("div",{on:{click:function(o){return t.openAccordion(!0)}}},[t._v("Open Accordion")]),n("div",{on:{click:function(o){return t.openAccordion(!1)}}},[t._v("Close Accordion")]),n("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content"},model:{value:t.isOpened,callback:function(o){t.isOpened=o},expression:"isOpened"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h3",[t._v("Set to be open")]),n("DemoSection",{attrs:{title:"Set to be open",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content",isOpened:!0}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h3",[t._v("Alternative - No Border")]),n("DemoSection",{attrs:{title:"Alternative - No Border",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content",noBorder:!0}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h3",[t._v("Accordion within an Accordion")]),n("DemoSection",{attrs:{title:"Accordion within an Accordion",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Accordion",{attrs:{"opened-title":"Hide Inner Accordion","closed-title":"Show Inner Accordion"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"section"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),n("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content"},model:{value:t.isOpened,callback:function(o){t.isOpened=o},expression:"isOpened"}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ")])])],1)])]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h3",[t._v("Variant - Left Navigation")]),n("DemoSection",{attrs:{title:"Left Navigation",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Accordion",{attrs:{leftNav:!0}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v("Left Navigation")]),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"fake-nav"},[n("a",{staticClass:"fake-nav-item",attrs:{href:"#"}},[n("div",{staticClass:"fake-nav-icon"},[n("i",{staticClass:"icon-community"})]),n("div",{staticClass:"fake-nav-title"},[t._v("Nav Item")])]),n("a",{staticClass:"fake-nav-item",attrs:{href:"#"}},[n("div",{staticClass:"fake-nav-icon"},[n("i",{staticClass:"icon-dashboard"})]),n("div",{staticClass:"fake-nav-title"},[t._v("Styling Handled By")])]),n("a",{staticClass:"fake-nav-item",attrs:{href:"#"}},[n("div",{staticClass:"fake-nav-icon"},[n("i",{staticClass:"icon-earnings"})]),n("div",{staticClass:"fake-nav-title"},[t._v("Slot and navigation.less")])])])])])]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h3",[t._v("Open/Close Icon")]),n("DemoSection",{attrs:{title:"Open/Close Settings",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Accordion",{attrs:{"opened-title":"Hide Content","closed-title":"Show Content"},scopedSlots:t._u([{key:"open-close-icon",fn:function(o){var i=o.isOpen;return[n("transition",{attrs:{name:"fadeFast",mode:"out-in"}},[i?n("i",{key:"close",staticClass:"icon-back"}):n("i",{key:"open",staticClass:"icon-down"})])]}}])},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])]},proxy:!0}])})],1),t._m(1)])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("h1",[t._v("Accordions")]),n("pre",[n("code",[t._v(`Import { Accordion } from 'streamlabs-beaker';

components: {
  Accordion
}`)])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[t._v("Prop")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("v-model")]),n("td",[t._v("boolean")]),n("td",[t._v("null")]),n("td",[t._v("Use to sync accordion being open/closed")])]),n("tr",[n("td",[t._v("openedTitle")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("Title to display when accordion is open")])]),n("tr",[n("td",[t._v("closedTitle")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("Title to display when accordion is closed")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("string")]),n("td",[t._v("null")]),n("td",[t._v("(Optional) Overrides both open and closed titles")])]),n("tr",[n("td",[t._v("isOpened")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v("Have the accordion open by default")])]),n("tr",[n("td",[t._v("noBorder")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v("Alternative style with no border or padding")])]),n("tr",[n("td",[t._v("leftNav")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v("Alternative style for use in Left Navigation")])])])])])}];const l={};var b=u(a,g,y,!1,k,null,null,null);function k(t){for(let e in l)this[e]=l[e]}const N=function(){return b.exports}();export{N as default};
//# sourceMappingURL=Accordions.7c315692.js.map

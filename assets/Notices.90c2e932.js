var f=Object.defineProperty;var T=(t,e,o)=>e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var i=(t,e,o)=>(T(t,typeof e!="symbol"?e+"":e,o),o);import{C as v,P as a,V as _,n as w}from"./index.17a864f5.js";import{D as m}from"./DemoSection.a0f0b33e.js";import{B as y}from"./Button.5177b229.js";import"./Accordion.a5b0018d.js";const N=`<template>
  <div>
    <div class="section">
      <h1>Notices</h1>
      <p>This is used to point out new locations or features</p>
    </div>
    <div class="section">
      <h2>Tooltip Notice</h2>

      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <TooltipNotice
            v-if="showTooltipNotice"
            title="Defaults"
            desc="All your favorite widgets, just with a new view."
            @handle-tooltip="closeTooltip"
          />

          <TooltipNotice
            v-if="showTooltipNotice"
            title="Top arrow"
            desc="All your favorite widgets, just with a new view."
            :arrowPosition="'top'"
            :hasButton="false"
            @handle-tooltip="closeTooltip"
          />

          <TooltipNotice
            v-if="showTooltipNotice"
            title="Custom button title"
            desc="All your favorite widgets, just with a new view."
            :buttonTitle="'Get started'"
            @handle-tooltip="closeTooltip"
          />

          <TooltipNotice
            v-if="showTooltipNotice"
            title="Custom width"
            desc="All your favorite widgets, just with a new view."
            :width="300"
            @handle-tooltip="closeTooltip"
          />

          <TooltipNotice
            v-if="showTooltipNotice"
            title="Secondary Action"
            desc="All your favorite widgets, just with a new view."
            :hasSecondaryAction="true"
            secondaryActionTitle="No thanks"
            @handle-tooltip="alertTooltip"
            @handle-tooltip-secondary="closeTooltip"
          />
        </template>
      </DemoSection>

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
            <td>arrowPosition</td>
            <td>string</td>
            <td>'left'</td>
            <td>
              Side to put the arrow on. Options are
              <code>left</code> and
              <code>top</code>
            </td>
          </tr>

          <tr>
            <td>buttonTitle</td>
            <td>string</td>
            <td>'Got It'</td>
            <td>Button text</td>
          </tr>

          <tr>
            <td>hasButton</td>
            <td>boolean</td>
            <td>true</td>
            <td>Having a button is optional</td>
          </tr>

          <tr>
            <td>hasSecondaryAction</td>
            <td>boolean</td>
            <td>false</td>
            <td>Have a second action option</td>
          </tr>

          <tr>
            <td>secondaryActionTitle</td>
            <td>string</td>
            <td>'Learn more'</td>
            <td>Title for secondary action</td>
          </tr>

          <tr>
            <td>width</td>
            <td>number</td>
            <td>200</td>
            <td>Change the width of the tooltip</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import NoticesCode from "./Notices.vue?raw";
import TooltipNotice from "./../components/TooltipNotice.vue";

@Component({
  components: {
    DemoSection,
    TooltipNotice
  }
})
export default class Notices extends Vue {
  demoCode = NoticesCode;
  showTooltipNotice = true;

  alertTooltip() {
    window.alert("tooltip clicked");
  }

  closeTooltip() {
    this.showTooltipNotice = false;
  }
}
<\/script>

<style lang="less" scoped>
::v-deep .s-demo-section__content {
  height: 330px;

  .s-tooltip-notice {
    &:nth-child(1) {
      top: 0px;
      left: 0px;
    }

    &:nth-child(2) {
      top: 0;
      left: 250px;
    }

    &:nth-child(3) {
      top: 0;
      left: 500px;
    }

    &:nth-child(4) {
      top: 169px;
      left: 0;
    }

    &:nth-child(5) {
      top: 169px;
      left: 350px;
    }
  }
}
</style>
`;var C=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(t,e,o,l)=>{for(var n=l>1?void 0:l?b(e,o):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(n=(l?d(e,o,n):d(n))||n);return l&&n&&C(e,o,n),n};let s=class extends _{constructor(){super(...arguments);i(this,"title");i(this,"buttonTitle");i(this,"secondaryActionTitle");i(this,"desc");i(this,"arrowPosition");i(this,"hasButton");i(this,"hasSecondaryAction");i(this,"width")}clickHandler(){this.$emit("handle-tooltip")}secondaryClickHandler(){this.$emit("handle-tooltip-secondary")}get arrowClasses(){let e=[];return this.arrowPosition&&e.push(`s-tooltip-notice__arrow--${this.arrowPosition}`),e}};r([a({required:!0})],s.prototype,"title",2);r([a({default:"Got it"})],s.prototype,"buttonTitle",2);r([a({default:"Learn More"})],s.prototype,"secondaryActionTitle",2);r([a({required:!0})],s.prototype,"desc",2);r([a({default:"left"})],s.prototype,"arrowPosition",2);r([a({default:!0})],s.prototype,"hasButton",2);r([a({default:!1})],s.prototype,"hasSecondaryAction",2);r([a({default:200})],s.prototype,"width",2);s=r([v({components:{Button:y}})],s);var g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"s-tooltip-notice",style:{width:t.width+"px"}},[o("div",{staticClass:"s-tooltip-notice-content"},[o("i",{staticClass:"icon-dropdown s-tooltip-notice__arrow",class:t.arrowClasses}),o("h3",[t._v(t._s(t.title))]),o("p",[t._v(t._s(t.desc))]),t.hasButton?o("Button",{attrs:{title:t.buttonTitle,variation:"action",size:"small"},on:{click:t.clickHandler}}):t._e(),t.hasSecondaryAction?o("Button",{staticClass:"s-tooltip-notice__secondary-action",attrs:{title:t.secondaryActionTitle,variation:"link",size:"small"},on:{click:t.secondaryClickHandler}}):t._e()],1)])},A=[];const h={};var x=w(s,g,A,!1,S,null,null,null);function S(t){for(let e in h)this[e]=h[e]}const D=function(){return x.exports}();var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,j=(t,e,o,l)=>{for(var n=l>1?void 0:l?$(e,o):e,c=t.length-1,d;c>=0;c--)(d=t[c])&&(n=(l?d(e,o,n):d(n))||n);return l&&n&&P(e,o,n),n};let p=class extends _{constructor(){super(...arguments);i(this,"demoCode",N);i(this,"showTooltipNotice",!0)}alertTooltip(){window.alert("tooltip clicked")}closeTooltip(){this.showTooltipNotice=!1}};p=j([v({components:{DemoSection:m,TooltipNotice:D}})],p);var B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("div",{staticClass:"section"},[o("h2",[t._v("Tooltip Notice")]),o("DemoSection",{attrs:{title:"Default",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[t.showTooltipNotice?o("TooltipNotice",{attrs:{title:"Defaults",desc:"All your favorite widgets, just with a new view."},on:{"handle-tooltip":t.closeTooltip}}):t._e(),t.showTooltipNotice?o("TooltipNotice",{attrs:{title:"Top arrow",desc:"All your favorite widgets, just with a new view.",arrowPosition:"top",hasButton:!1},on:{"handle-tooltip":t.closeTooltip}}):t._e(),t.showTooltipNotice?o("TooltipNotice",{attrs:{title:"Custom button title",desc:"All your favorite widgets, just with a new view.",buttonTitle:"Get started"},on:{"handle-tooltip":t.closeTooltip}}):t._e(),t.showTooltipNotice?o("TooltipNotice",{attrs:{title:"Custom width",desc:"All your favorite widgets, just with a new view.",width:300},on:{"handle-tooltip":t.closeTooltip}}):t._e(),t.showTooltipNotice?o("TooltipNotice",{attrs:{title:"Secondary Action",desc:"All your favorite widgets, just with a new view.",hasSecondaryAction:!0,secondaryActionTitle:"No thanks"},on:{"handle-tooltip":t.alertTooltip,"handle-tooltip-secondary":t.closeTooltip}}):t._e()]},proxy:!0}])}),t._m(1)],1)])},O=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section"},[o("h1",[t._v("Notices")]),o("p",[t._v("This is used to point out new locations or features")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"docs-table"},[o("thead",[o("tr",[o("th",[t._v("Props")]),o("th",[t._v("Type")]),o("th",[t._v("Default")]),o("th",[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[t._v("arrowPosition")]),o("td",[t._v("string")]),o("td",[t._v("'left'")]),o("td",[t._v(" Side to put the arrow on. Options are "),o("code",[t._v("left")]),t._v(" and "),o("code",[t._v("top")])])]),o("tr",[o("td",[t._v("buttonTitle")]),o("td",[t._v("string")]),o("td",[t._v("'Got It'")]),o("td",[t._v("Button text")])]),o("tr",[o("td",[t._v("hasButton")]),o("td",[t._v("boolean")]),o("td",[t._v("true")]),o("td",[t._v("Having a button is optional")])]),o("tr",[o("td",[t._v("hasSecondaryAction")]),o("td",[t._v("boolean")]),o("td",[t._v("false")]),o("td",[t._v("Have a second action option")])]),o("tr",[o("td",[t._v("secondaryActionTitle")]),o("td",[t._v("string")]),o("td",[t._v("'Learn more'")]),o("td",[t._v("Title for secondary action")])]),o("tr",[o("td",[t._v("width")]),o("td",[t._v("number")]),o("td",[t._v("200")]),o("td",[t._v("Change the width of the tooltip")])])])])}];const u={};var H=w(p,B,O,!1,G,"1e8a3ca9",null,null);function G(t){for(let e in u)this[e]=u[e]}const k=function(){return H.exports}();export{k as default};
//# sourceMappingURL=Notices.90c2e932.js.map

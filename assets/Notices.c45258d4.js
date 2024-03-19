var v=Object.defineProperty;var w=(o,t,e)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var i=(o,t,e)=>(w(o,typeof t!="symbol"?t+"":t,e),e);import{C as _,P as a,V as h,n as u}from"./index.4fb8a6cb.js";import{D as f}from"./DemoSection.79ee11c0.js";import{B as T}from"./Button.b26dacc2.js";import"./Accordion.09c82396.js";const m=`<template>
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
`;var y=Object.defineProperty,N=Object.getOwnPropertyDescriptor,r=(o,t,e,l)=>{for(var n=l>1?void 0:l?N(t,e):t,d=o.length-1,c;d>=0;d--)(c=o[d])&&(n=(l?c(t,e,n):c(n))||n);return l&&n&&y(t,e,n),n};let s=class extends h{constructor(){super(...arguments);i(this,"title");i(this,"buttonTitle");i(this,"secondaryActionTitle");i(this,"desc");i(this,"arrowPosition");i(this,"hasButton");i(this,"hasSecondaryAction");i(this,"width")}clickHandler(){this.$emit("handle-tooltip")}secondaryClickHandler(){this.$emit("handle-tooltip-secondary")}get arrowClasses(){let t=[];return this.arrowPosition&&t.push(`s-tooltip-notice__arrow--${this.arrowPosition}`),t}};r([a({required:!0})],s.prototype,"title",2);r([a({default:"Got it"})],s.prototype,"buttonTitle",2);r([a({default:"Learn More"})],s.prototype,"secondaryActionTitle",2);r([a({required:!0})],s.prototype,"desc",2);r([a({default:"left"})],s.prototype,"arrowPosition",2);r([a({default:!0})],s.prototype,"hasButton",2);r([a({default:!1})],s.prototype,"hasSecondaryAction",2);r([a({default:200})],s.prototype,"width",2);s=r([_({components:{Button:T}})],s);var C=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"s-tooltip-notice",style:{width:t.width+"px"}},[e("div",{staticClass:"s-tooltip-notice-content"},[e("i",{staticClass:"icon-dropdown s-tooltip-notice__arrow",class:t.arrowClasses}),e("h3",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.desc))]),t.hasButton?e("Button",{attrs:{title:t.buttonTitle,variation:"action",size:"small"},on:{click:t.clickHandler}}):t._e(),t.hasSecondaryAction?e("Button",{staticClass:"s-tooltip-notice__secondary-action",attrs:{title:t.secondaryActionTitle,variation:"link",size:"small"},on:{click:t.secondaryClickHandler}}):t._e()],1)])},b=[],g=u(s,C,b,!1,null,null,null,null);const A=g.exports;var x=Object.defineProperty,P=Object.getOwnPropertyDescriptor,D=(o,t,e,l)=>{for(var n=l>1?void 0:l?P(t,e):t,d=o.length-1,c;d>=0;d--)(c=o[d])&&(n=(l?c(t,e,n):c(n))||n);return l&&n&&x(t,e,n),n};let p=class extends h{constructor(){super(...arguments);i(this,"demoCode",m);i(this,"showTooltipNotice",!0)}alertTooltip(){window.alert("tooltip clicked")}closeTooltip(){this.showTooltipNotice=!1}};p=D([_({components:{DemoSection:f,TooltipNotice:A}})],p);var S=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",[t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Tooltip Notice")]),e("DemoSection",{attrs:{title:"Default",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[t.showTooltipNotice?e("TooltipNotice",{attrs:{title:"Defaults",desc:"All your favorite widgets, just with a new view."},on:{"handle-tooltip":t.closeTooltip}}):t._e(),t.showTooltipNotice?e("TooltipNotice",{attrs:{title:"Top arrow",desc:"All your favorite widgets, just with a new view.",arrowPosition:"top",hasButton:!1},on:{"handle-tooltip":t.closeTooltip}}):t._e(),t.showTooltipNotice?e("TooltipNotice",{attrs:{title:"Custom button title",desc:"All your favorite widgets, just with a new view.",buttonTitle:"Get started"},on:{"handle-tooltip":t.closeTooltip}}):t._e(),t.showTooltipNotice?e("TooltipNotice",{attrs:{title:"Custom width",desc:"All your favorite widgets, just with a new view.",width:300},on:{"handle-tooltip":t.closeTooltip}}):t._e(),t.showTooltipNotice?e("TooltipNotice",{attrs:{title:"Secondary Action",desc:"All your favorite widgets, just with a new view.",hasSecondaryAction:!0,secondaryActionTitle:"No thanks"},on:{"handle-tooltip":t.alertTooltip,"handle-tooltip-secondary":t.closeTooltip}}):t._e()]},proxy:!0}])}),t._m(1)],1)])},j=[function(){var o=this,t=o._self._c;return o._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[o._v("Notices")]),t("p",[o._v("This is used to point out new locations or features")])])},function(){var o=this,t=o._self._c;return o._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[o._v("Props")]),t("th",[o._v("Type")]),t("th",[o._v("Default")]),t("th",[o._v("Description")])])]),t("tbody",[t("tr",[t("td",[o._v("arrowPosition")]),t("td",[o._v("string")]),t("td",[o._v("'left'")]),t("td",[o._v(" Side to put the arrow on. Options are "),t("code",[o._v("left")]),o._v(" and "),t("code",[o._v("top")])])]),t("tr",[t("td",[o._v("buttonTitle")]),t("td",[o._v("string")]),t("td",[o._v("'Got It'")]),t("td",[o._v("Button text")])]),t("tr",[t("td",[o._v("hasButton")]),t("td",[o._v("boolean")]),t("td",[o._v("true")]),t("td",[o._v("Having a button is optional")])]),t("tr",[t("td",[o._v("hasSecondaryAction")]),t("td",[o._v("boolean")]),t("td",[o._v("false")]),t("td",[o._v("Have a second action option")])]),t("tr",[t("td",[o._v("secondaryActionTitle")]),t("td",[o._v("string")]),t("td",[o._v("'Learn more'")]),t("td",[o._v("Title for secondary action")])]),t("tr",[t("td",[o._v("width")]),t("td",[o._v("number")]),t("td",[o._v("200")]),t("td",[o._v("Change the width of the tooltip")])])])])}],B=u(p,S,j,!1,null,"7a16a24d",null,null);const z=B.exports;export{z as default};
//# sourceMappingURL=Notices.c45258d4.js.map

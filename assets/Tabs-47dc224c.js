var x=Object.defineProperty;var g=(e,a,t)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var i=(e,a,t)=>(g(e,typeof a!="symbol"?a+"":a,t),t);import{W as S,C as m,P as l,V as _,n as T}from"./index-e8bb31bb.js";import{D as P}from"./DemoSection-b2dfe451.js";import{S as L}from"./ScrollNav-50761517.js";import{i as N}from"./ResizeObserver.es-0f9f8adb.js";import{P as O}from"./PaneDropdown-ade09637.js";import{e as A}from"./_baseClone-20eb31a7.js";import"./Accordion-79d22a9d.js";import"./vue-focus.common-5db36fb2.js";var z=1,R=4;function $(e){return A(e,z|R)}var E=Object.defineProperty,I=Object.getOwnPropertyDescriptor,u=(e,a,t,s)=>{for(var n=s>1?void 0:s?I(a,t):a,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(s?r(a,t,n):r(n))||n);return s&&n&&E(a,t,n),n};let d=class extends _{constructor(){super(...arguments);i(this,"tabs");i(this,"size");i(this,"selected");i(this,"className");i(this,"hideContent");i(this,"updateRoute");i(this,"$refs");i(this,"isMounted",!1);i(this,"tabsContainer",null);i(this,"canScroll",!1);i(this,"hasNext",!1);i(this,"hasPrev",!1);i(this,"scrollIncrement",100);i(this,"selectedTab","");i(this,"selectTabSize",{fontSize:this.tabSize})}onTabsChange(){this.$nextTick(()=>this.calculateScrolls())}get tabSize(){return this.size==="small"?"14px":this.size==="large"?"16px":"14px"}created(){window.addEventListener("resize",this.calculateScrolls)}destroyed(){window.removeEventListener("resize",this.calculateScrolls)}mounted(){this.isMounted=!0,this.tabsContainer=this.$refs.scrollable_tabs,this.calculateScrolls(),this.selected?this.selectedTab=this.selected:this.selectedTab=this.tabs[0].value}scrollLeft(){this.tabsContainer.scrollLeft=this.tabsContainer.scrollLeft-this.scrollIncrement}scrollRight(){this.tabsContainer.scrollLeft=this.tabsContainer.scrollLeft+this.scrollIncrement}calculateScrolls(){if(!this.isMounted)return!1;this.canScroll=this.tabsContainer.scrollWidth>this.tabsContainer.clientWidth,this.hasPrev=this.tabsContainer.scrollLeft>0;const t=this.tabsContainer.scrollWidth-(this.tabsContainer.scrollLeft+this.tabsContainer.clientWidth);this.hasNext=t>0}showTab(t){this.selectedTab=t,this.$emit("tab-selected",t)}};u([l()],d.prototype,"tabs",2);u([S("tabs",{deep:!0})],d.prototype,"onTabsChange",1);u([l()],d.prototype,"size",2);u([l()],d.prototype,"selected",2);u([l()],d.prototype,"className",2);u([l()],d.prototype,"hideContent",2);u([l({default:!0})],d.prototype,"updateRoute",2);d=u([m({})],d);var W=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"s-tabs-wrapper"},[t("div",{staticClass:"s-tabs-nav-wrapper"},[t("div",{staticClass:"s-tabs-nav",class:e.className},[e.hasPrev?t("div",{staticClass:"s-tabs-nav__control s-has-prev",on:{click:e.scrollLeft}},[t("i",{staticClass:"icon-back"})]):e._e(),t("div",{ref:"scrollable_tabs",staticClass:"s-tabs",class:{"s-has-next":e.hasNext,"s-has-prev":e.hasPrev},on:{scroll:e.calculateScrolls}},e._l(e.tabs,function(s){return t("div",{key:s.value,staticClass:"s-tab",class:{"is-active":s.value===e.selectedTab},style:e.selectTabSize,on:{click:function(n){return e.showTab(s.value)}}},[e.updateRoute?t("router-link",{staticClass:"s-tab-link",attrs:{to:`#/${s.value}`}},[s.icon?t("i",{class:`icon-${s.icon}`}):e._e(),e._v(" "+e._s(s.name)+" ")]):t("div",{staticClass:"s-tab-link"},[s.icon?t("i",{class:`icon-${s.icon}`}):e._e(),e._v(" "+e._s(s.name)+" ")])],1)}),0),e.hasNext?t("div",{staticClass:"s-tabs-nav__control s-has-next",on:{click:e.scrollRight}},[t("i",{staticClass:"icon-back"})]):e._e()])]),e.hideContent?e._e():t("div",{staticClass:"s-tab-content"},e._l(e.tabs,function(s,n){return t("div",{directives:[{name:"show",rawName:"v-show",value:s.value===e.selectedTab,expression:"tab.value === selectedTab"}],key:n},[e._t(s.value)],2)}),0)])},H=[];const y={};var M=T(d,W,H,!1,F,"7f74148e",null,null);function F(e){for(let a in y)this[a]=y[a]}const U=function(){return M.exports}();var j=Object.defineProperty,K=Object.getOwnPropertyDescriptor,b=(e,a,t,s)=>{for(var n=s>1?void 0:s?K(a,t):a,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(s?r(a,t,n):r(n))||n);return s&&n&&j(a,t,n),n};let c=class extends _{constructor(){super(...arguments);i(this,"tabs");i(this,"size");i(this,"selected");i(this,"className");i(this,"hideContent");i(this,"updateRoute");i(this,"$refs");i(this,"isMounted",!1);i(this,"hasHiddenTabs",!0);i(this,"hiddenTabFocused",!1);i(this,"modifiedTabs",[]);i(this,"dropdownIsActive",!1);i(this,"selectTabSize",{fontSize:this.tabSize});i(this,"prevWidth",0);i(this,"tabWidthsSet",!1);i(this,"tabsNav",null);i(this,"allTabElements",null)}get tabLinkTag(){return this.updateRoute?"router-link":"button"}get tabSize(){return this.size==="large"?"16px":"14px"}get hiddenTabs(){return this.modifiedTabs.filter(t=>t.hidden)}get activeTab(){return this.modifiedTabs.every(t=>!t.active)?this.selected||this.modifiedTabs[0].value:this.modifiedTabs.find(t=>t.active)}get hiddenActiveTab(){return this.hiddenTabs.find(t=>t.active)}mounted(){this.$refs.hiddenTabsDropdown.$el.addEventListener("focus",this.focusActiveTab),this.loadTabProperties(),this.isMounted=!0,this.tabsNav=this.$refs.tabsNav,this.$nextTick(()=>{if(this.selected){const t=this.modifiedTabs.find(s=>this.selected===s.value)||this.modifiedTabs[0];t.active=!0}this.allTabElements=this.tabsNav.querySelectorAll(".s-tabs__tab"),this.setTabWidths()}),this.$nextTick(()=>{this.setTabWidths(),this.loadResizeObserver()})}destroyed(){this.$refs.hiddenTabsDropdown.$el.removeEventListener("focus",this.focusActiveTab)}loadTabProperties(){this.modifiedTabs=$(this.tabs).map(t=>({...t,active:!1,hidden:!1,width:0}))}setTabWidths(){Array.from(this.tabsNav.querySelectorAll(".s-tabs__tab")).forEach((t,s)=>{this.$nextTick(()=>{let n=t.querySelector(".s-tabs__link");this.modifiedTabs[s].width=s!==this.modifiedTabs.length-1?n.offsetWidth+16:n.offsetWidth})})}loadResizeObserver(){new N(s=>{s.forEach(n=>{const{width:o,height:r}=n.contentRect;this.prevWidth!==o&&(this.$nextTick(()=>this.setHiddenTabs()),this.prevWidth=o)})}).observe(this.tabsNav)}setHiddenTabs(){if(!this.isMounted)return!1;this.hasHiddenTabs=!0,this.$nextTick(()=>{let s=Array.from(this.tabsNav.children).pop().offsetWidth;const n=this.tabsNav.offsetWidth;this.hasHiddenTabs=!1,this.modifiedTabs.forEach((o,r)=>{o.hidden=!1,n>=s+o.width&&!this.hasHiddenTabs?s+=o.width:(this.modifiedTabs[r].hidden=!0,this.hasHiddenTabs||(this.hasHiddenTabs=!0))}),this.modifiedTabs.some(o=>o.hidden)&&(this.hasHiddenTabs=!0)})}setTabOnKeyDown(t,s,n="RIGHT"){const o=this.$refs.hiddenTabsDropdown,r=this.modifiedTabs.findIndex(f=>s===f.value);let h=0;n==="LEFT"?h=r===0?this.modifiedTabs.length-1:r-1:h=r===this.modifiedTabs.length-1?0:r+1,this.togglePaneDropdown(this.modifiedTabs[r].hidden,this.modifiedTabs[h].hidden);let v=null;if(this.modifiedTabs[h].hidden){const f=this.hiddenTabs.findIndex(C=>this.modifiedTabs[h].value===C.value);let w=null;this.$nextTick(()=>{w=o.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link"),v=w[f]}),this.hiddenTabs[f]}else v=this.allTabElements[h].querySelector(".s-tabs__link");this.$nextTick(()=>{v.focus(),this.showTab(this.modifiedTabs[h])})}togglePaneDropdown(t,s){this.$refs.hiddenTabsDropdown,!(s&&this.dropdownIsActive)&&(s?(this.$refs.hiddenTabsDropdown.show(),this.openPaneDropdown()):this.closePaneDropdown())}openPaneDropdown(){this.dropdownIsActive=!0}closePaneDropdown(){this.$refs.hiddenTabsDropdown.hide(),this.dropdownIsActive=!1}showHiddenTabs(t){this.dropdownIsActive=t}tabLinkOptions(t){return{to:this.updateRoute?`#/${t}`:void 0}}blurPaneDropDown(){this.$nextTick(()=>{[...this.$refs.hiddenTabsDropdown.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link")].some(n=>document.activeElement===n)||(this.hiddenTabFocused=!1,this.closePaneDropdown())})}focusActiveTab(){if(this.openPaneDropdown(),this.$whatInput.ask("intent")==="keyboard"){const t=this.hiddenTabs.findIndex(n=>n.active),s=this.$refs.hiddenTabsDropdown;this.$nextTick(()=>{s.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link")[t].focus()})}}showTab(t){this.modifiedTabs.forEach(s=>s.active=!1),t.active=!0,this.$emit("tab-selected",t.value)}};b([l()],c.prototype,"tabs",2);b([l()],c.prototype,"size",2);b([l()],c.prototype,"selected",2);b([l()],c.prototype,"className",2);b([l()],c.prototype,"hideContent",2);b([l({default:!0})],c.prototype,"updateRoute",2);c=b([m({components:{PaneDropdown:O}})],c);var q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{ref:"tabsWrapper",staticClass:"s-tabs"},[t("div",{ref:"tabsNav",staticClass:"s-tabs__nav",class:e.className},[e._l(e.modifiedTabs,function(s){return t("div",{key:s.value,staticClass:"s-tabs__tab",class:{"is-active":s.active,"is-hidden":s.hidden},style:e.selectTabSize,attrs:{"aria-controls":`${s.value}-tab`},on:{click:function(n){return e.showTab(s)},keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&n.button!==0?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value,"LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value,"LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&n.button!==2?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value))}]}},[t(e.tabLinkTag,e._b({tag:"component",staticClass:"s-tabs__link",attrs:{to:`#/${s.value}`,tag:"button",tabindex:s.active?void 0:"-1"}},"component",e.tabLinkOptions(s.value),!1),[s.icon?t("i",{class:`icon-${s.icon}`}):e._e(),t("span",{staticClass:"s-tabs__title"},[e._v(e._s(s.name))])])],1)}),t("PaneDropdown",{directives:[{name:"show",rawName:"v-show",value:e.hasHiddenTabs,expression:"hasHiddenTabs"}],ref:"hiddenTabsDropdown",attrs:{menuAlign:"right",tabindex:e.hiddenActiveTab&&!e.hiddenTabFocused?0:-1}},[t("template",{slot:"title"},[e._v("More")]),e._l(e.hiddenTabs,function(s){return t("div",{key:`hidden-${s.value}`,class:{"is-active":s.active},on:{click:function(n){return e.showTab(s)},blur:e.blurPaneDropDown,focus:function(n){e.hiddenTabFocused=!0},keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&n.button!==0?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value,"LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value,"LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&n.button!==2?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value))}]}},[t(e.tabLinkTag,{tag:"component",staticClass:"s-tabs__link",attrs:{to:`#/${s.value}`,tag:"button",tabindex:s.active?void 0:"-1"}},[e._v(e._s(s.name))])],1)})],2)],2),e.hideContent?e._e():t("div",{staticClass:"s-tab-content"},e._l(e.modifiedTabs,function(s,n){return t("div",{directives:[{name:"show",rawName:"v-show",value:s.active,expression:"tab.active"}],key:n},[e._t(s.value)],2)}),0)])},G=[];const D={};var V=T(c,q,G,!1,B,"20741582",null,null);function B(e){for(let a in D)this[a]=D[a]}const Y=function(){return V.exports}(),J=`<template>
  <div>
    <h1>Tabs</h1>
    <p>Used for Tabs.</p>

    <pre><code>import { Tabs } from 'streamlabs-beaker';

components: {
  Tabs
}</code></pre>

    <div class="section">
      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <Tabs
            :tabs="tabs"
            size="small"
            :update-route="false"
            selected="advanced"
          >
            <div :slot="tab.value" v-for="tab in tabs" :key="tab.value">
              {{ tab.name }}
            </div>
          </Tabs>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <DemoSection title="New Tabs" :code="demoCode">
        <template #components>
          <TabsNew :tabs="tabs" size="small" selected="advanced">
            <div :slot="tab.value" v-for="tab in tabs" :key="tab.value">
              {{ tab.name }}
            </div>
          </TabsNew>
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
          <td>tabs</td>
          <td>array</td>
          <td>null</td>
          <td>
            tabs information to display. you can make array like below
            <br />
            <code
              >tabs = [ { name: "General", value: "general", icon: "information"
              }, ... ];</code
            >
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>string</td>
          <td>small</td>
          <td>text size of tabs. Options are "small" and "large"</td>
        </tr>
        <tr>
          <td>selected</td>
          <td>string</td>
          <td>null</td>
          <td>default selected tab</td>
        </tr>
        <tr>
          <td>updateRoute</td>
          <td>boolean</td>
          <td>true</td>
          <td>
            Updates current URL with "#/{selected Tab}". Set to false if you
            don't want to update the URL.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import ScrollNav from "./../components/ScrollNav.vue";
import Tabs from "./../components/Tabs.vue";
import TabsNew from "./../components/TabsNew.vue";
import TabsCode from "./Tabs.vue?raw";

@Component({
  components: {
    DemoSection,
    ScrollNav,
    Tabs,
    TabsNew
  }
})
export default class TabsDemo extends Vue {
  demoCode = TabsCode;
  tabs = [
    {
      name: "General",
      value: "general",
      icon: "information"
    },
    {
      name: "Advanced",
      value: "advanced",
      icon: ""
    },
    {
      name: "Account",
      value: "account",
      icon: ""
    },
    {
      name: "Integrations",
      value: "integrations",
      icon: ""
    },
    {
      name: "Payments",
      value: "payments",
      icon: ""
    },
    {
      name: "Donations",
      value: "donations",
      icon: ""
    },
    {
      name: "Subscriptions",
      value: "subscriptions",
      icon: ""
    },
    {
      name: "Preferences",
      value: "preferences",
      icon: ""
    },
    {
      name: "Apps",
      value: "apps",
      icon: ""
    },
    {
      name: "Merch",
      value: "merch",
      icon: ""
    },
    {
      name: "API",
      value: "api",
      icon: ""
    },
    {
      name: "Moderators",
      value: "moderators",
      icon: ""
    },
    {
      name: "Themes",
      value: "themes",
      icon: ""
    }
  ];
}
<\/script>
`;var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Z=(e,a,t,s)=>{for(var n=s>1?void 0:s?X(a,t):a,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(s?r(a,t,n):r(n))||n);return s&&n&&Q(a,t,n),n};let p=class extends _{constructor(){super(...arguments);i(this,"demoCode",J);i(this,"tabs",[{name:"General",value:"general",icon:"information"},{name:"Advanced",value:"advanced",icon:""},{name:"Account",value:"account",icon:""},{name:"Integrations",value:"integrations",icon:""},{name:"Payments",value:"payments",icon:""},{name:"Donations",value:"donations",icon:""},{name:"Subscriptions",value:"subscriptions",icon:""},{name:"Preferences",value:"preferences",icon:""},{name:"Apps",value:"apps",icon:""},{name:"Merch",value:"merch",icon:""},{name:"API",value:"api",icon:""},{name:"Moderators",value:"moderators",icon:""},{name:"Themes",value:"themes",icon:""}])}};p=Z([m({components:{DemoSection:P,ScrollNav:L,Tabs:U,TabsNew:Y}})],p);var ee=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v("Tabs")]),t("p",[e._v("Used for Tabs.")]),e._m(0),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Default",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Tabs",{attrs:{tabs:e.tabs,size:"small","update-route":!1,selected:"advanced"}},e._l(e.tabs,function(s){return t("div",{key:s.value,attrs:{slot:s.value},slot:s.value},[e._v(" "+e._s(s.name)+" ")])}),0)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"New Tabs",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("TabsNew",{attrs:{tabs:e.tabs,size:"small",selected:"advanced"}},e._l(e.tabs,function(s){return t("div",{key:s.value,attrs:{slot:s.value},slot:s.value},[e._v(" "+e._s(s.name)+" ")])}),0)]},proxy:!0}])})],1),e._m(1)])},te=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("pre",[t("code",[e._v(`import { Tabs } from 'streamlabs-beaker';

components: {
  Tabs
}`)])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("tabs")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v(" tabs information to display. you can make array like below "),t("br"),t("code",[e._v('tabs = [ { name: "General", value: "general", icon: "information" }, ... ];')])])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("string")]),t("td",[e._v("small")]),t("td",[e._v('text size of tabs. Options are "small" and "large"')])]),t("tr",[t("td",[e._v("selected")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("default selected tab")])]),t("tr",[t("td",[e._v("updateRoute")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v(` Updates current URL with "#/{selected Tab}". Set to false if you don't want to update the URL. `)])])])])}];const k={};var ne=T(p,ee,te,!1,se,null,null,null);function se(e){for(let a in k)this[a]=k[a]}const ve=function(){return ne.exports}();export{ve as default};
//# sourceMappingURL=Tabs-47dc224c.js.map

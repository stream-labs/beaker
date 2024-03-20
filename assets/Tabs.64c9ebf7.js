var C=Object.defineProperty;var x=(e,a,t)=>a in e?C(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var i=(e,a,t)=>(x(e,typeof a!="symbol"?a+"":a,t),t);import{W as g,C as p,P as l,V as m,n as _}from"./index.17a864f5.js";import{D as S}from"./DemoSection.a0f0b33e.js";import{S as P}from"./ScrollNav.71855475.js";import{i as L}from"./ResizeObserver.es.bd9ff68d.js";import{P as N}from"./PaneDropdown.49d716e1.js";import{e as O}from"./_baseClone.a3c057f3.js";import"./Accordion.a5b0018d.js";import"./vue-focus.common.5cd91eeb.js";var A=1,z=4;function R(e){return O(e,A|z)}var $=Object.defineProperty,E=Object.getOwnPropertyDescriptor,u=(e,a,t,s)=>{for(var n=s>1?void 0:s?E(a,t):a,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(s?r(a,t,n):r(n))||n);return s&&n&&$(a,t,n),n};let d=class extends m{constructor(){super(...arguments);i(this,"tabs");i(this,"size");i(this,"selected");i(this,"className");i(this,"hideContent");i(this,"updateRoute");i(this,"$refs");i(this,"isMounted",!1);i(this,"tabsContainer",null);i(this,"canScroll",!1);i(this,"hasNext",!1);i(this,"hasPrev",!1);i(this,"scrollIncrement",100);i(this,"selectedTab","");i(this,"selectTabSize",{fontSize:this.tabSize})}onTabsChange(){this.$nextTick(()=>this.calculateScrolls())}get tabSize(){return this.size==="small"?"14px":this.size==="large"?"16px":"14px"}created(){window.addEventListener("resize",this.calculateScrolls)}destroyed(){window.removeEventListener("resize",this.calculateScrolls)}mounted(){this.isMounted=!0,this.tabsContainer=this.$refs.scrollable_tabs,this.calculateScrolls(),this.selected?this.selectedTab=this.selected:this.selectedTab=this.tabs[0].value}scrollLeft(){this.tabsContainer.scrollLeft=this.tabsContainer.scrollLeft-this.scrollIncrement}scrollRight(){this.tabsContainer.scrollLeft=this.tabsContainer.scrollLeft+this.scrollIncrement}calculateScrolls(){if(!this.isMounted)return!1;this.canScroll=this.tabsContainer.scrollWidth>this.tabsContainer.clientWidth,this.hasPrev=this.tabsContainer.scrollLeft>0;const a=this.tabsContainer.scrollWidth-(this.tabsContainer.scrollLeft+this.tabsContainer.clientWidth);this.hasNext=a>0}showTab(a){this.selectedTab=a,this.$emit("tab-selected",a)}};u([l()],d.prototype,"tabs",2);u([g("tabs",{deep:!0})],d.prototype,"onTabsChange",1);u([l()],d.prototype,"size",2);u([l()],d.prototype,"selected",2);u([l()],d.prototype,"className",2);u([l()],d.prototype,"hideContent",2);u([l({default:!0})],d.prototype,"updateRoute",2);d=u([p({})],d);var I=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"s-tabs-wrapper"},[t("div",{staticClass:"s-tabs-nav-wrapper"},[t("div",{staticClass:"s-tabs-nav",class:e.className},[e.hasPrev?t("div",{staticClass:"s-tabs-nav__control s-has-prev",on:{click:e.scrollLeft}},[t("i",{staticClass:"icon-back"})]):e._e(),t("div",{ref:"scrollable_tabs",staticClass:"s-tabs",class:{"s-has-next":e.hasNext,"s-has-prev":e.hasPrev},on:{scroll:e.calculateScrolls}},e._l(e.tabs,function(s){return t("div",{key:s.value,staticClass:"s-tab",class:{"is-active":s.value===e.selectedTab},style:e.selectTabSize,on:{click:function(n){return e.showTab(s.value)}}},[e.updateRoute?t("router-link",{staticClass:"s-tab-link",attrs:{to:`#/${s.value}`}},[s.icon?t("i",{class:`icon-${s.icon}`}):e._e(),e._v(" "+e._s(s.name)+" ")]):t("div",{staticClass:"s-tab-link"},[s.icon?t("i",{class:`icon-${s.icon}`}):e._e(),e._v(" "+e._s(s.name)+" ")])],1)}),0),e.hasNext?t("div",{staticClass:"s-tabs-nav__control s-has-next",on:{click:e.scrollRight}},[t("i",{staticClass:"icon-back"})]):e._e()])]),e.hideContent?e._e():t("div",{staticClass:"s-tab-content"},e._l(e.tabs,function(s,n){return t("div",{directives:[{name:"show",rawName:"v-show",value:s.value===e.selectedTab,expression:"tab.value === selectedTab"}],key:n},[e._t(s.value)],2)}),0)])},W=[];const w={};var H=_(d,I,W,!1,M,"7f74148e",null,null);function M(e){for(let a in w)this[a]=w[a]}const F=function(){return H.exports}();var U=Object.defineProperty,j=Object.getOwnPropertyDescriptor,h=(e,a,t,s)=>{for(var n=s>1?void 0:s?j(a,t):a,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(s?r(a,t,n):r(n))||n);return s&&n&&U(a,t,n),n};let c=class extends m{constructor(){super(...arguments);i(this,"tabs");i(this,"size");i(this,"selected");i(this,"className");i(this,"hideContent");i(this,"updateRoute");i(this,"$refs");i(this,"isMounted",!1);i(this,"hasHiddenTabs",!0);i(this,"hiddenTabFocused",!1);i(this,"modifiedTabs",[]);i(this,"dropdownIsActive",!1);i(this,"selectTabSize",{fontSize:this.tabSize});i(this,"prevWidth",0);i(this,"tabWidthsSet",!1);i(this,"tabsNav",null);i(this,"allTabElements",null)}get tabLinkTag(){return this.updateRoute?"router-link":"button"}get tabSize(){return this.size==="large"?"16px":"14px"}get hiddenTabs(){return this.modifiedTabs.filter(a=>a.hidden)}get activeTab(){return this.modifiedTabs.every(a=>!a.active)?this.selected||this.modifiedTabs[0].value:this.modifiedTabs.find(a=>a.active)}get hiddenActiveTab(){return this.hiddenTabs.find(a=>a.active)}mounted(){this.$refs.hiddenTabsDropdown.$el.addEventListener("focus",this.focusActiveTab),this.loadTabProperties(),this.isMounted=!0,this.tabsNav=this.$refs.tabsNav,this.$nextTick(()=>{if(this.selected){const a=this.modifiedTabs.find(t=>this.selected===t.value)||this.modifiedTabs[0];a.active=!0}this.allTabElements=this.tabsNav.querySelectorAll(".s-tabs__tab"),this.setTabWidths()}),this.$nextTick(()=>{this.setTabWidths(),this.loadResizeObserver()})}destroyed(){this.$refs.hiddenTabsDropdown.$el.removeEventListener("focus",this.focusActiveTab)}loadTabProperties(){this.modifiedTabs=R(this.tabs).map(a=>({...a,active:!1,hidden:!1,width:0}))}setTabWidths(){Array.from(this.tabsNav.querySelectorAll(".s-tabs__tab")).forEach((a,t)=>{this.$nextTick(()=>{let s=a.querySelector(".s-tabs__link");this.modifiedTabs[t].width=t!==this.modifiedTabs.length-1?s.offsetWidth+16:s.offsetWidth})})}loadResizeObserver(){new L(t=>{t.forEach(s=>{const{width:n,height:o}=s.contentRect;this.prevWidth!==n&&(this.$nextTick(()=>this.setHiddenTabs()),this.prevWidth=n)})}).observe(this.tabsNav)}setHiddenTabs(){if(!this.isMounted)return!1;this.hasHiddenTabs=!0,this.$nextTick(()=>{let t=Array.from(this.tabsNav.children).pop().offsetWidth;const s=this.tabsNav.offsetWidth;this.hasHiddenTabs=!1,this.modifiedTabs.forEach((n,o)=>{n.hidden=!1,s>=t+n.width&&!this.hasHiddenTabs?t+=n.width:(this.modifiedTabs[o].hidden=!0,this.hasHiddenTabs||(this.hasHiddenTabs=!0))}),this.modifiedTabs.some(n=>n.hidden)&&(this.hasHiddenTabs=!0)})}setTabOnKeyDown(a,t,s="RIGHT"){const n=this.$refs.hiddenTabsDropdown,o=this.modifiedTabs.findIndex(b=>t===b.value);let r=0;s==="LEFT"?r=o===0?this.modifiedTabs.length-1:o-1:r=o===this.modifiedTabs.length-1?0:o+1,this.togglePaneDropdown(this.modifiedTabs[o].hidden,this.modifiedTabs[r].hidden);let f=null;if(this.modifiedTabs[r].hidden){const b=this.hiddenTabs.findIndex(k=>this.modifiedTabs[r].value===k.value);let T=null;this.$nextTick(()=>{T=n.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link"),f=T[b]}),this.hiddenTabs[b]}else f=this.allTabElements[r].querySelector(".s-tabs__link");this.$nextTick(()=>{f.focus(),this.showTab(this.modifiedTabs[r])})}togglePaneDropdown(a,t){this.$refs.hiddenTabsDropdown,!(t&&this.dropdownIsActive)&&(t?(this.$refs.hiddenTabsDropdown.show(),this.openPaneDropdown()):this.closePaneDropdown())}openPaneDropdown(){this.dropdownIsActive=!0}closePaneDropdown(){this.$refs.hiddenTabsDropdown.hide(),this.dropdownIsActive=!1}showHiddenTabs(a){this.dropdownIsActive=a}tabLinkOptions(a){return{to:this.updateRoute?`#/${a}`:void 0}}blurPaneDropDown(){this.$nextTick(()=>{[...this.$refs.hiddenTabsDropdown.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link")].some(s=>document.activeElement===s)||(this.hiddenTabFocused=!1,this.closePaneDropdown())})}focusActiveTab(){if(this.openPaneDropdown(),this.$whatInput.ask("intent")==="keyboard"){const a=this.hiddenTabs.findIndex(s=>s.active),t=this.$refs.hiddenTabsDropdown;this.$nextTick(()=>{t.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link")[a].focus()})}}showTab(a){this.modifiedTabs.forEach(t=>t.active=!1),a.active=!0,this.$emit("tab-selected",a.value)}};h([l()],c.prototype,"tabs",2);h([l()],c.prototype,"size",2);h([l()],c.prototype,"selected",2);h([l()],c.prototype,"className",2);h([l()],c.prototype,"hideContent",2);h([l({default:!0})],c.prototype,"updateRoute",2);c=h([p({components:{PaneDropdown:N}})],c);var K=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{ref:"tabsWrapper",staticClass:"s-tabs"},[t("div",{ref:"tabsNav",staticClass:"s-tabs__nav",class:e.className},[e._l(e.modifiedTabs,function(s){return t("div",{key:s.value,staticClass:"s-tabs__tab",class:{"is-active":s.active,"is-hidden":s.hidden},style:e.selectTabSize,attrs:{"aria-controls":`${s.value}-tab`},on:{click:function(n){return e.showTab(s)},keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&n.button!==0?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value,"LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value,"LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&n.button!==2?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value))}]}},[t(e.tabLinkTag,e._b({tag:"component",staticClass:"s-tabs__link",attrs:{to:`#/${s.value}`,tag:"button",tabindex:s.active?void 0:"-1"}},"component",e.tabLinkOptions(s.value),!1),[s.icon?t("i",{class:`icon-${s.icon}`}):e._e(),t("span",{staticClass:"s-tabs__title"},[e._v(e._s(s.name))])])],1)}),t("PaneDropdown",{directives:[{name:"show",rawName:"v-show",value:e.hasHiddenTabs,expression:"hasHiddenTabs"}],ref:"hiddenTabsDropdown",attrs:{menuAlign:"right",tabindex:e.hiddenActiveTab&&!e.hiddenTabFocused?0:-1}},[t("template",{slot:"title"},[e._v("More")]),e._l(e.hiddenTabs,function(s){return t("div",{key:`hidden-${s.value}`,class:{"is-active":s.active},on:{click:function(n){return e.showTab(s)},blur:e.blurPaneDropDown,focus:function(n){e.hiddenTabFocused=!0},keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&n.button!==0?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value,"LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"up",38,n.key,["Up","ArrowUp"])?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value,"LEFT"))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&n.button!==2?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"down",40,n.key,["Down","ArrowDown"])?null:(n.preventDefault(),e.setTabOnKeyDown(n,s.value))}]}},[t(e.tabLinkTag,{tag:"component",staticClass:"s-tabs__link",attrs:{to:`#/${s.value}`,tag:"button",tabindex:s.active?void 0:"-1"}},[e._v(e._s(s.name))])],1)})],2)],2),e.hideContent?e._e():t("div",{staticClass:"s-tab-content"},e._l(e.modifiedTabs,function(s,n){return t("div",{directives:[{name:"show",rawName:"v-show",value:s.active,expression:"tab.active"}],key:n},[e._t(s.value)],2)}),0)])},q=[];const y={};var G=_(c,K,q,!1,V,"20741582",null,null);function V(e){for(let a in y)this[a]=y[a]}const B=function(){return G.exports}(),Y=`<template>
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
`;var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(e,a,t,s)=>{for(var n=s>1?void 0:s?Q(a,t):a,o=e.length-1,r;o>=0;o--)(r=e[o])&&(n=(s?r(a,t,n):r(n))||n);return s&&n&&J(a,t,n),n};let v=class extends m{constructor(){super(...arguments);i(this,"demoCode",Y);i(this,"tabs",[{name:"General",value:"general",icon:"information"},{name:"Advanced",value:"advanced",icon:""},{name:"Account",value:"account",icon:""},{name:"Integrations",value:"integrations",icon:""},{name:"Payments",value:"payments",icon:""},{name:"Donations",value:"donations",icon:""},{name:"Subscriptions",value:"subscriptions",icon:""},{name:"Preferences",value:"preferences",icon:""},{name:"Apps",value:"apps",icon:""},{name:"Merch",value:"merch",icon:""},{name:"API",value:"api",icon:""},{name:"Moderators",value:"moderators",icon:""},{name:"Themes",value:"themes",icon:""}])}};v=X([p({components:{DemoSection:S,ScrollNav:P,Tabs:F,TabsNew:B}})],v);var Z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v("Tabs")]),t("p",[e._v("Used for Tabs.")]),e._m(0),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Default",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("Tabs",{attrs:{tabs:e.tabs,size:"small","update-route":!1,selected:"advanced"}},e._l(e.tabs,function(s){return t("div",{key:s.value,attrs:{slot:s.value},slot:s.value},[e._v(" "+e._s(s.name)+" ")])}),0)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"New Tabs",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("TabsNew",{attrs:{tabs:e.tabs,size:"small",selected:"advanced"}},e._l(e.tabs,function(s){return t("div",{key:s.value,attrs:{slot:s.value},slot:s.value},[e._v(" "+e._s(s.name)+" ")])}),0)]},proxy:!0}])})],1),e._m(1)])},ee=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("pre",[t("code",[e._v(`import { Tabs } from 'streamlabs-beaker';

components: {
  Tabs
}`)])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Prop")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("tabs")]),t("td",[e._v("array")]),t("td",[e._v("null")]),t("td",[e._v(" tabs information to display. you can make array like below "),t("br"),t("code",[e._v('tabs = [ { name: "General", value: "general", icon: "information" }, ... ];')])])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("string")]),t("td",[e._v("small")]),t("td",[e._v('text size of tabs. Options are "small" and "large"')])]),t("tr",[t("td",[e._v("selected")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("default selected tab")])]),t("tr",[t("td",[e._v("updateRoute")]),t("td",[e._v("boolean")]),t("td",[e._v("true")]),t("td",[e._v(` Updates current URL with "#/{selected Tab}". Set to false if you don't want to update the URL. `)])])])])}];const D={};var te=_(v,Z,ee,!1,ne,null,null,null);function ne(e){for(let a in D)this[a]=D[a]}const he=function(){return te.exports}();export{he as default};
//# sourceMappingURL=Tabs.64c9ebf7.js.map

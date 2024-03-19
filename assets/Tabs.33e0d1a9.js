var y=Object.defineProperty;var D=(a,e,s)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var i=(a,e,s)=>(D(a,typeof e!="symbol"?e+"":e,s),s);import{W as k,C as v,P as l,V as m,n as _}from"./index.4fb8a6cb.js";import{D as C}from"./DemoSection.79ee11c0.js";import{S as x}from"./ScrollNav.943a041d.js";import{i as g}from"./ResizeObserver.es.bd9ff68d.js";import{P as S}from"./PaneDropdown.6fe5e7fe.js";import{e as P}from"./_baseClone.a549c660.js";import"./Accordion.09c82396.js";import"./vue-focus.common.2dfcc992.js";var L=1,N=4;function O(a){return P(a,L|N)}var A=Object.defineProperty,z=Object.getOwnPropertyDescriptor,u=(a,e,s,n)=>{for(var t=n>1?void 0:n?z(e,s):e,o=a.length-1,r;o>=0;o--)(r=a[o])&&(t=(n?r(e,s,t):r(t))||t);return n&&t&&A(e,s,t),t};let d=class extends m{constructor(){super(...arguments);i(this,"tabs");i(this,"size");i(this,"selected");i(this,"className");i(this,"hideContent");i(this,"updateRoute");i(this,"$refs");i(this,"isMounted",!1);i(this,"tabsContainer",null);i(this,"canScroll",!1);i(this,"hasNext",!1);i(this,"hasPrev",!1);i(this,"scrollIncrement",100);i(this,"selectedTab","");i(this,"selectTabSize",{fontSize:this.tabSize})}onTabsChange(){this.$nextTick(()=>this.calculateScrolls())}get tabSize(){return this.size==="small"?"14px":this.size==="large"?"16px":"14px"}created(){window.addEventListener("resize",this.calculateScrolls)}destroyed(){window.removeEventListener("resize",this.calculateScrolls)}mounted(){this.isMounted=!0,this.tabsContainer=this.$refs.scrollable_tabs,this.calculateScrolls(),this.selected?this.selectedTab=this.selected:this.selectedTab=this.tabs[0].value}scrollLeft(){this.tabsContainer.scrollLeft=this.tabsContainer.scrollLeft-this.scrollIncrement}scrollRight(){this.tabsContainer.scrollLeft=this.tabsContainer.scrollLeft+this.scrollIncrement}calculateScrolls(){if(!this.isMounted)return!1;this.canScroll=this.tabsContainer.scrollWidth>this.tabsContainer.clientWidth,this.hasPrev=this.tabsContainer.scrollLeft>0;const e=this.tabsContainer.scrollWidth-(this.tabsContainer.scrollLeft+this.tabsContainer.clientWidth);this.hasNext=e>0}showTab(e){this.selectedTab=e,this.$emit("tab-selected",e)}};u([l()],d.prototype,"tabs",2);u([k("tabs",{deep:!0})],d.prototype,"onTabsChange",1);u([l()],d.prototype,"size",2);u([l()],d.prototype,"selected",2);u([l()],d.prototype,"className",2);u([l()],d.prototype,"hideContent",2);u([l({default:!0})],d.prototype,"updateRoute",2);d=u([v({})],d);var R=function(){var e=this,s=e._self._c;return e._self._setupProxy,s("div",{staticClass:"s-tabs-wrapper"},[s("div",{staticClass:"s-tabs-nav-wrapper"},[s("div",{staticClass:"s-tabs-nav",class:e.className},[e.hasPrev?s("div",{staticClass:"s-tabs-nav__control s-has-prev",on:{click:e.scrollLeft}},[s("i",{staticClass:"icon-back"})]):e._e(),s("div",{ref:"scrollable_tabs",staticClass:"s-tabs",class:{"s-has-next":e.hasNext,"s-has-prev":e.hasPrev},on:{scroll:e.calculateScrolls}},e._l(e.tabs,function(n){return s("div",{key:n.value,staticClass:"s-tab",class:{"is-active":n.value===e.selectedTab},style:e.selectTabSize,on:{click:function(t){return e.showTab(n.value)}}},[e.updateRoute?s("router-link",{staticClass:"s-tab-link",attrs:{to:`#/${n.value}`}},[n.icon?s("i",{class:`icon-${n.icon}`}):e._e(),e._v(" "+e._s(n.name)+" ")]):s("div",{staticClass:"s-tab-link"},[n.icon?s("i",{class:`icon-${n.icon}`}):e._e(),e._v(" "+e._s(n.name)+" ")])],1)}),0),e.hasNext?s("div",{staticClass:"s-tabs-nav__control s-has-next",on:{click:e.scrollRight}},[s("i",{staticClass:"icon-back"})]):e._e()])]),e.hideContent?e._e():s("div",{staticClass:"s-tab-content"},e._l(e.tabs,function(n,t){return s("div",{directives:[{name:"show",rawName:"v-show",value:n.value===e.selectedTab,expression:"tab.value === selectedTab"}],key:t},[e._t(n.value)],2)}),0)])},E=[],I=_(d,R,E,!1,null,"ef8c54fb",null,null);const W=I.exports;var H=Object.defineProperty,$=Object.getOwnPropertyDescriptor,h=(a,e,s,n)=>{for(var t=n>1?void 0:n?$(e,s):e,o=a.length-1,r;o>=0;o--)(r=a[o])&&(t=(n?r(e,s,t):r(t))||t);return n&&t&&H(e,s,t),t};let c=class extends m{constructor(){super(...arguments);i(this,"tabs");i(this,"size");i(this,"selected");i(this,"className");i(this,"hideContent");i(this,"updateRoute");i(this,"$refs");i(this,"isMounted",!1);i(this,"hasHiddenTabs",!0);i(this,"hiddenTabFocused",!1);i(this,"modifiedTabs",[]);i(this,"dropdownIsActive",!1);i(this,"selectTabSize",{fontSize:this.tabSize});i(this,"prevWidth",0);i(this,"tabWidthsSet",!1);i(this,"tabsNav",null);i(this,"allTabElements",null)}get tabLinkTag(){return this.updateRoute?"router-link":"button"}get tabSize(){return this.size==="large"?"16px":"14px"}get hiddenTabs(){return this.modifiedTabs.filter(e=>e.hidden)}get activeTab(){return this.modifiedTabs.every(e=>!e.active)?this.selected||this.modifiedTabs[0].value:this.modifiedTabs.find(e=>e.active)}get hiddenActiveTab(){return this.hiddenTabs.find(e=>e.active)}mounted(){this.$refs.hiddenTabsDropdown.$el.addEventListener("focus",this.focusActiveTab),this.loadTabProperties(),this.isMounted=!0,this.tabsNav=this.$refs.tabsNav,this.$nextTick(()=>{if(this.selected){const e=this.modifiedTabs.find(s=>this.selected===s.value)||this.modifiedTabs[0];e.active=!0}this.allTabElements=this.tabsNav.querySelectorAll(".s-tabs__tab"),this.setTabWidths()}),this.$nextTick(()=>{this.setTabWidths(),this.loadResizeObserver()})}destroyed(){this.$refs.hiddenTabsDropdown.$el.removeEventListener("focus",this.focusActiveTab)}loadTabProperties(){this.modifiedTabs=O(this.tabs).map(e=>({...e,active:!1,hidden:!1,width:0}))}setTabWidths(){Array.from(this.tabsNav.querySelectorAll(".s-tabs__tab")).forEach((e,s)=>{this.$nextTick(()=>{let n=e.querySelector(".s-tabs__link");this.modifiedTabs[s].width=s!==this.modifiedTabs.length-1?n.offsetWidth+16:n.offsetWidth})})}loadResizeObserver(){new g(s=>{s.forEach(n=>{const{width:t,height:o}=n.contentRect;this.prevWidth!==t&&(this.$nextTick(()=>this.setHiddenTabs()),this.prevWidth=t)})}).observe(this.tabsNav)}setHiddenTabs(){if(!this.isMounted)return!1;this.hasHiddenTabs=!0,this.$nextTick(()=>{let s=Array.from(this.tabsNav.children).pop().offsetWidth;const n=this.tabsNav.offsetWidth;this.hasHiddenTabs=!1,this.modifiedTabs.forEach((t,o)=>{t.hidden=!1,n>=s+t.width&&!this.hasHiddenTabs?s+=t.width:(this.modifiedTabs[o].hidden=!0,this.hasHiddenTabs||(this.hasHiddenTabs=!0))}),this.modifiedTabs.some(t=>t.hidden)&&(this.hasHiddenTabs=!0)})}setTabOnKeyDown(e,s,n="RIGHT"){const t=this.$refs.hiddenTabsDropdown,o=this.modifiedTabs.findIndex(b=>s===b.value);let r=0;n==="LEFT"?r=o===0?this.modifiedTabs.length-1:o-1:r=o===this.modifiedTabs.length-1?0:o+1,this.togglePaneDropdown(this.modifiedTabs[o].hidden,this.modifiedTabs[r].hidden);let f=null;if(this.modifiedTabs[r].hidden){const b=this.hiddenTabs.findIndex(w=>this.modifiedTabs[r].value===w.value);let T=null;this.$nextTick(()=>{T=t.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link"),f=T[b]}),this.hiddenTabs[b]}else f=this.allTabElements[r].querySelector(".s-tabs__link");this.$nextTick(()=>{f.focus(),this.showTab(this.modifiedTabs[r])})}togglePaneDropdown(e,s){this.$refs.hiddenTabsDropdown,!(s&&this.dropdownIsActive)&&(s?(this.$refs.hiddenTabsDropdown.show(),this.openPaneDropdown()):this.closePaneDropdown())}openPaneDropdown(){this.dropdownIsActive=!0}closePaneDropdown(){this.$refs.hiddenTabsDropdown.hide(),this.dropdownIsActive=!1}showHiddenTabs(e){this.dropdownIsActive=e}tabLinkOptions(e){return{to:this.updateRoute?`#/${e}`:void 0}}blurPaneDropDown(){this.$nextTick(()=>{[...this.$refs.hiddenTabsDropdown.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link")].some(n=>document.activeElement===n)||(this.hiddenTabFocused=!1,this.closePaneDropdown())})}focusActiveTab(){if(this.openPaneDropdown(),this.$whatInput.ask("intent")==="keyboard"){const e=this.hiddenTabs.findIndex(n=>n.active),s=this.$refs.hiddenTabsDropdown;this.$nextTick(()=>{s.$el.querySelectorAll(".s-pane-dropdown__list .s-tabs__link")[e].focus()})}}showTab(e){this.modifiedTabs.forEach(s=>s.active=!1),e.active=!0,this.$emit("tab-selected",e.value)}};h([l()],c.prototype,"tabs",2);h([l()],c.prototype,"size",2);h([l()],c.prototype,"selected",2);h([l()],c.prototype,"className",2);h([l()],c.prototype,"hideContent",2);h([l({default:!0})],c.prototype,"updateRoute",2);c=h([v({components:{PaneDropdown:S}})],c);var F=function(){var e=this,s=e._self._c;return e._self._setupProxy,s("div",{ref:"tabsWrapper",staticClass:"s-tabs"},[s("div",{ref:"tabsNav",staticClass:"s-tabs__nav",class:e.className},[e._l(e.modifiedTabs,function(n){return s("div",{key:n.value,staticClass:"s-tabs__tab",class:{"is-active":n.active,"is-hidden":n.hidden},style:e.selectTabSize,attrs:{"aria-controls":`${n.value}-tab`},on:{click:function(t){return e.showTab(n)},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&t.button!==0?null:(t.preventDefault(),e.setTabOnKeyDown(t,n.value,"LEFT"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.setTabOnKeyDown(t,n.value,"LEFT"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])||"button"in t&&t.button!==2?null:(t.preventDefault(),e.setTabOnKeyDown(t,n.value))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.setTabOnKeyDown(t,n.value))}]}},[s(e.tabLinkTag,e._b({tag:"component",staticClass:"s-tabs__link",attrs:{to:`#/${n.value}`,tag:"button",tabindex:n.active?void 0:"-1"}},"component",e.tabLinkOptions(n.value),!1),[n.icon?s("i",{class:`icon-${n.icon}`}):e._e(),s("span",{staticClass:"s-tabs__title"},[e._v(e._s(n.name))])])],1)}),s("PaneDropdown",{directives:[{name:"show",rawName:"v-show",value:e.hasHiddenTabs,expression:"hasHiddenTabs"}],ref:"hiddenTabsDropdown",attrs:{menuAlign:"right",tabindex:e.hiddenActiveTab&&!e.hiddenTabFocused?0:-1}},[s("template",{slot:"title"},[e._v("More")]),e._l(e.hiddenTabs,function(n){return s("div",{key:`hidden-${n.value}`,class:{"is-active":n.active},on:{click:function(t){return e.showTab(n)},blur:e.blurPaneDropDown,focus:function(t){e.hiddenTabFocused=!0},keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&t.button!==0?null:(t.preventDefault(),e.setTabOnKeyDown(t,n.value,"LEFT"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.setTabOnKeyDown(t,n.value,"LEFT"))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])||"button"in t&&t.button!==2?null:(t.preventDefault(),e.setTabOnKeyDown(t,n.value))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.setTabOnKeyDown(t,n.value))}]}},[s(e.tabLinkTag,{tag:"component",staticClass:"s-tabs__link",attrs:{to:`#/${n.value}`,tag:"button",tabindex:n.active?void 0:"-1"}},[e._v(e._s(n.name))])],1)})],2)],2),e.hideContent?e._e():s("div",{staticClass:"s-tab-content"},e._l(e.modifiedTabs,function(n,t){return s("div",{directives:[{name:"show",rawName:"v-show",value:n.active,expression:"tab.active"}],key:t},[e._t(n.value)],2)}),0)])},M=[],U=_(c,F,M,!1,null,"2f0ad77f",null,null);const K=U.exports,q=`<template>
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
`;var G=Object.defineProperty,j=Object.getOwnPropertyDescriptor,V=(a,e,s,n)=>{for(var t=n>1?void 0:n?j(e,s):e,o=a.length-1,r;o>=0;o--)(r=a[o])&&(t=(n?r(e,s,t):r(t))||t);return n&&t&&G(e,s,t),t};let p=class extends m{constructor(){super(...arguments);i(this,"demoCode",q);i(this,"tabs",[{name:"General",value:"general",icon:"information"},{name:"Advanced",value:"advanced",icon:""},{name:"Account",value:"account",icon:""},{name:"Integrations",value:"integrations",icon:""},{name:"Payments",value:"payments",icon:""},{name:"Donations",value:"donations",icon:""},{name:"Subscriptions",value:"subscriptions",icon:""},{name:"Preferences",value:"preferences",icon:""},{name:"Apps",value:"apps",icon:""},{name:"Merch",value:"merch",icon:""},{name:"API",value:"api",icon:""},{name:"Moderators",value:"moderators",icon:""},{name:"Themes",value:"themes",icon:""}])}};p=V([v({components:{DemoSection:C,ScrollNav:x,Tabs:W,TabsNew:K}})],p);var B=function(){var e=this,s=e._self._c;return e._self._setupProxy,s("div",[s("h1",[e._v("Tabs")]),s("p",[e._v("Used for Tabs.")]),e._m(0),s("div",{staticClass:"section"},[s("DemoSection",{attrs:{title:"Default",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[s("Tabs",{attrs:{tabs:e.tabs,size:"small","update-route":!1,selected:"advanced"}},e._l(e.tabs,function(n){return s("div",{key:n.value,attrs:{slot:n.value},slot:n.value},[e._v(" "+e._s(n.name)+" ")])}),0)]},proxy:!0}])})],1),s("div",{staticClass:"section"},[s("DemoSection",{attrs:{title:"New Tabs",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[s("TabsNew",{attrs:{tabs:e.tabs,size:"small",selected:"advanced"}},e._l(e.tabs,function(n){return s("div",{key:n.value,attrs:{slot:n.value},slot:n.value},[e._v(" "+e._s(n.name)+" ")])}),0)]},proxy:!0}])})],1),e._m(1)])},Y=[function(){var a=this,e=a._self._c;return a._self._setupProxy,e("pre",[e("code",[a._v(`import { Tabs } from 'streamlabs-beaker';

components: {
  Tabs
}`)])])},function(){var a=this,e=a._self._c;return a._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[a._v("Prop")]),e("th",[a._v("Type")]),e("th",[a._v("Default")]),e("th",[a._v("Description")])])]),e("tbody",[e("tr",[e("td",[a._v("tabs")]),e("td",[a._v("array")]),e("td",[a._v("null")]),e("td",[a._v(" tabs information to display. you can make array like below "),e("br"),e("code",[a._v('tabs = [ { name: "General", value: "general", icon: "information" }, ... ];')])])]),e("tr",[e("td",[a._v("size")]),e("td",[a._v("string")]),e("td",[a._v("small")]),e("td",[a._v('text size of tabs. Options are "small" and "large"')])]),e("tr",[e("td",[a._v("selected")]),e("td",[a._v("string")]),e("td",[a._v("null")]),e("td",[a._v("default selected tab")])]),e("tr",[e("td",[a._v("updateRoute")]),e("td",[a._v("boolean")]),e("td",[a._v("true")]),e("td",[a._v(` Updates current URL with "#/{selected Tab}". Set to false if you don't want to update the URL. `)])])])])}],J=_(p,B,Y,!1,null,null,null,null);const oe=J.exports;export{oe as default};
//# sourceMappingURL=Tabs.33e0d1a9.js.map

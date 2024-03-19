var l=Object.defineProperty;var p=(n,e,t)=>e in n?l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(p(n,typeof e!="symbol"?e+"":e,t),t);import{C as h,V as c,n as m}from"./index.4fb8a6cb.js";import{D as v}from"./DemoSection.79ee11c0.js";import{P as u}from"./PaneDropdown.6fe5e7fe.js";import"./Accordion.09c82396.js";import"./vue-focus.common.2dfcc992.js";const _=`<template>
  <div>
    <div class="section">
      <h1>Pane Dropdowns</h1>
      <p>Dropdown menu used on Streamlabs.com</p>

      <pre><code>import { PaneDropdown } from 'streamlabs-beaker';

components: {
  PaneDropdown
}</code></pre>
    </div>

    <div class="section">
      <h2>Using Slots</h2>
      <DemoSection title="With Dropdown Icon" :code="demoCode">
        <template #components>
          <PaneDropdown :close-on-select="false">
            <span slot="title">Trending</span>
            <PaneDropdown :menuAlign="'center'">
              <span slot="title">Inner Dropdown</span>
              <a href="#">Item 1</a>
              <a href="#">Item 2</a>
              <a href="#">Item 3</a>
            </PaneDropdown>
            <hr />
            <a href="#"> <i class="icon-leaderboard-4"></i>Most Installed </a>
            <a href="#"> <i class="icon-loyalty"></i>Newly Added </a>
            <a href="#"> <i class="icon-graph"></i>Trending </a>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Menu Align</h2>

      <DemoSection title="Menu Align" :code="demoCode">
        <template #components>
          <div class="row">
            <PaneDropdown menu-align="right" :hover-option="true">
              <span slot="title">Right Dropdown Menu</span>
              <a href="#">Hey I'm a longer link here</a>
              <a href="#">Let's see how this looks</a>
              <a href="#">I'm in a pane dropdown aligned to the right</a>
            </PaneDropdown>
          </div>

          <div class="row">
            <PaneDropdown menu-align="center">
              <span slot="title">Center Dropdown Menu</span>
              <a href="#">Hey I'm a longer link here</a>
              <a href="#">Let's see how this looks</a>
              <a href="#">I'm in a pane dropdown aligned to the right</a>
            </PaneDropdown>
          </div>

          <div class="row">
            <PaneDropdown open-above="top">
              <span slot="title">Top Dropdown Menu</span>
              <a href="#">Hey I'm a longer link here</a>
              <a href="#">Let's see how this looks</a>
              <a href="#">I'm in a pane dropdown aligned to the right</a>
            </PaneDropdown>
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Custom Dropdown</h2>

      <DemoSection title="Custom Dropdown" :code="demoCode">
        <template #components>
          <PaneDropdown :custom="true">
            <span slot="title">Custom Dropdown Menu</span>
            <div>
              hey watsup
              <br />
              <strong>put whatever you want in here</strong>
            </div>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Relative Menu</h2>

      <DemoSection title="Relative Menu" :code="demoCode">
        <template #components>
          <PaneDropdown :relativeMenu="true">
            <span slot="title">Relative Menu</span>
            <a href="#">Hey I'm a longer link here</a>
            <a href="#">Let's see how this looks</a>
            <a href="#">I'm in a pane dropdown aligned to the right</a>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Simple Menu</h2>

      <DemoSection title="Simple Menu" :code="demoCode">
        <template #components>
          <PaneDropdown :relativeMenu="true" :simpleMenu="true">
            <span slot="title">Simple Menu</span>
            <a href="#">Hey I'm a longer link here</a>
            <a href="#">Let's see how this looks</a>
            <a href="#">I'm in a pane dropdown aligned to the right</a>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <table class="docs-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dropdownIcon</td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Show or hide dropdown icon.</td>
          </tr>
          <tr>
            <td>menuAlign</td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>
              Default will align the menu to the left side of the toggle. Use
              <code>right</code> or <code>center</code> to align the dropdown
              menu to the right or center of its toggle.
            </td>
          </tr>
          <tr>
            <td>openAbove</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>
              Set to true if you want menu to open above. Default is to open
              below title.
            </td>
          </tr>
          <tr>
            <td>closeOnSelect</td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Close the dropdown when a link is clicked.</td>
          </tr>
          <tr>
            <td>autoHeight</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>No max height</td>
          </tr>
          <tr>
            <td>relativeMenu</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>
              Change the menu from position absolute to relative so it pushes
              the content below it down.
            </td>
          </tr>
          <tr>
            <td>simpleMenu</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>Removes menues bg colors, box shadow and paddinga.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoSection from "./../components/DemoSection.vue";
import PaneDropdown from "./../components/PaneDropdown.vue";
import PaneDropdownsCode from "./PaneDropdowns.vue?raw";

@Component({
  components: {
    DemoSection,
    PaneDropdown
  }
})
export default class Dropdowns extends Vue {
  demoCode = PaneDropdownsCode;
}
<\/script>
`;var f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,D=(n,e,t,a)=>{for(var o=a>1?void 0:a?w(e,t):e,r=n.length-1,s;r>=0;r--)(s=n[r])&&(o=(a?s(e,t,o):s(o))||o);return a&&o&&f(e,t,o),o};let d=class extends c{constructor(){super(...arguments);i(this,"demoCode",_)}};d=D([h({components:{DemoSection:v,PaneDropdown:u}})],d);var g=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[e._m(0),t("div",{staticClass:"section"},[t("h2",[e._v("Using Slots")]),t("DemoSection",{attrs:{title:"With Dropdown Icon",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("PaneDropdown",{attrs:{"close-on-select":!1}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Trending")]),t("PaneDropdown",{attrs:{menuAlign:"center"}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Inner Dropdown")]),t("a",{attrs:{href:"#"}},[e._v("Item 1")]),t("a",{attrs:{href:"#"}},[e._v("Item 2")]),t("a",{attrs:{href:"#"}},[e._v("Item 3")])]),t("hr"),t("a",{attrs:{href:"#"}},[t("i",{staticClass:"icon-leaderboard-4"}),e._v("Most Installed ")]),t("a",{attrs:{href:"#"}},[t("i",{staticClass:"icon-loyalty"}),e._v("Newly Added ")]),t("a",{attrs:{href:"#"}},[t("i",{staticClass:"icon-graph"}),e._v("Trending ")])],1)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Menu Align")]),t("DemoSection",{attrs:{title:"Menu Align",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("div",{staticClass:"row"},[t("PaneDropdown",{attrs:{"menu-align":"right","hover-option":!0}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Right Dropdown Menu")]),t("a",{attrs:{href:"#"}},[e._v("Hey I'm a longer link here")]),t("a",{attrs:{href:"#"}},[e._v("Let's see how this looks")]),t("a",{attrs:{href:"#"}},[e._v("I'm in a pane dropdown aligned to the right")])])],1),t("div",{staticClass:"row"},[t("PaneDropdown",{attrs:{"menu-align":"center"}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Center Dropdown Menu")]),t("a",{attrs:{href:"#"}},[e._v("Hey I'm a longer link here")]),t("a",{attrs:{href:"#"}},[e._v("Let's see how this looks")]),t("a",{attrs:{href:"#"}},[e._v("I'm in a pane dropdown aligned to the right")])])],1),t("div",{staticClass:"row"},[t("PaneDropdown",{attrs:{"open-above":"top"}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Top Dropdown Menu")]),t("a",{attrs:{href:"#"}},[e._v("Hey I'm a longer link here")]),t("a",{attrs:{href:"#"}},[e._v("Let's see how this looks")]),t("a",{attrs:{href:"#"}},[e._v("I'm in a pane dropdown aligned to the right")])])],1)]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Custom Dropdown")]),t("DemoSection",{attrs:{title:"Custom Dropdown",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("PaneDropdown",{attrs:{custom:!0}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Custom Dropdown Menu")]),t("div",[e._v(" hey watsup "),t("br"),t("strong",[e._v("put whatever you want in here")])])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Relative Menu")]),t("DemoSection",{attrs:{title:"Relative Menu",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("PaneDropdown",{attrs:{relativeMenu:!0}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Relative Menu")]),t("a",{attrs:{href:"#"}},[e._v("Hey I'm a longer link here")]),t("a",{attrs:{href:"#"}},[e._v("Let's see how this looks")]),t("a",{attrs:{href:"#"}},[e._v("I'm in a pane dropdown aligned to the right")])])]},proxy:!0}])})],1),t("div",{staticClass:"section"},[t("h2",[e._v("Simple Menu")]),t("DemoSection",{attrs:{title:"Simple Menu",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("PaneDropdown",{attrs:{relativeMenu:!0,simpleMenu:!0}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("Simple Menu")]),t("a",{attrs:{href:"#"}},[e._v("Hey I'm a longer link here")]),t("a",{attrs:{href:"#"}},[e._v("Let's see how this looks")]),t("a",{attrs:{href:"#"}},[e._v("I'm in a pane dropdown aligned to the right")])])]},proxy:!0}])})],1),e._m(1)])},P=[function(){var n=this,e=n._self._c;return n._self._setupProxy,e("div",{staticClass:"section"},[e("h1",[n._v("Pane Dropdowns")]),e("p",[n._v("Dropdown menu used on Streamlabs.com")]),e("pre",[e("code",[n._v(`import { PaneDropdown } from 'streamlabs-beaker';

components: {
  PaneDropdown
}`)])])])},function(){var n=this,e=n._self._c;return n._self._setupProxy,e("div",{staticClass:"section"},[e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[n._v("Prop")]),e("th",[n._v("Type")]),e("th",[n._v("Required")]),e("th",[n._v("Default")]),e("th",[n._v("Description")])])]),e("tbody",[e("tr",[e("td",[n._v("dropdownIcon")]),e("td",[n._v("boolean")]),e("td",[n._v("false")]),e("td",[n._v("true")]),e("td",[n._v("Show or hide dropdown icon.")])]),e("tr",[e("td",[n._v("menuAlign")]),e("td",[n._v("string")]),e("td",[n._v("false")]),e("td",[n._v("null")]),e("td",[n._v(" Default will align the menu to the left side of the toggle. Use "),e("code",[n._v("right")]),n._v(" or "),e("code",[n._v("center")]),n._v(" to align the dropdown menu to the right or center of its toggle. ")])]),e("tr",[e("td",[n._v("openAbove")]),e("td",[n._v("boolean")]),e("td",[n._v("false")]),e("td",[n._v("false")]),e("td",[n._v(" Set to true if you want menu to open above. Default is to open below title. ")])]),e("tr",[e("td",[n._v("closeOnSelect")]),e("td",[n._v("boolean")]),e("td",[n._v("false")]),e("td",[n._v("true")]),e("td",[n._v("Close the dropdown when a link is clicked.")])]),e("tr",[e("td",[n._v("autoHeight")]),e("td",[n._v("boolean")]),e("td",[n._v("false")]),e("td",[n._v("false")]),e("td",[n._v("No max height")])]),e("tr",[e("td",[n._v("relativeMenu")]),e("td",[n._v("boolean")]),e("td",[n._v("false")]),e("td",[n._v("false")]),e("td",[n._v(" Change the menu from position absolute to relative so it pushes the content below it down. ")])]),e("tr",[e("td",[n._v("simpleMenu")]),e("td",[n._v("boolean")]),e("td",[n._v("false")]),e("td",[n._v("false")]),e("td",[n._v("Removes menues bg colors, box shadow and paddinga.")])])])])])}],b=m(d,g,P,!1,null,null,null,null);const x=b.exports;export{x as default};
//# sourceMappingURL=PaneDropdowns.407b9496.js.map

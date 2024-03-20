var p=Object.defineProperty;var h=(t,n,e)=>n in t?p(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var i=(t,n,e)=>(h(t,typeof n!="symbol"?n+"":n,e),e);import{C as c,V as v,n as m}from"./index.17a864f5.js";import{D as u}from"./DemoSection.a0f0b33e.js";import{P as w}from"./PaneDropdown.49d716e1.js";import"./Accordion.a5b0018d.js";import"./vue-focus.common.5cd91eeb.js";const _=`<template>
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
`;var f=Object.defineProperty,D=Object.getOwnPropertyDescriptor,g=(t,n,e,a)=>{for(var o=a>1?void 0:a?D(n,e):n,r=t.length-1,s;r>=0;r--)(s=t[r])&&(o=(a?s(n,e,o):s(o))||o);return a&&o&&f(n,e,o),o};let d=class extends v{constructor(){super(...arguments);i(this,"demoCode",_)}};d=g([c({components:{DemoSection:u,PaneDropdown:w}})],d);var b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Using Slots")]),e("DemoSection",{attrs:{title:"With Dropdown Icon",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("PaneDropdown",{attrs:{"close-on-select":!1}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Trending")]),e("PaneDropdown",{attrs:{menuAlign:"center"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Inner Dropdown")]),e("a",{attrs:{href:"#"}},[t._v("Item 1")]),e("a",{attrs:{href:"#"}},[t._v("Item 2")]),e("a",{attrs:{href:"#"}},[t._v("Item 3")])]),e("hr"),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-leaderboard-4"}),t._v("Most Installed ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-loyalty"}),t._v("Newly Added ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-graph"}),t._v("Trending ")])],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Menu Align")]),e("DemoSection",{attrs:{title:"Menu Align",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"row"},[e("PaneDropdown",{attrs:{"menu-align":"right","hover-option":!0}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Right Dropdown Menu")]),e("a",{attrs:{href:"#"}},[t._v("Hey I'm a longer link here")]),e("a",{attrs:{href:"#"}},[t._v("Let's see how this looks")]),e("a",{attrs:{href:"#"}},[t._v("I'm in a pane dropdown aligned to the right")])])],1),e("div",{staticClass:"row"},[e("PaneDropdown",{attrs:{"menu-align":"center"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Center Dropdown Menu")]),e("a",{attrs:{href:"#"}},[t._v("Hey I'm a longer link here")]),e("a",{attrs:{href:"#"}},[t._v("Let's see how this looks")]),e("a",{attrs:{href:"#"}},[t._v("I'm in a pane dropdown aligned to the right")])])],1),e("div",{staticClass:"row"},[e("PaneDropdown",{attrs:{"open-above":"top"}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Top Dropdown Menu")]),e("a",{attrs:{href:"#"}},[t._v("Hey I'm a longer link here")]),e("a",{attrs:{href:"#"}},[t._v("Let's see how this looks")]),e("a",{attrs:{href:"#"}},[t._v("I'm in a pane dropdown aligned to the right")])])],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Custom Dropdown")]),e("DemoSection",{attrs:{title:"Custom Dropdown",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("PaneDropdown",{attrs:{custom:!0}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Custom Dropdown Menu")]),e("div",[t._v(" hey watsup "),e("br"),e("strong",[t._v("put whatever you want in here")])])])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Relative Menu")]),e("DemoSection",{attrs:{title:"Relative Menu",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("PaneDropdown",{attrs:{relativeMenu:!0}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Relative Menu")]),e("a",{attrs:{href:"#"}},[t._v("Hey I'm a longer link here")]),e("a",{attrs:{href:"#"}},[t._v("Let's see how this looks")]),e("a",{attrs:{href:"#"}},[t._v("I'm in a pane dropdown aligned to the right")])])]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Simple Menu")]),e("DemoSection",{attrs:{title:"Simple Menu",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("PaneDropdown",{attrs:{relativeMenu:!0,simpleMenu:!0}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("Simple Menu")]),e("a",{attrs:{href:"#"}},[t._v("Hey I'm a longer link here")]),e("a",{attrs:{href:"#"}},[t._v("Let's see how this looks")]),e("a",{attrs:{href:"#"}},[t._v("I'm in a pane dropdown aligned to the right")])])]},proxy:!0}])})],1),t._m(1)])},C=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section"},[e("h1",[t._v("Pane Dropdowns")]),e("p",[t._v("Dropdown menu used on Streamlabs.com")]),e("pre",[e("code",[t._v(`import { PaneDropdown } from 'streamlabs-beaker';

components: {
  PaneDropdown
}`)])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section"},[e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Prop")]),e("th",[t._v("Type")]),e("th",[t._v("Required")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("dropdownIcon")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("true")]),e("td",[t._v("Show or hide dropdown icon.")])]),e("tr",[e("td",[t._v("menuAlign")]),e("td",[t._v("string")]),e("td",[t._v("false")]),e("td",[t._v("null")]),e("td",[t._v(" Default will align the menu to the left side of the toggle. Use "),e("code",[t._v("right")]),t._v(" or "),e("code",[t._v("center")]),t._v(" to align the dropdown menu to the right or center of its toggle. ")])]),e("tr",[e("td",[t._v("openAbove")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("false")]),e("td",[t._v(" Set to true if you want menu to open above. Default is to open below title. ")])]),e("tr",[e("td",[t._v("closeOnSelect")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("true")]),e("td",[t._v("Close the dropdown when a link is clicked.")])]),e("tr",[e("td",[t._v("autoHeight")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("false")]),e("td",[t._v("No max height")])]),e("tr",[e("td",[t._v("relativeMenu")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("false")]),e("td",[t._v(" Change the menu from position absolute to relative so it pushes the content below it down. ")])]),e("tr",[e("td",[t._v("simpleMenu")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("false")]),e("td",[t._v("Removes menues bg colors, box shadow and paddinga.")])])])])])}];const l={};var P=m(d,b,C,!1,S,null,null,null);function S(t){for(let n in l)this[n]=l[n]}const A=function(){return P.exports}();export{A as default};
//# sourceMappingURL=PaneDropdowns.98194e1e.js.map

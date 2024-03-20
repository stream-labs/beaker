var S=Object.defineProperty;var L=(n,e,t)=>e in n?S(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var i=(n,e,t)=>(L(n,typeof e!="symbol"?e+"":e,t),t);import{C as v,P as c,V as f,n as g}from"./index.17a864f5.js";import{A as y}from"./Accordion.a5b0018d.js";import{B as _}from"./Button.5177b229.js";import{D as b}from"./DemoSection.a0f0b33e.js";import{S as h}from"./Spinner.0396dbba.js";const w=`<template>
  <div>
    <div class="section">
      <h1>Loaders</h1>
      <p>
        These are animated with pure SVG, they will not be animated in Microsoft
        Edge, or Opera, and will look different in firefox.
      </p>

      <div class="section">
        <h2>Full Page Loading</h2>

        <pre><code>import { Loading } from 'streamlabs-beaker';

components: {
  Loading
}</code></pre>

        <div class="section">
          <h2>Standard</h2>

          <div class="section">
            <DemoSection title="Standard" :code="demoCode">
              <template #components>
                <Loading
                  v-if="isLoading"
                  :loadingStrs="string"
                  @closeLoading="isLoading = false"
                />
              </template>
            </DemoSection>
          </div>

          <div class="s-button-container s-button-container--left">
            <Button
              variation="default"
              title="loading default"
              @click="isLoading = true"
            />
          </div>
        </div>

        <div class="section">
          <h2>Semi-Opaque Background</h2>

          <div class="section">
            <DemoSection title="Semi-Opaque Background" :code="demoCode">
              <template #components>
                <Loading
                  v-if="isLoadingSemi"
                  :semiOpaque="true"
                  :loadingStrs="array"
                  :isRandom="true"
                  @closeLoading="isLoadingSemi = false"
                />
              </template>
            </DemoSection>
          </div>

          <div class="s-button-container s-button-container--left">
            <Button
              variation="default"
              title="loading semi opaque"
              @click="isLoadingSemi = true"
            />
          </div>
        </div>

        <div class="section">
          <h2>Full Page Loading - Swapped</h2>

          <div class="section">
            <DemoSection title="Full Page Loading - Swapped" :code="demoCode">
              <template #components>
                <Loading
                  v-if="isLoadingSwapped"
                  :loadingStrs="array"
                  :isRandom="true"
                  :swapMode="true"
                  @closeLoading="isLoadingSwapped = false"
                />
              </template>
            </DemoSection>
          </div>

          <div class="s-button-container s-button-container--left">
            <Button
              variation="default"
              title="loading swapped option"
              @click="isLoadingSwapped = true"
            />
          </div>
        </div>

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
              <td>loadingStrs</td>
              <td>any[] | string</td>
              <td>-</td>
              <td>
                Pass an array of stings into the loader. We recommend 3-4. Each
                shows for 4 seconds before it rotates.
              </td>
            </tr>
            <tr>
              <td>isRandom</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Randomize the strings if you set
                <code>loadingStrs</code>as an array
              </td>
            </tr>
            <tr>
              <td>semiOpaque</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Sets the background overlay to semi-opacity rather than full
                opacity.
              </td>
            </tr>
            <tr>
              <td>swapMode</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                In case you need to swap day/night mode - used for Creator
                Sites.
              </td>
            </tr>
            <tr>
              <td>fixedBackground</td>
              <td>boolean</td>
              <td>true</td>
              <td>
                Allows loader to take dimensions of parent if set to
                <code>false</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2>Section Loading Spinners</h2>

      <pre><code>import { Spinner } from 'streamlabs-beaker';

components: {
  Spinner
}</code></pre>

      <h3>Loading Spinner</h3>
      <p>This is the standard size for sections within a page layout.</p>

      <div class="section">
        <DemoSection title="Loading Spinner" :code="demoCode">
          <template #components>
            <Spinner size="small" />
          </template>
        </DemoSection>
      </div>

      <h3>Loading Spinner Large</h3>
      <p>
        This is the large size spinner. It should only be used in large sections
        or full page transitions.
      </p>

      <div class="section">
        <DemoSection title="Loading Spinner Large" :code="demoCode">
          <template #components>
            <Spinner size="large" />
          </template>
        </DemoSection>
      </div>

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
            <td>size</td>
            <td>String</td>
            <td>'small'</td>
            <td>'small', 'large'</td>
          </tr>
          <tr>
            <td>swap</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              If you need to swap day/night mode [ true ], default: [ false ]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import Button from "./../components/Button.vue";
import LoadersCode from "./Loaders.vue?raw";
import DemoSection from "./../components/DemoSection.vue";
import Loading from "./../components/Loading.vue";
import Spinner from "./../components/Spinner.vue";

@Component({
  components: {
    Accordion,
    Button,
    DemoSection,
    Loading,
    Spinner
  }
})
export default class Loaders extends Vue {
  demoCode = LoadersCode;
  isLoading = false;
  isLoadingSemi = false;
  isLoadingSwapped = false;

  array = [
    "This loader is using an array of strings...",
    "Syncing all files to our cloud...",
    "Lorem ipsum dolor sit amet, consectetur...",
    "Sed do eiusmod tempor incididunt ut labore..."
  ];
  string = "This loader is using a single string...";
}
<\/script>
`;var C=Object.defineProperty,x=Object.getOwnPropertyDescriptor,l=(n,e,t,o)=>{for(var a=o>1?void 0:o?x(e,t):e,d=n.length-1,r;d>=0;d--)(r=n[d])&&(a=(o?r(e,t,a):r(a))||a);return o&&a&&C(e,t,a),a};let s=class extends f{constructor(){super(...arguments);i(this,"loadingStrs");i(this,"semiOpaque");i(this,"isRandom");i(this,"swapMode");i(this,"fixedBackground");i(this,"loaderText","");i(this,"index",0)}mounted(){typeof this.loadingStrs=="string"?this.loaderText=this.loadingStrs:this.distinguishNumberOfArrays()}distinguishNumberOfArrays(){this.loadingStrs.length>1?this.isRandom?this.loopRandomText():this.loopText():this.loaderText=this.loadingStrs[0]}loopText(){this.loaderText=this.loadingStrs[this.index],this.index++,this.index===this.loadingStrs.length&&(this.index=0),setTimeout(this.loopText,4e3)}loopRandomText(){const e=Math.floor(Math.random()*this.loadingStrs.length);this.loaderText===this.loadingStrs[e]?this.loopRandomText():(this.loaderText=this.loadingStrs[e],setTimeout(this.loopRandomText,4e3))}};l([c({default:[]})],s.prototype,"loadingStrs",2);l([c({default:!1})],s.prototype,"semiOpaque",2);l([c({default:!1})],s.prototype,"isRandom",2);l([c({default:!1})],s.prototype,"swapMode",2);l([c({default:!0})],s.prototype,"fixedBackground",2);s=l([v({components:{Spinner:h,Button:_}})],s);var D=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"s-loader",attrs:{swapMode:n.swapMode}},[t("div",{staticClass:"s-loader__bg",class:{"s-loader__bg--semi":n.semiOpaque,"s-loader--modeswap":n.swapMode,"s-loader--fixed":n.fixedBackground}},[t("div",{staticClass:"s-loader__inner"},[t("Spinner",{staticClass:"s-spinner__overlay",attrs:{swap:n.swapMode,size:"large"}}),t("div",{staticClass:"s-loader__text"},[n._v(n._s(n.loaderText))])],1)])])},T=[];const u={};var O=g(s,D,T,!1,B,null,null,null);function B(n){for(let e in u)this[e]=u[e]}const P=function(){return O.exports}();var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,R=(n,e,t,o)=>{for(var a=o>1?void 0:o?k(e,t):e,d=n.length-1,r;d>=0;d--)(r=n[d])&&(a=(o?r(e,t,a):r(a))||a);return o&&a&&$(e,t,a),a};let p=class extends f{constructor(){super(...arguments);i(this,"demoCode",w);i(this,"isLoading",!1);i(this,"isLoadingSemi",!1);i(this,"isLoadingSwapped",!1);i(this,"array",["This loader is using an array of strings...","Syncing all files to our cloud...","Lorem ipsum dolor sit amet, consectetur...","Sed do eiusmod tempor incididunt ut labore..."]);i(this,"string","This loader is using a single string...")}};p=R([v({components:{Accordion:y,Button:_,DemoSection:b,Loading:P,Spinner:h}})],p);var M=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"section"},[t("h1",[n._v("Loaders")]),t("p",[n._v(" These are animated with pure SVG, they will not be animated in Microsoft Edge, or Opera, and will look different in firefox. ")]),t("div",{staticClass:"section"},[t("h2",[n._v("Full Page Loading")]),n._m(0),t("div",{staticClass:"section"},[t("h2",[n._v("Standard")]),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Standard",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[n.isLoading?t("Loading",{attrs:{loadingStrs:n.string},on:{closeLoading:function(o){n.isLoading=!1}}}):n._e()]},proxy:!0}])})],1),t("div",{staticClass:"s-button-container s-button-container--left"},[t("Button",{attrs:{variation:"default",title:"loading default"},on:{click:function(o){n.isLoading=!0}}})],1)]),t("div",{staticClass:"section"},[t("h2",[n._v("Semi-Opaque Background")]),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Semi-Opaque Background",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[n.isLoadingSemi?t("Loading",{attrs:{semiOpaque:!0,loadingStrs:n.array,isRandom:!0},on:{closeLoading:function(o){n.isLoadingSemi=!1}}}):n._e()]},proxy:!0}])})],1),t("div",{staticClass:"s-button-container s-button-container--left"},[t("Button",{attrs:{variation:"default",title:"loading semi opaque"},on:{click:function(o){n.isLoadingSemi=!0}}})],1)]),t("div",{staticClass:"section"},[t("h2",[n._v("Full Page Loading - Swapped")]),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Full Page Loading - Swapped",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[n.isLoadingSwapped?t("Loading",{attrs:{loadingStrs:n.array,isRandom:!0,swapMode:!0},on:{closeLoading:function(o){n.isLoadingSwapped=!1}}}):n._e()]},proxy:!0}])})],1),t("div",{staticClass:"s-button-container s-button-container--left"},[t("Button",{attrs:{variation:"default",title:"loading swapped option"},on:{click:function(o){n.isLoadingSwapped=!0}}})],1)]),n._m(1)])]),t("div",{staticClass:"section"},[t("h2",[n._v("Section Loading Spinners")]),n._m(2),t("h3",[n._v("Loading Spinner")]),t("p",[n._v("This is the standard size for sections within a page layout.")]),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Loading Spinner",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Spinner",{attrs:{size:"small"}})]},proxy:!0}])})],1),t("h3",[n._v("Loading Spinner Large")]),t("p",[n._v(" This is the large size spinner. It should only be used in large sections or full page transitions. ")]),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Loading Spinner Large",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Spinner",{attrs:{size:"large"}})]},proxy:!0}])})],1),n._m(3)])])},z=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",[t("code",[n._v(`import { Loading } from 'streamlabs-beaker';

components: {
  Loading
}`)])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Props")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("loadingStrs")]),t("td",[n._v("any[] | string")]),t("td",[n._v("-")]),t("td",[n._v(" Pass an array of stings into the loader. We recommend 3-4. Each shows for 4 seconds before it rotates. ")])]),t("tr",[t("td",[n._v("isRandom")]),t("td",[n._v("boolean")]),t("td",[n._v("false")]),t("td",[n._v(" Randomize the strings if you set "),t("code",[n._v("loadingStrs")]),n._v("as an array ")])]),t("tr",[t("td",[n._v("semiOpaque")]),t("td",[n._v("boolean")]),t("td",[n._v("false")]),t("td",[n._v(" Sets the background overlay to semi-opacity rather than full opacity. ")])]),t("tr",[t("td",[n._v("swapMode")]),t("td",[n._v("boolean")]),t("td",[n._v("false")]),t("td",[n._v(" In case you need to swap day/night mode - used for Creator Sites. ")])]),t("tr",[t("td",[n._v("fixedBackground")]),t("td",[n._v("boolean")]),t("td",[n._v("true")]),t("td",[n._v(" Allows loader to take dimensions of parent if set to "),t("code",[n._v("false")])])])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",[t("code",[n._v(`import { Spinner } from 'streamlabs-beaker';

components: {
  Spinner
}`)])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Props")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("size")]),t("td",[n._v("String")]),t("td",[n._v("'small'")]),t("td",[n._v("'small', 'large'")])]),t("tr",[t("td",[n._v("swap")]),t("td",[n._v("Boolean")]),t("td",[n._v("false")]),t("td",[n._v(" If you need to swap day/night mode [ true ], default: [ false ] ")])])])])}];const m={};var q=g(p,M,z,!1,E,null,null,null);function E(n){for(let e in m)this[e]=m[e]}const N=function(){return q.exports}();export{N as default};
//# sourceMappingURL=Loaders.8dd248c0.js.map

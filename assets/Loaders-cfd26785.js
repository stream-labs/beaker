var S=Object.defineProperty;var L=(t,e,n)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var i=(t,e,n)=>(L(t,typeof e!="symbol"?e+"":e,n),n);import{C as v,P as c,V as f,n as g}from"./index-e8bb31bb.js";import{A as y}from"./Accordion-79d22a9d.js";import{B as _}from"./Button-3cf72d47.js";import{D as b}from"./DemoSection-b2dfe451.js";import{S as h}from"./Spinner-41948dcb.js";const w=`<template>
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
`;var C=Object.defineProperty,x=Object.getOwnPropertyDescriptor,l=(t,e,n,o)=>{for(var a=o>1?void 0:o?x(e,n):e,d=t.length-1,r;d>=0;d--)(r=t[d])&&(a=(o?r(e,n,a):r(a))||a);return o&&a&&C(e,n,a),a};let s=class extends f{constructor(){super(...arguments);i(this,"loadingStrs");i(this,"semiOpaque");i(this,"isRandom");i(this,"swapMode");i(this,"fixedBackground");i(this,"loaderText","");i(this,"index",0)}mounted(){typeof this.loadingStrs=="string"?this.loaderText=this.loadingStrs:this.distinguishNumberOfArrays()}distinguishNumberOfArrays(){this.loadingStrs.length>1?this.isRandom?this.loopRandomText():this.loopText():this.loaderText=this.loadingStrs[0]}loopText(){this.loaderText=this.loadingStrs[this.index],this.index++,this.index===this.loadingStrs.length&&(this.index=0),setTimeout(this.loopText,4e3)}loopRandomText(){const n=Math.floor(Math.random()*this.loadingStrs.length);this.loaderText===this.loadingStrs[n]?this.loopRandomText():(this.loaderText=this.loadingStrs[n],setTimeout(this.loopRandomText,4e3))}};l([c({default:[]})],s.prototype,"loadingStrs",2);l([c({default:!1})],s.prototype,"semiOpaque",2);l([c({default:!1})],s.prototype,"isRandom",2);l([c({default:!1})],s.prototype,"swapMode",2);l([c({default:!0})],s.prototype,"fixedBackground",2);s=l([v({components:{Spinner:h,Button:_}})],s);var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"s-loader",attrs:{swapMode:t.swapMode}},[n("div",{staticClass:"s-loader__bg",class:{"s-loader__bg--semi":t.semiOpaque,"s-loader--modeswap":t.swapMode,"s-loader--fixed":t.fixedBackground}},[n("div",{staticClass:"s-loader__inner"},[n("Spinner",{staticClass:"s-spinner__overlay",attrs:{swap:t.swapMode,size:"large"}}),n("div",{staticClass:"s-loader__text"},[t._v(t._s(t.loaderText))])],1)])])},T=[];const u={};var O=g(s,D,T,!1,B,null,null,null);function B(t){for(let e in u)this[e]=u[e]}const P=function(){return O.exports}();var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,R=(t,e,n,o)=>{for(var a=o>1?void 0:o?k(e,n):e,d=t.length-1,r;d>=0;d--)(r=t[d])&&(a=(o?r(e,n,a):r(a))||a);return o&&a&&$(e,n,a),a};let p=class extends f{constructor(){super(...arguments);i(this,"demoCode",w);i(this,"isLoading",!1);i(this,"isLoadingSemi",!1);i(this,"isLoadingSwapped",!1);i(this,"array",["This loader is using an array of strings...","Syncing all files to our cloud...","Lorem ipsum dolor sit amet, consectetur...","Sed do eiusmod tempor incididunt ut labore..."]);i(this,"string","This loader is using a single string...")}};p=R([v({components:{Accordion:y,Button:_,DemoSection:b,Loading:P,Spinner:h}})],p);var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"section"},[n("h1",[t._v("Loaders")]),n("p",[t._v(" These are animated with pure SVG, they will not be animated in Microsoft Edge, or Opera, and will look different in firefox. ")]),n("div",{staticClass:"section"},[n("h2",[t._v("Full Page Loading")]),t._m(0),n("div",{staticClass:"section"},[n("h2",[t._v("Standard")]),n("div",{staticClass:"section"},[n("DemoSection",{attrs:{title:"Standard",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[t.isLoading?n("Loading",{attrs:{loadingStrs:t.string},on:{closeLoading:function(o){t.isLoading=!1}}}):t._e()]},proxy:!0}])})],1),n("div",{staticClass:"s-button-container s-button-container--left"},[n("Button",{attrs:{variation:"default",title:"loading default"},on:{click:function(o){t.isLoading=!0}}})],1)]),n("div",{staticClass:"section"},[n("h2",[t._v("Semi-Opaque Background")]),n("div",{staticClass:"section"},[n("DemoSection",{attrs:{title:"Semi-Opaque Background",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[t.isLoadingSemi?n("Loading",{attrs:{semiOpaque:!0,loadingStrs:t.array,isRandom:!0},on:{closeLoading:function(o){t.isLoadingSemi=!1}}}):t._e()]},proxy:!0}])})],1),n("div",{staticClass:"s-button-container s-button-container--left"},[n("Button",{attrs:{variation:"default",title:"loading semi opaque"},on:{click:function(o){t.isLoadingSemi=!0}}})],1)]),n("div",{staticClass:"section"},[n("h2",[t._v("Full Page Loading - Swapped")]),n("div",{staticClass:"section"},[n("DemoSection",{attrs:{title:"Full Page Loading - Swapped",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[t.isLoadingSwapped?n("Loading",{attrs:{loadingStrs:t.array,isRandom:!0,swapMode:!0},on:{closeLoading:function(o){t.isLoadingSwapped=!1}}}):t._e()]},proxy:!0}])})],1),n("div",{staticClass:"s-button-container s-button-container--left"},[n("Button",{attrs:{variation:"default",title:"loading swapped option"},on:{click:function(o){t.isLoadingSwapped=!0}}})],1)]),t._m(1)])]),n("div",{staticClass:"section"},[n("h2",[t._v("Section Loading Spinners")]),t._m(2),n("h3",[t._v("Loading Spinner")]),n("p",[t._v("This is the standard size for sections within a page layout.")]),n("div",{staticClass:"section"},[n("DemoSection",{attrs:{title:"Loading Spinner",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Spinner",{attrs:{size:"small"}})]},proxy:!0}])})],1),n("h3",[t._v("Loading Spinner Large")]),n("p",[t._v(" This is the large size spinner. It should only be used in large sections or full page transitions. ")]),n("div",{staticClass:"section"},[n("DemoSection",{attrs:{title:"Loading Spinner Large",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("Spinner",{attrs:{size:"large"}})]},proxy:!0}])})],1),t._m(3)])])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v(`import { Loading } from 'streamlabs-beaker';

components: {
  Loading
}`)])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("loadingStrs")]),n("td",[t._v("any[] | string")]),n("td",[t._v("-")]),n("td",[t._v(" Pass an array of stings into the loader. We recommend 3-4. Each shows for 4 seconds before it rotates. ")])]),n("tr",[n("td",[t._v("isRandom")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v(" Randomize the strings if you set "),n("code",[t._v("loadingStrs")]),t._v("as an array ")])]),n("tr",[n("td",[t._v("semiOpaque")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v(" Sets the background overlay to semi-opacity rather than full opacity. ")])]),n("tr",[n("td",[t._v("swapMode")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v(" In case you need to swap day/night mode - used for Creator Sites. ")])]),n("tr",[n("td",[t._v("fixedBackground")]),n("td",[t._v("boolean")]),n("td",[t._v("true")]),n("td",[t._v(" Allows loader to take dimensions of parent if set to "),n("code",[t._v("false")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v(`import { Spinner } from 'streamlabs-beaker';

components: {
  Spinner
}`)])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("size")]),n("td",[t._v("String")]),n("td",[t._v("'small'")]),n("td",[t._v("'small', 'large'")])]),n("tr",[n("td",[t._v("swap")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")]),n("td",[t._v(" If you need to swap day/night mode [ true ], default: [ false ] ")])])])])}];const m={};var q=g(p,M,z,!1,E,null,null,null);function E(t){for(let e in m)this[e]=m[e]}const H=function(){return q.exports}();export{H as default};
//# sourceMappingURL=Loaders-cfd26785.js.map

var _=Object.defineProperty;var h=(t,n,e)=>n in t?_(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var i=(t,n,e)=>(h(t,typeof n!="symbol"?n+"":n,e),e);import{C as u,P as c,V as m,n as f}from"./index.4fb8a6cb.js";import{A as S}from"./Accordion.09c82396.js";import{B as g}from"./Button.b26dacc2.js";import{D as L}from"./DemoSection.79ee11c0.js";import{S as v}from"./Spinner.2fef2c20.js";const y=`<template>
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
`;var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,l=(t,n,e,o)=>{for(var s=o>1?void 0:o?w(n,e):n,d=t.length-1,r;d>=0;d--)(r=t[d])&&(s=(o?r(n,e,s):r(s))||s);return o&&s&&b(n,e,s),s};let a=class extends m{constructor(){super(...arguments);i(this,"loadingStrs");i(this,"semiOpaque");i(this,"isRandom");i(this,"swapMode");i(this,"fixedBackground");i(this,"loaderText","");i(this,"index",0)}mounted(){typeof this.loadingStrs=="string"?this.loaderText=this.loadingStrs:this.distinguishNumberOfArrays()}distinguishNumberOfArrays(){this.loadingStrs.length>1?this.isRandom?this.loopRandomText():this.loopText():this.loaderText=this.loadingStrs[0]}loopText(){this.loaderText=this.loadingStrs[this.index],this.index++,this.index===this.loadingStrs.length&&(this.index=0),setTimeout(this.loopText,4e3)}loopRandomText(){const n=Math.floor(Math.random()*this.loadingStrs.length);this.loaderText===this.loadingStrs[n]?this.loopRandomText():(this.loaderText=this.loadingStrs[n],setTimeout(this.loopRandomText,4e3))}};l([c({default:[]})],a.prototype,"loadingStrs",2);l([c({default:!1})],a.prototype,"semiOpaque",2);l([c({default:!1})],a.prototype,"isRandom",2);l([c({default:!1})],a.prototype,"swapMode",2);l([c({default:!0})],a.prototype,"fixedBackground",2);a=l([u({components:{Spinner:v,Button:g}})],a);var x=function(){var n=this,e=n._self._c;return n._self._setupProxy,e("div",{staticClass:"s-loader",attrs:{swapMode:n.swapMode}},[e("div",{staticClass:"s-loader__bg",class:{"s-loader__bg--semi":n.semiOpaque,"s-loader--modeswap":n.swapMode,"s-loader--fixed":n.fixedBackground}},[e("div",{staticClass:"s-loader__inner"},[e("Spinner",{staticClass:"s-spinner__overlay",attrs:{swap:n.swapMode,size:"large"}}),e("div",{staticClass:"s-loader__text"},[n._v(n._s(n.loaderText))])],1)])])},C=[],D=f(a,x,C,!1,null,null,null,null);const T=D.exports;var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,B=(t,n,e,o)=>{for(var s=o>1?void 0:o?O(n,e):n,d=t.length-1,r;d>=0;d--)(r=t[d])&&(s=(o?r(n,e,s):r(s))||s);return o&&s&&P(n,e,s),s};let p=class extends m{constructor(){super(...arguments);i(this,"demoCode",y);i(this,"isLoading",!1);i(this,"isLoadingSemi",!1);i(this,"isLoadingSwapped",!1);i(this,"array",["This loader is using an array of strings...","Syncing all files to our cloud...","Lorem ipsum dolor sit amet, consectetur...","Sed do eiusmod tempor incididunt ut labore..."]);i(this,"string","This loader is using a single string...")}};p=B([u({components:{Accordion:S,Button:g,DemoSection:L,Loading:T,Spinner:v}})],p);var k=function(){var n=this,e=n._self._c;return n._self._setupProxy,e("div",[e("div",{staticClass:"section"},[e("h1",[n._v("Loaders")]),e("p",[n._v(" These are animated with pure SVG, they will not be animated in Microsoft Edge, or Opera, and will look different in firefox. ")]),e("div",{staticClass:"section"},[e("h2",[n._v("Full Page Loading")]),n._m(0),e("div",{staticClass:"section"},[e("h2",[n._v("Standard")]),e("div",{staticClass:"section"},[e("DemoSection",{attrs:{title:"Standard",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[n.isLoading?e("Loading",{attrs:{loadingStrs:n.string},on:{closeLoading:function(o){n.isLoading=!1}}}):n._e()]},proxy:!0}])})],1),e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"default",title:"loading default"},on:{click:function(o){n.isLoading=!0}}})],1)]),e("div",{staticClass:"section"},[e("h2",[n._v("Semi-Opaque Background")]),e("div",{staticClass:"section"},[e("DemoSection",{attrs:{title:"Semi-Opaque Background",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[n.isLoadingSemi?e("Loading",{attrs:{semiOpaque:!0,loadingStrs:n.array,isRandom:!0},on:{closeLoading:function(o){n.isLoadingSemi=!1}}}):n._e()]},proxy:!0}])})],1),e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"default",title:"loading semi opaque"},on:{click:function(o){n.isLoadingSemi=!0}}})],1)]),e("div",{staticClass:"section"},[e("h2",[n._v("Full Page Loading - Swapped")]),e("div",{staticClass:"section"},[e("DemoSection",{attrs:{title:"Full Page Loading - Swapped",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[n.isLoadingSwapped?e("Loading",{attrs:{loadingStrs:n.array,isRandom:!0,swapMode:!0},on:{closeLoading:function(o){n.isLoadingSwapped=!1}}}):n._e()]},proxy:!0}])})],1),e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"default",title:"loading swapped option"},on:{click:function(o){n.isLoadingSwapped=!0}}})],1)]),n._m(1)])]),e("div",{staticClass:"section"},[e("h2",[n._v("Section Loading Spinners")]),n._m(2),e("h3",[n._v("Loading Spinner")]),e("p",[n._v("This is the standard size for sections within a page layout.")]),e("div",{staticClass:"section"},[e("DemoSection",{attrs:{title:"Loading Spinner",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[e("Spinner",{attrs:{size:"small"}})]},proxy:!0}])})],1),e("h3",[n._v("Loading Spinner Large")]),e("p",[n._v(" This is the large size spinner. It should only be used in large sections or full page transitions. ")]),e("div",{staticClass:"section"},[e("DemoSection",{attrs:{title:"Loading Spinner Large",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[e("Spinner",{attrs:{size:"large"}})]},proxy:!0}])})],1),n._m(3)])])},R=[function(){var t=this,n=t._self._c;return t._self._setupProxy,n("pre",[n("code",[t._v(`import { Loading } from 'streamlabs-beaker';

components: {
  Loading
}`)])])},function(){var t=this,n=t._self._c;return t._self._setupProxy,n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("loadingStrs")]),n("td",[t._v("any[] | string")]),n("td",[t._v("-")]),n("td",[t._v(" Pass an array of stings into the loader. We recommend 3-4. Each shows for 4 seconds before it rotates. ")])]),n("tr",[n("td",[t._v("isRandom")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v(" Randomize the strings if you set "),n("code",[t._v("loadingStrs")]),t._v("as an array ")])]),n("tr",[n("td",[t._v("semiOpaque")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v(" Sets the background overlay to semi-opacity rather than full opacity. ")])]),n("tr",[n("td",[t._v("swapMode")]),n("td",[t._v("boolean")]),n("td",[t._v("false")]),n("td",[t._v(" In case you need to swap day/night mode - used for Creator Sites. ")])]),n("tr",[n("td",[t._v("fixedBackground")]),n("td",[t._v("boolean")]),n("td",[t._v("true")]),n("td",[t._v(" Allows loader to take dimensions of parent if set to "),n("code",[t._v("false")])])])])])},function(){var t=this,n=t._self._c;return t._self._setupProxy,n("pre",[n("code",[t._v(`import { Spinner } from 'streamlabs-beaker';

components: {
  Spinner
}`)])])},function(){var t=this,n=t._self._c;return t._self._setupProxy,n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("size")]),n("td",[t._v("String")]),n("td",[t._v("'small'")]),n("td",[t._v("'small', 'large'")])]),n("tr",[n("td",[t._v("swap")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")]),n("td",[t._v(" If you need to swap day/night mode [ true ], default: [ false ] ")])])])])}],z=f(p,k,R,!1,null,null,null,null);const V=z.exports;export{V as default};
//# sourceMappingURL=Loaders.fb179e93.js.map

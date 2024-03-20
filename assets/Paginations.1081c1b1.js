var A=Object.defineProperty;var U=(n,l,t)=>l in n?A(n,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[l]=t;var k=(n,l,t)=>(U(n,typeof l!="symbol"?l+"":l,t),t);import{c as W,g as Y,C as j,P as M,V as E,n as F}from"./index.17a864f5.js";import{i as q}from"./ResizeObserver.es.bd9ff68d.js";import{D as z}from"./DemoSection.a0f0b33e.js";import"./Accordion.a5b0018d.js";var O={exports:{}};(function(n,l){(function(t,c){n.exports=c()})(W,function(){return function(t){function c(i){if(e[i])return e[i].exports;var s=e[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,c),s.loaded=!0,s.exports}var e={};return c.m=t,c.c=e,c.p="",c(0)}([function(t,c,e){function i(p){return p&&p.__esModule?p:{default:p}}var s=e(1),a=i(s);t.exports=a.default},function(t,c,e){e(2);var i=e(6)(e(7),e(8),"data-v-82963a40",null);t.exports=i.exports},function(t,c,e){var i=e(3);typeof i=="string"&&(i=[[t.id,i,""]]),e(5)(i,{}),i.locals&&(t.exports=i.locals)},function(t,c,e){c=t.exports=e(4)(),c.push([t.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(t,c){t.exports=function(){var e=[];return e.toString=function(){for(var i=[],s=0;s<this.length;s++){var a=this[s];a[2]?i.push("@media "+a[2]+"{"+a[1]+"}"):i.push(a[1])}return i.join("")},e.i=function(i,s){typeof i=="string"&&(i=[[null,i,""]]);for(var a={},p=0;p<this.length;p++){var m=this[p][0];typeof m=="number"&&(a[m]=!0)}for(p=0;p<i.length;p++){var h=i[p];typeof h[0]=="number"&&a[h[0]]||(s&&!h[2]?h[2]=s:s&&(h[2]="("+h[2]+") and ("+s+")"),e.push(h))}},e}},function(t,c,e){function i(r,o){for(var d=0;d<r.length;d++){var g=r[d],f=_[g.id];if(f){f.refs++;for(var u=0;u<f.parts.length;u++)f.parts[u](g.parts[u]);for(;u<g.parts.length;u++)f.parts.push(h(g.parts[u],o))}else{for(var v=[],u=0;u<g.parts.length;u++)v.push(h(g.parts[u],o));_[g.id]={id:g.id,refs:1,parts:v}}}}function s(r){for(var o=[],d={},g=0;g<r.length;g++){var f=r[g],u=f[0],v=f[1],x=f[2],V=f[3],L={css:v,media:x,sourceMap:V};d[u]?d[u].parts.push(L):o.push(d[u]={id:u,parts:[L]})}return o}function a(r,o){var d=y(),g=B[B.length-1];if(r.insertAt==="top")g?g.nextSibling?d.insertBefore(o,g.nextSibling):d.appendChild(o):d.insertBefore(o,d.firstChild),B.push(o);else{if(r.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");d.appendChild(o)}}function p(r){r.parentNode.removeChild(r);var o=B.indexOf(r);o>=0&&B.splice(o,1)}function m(r){var o=document.createElement("style");return o.type="text/css",a(r,o),o}function h(r,o){var d,g,f;if(o.singleton){var u=I++;d=w||(w=m(o)),g=P.bind(null,d,u,!1),f=P.bind(null,d,u,!0)}else d=m(o),g=b.bind(null,d),f=function(){p(d)};return g(r),function(v){if(v){if(v.css===r.css&&v.media===r.media&&v.sourceMap===r.sourceMap)return;g(r=v)}else f()}}function P(r,o,d,g){var f=d?"":g.css;if(r.styleSheet)r.styleSheet.cssText=H(o,f);else{var u=document.createTextNode(f),v=r.childNodes;v[o]&&r.removeChild(v[o]),v.length?r.insertBefore(u,v[o]):r.appendChild(u)}}function b(r,o){var d=o.css,g=o.media,f=o.sourceMap;if(g&&r.setAttribute("media",g),f&&(d+=`
/*# sourceURL=`+f.sources[0]+" */",d+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(f))))+" */"),r.styleSheet)r.styleSheet.cssText=d;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(d))}}var _={},C=function(r){var o;return function(){return typeof o>"u"&&(o=r.apply(this,arguments)),o}},T=C(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=C(function(){return document.head||document.getElementsByTagName("head")[0]}),w=null,I=0,B=[];t.exports=function(r,o){o=o||{},typeof o.singleton>"u"&&(o.singleton=T()),typeof o.insertAt>"u"&&(o.insertAt="bottom");var d=s(r);return i(d,o),function(g){for(var f=[],u=0;u<d.length;u++){var v=d[u],x=_[v.id];x.refs--,f.push(x)}if(g){var V=s(g);i(V,o)}for(var u=0;u<f.length;u++){var x=f[u];if(x.refs===0){for(var L=0;L<x.parts.length;L++)x.parts[L]();delete _[x.id]}}}};var H=function(){var r=[];return function(o,d){return r[o]=d,r.filter(Boolean).join(`
`)}}()},function(t,c){t.exports=function(e,i,s,a){var p,m=e=e||{},h=typeof e.default;h!=="object"&&h!=="function"||(p=e,m=e.default);var P=typeof m=="function"?m.options:m;if(i&&(P.render=i.render,P.staticRenderFns=i.staticRenderFns),s&&(P._scopeId=s),a){var b=P.computed||(P.computed={});Object.keys(a).forEach(function(_){var C=a[_];b[_]=function(){return C}})}return{esModule:p,exports:m,options:P}}},function(t,c){Object.defineProperty(c,"__esModule",{value:!0}),c.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"\u2026"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){this.forcePage!==void 0&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,i={};if(this.pageCount<=this.pageRange)for(var s=0;s<this.pageCount;s++){var a={index:s,content:s+1,selected:s===this.selected-1};i[s]=a}else{for(var p=Math.floor(this.pageRange/2),m=function(y){var w={index:y,content:y+1,selected:y===e.selected-1};i[y]=w},h=function(y){var w={disabled:!0,breakView:!0};i[y]=w},P=0;P<this.marginPages;P++)m(P);var b=0;this.selected-p>0&&(b=this.selected-1-p);var _=b+this.pageRange-1;_>=this.pageCount&&(_=this.pageCount-1,b=_-this.pageRange+1);for(var C=b;C<=_&&C<=this.pageCount-1;C++)m(C);b>this.marginPages&&h(b-1),_+1<this.pageCount-this.marginPages&&h(_+1);for(var T=this.pageCount-1;T>=this.pageCount-this.marginPages;T--)m(T)}return i}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return this.selected===1},lastPageSelected:function(){return this.selected===this.pageCount||this.pageCount===0},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(t,c){t.exports={render:function(){var e=this,i=e.$createElement,s=e._self._c||i;return e.noLiSurround?s("div",{class:e.containerClass},[e.firstLastButton?s("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(a){e.selectFirstPage()},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.selectFirstPage():null}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():s("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(a){e.prevPage()},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.prevPage():null}}}),e._v(" "),e._l(e.pages,function(a){return[a.breakView?s("a",{class:[e.pageLinkClass,e.breakViewLinkClass,a.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):a.disabled?s("a",{class:[e.pageLinkClass,a.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(a.content))]):s("a",{class:[e.pageLinkClass,a.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(p){e.handlePageSelected(a.index+1)},keyup:function(p){return"button"in p||!e._k(p.keyCode,"enter",13)?void e.handlePageSelected(a.index+1):null}}},[e._v(e._s(a.content))])]}),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():s("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(a){e.nextPage()},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.nextPage():null}}}),e._v(" "),e.firstLastButton?s("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(a){e.selectLastPage()},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.selectLastPage():null}}}):e._e()],2):s("ul",{class:e.containerClass},[e.firstLastButton?s("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[s("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(a){e.selectFirstPage()},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.selectFirstPage():null}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():s("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[s("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(a){e.prevPage()},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.prevPage():null}}})]),e._v(" "),e._l(e.pages,function(a){return s("li",{class:[e.pageClass,a.selected?e.activeClass:"",a.disabled?e.disabledClass:"",a.breakView?e.breakViewClass:""]},[a.breakView?s("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):a.disabled?s("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(a.content))]):s("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(p){e.handlePageSelected(a.index+1)},keyup:function(p){return"button"in p||!e._k(p.keyCode,"enter",13)?void e.handlePageSelected(a.index+1):null}}},[e._v(e._s(a.content))])])}),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():s("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[s("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(a){e.nextPage()},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.nextPage():null}}})]),e._v(" "),e.firstLastButton?s("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[s("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(a){e.selectLastPage()},keyup:function(a){return"button"in a||!e._k(a.keyCode,"enter",13)?void e.selectLastPage():null}}})]):e._e()],2)},staticRenderFns:[]}}])})})(O);const G=Y(O.exports);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,N=(n,l,t,c)=>{for(var e=c>1?void 0:c?K(l,t):l,i=n.length-1,s;i>=0;i--)(s=n[i])&&(e=(c?s(l,t,e):s(e))||e);return c&&e&&J(l,t,e),e};let S=class extends E{constructor(){super(...arguments);k(this,"pageRange",3);k(this,"$refs");k(this,"nightBg");k(this,"itemsPerPage");k(this,"totalItemCount");k(this,"totalPageCount")}mounted(){new q((t,c)=>{for(const e of t){const{left:i,top:s,width:a,height:p}=e.contentRect;a<456&&(this.pageRange=1)}}).observe(this.$refs.pagination)}get pageCount(){if(this.totalPageCount&&this.totalPageCount>0)return this.totalPageCount;let l=this.totalItemCount%this.itemsPerPage>0?1:0;return Math.floor(this.totalItemCount/this.itemsPerPage)+l}selectPage(l){this.$emit("page-selected",l)}};N([M({default:!1})],S.prototype,"nightBg",2);N([M()],S.prototype,"itemsPerPage",2);N([M()],S.prototype,"totalItemCount",2);N([M({default:0})],S.prototype,"totalPageCount",2);S=N([j({components:{VuePaginateComponent:G}})],S);var Q=function(){var n=this,l=n.$createElement,t=n._self._c||l;return t("div",{ref:"pagination",staticClass:"pagination__container"},[t("vue-paginate-component",n._g(n._b({class:{"pagination--bg":n.nightBg},attrs:{"page-count":n.pageCount,"page-range":n.pageRange,"click-handler":n.selectPage,"prev-text":"Prev","next-text":"Next","container-class":"s-pagination","page-class":"s-pagination__page","page-link-class":"s-pagination__page-link","prev-class":"s-pagination__prev","prev-link-class":"s-pagination__prev-link","next-class":"s-pagination__next","next-link-class":"s-pagination__next-link","break-view-class":"s-pagination__break","break-view-link-class":"s-pagination__break-link","active-class":"s-pagination__active","disabled-class":"s-pagination__disabled"}},"vue-paginate-component",n.$attrs,!1),n.$listeners))],1)},X=[];const D={};var Z=F(S,Q,X,!1,ee,null,null,null);function ee(n){for(let l in D)this[l]=D[l]}const te=function(){return Z.exports}(),ne=`<template>
  <div>
    <div class="section">
      <h1>Pagination</h1>
      <p>
        You can pass how many items you would like per page and total items for
        a dynamic page count or manually enter how many pages you want.
      </p>

      <pre><code>import { Pagination } from "streamlabs-beaker"

@Component({
  components: {
    Pagination
  }
})</code></pre>
    </div>

    <div class="section">
      <DemoSection title="Pagination" :code="demoCode">
        <template #components>
          <Pagination
            :night-bg="true"
            :items-per-page="4"
            :total-item-count="2010"
            @page-selected="consolePage"
          />
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
          <td>value | v-model</td>
          <td>Number</td>
          <td>undefined</td>
          <td>Use to change page programmatically.</td>
        </tr>
        <tr>
          <td>nightBg</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Adds dark background while in night mode.</td>
        </tr>
        <tr>
          <td>itemsPerPage</td>
          <td>Number</td>
          <td>null</td>
          <td>The number of items per page.</td>
        </tr>
        <tr>
          <td>totalItemCount</td>
          <td>Number</td>
          <td>null</td>
          <td>The number of items total.</td>
        </tr>
        <tr>
          <td>totalPageCount</td>
          <td>Number</td>
          <td>0</td>
          <td>
            Manually set the number of pages you want. Will ignore
            <code>itemsPerPage</code> & <code>totalItemCount</code> props when
            set.
          </td>
        </tr>
        <tr>
          <td>@page-selected</td>
          <td>Event</td>
          <td>null</td>
          <td>
            Event emitted when page is changed. Passes current page number.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Pagination from "./../components/Pagination.vue";
import PaginationsCode from "./Paginations.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    DemoSection,
    Pagination
  }
})
export default class Paginations extends Vue {
  demoCode = PaginationsCode;

  consolePage(page: number) {
    let groupStart = page * 4 - 4;
  }
}
<\/script>
`;var ae=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ie=(n,l,t,c)=>{for(var e=c>1?void 0:c?se(l,t):l,i=n.length-1,s;i>=0;i--)(s=n[i])&&(e=(c?s(l,t,e):s(e))||e);return c&&e&&ae(l,t,e),e};let $=class extends E{constructor(){super(...arguments);k(this,"demoCode",ne)}consolePage(l){}};$=ie([j({components:{DemoSection:z,Pagination:te}})],$);var oe=function(){var n=this,l=n.$createElement,t=n._self._c||l;return t("div",[n._m(0),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Pagination",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Pagination",{attrs:{"night-bg":!0,"items-per-page":4,"total-item-count":2010},on:{"page-selected":n.consolePage}})]},proxy:!0}])})],1),n._m(1)])},re=[function(){var n=this,l=n.$createElement,t=n._self._c||l;return t("div",{staticClass:"section"},[t("h1",[n._v("Pagination")]),t("p",[n._v(" You can pass how many items you would like per page and total items for a dynamic page count or manually enter how many pages you want. ")]),t("pre",[t("code",[n._v(`import { Pagination } from "streamlabs-beaker"

@Component({
  components: {
    Pagination
  }
})`)])])])},function(){var n=this,l=n.$createElement,t=n._self._c||l;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Props")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("value | v-model")]),t("td",[n._v("Number")]),t("td",[n._v("undefined")]),t("td",[n._v("Use to change page programmatically.")])]),t("tr",[t("td",[n._v("nightBg")]),t("td",[n._v("Boolean")]),t("td",[n._v("false")]),t("td",[n._v("Adds dark background while in night mode.")])]),t("tr",[t("td",[n._v("itemsPerPage")]),t("td",[n._v("Number")]),t("td",[n._v("null")]),t("td",[n._v("The number of items per page.")])]),t("tr",[t("td",[n._v("totalItemCount")]),t("td",[n._v("Number")]),t("td",[n._v("null")]),t("td",[n._v("The number of items total.")])]),t("tr",[t("td",[n._v("totalPageCount")]),t("td",[n._v("Number")]),t("td",[n._v("0")]),t("td",[n._v(" Manually set the number of pages you want. Will ignore "),t("code",[n._v("itemsPerPage")]),n._v(" & "),t("code",[n._v("totalItemCount")]),n._v(" props when set. ")])]),t("tr",[t("td",[n._v("@page-selected")]),t("td",[n._v("Event")]),t("td",[n._v("null")]),t("td",[n._v(" Event emitted when page is changed. Passes current page number. ")])])])])}];const R={};var le=F($,oe,re,!1,de,null,null,null);function de(n){for(let l in R)this[l]=R[l]}const ve=function(){return le.exports}();export{ve as default};
//# sourceMappingURL=Paginations.1081c1b1.js.map

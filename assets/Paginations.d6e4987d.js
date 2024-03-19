var E=Object.defineProperty;var H=(s,t,o)=>t in s?E(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o;var k=(s,t,o)=>(H(s,typeof t!="symbol"?t+"":t,o),o);import{a as A,g as U,C as R,P as V,V as $,n as F}from"./index.4fb8a6cb.js";import{i as W}from"./ResizeObserver.es.bd9ff68d.js";import{D as Y}from"./DemoSection.79ee11c0.js";import"./Accordion.09c82396.js";var j={exports:{}};(function(s,t){(function(o,c){s.exports=c()})(A,function(){return function(o){function c(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return o[i].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}var e={};return c.m=o,c.c=e,c.p="",c(0)}([function(o,c,e){function i(p){return p&&p.__esModule?p:{default:p}}var a=e(1),n=i(a);o.exports=n.default},function(o,c,e){e(2);var i=e(6)(e(7),e(8),"data-v-82963a40",null);o.exports=i.exports},function(o,c,e){var i=e(3);typeof i=="string"&&(i=[[o.id,i,""]]),e(5)(i,{}),i.locals&&(o.exports=i.locals)},function(o,c,e){c=o.exports=e(4)(),c.push([o.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(o,c){o.exports=function(){var e=[];return e.toString=function(){for(var i=[],a=0;a<this.length;a++){var n=this[a];n[2]?i.push("@media "+n[2]+"{"+n[1]+"}"):i.push(n[1])}return i.join("")},e.i=function(i,a){typeof i=="string"&&(i=[[null,i,""]]);for(var n={},p=0;p<this.length;p++){var h=this[p][0];typeof h=="number"&&(n[h]=!0)}for(p=0;p<i.length;p++){var m=i[p];typeof m[0]=="number"&&n[m[0]]||(a&&!m[2]?m[2]=a:a&&(m[2]="("+m[2]+") and ("+a+")"),e.push(m))}},e}},function(o,c,e){function i(l,r){for(var d=0;d<l.length;d++){var g=l[d],f=_[g.id];if(f){f.refs++;for(var u=0;u<f.parts.length;u++)f.parts[u](g.parts[u]);for(;u<g.parts.length;u++)f.parts.push(m(g.parts[u],r))}else{for(var v=[],u=0;u<g.parts.length;u++)v.push(m(g.parts[u],r));_[g.id]={id:g.id,refs:1,parts:v}}}}function a(l){for(var r=[],d={},g=0;g<l.length;g++){var f=l[g],u=f[0],v=f[1],x=f[2],M=f[3],L={css:v,media:x,sourceMap:M};d[u]?d[u].parts.push(L):r.push(d[u]={id:u,parts:[L]})}return r}function n(l,r){var d=y(),g=B[B.length-1];if(l.insertAt==="top")g?g.nextSibling?d.insertBefore(r,g.nextSibling):d.appendChild(r):d.insertBefore(r,d.firstChild),B.push(r);else{if(l.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");d.appendChild(r)}}function p(l){l.parentNode.removeChild(l);var r=B.indexOf(l);r>=0&&B.splice(r,1)}function h(l){var r=document.createElement("style");return r.type="text/css",n(l,r),r}function m(l,r){var d,g,f;if(r.singleton){var u=O++;d=w||(w=h(r)),g=P.bind(null,d,u,!1),f=P.bind(null,d,u,!0)}else d=h(r),g=b.bind(null,d),f=function(){p(d)};return g(l),function(v){if(v){if(v.css===l.css&&v.media===l.media&&v.sourceMap===l.sourceMap)return;g(l=v)}else f()}}function P(l,r,d,g){var f=d?"":g.css;if(l.styleSheet)l.styleSheet.cssText=I(r,f);else{var u=document.createTextNode(f),v=l.childNodes;v[r]&&l.removeChild(v[r]),v.length?l.insertBefore(u,v[r]):l.appendChild(u)}}function b(l,r){var d=r.css,g=r.media,f=r.sourceMap;if(g&&l.setAttribute("media",g),f&&(d+=`
/*# sourceURL=`+f.sources[0]+" */",d+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(f))))+" */"),l.styleSheet)l.styleSheet.cssText=d;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(d))}}var _={},C=function(l){var r;return function(){return typeof r>"u"&&(r=l.apply(this,arguments)),r}},T=C(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=C(function(){return document.head||document.getElementsByTagName("head")[0]}),w=null,O=0,B=[];o.exports=function(l,r){r=r||{},typeof r.singleton>"u"&&(r.singleton=T()),typeof r.insertAt>"u"&&(r.insertAt="bottom");var d=a(l);return i(d,r),function(g){for(var f=[],u=0;u<d.length;u++){var v=d[u],x=_[v.id];x.refs--,f.push(x)}if(g){var M=a(g);i(M,r)}for(var u=0;u<f.length;u++){var x=f[u];if(x.refs===0){for(var L=0;L<x.parts.length;L++)x.parts[L]();delete _[x.id]}}}};var I=function(){var l=[];return function(r,d){return l[r]=d,l.filter(Boolean).join(`
`)}}()},function(o,c){o.exports=function(e,i,a,n){var p,h=e=e||{},m=typeof e.default;m!=="object"&&m!=="function"||(p=e,h=e.default);var P=typeof h=="function"?h.options:h;if(i&&(P.render=i.render,P.staticRenderFns=i.staticRenderFns),a&&(P._scopeId=a),n){var b=P.computed||(P.computed={});Object.keys(n).forEach(function(_){var C=n[_];b[_]=function(){return C}})}return{esModule:p,exports:h,options:P}}},function(o,c){Object.defineProperty(c,"__esModule",{value:!0}),c.default={props:{value:{type:Number},pageCount:{type:Number,required:!0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"\u2026"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},beforeUpdate:function(){this.forcePage!==void 0&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{selected:{get:function(){return this.value||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){var e=this,i={};if(this.pageCount<=this.pageRange)for(var a=0;a<this.pageCount;a++){var n={index:a,content:a+1,selected:a===this.selected-1};i[a]=n}else{for(var p=Math.floor(this.pageRange/2),h=function(y){var w={index:y,content:y+1,selected:y===e.selected-1};i[y]=w},m=function(y){var w={disabled:!0,breakView:!0};i[y]=w},P=0;P<this.marginPages;P++)h(P);var b=0;this.selected-p>0&&(b=this.selected-1-p);var _=b+this.pageRange-1;_>=this.pageCount&&(_=this.pageCount-1,b=_-this.pageRange+1);for(var C=b;C<=_&&C<=this.pageCount-1;C++)h(C);b>this.marginPages&&m(b-1),_+1<this.pageCount-this.marginPages&&m(_+1);for(var T=this.pageCount-1;T>=this.pageCount-this.marginPages;T--)h(T)}return i}},data:function(){return{innerValue:1}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.innerValue=e,this.$emit("input",e),this.clickHandler(e))},prevPage:function(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected:function(){return this.selected===1},lastPageSelected:function(){return this.selected===this.pageCount||this.pageCount===0},selectFirstPage:function(){this.selected<=1||this.handlePageSelected(1)},selectLastPage:function(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}}}},function(o,c){o.exports={render:function(){var e=this,i=e.$createElement,a=e._self._c||i;return e.noLiSurround?a("div",{class:e.containerClass},[e.firstLastButton?a("a",{class:[e.pageLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(n){e.selectFirstPage()},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.selectFirstPage():null}}}):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():a("a",{class:[e.prevLinkClass,e.firstPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(n){e.prevPage()},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.prevPage():null}}}),e._v(" "),e._l(e.pages,function(n){return[n.breakView?a("a",{class:[e.pageLinkClass,e.breakViewLinkClass,n.disabled?e.disabledClass:""],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):n.disabled?a("a",{class:[e.pageLinkClass,n.selected?e.activeClass:"",e.disabledClass],attrs:{tabindex:"0"}},[e._v(e._s(n.content))]):a("a",{class:[e.pageLinkClass,n.selected?e.activeClass:""],attrs:{tabindex:"0"},on:{click:function(p){e.handlePageSelected(n.index+1)},keyup:function(p){return"button"in p||!e._k(p.keyCode,"enter",13)?void e.handlePageSelected(n.index+1):null}}},[e._v(e._s(n.content))])]}),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():a("a",{class:[e.nextLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(n){e.nextPage()},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.nextPage():null}}}),e._v(" "),e.firstLastButton?a("a",{class:[e.pageLinkClass,e.lastPageSelected()?e.disabledClass:""],attrs:{tabindex:"0"},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(n){e.selectLastPage()},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.selectLastPage():null}}}):e._e()],2):a("ul",{class:e.containerClass},[e.firstLastButton?a("li",{class:[e.pageClass,e.firstPageSelected()?e.disabledClass:""]},[a("a",{class:e.pageLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.firstButtonText)},on:{click:function(n){e.selectFirstPage()},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.selectFirstPage():null}}})]):e._e(),e._v(" "),e.firstPageSelected()&&e.hidePrevNext?e._e():a("li",{class:[e.prevClass,e.firstPageSelected()?e.disabledClass:""]},[a("a",{class:e.prevLinkClass,attrs:{tabindex:e.firstPageSelected()?-1:0},domProps:{innerHTML:e._s(e.prevText)},on:{click:function(n){e.prevPage()},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.prevPage():null}}})]),e._v(" "),e._l(e.pages,function(n){return a("li",{class:[e.pageClass,n.selected?e.activeClass:"",n.disabled?e.disabledClass:"",n.breakView?e.breakViewClass:""]},[n.breakView?a("a",{class:[e.pageLinkClass,e.breakViewLinkClass],attrs:{tabindex:"0"}},[e._t("breakViewContent",[e._v(e._s(e.breakViewText))])],2):n.disabled?a("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(n.content))]):a("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(p){e.handlePageSelected(n.index+1)},keyup:function(p){return"button"in p||!e._k(p.keyCode,"enter",13)?void e.handlePageSelected(n.index+1):null}}},[e._v(e._s(n.content))])])}),e._v(" "),e.lastPageSelected()&&e.hidePrevNext?e._e():a("li",{class:[e.nextClass,e.lastPageSelected()?e.disabledClass:""]},[a("a",{class:e.nextLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.nextText)},on:{click:function(n){e.nextPage()},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.nextPage():null}}})]),e._v(" "),e.firstLastButton?a("li",{class:[e.pageClass,e.lastPageSelected()?e.disabledClass:""]},[a("a",{class:e.pageLinkClass,attrs:{tabindex:e.lastPageSelected()?-1:0},domProps:{innerHTML:e._s(e.lastButtonText)},on:{click:function(n){e.selectLastPage()},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.selectLastPage():null}}})]):e._e()],2)},staticRenderFns:[]}}])})})(j);const q=U(j.exports);var z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,N=(s,t,o,c)=>{for(var e=c>1?void 0:c?G(t,o):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(e=(c?a(t,o,e):a(e))||e);return c&&e&&z(t,o,e),e};let S=class extends ${constructor(){super(...arguments);k(this,"pageRange",3);k(this,"$refs");k(this,"nightBg");k(this,"itemsPerPage");k(this,"totalItemCount");k(this,"totalPageCount")}mounted(){new W((o,c)=>{for(const e of o){const{left:i,top:a,width:n,height:p}=e.contentRect;n<456&&(this.pageRange=1)}}).observe(this.$refs.pagination)}get pageCount(){if(this.totalPageCount&&this.totalPageCount>0)return this.totalPageCount;let t=this.totalItemCount%this.itemsPerPage>0?1:0;return Math.floor(this.totalItemCount/this.itemsPerPage)+t}selectPage(t){this.$emit("page-selected",t)}};N([V({default:!1})],S.prototype,"nightBg",2);N([V()],S.prototype,"itemsPerPage",2);N([V()],S.prototype,"totalItemCount",2);N([V({default:0})],S.prototype,"totalPageCount",2);S=N([R({components:{VuePaginateComponent:q}})],S);var J=function(){var t=this,o=t._self._c;return t._self._setupProxy,o("div",{ref:"pagination",staticClass:"pagination__container"},[o("vue-paginate-component",t._g(t._b({class:{"pagination--bg":t.nightBg},attrs:{"page-count":t.pageCount,"page-range":t.pageRange,"click-handler":t.selectPage,"prev-text":"Prev","next-text":"Next","container-class":"s-pagination","page-class":"s-pagination__page","page-link-class":"s-pagination__page-link","prev-class":"s-pagination__prev","prev-link-class":"s-pagination__prev-link","next-class":"s-pagination__next","next-link-class":"s-pagination__next-link","break-view-class":"s-pagination__break","break-view-link-class":"s-pagination__break-link","active-class":"s-pagination__active","disabled-class":"s-pagination__disabled"}},"vue-paginate-component",t.$attrs,!1),t.$listeners))],1)},K=[],Q=F(S,J,K,!1,null,null,null,null);const X=Q.exports,Z=`<template>
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
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ne=(s,t,o,c)=>{for(var e=c>1?void 0:c?te(t,o):t,i=s.length-1,a;i>=0;i--)(a=s[i])&&(e=(c?a(t,o,e):a(e))||e);return c&&e&&ee(t,o,e),e};let D=class extends ${constructor(){super(...arguments);k(this,"demoCode",Z)}consolePage(t){}};D=ne([R({components:{DemoSection:Y,Pagination:X}})],D);var ae=function(){var t=this,o=t._self._c;return t._self._setupProxy,o("div",[t._m(0),o("div",{staticClass:"section"},[o("DemoSection",{attrs:{title:"Pagination",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[o("Pagination",{attrs:{"night-bg":!0,"items-per-page":4,"total-item-count":2010},on:{"page-selected":t.consolePage}})]},proxy:!0}])})],1),t._m(1)])},se=[function(){var s=this,t=s._self._c;return s._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[s._v("Pagination")]),t("p",[s._v(" You can pass how many items you would like per page and total items for a dynamic page count or manually enter how many pages you want. ")]),t("pre",[t("code",[s._v(`import { Pagination } from "streamlabs-beaker"

@Component({
  components: {
    Pagination
  }
})`)])])])},function(){var s=this,t=s._self._c;return s._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[s._v("Props")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("value | v-model")]),t("td",[s._v("Number")]),t("td",[s._v("undefined")]),t("td",[s._v("Use to change page programmatically.")])]),t("tr",[t("td",[s._v("nightBg")]),t("td",[s._v("Boolean")]),t("td",[s._v("false")]),t("td",[s._v("Adds dark background while in night mode.")])]),t("tr",[t("td",[s._v("itemsPerPage")]),t("td",[s._v("Number")]),t("td",[s._v("null")]),t("td",[s._v("The number of items per page.")])]),t("tr",[t("td",[s._v("totalItemCount")]),t("td",[s._v("Number")]),t("td",[s._v("null")]),t("td",[s._v("The number of items total.")])]),t("tr",[t("td",[s._v("totalPageCount")]),t("td",[s._v("Number")]),t("td",[s._v("0")]),t("td",[s._v(" Manually set the number of pages you want. Will ignore "),t("code",[s._v("itemsPerPage")]),s._v(" & "),t("code",[s._v("totalItemCount")]),s._v(" props when set. ")])]),t("tr",[t("td",[s._v("@page-selected")]),t("td",[s._v("Event")]),t("td",[s._v("null")]),t("td",[s._v(" Event emitted when page is changed. Passes current page number. ")])])])])}],ie=F(D,ae,se,!1,null,null,null,null);const ue=ie.exports;export{ue as default};
//# sourceMappingURL=Paginations.d6e4987d.js.map

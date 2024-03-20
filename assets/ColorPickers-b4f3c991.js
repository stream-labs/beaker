var Et=Object.defineProperty;var Mt=(v,R,o)=>R in v?Et(v,R,{enumerable:!0,configurable:!0,writable:!0,value:o}):v[R]=o;var rt=(v,R,o)=>(Mt(v,typeof R!="symbol"?R+"":R,o),o);import{c as mt,C as kt,P as xt,V as St,n as Ft}from"./index-e8bb31bb.js";import{D as Pt}from"./DemoSection-b2dfe451.js";import"./Accordion-79d22a9d.js";var At={exports:{}};(function(v,R){(function(o,i){v.exports=i()})(typeof self<"u"?self:mt,function(){return function(o){function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return o[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}var e={};return i.m=o,i.c=e,i.d=function(n,a,s){i.o(n,a)||Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:s})},i.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(a,"a",a),a},i.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},i.p="",i(i.s=60)}([function(o,i){function e(a,s){var t=a[1]||"",f=a[3];if(!f)return t;if(s&&typeof btoa=="function"){var r=n(f);return[t].concat(f.sources.map(function(c){return"/*# sourceURL="+f.sourceRoot+c+" */"})).concat([r]).join(`
`)}return[t].join(`
`)}function n(a){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"}o.exports=function(a){var s=[];return s.toString=function(){return this.map(function(t){var f=e(t,a);return t[2]?"@media "+t[2]+"{"+f+"}":f}).join("")},s.i=function(t,f){typeof t=="string"&&(t=[[null,t,""]]);for(var r={},c=0;c<this.length;c++){var p=this[c][0];typeof p=="number"&&(r[p]=!0)}for(c=0;c<t.length;c++){var d=t[c];typeof d[0]=="number"&&r[d[0]]||(f&&!d[2]?d[2]=f:f&&(d[2]="("+d[2]+") and ("+f+")"),s.push(d))}},s}},function(o,i,e){function n(A){for(var j=0;j<A.length;j++){var D=A[j],E=p[D.id];if(E){E.refs++;for(var g=0;g<E.parts.length;g++)E.parts[g](D.parts[g]);for(;g<D.parts.length;g++)E.parts.push(s(D.parts[g]));E.parts.length>D.parts.length&&(E.parts.length=D.parts.length)}else{for(var O=[],g=0;g<D.parts.length;g++)O.push(s(D.parts[g]));p[D.id]={id:D.id,refs:1,parts:O}}}}function a(){var A=document.createElement("style");return A.type="text/css",d.appendChild(A),A}function s(A){var j,D,E=document.querySelector("style["+F+'~="'+A.id+'"]');if(E){if(m)return k;E.parentNode.removeChild(E)}if(H){var g=M++;E=b||(b=a()),j=t.bind(null,E,g,!1),D=t.bind(null,E,g,!0)}else E=a(),j=f.bind(null,E),D=function(){E.parentNode.removeChild(E)};return j(A),function(O){if(O){if(O.css===A.css&&O.media===A.media&&O.sourceMap===A.sourceMap)return;j(A=O)}else D()}}function t(A,j,D,E){var g=D?"":E.css;if(A.styleSheet)A.styleSheet.cssText=J(j,g);else{var O=document.createTextNode(g),B=A.childNodes;B[j]&&A.removeChild(B[j]),B.length?A.insertBefore(O,B[j]):A.appendChild(O)}}function f(A,j){var D=j.css,E=j.media,g=j.sourceMap;if(E&&A.setAttribute("media",E),w.ssrId&&A.setAttribute(F,j.id),g&&(D+=`
/*# sourceURL=`+g.sources[0]+" */",D+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(g))))+" */"),A.styleSheet)A.styleSheet.cssText=D;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(D))}}var r=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=e(64),p={},d=r&&(document.head||document.getElementsByTagName("head")[0]),b=null,M=0,m=!1,k=function(){},w=null,F="data-vue-ssr-id",H=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());o.exports=function(A,j,D,E){m=D,w=E||{};var g=c(A,j);return n(g),function(O){for(var B=[],T=0;T<g.length;T++){var U=g[T],L=p[U.id];L.refs--,B.push(L)}O?(g=c(A,O),n(g)):g=[];for(var T=0;T<B.length;T++){var L=B[T];if(L.refs===0){for(var X=0;X<L.parts.length;X++)L.parts[X]();delete p[L.id]}}}};var J=function(){var A=[];return function(j,D){return A[j]=D,A.filter(Boolean).join(`
`)}}()},function(o,i){o.exports=function(e,n,a,s,t,f){var r,c=e=e||{},p=typeof e.default;p!=="object"&&p!=="function"||(r=e,c=e.default);var d=typeof c=="function"?c.options:c;n&&(d.render=n.render,d.staticRenderFns=n.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),t&&(d._scopeId=t);var b;if(f?(b=function(k){k=k||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,k||typeof __VUE_SSR_CONTEXT__>"u"||(k=__VUE_SSR_CONTEXT__),s&&s.call(this,k),k&&k._registeredComponents&&k._registeredComponents.add(f)},d._ssrRegister=b):s&&(b=s),b){var M=d.functional,m=M?d.render:d.beforeCreate;M?(d._injectStyles=b,d.render=function(k,w){return b.call(w),m(k,w)}):d.beforeCreate=m?[].concat(m,b):[b]}return{esModule:r,exports:c,options:d}}},function(o,i,e){function n(t,f){var r,c=t&&t.a;!(r=t&&t.hsl?(0,s.default)(t.hsl):t&&t.hex&&t.hex.length>0?(0,s.default)(t.hex):t&&t.hsv?(0,s.default)(t.hsv):t&&t.rgba?(0,s.default)(t.rgba):t&&t.rgb?(0,s.default)(t.rgb):(0,s.default)(t))||r._a!==void 0&&r._a!==null||r.setAlpha(c||1);var p=r.toHsl(),d=r.toHsv();return p.s===0&&(d.h=p.h=t.h||t.hsl&&t.hsl.h||f||0),{hsl:p,hex:r.toHexString().toUpperCase(),hex8:r.toHex8String().toUpperCase(),rgba:r.toRgb(),hsv:d,oldHue:t.h||f||p.h,source:t.source,a:t.a||r.getAlpha()}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(65),s=function(t){return t&&t.__esModule?t:{default:t}}(a);i.default={props:["value"],data:function(){return{val:n(this.value)}},computed:{colors:{get:function(){return this.val},set:function(t){this.val=t,this.$emit("input",t)}}},watch:{value:function(t){this.val=n(t)}},methods:{colorChange:function(t,f){this.oldHue=this.colors.hsl.h,this.colors=n(t,f||this.oldHue)},isValidHex:function(t){return(0,s.default)(t).isValid()},simpleCheckForValidColor:function(t){for(var f=["r","g","b","a","h","s","l","v"],r=0,c=0,p=0;p<f.length;p++){var d=f[p];t[d]&&(r++,isNaN(t[d])||c++)}if(r===c)return t},paletteUpperCase:function(t){return t.map(function(f){return f.toUpperCase()})},isTransparent:function(t){return(0,s.default)(t).getAlpha()===0}}}},function(o,i){var e=o.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=e)},function(o,i,e){function n(d){e(66)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(36),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(68),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/common/EditableInput.vue",i.default=p.exports},function(o,i){var e={}.hasOwnProperty;o.exports=function(n,a){return e.call(n,a)}},function(o,i,e){var n=e(8),a=e(18);o.exports=e(9)?function(s,t,f){return n.f(s,t,a(1,f))}:function(s,t,f){return s[t]=f,s}},function(o,i,e){var n=e(16),a=e(42),s=e(25),t=Object.defineProperty;i.f=e(9)?Object.defineProperty:function(f,r,c){if(n(f),r=s(r,!0),n(c),a)try{return t(f,r,c)}catch{}if("get"in c||"set"in c)throw TypeError("Accessors not supported!");return"value"in c&&(f[r]=c.value),f}},function(o,i,e){o.exports=!e(17)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(o,i,e){var n=e(90),a=e(24);o.exports=function(s){return n(a(s))}},function(o,i,e){var n=e(29)("wks"),a=e(19),s=e(4).Symbol,t=typeof s=="function";(o.exports=function(f){return n[f]||(n[f]=t&&s[f]||(t?s:a)("Symbol."+f))}).store=n},function(o,i){o.exports=function(e){return typeof e=="object"?e!==null:typeof e=="function"}},function(o,i,e){function n(d){e(111)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(51),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(113),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/common/Hue.vue",i.default=p.exports},function(o,i){o.exports=!0},function(o,i){var e=o.exports={version:"2.6.11"};typeof __e=="number"&&(__e=e)},function(o,i,e){var n=e(12);o.exports=function(a){if(!n(a))throw TypeError(a+" is not an object!");return a}},function(o,i){o.exports=function(e){try{return!!e()}catch{return!0}}},function(o,i){o.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},function(o,i){var e=0,n=Math.random();o.exports=function(a){return"Symbol(".concat(a===void 0?"":a,")_",(++e+n).toString(36))}},function(o,i,e){function n(d){e(123)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(54),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(127),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/common/Saturation.vue",i.default=p.exports},function(o,i,e){function n(d){e(128)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(55),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(133),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/common/Alpha.vue",i.default=p.exports},function(o,i,e){function n(d){e(130)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(56),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(132),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/common/Checkboard.vue",i.default=p.exports},function(o,i){var e=Math.ceil,n=Math.floor;o.exports=function(a){return isNaN(a=+a)?0:(a>0?n:e)(a)}},function(o,i){o.exports=function(e){if(e==null)throw TypeError("Can't call method on  "+e);return e}},function(o,i,e){var n=e(12);o.exports=function(a,s){if(!n(a))return a;var t,f;if(s&&typeof(t=a.toString)=="function"&&!n(f=t.call(a))||typeof(t=a.valueOf)=="function"&&!n(f=t.call(a))||!s&&typeof(t=a.toString)=="function"&&!n(f=t.call(a)))return f;throw TypeError("Can't convert object to primitive value")}},function(o,i){o.exports={}},function(o,i,e){var n=e(46),a=e(30);o.exports=Object.keys||function(s){return n(s,a)}},function(o,i,e){var n=e(29)("keys"),a=e(19);o.exports=function(s){return n[s]||(n[s]=a(s))}},function(o,i,e){var n=e(15),a=e(4),s=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(o.exports=function(t,f){return s[t]||(s[t]=f!==void 0?f:{})})("versions",[]).push({version:n.version,mode:e(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(o,i){o.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(o,i,e){var n=e(8).f,a=e(6),s=e(11)("toStringTag");o.exports=function(t,f,r){t&&!a(t=r?t:t.prototype,s)&&n(t,s,{configurable:!0,value:f})}},function(o,i,e){i.f=e(11)},function(o,i,e){var n=e(4),a=e(15),s=e(14),t=e(32),f=e(8).f;o.exports=function(r){var c=a.Symbol||(a.Symbol=s?{}:n.Symbol||{});r.charAt(0)=="_"||r in c||f(c,r,{value:t.f(r)})}},function(o,i){i.f={}.propertyIsEnumerable},function(o,i,e){function n(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(3),s=n(a),t=e(5),f=n(t),r=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];i.default={name:"Compact",mixins:[s.default],props:{palette:{type:Array,default:function(){return r}}},components:{"ed-in":f.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(c){this.colorChange({hex:c,source:"hex"})}}}},function(o,i,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(n){if(!(this.max!==void 0&&+n>this.max))return n;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(n){this.handleChange(n.target.value)},handleChange:function(n){var a={};a[this.label]=n,a.hex===void 0&&a["#"]===void 0?this.$emit("change",a):n.length>5&&this.$emit("change",a)},handleKeyDown:function(n){var a=this.val,s=Number(a);if(s){var t=this.arrowOffset||1;n.keyCode===38&&(a=s+t,this.handleChange(a),n.preventDefault()),n.keyCode===40&&(a=s-t,this.handleChange(a),n.preventDefault())}}}}},function(o,i,e){Object.defineProperty(i,"__esModule",{value:!0});var n=e(3),a=function(t){return t&&t.__esModule?t:{default:t}}(n),s=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];i.default={name:"Grayscale",mixins:[a.default],props:{palette:{type:Array,default:function(){return s}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(t){this.colorChange({hex:t,source:"hex"})}}}},function(o,i,e){function n(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(5),s=n(a),t=e(3),f=n(t);i.default={name:"Material",mixins:[f.default],components:{"ed-in":s.default},methods:{onChange:function(r){r&&(r.hex?this.isValidHex(r.hex)&&this.colorChange({hex:r.hex,source:"hex"}):(r.r||r.g||r.b)&&this.colorChange({r:r.r||this.colors.rgba.r,g:r.g||this.colors.rgba.g,b:r.b||this.colors.rgba.b,a:r.a||this.colors.rgba.a,source:"rgba"}))}}}},function(o,i,e){function n(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(81),s=n(a),t=e(3),f=n(t),r=e(13),c=n(r);i.default={name:"Slider",mixins:[f.default],props:{swatches:{type:Array,default:function(){return[{s:.5,l:.8},{s:.5,l:.65},{s:.5,l:.5},{s:.5,l:.35},{s:.5,l:.2}]}}},components:{hue:c.default},computed:{normalizedSwatches:function(){return this.swatches.map(function(p){return(p===void 0?"undefined":(0,s.default)(p))!=="object"?{s:.5,l:p}:p})}},methods:{isActive:function(p,d){var b=this.colors.hsl;return b.l===1&&p.l===1||b.l===0&&p.l===0||Math.abs(b.l-p.l)<.01&&Math.abs(b.s-p.s)<.01},hueChange:function(p){this.colorChange(p)},handleSwClick:function(p,d){this.colorChange({h:this.colors.hsl.h,s:d.s,l:d.l,source:"hsl"})}}}},function(o,i,e){var n=e(14),a=e(41),s=e(44),t=e(7),f=e(26),r=e(88),c=e(31),p=e(95),d=e(11)("iterator"),b=!([].keys&&"next"in[].keys()),M=function(){return this};o.exports=function(m,k,w,F,H,J,A){r(w,k,F);var j,D,E,g=function(G){if(!b&&G in U)return U[G];switch(G){case"keys":case"values":return function(){return new w(this,G)}}return function(){return new w(this,G)}},O=k+" Iterator",B=H=="values",T=!1,U=m.prototype,L=U[d]||U["@@iterator"]||H&&U[H],X=L||g(H),N=H?B?g("entries"):X:void 0,lt=k=="Array"&&U.entries||L;if(lt&&(E=p(lt.call(new m)))!==Object.prototype&&E.next&&(c(E,O,!0),n||typeof E[d]=="function"||t(E,d,M)),B&&L&&L.name!=="values"&&(T=!0,X=function(){return L.call(this)}),n&&!A||!b&&!T&&U[d]||t(U,d,X),f[k]=X,f[O]=M,H)if(j={values:B?X:g("values"),keys:J?X:g("keys"),entries:N},A)for(D in j)D in U||s(U,D,j[D]);else a(a.P+a.F*(b||T),k,j);return j}},function(o,i,e){var n=e(4),a=e(15),s=e(86),t=e(7),f=e(6),r=function(c,p,d){var b,M,m,k=c&r.F,w=c&r.G,F=c&r.S,H=c&r.P,J=c&r.B,A=c&r.W,j=w?a:a[p]||(a[p]={}),D=j.prototype,E=w?n:F?n[p]:(n[p]||{}).prototype;w&&(d=p);for(b in d)(M=!k&&E&&E[b]!==void 0)&&f(j,b)||(m=M?E[b]:d[b],j[b]=w&&typeof E[b]!="function"?d[b]:J&&M?s(m,n):A&&E[b]==m?function(g){var O=function(B,T,U){if(this instanceof g){switch(arguments.length){case 0:return new g;case 1:return new g(B);case 2:return new g(B,T)}return new g(B,T,U)}return g.apply(this,arguments)};return O.prototype=g.prototype,O}(m):H&&typeof m=="function"?s(Function.call,m):m,H&&((j.virtual||(j.virtual={}))[b]=m,c&r.R&&D&&!D[b]&&t(D,b,m)))};r.F=1,r.G=2,r.S=4,r.P=8,r.B=16,r.W=32,r.U=64,r.R=128,o.exports=r},function(o,i,e){o.exports=!e(9)&&!e(17)(function(){return Object.defineProperty(e(43)("div"),"a",{get:function(){return 7}}).a!=7})},function(o,i,e){var n=e(12),a=e(4).document,s=n(a)&&n(a.createElement);o.exports=function(t){return s?a.createElement(t):{}}},function(o,i,e){o.exports=e(7)},function(o,i,e){var n=e(16),a=e(89),s=e(30),t=e(28)("IE_PROTO"),f=function(){},r=function(){var c,p=e(43)("iframe"),d=s.length;for(p.style.display="none",e(94).appendChild(p),p.src="javascript:",c=p.contentWindow.document,c.open(),c.write("<script>document.F=Object<\/script>"),c.close(),r=c.F;d--;)delete r.prototype[s[d]];return r()};o.exports=Object.create||function(c,p){var d;return c!==null?(f.prototype=n(c),d=new f,f.prototype=null,d[t]=c):d=r(),p===void 0?d:a(d,p)}},function(o,i,e){var n=e(6),a=e(10),s=e(91)(!1),t=e(28)("IE_PROTO");o.exports=function(f,r){var c,p=a(f),d=0,b=[];for(c in p)c!=t&&n(p,c)&&b.push(c);for(;r.length>d;)n(p,c=r[d++])&&(~s(b,c)||b.push(c));return b}},function(o,i){var e={}.toString;o.exports=function(n){return e.call(n).slice(8,-1)}},function(o,i,e){var n=e(24);o.exports=function(a){return Object(n(a))}},function(o,i){i.f=Object.getOwnPropertySymbols},function(o,i,e){var n=e(46),a=e(30).concat("length","prototype");i.f=Object.getOwnPropertyNames||function(s){return n(s,a)}},function(o,i,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var n=this.value.hsl.h;return n!==0&&n-this.oldHue>0&&(this.pullDirection="right"),n!==0&&n-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=n,this.value},directionClass:function(){return{"vc-hue--horizontal":this.direction==="horizontal","vc-hue--vertical":this.direction==="vertical"}},pointerTop:function(){return this.direction==="vertical"?this.colors.hsl.h===0&&this.pullDirection==="right"?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return this.direction==="vertical"?0:this.colors.hsl.h===0&&this.pullDirection==="right"?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(n,a){!a&&n.preventDefault();var s=this.$refs.container;if(s){var t,f,r=s.clientWidth,c=s.clientHeight,p=s.getBoundingClientRect().left+window.pageXOffset,d=s.getBoundingClientRect().top+window.pageYOffset,b=n.pageX||(n.touches?n.touches[0].pageX:0),M=n.pageY||(n.touches?n.touches[0].pageY:0),m=b-p,k=M-d;this.direction==="vertical"?(k<0?t=360:k>c?t=0:(f=-100*k/c+100,t=360*f/100),this.colors.hsl.h!==t&&this.$emit("change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(m<0?t=0:m>r?t=360:(f=100*m/r,t=360*f/100),this.colors.hsl.h!==t&&this.$emit("change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown:function(n){this.handleChange(n,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(n){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(o,i,e){function n(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(118),s=n(a),t=e(3),f=n(t),r=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],c=["900","700","500","300","100"],p=function(){var d=[];return r.forEach(function(b){var M=[];b.toLowerCase()==="black"||b.toLowerCase()==="white"?M=M.concat(["#000000","#FFFFFF"]):c.forEach(function(m){var k=s.default[b][m];M.push(k.toUpperCase())}),d.push(M)}),d}();i.default={name:"Swatches",mixins:[f.default],props:{palette:{type:Array,default:function(){return p}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(d){return d.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(d){this.colorChange({hex:d,source:"hex"})}}}},function(o,i,e){function n(m){return m&&m.__esModule?m:{default:m}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(3),s=n(a),t=e(5),f=n(t),r=e(20),c=n(r),p=e(13),d=n(p),b=e(21),M=n(b);i.default={name:"Photoshop",mixins:[s.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:c.default,hue:d.default,alpha:M.default,"ed-in":f.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var m=this.colors.hsv;return{h:m.h.toFixed(),s:(100*m.s).toFixed(),v:(100*m.v).toFixed()}},hex:function(){var m=this.colors.hex;return m&&m.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(m){this.colorChange(m)},inputChange:function(m){m&&(m["#"]?this.isValidHex(m["#"])&&this.colorChange({hex:m["#"],source:"hex"}):m.r||m.g||m.b||m.a?this.colorChange({r:m.r||this.colors.rgba.r,g:m.g||this.colors.rgba.g,b:m.b||this.colors.rgba.b,a:m.a||this.colors.rgba.a,source:"rgba"}):(m.h||m.s||m.v)&&this.colorChange({h:m.h||this.colors.hsv.h,s:m.s/100||this.colors.hsv.s,v:m.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(o,i,e){function n(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(125),s=n(a),t=e(126),f=n(t);i.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,f.default)(function(r,c){r(c)},20,{leading:!0,trailing:!1}),handleChange:function(r,c){!c&&r.preventDefault();var p=this.$refs.container;if(p){var d=p.clientWidth,b=p.clientHeight,M=p.getBoundingClientRect().left+window.pageXOffset,m=p.getBoundingClientRect().top+window.pageYOffset,k=r.pageX||(r.touches?r.touches[0].pageX:0),w=r.pageY||(r.touches?r.touches[0].pageY:0),F=(0,s.default)(k-M,0,d),H=(0,s.default)(w-m,0,b),J=F/d,A=(0,s.default)(-H/b+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:J,v:A,a:this.colors.hsv.a,source:"hsva"})}},onChange:function(r){this.$emit("change",r)},handleMouseDown:function(r){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(r){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(o,i,e){Object.defineProperty(i,"__esModule",{value:!0});var n=e(22),a=function(s){return s&&s.__esModule?s:{default:s}}(n);i.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:a.default},computed:{colors:function(){return this.value},gradientColor:function(){var s=this.colors.rgba,t=[s.r,s.g,s.b].join(",");return"linear-gradient(to right, rgba("+t+", 0) 0%, rgba("+t+", 1) 100%)"}},methods:{handleChange:function(s,t){!t&&s.preventDefault();var f=this.$refs.container;if(f){var r,c=f.clientWidth,p=f.getBoundingClientRect().left+window.pageXOffset,d=s.pageX||(s.touches?s.touches[0].pageX:0),b=d-p;r=b<0?0:b>c?1:Math.round(100*b/c)/100,this.colors.a!==r&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:r,source:"rgba"})}},handleMouseDown:function(s){this.handleChange(s,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(o,i,e){function n(t,f,r){if(typeof document>"u")return null;var c=document.createElement("canvas");c.width=c.height=2*r;var p=c.getContext("2d");return p?(p.fillStyle=t,p.fillRect(0,0,c.width,c.height),p.fillStyle=f,p.fillRect(0,0,r,r),p.translate(r,r),p.fillRect(0,0,r,r),c.toDataURL()):null}function a(t,f,r){var c=t+","+f+","+r;if(s[c])return s[c];var p=n(t,f,r);return s[c]=p,p}Object.defineProperty(i,"__esModule",{value:!0});var s={};i.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+a(this.white,this.grey,this.size)+")"}}}}},function(o,i,e){function n(F){return F&&F.__esModule?F:{default:F}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(3),s=n(a),t=e(5),f=n(t),r=e(20),c=n(r),p=e(13),d=n(p),b=e(21),M=n(b),m=e(22),k=n(m),w=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];i.default={name:"Sketch",mixins:[s.default],components:{saturation:c.default,hue:d.default,alpha:M.default,"ed-in":f.default,checkboard:k.default},props:{presetColors:{type:Array,default:function(){return w}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var F=void 0;return F=this.colors.a<1?this.colors.hex8:this.colors.hex,F.replace("#","")},activeColor:function(){var F=this.colors.rgba;return"rgba("+[F.r,F.g,F.b,F.a].join(",")+")"}},methods:{handlePreset:function(F){this.colorChange({hex:F,source:"hex"})},childChange:function(F){this.colorChange(F)},inputChange:function(F){F&&(F.hex?this.isValidHex(F.hex)&&this.colorChange({hex:F.hex,source:"hex"}):(F.r||F.g||F.b||F.a)&&this.colorChange({r:F.r||this.colors.rgba.r,g:F.g||this.colors.rgba.g,b:F.b||this.colors.rgba.b,a:F.a||this.colors.rgba.a,source:"rgba"}))}}}},function(o,i,e){function n(w){return w&&w.__esModule?w:{default:w}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(3),s=n(a),t=e(5),f=n(t),r=e(20),c=n(r),p=e(13),d=n(p),b=e(21),M=n(b),m=e(22),k=n(m);i.default={name:"Chrome",mixins:[s.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:c.default,hue:d.default,alpha:M.default,"ed-in":f.default,checkboard:k.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var w=this.colors.hsl,F=w.h,H=w.s,J=w.l;return{h:F.toFixed(),s:(100*H).toFixed()+"%",l:(100*J).toFixed()+"%"}},activeColor:function(){var w=this.colors.rgba;return"rgba("+[w.r,w.g,w.b,w.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(w){this.colorChange(w)},inputChange:function(w){if(w){if(w.hex)this.isValidHex(w.hex)&&this.colorChange({hex:w.hex,source:"hex"});else if(w.r||w.g||w.b||w.a)this.colorChange({r:w.r||this.colors.rgba.r,g:w.g||this.colors.rgba.g,b:w.b||this.colors.rgba.b,a:w.a||this.colors.rgba.a,source:"rgba"});else if(w.h||w.s||w.l){var F=w.s?w.s.replace("%","")/100:this.colors.hsl.s,H=w.l?w.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:w.h||this.colors.hsl.h,s:F,l:H,source:"hsl"})}}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(o,i,e){function n(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(i,"__esModule",{value:!0});var a=e(5),s=n(a),t=e(3),f=n(t),r=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];i.default={name:"Twitter",mixins:[f.default],components:{editableInput:s.default},props:{width:{type:[String,Number],default:276},defaultColors:{type:Array,default:function(){return r}},triangle:{default:"top-left",validator:function(c){return["hide","top-left","top-right"].includes(c)}}},computed:{hsv:function(){var c=this.colors.hsv;return{h:c.h.toFixed(),s:(100*c.s).toFixed(),v:(100*c.v).toFixed()}},hex:function(){var c=this.colors.hex;return c&&c.replace("#","")}},methods:{equal:function(c){return c.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(c){this.colorChange({hex:c,source:"hex"})},inputChange:function(c){c&&(c["#"]?this.isValidHex(c["#"])&&this.colorChange({hex:c["#"],source:"hex"}):c.r||c.g||c.b||c.a?this.colorChange({r:c.r||this.colors.rgba.r,g:c.g||this.colors.rgba.g,b:c.b||this.colors.rgba.b,a:c.a||this.colors.rgba.a,source:"rgba"}):(c.h||c.s||c.v)&&this.colorChange({h:c.h||this.colors.hsv.h,s:c.s/100||this.colors.hsv.s,v:c.v/100||this.colors.hsv.v,source:"hsv"}))}}}},function(o,i,e){function n(Q){return Q&&Q.__esModule?Q:{default:Q}}var a=e(61),s=n(a),t=e(70),f=n(t),r=e(74),c=n(r),p=e(78),d=n(p),b=e(115),M=n(b),m=e(120),k=n(m),w=e(135),F=n(w),H=e(139),J=n(H),A=e(143),j=n(A),D=e(21),E=n(D),g=e(22),O=n(g),B=e(5),T=n(B),U=e(13),L=n(U),X=e(20),N=n(X),lt=e(3),G=n(lt),K={version:"2.8.1",Compact:s.default,Grayscale:f.default,Twitter:j.default,Material:c.default,Slider:d.default,Swatches:M.default,Photoshop:k.default,Sketch:F.default,Chrome:J.default,Alpha:E.default,Checkboard:O.default,EditableInput:T.default,Hue:L.default,Saturation:N.default,ColorMixin:G.default};o.exports=K},function(o,i,e){function n(d){e(62)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(35),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(69),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Compact.vue",i.default=p.exports},function(o,i,e){var n=e(63);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("6ce8a5a8",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-compact {
  padding-top: 5px;
  padding-left: 5px;
  width: 245px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-compact-colors {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.vc-compact-color-item {
  list-style: none;
  width: 15px;
  height: 15px;
  float: left;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
  cursor: pointer;
}
.vc-compact-color-item--white {
  box-shadow: inset 0 0 0 1px #ddd;
}
.vc-compact-color-item--white .vc-compact-dot {
  background: #000;
}
.vc-compact-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  border-radius: 50%;
  opacity: 1;
  background: #fff;
}
`,""])},function(o,i){o.exports=function(e,n){for(var a=[],s={},t=0;t<n.length;t++){var f=n[t],r=f[0],c=f[1],p=f[2],d=f[3],b={id:e+":"+t,css:c,media:p,sourceMap:d};s[r]?s[r].parts.push(b):a.push(s[r]={id:r,parts:[b]})}return a}},function(o,i,e){var n;(function(a){function s(l,h){if(l=l||"",h=h||{},l instanceof s)return l;if(!(this instanceof s))return new s(l,h);var u=t(l);this._originalInput=l,this._r=u.r,this._g=u.g,this._b=u.b,this._a=u.a,this._roundA=P(100*this._a)/100,this._format=h.format||u.format,this._gradientType=h.gradientType,this._r<1&&(this._r=P(this._r)),this._g<1&&(this._g=P(this._g)),this._b<1&&(this._b=P(this._b)),this._ok=u.ok,this._tc_id=dt++}function t(l){var h={r:0,g:0,b:0},u=1,x=null,S=null,C=null,I=!1,V=!1;return typeof l=="string"&&(l=st(l)),typeof l=="object"&&(nt(l.r)&&nt(l.g)&&nt(l.b)?(h=f(l.r,l.g,l.b),I=!0,V=String(l.r).substr(-1)==="%"?"prgb":"rgb"):nt(l.h)&&nt(l.s)&&nt(l.v)?(x=Q(l.s),S=Q(l.v),h=d(l.h,x,S),I=!0,V="hsv"):nt(l.h)&&nt(l.s)&&nt(l.l)&&(x=Q(l.s),C=Q(l.l),h=c(l.h,x,C),I=!0,V="hsl"),l.hasOwnProperty("a")&&(u=l.a)),u=U(u),{ok:I,format:l.format||V,r:tt(255,$(h.r,0)),g:tt(255,$(h.g,0)),b:tt(255,$(h.b,0)),a:u}}function f(l,h,u){return{r:255*L(l,255),g:255*L(h,255),b:255*L(u,255)}}function r(l,h,u){l=L(l,255),h=L(h,255),u=L(u,255);var x,S,C=$(l,h,u),I=tt(l,h,u),V=(C+I)/2;if(C==I)x=S=0;else{var W=C-I;switch(S=V>.5?W/(2-C-I):W/(C+I),C){case l:x=(h-u)/W+(h<u?6:0);break;case h:x=(u-l)/W+2;break;case u:x=(l-h)/W+4}x/=6}return{h:x,s:S,l:V}}function c(l,h,u){function x(ut,_,y){return y<0&&(y+=1),y>1&&(y-=1),y<1/6?ut+6*(_-ut)*y:y<.5?_:y<2/3?ut+(_-ut)*(2/3-y)*6:ut}var S,C,I;if(l=L(l,360),h=L(h,100),u=L(u,100),h===0)S=C=I=u;else{var V=u<.5?u*(1+h):u+h-u*h,W=2*u-V;S=x(W,V,l+1/3),C=x(W,V,l),I=x(W,V,l-1/3)}return{r:255*S,g:255*C,b:255*I}}function p(l,h,u){l=L(l,255),h=L(h,255),u=L(u,255);var x,S,C=$(l,h,u),I=tt(l,h,u),V=C,W=C-I;if(S=C===0?0:W/C,C==I)x=0;else{switch(C){case l:x=(h-u)/W+(h<u?6:0);break;case h:x=(u-l)/W+2;break;case u:x=(l-h)/W+4}x/=6}return{h:x,s:S,v:V}}function d(l,h,u){l=6*L(l,360),h=L(h,100),u=L(u,100);var x=a.floor(l),S=l-x,C=u*(1-h),I=u*(1-S*h),V=u*(1-(1-S)*h),W=x%6;return{r:255*[u,I,C,C,V,u][W],g:255*[V,u,u,I,C,C][W],b:255*[C,C,V,u,u,I][W]}}function b(l,h,u,x){var S=[K(P(l).toString(16)),K(P(h).toString(16)),K(P(u).toString(16))];return x&&S[0].charAt(0)==S[0].charAt(1)&&S[1].charAt(0)==S[1].charAt(1)&&S[2].charAt(0)==S[2].charAt(1)?S[0].charAt(0)+S[1].charAt(0)+S[2].charAt(0):S.join("")}function M(l,h,u,x,S){var C=[K(P(l).toString(16)),K(P(h).toString(16)),K(P(u).toString(16)),K(q(x))];return S&&C[0].charAt(0)==C[0].charAt(1)&&C[1].charAt(0)==C[1].charAt(1)&&C[2].charAt(0)==C[2].charAt(1)&&C[3].charAt(0)==C[3].charAt(1)?C[0].charAt(0)+C[1].charAt(0)+C[2].charAt(0)+C[3].charAt(0):C.join("")}function m(l,h,u,x){return[K(q(x)),K(P(l).toString(16)),K(P(h).toString(16)),K(P(u).toString(16))].join("")}function k(l,h){h=h===0?0:h||10;var u=s(l).toHsl();return u.s-=h/100,u.s=X(u.s),s(u)}function w(l,h){h=h===0?0:h||10;var u=s(l).toHsl();return u.s+=h/100,u.s=X(u.s),s(u)}function F(l){return s(l).desaturate(100)}function H(l,h){h=h===0?0:h||10;var u=s(l).toHsl();return u.l+=h/100,u.l=X(u.l),s(u)}function J(l,h){h=h===0?0:h||10;var u=s(l).toRgb();return u.r=$(0,tt(255,u.r-P(-h/100*255))),u.g=$(0,tt(255,u.g-P(-h/100*255))),u.b=$(0,tt(255,u.b-P(-h/100*255))),s(u)}function A(l,h){h=h===0?0:h||10;var u=s(l).toHsl();return u.l-=h/100,u.l=X(u.l),s(u)}function j(l,h){var u=s(l).toHsl(),x=(u.h+h)%360;return u.h=x<0?360+x:x,s(u)}function D(l){var h=s(l).toHsl();return h.h=(h.h+180)%360,s(h)}function E(l){var h=s(l).toHsl(),u=h.h;return[s(l),s({h:(u+120)%360,s:h.s,l:h.l}),s({h:(u+240)%360,s:h.s,l:h.l})]}function g(l){var h=s(l).toHsl(),u=h.h;return[s(l),s({h:(u+90)%360,s:h.s,l:h.l}),s({h:(u+180)%360,s:h.s,l:h.l}),s({h:(u+270)%360,s:h.s,l:h.l})]}function O(l){var h=s(l).toHsl(),u=h.h;return[s(l),s({h:(u+72)%360,s:h.s,l:h.l}),s({h:(u+216)%360,s:h.s,l:h.l})]}function B(l,h,u){h=h||6,u=u||30;var x=s(l).toHsl(),S=360/u,C=[s(l)];for(x.h=(x.h-(S*h>>1)+720)%360;--h;)x.h=(x.h+S)%360,C.push(s(x));return C}function T(l,h){h=h||6;for(var u=s(l).toHsv(),x=u.h,S=u.s,C=u.v,I=[],V=1/h;h--;)I.push(s({h:x,s:S,v:C})),C=(C+V)%1;return I}function U(l){return l=parseFloat(l),(isNaN(l)||l<0||l>1)&&(l=1),l}function L(l,h){lt(l)&&(l="100%");var u=G(l);return l=tt(h,$(0,parseFloat(l))),u&&(l=parseInt(l*h,10)/100),a.abs(l-h)<1e-6?1:l%h/parseFloat(h)}function X(l){return tt(1,$(0,l))}function N(l){return parseInt(l,16)}function lt(l){return typeof l=="string"&&l.indexOf(".")!=-1&&parseFloat(l)===1}function G(l){return typeof l=="string"&&l.indexOf("%")!=-1}function K(l){return l.length==1?"0"+l:""+l}function Q(l){return l<=1&&(l=100*l+"%"),l}function q(l){return a.round(255*parseFloat(l)).toString(16)}function ft(l){return N(l)/255}function nt(l){return!!at.CSS_UNIT.exec(l)}function st(l){l=l.replace(ot,"").replace(Z,"").toLowerCase();var h=!1;if(ct[l])l=ct[l],h=!0;else if(l=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var u;return(u=at.rgb.exec(l))?{r:u[1],g:u[2],b:u[3]}:(u=at.rgba.exec(l))?{r:u[1],g:u[2],b:u[3],a:u[4]}:(u=at.hsl.exec(l))?{h:u[1],s:u[2],l:u[3]}:(u=at.hsla.exec(l))?{h:u[1],s:u[2],l:u[3],a:u[4]}:(u=at.hsv.exec(l))?{h:u[1],s:u[2],v:u[3]}:(u=at.hsva.exec(l))?{h:u[1],s:u[2],v:u[3],a:u[4]}:(u=at.hex8.exec(l))?{r:N(u[1]),g:N(u[2]),b:N(u[3]),a:ft(u[4]),format:h?"name":"hex8"}:(u=at.hex6.exec(l))?{r:N(u[1]),g:N(u[2]),b:N(u[3]),format:h?"name":"hex"}:(u=at.hex4.exec(l))?{r:N(u[1]+""+u[1]),g:N(u[2]+""+u[2]),b:N(u[3]+""+u[3]),a:ft(u[4]+""+u[4]),format:h?"name":"hex8"}:!!(u=at.hex3.exec(l))&&{r:N(u[1]+""+u[1]),g:N(u[2]+""+u[2]),b:N(u[3]+""+u[3]),format:h?"name":"hex"}}function Y(l){var h,u;return l=l||{level:"AA",size:"small"},h=(l.level||"AA").toUpperCase(),u=(l.size||"small").toLowerCase(),h!=="AA"&&h!=="AAA"&&(h="AA"),u!=="small"&&u!=="large"&&(u="small"),{level:h,size:u}}var ot=/^\s+/,Z=/\s+$/,dt=0,P=a.round,tt=a.min,$=a.max,it=a.random;s.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var l=this.toRgb();return(299*l.r+587*l.g+114*l.b)/1e3},getLuminance:function(){var l,h,u,x,S,C,I=this.toRgb();return l=I.r/255,h=I.g/255,u=I.b/255,x=l<=.03928?l/12.92:a.pow((l+.055)/1.055,2.4),S=h<=.03928?h/12.92:a.pow((h+.055)/1.055,2.4),C=u<=.03928?u/12.92:a.pow((u+.055)/1.055,2.4),.2126*x+.7152*S+.0722*C},setAlpha:function(l){return this._a=U(l),this._roundA=P(100*this._a)/100,this},toHsv:function(){var l=p(this._r,this._g,this._b);return{h:360*l.h,s:l.s,v:l.v,a:this._a}},toHsvString:function(){var l=p(this._r,this._g,this._b),h=P(360*l.h),u=P(100*l.s),x=P(100*l.v);return this._a==1?"hsv("+h+", "+u+"%, "+x+"%)":"hsva("+h+", "+u+"%, "+x+"%, "+this._roundA+")"},toHsl:function(){var l=r(this._r,this._g,this._b);return{h:360*l.h,s:l.s,l:l.l,a:this._a}},toHslString:function(){var l=r(this._r,this._g,this._b),h=P(360*l.h),u=P(100*l.s),x=P(100*l.l);return this._a==1?"hsl("+h+", "+u+"%, "+x+"%)":"hsla("+h+", "+u+"%, "+x+"%, "+this._roundA+")"},toHex:function(l){return b(this._r,this._g,this._b,l)},toHexString:function(l){return"#"+this.toHex(l)},toHex8:function(l){return M(this._r,this._g,this._b,this._a,l)},toHex8String:function(l){return"#"+this.toHex8(l)},toRgb:function(){return{r:P(this._r),g:P(this._g),b:P(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+P(this._r)+", "+P(this._g)+", "+P(this._b)+")":"rgba("+P(this._r)+", "+P(this._g)+", "+P(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:P(100*L(this._r,255))+"%",g:P(100*L(this._g,255))+"%",b:P(100*L(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+P(100*L(this._r,255))+"%, "+P(100*L(this._g,255))+"%, "+P(100*L(this._b,255))+"%)":"rgba("+P(100*L(this._r,255))+"%, "+P(100*L(this._g,255))+"%, "+P(100*L(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(ht[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(l){var h="#"+m(this._r,this._g,this._b,this._a),u=h,x=this._gradientType?"GradientType = 1, ":"";if(l){var S=s(l);u="#"+m(S._r,S._g,S._b,S._a)}return"progid:DXImageTransform.Microsoft.gradient("+x+"startColorstr="+h+",endColorstr="+u+")"},toString:function(l){var h=!!l;l=l||this._format;var u=!1,x=this._a<1&&this._a>=0;return h||!x||l!=="hex"&&l!=="hex6"&&l!=="hex3"&&l!=="hex4"&&l!=="hex8"&&l!=="name"?(l==="rgb"&&(u=this.toRgbString()),l==="prgb"&&(u=this.toPercentageRgbString()),l!=="hex"&&l!=="hex6"||(u=this.toHexString()),l==="hex3"&&(u=this.toHexString(!0)),l==="hex4"&&(u=this.toHex8String(!0)),l==="hex8"&&(u=this.toHex8String()),l==="name"&&(u=this.toName()),l==="hsl"&&(u=this.toHslString()),l==="hsv"&&(u=this.toHsvString()),u||this.toHexString()):l==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return s(this.toString())},_applyModification:function(l,h){var u=l.apply(null,[this].concat([].slice.call(h)));return this._r=u._r,this._g=u._g,this._b=u._b,this.setAlpha(u._a),this},lighten:function(){return this._applyModification(H,arguments)},brighten:function(){return this._applyModification(J,arguments)},darken:function(){return this._applyModification(A,arguments)},desaturate:function(){return this._applyModification(k,arguments)},saturate:function(){return this._applyModification(w,arguments)},greyscale:function(){return this._applyModification(F,arguments)},spin:function(){return this._applyModification(j,arguments)},_applyCombination:function(l,h){return l.apply(null,[this].concat([].slice.call(h)))},analogous:function(){return this._applyCombination(B,arguments)},complement:function(){return this._applyCombination(D,arguments)},monochromatic:function(){return this._applyCombination(T,arguments)},splitcomplement:function(){return this._applyCombination(O,arguments)},triad:function(){return this._applyCombination(E,arguments)},tetrad:function(){return this._applyCombination(g,arguments)}},s.fromRatio=function(l,h){if(typeof l=="object"){var u={};for(var x in l)l.hasOwnProperty(x)&&(u[x]=x==="a"?l[x]:Q(l[x]));l=u}return s(l,h)},s.equals=function(l,h){return!(!l||!h)&&s(l).toRgbString()==s(h).toRgbString()},s.random=function(){return s.fromRatio({r:it(),g:it(),b:it()})},s.mix=function(l,h,u){u=u===0?0:u||50;var x=s(l).toRgb(),S=s(h).toRgb(),C=u/100;return s({r:(S.r-x.r)*C+x.r,g:(S.g-x.g)*C+x.g,b:(S.b-x.b)*C+x.b,a:(S.a-x.a)*C+x.a})},s.readability=function(l,h){var u=s(l),x=s(h);return(a.max(u.getLuminance(),x.getLuminance())+.05)/(a.min(u.getLuminance(),x.getLuminance())+.05)},s.isReadable=function(l,h,u){var x,S,C=s.readability(l,h);switch(S=!1,x=Y(u),x.level+x.size){case"AAsmall":case"AAAlarge":S=C>=4.5;break;case"AAlarge":S=C>=3;break;case"AAAsmall":S=C>=7}return S},s.mostReadable=function(l,h,u){var x,S,C,I,V=null,W=0;u=u||{},S=u.includeFallbackColors,C=u.level,I=u.size;for(var ut=0;ut<h.length;ut++)(x=s.readability(l,h[ut]))>W&&(W=x,V=s(h[ut]));return s.isReadable(l,V,{level:C,size:I})||!S?V:(u.includeFallbackColors=!1,s.mostReadable(l,["#fff","#000"],u))};var ct=s.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ht=s.hexNames=function(l){var h={};for(var u in l)l.hasOwnProperty(u)&&(h[l[u]]=u);return h}(ct),at=function(){var l="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",h="[\\s|\\(]+("+l+")[,|\\s]+("+l+")[,|\\s]+("+l+")\\s*\\)?",u="[\\s|\\(]+("+l+")[,|\\s]+("+l+")[,|\\s]+("+l+")[,|\\s]+("+l+")\\s*\\)?";return{CSS_UNIT:new RegExp(l),rgb:new RegExp("rgb"+h),rgba:new RegExp("rgba"+u),hsl:new RegExp("hsl"+h),hsla:new RegExp("hsla"+u),hsv:new RegExp("hsv"+h),hsva:new RegExp("hsva"+u),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();o!==void 0&&o.exports?o.exports=s:(n=(function(){return s}).call(i,e,i,o))!==void 0&&(o.exports=n)})(Math)},function(o,i,e){var n=e(67);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("0f73e73c",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-editable-input {
  position: relative;
}
.vc-input__input {
  padding: 0;
  border: 0;
  outline: none;
}
.vc-input__label {
  text-transform: capitalize;
}
`,""])},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{staticClass:"vc-editable-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":t.labelId},domProps:{value:t.val},on:{keydown:t.handleKeyDown,input:[function(c){c.target.composing||(t.val=c.target.value)},t.update]}}),t._v(" "),r("span",{staticClass:"vc-input__label",attrs:{for:t.label,id:t.labelId}},[t._v(t._s(t.labelSpanText))]),t._v(" "),r("span",{staticClass:"vc-input__desc"},[t._v(t._s(t.desc))])])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{staticClass:"vc-compact",attrs:{role:"application","aria-label":"Compact color picker"}},[r("ul",{staticClass:"vc-compact-colors",attrs:{role:"listbox"}},t._l(t.paletteUpperCase(t.palette),function(c){return r("li",{key:c,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":c==="#FFFFFF"},style:{background:c},attrs:{role:"option","aria-label":"color:"+c,"aria-selected":c===t.pick},on:{click:function(p){return t.handlerClick(c)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:c===t.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}),0)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){function n(d){e(71)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(37),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(73),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Grayscale.vue",i.default=p.exports},function(o,i,e){var n=e(72);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("21ddbb74",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-grayscale {
  width: 125px;
  border-radius: 2px;
  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-grayscale-colors {
  border-radius: 2px;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.vc-grayscale-color-item {
  list-style: none;
  width: 25px;
  height: 25px;
  float: left;
  position: relative;
  cursor: pointer;
}
.vc-grayscale-color-item--white .vc-grayscale-dot {
  background: #000;
}
.vc-grayscale-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -2px;
  border-radius: 50%;
  opacity: 1;
  background: #fff;
}
`,""])},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{staticClass:"vc-grayscale",attrs:{role:"application","aria-label":"Grayscale color picker"}},[r("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"listbox"}},t._l(t.paletteUpperCase(t.palette),function(c){return r("li",{key:c,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":c=="#FFFFFF"},style:{background:c},attrs:{role:"option","aria-label":"Color:"+c,"aria-selected":c===t.pick},on:{click:function(p){return t.handlerClick(c)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:c===t.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}),0)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){function n(d){e(75)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(38),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(77),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Material.vue",i.default=p.exports},function(o,i,e){var n=e(76);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("1ff3af73",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-material {
  width: 98px;
  height: 98px;
  padding: 16px;
  font-family: "Roboto";
  position: relative;
  border-radius: 2px;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
  background-color: #fff;
}
.vc-material .vc-input__input {
  width: 100%;
  margin-top: 12px;
  font-size: 15px;
  color: #333;
  height: 30px;
}
.vc-material .vc-input__label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 11px;
  color: #999;
  text-transform: capitalize;
}
.vc-material-hex {
  border-bottom-width: 2px;
  border-bottom-style: solid;
}
.vc-material-split {
  display: flex;
  margin-right: -10px;
  padding-top: 11px;
}
.vc-material-third {
  flex: 1;
  padding-right: 10px;
}
`,""])},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{staticClass:"vc-material",attrs:{role:"application","aria-label":"Material color picker"}},[r("ed-in",{staticClass:"vc-material-hex",style:{borderColor:t.colors.hex},attrs:{label:"hex"},on:{change:t.onChange},model:{value:t.colors.hex,callback:function(c){t.$set(t.colors,"hex",c)},expression:"colors.hex"}}),t._v(" "),r("div",{staticClass:"vc-material-split"},[r("div",{staticClass:"vc-material-third"},[r("ed-in",{attrs:{label:"r"},on:{change:t.onChange},model:{value:t.colors.rgba.r,callback:function(c){t.$set(t.colors.rgba,"r",c)},expression:"colors.rgba.r"}})],1),t._v(" "),r("div",{staticClass:"vc-material-third"},[r("ed-in",{attrs:{label:"g"},on:{change:t.onChange},model:{value:t.colors.rgba.g,callback:function(c){t.$set(t.colors.rgba,"g",c)},expression:"colors.rgba.g"}})],1),t._v(" "),r("div",{staticClass:"vc-material-third"},[r("ed-in",{attrs:{label:"b"},on:{change:t.onChange},model:{value:t.colors.rgba.b,callback:function(c){t.$set(t.colors.rgba,"b",c)},expression:"colors.rgba.b"}})],1)])],1)},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){function n(d){e(79)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(39),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(114),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Slider.vue",i.default=p.exports},function(o,i,e){var n=e(80);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("7982aa43",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-slider {
  position: relative;
  width: 410px;
}
.vc-slider-hue-warp {
  height: 12px;
  position: relative;
}
.vc-slider-hue-warp .vc-hue-picker {
  width: 14px;
  height: 14px;
  border-radius: 6px;
  transform: translate(-7px, -2px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
.vc-slider-swatches {
  display: flex;
  margin-top: 20px;
}
.vc-slider-swatch {
  margin-right: 1px;
  flex: 1;
  width: 20%;
}
.vc-slider-swatch:first-child {
  margin-right: 1px;
}
.vc-slider-swatch:first-child .vc-slider-swatch-picker {
  border-radius: 2px 0px 0px 2px;
}
.vc-slider-swatch:last-child {
  margin-right: 0;
}
.vc-slider-swatch:last-child .vc-slider-swatch-picker {
  border-radius: 0px 2px 2px 0px;
}
.vc-slider-swatch-picker {
  cursor: pointer;
  height: 12px;
}
.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {
  transform: scaleY(1.8);
  border-radius: 3.6px/2px;
}
.vc-slider-swatch-picker--white {
  box-shadow: inset 0 0 0 1px #ddd;
}
.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {
  box-shadow: inset 0 0 0 0.6px #ddd;
}
`,""])},function(o,i,e){function n(c){return c&&c.__esModule?c:{default:c}}i.__esModule=!0;var a=e(82),s=n(a),t=e(100),f=n(t),r=typeof f.default=="function"&&typeof s.default=="symbol"?function(c){return typeof c}:function(c){return c&&typeof f.default=="function"&&c.constructor===f.default&&c!==f.default.prototype?"symbol":typeof c};i.default=typeof f.default=="function"&&r(s.default)==="symbol"?function(c){return c===void 0?"undefined":r(c)}:function(c){return c&&typeof f.default=="function"&&c.constructor===f.default&&c!==f.default.prototype?"symbol":c===void 0?"undefined":r(c)}},function(o,i,e){o.exports={default:e(83),__esModule:!0}},function(o,i,e){e(84),e(96),o.exports=e(32).f("iterator")},function(o,i,e){var n=e(85)(!0);e(40)(String,"String",function(a){this._t=String(a),this._i=0},function(){var a,s=this._t,t=this._i;return t>=s.length?{value:void 0,done:!0}:(a=n(s,t),this._i+=a.length,{value:a,done:!1})})},function(o,i,e){var n=e(23),a=e(24);o.exports=function(s){return function(t,f){var r,c,p=String(a(t)),d=n(f),b=p.length;return d<0||d>=b?s?"":void 0:(r=p.charCodeAt(d),r<55296||r>56319||d+1===b||(c=p.charCodeAt(d+1))<56320||c>57343?s?p.charAt(d):r:s?p.slice(d,d+2):c-56320+(r-55296<<10)+65536)}}},function(o,i,e){var n=e(87);o.exports=function(a,s,t){if(n(a),s===void 0)return a;switch(t){case 1:return function(f){return a.call(s,f)};case 2:return function(f,r){return a.call(s,f,r)};case 3:return function(f,r,c){return a.call(s,f,r,c)}}return function(){return a.apply(s,arguments)}}},function(o,i){o.exports=function(e){if(typeof e!="function")throw TypeError(e+" is not a function!");return e}},function(o,i,e){var n=e(45),a=e(18),s=e(31),t={};e(7)(t,e(11)("iterator"),function(){return this}),o.exports=function(f,r,c){f.prototype=n(t,{next:a(1,c)}),s(f,r+" Iterator")}},function(o,i,e){var n=e(8),a=e(16),s=e(27);o.exports=e(9)?Object.defineProperties:function(t,f){a(t);for(var r,c=s(f),p=c.length,d=0;p>d;)n.f(t,r=c[d++],f[r]);return t}},function(o,i,e){var n=e(47);o.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return n(a)=="String"?a.split(""):Object(a)}},function(o,i,e){var n=e(10),a=e(92),s=e(93);o.exports=function(t){return function(f,r,c){var p,d=n(f),b=a(d.length),M=s(c,b);if(t&&r!=r){for(;b>M;)if((p=d[M++])!=p)return!0}else for(;b>M;M++)if((t||M in d)&&d[M]===r)return t||M||0;return!t&&-1}}},function(o,i,e){var n=e(23),a=Math.min;o.exports=function(s){return s>0?a(n(s),9007199254740991):0}},function(o,i,e){var n=e(23),a=Math.max,s=Math.min;o.exports=function(t,f){return t=n(t),t<0?a(t+f,0):s(t,f)}},function(o,i,e){var n=e(4).document;o.exports=n&&n.documentElement},function(o,i,e){var n=e(6),a=e(48),s=e(28)("IE_PROTO"),t=Object.prototype;o.exports=Object.getPrototypeOf||function(f){return f=a(f),n(f,s)?f[s]:typeof f.constructor=="function"&&f instanceof f.constructor?f.constructor.prototype:f instanceof Object?t:null}},function(o,i,e){e(97);for(var n=e(4),a=e(7),s=e(26),t=e(11)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),r=0;r<f.length;r++){var c=f[r],p=n[c],d=p&&p.prototype;d&&!d[t]&&a(d,t,c),s[c]=s.Array}},function(o,i,e){var n=e(98),a=e(99),s=e(26),t=e(10);o.exports=e(40)(Array,"Array",function(f,r){this._t=t(f),this._i=0,this._k=r},function(){var f=this._t,r=this._k,c=this._i++;return!f||c>=f.length?(this._t=void 0,a(1)):r=="keys"?a(0,c):r=="values"?a(0,f[c]):a(0,[c,f[c]])},"values"),s.Arguments=s.Array,n("keys"),n("values"),n("entries")},function(o,i){o.exports=function(){}},function(o,i){o.exports=function(e,n){return{value:n,done:!!e}}},function(o,i,e){o.exports={default:e(101),__esModule:!0}},function(o,i,e){e(102),e(108),e(109),e(110),o.exports=e(15).Symbol},function(o,i,e){var n=e(4),a=e(6),s=e(9),t=e(41),f=e(44),r=e(103).KEY,c=e(17),p=e(29),d=e(31),b=e(19),M=e(11),m=e(32),k=e(33),w=e(104),F=e(105),H=e(16),J=e(12),A=e(48),j=e(10),D=e(25),E=e(18),g=e(45),O=e(106),B=e(107),T=e(49),U=e(8),L=e(27),X=B.f,N=U.f,lt=O.f,G=n.Symbol,K=n.JSON,Q=K&&K.stringify,q=M("_hidden"),ft=M("toPrimitive"),nt={}.propertyIsEnumerable,st=p("symbol-registry"),Y=p("symbols"),ot=p("op-symbols"),Z=Object.prototype,dt=typeof G=="function"&&!!T.f,P=n.QObject,tt=!P||!P.prototype||!P.prototype.findChild,$=s&&c(function(){return g(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a!=7})?function(_,y,z){var et=X(Z,y);et&&delete Z[y],N(_,y,z),et&&_!==Z&&N(Z,y,et)}:N,it=function(_){var y=Y[_]=g(G.prototype);return y._k=_,y},ct=dt&&typeof G.iterator=="symbol"?function(_){return typeof _=="symbol"}:function(_){return _ instanceof G},ht=function(_,y,z){return _===Z&&ht(ot,y,z),H(_),y=D(y,!0),H(z),a(Y,y)?(z.enumerable?(a(_,q)&&_[q][y]&&(_[q][y]=!1),z=g(z,{enumerable:E(0,!1)})):(a(_,q)||N(_,q,E(1,{})),_[q][y]=!0),$(_,y,z)):N(_,y,z)},at=function(_,y){H(_);for(var z,et=w(y=j(y)),pt=0,bt=et.length;bt>pt;)ht(_,z=et[pt++],y[z]);return _},l=function(_,y){return y===void 0?g(_):at(g(_),y)},h=function(_){var y=nt.call(this,_=D(_,!0));return!(this===Z&&a(Y,_)&&!a(ot,_))&&(!(y||!a(this,_)||!a(Y,_)||a(this,q)&&this[q][_])||y)},u=function(_,y){if(_=j(_),y=D(y,!0),_!==Z||!a(Y,y)||a(ot,y)){var z=X(_,y);return!z||!a(Y,y)||a(_,q)&&_[q][y]||(z.enumerable=!0),z}},x=function(_){for(var y,z=lt(j(_)),et=[],pt=0;z.length>pt;)a(Y,y=z[pt++])||y==q||y==r||et.push(y);return et},S=function(_){for(var y,z=_===Z,et=lt(z?ot:j(_)),pt=[],bt=0;et.length>bt;)!a(Y,y=et[bt++])||z&&!a(Z,y)||pt.push(Y[y]);return pt};dt||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor!");var _=b(arguments.length>0?arguments[0]:void 0),y=function(z){this===Z&&y.call(ot,z),a(this,q)&&a(this[q],_)&&(this[q][_]=!1),$(this,_,E(1,z))};return s&&tt&&$(Z,_,{configurable:!0,set:y}),it(_)},f(G.prototype,"toString",function(){return this._k}),B.f=u,U.f=ht,e(50).f=O.f=x,e(34).f=h,T.f=S,s&&!e(14)&&f(Z,"propertyIsEnumerable",h,!0),m.f=function(_){return it(M(_))}),t(t.G+t.W+t.F*!dt,{Symbol:G});for(var C="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),I=0;C.length>I;)M(C[I++]);for(var V=L(M.store),W=0;V.length>W;)k(V[W++]);t(t.S+t.F*!dt,"Symbol",{for:function(_){return a(st,_+="")?st[_]:st[_]=G(_)},keyFor:function(_){if(!ct(_))throw TypeError(_+" is not a symbol!");for(var y in st)if(st[y]===_)return y},useSetter:function(){tt=!0},useSimple:function(){tt=!1}}),t(t.S+t.F*!dt,"Object",{create:l,defineProperty:ht,defineProperties:at,getOwnPropertyDescriptor:u,getOwnPropertyNames:x,getOwnPropertySymbols:S});var ut=c(function(){T.f(1)});t(t.S+t.F*ut,"Object",{getOwnPropertySymbols:function(_){return T.f(A(_))}}),K&&t(t.S+t.F*(!dt||c(function(){var _=G();return Q([_])!="[null]"||Q({a:_})!="{}"||Q(Object(_))!="{}"})),"JSON",{stringify:function(_){for(var y,z,et=[_],pt=1;arguments.length>pt;)et.push(arguments[pt++]);if(z=y=et[1],(J(y)||_!==void 0)&&!ct(_))return F(y)||(y=function(bt,_t){if(typeof z=="function"&&(_t=z.call(this,bt,_t)),!ct(_t))return _t}),et[1]=y,Q.apply(K,et)}}),G.prototype[ft]||e(7)(G.prototype,ft,G.prototype.valueOf),d(G,"Symbol"),d(Math,"Math",!0),d(n.JSON,"JSON",!0)},function(o,i,e){var n=e(19)("meta"),a=e(12),s=e(6),t=e(8).f,f=0,r=Object.isExtensible||function(){return!0},c=!e(17)(function(){return r(Object.preventExtensions({}))}),p=function(k){t(k,n,{value:{i:"O"+ ++f,w:{}}})},d=function(k,w){if(!a(k))return typeof k=="symbol"?k:(typeof k=="string"?"S":"P")+k;if(!s(k,n)){if(!r(k))return"F";if(!w)return"E";p(k)}return k[n].i},b=function(k,w){if(!s(k,n)){if(!r(k))return!0;if(!w)return!1;p(k)}return k[n].w},M=function(k){return c&&m.NEED&&r(k)&&!s(k,n)&&p(k),k},m=o.exports={KEY:n,NEED:!1,fastKey:d,getWeak:b,onFreeze:M}},function(o,i,e){var n=e(27),a=e(49),s=e(34);o.exports=function(t){var f=n(t),r=a.f;if(r)for(var c,p=r(t),d=s.f,b=0;p.length>b;)d.call(t,c=p[b++])&&f.push(c);return f}},function(o,i,e){var n=e(47);o.exports=Array.isArray||function(a){return n(a)=="Array"}},function(o,i,e){var n=e(10),a=e(50).f,s={}.toString,t=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(r){try{return a(r)}catch{return t.slice()}};o.exports.f=function(r){return t&&s.call(r)=="[object Window]"?f(r):a(n(r))}},function(o,i,e){var n=e(34),a=e(18),s=e(10),t=e(25),f=e(6),r=e(42),c=Object.getOwnPropertyDescriptor;i.f=e(9)?c:function(p,d){if(p=s(p),d=t(d,!0),r)try{return c(p,d)}catch{}if(f(p,d))return a(!n.f.call(p,d),p[d])}},function(o,i){},function(o,i,e){e(33)("asyncIterator")},function(o,i,e){e(33)("observable")},function(o,i,e){var n=e(112);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("7c5f1a1c",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-hue {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 2px;
}
.vc-hue--horizontal {
  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}
.vc-hue--vertical {
  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
}
.vc-hue-container {
  cursor: pointer;
  margin: 0 2px;
  position: relative;
  height: 100%;
}
.vc-hue-pointer {
  z-index: 2;
  position: absolute;
}
.vc-hue-picker {
  cursor: pointer;
  margin-top: 1px;
  width: 4px;
  border-radius: 1px;
  height: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .6);
  background: #fff;
  transform: translateX(-2px) ;
}
`,""])},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{class:["vc-hue",t.directionClass]},[r("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":t.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:t.handleMouseDown,touchmove:t.handleChange,touchstart:t.handleChange}},[r("div",{staticClass:"vc-hue-pointer",style:{top:t.pointerTop,left:t.pointerLeft},attrs:{role:"presentation"}},[r("div",{staticClass:"vc-hue-picker"})])])])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{staticClass:"vc-slider",attrs:{role:"application","aria-label":"Slider color picker"}},[r("div",{staticClass:"vc-slider-hue-warp"},[r("hue",{on:{change:t.hueChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}})],1),t._v(" "),r("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},t._l(t.normalizedSwatches,function(c,p){return r("div",{key:p,staticClass:"vc-slider-swatch",attrs:{"data-index":p,"aria-label":"color:"+t.colors.hex,role:"button"},on:{click:function(d){return t.handleSwClick(p,c)}}},[r("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":t.isActive(c,p),"vc-slider-swatch-picker--white":c.l===1},style:{background:"hsl("+t.colors.hsl.h+", "+100*c.s+"%, "+100*c.l+"%)"}})])}),0)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){function n(d){e(116)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(52),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(119),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Swatches.vue",i.default=p.exports},function(o,i,e){var n=e(117);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("10f839a2",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-swatches {
  width: 320px;
  height: 240px;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
}
.vc-swatches-box {
  padding: 16px 0 6px 16px;
  overflow: hidden;
}
.vc-swatches-color-group {
  padding-bottom: 10px;
  width: 40px;
  float: left;
  margin-right: 10px;
}
.vc-swatches-color-it {
  box-sizing: border-box;
  width: 40px;
  height: 24px;
  cursor: pointer;
  background: #880e4f;
  margin-bottom: 1px;
  overflow: hidden;
  -ms-border-radius: 2px 2px 0 0;
  -moz-border-radius: 2px 2px 0 0;
  -o-border-radius: 2px 2px 0 0;
  -webkit-border-radius: 2px 2px 0 0;
  border-radius: 2px 2px 0 0;
}
.vc-swatches-color--white {
  border: 1px solid #DDD;
}
.vc-swatches-pick {
  fill: rgb(255, 255, 255);
  margin-left: 8px;
  display: block;
}
.vc-swatches-color--white .vc-swatches-pick {
  fill: rgb(51, 51, 51);
}
`,""])},function(o,i,e){Object.defineProperty(i,"__esModule",{value:!0}),e.d(i,"red",function(){return n}),e.d(i,"pink",function(){return a}),e.d(i,"purple",function(){return s}),e.d(i,"deepPurple",function(){return t}),e.d(i,"indigo",function(){return f}),e.d(i,"blue",function(){return r}),e.d(i,"lightBlue",function(){return c}),e.d(i,"cyan",function(){return p}),e.d(i,"teal",function(){return d}),e.d(i,"green",function(){return b}),e.d(i,"lightGreen",function(){return M}),e.d(i,"lime",function(){return m}),e.d(i,"yellow",function(){return k}),e.d(i,"amber",function(){return w}),e.d(i,"orange",function(){return F}),e.d(i,"deepOrange",function(){return H}),e.d(i,"brown",function(){return J}),e.d(i,"grey",function(){return A}),e.d(i,"blueGrey",function(){return j}),e.d(i,"darkText",function(){return D}),e.d(i,"lightText",function(){return E}),e.d(i,"darkIcons",function(){return g}),e.d(i,"lightIcons",function(){return O}),e.d(i,"white",function(){return B}),e.d(i,"black",function(){return T});var n={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},a={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},s={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},t={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},f={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},r={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},c={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},p={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},d={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},b={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},M={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},m={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},k={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},w={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},F={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},H={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},J={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},A={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},j={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},D={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},E={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},g={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},O={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},B="#ffffff",T="#000000";i.default={red:n,pink:a,purple:s,deepPurple:t,indigo:f,blue:r,lightBlue:c,cyan:p,teal:d,green:b,lightGreen:M,lime:m,yellow:k,amber:w,orange:F,deepOrange:H,brown:J,grey:A,blueGrey:j,darkText:D,lightText:E,darkIcons:g,lightIcons:O,white:B,black:T}},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{staticClass:"vc-swatches",attrs:{role:"application","aria-label":"Swatches color picker","data-pick":t.pick}},[r("div",{staticClass:"vc-swatches-box",attrs:{role:"listbox"}},t._l(t.palette,function(c,p){return r("div",{key:p,staticClass:"vc-swatches-color-group"},t._l(c,function(d){return r("div",{key:d,class:["vc-swatches-color-it",{"vc-swatches-color--white":d==="#FFFFFF"}],style:{background:d},attrs:{role:"option","aria-label":"Color:"+d,"aria-selected":t.equal(d),"data-color":d},on:{click:function(b){return t.handlerClick(d)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.equal(d),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[r("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}),0)}),0)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){function n(d){e(121)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(53),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(134),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Photoshop.vue",i.default=p.exports},function(o,i,e){var n=e(122);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("080365d4",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-photoshop {
  background: #DCDCDC;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);
  box-sizing: initial;
  width: 513px;
  font-family: Roboto;
}
.vc-photoshop__disable-fields {
  width: 390px;
}
.vc-ps-head {
  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);
  border-bottom: 1px solid #B1B1B1;
  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);
  height: 23px;
  line-height: 24px;
  border-radius: 4px 4px 0 0;
  font-size: 13px;
  color: #4D4D4D;
  text-align: center;
}
.vc-ps-body {
  padding: 15px;
  display: flex;
}
.vc-ps-saturation-wrap {
  width: 256px;
  height: 256px;
  position: relative;
  border: 2px solid #B3B3B3;
  border-bottom: 2px solid #F0F0F0;
  overflow: hidden;
}
.vc-ps-saturation-wrap .vc-saturation-circle {
  width: 12px;
  height: 12px;
}
.vc-ps-hue-wrap {
  position: relative;
  height: 256px;
  width: 19px;
  margin-left: 10px;
  border: 2px solid #B3B3B3;
  border-bottom: 2px solid #F0F0F0;
}
.vc-ps-hue-pointer {
  position: relative;
}
.vc-ps-hue-pointer--left,
.vc-ps-hue-pointer--right {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 8px;
  border-color: transparent transparent transparent #555;
}
.vc-ps-hue-pointer--left:after,
.vc-ps-hue-pointer--right:after {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 6px;
  border-color: transparent transparent transparent #fff;
  position: absolute;
  top: 1px;
  left: 1px;
  transform: translate(-8px, -5px);
}
.vc-ps-hue-pointer--left {
  transform: translate(-13px, -4px);
}
.vc-ps-hue-pointer--right {
  transform: translate(20px, -4px) rotate(180deg);
}
.vc-ps-controls {
  width: 180px;
  margin-left: 10px;
  display: flex;
}
.vc-ps-controls__disable-fields {
  width: auto;
}
.vc-ps-actions {
  margin-left: 20px;
  flex: 1;
}
.vc-ps-ac-btn {
  cursor: pointer;
  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);
  border: 1px solid #878787;
  border-radius: 2px;
  height: 20px;
  box-shadow: 0 1px 0 0 #EAEAEA;
  font-size: 14px;
  color: #000;
  line-height: 20px;
  text-align: center;
  margin-bottom: 10px;
}
.vc-ps-previews {
  width: 60px;
}
.vc-ps-previews__swatches {
  border: 1px solid #B3B3B3;
  border-bottom: 1px solid #F0F0F0;
  margin-bottom: 2px;
  margin-top: 1px;
}
.vc-ps-previews__pr-color {
  height: 34px;
  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;
}
.vc-ps-previews__label {
  font-size: 14px;
  color: #000;
  text-align: center;
}
.vc-ps-fields {
  padding-top: 5px;
  padding-bottom: 9px;
  width: 80px;
  position: relative;
}
.vc-ps-fields .vc-input__input {
  margin-left: 40%;
  width: 40%;
  height: 18px;
  border: 1px solid #888888;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;
  margin-bottom: 5px;
  font-size: 13px;
  padding-left: 3px;
  margin-right: 10px;
}
.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {
  top: 0;
  text-transform: uppercase;
  font-size: 13px;
  height: 18px;
  line-height: 22px;
  position: absolute;
}
.vc-ps-fields .vc-input__label {
  left: 0;
  width: 34px;
}
.vc-ps-fields .vc-input__desc {
  right: 0;
  width: 0;
}
.vc-ps-fields__divider {
  height: 5px;
}
.vc-ps-fields__hex .vc-input__input {
  margin-left: 20%;
  width: 80%;
  height: 18px;
  border: 1px solid #888888;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;
  margin-bottom: 6px;
  font-size: 13px;
  padding-left: 3px;
}
.vc-ps-fields__hex .vc-input__label {
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  text-transform: uppercase;
  font-size: 13px;
  height: 18px;
  line-height: 22px;
}
`,""])},function(o,i,e){var n=e(124);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("b5380e52",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-saturation,
.vc-saturation--white,
.vc-saturation--black {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.vc-saturation--white {
  background: linear-gradient(to right, #fff, rgba(255,255,255,0));
}
.vc-saturation--black {
  background: linear-gradient(to top, #000, rgba(0,0,0,0));
}
.vc-saturation-pointer {
  cursor: pointer;
  position: absolute;
}
.vc-saturation-circle {
  cursor: head;
  width: 4px;
  height: 4px;
  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
  border-radius: 50%;
  transform: translate(-2px, -2px);
}
`,""])},function(o,i){function e(n,a,s){return a<s?n<a?a:n>s?s:n:n<s?s:n>a?a:n}o.exports=e},function(o,i){function e(g,O,B){function T($){var it=q,ct=ft;return q=ft=void 0,Z=$,st=g.apply(ct,it)}function U($){return Z=$,Y=setTimeout(N,O),dt?T($):st}function L($){var it=$-ot,ct=$-Z,ht=O-it;return P?D(ht,nt-ct):ht}function X($){var it=$-ot,ct=$-Z;return ot===void 0||it>=O||it<0||P&&ct>=nt}function N(){var $=E();if(X($))return lt($);Y=setTimeout(N,L($))}function lt($){return Y=void 0,tt&&q?T($):(q=ft=void 0,st)}function G(){Y!==void 0&&clearTimeout(Y),Z=0,q=ot=ft=Y=void 0}function K(){return Y===void 0?st:lt(E())}function Q(){var $=E(),it=X($);if(q=arguments,ft=this,ot=$,it){if(Y===void 0)return U(ot);if(P)return Y=setTimeout(N,O),T(ot)}return Y===void 0&&(Y=setTimeout(N,O)),st}var q,ft,nt,st,Y,ot,Z=0,dt=!1,P=!1,tt=!0;if(typeof g!="function")throw new TypeError(r);return O=f(O)||0,a(B)&&(dt=!!B.leading,P="maxWait"in B,nt=P?j(f(B.maxWait)||0,O):nt,tt="trailing"in B?!!B.trailing:tt),Q.cancel=G,Q.flush=K,Q}function n(g,O,B){var T=!0,U=!0;if(typeof g!="function")throw new TypeError(r);return a(B)&&(T="leading"in B?!!B.leading:T,U="trailing"in B?!!B.trailing:U),e(g,O,{leading:T,maxWait:O,trailing:U})}function a(g){var O=typeof g;return!!g&&(O=="object"||O=="function")}function s(g){return!!g&&typeof g=="object"}function t(g){return typeof g=="symbol"||s(g)&&A.call(g)==p}function f(g){if(typeof g=="number")return g;if(t(g))return c;if(a(g)){var O=typeof g.valueOf=="function"?g.valueOf():g;g=a(O)?O+"":O}if(typeof g!="string")return g===0?g:+g;g=g.replace(d,"");var B=M.test(g);return B||m.test(g)?k(g.slice(2),B?2:8):b.test(g)?c:+g}var r="Expected a function",c=NaN,p="[object Symbol]",d=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,m=/^0o[0-7]+$/i,k=parseInt,w=typeof mt=="object"&&mt&&mt.Object===Object&&mt,F=typeof self=="object"&&self&&self.Object===Object&&self,H=w||F||Function("return this")(),J=Object.prototype,A=J.toString,j=Math.max,D=Math.min,E=function(){return H.Date.now()};o.exports=n},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{ref:"container",staticClass:"vc-saturation",style:{background:t.bgColor},on:{mousedown:t.handleMouseDown,touchmove:t.handleChange,touchstart:t.handleChange}},[r("div",{staticClass:"vc-saturation--white"}),t._v(" "),r("div",{staticClass:"vc-saturation--black"}),t._v(" "),r("div",{staticClass:"vc-saturation-pointer",style:{top:t.pointerTop,left:t.pointerLeft}},[r("div",{staticClass:"vc-saturation-circle"})])])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){var n=e(129);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("4dc1b086",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-alpha {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.vc-alpha-checkboard-wrap {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
}
.vc-alpha-gradient {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.vc-alpha-container {
  cursor: pointer;
  position: relative;
  z-index: 2;
  height: 100%;
  margin: 0 3px;
}
.vc-alpha-pointer {
  z-index: 2;
  position: absolute;
}
.vc-alpha-picker {
  cursor: pointer;
  width: 4px;
  border-radius: 1px;
  height: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, .6);
  background: #fff;
  margin-top: 1px;
  transform: translateX(-2px);
}
`,""])},function(o,i,e){var n=e(131);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("7e15c05b",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-checkerboard {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-size: contain;
}
`,""])},function(o,i,e){var n=function(){var t=this,f=t.$createElement;return(t._self._c||f)("div",{staticClass:"vc-checkerboard",style:t.bgStyle})},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{staticClass:"vc-alpha"},[r("div",{staticClass:"vc-alpha-checkboard-wrap"},[r("checkboard")],1),t._v(" "),r("div",{staticClass:"vc-alpha-gradient",style:{background:t.gradientColor}}),t._v(" "),r("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:t.handleMouseDown,touchmove:t.handleChange,touchstart:t.handleChange}},[r("div",{staticClass:"vc-alpha-pointer",style:{left:100*t.colors.a+"%"}},[r("div",{staticClass:"vc-alpha-picker"})])])])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{class:["vc-photoshop",t.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"application","aria-label":"PhotoShop color picker"}},[r("div",{staticClass:"vc-ps-head",attrs:{role:"heading"}},[t._v(t._s(t.head))]),t._v(" "),r("div",{staticClass:"vc-ps-body"},[r("div",{staticClass:"vc-ps-saturation-wrap"},[r("saturation",{on:{change:t.childChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}})],1),t._v(" "),r("div",{staticClass:"vc-ps-hue-wrap"},[r("hue",{attrs:{direction:"vertical"},on:{change:t.childChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}},[r("div",{staticClass:"vc-ps-hue-pointer"},[r("i",{staticClass:"vc-ps-hue-pointer--left"}),r("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),t._v(" "),r("div",{class:["vc-ps-controls",t.disableFields?"vc-ps-controls__disable-fields":""]},[r("div",{staticClass:"vc-ps-previews"},[r("div",{staticClass:"vc-ps-previews__label"},[t._v(t._s(t.newLabel))]),t._v(" "),r("div",{staticClass:"vc-ps-previews__swatches"},[r("div",{staticClass:"vc-ps-previews__pr-color",style:{background:t.colors.hex},attrs:{"aria-label":"New color is "+t.colors.hex}}),t._v(" "),r("div",{staticClass:"vc-ps-previews__pr-color",style:{background:t.currentColor},attrs:{"aria-label":"Current color is "+t.currentColor},on:{click:t.clickCurrentColor}})]),t._v(" "),r("div",{staticClass:"vc-ps-previews__label"},[t._v(t._s(t.currentLabel))])]),t._v(" "),t.disableFields?t._e():r("div",{staticClass:"vc-ps-actions"},[r("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":t.acceptLabel},on:{click:t.handleAccept}},[t._v(t._s(t.acceptLabel))]),t._v(" "),r("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":t.cancelLabel},on:{click:t.handleCancel}},[t._v(t._s(t.cancelLabel))]),t._v(" "),r("div",{staticClass:"vc-ps-fields"},[r("ed-in",{attrs:{label:"h",desc:"°",value:t.hsv.h},on:{change:t.inputChange}}),t._v(" "),r("ed-in",{attrs:{label:"s",desc:"%",value:t.hsv.s,max:100},on:{change:t.inputChange}}),t._v(" "),r("ed-in",{attrs:{label:"v",desc:"%",value:t.hsv.v,max:100},on:{change:t.inputChange}}),t._v(" "),r("div",{staticClass:"vc-ps-fields__divider"}),t._v(" "),r("ed-in",{attrs:{label:"r",value:t.colors.rgba.r},on:{change:t.inputChange}}),t._v(" "),r("ed-in",{attrs:{label:"g",value:t.colors.rgba.g},on:{change:t.inputChange}}),t._v(" "),r("ed-in",{attrs:{label:"b",value:t.colors.rgba.b},on:{change:t.inputChange}}),t._v(" "),r("div",{staticClass:"vc-ps-fields__divider"}),t._v(" "),r("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:t.hex},on:{change:t.inputChange}})],1),t._v(" "),t.hasResetButton?r("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:t.handleReset}},[t._v(t._s(t.resetLabel))]):t._e()])])])])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){function n(d){e(136)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(57),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(138),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Sketch.vue",i.default=p.exports},function(o,i,e){var n=e(137);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("612c6604",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-sketch {
  position: relative;
  width: 200px;
  padding: 10px 10px 0;
  box-sizing: initial;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);
}
.vc-sketch-saturation-wrap {
  width: 100%;
  padding-bottom: 75%;
  position: relative;
  overflow: hidden;
}
.vc-sketch-controls {
  display: flex;
}
.vc-sketch-sliders {
  padding: 4px 0;
  flex: 1;
}
.vc-sketch-sliders .vc-hue,
.vc-sketch-sliders .vc-alpha-gradient {
  border-radius: 2px;
}
.vc-sketch-hue-wrap {
  position: relative;
  height: 10px;
}
.vc-sketch-alpha-wrap {
  position: relative;
  height: 10px;
  margin-top: 4px;
  overflow: hidden;
}
.vc-sketch-color-wrap {
  width: 24px;
  height: 24px;
  position: relative;
  margin-top: 4px;
  margin-left: 4px;
  border-radius: 3px;
}
.vc-sketch-active-color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);
  z-index: 2;
}
.vc-sketch-color-wrap .vc-checkerboard {
  background-size: auto;
}
.vc-sketch-field {
  display: flex;
  padding-top: 4px;
}
.vc-sketch-field .vc-input__input {
  width: 90%;
  padding: 4px 0 3px 10%;
  border: none;
  box-shadow: inset 0 0 0 1px #ccc;
  font-size: 10px;
}
.vc-sketch-field .vc-input__label {
  display: block;
  text-align: center;
  font-size: 11px;
  color: #222;
  padding-top: 3px;
  padding-bottom: 4px;
  text-transform: capitalize;
}
.vc-sketch-field--single {
  flex: 1;
  padding-left: 6px;
}
.vc-sketch-field--double {
  flex: 2;
}
.vc-sketch-presets {
  margin-right: -10px;
  margin-left: -10px;
  padding-left: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;
}
.vc-sketch-presets-color {
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 0 10px 10px 0;
  vertical-align: top;
  cursor: pointer;
  width: 16px;
  height: 16px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
}
.vc-sketch-presets-color .vc-checkerboard {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
  border-radius: 3px;
}
.vc-sketch__disable-alpha .vc-sketch-color-wrap {
  height: 10px;
}
`,""])},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{class:["vc-sketch",t.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Sketch color picker"}},[r("div",{staticClass:"vc-sketch-saturation-wrap"},[r("saturation",{on:{change:t.childChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}})],1),t._v(" "),r("div",{staticClass:"vc-sketch-controls"},[r("div",{staticClass:"vc-sketch-sliders"},[r("div",{staticClass:"vc-sketch-hue-wrap"},[r("hue",{on:{change:t.childChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}})],1),t._v(" "),t.disableAlpha?t._e():r("div",{staticClass:"vc-sketch-alpha-wrap"},[r("alpha",{on:{change:t.childChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}})],1)]),t._v(" "),r("div",{staticClass:"vc-sketch-color-wrap"},[r("div",{staticClass:"vc-sketch-active-color",style:{background:t.activeColor},attrs:{"aria-label":"Current color is "+t.activeColor}}),t._v(" "),r("checkboard")],1)]),t._v(" "),t.disableFields?t._e():r("div",{staticClass:"vc-sketch-field"},[r("div",{staticClass:"vc-sketch-field--double"},[r("ed-in",{attrs:{label:"hex",value:t.hex},on:{change:t.inputChange}})],1),t._v(" "),r("div",{staticClass:"vc-sketch-field--single"},[r("ed-in",{attrs:{label:"r",value:t.colors.rgba.r},on:{change:t.inputChange}})],1),t._v(" "),r("div",{staticClass:"vc-sketch-field--single"},[r("ed-in",{attrs:{label:"g",value:t.colors.rgba.g},on:{change:t.inputChange}})],1),t._v(" "),r("div",{staticClass:"vc-sketch-field--single"},[r("ed-in",{attrs:{label:"b",value:t.colors.rgba.b},on:{change:t.inputChange}})],1),t._v(" "),t.disableAlpha?t._e():r("div",{staticClass:"vc-sketch-field--single"},[r("ed-in",{attrs:{label:"a",value:t.colors.a,"arrow-offset":.01,max:1},on:{change:t.inputChange}})],1)]),t._v(" "),r("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[t._l(t.presetColors,function(c){return[t.isTransparent(c)?r("div",{key:c,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+c},on:{click:function(p){return t.handlePreset(c)}}},[r("checkboard")],1):r("div",{key:c,staticClass:"vc-sketch-presets-color",style:{background:c},attrs:{"aria-label":"Color:"+c},on:{click:function(p){return t.handlePreset(c)}}})]})],2)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){function n(d){e(140)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(58),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(142),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Chrome.vue",i.default=p.exports},function(o,i,e){var n=e(141);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("1cd16048",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-chrome {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);
  box-sizing: initial;
  width: 225px;
  font-family: Menlo;
  background-color: #fff;
}
.vc-chrome-controls {
  display: flex;
}
.vc-chrome-color-wrap {
  position: relative;
  width: 36px;
}
.vc-chrome-active-color {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;
}
.vc-chrome-color-wrap .vc-checkerboard {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-size: auto;
}
.vc-chrome-sliders {
  flex: 1;
}
.vc-chrome-fields-wrap {
  display: flex;
  padding-top: 16px;
}
.vc-chrome-fields {
  display: flex;
  margin-left: -6px;
  flex: 1;
}
.vc-chrome-field {
  padding-left: 6px;
  width: 100%;
}
.vc-chrome-toggle-btn {
  width: 32px;
  text-align: right;
  position: relative;
}
.vc-chrome-toggle-icon {
  margin-right: -4px;
  margin-top: 12px;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.vc-chrome-toggle-icon-highlight {
  position: absolute;
  width: 24px;
  height: 28px;
  background: #eee;
  border-radius: 4px;
  top: 10px;
  left: 12px;
}
.vc-chrome-hue-wrap {
  position: relative;
  height: 10px;
  margin-bottom: 8px;
}
.vc-chrome-alpha-wrap {
  position: relative;
  height: 10px;
}
.vc-chrome-hue-wrap .vc-hue {
  border-radius: 2px;
}
.vc-chrome-alpha-wrap .vc-alpha-gradient {
  border-radius: 2px;
}
.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  transform: translate(-6px, -2px);
  background-color: rgb(248, 248, 248);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
.vc-chrome-body {
  padding: 16px 16px 12px;
  background-color: #fff;
}
.vc-chrome-saturation-wrap {
  width: 100%;
  padding-bottom: 55%;
  position: relative;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
}
.vc-chrome-saturation-wrap .vc-saturation-circle {
  width: 12px;
  height: 12px;
}
.vc-chrome-fields .vc-input__input {
  font-size: 11px;
  color: #333;
  width: 100%;
  border-radius: 2px;
  border: none;
  box-shadow: inset 0 0 0 1px #dadada;
  height: 21px;
  text-align: center;
}
.vc-chrome-fields .vc-input__label {
  text-transform: uppercase;
  font-size: 11px;
  line-height: 11px;
  color: #969696;
  text-align: center;
  display: block;
  margin-top: 12px;
}
.vc-chrome__disable-alpha .vc-chrome-active-color {
  width: 18px;
  height: 18px;
}
.vc-chrome__disable-alpha .vc-chrome-color-wrap {
  width: 30px;
}
.vc-chrome__disable-alpha .vc-chrome-hue-wrap {
  margin-top: 4px;
  margin-bottom: 4px;
}
`,""])},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{class:["vc-chrome",t.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"application","aria-label":"Chrome color picker"}},[r("div",{staticClass:"vc-chrome-saturation-wrap"},[r("saturation",{on:{change:t.childChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}})],1),t._v(" "),r("div",{staticClass:"vc-chrome-body"},[r("div",{staticClass:"vc-chrome-controls"},[r("div",{staticClass:"vc-chrome-color-wrap"},[r("div",{staticClass:"vc-chrome-active-color",style:{background:t.activeColor},attrs:{"aria-label":"current color is "+t.colors.hex}}),t._v(" "),t.disableAlpha?t._e():r("checkboard")],1),t._v(" "),r("div",{staticClass:"vc-chrome-sliders"},[r("div",{staticClass:"vc-chrome-hue-wrap"},[r("hue",{on:{change:t.childChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}})],1),t._v(" "),t.disableAlpha?t._e():r("div",{staticClass:"vc-chrome-alpha-wrap"},[r("alpha",{on:{change:t.childChange},model:{value:t.colors,callback:function(c){t.colors=c},expression:"colors"}})],1)])]),t._v(" "),t.disableFields?t._e():r("div",{staticClass:"vc-chrome-fields-wrap"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.fieldsIndex===0,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[r("div",{staticClass:"vc-chrome-field"},[t.hasAlpha?t._e():r("ed-in",{attrs:{label:"hex",value:t.colors.hex},on:{change:t.inputChange}}),t._v(" "),t.hasAlpha?r("ed-in",{attrs:{label:"hex",value:t.colors.hex8},on:{change:t.inputChange}}):t._e()],1)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.fieldsIndex===1,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[r("div",{staticClass:"vc-chrome-field"},[r("ed-in",{attrs:{label:"r",value:t.colors.rgba.r},on:{change:t.inputChange}})],1),t._v(" "),r("div",{staticClass:"vc-chrome-field"},[r("ed-in",{attrs:{label:"g",value:t.colors.rgba.g},on:{change:t.inputChange}})],1),t._v(" "),r("div",{staticClass:"vc-chrome-field"},[r("ed-in",{attrs:{label:"b",value:t.colors.rgba.b},on:{change:t.inputChange}})],1),t._v(" "),t.disableAlpha?t._e():r("div",{staticClass:"vc-chrome-field"},[r("ed-in",{attrs:{label:"a",value:t.colors.a,"arrow-offset":.01,max:1},on:{change:t.inputChange}})],1)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.fieldsIndex===2,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[r("div",{staticClass:"vc-chrome-field"},[r("ed-in",{attrs:{label:"h",value:t.hsl.h},on:{change:t.inputChange}})],1),t._v(" "),r("div",{staticClass:"vc-chrome-field"},[r("ed-in",{attrs:{label:"s",value:t.hsl.s},on:{change:t.inputChange}})],1),t._v(" "),r("div",{staticClass:"vc-chrome-field"},[r("ed-in",{attrs:{label:"l",value:t.hsl.l},on:{change:t.inputChange}})],1),t._v(" "),t.disableAlpha?t._e():r("div",{staticClass:"vc-chrome-field"},[r("ed-in",{attrs:{label:"a",value:t.colors.a,"arrow-offset":.01,max:1},on:{change:t.inputChange}})],1)]),t._v(" "),r("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:t.toggleViews}},[r("div",{staticClass:"vc-chrome-toggle-icon"},[r("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:t.showHighlight,mouseenter:t.showHighlight,mouseout:t.hideHighlight}},[r("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s},function(o,i,e){function n(d){e(144)}Object.defineProperty(i,"__esModule",{value:!0});var a=e(59),s=e.n(a);for(var t in a)t!=="default"&&function(d){e.d(i,d,function(){return a[d]})}(t);var f=e(146),r=e(2),c=n,p=r(s.a,f.a,!1,c,null,null);p.options.__file="src/components/Twitter.vue",i.default=p.exports},function(o,i,e){var n=e(145);typeof n=="string"&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals),e(1)("669a48a5",n,!1,{})},function(o,i,e){i=o.exports=e(0)(!1),i.push([o.i,`
.vc-twitter {
  background: #fff;
  border: 0 solid rgba(0,0,0,0.25);
  box-shadow: 0 1px 4px rgba(0,0,0,0.25);
  border-radius: 4px;
  position: relative;
}
.vc-twitter-triangle {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 9px 10px 9px;
  border-color: transparent transparent #fff transparent;
  position: absolute;
}
.vc-twitter-triangle-shadow {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 9px 10px 9px;
  border-color: transparent transparent rgba(0, 0, 0, .1) transparent;
  position: absolute;
}
.vc-twitter-body {
  padding: 15px 9px 9px 15px;
}
.vc-twitter .vc-editable-input {
  position: relative;
}
.vc-twitter .vc-editable-input input {
  width: 100px;
  font-size: 14px;
  color: #666;
  border: 0px;
  outline: none;
  height: 28px;
  box-shadow: inset 0 0 0 1px #F0F0F0;
  box-sizing: content-box;
  border-radius: 0 4px 4px 0;
  float: left;
  padding: 1px;
  padding-left: 8px;
}
.vc-twitter .vc-editable-input span {
  display: none;
}
.vc-twitter-hash {
  background: #F0F0F0;
  height: 30px;
  width: 30px;
  border-radius: 4px 0 0 4px;
  float: left;
  color: #98A1A4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vc-twitter-swatch {
  width: 30px;
  height: 30px;
  float: left;
  border-radius: 4px;
  margin: 0 6px 6px 0;
  cursor: pointer;
  position: relative;
  outline: none;
}
.vc-twitter-clear {
  clear: both;
}
.vc-twitter-hide-triangle .vc-twitter-triangle {
  display: none;
}
.vc-twitter-hide-triangle .vc-twitter-triangle-shadow {
  display: none;
}
.vc-twitter-top-left-triangle .vc-twitter-triangle{
  top: -10px;
  left: 12px;
}
.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{
  top: -11px;
  left: 12px;
}
.vc-twitter-top-right-triangle .vc-twitter-triangle{
  top: -10px;
  right: 12px;
}
.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{
  top: -11px;
  right: 12px;
}
`,""])},function(o,i,e){var n=function(){var t=this,f=t.$createElement,r=t._self._c||f;return r("div",{staticClass:"vc-twitter",class:{"vc-twitter-hide-triangle ":t.triangle==="hide","vc-twitter-top-left-triangle ":t.triangle==="top-left","vc-twitter-top-right-triangle ":t.triangle==="top-right"},style:{width:typeof t.width=="number"?t.width+"px":t.width}},[r("div",{staticClass:"vc-twitter-triangle-shadow"}),t._v(" "),r("div",{staticClass:"vc-twitter-triangle"}),t._v(" "),r("div",{staticClass:"vc-twitter-body"},[t._l(t.defaultColors,function(c,p){return r("span",{key:p,staticClass:"vc-twitter-swatch",style:{background:c,boxShadow:"0 0 4px "+(t.equal(c)?c:"transparent")},on:{click:function(d){return t.handlerClick(c)}}})}),t._v(" "),r("div",{staticClass:"vc-twitter-hash"},[t._v("#")]),t._v(" "),r("editable-input",{attrs:{label:"#",value:t.hex},on:{change:t.inputChange}}),t._v(" "),r("div",{staticClass:"vc-twitter-clear"})],2)])},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};i.a=s}])})})(At);var Ot=At.exports,jt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,gt=(v,R,o,i)=>{for(var e=i>1?void 0:i?Dt(R,o):R,n=v.length-1,a;n>=0;n--)(a=v[n])&&(e=(i?a(R,o,e):a(e))||e);return i&&e&&jt(R,o,e),e};let vt=class extends St{constructor(){super(...arguments);rt(this,"$refs");rt(this,"value");rt(this,"placeholder");rt(this,"hasAlpha");rt(this,"isMini");rt(this,"icon");rt(this,"error");rt(this,"displayPicker",!1);rt(this,"backgroundColor","");rt(this,"colors",{})}get alphaClass(){return this.hasAlpha?this.colors.a===1?"nonAlpha":"alpha":!1}created(){this.colors=Object.assign({},this.colors,{hex:this.value})}updateFromPicker(o){this.colors=o,this.alphaClass==="alpha"?this.$emit("input",o.hex8):this.$emit("input",o.hex)}updateFromInput(o){this.colors=o.target.value,this.$emit("input",o.target.value)}hidePicker(){document.removeEventListener("click",this.documentClick),this.displayPicker=!1}showPicker(){document.addEventListener("click",this.documentClick),this.displayPicker=!0}documentClick(o){let i=this.$refs.colorpicker,e=o.target;i&&i!==e&&!i.contains(e)&&this.hidePicker()}};gt([xt()],vt.prototype,"value",2);gt([xt({default:"#31c3a2"})],vt.prototype,"placeholder",2);gt([xt({default:!1})],vt.prototype,"hasAlpha",2);gt([xt({default:!1})],vt.prototype,"isMini",2);gt([xt()],vt.prototype,"icon",2);gt([xt()],vt.prototype,"error",2);vt=gt([kt({inheritAttrs:!1,components:{picker:Ot.Chrome}})],vt);var Lt=function(){var v=this,R=v.$createElement,o=v._self._c||R;return o("div",{ref:"colorpicker",staticClass:"s-colorpicker-container",class:{"s-colorpicker-container__mini":v.isMini,"s-colorpicker-container__mini-icon":v.isMini&&v.icon}},[v.isMini?v._e():o("input",{class:{"s-colorpicker__input--error":v.error},attrs:{type:"text",placeholder:v.placeholder},domProps:{value:v.value},on:{click:function(i){return v.showPicker()},input:v.updateFromInput}}),v.isMini?o("div",{staticClass:"s-colorpicker__mini-wrapper",class:{"s-colorpicker__input--error":v.error},on:{click:function(i){return v.showPicker()}}},[o("i",{class:v.icon})]):v._e(),v.error?o("div",{staticClass:"s-colorpicker__input-error"},[o("i",{staticClass:"icon-error"}),v._v(" "+v._s(v.error)+" ")]):v._e(),o("div",{staticClass:"s-colorpicker__preview",style:{backgroundColor:v.value},on:{click:function(i){return v.showPicker()}}}),o("div",{staticClass:"s-colorpicker__preview--alpha"}),o("transition",{attrs:{name:"fade"}},[v.displayPicker?o("div",{staticClass:"s-colorpicker__picker-wrapper"},[o("picker",{ref:"chrome-color-picker",staticClass:"s-colorpicker",class:v.alphaClass,attrs:{value:v.colors,"disable-alpha":!v.hasAlpha,"disable-fields":!v.hasAlpha},on:{input:v.updateFromPicker}}),v.isMini?o("input",v._g({staticClass:"s-colorpicker__input--mini",class:{"s-colorpicker__input--error":v.error},attrs:{type:"text",placeholder:v.placeholder},domProps:{value:v.value},on:{input:v.updateFromInput}},v.listeners)):v._e()],1):v._e()])],1)},Bt=[];const Ct={};var Rt=Ft(vt,Lt,Bt,!1,Tt,null,null,null);function Tt(v){for(let R in Ct)this[R]=Ct[R]}const $t=function(){return Rt.exports}(),It=`<template>
  <div>
    <div class="section">
      <h1>Color Picker</h1>
      <p>This color picker uses a chrome style picker</p>

      <pre><code>import { ColorPicker } from "streamlabs-beaker"

components: {
  ColorPicker
}</code></pre>
    </div>

    <div class="section">
      <h2>Default Color Picker</h2>

      <div class="section">
        <DemoSection title="Default" :code="demoCode">
          <template #components>
            <ColorPicker v-model="color" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>With Alpha</h3>
        <DemoSection title="Alpha" :code="demoCode">
          <template #components>
            <ColorPicker v-model="alphaColor" :hasAlpha="true" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Mini, with hex code selector</h3>
        <DemoSection title="Mini" :code="demoCode">
          <template #components>
            <ColorPicker :isMini="true" v-model="miniColor" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Mini, with icon (optional)</h3>
        <DemoSection title="MiniIcon" :code="demoCode">
          <template #components>
            <ColorPicker
              icon="icon-text"
              :isMini="true"
              v-model="miniIconColor"
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
            <td>value</td>
            <td>String</td>
            <td>#31c3a2</td>
            <td>Color to show up on a fresh color picker</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>String</td>
            <td>null</td>
            <td>It shows as a placeholder in case of blank</td>
          </tr>
          <tr>
            <td>hasAlpha</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Option to add alpha setting for the color picker</td>
          </tr>
          <tr>
            <td>input events</td>
            <td>event</td>
            <td>-</td>
            <td>
              Use any standard input field event and it will be tracked to the
              input field
            </td>
          </tr>
          <tr>
            <td>isMini</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              Mini colorpicker, as just a square. Includes hex code in color
              picker dropdown.
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>String</td>
            <td>null</td>
            <td>
              Icon to use with mini colorpicker.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ColorPicker from "./../components/ColorPicker.vue";
import ColorPickersCode from "./ColorPickers.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    ColorPicker,
    DemoSection
  }
})
export default class ColorPickers extends Vue {
  demoCode = ColorPickersCode;
  color = "#5E3BEC";
  alphaColor = "#EB7777";
  miniColor = "#5E3BEC";
  miniIconColor = "#5E3BEC";
}
<\/script>
`;var Ht=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,zt=(v,R,o,i)=>{for(var e=i>1?void 0:i?Nt(R,o):R,n=v.length-1,a;n>=0;n--)(a=v[n])&&(e=(i?a(R,o,e):a(e))||e);return i&&e&&Ht(R,o,e),e};let wt=class extends St{constructor(){super(...arguments);rt(this,"demoCode",It);rt(this,"color","#5E3BEC");rt(this,"alphaColor","#EB7777");rt(this,"miniColor","#5E3BEC");rt(this,"miniIconColor","#5E3BEC")}};wt=zt([kt({components:{ColorPicker:$t,DemoSection:Pt}})],wt);var Ut=function(){var v=this,R=v.$createElement,o=v._self._c||R;return o("div",[v._m(0),o("div",{staticClass:"section"},[o("h2",[v._v("Default Color Picker")]),o("div",{staticClass:"section"},[o("DemoSection",{attrs:{title:"Default",code:v.demoCode},scopedSlots:v._u([{key:"components",fn:function(){return[o("ColorPicker",{model:{value:v.color,callback:function(i){v.color=i},expression:"color"}})]},proxy:!0}])})],1),o("div",{staticClass:"section"},[o("h3",[v._v("With Alpha")]),o("DemoSection",{attrs:{title:"Alpha",code:v.demoCode},scopedSlots:v._u([{key:"components",fn:function(){return[o("ColorPicker",{attrs:{hasAlpha:!0},model:{value:v.alphaColor,callback:function(i){v.alphaColor=i},expression:"alphaColor"}})]},proxy:!0}])})],1),o("div",{staticClass:"section"},[o("h3",[v._v("Mini, with hex code selector")]),o("DemoSection",{attrs:{title:"Mini",code:v.demoCode},scopedSlots:v._u([{key:"components",fn:function(){return[o("ColorPicker",{attrs:{isMini:!0},model:{value:v.miniColor,callback:function(i){v.miniColor=i},expression:"miniColor"}})]},proxy:!0}])})],1),o("div",{staticClass:"section"},[o("h3",[v._v("Mini, with icon (optional)")]),o("DemoSection",{attrs:{title:"MiniIcon",code:v.demoCode},scopedSlots:v._u([{key:"components",fn:function(){return[o("ColorPicker",{attrs:{icon:"icon-text",isMini:!0},model:{value:v.miniIconColor,callback:function(i){v.miniIconColor=i},expression:"miniIconColor"}})]},proxy:!0}])})],1),v._m(1)])])},Vt=[function(){var v=this,R=v.$createElement,o=v._self._c||R;return o("div",{staticClass:"section"},[o("h1",[v._v("Color Picker")]),o("p",[v._v("This color picker uses a chrome style picker")]),o("pre",[o("code",[v._v(`import { ColorPicker } from "streamlabs-beaker"

components: {
  ColorPicker
}`)])])])},function(){var v=this,R=v.$createElement,o=v._self._c||R;return o("table",{staticClass:"docs-table"},[o("thead",[o("tr",[o("th",[v._v("Props")]),o("th",[v._v("Type")]),o("th",[v._v("Default")]),o("th",[v._v("Description")])])]),o("tbody",[o("tr",[o("td",[v._v("value")]),o("td",[v._v("String")]),o("td",[v._v("#31c3a2")]),o("td",[v._v("Color to show up on a fresh color picker")])]),o("tr",[o("td",[v._v("placeholder")]),o("td",[v._v("String")]),o("td",[v._v("null")]),o("td",[v._v("It shows as a placeholder in case of blank")])]),o("tr",[o("td",[v._v("hasAlpha")]),o("td",[v._v("Boolean")]),o("td",[v._v("false")]),o("td",[v._v("Option to add alpha setting for the color picker")])]),o("tr",[o("td",[v._v("input events")]),o("td",[v._v("event")]),o("td",[v._v("-")]),o("td",[v._v(" Use any standard input field event and it will be tracked to the input field ")])]),o("tr",[o("td",[v._v("isMini")]),o("td",[v._v("Boolean")]),o("td",[v._v("false")]),o("td",[v._v(" Mini colorpicker, as just a square. Includes hex code in color picker dropdown. ")])]),o("tr",[o("td",[v._v("icon")]),o("td",[v._v("String")]),o("td",[v._v("null")]),o("td",[v._v(" Icon to use with mini colorpicker. ")])])])])}];const yt={};var Gt=Ft(wt,Ut,Vt,!1,qt,null,null,null);function qt(v){for(let R in yt)this[R]=yt[R]}const Qt=function(){return Gt.exports}();export{Qt as default};
//# sourceMappingURL=ColorPickers-b4f3c991.js.map

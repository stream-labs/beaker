import{g as rt}from"./index-e8bb31bb.js";var nt={exports:{}};(function(it,st){(function(O,Y){it.exports=Y()})(window,function(){return U={},O.m=Y=[function(r,d,a){var s=a(6);typeof s=="string"&&(s=[[r.i,s,""]]),s.locals&&(r.exports=s.locals),(0,a(4).default)("27d83796",s,!1,{})},function(r,d,a){var s=a(8);typeof s=="string"&&(s=[[r.i,s,""]]),s.locals&&(r.exports=s.locals),(0,a(4).default)("0e783494",s,!1,{})},function(r,d,a){var s=a(10);typeof s=="string"&&(s=[[r.i,s,""]]),s.locals&&(r.exports=s.locals),(0,a(4).default)("17757f60",s,!1,{})},function(r,d){r.exports=function(a){var s=[];return s.toString=function(){return this.map(function(k){var z=function(H,C){var T=H[1]||"",S=H[3];if(!S)return T;if(C&&typeof btoa=="function"){var P=function(L){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(L))))+" */"}(S),W=S.sources.map(function(L){return"/*# sourceURL="+S.sourceRoot+L+" */"});return[T].concat(W).concat([P]).join(`
`)}return[T].join(`
`)}(k,a);return k[2]?"@media "+k[2]+"{"+z+"}":z}).join("")},s.i=function(k,z){typeof k=="string"&&(k=[[null,k,""]]);for(var H={},C=0;C<this.length;C++){var T=this[C][0];typeof T=="number"&&(H[T]=!0)}for(C=0;C<k.length;C++){var S=k[C];typeof S[0]=="number"&&H[S[0]]||(z&&!S[2]?S[2]=z:z&&(S[2]="("+S[2]+") and ("+z+")"),s.push(S))}},s}},function(r,d,a){function s(m,w){for(var y=[],b={},p=0;p<w.length;p++){var f=w[p],_=f[0],M={id:m+":"+p,css:f[1],media:f[2],sourceMap:f[3]};b[_]?b[_].parts.push(M):y.push(b[_]={id:_,parts:[M]})}return y}a.r(d),a.d(d,"default",function(){return J});var k=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!k)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var z={},H=k&&(document.head||document.getElementsByTagName("head")[0]),C=null,T=0,S=!1,P=function(){},W=null,L="data-vue-ssr-id",F=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function J(m,w,y,b){S=y,W=b||{};var p=s(m,w);return X(p),function(f){for(var _=[],M=0;M<p.length;M++){var B=p[M];(j=z[B.id]).refs--,_.push(j)}for(f?X(p=s(m,f)):p=[],M=0;M<_.length;M++){var j;if((j=_[M]).refs===0){for(var D=0;D<j.parts.length;D++)j.parts[D]();delete z[j.id]}}}}function X(m){for(var w=0;w<m.length;w++){var y=m[w],b=z[y.id];if(b){b.refs++;for(var p=0;p<b.parts.length;p++)b.parts[p](y.parts[p]);for(;p<y.parts.length;p++)b.parts.push(V(y.parts[p]));b.parts.length>y.parts.length&&(b.parts.length=y.parts.length)}else{var f=[];for(p=0;p<y.parts.length;p++)f.push(V(y.parts[p]));z[y.id]={id:y.id,refs:1,parts:f}}}}function I(){var m=document.createElement("style");return m.type="text/css",H.appendChild(m),m}function V(m){var w,y,b=document.querySelector("style["+L+'~="'+m.id+'"]');if(b){if(S)return P;b.parentNode.removeChild(b)}if(F){var p=T++;b=C=C||I(),w=K.bind(null,b,p,!1),y=K.bind(null,b,p,!0)}else b=I(),w=(function(f,_){var M=_.css,B=_.media,j=_.sourceMap;if(B&&f.setAttribute("media",B),W.ssrId&&f.setAttribute(L,_.id),j&&(M+=`
/*# sourceURL=`+j.sources[0]+" */",M+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(j))))+" */"),f.styleSheet)f.styleSheet.cssText=M;else{for(;f.firstChild;)f.removeChild(f.firstChild);f.appendChild(document.createTextNode(M))}}).bind(null,b),y=function(){b.parentNode.removeChild(b)};return w(m),function(f){if(f){if(f.css===m.css&&f.media===m.media&&f.sourceMap===m.sourceMap)return;w(m=f)}else y()}}var A,q=(A=[],function(m,w){return A[m]=w,A.filter(Boolean).join(`
`)});function K(m,w,y,b){var p=y?"":b.css;if(m.styleSheet)m.styleSheet.cssText=q(w,p);else{var f=document.createTextNode(p),_=m.childNodes;_[w]&&m.removeChild(_[w]),_.length?m.insertBefore(f,_[w]):m.appendChild(f)}}},function(r,d,a){var s=a(0);a.n(s).a},function(r,d,a){(r.exports=a(3)(!1)).push([r.i,`
.vue-modal-resizer {
  display: block;
  overflow: hidden;
  position: absolute;
  width: 12px;
  height: 12px;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  background: transparent;
  cursor: se-resize;
}
.vue-modal-resizer::after {
  display: block;
  position: absolute;
  content: '';
  background: transparent;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-bottom: 10px solid #ddd;
  border-left: 10px solid transparent;
}
.vue-modal-resizer.clicked::after {
  border-bottom: 10px solid #369be9;
}
`,""])},function(r,d,a){var s=a(1);a.n(s).a},function(r,d,a){(r.exports=a(3)(!1)).push([r.i,`
.v--modal-block-scroll {
  overflow: hidden;
  width: 100vw;
}
.v--modal-overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  opacity: 1;
}
.v--modal-overlay.scrollable {
  height: 100%;
  min-height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.v--modal-overlay .v--modal-background-click {
  width: 100%;
  min-height: 100%;
  height: auto;
}
.v--modal-overlay .v--modal-box {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.v--modal-overlay.scrollable .v--modal-box {
  margin-bottom: 2px;
}
.v--modal {
  background-color: white;
  text-align: left;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
  padding: 0;
}
.v--modal.v--modal-fullscreen {
  width: 100vw;
  height: 100vh;
  margin: 0;
  left: 0;
  top: 0;
}
.v--modal-top-right {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: all 0.2s;
}
.overlay-fade-enter,
.overlay-fade-leave-active {
  opacity: 0;
}
.nice-modal-fade-enter-active,
.nice-modal-fade-leave-active {
  transition: all 0.4s;
}
.nice-modal-fade-enter,
.nice-modal-fade-leave-active {
  opacity: 0;
  transform: translateY(-20px);
}
`,""])},function(r,d,a){var s=a(2);a.n(s).a},function(r,d,a){(r.exports=a(3)(!1)).push([r.i,`
.vue-dialog div {
  box-sizing: border-box;
}
.vue-dialog .dialog-flex {
  width: 100%;
  height: 100%;
}
.vue-dialog .dialog-content {
  flex: 1 0 auto;
  width: 100%;
  padding: 15px;
  font-size: 14px;
}
.vue-dialog .dialog-c-title {
  font-weight: 600;
  padding-bottom: 15px;
}
.vue-dialog .dialog-c-text {
}
.vue-dialog .vue-dialog-buttons {
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  border-top: 1px solid #eee;
}
.vue-dialog .vue-dialog-buttons-none {
  width: 100%;
  padding-bottom: 15px;
}
.vue-dialog-button {
  font-size: 12px !important;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 40px;
  height: 40px;
  color: inherit;
  font: inherit;
  outline: none;
}
.vue-dialog-button:hover {
  background: rgba(0, 0, 0, 0.01);
}
.vue-dialog-button:active {
  background: rgba(0, 0, 0, 0.025);
}
.vue-dialog-button:not(:first-of-type) {
  border-left: 1px solid #eee;
}
`,""])},function(r,d,a){a.r(d),a.d(d,"getModalsContainer",function(){return tt});function s(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.overlayTransition}},[t.visibility.overlay?n("div",{ref:"overlay",class:t.overlayClass,attrs:{"aria-expanded":t.visibility.overlay.toString(),"data-modal":t.name}},[n("div",{staticClass:"v--modal-background-click",on:{mousedown:function(i){return i.target!==i.currentTarget?null:t.handleBackgroundClick(i)},touchstart:function(i){return i.target!==i.currentTarget?null:t.handleBackgroundClick(i)}}},[n("div",{staticClass:"v--modal-top-right"},[t._t("top-right")],2),t._v(" "),n("transition",{attrs:{name:t.transition},on:{"before-enter":t.beforeTransitionEnter,"after-enter":t.afterTransitionEnter,"after-leave":t.afterTransitionLeave}},[t.visibility.modal?n("div",{ref:"modal",class:t.modalClass,style:t.modalStyle,attrs:{role:"dialog","aria-modal":"true"}},[t._t("default"),t._v(" "),t.resizable&&!t.isAutoHeight?n("resizer",{attrs:{"min-width":t.minWidth,"min-height":t.minHeight,"max-width":t.maxWidth,"max-height":t.maxHeight},on:{resize:t.handleModalResize}}):t._e()],2):t._e()])],1)]):t._e()])}function k(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className})}function z(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,i){var o=[],u=!0,l=!1,v=void 0;try{for(var h,c=n[Symbol.iterator]();!(u=(h=c.next()).done)&&(o.push(h.value),!i||o.length!==i);u=!0);}catch(g){l=!0,v=g}finally{try{u||c.return==null||c.return()}finally{if(l)throw v}}return o}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),i.forEach(function(o){C(t,o,n[o])})}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}k._withStripped=s._withStripped=!0;function T(t,e,n){return n<t?t:e<n?e:n}function S(){var t=window.innerWidth,e=document.documentElement.clientWidth;return t&&e?Math.min(t,e):e||t}var P=function(t){var e=0<arguments.length&&t!==void 0?t:0;return function(){return(e++).toString()}}(),W={name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER}},data:function(){return{clicked:!1,size:{}}},mounted:function(){this.$el.addEventListener("mousedown",this.start,!1)},computed:{className:function(){return{"vue-modal-resizer":!0,clicked:this.clicked}}},methods:{start:function(t){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),t.stopPropagation(),t.preventDefault()},stop:function(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size})},mousemove:function(t){this.resize(t)},resize:function(t){var e=this.$el.parentElement;if(e){var n=t.clientX-e.offsetLeft,i=t.clientY-e.offsetTop,o=Math.min(S(),this.maxWidth),u=Math.min(window.innerHeight,this.maxHeight);n=T(this.minWidth,o,n),i=T(this.minHeight,u,i),this.size={width:n,height:i},e.style.width=n+"px",e.style.height=i+"px",this.$emit("resize",{element:e,size:this.size})}}}};a(5);function L(t,e,n,i,o,u,l,v){var h,c=typeof t=="function"?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),u&&(c._scopeId="data-v-"+u),l?(h=function(E){(E=E||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(E=__VUE_SSR_CONTEXT__),o&&o.call(this,E),E&&E._registeredComponents&&E._registeredComponents.add(l)},c._ssrRegister=h):o&&(h=v?function(){o.call(this,this.$root.$options.shadowRoot)}:o),h)if(c.functional){c._injectStyles=h;var g=c.render;c.render=function(E,$){return h.call($),g(E,$)}}else{var x=c.beforeCreate;c.beforeCreate=x?[].concat(x,h):[h]}return{exports:t,options:c}}var F=L(W,k,[],!1,null,null,null);F.options.__file="src/Resizer.vue";var J=F.exports;function X(t){return(X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function I(t){switch(X(t)){case"number":return{type:"px",value:t};case"string":return function(e){if(e==="auto")return{type:e,value:0};var n=q.find(function(i){return i.regexp.test(e)});return n?{type:n.name,value:parseFloat(e)}:{type:"",value:e}}(t);default:return{type:"",value:t}}}function V(t){if(typeof t!="string")return 0<=t;var e=I(t);return(e.type==="%"||e.type==="px")&&0<e.value}var A="[-+]?[0-9]*.?[0-9]+",q=[{name:"px",regexp:new RegExp("^".concat(A,"px$"))},{name:"%",regexp:new RegExp("^".concat(A,"%$"))},{name:"px",regexp:new RegExp("^".concat(A,"$"))}];function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"overlay-fade"},transition:{type:String},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},styles:{type:[String,Array,Object]},minWidth:{type:Number,default:0,validator:function(t){return 0<=t}},minHeight:{type:Number,default:0,validator:function(t){return 0<=t}},maxWidth:{type:Number,default:Number.MAX_SAFE_INTEGER},maxHeight:{type:Number,default:Number.MAX_SAFE_INTEGER},width:{type:[Number,String],default:600,validator:V},height:{type:[Number,String],default:300,validator:function(t){return t==="auto"||V(t)}},pivotX:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}},pivotY:{type:Number,default:.5,validator:function(t){return 0<=t&&t<=1}}},components:{Resizer:J},data:function(){return{visible:!1,visibility:{modal:!1,overlay:!1},shift:{left:0,top:0},modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},viewportHeight:0,viewportWidth:0,mutationObserver:null}},created:function(){this.setInitialSize()},beforeMount:function(){var t=this;if(et.event.$on("toggle",this.handleToggleEvent),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.isAutoHeight){var e=function(){if(typeof window<"u")for(var n=["","WebKit","Moz","O","Ms"],i=0;i<n.length;i++){var o=n[i]+"MutationObserver";if(o in window)return window[o]}return!1}();e?this.mutationObserver=new e(function(n){t.updateRenderedHeight()}):console.warn("MutationObserver was not found. Vue-js-modal automatic resizing relies heavily on MutationObserver. Please make sure to provide shim for it.")}this.clickToClose&&window.addEventListener("keyup",this.handleEscapeKeyUp)},beforeDestroy:function(){et.event.$off("toggle",this.handleToggleEvent),window.removeEventListener("resize",this.handleWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.handleEscapeKeyUp),this.scrollable&&document.body.classList.remove("v--modal-block-scroll")},computed:{isAutoHeight:function(){return this.modal.heightType==="auto"},position:function(){var t=this.viewportHeight,e=this.viewportWidth,n=this.shift,i=this.pivotX,o=this.pivotY,u=this.trueModalWidth,l=this.trueModalHeight,v=e-u,h=Math.max(t-l,0),c=n.left+i*v,g=n.top+o*h;return{left:parseInt(T(0,v,c)),top:parseInt(T(0,h,g))}},trueModalWidth:function(){var t=this.viewportWidth,e=this.modal,n=this.adaptive,i=this.minWidth,o=this.maxWidth,u=e.widthType==="%"?t/100*e.width:e.width,l=Math.max(i,Math.min(t,o));return n?T(i,l,u):u},trueModalHeight:function(){var t=this.viewportHeight,e=this.modal,n=this.isAutoHeight,i=this.adaptive,o=this.minHeight,u=this.maxHeight,l=e.heightType==="%"?t/100*e.height:e.height;if(n)return this.modal.renderedHeight;var v=Math.max(o,Math.min(t,u));return i?T(o,v,l):l},overlayClass:function(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight}},modalClass:function(){return["v--modal-box",this.classes]},stylesProp:function(){return typeof this.styles=="string"?this.styles.split(";").map(function(t){return t.trim()}).filter(Boolean).map(function(t){return t.split(":")}).reduce(function(t,e){var n=z(e,2);return H({},t,C({},n[0],n[1]))},{}):this.styles},modalStyle:function(){return[this.stylesProp,{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"}]}},watch:{visible:function(t){var e=this;t?(this.visibility.overlay=!0,setTimeout(function(){e.visibility.modal=!0,e.$nextTick(function(){e.addDraggableListeners(),e.callAfterEvent(!0)})},this.delay)):(this.visibility.modal=!1,setTimeout(function(){e.visibility.overlay=!1,e.$nextTick(function(){e.removeDraggableListeners(),e.callAfterEvent(!1)})},this.delay))}},methods:{handleToggleEvent:function(t,e,n){if(this.name===t){var i=e===void 0?!this.visible:e;this.toggle(i,n)}},setInitialSize:function(){var t=this.modal,e=I(this.width),n=I(this.height);t.width=e.value,t.widthType=e.type,t.height=n.value,t.heightType=n.type},handleEscapeKeyUp:function(t){t.which===27&&this.visible&&this.$modal.hide(this.name)},handleWindowResize:function(){this.viewportWidth=S(),this.viewportHeight=window.innerHeight,this.ensureShiftInWindowBounds()},createModalEvent:function(t){var e=0<arguments.length&&t!==void 0?t:{};return function(n){var i=0<arguments.length&&n!==void 0?n:{};return H({id:P(),timestamp:Date.now(),canceled:!1},i)}(function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{},u=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(o).filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable}))),u.forEach(function(l){K(n,l,o[l])})}return n}({name:this.name,ref:this.$refs.modal},e))},handleModalResize:function(t){this.modal.widthType="px",this.modal.width=t.size.width,this.modal.heightType="px",this.modal.height=t.size.height;var e=this.modal.size;this.$emit("resize",this.createModalEvent({size:e}))},toggle:function(t,e){var n=this.reset,i=this.scrollable,o=this.visible;if(o!==t){var u=o?"before-close":"before-open";u=="before-open"?(n&&(this.setInitialSize(),this.shift.left=0,this.shift.top=0),i&&document.body.classList.add("v--modal-block-scroll")):i&&document.body.classList.remove("v--modal-block-scroll");var l=!1,v=this.createModalEvent({stop:function(){l=!0},state:t,params:e});this.$emit(u,v),l||(this.visible=t,u=="before-open"&&typeof document<"u"&&document.activeElement&&document.activeElement.tagName!=="BODY"&&document.activeElement.blur&&document.activeElement.blur())}},getDraggableElement:function(){var t=typeof this.draggable!="string"?".v--modal-box":this.draggable;return t?this.$refs.overlay.querySelector(t):null},handleBackgroundClick:function(){this.clickToClose&&this.toggle(!1)},callAfterEvent:function(t){t?this.connectObserver():this.disconnectObserver();var e=t?"opened":"closed",n=this.createModalEvent({state:t});this.$emit(e,n)},addDraggableListeners:function(){var t=this;if(this.draggable){var e=this.getDraggableElement();if(e){var n=0,i=0,o=0,u=0,l=function(g){return g.touches&&0<g.touches.length?g.touches[0]:g},v=function(g){var x=g.target;if(!x||x.nodeName!=="INPUT"&&x.nodeName!=="TEXTAREA"&&x.nodeName!=="SELECT"){var E=l(g),$=E.clientX,N=E.clientY;document.addEventListener("mousemove",h),document.addEventListener("touchmove",h),document.addEventListener("mouseup",c),document.addEventListener("touchend",c),n=$,i=N,o=t.shift.left,u=t.shift.top}},h=function(g){var x=l(g),E=x.clientX,$=x.clientY;t.shift.left=o+E-n,t.shift.top=u+$-i,g.preventDefault()},c=function g(x){t.ensureShiftInWindowBounds(),document.removeEventListener("mousemove",h),document.removeEventListener("touchmove",h),document.removeEventListener("mouseup",g),document.removeEventListener("touchend",g),x.preventDefault()};e.addEventListener("mousedown",v),e.addEventListener("touchstart",v)}}},removeDraggableListeners:function(){},updateRenderedHeight:function(){this.$refs.modal&&(this.modal.renderedHeight=this.$refs.modal.getBoundingClientRect().height)},connectObserver:function(){this.mutationObserver&&this.mutationObserver.observe(this.$refs.overlay,{childList:!0,attributes:!0,subtree:!0})},disconnectObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect()},beforeTransitionEnter:function(){this.connectObserver()},afterTransitionEnter:function(){},afterTransitionLeave:function(){},ensureShiftInWindowBounds:function(){var t=this.viewportHeight,e=this.viewportWidth,n=this.shift,i=this.pivotX,o=this.pivotY,u=this.trueModalWidth,l=this.trueModalHeight,v=e-u,h=Math.max(t-l,0),c=n.left+i*v,g=n.top+o*h;this.shift.left-=c-T(0,v,c),this.shift.top-=g-T(0,h,g)}}},w=(a(7),L(m,s,[],!1,null,null,null));w.options.__file="src/Modal.vue";function y(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:t.width,"pivot-y":.3,adaptive:!0,clickToClose:t.clickToClose,transition:t.transition},on:{"before-open":t.beforeOpened,"before-close":t.beforeClosed,opened:function(i){t.$emit("opened",i)},closed:function(i){t.$emit("closed",i)}}},[n("div",{staticClass:"dialog-content"},[t.params.title?n("div",{staticClass:"dialog-c-title",domProps:{innerHTML:t._s(t.params.title||"")}}):t._e(),t._v(" "),t.params.component?n(t.params.component,t._b({tag:"component"},"component",t.params.props,!1)):n("div",{staticClass:"dialog-c-text",domProps:{innerHTML:t._s(t.params.text||"")}})],1),t._v(" "),t.buttons?n("div",{staticClass:"vue-dialog-buttons"},t._l(t.buttons,function(i,o){return n("button",{key:o,class:i.class||"vue-dialog-button",style:t.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:t._s(i.title)},on:{click:function(u){u.stopPropagation(),t.click(o,u)}}},[t._v(`
      `+t._s(i.title)+`
    `)])})):n("div",{staticClass:"vue-dialog-buttons-none"})])}var b=w.exports;y._withStripped=!0;var p={name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function(){return{params:{},defaultButtons:[{title:"CLOSE"}]}},computed:{buttons:function(){return this.params.buttons||this.defaultButtons},buttonStyle:function(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")}}},methods:{beforeOpened:function(t){window.addEventListener("keyup",this.onKeyUp),this.params=t.params||{},this.$emit("before-opened",t)},beforeClosed:function(t){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",t)},click:function(t,e,n){var i=2<arguments.length&&n!==void 0?n:"click",o=this.buttons[t];o&&typeof o.handler=="function"?o.handler(t,e,{source:i}):this.$modal.hide("dialog")},onKeyUp:function(t){if(t.which===13&&0<this.buttons.length){var e=this.buttons.length===1?0:this.buttons.findIndex(function(n){return n.default});e!==-1&&this.click(e,t,"keypress")}}}},f=(a(9),L(p,y,[],!1,null,null,null));f.options.__file="src/Dialog.vue";function _(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"modals-container"}},t._l(t.modals,function(i){return n("modal",t._g(t._b({key:i.id,on:{closed:function(o){t.remove(i.id)}}},"modal",i.modalAttrs,!1),i.modalListeners),[n(i.component,t._g(t._b({tag:"component",on:{close:function(o){t.$modal.hide(i.modalAttrs.name)}}},"component",i.componentAttrs,!1),t.$listeners))],1)}))}var M=f.exports;function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}_._withStripped=!0;var j=L({data:function(){return{modals:[]}},created:function(){this.$root._dynamicContainer=this},methods:{add:function(t,e,n,i){var o=this,u=1<arguments.length&&e!==void 0?e:{},l=2<arguments.length&&n!==void 0?n:{},v=3<arguments.length&&i!==void 0?i:{},h=P(),c=l.name||"_dynamic_modal_"+h;this.modals.push({id:h,modalAttrs:function(g){for(var x=1;x<arguments.length;x++){var E=arguments[x]!=null?arguments[x]:{},$=Object.keys(E);typeof Object.getOwnPropertySymbols=="function"&&($=$.concat(Object.getOwnPropertySymbols(E).filter(function(N){return Object.getOwnPropertyDescriptor(E,N).enumerable}))),$.forEach(function(N){B(g,N,E[N])})}return g}({},l,{name:c}),modalListeners:v,component:t,componentAttrs:u}),this.$nextTick(function(){o.$modal.show(c)})},remove:function(t){var e=this.modals.findIndex(function(n){return n.id===t});e!==-1&&this.modals.splice(e,1)}}},_,[],!1,null,null,null);j.options.__file="src/ModalsContainer.vue";var D=j.exports;function Z(t){return(Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var tt=function(t,e,n){if(!n._dynamicContainer&&e.injectModalsContainer){var i=(o=document.createElement("div"),document.body.appendChild(o),o);new t({parent:n,render:function(u){return u(D)}}).$mount(i)}var o;return n._dynamicContainer},R={install:function(t,e){var n=1<arguments.length&&e!==void 0?e:{};if(!this.installed){this.installed=!0,this.event=new t,this.rootInstance=null;var i=n.componentName||"Modal",o=n.dynamicDefaults||{},u=function(l,v,h,c){var g=h&&h.root?h.root:R.rootInstance,x=tt(t,n,g);x?x.add(l,v,function(E){for(var $=1;$<arguments.length;$++){var N=arguments[$]!=null?arguments[$]:{},Q=Object.keys(N);typeof Object.getOwnPropertySymbols=="function"&&(Q=Q.concat(Object.getOwnPropertySymbols(N).filter(function(G){return Object.getOwnPropertyDescriptor(N,G).enumerable}))),Q.forEach(function(G){ot(E,G,N[G])})}return E}({},o,h),c):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.")};t.prototype.$modal={show:function(l){for(var v=arguments.length,h=new Array(1<v?v-1:0),c=1;c<v;c++)h[c-1]=arguments[c];switch(Z(l)){case"string":return(function(g,x){R.event.$emit("toggle",g,!0,x)}).apply(void 0,[l].concat(h));case"object":case"function":return n.dynamic?u.apply(void 0,[l].concat(h)):console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals");default:console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.",l)}},hide:function(l,v){R.event.$emit("toggle",l,!1,v)},toggle:function(l,v){R.event.$emit("toggle",l,void 0,v)}},t.component(i,b),n.dialog&&t.component("VDialog",M),n.dynamic&&(t.component("ModalsContainer",D),t.mixin({beforeMount:function(){R.rootInstance===null&&(R.rootInstance=this.$root)}}))}}},et=d.default=R}],O.c=U,O.d=function(r,d,a){O.o(r,d)||Object.defineProperty(r,d,{enumerable:!0,get:a})},O.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},O.t=function(r,d){if(1&d&&(r=O(r)),8&d||4&d&&typeof r=="object"&&r&&r.__esModule)return r;var a=Object.create(null);if(O.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),2&d&&typeof r!="string")for(var s in r)O.d(a,s,(function(k){return r[k]}).bind(null,s));return a},O.n=function(r){var d=r&&r.__esModule?function(){return r.default}:function(){return r};return O.d(d,"a",d),d},O.o=function(r,d){return Object.prototype.hasOwnProperty.call(r,d)},O.p="/dist/",O(O.s=11);function O(r){if(U[r])return U[r].exports;var d=U[r]={i:r,l:!1,exports:{}};return Y[r].call(d.exports,d,d.exports,O),d.l=!0,d.exports}var Y,U})})(nt);var at=nt.exports;const ut=rt(at);export{ut as V};
//# sourceMappingURL=index-4af456d0.js.map

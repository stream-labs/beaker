var M=Object.defineProperty;var g=(e,t,i)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var d=(e,t,i)=>(g(e,typeof t!="symbol"?t+"":t,i),i);import{W as u,C as h,P as m,V as f,n as _}from"./index.17a864f5.js";import{F as y}from"./FormGroup.87e771a1.js";import{m as b}from"./vue-focus.common.5cd91eeb.js";import{i as w}from"./ResizeObserver.es.bd9ff68d.js";import{B as C}from"./Button.5177b229.js";import{D as P}from"./DemoSection.a0f0b33e.js";import"./Accordion.a5b0018d.js";var V=Object.defineProperty,S=Object.getOwnPropertyDescriptor,r=(e,t,i,a)=>{for(var o=a>1?void 0:a?S(t,i):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(a?l(t,i,o):l(o))||o);return a&&o&&V(t,i,o),o};let s=class extends f{constructor(){super(...arguments);d(this,"$refs");d(this,"variation");d(this,"mediaLink");d(this,"mediaPreview");d(this,"title");d(this,"value");d(this,"controlsAlwaysVisible");d(this,"canDelete");d(this,"mediaPickerSmall",!1);d(this,"mediaBroken",!1);d(this,"mediaControlsVisible",!1);d(this,"focused",0)}get mediaControls(){return[{key:"media-link",available:!!this.mediaLink,class:"s-media-picker__link-icon",emit:"link-media",title:`Link ${this.variationTitle}`,icon:"icon-link"},{key:"media-selected-zoom",available:this.mediaPreview&&this.variation==="image"&&this.media.selected&&!this.mediaBroken,class:"s-media-picker__zoom-icon",emit:"preview-media",title:`Preview ${this.variationTitle}`,icon:"icon-zoom"},{key:"media-selected-play",available:this.mediaPreview&&!this.mediaBroken&&this.variation==="audio"&&this.media.selected,class:"s-media-picker__play-icon",emit:"preview-media",title:`preview ${this.variationTitle}`,icon:"icon-media-share-2"},{key:"media-remove",available:this.media.selected,class:"s-media-picker__small-remove",emit:"remove-media",title:`Remove ${this.variationTitle}`,icon:"icon-close"},{key:"media-select",available:!0,class:"s-media-picker__small-remove",emit:"select-media",title:`Select ${this.variationTitle}`,icon:"icon-upload-image"}].filter(i=>!(!i.available||!this.canDelete&&i.key==="media-remove"))}get mediaInputPlaceholder(){return this.variation==="audio"?"Select Audio File":"Select Image/Video File"}get buttonTitle(){return this.variation?`Select ${this.variation}`:"Select Media"}get variationTitle(){return this.variation==="image"?"Image":"Audio"}get media(){return{selected:!!this.value,fileName:this.value?this.value.split("/").pop():"",url:this.value}}get noMediaIcon(){return this.variation==="image"?"icon-image":"icon-music"}get valueIsVideo(){const t=this.value;if(!t)return!1;const i=[".mov",".wmv",".flv",".avi",".webm",".mkv",".mp4"],a=t.split("?")[0];return i.some(o=>a.endsWith(o))}watchValue(){this.setBrokenMedia(null)}watchMediaControlsVisible(){this.mediaPickerSmall&&!this.mediaControlsVisible&&(this.focused=-1)}watchMediaControls(t){this.focused=t.length-1}mounted(){new w((i,a)=>{for(const o of i){const{left:n,top:l,width:k,height:z}=o.contentRect;this.mediaPickerSmall=k<500}}).observe(this.$refs.mediaPicker),this.focused=this.mediaControls.length-1}setBrokenMedia(t){this.mediaBroken=!!t}onTabOut(){this.mediaPickerSmall&&(this.mediaControlsVisible=!1)}moveRight(){this.focused=Math.min(this.focused+1,this.mediaControls.length-1)}moveLeft(){this.focused=Math.max(this.focused-1,0)}showMediaControls(){this.mediaControlsVisible=!0,this.focused=this.mediaControls.length-1}handleControlVisibility(t){this.controlsAlwaysVisible||(this.mediaControlsVisible=t)}};r([m()],s.prototype,"variation",2);r([m({default:!1})],s.prototype,"mediaLink",2);r([m({default:!0})],s.prototype,"mediaPreview",2);r([m()],s.prototype,"title",2);r([m()],s.prototype,"value",2);r([m({default:!1})],s.prototype,"controlsAlwaysVisible",2);r([m({default:!0})],s.prototype,"canDelete",2);r([u("value")],s.prototype,"watchValue",1);r([u("mediaControlsVisible")],s.prototype,"watchMediaControlsVisible",1);r([u("mediaControls")],s.prototype,"watchMediaControls",1);s=r([h({components:{Button:C},mixins:[b]})],s);var x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"mediaPicker",staticClass:"s-media-picker"},[i("div",{staticClass:"s-media-picker__input-wrapper"},[i("div",{staticClass:"s-media-picker__thumb"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[e.media.selected?e._e():i("i",{key:"thumb-upload",staticClass:"s-media-picker__no-media",class:e.noMediaIcon}),e.media.selected&&e.variation==="audio"?i("i",{key:"thumb-audio",staticClass:"icon-music"},[i("audio",{key:"thumb-audio",attrs:{src:e.media.url},on:{error:e.setBrokenMedia}})]):e._e(),e.media.selected&&e.variation==="image"&&!e.valueIsVideo?i("img",{key:"thumb-image",attrs:{src:e.media.url},on:{error:e.setBrokenMedia}}):e._e(),e.media.selected&&e.variation==="image"&&e.valueIsVideo?i("i",{key:"thumb-video",staticClass:"icon-studio"}):e._e()]),i("transition",{attrs:{name:"custom-classes-transition","leave-active-class":"fade-slow-leave-active",mode:"out-in"}},[e.media.selected&&e.mediaBroken?i("div",{staticClass:"s-media-picker__broken-image"}):e._e()])],1),i("div",{staticClass:"s-media-picker__filename"},[i("transition",{attrs:{mode:"out-in",name:"fade"}},[e.value?i("div",{key:"media-selected",staticClass:"s-media-picker__text"},[e._v(" "+e._s(e.media.fileName)+" ")]):e._e(),e.value?e._e():i("div",{key:"media-not-selected",staticClass:"s-media-picker__text-placeholder"},[e._v(" "+e._s(e.title||e.mediaInputPlaceholder)+" ")])]),i("div",{staticClass:"s-media-picker__controls s-media-picker__controls--small",on:{mouseenter:function(a){return e.handleControlVisibility(!0)},mouseleave:function(a){return e.handleControlVisibility(!1)}}},[e.mediaPickerSmall&&!e.mediaControlsVisible&&!e.controlsAlwaysVisible?i("i",{directives:[{name:"focus",rawName:"v-focus",value:e.focused===-1,expression:"focused === -1"}],staticClass:"icon-add",attrs:{tabindex:e.mediaPickerSmall&&!e.mediaControlsVisible?0:-1},on:{focus:function(a){e.focused=-1},keydown:[function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"space",32,a.key,[" ","Spacebar"])?null:(a.preventDefault(),e.showMediaControls.apply(null,arguments))},function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),e.showMediaControls.apply(null,arguments))}]}}):i("transition-group",{staticClass:"s-media-picker__controls-group",attrs:{tag:"div",mode:"out-in",name:"fade"}},e._l(e.mediaControls,function(a,o){return i("a",{directives:[{name:"focus",rawName:"v-focus",value:e.focused===o,expression:"focused === index"}],key:a.key,class:a.class,attrs:{title:a.title,tabindex:e.focused===o?0:-1},on:{focus:function(n){e.focused=o},click:function(n){return n.stopPropagation(),e.$emit(a.emit)},keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"tab",9,n.key,"Tab")?null:e.onTabOut.apply(null,arguments)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])?null:(n.preventDefault(),e.$emit(a.emit))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),e.$emit(a.emit))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&n.button!==0?null:(n.preventDefault(),e.moveLeft())},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&n.button!==2?null:(n.preventDefault(),e.moveRight())}]}},[i("i",{class:a.icon})])}),0)],1)],1)])])},D=[];const v={};var A=_(s,x,D,!1,I,null,null,null);function I(e){for(let t in v)this[t]=v[t]}const O=function(){return A.exports}(),T=`<template>
  <div>
    <div class="section">
      <h1>Media Pickers</h1>

      <pre><code>import { MediaPicker } from 'streamlabs-beaker';

components: {
  MediaPicker
}</code></pre>
    </div>

    <div class="section">
      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <FormGroup>
            <media-picker
              slot="input"
              variation="image"
              :media-link="true"
              :media-preview="false"
              @select-media="selectVideoMedia"
              @preview-media="previewVideoMedia"
              @remove-media="removeVideoMedia"
              title="Select Video Media"
              v-model="videoMedia"
            />

            <media-picker
              slot="input"
              variation="image"
              :media-link="true"
              :media-preview="false"
              @select-media="selectImageMedia"
              @preview-media="previewImageMedia"
              @remove-media="removeImageMedia"
              title="Select Image Media"
              v-model="imageMedia"
            />

            <media-picker
              slot="input"
              variation="audio"
              :media-link="true"
              @select-media="selectAudioMedia"
              @remove-media="removeAudioMedia"
              v-model="audioMedia"
            />

            <media-picker
              slot="input"
              variation="audio"
              title="My Sample Title"
              :media-link="true"
              :controls-always-visible="true"
              @select-media="selectAudioMedia"
              @remove-media="removeAudioMedia"
              v-model="audioMedia"
            />
          </FormGroup>
        </template>
      </DemoSection>
    </div>

    <div class="section">
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
            <td>variation</td>
            <td>string</td>
            <td>null</td>
            <td>
              Available variations include \`image\` and \`audio\`. Video is under
              the \`image\` variation.
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>null</td>
            <td>Customizable button text</td>
          </tr>
          <tr>
            <td>mediaLink</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Will display a clickable link icon that emits \`link-media\` event.
              Primarily used on SL core to add a link to a media href.
            </td>
          </tr>
          <tr>
            <td>value</td>
            <td>string</td>
            <td>null</td>
            <td>A URL string to the selected media.</td>
          </tr>
          <tr>
            <td>controlsAlwaysVisible</td>
            <td>boolean</td>
            <td>false</td>
            <td>Use if controls always need to be shown.</td>
          </tr>
          <tr>
            <td>link-media</td>
            <td>event</td>
            <td>null</td>
            <td>Event emitted when the link icon is clicked</td>
          </tr>
          <tr>
            <td>preview-media</td>
            <td>event</td>
            <td>null</td>
            <td>
              Event emitted when the magnifiy glass or play icons are clicked
            </td>
          </tr>
          <tr>
            <td>remove-media</td>
            <td>event</td>
            <td>null</td>
            <td>
              Event emitted when the close icon or 'Remove' button is clicked
            </td>
          </tr>
          <tr>
            <td>select-media</td>
            <td>event</td>
            <td>null</td>
            <td>
              Event emitted when the plus icon or 'Select Media' button is
              clicked
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import FormGroup from "./../components/FormGroup.vue";
import MediaPicker from "./../components/MediaPicker.vue";
import MediaPickersCode from "./MediaPickers.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    DemoSection,
    FormGroup,
    MediaPicker
  }
})
export default class ImagePickers extends Vue {
  demoCode = MediaPickersCode;
  msg = "Hi!";
  audioMedia = "";
  imageMedia = "";
  videoMedia = "";

  selectVideoMedia() {
    this.videoMedia =
      "https://cdn.streamlabs.com/static/imgs/intro-maker/highlight-key-info-before-your-stream.jpg.mp4";
  }
  selectImageMedia() {
    this.imageMedia =
      "https://uploads.twitchalerts.com/000/045/005/127/foolofsoul-design-1521842129-0.png";
  }

  selectAudioMedia() {
    this.audioMedia =
      "https://cdn1.twitchalerts.com/twitch-bits/sounds/bits.ogg";
  }

  removeImageMedia() {
    this.imageMedia = "";
  }
  removeVideoMedia() {
    this.videoMedia = "";
  }

  removeAudioMedia() {
    this.audioMedia = "";
  }

  previewVideoMedia() {
    console.log("Previewing Video");
    window.open(this.videoMedia);
  }
  previewImageMedia() {
    console.log("Previewing Media");
    window.open(this.imageMedia);
  }
}
<\/script>
`;var E=Object.defineProperty,L=Object.getOwnPropertyDescriptor,F=(e,t,i,a)=>{for(var o=a>1?void 0:a?L(t,i):t,n=e.length-1,l;n>=0;n--)(l=e[n])&&(o=(a?l(t,i,o):l(o))||o);return a&&o&&E(t,i,o),o};let c=class extends f{constructor(){super(...arguments);d(this,"demoCode",T);d(this,"msg","Hi!");d(this,"audioMedia","");d(this,"imageMedia","");d(this,"videoMedia","")}selectVideoMedia(){this.videoMedia="https://cdn.streamlabs.com/static/imgs/intro-maker/highlight-key-info-before-your-stream.jpg.mp4"}selectImageMedia(){this.imageMedia="https://uploads.twitchalerts.com/000/045/005/127/foolofsoul-design-1521842129-0.png"}selectAudioMedia(){this.audioMedia="https://cdn1.twitchalerts.com/twitch-bits/sounds/bits.ogg"}removeImageMedia(){this.imageMedia=""}removeVideoMedia(){this.videoMedia=""}removeAudioMedia(){this.audioMedia=""}previewVideoMedia(){console.log("Previewing Video"),window.open(this.videoMedia)}previewImageMedia(){console.log("Previewing Media"),window.open(this.imageMedia)}};c=F([h({components:{DemoSection:P,FormGroup:y,MediaPicker:O}})],c);var R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("div",{staticClass:"section"},[i("DemoSection",{attrs:{title:"Default",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[i("FormGroup",[i("media-picker",{attrs:{slot:"input",variation:"image","media-link":!0,"media-preview":!1,title:"Select Video Media"},on:{"select-media":e.selectVideoMedia,"preview-media":e.previewVideoMedia,"remove-media":e.removeVideoMedia},slot:"input",model:{value:e.videoMedia,callback:function(a){e.videoMedia=a},expression:"videoMedia"}}),i("media-picker",{attrs:{slot:"input",variation:"image","media-link":!0,"media-preview":!1,title:"Select Image Media"},on:{"select-media":e.selectImageMedia,"preview-media":e.previewImageMedia,"remove-media":e.removeImageMedia},slot:"input",model:{value:e.imageMedia,callback:function(a){e.imageMedia=a},expression:"imageMedia"}}),i("media-picker",{attrs:{slot:"input",variation:"audio","media-link":!0},on:{"select-media":e.selectAudioMedia,"remove-media":e.removeAudioMedia},slot:"input",model:{value:e.audioMedia,callback:function(a){e.audioMedia=a},expression:"audioMedia"}}),i("media-picker",{attrs:{slot:"input",variation:"audio",title:"My Sample Title","media-link":!0,"controls-always-visible":!0},on:{"select-media":e.selectAudioMedia,"remove-media":e.removeAudioMedia},slot:"input",model:{value:e.audioMedia,callback:function(a){e.audioMedia=a},expression:"audioMedia"}})],1)]},proxy:!0}])})],1),e._m(1)])},B=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"section"},[i("h1",[e._v("Media Pickers")]),i("pre",[i("code",[e._v(`import { MediaPicker } from 'streamlabs-beaker';

components: {
  MediaPicker
}`)])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"section"},[i("table",{staticClass:"docs-table"},[i("thead",[i("tr",[i("th",[e._v("Props")]),i("th",[e._v("Type")]),i("th",[e._v("Default")]),i("th",[e._v("Description")])])]),i("tbody",[i("tr",[i("td",[e._v("variation")]),i("td",[e._v("string")]),i("td",[e._v("null")]),i("td",[e._v(" Available variations include `image` and `audio`. Video is under the `image` variation. ")])]),i("tr",[i("td",[e._v("title")]),i("td",[e._v("string")]),i("td",[e._v("null")]),i("td",[e._v("Customizable button text")])]),i("tr",[i("td",[e._v("mediaLink")]),i("td",[e._v("boolean")]),i("td",[e._v("false")]),i("td",[e._v(" Will display a clickable link icon that emits `link-media` event. Primarily used on SL core to add a link to a media href. ")])]),i("tr",[i("td",[e._v("value")]),i("td",[e._v("string")]),i("td",[e._v("null")]),i("td",[e._v("A URL string to the selected media.")])]),i("tr",[i("td",[e._v("controlsAlwaysVisible")]),i("td",[e._v("boolean")]),i("td",[e._v("false")]),i("td",[e._v("Use if controls always need to be shown.")])]),i("tr",[i("td",[e._v("link-media")]),i("td",[e._v("event")]),i("td",[e._v("null")]),i("td",[e._v("Event emitted when the link icon is clicked")])]),i("tr",[i("td",[e._v("preview-media")]),i("td",[e._v("event")]),i("td",[e._v("null")]),i("td",[e._v(" Event emitted when the magnifiy glass or play icons are clicked ")])]),i("tr",[i("td",[e._v("remove-media")]),i("td",[e._v("event")]),i("td",[e._v("null")]),i("td",[e._v(" Event emitted when the close icon or 'Remove' button is clicked ")])]),i("tr",[i("td",[e._v("select-media")]),i("td",[e._v("event")]),i("td",[e._v("null")]),i("td",[e._v(" Event emitted when the plus icon or 'Select Media' button is clicked ")])])])])])}];const p={};var j=_(c,R,B,!1,G,null,null,null);function G(e){for(let t in p)this[t]=p[t]}const Q=function(){return j.exports}();export{Q as default};
//# sourceMappingURL=MediaPickers.c0cb624c.js.map

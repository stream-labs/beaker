var _=Object.defineProperty;var k=(i,e,t)=>e in i?_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var d=(i,e,t)=>(k(i,typeof e!="symbol"?e+"":e,t),t);import{W as u,C as v,P as m,V as p,n as f}from"./index.4fb8a6cb.js";import{F as M}from"./FormGroup.79b6121d.js";import{m as g}from"./vue-focus.common.2dfcc992.js";import{i as y}from"./ResizeObserver.es.bd9ff68d.js";import{B as b}from"./Button.b26dacc2.js";import{D as w}from"./DemoSection.79ee11c0.js";import"./Accordion.09c82396.js";var C=Object.defineProperty,P=Object.getOwnPropertyDescriptor,r=(i,e,t,a)=>{for(var o=a>1?void 0:a?P(e,t):e,n=i.length-1,l;n>=0;n--)(l=i[n])&&(o=(a?l(e,t,o):l(o))||o);return a&&o&&C(e,t,o),o};let s=class extends p{constructor(){super(...arguments);d(this,"$refs");d(this,"variation");d(this,"mediaLink");d(this,"mediaPreview");d(this,"title");d(this,"value");d(this,"controlsAlwaysVisible");d(this,"canDelete");d(this,"mediaPickerSmall",!1);d(this,"mediaBroken",!1);d(this,"mediaControlsVisible",!1);d(this,"focused",0)}get mediaControls(){return[{key:"media-link",available:!!this.mediaLink,class:"s-media-picker__link-icon",emit:"link-media",title:`Link ${this.variationTitle}`,icon:"icon-link"},{key:"media-selected-zoom",available:this.mediaPreview&&this.variation==="image"&&this.media.selected&&!this.mediaBroken,class:"s-media-picker__zoom-icon",emit:"preview-media",title:`Preview ${this.variationTitle}`,icon:"icon-zoom"},{key:"media-selected-play",available:this.mediaPreview&&!this.mediaBroken&&this.variation==="audio"&&this.media.selected,class:"s-media-picker__play-icon",emit:"preview-media",title:`preview ${this.variationTitle}`,icon:"icon-media-share-2"},{key:"media-remove",available:this.media.selected,class:"s-media-picker__small-remove",emit:"remove-media",title:`Remove ${this.variationTitle}`,icon:"icon-close"},{key:"media-select",available:!0,class:"s-media-picker__small-remove",emit:"select-media",title:`Select ${this.variationTitle}`,icon:"icon-upload-image"}].filter(t=>!(!t.available||!this.canDelete&&t.key==="media-remove"))}get mediaInputPlaceholder(){return this.variation==="audio"?"Select Audio File":"Select Image/Video File"}get buttonTitle(){return this.variation?`Select ${this.variation}`:"Select Media"}get variationTitle(){return this.variation==="image"?"Image":"Audio"}get media(){return{selected:!!this.value,fileName:this.value?this.value.split("/").pop():"",url:this.value}}get noMediaIcon(){return this.variation==="image"?"icon-image":"icon-music"}get valueIsVideo(){const e=this.value;if(!e)return!1;const t=[".mov",".wmv",".flv",".avi",".webm",".mkv",".mp4"],a=e.split("?")[0];return t.some(o=>a.endsWith(o))}watchValue(){this.setBrokenMedia(null)}watchMediaControlsVisible(){this.mediaPickerSmall&&!this.mediaControlsVisible&&(this.focused=-1)}watchMediaControls(e){this.focused=e.length-1}mounted(){new y((t,a)=>{for(const o of t){const{left:n,top:l,width:h,height:B}=o.contentRect;this.mediaPickerSmall=h<500}}).observe(this.$refs.mediaPicker),this.focused=this.mediaControls.length-1}setBrokenMedia(e){this.mediaBroken=!!e}onTabOut(){this.mediaPickerSmall&&(this.mediaControlsVisible=!1)}moveRight(){this.focused=Math.min(this.focused+1,this.mediaControls.length-1)}moveLeft(){this.focused=Math.max(this.focused-1,0)}showMediaControls(){this.mediaControlsVisible=!0,this.focused=this.mediaControls.length-1}handleControlVisibility(e){this.controlsAlwaysVisible||(this.mediaControlsVisible=e)}};r([m()],s.prototype,"variation",2);r([m({default:!1})],s.prototype,"mediaLink",2);r([m({default:!0})],s.prototype,"mediaPreview",2);r([m()],s.prototype,"title",2);r([m()],s.prototype,"value",2);r([m({default:!1})],s.prototype,"controlsAlwaysVisible",2);r([m({default:!0})],s.prototype,"canDelete",2);r([u("value")],s.prototype,"watchValue",1);r([u("mediaControlsVisible")],s.prototype,"watchMediaControlsVisible",1);r([u("mediaControls")],s.prototype,"watchMediaControls",1);s=r([v({components:{Button:b},mixins:[g]})],s);var V=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{ref:"mediaPicker",staticClass:"s-media-picker"},[t("div",{staticClass:"s-media-picker__input-wrapper"},[t("div",{staticClass:"s-media-picker__thumb"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[e.media.selected?e._e():t("i",{key:"thumb-upload",staticClass:"s-media-picker__no-media",class:e.noMediaIcon}),e.media.selected&&e.variation==="audio"?t("i",{key:"thumb-audio",staticClass:"icon-music"},[t("audio",{key:"thumb-audio",attrs:{src:e.media.url},on:{error:e.setBrokenMedia}})]):e._e(),e.media.selected&&e.variation==="image"&&!e.valueIsVideo?t("img",{key:"thumb-image",attrs:{src:e.media.url},on:{error:e.setBrokenMedia}}):e._e(),e.media.selected&&e.variation==="image"&&e.valueIsVideo?t("i",{key:"thumb-video",staticClass:"icon-studio"}):e._e()]),t("transition",{attrs:{name:"custom-classes-transition","leave-active-class":"fade-slow-leave-active",mode:"out-in"}},[e.media.selected&&e.mediaBroken?t("div",{staticClass:"s-media-picker__broken-image"}):e._e()])],1),t("div",{staticClass:"s-media-picker__filename"},[t("transition",{attrs:{mode:"out-in",name:"fade"}},[e.value?t("div",{key:"media-selected",staticClass:"s-media-picker__text"},[e._v(" "+e._s(e.media.fileName)+" ")]):e._e(),e.value?e._e():t("div",{key:"media-not-selected",staticClass:"s-media-picker__text-placeholder"},[e._v(" "+e._s(e.title||e.mediaInputPlaceholder)+" ")])]),t("div",{staticClass:"s-media-picker__controls s-media-picker__controls--small",on:{mouseenter:function(a){return e.handleControlVisibility(!0)},mouseleave:function(a){return e.handleControlVisibility(!1)}}},[e.mediaPickerSmall&&!e.mediaControlsVisible&&!e.controlsAlwaysVisible?t("i",{directives:[{name:"focus",rawName:"v-focus",value:e.focused===-1,expression:"focused === -1"}],staticClass:"icon-add",attrs:{tabindex:e.mediaPickerSmall&&!e.mediaControlsVisible?0:-1},on:{focus:function(a){e.focused=-1},keydown:[function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"space",32,a.key,[" ","Spacebar"])?null:(a.preventDefault(),e.showMediaControls.apply(null,arguments))},function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),e.showMediaControls.apply(null,arguments))}]}}):t("transition-group",{staticClass:"s-media-picker__controls-group",attrs:{tag:"div",mode:"out-in",name:"fade"}},e._l(e.mediaControls,function(a,o){return t("a",{directives:[{name:"focus",rawName:"v-focus",value:e.focused===o,expression:"focused === index"}],key:a.key,class:a.class,attrs:{title:a.title,tabindex:e.focused===o?0:-1},on:{focus:function(n){e.focused=o},click:function(n){return n.stopPropagation(),e.$emit(a.emit)},keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"tab",9,n.key,"Tab")?null:e.onTabOut.apply(null,arguments)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])?null:(n.preventDefault(),e.$emit(a.emit))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),e.$emit(a.emit))},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"left",37,n.key,["Left","ArrowLeft"])||"button"in n&&n.button!==0?null:(n.preventDefault(),e.moveLeft())},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"right",39,n.key,["Right","ArrowRight"])||"button"in n&&n.button!==2?null:(n.preventDefault(),e.moveRight())}]}},[t("i",{class:a.icon})])}),0)],1)],1)])])},x=[],S=f(s,V,x,!1,null,null,null,null);const D=S.exports,A=`<template>
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
`;var I=Object.defineProperty,O=Object.getOwnPropertyDescriptor,T=(i,e,t,a)=>{for(var o=a>1?void 0:a?O(e,t):e,n=i.length-1,l;n>=0;n--)(l=i[n])&&(o=(a?l(e,t,o):l(o))||o);return a&&o&&I(e,t,o),o};let c=class extends p{constructor(){super(...arguments);d(this,"demoCode",A);d(this,"msg","Hi!");d(this,"audioMedia","");d(this,"imageMedia","");d(this,"videoMedia","")}selectVideoMedia(){this.videoMedia="https://cdn.streamlabs.com/static/imgs/intro-maker/highlight-key-info-before-your-stream.jpg.mp4"}selectImageMedia(){this.imageMedia="https://uploads.twitchalerts.com/000/045/005/127/foolofsoul-design-1521842129-0.png"}selectAudioMedia(){this.audioMedia="https://cdn1.twitchalerts.com/twitch-bits/sounds/bits.ogg"}removeImageMedia(){this.imageMedia=""}removeVideoMedia(){this.videoMedia=""}removeAudioMedia(){this.audioMedia=""}previewVideoMedia(){console.log("Previewing Video"),window.open(this.videoMedia)}previewImageMedia(){console.log("Previewing Media"),window.open(this.imageMedia)}};c=T([v({components:{DemoSection:w,FormGroup:M,MediaPicker:D}})],c);var L=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[e._m(0),t("div",{staticClass:"section"},[t("DemoSection",{attrs:{title:"Default",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("FormGroup",[t("media-picker",{attrs:{slot:"input",variation:"image","media-link":!0,"media-preview":!1,title:"Select Video Media"},on:{"select-media":e.selectVideoMedia,"preview-media":e.previewVideoMedia,"remove-media":e.removeVideoMedia},slot:"input",model:{value:e.videoMedia,callback:function(a){e.videoMedia=a},expression:"videoMedia"}}),t("media-picker",{attrs:{slot:"input",variation:"image","media-link":!0,"media-preview":!1,title:"Select Image Media"},on:{"select-media":e.selectImageMedia,"preview-media":e.previewImageMedia,"remove-media":e.removeImageMedia},slot:"input",model:{value:e.imageMedia,callback:function(a){e.imageMedia=a},expression:"imageMedia"}}),t("media-picker",{attrs:{slot:"input",variation:"audio","media-link":!0},on:{"select-media":e.selectAudioMedia,"remove-media":e.removeAudioMedia},slot:"input",model:{value:e.audioMedia,callback:function(a){e.audioMedia=a},expression:"audioMedia"}}),t("media-picker",{attrs:{slot:"input",variation:"audio",title:"My Sample Title","media-link":!0,"controls-always-visible":!0},on:{"select-media":e.selectAudioMedia,"remove-media":e.removeAudioMedia},slot:"input",model:{value:e.audioMedia,callback:function(a){e.audioMedia=a},expression:"audioMedia"}})],1)]},proxy:!0}])})],1),e._m(1)])},F=[function(){var i=this,e=i._self._c;return i._self._setupProxy,e("div",{staticClass:"section"},[e("h1",[i._v("Media Pickers")]),e("pre",[e("code",[i._v(`import { MediaPicker } from 'streamlabs-beaker';

components: {
  MediaPicker
}`)])])])},function(){var i=this,e=i._self._c;return i._self._setupProxy,e("div",{staticClass:"section"},[e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[i._v("Props")]),e("th",[i._v("Type")]),e("th",[i._v("Default")]),e("th",[i._v("Description")])])]),e("tbody",[e("tr",[e("td",[i._v("variation")]),e("td",[i._v("string")]),e("td",[i._v("null")]),e("td",[i._v(" Available variations include `image` and `audio`. Video is under the `image` variation. ")])]),e("tr",[e("td",[i._v("title")]),e("td",[i._v("string")]),e("td",[i._v("null")]),e("td",[i._v("Customizable button text")])]),e("tr",[e("td",[i._v("mediaLink")]),e("td",[i._v("boolean")]),e("td",[i._v("false")]),e("td",[i._v(" Will display a clickable link icon that emits `link-media` event. Primarily used on SL core to add a link to a media href. ")])]),e("tr",[e("td",[i._v("value")]),e("td",[i._v("string")]),e("td",[i._v("null")]),e("td",[i._v("A URL string to the selected media.")])]),e("tr",[e("td",[i._v("controlsAlwaysVisible")]),e("td",[i._v("boolean")]),e("td",[i._v("false")]),e("td",[i._v("Use if controls always need to be shown.")])]),e("tr",[e("td",[i._v("link-media")]),e("td",[i._v("event")]),e("td",[i._v("null")]),e("td",[i._v("Event emitted when the link icon is clicked")])]),e("tr",[e("td",[i._v("preview-media")]),e("td",[i._v("event")]),e("td",[i._v("null")]),e("td",[i._v(" Event emitted when the magnifiy glass or play icons are clicked ")])]),e("tr",[e("td",[i._v("remove-media")]),e("td",[i._v("event")]),e("td",[i._v("null")]),e("td",[i._v(" Event emitted when the close icon or 'Remove' button is clicked ")])]),e("tr",[e("td",[i._v("select-media")]),e("td",[i._v("event")]),e("td",[i._v("null")]),e("td",[i._v(" Event emitted when the plus icon or 'Select Media' button is clicked ")])])])])])}],R=f(c,L,F,!1,null,null,null,null);const q=R.exports;export{q as default};
//# sourceMappingURL=MediaPickers.d712f815.js.map

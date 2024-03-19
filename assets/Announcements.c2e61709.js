var h=Object.defineProperty;var f=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var o=(e,t,n)=>(f(e,typeof t!="symbol"?t+"":t,n),n);import{V as u,C as _,P as i,n as p}from"./index.4fb8a6cb.js";import{B as m}from"./Button.b26dacc2.js";import{D as y}from"./DemoSection.79ee11c0.js";import{i as g}from"./vue-mq.es.e994b893.js";import{V as b}from"./index.3042f557.js";import"./Accordion.09c82396.js";const w=`<template>
  <div>
    <div class="section">
      <h1>New Feature Overlay</h1>
      <p>
        You can trigger this with a button like
        <code>@click="$modal.show('new-feature')"</code> or call
        <code>this.$modal.show('new-feature')"</code> on mounted. You may need
        to set a few second delay on the trigger to prevent the modal closing
        when the page refreshes.
      </p>
      <pre><code>import { NewFeatureOverlay } from 'streamlabs-beaker';

components: {
  NewFeatureOverlay
}</code></pre>
    </div>

    <div class="section">
      <h2>New Feature Overlay</h2>
      <p>Used for new feature overlay.</p>
      <DemoSection title="New Feature Overlay" :code="demoCode">
        <template #components>
          <NewFeatureOverlay
            label="Introducing Merch Stores"
            title="Increase Your Revenue"
            media="
              https://cdn.streamlabs.com/cloudbot/prototype_cloudbot_800x300.webm
            "
            buttonTitle="Go To Store"
            :onOpen="trackingCodeComponent"
            :onAction="trackingCodeButton"
            buttonTag="a"
            buttonHref="
              https://www.twitch.tv/ext/xab8h6nj36fc2wtn71yikw9hqjd6v4-0.0.1
            "
            buttonTarget="_blank"
          >
            <p>
              We\u2019ve worked with some of the best developers in the industry to
              bring you the tools to take your stream to the next level.
            </p>
            <p>
              We\u2019ve automatically credited $15.00 to your account so you can
              start trying them out today.
            </p>
          </NewFeatureOverlay>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <div class="s-button-container s-button-container--left">
        <Button
          :variation="'default'"
          :title="'New Feature Overlay'"
          @click="$modal.show('new-feature')"
        ></Button>
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
          <td>label</td>
          <td>string</td>
          <td>null</td>
          <td>label to display</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>null</td>
          <td>title to display</td>
        </tr>
        <tr>
          <td>media</td>
          <td>string</td>
          <td>null</td>
          <td>display image or video (you can select either of them)</td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>null</td>
          <td>
            What type of element the button is,
            <code>button</code>, <code>a</code>,
            <code>router-link</code>
          </td>
        </tr>
        <tr>
          <td>buttonTag</td>
          <td>string</td>
          <td>null</td>
          <td>Text displayed in the action button</td>
        </tr>
        <tr>
          <td>buttonRoute</td>
          <td>string</td>
          <td>/</td>
          <td>
            Router link path for the action button if tag is
            <code>router-link</code>
          </td>
        </tr>
        <tr>
          <td>buttonHref</td>
          <td>string</td>
          <td>null</td>
          <td>
            href for the action button if tag is set to
            <code>a</code>
          </td>
        </tr>
        <tr>
          <td>buttonTarget</td>
          <td>string</td>
          <td>null</td>
          <td>
            Use to set different targets for button if set to
            <code>a</code>
            Options are:
            <code>_self</code>, <code>_blank</code>, <code>_parent</code>,
            <code>_top</code>
          </td>
        </tr>
        <tr>
          <td>dismissTitle</td>
          <td>string</td>
          <td>Go to Dashboard</td>
          <td>
            Text displayed in the link next to the action button to dismiss the
            announcement.
          </td>
        </tr>
        <tr>
          <td>dismissRoute</td>
          <td>string</td>
          <td>/</td>
          <td>Router link path to dismiss the annoucement.</td>
        </tr>
        <tr>
          <td>onOpen</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out the tracking code of modal component.</td>
        </tr>
        <tr>
          <td>onAction</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out the tracking code of modal button.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnnouncementsCode from "./Announcements.vue?raw";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import NewFeatureOverlay from "./../components/NewFeatureOverlay.vue";

@Component({
  components: {
    Button,
    DemoSection,
    NewFeatureOverlay
  }
})
export default class AnnoucementsDemo extends Vue {
  demoCode = AnnouncementsCode;
  trackingCodeComponent() {
    console.log("componentEventTracking");
    // ga('send','event', 'newfeatureoverlay', 'modal_shown', 'component');
  }

  trackingCodeButton() {
    console.log("buttonEventTracking");
    // ga('send','event', 'newfeatureoverlay', 'modal_click', 'button');
  }
}
<\/script>
`;var k=Object.defineProperty,C=Object.getOwnPropertyDescriptor,a=(e,t,n,d)=>{for(var s=d>1?void 0:d?C(t,n):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(s=(d?c(t,n,s):c(s))||s);return d&&s&&k(t,n,s),s};u.use(b);u.use(g,{breakpoints:{sm:900,md:1250,lg:1/0},defaultBreakpoint:"sm"});let r=class extends u{constructor(){super(...arguments);o(this,"width");o(this,"height");o(this,"label");o(this,"title");o(this,"media");o(this,"buttonTitle");o(this,"buttonRoute");o(this,"buttonTag");o(this,"buttonHref");o(this,"buttonTarget");o(this,"dismissRoute");o(this,"dismissText");o(this,"onOpen");o(this,"onAction");o(this,"videoControls");o(this,"isImage",!0);o(this,"$mq")}get overlayImage(){return this.media}get containerMq(){return this.$mq==="sm"?"s-overlay__container--mq":""}get overlay__imageBlockMq(){return this.$mq==="sm"?"s-overlay__image-block--mq":""}mounted(){this.media.includes("mp4")||this.media.includes("webm")?this.isImage=!1:this.isImage=!0}opened(t){typeof this.onOpen=="function"&&this.onOpen()}onPrimaryAction(){typeof this.onAction=="function"&&this.onAction(),this.onDismiss()}onDismiss(){this.$modal.hide("new-feature")}};a([i({default:"100%"})],r.prototype,"width",2);a([i({default:"auto"})],r.prototype,"height",2);a([i()],r.prototype,"label",2);a([i()],r.prototype,"title",2);a([i()],r.prototype,"media",2);a([i()],r.prototype,"buttonTitle",2);a([i({default:"/"})],r.prototype,"buttonRoute",2);a([i({default:"router-link"})],r.prototype,"buttonTag",2);a([i()],r.prototype,"buttonHref",2);a([i()],r.prototype,"buttonTarget",2);a([i({default:"/"})],r.prototype,"dismissRoute",2);a([i({default:"Go to Dashboard"})],r.prototype,"dismissText",2);a([i()],r.prototype,"onOpen",2);a([i()],r.prototype,"onAction",2);a([i({default:!1})],r.prototype,"videoControls",2);r=a([_({components:{Button:m}})],r);var O=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("modal",{attrs:{name:"new-feature",adaptive:!0,width:t.width,height:t.height,classes:"s-overlay__wrapper",clickToClose:!0},on:{opened:t.opened}},[n("div",{staticClass:"s-overlay__icon",attrs:{slot:"top-right"},slot:"top-right"},[n("span",{staticClass:"s-icon icon-close",on:{click:t.onDismiss}})]),n("div",{staticClass:"s-overlay__container",class:t.containerMq},[n("div",{staticClass:"s-overlay__body"},[n("p",{staticClass:"s-overlay__label"},[t._v(t._s(t.label))]),n("h1",{staticClass:"s-overlay__title"},[t._v(t._s(t.title))]),n("p",{staticClass:"s-overlay__text"},[t._t("default")],2),n("div",{staticClass:"s-overlay-links"},[n("Button",{attrs:{size:"large",variation:"action",tag:t.buttonTag,to:t.buttonRoute,href:t.buttonHref,target:t.buttonTarget,title:t.buttonTitle},nativeOn:{click:function(d){return t.onPrimaryAction.apply(null,arguments)}}}),n("router-link",{staticClass:"s-overlay__link",attrs:{to:t.dismissRoute},nativeOn:{click:function(d){return t.onDismiss.apply(null,arguments)}}},[t._v(t._s(t.dismissText))])],1)]),n("div",{staticClass:"s-overlay__image-block",class:t.overlay__imageBlockMq},[t.isImage?n("img",{staticClass:"s-overlay__image",attrs:{src:t.overlayImage}}):t._e(),t.isImage?t._e():n("video",{staticClass:"s-overlay__image",attrs:{controls:t.videoControls,autoplay:"",loop:""}},[n("source",{attrs:{src:t.overlayImage}}),t._v(" Environment does not support video playback ")])])])])},T=[],x=p(r,O,T,!1,null,"f43a6969",null,null);const F=x.exports;var D=Object.defineProperty,N=Object.getOwnPropertyDescriptor,$=(e,t,n,d)=>{for(var s=d>1?void 0:d?N(t,n):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(s=(d?c(t,n,s):c(s))||s);return d&&s&&D(t,n,s),s};let v=class extends u{constructor(){super(...arguments);o(this,"demoCode",w)}trackingCodeComponent(){console.log("componentEventTracking")}trackingCodeButton(){console.log("buttonEventTracking")}};v=$([_({components:{Button:m,DemoSection:y,NewFeatureOverlay:F}})],v);var P=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",[t._m(0),n("div",{staticClass:"section"},[n("h2",[t._v("New Feature Overlay")]),n("p",[t._v("Used for new feature overlay.")]),n("DemoSection",{attrs:{title:"New Feature Overlay",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("NewFeatureOverlay",{attrs:{label:"Introducing Merch Stores",title:"Increase Your Revenue",media:`
              https://cdn.streamlabs.com/cloudbot/prototype_cloudbot_800x300.webm
            `,buttonTitle:"Go To Store",onOpen:t.trackingCodeComponent,onAction:t.trackingCodeButton,buttonTag:"a",buttonHref:`
              https://www.twitch.tv/ext/xab8h6nj36fc2wtn71yikw9hqjd6v4-0.0.1
            `,buttonTarget:"_blank"}},[n("p",[t._v(" We\u2019ve worked with some of the best developers in the industry to bring you the tools to take your stream to the next level. ")]),n("p",[t._v(" We\u2019ve automatically credited $15.00 to your account so you can start trying them out today. ")])])]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("div",{staticClass:"s-button-container s-button-container--left"},[n("Button",{attrs:{variation:"default",title:"New Feature Overlay"},on:{click:function(d){return t.$modal.show("new-feature")}}})],1)]),t._m(1)])},R=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[e._v("New Feature Overlay")]),t("p",[e._v(" You can trigger this with a button like "),t("code",[e._v(`@click="$modal.show('new-feature')"`)]),e._v(" or call "),t("code",[e._v(`this.$modal.show('new-feature')"`)]),e._v(" on mounted. You may need to set a few second delay on the trigger to prevent the modal closing when the page refreshes. ")]),t("pre",[t("code",[e._v(`import { NewFeatureOverlay } from 'streamlabs-beaker';

components: {
  NewFeatureOverlay
}`)])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Props")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("label")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("label to display")])]),t("tr",[t("td",[e._v("title")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("title to display")])]),t("tr",[t("td",[e._v("media")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("display image or video (you can select either of them)")])]),t("tr",[t("td",[e._v("buttonTitle")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" What type of element the button is, "),t("code",[e._v("button")]),e._v(", "),t("code",[e._v("a")]),e._v(", "),t("code",[e._v("router-link")])])]),t("tr",[t("td",[e._v("buttonTag")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Text displayed in the action button")])]),t("tr",[t("td",[e._v("buttonRoute")]),t("td",[e._v("string")]),t("td",[e._v("/")]),t("td",[e._v(" Router link path for the action button if tag is "),t("code",[e._v("router-link")])])]),t("tr",[t("td",[e._v("buttonHref")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" href for the action button if tag is set to "),t("code",[e._v("a")])])]),t("tr",[t("td",[e._v("buttonTarget")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" Use to set different targets for button if set to "),t("code",[e._v("a")]),e._v(" Options are: "),t("code",[e._v("_self")]),e._v(", "),t("code",[e._v("_blank")]),e._v(", "),t("code",[e._v("_parent")]),e._v(", "),t("code",[e._v("_top")])])]),t("tr",[t("td",[e._v("dismissTitle")]),t("td",[e._v("string")]),t("td",[e._v("Go to Dashboard")]),t("td",[e._v(" Text displayed in the link next to the action button to dismiss the announcement. ")])]),t("tr",[t("td",[e._v("dismissRoute")]),t("td",[e._v("string")]),t("td",[e._v("/")]),t("td",[e._v("Router link path to dismiss the annoucement.")])]),t("tr",[t("td",[e._v("onOpen")]),t("td",[e._v("function")]),t("td",[e._v("null")]),t("td",[e._v("Function to call out the tracking code of modal component.")])]),t("tr",[t("td",[e._v("onAction")]),t("td",[e._v("function")]),t("td",[e._v("null")]),t("td",[e._v("Function to call out the tracking code of modal button.")])])])])}],A=p(v,P,R,!1,null,null,null,null);const V=A.exports;export{V as default};
//# sourceMappingURL=Announcements.c2e61709.js.map

var _=Object.defineProperty;var g=(t,o,n)=>o in t?_(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;var e=(t,o,n)=>(g(t,typeof o!="symbol"?o+"":o,n),n);import{V as b,C as p,P as r,n as v}from"./index-e8bb31bb.js";import{B as h}from"./Button-3cf72d47.js";import{i as C}from"./vue-mq.es-d0087f44.js";import{D as T}from"./DemoSection-b2dfe451.js";import{l as A}from"./logo-9d87bae5.js";import"./Accordion-79d22a9d.js";var S=Object.defineProperty,y=Object.getOwnPropertyDescriptor,l=(t,o,n,d)=>{for(var a=d>1?void 0:d?y(o,n):o,s=t.length-1,c;s>=0;s--)(c=t[s])&&(a=(d?c(o,n,a):c(a))||a);return d&&a&&S(o,n,a),a};b.use(C,{breakpoints:{sm:900,md:1250,lg:1/0},defaultBreakpoint:"sm"});let i=class extends b{constructor(){super(...arguments);e(this,"bgColor");e(this,"titleColor");e(this,"subTitleColor");e(this,"thumbnail");e(this,"hasThumbnail");e(this,"thumbnailWidth");e(this,"thumbnailHeight");e(this,"thumbnailBg");e(this,"thumbnailAlt");e(this,"title");e(this,"description");e(this,"buttonVariation");e(this,"buttonTitle");e(this,"buttonDescription");e(this,"buttonHref");e(this,"buttonTo");e(this,"buttonTag");e(this,"buttonClick");e(this,"buttonBg");e(this,"buttonTextColor");e(this,"customButtonSlot");e(this,"bgPrime");e(this,"buttonIcon");e(this,"$mq");e(this,"callToActiontitleColor",{color:this.titleColor});e(this,"callToActionSubTitleColor",{color:this.subTitleColor});e(this,"callToActionBg",{backgroundColor:this.bgColor});e(this,"callToActionThumb",{width:`${this.thumbnailWidth}px`,height:`${this.thumbnailHeight}px`,backgroundColor:this.thumbnailBg})}get callToActionMq(){return this.$mq==="sm"?"s-call-to-action-mq":""}get callToActionThumbMq(){return this.$mq==="sm"?"s-call-to-action__thumb-mq":""}get callToActionDescMq(){return this.$mq==="sm"?"s-call-to-action__description-mq":""}get titleMq(){return this.$mq==="sm"?"s-title-mq":""}};l([r()],i.prototype,"bgColor",2);l([r()],i.prototype,"titleColor",2);l([r()],i.prototype,"subTitleColor",2);l([r({default:"https://cdn.streamlabs.com/static/kevin-standard.svg"})],i.prototype,"thumbnail",2);l([r({default:!0})],i.prototype,"hasThumbnail",2);l([r({default:80})],i.prototype,"thumbnailWidth",2);l([r({default:80})],i.prototype,"thumbnailHeight",2);l([r()],i.prototype,"thumbnailBg",2);l([r({default:"Get started by downloading Streamlabs OBS"})],i.prototype,"thumbnailAlt",2);l([r({default:"Get started by downloading Streamlabs OBS"})],i.prototype,"title",2);l([r({default:"Over 800k creators use Streamlabs OBS daily, delivering entertainment."})],i.prototype,"description",2);l([r({default:"slobs-download"})],i.prototype,"buttonVariation",2);l([r({default:"Download Streamlabs OBS"})],i.prototype,"buttonTitle",2);l([r()],i.prototype,"buttonDescription",2);l([r()],i.prototype,"buttonHref",2);l([r()],i.prototype,"buttonTo",2);l([r()],i.prototype,"buttonTag",2);l([r()],i.prototype,"buttonClick",2);l([r()],i.prototype,"buttonBg",2);l([r()],i.prototype,"buttonTextColor",2);l([r({default:!1})],i.prototype,"customButtonSlot",2);l([r({default:!1})],i.prototype,"bgPrime",2);l([r()],i.prototype,"buttonIcon",2);i=l([p({components:{Button:h}})],i);var B=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"s-call-to-action",class:t.callToActionMq,style:t.callToActionBg},[t.buttonVariation==="prime"|t.buttonVariation==="prime-white"?n("i",{staticClass:"icon-prime prime-bg"}):t._e(),t.hasThumbnail?n("div",{staticClass:"s-call-to-action__thumb",class:t.callToActionThumbMq,style:t.callToActionThumb},[n("img",{attrs:{src:t.thumbnail,alt:t.thumbnailAlt}})]):t._e(),n("div",{staticClass:"s-call-to-action__description",class:t.callToActionDescMq},[n("div",{staticClass:"s-title",class:t.titleMq,style:t.callToActiontitleColor},[t._v(" "+t._s(t.title)+" ")]),n("div",{staticClass:"s-subtitle",style:t.callToActionSubTitleColor},[t._v(" "+t._s(t.description)+" ")])]),t.customButtonSlot?t._t("default"):n("div",{staticClass:"s-button-container s-button-container--right"},[t.buttonClick?n("Button",{attrs:{variation:t.buttonVariation,size:"large",title:t.buttonTitle,description:t.buttonDescription,href:t.buttonHref,to:t.buttonTo,tag:t.buttonTag,bgColor:t.buttonBg,icon:t.buttonIcon,textColor:t.buttonTextColor},on:{click:t.buttonClick}}):n("Button",{attrs:{variation:t.buttonVariation,size:"large",title:t.buttonTitle,description:t.buttonDescription,href:t.buttonHref,to:t.buttonTo,tag:t.buttonTag,icon:t.buttonIcon,bgColor:t.buttonBg,textColor:t.buttonTextColor}})],1)],2)},D=[];const m={};var k=v(i,B,D,!1,w,null,null,null);function w(t){for(let o in m)this[o]=m[o]}const x=function(){return k.exports}(),O=`<template>
  <div>
    <div class="section">
      <h1>Call To Action</h1>
      <p>
        You can use our callout component if you need to display an important
        message.
      </p>

      <pre><code>import { CallToAction } from 'streamlabs-beaker';

components: {
  CallToAction
}</code></pre>
    </div>
    <div class="section">
      <h2>Default Call to Action</h2>
      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <CallToAction :buttonClick="test" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Custom Call to Action</h2>

      <div class="section">
        <DemoSection title="Custom" :code="demoCode">
          <template #components>
            <CallToAction
              bgColor="#31c3a2"
              titleColor="#ffffff"
              subTitleColor="#ffffff"
              :thumbnail="logo"
              :thumbnailWidth="120"
              :thumbnailHeight="80"
              thumbnailBg="#ffffff"
              title="This is a Custom Call To Action"
              description="A Custom Description"
              buttonVariation="default"
              buttonTitle="Click Me"
              buttonDescription
              buttonTag="a"
              buttonHref="https://google.com"
              buttonBg="#ffffff"
              buttonTextColor="#000000"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <CallToAction
          :bgColor="'#31c3a2'"
          :titleColor="'#fff'"
          :subTitleColor="'#fff'"
          :title="'This is a Custom Call To Action'"
          :description="'A Custom Description'"
          :hasThumbnail="false"
          :customButtonSlot="true"
        >
          <div class="s-button-container">
            <Button :title="'Using slot'"></Button>
            <Button :title="'Using slot'"></Button>
          </div>
        </CallToAction>
      </div>

      <div class="section">
        <CallToAction
          :bgColor="'#CAA368'"
          :titleColor="'#fff'"
          :subTitleColor="'#fff'"
          :hasThumbnail="false"
          :title="'Join Prime today!'"
          :description="
            'Our premium tool-set for professional content creators.'
          "
          :buttonVariation="'prime-white'"
          :buttonTitle="'Sign Up'"
          :buttonDescription="''"
          :buttonIcon="'prime'"
          :bgPrime="true"
        />
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
            <td>bgColor</td>
            <td>String</td>
            <td>#f5f8fa</td>
            <td>Background color, default color is @day-section (#f5f8fa)</td>
          </tr>

          <tr>
            <td>titleColor</td>
            <td>String</td>
            <td>#09161d</td>
            <td>Title color, default color is @day-title (#09161d)</td>
          </tr>

          <tr>
            <td>subTitleColor</td>
            <td>String</td>
            <td>#4f5e65</td>
            <td>Sub title color, default color is @day-paragraph (#4f5e65)</td>
          </tr>

          <tr>
            <td>thumbnail</td>
            <td>String</td>
            <td>'https://cdn.streamlabs.com/static/kevin-standard.svg'</td>
            <td>A Thumbnail image</td>
          </tr>
          <tr>
            <td>thumbnailBg</td>
            <td>String</td>
            <td>#31C3A2</td>
            <td>
              A Thumbnail background color, default color is @teal (#31C3A2)
            </td>
          </tr>

          <tr>
            <td>thumbnailWidth</td>
            <td>Number</td>
            <td>80</td>
            <td>A Thumbnail width</td>
          </tr>

          <tr>
            <td>thumbnailHeight</td>
            <td>Number</td>
            <td>80</td>
            <td>A Thumbnail height</td>
          </tr>

          <tr>
            <td>thumbnailAlt</td>
            <td>String</td>
            <td>Get started by downloading Streamlabs OBS</td>
            <td>A Thumbnail alt</td>
          </tr>

          <tr>
            <td>title</td>
            <td>String</td>
            <td>Get started by downloading Streamlabs OBS</td>
            <td>Title for the call to action component</td>
          </tr>
          <tr>
            <td>description</td>
            <td>String</td>
            <td>
              Over 800k creators use Streamlabs OBS daily, delivering
              entertainment.
            </td>
            <td>A short description for the call the action component</td>
          </tr>
          <tr>
            <td>buttonVariation</td>
            <td>String</td>
            <td>slobs-download</td>
            <td>Takes any button variation, but 'action' is recomended</td>
          </tr>
          <tr>
            <td>buttonTitle</td>
            <td>String</td>
            <td>Download Streamlabs OBS</td>
            <td>The title for the button</td>
          </tr>
          <tr>
            <td>buttonDescription</td>
            <td>String</td>
            <td>Windows 7+ 245.8MB</td>
            <td>
              Description for 'slobs-download' button variation only, recomended
              left blank otherwise ( :buttonDescription="'" )
            </td>
          </tr>
          <tr>
            <td>buttonBg</td>
            <td>String</td>
            <td>null</td>
            <td>Button background is forced to be changed</td>
          </tr>
          <tr>
            <td>buttonTextColor</td>
            <td>String</td>
            <td>null</td>
            <td>Button text color is forced to be changed</td>
          </tr>

          <tr>
            <td>buttonHref</td>
            <td>String</td>
            <td>null</td>
            <td>
              Used if the the
              <code>type</code> is an <code>a</code> element (links).
            </td>
          </tr>
          <tr>
            <td>buttonTo</td>
            <td>String</td>
            <td>null</td>
            <td>
              Used if the the
              <code>type</code> is a <code>router-link</code>. Define the path.
            </td>
          </tr>
          <tr>
            <td>buttonTag</td>
            <td>String</td>
            <td>null</td>
            <td>
              What type of element the component is. Options are
              <code>button</code>, <code>a</code>,
              <code>router-link</code>
            </td>
          </tr>
          <tr>
            <td>buttonClick</td>
            <td>Function</td>
            <td>null</td>
            <td>Emits a click function.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import CallToAction from "./../components/CallToAction.vue";
import CallToActionCode from "./CallToActions.vue?raw";
import DemoSection from "./../components/DemoSection.vue";
import logo from './../assets/imgs/logo.svg';

@Component({
  components: {
    Button,
    CallToAction,
    DemoSection
  }
})
export default class CallToActions extends Vue {
  demoCode = CallToActionCode;

  logo = logo;

  test() {
    alert("test");
  }
}
<\/script>
`;var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,q=(t,o,n,d)=>{for(var a=d>1?void 0:d?P(o,n):o,s=t.length-1,c;s>=0;s--)(c=t[s])&&(a=(d?c(o,n,a):c(a))||a);return d&&a&&$(o,n,a),a};let u=class extends b{constructor(){super(...arguments);e(this,"demoCode",O);e(this,"logo",A)}test(){alert("test")}};u=q([p({components:{Button:h,CallToAction:x,DemoSection:T}})],u);var V=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[t._m(0),n("div",{staticClass:"section"},[n("h2",[t._v("Default Call to Action")]),n("DemoSection",{attrs:{title:"Default",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("CallToAction",{attrs:{buttonClick:t.test}})]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("h2",[t._v("Custom Call to Action")]),n("div",{staticClass:"section"},[n("DemoSection",{attrs:{title:"Custom",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("CallToAction",{attrs:{bgColor:"#31c3a2",titleColor:"#ffffff",subTitleColor:"#ffffff",thumbnail:t.logo,thumbnailWidth:120,thumbnailHeight:80,thumbnailBg:"#ffffff",title:"This is a Custom Call To Action",description:"A Custom Description",buttonVariation:"default",buttonTitle:"Click Me",buttonDescription:"",buttonTag:"a",buttonHref:"https://google.com",buttonBg:"#ffffff",buttonTextColor:"#000000"}})]},proxy:!0}])})],1),n("div",{staticClass:"section"},[n("CallToAction",{attrs:{bgColor:"#31c3a2",titleColor:"#fff",subTitleColor:"#fff",title:"This is a Custom Call To Action",description:"A Custom Description",hasThumbnail:!1,customButtonSlot:!0}},[n("div",{staticClass:"s-button-container"},[n("Button",{attrs:{title:"Using slot"}}),n("Button",{attrs:{title:"Using slot"}})],1)])],1),n("div",{staticClass:"section"},[n("CallToAction",{attrs:{bgColor:"#CAA368",titleColor:"#fff",subTitleColor:"#fff",hasThumbnail:!1,title:"Join Prime today!",description:"Our premium tool-set for professional content creators.",buttonVariation:"prime-white",buttonTitle:"Sign Up",buttonDescription:"",buttonIcon:"prime",bgPrime:!0}})],1),t._m(1)])])},H=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"section"},[n("h1",[t._v("Call To Action")]),n("p",[t._v(" You can use our callout component if you need to display an important message. ")]),n("pre",[n("code",[t._v(`import { CallToAction } from 'streamlabs-beaker';

components: {
  CallToAction
}`)])])])},function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("table",{staticClass:"docs-table"},[n("thead",[n("tr",[n("th",[t._v("Props")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("bgColor")]),n("td",[t._v("String")]),n("td",[t._v("#f5f8fa")]),n("td",[t._v("Background color, default color is @day-section (#f5f8fa)")])]),n("tr",[n("td",[t._v("titleColor")]),n("td",[t._v("String")]),n("td",[t._v("#09161d")]),n("td",[t._v("Title color, default color is @day-title (#09161d)")])]),n("tr",[n("td",[t._v("subTitleColor")]),n("td",[t._v("String")]),n("td",[t._v("#4f5e65")]),n("td",[t._v("Sub title color, default color is @day-paragraph (#4f5e65)")])]),n("tr",[n("td",[t._v("thumbnail")]),n("td",[t._v("String")]),n("td",[t._v("'https://cdn.streamlabs.com/static/kevin-standard.svg'")]),n("td",[t._v("A Thumbnail image")])]),n("tr",[n("td",[t._v("thumbnailBg")]),n("td",[t._v("String")]),n("td",[t._v("#31C3A2")]),n("td",[t._v(" A Thumbnail background color, default color is @teal (#31C3A2) ")])]),n("tr",[n("td",[t._v("thumbnailWidth")]),n("td",[t._v("Number")]),n("td",[t._v("80")]),n("td",[t._v("A Thumbnail width")])]),n("tr",[n("td",[t._v("thumbnailHeight")]),n("td",[t._v("Number")]),n("td",[t._v("80")]),n("td",[t._v("A Thumbnail height")])]),n("tr",[n("td",[t._v("thumbnailAlt")]),n("td",[t._v("String")]),n("td",[t._v("Get started by downloading Streamlabs OBS")]),n("td",[t._v("A Thumbnail alt")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("String")]),n("td",[t._v("Get started by downloading Streamlabs OBS")]),n("td",[t._v("Title for the call to action component")])]),n("tr",[n("td",[t._v("description")]),n("td",[t._v("String")]),n("td",[t._v(" Over 800k creators use Streamlabs OBS daily, delivering entertainment. ")]),n("td",[t._v("A short description for the call the action component")])]),n("tr",[n("td",[t._v("buttonVariation")]),n("td",[t._v("String")]),n("td",[t._v("slobs-download")]),n("td",[t._v("Takes any button variation, but 'action' is recomended")])]),n("tr",[n("td",[t._v("buttonTitle")]),n("td",[t._v("String")]),n("td",[t._v("Download Streamlabs OBS")]),n("td",[t._v("The title for the button")])]),n("tr",[n("td",[t._v("buttonDescription")]),n("td",[t._v("String")]),n("td",[t._v("Windows 7+ 245.8MB")]),n("td",[t._v(` Description for 'slobs-download' button variation only, recomended left blank otherwise ( :buttonDescription="'" ) `)])]),n("tr",[n("td",[t._v("buttonBg")]),n("td",[t._v("String")]),n("td",[t._v("null")]),n("td",[t._v("Button background is forced to be changed")])]),n("tr",[n("td",[t._v("buttonTextColor")]),n("td",[t._v("String")]),n("td",[t._v("null")]),n("td",[t._v("Button text color is forced to be changed")])]),n("tr",[n("td",[t._v("buttonHref")]),n("td",[t._v("String")]),n("td",[t._v("null")]),n("td",[t._v(" Used if the the "),n("code",[t._v("type")]),t._v(" is an "),n("code",[t._v("a")]),t._v(" element (links). ")])]),n("tr",[n("td",[t._v("buttonTo")]),n("td",[t._v("String")]),n("td",[t._v("null")]),n("td",[t._v(" Used if the the "),n("code",[t._v("type")]),t._v(" is a "),n("code",[t._v("router-link")]),t._v(". Define the path. ")])]),n("tr",[n("td",[t._v("buttonTag")]),n("td",[t._v("String")]),n("td",[t._v("null")]),n("td",[t._v(" What type of element the component is. Options are "),n("code",[t._v("button")]),t._v(", "),n("code",[t._v("a")]),t._v(", "),n("code",[t._v("router-link")])])]),n("tr",[n("td",[t._v("buttonClick")]),n("td",[t._v("Function")]),n("td",[t._v("null")]),n("td",[t._v("Emits a click function.")])])])])}];const f={};var M=v(u,V,H,!1,W,null,null,null);function W(t){for(let o in f)this[o]=f[o]}const R=function(){return M.exports}();export{R as default};
//# sourceMappingURL=CallToActions-521c4081.js.map

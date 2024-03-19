var s=Object.defineProperty;var c=(n,t,e)=>t in n?s(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var r=(n,t,e)=>(c(n,typeof t!="symbol"?t+"":t,e),e);import{C as m,V as u,n as b}from"./index.4fb8a6cb.js";import{B as v}from"./Button.b26dacc2.js";import{D as p}from"./DemoSection.79ee11c0.js";import{M as _}from"./ModalComp.12fcb69e.js";import"./Accordion.09c82396.js";import"./Badge.2c39dd0d.js";import"./Spinner.2fef2c20.js";import"./index.3042f557.js";const f=`<template>
  <div>
    <div class="section">
      <h1>Modal</h1>
      <pre><code>import { ModalComp } from 'streamlabs-beaker';

components: {
  ModalComp
}</code></pre>
    </div>

    <div class="section">
      <h2>Modal Basic</h2>
      <DemoSection title="Modal Basic" :code="demoCode">
        <template #components>
          <ModalComp
            name="modal-basic"
            type="basic"
            title="UI Modal"
            subTitle="Subtitle"
            :clickToClose="false"
            text="
              Save combining multiple windows like Streamlabels, Twitch Chat,
              Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a
              live view.
            "
            >Slots Available!</ModalComp
          >
        </template>
      </DemoSection>

      <div class="s-button-container--left">
        <Button
          variation="default"
          title="modal basic"
          @click="$modal.show('modal-basic')"
        />
      </div>
    </div>

    <div class="section">
      <h2>Modal Subscribe</h2>
      <p>Used once subscribe.</p>

      <DemoSection title="Modal Subscribe" :code="demoCode">
        <template #components>
          <ModalComp
            type="subscribe"
            :scrollable="true"
            title="Streamlabs"
            subTitle="Never pay for GIFs and effects again!"
            text="
              Get unlimited free GIFs and effects that will show up on all
              alerts on all channels! You\u2019ll also get a fancy \u2018Pro\u2019 badge next
              to your username on your donations.
            "
            subscribe-text="galazy83 donated $50.00!"
            subscribe-message="Thanks for the stream. Go CivRyan!"
            notes="You may cancel your subscription at any time."
          />
        </template>
      </DemoSection>

      <div class="button-container button-container--left">
        <Button
          variation="default"
          title="modal subscribe"
          @click="$modal.show('modal-subscribe')"
        />
      </div>
    </div>

    <div class="section">
      <h2>Modal Redirect</h2>
      <p>Used for redirect.</p>

      <DemoSection title="Modal Redirect" :code="demoCode">
        <template #components>
          <ModalComp
            type="redirect"
            title="Redirecting..."
            text="
              Redirecting you to PayPal to update your method of payment.
              Click here if you have been waiting longer than 5 seconds.
            "
          />
        </template>
      </DemoSection>

      <div class="button-container button-container--left">
        <Button
          variation="default"
          title="modal redirect"
          @click="$modal.show('modal-redirect')"
        />
      </div>
    </div>

    <div class="section">
      <h2>Modal Confirm</h2>
      <p>Used when needed to let the user confirm.</p>

      <DemoSection title="Modal Confirm" :code="demoCode">
        <template #components>
          <ModalComp
            type="confirmation"
            :width="400"
            subTitle="Delete \u2018Streamlabs Pillow'"
            text="
              Are you sure you want to delete the merch item \u2018Streamlabs
              Pillow\u2019? This action cannot be undone.
            "
            @confirm="() => {}"
            confirmButtonText="Delete"
          />
        </template>
      </DemoSection>

      <div class="button-container button-container--left">
        <Button
          :variation="'warning'"
          :title="'modal confirmation'"
          @click="$modal.show('modal-confirmation')"
        ></Button>
      </div>
    </div>

    <div class="section">
      <h2>Modal Welcome Prime</h2>
      <p>Used for welcome prime</p>

      <DemoSection title="Modal Welcome Prime" :code="demoCode">
        <template #components>
          <ModalComp
            type="welcome-prime"
            :width="600"
            :hasPrimeCloseButton="true"
            @onClickPrime="test"
          />
        </template>
      </DemoSection>

      <div class="button-container button-container--left">
        <Button
          variation="default"
          title="modal welcome prime"
          @click="$modal.show('modal-welcome-prime')"
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
          <td>name</td>
          <td>string</td>
          <td>null</td>
          <td>
            name is optional. if you need specific name for the modal, use name
            prop. Also don't forget to change $modal.show() to the name you set
            as prop.
            <br />ex.
            <code>:name="'modal-basic2'"</code>
            <code>$modal.show('modal-basic2')</code>
          </td>
        </tr>
        <tr>
          <td>width</td>
          <td>number</td>
          <td>600</td>
          <td>modal width</td>
        </tr>
        <tr>
          <td>minWidth</td>
          <td>number</td>
          <td>600</td>
          <td>modal minimum width</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>null</td>
          <td>
            Type of the modal. Options are basic, subscribe, redirect, and
            confirmation
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>null</td>
          <td>title to display</td>
        </tr>
        <tr>
          <td>subTitle</td>
          <td>string</td>
          <td>null</td>
          <td>sub title to display</td>
        </tr>
        <tr>
          <td>text</td>
          <td>string</td>
          <td>null</td>
          <td>text to display</td>
        </tr>
        <tr>
          <td>subscribeText</td>
          <td>string</td>
          <td>null</td>
          <td>
            subscribe text only used for
            <code>subscribe</code>
          </td>
        </tr>
        <tr>
          <td>subscribeMessage</td>
          <td>string</td>
          <td>null</td>
          <td>
            subscribe message only used for
            <code>subscribe</code>
          </td>
        </tr>
        <tr>
          <td>notes</td>
          <td>string</td>
          <td>null</td>
          <td>
            the note of the bottom only used for
            <code>subscribe</code>
          </td>
        </tr>
        <tr>
          <td>@confirm</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Callback function when confirmed (in Modal Basic, Modal
            Confirmation)
          </td>
        </tr>
        <tr>
          <td>confirmButtonText</td>
          <td>string</td>
          <td>Confirm</td>
          <td>Confirm button text (in Modal Basic, Modal Confirmation)</td>
        </tr>
        <tr>
          <td>buttonVariation</td>
          <td>string</td>
          <td>warning</td>
          <td>
            Pass in
            <code>action</code> if it's a confirmation that doesn't warrant a
            warning (only in Modal Confirmation). In Modal Subscribe default is
            <code>subscribe</code>. Can be set to <code>paypal</code> and
            <code>paypal-blue</code> variations.
          </td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>Subscribe with PayPal</td>
          <td>Set subscribe button title (only in Modal Subscribe).</td>
        </tr>
        <tr>
          <td>buttonPrice</td>
          <td>string</td>
          <td>$5.99</td>
          <td>Set subscribe button title (only in Modal Subscribe).</td>
        </tr>
        <tr>
          <td>proBadge</td>
          <td>boolean</td>
          <td>true</td>
          <td>
            Displays
            <code>Pro</code> badge in modal header (only in Modal Subscribe).
          </td>
        </tr>
        <tr>
          <td>customPreview</td>
          <td>boolean</td>
          <td>false</td>
          <td>
            Allows for custom preview above modal text. Uses
            <code>preview</code> slot.
            <code>
              &lt;template #preview&gt;Custom Preview HTML&lt;template&gt;
            </code>
            (only in Modal Subscribe).
          </td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>Subscribe with PayPal</td>
          <td>Set subscribe button title (only in Modal Subscribe).</td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>$5.99</td>
          <td>Set subscribe button title (only in Modal Subscribe).</td>
        </tr>
        <tr>
          <td>primeButtonText</td>
          <td>string</td>
          <td>Continue</td>
          <td>Set button text below (only in Modal Welcom Prime).</td>
        </tr>
        <tr>
          <td>hasPrimeCloseButton</td>
          <td>boolean</td>
          <td>false</td>
          <td>Set the close button right top (only in Modal Welcom Prime).</td>
        </tr>
        <tr>
          <td>@onClickPrime</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Callback function when click the button below (only in Modal Welcom
            Prime).
          </td>
        </tr>
        <tr>
          <td>clickToClose</td>
          <td>Boolean</td>
          <td>true</td>
          <td>
            If set to false, it will not be possible to close modal by clicking
            on the background or by pressing Esc key. (only in Modal Basic).
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import ModalComp from "./../components/ModalComp.vue";
import ModalsCode from "./Modals.vue?raw";

@Component({
  components: {
    Button,
    DemoSection,
    ModalComp
  }
})
export default class Modals extends Vue {
  demoCode = ModalsCode;
  test() {
    console.log("test");
  }
}
<\/script>
`;var h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,C=(n,t,e,o)=>{for(var d=o>1?void 0:o?y(t,e):t,i=n.length-1,a;i>=0;i--)(a=n[i])&&(d=(o?a(t,e,d):a(d))||d);return o&&d&&h(t,e,d),d};let l=class extends u{constructor(){super(...arguments);r(this,"demoCode",f)}test(){console.log("test")}};l=C([m({components:{Button:v,DemoSection:p,ModalComp:_}})],l);var w=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",[t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Modal Basic")]),e("DemoSection",{attrs:{title:"Modal Basic",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("ModalComp",{attrs:{name:"modal-basic",type:"basic",title:"UI Modal",subTitle:"Subtitle",clickToClose:!1,text:`
              Save combining multiple windows like Streamlabels, Twitch Chat,
              Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a
              live view.
            `}},[t._v("Slots Available!")])]},proxy:!0}])}),e("div",{staticClass:"s-button-container--left"},[e("Button",{attrs:{variation:"default",title:"modal basic"},on:{click:function(o){return t.$modal.show("modal-basic")}}})],1)],1),e("div",{staticClass:"section"},[e("h2",[t._v("Modal Subscribe")]),e("p",[t._v("Used once subscribe.")]),e("DemoSection",{attrs:{title:"Modal Subscribe",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("ModalComp",{attrs:{type:"subscribe",scrollable:!0,title:"Streamlabs",subTitle:"Never pay for GIFs and effects again!",text:`
              Get unlimited free GIFs and effects that will show up on all
              alerts on all channels! You\u2019ll also get a fancy \u2018Pro\u2019 badge next
              to your username on your donations.
            `,"subscribe-text":"galazy83 donated $50.00!","subscribe-message":"Thanks for the stream. Go CivRyan!",notes:"You may cancel your subscription at any time."}})]},proxy:!0}])}),e("div",{staticClass:"button-container button-container--left"},[e("Button",{attrs:{variation:"default",title:"modal subscribe"},on:{click:function(o){return t.$modal.show("modal-subscribe")}}})],1)],1),e("div",{staticClass:"section"},[e("h2",[t._v("Modal Redirect")]),e("p",[t._v("Used for redirect.")]),e("DemoSection",{attrs:{title:"Modal Redirect",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("ModalComp",{attrs:{type:"redirect",title:"Redirecting...",text:`
              Redirecting you to PayPal to update your method of payment.
              Click here if you have been waiting longer than 5 seconds.
            `}})]},proxy:!0}])}),e("div",{staticClass:"button-container button-container--left"},[e("Button",{attrs:{variation:"default",title:"modal redirect"},on:{click:function(o){return t.$modal.show("modal-redirect")}}})],1)],1),e("div",{staticClass:"section"},[e("h2",[t._v("Modal Confirm")]),e("p",[t._v("Used when needed to let the user confirm.")]),e("DemoSection",{attrs:{title:"Modal Confirm",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("ModalComp",{attrs:{type:"confirmation",width:400,subTitle:"Delete \u2018Streamlabs Pillow'",text:`
              Are you sure you want to delete the merch item \u2018Streamlabs
              Pillow\u2019? This action cannot be undone.
            `,confirmButtonText:"Delete"},on:{confirm:()=>{}}})]},proxy:!0}])}),e("div",{staticClass:"button-container button-container--left"},[e("Button",{attrs:{variation:"warning",title:"modal confirmation"},on:{click:function(o){return t.$modal.show("modal-confirmation")}}})],1)],1),e("div",{staticClass:"section"},[e("h2",[t._v("Modal Welcome Prime")]),e("p",[t._v("Used for welcome prime")]),e("DemoSection",{attrs:{title:"Modal Welcome Prime",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("ModalComp",{attrs:{type:"welcome-prime",width:600,hasPrimeCloseButton:!0},on:{onClickPrime:t.test}})]},proxy:!0}])}),e("div",{staticClass:"button-container button-container--left"},[e("Button",{attrs:{variation:"default",title:"modal welcome prime"},on:{click:function(o){return t.$modal.show("modal-welcome-prime")}}})],1)],1),t._m(1)])},M=[function(){var n=this,t=n._self._c;return n._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[n._v("Modal")]),t("pre",[t("code",[n._v(`import { ModalComp } from 'streamlabs-beaker';

components: {
  ModalComp
}`)])])])},function(){var n=this,t=n._self._c;return n._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Props")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("name")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v(" name is optional. if you need specific name for the modal, use name prop. Also don't forget to change $modal.show() to the name you set as prop. "),t("br"),n._v("ex. "),t("code",[n._v(`:name="'modal-basic2'"`)]),t("code",[n._v("$modal.show('modal-basic2')")])])]),t("tr",[t("td",[n._v("width")]),t("td",[n._v("number")]),t("td",[n._v("600")]),t("td",[n._v("modal width")])]),t("tr",[t("td",[n._v("minWidth")]),t("td",[n._v("number")]),t("td",[n._v("600")]),t("td",[n._v("modal minimum width")])]),t("tr",[t("td",[n._v("type")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v(" Type of the modal. Options are basic, subscribe, redirect, and confirmation ")])]),t("tr",[t("td",[n._v("title")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v("title to display")])]),t("tr",[t("td",[n._v("subTitle")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v("sub title to display")])]),t("tr",[t("td",[n._v("text")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v("text to display")])]),t("tr",[t("td",[n._v("subscribeText")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v(" subscribe text only used for "),t("code",[n._v("subscribe")])])]),t("tr",[t("td",[n._v("subscribeMessage")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v(" subscribe message only used for "),t("code",[n._v("subscribe")])])]),t("tr",[t("td",[n._v("notes")]),t("td",[n._v("string")]),t("td",[n._v("null")]),t("td",[n._v(" the note of the bottom only used for "),t("code",[n._v("subscribe")])])]),t("tr",[t("td",[n._v("@confirm")]),t("td",[n._v("Function")]),t("td",[n._v("null")]),t("td",[n._v(" Callback function when confirmed (in Modal Basic, Modal Confirmation) ")])]),t("tr",[t("td",[n._v("confirmButtonText")]),t("td",[n._v("string")]),t("td",[n._v("Confirm")]),t("td",[n._v("Confirm button text (in Modal Basic, Modal Confirmation)")])]),t("tr",[t("td",[n._v("buttonVariation")]),t("td",[n._v("string")]),t("td",[n._v("warning")]),t("td",[n._v(" Pass in "),t("code",[n._v("action")]),n._v(" if it's a confirmation that doesn't warrant a warning (only in Modal Confirmation). In Modal Subscribe default is "),t("code",[n._v("subscribe")]),n._v(". Can be set to "),t("code",[n._v("paypal")]),n._v(" and "),t("code",[n._v("paypal-blue")]),n._v(" variations. ")])]),t("tr",[t("td",[n._v("buttonTitle")]),t("td",[n._v("string")]),t("td",[n._v("Subscribe with PayPal")]),t("td",[n._v("Set subscribe button title (only in Modal Subscribe).")])]),t("tr",[t("td",[n._v("buttonPrice")]),t("td",[n._v("string")]),t("td",[n._v("$5.99")]),t("td",[n._v("Set subscribe button title (only in Modal Subscribe).")])]),t("tr",[t("td",[n._v("proBadge")]),t("td",[n._v("boolean")]),t("td",[n._v("true")]),t("td",[n._v(" Displays "),t("code",[n._v("Pro")]),n._v(" badge in modal header (only in Modal Subscribe). ")])]),t("tr",[t("td",[n._v("customPreview")]),t("td",[n._v("boolean")]),t("td",[n._v("false")]),t("td",[n._v(" Allows for custom preview above modal text. Uses "),t("code",[n._v("preview")]),n._v(" slot. "),t("code",[n._v(" <template #preview>Custom Preview HTML<template> ")]),n._v(" (only in Modal Subscribe). ")])]),t("tr",[t("td",[n._v("buttonTitle")]),t("td",[n._v("string")]),t("td",[n._v("Subscribe with PayPal")]),t("td",[n._v("Set subscribe button title (only in Modal Subscribe).")])]),t("tr",[t("td",[n._v("buttonTitle")]),t("td",[n._v("string")]),t("td",[n._v("$5.99")]),t("td",[n._v("Set subscribe button title (only in Modal Subscribe).")])]),t("tr",[t("td",[n._v("primeButtonText")]),t("td",[n._v("string")]),t("td",[n._v("Continue")]),t("td",[n._v("Set button text below (only in Modal Welcom Prime).")])]),t("tr",[t("td",[n._v("hasPrimeCloseButton")]),t("td",[n._v("boolean")]),t("td",[n._v("false")]),t("td",[n._v("Set the close button right top (only in Modal Welcom Prime).")])]),t("tr",[t("td",[n._v("@onClickPrime")]),t("td",[n._v("Function")]),t("td",[n._v("null")]),t("td",[n._v(" Callback function when click the button below (only in Modal Welcom Prime). ")])]),t("tr",[t("td",[n._v("clickToClose")]),t("td",[n._v("Boolean")]),t("td",[n._v("true")]),t("td",[n._v(" If set to false, it will not be possible to close modal by clicking on the background or by pressing Esc key. (only in Modal Basic). ")])])])])}],g=b(l,w,M,!1,null,null,null,null);const W=g.exports;export{W as default};
//# sourceMappingURL=Modals.430997b9.js.map

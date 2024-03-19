var c=Object.defineProperty;var l=(n,t,e)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var a=(n,t,e)=>(l(n,typeof t!="symbol"?t+"":t,e),e);import{C as u,V as v,E as p,n as m}from"./index.4fb8a6cb.js";import{A as _}from"./Accordion.09c82396.js";import{B as b}from"./Button.b26dacc2.js";import{D as f}from"./DemoSection.79ee11c0.js";const h=`<template>
  <div>
    <div class="section">
      <h1>Buttons</h1>
      <p>
        Our button component is super flexible. It can act as type
        <code>button</code>, <code>a</code> tag or <code>router-link</code>.
        Please note that you may need to use 'ButtonInput' rather than 'Button'
        to avoid issues.
      </p>

      <pre><code>import { Button } from 'streamlabs-beaker';

components: {
  Button
}</code></pre>
    </div>

    <div class="section">
      <h2>Standard Buttons</h2>
      <p>Used throughout website Dashboard.</p>
      <div class="section">
        <h3>Active</h3>
        <DemoSection title="Active" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                variation="default"
                title="Default"
                tag="a"
                href="https://laravel.com/docs/5.8/routing"
              />

              <Button
                variation="action"
                title="Action"
                @click="buttonClick('Action')"
              />

              <Button
                variation="warning"
                title="Warning"
                @click="buttonClick('Warning')"
              />

              <Button
                variation="default"
                title="With icon"
                icon="add-circle"
                @click="buttonClick('With icon')"
              />

              <Button
                variation="default"
                title="Custom Colors"
                bg-color="pink"
                text-color="red"
                @click="buttonClick('Custom Colors')"
              />

              <Button
                variation="prime"
                title="Join Prime"
                icon="prime"
                @click="buttonClick('Join Prime')"
              />

              <Button
                variation="prime-white"
                title="Join Prime"
                icon="prime"
                @click="buttonClick('Join Prime')"
              />

               <Button
                variation="ultra"
                title="Join Ultra"
                icon="ultra"
                @click="buttonClick('Join Ultra')"
              />

              <Button variation="action" @click="buttonClick('Custom Slot')">
                <div slot="custom" class="custom-html">
                  <i class="icon-add-circle"></i>
                  <span>Custom Slot</span>
                </div>
              </Button>
            </div>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Disabled</h3>
        <DemoSection title="Disabled" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :state="'disabled'"
                :title="'Default'"
              />

              <Button
                :variation="'action'"
                :state="'disabled'"
                :title="'Action'"
              />

              <Button
                :variation="'warning'"
                :state="'disabled'"
                :title="'Warning'"
              />

              <Button
                :variation="'default'"
                :state="'disabled'"
                :title="'with icon'"
                :icon="'edit'"
              />
            </div>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Focus</h3>
        <DemoSection title="Focus" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :state="'focused'"
                :title="'Default'"
              />

              <Button
                :variation="'action'"
                :state="'focused'"
                :title="'Action'"
              />

              <Button
                :variation="'warning'"
                :state="'focused'"
                :title="'Warning'"
              />

              <Button
                :variation="'default'"
                :state="'focused'"
                :title="'with icon'"
                :icon="'edit'"
              />
            </div>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Loading</h3>
        <DemoSection title="Loading" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :state="'loading'"
                :title="'Default'"
              />

              <Button
                :variation="'action'"
                :state="'loading'"
                :title="'Action'"
              />

              <Button
                :variation="'warning'"
                :state="'loading'"
                :title="'Warning'"
              />

              <Button
                :variation="'default'"
                :state="'loading'"
                :title="'with icon'"
                :icon="'recent-events'"
              />
            </div>
          </template>
        </DemoSection>

        <p>
          Click
          <a @click="isLoadingExample = !isLoadingExample">here</a> to test.
        </p>

        <Button
          :class="{ 'is-loading': isLoadingExample }"
          :type="'button'"
          :variation="'default'"
          :title="'with icon'"
          :icon="'pop-out-1'"
        />
      </div>
    </div>

    <div class="section">
      <h2>Small Buttons</h2>
      <p>
        Small is the size used on Streamlabs OBS. It is slightly smaller than
        our standard button.
      </p>

      <DemoSection title="Small Buttons" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button
              :type="'button'"
              :size="'small'"
              :variation="'default'"
              :title="'Default'"
            />

            <Button
              :type="'button'"
              :size="'small'"
              :variation="'action'"
              :title="'Action'"
            />

            <Button
              :type="'button'"
              :size="'small'"
              :variation="'warning'"
              :title="'Warning'"
            />

            <Button
              :type="'button'"
              :size="'small'"
              :variation="'default'"
              :title="'With Icon'"
              :icon="'image'"
            />

            <Button
              :variation="'rewards-standard'"
              :size="'small'"
              :title="'Rewards'"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Large Buttons</h2>
      <p>
        Used on website marketing pages and for the Donate button on the tip
        page.
      </p>
      <DemoSection title="Large Buttons" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button
              :type="'button'"
              :size="'large'"
              :variation="'default'"
              :title="'Default'"
            />

            <Button
              :type="'button'"
              :size="'large'"
              :variation="'action'"
              :title="'Action'"
            />

            <Button
              :type="'button'"
              :size="'large'"
              :variation="'warning'"
              :title="'Warning'"
            />

            <Button
              :type="'button'"
              :size="'large'"
              :variation="'default'"
              :title="'With Icon'"
              :icon="'image'"
            />

            <Button
              :size="'large'"
              :variation="'prime'"
              :title="'Join Prime'"
              :icon="'prime'"
            />
            <Button
              :size="'large'"
              :variation="'prime-white'"
              :title="'Join Prime'"
              :icon="'prime'"
            />
            <Button
              :size="'large'"
              :variation="'ultra'"
              :title="'Join Ultra'"
              :icon="'ultra'"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Fixed Width Buttons</h2>
      <p>Used throughout website Dashboard. Width is fixed at 96px.</p>

      <DemoSection title="Fixed Width Buttons" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button
              type="button"
              size="fixed-width"
              variation="default"
              title="Default"
            />

            <Button
              type="button"
              size="fixed-width"
              variation="action"
              title="Action"
            />

            <Button
              type="button"
              size="fixed-width"
              variation="warning"
              title="Warning"
            />

            <Button
              type="button"
              size="fixed-width"
              variation="default"
              title="'WithIcon"
              icon="image"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Full-Width Buttons</h2>
      <div class="section">
        <h3>Default</h3>
        <p>Used within cards and panels in the Dashboard.</p>
        <DemoSection title="Default" :code="demoCode">
          <template #components>
            <Button
              size="full-width"
              variation="default"
              title="Start Giveaway"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Subscribe</h3>
        <p>Used on the App Platform for Subscribing to Apps.</p>
        <DemoSection title="Subscribe" :code="demoCode">
          <template #components>
            <Button variation="subscribe" title="Subscribe" price="$4.99" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Paypal</h3>
        <p>Used on the Tip Page for Subscribing to Pro.</p>
        <DemoSection title="Paypal" :code="demoCode">
          <template #components>
            <Button
              variation="paypal"
              title="Subscribe with PayPal"
              price="$4.99"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Download</h3>
        <p>Used for Download Streamlabs OBS buttons.</p>
        <DemoSection title="Download" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                variation="slobs-download"
                title="Download Streamlabs OBS"
              />
              <Button
                variation="slobs-download-landing"
                osType="windows"
              ></Button>
              <Button variation="slobs-download-landing" osType="mac"></Button>
            </div>
          </template>
        </DemoSection>
      </div>
    </div>
    <div class="section">
      <h2>Square Buttons</h2>
      <p>Used for add and subtract number inputs as well as login buttons.</p>
      <DemoSection title="Square Buttons" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button
              type="button"
              size="square"
              variation="default"
              icon="add"
            />

            <Button
              type="button"
              size="square"
              variation="default"
              icon="subtract"
            />

            <Button
              type="button"
              variation="facebook"
              size="square"
              icon="facebook"
            />

            <Button
              type="button"
              variation="periscope"
              size="square"
              icon="periscope"
            />

            <Button
              type="button"
              variation="mixer"
              size="square"
              icon="mixer"
            />

            <Button
              type="button"
              variation="picarto"
              size="square"
              icon="picarto"
            />

                <Button
              type="button"
              variation="ultra"
              size="square"
              icon="ultra"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Navigation Buttons</h2>
      <p>Used to bring you between different page states.</p>

      <DemoSection title="Navigation Buttons" :code="demoCode">
        <template #components>
          <Button
            variation="navigation"
            icon="back-alt"
            title="Back to Listings"
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Prime Button Text</h2>
      <p>Used for prime button with text.</p>

      <DemoSection title="Prime Button Text" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button variation="prime-simple" />
            <Button variation="prime-simple" primeTitle="test" />
          </div>
        </template>
      </DemoSection>
    </div>

    <table class="docs-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>@click</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Emits a click function. If you are using an event modifier such as
            <code>prevent</code>, use <code>native</code>. For example
            <code>@click.native.prevent</code>.
          </td>
        </tr>
        <tr>
          <td>bgColor</td>
          <td>String</td>
          <td>null</td>
          <td>Used for background color.</td>
        </tr>
        <tr>
          <td>textColor</td>
          <td>String</td>
          <td>null</td>
          <td>Used for text color.</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>null</td>
          <td>
            Use the endings of our custom icons. For example 'icon-settings'
            would be 'settings'. See icons page of the design system for a full
            list.
          </td>
        </tr>
        <tr>
          <td>iconPosition</td>
          <td>String</td>
          <td>left</td>
          <td>
            Positions the icon left or right. If positioned right, the icon will
            have a left margin of 24px.
          </td>
        </tr>
        <tr>
          <td>iconImg</td>
          <td>String</td>
          <td>null</td>
          <td>
            Takes image source string to use an image as an icon. Icon image
            will have a 14px width.
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>null</td>
          <td>Main button text.</td>
        </tr>
        <tr>
          <td>price</td>
          <td>String</td>
          <td>null</td>
          <td>Used for subscribe buttons in the App Store.</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used for Streamlabs OBS download buttons to describe the version,
            size and compatibility.
          </td>
        </tr>
        <tr>
          <td>href</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used if the the
            <code>type</code> is an <code>a</code> element (links).
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>standard</td>
          <td>
            Size of the button. Options are
            <code>small</code>, <code>large</code>, <code>square</code>,
            <code>fixed-width</code>, and
            <code>full-width</code>
          </td>
        </tr>
        <tr>
          <td>state</td>
          <td>String</td>
          <td>null</td>
          <td>
            State of the button. Options are
            <code>hover</code>, <code>focus</code>, <code>loading</code> and
            <code>disabled</code>.
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>null</td>
          <td>Set to string 'submit'.</td>
        </tr>
        <tr>
          <td>to</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used if the the
            <code>type</code> is a <code>router-link</code>. Define the path.
          </td>
        </tr>
        <tr>
          <td>tag</td>
          <td>String</td>
          <td>button</td>
          <td>
            What type of element the component is. Options are
            <code>button</code>, <code>a</code>,
            <code>router-link</code>
          </td>
        </tr>
        <tr>
          <td>target</td>
          <td>String</td>
          <td>_self</td>
          <td>
            Used to set different targets for
            <code>a</code>
            links,
            <code>_self</code>, <code>_blank</code>, <code>_parent</code>,
            <code>_top</code>
          </td>
        </tr>
        <tr>
          <td>primeBgColor</td>
          <td>String</td>
          <td>null</td>
          <td>
            You can use this prop when you set variation as
            <code>prime</code>. Option is only <code>white</code>.
          </td>
        </tr>
        <tr>
          <td>primeTitle</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used for prime button text. You can use this prop when you set
            variation as
            <code>prime-simple</code>
          </td>
        </tr>
        <tr>
          <td>variation</td>
          <td>String</td>
          <td>default</td>
          <td>
            The variation style of a button. Primary options are
            <code>default</code>, <code>action</code>, <code>prime</code> and
            <code>warning</code>. Other options are <code>subscribe</code>,
            <code>paypal</code>, <code>download</code>, and
            <code>navigation</code>. Reward options are
            <code>rewards-standard</code>, <code>rewards-silver</code>,
            <code>rewards-gold</code>, <code>rewards-platinum</code>,
            <code>rewards-diamond</code>, and <code>rewards-legend</code>.
            Platform options are <code>facebook</code>, <code>mixer</code>,
            <code>twitch</code>, <code>youtube</code>, <code>periscope</code>,
            <code>picarto</code>and <code>paypal-blue</code>.
          </td>
        </tr>
        <tr>
          <td>slobsDownloadTitle</td>
          <td>String</td>
          <td>Download Streamlabs</td>
          <td>Used for slobs download landing button title.</td>
        </tr>
        <tr>
          <td>osType</td>
          <td>String</td>
          <td>windows</td>
          <td>
            Used for slobs download landing button icon. Options are
            <code>windows</code> and <code>mac</code>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import ButtonCode from "./Buttons.vue?raw";
import { EventBus } from "./../plugins/event-bus";

@Component({
  components: {
    Accordion,
    Button,
    DemoSection
  }
})
export default class Forms extends Vue {
  isLoading = true;
  isLoadingExample = false;
  demoCode = ButtonCode;

  buttonClick(buttonType) {
    EventBus.$emit("copy-success", \`"\${buttonType}" button clicked\`);
  }
}
<\/script>

<style lang="less" scoped>
.custom-html {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
}
</style>
`;var g=Object.defineProperty,B=Object.getOwnPropertyDescriptor,S=(n,t,e,o)=>{for(var i=o>1?void 0:o?B(t,e):t,d=n.length-1,s;d>=0;d--)(s=n[d])&&(i=(o?s(t,e,i):s(i))||i);return o&&i&&g(t,e,i),i};let r=class extends v{constructor(){super(...arguments);a(this,"isLoading",!0);a(this,"isLoadingExample",!1);a(this,"demoCode",h)}buttonClick(t){p.$emit("copy-success",`"${t}" button clicked`)}};r=S([u({components:{Accordion:_,Button:b,DemoSection:f}})],r);var y=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",[t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Standard Buttons")]),e("p",[t._v("Used throughout website Dashboard.")]),e("div",{staticClass:"section"},[e("h3",[t._v("Active")]),e("DemoSection",{attrs:{title:"Active",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"default",title:"Default",tag:"a",href:"https://laravel.com/docs/5.8/routing"}}),e("Button",{attrs:{variation:"action",title:"Action"},on:{click:function(o){return t.buttonClick("Action")}}}),e("Button",{attrs:{variation:"warning",title:"Warning"},on:{click:function(o){return t.buttonClick("Warning")}}}),e("Button",{attrs:{variation:"default",title:"With icon",icon:"add-circle"},on:{click:function(o){return t.buttonClick("With icon")}}}),e("Button",{attrs:{variation:"default",title:"Custom Colors","bg-color":"pink","text-color":"red"},on:{click:function(o){return t.buttonClick("Custom Colors")}}}),e("Button",{attrs:{variation:"prime",title:"Join Prime",icon:"prime"},on:{click:function(o){return t.buttonClick("Join Prime")}}}),e("Button",{attrs:{variation:"prime-white",title:"Join Prime",icon:"prime"},on:{click:function(o){return t.buttonClick("Join Prime")}}}),e("Button",{attrs:{variation:"ultra",title:"Join Ultra",icon:"ultra"},on:{click:function(o){return t.buttonClick("Join Ultra")}}}),e("Button",{attrs:{variation:"action"},on:{click:function(o){return t.buttonClick("Custom Slot")}}},[e("div",{staticClass:"custom-html",attrs:{slot:"custom"},slot:"custom"},[e("i",{staticClass:"icon-add-circle"}),e("span",[t._v("Custom Slot")])])])],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h3",[t._v("Disabled")]),e("DemoSection",{attrs:{title:"Disabled",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"default",state:"disabled",title:"Default"}}),e("Button",{attrs:{variation:"action",state:"disabled",title:"Action"}}),e("Button",{attrs:{variation:"warning",state:"disabled",title:"Warning"}}),e("Button",{attrs:{variation:"default",state:"disabled",title:"with icon",icon:"edit"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h3",[t._v("Focus")]),e("DemoSection",{attrs:{title:"Focus",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"default",state:"focused",title:"Default"}}),e("Button",{attrs:{variation:"action",state:"focused",title:"Action"}}),e("Button",{attrs:{variation:"warning",state:"focused",title:"Warning"}}),e("Button",{attrs:{variation:"default",state:"focused",title:"with icon",icon:"edit"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h3",[t._v("Loading")]),e("DemoSection",{attrs:{title:"Loading",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"default",state:"loading",title:"Default"}}),e("Button",{attrs:{variation:"action",state:"loading",title:"Action"}}),e("Button",{attrs:{variation:"warning",state:"loading",title:"Warning"}}),e("Button",{attrs:{variation:"default",state:"loading",title:"with icon",icon:"recent-events"}})],1)]},proxy:!0}])}),e("p",[t._v(" Click "),e("a",{on:{click:function(o){t.isLoadingExample=!t.isLoadingExample}}},[t._v("here")]),t._v(" to test. ")]),e("Button",{class:{"is-loading":t.isLoadingExample},attrs:{type:"button",variation:"default",title:"with icon",icon:"pop-out-1"}})],1)]),e("div",{staticClass:"section"},[e("h2",[t._v("Small Buttons")]),e("p",[t._v(" Small is the size used on Streamlabs OBS. It is slightly smaller than our standard button. ")]),e("DemoSection",{attrs:{title:"Small Buttons",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{type:"button",size:"small",variation:"default",title:"Default"}}),e("Button",{attrs:{type:"button",size:"small",variation:"action",title:"Action"}}),e("Button",{attrs:{type:"button",size:"small",variation:"warning",title:"Warning"}}),e("Button",{attrs:{type:"button",size:"small",variation:"default",title:"With Icon",icon:"image"}}),e("Button",{attrs:{variation:"rewards-standard",size:"small",title:"Rewards"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Large Buttons")]),e("p",[t._v(" Used on website marketing pages and for the Donate button on the tip page. ")]),e("DemoSection",{attrs:{title:"Large Buttons",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{type:"button",size:"large",variation:"default",title:"Default"}}),e("Button",{attrs:{type:"button",size:"large",variation:"action",title:"Action"}}),e("Button",{attrs:{type:"button",size:"large",variation:"warning",title:"Warning"}}),e("Button",{attrs:{type:"button",size:"large",variation:"default",title:"With Icon",icon:"image"}}),e("Button",{attrs:{size:"large",variation:"prime",title:"Join Prime",icon:"prime"}}),e("Button",{attrs:{size:"large",variation:"prime-white",title:"Join Prime",icon:"prime"}}),e("Button",{attrs:{size:"large",variation:"ultra",title:"Join Ultra",icon:"ultra"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Fixed Width Buttons")]),e("p",[t._v("Used throughout website Dashboard. Width is fixed at 96px.")]),e("DemoSection",{attrs:{title:"Fixed Width Buttons",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{type:"button",size:"fixed-width",variation:"default",title:"Default"}}),e("Button",{attrs:{type:"button",size:"fixed-width",variation:"action",title:"Action"}}),e("Button",{attrs:{type:"button",size:"fixed-width",variation:"warning",title:"Warning"}}),e("Button",{attrs:{type:"button",size:"fixed-width",variation:"default",title:"'WithIcon",icon:"image"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Full-Width Buttons")]),e("div",{staticClass:"section"},[e("h3",[t._v("Default")]),e("p",[t._v("Used within cards and panels in the Dashboard.")]),e("DemoSection",{attrs:{title:"Default",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Button",{attrs:{size:"full-width",variation:"default",title:"Start Giveaway"}})]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h3",[t._v("Subscribe")]),e("p",[t._v("Used on the App Platform for Subscribing to Apps.")]),e("DemoSection",{attrs:{title:"Subscribe",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Button",{attrs:{variation:"subscribe",title:"Subscribe",price:"$4.99"}})]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h3",[t._v("Paypal")]),e("p",[t._v("Used on the Tip Page for Subscribing to Pro.")]),e("DemoSection",{attrs:{title:"Paypal",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Button",{attrs:{variation:"paypal",title:"Subscribe with PayPal",price:"$4.99"}})]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h3",[t._v("Download")]),e("p",[t._v("Used for Download Streamlabs OBS buttons.")]),e("DemoSection",{attrs:{title:"Download",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"slobs-download",title:"Download Streamlabs OBS"}}),e("Button",{attrs:{variation:"slobs-download-landing",osType:"windows"}}),e("Button",{attrs:{variation:"slobs-download-landing",osType:"mac"}})],1)]},proxy:!0}])})],1)]),e("div",{staticClass:"section"},[e("h2",[t._v("Square Buttons")]),e("p",[t._v("Used for add and subtract number inputs as well as login buttons.")]),e("DemoSection",{attrs:{title:"Square Buttons",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{type:"button",size:"square",variation:"default",icon:"add"}}),e("Button",{attrs:{type:"button",size:"square",variation:"default",icon:"subtract"}}),e("Button",{attrs:{type:"button",variation:"facebook",size:"square",icon:"facebook"}}),e("Button",{attrs:{type:"button",variation:"periscope",size:"square",icon:"periscope"}}),e("Button",{attrs:{type:"button",variation:"mixer",size:"square",icon:"mixer"}}),e("Button",{attrs:{type:"button",variation:"picarto",size:"square",icon:"picarto"}}),e("Button",{attrs:{type:"button",variation:"ultra",size:"square",icon:"ultra"}})],1)]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Navigation Buttons")]),e("p",[t._v("Used to bring you between different page states.")]),e("DemoSection",{attrs:{title:"Navigation Buttons",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("Button",{attrs:{variation:"navigation",icon:"back-alt",title:"Back to Listings"}})]},proxy:!0}])})],1),e("div",{staticClass:"section"},[e("h2",[t._v("Prime Button Text")]),e("p",[t._v("Used for prime button with text.")]),e("DemoSection",{attrs:{title:"Prime Button Text",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"s-button-container s-button-container--left"},[e("Button",{attrs:{variation:"prime-simple"}}),e("Button",{attrs:{variation:"prime-simple",primeTitle:"test"}})],1)]},proxy:!0}])})],1),t._m(1)])},w=[function(){var n=this,t=n._self._c;return n._self._setupProxy,t("div",{staticClass:"section"},[t("h1",[n._v("Buttons")]),t("p",[n._v(" Our button component is super flexible. It can act as type "),t("code",[n._v("button")]),n._v(", "),t("code",[n._v("a")]),n._v(" tag or "),t("code",[n._v("router-link")]),n._v(". Please note that you may need to use 'ButtonInput' rather than 'Button' to avoid issues. ")]),t("pre",[t("code",[n._v(`import { Button } from 'streamlabs-beaker';

components: {
  Button
}`)])])])},function(){var n=this,t=n._self._c;return n._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Prop")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("@click")]),t("td",[n._v("Function")]),t("td",[n._v("null")]),t("td",[n._v(" Emits a click function. If you are using an event modifier such as "),t("code",[n._v("prevent")]),n._v(", use "),t("code",[n._v("native")]),n._v(". For example "),t("code",[n._v("@click.native.prevent")]),n._v(". ")])]),t("tr",[t("td",[n._v("bgColor")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v("Used for background color.")])]),t("tr",[t("td",[n._v("textColor")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v("Used for text color.")])]),t("tr",[t("td",[n._v("icon")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" Use the endings of our custom icons. For example 'icon-settings' would be 'settings'. See icons page of the design system for a full list. ")])]),t("tr",[t("td",[n._v("iconPosition")]),t("td",[n._v("String")]),t("td",[n._v("left")]),t("td",[n._v(" Positions the icon left or right. If positioned right, the icon will have a left margin of 24px. ")])]),t("tr",[t("td",[n._v("iconImg")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" Takes image source string to use an image as an icon. Icon image will have a 14px width. ")])]),t("tr",[t("td",[n._v("title")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v("Main button text.")])]),t("tr",[t("td",[n._v("price")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v("Used for subscribe buttons in the App Store.")])]),t("tr",[t("td",[n._v("description")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" Used for Streamlabs OBS download buttons to describe the version, size and compatibility. ")])]),t("tr",[t("td",[n._v("href")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" Used if the the "),t("code",[n._v("type")]),n._v(" is an "),t("code",[n._v("a")]),n._v(" element (links). ")])]),t("tr",[t("td",[n._v("size")]),t("td",[n._v("String")]),t("td",[n._v("standard")]),t("td",[n._v(" Size of the button. Options are "),t("code",[n._v("small")]),n._v(", "),t("code",[n._v("large")]),n._v(", "),t("code",[n._v("square")]),n._v(", "),t("code",[n._v("fixed-width")]),n._v(", and "),t("code",[n._v("full-width")])])]),t("tr",[t("td",[n._v("state")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" State of the button. Options are "),t("code",[n._v("hover")]),n._v(", "),t("code",[n._v("focus")]),n._v(", "),t("code",[n._v("loading")]),n._v(" and "),t("code",[n._v("disabled")]),n._v(". ")])]),t("tr",[t("td",[n._v("type")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v("Set to string 'submit'.")])]),t("tr",[t("td",[n._v("to")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" Used if the the "),t("code",[n._v("type")]),n._v(" is a "),t("code",[n._v("router-link")]),n._v(". Define the path. ")])]),t("tr",[t("td",[n._v("tag")]),t("td",[n._v("String")]),t("td",[n._v("button")]),t("td",[n._v(" What type of element the component is. Options are "),t("code",[n._v("button")]),n._v(", "),t("code",[n._v("a")]),n._v(", "),t("code",[n._v("router-link")])])]),t("tr",[t("td",[n._v("target")]),t("td",[n._v("String")]),t("td",[n._v("_self")]),t("td",[n._v(" Used to set different targets for "),t("code",[n._v("a")]),n._v(" links, "),t("code",[n._v("_self")]),n._v(", "),t("code",[n._v("_blank")]),n._v(", "),t("code",[n._v("_parent")]),n._v(", "),t("code",[n._v("_top")])])]),t("tr",[t("td",[n._v("primeBgColor")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" You can use this prop when you set variation as "),t("code",[n._v("prime")]),n._v(". Option is only "),t("code",[n._v("white")]),n._v(". ")])]),t("tr",[t("td",[n._v("primeTitle")]),t("td",[n._v("String")]),t("td",[n._v("null")]),t("td",[n._v(" Used for prime button text. You can use this prop when you set variation as "),t("code",[n._v("prime-simple")])])]),t("tr",[t("td",[n._v("variation")]),t("td",[n._v("String")]),t("td",[n._v("default")]),t("td",[n._v(" The variation style of a button. Primary options are "),t("code",[n._v("default")]),n._v(", "),t("code",[n._v("action")]),n._v(", "),t("code",[n._v("prime")]),n._v(" and "),t("code",[n._v("warning")]),n._v(". Other options are "),t("code",[n._v("subscribe")]),n._v(", "),t("code",[n._v("paypal")]),n._v(", "),t("code",[n._v("download")]),n._v(", and "),t("code",[n._v("navigation")]),n._v(". Reward options are "),t("code",[n._v("rewards-standard")]),n._v(", "),t("code",[n._v("rewards-silver")]),n._v(", "),t("code",[n._v("rewards-gold")]),n._v(", "),t("code",[n._v("rewards-platinum")]),n._v(", "),t("code",[n._v("rewards-diamond")]),n._v(", and "),t("code",[n._v("rewards-legend")]),n._v(". Platform options are "),t("code",[n._v("facebook")]),n._v(", "),t("code",[n._v("mixer")]),n._v(", "),t("code",[n._v("twitch")]),n._v(", "),t("code",[n._v("youtube")]),n._v(", "),t("code",[n._v("periscope")]),n._v(", "),t("code",[n._v("picarto")]),n._v("and "),t("code",[n._v("paypal-blue")]),n._v(". ")])]),t("tr",[t("td",[n._v("slobsDownloadTitle")]),t("td",[n._v("String")]),t("td",[n._v("Download Streamlabs")]),t("td",[n._v("Used for slobs download landing button title.")])]),t("tr",[t("td",[n._v("osType")]),t("td",[n._v("String")]),t("td",[n._v("windows")]),t("td",[n._v(" Used for slobs download landing button icon. Options are "),t("code",[n._v("windows")]),n._v(" and "),t("code",[n._v("mac")]),n._v(". ")])])])])}],C=m(r,y,w,!1,null,"4164de1f",null,null);const U=C.exports;export{U as default};
//# sourceMappingURL=Buttons.ceec8354.js.map

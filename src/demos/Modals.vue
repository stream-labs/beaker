<template>
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
      <p>Used for basic modal.</p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;ModalComp
  :type=&quot;'basic'&quot;
  :title=&quot;'UI Modal'&quot;
  :subTitle=&quot;'Subtitle'&quot;
  :text=&quot;'Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.'&quot;&gt;
&lt;/ModalComp&gt;

&lt;Button
:variation=&quot;'default'&quot;
:title=&quot;'basic1'&quot;
 @click=&quot;$modal.show('modal-basic')&quot;&gt;
&lt;/Button&gt;
</code></pre>
        </div>
      </Accordion>

      <ModalComp
        :type="'basic'"
        :title="'UI Modal'"
        :subTitle="'Subtitle'"
        :text="
          'Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.'
        "
      ></ModalComp>

      <ModalComp
        :name="'modal-basic2'"
        :type="'basic'"
        :title="'UI Modal2'"
        :subTitle="'Subtitle2'"
        :text="
          'Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.'
        "
      ></ModalComp>

      <ModalComp
        :name="'modal-basic3'"
        :type="'basic'"
        :title="'UI Modal3'"
        :subTitle="'Subtitle3'"
        :text="
          'Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.'
        "
      >hey there</ModalComp>

      <div class="s-button-container--left">
        <Button :variation="'default'" :title="'modal basic1'" @click="$modal.show('modal-basic')"></Button>
        <Button :variation="'default'" :title="'modal basic2'" @click="$modal.show('modal-basic2')"></Button>
        <Button :variation="'default'" :title="'modal basic3'" @click="$modal.show('modal-basic3')"></Button>
      </div>
    </div>

    <div class="section">
      <h2>Modal Subscribe</h2>
      <p>Used once subscribe.</p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;ModalComp
  :name=&quot;'subscribe'&quot;
  :type=&quot;'subscribe'&quot;
  :title=&quot;'Streamlabs'&quot;
  :subTitle=&quot;'Never pay for GIFs and effects again!'&quot;
  :text=&quot;'Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.'&quot;
  :subscribeText=&quot;'galazy83 donated $50.00!'&quot;
  :subscribeMessage=&quot;'Thanks for the stream. Go CivRyan!'&quot;
  :notes=&quot;'You may cancel your subscription at any time.'&quot;&gt;
&lt;/ModalComp&gt;

&lt;Button
  :variation=&quot;'default'&quot;
  :title=&quot;'modal subscribe'&quot;
  @click=&quot;$modal.show('subscribe')&quot;&gt;
&lt;/Button&gt;
</code></pre>
        </div>
      </Accordion>

      <ModalComp
        :type="'subscribe'"
        :scrollable="true"
        :title="'Streamlabs'"
        :subTitle="'Never pay for GIFs and effects again!'"
        :text="
          'Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.'
        "
        :subscribeText="'galazy83 donated $50.00!'"
        :subscribeMessage="'Thanks for the stream. Go CivRyan!'"
        :notes="'You may cancel your subscription at any time.'"
      ></ModalComp>

      <div class="button-container button-container--left">
        <Button
          :variation="'default'"
          :title="'modal subscribe'"
          @click="$modal.show('modal-subscribe')"
        ></Button>
      </div>
    </div>

    <div class="section">
      <h2>Modal Redirect</h2>
      <p>Used for redirect.</p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;ModalComp
  :name=&quot;'redirect'&quot;
  :type=&quot;'redirect'&quot;
  :title=&quot;'Redirecting ...'&quot;
  :text=&quot;'Redirecting you to PayPal to update your method of payment. Click here if you have been waiting longer than 5 seconds.'&quot;&gt;
&lt;/ModalComp&gt;

&lt;Button
  :variation=&quot;'default'&quot;
  :title=&quot;'modal redirect'&quot;
  @click=&quot;$modal.show('redirect')&quot;&gt;
&lt;/Button&gt;
</code></pre>
        </div>
      </Accordion>

      <ModalComp
        :type="'redirect'"
        :title="'Redirecting ...'"
        :text="
          'Redirecting you to PayPal to update your method of payment. Click here if you have been waiting longer than 5 seconds.'
        "
      ></ModalComp>

      <div class="button-container button-container--left">
        <Button
          :variation="'default'"
          :title="'modal redirect'"
          @click="$modal.show('modal-redirect')"
        ></Button>
      </div>
    </div>

    <div class="section">
      <h2>Modal Confirm</h2>
      <p>Used when needed to let the user confirm.</p>

      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;ModalComp
  :name=&quot;'confirmation'&quot;
  :type=&quot;'confirmation'&quot;
  :width=&quot;400&quot;
  :subTitle=&quot;'Delete ‘Streamlabs Pillow’'&quot;
  :text=&quot;'Are you sure you want to delete the merch item ‘Streamlabs Pillow’? This action cannot be undone.'&quot;&gt;
&lt;/ModalComp&gt;

&lt;Button
  :variation=&quot;'warning'&quot;
  :title=&quot;'modal confirmation'&quot;
  @click=&quot;$modal.show('confirmation')&quot;&gt;
&lt;/Button&gt;
</code></pre>
        </div>
      </Accordion>

      <ModalComp
        :type="'confirmation'"
        :width="400"
        :subTitle="'Delete ‘Streamlabs Pillow’'"
        :text="
          'Are you sure you want to delete the merch item ‘Streamlabs Pillow’? This action cannot be undone.'
        "
        @confirm="() => {}"
        :confirmButtonText="'Delete'"
      ></ModalComp>

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

      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;ModalComp 
  :type=&quot;'welcome-prime'&quot; 
  :width=&quot;900&quot; 
  @onClickPrime=&quot;test&quot; 
  :hasPrimeCloseButton=&quot;true&quot;&gt;
&lt;/ModalComp&gt;

&lt;Button
  :variation=&quot;'default'&quot;
  :title=&quot;'modal welcome prime'&quot;
  @click=&quot;$modal.show('modal-welcome-prime')&quot;&gt;
&lt;/Button&gt;
</code></pre>
        </div>
      </Accordion>

      <ModalComp
        :type="'welcome-prime'"
        :width="900"
        @onClickPrime="test"
        :hasPrimeCloseButton="true"
      ></ModalComp>

      <div class="button-container button-container--left">
        <Button
          :variation="'default'"
          :title="'modal welcome prime'"
          @click="$modal.show('modal-welcome-prime')"
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
          <td>Callback function when confirmed (only in Modal Confirmation)</td>
        </tr>
        <tr>
          <td>confirmButtonText</td>
          <td>string</td>
          <td>Confirm</td>
          <td>Confirm button text (only in Modal Confirmation)</td>
        </tr>
        <tr>
          <td>buttonVariation</td>
          <td>string</td>
          <td>warning</td>
          <td>
            Pass in
            <code>action</code> if it's a confirmation that doesn't warrant a
            warning (only in Modal Confirmation). In Modal Subscribe default is
            <code>subscribe</code>. Can be set to
            <code>paypal</code> and
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
            <code>&lt;template #preview&gt;Custom Preview HTML&lt;template&gt;</code>
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
          <td>Callback function when click the button below (only in Modal Welcom Prime).</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import ModalComp from "./../components/ModalComp.vue";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Accordion,
    ModalComp,
    Button
  }
})
export default class Modals extends Vue {
  test() {
    console.log("test");
  }
}
</script>

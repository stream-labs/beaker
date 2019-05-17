<template>
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
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;div class=&quot;s-button-container s-button-container--left&quot;&gt;
  &lt;Button
    :variation=&quot;'default'&quot;
    :title=&quot;'Default'&quot;&gt;
    @click=&quot;'buttonClick'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'action'&quot;
    :title=&quot;'Action'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'warning'&quot;
    :title=&quot;'Warning'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'default'&quot;
    :title=&quot;'with icon'&quot;
    :icon=&quot;'settings'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'default'&quot;
    :title=&quot;'Color Change'&quot;
    :bgColor=&quot;'#000'&quot;
    :textColor=&quot;'#fff'&quot;&gt;
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </Accordion>
        <div class="s-button-container s-button-container--left">
          <Button
            :variation="'default'"
            :title="'Default'"
            :tag="'a'"
            :href="'https://laravel.com/docs/5.8/routing'"
            @click="reportSlobsDownloads"
          ></Button>

          <Button
            :variation="'action'"
            :title="'Action'"
            @click="buttonActionClick"
          ></Button>

          <Button :variation="'warning'" :title="'Warning'"></Button>

          <Button
            :variation="'default'"
            :title="'with icon'"
            :icon="'settings'"
          ></Button>

          <Button
            :variation="'default'"
            :title="'Color Change'"
            :bgColor="'#000'"
            :textColor="'#fff'"
          ></Button>

          <Button :variation="'prime'" :title="'Join Prime'"></Button>
        </div>
      </div>
      <div class="section">
        <h3>Disabled</h3>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;div class=&quot;s-button-container s-button-container--left&quot;&gt;
  &lt;Button
    :variation=&quot;'default'&quot;
    :state=&quot;'disabled'&quot;
    :title=&quot;'Default'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'action'&quot;
    :state=&quot;'disabled'&quot;
    :title=&quot;'Action'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'warning'&quot;
    :state=&quot;'disabled'&quot;
    :title=&quot;'Warning'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'default'&quot;
    :state=&quot;'disabled'&quot;
    :title=&quot;'with icon'&quot;
    :icon=&quot;'edit'&quot;&gt;
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </Accordion>
        <div class="s-button-container s-button-container--left">
          <Button
            :variation="'default'"
            :state="'disabled'"
            :title="'Default'"
          ></Button>

          <Button
            :variation="'action'"
            :state="'disabled'"
            :title="'Action'"
          ></Button>

          <Button
            :variation="'warning'"
            :state="'disabled'"
            :title="'Warning'"
          ></Button>

          <Button
            :variation="'default'"
            :state="'disabled'"
            :title="'with icon'"
            :icon="'edit'"
          ></Button>
        </div>
      </div>
      <div class="section">
        <h3>Focus</h3>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;div class=&quot;s-button-container s-button-container--left&quot;&gt;
  &lt;Button
    :variation=&quot;'default'&quot;
    :state=&quot;'focused'&quot;
    :title=&quot;'Default'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'action'&quot;
    :state=&quot;'focused'&quot;
    :title=&quot;'Action'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'warning'&quot;
    :state=&quot;'focused'&quot;
    :title=&quot;'Warning'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'default'&quot;
    :state=&quot;'focused'&quot;
    :title=&quot;'with icon'&quot;
    :icon=&quot;'edit'&quot;&gt;
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </Accordion>
        <div class="s-button-container s-button-container--left">
          <Button
            :variation="'default'"
            :state="'focused'"
            :title="'Default'"
          ></Button>

          <Button
            :variation="'action'"
            :state="'focused'"
            :title="'Action'"
          ></Button>

          <Button
            :variation="'warning'"
            :state="'focused'"
            :title="'Warning'"
          ></Button>

          <Button
            :variation="'default'"
            :state="'focused'"
            :title="'with icon'"
            :icon="'edit'"
          ></Button>
        </div>
      </div>
      <div class="section">
        <h3>Loading</h3>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;div class=&quot;s-button-container s-button-container--left&quot;&gt;
  &lt;Button
    :variation=&quot;'default'&quot;
    :state=&quot;'loading'&quot;
    :title=&quot;'Default'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'action'&quot;
    :state=&quot;'loading'&quot;
    :title=&quot;'Action'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'warning'&quot;
    :state=&quot;'loading'&quot;
    :title=&quot;'Warning'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation=&quot;'default'&quot;
    :state=&quot;'loading'&quot;
    :title=&quot;'with icon'&quot;
    :icon=&quot;'edit'&quot;&gt;
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </Accordion>
        <div class="s-button-container s-button-container--left">
          <Button
            :variation="'default'"
            :state="'loading'"
            :title="'Default'"
          ></Button>

          <Button :variation="'action'" :state="'loading'" :title="'Action'"
            >Action</Button
          >

          <Button :variation="'warning'" :state="'loading'" :title="'Warning'"
            >Warning</Button
          >

          <Button
            :variation="'default'"
            :state="'loading'"
            :title="'with icon'"
            :icon="'recent-events'"
          ></Button>
        </div>
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
        ></Button>
      </div>
    </div>
    <div class="section">
      <h2>Small Buttons</h2>
      <p>
        Small is the size used on Streamlabs OBS. It is slightly smaller than
        our standard button.
      </p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;div class=&quot;s-button-container s-button-container--left&quot;&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'small'&quot;
    :variation=&quot;'default'&quot;
    :title=&quot;'Default'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'small'&quot;
    :variation=&quot;'action'&quot;
    :title=&quot;'Action'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'small'&quot;
    :variation=&quot;'warning'&quot;
    :title=&quot;'Warning'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'small'&quot;
    :variation=&quot;'default'&quot;
    :title=&quot;'With Icon'&quot;
    :icon=&quot;'image'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :variation="'rewards-gold'"
    :icon-img="'https://cdn.streamlabs.com/streamer-loyalty/gold-status-circle.svg'"
    :size="'small'"
    :title="'Rewards'"&gt;
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </Accordion>
      <div class="s-button-container s-button-container--left">
        <Button
          :type="'button'"
          :size="'small'"
          :variation="'default'"
          :title="'Default'"
        ></Button>

        <Button
          :type="'button'"
          :size="'small'"
          :variation="'action'"
          :title="'Action'"
        ></Button>

        <Button
          :type="'button'"
          :size="'small'"
          :variation="'warning'"
          :title="'Warning'"
        ></Button>

        <Button
          :type="'button'"
          :size="'small'"
          :variation="'default'"
          :title="'With Icon'"
          :icon="'image'"
        ></Button>

        <Button
          :variation="'prime'"
          :title="'Join Prime'"
          :size="'small'"
        ></Button>

        <Button
          :variation="'rewards-gold'"
          :icon-img="
            'https://cdn.streamlabs.com/streamer-loyalty/gold-status-circle.svg'
          "
          :size="'small'"
          :title="'Rewards'"
        ></Button>
      </div>
    </div>
    <div class="section">
      <h2>Large Buttons</h2>
      <p>
        Used on website marketing pages and for the Donate button on the tip
        page.
      </p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;div class=&quot;s-button-container s-button-container--left&quot;&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'large'&quot;
    :variation=&quot;'default'&quot;
    :title=&quot;'Default'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'large'&quot;
    :variation=&quot;'action'&quot;
    :title=&quot;'Action'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'large'&quot;
    :variation=&quot;'warning'&quot;
    :title=&quot;'Warning'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'large'&quot;
    :variation=&quot;'default'&quot;
    :title=&quot;'With Icon'&quot;
    :icon=&quot;'image'&quot;&gt;
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </Accordion>
      <div class="s-button-container s-button-container--left">
        <Button
          :type="'button'"
          :size="'large'"
          :variation="'default'"
          :title="'Default'"
        ></Button>

        <Button
          :type="'button'"
          :size="'large'"
          :variation="'action'"
          :title="'Action'"
        ></Button>

        <Button
          :type="'button'"
          :size="'large'"
          :variation="'warning'"
          :title="'Warning'"
        ></Button>

        <Button
          :type="'button'"
          :size="'large'"
          :variation="'default'"
          :title="'With Icon'"
          :icon="'image'"
        ></Button>
      </div>
    </div>
    <div class="section">
      <h2>Fixed Width Buttons</h2>
      <p>Used throughout website Dashboard. Width is fixed at 96px.</p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;div class=&quot;s-button-container s-button-container--left&quot;&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'fixed-width'&quot;
    :variation=&quot;'default'&quot;
    :title=&quot;'Default'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'fixed-width'&quot;
    :variation=&quot;'action'&quot;
    :title=&quot;'Action'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'fixed-width'&quot;
    :variation=&quot;'warning'&quot;
    :title=&quot;'Warning'&quot;&gt;
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'fixed-width'&quot;
    :variation=&quot;'default'&quot;
    :title=&quot;'With Icon'&quot;
    :icon=&quot;'image'&quot;&gt;
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </Accordion>
      <div class="s-button-container s-button-container--left">
        <Button
          :type="'button'"
          :size="'fixed-width'"
          :variation="'default'"
          :title="'Default'"
        ></Button>

        <Button
          :type="'button'"
          :size="'fixed-width'"
          :variation="'action'"
          :title="'Action'"
        ></Button>

        <Button
          :type="'button'"
          :size="'fixed-width'"
          :variation="'warning'"
          :title="'Warning'"
        ></Button>

        <Button
          :type="'button'"
          :size="'fixed-width'"
          :variation="'default'"
          :title="'With Icon'"
          :icon="'image'"
        ></Button>
      </div>
    </div>

    <div class="section">
      <h2>Full-Width Buttons</h2>
      <div class="section">
        <h3>Default</h3>
        <p>Used within cards and panels in the Dashboard.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Button
  :size=&quot;'full-width'&quot;
  :variation=&quot;'default'&quot;
  :title=&quot;'Start Giveaway'&quot;&gt;
&lt;/Button&gt;</code></pre>
          </div>
        </Accordion>
        <Button
          :size="'full-width'"
          :variation="'default'"
          :title="'Start Giveaway'"
        ></Button>
      </div>
      <div class="section">
        <h3>Subscribe</h3>
        <p>Used on the App Platform for Subscribing to Apps.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Button
  :variation=&quot;'subscribe'&quot;
  :title=&quot;'Subscribe'&quot;
  :price=&quot;'$4.99'&quot;&gt;
&lt;/Button&gt;</code></pre>
          </div>
        </Accordion>
        <Button
          :variation="'subscribe'"
          :title="'Subscribe'"
          :price="'$4.99'"
        ></Button>
      </div>
      <div class="section">
        <h3>Paypal</h3>
        <p>Used on the Tip Page for Subscribing to Pro.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Button
  :variation=&quot;'paypal'&quot;
  :title=&quot;'Subscribe with PayPal'&quot;
  :price=&quot;'$4.99'&quot;&gt;
&lt;/Button&gt;</code></pre>
          </div>
        </Accordion>
        <Button
          :variation="'paypal'"
          :title="'Subscribe with PayPal'"
          :price="'$4.99'"
        ></Button>
      </div>
      <div class="section">
        <h3>Download</h3>
        <p>Used for Download Streamlabs OBS buttons.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Button
  :variation=&quot;'slobs-download'&quot;
  :title=&quot;'Download Streamlabs OBS'&quot;
  :description=&quot;'Windows 7+ 245.8MB'&quot;&gt;
&lt;/Button&gt;</code></pre>
          </div>
        </Accordion>
        <Button
          :variation="'slobs-download'"
          :title="'Download Streamlabs OBS'"
          :description="'Windows 7+ 245.8MB'"
        ></Button>
      </div>
    </div>
    <div class="section">
      <h2>Square Buttons</h2>
      <p>Used for add and subtract number inputs as well as login buttons.</p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;div class=&quot;s-button-container s-button-container--left&quot;&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'square'&quot;
    :variation=&quot;'default'&quot;
    :icon=&quot;'add'&quot;&gt;
  &lt;/Button&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :size=&quot;'square'&quot;
    :variation=&quot;'default'&quot;
    :icon=&quot;'subtract'&quot;&gt;
  &lt;/Button&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'facebook'&quot;
    :size=&quot;'square'&quot;
    :icon=&quot;'facebook'&quot;&gt;
  &lt;/Button&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'periscope'&quot;
    :size=&quot;'square'&quot;
    :icon=&quot;'periscope'&quot;&gt;
  &lt;/Button&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'mixer'&quot;
    :size=&quot;'square'&quot;
    :icon=&quot;'mixer'&quot;&gt;
  &lt;/Button&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'picarto'&quot;
    :size=&quot;'square'&quot;
    ::icon=&quot;'picarto'&quot;&gt;
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </Accordion>
      <div class="s-button-container s-button-container--left">
        <Button
          :type="'button'"
          :size="'square'"
          :variation="'default'"
          :icon="'add'"
        ></Button>
        <Button
          :type="'button'"
          :size="'square'"
          :variation="'default'"
          :icon="'subtract'"
        ></Button>
        <Button
          :type="'button'"
          :variation="'facebook'"
          :size="'square'"
          :icon="'facebook'"
        ></Button>
        <Button
          :type="'button'"
          :variation="'periscope'"
          :size="'square'"
          :icon="'periscope'"
        ></Button>
        <Button
          :type="'button'"
          :variation="'mixer'"
          :size="'square'"
          :icon="'mixer'"
        ></Button>
        <Button
          :type="'button'"
          :variation="'picarto'"
          :size="'square'"
          :icon="'picarto'"
        ></Button>
      </div>
    </div>
    <div class="section">
      <h2>Navigation Buttons</h2>
      <p>Used to bring you between different page states.</p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;Button
  :variation=&quot;'navigation'&quot;
  :icon=&quot;'back'&quot;
  :title=&quot;'Back to Listings'&quot;&gt;
&lt;/Button&gt;</code></pre>
        </div>
      </Accordion>
      <Button
        :variation="'navigation'"
        :icon="'back-alt'"
        :title="'Back to Listings'"
      ></Button>
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
          <td>variation</td>
          <td>String</td>
          <td>default</td>
          <td>
            The variation style of a button. Primary options are
            <code>default</code>, <code>action</code>, <code>prime</code> and
            <code>warning</code>. Other options are <code>subscribe</code>,
            <code>paypal</code>, <code>download</code> and
            <code>navigation</code>. Platform options are <code>facebook</code>,
            <code>mixer</code>, <code>twitch</code>, <code>youtube</code>,
            <code>periscope</code>, <code>picarto</code>and
            <code>paypal-blue</code>.
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

@Component({
  components: {
    Accordion,
    Button
  }
})
export default class Forms extends Vue {
  isLoading = true;
  isLoadingExample = false;

  buttonClick() {
    alert("Button clicked");
  }

  reportSlobsDownloads() {
    console.log("test");
  }

  buttonActionClick() {
    alert("Button clicked");
  }
}
</script>

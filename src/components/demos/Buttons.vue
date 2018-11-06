<template>
  <div>
    <div class="section">
      <h1>Buttons</h1>
      <p>Our button component is super flexible. It can act as type button, a tag or router-link.</p>
    </div>
    <div class="section">
      <h2>Default Buttons</h2>
      <p>Used throughout website Dashboard and Streamlabs OBS.</p>
      <div class="section">
        <h3>Active</h3>
        <div class="button-container button-container--left">
          <Button
            :variation="'default'">
            Default
          </Button>

          <Button
            :variation="'action'">
            Action
          </Button>

          <Button
            :variation="'warning'">
            Warning
          </Button>

          <Button
            :variation="'default'">
            <i class="icon-settings"></i> with icon
          </Button>
        </div>

        <Accordion
          :openedTitle="'Hide Code'"
          :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;div class=&quot;button-container button-container--left&quot;&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'default'&quot;&gt;
    Default
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'action'&quot;&gt;
    Action
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'warning'&quot;&gt;
    Warning
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'default'&quot;&gt;
    &lt;i class=&quot;icon-settings&quot;&gt;&lt;/i&gt; with icon
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </Accordion>
      </div>
      <div class="section">
        <h3>Disabled</h3>
        <div class="button-container button-container--left">
          <Button
            :variation="'default'"
            :state="'disabled'">
            Default
          </Button>

          <Button
            :variation="'action'"
            :state="'disabled'">
            Action
          </Button>

          <Button
            :variation="'warning'"
            :state="'disabled'">
            Warning
          </Button>

          <Button
            :variation="'default'"
            :state="'disabled'">
            <i class="icon-settings"></i> with icon
          </Button>
        </div>
        <Accordion
          :openedTitle="'Hide Code'"
          :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;div class=&quot;button-container button-container--left&quot;&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'default'&quot;
    :state=&quot;'disabled'&quot;&gt;
    Default
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'action'&quot;
    :state=&quot;'disabled'&quot;&gt;
    Action
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'warning'&quot;
    :state=&quot;'disabled'&quot;&gt;
    Warning
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'default'&quot;
    :state=&quot;'disabled'&quot;&gt;
    &lt;i class=&quot;icon-settings&quot;&gt;&lt;/i&gt; with icon
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
          </div>
        </Accordion>
      </div>
      <div class="section">
        <h3>Loading</h3>
        <div class="button-container button-container--left">
          <Button
            :variation="'default'"
            :state="'loading'">
            Default
          </Button>

          <Button
            :variation="'action'"
            :state="'loading'">
            Action
          </Button>

          <Button
            :variation="'warning'"
            :state="'loading'">
            Warning
          </Button>

          <Button
            :variation="'default'"
            :state="'loading'">
            <i class="icon-settings"></i> with icon
          </Button>
        </div>
        <p>Click <a @click="isLoadingExample = !isLoadingExample">here</a> to test.</p>
        <Button
          :class="{ 'is-loading': isLoadingExample }"
          :type="'button'"
          :variation="'default'">
          <i class="icon-settings"></i>With Icon
        </Button>
      </div>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;div class=&quot;button-container button-container--left&quot;&gt;
  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'default'&quot;
    :state=&quot;'loading'&quot;&gt;
    Default
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'action'&quot;
    :state=&quot;'loading'&quot;&gt;
    Action
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'warning'&quot;
    :state=&quot;'loading'&quot;&gt;
    Warning
  &lt;/Button&gt;

  &lt;Button
    :type=&quot;'button'&quot;
    :variation=&quot;'default'&quot;
    :state=&quot;'loading'&quot;&gt;
    &lt;i class=&quot;icon-settings&quot;&gt;&lt;/i&gt; with icon
  &lt;/Button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </Accordion>
    </div>
    <div class="section">
      <h2>Large Buttons</h2>
      <p>Used on website marketing pages and for the Donate button on the tip page.</p>
      <div class="button-container button-container--left">
        <Button
          :type="'button'"
          :size="'large'"
          :variation="'default'">
          Default
        </Button>

        <Button
          :type="'button'"
          :size="'large'"
          :variation="'action'">
          Action
        </Button>

        <Button
          :type="'button'"
          :size="'large'"
          :variation="'warning'">
          Warning
        </Button>

        <Button
          :type="'button'"
          :size="'large'"
          :variation="'default'">
          <i class="icon-settings"></i> with icon
        </Button>
      </div>
    </div>
    <div class="section">
      <h2>Full-Width Buttons</h2>
      <div class="section">
        <h3>Default</h3>
        <p>Used within cards and panels in the Dashboard.</p>
        <button class="button button--default button--full-width"><span>Subscribe</span></button>
      </div>
      <div class="section">
        <h3>Large</h3>
        <p>Used on the App Platform for Subscribing to Apps.</p>
        <button class="button button--large-full-width"><span>Subscribe</span><span>$4.99/mo</span></button>
      </div>
    </div>
    <div class="section">
      <h2>Square Buttons</h2>
      <p>Used for add and subtract number inputs as well as login buttons.</p>
      <div class="button-container button-container--left">
        <Button
          :type="'button'"
          :size="'square'">
          <i class="icon-add"></i>
        </Button>
        <Button
          :type="'button'"
          :size="'square'">
          <span><i class="icon-subtract"></i></span>
        </Button>
        <Button
          :type="'button'"
          :variation="'facebook'"
          :size="'square'">
          <i class="fab fa-facebook"></i>
        </Button>
        <Button
          :type="'button'"
          :variation="'periscope'"
          :size="'square'">
          <i class="fab fa-periscope"></i>
        </Button>
        <Button
          :type="'button'"
          :variation="'mixer'"
          :size="'square'">
          <img src="./../../assets/imgs/platforms/mixer.svg">
        </Button>
        <Button
          :type="'button'"
          :variation="'picarto'"
          :size="'square'">
          <img src="./../../assets/imgs/platforms/picarto.png">
        </Button>
      </div>
    </div>
    <div class="section">
      <h2>Navigation Buttons</h2>
      <p>Used to bring you between different page states.</p>
      <div class="button-container button-container--left">
        <button class="button button--navigation"><span><i class="icon-back"></i>Back</span></button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../Accordion.vue";
import Button from "./../Button.vue";

@Component({
  components: {
    Accordion,
    Button
  }
})
export default class Forms extends Vue {
  isLoading = true;
  isLoadingExample = false;
  noPadding = true;
}
</script>
